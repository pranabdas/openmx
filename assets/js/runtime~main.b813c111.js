(()=>{"use strict";var e,t,n,r,o,a,u,c,f={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=f,d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(n,r){if(1&r&&(n=this(n)),8&r||"object"==typeof n&&n&&(4&r&&n.__esModule||16&r&&"function"==typeof n.then))return n;var o=Object.create(null);d.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},d.d(o,a),o},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce(function(t,n){return d.f[n](e,t),t},[]))},d.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},d.u=function(e){return"assets/js/"+(({112:"aba21aa0",151:"138e0e15",16:"common",161:"79fc827d",211:"a7bd4aaa",230:"1a4e3797",347:"ac5280f2",393:"ebccf162",426:"d92a3c43",432:"5e95c892",48:"17896441",554:"2b8360cb",819:"7b2a092f",889:"4843d256",914:"a94703ab",936:"a03976a2",960:"3847b3ea",97:"c26f72d6",998:"2a8f1412"})[e]||e)+"."+({112:"88a18c4d",151:"66b577fd",16:"3ca0232f",161:"1591b053",21:"48ae1927",211:"05be6b32",230:"b7f66a81",298:"37e39822",347:"00d5b3ad",393:"d87cb8a9",426:"0f63addf",432:"52e110fc",48:"7ee0b004",513:"465eb0a4",554:"4e57d896",819:"76df607d",853:"5f177d56",889:"0988b5ef",914:"b02a43f5",936:"95b8b6b9",960:"c7d38b2e",97:"ef280361",998:"1740c60f"})[e]+".js"},d.miniCssF=function(e){return""+e+".css"},d.h=function(){return"40a0f15ffe20c0b4"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="openmx:",d.l=function(e,t,o,a){if(n[e]){n[e].push(t);return}if(void 0!==o)for(var u,c,f=document.getElementsByTagName("script"),i=0;i<f.length;i++){var l=f[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+o){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.setAttribute("data-webpack",r+o),u.src=e),n[e]=[t];var s=function(t,r){u.onerror=u.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(r)}),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o=[],d.O=function(e,t,n,r){if(t){r=r||0;for(var a=o.length;a>0&&o[a-1][2]>r;a--)o[a]=o[a-1];o[a]=[t,n,r];return}for(var u=1/0,a=0;a<o.length;a++){for(var t=o[a][0],n=o[a][1],r=o[a][2],c=!0,f=0;f<t.length;f++)(!1&r||u>=r)&&Object.keys(d.O).every(function(e){return d.O[e](t[f])})?t.splice(f--,1):(c=!1,r<u&&(u=r));if(c){o.splice(a--,1);var i=n();void 0!==i&&(e=i)}}return e},d.p="/openmx/",d.rv=function(){return"1.2.0-alpha.0"},d.gca=function(e){return e=({0x11113f9:"48",common:"16",c26f72d6:"97",aba21aa0:"112","138e0e15":"151","79fc827d":"161",a7bd4aaa:"211","1a4e3797":"230",ac5280f2:"347",ebccf162:"393",d92a3c43:"426","5e95c892":"432","2b8360cb":"554","7b2a092f":"819","4843d256":"889",a94703ab:"914",a03976a2:"936","3847b3ea":"960","2a8f1412":"998"})[e]||e,d.p+d.u(e)},d.b=document.baseURI||self.location.href,a={212:0,580:0},d.f.j=function(e,t){var n=d.o(a,e)?a[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(/^(212|580)$/.test(e))a[e]=0;else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o=d.p+d.u(e),u=Error();d.l(o,function(t){if(d.o(a,e)&&(0!==(n=a[e])&&(a[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}},"chunk-"+e,e)}}},d.O.j=function(e){return 0===a[e]},u=function(e,t){var n,r,o=t[0],u=t[1],c=t[2],f=0;if(o.some(function(e){return 0!==a[e]})){for(n in u)d.o(u,n)&&(d.m[n]=u[n]);if(c)var i=c(d)}for(e&&e(t);f<o.length;f++)r=o[f],d.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return d.O(i)},(c=self.webpackChunkopenmx=self.webpackChunkopenmx||[]).forEach(u.bind(null,0)),c.push=u.bind(null,c.push.bind(c))})();