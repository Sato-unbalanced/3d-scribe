import{x as md,y as yd,s as yl,c as vl,d as Il,u as El,g as wl,e as Tl}from"./scheduler.Cnc7RMKr.js";import{S as Cl,i as Sl,o as ti,g as Rl,r as We,u as Al,p as Nt,q as bl,d as kl}from"./index.CWhKXlDH.js";import{w as ss}from"./index.CBPrnNmD.js";var So={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t,e){if(!t)throw xt(e)},xt=function(t){return new Error("Firebase Database ("+Nl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vd=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ur={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),i.push(n[h],n[u],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ol(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Id;const d=r<<2|a>>4;if(i.push(d),c!==64){const g=a<<4&240|c>>2;if(i.push(g),u!==64){const _=c<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dl=function(t){const e=Ol(t);return ur.encodeByteArray(e,!0)},ni=function(t){return Dl(t).replace(/\./g,"")},ii=function(t){try{return ur.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){return Pl(void 0,t)}function Pl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wd(n)||(t[n]=Pl(t[n],e[n]));return t}function wd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=()=>Td().__FIREBASE_DEFAULTS__,Sd=()=>{if(typeof process>"u"||typeof So>"u")return;const t=So.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ii(t[1]);return e&&JSON.parse(e)},dr=()=>{try{return Cd()||Sd()||Rd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ml=t=>{var e,n;return(n=(e=dr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ad=t=>{const e=Ml(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ll=()=>{var t;return(t=dr())===null||t===void 0?void 0:t.config},xl=t=>{var e;return(e=dr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ni(JSON.stringify(n)),ni(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function Fl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ul(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){const t=J();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nd(){return Nl.NODE_ADMIN===!0}function Bl(){try{return typeof indexedDB=="object"}catch{return!1}}function $l(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Od(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="FirebaseError";class de extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Dd,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mt.prototype.create)}}class mt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Pd(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new de(s,a,i)}}function Pd(t,e){return t.replace(Md,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Md=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return JSON.parse(t)}function $(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ln(ii(r[0])||""),n=ln(ii(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Ld=function(t){const e=Hl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xd=function(t){const e=Hl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ot(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Os(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Ro(r)&&Ro(o)){if(!ri(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ro(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Ud(t,e){const n=new Bd(t,e);return n.subscribe.bind(n)}class Bd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");$d(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=rs),s.error===void 0&&(s.error=rs),s.complete===void 0&&(s.complete=rs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $d(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rs(){}function Hd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ni=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=1e3,Vd=2,Gd=4*60*60*1e3,zd=.5;function Ao(t,e=Wd,n=Vd){const i=e*Math.pow(n,t),s=Math.round(zd*i*(Math.random()-.5)*2);return Math.min(Gd,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class re{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new fr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yd(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Kd(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kd(t){return t===et?void 0:t}function Yd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(T||(T={}));const Jd={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Qd=T.INFO,Zd={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},ef=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Zd[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tn{constructor(e){this.name=e,this._logLevel=Qd,this._logHandler=ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const tf=(t,e)=>e.some(n=>t instanceof n);let bo,ko;function nf(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sf(){return ko||(ko=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Ds=new WeakMap,Wl=new WeakMap,os=new WeakMap,gr=new WeakMap;function rf(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ve(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jl.set(n,t)}).catch(()=>{}),gr.set(e,t),e}function of(t){if(Ds.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ds.set(t,e)}let Ps={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ve(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function af(t){Ps=t(Ps)}function lf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(as(this),e,...n);return Wl.set(i,e.sort?e.sort():[e]),Ve(i)}:sf().includes(t)?function(...e){return t.apply(as(this),e),Ve(jl.get(this))}:function(...e){return Ve(t.apply(as(this),e))}}function cf(t){return typeof t=="function"?lf(t):(t instanceof IDBTransaction&&of(t),tf(t,nf())?new Proxy(t,Ps):t)}function Ve(t){if(t instanceof IDBRequest)return rf(t);if(os.has(t))return os.get(t);const e=cf(t);return e!==t&&(os.set(t,e),gr.set(e,t)),e}const as=t=>gr.get(t);function hf(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ve(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ve(o.result),l.oldVersion,l.newVersion,Ve(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uf=["get","getKey","getAll","getAllKeys","count"],df=["put","add","delete","clear"],ls=new Map;function No(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ls.get(e))return ls.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=df.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||uf.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ls.set(e,r),r}af(t=>({...t,get:(e,n,i)=>No(e,n)||t.get(e,n,i),has:(e,n)=>!!No(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pf(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function pf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ms="@firebase/app",Oo="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Tn("@firebase/app"),gf="@firebase/app-compat",_f="@firebase/analytics-compat",mf="@firebase/analytics",yf="@firebase/app-check-compat",vf="@firebase/app-check",If="@firebase/auth",Ef="@firebase/auth-compat",wf="@firebase/database",Tf="@firebase/database-compat",Cf="@firebase/functions",Sf="@firebase/functions-compat",Rf="@firebase/installations",Af="@firebase/installations-compat",bf="@firebase/messaging",kf="@firebase/messaging-compat",Nf="@firebase/performance",Of="@firebase/performance-compat",Df="@firebase/remote-config",Pf="@firebase/remote-config-compat",Mf="@firebase/storage",Lf="@firebase/storage-compat",xf="@firebase/firestore",Ff="@firebase/firestore-compat",Uf="firebase",Bf="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]",$f={[Ms]:"fire-core",[gf]:"fire-core-compat",[mf]:"fire-analytics",[_f]:"fire-analytics-compat",[vf]:"fire-app-check",[yf]:"fire-app-check-compat",[If]:"fire-auth",[Ef]:"fire-auth-compat",[wf]:"fire-rtdb",[Tf]:"fire-rtdb-compat",[Cf]:"fire-fn",[Sf]:"fire-fn-compat",[Rf]:"fire-iid",[Af]:"fire-iid-compat",[bf]:"fire-fcm",[kf]:"fire-fcm-compat",[Nf]:"fire-perf",[Of]:"fire-perf-compat",[Df]:"fire-rc",[Pf]:"fire-rc-compat",[Mf]:"fire-gcs",[Lf]:"fire-gcs-compat",[xf]:"fire-fst",[Ff]:"fire-fst-compat","fire-js":"fire-js",[Uf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Map,xs=new Map;function Hf(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ce(t){const e=t.name;if(xs.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;xs.set(e,t);for(const n of oi.values())Hf(n,t);return!0}function Cn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ge=new mt("app","Firebase",jf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=Bf;function Vf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ls,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ge.create("bad-app-name",{appName:String(s)});if(n||(n=Ll()),!n)throw Ge.create("no-options");const r=oi.get(s);if(r){if(ri(n,r.options)&&ri(i,r.config))return r;throw Ge.create("duplicate-app",{appName:s})}const o=new Xd(s);for(const l of xs.values())o.addComponent(l);const a=new Wf(n,i,o);return oi.set(s,a),a}function Vl(t=Ls){const e=oi.get(t);if(!e&&t===Ls&&Ll())return Vf();if(!e)throw Ge.create("no-app",{appName:t});return e}function Z(t,e,n){var i;let s=(i=$f[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}ce(new re(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="firebase-heartbeat-database",zf=1,cn="firebase-heartbeat-store";let cs=null;function Gl(){return cs||(cs=hf(Gf,zf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cn)}}}).catch(t=>{throw Ge.create("idb-open",{originalErrorMessage:t.message})})),cs}async function qf(t){try{return await(await Gl()).transaction(cn).objectStore(cn).get(zl(t))}catch(e){if(e instanceof de)ct.warn(e.message);else{const n=Ge.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(n.message)}}}async function Do(t,e){try{const i=(await Gl()).transaction(cn,"readwrite");await i.objectStore(cn).put(e,zl(t)),await i.done}catch(n){if(n instanceof de)ct.warn(n.message);else{const i=Ge.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ct.warn(i.message)}}}function zl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=1024,Yf=30*24*60*60*1e3;class Xf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qf(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Po();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Yf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Po(),{heartbeatsToSend:n,unsentEntries:i}=Jf(this._heartbeatsCache.heartbeats),s=ni(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Po(){return new Date().toISOString().substring(0,10)}function Jf(t,e=Kf){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Mo(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mo(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Qf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?$l().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mo(t){return ni(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){ce(new re("platform-logger",e=>new ff(e),"PRIVATE")),ce(new re("heartbeat",e=>new Xf(e),"PRIVATE")),Z(Ms,Oo,t),Z(Ms,Oo,"esm2017"),Z("fire-js","")}Zf("");function _r(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ql(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ep=ql,Kl=new mt("auth","Firebase",ql());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Tn("@firebase/auth");function tp(t,...e){ai.logLevel<=T.WARN&&ai.warn(`Auth (${Ye}): ${t}`,...e)}function Jn(t,...e){ai.logLevel<=T.ERROR&&ai.error(`Auth (${Ye}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,...e){throw mr(t,...e)}function we(t,...e){return mr(t,...e)}function Yl(t,e,n){const i=Object.assign(Object.assign({},ep()),{[e]:n});return new mt("auth","Firebase",i).create(e,{appName:t.name})}function np(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ce(t,"argument-error"),Yl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Kl.create(t,...e)}function y(t,e,...n){if(!t)throw mr(e,...n)}function Ne(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jn(e),new Error(e)}function Le(t,e){t||Ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ip(){return Lo()==="http:"||Lo()==="https:"}function Lo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ip()||Fl()||"connection"in navigator)?navigator.onLine:!0}function rp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Le(n>e,"Short delay should be less than long delay!"),this.isMobile=pr()||Ul()}get(){return sp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){Le(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Sn(3e4,6e4);function Jl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,i,s={}){return Ql(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ft(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Xl.fetch()(Zl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ql(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},op),e);try{const s=new cp(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wn(t,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yl(t,h,c);Ce(t,h)}}catch(s){if(s instanceof de)throw s;Ce(t,"network-request-failed",{message:String(s)})}}async function lp(t,e,n,i,s={}){const r=await Rn(t,e,n,i,s);return"mfaPendingCredential"in r&&Ce(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Zl(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?yr(t.config,s):`${t.config.apiScheme}://${s}`}class cp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(we(this.auth,"network-request-failed")),ap.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=we(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function up(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dp(t,e=!1){const n=Ae(t),i=await n.getIdToken(e),s=vr(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:en(hs(s.auth_time)),issuedAtTime:en(hs(s.iat)),expirationTime:en(hs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function hs(t){return Number(t)*1e3}function vr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Jn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ii(n);return s?JSON.parse(s):(Jn("Failed to decode base64 JWT payload"),null)}catch(s){return Jn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fp(t){const e=vr(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof de&&pp(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function pp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=en(this.lastLoginAt),this.creationTime=en(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t){var e;const n=t.auth,i=await t.getIdToken(),s=await hn(t,up(n,{idToken:i}));y(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?yp(r.providerUserInfo):[],a=mp(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ec(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function _p(t){const e=Ae(t);await li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mp(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function yp(t){return t.map(e=>{var{providerId:n}=e,i=_r(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e){const n=await Ql(t,{},async()=>{const i=Ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Zl(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xl.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await vp(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new un;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new un,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=_r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ec(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hn(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dp(this,e)}reload(){return _p(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await li(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hn(this,hp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,fe=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ke=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:ee,emailVerified:j,isAnonymous:Qe,providerData:Ze,stsTokenManager:jn}=n;y(ee&&jn,e,"internal-error");const Vt=un.fromJSON(this.name,jn);y(typeof ee=="string",e,"internal-error"),Ue(u,e.name),Ue(d,e.name),y(typeof j=="boolean",e,"internal-error"),y(typeof Qe=="boolean",e,"internal-error"),Ue(g,e.name),Ue(_,e.name),Ue(A,e.name),Ue(S,e.name),Ue(fe,e.name),Ue(ke,e.name);const is=new at({uid:ee,auth:e,email:d,emailVerified:j,displayName:u,isAnonymous:Qe,photoURL:_,phoneNumber:g,tenantId:A,stsTokenManager:Vt,createdAt:fe,lastLoginAt:ke});return Ze&&Array.isArray(Ze)&&(is.providerData=Ze.map(_d=>Object.assign({},_d))),S&&(is._redirectEventId=S),is}static async _fromIdTokenResponse(e,n,i=!1){const s=new un;s.updateFromServerResponse(n);const r=new at({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await li(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map;function Oe(t){Le(t instanceof Function,"Expected a class definition");let e=xo.get(t);return e?(Le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tc.type="NONE";const Fo=tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ct{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Qn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Qn("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ct(Oe(Fo),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Oe(Fo);const o=Qn(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const u=at._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ct(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ct(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oc(e))return"Blackberry";if(ac(e))return"Webos";if(Ir(e))return"Safari";if((e.includes("chrome/")||ic(e))&&!e.includes("edge/"))return"Chrome";if(rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function nc(t=J()){return/firefox\//i.test(t)}function Ir(t=J()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ic(t=J()){return/crios\//i.test(t)}function sc(t=J()){return/iemobile/i.test(t)}function rc(t=J()){return/android/i.test(t)}function oc(t=J()){return/blackberry/i.test(t)}function ac(t=J()){return/webos/i.test(t)}function Oi(t=J()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ip(t=J()){var e;return Oi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ep(){return kd()&&document.documentMode===10}function lc(t=J()){return Oi(t)||rc(t)||ac(t)||oc(t)||/windows phone/i.test(t)||sc(t)}function wp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t,e=[]){let n;switch(t){case"Browser":n=Uo(J());break;case"Worker":n=`${Uo(J())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${i}`}async function hc(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Jl(t,e))}function Bo(t){return t!==void 0&&t.enterprise!==void 0}class uc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dc(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=we("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Tp().appendChild(i)})}function Cp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Sp="https://www.google.com/recaptcha/enterprise.js?render=",Rp="recaptcha-enterprise",Ap="NO_RECAPTCHA";class bp{constructor(e){this.type=Rp,this.auth=An(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{hc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uc(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Bo(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ap)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Bo(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dc(Sp+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $o(this),this.idTokenSubscription=new $o(this),this.beforeStateQueue=new kp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Oe(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ct.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await li(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}async initializeRecaptchaConfig(){const e=await hc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new bp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Oe(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await Ct.create(this,[Oe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function An(t){return Ae(t)}class $o{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ud(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){const n=Cn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ri(r,e??{}))return s;Ce(s,"already-initialized")}return n.initialize({options:e})}function Dp(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Oe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Pp(t,e,n){const i=An(t);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=fc(e),{host:o,port:a}=Mp(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Lp()}function fc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mp(t){const e=fc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ho(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ho(o)}}}function Ho(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Lp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,n){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e){return lp(t,"POST","/v1/accounts:signInWithIdp",Jl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="http://localhost";class ht extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=_r(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ht(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return St(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,St(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,St(e,n)}buildRequest(){const e={requestUri:xp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ft(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends bn{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.FACEBOOK_SIGN_IN_METHOD="facebook.com";Be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ht._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return $e.credential(n,i)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends bn{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.GITHUB_SIGN_IN_METHOD="github.com";He.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends bn{constructor(){super("twitter.com")}static credential(e,n){return ht._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return je.credential(n,i)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await at._fromIdTokenResponse(e,i,s),o=jo(i);return new Dt({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=jo(i);return new Dt({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends de{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ci.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ci(e,n,i,s)}}function gc(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ci._fromErrorAndOperation(t,r,e,i):r})}async function Fp(t,e,n=!1){const i=await hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await hn(t,gc(i,s,e,t),n);y(r.idToken,i,"internal-error");const o=vr(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(t.uid===a,i,"user-mismatch"),Dt._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ce(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t,e,n=!1){const i="signIn",s=await gc(t,i,e),r=await Dt._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function $p(t,e,n,i){return Ae(t).onIdTokenChanged(e,n,i)}function Hp(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function jp(t,e,n,i){return Ae(t).onAuthStateChanged(e,n,i)}function Wp(t){return Ae(t).signOut()}const hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(){const t=J();return Ir(t)||Oi(t)}const Gp=1e3,zp=10;class mc extends _c{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Vp()&&wp(),this.fallbackToPolling=lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ep()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zp):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const qp=mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends _c{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yc.type="SESSION";const vc=yc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Di(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Kp(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=wr("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function Xp(t){Te().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function Jp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zp(){return Ic()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="firebaseLocalStorageDb",eg=1,ui="firebaseLocalStorage",wc="fbase_key";class kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pi(t,e){return t.transaction([ui],e?"readwrite":"readonly").objectStore(ui)}function tg(){const t=indexedDB.deleteDatabase(Ec);return new kn(t).toPromise()}function Us(){const t=indexedDB.open(Ec,eg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ui,{keyPath:wc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ui)?e(i):(i.close(),await tg(),e(await Us()))})})}async function Wo(t,e,n){const i=Pi(t,!0).put({[wc]:e,value:n});return new kn(i).toPromise()}async function ng(t,e){const n=Pi(t,!1).get(e),i=await new kn(n).toPromise();return i===void 0?null:i.value}function Vo(t,e){const n=Pi(t,!0).delete(e);return new kn(n).toPromise()}const ig=800,sg=3;class Tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Us(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>sg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Zp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jp(),!this.activeServiceWorker)return;this.sender=new Yp(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Us();return await Wo(e,hi,"1"),await Vo(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wo(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>ng(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Pi(s,!1).getAll();return new kn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tc.type="LOCAL";const rg=Tc;new Sn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e){return e?Oe(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return St(e,this._buildIdpRequest())}_linkToIdToken(e,n){return St(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return St(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function og(t){return Bp(t.auth,new Tr(t),t.bypassAuthState)}function ag(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Up(n,new Tr(t),t.bypassAuthState)}async function lg(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Fp(n,new Tr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return og;case"linkViaPopup":case"linkViaRedirect":return lg;case"reauthViaPopup":case"reauthViaRedirect":return ag;default:Ce(this.auth,"internal-error")}}resolve(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Sn(2e3,1e4);async function mw(t,e,n){const i=An(t);np(t,e,Er);const s=Cc(i,n);return new nt(i,"signInViaPopup",e,s).executeNotNull()}class nt extends Sc{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Le(this.filter.length===1,"Popup operations only handle one event");const e=wr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cg.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="pendingRedirect",Zn=new Map;class ug extends Sc{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const i=await dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dg(t,e){const n=gg(e),i=pg(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function fg(t,e){Zn.set(t._key(),e)}function pg(t){return Oe(t._redirectPersistence)}function gg(t){return Qn(hg,t.config.apiKey,t.name)}async function _g(t,e,n=!1){const i=An(t),s=Cc(i,e),o=await new ug(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=10*60*1e3;class yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Rc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(we(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Go(e))}saveEventToCache(e){this.cachedEventUids.add(Go(e)),this.lastProcessedEventTime=Date.now()}}function Go(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wg=/^https?/;async function Tg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ig(t);for(const n of e)try{if(Cg(n))return}catch{}Ce(t,"unauthorized-domain")}function Cg(t){const e=Fs(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!wg.test(n))return!1;if(Eg.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Sn(3e4,6e4);function zo(){const t=Te().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rg(t){return new Promise((e,n)=>{var i,s,r;function o(){zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zo(),n(we(t,"network-request-failed"))},timeout:Sg.get()})}if(!((s=(i=Te().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Te().gapi)===null||r===void 0)&&r.load)o();else{const a=Cp("iframefcb");return Te()[a]=()=>{gapi.load?o():n(we(t,"network-request-failed"))},dc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ei=null,e})}let ei=null;function Ag(t){return ei=ei||Rg(t),ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Sn(5e3,15e3),kg="__/auth/iframe",Ng="emulator/auth/iframe",Og={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pg(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yr(e,Ng):`https://${t.config.authDomain}/${kg}`,i={apiKey:e.apiKey,appName:t.name,v:Ye},s=Dg.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ft(i).slice(1)}`}async function Mg(t){const e=await Ag(t),n=Te().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Pg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Og,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=we(t,"network-request-failed"),a=Te().setTimeout(()=>{r(o)},bg.get());function l(){Te().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xg=500,Fg=600,Ug="_blank",Bg="http://localhost";class qo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $g(t,e,n,i=xg,s=Fg){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Lg),{width:i.toString(),height:s.toString(),top:r,left:o}),c=J().toLowerCase();n&&(a=ic(c)?Ug:n),nc(c)&&(e=e||Bg,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Ip(c)&&a!=="_self")return Hg(e||"",a),new qo(null);const u=window.open(e||"",a,h);y(u,t,"popup-blocked");try{u.focus()}catch{}return new qo(u)}function Hg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="__/auth/handler",Wg="emulator/auth/handler",Vg=encodeURIComponent("fac");async function Ko(t,e,n,i,s,r){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ye,eventId:s};if(e instanceof Er){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Os(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))o[h]=u}if(e instanceof bn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${Vg}=${encodeURIComponent(l)}`:"";return`${Gg(t)}?${Ft(a).slice(1)}${c}`}function Gg({config:t}){return t.emulator?yr(t,Wg):`https://${t.authDomain}/${jg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="webStorageSupport";class zg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vc,this._completeRedirectFn=_g,this._overrideRedirectResult=fg}async _openPopup(e,n,i,s){var r;Le((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ko(e,n,i,Fs(),s);return $g(e,o,wr())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ko(e,n,i,Fs(),s);return Xp(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Le(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Mg(e),i=new yg(e);return n.register("authEvent",s=>(y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(us,{type:us},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[us];o!==void 0&&n(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lc()||Ir()||Oi()}}const qg=zg;var Yo="@firebase/auth",Xo="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xg(t){ce(new re("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cc(t)},c=new Np(i,s,r,l);return Dp(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ce(new re("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(i=>new Kg(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Z(Yo,Xo,Yg(t)),Z(Yo,Xo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=5*60,Qg=xl("authIdTokenMaxAge")||Jg;let Jo=null;const Zg=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Qg)return;const s=n==null?void 0:n.token;Jo!==s&&(Jo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yw(t=Vl()){const e=Cn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Op(t,{popupRedirectResolver:qg,persistence:[rg,qp,vc]}),i=xl("authTokenSyncURL");if(i){const r=Zg(i);Hp(n,r,()=>r(n.currentUser)),$p(n,o=>r(o))}const s=Ml("auth");return s&&Pp(n,`http://${s}`),n}Xg("Browser");function Ac(t,e=null){let n;if(!globalThis.window){const{subscribe:s}=ss(e);return{subscribe:s}}if(!t){console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:s}=ss(null);return{subscribe:s}}const{subscribe:i}=ss((t==null?void 0:t.currentUser)??null,s=>(n=jp(t,r=>{s(r)}),()=>n()));return{subscribe:i}}var e_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Cr=Cr||{},m=e_||self;function Mi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Li(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function t_(t,e,n){return t.call.apply(t.bind,arguments)}function n_(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Y(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=t_:Y=n_,Y.apply(null,arguments)}function Vn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function U(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Xe(){this.s=this.s,this.o=this.o}var i_=0;Xe.prototype.s=!1;Xe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),i_!=0)};Xe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Qo(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Mi(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var s_=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{m.addEventListener("test",()=>{},e),m.removeEventListener("test",()=>{},e)}catch{}return t}();function dn(t){return/^[\s\xa0]*$/.test(t)}function xi(){var t=m.navigator;return t&&(t=t.userAgent)?t:""}function me(t){return xi().indexOf(t)!=-1}function Rr(t){return Rr[" "](t),t}Rr[" "]=function(){};function r_(t,e){var n=Z_;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var o_=me("Opera"),fn=me("Trident")||me("MSIE"),kc=me("Edge"),Bs=kc||fn,Nc=me("Gecko")&&!(xi().toLowerCase().indexOf("webkit")!=-1&&!me("Edge"))&&!(me("Trident")||me("MSIE"))&&!me("Edge"),a_=xi().toLowerCase().indexOf("webkit")!=-1&&!me("Edge");function Oc(){var t=m.document;return t?t.documentMode:void 0}e:{var Zo="",ds=function(){var t=xi();if(Nc)return/rv:([^\);]+)(\)|;)/.exec(t);if(kc)return/Edge\/([\d\.]+)/.exec(t);if(fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(a_)return/WebKit\/(\S+)/.exec(t);if(o_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ds&&(Zo=ds?ds[1]:""),fn){var ea=Oc();if(ea!=null&&ea>parseFloat(Zo))break e}}m.document&&fn&&Oc();function pn(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nc){e:{try{Rr(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:l_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pn.$.h.call(this)}}U(pn,X);var l_={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fi="closure_listenable_"+(1e6*Math.random()|0),c_=0;function h_(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++c_,this.fa=this.ia=!1}function Ui(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ar(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function u_(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Dc(t){const e={};for(const n in t)e[n]=t[n];return e}const ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<ta.length;r++)n=ta[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Bi(t){this.src=t,this.g={},this.h=0}Bi.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Hs(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new h_(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function $s(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=bc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ui(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hs(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var br="closure_lm_"+(1e6*Math.random()|0),fs={};function Mc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Mc(t,e[r],n,i,s);return null}return n=Fc(n),t&&t[Fi]?t.O(e,n,Li(i)?!!i.capture:!1,s):d_(t,e,n,!1,i,s)}function d_(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Li(s)?!!s.capture:!!s,a=Nr(t);if(a||(t[br]=a=new Bi(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=f_(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)s_||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(xc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function f_(){function t(n){return e.call(t.src,t.listener,n)}const e=p_;return t}function Lc(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Lc(t,e[r],n,i,s);else i=Li(i)?!!i.capture:!!i,n=Fc(n),t&&t[Fi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Hs(r,n,i,s),-1<n&&(Ui(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hs(e,n,i,s)),(n=-1<t?e[t]:null)&&kr(n))}function kr(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fi])$s(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(xc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Nr(e))?($s(n,t),n.h==0&&(n.src=null,e[br]=null)):Ui(t)}}}function xc(t){return t in fs?fs[t]:fs[t]="on"+t}function p_(t,e){if(t.fa)t=!0;else{e=new pn(e,this);var n=t.listener,i=t.la||t.src;t.ia&&kr(t),t=n.call(i,e)}return t}function Nr(t){return t=t[br],t instanceof Bi?t:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fc(t){return typeof t=="function"?t:(t[ps]||(t[ps]=function(e){return t.handleEvent(e)}),t[ps])}function F(){Xe.call(this),this.i=new Bi(this),this.S=this,this.J=null}U(F,Xe);F.prototype[Fi]=!0;F.prototype.removeEventListener=function(t,e,n,i){Lc(this,t,e,n,i)};function H(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var s=e;e=new X(i,t),Pc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Gn(o,i,!0,e)&&s}if(o=e.g=t,s=Gn(o,i,!0,e)&&s,s=Gn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Gn(o,i,!1,e)&&s}F.prototype.N=function(){if(F.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ui(n[i]);delete t.g[e],t.h--}}this.J=null};F.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};F.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Gn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&$s(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Or=m.JSON.stringify;class g_{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function __(){var t=Dr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class m_{constructor(){this.h=this.g=null}add(e,n){const i=Uc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Uc=new g_(()=>new y_,t=>t.reset());class y_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function v_(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function I_(t){m.setTimeout(()=>{throw t},0)}let gn,_n=!1,Dr=new m_,Bc=()=>{const t=m.Promise.resolve(void 0);gn=()=>{t.then(E_)}};var E_=()=>{for(var t;t=__();){try{t.h.call(t.g)}catch(n){I_(n)}var e=Uc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_n=!1};function $i(t,e){F.call(this),this.h=t||1,this.g=e||m,this.j=Y(this.qb,this),this.l=Date.now()}U($i,F);p=$i.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),H(this,"tick"),this.ga&&(Pr(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pr(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}p.N=function(){$i.$.N.call(this),Pr(this),delete this.g};function Mr(t,e,n){if(typeof t=="function")n&&(t=Y(t,n));else if(t&&typeof t.handleEvent=="function")t=Y(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:m.setTimeout(t,e||0)}function $c(t){t.g=Mr(()=>{t.g=null,t.i&&(t.i=!1,$c(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class w_ extends Xe{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$c(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(t){Xe.call(this),this.h=t,this.g={}}U(mn,Xe);var na=[];function Hc(t,e,n,i){Array.isArray(n)||(n&&(na[0]=n.toString()),n=na);for(var s=0;s<n.length;s++){var r=Mc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function jc(t){Ar(t.g,function(e,n){this.g.hasOwnProperty(n)&&kr(e)},t),t.g={}}mn.prototype.N=function(){mn.$.N.call(this),jc(this)};mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hi(){this.g=!0}Hi.prototype.Ea=function(){this.g=!1};function T_(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function C_(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Et(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+R_(t,n)+(i?" "+i:"")})}function S_(t,e){t.info(function(){return"TIMEOUT: "+e})}Hi.prototype.info=function(){};function R_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Or(n)}catch{return e}}var Ut={},ia=null;function Lr(){return ia=ia||new F}Ut.Ta="serverreachability";function Wc(t){X.call(this,Ut.Ta,t)}U(Wc,X);function yn(t){const e=Lr();H(e,new Wc(e))}Ut.STAT_EVENT="statevent";function Vc(t,e){X.call(this,Ut.STAT_EVENT,t),this.stat=e}U(Vc,X);function Q(t){const e=Lr();H(e,new Vc(e,t))}Ut.Ua="timingevent";function Gc(t,e){X.call(this,Ut.Ua,t),this.size=e}U(Gc,X);function Nn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},e)}var xr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},A_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fr(){}Fr.prototype.h=null;function sa(t){return t.h||(t.h=t.i())}function b_(){}var On={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ur(){X.call(this,"d")}U(Ur,X);function Br(){X.call(this,"c")}U(Br,X);var js;function ji(){}U(ji,Fr);ji.prototype.g=function(){return new XMLHttpRequest};ji.prototype.i=function(){return{}};js=new ji;function Dn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new mn(this),this.P=k_,t=Bs?125:void 0,this.V=new $i(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new zc}function zc(){this.i=null,this.g="",this.h=!1}var k_=45e3,Ws={},di={};p=Dn.prototype;p.setTimeout=function(t){this.P=t};function Vs(t,e,n){t.L=1,t.v=Vi(xe(e)),t.s=n,t.S=!0,qc(t,null)}function qc(t,e){t.G=Date.now(),Pn(t),t.A=xe(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),th(n.i,"t",i),t.C=0,n=t.l.J,t.h=new zc,t.g=wh(t.l,n?e:null,!t.s),0<t.O&&(t.M=new w_(Y(t.Pa,t,t.g),t.O)),Hc(t.U,t.g,"readystatechange",t.nb),e=t.I?Dc(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yn(),T_(t.j,t.u,t.A,t.m,t.W,t.s)}p.nb=function(t){t=t.target;const e=this.M;e&&ye(t)==3?e.l():this.Pa(t)};p.Pa=function(t){try{if(t==this.g)e:{const h=ye(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>h)&&(h!=3||Bs||this.g&&(this.h.h||this.g.ja()||la(this.g)))){this.J||h!=4||e==7||(e==8||0>=u?yn(3):yn(2)),Wi(this);var n=this.g.da();this.ca=n;t:if(Kc(this)){var i=la(this.g);t="";var s=i.length,r=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){it(this),tn(this);var o="";break t}this.h.i=new m.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,C_(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dn(a)){var c=a;break t}}c=null}if(n=c)Et(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gs(this,n);else{this.i=!1,this.o=3,Q(12),it(this),tn(this);break e}}this.S?(Yc(this,h,o),Bs&&this.i&&h==3&&(Hc(this.U,this.V,"tick",this.mb),this.V.start())):(Et(this.j,this.m,o,null),Gs(this,o)),h==4&&it(this),this.i&&!this.J&&(h==4?yh(this.l,this):(this.i=!1,Pn(this)))}else X_(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),it(this),tn(this)}}}catch{}finally{}};function Kc(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Yc(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=N_(t,n),s==di){e==4&&(t.o=4,Q(14),i=!1),Et(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ws){t.o=4,Q(15),Et(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Et(t.j,t.m,s,null),Gs(t,s);Kc(t)&&s!=di&&s!=Ws&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Q(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gr(e),e.M=!0,Q(11))):(Et(t.j,t.m,n,"[Invalid Chunked Response]"),it(t),tn(t))}p.mb=function(){if(this.g){var t=ye(this.g),e=this.g.ja();this.C<e.length&&(Wi(this),Yc(this,t,e),this.i&&t!=4&&Pn(this))}};function N_(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?di:(n=Number(e.substring(n,i)),isNaN(n)?Ws:(i+=1,i+n>e.length?di:(e=e.slice(i,i+n),t.C=i+n,e)))}p.cancel=function(){this.J=!0,it(this)};function Pn(t){t.Y=Date.now()+t.P,Xc(t,t.P)}function Xc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nn(Y(t.lb,t),e)}function Wi(t){t.B&&(m.clearTimeout(t.B),t.B=null)}p.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(S_(this.j,this.A),this.L!=2&&(yn(),Q(17)),it(this),this.o=2,tn(this)):Xc(this,this.Y-t)};function tn(t){t.l.H==0||t.J||yh(t.l,t)}function it(t){Wi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Pr(t.V),jc(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gs(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zs(n.i,t))){if(!t.K&&zs(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)gi(n),Ki(n);else break e;Vr(n),Q(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Nn(Y(n.ib,n),6e3));if(1>=sh(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else st(n,11)}else if((t.K||n.g==t)&&gi(n),!dn(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const u=c[4];u!=null&&(n.Ga=u,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&($r(r,r.h),r.h=null))}if(i.F){const A=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.Da=A,O(i.I,i.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Eh(i,i.J?i.pa:null,i.Y),o.K){rh(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Wi(a),Pn(a)),i.g=o}else _h(i);0<n.j.length&&Yi(n)}else c[0]!="stop"&&c[0]!="close"||st(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?st(n,7):Wr(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}yn(4)}catch{}}function O_(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function D_(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Jc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=D_(t),i=O_(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function lt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof lt){this.h=t.h,fi(this,t.j),this.s=t.s,this.g=t.g,pi(this,t.m),this.l=t.l;var e=t.i,n=new vn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ra(this,n),this.o=t.o}else t&&(e=String(t).match(Qc))?(this.h=!1,fi(this,e[1]||"",!0),this.s=Qt(e[2]||""),this.g=Qt(e[3]||"",!0),pi(this,e[4]),this.l=Qt(e[5]||"",!0),ra(this,e[6]||"",!0),this.o=Qt(e[7]||"")):(this.h=!1,this.i=new vn(null,this.h))}lt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zt(e,oa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zt(e,oa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zt(n,n.charAt(0)=="/"?x_:L_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zt(n,U_)),t.join("")};function xe(t){return new lt(t)}function fi(t,e,n){t.j=n?Qt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function pi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ra(t,e,n){e instanceof vn?(t.i=e,B_(t.i,t.h)):(n||(e=Zt(e,F_)),t.i=new vn(e,t.h))}function O(t,e,n){t.i.set(e,n)}function Vi(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,M_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function M_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var oa=/[#\/\?@]/g,L_=/[#\?:]/g,x_=/[#\?]/g,F_=/[#\?@]/g,U_=/#/g;function vn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Je(t){t.g||(t.g=new Map,t.h=0,t.i&&P_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}p=vn.prototype;p.add=function(t,e){Je(this),this.i=null,t=Bt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zc(t,e){Je(t),e=Bt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eh(t,e){return Je(t),e=Bt(t,e),t.g.has(e)}p.forEach=function(t,e){Je(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};p.ta=function(){Je(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};p.Z=function(t){Je(this);let e=[];if(typeof t=="string")eh(this,t)&&(e=e.concat(this.g.get(Bt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};p.set=function(t,e){return Je(this),this.i=null,t=Bt(this,t),eh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};p.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function th(t,e,n){Zc(t,e),0<n.length&&(t.i=null,t.g.set(Bt(t,e),Sr(n)),t.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Bt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function B_(t,e){e&&!t.j&&(Je(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Zc(this,i),th(this,s,n))},t)),t.j=e}var $_=class{constructor(t,e){this.g=t,this.map=e}};function nh(t){this.l=t||H_,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.g&&m.g.Ka&&m.g.Ka()&&m.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var H_=10;function ih(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sh(t){return t.h?1:t.g?t.g.size:0}function zs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $r(t,e){t.g?t.g.add(e):t.h=e}function rh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nh.prototype.cancel=function(){if(this.i=oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oh(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Sr(t.i)}var j_=class{stringify(t){return m.JSON.stringify(t,void 0)}parse(t){return m.JSON.parse(t,void 0)}};function W_(){this.g=new j_}function V_(t,e,n){const i=n||"";try{Jc(t,function(s,r){let o=s;Li(s)&&(o=Or(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function G_(t,e){const n=new Hi;if(m.Image){const i=new Image;i.onload=Vn(zn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Vn(zn,n,i,"TestLoadImage: error",!1,e),i.onabort=Vn(zn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Vn(zn,n,i,"TestLoadImage: timeout",!1,e),m.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function zn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Gi(t){this.l=t.fc||null,this.j=t.ob||!1}U(Gi,Fr);Gi.prototype.g=function(){return new zi(this.l,this.j)};Gi.prototype.i=function(t){return function(){return t}}({});function zi(t,e){F.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}U(zi,F);var Hr=0;p=zi.prototype;p.open=function(t,e){if(this.readyState!=Hr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,In(this)};p.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||m).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=Hr};p.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ah(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ah(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}p.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):In(this),this.readyState==3&&ah(this)}};p.Za=function(t){this.g&&(this.response=this.responseText=t,Mn(this))};p.Ya=function(t){this.g&&(this.response=t,Mn(this))};p.ka=function(){this.g&&Mn(this)};function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,In(t)}p.setRequestHeader=function(t,e){this.v.append(t,e)};p.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function In(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var z_=m.JSON.parse;function P(t){F.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lh,this.L=this.M=!1}U(P,F);var lh="",q_=/^https?$/i,K_=["POST","PUT"];p=P.prototype;p.Oa=function(t){this.M=t};p.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():js.g(),this.C=this.u?sa(this.u):sa(js),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){aa(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=m.FormData&&t instanceof m.FormData,!(0<=bc(K_,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uh(this),0<this.B&&((this.L=Y_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=Mr(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){aa(this,r)}};function Y_(t){return fn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}p.ua=function(){typeof Cr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function aa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ch(t),qi(t)}function ch(t){t.F||(t.F=!0,H(t,"complete"),H(t,"error"))}p.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),qi(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qi(this,!0)),P.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?hh(this):this.kb())};p.kb=function(){hh(this)};function hh(t){if(t.h&&typeof Cr<"u"&&(!t.C[1]||ye(t)!=4||t.da()!=2)){if(t.v&&ye(t)==4)Mr(t.La,0,t);else if(H(t,"readystatechange"),ye(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(Qc)[1]||null;!s&&m.self&&m.self.location&&(s=m.self.location.protocol.slice(0,-1)),i=!q_.test(s?s.toLowerCase():"")}n=i}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var r=2<ye(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",ch(t)}}finally{qi(t)}}}}function qi(t,e){if(t.g){uh(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=i}catch{}}}function uh(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(m.clearTimeout(t.A),t.A=null)}p.isActive=function(){return!!this.g};function ye(t){return t.g?t.g.readyState:0}p.da=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),z_(e)}};function la(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case lh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function X_(t){const e={};t=(t.g&&2<=ye(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(dn(t[i]))continue;var n=v_(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}u_(e,function(i){return i.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dh(t){let e="";return Ar(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function jr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=dh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):O(t,e,n))}function Gt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fh(t){this.Ga=0,this.j=[],this.l=new Hi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Gt("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Gt("baseRetryDelayMs",5e3,t),this.hb=Gt("retryDelaySeedMs",1e4,t),this.eb=Gt("forwardChannelMaxRetries",2,t),this.xa=Gt("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nh(t&&t.concurrentRequestLimit),this.Ja=new W_,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=fh.prototype;p.ra=8;p.H=1;function Wr(t){if(ph(t),t.H==3){var e=t.W++,n=xe(t.I);if(O(n,"SID",t.K),O(n,"RID",e),O(n,"TYPE","terminate"),Ln(t,n),e=new Dn(t,t.l,e),e.L=2,e.v=Vi(xe(n)),n=!1,m.navigator&&m.navigator.sendBeacon)try{n=m.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&m.Image&&(new Image().src=e.v,n=!0),n||(e.g=wh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Pn(e)}Ih(t)}function Ki(t){t.g&&(Gr(t),t.g.cancel(),t.g=null)}function ph(t){Ki(t),t.u&&(m.clearTimeout(t.u),t.u=null),gi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&m.clearTimeout(t.m),t.m=null)}function Yi(t){if(!ih(t.i)&&!t.m){t.m=!0;var e=t.Na;gn||Bc(),_n||(gn(),_n=!0),Dr.add(e,t),t.C=0}}function J_(t,e){return sh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Nn(Y(t.Na,t,e),vh(t,t.C)),t.C++,!0)}p.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Dn(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Dc(r),Pc(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gh(this,s,e),n=xe(this.I),O(n,"RID",t),O(n,"CVER",22),this.F&&O(n,"X-HTTP-Session-Id",this.F),Ln(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(dh(r)))+"&"+e:this.o&&jr(n,this.o,r)),$r(this.i,s),this.bb&&O(n,"TYPE","init"),this.P?(O(n,"$req",e),O(n,"SID","null"),s.aa=!0,Vs(s,n,null)):Vs(s,n,e),this.H=2}}else this.H==3&&(t?ca(this,t):this.j.length==0||ih(this.i)||ca(this))};function ca(t,e){var n;e?n=e.m:n=t.W++;const i=xe(t.I);O(i,"SID",t.K),O(i,"RID",n),O(i,"AID",t.V),Ln(t,i),t.o&&t.s&&jr(i,t.o,t.s),n=new Dn(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=gh(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$r(t.i,n),Vs(n,i,e)}function Ln(t,e){t.na&&Ar(t.na,function(n,i){O(e,i,n)}),t.h&&Jc({},function(n,i){O(e,i,n)})}function gh(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Y(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const h=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{V_(h,o,"req"+c+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function _h(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;gn||Bc(),_n||(gn(),_n=!0),Dr.add(e,t),t.A=0}}function Vr(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Nn(Y(t.Ma,t),vh(t,t.A)),t.A++,!0)}p.Ma=function(){if(this.u=null,mh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Nn(Y(this.jb,this),t)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Q(10),Ki(this),mh(this))};function Gr(t){t.B!=null&&(m.clearTimeout(t.B),t.B=null)}function mh(t){t.g=new Dn(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xe(t.wa);O(e,"RID","rpc"),O(e,"SID",t.K),O(e,"AID",t.V),O(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&O(e,"TO",t.qa),O(e,"TYPE","xmlhttp"),Ln(t,e),t.o&&t.s&&jr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Vi(xe(e)),n.s=null,n.S=!0,qc(n,t)}p.ib=function(){this.v!=null&&(this.v=null,Ki(this),Vr(this),Q(19))};function gi(t){t.v!=null&&(m.clearTimeout(t.v),t.v=null)}function yh(t,e){var n=null;if(t.g==e){gi(t),Gr(t),t.g=null;var i=2}else if(zs(t.i,e))n=e.F,rh(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Lr(),H(i,new Gc(i,n)),Yi(t)}else _h(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&J_(t,e)||i==2&&Vr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:st(t,5);break;case 4:st(t,10);break;case 3:st(t,6);break;default:st(t,2)}}}function vh(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function st(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Y(t.pb,t);n||(n=new lt("//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||fi(n,"https"),Vi(n)),G_(n.toString(),i)}else Q(2);t.H=0,t.h&&t.h.za(e),Ih(t),ph(t)}p.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Q(2)):(this.l.info("Failed to ping google.com"),Q(1))};function Ih(t){if(t.H=0,t.ma=[],t.h){const e=oh(t.i);(e.length!=0||t.j.length!=0)&&(Qo(t.ma,e),Qo(t.ma,t.j),t.i.i.length=0,Sr(t.j),t.j.length=0),t.h.ya()}}function Eh(t,e,n){var i=n instanceof lt?xe(n):new lt(n);if(i.g!="")e&&(i.g=e+"."+i.g),pi(i,i.m);else{var s=m.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new lt(null);i&&fi(r,i),e&&(r.g=e),s&&pi(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&O(i,n,e),O(i,"VER",t.ra),Ln(t,i),i}function wh(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new P(new Gi({ob:!0})):new P(t.va),e.Oa(t.J),e}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Th(){}p=Th.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function he(t,e){F.call(this),this.g=new fh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!dn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!dn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $t(this)}U(he,F);he.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Q(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Eh(t,null,t.Y),Yi(t)};he.prototype.close=function(){Wr(this.g)};he.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Or(t),t=n);e.j.push(new $_(e.fb++,t)),e.H==3&&Yi(e)};he.prototype.N=function(){this.g.h=null,delete this.j,Wr(this.g),delete this.g,he.$.N.call(this)};function Ch(t){Ur.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}U(Ch,Ur);function Sh(){Br.call(this),this.status=1}U(Sh,Br);function $t(t){this.g=t}U($t,Th);$t.prototype.Ba=function(){H(this.g,"a")};$t.prototype.Aa=function(t){H(this.g,new Ch(t))};$t.prototype.za=function(t){H(this.g,new Sh)};$t.prototype.ya=function(){H(this.g,"b")};function Q_(){this.blockSize=-1}function Se(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}U(Se,Q_);Se.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function gs(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Se.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)gs(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){gs(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){gs(this,i),s=0;break}}this.h=s,this.i+=e};Se.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function R(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Z_={};function zr(t){return-128<=t&&128>t?r_(t,function(e){return new R([e|0],0>e?-1:0)}):new R([t|0],0>t?-1:0)}function ve(t){if(isNaN(t)||!isFinite(t))return Rt;if(0>t)return B(ve(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=qs;return new R(e,0)}function Rh(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return B(Rh(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ve(Math.pow(e,8)),i=Rt,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=ve(Math.pow(e,r)),i=i.R(r).add(ve(o))):(i=i.R(n),i=i.add(ve(o)))}return i}var qs=4294967296,Rt=zr(0),Ks=zr(1),ha=zr(16777216);p=R.prototype;p.ea=function(){if(oe(this))return-B(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:qs+i)*e,e*=qs}return t};p.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(De(this))return"0";if(oe(this))return"-"+B(this).toString(t);for(var e=ve(Math.pow(t,6)),n=this,i="";;){var s=mi(n,e).g;n=_i(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,De(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};p.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function De(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function oe(t){return t.h==-1}p.X=function(t){return t=_i(this,t),oe(t)?-1:De(t)?0:1};function B(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new R(n,~t.h).add(Ks)}p.abs=function(){return oe(this)?B(this):this};p.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new R(n,n[n.length-1]&-2147483648?-1:0)};function _i(t,e){return t.add(B(e))}p.R=function(t){if(De(this)||De(t))return Rt;if(oe(this))return oe(t)?B(this).R(B(t)):B(B(this).R(t));if(oe(t))return B(this.R(B(t)));if(0>this.X(ha)&&0>t.X(ha))return ve(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,qn(n,2*i+2*s),n[2*i+2*s+1]+=r*l,qn(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,qn(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,qn(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new R(n,0)};function qn(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function zt(t,e){this.g=t,this.h=e}function mi(t,e){if(De(e))throw Error("division by zero");if(De(t))return new zt(Rt,Rt);if(oe(t))return e=mi(B(t),e),new zt(B(e.g),B(e.h));if(oe(e))return e=mi(t,B(e)),new zt(B(e.g),e.h);if(30<t.g.length){if(oe(t)||oe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ks,i=e;0>=i.X(t);)n=ua(n),i=ua(i);var s=It(n,1),r=It(i,1);for(i=It(i,2),n=It(n,2);!De(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=It(i,1),n=It(n,1)}return e=_i(t,s.R(e)),new zt(s,e)}for(s=Rt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=ve(n),o=r.R(e);oe(o)||0<o.X(t);)n-=i,r=ve(n),o=r.R(e);De(r)&&(r=Ks),s=s.add(r),t=_i(t,o)}return new zt(s,t)}p.gb=function(t){return mi(this,t).h};p.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new R(n,this.h&t.h)};p.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new R(n,this.h|t.h)};p.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new R(n,this.h^t.h)};function ua(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new R(n,t.h)}function It(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new R(s,t.h)}he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;xr.NO_ERROR=0;xr.TIMEOUT=8;xr.HTTP_ERROR=6;A_.COMPLETE="complete";b_.EventType=On;On.OPEN="a";On.CLOSE="b";On.ERROR="c";On.MESSAGE="d";F.prototype.listen=F.prototype.O;P.prototype.listenOnce=P.prototype.P;P.prototype.getLastError=P.prototype.Sa;P.prototype.getLastErrorCode=P.prototype.Ia;P.prototype.getStatus=P.prototype.da;P.prototype.getResponseJson=P.prototype.Wa;P.prototype.getResponseText=P.prototype.ja;P.prototype.send=P.prototype.ha;P.prototype.setWithCredentials=P.prototype.Oa;Se.prototype.digest=Se.prototype.l;Se.prototype.reset=Se.prototype.reset;Se.prototype.update=Se.prototype.j;R.prototype.add=R.prototype.add;R.prototype.multiply=R.prototype.R;R.prototype.modulo=R.prototype.gb;R.prototype.compare=R.prototype.X;R.prototype.toNumber=R.prototype.ea;R.prototype.toString=R.prototype.toString;R.prototype.getBits=R.prototype.D;R.fromNumber=ve;R.fromString=Rh;var em=R;const da="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Tn("@firebase/firestore");function ie(t,...e){if(Pt.logLevel<=T.DEBUG){const n=e.map(Kr);Pt.debug(`Firestore (${xn}): ${t}`,...n)}}function qr(t,...e){if(Pt.logLevel<=T.ERROR){const n=e.map(Kr);Pt.error(`Firestore (${xn}): ${t}`,...n)}}function tm(t,...e){if(Pt.logLevel<=T.WARN){const n=e.map(Kr);Pt.warn(`Firestore (${xn}): ${t}`,...n)}}function Kr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t="Unexpected state"){const e=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+t;throw qr(e),new Error(e)}function Ys(t,e){t||Yr()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends de{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class im{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sm{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new At;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new At,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new At)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ys(typeof i.accessToken=="string"),new Ah(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ys(e===null||typeof e=="string"),new W(e)}}class rm{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class om{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new rm(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class am{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lm{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ys(typeof n.token=="string"),this.T=n.token,new am(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=cm(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function bh(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fa,I;(I=fa||(fa={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new em([4294967295,4294967295],0);function _s(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Xr(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fm(t,e){if(qr("AsyncQueue",`${e}: ${t}`),bh(t))return new q(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=W.UNAUTHENTICATED,this.clientId=hm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{ie("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(ie("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=fm(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;function gm(t,e,n,i){if(e===!0&&i===!0)throw new q(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _m(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Yr()}function mm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_m(t);throw new q(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new q(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kh((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class Nh{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nm;switch(n.type){case"firstParty":return new om(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pa.get(e);n&&(ie("ComponentProvider","Removing Datastore"),pa.delete(e),n.terminate())}(this),Promise.resolve()}}function ym(t,e,n,i={}){var s;const r=(t=mm(t,Nh))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&tm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=W.MOCK_USER;else{a=bd(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new q(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new W(c)}t._authCredentials=new im(new Ah(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new dm(this,"async_queue_retry"),this.Xc=()=>{const n=_s();n&&ie("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=_s();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=_s();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new At;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!bh(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw qr("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Xr.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Yr()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Im extends Nh{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new vm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Em(this),this._firestoreClient.terminate()}}function vw(t,e){const n=typeof t=="object"?t:Vl(),i=typeof t=="string"?t:"(default)",s=Cn(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ad("firestore");r&&ym(s,...r)}return s}function Em(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new um(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,kh(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new pm(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){xn=n})(Ye),ce(new re("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Im(new sm(n.getProvider("auth-internal")),new lm(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Z(da,"3.13.0",t),Z(da,"3.13.0","esm2017")})();const Oh="firebase";function Iw(t){md(Oh,t)}function Dh(){return yd(Oh)}const wm=t=>({user:t&1}),_a=t=>({user:t[0],auth:t[1],signOut:t[5]});function ma(t){let e;const n=t[4].default,i=Il(n,t,t[3],_a);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&9)&&El(i,n,s,s[3],e?Tl(n,s[3],r,wm):wl(s[3]),_a)},i(s){e||(We(i,s),e=!0)},o(s){Nt(i,s),e=!1},d(s){i&&i.d(s)}}}function Tm(t){let e,n,i=t[0]&&ma(t);return{c(){i&&i.c(),e=ti()},l(s){i&&i.l(s),e=ti()},m(s,r){i&&i.m(s,r),Rl(s,e,r),n=!0},p(s,[r]){s[0]?i?(i.p(s,r),r&1&&We(i,1)):(i=ma(s),i.c(),We(i,1),i.m(e.parentNode,e)):i&&(Al(),Nt(i,1,1,()=>{i=null}),bl())},i(s){n||(We(i),n=!0)},o(s){Nt(i),n=!1},d(s){s&&kl(e),i&&i.d(s)}}}function Cm(t,e,n){let i,{$$slots:s={},$$scope:r}=e;const o=Dh().auth,a=Ac(o);vl(t,a,c=>n(0,i=c));const l=()=>Wp(o);return t.$$set=c=>{"$$scope"in c&&n(3,r=c.$$scope)},[i,o,a,r,s,l]}class Ew extends Cl{constructor(e){super(),Sl(this,e,Cm,Tm,yl,{})}}const Sm=t=>({}),ya=t=>({auth:t[1]});function va(t){let e;const n=t[4].default,i=Il(n,t,t[3],ya);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&8)&&El(i,n,s,s[3],e?Tl(n,s[3],r,Sm):wl(s[3]),ya)},i(s){e||(We(i,s),e=!0)},o(s){Nt(i,s),e=!1},d(s){i&&i.d(s)}}}function Rm(t){let e,n,i=!t[0]&&va(t);return{c(){i&&i.c(),e=ti()},l(s){i&&i.l(s),e=ti()},m(s,r){i&&i.m(s,r),Rl(s,e,r),n=!0},p(s,[r]){s[0]?i&&(Al(),Nt(i,1,1,()=>{i=null}),bl()):i?(i.p(s,r),r&1&&We(i,1)):(i=va(s),i.c(),We(i,1),i.m(e.parentNode,e))},i(s){n||(We(i),n=!0)},o(s){Nt(i),n=!1},d(s){s&&kl(e),i&&i.d(s)}}}function Am(t,e,n){let i,{$$slots:s={},$$scope:r}=e;const o=Dh().auth,a=Ac(o);return vl(t,a,l=>n(0,i=l)),t.$$set=l=>{"$$scope"in l&&n(3,r=l.$$scope)},[i,o,a,r,s]}class ww extends Cl{constructor(e){super(),Sl(this,e,Am,Rm,yl,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="firebasestorage.googleapis.com",bm="storageBucket",km=2*60*1e3,Nm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends de{constructor(e,n,i=0){super(ms(e),`Firebase Storage: ${n} (${ms(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ms(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function ms(t){return"storage/"+t}function Om(){const t="An unknown error occurred, please check the error payload for server response.";return new be(Re.UNKNOWN,t)}function Dm(){return new be(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pm(){return new be(Re.CANCELED,"User canceled the upload/download.")}function Mm(t){return new be(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function Lm(t){return new be(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ia(t){return new be(Re.INVALID_ARGUMENT,t)}function Mh(){return new be(Re.APP_DELETED,"The Firebase app was deleted.")}function xm(t){return new be(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=pe.makeFromUrl(e,n)}catch{return new pe(e,"")}if(i.path==="")return i;throw Lm(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(j){j.path_=decodeURIComponent(j.path)}const h="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${h}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},A=n===Ph?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",fe=new RegExp(`^https?://${A}/${s}/${S}`,"i"),ee=[{regex:a,indices:l,postModify:r},{regex:g,indices:_,postModify:c},{regex:fe,indices:{bucket:1,path:2},postModify:c}];for(let j=0;j<ee.length;j++){const Qe=ee[j],Ze=Qe.regex.exec(e);if(Ze){const jn=Ze[Qe.indices.bucket];let Vt=Ze[Qe.indices.path];Vt||(Vt=""),i=new pe(jn,Vt),Qe.postModify(i);break}}if(i==null)throw Mm(e);return i}}class Fm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...S){c||(c=!0,e.apply(null,S))}function u(S){s=setTimeout(()=>{s=null,t(g,l())},S)}function d(){r&&clearTimeout(r)}function g(S,...fe){if(c){d();return}if(S){d(),h.call(null,S,...fe);return}if(l()||o){d(),h.call(null,S,...fe);return}i<64&&(i*=2);let ee;a===1?(a=2,ee=0):ee=(i+Math.random())*1e3,u(ee)}let _=!1;function A(S){_||(_=!0,d(),!c&&(s!==null?(S||(a=2),clearTimeout(s),u(0)):S||(a=1)))}return u(0),r=setTimeout(()=>{o=!0,A(!0)},n),A}function Bm(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){return t!==void 0}function Ea(t,e,n,i){if(i<e)throw Ia(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Ia(`Invalid value for '${t}'. Expected ${n} or less.`)}function Hm(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vi||(vi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,i,s,r,o,a,l,c,h,u,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Kn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===vi.NO_ERROR,l=r.getStatus();if(!a||jm(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===vi.ABORT;i(!1,new Kn(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Kn(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());$m(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Om();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Mh():Pm();o(l)}else{const l=Dm();o(l)}};this.canceled_?n(!1,new Kn(!1,null,!0)):this.backoffId_=Um(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Bm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kn{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Vm(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Gm(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zm(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qm(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Km(t,e,n,i,s,r,o=!0){const a=Hm(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return zm(c,e),Vm(c,n),Gm(c,r),qm(c,i),new Wm(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Xm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this._service=e,n instanceof pe?this._location=n:this._location=pe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ii(e,n)}get root(){const e=new pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xm(this._location.path)}get storage(){return this._service}get parent(){const e=Ym(this._location.path);if(e===null)return null;const n=new pe(this._location.bucket,e);return new Ii(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xm(e)}}function wa(t,e){const n=e==null?void 0:e[bm];return n==null?null:pe.makeFromBucketSpec(n,t)}class Jm{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Ph,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=km,this._maxUploadRetryTime=Nm,this._requests=new Set,s!=null?this._bucket=pe.makeFromBucketSpec(s,this._host):this._bucket=wa(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pe.makeFromBucketSpec(this._url,e):this._bucket=wa(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ea("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ea("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ii(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new Fm(Mh());{const o=Km(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Ta="@firebase/storage",Ca="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="storage";function Zm(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Jm(n,i,s,e,Ye)}function ey(){ce(new re(Qm,Zm,"PUBLIC").setMultipleInstances(!0)),Z(Ta,Ca,""),Z(Ta,Ca,"esm2017")}ey();const ty=(t,e)=>e.some(n=>t instanceof n);let Sa,Ra;function ny(){return Sa||(Sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iy(){return Ra||(Ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lh=new WeakMap,Xs=new WeakMap,xh=new WeakMap,ys=new WeakMap,Jr=new WeakMap;function sy(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ze(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lh.set(n,t)}).catch(()=>{}),Jr.set(e,t),e}function ry(t){if(Xs.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xs.set(t,e)}let Js={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ze(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oy(t){Js=t(Js)}function ay(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(vs(this),e,...n);return xh.set(i,e.sort?e.sort():[e]),ze(i)}:iy().includes(t)?function(...e){return t.apply(vs(this),e),ze(Lh.get(this))}:function(...e){return ze(t.apply(vs(this),e))}}function ly(t){return typeof t=="function"?ay(t):(t instanceof IDBTransaction&&ry(t),ty(t,ny())?new Proxy(t,Js):t)}function ze(t){if(t instanceof IDBRequest)return sy(t);if(ys.has(t))return ys.get(t);const e=ly(t);return e!==t&&(ys.set(t,e),Jr.set(e,t)),e}const vs=t=>Jr.get(t);function cy(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ze(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ze(o.result),l.oldVersion,l.newVersion,ze(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const hy=["get","getKey","getAll","getAllKeys","count"],uy=["put","add","delete","clear"],Is=new Map;function Aa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=uy.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||hy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Is.set(e,r),r}oy(t=>({...t,get:(e,n,i)=>Aa(e,n)||t.get(e,n,i),has:(e,n)=>!!Aa(e,n)||t.has(e,n)}));const Fh="@firebase/installations",Qr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=1e4,Bh=`w:${Qr}`,$h="FIS_v2",dy="https://firebaseinstallations.googleapis.com/v1",fy=60*60*1e3,py="installations",gy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ut=new mt(py,gy,_y);function Hh(t){return t instanceof de&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh({projectId:t}){return`${dy}/projects/${t}/installations`}function Wh(t){return{token:t.token,requestStatus:2,expiresIn:yy(t.expiresIn),creationTime:Date.now()}}async function Vh(t,e){const i=(await e.json()).error;return ut.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Gh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function my(t,{refreshToken:e}){const n=Gh(t);return n.append("Authorization",vy(e)),n}async function zh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function yy(t){return Number(t.replace("s","000"))}function vy(t){return`${$h} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=jh(t),s=Gh(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:$h,appId:t.appId,sdkVersion:Bh},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await zh(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Wh(c.authToken)}}else throw await Vh("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^[cdef][\w-]{21}$/,Qs="";function Ty(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Cy(t);return wy.test(n)?n:Qs}catch{return Qs}}function Cy(t){return Ey(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new Map;function Yh(t,e){const n=Xi(t);Xh(n,e),Sy(n,e)}function Xh(t,e){const n=Kh.get(t);if(n)for(const i of n)i(e)}function Sy(t,e){const n=Ry();n&&n.postMessage({key:t,fid:e}),Ay()}let rt=null;function Ry(){return!rt&&"BroadcastChannel"in self&&(rt=new BroadcastChannel("[Firebase] FID Change"),rt.onmessage=t=>{Xh(t.data.key,t.data.fid)}),rt}function Ay(){Kh.size===0&&rt&&(rt.close(),rt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="firebase-installations-database",ky=1,dt="firebase-installations-store";let Es=null;function Zr(){return Es||(Es=cy(by,ky,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dt)}}})),Es}async function Ei(t,e){const n=Xi(t),s=(await Zr()).transaction(dt,"readwrite"),r=s.objectStore(dt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Yh(t,e.fid),e}async function Jh(t){const e=Xi(t),i=(await Zr()).transaction(dt,"readwrite");await i.objectStore(dt).delete(e),await i.done}async function Ji(t,e){const n=Xi(t),s=(await Zr()).transaction(dt,"readwrite"),r=s.objectStore(dt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Yh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){let e;const n=await Ji(t.appConfig,i=>{const s=Ny(i),r=Oy(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Qs?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ny(t){const e=t||{fid:Ty(),registrationStatus:0};return Qh(e)}function Oy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ut.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Dy(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Py(t)}:{installationEntry:e}}async function Dy(t,e){try{const n=await Iy(t,e);return Ei(t.appConfig,n)}catch(n){throw Hh(n)&&n.customData.serverCode===409?await Jh(t.appConfig):await Ei(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Py(t){let e=await ba(t.appConfig);for(;e.registrationStatus===1;)await qh(100),e=await ba(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await eo(t);return i||n}return e}function ba(t){return Ji(t,e=>{if(!e)throw ut.create("installation-not-found");return Qh(e)})}function Qh(t){return My(t)?{fid:t.fid,registrationStatus:0}:t}function My(t){return t.registrationStatus===1&&t.registrationTime+Uh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly({appConfig:t,heartbeatServiceProvider:e},n){const i=xy(t,n),s=my(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Bh,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await zh(()=>fetch(i,a));if(l.ok){const c=await l.json();return Wh(c)}else throw await Vh("Generate Auth Token",l)}function xy(t,{fid:e}){return`${jh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e=!1){let n;const i=await Ji(t.appConfig,r=>{if(!Zh(r))throw ut.create("not-registered");const o=r.authToken;if(!e&&By(o))return r;if(o.requestStatus===1)return n=Fy(t,e),r;{if(!navigator.onLine)throw ut.create("app-offline");const a=Hy(r);return n=Uy(t,a),a}});return n?await n:i.authToken}async function Fy(t,e){let n=await ka(t.appConfig);for(;n.authToken.requestStatus===1;)await qh(100),n=await ka(t.appConfig);const i=n.authToken;return i.requestStatus===0?to(t,e):i}function ka(t){return Ji(t,e=>{if(!Zh(e))throw ut.create("not-registered");const n=e.authToken;return jy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Uy(t,e){try{const n=await Ly(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ei(t.appConfig,i),n}catch(n){if(Hh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jh(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ei(t.appConfig,i)}throw n}}function Zh(t){return t!==void 0&&t.registrationStatus===2}function By(t){return t.requestStatus===2&&!$y(t)}function $y(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+fy}function Hy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function jy(t){return t.requestStatus===1&&t.requestTime+Uh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t){const e=t,{installationEntry:n,registrationPromise:i}=await eo(e);return i?i.catch(console.error):to(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(t,e=!1){const n=t;return await Gy(n),(await to(n,e)).token}async function Gy(t){const{registrationPromise:e}=await eo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){if(!t||!t.options)throw ws("App Configuration");if(!t.name)throw ws("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ws(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ws(t){return ut.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="installations",qy="installations-internal",Ky=t=>{const e=t.getProvider("app").getImmediate(),n=zy(e),i=Cn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Yy=t=>{const e=t.getProvider("app").getImmediate(),n=Cn(e,eu).getImmediate();return{getId:()=>Wy(n),getToken:s=>Vy(n,s)}};function Xy(){ce(new re(eu,Ky,"PUBLIC")),ce(new re(qy,Yy,"PRIVATE"))}Xy();Z(Fh,Qr);Z(Fh,Qr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="analytics",Jy="firebase_id",Qy="origin",Zy=60*1e3,ev="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",no="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Tn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},le=new mt("analytics","Analytics",tv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){if(!t.startsWith(no)){const e=le.create("invalid-gtag-resource",{gtagURL:t});return ne.warn(e.message),""}return t}function tu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function iv(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sv(t,e){const n=iv("firebase-js-sdk-policy",{createScriptURL:nv}),i=document.createElement("script"),s=`${no}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function rv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ov(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await tu(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ne.error(a)}t("config",s,r)}async function av(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await tu(n);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){ne.error(r)}}function lv(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await av(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await ov(t,e,n,i,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){ne.error(a)}}return s}function cv(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=lv(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function hv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(no)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=30,dv=1e3;class fv{constructor(e={},n=dv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nu=new fv;function pv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gv(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:pv(i)},r=ev.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function _v(t,e=nu,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw le.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw le.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new vv;return setTimeout(async()=>{a.abort()},Zy),iu({appId:i,apiKey:s,measurementId:r},o,a,e)}async function iu(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=nu){var r;const{appId:o,measurementId:a}=t;try{await mv(i,e)}catch(l){if(a)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await gv(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!yv(c)){if(s.deleteThrottleMetadata(o),a)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ao(n,s.intervalMillis,uv):Ao(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,u),ne.debug(`Calling attemptFetch again in ${h} millis`),iu(t,u,i,s)}}function mv(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yv(t){if(!(t instanceof de)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class vv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Iv(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(){if(Bl())try{await $l()}catch(t){return ne.warn(le.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ne.warn(le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wv(t,e,n,i,s,r,o){var a;const l=_v(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ne.error(g)),e.push(l);const c=Ev().then(g=>{if(g)return i.getId()}),[h,u]=await Promise.all([l,c]);hv(r)||sv(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Qy]="firebase",d.update=!0,u!=null&&(d[Jy]=u),s("config",h.measurementId,d),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.app=e}_delete(){return delete nn[this.app.options.appId],Promise.resolve()}}let nn={},Oa=[];const Da={};let Ts="dataLayer",Cv="gtag",Pa,su,Ma=!1;function Sv(){const t=[];if(Fl()&&t.push("This is a browser extension environment."),Od()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=le.create("invalid-analytics-context",{errorInfo:e});ne.warn(n.message)}}function Rv(t,e,n){Sv();const i=t.options.appId;if(!i)throw le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw le.create("no-api-key");if(nn[i]!=null)throw le.create("already-exists",{id:i});if(!Ma){rv(Ts);const{wrappedGtag:r,gtagCore:o}=cv(nn,Oa,Da,Ts,Cv);su=r,Pa=o,Ma=!0}return nn[i]=wv(t,Oa,Da,e,Pa,Ts,n),new Tv(t)}function Av(t,e,n,i){t=Ae(t),Iv(su,nn[t.app.options.appId],e,n,i).catch(s=>ne.error(s))}const La="@firebase/analytics",xa="0.10.0";function bv(){ce(new re(Na,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Rv(i,s,n)},"PUBLIC")),ce(new re("analytics-internal",t,"PRIVATE")),Z(La,xa),Z(La,xa,"esm2017");function t(e){try{const n=e.getProvider(Na).getImmediate();return{logEvent:(i,s,r)=>Av(n,i,s,r)}}catch(n){throw le.create("interop-component-reg-failed",{reason:n})}}}bv();var Fa={};const Ua="@firebase/database",Ba="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru="";function kv(t){ru=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ln(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nv(e)}}catch{}return new Ov},ot=ou("localStorage"),Dv=ou("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Tn("@firebase/database"),Pv=function(){let t=1;return function(){return t++}}(),au=function(t){const e=jd(t),n=new Fd;n.update(e);const i=n.digest();return ur.encodeByteArray(i)},Fn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fn.apply(null,i):typeof i=="object"?e+=$(i):e+=i,e+=" "}return e};let sn=null,$a=!0;const Mv=function(t,e){f(!0,"Can't turn on custom loggers persistently."),bt.logLevel=T.VERBOSE,sn=bt.log.bind(bt)},V=function(...t){if($a===!0&&($a=!1,sn===null&&Dv.get("logging_enabled")===!0&&Mv()),sn){const e=Fn.apply(null,t);sn(e)}},Un=function(t){return function(...e){V(t,...e)}},Zs=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fn(...t);bt.error(e)},ft=function(...t){const e=`FIREBASE FATAL ERROR: ${Fn(...t)}`;throw bt.error(e),new Error(e)},se=function(...t){const e="FIREBASE WARNING: "+Fn(...t);bt.warn(e)},Lv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mt="[MIN_NAME]",pt="[MAX_NAME]",Ht=function(t,e){if(t===e)return 0;if(t===Mt||e===pt)return-1;if(e===Mt||t===pt)return 1;{const n=Ha(t),i=Ha(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Fv=function(t,e){return t===e?0:t<e?-1:1},qt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$(e))},io=function(t){if(typeof t!="object"||t===null)return $(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=$(e[i]),n+=":",n+=io(t[e[i]]);return n+="}",n},cu=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hu=function(t){f(!lu(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Uv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},$v=new RegExp("^-?(0*)\\d{1,10}$"),Hv=-2147483648,jv=2147483647,Ha=function(t){if($v.test(t)){const e=Number(t);if(e>=Hv&&e<=jv)return e}return null},Bn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw se("Exception was thrown by user callback.",n),e},Math.floor(0))}},Wv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',se(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="5",uu="v",du="s",fu="r",pu="f",gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_u="ls",mu="p",er="ac",yu="websocket",vu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ot.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iu(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===yu)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vu)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qv(t)&&(n.ns=t.namespace);const s=[];return ue(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.counters_={}}incrementCounter(e,n=1){Fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ed(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={},Ss={};function ro(t){const e=t.toString();return Cs[e]||(Cs[e]=new Kv),Cs[e]}function Yv(t,e){const n=t.toString();return Ss[n]||(Ss[n]=e()),Ss[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Bn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="start",Jv="close",Qv="pLPCommand",Zv="pRTLPCB",Eu="id",wu="pw",Tu="ser",eI="cb",tI="seg",nI="ts",iI="d",sI="dframe",Cu=1870,Su=30,rI=Cu-Su,oI=25e3,aI=3e4;class wt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Un(e),this.stats_=ro(n),this.urlFn=l=>(this.appCheckToken&&(l[er]=this.appCheckToken),Iu(n,vu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aI)),xv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oo((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ja)this.id=a,this.password=l;else if(o===Jv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ja]="t",i[Tu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[eI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[uu]=so,this.transportSessionId&&(i[du]=this.transportSessionId),this.lastSessionId&&(i[_u]=this.lastSessionId),this.applicationId&&(i[mu]=this.applicationId),this.appCheckToken&&(i[er]=this.appCheckToken),typeof location<"u"&&location.hostname&&gu.test(location.hostname)&&(i[fu]=pu);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wt.forceAllow_=!0}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){return wt.forceAllow_?!0:!wt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uv()&&!Bv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Dl(n),s=cu(i,rI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[sI]="t",i[Eu]=e,i[wu]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class oo{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Pv(),window[Qv+this.uniqueCallbackIdentifier]=e,window[Zv+this.uniqueCallbackIdentifier]=n,this.myIFrame=oo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){V("frame writing exception"),a.stack&&V(a.stack),V(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||V("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Eu]=this.myID,e[wu]=this.myPW,e[Tu]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Su+i.length<=Cu;){const o=this.pendingSegs.shift();i=i+"&"+tI+s+"="+o.seg+"&"+nI+s+"="+o.ts+"&"+iI+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(oI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{V("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=16384,cI=45e3;let wi=null;typeof MozWebSocket<"u"?wi=MozWebSocket:typeof WebSocket<"u"&&(wi=WebSocket);class Ie{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Un(this.connId),this.stats_=ro(n),this.connURL=Ie.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[uu]=so,typeof location<"u"&&location.hostname&&gu.test(location.hostname)&&(o[fu]=pu),n&&(o[du]=n),i&&(o[_u]=i),s&&(o[er]=s),r&&(o[mu]=r),Iu(e,yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ot.set("previous_websocket_failure",!0);try{let i;Nd(),this.mySock=new wi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&wi!==null&&!Ie.forceDisallow_}static previouslyFailed(){return ot.isInMemoryStorage||ot.get("previous_websocket_failure")===!0}markConnectionHealthy(){ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ln(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=$(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=cu(n,lI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ie.responsesRequiredToBeHealthy=2;Ie.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wt,Ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ie.isAvailable();let i=n&&!Ie.previouslyFailed();if(e.webSocketOnly&&(n||se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ie];else{const s=this.transports_=[];for(const r of En.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);En.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}En.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=6e4,uI=5e3,dI=10*1024,fI=100*1024,Rs="t",Wa="d",pI="s",Va="r",gI="e",Ga="o",za="a",qa="n",Ka="p",_I="h";class mI{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Un("c:"+this.id+":"),this.transportManager_=new En(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=rn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rs in e){const n=e[Rs];n===za?this.upgradeIfSecondaryHealthy_():n===Va?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ga&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qt("t",e),i=qt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ka,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:za,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qt("t",e),i=qt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qt(Rs,e);if(Wa in e){const i=e[Wa];if(n===_I){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===qa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===pI?this.onConnectionShutdown_(i):n===Va?this.onReset_(i):n===gI?Zs("Server Error: "+i):n===Ga?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),so!==i&&se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),rn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ka,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Au{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ti}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=32,Xa=768;class D{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function b(){return new D("")}function E(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ke(t){return t.pieces_.length-t.pieceNum_}function N(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new D(t.pieces_,e)}function bu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ku(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new D(e,0)}function x(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new D(n,0)}function v(t){return t.pieceNum_>=t.pieces_.length}function ae(t,e){const n=E(t),i=E(e);if(n===null)return e;if(n===i)return ae(N(t),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ou(t,e){if(Ke(t)!==Ke(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ge(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ke(t)>Ke(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class vI{constructor(e,n){this.errorPrefix_=n,this.parts_=ku(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ni(this.parts_[i]);Du(this)}}function II(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ni(e),Du(t)}function EI(t){const e=t.parts_.pop();t.byteLength_-=Ni(e),t.parts_.length>0&&(t.byteLength_-=1)}function Du(t){if(t.byteLength_>Xa)throw new Error(t.errorPrefix_+"has a key path longer than "+Xa+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ya)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ya+") or object contains a cycle "+tt(t))}function tt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Au{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ao}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=1e3,wI=60*5*1e3,Ja=30*1e3,TI=1.3,CI=3e4,SI="server_kill",Qa=3;class Me extends Ru{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Me.nextPersistentConnectionId_++,this.log_=Un("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kt,this.maxReconnectDelay_=wI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ao.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_($(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new fr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Me.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Fe(e,"w")){const i=Ot(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ja)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ld(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zs("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CI&&(this.reconnectDelay_=Kt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Me.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new mI(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{se(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(SI)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&se(u),l())}}}interrupt(e){V("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){V("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Os(this.interruptReasons_)&&(this.reconnectDelay_=Kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>io(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){V("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qa&&(this.reconnectDelay_=Ja,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){V("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ru.replace(/\./g,"-")]=1,pr()?e["framework.cordova"]=1:Ul()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ti.getInstance().currentlyOnline();return Os(this.interruptReasons_)&&e}}Me.nextPersistentConnectionId_=0;Me.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new w(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new w(Mt,e),s=new w(Mt,n);return this.compare(i,s)!==0}minPost(){return w.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn;class Pu extends Qi{static get __EMPTY_NODE(){return Yn}static set __EMPTY_NODE(e){Yn=e}compare(e,n){return Ht(e.name,n.name)}isDefinedOn(e){throw xt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return w.MIN}maxPost(){return new w(pt,Yn)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new w(e,Yn)}toString(){return".key"}}const kt=new Pu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class L{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??L.RED,this.left=s??te.EMPTY_NODE,this.right=r??te.EMPTY_NODE}copy(e,n,i,s,r){return new L(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return te.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,L.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,L.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}L.RED=!0;L.BLACK=!1;class RI{copy(e,n,i,s,r){return this}insert(e,n,i){return new L(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class te{constructor(e,n=te.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new te(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,L.BLACK,null,null))}remove(e){return new te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,L.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xn(this.root_,null,this.comparator_,!0,e)}}te.EMPTY_NODE=new RI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){return Ht(t.name,e.name)}function lo(t,e){return Ht(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;function bI(t){tr=t}const Mu=function(t){return typeof t=="number"?"number:"+hu(t):"string:"+t},Lu=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fe(e,".sv"),"Priority must be a string or number.")}else f(t===tr||t.isEmpty(),"priority of unexpected type.");f(t===tr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;class M{constructor(e,n=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lu(this.priorityNode_)}static set __childrenNodeConstructor(e){Za=e}static get __childrenNodeConstructor(){return Za}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:E(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=E(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hu(this.value_):e+=this.value_,this.lazyHash_=au(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=M.VALUE_TYPE_ORDER.indexOf(n),r=M.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu,Fu;function kI(t){xu=t}function NI(t){Fu=t}class OI extends Qi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ht(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return w.MIN}maxPost(){return new w(pt,new M("[PRIORITY-POST]",Fu))}makePost(e,n){const i=xu(e);return new w(n,new M("[PRIORITY-POST]",i))}toString(){return".priority"}}const K=new OI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=Math.log(2);class PI{constructor(e){const n=r=>parseInt(Math.log(r)/DI,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ci=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new L(d,u.node,L.BLACK,null,null);{const g=parseInt(h/2,10)+l,_=s(l,g),A=s(g+1,c);return u=t[g],d=n?n(u):u,new L(d,u.node,L.BLACK,_,A)}},r=function(l){let c=null,h=null,u=t.length;const d=function(_,A){const S=u-_,fe=u;u-=_;const ke=s(S+1,fe),ee=t[S],j=n?n(ee):ee;g(new L(j,ee.node,A,null,ke))},g=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const A=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));A?d(S,L.BLACK):(d(S,L.BLACK),d(S,L.RED))}return h},o=new PI(t.length),a=r(o);return new te(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;const Yt={};class Pe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(K,"ChildrenNode.ts has not been loaded"),As=As||new Pe({".priority":Yt},{".priority":K}),As}get(e){const n=Ot(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof te?n:null}hasIndex(e){return Fe(this.indexSet_,e.toString())}addIndex(e,n){f(e!==kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(w.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ci(i,e.getCompare()):a=Yt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Pe(h,c)}addToIndexes(e,n){const i=si(this.indexes_,(s,r)=>{const o=Ot(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===Yt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(w.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ci(a,o.getCompare())}else return Yt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new w(e.name,a))),l.insert(e,e.node)}});return new Pe(i,this.indexSet_)}removeFromIndexes(e,n){const i=si(this.indexes_,s=>{if(s===Yt)return s;{const r=n.get(e.name);return r?s.remove(new w(e.name,r)):s}});return new Pe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;class C{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Lu(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xt||(Xt=new C(new te(lo),null,Pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xt:n}}getChild(e){const n=E(e);return n===null?this:this.getImmediateChild(n).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new w(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Xt:this.priorityNode_;return new C(s,o,r)}}updateChild(e,n){const i=E(e);if(i===null)return n;{f(E(e)!==".priority"||Ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(N(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(K,(o,a)=>{n[o]=a.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mu(this.getPriority().val())+":"),this.forEachChild(K,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":au(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new w(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new w(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new w(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,w.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,w.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$n?-1:0}withIndex(e){if(e===kt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(K),s=n.getIterator(K);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kt?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MI extends C{constructor(){super(new te(lo),C.EMPTY_NODE,Pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const $n=new MI;Object.defineProperties(w,{MIN:{value:new w(Mt,C.EMPTY_NODE)},MAX:{value:new w(pt,$n)}});Pu.__EMPTY_NODE=C.EMPTY_NODE;M.__childrenNodeConstructor=C;bI($n);NI($n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=!0;function G(t,e=null){if(t===null)return C.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new M(n,G(e))}if(!(t instanceof Array)&&LI){const n=[];let i=!1;if(ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=G(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new w(o,l)))}}),n.length===0)return C.EMPTY_NODE;const r=Ci(n,AI,o=>o.name,lo);if(i){const o=Ci(n,K.getCompare());return new C(r,G(e),new Pe({".priority":o},{".priority":K}))}else return new C(r,G(e),Pe.Default)}else{let n=C.EMPTY_NODE;return ue(t,(i,s)=>{if(Fe(t,i)&&i.substring(0,1)!=="."){const r=G(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(G(e))}}kI(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI extends Qi{constructor(e){super(),this.indexPath_=e,f(!v(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ht(e.name,n.name):r}makePost(e,n){const i=G(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new w(n,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,$n);return new w(pt,e)}toString(){return ku(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI extends Qi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ht(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return w.MIN}maxPost(){return w.MAX}makePost(e,n){const i=G(e);return new w(n,i)}toString(){return".value"}}const UI=new FI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){return{type:"value",snapshotNode:t}}function $I(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function HI(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function el(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mt}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new co;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===K?n="$priority":t.index_===UI?n="$value":t.index_===kt?n="$key":(f(t.index_ instanceof xI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=$(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+$(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=$(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+$(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==K&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Ru{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Un("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Si.getListenId_(e,i),a={};this.listens_[o]=a;const l=tl(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Ot(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Si.getListenId_(e,n);delete this.listens_[i]}get(e){const n=tl(e._queryParams),i=e._path.toString(),s=new fr;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ft(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ln(a.responseText)}catch{se("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&se("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return{value:null,children:new Map}}function Uu(t,e,n){if(v(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=E(e);t.children.has(i)||t.children.set(i,Ri());const s=t.children.get(i);e=N(e),Uu(s,e,n)}}function nr(t,e,n){t.value!==null?n(e,t.value):VI(t,(i,s)=>{const r=new D(e.toString()+"/"+i);nr(s,r,n)})}function VI(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ue(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=10*1e3,zI=30*1e3,qI=5*60*1e3;class KI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GI(e);const i=il+(zI-il)*Math.random();rn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ue(e,(s,r)=>{r>0&&Fe(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),rn(this.reportStats_.bind(this),Math.floor(Math.random()*2*qI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function Bu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $u(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ee.ACK_USER_WRITE,this.source=Bu()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new D(e));return new Ai(b(),n,this.revert)}}else return f(E(this.path)===e,"operationForChild called for unrelated child."),new Ai(N(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ee.OVERWRITE}operationForChild(e){return v(this.path)?new gt(this.source,b(),this.snap.getImmediateChild(e)):new gt(this.source,N(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ee.MERGE}operationForChild(e){if(v(this.path)){const n=this.children.subtree(new D(e));return n.isEmpty()?null:n.value?new gt(this.source,b(),n.value):new wn(this.source,b(),n)}else return f(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wn(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const n=E(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YI(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jI(o.childName,o.snapshotNode))}),Jt(t,s,"child_removed",e,i,n),Jt(t,s,"child_added",e,i,n),Jt(t,s,"child_moved",r,i,n),Jt(t,s,"child_changed",e,i,n),Jt(t,s,"value",e,i,n),s}function Jt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>JI(t,a,l)),o.forEach(a=>{const l=XI(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function XI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JI(t,e,n){if(e.childName==null||n.childName==null)throw xt("Should only compare child_ events.");const i=new w(e.childName,e.snapshotNode),s=new w(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e){return{eventCache:t,serverCache:e}}function on(t,e,n,i){return ju(new ho(e,n,i),t.serverCache)}function Wu(t,e,n,i){return ju(t.eventCache,new ho(e,n,i))}function ir(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _t(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs;const QI=()=>(bs||(bs=new te(Fv)),bs);class k{constructor(e,n=QI()){this.value=e,this.children=n}static fromObject(e){let n=new k(null);return ue(e,(i,s)=>{n=n.set(new D(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:b(),value:this.value};if(v(e))return null;{const i=E(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(N(e),n);return r!=null?{path:x(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const n=E(e),i=this.children.get(n);return i!==null?i.subtree(N(e)):new k(null)}}set(e,n){if(v(e))return new k(n,this.children);{const i=E(e),r=(this.children.get(i)||new k(null)).set(N(e),n),o=this.children.insert(i,r);return new k(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new k(null):new k(null,this.children);{const n=E(e),i=this.children.get(n);if(i){const s=i.remove(N(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new k(null):new k(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const n=E(e),i=this.children.get(n);return i?i.get(N(e)):null}}setTree(e,n){if(v(e))return n;{const i=E(e),r=(this.children.get(i)||new k(null)).setTree(N(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new k(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(x(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,b(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(v(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(N(e),x(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,b(),n)}foreachOnPath_(e,n,i){if(v(e))return this;{this.value&&i(n,this.value);const s=E(e),r=this.children.get(s);return r?r.foreachOnPath_(N(e),x(n,s),i):new k(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(x(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.writeTree_=e}static empty(){return new _e(new k(null))}}function an(t,e,n){if(v(e))return new _e(new k(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,n),new _e(t.writeTree_.set(s,r))}else{const s=new k(n),r=t.writeTree_.setTree(e,s);return new _e(r)}}}function sl(t,e,n){let i=t;return ue(n,(s,r)=>{i=an(i,x(e,s),r)}),i}function rl(t,e){if(v(e))return _e.empty();{const n=t.writeTree_.setTree(e,new k(null));return new _e(n)}}function sr(t,e){return yt(t,e)!=null}function yt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ae(n.path,e)):null}function ol(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(K,(i,s)=>{e.push(new w(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new w(i,s.value))}),e}function qe(t,e){if(v(e))return t;{const n=yt(t,e);return n!=null?new _e(new k(n)):new _e(t.writeTree_.subtree(e))}}function rr(t){return t.writeTree_.isEmpty()}function Lt(t,e){return Vu(b(),t.writeTree_,e)}function Vu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Vu(x(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(x(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){return Xu(e,t)}function ZI(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=an(t.visibleWrites,e,n)),t.lastWriteId=i}function eE(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function tE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nE(a,i.path)?s=!1:ge(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return iE(t),!0;if(i.snap)t.visibleWrites=rl(t.visibleWrites,i.path);else{const a=i.children;ue(a,l=>{t.visibleWrites=rl(t.visibleWrites,x(i.path,l))})}return!0}else return!1}function nE(t,e){if(t.snap)return ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ge(x(t.path,n),e))return!0;return!1}function iE(t){t.visibleWrites=zu(t.allWrites,sE,b()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sE(t){return t.visible}function zu(t,e,n){let i=_e.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ge(n,o)?(a=ae(n,o),i=an(i,a,r.snap)):ge(o,n)&&(a=ae(o,n),i=an(i,b(),r.snap.getChild(a)));else if(r.children){if(ge(n,o))a=ae(n,o),i=sl(i,a,r.children);else if(ge(o,n))if(a=ae(o,n),v(a))i=sl(i,b(),r.children);else{const l=Ot(r.children,E(a));if(l){const c=l.getChild(N(a));i=an(i,b(),c)}}}else throw xt("WriteRecord should have .snap or .children")}}return i}function qu(t,e,n,i,s){if(!i&&!s){const r=yt(t.visibleWrites,e);if(r!=null)return r;{const o=qe(t.visibleWrites,e);if(rr(o))return n;if(n==null&&!sr(o,b()))return null;{const a=n||C.EMPTY_NODE;return Lt(o,a)}}}else{const r=qe(t.visibleWrites,e);if(!s&&rr(r))return n;if(!s&&n==null&&!sr(r,b()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ge(c.path,e)||ge(e,c.path))},a=zu(t.allWrites,o,e),l=n||C.EMPTY_NODE;return Lt(a,l)}}}function rE(t,e,n){let i=C.EMPTY_NODE;const s=yt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(K,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=qe(t.visibleWrites,e);return n.forEachChild(K,(o,a)=>{const l=Lt(qe(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),ol(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=qe(t.visibleWrites,e);return ol(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function oE(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=x(e,n);if(sr(t.visibleWrites,r))return null;{const o=qe(t.visibleWrites,r);return rr(o)?s.getChild(n):Lt(o,s.getChild(n))}}function aE(t,e,n,i){const s=x(e,n),r=yt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=qe(t.visibleWrites,s);return Lt(o,i.getNode().getImmediateChild(n))}else return null}function lE(t,e){return yt(t.visibleWrites,e)}function cE(t,e,n,i,s,r,o){let a;const l=qe(t.visibleWrites,e),c=yt(l,b());if(c!=null)a=c;else if(n!=null)a=Lt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&h.length<s;)u(g,i)!==0&&h.push(g),g=d.getNext();return h}else return[]}function hE(){return{visibleWrites:_e.empty(),allWrites:[],lastWriteId:-1}}function or(t,e,n,i){return qu(t.writeTree,t.treePath,e,n,i)}function Ku(t,e){return rE(t.writeTree,t.treePath,e)}function al(t,e,n,i){return oE(t.writeTree,t.treePath,e,n,i)}function bi(t,e){return lE(t.writeTree,x(t.treePath,e))}function uE(t,e,n,i,s,r){return cE(t.writeTree,t.treePath,e,n,i,s,r)}function uo(t,e,n){return aE(t.writeTree,t.treePath,e,n)}function Yu(t,e){return Xu(x(t.treePath,e),t.writeTree)}function Xu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,el(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,HI(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,$I(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,el(i,e.snapshotNode,s.oldSnap));else throw xt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ju=new fE;class fo{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ho(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uo(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_t(this.viewCache_),r=uE(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function pE(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gE(t,e,n,i,s){const r=new dE;let o,a;if(n.type===Ee.OVERWRITE){const c=n;c.source.fromUser?o=ar(t,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=ki(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Ee.MERGE){const c=n;c.source.fromUser?o=mE(t,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=lr(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Ee.ACK_USER_WRITE){const c=n;c.revert?o=IE(t,e,c.path,i,s,r):o=yE(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Ee.LISTEN_COMPLETE)o=vE(t,e,n.path,i,r);else throw xt("Unknown operation type: "+n.type);const l=r.getChanges();return _E(e,o,l),{viewCache:o,changes:l}}function _E(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ir(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(BI(ir(e)))}}function Qu(t,e,n,i,s,r){const o=e.eventCache;if(bi(i,n)!=null)return e;{let a,l;if(v(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_t(e),h=c instanceof C?c:C.EMPTY_NODE,u=Ku(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=or(i,_t(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=E(n);if(c===".priority"){f(Ke(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=al(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=N(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=al(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=uo(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return on(e,a,o.isFullyInitialized()||v(n),t.filter.filtersNodes())}}function ki(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(v(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),g,null)}else{const g=E(n);if(!l.isCompleteForPath(n)&&Ke(n)>1)return e;const _=N(n),S=l.getNode().getImmediateChild(g).updateChild(_,i);g===".priority"?c=h.updatePriority(l.getNode(),S):c=h.updateChild(l.getNode(),g,S,_,Ju,null)}const u=Wu(e,c,l.isFullyInitialized()||v(n),h.filtersNodes()),d=new fo(s,u,r);return Qu(t,u,n,s,d,a)}function ar(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new fo(s,e,r);if(v(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=on(e,c,!0,t.filter.filtersNodes());else{const u=E(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=on(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=N(n),g=a.getNode().getImmediateChild(u);let _;if(v(d))_=i;else{const A=h.getCompleteChild(u);A!=null?bu(d)===".priority"&&A.getChild(Nu(d)).isEmpty()?_=A:_=A.updateChild(d,i):_=C.EMPTY_NODE}if(g.equals(_))l=e;else{const A=t.filter.updateChild(a.getNode(),u,_,d,h,o);l=on(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ll(t,e){return t.eventCache.isCompleteForChild(e)}function mE(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=x(n,l);ll(e,E(h))&&(a=ar(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=x(n,l);ll(e,E(h))||(a=ar(t,a,h,c,s,r,o))}),a}function cl(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function lr(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(n)?c=i:c=new k(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),_=cl(t,g,d);l=ki(t,l,new D(u),_,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!g){const _=e.serverCache.getNode().getImmediateChild(u),A=cl(t,_,d);l=ki(t,l,new D(u),A,s,r,o,a)}}),l}function yE(t,e,n,i,s,r,o){if(bi(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(v(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ki(t,e,n,l.getNode().getChild(n),s,r,a,o);if(v(n)){let c=new k(null);return l.getNode().forEachChild(kt,(h,u)=>{c=c.set(new D(h),u)}),lr(t,e,n,c,s,r,a,o)}else return e}else{let c=new k(null);return i.foreach((h,u)=>{const d=x(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),lr(t,e,n,c,s,r,a,o)}}function vE(t,e,n,i,s){const r=e.serverCache,o=Wu(e,r.getNode(),r.isFullyInitialized()||v(n),r.isFiltered());return Qu(t,o,n,i,Ju,s)}function IE(t,e,n,i,s,r){let o;if(bi(i,n)!=null)return e;{const a=new fo(i,e,s),l=e.eventCache.getNode();let c;if(v(n)||E(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=or(i,_t(e));else{const u=e.serverCache.getNode();f(u instanceof C,"serverChildren would be complete if leaf node"),h=Ku(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=E(n);let u=uo(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,N(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,C.EMPTY_NODE,N(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=or(i,_t(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bi(i,b())!=null,on(e,c,o,t.filter.filtersNodes())}}function EE(t,e){const n=_t(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!v(e)&&!n.getImmediateChild(E(e)).isEmpty())?n.getChild(e):null}function hl(t,e,n,i){e.type===Ee.MERGE&&e.source.queryId!==null&&(f(_t(t.viewCache_),"We should always have a full cache before handling merges"),f(ir(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=gE(t.processor_,s,e,n,i);return pE(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,wE(t,r.changes,r.viewCache.eventCache.getNode())}function wE(t,e,n,i){const s=t.eventRegistrations_;return YI(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;function TE(t){f(!ul,"__referenceConstructor has already been defined"),ul=t}function po(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),hl(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(hl(o,e,n,i));return r}}function go(t,e){let n=null;for(const i of t.views.values())n=n||EE(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;function CE(t){f(!dl,"__referenceConstructor has already been defined"),dl=t}class fl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new k(null),this.pendingWriteTree_=hE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function SE(t,e,n,i,s){return ZI(t.pendingWriteTree_,e,n,i,s),s?es(t,new gt(Bu(),e,n)):[]}function Tt(t,e,n=!1){const i=eE(t.pendingWriteTree_,e);if(tE(t.pendingWriteTree_,e)){let r=new k(null);return i.snap!=null?r=r.set(b(),!0):ue(i.children,o=>{r=r.set(new D(o),!0)}),es(t,new Ai(i.path,r,n))}else return[]}function Zi(t,e,n){return es(t,new gt($u(),e,n))}function RE(t,e,n){const i=k.fromObject(n);return es(t,new wn($u(),e,i))}function AE(t,e,n,i){const s=nd(t,i);if(s!=null){const r=id(s),o=r.path,a=r.queryId,l=ae(o,e),c=new gt(Hu(a),l,n);return sd(t,o,c)}else return[]}function bE(t,e,n,i){const s=nd(t,i);if(s){const r=id(s),o=r.path,a=r.queryId,l=ae(o,e),c=k.fromObject(n),h=new wn(Hu(a),l,c);return sd(t,o,h)}else return[]}function Zu(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ae(o,e),c=go(a,l);if(c)return c});return qu(s,e,r,n,!0)}function es(t,e){return ed(e,t.syncPointTree_,null,Gu(t.pendingWriteTree_,b()))}function ed(t,e,n,i){if(v(t.path))return td(t,e,n,i);{const s=e.get(b());n==null&&s!=null&&(n=go(s,b()));let r=[];const o=E(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Yu(i,o);r=r.concat(ed(a,l,c,h))}return s&&(r=r.concat(po(s,t,i,n))),r}}function td(t,e,n,i){const s=e.get(b());n==null&&s!=null&&(n=go(s,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yu(i,o),h=t.operationForChild(o);h&&(r=r.concat(td(h,a,l,c)))}),s&&(r=r.concat(po(s,t,i,n))),r}function nd(t,e){return t.tagToQueryMap.get(e)}function id(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new D(t.substr(0,e))}}function sd(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Gu(t.pendingWriteTree_,e);return po(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _o(n)}node(){return this.node_}}class mo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=x(this.path_,e);return new mo(this.syncTree_,n)}node(){return Zu(this.syncTree_,this.path_)}}const kE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pl=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OE(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},OE=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},DE=function(t,e,n,i){return yo(e,new mo(n,t),i)},PE=function(t,e,n){return yo(t,new _o(e),n)};function yo(t,e,n){const i=t.getPriority().val(),s=pl(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=pl(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new M(a,G(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new M(s))),o.forEachChild(K,(a,l)=>{const c=yo(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Io(t,e){let n=e instanceof D?e:new D(e),i=t,s=E(n);for(;s!==null;){const r=Ot(i.node.children,s)||{children:{},childCount:0};i=new vo(s,i,r),n=N(n),s=E(n)}return i}function jt(t){return t.node.value}function rd(t,e){t.node.value=e,cr(t)}function od(t){return t.node.childCount>0}function ME(t){return jt(t)===void 0&&!od(t)}function ts(t,e){ue(t.node.children,(n,i)=>{e(new vo(n,t,i))})}function ad(t,e,n,i){n&&e(t),ts(t,s=>{ad(s,e,!0)})}function LE(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Hn(t){return new D(t.parent===null?t.name:Hn(t.parent)+"/"+t.name)}function cr(t){t.parent!==null&&xE(t.parent,t.name,t)}function xE(t,e,n){const i=ME(n),s=Fe(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,cr(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,cr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=/[\[\].#$\/\u0000-\u001F\u007F]/,UE=/[\[\].#$\u0000-\u001F\u007F]/,ks=10*1024*1024,ld=function(t){return typeof t=="string"&&t.length!==0&&!FE.test(t)},BE=function(t){return typeof t=="string"&&t.length!==0&&!UE.test(t)},$E=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BE(t)},cd=function(t,e,n){const i=n instanceof D?new vI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+tt(i));if(typeof e=="function")throw new Error(t+"contains a function "+tt(i)+" with contents = "+e.toString());if(lu(e))throw new Error(t+"contains "+e.toString()+" "+tt(i));if(typeof e=="string"&&e.length>ks/3&&Ni(e)>ks)throw new Error(t+"contains a string greater than "+ks+" utf8 bytes "+tt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ld(o)))throw new Error(t+" contains an invalid key ("+o+") "+tt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);II(i,o),cd(t,a,i),EI(i)}),s&&r)throw new Error(t+' contains ".value" child '+tt(i)+" in addition to actual children.")}},HE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ld(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$E(n))throw new Error(Hd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function WE(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Ou(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function vt(t,e,n){WE(t,n),VE(t,i=>ge(i,e)||ge(e,i))}function VE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(GE(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function GE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();sn&&V("event: "+n.toString()),Bn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="repo_interrupt",qE=25;class KE{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ri(),this.transactionQueueTree_=new vo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YE(t,e,n){if(t.stats_=ro(t.repoInfo_),t.forceRestClient_||Wv())t.server_=new Si(t.repoInfo_,(i,s,r,o)=>{gl(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_l(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Me(t.repoInfo_,e,(i,s,r,o)=>{gl(t,i,s,r,o)},i=>{_l(t,i)},i=>{JE(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Yv(t.repoInfo_,()=>new KI(t.stats_,t.server_)),t.infoData_=new WI,t.infoSyncTree_=new fl({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Zi(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Eo(t,"connected",!1),t.serverSyncTree_=new fl({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);vt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function XE(t){const n=t.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hd(t){return kE({timestamp:XE(t)})}function gl(t,e,n,i,s){t.dataUpdateCount++;const r=new D(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=si(n,c=>G(c));o=bE(t.serverSyncTree_,r,l,s)}else{const l=G(n);o=AE(t.serverSyncTree_,r,l,s)}else if(i){const l=si(n,c=>G(c));o=RE(t.serverSyncTree_,r,l)}else{const l=G(n);o=Zi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=To(t,r)),vt(t.eventQueue_,a,o)}function _l(t,e){Eo(t,"connected",e),e===!1&&ZE(t)}function JE(t,e){ue(e,(n,i)=>{Eo(t,n,i)})}function Eo(t,e,n){const i=new D("/.info/"+e),s=G(n);t.infoData_.updateSnapshot(i,s);const r=Zi(t.infoSyncTree_,i,s);vt(t.eventQueue_,i,r)}function QE(t){return t.nextWriteId_++}function ZE(t){ud(t,"onDisconnectEvents");const e=hd(t),n=Ri();nr(t.onDisconnect_,b(),(s,r)=>{const o=DE(s,r,t.serverSyncTree_,e);Uu(n,s,o)});let i=[];nr(n,b(),(s,r)=>{i=i.concat(Zi(t.serverSyncTree_,s,r));const o=iw(t,s);To(t,o)}),t.onDisconnect_=Ri(),vt(t.eventQueue_,b(),i)}function ew(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zE)}function ud(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),V(n,...e)}function dd(t,e,n){return Zu(t.serverSyncTree_,e,n)||C.EMPTY_NODE}function wo(t,e=t.transactionQueueTree_){if(e||ns(t,e),jt(e)){const n=pd(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&tw(t,Hn(e),n)}else od(e)&&ts(e,n=>{wo(t,n)})}function tw(t,e,n){const i=n.map(c=>c.currentWriteId),s=dd(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ae(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ud(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Tt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ns(t,Io(t.transactionQueueTree_,e)),wo(t,t.transactionQueueTree_),vt(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Bn(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{se("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}To(t,e)}},o)}function To(t,e){const n=fd(t,e),i=Hn(n),s=pd(t,n);return nw(t,s,i),i}function nw(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ae(n,l.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Tt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=qE)h=!0,u="maxretry",s=s.concat(Tt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=dd(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){cd("transaction failed: Data returned ",g,l.path);let _=G(g);typeof g=="object"&&g!=null&&Fe(g,".priority")||(_=_.updatePriority(d.getPriority()));const S=l.currentWriteId,fe=hd(t),ke=PE(_,d,fe);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=ke,l.currentWriteId=QE(t),o.splice(o.indexOf(S),1),s=s.concat(SE(t.serverSyncTree_,l.path,ke,l.currentWriteId,l.applyLocally)),s=s.concat(Tt(t.serverSyncTree_,S,!0))}else h=!0,u="nodata",s=s.concat(Tt(t.serverSyncTree_,l.currentWriteId,!0))}vt(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}ns(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Bn(i[a]);wo(t,t.transactionQueueTree_)}function fd(t,e){let n,i=t.transactionQueueTree_;for(n=E(e);n!==null&&jt(i)===void 0;)i=Io(i,n),e=N(e),n=E(e);return i}function pd(t,e){const n=[];return gd(t,e,n),n.sort((i,s)=>i.order-s.order),n}function gd(t,e,n){const i=jt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ts(e,s=>{gd(t,s,n)})}function ns(t,e){const n=jt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,rd(e,n.length>0?n:void 0)}ts(e,i=>{ns(t,i)})}function iw(t,e){const n=Hn(fd(t,e)),i=Io(t.transactionQueueTree_,e);return LE(i,s=>{Ns(t,s)}),Ns(t,i),ad(i,s=>{Ns(t,s)}),n}function Ns(t,e){const n=jt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Tt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?rd(e,void 0):n.length=r+1,vt(t.eventQueue_,Hn(e),s);for(let o=0;o<i.length;o++)Bn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function rw(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):se(`Invalid query segment '${n}' in query '${t}'`)}return e}const ml=function(t,e){const n=ow(t),i=n.namespace;n.domain==="firebase.com"&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Lv();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zv(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new D(n.pathString)}},ow=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=sw(t.substring(h,u)));const d=rw(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return v(this._path)?null:bu(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=nl(this._queryParams),n=io(e);return n==="{}"?"default":n}get _queryObject(){return nl(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof Co))return!1;const n=this._repo===e._repo,i=Ou(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+yI(this._path)}}class Wt extends Co{constructor(e,n){super(e,n,new co,!1)}get parent(){const e=Nu(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}TE(Wt);CE(Wt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="FIREBASE_DATABASE_EMULATOR_HOST",hr={};let lw=!1;function cw(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ml(r,s),a=o.repoInfo,l;typeof process<"u"&&Fa&&(l=Fa[aw]),l?(r=`http://${l}?ns=${a.namespace}`,o=ml(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Gv(t.name,t.options,e);HE("Invalid Firebase Database URL",o),v(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const h=uw(a,t,c,new Vv(t.name,n));return new dw(h,t)}function hw(t,e){const n=hr[e];(!n||n[t.key]!==t)&&ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ew(t),delete n[t.key]}function uw(t,e,n,i){let s=hr[e.name];s||(s={},hr[e.name]=s);let r=s[t.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new KE(t,lw,n,i),s[t.toURLString()]=r,r}class dw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t){kv(Ye),ce(new re("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cw(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Z(Ua,Ba,t),Z(Ua,Ba,"esm2017")}Me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fw();export{$e as G,vw as P,Ew as S,ww as a,mw as b,yw as g,Vf as i,jp as o,Z as r,Iw as s};
