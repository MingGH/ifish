import{q as u,bV as f,r as g,h as m,i as b,s,l as C,j as x,k as y,B as d,y as k,u as l,F as h,M as I,N as T}from"./index-5d6f3aad.js";import{_ as B,a as S}from"./App-0d08ad6e.js";const r=e=>(I("data-v-15bf1fcd"),e=e(),T(),e),V=["src"],$={class:"tiangou"},j=r(()=>s("img",{src:"https://z1.ax1x.com/2023/11/20/piUaYCT.jpg",alt:""},null,-1)),w={class:"text"},D=r(()=>s("p",null,"宝",-1)),N={__name:"Tiangou",props:{app:{type:Object,default:()=>{}}},setup(e){const o=u(!1),a=u(""),i=()=>{S.get("https://api.moyuduck.com/tiangou").then(c=>{a.value=c.data.data})};i();const{copy:_,copied:p}=f({tiangou:a});return(c,t)=>{const v=g("IDialog");return m(),b(h,null,[s("img",{src:e.app.icon,class:"app-img",alt:"",onClick:t[0]||(t[0]=C(n=>o.value=!0,["stop"]))},null,8,V),x(v,{title:"舔狗日记",visible:o.value,onOk:t[2]||(t[2]=n=>o.value=!1),onCancel:t[3]||(t[3]=n=>o.value=!1)},{default:y(()=>[s("div",$,[j,s("div",w,[D,s("p",null,d(a.value),1)]),s("button",{title:"继续舔",onClick:i}),s("p",{class:k(["copy",{copied:l(p)}]),onClick:t[1]||(t[1]=n=>l(_)(a.value))},d(l(p)?"已复制":"点击复制"),3)])]),_:1},8,["visible"])],64)}}},M=B(N,[["__scopeId","data-v-15bf1fcd"]]);export{M as default};