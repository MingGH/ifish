import{_ as B,u as I,a as K,t as C}from"./App-0d08ad6e.js";import{q as b,J as F,w as S,r as l,h as e,i as c,j as y,k,F as w,t as g,C as h,s as V,B as x}from"./index-5d6f3aad.js";const $={class:"news bf"},D={key:2},L=["href","title"],j={__name:"Index",setup(q){const{useNewsStore:_}=I(),a=b(_.activeNews),u=F(()=>_.lists.filter(n=>n.visible)),s=b(!1),i=b([]),N=()=>{const n="https://root.zhuayuya.com:8081/get_hot/?name=",o=u.value[a.value].label,p=`${n}${o}`;s.value=!0,K.get(p).then(v=>{const{data:d}=v;i.value=d.sort((m,f)=>f.hot-m.hot),C({content:`${o}拉取成功！`}),s.value=!1}).catch(()=>{s.value=!1})};return S(()=>[a.value,u.value],n=>{_.activeNews=a.value,N()},{immediate:!0}),(n,o)=>{const p=l("a-tab-pane"),v=l("a-tabs"),d=l("a-spin"),m=l("a-empty"),f=l("perfect-scrollbar");return e(),c("div",$,[y(v,{activeKey:a.value,"onUpdate:activeKey":o[0]||(o[0]=t=>a.value=t),animated:""},{default:k(()=>[(e(!0),c(w,null,g(u.value,(t,r)=>(e(),h(p,{key:r,tab:t.label},null,8,["tab"]))),128))]),_:1},8,["activeKey"]),y(f,{class:"scroll-bar"},{default:k(()=>[s.value?(e(),h(d,{key:0,tip:"加载中..."})):!s.value&&!i.value.length?(e(),h(m,{key:1,description:"暂无数据"})):(e(),c("div",D,[(e(!0),c(w,null,g(i.value,(t,r)=>(e(),c("a",{class:"news-info",key:r,href:t.link,title:t.title,target:"_blank"},[V("span",null,x(r+1)+"."+x(t.title),1)],8,L))),128))]))]),_:1})])}}},J=B(j,[["__scopeId","data-v-deac190b"]]);export{J as default};