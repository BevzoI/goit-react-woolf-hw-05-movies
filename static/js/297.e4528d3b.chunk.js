"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[297],{587:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(154);s.A.defaults.baseURL="https://api.themoviedb.org/3/",s.A.defaults.params={api_key:"8aba4e3419a44727b7eb66f35fce4fa2"};const r={getMoviesInTrend:async()=>{try{const{data:e}=await s.A.get("/trending/movie/day");return e.results}catch(e){console.log("error",e)}},searchMovies:async e=>{try{const{data:t}=await s.A.get("/search/movie?query=".concat(e));return t.results}catch(t){}},getMovieDetail:async e=>{try{const{data:t}=await s.A.get("movie/".concat(e));return t}catch(t){console.log(t)}},getCast:async e=>{try{const{data:t}=await s.A.get("/movie/".concat(e,"/credits"));return t.cast}catch(t){console.log(t)}},getReviews:async e=>{try{const{data:t}=await s.A.get("/movie/".concat(e,"/reviews"));return t.results}catch(t){console.log(t)}}}},290:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(579);const r=e=>{let{children:t,className:a,onClick:r,...c}=e;return(0,s.jsx)("button",{className:a,onClick:r,...c,children:t})}},297:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s,r=a(587),c=a(290),n=a(43);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},i.apply(this,arguments)}function l(e,t){let{title:a,titleId:r,...c}=e;return n.createElement("svg",i({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"299.021px",height:"299.021px",viewBox:"0 0 299.021 299.021",style:{enableBackground:"new 0 0 299.021 299.021"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,s||(s=n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977 c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516 c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776 c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993 C293.802,254.384,293.34,254.432,292.866,254.432z"})))))}const o=n.forwardRef(l);a.p;var d=a(216),h=a(475);const v="MovieDetails_wrap__84S6L",g="MovieDetails_img__uOAom",m="MovieDetails_inner__TSx+o",u="MovieDetails_titleFilm__7JHLO",p="MovieDetails_goBackBtn__WL+X0";var w=a(579);const x=()=>{var e,t;const{movieId:a}=(0,d.g)(),[s,i]=(0,n.useState)(null),l=(0,d.zy)(),x=(0,d.Zp)(),_=null!==(e=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";if((0,n.useEffect)((()=>{(async()=>{const e=await r.A.getMovieDetail(a);i(e)})()}),[a]),!s)return;const{title:f,poster_path:y,release_date:b,overview:j,genres:k,backdrop_path:A}=s;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:v,style:{backgroundImage:"linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)),url(https://image.tmdb.org/t/p/original".concat(A,")")},children:[(0,w.jsx)(c.A,{type:"button",className:p,onClick:()=>{x(_)},children:(0,w.jsx)(o,{width:"40",height:"40"})}),(0,w.jsx)("img",{className:g,src:"https://image.tmdb.org/t/p/w500".concat(y),alt:f}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsxs)("h2",{className:u,children:[f,": (",b.slice(0,4),")"]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:j}),(0,w.jsx)("h3",{children:"Genres"}),k.map((e=>{let{id:t,name:a}=e;return(0,w.jsx)("li",{children:a},t)}))]})]}),(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(h.k2,{to:"cast",state:{from:_},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(h.k2,{to:"reviews",state:{from:_},children:"Reviews"})})]}),(0,w.jsx)(d.sv,{})]})}}}]);
//# sourceMappingURL=297.e4528d3b.chunk.js.map