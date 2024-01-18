import{r as a,R as I,a as Qe,b as Ve,j as E,w as Ge}from"./index-FqGtBFJ_.js";import{s as k,l as M,o as g,a as $e,u as F,U as A,C as B,O as ge,y as Q,b as De,d as C,x as Ke,I as ie,T as We,c as Le,e as T,r as _e,v as q,f as Ce,t as Ee,L as Ye}from"./AdminLayout-8TZdXObN.js";import{u as Xe}from"./useDispatch-MackedKD.js";import"./index-p1UXWbwx.js";import"./index.esm-tyU5CQBU.js";function Ne(e,t){let[r,n]=a.useState(e),i=k(e);return M(()=>n(i.current),[i,n,...t]),r}function Je(e,t,r){let[n,i]=a.useState(r),l=e!==void 0,o=a.useRef(l),u=a.useRef(!1),s=a.useRef(!1);return l&&!o.current&&!u.current?(u.current=!0,o.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!l&&o.current&&!s.current&&(s.current=!0,o.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[l?e:n,g(c=>(l||i(c),t==null?void 0:t(c)))]}function Ze(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function U(){let e=[],t={addEventListener(r,n,i,l){return r.addEventListener(n,i,l),t.add(()=>r.removeEventListener(n,i,l))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Ze(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,i){let l=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:i}),this.add(()=>{Object.assign(r.style,{[n]:l})})},group(r){let n=U();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let i of e.splice(n,1))i()}},dispose(){for(let r of e.splice(0))r()}};return t}function Y(){let[e]=a.useState(U);return a.useEffect(()=>()=>e.dispose(),[e]),e}let Te=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var et=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(et||{}),tt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(tt||{}),rt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(rt||{}),we=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(we||{});function He(e,t=0){var r;return e===((r=$e(e))==null?void 0:r.body)?!1:F(t,{0(){return e.matches(Te)},1(){let n=e;for(;n!==null;){if(n.matches(Te))return!0;n=n.parentElement}return!1}})}var nt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(nt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function lt(e,t=r=>r){return e.slice().sort((r,n)=>{let i=t(r),l=t(n);if(i===null||l===null)return 0;let o=i.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ot(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function it(){return/Android/gi.test(window.navigator.userAgent)}function at(){return ot()||it()}function le(e,t,r){let n=k(t);a.useEffect(()=>{function i(l){n.current(l)}return document.addEventListener(e,i,r),()=>document.removeEventListener(e,i,r)},[e,r])}function ut(e,t,r){let n=k(t);a.useEffect(()=>{function i(l){n.current(l)}return window.addEventListener(e,i,r),()=>window.removeEventListener(e,i,r)},[e,r])}function st(e,t,r=!0){let n=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function i(o,u){if(!n.current||o.defaultPrevented)return;let s=u(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function p(m){return typeof m=="function"?p(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e);for(let p of c){if(p===null)continue;let m=p instanceof HTMLElement?p:p.current;if(m!=null&&m.contains(s)||o.composed&&o.composedPath().includes(m))return}return!He(s,we.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let l=a.useRef(null);le("pointerdown",o=>{var u,s;n.current&&(l.current=((s=(u=o.composedPath)==null?void 0:u.call(o))==null?void 0:s[0])||o.target)},!0),le("mousedown",o=>{var u,s;n.current&&(l.current=((s=(u=o.composedPath)==null?void 0:u.call(o))==null?void 0:s[0])||o.target)},!0),le("click",o=>{at()||l.current&&(i(o,()=>l.current),l.current=null)},!0),le("touchend",o=>i(o,()=>o.target instanceof HTMLElement?o.target:null),!0),ut("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ze(e){return[e.screenX,e.screenY]}function ct(){let e=a.useRef([-1,-1]);return{wasMoved(t){let r=ze(t);return e.current[0]===r[0]&&e.current[1]===r[1]?!1:(e.current=r,!0)},update(t){e.current=ze(t)}}}let dt="div";var ke=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ke||{});function ft(e,t){var r;let{features:n=1,...i}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:(r=i["aria-hidden"])!=null?r:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return B({ourProps:l,theirProps:i,slot:{},defaultTag:dt,name:"Hidden"})}let pt=A(ft);function ht(e){throw new Error("Unexpected object: "+e)}var P=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(P||{});function vt(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),i=n??-1;switch(e.focus){case 0:{for(let l=0;l<r.length;++l)if(!t.resolveDisabled(r[l],l,r))return l;return n}case 1:{for(let l=i-1;l>=0;--l)if(!t.resolveDisabled(r[l],l,r))return l;return n}case 2:{for(let l=i+1;l<r.length;++l)if(!t.resolveDisabled(r[l],l,r))return l;return n}case 3:{for(let l=r.length-1;l>=0;--l)if(!t.resolveDisabled(r[l],l,r))return l;return n}case 4:{for(let l=0;l<r.length;++l)if(t.resolveId(r[l],l,r)===e.id)return l;return n}case 5:return null;default:ht(e)}}function Me(e={},t=null,r=[]){for(let[n,i]of Object.entries(e))je(r,Ae(t,n),i);return r}function Ae(e,t){return e?e+"["+t+"]":t}function je(e,t,r){if(Array.isArray(r))for(let[n,i]of r.entries())je(e,Ae(t,n.toString()),i);else r instanceof Date?e.push([t,r.toISOString()]):typeof r=="boolean"?e.push([t,r?"1":"0"]):typeof r=="string"?e.push([t,r]):typeof r=="number"?e.push([t,`${r}`]):r==null?e.push([t,""]):Me(r,t,e)}function ye(){let e=a.useRef(!1);return M(()=>(e.current=!0,()=>{e.current=!1}),[]),e}let Fe=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Pe(e){var t,r;let n=(t=e.innerText)!=null?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return n;let l=!1;for(let u of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),l=!0;let o=l?(r=i.innerText)!=null?r:"":n;return Fe.test(o)&&(o=o.replace(Fe,"")),o}function mt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let n=r.split(" ").map(i=>{let l=document.getElementById(i);if(l){let o=l.getAttribute("aria-label");return typeof o=="string"?o.trim():Pe(l).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return Pe(e).trim()}function bt(e){let t=a.useRef(""),r=a.useRef("");return g(()=>{let n=e.current;if(!n)return"";let i=n.innerText;if(t.current===i)return r.current;let l=mt(n).trim().toLowerCase();return t.current=i,r.current=l,l})}var gt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gt||{}),xt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(xt||{}),Lt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Lt||{}),wt=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(wt||{});function ve(e,t=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=lt(t(e.options.slice()),l=>l.dataRef.current.domRef.current),i=r?n.indexOf(r):null;return i===-1&&(i=null),{options:n,activeOptionIndex:i}}let yt={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,n=e.options.findIndex(i=>r(i.dataRef.current.value));return n!==-1&&(t=n),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var r;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=ve(e),i=vt(t,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:i,activationTrigger:(r=t.trigger)!=null?r:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(o=>{var u;return!o.dataRef.current.disabled&&((u=o.dataRef.current.textValue)==null?void 0:u.startsWith(n))}),l=i?e.options.indexOf(i):-1;return l===-1||l===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:l,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},n=ve(e,i=>[...i,r]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(r)),{...e,...n}},6:(e,t)=>{let r=ve(e,n=>{let i=n.findIndex(l=>l.id===t.id);return i!==-1&&n.splice(i,1),n});return{...e,...r,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},Re=a.createContext(null);Re.displayName="ListboxActionsContext";function ee(e){let t=a.useContext(Re);if(t===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ee),r}return t}let Oe=a.createContext(null);Oe.displayName="ListboxDataContext";function te(e){let t=a.useContext(Oe);if(t===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,te),r}return t}function Rt(e,t){return F(t.type,yt,e,t)}let Ot=a.Fragment;function St(e,t){let{value:r,defaultValue:n,form:i,name:l,onChange:o,by:u=(v,w)=>v===w,disabled:s=!1,horizontal:c=!1,multiple:p=!1,...m}=e;const S=c?"horizontal":"vertical";let x=Q(t),[h=p?[]:void 0,b]=Je(r,o,n),[f,d]=a.useReducer(Rt,{dataRef:a.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),L=a.useRef({static:!1,hold:!1}),O=a.useRef(null),$=a.useRef(null),V=a.useRef(null),y=g(typeof u=="string"?(v,w)=>{let z=u;return(v==null?void 0:v[z])===(w==null?void 0:w[z])}:u),D=a.useCallback(v=>F(R.mode,{1:()=>h.some(w=>y(w,v)),0:()=>y(h,v)}),[h]),R=a.useMemo(()=>({...f,value:h,disabled:s,mode:p?1:0,orientation:S,compare:y,isSelected:D,optionsPropsRef:L,labelRef:O,buttonRef:$,optionsRef:V}),[h,s,p,f]);M(()=>{f.dataRef.current=R},[R]),st([R.buttonRef,R.optionsRef],(v,w)=>{var z;d({type:1}),He(w,we.Loose)||(v.preventDefault(),(z=R.buttonRef.current)==null||z.focus())},R.listboxState===0);let G=a.useMemo(()=>({open:R.listboxState===0,disabled:s,value:h}),[R,s,h]),K=g(v=>{let w=R.options.find(z=>z.id===v);w&&H(w.dataRef.current.value)}),X=g(()=>{if(R.activeOptionIndex!==null){let{dataRef:v,id:w}=R.options[R.activeOptionIndex];H(v.current.value),d({type:2,focus:P.Specific,id:w})}}),W=g(()=>d({type:0})),J=g(()=>d({type:1})),ce=g((v,w,z)=>v===P.Specific?d({type:2,focus:P.Specific,id:w,trigger:z}):d({type:2,focus:v,trigger:z})),re=g((v,w)=>(d({type:5,id:v,dataRef:w}),()=>d({type:6,id:v}))),de=g(v=>(d({type:7,id:v}),()=>d({type:7,id:null}))),H=g(v=>F(R.mode,{0(){return b==null?void 0:b(v)},1(){let w=R.value.slice(),z=w.findIndex(ne=>y(ne,v));return z===-1?w.push(v):w.splice(z,1),b==null?void 0:b(w)}})),fe=g(v=>d({type:3,value:v})),pe=g(()=>d({type:4})),_=a.useMemo(()=>({onChange:H,registerOption:re,registerLabel:de,goToOption:ce,closeListbox:J,openListbox:W,selectActiveOption:X,selectOption:K,search:fe,clearSearch:pe}),[]),Z={ref:x},N=a.useRef(null),he=Y();return a.useEffect(()=>{N.current&&n!==void 0&&he.addEventListener(N.current,"reset",()=>{b==null||b(n)})},[N,b]),I.createElement(Re.Provider,{value:_},I.createElement(Oe.Provider,{value:R},I.createElement(De,{value:F(R.listboxState,{0:C.Open,1:C.Closed})},l!=null&&h!=null&&Me({[l]:h}).map(([v,w],z)=>I.createElement(pt,{features:ke.Hidden,ref:z===0?ne=>{var Se;N.current=(Se=ne==null?void 0:ne.closest("form"))!=null?Se:null}:void 0,...Ke({key:v,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:v,value:w})})),B({ourProps:Z,theirProps:m,slot:G,defaultTag:Ot,name:"Listbox"}))))}let Et="button";function Tt(e,t){var r;let n=ie(),{id:i=`headlessui-listbox-button-${n}`,...l}=e,o=te("Listbox.Button"),u=ee("Listbox.Button"),s=Q(o.buttonRef,t),c=Y(),p=g(f=>{switch(f.key){case T.Space:case T.Enter:case T.ArrowDown:f.preventDefault(),u.openListbox(),c.nextFrame(()=>{o.value||u.goToOption(P.First)});break;case T.ArrowUp:f.preventDefault(),u.openListbox(),c.nextFrame(()=>{o.value||u.goToOption(P.Last)});break}}),m=g(f=>{switch(f.key){case T.Space:f.preventDefault();break}}),S=g(f=>{if(_e(f.currentTarget))return f.preventDefault();o.listboxState===0?(u.closeListbox(),c.nextFrame(()=>{var d;return(d=o.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})})):(f.preventDefault(),u.openListbox())}),x=Ne(()=>{if(o.labelId)return[o.labelId,i].join(" ")},[o.labelId,i]),h=a.useMemo(()=>({open:o.listboxState===0,disabled:o.disabled,value:o.value}),[o]),b={ref:s,id:i,type:We(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":(r=o.optionsRef.current)==null?void 0:r.id,"aria-expanded":o.listboxState===0,"aria-labelledby":x,disabled:o.disabled,onKeyDown:p,onKeyUp:m,onClick:S};return B({ourProps:b,theirProps:l,slot:h,defaultTag:Et,name:"Listbox.Button"})}let zt="label";function Ft(e,t){let r=ie(),{id:n=`headlessui-listbox-label-${r}`,...i}=e,l=te("Listbox.Label"),o=ee("Listbox.Label"),u=Q(l.labelRef,t);M(()=>o.registerLabel(n),[n]);let s=g(()=>{var p;return(p=l.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}),c=a.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled}),[l]);return B({ourProps:{ref:u,id:n,onClick:s},theirProps:i,slot:c,defaultTag:zt,name:"Listbox.Label"})}let Pt="ul",It=ge.RenderStrategy|ge.Static;function $t(e,t){var r;let n=ie(),{id:i=`headlessui-listbox-options-${n}`,...l}=e,o=te("Listbox.Options"),u=ee("Listbox.Options"),s=Q(o.optionsRef,t),c=Y(),p=Y(),m=Le(),S=m!==null?(m&C.Open)===C.Open:o.listboxState===0;a.useEffect(()=>{var d;let L=o.optionsRef.current;L&&o.listboxState===0&&L!==((d=$e(L))==null?void 0:d.activeElement)&&L.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let x=g(d=>{switch(p.dispose(),d.key){case T.Space:if(o.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),u.search(d.key);case T.Enter:if(d.preventDefault(),d.stopPropagation(),o.activeOptionIndex!==null){let{dataRef:L}=o.options[o.activeOptionIndex];u.onChange(L.current.value)}o.mode===0&&(u.closeListbox(),U().nextFrame(()=>{var L;return(L=o.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})}));break;case F(o.orientation,{vertical:T.ArrowDown,horizontal:T.ArrowRight}):return d.preventDefault(),d.stopPropagation(),u.goToOption(P.Next);case F(o.orientation,{vertical:T.ArrowUp,horizontal:T.ArrowLeft}):return d.preventDefault(),d.stopPropagation(),u.goToOption(P.Previous);case T.Home:case T.PageUp:return d.preventDefault(),d.stopPropagation(),u.goToOption(P.First);case T.End:case T.PageDown:return d.preventDefault(),d.stopPropagation(),u.goToOption(P.Last);case T.Escape:return d.preventDefault(),d.stopPropagation(),u.closeListbox(),c.nextFrame(()=>{var L;return(L=o.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})});case T.Tab:d.preventDefault(),d.stopPropagation();break;default:d.key.length===1&&(u.search(d.key),p.setTimeout(()=>u.clearSearch(),350));break}}),h=Ne(()=>{var d;return(d=o.buttonRef.current)==null?void 0:d.id},[o.buttonRef.current]),b=a.useMemo(()=>({open:o.listboxState===0}),[o]),f={"aria-activedescendant":o.activeOptionIndex===null||(r=o.options[o.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":o.mode===1?!0:void 0,"aria-labelledby":h,"aria-orientation":o.orientation,id:i,onKeyDown:x,role:"listbox",tabIndex:0,ref:s};return B({ourProps:f,theirProps:l,slot:b,defaultTag:Pt,features:It,visible:S,name:"Listbox.Options"})}let Dt="li";function Ct(e,t){let r=ie(),{id:n=`headlessui-listbox-option-${r}`,disabled:i=!1,value:l,...o}=e,u=te("Listbox.Option"),s=ee("Listbox.Option"),c=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===n:!1,p=u.isSelected(l),m=a.useRef(null),S=bt(m),x=k({disabled:i,value:l,domRef:m,get textValue(){return S()}}),h=Q(t,m);M(()=>{if(u.listboxState!==0||!c||u.activationTrigger===0)return;let y=U();return y.requestAnimationFrame(()=>{var D,R;(R=(D=m.current)==null?void 0:D.scrollIntoView)==null||R.call(D,{block:"nearest"})}),y.dispose},[m,c,u.listboxState,u.activationTrigger,u.activeOptionIndex]),M(()=>s.registerOption(n,x),[x,n]);let b=g(y=>{if(i)return y.preventDefault();s.onChange(l),u.mode===0&&(s.closeListbox(),U().nextFrame(()=>{var D;return(D=u.buttonRef.current)==null?void 0:D.focus({preventScroll:!0})}))}),f=g(()=>{if(i)return s.goToOption(P.Nothing);s.goToOption(P.Specific,n)}),d=ct(),L=g(y=>d.update(y)),O=g(y=>{d.wasMoved(y)&&(i||c||s.goToOption(P.Specific,n,0))}),$=g(y=>{d.wasMoved(y)&&(i||c&&s.goToOption(P.Nothing))}),V=a.useMemo(()=>({active:c,selected:p,disabled:i}),[c,p,i]);return B({ourProps:{id:n,ref:h,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":p,disabled:void 0,onClick:b,onFocus:f,onPointerEnter:L,onMouseEnter:L,onPointerMove:O,onMouseMove:O,onPointerLeave:$,onMouseLeave:$},theirProps:o,slot:V,defaultTag:Dt,name:"Listbox.Option"})}let Nt=A(St),Ht=A(Tt),kt=A(Ft),Mt=A($t),At=A(Ct),oe=Object.assign(Nt,{Button:Ht,Label:kt,Options:Mt,Option:At});function jt(e=0){let[t,r]=a.useState(e),n=ye(),i=a.useCallback(s=>{n.current&&r(c=>c|s)},[t,n]),l=a.useCallback(s=>!!(t&s),[t]),o=a.useCallback(s=>{n.current&&r(c=>c&~s)},[r,n]),u=a.useCallback(s=>{n.current&&r(c=>c^s)},[r]);return{flags:t,addFlag:i,hasFlag:l,removeFlag:o,toggleFlag:u}}function Ut(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function me(e,...t){e&&t.length>0&&e.classList.add(...t)}function be(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Bt(e,t){let r=U();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[l,o]=[n,i].map(s=>{let[c=0]=s.split(",").filter(Boolean).map(p=>p.includes("ms")?parseFloat(p):parseFloat(p)*1e3).sort((p,m)=>m-p);return c}),u=l+o;if(u!==0){r.group(c=>{c.setTimeout(()=>{t(),c.dispose()},u),c.addEventListener(e,"transitionrun",p=>{p.target===p.currentTarget&&c.dispose()})});let s=r.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),s())})}else t();return r.add(()=>t()),r.dispose}function qt(e,t,r,n){let i=r?"enter":"leave",l=U(),o=n!==void 0?Ut(n):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let u=F(i,{enter:()=>t.enter,leave:()=>t.leave}),s=F(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=F(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return be(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),me(e,...t.base,...u,...c),l.nextFrame(()=>{be(e,...t.base,...u,...c),me(e,...t.base,...u,...s),Bt(e,()=>(be(e,...t.base,...u),me(e,...t.base,...t.entered),o()))}),l.dispose}function Qt({immediate:e,container:t,direction:r,classes:n,onStart:i,onStop:l}){let o=ye(),u=Y(),s=k(r);M(()=>{e&&(s.current="enter")},[e]),M(()=>{let c=U();u.add(c.dispose);let p=t.current;if(p&&s.current!=="idle"&&o.current)return c.dispose(),i.current(s.current),c.add(qt(p,n.current,s.current==="enter",()=>{c.dispose(),l.current(s.current)})),c.dispose},[r])}function j(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let ae=a.createContext(null);ae.displayName="TransitionContext";var Vt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Vt||{});function Gt(){let e=a.useContext(ae);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Kt(){let e=a.useContext(ue);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let ue=a.createContext(null);ue.displayName="NestingContext";function se(e){return"children"in e?se(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ue(e,t){let r=k(e),n=a.useRef([]),i=ye(),l=Y(),o=g((x,h=q.Hidden)=>{let b=n.current.findIndex(({el:f})=>f===x);b!==-1&&(F(h,{[q.Unmount](){n.current.splice(b,1)},[q.Hidden](){n.current[b].state="hidden"}}),l.microTask(()=>{var f;!se(n)&&i.current&&((f=r.current)==null||f.call(r))}))}),u=g(x=>{let h=n.current.find(({el:b})=>b===x);return h?h.state!=="visible"&&(h.state="visible"):n.current.push({el:x,state:"visible"}),()=>o(x,q.Unmount)}),s=a.useRef([]),c=a.useRef(Promise.resolve()),p=a.useRef({enter:[],leave:[],idle:[]}),m=g((x,h,b)=>{s.current.splice(0),t&&(t.chains.current[h]=t.chains.current[h].filter(([f])=>f!==x)),t==null||t.chains.current[h].push([x,new Promise(f=>{s.current.push(f)})]),t==null||t.chains.current[h].push([x,new Promise(f=>{Promise.all(p.current[h].map(([d,L])=>L)).then(()=>f())})]),h==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>b(h)):b(h)}),S=g((x,h,b)=>{Promise.all(p.current[h].splice(0).map(([f,d])=>d)).then(()=>{var f;(f=s.current.shift())==null||f()}).then(()=>b(h))});return a.useMemo(()=>({children:n,register:u,unregister:o,onStart:m,onStop:S,wait:c,chains:p}),[u,o,n,m,S,p,c])}function Wt(){}let _t=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ie(e){var t;let r={};for(let n of _t)r[n]=(t=e[n])!=null?t:Wt;return r}function Yt(e){let t=a.useRef(Ie(e));return a.useEffect(()=>{t.current=Ie(e)},[e]),t}let Xt="div",Be=ge.RenderStrategy;function Jt(e,t){var r,n;let{beforeEnter:i,afterEnter:l,beforeLeave:o,afterLeave:u,enter:s,enterFrom:c,enterTo:p,entered:m,leave:S,leaveFrom:x,leaveTo:h,...b}=e,f=a.useRef(null),d=Q(f,t),L=(r=b.unmount)==null||r?q.Unmount:q.Hidden,{show:O,appear:$,initial:V}=Gt(),[y,D]=a.useState(O?"visible":"hidden"),R=Kt(),{register:G,unregister:K}=R;a.useEffect(()=>G(f),[G,f]),a.useEffect(()=>{if(L===q.Hidden&&f.current){if(O&&y!=="visible"){D("visible");return}return F(y,{hidden:()=>K(f),visible:()=>G(f)})}},[y,f,G,K,O,L]);let X=k({base:j(b.className),enter:j(s),enterFrom:j(c),enterTo:j(p),entered:j(m),leave:j(S),leaveFrom:j(x),leaveTo:j(h)}),W=Yt({beforeEnter:i,afterEnter:l,beforeLeave:o,afterLeave:u}),J=Ce();a.useEffect(()=>{if(J&&y==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,y,J]);let ce=V&&!$,re=$&&O&&V,de=!J||ce?"idle":O?"enter":"leave",H=jt(0),fe=g(v=>F(v,{enter:()=>{H.addFlag(C.Opening),W.current.beforeEnter()},leave:()=>{H.addFlag(C.Closing),W.current.beforeLeave()},idle:()=>{}})),pe=g(v=>F(v,{enter:()=>{H.removeFlag(C.Opening),W.current.afterEnter()},leave:()=>{H.removeFlag(C.Closing),W.current.afterLeave()},idle:()=>{}})),_=Ue(()=>{D("hidden"),K(f)},R),Z=a.useRef(!1);Qt({immediate:re,container:f,classes:X,direction:de,onStart:k(v=>{Z.current=!0,_.onStart(f,v,fe)}),onStop:k(v=>{Z.current=!1,_.onStop(f,v,pe),v==="leave"&&!se(_)&&(D("hidden"),K(f))})});let N=b,he={ref:d};return re?N={...N,className:Ee(b.className,...X.current.enter,...X.current.enterFrom)}:Z.current&&(N.className=Ee(b.className,(n=f.current)==null?void 0:n.className),N.className===""&&delete N.className),I.createElement(ue.Provider,{value:_},I.createElement(De,{value:F(y,{visible:C.Open,hidden:C.Closed})|H.flags},B({ourProps:he,theirProps:N,defaultTag:Xt,features:Be,visible:y==="visible",name:"Transition.Child"})))}function Zt(e,t){let{show:r,appear:n=!1,unmount:i=!0,...l}=e,o=a.useRef(null),u=Q(o,t);Ce();let s=Le();if(r===void 0&&s!==null&&(r=(s&C.Open)===C.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,p]=a.useState(r?"visible":"hidden"),m=Ue(()=>{p("hidden")}),[S,x]=a.useState(!0),h=a.useRef([r]);M(()=>{S!==!1&&h.current[h.current.length-1]!==r&&(h.current.push(r),x(!1))},[h,r]);let b=a.useMemo(()=>({show:r,appear:n,initial:S}),[r,n,S]);a.useEffect(()=>{if(r)p("visible");else if(!se(m))p("hidden");else{let O=o.current;if(!O)return;let $=O.getBoundingClientRect();$.x===0&&$.y===0&&$.width===0&&$.height===0&&p("hidden")}},[r,m]);let f={unmount:i},d=g(()=>{var O;S&&x(!1),(O=e.beforeEnter)==null||O.call(e)}),L=g(()=>{var O;S&&x(!1),(O=e.beforeLeave)==null||O.call(e)});return I.createElement(ue.Provider,{value:m},I.createElement(ae.Provider,{value:b},B({ourProps:{...f,as:a.Fragment,children:I.createElement(qe,{ref:u,...f,...l,beforeEnter:d,beforeLeave:L})},theirProps:{},defaultTag:a.Fragment,features:Be,visible:c==="visible",name:"Transition"})))}function er(e,t){let r=a.useContext(ae)!==null,n=Le()!==null;return I.createElement(I.Fragment,null,!r&&n?I.createElement(xe,{ref:t,...e}):I.createElement(qe,{ref:t,...e}))}let xe=A(Zt),qe=A(Jt),tr=A(er),rr=Object.assign(xe,{Child:tr,Root:xe});const ur=({i18n:e})=>{const{lang:t}=Qe(Ve),r=Xe(),n=l=>{switch(l){case"id":return E.jsxs("svg",{"aria-hidden":"true",className:"h-3.5 w-3.5 rounded-full mr-2",xmlns:"http://www.w3.org/2000/svg",id:"flag-icon-css-id",viewBox:"0 0 512 512",children:[E.jsx("path",{fill:"#fff",d:"M0 0h900v600H0z"}),E.jsx("path",{fill:"red",d:"M0 0h900v300H0z"})]});case"en":default:return E.jsx("svg",{"aria-hidden":"true",className:"h-3.5 w-3.5 rounded-full mr-2",xmlns:"http://www.w3.org/2000/svg",id:"flag-icon-css-us",viewBox:"0 0 512 512",children:E.jsxs("g",{fillRule:"evenodd",children:[E.jsxs("g",{strokeWidth:"1pt",children:[E.jsx("path",{fill:"#bd3d44",d:"M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z",transform:"scale(3.9385)"}),E.jsx("path",{fill:"#fff",d:"M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z",transform:"scale(3.9385)"})]}),E.jsx("path",{fill:"#192f5d",d:"M0 0h98.8v70H0z",transform:"scale(3.9385)"}),E.jsx("path",{fill:"#fff",d:"M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z",transform:"scale(3.9385)"})]})})}},i=l=>{r(Ge({lang:l})),e.changeLanguage(l)};return E.jsx(oe,{value:t,onChange:i,children:E.jsxs("div",{className:"relative",children:[E.jsxs(oe.Button,{className:"flex flex-row items-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2",children:[n(t),t.toUpperCase(),E.jsx("svg",{"aria-hidden":"true",className:"w-4 h-4 ml-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:E.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),E.jsx(rr,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:E.jsx(oe.Options,{className:"dark:text-gray-300 bg-white dark:bg-gray-800 border dark:border-gray-300 absolute mt-1 rounded text-sm cursor-default",children:Ye.map((l,o)=>E.jsx(oe.Option,{value:l.slug,className:"p-2 border dark:border-gray-300",children:l.title},o))})})]})})};export{ur as default};