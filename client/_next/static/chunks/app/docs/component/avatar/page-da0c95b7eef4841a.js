(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1620],{77773:function(e,r,t){Promise.resolve().then(t.bind(t,27390))},27390:function(e,r,t){"use strict";t.r(r);var s=t(57437),a=t(49835),o=t(75562),n=t(20557);t(2265);var i=t(19536);r.default=()=>(0,s.jsxs)("div",{style:{marginLeft:70,marginRight:90},children:[(0,s.jsx)("u",{children:(0,s.jsx)(a.Title,{order:1,children:"Avatar"})}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Text,{children:"Avatar component is used to display user profile images."}),(0,s.jsxs)(o.Text,{children:["To use the Avatar component, you need to import it from the ez-dashboard package.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.dn,{text:"import  { Avatar }  from  'ez-dashboard';",language:"jsx",showLineNumbers:!1,theme:i.cL,wrapLines:!0})]}),(0,s.jsx)(a.Title,{order:2,children:"Usage"}),(0,s.jsx)("br",{}),(0,s.jsx)(i.dn,{text:"import { Avatar } from 'ez-dashboard';\n<Avatar src={'https://www.w3schools.com/howto/img_avatar.png'} size='lg' alt='avatar profile image' />",language:"jsx",theme:i.cL,showLineNumbers:!1,wrapLines:!0}),(0,s.jsx)("br",{}),(0,s.jsx)(n.Image,{src:"/image/avatar.png",alt:"avatar",style:{height:"90px",width:"90px"}}),(0,s.jsx)("br",{}),(0,s.jsx)(a.Title,{order:2,children:"Props"}),(0,s.jsx)("br",{}),(0,s.jsxs)(o.Text,{children:["The Avatar component has the following props: ",(0,s.jsx)("br",{}),"* src ",(0,s.jsx)("br",{}),"* size",(0,s.jsx)("br",{})]})]})},20557:function(e,r,t){"use strict";t.r(r),t.d(r,{Image:function(){return u}});var s=t(2265),a=t(2544),o=t(27745),n=t(59608),i=t(88276),l=t(32604),c=t(38953),m={root:"m-9e117634"};let d={},h=(0,o.createVarsResolver)((e,r)=>{let{radius:t,fit:s}=r;return{root:{"--image-radius":void 0===t?void 0:(0,a.getRadius)(t),"--image-object-fit":s}}}),u=(0,c.polymorphicFactory)((e,r)=>{let t=(0,n.useProps)("Image",d,e),{classNames:a,className:o,style:c,styles:u,unstyled:x,vars:p,onError:g,src:j,radius:b,fit:f,fallbackSrc:v,mod:w,...y}=t,[T,A]=(0,s.useState)(!j);(0,s.useEffect)(()=>A(!j),[j]);let E=(0,i.useStyles)({name:"Image",classes:m,props:t,className:o,style:c,classNames:a,styles:u,unstyled:x,vars:p,varsResolver:h});return T&&v?s.createElement(l.Box,{component:"img",src:v,...E("root"),onError:g,mod:["fallback",w],...y}):s.createElement(l.Box,{component:"img",ref:r,...E("root"),src:j,onError:e=>{null==g||g(e),A(!0)},mod:w,...y})});u.classes=m,u.displayName="@mantine/core/Image"}},function(e){e.O(0,[6242,8646,2971,8069,1744],function(){return e(e.s=77773)}),_N_E=e.O()}]);