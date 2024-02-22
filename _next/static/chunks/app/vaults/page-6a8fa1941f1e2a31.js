(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{35883:function(){},55139:function(e,s,t){"use strict";t.d(s,{r:function(){return l.Z}});var l=t(87456)},26295:function(e,s,t){Promise.resolve().then(t.bind(t,16619))},16619:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Vaults}});var l=t(57437),a=t(91056),n=t(72009),i=t(15898),d=t(55139),c=t(16691),r=t.n(c),o=t(2265),x=t(76036),m=t(80547),u=t(64020),h=t(30050),p=t(8580),f=t(12831),v=t(81628),j=t(20373),b=t(34522),g=t(41697),w=t(99888),N=t(35769),y=t(79352);let S="$USB";function VaultCard(e){let{asset:s}=e,{balances:t,prices:d,vaultsMode:c}=(0,o.useContext)(i.g),r=n.iK[(0,a.BV)()].find(e=>e.assetTokenSymbol==s),k=n.jX[(0,a.BV)()],A=c[r.assetTokenSymbol],[C,B]=(0,o.useState)("mint"),[T,U]=(0,o.useMemo)(()=>{let e="mint"==C;return 3==A?["Adjustment Model--High AAR",e?"Minting ".concat(S," alone is feasible"):"Redeeming ".concat(r.xTokenSymbol," alone is feasible")]:2==A?["Adjustment Model--Low AAR",e?"Minting ".concat(r.xTokenSymbol," alone is feasible"):"Redeeming ".concat(S," alone is feasible")]:["Stability Model",e?"".concat(S," and ").concat(r.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(S," and ").concat(r.xTokenSymbol)]},[A,r,C]),[E,M]=(0,o.useState)(""),[P,V]=(0,o.useState)(""),q=(0,v.ok)(d,r.assetTokenSymbol),H=(0,v.ok)(d,r.xTokenSymbol),R=t[s],W=t.USB,D=t[r.xTokenSymbol],[{usbAmount:F,xAmount:L,redeemActive:_,redeemFocus:Y},z]=(0,w.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:"USB"}),Z=(0,o.useMemo)(()=>({contracts:[{vc:r,abi:h.Y,address:k,functionName:A>1?"calcMintPairsAtAdjustmentPhase":"calcMintPairsAtStabilityPhase",args:[r.vault,(0,v.su)(E||"0")]},{vc:r,abi:h.Y,address:k,functionName:"calcMintUsbAboveAARU",args:[r.vault,(0,v.su)(E||"0")]},{vc:r,abi:h.Y,address:k,functionName:"calcMintLeveragedTokensBelowAARS",args:[r.vault,(0,v.su)(E||"0")]}],watch:!0,enabled:"mint"==C}),[r,E,C]),{data:[O,I,$]=[void 0,void 0,void 0]}=(0,f.uX)(Z),K=(0,v.ok)(O,["result",1]),X=(0,v.ok)(O,["result",2]),G=(0,v.ok)(I,["result",1]),J=(0,v.ok)($,["result",1]),Q=(0,o.useMemo)(()=>({contracts:[{vc:r,abi:h.Y,address:k,functionName:"calcPairdLeveragedTokenAmount",args:[r.vault,(0,v.su)(F||"0")]},{vc:r,abi:h.Y,address:k,functionName:"calcPairedUsbAmount",args:[r.vault,(0,v.su)(L||"0")]},{vc:r,abi:h.Y,address:k,functionName:"calcRedeemByLeveragedTokenAboveAARU",args:[r.vault,(0,v.su)(L||"0")]},{vc:r,abi:h.Y,address:k,functionName:"calcRedeemByUsbBelowAARS",args:[r.vault,(0,v.su)(F||"0")]}],watch:!0,enabled:"redeem"==C}),[r,F,L,C]),{data:[ee,es,et,el]=[void 0,void 0,void 0,void 0]}=(0,f.uX)(Q),ea=(0,v.ok)(ee,["result"]),en=(0,v.ok)(es,["result"]),ei=(0,v.ok)(et,["result",1]),ed=(0,v.ok)(el,["result",1]),ec=_==r.xTokenSymbol,er="USB"==_,eo=(0,o.useMemo)(()=>{let e={vc:r,abi:h.WW,address:r.vault,args:[(0,v.su)(E)],value:r.assetTokenAddress==n.K8?(0,v.su)(E):0n,functionName:"mintPairsAtAdjustmentPhase"};return A<=1&&(e.functionName="mintPairsAtStabilityPhase"),"USB"==P&&(e.functionName="mintUSBAboveAARU"),P==r.xTokenSymbol&&(e.functionName="mintLeveragedTokensBelowAARS"),e},[A,P,E,r]),ex=P==r.xTokenSymbol?0n:"USB"===P?G:K,em="USB"==P?0n:P===r.xTokenSymbol?J:X,eu=ec?"0":"USB"==Y?F:(0,y.d)(en),eh=er?"0":Y==r.xTokenSymbol?L:(0,y.d)(ea),ep=(0,o.useMemo)(()=>({vc:r,watch:!0,abi:h.Y,address:k,functionName:"calcPairedRedeemAssetAmount",args:[r.vault,(0,v.su)(eh||"0")]}),[r,eh]),{data:ef}=(0,f.D2)(ep),ev=ec?ei:er?ed:(0,v.ok)(ef,[1]),ej=(0,o.useMemo)(()=>{let e={vc:r,abi:h.WW,address:r.vault,functionName:"USB"==_?"redeemByPairsWithExpectedUSBAmount":"redeemByPairsWithExpectedLeveragedTokenAmount",args:"USB"==_?[(0,v.su)(eu)]:[(0,v.su)(eh)]};return _==r.xTokenSymbol&&(e.functionName="redeemByLeveragedTokenAboveAARU",e.args=[(0,v.su)(eh)]),"USB"==_&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,v.su)(eu)]),e},[A,_,eu,eh,r]);return(0,l.jsxs)("div",{className:(0,N.m)("card relative h-[450px]",A>1?"!bg-violet-500/10":""),children:[(0,l.jsx)("div",{className:"mb-1 ssm:mb-0 ssm:absolute top-[29px] right-6 flex flex-col items-end z-10",children:(0,l.jsxs)("div",{className:(0,N.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,l.jsx)("div",{className:(0,N.m)("w-3 h-3 rounded-full","Stability Model"==T?"bg-green-500":"bg-red-500")}),(0,l.jsx)(u.C,{node:(0,l.jsx)("div",{className:(0,N.m)("Stability Model"==T?"text-green-500":"text-red-500"),children:T}),children:U})]})}),(0,l.jsx)("div",{className:"relative flex items-center justify-between",children:(0,l.jsxs)(b.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>B(e),children:[(0,l.jsxs)(b.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,l.jsx)(b.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,l.jsx)(b.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,l.jsx)(b.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(m.W,{asset:s,exchange:(0,j.dq)(q*(0,v.su)(E)/p.Pq),balance:R,amount:E,setAmount:M}),(0,l.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,l.jsx)(g.gPZ,{})}),(0,l.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,l.jsx)(m.W,{amount:(0,j.ZM)(ex),onClick:()=>{V(3==A?"USB":"")},asset:"USB",exchange:(0,j.dq)(ex),readonly:!0,disable:A<=1,selected:"USB"===P}),(0,l.jsx)(m.W,{amount:(0,j.ZM)(em),onClick:()=>{V(2==A?r.xTokenSymbol:"")},asset:r.xTokenSymbol,exchange:(0,j.dq)(H*em/p.Pq),readonly:!0,disable:A<=1,selected:P===r.xTokenSymbol})]}),(0,l.jsx)(x.v,{tx:"Mint",disabled:0n==(0,v.su)(E)||(0,v.su)(E)>R,onTxSuccess:()=>{M("")},config:eo,approves:{[r.assetTokenAddress]:(0,v.su)(E)},spender:r.vault})]})}),(0,l.jsx)(b.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(m.W,{amount:eu,setAmount:e=>z({usbAmount:e}),balance:W,onClick:()=>{z({redeemActive:2==A?"USB":"",redeemFocus:"USB"})},asset:"USB",exchange:(0,j.dq)((0,v.su)(eu)),readonly:_==r.xTokenSymbol,selected:"USB"===_}),(0,l.jsx)(m.W,{amount:eh,setAmount:e=>z({xAmount:e}),asset:r.xTokenSymbol,onClick:()=>{z({redeemActive:3==A?r.xTokenSymbol:"",redeemFocus:r.xTokenSymbol})},exchange:(0,j.dq)((0,v.su)(eh)*H/p.Pq),balance:D,readonly:"USB"==_,selected:_===r.xTokenSymbol})]}),(0,l.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,l.jsx)(g.gPZ,{})}),(0,l.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,l.jsx)("div",{className:"w-full text-end"}),(0,l.jsx)(m.W,{asset:r.assetTokenSymbol,amount:(0,y.d)(ev),exchange:(0,j.dq)(q*ev/p.Pq),readonly:!0}),(0,l.jsx)(x.v,{tx:"Redeem",config:ej,disabled:er&&0n==(0,v.su)(eu)||ec&&0n==(0,v.su)(eh)||!er&&!ec&&(0n==(0,v.su)(eu)||0n==(0,v.su)(eh))||(0,v.su)(eu)>W||(0,v.su)(eh)>D,onTxSuccess:()=>{z({usbAmount:"",xAmount:""})},approves:er?{[n.O1[(0,a.BV)()]]:(0,v.su)(eu)}:ec?{[r.xTokenAddress]:(0,v.su)(eh)}:{[r.xTokenAddress]:(0,v.su)(eh),[n.O1[(0,a.BV)()]]:(0,v.su)(eu)},spender:r.vault})]})})]})})]})}var k=t(28712),A=t(62592),C=t(14181),B=t(37238),T=t(56926);let U=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,l.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),E=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,l.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),M=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,l.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C","stroke-width":"4"})}),P=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,l.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D","stroke-width":"4"})}),V=(0,l.jsx)("div",{className:"mr-[10px]",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,l.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})}),q=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 20",fill:"none",children:(0,l.jsx)("path",{d:"M20.75 8.00223C20.7 7.61046 20.45 7.26767 20 7.16973H19.95C19.05 6.97385 18.4 6.48414 17.9 5.65164C17.45 4.91709 17.3 3.98665 17.6 3.15415C17.75 2.81135 17.65 2.37062 17.3 2.0768C16.35 1.19533 15.2 0.509741 13.9 0.0690067C13.55 -0.0779047 13.15 0.0200363 12.8 0.36283C12.25 1.04842 11.4 1.39121 10.45 1.39121C9.6 1.39121 8.8 0.999446 8.1 0.313859C7.7 -0.0779047 7.3 -0.0289342 7 0.0690067C5.7 0.607682 4.6 1.2443 3.65 2.02783C3.3 2.27268 3.15 2.71341 3.3 3.10518C3.55 4.03562 3.45 4.91709 3 5.70061C2.6 6.3862 1.85 6.92488 0.95 7.16973C0.9 7.16973 0.9 7.16973 0.85 7.2187C0.55 7.36561 0.35 7.61046 0.2 7.95326V8.00223C0.05 8.73678 0 9.3734 0 10.01C0 10.6466 0.05 11.3812 0.2 11.9688C0.25 12.3606 0.5 12.7034 0.95 12.8013H1C1.9 12.9972 2.55 13.4869 3.05 14.3194C3.5 15.054 3.65 15.9844 3.35 16.8169C3.2 17.1597 3.3 17.6004 3.65 17.8943C4.6 18.7757 5.75 19.4613 7.1 19.9021C7.15 19.9021 7.2 19.951 7.3 19.951H7.45C7.7 19.951 8 19.8531 8.25 19.6082C8.8 18.9716 9.65 18.5799 10.6 18.5799C11.45 18.5799 12.25 18.9716 12.95 19.6572C13.15 19.8531 13.4 20 13.65 20C13.75 20 13.9 20 14 19.951C15.3 19.4124 16.4 18.7757 17.35 17.9922C17.7 17.7963 17.85 17.3066 17.7 16.9149C17.45 15.9844 17.55 15.1029 18 14.3194C18.4 13.6338 19.15 13.0952 20.05 12.8503C20.1 12.8503 20.1 12.8503 20.15 12.8013C20.45 12.6544 20.65 12.4096 20.8 12.0668V12.0178C20.95 11.2833 21 10.6466 21 10.01C20.95 9.32443 20.9 8.63884 20.75 8.00223ZM10.45 13.389C8.5 13.389 6.95 11.8709 6.95 9.96105C6.95 8.0512 8.5 6.53311 10.45 6.53311C12.4 6.53311 13.95 8.0512 13.95 9.96105C13.95 11.8709 12.4 13.389 10.45 13.389Z",fill:"#6466F1"})}),H={ETH:"./ETH.svg",ETHx:"./ETHx.svg",USDB:"./USDB.svg",USDBx:"./USDB.svg",USB:"./USB.svg"};function VaultSimple(e){let{vaultConfig:s}=e,{balances:t,prices:d,vaultsMode:c}=(0,o.useContext)(i.g),u=(0,v.ok)(d,null==s?void 0:s.assetTokenSymbol),g=c[null==s?void 0:s.assetTokenSymbol],w=null==s?void 0:s.assetTokenSymbol,[N,y]=(0,o.useState)("deposit"),[S,A]=(0,o.useState)(""),C=(0,v.su)(S),B="ETH"===w?"ETHx":"USDBx",T=t[w],U=(0,o.useMemo)(()=>{let e={vc:s,abi:h.WW,address:null==s?void 0:s.vault,args:[C],value:(null==s?void 0:s.assetTokenAddress)==n.K8?C:0n,functionName:"mintPairsAtAdjustmentPhase"};return g<=1&&(e.functionName="mintPairsAtStabilityPhase"),e},[g,S,s]),[E,M]=(0,o.useState)(""),P=n.jX[(0,a.BV)()],{data:V}=(0,f.D2)({vc:s,abi:h.Y,address:P,functionName:g<=1?"calcMintPairsAtStabilityPhase":"calcMintPairsAtAdjustmentPhase",args:[null==s?void 0:s.vault,(0,v.su)("1")]}),R=(0,v.ok)(V,[1]),W=(0,v.ok)(V,[2]),D=t.USB,F=t[s.xTokenSymbol],L=(0,v.NA)([W>0n?F*p.Pq/W:0n,R>0n?D*p.Pq/R:0n]),_=(0,v.su)(E),Y=(0,o.useMemo)(()=>{let e={vc:s,abi:h.WW,address:null==s?void 0:s.vault,functionName:"redeemByPairsWithExpectedUSBAmount",args:[_*R/p.Pq]};return e},[g,_,R,s]);return(0,l.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,l.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,l.jsxs)(k.fC,{children:[(0,l.jsx)(k.xz,{children:(0,l.jsx)("div",{className:"absolute w-[21px] h-[21px] right-[20px] top-[30px] cursor-pointer hover:bg-indigo-500 hover:bg-opacity-50",children:q})}),(0,l.jsxs)(k.h_,{children:[(0,l.jsx)(k.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,l.jsx)(k.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:(0,l.jsx)(VaultCard,{asset:"ETH"})})]})]}),(0,l.jsxs)(b.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>y(e),children:[(0,l.jsxs)(b.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,l.jsx)(b.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,l.jsx)(b.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,l.jsx)(b.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(m.W,{asset:w,exchange:(0,j.dq)(u*C/p.Pq),balance:T,amount:S,setAmount:A}),(0,l.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,l.jsx)(r(),{src:H.ETH,width:12,height:12,alt:"",className:"mx-[5px]"}),"ETH = ",(0,j.dq)(W)," ",(0,l.jsx)(r(),{src:H[B],width:12,height:12,alt:"",className:"mx-[5px]"})," ",w,"x +",(0,j.dq)(R)," ",(0,l.jsx)(r(),{src:H.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," USB"]}),(0,l.jsx)(x.v,{tx:"Deposit",disabled:C<=0n||C>T,onTxSuccess:()=>{A("")},config:U,approves:{[null==s?void 0:s.assetTokenAddress]:C},spender:null==s?void 0:s.vault})]})}),(0,l.jsx)(b.VY,{value:"withraw",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("div",{className:"flex flex-col gap-2",children:(0,l.jsx)(m.W,{amount:E,setAmount:M,balance:L,asset:w,exchange:(0,j.dq)(u*_/p.Pq)})}),(0,l.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,l.jsxs)("span",{className:"flex",children:[B," Balance：",(0,l.jsx)(r(),{src:H[B],width:12,height:12,alt:"",className:"mr-[5px]"})," ",(0,j.dq)(F)]}),(0,l.jsxs)("span",{className:"flex",children:["USB Balance: ",(0,l.jsx)(r(),{src:H.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," ",(0,j.dq)(D)]})]}),(0,l.jsx)(x.v,{tx:"Withdraw",config:Y,disabled:0n==R||0n==W||_<=0n||_>L,onTxSuccess:()=>{console.info("Redeem onSuccess:"),M("")},approves:{[null==s?void 0:s.xTokenAddress]:_*W/p.Pq,[n.O1[(0,a.BV)()]]:_*R/p.Pq},spender:null==s?void 0:s.vault})]})})]})]})})}function VaultCollapse(e){let{asset:s="ETH"}=e,{balances:t,prices:d,vaultsMode:c,vaultsState:x,earns:m,vaultsDiscount:h}=(0,o.useContext)(i.g),f=n.iK[(0,a.BV)()].find(e=>e.assetTokenSymbol==s),b=x[(null==f?void 0:f.vault)||"null"],g=function(e){let{vaultsState:s}=(0,o.useContext)(i.g),t=s[(null==e?void 0:e.vault)||"null"],l=Math.max(0,1+1/((0,v.pF)((0,v.ok)(t,"aar"),(0,v.ok)(t,"AARDecimals"))-1));return l}(f),w=(0,v.ok)(d,null==f?void 0:f.assetTokenSymbol),N=(0,j.dq)((0,v.ok)(x,[null==f?void 0:f.vault,"M_ETH"])),y=(0,j.dq)((0,v.ok)(x,[null==f?void 0:f.vault,"M_ETHx"])),S=(0,j.dq)((0,v.ok)(x,[null==f?void 0:f.vault,"M_ETH"])*w/p.Pq),k=(0,j.dq)((0,v.ok)(x,[null==f?void 0:f.vault,"M_USB_ETH"])),q=(0,v.Rr)((0,v.ok)(x,[null==f?void 0:f.vault,"aar"]),(0,v.ok)(x,[null==f?void 0:f.vault,"AARDecimals"])),R=c[null==f?void 0:f.assetTokenSymbol],W=b.M_ETHx>0n?t[null==f?void 0:f.xTokenSymbol]*b.M_ETH/b.M_ETHx:0n,D=b.M_ETHx>0n?-(t[null==f?void 0:f.xTokenSymbol]*b.M_USB_ETH)/b.M_ETHx:0n,F=h[null==f?void 0:f.vault],{address:L}=(0,T.mA)(),[_,Y]=(0,o.useState)(!1),z="ETH"===s?"ETHx":"USDBx",Z="/".concat(s,".svg"),O="/".concat(s,"x.svg");return(0,l.jsxs)("div",{className:"border border-solid border-[#E4E4E7] rounded-2xl overflow-hidden",children:[(0,l.jsxs)("div",{className:"w-full flex flex-col gap-5 md:flex-row justify-between items-center bg-white p-4 md:p-10",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5",children:[(0,l.jsxs)("div",{className:"flex w-full md:w-[10rem] flex-shrink-0",children:[(0,l.jsx)(r(),{alt:"",width:40,height:40,src:Z}),(0,l.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-black text-base font-semibold leading-[16px] whitespace-nowrap",children:s}),(0,l.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",(0,j.Rp)(b.P_ETH,3,parseInt((0,v.ok)(b,"P_ETH_DECIMALS").toString()))]})]})]}),(0,l.jsx)("div",{className:"h-[1px] w-full bg-[#E4E4E7] md:hidden"}),(0,l.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 gap-y-[2rem] md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Total Deposit"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{width:14,height:14,src:Z,alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:N})]}),(0,l.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$",S]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"USB Debt"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{width:14,height:14,src:H.USB,alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:k})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:[z,(0,l.jsx)(u.C,{children:"This is a Margin token, representing your open position in the vault."})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{width:14,height:14,src:H[z],alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:y})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:["AAR",(0,l.jsx)(u.C,{children:"Asset Adequacy Ratio"})]}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:q})})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Status"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:R<=1?M:P}),R<=1?"Stability":"Adjustment"]})})})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Discount Offer"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:F?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:P}),"Yes"]}):(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:M}),"No"]})})})]})]})]}),(0,l.jsxs)("div",{className:"flex items-center text-xs text-[#6466F1] cursor-pointer",onClick:()=>{Y(!_)},children:[(0,l.jsx)("span",{className:"mr-[5px]",children:_?"Hide":"Details"}),_?E:U]})]}),(0,l.jsx)(B.Collapse,{isOpened:_,className:"ease-linear",children:(0,l.jsx)("div",{className:L?"w-full min-h-[286px] rounded-b-[16px] bg-[#F2F5F9] p-[30px]":"w-full h-[202px] rounded-b-[16px] bg-[#F2F5F9] p-[30px]",children:(0,l.jsxs)("div",{className:"w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,l.jsx)("div",{className:"w-full md:w-[12rem] md:h-full mb-[40px] md:mb-0 flex items-center",children:(0,l.jsxs)("div",{className:"flex mr-[55px]",children:[(0,l.jsx)(r(),{alt:"",width:54,height:54,src:O}),(0,l.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-black text-[24px] font-semibold leading-[24px]",children:z}),(0,l.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",(0,j.dq)(d[z])]})]})]})}),(0,l.jsxs)("div",{className:"w-full md:w-[300px] min-h-[108px] flex flex-col justify-between",children:[L&&(0,l.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Open Position"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{src:H.ETH,width:12,height:12,alt:"",className:"mr-[5px]"}),(0,j.dq)(W)]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsxs)("div",{children:["Margin Loan",(0,l.jsxs)(u.C,{children:["Repay your margin loan to redeem ",s," corresponding to your open position."]})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{src:H.USB,width:12,height:12,alt:"",className:"mr-[5px]"}),(0,j.dq)(D)]})]})]}),(0,l.jsxs)("div",{className:" text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[V,g.toFixed(2),"x Leveraged long on ",s]}),(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[V,"Add ",null==f?void 0:f.xTokenSymbol," to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[V,"Add USB to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center",children:[V,"View contract"]})]})]})]}),(0,l.jsx)("div",{className:"w-full md:min-w-[604px] md:flex md:items-center md:justify-center",children:L&&f?(0,l.jsx)(VaultSimple,{vaultConfig:f}):f?(0,l.jsx)(C.x3,{}):(0,l.jsx)(A.Z,{className:"rounded",children:"Comming soon"})})]})})})]})}function Vaults(){let{aar:e,assetLocked:s,prices:t}=(0,o.useContext)(i.g);return n.iK[(0,a.BV)()].find(e=>"ETH"==e.assetTokenSymbol),(0,l.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold text-neutral-900",children:"Vaults"}),(0,l.jsxs)("div",{className:"w-full mt-[20px] mb-[30px] flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,l.jsx)("div",{className:"min-w-[21px] mt-[5px] md:mt-0",children:(0,l.jsx)(r(),{width:21,height:14,src:"./vector.png",alt:"vector"})}),(0,l.jsx)("span",{className:"ml-[6px]",children:"Depositing assets into the Vaults not only yields protocol income but also qualifies for Blast Developer Airdrop."})]}),(0,l.jsxs)(d.r,{numItemsMd:1,className:"gap-3 mt-4",children:[(0,l.jsx)(VaultCollapse,{asset:"ETH"}),(0,l.jsx)(VaultCollapse,{asset:"USDB"})]})]})}},76036:function(e,s,t){"use strict";t.d(s,{v:function(){return ApproveAndTx}});var l=t(57437),a=t(72009),n=t(81628),i=t(2265),d=t(71424),c=t(56926),r=t(51143),o=t(12831);let x={},useApproves=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:l}=(0,c.mA)(),m=(0,o.uT)(),{data:u}=(0,c.py)(),[h,p]=(0,i.useState)(!1),f=(0,i.useMemo)(()=>Object.keys(e).filter(e=>e!==a.K8),[e]),[v,j]=(0,i.useState)(s&&x[s]||{}),updateAllownce=(e,t)=>{s&&(x[s]={...x[s]||{},[e]:t},j(s=>({...s,[e]:t})))},{data:b}=(0,c.Ov)(),g=(0,c.t_)();(0,i.useEffect)(()=>{l&&s&&f.forEach(e=>{m({abi:r.em,address:e,functionName:"allowance",args:[l,s]}).then(s=>updateAllownce(e,s||0n)).catch(console.error)})},[f,l,b]);let[w,N]=(0,i.useState)(!1),y=(0,i.useMemo)(()=>f.filter(s=>(0,n.ok)(e,s)>0n&&(0,n.ok)(e,s)>(0,n.ok)(v,s)),[e,f,v]),approve=async()=>{if(0!=y.length&&s)try{N(!0),p(!1);for(let l=0;l<y.length;l++){let a=y[l],n=!1===t?e[a]:t,i=await (null==u?void 0:u.writeContract({abi:r.em,address:a,functionName:"approve",args:[s,n]}));i&&await (null==g?void 0:g.waitForTransactionReceipt({hash:i})),updateAllownce(a,n)}d.A.success("Approve success"),N(!1),p(!0)}catch(e){throw d.A.error((0,n.az)(e)),N(!1),p(!1),e}};return{approve,loading:w,shouldApprove:y.length>0,isSuccess:h}};var m=t(43003),u=t(35769),h=t(72084);function ApproveAndTx(e){let{className:s,tx:t,approves:a,spender:n,requestAmount:d,config:c,toast:r=!0,disabled:o,onTxSuccess:x,onApproveSuccess:p}=e,{write:f,isDisabled:v,isLoading:j}=(0,m.R)({onSuccess:()=>x&&x(),...c},r),b=o||v||j||!1===c.enabled,{approve:g,shouldApprove:w,loading:N,isSuccess:y}=useApproves(a||{},n,d),S=(0,i.useRef)();return(S.current=p,(0,i.useEffect)(()=>{S.current&&y&&S.current()},[y]),w)?(0,l.jsxs)("button",{className:(0,u.m)("btn-primary flex items-center justify-center gap-4",s),onClick:g,disabled:o||!g||N,children:[N&&(0,l.jsx)(h.$,{}),"Approve"]}):(0,l.jsxs)("button",{className:(0,u.m)("btn-primary flex items-center justify-center gap-4",s),onClick:()=>f(),disabled:b,children:[j&&(0,l.jsx)(h.$,{}),t]})}},80547:function(e,s,t){"use strict";t.d(s,{W:function(){return AssetInput}});var l=t(57437),a=t(81628),n=t(20373),i=t(57042),d=t(16691),c=t.n(d),r=t(2265),o=t(16775),x=t(82288);function AssetInput(e){let{asset:s="ETH",checkBalance:t=!0,balance:d,balanceTit:m="Balance",balanceDecimals:u=18,exchange:h,readonly:p,selected:f,onClick:v,amount:j,setAmount:b,price:g,disable:w,hasInput:N=!1,options:y,onChange:S=()=>{},defaultValue:k,balanceClassName:A="",disableNegative:C}=e,B=(0,r.useRef)(null),T=t&&void 0!==d&&(0,a.su)("number"==typeof j?j+"":j||"")>("bigint"==typeof d?d:0n);return(0,l.jsxs)("div",{className:"relative w-full",onClick:()=>{v&&!w&&v()},children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,l.jsx)(c(),{width:24,height:24,src:"/".concat(s,".svg"),alt:""}),(0,l.jsxs)("div",{className:"text-base font-medium",children:[(0,l.jsxs)("div",{children:[N?(0,l.jsx)(x.ZP,{options:y,onChange:S,defaultValue:k,styles:{control:(e,s)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,l.jsx)("div",{children:s}),g&&(0,l.jsx)("div",{className:"text-neutral-500 text-xs",children:g})]}),h&&(0,l.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",h]})]})]}),(0,l.jsx)("input",{value:j,onChange:e=>{let s=(e.target.value||"").replaceAll("-","").replaceAll("+","");b(s)},ref:B,type:"number",disabled:w,className:(0,i.Z)(p?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400 ":!T},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",pattern:"[0-9.]{36}",step:.01,title:"",readOnly:p})]}),void 0!=d&&(0,l.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,l.jsxs)("div",{className:A,children:[(0,l.jsxs)("span",{children:[m,": ",(0,n.Rp)(d,3,u)]}),(0,l.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,o.b)(d,u);b(e),v&&!w&&v()},children:"Max"})]}),(0,l.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},72084:function(e,s,t){"use strict";t.d(s,{$:function(){return Spinner}});var l=t(57437);let Spinner=e=>{let{className:s}=e;return(0,l.jsxs)("svg",{fill:"none",className:s?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,s,t){"use strict";t.d(s,{C:function(){return Tip}});var l=t(57437),a=t(75224),n=t(40311);function Tip(e){let{children:s,node:t}=e,i=document.getElementById("tooltip-root");return(0,l.jsx)(a.zt,{children:(0,l.jsxs)(a.fC,{children:[(0,l.jsx)(a.xz,{asChild:!0,children:t?(0,l.jsx)("div",{className:"inline-block cursor-default",style:{verticalAlign:"text-bottom"},children:t}):(0,l.jsx)("div",{className:"inline-block px-[3px] cursor-default relative",style:{transform:"translateY(-6%)"},children:(0,l.jsx)(n.apP,{className:"inline-block stroke-slate-500",style:{fontSize:"1.3em"}})})}),(0,l.jsx)(a.h_,{container:i,children:(0,l.jsxs)(a.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[s,(0,l.jsx)(a.Eh,{})]})})]})})}},43003:function(e,s,t){"use strict";t.d(s,{R:function(){return useWrapContractWrite}});var l=t(81628),a=t(2265),n=t(71424),i=t(56926),d=t(12831);function useWrapContractWrite(e){let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[t,c]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),x=(0,i.t_)(),{data:m}=(0,i.py)(),u=!x||!m||!m.account||t||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!u){c(!0),o(!1);try{let t="function"==typeof e?await e():await (0,d.zp)(e),{request:l}=await x.simulateContract({account:m.account,...t}),a=await m.writeContract(l),i=await x.waitForTransactionReceipt({hash:a});if("success"!==i.status)throw"Transaction reverted";o(!0),t.onSuccess&&t.onSuccess({}),s&&n.A.success("Transaction success")}catch(e){s&&n.A.error((0,l.az)(e))}c(!1)}};return{write,isDisabled:u,isLoading:t,isSuccess:r}}},20373:function(e,s,t){"use strict";t.d(s,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var l=t(16775),a=t(79352);let displayBalanceWithUnit=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let a=10**s;return(Math.floor(Number((0,l.b)(e,t))*a)/a).toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalance=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=Number((0,a.d)(e)),l=Number((.1**s).toFixed(s));return t>0&&t<l?"<"+l:t<0&&t>-l?">-"+l:t.toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalanceWithoutFormat=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=10**s;return String(Math.floor(Number((0,a.d)(e))*t)/t)}}},function(e){e.O(0,[27,866,33,787,986,232,510,539,240,156,725,619,356,128,203,608,322,971,472,744],function(){return e(e.s=26295)}),_N_E=e.O()}]);