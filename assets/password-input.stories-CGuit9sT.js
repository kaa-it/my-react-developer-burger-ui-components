import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{l as c}from"./preloader-B7BzVgwb.js";import{r as v}from"./iframe-C8_Lm2Ha.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,S={title:"Components/PasswordInput",component:c,args:{onChange:h()},argTypes:{icon:{options:["HideIcon","ShowIcon","EditIcon"],control:{type:"select"}}}},e={render:({value:t,icon:n})=>{const[s,o]=v.useState(t),r=w=>{o(w.target.value)};return i.jsx(c,{onChange:r,value:s,name:"password",icon:n})},args:{value:"password",icon:"ShowIcon"}},a={render:({value:t})=>{const[n,s]=v.useState(t),o=r=>{s(r.target.value)};return i.jsx(c,{onChange:o,value:n,name:"password"})},args:{value:"password"}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    value,
    icon
  }) => {
    const [data, setData] = useState(value);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    };
    return <PasswordInput onChange={onChange} value={data} name={'password'} icon={icon} />;
  },
  args: {
    value: 'password',
    icon: "ShowIcon"
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    value
  }) => {
    const [data, setData] = useState(value);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    };
    return <PasswordInput onChange={onChange} value={data} name={'password'} />;
  },
  args: {
    value: 'password'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const D=["Default","Edit"];export{e as Default,a as Edit,D as __namedExportsOrder,S as default};
