import{_ as p,u as l,h as a,o as u,b as _,d as e,f as g,t as r,e as i}from"./index-f933208d.js";const f="/ifish/images/apps/gongde1.png";const m={class:"gongde"},v={class:"num"},y={__name:"Gongde",props:{type:{type:String,default:"use"}},setup(h){const{useAppStore:t}=l(),n=a(),s=a(),o=a(),d=()=>{s.value.classList.add("zoomed")},c=()=>{t.addGongde(),n.value.play(),s.value.classList.remove("zoomed"),o.value.classList.add("active"),setTimeout(()=>{o.value.classList.remove("active")},550)};return(R,k)=>(u(),_("div",m,[e("p",v,[g("功德："),e("span",null,r(i(t).gongde),1)]),e("p",{class:"tips",ref_key:"tipRef",ref:o},"功德+1",512),e("img",{ref_key:"gongdeRef",ref:s,onMousedown:d,onMouseup:c,class:"gongde-img",src:f,alt:""},null,544),e("audio",{ref_key:"gongdeAudioRef",ref:n,src:"./images/apps/gongde3.aac"},null,512)]))}},G=p(y,[["__scopeId","data-v-147d9dc1"]]);export{G as default};