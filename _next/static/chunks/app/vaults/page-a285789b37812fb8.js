(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1399],{26295:function(e,s,a){Promise.resolve().then(a.bind(a,41706))},41706:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Vaults}});var t=a(57437),l=a(72009),n=a(14389),i=a(55139),d=a(2890),c=a.n(d),o=a(16691),x=a.n(o),r=a(2265),m=a(76036),u=a(80547),b=a(64020),h=a(34873),v=a(8580),f=a(54415),p=a(81628),j=a(15898),g=a(20373),N=a(34522),S=a(41697),w=a(99888),k=a(35769),y=a(79352);let C="$USB";function VaultCard(e){let{vc:s}=e,{balances:a,prices:i,vaultsMode:d}=(0,r.useContext)(j.g),c=(0,n.p)(),o=l.O6[c],x=d[s.vault],[A,T]=(0,r.useState)("mint"),[B,U]=(0,r.useMemo)(()=>{let e="mint"==A;return 3==x?["Adjustment Model--High AAR",e?"Minting ".concat(C," alone is feasible"):"Redeeming ".concat(s.xTokenSymbol," alone is feasible")]:2==x?["Adjustment Model--Low AAR",e?"Minting ".concat(s.xTokenSymbol," alone is feasible"):"Redeeming ".concat(C," alone is feasible")]:["Stability Model",e?"".concat(C," and ").concat(s.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(C," and ").concat(s.xTokenSymbol)]},[x,s,A]),[M,W]=(0,r.useState)(""),[V,q]=(0,r.useState)(""),P=(0,p.ok)(i,s.assetTokenAddress),R=(0,p.ok)(i,s.xTokenAddress),F=a[s.assetTokenAddress],E=a[l.O1[c]],D=a[s.xTokenAddress],[{usbAmount:_,xAmount:z,redeemActive:Z,redeemFocus:O},L]=(0,w.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),H=(0,r.useMemo)(()=>({contracts:[{vc:s,abi:h.Wn,address:o,functionName:"calcMintPairs",args:[s.vault,(0,p.su)(M||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcMintUsbAboveAARU",args:[s.vault,(0,p.su)(M||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcMintMarginTokensBelowAARS",args:[s.vault,(0,p.su)(M||"0")]}],watch:!0,enabled:"mint"==A}),[s,M,A]),{data:[Y,I,X]=[void 0,void 0,void 0]}=(0,f.uX)(H),K=(0,p.ok)(Y,["result",1]),$=(0,p.ok)(Y,["result",2]),G=(0,p.ok)(I,["result",1]),J=(0,p.ok)(X,["result",1]),{data:[Q,ee]=[void 0,void 0]}=(0,f.uX)({contracts:[{vc:s,abi:h.Wn,address:o,functionName:"calcPairdMarginTokenAmount",args:[s.vault,(0,p.su)(_||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcPairedUsbAmount",args:[s.vault,(0,p.su)(z||"0")]}],watch:!0,enabled:"redeem"==A}),{data:[es,ea]=[void 0,void 0]}=(0,f.uX)({contracts:[{vc:s,abi:h.Wn,address:o,functionName:"calcRedeemByMarginTokenAboveAARU",args:[s.vault,(0,p.su)(z||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcRedeemByUsbBelowAARS",args:[s.vault,(0,p.su)(_||"0")]}],watch:!0,enabled:"redeem"==A}),et=(0,p.ok)(Q,["result"]),el=(0,p.ok)(ee,["result"]),en=(0,p.ok)(es,["result",1]),ei=(0,p.ok)(ea,["result",1]),ed=Z==s.xTokenSymbol,ec="USB"==Z,eo=(0,r.useMemo)(()=>{let e={vc:s,abi:h.WW,address:s.vault,args:[(0,p.su)(M)],value:s.assetTokenAddress==l.K8?(0,p.su)(M):0n,functionName:"mintPairs"};return"USB"==V&&(e.functionName="mintUsbAboveAARU"),V==s.xTokenSymbol&&(e.functionName="mintMarginTokensBelowAARS"),e},[x,V,M,s]),ex=V==s.xTokenSymbol?0n:"USB"===V?G:K,er="USB"==V?0n:V===s.xTokenSymbol?J:$,em=ed?"0":"USB"==O?_:(0,y.d)(el),eu=ec?"0":O==s.xTokenSymbol?z:(0,y.d)(et),eb=(0,r.useMemo)(()=>({vc:s,watch:!0,abi:h.Wn,address:o,functionName:"calcPairedRedeemAssetAmount",args:[s.vault,(0,p.su)(eu||"0")]}),[s,eu]),{data:eh}=(0,f.D2)(eb),ev=ed?en:ec?ei:(0,p.ok)(eh,[1]),ef=(0,r.useMemo)(()=>{let e={vc:s,abi:h.WW,address:s.vault,functionName:"USB"==Z?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==Z?[(0,p.su)(em)]:[(0,p.su)(eu)]};return Z==s.xTokenSymbol&&(e.functionName="redeemByMarginTokenAboveAARU",e.args=[(0,p.su)(eu)]),"USB"==Z&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,p.su)(em)]),e},[x,Z,em,eu,s]);return(0,t.jsxs)("div",{className:(0,k.m)("card relative h-[460px]",x>1?"!bg-violet-500/10":""),children:[(0,t.jsx)("div",{className:"page-sub text-center",children:"Advanced Panel"}),(0,t.jsx)("div",{className:"absolute top-[50px] right-6 flex flex-col items-end z-10",children:(0,t.jsxs)("div",{className:(0,k.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,t.jsx)("div",{className:(0,k.m)("w-3 h-3 rounded-full","Stability Model"==B?"bg-green-500":"bg-red-500")}),(0,t.jsx)(b.C,{node:(0,t.jsx)("div",{className:(0,k.m)("Stability Model"==B?"text-green-500":"text-red-500"),children:B}),children:U})]})}),(0,t.jsx)("div",{className:"relative flex items-center justify-between",children:(0,t.jsxs)(N.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>T(e),children:[(0,t.jsxs)(N.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,t.jsx)(N.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,t.jsx)(N.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,t.jsx)(N.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(u.W,{asset:s.assetTokenSymbol,exchange:(0,g.dq)(P*(0,p.su)(M)/v.Pq),balance:F,amount:M,setAmount:W}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,t.jsx)(S.gPZ,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(u.W,{amount:(0,g.ZM)(ex),onClick:()=>{q(3==x?"USB":"")},asset:"USB",exchange:(0,g.dq)(ex),readonly:!0,disable:x<=1,selected:"USB"===V}),(0,t.jsx)(u.W,{amount:(0,g.ZM)(er),onClick:()=>{q(2==x?s.xTokenSymbol:"")},asset:s.xTokenSymbol,exchange:(0,g.dq)(R*er/v.Pq),readonly:!0,disable:x<=1,selected:V===s.xTokenSymbol})]}),(0,t.jsx)(m.v,{tx:"Mint",disabled:s.disableIn||0n==(0,p.su)(M)||(0,p.su)(M)>F,onTxSuccess:()=>{W("")},config:eo,approves:{[s.assetTokenAddress]:(0,p.su)(M)},spender:s.vault})]})}),(0,t.jsx)(N.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(u.W,{amount:em,setAmount:e=>L({usbAmount:e}),balance:E,onClick:()=>{L({redeemActive:2==x?"USB":"",redeemFocus:"USB"})},asset:"USB",exchange:(0,g.dq)((0,p.su)(em)),readonly:Z==s.xTokenSymbol,selected:"USB"===Z}),(0,t.jsx)(u.W,{amount:eu,setAmount:e=>L({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{L({redeemActive:3==x?s.xTokenSymbol:"",redeemFocus:s.xTokenSymbol})},exchange:(0,g.dq)((0,p.su)(eu)*R/v.Pq),balance:D,readonly:"USB"==Z,selected:Z===s.xTokenSymbol})]}),(0,t.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,t.jsx)(S.gPZ,{})}),(0,t.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end whitespace-nowrap",children:"Redemption Fee: 0.5%"})]}),(0,t.jsx)("div",{className:"w-full text-end"}),(0,t.jsx)(u.W,{asset:s.assetTokenSymbol,amount:(0,y.d)(ev),exchange:(0,g.dq)(P*ev/v.Pq),readonly:!0}),(0,t.jsx)(m.v,{tx:"Redeem",config:ef,disabled:ec&&0n==(0,p.su)(em)||ed&&0n==(0,p.su)(eu)||!ec&&!ed&&(0n==(0,p.su)(em)||0n==(0,p.su)(eu))||(0,p.su)(em)>E||(0,p.su)(eu)>D,onTxSuccess:()=>{L({usbAmount:"",xAmount:""})},spender:s.vault})]})})]})})]})}var A=a(91056),T=a(28712),B=a(55414),U=a(57042),M=a(37238),W=a(56926),V=a(34776),q=a(51549);function StableVaultCard(e){let{vc:s}=e,{balances:a,prices:i,stableVaultsState:d}=(0,r.useContext)(j.g),c=(0,n.p)(),o=l.O6[c],[x,C]=(0,r.useState)("mint"),[A,T]=(0,r.useState)(""),[B,U]=(0,r.useState)(""),M=d[s.vault],W=M.aar>0&&M.aar<M.AARS,V=i[s.assetTokenAddress],q=i[s.xTokenAddress],P=a[s.assetTokenAddress],R=a[l.O1[c]],F=a[s.xTokenAddress],[{usbAmount:E,xAmount:D,redeemActive:_,redeemFocus:z},Z]=(0,w.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),O=(0,r.useMemo)(()=>({contracts:[{vc:s,abi:h.Wn,address:o,functionName:"calcMintPairsFromStableVault",args:[s.vault,(0,p.su)(A||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcMintUsbFromStableVault",args:[s.vault,(0,p.su)(A||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,p.su)(A||"0")]}],watch:!0,enabled:"mint"==x}),[s,A,x]),{data:[L,H,Y]=[void 0,void 0,void 0]}=(0,f.uX)(O),I=(0,p.ok)(L,["result",1]),X=(0,p.ok)(L,["result",2]),K=(0,p.ok)(H,["result",1]),$=(0,p.ok)(Y,["result",1]),{data:[G,J]=[void 0,void 0]}=(0,f.uX)({contracts:[{vc:s,abi:h.Wn,address:o,functionName:"calcPairdMarginTokenAmountForStableVault",args:[s.vault,(0,p.su)(E||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcPairedUsbAmountForStableVault",args:[s.vault,(0,p.su)(D||"0")]}],watch:!0,enabled:"redeem"==x}),{data:[Q,ee]=[void 0,void 0]}=(0,f.uX)({contracts:[{vc:s,abi:h.Wn,address:o,functionName:"calcRedeemByMarginTokensFromStableVault",args:[s.vault,l.e_[c],(0,p.su)(D||"0")]},{vc:s,abi:h.Wn,address:o,functionName:"calcRedeemByUsbFromStableVault",args:[s.vault,l.e_[c],(0,p.su)(E||"0")]}],watch:!0,enabled:"redeem"==x}),es=(0,p.ok)(G,["result"]),ea=(0,p.ok)(J,["result"]),et=(0,p.ok)(Q,["result",1]),el=(0,p.ok)(ee,["result",1]),en=_==s.xTokenSymbol,ei="USB"==_,ed=(0,r.useMemo)(()=>{let e={vc:s,abi:h.S4,address:s.vault,args:[(0,p.su)(A)],value:s.assetTokenAddress==l.K8?(0,p.su)(A):0n,functionName:"mintPairs"};return"USB"==B&&(e.functionName="mintUsb"),B==s.xTokenSymbol&&(e.functionName="mintMarginTokens"),e},[B,A,s]),ec=B==s.xTokenSymbol?0n:"USB"===B?K:I,eo="USB"==B?0n:B===s.xTokenSymbol?$:X,ex=en?"0":"USB"==z?E:(0,y.d)(ea),er=ei?"0":z==s.xTokenSymbol?D:(0,y.d)(es),em=(0,r.useMemo)(()=>({vc:s,watch:!0,abi:h.Wn,address:o,functionName:"calcRedeemByPairsAssetAmountForStableVault",args:[s.vault,l.e_[c],(0,p.su)(er||"0")]}),[s,er]),{data:eu}=(0,f.D2)(em),eb=en?et:ei?el:(0,p.ok)(eu,[1]),eh=(0,r.useMemo)(()=>{let e={vc:s,abi:h.S4,address:s.vault,functionName:"USB"==_?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==_?[(0,p.su)(ex)]:[(0,p.su)(er)]};return _==s.xTokenSymbol&&(e.functionName="redeemByMarginTokens",e.args=[(0,p.su)(er)]),"USB"==_&&(e.functionName="redeemByUsb",e.args=[(0,p.su)(ex)]),e},[_,ex,er,s]);return(0,t.jsxs)("div",{className:(0,k.m)("card relative h-[460px]"),children:[(0,t.jsx)("div",{className:"page-sub text-center",children:"Advanced Panel"}),(0,t.jsx)("div",{className:"absolute top-[50px] right-6 flex flex-col items-end z-10",children:(0,t.jsx)(b.C,{node:(0,t.jsxs)("div",{className:(0,k.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,t.jsx)("div",{className:(0,k.m)("w-3 h-3 rounded-full",W?"bg-red-500":"bg-green-500")}),(0,t.jsx)("div",{className:(0,k.m)(W?"text-red-500":"text-green-500"),children:W?"Adjustment Model":"Stability Model"})]}),children:W?"mint"==x?"Minting USB alone is not feasible":"Redeeming USDBx alone is not feasible":""})}),(0,t.jsx)("div",{className:"relative flex items-center justify-between",children:(0,t.jsxs)(N.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>C(e),children:[(0,t.jsxs)(N.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,t.jsx)(N.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,t.jsx)(N.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,t.jsx)(N.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(u.W,{asset:s.assetTokenSymbol,exchange:(0,g.dq)(V*(0,p.su)(A)/v.Pq),balance:P,amount:A,setAmount:T}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,t.jsx)(S.gPZ,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(u.W,{amount:(0,g.ZM)(ec),onClick:()=>{U(W?"":"USB"==B?"":"USB")},asset:"USB",exchange:(0,g.dq)(ec),readonly:!0,selected:"USB"===B}),(0,t.jsx)(u.W,{amount:(0,g.ZM)(eo),onClick:()=>{U(B==s.xTokenSymbol?"":s.xTokenSymbol)},asset:s.xTokenSymbol,exchange:(0,g.dq)(q*eo/v.Pq),readonly:!0,selected:B===s.xTokenSymbol})]}),(0,t.jsx)(m.v,{tx:"Mint",disabled:s.disableIn||0n==(0,p.su)(A)||(0,p.su)(A)>P,onTxSuccess:()=>{T("")},config:ed,approves:{[s.assetTokenAddress]:(0,p.su)(A)},spender:s.vault})]})}),(0,t.jsx)(N.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(u.W,{amount:ex,setAmount:e=>Z({usbAmount:e}),balance:R,onClick:()=>{Z({redeemActive:"USB"==_?"":"USB",redeemFocus:"USB"})},asset:"USB",exchange:(0,g.dq)((0,p.su)(ex)),readonly:_==s.xTokenSymbol,selected:"USB"===_}),(0,t.jsx)(u.W,{amount:er,setAmount:e=>Z({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{Z({redeemActive:W?"":_==s.xTokenSymbol?"":s.xTokenSymbol,redeemFocus:s.xTokenSymbol})},exchange:(0,g.dq)((0,p.su)(er)*q/v.Pq),balance:F,readonly:"USB"==_,selected:_===s.xTokenSymbol})]}),(0,t.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,t.jsx)(S.gPZ,{})}),(0,t.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end whitespace-nowrap",children:"Redemption Fee: 0.5%"})]}),(0,t.jsx)("div",{className:"w-full text-end"}),(0,t.jsx)(u.W,{asset:s.assetTokenSymbol,amount:(0,y.d)(eb),exchange:(0,g.dq)(V*eb/v.Pq),readonly:!0}),(0,t.jsx)(m.v,{tx:"Redeem",config:eh,disabled:ei&&0n==(0,p.su)(ex)||en&&0n==(0,p.su)(er)||!ei&&!en&&(0n==(0,p.su)(ex)||0n==(0,p.su)(er))||(0,p.su)(ex)>R||(0,p.su)(er)>F,onTxSuccess:()=>{Z({usbAmount:"",xAmount:""})},spender:s.vault})]})})]})})]})}let P=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,t.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),R=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,t.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),F=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C",strokeWidth:"4"})}),E=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D",strokeWidth:"4"})}),D=(0,t.jsx)("div",{className:"mr-[10px]",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,t.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})}),_=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 20",fill:"none",children:(0,t.jsx)("path",{d:"M20.75 8.00223C20.7 7.61046 20.45 7.26767 20 7.16973H19.95C19.05 6.97385 18.4 6.48414 17.9 5.65164C17.45 4.91709 17.3 3.98665 17.6 3.15415C17.75 2.81135 17.65 2.37062 17.3 2.0768C16.35 1.19533 15.2 0.509741 13.9 0.0690067C13.55 -0.0779047 13.15 0.0200363 12.8 0.36283C12.25 1.04842 11.4 1.39121 10.45 1.39121C9.6 1.39121 8.8 0.999446 8.1 0.313859C7.7 -0.0779047 7.3 -0.0289342 7 0.0690067C5.7 0.607682 4.6 1.2443 3.65 2.02783C3.3 2.27268 3.15 2.71341 3.3 3.10518C3.55 4.03562 3.45 4.91709 3 5.70061C2.6 6.3862 1.85 6.92488 0.95 7.16973C0.9 7.16973 0.9 7.16973 0.85 7.2187C0.55 7.36561 0.35 7.61046 0.2 7.95326V8.00223C0.05 8.73678 0 9.3734 0 10.01C0 10.6466 0.05 11.3812 0.2 11.9688C0.25 12.3606 0.5 12.7034 0.95 12.8013H1C1.9 12.9972 2.55 13.4869 3.05 14.3194C3.5 15.054 3.65 15.9844 3.35 16.8169C3.2 17.1597 3.3 17.6004 3.65 17.8943C4.6 18.7757 5.75 19.4613 7.1 19.9021C7.15 19.9021 7.2 19.951 7.3 19.951H7.45C7.7 19.951 8 19.8531 8.25 19.6082C8.8 18.9716 9.65 18.5799 10.6 18.5799C11.45 18.5799 12.25 18.9716 12.95 19.6572C13.15 19.8531 13.4 20 13.65 20C13.75 20 13.9 20 14 19.951C15.3 19.4124 16.4 18.7757 17.35 17.9922C17.7 17.7963 17.85 17.3066 17.7 16.9149C17.45 15.9844 17.55 15.1029 18 14.3194C18.4 13.6338 19.15 13.0952 20.05 12.8503C20.1 12.8503 20.1 12.8503 20.15 12.8013C20.45 12.6544 20.65 12.4096 20.8 12.0668V12.0178C20.95 11.2833 21 10.6466 21 10.01C20.95 9.32443 20.9 8.63884 20.75 8.00223ZM10.45 13.389C8.5 13.389 6.95 11.8709 6.95 9.96105C6.95 8.0512 8.5 6.53311 10.45 6.53311C12.4 6.53311 13.95 8.0512 13.95 9.96105C13.95 11.8709 12.4 13.389 10.45 13.389Z",fill:"#6466F1"})});function VaultSimple(e){let{vc:s}=e,{balances:a,prices:i,vaultsMode:d,stableVaultsState:c}=(0,r.useContext)(j.g),o=(0,p.ok)(i,s.assetTokenAddress),x=d[s.vault],b=s.assetTokenSymbol,[S,w]=(0,r.useState)("deposit"),[k,y]=(0,r.useState)(""),C=(0,p.su)(k),A=s.xTokenSymbol,B=a[s.assetTokenAddress],U=c[s.vault],[M,W]=(0,r.useState)(""),V=(0,n.p)(),{data:P}=(0,f.D2)({watch:!0,vc:s,abi:h.Wn,address:l.O6[V],functionName:s.isStable?"calcMintPairsFromStableVault":"calcMintPairs",args:[s.vault,(0,p.su)("1")]}),{data:R}=(0,f.D2)({abi:h.Wn,address:l.O6[V],functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,p.su)("1")],enabled:s.isStable,watch:!0}),F=s.isStable&&0n==U.M_USDCx?0n:(0,p.ok)(P,[1]),E=s.isStable&&0n==U.M_USDCx?(0,p.ok)(R,[1]):(0,p.ok)(P,[2]),D=a[l.O1[V]],z=a[s.xTokenAddress],Z=(0,p.NA)([E>0n?z*v.Pq/E:0n,F>0n?D*v.Pq/F:0n]),O=(0,p.su)(M),L=(0,r.useMemo)(()=>{let e={vc:s,abi:s.isStable?h.S4:h.WW,address:s.vault,functionName:"redeemByPairsWithExpectedMarginTokenAmount",args:[O*E/v.Pq]};return e},[x,O,E,s]);return(0,t.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,t.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,t.jsxs)(T.fC,{children:[(0,t.jsx)(T.xz,{children:(0,t.jsx)("div",{className:"absolute w-[21px] h-[21px] right-[20px] top-[30px] cursor-pointer hover:bg-indigo-500 hover:bg-opacity-50",children:_})}),(0,t.jsxs)(T.h_,{children:[(0,t.jsx)(T.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,t.jsx)(T.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:s.isStable?(0,t.jsx)(StableVaultCard,{vc:s}):(0,t.jsx)(VaultCard,{vc:s})})]})]}),(0,t.jsxs)(N.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>w(e),children:[(0,t.jsxs)(N.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,t.jsx)(N.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,t.jsx)(N.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,t.jsx)(N.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(u.W,{asset:b,exchange:(0,g.dq)(o*C/v.Pq),balance:B,amount:k,setAmount:y}),(0,t.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,t.jsx)(q.c,{className:"mx-1",symbol:b,size:12}),b," = ",(0,g.dq)(E)," ",(0,t.jsx)(q.c,{className:"mx-1",symbol:A,size:12})," ",b,"x +",(0,g.dq)(F)," ",(0,t.jsx)(q.c,{className:"mx-1",symbol:"USB",size:12})," USB"]}),(0,t.jsx)(m.v,{tx:"Deposit",disabled:s.disableIn||C<=0n||C>B,onTxSuccess:()=>{y("")},config:{abi:h.S4,address:s.vault,args:[C],value:s.assetTokenAddress==l.K8?C:0n,functionName:s.isStable&&0n==U.M_USDCx?"mintMarginTokens":"mintPairs"},approves:{[s.assetTokenAddress]:C},spender:s.vault})]})}),(0,t.jsx)(N.VY,{value:"withraw",className:"flex flex-col gap-6",children:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{className:"flex flex-col gap-2",children:(0,t.jsx)(u.W,{amount:M,setAmount:W,balance:Z,balanceTit:"Redeemable amount",asset:b,exchange:(0,g.dq)(o*O/v.Pq)})}),(0,t.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,t.jsxs)("span",{className:"flex",children:[A," Balance：",(0,t.jsx)(q.c,{className:"mx-1",symbol:A,size:12})," ",(0,g.dq)(z)]}),(0,t.jsxs)("span",{className:"flex",children:["USB Balance: ",(0,t.jsx)(q.c,{className:"mx-1",symbol:"USB",size:12})," ",(0,g.dq)(D)]})]}),(0,t.jsx)(m.v,{tx:"Withdraw",config:L,disabled:0n==F||0n==E||O<=0n||O>Z,onTxSuccess:()=>{console.info("Redeem onSuccess:"),W("")},spender:s.vault})]})})]})]})})}let ExpandUI=e=>{let{onClick:s,isOpen:a}=e;return(0,t.jsx)("div",{className:"flex md:hidden justify-center  items-center py-5",children:(0,t.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer ",onClick:s,children:[(0,t.jsx)("span",{className:"mr-[5px]",children:a?"Hide":"Details"}),a?R:P]})})};function VaultCollapse(e){let{vc:s}=e,a=(0,n.p)(),{balances:i,prices:d,vaultsMode:c,vaultsState:o,stableVaultsState:x,vaultsDiscount:m}=(0,r.useContext)(j.g),u=function(e){let{vaultsState:s,stableVaultsState:a}=(0,r.useContext)(j.g),t=s[(null==e?void 0:e.vault)||"null"],l=a[(null==e?void 0:e.vault)||"null"],n=(null==e?void 0:e.isStable)?(0,p.pF)(l.aar,l.AARDecimals):(0,p.pF)(t.aar,t.AARDecimals);return Math.max(0,1+1/(n-1))}(s),h=(0,p.ok)(d,s.assetTokenAddress),f=o[s.vault],N=x[s.vault],S=s.isStable?N.M_USDC:f.M_ETH,w=s.isStable?N.M_USDCx:f.M_ETHx,k=s.isStable?N.M_USB_USDC:f.M_USB_ETH,y=(0,g.dq)(S),C=(0,g.dq)(w),T=(0,g.dq)(S*h/v.Pq),U=(0,g.dq)(k),_=s.isStable?(0,p.Rr)(N.aar,N.AARDecimals):(0,p.Rr)(f.aar,f.AARDecimals),z=c[s.vault],Z=w>0n?i[s.xTokenAddress]*S/w:0n,O=w>0n?-(i[s.xTokenAddress]*k)/w:0n,L=m[s.vault],{address:H}=(0,W.mA)(),[Y,I]=(0,r.useState)(!1),X=s.xTokenSymbol,onCollapseChange=()=>{I(!Y)},{data:K}=(0,W.py)();return(0,t.jsxs)("div",{className:"border border-solid border-[#E4E4E7] rounded-2xl overflow-hidden bg-white",children:[(0,t.jsxs)("div",{className:"w-full flex flex-col gap-5 md:flex-row justify-between items-center bg-white p-4 md:p-10",children:[(0,t.jsxs)("div",{className:"flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5",children:[(0,t.jsxs)("div",{className:"flex w-full md:w-[10rem] flex-shrink-0",children:[(0,t.jsx)(q.c,{symbol:s.assetTokenSymbol,size:32}),(0,t.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-black text-sm font-semibold whitespace-nowrap",children:s.assetTokenSymbol}),(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-medium",children:["$",(0,g.dq)(d[s.assetTokenAddress])]})]})]}),(0,t.jsx)("div",{className:"h-[1px] w-full bg-[#E4E4E7] md:hidden"}),(0,t.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 gap-y-[2rem] md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0",children:[(0,t.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Total Deposit"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(q.c,{symbol:s.assetTokenSymbol,size:14}),(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:y})]}),(0,t.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$",T]})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"USB Debt"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(q.c,{className:"mx-1",symbol:"USB",size:14}),(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:U})]})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:[X,(0,t.jsx)(b.C,{children:"This is a margin token, representing open position in the vault."})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(q.c,{className:"mx-1",symbol:X,size:14}),(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:C})]})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:["AAR",(0,t.jsx)(b.C,{children:"Asset Adequacy Ratio"})]}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:_})})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Status"}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:z<=1?F:E}),z<=1?"Stability":"Adjustment"]})})})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Discount Offer"}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:L?(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:E}),"Yes"]}):(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:F}),"No"]})})})]})]})]}),(0,t.jsxs)("div",{className:"items-center text-xs text-[#6466F1] cursor-pointer hidden md:flex",onClick:onCollapseChange,children:[(0,t.jsx)("span",{className:"mr-[5px]",children:Y?"Hide":"Details"}),Y?R:P]})]}),(0,t.jsx)(M.Collapse,{isOpened:Y,className:"ease-linear",children:(0,t.jsxs)("div",{className:"w-full rounded-b-[16px] bg-[#F2F5F9] p-4 md:p-6",children:[(0,t.jsxs)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"hidden md:flex",children:[(0,t.jsx)("div",{className:"md:h-full mb-5 md:mb-0 flex items-center",children:(0,t.jsxs)("div",{className:"flex mr-[55px]",children:[(0,t.jsx)(q.c,{symbol:s.xTokenSymbol,size:32,className:"shrink-0"}),(0,t.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,t.jsx)("div",{className:"text-black text-sm font-semibold",children:X}),(0,t.jsxs)("div",{className:"text-[#64748B] text-xs font-medium leading-[14px]",children:["$",(0,g.dq)(d[s.xTokenAddress])]})]})]})}),(0,t.jsxs)("div",{className:"w-full min-h-[108px] flex flex-col justify-center",children:[H&&!s.isStable&&(0,t.jsxs)("div",{className:"h-[84px] w-fit self-end p-[20px] shrink-0 text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-l-2xl rounded-t-2xl mb-[10px] whitespace-nowrap",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-[16px] gap-5",children:[(0,t.jsx)("div",{children:"Open Position"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(q.c,{className:"mr-1",symbol:s.assetTokenSymbol,size:12}),(0,g.dq)(Z)]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mb-[16px] gap-5",children:[(0,t.jsxs)("div",{children:["Margin Loan",(0,t.jsxs)(b.C,{children:["Repay your margin loan to redeem ",s.assetTokenSymbol," corresponding to your open position."]})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(q.c,{className:"mr-1",symbol:"USB",size:12}),(0,g.dq)(O)]})]})]}),(0,t.jsxs)("div",{className:"text-[#64748B] w-fit text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-r-2xl rounded-b-2xl",children:[(0,t.jsxs)("div",{className:"flex items-center mb-[16px]",children:[D,u.toFixed(2),"x"," ",(0,A.WA)()&&s.isStable?"Blast Native Yield":"Leveraged long on ".concat(s.assetTokenSymbol)]}),(0,t.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{s&&(null==K||K.watchAsset({type:"ERC20",options:{address:s.xTokenAddress,symbol:s.xTokenSymbol,decimals:18}}).catch(p.S3))},children:[D,"Add ",s.xTokenSymbol," to wallet"]}),(0,t.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{null==K||K.watchAsset({type:"ERC20",options:{address:l.O1[a],symbol:"USB",decimals:18}}).catch(p.S3)},children:[D,"Add USB to wallet"]}),(0,t.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:()=>{var e,t;let l=A.Af.find(e=>e.id==a);l&&s&&open("".concat(null===(t=l.blockExplorers)||void 0===t?void 0:null===(e=t.default)||void 0===e?void 0:e.url,"/address/").concat(s.vault),"_blank")},children:[D,"View contract"]})]})]})]}),(0,t.jsx)("div",{className:"w-full  flex items-center justify-center",children:H&&s?(0,t.jsx)(VaultSimple,{vc:s}):s?(0,t.jsx)(V.Z,{}):(0,t.jsx)(B.Z,{className:"rounded",children:"Comming soon"})})]}),(0,t.jsx)(ExpandUI,{onClick:onCollapseChange,isOpen:Y})]})}),!Y&&(0,t.jsx)(ExpandUI,{onClick:onCollapseChange,isOpen:Y})]})}function GroupVaultCollapse(e){let{vcs:s}=e,[a,l]=(0,r.useState)(s[s.length-1]);return a?1==s.length?(0,t.jsx)(VaultCollapse,{vc:s[0]}):(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(VaultCollapse,{vc:a}),(0,t.jsx)("div",{className:"absolute z-10 right-[50px] top-0 flex text-sm",children:s.map((e,s)=>(0,t.jsx)("div",{className:(0,U.Z)("cursor-pointer rounded-b-full border border-blue-500 px-1 py-1",{"bg-white text-black":a!==e,"bg-blue-500 text-white":a===e}),onClick:()=>l(e),children:"V".concat(s+1)},"gvc_"+s))})]}):null}function Vaults(){let e=(0,n.p)(),s=l.iK[e],a=(0,r.useMemo)(()=>Object.values(c().groupBy(s,"assetTokenSymbol")),[s]);return(0,t.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,t.jsx)("h2",{className:"page-title",children:"Vaults"}),(0,t.jsxs)("div",{className:"w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,t.jsx)("div",{className:"min-w-[21px] mt-[5px]",children:(0,t.jsx)(x(),{width:16,height:14,src:"./vector.png",alt:"vector"})}),(0,t.jsx)("span",{className:"text-sm ml-1",children:"Depositing assets into the Vaults not only yields protocol income but also qualifies for Blast Developer Airdrop."})]}),(0,t.jsx)(i.r,{numItemsMd:1,className:"gap-3 mt-4",children:a.map((e,s)=>(0,t.jsx)(GroupVaultCollapse,{vcs:e},"group_vault_item_".concat(s)))})]})}}},function(e){e.O(0,[1866,9472,1787,3033,4102,4282,7240,4725,612,7209,9356,5224,4584,6302,4270,4322,3286,2971,2472,1744],function(){return e(e.s=26295)}),_N_E=e.O()}]);