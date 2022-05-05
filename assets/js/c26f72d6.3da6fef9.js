"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([[562],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Orbital decomposition of bandstructure",sidebar_label:"Orbital Projection"},c=void 0,u={unversionedId:"orbital-projection",id:"orbital-projection",title:"Orbital decomposition of bandstructure",description:"If you want to decompose the individual orbital contributions on the",source:"@site/docs/orbital-projection.md",sourceDirName:".",slug:"/orbital-projection",permalink:"/openmx/orbital-projection",draft:!1,editUrl:"https://github.com/pranabdas/openmx/blob/main/docs/orbital-projection.md",tags:[],version:"current",frontMatter:{title:"Orbital decomposition of bandstructure",sidebar_label:"Orbital Projection"},sidebar:"docs",previous:{title:"Visualizing Moment",permalink:"/openmx/moment-visualization"},next:{title:"Resources",permalink:"/openmx/resources"}},p={},s=[],f={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to decompose the individual orbital contributions on the\nbandstructure, here are the relevant keywords:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="src/SiC/SiC_Primitive_BD.in" showLineNumbers',title:'"src/SiC/SiC_Primitive_BD.in"',showLineNumbers:!0},"Unfolding.Electronic.Band       on     # on|off default=off\nUnfolding.LowerBound         -10.0     # default=-10 eV\nUnfolding.UpperBound           6.0     # default= 10 eV\nUnfolding.desired_totalnkpt     30\nUnfolding.Nkpoint                4\n\n<Unfolding.kpoint\n K 0.33333333333 0.33333333333 0.0000000000\n G 0.00000000000 0.00000000000 0.0000000000\n M 0.50000000000 0.00000000000 0.0000000000\n K 0.33333333333 0.33333333333 0.0000000000\nUnfolding.kpoint>\n")),(0,i.kt)("p",null,"The orbital contributions are saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"{system}.unfold_orb"),". In case of spin\npolarized calculation, there will be ",(0,i.kt)("inlineCode",{parentName:"p"},"{system}.unfold_orb{up, dn}"),". The sequence\nof the orbitally decomposed spectral weights can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"{system}.out"),";\nlook for the section ",(0,i.kt)("em",{parentName:"p"},"Unfolding calculation for band structure")," towards the\nbottom of the file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"orbital-projection",src:n(9871).Z,width:"1646",height:"1506"})),(0,i.kt)("p",null,"More details: ",(0,i.kt)("a",{parentName:"p",href:"http://www.openmx-square.org/openmx_man3.9/node168.html"},"http://www.openmx-square.org/openmx_man3.9/node168.html")))}d.isMDXComponent=!0},9871:function(e,t,n){t.Z=n.p+"assets/images/orbital-proj-3b170aaa193fd67ea7f79cca9ba38b9b.png"}}]);