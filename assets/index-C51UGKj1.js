const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pl.JJWICIUZ-DdfgVAw-.js","./chunk.QPSMFXAQ-pTNGMlGM.js","./uk.7WLIE2SJ-CF13V2OX.js","./ar.6SQYQE6V-C5TIBw8T.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return e}var t=e({name:`vendas`,displayName:`Kobi Vendas`,apiEndpoint:``,themeColor:`#179e54`,targets:[`pwa`],features:{produtos:!0,parceiro:!0,sobre:!0}}),n=Symbol.for(`kobi.basePath`),r=globalThis;function i(e){r[n]=e}function a(e=``){if(!r[n]){let e=[...document.scripts],t=e.find(e=>e.hasAttribute(`data-kobi`));i(t?t.getAttribute(`data-kobi`):(e.find(e=>/\/kit(-autoloader|\.min)?\.js($|\?)/.test(e.src))?.getAttribute(`src`)??``).split(`/`).slice(0,-1).join(`/`))}return(r[n]??``).replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var o=Object.create,s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),u=e=>{throw TypeError(e)},d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>s(e,`name`,{value:t,configurable:!0}),p=e=>[,,,o(e?.[l(`metadata`)]??null)],ee=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],te=e=>e!==void 0&&typeof e!=`function`?u(`Function expected`):e,ne=(e,t,n,r,i)=>({kind:ee[e],name:t,metadata:r,addInitializer:e=>n._?u(`Already initialized`):i.push(te(e||null))}),m=(e,t)=>d(t,l(`metadata`),e[3]),h=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},g=(e,t,n,r,i,a)=>{var o,l,d,p,h,g=t&7,_=!!(t&8),v=!!(t&16),y=g>3?e.length+1:g?_?1:2:0,se=ee[g+5],ce=g>3&&(e[y-1]=[]),le=e[y]||(e[y]=[]),b=g&&(!v&&!_&&(i=i.prototype),g<5&&(g>3||!v)&&c(g<4?i:{get[n](){return ie(this,a)},set[n](e){return ae(this,a,e)}},n));g?v&&g<4&&f(a,(g>2?`set `:g>1?`get `:``)+n):f(i,n);for(var ue=r.length-1;ue>=0;ue--)p=ne(g,n,d={},e[3],le),g&&(p.static=_,p.private=v,h=p.access={has:v?e=>re(i,e):e=>n in e},g^3&&(h.get=v?e=>(g^1?ie:oe)(e,i,g^4?a:b.get):e=>e[n]),g>2&&(h.set=v?(e,t)=>ae(e,i,t,g^4?a:b.set):(e,t)=>e[n]=t)),l=(0,r[ue])(g?g<4?v?a:b[se]:g>4?void 0:{get:b.get,set:b.set}:i,p),d._=1,g^4||l===void 0?te(l)&&(g>4?ce.unshift(l):g?v?a=l:b[se]=l:i=l):typeof l!=`object`||!l?u(`Object expected`):(te(o=l.get)&&(b.get=o),te(o=l.set)&&(b.set=o),te(o=l.init)&&ce.unshift(o));return g||m(e,i),b&&s(i,n,b),v?g^4?a:b:i},_=(e,t,n)=>d(e,typeof t==`symbol`?t:t+``,n),v=(e,t,n)=>t.has(e)||u(`Cannot `+n),re=(e,t)=>Object(t)===t?e.has(t):u(`Cannot use the "in" operator on this value`),ie=(e,t,n)=>(v(e,t,`read from private field`),n?n.call(e):t.get(e)),y=(e,t,n)=>t.has(e)?u(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ae=(e,t,n,r)=>(v(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),oe=(e,t,n)=>(v(e,t,`access private method`),n),se=null,ce=new Set;function le(){for(let e of[...ce])e()}function b(e){e.preventDefault(),se=e,le()}typeof window<`u`&&(window.addEventListener(`beforeinstallprompt`,b),window.addEventListener(`appinstalled`,()=>{se=null,le()}));function ue(){return se!==null}async function de(){let e=se;if(e===null)return!1;se=null,le();let{outcome:t}=await e.prompt();return t===`accepted`}function fe(e){return ce.add(e),()=>ce.delete(e)}function pe(){let[e=``,t=``]=location.hash.replace(/^#\/?/,``).split(`?`),n=e.split(`/`).filter(e=>e!==``);return{modulo:n[0]??`home`,args:n.slice(1),query:new URLSearchParams(t)}}function x(e){location.hash=e.startsWith(`#`)?e:`#/${e.replace(/^\//,``)}`}function me(e){addEventListener(`hashchange`,()=>e(pe())),e(pe())}var he={success:`circle-check`,danger:`alert-triangle`,warning:`alert-triangle`,neutral:`info-circle`,primary:`sparkles`};function ge(e,...t){let n=Object.assign(document.createElement(`kk-alert`),{variant:e,closable:!0}),r=document.createElement(`kk-icon`);return r.setAttribute(`slot`,`icon`),r.setAttribute(`name`,he[e]),n.append(r,...t),document.body.append(n),n}function _e(e,t=`success`,n){let r=ge(t,e);r.duration=4e3,r.toast(),t===`danger`?n?.([120,80,120]):t===`warning`&&n?.(160)}function ve(e,t){let n=document.createElement(`strong`);n.textContent=e.titulo;let r=document.createElement(`kk-button`);r.setAttribute(`size`,`small`),r.setAttribute(`variant`,`primary`),r.textContent=e.acao,r.addEventListener(`click`,t),ge(`primary`,n,` ${e.texto} `,r).toast()}var ye=globalThis,be=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,xe=Symbol(),Se=new WeakMap,Ce=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(be&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Se.set(t,e))}return e}toString(){return this.cssText}},we=e=>new Ce(typeof e==`string`?e:e+``,void 0,xe),Te=(e,t)=>{if(be)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ye.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ee=be?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return we(t)})(e):e,{is:De,defineProperty:Oe,getOwnPropertyDescriptor:ke,getOwnPropertyNames:Ae,getOwnPropertySymbols:je,getPrototypeOf:Me}=Object,Ne=globalThis,Pe=Ne.trustedTypes,Fe=Pe?Pe.emptyScript:``,Ie=Ne.reactiveElementPolyfillSupport,Le=(e,t)=>e,Re={toAttribute(e,t){switch(t){case Boolean:e=e?Fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ze=(e,t)=>!De(e,t),Be={attribute:!0,type:String,converter:Re,reflect:!1,useDefault:!1,hasChanged:ze};Symbol.metadata??=Symbol(`metadata`),Ne.litPropertyMetadata??=new WeakMap;var Ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Oe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ke(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(Le(`elementProperties`)))return;let e=Me(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Le(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Le(`properties`))){let e=this.properties,t=[...Ae(e),...je(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ee(e))}else e!==void 0&&t.push(Ee(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Te(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Re:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Re:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ze)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Ve.elementStyles=[],Ve.shadowRootOptions={mode:`open`},Ve[Le(`elementProperties`)]=new Map,Ve[Le(`finalized`)]=new Map,Ie?.({ReactiveElement:Ve}),(Ne.reactiveElementVersions??=[]).push(`2.1.2`);var He=globalThis,Ue=e=>e,We=He.trustedTypes,Ge=We?We.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ke=`$lit$`,qe=`lit$${Math.random().toFixed(9).slice(2)}$`,Je=`?`+qe,Ye=`<${Je}>`,Xe=document,Ze=()=>Xe.createComment(``),Qe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,$e=Array.isArray,et=e=>$e(e)||typeof e?.[Symbol.iterator]==`function`,tt=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,it=/>/g,at=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ot=/'/g,st=/"/g,ct=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),lt=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),ut=new WeakMap,dt=Xe.createTreeWalker(Xe,129);function ft(e,t){if(!$e(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ge===void 0?t:Ge.createHTML(t)}var pt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=nt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===nt?c[1]===`!--`?o=rt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=at):(ct.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=at):o=it:o===at?c[0]===`>`?(o=i??nt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?at:c[3]===`"`?st:ot):o===st||o===ot?o=at:o===rt||o===it?o=nt:(o=at,i=void 0);let d=o===at&&e[t+1].startsWith(`/>`)?` `:``;a+=o===nt?n+Ye:l>=0?(r.push(s),n.slice(0,l)+Ke+n.slice(l)+qe+d):n+qe+(l===-2?t:d)}return[ft(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},mt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=pt(t,n);if(this.el=e.createElement(l,r),dt.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=dt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ke)){let t=u[o++],n=i.getAttribute(e).split(qe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?yt:r[1]===`?`?bt:r[1]===`@`?xt:vt}),i.removeAttribute(e)}else e.startsWith(qe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ct.test(i.tagName)){let e=i.textContent.split(qe),t=e.length-1;if(t>0){i.textContent=We?We.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ze()),dt.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ze())}}}else if(i.nodeType===8){if(i.data===Je)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(qe,e+1))!==-1;)c.push({type:7,index:a}),e+=qe.length-1}}a++}}static createElement(e,t){let n=Xe.createElement(`template`);return n.innerHTML=e,n}};function ht(e,t,n=e,r){if(t===lt)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Qe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ht(e,i._$AS(e,t.values),i,r)),t}var gt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Xe).importNode(t,!0);dt.currentNode=r;let i=dt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new _t(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new St(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=dt.nextNode(),a++)}return dt.currentNode=Xe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},_t=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ht(this,e,t),Qe(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==lt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?et(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&Qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=mt.createElement(ft(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new gt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ut.get(e.strings);return t===void 0&&ut.set(e.strings,t=new mt(e)),t}k(t){$e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ze()),this.O(Ze()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ue(e).nextSibling;Ue(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ht(this,e,t,0),a=!Qe(e)||e!==this._$AH&&e!==lt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ht(this,r[n+o],t,o),s===lt&&(s=this._$AH[o]),a||=!Qe(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},yt=class extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},bt=class extends vt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},xt=class extends vt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ht(this,e,t,0)??C)===lt)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},St=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ht(this,e)}},Ct=He.litHtmlPolyfillSupport;Ct?.(mt,_t),(He.litHtmlVersions??=[]).push(`3.3.3`);var wt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new _t(t.insertBefore(Ze(),e),e,void 0,n??{})}return i._$AI(e),i},Tt=globalThis,Et=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lt}};Et._$litElement$=!0,Et.finalized=!0,Tt.litElementHydrateSupport?.({LitElement:Et});var Dt=Tt.litElementPolyfillSupport;Dt?.({LitElement:Et}),(Tt.litElementVersions??=[]).push(`4.2.2`);var Ot=`modulepreload`,kt=function(e,t){return new URL(e,t).href},At={},jt=function(e){return e.pathname.endsWith(`.css`)},Mt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},w=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},i=function(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)},a,o=document.querySelector(`meta[property=csp-nonce]`),s=o?.nonce||o?.getAttribute(`nonce`);r=e(t.map(e=>{e=kt(e,n);let t=i(e),r=jt(t);return Mt(At,t.href,()=>{if(a===void 0){a={all:new Set,styles:new Set};let e=document.getElementsByTagName(`link`);for(let t=e.length-1;t>=0;t--){let n=e[t];a.all.add(n.href),n.rel===`stylesheet`&&a.styles.add(n.href)}}if((r?a.styles:a.all).has(t.href))return;let e=document.createElement(`link`);if(e.rel=r?`stylesheet`:Ot,r||(e.as=`script`),e.crossOrigin=``,e.href=t.href,s&&e.setAttribute(`nonce`,s),document.head.appendChild(e),r)return new Promise((n,r)=>{let i=a=>{e.removeEventListener(`load`,i),e.removeEventListener(`error`,i),a.type===`error`?r(Error(`Unable to preload CSS for ${t}`)):n(a)};e.addEventListener(`load`,i),e.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Nt=`false`,Pt=`false`,Ft=Nt===`true`,It=Pt===`true`;function Lt(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,Ft||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await w(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!It){if(Ft)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`./sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}var Rt=[`pt-BR`,`en`,`es-ES`,`pl`,`uk`,`ja`,`zh-CN`,`ko`,`ar`,`ht`];function zt(e){let[t=``,...n]=e.trim().replaceAll(`_`,`-`).split(`-`),r=``,i=``;for(let e of n){if(e.length===1)break;r===``&&i===``&&/^[a-z]{4}$/i.test(e)?r=e[0]?.toUpperCase()+e.slice(1).toLowerCase():i===``&&/^([a-z]{2}|\d{3})$/i.test(e)&&(i=e.toUpperCase())}return{lingua:t.toLowerCase(),escrita:r,regiao:i}}function Bt(e){let t=e.trim().replaceAll(`_`,`-`).toLowerCase(),n=Rt.find(e=>e.toLowerCase()===t);if(n!==void 0)return n;let{lingua:r}=zt(e);return Rt.find(e=>e.split(`-`)[0]===r)??`en`}new Set(`AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PT PY SA SG SV TH TT TW UM US VE VI WS YE ZA ZW`.split(` `)),new Set(`AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY`.split(` `)),{...Object.fromEntries(`BH DZ EG IL IQ JO KW LY OM QA SA SD SY YE`.split(` `).map(e=>[e,[5,6]]))};function Vt(e,t){let n=t===void 0?String(Math.abs(e)):Math.abs(e).toFixed(t),[r=`0`,i=``]=n.split(`.`);return{n:Number(n),i:Number(r),v:i.length,f:Number(i||`0`)}}var Ht=({i:e,v:t})=>t===0&&e!==0&&e%1e6==0,Ut=(e,t,n)=>e>=t&&e<=n,Wt={pt:e=>e.i===0||e.i===1?`one`:Ht(e)?`many`:`other`,en:({i:e,v:t})=>e===1&&t===0?`one`:`other`,es:e=>e.n===1?`one`:Ht(e)?`many`:`other`,pl:({i:e,v:t})=>t===0?e===1?`one`:Ut(e%10,2,4)&&!Ut(e%100,12,14)?`few`:`many`:`other`,uk:({i:e,v:t})=>t===0?e%10==1&&e%100!=11?`one`:Ut(e%10,2,4)&&!Ut(e%100,12,14)?`few`:`many`:`other`,ar:({n:e})=>e===0?`zero`:e===1?`one`:e===2?`two`:Number.isInteger(e)&&Ut(e%100,3,10)?`few`:Number.isInteger(e)&&Ut(e%100,11,99)?`many`:`other`,ja:()=>`other`,zh:()=>`other`,ko:()=>`other`,ht:()=>`other`};function Gt(e,t,n){let r=Wt[zt(e).lingua]??Wt[zt(Bt(e)).lingua];return r===void 0?`other`:r(Vt(t,n))}var Kt=`pt-BR`;function qt(e,t){return e===0?t.zero??t.other:t[Gt(Kt,e)]??t.other}var Jt={app:{carregando:`Carregando...`,acaoFalhou:`Não foi possível concluir. Tente de novo.`},modulos:{anotacoes:`Anotações`,calendario:`Calendário`,tutorial:`Tutorial`,sobre:`Sobre`},acoes:{voltar:`Voltar`,pularParaConteudo:`Pular para o conteúdo`,fechar:`Fechar`,cancelar:`Cancelar`,confirmar:`Confirmar`,salvar:`Salvar`,criar:`Criar`,renomear:`Renomear`,excluir:`Excluir`,editar:`Editar`,obrigatorio:`Preencha este campo.`},boasVindas:{voltar:`Voltar`,proximo:`Próximo`,passo:(e,t)=>`Passo ${e} de ${t}`},instalacao:{instalar:`Instalar na tela inicial`,instalarIos:`Como instalar no iPhone`},painel:{semEventos:`Nada marcado para hoje.`},anotacoes:{nova:`Nova anotação`,todas:`Todas`,arquivadas:`Arquivadas`,semAnotacoes:`Nenhuma anotação por aqui. Toque em + para criar a primeira.`,semArquivadas:`Nada arquivado.`,semTitulo:`(sem título)`,semPasta:`Sem pasta`,salvando:`Salvando...`,fixar:`Fixar`,desafixar:`Desafixar`,arquivar:`Arquivar`,excluir:`Excluir anotação`,excluida:`Anotação excluída.`},pasta:{nova:`Nova pasta`,novaTexto:`Como quer chamar a pasta?`,placeholder:`Nome da pasta`,renomear:`Renomear pasta`,excluir:`Excluir pasta`,excluirTexto:`As anotações dela voltam para “Sem pasta”.`,erroVazio:`Dê um nome à pasta.`},leitura:{apresentar:`Apresentar (rolagem automática)`,ler:`Ler em voz alta`,pausarLeitura:`Pausar leitura`,retomarLeitura:`Retomar leitura`,pausar:`Pausar`,continuar:`Continuar`,maisDevagar:`Mais devagar`,maisRapido:`Mais rápido`,velocidade:e=>`Vel. ${e}`},calendario:{vista:`Visualização`,vistas:{dia:`Dia`,semana:`Semana`,mes:`Mês`,ano:`Ano`,agenda:`Agenda`},meses:[`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`],semana:[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`],diasDaSemana:[`Segunda`,`Terça`,`Quarta`,`Quinta`,`Sexta`,`Sábado`,`Domingo`],semanaInicial:[`S`,`T`,`Q`,`Q`,`S`,`S`,`D`],mes:`Mês`,ano:`Ano`,anterior:`Período anterior`,proximo:`Próximo período`,hoje:`Hoje`,novoEvento:`Novo evento`,editarEvento:`Editar evento`,novoAs:(e,t)=>`Novo evento em ${e}, ${t}`,novoEm:e=>`Novo evento em ${e}`,dicaDoArraste:`Arraste para mudar o horário ou o dia, e puxe a borda de baixo para mudar a duração. No teclado: Alt+↑/↓ move, Alt+Shift+↑/↓ muda a duração.`,titulo:`Título`,tipo:`Tipo`,diaInteiro:`Dia inteiro`,dataInicio:`Data de início`,horaInicio:`Hora de início`,dataFim:`Data de fim`,horaFim:`Hora de fim`,descricao:`Descrição`,descricaoPlaceholder:`Detalhes (opcional)...`,eventoSalvo:`Evento salvo.`,excluirEvento:`Excluir evento`,eventoExcluido:`Evento excluído.`,eventos:e=>qt(e,{one:`${e} evento`,other:`${e} eventos`}),semEventos:`Nenhum evento nesta semana.`,tipos:`Tipos de evento`,novoTipo:`Novo tipo`,tipoNome:`Nome`,cor:`Cor`,icone:`Ícone`,tipoSemNome:`Sem nome`,excluirTipo:`Excluir tipo`,tipoEmUsoTitulo:`Tipo em uso`,tipoEmUsoTexto:`Este tipo tem eventos e não pode ser excluído.`,dataInvalida:`A data de início não é uma data válida.`,eventoNaoSalvo:`O evento não pôde ser salvo. Confira os campos e tente de novo.`,eventoNaoExcluido:`O evento não pôde ser excluído.`,eventoNaoMovido:`O novo horário não pôde ser gravado, e o evento voltou para onde estava.`,tipoNaoSalvo:`O tipo não pôde ser salvo.`,tipoNaoExcluido:`O tipo não pôde ser excluído. Ele pode ter ganhado eventos agora há pouco.`},perfil:{abaSobre:`Sobre você`,abaAcessibilidade:`Acessibilidade`,idiomaSecao:`Idioma`,idioma:`Idioma do aplicativo`,congregacao:`Congregação`,telefone:`Telefone`,email:`E-mail`},acessibilidade:{normas:`O app segue as Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2, nível AA), o padrão internacional do W3C, e a Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei nº 13.146/2015), que garante o acesso à informação e à comunicação também nos meios digitais.`,visao:`Visão`,movimentoSecao:`Movimento e atenção`,toqueSecao:`Toque e teclado`,avisosSecao:`Audição`,sistemaSecao:`O que o seu aparelho já oferece`,texto:`Tamanho do texto`,textoAjuda:`Para baixa visão ou vista cansada. Aumenta o texto e tudo em volta dele, sem precisar de zoom e sem rolar para os lados.`,grau:e=>e===100?`Padrão`:`${e}%`,tema:`Tema escuro`,temaAjuda:`Para sensibilidade à luz, enxaqueca ou uso à noite. A lua da barra de cima faz o mesmo.`,contraste:`Contraste reforçado`,contrasteAjuda:`Para baixa visão e daltonismo. O texto secundário fica tão escuro quanto o principal, e as bordas de campos e cartões ficam marcadas.`,sublinhar:`Sublinhar os links`,sublinharAjuda:`Para quem não distingue bem as cores. O link deixa de depender da cor para ser achado.`,espacamento:`Espaçar letras e palavras`,espacamentoAjuda:`Para dislexia e baixa visão. Afasta letras e palavras na medida que a WCAG recomenda.`,movimento:`Reduzir movimento`,movimentoSistema:`O seu aparelho já pede menos movimento, e o app obedece.`,foco:`Destacar onde está o foco`,focoAjuda:`Para quem usa teclado, controle ou acionador. O contorno do item selecionado fica mais grosso e mais fácil de achar.`,alvos:`Botões maiores`,alvosAjuda:`Para tremor, pouca precisão no toque ou dedos grandes. Botões e campos passam a ter 48 pixels de altura.`,vibrar:`Vibrar nos avisos de erro`,vibrarAjuda:`Para pessoas surdas ou com pouca audição, e para quem deixa o celular no silencioso. O aviso na tela chega junto com uma vibração.`,semVibracao:`Este aparelho não deixa o navegador vibrar (é o caso do iPhone). Os avisos continuam aparecendo na tela, com ícone e cor.`,leitorTitulo:`Leitor de tela`,fonteTitulo:`A letra do app`,zoomTitulo:`Zoom, tema e movimento do sistema`,zoomTexto:`O zoom com dois dedos funciona em toda tela, e o app segue o modo escuro e o “reduzir movimento” que você já tiver ligado no aparelho.`,restaurar:`Voltar tudo ao padrão`,restaurado:`As preferências de acessibilidade voltaram ao padrão.`},sobre:{seloOffline:`100% offline`,seloPrivado:`Privado`,seloSemRastreio:`Sem rastreadores`,seloAcessivel:`Acessível`,acessibilidadeTitulo:`Feito para todos`,email:`luizcmarin@gmail.com`},backup:{titulo:`Backup e restauração`,resumo:`O que vai no arquivo`,registros:`Registros`,tamanho:`Tamanho`,chaves:`Preferências`,baixar:`Baixar backup`,gerando:`Gerando...`,baixado:e=>`Backup gerado: ${e}. Guarde o arquivo em lugar seguro.`,falhou:`Não foi possível gerar o backup. Tente de novo.`,restaurarTitulo:`Restaurar`,escolher:`Escolher arquivo`,escolhido:`Arquivo lido`,quando:`Gerado em`,lendo:`Lendo...`,confirmarTitulo:`Restaurar este backup?`,confirmarTexto:(e,t)=>`${qt(e,{one:`1 registro`,other:`${e} registros`})}, gerados em ${t}, vão substituir o que está neste aparelho. Não há como desfazer.`,restaurado:e=>`${qt(e,{one:`1 registro restaurado`,other:`${e} registros restaurados`})}. Recarregando...`,restauracaoFalhou:`A restauração falhou. Nada foi alterado.`,desconhecidos:e=>`O arquivo traz dados que esta versão não conhece e vai ignorar: ${e}.`,maisNovo:`Este backup veio de uma versão mais nova do app. Atualize o app neste aparelho e tente de novo.`},emBreve:{titulo:`Em breve`,voltar:`Voltar ao início`},erro:{telaNaoVeioRecarregar:`Recarregar`,cargaTentarDeNovo:`Tentar de novo`},armazenamento:{memoriaOrigemInsegura:`Este endereço não é uma origem confiável: os dados ficam num armazenamento de reserva. Abra o app por HTTPS para usar o armazenamento definitivo.`,memoriaIndisponivel:`O navegador não liberou o armazenamento definitivo neste aparelho: os dados ficam num armazenamento de reserva e podem se perder. Verifique o espaço livre e as permissões de dados do site.`,apagarTudo:`Apagar todos os dados deste aparelho`,apagarTudoTitulo:`Apagar tudo deste aparelho?`,apagarTudoConfirmar:`Apagar tudo`,apagarTudoFalhou:`Não foi possível apagar tudo. Tente de novo.`},atualizacao:{acao:`Recarregar`},convite:{tile:`Compartilhar`,tileResumo:`Convide alguém`,dica:`Aponte a câmera para o código, ou use um dos botões abaixo.`,whatsapp:`WhatsApp`,compartilhar:`Compartilhar`,copiar:`Copiar`,copiado:`Convite copiado. É só colar onde quiser.`,naoCopiou:`Não foi possível copiar o convite.`},guia:{lido:`Lido`,lidos:(e,t)=>`Lidos: ${e} de ${t}`,leitura:e=>`${e} min de leitura`,tudoLido:`Você leu o Tutorial inteiro!`,abrir:e=>`Abrir ${e}`,todos:`Todos os tópicos`,proximo:`Próximo tópico`},rodape:{direitos:e=>`© ${e} Luiz Marin`,termos:`Termos de uso`,privacidade:`Privacidade`,contato:`Contato`},novidades:{titulo:`O que há de novo`,abrir:`Abrir`,entendi:`Entendi`}};function Yt(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function Xt(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getHours()).padStart(2,`0`),r=String(t.getMinutes()).padStart(2,`0`);return`${Yt(t)}T${n}:${r}`}function Zt(e=new Date){return Yt(e).slice(0,7)}function Qt(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number);return Yt(new Date(n,r-1,i+t))}function $t(e,t){return new Date(e,t,0).getDate()}function en(e,t){let[n=0,r=1]=e.split(`-`).map(Number),i=Math.min(Math.max(1,Math.trunc(t)),$t(n,r));return`${e}-${String(i).padStart(2,`0`)}`}function tn(e){let[t=0,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getDay()}function nn(e,t){return Qt(e,-((tn(e)-t+7)%7))}function rn(e,t){let n=nn(e,t);return Array.from({length:7},(e,t)=>Qt(n,t))}var an=1;function on(e,t){let n=Yt(t);if(e===`dia`)return{de:n,ate:n};if(e===`semana`||e===`agenda`){let e=rn(n,an);return{de:e[0]??n,ate:e[6]??n}}if(e===`mes`){let e=Zt(t);return{de:`${e}-01`,ate:en(e,31)}}let r=t.getFullYear();return{de:`${r}-01-01`,ate:`${r}-12-31`}}var sn={decimal:`,`,milhar:`.`};function cn(e,t,n,r){if(!Number.isFinite(e))return String(e);let i=e<0,a=Math.abs(e),o=Math.round(Number(`${a}e${n}`)),s=Number.isFinite(o)?String(o).padStart(n+1,`0`):a.toFixed(n).replace(`.`,``),c=n===0?s:s.slice(0,-n),l=n===0?``:s.slice(-n);for(;l.length>t&&l.endsWith(`0`);)l=l.slice(0,-1);let u=c.length<(r.agrupamentoMinimo??4)?c:c.replace(/\B(?=(\d{3})+(?!\d))/g,r.milhar),d=l===``?u:`${u}${r.decimal}${l}`;return i&&/[1-9]/.test(d)?`-${d}`:d}var ln=[`B`,`KB`,`MB`,`GB`,`TB`];function un(e,t=sn){if(!(e>0))return`0 B`;let n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),ln.length-1),r=n===0?0:1;return`${cn(e/1024**n,r,r,t)} ${ln[n]}`}function dn(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function fn(e){"@babel/helpers - typeof";return fn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},fn(e)}function pn(e,t){if(fn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(fn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function mn(e){var t=pn(e,`string`);return fn(t)==`symbol`?t:t+``}function T(e,t,n){return(t=mn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=`\xA0`;function hn(e,t){return e.startsWith(`-`)?`-${t}${e.slice(1)}`:t+e}function gn(e,t){return`${e}${E}${t}`}var D=(e,t)=>`${String(e).padStart(2,`0`)}:${t}`,_n=(e,t)=>`${e}:${t}`,vn=e=>e%12||12,O=(e,t)=>(n,r)=>`${vn(n)}:${r}${E}${n<12?e:t}`,yn=(e,t,n)=>(r,i)=>`${r<12?e:t}${n}${vn(r)}:${i}`,k=(e,t,n=``)=>e===void 0?``:`${t}${e}${n}`,bn=e=>Array.from({length:12},(t,n)=>`${n+1}${e}`),xn={"pt-BR":{pontuacao:{decimal:`,`,milhar:`.`},porcento:e=>`${e}%`,moeda:{simbolo:`R$`,depois:!1,casas:2,escrever:(e,t)=>`${t} ${e}`},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:D,entreDataEHora:`, `,hora12:O(`AM`,`PM`),hora24:D,iniciais:`STQQSSD`,porExtenso:(e,t,n)=>`${e} de ${t} de ${n}`,meses:[`janeiro`,`fevereiro`,`março`,`abril`,`maio`,`junho`,`julho`,`agosto`,`setembro`,`outubro`,`novembro`,`dezembro`],mesesCurtos:[`jan.`,`fev.`,`mar.`,`abr.`,`mai.`,`jun.`,`jul.`,`ago.`,`set.`,`out.`,`nov.`,`dez.`],diasDaSemana:[`segunda-feira`,`terça-feira`,`quarta-feira`,`quinta-feira`,`sexta-feira`,`sábado`,`domingo`],longa:(e,t,n,r)=>`${e}, ${t} de ${n}${k(r,` de `)}`,comMes:(e,t,n)=>`${e} de ${t} de ${n}`,mesEAno:(e,t)=>`${e} de ${t}`,faixa:(e,t,n,r)=>`${e} – ${t} de ${n} de ${r}`},en:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`$`,depois:!1,casas:2,escrever:hn},data:(e,t,n)=>`${t}/${e}/${n}`,diaMes:(e,t)=>`${t}/${e}`,hora:O(`AM`,`PM`),entreDataEHora:`, `,hora12:O(`AM`,`PM`),hora24:D,iniciais:`MTWTFSS`,porExtenso:(e,t,n)=>`${t} ${e}, ${n}`,meses:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],mesesCurtos:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],diasDaSemana:[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],longa:(e,t,n,r)=>`${e}, ${n} ${t}${k(r,`, `)}`,comMes:(e,t,n)=>`${t} ${e}, ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${n} ${e} – ${t}, ${r}`},"es-ES":{pontuacao:{decimal:`,`,milhar:`.`,agrupamentoMinimo:5},porcento:e=>`${e}${E}%`,moeda:{simbolo:`€`,depois:!0,casas:2,escrever:gn},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:_n,entreDataEHora:`, `,hora12:O(`a.${E}m.`,`p.${E}m.`),hora24:_n,iniciais:`LMXJVSD`,porExtenso:(e,t,n)=>`${e} de ${t} de ${n}`,meses:[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`],mesesCurtos:[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sept`,`oct`,`nov`,`dic`],diasDaSemana:[`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`,`domingo`],longa:(e,t,n,r)=>`${e}, ${t} de ${n}${k(r,` de `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} de ${t}`,mesCurtoEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}–${t} ${n} ${r}`},pl:{pontuacao:{decimal:`,`,milhar:E,agrupamentoMinimo:5},porcento:e=>`${e}%`,moeda:{simbolo:`zł`,depois:!0,casas:2,escrever:gn},data:(e,t,n)=>`${e}.${t}.${n}`,diaMes:(e,t)=>`${e}.${t}`,hora:D,entreDataEHora:`, `,hora12:O(`AM`,`PM`),hora24:D,iniciais:`PWŚCPSN`,porExtenso:(e,t,n)=>`${e} ${t} ${n}`,meses:[`styczeń`,`luty`,`marzec`,`kwiecień`,`maj`,`czerwiec`,`lipiec`,`sierpień`,`wrzesień`,`październik`,`listopad`,`grudzień`],mesesNaData:[`stycznia`,`lutego`,`marca`,`kwietnia`,`maja`,`czerwca`,`lipca`,`sierpnia`,`września`,`października`,`listopada`,`grudnia`],mesesCurtos:[`sty`,`lut`,`mar`,`kwi`,`maj`,`cze`,`lip`,`sie`,`wrz`,`paź`,`lis`,`gru`],diasDaSemana:[`poniedziałek`,`wtorek`,`środa`,`czwartek`,`piątek`,`sobota`,`niedziela`],longa:(e,t,n,r)=>`${e}, ${t} ${n}${k(r,` `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}–${t} ${n} ${r}`},uk:{pontuacao:{decimal:`,`,milhar:E},porcento:e=>`${e}%`,moeda:{simbolo:`₴`,depois:!0,casas:2,escrever:gn},data:(e,t,n)=>`${e}.${t}.${n}`,diaMes:(e,t)=>`${e}.${t}`,hora:D,entreDataEHora:`, `,hora12:O(`дп`,`пп`),hora24:D,iniciais:`ПВСЧПСН`,porExtenso:(e,t,n)=>`${e} ${t} ${n}${E}р.`,meses:[`січень`,`лютий`,`березень`,`квітень`,`травень`,`червень`,`липень`,`серпень`,`вересень`,`жовтень`,`листопад`,`грудень`],mesesNaData:[`січня`,`лютого`,`березня`,`квітня`,`травня`,`червня`,`липня`,`серпня`,`вересня`,`жовтня`,`листопада`,`грудня`],mesesCurtos:[`січ.`,`лют.`,`бер.`,`квіт.`,`трав.`,`черв.`,`лип.`,`серп.`,`вер.`,`жовт.`,`лист.`,`груд.`],diasDaSemana:[`понеділок`,`вівторок`,`середа`,`четвер`,`пʼятниця`,`субота`,`неділя`],longa:(e,t,n,r)=>`${e}, ${t} ${n}${k(r,` `,`${E}р.`)}`,comMes:(e,t,n)=>`${e} ${t} ${n}${E}р.`,mesEAno:(e,t)=>`${e} ${t}${E}р.`,faixa:(e,t,n,r)=>`${e}–${t} ${n} ${r}${E}р.`},ja:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`￥`,depois:!1,casas:0,escrever:hn},data:(e,t,n)=>`${n}/${t}/${e}`,diaMes:(e,t)=>`${t}/${e}`,hora:_n,entreDataEHora:` `,hora12:yn(`午前`,`午後`,``),hora24:_n,iniciais:`月火水木金土日`,porExtenso:(e,t,n)=>`${n}年${t}${e}日`,meses:bn(`月`),mesesCurtos:bn(`月`),diasDaSemana:[`月曜日`,`火曜日`,`水曜日`,`木曜日`,`金曜日`,`土曜日`,`日曜日`],longa:(e,t,n,r)=>`${k(r,``,`年`)}${n}${t}日${e}`,comMes:(e,t,n)=>`${n}年${t}${e}日`,mesEAno:(e,t)=>`${t}年${e}`,faixa:(e,t,n,r)=>`${r}年${n}${e}日～${t}日`},"zh-CN":{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`¥`,depois:!1,casas:2,escrever:hn},data:(e,t,n)=>`${n}/${t}/${e}`,diaMes:(e,t)=>`${t}/${e}`,hora:D,entreDataEHora:` `,hora12:yn(`上午`,`下午`,``),hora24:D,iniciais:`一二三四五六日`,porExtenso:(e,t,n)=>`${n}年${t}${e}日`,meses:bn(`月`),mesesCurtos:bn(`月`),diasDaSemana:[`星期一`,`星期二`,`星期三`,`星期四`,`星期五`,`星期六`,`星期日`],longa:(e,t,n,r)=>`${k(r,``,`年`)}${n}${t}日${e}`,comMes:(e,t,n)=>`${n}年${t}${e}日`,mesEAno:(e,t)=>`${t}年${e}`,faixa:(e,t,n,r)=>`${r}年${n}${e}日至${t}日`},ko:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`₩`,depois:!1,casas:0,escrever:hn},data:(e,t,n)=>`${n}. ${t}. ${e}.`,diaMes:(e,t)=>`${t}. ${e}.`,hora:yn(`오전`,`오후`,` `),entreDataEHora:` `,hora12:yn(`오전`,`오후`,` `),hora24:D,iniciais:`월화수목금토일`,porExtenso:(e,t,n)=>`${n}년 ${t} ${e}일`,meses:bn(`월`),mesesCurtos:bn(`월`),diasDaSemana:[`월요일`,`화요일`,`수요일`,`목요일`,`금요일`,`토요일`,`일요일`],longa:(e,t,n,r)=>`${k(r,``,`년 `)}${n} ${t}일 ${e}`,comMes:(e,t,n)=>`${n}년 ${t} ${e}일`,mesEAno:(e,t)=>`${t}년 ${e}`,faixa:(e,t,n,r)=>`${r}년 ${n} ${e}일~${t}일`},ar:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`ج.م.`,depois:!0,casas:2,escrever:gn},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:O(`ص`,`م`),entreDataEHora:`، `,hora12:O(`ص`,`م`),hora24:D,iniciais:`نثرخجسح`,porExtenso:(e,t,n)=>`${e} ${t} ${n}`,meses:[`يناير`,`فبراير`,`مارس`,`أبريل`,`مايو`,`يونيو`,`يوليو`,`أغسطس`,`سبتمبر`,`أكتوبر`,`نوفمبر`,`ديسمبر`],mesesCurtos:[`يناير`,`فبراير`,`مارس`,`أبريل`,`مايو`,`يونيو`,`يوليو`,`أغسطس`,`سبتمبر`,`أكتوبر`,`نوفمبر`,`ديسمبر`],diasDaSemana:[`الاثنين`,`الثلاثاء`,`الأربعاء`,`الخميس`,`الجمعة`,`السبت`,`الأحد`],longa:(e,t,n,r)=>`${e}، ${t} ${n}${k(r,` `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}–${t} ${n} ${r}`},ht:{pontuacao:{decimal:`,`,milhar:E},porcento:e=>`${e}${E}%`,moeda:{simbolo:`G`,depois:!0,casas:2,escrever:gn},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:D,entreDataEHora:` `,hora12:O(`AM`,`PM`),hora24:D,iniciais:`LMMJVSD`,porExtenso:(e,t,n)=>`${e} ${t} ${n}`,meses:[`janvye`,`fevriye`,`mas`,`avril`,`me`,`jen`,`jiyè`,`out`,`septanm`,`oktòb`,`novanm`,`desanm`],mesesCurtos:[`jan`,`fev`,`mas`,`avr`,`me`,`jen`,`jiy`,`out`,`sep`,`okt`,`nov`,`des`],diasDaSemana:[`lendi`,`madi`,`mèkredi`,`jedi`,`vandredi`,`samdi`,`dimanch`],longa:(e,t,n,r)=>`${e} ${t} ${n}${k(r,` `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}–${t} ${n} ${r}`}};function Sn(e){let[t=0,n=1,r=1]=e.split(`-`).map(Number);return[t,n,r]}function Cn(e){let[t,n,r]=e.split(`-`);return t===void 0||n===void 0||r===void 0?null:[t,n,r.slice(0,2)]}var wn=e=>e===void 0||e===0||Number.isNaN(e),Tn=e=>(tn(e)+6)%7,En=class{constructor(e){T(this,`c`,void 0),this.c=e}decimal(e,t,n){return cn(e,t,Math.max(t,n),this.c.pontuacao)}numero(e){return this.decimal(e,0,3)}enxuto(e){return cn(Number(e)||0,0,2,{decimal:this.c.pontuacao.decimal,milhar:``})}porcento(e,t=1,n=0){return this.c.porcento(this.decimal(e,n,t))}comPorcento(e){return this.c.porcento(e)}tamanho(e){return un(e,this.c.pontuacao)}numeroCom(e,t={}){if(!Number.isFinite(e))return String(e);let n=t.minimoDeCasas??0,r=Math.max(n,t.maximoDeCasas??Math.max(3,n)),i=e;if(t.minimoSignificativo!==void 0||t.maximoSignificativo!==void 0){let a=t.maximoSignificativo??21,o=Math.min(t.minimoSignificativo??1,a);i=Number(e.toPrecision(a));let s=Math.abs(i),c=s===0?1:Math.floor(Math.log10(s))+1;r=Math.max(0,a-c),n=Math.min(r,Math.max(0,o-c))}let{decimal:a,milhar:o,agrupamentoMinimo:s=4}=this.c.pontuacao,c=cn(i,n,r,{decimal:a,milhar:``}),l=c.startsWith(`-`),[u=`0`,d]=(l?c.slice(1):c).split(a),f=u.padStart(t.minimoDeInteiros??1,`0`),p=t.agrupar===!1||f.length<s?f:f.replace(/\B(?=(\d{3})+(?!\d))/g,o);return`${l?`-`:``}${p}${d===void 0?``:`${a}${d}`}`}moeda(){let{simbolo:e,depois:t,casas:n}=this.c.moeda;return{simbolo:e,depois:t,casas:n}}comSimbolo(e,t){return this.c.moeda.escrever(e,t)}dinheiroDeCentavos(e){let{simbolo:t,casas:n}=this.c.moeda;return this.comSimbolo(this.decimal(Number(e??0)/100,n,n),t)}dinheiroNaMoeda(e,t,n=2){return this.comSimbolo(this.decimal(Number(e??0)/100,n,n),t)}campoDeCentavos(e){if(e===void 0||e===0)return``;let{casas:t}=this.c.moeda;return this.decimal(e/100,t,t)}centavosDoCampo(e){let t=Number(e.replace(/\D/g,``));return this.c.moeda.casas===0?t*100:t}mascaraDeDinheiro(e){return this.campoDeCentavos(this.centavosDoCampo(e))}mes(e){return this.c.meses[e-1]??``}mesCurto(e){return this.c.mesesCurtos[e-1]??``}mesNaData(e){return(this.c.mesesNaData??this.c.meses)[e-1]??``}diaDaSemana(e){return this.c.diasDaSemana[e-1]??``}inicial(e){return[...this.c.iniciais][e-1]??``}diaDaSemanaDe(e){return this.diaDaSemana(Tn(e)+1)}inicialDe(e){return this.inicial(Tn(e)+1)}hora(e,t,n=`idioma`){return n===`12`?this.c.hora12(e,t):n===`24`?this.c.hora24(e,t):this.c.hora(e,t)}horaDe(e,{segundos:t=!1,ciclo:n=`idioma`}={}){let r=String(e.getMinutes()).padStart(2,`0`),i=String(e.getSeconds()).padStart(2,`0`);return this.hora(e.getHours(),t?`${r}:${i}`:r,n)}dataDeISO(e){if(e===void 0||e===``)return``;let t=Cn(e);return t===null?e:this.c.data(t[2],t[1],t[0])}data(e){return wn(e)?``:this.dataDeISO(Yt(e))}diaMes(e){if(e===void 0||e===``)return``;let t=Cn(e);return t===null?e:this.c.diaMes(t[2],t[1])}dataHora(e){if(wn(e))return``;let t=Xt(e);return this.prazo(t.slice(0,16))}prazo(e,t=`idioma`){if(e===void 0||e===``)return``;let[n=``,r=``]=e.split(`T`),i=this.dataDeISO(n);if(r===``)return i;let[a=`0`,o=`00`]=r.split(`:`);return`${i}${this.c.entreDataEHora}${this.hora(Number(a),o.slice(0,2),t)}`}dataLonga(e,{comAno:t=!1}={}){let[n,r,i]=Sn(e),a=this.diaDaSemanaDe(e),o=this.mesNaData(r);return t?this.c.longa(a,i,o,n):this.c.longa(a,i,o)}porExtenso(e){let[t,n,r]=Sn(e);return this.c.porExtenso(r,this.mesNaData(n),t)}comMes(e){let[t,n,r]=Sn(e);return this.c.comMes(r,this.mesCurto(n),t)}dataComMes(e){return wn(e)?``:this.comMes(Yt(e))}dataNoEstilo(e,t=`short`){return t===`medium`?this.comMes(e):t===`long`?this.porExtenso(e):t===`full`?this.dataLonga(e,{comAno:!0}):this.dataDeISO(e)}comHora(e,t,n=`idioma`){let[r=`0`,...i]=t.split(`:`);return`${e}${this.c.entreDataEHora}${this.hora(Number(r),i.join(`:`),n)}`}mesEAno(e,t){return this.c.mesEAno(this.mes(t),e)}mesCurtoEAno(e,t){return(this.c.mesCurtoEAno??this.c.mesEAno)(this.mesCurto(t),e)}faixa(e,t){let[n,r,i]=Sn(e),[a,o,s]=Sn(t);return n===a&&r===o?this.c.faixa(i,s,this.mesCurto(r),n):`${this.comMes(e)} – ${this.comMes(t)}`}periodo(e,t){if(e===`dia`)return this.dataLonga(Yt(t),{comAno:!0});if(e===`semana`||e===`agenda`){let{de:e,ate:n}=on(`semana`,t);return this.faixa(e,n)}let[n,r]=Sn(Yt(t));return e===`mes`?this.mesEAno(n,r):String(n)}},Dn=new Map;function On(e){let t=Bt(e),n=Dn.get(t);return n===void 0&&(n=new En(xn[t]),Dn.set(t,n)),n}On(`pt-BR`);var kn=`_|-|‐‑|‒|–|—|―|〜|・|,|、|;|:|!|¡|?|¿|.|…|。|·|'‘’‚|‹|›|"“”„|«|»|(|)|[|]|{|}|〈|〉|《|》|「|」|『|』|【|】|§|¶|@|*|/|\\|&|#|%|‰|†|‡|•|′|″|\`|´|^|¯|¨|¸|°|©|®|+|±|÷|×|<|=|>|¬|||¦|~|¤|¢|$|£|¥|฿|₩|₪|€|₱|₴|₹|₺|₽`;(()=>{let e=new Map;return kn.split(`|`).forEach((t,n)=>{for(let r of t===`|`?[`|`]:[...t])e.set(r,n)}),e.set(`|`,kn.split(`|`).indexOf(`|`)),e})();var An={Espaco:0,Pontuacao:1,Simbolo:2,Digito:3,Latina:10,Grega:11,Cirilica:12,Hebraica:13,Arabe:14,Outra:15,Hangul:16,Kana:17,Ideograma:18};An.Cirilica,An.Arabe,An.Ideograma,An.Hangul,An.Ideograma,An.Latina,An.Kana,An.Ideograma,(()=>{let e={あ:`あかさたなはまやらわがざだばぱぁゃゎ`,い:`いきしちにひみりぎじぢびぴぃゐ`,う:`うくすつぬふむゆるぐずづぶぷぅっゅゔ`,え:`えけせてねへめれげぜでべぺぇゑ`,お:`おこそとのほもよろをごぞどぼぽぉょ`},t=new Map;for(let[n,r]of Object.entries(e))for(let e of r)t.set(e,n);return t})();var jn=`#ffffff`,Mn=`#0f1115`;function Nn(e){let t=()=>document.documentElement.classList.contains(`kk-theme-dark`)?`escuro`:`claro`,n=t=>{let n=t===`escuro`,r=document.documentElement.classList;r.toggle(`kk-theme-dark`,n),r.toggle(`kk-theme-light`,!n),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,n?Mn:jn);try{localStorage.setItem(e,t)}catch{}};return{temaAtual:t,aplicarTema:n,alternarTema:()=>{let e=t()===`escuro`?`claro`:`escuro`;return n(e),e}}}var{temaAtual:Pn,alternarTema:Fn}=Nn(`vendas_tema`),In={projetos:{loja:{versao:`0.0.54`,build:`2026-11-24T19:49:11.047Z`},bioma:{versao:`1.0.0`,build:`2026-11-24T19:59:11.732Z`},admin:{versao:`1.0.258`,build:`2026-11-24T19:59:11.732Z`},note:{versao:`1.1.351`,build:`2026-11-24T19:55:22.915Z`},ui:{versao:`1.0.244`,build:`2026-11-24T19:48:46.426Z`},dev:{versao:`1.1.256`,build:`2026-11-24T19:47:22.904Z`},corretor:{versao:`0.1.11`,build:`2026-11-24T19:59:00.720Z`},org:{versao:`1.1.71`,build:`2026-11-24T19:58:40.968Z`},vendas:{versao:`1.0.40`,build:`2026-11-24T19:46:58.686Z`},sql:{versao:`3.53.4`,build:`2026-11-24T18:35:36.860Z`}},componentesUi:95,pacotes:[{nome:`@kobi/admin`,versao:`1.0.258`,caminho:`apps/admin`},{nome:`@kobi/corretor`,versao:`0.1.11`,caminho:`apps/corretor`},{nome:`kobi-dev`,versao:`1.1.256`,caminho:`apps/dev`},{nome:`@kobi/kobigo`,versao:`0.0.54`,caminho:`apps/kobigo`},{nome:`@kobi/note`,versao:`1.1.351`,caminho:`apps/note`},{nome:`@kobi/org`,versao:`1.1.71`,caminho:`apps/org`},{nome:`@kobi/vendas`,versao:`1.0.40`,caminho:`apps/vendas`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/idiomas`,versao:`0.1.0`,caminho:`packages/idiomas`},{nome:`@kobi/kit`,versao:`1.0.244`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:645,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1337,not_personagens:122,not_poesias:261,not_principios:112,not_receitas:4},codigo:{loja:{arquivos:888,linhas:153185,testes:53},admin:{arquivos:60,linhas:17479,testes:11},note:{arquivos:285,linhas:101682,testes:32},org:{arquivos:117,linhas:46414,testes:29},corretor:{arquivos:65,linhas:19078,testes:8},vendas:{arquivos:16,linhas:1632,testes:1},dev:{arquivos:49,linhas:14607,testes:21},ui:{arquivos:416,linhas:60938,testes:114},bioma:{arquivos:159,linhas:49948,testes:78}},atividade:{loja:[0,0,0,0,0,0,0,0,4,74,73,101],admin:[10,7,5,29,23,23,15,17,12,17,12,18],note:[14,15,13,44,29,45,17,8,1,9,7,12],org:[0,0,0,0,28,47,7,3,0,8,8,12],corretor:[0,0,0,0,0,0,0,0,0,0,0,26],vendas:[0,0,0,0,0,0,0,0,6,10,9,12],dev:[11,3,3,13,22,15,18,26,16,33,23,26],ui:[4,13,9,22,20,26,11,8,2,16,20,21],bioma:[20,15,7,42,55,35,26,37,17,37,37,44]}}.projetos.vendas?.build.slice(0,4)??``;function Ln(){return S`
    <footer class="rodape">
      <kk-signature>
        <nav class="rodape__links">
          <button class="rodape__link" @click=${()=>x(`sobre/termos`)}>${Jt.rodape.termos}</button>
          <button class="rodape__link" @click=${()=>x(`sobre/privacidade`)}>
            ${Jt.rodape.privacidade}
          </button>
          <a
            class="rodape__link"
            href=${`mailto:${Jt.sobre.email}?subject=Kobi%20Vendas`}
            >${Jt.rodape.contato}</a
          >
        </nav>
        ${In===``?C:S`<span>${Jt.rodape.direitos(In)}</span>`}
      </kk-signature>
    </footer>
  `}function Rn(e,t,n){let r=Pn()===`escuro`;return S`
    <header class="barra">
      ${e.voltarPara===void 0?S`<img class="barra__logo" src="./icons/kobi-vendas.svg" alt="" width="30" />`:S`
            <kk-icon-button
              name="arrow-left"
              label="Voltar"
              @click=${()=>x(e.voltarPara??`home`)}
            ></kk-icon-button>
          `}
      <h1 class="barra__titulo">Kobi Vendas</h1>
      <div class="barra__acoes">
        ${e.acoes??C}
        <kk-icon-button
          name=${r?`sun`:`moon`}
          label=${r?`Tema claro`:`Tema escuro`}
          @click=${()=>{Fn(),n()}}
        ></kk-icon-button>
      </div>
    </header>

    <main class="conteudo" id="conteudo" tabindex="-1">
      ${e.titulo===void 0?C:S`<h2 class="conteudo__titulo">${e.titulo}</h2>`}
      ${t}
    </main>

    ${Ln()}
  `}var zn=[{codigo:`pousada`,nome:`Kobi Pousada`,titulo:`o sistema da pousada`,descricao:`Reservas, FNRH, consumo na conta, governança e caixa num sistema só, instalado dentro da pousada: funciona com a internet caída.`},{codigo:`imob`,nome:`Kobi Imobiliária`,titulo:`o sistema da imobiliária de praia`,descricao:`Temporada, locação, vendas, vistoria e repasse num sistema só, instalado dentro da imobiliária: funciona com a internet caída na alta temporada.`},{codigo:`nautica`,nome:`Kobi Náutica`,titulo:`a operadora e a escola de mergulho num sistema só`,descricao:`A agenda das saídas, as vagas com sinal, o termo e o questionário assinados na tela, o manifesto em três idiomas, o cilindro com o prazo em dia e a escola, num sistema só, instalado dentro da loja.`},{codigo:`rh`,nome:`Kobi RH`,titulo:`Gestão de equipes para pequenas empresas`,descricao:`A ficha da equipe, as férias, o banco de horas, os exames, o EPI assinado, os acidentes e o custo real num sistema só, instalado dentro da empresa.`},{codigo:`oficina`,nome:`Kobi Oficina`,titulo:`a assistência técnica sem bloco de papel`,descricao:`A ordem de serviço do balcão à entrega: o aparelho com a história na loja, o orçamento que o cliente decide item por item, a garantia com o prazo da lei, a peça encomendada, o recibo e o laudo em PDF. Num servidor dentro da loja.`},{codigo:`loteamento`,nome:`Kobi Loteamento`,titulo:`a loteadora com o mapa, o contrato e o carnê no mesmo lugar`,descricao:`O loteamento no mapa, pintado pela situação de cada lote; a tabela de preço com vigência, a reserva com prazo, o simulador em PDF, o compromisso de compra e venda com o carnê inteiro, a correção anual, o acordo, a notificação e o distrato. Num servidor dentro da loteadora.`},{codigo:`corretor`,nome:`Kobi Corretor`,titulo:`o escritório do corretor no celular`,descricao:`O mapa de ocupação da temporada, a locação anual, as vendas com o parceiro e a carteira de imóveis no celular do corretor autônomo, sem internet e sem nuvem.`}],Bn=`0.0.54`,Vn={imob:`sky`,pousada:`amber`,nautica:`cyan`,rh:`violet`,oficina:`orange`,loteamento:`lime`,corretor:`blue`},Hn=zn.map(e=>({...e,marca:`produtos/${e.codigo}/marca.svg#parada`,cor:`var(--kk-color-${Vn[e.codigo]??`gray`}-600)`}));function Un(e){return Hn.find(t=>t.codigo===e)}function Wn(e,t,n=`application/json`){let r=t instanceof Blob?t:typeof t==`string`?new Blob([t],{type:`${n};charset=utf-8`}):new Blob([t.slice()],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Gn(e){return e.replace(/\D/g,``)}function Kn(e){let t=Gn(e);return t.length===12||t.length===13?t.startsWith(`55`)?t.slice(2):``:t.length===10||t.length===11?t:``}function qn(e){let t=Kn(e);return t===``||Number(t.slice(0,2))<11?!1:t.length===11?t.startsWith(`9`,2):/^[2-5]/.test(t.slice(2))}function Jn(e){let t=Kn(e);if(t===``)return e;let n=`(${t.slice(0,2)}) ${t.slice(2,-4)}-${t.slice(-4)}`;return Gn(e).length>11?`+55 ${n}`:n}function Yn(e){let t=Gn(e);return t===``?``:e.trimStart().startsWith(`+`)?t:t.length===10||t.length===11?`55${t}`:t}var Xn=`vendas_parceiro`,Zn={nome:``,empresa:``,cidade:``,whatsapp:``};function Qn(){try{let e=JSON.parse(localStorage.getItem(Xn)??`null`);return typeof e!=`object`||!e?Zn:{nome:String(e.nome??``),empresa:String(e.empresa??``),cidade:String(e.cidade??``),whatsapp:String(e.whatsapp??``)}}catch{return Zn}}function $n(e){try{return localStorage.setItem(Xn,JSON.stringify(e)),!0}catch{return!1}}function er(e){return e.empresa.trim()===``||Yn(e.whatsapp)===``}function tr(e){let t=Yn(e.whatsapp);return t===``?``:`https://wa.me/${t}`}function nr(e,t){let n=tr(e);return[[/\[PARCEIRO:\s*nome\s+da\s+empresa\]/g,e.empresa.trim()],[/\[PARCEIRO:\s*cidade\]/g,e.cidade.trim()],[/\[PARCEIRO:\s*\(DDD\)\s+número\]/g,t],[/55DDDNUMERO/g,Yn(e.whatsapp)],[/\[PARCEIRO\]/g,e.empresa.trim()],[/\[seu nome\]/g,e.nome.trim()],[/\[WhatsApp\]/g,t],[/\[link do WhatsApp\]/g,n],[/\[LINK\]/g,n]]}function rr(e){return e.whatsapp.trim()===``?``:Jn(e.whatsapp.trim())}function ir(e){let t=rr(e);return[e.nome,e.empresa,t===``?``:`WhatsApp ${t}`].map(e=>e.trim()).filter(e=>e!==``)}function ar(e,t){let n=nr(t,rr(t)),r=ir(t).map(dn).join(`<br>`);return e.split(/(<code>[\s\S]*?<\/code>)/).map(e=>{if(e.startsWith(`<code>`))return e;let t=n.reduce((e,[t,n])=>n===``?e:e.replace(t,()=>dn(n)),e);return r===``?t:t.replace(/\[assinatura\]/g,()=>r)}).join(``)}function or(e,t,n){let r=ir(n);return[`Olá! Segue o folder do ${e}, ${t}.`,`Posso te mostrar como ele funciona numa demonstração de meia hora, sem compromisso.`,...r.length>0?[``,...r]:[]].join(`
`)}function sr(e,t){return`./produtos/${e}/${t.includes(`.`)?t:`${t}.html`}`}var cr=new Map;function lr(e,t){let n=cr.get(e);return n===void 0?(cr.set(e,{estado:`carregando`}),fetch(e).then(async t=>{if(!t.ok)throw Error(`${t.status} ${t.statusText}`);cr.set(e,{estado:`pronto`,texto:await t.text()})}).catch(t=>{cr.set(e,{estado:`falhou`,erro:String(t)})}).finally(t),{estado:`carregando`}):n}function ur(e){cr.delete(e)}async function dr(e,t,n){let r=or(t,n,Qn()),i;try{let t=await fetch(sr(e,`folder.pdf`));if(!t.ok)throw Error(String(t.status));i=new Uint8Array(await t.arrayBuffer())}catch{_e(`O folder não abriu. Abra o app com internet uma vez para ele ficar guardado.`,`danger`);return}let a=new File([i.slice()],`${t} - folder.pdf`,{type:`application/pdf`});if(typeof navigator.share==`function`&&typeof navigator.canShare==`function`&&navigator.canShare({files:[a]}))try{await navigator.share({files:[a],text:r,title:`${t} — folder`});return}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return}Wn(a.name,i,`application/pdf`),fr(r),_e(`O folder foi baixado: anexe-o na conversa que abriu.`,`neutral`)}function fr(e){open(`https://wa.me/?text=${encodeURIComponent(e)}`,`_blank`,`noopener`)}async function pr(e){try{await navigator.clipboard.writeText(e),_e(`Copiado.`)}catch{_e(`O aparelho não deixou copiar. Selecione o texto e copie à mão.`,`warning`)}}function mr(e){let t=e=>{if(e.nodeType===Node.TEXT_NODE)return(e.textContent??``).replace(/\s+/g,` `);if(!(e instanceof Element))return``;let n=[...e.childNodes].map(t).join(``);switch(e.tagName){case`BR`:return`
`;case`P`:return`${n.trim()}\n\n`;case`LI`:return`- ${n.trim()}\n`;case`UL`:case`OL`:return`${n}\n`;case`STRONG`:case`B`:return`*${n}*`;case`EM`:case`I`:return`_${n}_`;default:return n}};return t(e).split(`
`).map(e=>e.trim()).join(`
`).replace(/\n{3,}/g,`

`).trim()}function hr(e,t,n){let r=document.createElement(`kk-button`);r.setAttribute(`size`,`small`);let i=document.createElement(`kk-icon`);return i.setAttribute(`slot`,`prefix`),i.setAttribute(`name`,t),r.append(i,e),r.addEventListener(`click`,n),r}function gr(e){for(let t of e.querySelectorAll(`.prosa blockquote:not([data-armado])`)){t.dataset.armado=``;let e=t.closest(`[data-whatsapp]`)!==null,n=()=>mr(t),r=document.createElement(`div`);r.className=`trecho__acoes`,r.append(hr(`Copiar`,`copy`,()=>void pr(n()))),e&&r.append(hr(`WhatsApp`,`brand-whatsapp`,()=>fr(n()))),t.after(r)}}var _r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vr=e=>(...t)=>({_$litDirective$:e,values:t}),yr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},br=class extends yr{constructor(e){if(super(e),this.it=C,e.type!==_r.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===lt)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};br.directiveName=`unsafeHTML`,br.resultType=1;var xr=vr(br),Sr=[`roteiro`,`loja-de-exemplo`];function Cr(e){let t=Sr.map(e=>({endereco:`./ajuda/${e}.html`,nome:e})),n=t.map(t=>({...t,carga:lr(t.endereco,e)}));return n.some(e=>e.carga.estado===`carregando`)?S`<div class="carregando"><kk-spinner></kk-spinner></div>`:n.find(e=>e.carga.estado===`falhou`)===void 0?S`${n.map(e=>S`<article class="prosa" data-ajuda=${e.nome}>
      ${xr(e.carga.estado===`pronto`?e.carga.texto.replaceAll(`<h1>`,`<h2>`).replaceAll(`</h1>`,`</h2>`):``)}
    </article>`)}`:S`
      <div class="aviso">
        <p>A ajuda não abriu. Abra o app com internet uma vez para ela ficar guardada.</p>
        <kk-button
          @click=${()=>{for(let e of t)ur(e.endereco);e()}}
        >Tentar de novo</kk-button>
      </div>
    `}var wr={guia:`Guia de venda`,mensagens:`Mensagens prontas`,posts:`Posts`};function Tr(e,t,n){let r=sr(e.codigo,t),i=lr(r,n);if(i.estado===`carregando`)return S`<div class="carregando"><kk-spinner></kk-spinner></div>`;if(i.estado===`falhou`)return S`
      <div class="aviso">
        <p>Este texto não abriu. Abra o app com internet uma vez para ele ficar guardado.</p>
        <pre class="detalhe">${i.erro}</pre>
        <kk-button @click=${()=>{ur(r),n()}}>Tentar de novo</kk-button>
      </div>
    `;let a=ar(i.texto,Qn()).replace(/^\s*<h1>[\s\S]*?<\/h1>/,``);return S`
    <article class="prosa" data-arquivo=${t} ?data-whatsapp=${t===`mensagens`}>
      ${xr(a)}
    </article>
  `}function Er(){return er(Qn())?S`
    <kk-alert class="aviso-dados" variant="warning" open>
      <kk-icon slot="icon" name="id-badge-2"></kk-icon>
      Preencha o nome da sua revenda e o seu WhatsApp: é o que sai na apresentação, no site e nas
      mensagens no lugar dos campos <strong>[PARCEIRO]</strong>.
      <kk-button size="small" variant="warning" @click=${()=>x(`parceiro`)}>
        Preencher agora
      </kk-button>
    </kk-alert>
  `:C}function Dr(e,t,n,r){return S`
    <button class="linha" @click=${r}>
      <kk-icon class="linha__icone" name=${e}></kk-icon>
      <span class="linha__texto">
        <span>${t}</span>
        <span class="linha__sub">${n}</span>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function Or(){let e=Qn().nome.trim();return S`
    <div class="linha-go">
      <img src="marca/kobi-kubo.svg#parada" alt="" />
      <strong>Kobi Go</strong>
      <span>versão ${Bn}</span>
    </div>

    <p class="intro">
      ${e===``?`Olá!`:`Olá, ${e}!`} Escolha o produto para apresentar, mandar o folder ou
      mostrar o site ao cliente.
    </p>

    ${Er()}

    <h3 class="secao">Produtos</h3>
    <div class="cartoes">
      ${Hn.map(e=>S`
          <button
            class="cartao"
            style=${`--cor: ${e.cor}`}
            data-produto=${e.codigo}
            @click=${()=>x(`produto/${e.codigo}`)}
          >
            <img class="cartao__marca" src=${e.marca} alt="" />
            <span class="cartao__nome">${e.nome}</span>
            <span class="cartao__resumo">${e.titulo}</span>
          </button>
        `)}
    </div>

    <h3 class="secao">Para você</h3>
    <div class="cartoes">
      <button class="cartao" style="--cor: var(--kk-color-emerald-600)" @click=${()=>x(`parceiro`)}>
        <kk-icon class="cartao__icone" name="id-badge-2"></kk-icon>
        <span class="cartao__nome">Área do parceiro</span>
        <span class="cartao__resumo">Os seus dados, os guias de venda, as mensagens e os posts</span>
      </button>
      <button class="cartao" style="--cor: var(--kk-color-sky-600)" data-ajuda @click=${()=>x(`ajuda`)}>
        <kk-icon class="cartao__icone" name="help-circle"></kk-icon>
        <span class="cartao__nome">Ajuda do parceiro</span>
        <span class="cartao__resumo">Como instalar e cuidar da loja do cliente, e a loja de exemplo</span>
      </button>
      ${ue()?S`
            <button class="cartao" style="--cor: var(--kk-color-gray-600)" @click=${()=>void de()}>
              <kk-icon class="cartao__icone" name="device-mobile-down"></kk-icon>
              <span class="cartao__nome">Instalar o app</span>
              <span class="cartao__resumo">Na tela inicial, depois de instalado abre sem internet</span>
            </button>
          `:C}
    </div>
  `}function kr(e){return e.target.value}function Ar(e,t){$n({...Qn(),[e]:t})||_e(`O aparelho não deixou guardar os dados (aba privada?).`,`danger`)}function jr(e){let t=Qn(),n=t.whatsapp.trim()!==``&&!qn(t.whatsapp),r=(n,r,i,a={})=>S`
    <kk-input
      name=${n}
      label=${r}
      help-text=${i}
      inputmode=${a.inputmode??`text`}
      autocomplete=${a.autocomplete??`off`}
      .value=${t[n]}
      @kk-input=${e=>Ar(n,kr(e))}
      @kk-change=${e}
    ></kk-input>
  `;return S`
    <p class="intro">
      O que você escrever aqui fica só neste aparelho, e entra no lugar dos campos
      <strong>[PARCEIRO]</strong> da apresentação, do folder, do site e das mensagens.
    </p>

    <section class="formulario" aria-label="Os seus dados">
      ${r(`nome`,`Seu nome`,`Como você assina as mensagens`,{autocomplete:`name`})}
      ${r(`empresa`,`Nome da revenda`,`A sua empresa, como o cliente vai ver`,{autocomplete:`organization`})}
      ${r(`cidade`,`Cidade`,`Onde a revenda atende`,{autocomplete:`address-level2`})}
      ${r(`whatsapp`,`WhatsApp`,`Com o DDD: (12) 99876-5432`,{inputmode:`tel`,autocomplete:`tel`})}
      ${n?S`<p class="erro" role="alert">Este número não parece um celular do Brasil com DDD.</p>`:``}
    </section>

    <h3 class="secao">O material de cada produto</h3>
    ${Hn.map(e=>S`
        <div class="material" style=${`--cor: ${e.cor}`}>
          <h4 class="material__nome">
            <img src=${e.marca} alt="" />
            ${e.nome}
          </h4>
          <div class="material__botoes">
            <kk-button size="small" @click=${()=>x(`ler/${e.codigo}/guia`)}>
              <kk-icon slot="prefix" name="book"></kk-icon>
              Guia de venda
            </kk-button>
            <kk-button size="small" @click=${()=>x(`ler/${e.codigo}/mensagens`)}>
              <kk-icon slot="prefix" name="message-circle"></kk-icon>
              Mensagens
            </kk-button>
            <kk-button size="small" @click=${()=>x(`ler/${e.codigo}/posts`)}>
              <kk-icon slot="prefix" name="brand-instagram"></kk-icon>
              Posts
            </kk-button>
            <kk-button size="small" @click=${()=>x(`ver/${e.codigo}/site`)}>
              <kk-icon slot="prefix" name="world"></kk-icon>
              Site
            </kk-button>
          </div>
        </div>
      `)}
  `}function Mr(e){let t=t=>()=>x(`ver/${e.codigo}/${t}`);return S`
    <p class="intro">${e.descricao}</p>

    ${Er()}

    <div class="destaques">
      <kk-button variant="primary" size="large" @click=${t(`apresentacao`)}>
        <kk-icon slot="prefix" name="presentation"></kk-icon>
        Apresentar
      </kk-button>
      <kk-button
        variant="success"
        size="large"
        data-acao="enviar-folder"
        @click=${()=>void dr(e.codigo,e.nome,e.titulo)}
      >
        <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
        Enviar o folder
      </kk-button>
    </div>

    <h3 class="secao">Para mostrar ao cliente</h3>
    <div class="lista">
      ${Dr(`presentation`,`Apresentação`,`Os slides da visita: toque ou use as setas para passar`,t(`apresentacao`))}
      ${Dr(`file-text`,`Folder`,`Frente e verso, com os seus dados; dá para imprimir`,t(`folder`))}
      ${Dr(`world`,`Site`,`A página do produto para mostrar`,t(`site`))}
    </div>
  `}var Nr={projetos:{loja:{versao:`0.0.54`,build:`2026-11-24T19:49:11.047Z`},bioma:{versao:`1.0.0`,build:`2026-11-24T19:59:11.732Z`},admin:{versao:`1.0.258`,build:`2026-11-24T19:59:11.732Z`},note:{versao:`1.1.351`,build:`2026-11-24T19:55:22.915Z`},ui:{versao:`1.0.244`,build:`2026-11-24T19:48:46.426Z`},dev:{versao:`1.1.256`,build:`2026-11-24T19:47:22.904Z`},corretor:{versao:`0.1.11`,build:`2026-11-24T19:59:00.720Z`},org:{versao:`1.1.71`,build:`2026-11-24T19:58:40.968Z`},vendas:{versao:`1.0.40`,build:`2026-11-24T19:46:58.686Z`},sql:{versao:`3.53.4`,build:`2026-11-24T18:35:36.860Z`}},componentesUi:95,pacotes:[{nome:`@kobi/admin`,versao:`1.0.258`,caminho:`apps/admin`},{nome:`@kobi/corretor`,versao:`0.1.11`,caminho:`apps/corretor`},{nome:`kobi-dev`,versao:`1.1.256`,caminho:`apps/dev`},{nome:`@kobi/kobigo`,versao:`0.0.54`,caminho:`apps/kobigo`},{nome:`@kobi/note`,versao:`1.1.351`,caminho:`apps/note`},{nome:`@kobi/org`,versao:`1.1.71`,caminho:`apps/org`},{nome:`@kobi/vendas`,versao:`1.0.40`,caminho:`apps/vendas`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/idiomas`,versao:`0.1.0`,caminho:`packages/idiomas`},{nome:`@kobi/kit`,versao:`1.0.244`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:645,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1337,not_personagens:122,not_poesias:261,not_principios:112,not_receitas:4},codigo:{loja:{arquivos:888,linhas:153185,testes:53},admin:{arquivos:60,linhas:17479,testes:11},note:{arquivos:285,linhas:101682,testes:32},org:{arquivos:117,linhas:46414,testes:29},corretor:{arquivos:65,linhas:19078,testes:8},vendas:{arquivos:16,linhas:1632,testes:1},dev:{arquivos:49,linhas:14607,testes:21},ui:{arquivos:416,linhas:60938,testes:114},bioma:{arquivos:159,linhas:49948,testes:78}},atividade:{loja:[0,0,0,0,0,0,0,0,4,74,73,101],admin:[10,7,5,29,23,23,15,17,12,17,12,18],note:[14,15,13,44,29,45,17,8,1,9,7,12],org:[0,0,0,0,28,47,7,3,0,8,8,12],corretor:[0,0,0,0,0,0,0,0,0,0,0,26],vendas:[0,0,0,0,0,0,0,0,6,10,9,12],dev:[11,3,3,13,22,15,18,26,16,33,23,26],ui:[4,13,9,22,20,26,11,8,2,16,20,21],bioma:[20,15,7,42,55,35,26,37,17,37,37,44]}}.projetos.vendas?.versao??``;function Pr(){return S`
    <div class="prosa">
      <p>
        O Kobi Vendas é o apoio do parceiro revendedor dos produtos Kobi: a apresentação, o folder, o
        site, o guia de venda, as mensagens e os posts de cada produto, com os seus dados, num app que
        funciona sem internet depois da primeira abertura.
      </p>
      ${Nr===``?``:S`<p>Versão ${Nr}.</p>`}

      <h3 id="termos">Termos de uso</h3>
      <p>
        O Kobi Vendas e o material dentro dele são de uso dos parceiros autorizados, na venda dos
        produtos Kobi. O material descreve o que cada sistema faz hoje; não prometa ao cliente o que
        ele não diz.
      </p>
      <p>
        O app é software proprietário de Luiz Marin: a licença é do parceiro autorizado,
        intransferível, e termina com a parceria. Copiar, modificar ou redistribuir o app ou o
        material depende de autorização por escrito.
      </p>
      <p>
        Contato: <a href="mailto:luizcmarin@gmail.com">luizcmarin@gmail.com</a>.
      </p>

      <h3 id="privacidade">Privacidade</h3>
      <p>
        O app não tem conta, não manda nada a servidor nenhum e não coleta dado nenhum. Os seus dados
        (nome, revenda, cidade e WhatsApp) ficam só neste aparelho, e saem dele apenas quando você
        manda uma mensagem ou um folder.
      </p>
    </div>
  `}var Fr={apresentacao:`Apresentação`,folder:`Folder`,site:`Site`},Ir;function Lr(e){return Ir?.html===e||(Ir!==void 0&&URL.revokeObjectURL(Ir.url),Ir={html:e,url:URL.createObjectURL(new Blob([e],{type:`text/html`}))}),Ir.url}function Rr(){return document.querySelector(`iframe.visor`)}function zr(e){let t=e.currentTarget;t.contentDocument?.addEventListener(`click`,e=>{let t=(e.target?.closest?.(`a[href]`))?.getAttribute(`href`)??``;/^(https?:|mailto:|tel:)/.test(t)&&(e.preventDefault(),open(t,`_blank`,`noopener`))}),t.contentWindow?.focus()}function Br(){let e=Rr();e?.requestFullscreen!==void 0&&e.requestFullscreen().then(()=>e.contentWindow?.focus())}function Vr(e,t){return S`
    ${t===`folder`?S`
          <kk-icon-button
            name="brand-whatsapp"
            label="Enviar o folder"
            @click=${()=>void dr(e.codigo,e.nome,e.titulo)}
          ></kk-icon-button>
          <kk-icon-button
            name="printer"
            label="Imprimir com os seus dados"
            @click=${()=>Rr()?.contentWindow?.print()}
          ></kk-icon-button>
        `:``}
    ${document.fullscreenEnabled?S`<kk-icon-button name="maximize" label="Tela cheia" @click=${Br}></kk-icon-button>`:``}
  `}function Hr(e,t,n){let r=sr(e.codigo,t),i=lr(r,n);return i.estado===`carregando`?S`<div class="carregando"><kk-spinner></kk-spinner></div>`:i.estado===`falhou`?S`
      <div class="aviso">
        <p>Este material não abriu. Abra o app com internet uma vez para ele ficar guardado.</p>
        <pre class="detalhe">${i.erro}</pre>
        <kk-button @click=${()=>{ur(r),n()}}>Tentar de novo</kk-button>
      </div>
    `:S`
    <iframe
      class="visor"
      allow="fullscreen"
      data-arquivo=${t}
      title=${`${Fr[t]??t} — ${e.nome}`}
      src=${Lr(ar(i.texto,Qn()))}
      @load=${zr}
    ></iframe>
  `}var Ur={$code:`pt`,$name:`Português (Brasil)`,$dir:`ltr`,aboutAllRightsReserved:`Todos os direitos reservados.`,aboutContact:`Contato:`,aboutDocuments:`Documentos`,aboutSeeAlso:`Veja também`,aboutVersion:e=>`Vers\xE3o ${e}`,actions:`Ações`,browseFiles:`Escolher arquivos`,calendar:`Calendário`,calendarChooseMonth:`Escolher o mês`,calendarChooseYear:`Escolher o ano`,calendarCollapse:`Mostrar só a semana`,calendarExpand:`Mostrar o mês inteiro`,calendarNextMonth:`Próximo mês`,calendarNextWeek:`Próxima semana`,calendarNextYear:`Próximo ano`,calendarNextYears:`Próximos anos`,calendarPreviousMonth:`Mês anterior`,calendarPreviousWeek:`Semana anterior`,calendarPreviousYear:`Ano anterior`,calendarPreviousYears:`Anos anteriores`,calendarRangeDays:e=>e===1?`1 dia`:`${e} dias`,calendarRangeIncomplete:`Escolha o fim do período.`,calendarTime:`Hora`,calendarWeek:`Semana`,calendarWeekNumber:e=>`Semana ${e}`,cancel:`Cancelar`,carousel:`Carrossel`,clearEntry:`Limpar entrada`,clearFilters:`Limpar filtros`,clearSignature:`Limpar assinatura`,close:`Fechar`,copied:`Copiado`,copy:`Copiar`,currentValue:`Valor atual`,deleteItem:`Excluir registro`,dropFiles:`Solte os arquivos aqui`,editItem:`Editar registro`,editorAlignCenter:`Centralizar`,editorAlignJustify:`Justificar`,editorAlignLeft:`Alinhar à esquerda`,editorAlignRight:`Alinhar à direita`,editorArea:`Área de edição`,editorBackgroundColor:`Cor de fundo`,editorBlockType:`Tipo de bloco`,editorBold:`Negrito`,editorBulletList:`Lista`,editorClearFormat:`Limpar formatação`,editorColorBlue:`Azul`,editorColorCyan:`Ciano`,editorColorDefault:`Padrão`,editorColorGray:`Cinza`,editorColorGreen:`Verde`,editorColorLime:`Limão`,editorColorOrange:`Laranja`,editorColorPink:`Rosa`,editorColorRed:`Vermelho`,editorColorTeal:`Azul-petróleo`,editorColorViolet:`Violeta`,editorColorYellow:`Amarelo`,editorFootnote:`Dica`,editorFootnotePlaceholder:`Texto da nota`,editorFootnoteText:`O texto aparece no rodapé, numerado na leitura.`,editorHeading1:`Título 1`,editorHeading2:`Título 2`,editorHeading3:`Título 3`,editorHeading4:`Título 4`,editorHighlight:`Destaque`,editorHorizontalRule:`Linha horizontal`,editorImage:`Imagem`,editorInsert:`Inserir`,editorItalic:`Itálico`,editorLineBreak:`Quebra de linha`,editorLink:`Link`,editorLinkText:`Endereço do link.`,editorNoColor:`Sem cor`,editorNumberedList:`Lista numerada`,editorParagraph:`Parágrafo`,editorParagraphBordered:`Emoldurado`,editorParagraphColumns:`Duas colunas`,editorParagraphDropCap:`Capitular`,editorParagraphEpigraph:`Epígrafe`,editorParagraphEpigraphSubtitle:`Subtítulo da epígrafe`,editorParagraphFinePrint:`Letra miúda`,editorParagraphFootnotes:`Nota de rodapé`,editorParagraphIndented:`Recuado`,editorParagraphSmallCaps:`Versaletes`,editorParagraphSmallCapsSubtitle:`Subtítulo dos versaletes`,editorParagraphSpaced:`Espaçado`,editorParagraphStyle:`Estilo de parágrafo`,editorPoetry:`Bloco de poesia`,editorPoetryDedication:`Dedicatória`,editorPoetryRefrain:`Refrão`,editorPoetryScripture:`Escritura`,editorPoetrySource:`Fonte`,editorPoetryTheme:`Texto tema`,editorPoetryVerse:`Verso`,editorQuote:`Citação`,editorRedo:`Refazer`,editorSource:`Código-fonte`,editorStrikethrough:`Tachado`,editorTable:`Tabela`,editorTableColumnAfter:`Inserir coluna à direita`,editorTableColumnBefore:`Inserir coluna à esquerda`,editorTableColumnDelete:`Excluir coluna`,editorTableDelete:`Excluir tabela`,editorTableHeader:`Linha de cabeçalho`,editorTableRowAbove:`Inserir linha acima`,editorTableRowBelow:`Inserir linha abaixo`,editorTableRowDelete:`Excluir linha`,editorTableSize:`Tamanho da tabela`,editorTextColor:`Cor do texto`,editorToolbar:`Barra de formatação`,editorTypoDoubleQuotes:`Aspas duplas`,editorTypoEmDash:`Travessão`,editorTypoEnDash:`Meia-risca`,editorTypography:`Tipografia`,editorTypoNbsp:`Espaço inseparável`,editorTypoSingleQuotes:`Aspas simples`,editorUnderline:`Sublinhado`,editorUndo:`Desfazer`,error:`Erro`,finish:`Concluir`,firstPage:`Primeira página`,ganttToday:`Hoje`,goToSlide:(e,t)=>`V\xE1 para o slide ${e} de ${t}`,hidePassword:`Esconder a senha`,alpha:`Alfa`,hsv:`HSV`,hue:`Matiz`,lastPage:`Última página`,loading:`Carregando`,menu:`Menu`,newItem:`Novo registro`,next:`Avançar`,nextPage:`Próxima página`,nextSlide:`Próximo slide`,no:`Não`,noResults:`Nenhum resultado encontrado`,numOptionsSelected:e=>e===0?`Nenhuma opção selecionada`:e===1?`1 opção selecionada`:`${e} op\xE7\xF5es selecionadas`,occupancyFree:`Livres`,occupancyFreeCount:(e,t)=>`${e} de ${t} livres`,occupancyNights:e=>e===1?`1 noite`:`${e} noites`,occupancyToday:`Hoje`,otpCode:`Código de verificação`,otpIncomplete:e=>`Preencha as ${e} casas do c\xF3digo.`,page:e=>`P\xE1gina ${e}`,pagination:`Paginação`,passwordFair:`Razoável`,passwordGood:`Boa`,passwordStrength:`Força da senha`,passwordStrong:`Forte`,passwordWeak:`Fraca`,more:`Mais`,expandAll:`Expandir tudo`,collapseAll:`Recolher tudo`,columns:`Colunas`,exportCsv:`Exportar CSV`,statusOnline:`Online`,statusAway:`Ausente`,statusBusy:`Ocupado`,statusOffline:`Offline`,stepWithError:`etapa com erro`,previous:`Voltar`,previousPage:`Página anterior`,previousSlide:`Slide anterior`,progress:`Progresso`,remove:`Remover`,resize:`Mudar o tamanho`,resultsPerPage:`Registros por página`,sankeyLink:(e,t,n,r)=>`${e} \u2192 ${t}: ${n} (${r} de ${e})`,save:`Salvar`,search:`Pesquisar`,signaturePad:`Assine aqui`,scrollToEnd:`Rolar até o final`,scrollToStart:`Rolar até o início`,selectAColorFromTheScreen:`Selecionar uma cor da tela`,filterColumn:e=>`Filtrar ${e}`,resizeColumn:e=>`Largura da coluna ${e}`,kanbanSelected:e=>e===0?`Nenhum cartão selecionado`:e===1?`1 cartão selecionado`:`${e} cart\xF5es selecionados`,selectAll:`Selecionar tudo`,selectRow:`Selecionar a linha`,showingResults:(e,t,n)=>`Mostrando ${e}\u2013${t} de ${n}`,showPassword:`Mostrar senha`,slideNum:e=>`Slide ${e}`,kanbanCollapse:e=>`Recolher: ${e}`,kanbanExpand:e=>`Abrir: ${e}`,kanbanNowhere:e=>`${e} n\xE3o tem para onde ir.`,kanbanChecklist:(e,t)=>`Checklist: ${e} de ${t} itens feitos`,kanbanPriorityHigh:`Alta`,kanbanPriorityLow:`Baixa`,kanbanPriorityNormal:`Normal`,kanbanPriorityUrgent:`Urgente`,sortableCanceled:e=>`${e} voltou para onde estava.`,sortableDropped:(e,t,n,r)=>`${e} solto na posi\xE7\xE3o ${t} de ${n}${r?` em ${r}`:``}.`,sortableGrabbed:(e,t,n)=>`${e} pego, na posi\xE7\xE3o ${t} de ${n}. Use as setas para mover, Espa\xE7o para soltar e Esc para cancelar.`,sortableMoved:(e,t,n)=>`Posi\xE7\xE3o ${e} de ${t}${n?` em ${n}`:``}.`,sortablePicked:e=>`${e} escolhido. Toque no destino.`,sparklineSummary:(e,t,n)=>`m\xEDnimo ${e}, m\xE1ximo ${t}, \xFAltimo ${n}`,sparklineTristate:(e,t,n)=>`${e} acima, ${t} abaixo, ${n} no zero`,sortAscending:`Ordenar em ordem crescente`,sortClear:`Remover ordenação`,sortDescending:`Ordenar em ordem decrescente`,stepNum:(e,t)=>`Etapa ${e} de ${t}`,toggleColorFormat:`Trocar o formato de cor`,valueMissing:`Preencha este campo.`,yes:`Sim`},Wr={$code:`en`,$name:`English`,$dir:`ltr`,aboutAllRightsReserved:`All rights reserved.`,aboutContact:`Contact:`,aboutDocuments:`Documents`,aboutSeeAlso:`See also`,aboutVersion:e=>`Version ${e}`,actions:`Actions`,alpha:`Alpha`,browseFiles:`Browse files`,calendar:`Calendar`,calendarChooseMonth:`Choose the month`,calendarChooseYear:`Choose the year`,calendarCollapse:`Show only the week`,calendarExpand:`Show the whole month`,calendarNextMonth:`Next month`,calendarNextWeek:`Next week`,calendarNextYear:`Next year`,calendarNextYears:`Next years`,calendarPreviousMonth:`Previous month`,calendarPreviousWeek:`Previous week`,calendarPreviousYear:`Previous year`,calendarPreviousYears:`Previous years`,calendarRangeDays:e=>e===1?`1 day`:`${e} days`,calendarRangeIncomplete:`Choose the end of the range.`,calendarTime:`Time`,calendarWeek:`Week`,calendarWeekNumber:e=>`Week ${e}`,cancel:`Cancel`,carousel:`Carousel`,clearEntry:`Clear entry`,clearFilters:`Clear filters`,clearSignature:`Clear signature`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,deleteItem:`Delete item`,dropFiles:`Drop files here`,editItem:`Edit item`,editorAlignCenter:`Align center`,editorAlignJustify:`Justify`,editorAlignLeft:`Align left`,editorAlignRight:`Align right`,editorArea:`Editing area`,editorBackgroundColor:`Background color`,editorBlockType:`Block type`,editorBold:`Bold`,editorBulletList:`Bulleted list`,editorClearFormat:`Clear formatting`,editorColorBlue:`Blue`,editorColorCyan:`Cyan`,editorColorDefault:`Default`,editorColorGray:`Gray`,editorColorGreen:`Green`,editorColorLime:`Lime`,editorColorOrange:`Orange`,editorColorPink:`Pink`,editorColorRed:`Red`,editorColorTeal:`Teal`,editorColorViolet:`Violet`,editorColorYellow:`Yellow`,editorFootnote:`Footnote`,editorFootnotePlaceholder:`Note text`,editorFootnoteText:`The text appears at the foot of the page, numbered when read.`,editorHeading1:`Heading 1`,editorHeading2:`Heading 2`,editorHeading3:`Heading 3`,editorHeading4:`Heading 4`,editorHighlight:`Highlight`,editorHorizontalRule:`Horizontal rule`,editorImage:`Image`,editorInsert:`Insert`,editorItalic:`Italic`,editorLineBreak:`Line break`,editorLink:`Link`,editorLinkText:`Link address.`,editorNoColor:`No color`,editorNumberedList:`Numbered list`,editorParagraph:`Paragraph`,editorParagraphBordered:`Bordered`,editorParagraphColumns:`Two columns`,editorParagraphDropCap:`Drop cap`,editorParagraphEpigraph:`Epigraph`,editorParagraphEpigraphSubtitle:`Epigraph subtitle`,editorParagraphFinePrint:`Fine print`,editorParagraphFootnotes:`Footnotes`,editorParagraphIndented:`Indented`,editorParagraphSmallCaps:`Small caps`,editorParagraphSmallCapsSubtitle:`Small caps subtitle`,editorParagraphSpaced:`Spaced`,editorParagraphStyle:`Paragraph style`,editorPoetry:`Poetry block`,editorPoetryDedication:`Dedication`,editorPoetryRefrain:`Refrain`,editorPoetryScripture:`Scripture`,editorPoetrySource:`Source`,editorPoetryTheme:`Theme text`,editorPoetryVerse:`Verse`,editorQuote:`Quote`,editorRedo:`Redo`,editorSource:`Source code`,editorStrikethrough:`Strikethrough`,editorTable:`Table`,editorTableColumnAfter:`Insert column right`,editorTableColumnBefore:`Insert column left`,editorTableColumnDelete:`Delete column`,editorTableDelete:`Delete table`,editorTableHeader:`Header row`,editorTableRowAbove:`Insert row above`,editorTableRowBelow:`Insert row below`,editorTableRowDelete:`Delete row`,editorTableSize:`Table size`,editorTextColor:`Text color`,editorToolbar:`Formatting toolbar`,editorTypoDoubleQuotes:`Double quotes`,editorTypoEmDash:`Em dash`,editorTypoEnDash:`En dash`,editorTypography:`Typography`,editorTypoNbsp:`Non-breaking space`,editorTypoSingleQuotes:`Single quotes`,editorUnderline:`Underline`,editorUndo:`Undo`,error:`Error`,finish:`Finish`,firstPage:`First page`,ganttToday:`Today`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,hsv:`HSV`,hue:`Hue`,lastPage:`Last page`,loading:`Loading`,menu:`Menu`,newItem:`New item`,next:`Next`,nextPage:`Next page`,nextSlide:`Next slide`,no:`No`,noResults:`No results found`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,occupancyFree:`Available`,occupancyFreeCount:(e,t)=>`${e} of ${t} available`,occupancyNights:e=>e===1?`1 night`:`${e} nights`,occupancyToday:`Today`,otpCode:`Verification code`,otpIncomplete:e=>`Fill in all ${e} characters of the code.`,page:e=>`Page ${e}`,pagination:`Pagination`,passwordFair:`Fair`,passwordGood:`Good`,passwordStrength:`Password strength`,passwordStrong:`Strong`,passwordWeak:`Weak`,more:`More`,expandAll:`Expand all`,collapseAll:`Collapse all`,columns:`Columns`,exportCsv:`Export CSV`,statusOnline:`Online`,statusAway:`Away`,statusBusy:`Busy`,statusOffline:`Offline`,stepWithError:`step with an error`,previous:`Previous`,previousPage:`Previous page`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,resultsPerPage:`Results per page`,sankeyLink:(e,t,n,r)=>`${e} \u2192 ${t}: ${n} (${r} of ${e})`,save:`Save`,search:`Search`,signaturePad:`Sign here`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,filterColumn:e=>`Filter ${e}`,resizeColumn:e=>`Resize column ${e}`,kanbanSelected:e=>e===0?`No cards selected`:e===1?`1 card selected`:`${e} cards selected`,selectAll:`Select all`,selectRow:`Select row`,showingResults:(e,t,n)=>`Showing ${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,kanbanCollapse:e=>`Collapse: ${e}`,kanbanExpand:e=>`Expand: ${e}`,kanbanNowhere:e=>`${e} has nowhere to go.`,kanbanChecklist:(e,t)=>`Checklist: ${e} of ${t} items done`,kanbanPriorityHigh:`High`,kanbanPriorityLow:`Low`,kanbanPriorityNormal:`Normal`,kanbanPriorityUrgent:`Urgent`,sortableCanceled:e=>`${e} is back where it was.`,sortableDropped:(e,t,n,r)=>`${e} dropped at position ${t} of ${n}${r?` in ${r}`:``}.`,sortableGrabbed:(e,t,n)=>`${e} grabbed, at position ${t} of ${n}. Use the arrow keys to move, Space to drop and Escape to cancel.`,sortableMoved:(e,t,n)=>`Position ${e} of ${t}${n?` in ${n}`:``}.`,sortablePicked:e=>`${e} picked. Tap the destination.`,sparklineSummary:(e,t,n)=>`minimum ${e}, maximum ${t}, last ${n}`,sparklineTristate:(e,t,n)=>`${e} up, ${t} down, ${n} even`,sortAscending:`Sort ascending`,sortClear:`Clear sorting`,sortDescending:`Sort descending`,stepNum:(e,t)=>`Step ${e} of ${t}`,toggleColorFormat:`Toggle color format`,valueMissing:`Please fill out this field.`,yes:`Yes`},Gr=[`pt-BR`,`en`,`es-ES`,`pl`,`uk`,`ja`,`zh-CN`,`ko`,`ar`,`ht`];function Kr(e){let[t=``,...n]=e.trim().replaceAll(`_`,`-`).split(`-`),r=``,i=``;for(let e of n){if(e.length===1)break;r===``&&i===``&&/^[a-z]{4}$/i.test(e)?r=e[0]?.toUpperCase()+e.slice(1).toLowerCase():i===``&&/^([a-z]{2}|\d{3})$/i.test(e)&&(i=e.toUpperCase())}return{lingua:t.toLowerCase(),escrita:r,regiao:i}}function qr(e){let t=e.trim().replaceAll(`_`,`-`).toLowerCase(),n=Gr.find(e=>e.toLowerCase()===t);if(n!==void 0)return n;let{lingua:r}=Kr(e);return Gr.find(e=>e.split(`-`)[0]===r)??`en`}new Set(`AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PT PY SA SG SV TH TT TW UM US VE VI WS YE ZA ZW`.split(` `)),new Set(`AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY`.split(` `)),{...Object.fromEntries(`BH DZ EG IL IQ JO KW LY OM QA SA SD SY YE`.split(` `).map(e=>[e,[5,6]]))};function Jr(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function Yr(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getHours()).padStart(2,`0`),r=String(t.getMinutes()).padStart(2,`0`);return`${Jr(t)}T${n}:${r}`}function Xr(e=new Date){return Jr(e).slice(0,7)}function Zr(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number);return Jr(new Date(n,r-1,i+t))}function Qr(e,t){return new Date(e,t,0).getDate()}function $r(e,t){let[n=0,r=1]=e.split(`-`).map(Number),i=Math.min(Math.max(1,Math.trunc(t)),Qr(n,r));return`${e}-${String(i).padStart(2,`0`)}`}var ei={decimal:`,`,milhar:`.`};function ti(e,t,n,r){if(!Number.isFinite(e))return String(e);let i=e<0,a=Math.abs(e),o=Math.round(+`${a}e${n}`),s=Number.isFinite(o)?String(o).padStart(n+1,`0`):a.toFixed(n).replace(`.`,``),c=n===0?s:s.slice(0,-n),l=n===0?``:s.slice(-n);for(;l.length>t&&l.endsWith(`0`);)l=l.slice(0,-1);let u=c.length<(r.agrupamentoMinimo??4)?c:c.replace(/\B(?=(\d{3})+(?!\d))/g,r.milhar),d=l===``?u:`${u}${r.decimal}${l}`;return i&&/[1-9]/.test(d)?`-${d}`:d}var ni=[`B`,`KB`,`MB`,`GB`,`TB`];function ri(e,t=ei){if(!(e>0))return`0 B`;let n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),ni.length-1),r=n===0?0:1;return`${ti(e/1024**n,r,r,t)} ${ni[n]}`}function ii(e){let[t=0,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getDay()}function ai(e,t){return Zr(e,-((ii(e)-t+7)%7))}function oi(e,t){let n=ai(e,t);return Array.from({length:7},(e,t)=>Zr(n,t))}var si=1;function ci(e,t){let n=Jr(t);if(e===`dia`)return{de:n,ate:n};if(e===`semana`||e===`agenda`){let e=oi(n,si);return{de:e[0]??n,ate:e[6]??n}}if(e===`mes`){let e=Xr(t);return{de:`${e}-01`,ate:$r(e,31)}}let r=t.getFullYear();return{de:`${r}-01-01`,ate:`${r}-12-31`}}var A=`\xA0`;function li(e,t){return e.startsWith(`-`)?`-${t}${e.slice(1)}`:t+e}function ui(e,t){return`${e}${A}${t}`}var j=(e,t)=>`${String(e).padStart(2,`0`)}:${t}`,di=(e,t)=>`${e}:${t}`,fi=e=>e%12||12,M=(e,t)=>(n,r)=>`${fi(n)}:${r}${A}${n<12?e:t}`,pi=(e,t,n)=>(r,i)=>`${r<12?e:t}${n}${fi(r)}:${i}`,N=(e,t,n=``)=>e===void 0?``:`${t}${e}${n}`,mi=e=>Array.from({length:12},(t,n)=>`${n+1}${e}`),hi={"pt-BR":{pontuacao:{decimal:`,`,milhar:`.`},porcento:e=>`${e}%`,moeda:{simbolo:`R$`,depois:!1,casas:2,escrever:(e,t)=>`${t} ${e}`},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:j,entreDataEHora:`, `,hora12:M(`AM`,`PM`),hora24:j,iniciais:`STQQSSD`,porExtenso:(e,t,n)=>`${e} de ${t} de ${n}`,meses:[`janeiro`,`fevereiro`,`março`,`abril`,`maio`,`junho`,`julho`,`agosto`,`setembro`,`outubro`,`novembro`,`dezembro`],mesesCurtos:[`jan.`,`fev.`,`mar.`,`abr.`,`mai.`,`jun.`,`jul.`,`ago.`,`set.`,`out.`,`nov.`,`dez.`],diasDaSemana:[`segunda-feira`,`terça-feira`,`quarta-feira`,`quinta-feira`,`sexta-feira`,`sábado`,`domingo`],longa:(e,t,n,r)=>`${e}, ${t} de ${n}${N(r,` de `)}`,comMes:(e,t,n)=>`${e} de ${t} de ${n}`,mesEAno:(e,t)=>`${e} de ${t}`,faixa:(e,t,n,r)=>`${e} \u2013 ${t} de ${n} de ${r}`},en:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`$`,depois:!1,casas:2,escrever:li},data:(e,t,n)=>`${t}/${e}/${n}`,diaMes:(e,t)=>`${t}/${e}`,hora:M(`AM`,`PM`),entreDataEHora:`, `,hora12:M(`AM`,`PM`),hora24:j,iniciais:`MTWTFSS`,porExtenso:(e,t,n)=>`${t} ${e}, ${n}`,meses:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],mesesCurtos:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],diasDaSemana:[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],longa:(e,t,n,r)=>`${e}, ${n} ${t}${N(r,`, `)}`,comMes:(e,t,n)=>`${t} ${e}, ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${n} ${e} \u2013 ${t}, ${r}`},"es-ES":{pontuacao:{decimal:`,`,milhar:`.`,agrupamentoMinimo:5},porcento:e=>`${e}${A}%`,moeda:{simbolo:`€`,depois:!0,casas:2,escrever:ui},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:di,entreDataEHora:`, `,hora12:M(`a.${A}m.`,`p.${A}m.`),hora24:di,iniciais:`LMXJVSD`,porExtenso:(e,t,n)=>`${e} de ${t} de ${n}`,meses:[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`],mesesCurtos:[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sept`,`oct`,`nov`,`dic`],diasDaSemana:[`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`,`domingo`],longa:(e,t,n,r)=>`${e}, ${t} de ${n}${N(r,` de `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} de ${t}`,mesCurtoEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}\u2013${t} ${n} ${r}`},pl:{pontuacao:{decimal:`,`,milhar:A,agrupamentoMinimo:5},porcento:e=>`${e}%`,moeda:{simbolo:`zł`,depois:!0,casas:2,escrever:ui},data:(e,t,n)=>`${e}.${t}.${n}`,diaMes:(e,t)=>`${e}.${t}`,hora:j,entreDataEHora:`, `,hora12:M(`AM`,`PM`),hora24:j,iniciais:`PWŚCPSN`,porExtenso:(e,t,n)=>`${e} ${t} ${n}`,meses:[`styczeń`,`luty`,`marzec`,`kwiecień`,`maj`,`czerwiec`,`lipiec`,`sierpień`,`wrzesień`,`październik`,`listopad`,`grudzień`],mesesNaData:[`stycznia`,`lutego`,`marca`,`kwietnia`,`maja`,`czerwca`,`lipca`,`sierpnia`,`września`,`października`,`listopada`,`grudnia`],mesesCurtos:[`sty`,`lut`,`mar`,`kwi`,`maj`,`cze`,`lip`,`sie`,`wrz`,`paź`,`lis`,`gru`],diasDaSemana:[`poniedziałek`,`wtorek`,`środa`,`czwartek`,`piątek`,`sobota`,`niedziela`],longa:(e,t,n,r)=>`${e}, ${t} ${n}${N(r,` `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}\u2013${t} ${n} ${r}`},uk:{pontuacao:{decimal:`,`,milhar:A},porcento:e=>`${e}%`,moeda:{simbolo:`₴`,depois:!0,casas:2,escrever:ui},data:(e,t,n)=>`${e}.${t}.${n}`,diaMes:(e,t)=>`${e}.${t}`,hora:j,entreDataEHora:`, `,hora12:M(`дп`,`пп`),hora24:j,iniciais:`ПВСЧПСН`,porExtenso:(e,t,n)=>`${e} ${t} ${n}${A}\u0440.`,meses:[`січень`,`лютий`,`березень`,`квітень`,`травень`,`червень`,`липень`,`серпень`,`вересень`,`жовтень`,`листопад`,`грудень`],mesesNaData:[`січня`,`лютого`,`березня`,`квітня`,`травня`,`червня`,`липня`,`серпня`,`вересня`,`жовтня`,`листопада`,`грудня`],mesesCurtos:[`січ.`,`лют.`,`бер.`,`квіт.`,`трав.`,`черв.`,`лип.`,`серп.`,`вер.`,`жовт.`,`лист.`,`груд.`],diasDaSemana:[`понеділок`,`вівторок`,`середа`,`четвер`,`пʼятниця`,`субота`,`неділя`],longa:(e,t,n,r)=>`${e}, ${t} ${n}${N(r,` `,`${A}\u0440.`)}`,comMes:(e,t,n)=>`${e} ${t} ${n}${A}\u0440.`,mesEAno:(e,t)=>`${e} ${t}${A}\u0440.`,faixa:(e,t,n,r)=>`${e}\u2013${t} ${n} ${r}${A}\u0440.`},ja:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`￥`,depois:!1,casas:0,escrever:li},data:(e,t,n)=>`${n}/${t}/${e}`,diaMes:(e,t)=>`${t}/${e}`,hora:di,entreDataEHora:` `,hora12:pi(`午前`,`午後`,``),hora24:di,iniciais:`月火水木金土日`,porExtenso:(e,t,n)=>`${n}\u5E74${t}${e}\u65E5`,meses:mi(`月`),mesesCurtos:mi(`月`),diasDaSemana:[`月曜日`,`火曜日`,`水曜日`,`木曜日`,`金曜日`,`土曜日`,`日曜日`],longa:(e,t,n,r)=>`${N(r,``,`年`)}${n}${t}\u65E5${e}`,comMes:(e,t,n)=>`${n}\u5E74${t}${e}\u65E5`,mesEAno:(e,t)=>`${t}\u5E74${e}`,faixa:(e,t,n,r)=>`${r}\u5E74${n}${e}\u65E5\uFF5E${t}\u65E5`},"zh-CN":{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`¥`,depois:!1,casas:2,escrever:li},data:(e,t,n)=>`${n}/${t}/${e}`,diaMes:(e,t)=>`${t}/${e}`,hora:j,entreDataEHora:` `,hora12:pi(`上午`,`下午`,``),hora24:j,iniciais:`一二三四五六日`,porExtenso:(e,t,n)=>`${n}\u5E74${t}${e}\u65E5`,meses:mi(`月`),mesesCurtos:mi(`月`),diasDaSemana:[`星期一`,`星期二`,`星期三`,`星期四`,`星期五`,`星期六`,`星期日`],longa:(e,t,n,r)=>`${N(r,``,`年`)}${n}${t}\u65E5${e}`,comMes:(e,t,n)=>`${n}\u5E74${t}${e}\u65E5`,mesEAno:(e,t)=>`${t}\u5E74${e}`,faixa:(e,t,n,r)=>`${r}\u5E74${n}${e}\u65E5\u81F3${t}\u65E5`},ko:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`₩`,depois:!1,casas:0,escrever:li},data:(e,t,n)=>`${n}. ${t}. ${e}.`,diaMes:(e,t)=>`${t}. ${e}.`,hora:pi(`오전`,`오후`,` `),entreDataEHora:` `,hora12:pi(`오전`,`오후`,` `),hora24:j,iniciais:`월화수목금토일`,porExtenso:(e,t,n)=>`${n}\uB144 ${t} ${e}\uC77C`,meses:mi(`월`),mesesCurtos:mi(`월`),diasDaSemana:[`월요일`,`화요일`,`수요일`,`목요일`,`금요일`,`토요일`,`일요일`],longa:(e,t,n,r)=>`${N(r,``,`년 `)}${n} ${t}\uC77C ${e}`,comMes:(e,t,n)=>`${n}\uB144 ${t} ${e}\uC77C`,mesEAno:(e,t)=>`${t}\uB144 ${e}`,faixa:(e,t,n,r)=>`${r}\uB144 ${n} ${e}\uC77C~${t}\uC77C`},ar:{pontuacao:{decimal:`.`,milhar:`,`},porcento:e=>`${e}%`,moeda:{simbolo:`ج.م.`,depois:!0,casas:2,escrever:ui},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:M(`ص`,`م`),entreDataEHora:`، `,hora12:M(`ص`,`م`),hora24:j,iniciais:`نثرخجسح`,porExtenso:(e,t,n)=>`${e} ${t} ${n}`,meses:[`يناير`,`فبراير`,`مارس`,`أبريل`,`مايو`,`يونيو`,`يوليو`,`أغسطس`,`سبتمبر`,`أكتوبر`,`نوفمبر`,`ديسمبر`],mesesCurtos:[`يناير`,`فبراير`,`مارس`,`أبريل`,`مايو`,`يونيو`,`يوليو`,`أغسطس`,`سبتمبر`,`أكتوبر`,`نوفمبر`,`ديسمبر`],diasDaSemana:[`الاثنين`,`الثلاثاء`,`الأربعاء`,`الخميس`,`الجمعة`,`السبت`,`الأحد`],longa:(e,t,n,r)=>`${e}\u060C ${t} ${n}${N(r,` `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}\u2013${t} ${n} ${r}`},ht:{pontuacao:{decimal:`,`,milhar:A},porcento:e=>`${e}${A}%`,moeda:{simbolo:`G`,depois:!0,casas:2,escrever:ui},data:(e,t,n)=>`${e}/${t}/${n}`,diaMes:(e,t)=>`${e}/${t}`,hora:j,entreDataEHora:` `,hora12:M(`AM`,`PM`),hora24:j,iniciais:`LMMJVSD`,porExtenso:(e,t,n)=>`${e} ${t} ${n}`,meses:[`janvye`,`fevriye`,`mas`,`avril`,`me`,`jen`,`jiyè`,`out`,`septanm`,`oktòb`,`novanm`,`desanm`],mesesCurtos:[`jan`,`fev`,`mas`,`avr`,`me`,`jen`,`jiy`,`out`,`sep`,`okt`,`nov`,`des`],diasDaSemana:[`lendi`,`madi`,`mèkredi`,`jedi`,`vandredi`,`samdi`,`dimanch`],longa:(e,t,n,r)=>`${e} ${t} ${n}${N(r,` `)}`,comMes:(e,t,n)=>`${e} ${t} ${n}`,mesEAno:(e,t)=>`${e} ${t}`,faixa:(e,t,n,r)=>`${e}\u2013${t} ${n} ${r}`}};function gi(e){let[t=0,n=1,r=1]=e.split(`-`).map(Number);return[t,n,r]}function _i(e){let[t,n,r]=e.split(`-`);return t===void 0||n===void 0||r===void 0?null:[t,n,r.slice(0,2)]}var vi=e=>e===void 0||e===0||Number.isNaN(e),yi=e=>(ii(e)+6)%7,bi=class{constructor(e){T(this,`c`,void 0),this.c=e}decimal(e,t,n){return ti(e,t,Math.max(t,n),this.c.pontuacao)}numero(e){return this.decimal(e,0,3)}enxuto(e){return ti(Number(e)||0,0,2,{decimal:this.c.pontuacao.decimal,milhar:``})}porcento(e,t=1,n=0){return this.c.porcento(this.decimal(e,n,t))}comPorcento(e){return this.c.porcento(e)}tamanho(e){return ri(e,this.c.pontuacao)}numeroCom(e,t={}){if(!Number.isFinite(e))return String(e);let n=t.minimoDeCasas??0,r=Math.max(n,t.maximoDeCasas??Math.max(3,n)),i=e;if(t.minimoSignificativo!==void 0||t.maximoSignificativo!==void 0){let a=t.maximoSignificativo??21,o=Math.min(t.minimoSignificativo??1,a);i=Number(e.toPrecision(a));let s=Math.abs(i),c=s===0?1:Math.floor(Math.log10(s))+1;r=Math.max(0,a-c),n=Math.min(r,Math.max(0,o-c))}let{decimal:a,milhar:o,agrupamentoMinimo:s=4}=this.c.pontuacao,c=ti(i,n,r,{decimal:a,milhar:``}),l=c.startsWith(`-`),[u=`0`,d]=(l?c.slice(1):c).split(a),f=u.padStart(t.minimoDeInteiros??1,`0`),p=t.agrupar===!1||f.length<s?f:f.replace(/\B(?=(\d{3})+(?!\d))/g,o);return`${l?`-`:``}${p}${d===void 0?``:`${a}${d}`}`}moeda(){let{simbolo:e,depois:t,casas:n}=this.c.moeda;return{simbolo:e,depois:t,casas:n}}comSimbolo(e,t){return this.c.moeda.escrever(e,t)}dinheiroDeCentavos(e){let{simbolo:t,casas:n}=this.c.moeda;return this.comSimbolo(this.decimal(Number(e??0)/100,n,n),t)}dinheiroNaMoeda(e,t,n=2){return this.comSimbolo(this.decimal(Number(e??0)/100,n,n),t)}campoDeCentavos(e){if(e===void 0||e===0)return``;let{casas:t}=this.c.moeda;return this.decimal(e/100,t,t)}centavosDoCampo(e){let t=Number(e.replace(/\D/g,``));return this.c.moeda.casas===0?t*100:t}mascaraDeDinheiro(e){return this.campoDeCentavos(this.centavosDoCampo(e))}mes(e){return this.c.meses[e-1]??``}mesCurto(e){return this.c.mesesCurtos[e-1]??``}mesNaData(e){return(this.c.mesesNaData??this.c.meses)[e-1]??``}diaDaSemana(e){return this.c.diasDaSemana[e-1]??``}inicial(e){return[...this.c.iniciais][e-1]??``}diaDaSemanaDe(e){return this.diaDaSemana(yi(e)+1)}inicialDe(e){return this.inicial(yi(e)+1)}hora(e,t,n=`idioma`){return n===`12`?this.c.hora12(e,t):n===`24`?this.c.hora24(e,t):this.c.hora(e,t)}horaDe(e,{segundos:t=!1,ciclo:n=`idioma`}={}){let r=String(e.getMinutes()).padStart(2,`0`),i=String(e.getSeconds()).padStart(2,`0`);return this.hora(e.getHours(),t?`${r}:${i}`:r,n)}dataDeISO(e){if(e===void 0||e===``)return``;let t=_i(e);return t===null?e:this.c.data(t[2],t[1],t[0])}data(e){return vi(e)?``:this.dataDeISO(Jr(e))}diaMes(e){if(e===void 0||e===``)return``;let t=_i(e);return t===null?e:this.c.diaMes(t[2],t[1])}dataHora(e){if(vi(e))return``;let t=Yr(e);return this.prazo(t.slice(0,16))}prazo(e,t=`idioma`){if(e===void 0||e===``)return``;let[n=``,r=``]=e.split(`T`),i=this.dataDeISO(n);if(r===``)return i;let[a=`0`,o=`00`]=r.split(`:`);return`${i}${this.c.entreDataEHora}${this.hora(Number(a),o.slice(0,2),t)}`}dataLonga(e,{comAno:t=!1}={}){let[n,r,i]=gi(e),a=this.diaDaSemanaDe(e),o=this.mesNaData(r);return t?this.c.longa(a,i,o,n):this.c.longa(a,i,o)}porExtenso(e){let[t,n,r]=gi(e);return this.c.porExtenso(r,this.mesNaData(n),t)}comMes(e){let[t,n,r]=gi(e);return this.c.comMes(r,this.mesCurto(n),t)}dataComMes(e){return vi(e)?``:this.comMes(Jr(e))}dataNoEstilo(e,t=`short`){return t===`medium`?this.comMes(e):t===`long`?this.porExtenso(e):t===`full`?this.dataLonga(e,{comAno:!0}):this.dataDeISO(e)}comHora(e,t,n=`idioma`){let[r=`0`,...i]=t.split(`:`);return`${e}${this.c.entreDataEHora}${this.hora(Number(r),i.join(`:`),n)}`}mesEAno(e,t){return this.c.mesEAno(this.mes(t),e)}mesCurtoEAno(e,t){return(this.c.mesCurtoEAno??this.c.mesEAno)(this.mesCurto(t),e)}faixa(e,t){let[n,r,i]=gi(e),[a,o,s]=gi(t);return n===a&&r===o?this.c.faixa(i,s,this.mesCurto(r),n):`${this.comMes(e)} \u2013 ${this.comMes(t)}`}periodo(e,t){if(e===`dia`)return this.dataLonga(Jr(t),{comAno:!0});if(e===`semana`||e===`agenda`){let{de:e,ate:n}=ci(`semana`,t);return this.faixa(e,n)}let[n,r]=gi(Jr(t));return e===`mes`?this.mesEAno(n,r):String(n)}},xi=new Map;function Si(e){let t=qr(e),n=xi.get(t);return n===void 0&&(n=new bi(hi[t]),xi.set(t,n)),n}Si(`pt-BR`);var Ci={pt:()=>w(()=>import(`./pt-BR.KSNNHFU6-DuN6z9ej.js`),[],import.meta.url),en:()=>w(()=>import(`./en.JTZGPPG5-zaLFZteE.js`),[],import.meta.url),es:()=>w(()=>import(`./es-ES.UR632WR7-D-MYGx8n.js`),[],import.meta.url),pl:()=>w(()=>import(`./pl.JJWICIUZ-DdfgVAw-.js`),__vite__mapDeps([0,1]),import.meta.url),uk:()=>w(()=>import(`./uk.7WLIE2SJ-CF13V2OX.js`),__vite__mapDeps([2,1]),import.meta.url),ja:()=>w(()=>import(`./ja.WQTZPAOX-Bvy9ro-E.js`),[],import.meta.url),zh:()=>w(()=>import(`./zh-CN.WXGELIGQ-BPaR0a7U.js`),[],import.meta.url),ko:()=>w(()=>import(`./ko.NBJX4LBN-BS8o5mLa.js`),[],import.meta.url),ar:()=>w(()=>import(`./ar.6SQYQE6V-C5TIBw8T.js`),__vite__mapDeps([3,1]),import.meta.url),ht:()=>w(()=>import(`./ht.KWO6WY5Y-DWpTen75.js`),[],import.meta.url)},wi=`_|-|‐‑|‒|–|—|―|〜|・|,|、|;|:|!|¡|?|¿|.|…|。|·|'‘’‚|‹|›|"“”„|«|»|(|)|[|]|{|}|〈|〉|《|》|「|」|『|』|【|】|§|¶|@|*|/|\\|&|#|%|‰|†|‡|•|′|″|\`|´|^|¯|¨|¸|°|©|®|+|±|÷|×|<|=|>|¬|||¦|~|¤|¢|$|£|¥|฿|₩|₪|€|₱|₴|₹|₺|₽`,Ti=(()=>{let e=new Map;return wi.split(`|`).forEach((t,n)=>{for(let r of t===`|`?[`|`]:[...t])e.set(r,n)}),e.set(`|`,wi.split(`|`).indexOf(`|`)),e})(),P={Espaco:0,Pontuacao:1,Simbolo:2,Digito:3,Latina:10,Grega:11,Cirilica:12,Hebraica:13,Arabe:14,Outra:15,Hangul:16,Kana:17,Ideograma:18},Ei=2097152,Di={uk:[P.Cirilica],ar:[P.Arabe],zh:[P.Ideograma],ko:[P.Hangul,P.Ideograma],ja:[P.Latina,P.Kana,P.Ideograma]},Oi={es:{ñ:[`n`,1]},pl:{ą:[`a`,1],ć:[`c`,1],ę:[`e`,1],ł:[`l`,1],ń:[`n`,1],ó:[`o`,1],ś:[`s`,1],ź:[`z`,1],ż:[`z`,2]}},ki={ł:`l`,đ:`d`,ð:`d`,ø:`o`,ı:`i`,ħ:`h`,ŧ:`t`},Ai={ß:`ss`,æ:`ae`,œ:`oe`,ĳ:`ij`},ji=`абвгґдђѓеєжзѕиіїйјклљмнњопрстћќуўфхцчџшщъыьэюя`,Mi=`ءأؤإئا`,Ni=`αβγδεζηθικλμνξοπρστυφχψω`,Pi=(()=>{let e={あ:`あかさたなはまやらわがざだばぱぁゃゎ`,い:`いきしちにひみりぎじぢびぴぃゐ`,う:`うくすつぬふむゆるぐずづぶぷぅっゅゔ`,え:`えけせてねへめれげぜでべぺぇゑ`,お:`おこそとのほもよろをごぞどぼぽぉょ`},t=new Map;for(let[n,r]of Object.entries(e))for(let e of r)t.set(e,n);return t})(),Fi=`ぁぃぅぇぉっゃゅょゎゕゖ`,Ii=`あいうえおつやゆよわかけ`,Li={},Ri;function zi(e){let{lingua:t}=Kr(qr(e));return t!==`zh`&&t!==`ja`||Li.zh!==void 0?Promise.resolve():(Ri??=w(async()=>{let{HANZI_EM_PINYIN:e,KANJI_EM_LEITURA:t}=await import(`./ideogramas.NYYHYE6L-CkHTzwS1.js`);return{HANZI_EM_PINYIN:e,KANJI_EM_LEITURA:t}},[],import.meta.url).then(({HANZI_EM_PINYIN:e,KANJI_EM_LEITURA:t})=>{Li.zh=new Map([...e].map((e,t)=>[e,t])),Li.ja=new Map([...t].map((e,t)=>[e,t])),Ki.clear()}),Ri)}function Bi(e,t){if(e<P.Latina)return e;let n=Di[t]??[],r=n.indexOf(e);return r>=0?P.Latina+r:e+n.length}var Vi=e=>e!==e.toLowerCase();function Hi(e){let t=0;for(;/\p{Nd}/u.test(String.fromCodePoint(e-t-1));)t++;return t%10}var Ui=e=>/\p{M}/u.test(e);function Wi(e,{lingua:t,numerico:n}){let r=[],i=[],a=[],o=Oi[t]??{},s=t===`zh`?Li.zh:t===`ja`?Li.ja:void 0,c=(e,n)=>Bi(e,t)*Ei+n,l=(e,t=0,n=0)=>{r.push(e),i.push(t),a.push(n)},u=e=>{i.length>0&&(i[i.length-1]=(i.at(-1)??0)*1024+(e&1023))},d=[...e.normalize(`NFC`)];for(let e=0;e<d.length;e++){let t=d[e]??``,r=t.codePointAt(0)??0,i=t.toLowerCase(),a=+!!Vi(t);if(t===`ـ`||/[​-‏⁠﻿]/.test(t))continue;if(/\s/u.test(t)){l(c(P.Espaco,r));continue}if(/\p{Nd}/u.test(t)){if(!n){l(c(P.Digito,65536+Hi(r)));continue}let t=``;for(;e<d.length&&/\p{Nd}/u.test(d[e]??``);)t+=String(Hi(d[e]?.codePointAt(0)??48)),e++;e--;let i=t.replace(/^0+(?=\d)/,``);l(c(P.Digito,i.length),0,t.length-i.length);for(let e of i)l(c(P.Digito,65536+Number(e)));continue}let f=o[i];if(f!==void 0){l(c(P.Latina,(f[0].charCodeAt(0)-97)*4+f[1]),0,a);continue}if(r>=44032&&r<=55203){l(c(P.Hangul,r));continue}if(/\p{Script=Han}/u.test(t)){let e=s?.get(t);l(c(P.Ideograma,e??65536+r));continue}let p=ji.indexOf(i);if(p>=0){l(c(P.Cirilica,p),0,a);continue}if(r>=1569&&r<=1610){let e=Mi.indexOf(t);t===`آ`?(l(c(P.Arabe,1575),0),l(c(P.Arabe,1575),Mi.indexOf(`ا`))):e>=0?l(c(P.Arabe,1575),e):l(c(P.Arabe,r));continue}let ee=Ti.get(t);if(ee!==void 0){l(c(P.Pontuacao,ee));continue}let te=[...i.normalize(`NFKD`)],ne=i.normalize(`NFD`)===i.normalize(`NFKD`)?0:2,m=te.filter(Ui).map(e=>e.codePointAt(0)??0),h=te.filter(e=>!Ui(e)),g=m.reduce((e,t)=>e*1024+(t&1023),0);if(h.length===0)for(let e of m)u(e);else h.forEach((t,n)=>{let r=n===0?g:0,i=a+ne,s=Gi(t,c,o,d[e-1]),u=+!/[ぁぃぅぇぉっゃゅょゎゕゖァィゥェォッャュョヮヵヶー]/u.test(t),f=/[\u3041-\u3096\u30a1-\u30fa\u30fc]/u.test(t)?u:0;for(let[e,t]of s.entries())l(t,e===0?r:0,i+f)})}return{primario:r,secundario:i,terciario:a}}function Gi(e,t,n,r){let i=e.codePointAt(0)??0;if(e>=`a`&&e<=`z`)return[t(P.Latina,(i-97)*4)];if(/\p{Nd}/u.test(e))return[t(P.Digito,65536+Hi(i))];let a=n[e];if(a!==void 0)return[t(P.Latina,(a[0].charCodeAt(0)-97)*4+a[1])];let o=ki[e];if(o!==void 0)return[t(P.Latina,(o.charCodeAt(0)-97)*4)+3];let s=Ai[e];if(s!==void 0)return[...s].map(e=>t(P.Latina,(e.charCodeAt(0)-97)*4));if(/\p{Script=Latin}/u.test(e))return[t(P.Latina,4096+i)];let c=Ni.indexOf(e===`ς`?`σ`:e);if(c>=0)return[t(P.Grega,c)];if(/\p{Script=Greek}/u.test(e))return[t(P.Grega,4096+i)];let l=ji.indexOf(e);if(l>=0)return[t(P.Cirilica,l)];if(/\p{Script=Cyrillic}/u.test(e))return[t(P.Cirilica,4096+i)];if(/\p{Script=Hebrew}/u.test(e))return[t(P.Hebraica,i)];if(/\p{Script=Arabic}/u.test(e))return[t(P.Arabe,i)];if(/[ぁ-ゖァ-ヺー]/u.test(e)){let n=e;if(n===`ー`){let e=(r??``).normalize(`NFD`)[0]??``,i=/[ァ-ヺ]/u.test(e)?String.fromCharCode(e.charCodeAt(0)-96):e,a=Pi.get(i);if(a===void 0)return[t(P.Pontuacao,0)];n=a}/[ァ-ヶ]/u.test(n)&&(n=String.fromCharCode(n.charCodeAt(0)-96));let i=Fi.indexOf(n);return i>=0&&(n=Ii[i]??n),[t(P.Kana,n.charCodeAt(0))]}return/\p{P}/u.test(e)?[t(P.Pontuacao,4096+i)]:/\p{S}/u.test(e)?[t(P.Simbolo,i)]:[t(P.Outra,i)]}var Ki=new Map;function qi(e,t){let n=`${t.lingua}\0${+!!t.numerico}\0${e}`,r=Ki.get(n);return r===void 0&&(Ki.size>2e4&&Ki.clear(),r=Wi(e,t),Ki.set(n,r)),r}function Ji(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=(e[r]??0)-(t[r]??0);if(n!==0)return n<0?-1:1}return e.length===t.length?0:e.length<t.length?-1:1}function Yi(e,t){return e<t?-1:+(e>t)}function Xi(e,t,n,r={}){let{lingua:i}=Kr(qr(e)),a={lingua:i,numerico:r.numerico===!0},o=qi(t,a),s=qi(n,a);return Ji(o.primario,s.primario)||Ji(o.secundario,s.secundario)||Ji(o.terciario,s.terciario)||Yi(t,n)}var Zi=new Set,Qi=new Map,$i,ea=new Map,ta=`ltr`,na=`en`,ra=typeof MutationObserver<`u`&&typeof document<`u`&&typeof document.documentElement<`u`;ra&&(ta=document.documentElement.dir||`ltr`,na=document.documentElement.lang||navigator.language,aa(na),new MutationObserver(()=>{let e=oa(document.documentElement.lang||navigator.language);e===void 0?sa():e.then(sa)}).observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]}));function ia(...e){for(let t of e){let e=t.$code.toLowerCase(),n=Qi.get(e);Qi.set(e,n?{...n,...t}:t),$i??=t}sa()}function aa(e){zi(e).then(()=>{for(let e of Zi)e.requestUpdate()}),oa(e)}function oa(e){let t=Kr(e).lingua.toLowerCase();if(Qi.has(t))return;let n=Ci[t];if(n===void 0)return;let r=ea.get(t);return r===void 0&&(r=n().then(e=>ia(e.default),e=>console.error(`Kobi Kit: os r\xF3tulos de "${t}" n\xE3o chegaram.`,e)),ea.set(t,r)),r}function sa(){ra&&(ta=document.documentElement.dir||`ltr`,na=document.documentElement.lang||navigator.language,aa(na));for(let e of Zi)e.requestUpdate()}function ca(e){let t=Kr(e),n=t.lingua,r=t.regiao.toLowerCase();return n===``?{regional:void 0,idioma:void 0}:{regional:r?Qi.get(`${n}-${r}`):void 0,idioma:Qi.get(n)}}var la=class{constructor(e){T(this,`host`,void 0),this.host=e,this.host.addController(this)}hostConnected(){Zi.add(this.host),this.host.lang&&aa(this.host.lang)}hostDisconnected(){Zi.delete(this.host)}dir(){return`${this.host.dir||ta}`.toLowerCase()}lang(){return`${this.host.lang||na}`.toLowerCase()}exists(e,t){let{includeFallback:n=!1,lang:r=this.lang()}=t??{},{regional:i,idioma:a}=ca(r);return!!(i?.[e]??a?.[e]??(n?$i?.[e]:void 0))}term(e,...t){let{regional:n,idioma:r}=ca(this.lang()),i=n?.[e]??r?.[e]??$i?.[e];return i===void 0?(console.error(`Nenhuma tradu\xE7\xE3o encontrada para: ${String(e)}`),String(e)):typeof i==`function`?i(...t):String(i)}escrita(){return Si(this.lang())}comparar(e,t,n){return Xi(this.lang(),e,t,n)}};ia(Wr);var ua=(ia(Wr),class extends la{});ia(Ur);var da=e=>{let{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()};function fa(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var pa=globalThis,ma=pa.ShadowRoot&&(pa.ShadyCSS===void 0||pa.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ha=Symbol(),ga=new WeakMap,_a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ma&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ga.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ga.set(t,e))}return e}toString(){return this.cssText}},va=e=>new _a(typeof e==`string`?e:e+``,void 0,ha),F=(e,...t)=>new _a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,ha),ya=(e,t)=>{if(ma)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=pa.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ba=ma?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return va(t)})(e):e,{is:xa,defineProperty:Sa,getOwnPropertyDescriptor:Ca,getOwnPropertyNames:wa,getOwnPropertySymbols:Ta,getPrototypeOf:Ea}=Object,Da=globalThis,Oa=Da.trustedTypes,ka=Oa?Oa.emptyScript:``,Aa=Da.reactiveElementPolyfillSupport,ja=(e,t)=>e,Ma={toAttribute(e,t){switch(t){case Boolean:e=e?ka:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Na=(e,t)=>!xa(e,t),Pa={attribute:!0,type:String,converter:Ma,reflect:!1,useDefault:!1,hasChanged:Na};Symbol.metadata??=Symbol(`metadata`),Da.litPropertyMetadata??=new WeakMap;var Fa=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pa){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Sa(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ca(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pa}static _$Ei(){if(this.hasOwnProperty(ja(`elementProperties`)))return;let e=Ea(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ja(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ja(`properties`))){let e=this.properties,t=[...wa(e),...Ta(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ba(e))}else e!==void 0&&t.push(ba(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ya(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute===void 0?Ma:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Ma:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Na)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];e!==!0||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Fa.elementStyles=[],Fa.shadowRootOptions={mode:`open`},Fa[ja(`elementProperties`)]=new Map,Fa[ja(`finalized`)]=new Map,Aa?.({ReactiveElement:Fa}),(Da.reactiveElementVersions??=[]).push(`2.1.2`);var Ia=globalThis,La=e=>e,Ra=Ia.trustedTypes,za=Ra?Ra.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ba=`$lit$`,I=`lit$${Math.random().toFixed(9).slice(2)}$`,Va=`?`+I,Ha=`<${Va}>`,Ua=document,Wa=()=>Ua.createComment(``),Ga=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ka=Array.isArray,qa=e=>Ka(e)||typeof e?.[Symbol.iterator]==`function`,Ja=`[ 	
\f\r]`,Ya=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xa=/-->/g,Za=/>/g,Qa=RegExp(`>|${Ja}(?:([^\\s"'>=/]+)(${Ja}*=${Ja}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`),$a=/'/g,eo=/"/g,to=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),R=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),no=new WeakMap,ro=Ua.createTreeWalker(Ua,129);function io(e,t){if(!Ka(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return za===void 0?t:za.createHTML(t)}var ao=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ya;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ya?c[1]===`!--`?o=Xa:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Qa):(to.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Qa):o=Za:o===Qa?c[0]===`>`?(o=i??Ya,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Qa:c[3]===`"`?eo:$a):o===eo||o===$a?o=Qa:o===Xa||o===Za?o=Ya:(o=Qa,i=void 0);let d=o===Qa&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ya?n+Ha:l>=0?(r.push(s),n.slice(0,l)+Ba+n.slice(l)+I+d):n+I+(l===-2?t:d)}return[io(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},oo=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ao(t,n);if(this.el=e.createElement(l,r),ro.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ro.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ba)){let t=u[o++],n=i.getAttribute(e).split(I),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?fo:r[1]===`?`?po:r[1]===`@`?mo:uo}),i.removeAttribute(e)}else e.startsWith(I)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(to.test(i.tagName)){let e=i.textContent.split(I),t=e.length-1;if(t>0){i.textContent=Ra?Ra.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Wa()),ro.nextNode(),c.push({type:2,index:++a});i.append(e[t],Wa())}}}else if(i.nodeType===8){if(i.data===Va)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(I,e+1))!==-1;)c.push({type:7,index:a}),e+=I.length-1}}a++}}static createElement(e,t){let n=Ua.createElement(`template`);return n.innerHTML=e,n}};function so(e,t,n=e,r){if(t===R)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ga(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=so(e,i._$AS(e,t.values),i,r)),t}var co=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ua).importNode(t,!0);ro.currentNode=r;let i=ro.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new lo(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ho(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ro.nextNode(),a++)}return ro.currentNode=Ua,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},lo=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=so(this,e,t),Ga(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==R&&this._(e):e._$litType$===void 0?e.nodeType===void 0?qa(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&Ga(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ua.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=oo.createElement(io(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new co(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=no.get(e.strings);return t===void 0&&no.set(e.strings,t=new oo(e)),t}k(t){Ka(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Wa()),this.O(Wa()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=La(e).nextSibling;La(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},uo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=so(this,e,t,0),a=!Ga(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=so(this,r[n+o],t,o),s===R&&(s=this._$AH[o]),a||=!Ga(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},fo=class extends uo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},po=class extends uo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},mo=class extends uo{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=so(this,e,t,0)??z)===R)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ho=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){so(this,e)}},go={M:Ba,P:I,A:Va,C:1,L:ao,R:co,D:qa,V:so,I:lo,H:uo,N:po,U:mo,B:fo,F:ho},_o=Ia.litHtmlPolyfillSupport;_o?.(oo,lo),(Ia.litHtmlVersions??=[]).push(`3.3.3`);var vo=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new lo(t.insertBefore(Wa(),e),e,void 0,n??{})}return i._$AI(e),i},yo=globalThis,bo=class extends Fa{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};bo._$litElement$=!0,bo.finalized=!0,yo.litElementHydrateSupport?.({LitElement:bo});var xo=yo.litElementPolyfillSupport;xo?.({LitElement:bo}),(yo.litElementVersions??=[]).push(`4.2.2`);var So=F`
  :host {
    display: inline-block;
    color: var(--kk-color-neutral-600);
    font-size: x-medium;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--kk-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--kk-spacing-x-small);
    cursor: pointer;
    transition: var(--kk-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--kk-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--kk-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Co=Symbol.for(``),wo=e=>{if(e?.r===Co)return e?._$litStatic$},To=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Co}),Eo=new Map,Do=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=wo(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Eo.get(e))===void 0&&(o.raw=o,Eo.set(e,t=o)),n=s}return e(t,...n)})(L),Oo={fromAttribute:e=>e??``,toAttribute:e=>e===``?null:e},ko=new WeakMap,Ao=new WeakMap,jo=new WeakMap,Mo=new WeakSet,No=new WeakMap,Po=class{constructor(e,t){T(this,`host`,void 0),T(this,`form`,void 0),T(this,`options`,void 0),T(this,`handleFormData`,e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`kk-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&typeof r<`u`&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))}),T(this,`handleFormSubmit`,e=>{let t=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&ko.get(this.form)?.forEach(e=>{this.setUserInteracted(e,!0)}),this.form&&!this.form.noValidate&&!t&&!n(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}),T(this,`handleFormReset`,()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),No.set(this.host,[])}),T(this,`handleInteraction`,e=>{let t=No.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}),T(this,`checkFormValidity`,()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0}),T(this,`reportFormValidity`,()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0}),this.host=e,e.addController(this),this.options={form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`kk-input`],...t}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),No.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),No.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ko.has(this.form)?ko.get(this.form).add(this.host):ko.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),Ao.has(this.form)||(Ao.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),jo.has(this.form)||(jo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=ko.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),Ao.has(this.form)&&(this.form.reportValidity=Ao.get(this.form),Ao.delete(this.form)),jo.has(this.form)&&(this.form.checkValidity=jo.get(this.form),jo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Mo.add(e):Mo.delete(e),e.requestUpdate()}doAction(e,t){this.form&&Io(this.form,e,t)}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!Mo.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}},Fo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});function Io(e,t,n){let r=document.createElement(`button`);r.type=t,r.style.position=`absolute`,r.style.width=`0`,r.style.height=`0`,r.style.clipPath=`inset(50%)`,r.style.overflow=`hidden`,r.style.whiteSpace=`nowrap`,n&&(r.name=n.name,r.value=n.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{n.hasAttribute(e)&&r.setAttribute(e,n.getAttribute(e))})),e.append(r),r.click(),r.remove()}var B=e=>e??z,Lo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ro=e=>(...t)=>({_$litDirective$:e,values:t}),zo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Bo=Ro(class extends zo{constructor(e){if(super(e),e.type!==Lo.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return R}}),{I:Vo}=go,Ho=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Uo=e=>e.strings===void 0,Wo={},Go=(e,t=Wo)=>e._$AH=t,Ko=[`bandeiras`,`pagamentos`,`social`].map(e=>({name:e,resolver:t=>a(`assets/${e}/${t}.svg`)})),qo={caret:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M15 6l-6 6l6 6" /> </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 6l6 6l-6 6" /> </svg>
  `,calendar:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /> <path d="M16 3v4" /> <path d="M8 3v4" /> <path d="M4 11h16" /> <path d="M11 15h1" /> <path d="M12 15v3" /> </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /> <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /> </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /> </svg>
  `,"eye-off":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /> <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /> <path d="M3 3l18 18" /> </svg>
  `,"color-picker":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M11 7l6 6" /> <path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4" /> </svg>
  `,menu:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 6l16 0" /> <path d="M4 12l16 0" /> <path d="M4 18l16 0" /> </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> </svg>
  `,user:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /> </svg>
  `,"player-play":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /> </svg>
  `,"player-pause":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> </svg>
  `,star:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /> </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6l-12 12" /> <path d="M6 6l12 12" /> </svg>
  `,"circle-x":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `},Jo=[{name:`default`,resolver:(e,t)=>a(`assets/icons/${t}/${e}.svg`)},{name:`system`,resolver:e=>e in qo?`data:image/svg+xml,${encodeURIComponent(qo[e])}`:``},...Ko],Yo=[];function Xo(e){Yo.push(e)}function Zo(e){Yo=Yo.filter(t=>t!==e)}function Qo(e){return Jo.find(t=>t.name===e)}var $o=F`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,es=F`
  @layer kobi.components {
    :host {
      box-sizing: border-box;
    }

    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }

    [hidden] {
      display: none !important;
    }
  }
