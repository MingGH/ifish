import{q as d,r as f,b as t,o as v,g,f as o,w as e,A as h,e as x}from"./index-276565a6.js";const C=x("span",null,"自定义本站的浏览器标题-摸鱼更安全",-1),B={__name:"SettingsBasic",setup(S){const{useSystemStore:l}=d(),a=f({...l.settings}),c={style:{width:"80px"}},r=n=>{l.changeTitle(n.target.value)};return(n,s)=>{const _=t("a-tooltip"),u=t("a-input"),m=t("a-form-item"),p=t("a-form");return v(),g("div",null,[o(p,{model:a.value,"label-col":c},{default:e(()=>[o(m,null,{label:e(()=>[o(_,{placement:"topLeft"},{title:e(()=>[C]),default:e(()=>[h(" 网站标题 ")]),_:1})]),default:e(()=>[o(u,{value:a.value.title,"onUpdate:value":s[0]||(s[0]=i=>a.value.title=i),placeholder:"例如：学习网站",onChange:r},null,8,["value"])]),_:1})]),_:1},8,["model"])])}}};export{B as default};
