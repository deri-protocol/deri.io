(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[34],{1389:function(e,a,t){"use strict";var s,c,i=t(39),l=t(322),n=t(55),d=t(9),r=t(63),j=t(8),o=(t(79),t(1424)),b=t(53),h=t(20),x=t(17),v=t(4),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],p=Object(b.a)(o.a)(s||(s=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),u=b.a.span(c||(c=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(j.useState)(Object(v.jsx)("span",{className:"loading-line"})),t=Object(d.a)(a,2),s=t[0],c=t[1],r=Object(j.useState)(!0),o=Object(d.a)(r,2),b=o[0],O=o[1],f=function(){var a=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a},w=function(e){return e&&e.replace(/\.$/,"")};return Object(j.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,n=void 0===s?"--":s,d=Object(l.a)(e,m);if(f())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!a&&0===+Object(x.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(h.g)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&a)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(h.M)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),d.value&&String(d.value).indexOf("0000000000000")>0?c("1E-18"):c(Object(v.jsx)(p,Object(i.a)(Object(i.a)({},d),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var r=e.width,j=e.height;c(Object(v.jsx)(u,{className:"loading-line",width:r,height:j})),t&&O(!1)}var o=window.setTimeout((function(){f()||c(n)}),n===d.value?0:6e4);return function(){clearTimeout(o)}}),[e.value,e.decimalScale,e.suffix]),s}},2334:function(e,a,t){},2561:function(e,a,t){"use strict";t.r(a);var s=t(8),c=t(54),i=t(1389),l=t(186),n=t(46),d=t(26),r=t(191),j=t(13),o=t(247),b=t.p+"static/media/pancake.2c13a9f3.svg",h=t.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",x=t.p+"static/media/gateio.1570dd44.svg",v=t.p+"static/media/mxc.b59b5e73.svg",m=t.p+"static/media/governance.e32bdd33.svg",p=t.p+"static/media/privilege.9c1f0375.svg",u=(t(2334),t(4));function O(e){let{item:a,index:t}=e;const[c,i]=Object(s.useState)(!1);return Object(u.jsxs)("div",{className:"faq-info-box",children:[Object(u.jsxs)("div",{className:"faq-title-img",onClick:()=>{i(!c)},children:[Object(u.jsx)("div",{className:"faq-question-title",children:a.label}),Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{token:c?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),c&&Object(u.jsxs)("div",{className:"faq-des",children:[a.labelDes,a.link&&Object(u.jsxs)("a",{rel:"noreferrer",target:"_blank",href:a.link,children:[" ",a.linkLabel]})]})]},t)}a.default=Object(c.b)("wallet")(Object(c.c)((function(e){let{wallet:a={},lang:t}=e;const[c,f]=Object(s.useState)(),[w,g]=Object(s.useState)(),[N,k]=Object(s.useState)(!1),[y,S]=Object(s.useState)(),_=Object(r.a)(),C=[{label:t["what-is-deri"],labelDes:t["what-is-deri-des"]},{label:t["is-deri-erc20-token"],labelDes:t["is-deri-erc20-token-des"]},{label:t["what-deri-token-total"],labelDes:t["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:t.more}],q=async()=>{let e=await fetch("https://infoapi.deri.io/stats_for_token"),a=await e.json();if(a){let e={};e.price=a.data.price,e.market_cap=a.data.market_cap,e.circulating_supply=parseInt(a.data.circulating_supply),e.total_supply=parseInt(a.data.total_supply),g(e)}};return Object(s.useEffect)((()=>{if(a.isConnected()){let e;56===+a.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+a.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+a.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+a.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),f(e)}}),[a.detail]),Object(s.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{q()}),3e5),q(),(async()=>{let e=await n.a.request("getDeriBurnedAmount");S(e)})(),()=>{e&&clearInterval(e)}}),[]),Object(u.jsx)("div",{className:"token-box",children:Object(u.jsxs)("div",{className:"token-info",children:[Object(u.jsxs)("div",{className:"token-header",children:[Object(u.jsxs)("div",{className:"token-header-left",children:[Object(u.jsxs)("div",{className:"logo-title",children:[Object(u.jsx)("img",{alt:"",src:o.default}),Object(u.jsx)("span",{className:"title-text",children:t.title})]}),Object(u.jsxs)("div",{className:"token-header-des",children:[t["deri-is-the-protocol-token"],Object(u.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",t["learn-more"]," "]})]})]}),Object(u.jsx)("div",{className:"token-header-right",children:Object(u.jsx)(l.a,{onClick:()=>{(async()=>{if(c){const a="DERI",t=18;try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:c,symbol:a,decimals:t}}})?console.log("Thanks for your interest!"):console.log("Your loss!")}catch(e){console.log(e)}}})()},type:j.B,width:"242",label:t["add-deri-to-metamask"]})})]}),Object(u.jsxs)("div",{className:"token-info-content",children:[Object(u.jsxs)("div",{className:"top-info-box",children:[Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsxs)("div",{className:"num",children:["$ ",w?Object(u.jsx)(i.a,{value:w.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(u.jsx)("div",{className:"text",children:t.price})]}),Object(u.jsxs)("div",{className:"info-box min-box",children:[Object(u.jsxs)("div",{className:"num",children:["$ ",w?Object(u.jsx)(i.a,{value:w.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(u.jsx)("div",{className:"text",children:t["market-cap"]})]})]}),Object(u.jsxs)("div",{className:"buttom-info-box",children:[Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsx)("div",{className:"num",children:w?Object(u.jsx)(i.a,{value:w.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(u.jsx)("div",{className:"text",children:t["circulating-supply"]})]}),Object(u.jsxs)("div",{className:"info-box min-box",children:[Object(u.jsx)("div",{className:"num",children:w?Object(u.jsx)(i.a,{value:w.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(u.jsx)("div",{className:"text",children:t["total-supply"]})]})]})]}),Object(u.jsx)("div",{className:"buy-deri-token",children:t["token-burning"]}),Object(u.jsxs)("div",{className:"token-info-content token-burning-content",children:[Object(u.jsx)("div",{className:"top-info-box  token-burning",children:Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsx)("div",{className:"num",children:"4,357,036"}),Object(u.jsx)("div",{className:"text",children:t["burned-to-mining-vault"]})]})}),Object(u.jsx)("div",{className:"buttom-info-box  token-burning",children:Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsxs)("div",{className:"num",children:[Object(u.jsx)(i.a,{value:y,displayType:"text",thousandSeparator:!0,decimalScale:0}),"  ",Object(u.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/token/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9?a=0x000000000000000000000000000000000000dead",children:[" ",Object(u.jsx)(d.a,{token:"target"})]})]}),Object(u.jsx)("div",{className:"text",children:t["burned-to-deadlock-address"]})]})})]}),Object(u.jsx)("div",{className:"buy-deri-token",children:t["buy-deri-token"]}),Object(u.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(u.jsx)("a",{target:"_blank",onClick:async()=>{a.isConnected()?(await a.switchNetwork(_[56]),window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")):window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")},children:Object(u.jsxs)("div",{className:"swap-box",children:[Object(u.jsx)("div",{className:"swap-logo",children:Object(u.jsx)("img",{alt:"",src:b})}),Object(u.jsx)("div",{className:"swap-name",children:t["pancake-swap"]})]})}),Object(u.jsx)("a",{target:"_blank",onClick:async()=>{a.isConnected()?(await a.switchNetwork(_[1]),window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")):window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")},children:Object(u.jsxs)("div",{className:"swap-box",children:[Object(u.jsx)("div",{className:"swap-logo",children:Object(u.jsx)("img",{alt:"",src:h})}),Object(u.jsx)("div",{className:"swap-name",children:t["sushi-swap"]})]})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(u.jsxs)("div",{className:"swap-box",children:[Object(u.jsx)("div",{className:"swap-logo",children:Object(u.jsx)("img",{alt:"",src:x})}),Object(u.jsx)("div",{className:"swap-name",children:t.gate})]})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(u.jsxs)("div",{className:"swap-box",children:[Object(u.jsx)("div",{className:"swap-logo",children:Object(u.jsx)("img",{alt:"",src:v})}),Object(u.jsx)("div",{className:"swap-name",children:t.mexc})]})})]}),Object(u.jsxs)("div",{className:"benefits-faq-box",children:[Object(u.jsxs)("div",{className:"benefits-box",children:[Object(u.jsx)("div",{className:"benefits-title",children:t["benefits-of-deri-token"]}),Object(u.jsxs)("div",{className:"benefits-info",children:[Object(u.jsxs)("div",{className:"governance",children:[Object(u.jsx)("img",{src:m,alt:""}),Object(u.jsxs)("div",{className:"governance-des",children:[Object(u.jsx)("div",{className:"governance-title",children:t.governance}),Object(u.jsx)("div",{className:"governance-text",children:t["governance-des"]})]})]}),Object(u.jsxs)("div",{className:"privilege",children:[Object(u.jsx)("img",{src:p,alt:""}),Object(u.jsxs)("div",{className:"privilege-des",children:[Object(u.jsx)("div",{className:"privilege-title",children:t.privilege}),Object(u.jsx)("div",{className:"privilege-text",children:t["privilege-des"]})]})]})]})]}),Object(u.jsxs)("div",{className:"faq-box",children:[Object(u.jsx)("div",{className:"faq-title",children:t.faq}),Object(u.jsxs)("div",{className:"faq-info",children:[C.map(((e,a)=>Object(u.jsx)(O,{item:e,index:a}))),Object(u.jsxs)("div",{className:"faq-info-box",children:[Object(u.jsxs)("div",{className:"faq-title-img",onClick:()=>{k(!N)},children:[Object(u.jsx)("div",{className:"faq-question-title",children:t["what-are-the"]}),Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{token:N?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),N&&Object(u.jsxs)("div",{className:"faq-des",children:[Object(u.jsx)("div",{className:"governance-privilege",children:t.governance}),Object(u.jsx)("div",{children:t["what-are-the-govenance-des"]}),Object(u.jsx)("div",{className:"governance-privilege privilege",children:t.privilege}),Object(u.jsx)("div",{children:t["what-are-the-privilege-des-one"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),t["what-are-the-privilege-des-two"]]}),Object(u.jsx)("div",{className:"specifically",children:t["what-are-the-privilege-des-three"]}),Object(u.jsxs)("div",{className:"specifically-des",children:[Object(u.jsx)("div",{className:"list-style"}),Object(u.jsx)("div",{children:t["what-are-the-privilege-des-three-des-one"]})]}),Object(u.jsxs)("div",{className:"specifically-des",children:[Object(u.jsx)("div",{className:"list-style"}),Object(u.jsx)("div",{children:t["what-are-the-privilege-des-three-des-two"]})]}),Object(u.jsx)("div",{className:"specifically",children:t["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=34.a2436bf2.chunk.js.map