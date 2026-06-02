#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash openmx_gnu.sh
# tested on ubuntu 24.04

# exit upon any command failure
set -e

OPENMX_VER="4.0"
OPENMX_PATCH_VER="4.0.1"
DOWNLOAD_URL="https://www.openmx-square.org/openmx${OPENMX_VER}.tar.gz"
PATCH_URL="https://www.openmx-square.org/bugfixed/26May08/patch${OPENMX_PATCH_VER}.tar.gz"
INSTALL_DIR="${HOME}/openmx${OPENMX_PATCH_VER}"
NUM_PROCS=$(nproc)

SUDO_PREFIX=""
if [ "$EUID" -ne 0 ]; then
  SUDO_PREFIX="sudo "
fi

BUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')
CWD=${PWD}
mkdir ${BUILD_DIR} && cd $_

${SUDO_PREFIX}apt update
${SUDO_PREFIX}apt install --no-install-recommends -y \
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

wget -q ${DOWNLOAD_URL}
tar -xf openmx${OPENMX_VER}.tar.gz
rm openmx${OPENMX_VER}.tar.gz
cd openmx${OPENMX_VER}/source
wget -q ${PATCH_URL}
tar -xf patch${OPENMX_PATCH_VER}.tar.gz
rm patch${OPENMX_PATCH_VER}.tar.gz
mv GaAs.dat ../work/

# edit makefile
# to find specific paths try: apt search fftw3; dpkg -L libfftw3-dev; ompi_info

# CC = mpicc -O3 -ffast-math -fcommon -fopenmp
# FC = mpif90 -O3 -ffast-math -fallow-argument-mismatch -fopenmp
# LIB = -lfftw3 -lmpi -lmpi_mpifh -lscalapack -llapack -lblas -lgfortran
sed -i 's/^\s*CC\s*=.*/CC = mpicc -O3 -ffast-math -fcommon -fopenmp/' ${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile
sed -i '/^\s*MKLROOT/d' ${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile
sed -i 's/^\s*FC\s*=.*/FC = mpif90 -O3 -ffast-math -fallow-argument-mismatch -fopenmp/' ${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile
sed -i 's/^\s*LIB\s*=.*/LIB = -lfftw3 -lmpi -lmpi_mpifh -lscalapack -llapack -lblas -lgfortran/' ${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile

make all  # have issues with parallel make
make install

if [ ! -d ${INSTALL_DIR} ]; then
  ${SUDO_PREFIX}mkdir -p ${INSTALL_DIR}
fi

${SUDO_PREFIX}cp -r ${BUILD_DIR}/openmx${OPENMX_VER}/* ${INSTALL_DIR}
rm -rf ${BUILD_DIR}

# run tests (calculations need to be launched from ${INSTALL_DIR}/work)
# cd ${INSTALL_DIR}/work
# mpirun -np ${NUM_PROCS} ./openmx -runtest -nt 1
cd ${CWD}
