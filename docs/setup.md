---
title: Setting up OpenMX
sidebar_label: Setup
slug: /
---
Please refer to the [OpenMX website](http://www.openmx-square.org) for detailed
documentations. The installation options will depend on your system architecture
and available libraries. I am installing OpenMX version **3.9.8** at one of NUS
HPC clusters.

Get the source code:
```bash
wget http://t-ozaki.issp.u-tokyo.ac.jp/openmx3.9.tar.gz
wget http://www.openmx-square.org/bugfixed/21Sep28/patch3.9.8.tar.gz
tar -zxvf openmx3.9.tar.gz
rm openmx3.9.tar.gz
mv patch3.9.8.tar.gz openmx3.9/source
cd openmx3.9/source
tar -zxvf patch3.9.8.tar.gz
rm patch3.9.8.tar.gz
```

Load Intel Math Kernel library:
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

Once you are set, compile and build the executables:
```bash
make all -j8
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

Here is a sample PBS job-script for NUS HPC cluster:
```bash
#!/bin/bash
#PBS -q parallel12
#PBS -l select=2:ncpus=12:mpiprocs=12:mem=45GB
#PBS -j eo
#PBS -N openmx-test
source /etc/profile.d/rec_modules.sh
module load xe_2015
cd $PBS_O_WORKDIR;
np=$( cat  ${PBS_NODEFILE} |wc -l );
mpirun -np $np -f ${PBS_NODEFILE} openmx input.txt > output.txt
```

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
