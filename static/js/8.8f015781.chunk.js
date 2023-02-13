(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1389:function(e,t,a){"use strict";var s,n,i=a(22),l=a(322),c=a(55),o=a(9),r=a(63),d=a(8),b=(a(79),a(1424)),j=a(53),v=a(19),x=a(17),m=a(4),u=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],p=Object(j.a)(b.a)(s||(s=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),h=j.a.span(n||(n=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(m.jsx)("span",{className:"loading-line"})),a=Object(o.a)(t,2),s=a[0],n=a[1],r=Object(d.useState)(!0),b=Object(o.a)(r,2),j=b[0],O=b[1],f=function(){var t=e.allowZero;return"object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},k=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,c=void 0===s?"--":s,o=Object(l.a)(e,u);if(f())o.decimalScale>0&&o.value&&/\d+\.0*[1-9]+/.test(o.value)&&!t&&0===+Object(x.bg)(o.value).toFixed(+o.decimalScale||2)&&(o.decimalScale=Object(v.g)(Math.abs(o.value))+2),(-1===o.decimalScale||0===+o.value&&t)&&delete o.decimalScale,o.value=/e(\+|=)?/.test(o.value)?Object(v.M)(o.value):""+o.value,o.value&&/\d+.9{6}/.test(o.value)&&(o.value=(+o.value).toFixed(5)),n(Object(m.jsx)(p,Object(i.a)(Object(i.a)({},o),{},{renderText:k,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var r=e.width,d=e.height;n(Object(m.jsx)(h,{className:"loading-line",width:r,height:d})),a&&O(!1)}var b=window.setTimeout((function(){f()||n(c)}),c===o.value?0:6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),s}},1588:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.45c27f0b.svg"},1827:function(e,t,a){},1939:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(8),n=a(61),i=a(1389),l=a(186),c=a(508),o=a(510),r=a(511),d=a(507),b=a(1588),j=a(513),v=(a(73),a.p,a(2173),a(53)),x=a(4);function m(e){let{lang:t,pool:a,wallet:v}=e;const m=Object(n.g)(),[u,p]=Object(s.useState)({}),[O,f]=Object(s.useState)(!1),[k,g]=Object(s.useState)(),[N,y]=Object(s.useState)(!0),w=e=>{e.target.src=j.default};Object(s.useEffect)((()=>{(async()=>{p({});let e=await a.getPoolInfo(a.address,a.chainId,a.version);p(e)})(),v.isConnected()&&((async()=>{let e=await a.getIsStaked(v,a);e&&f(e.isStaked)})(),(async()=>{if(a&&("v3"===a.version||"v3_lite"===a.version)){let e=await a.getVenusEarned(v,a.address);g(e)}})())}),[a,v.detail.account]),Object(s.useEffect)((()=>{let e=sessionStorage.getItem(a.address);null!==e&&e&&y(!1)}),[a]);const S=`/pool/${a.version||"v1"}/${a.chainId}/${a.type}/${a.address}`;return Object(x.jsx)("div",{className:("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===a.address?"showGuide":"")+" card-box",children:Object(x.jsxs)("div",{className:"v2_lite_open"===a.version?"card-list open-list":"card-list",onClick:()=>{(e=>{"v2_lite_open"!==a.version&&m.push(e)})(S)},children:[Object(x.jsxs)("div",{className:`card-header ${a.retired?`${a.version}`:""} ${a.new?"new":""}`,children:[Object(x.jsxs)("div",{className:"pool-network-type",children:[Object(x.jsx)("div",{className:"network-logo",children:Object(x.jsx)("img",{alt:"",src:(e=>{let t;return"56"===e||"97"===e?t=c.default:"137"===e?t=r.default:"1"===e?t=d.default:"42161"!==e&&"421611"!==e||(t=o.default),t})(a.chainId)})}),Object(x.jsxs)("div",{className:"pool-type-network-text",children:[Object(x.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==a.address&&Object(x.jsxs)(x.Fragment,{children:[t[a.type]," ",t[a.zone]]}),"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA"===a.address&&Object(x.jsx)(x.Fragment,{children:"DERI-based"}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===a.address&&Object(x.jsx)(x.Fragment,{children:t[a.zone]})]}),Object(x.jsx)("div",{className:"pool-network-text",children:"BSC"===a.chain.toUpperCase()?"BNB Chain":a.chain.toUpperCase()})]})]}),Object(x.jsxs)("div",{className:"base-token-logo",children:[a.isLp&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"lp-base-token-bg",children:[Object(x.jsx)("div",{className:`base-token-bg ${a.bTokens[0].bTokenSymbol}`}),Object(x.jsx)("span",{className:"lp-con",children:"+"}),Object(x.jsx)("div",{className:`base-token-bg ${a.bTokens[1].bTokenSymbol}`})]})}),!a.isLp&&"v3"!==a.version&&"v3_lite"!==a.version&&Object(x.jsx)(x.Fragment,{children:a.bTokens.map(((e,t)=>Object(x.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(x.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`,children:"v2_lite_open"===a.version&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("img",{alt:"",onError:w,src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${e.bTokenSymbol}.png`})})})},t)))}),("v3"===a.version||"v3_lite"===a.version)&&!a.singleBtoken&&Object(x.jsx)(h,{bTokens:a.bTokens}),("v3"===a.version||"v3_lite"===a.version)&&a.singleBtoken&&Object(x.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(x.jsx)("div",{className:`base-token-bg ${a.bTokens[0].bTokenSymbol}`})})]})]}),Object(x.jsxs)("div",{className:"card-content",children:[Object(x.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==a.version&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"max-apy-title",children:"v2"===a.version||"v3_lite"===a.version||"v3"===a.version?t["max-apy"]:t.apy}),Object(x.jsx)("div",{className:"max-apy-num",children:Object(x.jsx)(i.a,{value:u.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(x.jsxs)("div",{className:"total-pool-liquidity",children:[Object(x.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(x.jsx)("div",{className:"total-liquidity-num",children:Object(x.jsx)(i.a,{value:u.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===a.type?7:0})})]}),Object(x.jsxs)("div",{className:"your-deri-epoch",children:[O&&Object(x.jsxs)("div",{className:"staked-box",children:[Object(x.jsx)("img",{src:b.a,alt:""}),t.staked]}),+k>0&&("v3"===a.version||"v3_lite"===a.version)&&Object(x.jsx)("span",{className:"xvs-collectable",children:Object(x.jsxs)("div",{className:"staked-box",children:[Object(x.jsx)(i.a,{width:"50px",value:k,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(x.jsx)("div",{className:"stake-button",children:Object(x.jsx)(l.a,{disabled:"v2_lite_open"===a.version,className:"button",outline:!0,label:"v2_lite_open"===a.version?t.operating:t.stake})})]})]})})}const u=v.a.div`
  @-webkit-keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }

  @keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px) ;
        -moz-transform : translateX(100px) ;
    }
  }
  .base-token{
    margin-left: 0px !important;
    z-index : -2;
    visibility: hidden;
    background-color: #111e34;
    border : 1px solid #fff;
  }
  @media only screen and (max-width: 760px) {
    .base-token{
      display:none;
    }
  }
  .base-token-box-bg.explode:hover .move  {
    -webkit-animation : explode .4s .0s linear;
    -moz-animation :  explode .4s .0s linear;
    animation: explode .4s .0s linear;
    visibility: visible;    
  }
  
  .base-token-box-bg.explode:hover .base-token {
    z-index : 2 !important;
  } 

`,p=v.a.div`
  position: absolute;
  transform : ${e=>`rotate(${-e.rotate}deg)`};
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  .move {
    transform : translateX(100px) ${e=>`rotate(${e.rotate}deg)`};
  }
`,h=e=>{let{bTokens:t=[]}=e;const a=360/t.length;return Object(x.jsxs)(u,{className:"v3-tokens",children:[Object(x.jsx)("div",{className:"tokens",children:t.filter(((e,t)=>t<3)).map(((e,t)=>Object(x.jsx)("div",{className:"base-token-box-bg",children:Object(x.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`})},t)))}),Object(x.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(x.jsxs)("div",{className:"base-token-bg num-token",children:[t.length-3," +"]}),t.map(((e,t)=>{const s=a*t;return Object(x.jsx)(p,{className:"base-token",rotate:s,width:"100",children:Object(x.jsx)("div",{width:"100",rotate:s,className:`base-token-bg move ${e.bTokenSymbol}`})},t)}))]})]})}},2173:function(e,t,a){}}]);
//# sourceMappingURL=8.8f015781.chunk.js.map