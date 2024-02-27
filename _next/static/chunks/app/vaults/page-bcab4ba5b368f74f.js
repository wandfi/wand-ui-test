(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1399],{35883:function(){},55139:function(e,s,t){"use strict";t.d(s,{r:function(){return a.Z}});var a=t(87456)},26295:function(e,s,t){Promise.resolve().then(t.bind(t,41706))},41706:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Vaults}});var a=t(57437),l=t(91056),n=t(72009),i=t(15898),d=t(55139),c=t(16691),r=t.n(c),o=t(2265),x=t(76036),m=t(80547),u=t(64020),h=t(84486),f=t(8580),p=t(54415),b=t(81628),v=t(20373),j=t(34522),g=t(41697),N=t(99888),S=t(35769),w=t(79352);let y="$USB";function VaultCard(e){let{vc:s}=e,{balances:t,prices:d,vaultsMode:c}=(0,o.useContext)(i.g),r=n.O6[(0,l.BV)()],k=c[s.vault],[C,A]=(0,o.useState)("mint"),[B,T]=(0,o.useMemo)(()=>{let e="mint"==C;return 3==k?["Adjustment Model--High AAR",e?"Minting ".concat(y," alone is feasible"):"Redeeming ".concat(s.xTokenSymbol," alone is feasible")]:2==k?["Adjustment Model--Low AAR",e?"Minting ".concat(s.xTokenSymbol," alone is feasible"):"Redeeming ".concat(y," alone is feasible")]:["Stability Model",e?"".concat(y," and ").concat(s.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(y," and ").concat(s.xTokenSymbol)]},[k,s,C]),[U,M]=(0,o.useState)(""),[V,W]=(0,o.useState)(""),q=(0,b.ok)(d,s.assetTokenAddress),R=(0,b.ok)(d,s.xTokenAddress),P=t[s.assetTokenAddress],F=t[n.O1[(0,l.BV)()]],E=t[s.xTokenAddress],[{usbAmount:z,xAmount:D,redeemActive:_,redeemFocus:O},Z]=(0,N.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),L=(0,o.useMemo)(()=>({contracts:[{vc:s,abi:h.Wn,address:r,functionName:"calcMintPairs",args:[s.vault,(0,b.su)(U||"0")]},{vc:s,abi:h.Wn,address:r,functionName:"calcMintUsbAboveAARU",args:[s.vault,(0,b.su)(U||"0")]},{vc:s,abi:h.Wn,address:r,functionName:"calcMintMarginTokensBelowAARS",args:[s.vault,(0,b.su)(U||"0")]}],watch:!0,enabled:"mint"==C}),[s,U,C]),{data:[I,H,Y]=[void 0,void 0,void 0]}=(0,p.uX)(L),$=(0,b.ok)(I,["result",1]),X=(0,b.ok)(I,["result",2]),K=(0,b.ok)(H,["result",1]),G=(0,b.ok)(Y,["result",1]),{data:[J,Q]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:s,abi:h.Wn,address:r,functionName:"calcPairdMarginTokenAmount",args:[s.vault,(0,b.su)(z||"0")]},{vc:s,abi:h.Wn,address:r,functionName:"calcPairedUsbAmount",args:[s.vault,(0,b.su)(D||"0")]}],watch:!0,enabled:"redeem"==C}),{data:[ee,es]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:s,abi:h.Wn,address:r,functionName:"calcRedeemByMarginTokenAboveAARU",args:[s.vault,(0,b.su)(D||"0")]},{vc:s,abi:h.Wn,address:r,functionName:"calcRedeemByUsbBelowAARS",args:[s.vault,(0,b.su)(z||"0")]}],watch:!0,enabled:"redeem"==C}),et=(0,b.ok)(J,["result"]),ea=(0,b.ok)(Q,["result"]),el=(0,b.ok)(ee,["result",1]),en=(0,b.ok)(es,["result",1]),ei=_==s.xTokenSymbol,ed="USB"==_,ec=(0,o.useMemo)(()=>{let e={vc:s,abi:h.WW,address:s.vault,args:[(0,b.su)(U)],value:s.assetTokenAddress==n.K8?(0,b.su)(U):0n,functionName:"mintPairs"};return"USB"==V&&(e.functionName="mintUsbAboveAARU"),V==s.xTokenSymbol&&(e.functionName="mintMarginTokensBelowAARS"),e},[k,V,U,s]),er=V==s.xTokenSymbol?0n:"USB"===V?K:$,eo="USB"==V?0n:V===s.xTokenSymbol?G:X,ex=ei?"0":"USB"==O?z:(0,w.d)(ea),em=ed?"0":O==s.xTokenSymbol?D:(0,w.d)(et),eu=(0,o.useMemo)(()=>({vc:s,watch:!0,abi:h.Wn,address:r,functionName:"calcPairedRedeemAssetAmount",args:[s.vault,(0,b.su)(em||"0")]}),[s,em]),{data:eh}=(0,p.D2)(eu),ef=ei?el:ed?en:(0,b.ok)(eh,[1]),ep=(0,o.useMemo)(()=>{let e={vc:s,abi:h.WW,address:s.vault,functionName:"USB"==_?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==_?[(0,b.su)(ex)]:[(0,b.su)(em)]};return _==s.xTokenSymbol&&(e.functionName="redeemByMarginTokenAboveAARU",e.args=[(0,b.su)(em)]),"USB"==_&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,b.su)(ex)]),e},[k,_,ex,em,s]);return(0,a.jsxs)("div",{className:(0,S.m)("card relative h-[460px] sm:h-[450px]",k>1?"!bg-violet-500/10":""),children:[(0,a.jsx)("div",{className:"mb-1 ssm:mb-0 ssm:absolute top-[29px] right-6 flex flex-col items-end z-10",children:(0,a.jsxs)("div",{className:(0,S.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,a.jsx)("div",{className:(0,S.m)("w-3 h-3 rounded-full","Stability Model"==B?"bg-green-500":"bg-red-500")}),(0,a.jsx)(u.C,{node:(0,a.jsx)("div",{className:(0,S.m)("Stability Model"==B?"text-green-500":"text-red-500"),children:B}),children:T})]})}),(0,a.jsx)("div",{className:"relative flex items-center justify-between",children:(0,a.jsxs)(j.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>A(e),children:[(0,a.jsxs)(j.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,a.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,a.jsx)(j.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(m.W,{asset:s.assetTokenSymbol,exchange:(0,v.dq)(q*(0,b.su)(U)/f.Pq),balance:P,amount:U,setAmount:M}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,a.jsx)(g.gPZ,{})}),(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,a.jsx)(m.W,{amount:(0,v.ZM)(er),onClick:()=>{W(3==k?"USB":"")},asset:"USB",exchange:(0,v.dq)(er),readonly:!0,disable:k<=1,selected:"USB"===V}),(0,a.jsx)(m.W,{amount:(0,v.ZM)(eo),onClick:()=>{W(2==k?s.xTokenSymbol:"")},asset:s.xTokenSymbol,exchange:(0,v.dq)(R*eo/f.Pq),readonly:!0,disable:k<=1,selected:V===s.xTokenSymbol})]}),(0,a.jsx)(x.v,{tx:"Mint",disabled:s.disableIn||0n==(0,b.su)(U)||(0,b.su)(U)>P,onTxSuccess:()=>{M("")},config:ec,approves:{[s.assetTokenAddress]:(0,b.su)(U)},spender:s.vault})]})}),(0,a.jsx)(j.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(m.W,{amount:ex,setAmount:e=>Z({usbAmount:e}),balance:F,onClick:()=>{Z({redeemActive:2==k?"USB":"",redeemFocus:"USB"})},asset:"USB",exchange:(0,v.dq)((0,b.su)(ex)),readonly:_==s.xTokenSymbol,selected:"USB"===_}),(0,a.jsx)(m.W,{amount:em,setAmount:e=>Z({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{Z({redeemActive:3==k?s.xTokenSymbol:"",redeemFocus:s.xTokenSymbol})},exchange:(0,v.dq)((0,b.su)(em)*R/f.Pq),balance:E,readonly:"USB"==_,selected:_===s.xTokenSymbol})]}),(0,a.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,a.jsx)(g.gPZ,{})}),(0,a.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,a.jsx)("div",{className:"w-full text-end"}),(0,a.jsx)(m.W,{asset:s.assetTokenSymbol,amount:(0,w.d)(ef),exchange:(0,v.dq)(q*ef/f.Pq),readonly:!0}),(0,a.jsx)(x.v,{tx:"Redeem",config:ep,disabled:ed&&0n==(0,b.su)(ex)||ei&&0n==(0,b.su)(em)||!ed&&!ei&&(0n==(0,b.su)(ex)||0n==(0,b.su)(em))||(0,b.su)(ex)>F||(0,b.su)(em)>E,onTxSuccess:()=>{Z({usbAmount:"",xAmount:""})},approves:ed?{[n.O1[(0,l.BV)()]]:(0,b.su)(ex)}:ei?{[s.xTokenAddress]:(0,b.su)(em)}:{[s.xTokenAddress]:(0,b.su)(em),[n.O1[(0,l.BV)()]]:(0,b.su)(ex)},spender:s.vault})]})})]})})]})}var k=t(28712),C=t(62592),A=t(57042),B=t(37238),T=t(56926),U=t(34776),M=t(51549);function StableVaultCard(e){let{vc:s}=e,{balances:t,prices:d}=(0,o.useContext)(i.g),c=n.O6[(0,l.BV)()],[r,u]=(0,o.useState)("mint"),[y,k]=(0,o.useState)(""),[C,A]=(0,o.useState)(""),B=d[s.assetTokenAddress],T=d[s.xTokenAddress],U=t[s.assetTokenAddress],M=t[n.O1[(0,l.BV)()]],V=t[s.xTokenAddress],[{usbAmount:W,xAmount:q,redeemActive:R,redeemFocus:P},F]=(0,N.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),E=(0,o.useMemo)(()=>({contracts:[{vc:s,abi:h.Wn,address:c,functionName:"calcMintPairsFromStableVault",args:[s.vault,(0,b.su)(y||"0")]},{vc:s,abi:h.Wn,address:c,functionName:"calcMintUsbFromStableVault",args:[s.vault,(0,b.su)(y||"0")]},{vc:s,abi:h.Wn,address:c,functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,b.su)(y||"0")]}],watch:!0,enabled:"mint"==r}),[s,y,r]),{data:[z,D,_]=[void 0,void 0,void 0]}=(0,p.uX)(E),O=(0,b.ok)(z,["result",1]),Z=(0,b.ok)(z,["result",2]),L=(0,b.ok)(D,["result",1]),I=(0,b.ok)(_,["result",1]),{data:[H,Y]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:s,abi:h.Wn,address:c,functionName:"calcPairdMarginTokenAmountForStableVault",args:[s.vault,(0,b.su)(W||"0")]},{vc:s,abi:h.Wn,address:c,functionName:"calcPairedUsbAmountForStableVault",args:[s.vault,(0,b.su)(q||"0")]}],watch:!0,enabled:"redeem"==r}),{data:[$,X]=[void 0,void 0]}=(0,p.uX)({contracts:[{vc:s,abi:h.Wn,address:c,functionName:"calcRedeemByMarginTokensFromStableVault",args:[s.vault,n.e_[(0,l.BV)()],(0,b.su)(q||"0")]},{vc:s,abi:h.Wn,address:c,functionName:"calcRedeemByUsbFromStableVault",args:[s.vault,n.e_[(0,l.BV)()],(0,b.su)(W||"0")]}],watch:!0,enabled:"redeem"==r}),K=(0,b.ok)(H,["result"]),G=(0,b.ok)(Y,["result"]),J=(0,b.ok)($,["result",1]),Q=(0,b.ok)(X,["result",1]),ee=R==s.xTokenSymbol,es="USB"==R,et=(0,o.useMemo)(()=>{let e={vc:s,abi:h.S4,address:s.vault,args:[(0,b.su)(y)],value:s.assetTokenAddress==n.K8?(0,b.su)(y):0n,functionName:"mintPairs"};return"USB"==C&&(e.functionName="mintUsb"),C==s.xTokenSymbol&&(e.functionName="mintMarginTokens"),e},[C,y,s]),ea=C==s.xTokenSymbol?0n:"USB"===C?L:O,el="USB"==C?0n:C===s.xTokenSymbol?I:Z,en=ee?"0":"USB"==P?W:(0,w.d)(G),ei=es?"0":P==s.xTokenSymbol?q:(0,w.d)(K),ed=(0,o.useMemo)(()=>({vc:s,watch:!0,abi:h.Wn,address:c,functionName:"calcRedeemByPairsAssetAmountForStableVault",args:[s.vault,n.e_[(0,l.BV)()],(0,b.su)(ei||"0")]}),[s,ei]),{data:ec}=(0,p.D2)(ed),er=ee?J:es?Q:(0,b.ok)(ec,[1]),eo=(0,o.useMemo)(()=>{let e={vc:s,abi:h.S4,address:s.vault,functionName:"USB"==R?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:"USB"==R?[(0,b.su)(en)]:[(0,b.su)(ei)]};return R==s.xTokenSymbol&&(e.functionName="redeemByMarginTokens",e.args=[(0,b.su)(ei)]),"USB"==R&&(e.functionName="redeemByUsb",e.args=[(0,b.su)(en)]),e},[R,en,ei,s]);return(0,a.jsx)("div",{className:(0,S.m)("card relative h-[450px]"),children:(0,a.jsx)("div",{className:"relative flex items-center justify-between",children:(0,a.jsxs)(j.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>u(e),children:[(0,a.jsxs)(j.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,a.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,a.jsx)(j.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(m.W,{asset:s.assetTokenSymbol,exchange:(0,v.dq)(B*(0,b.su)(y)/f.Pq),balance:U,amount:y,setAmount:k}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,a.jsx)(g.gPZ,{})}),(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,a.jsx)(m.W,{amount:(0,v.ZM)(ea),onClick:()=>{A("USB"==C?"":"USB")},asset:"USB",exchange:(0,v.dq)(ea),readonly:!0,selected:"USB"===C}),(0,a.jsx)(m.W,{amount:(0,v.ZM)(el),onClick:()=>{A(C==s.xTokenSymbol?"":s.xTokenSymbol)},asset:s.xTokenSymbol,exchange:(0,v.dq)(T*el/f.Pq),readonly:!0,selected:C===s.xTokenSymbol})]}),(0,a.jsx)(x.v,{tx:"Mint",disabled:s.disableIn||0n==(0,b.su)(y)||(0,b.su)(y)>U,onTxSuccess:()=>{k("")},config:et,approves:{[s.assetTokenAddress]:(0,b.su)(y)},spender:s.vault})]})}),(0,a.jsx)(j.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(m.W,{amount:en,setAmount:e=>F({usbAmount:e}),balance:M,onClick:()=>{F({redeemActive:"USB"==R?"":"USB",redeemFocus:"USB"})},asset:"USB",exchange:(0,v.dq)((0,b.su)(en)),readonly:R==s.xTokenSymbol,selected:"USB"===R}),(0,a.jsx)(m.W,{amount:ei,setAmount:e=>F({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{F({redeemActive:R==s.xTokenSymbol?"":s.xTokenSymbol,redeemFocus:s.xTokenSymbol})},exchange:(0,v.dq)((0,b.su)(ei)*T/f.Pq),balance:V,readonly:"USB"==R,selected:R===s.xTokenSymbol})]}),(0,a.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,a.jsx)(g.gPZ,{})}),(0,a.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,a.jsx)("div",{className:"w-full text-end"}),(0,a.jsx)(m.W,{asset:s.assetTokenSymbol,amount:(0,w.d)(er),exchange:(0,v.dq)(B*er/f.Pq),readonly:!0}),(0,a.jsx)(x.v,{tx:"Redeem",config:eo,disabled:es&&0n==(0,b.su)(en)||ee&&0n==(0,b.su)(ei)||!es&&!ee&&(0n==(0,b.su)(en)||0n==(0,b.su)(ei))||(0,b.su)(en)>M||(0,b.su)(ei)>V,onTxSuccess:()=>{F({usbAmount:"",xAmount:""})},approves:es?{[n.O1[(0,l.BV)()]]:(0,b.su)(en)}:ee?{[s.xTokenAddress]:(0,b.su)(ei)}:{[s.xTokenAddress]:(0,b.su)(ei),[n.O1[(0,l.BV)()]]:(0,b.su)(en)},spender:s.vault})]})})]})})})}let V=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,a.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),W=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,a.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),q=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,a.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C",strokeWidth:"4"})}),R=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,a.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D",strokeWidth:"4"})}),P=(0,a.jsx)("div",{className:"mr-[10px]",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,a.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})}),F=(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 20",fill:"none",children:(0,a.jsx)("path",{d:"M20.75 8.00223C20.7 7.61046 20.45 7.26767 20 7.16973H19.95C19.05 6.97385 18.4 6.48414 17.9 5.65164C17.45 4.91709 17.3 3.98665 17.6 3.15415C17.75 2.81135 17.65 2.37062 17.3 2.0768C16.35 1.19533 15.2 0.509741 13.9 0.0690067C13.55 -0.0779047 13.15 0.0200363 12.8 0.36283C12.25 1.04842 11.4 1.39121 10.45 1.39121C9.6 1.39121 8.8 0.999446 8.1 0.313859C7.7 -0.0779047 7.3 -0.0289342 7 0.0690067C5.7 0.607682 4.6 1.2443 3.65 2.02783C3.3 2.27268 3.15 2.71341 3.3 3.10518C3.55 4.03562 3.45 4.91709 3 5.70061C2.6 6.3862 1.85 6.92488 0.95 7.16973C0.9 7.16973 0.9 7.16973 0.85 7.2187C0.55 7.36561 0.35 7.61046 0.2 7.95326V8.00223C0.05 8.73678 0 9.3734 0 10.01C0 10.6466 0.05 11.3812 0.2 11.9688C0.25 12.3606 0.5 12.7034 0.95 12.8013H1C1.9 12.9972 2.55 13.4869 3.05 14.3194C3.5 15.054 3.65 15.9844 3.35 16.8169C3.2 17.1597 3.3 17.6004 3.65 17.8943C4.6 18.7757 5.75 19.4613 7.1 19.9021C7.15 19.9021 7.2 19.951 7.3 19.951H7.45C7.7 19.951 8 19.8531 8.25 19.6082C8.8 18.9716 9.65 18.5799 10.6 18.5799C11.45 18.5799 12.25 18.9716 12.95 19.6572C13.15 19.8531 13.4 20 13.65 20C13.75 20 13.9 20 14 19.951C15.3 19.4124 16.4 18.7757 17.35 17.9922C17.7 17.7963 17.85 17.3066 17.7 16.9149C17.45 15.9844 17.55 15.1029 18 14.3194C18.4 13.6338 19.15 13.0952 20.05 12.8503C20.1 12.8503 20.1 12.8503 20.15 12.8013C20.45 12.6544 20.65 12.4096 20.8 12.0668V12.0178C20.95 11.2833 21 10.6466 21 10.01C20.95 9.32443 20.9 8.63884 20.75 8.00223ZM10.45 13.389C8.5 13.389 6.95 11.8709 6.95 9.96105C6.95 8.0512 8.5 6.53311 10.45 6.53311C12.4 6.53311 13.95 8.0512 13.95 9.96105C13.95 11.8709 12.4 13.389 10.45 13.389Z",fill:"#6466F1"})});function VaultSimple(e){let{vc:s}=e,{balances:t,prices:d,vaultsMode:c,stableVaultsState:r}=(0,o.useContext)(i.g),u=(0,b.ok)(d,s.assetTokenAddress),g=c[s.vault],N=s.assetTokenSymbol,[S,w]=(0,o.useState)("deposit"),[y,C]=(0,o.useState)(""),A=(0,b.su)(y),B=s.xTokenSymbol,U=t[s.assetTokenAddress],V=r[s.vault],[W,q]=(0,o.useState)("");(0,T.xx)();let{data:R}=(0,p.D2)({watch:!0,vc:s,abi:h.Wn,address:n.O6[(0,l.BV)()],functionName:s.isStable?"calcMintPairsFromStableVault":"calcMintPairs",args:[s.vault,(0,b.su)("1")]}),{data:P}=(0,p.D2)({abi:h.Wn,address:n.O6[(0,l.BV)()],functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,b.su)("1")],enabled:s.isStable,watch:!0}),E=s.isStable&&0n==V.M_USDCx?0n:(0,b.ok)(R,[1]),z=s.isStable&&0n==V.M_USDCx?(0,b.ok)(P,[1]):(0,b.ok)(R,[2]),D=t[n.O1[(0,l.BV)()]],_=t[s.xTokenAddress],O=(0,b.NA)([z>0n?_*f.Pq/z:0n,E>0n?D*f.Pq/E:0n]),Z=(0,b.su)(W),L=(0,o.useMemo)(()=>{let e={vc:s,abi:s.isStable?h.S4:h.WW,address:s.vault,functionName:"redeemByPairsWithExpectedUsbAmount",args:[Z*E/f.Pq]};return e},[g,Z,E,s]);return(0,a.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,a.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,a.jsxs)(k.fC,{children:[(0,a.jsx)(k.xz,{children:(0,a.jsx)("div",{className:"absolute w-[21px] h-[21px] right-[20px] top-[30px] cursor-pointer hover:bg-indigo-500 hover:bg-opacity-50",children:F})}),(0,a.jsxs)(k.h_,{children:[(0,a.jsx)(k.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,a.jsx)(k.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:s.isStable?(0,a.jsx)(StableVaultCard,{vc:s}):(0,a.jsx)(VaultCard,{vc:s})})]})]}),(0,a.jsxs)(j.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>w(e),children:[(0,a.jsxs)(j.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,a.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,a.jsx)(j.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(m.W,{asset:N,exchange:(0,v.dq)(u*A/f.Pq),balance:U,amount:y,setAmount:C}),(0,a.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,a.jsx)(M.c,{className:"mx-1",symbol:N,size:12}),N," = ",(0,v.dq)(z)," ",(0,a.jsx)(M.c,{className:"mx-1",symbol:B,size:12})," ",N,"x +",(0,v.dq)(E)," ",(0,a.jsx)(M.c,{className:"mx-1",symbol:"USB",size:12})," USB"]}),(0,a.jsx)(x.v,{tx:"Deposit",disabled:s.disableIn||A<=0n||A>U,onTxSuccess:()=>{C("")},config:{abi:h.S4,address:s.vault,args:[A],value:s.assetTokenAddress==n.K8?A:0n,functionName:s.isStable&&0n==V.M_USDCx?"mintMarginTokens":"mintPairs"},approves:{[s.assetTokenAddress]:A},spender:s.vault})]})}),(0,a.jsx)(j.VY,{value:"withraw",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("div",{className:"flex flex-col gap-2",children:(0,a.jsx)(m.W,{amount:W,setAmount:q,balance:O,balanceTit:"Redeemable amount",asset:N,exchange:(0,v.dq)(u*Z/f.Pq)})}),(0,a.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,a.jsxs)("span",{className:"flex",children:[B," Balance：",(0,a.jsx)(M.c,{className:"mx-1",symbol:B,size:12})," ",(0,v.dq)(_)]}),(0,a.jsxs)("span",{className:"flex",children:["USB Balance: ",(0,a.jsx)(M.c,{className:"mx-1",symbol:"USB",size:12})," ",(0,v.dq)(D)]})]}),(0,a.jsx)(x.v,{tx:"Withdraw",config:L,disabled:0n==E||0n==z||Z<=0n||Z>O,onTxSuccess:()=>{console.info("Redeem onSuccess:"),q("")},approves:{[s.xTokenAddress]:Z*z/f.Pq,[n.O1[(0,l.BV)()]]:Z*E/f.Pq},spender:s.vault})]})})]})]})})}let ExpandUI=e=>{let{onClick:s,isOpen:t}=e;return(0,a.jsx)("div",{className:"flex md:hidden justify-center  items-center py-5",children:(0,a.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer ",onClick:s,children:[(0,a.jsx)("span",{className:"mr-[5px]",children:t?"Hide":"Details"}),t?W:V]})})};function VaultCollapse(e){let{vc:s}=e,{balances:t,prices:d,vaultsMode:c,vaultsState:r,stableVaultsState:x,vaultsDiscount:m}=(0,o.useContext)(i.g),h=function(e){let{vaultsState:s,stableVaultsState:t}=(0,o.useContext)(i.g),a=s[(null==e?void 0:e.vault)||"null"],l=t[(null==e?void 0:e.vault)||"null"],n=(null==e?void 0:e.isStable)?(0,b.pF)(l.aar,l.AARDecimals):(0,b.pF)(a.aar,a.AARDecimals);return Math.max(0,1+1/(n-1))}(s),p=(0,b.ok)(d,s.assetTokenAddress),j=r[s.vault],g=x[s.vault],N=s.isStable?g.M_USDC:j.M_ETH,S=s.isStable?g.M_USDCx:j.M_ETHx,w=s.isStable?g.M_USB_USDC:j.M_USB_ETH,y=(0,v.dq)(N),k=(0,v.dq)(S),A=(0,v.dq)(N*p/f.Pq),F=(0,v.dq)(w),E=s.isStable?(0,b.Rr)(g.aar,g.AARDecimals):(0,b.Rr)(j.aar,j.AARDecimals),z=c[s.vault],D=S>0n?t[s.xTokenAddress]*N/S:0n,_=S>0n?-(t[s.xTokenAddress]*w)/S:0n,O=m[s.vault],{address:Z}=(0,T.mA)(),[L,I]=(0,o.useState)(!1),H=s.xTokenSymbol,onCollapseChange=()=>{I(!L)},{data:Y}=(0,T.py)();return(0,a.jsxs)("div",{className:"border border-solid border-[#E4E4E7] rounded-2xl overflow-hidden bg-white",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col gap-5 md:flex-row justify-between items-center bg-white p-4 md:p-10",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5",children:[(0,a.jsxs)("div",{className:"flex w-full md:w-[10rem] flex-shrink-0",children:[(0,a.jsx)(M.c,{symbol:s.assetTokenSymbol,size:32}),(0,a.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-black text-sm font-semibold whitespace-nowrap",children:s.assetTokenSymbol}),(0,a.jsxs)("div",{className:"text-[#64748B] text-xs font-medium",children:["$",(0,v.dq)(d[s.assetTokenAddress])]})]})]}),(0,a.jsx)("div",{className:"h-[1px] w-full bg-[#E4E4E7] md:hidden"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 gap-y-[2rem] md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Total Deposit"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(M.c,{symbol:s.assetTokenSymbol,size:14}),(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:y})]}),(0,a.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$",A]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"USB Debt"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(M.c,{className:"mx-1",symbol:"USB",size:14}),(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:F})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:[H,(0,a.jsx)(u.C,{children:"This is a margin token, representing open position in the vault."})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(M.c,{className:"mx-1",symbol:H,size:14}),(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:k})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:["AAR",(0,a.jsx)(u.C,{children:"Asset Adequacy Ratio"})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:E})})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Status"}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,a.jsxs)("div",{className:"flex items-center",children:[!s.isStable&&(0,a.jsx)("div",{className:"mr-[10px]",children:z<=1?q:R}),s.isStable?"n/a":z<=1?"Stability":"Adjustment"]})})})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Discount Offer"}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:O?(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-[10px]",children:R}),"Yes"]}):(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-[10px]",children:q}),"No"]})})})]})]})]}),(0,a.jsxs)("div",{className:"items-center text-xs text-[#6466F1] cursor-pointer hidden md:flex",onClick:onCollapseChange,children:[(0,a.jsx)("span",{className:"mr-[5px]",children:L?"Hide":"Details"}),L?W:V]})]}),(0,a.jsx)(B.Collapse,{isOpened:L,className:"ease-linear",children:(0,a.jsxs)("div",{className:"w-full rounded-b-[16px] bg-[#F2F5F9] p-4 md:p-6",children:[(0,a.jsxs)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"hidden md:flex",children:[(0,a.jsx)("div",{className:"md:h-full mb-5 md:mb-0 flex items-center",children:(0,a.jsxs)("div",{className:"flex mr-[55px]",children:[(0,a.jsx)(M.c,{symbol:s.xTokenSymbol,size:54,className:"shrink-0 hidden md:block"}),(0,a.jsx)(M.c,{symbol:s.xTokenSymbol,size:32,className:"shrink-0 md:hidden"}),(0,a.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text-black text-sm md:text-[24px] font-semibold",children:H}),(0,a.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",(0,v.dq)(d[s.xTokenAddress])]})]})]})}),(0,a.jsxs)("div",{className:"w-full  min-h-[108px] flex flex-col justify-between",children:[Z&&(0,a.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,a.jsx)("div",{children:"Open Position"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(M.c,{className:"mr-1",symbol:s.assetTokenSymbol,size:12}),(0,v.dq)(D)]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,a.jsxs)("div",{children:["Margin Loan",(0,a.jsxs)(u.C,{children:["Repay your margin loan to redeem ",s.assetTokenSymbol," corresponding to your open position."]})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(M.c,{className:"mr-1",symbol:"USB",size:12}),(0,v.dq)(_)]})]})]}),(0,a.jsxs)("div",{className:" text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,a.jsxs)("div",{className:"flex items-center mb-[16px]",children:[P,h.toFixed(2),"x"," ",(0,l.WA)()&&s.isStable?"Blast Native Yield":"Leveraged long on ".concat(s.assetTokenSymbol)]}),(0,a.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{s&&(null==Y||Y.watchAsset({type:"ERC20",options:{address:s.xTokenAddress,symbol:s.xTokenSymbol,decimals:18}}).catch(b.S3))},children:[P,"Add ",s.xTokenSymbol," to wallet"]}),(0,a.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer",onClick:()=>{null==Y||Y.watchAsset({type:"ERC20",options:{address:n.O1[(0,l.BV)()],symbol:"USB",decimals:18}}).catch(b.S3)},children:[P,"Add USB to wallet"]}),(0,a.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:()=>{var e,t;let a=l.Af.find(e=>e.id==(0,l.BV)());a&&s&&open("".concat(null===(t=a.blockExplorers)||void 0===t?void 0:null===(e=t.default)||void 0===e?void 0:e.url,"/address/").concat(s.vault),"_blank")},children:[P,"View contract"]})]})]})]}),(0,a.jsx)("div",{className:"w-full  flex items-center justify-center",children:Z&&s?(0,a.jsx)(VaultSimple,{vc:s}):s?(0,a.jsx)(U.Z,{}):(0,a.jsx)(C.Z,{className:"rounded",children:"Comming soon"})})]}),(0,a.jsx)(ExpandUI,{onClick:onCollapseChange,isOpen:L})]})}),!L&&(0,a.jsx)(ExpandUI,{onClick:onCollapseChange,isOpen:L})]})}function GroupVaultCollapse(e){let{vcs:s}=e,[t,l]=(0,o.useState)(s[s.length-1]);return 1==s.length?(0,a.jsx)(VaultCollapse,{vc:s[0]}):(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(VaultCollapse,{vc:t}),(0,a.jsx)("div",{className:"absolute z-10 right-[50px] top-0 flex text-sm",children:s.map((e,s)=>(0,a.jsx)("div",{className:(0,A.Z)("cursor-pointer rounded-b-full border border-blue-500 px-1 py-1",{"bg-white text-black":t!==e,"bg-blue-500 text-white":t===e}),onClick:()=>l(e),children:"V".concat(s+1)},"gvc_"+s))})]})}var E=t(2890),z=t.n(E);function Vaults(){(0,T.xx)();let e=n.iK[(0,l.BV)()],s=(0,o.useMemo)(()=>Object.values(z().groupBy(e,"assetTokenSymbol")),[e]);return(0,a.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold text-neutral-900",children:"Vaults"}),(0,a.jsxs)("div",{className:"w-full mt-[20px] mb-[30px] flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,a.jsx)("div",{className:"min-w-[21px] mt-[5px] md:mt-0",children:(0,a.jsx)(r(),{width:21,height:14,src:"./vector.png",alt:"vector"})}),(0,a.jsx)("span",{className:"ml-[6px]",children:"Depositing assets into the Vaults not only yields protocol income but also qualifies for Blast Developer Airdrop."})]}),(0,a.jsx)(d.r,{numItemsMd:1,className:"gap-3 mt-4",children:s.map((e,s)=>(0,a.jsx)(GroupVaultCollapse,{vcs:e},"group_vault_item_".concat(s)))})]})}},76036:function(e,s,t){"use strict";t.d(s,{v:function(){return ApproveAndTx}});var a=t(57437),l=t(72009),n=t(81628),i=t(2265),d=t(71424),c=t(56926),r=t(84661),o=t(54415);let x={},useApproves=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a}=(0,c.mA)(),m=(0,o.uT)(),{data:u}=(0,c.py)(),[h,f]=(0,i.useState)(!1),p=(0,i.useMemo)(()=>Object.keys(e).filter(e=>e!==l.K8),[e]),[b,v]=(0,i.useState)(s&&x[s]||{}),updateAllownce=(e,t)=>{s&&(x[s]={...x[s]||{},[e]:t},v(s=>({...s,[e]:t})))},{data:j}=(0,c.Ov)(),g=(0,c.t_)();(0,i.useEffect)(()=>{a&&s&&p.forEach(e=>{m({abi:r.em,address:e,functionName:"allowance",args:[a,s]}).then(s=>updateAllownce(e,s||0n)).catch(console.error)})},[p,a,j]);let[N,S]=(0,i.useState)(!1),w=(0,i.useMemo)(()=>p.filter(s=>(0,n.ok)(e,s)>0n&&(0,n.ok)(e,s)>(0,n.ok)(b,s)),[e,p,b]),approve=async()=>{if(0!=w.length&&s)try{S(!0),f(!1);for(let a=0;a<w.length;a++){let l=w[a],n=!1===t?e[l]:t,i=await (null==u?void 0:u.writeContract({abi:r.em,address:l,functionName:"approve",args:[s,n]}));i&&await (null==g?void 0:g.waitForTransactionReceipt({hash:i})),updateAllownce(l,n)}d.A.success("Approve success"),S(!1),f(!0)}catch(e){throw d.A.error((0,n.az)(e)),S(!1),f(!1),e}};return{approve,loading:N,shouldApprove:w.length>0,isSuccess:h}};var m=t(43003),u=t(35769),h=t(72084);function ApproveAndTx(e){let{className:s,tx:t,approves:l,spender:n,requestAmount:d,config:c,toast:r=!0,disabled:o,onTxSuccess:x,onApproveSuccess:f}=e,{write:p,isDisabled:b,isLoading:v}=(0,m.R)({onSuccess:()=>x&&x(),...c},r),j=o||b||v||!1===c.enabled,{approve:g,shouldApprove:N,loading:S,isSuccess:w}=useApproves(l||{},n,d),y=(0,i.useRef)();return(y.current=f,(0,i.useEffect)(()=>{y.current&&w&&y.current()},[w]),N)?(0,a.jsxs)("button",{className:(0,u.m)("btn-primary flex items-center justify-center gap-4",s),onClick:g,disabled:o||!g||S,children:[S&&(0,a.jsx)(h.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,u.m)("btn-primary flex items-center justify-center gap-4",s),onClick:()=>p(),disabled:j,children:[v&&(0,a.jsx)(h.$,{}),t]})}},34776:function(e,s,t){"use strict";t.d(s,{Z:function(){return ConnectBtn}});var a=t(57437),l=t(14701);function ConnectBtn(){return(0,a.jsx)(l.NL,{chainStatus:"none",showBalance:!1})}},80547:function(e,s,t){"use strict";t.d(s,{W:function(){return AssetInput}});var a=t(57437),l=t(81628),n=t(20373),i=t(57042),d=t(2265),c=t(28881),r=t(16775),o=t(51549);function AssetInput(e){let{asset:s="ETH",checkBalance:t=!0,balance:x,balanceTit:m="Balance",balanceDecimals:u=18,exchange:h,readonly:f,selected:p,onClick:b,amount:v,setAmount:j,price:g,disable:N,hasInput:S=!1,options:w,onChange:y=()=>{},defaultValue:k,balanceClassName:C="",disableNegative:A}=e,B=(0,d.useRef)(null),T=t&&void 0!==x&&(0,l.su)("number"==typeof v?v+"":v||"")>("bigint"==typeof x?x:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{b&&!N&&b()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(o.c,{size:24,symbol:s}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[S?(0,a.jsx)(c.ZP,{options:w,onChange:y,defaultValue:k,styles:{control:(e,s)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,a.jsx)("div",{children:s}),g&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:g})]}),h&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",h]})]})]}),(0,a.jsx)("input",{value:v,onChange:e=>{let s=(e.target.value||"").replaceAll("-","").replaceAll("+","");j(s)},ref:B,type:"number",disabled:N,className:(0,i.Z)(f?"bg-slate-50":"bg-white",{"border-green-700 border-2":p,"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400":!T&&!p},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none "),placeholder:"0.000",pattern:"[0-9.]{36}",step:.01,title:"",readOnly:f})]}),void 0!=x&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{className:C,children:[(0,a.jsxs)("span",{children:[m,": ",(0,n.Rp)(x,3,u)]}),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,r.b)(x,u);j(e),b&&!N&&b()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},51549:function(e,s,t){"use strict";t.d(s,{c:function(){return CoinIcon}});var a=t(57437);function CoinIcon(e){let{symbol:s,size:t=48,...l}=e;return(0,a.jsx)("img",{...l,width:t,height:t,src:"/".concat(s,".svg"),alt:s})}},72084:function(e,s,t){"use strict";t.d(s,{$:function(){return Spinner}});var a=t(57437);let Spinner=e=>{let{className:s}=e;return(0,a.jsxs)("svg",{fill:"none",className:s?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,s,t){"use strict";t.d(s,{C:function(){return Tip}});var a=t(57437),l=t(75224),n=t(40311);function Tip(e){let{children:s,node:t}=e,i=document.getElementById("tooltip-root");return(0,a.jsx)(l.zt,{children:(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,children:t?(0,a.jsx)("div",{className:"inline-block cursor-default",style:{verticalAlign:"text-bottom"},children:t}):(0,a.jsx)("div",{className:"inline-block px-[3px] cursor-default relative",style:{transform:"translateY(-6%)"},children:(0,a.jsx)(n.apP,{className:"inline-block stroke-slate-500",style:{fontSize:"1.3em"}})})}),(0,a.jsx)(l.h_,{container:i,children:(0,a.jsxs)(l.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[s,(0,a.jsx)(l.Eh,{})]})})]})})}},43003:function(e,s,t){"use strict";t.d(s,{R:function(){return useWrapContractWrite}});var a=t(81628),l=t(2265),n=t(71424),i=t(56926);function useWrapContractWrite(e){let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[t,d]=(0,l.useState)(!1),[c,r]=(0,l.useState)(!1),o=(0,i.t_)(),{data:x}=(0,i.py)(),m=!o||!x||!x.account||t||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!m){d(!0),r(!1);try{let t="function"==typeof e?await e():e,{request:a}=await o.simulateContract({account:x.account,...t}),l=await x.writeContract(a),i=await o.waitForTransactionReceipt({hash:l});if("success"!==i.status)throw"Transaction reverted";r(!0),t.onSuccess&&t.onSuccess({}),s&&n.A.success("Transaction success")}catch(e){s&&n.A.error((0,a.az)(e))}d(!1)}};return{write,isDisabled:m,isLoading:t,isSuccess:c}}},20373:function(e,s,t){"use strict";t.d(s,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=t(16775),l=t(79352);let displayBalanceWithUnit=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let l=10**s;return(Math.floor(Number((0,a.b)(e,t))*l)/l).toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalance=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=Number((0,l.d)(e)),a=Number((.1**s).toFixed(s));return t>0&&t<a?"<"+a:t<0&&t>-a?">-"+a:t.toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalanceWithoutFormat=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=10**s;return String(Math.floor(Number((0,l.d)(e))*t)/t)}}},function(e){e.O(0,[1866,9472,3033,1787,4102,6691,7240,4725,754,930,9356,8156,2128,4584,3608,9724,4322,2971,2472,1744],function(){return e(e.s=26295)}),_N_E=e.O()}]);