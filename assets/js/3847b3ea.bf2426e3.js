"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([[581],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1959:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={title:"Setting up OpenMX",sidebar_label:"Setup",slug:"/",keywords:["openmx","first principles calculation","density functional theory","DFT","bandstructure calculation"]},p=void 0,s={unversionedId:"setup",id:"setup",title:"Setting up OpenMX",description:"Please refer to the OpenMX website for detailed",source:"@site/docs/setup.md",sourceDirName:".",slug:"/",permalink:"/openmx/",draft:!1,editUrl:"https://github.com/pranabdas/openmx/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Setting up OpenMX",sidebar_label:"Setup",slug:"/",keywords:["openmx","first principles calculation","density functional theory","DFT","bandstructure calculation"]},sidebar:"docs",next:{title:"Silicon bandstructure",permalink:"/openmx/silicon"}},c={},m=[],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"http://www.openmx-square.org"},"OpenMX website")," for detailed\ndocumentations. The installation options will depend on your system architecture\nand available libraries. I am installing OpenMX version ",(0,l.kt)("strong",{parentName:"p"},"3.9.9")," at one of NUS\nHPC clusters."),(0,l.kt)("p",null,"Get the source code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"wget http://t-ozaki.issp.u-tokyo.ac.jp/openmx3.9.tar.gz\nwget http://www.openmx-square.org/bugfixed/21Oct17/patch3.9.9.tar.gz\ntar -zxvf openmx3.9.tar.gz\nrm openmx3.9.tar.gz\nmv patch3.9.9.tar.gz openmx3.9/source\ncd openmx3.9/source\ntar -zxvf patch3.9.9.tar.gz\nrm patch3.9.9.tar.gz\n")),(0,l.kt)("p",null,"Load Intel Math Kernel library:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"module load xe_2015\n")),(0,l.kt)("p",null,"You may check the necessary environment variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo $LD_LIBRARY_PATH\necho $MKLROOT\nenv\n")),(0,l.kt)("p",null,"Open the ",(0,l.kt)("inlineCode",{parentName:"p"},"makefile")," and specify ",(0,l.kt)("inlineCode",{parentName:"p"},"CC"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FC"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"LIB")," flags according to your\nsystem and libraries. I am using MPI and Intel Math Kernel Libraries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"CC = mpicc -O3 -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include\nFC = mpif90 -O3 -qopenmp -I${MKLROOT}/include/fftw\nLIB= -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently I found some issues with the Intel license server while using\n",(0,l.kt)("inlineCode",{parentName:"p"},"xe_2015")," module at NUS HPC clusters. After the module load, you need to export\nfollowing ",(0,l.kt)("inlineCode",{parentName:"p"},"ENV")," variable:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export "INTEL_LICENSE_FILE=/app1/centos6.3/Intel/xe_2015/composer_xe_2015.3.187/licenses"\n')))),(0,l.kt)("p",null,"If you have ",(0,l.kt)("inlineCode",{parentName:"p"},"xe_2018")," (instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"xe_2015"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"module load xe_2018\n")),(0,l.kt)("p",null,"Use following flags:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"MKLROOT = /opt/intel/mkl\nCC = mpiicc -O3 -xHOST -ip -no-prec-div -qopenmp -I${MKLROOT}/include/fftw -I${MKLROOT}/include\nFC = mpiifort -O3 -xHOST -ip -no-prec-div -qopenmp\nLIB= -L${MKLROOT}/include/fftw -lfftw3 -L$MKLROOT/lib/intel64 -lmkl_blacs_intelmpi_lp64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_core -lmkl_intel_thread -lpthread -lifcore\n")),(0,l.kt)("p",null,"Once you are set, compile and build the executables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make all -j8\nmake install\n")),(0,l.kt)("p",null,"Compile the DosMain program:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make DosMain\n")),(0,l.kt)("p",null,"There is ",(0,l.kt)("inlineCode",{parentName:"p"},"bandgnu13.c")," in the source directory, which resulted in error. It\nneeds be compiled using ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"module purge\ngcc bandgnu13.c -lm -o bandgnu13\ncp bandgnu13 ../work/\n")),(0,l.kt)("p",null,"Optionally you may add the ",(0,l.kt)("inlineCode",{parentName:"p"},"openmx3.9/work")," PATH to your ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="/home/svu/{username}/openmx3.9/work:$PATH"\n')),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Although I was able to compile the code using above flags, I do not have\nexpertise to assure this was the optimal installation."))),(0,l.kt)("p",null,"Here is a sample PBS job-script for NUS HPC cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"#!/bin/bash\n#PBS -q parallel12\n#PBS -l select=2:ncpus=12:mpiprocs=12:mem=45GB\n#PBS -j eo\n#PBS -N openmx-test\nsource /etc/profile.d/rec_modules.sh\nmodule load xe_2015\ncd $PBS_O_WORKDIR;\nnp=$( cat  ${PBS_NODEFILE} |wc -l );\nmpirun -np $np -f ${PBS_NODEFILE} openmx input.txt > output.txt\n")),(0,l.kt)("p",null,"Input files, Jupyter notebooks, and other source files used in this tutorial can\nbe found in my GitHub repository: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/openmx/"},"pranabdas/openmx"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Read through the ",(0,l.kt)("a",{parentName:"li",href:"http://www.openmx-square.org/openmx_man3.9/"},"OpenMX manual"),"\nfor various details."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.openmx-square.org/viewer/index.html"},"OpenMX viewer")," can help you\nchoose certain parameters for the input file e.g., basis configuration. You may\nalso consult this ",(0,l.kt)("a",{parentName:"li",href:"http://www.openmx-square.org/openmx_man3.9/node27.html"},"reference table"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.materialscloud.org/work/tools/seekpath"},"SeeK-path")," tool can help\nyou build the k-path."),(0,l.kt)("li",{parentName:"ul"},"The work directory under OpenMX installation contains lots of example files\nfor your reference.")))))}d.isMDXComponent=!0}}]);