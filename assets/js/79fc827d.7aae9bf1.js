"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([[817],{7412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"soc","title":"Spin Orbit Coupling","description":"In order to perform fully relativistic calculation:","source":"@site/docs/soc.mdx","sourceDirName":".","slug":"/soc","permalink":"/openmx/soc","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/openmx/blob/main/docs/soc.mdx","tags":[],"version":"current","frontMatter":{"title":"Spin Orbit Coupling"},"sidebar":"docs","previous":{"title":"DFT+U calculation","permalink":"/openmx/dft-u"},"next":{"title":"Visualizing Moment","permalink":"/openmx/moment-visualization"}}');var t=s(4848),r=s(8453);const c={title:"Spin Orbit Coupling"},a=void 0,l={},d=[{value:"Bulk and surface bands for Bi<sub>2</sub>Se<sub>3</sub>",id:"bulk-and-surface-bands-for-bi2se3",level:2}];function o(e){const n={annotation:"annotation",code:"code",h2:"h2",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In order to perform fully relativistic calculation:"}),"\n",(0,t.jsx)(n.p,{children:"(A) Full relativistic effects can only be applied in non-collinear calculations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scf.SpinPolarization        NC        # On|Off|NC\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the option ",(0,t.jsx)(n.code,{children:"NC"})," is specified, wave functions are expressed by a two\ncomponent spinor, and initial spin orientation of each site should be provided:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"<Atoms.SpeciesAndCoordinates           # Unit=Ang\n    1  Mn    0.00000   0.00000   0.00000   8.0  5.0  45.0 0.0 45.0 0.0  1 on\n    2  O     1.70000   0.00000   0.00000   3.0  3.0  45.0 0.0 45.0 0.0  1 on\nAtoms.SpeciesAndCoordinates>\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Col"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"sequential serial number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"species name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"x-coordinate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"y-coordinate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"z-coordinate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"initial occupation for up spin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"initial occupation for down spin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"Euler angle, theta, of the magnetic field for spin magnetic moment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"Euler angle, phi, of the magnetic field for spin magnetic moment. Also,  the 8th and 9th are used to generate the initial non-collinear spin charge distribution"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"the Euler angle, theta, of the magnetic field for orbital magnetic moment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"the Euler angle, phi, of the magnetic field for orbital magnetic moment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12"}),(0,t.jsxs)(n.td,{children:["switch for the constraint schemes specified by the keywords ",(0,t.jsx)(n.code,{children:"scf.Constraint.NC.Spin"})," and ",(0,t.jsx)(n.code,{children:"scf.NC.Zeeman.Orbital"}),". ",(0,t.jsx)(n.code,{children:"1"})," means that the constraint is applied, and ",(0,t.jsx)(n.code,{children:"0"})," no constraint."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13"}),(0,t.jsxs)(n.td,{children:["switch for enhancement of orbital polarization in the LDA+U method, ",(0,t.jsx)(n.code,{children:"on"})," means that the enhancement is made, ",(0,t.jsx)(n.code,{children:"off"})," means no enhancement."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(B) Use ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"j"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"-dependent pseudopotential, i.e., it incorporates full relativistic\ncorrection."]}),"\n",(0,t.jsx)(n.p,{children:"(C) Turn on the soc flag:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scf.SpinOrbit.Coupling      on         # On|Off, default=off\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"bulk-and-surface-bands-for-bi2se3",children:["Bulk and surface bands for Bi",(0,t.jsx)("sub",{children:"2"}),"Se",(0,t.jsx)("sub",{children:"3"})]}),"\n",(0,t.jsxs)(n.p,{children:["Here we compare the bulk and surface electronic structure of topological\ninsulating Bi",(0,t.jsx)("sub",{children:"2"}),"Se",(0,t.jsx)("sub",{children:"3"}),". In both cases we consider noncollinear\nmagnetism with spin orbit coupling. In case of slab calculation 10 \u212b vacuum is\nintroduced among the layers."]}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:s(9299).A}),(0,t.jsx)("img",{src:s(9026).A,alt:"bi2se3"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},9026:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/bi2se3-340a2592ccd360be9f24d668832dff60.png"},9299:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/bi2se3-6fcf3dd9ab66511f06c1176176ef4baf.webp"}}]);