(()=>{var e={9360:(e,t,r)=>{"use strict";r(702),r(8964);var o=r(1957),n=r(694),a=r(499),i=r(9835);const l={class:"App"};function s(e,t,r,o,n,a){const s=(0,i.up)("router-view"),c=(0,i.up)("LoaderComponent");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(s),e.loading?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0)])}var c=r(1750),d=r.n(c);const u=e=>((0,i.dD)("data-v-26ba4a52"),e=e(),(0,i.Cn)(),e),p={style:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0","z-index":"10000","background-color":"#add6ff"}},f=u((()=>(0,i._)("div",{class:"absolute-center",style:{"margin-left":"auto","margin-right":"auto"}},null,-1))),h={class:"absolute-center"},m={class:"text-center"},v={class:"splash"},g=u((()=>(0,i._)("div",null,[(0,i._)("h6",{class:"q-pa-md text-blue absolute-bottom text-center"},"2022")],-1)));function b(e,t,r,o,n,a){const l=(0,i.up)("q-img"),s=(0,i.up)("q-spinner-ios");return(0,i.wg)(),(0,i.iD)("div",p,[f,(0,i._)("div",h,[(0,i._)("div",m,[(0,i.Wm)(l,{class:"logo",width:"400px",height:"400px",src:d()})]),(0,i._)("div",v,[(0,i.Wm)(s,{class:"absolute-center",style:{"margin-top":"7rem"},color:"blue",size:"4.5em"})])]),g])}const y=(0,i.aZ)({name:"LoaderComponent",setup(){return{}}});var w=r(1639),P=r(335),O=r(8359),j=r(9984),_=r.n(j);const k=(0,w.Z)(y,[["render",b],["__scopeId","data-v-26ba4a52"]]),C=k;_()(y,"components",{QImg:P.Z,QSpinnerIos:O.Z});const x=(0,i.aZ)({components:{LoaderComponent:C},name:"App",data:()=>({loading:!0}),mounted(){setTimeout((()=>{this.loading=!1}),2e3)}}),A=(0,w.Z)(x,[["render",s]]),E=A;var S=r(3340),T=r(8339);const L=[{path:"/login",component:()=>Promise.all([r.e(736),r.e(308)]).then(r.bind(r,1308)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(705)]).then(r.bind(r,7705))}]},{path:"/registro",component:()=>Promise.all([r.e(736),r.e(308)]).then(r.bind(r,1308)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(984)]).then(r.bind(r,5984))}]},{path:"/",component:()=>Promise.all([r.e(736),r.e(996)]).then(r.bind(r,4996)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(519)]).then(r.bind(r,3519))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(221)]).then(r.bind(r,6221))}],M=L,N=(0,S.BC)((function(){const e=T.r5,t=(0,T.p7)({scrollBehavior:()=>({left:0,top:0}),routes:M,history:e("")});return t}));async function q(e,t){const r=e(E);r.use(n.Z,t);const o=(0,a.Xl)("function"===typeof N?await N({}):N);return{app:r,router:o}}const I={config:{}};var Z=r(368);(0,Z.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,4848,23));const B="";async function D({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:B})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}q(o.ri,I).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4136))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));D(e,r)}))))},4136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{api:()=>i,default:()=>l});var o=r(3340),n=r(9981),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},1750:(e,t,r)=>{e.exports=r.p+"img/sigema-removebg.4e1943e8.png"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{221:"edb38e16",308:"c719fd5e",519:"65c4f694",705:"4d302b9a",984:"bae27758",996:"934ef408"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"ee0ffa6a",519:"1782f344",705:"5c6c8ecb",736:"2be6315a",984:"6304eab1",996:"8994ef94"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="SIGEMA:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={519:1,705:1,984:1,996:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var d=s(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=globalThis["webpackChunkSIGEMA"]=globalThis["webpackChunkSIGEMA"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(9360)));o=r.O(o)})();