import{H as o,I as n,r as p,a as l,o as t,h as s,g as _,f as a,c as h,b as K,F as A,j as I,K as w,L as B}from"./index-9e647ead.js";const C={class:"settings-drawer"},L=a("div",{class:"intro"},[a("p",null,"说明:"),a("p",null,"您修改的设置内容仅存储在您浏览器缓存中，本站不存储任何内容；"),a("p",null,"当您清理浏览器缓存或更换浏览器后需要重新设置，感谢您的支持与理解!")],-1),P={__name:"Index",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(i,{emit:u}){const d=o(()=>n(()=>import("./SettingsBasic-84effa22.js"),["assets/SettingsBasic-84effa22.js","assets/index-9e647ead.js","assets/index-2c176f14.css"])),v=o(()=>n(()=>import("./SettingsAppearance-3661dc6d.js"),["assets/SettingsAppearance-3661dc6d.js","assets/index-9e647ead.js","assets/index-2c176f14.css","assets/SettingsAppearance-97225f33.css"])),m=o(()=>n(()=>import("./SettingsShortcutKey-aeb523e5.js"),["assets/SettingsShortcutKey-aeb523e5.js","assets/index-9e647ead.js","assets/index-2c176f14.css","assets/SettingsShortcutKey-374049cb.css"])),b=o(()=>n(()=>import("./SettingsExport-1c0a2c8f.js"),["assets/SettingsExport-1c0a2c8f.js","assets/index-9e647ead.js","assets/index-2c176f14.css","assets/SettingsExport-28dbf199.css"])),y=()=>{u("close")},c=p("basic"),f=p([{label:"基础设置",value:"basic",component:d},{label:"外观设置",value:"appearance",component:v},{label:"快捷键设置",value:"shortcutKey",component:m},{label:"导入导出",value:"export",component:b}]);return(V,r)=>{const g=l("a-tab-pane"),E=l("a-tabs"),x=l("a-drawer");return t(),s(x,{width:"80vw",title:"系统设置",placement:"right",open:i.open,onClose:y,rootClassName:"settings-root"},{default:_(()=>[a("div",C,[h(E,{activeKey:c.value,"onUpdate:activeKey":r[0]||(r[0]=e=>c.value=e),"tab-position":"left",style:{minHeight:"400px"}},{default:_(()=>[(t(!0),K(A,null,I(f.value,e=>(t(),s(g,{key:e.value,tab:e.label},{default:_(()=>[(t(),s(w,null,[(t(),s(B(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"]),L])]),_:1},8,["open"])}}};export{P as default};