import{d as j,u as Z,r as b,o as ee,_ as te,a as ne,b as M,c as q,n as oe,F as ie,e as w,f as L,g as B,w as z,T as J,t as ae,h as H,p as se,i as re,j as de,k as D,l as ce,m as le,q as ue,s as pe,v as we,x as O,y as W,z as G,A as ve,B as fe,C as F}from"./entry.ed262f8b.js";const A=i=>(se("data-v-19d7f7af"),i=i(),re(),i),me=A(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),he=A(()=>w("span",null,[w("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),de(": Preview enabled")],-1)),_e={key:0},ye=A(()=>w("div",{id:"__preview_background"},null,-1)),ge=A(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Ce=A(()=>w("p",null,"Initializing the preview...",-1)),Ie={key:0},ke=A(()=>w("div",{id:"__preview_background"},null,-1)),Pe={id:"__preview_loader"},xe=j({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const s=i,t=["__nuxt_preview","__preview_enabled"],l=D(),y=Z(),u=b(!0),I=b(!1),e=b(!1),o=b("");let n;const a=async()=>{H("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await y.replace({query:{preview:void 0}}),window.location.reload()},m=async p=>{const v=await s.syncPreview(p);if(e.value!==!0){if(!v){setTimeout(()=>m(p),1e3);return}H("previewToken").value&&(e.value=!0,await y.replace({query:{}}),l.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&n.disconnect())}};return ee(async()=>{n=(await te(()=>import("./index.ce959a52.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let v;n.on("connect",()=>{v=setTimeout(()=>{e.value||(v=setTimeout(()=>{o.value="Preview sync timed out",e.value=!1},3e4),n.emit("draft:requestSync"))},3e4)});const P=()=>{v&&(clearTimeout(v),v=null)};n.on("draft:sync",async x=>{if(P(),!x){try{n.once("draft:ready",()=>{n.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(T){switch(P(),T.response.status){case 404:o.value="Preview draft not found",e.value=!1;break;default:o.value="An error occurred while syncing preview",e.value=!1}}return}m(x)}),n.on("draft:unauthorized",()=>{P(),o.value="Unauthorized preview",e.value=!1}),n.on("disconnect",()=>{P()}),document.body.classList.add(...t),n.on("draft:update",x=>{I.value=!0,s.syncPreview(x),I.value=!1})}),ne(()=>{document.body.classList.remove(...t)}),(p,v)=>(M(),q("div",null,[u.value?(M(),q("div",{key:0,id:"__nuxt_preview",class:oe({__preview_ready:e.value,__preview_refreshing:I.value})},[e.value?(M(),q(ie,{key:0},[me,he,w("button",{onClick:a}," Close ")],64)):L("",!0)],2)):L("",!0),B(J,{name:"preview-loading"},{default:z(()=>[u.value&&!e.value&&!o.value?(M(),q("div",_e,[ye,w("div",{id:"__preview_loader"},[ge,Ce,w("button",{onClick:a}," Cancel ")])])):L("",!0)]),_:1}),B(J,{name:"preview-loading"},{default:z(()=>[o.value?(M(),q("div",Ie,[ke,w("div",Pe,[w("p",null,ae(o.value),1),w("button",{onClick:a}," Exit preview ")])])):L("",!0)]),_:1})]))}});const Se=ce(xe,[["__scopeId","data-v-19d7f7af"]]),Ae=(i=[],s,t)=>{const l=[...s||[]],y=[...t||[]],u=JSON.parse(JSON.stringify(i));for(const e of l)if(e.new)u.push({path:e.path,parsed:e.parsed});else if(e.oldPath)if(y.splice(y.findIndex(n=>n.path===e.oldPath),1),l.find(n=>n.path===e.oldPath))u.push({path:e.path,parsed:e.parsed});else{const n=u.find(a=>a.path===e.oldPath);n&&(n.path=e.path,e.parsed?n.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(a=>{n.parsed[a]=e.pathMeta[a]}))}else{const o=u.find(n=>n.path===e.path);o?Object.assign(o,{path:e.path,parsed:e.parsed}):u.push({path:e.path,parsed:e.parsed})}for(const e of y)u.splice(u.findIndex(o=>o.path===e.path),1);const I=new Intl.Collator(void 0,{numeric:!0});return u.sort((e,o)=>I.compare(e.path,o.path)),u},C={appConfig:"app.config.ts",appConfigV4:"app/app.config.ts",nuxtConfig:"nuxt.config.ts"},Te=le((i,s,t)=>{if(Array.isArray(i[s])&&Array.isArray(t))return i[s]=t,!0}),Me=i=>{let s;return t=>(s||(s=i()),s)};function Q(i,s){for(const t in i){const l=s[t];t in s||delete i[t],l!==null&&typeof l=="object"&&Q(i[t],s[t])}}function X(i,s){for(const t in s){const l=s[t];l!==null&&typeof l=="object"?Array.isArray(l)&&Array.isArray(i[t])?i[t]=l:(i[t]=i[t]||{},X(i[t],l)):i[t]=l}}const qe=()=>{const i=D(),s={},t=ue("studio-client-db",()=>null);t.value||(i.hook("content:storage",o=>{t.value=o}),pe("/non-existing-path").findOne());const l=async o=>{var m,p,v;const n=window.sessionStorage.getItem("previewToken");if(!o)return null;o=o.replace(/\/$/,"");let a=await((m=t.value)==null?void 0:m.getItem(`${n}:${o}`));return a||(a=await((p=t.value)==null?void 0:p.getItem(`cached:${o}`))),a||(a=a=await((v=t.value)==null?void 0:v.getItem(o))),a||(a=s[o||"/"]),a};return{storage:t,findContentItem:l,updateContentItem:(o,n)=>{var a;t.value&&(s[n.parsed._path]=n.parsed,t.value.setItem(`${o}:${(a=n.parsed)==null?void 0:a._id}`,JSON.stringify(n.parsed)))},removeContentItem:async(o,n)=>{var m;const a=await l(n);if(await((m=t.value)==null?void 0:m.removeItem(`${o}:${n}`)),a){delete s[a._path];const p=await l(a._id);p&&(s[p._path]=p)}},removeAllContentItems:async o=>{const n=await t.value.getKeys(`${o}:`);await Promise.all(n.map(a=>t.value.removeItem(a)))},setPreviewMetaItems:async(o,n)=>{const a=new Set(n.map(m=>m.parsed._id.split(":").shift()));await t.value.setItem(`${o}$`,JSON.stringify({ignoreSources:Array.from(a)}))}}},be=Me(()=>JSON.parse(JSON.stringify(G())));let V=[];const Ke=()=>{const i=D(),{storage:s,findContentItem:t,updateContentItem:l,removeContentItem:y,removeAllContentItems:u,setPreviewMetaItems:I}=qe(),{studio:e,content:o}=we().public,n=window.sessionStorage.getItem("previewAPI")||(e==null?void 0:e.apiURL),a=be(),m=async c=>{const r=window.sessionStorage.getItem("previewToken");u(r),I(r,c),await Promise.all(c.map(f=>{l(r,f)}))},p=c=>{const r=W(i,G);r!=null&&r.ui&&(r.ui.icons={...r.ui.icons,dynamic:!0}),X(r,Te(c,a)),c||Q(r,a)},v=async c=>{if(V=c.files=c.files||V||[],!s.value)return!1;V=[];const r=Ae(c.files,c.additions,c.deletions),f=r.filter(k=>![C.appConfig,C.appConfigV4,C.nuxtConfig].includes(k.path));await m(f);const h=r.find(k=>[C.appConfig,C.appConfigV4].includes(k.path));return p(h==null?void 0:h.parsed),T(),!0},P=async()=>{const c=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:n,method:"POST",params:{token:c}})},x=()=>{const c=window.sessionStorage.getItem("previewToken"),r=document.createElement("div");r.id="__nuxt_preview_wrapper",document.body.appendChild(r),ve(Se,{previewToken:c,apiURL:n,syncPreview:v,requestPreviewSyncAPI:P}).mount(r)},T=async()=>{if(o!=null&&o.documentDriven){const{pages:c}=W(i,fe),r=await Promise.all(Object.keys(c.value).map(async f=>{var h;return await t(((h=c.value[f])==null?void 0:h._id)??f)}));c.value=r.reduce((f,h,k)=>(h&&(f[Object.keys(c.value)[k]]=h),f),{})}await i.hooks.callHookParallel("app:data:refresh")};return{mountPreviewUI:x,initiateIframeCommunication:Y};function Y(){if(!window.parent||window.self===window.parent)return;const c=Z(),r=O(),f=b(""),h=d=>({path:d.path,query:F(d.query),params:F(d.params),fullPath:d.fullPath,meta:F(d.meta)});window.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey||d.altKey||d.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:d.key,metaKey:d.metaKey,ctrlKey:d.ctrlKey,shiftKey:d.shiftKey,altKey:d.altKey}},"*")}),window.addEventListener("message",async d=>{var U;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((U=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:U.split(",").map(_=>_.trim()))||[]].includes(d.origin))return;const{type:N,payload:R={}}=d.data||{};switch(N){case"nuxt-studio:editor:file-selected":{const _=await t(R.path);_&&(_._partial||!String(R.path).endsWith(".md")||_._path!==O().path&&(f.value=_._path,c.push(_._path)));break}case"nuxt-studio:editor:media-changed":case"nuxt-studio:editor:file-changed":{const _=window.sessionStorage.getItem("previewToken"),{additions:$=[],deletions:S=[]}=R;for(const K of $)await l(_,K);for(const K of S)await y(_,K.path);T();break}case"nuxt-studio:config:file-changed":{const{additions:_=[],deletions:$=[]}=R,S=_.find(E=>[C.appConfig,C.appConfigV4].includes(E.path));S&&p(S==null?void 0:S.parsed),$.find(E=>[C.appConfig,C.appConfigV4].includes(E.path))&&p(void 0)}}}),i.hook("page:finish",()=>{k(),i.payload.prerenderedAt&&T()}),i.hook("content:document-driven:finish",({route:d,page:g})=>{d.meta.studio_page_contentId=g==null?void 0:g._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:h(O())},"*"),setTimeout(()=>{k()},100)});function k(){const d=Array.from(window.document.querySelectorAll("[data-content-id]")).map(N=>N.getAttribute("data-content-id")),g=Array.from(new Set([r.meta.studio_page_contentId,...d])).filter(Boolean);if(f.value===g[0]){f.value="";return}window.openContentInStudioEditor(g,{navigate:!0,pageContentId:r.meta.studio_page_contentId})}window.openContentInStudioEditor=(d,g={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...h(r),contentIds:d,...g}},"*")}}};export{Ke as useStudio};