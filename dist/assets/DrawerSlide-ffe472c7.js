import{X as Ie}from"./index-e0e784a4.js";import{l as vt,m as T,F as qe,p as N,q as _,s as D,e as g,h as v,t as F,f as $,v as B,x as Z,y as mt,z as ht,u as x,A as gt,B as yt,C as Pe,o as V,i as Te,w as q,a as K,c as fe,b as O,n as bt,j as pe,D as te,E as wt,G as Et}from"./index-7fa818bc.js";function j(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}var ye=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ye||{}),H=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(H||{});function L({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var a;let o=ze(r,n),i=Object.assign(l,{props:o});if(e||t&2&&o.static)return $e(i);if(t&1){let d=(a=o.unmount)==null||a?0:1;return j(d,{[0](){return null},[1](){return $e({...l,props:{...o,hidden:!0,style:{display:"none"}}})}})}return $e(i)}function $e({props:e,attrs:t,slots:n,slot:r,name:l}){var a,o;let{as:i,...d}=Ye(e,["unmount","static"]),u=(a=n.default)==null?void 0:a.call(n,r),c={};if(r){let p=!1,s=[];for(let[f,m]of Object.entries(r))typeof m=="boolean"&&(p=!0),m===!0&&s.push(f);p&&(c["data-headlessui-state"]=s.join(" "))}if(i==="template"){if(u=Ge(u??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[p,...s]=u??[];if(!St(p)||s.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(h=>h.trim()).filter((h,P,I)=>I.indexOf(h)===P).sort((h,P)=>h.localeCompare(P)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let f=ze((o=p.props)!=null?o:{},d),m=vt(p,f);for(let h in f)h.startsWith("on")&&(m.props||(m.props={}),m.props[h]=f[h]);return m}return Array.isArray(u)&&u.length===1?u[0]:u}return T(i,Object.assign({},d,c),{default:()=>u})}function Ge(e){return e.flatMap(t=>t.type===qe?Ge(t.children):[t])}function ze(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...a){let o=n[r];for(let i of o){if(l instanceof Event&&l.defaultPrevented)return;i(l,...a)}}});return t}function Ye(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function St(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let xt=0;function Ot(){return++xt}function J(){return Ot()}var Xe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Xe||{});function E(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let Je=Symbol("Context");var k=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(k||{});function Tt(){return Re()!==null}function Re(){return N(Je,null)}function $t(e){_(Je,e)}var kt=Object.defineProperty,Ft=(e,t,n)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t,n)=>(Ft(e,typeof t!="symbol"?t+"":t,n),n);class Lt{constructor(){Ue(this,"current",this.detect()),Ue(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ae=new Lt;function oe(e){if(ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let Ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(M||{}),Qe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Qe||{}),Pt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Pt||{});function At(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ke||{});function Dt(e,t=0){var n;return e===((n=oe(e))==null?void 0:n.body)?!1:j(t,{[0](){return e.matches(Ae)},[1](){let r=e;for(;r!==null;){if(r.matches(Ae))return!0;r=r.parentElement}return!1}})}function X(e){e==null||e.focus({preventScroll:!0})}let Ct=["textarea","input"].join(",");function jt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ct))!=null?n:!1}function Nt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function he(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var a;let o=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,i=Array.isArray(e)?n?Nt(e):e:At(e);l.length>0&&i.length>1&&(i=i.filter(m=>!l.includes(m))),r=r??o.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},p=0,s=i.length,f;do{if(p>=s||p+s<=0)return 0;let m=u+p;if(t&16)m=(m+s)%s;else{if(m<0)return 3;if(m>=s)return 1}f=i[m],f==null||f.focus(c),p+=d}while(f!==o.activeElement);return t&6&&jt(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function ke(e,t,n){ae.isServer||D(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Bt(e,t,n=v(()=>!0)){function r(a,o){if(!n.value||a.defaultPrevented)return;let i=o(a);if(i===null||!i.getRootNode().contains(i))return;let d=function u(c){return typeof c=="function"?u(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);for(let u of d){if(u===null)continue;let c=u instanceof HTMLElement?u:E(u);if(c!=null&&c.contains(i)||a.composed&&a.composedPath().includes(c))return}return!Dt(i,Ke.Loose)&&i.tabIndex!==-1&&a.preventDefault(),t(a,i)}let l=g(null);ke("mousedown",a=>{var o,i;n.value&&(l.value=((i=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:i[0])||a.target)},!0),ke("click",a=>{l.value&&(r(a,()=>l.value),l.value=null)},!0),ke("blur",a=>r(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var be=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(be||{});let De=F({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return L({ourProps:a,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Rt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function _t(e,t,n){ae.isServer||D(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}var le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(le||{});function Mt(){let e=g(0);return _t("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ze(e,t,n,r){ae.isServer||D(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}function et(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function tt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=E(n);r instanceof HTMLElement&&t.add(r)}return t}var nt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(nt||{});let ne=Object.assign(F({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=g(null);r({el:l,$el:l});let a=v(()=>oe(l)),o=g(!1);$(()=>o.value=!0),B(()=>o.value=!1),It({ownerDocument:a},v(()=>o.value&&!!(e.features&16)));let i=Ut({ownerDocument:a,container:l,initialFocus:v(()=>e.initialFocus)},v(()=>o.value&&!!(e.features&2)));Wt({ownerDocument:a,container:l,containers:e.containers,previousActiveElement:i},v(()=>o.value&&!!(e.features&8)));let d=Mt();function u(f){let m=E(l);m&&(h=>h())(()=>{j(d.value,{[le.Forwards]:()=>{he(m,M.First,{skipElements:[f.relatedTarget]})},[le.Backwards]:()=>{he(m,M.Last,{skipElements:[f.relatedTarget]})}})})}let c=g(!1);function p(f){f.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function s(f){if(!o.value)return;let m=tt(e.containers);E(l)instanceof HTMLElement&&m.add(E(l));let h=f.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(rt(m,h)||(c.value?he(E(l),j(d.value,{[le.Forwards]:()=>M.Next,[le.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&X(f.target)))}return()=>{let f={},m={ref:l,onKeydown:p,onFocusout:s},{features:h,initialFocus:P,containers:I,...A}=e;return T(qe,[!!(h&4)&&T(De,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:be.Focusable}),L({ourProps:m,theirProps:{...t,...A},slot:f,attrs:t,slots:n,name:"FocusTrap"}),!!(h&4)&&T(De,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:be.Focusable})])}}}),{features:nt}),z=[];if(typeof window<"u"&&typeof document<"u"){let e=function(t){t.target instanceof HTMLElement&&t.target!==document.body&&z[0]!==t.target&&(z.unshift(t.target),z=z.filter(n=>n!=null&&n.isConnected),z.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function Ht(e){let t=g(z.slice());return Z([e],([n],[r])=>{r===!0&&n===!1?et(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=z.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function It({ownerDocument:e},t){let n=Ht(t);$(()=>{D(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&X(n())},{flush:"post"})}),B(()=>{X(n())})}function Ut({ownerDocument:e,container:t,initialFocus:n},r){let l=g(null),a=g(!1);return $(()=>a.value=!0),B(()=>a.value=!1),$(()=>{Z([t,n,r],(o,i)=>{if(o.every((u,c)=>(i==null?void 0:i[c])===u)||!r.value)return;let d=E(t);d&&et(()=>{var u,c;if(!a.value)return;let p=E(n),s=(u=e.value)==null?void 0:u.activeElement;if(p){if(p===s){l.value=s;return}}else if(d.contains(s)){l.value=s;return}p?X(p):he(d,M.First|M.NoScroll)===Qe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),l}function Wt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var a;Ze((a=e.value)==null?void 0:a.defaultView,"focus",o=>{if(!l.value)return;let i=tt(n);E(t)instanceof HTMLElement&&i.add(E(t));let d=r.value;if(!d)return;let u=o.target;u&&u instanceof HTMLElement?rt(i,u)?(r.value=u,X(u)):(o.preventDefault(),o.stopPropagation(),X(d)):X(r.value)},!0)}function rt(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Fe=new Map,re=new Map;function We(e,t=g(!0)){D(n=>{var r;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var o;if(!l)return;let i=(o=re.get(l))!=null?o:1;if(i===1?re.delete(l):re.set(l,i-1),i!==1)return;let d=Fe.get(l);d&&(d["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",d["aria-hidden"]),l.inert=d.inert,Fe.delete(l))});let a=(r=re.get(l))!=null?r:0;re.set(l,a+1),a===0&&(Fe.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let lt=Symbol("ForcePortalRootContext");function Vt(){return N(lt,!1)}let Ce=F({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return _(lt,e.force),()=>{let{force:r,...l}=e;return L({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function qt(e){let t=oe(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let at=F({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=g(null),l=v(()=>oe(r)),a=Vt(),o=N(ot,null),i=g(a===!0||o==null?qt(r.value):o.resolveTarget());return D(()=>{a||o!=null&&(i.value=o.resolveTarget())}),B(()=>{var d,u;let c=(d=l.value)==null?void 0:d.getElementById("headlessui-portal-root");c&&i.value===c&&i.value.children.length<=0&&((u=i.value.parentElement)==null||u.removeChild(i.value))}),()=>{if(i.value===null)return null;let d={ref:r,"data-headlessui-portal":""};return T(mt,{to:i.value},L({ourProps:d,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),ot=Symbol("PortalGroupContext"),Gt=F({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=ht({resolveTarget(){return e.target}});return _(ot,r),()=>{let{target:l,...a}=e;return L({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),it=Symbol("StackContext");var je=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(je||{});function zt(){return N(it,()=>{})}function Yt({type:e,enabled:t,element:n,onUpdate:r}){let l=zt();function a(...o){r==null||r(...o),l(...o)}$(()=>{Z(t,(o,i)=>{o?a(0,e,n):i===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),B(()=>{t.value&&a(1,e,n)}),_(it,a)}let st=Symbol("DescriptionContext");function Xt(){let e=N(st,null);if(e===null)throw new Error("Missing parent");return e}function Jt({slot:e=g({}),name:t="Description",props:n={}}={}){let r=g([]);function l(a){return r.value.push(a),()=>{let o=r.value.indexOf(a);o!==-1&&r.value.splice(o,1)}}return _(st,{register:l,slot:e,name:t,props:n}),v(()=>r.value.length>0?r.value.join(" "):void 0)}F({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${J()}`}},setup(e,{attrs:t,slots:n}){let r=Xt();return $(()=>B(r.register(e.id))),()=>{let{name:l="Description",slot:a=g({}),props:o={}}=r,{id:i,...d}=e,u={...Object.entries(o).reduce((c,[p,s])=>Object.assign(c,{[p]:x(s)}),{}),id:i};return L({ourProps:u,theirProps:d,slot:a.value,attrs:t,slots:n,name:l})}}});function Qt(e){let t=gt(e.getSnapshot());return B(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function we(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=we();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function Kt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function Zt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function en(){if(!Rt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:d}=new URL(i.href),u=t.querySelector(d);u&&!l(u)&&(a=u)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function tn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function nn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let Y=Kt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:we(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:nn(n)},l=[en(),Zt(),tn()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Y.subscribe(()=>{let e=Y.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&Y.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Y.dispatch("TEARDOWN",n)}});function rn(e,t,n){let r=Qt(Y),l=v(()=>{let a=e.value?r.value.get(e.value):void 0;return a?a.count>0:!1});return Z([e,t],([a,o],[i],d)=>{if(!a||!o)return;Y.dispatch("PUSH",a,n);let u=!1;d(()=>{u||(Y.dispatch("POP",i??a,n),u=!0)})},{immediate:!0}),l}var ln=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ln||{});let Ne=Symbol("DialogContext");function ie(e){let t=N(Ne,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ie),n}return t}let ve="DC8F892D-2EBD-447C-A4C8-A03058436FF4",an=F({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ve},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${J()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var a;let o=g(!1);$(()=>{o.value=!0});let i=g(0),d=Re(),u=v(()=>e.open===ve&&d!==null?(d.value&k.Open)===k.Open:e.open),c=g(null),p=g(null),s=v(()=>oe(c));if(l({el:c,$el:c}),!(e.open!==ve||d!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===ve?void 0:e.open}`);let f=v(()=>o.value&&u.value?0:1),m=v(()=>f.value===0),h=v(()=>i.value>1),P=N(Ne,null)!==null,I=v(()=>h.value?"parent":"leaf"),A=v(()=>d!==null?(d.value&k.Closing)===k.Closing:!1),Q=v(()=>P||A.value?!1:m.value),se=v(()=>{var y,b,w;return(w=Array.from((b=(y=s.value)==null?void 0:y.querySelectorAll("body > *"))!=null?b:[]).find(S=>S.id==="headlessui-portal-root"?!1:S.contains(E(p))&&S instanceof HTMLElement))!=null?w:null});We(se,Q);let ue=v(()=>h.value?!0:m.value),de=v(()=>{var y,b,w;return(w=Array.from((b=(y=s.value)==null?void 0:y.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(S=>S.contains(E(p))&&S instanceof HTMLElement))!=null?w:null});We(de,ue),Yt({type:"Dialog",enabled:v(()=>f.value===0),element:c,onUpdate:(y,b)=>{if(b==="Dialog")return j(y,{[je.Add]:()=>i.value+=1,[je.Remove]:()=>i.value-=1})}});let Se=Jt({name:"DialogDescription",slot:v(()=>({open:u.value}))}),U=g(null),R={titleId:U,panelRef:g(null),dialogState:f,setTitleId(y){U.value!==y&&(U.value=y)},close(){t("close",!1)}};_(Ne,R);function ee(){var y,b,w;return[...Array.from((b=(y=s.value)==null?void 0:y.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?b:[]).filter(S=>!(S===document.body||S===document.head||!(S instanceof HTMLElement)||S.contains(E(p))||R.panelRef.value&&S.contains(R.panelRef.value))),(w=R.panelRef.value)!=null?w:c.value]}let xe=v(()=>!(!m.value||h.value));Bt(()=>ee(),(y,b)=>{R.close(),yt(()=>b==null?void 0:b.focus())},xe);let Oe=v(()=>!(h.value||f.value!==0));Ze((a=s.value)==null?void 0:a.defaultView,"keydown",y=>{Oe.value&&(y.defaultPrevented||y.key===Xe.Escape&&(y.preventDefault(),y.stopPropagation(),R.close()))});let C=v(()=>!(A.value||f.value!==0||P));return rn(s,C,y=>{var b;return{containers:[...(b=y.containers)!=null?b:[],ee]}}),D(y=>{if(f.value!==0)return;let b=E(c);if(!b)return;let w=new ResizeObserver(S=>{for(let ce of S){let W=ce.target.getBoundingClientRect();W.x===0&&W.y===0&&W.width===0&&W.height===0&&R.close()}});w.observe(b),y(()=>w.disconnect())}),()=>{let{id:y,open:b,initialFocus:w,...S}=e,ce={...n,ref:c,id:y,role:"dialog","aria-modal":f.value===0?!0:void 0,"aria-labelledby":U.value,"aria-describedby":Se.value},W={open:f.value===0};return T(Ce,{force:!0},()=>[T(at,()=>T(Gt,{target:c.value},()=>T(Ce,{force:!1},()=>T(ne,{initialFocus:w,containers:ee,features:m.value?j(I.value,{parent:ne.features.RestoreFocus,leaf:ne.features.All&~ne.features.FocusLock}):ne.features.None},()=>L({ourProps:ce,theirProps:S,slot:W,attrs:n,slots:r,visible:f.value===0,features:ye.RenderStrategy|ye.Static,name:"Dialog"}))))),T(De,{features:be.Hidden,ref:p})])}}});F({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${J()}`}},setup(e,{attrs:t,slots:n}){let r=ie("DialogOverlay");function l(a){a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r.close())}return()=>{let{id:a,...o}=e;return L({ourProps:{id:a,"aria-hidden":!0,onClick:l},theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}}});F({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${J()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=ie("DialogBackdrop"),a=g(null);return r({el:a,$el:a}),$(()=>{if(l.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:o,...i}=e,d={id:o,ref:a,"aria-hidden":!0};return T(Ce,{force:!0},()=>T(at,()=>L({ourProps:d,theirProps:{...t,...i},slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogBackdrop"})))}}});let on=F({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${J()}`}},setup(e,{attrs:t,slots:n,expose:r}){let l=ie("DialogPanel");r({el:l.panelRef,$el:l.panelRef});function a(o){o.stopPropagation()}return()=>{let{id:o,...i}=e,d={id:o,ref:l.panelRef,onClick:a};return L({ourProps:d,theirProps:i,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),sn=F({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${J()}`}},setup(e,{attrs:t,slots:n}){let r=ie("DialogTitle");return $(()=>{r.setTitleId(e.id),B(()=>r.setTitleId(null))}),()=>{let{id:l,...a}=e;return L({ourProps:{id:l},theirProps:a,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function un(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Le(e,...t){e&&t.length>0&&e.classList.add(...t)}function me(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Be=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Be||{});function dn(e,t){let n=we();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,o]=[r,l].map(i=>{let[d=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return d});return a!==0?n.setTimeout(()=>t("finished"),a+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ve(e,t,n,r,l,a){let o=we(),i=a!==void 0?un(a):()=>{};return me(e,...l),Le(e,...t,...n),o.nextFrame(()=>{me(e,...n),Le(e,...r),o.add(dn(e,d=>(me(e,...r,...t),Le(e,...l),i(d))))}),o.add(()=>me(e,...t,...n,...r,...l)),o.add(()=>i("cancelled")),o.dispose}function G(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let _e=Symbol("TransitionContext");var cn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(cn||{});function fn(){return N(_e,null)!==null}function pn(){let e=N(_e,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function vn(){let e=N(Me,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Me=Symbol("NestingContext");function Ee(e){return"children"in e?Ee(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ut(e){let t=g([]),n=g(!1);$(()=>n.value=!0),B(()=>n.value=!1);function r(a,o=H.Hidden){let i=t.value.findIndex(({id:d})=>d===a);i!==-1&&(j(o,{[H.Unmount](){t.value.splice(i,1)},[H.Hidden](){t.value[i].state="hidden"}}),!Ee(t)&&n.value&&(e==null||e()))}function l(a){let o=t.value.find(({id:i})=>i===a);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,H.Unmount)}return{children:t,register:l,unregister:r}}let dt=ye.RenderStrategy,ge=F({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){let a=g(0);function o(){a.value|=k.Opening,t("beforeEnter")}function i(){a.value&=~k.Opening,t("afterEnter")}function d(){a.value|=k.Closing,t("beforeLeave")}function u(){a.value&=~k.Closing,t("afterLeave")}if(!fn()&&Tt())return()=>T(ct,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:d,onAfterLeave:u},r);let c=g(null),p=g("visible"),s=v(()=>e.unmount?H.Unmount:H.Hidden);l({el:c,$el:c});let{show:f,appear:m}=pn(),{register:h,unregister:P}=vn(),I={value:!0},A=J(),Q={value:!1},se=ut(()=>{!Q.value&&p.value!=="hidden"&&(p.value="hidden",P(A),u())});$(()=>{let C=h(A);B(C)}),D(()=>{if(s.value===H.Hidden&&A){if(f&&p.value!=="visible"){p.value="visible";return}j(p.value,{hidden:()=>P(A),visible:()=>h(A)})}});let ue=G(e.enter),de=G(e.enterFrom),Se=G(e.enterTo),U=G(e.entered),R=G(e.leave),ee=G(e.leaveFrom),xe=G(e.leaveTo);$(()=>{D(()=>{if(p.value==="visible"){let C=E(c);if(C instanceof Comment&&C.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Oe(C){let y=I.value&&!m.value,b=E(c);!b||!(b instanceof HTMLElement)||y||(Q.value=!0,f.value&&o(),f.value||d(),C(f.value?Ve(b,ue,de,Se,U,w=>{Q.value=!1,w===Be.Finished&&i()}):Ve(b,R,ee,xe,U,w=>{Q.value=!1,w===Be.Finished&&(Ee(se)||(p.value="hidden",P(A),u()))})))}return $(()=>{Z([f],(C,y,b)=>{Oe(b),I.value=!1},{immediate:!0})}),_(Me,se),$t(v(()=>j(p.value,{visible:k.Open,hidden:k.Closed})|a.value)),()=>{let{appear:C,show:y,enter:b,enterFrom:w,enterTo:S,entered:ce,leave:W,leaveFrom:Pn,leaveTo:An,...He}=e,ft={ref:c},pt={...He,...m&&f&&ae.isServer?{class:Pe([n.class,He.class,...ue,...de])}:{}};return L({theirProps:pt,ourProps:ft,slot:{},slots:r,attrs:n,features:dt,visible:p.value==="visible",name:"TransitionChild"})}}}),mn=ge,ct=F({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let l=Re(),a=v(()=>e.show===null&&l!==null?(l.value&k.Open)===k.Open:e.show);D(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=g(a.value?"visible":"hidden"),i=ut(()=>{o.value="hidden"}),d=g(!0),u={show:a,appear:v(()=>e.appear||!d.value)};return $(()=>{D(()=>{d.value=!1,a.value?o.value="visible":Ee(i)||(o.value="hidden")})}),_(Me,i),_(_e,u),()=>{let c=Ye(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return L({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[T(mn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...p,...c},r.default)]},attrs:{},features:dt,visible:o.value==="visible",name:"Transition"})}}});const hn=O("div",{class:"fixed inset-0 bg-black bg-opacity-30 transition-opacity"},null,-1),gn={key:1,class:"fixed inset-0"},yn={class:"fixed inset-0 overflow-hidden"},bn={class:"absolute inset-0 overflow-hidden"},wn={class:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"},En=O("span",{class:"sr-only"},"Close panel",-1),Sn={class:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"},xn={class:"flex min-h-0 flex-1 flex-col overflow-y-scroll pb-6"},On={class:"flex items-start justify-between"},Tn={key:0,class:"ml-3 flex h-7 items-center"},$n=O("span",{class:"sr-only"},"Close panel",-1),kn={class:"relative mt-6 flex-1 px-4 sm:px-6"},Fn={key:0,class:"flex flex-shrink-0 justify-end px-4 py-4 sm:px-12"},Ln=O("button",{type:"submit",class:"ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"}," Save ",-1),jn={__name:"DrawerSlide",props:{title:{type:String,default:""},open:{type:Boolean,default:!1},isOverlay:{type:Boolean,default:!1},closeOutside:{type:Boolean,default:!1},stickyFooter:{type:Boolean,default:!1},stickyHeader:{type:Boolean,default:!1},width:{type:[String,Number],default:25},height:{type:[Number,String],default:100},notAllowedOutside:{type:Boolean,default:!1},direction:{type:String,default:()=>"rtl",validator:e=>["rtl","ltr","ttb","btt"].includes(e)}},emits:["close"],setup(e,{emit:t}){const n=e,r=g(n.open);Z(()=>n.open,s=>{r.value=s});const l=v(()=>{let s="";switch(n.direction){case"rtl":s="translate-x-0";break;case"ltr":s="translate-x-0";break;case"ttb":s="translate-y-0";break;case"btt":s="translate-y-0";break}return s}),a=v(()=>{let s="";switch(n.direction){case"rtl":s="translate-x-0";break;case"ltr":s="translate-x-0";break;case"ttb":s="translate-y-0";break;case"btt":s="translate-y-0";break}return s}),o=v(()=>{let s="";switch(n.direction){case"rtl":s="translate-x-full";break;case"ltr":s="-translate-x-full";break;case"ttb":s="-translate-y-full";break;case"btt":s="translate-y-full";break}return s}),i=v(()=>{let s="";switch(n.direction){case"rtl":s="translate-x-full";break;case"ltr":s="-translate-x-full";break;case"ttb":s="-translate-y-full";break;case"btt":s="translate-y-full";break}return s}),d=v(()=>{let s=[];switch(n.direction){case"rtl":s="right-0";break;case"ltr":s="left-0";break;case"ttb":s="top-0";break;case"btt":s="bottom-0";break}return s}),u=v(()=>n.direction==="ltr"||n.direction==="rtl"?{width:n.width+"vw",height:"100vh"}:{width:"100vw",height:n.height+"vh"}),c=()=>{n.notAllowedOutside||t("close",r.value)},p=()=>{t("close",r.value)};return(s,f)=>(V(),Te(x(ct),{as:"template",show:r.value},{default:q(()=>[K(x(an),{as:"div",class:"relative z-20",onClose:c},{default:q(()=>[n.isOverlay||n.closeOutside?(V(),Te(x(ge),{key:0,as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:q(()=>[hn]),_:1})):(V(),fe("div",gn)),O("div",yn,[O("div",bn,[O("div",{class:Pe(["pointer-events-none fixed flex max-w-full",x(d)])},[K(x(ge),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":x(i),"enter-to":x(a),"leave-from":x(l),"leave-to":x(o),leave:"transform transition ease-in-out duration-500 sm:duration-700"},{default:q(()=>[K(x(on),{class:"pointer-events-auto relative",style:bt(x(u))},{default:q(()=>[n.closeOutside?(V(),Te(x(ge),{key:0,as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:q(()=>[O("div",wn,[O("button",{type:"button",class:"rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-gray-200 active:text-sky-400",onClick:p},[En,K(x(Ie),{class:"h-6 w-6","aria-hidden":"true"})])])]),_:1})):pe("",!0),O("div",Sn,[O("div",xn,[te(s.$slots,"header",{},()=>[n.title?(V(),fe("div",{key:0,class:Pe(["px-4 py-4 sm:px-6",{"sticky top-0 border-b border-gray-200 bg-white z-10":n.stickyHeader}])},[O("div",On,[te(s.$slots,"title",{},()=>[K(x(sn),{class:"text-base font-semibold leading-6 text-gray-900 first-letter:capitalize"},{default:q(()=>[wt(Et(n.title),1)]),_:1})]),n.closeOutside?pe("",!0):(V(),fe("div",Tn,[te(s.$slots,"close",{},()=>[O("button",{type:"button",class:"rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-gray-200 active:text-sky-400",onClick:p},[$n,K(x(Ie),{class:"h-6 w-6","aria-hidden":"true"})])])]))])],2)):pe("",!0)]),O("div",kn,[te(s.$slots,"default")])]),e.stickyFooter?(V(),fe("div",Fn,[te(s.$slots,"footer",{},()=>[O("button",{type:"button",class:"rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400",onClick:p}," Cancel "),Ln])])):pe("",!0)])]),_:3},8,["style"])]),_:3},8,["enter-from","enter-to","leave-from","leave-to"])],2)])])]),_:3})]),_:3},8,["show"]))}};export{jn as default};
