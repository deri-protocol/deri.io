(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[7],{1199:function(e,t,s){"use strict";var a,c,i=s(23),r=s(138),n=s(77),l=s(7),o=s(55),d=s(5),j=(s(59),s(1283)),b=s(49),u=s(29),h=s(15),m=s(6),x=Object(b.a)(j.a)(a||(a=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=b.a.div(c||(c=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(m.jsx)("span",{className:"loading-line"})),s=Object(l.a)(t,2),a=s[0],c=s[1],o=Object(d.useState)(!0),j=Object(l.a)(o,2),b=j[0],v=j[1],p=function(){var t=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(d.useEffect)((function(){var t=e.allowZero,s=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,n=void 0===a?"--":a,l=Object(r.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(p())!t&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(h.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(u.d)(Math.abs(l.value))+2),l.value=Object(u.J)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),c(Object(m.jsx)(x,Object(i.a)(Object(i.a)({},l),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var o=e.width,d=e.height;c(Object(m.jsx)(O,{className:"loading-line",width:o,height:d})),s&&v(!1)}var j=window.setTimeout((function(){p()||c(n)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),a}},1214:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a,c=s(55),i=s(49),r=s(1373),n=s.n(r),l=s(139),o=s(29),d=s(1374),j=s(6),b=i.a.div(a||(a=Object(c.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,s=e.id,a=void 0===s?String((new Date).getTime())+Math.random():s,c=e.tip,i=e.multiline,r=e.html,u=e.className,h=e.element,m=void 0===h?"":h,x=e.block,O=void 0===x?"block":x,v=e.width,p=void 0===v?"auto":v,f=e.children,N=e.tiggerEvent;return Object(j.jsxs)(b,{className:u,block:O,isWin:d.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":a,"data-tip":r?n.a.renderToString(m):c,"data-event":Object(o.y)()?"click":N,"data-html":r,children:t||f}),c&&Object(j.jsx)(l.a,{id:a,width:p,padding:"12",place:"bottom",overridePosition:function(e,t,s,a,c,i,r,n){var l=s.getBoundingClientRect(),o=a.getBoundingClientRect(),d=l.x,j=l.y,b=l.height,u=l.width;e.left,e.top;return d+o.width/2>document.documentElement.clientWidth?d-=Math.abs(u-o.width):d-(o.width-u)/2<0?d-=u:d-=(o.width-u)/2,j+b+o.height>=document.documentElement.clientHeight?j=j+b-o.height:j+=b,d<0&&(d=0),j<0&&(j=0),{top:j,left:d}},html:r,borderRadius:8,multiline:i})]})}},1345:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var a,c=s(7),i=s(55),r=s(49),n=s(5),l=s(32),o=s(6),d=r.a.div(a||(a=Object(i.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      img{\n        margin-right:","px\n      }\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.iconMarginRight}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function j(e){var t=e.tabSet,s=e.inactiveBgColor,a=e.iconMarginRight,i=e.activeBgColor,r=(e.icon,e.className),j=e.width,b=void 0===j?238:j,u=e.height,h=void 0===u?47:u,m=e.size,x=void 0===m?16:m,O=e.borderTop,v=void 0!==O&&O,p=e.borderBottom,f=void 0!==p&&p,N=e.divider,g=void 0!==N&&N,w=Object.keys(t),S=Object(n.useState)(w[0]),C=Object(c.a)(S,2),k=C[0],y=C[1],Q=Object(n.useState)(),D=Object(c.a)(Q,2),E=D[0],P=D[1],T=Object(n.useState)(),A=Object(c.a)(T,2),R=A[0],I=A[1],L=Object(n.useState)(),M=Object(c.a)(L,2),B=M[0],F=M[1],U=Object(n.useState)(),q=Object(c.a)(U,2),K=q[0],W=q[1],z=Object(n.useState)(),J=Object(c.a)(z,2),$=J[0],_=J[1],Z=Object(n.useState)(),H=Object(c.a)(Z,2),Y=H[0],V=H[1];return Object(n.useEffect)((function(){var e=Object.keys(t);y(e[0])}),[t]),Object(n.useEffect)((function(){var e=Object.keys(t),s=k||e[0];if(t[s]){P(t[s].style);var a=v?"border-top:1px solid ".concat(t[s].borderColor):"border-top:0",c=f?"border-bottom:1px solid ".concat(t[s].borderColor):"border-bottom:0",i=g?"border-left:1px solid ".concat(t[s].borderColor):"border-left:0",r=g?"border-right:1px solid ".concat(t[s].borderColor):"border-right:0",n=t[s].fontColor?t[s].fontColor:"#FFFFFF";I(a),F(i),W(c),_(r),V(n)}}),[t,k]),Object(o.jsxs)("div",{style:E,className:r,children:[Object(o.jsx)(d,{className:"tab-header",iconMarginRight:a,width:b,height:h,activeFontColor:Y,activeBgColor:i,inactiveBgColor:s,size:x,borderT:R,borderB:K,borderL:B,borderR:$,children:w.map((function(e,s){return Object(o.jsxs)("div",{className:"".concat(t[e].direction,e===k?" active":" inactive"),onClick:function(t){return function(e,t){y(e)}(e)},children:[t[e].icon?Object(o.jsx)(l.a,{width:t[e].iconWidth,height:t[e].iconHeight,token:e===k?t[e].icon:t[e].inicon}):"","  ",e]},s)}))}),t[k]?t[k].content:""]})}},1401:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a,c=s(55),i=s(49),r=(s(5),s(6)),n=i.a.div(a||(a=Object(c.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,s=e.nowTimestamp,a=e.endTimestamp,c=parseInt((s-t)/(a-t)*100);return Object(r.jsx)("div",{className:"time-slider",children:Object(r.jsx)(n,{width:c})})}},2170:function(e,t,s){},2171:function(e,t,s){},2172:function(e,t,s){},2173:function(e,t,s){},2381:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return S}));var a=s(0),c=s.n(a),i=s(2),r=s(7),n=s(5),l=(s(2170),s.p+"static/media/logo-deri.8af5c8cc.svg"),o=(s(1401),s(44)),d=(s(2171),s(168)),j=s(15),b=s(1199),u=s(36),h=s(166),m=s(6);var x=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,s=e.lang,a=Object(n.useState)(""),l=Object(r.a)(a,2),o=l[0],x=l[1],O=Object(n.useState)(""),v=Object(r.a)(O,2),p=v[0],f=v[1],N=Object(n.useState)(""),g=Object(r.a)(N,2),w=g[0],S=g[1],C=Object(n.useState)(""),k=Object(r.a)(C,2),y=k[0],Q=k[1],D=Object(n.useState)(!0),E=Object(r.a)(D,2),P=E[0],T=E[1],A=Object(d.c)(),R=function(){var e=Object(i.a)(c.a.mark((function e(){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingClaimInfo",[t.detail.account,3]);case 2:(s=e.sent)&&(a=+s.claimed+ +s.locked+ +s.claimable,f(s.claimed),S(s.locked),Q(s.claimable),x(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(c.a.mark((function e(){var s,a,i,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+y.claimable>0)){e.next=2;break}return e.abrupt("return");case 2:if(s=new Date((new Date).toLocaleDateString()).getTime()+666e5,a=new Date((new Date).toLocaleDateString()).getTime()+648e5,!((i=parseInt(Date.now()))<s&&i>a)){e.next=8;break}return A.error("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 8:return e.next=10,u.a.request("claimMyStaking",[t.detail.account,3],{includeResponse:!0});case 10:if((r=e.sent)&&r.success){e.next=16;break}return A.error("Claim fail"),e.abrupt("return",!1);case 16:A.success("Claim success"),n=Object(j.bg)(p).plus(Object(j.bg)(y)).toString(),f(n),Q(0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T(!(+y>0))}),[y]),Object(n.useEffect)((function(){t.isConnected()&&R()}),[t,t.detail]),Object(m.jsxs)("div",{className:"trade-claim",children:[Object(m.jsx)("div",{className:"rewards-claim",children:s.rewards}),Object(m.jsxs)("div",{className:"rewards-info",children:[Object(m.jsxs)("div",{className:"lg-rewards-info",children:[Object(m.jsxs)("div",{className:"my-rewards",children:[Object(m.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(m.jsxs)("div",{className:"claim-num",children:[Object(m.jsx)(b.a,{value:o,decimalScale:2})," DERI"]})]}),Object(m.jsxs)("div",{className:"claimed-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"locked-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"claimable-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:y,decimalScale:2})})]}),Object(m.jsx)("div",{className:"cliam-button",children:Object(m.jsx)(h.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return I()}})})]}),Object(m.jsxs)("div",{className:"md-rewards-info",children:[Object(m.jsxs)("div",{className:"top-rewards-info",children:[Object(m.jsxs)("div",{className:"my-rewards",children:[Object(m.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(m.jsxs)("div",{className:"claim-num",children:[Object(m.jsx)(b.a,{value:o,decimalScale:2})," DERI"]})]}),Object(m.jsx)("div",{className:"cliam-button",children:Object(m.jsx)(h.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return I()}})})]}),Object(m.jsxs)("div",{className:"bottom-rewards-info",children:[Object(m.jsxs)("div",{className:"claimed-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"locked-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"claimable-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:y,decimalScale:2})})]})]})]})]})]})})));function O(e){var t=e.lang,s=Object(n.useState)({}),a=Object(r.a)(s,2),o=a[0],d=a[1],j=Object(n.useState)(0),b=Object(r.a)(j,2),h=(b[0],b[1],Object(n.useState)("")),O=Object(r.a)(h,2);O[0],O[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingAddressCount",[3]);case 2:t=e.sent,s={one:!0,two:!1,three:!1,four:!1},t.addressCount>1500&&(s.two=!0),t.addressCount>3e3&&(s.three=!0),t.addressCount>5e3&&(s.four=!0),d(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"staking",children:[Object(m.jsx)("div",{className:"title-timeout",children:Object(m.jsxs)("div",{className:"title-time-text",children:[Object(m.jsxs)("div",{className:"title-text",children:[Object(m.jsxs)("div",{className:"title-epoch",children:[t.title," (Epoch 3)"]}),Object(m.jsx)("div",{className:"time xs-hide"})]}),Object(m.jsxs)("div",{className:"start-end-time-epoch",children:[Object(m.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(m.jsx)("div",{className:"epoch xs-hide"})]}),Object(m.jsxs)("div",{className:"xs-show",children:[Object(m.jsx)("div",{className:"epoch"}),Object(m.jsx)("div",{className:"time"})]})]})}),Object(m.jsx)("div",{className:"claim",children:Object(m.jsx)(x,{lang:t})}),Object(m.jsxs)("div",{className:"rewards-box",children:[Object(m.jsxs)("div",{className:"total-rewards-pool",children:[Object(m.jsx)("div",{className:"deri-logo-bg",children:Object(m.jsx)("img",{alt:"",src:l})}),Object(m.jsxs)("div",{className:"total-rewards-num",children:[Object(m.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(m.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(m.jsx)("span",{children:"2,000,000"}),Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(m.jsxs)("div",{className:"open-lock-rewards",children:[Object(m.jsxs)("div",{className:"top-open-lock-box",children:[Object(m.jsxs)("div",{className:"lock-open open",children:[Object(m.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(m.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"500,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(m.jsxs)("div",{className:o.two?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:o.two?"lock-logo open-logo":"lock-logo ",children:o.two?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"1,000,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(m.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(m.jsxs)("div",{className:o.three?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:o.three?"lock-logo open-logo":"lock-logo",children:o.three?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"1,500,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(m.jsxs)("div",{className:o.four?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:o.four?"lock-logo open-logo":"lock-logo",children:o.four?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"2,000,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(m.jsx)("div",{className:"stage-points",children:Object(m.jsxs)("div",{className:"stage-points-info",children:[Object(m.jsxs)("div",{className:"top-stage-points",children:[Object(m.jsxs)("div",{className:"points-box",children:[Object(m.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(m.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(m.jsxs)("div",{className:"points-box xs-last",children:[Object(m.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(m.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(m.jsxs)("div",{className:"bottom-stage-points",children:[Object(m.jsxs)("div",{className:"points-box",children:[Object(m.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(m.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(m.jsxs)("div",{className:"points-box last xs-last",children:[Object(m.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(m.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var v=s(1345),p=s(29),f=s(1214);function N(e){var t=e.lang,s=e.List;return Object(m.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(m.jsxs)("div",{className:"list-box",children:[Object(m.jsxs)("div",{className:"list-box-title",children:[Object(m.jsx)("span",{className:"no",children:t.no}),Object(m.jsx)("span",{className:"address",children:t["user-addr"]}),Object(m.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(m.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(m.jsx)(f.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(m.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(m.jsxs)("div",{className:"list-info-box",children:[Object(m.jsxs)("div",{className:"no",children:[1===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(m.jsx)("div",{className:"address",children:e.userAddr}),Object(m.jsxs)("div",{className:"feespaid",children:["$ ",Object(m.jsx)(b.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(m.jsx)("div",{className:"avgcoeff",children:Object(m.jsx)(b.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(m.jsx)("div",{className:"score",children:Object(m.jsx)(b.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)}))})]})})}function g(e){var t=e.lang,s=e.List;return Object(m.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(m.jsxs)("div",{className:"list-box",children:[Object(m.jsxs)("div",{className:"list-box-title",children:[Object(m.jsx)("span",{className:"no",children:t.no}),Object(m.jsx)("span",{className:"address",children:t["user-addr"]}),Object(m.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(m.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(m.jsxs)("div",{className:"list-info-box",children:[Object(m.jsxs)("div",{className:"no",children:[1===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(m.jsx)("div",{className:"address",children:e.userAddr}),Object(m.jsxs)("div",{className:"pnl",children:["$ ",Object(m.jsx)(b.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)}))})]})})}s.p,s(2172);var w=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,s=e.lang,a=Object(n.useState)([]),o=Object(r.a)(a,2),d=o[0],j=o[1],h=Object(n.useState)([]),x=Object(r.a)(h,2),O=x[0],w=x[1],S=Object(n.useState)(""),C=Object(r.a)(S,2),k=C[0],y=C[1],Q=Object(n.useState)(""),D=Object(r.a)(Q,2),E=D[0],P=D[1],T=Object(n.useState)(""),A=Object(r.a)(T,2),R=A[0],I=A[1],L=Object(n.useState)({}),M=Object(r.a)(L,2),B=M[0],F=M[1],U=Object(n.useState)(""),q=Object(r.a)(U,2),K=q[0],W=q[1],z=function(){var e=Object(i.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingReward",[t.detail.account,3]);case 2:(s=e.sent)&&y(s.rewardDERI);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingInfo",[t.detail.account,3]);case 2:s=e.sent,P(s.score),I(s.feePaid),W(s.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(i.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingContribution",[t.detail.account,3]);case 2:(s=e.sent)&&F(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingTop10Users",[3]);case 2:(t=e.sent)&&(s=t.top10.map((function(e,t){var s={};return s.no=e.no,e.userAddr=Object(p.i)(e.userAddr),s.userAddr=e.userAddr,s.feesPaid=e.feePaid,s.avgCoeff=e.evgCoeff,s.score=e.score,s.specialRewardsA=e.specialRewardsA,s})),a=t.top10Pnl.map((function(e,t){var s={};return s.no=e.no,e.userAddr=Object(p.i)(e.userAddr),s.userAddr=e.userAddr,s.pnl=e.pnl,s.specialRewardsB=e.specialRewardsB,s})),w(a),j(s));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){_()}),3e4),_(),function(){e&&clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&(z(),J(),$())}),3e4),t.isConnected()&&(z(),J(),$()),function(){e&&clearInterval(e)}}),[t.detail.account]);var Z={"Top 10 Points":{content:Object(m.jsx)(N,{lang:s,List:d})},"Top 10 Pnl":{content:Object(m.jsx)(g,{lang:s,List:O})}};return Object(m.jsxs)("div",{className:"trading",children:[Object(m.jsx)("div",{className:"trading-left",children:Object(m.jsx)("div",{className:"top-ponts-pnl",children:Object(m.jsx)(v.a,{tabSet:Z,activeBgColor:"#203B60"})})}),Object(m.jsxs)("div",{className:"trading-right",children:[Object(m.jsxs)("div",{className:"your-estimated-rewards",children:[Object(m.jsx)("div",{className:"your-estimated-rewards-title",children:Object(m.jsxs)("span",{children:[s["your-rstimated-rewards"]," "]})}),Object(m.jsx)("div",{className:"your-rewards-info",children:Object(m.jsxs)("div",{className:"your-deri",children:[Object(m.jsx)("span",{className:"deri-logo-bg",children:Object(m.jsx)("img",{alt:"",src:l})}),Object(m.jsxs)("span",{className:"span",children:[" ",k?Object(m.jsx)(b.a,{decimalScale:2,value:k,thousandSeparator:!0}):"--"," "]})]})})]}),Object(m.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(m.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(m.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(m.jsxs)("div",{className:"your-score",children:[Object(m.jsx)("div",{className:"your-score-title",children:Object(m.jsx)(f.a,{text:s["your-scored"],tip:"estimated points based on the current weights"})}),Object(m.jsx)("div",{className:"your-score-num",children:E?Object(m.jsx)(b.a,{value:E,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-fee",children:[Object(m.jsx)("div",{className:"your-fee-title",children:Object(m.jsx)(f.a,{text:s["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(m.jsxs)("div",{className:"your-fee-num",children:["$  ",R?Object(m.jsx)(b.a,{value:R,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(m.jsxs)("div",{className:"your-coeff",children:[Object(m.jsx)("div",{className:"your-coeff-title",children:Object(m.jsx)(f.a,{multiline:!0,text:s["your-coeff"],tip:s["boosting-factor-two"]})}),Object(m.jsx)("div",{className:"your-coeff-num",children:K?Object(m.jsx)(b.a,{value:K,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(m.jsx)("div",{className:"raise-score",children:Object(m.jsxs)("div",{className:"raise-score-box",children:[Object(m.jsxs)("div",{className:"raise-score-title-link",children:[Object(m.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(m.jsxs)("div",{className:"raise-score-link",children:[Object(m.jsx)("a",{className:"fist-a",tip:s["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:s.staking}),Object(m.jsx)("a",{tip:s["futures-hover"],href:"https://deri.io/#/trade/futures",children:s.futures}),Object(m.jsx)("a",{tip:s["options-hover"],href:"https://deri.io/#/trade/options",children:s.options})]})]}),Object(m.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(m.jsx)(f.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:s["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(m.jsx)(f.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:s["boosting-factor"]}),"."]})]})}),Object(m.jsx)("div",{className:"total-your-contrib",children:Object(m.jsxs)("div",{className:"your-contrib",children:[Object(m.jsxs)("div",{className:"stage",children:[Object(m.jsx)("div",{className:"stage-title"}),Object(m.jsx)("div",{className:"stage-title",children:"1st"}),Object(m.jsx)("div",{className:"stage-title",children:"2nd"}),Object(m.jsx)("div",{className:"stage-title",children:"3rd"}),Object(m.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(m.jsxs)("div",{className:"total-score-box",children:[Object(m.jsx)("div",{className:"total-score",children:"Total Score"}),Object(m.jsx)("div",{className:"total-score",children:B.Q1Contrib&&"0"!==B.Q1Contrib?Object(m.jsx)(b.a,{value:B.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:B.Q2Contrib&&"0"!==B.Q2Contrib?Object(m.jsx)(b.a,{value:B.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:B.Q3Contrib&&"0"!==B.Q3Contrib?Object(m.jsx)(b.a,{value:B.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:B.Q4Contrib&&"0"!==B.Q4Contrib?Object(m.jsx)(b.a,{value:B.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-score-box",children:[Object(m.jsx)("div",{className:"your-score",children:"Your Score"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ1Contrib&&"0"!==B.Q1Contrib?Object(m.jsx)(b.a,{value:B.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ2Contrib&&"0"!==B.Q2Contrib?Object(m.jsx)(b.a,{value:B.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ3Contrib&&"0"!==B.Q3Contrib?Object(m.jsx)(b.a,{value:B.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ4Contrib&&"0"!==B.Q4Contrib?Object(m.jsx)(b.a,{value:B.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-point-box",children:[Object(m.jsx)("div",{className:"your-point",children:"Your Points"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ1Point&&"0"!==B.Q1Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ1Contrib," / ").concat(B.Q1Contrib,") * 10,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ2Point&&"0"!==B.Q2Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ2Contrib," / ").concat(B.Q2Contrib,") * 20,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ3Point&&"0"!==B.Q3Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ3Contrib," / ").concat(B.Q3Contrib,") * 30,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ4Point&&"0"!==B.Q4Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ4Contrib," / ").concat(B.Q4Contrib,") * 50,000"):""}):"--"})]})]})})]})]})})));s(2173);function S(e){var t=e.lang;return Object(m.jsx)("div",{className:"three",children:Object(m.jsxs)("div",{className:"finished",children:[Object(m.jsx)(O,{lang:t}),Object(m.jsx)(w,{lang:t}),Object(m.jsx)("div",{className:"detailed-rules",children:Object(m.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=7.3fbe5814.chunk.js.map