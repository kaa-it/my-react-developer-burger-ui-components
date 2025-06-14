import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./password-input-DUmsXx4T.js";import{r as i}from"./iframe-BGoeygs4.js";const m={title:"Components/Tab",component:t},r={render:()=>{const[a,n]=i.useState("one");return e.jsxs("div",{style:{display:"flex"},children:[e.jsx(t,{value:"one",active:a==="one",onClick:n,children:"One"}),e.jsx(t,{value:"two",active:a==="two",onClick:n,children:"Two"}),e.jsx(t,{value:"three",active:a==="three",onClick:n,children:"Three"})]})}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState('one');
    return <div style={{
      display: 'flex'
    }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Three
                </Tab>
            </div>;
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const p=["BasicUsage"];export{r as BasicUsage,p as __namedExportsOrder,m as default};
