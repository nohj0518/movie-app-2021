(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(10),i=n.n(s),a=n(5),j=n.n(a),o=n(7),u=n(1),b=n(2);var d=function(){var e=Object(u.g)().id,t=function(){var t=Object(o.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,console.log(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(b.jsx)("h1",{children:"Detail"})},m=n(4),l=n(6);var h=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.summary,s=e.genres;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:n,alt:c}),Object(b.jsx)("h2",{children:Object(b.jsx)(l.b,{to:"/movie/".concat(t),children:c})}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("ul",{children:s.map((function(e){return Object(b.jsx)("li",{children:e},e)}))})]})};var O=function(){var e=Object(c.useState)(!0),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(m.a)(s,2),a=i[0],u=i[1],d=function(){var e=Object(o.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n.data.movies),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(b.jsx)("html",{lang:"ko",children:Object(b.jsx)("body",{children:Object(b.jsx)("div",{children:n?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsx)("div",{children:a.map((function(e){return Object(b.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})})})};var v=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/movie/:id",element:Object(b.jsx)(d,{})}),Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(O,{})})]})})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.85a4d704.chunk.js.map