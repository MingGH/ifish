import{_ as x,f as o,g as n,h as r,r as s,o as t,c as a,a as _,d as I,i as K,j as h,F as E,k as w,K as A,l as B}from"./index-735e4719.js";const C={class:"settings-drawer"},k={__name:"Index",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(p,{emit:i}){const d=o(()=>n(()=>import("./SettingsBasic-fe31e86a.js"),["assets/SettingsBasic-fe31e86a.js","assets/index-735e4719.js","assets/index-c1b96c2f.css"])),u=o(()=>n(()=>import("./SettingsAppearance-45e1e033.js"),["assets/SettingsAppearance-45e1e033.js","assets/index-735e4719.js","assets/index-c1b96c2f.css"])),v=o(()=>n(()=>import("./SettingsShortcutKey-f6472ae2.js"),["assets/SettingsShortcutKey-f6472ae2.js","assets/index-735e4719.js","assets/index-c1b96c2f.css"])),m=()=>{i("close")},c=r("basic"),f=r([{label:"基础设置",value:"basic",component:d},{label:"外观设置",value:"appearance",component:u},{label:"快捷键设置",value:"shortcutKey",component:v}]);return(V,l)=>{const b=s("a-tab-pane"),y=s("a-tabs"),g=s("a-drawer");return t(),a(g,{width:"80vw",title:"系统设置",placement:"right",open:p.open,onClose:m,rootClassName:"settings-root"},{default:_(()=>[I("div",C,[K(y,{activeKey:c.value,"onUpdate:activeKey":l[0]||(l[0]=e=>c.value=e),"tab-position":"left",style:{minHeight:"200px"}},{default:_(()=>[(t(!0),h(E,null,w(f.value,e=>(t(),a(b,{key:e.value,tab:e.label},{default:_(()=>[(t(),a(A,null,[(t(),a(B(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])])]),_:1},8,["open"])}}},L=x(k,[["__scopeId","data-v-5fefea7b"]]);export{L as default};