if(!self.define){let e,r={};const t=(t,c)=>(t=new URL(t+".js",c).href,r[t]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=r,document.head.appendChild(e)}else e=t,importScripts(t),r()})).then((()=>{let e=r[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let i={};const n=e=>t(e,o),a={module:{uri:o},exports:i,require:n};r[o]=Promise.all(c.map((e=>a[e]||n(e)))).then((e=>(s(...e),i)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"trajectory-tracker"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/trajectory-tracker/css/app.a4378654.css",revision:null},{url:"/trajectory-tracker/css/chunk-vendors.b3fea4d5.css",revision:null},{url:"/trajectory-tracker/img/compass-rose.b843c06a.png",revision:null},{url:"/trajectory-tracker/img/joystick-base.43f18dbc.png",revision:null},{url:"/trajectory-tracker/img/joystick-red.dbe8e2c2.png",revision:null},{url:"/trajectory-tracker/index.html",revision:"6325e32601deac71c72294a884e4b08b"},{url:"/trajectory-tracker/js/app.2415f34c.js",revision:null},{url:"/trajectory-tracker/manifest.json",revision:"10bc5d0e0456b92f56dcbb308e21e060"},{url:"/trajectory-tracker/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
