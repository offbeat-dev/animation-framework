import{_ as d}from"./iframe-ec6a7859.js";import{d as h,R as o,r as a,e as l,A as E,H as R,f as x}from"./index-bcd3e045.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-e6f17b2f.js";import"./index-356e4a49.js";var c={},i=h;c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;var n=new Map,y=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await v(e);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},t))})},f=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},v=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},w={code:l,a:E,...R},D=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},S=class{constructor(){this.render=async(t,e,r)=>{let s={...w,...e==null?void 0:e.components};return new Promise((u,m)=>{d(()=>import("./index-4cdc845a.js"),["./index-4cdc845a.js","./index-8e2df192.js","./index-bcd3e045.js","./iframe-ec6a7859.js","./_commonjsHelpers-725317a4.js","./index-d475d2ea.js","./index-e6f17b2f.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:p})=>_(o.createElement(D,{showException:m,key:Math.random()},o.createElement(p,{components:s},o.createElement(x,{context:t,docsParameter:e}))),r)).then(u)})},this.unmount=t=>{f(t)}}};export{S as DocsRenderer,w as defaultComponents};
//# sourceMappingURL=DocsRenderer-EYKKDMVH-d69c0c6e.js.map
