import{r as B}from"./utils-5dfaf7e4.js";import{n as p}from"./nav-8caf7704.js";import{u as D,a as C,r as m,w as S,n as A,b,b5 as F,o as a,d as l,g as s,F as u,m as v,h as g,t as _,e as V,c as f,i as h,l as E}from"./index-de1a6977.js";const J={class:"navs bf"},j={class:"nav-left"},q=["onClick"],G={class:"nav-box"},H={class:"nav-top"},K=["onClick"],M={class:"nav-title"},O={class:"nav-list"},P=["onClick"],Q={alt:""},ee={__name:"Index",setup(R){const{useNavStore:i}=D(),y=C(()=>e=>B(e)),w=p.map(e=>e.title),N=C(()=>p[n.value].nav.map(e=>e.title)),n=m(i.active[0]||0),r=m(i.active[1]||0),d=m([]);S(()=>[n.value,r.value],()=>{d.value=[],A(()=>{d.value=p[n.value].nav[r.value].nav})},{immediate:!0,deep:!0});const L=e=>{n.value=e,r.value=0,i.toggleActive(e,0)},$=e=>{r.value=e,i.toggleActive(n.value,e)},I=e=>{window.open(e.url,"_blank")};return(e,U)=>{const k=b("perfect-scrollbar"),T=b("a-tooltip"),x=F("lazyload");return a(),l("div",J,[s("div",j,[s("ul",null,[(a(!0),l(u,null,v(V(w),(c,t)=>(a(),l("li",{class:g({active:n.value===t}),key:t,onClick:o=>L(t)},_(c),11,q))),128))])]),s("div",G,[s("div",H,[f(k,null,{default:h(()=>[s("ul",null,[(a(!0),l(u,null,v(N.value,(c,t)=>(a(),l("li",{class:g({active:r.value===t}),key:t,onClick:o=>$(t)},_(c),11,K))),128))])]),_:1})]),f(k,{class:"scroll-bar"},{default:h(()=>[(a(!0),l(u,null,v(d.value,(c,t)=>(a(),l("div",{class:"nav-box",key:t},[s("p",M,_(c.title),1),s("ul",O,[(a(!0),l(u,null,v(c.nav,(o,z)=>(a(),l("li",{key:z,onClick:W=>I(o)},[f(T,{title:o.desc&&`${o.name}：${o.desc}`,placement:"topLeft"},{default:h(()=>[E(s("img",Q,null,512),[[x,y.value(o.url)]]),s("p",null,_(o.name),1)]),_:2},1032,["title"])],8,P))),128))])]))),128))]),_:1})])])}}};export{ee as default};
