/*! For license information please see uk-transport-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(i,t,s)},o=(s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,_=m?m.emptyScript:"",g=f.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,g?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,x=t=>t,E=A.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+O,T=`<${P}>`,U=document,N=()=>U.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,j=/>/g,z=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,W=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=W(1),q=(W(2),W(3),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),F=new WeakMap,G=U.createTreeWalker(U,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const X=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,d=0;for(;d<s.length&&(o.lastIndex=d,c=o.exec(s),null!==c);)d=o.lastIndex,o===H?"!--"===c[1]?o=R:void 0!==c[1]?o=j:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=r??H,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?z:'"'===c[3]?I:B):o===I||o===B?o=z:o===R||o===j?o=H:(o=z,r=void 0);const h=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===H?s+T:l>=0?(i.push(a),s.slice(0,l)+C+s.slice(l)+O+h):s+O+(-2===l?e:h)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,l]=X(t,e);if(this.el=Z.createElement(c,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[n++],s=i.getAttribute(t).split(O),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?st:"?"===o[1]?it:"@"===o[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(O),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],N()),G.nextNode(),a.push({type:2,index:++r});i.append(t[e],N())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(O,t+1));)a.push({type:7,index:r}),t+=O.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===q)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=k(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);G.currentNode=i;let r=G.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=G.nextNode(),n++)}return G.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),k(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.O(N()),this.O(N()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Q(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),n||=!k(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===q)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Z,tt),(A.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class ct extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new tt(e.insertBefore(N(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");let dt,ht,pt=t=>t;const ut=n(dt||(dt=pt`
  ha-card {
    padding: 0;
    overflow: hidden;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px 8px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .card-header h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-icon {
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }

  .card-content {
    padding: 0 0 4px;
  }

  .no-services {
    padding: 16px;
    color: var(--secondary-text-color);
    font-size: 0.9rem;
    text-align: center;
  }

  .section-heading {
    padding: 8px 16px 6px;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  /* ── Service row ─────────────────────────────────────────── */
  .service-row {
    display: grid;
    grid-template-columns: 22px 52px 1fr auto auto auto;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
    transition: background 0.15s;
  }

  .service-row:last-child {
    border-bottom: none;
  }

  /* ── Status colour stripe (left border) + row highlight ─── */
  .service-row.good {
    border-left: 3px solid var(--success-color, #4caf50);
  }

  .service-row.warning {
    border-left: 3px solid var(--warning-color, #ff9800);
    background: rgba(255, 152, 0, 0.07);
    border-bottom-color: rgba(255, 152, 0, 0.3);
  }

  .service-row.perturbed {
    border-left: 3px solid var(--error-color, #f44336);
    background: rgba(244, 67, 54, 0.07);
    border-bottom-color: rgba(244, 67, 54, 0.3);
  }

  .service-icon-slot {
    display: inline-flex;
    width: 20px;
    justify-content: center;
  }

  .service-icon {
    color: var(--secondary-text-color);
    --mdc-icon-size: 16px;
  }

  /* ── Cells ───────────────────────────────────────────────── */
  .service-line {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--primary-text-color);
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    border-radius: 4px;
    padding: 2px 6px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .service-destination {
    font-size: 0.9rem;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .service-times {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
  }

  .platform {
    font-size: 0.74rem;
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    padding: 1px 5px;
    min-width: 28px;
    text-align: center;
  }

  .scheduled-time {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .expected-time {
    font-size: 0.78rem;
    color: var(--warning-color, #ff9800);
  }

  /* ── Badges ──────────────────────────────────────────────── */
  .badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: 10px;
    padding: 2px 7px;
    white-space: nowrap;
  }

  .badge.due {
    background: var(--info-color, #2196f3);
    color: #fff;
  }

  .badge.good {
    background: var(--success-color, #4caf50);
    color: #fff;
  }

  .badge.warning {
    background: var(--warning-color, #ff9800);
    color: #fff;
  }

  .badge.perturbed {
    background: var(--error-color, #f44336);
    color: #fff;
  }

  /* ── Error / stale banner ────────────────────────────────── */
  .error-banner {
    margin: 8px 16px;
    padding: 6px 10px;
    border-radius: 4px;
    background: var(--error-color, #f44336);
    color: #fff;
    font-size: 0.8rem;
  }
`)),ft=n(ht||(ht=pt`
  .form {
    padding: 16px;
  }
`)),mt=t=>{if(!t)return"";try{return new Date(t).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}catch(e){return t}},_t=t=>{if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:e},gt=(t,e)=>{const s=_t(t),i=_t(e);return s&&i?Math.max(0,Math.round((i.getTime()-s.getTime())/6e4)):0},yt=t=>{const e=_t(t);return e?Math.max(0,Math.round((e.getTime()-Date.now())/6e4)):null},bt=t=>{if(null!=t&&t.terminus)return t.terminus;const e=Array.isArray(null==t?void 0:t.destinations)?t.destinations[0]:null;return(null==e?void 0:e.name)||"Unknown"},vt=(t=[],e="")=>t.map(t=>{const s=t.scheduled||"",i=t.expected||s,r=void 0!==t.delay_minutes&&null!==t.delay_minutes?Number(t.delay_minutes)||0:gt(s,i),n=void 0!==t.mins_away&&null!==t.mins_away?Number(t.mins_away):yt(i);return{type:"bus",sourceEntity:e,route:t.line||"Bus",destination:t.destination||t.terminus||"Unknown",scheduled:s,expected:i,delay_minutes:r,mins_away:n,status:t.status||(r>0?"Delayed":"On Time"),platform:t.stand||t.platform||"",raw:t}}),$t=(t=[],e="")=>t.map(t=>{const s=t.scheduled||"",i=t.expected||s,r=gt(s,i),n=yt(i),o=t.perturbation||r>0?"Delayed":"On Time";return{type:"train",sourceEntity:e,route:t.service||"Train",destination:bt(t),scheduled:s,expected:i,delay_minutes:r,mins_away:n,status:t.status||o,platform:t.platform||"",raw:t}});let wt,At,xt,Et,St,Ct,Ot,Pt,Tt,Ut,Nt,kt,Mt,Dt,Ht=t=>t;function Rt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,i)}return s}function jt(t,e,s){return(e=function(t){var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}console.info("%c  UK-TRANSPORT-CARD  %c v0.1.0 ","background:#37474f;color:#fff;font-weight:700;padding:2px 4px;border-radius:3px 0 0 3px;","background:#eceff1;color:#37474f;font-weight:700;padding:2px 4px;border-radius:0 3px 3px 0;"),customElements.define("uk-transport-card",class extends ct{static get properties(){return{hass:{attribute:!1},config:{attribute:!1}}}static get styles(){return ut}setConfig(t){if(!(t.entity||t.bus_entity||t.bus_entity_primary||t.bus_entity_secondary||t.train_entity))throw new Error("uk-transport-card: set entity, bus_entity, or train_entity");this.config=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?Rt(Object(s),!0).forEach(function(e){jt(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Rt(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}({limit:10,merge_mode:"merged",show_icons:!0,show_platform:!0,hide_on_time_expected:!1,sort_by:"expected"},t)}_stateObj(t){var e;return t?null===(e=this.hass)||void 0===e?void 0:e.states[t]:null}_attrs(t){var e,s;return null!==(e=null===(s=this._stateObj(t))||void 0===s?void 0:s.attributes)&&void 0!==e?e:{}}_collectTransportItems(){const t=[],e=[this.config.bus_entity,this.config.bus_entity_primary,this.config.bus_entity_secondary].filter(Boolean),s=[...new Set(e)];if(this.config.entity){const e=this._attrs(this.config.entity);Array.isArray(e.buses)&&t.push(...vt(e.buses,this.config.entity)),Array.isArray(e.trains)&&t.push(...$t(e.trains,this.config.entity))}if(s.forEach(e=>{const s=this._attrs(e);Array.isArray(s.buses)&&t.push(...vt(s.buses,e))}),this.config.train_entity){const e=this._attrs(this.config.train_entity);Array.isArray(e.trains)&&t.push(...$t(e.trains,this.config.train_entity))}const i=((t,e="expected")=>{const s="scheduled"===e?"scheduled":"expected";return[...t].sort((t,e)=>{var i,r,n,o;return(null!==(i=null===(r=_t(t[s]))||void 0===r?void 0:r.getTime())&&void 0!==i?i:Number.MAX_SAFE_INTEGER)-(null!==(n=null===(o=_t(e[s]))||void 0===o?void 0:o.getTime())&&void 0!==n?n:Number.MAX_SAFE_INTEGER)})})(t,this.config.sort_by);return i.slice(0,Number(this.config.limit)||i.length)}_collectErrors(){return[this.config.entity,this.config.bus_entity,this.config.bus_entity_primary,this.config.bus_entity_secondary,this.config.train_entity].filter(Boolean).filter((t,e,s)=>s.indexOf(t)===e).map(t=>({entityId:t,error:this._attrs(t).error})).filter(t=>t.error)}_title(t){if(this.config.title)return this.config.title;if(this.config.entity){const t=this._attrs(this.config.entity);return t.stop||t.station||"Transport Departures"}return(this.config.bus_entity||this.config.bus_entity_primary||this.config.bus_entity_secondary)&&this.config.train_entity?"Transport Departures":this.config.bus_entity_primary||this.config.bus_entity_secondary?"Bus Departures":this.config.bus_entity?this._attrs(this.config.bus_entity).stop||"Bus Departures":this.config.train_entity?this._attrs(this.config.train_entity).station||"Train Departures":t.length?"Transport Departures":"No Services"}render(){if(!this.config||!this.hass)return K;const t=this._collectTransportItems(),e=this._collectErrors(),s=this._title(t),i="sectioned"!==this.config.merge_mode,r=t.filter(t=>"bus"===t.type),n=t.filter(t=>"train"===t.type);return V(wt||(wt=Ht`
      <ha-card>
        <div class="card-header">
          <ha-icon class="header-icon" icon="mdi:bus"></ha-icon>
          <ha-icon class="header-icon" icon="mdi:train"></ha-icon>
          <h2>${0}</h2>
        </div>
        <div class="card-content">
          ${0}
          ${0}
        </div>
      </ha-card>
    `),s,e.map(t=>V(At||(At=Ht`<div class="error-banner">${0}: ${0}</div>`),t.entityId,t.error)),0===t.length?V(xt||(xt=Ht`<div class="no-services">No upcoming services</div>`)):i?t.map(t=>this._renderService(t)):V(Et||(Et=Ht`
                  ${0}
                  ${0}
                `),n.length?V(St||(St=Ht`<div class="section-heading">Train Services</div>${0}`),n.map(t=>this._renderService(t))):K,r.length?V(Ct||(Ct=Ht`<div class="section-heading">Bus Services</div>${0}`),r.map(t=>this._renderService(t))):K))}_serviceIcon(t){return"train"===t?"mdi:train":"mdi:bus"}_renderService(t){const e=mt(t.scheduled),s=mt(t.expected),{cssClass:i,label:r}=(t=>{if(!t)return{cssClass:"unknown",label:"Unknown"};const e=String(t.status||"").toLowerCase();return e.includes("cancel")?{cssClass:"perturbed",label:"Cancelled"}:e.includes("disruption")?{cssClass:"warning",label:t.status}:e.includes("delay")||e.includes("late")||e.includes("perturb")?{cssClass:"warning",label:t.status||"Delayed"}:(t.delay_minutes||0)>=5?{cssClass:"warning",label:"Major Delay"}:(t.delay_minutes||0)>0?{cssClass:"warning",label:"Minor Delay"}:{cssClass:"good",label:t.status||"On Time"}})(t),n=(t.delay_minutes||0)>0,o=null!==t.mins_away&&t.mins_away<=1,a=!this.config.hide_on_time_expected||n;return V(Ot||(Ot=Ht`
      <div class="service-row ${0}">
        <span class="service-icon-slot">
          ${0}
        </span>
        <div class="service-line">${0}</div>
        <div class="service-destination">${0}</div>
        <div class="service-times">
          <span class="scheduled-time">${0}</span>
          ${0}
        </div>
        ${0}
        <div>
          ${0}
        </div>
      </div>
    `),i,this.config.show_icons?V(Pt||(Pt=Ht`<ha-icon class="service-icon" .icon=${0}></ha-icon>`),this._serviceIcon(t.type)):K,t.route,t.destination,e,a?V(Tt||(Tt=Ht`<span class="expected-time">→ ${0}</span>`),s):K,this.config.show_platform&&t.platform?V(Ut||(Ut=Ht`<div class="platform">${0}</div>`),t.platform):K,o?V(Nt||(Nt=Ht`<span class="badge due">Due</span>`)):null!==t.mins_away?V(kt||(kt=Ht`<span class="badge ${0}">${0}</span>`),i,null==(c=t.mins_away)?"":c<=1?"Due":`${c} min`):V(Mt||(Mt=Ht`<span class="badge ${0}">${0}</span>`),i,r));var c}getCardSize(){var t;const e=this._collectTransportItems();return Math.min(e.length,Number(null===(t=this.config)||void 0===t?void 0:t.limit)||e.length)+2}static getConfigElement(){return document.createElement("uk-transport-card-editor")}static getStubConfig(){return{bus_entity_primary:"sensor.bus_schedule_stop_1",bus_entity_secondary:"sensor.bus_schedule_stop_2",train_entity:"sensor.train_schedule_ksn",limit:10,merge_mode:"merged",show_icons:!0,show_platform:!0,hide_on_time_expected:!1,sort_by:"expected"}}}),customElements.define("uk-transport-card-editor",class extends ct{static get properties(){return{hass:{attribute:!1},config:{attribute:!1}}}static get styles(){return ft}setConfig(t){this.config=t}get _schema(){return[{name:"entity",label:"Combined transport entity (optional)",selector:{entity:{filter:[{domain:"sensor"}]}}},{name:"bus_entity",label:"Bus entity (optional, legacy single-source)",selector:{entity:{filter:[{domain:"sensor"}]}}},{name:"bus_entity_primary",label:"Bus entity primary direction (optional)",selector:{entity:{filter:[{domain:"sensor"}]}}},{name:"bus_entity_secondary",label:"Bus entity opposite direction (optional)",selector:{entity:{filter:[{domain:"sensor"}]}}},{name:"train_entity",label:"Train entity (optional)",selector:{entity:{filter:[{domain:"sensor"}]}}},{name:"title",label:"Card title",selector:{text:{}}},{name:"limit",label:"Max services to display",selector:{number:{min:1,max:20,step:1,mode:"box"}}},{name:"merge_mode",label:"Display mode",selector:{select:{mode:"dropdown",options:[{value:"merged",label:"Merged (time sorted)"},{value:"sectioned",label:"Sectioned (train/bus)"}]}}},{name:"sort_by",label:"Sort by",selector:{select:{mode:"dropdown",options:[{value:"expected",label:"Expected time"},{value:"scheduled",label:"Scheduled time"}]}}},{name:"show_icons",label:"Show transport icons",selector:{boolean:{}}},{name:"show_platform",label:"Show platform/stand",selector:{boolean:{}}},{name:"hide_on_time_expected",label:"Hide expected time when on time",selector:{boolean:{}}}]}render(){return this.hass&&this.config?V(Dt||(Dt=Ht`
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        @value-changed=${0}
      ></ha-form>
    `),this.hass,this.config,this._schema,this._valueChanged):K}_valueChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t.detail.value}}))}}),window.customCards=window.customCards||[],window.customCards.push({type:"uk-transport-card",name:"UK Transport Card",description:"Combined bus and train departures with unified status rendering",preview:!0,documentationURL:"https://github.com/leightaylorf1/uk-transport-card"})})();