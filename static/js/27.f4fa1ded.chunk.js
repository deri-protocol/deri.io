(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[27],{1275:function(e,t,a){"use strict";var c,s,i=a(24),n=a(191),r=a(43),l=a(10),d=a(55),o=a(8),j=(a(67),a(1360)),b=a(51),h=a(19),x=a(14),u=a(4),p=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],v=Object(b.a)(j.a)(c||(c=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),f=b.a.div(s||(s=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(u.jsx)("span",{className:"loading-line"})),a=Object(l.a)(t,2),c=a[0],s=a[1],d=Object(o.useState)(!0),j=Object(l.a)(d,2),b=j[0],m=j[1],O=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},w=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,r=void 0===c?"--":c,l=Object(n.a)(e,p);if(O())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(x.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(h.d)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=Object(h.K)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),s(Object(u.jsx)(v,Object(i.a)(Object(i.a)({},l),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var d=e.width,o=e.height;s(Object(u.jsx)(f,{className:"loading-line",width:d,height:o})),a&&m(!1)}var j=window.setTimeout((function(){O()||s(r)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},2197:function(e,t,a){},2411:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(10),i=a(0),n=a.n(i),r=a(8),l=a(45),d=a(1275),o=a(166),j=a(39),b=a(29),h=a(171),x=a(15),u=a(230),p=a.p+"static/media/pancake.2c13a9f3.svg",v=a.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",f=a.p+"static/media/gateio.1570dd44.svg",m=a.p+"static/media/mxc.b59b5e73.svg",O=a.p+"static/media/governance.e32bdd33.svg",w=a.p+"static/media/privilege.9c1f0375.svg",g=(a(2197),a(4));function N(e){var t=e.item,a=e.index,c=Object(r.useState)(!1),i=Object(s.a)(c,2),n=i[0],l=i[1];return Object(g.jsxs)("div",{className:"faq-info-box",children:[Object(g.jsxs)("div",{className:"faq-title-img",onClick:function(){l(!n)},children:[Object(g.jsx)("div",{className:"faq-question-title",children:t.label}),Object(g.jsx)("div",{children:Object(g.jsx)(b.a,{token:n?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),n&&Object(g.jsxs)("div",{className:"faq-des",children:[t.labelDes,t.link&&Object(g.jsxs)("a",{rel:"noreferrer",target:"_blank",href:t.link,children:[" ",t.linkLabel]})]})]},a)}t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,i=e.lang,l=Object(r.useState)(),k=Object(s.a)(l,2),y=k[0],S=k[1],_=Object(r.useState)(),C=Object(s.a)(_,2),q=C[0],A=C[1],D=Object(r.useState)(!1),I=Object(s.a)(D,2),T=I[0],E=I[1],F=Object(r.useState)(),L=Object(s.a)(F,2),R=L[0],$=L[1],B=Object(h.a)(),Z=[{label:i["what-is-deri"],labelDes:i["what-is-deri-des"]},{label:i["is-deri-erc20-token"],labelDes:i["is-deri-erc20-token-des"]},{label:i["what-deri-token-total"],labelDes:i["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:i.more}],J=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:y,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://infoapi2.deri.finance/stats_for_token",e.next=3,fetch("https://infoapi2.deri.finance/stats_for_token");case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&((c={}).price=a.data.price,c.market_cap=a.data.market_cap,c.circulating_supply=parseInt(a.data.circulating_supply),c.total_supply=parseInt(a.data.total_supply),A(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getDeriBurnedAmount");case 2:t=e.sent,$(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()){e.next=6;break}return e.next=3,a.switchNetwork(B[1]);case 3:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"),e.next=7;break;case 6:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()){e.next=6;break}return e.next=3,a.switchNetwork(B[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e;a.isConnected()&&(56===+a.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+a.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+a.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+a.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),S(e))}),[a.detail]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){M()}),3e5),M(),U(),function(){e&&clearInterval(e)}}),[]),Object(g.jsx)("div",{className:"token-box",children:Object(g.jsxs)("div",{className:"token-info",children:[Object(g.jsxs)("div",{className:"token-header",children:[Object(g.jsxs)("div",{className:"token-header-left",children:[Object(g.jsxs)("div",{className:"logo-title",children:[Object(g.jsx)("img",{alt:"",src:u.default}),Object(g.jsx)("span",{className:"title-text",children:i.title})]}),Object(g.jsxs)("div",{className:"token-header-des",children:[i["deri-is-the-protocol-token"],Object(g.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",i["learn-more"]," "]})]})]}),Object(g.jsx)("div",{className:"token-header-right",children:Object(g.jsx)(o.a,{onClick:function(){J()},type:x.o,width:"242",label:i["add-deri-to-metamask"]})})]}),Object(g.jsxs)("div",{className:"token-info-content",children:[Object(g.jsxs)("div",{className:"top-info-box",children:[Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsxs)("div",{className:"num",children:["$ ",q?Object(g.jsx)(d.a,{value:q.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(g.jsx)("div",{className:"text",children:i.price})]}),Object(g.jsxs)("div",{className:"info-box min-box",children:[Object(g.jsxs)("div",{className:"num",children:["$ ",q?Object(g.jsx)(d.a,{value:q.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(g.jsx)("div",{className:"text",children:i["market-cap"]})]})]}),Object(g.jsxs)("div",{className:"buttom-info-box",children:[Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"num",children:q?Object(g.jsx)(d.a,{value:q.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(g.jsx)("div",{className:"text",children:i["circulating-supply"]})]}),Object(g.jsxs)("div",{className:"info-box min-box",children:[Object(g.jsx)("div",{className:"num",children:q?Object(g.jsx)(d.a,{value:q.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(g.jsx)("div",{className:"text",children:i["total-supply"]})]})]})]}),Object(g.jsx)("div",{className:"buy-deri-token",children:i["token-burning"]}),Object(g.jsxs)("div",{className:"token-info-content token-burning-content",children:[Object(g.jsx)("div",{className:"top-info-box  token-burning",children:Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"num",children:"4,357,036"}),Object(g.jsx)("div",{className:"text",children:i["burned-to-mining-vault"]})]})}),Object(g.jsx)("div",{className:"buttom-info-box  token-burning",children:Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsxs)("div",{className:"num",children:[Object(g.jsx)(d.a,{value:R,displayType:"text",thousandSeparator:!0,decimalScale:0}),"  ",Object(g.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/token/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9?a=0x000000000000000000000000000000000000dead",children:[" ",Object(g.jsx)(b.a,{token:"target"})]})]}),Object(g.jsx)("div",{className:"text",children:i["burned-to-deadlock-address"]})]})})]}),Object(g.jsx)("div",{className:"buy-deri-token",children:i["buy-deri-token"]}),Object(g.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(g.jsx)("a",{target:"_blank",onClick:K,children:Object(g.jsxs)("div",{className:"swap-box",children:[Object(g.jsx)("div",{className:"swap-logo",children:Object(g.jsx)("img",{alt:"",src:p})}),Object(g.jsx)("div",{className:"swap-name",children:i["pancake-swap"]})]})}),Object(g.jsx)("a",{target:"_blank",onClick:V,children:Object(g.jsxs)("div",{className:"swap-box",children:[Object(g.jsx)("div",{className:"swap-logo",children:Object(g.jsx)("img",{alt:"",src:v})}),Object(g.jsx)("div",{className:"swap-name",children:i["sushi-swap"]})]})}),Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(g.jsxs)("div",{className:"swap-box",children:[Object(g.jsx)("div",{className:"swap-logo",children:Object(g.jsx)("img",{alt:"",src:f})}),Object(g.jsx)("div",{className:"swap-name",children:i.gate})]})}),Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(g.jsxs)("div",{className:"swap-box",children:[Object(g.jsx)("div",{className:"swap-logo",children:Object(g.jsx)("img",{alt:"",src:m})}),Object(g.jsx)("div",{className:"swap-name",children:i.mexc})]})})]}),Object(g.jsxs)("div",{className:"benefits-faq-box",children:[Object(g.jsxs)("div",{className:"benefits-box",children:[Object(g.jsx)("div",{className:"benefits-title",children:i["benefits-of-deri-token"]}),Object(g.jsxs)("div",{className:"benefits-info",children:[Object(g.jsxs)("div",{className:"governance",children:[Object(g.jsx)("img",{src:O,alt:""}),Object(g.jsxs)("div",{className:"governance-des",children:[Object(g.jsx)("div",{className:"governance-title",children:i.governance}),Object(g.jsx)("div",{className:"governance-text",children:i["governance-des"]})]})]}),Object(g.jsxs)("div",{className:"privilege",children:[Object(g.jsx)("img",{src:w,alt:""}),Object(g.jsxs)("div",{className:"privilege-des",children:[Object(g.jsx)("div",{className:"privilege-title",children:i.privilege}),Object(g.jsx)("div",{className:"privilege-text",children:i["privilege-des"]})]})]})]})]}),Object(g.jsxs)("div",{className:"faq-box",children:[Object(g.jsx)("div",{className:"faq-title",children:i.faq}),Object(g.jsxs)("div",{className:"faq-info",children:[Z.map((function(e,t){return Object(g.jsx)(N,{item:e,index:t})})),Object(g.jsxs)("div",{className:"faq-info-box",children:[Object(g.jsxs)("div",{className:"faq-title-img",onClick:function(){E(!T)},children:[Object(g.jsx)("div",{className:"faq-question-title",children:i["what-are-the"]}),Object(g.jsx)("div",{children:Object(g.jsx)(b.a,{token:T?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),T&&Object(g.jsxs)("div",{className:"faq-des",children:[Object(g.jsx)("div",{className:"governance-privilege",children:i.governance}),Object(g.jsx)("div",{children:i["what-are-the-govenance-des"]}),Object(g.jsx)("div",{className:"governance-privilege privilege",children:i.privilege}),Object(g.jsx)("div",{children:i["what-are-the-privilege-des-one"]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("br",{}),i["what-are-the-privilege-des-two"]]}),Object(g.jsx)("div",{className:"specifically",children:i["what-are-the-privilege-des-three"]}),Object(g.jsxs)("div",{className:"specifically-des",children:[Object(g.jsx)("div",{className:"list-style"}),Object(g.jsx)("div",{children:i["what-are-the-privilege-des-three-des-one"]})]}),Object(g.jsxs)("div",{className:"specifically-des",children:[Object(g.jsx)("div",{className:"list-style"}),Object(g.jsx)("div",{children:i["what-are-the-privilege-des-three-des-two"]})]}),Object(g.jsx)("div",{className:"specifically",children:i["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=27.f4fa1ded.chunk.js.map