(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{35883:function(){},78010:function(e,t,a){Promise.resolve().then(a.t.bind(a,72853,23)),Promise.resolve().then(a.bind(a,24635)),Promise.resolve().then(a.t.bind(a,8780,23)),Promise.resolve().then(a.t.bind(a,23925,23))},24635:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return PageLayout}});var s=a(57437),n=a(2265),l=a(91056),i=a(75398),c=a(84661),r=a(56926),o=a(90433),d=a(86096),m=a(14701),h=a(91653),u=a(91999),x=a(85107),f=a(4707),p=a(36337),b=a(94828),j=a(79116),g=a(68917),v=a(15898),w=a(9798),N=a(29526),y=a(66247);let S="b3ff10277f66a6ba31bbb88fb6ea4365",k={[l.dm.id]:"blast_testnet_sepolia",[i.F.id]:"eth_sepolia"},P=[(0,o.R)({rpc:e=>({http:"https://rpc.ankr.com/".concat(k[e.id],"/").concat("e1a06837672f1dd89a4c70522941d3beebad120eafad005d79d77c42856d9310","/"),webSocket:""})}),(0,d.I)()],{chains:I,publicClient:_,webSocketPublicClient:B}=(0,c.QB)(l.Af,P,{batch:{multicall:{batchSize:10,wait:120}},stallTimeout:1e4}),C=new w.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new N.h});function Providers(e){let{children:t}=e,[a,l]=n.useState(),[i,o]=n.useState();return(n.useEffect(()=>{let e=(0,c.o6)({storage:{getItem:e=>window.localStorage.getItem(e),removeItem:e=>window.localStorage.removeItem(e),setItem:(e,t)=>{"wagmi.cache"!==e&&localStorage.setItem(e,t)}}}),t=(0,m.a3)([{groupName:"Recommended",wallets:[(0,h.U)({chains:I}),(0,u.P)({chains:I,projectId:S}),(0,x.D)({appName:"Wand",chains:I}),(0,f.c)({chains:I,projectId:S}),(0,p.X)({chains:I,projectId:S}),(0,b.D)({chains:I,projectId:S})]}]),{chains:a,publicClient:s}=(0,c.QB)(I,P,{batch:{multicall:{batchSize:10,wait:120}},stallTimeout:1e4});o(a),l((0,r._g)({autoConnect:!0,connectors:t,publicClient:s,storage:e}))},[]),a)?(0,s.jsx)(y.e,{client:C,children:(0,s.jsx)(r.eM,{config:a,children:(0,s.jsx)(g.QueryParamProvider,{adapter:j.Z,children:(0,s.jsx)(m.pj,{chains:i,locale:"en-US",modalSize:"compact",children:(0,s.jsx)(v.A,{children:t})})})})}):null}var E=a(8580),z=a(23291),F=a(57042),D=a(16691),H=a.n(D),L=a(61396),Z=a.n(L),A=a(24033),O=a(41697),Q=a(35932),R=a(26266),T=a(34776);let V=[{name:"doc",url:E.xb,icon:Q.K99},{name:"Twitter",url:E.v,icon:Q.vJk},{name:"Discord",url:E.Hj,icon:Q.HpO}],U=[{href:"/early",label:"Early Access",icon:O.bBF},{href:"/vaults",label:"Vaults",icon:O.QZG},{href:"/earn",label:"Earn",icon:O.j0p},{href:"/discount",label:"Discount Offer",icon:O.nlc},{href:"/dashboard",label:"Dashboard",icon:O.FL4}],W={[R.Fo.id]:"Ethereum Sepolia",[l.dm.id]:"Blast Sepolia"},Y={[R.Fo.id]:"/ETH.svg",[l.dm.id]:"blast.png"};function Header(){let e=(0,A.usePathname)(),t="/"!==e&&window.innerWidth<1024,{openChainModal:a}=(0,m.iC)();return(0,s.jsxs)("header",{className:"h-[72px] fixed w-full max-w-[1440px] inset-0 mx-auto flex items-center justify-between px-4 bg-slate-50/30 backdrop-blur-lg z-30 ml-[calc(100vw - 100%)]",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)(Z(),{href:"/",className:"font-semibold flex pr-1 items-center text-base leading-7",children:[(0,s.jsx)(H(),{className:"",src:"/logo-alt.svg",height:52,width:52,alt:"wand logo image only"}),(0,s.jsx)("span",{className:"font-poppins",style:{display:t?"none":"inline-block"},children:"Wand"})]}),(0,s.jsxs)(z.fC,{children:[(0,s.jsxs)(z.xz,{className:"flex text-slate-500 font-medium hidden items-center capitalize text-sm",children:[e.split("/")[1],(0,s.jsx)(Q.YRR,{})]}),(0,s.jsx)(z.Uv,{children:(0,s.jsx)(z.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md",children:U.map(e=>{let{href:t,label:a,icon:n}=e;return(0,s.jsx)(z.ck,{children:(0,s.jsxs)(Z(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50",href:t,children:[(0,s.jsx)(n,{}),a]})},a)})})})]})]}),"/"!==e?(0,s.jsx)("div",{className:"hidden lg:flex w-fit gap-12 items-center justify-between",children:U.map(t=>{let{href:a,label:n,icon:l}=t;return(0,s.jsxs)(Z(),{className:(0,F.Z)("text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1",e==="/".concat(a)?"text-slate-700":"text-slate-500"),href:a,children:[(0,s.jsx)(l,{}),n]},a)})}):null,(0,s.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,s.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:V.map(e=>{let{url:t,icon:a,name:n}=e;return(0,s.jsx)(Z(),{href:t,className:"text-slate-300 hover:text-indigo-500",children:(0,s.jsx)(a,{})},n)})}),(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 font-medium rounded-full cursor-pointer",onClick:()=>a&&a(),children:[(0,s.jsx)(H(),{width:24,height:24,src:Y[(0,l.BV)()],alt:""}),(0,s.jsx)("div",{className:"hidden sm:block",children:W[(0,l.BV)()]})]}),"/"===e?(0,s.jsx)(Z(),{href:"/vaults",className:"h-fit bg-indigo-500 text-white text-sm leading-6 font-medium px-4 py-2 rounded-full whitespace-nowrap",children:"Launch App"}):(0,s.jsx)(T.Z,{})]})]})}var q=a(71424);function PageLayout(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Providers,{children:[(0,s.jsx)(Header,{}),(0,s.jsx)("div",{className:"min-h-[calc(100vh+1px)] h-0 pt-[80px] pb-6 ml-[calc(100vw - 100%)]",children:t})]}),(0,s.jsx)(q.x,{position:"top-right",offset:70})]})}},34776:function(e,t,a){"use strict";a.d(t,{Z:function(){return ConnectBtn}});var s=a(57437),n=a(14701);function ConnectBtn(){return(0,s.jsx)(n.NL,{chainStatus:"none",showBalance:!1})}},72853:function(){}},function(e){e.O(0,[1866,9472,3033,1465,5986,5058,7133,4386,930,8156,4584,5915,4322,2971,2472,1744],function(){return e(e.s=78010)}),_N_E=e.O()}]);