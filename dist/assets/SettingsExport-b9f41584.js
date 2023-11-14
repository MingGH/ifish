import{bN as _,bO as L,_ as k,u as T,r as B,b as j,o as F,d as M,c as p,i as d,g as b,f as w,s as S,bU as U,x as C,y as H}from"./index-de1a6977.js";var A={exports:{}};(function(u,m){(function(i,c){c()})(_,function(){function i(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function c(e,t,s){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){n(o.response,t,s)},o.onerror=function(){console.error("could not download file")},o.send()}function y(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function f(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof _=="object"&&_.global===_?_:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),n=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,s){var o=a.URL||a.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin===location.origin?f(r):y(r.href)?c(e,t,s):f(r,r.target="_blank")):(r.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(r.href)},4e4),setTimeout(function(){f(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,s){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(i(e,s),t);else if(y(e))c(e,t,s);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){f(o)})}}:function(e,t,s,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return c(e,t,s);var r=e.type==="application/octet-stream",R=/constructor/i.test(a.HTMLElement)||a.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||r&&R||l)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var v=g.result;v=h?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=v:location=v,o=null},g.readAsDataURL(e)}else{var E=a.URL||a.webkitURL,x=E.createObjectURL(e);o?o.location=x:location.href=x,o=null,setTimeout(function(){E.revokeObjectURL(x)},4e4)}});a.saveAs=n.saveAs=n,u.exports=n})})(A);var N=A.exports;const D=L(N);const O=u=>(C("data-v-23f6cdc7"),u=u(),H(),u),I={class:"settings-export"},$={class:"label",for:"json"},Y=O(()=>b("br",null,null,-1)),J=O(()=>b("br",null,null,-1)),V={__name:"SettingsExport",setup(u){const{useSystemStore:m,useAppStore:i}=T(),c=B({}),y={style:{width:"68px"}},f=l=>{const n=l.target.files[0];if(!n.name.includes("json")){S({type:"warning",content:"只能插入json文件"});return}const e=new FileReader;e.readAsText(n),e.onload=t=>{console.log("res: ",t);const{type:s,data:o}=JSON.parse(t.target.result);!s||!["app","system","all"].includes(s)||!o?S({type:"warning",content:"JSON文件中的格式有问题，请检查后重试"}):(console.log(s,o),s==="app"?i.lists=o:s==="system"?m.settings=o:s==="all"&&(i.lists=o.app,m.settings=o.system),S({content:"导入成功！"}),window.location.reload()),l.target.value=null}},a=l=>{let n={};const e={app:"首页App",system:"系统配置",all:"全部配置"};l==="app"?n={type:l,data:i.lists}:l==="system"?n={type:l,data:m.settings}:l==="all"&&(n={type:l,data:{app:i.lists,system:m.settings}});const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"});D.saveAs(t,`${e[l]} - ${U().format("YYYYMMDDHHmmss")}.json`)};return(l,n)=>{const e=j("a-button"),t=j("a-form-item"),s=j("a-form");return F(),M("div",I,[p(s,{model:c.value,"label-col":y},{default:d(()=>[p(t,{label:"导入"},{default:d(()=>[p(e,{type:"primary"},{default:d(()=>[b("label",$,[w(" 导入配置 "),b("input",{id:"json",type:"file",accept:".json",hidden:"",onChange:f},null,32)])]),_:1})]),_:1}),p(t,{label:"导出"},{default:d(()=>[p(e,{type:"primary",onClick:n[0]||(n[0]=o=>a("app")),style:{"margin-bottom":"12px"}},{default:d(()=>[w("导出首页App配置")]),_:1}),Y,p(e,{type:"primary",onClick:n[1]||(n[1]=o=>a("system")),style:{"margin-bottom":"12px"}},{default:d(()=>[w("导出系统配置")]),_:1}),J,p(e,{type:"primary",onClick:n[2]||(n[2]=o=>a("all"))},{default:d(()=>[w("导出全部配置")]),_:1})]),_:1})]),_:1},8,["model"])])}}},G=k(V,[["__scopeId","data-v-23f6cdc7"]]);export{G as default};
