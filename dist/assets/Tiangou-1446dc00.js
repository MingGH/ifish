import{_,r as c,b as d,o as r,h as g,f as t,bB as v,g as m,w as f,b5 as b,F as h,bI as k,p as x,k as I}from"./index-fff49d27.js";const y="/ifish/images/apps/tiangou.jpg";const p=s=>(x("data-v-a85cc2e2"),s=s(),I(),s),C=["src"],w={class:"tiangou"},B=p(()=>t("img",{src:y,alt:""},null,-1)),S={class:"text"},T=p(()=>t("p",null,"宝",-1)),D={__name:"Tiangou",props:{app:{type:Object,default:()=>{}}},setup(s){const o=c(!1),a=c(""),n=()=>{k.get("https://api.moyuduck.com/tiangou").then(i=>{a.value=i.data.data})};return n(),(i,e)=>{const u=d("IDialog");return r(),g(h,null,[t("img",{src:s.app.icon,alt:"",onClick:e[0]||(e[0]=v(l=>o.value=!0,["stop"]))},null,8,C),m(u,{title:"舔狗日记",visible:o.value,onOk:e[1]||(e[1]=l=>o.value=!1),onCancel:e[2]||(e[2]=l=>o.value=!1)},{default:f(()=>[t("div",w,[B,t("div",S,[T,t("p",null,b(a.value),1)]),t("button",{title:"继续舔",onClick:n})])]),_:1},8,["visible"])],64)}}},$=_(D,[["__scopeId","data-v-a85cc2e2"]]);export{$ as default};
