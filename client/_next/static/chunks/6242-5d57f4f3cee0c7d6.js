"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6242],{32604:function(e,t,n){n.r(t),n.d(t,{Box:function(){return y}});var r=n(2265),o=n(75504),a=n(97945),i=n(76766),c=n(40784),l=n(54099);function s(e){return e.startsWith("data-")?e:"data-".concat(e)}function u(e,t){return Array.isArray(e)?[...e].reduce((e,n)=>({...e,...u(n,t)}),{}):"function"==typeof e?e(t):null==e?{}:e}var f=n(8730),d=n(90188),p=n(81187),h=n(11730);let m=(0,r.forwardRef)((e,t)=>{let{component:n,style:a,__vars:m,className:y,variant:g,mod:v,size:b,hiddenFrom:S,visibleFrom:C,lightHidden:k,darkHidden:$,renderRoot:w,...x}=e,T=(0,l.useMantineTheme)(),{styleProps:N,rest:M}=(0,f.extractStyleProps)(x),A=(0,h.useRandomClassName)(),z=(0,p.parseStyleProps)({styleProps:N,theme:T,data:d.STYlE_PROPS_DATA}),P={ref:t,style:function(e){let{theme:t,style:n,vars:r,styleProps:o}=e,a=u(n,t),i=u(r,t);return{...a,...i,...o}}({theme:T,style:a,vars:m,styleProps:z.inlineStyles}),className:(0,o.Z)(y,{[A]:z.hasResponsiveStyles,"mantine-light-hidden":k,"mantine-dark-hidden":$,["mantine-hidden-from-".concat(S)]:S,["mantine-visible-from-".concat(C)]:C}),"data-variant":g,"data-size":(0,c.isNumberLike)(b)?void 0:b||void 0,...function e(t){return t?"string"==typeof t?{[s(t)]:!0}:Array.isArray(t)?[...t].reduce((t,n)=>({...t,...e(n)}),{}):Object.keys(t).reduce((e,n)=>{let r=t[n];return void 0===r||""===r||!1===r||null===r||(e[s(n)]=t[n]),e},{}):null}(v),...M};return r.createElement(r.Fragment,null,z.hasResponsiveStyles&&r.createElement(i.InlineStyles,{selector:".".concat(A),styles:z.styles,media:z.media}),"function"==typeof w?w(P):r.createElement(n||"div",{...P}))});m.displayName="@mantine/core/Box";let y=(0,a.F)(m)},8730:function(e,t,n){n.r(t),n.d(t,{extractStyleProps:function(){return o}});var r=n(87474);function o(e){let{m:t,mx:n,my:o,mt:a,mb:i,ml:c,mr:l,me:s,ms:u,p:f,px:d,py:p,pt:h,pb:m,pl:y,pr:g,pe:v,ps:b,bg:S,c:C,opacity:k,ff:$,fz:w,fw:x,lts:T,ta:N,lh:M,fs:A,tt:z,td:P,w:R,miw:E,maw:F,h:I,mih:L,mah:j,bgsz:W,bgp:H,bgr:_,bga:O,pos:G,top:B,left:Z,bottom:V,right:D,inset:U,display:K,flex:Y,hiddenFrom:q,visibleFrom:J,lightHidden:Q,darkHidden:X,...ee}=e;return{styleProps:(0,r.filterProps)({m:t,mx:n,my:o,mt:a,mb:i,ml:c,mr:l,me:s,ms:u,p:f,px:d,py:p,pt:h,pb:m,pl:y,pr:g,pe:v,ps:b,bg:S,c:C,opacity:k,ff:$,fz:w,fw:x,lts:T,ta:N,lh:M,fs:A,tt:z,td:P,w:R,miw:E,maw:F,h:I,mih:L,mah:j,bgsz:W,bgp:H,bgr:_,bga:O,pos:G,top:B,left:Z,bottom:V,right:D,inset:U,display:K,flex:Y,hiddenFrom:q,visibleFrom:J,lightHidden:Q,darkHidden:X}),rest:ee}}n(2265)},81187:function(e,t,n){n.r(t),n.d(t,{parseStyleProps:function(){return d}});var r=n(76361);n(2265);var o=n(5007);function a(e,t){let n=(0,o.parseThemeColor)({color:e,theme:t});return"dimmed"===n.color?"var(--mantine-color-dimmed)":"bright"===n.color?"var(--mantine-color-bright)":n.variable?"var(".concat(n.variable,")"):n.color}let i={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};var c=n(7238);let l=["h1","h2","h3","h4","h5","h6"],s=["h1","h2","h3","h4","h5","h6"],u={color:a,textColor:function(e,t){let n=(0,o.parseThemeColor)({color:e,theme:t});return n.isThemeColor&&void 0===n.shade?"var(--mantine-color-".concat(n.color,"-text)"):a(e,t)},fontSize:function(e,t){return"string"==typeof e&&e in t.fontSizes?"var(--mantine-font-size-".concat(e,")"):"string"==typeof e&&l.includes(e)?"var(--mantine-".concat(e,"-font-size)"):"number"==typeof e||"string"==typeof e?(0,c.h)(e):e},spacing:function(e,t){if("number"==typeof e)return(0,c.h)(e);if("string"==typeof e){let n=e.replace("-","");if(!(n in t.spacing))return(0,c.h)(e);let r="--mantine-spacing-".concat(n);return e.startsWith("-")?"calc(var(".concat(r,") * -1)"):"var(".concat(r,")")}return e},identity:function(e){return e},size:function(e){return"number"==typeof e?(0,c.h)(e):e},lineHeight:function(e,t){return"string"==typeof e&&e in t.lineHeights?"var(--mantine-line-height-".concat(e,")"):"string"==typeof e&&s.includes(e)?"var(--mantine-".concat(e,"-line-height)"):e},fontFamily:function(e){return"string"==typeof e&&e in i?i[e]:e}};function f(e){return e.replace("(min-width: ","").replace("em)","")}function d(e){let{styleProps:t,data:n,theme:o}=e;return function(e){let{media:t,...n}=e,r=Object.keys(t).sort((e,t)=>Number(f(e))-Number(f(t))).map(e=>({query:e,styles:t[e]}));return{...n,media:r}}((0,r.keys)(t).reduce((e,a)=>{var i,c;if("hiddenFrom"===a||"visibleFrom"===a)return e;let l=n[a],s=Array.isArray(l.property)?l.property:[l.property],f="object"==typeof(c=t[a])&&null!==c?"base"in c?c.base:void 0:c;if(!function(e){if("object"!=typeof e||null===e)return!1;let t=Object.keys(e);return 1!==t.length||"base"!==t[0]}(t[a]))return s.forEach(t=>{e.inlineStyles[t]=u[l.type](f,o)}),e;e.hasResponsiveStyles=!0;let d="object"==typeof(i=t[a])&&null!==i?(0,r.keys)(i).filter(e=>"base"!==e):[];return s.forEach(n=>{f&&(e.styles[n]=u[l.type](f,o)),d.forEach(r=>{var i;let c="(min-width: ".concat(o.breakpoints[r],")");e.media[c]={...e.media[c],[n]:u[l.type]("object"==typeof(i=t[a])&&null!==i&&r in i?i[r]:i,o)}})}),e},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}},90188:function(e,t,n){n.r(t),n.d(t,{STYlE_PROPS_DATA:function(){return r}});let r={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}}},11730:function(e,t,n){n.r(t),n.d(t,{useRandomClassName:function(){return o}});var r=n(2265);function o(){let e=(0,r.useId)().replace(/:/g,"");return"__m__-".concat(e)}},76766:function(e,t,n){n.r(t),n.d(t,{InlineStyles:function(){return i}});var r=n(2265),o=n(592),a=n(2343);function i(e){let{selector:t,styles:n,media:i}=e,c=(0,o.useMantineStyleNonce)();return r.createElement("style",{"data-mantine-styles":"inline",nonce:null==c?void 0:c(),dangerouslySetInnerHTML:{__html:(0,a.stylesToString)({selector:t,styles:n,media:i})}})}},2343:function(e,t,n){n.r(t),n.d(t,{stylesToString:function(){return i}});var r=n(76361),o=n(39511);function a(e){return(0,r.keys)(e).reduce((t,n)=>void 0!==e[n]?"".concat(t).concat((0,o.camelToKebabCase)(n),":").concat(e[n],";"):t,"").trim()}function i(e){let{selector:t,styles:n,media:r}=e,o=n?a(n):"",i=Array.isArray(r)?r.map(e=>"@media".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[];return"".concat(o?"".concat(t,"{").concat(o,"}"):"").concat(i.join("")).trim()}n(2265)},592:function(e,t,n){n.r(t),n.d(t,{MantineContext:function(){return o},useMantineClassNamesPrefix:function(){return c},useMantineContext:function(){return a},useMantineCssVariablesResolver:function(){return i},useMantineIsHeadless:function(){return u},useMantineStyleNonce:function(){return l},useMantineWithStaticClasses:function(){return s}});var r=n(2265);let o=(0,r.createContext)(null);function a(){let e=(0,r.useContext)(o);if(!e)throw Error("[@mantine/core] MantineProvider was not found in tree");return e}function i(){return a().cssVariablesResolver}function c(){return a().classNamesPrefix}function l(){return a().getStyleNonce}function s(){return a().withStaticClasses}function u(){return a().headless}},54099:function(e,t,n){n.r(t),n.d(t,{MantineThemeContext:function(){return l},MantineThemeProvider:function(){return f},useMantineTheme:function(){return u},useSafeMantineTheme:function(){return s}});var r=n(2265),o=n(76912),a=n(11641);function i(e){return!(e<0)&&!(e>9)&&parseInt(e.toString(),10)===e}function c(e){if(!(e.primaryColor in e.colors))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");if("object"==typeof e.primaryShade&&(!i(e.primaryShade.dark)||!i(e.primaryShade.light))||"number"==typeof e.primaryShade&&!i(e.primaryShade))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")}let l=(0,r.createContext)(null),s=()=>(0,r.useContext)(l)||o.t;function u(){let e=(0,r.useContext)(l);if(!e)throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function f(e){let{theme:t,children:n,inherit:i=!0}=e,u=s(),f=(0,r.useMemo)(()=>(function(e,t){if(!t)return c(e),e;let n=(0,a.R)(e,t);return t.fontFamily&&!t.headings?.fontFamily&&(n.headings.fontFamily=t.fontFamily),c(n),n})(i?u:o.t,t),[t,u,i]);return r.createElement(l.Provider,{value:f},n)}f.displayName="@mantine/core/MantineThemeProvider"},18081:function(e,t,n){n.r(t),n.d(t,{defaultVariantColorsResolver:function(){return s}});var r=n(7238);n(2265);var o=n(30112);function a(e,t){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${100*t}%)`;let{r:n,g:r,b:a,a:i}=(0,o.c)(e),c=1-t,l=e=>Math.round(e*c);return`rgba(${l(n)}, ${l(r)}, ${l(a)}, ${i})`}var i=n(25479),c=n(5007),l=n(31870);let s=e=>{let{color:t,theme:n,variant:o,gradient:s,autoContrast:u}=e,f=(0,c.parseThemeColor)({color:t,theme:n}),d="boolean"==typeof u?u:n.autoContrast;if("filled"===o){let e=d&&f.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return f.isThemeColor?void 0===f.shade?{background:"var(--mantine-color-".concat(t,"-filled)"),hover:"var(--mantine-color-".concat(t,"-filled-hover)"),color:e,border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),hover:"var(--mantine-color-".concat(f.color,"-").concat(9===f.shade?8:f.shade+1,")"),color:e,border:"".concat((0,r.h)(1)," solid transparent")}:{background:t,hover:a(t,.1),color:e,border:"".concat((0,r.h)(1)," solid transparent")}}if("light"===o){if(f.isThemeColor){if(void 0===f.shade)return{background:"var(--mantine-color-".concat(t,"-light)"),hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")};let e=n.colors[f.color][f.shade];return{background:(0,l.m)(e,.1),hover:(0,l.m)(e,.12),color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}}return{background:(0,l.m)(t,.1),hover:(0,l.m)(t,.12),color:t,border:"".concat((0,r.h)(1)," solid transparent")}}if("outline"===o)return f.isThemeColor?void 0===f.shade?{background:"transparent",hover:"var(--mantine-color-".concat(t,"-outline-hover)"),color:"var(--mantine-color-".concat(t,"-outline)"),border:"".concat((0,r.h)(1)," solid var(--mantine-color-").concat(t,"-outline)")}:{background:"transparent",hover:(0,l.m)(n.colors[f.color][f.shade],.05),color:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),border:"".concat((0,r.h)(1)," solid var(--mantine-color-").concat(f.color,"-").concat(f.shade,")")}:{background:"transparent",hover:(0,l.m)(t,.05),color:t,border:"".concat((0,r.h)(1)," solid ").concat(t)};if("subtle"===o){if(f.isThemeColor){if(void 0===f.shade)return{background:"transparent",hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")};let e=n.colors[f.color][f.shade];return{background:"transparent",hover:(0,l.m)(e,.12),color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}}return{background:"transparent",hover:(0,l.m)(t,.12),color:t,border:"".concat((0,r.h)(1)," solid transparent")}}return"transparent"===o?f.isThemeColor?void 0===f.shade?{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:t,border:"".concat((0,r.h)(1)," solid transparent")}:"white"===o?f.isThemeColor?void 0===f.shade?{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:"var(--mantine-color-".concat(t,"-filled)"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:t,border:"".concat((0,r.h)(1)," solid transparent")}:"gradient"===o?{background:(0,i.getGradient)(s,n),hover:(0,i.getGradient)(s,n),color:"var(--mantine-color-white)",border:"none"}:"default"===o?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:"".concat((0,r.h)(1)," solid var(--mantine-color-default-border)")}:{}}},25479:function(e,t,n){n.r(t),n.d(t,{getGradient:function(){return o}});var r=n(78291);function o(e,t){let n={from:(null==e?void 0:e.from)||t.defaultGradient.from,to:(null==e?void 0:e.to)||t.defaultGradient.to,deg:(null==e?void 0:e.deg)||t.defaultGradient.deg||0},o=(0,r.getThemeColor)(n.from,t),a=(0,r.getThemeColor)(n.to,t);return"linear-gradient(".concat(n.deg,"deg, ").concat(o," 0%, ").concat(a," 100%)")}},15203:function(e,t,n){function r(e,t){return"number"==typeof e.primaryShade?e.primaryShade:"dark"===t?e.primaryShade.dark:e.primaryShade.light}n.r(t),n.d(t,{getPrimaryShade:function(){return r}})},78291:function(e,t,n){n.r(t),n.d(t,{getThemeColor:function(){return o}});var r=n(5007);function o(e,t){let n=(0,r.parseThemeColor)({color:e||t.primaryColor,theme:t});return n.variable?"var(".concat(n.variable,")"):e}},65348:function(e,t,n){n.r(t),n.d(t,{isLightColor:function(){return i},luminance:function(){return a}});var r=n(30112);function o(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function a(e){if(e.startsWith("oklch("))return(function(e){let t=e.match(/oklch\((.*?)%\s/);return t?parseFloat(t[1]):null}(e)||0)/100;let{r:t,g:n,b:a}=(0,r.c)(e);return .2126*o(t/255)+.7152*o(n/255)+.0722*o(a/255)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.179;return!e.startsWith("var(")&&a(e)>t}},5007:function(e,t,n){n.r(t),n.d(t,{parseThemeColor:function(){return a}});var r=n(15203),o=n(65348);function a(e){let{color:t,theme:n,colorScheme:a}=e;if("string"!=typeof t)throw Error("[@mantine/core] Failed to parse color. Expected color to be a string, instead got ".concat(typeof t));if("bright"===t)return{color:t,value:"dark"===a?n.white:n.black,shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("dark"===a?n.white:n.black,n.luminanceThreshold),variable:"--mantine-color-bright"};if("dimmed"===t)return{color:t,value:"dark"===a?n.colors.dark[2]:n.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("dark"===a?n.colors.dark[2]:n.colors.gray[6],n.luminanceThreshold),variable:"--mantine-color-dimmed"};if("white"===t||"black"===t)return{color:t,value:"white"===t?n.white:n.black,shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("white"===t?n.white:n.black,n.luminanceThreshold),variable:"--mantine-color-".concat(t)};let[i,c]=t.split("."),l=c?Number(c):void 0,s=i in n.colors;if(s){let e=void 0!==l?n.colors[i][l]:n.colors[i][(0,r.getPrimaryShade)(n,a||"light")];return{color:i,value:e,shade:l,isThemeColor:s,isLight:(0,o.isLightColor)(e,n.luminanceThreshold),variable:c?"--mantine-color-".concat(i,"-").concat(l):"--mantine-color-".concat(i,"-filled")}}return{color:t,value:t,isThemeColor:s,isLight:(0,o.isLightColor)(t,n.luminanceThreshold),shade:l,variable:void 0}}},31870:function(e,t,n){n.d(t,{F:function(){return a},m:function(){return o}});var r=n(30112);function o(e,t){if("string"!=typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var("))return`color-mix(in srgb, ${e}, transparent ${(1-t)*100}%)`;if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${t})`):e.replace(")",` / ${t})`);let{r:n,g:o,b:a}=(0,r.c)(e);return`rgba(${n}, ${o}, ${a}, ${t})`}let a=o},30112:function(e,t,n){n.d(t,{c:function(){return r}});function r(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){let e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}if(8===t.length){let e=parseInt(t.slice(6,8),16)/255;return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:e}}let n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:255&n,a:1}}(e):e.startsWith("rgb")?function(e){let[t,n,r,o]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:t,g:n,b:r,a:o||1}}(e):e.startsWith("hsl")?function(e){let t,n,r;let o=e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!o)return{r:0,g:0,b:0,a:1};let a=parseInt(o[1],10),i=parseInt(o[2],10)/100,c=parseInt(o[3],10)/100,l=o[5]?parseFloat(o[5]):void 0,s=(1-Math.abs(2*c-1))*i,u=a/60,f=s*(1-Math.abs(u%2-1)),d=c-s/2;return u>=0&&u<1?(t=s,n=f,r=0):u>=1&&u<2?(t=f,n=s,r=0):u>=2&&u<3?(t=0,n=s,r=f):u>=3&&u<4?(t=0,n=f,r=s):u>=4&&u<5?(t=f,n=0,r=s):(t=s,n=0,r=f),{r:Math.round((t+d)*255),g:Math.round((n+d)*255),b:Math.round((r+d)*255),a:l||1}}(e):{r:0,g:0,b:0,a:1}}},76912:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(7238);n(2265);var o=n(18081);let a="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",i={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:{dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:o.defaultVariantColorsResolver,autoContrast:!1,luminanceThreshold:.3,fontFamily:a,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:a,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:(0,r.h)(34),lineHeight:"1.3"},h2:{fontSize:(0,r.h)(26),lineHeight:"1.35"},h3:{fontSize:(0,r.h)(22),lineHeight:"1.4"},h4:{fontSize:(0,r.h)(18),lineHeight:"1.45"},h5:{fontSize:(0,r.h)(16),lineHeight:"1.5"},h6:{fontSize:(0,r.h)(14),lineHeight:"1.5"}}},fontSizes:{xs:(0,r.h)(12),sm:(0,r.h)(14),md:(0,r.h)(16),lg:(0,r.h)(18),xl:(0,r.h)(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:(0,r.h)(2),sm:(0,r.h)(4),md:(0,r.h)(8),lg:(0,r.h)(16),xl:(0,r.h)(32)},spacing:{xs:(0,r.h)(10),sm:(0,r.h)(12),md:(0,r.h)(16),lg:(0,r.h)(20),xl:(0,r.h)(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,r.h)(1)} ${(0,r.h)(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(10)} ${(0,r.h)(15)} ${(0,r.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(7)} ${(0,r.h)(7)} ${(0,r.h)(-5)}`,md:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(20)} ${(0,r.h)(25)} ${(0,r.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(10)} ${(0,r.h)(10)} ${(0,r.h)(-5)}`,lg:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(28)} ${(0,r.h)(23)} ${(0,r.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(12)} ${(0,r.h)(12)} ${(0,r.h)(-7)}`,xl:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(36)} ${(0,r.h)(28)} ${(0,r.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(17)} ${(0,r.h)(17)} ${(0,r.h)(-7)}`},other:{},components:{}}},59608:function(e,t,n){n.r(t),n.d(t,{useProps:function(){return a}});var r=n(87474);n(2265);var o=n(54099);function a(e,t,n){var a;let i=(0,o.useMantineTheme)(),c=null===(a=i.components[e])||void 0===a?void 0:a.defaultProps,l="function"==typeof c?c(i):c;return{...t,...l,...(0,r.filterProps)(n)}}},97945:function(e,t,n){n.d(t,{F:function(){return r}});function r(e){return e}},74565:function(e,t,n){n.r(t),n.d(t,{factory:function(){return a},identity:function(){return o}});var r=n(2265);function o(e){return e}function a(e){let t=(0,r.forwardRef)(e);return t.extend=o,t}},38953:function(e,t,n){n.r(t),n.d(t,{polymorphicFactory:function(){return a}});var r=n(2265),o=n(74565);function a(e){let t=(0,r.forwardRef)(e);return t.extend=o.identity,t}},27745:function(e,t,n){function r(e){return e}n.r(t),n.d(t,{createVarsResolver:function(){return r}})},92114:function(e,t,n){n.r(t),n.d(t,{FOCUS_CLASS_NAMES:function(){return o},getGlobalClassNames:function(){return a}});var r=n(75504);let o={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function a(e){let{theme:t,options:n,unstyled:a}=e;return(0,r.Z)((null==n?void 0:n.focusable)&&!a&&(t.focusClassName||o[t.focusRing]),(null==n?void 0:n.active)&&!a&&t.activeClassName)}},20571:function(e,t,n){n.r(t),n.d(t,{resolveClassNames:function(){return a}});var r=n(75504);let o={};function a(e){let{theme:t,classNames:n,props:a,stylesCtx:i}=e;return function(e){let t={};return e.forEach(e=>{Object.entries(e).forEach(e=>{let[n,o]=e;t[n]?t[n]=(0,r.Z)(t[n],o):t[n]=o})}),t}((Array.isArray(n)?n:[n]).map(e=>"function"==typeof e?e(t,a,i):e||o))}},50745:function(e,t,n){function r(e){let{theme:t,styles:n,props:r,stylesCtx:o}=e;return(Array.isArray(n)?n:[n]).reduce((e,n)=>"function"==typeof n?{...e,...n(t,r,o)}:{...e,...n},{})}n.r(t),n.d(t,{resolveStyles:function(){return r}})},88276:function(e,t,n){n.r(t),n.d(t,{useStyles:function(){return f}}),n(2265);var r=n(592),o=n(54099),a=n(75504),i=n(92114),c=n(20571),l=n(50745);function s(e){let{style:t,theme:n}=e;return Array.isArray(t)?[...t].reduce((e,t)=>({...e,...s({style:t,theme:n})}),{}):"function"==typeof t?t(n):null==t?{}:t}var u=n(87474);function f(e){let{name:t,classes:n,props:f,stylesCtx:d,className:p,style:h,rootSelector:m="root",unstyled:y,classNames:g,styles:v,vars:b,varsResolver:S}=e,C=(0,o.useMantineTheme)(),k=(0,r.useMantineClassNamesPrefix)(),$=(0,r.useMantineWithStaticClasses)(),w=(0,r.useMantineIsHeadless)(),x=(Array.isArray(t)?t:[t]).filter(e=>e);return(e,t)=>({className:function(e){let{theme:t,options:n,themeName:r,selector:o,classNamesPrefix:l,classNames:s,classes:u,unstyled:f,className:d,rootSelector:p,props:h,stylesCtx:m,withStaticClasses:y,headless:g}=e;return(0,a.Z)((0,i.getGlobalClassNames)({theme:t,options:n,unstyled:f||g}),function(e){let{themeName:t,theme:n,selector:r,props:o,stylesCtx:a}=e;return t.map(e=>{var t,i;return null===(t=(0,c.resolveClassNames)({theme:n,classNames:null===(i=n.components[e])||void 0===i?void 0:i.classNames,props:o,stylesCtx:a}))||void 0===t?void 0:t[r]})}({theme:t,themeName:r,selector:o,props:h,stylesCtx:m}),function(e){let{options:t,classes:n,selector:r,unstyled:o}=e;return(null==t?void 0:t.variant)&&!o?n["".concat(r,"--").concat(t.variant)]:void 0}({options:n,classes:u,selector:o,unstyled:f}),function(e){let{selector:t,stylesCtx:n,theme:r,classNames:o,props:a}=e;return(0,c.resolveClassNames)({theme:r,classNames:o,props:a,stylesCtx:n})[t]}({selector:o,stylesCtx:m,theme:t,classNames:s,props:h}),function(e){let{selector:t,stylesCtx:n,options:r,props:o,theme:a}=e;return(0,c.resolveClassNames)({theme:a,classNames:null==r?void 0:r.classNames,props:(null==r?void 0:r.props)||o,stylesCtx:n})[t]}({selector:o,stylesCtx:m,options:n,props:h,theme:t}),function(e){let{rootSelector:t,selector:n,className:r}=e;return t===n?r:void 0}({rootSelector:p,selector:o,className:d}),function(e){let{selector:t,classes:n,unstyled:r}=e;return r?void 0:n[t]}({selector:o,classes:u,unstyled:f||g}),y&&!g&&function(e){let{themeName:t,classNamesPrefix:n,selector:r,withStaticClass:o}=e;return!1===o?[]:t.map(e=>"".concat(n,"-").concat(e,"-").concat(r))}({themeName:r,classNamesPrefix:l,selector:o,withStaticClass:null==n?void 0:n.withStaticClass}),null==n?void 0:n.className)}({theme:C,options:t,themeName:x,selector:e,classNamesPrefix:k,classNames:g,classes:n,unstyled:y,className:p,rootSelector:m,props:f,stylesCtx:d,withStaticClasses:$,headless:w}),style:function(e){let{theme:t,themeName:n,selector:r,options:o,props:a,stylesCtx:i,rootSelector:c,styles:f,style:d,vars:p,varsResolver:h,headless:m}=e;return{...function(e){let{theme:t,themeName:n,props:r,stylesCtx:o,selector:a}=e;return n.map(e=>{var n;return(0,l.resolveStyles)({theme:t,styles:null===(n=t.components[e])||void 0===n?void 0:n.styles,props:r,stylesCtx:o})[a]}).reduce((e,t)=>({...e,...t}),{})}({theme:t,themeName:n,props:a,stylesCtx:i,selector:r}),...(0,l.resolveStyles)({theme:t,styles:f,props:a,stylesCtx:i})[r],...(0,l.resolveStyles)({theme:t,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||a,stylesCtx:i})[r],...function(e){var t;let{vars:n,varsResolver:r,theme:o,props:a,stylesCtx:i,selector:c,themeName:l,headless:s}=e;return null===(t=[s?{}:null==r?void 0:r(o,a,i),...l.map(e=>{var t,n,r;return null===(r=o.components)||void 0===r?void 0:null===(n=r[e])||void 0===n?void 0:null===(t=n.vars)||void 0===t?void 0:t.call(n,o,a,i)}),null==n?void 0:n(o,a,i)].reduce((e,t)=>(t&&Object.keys(t).forEach(n=>{e[n]={...e[n],...(0,u.filterProps)(t[n])}}),e),{}))||void 0===t?void 0:t[c]}({theme:t,props:a,stylesCtx:i,vars:p,varsResolver:h,selector:r,themeName:n,headless:m}),...c===r?s({style:d,theme:t}):null,...s({style:null==o?void 0:o.style,theme:t})}}({theme:C,themeName:x,selector:e,options:t,props:f,stylesCtx:d,rootSelector:m,styles:v,style:h,vars:b,varsResolver:S,headless:w})})}},39511:function(e,t,n){function r(e){return e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase()))}n.r(t),n.d(t,{camelToKebabCase:function(){return r}})},11641:function(e,t,n){function r(e){return e&&"object"==typeof e&&!Array.isArray(e)}n.d(t,{R:function(){return function e(t,n){let o={...t};return r(t)&&r(n)&&Object.keys(n).forEach(a=>{r(n[a])&&a in t?o[a]=e(o[a],n[a]):o[a]=n[a]}),o}}})},87474:function(e,t,n){function r(e){return Object.keys(e).reduce((t,n)=>(void 0!==e[n]&&(t[n]=e[n]),t),{})}n.r(t),n.d(t,{filterProps:function(){return r}})},2544:function(e,t,n){n.r(t),n.d(t,{getFontSize:function(){return l},getLineHeight:function(){return s},getRadius:function(){return c},getShadow:function(){return u},getSize:function(){return a},getSpacing:function(){return i}});var r=n(40784),o=n(7238);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==e)return(0,r.isNumberLike)(e)?n?(0,o.h)(e):e:"var(--".concat(t,"-").concat(e,")")}function i(e){return a(e,"mantine-spacing")}function c(e){return void 0===e?"var(--mantine-radius-default)":a(e,"mantine-radius")}function l(e){return a(e,"mantine-font-size")}function s(e){return a(e,"mantine-line-height",!1)}function u(e){if(e)return a(e,"mantine-shadow",!1)}},40784:function(e,t,n){function r(e){return"number"==typeof e||"string"==typeof e&&(!!(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&""!==e.trim())||/[0-9]/.test(e.trim().replace("-","")[0]))}n.r(t),n.d(t,{isNumberLike:function(){return r}})},76361:function(e,t,n){function r(e){return Object.keys(e)}n.r(t),n.d(t,{keys:function(){return r}})},7238:function(e,t,n){function r(e){return`calc(${e} * var(--mantine-scale))`}function o(e,{shouldScale:t=!1}={}){return function n(o){if(0===o||"0"===o)return`0${e}`;if("number"==typeof o){let n=`${o/16}${e}`;return t?r(n):n}if("string"==typeof o){if(o.startsWith("calc(")||o.startsWith("var(")||o.startsWith("clamp("))return o;if(o.includes(" "))return o.split(" ").map(e=>n(e)).join(" ");if(o.includes(e))return t?r(o):o;let a=o.replace("px","");if(!Number.isNaN(Number(a))){let n=`${Number(a)/16}${e}`;return t?r(n):n}}return o}}n.d(t,{em:function(){return i},h:function(){return a}});let a=o("rem",{shouldScale:!0}),i=o("em")},75504:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(n=0;n<a;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);