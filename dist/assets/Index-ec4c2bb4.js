import{r as D}from"./utils-0774a10c.js";import{n as d}from"./nav-a6574aee.js";import{u as S,I as p,h as k,r as C,aU as T,o as l,j as a,d as s,F as u,k as v,n as b,b4 as _,e as A,i as m,a as f,bx as F}from"./index-ae9826bb.js";const V={class:"navs bf"},j={class:"nav-left"},E=["onClick"],J={class:"nav-box"},U={class:"nav-top"},q=["onClick"],G={class:"nav-title"},H={class:"nav-list"},K=["onClick"],M={alt:""},Y={__name:"Index",setup(O){const{useNavStore:r}=S(),y=p(()=>e=>D(e)),g=d.map(e=>e.title),N=p(()=>d[c.value].nav.map(e=>e.title)),c=k(r.active[0]||0),i=k(r.active[1]||0),I=p(()=>d[c.value].nav[i.value].nav),L=e=>{c.value=e,i.value=0,r.toggleActive(e,0)},$=e=>{i.value=e,r.toggleActive(c.value,e)},w=e=>{window.open(e.url,"_blank")};return(e,P)=>{const h=C("perfect-scrollbar"),x=C("a-tooltip"),z=T("lazyload");return l(),a("div",V,[s("div",j,[s("ul",null,[(l(!0),a(u,null,v(A(g),(n,t)=>(l(),a("li",{class:b({active:c.value===t}),key:t,onClick:o=>L(t)},_(n),11,E))),128))])]),s("div",J,[s("div",U,[m(h,null,{default:f(()=>[s("ul",null,[(l(!0),a(u,null,v(N.value,(n,t)=>(l(),a("li",{class:b({active:i.value===t}),key:t,onClick:o=>$(t)},_(n),11,q))),128))])]),_:1})]),m(h,{class:"scroll-bar"},{default:f(()=>[(l(!0),a(u,null,v(I.value,(n,t)=>(l(),a("div",{class:"nav-box",key:t},[s("p",G,_(n.title),1),s("ul",H,[(l(!0),a(u,null,v(n.nav,(o,B)=>(l(),a("li",{key:B,onClick:Q=>w(o)},[m(x,{title:o.desc&&`${o.name}：${o.desc}`,placement:"topLeft"},{default:f(()=>[F(s("img",M,null,512),[[z,y.value(o.url)]]),s("p",null,_(o.name),1)]),_:2},1032,["title"])],8,K))),128))])]))),128))]),_:1})])])}}};export{Y as default};