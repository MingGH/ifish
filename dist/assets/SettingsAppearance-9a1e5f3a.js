import{e as S,f as w,q as d,w as C,r as t,h as y,i as M,j as e,k as a,u as _,z as R}from"./index-dceb446a.js";import{u as A,e as i}from"./App-c167c564.js";const B={class:"settings-appearance"},N={__name:"SettingsAppearance",setup(E){const{useSystemStore:n}=A();S(()=>w(()=>import("./Index-38726d8f.js"),["assets/Index-38726d8f.js","assets/index-dceb446a.js","assets/index-c3c2086a.css","assets/App-c167c564.js","assets/App-e46b25bc.css","assets/Index-007e4bad.css"]));const l=d({...n.settings}),c={style:{width:"88px"}};d(!1),C(()=>n.settings.darkMode,p=>{l.value.darkMode=p},{immediate:!0});const m=()=>{n.changeMode()},f=()=>{i.emit("closeSettings"),i.emit("openBgSettings")};return(p,o)=>{const g=t("a-switch"),r=t("a-form-item"),v=t("a-slider"),u=t("a-col"),k=t("a-input-number"),h=t("a-row"),b=t("a-button"),x=t("a-form");return y(),M("div",B,[e(x,{model:l.value,"label-col":c},{default:a(()=>[e(r,{label:"暗黑模式",extra:"切换键：Ctrl + Q"},{default:a(()=>[e(g,{checked:l.value.darkMode,"onUpdate:checked":o[0]||(o[0]=s=>l.value.darkMode=s),onChange:m},null,8,["checked"])]),_:1}),e(r,{label:"主页圆角"},{default:a(()=>[e(h,{gutter:20},{default:a(()=>[e(u,{span:18},{default:a(()=>[e(v,{min:0,max:50,value:_(n).settings.appRadius,"onUpdate:value":o[1]||(o[1]=s=>_(n).settings.appRadius=s)},null,8,["value"])]),_:1}),e(u,{span:6},{default:a(()=>[e(k,{value:_(n).settings.appRadius,"onUpdate:value":o[2]||(o[2]=s=>_(n).settings.appRadius=s),min:1,max:50},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(r,{label:"桌面壁纸"},{default:a(()=>[e(b,{type:"primary",onClick:f},{default:a(()=>[R("设定壁纸")]),_:1})]),_:1})]),_:1},8,["model"])])}}};export{N as default};
