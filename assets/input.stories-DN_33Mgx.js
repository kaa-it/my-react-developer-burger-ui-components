import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-BGoeygs4.js";import{j as a}from"./password-input-DUmsXx4T.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Input",component:a,args:{onChange:x()},argTypes:{icon:{options:["CurrencyIcon","BurgerIcon","LockIcon","DragIcon","DeleteIcon","ArrowUpIcon","ArrowDownIcon","MenuIcon","CloseIcon","CheckMarkIcon","ListIcon","ProfileIcon","EditIcon","InfoIcon","ShowIcon","HideIcon","LogoutIcon","PlusIcon","RefreshIcon"],control:{type:"select"}}}},e={render:({value:s,type:l,placeholder:u,error:i,errorText:p,icon:I,size:d})=>{const[f,m]=o.useState(s),n=o.useRef(null),C=()=>{setTimeout(()=>n.current.focus(),0),alert("Icon Click Callback")};return h.jsx(a,{type:l,placeholder:u,onChange:g=>m(g.target.value),icon:I,value:f,name:"name",error:i,ref:n,onIconClick:C,errorText:p,size:d})},args:{value:"value",type:"text",placeholder:"placeholder",icon:"CurrencyIcon",error:!1,errorText:"Ошибка",size:"default"}};var r,t,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    value,
    type,
    placeholder,
    error,
    errorText,
    icon,
    size
  }) => {
    const [data, setData] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);
    const onIconClick = () => {
      setTimeout(() => inputRef.current!.focus(), 0);
      alert('Icon Click Callback');
    };
    return <Input type={type} placeholder={placeholder} onChange={e => setData(e.target.value)} icon={icon} value={data} name={'name'} error={error} ref={inputRef} onIconClick={onIconClick} errorText={errorText} size={size} />;
  },
  args: {
    value: 'value',
    type: 'text',
    placeholder: 'placeholder',
    icon: 'CurrencyIcon',
    error: false,
    errorText: 'Ошибка',
    size: 'default'
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const R=["BasicUsage"];export{e as BasicUsage,R as __namedExportsOrder,y as default};
