(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4322],{46601:function(){},8580:function(e,t,a){"use strict";a.d(t,{Hj:function(){return s},Pq:function(){return r},pn:function(){return l},v:function(){return n},xb:function(){return o}});let n="https://twitter.com/WandProtocol",s="https://discord.gg/fy6A7JCE5N",o="https://docs.wand.fi",r=BigInt(1e18),l=864e5},15898:function(e,t,a){"use strict";a.d(t,{g:function(){return h},A:function(){return FetcherProvider}});var n=a(57437),s=a(84486),o=a(72009);let getTokens=e=>o.iK[e].map(e=>({symbol:e.assetTokenSymbol,address:e.assetTokenAddress})).concat(o.iK[e].map(e=>({symbol:e.xTokenSymbol,address:e.xTokenAddress}))).concat([{symbol:"USB",address:o.O1[e]}]).filter(e=>"ETH"!==e.symbol);var r=a(8580),l=a(14389),u=a(2265),d=a(56926),i=a(32699),c=a(93362),m=a(91056),p=a(54415),f=a(81628),b=a(24033),y=a(21693),k=a(16775),v=a(84661);function proxyGetDef(e,t){return new Proxy(e,{get:function(e,a){return a in e&&null!==e[a]&&void 0!==e[a]?e[a]:t}})}let h=(0,u.createContext)({balances:proxyGetDef({},0n),totalSupplies:proxyGetDef({},0n),prices:proxyGetDef({},0n),assetLocked:proxyGetDef({},0n),aar:proxyGetDef({},0),vaultUSBTotal:proxyGetDef({},0n),vaultsMode:proxyGetDef({},0),vaultsDiscount:proxyGetDef({},!1),vaultsState:proxyGetDef({},proxyGetDef({},0n)),stableVaultsState:proxyGetDef({},proxyGetDef({},0n)),earns:proxyGetDef({},0n)}),FetcherProvider=e=>{let{children:t}=e,a=(0,b.usePathname)(),S="/"!=a,x=(0,l.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,d.t_)({chainId:e});u.useMemo(()=>{let e=function(e){var t,a;let{chain:n,transport:s}=e,o={chainId:n.id,name:n.name,ensAddress:null===(a=n.contracts)||void 0===a?void 0:null===(t=a.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===s.type?new i.H(s.transports.map(e=>{let{value:t}=e;return new c.r(null==t?void 0:t.url,o)})):new c.r(s.url,o)}(t);return m.ON.provider=e,e},[t])}();let{address:D}=(0,d.mA)(),{data:T}=(0,d.KQ)({address:D,watch:!0,enabled:!!D&&S,chainId:x}),g=(0,u.useMemo)(()=>getTokens(x),[x]),A=(0,u.useMemo)(()=>({contracts:[...g.map(e=>({address:e.address,abi:v.em,functionName:"balanceOf",args:[D],chainId:x})),...g.map(e=>({address:e.address,abi:v.em,functionName:"totalSupply",chainId:x}))],watch:!0,enabled:!!D&&S,allowFailure:!0}),[g,D,S]),{data:G}=(0,p.uX)(A),M=g.length,w=(0,u.useMemo)(()=>proxyGetDef({},0n),[]);w[o.K8]=(null==T?void 0:T.value)||0n,g.forEach((e,t)=>{w[e.address]=(0,f.ok)(G,[t,"result"]),w[e.symbol]=(0,f.ok)(G,[t,"result"])});let N={};g.forEach((e,t)=>{N[e.address]=(0,f.ok)(G,[t+M,"result"]),N[e.symbol]=(0,f.ok)(G,[t+M,"result"])});let P=o.iK[x],W=function(){let e=(0,b.usePathname)(),t="/"!=e,a=(0,l.p)(),n=o.iK[a],{data:d}=(0,p.uX)({watch:!0,enabled:t,contracts:[...n.map(e=>({vc:e,abi:s.nq,address:e.assetTokenFeed,functionName:"latestPrice"}))]}),{data:i}=(0,p.uX)({watch:!0,cacheTime:r.pn,enabled:t,contracts:[...n.map(e=>({abi:s.nq,address:e.assetTokenFeed,functionName:"decimals"}))]});return(0,u.useMemo)(()=>{let e={};return n.forEach((t,a)=>{let n=(0,f.ok)(d,[a,"result"]),s=(0,f.ok)(i,[a,"result"]);e[t.assetTokenAddress]=[n,s]}),e},[d,i,n])}(),B=(0,u.useMemo)(()=>({watch:!0,enabled:S,contracts:[...P.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"assetBalance"}))]}),[P,S]),{data:X}=(0,p.uX)(B),E=(0,u.useMemo)(()=>({watch:!0,enabled:S,contracts:[...P.map(e=>({abi:s.WW,address:e.vault,functionName:"usbTotalSupply"}))]}),[S,P]),{data:q}=(0,p.uX)(E),C=(0,u.useMemo)(()=>({watch:!0,enabled:S,contracts:[...P.map(e=>({vc:e,abi:s.Wn,address:o.O6[x],functionName:"AAR",args:[e.vault]}))]}),[S,P]),{data:F}=(0,p.uX)(C),K=(0,u.useMemo)(()=>({cacheTime:r.pn,enabled:S,contracts:[...P.map(e=>({abi:s.WW,address:e.vault,functionName:"AARDecimals"}))]}),[S,P]),{data:I}=(0,p.uX)(K),O=(0,u.useMemo)(()=>({watch:!0,enabled:S,contracts:[...P.map(e=>({abi:s.WW,address:e.vault,functionName:"vaultMode"}))]}),[S,P]),{data:R}=(0,p.uX)(O),_=(0,u.useMemo)(()=>({watch:!0,enabled:S,contracts:[...P.map(e=>({vc:e,abi:s.Wn,address:o.O6[x],functionName:e.isStable?"getStableVaultState":"getVaultState",args:[e.vault]}))]}),[S,P]),{data:U}=(0,p.uX)(_),V=(0,u.useMemo)(()=>({cacheTime:r.pn,enabled:S,contracts:[...P.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,y.$G)("Y",{size:32})]}))]}),[S,P]),{data:Y}=(0,p.uX)(V),H=(0,u.useMemo)(()=>proxyGetDef({[o.O1[x]]:r.Pq},0n),[x]),j=(0,u.useMemo)(()=>proxyGetDef({},0n),[]),z=(0,u.useMemo)(()=>proxyGetDef({},0n),[]),L=(0,u.useMemo)(()=>proxyGetDef({},0n),[]),$=(0,u.useMemo)(()=>proxyGetDef({},0),[]),J=(0,u.useMemo)(()=>proxyGetDef({},proxyGetDef({},0n)),[]),Q=(0,u.useMemo)(()=>proxyGetDef({},proxyGetDef({},0n)),[]),Z=function(e,t,a){let n=(0,u.useMemo)(()=>proxyGetDef({},!1),[]),r=(0,l.p)(),d=o.iK[r],{data:i}=(0,p.uX)({contracts:d.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,y.$G)("CircuitBreakPeriod",{size:32})]}))});return d.forEach((s,o)=>{if(s.isStable){let e=t[(null==s?void 0:s.vault)||"null"];n[s.vault]=e&&e.M_USDCx>0n&&e.aar<e.AARS}else{let t=(0,f.ok)(i,[o,"result"]),r=e[(null==s?void 0:s.vault)||"null"],l=a[(null==s?void 0:s.vault)||"null"],u=(0,f.ok)(r,"AARBelowCircuitBreakerLineTime"),d=2==l&&r&&((0,f.ok)(r,"aar")>=(0,f.ok)(r,"AARC")||BigInt(new Date().getTime()/1e3)-u>=t);n[s.vault]=d}}),n}(J,Q,$);P.forEach((e,t)=>{var a,n,s;let l=(0,f.ok)(X,[t,"result"]),u=(0,f.ok)(q,[t,"result"]),d=(0,f.ok)(W[e.assetTokenAddress],[0]),i=(0,f.ok)(W[e.assetTokenAddress],[1]);L[e.vault]=u;let c=i>0n?d*r.Pq/10n**i:0n;H[e.assetTokenAddress]=c;let m=(0,f.ok)(N,e.xTokenSymbol),p=m>0n&&l>0n&&c>0n&&u>0n&&l*c>u*r.Pq?(l*c-u*r.Pq)/m:0n;m>0n&&l>0n&&c>0n&&u>0n&&l*c<u*r.Pq&&(H[o.O1[x]]=l*c/u),H[e.xTokenAddress]=p,j[e.assetTokenAddress]=l;let b=(0,k.b)((0,f.ok)(F,[t,"result"]),parseInt((0,f.ok)(I,[t,"result"]).toString()));z[e.vault]=parseFloat(b),e.isStable?Q[e.vault]=proxyGetDef({settingsDecimals:10n,...null==U?void 0:null===(n=U[t])||void 0===n?void 0:n.result,Y:(0,f.ok)(Y,[t,"result"])},0n):J[e.vault]=proxyGetDef({settingsDecimals:10n,...null==U?void 0:null===(s=U[t])||void 0===s?void 0:s.result,Y:(0,f.ok)(Y,[t,"result"])},0n);let y=Q[e.vault];$[e.vault]=e.isStable?y.aar<y.AARS?2:1:(null==R?void 0:null===(a=R[t])||void 0===a?void 0:a.result)||0});let ee=function(){let{address:e}=(0,d.mA)(),t=(0,b.usePathname)(),a=(0,l.p)(),n=(0,u.useMemo)(()=>o.iK[a].filter(e=>!e.isStable&&e.ptyPoolAboveAddress&&e.ptyPoolBelowAddress).map(e=>[{poolAddress:e.ptyPoolBelowAddress,stakeSymbol:"USB",matchSymbol:e.assetTokenSymbol,earnSymbol:e.xTokenSymbol,earnForMatchSymbol:e.assetTokenSymbol},{poolAddress:e.ptyPoolAboveAddress,stakeSymbol:e.assetTokenSymbol,matchSymbol:"USB",earnSymbol:e.assetTokenSymbol,earnForMatchSymbol:e.xTokenSymbol}]).flat(),[a]),{data:r}=(0,p.uX)({watch:!0,enabled:!!e&&"/earn"==t,contracts:[...n.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"userStakingBalance",args:[e]}}),...n.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchedToken",args:[e]}}),...n.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedStakingYields",args:[e]}}),...n.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchingYields",args:[e]}}),...n.map(e=>{let{poolAddress:t}=e;return{abi:s.aT,address:t,functionName:"totalStakingBalance"}})]}),i=(0,u.useMemo)(()=>proxyGetDef({},proxyGetDef({},0n)),[]);return n.forEach((e,t)=>{let{poolAddress:a,stakeSymbol:s,matchSymbol:o,earnSymbol:l}=e,u=(0,f.ok)(r,[t,"result"]),d=(0,f.ok)(r,[t+n.length,"result"]),c=(0,f.ok)(r,[t+2*n.length,"result"]),m=(0,f.ok)(r,[t+3*n.length,"result"]),p=(0,f.ok)(r,[t+4*n.length,"result"]);i[a]={stakeSymbol:s,matchSymbol:o,earnSymbol:l,stake:u,match:d,earn:c,earnForMatch:m,totalStake:p}}),i}();return(0,n.jsx)(h.Provider,{value:{balances:w,totalSupplies:N,prices:H,assetLocked:j,aar:z,vaultUSBTotal:L,vaultsMode:$,vaultsDiscount:Z,vaultsState:J,stableVaultsState:Q,earns:ee},children:t})}}}]);