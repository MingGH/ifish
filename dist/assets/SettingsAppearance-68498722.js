import{b as S,e as w,q as d,w as C,f as t,h as y,i as M,j as e,k as a,u as _,z as R}from"./index-f2af9d8e.js";import{u as A,e as i}from"./App-45e32b5c.js";const B={class:"settings-appearance"},N={__name:"SettingsAppearance",setup(E){const{useSystemStore:n}=A();S(()=>w(()=>import("./Index-f55e3795.js"),["assets/Index-f55e3795.js","assets/index-f2af9d8e.js","assets/index-8733d98e.css","assets/App-45e32b5c.js","assets/App-e46b25bc.css","assets/Index-007e4bad.css"]));const l=d({...n.settings}),c={style:{width:"88px"}};d(!1),C(()=>n.settings.darkMode,r=>{l.value.darkMode=r},{immediate:!0});const m=()=>{n.changeMode()},f=()=>{i.emit("closeSettings"),i.emit("openBgSettings")};return(r,o)=>{const g=t("a-switch"),p=t("a-form-item"),v=t("a-slider"),u=t("a-col"),k=t("a-input-number"),b=t("a-row"),h=t("a-button"),x=t("a-form");return y(),M("div",B,[e(x,{model:l.value,"label-col":c},{default:a(()=>[e(p,{label:"暗黑模式",extra:"切换键：Ctrl + Q"},{default:a(()=>[e(g,{checked:l.value.darkMode,"onUpdate:checked":o[0]||(o[0]=s=>l.value.darkMode=s),onChange:m},null,8,["checked"])]),_:1}),e(p,{label:"主页圆角"},{default:a(()=>[e(b,{gutter:20},{default:a(()=>[e(u,{span:18},{default:a(()=>[e(v,{min:0,max:50,value:_(n).settings.appRadius,"onUpdate:value":o[1]||(o[1]=s=>_(n).settings.appRadius=s)},null,8,["value"])]),_:1}),e(u,{span:6},{default:a(()=>[e(k,{value:_(n).settings.appRadius,"onUpdate:value":o[2]||(o[2]=s=>_(n).settings.appRadius=s),min:1,max:50},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(p,{label:"桌面壁纸"},{default:a(()=>[e(h,{type:"primary",onClick:f},{default:a(()=>[R("设定壁纸")]),_:1})]),_:1})]),_:1},8,["model"])])}}};export{N as default};
