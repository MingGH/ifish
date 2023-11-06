import{i as t,bL as z,u as U,h as v,r,o as B,j as R,a as n,W as f,e as b,bM as V,d as L,Y as Z,bK as g}from"./index-57fe2805.js";var $={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};const D=$;function A(u){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?Object(arguments[a]):{},e=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(l).filter(function(s){return Object.getOwnPropertyDescriptor(l,s).enumerable}))),e.forEach(function(s){E(u,s,l[s])})}return u}function E(u,a,l){return a in u?Object.defineProperty(u,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[a]=l,u}var y=function(a,l){var e=A({},a,l.attrs);return t(z,A({},e,{icon:D}),null)};y.displayName="MinusOutlined";y.inheritAttrs=!1;const I=y,T=L("p",null,"移除第",-1),q=L("p",null,"个网址",-1),W={__name:"SettingsShortcutKey",setup(u){const{useSystemStore:a}=U(),l=Z({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),e=v({...a.settings}),s={style:{width:"80px"}},k=v(),c=v(),p=v(),M=O=>{if(O.preventDefault(),!/^(http|https):\/\/([a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(c.value)){g({type:"warning",content:"请输入正确的网址"});return}e.value.lock.actionList.indexOf(c.value)<0&&e.value.lock.actionList.push(c.value),c.value="",setTimeout(()=>{var d;(d=k.value)==null||d.focus()},0)},C=()=>{if(p.value){if(e.value.lock.actionList.length==1){g({type:"warning",content:"请至少保留一个网址"});return}}else{g({type:"warning",content:"请输入要移除的网址序号"});return}e.value.lock.actionList.splice(p.value-1,1),e.value.lock.actionList.indexOf(e.value.lock.action)<0&&(e.value.lock.action=e.value.lock.actionList[0]),p.value=""};return(O,o)=>{const d=r("a-input"),m=r("a-form-item"),x=r("a-select-option"),h=r("a-select"),j=r("a-divider"),S=r("a-button"),w=r("a-space"),N=r("a-input-number"),P=r("a-form");return B(),R("div",null,[t(P,{model:e.value,"label-col":s},{default:n(()=>[t(m,{label:"老板键",extra:"快捷切换键，暂不支持修改"},{default:n(()=>[t(d,{value:e.value.lock.key,"onUpdate:value":o[0]||(o[0]=i=>e.value.lock.key=i),readonly:"",placeholder:"例如：Ctrl + L"},null,8,["value"])]),_:1}),t(m,{label:"切换时"},{default:n(()=>[t(h,{value:e.value.lock.target,"onUpdate:value":o[1]||(o[1]=i=>e.value.lock.target=i)},{default:n(()=>[t(x,{value:"_self"},{default:n(()=>[f("在本页打开")]),_:1}),t(x,{value:"_blank"},{default:n(()=>[f("打开新页")]),_:1})]),_:1},8,["value"])]),_:1}),t(m,{label:"打开"},{default:n(()=>[t(h,{value:e.value.lock.action,"onUpdate:value":o[4]||(o[4]=i=>e.value.lock.action=i),options:e.value.lock.actionList.map(i=>({value:i}))},{dropdownRender:n(({menuNode:i})=>[t(b(l),{vnodes:i},null,8,["vnodes"]),t(j,{style:{margin:"4px 0"}}),t(w,{style:{padding:"4px 8px"}},{default:n(()=>[t(d,{ref_key:"inputRef",ref:k,value:c.value,"onUpdate:value":o[2]||(o[2]=_=>c.value=_),placeholder:"请输入要打开的网址"},null,8,["value"]),t(S,{type:"primary",onClick:M},{icon:n(()=>[t(b(V))]),default:n(()=>[f(" 添加 ")]),_:1})]),_:1}),t(w,{align:"center",style:{padding:"4px 8px"}},{default:n(()=>[T,t(N,{min:1,max:e.value.lock.actionList.length,value:p.value,"onUpdate:value":o[3]||(o[3]=_=>p.value=_),placeholder:"序号",style:{width:"76px"}},null,8,["max","value"]),q,t(S,{type:"primary",danger:"",onClick:C},{icon:n(()=>[t(b(I))]),default:n(()=>[f(" 移除 ")]),_:1})]),_:1})]),_:1},8,["value","options"])]),_:1})]),_:1},8,["model"])])}}};export{W as default};