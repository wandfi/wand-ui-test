(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161],{81237:function(e,t,n){Promise.resolve().then(n.bind(n,4494))},4494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return TesterPage}});var a=n(57437),r=n(76036),s=n(84486),c=n(91056),o=n(72009),i=n(57042),u=n(2265),l=n(28881),f=n(99888),d=n(43977),p=n(56926);function TesterPage(){(0,p.xx)();let e=o.iK[(0,c.BV)()],[{value:t,feed:n},m]=(0,f.Z)({value:"",feed:e[0].assetTokenFeed}),v=(0,u.useMemo)(()=>e.map(e=>({label:e.assetTokenSymbol,value:e.assetTokenFeed})),[]);return(0,a.jsx)("div",{className:"w-full flex",children:(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full max-w-[500px] mx-auto",children:[(0,a.jsx)(l.ZP,{defaultValue:v[0],options:v,onChange:e=>m({feed:null==e?void 0:e.value})}),(0,a.jsx)("input",{value:t.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");m({value:t})},type:"number",className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,a.jsx)(r.v,{tx:"Update",config:{abi:s.Og,address:n,functionName:"mockPrice",args:[(0,d.v)(t,8)]},className:"btn-primary flex items-center justify-center gap-4"})]})})}},76036:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var a=n(57437),r=n(72009),s=n(81628),c=n(2265),o=n(71424),i=n(56926),u=n(84661),l=n(54415);let f={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a}=(0,i.mA)(),d=(0,l.uT)(),{data:p}=(0,i.py)(),[m,v]=(0,c.useState)(!1),h=(0,c.useMemo)(()=>Object.keys(e).filter(e=>e!==r.K8),[e]),[x,b]=(0,c.useState)(t&&f[t]||{}),updateAllownce=(e,n)=>{t&&(f[t]={...f[t]||{},[e]:n},b(t=>({...t,[e]:n})))},{data:w}=(0,i.Ov)(),g=(0,i.t_)();(0,c.useEffect)(()=>{a&&t&&h.forEach(e=>{d({abi:u.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[h,a,w]);let[y,A]=(0,c.useState)(!1),j=(0,c.useMemo)(()=>h.filter(t=>(0,s.ok)(e,t)>0n&&(0,s.ok)(e,t)>(0,s.ok)(x,t)),[e,h,x]),approve=async()=>{if(0!=j.length&&t)try{A(!0),v(!1);for(let a=0;a<j.length;a++){let r=j[a],s=!1===n?e[r]:n,c=await (null==p?void 0:p.writeContract({abi:u.em,address:r,functionName:"approve",args:[t,s]}));c&&await (null==g?void 0:g.waitForTransactionReceipt({hash:c})),updateAllownce(r,s)}o.A.success("Approve success"),A(!1),v(!0)}catch(e){throw o.A.error((0,s.az)(e)),A(!1),v(!1),e}};return{approve,loading:y,shouldApprove:j.length>0,isSuccess:m}};var d=n(43003),p=n(35769),m=n(72084);function ApproveAndTx(e){let{className:t,tx:n,approves:r,spender:s,requestAmount:o,config:i,toast:u=!0,disabled:l,onTxSuccess:f,onApproveSuccess:v}=e,{write:h,isDisabled:x,isLoading:b}=(0,d.R)({onSuccess:()=>f&&f(),...i},u),w=l||x||b||!1===i.enabled,{approve:g,shouldApprove:y,loading:A,isSuccess:j}=useApproves(r||{},s,o),k=(0,c.useRef)();return(k.current=v,(0,c.useEffect)(()=>{k.current&&j&&k.current()},[j]),y)?(0,a.jsxs)("button",{className:(0,p.m)("btn-primary flex items-center justify-center gap-4",t),onClick:g,disabled:l||!g||A,children:[A&&(0,a.jsx)(m.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,p.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>h(),disabled:w,children:[b&&(0,a.jsx)(m.$,{}),n]})}},72084:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var a=n(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var a=n(81628),r=n(2265),s=n(71424),c=n(56926);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[n,o]=(0,r.useState)(!1),[i,u]=(0,r.useState)(!1),l=(0,c.t_)(),{data:f}=(0,c.py)(),d=!l||!f||!f.account||n||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!d){o(!0),u(!1);try{let n="function"==typeof e?await e():e,{request:a}=await l.simulateContract({account:f.account,...n}),r=await f.writeContract(a),c=await l.waitForTransactionReceipt({hash:r});if("success"!==c.status)throw"Transaction reverted";u(!0),n.onSuccess&&n.onSuccess({}),t&&s.A.success("Transaction success")}catch(e){t&&s.A.error((0,a.az)(e))}o(!1)}};return{write,isDisabled:d,isLoading:n,isSuccess:i}}},99888:function(e,t,n){"use strict";var a=n(2265);t.Z=function(e){void 0===e&&(e={});var t=(0,a.useState)(e),n=t[0],r=t[1];return[n,(0,a.useCallback)(function(e){r(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]}}},function(e){e.O(0,[1866,9918,877,4725,9356,9724,2971,2472,1744],function(){return e(e.s=81237)}),_N_E=e.O()}]);