#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash openmx_intel.sh
# tested on ubuntu 24.04

# exit upon any command failure
set -e

OPENMX_VER="4.0"
OPENMX_PATCH_VER="4.0.1"
DOWNLOAD_URL="https://www.openmx-square.org/openmx${OPENMX_VER}.tar.gz"
PATCH_URL="https://www.openmx-square.org/bugfixed/26May08/patch${OPENMX_PATCH_VER}.tar.gz"
INSTALL_DIR="${HOME}/openmx${OPENMX_PATCH_VER}"
NUM_PROCS=$(nproc)
ONEAPI_ROOT=/opt/intel-2025.3.1

SUDO_PREFIX=""
if [ "$EUID" -ne 0 ]; then
  SUDO_PREFIX="sudo "
fi

BUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')
CWD=${PWD}
mkdir ${BUILD_DIR} && cd $_

# install oneapi deps
${SUDO_PREFIX}apt update
${SUDO_PREFIX}apt install -y --no-install-recommends \
  ca-certificates \
  gawk \
  g++ \
  gcc \
  gfortran \
  ncurses-term \
  wget

# install oneapi
pkgs=(
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/233a8b7a-ec95-4e51-bc5f-9dcd4f0d1dc3/intel-onetbb-2022.3.1.402_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/0d61d48a-4fe8-4cb2-bd9d-94d2c19c6227/intel-dpcpp-cpp-compiler-2025.3.2.26_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/3e53d136-2870-4836-adb1-892b558fa34a/intel-fortran-compiler-2025.3.2.25_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/c477188f-0ba1-4213-8945-22f16ebc8ecb/intel-oneccl-2021.17.2.6_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/6a17080f-f0de-41b9-b587-52f92512c59a/intel-onemkl-2025.3.1.11_offline.sh"
)

for pkg in "${pkgs[@]}"; do
    wget -q $pkg
    ${SUDO_PREFIX}sh ./$( basename $pkg ) -a --silent --eula accept --install-dir $ONEAPI_ROOT
    rm -f $( basename $pkg )
done

source ${ONEAPI_ROOT}/setvars.sh

wget -q ${DOWNLOAD_URL}
tar -xf openmx${OPENMX_VER}.tar.gz
rm openmx${OPENMX_VER}.tar.gz
cd openmx${OPENMX_VER}/source
wget -q ${PATCH_URL}
tar -xf patch${OPENMX_PATCH_VER}.tar.gz
rm patch${OPENMX_PATCH_VER}.tar.gz
mv GaAs.dat ../work/

# edit the makefile
# MKLROOT = /opt/intel-2025.3.1/mkl/2025.3
# CC = mpiicx -O3 -qopenmp -fcommon -Wno-error=implicit-function-declaration -ipo  -I${MKLROOT}/include/fftw -I${MKLROOT}/include
# FC = mpiifx -O3 -qopenmp -ipo
# LIB = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -lifcore -lmkl_blacs_intelmpi_lp64 -liomp5 -lpthread -lm -ldl

sed -i "s|^[[:space:]]*MKLROOT[[:space:]]*=.*|MKLROOT = ${ONEAPI_ROOT}/mkl/2025.3|" "${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile"
sed -i 's|^[[:space:]]*CC[[:space:]]*=.*|CC = mpiicx -O3 -qopenmp -fcommon -Wno-error=implicit-function-declaration -ipo -I${MKLROOT}/include/fftw -I${MKLROOT}/include|' "${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile"
sed -i 's|^[[:space:]]*FC[[:space:]]*=.*|FC = mpiifx -O3 -qopenmp -ipo|' "${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile"
sed -i 's|^[[:space:]]*LIB[[:space:]]*=.*|LIB = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -lifcore -lmkl_blacs_intelmpi_lp64 -liomp5 -lpthread -lm -ldl|' "${BUILD_DIR}/openmx${OPENMX_VER}/source/makefile"

make all
make install

if [ ! -d ${INSTALL_DIR} ]; then
  ${SUDO_PREFIX}mkdir -p ${INSTALL_DIR}
fi

cd ${CWD}
${SUDO_PREFIX}cp -r ${BUILD_DIR}/openmx${OPENMX_VER}/* ${INSTALL_DIR}
rm -rf ${BUILD_DIR}

# run tests (calculations need to be launched from ${INSTALL_DIR}/work)
# cd ${INSTALL_DIR}/work
# source ${ONEAPI_ROOT}/setvars.sh
# mpirun -np ${NUM_PROCS} ./openmx -runtest -nt 1
