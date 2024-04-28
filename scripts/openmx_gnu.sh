#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash openmx_gnu.sh
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

sudo apt update && sudo apt upgrade -y
sudo apt install --no-install-recommends -y \
  autoconf \
  build-essential \
  ca-certificates \
  gfortran \
  libblas3 \
  libopenblas-dev \
  libc6 \
  libfftw3-dev \
  libgcc-s1 \
  liblapack-dev \
  libopenmpi-dev \
  libscalapack-openmpi-dev \
  libelpa-dev \
  wget

if ! [ -f /usr/lib/x86_64-linux-gnu/libscalapack.so ] ; then
  if ! [ -h /usr/lib/x86_64-linux-gnu/libscalapack.so ] ; then
    sudo ln -s /usr/lib/x86_64-linux-gnu/libscalapack-openmpi.so /usr/lib/x86_64-linux-gnu/libscalapack.so
  fi
fi

wget ${DOWNLOAD_URL}
tar -xf openmx${MINOR_VER}.tar.gz
rm openmx${MINOR_VER}.tar.gz
cd openmx${MINOR_VER}/source
wget ${PATCH_URL}
tar -xf patch${OPENMX_VER}.tar.gz
rm patch${OPENMX_VER}.tar.gz
mv kpoint.in ../work/

# edit makefile
# to find specific paths try: apt search fftw3; dpkg -L libfftw3-dev; ompi_info

# CC = mpicc -O3 -ffast-math -fcommon -fopenmp
# FC = mpif90 -O3 -ffast-math -fallow-argument-mismatch -fopenmp
# LIB = -lfftw3 -lmpi -lmpi_mpifh -lscalapack -llapack -lblas -lgfortran
sed -i 's/^\s*CC\s*=.*/CC = mpicc -O3 -ffast-math -fcommon -fopenmp/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile
sed -i '/^\s*MKLROOT/d' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile
sed -i 's/^\s*FC\s*=.*/FC = mpif90 -O3 -ffast-math -fallow-argument-mismatch -fopenmp/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile
sed -i 's/^\s*LIB\s*=.*/LIB = -lfftw3 -lmpi -lmpi_mpifh -lscalapack -llapack -lblas -lgfortran/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile

make DosMain
make -j${NUM_PROCS} all
sudo make install
mpicc bandgnu13.c -lm -o bandgnu13
cp bandgnu13 ../work/

if [ ! -d ${INSTALL_DIR} ]; then
  mkdir -p ${INSTALL_DIR}
fi

cp -r ${BUILD_DIR}/openmx${MINOR_VER}/* ${INSTALL_DIR}
rm -rf ${BUILD_DIR}

# run tests (calculations need to be launched from ${INSTALL_DIR}/work)
# cd ${INSTALL_DIR}/work
# export OMP_NUM_THREADS=1
# mpirun -np ${NUM_PROCS} ./openmx -runtest
cd ${CWD}
