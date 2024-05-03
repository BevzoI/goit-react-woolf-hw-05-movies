"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[950],{587:(A,z,a)=>{a.d(z,{A:()=>c});var g=a(154);g.A.defaults.baseURL="https://api.themoviedb.org/3/",g.A.defaults.params={api_key:"8aba4e3419a44727b7eb66f35fce4fa2"};const c={getMoviesInTrend:async()=>{try{const{data:A}=await g.A.get("/trending/movie/day");return A.results}catch(A){console.log("error",A)}},searchMovies:async A=>{try{const{data:z}=await g.A.get("/search/movie?query=".concat(A));return z.results}catch(z){}},getMovieDetail:async A=>{try{const{data:z}=await g.A.get("movie/".concat(A));return z}catch(z){console.log(z)}},getCast:async A=>{try{const{data:z}=await g.A.get("/movie/".concat(A,"/credits"));return z.cast}catch(z){console.log(z)}},getReviews:async A=>{try{const{data:z}=await g.A.get("/movie/".concat(A,"/reviews"));return z.results}catch(z){console.log(z)}}}},569:(A,z,a)=>{a.r(z),a.d(z,{default:()=>B});var g=a(587),c=a(43),t=a(216);const e="Cast_wrapper__XmIBi",o="Cast_link__VaL-5",s="Cast_list__GlWio";var w=a(579);const B=()=>{const{movieId:A}=(0,t.g)(),[z,a]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(async()=>{const z=await g.A.getCast(A);a(z)})()}),[A]),(0,w.jsx)(w.Fragment,{children:z.length?(0,w.jsx)("ul",{className:e,children:z.map((A=>{let{name:z,id:a,character:g,profile_path:c}=A;return(0,w.jsxs)("li",{className:s,children:[(0,w.jsx)("img",{className:o,src:c?"https://image.tmdb.org/t/p/w300".concat(c):"".concat("data:image/jpeg;base64,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"),alt:z}),(0,w.jsx)("h4",{children:z}),(0,w.jsxs)("p",{children:["Character: ",g]})]},a)}))}):(0,w.jsx)("h2",{children:"We don't have any cast for this movie"})})}}}]);
//# sourceMappingURL=950.7aa95894.chunk.js.map