---
title: Setting up OpenMX
sidebar_label: Setup
slug: /
keywords: ["openmx", "first principles calculation", "density functional theory", "DFT", "bandstructure calculation"]
---
Please refer to the [OpenMX website](http://www.openmx-square.org) for detailed
documentations. The installation options will depend on your system architecture
and available libraries. I am installing OpenMX version **3.9.9** at one of NUS
HPC clusters.

Get the source code:
```bash showLineNumbers
wget http://t-ozaki.issp.u-tokyo.ac.jp/openmx3.9.tar.gz
wget http://www.openmx-square.org/bugfixed/21Oct17/patch3.9.9.tar.gz
tar -zxvf openmx3.9.tar.gz
rm openmx3.9.tar.gz
mv patch3.9.9.tar.gz openmx3.9/source
cd openmx3.9/source
tar -zxvf patch3.9.9.tar.gz
rm patch3.9.9.tar.gz
```

### Using Intel libraries

If you already have Intel OneAPI/Math Kernel libraries installed, load the
respective modulefiles or set environment variables:
```bash
module load xe_2015
```

You may check the necessary environment variables:
```bash
echo $LD_LIBRARY_PATH
echo $MKLROOT
env
```

Open the `makefile` and specify `CC`, `FC`, and `LIB` flags according to your
system and libraries. I am using MPI and Intel Math Kernel Libraries.
```bash
CC = mpicc -O3 -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include
FC = mpif90 -O3 -qopenmp -I${MKLROOT}/include/fftw
LIB= -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore
```

:::warning

Currently I found some issues with the Intel license server while using
`xe_2015` module at NUS HPC clusters. After the module load, you need to export
following `ENV` variable:
```bash
export "INTEL_LICENSE_FILE=/app1/centos6.3/Intel/xe_2015/composer_xe_2015.3.187/licenses"
```

:::

If you have `xe_2018` (instead of `xe_2015`):
```bash
module load xe_2018
```

Use following flags:
```bash
MKLROOT = /opt/intel/mkl
CC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include
FC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp
LIB= -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore
```

Once you are set, compile and build the executables:
```bash
make -j8 all
make install
```

Compile the DosMain program:
```bash
make DosMain
```

There is `bandgnu13.c` in the source directory, which resulted in error. It
needs be compiled using `gcc`:
```bash
module purge
gcc bandgnu13.c -lm -o bandgnu13
cp bandgnu13 ../work/
```

Optionally you may add the `openmx3.9/work` PATH to your `.bashrc`.
```bash
export PATH="/home/svu/{username}/openmx3.9/work:$PATH"
```

### Install Intel oneAPI

You may use below script to download and install `2023.1` version of Intel
oneAPI libraries:

import CodeBlock from '@theme/CodeBlock';
import install_intel_oneapi from '!!raw-loader!/scripts/intel_oneapi_components_2023.1.sh';

<CodeBlock language="bash" title="scripts/intel_oneapi_components_2023.1.sh" showLineNumbers>{install_intel_oneapi}</CodeBlock>

Initialize OneAPI/MKL env:

```bash
source /opt/intel/oneapi/setvars.sh
```

OpenMX `makefile` configuration:
```bash
MKLROOT = /opt/intel/oneapi/mkl/2023.1.0
CC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include
FC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp
LIB= -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -lifcore -lmkl_blacs_intelmpi_lp64 -liomp5 -lpthread -lm -ldl
```

Standalone script to perform OpenMX installations:

import openmx_intel from '!!raw-loader!/scripts/openmx_intel.sh';

<CodeBlock language="bash" title="scripts/openmx_intel.sh" showLineNumbers>{openmx_intel}</CodeBlock>

### Using GNU libraries

Alternatively, you may use following script to install OpenMX using GNU
libraries:

import openmx_gnu from '!!raw-loader!/scripts/openmx_gnu.sh';

<CodeBlock language="bash" title="scripts/openmx_gnu.sh" showLineNumbers>{openmx_gnu}</CodeBlock>

### Verify installation

If you like to run tests to verify your installation:

```
cd openmx3.9/work
mpirun -np 4 ./openmx -runtest
```

You may compare CPU times with [other machines](
http://www.openmx-square.org/openmx_man3.9/node17.html).

### Example PBS script

Here is a sample PBS job script for NUS HPC cluster:

import job_pbs from '!!raw-loader!/scripts/job.pbs';

<CodeBlock language="bash" title="scripts/job.pbs" showLineNumbers>{job_pbs}</CodeBlock>

Input files, Jupyter notebooks, and other source files used in this tutorial can
be found in my GitHub repository: [pranabdas/openmx](
https://github.com/pranabdas/openmx/).

:::tip

- Read through the [OpenMX manual](http://www.openmx-square.org/openmx_man3.9/)
for various details.
- [OpenMX viewer](http://www.openmx-square.org/viewer/index.html) can help you
choose certain parameters for the input file e.g., basis configuration. You may
also consult this [reference table](
http://www.openmx-square.org/openmx_man3.9/node27.html).
- [SeeK-path](https://www.materialscloud.org/work/tools/seekpath) tool can help
you build the k-path.
- The work directory under OpenMX installation contains lots of example files
for your reference.

:::
