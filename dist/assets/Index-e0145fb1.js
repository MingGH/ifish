import{r as S}from"./utils-0774a10c.js";import{n as d}from"./nav-8caf7704.js";import{u as T,J as p,r as k,b as C,aV as V,o as l,h as s,f as a,F as u,i as v,n as b,b5 as _,m as x,g as m,w as f,by as A}from"./index-fff49d27.js";const F={class:"navs bf"},J={class:"nav-left"},E=["onClick"],j={class:"nav-box"},q={class:"nav-top"},G=["onClick"],H={class:"nav-title"},K={class:"nav-list"},M=["onClick"],O={alt:""},Y={__name:"Index",setup(P){const{useNavStore:r}=T(),y=p(()=>e=>S(e)),g=d.map(e=>e.title),N=p(()=>d[c.value].nav.map(e=>e.title)),c=k(r.active[0]||0),i=k(r.active[1]||0),w=p(()=>d[c.value].nav[i.value].nav),L=e=>{c.value=e,i.value=0,r.toggleActive(e,0)},$=e=>{i.value=e,r.toggleActive(c.value,e)},I=e=>{window.open(e.url,"_blank")};return(e,Q)=>{const h=C("perfect-scrollbar"),z=C("a-tooltip"),B=V("lazyload");return l(),s("div",F,[a("div",J,[a("ul",null,[(l(!0),s(u,null,v(x(g),(n,t)=>(l(),s("li",{class:b({active:c.value===t}),key:t,onClick:o=>L(t)},_(n),11,E))),128))])]),a("div",j,[a("div",q,[m(h,null,{default:f(()=>[a("ul",null,[(l(!0),s(u,null,v(N.value,(n,t)=>(l(),s("li",{class:b({active:i.value===t}),key:t,onClick:o=>$(t)},_(n),11,G))),128))])]),_:1})]),m(h,{class:"scroll-bar"},{default:f(()=>[(l(!0),s(u,null,v(w.value,(n,t)=>(l(),s("div",{class:"nav-box",key:t},[a("p",H,_(n.title),1),a("ul",K,[(l(!0),s(u,null,v(n.nav,(o,D)=>(l(),s("li",{key:D,onClick:R=>I(o)},[m(z,{title:o.desc&&`${o.name}：${o.desc}`,placement:"topLeft"},{default:f(()=>[A(a("img",O,null,512),[[B,y.value(o.url)]]),a("p",null,_(o.name),1)]),_:2},1032,["title"])],8,M))),128))])]))),128))]),_:1})])])}}};export{Y as default};
