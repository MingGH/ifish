import{e as a,f as c,r as y,h as t,C as i,k as v,s as o,i as n,F as C,t as f,u as h,H as k,B as S}from"./index-fbf18cb4.js";import{_ as g,u as b,h as x,b as B,t as E}from"./App-692a8045.js";const A={class:"system-tags"},D=["onClick"],G={key:0,class:"system-icon"},w=["src"],I={class:"title"},L={__name:"SystemComponents",setup(O){const{useAppStore:r}=b(),_=a(()=>c(()=>import("./WordGames-b06aaf24.js"),["assets/WordGames-b06aaf24.js","assets/index-fbf18cb4.js","assets/index-c3c2086a.css","assets/App-692a8045.js","assets/App-e46b25bc.css","assets/WordGames-5992e476.css"])),l=a(()=>c(()=>import("./OnlineMiniGames-c2a353bf.js"),["assets/OnlineMiniGames-c2a353bf.js","assets/index-fbf18cb4.js","assets/index-c3c2086a.css","assets/App-692a8045.js","assets/App-e46b25bc.css","assets/OnlineMiniGames-7d5fa132.css"])),m={wordGames:_,onlineMiniGames:l},p=e=>{r.lists.push({id:B(21),type:"component",title:e.title,url:e.url,icon:e.icon,component:e.component,gridSize:[2,2]}),E({content:"添加成功"})};return(e,P)=>{const d=y("perfect-scrollbar");return t(),i(d,{class:"scroll-bar"},{default:v(()=>[o("div",A,[(t(!0),n(C,null,f(h(x),(s,u)=>(t(),n("div",{class:"system-tag",key:u,onClick:V=>p(s)},[s.icon?(t(),n("div",G,[o("img",{src:s.icon,alt:""},null,8,w)])):(t(),i(k(m[s.component]),{key:1,type:"preview"})),o("p",I,S(s.title),1)],8,D))),128))])]),_:1})}}},R=g(L,[["__scopeId","data-v-308b44d8"]]);export{R as default};