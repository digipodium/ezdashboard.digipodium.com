(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4238],{88424:function(e,t,n){Promise.resolve().then(n.bind(n,684))},684:function(e,t,n){"use strict";n.r(t);var a=n(57437);n(2265);var l=n(49835),i=n(147),o=n(83278),r=n(11008),s=n(34738),c=n(80711),m=n(3537),h=n(41991);let u=h.Ry().shape({email:h.Z_().email("Invalid email address").required("Required"),name:h.Z_().required("Required"),subject:h.Z_().required("Required"),message:h.Z_()});t.default=()=>{let e=(0,m.TA)({initialValues:{name:"",email:"",subject:"",message:""},onSubmit:e=>{console.log(JSON.stringify(e,null,2)),fetch("http://localhost:5000/feedback/add",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.log(e)})},validationSchema:u});return(0,a.jsx)("div",{style:{width:"70%",margin:"auto",paddingTop:"6%"},children:(0,a.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,a.jsx)(l.Title,{order:2,size:"h1",style:{fontFamily:"Greycliff CF, var(--mantine-font-family)"},fw:900,ta:"center",children:"FeedBack Form"}),(0,a.jsxs)(i.SimpleGrid,{cols:{base:1,sm:2},mt:"xl",children:[(0,a.jsx)(o.TextInput,{label:"Name",placeholder:"Your name",name:"name",variant:"filled",onChange:e.handleChange,value:e.values.name}),(0,a.jsx)(o.TextInput,{label:"Email",placeholder:"Your email",name:"email",variant:"filled",onChange:e.handleChange,value:e.values.email})]}),(0,a.jsx)(o.TextInput,{label:"Subject",placeholder:"Subject",mt:"md",name:"subject",variant:"filled",onChange:e.handleChange,value:e.values.subject}),(0,a.jsx)(r.Textarea,{mt:"md",label:"Message",placeholder:"Your message",maxRows:10,minRows:5,autosize:!0,name:"message",variant:"filled",onChange:e.handleChange,value:e.values.message}),(0,a.jsx)(s.Group,{justify:"center",mt:"xl",children:(0,a.jsx)(c.Button,{type:"submit",size:"md",children:"Send message"})})]})})}},49835:function(e,t,n){"use strict";n.r(t),n.d(t,{Title:function(){return f}});var a=n(2265),l=n(27745),i=n(59608),o=n(88276),r=n(32604),s=n(74565),c=n(7238);let m=["h1","h2","h3","h4","h5","h6"];var h={root:"m-8a5d1357"};let u={order:1},d=(0,l.createVarsResolver)((e,t)=>{let{order:n,size:a,lineClamp:l,textWrap:i}=t,o=function(e,t){let n=void 0!==t?t:"h".concat(e);return m.includes(n)?{fontSize:"var(--mantine-".concat(n,"-font-size)"),fontWeight:"var(--mantine-".concat(n,"-font-weight)"),lineHeight:"var(--mantine-".concat(n,"-line-height)")}:{fontSize:(0,c.h)(n),fontWeight:"var(--mantine-h".concat(e,"-font-weight)"),lineHeight:"var(--mantine-h".concat(e,"-line-height)")}}(n,a);return{root:{"--title-fw":o.fontWeight,"--title-lh":o.lineHeight,"--title-fz":o.fontSize,"--title-line-clamp":"number"==typeof l?l.toString():void 0,"--title-text-wrap":i}}}),f=(0,s.factory)((e,t)=>{let n=(0,i.useProps)("Title",u,e),{classNames:l,className:s,style:c,styles:m,unstyled:f,order:g,vars:v,size:p,variant:b,lineClamp:j,textWrap:x,mod:y,...S}=n,T=(0,o.useStyles)({name:"Title",props:n,classes:h,className:s,style:c,classNames:l,styles:m,unstyled:f,vars:v,varsResolver:d});return[1,2,3,4,5,6].includes(g)?a.createElement(r.Box,{...T("root"),component:"h".concat(g),variant:b,ref:t,mod:[{order:g,"data-line-clamp":"number"==typeof j},y],size:p,...S}):null});f.classes=h,f.displayName="@mantine/core/Title"}},function(e){e.O(0,[6242,711,3278,4017,8970,2971,8069,1744],function(){return e(e.s=88424)}),_N_E=e.O()}]);