import{f as o,g as n,h as r,r as s,o as t,c as a,a as l,d as K,i as h,j as x,F as E,k as w,K as A,l as B}from"./index-8d53067c.js";const C={class:"settings-drawer"},V={__name:"Index",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(i,{emit:p}){const u=o(()=>n(()=>import("./SettingsBasic-75753878.js"),["assets/SettingsBasic-75753878.js","assets/index-8d53067c.js","assets/index-57e6cd43.css"])),d=o(()=>n(()=>import("./SettingsAppearance-745d4234.js"),["assets/SettingsAppearance-745d4234.js","assets/index-8d53067c.js","assets/index-57e6cd43.css"])),v=o(()=>n(()=>import("./SettingsShortcutKey-0835d8cc.js"),["assets/SettingsShortcutKey-0835d8cc.js","assets/index-8d53067c.js","assets/index-57e6cd43.css"])),m=()=>{p("close")},c=r("basic"),b=r([{label:"基础设置",value:"basic",component:u},{label:"外观设置",value:"appearance",component:d},{label:"快捷键设置",value:"shortcutKey",component:v}]);return(k,_)=>{const y=s("a-tab-pane"),f=s("a-tabs"),g=s("a-drawer");return t(),a(g,{width:"80vw",title:"系统设置",placement:"right",open:i.open,onClose:m,rootClassName:"settings-root"},{default:l(()=>[K("div",C,[h(f,{activeKey:c.value,"onUpdate:activeKey":_[0]||(_[0]=e=>c.value=e),"tab-position":"left",style:{minHeight:"200px"}},{default:l(()=>[(t(!0),x(E,null,w(b.value,e=>(t(),a(y,{key:e.value,tab:e.label},{default:l(()=>[(t(),a(A,null,[(t(),a(B(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])])]),_:1},8,["open"])}}};export{V as default};
