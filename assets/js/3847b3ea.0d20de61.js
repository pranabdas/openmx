"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([["960"],{3755:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>m,assets:()=>p,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"setup","title":"Setting up OpenMX","description":"Please refer to the OpenMX website for detailed","source":"@site/docs/setup.md","sourceDirName":".","slug":"/","permalink":"/openmx/","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/openmx/blob/main/docs/setup.md","tags":[],"version":"current","frontMatter":{"title":"Setting up OpenMX","sidebar_label":"Setup","slug":"/","keywords":["openmx","first principles calculation","density functional theory","DFT","bandstructure calculation"]},"sidebar":"docs","next":{"title":"Silicon bandstructure","permalink":"/openmx/silicon"}}'),s=l("5893"),a=l("65"),t=l("5056");let o={title:"Setting up OpenMX",sidebar_label:"Setup",slug:"/",keywords:["openmx","first principles calculation","density functional theory","DFT","bandstructure calculation"]},r=void 0,p={},c=[{value:"Using Intel libraries",id:"using-intel-libraries",level:3},{value:"Install Intel oneAPI",id:"install-intel-oneapi",level:3},{value:"Using GNU libraries",id:"using-gnu-libraries",level:3},{value:"Verify installation",id:"verify-installation",level:3},{value:"Example PBS script",id:"example-pbs-script",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Please refer to the ",(0,s.jsx)(n.a,{href:"http://www.openmx-square.org",children:"OpenMX website"})," for detailed\ndocumentations. The installation options will depend on your system architecture\nand available libraries. I am installing OpenMX version ",(0,s.jsx)(n.strong,{children:"3.9.9"})," at one of NUS\nHPC clusters."]}),"\n",(0,s.jsx)(n.p,{children:"Get the source code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"wget http://t-ozaki.issp.u-tokyo.ac.jp/openmx3.9.tar.gz\nwget http://www.openmx-square.org/bugfixed/21Oct17/patch3.9.9.tar.gz\ntar -zxvf openmx3.9.tar.gz\nrm openmx3.9.tar.gz\nmv patch3.9.9.tar.gz openmx3.9/source\ncd openmx3.9/source\ntar -zxvf patch3.9.9.tar.gz\nrm patch3.9.9.tar.gz\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-intel-libraries",children:"Using Intel libraries"}),"\n",(0,s.jsx)(n.p,{children:"If you already have Intel OneAPI/Math Kernel libraries installed, load the\nrespective modulefiles or set environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"module load xe_2015\n"})}),"\n",(0,s.jsx)(n.p,{children:"You may check the necessary environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo $LD_LIBRARY_PATH\necho $MKLROOT\nenv\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"makefile"})," and specify ",(0,s.jsx)(n.code,{children:"CC"}),", ",(0,s.jsx)(n.code,{children:"FC"}),", and ",(0,s.jsx)(n.code,{children:"LIB"})," flags according to your\nsystem and libraries. I am using MPI and Intel Math Kernel Libraries."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CC = mpicc -O3 -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include\nFC = mpif90 -O3 -qopenmp -I${MKLROOT}/include/fftw\nLIB= -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Currently I found some issues with the Intel license server while using\n",(0,s.jsx)(n.code,{children:"xe_2015"})," module at NUS HPC clusters. After the module load, you need to export\nfollowing ",(0,s.jsx)(n.code,{children:"ENV"})," variable:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export "INTEL_LICENSE_FILE=/app1/centos6.3/Intel/xe_2015/composer_xe_2015.3.187/licenses"\n'})})]}),"\n",(0,s.jsxs)(n.p,{children:["If you have ",(0,s.jsx)(n.code,{children:"xe_2018"})," (instead of ",(0,s.jsx)(n.code,{children:"xe_2015"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"module load xe_2018\n"})}),"\n",(0,s.jsx)(n.p,{children:"Use following flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MKLROOT = /opt/intel/mkl\nCC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include\nFC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp\nLIB= -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once you are set, compile and build the executables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make -j8 all\nmake install\n"})}),"\n",(0,s.jsx)(n.p,{children:"Compile the DosMain program:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make DosMain\n"})}),"\n",(0,s.jsxs)(n.p,{children:["There is ",(0,s.jsx)(n.code,{children:"bandgnu13.c"})," in the source directory, which resulted in error. It\nneeds be compiled using ",(0,s.jsx)(n.code,{children:"gcc"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"module purge\ngcc bandgnu13.c -lm -o bandgnu13\ncp bandgnu13 ../work/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Optionally you may add the ",(0,s.jsx)(n.code,{children:"openmx3.9/work"})," PATH to your ",(0,s.jsx)(n.code,{children:".bashrc"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export PATH="/home/svu/{username}/openmx3.9/work:$PATH"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"install-intel-oneapi",children:"Install Intel oneAPI"}),"\n",(0,s.jsxs)(n.p,{children:["You may use below script to download and install ",(0,s.jsx)(n.code,{children:"2023.1"})," version of Intel\noneAPI libraries:"]}),"\n","\n",(0,s.jsx)(t.Z,{language:"bash",title:"scripts/intel_oneapi_components_2023.1.sh",showLineNumbers:!0,children:'#!/bin/bash\n# Installation script for various Intel oneAPI components\n# INSTALL_PATH="/workspaces/compilers"\nCWD=${PWD}\nBUILD_DIR=/tmp\ncd ${BUILD_DIR}\n\nsudo apt update\nsudo apt install -y --no-install-recommends autoconf gawk gcc g++ make\n\nwget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/89283df8-c667-47b0-b7e1-c4573e37bd3e/l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh\n# for custom location: --install-dir ${INSTALL_PATH}/intel\n# sh ./l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel\nsudo sh ./l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh -a --silent --eula accept\nrm l_dpcpp-cpp-compiler_p_2023.1.0.46347_offline.sh\n\nwget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/150e0430-63df-48a0-8469-ecebff0a1858/l_fortran-compiler_p_2023.1.0.46348_offline.sh\n# sh ./l_fortran-compiler_p_2023.1.0.46348_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel\nsudo sh ./l_fortran-compiler_p_2023.1.0.46348_offline.sh -a --silent --eula accept\nrm l_fortran-compiler_p_2023.1.0.46348_offline.sh\n\nwget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/7dcd261b-12fa-418a-b61b-b3dd4d597466/l_tbb_oneapi_p_2021.9.0.43484_offline.sh\n# sh ./l_tbb_oneapi_p_2021.9.0.43484_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel\nsudo sh ./l_tbb_oneapi_p_2021.9.0.43484_offline.sh -a --silent --eula accept\nrm l_tbb_oneapi_p_2021.9.0.43484_offline.sh\n\nwget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/718d6f8f-2546-4b36-b97b-bc58d5482ebf/l_mpi_oneapi_p_2021.9.0.43482_offline.sh\n# sh ./l_mpi_oneapi_p_2021.9.0.43482_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel\nsudo sh ./l_mpi_oneapi_p_2021.9.0.43482_offline.sh -a --silent --eula accept\nrm l_mpi_oneapi_p_2021.9.0.43482_offline.sh\n\nwget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/cd17b7fe-500e-4305-a89b-bd5b42bfd9f8/l_onemkl_p_2023.1.0.46342_offline.sh\n# sh ./l_onemkl_p_2023.1.0.46342_offline.sh -a --silent --eula accept --install-dir ${INSTALL_PATH}/intel\nsudo sh ./l_onemkl_p_2023.1.0.46342_offline.sh -a --silent --eula accept\nrm l_onemkl_p_2023.1.0.46342_offline.sh\n\ncd ${CWD}\n'}),"\n",(0,s.jsx)(n.p,{children:"Initialize OneAPI/MKL env:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /opt/intel/oneapi/setvars.sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["OpenMX ",(0,s.jsx)(n.code,{children:"makefile"})," configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MKLROOT = /opt/intel/oneapi/mkl/2023.1.0\nCC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include\nFC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp\nLIB= -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -lifcore -lmkl_blacs_intelmpi_lp64 -liomp5 -lpthread -lm -ldl\n"})}),"\n",(0,s.jsx)(n.p,{children:"Standalone script to perform OpenMX installations:"}),"\n","\n",(0,s.jsx)(t.Z,{language:"bash",title:"scripts/openmx_intel.sh",showLineNumbers:!0,children:"#!/bin/bash\n# this script is not compatible with Bourne shell (sh), use bash instead:\n# bash openmx_intel.sh\n# tested on ubuntu 22.04\n\n# exit upon any command failure\nset -e\n\nOPENMX_VER=\"3.9.9\"\nMINOR_VER=\"3.9\"\nPATCH_URL=\"https://www.openmx-square.org/bugfixed/21Oct17/patch${OPENMX_VER}.tar.gz\"\nDOWNLOAD_URL=\"https://www.openmx-square.org/openmx${MINOR_VER}.tar.gz\"\nINSTALL_DIR=\"${HOME}/openmx/${OPENMX_VER}\"\nNUM_PROCS=$(nproc)\n\nBUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')\nCWD=${PWD}\nmkdir ${BUILD_DIR} && cd $_\n\nsource /opt/intel/oneapi/setvars.sh\n\nwget ${DOWNLOAD_URL}\ntar -xf openmx${MINOR_VER}.tar.gz\nrm openmx${MINOR_VER}.tar.gz\ncd openmx${MINOR_VER}/source\nwget ${PATCH_URL}\ntar -xf patch${OPENMX_VER}.tar.gz\nrm patch${OPENMX_VER}.tar.gz\nmv kpoint.in ../work/\n\n# edit makefile\n# MKLROOT = /opt/intel/mkl\n# CC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include\n# FC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp\n# LIB = -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore\n\nsed -i 's/^\\s*MKLROOT\\s*=.*/MKLROOT = \\/opt\\/intel\\/oneapi\\/mkl\\/2023\\.1\\.0/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\nsed -i 's/^\\s*CC\\s*=.*/CC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}\\/include\\/fftw -I${MKLROOT}\\/include/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\nsed -i 's/^\\s*FC\\s*=.*/FC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\nsed -i 's/^\\s*LIB\\s*=.*/LIB = -L${MKLROOT}\\/lib\\/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -lifcore -lmkl_blacs_intelmpi_lp64 -liomp5 -lpthread -lm -ldl/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\n\nmake DosMain\nmake -j${NUM_PROCS} all\nsudo make install\nmpiicc bandgnu13.c -lm -o bandgnu13\ncp bandgnu13 ../work/\n\nif [ ! -d ${INSTALL_DIR} ]; then\n  mkdir -p ${INSTALL_DIR}\nfi\n\ncd ${CWD}\ncp -r ${BUILD_DIR}/openmx${MINOR_VER}/* ${INSTALL_DIR}\nrm -rf ${BUILD_DIR}\n\n# run tests (calculations need to be launched from ${INSTALL_DIR}/work)\n# cd ${INSTALL_DIR}/work\n# source /opt/intel/oneapi/setvars.sh\n# export OMP_NUM_THREADS=1\n# mpirun -np ${NUM_PROCS} ./openmx -runtest\n"}),"\n",(0,s.jsx)(n.h3,{id:"using-gnu-libraries",children:"Using GNU libraries"}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you may use following script to install OpenMX using GNU\nlibraries:"}),"\n","\n",(0,s.jsx)(t.Z,{language:"bash",title:"scripts/openmx_gnu.sh",showLineNumbers:!0,children:"#!/bin/bash\n# this script is not compatible with Bourne shell (sh), use bash instead:\n# bash openmx_gnu.sh\n# tested on ubuntu 22.04\n\n# exit upon any command failure\nset -e\n\nOPENMX_VER=\"3.9.9\"\nMINOR_VER=\"3.9\"\nPATCH_URL=\"https://www.openmx-square.org/bugfixed/21Oct17/patch${OPENMX_VER}.tar.gz\"\nDOWNLOAD_URL=\"https://www.openmx-square.org/openmx${MINOR_VER}.tar.gz\"\nINSTALL_DIR=\"${HOME}/openmx/${OPENMX_VER}\"\nNUM_PROCS=$(nproc)\n\nBUILD_DIR=/tmp/_build_$(date +'%Y%m%d%H%M%S')\nCWD=${PWD}\nmkdir ${BUILD_DIR} && cd $_\n\nsudo apt update && sudo apt upgrade -y\nsudo apt install --no-install-recommends -y \\\n  autoconf \\\n  build-essential \\\n  ca-certificates \\\n  gfortran \\\n  libblas3 \\\n  libopenblas-dev \\\n  libc6 \\\n  libfftw3-dev \\\n  libgcc-s1 \\\n  liblapack-dev \\\n  libopenmpi-dev \\\n  libscalapack-openmpi-dev \\\n  libelpa-dev \\\n  wget\n\nif ! [ -f /usr/lib/x86_64-linux-gnu/libscalapack.so ] ; then\n  if ! [ -h /usr/lib/x86_64-linux-gnu/libscalapack.so ] ; then\n    sudo ln -s /usr/lib/x86_64-linux-gnu/libscalapack-openmpi.so /usr/lib/x86_64-linux-gnu/libscalapack.so\n  fi\nfi\n\nwget ${DOWNLOAD_URL}\ntar -xf openmx${MINOR_VER}.tar.gz\nrm openmx${MINOR_VER}.tar.gz\ncd openmx${MINOR_VER}/source\nwget ${PATCH_URL}\ntar -xf patch${OPENMX_VER}.tar.gz\nrm patch${OPENMX_VER}.tar.gz\nmv kpoint.in ../work/\n\n# edit makefile\n# to find specific paths try: apt search fftw3; dpkg -L libfftw3-dev; ompi_info\n\n# CC = mpicc -O3 -ffast-math -fcommon -fopenmp\n# FC = mpif90 -O3 -ffast-math -fallow-argument-mismatch -fopenmp\n# LIB = -lfftw3 -lmpi -lmpi_mpifh -lscalapack -llapack -lblas -lgfortran\nsed -i 's/^\\s*CC\\s*=.*/CC = mpicc -O3 -ffast-math -fcommon -fopenmp/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\nsed -i '/^\\s*MKLROOT/d' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\nsed -i 's/^\\s*FC\\s*=.*/FC = mpif90 -O3 -ffast-math -fallow-argument-mismatch -fopenmp/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\nsed -i 's/^\\s*LIB\\s*=.*/LIB = -lfftw3 -lmpi -lmpi_mpifh -lscalapack -llapack -lblas -lgfortran/' ${BUILD_DIR}/openmx${MINOR_VER}/source/makefile\n\nmake DosMain\nmake -j${NUM_PROCS} all\nsudo make install\nmpicc bandgnu13.c -lm -o bandgnu13\ncp bandgnu13 ../work/\n\nif [ ! -d ${INSTALL_DIR} ]; then\n  mkdir -p ${INSTALL_DIR}\nfi\n\ncp -r ${BUILD_DIR}/openmx${MINOR_VER}/* ${INSTALL_DIR}\nrm -rf ${BUILD_DIR}\n\n# run tests (calculations need to be launched from ${INSTALL_DIR}/work)\n# cd ${INSTALL_DIR}/work\n# export OMP_NUM_THREADS=1\n# mpirun -np ${NUM_PROCS} ./openmx -runtest\ncd ${CWD}\n"}),"\n",(0,s.jsx)(n.h3,{id:"verify-installation",children:"Verify installation"}),"\n",(0,s.jsx)(n.p,{children:"If you like to run tests to verify your installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd openmx3.9/work\nmpirun -np 4 ./openmx -runtest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may compare CPU times with ",(0,s.jsx)(n.a,{href:"http://www.openmx-square.org/openmx_man3.9/node17.html",children:"other machines"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example-pbs-script",children:"Example PBS script"}),"\n",(0,s.jsx)(n.p,{children:"Here is a sample PBS job script for NUS HPC cluster:"}),"\n","\n",(0,s.jsx)(t.Z,{language:"bash",title:"scripts/job.pbs",showLineNumbers:!0,children:"#!/bin/bash\n#PBS -q parallel12\n#PBS -l select=2:ncpus=12:mpiprocs=12:mem=45GB\n#PBS -j eo\n#PBS -N openmx-test\nsource /etc/profile.d/rec_modules.sh\nmodule load xe_2018\ncd $PBS_O_WORKDIR;\nnp=$( cat ${PBS_NODEFILE} | wc -l );\nmpirun -np $np -f ${PBS_NODEFILE} openmx input.txt > output.txt\n"}),"\n",(0,s.jsxs)(n.p,{children:["Input files, Jupyter notebooks, and other source files used in this tutorial can\nbe found in my GitHub repository: ",(0,s.jsx)(n.a,{href:"https://github.com/pranabdas/openmx/",children:"pranabdas/openmx"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Read through the ",(0,s.jsx)(n.a,{href:"http://www.openmx-square.org/openmx_man3.9/",children:"OpenMX manual"}),"\nfor various details."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://www.openmx-square.org/viewer/index.html",children:"OpenMX viewer"})," can help you\nchoose certain parameters for the input file e.g., basis configuration. You may\nalso consult this ",(0,s.jsx)(n.a,{href:"http://www.openmx-square.org/openmx_man3.9/node27.html",children:"reference table"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.materialscloud.org/work/tools/seekpath",children:"SeeK-path"})," tool can help\nyou build the k-path."]}),"\n",(0,s.jsx)(n.li,{children:"The work directory under OpenMX installation contains lots of example files\nfor your reference."}),"\n"]})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);