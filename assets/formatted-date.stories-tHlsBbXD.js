import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{F as t}from"./password-input-DUmsXx4T.js";import"./iframe-BGoeygs4.js";const x={title:"Components/FormattedDate",component:t},a={name:"Date from string",render:()=>{const e="2022-10-10T17:33:32.877Z";return s.jsx(t,{date:new Date(e)})}},r={render:()=>{const e=new Date;return s.jsx(t,{date:new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes()-1,0)})}},o={render:()=>{const e=new Date,d=new Date(e.getFullYear(),e.getMonth(),e.getDate()-1,e.getHours(),e.getMinutes()-1,0);return s.jsx(t,{date:d})}},n={name:"5 days ago",render:()=>{const e=new Date,d=new Date(e.getFullYear(),e.getMonth(),e.getDate()-5,e.getHours(),e.getMinutes()-1,0);return s.jsx(t,{date:d})}};var g,c,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Date from string",
  render: () => {
    const dateFromServer = '2022-10-10T17:33:32.877Z';
    return <FormattedDate date={new Date(dateFromServer)} />;
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,y,D;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    return <FormattedDate date={new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes() - 1, 0)} />;
  }
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var i,p,F;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, today.getHours(), today.getMinutes() - 1, 0);
    return <FormattedDate date={yesterday} />;
  }
}`,...(F=(p=o.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var l,w,M;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "5 days ago",
  render: () => {
    const today = new Date();
    const fiveDaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5, today.getHours(), today.getMinutes() - 1, 0);
    return <FormattedDate date={fiveDaysAgo} />;
  }
}`,...(M=(w=n.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const Y=["DateFromString","Today","Yesterday","FiveDaysAgo"];export{a as DateFromString,n as FiveDaysAgo,r as Today,o as Yesterday,Y as __namedExportsOrder,x as default};
