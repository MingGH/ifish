import{_ as m,u as p,K as d,L as u,a as y,o as t,j as a,w as f,d as o,b as n,F as v,l as C,e as b,c3 as h,N as k,t as S,q as g}from"./index-2ff5ab0f.js";import{u as x}from"./utils-7dc22624.js";const w={class:"system-tags"},B=["onClick"],A={key:0,class:"system-icon"},D=["src"],E={class:"title"},G={__name:"SystemComponents",setup(L){const{useAppStore:c}=p(),r={wordGames:d(()=>u(()=>import("./WordGames-5ebec9f9.js"),["assets/WordGames-5ebec9f9.js","assets/index-2ff5ab0f.js","assets/index-6328e8eb.css","assets/WordGames-b7aabc69.css"]))},_=s=>{c.lists.push({id:x(21),type:"component",title:s.title,url:s.url,icon:s.icon,component:s.component,gridSize:[2,2]}),g({content:"添加成功"})};return(s,I)=>{const i=y("perfect-scrollbar");return t(),a(i,{class:"scroll-bar"},{default:f(()=>[o("div",w,[(t(!0),n(v,null,C(b(h),(e,l)=>(t(),n("div",{class:"system-tag",key:l,onClick:N=>_(e)},[e.icon?(t(),n("div",A,[o("img",{src:e.icon,alt:""},null,8,D)])):(t(),a(k(r[e.component]),{key:1,type:"preview"})),o("p",E,S(e.title),1)],8,B))),128))])]),_:1})}}},W=m(G,[["__scopeId","data-v-0bf73a5b"]]);export{W as default};