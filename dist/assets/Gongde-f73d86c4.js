import{_ as g,u,r as a,o as c,d as p,g as e,f as r,t as f,e as m,x as v,y}from"./index-de1a6977.js";const _="/ifish/images/apps/gongde1.png";const h=s=>(v("data-v-b505b02e"),s=s(),y(),s),k={key:0,class:"gongde"},S={class:"num"},b={key:1,class:"gongde"},x=h(()=>e("img",{src:_,alt:""},null,-1)),R=[x],G={__name:"Gongde",props:{type:{type:String,default:"use"}},setup(s){const{useAppStore:n}=u(),d=a(),o=a(),t=a(),i=()=>{o.value.classList.add("zoomed")},l=()=>{n.addGongde(),d.value.play(),o.value.classList.remove("zoomed"),t.value.classList.add("active"),setTimeout(()=>{t.value.classList.remove("active")},550)};return(I,L)=>s.type=="use"?(c(),p("div",k,[e("p",S,[r("功德："),e("span",null,f(m(n).gongde),1)]),e("p",{class:"tips",ref_key:"tipRef",ref:t},"功德+1",512),e("img",{ref_key:"gongdeRef",ref:o,onMousedown:i,onMouseup:l,class:"gongde-img",src:_,alt:""},null,544),e("audio",{ref_key:"gongdeAudioRef",ref:d,src:"./images/apps/gongde3.aac"},null,512)])):(c(),p("div",b,R))}},w=g(G,[["__scopeId","data-v-b505b02e"]]);export{w as default};
