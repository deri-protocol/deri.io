(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[29],{1763:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var i,s=c(248),a=c(362),r=c(9),n=c(175),l={};function d(e){var t=Object(n.b)(),c=function(e){return l[e]}(e),i=c.address,d=c.abi,o=t.ethereum;return Object(r.useMemo)((function(){if(!i||!d||!o)return null;var e=new a.a(o,"any");return new s.b(i,d,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(e,t.account))}),[i,d,o])}(i=c(1643)).keys().forEach((function(e){var t=e.split("/"),c=t[t.length-1];l[c.substring(0,c.indexOf("."))]=i(e)}))},2388:function(e,t,c){},2599:function(e,t,c){"use strict";c.r(t);var i=c(9),s=c(66),a=c(23),r=c(219),n=(c(1465),c(218)),l=(c(57),c.p+"static/media/time.0b0bfc0e.svg"),d=(c.p,c(2388),c(1763)),o=c(16),j=c(70),b=c(6);const{BigNumber:h,ethers:u,utils:m}=c(289);t.default=Object(s.b)("wallet","poolManager")(Object(s.c)((function(e){let{lang:t,wallet:c={},type:s="deri"}=e;const[h,u]=Object(i.useState)(0),[m,O]=Object(i.useState)(!0),x=Object(r.c)(),[f,v]=Object(i.useState)({}),[p,g]=Object(i.useState)(!1),[w,N]=Object(i.useState)(!0),[C,S]=Object(i.useState)(!1),T=Object(d.a)("airDrop"),y=(Object(d.a)("ERC20USDC"),{processing:"Claim Processing",success:"Claim Reward Executed",error:"Claim Reward Failed"}),k={success:"Claim Reward",error:"Transaction Failed"},U=async()=>{if(c.isConnected()&&T&&Object(a.i)(c.detail.chainId,42161)){const e=await T.whitelist(c.detail.account);S(!!e)}};return Object(i.useEffect)((()=>{c.isConnected()&&U()}),[c.chainId,c.account]),Object(i.useEffect)((()=>{if(C){(new Date).getTime()>=16687656e5?O(!0):O(!1)}else O(!0)}),[C]),Object(b.jsx)("div",{className:"airdrop-box",children:Object(b.jsx)("div",{className:"airdrop-info",children:Object(b.jsxs)("div",{className:"airdrop-info-box",children:[Object(b.jsx)("div",{className:"airdrop-title",children:"$1000 Giveaway for FTT Holders"}),Object(b.jsxs)("div",{className:"wallet-address",children:[Object(b.jsx)("span",{className:"blue-logo"}),Object(a.l)(c.detail.account)]}),"usdc"===s&&Object(b.jsxs)("div",{className:"airdrop-time position",children:[Object(b.jsx)("div",{className:"time-logo",children:Object(b.jsx)("img",{src:l,alt:""})}),Object(b.jsxs)("div",{className:"time-text",children:[Object(b.jsxs)("div",{className:"time-title",children:[Object(b.jsx)("div",{children:t["start-time"]}),Object(b.jsx)("div",{children:t["expire-time"]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"2022-11-09 10:00:00 UTC"}),Object(b.jsx)("div",{children:"2022-11-18 10:00:00 UTC"})]})]})]}),"deri"===s&&Object(b.jsxs)("div",{className:"airdrop-time",children:[Object(b.jsx)("div",{className:"time-logo",children:Object(b.jsx)("img",{src:l,alt:""})}),Object(b.jsxs)("div",{className:"time-text",children:[Object(b.jsxs)("div",{className:"time-title",children:[Object(b.jsx)("div",{children:t["start-time"]}),Object(b.jsx)("div",{children:t["expire-time"]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(b.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(b.jsx)("div",{className:"claim",children:Object(b.jsx)(n.a,{fontWeight:"bold",disabled:m,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:async()=>{if(c.isConnected()&&T&&42161===c.detail.chainId){let t;try{t=await T.claimPToken()}catch(e){if(console.log(e),e.error&&e.error.data&&e.error.data.message){let t=e.error.data.message;x.error(t)}return!1}if(!t||!t.hash)return!1;j.a.emit(o.p,{title:y,content:k,hash:t.hash});const c=await t.wait();if(console.log("receipt",c),c&&(console.log("receipt",c),c&&c.transactionHash)){const e=c.transactionHash;c.status?(U(),O(!0),j.a.emit(o.q,{title:y,content:k,context:{success:!0,hash:e,error:"error"}})):j.a.emit(o.q,{title:y,content:k,context:{success:(!1).success,hash:e,error:"error"}})}}}})})]})})})})))}}]);
//# sourceMappingURL=29.976ea2cd.chunk.js.map