import{e as T,m as K,t as Q,q as Z,s as J,v as ee,h as g,x as U,w as te,_ as j,u as ne,y as se,r as B,o as b,j as w,z as oe,i as k,a as C,d as O,S as ae,A as le,B as ie,F as W,k as Y,n as re,C as ce,D as G,f as D,g as P,c as ue,l as pe}from"./index-e39ca682.js";function ve(t){return J()?(ee(t),!0):!1}function y(t){return typeof t=="function"?t():T(t)}const L=typeof window<"u"&&typeof document<"u",de=Object.prototype.toString,fe=t=>de.call(t)==="[object Object]",V=()=>{},ge=he();function he(){var t;return L&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function me(t,i={}){if(!K(t))return Q(t);const a=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const n in t.value)a[n]=Z(()=>({get(){return t.value[n]},set(u){var p;if((p=y(i.replaceRef))!=null?p:!0)if(Array.isArray(t.value)){const r=[...t.value];r[n]=u,t.value=r}else{const r={...t.value,[n]:u};Object.setPrototypeOf(r,Object.getPrototypeOf(t.value)),t.value=r}else t.value[n]=u}}));return a}function E(t){var i;const a=y(t);return(i=a==null?void 0:a.$el)!=null?i:a}const F=L?window:void 0;function S(...t){let i,a,n,u;if(typeof t[0]=="string"||Array.isArray(t[0])?([a,n,u]=t,i=F):[i,a,n,u]=t,!i)return V;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const p=[],f=()=>{p.forEach(v=>v()),p.length=0},r=(v,l,e,s)=>(v.addEventListener(l,e,s),()=>v.removeEventListener(l,e,s)),h=te(()=>[E(i),y(u)],([v,l])=>{if(f(),!v)return;const e=fe(l)?{...l}:l;p.push(...a.flatMap(s=>n.map(d=>r(v,s,d,e))))},{immediate:!0,flush:"post"}),m=()=>{h(),f()};return ve(m),m}let q=!1;function _e(t,i,a={}){const{window:n=F,ignore:u=[],capture:p=!0,detectIframe:f=!1}=a;if(!n)return;ge&&!q&&(q=!0,Array.from(n.document.body.children).forEach(e=>e.addEventListener("click",V)),n.document.documentElement.addEventListener("click",V));let r=!0;const h=e=>u.some(s=>{if(typeof s=="string")return Array.from(n.document.querySelectorAll(s)).some(d=>d===e.target||e.composedPath().includes(d));{const d=E(s);return d&&(e.target===d||e.composedPath().includes(d))}}),v=[S(n,"click",e=>{const s=E(t);if(!(!s||s===e.target||e.composedPath().includes(s))){if(e.detail===0&&(r=!h(e)),!r){r=!0;return}i(e)}},{passive:!0,capture:p}),S(n,"pointerdown",e=>{const s=E(t);s&&(r=!e.composedPath().includes(s)&&!h(e))},{passive:!0}),f&&S(n,"blur",e=>{setTimeout(()=>{var s;const d=E(t);((s=n.document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!(d!=null&&d.contains(n.document.activeElement))&&i(e)},0)})].filter(Boolean);return()=>v.forEach(e=>e())}function Pe(t,i={}){var a,n;const{pointerTypes:u,preventDefault:p,stopPropagation:f,exact:r,onMove:h,onEnd:m,onStart:v,initialValue:l,axis:e="both",draggingElement:s=F,containerElement:d,handle:c=t}=i,_=g((a=y(l))!=null?a:{x:0,y:0}),x=g(),z=o=>u?u.includes(o.pointerType):!0,I=o=>{y(p)&&o.preventDefault(),y(f)&&o.stopPropagation()},H=o=>{var A;if(!z(o)||y(r)&&o.target!==y(t))return;const M=((A=y(d))!=null?A:y(t)).getBoundingClientRect(),N={x:o.clientX-M.left,y:o.clientY-M.top};(v==null?void 0:v(N,o))!==!1&&(x.value=N,I(o))},R=o=>{if(!z(o)||!x.value)return;let{x:A,y:$}=_.value;(e==="x"||e==="both")&&(A=o.clientX-x.value.x),(e==="y"||e==="both")&&($=o.clientY-x.value.y),_.value={x:A,y:$},h==null||h(_.value,o),I(o)},X=o=>{z(o)&&x.value&&(x.value=void 0,m==null||m(_.value,o),I(o))};if(L){const o={capture:(n=i.capture)!=null?n:!0};S(c,"pointerdown",H,o),S(s,"pointermove",R,o),S(s,"pointerup",X,o)}return{...me(_),position:_,isDragging:U(()=>!!x.value),style:U(()=>`left:${_.value.x}px;top:${_.value.y}px;`)}}const ye={class:"search-box"},be={key:0,class:"bg-blur"},we=["src"],xe=["onClick"],ke=["src"],Se={__name:"SearchBox",setup(t){const{useSystemStore:i}=ne(),a=se([{label:"百度",value:"https://www.baidu.com",icon:"./images/icons/baidu.png"},{label:"谷歌",value:"https://www.google.com",icon:"./images/icons/guge.png"},{label:"必应",value:"https://cn.bing.com",icon:"./images/icons/bing.png"},{label:"知乎",value:"https://www.zhihu.com",icon:"./images/icons/zhihu.png"},{label:"掘金",value:"https://juejin.cn",icon:"./images/icons/juejin.png"},{label:"博客园",value:"https://zzk.cnblogs.com",icon:"./images/icons/bokeyuan.png"},{label:"CSDN",value:"https://so.csdn.net/so",icon:"./images/icons/csdn.png"},{label:"GitHub",value:"https://github.com",icon:"./images/icons/github.png"},{label:"Gitee",value:"https://search.gitee.com",icon:"./images/icons/gitee.png"},{label:"Bilibili",value:"https://search.bilibili.com/all",icon:"./images/icons/bilibili.png"}]),n=g(null),u=g(!1),p=g(i.searchType),f=g(""),r=g(!1);_e(n,()=>{u.value=!1});const h=()=>{u.value=!0},m=l=>{p.value=l.value,u.value=!1,i.searchType=l.value},v=()=>{const l=p.value;if(!f.value)window.open(l,"_blank");else{let e="/s?wd=";["https://www.google.com","https://www.zhihu.com","https://so.csdn.net/so","https://cn.bing.com","https://github.com"].indexOf(l)>=0?e="/search?q=":["https://juejin.cn"].indexOf(l)>=0?e="/search?query=":["https://zzk.cnblogs.com"].indexOf(l)>=0?e="/s?w=":["https://search.gitee.com"].indexOf(l)>=0?e="/?q=":["https://search.bilibili.com/all"].indexOf(l)>=0&&(e="/?keyword="),window.open(`${l}${e}${f.value}`,"_blank"),f.value=""}};return(l,e)=>{const s=B("a-tooltip"),d=B("a-input");return b(),w("div",ye,[r.value?(b(),w("div",be)):oe("",!0),k(d,{class:"search",value:f.value,"onUpdate:value":e[0]||(e[0]=c=>f.value=c),placeholder:"请输入搜索内容",onFocus:e[1]||(e[1]=c=>r.value=!0),onBlur:e[2]||(e[2]=c=>r.value=!1),onPressEnter:v},{addonBefore:C(()=>[k(s,{title:"点击切换搜索源"},{default:C(()=>[O("img",{src:a.find(c=>c.value===T(i).searchType).icon,alt:"",onClick:h},null,8,we)]),_:1})]),suffix:C(()=>[k(T(ae),{onClick:v,style:{fontSize:"18px"}})]),_:1},8,["value"]),le(O("div",{ref_key:"searchTypeRef",ref:n,class:"search-types bf"},[(b(!0),w(W,null,Y(a,c=>(b(),w("div",{class:re(["search-type",{active:p.value===c.value}]),key:c.value,onClick:_=>m(c)},[O("img",{src:c.icon,alt:""},null,8,ke),ce(" "+G(c.label),1)],10,xe))),128))],512),[[ie,u.value]])])}}},Ae=j(Se,[["__scopeId","data-v-81844f60"]]);const Ee={class:"apps-box"},Oe=["onClick"],Ce=["src"],Te={__name:"Apps",setup(t){const i=D(()=>P(()=>import("./IDialog-6b12ac14.js"),["assets/IDialog-6b12ac14.js","assets/index-e39ca682.js","assets/index-876846ba.css","assets/IDialog-83905bc8.css"])),a=D(()=>P(()=>import("./Tiangou-a99b0f49.js"),["assets/Tiangou-a99b0f49.js","assets/axios-21b846bc.js","assets/index-e39ca682.js","assets/index-876846ba.css","assets/Tiangou-c99c1a8e.css"])),n=D(()=>P(()=>import("./Zhibuzhi-9d9bd8ce.js"),["assets/Zhibuzhi-9d9bd8ce.js","assets/index-e39ca682.js","assets/index-876846ba.css","assets/Zhibuzhi-5d257e60.css"])),u=g([{label:"摸鱼日报",value:"moyu",icon:"./images/apps/moyu.png",imageUrl:"https://api.vvhan.com/api/moyu"},{label:"60s读懂世界",value:"60s",icon:"./images/apps/60s.png",imageUrl:"https://v2.alapi.cn/api/zaobao?token=nWFMxBYTIMdmOKox&format=image"},{label:"舔狗日记",value:"tiangou",icon:"./images/apps/tiangou.png",component:a},{label:"这班上的值不值",value:"zhibuzhi",icon:"./images/apps/zhibuzhi.png",component:n}]),p=g(!1),f=g(!1),r=g(""),h=g(""),m=g(null),v=e=>{console.log(e),["moyu","60s"].includes(e.value)?(r.value=e.imageUrl,l(!0)):["tiangou","zhibuzhi"].includes(e.value)&&(m.value=e.component,h.value=e.label,p.value=!0)},l=e=>{f.value=e};return(e,s)=>{const d=B("a-image");return b(),w("div",Ee,[(b(!0),w(W,null,Y(u.value,c=>(b(),w("div",{class:"app bf",key:c.value,onClick:_=>v(c)},[O("img",{src:c.icon,alt:""},null,8,Ce),O("p",null,G(c.label),1)],8,Oe))),128)),k(T(i),{title:h.value,visible:p.value,onOk:s[0]||(s[0]=c=>p.value=!1),onCancel:s[1]||(s[1]=c=>p.value=!1)},{default:C(()=>[(b(),ue(pe(m.value)))]),_:1},8,["title","visible"]),k(d,{width:200,style:{width:"0",height:"0"},preview:{visible:f.value,onVisibleChange:l},src:r.value},null,8,["preview","src"])])}}},ze=j(Te,[["__scopeId","data-v-44b49f16"]]),Ie={class:"home"},$e={__name:"Index",setup(t){return(i,a)=>(b(),w("div",Ie,[k(Ae),k(ze)]))}},Be=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"}));export{Be as I,Pe as u};