(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1399],{35883:function(){},55139:function(e,s,t){"use strict";t.d(s,{r:function(){return a.Z}});var a=t(87456)},26295:function(e,s,t){Promise.resolve().then(t.bind(t,41706))},41706:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Vaults}});var a=t(57437),l=t(91056),n=t(72009),i=t(15898),c=t(55139),d=t(16691),r=t.n(d),o=t(2265),x=t(76036),m=t(80547),u=t(64020),h=t(54653),f=t(8580),p=t(54415),v=t(81628),b=t(20373),g=t(34522),j=t(41697),S=t(99888),N=t(35769),w=t(79352);let y="$USB";function VaultCard(e){let{asset:s}=e,{balances:t,prices:c,vaultsMode:d}=(0,o.useContext)(i.g),r=n.iK[(0,l.BV)()].find(e=>e.assetTokenSymbol==s),k=n.O6[(0,l.BV)()],B=d[r.assetTokenSymbol],[C,A]=(0,o.useState)("mint"),[T,U]=(0,o.useMemo)(()=>{let e="mint"==C;return 3==B?["Adjustment Model--High AAR",e?"Minting ".concat(y," alone is feasible"):"Redeeming ".concat(r.xTokenSymbol," alone is feasible")]:2==B?["Adjustment Model--Low AAR",e?"Minting ".concat(r.xTokenSymbol," alone is feasible"):"Redeeming ".concat(y," alone is feasible")]:["Stability Model",e?"".concat(y," and ").concat(r.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(y," and ").concat(r.xTokenSymbol)]},[B,r,C]),[M,V]=(0,o.useState)(""),[W,q]=(0,o.useState)(""),R=(0,v.ok)(c,r.assetTokenSymbol),F=(0,v.ok)(c,r.xTokenSymbol),P=t[s],D=t.USB,E=t[r.xTokenSymbol],[{usbAmount:_,xAmount:Z,redeemActive:L,redeemFocus:O},z]=(0,S.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),H=(0,o.useMemo)(()=>({contracts:[{vc:r,abi:h.Wn,address:k,functionName:"calcMintPairs",args:[r.vault,(0,v.su)(M||"0")]},{vc:r,abi:h.Wn,address:k,functionName:"calcMintUsbAboveAARU",args:[r.vault,(0,v.su)(M||"0")]},{vc:r,abi:h.Wn,address:k,functionName:"calcMintMarginTokensBelowAARS",args:[r.vault,(0,v.su)(M||"0")]}],watch:!0,enabled:"mint"==C}),[r,M,C]),{data:[Y,$,K]=[void 0,void 0,void 0]}=(0,p.uX)(H),X=(0,v.ok)(Y,["result",1]),I=(0,v.ok)(Y,["result",2]),G=(0,v.ok)($,["result",1]),J=(0,v.ok)(K,["result",1]),{data:[Q,ee]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:r,abi:h.Wn,address:k,functionName:"calcPairdMarginTokenAmount",args:[r.vault,(0,v.su)(_||"0")]},{vc:r,abi:h.Wn,address:k,functionName:"calcPairedUsbAmount",args:[r.vault,(0,v.su)(Z||"0")]}],watch:!0,enabled:"redeem"==C}),{data:[es,et]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:r,abi:h.Wn,address:k,functionName:"calcRedeemByMarginTokenAboveAARU",args:[r.vault,(0,v.su)(Z||"0")]},{vc:r,abi:h.Wn,address:k,functionName:"calcRedeemByUsbBelowAARS",args:[r.vault,(0,v.su)(_||"0")]}],watch:!0,enabled:"redeem"==C}),ea=(0,v.ok)(Q,["result"]),el=(0,v.ok)(ee,["result"]),en=(0,v.ok)(es,["result",1]),ei=(0,v.ok)(et,["result",1]),ec=L==r.xTokenSymbol,ed="USB"==L,er=(0,o.useMemo)(()=>{let e={vc:r,abi:h.WW,address:r.vault,args:[(0,v.su)(M)],value:r.assetTokenAddress==n.K8?(0,v.su)(M):0n,functionName:"mintPairs"};return"USB"==W&&(e.functionName="mintUsbAboveAARU"),W==r.xTokenSymbol&&(e.functionName="mintMarginTokensBelowAARS"),e},[B,W,M,r]),eo=W==r.xTokenSymbol?0n:"USB"===W?G:X,ex="USB"==W?0n:W===r.xTokenSymbol?J:I,em=ec?"0":"USB"==O?_:(0,w.d)(el),eu=ed?"0":O==r.xTokenSymbol?Z:(0,w.d)(ea),eh=(0,o.useMemo)(()=>({vc:r,watch:!0,abi:h.Wn,address:k,functionName:"calcPairedRedeemAssetAmount",args:[r.vault,(0,v.su)(eu||"0")]}),[r,eu]),{data:ef}=(0,p.D2)(eh),ep=ec?en:ed?ei:(0,v.ok)(ef,[1]),ev=(0,o.useMemo)(()=>{let e={vc:r,abi:h.WW,address:r.vault,functionName:"USB"==L?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==L?[(0,v.su)(em)]:[(0,v.su)(eu)]};return L==r.xTokenSymbol&&(e.functionName="redeemByMarginTokenAboveAARU",e.args=[(0,v.su)(eu)]),"USB"==L&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,v.su)(em)]),e},[B,L,em,eu,r]);return(0,a.jsxs)("div",{className:(0,N.m)("card relative h-[450px]",B>1?"!bg-violet-500/10":""),children:[(0,a.jsx)("div",{className:"mb-1 ssm:mb-0 ssm:absolute top-[29px] right-6 flex flex-col items-end z-10",children:(0,a.jsxs)("div",{className:(0,N.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,a.jsx)("div",{className:(0,N.m)("w-3 h-3 rounded-full","Stability Model"==T?"bg-green-500":"bg-red-500")}),(0,a.jsx)(u.C,{node:(0,a.jsx)("div",{className:(0,N.m)("Stability Model"==T?"text-green-500":"text-red-500"),children:T}),children:U})]})}),(0,a.jsx)("div",{className:"relative flex items-center justify-between",children:(0,a.jsxs)(g.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>A(e),children:[(0,a.jsxs)(g.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(g.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,a.jsx)(g.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,a.jsx)(g.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(m.W,{asset:s,exchange:(0,b.dq)(R*(0,v.su)(M)/f.Pq),balance:P,amount:M,setAmount:V}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,a.jsx)(j.gPZ,{})}),(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,a.jsx)(m.W,{amount:(0,b.ZM)(eo),onClick:()=>{q(3==B?"USB":"")},asset:"USB",exchange:(0,b.dq)(eo),readonly:!0,disable:B<=1,selected:"USB"===W}),(0,a.jsx)(m.W,{amount:(0,b.ZM)(ex),onClick:()=>{q(2==B?r.xTokenSymbol:"")},asset:r.xTokenSymbol,exchange:(0,b.dq)(F*ex/f.Pq),readonly:!0,disable:B<=1,selected:W===r.xTokenSymbol})]}),(0,a.jsx)(x.v,{tx:"Mint",disabled:0n==(0,v.su)(M)||(0,v.su)(M)>P,onTxSuccess:()=>{V("")},config:er,approves:{[r.assetTokenAddress]:(0,v.su)(M)},spender:r.vault})]})}),(0,a.jsx)(g.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(m.W,{amount:em,setAmount:e=>z({usbAmount:e}),balance:D,onClick:()=>{z({redeemActive:2==B?"USB":"",redeemFocus:"USB"})},asset:"USB",exchange:(0,b.dq)((0,v.su)(em)),readonly:L==r.xTokenSymbol,selected:"USB"===L}),(0,a.jsx)(m.W,{amount:eu,setAmount:e=>z({xAmount:e}),asset:r.xTokenSymbol,onClick:()=>{z({redeemActive:3==B?r.xTokenSymbol:"",redeemFocus:r.xTokenSymbol})},exchange:(0,b.dq)((0,v.su)(eu)*F/f.Pq),balance:E,readonly:"USB"==L,selected:L===r.xTokenSymbol})]}),(0,a.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,a.jsx)(j.gPZ,{})}),(0,a.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,a.jsx)("div",{className:"w-full text-end"}),(0,a.jsx)(m.W,{asset:r.assetTokenSymbol,amount:(0,w.d)(ep),exchange:(0,b.dq)(R*ep/f.Pq),readonly:!0}),(0,a.jsx)(x.v,{tx:"Redeem",config:ev,disabled:ed&&0n==(0,v.su)(em)||ec&&0n==(0,v.su)(eu)||!ed&&!ec&&(0n==(0,v.su)(em)||0n==(0,v.su)(eu))||(0,v.su)(em)>D||(0,v.su)(eu)>E,onTxSuccess:()=>{z({usbAmount:"",xAmount:""})},approves:ed?{[n.O1[(0,l.BV)()]]:(0,v.su)(em)}:ec?{[r.xTokenAddress]:(0,v.su)(eu)}:{[r.xTokenAddress]:(0,v.su)(eu),[n.O1[(0,l.BV)()]]:(0,v.su)(em)},spender:r.vault})]})})]})})]})}var k=t(28712),B=t(62592),C=t(37238),A=t(56926);function StableVaultCard(e){let{asset:s}=e,{balances:t,prices:c}=(0,o.useContext)(i.g),d=n.iK[(0,l.BV)()].find(e=>e.assetTokenSymbol==s),r=n.O6[(0,l.BV)()],[u,y]=(0,o.useState)("mint"),[k,B]=(0,o.useState)(""),[C,A]=(0,o.useState)(""),T=(0,v.ok)(c,d.assetTokenSymbol),U=(0,v.ok)(c,d.xTokenSymbol),M=t[s],V=t.USB,W=t[d.xTokenSymbol],[{usbAmount:q,xAmount:R,redeemActive:F,redeemFocus:P},D]=(0,S.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),E=(0,o.useMemo)(()=>({contracts:[{vc:d,abi:h.Wn,address:r,functionName:"calcMintPairsFromStableVault",args:[d.vault,(0,v.su)(k||"0")]},{vc:d,abi:h.Wn,address:r,functionName:"calcMintUsbFromStableVault",args:[d.vault,(0,v.su)(k||"0")]},{vc:d,abi:h.Wn,address:r,functionName:"calcMintMarginTokensFromStableVault",args:[d.vault,(0,v.su)(k||"0")]}],watch:!0,enabled:"mint"==u}),[d,k,u]),{data:[_,Z,L]=[void 0,void 0,void 0]}=(0,p.uX)(E),O=(0,v.ok)(_,["result",1]),z=(0,v.ok)(_,["result",2]),H=(0,v.ok)(Z,["result",1]),Y=(0,v.ok)(L,["result",1]),{data:[$,K]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:d,abi:h.Wn,address:r,functionName:"calcPairdMarginTokenAmountForStableVault",args:[d.vault,(0,v.su)(q||"0")]},{vc:d,abi:h.Wn,address:r,functionName:"calcPairedUsbAmountForStableVault",args:[d.vault,(0,v.su)(R||"0")]}],watch:!0,enabled:"redeem"==u}),{data:[X,I]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:d,abi:h.Wn,address:r,functionName:"calcRedeemByMarginTokensFromStableVault",args:[d.vault,n.e_[(0,l.BV)()],(0,v.su)(R||"0")]},{vc:d,abi:h.Wn,address:r,functionName:"calcRedeemByUsbFromStableVault",args:[d.vault,n.e_[(0,l.BV)()],(0,v.su)(q||"0")]}],watch:!0,enabled:"redeem"==u}),G=(0,v.ok)($,["result"]),J=(0,v.ok)(K,["result"]),Q=(0,v.ok)(X,["result",1]),ee=(0,v.ok)(I,["result",1]),es=F==d.xTokenSymbol,et="USB"==F,ea=(0,o.useMemo)(()=>{let e={vc:d,abi:h.S4,address:d.vault,args:[(0,v.su)(k)],value:d.assetTokenAddress==n.K8?(0,v.su)(k):0n,functionName:"mintPairs"};return"USB"==C&&(e.functionName="mintUsb"),C==d.xTokenSymbol&&(e.functionName="mintMarginTokens"),e},[C,k,d]),el=C==d.xTokenSymbol?0n:"USB"===C?H:O,en="USB"==C?0n:C===d.xTokenSymbol?Y:z,ei=es?"0":"USB"==P?q:(0,w.d)(J),ec=et?"0":P==d.xTokenSymbol?R:(0,w.d)(G),ed=(0,o.useMemo)(()=>({vc:d,watch:!0,abi:h.Wn,address:r,functionName:"calcRedeemByPairsAssetAmountForStableVault",args:[d.vault,n.e_[(0,l.BV)()],(0,v.su)(ec||"0")]}),[d,ec]),{data:er}=(0,p.D2)(ed),eo=es?Q:et?ee:(0,v.ok)(er,[1]),ex=(0,o.useMemo)(()=>{let e={vc:d,abi:h.S4,address:d.vault,functionName:"USB"==F?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==F?[(0,v.su)(ei)]:[(0,v.su)(ec)]};return F==d.xTokenSymbol&&(e.functionName="redeemByMarginTokens",e.args=[(0,v.su)(ec)]),"USB"==F&&(e.functionName="redeemByUsb",e.args=[(0,v.su)(ei)]),e},[F,ei,ec,d]);return(0,a.jsx)("div",{className:(0,N.m)("card relative h-[450px]"),children:(0,a.jsx)("div",{className:"relative flex items-center justify-between",children:(0,a.jsxs)(g.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>y(e),children:[(0,a.jsxs)(g.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(g.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,a.jsx)(g.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,a.jsx)(g.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(m.W,{asset:s,exchange:(0,b.dq)(T*(0,v.su)(k)/f.Pq),balance:M,amount:k,setAmount:B}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,a.jsx)(j.gPZ,{})}),(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,a.jsx)(m.W,{amount:(0,b.ZM)(el),onClick:()=>{A("USB")},asset:"USB",exchange:(0,b.dq)(el),readonly:!0,selected:"USB"===C}),(0,a.jsx)(m.W,{amount:(0,b.ZM)(en),onClick:()=>{A(d.xTokenSymbol)},asset:d.xTokenSymbol,exchange:(0,b.dq)(U*en/f.Pq),readonly:!0,selected:C===d.xTokenSymbol})]}),(0,a.jsx)(x.v,{tx:"Mint",disabled:0n==(0,v.su)(k)||(0,v.su)(k)>M,onTxSuccess:()=>{B("")},config:ea,approves:{[d.assetTokenAddress]:(0,v.su)(k)},spender:d.vault})]})}),(0,a.jsx)(g.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(m.W,{amount:ei,setAmount:e=>D({usbAmount:e}),balance:V,onClick:()=>{D({redeemActive:"USB",redeemFocus:"USB"})},asset:"USB",exchange:(0,b.dq)((0,v.su)(ei)),readonly:F==d.xTokenSymbol,selected:"USB"===F}),(0,a.jsx)(m.W,{amount:ec,setAmount:e=>D({xAmount:e}),asset:d.xTokenSymbol,onClick:()=>{D({redeemActive:d.xTokenSymbol,redeemFocus:d.xTokenSymbol})},exchange:(0,b.dq)((0,v.su)(ec)*U/f.Pq),balance:W,readonly:"USB"==F,selected:F===d.xTokenSymbol})]}),(0,a.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,a.jsx)(j.gPZ,{})}),(0,a.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,a.jsx)("div",{className:"w-full text-end"}),(0,a.jsx)(m.W,{asset:d.assetTokenSymbol,amount:(0,w.d)(eo),exchange:(0,b.dq)(T*eo/f.Pq),readonly:!0}),(0,a.jsx)(x.v,{tx:"Redeem",config:ex,disabled:et&&0n==(0,v.su)(ei)||es&&0n==(0,v.su)(ec)||!et&&!es&&(0n==(0,v.su)(ei)||0n==(0,v.su)(ec))||(0,v.su)(ei)>V||(0,v.su)(ec)>W,onTxSuccess:()=>{D({usbAmount:"",xAmount:""})},approves:et?{[n.O1[(0,l.BV)()]]:(0,v.su)(ei)}:es?{[d.xTokenAddress]:(0,v.su)(ec)}:{[d.xTokenAddress]:(0,v.su)(ec),[n.O1[(0,l.BV)()]]:(0,v.su)(ei)},spender:d.vault})]})})]})})})}var T=t(34776);let U=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,a.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),M=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,a.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),V=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,a.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C",strokeWidth:"4"})}),W=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,a.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D",strokeWidth:"4"})}),q=(0,a.jsx)("div",{className:"mr-[10px]",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,a.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})}),R=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 20",fill:"none",children:(0,a.jsx)("path",{d:"M20.75 8.00223C20.7 7.61046 20.45 7.26767 20 7.16973H19.95C19.05 6.97385 18.4 6.48414 17.9 5.65164C17.45 4.91709 17.3 3.98665 17.6 3.15415C17.75 2.81135 17.65 2.37062 17.3 2.0768C16.35 1.19533 15.2 0.509741 13.9 0.0690067C13.55 -0.0779047 13.15 0.0200363 12.8 0.36283C12.25 1.04842 11.4 1.39121 10.45 1.39121C9.6 1.39121 8.8 0.999446 8.1 0.313859C7.7 -0.0779047 7.3 -0.0289342 7 0.0690067C5.7 0.607682 4.6 1.2443 3.65 2.02783C3.3 2.27268 3.15 2.71341 3.3 3.10518C3.55 4.03562 3.45 4.91709 3 5.70061C2.6 6.3862 1.85 6.92488 0.95 7.16973C0.9 7.16973 0.9 7.16973 0.85 7.2187C0.55 7.36561 0.35 7.61046 0.2 7.95326V8.00223C0.05 8.73678 0 9.3734 0 10.01C0 10.6466 0.05 11.3812 0.2 11.9688C0.25 12.3606 0.5 12.7034 0.95 12.8013H1C1.9 12.9972 2.55 13.4869 3.05 14.3194C3.5 15.054 3.65 15.9844 3.35 16.8169C3.2 17.1597 3.3 17.6004 3.65 17.8943C4.6 18.7757 5.75 19.4613 7.1 19.9021C7.15 19.9021 7.2 19.951 7.3 19.951H7.45C7.7 19.951 8 19.8531 8.25 19.6082C8.8 18.9716 9.65 18.5799 10.6 18.5799C11.45 18.5799 12.25 18.9716 12.95 19.6572C13.15 19.8531 13.4 20 13.65 20C13.75 20 13.9 20 14 19.951C15.3 19.4124 16.4 18.7757 17.35 17.9922C17.7 17.7963 17.85 17.3066 17.7 16.9149C17.45 15.9844 17.55 15.1029 18 14.3194C18.4 13.6338 19.15 13.0952 20.05 12.8503C20.1 12.8503 20.1 12.8503 20.15 12.8013C20.45 12.6544 20.65 12.4096 20.8 12.0668V12.0178C20.95 11.2833 21 10.6466 21 10.01C20.95 9.32443 20.9 8.63884 20.75 8.00223ZM10.45 13.389C8.5 13.389 6.95 11.8709 6.95 9.96105C6.95 8.0512 8.5 6.53311 10.45 6.53311C12.4 6.53311 13.95 8.0512 13.95 9.96105C13.95 11.8709 12.4 13.389 10.45 13.389Z",fill:"#6466F1"})}),F={ETH:"./ETH.svg",ETHx:"./ETHx.svg",USDB:"./USDB.svg",USDBx:"./USDB.svg",USB:"./USB.svg",USDC:"./USDC.svg",USDCx:"./USDCx.svg"};function VaultSimple(e){let{vc:s}=e,{balances:t,prices:c,vaultsMode:d,stableVaultsState:u}=(0,o.useContext)(i.g),j=(0,v.ok)(c,s.assetTokenSymbol),S=d[s.assetTokenSymbol],N=s.assetTokenSymbol,[w,y]=(0,o.useState)("deposit"),[B,C]=(0,o.useState)(""),A=(0,v.su)(B),T=s.xTokenSymbol,U=t[N],M=u[s.vault],[V,W]=(0,o.useState)(""),{data:q}=(0,p.D2)({watch:!0,vc:s,abi:h.Wn,address:n.O6[(0,l.BV)()],functionName:s.isStable?"calcMintPairsFromStableVault":"calcMintPairs",args:[s.vault,(0,v.su)("1")]}),{data:P}=(0,p.D2)({abi:h.Wn,address:n.O6[(0,l.BV)()],functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,v.su)("1")],enabled:s.isStable,watch:!0}),D=s.isStable&&0n==M.M_USDCx?0n:(0,v.ok)(q,[1]),E=s.isStable&&0n==M.M_USDCx?(0,v.ok)(P,[1]):(0,v.ok)(q,[2]),_=t.USB,Z=t[s.xTokenSymbol],L=(0,v.NA)([E>0n?Z*f.Pq/E:0n,D>0n?_*f.Pq/D:0n]),O=(0,v.su)(V),z=(0,o.useMemo)(()=>{let e={vc:s,abi:s.isStable?h.S4:h.WW,address:s.vault,functionName:"redeemByPairsWithExpectedUsbAmount",args:[O*D/f.Pq]};return e},[S,O,D,s]);return(0,a.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,a.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,a.jsxs)(k.fC,{children:[(0,a.jsx)(k.xz,{children:(0,a.jsx)("div",{className:"absolute w-[21px] h-[21px] right-[20px] top-[30px] cursor-pointer hover:bg-indigo-500 hover:bg-opacity-50",children:R})}),(0,a.jsxs)(k.h_,{children:[(0,a.jsx)(k.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,a.jsx)(k.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:s.isStable?(0,a.jsx)(StableVaultCard,{asset:N}):(0,a.jsx)(VaultCard,{asset:N})})]})]}),(0,a.jsxs)(g.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>y(e),children:[(0,a.jsxs)(g.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(g.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,a.jsx)(g.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,a.jsx)(g.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(m.W,{asset:N,exchange:(0,b.dq)(j*A/f.Pq),balance:U,amount:B,setAmount:C}),(0,a.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,a.jsx)(r(),{src:F[N],width:12,height:12,alt:"",className:"mx-[5px]"}),N," = ",(0,b.dq)(E)," ",(0,a.jsx)(r(),{src:F[T],width:12,height:12,alt:"",className:"mx-[5px]"})," ",N,"x +",(0,b.dq)(D)," ",(0,a.jsx)(r(),{src:F.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," USB"]}),(0,a.jsx)(x.v,{tx:"Deposit",disabled:A<=0n||A>U,onTxSuccess:()=>{C("")},config:{abi:h.S4,address:s.vault,args:[A],value:s.assetTokenAddress==n.K8?A:0n,functionName:s.isStable&&0n==M.M_USDCx?"mintMarginTokens":"mintPairs"},approves:{[s.assetTokenAddress]:A},spender:s.vault})]})}),(0,a.jsx)(g.VY,{value:"withraw",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("div",{className:"flex flex-col gap-2",children:(0,a.jsx)(m.W,{amount:V,setAmount:W,balance:L,asset:N,exchange:(0,b.dq)(j*O/f.Pq)})}),(0,a.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,a.jsxs)("span",{className:"flex",children:[T," Balance：",(0,a.jsx)(r(),{src:F[T],width:12,height:12,alt:"",className:"mr-[5px]"})," ",(0,b.dq)(Z)]}),(0,a.jsxs)("span",{className:"flex",children:["USB Balance: ",(0,a.jsx)(r(),{src:F.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," ",(0,b.dq)(_)]})]}),(0,a.jsx)(x.v,{tx:"Withdraw",config:z,disabled:0n==D||0n==E||O<=0n||O>L,onTxSuccess:()=>{console.info("Redeem onSuccess:"),W("")},approves:{[s.xTokenAddress]:O*E/f.Pq,[n.O1[(0,l.BV)()]]:O*D/f.Pq},spender:s.vault})]})})]})]})})}function VaultCollapse(e){let{vc:s}=e,{balances:t,prices:c,vaultsMode:d,vaultsState:x,stableVaultsState:m,vaultsDiscount:h}=(0,o.useContext)(i.g),p=function(e){let{vaultsState:s,stableVaultsState:t}=(0,o.useContext)(i.g),a=s[(null==e?void 0:e.vault)||"null"],l=t[(null==e?void 0:e.vault)||"null"],n=(null==e?void 0:e.isStable)?(0,v.pF)(l.aar,l.AARDecimals):(0,v.pF)(a.aar,a.AARDecimals);return Math.max(0,1+1/(n-1))}(s),g=(0,v.ok)(c,s.assetTokenSymbol),j=x[s.vault],S=m[s.vault],N=s.isStable?S.M_USDC:j.M_ETH,w=s.isStable?S.M_USDCx:j.M_ETHx,y=s.isStable?S.M_USB_USDC:j.M_USB_ETH,k=(0,b.dq)(N),R=(0,b.dq)(w),P=(0,b.dq)(N*g/f.Pq),D=(0,b.dq)(y),E=s.isStable?(0,v.Rr)(S.aar,S.AARDecimals):(0,v.Rr)(j.aar,j.AARDecimals),_=d[s.assetTokenSymbol],Z=w>0n?t[s.xTokenSymbol]*N/w:0n,L=w>0n?-(t[s.xTokenSymbol]*y)/w:0n,O=h[s.vault],{address:z}=(0,A.mA)(),[H,Y]=(0,o.useState)(!1),$=s.xTokenSymbol,K="/".concat(s.assetTokenSymbol,".svg"),X="/".concat(s.xTokenSymbol,".svg"),{data:I}=(0,A.py)();return(0,a.jsxs)("div",{className:"border border-solid border-[#E4E4E7] rounded-2xl overflow-hidden",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col gap-5 md:flex-row justify-between items-center bg-white p-4 md:p-10",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5",children:[(0,a.jsxs)("div",{className:"flex w-full md:w-[10rem] flex-shrink-0",children:[(0,a.jsx)(r(),{alt:"",width:40,height:40,src:K}),(0,a.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-black text-base font-semibold leading-[16px] whitespace-nowrap",children:s.assetTokenSymbol}),(0,a.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",(0,b.dq)(c[s.assetTokenSymbol])]})]})]}),(0,a.jsx)("div",{className:"h-[1px] w-full bg-[#E4E4E7] md:hidden"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 gap-y-[2rem] md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Total Deposit"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(r(),{width:14,height:14,src:K,alt:""}),(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:k})]}),(0,a.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$",P]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"USB Debt"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(r(),{width:14,height:14,src:F.USB,alt:""}),(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:D})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:[$,(0,a.jsx)(u.C,{children:"This is a Margin token, representing your open position in the vault."})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(r(),{width:14,height:14,src:F[$],alt:""}),(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:R})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:["AAR",(0,a.jsx)(u.C,{children:"Asset Adequacy Ratio"})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:E})})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Status"}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,a.jsxs)("div",{className:"flex items-center",children:[!s.isStable&&(0,a.jsx)("div",{className:"mr-[10px]",children:_<=1?V:W}),s.isStable?"n/a":_<=1?"Stability":"Adjustment"]})})})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Discount Offer"}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:O?(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-[10px]",children:W}),"Yes"]}):(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-[10px]",children:V}),"No"]})})})]})]})]}),(0,a.jsxs)("div",{className:"flex items-center text-xs text-[#6466F1] cursor-pointer",onClick:()=>{Y(!H)},children:[(0,a.jsx)("span",{className:"mr-[5px]",children:H?"Hide":"Details"}),H?M:U]})]}),(0,a.jsx)(C.Collapse,{isOpened:H,className:"ease-linear",children:(0,a.jsx)("div",{className:z?"w-full min-h-[286px] rounded-b-[16px] bg-[#F2F5F9] p-[30px]":"w-full h-[202px] rounded-b-[16px] bg-[#F2F5F9] p-[30px]",children:(0,a.jsxs)("div",{className:"w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"w-full md:w-[12rem] md:h-full mb-[40px] md:mb-0 flex items-center",children:(0,a.jsxs)("div",{className:"flex mr-[55px]",children:[(0,a.jsx)(r(),{alt:"",width:54,height:54,src:X}),(0,a.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-black text-[24px] font-semibold leading-[24px]",children:$}),(0,a.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",(0,b.dq)(c[$])]})]})]})}),(0,a.jsxs)("div",{className:"w-full md:w-[300px] min-h-[108px] flex flex-col justify-between",children:[z&&(0,a.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,a.jsx)("div",{children:"Open Position"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(r(),{src:F[s.assetTokenSymbol],width:12,height:12,alt:"",className:"mr-[5px]"}),(0,b.dq)(Z)]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,a.jsxs)("div",{children:["Margin Loan",(0,a.jsxs)(u.C,{children:["Repay your margin loan to redeem ",s.assetTokenSymbol," corresponding to your open position."]})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(r(),{src:F.USB,width:12,height:12,alt:"",className:"mr-[5px]"}),(0,b.dq)(L)]})]})]}),(0,a.jsxs)("div",{className:" text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,a.jsxs)("div",{className:"flex items-center mb-[16px]",children:[q,p.toFixed(2),"x Leveraged long on ",s.assetTokenSymbol]}),(0,a.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{s&&(null==I||I.watchAsset({type:"ERC20",options:{address:s.xTokenAddress,symbol:s.xTokenSymbol,decimals:18}}).catch(v.S3))},children:[q,"Add ",s.xTokenSymbol," to wallet"]}),(0,a.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{null==I||I.watchAsset({type:"ERC20",options:{address:n.O1[(0,l.BV)()],symbol:"USB",decimals:18}}).catch(v.S3)},children:[q,"Add USB to wallet"]}),(0,a.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:()=>{var e,t;let a=l.Af.find(e=>e.id==(0,l.BV)());a&&s&&open("".concat(null===(t=a.blockExplorers)||void 0===t?void 0:null===(e=t.default)||void 0===e?void 0:e.url,"/address/").concat(s.vault),"_blank")},children:[q,"View contract"]})]})]})]}),(0,a.jsx)("div",{className:"w-full md:min-w-[604px] md:flex md:items-center md:justify-center",children:z&&s?(0,a.jsx)(VaultSimple,{vc:s}):s?(0,a.jsx)(T.Z,{}):(0,a.jsx)(B.Z,{className:"rounded",children:"Comming soon"})})]})})})]})}function Vaults(){(0,A.xx)();let e=n.iK[(0,l.BV)()];return(0,a.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold text-neutral-900",children:"Vaults"}),(0,a.jsxs)("div",{className:"w-full mt-[20px] mb-[30px] flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,a.jsx)("div",{className:"min-w-[21px] mt-[5px] md:mt-0",children:(0,a.jsx)(r(),{width:21,height:14,src:"./vector.png",alt:"vector"})}),(0,a.jsx)("span",{className:"ml-[6px]",children:"Depositing assets into the Vaults not only yields protocol income but also qualifies for Blast Developer Airdrop."})]}),(0,a.jsx)(c.r,{numItemsMd:1,className:"gap-3 mt-4",children:e.map(e=>(0,a.jsx)(VaultCollapse,{vc:e},"vault_item_".concat(e.assetTokenSymbol)))})]})}},76036:function(e,s,t){"use strict";t.d(s,{v:function(){return ApproveAndTx}});var a=t(57437),l=t(72009),n=t(81628),i=t(2265),c=t(71424),d=t(56926),r=t(84661),o=t(54415);let x={},useApproves=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a}=(0,d.mA)(),m=(0,o.uT)(),{data:u}=(0,d.py)(),[h,f]=(0,i.useState)(!1),p=(0,i.useMemo)(()=>Object.keys(e).filter(e=>e!==l.K8),[e]),[v,b]=(0,i.useState)(s&&x[s]||{}),updateAllownce=(e,t)=>{s&&(x[s]={...x[s]||{},[e]:t},b(s=>({...s,[e]:t})))},{data:g}=(0,d.Ov)(),j=(0,d.t_)();(0,i.useEffect)(()=>{a&&s&&p.forEach(e=>{m({abi:r.em,address:e,functionName:"allowance",args:[a,s]}).then(s=>updateAllownce(e,s||0n)).catch(console.error)})},[p,a,g]);let[S,N]=(0,i.useState)(!1),w=(0,i.useMemo)(()=>p.filter(s=>(0,n.ok)(e,s)>0n&&(0,n.ok)(e,s)>(0,n.ok)(v,s)),[e,p,v]),approve=async()=>{if(0!=w.length&&s)try{N(!0),f(!1);for(let a=0;a<w.length;a++){let l=w[a],n=!1===t?e[l]:t,i=await (null==u?void 0:u.writeContract({abi:r.em,address:l,functionName:"approve",args:[s,n]}));i&&await (null==j?void 0:j.waitForTransactionReceipt({hash:i})),updateAllownce(l,n)}c.A.success("Approve success"),N(!1),f(!0)}catch(e){throw c.A.error((0,n.az)(e)),N(!1),f(!1),e}};return{approve,loading:S,shouldApprove:w.length>0,isSuccess:h}};var m=t(43003),u=t(35769),h=t(72084);function ApproveAndTx(e){let{className:s,tx:t,approves:l,spender:n,requestAmount:c,config:d,toast:r=!0,disabled:o,onTxSuccess:x,onApproveSuccess:f}=e,{write:p,isDisabled:v,isLoading:b}=(0,m.R)({onSuccess:()=>x&&x(),...d},r),g=o||v||b||!1===d.enabled,{approve:j,shouldApprove:S,loading:N,isSuccess:w}=useApproves(l||{},n,c),y=(0,i.useRef)();return(y.current=f,(0,i.useEffect)(()=>{y.current&&w&&y.current()},[w]),S)?(0,a.jsxs)("button",{className:(0,u.m)("btn-primary flex items-center justify-center gap-4",s),onClick:j,disabled:o||!j||N,children:[N&&(0,a.jsx)(h.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,u.m)("btn-primary flex items-center justify-center gap-4",s),onClick:()=>p(),disabled:g,children:[b&&(0,a.jsx)(h.$,{}),t]})}},34776:function(e,s,t){"use strict";t.d(s,{Z:function(){return ConnectBtn}});var a=t(57437),l=t(14701);function ConnectBtn(){return(0,a.jsx)(l.NL,{chainStatus:"none",showBalance:!1})}},80547:function(e,s,t){"use strict";t.d(s,{W:function(){return AssetInput}});var a=t(57437),l=t(81628),n=t(20373),i=t(57042),c=t(16691),d=t.n(c),r=t(2265),o=t(16775),x=t(28881);function AssetInput(e){let{asset:s="ETH",checkBalance:t=!0,balance:c,balanceTit:m="Balance",balanceDecimals:u=18,exchange:h,readonly:f,selected:p,onClick:v,amount:b,setAmount:g,price:j,disable:S,hasInput:N=!1,options:w,onChange:y=()=>{},defaultValue:k,balanceClassName:B="",disableNegative:C}=e,A=(0,r.useRef)(null),T=t&&void 0!==c&&(0,l.su)("number"==typeof b?b+"":b||"")>("bigint"==typeof c?c:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{v&&!S&&v()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(d(),{width:24,height:24,src:"/".concat(s,".svg"),alt:""}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[N?(0,a.jsx)(x.ZP,{options:w,onChange:y,defaultValue:k,styles:{control:(e,s)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,a.jsx)("div",{children:s}),j&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:j})]}),h&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",h]})]})]}),(0,a.jsx)("input",{value:b,onChange:e=>{let s=(e.target.value||"").replaceAll("-","").replaceAll("+","");g(s)},ref:A,type:"number",disabled:S,className:(0,i.Z)(f?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400 ":!T},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none "),placeholder:"0.000",pattern:"[0-9.]{36}",step:.01,title:"",readOnly:f})]}),void 0!=c&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{className:B,children:[(0,a.jsxs)("span",{children:[m,": ",(0,n.Rp)(c,3,u)]}),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,o.b)(c,u);g(e),v&&!S&&v()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},72084:function(e,s,t){"use strict";t.d(s,{$:function(){return Spinner}});var a=t(57437);let Spinner=e=>{let{className:s}=e;return(0,a.jsxs)("svg",{fill:"none",className:s?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,s,t){"use strict";t.d(s,{C:function(){return Tip}});var a=t(57437),l=t(75224),n=t(40311);function Tip(e){let{children:s,node:t}=e,i=document.getElementById("tooltip-root");return(0,a.jsx)(l.zt,{children:(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,children:t?(0,a.jsx)("div",{className:"inline-block cursor-default",style:{verticalAlign:"text-bottom"},children:t}):(0,a.jsx)("div",{className:"inline-block px-[3px] cursor-default relative",style:{transform:"translateY(-6%)"},children:(0,a.jsx)(n.apP,{className:"inline-block stroke-slate-500",style:{fontSize:"1.3em"}})})}),(0,a.jsx)(l.h_,{container:i,children:(0,a.jsxs)(l.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[s,(0,a.jsx)(l.Eh,{})]})})]})})}},43003:function(e,s,t){"use strict";t.d(s,{R:function(){return useWrapContractWrite}});var a=t(81628),l=t(2265),n=t(71424),i=t(56926);function useWrapContractWrite(e){let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[t,c]=(0,l.useState)(!1),[d,r]=(0,l.useState)(!1),o=(0,i.t_)(),{data:x}=(0,i.py)(),m=!o||!x||!x.account||t||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!m){c(!0),r(!1);try{let t="function"==typeof e?await e():e,{request:a}=await o.simulateContract({account:x.account,...t}),l=await x.writeContract(a),i=await o.waitForTransactionReceipt({hash:l});if("success"!==i.status)throw"Transaction reverted";r(!0),t.onSuccess&&t.onSuccess({}),s&&n.A.success("Transaction success")}catch(e){s&&n.A.error((0,a.az)(e))}c(!1)}};return{write,isDisabled:m,isLoading:t,isSuccess:d}}},20373:function(e,s,t){"use strict";t.d(s,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=t(16775),l=t(79352);let displayBalanceWithUnit=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let l=10**s;return(Math.floor(Number((0,a.b)(e,t))*l)/l).toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalance=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=Number((0,l.d)(e)),a=Number((.1**s).toFixed(s));return t>0&&t<a?"<"+a:t<0&&t>-a?">-"+a:t.toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalanceWithoutFormat=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=10**s;return String(Math.floor(Number((0,l.d)(e))*t)/t)}}},function(e){e.O(0,[1866,9472,3033,1787,5986,5058,7202,930,8156,4725,9356,2128,4584,3608,4322,2971,2472,1744],function(){return e(e.s=26295)}),_N_E=e.O()}]);