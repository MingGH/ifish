import{q as h,E as q,J as C,W as E,r as c,h as y,i as _,s as t,j as i,l as G,u as l,bY as R,bZ as P,B as f,y as I,k as m,z as j,C as T,x as S,F,t as U,D as A,I as J,M as W,N as Y}from"./index-0092dd77.js";import{_ as Z,u as H,r as K}from"./App-3a60cd02.js";const Q=u=>(W("data-v-446e8033"),u=u(),Y(),u),X={class:"ctrl-game"},ee=["src"],te={class:"active-game"},le=Q(()=>t("p",null,"点击开始游戏",-1)),ae={class:"title-link"},se={class:"game-box"},oe={class:"game-list"},ie=["onClick"],ne=["src"],ue={__name:"OnlineMiniGames",props:{type:{type:String,default:"use"}},setup(u){const{useAppStore:o}=H(),s=h(0),r=h(!0),p=q([{label:"盖塔楼",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/build-tower/box-icon.png",url:"https://hellokit.com.cn/build-tower"},{label:"盖楼游戏",url:"https://haiyong.site/moyu/towergame/"},{label:"超级玛丽",url:"https://wanghao221.github.io/mario/"},{label:"无限跑酷",url:"https://haiyong.site/moyu/wuxianpaoku.html"},{label:"吃豆人",url:"https://haiyong.site/moyu/dou.html"},{label:"俄罗斯方块",url:"https://haiyong.site/moyu/eluosi.html"},{label:"跳房子",url:"https://haiyong.site/moyu/tiaofangzi.html"},{label:"一个都不能死",url:"https://haiyong.site/moyu/yigedoubunengsi/"},{label:"简易华容道",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://sliding.toys/"},{label:"迷宫大全",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://maze.toys/"},{label:"切方块",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/cut-the-box/cube.png",url:"https://hellokit.com.cn/cut-the-box"},{label:"水果忍者",url:"https://haiyong.site/moyu/shuiguorenzhe/"},{label:"圣诞老人过桥",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/bridge"},{label:"闯关小游戏",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/barrier-game"},{label:"2048",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/2048/2048.jpeg",url:"https://hellokit.com.cn/2048"},{label:"魔方",icon:"https://img.zhuayuya.com/icon/mofang.webp",url:"https://www.zhuayuya.com/cube/index.html"},{label:"扫雷",icon:"https://img.zhuayuya.com/icon/saolei.webp",url:"https://www.zhuayuya.com/saolei_tow/index.html"},{label:"数独",icon:"https://img.zhuayuya.com/icon/shudu.webp",url:"https://www.zhuayuya.com/sudoku_tow/index.html"},{label:"中国象棋",icon:"https://img.zhuayuya.com/images/y65.png",url:"https://game.zhuayuya.com/yxmb/65/index.html"},{label:"射箭游戏",icon:"https://img.zhuayuya.com/images/y30.png",url:"https://game.zhuayuya.com/yxmb/30/index.html"},{label:"最强眼力",icon:"https://img.zhuayuya.com/images/y36.png",url:"https://game.zhuayuya.com/yxmb/36/index.html"},{label:"飞机大战",icon:"https://img.zhuayuya.com/images/y31.png",url:"https://game.zhuayuya.com/yxmb/31/index.html"},{label:"飞机大战2",url:"https://haiyong.site/moyu/fjdz/"},{label:"飞机大战3",url:"https://haiyong.site/moyu/qmfjdz/"},{label:"疯狂飙车",url:"https://haiyong.site/moyu/saiche/"},{label:"危险货车",url:"https://haiyong.site/moyu/weixiandehuoche/"},{label:"飞跃奶酪",url:"https://haiyong.site/moyu/flyingcheese/"},{label:"打僵尸",url:"https://haiyong.site/moyu/zsjfy/"},{label:"繁衍战争",url:"https://haiyong.site/moyu/fanyan/"},{label:"青蛙吃苍蝇",url:"https://haiyong.site/moyu/qwccy/"},{label:"下一个数字",url:"https://haiyong.site/moyu/xygsz/"},{label:"保护堆芯",url:"https://haiyong.site/moyu/baohuduixin.html"},{label:"西部牛仔",url:"https://haiyong.site/moyu/xbnz/"},{label:"只因你最美",url:"https://wanghao221.github.io/ji/"},{label:"逗猫",url:"https://haiyong.site/moyu/doumao.html"},{label:"爱吹风的小狮子",url:"https://haiyong.site/moyu/lion.html"},{label:"喷火龙",url:"https://haiyong.site/moyu/penhuolong.html"},{label:"烟花模拟器",url:"https://haiyong.site/tools/yanhua/"},{label:"孔明灯",url:"https://henxiangsi.com/"}]),L=C(()=>g=>K(g)),n=C(()=>p[s.value]),b=h(!1),k=h(!1),w=g=>{s.value+=g,s.value<0&&(s.value=p.length-1),s.value>p.length-1&&(s.value=0)},d=h(null),{isFullscreen:N,toggle:z}=E(d),O=()=>{b.value=!0,J(()=>{d.value.addEventListener("load",()=>{k.value=!1})})},V=()=>{window.open(n.value.url,"_blank")};return(g,e)=>{const x=c("a-input-number"),$=c("a-space"),B=c("perfect-scrollbar"),M=c("a-spin"),D=c("IDialog");return y(),_(F,null,[t("div",{class:I(["online-mini-game",{preview:u.type==="preview"}]),onClick:O},[t("div",X,[i(l(R),{onClick:e[0]||(e[0]=G(a=>w(-1),["stop"]))}),i(l(P),{onClick:e[1]||(e[1]=G(a=>w(1),["stop"]))})]),t("img",{src:n.value.icon||L.value(n.value.url),alt:""},null,8,ee),t("div",te,[t("p",null,f(n.value.label),1),le])],2),i(D,{title:`在线小游戏 - ${n.value.label}`,width:l(o).miniGames.width,visible:b.value,zIndex:10010,destroyOnClose:!0,wrapClassName:"game-dialog",onCancel:e[6]||(e[6]=a=>b.value=!1)},{titleLink:m(()=>[t("span",ae,[t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[2]||(e[2]=a=>r.value=!r.value)},f(r.value?"隐藏":"显示")+"游戏列表",1),t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[3]||(e[3]=(...a)=>l(z)&&l(z)(...a))},"全屏"),t("a",{href:"javascript:;",class:"link",title:"点击进入原站",onClick:V},"进入原站"),i($,null,{default:m(()=>[j(" 窗口大小 "),i(x,{min:480,value:l(o).miniGames.width,"onUpdate:value":e[4]||(e[4]=a=>l(o).miniGames.width=a),size:"small"},null,8,["value"]),j("* "),i(x,{min:360,value:l(o).miniGames.height,"onUpdate:value":e[5]||(e[5]=a=>l(o).miniGames.height=a),size:"small"},null,8,["value"])]),_:1})])]),default:m(()=>[t("div",se,[r.value?(y(),T(B,{key:0,class:"scroll-bar",style:S({height:l(o).miniGames.height+"px"})},{default:m(()=>[t("div",oe,[(y(!0),_(F,null,U(p,(a,v)=>(y(),_("p",{class:I(["game-item",{active:s.value===v}]),key:v,onClick:he=>s.value=v},f(a.label),11,ie))),128))])]),_:1},8,["style"])):A("",!0),i(M,{spinning:k.value,tip:"加载中，请耐心等待..."},{default:m(()=>[t("iframe",{ref_key:"iframeRef",ref:d,src:n.value.url,style:S({height:l(o).miniGames.height+"px",backgroundColor:l(N)?"#FFF":"transparent"}),frameborder:"0"},null,12,ne)]),_:1},8,["spinning"])])]),_:1},8,["title","width","visible"])],64)}}},re=Z(ue,[["__scopeId","data-v-446e8033"]]);export{re as default};
