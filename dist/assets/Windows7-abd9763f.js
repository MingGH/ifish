import{_ as d}from"./App-692a8045.js";import{q as _,w as p,h as u,i as f,s as e,B as m,z as h,M as v,N as g}from"./index-fbf18cb4.js";const t=s=>(v("data-v-731b17e3"),s=s(),g(),s),b={class:"fake-box"},k={class:"inner"},w=t(()=>e("img",{src:"https://hellokit.com.cn/fakeupdate/assets/img/eZQzDJL.gif",style:{"vertical-align":"middle","padding-top":"25px",float:"left"},draggable:"false",ondragstart:"return false;"},null,-1)),x=t(()=>e("a",null,"Configuring Windows updates",-1)),I=t(()=>e("br",null,null,-1)),y=t(()=>e("span",null,"complete.",-1)),B=t(()=>e("br",null,null,-1)),S=t(()=>e("span",null,"Do not turn off your computer.",-1)),W=t(()=>e("img",{class:"image_block",src:"https://hellokit.com.cn/fakeupdate/assets/img/dhaSKKq.png"},null,-1)),D={__name:"Windows7",props:{visible:{type:Boolean,default:!1}},setup(s){const c=s,o=_(0);let a=null,i=5e3;const r=()=>{a=setInterval(()=>{o.value++,o.value>=99&&(o.value=0)},i)},l=()=>{o.value=0,a&&clearInterval(a)};return p(()=>c.visible,n=>{n?(l(),r()):l()},{immediate:!0,deep:!0}),(n,N)=>(u(),f("div",b,[e("div",k,[w,x,I,e("a",null,m(o.value)+"%",1),h(),y,B,S]),W]))}},K=d(D,[["__scopeId","data-v-731b17e3"]]);export{K as default};