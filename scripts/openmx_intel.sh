#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash openmx_intel.sh
# tested on ubuntu 22.04

# exit upon any command failure
set -e

OPENMX_VER="3.9.9"
MINOR_VER="3.9"
PATCH_URL="https://www.openmx-square.org/bugfixed/21Oct17/patch${OPENMX_VER}.tar.gz"
DOWNLOAD_URL="https://www.openmx-square.org/openmx${MINOR_VER}.tar.gz"
INSTALL_DIR="${HOME}/openmx/${OPENMX_VER}"
NUM_PROCS=$(nproc)

BUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')
CWD=${PWD}
mkdir ${BUILD_DIR} && cd $_

source /opt/intel/oneapi/setvars.sh

wget ${DOWNLOAD_URL}
tar -xf openmx${MINOR_VER}.tar.gz
rm openmx${MINOR_VER}.tar.gz
cd openmx${MINOR_VER}/source
wget ${PATCH_URL}
tar -xf patch${OPENMX_VER}.tar.gz
rm patch${OPENMX_VER}.tar.gz
mv kpoint.in ../work/

# edit makefile
# MKLROOT = /opt/intel/mkl
# CC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include
# FC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp
# LIB = -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore

sed -i 's/^\s*MKLROOT\s*=.*/MKLROOT = \/opt\/intel\/oneapi\/mkl\/2023\.1\.0/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile
sed -i 's/^\s*CC\s*=.*/CC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}\/include\/fftw -I${MKLROOT}\/include/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile
sed -i 's/^\s*FC\s*=.*/FC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile
sed -i 's/^\s*LIB\s*=.*/LIB = -L${MKLROOT}\/lib\/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -lifcore -lmkl_blacs_intelmpi_lp64 -liomp5 -lpthread -lm -ldl/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile

make DosMain
make -j${NUM_PROCS} all
sudo make install
mpiicc bandgnu13.c -lm -o bandgnu13
cp bandgnu13 ../work/

if [ ! -d ${INSTALL_DIR} ]; then
  mkdir -p ${INSTALL_DIR}
fi

cd ${CWD}
cp -r ${BUILD_DIR}/openmx${MINOR_VER}/* ${INSTALL_DIR}
rm -rf ${BUILD_DIR}

# run tests (calculations need to be launched from ${INSTALL_DIR}/work)
# cd ${INSTALL_DIR}/work
# source /opt/intel/oneapi/setvars.sh
# export OMP_NUM_THREADS=1
# mpirun -np ${NUM_PROCS} ./openmx -runtest
