import{_ as u,u as g,h as t,o as c,j as p,d as e,W as r,b4 as f,e as m,p as v,b as h}from"./index-57fe2805.js";const _="/ifish/images/apps/gongde1.png";const y=s=>(v("data-v-778869aa"),s=s(),h(),s),k={key:0,class:"gongde"},S={class:"num"},R={key:1,class:"gongde"},x=y(()=>e("img",{src:_,alt:""},null,-1)),G=[x],I={__name:"Gongde",props:{type:{type:String,default:"use"}},setup(s){const{useAppStore:n}=g(),d=t(),o=t(),a=t(),i=()=>{o.value.classList.add("zoomed")},l=()=>{n.addGongde(),d.value.play(),o.value.classList.remove("zoomed"),a.value.classList.add("active"),setTimeout(()=>{a.value.classList.remove("active")},350)};return(L,M)=>s.type=="use"?(c(),p("div",k,[e("p",S,[r("功德："),e("span",null,f(m(n).gongde),1)]),e("p",{class:"tips",ref_key:"tipRef",ref:a},"功德+1",512),e("img",{ref_key:"gongdeRef",ref:o,onMousedown:i,onMouseup:l,class:"gongde-img",src:_,alt:""},null,544),e("audio",{ref_key:"gongdeAudioRef",ref:d,src:"./images/apps/gongde3.aac"},null,512)])):(c(),p("div",R,G))}},A=u(I,[["__scopeId","data-v-778869aa"]]);export{A as default};