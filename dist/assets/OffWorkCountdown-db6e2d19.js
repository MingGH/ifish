import{q as C,E as S,b as o,w as I,r as l,h as c,i as w,s as u,D as B,B as y,j as s,k as i,F as E,t as N,C as O,z as H,M as U,N as j}from"./index-f75154d7.js";import{_ as q,u as z,c as A}from"./App-5f500dc9.js";const F=m=>(U("data-v-f03e8c16"),m=m(),j(),m),$={class:"offwork-text"},L={key:0},M=F(()=>u("img",{src:"https://i.postimg.cc/pVzqwjn0/qipao.png",alt:""},null,-1)),R={__name:"OffWorkCountdown",setup(m){const{useAppStore:t}=z(),k=C(!1),W=S(["周日","周一","周二","周三","周四","周五","周六"]),a=S({workDays:t.offWorkCountdown.workDays,workTimeStart:t.offWorkCountdown.workTimeStart?o(t.offWorkCountdown.workTimeStart,"HH:mm"):null,workTimeEnd:t.offWorkCountdown.workTimeEnd?o(t.offWorkCountdown.workTimeEnd,"HH:mm"):null}),d=C("");let p=null;const g=()=>{p&&clearInterval(p)};return I(()=>a,r=>{let e="点击配置";g(),r.workTimeEnd?(t.offWorkCountdown.workTimeStart=o(r.workTimeStart).format("HH:mm"),t.offWorkCountdown.workTimeEnd=o(r.workTimeEnd).format("HH:mm"),p=setInterval(()=>{if(t.offWorkCountdown.workDays[o().day()])if(o().isBefore(o(r.workTimeStart)))e="还没上班呢~";else if(o().isAfter(o(r.workTimeEnd)))e="已经下班啦~";else{const _=o(r.workTimeEnd),f=o();e=A(_.diff(f))}else e="今天是休息日~";d.value=e},1e3)):t.offWorkCountdown.workTimeEnd=null,r.workTimeStart||(t.offWorkCountdown.workTimeStart=null),d.value=e},{immediate:!0,deep:!0}),(r,e)=>{const _=l("a-checkable-tag"),f=l("a-form-item"),v=l("a-time-picker"),h=l("a-space"),D=l("a-form"),b=l("IDialog");return c(),w(E,null,[u("div",{class:"offwork",onClick:e[0]||(e[0]=n=>k.value=!0)},[u("div",$,[d.value.indexOf(":")>=0?(c(),w("p",L,"距离下班时间还有")):B("",!0),u("p",null,y(d.value),1)]),M]),s(b,{title:"配置",width:480,visible:k.value,onCancel:e[3]||(e[3]=n=>k.value=!1)},{default:i(()=>[s(D,{model:a,layout:"vertical",style:{"padding-top":"20px"}},{default:i(()=>[s(f,{label:"选择工作日"},{default:i(()=>[(c(!0),w(E,null,N(W,(n,T)=>(c(),O(_,{key:n,checked:a.workDays[T],"onUpdate:checked":x=>a.workDays[T]=x},{default:i(()=>[H(y(n),1)]),_:2},1032,["checked","onUpdate:checked"]))),128))]),_:1}),s(f,{label:"上下班时间"},{default:i(()=>[s(h,null,{default:i(()=>[s(v,{value:a.workTimeStart,"onUpdate:value":e[1]||(e[1]=n=>a.workTimeStart=n),placeholder:"上班时间","minute-step":10,format:"HH:mm"},null,8,["value"]),H("~ "),s(v,{value:a.workTimeEnd,"onUpdate:value":e[2]||(e[2]=n=>a.workTimeEnd=n),placeholder:"下班时间","minute-step":10,format:"HH:mm"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])],64)}}},K=q(R,[["__scopeId","data-v-f03e8c16"]]);export{K as default};