import{p as u,D as S,V,r as s,h as m,i as g,q as l,j as o,k as r,F as y,s as D,z as L,x as N,u as a,y as f,t as q,I as B}from"./index-a8a3ac03.js";import{_ as W,u as E}from"./App-c5c44e09.js";const R=["title","onClick"],T=["src","alt"],U={class:"title-link"},$=["src"],A={__name:"WordGames",props:{type:{type:String,default:"use"}},setup(b){const{useAppStore:n}=E(),i=u({}),c=u(!1),h=u(!1),k=S([{label:"小黑屋",icon:"https://qiujunya.com/adarkroom/favicon.ico",url:"http://doublespeakgames.github.io/adarkroom/?lang=zh_cn"},{label:"猫国建设者",icon:"https://img.zhuayuya.com/element_icon/tavg/maomao.png",url:"https://likexia.gitee.io/cat-zh/#"},{label:"偷偷钓个鱼",icon:"https://img.zhuayuya.com/element_icon/tavg/toutoudiaogeyu.png",url:"https://fishing.florastudio.app/"},{label:"钓鱼公司",icon:"https://img.zhuayuya.com/element_icon/tavg/diaoyulao.png",url:"https://gltyx.github.io/fish/fish/fish.html"},{label:"超级进化",icon:"	https://img.zhuayuya.com/element_icon/tavg/jinhua.png",url:"https://g8hh.github.io/evolve/"},{label:"模拟修仙",icon:"https://img.zhuayuya.com/element_icon/tavg/monixiuxian.png",url:"https://cultivation-simulato.g8hh.com.cn/"},{label:"汉字炼金术",icon:"https://img.zhuayuya.com/element_icon/tavg/hanzilianjinshu.png",url:"https://g8hh.github.io/chinese-character-alchemy/"},{label:"激燃太空",icon:"https://img.zhuayuya.com/element_icon/tavg/jirantaikong.png",url:"https://g1tyx.github.io/the-ignited-space/"},{label:"矿石",icon:"	https://img.zhuayuya.com/element_icon/tavg/kuangshi.png",url:"https://g1tyx.github.io/into-the-quarry/"},{label:"能源收集",icon:"https://img.zhuayuya.com/element_icon/tavg/nengyuanshouji.png",url:"https://gityxs.github.io/planet-fall-idle/"}]),p=u(null),{isFullscreen:w,toggle:d}=V(p),z=_=>{i.value={},c.value=!0,i.value=_,B(()=>{p.value.addEventListener("load",()=>{console.log("loaded"),h.value=!1})})},x=()=>{window.open(i.value.url,"_blank")};return(_,t)=>{const G=s("perfect-scrollbar"),v=s("a-input-number"),C=s("a-space"),j=s("a-spin"),F=s("IDialog");return m(),g(y,null,[l("div",{class:N(["word-games",{preview:b.type==="preview"}])},[o(G,{class:"scroll-bar"},{default:r(()=>[(m(!0),g(y,null,D(k,(e,I)=>(m(),g("div",{class:"word-item",key:I,title:e.label,onClick:O=>z(e)},[l("img",{src:e.icon,onerror:"this.src='./images/website.svg'",alt:e.name},null,8,T),l("p",null,L(e.label),1)],8,R))),128))]),_:1})],2),o(F,{title:i.value.label,width:a(n).wordGames.width,visible:c.value,zIndex:10010,wrapClassName:"game-dialog",onCancel:t[3]||(t[3]=e=>c.value=!1)},{titleLink:r(()=>[l("span",U,[l("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:t[0]||(t[0]=(...e)=>a(d)&&a(d)(...e))},"全屏"),l("a",{href:"javascript:;",class:"link",title:"点击进入原站",onClick:x},"进入原站"),o(C,null,{default:r(()=>[f(" 窗口大小 "),o(v,{min:480,value:a(n).wordGames.width,"onUpdate:value":t[1]||(t[1]=e=>a(n).wordGames.width=e),size:"small"},null,8,["value"]),f("* "),o(v,{min:360,value:a(n).wordGames.height,"onUpdate:value":t[2]||(t[2]=e=>a(n).wordGames.height=e),size:"small"},null,8,["value"])]),_:1})])]),default:r(()=>[o(j,{spinning:h.value,tip:"加载中，请耐心等待..."},{default:r(()=>[l("iframe",{ref_key:"iframeRef",ref:p,src:i.value.url,style:q({height:a(n).wordGames.height+"px",backgroundColor:a(w)?"#FFF":"transparent"}),frameborder:"0"},null,12,$)]),_:1},8,["spinning"])]),_:1},8,["title","width","visible"])],64)}}},J=W(A,[["__scopeId","data-v-46fae95e"]]);export{J as default};
