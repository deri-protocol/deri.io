(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1208:function(e,t,c){"use strict";var s,a,n=c(23),i=c(1204),r=c(73),d=c(14),l=c(116),o=c(6),j=(c(63),c(1270)),b=c(49),u=c(19),m=c(9),h=c(5),g=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(s||(s=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=b.a.div(a||(a=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(h.jsx)("span",{className:"loading-line"})),c=Object(d.a)(t,2),s=c[0],a=c[1],l=Object(o.useState)(!0),j=Object(d.a)(l,2),b=j[0],f=j[1],v=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},p=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,c=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,r=void 0===s?"--":s,d=Object(i.a)(e,g);if(v())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&0===+Object(m.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(u.d)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&t)&&delete d.decimalScale,d.value=Object(u.K)(d.value),d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),a(Object(h.jsx)(O,Object(n.a)(Object(n.a)({},d),{},{renderText:p,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var l=e.width,o=e.height;a(Object(h.jsx)(x,{className:"loading-line",width:l,height:o})),c&&f(!1)}var j=window.setTimeout((function(){v()||a(r)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),s}},1219:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var s=c(49),a=c(1314),n=c.n(a),i=c(138),r=c(19),d=c(1290),l=c(5);const o=s.a.div`
  display:${e=>e.block};
  .text {
    border-bottom : 1px dashed #93A1B8;
    width : max-content;
    cursor : pointer;
    display:${e=>e.block}
  }
  
  .__react_component_tooltip.tooltip.show {
    font-weight : ${e=>e.isWin?400:600} 
  }
`;function j(e){let{text:t,id:c=String((new Date).getTime())+Math.random(),tip:s,multiline:a,html:j,className:b,element:u="",block:m="block",width:h="auto",children:g,tiggerEvent:O}=e;return Object(l.jsxs)(o,{className:b,block:m,isWin:d.isWindows,children:[Object(l.jsx)("div",{className:"text","data-for":c,"data-tip":j?n.a.renderToString(u):s,"data-event":Object(r.z)()?"click":O,"data-html":j,children:t||g}),s&&Object(l.jsx)(i.a,{id:c,width:h,padding:"12",place:"bottom",overridePosition:(e,t,c,s,a,n,i,r)=>{const d=c.getBoundingClientRect(),l=s.getBoundingClientRect();let{x:o,y:j,height:b,width:u}=d;const{left:m,top:h}=e;return o+l.width/2>document.documentElement.clientWidth?o-=Math.abs(u-l.width):o-(l.width-u)/2<0?o-=u:o-=(l.width-u)/2,j+b+l.height>=document.documentElement.clientHeight?j=j+b-l.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:j,borderRadius:8,multiline:a})]})}},1315:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var s,a=c(23),n=c(116),i=c(6),r=c(49),d=c(9),l=c(1219),o=c(5),j=r.a.div(s||(s=Object(n.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function b(e){var t=e.value,c=e.unit,s=e.unitTip,n=e.max,r=e.step,b=e.onChange,u=e.styles,m=void 0===u?{}:u,h=e.disableNegtive,g=void 0===h||h,O=e.focus,x=e.placeholder,f=void 0===x?"":x,v=e.unitPadding,p=void 0===v?"24px":v,w=e.minTradeVolume,N=e.decimal,k=void 0===N?2:N,I=e.readOnly,_=e.inputWidth,C=void 0===_?"50%":_,S=e.inputHeight,y=void 0===S?"56px":S,T=e.className,W=e.disabled,F=void 0!==W&&W,E=e.onBlur,R=e.onFocus,D=Object(i.useRef)(null);return Object(i.useEffect)((function(){D.current.setCustomValidity(""),D.current&&O&&D.current.focus()}),[O]),Object(o.jsxs)(j,{unitPadding:p,inputWidth:C,inputHeight:y,className:T,style:Object(a.a)({},m),children:[Object(o.jsx)("input",{placeholder:f,type:"number",onBlur:E,onFocus:R,disabled:F,value:t,step:r,ref:D,onChange:function(e){var t="\\d+\\.\\d{0,".concat(k,"}$"),c=new RegExp(t),s=e.target.value;if(n&&Object(d.bg)(s).gt(n))b&&b(n);else if(g&&(s<0||isNaN(s)))b&&b("");else if(s){if(w>=1)if(s/w>=1)b&&b(Object(d.bg)(s).div(w).integerValue()*w);else b&&b(s*w);else if(/\d+\./.test(s)&&!c.test(s)){var a=s.substring(0,s.indexOf(".")+1+k);b&&b(a)}else b&&b(s)}else b&&b(s)},readOnly:I}),Object(o.jsx)("div",{className:"unit",children:s?Object(o.jsx)(l.a,{tip:s,text:c}):c})]})}},2114:function(e,t,c){},2115:function(e,t,c){},2312:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c(46),n=c(9),i=c(1315),r=c(2),d=c(14),l=c(1),o=c.n(l),j=c(53),b=c(162),u=c(12),m=c(168),h=c(163),g=(c(2114),c(5));function O(){return Object(g.jsx)("div",{class:"sleepContentView",children:Object(g.jsx)("div",{class:"circle"})})}var x=c(294),f=c(448),v=c(455),p=c.p+"static/media/stage-one.9bfaa393.svg",w=c.p+"static/media/stage-two.1ce521f2.svg",N=c.p+"static/media/stage-three.507b43c5.svg",k=c(38),I=c.p+"static/media/succeed.1057d4b2.svg",_=c.p+"static/media/faild.831be6f1.svg";function C(e){var t=e.lang,c=e.wallet,a=e.amount,n=e.balance,i=e.initialize,l=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,C=e.setIsClaim,y=e.isWalletConnected,T=Object(m.a)(),W=Object(h.c)(),F=Object(j.g)(),E=Object(s.useState)(!1),R=Object(d.a)(E,2),D=R[0],z=R[1],q=Object(s.useState)(!1),$=Object(d.a)(q,2),B=$[0],J=$[1],L=Object(s.useState)(!1),V=Object(d.a)(L,2),A=V[0],P=V[1],H=Object(s.useState)({}),M=Object(d.a)(H,2),U=M[0],Z=M[1],K=Object(s.useState)({}),G=Object(d.a)(K,2),Q=G[0],X=G[1],Y=Object(s.useState)(!1),ee=Object(d.a)(Y,2),te=ee[0],ce=ee[1],se=Object(s.useState)(Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",fontSize:"18",label:t.approve})),ae=Object(d.a)(se,2),ne=ae[0],ie=ae[1],re=function(){c.connect()},de=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=6;break}return e.next=3,k.a.request("getUserWormholeSignature",[c.detail.account]);case 3:(t=e.sent).valid&&(c.switchNetwork(T[t.toChainId]),C(!0)),J(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a&&0!==a){e.next=3;break}return W.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+a>n)){e.next=6;break}return W.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(y.isFromConnected){e.next=9;break}return W.error("".concat(t["send-finished-one"]," ").concat(S(i.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),P(!1),Z({stageOne:!1}),e.next=14,k.a.request("freeze",[c.detail.chainId,c.detail.account,i.to_chainId,a],{includeResponse:!0});case 14:e.sent.success?(ie(Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.processing})),Z({stageOne:!0,stageTwo:!1}),window.setInterval((function(){de()}),3e3)):(P(!0),x(!1));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.isToConnected){e.next=3;break}return W.error("".concat(t["send-finished-one"]," ").concat(S(i.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return ce(!0),P(!1),X({stageOne:!1}),e.next=8,k.a.request("mintDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 8:e.sent.success?(X({stageOne:!0,stageTwo:!1}),ie(Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.processing})),window.setInterval((function(){de()}),3e3)):(ce(!1),P(!0));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){F.push("/bridge")},be=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.request("unlockDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 2:e.sent.success?(z(!0),ue()):(z(!1),W.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,k.a.request("isDeriUnlocked",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,z(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){c.isConnected()&&(ue(),de())}),[c.detail,i]),Object(s.useEffect)((function(){B?Z({stageOne:!0,stageTwo:!0,stageThree:!0}):te&&(X({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[B,i]),Object(s.useEffect)((function(){var e;e=c.isConnected()?B?Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.claim,onClick:oe}):D?te?Object(g.jsxs)("button",{className:"complete",onClick:je,children:[" ",Object(g.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.send,onClick:le}):Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.approve,onClick:be}):Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t["connect-wallet"],onClick:re}),ie(e)}),[B,c.detail,D,a,i,y,te]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",a,"  DERI ",t.from.toLowerCase()," ",i.from_network," ",t.to.toLowerCase()," ",i.to_network]}),Object(g.jsx)("div",{className:"btn",children:ne}),Object(g.jsxs)("div",{className:"hint",children:[!l&&Object(g.jsxs)("div",{className:"sending",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:U.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!f&&!A&&Object(g.jsx)("div",{className:"staic"}),A&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_,alt:""})})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:U.stageOne&&Object(g.jsx)(g.Fragment,{children:U.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!U.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:U.stageOne&&U.stageTwo&&Object(g.jsx)(g.Fragment,{children:U.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!U.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]}),l&&Object(g.jsxs)("div",{className:"claiming",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:Q.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!te&&!A&&Object(g.jsx)("div",{className:"staic"}),A&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_,alt:""})})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:Q.stageOne&&Object(g.jsx)(g.Fragment,{children:Q.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!te||!Q.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:Q.stageOne&&Q.stageTwo&&Object(g.jsx)(g.Fragment,{children:Q.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!te||!Q.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]})]})]})}function S(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=x.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=x.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}var y=c(1208),T=c.p+"static/media/arrow-left.f14b02ac.svg",W=c.p+"static/media/disabled-down.e8dbb78e.svg",F=c(449),E=c(223),R=c(287),D=c(463),z=c(59),q=c.n(z);c(2115);function $(e,t){let c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=F.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=F.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}t.default=Object(a.b)("wallet")(Object(a.c)((function(e){let{wallet:t,lang:c}=e;const[a,r]=Object(s.useState)(""),[d,l]=Object(s.useState)(0),o="prod"!==n.DeriEnv.get(),j=o?[{text:c.ropsten,id:3,img:f.default},{text:c["bsc-testnet"],id:97,img:F.default},{text:c["heco-testnet"],id:256,img:v.default}]:[{text:c.ethereum,id:1,img:f.default},{text:c.bsc,id:56,img:F.default},{text:c.heco,id:128,img:v.default}],[b,u]=Object(s.useState)(j),[m,h]=Object(s.useState)(j),[O,x]=Object(s.useState)(!1),[p,w]=Object(s.useState)(o?{from_chainId:97,from_network:c["bsc-testnet"],to_chainId:3,to_network:c.ropsten}:{from_chainId:1,from_network:c.ethereum,to_chainId:56,to_network:c.bsc}),[N,I]=Object(s.useState)(!1),[_,S]=Object(s.useState)(!1),[z,B]=Object(s.useState)(!1),[J,L]=Object(s.useState)($(p.from_chainId,c).img),[V,A]=Object(s.useState)($(p.to_chainId,c).img),P=q()("from-network-list",{show:_}),H=q()("to-network-list",{show:z}),[M,U]=Object(s.useState)({isFromConnected:!1,isToConnected:!1});return Object(s.useEffect)((()=>{(async()=>{if(t.isConnected()){let e=await k.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);l(e)}})()}),[t.detail,p]),Object(s.useEffect)((()=>{(async()=>{if(t.isConnected()){let e=await k.a.request("getUserWormholeSignature",[t.detail.account]);e.valid&&(w({from_chainId:e.fromChainId,from_network:$(e.fromChainId,c).netWork,to_chainId:e.toChainId,to_network:$(e.toChainId,c).netWork}),L($(e.fromChainId,c).img),A($(e.toChainId,c).img),r(Object(n.bg)(e.amount,-18).toString()),x(e.valid))}})()}),[t.detail]),Object(s.useEffect)((()=>{let e,s;e=[j.filter((e=>e.id===+p.from_chainId))[0],j.filter((e=>e.id!==+p.from_chainId))[0],j.filter((e=>e.id!==+p.from_chainId))[1]],s=[j.filter((e=>e.id===+p.to_chainId))[0],j.filter((e=>e.id!==+p.to_chainId))[0],j.filter((e=>e.id!==+p.to_chainId))[1]],u(e),h(s),L($(p.from_chainId,c).img),A($(p.to_chainId,c).img),(()=>{let e=!!t.isConnected()&&+t.detail.chainId===+p.from_chainId,c=!!t.isConnected()&&+t.detail.chainId===+p.to_chainId;U({isFromConnected:e,isToConnected:c})})()}),[p,t.detail]),Object(g.jsx)("div",{className:"bridge-big-box",children:Object(g.jsxs)("div",{className:"bridge-box",children:[Object(g.jsxs)("div",{className:"bridge-title",children:[Object(g.jsx)("div",{className:"title",children:c.bridge}),Object(g.jsx)("div",{className:"birdge-des",children:c["bridge-des"]})]}),Object(g.jsxs)("div",{className:"bridge-info",children:[Object(g.jsxs)("div",{className:"select-network-box",children:[Object(g.jsx)("div",{className:"select-network-title",children:c["select-networks"]}),Object(g.jsxs)("div",{className:"select-network-from-to",children:[Object(g.jsxs)("div",{className:"from-network",children:[Object(g.jsx)("div",{className:"from-title",children:c.from}),Object(g.jsxs)("div",{className:"from-dropdown-list",children:[Object(g.jsxs)("div",{className:O?"drop drop-disabled":"drop",onClick:()=>{O||S(!_)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:J,alt:""}),Object(g.jsx)("span",{children:p.from_network}),Object(g.jsx)("div",{className:N?"connected-hide":M.isFromConnected?"connected":"is-connected",children:!N&&M.isFromConnected?c.connected:c.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:O?W:_?D.default:R.default,alt:""})]}),Object(g.jsx)("ul",{className:P,children:b.map(((e,t)=>Object(g.jsx)(g.Fragment,{children:p.from_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:()=>(e=>{let t=JSON.parse(JSON.stringify(p));t.to_chainId===e.id?(t.from_chainId=p.to_chainId,t.from_network=p.to_network,t.to_chainId=p.from_chainId,t.to_network=p.from_network):(t.from_chainId=e.id,t.from_network=e.text),w(t),S(!_)})(e),children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})))})]})]}),Object(g.jsx)("div",{className:"arrow",children:Object(g.jsx)("img",{src:T,alt:""})}),Object(g.jsxs)("div",{className:"to-network",children:[Object(g.jsx)("div",{className:"to-title",children:c.to}),Object(g.jsxs)("div",{className:"to-dropdown-list",children:[Object(g.jsxs)("div",{className:O?"drop drop-disabled":"drop",onClick:()=>{O||B(!z)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:V,alt:""}),Object(g.jsx)("span",{children:p.to_network}),Object(g.jsx)("div",{className:N?M.isToConnected?"connected":"is-connected":"connected-hide",children:N&&M.isToConnected?c.connected:c.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:O?W:z?D.default:R.default,alt:""})]}),Object(g.jsx)("ul",{className:H,children:m.map(((e,t)=>Object(g.jsx)(g.Fragment,{children:p.to_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:()=>(e=>{let t=JSON.parse(JSON.stringify(p));t.from_chainId===e.id?(t.from_chainId=p.to_chainId,t.from_network=p.to_network,t.to_chainId=p.from_chainId,t.to_network=p.from_network):(t.to_chainId=e.id,t.to_network=e.text),w(t),B(!z)})(e),children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})))})]})]})]})]}),Object(g.jsxs)("div",{className:"set-amount",children:[Object(g.jsx)("div",{className:"set-amount-title",children:c["set-amount"]}),Object(g.jsxs)("div",{className:"set-amount-box",children:[Object(g.jsxs)("div",{className:"input-deri",children:[Object(g.jsx)(i.a,{placeholder:"0",value:a,onChange:e=>{r(e)},disabled:O,className:"input-box"}),Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"",src:E.default,className:"amount-img"})," DERI"]})]}),Object(g.jsxs)("div",{className:"total-deri",children:[c["total-amount"]," ",Object(g.jsx)(y.a,{value:d,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(g.jsx)("div",{className:"bridge-operate-hint",children:Object(g.jsx)(C,{lang:c,sending:O,wallet:t,balance:d,isWalletConnected:M,amount:a,isClaim:N,initialize:p,setIsClaim:I,setSending:x,setAmount:r})}),Object(g.jsx)("div",{className:"bridge-to-polygon",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"birdge-to-polygon-title",children:[c["bridge-to-polygon"]," ",Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:"Polygon"})})]}),Object(g.jsx)("div",{className:"bridge-to-polygon-des",children:c["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=23.36677c20.chunk.js.map