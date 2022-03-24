(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[7],{1031:function(e,t,s){"use strict";var a=s(4),i=(s(48),s(1115)),l=s(39),n=s(12),c=s(6),o=s(3);const r=Object(l.a)(i.a)`
  width : ${e=>e.width}px;
`,d=l.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,s]=Object(a.useState)(Object(o.jsx)("span",{className:"loading-line"})),[i,l]=Object(a.useState)(!0),b=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},j=e=>e&&e.replace(/\.$/,"");return Object(a.useEffect)((()=>{const{allowZero:t,wallet:a,closeShowLoadingEffectAfterLoaded:m,defaultValue:x="--",...v}=e;if(b())v.decimalScale>0&&!t&&v.value&&/\d+\.0*[1-9]+/.test(v.value)&&0===+Object(c.bg)(v.value).toFixed(+v.decimalScale||2)&&(v.decimalScale=Object(n.d)(Math.abs(v.value))+2),-1===v.decimalScale&&delete v.decimalScale,v.value=Object(n.J)(v.value),v.value&&/\d+.9{6}/.test(v.value)&&(v.value=(+v.value).toFixed(5)),s(Object(o.jsx)(r,{...v,renderText:j,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:a}=e;s(Object(o.jsx)(d,{className:"loading-line",width:t,height:a})),m&&l(!1)}const p=window.setTimeout((()=>{b()||s(x)}),6e4);return()=>{clearTimeout(p)}}),[e.value,e.decimalScale,e.suffix]),t}},1365:function(e,t,s){"use strict";t.a=s.p+"static/media/staked.45c27f0b.svg"},1568:function(e,t,s){},1627:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(4),i=s(41),l=s(1031),n=s(126),c=s(381),o=s(383),r=s(380),d=s(1365),b=s(384),j=s(55),m=s.n(j),x=s.p+"static/media/close.7f6b23a4.svg",v=(s(1876),s(39)),p=s(3);function h(e){let{lang:t,pool:s,wallet:j}=e;const v=Object(i.g)(),[h,u]=Object(a.useState)({}),[O,f]=Object(a.useState)(!1),[k,y]=Object(a.useState)(),[N,w]=Object(a.useState)(!0),S=e=>{e.target.src=b.default};Object(a.useEffect)((()=>{(async()=>{u({});let e=await s.getPoolInfo(j,s);u(e)})(),j.isConnected()&&((async()=>{let e=await s.getIsStaked(j,s);e&&f(e.isStaked)})(),(async()=>{if(s&&("v3"===s.version||"v3_lite"===s.version)){let e=await s.getVenusEarned(j,s.address);y(e)}})())}),[s,j.detail.account]),Object(a.useEffect)((()=>{let e=sessionStorage.getItem(s.address);null!==e&&e&&w(!1)}),[s]);const T=`/pool/${s.version||"v1"}/${s.chainId}/${s.type}/${s.address}`;return Object(p.jsxs)("div",{className:"card-box",children:[Object(p.jsxs)("div",{className:"v2_lite_open"===s.version?"card-list open-list":"card-list",onClick:()=>{(e=>{"v2_lite_open"!==s.version&&v.push(e)})(T)},children:[Object(p.jsxs)("div",{className:m()("card-header",{v3:s.isAllV3}),children:[Object(p.jsxs)("div",{className:"pool-network-type",children:[Object(p.jsx)("div",{className:"network-logo",children:Object(p.jsx)("img",{alt:"",src:(e=>{let t;return"56"===e||"97"===e?t=c.default:"137"===e?t=o.default:"1"===e&&(t=r.default),t})(s.chainId)})}),Object(p.jsxs)("div",{className:"pool-type-network-text",children:[Object(p.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==s.address&&Object(p.jsxs)(p.Fragment,{children:[t[s.type]," ",t[s.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===s.address&&Object(p.jsx)(p.Fragment,{children:t[s.zone]})]}),Object(p.jsx)("div",{className:"pool-network-text",children:s.chain.toUpperCase()})]})]}),Object(p.jsxs)("div",{className:"base-token-logo",children:[s.isLp&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"lp-base-token-bg",children:[Object(p.jsx)("div",{className:`base-token-bg ${s.bTokens[0].bTokenSymbol}`}),Object(p.jsx)("span",{className:"lp-con",children:"+"}),Object(p.jsx)("div",{className:`base-token-bg ${s.bTokens[1].bTokenSymbol}`})]})}),!s.isLp&&"v3"!==s.version&&"v3_lite"!==s.version&&Object(p.jsx)(p.Fragment,{children:s.bTokens.map(((e,t)=>Object(p.jsx)("div",{className:"base-token-box-bg",children:Object(p.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`,children:"v2_lite_open"===s.version&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("img",{alt:"",onError:S,src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${e.bTokenSymbol}.png`})})})},t)))}),("v3"===s.version||"v3_lite"===s.version)&&Object(p.jsx)(g,{bTokens:s.bTokens})]})]}),Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==s.version&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"max-apy-title",children:"v2"===s.version||"v3_lite"===s.version||"v3"===s.version?t["max-apy"]:t.apy}),Object(p.jsx)("div",{className:"max-apy-num",children:Object(p.jsx)(l.a,{value:h.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(p.jsxs)("div",{className:"total-pool-liquidity",children:[Object(p.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(p.jsx)("div",{className:"total-liquidity-num",children:Object(p.jsx)(l.a,{value:h.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===s.type?7:0})})]}),Object(p.jsxs)("div",{className:"your-deri-epoch",children:[O&&Object(p.jsxs)("div",{className:"staked-box",children:[Object(p.jsx)("img",{src:d.a,alt:""}),t.staked]}),+k>0&&("v3"===s.version||"v3_lite"===s.version)&&Object(p.jsx)("span",{className:"xvs-collectable",children:Object(p.jsxs)("div",{className:"staked-box",children:[Object(p.jsx)(l.a,{width:"50px",value:k,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(p.jsx)("div",{className:"stake-button",children:Object(p.jsx)(n.a,{disabled:"v2_lite_open"===s.version,className:"button",outline:!0,label:"v2_lite_open"===s.version?t.operating:t.stake})})]})]}),"v3_lite"===s.version&&N&&Object(p.jsxs)("div",{className:"new-symbol",children:[Object(p.jsx)("div",{className:"new-symbol-text",children:"New Listing : APEUSDT GMTUSDT"}),Object(p.jsx)("div",{className:"close-symbol",children:Object(p.jsx)("img",{src:x,alt:"close",onClick:()=>{return e=s.address,sessionStorage.setItem(e,!1),void w(!1);var e}})})]})]})}const u=v.a.div`
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
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }
  .base-token{
    margin-left: 0px!important;
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
    // transform : translateX(100px)!important;
    visibility: visible;    
  }
  
  .base-token-box-bg.explode:hover .base-token {
    z-index : 2!important;
  } 

`,O=v.a.div`
  position: absolute;
  transform : ${e=>`rotate(${-e.rotate}deg)`};
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  .move {
    transform : translateX(100px) ${e=>`rotate(${e.rotate}deg) !important`};
  }
`,g=e=>{let{bTokens:t=[]}=e;const s=360/t.length;return Object(p.jsxs)(u,{className:"v3-tokens",children:[Object(p.jsx)("div",{className:"tokens",children:t.filter(((e,t)=>t<3)).map(((e,t)=>Object(p.jsx)("div",{className:"base-token-box-bg",children:Object(p.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`})},t)))}),Object(p.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(p.jsxs)("div",{className:"base-token-bg",children:[t.length-3," +"]}),t.map(((e,t)=>{const a=s*t;return Object(p.jsx)(O,{className:"base-token",rotate:a,width:"100",children:Object(p.jsx)("div",{width:"100",rotate:a,className:`base-token-bg move ${e.bTokenSymbol}`})},t)}))]})]})}},1876:function(e,t,s){}}]);
//# sourceMappingURL=7.0cb88023.chunk.js.map