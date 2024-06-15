"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1839],{1839:function(e,t,r){r.r(t),r.d(t,{ScrollArea:function(){return q},ScrollAreaAutosize:function(){return j}});var n=r(2265),o=r(7238),l=r(27745),a=r(59608),i=r(88276),c=r(32604),u=r(74565),s=r(30932);let[d,f]=(0,s.createSafeContext)("ScrollArea.Root component was not found in tree");var v=r(14939),p=r(66948);function h(e,t){let r=(0,v.useCallbackRef)(t);(0,p.useIsomorphicEffect)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let m=n.forwardRef((e,t)=>{let{style:r,...o}=e,l=f(),[a,i]=n.useState(0),[c,u]=n.useState(0),s=!!(a&&c);return h(l.scrollbarX,()=>{var e;let t=(null===(e=l.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;l.onCornerHeightChange(t),u(t)}),h(l.scrollbarY,()=>{var e;let t=(null===(e=l.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;l.onCornerWidthChange(t),i(t)}),s?n.createElement("div",{...o,ref:t,style:{...r,width:a,height:c}}):null}),w=n.forwardRef((e,t)=>{let r=f(),o=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&o?n.createElement(m,{...e,ref:t}):null});var b=r(11349);let g={scrollHideDelay:1e3,type:"hover"},E=(0,n.forwardRef)((e,t)=>{let{type:r,scrollHideDelay:o,scrollbars:l,...i}=(0,a.useProps)("ScrollAreaRoot",g,e),[u,s]=(0,n.useState)(null),[f,v]=(0,n.useState)(null),[p,h]=(0,n.useState)(null),[m,w]=(0,n.useState)(null),[E,S]=(0,n.useState)(null),[y,C]=(0,n.useState)(0),[R,D]=(0,n.useState)(0),[x,P]=(0,n.useState)(!1),[T,A]=(0,n.useState)(!1),L=(0,b.useMergedRef)(t,e=>s(e));return n.createElement(d,{value:{type:r,scrollHideDelay:o,scrollArea:u,viewport:f,onViewportChange:v,content:p,onContentChange:h,scrollbarX:m,onScrollbarXChange:w,scrollbarXEnabled:x,onScrollbarXEnabledChange:P,scrollbarY:E,onScrollbarYChange:S,scrollbarYEnabled:T,onScrollbarYEnabledChange:A,onCornerWidthChange:C,onCornerHeightChange:D}},n.createElement(c.Box,{...i,ref:L,__vars:{"--sa-corner-width":"xy"!==l?"0px":"".concat(y,"px"),"--sa-corner-height":"xy"!==l?"0px":"".concat(R,"px")}}))});E.displayName="@mantine/core/ScrollAreaRoot";var S=r(77034),y=r(30518);function C(e,t){let r=e/t;return Number.isNaN(r)?0:r}function R(e){let t=C(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function D(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function x(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=R(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,a=t.content-t.viewport,i=function(e,t){let[r,n]=t;return Math.min(n,Math.max(r,e))}(e,"ltr"===r?[0,a]:[-1*a,0]);return D([0,a],[0,l-n])(i)}function P(e){return e?parseInt(e,10):0}function T(e,t){let{checkForDefaultPrevented:r=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=>{null==e||e(n),!1!==r&&n.defaultPrevented||null==t||t(n)}}let[A,L]=(0,s.createSafeContext)("ScrollAreaScrollbar was not found in tree"),k=(0,n.forwardRef)((e,t)=>{let{sizes:r,hasThumb:o,onThumbChange:l,onThumbPointerUp:a,onThumbPointerDown:i,onThumbPositionChange:c,onDragScroll:u,onWheelScroll:s,onResize:d,...p}=e,m=f(),[w,g]=n.useState(null),E=(0,b.useMergedRef)(t,e=>g(e)),y=n.useRef(null),C=n.useRef(""),{viewport:R}=m,D=r.content-r.viewport,x=(0,v.useCallbackRef)(s),P=(0,v.useCallbackRef)(c),L=(0,S.useDebounceCallback)(d,10),k=e=>{y.current&&u({x:e.clientX-y.current.left,y:e.clientY-y.current.top})};return(0,n.useEffect)(()=>{let e=e=>{let t=e.target;(null==w?void 0:w.contains(t))&&x(e,D)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[R,w,D,x]),(0,n.useEffect)(P,[r,P]),h(w,L),h(m.content,L),n.createElement(A,{value:{scrollbar:w,hasThumb:o,onThumbChange:(0,v.useCallbackRef)(l),onThumbPointerUp:(0,v.useCallbackRef)(a),onThumbPositionChange:P,onThumbPointerDown:(0,v.useCallbackRef)(i)}},n.createElement("div",{...p,ref:E,style:{position:"absolute",...p.style},onPointerDown:T(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),y.current=w.getBoundingClientRect(),C.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",k(e))}),onPointerMove:T(e.onPointerMove,k),onPointerUp:T(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=C.current,y.current=null})}))}),z=(0,n.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,style:l,...a}=e,i=f(),[c,u]=(0,n.useState)(),s=(0,n.useRef)(null),d=(0,b.useMergedRef)(t,s,i.onScrollbarXChange);return(0,n.useEffect)(()=>{s.current&&u(getComputedStyle(s.current))},[s]),n.createElement(k,{"data-orientation":"horizontal",...a,ref:d,sizes:r,style:{...l,"--sa-thumb-width":"".concat(R(r),"px")},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{s.current&&i.viewport&&c&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:s.current.clientWidth,paddingStart:P(c.paddingLeft),paddingEnd:P(c.paddingRight)}})}})}),M=(0,n.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,style:l,...a}=e,i=f(),[c,u]=n.useState(),s=(0,n.useRef)(null),d=(0,b.useMergedRef)(t,s,i.onScrollbarYChange);return(0,n.useEffect)(()=>{s.current&&u(getComputedStyle(s.current))},[s]),n.createElement(k,{...a,"data-orientation":"vertical",ref:d,sizes:r,style:{"--sa-thumb-height":"".concat(R(r),"px"),...l},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{s.current&&i.viewport&&c&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:s.current.clientHeight,paddingStart:P(c.paddingTop),paddingEnd:P(c.paddingBottom)}})}})}),W=(0,n.forwardRef)((e,t)=>{let{orientation:r="vertical",...o}=e,{dir:l}=(0,y.useDirection)(),a=f(),i=(0,n.useRef)(null),c=(0,n.useRef)(0),[u,s]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=C(u.viewport,u.content),v={...o,sizes:u,onSizesChange:s,hasThumb:!!(d>0&&d<1),onThumbChange:e=>{i.current=e},onThumbPointerUp:()=>{c.current=0},onThumbPointerDown:e=>{c.current=e}},p=(e,t)=>(function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=R(r),l=t||o/2,a=r.scrollbar.paddingStart+l,i=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),c=r.content-r.viewport;return D([a,i],"ltr"===n?[0,c]:[-1*c,0])(e)})(e,c.current,u,t);return"horizontal"===r?n.createElement(z,{...v,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=x(a.viewport.scrollLeft,u,l);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=p(e,l))}}):"vertical"===r?n.createElement(M,{...v,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=x(a.viewport.scrollTop,u);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=p(e))}}):null}),H=(0,n.forwardRef)((e,t)=>{let r=f(),{forceMount:o,...l}=e,[a,i]=(0,n.useState)(!1),c="horizontal"===e.orientation,u=(0,S.useDebounceCallback)(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;i(c?e:t)}},10);return(h(r.viewport,u),h(r.content,u),o||a)?n.createElement(W,{"data-state":a?"visible":"hidden",...l,ref:t}):null}),X=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=f(),[a,i]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let{scrollArea:e}=l,t=0;if(e){let r=()=>{window.clearTimeout(t),i(!0)},n=()=>{t=window.setTimeout(()=>i(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[l.scrollArea,l.scrollHideDelay]),r||a)?n.createElement(H,{"data-state":a?"visible":"hidden",...o,ref:t}):null}),Y=(0,n.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=f(),a="horizontal"===e.orientation,[i,c]=(0,n.useState)("hidden"),u=(0,S.useDebounceCallback)(()=>c("idle"),100);return((0,n.useEffect)(()=>{if("idle"===i){let e=window.setTimeout(()=>c("hidden"),l.scrollHideDelay);return()=>window.clearTimeout(e)}},[i,l.scrollHideDelay]),(0,n.useEffect)(()=>{let{viewport:e}=l,t=a?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(c("scrolling"),u()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[l.viewport,a,u]),r||"hidden"!==i)?n.createElement(W,{"data-state":"hidden"===i?"hidden":"visible",...o,ref:t,onPointerEnter:T(e.onPointerEnter,()=>c("interacting")),onPointerLeave:T(e.onPointerLeave,()=>c("idle"))}):null}),U=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=f(),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:i}=l,c="horizontal"===e.orientation;return n.useEffect(()=>(c?a(!0):i(!0),()=>{c?a(!1):i(!1)}),[c,a,i]),"hover"===l.type?n.createElement(X,{...o,ref:t,forceMount:r}):"scroll"===l.type?n.createElement(Y,{...o,ref:t,forceMount:r}):"auto"===l.type?n.createElement(H,{...o,ref:t,forceMount:r}):"always"===l.type?n.createElement(W,{...o,ref:t}):null}),N=(0,n.forwardRef)((e,t)=>{let{style:r,...o}=e,l=f(),a=L(),{onThumbPositionChange:i}=a,c=(0,b.useMergedRef)(t,e=>a.onThumbChange(e)),u=(0,n.useRef)(),s=(0,S.useDebounceCallback)(()=>{u.current&&(u.current(),u.current=void 0)},100);return(0,n.useEffect)(()=>{let{viewport:e}=l;if(e){let t=()=>{if(s(),!u.current){let t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return function o(){let l={left:e.scrollLeft,top:e.scrollTop},a=r.left!==l.left,i=r.top!==l.top;(a||i)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)}(e,i);u.current=t,i()}};return i(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[l.viewport,s,i]),n.createElement("div",{"data-state":a.hasThumb?"visible":"hidden",...o,ref:c,style:{width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)",...r},onPointerDownCapture:T(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;a.onThumbPointerDown({x:r,y:n})}),onPointerUp:T(e.onPointerUp,a.onThumbPointerUp)})}),I=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=L();return r||l.hasThumb?n.createElement(N,{ref:t,...o}):null}),B=(0,n.forwardRef)((e,t)=>{let{children:r,style:o,...l}=e,a=f(),i=(0,b.useMergedRef)(t,a.onViewportChange);return n.createElement(c.Box,{...l,ref:i,style:{overflowX:a.scrollbarXEnabled?"scroll":"hidden",overflowY:a.scrollbarYEnabled?"scroll":"hidden",...o}},n.createElement("div",{style:{minWidth:"100%",display:"table"},ref:a.onContentChange},r))});B.displayName="@mantine/core/ScrollAreaViewport";var _={root:"m-d57069b5",viewport:"m-c0783ff9",viewportInner:"m-f8f631dd",scrollbar:"m-c44ba933",thumb:"m-d8b5e363",corner:"m-21657268"};let F={scrollHideDelay:1e3,type:"hover",scrollbars:"xy"},V=(0,l.createVarsResolver)((e,t)=>{let{scrollbarSize:r}=t;return{root:{"--scrollarea-scrollbar-size":(0,o.h)(r)}}}),q=(0,u.factory)((e,t)=>{let r=(0,a.useProps)("ScrollArea",F,e),{classNames:o,className:l,style:c,styles:u,unstyled:s,scrollbarSize:d,vars:f,type:v,scrollHideDelay:p,viewportProps:h,viewportRef:m,onScrollPositionChange:b,children:g,offsetScrollbars:S,scrollbars:y,...C}=r,[R,D]=(0,n.useState)(!1),x=(0,i.useStyles)({name:"ScrollArea",props:r,classes:_,className:l,style:c,classNames:o,styles:u,unstyled:s,vars:f,varsResolver:V});return n.createElement(E,{type:"never"===v?"always":v,scrollHideDelay:p,ref:t,scrollbars:y,...x("root"),...C},n.createElement(B,{...h,...x("viewport",{style:null==h?void 0:h.style}),ref:m,"data-offset-scrollbars":!0===S?"xy":S||void 0,"data-scrollbars":y||void 0,onScroll:"function"==typeof b?e=>{let{currentTarget:t}=e;return b({x:t.scrollLeft,y:t.scrollTop})}:void 0},g),("xy"===y||"x"===y)&&n.createElement(U,{...x("scrollbar"),orientation:"horizontal","data-hidden":"never"===v||void 0,forceMount:!0,onMouseEnter:()=>D(!0),onMouseLeave:()=>D(!1)},n.createElement(I,{...x("thumb")})),("xy"===y||"y"===y)&&n.createElement(U,{...x("scrollbar"),orientation:"vertical","data-hidden":"never"===v||void 0,forceMount:!0,onMouseEnter:()=>D(!0),onMouseLeave:()=>D(!1)},n.createElement(I,{...x("thumb")})),n.createElement(w,{...x("corner"),"data-hovered":R||void 0,"data-hidden":"never"===v||void 0}))});q.displayName="@mantine/core/ScrollArea";let j=(0,u.factory)((e,t)=>{let{children:r,classNames:o,styles:l,scrollbarSize:i,scrollHideDelay:u,type:s,dir:d,offsetScrollbars:f,viewportRef:v,onScrollPositionChange:p,unstyled:h,variant:m,viewportProps:w,scrollbars:b,style:g,vars:E,...S}=(0,a.useProps)("ScrollAreaAutosize",F,e);return n.createElement(c.Box,{...S,ref:t,style:[{display:"flex",overflow:"auto"},g]},n.createElement(c.Box,{style:{display:"flex",flexDirection:"column",flex:1}},n.createElement(q,{classNames:o,styles:l,scrollHideDelay:u,scrollbarSize:i,type:s,dir:d,offsetScrollbars:f,viewportRef:v,onScrollPositionChange:p,unstyled:h,variant:m,viewportProps:w,vars:E,scrollbars:b},r)))});q.classes=_,j.displayName="@mantine/core/ScrollAreaAutosize",j.classes=_,q.Autosize=j},30518:function(e,t,r){r.r(t),r.d(t,{DirectionContext:function(){return l},DirectionProvider:function(){return i},useDirection:function(){return a}});var n=r(2265),o=r(66948);let l=(0,n.createContext)({dir:"ltr",toggleDirection:()=>{},setDirection:()=>{}});function a(){return(0,n.useContext)(l)}function i(e){let{children:t,initialDirection:r="ltr",detectDirection:a=!0}=e,[i,c]=(0,n.useState)(r),u=e=>{c(e),document.documentElement.setAttribute("dir",e)};return(0,o.useIsomorphicEffect)(()=>{if(a){let e=document.documentElement.getAttribute("dir");("rtl"===e||"ltr"===e)&&u(e)}},[]),n.createElement(l.Provider,{value:{dir:i,toggleDirection:()=>u("ltr"===i?"rtl":"ltr"),setDirection:u}},t)}},30932:function(e,t,r){r.r(t),r.d(t,{createSafeContext:function(){return o}});var n=r(2265);function o(e){let t=(0,n.createContext)(null);return[e=>{let{children:r,value:o}=e;return n.createElement(t.Provider,{value:o},r)},()=>{let r=(0,n.useContext)(t);if(null===r)throw Error(e);return r}]}},14939:function(e,t,r){r.r(t),r.d(t,{useCallbackRef:function(){return o}});var n=r(2265);function o(e){let t=(0,n.useRef)(e);return(0,n.useEffect)(()=>{t.current=e}),(0,n.useMemo)(()=>function(){for(var e,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call(t,...n)},[])}},77034:function(e,t,r){r.r(t),r.d(t,{useDebounceCallback:function(){return l}});var n=r(2265),o=r(14939);function l(e,t){let r=(0,o.useCallbackRef)(e),l=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(r,t)},[r,t])}},66948:function(e,t,r){r.r(t),r.d(t,{useIsomorphicEffect:function(){return o}});var n=r(2265);let o="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},11349:function(e,t,r){r.r(t),r.d(t,{assignRef:function(){return o},mergeRefs:function(){return l},useMergedRef:function(){return a}});var n=r(2265);function o(e,t){"function"==typeof e?e(t):"object"==typeof e&&null!==e&&"current"in e&&(e.current=t)}function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach(t=>o(t,e))}}function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.useCallback)(l(...t),t)}}}]);