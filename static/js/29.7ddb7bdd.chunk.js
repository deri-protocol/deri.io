(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[29],{1778:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var r,i=c(247),a=c(361),s=c(9),n=c(173),d={};function l(e){var t=Object(n.b)(),c=function(e){return d[e]}(e),r=c.address,l=c.abi,o=t.ethereum;return Object(s.useMemo)((function(){if(!r||!l||!o)return null;var e=new a.a(o,"any");return new i.b(r,l,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(e,t.account))}),[r,l,o])}(r=c(1654)).keys().forEach((function(e){var t=e.split("/"),c=t[t.length-1];d[c.substring(0,c.indexOf("."))]=r(e)}))},2404:function(e,t,c){},2615:function(e,t,c){"use strict";c.r(t);var r=c(2),i=c(12),a=c(0),s=c.n(a),n=c(9),d=c(66),l=c(23),o=c(218),j=(c(1466),c(217)),u=(c(57),c.p+"static/media/time.77d9d1c0.svg"),b=(c.p,c(2404),c(1778)),h=c(16),O=c(72),m=c(6),x=c(288);x.BigNumber,x.ethers,x.utils;t.default=Object(d.b)("wallet","poolManager")(Object(d.c)((function(e){var t=e.lang,c=e.wallet,a=void 0===c?{}:c,d=e.type,x=void 0===d?"deri":d,v=Object(n.useState)(0),f=Object(i.a)(v,2),p=(f[0],f[1],Object(n.useState)(!0)),g=Object(i.a)(p,2),w=g[0],N=g[1],C=Object(o.c)(),k=Object(n.useState)({}),S=Object(i.a)(k,2),T=(S[0],S[1],Object(n.useState)(!1)),y=Object(i.a)(T,2),U=(y[0],y[1],Object(n.useState)(!0)),E=Object(i.a)(U,2),R=(E[0],E[1],Object(n.useState)(!1)),D=Object(i.a)(R,2),F=D[0],H=D[1],I=Object(b.a)("airDrop"),q=(Object(b.a)("ERC20USDC"),{processing:"Claim Processing",success:"Claim Reward Executed",error:"Claim Reward Failed"}),J={success:"Claim Reward",error:"Transaction Failed"},M=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.isConnected()&&I&&Object(l.i)(a.detail.chainId,42161))){e.next=5;break}return e.next=3,I.whitelist(a.detail.account);case 3:t=e.sent,H(!!t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(r.a)(s.a.mark((function e(){var t,c,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!I||42161!==a.detail.chainId){e.next=22;break}return e.prev=1,e.next=4,I.claimPToken();case 4:t=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.t0.error&&e.t0.error.data&&e.t0.error.data.message&&(c=e.t0.error.data.message,C.error(c)),e.abrupt("return",!1);case 12:if(!t||!t.hash){e.next=16;break}O.a.emit(h.p,{title:q,content:J,hash:t.hash}),e.next=17;break;case 16:return e.abrupt("return",!1);case 17:return e.next=19,t.wait();case 19:r=e.sent,console.log("receipt",r),r&&(console.log("receipt",r),r&&r.transactionHash&&(i=r.transactionHash,r.status?(M(),N(!0),O.a.emit(h.q,{title:q,content:J,context:{success:!0,hash:i,error:"error"}})):O.a.emit(h.q,{title:q,content:J,context:{success:(!1).success,hash:i,error:"error"}})));case 22:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a.isConnected()&&M()}),[a.chainId,a.account]),Object(n.useEffect)((function(){F?(new Date).getTime()>=16687656e5?N(!0):N(!1):N(!0)}),[F]),Object(m.jsx)("div",{className:"airdrop-box",children:Object(m.jsx)("div",{className:"airdrop-info",children:Object(m.jsxs)("div",{className:"airdrop-info-box",children:[Object(m.jsx)("div",{className:"airdrop-title",children:"$1000 Giveaway for FTT Holders"}),Object(m.jsxs)("div",{className:"wallet-address",children:[Object(m.jsx)("span",{className:"blue-logo"}),Object(l.l)(a.detail.account)]}),"usdc"===x&&Object(m.jsxs)("div",{className:"airdrop-time position",children:[Object(m.jsx)("div",{className:"time-logo",children:Object(m.jsx)("img",{src:u,alt:""})}),Object(m.jsxs)("div",{className:"time-text",children:[Object(m.jsxs)("div",{className:"time-title",children:[Object(m.jsx)("div",{children:t["start-time"]}),Object(m.jsx)("div",{children:t["expire-time"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"2022-11-09 10:00:00 UTC"}),Object(m.jsx)("div",{children:"2022-11-18 10:00:00 UTC"})]})]})]}),"deri"===x&&Object(m.jsxs)("div",{className:"airdrop-time",children:[Object(m.jsx)("div",{className:"time-logo",children:Object(m.jsx)("img",{src:u,alt:""})}),Object(m.jsxs)("div",{className:"time-text",children:[Object(m.jsxs)("div",{className:"time-title",children:[Object(m.jsx)("div",{children:t["start-time"]}),Object(m.jsx)("div",{children:t["expire-time"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(m.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(m.jsx)("div",{className:"claim",children:Object(m.jsx)(j.a,{fontWeight:"bold",disabled:w,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:P})})]})})})})))}}]);
//# sourceMappingURL=29.7ddb7bdd.chunk.js.map