`;function ts(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function ns(e,t,n){ts(e,t),t.set(e,n)}function rs(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function is(e,t,n){return e.set(rs(e,t),n),n}function V(e,t){return e.get(rs(e,t))}var as,os,ss,cs,ls={attribute:!0,type:String,converter:Ma,reflect:!1,hasChanged:Na},us=(e=ls,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function H(e){return(t,n)=>typeof n==`object`?us(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function ds(e){return H({...e,state:!0,attribute:!1})}var fs=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function ps(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return fs(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return fs(n,r,{get(){return a(this)}})}}var ms=new WeakMap,hs=(e=`value`)=>(t,n)=>{n.addInitializer(function(){let t={observada:e,destino:String(n.name)},r=ms.get(this);r?r.push(t):ms.set(this,[t])})};function gs(e,t,n){let r=ms.get(e);if(!r)return;let i=e.constructor,a=e;for(let{observada:e,destino:o}of r){let r=i.getPropertyOptions(e);if(t!==(typeof r.attribute==`string`?r.attribute:e))continue;let s=r.converter||Ma,c=(typeof s==`function`?s:s?.fromAttribute??Ma.fromAttribute)(n,r.type);a[e]!==c&&(a[o]=c)}}var _s=new WeakMap;function vs(e,t){let n=Array.isArray(e)?e:[e],r=t?.waitUntilFirstUpdate??!1;return(e,t)=>{t.addInitializer(function(){let t={propriedades:n,handler:e,esperarPrimeiroRender:r},i=_s.get(this);i?i.push(t):_s.set(this,[t])})}}function ys(e,t){let n=_s.get(e);if(!n)return;let r=e,i=new Set;for(let a=0;a<10;a++){let a=!1;for(let[o,{propriedades:s,handler:c,esperarPrimeiroRender:l}]of n.entries())if(!l||e.hasUpdated)for(let n of s){if(!t.has(n))continue;let s=`${o}:${n}`;if(i.has(s))continue;let l=t.get(n),u=r[n];l!==u&&(i.add(s),a=!0,c.call(e,l,u))}if(!a)return}}var bs=[`badInput`,`customError`,`patternMismatch`,`rangeOverflow`,`rangeUnderflow`,`stepMismatch`,`tooLong`,`tooShort`,`typeMismatch`,`valueMissing`];function xs(e){return{...Object.fromEntries(bs.map(t=>[t,e[t]===!0])),valid:!bs.some(t=>e[t])}}var Ss=(as=new WeakMap,os=new WeakMap,ss=new WeakMap,cs=new WeakMap,class{constructor(e){T(this,`states`,void 0),ns(this,as,void 0),ns(this,os,xs({})),ns(this,ss,``),ns(this,cs,void 0),is(as,this,e)}get form(){return V(as,this).closest(`form`)}get validity(){return V(os,this)}get validationMessage(){return V(os,this).valid?``:V(ss,this)}setFormValue(){}setValidity(e={},t=``,n){is(os,this,xs(e)),is(ss,this,t),is(cs,this,n)}checkValidity(){return V(os,this).valid?!0:(V(as,this).dispatchEvent(new Event(`invalid`,{cancelable:!0})),!1)}reportValidity(){if(V(os,this).valid)return!0;let e=new Event(`invalid`,{cancelable:!0});if(V(as,this).dispatchEvent(e)){let e=V(cs,this);typeof e?.reportValidity==`function`?e.reportValidity():e?.focus()}return!1}});function Cs(e){return typeof e.attachInternals==`function`?e.attachInternals():new Ss(e)}var ws,Ts,Es,Ds,Os,ks,As,U=class extends (Es=bo,Ts=[H()],ws=[H()],Es){constructor(){super(),_(this,`_internals`),y(this,Os,h(Ds,8,this)),h(Ds,11,this),y(this,ks,h(Ds,12,this)),h(Ds,15,this),y(this,As,!1),_(this,`initialReflectedProperties`,new Map),this._internals=Cs(this),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v${t.version}`),`version`in r&&r.version&&(a=` v${r.version}`),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}addState(e){this._internals.states&&this._internals.states.add(e.startsWith(`--`)?e:`--${e}`)}removeState(e){this._internals.states&&this._internals.states.delete(e.startsWith(`--`)?e:`--${e}`)}toggleState(e,t){let n=e.startsWith(`--`)?e:`--${e}`;this._internals.states&&(typeof t==`boolean`?t?this._internals.states.add(n):this._internals.states.delete(n):this._internals.states.has(n)?this._internals.states.delete(n):this._internals.states.add(n))}attributeChangedCallback(e,t,n){ie(this,As)||(this.constructor.elementProperties.forEach((e,t)=>{let n=t;e.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),ae(this,As,!0)),gs(this,e,n),super.attributeChangedCallback(e,t,n)}update(e){ys(this,e),super.update(e)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{let r=n;e.has(r)&&this[r]==null&&(this[r]=t)})}};Ds=p(Es),Os=new WeakMap,ks=new WeakMap,As=new WeakMap,g(Ds,4,`dir`,Ts,U,Os),g(Ds,4,`lang`,ws,U,ks),m(Ds,U),_(U,`version`,`0.0.0`),_(U,`dependencies`,{});var js=Symbol(),Ms=Symbol(),Ns,Ps=new Map,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,W,Ws,Gs,Ks,qs,Js,Ys,G=class extends (Us=U,Hs=[ds()],Vs=[H({reflect:!0})],Bs=[H()],zs=[H()],Rs=[H({reflect:!0})],Ls=[H({reflect:!0})],Is=[vs(`label`)],Fs=[vs([`name`,`src`,`library`,`variant`])],Us){constructor(){super(...arguments),h(W,5,this),_(this,`initialRender`,!1),y(this,Ws,h(W,8,this,null)),h(W,11,this),y(this,Gs,h(W,12,this)),h(W,15,this),y(this,Ks,h(W,16,this)),h(W,19,this),y(this,qs,h(W,20,this,``)),h(W,23,this),y(this,Js,h(W,24,this,`default`)),h(W,27,this),y(this,Ys,h(W,28,this,`outline`)),h(W,31,this)}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=L`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?js:Ms}catch{return Ms}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return js;Ns||=new DOMParser;let r=Ns.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):js}catch{return js}}connectedCallback(){super.connectedCallback(),Xo(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Zo(this)}getIconSource(){let e=Qo(this.library);return this.name&&e?{url:e.resolver(this.name,this.variant),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?Qo(this.library):void 0;if(!e){this.svg=null;return}let r=Ps.get(e);if(r||(r=this.resolveIcon(e,n),Ps.set(e,r)),!this.initialRender)return;let i=await r;if(i===Ms&&Ps.delete(e),e===this.getIconSource().url){if(Ho(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case Ms:case js:this.svg=null,this.emit(`kk-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`kk-load`)}}}render(){return this.svg}};W=p(Us),Ws=new WeakMap,Gs=new WeakMap,Ks=new WeakMap,qs=new WeakMap,Js=new WeakMap,Ys=new WeakMap,g(W,4,`svg`,Hs,G,Ws),g(W,4,`name`,Vs,G,Gs),g(W,4,`src`,Bs,G,Ks),g(W,4,`label`,zs,G,qs),g(W,4,`library`,Rs,G,Js),g(W,4,`variant`,Ls,G,Ys),g(W,1,`handleLabelChange`,Is,G),g(W,1,`setIcon`,Fs,G),m(W,G),_(G,`styles`,[es,$o]);var Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,K,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,q=class extends (lc=U,cc=[ps(`.icon-button`)],sc=[ds()],oc=[H()],ac=[H()],ic=[H()],rc=[H()],nc=[H()],tc=[H()],ec=[H()],$s=[H()],Qs=[H({type:Boolean,reflect:!0})],Zs=[H()],Xs=[H({reflect:!0})],lc){constructor(){super(...arguments),y(this,uc,h(K,8,this)),h(K,11,this),y(this,dc,h(K,12,this,!1)),h(K,15,this),y(this,fc,h(K,16,this)),h(K,19,this),y(this,pc,h(K,20,this)),h(K,23,this),y(this,mc,h(K,24,this,`outline`)),h(K,27,this),y(this,hc,h(K,28,this)),h(K,31,this),y(this,gc,h(K,32,this)),h(K,35,this),y(this,_c,h(K,36,this)),h(K,39,this),y(this,vc,h(K,40,this)),h(K,43,this),y(this,yc,h(K,44,this,``)),h(K,47,this),y(this,bc,h(K,48,this,!1)),h(K,51,this),y(this,xc,h(K,52,this,`button`)),h(K,55,this),y(this,Sc,h(K,56,this)),h(K,59,this)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleClick(e){if(this.disabled)e.preventDefault(),e.stopPropagation();else if(this.type!==`button`){let e=this.form?this.getRootNode().querySelector(`#${this.form}`):this.closest(`form`);e&&Io(e,this.type)}}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?To`a`:To`button`;return Do`
      <${t}
        part="base"
        class=${Bo({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:this.type)}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e&&this.target?`noreferrer noopener`:void 0)}
        role=${B(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <kk-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          variant=${this.variant}
          src=${B(this.src)}
          aria-hidden="true"
        ></kk-icon>
      </${t}>
    `}};K=p(lc),uc=new WeakMap,dc=new WeakMap,fc=new WeakMap,pc=new WeakMap,mc=new WeakMap,hc=new WeakMap,gc=new WeakMap,_c=new WeakMap,vc=new WeakMap,yc=new WeakMap,bc=new WeakMap,xc=new WeakMap,Sc=new WeakMap,g(K,4,`button`,cc,q,uc),g(K,4,`hasFocus`,sc,q,dc),g(K,4,`name`,oc,q,fc),g(K,4,`library`,ac,q,pc),g(K,4,`variant`,ic,q,mc),g(K,4,`src`,rc,q,hc),g(K,4,`href`,nc,q,gc),g(K,4,`target`,tc,q,_c),g(K,4,`download`,ec,q,vc),g(K,4,`label`,$s,q,yc),g(K,4,`disabled`,Qs,q,bc),g(K,4,`type`,Zs,q,xc),g(K,4,`form`,Xs,q,Sc),m(K,q),_(q,`styles`,[es,So]),_(q,`dependencies`,{"kk-icon":G});var Cc=F`
  :host {
    display: contents;

    /* A margem zera aqui, e a parte base a herda de quem usa. */
    margin: 0;

    /*
     * A cor da variante, e a tinta que sai dela. O padrão é o da variante padrão
     * do componente (primary): as cinco classes .alert--* trocam só esta linha, e
     * a barra, o ícone, a contagem regressiva e a tinta seguem juntos por
     * construção. Um token por peça seria uma chance a mais de eles discordarem.
     *
     * **A tinta é chapada, e a barra é lateral.** Foi o desenho pedido nas quatro
     * referências de packages/kit/referencias/: um bloco de aviso é lido de
     * relance, e um véu que desbota tira do corpo justamente a cor que diz de que
     * tipo de aviso se trata — a metade de baixo de um alerta longo ficava igual à
     * de um alerta de outra variante. A barra à esquerda corre a altura inteira e
     * responde a mesma pergunta sem depender de o topo estar visível.
     *
     * O kk-card e o kk-stat continuam com a faixa no topo e o véu que desce: lá o
     * conteúdo é painel, não aviso, e o degradê é o que separa o cabeçalho do
     * corpo. É por isso que a força da tinta ainda vem do tema — o
     * --kk-tint-strength é o mesmo dos três — e só o alcance saiu: sem degradê
     * não há até onde descer.
     */
    --kk-alert-accent-color: var(--kk-color-primary-600);
    --kk-alert-tint-strength: var(--kk-tint-strength);
  }

  .alert {
    /*
     * A mistura é com o fundo do painel, e não com transparent: chapada, ela é
     * uma cor só, e uma cor com alfa por cima de um fundo que já pode ser
     * translúcido (o alerta flutuante empilhado) mudaria de tom conforme o que
     * estivesse atrás dele.
     */
    --kk-alert-tint-color: color-mix(
      in oklab,
      var(--kk-alert-accent-color) var(--kk-alert-tint-strength),
      var(--kk-panel-background-color)
    );

    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--kk-alert-tint-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-inline-start-width: calc(var(--kk-panel-border-width) * 3);
    border-inline-start-color: var(--kk-alert-accent-color);
    border-radius: var(--kk-border-radius-medium);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-normal);
    line-height: 1.6;
    color: var(--kk-color-neutral-700);
    margin: inherit;
    overflow: hidden;

    /*
     * Abrir e fechar é CSS: opacidade e escala, com o display saindo de none pelo
     * allow-discrete — ele entra no começo ao abrir e só sai no FIM ao fechar — e o
     * @starting-style dando o ponto de partida. Ele vale também para o PRIMEIRO desenho,
     * e é isso que a classe alert--transicao segura: um <kk-alert open> nasceria a 80 % e
     * cresceria à vista — e o botão de fechar andaria debaixo de quem já foi clicá-lo. Ela
     * só entra depois do primeiro desenho, na primeira troca de open. Quem espera o fim é
     * o componente, pelo getAnimations().
     */
    opacity: 1;
    scale: 1;
    transition:
      opacity var(--kk-alert-transition, var(--kk-transition-medium)) ease,
      scale var(--kk-alert-transition, var(--kk-transition-medium)) ease,
      display var(--kk-alert-transition, var(--kk-transition-medium)) allow-discrete;

    /*
     * NÃO declare container-type aqui. Como o :host é display: contents, é este .alert
     * que participa do layout do avô — e com contenção de tamanho inline ele para de
     * tirar a largura do próprio conteúdo. Em contexto de bloco ainda funcionava, mas
     * dentro de um flex o alerta encolhia para 2px e virava um risco na tela. Vale o
     * mesmo raciocínio do card.styles.ts, onde isto está explicado por extenso.
     */
  }

  .alert:not(.alert--open) {
    display: none;
    opacity: 0;
    scale: 0.8;
  }

  @starting-style {
    .alert--open.alert--transicao {
      opacity: 0;
      scale: 0.8;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .alert {
      transition: none;
    }
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-font-size-large);
    padding-inline-start: var(--kk-spacing-large);
    color: var(--kk-alert-accent-color);
  }

  .alert--has-countdown {
    border-block-end: none;
  }

  .alert--primary {
    --kk-alert-accent-color: var(--kk-color-primary-600);
  }

  .alert--success {
    --kk-alert-accent-color: var(--kk-color-success-600);
  }

  .alert--neutral {
    --kk-alert-accent-color: var(--kk-color-neutral-600);
  }

  .alert--warning {
    --kk-alert-accent-color: var(--kk-color-warning-600);
  }

  .alert--danger {
    --kk-alert-accent-color: var(--kk-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--kk-spacing-large);
    overflow: hidden;
  }

  /* O ícone e o traço trazem a cor do tipo de aviso; o título fica no texto, para o contraste. */
  .alert__heading {
    margin-block-end: var(--kk-spacing-3x-small);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-semibold);
    line-height: var(--kk-line-height-dense);
    color: var(--kk-color-neutral-1000);
  }

  .alert__action {
    display: flex;
    flex-wrap: wrap;
    gap: var(--kk-spacing-x-small);
    margin-block-start: var(--kk-spacing-small);
  }

  .alert__action[hidden] {
    display: none;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-font-size-medium);
    margin-inline-end: var(--kk-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 100%;
    height: calc(var(--kk-panel-border-width) * 3);
    background-color: var(--kk-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
    background-color: var(--kk-alert-accent-color);
  }

  .alert__timer {
    display: none;
  }
`;async function wc(e,...t){await e.updateComplete,await Promise.allSettled(t.flatMap(e=>e.getAnimations()).map(e=>e.finished))}var Tc=class{constructor(e,...t){T(this,`host`,void 0),T(this,`slotNames`,[]),T(this,`handleSlotChange`,e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}),this.host=e,e.addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`kk-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,J,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Y=class e extends (Rc=U,Lc=[ps(`[part~="base"]`)],Ic=[ps(`.alert__countdown-elapsed`)],Fc=[H({type:Boolean,reflect:!0})],Pc=[H()],Nc=[H({type:Boolean,reflect:!0})],Mc=[H({reflect:!0})],jc=[H({type:Number})],Ac=[H({type:String,reflect:!0})],kc=[ds()],Oc=[ds()],Dc=[vs(`open`,{waitUntilFirstUpdate:!0})],Ec=[vs(`duration`)],Rc){constructor(){super(...arguments),h(J,5,this),_(this,`autoHideTimeout`),_(this,`remainingTimeInterval`),_(this,`countdownAnimation`),_(this,`hasSlotController`,new Tc(this,`icon`,`heading`,`action`)),_(this,`localize`,new ua(this)),_(this,`origemDoFoco`),y(this,zc,h(J,8,this)),h(J,11,this),y(this,Bc,h(J,12,this)),h(J,15,this),y(this,Vc,h(J,16,this,!1)),h(J,19,this),y(this,Hc,h(J,20,this,``)),h(J,23,this),y(this,Uc,h(J,24,this,!1)),h(J,27,this),y(this,Wc,h(J,28,this,`primary`)),h(J,31,this),y(this,Gc,h(J,32,this,1/0)),h(J,35,this),y(this,Kc,h(J,36,this)),h(J,39,this),y(this,qc,h(J,40,this,this.duration)),h(J,43,this),y(this,Jc,h(J,44,this,!1)),h(J,47,this)}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`kk-toast-stack`}),this.currentToastStack}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>{this.hide()},this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>{this.hide()},this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleFocusIn(e){let t=e.relatedTarget;t instanceof HTMLElement&&!this.contains(t)&&t!==this&&(this.origemDoFoco=t)}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.transicao=!0,this.open)this.emit(`kk-show`),this.duration<1/0&&this.restartAutoHide(),await wc(this,this.base),this.emit(`kk-after-show`);else{let e=this.matches(`:focus-within`);da(this),this.emit(`kk-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await wc(this,this.base),e&&this.origemDoFoco?.isConnected&&this.origemDoFoco.focus(),this.origemDoFoco=void 0,this.emit(`kk-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,fa(this,`kk-after-show`)}async hide(){if(this.open)return this.open=!1,fa(this,`kk-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`kk-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`kk-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return L`
      <div
        part="base"
        class=${Bo({alert:!0,"alert--open":this.open,"alert--transicao":this.transicao,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
        @focusin=${this.handleFocusIn}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          ${this.heading||this.hasSlotController.test(`heading`)?L`<div part="heading" class="alert__heading"><slot name="heading">${this.heading}</slot></div>`:z}
          <slot></slot>
          <div part="action" class="alert__action" ?hidden=${!this.hasSlotController.test(`action`)}>
            <slot name="action"></slot>
          </div>
        </div>

        ${this.closable?L`
              <kk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></kk-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?L`
              <div
                class=${Bo({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};J=p(Rc),zc=new WeakMap,Bc=new WeakMap,Vc=new WeakMap,Hc=new WeakMap,Uc=new WeakMap,Wc=new WeakMap,Gc=new WeakMap,Kc=new WeakMap,qc=new WeakMap,Jc=new WeakMap,g(J,4,`base`,Lc,Y,zc),g(J,4,`countdownElement`,Ic,Y,Bc),g(J,4,`open`,Fc,Y,Vc),g(J,4,`heading`,Pc,Y,Hc),g(J,4,`closable`,Nc,Y,Uc),g(J,4,`variant`,Mc,Y,Wc),g(J,4,`duration`,jc,Y,Gc),g(J,4,`countdown`,Ac,Y,Kc),g(J,4,`remainingTime`,kc,Y,qc),g(J,4,`transicao`,Oc,Y,Jc),g(J,1,`handleOpenChange`,Dc,Y),g(J,1,`handleDurationChange`,Ec,Y),m(J,Y),_(Y,`styles`,[es,Cc]),_(Y,`dependencies`,{"kk-icon-button":q}),_(Y,`currentToastStack`),Y.define(`kk-alert`);var Yc=F`
  :host {
    --kk-spinner-track-width: 2px;
    --kk-spinner-track-color: var(--kk-color-neutral-agnostic);
    --kk-spinner-indicator-color: var(--kk-color-primary-600);
    --kk-spinner-speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--kk-spinner-track-width);
    r: calc(0.5em - var(--kk-spinner-track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--kk-spinner-track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--kk-spinner-indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--kk-spinner-speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Xc=class extends U{constructor(...e){super(...e),T(this,`localize`,new ua(this))}render(){return L`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}},Zc=(T(Xc,`styles`,[es,Yc]),Xc);function Qc(e){return e.validity.valid?``:e.validationMessage===``?` `:e.validationMessage}function $c(e,t){let n=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||n.preventDefault(),e.dispatchEvent(n)||t?.preventDefault()}var el=class{constructor(e,t){T(this,`host`,void 0),T(this,`interacaoEm`,void 0),T(this,`vistos`,new Set),T(this,`interagiu`,!1),T(this,`aoInvalidar`,e=>{this.conferindo||this.marcarInteragido(),$c(this.host,e)}),T(this,`conferindo`,!1),T(this,`aoInteragir`,e=>{this.vistos.add(e.type),!(this.vistos.size<this.interacaoEm.length)&&this.marcarInteragido()}),this.host=e,this.interacaoEm=t?.interacaoEm??[`kk-blur`,`kk-input`],e.addController(this)}hostConnected(){this.host.addEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.addEventListener(e,this.aoInteragir)}hostDisconnected(){this.host.removeEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.removeEventListener(e,this.aoInteragir)}conferir(e){this.conferindo=!0;try{return e()}finally{this.conferindo=!1}}marcarInteragido(){this.interagiu||(this.interagiu=!0,this.host.updateValidity())}esquecerInteracao(){this.vistos.clear(),this.interagiu=!1}aplicar(e,t){let n=this.host.required===!0;t(`--required`,n),t(`--optional`,!n),t(`--valid`,e),t(`--invalid`,!e),t(`--user-valid`,e&&this.interagiu),t(`--user-invalid`,!e&&this.interagiu)}},tl=F`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--kk-input-border-width);
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--kk-transition-x-fast) background-color,
      var(--kk-transition-x-fast) color,
      var(--kk-transition-x-fast) border,
      var(--kk-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  :host(:state(--disabled)) .button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Desabilitado, os eventos de mouse dos filhos não sobem. */
  :host(:state(--disabled)) .button * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(kk-icon) {
    vertical-align: -2px;
  }

  /*
   * Botão padrão
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-input-border-color);
    color: var(--kk-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:hover {
    background-color: var(--kk-color-primary-50);
    border-color: var(--kk-color-primary-300);
    color: var(--kk-color-primary-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:active {
    background-color: var(--kk-color-primary-100);
    border-color: var(--kk-color-primary-400);
    color: var(--kk-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:hover {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:active {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--kk-color-success-600);
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:hover {
    background-color: var(--kk-color-success-500);
    border-color: var(--kk-color-success-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:active {
    background-color: var(--kk-color-success-600);
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--kk-color-neutral-600);
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:hover {
    background-color: var(--kk-color-text-muted);
    border-color: var(--kk-color-text-muted);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:active {
    background-color: var(--kk-color-neutral-600);
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--kk-color-warning-600);
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:hover {
    background-color: var(--kk-color-warning-500);
    border-color: var(--kk-color-warning-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:active {
    background-color: var(--kk-color-warning-600);
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--kk-color-danger-600);
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:hover {
    background-color: var(--kk-color-danger-500);
    border-color: var(--kk-color-danger-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:active {
    background-color: var(--kk-color-danger-600);
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  /*
   * Botão de contorno
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--kk-input-border-color);
    color: var(--kk-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default.button--checked {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:active {
    border-color: var(--kk-color-primary-700);
    background-color: var(--kk-color-primary-700);
    color: var(--kk-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary.button--checked {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:active {
    border-color: var(--kk-color-primary-700);
    background-color: var(--kk-color-primary-700);
    color: var(--kk-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-success-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success.button--checked {
    background-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:active {
    border-color: var(--kk-color-success-700);
    background-color: var(--kk-color-success-700);
    color: var(--kk-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral.button--checked {
    background-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:active {
    border-color: var(--kk-color-neutral-700);
    background-color: var(--kk-color-neutral-700);
    color: var(--kk-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-warning-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning.button--checked {
    background-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:active {
    border-color: var(--kk-color-warning-700);
    background-color: var(--kk-color-warning-700);
    color: var(--kk-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-danger-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger.button--checked {
    background-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:active {
    border-color: var(--kk-color-danger-700);
    background-color: var(--kk-color-danger-700);
    color: var(--kk-color-neutral-0);
  }

  @media (forced-colors: active) {
    :host(:not(:state(--disabled))) .button.button--outline.button--checked {
      outline: solid 2px transparent;
    }
  }

  /*
   * Botão de texto
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:focus-visible {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:active {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-700);
  }

  /*
   * Modificadores de tamanho
   */

  .button--small {
    height: auto;
    min-height: var(--kk-input-height-small);
    font-size: var(--kk-button-font-size-small);
    line-height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--kk-input-height-medium);
    font-size: var(--kk-button-font-size-medium);
    line-height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--kk-input-height-large);
    font-size: var(--kk-button-font-size-large);
    line-height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-large);
  }

  /*
   * Modificador pill
   */

  .button--pill.button--small {
    border-radius: var(--kk-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--kk-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--kk-input-height-large);
  }

  /*
   * Modificador circle
   */

  .button--circle {
    padding-inline: 0;
  }

  .button--circle.button--small {
    width: var(--kk-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--kk-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--kk-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Modificador caret
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Modificador loading
   */

  :host(:state(--loading)) .button {
    position: relative;
    cursor: wait;
  }

  :host(:state(--loading)) .button .button__prefix,
  :host(:state(--loading)) .button .button__label,
  :host(:state(--loading)) .button .button__suffix,
  :host(:state(--loading)) .button .button__caret {
    visibility: hidden;
  }

  :host(:state(--loading)) .button kk-spinner {
    --kk-spinner-indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    inset-block-start: calc(50% - 0.5em);
    inset-inline-start: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(kk-badge) {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(kk-badge) {
    inset-inline-end: auto;
    inset-inline-start: 0;
    translate: -50% -50%;
  }

  /*
   * Espaçamento dos botões
   */

  .button--has-label.button--small .button__label {
    padding-inline: var(--kk-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding-inline: var(--kk-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding-inline: var(--kk-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--kk-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--kk-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--kk-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--kk-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--kk-spacing-small);
  }

  /*
   * Modificador swipe
   *
   * Placa de ícone na cor da variante encostada na borda, corpo claro, e um
   * painel da mesma cor que entra deslizando da esquerda no hover.
   *
   * swipe é FORMA, não é cor: quem escolhe a cor continua sendo o variant. Daí
   * o alias local — os seletores por variante trocam só ele, e o resto do bloco
   * não repete nada.
   *
   * Os seletores levam .button junto (.button.button--swipe) porque as regras
   * de variant lá em cima têm duas classes; sem isso o swipe perde a disputa
   * de especificidade em vez de vencer por vir depois.
   */

  .button--swipe {
    --kk-button-accent-color: var(--kk-color-primary-600);
  }

  .button--swipe.button--success {
    --kk-button-accent-color: var(--kk-color-success-600);
  }

  .button--swipe.button--neutral {
    --kk-button-accent-color: var(--kk-color-neutral-600);
  }

  .button--swipe.button--warning {
    --kk-button-accent-color: var(--kk-color-warning-600);
  }

  .button--swipe.button--danger {
    --kk-button-accent-color: var(--kk-color-danger-600);
  }

  .button.button--swipe {
    position: relative;
    overflow: hidden;
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-700);
    box-shadow: var(--kk-shadow-large);
    /*
     * A cor do rótulo acompanha o painel: no x-fast herdado o texto ficaria
     * branco no branco enquanto o painel ainda estivesse a caminho.
     */
    transition:
      var(--kk-transition-x-fast) background-color,
      var(--kk-transition-x-fast) border-color,
      var(--kk-transition-medium) color;
  }

  /* A placa encosta na borda — o respiro do prefixo é dela, não do botão. */
  .button.button--swipe.button--has-prefix {
    padding-inline-start: 0;
  }

  .button--swipe .button__decor {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: var(--kk-button-accent-color);
    translate: -100% 0;
    transition: var(--kk-transition-medium) translate;
  }

  /* Tudo o que é conteúdo passa por cima do painel. */
  .button--swipe .button__prefix,
  .button--swipe .button__label,
  .button--swipe .button__suffix,
  .button--swipe .button__caret,
  .button--swipe kk-spinner {
    position: relative;
    z-index: 1;
  }

  .button--swipe .button__prefix {
    align-self: stretch;
    justify-content: center;
    padding-inline: var(--kk-spacing-small);
    background-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-0);
  }

  .button--swipe.button--has-label .button__label,
  .button--swipe.button--has-prefix .button__label {
    padding-inline: var(--kk-spacing-small) var(--kk-spacing-large);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:focus-visible {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:hover .button__decor,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:focus-visible .button__decor {
    translate: 0 0;
  }

  /*
   * Modificador expand
   *
   * Fechado é um círculo com o ícone do slot prefix; no hover — e no foco de
   * teclado, que o original não previa — cresce em pílula, o ícone sobe para
   * fora de vista e o rótulo ocupa o lugar. O rótulo está sempre no DOM, só
   * recortado: quem usa leitor de tela ouve o botão fechado do mesmo jeito.
   *
   * A largura não é animada — não há como transicionar até "auto". Quem cresce
   * é a coluna do rótulo (0fr → 1fr) e o botão vai atrás; o min-width segura o
   * círculo enquanto ela está fechada. É também por isso que o ícone sai do
   * fluxo: no estado fechado ele não pode ter voto na largura.
   */

  .button.button--expand {
    position: relative;
    overflow: hidden;
    padding-inline: 0;
    /* Raio de pílula numa caixa quadrada é um círculo — sem animar o raio. */
    border-radius: var(--kk-border-radius-pill);
  }

  .button--expand.button--small {
    min-width: var(--kk-input-height-small);
  }

  .button--expand.button--medium {
    min-width: var(--kk-input-height-medium);
  }

  .button--expand.button--large {
    min-width: var(--kk-input-height-large);
  }

  /* O circle fixa a largura e esconde o prefixo; com expand os dois têm de ceder. */
  .button--expand.button--circle {
    width: auto;
  }

  .button--expand .button__prefix {
    display: flex;
    position: absolute;
    inset: 0;
    justify-content: center;
    transition: var(--kk-transition-medium) translate;
  }

  .button--expand .button__reveal {
    display: grid;
    grid-template-columns: 0fr;
    padding-inline: 0;
    transition:
      var(--kk-transition-medium) grid-template-columns,
      var(--kk-transition-medium) padding-inline;
  }

  .button--expand .button__label {
    min-width: 0;
    overflow: hidden;
  }

  /* O respiro do rótulo é do invólucro, que fecha junto com a coluna. */
  .button--expand.button--has-label .button__label,
  .button--expand.button--has-prefix .button__label {
    padding-inline: 0;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__prefix,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__prefix {
    translate: 0 -200%;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__reveal,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__reveal {
    grid-template-columns: 1fr;
    padding-inline: var(--kk-spacing-large);
  }

  /*
   * Sem movimento: os dois estados continuam existindo, o caminho entre eles é
   * que deixa de ser desenhado.
   */
  @media (prefers-reduced-motion: reduce) {
    .button--swipe .button__decor,
    .button--expand .button__prefix,
    .button--expand .button__reveal {
      transition: none;
    }
  }

  /*
   * O grupo aceita botões de todo tipo (com tooltip, gatilho de dropdown...), e por isso o botão nem
   * sempre é filho direto do grupo — o ::slotted não o alcança. O grupo põe estas classes nos
   * botões, e a folha as desenha aqui.
   */

  :host([data-kk-button-group__button--first]:not([data-kk-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-kk-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-kk-button-group__button--last]:not([data-kk-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Todos menos o primeiro. */
  :host([data-kk-button-group__button]:not([data-kk-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--kk-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-kk-button-group__button]:not(
          [data-kk-button-group__button--first],
          [data-kk-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    border-inline-start: solid 1px var(--kk-color-neutral-agnostic-strong);
    mix-blend-mode: multiply;
  }

  /* O botão sob o ponteiro, com foco ou marcado sobe, para o anel de foco não ficar cortado. */
  :host([data-kk-button-group__button--hover]) {
    z-index: 1;
  }

  /* Foco e marcado ficam sempre por cima. */
  :host([data-kk-button-group__button--focus]),
  :host([data-kk-button-group__button][checked]) {
    z-index: 2;
  }
`,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,X,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,Z=class extends (jl=U,Al=[ps(`.button`)],kl=[ds()],Ol=[ds()],Dl=[H()],El=[H({reflect:!0})],Tl=[H({reflect:!0})],wl=[H({type:Boolean,reflect:!0})],Cl=[H({type:Boolean,reflect:!0})],Sl=[H({type:Boolean,reflect:!0})],xl=[H({type:Boolean,reflect:!0})],bl=[H({type:Boolean,reflect:!0})],yl=[H({type:Boolean,reflect:!0})],vl=[H({type:Boolean,reflect:!0})],_l=[H({type:Boolean,reflect:!0})],gl=[H()],hl=[H()],ml=[H()],pl=[H()],fl=[H()],dl=[H()],ul=[H()],ll=[H()],cl=[H({attribute:`formaction`})],sl=[H({attribute:`formenctype`})],ol=[H({attribute:`formmethod`})],al=[H({attribute:`formnovalidate`,type:Boolean})],il=[H({attribute:`formtarget`})],rl=[vs(`disabled`,{waitUntilFirstUpdate:!0})],nl=[vs(`loading`,{waitUntilFirstUpdate:!0})],jl){constructor(){super(...arguments),h(X,5,this),_(this,`formControlController`,new Po(this,{assumeInteractionOn:[`click`]})),_(this,`hasSlotController`,new Tc(this,`[default]`,`prefix`,`suffix`)),_(this,`localize`,new ua(this)),y(this,Ml,h(X,8,this)),h(X,11,this),y(this,Nl,h(X,12,this,!1)),h(X,15,this),y(this,Pl,h(X,16,this,!1)),h(X,19,this),y(this,Fl,h(X,20,this,``)),h(X,23,this),y(this,Il,h(X,24,this,`default`)),h(X,27,this),y(this,Ll,h(X,28,this,`medium`)),h(X,31,this),y(this,Rl,h(X,32,this,!1)),h(X,35,this),y(this,zl,h(X,36,this,!1)),h(X,39,this),y(this,Bl,h(X,40,this,!1)),h(X,43,this),y(this,Vl,h(X,44,this,!1)),h(X,47,this),y(this,Hl,h(X,48,this,!1)),h(X,51,this),y(this,Ul,h(X,52,this,!1)),h(X,55,this),y(this,Wl,h(X,56,this,!1)),h(X,59,this),y(this,Gl,h(X,60,this,!1)),h(X,63,this),y(this,Kl,h(X,64,this,`button`)),h(X,67,this),y(this,ql,h(X,68,this,``)),h(X,71,this),y(this,Jl,h(X,72,this,``)),h(X,75,this),y(this,Yl,h(X,76,this,``)),h(X,79,this),y(this,Xl,h(X,80,this)),h(X,83,this),y(this,Zl,h(X,84,this,`noreferrer noopener`)),h(X,87,this),y(this,Ql,h(X,88,this)),h(X,91,this),y(this,$l,h(X,92,this)),h(X,95,this),y(this,eu,h(X,96,this)),h(X,99,this),y(this,tu,h(X,100,this)),h(X,103,this),y(this,nu,h(X,104,this)),h(X,107,this),y(this,ru,h(X,108,this)),h(X,111,this),y(this,iu,h(X,112,this)),h(X,115,this)}get validity(){return this.isButton()?this.button.validity:Fo}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),$c(this,e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.isButton()&&this.formControlController.updateValidity()}handleLoadingChange(){this.toggleState(`--loading`,this.loading)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?To`a`:To`button`;return Do`
      <${t}
        part="base"
        class=${Bo({button:!0,"button--default":this.variant==="default","button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--swipe":this.swipe,"button--expand":this.expand,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:this.type)}
        title=${this.title}
        name=${B(e?void 0:this.name)}
        value=${B(e?void 0:this.value)}
        href=${B(e&&!this.disabled?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e?this.rel:void 0)}
        role=${B(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        ${this.swipe?Do`<span part="decor" class="button__decor"></span>`:``}
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        ${this.expand?Do`<span class="button__reveal"><slot part="label" class="button__label"></slot></span>`:Do`<slot part="label" class="button__label"></slot>`}
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Do` <kk-icon part="caret" class="button__caret" library="system" name="caret"></kk-icon> `:``}
        ${this.loading?Do`<kk-spinner part="spinner"></kk-spinner>`:``}
      </${t}>
    `}};X=p(jl),Ml=new WeakMap,Nl=new WeakMap,Pl=new WeakMap,Fl=new WeakMap,Il=new WeakMap,Ll=new WeakMap,Rl=new WeakMap,zl=new WeakMap,Bl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Ul=new WeakMap,Wl=new WeakMap,Gl=new WeakMap,Kl=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,g(X,4,`button`,Al,Z,Ml),g(X,4,`hasFocus`,kl,Z,Nl),g(X,4,`invalid`,Ol,Z,Pl),g(X,4,`title`,Dl,Z,Fl),g(X,4,`variant`,El,Z,Il),g(X,4,`size`,Tl,Z,Ll),g(X,4,`caret`,wl,Z,Rl),g(X,4,`disabled`,Cl,Z,zl),g(X,4,`loading`,Sl,Z,Bl),g(X,4,`outline`,xl,Z,Vl),g(X,4,`pill`,bl,Z,Hl),g(X,4,`circle`,yl,Z,Ul),g(X,4,`swipe`,vl,Z,Wl),g(X,4,`expand`,_l,Z,Gl),g(X,4,`type`,gl,Z,Kl),g(X,4,`name`,hl,Z,ql),g(X,4,`value`,ml,Z,Jl),g(X,4,`href`,pl,Z,Yl),g(X,4,`target`,fl,Z,Xl),g(X,4,`rel`,dl,Z,Zl),g(X,4,`download`,ul,Z,Ql),g(X,4,`form`,ll,Z,$l),g(X,4,`formAction`,cl,Z,eu),g(X,4,`formEnctype`,sl,Z,tu),g(X,4,`formMethod`,ol,Z,nu),g(X,4,`formNoValidate`,al,Z,ru),g(X,4,`formTarget`,il,Z,iu),g(X,1,`handleDisabledChange`,rl,Z),g(X,1,`handleLoadingChange`,nl,Z),m(X,Z),_(Z,`styles`,[es,tl]),_(Z,`dependencies`,{"kk-icon":G,"kk-spinner":Zc}),Z.define(`kk-button`),G.define(`kk-icon`),q.define(`kk-icon-button`);var au=F`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
  }

  /* Campo padrão */
  .input--standard {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  :host(:not(:state(--disabled))) .input--standard:hover {
    background-color: var(--kk-input-background-color-hover);
    border-color: var(--kk-input-border-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard .input__control {
    color: var(--kk-input-color-focus);
  }

  :host(:state(--disabled)) .input.input--standard {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host(:state(--disabled)) .input.input--standard .input__control {
    color: var(--kk-input-color-disabled);
  }

  :host(:state(--disabled)) .input.input--standard .input__control::placeholder {
    color: var(--kk-input-placeholder-color-disabled);
  }

  /* Validation */
  :host(:state(--invalid)) .input--standard {
    border-color: var(--kk-color-danger-600);
  }

  :host(:state(--invalid):state(--focused)) .input--standard {
    /*
     * Sem light-dark() aqui: dentro de uma folha de componente ele não passa pelo
     * rebaixamento do build do Note, e o Safari anterior ao 17.5 descartava o
     * anel inteiro. Metade do vermelho sobre o fundo serve aos dois temas.
     */
    box-shadow: 0 0 0 var(--kk-focus-ring-width) color-mix(in srgb, var(--kk-color-danger-600), transparent 50%);
  }

  /* Campo preenchido */
  .input--filled {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  :host(:not(:state(--disabled))) .input--filled:hover {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--filled {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  :host(:state(--disabled)) .input.input--filled {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--kk-input-color);
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--kk-input-height-large) var(--kk-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--kk-color-primary-500);
    caret-color: var(--kk-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--kk-input-height-large) var(--kk-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--kk-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:not(:state(--disabled))) .input:hover .input__control {
    color: var(--kk-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  /*
   * Sem fundo próprio: prefixo e sufixo são partes do campo, não etiquetas
   * grudadas nele. Pintá-los com um tom seu os separava do miolo — e separava
   * de um jeito que nenhum ajuste de token consertava, porque o campo tem três
   * fundos (normal, preenchido, desabilitado) e um tom fixo só podia acertar
   * um. Transparente, os três acertam sozinhos.
   */
  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
    background-color: transparent;
  }

  .input__prefix ::slotted(kk-icon),
  .input__suffix ::slotted(kk-icon) {
    color: var(--kk-input-icon-color);
  }

  /*
   * Modificadores de tamanho
   */

  .input--small {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
    height: var(--kk-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-small);
    padding-inline-end: var(--kk-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
    height: var(--kk-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-medium);
    padding-inline-end: var(--kk-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
    height: var(--kk-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-large);
    padding-inline-end: var(--kk-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-large);
  }

  /*
   * Modificador pill
   */

  .input--pill.input--small {
    border-radius: var(--kk-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--kk-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--kk-input-height-large);
  }

  /*
   * Limpar + mostrar senha
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--kk-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--kk-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--kk-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Sem o botão de senha do próprio Edge. */
  ::-ms-reveal {
    display: none;
  }

  /* Sem as setas do campo numérico do navegador. */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  /*
   * O alto contraste do sistema (forced-colors) apaga toda box-shadow, e o anel
   * de foco deste campo é uma: quem navega por teclado perdia de vista em que
   * campo está. Ali o foco vira contorno na cor de destaque do sistema.
   */
  @media (forced-colors: active) {
    :host(:state(--focused)) .input--standard,
    :host(:state(--focused)) .input--filled {
      outline: var(--kk-focus-ring-width) solid Highlight;
      outline-offset: var(--kk-focus-ring-offset);
    }
  }
`,ou=Ro(class extends zo{constructor(e){if(super(e),e.type!==Lo.PROPERTY&&e.type!==Lo.ATTRIBUTE&&e.type!==Lo.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Uo(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===z)return t;let n=e.element,r=e.name;if(e.type===Lo.PROPERTY){if(t===n[r])return R}else if(e.type===Lo.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return R}else if(e.type===Lo.ATTRIBUTE&&n.getAttribute(r)===t+``)return R;return Go(e),t}}),su=F`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--kk-input-label-color);
    margin-block-end: var(--kk-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--kk-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--kk-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--kk-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--kk-input-required-content);
    margin-inline-start: var(--kk-input-required-content-offset);
    color: var(--kk-input-required-content-color);
  }

  /* Texto de ajuda */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--kk-input-help-text-color);
    margin-block-start: var(--kk-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-block-start: var(--kk-spacing-2x-small);
  }

  /* Validation */
  :host(:state(--invalid)) .form-control__label {
    color: var(--kk-color-danger-700);
  }

  :host(:state(--invalid)) .form-control__help-text {
    color: var(--kk-color-danger-700);
  }
`,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Q,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,$=class extends (Gu=U,Wu=[ps(`.input__control`)],Uu=[ds()],Hu=[H()],Vu=[H({reflect:!0})],Bu=[H()],zu=[H()],Ru=[hs()],Lu=[H({reflect:!0})],Iu=[H({type:Boolean,reflect:!0})],Fu=[H({type:Boolean,reflect:!0})],Pu=[H()],Nu=[H({attribute:`help-text`})],Mu=[H({type:Boolean})],ju=[H({type:Boolean,reflect:!0})],Au=[H()],ku=[H({type:Boolean,reflect:!0})],Ou=[H({attribute:`password-toggle`,type:Boolean})],Du=[H({attribute:`password-visible`,type:Boolean})],Eu=[H({attribute:`no-spin-buttons`,type:Boolean})],Tu=[H({reflect:!0,converter:Oo})],wu=[H({type:Boolean,reflect:!0})],Cu=[H()],Su=[H({type:Number})],xu=[H({type:Number})],bu=[H()],yu=[H()],vu=[H()],_u=[H()],gu=[H({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],hu=[H()],mu=[H({type:Boolean})],pu=[H()],fu=[H({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],du=[H()],uu=[vs(`disabled`,{waitUntilFirstUpdate:!0})],lu=[vs(`step`,{waitUntilFirstUpdate:!0})],cu=[vs(`value`,{waitUntilFirstUpdate:!0})],Gu){constructor(){super(...arguments),h(Q,5,this),_(this,`validade`,new el(this,{interacaoEm:[`kk-blur`,`kk-input`]})),_(this,`hasSlotController`,new Tc(this,`help-text`,`label`)),_(this,`localize`,new ua(this)),y(this,Ku,h(Q,8,this)),h(Q,11,this),y(this,qu,h(Q,12,this,!1)),h(Q,15,this),y(this,Ju,h(Q,16,this,``)),h(Q,19,this),_(this,`__numberInput`,Object.assign(document.createElement(`input`),{type:`number`})),_(this,`__dateInput`,Object.assign(document.createElement(`input`),{type:`date`})),y(this,Yu,h(Q,20,this,`text`)),h(Q,23,this),y(this,Xu,h(Q,24,this,``)),h(Q,27,this),y(this,Zu,h(Q,28,this,``)),h(Q,31,this),_(this,`defaultValue`,h(Q,140,this,``)),h(Q,143,this),y(this,Qu,h(Q,32,this,`medium`)),h(Q,35,this),y(this,$u,h(Q,36,this,!1)),h(Q,39,this),y(this,ed,h(Q,40,this,!1)),h(Q,43,this),y(this,td,h(Q,44,this,``)),h(Q,47,this),y(this,nd,h(Q,48,this,``)),h(Q,51,this),y(this,rd,h(Q,52,this,!1)),h(Q,55,this),y(this,id,h(Q,56,this,!1)),h(Q,59,this),y(this,ad,h(Q,60,this,``)),h(Q,63,this),y(this,od,h(Q,64,this,!1)),h(Q,67,this),y(this,sd,h(Q,68,this,!1)),h(Q,71,this),y(this,cd,h(Q,72,this,!1)),h(Q,75,this),y(this,ld,h(Q,76,this,!1)),h(Q,79,this),y(this,ud,h(Q,80,this,``)),h(Q,83,this),y(this,dd,h(Q,84,this,!1)),h(Q,87,this),y(this,fd,h(Q,88,this)),h(Q,91,this),y(this,pd,h(Q,92,this)),h(Q,95,this),y(this,md,h(Q,96,this)),h(Q,99,this),y(this,hd,h(Q,100,this)),h(Q,103,this),y(this,gd,h(Q,104,this)),h(Q,107,this),y(this,_d,h(Q,108,this)),h(Q,111,this),y(this,vd,h(Q,112,this)),h(Q,115,this),y(this,yd,h(Q,116,this,!0)),h(Q,119,this),y(this,bd,h(Q,120,this)),h(Q,123,this),y(this,xd,h(Q,124,this)),h(Q,127,this),y(this,Sd,h(Q,128,this)),h(Q,131,this),y(this,Cd,h(Q,132,this,!0)),h(Q,135,this),y(this,wd,h(Q,136,this)),h(Q,139,this)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.updateValidity(),this.emit(`kk-input`)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{if(!e.defaultPrevented&&!e.isComposing){let e=this._internals.form;typeof e?.requestSubmit==`function`?e.requestSubmit():e?.dispatchEvent(new Event(`submit`,{bubbles:!0,cancelable:!0}))}})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.input.disabled=this.disabled,this.updateValidity()}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}async handleValueChange(){this._internals.setFormValue(this.value),await this.updateComplete,this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){let e=this.input.validity.valid;this.toggleState(`--empty`,!this.value),this.validade.aplicar(e,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Qc(this.input),this.input)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return L`
      <div
        part="form-control"
        class=${Bo({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Bo({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${ou(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?L`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <kk-icon name="circle-x" library="system"></kk-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?L`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?L`
                          <slot name="show-password-icon">
                            <kk-icon name="eye-off" library="system"></kk-icon>
                          </slot>
                        `:L`
                          <slot name="hide-password-icon">
                            <kk-icon name="eye" library="system"></kk-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q=p(Gu),Ku=new WeakMap,qu=new WeakMap,Ju=new WeakMap,Yu=new WeakMap,Xu=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,$u=new WeakMap,ed=new WeakMap,td=new WeakMap,nd=new WeakMap,rd=new WeakMap,id=new WeakMap,ad=new WeakMap,od=new WeakMap,sd=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=new WeakMap,xd=new WeakMap,Sd=new WeakMap,Cd=new WeakMap,wd=new WeakMap,g(Q,4,`input`,Wu,$,Ku),g(Q,4,`hasFocus`,Uu,$,qu),g(Q,4,`title`,Hu,$,Ju),g(Q,4,`type`,Vu,$,Yu),g(Q,4,`name`,Bu,$,Xu),g(Q,4,`value`,zu,$,Zu),g(Q,4,`size`,Lu,$,Qu),g(Q,4,`filled`,Iu,$,$u),g(Q,4,`pill`,Fu,$,ed),g(Q,4,`label`,Pu,$,td),g(Q,4,`helpText`,Nu,$,nd),g(Q,4,`clearable`,Mu,$,rd),g(Q,4,`disabled`,ju,$,id),g(Q,4,`placeholder`,Au,$,ad),g(Q,4,`readonly`,ku,$,od),g(Q,4,`passwordToggle`,Ou,$,sd),g(Q,4,`passwordVisible`,Du,$,cd),g(Q,4,`noSpinButtons`,Eu,$,ld),g(Q,4,`form`,Tu,$,ud),g(Q,4,`required`,wu,$,dd),g(Q,4,`pattern`,Cu,$,fd),g(Q,4,`minlength`,Su,$,pd),g(Q,4,`maxlength`,xu,$,md),g(Q,4,`min`,bu,$,hd),g(Q,4,`max`,yu,$,gd),g(Q,4,`step`,vu,$,_d),g(Q,4,`autocapitalize`,_u,$,vd),g(Q,4,`autocorrect`,gu,$,yd),g(Q,4,`autocomplete`,hu,$,bd),g(Q,4,`autofocus`,mu,$,xd),g(Q,4,`enterkeyhint`,pu,$,Sd),g(Q,4,`spellcheck`,fu,$,Cd),g(Q,4,`inputmode`,du,$,wd),g(Q,1,`handleDisabledChange`,uu,$),g(Q,1,`handleStepChange`,lu,$),g(Q,1,`handleValueChange`,cu,$),g(Q,5,`defaultValue`,Ru,$),m(Q,$),_($,`styles`,[es,su,au]),_($,`dependencies`,{"kk-icon":G}),_($,`formAssociated`,!0),$.define(`kk-input`);var Td=F`
  :host {
    --kk-signature-max-width: 37.5rem;

    display: block;
    color: var(--kk-color-text-muted);
  }

  .signature {
    position: relative;
    max-inline-size: var(--kk-signature-max-width);
    margin-inline: auto;
  }

  .signature__cat {
    display: block;
    inline-size: 100%;
    block-size: auto;
    aspect-ratio: 8;
  }

  .signature--rtl .signature__cat {
    transform: scaleX(-1);
  }

  .signature__note {
    position: absolute;
    inset-inline: 38% 0;
    inset-block-end: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0 var(--kk-spacing-small);
    margin: 0;
    text-align: start;
    font-size: var(--kk-font-size-x-small);
  }
`,Ed=class extends U{constructor(...e){super(...e),T(this,`localize`,new ua(this))}render(){return L`
      <div
        part="base"
        class=${Bo({signature:!0,"signature--rtl":this.localize.dir()===`rtl`})}
      >
        <kk-icon part="cat" class="signature__cat" name="gato-na-linha"></kk-icon>
        <p part="note" class="signature__note"><slot></slot></p>
      </div>
    `}};(T(Ed,`styles`,[es,Td]),T(Ed,`dependencies`,{"kk-icon":G}),Ed).define(`kk-signature`),Zc.define(`kk-spinner`),i(`./ui`);var Dd=document.querySelector(`#app`);function Od(){return{cabecalho:{titulo:`Não encontrado`,voltarPara:`home`},conteudo:S`<p class="intro">Esta tela não existe.</p>`}}function kd(e){let[t,n=``]=e.args,r=Un(t);switch(e.modulo){case`home`:return{cabecalho:{},conteudo:Or()};case`parceiro`:return{cabecalho:{titulo:`Área do parceiro`,voltarPara:`home`},conteudo:jr(jd)};case`ajuda`:return{cabecalho:{titulo:`Ajuda do parceiro`,voltarPara:`home`},conteudo:Cr(jd)};case`sobre`:return{cabecalho:{titulo:`Sobre`,voltarPara:`home`},conteudo:Pr()};case`produto`:return r===void 0?Od():{cabecalho:{titulo:r.nome,voltarPara:`home`},conteudo:Mr(r)};case`ver`:{let e=Fr[n];return r===void 0||e===void 0?Od():{cabecalho:{titulo:`${e} — ${r.nome}`,voltarPara:`produto/${r.codigo}`,acoes:Vr(r,n)},conteudo:Hr(r,n,jd)}}case`ler`:{let e=wr[n];return r===void 0||e===void 0?Od():{cabecalho:{titulo:`${e} — ${r.nome}`,voltarPara:`produto/${r.codigo}`},conteudo:Tr(r,n,jd)}}default:return Od()}}var Ad={modulo:`home`,args:[],query:new URLSearchParams};function jd(){if(Dd===null)return;let{cabecalho:e,conteudo:n}=kd(Ad);document.title=e.titulo===void 0?t.displayName:`${e.titulo} — ${t.displayName}`,document.documentElement.dataset.tela=Ad.modulo,wt(Rn(e,n,jd),Dd),gr(Dd)}function Md(){if(Dd===null)return;Dd.removeAttribute(`aria-busy`),fe(jd);let e=!0;me(t=>{Ad=t,jd();let n=t.modulo===`sobre`?document.getElementById(t.args[0]??``):null;n===null?scrollTo({top:0}):n.scrollIntoView(),e||document.querySelector(`#conteudo`)?.focus({preventScroll:!0}),e=!1});let t=Lt({onNeedRefresh(){ve({titulo:`Versão nova do Kobi Vendas.`,texto:`O material pode ter mudado.`,acao:`Atualizar`},()=>{t(!0)})}});navigator.storage?.persist?.().catch(()=>!1)}location.hash===``&&x(`home`);try{Md()}catch(e){console.error(`Kobi Vendas: a abertura falhou.`,e),window.__falhaDaAbertura?.(e)}export{Ur as i,Kr as n,Wr as r,qr as t};