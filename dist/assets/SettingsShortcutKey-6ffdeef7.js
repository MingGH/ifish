import{c as t,A as j,_ as V,u as B,r as _,b as i,o as R,d as Z,i as a,f,e as y,bV as E,ad as $,bS as g,s as D,x as T,g as b}from"./index-753924cd.js";var q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};const H=q;function C(n){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?Object(arguments[o]):{},e=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(c){return Object.getOwnPropertyDescriptor(s,c).enumerable}))),e.forEach(function(c){K(n,c,s[c])})}return n}function K(n,o,s){return o in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s,n}var k=function(o,s){var e=C({},o,s.attrs);return t(j,C({},e,{icon:H}),null)};k.displayName="MinusOutlined";k.inheritAttrs=!1;const F=k;const x=n=>(D("data-v-158ffecd"),n=n(),T(),n),G=x(()=>b("p",{style:{padding:"4px 8px"}},"配置：",-1)),J=x(()=>b("p",null,"移除第",-1)),Q=x(()=>b("p",null,"个网址",-1)),W={__name:"SettingsShortcutKey",setup(n){const{useSystemStore:o}=B(),s=$({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),e=_({...o.settings}),c={style:{width:"88px"}},h=_(),r=_(),d=_(),M=O=>{if(O.preventDefault(),!/^(http|https):\/\/([a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(r.value)){g({type:"warning",content:"请输入正确的网址"});return}e.value.lock.actionList.indexOf(r.value)<0&&e.value.lock.actionList.push(r.value),r.value="",setTimeout(()=>{var p;(p=h.value)==null||p.focus()},0)},I=()=>{if(d.value){if(e.value.lock.actionList.length==1){g({type:"warning",content:"请至少保留一个网址"});return}}else{g({type:"warning",content:"请输入要移除的网址序号"});return}e.value.lock.actionList.splice(d.value-1,1),e.value.lock.actionList.indexOf(e.value.lock.action)<0&&(e.value.lock.action=e.value.lock.actionList[0]),d.value=""};return(O,l)=>{const p=i("a-input"),v=i("a-form-item"),S=i("a-select-option"),w=i("a-select"),N=i("a-divider"),z=i("a-button"),A=i("a-space"),P=i("a-input-number"),L=i("a-card"),U=i("a-form");return R(),Z("div",null,[t(U,{model:e.value,"label-col":c},{default:a(()=>[t(L,{title:"老板键",size:"small"},{default:a(()=>[t(v,{label:"快捷键"},{default:a(()=>[t(p,{value:e.value.lock.key,"onUpdate:value":l[0]||(l[0]=u=>e.value.lock.key=u),readonly:"",placeholder:"例如：Ctrl + L"},null,8,["value"])]),_:1}),t(v,{label:"切换时"},{default:a(()=>[t(w,{value:e.value.lock.target,"onUpdate:value":l[1]||(l[1]=u=>e.value.lock.target=u)},{default:a(()=>[t(S,{value:"_self"},{default:a(()=>[f("在本页打开")]),_:1}),t(S,{value:"_blank"},{default:a(()=>[f("打开新页")]),_:1})]),_:1},8,["value"])]),_:1}),t(v,{label:"打开网址",class:"bottom-0"},{default:a(()=>[t(w,{value:e.value.lock.action,"onUpdate:value":l[4]||(l[4]=u=>e.value.lock.action=u),options:e.value.lock.actionList.map(u=>({value:u}))},{dropdownRender:a(({menuNode:u})=>[t(y(s),{vnodes:u},null,8,["vnodes"]),t(N,{style:{margin:"4px 0"}}),G,t(A,{style:{padding:"4px 8px"}},{default:a(()=>[t(p,{size:"small",ref_key:"inputRef",ref:h,value:r.value,"onUpdate:value":l[2]||(l[2]=m=>r.value=m),placeholder:"请输入要打开的网址"},null,8,["value"]),t(z,{size:"small",type:"primary",onClick:M},{icon:a(()=>[t(y(E))]),default:a(()=>[f(" 添加 ")]),_:1})]),_:1}),t(A,{class:"action-box",align:"center",style:{padding:"4px 8px"}},{default:a(()=>[J,t(P,{size:"small",min:1,max:e.value.lock.actionList.length,value:d.value,"onUpdate:value":l[3]||(l[3]=m=>d.value=m),placeholder:"序号",style:{width:"78px"}},null,8,["max","value"]),Q,t(z,{size:"small",type:"primary",danger:"",onClick:I},{icon:a(()=>[t(y(F))]),default:a(()=>[f(" 移除 ")]),_:1})]),_:1})]),_:1},8,["value","options"])]),_:1})]),_:1}),t(L,{title:"随机背景",size:"small",style:{"margin-top":"12px"}},{default:a(()=>[t(v,{label:"快捷键",class:"bottom-0"},{default:a(()=>[t(p,{value:e.value.wallpaper.key,"onUpdate:value":l[5]||(l[5]=u=>e.value.wallpaper.key=u),readonly:"",placeholder:"例如：Ctrl + E"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])])}}},Y=V(W,[["__scopeId","data-v-158ffecd"]]);export{Y as default};