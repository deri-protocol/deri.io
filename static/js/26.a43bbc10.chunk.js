(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[26],{1568:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var s,n=c(26),a=c(74),i=c(7),r=c(65),d=c(18),o=c(305),l=c(3),j=r.a.div(s||(s=Object(a.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function b(e){var t=e.value,c=e.unit,s=e.unitTip,a=e.max,r=e.step,b=e.onChange,u=e.styles,m=void 0===u?{}:u,h=e.disableNegtive,g=void 0===h||h,O=e.focus,x=e.placeholder,f=void 0===x?"":x,v=e.unitPadding,p=void 0===v?"24px":v,N=e.minTradeVolume,k=e.decimal,w=void 0===k?2:k,I=e.readOnly,_=e.inputWidth,C=void 0===_?"50%":_,y=e.inputHeight,S=void 0===y?"56px":y,W=e.className,F=e.disabled,T=void 0!==F&&F,D=e.onBlur,E=e.onFocus,z=Object(i.useRef)(null);return Object(i.useEffect)((function(){z.current.setCustomValidity(""),z.current&&O&&z.current.focus()}),[O]),Object(l.jsxs)(j,{unitPadding:p,inputWidth:C,inputHeight:S,className:W,style:Object(n.a)({},m),children:[Object(l.jsx)("input",{placeholder:f,type:"number",title:"",onKeyPress:function(e){46!==e.which&&8!==e.which&&0!==e.which&&(e.which<48||e.which>57)&&e.preventDefault()},onBlur:D,onFocus:E,disabled:T,value:t,step:isNaN(r)?0:r,ref:z,onChange:function(e){var t="\\d+\\.\\d{0,".concat(w,"}$"),c=new RegExp(t),s=e.target.value;if(a&&Object(d.bg)(s).gt(a))b&&b(a);else if(g&&(s<0||isNaN(s)))b&&b("");else if(s){if(N>=1)if(s/N>=1)b&&b(Object(d.bg)(s).div(N).integerValue()*N);else b&&b(s*N);else if(/\d+\./.test(s)&&!c.test(s)){var n=s.substring(0,s.indexOf(".")+1+w);b&&b(n)}else b&&b(s)}else b&&b(s)},readOnly:I}),Object(l.jsx)("div",{className:"unit",children:s?Object(l.jsx)(o.a,{tip:s,text:c}):c})]})}},2430:function(e,t,c){},2431:function(e,t,c){},2648:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(10),a=c(0),i=c.n(a),r=c(7),d=c(62),o=c(18),l=c(1568),j=c(77),b=c(177),u=c(16),m=c(229),h=c(179),g=(c(2430),c(3));function O(){return Object(g.jsx)("div",{class:"sleepContentView",children:Object(g.jsx)("div",{class:"circle"})})}var x=c(398),f=c(576),v=c(586),p=c.p+"static/media/stage-one.7a1f5b00.svg",N=c.p+"static/media/stage-two.768445a6.svg",k=c.p+"static/media/stage-three.ee3fc1c4.svg",w=c(48),I=c.p+"static/media/succeed.02ebda03.svg",_=c.p+"static/media/faild.e2923f7c.svg";function C(e){var t=e.lang,c=e.wallet,a=e.amount,d=e.balance,o=e.initialize,l=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,C=e.setIsClaim,S=e.isWalletConnected,W=Object(m.a)(),F=Object(h.c)(),T=Object(j.g)(),D=Object(r.useState)(!1),E=Object(n.a)(D,2),z=E[0],R=E[1],q=Object(r.useState)(!1),J=Object(n.a)(q,2),P=J[0],U=J[1],V=Object(r.useState)(!1),A=Object(n.a)(V,2),B=A[0],H=A[1],L=Object(r.useState)({}),K=Object(n.a)(L,2),$=K[0],G=K[1],M=Object(r.useState)({}),Q=Object(n.a)(M,2),X=Q[0],Y=Q[1],Z=Object(r.useState)(!1),ee=Object(n.a)(Z,2),te=ee[0],ce=ee[1],se=Object(r.useState)(Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",fontSize:"18",label:t.approve})),ne=Object(n.a)(se,2),ae=ne[0],ie=ne[1],re=function(){c.connect()},de=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=6;break}return e.next=3,w.a.request("getUserWormholeSignature",[c.detail.account]);case 3:(t=e.sent).valid&&(c.switchNetwork(W[t.toChainId]),C(!0)),U(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a&&0!==a){e.next=3;break}return F.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+a>d)){e.next=6;break}return F.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(S.isFromConnected){e.next=9;break}return F.error("".concat(t["send-finished-one"]," ").concat(y(o.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),H(!1),G({stageOne:!1}),e.next=14,w.a.request("freeze",[c.detail.chainId,c.detail.account,o.to_chainId,a],{includeResponse:!0});case 14:e.sent.success?(ie(Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",label:t.processing})),G({stageOne:!0,stageTwo:!1}),window.setInterval((function(){de()}),3e3)):(H(!0),x(!1));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.isToConnected){e.next=3;break}return F.error("".concat(t["send-finished-one"]," ").concat(y(o.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return ce(!0),H(!1),Y({stageOne:!1}),e.next=8,w.a.request("mintDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 8:e.sent.success?(Y({stageOne:!0,stageTwo:!1}),ie(Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",label:t.processing})),window.setInterval((function(){de()}),3e3)):(ce(!1),H(!0));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){T.push("/bridge")},be=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.request("unlockDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 2:e.sent.success?(R(!0),ue()):(R(!1),F.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,w.a.request("isDeriUnlocked",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,R(t.isUnlocked);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c.isConnected()&&(ue(),de())}),[c.detail,o]),Object(r.useEffect)((function(){P?G({stageOne:!0,stageTwo:!0,stageThree:!0}):te&&(Y({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[P,o]),Object(r.useEffect)((function(){var e;e=c.isConnected()?P?Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",label:t.claim,onClick:le}):z?te?Object(g.jsxs)("button",{className:"complete",onClick:je,children:[" ",Object(g.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",label:t.send,onClick:oe}):Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",label:t.approve,onClick:be}):Object(g.jsx)(b.a,{type:u.D,className:"button-bridge",label:t["connect-wallet"],onClick:re}),ie(e)}),[P,c.detail,z,a,o,S,te]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",a,"  DERI ",t.from.toLowerCase()," ",o.from_network," ",t.to.toLowerCase()," ",o.to_network]}),Object(g.jsx)("div",{className:"btn",children:ae}),Object(g.jsxs)("div",{className:"hint",children:[!l&&Object(g.jsxs)("div",{className:"sending",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:$.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!f&&!B&&Object(g.jsx)("div",{className:"staic"}),B&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_,alt:""})})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:$.stageOne&&Object(g.jsx)(g.Fragment,{children:$.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!$.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:k})]}),Object(g.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:$.stageOne&&$.stageTwo&&Object(g.jsx)(g.Fragment,{children:$.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!$.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]}),l&&Object(g.jsxs)("div",{className:"claiming",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:X.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!te&&!B&&Object(g.jsx)("div",{className:"staic"}),B&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_,alt:""})})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:X.stageOne&&Object(g.jsx)(g.Fragment,{children:X.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!te||!X.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:k})]}),Object(g.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:X.stageOne&&X.stageTwo&&Object(g.jsx)(g.Fragment,{children:X.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!te||!X.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]})]})]})}function y(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=x.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=x.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}var S=c(574),W=c.p+"static/media/arrow-left.3530813d.svg",F=c.p+"static/media/disabled-down.3f7df0de.svg",T=c(577),D=c(309),E=c(387),z=c(594),R=c(91),q=c.n(R);c(2431);function J(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=T.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=T.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,c=e.lang,a=Object(r.useState)(""),d=Object(n.a)(a,2),j=d[0],b=d[1],u=Object(r.useState)(0),m=Object(n.a)(u,2),h=m[0],O=m[1],x="prod"!==o.DeriEnv.get(),p=x?[{text:c.ropsten,id:3,img:f.default},{text:c["bsc-testnet"],id:97,img:T.default},{text:c["heco-testnet"],id:256,img:v.default}]:[{text:c.ethereum,id:1,img:f.default},{text:c.bsc,id:56,img:T.default},{text:c.heco,id:128,img:v.default}],N=Object(r.useState)(p),k=Object(n.a)(N,2),I=k[0],_=k[1],y=Object(r.useState)(p),R=Object(n.a)(y,2),P=R[0],U=R[1],V=Object(r.useState)(!1),A=Object(n.a)(V,2),B=A[0],H=A[1],L=Object(r.useState)(x?{from_chainId:97,from_network:c["bsc-testnet"],to_chainId:3,to_network:c.ropsten}:{from_chainId:1,from_network:c.ethereum,to_chainId:56,to_network:c.bsc}),K=Object(n.a)(L,2),$=K[0],G=K[1],M=Object(r.useState)(!1),Q=Object(n.a)(M,2),X=Q[0],Y=Q[1],Z=Object(r.useState)(!1),ee=Object(n.a)(Z,2),te=ee[0],ce=ee[1],se=Object(r.useState)(!1),ne=Object(n.a)(se,2),ae=ne[0],ie=ne[1],re=Object(r.useState)(J($.from_chainId,c).img),de=Object(n.a)(re,2),oe=de[0],le=de[1],je=Object(r.useState)(J($.to_chainId,c).img),be=Object(n.a)(je,2),ue=be[0],me=be[1],he=q()("from-network-list",{show:te}),ge=q()("to-network-list",{show:ae}),Oe=Object(r.useState)({isFromConnected:!1,isToConnected:!1}),xe=Object(n.a)(Oe,2),fe=xe[0],ve=xe[1],pe=function(){var e=Object(s.a)(i.a.mark((function e(){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,w.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(s=e.sent).valid&&(G({from_chainId:s.fromChainId,from_network:J(s.fromChainId,c).netWork,to_chainId:s.toChainId,to_network:J(s.toChainId,c).netWork}),le(J(s.fromChainId,c).img),me(J(s.toChainId,c).img),b(Object(o.bg)(s.amount,-18).toString()),H(s.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(s.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,w.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:c=e.sent,O(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Ne()}),[t.detail,$]),Object(r.useEffect)((function(){pe()}),[t.detail]),Object(r.useEffect)((function(){var e,s=p.filter((function(e){return e.id===+$.from_chainId}))[0],n=p.filter((function(e){return e.id!==+$.from_chainId}))[0],a=p.filter((function(e){return e.id!==+$.from_chainId}))[1];e=[p.filter((function(e){return e.id===+$.to_chainId}))[0],p.filter((function(e){return e.id!==+$.to_chainId}))[0],p.filter((function(e){return e.id!==+$.to_chainId}))[1]],_([s,n,a]),U(e),le(J($.from_chainId,c).img),me(J($.to_chainId,c).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+$.from_chainId,c=!!t.isConnected()&&+t.detail.chainId===+$.to_chainId;ve({isFromConnected:e,isToConnected:c})}()}),[$,t.detail]),Object(g.jsx)("div",{className:"bridge-big-box",children:Object(g.jsxs)("div",{className:"bridge-box",children:[Object(g.jsxs)("div",{className:"bridge-title",children:[Object(g.jsx)("div",{className:"title",children:c.bridge}),Object(g.jsx)("div",{className:"birdge-des",children:c["bridge-des"]})]}),Object(g.jsxs)("div",{className:"bridge-info",children:[Object(g.jsxs)("div",{className:"select-network-box",children:[Object(g.jsx)("div",{className:"select-network-title",children:c["select-networks"]}),Object(g.jsxs)("div",{className:"select-network-from-to",children:[Object(g.jsxs)("div",{className:"from-network",children:[Object(g.jsx)("div",{className:"from-title",children:c.from}),Object(g.jsxs)("div",{className:"from-dropdown-list",children:[Object(g.jsxs)("div",{className:B?"drop drop-disabled":"drop",onClick:function(){B||ce(!te)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:oe,alt:""}),Object(g.jsx)("span",{children:$.from_network}),Object(g.jsx)("div",{className:X?"connected-hide":fe.isFromConnected?"connected":"is-connected",children:!X&&fe.isFromConnected?c.connected:c.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:B?F:te?z.default:E.default,alt:""})]}),Object(g.jsx)("ul",{className:he,children:I.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:$.from_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify($));t.to_chainId===e.id?(t.from_chainId=$.to_chainId,t.from_network=$.to_network,t.to_chainId=$.from_chainId,t.to_network=$.from_network):(t.from_chainId=e.id,t.from_network=e.text),G(t),ce(!te)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]}),Object(g.jsx)("div",{className:"arrow",children:Object(g.jsx)("img",{src:W,alt:""})}),Object(g.jsxs)("div",{className:"to-network",children:[Object(g.jsx)("div",{className:"to-title",children:c.to}),Object(g.jsxs)("div",{className:"to-dropdown-list",children:[Object(g.jsxs)("div",{className:B?"drop drop-disabled":"drop",onClick:function(){B||ie(!ae)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:ue,alt:""}),Object(g.jsx)("span",{children:$.to_network}),Object(g.jsx)("div",{className:X?fe.isToConnected?"connected":"is-connected":"connected-hide",children:X&&fe.isToConnected?c.connected:c.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:B?F:ae?z.default:E.default,alt:""})]}),Object(g.jsx)("ul",{className:ge,children:P.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:$.to_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify($));t.from_chainId===e.id?(t.from_chainId=$.to_chainId,t.from_network=$.to_network,t.to_chainId=$.from_chainId,t.to_network=$.from_network):(t.to_chainId=e.id,t.to_network=e.text),G(t),ie(!ae)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]})]})]}),Object(g.jsxs)("div",{className:"set-amount",children:[Object(g.jsx)("div",{className:"set-amount-title",children:c["set-amount"]}),Object(g.jsxs)("div",{className:"set-amount-box",children:[Object(g.jsxs)("div",{className:"input-deri",children:[Object(g.jsx)(l.a,{placeholder:"0",value:j,onChange:function(e){b(e)},decimal:18,disabled:B,className:"input-box"}),Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"",src:D.default,className:"amount-img"})," DERI"]})]}),Object(g.jsxs)("div",{className:"total-deri",children:[c["total-amount"]," ",Object(g.jsx)(S.a,{value:h,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(g.jsx)("div",{className:"bridge-operate-hint",children:Object(g.jsx)(C,{lang:c,sending:B,wallet:t,balance:h,isWalletConnected:fe,amount:j,isClaim:X,initialize:$,setIsClaim:Y,setSending:H,setAmount:b})}),Object(g.jsx)("div",{className:"bridge-to-polygon",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"birdge-to-polygon-title",children:[c["bridge-to-polygon"],Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://bridge.arbitrum.io/",children:" Arbitrum"})})," |",Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:" Polygon"})})," |",Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://bridge.zksync.io/",children:" zkSync Era"})})]}),Object(g.jsx)("div",{className:"bridge-to-polygon-des",children:c["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=26.a43bbc10.chunk.js.map