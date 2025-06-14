import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{E as l}from"./password-input-DUmsXx4T.js";import{r as I}from"./iframe-BGoeygs4.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,S={title:"Components/EmailInput",component:l,args:{onChange:E()}},e={render:({value:n,placeholder:t,isIcon:o})=>{const[r,s]=I.useState(n),c=v=>{s(v.target.value)};return h.jsx(l,{onChange:c,value:r,name:"email",placeholder:t,isIcon:o})},args:{value:"bob@example.com",placeholder:"Логин",isIcon:!0}},a={render:({value:n,isIcon:t})=>{const[o,r]=I.useState(n),s=c=>{r(c.target.value)};return h.jsx(l,{onChange:s,value:o,name:"email",isIcon:t})},args:{value:"bob@example.com",isIcon:!1}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    value,
    placeholder,
    isIcon
  }) => {
    const [data, setData] = useState(value);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    };
    return <EmailInput onChange={onChange} value={data} name={'email'} placeholder={placeholder} isIcon={isIcon} />;
  },
  args: {
    value: 'bob@example.com',
    placeholder: 'Логин',
    isIcon: true
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,d,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    value,
    isIcon
  }) => {
    const [data, setData] = useState(value);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    };
    return <EmailInput onChange={onChange} value={data} name={'email'} isIcon={isIcon} />;
  },
  args: {
    value: 'bob@example.com',
    isIcon: false
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const _=["WithIcon","WithoutIcon"];export{e as WithIcon,a as WithoutIcon,_ as __namedExportsOrder,S as default};
