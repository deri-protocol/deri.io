(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1963:function(e,t,n){},2135:function(e,t,n){"use strict";n.r(t);n(4);var c=n(24),s=n(126),i=n(26),a=n(127),o=(n(1963),n(36)),l=n(3);t.default=Object(o.b)("wallet")(Object(o.c)((function(e){let{wallet:t,lang:n}=e;const o=Object(a.c)();return Object(l.jsx)("div",{className:"testnet-faucet",children:Object(l.jsxs)("div",{className:"faucet-info",children:[Object(l.jsx)("div",{className:"faucet-title",children:n["obtain-testnet-token"]}),Object(l.jsxs)("div",{className:"mint-bnb",children:[Object(l.jsx)("div",{children:n["go-to-min-bnb"]}),Object(l.jsx)("div",{className:"bnb-button",children:Object(l.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://testnet.binance.org/faucet-smart",children:"BNB"})})]}),Object(l.jsx)("div",{className:"mint-token",children:[{token:"BUSD"},{token:"SXP"},{token:"ETH"},{token:"LTC"},{token:"XRP"},{token:"BTCB"},{token:"ADA"},{token:"CAKE"},{token:"MATIC"},{token:"AAVE"},{token:"TUSD"},{token:"TRX"}].map(((e,a)=>Object(l.jsxs)("div",{className:"mint-token-box",children:[Object(l.jsx)("div",{className:"token-logo",children:Object(l.jsx)(c.a,{token:e.token,width:60,height:60})}),Object(l.jsx)("div",{className:"token-name",children:e.token}),Object(l.jsx)("div",{className:"token-button",children:Object(l.jsx)(s.a,{fontWeight:300,label:n.mint,width:88,height:31,onClick:()=>(async e=>{if(t.isConnected()){let n=[t.detail.chainId,t.detail.account,e],c=await i.a.request("mintTokenV3",n,{includeResponse:!0});c&&c.success?o.success("mint success"):o.error("mint fail")}else o.error("Please connect wallet")})(e.token)})})]},a)))})]})})})))}}]);
//# sourceMappingURL=25.ea5e9b66.chunk.js.map