(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[33],{1468:function(e,a,t){"use strict";var c,n,i=t(26),s=t(244),l=t(59),d=t(10),r=t(67),o=t(9),j=(t(93),t(1508)),b=t(66),u=t(23),v=t(20),h=t(6),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(c||(c=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=b.a.span(n||(n=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(o.useState)(Object(h.jsx)("span",{className:"loading-line"})),t=Object(d.a)(a,2),c=t[0],n=t[1],r=Object(o.useState)(!0),j=Object(d.a)(r,2),b=j[0],f=j[1],p=function(){var a=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a},N=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,d=Object(s.a)(e,m);if(p())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!a&&0===+Object(v.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(u.g)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&a)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(u.P)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),n(Object(h.jsx)(O,Object(i.a)(Object(i.a)({},d),{},{renderText:N,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var r=e.width,o=e.height;n(Object(h.jsx)(x,{className:"loading-line",width:r,height:o})),t&&f(!1)}var j=window.setTimeout((function(){p()||n(l)}),l===d.value?0:6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},2393:function(e,a,t){},2603:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t(67),i=t(2),s=t(10),l=t(9),d=t(68),r=t(88),o=t.n(r),j=t(1468),b=(t(2393),t(33)),u=t(293),v=new(0,t(293).GraphQLClient)("https://graph.deri.io/graphql",{});function h(e,a){return v.request(e,a)}var m,O,x=t(23),f=t(176),p=t(6);a.default=Object(d.b)("wallet")(Object(d.c)((function(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],d=a[1],r=Object(l.useState)(30),v=Object(s.a)(r,2),N=v[0],g=v[1],w=Object(l.useState)(30),S=Object(s.a)(w,2),k=S[0],y=S[1],T=Object(l.useState)({}),$=Object(s.a)(T,2),I=$[0],P=$[1],L=Object(f.b)().account,C=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var a,t,i,s,l,r,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(u.gql)(m||(m=Object(n.a)(["\n      query ($chainId: Int!, $fromTimestamp: Int!) {\n        tradePnl(where: { chainId: $chainId, fromTimestamp: $fromTimestamp }) {\n          account\n          chainId\n          liquidationLoss\n          notional\n          pnl\n          tradeFee\n          tradePnl\n        }\n      }\n    "]))),t=0,i=new Date,s=i.getTime()/1e3,7===k&&(t=s-604800),30===k&&(t=s-2592e3),l={chainId:42161,fromTimestamp:parseInt(String(t))},e.next=9,h(a,l);case 9:(r=e.sent).tradePnl.length&&(o=(o=r.tradePnl).slice(0,50),d(o));case 11:case"end":return e.stop()}}),e)}))),[k]),F=Object(l.useCallback)(Object(i.a)(Object(c.a)().mark((function e(){var a,t,i,s,l,d,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(u.gql)(O||(O=Object(n.a)(["\n      query ($chainId: Int!, $fromTimestamp: Int!, $account: String) {\n        tradePnl(\n          where: {\n            account: $account\n            chainId: $chainId\n            fromTimestamp: $fromTimestamp\n          }\n        ) {\n          account\n          chainId\n          liquidationLoss\n          notional\n          pnl\n          tradeFee\n          tradePnl\n        }\n      }\n    "]))),t=0,i=new Date,s=i.getTime()/1e3,7===N&&(t=s-604800),30===N&&(t=s-2592e3),l={account:L,chainId:56,fromTimestamp:parseInt(String(t))},e.next=9,h(a,l);case 9:(d=e.sent).tradePnl.length?(r=d.tradePnl[0],P(r)):P({tradeFee:0,pnl:0,notional:0});case 11:case"end":return e.stop()}}),e)}))),[N,L]);return Object(l.useEffect)((function(){C()}),[k]),Object(l.useEffect)((function(){L&&F()}),[L,N]),Object(p.jsx)("div",{className:"Leaderboard",children:Object(p.jsxs)("div",{className:"Leaderboard-box",children:[Object(p.jsxs)("div",{className:"my-historical-trading",children:[Object(p.jsxs)("div",{className:"title-tab-day",children:[Object(p.jsx)("div",{className:"title-leaderboard",children:"My Historical Trading Performance"}),Object(p.jsxs)("div",{className:"tab-day",children:[Object(p.jsx)("div",{className:o()("day-btn",{active:7===N}),onClick:function(){g(7)},children:"7 DAYS"}),Object(p.jsx)("div",{className:o()("day-btn",{active:30===N}),onClick:function(){g(30)},children:"30 DAYS"})]})]}),Object(p.jsxs)("div",{className:"my-info-list",children:[Object(p.jsxs)("div",{className:"info-box",children:[Object(p.jsxs)("div",{className:"info-num",children:[" ",Object(p.jsx)(j.a,{prefix:"$ ",value:I.notional,decimalScale:2})]}),Object(p.jsx)("div",{className:"info-title",children:" Notional "})]}),Object(p.jsxs)("div",{className:"info-box",children:[Object(p.jsx)("div",{className:"info-num",children:Object(p.jsx)(j.a,{prefix:"$ ",value:+I.tradeFee,decimalScale:2})}),Object(p.jsx)("div",{className:"info-title",children:" Transaction Fee "})]}),Object(p.jsxs)("div",{className:"info-box",children:[Object(p.jsxs)("div",{className:"info-num",children:[" ",Object(p.jsx)(j.a,{prefix:"$ ",value:+I.pnl,decimalScale:2})]}),Object(p.jsx)("div",{className:"info-title",children:" PNL "})]})]})]}),Object(p.jsxs)("div",{className:"rankings",children:[Object(p.jsxs)("div",{className:"rankings-title-tab-day",children:[Object(p.jsx)("div",{className:"rankings-title",children:"Rankings"}),Object(p.jsxs)("div",{className:"tab-day",children:[Object(p.jsx)("div",{className:o()("day-btn",{active:7===k}),onClick:function(){y(7)},children:"7 DAYS"}),Object(p.jsx)("div",{className:o()("day-btn",{active:30===k}),onClick:function(){y(30)},children:"30 DAYS"})]})]}),Object(p.jsxs)("div",{className:"rankings-list-title",children:[Object(p.jsx)("div",{className:"rank",children:"Rank"}),Object(p.jsx)("div",{className:"trade",children:"Trade"}),Object(p.jsx)("div",{className:"notional",children:"Notional"}),Object(p.jsx)("div",{className:"transaction-fee",children:"Transaction Fee"}),Object(p.jsx)("div",{className:"pnl",children:"PNL"})]}),Object(p.jsx)("div",{className:"rankings-list-num",children:t.map((function(e,a){return Object(p.jsxs)("div",{className:"rankings-list-num-box",children:[Object(p.jsxs)("div",{className:"rank",children:[a+1===1&&Object(p.jsx)(b.a,{token:"topOne",width:void 0,height:void 0,secondary:void 0,className:void 0,onClick:void 0}),a+1===2&&Object(p.jsx)(b.a,{token:"topTwo",width:void 0,height:void 0,secondary:void 0,className:void 0,onClick:void 0}),a+1===3&&Object(p.jsx)(b.a,{token:"topThree",width:void 0,height:void 0,secondary:void 0,className:void 0,onClick:void 0}),a+1>3&&Object(p.jsx)("span",{className:"top-num",children:a+1})]}),Object(p.jsx)("div",{className:"trade",children:Object(x.l)(e.account)}),Object(p.jsxs)("div",{className:"notional",children:["$"," ",Object(p.jsx)(j.a,{value:e.notional,displayType:"text",decimalScale:2})]}),Object(p.jsxs)("div",{className:"transaction-fee",children:["$"," ",Object(p.jsx)(j.a,{value:+e.tradeFee,displayType:"text",decimalScale:2})]}),Object(p.jsxs)("div",{className:o()("pnl",{up:+e.pnl>0,down:+e.pnl<0}),children:[+e.pnl>0?"+":"",Object(p.jsx)(j.a,{value:+e.pnl,displayType:"text",decimalScale:2,prefix:"$ "})]})]},a)}))})]})]})})})))}}]);
//# sourceMappingURL=33.9df410b7.chunk.js.map