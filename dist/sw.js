if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const t=e=>n(e,s),c={module:{uri:s},exports:a,require:t};i[s]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(o(...e),a)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.06d910a5.js",revision:null},{url:"assets/index.82aab6e8.css",revision:null},{url:"index.html",revision:"1b648daa3e9049043fedaaeca62e3a4f"},{url:"favicon.ico",revision:"a8b7960180710030f280441c4eba8e24"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"f4a01ea8feee4dc59af635c162aad6e9"},{url:"android-chrome-192x192.png",revision:"5069e3f7abf1a444505b0661a325be61"},{url:"android-chrome-512x512.png",revision:"45bae53a508b64fd8904287c2d50314d"},{url:"manifest.webmanifest",revision:"b87b87a1caeeb5de593532cd97890260"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
