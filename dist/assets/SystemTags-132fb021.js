import{_ as u,u as y,h as g,I as v,r as h,aU as f,o,j as r,F as k,k as S,i as x,a as b,bx as C,d as i,b4 as I,bK as T}from"./index-7ecf179d.js";import{n as z}from"./nav-8caf7704.js";import{r as l,u as B}from"./utils-0774a10c.js";const D={class:"system-tags"},$=["onClick"],w=["alt"],F={__name:"SystemTags",setup(L){const{useAppStore:_}=y(),n=g([]);z.map(e=>{e.nav.map(c=>{c.nav.map(s=>{s.nav.map(a=>{n.value.push(a)})})})});const d=v(()=>e=>l(e)),m=e=>{_.lists.push({id:B(21),type:"bookmark",title:e.name,url:e.url,icon:l(e.url),description:e.desc,gridSize:[1,1]}),T({content:"添加成功"})};return(e,c)=>{const s=h("a-tooltip"),a=f("lazyload");return o(),r("div",D,[(o(!0),r(k,null,S(n.value,(t,p)=>(o(),r("div",{class:"system-tag",key:p,onClick:N=>m(t)},[x(s,{title:t.desc&&`${t.name}：${t.desc}`},{default:b(()=>[C(i("img",{alt:t.name},null,8,w),[[a,d.value(t.url)]]),i("p",null,I(t.name),1)]),_:2},1032,["title"])],8,$))),128))])}}},E=u(F,[["__scopeId","data-v-29e07276"]]);export{E as default};