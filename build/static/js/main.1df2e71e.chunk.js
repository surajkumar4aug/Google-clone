(this.webpackJsonpgoogle_clone=this.webpackJsonpgoogle_clone||[]).push([[0],{45:function(e,a,t){e.exports=t(62)},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(17),r=t.n(l),o=(t(50),t(51),t(52),t(12)),s=t(40),i=t.n(s),m=t(76),u=t(34),d=t(16),h=(t(53),t(35)),v=t.n(h),E=t(39),p=t.n(E),g=t(75),f=t(3),b=Object(n.createContext)(),N=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(b.Provider,{value:Object(n.useReducer)(a,t)},l)},_=function(){return Object(n.useContext)(b)},O=t(29),j="SET_SEARCH_TEAM",y=function(e,a){switch(console.log(a),a.type){case j:return Object(O.a)(Object(O.a)({},e),{},{term:a.term});default:return e}};var w=function(e){var a=e.hideButtons,t=void 0!==a&&a,l=_(),r=Object(d.a)(l,2);Object(u.a)(r[0]);var o=r[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),m=i[0],h=i[1],E=Object(f.f)(),b=function(e){e.preventDefault(),console.log("you have great",m),o({type:j,term:m}),E.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"searchinput"},c.a.createElement(v.a,{className:"inputicon"}),c.a.createElement("input",{value:m,onChange:function(e){return h(e.target.value)}}),c.a.createElement(p.a,null)),t?c.a.createElement("div",{className:"search_buttons"},c.a.createElement(g.a,{className:"search_buttonsHidden",type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(g.a,{className:"search_buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search_buttons"},c.a.createElement(g.a,{type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(g.a,{variant:"outlined"},"I'm Feeling Lucky")))};var k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home_header"},c.a.createElement("div",{className:"home_headerLeft"},c.a.createElement(o.b,{to:"/about"},"about"),c.a.createElement(o.b,{to:"/store"},"store")),c.a.createElement("div",{className:"home_headerRight"},c.a.createElement(o.b,{to:"/gmail"},"Gmail"),c.a.createElement(o.b,{to:"/images"},"Images"),c.a.createElement(i.a,null),c.a.createElement(m.a,null))),c.a.createElement("div",{className:"home_body"},c.a.createElement("img",{src:"https://pngimg.com/uploads/google/google_PNG19644.png",alt:""}),c.a.createElement("div",{className:"home_input"},c.a.createElement(w,null))))},S=(t(60),t(28)),C=t.n(S),I=t(41),R=function(e){var a=Object(n.useState)(null),t=Object(d.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(I.a)(C.a.mark((function a(){return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyDDN8qtcJRBOqNZK1mRpdSacOVXTMnW2CM","&cx=").concat("657d3d0fe1e2eec87","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}};var A=function(){var e=_(),a=Object(d.a)(e,2),t=a[0].term,n=(a[1],R(t).data);return console.log(n),c.a.createElement("div",{className:"searchpage"},c.a.createElement("div",{className:"searchheader"},c.a.createElement(o.b,{to:"/"},"  ",c.a.createElement("img",{className:"searchicon",src:"https://pngimg.com/uploads/google/google_PNG19644.png",alt:""})),c.a.createElement("div",{className:"searchbody"},c.a.createElement(w,{hideButtons:!0}),c.a.createElement("div",{className:"searchoption"},c.a.createElement("div",{className:"searchleft"},c.a.createElement("div",{className:"searchoption"},c.a.createElement(o.b,{to:"/all"},"All")))))),t&&c.a.createElement("div",{className:"searchresults"},c.a.createElement("p",{className:"searchcount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults,"Results(",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds) for ",t),null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,l,r,o,s,i;return c.a.createElement("div",{className:"searchresult"},c.a.createElement("a",{href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(l=n.cse_image[0])||void 0===l?void 0:l.src)&&c.a.createElement("img",{className:"resultimage",src:(null===(r=e.pagemap)||void 0===r||null===(o=r.cse_image)||void 0===o?void 0:o.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(i=s.cse_image[0])||void 0===i?void 0:i.src),alt:""}),e.displayLink),c.a.createElement("a",{className:"resulttittle",href:e.link},c.a.createElement("h2",null,e.title)),c.a.createElement("p",{className:"resultsnippt"},e.snippet))}))))};var x=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/search"},c.a.createElement(A,null)),c.a.createElement(f.a,{path:"/"},c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,{initialState:{term:null},reducer:y},c.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.1df2e71e.chunk.js.map