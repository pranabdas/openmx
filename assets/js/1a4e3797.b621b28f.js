"use strict";(self.webpackChunkopenmx=self.webpackChunkopenmx||[]).push([[920],{8374:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(5861),r=n(7757),c=n.n(r),u=n(7294),l=n(2263),s=n(4397),o=n(5742),m=n(9960),i=n(6775),h=n(412);var f=function(){var e=(0,i.k6)(),t=(0,i.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(22),d=n(8202),E=n(2539),_=n(726),g=n(1073),v=n(311),y=n(1029);function I(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var S="searchQueryInput_CFBF",w="searchResultItem_U687",k="searchResultItemPath_uIbk",b="searchResultItemSummary_oZHr",C=n(3926);function Z(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===a,o=2===a,i=(s?n.b:r.b).slice(),h=o?n.s:n.t;return s||i.push(r.t),u.createElement("article",{className:w},u.createElement("h2",null,u.createElement(m.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,E.C)(h,c):(0,_.o)(h,(0,g.m)(l,"t"),c,100)}})),i.length>0&&u.createElement("p",{className:k},(0,C.e)(i)),o&&u.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,g.m)(l,"t"),c,100)}}))}var R=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,m=(0,u.useState)(n),i=m[0],h=m[1],E=(0,u.useState)(),_=E[0],g=E[1],w=(0,u.useState)(),k=w[0],b=w[1],C=(0,u.useMemo)((function(){return i?I(y.Iz.search_results_for,{keyword:i}):y.Iz.search_the_documentation}),[i]);(0,u.useEffect)((function(){r(i),_&&(i?_(i,(function(e){b(e)})):b(void 0))}),[i,_]);var R=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==i&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,g((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(s.Z,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,C)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,C),u.createElement("input",{type:"search",name:"q",className:S,"aria-label":"Search",onChange:R,value:i,autoComplete:"off",autoFocus:!0}),!_&&i&&u.createElement("div",null,u.createElement(v.Z,null)),k&&(k.length>0?u.createElement("p",null,I(1===k.length?y.Iz.count_documents_found:y.Iz.count_documents_found_plural,{count:k.length})):u.createElement("p",null,y.Iz.no_documents_were_found)),u.createElement("section",null,k&&k.map((function(e){return u.createElement(Z,{key:e.document.i,searchResult:e})})))))}}}]);