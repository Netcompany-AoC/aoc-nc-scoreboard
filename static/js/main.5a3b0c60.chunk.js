(this.webpackJsonpaoc2022score=this.webpackJsonpaoc2022score||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l,s=t(1),o=t.n(s),r=t(8),n=t.n(r),c=(t(14),t(7)),i=t(4),_=t(2),d=t(9),u=(t(15),t(0));!function(e){e.BothStars="bothstars",e.Delta="delta",e.StarGain="stargain",e.FirstStar="firststar"}(l||(l={}));var m=36e5,v=3600,b=new Array(25).fill(!1);b=b.map((function(e,a){return!(a+1>1)}));var p=g(d);function g(e){for(var a=h("1",l.BothStars,Object.entries(e.members)),t=0;t<1;t++)O(""+(t+1),a);return a}function j(e,a,t){var l,s;return null===(l=e.completion_day_level[t])||void 0===l||null===(s=l[""+a])||void 0===s?void 0:s.get_star_ts}function h(e,a,t){switch(a){case l.BothStars:return y(e,t);case l.Delta:return function(e,a){return Object(i.a)(a).sort((function(a,t){var l=j(a[1],2,e),s=j(t[1],2,e),o=j(a[1],1,e),r=j(t[1],1,e);return l&&s?l-o-(s-r):l&&!s?l-o-Number.MAX_SAFE_INTEGER:!l&&s?Number.MAX_SAFE_INTEGER-(s-r):0}))}(e,t);case l.StarGain:return function(e,a){return Object(i.a)(a).sort((function(a,t){var l,s,o,r,n,c,i,_,d=parseInt(null===(l=a[1].completion_day_level[e])||void 0===l||null===(s=l[1])||void 0===s?void 0:s.star_gain)+parseInt(null===(o=a[1].completion_day_level[e])||void 0===o||null===(r=o[2])||void 0===r?void 0:r.star_gain);return parseInt(null===(n=t[1].completion_day_level[e])||void 0===n||null===(c=n[1])||void 0===c?void 0:c.star_gain)+parseInt(null===(i=t[1].completion_day_level[e])||void 0===i||null===(_=i[2])||void 0===_?void 0:_.star_gain)-d}))}(e,t);case l.FirstStar:return f(e,t)}}function y(e,a){return Object(i.a)(a).sort((function(a,t){var l=j(a[1],2,e),s=j(t[1],2,e),o=j(a[1],1,e),r=j(t[1],1,e);return l&&s?l-s:l&&!s?l-Number.MAX_SAFE_INTEGER:!l&&s?Number.MAX_SAFE_INTEGER-s:(null!==o&&void 0!==o?o:Number.MAX_SAFE_INTEGER)-(null!==r&&void 0!==r?r:Number.MAX_SAFE_INTEGER)}))}function f(e,a){return Object(i.a)(a).sort((function(a,t){var l=j(a[1],1,e),s=j(t[1],1,e);return l&&s?l-s:l&&!s?l-Number.MAX_SAFE_INTEGER:!l&&s?Number.MAX_SAFE_INTEGER-(s-s):0}))}function O(e,a){var t=f(e,a),l=y(e,a);t.forEach((function(a,t,l){var s,o=null===(s=a[1].completion_day_level[e])||void 0===s?void 0:s[1];o?o.star_gain=l.length-t:a[1].completion_day_level[e]={1:{star_gain:0}}})),l.forEach((function(a,t,l){var s,o=null===(s=a[1].completion_day_level[e])||void 0===s?void 0:s[2];o?o.star_gain=l.length-t:a[1].completion_day_level[e]=Object(c.a)(Object(c.a)({},a[1].completion_day_level[e]),{},{2:{star_gain:0}})}))}function S(e,a){if(void 0===e)return"";var t=new Date(2022,11,parseInt(a),6,0,0,0).getTime(),l=new Date(1e3*e).getTime()-t,s=Math.floor(l/m),o=Math.floor(l%m/6e4),r=Math.floor(l%6e4/1e3);return s+":"+o.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")}function N(e,a,t){var s,o,r,n,c,i;if(t===l.BothStars||t===l.FirstStar)return"".concat(S(null===(s=e.completion_day_level)||void 0===s||null===(o=s[a])||void 0===o||null===(r=o[1])||void 0===r?void 0:r.get_star_ts,a)," / ").concat(S(null===(n=e.completion_day_level)||void 0===n||null===(c=n[a])||void 0===c||null===(i=c[2])||void 0===i?void 0:i.get_star_ts,a));if(t===l.Delta)return function(e,a){var t,l,s,o,r,n,c=null===(t=e.completion_day_level)||void 0===t||null===(l=t[a])||void 0===l||null===(s=l[1])||void 0===s?void 0:s.get_star_ts,i=null===(o=e.completion_day_level)||void 0===o||null===(r=o[a])||void 0===r||null===(n=r[2])||void 0===n?void 0:n.get_star_ts;if(void 0===i)return"";var _=i-c,d=Math.floor(_/v),u=Math.floor(_%v/60),m=Math.floor(_%60);return d+":"+u.toString().padStart(2,"0")+":"+m.toString().padStart(2,"0")}(e,a);if(t===l.StarGain){var _,d,m,b,p,g,j=null===(_=e.completion_day_level)||void 0===_||null===(d=_[a])||void 0===d||null===(m=d[1])||void 0===m?void 0:m.star_gain,h=null===(b=e.completion_day_level)||void 0===b||null===(p=b[a])||void 0===p||null===(g=p[2])||void 0===g?void 0:g.star_gain;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"privboard-star-firstonly",children:j})," / ",Object(u.jsx)("span",{className:"privboard-star-both",children:h})," -> ",Object(u.jsx)("span",{className:"privboard-star-both",children:(null!==j&&void 0!==j?j:0)+(null!==h&&void 0!==h?h:0)})]})}}function x(e){switch(e){case 0:return"privboard-star-both";case 1:return"privboard-star-firstonly";case 2:return"privboard-third";default:return""}}var E=function(){var e=Object(s.useState)(p),a=Object(_.a)(e,2),t=a[0],o=a[1],r=Object(s.useState)("1"),n=Object(_.a)(r,2),c=n[0],i=n[1],d=Object(s.useState)(l.BothStars),m=Object(_.a)(d,2),v=m[0],j=m[1],y=Object(s.useState)(!1),f=Object(_.a)(y,2),O=f[0],S=f[1],E=Object(s.useState)(""),A=Object(_.a)(E,2),F=A[0],M=A[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("div",{className:"privboard-row",children:Object(u.jsx)("span",{className:"privboard-days",children:b.map((function(e,a){return e?Object(u.jsx)("a",{href:"",className:""+(a+1)===c?"bold":"",onClick:function(e){e.preventDefault(),e.stopPropagation(),i(""+(a+1)),o(h(""+(a+1),v,t))},children:(a+1).toString().split("").map((function(e,a){return Object(u.jsxs)(u.Fragment,{children:[a>0?Object(u.jsx)("br",{}):Object(u.jsx)(u.Fragment,{}),e]})}))}):Object(u.jsx)("span",{children:(a+1).toString().split("").map((function(e,a){return Object(u.jsxs)(u.Fragment,{children:[a>0?Object(u.jsx)("br",{}):Object(u.jsx)(u.Fragment,{}),e]})}))})}))})})}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("select",{value:v,onChange:function(e){var a=e.target.value;j(a),o(h(c,a,t))},children:[Object(u.jsx)("option",{value:l.BothStars,children:"Time to both stars"}),Object(u.jsx)("option",{value:l.FirstStar,children:"Time to first star"}),Object(u.jsx)("option",{value:l.Delta,children:"Time between star 1 and 2"}),Object(u.jsx)("option",{value:l.StarGain,children:"Points gained"})]}),t.map((function(e,a){return function(e,a,t,l){var s;return Object(u.jsxs)("div",{className:"privboard-row",children:[Object(u.jsxs)("span",{className:"privboard-position",children:[t+1,")"]})," ",N(e,a,l)," ",Object(u.jsx)("span",{className:"privboard-name ".concat(x(t)," ").concat(null===e.name?"leaderboard-anon":""),children:null!==(s=e.name)&&void 0!==s?s:"(anonymous user #".concat(e.id,")")})]})}(e[1],c,a,v)}))]}),Object(u.jsxs)("aside",{className:"score-input-aside ".concat(O?"expanded":""),children:[Object(u.jsx)("label",{htmlFor:"scoresinput",children:"Insert custom scoreboard JSON"}),Object(u.jsx)("button",{className:"link-like-button",onClick:function(){return S(!O)},children:O?"-":"+"}),O&&Object(u.jsx)("textarea",{id:"scoresinput",value:F,onChange:function(e){M(e.target.value)}}),O&&Object(u.jsx)("button",{onClick:function(){var e=g(JSON.parse(F));o(e)},children:"Set scoreboard"})]})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,l=a.getFID,s=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),l(e),s(e),o(e),r(e)}))};n.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),A()},9:function(e){e.exports=JSON.parse('{"owner_id":2252784,"members":{"286524":{"id":286524,"name":"Thomas Feld","completion_day_level":{},"last_star_ts":0,"global_score":0,"stars":0,"local_score":0},"526904":{"last_star_ts":0,"global_score":0,"completion_day_level":{},"stars":0,"local_score":0,"id":526904,"name":"Kyle Kumar"},"618374":{"completion_day_level":{},"global_score":0,"last_star_ts":0,"local_score":0,"stars":0,"id":618374,"name":"Kenneth Jensen"},"737929":{"last_star_ts":0,"global_score":0,"completion_day_level":{},"stars":0,"local_score":0,"id":737929,"name":"Rasmus Wismann"},"978388":{"completion_day_level":{},"last_star_ts":0,"global_score":0,"local_score":0,"stars":0,"id":978388,"name":"chce"},"1044857":{"last_star_ts":0,"global_score":0,"completion_day_level":{},"stars":0,"local_score":0,"id":1044857,"name":"Lasse Nielsen"},"1235230":{"stars":0,"local_score":0,"completion_day_level":{},"last_star_ts":0,"global_score":0,"name":"Niels Munthe","id":1235230},"1494546":{"id":1494546,"name":null,"completion_day_level":{},"global_score":0,"last_star_ts":0,"local_score":0,"stars":0},"1501223":{"name":null,"id":1501223,"local_score":0,"stars":0,"completion_day_level":{},"global_score":0,"last_star_ts":0},"1522932":{"completion_day_level":{},"global_score":0,"last_star_ts":0,"local_score":0,"stars":0,"id":1522932,"name":"mkdanetcompany"},"1576687":{"stars":0,"local_score":0,"last_star_ts":0,"global_score":0,"completion_day_level":{},"name":"Benjamin Meier-Andersen","id":1576687},"1604202":{"id":1604202,"name":"Mathias Gammelgaard","global_score":0,"last_star_ts":0,"completion_day_level":{},"local_score":0,"stars":0},"1967281":{"completion_day_level":{},"last_star_ts":0,"global_score":0,"stars":0,"local_score":0,"id":1967281,"name":"KARA"},"2252784":{"name":"Netcompany-AoC-DK","id":2252784,"local_score":0,"stars":0,"completion_day_level":{},"last_star_ts":0,"global_score":0},"2257801":{"id":2257801,"name":"Lasse Soelberg","completion_day_level":{},"last_star_ts":0,"global_score":0,"stars":0,"local_score":0},"2257835":{"name":"Lasse Kokholm","id":2257835,"stars":0,"local_score":0,"completion_day_level":{},"last_star_ts":0,"global_score":0},"2257847":{"name":"Dong Nguyen","id":2257847,"local_score":0,"stars":0,"last_star_ts":0,"global_score":0,"completion_day_level":{}},"2257860":{"global_score":0,"last_star_ts":0,"completion_day_level":{},"stars":0,"local_score":0,"id":2257860,"name":"simontolinsson"},"2257864":{"id":2257864,"name":"Christoffer Nielsen","global_score":0,"last_star_ts":0,"completion_day_level":{},"stars":0,"local_score":0},"2258628":{"id":2258628,"name":"simonfelding","completion_day_level":{},"global_score":0,"last_star_ts":0,"local_score":0,"stars":0},"2259195":{"name":"Jens Fr\xf8kj\xe6r","id":2259195,"stars":0,"local_score":0,"completion_day_level":{},"global_score":0,"last_star_ts":0},"2259215":{"id":2259215,"name":"Thomas Talpalar","completion_day_level":{},"last_star_ts":0,"global_score":0,"local_score":0,"stars":0},"2259218":{"id":2259218,"name":"Magnus Kirkegaard Jensen","global_score":0,"last_star_ts":0,"completion_day_level":{},"local_score":0,"stars":0},"2259336":{"name":"Christian Eske Hansen","id":2259336,"stars":0,"local_score":0,"global_score":0,"last_star_ts":0,"completion_day_level":{}},"2259372":{"stars":0,"local_score":0,"global_score":0,"last_star_ts":0,"completion_day_level":{},"name":"Mads Bau","id":2259372},"2259385":{"name":"pbni-netc","id":2259385,"stars":0,"local_score":0,"completion_day_level":{},"last_star_ts":0,"global_score":0},"2259411":{"id":2259411,"name":"Benjamin Kj\xf8lby Parbst","completion_day_level":{},"global_score":0,"last_star_ts":0,"stars":0,"local_score":0},"2259418":{"name":"atrain77","id":2259418,"stars":0,"local_score":0,"last_star_ts":0,"global_score":0,"completion_day_level":{}},"2259460":{"completion_day_level":{},"last_star_ts":0,"global_score":0,"local_score":0,"stars":0,"id":2259460,"name":"casha17"},"2260022":{"name":"Niels Teglsbo","id":2260022,"local_score":0,"stars":0,"completion_day_level":{},"global_score":0,"last_star_ts":0},"2263234":{"last_star_ts":0,"global_score":0,"completion_day_level":{},"local_score":0,"stars":0,"id":2263234,"name":"Lars Engholm Johansen"},"2265491":{"local_score":0,"stars":0,"completion_day_level":{},"last_star_ts":0,"global_score":0,"name":"Viktor Karlsson","id":2265491},"2265504":{"stars":0,"local_score":0,"global_score":0,"last_star_ts":0,"completion_day_level":{},"name":"Dmitry Rachkovsky","id":2265504},"2265524":{"name":"Rasmus Hye","id":2265524,"local_score":0,"stars":0,"completion_day_level":{},"last_star_ts":0,"global_score":0},"2265645":{"name":"Daniel Alstrup","id":2265645,"local_score":0,"stars":0,"completion_day_level":{},"last_star_ts":0,"global_score":0}},"event":"2022"}')}},[[17,1,2]]]);
//# sourceMappingURL=main.5a3b0c60.chunk.js.map