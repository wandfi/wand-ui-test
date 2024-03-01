(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{65967:function(e,t,a){Promise.resolve().then(a.bind(a,5970))},5970:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return AdminPage}});var s=a(57437),n=a(76036),r=a(34873),l=a(72009),o=a(14389),u=a(54415),i=a(57042),c=a(2265),d=a(37238),p=a(88920),x=a(28881),f=a(99888),m=a(21693),b=a(16775),v=a(43977);let h=[{label:"资产利息率",value:"Y"},{label:"目标AAR",value:"AART"},{label:"安全AAR",value:"AARS"},{label:"上顶AAR",value:"AARU"},{label:"熔断AAR",value:"AARC"},{label:"赎回手续费",value:"C"},{label:"进入国库比例",value:"TreasuryFeeRate"},{label:"Discount冷静时间",value:"CircuitBreakPeriod",units:0},{label:"低买池最小成交量USB",value:"PtyPoolMinUsbAmount"},{label:"高卖池最小成交量",value:"PtyPoolMinAssetAmount"}];function Expandable(e){let{children:t,tit:a,disable:n}=e,[r,l]=(0,c.useState)(!1);return(0,s.jsxs)("div",{className:"flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-solid border-blue-400",children:[(0,s.jsxs)("div",{className:"px-5 py-2 flex justify-between items-center",children:[(0,s.jsx)("div",{children:a}),n?t:(0,s.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer ",onClick:()=>l(!r),children:[(0,s.jsx)("span",{className:"mr-[5px]",children:r?"Close":"Expand"}),r?(0,s.jsx)(p.iRh,{}):(0,s.jsx)(p.tv1,{})]})]}),(0,s.jsx)(d.Collapse,{isOpened:r,theme:{content:"bg-gray-200 p-4 flex flex-col gap-2"},children:t})]})}function UpdateVaultVaule(e){let{vc:t}=e,a=(0,o.p)(),d=(0,c.useMemo)(()=>h.map(e=>({...e,label:"".concat(e.label,"(").concat(e.value,")")})),[]),[{name:p,value:g,param:j},w]=(0,f.Z)({name:"Y",value:"",param:d[0]}),{data:A}=(0,u.uX)({contracts:h.map(e=>({abi:r.$4,address:l.e_[a],functionName:"vaultParamValue",args:[t.vault,(0,m.$G)(e.value,{size:32})]})),watch:!0}),y=(0,c.useMemo)(()=>(A||[]).map((e,t)=>{let a=h[t];return"".concat(a.label,"(").concat(a.value,"): ").concat((0,b.b)(e.result||0n,"number"==typeof a.units?a.units:10))}),[A]),N="number"==typeof j.units?j.units:10;return(0,s.jsxs)(Expandable,{tit:"Vault Param Vaule",children:[(0,s.jsx)(x.ZP,{maxMenuHeight:140,defaultValue:d[0],options:d,onChange:e=>w({name:null==e?void 0:e.value})}),(0,s.jsx)("input",{value:g.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");w({value:t})},type:"number",className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,s.jsx)(n.v,{tx:"Update",config:{abi:r.$4,address:l.e_[a],functionName:"updateVaultParamValue",args:[t.vault,(0,m.$G)(p,{size:32}),(0,v.v)(g,N)]},onTxSuccess:()=>{w({value:""})},className:"btn-primary flex items-center justify-center gap-4"}),(0,s.jsx)("div",{className:"text-sm flex flex-col items-start",children:y.map((e,t)=>(0,s.jsx)("div",{children:e},"info_".concat(t)))})]})}function UpdateVaultPrice(e){let{vc:t}=e,[{feed:a},l]=(0,f.Z)({feed:""});return(0,s.jsxs)(Expandable,{tit:"Vault Price Feed",children:[(0,s.jsx)("input",{type:"text",placeholder:"",value:a,onChange:e=>l({feed:e.target.value}),className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(n.v,{tx:"Update",config:{abi:r.WW,address:t.vault,functionName:"updatePriceFeed",args:[a]},onTxSuccess:()=>{l({feed:""})},className:"btn-primary flex items-center justify-center gap-4"})]})}function ActionVault(e){let{vc:t,functionName:a}=e;return(0,s.jsx)(Expandable,{tit:"Vault "+a,disable:!0,children:(0,s.jsx)(n.v,{tx:"Update",config:{abi:r.WW,address:t.vault,functionName:a},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})})}function WandTxOwner(){let e=(0,o.p)(),[{owner:t},a]=(0,f.Z)({owner:""});return(0,s.jsxs)(Expandable,{tit:"WandOwner transferOwnership",children:[(0,s.jsx)("input",{type:"text",placeholder:"",value:t,onChange:e=>a({owner:e.target.value}),className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(n.v,{tx:"Update",config:{abi:r.EF,address:l.Vq[e],functionName:"transferOwnership",args:[t]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function WandSetBlastAddress(){let e=(0,o.p)(),[{address:t},a]=(0,f.Z)({address:""});return(0,s.jsxs)(Expandable,{tit:"Wand setBlastAddress",children:[(0,s.jsx)("input",{type:"text",placeholder:"",value:t,onChange:e=>a({address:e.target.value}),className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(n.v,{tx:"Update",config:{abi:r.EF,address:l.Vq[e],functionName:"setBlastAddress",args:[t]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function WandSetBlastPointsAddress(){let e=(0,o.p)(),[{address:t,address2:a},u]=(0,f.Z)({address:"",address2:""});return(0,s.jsxs)(Expandable,{tit:"Wand setBlastPointsAddress",children:[(0,s.jsx)("input",{type:"text",placeholder:"",value:t,onChange:e=>u({address:e.target.value}),className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)("input",{type:"text",placeholder:"",value:a,onChange:e=>u({address2:e.target.value}),className:(0,i.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(n.v,{tx:"Update",config:{abi:r.EF,address:l.Vq[e],functionName:"setBlastPointsAddress",args:[t,a]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}let g=["pauseMint","unpauseMint","pauseRedeem","unpauseRedeem","pauseUsbToMarginTokens","unpauseUsbToMarginTokens"];function AdminPage(){let e=(0,o.p)(),t=l.iK[e],[{vc:a},n]=(0,f.Z)({vc:t[0]}),r=(0,c.useMemo)(()=>t.map(e=>({label:e.assetTokenSymbol+e.version,value:e.vault,data:e})),[]);return(0,s.jsx)("div",{className:"w-full flex",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full max-w-[500px] mx-auto",children:[(0,s.jsx)(x.ZP,{defaultValue:r[0],options:r,onChange:e=>(null==e?void 0:e.data)&&n({vc:e.data})}),(0,s.jsx)(UpdateVaultVaule,{vc:a}),(0,s.jsx)(UpdateVaultPrice,{vc:a}),g.map(e=>(0,s.jsx)(ActionVault,{vc:a,functionName:e},e)),(0,s.jsx)(WandTxOwner,{}),(0,s.jsx)(WandSetBlastAddress,{}),(0,s.jsx)(WandSetBlastPointsAddress,{})]})})}},76036:function(e,t,a){"use strict";a.d(t,{v:function(){return ApproveAndTx}});var s=a(57437),n=a(72009),r=a(81628),l=a(2265),o=a(71424),u=a(56926),i=a(84661),c=a(54415);let d={},useApproves=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:s}=(0,u.mA)(),p=(0,c.uT)(),{data:x}=(0,u.py)(),[f,m]=(0,l.useState)(!1),b=(0,l.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[v,h]=(0,l.useState)(t&&d[t]||{}),updateAllownce=(e,a)=>{t&&(d[t]={...d[t]||{},[e]:a},h(t=>({...t,[e]:a})))},{data:g}=(0,u.Ov)(),j=(0,u.t_)();(0,l.useEffect)(()=>{s&&t&&b.forEach(e=>{p({abi:i.em,address:e,functionName:"allowance",args:[s,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[b,s,g]);let[w,A]=(0,l.useState)(!1),y=(0,l.useMemo)(()=>b.filter(t=>(0,r.ok)(e,t)>0n&&(0,r.ok)(e,t)>(0,r.ok)(v,t)),[e,b,v]),approve=async()=>{if(0!=y.length&&t)try{A(!0),m(!1);for(let s=0;s<y.length;s++){let n=y[s],r=!1===a?e[n]:a,l=await (null==x?void 0:x.writeContract({abi:i.em,address:n,functionName:"approve",args:[t,r]}));l&&await (null==j?void 0:j.waitForTransactionReceipt({hash:l})),updateAllownce(n,r)}o.A.success("Approve success"),A(!1),m(!0)}catch(e){throw o.A.error((0,r.az)(e)),A(!1),m(!1),e}};return{approve,loading:w,shouldApprove:y.length>0,isSuccess:f}};var p=a(43003),x=a(35769),f=a(72084);function ApproveAndTx(e){let{className:t,tx:a,approves:n,spender:r,requestAmount:o,config:u,toast:i=!0,disabled:c,onTxSuccess:d,onApproveSuccess:m}=e,{write:b,isDisabled:v,isLoading:h}=(0,p.R)({onSuccess:()=>d&&d(),...u},i),g=c||v||h||!1===u.enabled,{approve:j,shouldApprove:w,loading:A,isSuccess:y}=useApproves(n||{},r,o),N=(0,l.useRef)();return(N.current=m,(0,l.useEffect)(()=>{N.current&&y&&N.current()},[y]),w)?(0,s.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:j,disabled:c||!j||A,children:[A&&(0,s.jsx)(f.$,{}),"Approve"]}):(0,s.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>b(),disabled:g,children:[h&&(0,s.jsx)(f.$,{}),a]})}},72084:function(e,t,a){"use strict";a.d(t,{$:function(){return Spinner}});var s=a(57437);let Spinner=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,a){"use strict";a.d(t,{R:function(){return useWrapContractWrite}});var s=a(81628),n=a(2265),r=a(71424),l=a(56926);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[a,o]=(0,n.useState)(!1),[u,i]=(0,n.useState)(!1),c=(0,l.t_)(),{data:d}=(0,l.py)(),p=!c||!d||!d.account||a||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!p){o(!0),i(!1);try{let a="function"==typeof e?await e():e,{request:s}=await c.simulateContract({account:d.account,...a}),n=await d.writeContract(s),l=await c.waitForTransactionReceipt({hash:n});if("success"!==l.status)throw"Transaction reverted";i(!0),a.onSuccess&&a.onSuccess({}),t&&r.A.success("Transaction success")}catch(e){t&&r.A.error((0,s.az)(e))}o(!1)}};return{write,isDisabled:p,isLoading:a,isSuccess:u}}}},function(e){e.O(0,[1866,4102,7240,4725,9356,8920,7418,4270,2971,2472,1744],function(){return e(e.s=65967)}),_N_E=e.O()}]);