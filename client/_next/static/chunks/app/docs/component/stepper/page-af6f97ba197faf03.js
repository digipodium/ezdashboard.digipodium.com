(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4126],{52086:function(e,t,s){Promise.resolve().then(s.bind(s,84538))},84538:function(e,t,s){"use strict";s.r(t);var r=s(57437),i=s(49835),p=s(75562),n=s(20557);s(2265);var a=s(19536);t.default=()=>(0,r.jsxs)("div",{style:{marginLeft:70,marginRight:90},children:[(0,r.jsx)("u",{children:(0,r.jsx)(i.Title,{order:1,children:"Stepper"})}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Text,{children:"Stepper component is used to show the progress of a task."}),(0,r.jsxs)(p.Text,{children:["To use the Stepper component, you need to import it from the ez-dashboard package.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(a.dn,{text:"import  { Stepper }  from  'ez-dashboard';",language:"jsx",showLineNumbers:!1,theme:a.cL,wrapLines:!0})]}),(0,r.jsx)(i.Title,{order:2,children:"Usage"}),(0,r.jsx)("br",{}),(0,r.jsx)("u",{children:(0,r.jsx)(p.Text,{children:"Example data"})}),(0,r.jsx)(a.dn,{text:"import  { Stepper }  from  'ez-dashboard';\nconst stepsData = [\n              { title: 'Step 1', subtitle: 'Step 1 subtitle'},\n              { title: 'Step 2', subtitle: 'Step 2 subtitle'},\n              { title: 'Step 3', subtitle: 'Step 3 subtitle'}]\n<Stepper steps={stepsData} activeStep={1}  />",language:"jsx",showLineNumbers:!1,theme:a.cL,wrapLines:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Text,{children:"** Should have to pass an array in steps "}),(0,r.jsx)("br",{}),(0,r.jsx)(n.Image,{src:"/image/stepper1.png",alt:"stepper image",style:{height:"75px",width:"530px"}}),(0,r.jsx)("br",{}),(0,r.jsx)(i.Title,{order:2,children:"Props"}),(0,r.jsx)("br",{}),(0,r.jsxs)(p.Text,{children:["The Stepper component has the following props: ",(0,r.jsx)("br",{}),"* label",(0,r.jsx)("br",{}),"* subtitle ",(0,r.jsx)("br",{}),"* icon ",(0,r.jsx)("br",{})]}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Text,{children:(0,r.jsx)(a.dn,{text:"import  { Stepper }  from  'ez-dashboard';\nconst stepsData = [\n          { title: 'Step 1', subtitle: 'Step 1 subtitle', icon:<p>start</p>},\n          { title: 'Step 2', subtitle: 'Step 2 subtitle', icon:<p>mid</p>},\n          { title: 'Step 3', subtitle: 'Step 3 subtitle',icon: <p>final</p>}]\n<Stepper steps={stepsData} activeStep={1} />",language:"jsx",theme:a.cL,showLineNumbers:!1,wrapLines:!0})}),(0,r.jsx)("br",{}),(0,r.jsx)(n.Image,{src:"/image/stepper2.png",alt:"stepper image with props",style:{height:"75px",width:"530px"}})]})},20557:function(e,t,s){"use strict";s.r(t),s.d(t,{Image:function(){return m}});var r=s(2265),i=s(2544),p=s(27745),n=s(59608),a=s(88276),o=s(32604),l=s(38953),c={root:"m-9e117634"};let x={},u=(0,p.createVarsResolver)((e,t)=>{let{radius:s,fit:r}=t;return{root:{"--image-radius":void 0===s?void 0:(0,i.getRadius)(s),"--image-object-fit":r}}}),m=(0,l.polymorphicFactory)((e,t)=>{let s=(0,n.useProps)("Image",x,e),{classNames:i,className:p,style:l,styles:m,unstyled:h,vars:d,onError:b,src:j,radius:g,fit:S,fallbackSrc:f,mod:w,...v}=s,[T,L]=(0,r.useState)(!j);(0,r.useEffect)(()=>L(!j),[j]);let y=(0,a.useStyles)({name:"Image",classes:c,props:s,className:p,style:l,classNames:i,styles:m,unstyled:h,vars:d,varsResolver:u});return T&&f?r.createElement(o.Box,{component:"img",src:f,...y("root"),onError:b,mod:["fallback",w],...v}):r.createElement(o.Box,{component:"img",ref:t,...y("root"),src:j,onError:e=>{null==b||b(e),L(!0)},mod:w,...v})});m.classes=c,m.displayName="@mantine/core/Image"}},function(e){e.O(0,[6242,8646,2971,8069,1744],function(){return e(e.s=52086)}),_N_E=e.O()}]);