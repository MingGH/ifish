import{e as t,f as s,q as S,w as T,Q as L,h as a,i as r,j as v,k as b,s as e,y as M,x as G,u as c,l as g,p as B,B as p,D as $,C as F,I as N,F as W}from"./index-24960866.js";import{D as U}from"./vuedraggable.umd-c6a49375.js";import{u as j}from"./App-3bc7c471.js";const q=["onClick","onContextmenu"],Q={class:"logo",alt:""},X={key:0,class:"description"},Y=["onContextmenu"],Z={class:"title"},to={__name:"Apps",setup(H){const{useAppStore:l,useContextMenuStore:d,useSystemStore:k}=j(),E=t(()=>s(()=>import("./Index-9266946c.js"),["assets/Index-9266946c.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/Index-0568e1a6.css"])),h=t(()=>s(()=>import("./ChatGpt-aa7e9663.js"),["assets/ChatGpt-aa7e9663.js","assets/index-24960866.js","assets/index-0dc88247.css"])),D=t(()=>s(()=>import("./ImgPreview-788a064d.js"),["assets/ImgPreview-788a064d.js","assets/index-24960866.js","assets/index-0dc88247.css"])),f=t(()=>s(()=>import("./Tiangou-c7dff00a.js"),["assets/Tiangou-c7dff00a.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/Tiangou-bd5cab81.css"])),A=t(()=>s(()=>import("./Zhibuzhi-c5b5ed9f.js"),["assets/Zhibuzhi-c5b5ed9f.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/enums-cf458477.js","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/Zhibuzhi-40ffbfb7.css"])),C=t(()=>s(()=>import("./Gongde-22861ece.js"),["assets/Gongde-22861ece.js","assets/App-3bc7c471.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-e46b25bc.css","assets/Gongde-2f5e96e3.css"])),y=t(()=>s(()=>import("./Music-8c329845.js"),["assets/Music-8c329845.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/Music-4a95baa9.css"])),w=t(()=>s(()=>import("./WordGames-50c83e67.js"),["assets/WordGames-50c83e67.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/WordGames-24830122.css"])),V=t(()=>s(()=>import("./Index-982835ac.js"),["assets/Index-982835ac.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/Index-afaf4a28.css"])),x=t(()=>s(()=>import("./OnlineMiniGames-54cbb88c.js"),["assets/OnlineMiniGames-54cbb88c.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/OnlineMiniGames-37ce9581.css"])),z=t(()=>s(()=>import("./OffWorkCountdown-896327dd.js"),["assets/OffWorkCountdown-896327dd.js","assets/index-24960866.js","assets/index-0dc88247.css","assets/App-3bc7c471.js","assets/App-e46b25bc.css","assets/OffWorkCountdown-9168d6b3.css"])),I={chatGpt:h,imgpreview:D,tiangou:f,zhibuzhi:A,gongde:C,music:y,wordGames:w,fakeUpdate:V,onlineMiniGames:x,offWorkCountdown:z},_=S([]);T(()=>l.lists,i=>{_.value=i},{immediate:!0,deep:!0});const O=i=>{l.lists=_.value},u=(i,m)=>{i.preventDefault(),d.showContextMenu(i.clientX,i.clientY),d.activeApp=m},P=i=>{i.type==="bookmark"&&window.open(i.url,"_blank")};return(i,m)=>{const R=L("lazyload");return a(),r(W,null,[v(c(U),{list:_.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:O},{item:b(({element:o})=>[e("div",{class:M(["app",[`column${o.gridSize[1]}-row${o.gridSize[0]}`]])},[e("div",{class:"dataset",style:G({borderRadius:`${c(k).settings.appRadius}${o.gridSize[0]===o.gridSize[1]?"%":"px"}`})},[o.type==="bookmark"?(a(),r("div",{key:0,class:"bookmark",onClick:n=>P(o),onContextmenu:g(n=>u(n,o),["stop"])},[B(e("img",Q,null,512),[[R,o.icon]]),o.gridSize[1]==2&&o.gridSize[0]==1?(a(),r("div",X,[e("p",null,p(o.title),1),e("span",null,p(o.description),1)])):$("",!0)],40,q)):(a(),r("div",{key:1,class:"comp",onContextmenu:g(n=>u(n,o),["stop"])},[(a(),F(N(I[o.component]),{app:o},null,8,["app"]))],40,Y))],4),e("p",Z,p(o.title),1)],2)]),_:1},8,["list"]),v(c(E))],64)}}};export{to as default};
