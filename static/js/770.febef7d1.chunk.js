"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[770],{426:(e,r,t)=>{t.d(r,{LF:()=>c,Nt:()=>n,UM:()=>d,dk:()=>l,q8:()=>o});var s=t(213);const a="d934da8882e5322d29af0f8a1ae42476",i=s.A.create({baseURL:"https://api.themoviedb.org/3",timeout:1e4}),n=async()=>{try{return(await i.get(`/trending/movie/day?api_key=${a}`)).data.results}catch(e){return console.error("Error fetching trending movies:",e),[]}},o=async e=>{try{return(await i.get(`/search/movie?api_key=${a}&query=${e}`)).data.results}catch(r){return console.error("Error searching movies:",r),[]}},c=async e=>{try{return(await i.get(`/movie/${e}?api_key=${a}`)).data}catch(r){return console.error(`Error fetching details for movie ${e}:`,r),null}},l=async e=>{try{return(await i.get(`/movie/${e}/credits?api_key=${a}`)).data.cast}catch(r){return console.error(`Error fetching credits for movie ${e}:`,r),[]}},d=async e=>{try{return(await i.get(`/movie/${e}/reviews?api_key=${a}`)).data.results}catch(r){return console.error(`Error fetching reviews for movie ${e}:`,r),[]}}},770:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var s=t(43),a=t(216),i=t(475),n=t(426),o=t(610),c=t(579);const l=()=>{const{movieId:e}=(0,a.g)(),[r,t]=(0,s.useState)(null),l=(0,a.Zp)(),{searchHistory:d}=(0,s.useContext)(o.m);if((0,s.useEffect)((()=>{(async()=>{try{const r=await(0,n.LF)(e);t(r)}catch(r){console.error("Failed to fetch movie details:",r)}})()}),[e]),!r)return(0,c.jsx)("div",{children:"Loading..."});return(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{onClick:()=>{d.length>0?l(`/movies?query=${d[d.length-1]}`):l("/")},children:"Go back"}),(0,c.jsx)("h1",{children:r.title}),(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)("img",{src:r.poster_path?`https://image.tmdb.org/t/p/w500${r.poster_path}`:"https://via.placeholder.com/500x750",alt:r.title,style:{width:"200px",marginRight:"20px"}}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Overview:"})," ",r.overview]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Genres:"})," ",r.genres.map((e=>e.name)).join(", ")]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Release Date:"})," ",r.release_date]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Rating:"})," ",r.vote_average]})]})]}),(0,c.jsxs)("nav",{children:[(0,c.jsx)(i.N_,{to:"cast",children:"Cast"})," | ",(0,c.jsx)(i.N_,{to:"reviews",children:"Reviews"})]}),(0,c.jsx)(a.sv,{})]})}}}]);
//# sourceMappingURL=770.febef7d1.chunk.js.map