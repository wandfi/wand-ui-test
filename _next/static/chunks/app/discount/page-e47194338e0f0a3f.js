(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2143],{33490:function(e,t,s){Promise.resolve().then(s.bind(s,23159))},23159:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return DiscountPage}});var a=s(57437),n=s(76036),l=s(80547),r=s(51549),i=s(84486),c=s(91056),o=s(72009),u=s(8580),d=s(54415),m=s(81628),x=s(15898),f=s(20373),p=s(16691),h=s.n(p),g=s(2265),v=s(41697),b=s(35769),A=s(56926);let ValutArea=e=>{let{asset:t}=e,{vaultsState:s,stableVaultsState:n,vaultsDiscount:l}=(0,g.useContext)(x.g),i=o.iK[(0,c.BV)()],u=i.find(e=>e.assetTokenSymbol==t);u.assetTokenSymbol;let d=u.assetTokenSymbol,f=l[u.vault],p=f?"Discount available":"No discount",h=!f,v=s[u.vault],A=n[u.vault],[j,w]=(0,g.useMemo)(()=>{if(u.isStable){if(!A)return["50%","50%"];let toPercent=e=>(100*Math.max(0,Math.min(1,(e-1)/1))).toFixed(2)+"%",e=(0,m.pF)(A.AARS,A.AARDecimals),t=(0,m.pF)(A.aar,A.AARDecimals);return[toPercent(t),toPercent(e)]}{if(!v)return["50%","50%"];let e=(0,m.pF)(v.AARU,v.AARDecimals),t=(0,m.pF)(v.aar,v.AARDecimals),s=(0,m.pF)(v.AARS,v.AARDecimals),a=(0,m.pF)(v.AART,v.AARDecimals),n=e/2,toPercent=t=>(100*Math.max(0,Math.min(1,(t-n)/(e-n)))).toFixed(2)+"%",l=toPercent(t);return h?[l,toPercent(s)]:[l,toPercent(a)]}},[u.isStable,v.AARU,v.aar,v.AARS,v.AART,A.AARS,A.aar,h]),N=u.isStable?(0,m.Rr)(A.aar,A.AARDecimals):(0,m.Rr)(v.aar,v.AARDecimals),y=u.isStable?(0,m.Rr)(A.AARS,A.AARDecimals):h?(0,m.Rr)(v.AARS,v.AARDecimals):(0,m.Rr)(v.AART,v.AARDecimals),S=(0,a.jsxs)("div",{style:{position:"relative",left:j,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,a.jsxs)("div",{className:"text-xs flex flex-col justify-center items-center p-1.5 px-4",children:[(0,a.jsx)("span",{className:"text-neutral-400",children:"Current AAR"}),(0,a.jsx)("span",{className:"font-medium",children:N})]}),(0,a.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:"#262626"})})]}),R=(0,a.jsxs)("div",{style:{position:"relative",left:w,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,a.jsx)("svg",{className:"rotate-180",width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:h?"#E83B3B":"#54E83B"})}),(0,a.jsxs)("div",{className:"text-xs flex flex-col justify-center items-center p-1.5 px-4",children:[(0,a.jsxs)("span",{className:"font-medium",children:["AAR=",y]}),(0,a.jsx)("span",{className:"text-neutral-400",children:h?"Trigger discount":"Discount end"})]})]});return(0,a.jsxs)("div",{className:"bg-white border border-neutral-200 rounded-3xl flex flex-col sm:flex-row p-4 w-full mb-[30px]",children:[(0,a.jsxs)("div",{className:"sm:w-[180px] flex items-center",children:[(0,a.jsx)(r.c,{symbol:u.assetTokenSymbol,size:54,className:"mr-[10px]"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{className:"text-xl font-bold",children:[d," Vault"]}),(0,a.jsx)("div",{className:"text-sm flex items-center gap-2",children:(0,a.jsxs)("div",{className:"flex items-center text-neutral-700 gap-1",children:[(0,a.jsx)("div",{className:(0,b.m)("w-3 h-3 shrink-0 rounded-full",f?"bg-red-500":"bg-green-500")}),p]})})]})]}),(0,a.jsxs)("div",{className:"sm:w-[calc(100%-170px)] p-4 rounded-lg flex flex-col gap-2",children:[S,(0,a.jsx)("div",{className:"h-px bg-[#64748B] after:content-['AAR'] after:inline-block after:text-right after:w-full after:text-xs after:text-[#64748B]"}),R]})]})};function DiscountPage(){let{balances:e,prices:t,vaultsDiscount:s}=(0,g.useContext)(x.g);(0,A.xx)();let r=o.iK[(0,c.BV)()].filter(e=>!e.disableIn),p=(0,g.useMemo)(()=>r.map(e=>({value:e.vault,label:e.xTokenSymbol})),[]),[b,j]=(0,g.useState)(p[0]),w=r.find(e=>e.vault==b.value),N=s[w.vault],y=(0,m.ok)(t,w.xTokenAddress),S=e[o.O1[(0,c.BV)()]],[R,k]=(0,g.useState)(""),T=(0,m.su)(R),B=0n!=T&&T<=S&&N,{data:D}=(0,d.D2)({vc:w,watch:!0,abi:i.Wn,address:o.O6[(0,c.BV)()],functionName:w.isStable?"calcUsbToMarginTokensForStableVault":"calcUsbToMarginTokens",args:[w.vault,o.e_[(0,c.BV)()],(0,m.su)("1")]}),C=(0,m.ok)(D,[1]),M=C*T/u.Pq,F=(0,g.useMemo)(()=>0n==C?0n:(0,m.su)("1")*u.Pq/C,[C]),P=(0,g.useMemo)(()=>{let e=t[w.xTokenAddress];return!e||0n==e||0n==F||F>=e?"0.00%":(0,m.Jh)((e-F)*u.Pq/e,18,2)},[t[w.xTokenAddress],F]);return(0,a.jsxs)("div",{className:"mx-auto max-w-screen-lg p-4",children:[(0,a.jsxs)("div",{className:"bg-indigo-50 p-6 lg:p-12 rounded-3xl relative",children:[(0,a.jsx)("h3",{className:"text-indigo-500 font-medium text-xl",children:"Discount Offer"}),(0,a.jsx)("div",{className:"text-indigo-900 mt-4 lg:w-3/4",children:"Due to fluctuations in the prices of underlying assets, when the AAR decreases, the protocol will offer users the opportunity to purchase xToken at a discount with $USB. This means that you can engage in arbitrage."}),(0,a.jsx)(h(),{src:"/discount.png",width:400,height:200,className:"lg:absolute lg:-right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8",alt:""})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 mt-5 gap-2 sm:grid-cols-2 sm:gap-4 sm:gap-8 sm:mt-8 sm:p-6",children:[(0,a.jsx)("div",{className:"w-full",children:r.map(e=>(0,a.jsx)(ValutArea,{asset:e.assetTokenSymbol},"vault_area_".concat(e.assetTokenSymbol)))}),(0,a.jsxs)("div",{className:"w-full bg-white border border-neutral-200 p-4 sm:p-[30px] sm:pt-[60px] rounded-3xl mb-[30px]",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-2 w-full mx-auto",children:[(0,a.jsx)(l.W,{asset:"USB",amount:R,setAmount:k,balance:S,exchange:(0,f.dq)(T*(0,m.ok)(t,o.O1[(0,c.BV)()],u.Pq)/u.Pq)}),(0,a.jsxs)("div",{className:"flex items-center justify-center w-full",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)(v.gPZ,{className:"w-6 h-6 text-neutral-500  border border-neutral-200 rounded-full my-[10px]"}),(0,a.jsx)("div",{className:"flex-1"})]}),(0,a.jsxs)("div",{className:"w-full flex-1 text-right text-neutral-700 text-sm whitespace-nowrap",children:["Discount Rate: ",N?P:"N/A"]}),(0,a.jsx)(l.W,{asset:b.label,amount:(0,f.dq)(M),exchange:(0,f.dq)(y*M/u.Pq),readonly:!0,hasInput:!0,options:p,defaultValue:p[0],onChange:e=>{console.log(e),j(e)}})]}),(0,a.jsx)(n.v,{tx:"Swap",disabled:!B,onTxSuccess:()=>{k("")},config:{vc:w,abi:i.WW,address:w.vault,functionName:"usbToMarginTokens",args:[T],enabled:B},approves:{[o.O1[(0,c.BV)()]]:T},spender:w.vault})]})]})]})}},76036:function(e,t,s){"use strict";s.d(t,{v:function(){return ApproveAndTx}});var a=s(57437),n=s(72009),l=s(81628),r=s(2265),i=s(71424),c=s(56926),o=s(84661),u=s(54415);let d={},useApproves=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a}=(0,c.mA)(),m=(0,u.uT)(),{data:x}=(0,c.py)(),[f,p]=(0,r.useState)(!1),h=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[g,v]=(0,r.useState)(t&&d[t]||{}),updateAllownce=(e,s)=>{t&&(d[t]={...d[t]||{},[e]:s},v(t=>({...t,[e]:s})))},{data:b}=(0,c.Ov)(),A=(0,c.t_)();(0,r.useEffect)(()=>{a&&t&&h.forEach(e=>{m({abi:o.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[h,a,b]);let[j,w]=(0,r.useState)(!1),N=(0,r.useMemo)(()=>h.filter(t=>(0,l.ok)(e,t)>0n&&(0,l.ok)(e,t)>(0,l.ok)(g,t)),[e,h,g]),approve=async()=>{if(0!=N.length&&t)try{w(!0),p(!1);for(let a=0;a<N.length;a++){let n=N[a],l=!1===s?e[n]:s,r=await (null==x?void 0:x.writeContract({abi:o.em,address:n,functionName:"approve",args:[t,l]}));r&&await (null==A?void 0:A.waitForTransactionReceipt({hash:r})),updateAllownce(n,l)}i.A.success("Approve success"),w(!1),p(!0)}catch(e){throw i.A.error((0,l.az)(e)),w(!1),p(!1),e}};return{approve,loading:j,shouldApprove:N.length>0,isSuccess:f}};var m=s(43003),x=s(35769),f=s(72084);function ApproveAndTx(e){let{className:t,tx:s,approves:n,spender:l,requestAmount:i,config:c,toast:o=!0,disabled:u,onTxSuccess:d,onApproveSuccess:p}=e,{write:h,isDisabled:g,isLoading:v}=(0,m.R)({onSuccess:()=>d&&d(),...c},o),b=u||g||v||!1===c.enabled,{approve:A,shouldApprove:j,loading:w,isSuccess:N}=useApproves(n||{},l,i),y=(0,r.useRef)();return(y.current=p,(0,r.useEffect)(()=>{y.current&&N&&y.current()},[N]),j)?(0,a.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:A,disabled:u||!A||w,children:[w&&(0,a.jsx)(f.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>h(),disabled:b,children:[v&&(0,a.jsx)(f.$,{}),s]})}},80547:function(e,t,s){"use strict";s.d(t,{W:function(){return AssetInput}});var a=s(57437),n=s(81628),l=s(20373),r=s(57042),i=s(2265),c=s(28881),o=s(16775),u=s(51549);function AssetInput(e){let{asset:t="ETH",checkBalance:s=!0,balance:d,balanceTit:m="Balance",balanceDecimals:x=18,exchange:f,readonly:p,selected:h,onClick:g,amount:v,setAmount:b,price:A,disable:j,hasInput:w=!1,options:N,onChange:y=()=>{},defaultValue:S,balanceClassName:R="",disableNegative:k}=e,T=(0,i.useRef)(null),B=s&&void 0!==d&&(0,n.su)("number"==typeof v?v+"":v||"")>("bigint"==typeof d?d:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{g&&!j&&g()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(u.c,{size:24,symbol:t}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[w?(0,a.jsx)(c.ZP,{options:N,onChange:y,defaultValue:S,styles:{control:(e,t)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,a.jsx)("div",{children:t}),A&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:A})]}),f&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",f]})]})]}),(0,a.jsx)("input",{value:v,onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");b(t)},ref:T,type:"number",disabled:j,className:(0,r.Z)(p?"bg-slate-50":"bg-white",{"border-green-700 border-2":h,"border-red-400 !border-2 focus:border-red-400":B,"border-slate-400  focus:border-blue-400":!B&&!h},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none "),placeholder:"0.000",pattern:"[0-9.]{36}",step:.01,title:"",readOnly:p})]}),void 0!=d&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{className:R,children:[(0,a.jsxs)("span",{children:[m,": ",(0,l.Rp)(d,3,x)]}),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,o.b)(d,x);b(e),g&&!j&&g()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:B?"Insufficient account balance":""})]})]})}},51549:function(e,t,s){"use strict";s.d(t,{c:function(){return CoinIcon}});var a=s(57437);function CoinIcon(e){let{symbol:t,size:s=48,...n}=e;return(0,a.jsx)("img",{...n,width:s,height:s,src:"/".concat(t,".svg"),alt:t})}},72084:function(e,t,s){"use strict";s.d(t,{$:function(){return Spinner}});var a=s(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,s){"use strict";s.d(t,{R:function(){return useWrapContractWrite}});var a=s(81628),n=s(2265),l=s(71424),r=s(56926);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[s,i]=(0,n.useState)(!1),[c,o]=(0,n.useState)(!1),u=(0,r.t_)(),{data:d}=(0,r.py)(),m=!u||!d||!d.account||s||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!m){i(!0),o(!1);try{let s="function"==typeof e?await e():e,{request:a}=await u.simulateContract({account:d.account,...s}),n=await d.writeContract(a),r=await u.waitForTransactionReceipt({hash:n});if("success"!==r.status)throw"Transaction reverted";o(!0),s.onSuccess&&s.onSuccess({}),t&&l.A.success("Transaction success")}catch(e){t&&l.A.error((0,a.az)(e))}i(!1)}};return{write,isDisabled:m,isLoading:s,isSuccess:c}}},20373:function(e,t,s){"use strict";s.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=s(16775),n=s(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**t;return(Math.floor(Number((0,a.b)(e,s))*n)/n).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=Number((0,n.d)(e)),a=Number((.1**t).toFixed(t));return s>0&&s<a?"<"+a:s<0&&s>-a?">-"+a:s.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return String(Math.floor(Number((0,n.d)(e))*s)/s)}}},function(e){e.O(0,[1866,3033,4102,6691,7240,4725,754,9356,9724,4322,2971,2472,1744],function(){return e(e.s=33490)}),_N_E=e.O()}]);