(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{53848:function(e,t,r){Promise.resolve().then(r.bind(r,2315))},2315:function(e,t,r){"use strict";r.r(t);var s=r(57437),n=r(49835),o=r(75562),a=r(20557);r(2265);var i=r(19536);t.default=()=>(0,s.jsxs)("div",{style:{marginLeft:70,marginRight:90},children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.Title,{order:1,children:"TextInput"})}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Text,{children:"TextInput component is used to take user input."}),(0,s.jsxs)(o.Text,{children:["To use the TextInput component, you need to import it from the ez-dashboard package.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.dn,{text:"import  { TextInput }  from  'ez-dashboard';",language:"jsx",showLineNumbers:!1,theme:i.cL,wrapLines:!0})]}),(0,s.jsx)(n.Title,{order:2,children:"Usage"}),(0,s.jsx)("br",{}),(0,s.jsx)(i.dn,{text:"import  { TextInput }  from  'ez-dashboard';\n<TextInput placeholder='Enter your name' label='Name' radius='lg'/>",language:"jsx",showLineNumbers:!1,theme:i.cL,wrapLines:!0}),(0,s.jsx)("br",{}),(0,s.jsx)(a.Image,{src:"/image/textinput1.png",alt:"textinput image",style:{height:"100px",width:"230px"}}),(0,s.jsx)("br",{}),(0,s.jsx)(n.Title,{order:2,children:"Props"}),(0,s.jsx)("br",{}),(0,s.jsxs)(o.Text,{children:["The TextInput component has the following props: ",(0,s.jsx)("br",{}),"* label ",(0,s.jsx)("br",{}),"* description ",(0,s.jsx)("br",{}),"* radius ",(0,s.jsx)("br",{}),"* size ",(0,s.jsx)("br",{}),"* placeholder ",(0,s.jsx)("br",{}),"* color ",(0,s.jsx)("br",{}),"* textcolor ",(0,s.jsx)("br",{}),"* textsize ",(0,s.jsx)("br",{})]}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Text,{children:(0,s.jsx)(i.dn,{text:"import  { TextInput }  from  'ez-dashboard';\n<TextInput placeholder='Enter your name' label='Name' radius='xl' color='success' size='sm'  />",language:"jsx",theme:i.cL,showLineNumbers:!1,wrapLines:!0})}),(0,s.jsx)("br",{}),(0,s.jsx)(a.Image,{src:"/image/textinput2.png",alt:"textinput image with props",style:{height:"100px",width:"230px"}})]})},20557:function(e,t,r){"use strict";r.r(t),r.d(t,{Image:function(){return p}});var s=r(2265),n=r(2544),o=r(27745),a=r(59608),i=r(88276),x=r(32604),l=r(38953),u={root:"m-9e117634"};let c={},m=(0,o.createVarsResolver)((e,t)=>{let{radius:r,fit:s}=t;return{root:{"--image-radius":void 0===r?void 0:(0,n.getRadius)(r),"--image-object-fit":s}}}),p=(0,l.polymorphicFactory)((e,t)=>{let r=(0,a.useProps)("Image",c,e),{classNames:n,className:o,style:l,styles:p,unstyled:d,vars:h,onError:j,src:b,radius:g,fit:f,fallbackSrc:T,mod:I,...w}=r,[y,L]=(0,s.useState)(!b);(0,s.useEffect)(()=>L(!b),[b]);let E=(0,i.useStyles)({name:"Image",classes:u,props:r,className:o,style:l,classNames:n,styles:p,unstyled:d,vars:h,varsResolver:m});return y&&T?s.createElement(x.Box,{component:"img",src:T,...E("root"),onError:j,mod:["fallback",I],...w}):s.createElement(x.Box,{component:"img",ref:t,...E("root"),src:b,onError:e=>{null==j||j(e),L(!0)},mod:I,...w})});p.classes=u,p.displayName="@mantine/core/Image"}},function(e){e.O(0,[6242,8646,2971,8069,1744],function(){return e(e.s=53848)}),_N_E=e.O()}]);