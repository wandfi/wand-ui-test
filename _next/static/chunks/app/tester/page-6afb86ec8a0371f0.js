(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161],{81237:function(e,t,n){Promise.resolve().then(n.bind(n,4494))},4494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return TesterPage}});var a=n(57437),r=n(76036),s=n(34873),c=n(72009),o=n(14389),u=n(57042),i=n(2265),l=n(28881),f=n(99888),p=n(43977);function TesterPage(){let e=(0,o.p)(),t=c.iK[e],[{value:n,feed:d},v]=(0,f.Z)({value:"",feed:t[0].assetTokenFeed}),m=(0,i.useMemo)(()=>t.map(e=>({label:e.assetTokenSymbol+e.version,value:e.assetTokenFeed})),[]);return(0,a.jsx)("div",{className:"w-full flex",children:(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full max-w-[500px] mx-auto",children:[(0,a.jsx)(l.ZP,{defaultValue:m[0],options:m,onChange:e=>v({feed:null==e?void 0:e.value})}),(0,a.jsx)("input",{value:n.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");v({value:t})},type:"number",className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,a.jsx)(r.v,{tx:"Update",config:{abi:s.Og,address:d,functionName:"mockPrice",args:[(0,p.v)(n,8)]},onTxSuccess:()=>{v({value:""})},className:"btn-primary flex items-center justify-center gap-4"})]})})}},76036:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var a=n(57437),r=n(72009),s=n(81628),c=n(2265),o=n(71424),u=n(56926),i=n(7935),l=n(54415);let f={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a}=(0,u.mA)(),p=(0,l.uT)(),{data:d}=(0,u.py)(),[v,m]=(0,c.useState)(!1),h=(0,c.useMemo)(()=>Object.keys(e).filter(e=>e!==r.K8),[e]),[x,b]=(0,c.useState)(t&&f[t]||{}),updateAllownce=(e,n)=>{t&&(f[t]={...f[t]||{},[e]:n},b(t=>({...t,[e]:n})))},{data:w}=(0,u.Ov)(),g=(0,u.t_)();(0,c.useEffect)(()=>{a&&t&&h.forEach(e=>{p({abi:i.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[h,a,w]);let[y,A]=(0,c.useState)(!1),j=(0,c.useMemo)(()=>h.filter(t=>(0,s.ok)(e,t)>0n&&(0,s.ok)(e,t)>(0,s.ok)(x,t)),[e,h,x]),approve=async()=>{if(0!=j.length&&t)try{A(!0),m(!1);for(let a=0;a<j.length;a++){let r=j[a],s=!1===n?e[r]:n,c=await (null==d?void 0:d.writeContract({abi:i.em,address:r,functionName:"approve",args:[t,s]}));c&&await (null==g?void 0:g.waitForTransactionReceipt({hash:c})),updateAllownce(r,s)}o.A.success("Approve success"),A(!1),m(!0)}catch(e){throw o.A.error((0,s.az)(e)),A(!1),m(!1),e}};return{approve,loading:y,shouldApprove:j.length>0,isSuccess:v}};var p=n(43003),d=n(35769),v=n(72084);function ApproveAndTx(e){let{className:t,tx:n,approves:r,spender:s,requestAmount:o,config:u,toast:i=!0,disabled:l,onTxSuccess:f,onApproveSuccess:m}=e,{write:h,isDisabled:x,isLoading:b}=(0,p.R)({onSuccess:()=>f&&f(),...u},i),w=l||x||b||!1===u.enabled,{approve:g,shouldApprove:y,loading:A,isSuccess:j}=useApproves(r||{},s,o),k=(0,c.useRef)();return(k.current=m,(0,c.useEffect)(()=>{k.current&&j&&k.current()},[j]),y)?(0,a.jsxs)("button",{className:(0,d.m)("btn-primary flex items-center justify-center gap-4",t),onClick:g,disabled:l||!g||A,children:[A&&(0,a.jsx)(v.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,d.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>h(),disabled:w,children:[b&&(0,a.jsx)(v.$,{}),n]})}},72084:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var a=n(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var a=n(81628),r=n(2265),s=n(71424),c=n(56926),o=n(54415);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[n,u]=(0,r.useState)(!1),[i,l]=(0,r.useState)(!1),f=(0,c.t_)(),{data:p}=(0,c.py)(),d=!f||!p||!p.account||n||!e||"object"==typeof e&&!1==e.enabled,v=(0,o.hp)(),write=async()=>{if(!d){u(!0),l(!1);try{let n="function"==typeof e?await e():e,{request:a}=await f.simulateContract({account:p.account,...n}),r=await p.writeContract(a),c=await f.waitForTransactionReceipt({hash:r});if("success"!==c.status)throw"Transaction reverted";l(!0),n.onSuccess&&n.onSuccess({}),t&&s.A.success("Transaction success"),v.update()}catch(e){t&&s.A.error((0,a.az)(e))}u(!1)}};return{write,isDisabled:d,isLoading:n,isSuccess:i}}},99888:function(e,t,n){"use strict";var a=n(2265);t.Z=function(e){void 0===e&&(e={});var t=(0,a.useState)(e),n=t[0],r=t[1];return[n,(0,a.useCallback)(function(e){r(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]}}},function(e){e.O(0,[1866,4102,7690,4725,9356,2924,2971,2472,1744],function(){return e(e.s=81237)}),_N_E=e.O()}]);