import{D as u}from"./vuedraggable.umd-a6c85275.js";import{_ as m,u as h}from"./App-13cdd675.js";import{r as o,h as b,i as w,s as c,j as s,k as a,z as g,u as n,B as v,M as k,N}from"./index-174dcb6a.js";const S=t=>(k("data-v-6eff8755"),t=t(),N(),t),x={class:"settings-news"},y={class:"header"},B=S(()=>c("p",null,"支持拖拽排序、是否启用",-1)),I={class:"news-item"},C={__name:"SettingsNews",setup(t){const{useNewsStore:l}=h(),i=()=>{l.reset()};return(D,V)=>{const _=o("a-button"),r=o("a-popconfirm"),p=o("a-switch"),d=o("perfect-scrollbar");return b(),w("div",x,[c("div",y,[B,s(r,{title:"确认重置资讯设置？",placement:"left",onConfirm:i},{default:a(()=>[s(_,{size:"small",type:"primary"},{default:a(()=>[g("重置")]),_:1})]),_:1})]),s(d,{class:"scroll-bar"},{default:a(()=>[s(n(u),{list:n(l).lists,animation:100,"item-key":"id",class:"list-group news-box",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10},{item:a(({element:e})=>[c("div",I,[c("p",null,v(e.label),1),s(p,{checked:e.visible,"onUpdate:checked":f=>e.visible=f,title:`${e.visible?"关闭":"启用"} ${e.label}`},null,8,["checked","onUpdate:checked","title"])])]),_:1},8,["list"])]),_:1})])}}},j=m(C,[["__scopeId","data-v-6eff8755"]]);export{j as default};
