"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([[899],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8304:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Spin Orbit Coupling"},i=void 0,o={unversionedId:"soc",id:"soc",title:"Spin Orbit Coupling",description:"In order to perform fully relativistic calculation:",source:"@site/docs/soc.mdx",sourceDirName:".",slug:"/soc",permalink:"/openmx/soc",draft:!1,editUrl:"https://github.com/pranabdas/openmx/blob/main/docs/soc.mdx",tags:[],version:"current",frontMatter:{title:"Spin Orbit Coupling"},sidebar:"docs",previous:{title:"DFT+U calculation",permalink:"/openmx/dft-u"},next:{title:"Visualizing Moment",permalink:"/openmx/moment-visualization"}},p={},s=[{value:"Bulk and surface bands for Bi<sub>2</sub>Se<sub>3</sub>",id:"bulk-and-surface-bands-for-bi2se3",level:2}],c={toc:s};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to perform fully relativistic calculation:"),(0,r.kt)("p",null,"(A) Full relativistic effects can only be applied in non-collinear calculations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scf.SpinPolarization        NC        # On|Off|NC\n")),(0,r.kt)("p",null,"When the option ",(0,r.kt)("inlineCode",{parentName:"p"},"NC")," is specified, wave functions are expressed by a two\ncomponent spinor, and initial spin orientation of each site should be provided:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<Atoms.SpeciesAndCoordinates           # Unit=Ang\n    1  Mn    0.00000   0.00000   0.00000   8.0  5.0  45.0 0.0 45.0 0.0  1 on\n    2  O     1.70000   0.00000   0.00000   3.0  3.0  45.0 0.0 45.0 0.0  1 on\nAtoms.SpeciesAndCoordinates>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Col"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"sequential serial number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"species name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"x-coordinate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"y-coordinate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"z-coordinate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"initial occupation for up spin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"initial occupation for down spin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Euler angle, theta, of the magnetic field for spin magnetic moment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Euler angle, phi, of the magnetic field for spin magnetic moment. Also,  the 8th and 9th are used to generate the initial non-collinear spin charge distribution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"the Euler angle, theta, of the magnetic field for orbital magnetic moment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"the Euler angle, phi, of the magnetic field for orbital magnetic moment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"switch for the constraint schemes specified by the keywords ",(0,r.kt)("inlineCode",{parentName:"td"},"scf.Constraint.NC.Spin")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"scf.NC.Zeeman.Orbital"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," means that the constraint is applied, and ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," no constraint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"switch for enhancement of orbital polarization in the LDA+U method, ",(0,r.kt)("inlineCode",{parentName:"td"},"on")," means that the enhancement is made, ",(0,r.kt)("inlineCode",{parentName:"td"},"off")," means no enhancement.")))),(0,r.kt)("p",null,"(B) Use ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"j")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),"-dependent pseudopotential, i.e., it incorporates full relativistic\ncorrection."),(0,r.kt)("p",null,"(C) Turn on the soc flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scf.SpinOrbit.Coupling      on         # On|Off, default=off\n")),(0,r.kt)("h2",{id:"bulk-and-surface-bands-for-bi2se3"},"Bulk and surface bands for Bi",(0,r.kt)("sub",null,"2"),"Se",(0,r.kt)("sub",null,"3")),(0,r.kt)("p",null,"Here we compare the bulk and surface electronic structure of topological\ninsulating Bi",(0,r.kt)("sub",null,"2"),"Se",(0,r.kt)("sub",null,"3"),". In both cases we consider noncollinear\nmagnetism with spin orbit coupling. In case of slab calculation 10 \u212b vacuum is\nintroduced among the layers."),(0,r.kt)("picture",null,(0,r.kt)("source",{type:"image/webp",srcSet:n(6188).Z}),(0,r.kt)("img",{src:n(6390).Z,alt:"bi2se3"})))}m.isMDXComponent=!0},6390:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bi2se3-340a2592ccd360be9f24d668832dff60.png"},6188:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bi2se3-6fcf3dd9ab66511f06c1176176ef4baf.webp"}}]);