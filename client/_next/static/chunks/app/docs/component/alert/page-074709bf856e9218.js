(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4620],{36416:function(e,t,r){Promise.resolve().then(r.bind(r,63210))},63210:function(e,t,r){"use strict";r.r(t);var s=r(57437),o=r(49835),n=r(75562),i=r(20557);r(2265);var a=r(19536);t.default=()=>(0,s.jsxs)("div",{style:{marginLeft:70,marginRight:90},children:[(0,s.jsx)("div",{children:(0,s.jsx)("u",{children:(0,s.jsx)(o.Title,{order:1,children:"Alert"})})}),(0,s.jsx)("br",{}),(0,s.jsx)(n.Text,{children:"Alert component is used to display important messages to users. It can be used to show success, warning, error and information messages."}),(0,s.jsxs)(n.Text,{children:["To use the Alert component, you need to import it from the ez-dashboard package.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(a.dn,{text:"import  { Alert }  from  'ez-dashboard';",language:"jsx",theme:a.cL,showLineNumbers:!1,wrapLines:!0})]}),(0,s.jsx)(o.Title,{order:2,children:"Usage"}),(0,s.jsx)("br",{}),(0,s.jsx)(a.dn,{text:"import { Alert } from 'ez-dashboard';\n<Alert title={'Alert'} description={'Alert message'}/>",language:"jsx",theme:a.cL,showLineNumbers:!1,wrapLines:!0}),(0,s.jsx)("br",{}),(0,s.jsx)(i.Image,{src:"/image/alert2.png",alt:"alert box",style:{height:"120px",width:"300px"}}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Title,{order:2,children:"Props"}),(0,s.jsx)("br",{}),(0,s.jsxs)(n.Text,{children:["The Alert component has the following props: ",(0,s.jsx)("br",{}),"* title ",(0,s.jsx)("br",{}),"* description"]}),(0,s.jsx)("br",{}),(0,s.jsx)(a.dn,{text:"<Alert title={'Alert'} description={'Alert message'}/>",language:"jsx",theme:a.cL,showLineNumbers:!1,wrapLines:!0}),(0,s.jsx)("br",{}),(0,s.jsx)(i.Image,{src:"/image/alert2.png",alt:"alert box img with props",style:{height:"120px",width:"300px"}})]})},20557:function(e,t,r){"use strict";r.r(t),r.d(t,{Image:function(){return h}});var s=r(2265),o=r(2544),n=r(27745),i=r(59608),a=r(88276),l=r(32604),c=r(38953),m={root:"m-9e117634"};let d={},x=(0,n.createVarsResolver)((e,t)=>{let{radius:r,fit:s}=t;return{root:{"--image-radius":void 0===r?void 0:(0,o.getRadius)(r),"--image-object-fit":s}}}),h=(0,c.polymorphicFactory)((e,t)=>{let r=(0,i.useProps)("Image",d,e),{classNames:o,className:n,style:c,styles:h,unstyled:u,vars:g,onError:p,src:j,radius:b,fit:f,fallbackSrc:w,mod:A,...L}=r,[v,y]=(0,s.useState)(!j);(0,s.useEffect)(()=>y(!j),[j]);let T=(0,a.useStyles)({name:"Image",classes:m,props:r,className:n,style:c,classNames:o,styles:h,unstyled:u,vars:g,varsResolver:x});return v&&w?s.createElement(l.Box,{component:"img",src:w,...T("root"),onError:p,mod:["fallback",A],...L}):s.createElement(l.Box,{component:"img",ref:t,...T("root"),src:j,onError:e=>{null==p||p(e),y(!0)},mod:A,...L})});h.classes=m,h.displayName="@mantine/core/Image"}},function(e){e.O(0,[6242,8646,2971,8069,1744],function(){return e(e.s=36416)}),_N_E=e.O()}]);