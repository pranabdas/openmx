"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([[367],{3811:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var i=t(5893),s=t(1151),a=t(9286);const o="#      File Name\n#\n\nSystem.CurrrentDirectory ./    # default=./\nSystem.Name              nio\nlevel.of.stdout          1    # default=1 (1-3)\nlevel.of.fileout         1    # default=1 (1-3)\nDATA.PATH                /home/svu/slspkd/openmx3.9/DFT_DATA19\n\n\n# Definition of Atomic Species\n#\n\nSpecies.Number       2\n<Definition.of.Atomic.Species\n Ni  Ni6.0S-s2p2d2f1     Ni_CA19S\n O   O5.0-s2p2d1         O_CA19\nDefinition.of.Atomic.Species>\n\n<Hubbard.U.values                 #  eV\n Ni  1s 0.0 2s 0.0 1p 0.0 2p 0.0 1d 5.0 2d 0.0 1f 0.0\n O   1s 0.0 2s 0.0 1p 0.0 2p 0.0 1d 0.0\nHubbard.U.values>\n\n<Hund.J.values                 #  eV\n Ni  1s 0.0 2s 0.0 1p 0.0 2p 0.0 1d 0.5 2d 0.0 1f 0.0\n O   1s 0.0 2s 0.0 1p 0.0 2p 0.0 1d 0.0\nHund.J.values>\n\n\n# Atoms\n#\n\nAtoms.Number        4\nAtoms.SpeciesAndCoordinates.Unit   AU # Ang|AU\n<Atoms.SpeciesAndCoordinates\n 1  Ni   0.0       0.0       0.0        9.5  6.5 off\n 2  Ni   3.94955   3.94955   0.0        6.5  9.5 off\n 3   O   3.94955   0.0       0.0        3.0  3.0 off\n 4   O   3.94955   3.94955   3.94955    3.0  3.0 off\nAtoms.SpeciesAndCoordinates>\nAtoms.UnitVectors.Unit            AU  #  Ang|AU\n<Atoms.UnitVectors\n 7.89910   3.94955   3.94955\n 3.94955   7.89910   3.94955\n 3.94955   3.94955   7.89910\nAtoms.UnitVectors>\n\n\n# SCF or Electronic System\n#\n\nscf.XcType                 LSDA-CA     # LDA|LSDA-CA|GGA-PBE\n\n# DFT+U part #\nscf.Hubbard.U              On          # On|Off, default=off\nscf.Hubbard.Occupation     dual        # onsite|full|dual, default=dual\nscf.DFTU.Type\t\t   2           # 1:Simplified(Dudarev)|2:General, default=1\nscf.dc.Type                sFLL\t       # sFLL|sAMF|cFLL|cAMF, default=sFLL\nscf.Slater.Ratio           0.625       # default=0.625\nscf.Yukawa\t\t   off         # default=off\nscf.SpinPolarization       On          # On|Off\nscf.ElectronicTemperature  300.0       # default=300 (K)\nscf.energycutoff           150.0       # default=150 (Ry)\nscf.maxIter                200         # default=40\nscf.EigenvalueSolver       band        # Recursion|Cluster|Band\nscf.Kgrid                 6 6 6        # means 4x4x4\nscf.Mixing.Type           rmm-diis     # Simple|Rmm-Diis|Gr-Pulay\nscf.Init.Mixing.Weight     0.20        # default=0.30\nscf.Min.Mixing.Weight      0.01       # default=0.001\nscf.Max.Mixing.Weight      0.30        # default=0.40\nscf.Kerker.factor          1.00        # default=1.00\nscf.Mixing.History          5          # default=5\nscf.Mixing.StartPulay       6         # default=6\nscf.criterion             1.0e-7       # default=1.0e-6 (Hartree)\n\n\n# MD or Geometry Optimization\n#\n\nMD.Type                     nomd       # Nomd|Opt|DIIS|NVE|NVT_VS|NVT_NH\nMD.maxIter                   1         # default=1\nMD.TimeStep                 0.05       # default=0.5 (fs)\nMD.Opt.criterion          1.0e-4       # default=1.0e-4 (Hartree/bohr)\n\n\n# Band dispersion\n#\n\nVoronoi.Charge\t\t     on\n\nBand.dispersion              off        # on|off, default=off\n# if <Band.KPath.UnitCell does not exist,\n#     the reciprical lattice vector is employed.\nBand.Nkpath                1\n<Band.kpath\n  25  0.0 0.0 0.5   0.0 0.5 0.5   Z K\nBand.kpath>\n\n\n# MO output\n#\n\nMO.fileout                  off        # on|off\nnum.HOMOs                    1         # default=1\nnum.LUMOs                    1         # default=1\nMO.Nkpoint                   1         # default=1\n<MO.kpoint\n 0.0  0.0  0.0\nMO.kpoint>\n\n\n# DOS and LDOS\n#\n\nDos.fileout                 on         # on|off , default=off\nDos.Erange              -10.0  10.0    # default = -20 20\nDos.Kgrid                 9 9 9     # default = Kgrid1 Kgrid2 Kgrid3\n\n\n# output Hamiltonian and overlap\n#\n\nHS.fileout                   off     # on|off, default=off\n",d={title:"DFT+U calculation"},r=void 0,c={id:"dft-u",title:"DFT+U calculation",description:"We will calculate the density of states for NiO with and without including",source:"@site/docs/dft-u.mdx",sourceDirName:".",slug:"/dft-u",permalink:"/openmx/dft-u",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/openmx/blob/main/docs/dft-u.mdx",tags:[],version:"current",frontMatter:{title:"DFT+U calculation"},sidebar:"docs",previous:{title:"Diamond bands and DOS",permalink:"/openmx/diamond"},next:{title:"Spin Orbit Coupling",permalink:"/openmx/soc"}},l={},f=[];function u(n){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["We will calculate the density of states for NiO with and without including\nHubbard ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"U"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"U"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"})]})})]}),". We will start from the example input file for NiO (check work\ndirectory under OpenMX installation)."]}),"\n","\n","\n",(0,i.jsx)(a.Z,{language:"fortran",title:"src/NiO/NiO.in",showLineNumbers:!0,children:o}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["If the initial spin configuration is unpolarized for LDA+U calculations, it is\nrequired to provide the switch for enhancement of orbital polarization in the\nLDA+U method in the last column of ",(0,i.jsx)(e.code,{children:"Atoms.SpeciesAndCoordinates"}),", ",(0,i.jsx)(e.code,{children:"on"})," means\nthat the enhancement is made, ",(0,i.jsx)(e.code,{children:"off"})," means no enhancement."]})}),"\n",(0,i.jsx)(e.p,{children:"Here we compare the density of states with and without considering electronic\ncorrelation."}),"\n",(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{type:"image/webp",srcSet:t(4925).Z}),(0,i.jsx)("img",{src:t(1790).Z,alt:"nio-dos"})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:"If you have difficulty with SCF convergence, you might try"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"scf.Mixing.Type Rmm-Diish\n"})}),(0,i.jsxs)(e.p,{children:["which is suitable for the plus U method and the constraint schemes. Find more\ndetails ",(0,i.jsx)(e.a,{href:"http://www.openmx-square.org/openmx_man3.9/node40.html",children:"here"}),"."]})]})]})}function m(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},1790:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/nio-dos-bec0a409d094a9549ab5dbc5ca71d3a0.png"},4925:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/nio-dos-d49e3206cdc18fd8f116296662fd5f15.webp"}}]);