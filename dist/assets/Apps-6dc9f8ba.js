import{e as t,f as s,q as I,w as T,Q as L,h as a,i as r,j as v,k as b,s as e,y as M,x as G,u as c,l as g,p as B,B as p,D as $,C as F,H as N,F as W}from"./index-f75154d7.js";import{D as U}from"./vuedraggable.umd-029158e9.js";import{u as j}from"./App-5f500dc9.js";const q=["onClick","onContextmenu"],H={class:"logo",alt:""},Q={key:0,class:"description"},X=["onContextmenu"],Y={class:"title"},to={__name:"Apps",setup(Z){const{useAppStore:l,useContextMenuStore:d,useSystemStore:k}=j(),E=t(()=>s(()=>import("./Index-76b19b23.js"),["assets/Index-76b19b23.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/Index-0568e1a6.css"])),h=t(()=>s(()=>import("./ChatGpt-ccbdcc79.js"),["assets/ChatGpt-ccbdcc79.js","assets/index-f75154d7.js","assets/index-e3dd4629.css"])),D=t(()=>s(()=>import("./ImgPreview-790aa8b6.js"),["assets/ImgPreview-790aa8b6.js","assets/index-f75154d7.js","assets/index-e3dd4629.css"])),f=t(()=>s(()=>import("./Tiangou-cae6681b.js"),["assets/Tiangou-cae6681b.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/Tiangou-bd5cab81.css"])),A=t(()=>s(()=>import("./Zhibuzhi-0cef042d.js"),["assets/Zhibuzhi-0cef042d.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/enums-cf458477.js","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/Zhibuzhi-28f82ac2.css"])),C=t(()=>s(()=>import("./Gongde-1e0d1fe9.js"),["assets/Gongde-1e0d1fe9.js","assets/App-5f500dc9.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/Gongde-2f5e96e3.css"])),y=t(()=>s(()=>import("./Music-3a91ee0f.js"),["assets/Music-3a91ee0f.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/Music-4a95baa9.css"])),w=t(()=>s(()=>import("./WordGames-a7327c45.js"),["assets/WordGames-a7327c45.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/WordGames-24830122.css"])),V=t(()=>s(()=>import("./Index-fbca3679.js"),["assets/Index-fbca3679.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/Index-afaf4a28.css"])),x=t(()=>s(()=>import("./OnlineMiniGames-d4b75a6b.js"),["assets/OnlineMiniGames-d4b75a6b.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/OnlineMiniGames-d2a2bbcd.css"])),z=t(()=>s(()=>import("./OffWorkCountdown-db6e2d19.js"),["assets/OffWorkCountdown-db6e2d19.js","assets/index-f75154d7.js","assets/index-e3dd4629.css","assets/App-5f500dc9.js","assets/App-e46b25bc.css","assets/OffWorkCountdown-a787bd25.css"])),O={chatGpt:h,imgpreview:D,tiangou:f,zhibuzhi:A,gongde:C,music:y,wordGames:w,fakeUpdate:V,onlineMiniGames:x,offWorkCountdown:z},_=I([]);T(()=>l.lists,i=>{_.value=i},{immediate:!0,deep:!0});const P=i=>{l.lists=_.value},u=(i,m)=>{i.preventDefault(),d.showContextMenu(i.clientX,i.clientY),d.activeApp=m},R=i=>{i.type==="bookmark"&&window.open(i.url,"_blank")};return(i,m)=>{const S=L("lazyload");return a(),r(W,null,[v(c(U),{list:_.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:P},{item:b(({element:o})=>[e("div",{class:M(["app",[`column${o.gridSize[1]}-row${o.gridSize[0]}`]])},[e("div",{class:"dataset",style:G({borderRadius:`${c(k).settings.appRadius}${o.gridSize[0]===o.gridSize[1]?"%":"px"}`})},[o.type==="bookmark"?(a(),r("div",{key:0,class:"bookmark",onClick:n=>R(o),onContextmenu:g(n=>u(n,o),["stop"])},[B(e("img",H,null,512),[[S,o.icon]]),o.gridSize[1]==2&&o.gridSize[0]==1?(a(),r("div",Q,[e("p",null,p(o.title),1),e("span",null,p(o.description),1)])):$("",!0)],40,q)):(a(),r("div",{key:1,class:"comp",onContextmenu:g(n=>u(n,o),["stop"])},[(a(),F(N(O[o.component]),{app:o},null,8,["app"]))],40,X))],4),e("p",Y,p(o.title),1)],2)]),_:1},8,["list"]),v(c(E))],64)}}};export{to as default};