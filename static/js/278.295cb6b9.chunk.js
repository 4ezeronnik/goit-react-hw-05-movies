"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{278:function(t,e,r){r.r(e);var n=r(885),u=r(791),a=r(739),c=r(731),i=r(390),s=r(184);e.default=function(){var t,e=(0,a.TH)(),r=(0,u.useState)([]),o=(0,n.Z)(r,2),f=o[0],p=o[1],l=(0,c.lr)(),v=(0,n.Z)(l,2),d=v[0],h=v[1],m=d.get(null!==(t="query")?t:"");return(0,u.useEffect)((function(){if(null!==m)return m?void(0,i.bI)(m).then((function(t){0===t.length&&(alert("Sorry, unfortunately we did not find these films"),h({})),t.length>0&&p(t)})):(alert("There are no movies"),void h({}))}),[m,h]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;h({query:e.elements.query.value.trim()}),e.reset()},children:[(0,s.jsx)("input",{type:"text",name:"query"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})}),f&&(0,s.jsx)("ul",{children:f.map((function(t){var r;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"".concat(t.id),state:{from:e},children:null!==(r=t.title)&&void 0!==r?r:t.name})},t.id)}))})]})}},390:function(t,e,r){r.d(e,{Hx:function(){return l},Y5:function(){return f},bI:function(){return o},uV:function(){return p},wr:function(){return s}});var n=r(861),u=r(687),a=r.n(u),c=r(44),i="755b9c6082cc4d5d6e54f37544fe5f24";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,n.Z)(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("movie/".concat(e,"?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=278.295cb6b9.chunk.js.map