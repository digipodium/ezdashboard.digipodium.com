(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{83922:function(e,r,t){Promise.resolve().then(t.bind(t,29856))},29856:function(e,r,t){"use strict";t.r(r);var s=t(57437),a=t(49835),o=t(75562),n=t(20557);t(2265);var i=t(19536);r.default=()=>(0,s.jsxs)("div",{style:{marginLeft:70,marginRight:90},children:[(0,s.jsx)("u",{children:(0,s.jsx)(a.Title,{order:1,children:"StatCard"})}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Text,{children:"StatCard component is used to display important statistics information to users. It can be used to show success, warning, error and information messages."}),(0,s.jsxs)(o.Text,{children:["To use the StatCard component, you need to import it from the ez-dashboard package.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.dn,{text:"import  { StatCard }  from  'ez-dashboard';",language:"jsx",showLineNumbers:!1,theme:i.cL,wrapLines:!0})]}),(0,s.jsx)(a.Title,{order:2,children:"Usage"}),(0,s.jsx)("br",{}),(0,s.jsx)(i.dn,{text:"import { StatCard } from 'ez-dashboard';\n<StatCard  value=\"100\" description={'card description'}  label={'name'} color='primary'/>",language:"jsx",theme:i.cL,showLineNumbers:!1,wrapLines:!0}),(0,s.jsx)("br",{}),(0,s.jsx)(n.Image,{src:"/image/statcard.png",alt:"statcard image",style:{height:"190px",width:"290px"}}),(0,s.jsx)("br",{}),(0,s.jsx)(a.Title,{order:2,children:"Props"}),(0,s.jsx)("br",{}),(0,s.jsxs)(o.Text,{children:["The StatCard component has the following props: ",(0,s.jsx)("br",{}),"* value ",(0,s.jsx)("br",{}),"* description ",(0,s.jsx)("br",{}),"* label ",(0,s.jsx)("br",{}),"* color"]})]})},20557:function(e,r,t){"use strict";t.r(r),t.d(r,{Image:function(){return x}});var s=t(2265),a=t(2544),o=t(27745),n=t(59608),i=t(88276),c=t(32604),d=t(38953),l={root:"m-9e117634"};let m={},u=(0,o.createVarsResolver)((e,r)=>{let{radius:t,fit:s}=r;return{root:{"--image-radius":void 0===t?void 0:(0,a.getRadius)(t),"--image-object-fit":s}}}),x=(0,d.polymorphicFactory)((e,r)=>{let t=(0,n.useProps)("Image",m,e),{classNames:a,className:o,style:d,styles:x,unstyled:h,vars:p,onError:g,src:j,radius:b,fit:f,fallbackSrc:v,mod:w,...y}=t,[C,S]=(0,s.useState)(!j);(0,s.useEffect)(()=>S(!j),[j]);let T=(0,i.useStyles)({name:"Image",classes:l,props:t,className:o,style:d,classNames:a,styles:x,unstyled:h,vars:p,varsResolver:u});return C&&v?s.createElement(c.Box,{component:"img",src:v,...T("root"),onError:g,mod:["fallback",w],...y}):s.createElement(c.Box,{component:"img",ref:r,...T("root"),src:j,onError:e=>{null==g||g(e),S(!0)},mod:w,...y})});x.classes=l,x.displayName="@mantine/core/Image"}},function(e){e.O(0,[6242,8646,2971,8069,1744],function(){return e(e.s=83922)}),_N_E=e.O()}]);