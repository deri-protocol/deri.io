(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1243:function(e,t,a){"use strict";var c,i,n=a(35),r=a(199),l=a(54),s=a(7),d=a(50),u=a(6),o=(a(61),a(1329)),j=a(49),b=a(21),h=a(14),f=a(5),v=Object(j.a)(o.a)(c||(c=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=j.a.div(i||(i=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(u.useState)(Object(f.jsx)("span",{className:"loading-line"})),a=Object(s.a)(t,2),c=a[0],i=a[1],d=Object(u.useState)(!0),o=Object(s.a)(d,2),j=o[0],x=o[1],p=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},m=function(e){return e&&e.replace(/\.$/,"")};return Object(u.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,s=Object(r.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(p())s.decimalScale>0&&!t&&s.value&&/\d+\.0*[1-9]+/.test(s.value)&&0===+Object(h.bg)(s.value).toFixed(+s.decimalScale||2)&&(s.decimalScale=Object(b.d)(Math.abs(s.value))+2),-1===s.decimalScale&&delete s.decimalScale,s.value=Object(b.J)(s.value),s.value&&/\d+.9{6}/.test(s.value)&&(s.value=(+s.value).toFixed(5)),i(Object(f.jsx)(v,Object(n.a)(Object(n.a)({},s),{},{renderText:m,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var d=e.width,u=e.height;i(Object(f.jsx)(O,{className:"loading-line",width:d,height:u})),a&&x(!1)}var o=window.setTimeout((function(){p()||i(l)}),6e4);return function(){clearTimeout(o)}}),[e.value,e.decimalScale,e.suffix]),c}},2228:function(e,t,a){},2463:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(2),r=a(7),l=a(6),s=a(45),d=a(21),u=a(169),o=a(1243),j=a(168),b=a(34),h=a.p+"static/media/time.77d9d1c0.svg",f=(a(2228),a(5));t.default=Object(s.b)("wallet","poolManager")(Object(s.c)((function(e){var t=e.lang,a=e.wallet,c=void 0===a?{}:a,s=Object(l.useState)(0),v=Object(r.a)(s,2),O=v[0],x=v[1],p=Object(l.useState)(!0),m=Object(r.a)(p,2),w=m[0],g=m[1],S=Object(u.c)(),N=Object(l.useState)({}),k=Object(r.a)(N,2),T=k[0],C=k[1],I=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,b.a.request("getDeriBalance",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,x(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(n.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=10;break}return e.next=3,b.a.request("getUserInfoAllForAirDrop",[c.detail.account]);case 3:t=e.sent,a=1e3*t.deadline,C(t),g(!t.valid),(n=new Date).getTime()>=a&&g(!0),n.getTime()>=1647e9&&g(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(n.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.valid){e.next=3;break}return S.error(t["no-deri-to-claim"]),e.abrupt("return");case 3:if(Object(d.f)(c.detail.chainId,T.chainId)){e.next=6;break}return S.error(t["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 6:return e.next=8,b.a.request("mintAirdrop",[T.chainId,c.detail.account],{includeResponse:!0});case 8:(a=e.sent).success||S.error(t["claim-failed"]),a.success&&g(!0),I();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){I(),y()}),[c,c.detail]),Object(f.jsx)("div",{className:"airdrop-box",children:Object(f.jsx)("div",{className:"airdrop-info",children:Object(f.jsxs)("div",{className:"airdrop-info-box",children:[Object(f.jsx)("div",{className:"airdrop-title",children:t.title}),Object(f.jsxs)("div",{className:"wallet-address",children:[Object(f.jsx)("span",{className:"blue-logo"}),Object(d.i)(c.detail.account)]}),Object(f.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(f.jsx)(o.a,{value:O,decimalScale:0,thousandSeparator:!0})," DERI"]}),Object(f.jsxs)("div",{className:"airdrop-time",children:[Object(f.jsx)("div",{className:"time-logo",children:Object(f.jsx)("img",{src:h,alt:""})}),Object(f.jsxs)("div",{className:"time-text",children:[Object(f.jsxs)("div",{className:"time-title",children:[Object(f.jsx)("div",{children:t["start-time"]}),Object(f.jsx)("div",{children:t["expire-time"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(f.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(f.jsx)("div",{className:"claim",children:Object(f.jsx)(j.a,{fontWeight:"bold",disabled:w,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:A})})]})})})})))}}]);
//# sourceMappingURL=25.9fd0193a.chunk.js.map