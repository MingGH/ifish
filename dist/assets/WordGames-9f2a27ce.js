import{_ as I,u as L,h as r,r as N,y as V,a as i,o as m,b as g,d as l,c as o,w as u,F as y,l as W,t as B,n as D,e as t,f as b,Q as q,G as E}from"./index-e1955fb2.js";const R=["title","onClick"],T=["src","alt"],U={class:"title-link"},$=["src"],A={__name:"WordGames",props:{type:{type:String,default:"use"}},setup(f){const{useAppStore:n}=L(),s=r({}),c=r(!1),h=r(!1),w=N([{label:"小黑屋",icon:"https://qiujunya.com/adarkroom/favicon.ico",url:"http://doublespeakgames.github.io/adarkroom/?lang=zh_cn"},{label:"猫国建设者",icon:"https://img.zhuayuya.com/element_icon/tavg/maomao.png",url:"https://likexia.gitee.io/cat-zh/#"},{label:"偷偷钓个鱼",icon:"https://img.zhuayuya.com/element_icon/tavg/toutoudiaogeyu.png",url:"https://fishing.florastudio.app/"},{label:"钓鱼公司",icon:"https://img.zhuayuya.com/element_icon/tavg/diaoyulao.png",url:"https://gltyx.github.io/fish/fish/fish.html"},{label:"超级进化",icon:"	https://img.zhuayuya.com/element_icon/tavg/jinhua.png",url:"https://g8hh.github.io/evolve/"},{label:"模拟修仙",icon:"https://img.zhuayuya.com/element_icon/tavg/monixiuxian.png",url:"https://cultivation-simulato.g8hh.com.cn/"},{label:"汉字炼金术",icon:"https://img.zhuayuya.com/element_icon/tavg/hanzilianjinshu.png",url:"https://g8hh.github.io/chinese-character-alchemy/"},{label:"激燃太空",icon:"https://img.zhuayuya.com/element_icon/tavg/jirantaikong.png",url:"https://g1tyx.github.io/the-ignited-space/"},{label:"矿石",icon:"	https://img.zhuayuya.com/element_icon/tavg/kuangshi.png",url:"https://g1tyx.github.io/into-the-quarry/"},{label:"能源收集",icon:"https://img.zhuayuya.com/element_icon/tavg/nengyuanshouji.png",url:"https://gityxs.github.io/planet-fall-idle/"}]),p=r(null),{isFullscreen:k,toggle:d}=V(p),x=_=>{s.value={},c.value=!0,s.value=_,E(()=>{p.value.addEventListener("load",()=>{console.log("loaded"),h.value=!1})})},z=()=>{window.open(s.value.url,"_blank")};return(_,a)=>{const G=i("perfect-scrollbar"),v=i("a-input-number"),C=i("a-space"),j=i("a-spin"),F=i("IDialog");return m(),g(y,null,[l("div",{class:D(["word-games",{preview:f.type==="preview"}])},[o(G,{class:"scroll-bar"},{default:u(()=>[(m(!0),g(y,null,W(w,(e,S)=>(m(),g("div",{class:"word-item",key:S,title:e.label,onClick:O=>x(e)},[l("img",{src:e.icon,onerror:"this.src='./images/website.svg'",alt:e.name},null,8,T),l("p",null,B(e.label),1)],8,R))),128))]),_:1})],2),o(F,{title:s.value.label,width:t(n).wordGames.width,visible:c.value,zIndex:10010,wrapClassName:"game-dialog",onCancel:a[3]||(a[3]=e=>c.value=!1)},{titleLink:u(()=>[l("span",U,[l("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:a[0]||(a[0]=(...e)=>t(d)&&t(d)(...e))},"全屏"),l("a",{href:"javascript:;",class:"link",title:"点击进入原站",onClick:z},"进入原站"),o(C,null,{default:u(()=>[b(" 窗口大小 "),o(v,{min:480,value:t(n).wordGames.width,"onUpdate:value":a[1]||(a[1]=e=>t(n).wordGames.width=e),size:"small"},null,8,["value"]),b("* "),o(v,{min:360,value:t(n).wordGames.height,"onUpdate:value":a[2]||(a[2]=e=>t(n).wordGames.height=e),size:"small"},null,8,["value"])]),_:1})])]),default:u(()=>[o(j,{spinning:h.value,tip:"加载中，请耐心等待..."},{default:u(()=>[l("iframe",{ref_key:"iframeRef",ref:p,src:s.value.url,style:q({height:t(n).wordGames.height+"px",backgroundColor:t(k)?"#FFF":"transparent"}),frameborder:"0"},null,12,$)]),_:1},8,["spinning"])]),_:1},8,["title","width","visible"])],64)}}},Q=I(A,[["__scopeId","data-v-2380cb05"]]);export{Q as default};
