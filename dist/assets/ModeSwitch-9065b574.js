import{u as i,l as c,b as l,o as r,c as d,w as m,f as u,n as h,m as o}from"./index-a379c915.js";const k={__name:"ModeSwitch",setup(f){const{useSystemStore:e}=i();let s=document.documentElement;c(()=>e.settings.darkMode,t=>{t&&s.setAttribute("theme","dark")},{immediate:!0});const a=()=>{e.changeMode()};return(t,_)=>{const n=l("a-tooltip");return r(),d(n,{title:`切换为${o(e).settings.darkMode?"日间":"夜间"}模式`,placement:"left"},{default:m(()=>[u("i",{class:h(["ifishfont mode-switch-icon",[o(e).settings.darkMode?"ifish-dark":"ifish-light"]]),onClick:a},null,2)]),_:1},8,["title"])}}};export{k as default};