import{_ as V,u as S,r as n,b as o,o as c,d as i,c as s,i as b,g as a,F as W,m as N,e as h,bR as U,f as p,bS as E,q as F,bQ as L}from"./index-ba21ce84.js";const O={class:"wallpaper-list"},$=["src"],j={class:"mask"},q=["onClick"],I=["onClick"],P={__name:"WallpaperBasic",setup(Q){const{useSystemStore:r}=S(),_=n([]),t=n(!1),u=()=>{t.value=!0;const e="https://api.7585.net.cn/360/api.php?return=jsonpro";F.get(e).then(g=>{_.value=g.data.imgurls.splice(0,9),t.value=!1})};u();const d=n(!1),v=e=>{d.value=e},m=n(""),f=e=>{v(!0),m.value=e},w=e=>{r.settings.wallpaper.url=e,r.settings.wallpaper.type="basic",L({content:"壁纸切换成功！"})};return(e,g)=>{const y=o("a-spin"),k=o("a-button"),C=o("a-image");return c(),i("div",null,[s(y,{tip:"加载中...",spinning:t.value},{default:b(()=>[a("div",O,[(c(!0),i(W,null,N(_.value,(l,x)=>(c(),i("div",{class:"wallpaper-item",key:x},[a("img",{src:l,alt:""},null,8,$),a("div",j,[a("p",{onClick:B=>f(l)},[s(h(U)),p("预览 ")],8,q),a("p",{onClick:B=>w(l)},[s(h(E)),p("使用 ")],8,I)])]))),128))])]),_:1},8,["spinning"]),s(k,{type:"primary",disabled:t.value,onClick:u,style:{"margin-top":"12px"}},{default:b(()=>[p("换一批")]),_:1},8,["disabled"]),s(C,{width:200,style:{display:"none"},preview:{visible:d.value,onVisibleChange:v},src:m.value},null,8,["preview","src"])])}}},T=V(P,[["__scopeId","data-v-3c4c5cb9"]]);export{T as default};