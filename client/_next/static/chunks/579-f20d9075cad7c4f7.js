(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{66995:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(2265),o=r(74404),i=r.n(o),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},c=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&p(e,r,t[r]);return e},v=(e,t)=>l(e,s(t)),h=(e,t)=>{var r={};for(var n in e)f.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))0>t.indexOf(n)&&d.call(e,n)&&(r[n]=e[n]);return r},y=(e,t,r)=>{let o=(0,n.forwardRef)((t,o)=>{var{color:i="currentColor",size:c=24,stroke:l=2,children:s}=t,u=h(t,["color","size","stroke","children"]);return(0,n.createElement)("svg",m(v(m({ref:o},a),{width:c,height:c,stroke:i,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),u),[...r.map(([e,t])=>(0,n.createElement)(e,t)),...s||[]])});return o.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),stroke:i().oneOfType([i().string,i().number])},o.displayName=`${t}`,o}},27825:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(66995).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},68765:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(66995).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},50144:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var n,o,i,a=i[o];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},47907:function(e,t,r){"use strict";var n=r(15313);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},49079:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(13127)},13127:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],s=!1,u=-1;function f(){s&&n&&(s=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!s){var e=c(f);s=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||s||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},18314:function(e,t,r){"use strict";var n=r(41811);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},74404:function(e,t,r){e.exports=r(18314)()},41811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},78290:function(e,t,r){"use strict";r.r(t),r.d(t,{ActionIcon:function(){return y}});var n=r(2265),o=r(2544),i=r(27745),a=r(59608),c=r(88276),l=r(32604),s=r(38953),u=r(97309),f=r(83564),d=r(62411),p=r(74692),m=r(55908);let v={},h=(0,i.createVarsResolver)((e,t)=>{let{size:r,radius:n,variant:i,gradient:a,color:c,autoContrast:l}=t,s=e.variantColorResolver({color:c||e.primaryColor,theme:e,gradient:a,variant:i||"filled",autoContrast:l});return{root:{"--ai-size":(0,o.getSize)(r,"ai-size"),"--ai-radius":void 0===n?void 0:(0,o.getRadius)(n),"--ai-bg":c||i?s.background:void 0,"--ai-hover":c||i?s.hover:void 0,"--ai-hover-color":c||i?s.hoverColor:void 0,"--ai-color":s.color,"--ai-bd":c||i?s.border:void 0}}}),y=(0,s.polymorphicFactory)((e,t)=>{let r=(0,a.useProps)("ActionIcon",v,e),{className:o,unstyled:i,variant:s,classNames:p,styles:y,style:b,loading:g,loaderProps:C,size:w,color:E,radius:k,__staticSelector:O,gradient:j,vars:S,children:T,disabled:I,"data-disabled":P,autoContrast:x,mod:A,..._}=r,L=(0,c.useStyles)({name:["ActionIcon",O],props:r,className:o,style:b,classes:m.Z,classNames:p,styles:y,unstyled:i,vars:S,varsResolver:h});return n.createElement(d.UnstyledButton,{...L("root",{active:!I&&!g&&!P}),..._,unstyled:i,variant:s,size:w,disabled:I||g,ref:t,mod:[{loading:g,disabled:I||P},A]},n.createElement(f.Transition,{mounted:!!g,transition:"slide-down",duration:150},e=>n.createElement(l.Box,{component:"span",...L("loader",{style:e}),"aria-hidden":!0},n.createElement(u.Loader,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...C}))),n.createElement(l.Box,{component:"span",mod:{loading:g},...L("icon")},T))});y.classes=m.Z,y.displayName="@mantine/core/ActionIcon",y.Group=p.ActionIconGroup},55908:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n={root:"m-8d3f4000",icon:"m-8d3afb97",loader:"m-302b9fb1",group:"m-1a0f1b21"}},74692:function(e,t,r){"use strict";r.r(t),r.d(t,{ActionIconGroup:function(){return p}});var n=r(2265),o=r(7238),i=r(27745),a=r(59608),c=r(88276),l=r(32604),s=r(74565),u=r(55908);let f={orientation:"horizontal"},d=(0,i.createVarsResolver)((e,t)=>{let{borderWidth:r}=t;return{group:{"--ai-border-width":(0,o.h)(r)}}}),p=(0,s.factory)((e,t)=>{let r=(0,a.useProps)("ActionIconGroup",f,e),{className:o,style:i,classNames:s,styles:p,unstyled:m,orientation:v,vars:h,borderWidth:y,variant:b,mod:g,...C}=(0,a.useProps)("ActionIconGroup",f,e),w=(0,c.useStyles)({name:"ActionIconGroup",props:r,classes:u.Z,className:o,style:i,classNames:s,styles:p,unstyled:m,vars:h,varsResolver:d,rootSelector:"group"});return n.createElement(l.Box,{...w("group"),ref:t,variant:b,mod:[{"data-orientation":v},g],role:"group",...C})});p.classes=u.Z,p.displayName="@mantine/core/ActionIconGroup"},16031:function(e,t,r){"use strict";r.r(t),r.d(t,{Container:function(){return p}});var n=r(2265),o=r(2544),i=r(27745),a=r(59608),c=r(88276),l=r(32604),s=r(74565),u={root:"m-7485cace"};let f={},d=(0,i.createVarsResolver)((e,t)=>{let{size:r,fluid:n}=t;return{root:{"--container-size":n?void 0:(0,o.getSize)(r,"container-size")}}}),p=(0,s.factory)((e,t)=>{let r=(0,a.useProps)("Container",f,e),{classNames:o,className:i,style:s,styles:p,unstyled:m,vars:v,fluid:h,mod:y,...b}=r,g=(0,c.useStyles)({name:"Container",classes:u,props:r,className:i,style:s,classNames:o,styles:p,unstyled:m,vars:v,varsResolver:d});return n.createElement(l.Box,{ref:t,mod:[{fluid:h},y],...g("root"),...b})});p.classes=u,p.displayName="@mantine/core/Container"},46338:function(e,t,r){"use strict";r.r(t),r.d(t,{Paper:function(){return p}});var n=r(2265),o=r(2544),i=r(27745),a=r(59608),c=r(88276),l=r(32604),s=r(38953),u={root:"m-1b7284a3"};let f={},d=(0,i.createVarsResolver)((e,t)=>{let{radius:r,shadow:n}=t;return{root:{"--paper-radius":void 0===r?void 0:(0,o.getRadius)(r),"--paper-shadow":(0,o.getShadow)(n)}}}),p=(0,s.polymorphicFactory)((e,t)=>{let r=(0,a.useProps)("Paper",f,e),{classNames:o,className:i,style:s,styles:p,unstyled:m,withBorder:v,vars:h,radius:y,shadow:b,variant:g,mod:C,...w}=r,E=(0,c.useStyles)({name:"Paper",props:r,classes:u,className:i,style:s,classNames:o,styles:p,unstyled:m,vars:h,varsResolver:d});return n.createElement(l.Box,{ref:t,mod:[{"data-with-border":v},C],...E("root"),variant:g,...w})});p.classes=u,p.displayName="@mantine/core/Paper"},78715:function(e,t,r){"use strict";r.r(t),r.d(t,{PasswordInput:function(){return C}});var n=r(2265),o=r(75504),i=r(20679),a=r(65179),c=r(2544),l=r(27745),s=r(9467),u=r(88276),f=r(59608),d=r(8730),p=r(74565),m=r(78290),v=r(75362),h=r(55309),y={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let b={visibilityToggleIcon:e=>{let{reveal:t}=e;return n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:t?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}},g=(0,l.createVarsResolver)((e,t)=>{let{size:r}=t;return{root:{"--psi-icon-size":(0,c.getSize)(r,"psi-icon-size"),"--psi-button-size":(0,c.getSize)(r,"psi-button-size")}}}),C=(0,p.factory)((e,t)=>{let r=(0,f.useProps)("PasswordInput",b,e),{classNames:c,className:l,style:p,styles:h,unstyled:C,vars:w,required:E,error:k,leftSection:O,disabled:j,id:S,variant:T,inputContainer:I,description:P,label:x,size:A,errorProps:_,descriptionProps:L,labelProps:R,withAsterisk:z,inputWrapperOrder:N,wrapperProps:D,radius:M,rightSection:Z,rightSectionWidth:V,rightSectionPointerEvents:B,leftSectionWidth:F,visible:W,defaultVisible:G,onVisibilityChange:H,visibilityToggleIcon:U,visibilityToggleButtonProps:$,rightSectionProps:K,leftSectionProps:q,leftSectionPointerEvents:X,mod:Y,...J}=r,Q=(0,i.useId)(S),[ee,et]=(0,a.useUncontrolled)({value:W,defaultValue:G,finalValue:!1,onChange:H}),er=()=>et(!ee),en=(0,u.useStyles)({name:"PasswordInput",classes:y,props:r,className:l,style:p,classNames:c,styles:h,unstyled:C,vars:w,varsResolver:g}),{resolvedClassNames:eo,resolvedStyles:ei}=(0,s.useResolvedStylesApi)({classNames:c,styles:h,props:r}),{styleProps:ea,rest:ec}=(0,d.extractStyleProps)(J),el=n.createElement(m.ActionIcon,{...en("visibilityToggle"),disabled:j,radius:M,"aria-hidden":!$,tabIndex:-1,...$,variant:"subtle",color:"gray",unstyled:C,onMouseDown:e=>{var t;e.preventDefault(),null==$||null===(t=$.onMouseDown)||void 0===t||t.call($,e),er()},onKeyDown:e=>{var t;null==$||null===(t=$.onKeyDown)||void 0===t||t.call($,e)," "===e.key&&(e.preventDefault(),er())}},n.createElement(U,{reveal:ee}));return n.createElement(v.Input.Wrapper,{required:E,id:Q,label:x,error:k,description:P,size:A,classNames:eo,styles:ei,__staticSelector:"PasswordInput",errorProps:_,descriptionProps:L,unstyled:C,withAsterisk:z,inputWrapperOrder:N,inputContainer:I,variant:T,labelProps:{...R,htmlFor:Q},mod:Y,...en("root"),...ea,...D},n.createElement(v.Input,{component:"div",error:k,leftSection:O,size:A,classNames:{...eo,input:(0,o.Z)(y.input,eo.input)},styles:ei,radius:M,disabled:j,__staticSelector:"PasswordInput",rightSectionWidth:V,rightSection:null!=Z?Z:el,variant:T,unstyled:C,leftSectionWidth:F,rightSectionPointerEvents:B||"all",rightSectionProps:K,leftSectionProps:q,leftSectionPointerEvents:X,withAria:!1},n.createElement("input",{required:E,"data-invalid":!!k||void 0,"data-with-left-section":!!O||void 0,...en("innerInput"),disabled:j,id:Q,ref:t,...ec,autoComplete:ec.autoComplete||"off",type:ee?"text":"password"})))});C.classes={...h.InputBase.classes,...y},C.displayName="@mantine/core/PasswordInput"},49835:function(e,t,r){"use strict";r.r(t),r.d(t,{Title:function(){return m}});var n=r(2265),o=r(27745),i=r(59608),a=r(88276),c=r(32604),l=r(74565),s=r(7238);let u=["h1","h2","h3","h4","h5","h6"];var f={root:"m-8a5d1357"};let d={order:1},p=(0,o.createVarsResolver)((e,t)=>{let{order:r,size:n,lineClamp:o,textWrap:i}=t,a=function(e,t){let r=void 0!==t?t:"h".concat(e);return u.includes(r)?{fontSize:"var(--mantine-".concat(r,"-font-size)"),fontWeight:"var(--mantine-".concat(r,"-font-weight)"),lineHeight:"var(--mantine-".concat(r,"-line-height)")}:{fontSize:(0,s.h)(r),fontWeight:"var(--mantine-h".concat(e,"-font-weight)"),lineHeight:"var(--mantine-h".concat(e,"-line-height)")}}(r,n);return{root:{"--title-fw":a.fontWeight,"--title-lh":a.lineHeight,"--title-fz":a.fontSize,"--title-line-clamp":"number"==typeof o?o.toString():void 0,"--title-text-wrap":i}}}),m=(0,l.factory)((e,t)=>{let r=(0,i.useProps)("Title",d,e),{classNames:o,className:l,style:s,styles:u,unstyled:m,order:v,vars:h,size:y,variant:b,lineClamp:g,textWrap:C,mod:w,...E}=r,k=(0,a.useStyles)({name:"Title",props:r,classes:f,className:l,style:s,classNames:o,styles:u,unstyled:m,vars:h,varsResolver:p});return[1,2,3,4,5,6].includes(v)?n.createElement(c.Box,{...k("root"),component:"h".concat(v),variant:b,ref:t,mod:[{order:v,"data-line-clamp":"number"==typeof g},w],size:y,...E}):null});m.classes=f,m.displayName="@mantine/core/Title"},9467:function(e,t,r){"use strict";r.r(t),r.d(t,{useResolvedStylesApi:function(){return a}}),r(2265);var n=r(54099),o=r(20571),i=r(50745);function a(e){let{classNames:t,styles:r,props:a,stylesCtx:c}=e,l=(0,n.useMantineTheme)();return{resolvedClassNames:(0,o.resolveClassNames)({theme:l,classNames:t,props:a,stylesCtx:c||void 0}),resolvedStyles:(0,i.resolveStyles)({theme:l,styles:r,props:a,stylesCtx:c||void 0})}}},77912:function(e,t,r){"use strict";r.d(t,{c:function(){return w}});var n=r(2265),o=r(50144);let i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function a(e,t){i(()=>{if(e)return window.addEventListener(e,t),()=>window.removeEventListener(e,t)},[e])}function c(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((t,r)=>{let n=e[r];return null!=n&&!1!==n&&(t[r]=n),t},{})}function l(e,t){let r=Object.keys(e);if("string"==typeof t){let n=r.filter(e=>e.startsWith("".concat(t,".")));return e[t]||n.some(t=>e[t])||!1}return r.some(t=>e[t])}function s(e,t){if(null===t||"object"!=typeof t)return{};let r={...t};return Object.keys(t).forEach(t=>{t.includes("".concat(String(e),"."))&&delete r[t]}),r}function u(e,t){return parseInt(e.substring(t.length+1).split(".")[0],10)}function f(e,t,r,n){if(void 0===t)return r;let o="".concat(String(e)),i=r;-1===n&&(i=s("".concat(o,".").concat(t),i));let a={...i},c=new Set;return Object.entries(i).filter(e=>{let[r]=e;if(!r.startsWith("".concat(o,".")))return!1;let n=u(r,o);return!Number.isNaN(n)&&n>=t}).forEach(e=>{let[t,r]=e,i=u(t,o),l=t.replace("".concat(o,".").concat(i),"".concat(o,".").concat(i+n));a[l]=r,c.add(l),c.has(t)||delete a[t]}),a}function d(e){return"string"!=typeof e?[]:e.split(".")}function p(e,t){let r=d(e);if(0===r.length||"object"!=typeof t||null===t)return;let n=t[r[0]];for(let e=1;e<r.length&&void 0!==n;e+=1)n=n[r[e]];return n}function m(e,t,r){"object"==typeof r.value&&(r.value=v(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function v(e){if("object"!=typeof e)return e;var t,r,n,o=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?n=Object.create(e.__proto__||null):"[object Array]"===i?n=Array(e.length):"[object Set]"===i?(n=new Set,e.forEach(function(e){n.add(v(e))})):"[object Map]"===i?(n=new Map,e.forEach(function(e,t){n.set(v(t),v(e))})):"[object Date]"===i?n=new Date(+e):"[object RegExp]"===i?n=new RegExp(e.source,e.flags):"[object DataView]"===i?n=new e.constructor(v(e.buffer)):"[object ArrayBuffer]"===i?n=e.slice(0):"Array]"===i.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)m(n,r[o],Object.getOwnPropertyDescriptor(e,r[o]));for(o=0,r=Object.getOwnPropertyNames(e);o<r.length;o++)Object.hasOwnProperty.call(n,t=r[o])&&n[t]===e[t]||m(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}function h(e,t,r){let n=d(e);if(0===n.length)return r;let o=v(r);if(1===n.length)return o[n[0]]=t,o;let i=o[n[0]];for(let e=1;e<n.length-1;e+=1){if(void 0===i)return o;i=i[n[e]]}return i[n[n.length-1]]=t,o}function y(e){let t=c(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function b(e,t){return"function"==typeof e?y(e(t)):y(function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"object"!=typeof t||null===t?o:Object.keys(t).reduce((o,i)=>{let a=t[i],c="".concat(""===n?"":"".concat(n,".")).concat(i),l=p(c,r),s=!1;return"function"==typeof a&&(o[c]=a(l,r,c)),"object"==typeof a&&Array.isArray(l)&&(s=!0,l.forEach((t,n)=>e(a,r,"".concat(c,".").concat(n),o))),"object"!=typeof a||"object"!=typeof l||null===l||s||e(a,r,c,o),o},o)}(e,t))}function g(e,t,r){if("string"!=typeof e)return{hasError:!1,error:null};let n=b(t,r),o=Object.keys(n.errors).find(t=>e.split(".").every((e,r)=>e===t.split(".")[r]));return{hasError:!!o,error:o?n.errors[o]:null}}function C(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,".".concat("__MANTINE_FORM_INDEX__"))))}function w(){let{name:e,initialValues:t,initialErrors:r={},initialDirty:i={},initialTouched:u={},clearInputErrorOnChange:d=!0,validateInputOnChange:m=!1,validateInputOnBlur:v=!1,onValuesChange:y,transformValues:w=e=>e,enhanceGetInputProps:E,validate:k}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[O,j]=(0,n.useState)(u),[S,T]=(0,n.useState)(i),[I,P]=(0,n.useState)(t||{}),[x,A]=(0,n.useState)(c(r)),[_,L]=(0,n.useState)(!1),R=(0,n.useRef)(t||{}),z=e=>{R.current=e},N=(0,n.useCallback)(e=>{_||(L(!0),P(e),z(e))},[_]),D=(0,n.useCallback)(()=>j({}),[]),M=(0,n.useCallback)(e=>A(t=>c("function"==typeof e?e(t):e)),[]),Z=(0,n.useCallback)(()=>A({}),[]),V=(0,n.useCallback)(()=>{P(R.current),Z(),T({}),D()},[]),B=(0,n.useCallback)((e,t)=>M(r=>({...r,[e]:t})),[]),F=(0,n.useCallback)(e=>M(t=>{if("string"!=typeof e)return t;let r={...t};return delete r[e],r}),[]),W=(0,n.useCallback)(e=>T(t=>{if("string"!=typeof e)return t;let r=s(e,t);return delete r[e],r}),[]),G=(0,n.useCallback)((e,t)=>{let r=C(e,m);W(e),j(t=>({...t,[e]:!0})),P(n=>{let o=p(e,n),i=h(e,t instanceof Function?t(o):t,n);if(r){let t=g(e,k,i);t.hasError?B(e,t.error):F(e)}return null==y||y(i,n),i}),!r&&d&&B(e,null)},[y]),H=(0,n.useCallback)(e=>{P(t=>{let r=e instanceof Function?e(t):e,n={...t,...r};return null==y||y(n,t),n}),d&&Z()},[y]),U=(0,n.useCallback)((e,t)=>{W(e),P(r=>{let n=function(e,t,r){let{from:n,to:o}=t,i=p(e,r);if(!Array.isArray(i))return r;let a=[...i],c=i[n];return a.splice(n,1),a.splice(o,0,c),h(e,a,r)}(e,t,r);return null==y||y(n,r),n}),A(r=>(function(e,t,r){let{from:n,to:o}=t,i="".concat(e,".").concat(n),a="".concat(e,".").concat(o),c={...r};return Object.keys(r).every(e=>{let t,r;if(e.startsWith(i)&&(t=e,r=e.replace(i,a)),e.startsWith(a)&&(t=e.replace(a,i),r=e),t&&r){let e=c[t],n=c[r];return void 0===n?delete c[t]:c[t]=n,void 0===e?delete c[r]:c[r]=e,!1}return!0}),c})(e,t,r))},[]),$=(0,n.useCallback)((e,t)=>{W(e),P(r=>{let n=function(e,t,r){let n=p(e,r);return Array.isArray(n)?h(e,n.filter((e,r)=>r!==t),r):r}(e,t,r);return null==y||y(n,r),n}),A(r=>f(e,t,r,-1))},[]),K=(0,n.useCallback)((e,t,r)=>{W(e),P(n=>{let o=function(e,t,r,n){let o=p(e,n);if(!Array.isArray(o))return n;let i=[...o];return i.splice("number"==typeof r?r:i.length,0,t),h(e,i,n)}(e,t,r,n);return null==y||y(o,n),o}),A(t=>f(e,r,t,1))},[]),q=(0,n.useCallback)(()=>{let e=b(k,I);return A(e.errors),e},[I,k]),X=(0,n.useCallback)(e=>{let t=g(e,k,I);return t.hasError?B(e,t.error):F(e),t},[I,k]),Y=(0,n.useCallback)(e=>{e.preventDefault(),V()},[]),J=(0,n.useCallback)(e=>l(O,e),[O]),Q=(0,n.useCallback)(e=>e?!g(e,k,I).hasError:!b(k,I).hasErrors,[I,k]),ee={initialized:_,values:I,errors:x,initialize:N,setValues:H,setInitialValues:z,setErrors:M,setFieldValue:G,setFieldError:B,clearFieldError:F,clearErrors:Z,reset:V,validate:q,validateField:X,reorderListItem:U,removeListItem:$,insertListItem:K,getInputProps:function(e){var t;let{type:r="input",withError:n=!0,withFocus:o=!0,...i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a={onChange:(t=t=>G(e,t),e=>{if(e){if("function"==typeof e)t(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:r}=e;r instanceof HTMLInputElement?"checkbox"===r.type?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}else t(e)})};return n&&(a.error=x[e]),"checkbox"===r?a.checked=p(e,I):a.value=p(e,I),o&&(a.onFocus=()=>j(t=>({...t,[e]:!0})),a.onBlur=()=>{if(C(e,v)){let t=g(e,k,I);t.hasError?B(e,t.error):F(e)}}),Object.assign(a,null==E?void 0:E({inputProps:a,field:e,options:{type:r,withError:n,withFocus:o,...i},form:ee}))},onSubmit:(e,t)=>r=>{null==r||r.preventDefault();let n=q();n.hasErrors?null==t||t(n.errors,I,r):null==e||e(w(I),r)},onReset:Y,isDirty:e=>{if(e){let t=p(e,S);return"boolean"==typeof t?t:!o(p(e,I),p(e,R.current))}return Object.keys(S).length>0?l(S):!o(I,R.current)},isTouched:J,setTouched:j,setDirty:T,resetTouched:D,resetDirty:e=>{z(e?{...I,...e}:I),T({})},isValid:Q,getTransformedValues:e=>w(e||I)};return e&&function(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw Error('[@mantine/use-form] Form name "'.concat(e,'" is invalid, it should contain only letters, numbers and dashes'))}(e),a("mantine-form:".concat(e,":set-field-value"),e=>ee.setFieldValue(e.detail.path,e.detail.value)),a("mantine-form:".concat(e,":set-values"),e=>ee.setValues(e.detail)),a("mantine-form:".concat(e,":set-initial-values"),e=>ee.setInitialValues(e.detail)),a("mantine-form:".concat(e,":set-errors"),e=>ee.setErrors(e.detail)),a("mantine-form:".concat(e,":set-field-error"),e=>ee.setFieldError(e.detail.path,e.detail.error)),a("mantine-form:".concat(e,":clear-field-error"),e=>ee.clearFieldError(e.detail)),a("mantine-form:".concat(e,":clear-errors"),ee.clearErrors),a("mantine-form:".concat(e,":reset"),ee.reset),a("mantine-form:".concat(e,":validate"),ee.validate),a("mantine-form:".concat(e,":validate-field"),e=>ee.validateField(e.detail)),a("mantine-form:".concat(e,":reorder-list-item"),e=>ee.reorderListItem(e.detail.path,e.detail.payload)),a("mantine-form:".concat(e,":remove-list-item"),e=>ee.removeListItem(e.detail.path,e.detail.index)),a("mantine-form:".concat(e,":insert-list-item"),e=>ee.insertListItem(e.detail.path,e.detail.item,e.detail.index)),a("mantine-form:".concat(e,":set-dirty"),e=>ee.setDirty(e.detail)),a("mantine-form:".concat(e,":set-touched"),e=>ee.setTouched(e.detail)),a("mantine-form:".concat(e,":reset-dirty"),e=>ee.resetDirty(e.detail)),a("mantine-form:".concat(e,":reset-touched"),ee.resetTouched),ee}},66948:function(e,t,r){"use strict";r.r(t),r.d(t,{useIsomorphicEffect:function(){return o}});var n=r(2265);let o="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},65179:function(e,t,r){"use strict";r.r(t),r.d(t,{useUncontrolled:function(){return o}});var n=r(2265);function o(e){let{value:t,defaultValue:r,finalValue:o,onChange:i=()=>{}}=e,[a,c]=(0,n.useState)(void 0!==r?r:o);return void 0!==t?[t,i,!0]:[a,function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];c(e),null==i||i(e,...r)},!1]}}}]);