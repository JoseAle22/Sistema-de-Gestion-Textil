/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ql(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},Hr=[],Xt=()=>{},A_=()=>!1,zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kl=t=>t.startsWith("onUpdate:"),ft=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},b_=Object.prototype.hasOwnProperty,Re=(t,e)=>b_.call(t,e),le=Array.isArray,qr=t=>_i(t)==="[object Map]",Wo=t=>_i(t)==="[object Set]",Wu=t=>_i(t)==="[object Date]",he=t=>typeof t=="function",We=t=>typeof t=="string",rn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",fd=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),dd=Object.prototype.toString,_i=t=>dd.call(t),R_=t=>_i(t).slice(8,-1),pd=t=>_i(t)==="[object Object]",Wl=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},S_=/-(\w)/g,Mt=Go(t=>t.replace(S_,(e,n)=>n?n.toUpperCase():"")),C_=/\B([A-Z])/g,br=Go(t=>t.replace(C_,"-$1").toLowerCase()),Qo=Go(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=Go(t=>t?`on${Qo(t)}`:""),Hn=(t,e)=>!Object.is(t,e),no=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_o=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gu;const Jo=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?D_(r):Gl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Oe(t))return t}const P_=/;(?![^(]*\))/g,k_=/:([^]+)/,V_=/\/\*[^]*?\*\//g;function D_(t){const e={};return t.replace(V_,"").split(P_).forEach(n=>{if(n){const r=n.split(k_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tt(t){let e="";if(We(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Tt(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const N_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O_=ql(N_);function md(t){return!!t||t===""}function x_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Yo(t[r],e[r]);return n}function Yo(t,e){if(t===e)return!0;let n=Wu(t),r=Wu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?x_(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Yo(t[a],e[a]))return!1}}return String(t)===String(e)}function M_(t,e){return t.findIndex(n=>Yo(n,e))}const _d=t=>!!(t&&t.__v_isRef===!0),Qn=t=>We(t)?t:t==null?"":le(t)||Oe(t)&&(t.toString===dd||!he(t.toString))?_d(t)?Qn(t.value):JSON.stringify(t,yd,2):String(t),yd=(t,e)=>_d(e)?yd(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[La(r,i)+" =>"]=s,n),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>La(n))}:rn(e)?La(e):Oe(e)&&!le(e)&&!pd(e)?String(e):e,La=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class L_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function F_(){return bt}let De;const Fa=new WeakSet;class vd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Td(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qu(this),Id(this);const e=De,n=jt;De=this,jt=!0;try{return this.fn()}finally{wd(this),De=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,Qu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let Ed=0,Us,Bs;function Td(t,e=!1){if(t.flags|=8,e){t.next=Bs,Bs=t;return}t.next=Us,Us=t}function Ql(){Ed++}function Jl(){if(--Ed>0)return;if(Bs){let e=Bs;for(Bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Us;){let e=Us;for(Us=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Id(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Yl(r),U_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ol(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ad(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ad(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xs))return;t.globalVersion=Xs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ol(t)){t.flags&=-3;return}const n=De,r=jt;De=t,jt=!0;try{Id(t);const s=t.fn(t._value);(e.version===0||Hn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,jt=r,wd(t),t.flags&=-3}}function Yl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Yl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function U_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const bd=[];function nr(){bd.push(jt),jt=!1}function rr(){const t=bd.pop();jt=t===void 0?!0:t}function Qu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Xs=0;class B_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!jt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new B_(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Rd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){Ql();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jl()}}}function Rd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Rd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const al=new WeakMap,mr=Symbol(""),ll=Symbol(""),Zs=Symbol("");function at(t,e,n){if(jt&&De){let r=al.get(t);r||al.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xl),s.map=r,s.key=n),s.track()}}function pn(t,e,n,r,s,i){const a=al.get(t);if(!a){Xs++;return}const l=c=>{c&&c.trigger()};if(Ql(),e==="clear")a.forEach(l);else{const c=le(t),h=c&&Wl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Zs||!rn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Zs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(mr)),qr(t)&&l(a.get(ll)));break;case"delete":c||(l(a.get(mr)),qr(t)&&l(a.get(ll)));break;case"set":qr(t)&&l(a.get(mr));break}}Jl()}function xr(t){const e=be(t);return e===t?e:(at(e,"iterate",Zs),$t(t)?e:e.map(_t))}function Zl(t){return at(t=be(t),"iterate",Zs),t}const j_={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,_t)},concat(...t){return xr(this).concat(...t.map(e=>le(e)?xr(e):e))},entries(){return Ua(this,"entries",t=>(t[1]=_t(t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(_t),arguments)},find(t,e){return un(this,"find",t,e,_t,arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,_t,arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ba(this,"includes",t)},indexOf(...t){return Ba(this,"indexOf",t)},join(t){return xr(this).join(t)},lastIndexOf(...t){return Ba(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Ps(this,"pop")},push(...t){return Ps(this,"push",t)},reduce(t,...e){return Ju(this,"reduce",t,e)},reduceRight(t,...e){return Ju(this,"reduceRight",t,e)},shift(){return Ps(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Ps(this,"splice",t)},toReversed(){return xr(this).toReversed()},toSorted(t){return xr(this).toSorted(t)},toSpliced(...t){return xr(this).toSpliced(...t)},unshift(...t){return Ps(this,"unshift",t)},values(){return Ua(this,"values",_t)}};function Ua(t,e,n){const r=Zl(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const $_=Array.prototype;function un(t,e,n,r,s,i){const a=Zl(t),l=a!==t&&!$t(t),c=a[e];if(c!==$_[e]){const p=c.apply(t,i);return l?_t(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,_t(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Ju(t,e,n,r){const s=Zl(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,_t(l),c,t)}),s[e](i,...r)}function Ba(t,e,n){const r=be(t);at(r,"iterate",Zs);const s=r[e](...n);return(s===-1||s===!1)&&nc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Ps(t,e,n=[]){nr(),Ql();const r=be(t)[e].apply(t,n);return Jl(),rr(),r}const H_=ql("__proto__,__v_isRef,__isVue"),Sd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function q_(t){rn(t)||(t=String(t));const e=be(this);return at(e,"has",t),e.hasOwnProperty(t)}class Cd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ey:Dd:i?Vd:kd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=le(e);if(!s){let c;if(a&&(c=j_[n]))return c;if(n==="hasOwnProperty")return q_}const l=Reflect.get(e,n,ht(e)?e:r);return(rn(n)?Sd.has(n):H_(n))||(s||at(e,"get",n),i)?l:ht(l)?a&&Wl(n)?l:l.value:Oe(l)?s?Od(l):Xo(l):l}}class Pd extends Cd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=_r(i);if(!$t(r)&&!_r(r)&&(i=be(i),r=be(r)),!le(e)&&ht(i)&&!ht(r))return c?!1:(i.value=r,!0)}const a=le(e)&&Wl(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,ht(e)?e:s);return e===be(s)&&(a?Hn(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!Sd.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",le(e)?"length":mr),Reflect.ownKeys(e)}}class K_ extends Cd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const z_=new Pd,W_=new K_,G_=new Pd(!0);const cl=t=>t,Wi=t=>Reflect.getPrototypeOf(t);function Q_(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=qr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?cl:e?ul:_t;return!e&&at(i,"iterate",c?ll:mr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Gi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function J_(t,e){const n={get(s){const i=this.__v_raw,a=be(i),l=be(s);t||(Hn(s,l)&&at(a,"get",s),at(a,"get",l));const{has:c}=Wi(a),h=e?cl:t?ul:_t;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(be(s),"iterate",mr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=be(i),l=be(s);return t||(Hn(s,l)&&at(a,"has",s),at(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=be(l),h=e?cl:t?ul:_t;return!t&&at(c,"iterate",mr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ft(n,t?{add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear")}:{add(s){!e&&!$t(s)&&!_r(s)&&(s=be(s));const i=be(this);return Wi(i).has.call(i,s)||(i.add(s),pn(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!_r(i)&&(i=be(i));const a=be(this),{has:l,get:c}=Wi(a);let h=l.call(a,s);h||(s=be(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Hn(i,d)&&pn(a,"set",s,i):pn(a,"add",s,i),this},delete(s){const i=be(this),{has:a,get:l}=Wi(i);let c=a.call(i,s);c||(s=be(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&pn(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,a=s.clear();return i&&pn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Q_(s,t,e)}),n}function ec(t,e){const n=J_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Y_={get:ec(!1,!1)},X_={get:ec(!1,!0)},Z_={get:ec(!0,!1)};const kd=new WeakMap,Vd=new WeakMap,Dd=new WeakMap,ey=new WeakMap;function ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ny(t){return t.__v_skip||!Object.isExtensible(t)?0:ty(R_(t))}function Xo(t){return _r(t)?t:tc(t,!1,z_,Y_,kd)}function Nd(t){return tc(t,!1,G_,X_,Vd)}function Od(t){return tc(t,!0,W_,Z_,Dd)}function tc(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=ny(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function js(t){return _r(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function nc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function ry(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&gd(t,"__v_skip",!0),t}const _t=t=>Oe(t)?Xo(t):t,ul=t=>Oe(t)?Od(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function sy(t){return xd(t,!1)}function iy(t){return xd(t,!0)}function xd(t,e){return ht(t)?t:new oy(t,e)}class oy{constructor(e,n){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:_t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||_r(e);e=r?e:be(e),Hn(e,n)&&(this._rawValue=e,this._value=r?e:_t(e),this.dep.trigger())}}function Kr(t){return ht(t)?t.value:t}const ay={get:(t,e,n)=>e==="__v_raw"?t:Kr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Md(t){return js(t)?t:new Proxy(t,ay)}class ly{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Td(this,!0),!0}get value(){const e=this.dep.track();return Ad(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new ly(r,s,n)}const Qi={},yo=new WeakMap;let fr;function uy(t,e=!1,n=fr){if(n){let r=yo.get(n);r||yo.set(n,r=[]),r.push(t)}}function hy(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=W=>s?W:$t(W)||s===!1||s===0?gn(W,1):gn(W);let d,p,m,v,k=!1,V=!1;if(ht(t)?(p=()=>t.value,k=$t(t)):js(t)?(p=()=>h(t),k=!0):le(t)?(V=!0,k=t.some(W=>js(W)||$t(W)),p=()=>t.map(W=>{if(ht(W))return W.value;if(js(W))return h(W);if(he(W))return c?c(W,2):W()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){nr();try{m()}finally{rr()}}const W=fr;fr=d;try{return c?c(t,3,[v]):t(v)}finally{fr=W}}:p=Xt,e&&s){const W=p,de=s===!0?1/0:s;p=()=>gn(W(),de)}const O=F_(),q=()=>{d.stop(),O&&O.active&&zl(O.effects,d)};if(i&&e){const W=e;e=(...de)=>{W(...de),q()}}let j=V?new Array(t.length).fill(Qi):Qi;const H=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const de=d.run();if(s||k||(V?de.some((pe,w)=>Hn(pe,j[w])):Hn(de,j))){m&&m();const pe=fr;fr=d;try{const w=[de,j===Qi?void 0:V&&j[0]===Qi?[]:j,v];c?c(e,3,w):e(...w),j=de}finally{fr=pe}}}else d.run()};return l&&l(H),d=new vd(p),d.scheduler=a?()=>a(H,!1):H,v=W=>uy(W,!1,d),m=d.onStop=()=>{const W=yo.get(d);if(W){if(c)c(W,4);else for(const de of W)de();yo.delete(d)}},e?r?H(!0):j=d.run():a?a(H.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function gn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))gn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)gn(t[r],e,n);else if(Wo(t)||qr(t))t.forEach(r=>{gn(r,e,n)});else if(pd(t)){for(const r in t)gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function sn(t,e,n,r){if(he(t)){const s=yi(t,e,n,r);return s&&fd(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){nr(),yi(i,null,10,[t,c,h]),rr();return}}fy(t,n,s,r,a)}function fy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let Gt=-1;const zr=[];let xn=null,Mr=0;const Ld=Promise.resolve();let vo=null;function rc(t){const e=vo||Ld;return t?e.then(this?t.bind(this):t):e}function dy(t){let e=Gt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=ei(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function sc(t){if(!(t.flags&1)){const e=ei(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=ei(n)?yt.push(t):yt.splice(dy(e),0,t),t.flags|=1,Fd()}}function Fd(){vo||(vo=Ld.then(Bd))}function py(t){le(t)?zr.push(...t):xn&&t.id===-1?xn.splice(Mr+1,0,t):t.flags&1||(zr.push(t),t.flags|=1),Fd()}function Yu(t,e,n=Gt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ud(t){if(zr.length){const e=[...new Set(zr)].sort((n,r)=>ei(n)-ei(r));if(zr.length=0,xn){xn.push(...e);return}for(xn=e,Mr=0;Mr<xn.length;Mr++){const n=xn[Mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xn=null,Mr=0}}const ei=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Bd(t){try{for(Gt=0;Gt<yt.length;Gt++){const e=yt[Gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gt<yt.length;Gt++){const e=yt[Gt];e&&(e.flags&=-2)}Gt=-1,yt.length=0,Ud(),vo=null,(yt.length||zr.length)&&Bd()}}let Rt=null,jd=null;function Eo(t){const e=Rt;return Rt=t,jd=t&&t.type.__scopeId||null,e}function ic(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ah(-1);const i=Eo(e);let a;try{a=t(...s)}finally{Eo(i),r._d&&ah(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dt(t,e){if(Rt===null)return t;const n=ra(Rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ve]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&gn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(nr(),sn(c,n,8,[t.el,l,t,e]),rr())}}const gy=Symbol("_vte"),my=t=>t.__isTeleport;function oc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function $d(t,e){return he(t)?ft({name:t.name},e,{setup:t}):t}function Hd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function To(t,e,n,r,s=!1){if(le(t)){t.forEach((k,V)=>To(k,e&&(le(e)?e[V]:e),n,r,s));return}if($s(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&To(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ra(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,m=be(p),v=p===Ve?()=>!1:k=>Re(m,k);if(h!=null&&h!==c&&(We(h)?(d[h]=null,v(h)&&(p[h]=null)):ht(h)&&(h.value=null)),he(c))yi(c,l,12,[a,d]);else{const k=We(c),V=ht(c);if(k||V){const O=()=>{if(t.f){const q=k?v(c)?p[c]:d[c]:c.value;s?le(q)&&zl(q,i):le(q)?q.includes(i)||q.push(i):k?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=a,v(c)&&(p[c]=a)):V&&(c.value=a,t.k&&(d[t.k]=a))};a?(O.id=-1,At(O,n)):O()}}}Jo().requestIdleCallback;Jo().cancelIdleCallback;const $s=t=>!!t.type.__asyncLoader,qd=t=>t.type.__isKeepAlive;function _y(t,e){Kd(t,"a",e)}function yy(t,e){Kd(t,"da",e)}function Kd(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qd(s.parent.vnode)&&vy(r,e,n,s),s=s.parent}}function vy(t,e,n,r){const s=ea(e,t,r,!0);zd(()=>{zl(r[e],s)},n)}function ea(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{nr();const l=vi(n),c=sn(e,n,t,a);return l(),rr(),c});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=ct)=>{(!ri||t==="sp")&&ea(t,(...r)=>e(...r),n)},Ey=Rn("bm"),Ty=Rn("m"),Iy=Rn("bu"),wy=Rn("u"),Ay=Rn("bum"),zd=Rn("um"),by=Rn("sp"),Ry=Rn("rtg"),Sy=Rn("rtc");function Cy(t,e=ct){ea("ec",t,e)}const Py="components";function ac(t,e){return Vy(Py,t,!0,e)||t}const ky=Symbol.for("v-ndc");function Vy(t,e,n=!0,r=!1){const s=Rt||ct;if(s){const i=s.type;{const l=yv(i,!1);if(l&&(l===e||l===Mt(e)||l===Qo(Mt(e))))return i}const a=Xu(s[t]||i[t],e)||Xu(s.appContext[t],e);return!a&&r?i:a}}function Xu(t,e){return t&&(t[e]||t[Mt(e)]||t[Qo(Mt(e))])}const hl=t=>t?dp(t)?ra(t):hl(t.parent):null,Hs=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gd(t),$forceUpdate:t=>t.f||(t.f=()=>{sc(t.update)}),$nextTick:t=>t.n||(t.n=rc.bind(t.proxy)),$watch:t=>Xy.bind(t)}),ja=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Re(t,e),Dy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=a[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ja(r,e))return a[e]=1,r[e];if(s!==Ve&&Re(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(n!==Ve&&Re(n,e))return a[e]=4,n[e];fl&&(a[e]=0)}}const d=Hs[e];let p,m;if(d)return e==="$attrs"&&at(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&Re(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ja(s,e)?(s[e]=n,!0):r!==Ve&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ve&&Re(t,a)||ja(e,a)||(l=i[0])&&Re(l,a)||Re(r,a)||Re(Hs,a)||Re(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zu(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fl=!0;function Ny(t){const e=Gd(t),n=t.proxy,r=t.ctx;fl=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:k,activated:V,deactivated:O,beforeDestroy:q,beforeUnmount:j,destroyed:H,unmounted:W,render:de,renderTracked:pe,renderTriggered:w,errorCaptured:_,serverPrefetch:I,expose:A,inheritAttrs:b,components:S,directives:T,filters:pt}=e;if(h&&Oy(h,r,null),a)for(const ve in a){const ge=a[ve];he(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);Oe(ve)&&(t.data=Xo(ve))}if(fl=!0,i)for(const ve in i){const ge=i[ve],It=he(ge)?ge.bind(n,n):he(ge.get)?ge.get.bind(n,n):Xt,Lt=!he(ge)&&he(ge.set)?ge.set.bind(n):Xt,Pt=Ut({get:It,set:Lt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:xe=>Pt.value=xe})}if(l)for(const ve in l)Wd(l[ve],r,n,ve);if(c){const ve=he(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{ro(ge,ve[ge])})}d&&eh(d,t,"c");function $e(ve,ge){le(ge)?ge.forEach(It=>ve(It.bind(n))):ge&&ve(ge.bind(n))}if($e(Ey,p),$e(Ty,m),$e(Iy,v),$e(wy,k),$e(_y,V),$e(yy,O),$e(Cy,_),$e(Sy,pe),$e(Ry,w),$e(Ay,j),$e(zd,W),$e(by,I),le(A))if(A.length){const ve=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:It=>n[ge]=It})})}else t.exposed||(t.exposed={});de&&t.render===Xt&&(t.render=de),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),T&&(t.directives=T),I&&Hd(t)}function Oy(t,e,n=Xt){le(t)&&(t=dl(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=vn(s.from||r,s.default,!0):i=vn(s.from||r):i=vn(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function eh(t,e,n){sn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wd(t,e,n,r){let s=r.includes(".")?lp(n,r):()=>n[r];if(We(t)){const i=e[t];he(i)&&so(s,i)}else if(he(t))so(s,t.bind(n));else if(Oe(t))if(le(t))t.forEach(i=>Wd(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&so(s,i,t)}}function Gd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Io(c,h,a,!0)),Io(c,e,a)),Oe(e)&&i.set(e,c),c}function Io(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Io(t,i,n,!0),s&&s.forEach(a=>Io(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=xy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const xy={data:th,props:nh,emits:nh,methods:Ds,computed:Ds,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Ds,directives:Ds,watch:Ly,provide:th,inject:My};function th(t,e){return e?t?function(){return ft(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function My(t,e){return Ds(dl(t),dl(e))}function dl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?ft(Object.create(null),t,e):e}function nh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ft(Object.create(null),Zu(t),Zu(e??{})):e}function Ly(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Qd(){return{app:null,config:{isNativeTag:A_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fy=0;function Uy(t,e){return function(r,s=null){he(r)||(r=ft({},r)),s!=null&&!Oe(s)&&(s=null);const i=Qd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Fy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ev,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&he(d.install)?(a.add(d),d.install(h,...p)):he(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const v=h._ceVNode||ut(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,d,m),c=!0,h._container=d,d.__vue_app__=h,ra(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(sn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Wr;Wr=h;try{return d()}finally{Wr=p}}};return h}}let Wr=null;function ro(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function vn(t,e,n=!1){const r=ct||Rt;if(r||Wr){const s=Wr?Wr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Jd={},Yd=()=>Object.create(Jd),Xd=t=>Object.getPrototypeOf(t)===Jd;function By(t,e,n,r=!1){const s={},i=Yd();t.propsDefaults=Object.create(null),Zd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Nd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=be(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ta(t.emitsOptions,m))continue;const v=e[m];if(c)if(Re(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const k=Mt(m);s[k]=pl(c,l,k,v,t,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{Zd(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=br(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=pl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&pn(t.attrs,"set","")}function Zd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Fs(c))continue;const h=e[c];let d;s&&Re(s,d=Mt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ta(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=be(n),h=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];n[p]=pl(s,c,p,h[p],t,!Re(h,p))}}return a}function pl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=vi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===br(n))&&(r=!0))}return r}const $y=new WeakMap;function ep(t,e,n=!1){const r=n?$y:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!he(t)){const d=p=>{c=!0;const[m,v]=ep(p,e,!0);ft(a,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Oe(t)&&r.set(t,Hr),Hr;if(le(i))for(let d=0;d<i.length;d++){const p=Mt(i[d]);rh(p)&&(a[p]=Ve)}else if(i)for(const d in i){const p=Mt(d);if(rh(p)){const m=i[d],v=a[p]=le(m)||he(m)?{type:m}:ft({},m),k=v.type;let V=!1,O=!0;if(le(k))for(let q=0;q<k.length;++q){const j=k[q],H=he(j)&&j.name;if(H==="Boolean"){V=!0;break}else H==="String"&&(O=!1)}else V=he(k)&&k.name==="Boolean";v[0]=V,v[1]=O,(V||Re(v,"default"))&&l.push(p)}}const h=[a,l];return Oe(t)&&r.set(t,h),h}function rh(t){return t[0]!=="$"&&!Fs(t)}const tp=t=>t[0]==="_"||t==="$stable",lc=t=>le(t)?t.map(Yt):[Yt(t)],Hy=(t,e,n)=>{if(e._n)return e;const r=ic((...s)=>lc(e(...s)),n);return r._c=!1,r},np=(t,e,n)=>{const r=t._ctx;for(const s in t){if(tp(s))continue;const i=t[s];if(he(i))e[s]=Hy(s,i,r);else if(i!=null){const a=lc(i);e[s]=()=>a}}},rp=(t,e)=>{const n=lc(e);t.slots.default=()=>n},sp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},qy=(t,e,n)=>{const r=t.slots=Yd();if(t.vnode.shapeFlag&32){const s=e._;s?(sp(r,e,n),n&&gd(r,"_",s,!0)):np(e,r)}else e&&rp(t,e)},Ky=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ve;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:sp(s,e,n):(i=!e.$stable,np(e,s)),a=e}else e&&(rp(t,e),a={default:1});if(i)for(const l in s)!tp(l)&&a[l]==null&&delete s[l]},At=iv;function zy(t){return Wy(t)}function Wy(t,e){const n=Jo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=Xt,insertStaticContent:k}=t,V=(y,E,R,N=null,F=null,x=null,G=void 0,K=null,$=!!E.dynamicChildren)=>{if(y===E)return;y&&!ks(y,E)&&(N=D(y),xe(y,F,x,!0),y=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:U,ref:te,shapeFlag:J}=E;switch(U){case na:O(y,E,R,N);break;case yr:q(y,E,R,N);break;case Ha:y==null&&j(E,R,N,G);break;case dn:S(y,E,R,N,F,x,G,K,$);break;default:J&1?de(y,E,R,N,F,x,G,K,$):J&6?T(y,E,R,N,F,x,G,K,$):(J&64||J&128)&&U.process(y,E,R,N,F,x,G,K,$,Z)}te!=null&&F&&To(te,y&&y.ref,x,E||y,!E)},O=(y,E,R,N)=>{if(y==null)r(E.el=l(E.children),R,N);else{const F=E.el=y.el;E.children!==y.children&&h(F,E.children)}},q=(y,E,R,N)=>{y==null?r(E.el=c(E.children||""),R,N):E.el=y.el},j=(y,E,R,N)=>{[y.el,y.anchor]=k(y.children,E,R,N,y.el,y.anchor)},H=({el:y,anchor:E},R,N)=>{let F;for(;y&&y!==E;)F=m(y),r(y,R,N),y=F;r(E,R,N)},W=({el:y,anchor:E})=>{let R;for(;y&&y!==E;)R=m(y),s(y),y=R;s(E)},de=(y,E,R,N,F,x,G,K,$)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?pe(E,R,N,F,x,G,K,$):I(y,E,F,x,G,K,$)},pe=(y,E,R,N,F,x,G,K)=>{let $,U;const{props:te,shapeFlag:J,transition:ee,dirs:oe}=y;if($=y.el=a(y.type,x,te&&te.is,te),J&8?d($,y.children):J&16&&_(y.children,$,null,N,F,$a(y,x),G,K),oe&&ur(y,null,N,"created"),w($,y,y.scopeId,G,N),te){for(const fe in te)fe!=="value"&&!Fs(fe)&&i($,fe,null,te[fe],x,N);"value"in te&&i($,"value",null,te.value,x),(U=te.onVnodeBeforeMount)&&Wt(U,N,y)}oe&&ur(y,null,N,"beforeMount");const ne=Gy(F,ee);ne&&ee.beforeEnter($),r($,E,R),((U=te&&te.onVnodeMounted)||ne||oe)&&At(()=>{U&&Wt(U,N,y),ne&&ee.enter($),oe&&ur(y,null,N,"mounted")},F)},w=(y,E,R,N,F)=>{if(R&&v(y,R),N)for(let x=0;x<N.length;x++)v(y,N[x]);if(F){let x=F.subTree;if(E===x||up(x.type)&&(x.ssContent===E||x.ssFallback===E)){const G=F.vnode;w(y,G,G.scopeId,G.slotScopeIds,F.parent)}}},_=(y,E,R,N,F,x,G,K,$=0)=>{for(let U=$;U<y.length;U++){const te=y[U]=K?Mn(y[U]):Yt(y[U]);V(null,te,E,R,N,F,x,G,K)}},I=(y,E,R,N,F,x,G)=>{const K=E.el=y.el;let{patchFlag:$,dynamicChildren:U,dirs:te}=E;$|=y.patchFlag&16;const J=y.props||Ve,ee=E.props||Ve;let oe;if(R&&hr(R,!1),(oe=ee.onVnodeBeforeUpdate)&&Wt(oe,R,E,y),te&&ur(E,y,R,"beforeUpdate"),R&&hr(R,!0),(J.innerHTML&&ee.innerHTML==null||J.textContent&&ee.textContent==null)&&d(K,""),U?A(y.dynamicChildren,U,K,R,N,$a(E,F),x):G||ge(y,E,K,null,R,N,$a(E,F),x,!1),$>0){if($&16)b(K,J,ee,R,F);else if($&2&&J.class!==ee.class&&i(K,"class",null,ee.class,F),$&4&&i(K,"style",J.style,ee.style,F),$&8){const ne=E.dynamicProps;for(let fe=0;fe<ne.length;fe++){const Ee=ne[fe],tt=J[Ee],Qe=ee[Ee];(Qe!==tt||Ee==="value")&&i(K,Ee,tt,Qe,F,R)}}$&1&&y.children!==E.children&&d(K,E.children)}else!G&&U==null&&b(K,J,ee,R,F);((oe=ee.onVnodeUpdated)||te)&&At(()=>{oe&&Wt(oe,R,E,y),te&&ur(E,y,R,"updated")},N)},A=(y,E,R,N,F,x,G)=>{for(let K=0;K<E.length;K++){const $=y[K],U=E[K],te=$.el&&($.type===dn||!ks($,U)||$.shapeFlag&70)?p($.el):R;V($,U,te,null,N,F,x,G,!0)}},b=(y,E,R,N,F)=>{if(E!==R){if(E!==Ve)for(const x in E)!Fs(x)&&!(x in R)&&i(y,x,E[x],null,F,N);for(const x in R){if(Fs(x))continue;const G=R[x],K=E[x];G!==K&&x!=="value"&&i(y,x,K,G,F,N)}"value"in R&&i(y,"value",E.value,R.value,F)}},S=(y,E,R,N,F,x,G,K,$)=>{const U=E.el=y?y.el:l(""),te=E.anchor=y?y.anchor:l("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:oe}=E;oe&&(K=K?K.concat(oe):oe),y==null?(r(U,R,N),r(te,R,N),_(E.children||[],R,te,F,x,G,K,$)):J>0&&J&64&&ee&&y.dynamicChildren?(A(y.dynamicChildren,ee,R,F,x,G,K),(E.key!=null||F&&E===F.subTree)&&ip(y,E,!0)):ge(y,E,R,te,F,x,G,K,$)},T=(y,E,R,N,F,x,G,K,$)=>{E.slotScopeIds=K,y==null?E.shapeFlag&512?F.ctx.activate(E,R,N,G,$):pt(E,R,N,F,x,G,$):Ct(y,E,$)},pt=(y,E,R,N,F,x,G)=>{const K=y.component=dv(y,N,F);if(qd(y)&&(K.ctx.renderer=Z),pv(K,!1,G),K.asyncDep){if(F&&F.registerDep(K,$e,G),!y.el){const $=K.subTree=ut(yr);q(null,$,E,R)}}else $e(K,y,E,R,F,x,G)},Ct=(y,E,R)=>{const N=E.component=y.component;if(rv(y,E,R))if(N.asyncDep&&!N.asyncResolved){ve(N,E,R);return}else N.next=E,N.update();else E.el=y.el,N.vnode=E},$e=(y,E,R,N,F,x,G)=>{const K=()=>{if(y.isMounted){let{next:J,bu:ee,u:oe,parent:ne,vnode:fe}=y;{const nt=op(y);if(nt){J&&(J.el=fe.el,ve(y,J,G)),nt.asyncDep.then(()=>{y.isUnmounted||K()});return}}let Ee=J,tt;hr(y,!1),J?(J.el=fe.el,ve(y,J,G)):J=fe,ee&&no(ee),(tt=J.props&&J.props.onVnodeBeforeUpdate)&&Wt(tt,ne,J,fe),hr(y,!0);const Qe=ih(y),kt=y.subTree;y.subTree=Qe,V(kt,Qe,p(kt.el),D(kt),y,F,x),J.el=Qe.el,Ee===null&&sv(y,Qe.el),oe&&At(oe,F),(tt=J.props&&J.props.onVnodeUpdated)&&At(()=>Wt(tt,ne,J,fe),F)}else{let J;const{el:ee,props:oe}=E,{bm:ne,m:fe,parent:Ee,root:tt,type:Qe}=y,kt=$s(E);hr(y,!1),ne&&no(ne),!kt&&(J=oe&&oe.onVnodeBeforeMount)&&Wt(J,Ee,E),hr(y,!0);{tt.ce&&tt.ce._injectChildStyle(Qe);const nt=y.subTree=ih(y);V(null,nt,R,N,y,F,x),E.el=nt.el}if(fe&&At(fe,F),!kt&&(J=oe&&oe.onVnodeMounted)){const nt=E;At(()=>Wt(J,Ee,nt),F)}(E.shapeFlag&256||Ee&&$s(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&At(y.a,F),y.isMounted=!0,E=R=N=null}};y.scope.on();const $=y.effect=new vd(K);y.scope.off();const U=y.update=$.run.bind($),te=y.job=$.runIfDirty.bind($);te.i=y,te.id=y.uid,$.scheduler=()=>sc(te),hr(y,!0),U()},ve=(y,E,R)=>{E.component=y;const N=y.vnode.props;y.vnode=E,y.next=null,jy(y,E.props,N,R),Ky(y,E.children,R),nr(),Yu(y),rr()},ge=(y,E,R,N,F,x,G,K,$=!1)=>{const U=y&&y.children,te=y?y.shapeFlag:0,J=E.children,{patchFlag:ee,shapeFlag:oe}=E;if(ee>0){if(ee&128){Lt(U,J,R,N,F,x,G,K,$);return}else if(ee&256){It(U,J,R,N,F,x,G,K,$);return}}oe&8?(te&16&&vt(U,F,x),J!==U&&d(R,J)):te&16?oe&16?Lt(U,J,R,N,F,x,G,K,$):vt(U,F,x,!0):(te&8&&d(R,""),oe&16&&_(J,R,N,F,x,G,K,$))},It=(y,E,R,N,F,x,G,K,$)=>{y=y||Hr,E=E||Hr;const U=y.length,te=E.length,J=Math.min(U,te);let ee;for(ee=0;ee<J;ee++){const oe=E[ee]=$?Mn(E[ee]):Yt(E[ee]);V(y[ee],oe,R,null,F,x,G,K,$)}U>te?vt(y,F,x,!0,!1,J):_(E,R,N,F,x,G,K,$,J)},Lt=(y,E,R,N,F,x,G,K,$)=>{let U=0;const te=E.length;let J=y.length-1,ee=te-1;for(;U<=J&&U<=ee;){const oe=y[U],ne=E[U]=$?Mn(E[U]):Yt(E[U]);if(ks(oe,ne))V(oe,ne,R,null,F,x,G,K,$);else break;U++}for(;U<=J&&U<=ee;){const oe=y[J],ne=E[ee]=$?Mn(E[ee]):Yt(E[ee]);if(ks(oe,ne))V(oe,ne,R,null,F,x,G,K,$);else break;J--,ee--}if(U>J){if(U<=ee){const oe=ee+1,ne=oe<te?E[oe].el:N;for(;U<=ee;)V(null,E[U]=$?Mn(E[U]):Yt(E[U]),R,ne,F,x,G,K,$),U++}}else if(U>ee)for(;U<=J;)xe(y[U],F,x,!0),U++;else{const oe=U,ne=U,fe=new Map;for(U=ne;U<=ee;U++){const Je=E[U]=$?Mn(E[U]):Yt(E[U]);Je.key!=null&&fe.set(Je.key,U)}let Ee,tt=0;const Qe=ee-ne+1;let kt=!1,nt=0;const Pn=new Array(Qe);for(U=0;U<Qe;U++)Pn[U]=0;for(U=oe;U<=J;U++){const Je=y[U];if(tt>=Qe){xe(Je,F,x,!0);continue}let Vt;if(Je.key!=null)Vt=fe.get(Je.key);else for(Ee=ne;Ee<=ee;Ee++)if(Pn[Ee-ne]===0&&ks(Je,E[Ee])){Vt=Ee;break}Vt===void 0?xe(Je,F,x,!0):(Pn[Vt-ne]=U+1,Vt>=nt?nt=Vt:kt=!0,V(Je,E[Vt],R,null,F,x,G,K,$),tt++)}const ms=kt?Qy(Pn):Hr;for(Ee=ms.length-1,U=Qe-1;U>=0;U--){const Je=ne+U,Vt=E[Je],Vi=Je+1<te?E[Je+1].el:N;Pn[U]===0?V(null,Vt,R,Vi,F,x,G,K,$):kt&&(Ee<0||U!==ms[Ee]?Pt(Vt,R,Vi,2):Ee--)}}},Pt=(y,E,R,N,F=null)=>{const{el:x,type:G,transition:K,children:$,shapeFlag:U}=y;if(U&6){Pt(y.component.subTree,E,R,N);return}if(U&128){y.suspense.move(E,R,N);return}if(U&64){G.move(y,E,R,Z);return}if(G===dn){r(x,E,R);for(let J=0;J<$.length;J++)Pt($[J],E,R,N);r(y.anchor,E,R);return}if(G===Ha){H(y,E,R);return}if(N!==2&&U&1&&K)if(N===0)K.beforeEnter(x),r(x,E,R),At(()=>K.enter(x),F);else{const{leave:J,delayLeave:ee,afterLeave:oe}=K,ne=()=>r(x,E,R),fe=()=>{J(x,()=>{ne(),oe&&oe()})};ee?ee(x,ne,fe):fe()}else r(x,E,R)},xe=(y,E,R,N=!1,F=!1)=>{const{type:x,props:G,ref:K,children:$,dynamicChildren:U,shapeFlag:te,patchFlag:J,dirs:ee,cacheIndex:oe}=y;if(J===-2&&(F=!1),K!=null&&To(K,null,R,y,!0),oe!=null&&(E.renderCache[oe]=void 0),te&256){E.ctx.deactivate(y);return}const ne=te&1&&ee,fe=!$s(y);let Ee;if(fe&&(Ee=G&&G.onVnodeBeforeUnmount)&&Wt(Ee,E,y),te&6)zt(y.component,R,N);else{if(te&128){y.suspense.unmount(R,N);return}ne&&ur(y,null,E,"beforeUnmount"),te&64?y.type.remove(y,E,R,Z,N):U&&!U.hasOnce&&(x!==dn||J>0&&J&64)?vt(U,E,R,!1,!0):(x===dn&&J&384||!F&&te&16)&&vt($,E,R),N&&Me(y)}(fe&&(Ee=G&&G.onVnodeUnmounted)||ne)&&At(()=>{Ee&&Wt(Ee,E,y),ne&&ur(y,null,E,"unmounted")},R)},Me=y=>{const{type:E,el:R,anchor:N,transition:F}=y;if(E===dn){Cn(R,N);return}if(E===Ha){W(y);return}const x=()=>{s(R),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:K}=F,$=()=>G(R,x);K?K(y.el,x,$):$()}else x()},Cn=(y,E)=>{let R;for(;y!==E;)R=m(y),s(y),y=R;s(E)},zt=(y,E,R)=>{const{bum:N,scope:F,job:x,subTree:G,um:K,m:$,a:U}=y;sh($),sh(U),N&&no(N),F.stop(),x&&(x.flags|=8,xe(G,y,E,R)),K&&At(K,E),At(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},vt=(y,E,R,N=!1,F=!1,x=0)=>{for(let G=x;G<y.length;G++)xe(y[G],E,R,N,F)},D=y=>{if(y.shapeFlag&6)return D(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=m(y.anchor||y.el),R=E&&E[gy];return R?m(R):E};let Y=!1;const Q=(y,E,R)=>{y==null?E._vnode&&xe(E._vnode,null,null,!0):V(E._vnode||null,y,E,null,null,null,R),E._vnode=y,Y||(Y=!0,Yu(),Ud(),Y=!1)},Z={p:V,um:xe,m:Pt,r:Me,mt:pt,mc:_,pc:ge,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:Uy(Q)}}function $a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Gy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ip(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Mn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&ip(a,l)),l.type===na&&(l.el=a.el)}}function Qy(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:op(e)}function sh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Jy=Symbol.for("v-scx"),Yy=()=>vn(Jy);function so(t,e,n){return ap(t,e,n)}function ap(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:a}=n,l=ft({},n),c=e&&r||!e&&i!=="post";let h;if(ri){if(i==="sync"){const v=Yy();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Xt,v.resume=Xt,v.pause=Xt,v}}const d=ct;l.call=(v,k,V)=>sn(v,d,k,V);let p=!1;i==="post"?l.scheduler=v=>{At(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,k)=>{k?v():sc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=hy(t,e,l);return ri&&(h?h.push(m):c&&m()),m}function Xy(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?lp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const a=vi(this),l=ap(s,i.bind(r),n);return a(),l}function lp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Zy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mt(e)}Modifiers`]||t[`${br(e)}Modifiers`];function ev(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),a=i&&Zy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>We(d)?d.trim():d)),a.number&&(s=n.map(_o)));let l,c=r[l=Ma(e)]||r[l=Ma(Mt(e))];!c&&i&&(c=r[l=Ma(br(e))]),c&&sn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(h,t,6,s)}}function cp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!he(t)){const c=h=>{const d=cp(h,e,!0);d&&(l=!0,ft(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>a[c]=null):ft(a,i),Oe(t)&&r.set(t,a),a)}function ta(t,e){return!t||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,br(e))||Re(t,e))}function ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:v,ctx:k,inheritAttrs:V}=t,O=Eo(t);let q,j;try{if(n.shapeFlag&4){const W=s||r,de=W;q=Yt(h.call(de,W,d,p,v,m,k)),j=l}else{const W=e;q=Yt(W.length>1?W(p,{attrs:l,slots:a,emit:c}):W(p,null)),j=e.props?l:tv(l)}}catch(W){qs.length=0,Zo(W,t,1),q=ut(yr)}let H=q;if(j&&V!==!1){const W=Object.keys(j),{shapeFlag:de}=H;W.length&&de&7&&(i&&W.some(Kl)&&(j=nv(j,i)),H=Zr(H,j,!1,!0))}return n.dirs&&(H=Zr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&oc(H,n.transition),q=H,Eo(O),q}const tv=t=>{let e;for(const n in t)(n==="class"||n==="style"||zo(n))&&((e||(e={}))[n]=t[n]);return e},nv=(t,e)=>{const n={};for(const r in t)(!Kl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!ta(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?oh(r,a,h):!0:!!a;return!1}function oh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function sv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const up=t=>t.__isSuspense;function iv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):py(t)}const dn=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),yr=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),qs=[];let St=null;function Ce(t=!1){qs.push(St=t?null:[])}function ov(){qs.pop(),St=qs[qs.length-1]||null}let ti=1;function ah(t,e=!1){ti+=t,t<0&&St&&e&&(St.hasOnce=!0)}function hp(t){return t.dynamicChildren=ti>0?St||Hr:null,ov(),ti>0&&St&&St.push(t),t}function Pe(t,e,n,r,s,i){return hp(L(t,e,n,r,s,i,!0))}function av(t,e,n,r,s){return hp(ut(t,e,n,r,s,!0))}function wo(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const fp=({key:t})=>t??null,io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||ht(t)||he(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,s=null,i=t===dn?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fp(e),ref:e&&io(e),scopeId:jd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return l?(cc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),ti>0&&!a&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const ut=lv;function lv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ky)&&(t=yr),wo(t)){const l=Zr(t,e,!0);return n&&cc(l,n),ti>0&&!i&&St&&(l.shapeFlag&6?St[St.indexOf(t)]=l:St.push(l)),l.patchFlag=-2,l}if(vv(t)&&(t=t.__vccOpts),e){e=cv(e);let{class:l,style:c}=e;l&&!We(l)&&(e.class=Tt(l)),Oe(c)&&(nc(c)&&!le(c)&&(c=ft({},c)),e.style=Gl(c))}const a=We(t)?1:up(t)?128:my(t)?64:Oe(t)?4:he(t)?2:0;return L(t,e,n,r,s,a,i,!0)}function cv(t){return t?nc(t)||Xd(t)?ft({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?uv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&fp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(io(e)):[i,io(e)]:io(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&oc(d,c.clone(d)),d}function ni(t=" ",e=0){return ut(na,null,t,e)}function Le(t="",e=!1){return e?(Ce(),av(yr,null,t)):ut(yr,null,t)}function Yt(t){return t==null||typeof t=="boolean"?ut(yr):le(t)?ut(dn,null,t.slice()):wo(t)?Mn(t):ut(na,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function cc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),cc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xd(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[ni(e)]):n=8);t.children=e,t.shapeFlag|=n}function uv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tt([e.class,r.class]));else if(s==="style")e.style=Gl([e.style,r.style]);else if(zo(s)){const i=e[s],a=r[s];a&&i!==a&&!(le(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){sn(t,e,7,[n,r])}const hv=Qd();let fv=0;function dv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hv,i={uid:fv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new L_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(r,s),emitsOptions:cp(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ev.bind(null,i),t.ce&&t.ce(i),i}let ct=null,Ao,gl;{const t=Jo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ao=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),gl=e("__VUE_SSR_SETTERS__",n=>ri=n)}const vi=t=>{const e=ct;return Ao(t),t.scope.on(),()=>{t.scope.off(),Ao(e)}},lh=()=>{ct&&ct.scope.off(),Ao(null)};function dp(t){return t.vnode.shapeFlag&4}let ri=!1;function pv(t,e=!1,n=!1){e&&gl(e);const{props:r,children:s}=t.vnode,i=dp(t);By(t,r,i,e),qy(t,s,n);const a=i?gv(t,e):void 0;return e&&gl(!1),a}function gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dy);const{setup:r}=n;if(r){nr();const s=t.setupContext=r.length>1?_v(t):null,i=vi(t),a=yi(r,t,0,[t.props,s]),l=fd(a);if(rr(),i(),(l||t.sp)&&!$s(t)&&Hd(t),l){if(a.then(lh,lh),e)return a.then(c=>{ch(t,c)}).catch(c=>{Zo(c,t,0)});t.asyncDep=a}else ch(t,a)}else pp(t)}function ch(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Md(e)),pp(t)}function pp(t,e,n){const r=t.type;t.render||(t.render=r.render||Xt);{const s=vi(t);nr();try{Ny(t)}finally{rr(),s()}}}const mv={get(t,e){return at(t,"get",""),t[e]}};function _v(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,mv),slots:t.slots,emit:t.emit,expose:e}}function ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Md(ry(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}})):t.proxy}function yv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function vv(t){return he(t)&&"__vccOpts"in t}const Ut=(t,e)=>cy(t,e,ri);function gp(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!le(e)?wo(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wo(n)&&(n=[n]),ut(t,e,n))}const Ev="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ml;const uh=typeof window<"u"&&window.trustedTypes;if(uh)try{ml=uh.createPolicy("vue",{createHTML:t=>t})}catch{}const mp=ml?t=>ml.createHTML(t):t=>t,Tv="http://www.w3.org/2000/svg",Iv="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,hh=fn&&fn.createElement("template"),wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(Tv,t):e==="mathml"?fn.createElementNS(Iv,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hh.innerHTML=mp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=hh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Av=Symbol("_vtc");function bv(t,e,n){const r=t[Av];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fh=Symbol("_vod"),Rv=Symbol("_vsh"),Sv=Symbol(""),Cv=/(^|;)\s*display\s*:/;function Pv(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&oo(r,l,"")}else for(const a in e)n[a]==null&&oo(r,a,"");for(const a in n)a==="display"&&(i=!0),oo(r,a,n[a])}else if(s){if(e!==n){const a=r[Sv];a&&(n+=";"+a),r.cssText=n,i=Cv.test(n)}}else e&&t.removeAttribute("style");fh in t&&(t[fh]=i?r.display:"",t[Rv]&&(r.display="none"))}const dh=/\s*!important$/;function oo(t,e,n){if(le(n))n.forEach(r=>oo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kv(t,e);dh.test(n)?t.setProperty(br(r),n.replace(dh,""),"important"):t[r]=n}}const ph=["Webkit","Moz","ms"],qa={};function kv(t,e){const n=qa[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return qa[e]=r;r=Qo(r);for(let s=0;s<ph.length;s++){const i=ph[s]+r;if(i in t)return qa[e]=i}return e}const gh="http://www.w3.org/1999/xlink";function mh(t,e,n,r,s,i=O_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gh,e.slice(6,e.length)):t.setAttributeNS(gh,e,n):n==null||i&&!md(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function _h(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=md(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function pr(t,e,n,r){t.addEventListener(e,n,r)}function Vv(t,e,n,r){t.removeEventListener(e,n,r)}const yh=Symbol("_vei");function Dv(t,e,n,r,s=null){const i=t[yh]||(t[yh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Nv(e);if(r){const h=i[e]=Mv(r,s);pr(t,l,h,c)}else a&&(Vv(t,l,a,c),i[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function Nv(t){let e;if(vh.test(t)){e={};let r;for(;r=t.match(vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let Ka=0;const Ov=Promise.resolve(),xv=()=>Ka||(Ov.then(()=>Ka=0),Ka=Date.now());function Mv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(Lv(r,n.value),e,5,[r])};return n.value=t,n.attached=xv(),n}function Lv(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Eh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Fv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?bv(t,r,a):e==="style"?Pv(t,n,r):zo(e)?Kl(e)||Dv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uv(t,e,r,a))?(_h(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?_h(t,Mt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mh(t,e,r,a))};function Uv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Eh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eh(e)&&We(n)?!1:e in t}const bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>no(e,n):e};function Bv(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gr=Symbol("_assign"),Qt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gr]=bo(s);const i=r||s.props&&s.props.type==="number";pr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=_o(l)),t[Gr](l)}),n&&pr(t,"change",()=>{t.value=t.value.trim()}),e||(pr(t,"compositionstart",Bv),pr(t,"compositionend",Th),pr(t,"change",Th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Gr]=bo(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?_o(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ih={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Wo(e);pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?_o(Ro(a)):Ro(a));t[Gr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,rc(()=>{t._assigning=!1})}),t[Gr]=bo(r)},mounted(t,{value:e}){wh(t,e)},beforeUpdate(t,e,n){t[Gr]=bo(n)},updated(t,{value:e}){t._assigning||wh(t,e)}};function wh(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Wo(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],l=Ro(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=M_(e,l)>-1}else a.selected=e.has(l);else if(Yo(Ro(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ro(t){return"_value"in t?t._value:t.value}const jv=["ctrl","shift","alt","meta"],$v={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jv.some(n=>t[`${n}Key`]&&!e.includes(n))},_p=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=$v[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Hv=ft({patchProp:Fv},wv);let Ah;function qv(){return Ah||(Ah=zy(Hv))}const Kv=(...t)=>{const e=qv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wv(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,zv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function zv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wv(t){return We(t)?document.querySelector(t):t}const Ei=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Gv={name:"App"},Qv={id:"app"};function Jv(t,e,n,r,s,i){const a=ac("router-view");return Ce(),Pe("div",Qv,[ut(a)])}const Yv=Ei(Gv,[["render",Jv]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof document<"u";function yp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&yp(t.default)}const Ae=Object.assign;function za(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const Ks=()=>{},Ht=Array.isArray,vp=/#/g,Zv=/&/g,eE=/\//g,tE=/=/g,nE=/\?/g,Ep=/\+/g,rE=/%5B/g,sE=/%5D/g,Tp=/%5E/g,iE=/%60/g,Ip=/%7B/g,oE=/%7C/g,wp=/%7D/g,aE=/%20/g;function uc(t){return encodeURI(""+t).replace(oE,"|").replace(rE,"[").replace(sE,"]")}function lE(t){return uc(t).replace(Ip,"{").replace(wp,"}").replace(Tp,"^")}function _l(t){return uc(t).replace(Ep,"%2B").replace(aE,"+").replace(vp,"%23").replace(Zv,"%26").replace(iE,"`").replace(Ip,"{").replace(wp,"}").replace(Tp,"^")}function cE(t){return _l(t).replace(tE,"%3D")}function uE(t){return uc(t).replace(vp,"%23").replace(nE,"%3F")}function hE(t){return t==null?"":uE(t).replace(eE,"%2F")}function si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fE=/\/$/,dE=t=>t.replace(fE,"");function Wa(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=_E(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:si(a)}}function pE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&es(e.matched[r],n.matched[s])&&Ap(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ap(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mE(t[n],e[n]))return!1;return!0}function mE(t,e){return Ht(t)?Rh(t,e):Ht(e)?Rh(e,t):t===e}function Rh(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ii;(function(t){t.pop="pop",t.push="push"})(ii||(ii={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function yE(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dE(t)}const vE=/^[^#]+#/;function EE(t,e){return t.replace(vE,"#")+e}function TE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const sa=()=>({left:window.scrollX,top:window.scrollY});function IE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=TE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sh(t,e){return(history.state?history.state.position-e:-1)+t}const yl=new Map;function wE(t,e){yl.set(t,e)}function AE(t){const e=yl.get(t);return yl.delete(t),e}let bE=()=>location.protocol+"//"+location.host;function bp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),bh(c,"")}return bh(n,t)+r+s}function RE(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const v=bp(t,location),k=n.value,V=e.value;let O=0;if(m){if(n.value=v,e.value=m,a&&a===k){a=null;return}O=V?m.position-V.position:0}else r(v);s.forEach(q=>{q(n.value,k,{delta:O,type:ii.pop,direction:O?O>0?zs.forward:zs.back:zs.unknown})})};function c(){a=n.value}function h(m){s.push(m);const v=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(v),v}function d(){const{history:m}=window;m.state&&m.replaceState(Ae({},m.state,{scroll:sa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Ch(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?sa():null}}function SE(t){const{history:e,location:n}=window,r={value:bp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:bE()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function a(c,h){const d=Ae({},e.state,Ch(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ae({},s.value,e.state,{forward:c,scroll:sa()});i(d.current,d,!0);const p=Ae({},Ch(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function CE(t){t=yE(t);const e=SE(t),n=RE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:EE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PE(t){return typeof t=="string"||t&&typeof t=="object"}function Rp(t){return typeof t=="string"||typeof t=="symbol"}const Sp=Symbol("");var Ph;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ph||(Ph={}));function ts(t,e){return Ae(new Error,{type:t,[Sp]:!0},e)}function hn(t,e){return t instanceof Error&&Sp in t&&(e==null||!!(t.type&e))}const kh="[^/]+?",kE={sensitive:!1,strict:!1,start:!0,end:!0},VE=/[.+*?^${}()[\]/\\]/g;function DE(t,e){const n=Ae({},kE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(VE,"\\$&"),v+=40;else if(m.type===1){const{value:k,repeatable:V,optional:O,regexp:q}=m;i.push({name:k,repeatable:V,optional:O});const j=q||kh;if(j!==kh){v+=10;try{new RegExp(`(${j})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+W.message)}}let H=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(H=O&&h.length<2?`(?:/${H})`:"/"+H),O&&(H+="?"),s+=H,v+=20,O&&(v+=-8),V&&(v+=-20),j===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",k=i[m-1];p[k.name]=v&&k.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===0)d+=v.value;else if(v.type===1){const{value:k,repeatable:V,optional:O}=v,q=k in h?h[k]:"";if(Ht(q)&&!V)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=Ht(q)?q.join("/"):q;if(!j)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function NE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Cp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vh(r))return 1;if(Vh(s))return-1}return s.length-r.length}function Vh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OE={type:0,value:""},xE=/[a-zA-Z0-9_]/;function ME(t){if(!t)return[[]];if(t==="/")return[[OE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:xE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function LE(t,e,n){const r=DE(ME(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FE(t,e){const n=[],r=new Map;e=xh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,v){const k=!v,V=Nh(p);V.aliasOf=v&&v.record;const O=xh(e,p),q=[V];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of W)q.push(Nh(Ae({},V,{components:v?v.record.components:V.components,path:de,aliasOf:v?v.record:V})))}let j,H;for(const W of q){const{path:de}=W;if(m&&de[0]!=="/"){const pe=m.record.path,w=pe[pe.length-1]==="/"?"":"/";W.path=m.record.path+(de&&w+de)}if(j=LE(W,m,O),v?v.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),k&&p.name&&!Oh(j)&&a(p.name)),Pp(j)&&c(j),V.children){const pe=V.children;for(let w=0;w<pe.length;w++)i(pe[w],j,v&&v.children[w])}v=v||j}return H?()=>{a(H)}:Ks}function a(p){if(Rp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=jE(p,n);n.splice(m,0,p),p.record.name&&!Oh(p)&&r.set(p.record.name,p)}function h(p,m){let v,k={},V,O;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ts(1,{location:p});O=v.record.name,k=Ae(Dh(m.params,v.keys.filter(H=>!H.optional).concat(v.parent?v.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&Dh(p.params,v.keys.map(H=>H.name))),V=v.stringify(k)}else if(p.path!=null)V=p.path,v=n.find(H=>H.re.test(V)),v&&(k=v.parse(V),O=v.record.name);else{if(v=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!v)throw ts(1,{location:p,currentLocation:m});O=v.record.name,k=Ae({},m.params,p.params),V=v.stringify(k)}const q=[];let j=v;for(;j;)q.unshift(j.record),j=j.parent;return{name:O,path:V,params:k,matched:q,meta:BE(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Dh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Nh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Oh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BE(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function xh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function jE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Cp(t,e[i])<0?r=i:n=i+1}const s=$E(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $E(t){let e=t;for(;e=e.parent;)if(Pp(e)&&Cp(t,e)===0)return e}function Pp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function HE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ep," "),a=i.indexOf("="),l=si(a<0?i:i.slice(0,a)),c=a<0?null:si(i.slice(a+1));if(l in e){let h=e[l];Ht(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Mh(t){let e="";for(let n in t){const r=t[n];if(n=cE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&_l(i)):[r&&_l(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const KE=Symbol(""),Lh=Symbol(""),hc=Symbol(""),kp=Symbol(""),vl=Symbol("");function Vs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ln(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(ts(4,{from:n,to:e})):m instanceof Error?c(m):PE(m)?c(ts(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Ga(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(yp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Ln(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Xv(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&Ln(v,n,r,a,l,s)()}))}}return i}function Fh(t){const e=vn(hc),n=vn(kp),r=Ut(()=>{const c=Kr(t.to);return e.resolve(c)}),s=Ut(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(es.bind(null,d));if(m>-1)return m;const v=Uh(c[h-2]);return h>1&&Uh(d)===v&&p[p.length-1].path!==v?p.findIndex(es.bind(null,c[h-2])):m}),i=Ut(()=>s.value>-1&&JE(n.params,r.value.params)),a=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&Ap(n.params,r.value.params));function l(c={}){if(QE(c)){const h=e[Kr(t.replace)?"replace":"push"](Kr(t.to)).catch(Ks);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function zE(t){return t.length===1?t[0]:t}const WE=$d({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(t,{slots:e}){const n=Xo(Fh(t)),{options:r}=vn(hc),s=Ut(()=>({[Bh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zE(e.default(n));return t.custom?i:gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GE=WE;function QE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Uh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bh=(t,e,n)=>t??e??n,YE=$d({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=vn(vl),s=Ut(()=>t.route||r.value),i=vn(Lh,0),a=Ut(()=>{let h=Kr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ut(()=>s.value.matched[a.value]);ro(Lh,Ut(()=>a.value+1)),ro(KE,l),ro(vl,s);const c=sy();return so(()=>[c.value,l.value,t.name],([h,d,p],[m,v,k])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!es(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return jh(n.default,{Component:m,route:h});const v=p.props[d],k=v?v===!0?h.params:typeof v=="function"?v(h):v:null,O=gp(m,Ae({},k,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return jh(n.default,{Component:O,route:h})||O}}});function jh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XE=YE;function ZE(t){const e=FE(t.routes,t),n=t.parseQuery||HE,r=t.stringifyQuery||Mh,s=t.history,i=Vs(),a=Vs(),l=Vs(),c=iy(Nn);let h=Nn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=za.bind(null,D=>""+D),p=za.bind(null,hE),m=za.bind(null,si);function v(D,Y){let Q,Z;return Rp(D)?(Q=e.getRecordMatcher(D),Z=Y):Z=D,e.addRoute(Z,Q)}function k(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function q(D,Y){if(Y=Ae({},Y||c.value),typeof D=="string"){const R=Wa(n,D,Y.path),N=e.resolve({path:R.path},Y),F=s.createHref(R.fullPath);return Ae(R,N,{params:m(N.params),hash:si(R.hash),redirectedFrom:void 0,href:F})}let Q;if(D.path!=null)Q=Ae({},D,{path:Wa(n,D.path,Y.path).path});else{const R=Ae({},D.params);for(const N in R)R[N]==null&&delete R[N];Q=Ae({},D,{params:p(R)}),Y.params=p(Y.params)}const Z=e.resolve(Q,Y),Ie=D.hash||"";Z.params=d(m(Z.params));const y=pE(r,Ae({},D,{hash:lE(Ie),path:Z.path})),E=s.createHref(y);return Ae({fullPath:y,hash:Ie,query:r===Mh?qE(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:E})}function j(D){return typeof D=="string"?Wa(n,D,c.value.path):Ae({},D)}function H(D,Y){if(h!==D)return ts(8,{from:Y,to:D})}function W(D){return w(D)}function de(D){return W(Ae(j(D),{replace:!0}))}function pe(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let Z=typeof Q=="function"?Q(D):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=j(Z):{path:Z},Z.params={}),Ae({query:D.query,hash:D.hash,params:Z.path!=null?{}:D.params},Z)}}function w(D,Y){const Q=h=q(D),Z=c.value,Ie=D.state,y=D.force,E=D.replace===!0,R=pe(Q);if(R)return w(Ae(j(R),{state:typeof R=="object"?Ae({},Ie,R.state):Ie,force:y,replace:E}),Y||Q);const N=Q;N.redirectedFrom=Y;let F;return!y&&gE(r,Z,Q)&&(F=ts(16,{to:N,from:Z}),Pt(Z,Z,!0,!1)),(F?Promise.resolve(F):A(N,Z)).catch(x=>hn(x)?hn(x,2)?x:Lt(x):ge(x,N,Z)).then(x=>{if(x){if(hn(x,2))return w(Ae({replace:E},j(x.to),{state:typeof x.to=="object"?Ae({},Ie,x.to.state):Ie,force:y}),Y||N)}else x=S(N,Z,!0,E,Ie);return b(N,Z,x),x})}function _(D,Y){const Q=H(D,Y);return Q?Promise.reject(Q):Promise.resolve()}function I(D){const Y=Cn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function A(D,Y){let Q;const[Z,Ie,y]=eT(D,Y);Q=Ga(Z.reverse(),"beforeRouteLeave",D,Y);for(const R of Z)R.leaveGuards.forEach(N=>{Q.push(Ln(N,D,Y))});const E=_.bind(null,D,Y);return Q.push(E),vt(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Ln(R,D,Y));return Q.push(E),vt(Q)}).then(()=>{Q=Ga(Ie,"beforeRouteUpdate",D,Y);for(const R of Ie)R.updateGuards.forEach(N=>{Q.push(Ln(N,D,Y))});return Q.push(E),vt(Q)}).then(()=>{Q=[];for(const R of y)if(R.beforeEnter)if(Ht(R.beforeEnter))for(const N of R.beforeEnter)Q.push(Ln(N,D,Y));else Q.push(Ln(R.beforeEnter,D,Y));return Q.push(E),vt(Q)}).then(()=>(D.matched.forEach(R=>R.enterCallbacks={}),Q=Ga(y,"beforeRouteEnter",D,Y,I),Q.push(E),vt(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Ln(R,D,Y));return Q.push(E),vt(Q)}).catch(R=>hn(R,8)?R:Promise.reject(R))}function b(D,Y,Q){l.list().forEach(Z=>I(()=>Z(D,Y,Q)))}function S(D,Y,Q,Z,Ie){const y=H(D,Y);if(y)return y;const E=Y===Nn,R=Lr?history.state:{};Q&&(Z||E?s.replace(D.fullPath,Ae({scroll:E&&R&&R.scroll},Ie)):s.push(D.fullPath,Ie)),c.value=D,Pt(D,Y,Q,E),Lt()}let T;function pt(){T||(T=s.listen((D,Y,Q)=>{if(!zt.listening)return;const Z=q(D),Ie=pe(Z);if(Ie){w(Ae(Ie,{replace:!0,force:!0}),Z).catch(Ks);return}h=Z;const y=c.value;Lr&&wE(Sh(y.fullPath,Q.delta),sa()),A(Z,y).catch(E=>hn(E,12)?E:hn(E,2)?(w(Ae(j(E.to),{force:!0}),Z).then(R=>{hn(R,20)&&!Q.delta&&Q.type===ii.pop&&s.go(-1,!1)}).catch(Ks),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ge(E,Z,y))).then(E=>{E=E||S(Z,y,!1),E&&(Q.delta&&!hn(E,8)?s.go(-Q.delta,!1):Q.type===ii.pop&&hn(E,20)&&s.go(-1,!1)),b(Z,y,E)}).catch(Ks)}))}let Ct=Vs(),$e=Vs(),ve;function ge(D,Y,Q){Lt(D);const Z=$e.list();return Z.length?Z.forEach(Ie=>Ie(D,Y,Q)):console.error(D),Promise.reject(D)}function It(){return ve&&c.value!==Nn?Promise.resolve():new Promise((D,Y)=>{Ct.add([D,Y])})}function Lt(D){return ve||(ve=!D,pt(),Ct.list().forEach(([Y,Q])=>D?Q(D):Y()),Ct.reset()),D}function Pt(D,Y,Q,Z){const{scrollBehavior:Ie}=t;if(!Lr||!Ie)return Promise.resolve();const y=!Q&&AE(Sh(D.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return rc().then(()=>Ie(D,Y,y)).then(E=>E&&IE(E)).catch(E=>ge(E,D,Y))}const xe=D=>s.go(D);let Me;const Cn=new Set,zt={currentRoute:c,listening:!0,addRoute:v,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:V,resolve:q,options:t,push:W,replace:de,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$e.add,isReady:It,install(D){const Y=this;D.component("RouterLink",GE),D.component("RouterView",XE),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(c)}),Lr&&!Me&&c.value===Nn&&(Me=!0,W(s.location).catch(Ie=>{}));const Q={};for(const Ie in Nn)Object.defineProperty(Q,Ie,{get:()=>c.value[Ie],enumerable:!0});D.provide(hc,Y),D.provide(kp,Nd(Q)),D.provide(vl,c);const Z=D.unmount;Cn.add(D),D.unmount=function(){Cn.delete(D),Cn.size<1&&(h=Nn,T&&T(),T=null,c.value=Nn,Me=!1,ve=!1),Z()}}};function vt(D){return D.reduce((Y,Q)=>Y.then(()=>I(Q)),Promise.resolve())}return zt}function eT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>es(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>es(h,c))||s.push(c))}return[n,r,s]}const tT=()=>{};var $h={};/**
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
 */const Vp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,a||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new rT;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sT=function(t){const e=Vp(t);return Dp.encodeByteArray(e,!0)},So=function(t){return sT(t).replace(/\./g,"")},Np=function(t){try{return Dp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oT=()=>iT().__FIREBASE_DEFAULTS__,aT=()=>{if(typeof process>"u"||typeof $h>"u")return;const t=$h.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},ia=()=>{try{return tT()||oT()||aT()||lT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=t=>{var e,n;return(n=(e=ia())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cT=t=>{const e=Op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xp=()=>{var t;return(t=ia())===null||t===void 0?void 0:t.config},Mp=t=>{var e;return(e=ia())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[So(JSON.stringify(n)),So(JSON.stringify(a)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function dT(){var t;const e=(t=ia())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _T(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yT(){return!dT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vT(){try{return typeof indexedDB=="object"}catch{return!1}}function ET(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const TT="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TT,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?IT(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,l,r)}}function IT(t,e){return t.replace(wT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wT=/\{\$([^}]+)}/g;function AT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Hh(i)&&Hh(a)){if(!vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bT(t,e){const n=new RT(t,e);return n.subscribe.bind(n)}class RT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ST(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qa),s.error===void 0&&(s.error=Qa),s.complete===void 0&&(s.complete=Qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ST(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}/**
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
 */function qt(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class CT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kT(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PT(t){return t===dr?void 0:t}function kT(t){return t.instantiationMode==="EAGER"}/**
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
 */class VT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const DT={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},NT=me.INFO,OT={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},xT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=NT,this._logHandler=xT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const MT=(t,e)=>e.some(n=>t instanceof n);let qh,Kh;function LT(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FT(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,El=new WeakMap,Fp=new WeakMap,Ja=new WeakMap,dc=new WeakMap;function UT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(qn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),dc.set(e,t),e}function BT(t){if(El.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});El.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return El.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jT(t){Tl=t(Tl)}function $T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ya(this),e,...n);return Fp.set(r,e.sort?e.sort():[e]),qn(r)}:FT().includes(t)?function(...e){return t.apply(Ya(this),e),qn(Lp.get(this))}:function(...e){return qn(t.apply(Ya(this),e))}}function HT(t){return typeof t=="function"?$T(t):(t instanceof IDBTransaction&&BT(t),MT(t,LT())?new Proxy(t,Tl):t)}function qn(t){if(t instanceof IDBRequest)return UT(t);if(Ja.has(t))return Ja.get(t);const e=HT(t);return e!==t&&(Ja.set(t,e),dc.set(e,t)),e}const Ya=t=>dc.get(t);function qT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=qn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(qn(a.result),c.oldVersion,c.newVersion,qn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const KT=["get","getKey","getAll","getAllKeys","count"],zT=["put","add","delete","clear"],Xa=new Map;function zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Xa.set(e,i),i}jT(t=>({...t,get:(e,n,r)=>zh(e,n)||t.get(e,n,r),has:(e,n)=>!!zh(e,n)||t.has(e,n)}));/**
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
 */class WT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Il="@firebase/app",Wh="0.11.2";/**
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
 */const In=new fc("@firebase/app"),QT="@firebase/app-compat",JT="@firebase/analytics-compat",YT="@firebase/analytics",XT="@firebase/app-check-compat",ZT="@firebase/app-check",eI="@firebase/auth",tI="@firebase/auth-compat",nI="@firebase/database",rI="@firebase/data-connect",sI="@firebase/database-compat",iI="@firebase/functions",oI="@firebase/functions-compat",aI="@firebase/installations",lI="@firebase/installations-compat",cI="@firebase/messaging",uI="@firebase/messaging-compat",hI="@firebase/performance",fI="@firebase/performance-compat",dI="@firebase/remote-config",pI="@firebase/remote-config-compat",gI="@firebase/storage",mI="@firebase/storage-compat",_I="@firebase/firestore",yI="@firebase/vertexai",vI="@firebase/firestore-compat",EI="firebase",TI="11.4.0";/**
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
 */const wl="[DEFAULT]",II={[Il]:"fire-core",[QT]:"fire-core-compat",[YT]:"fire-analytics",[JT]:"fire-analytics-compat",[ZT]:"fire-app-check",[XT]:"fire-app-check-compat",[eI]:"fire-auth",[tI]:"fire-auth-compat",[nI]:"fire-rtdb",[rI]:"fire-data-connect",[sI]:"fire-rtdb-compat",[iI]:"fire-fn",[oI]:"fire-fn-compat",[aI]:"fire-iid",[lI]:"fire-iid-compat",[cI]:"fire-fcm",[uI]:"fire-fcm-compat",[hI]:"fire-perf",[fI]:"fire-perf-compat",[dI]:"fire-rc",[pI]:"fire-rc-compat",[gI]:"fire-gcs",[mI]:"fire-gcs-compat",[_I]:"fire-fst",[vI]:"fire-fst-compat",[yI]:"fire-vertex","fire-js":"fire-js",[EI]:"fire-js-all"};/**
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
 */const Co=new Map,wI=new Map,Al=new Map;function Gh(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Al.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Al.set(e,t);for(const n of Co.values())Gh(n,t);for(const n of wI.values())Gh(n,t);return!0}function pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const AI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Ti("app","Firebase",AI);/**
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
 */class bI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const us=TI;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=xp()),!n)throw Kn.create("no-options");const i=Co.get(s);if(i){if(vr(n,i.options)&&vr(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const a=new VT(s);for(const c of Al.values())a.addComponent(c);const l=new bI(n,r,a);return Co.set(s,l),l}function Bp(t=wl){const e=Co.get(t);if(!e&&t===wl&&xp())return Up();if(!e)throw Kn.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let s=(r=II[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(l.join(" "));return}ns(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const RI="firebase-heartbeat-database",SI=1,oi="firebase-heartbeat-store";let Za=null;function jp(){return Za||(Za=qT(RI,SI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),Za}async function CI(t){try{const n=(await jp()).transaction(oi),r=await n.objectStore(oi).get($p(t));return await n.done,r}catch(e){if(e instanceof Sn)In.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Qh(t,e){try{const r=(await jp()).transaction(oi,"readwrite");await r.objectStore(oi).put(e,$p(t)),await r.done}catch(n){if(n instanceof Sn)In.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function $p(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PI=1024,kI=30;class VI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>kI){const a=OI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jh(),{heartbeatsToSend:r,unsentEntries:s}=DI(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return In.warn(n),""}}}function Jh(){return new Date().toISOString().substring(0,10)}function DI(t,e=PI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Yh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vT()?ET().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yh(t){return So(JSON.stringify({version:2,heartbeats:t})).length}function OI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function xI(t){ns(new Er("platform-logger",e=>new WT(e),"PRIVATE")),ns(new Er("heartbeat",e=>new VI(e),"PRIVATE")),zn(Il,Wh,t),zn(Il,Wh,"esm2017"),zn("fire-js","")}xI("");var MI="firebase",LI="11.4.0";/**
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
 */zn(MI,LI,"app");function gc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FI=Hp,qp=new Ti("auth","Firebase",Hp());/**
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
 */const Po=new fc("@firebase/auth");function UI(t,...e){Po.logLevel<=me.WARN&&Po.warn(`Auth (${us}): ${t}`,...e)}function ao(t,...e){Po.logLevel<=me.ERROR&&Po.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw mc(t,...e)}function Zt(t,...e){return mc(t,...e)}function Kp(t,e,n){const r=Object.assign(Object.assign({},FI()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return Kp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qp.create(t,...e)}function ie(t,e,...n){if(!t)throw mc(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function wn(t,e){t||mn(e)}/**
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
 */function bl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BI(){return Xh()==="http:"||Xh()==="https:"}function Xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BI()||gT()||"connection"in navigator)?navigator.onLine:!0}function $I(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=fT()||mT()}get(){return jI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _c(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qI=new wi(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,s={}){return Wp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ii(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return pT()||(h.referrerPolicy="no-referrer"),zp.fetch()(Gp(t,t.config.apiHost,n,l),h)})}async function Wp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HI),e);try{const s=new zI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ji(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ji(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Kp(t,d,h);Kt(t,d)}}catch(s){if(s instanceof Sn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function Ai(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Gp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_c(t.config,s):`${t.config.apiScheme}://${s}`}function KI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),qI.get())})}}function Ji(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}function Zh(t){return t!==void 0&&t.enterprise!==void 0}class WI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GI(t,e){return ir(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
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
 */async function QI(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Qp(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JI(t,e=!1){const n=qt(t),r=await n.getIdToken(e),s=yc(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(el(s.auth_time)),issuedAtTime:Ws(el(s.iat)),expirationTime:Ws(el(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function yc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const s=Np(n);return s?JSON.parse(s):(ao("Failed to decode base64 JWT payload"),null)}catch(s){return ao("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ef(t){const e=yc(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&YI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ai(t,Qp(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jp(i.providerUserInfo):[],l=ew(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Rl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function ZI(t){const e=qt(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ew(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jp(t){return t.map(e=>{var{providerId:n}=e,r=gc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tw(t,e){const n=await Wp(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Gp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",zp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nw(t,e){return ir(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=ef(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Qr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function On(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JI(this,e)}reload(){return ZI(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await ai(this,QI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:W,isAnonymous:de,providerData:pe,stsTokenManager:w}=n;ie(H&&w,e,"internal-error");const _=Qr.fromJSON(this.name,w);ie(typeof H=="string",e,"internal-error"),On(p,e.name),On(m,e.name),ie(typeof W=="boolean",e,"internal-error"),ie(typeof de=="boolean",e,"internal-error"),On(v,e.name),On(k,e.name),On(V,e.name),On(O,e.name),On(q,e.name),On(j,e.name);const I=new _n({uid:H,auth:e,email:m,emailVerified:W,displayName:p,isAnonymous:de,photoURL:k,phoneNumber:v,tenantId:V,stsTokenManager:_,createdAt:q,lastLoginAt:j});return pe&&Array.isArray(pe)&&(I.providerData=pe.map(A=>Object.assign({},A))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qr;l.updateFromIdToken(r);const c=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const tf=new Map;function yn(t){wn(t instanceof Function,"Expected a class definition");let e=tf.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tf.set(t,e),e)}/**
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
 */class Yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yp.type="NONE";const nf=Yp;/**
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
 */function lo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=lo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(yn(nf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(nf);const a=lo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){const p=_n._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
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
 */function rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rg(e))return"Blackberry";if(sg(e))return"Webos";if(Zp(e))return"Safari";if((e.includes("chrome/")||eg(e))&&!e.includes("edge/"))return"Chrome";if(ng(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xp(t=dt()){return/firefox\//i.test(t)}function Zp(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eg(t=dt()){return/crios\//i.test(t)}function tg(t=dt()){return/iemobile/i.test(t)}function ng(t=dt()){return/android/i.test(t)}function rg(t=dt()){return/blackberry/i.test(t)}function sg(t=dt()){return/webos/i.test(t)}function vc(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rw(t=dt()){var e;return vc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sw(){return _T()&&document.documentMode===10}function ig(t=dt()){return vc(t)||ng(t)||sg(t)||rg(t)||/windows phone/i.test(t)||tg(t)}/**
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
 */function og(t,e=[]){let n;switch(t){case"Browser":n=rf(dt());break;case"Worker":n=`${rf(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class iw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ow(t,e={}){return ir(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
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
 */const aw=6;class lw{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:aw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sf(this),this.idTokenSubscription=new sf(this),this.beforeStateQueue=new iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qp(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(En(this));const n=e?qt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ow(this),n=new lw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=og(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rr(t){return qt(t)}class sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=bT(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uw(t){oa=t}function ag(t){return oa.loadJS(t)}function hw(){return oa.recaptchaEnterpriseScript}function fw(){return oa.gapiScript}function dw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pw{constructor(){this.enterprise=new gw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mw="recaptcha-enterprise",lg="NO_RECAPTCHA";class _w{constructor(e){this.type=mw,this.auth=Rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{GI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new WI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Zh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(lg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pw().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&Zh(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hw();c.length!==0&&(c+=l),ag(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function of(t,e,n,r=!1,s=!1){const i=new _w(t);let a;if(s)a=lg;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Sl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await of(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await of(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
 */function yw(t,e){const n=pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vr(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function vw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ew(t,e,n){const r=Rr(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cg(e),{host:a,port:l}=Tw(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(vr(h,r.config.emulator)&&vr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Iw()}function cg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tw(t){const e=cg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:af(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:af(a)}}}function af(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Iw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ec{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function ww(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Aw(t,e){return Ai(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}/**
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
 */async function bw(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function Rw(t,e){return Ai(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
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
 */class li extends Ec{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(e,n,"signInWithPassword",Aw);case"emailLink":return bw(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(e,r,"signUpPassword",ww);case"emailLink":return Rw(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yr(t,e){return Ai(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
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
 */const Sw="http://localhost";class Tr extends Ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Tr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */function Cw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pw(t){const e=Ns(Os(t)).link,n=e?Ns(Os(e)).deep_link_id:null,r=Ns(Os(t)).deep_link_id;return(r?Ns(Os(r)).link:null)||r||n||e||t}class Tc{constructor(e){var n,r,s,i,a,l;const c=Ns(Os(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Cw((s=c.mode)!==null&&s!==void 0?s:null);ie(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Pw(e);try{return new Tc(n)}catch{return null}}}/**
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
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tc.parseLink(n);return ie(r,"argument-error"),li._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bi extends ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends bi{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class Un extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class Bn extends bi{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class jn extends bi{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function kw(t,e){return Ai(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
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
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),a=lf(r);return new Ir({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lf(r);return new Ir({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vo extends Sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vo(e,n,r,s)}}function hg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,i,e,r):i})}async function Vw(t,e,n=!1){const r=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
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
 */async function Dw(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await ai(t,hg(r,s,e,t),n);ie(i.idToken,r,"internal-error");const a=yc(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(t.uid===l,r,"user-mismatch"),Ir._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function fg(t,e,n=!1){if(Nt(t.app))return Promise.reject(En(t));const r="signIn",s=await hg(t,r,e),i=await Ir._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Nw(t,e){return fg(Rr(t),e)}/**
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
 */async function dg(t){const e=Rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ow(t,e,n){if(Nt(t.app))return Promise.reject(En(t));const r=Rr(t),a=await Sl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kw).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&dg(t),c}),l=await Ir._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function xw(t,e,n){return Nt(t.app)?Promise.reject(En(t)):Nw(qt(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dg(t),r})}function Mw(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function Lw(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}const Do="__sak";/**
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
 */class pg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fw=1e3,Uw=10;class gg extends pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ig(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);sw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Uw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gg.type="LOCAL";const Bw=gg;/**
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
 */class mg extends pg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mg.type="SESSION";const _g=mg;/**
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
 */function jw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await jw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
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
 */function Ic(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $w{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Ic("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function en(){return window}function Hw(t){en().location.href=t}/**
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
 */function yg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function qw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zw(){return yg()?self:null}/**
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
 */const vg="firebaseLocalStorageDb",Ww=1,No="firebaseLocalStorage",Eg="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([No],e?"readwrite":"readonly").objectStore(No)}function Gw(){const t=indexedDB.deleteDatabase(vg);return new Ri(t).toPromise()}function Cl(){const t=indexedDB.open(vg,Ww);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(No,{keyPath:Eg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(No)?e(r):(r.close(),await Gw(),e(await Cl()))})})}async function cf(t,e,n){const r=la(t,!0).put({[Eg]:e,value:n});return new Ri(r).toPromise()}async function Qw(t,e){const n=la(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function uf(t,e){const n=la(t,!0).delete(e);return new Ri(n).toPromise()}const Jw=800,Yw=3;class Tg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(zw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qw(),!this.activeServiceWorker)return;this.sender=new $w(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await cf(e,Do,"1"),await uf(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=la(s,!1).getAll();return new Ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tg.type="LOCAL";const Xw=Tg;new wi(3e4,6e4);/**
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
 */function Zw(t,e){return e?yn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wc extends Ec{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eA(t){return fg(t.auth,new wc(t),t.bypassAuthState)}function tA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Dw(n,new wc(t),t.bypassAuthState)}async function nA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Vw(n,new wc(t),t.bypassAuthState)}/**
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
 */class Ig{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eA;case"linkViaPopup":case"linkViaRedirect":return nA;case"reauthViaPopup":case"reauthViaRedirect":return tA;default:Kt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rA=new wi(2e3,1e4);class $r extends Ig{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rA.get())};e()}}$r.currentPopupAction=null;/**
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
 */const sA="pendingRedirect",co=new Map;class iA extends Ig{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await oA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oA(t,e){const n=cA(e),r=lA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aA(t,e){co.set(t._key(),e)}function lA(t){return yn(t._redirectPersistence)}function cA(t){return lo(sA,t.config.apiKey,t.name)}async function uA(t,e,n=!1){if(Nt(t.app))return Promise.reject(En(t));const r=Rr(t),s=Zw(r,e),a=await new iA(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const hA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hA&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(e))}saveEventToCache(e){this.cachedEventUids.add(hf(e)),this.lastProcessedEventTime=Date.now()}}function hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wg(t);default:return!1}}/**
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
 */async function pA(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
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
 */const gA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pA(t);for(const n of e)try{if(yA(n))return}catch{}Kt(t,"unauthorized-domain")}function yA(t){const e=bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!mA.test(n))return!1;if(gA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vA=new wi(3e4,6e4);function ff(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EA(t){return new Promise((e,n)=>{var r,s,i;function a(){ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ff(),n(Zt(t,"network-request-failed"))},timeout:vA.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)a();else{const l=dw("iframefcb");return en()[l]=()=>{gapi.load?a():n(Zt(t,"network-request-failed"))},ag(`${fw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw uo=null,e})}let uo=null;function TA(t){return uo=uo||EA(t),uo}/**
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
 */const IA=new wi(5e3,15e3),wA="__/auth/iframe",AA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SA(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_c(e,AA):`https://${t.config.authDomain}/${wA}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=RA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function CA(t){const e=await TA(t),n=en().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:SA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{i(a)},IA.get());function c(){en().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const PA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,VA=600,DA="_blank",NA="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OA(t,e,n,r=kA,s=VA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},PA),{width:r.toString(),height:s.toString(),top:i,left:a}),h=dt().toLowerCase();n&&(l=eg(h)?DA:n),Xp(h)&&(e=e||NA,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,k])=>`${m}${v}=${k},`,"");if(rw(h)&&l!=="_self")return xA(e||"",l),new df(null);const p=window.open(e||"",l,d);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new df(p)}function xA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MA="__/auth/handler",LA="emulator/auth/handler",FA=encodeURIComponent("fac");async function pf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof ug){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",AT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof bi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${FA}=${encodeURIComponent(c)}`:"";return`${UA(t)}?${Ii(l).slice(1)}${h}`}function UA({config:t}){return t.emulator?_c(t,LA):`https://${t.authDomain}/${MA}`}/**
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
 */const tl="webStorageSupport";class BA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_g,this._completeRedirectFn=uA,this._overrideRedirectResult=aA}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await pf(e,n,r,bl(),s);return OA(e,a,Ic())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await pf(e,n,r,bl(),s);return Hw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CA(e),r=new fA(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tl];a!==void 0&&n(!!a),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ig()||Zp()||vc()}}const jA=BA;var gf="@firebase/auth",mf="1.9.1";/**
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
 */class $A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qA(t){ns(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:og(t)},h=new cw(r,s,i,c);return vw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new Er("auth-internal",e=>{const n=Rr(e.getProvider("auth").getImmediate());return(r=>new $A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(gf,mf,HA(t)),zn(gf,mf,"esm2017")}/**
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
 */const KA=5*60,zA=Mp("authIdTokenMaxAge")||KA;let _f=null;const WA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zA)return;const s=n==null?void 0:n.token;_f!==s&&(_f=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GA(t=Bp()){const e=pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yw(t,{popupRedirectResolver:jA,persistence:[Xw,Bw,_g]}),r=Mp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=WA(i.toString());Lw(n,a,()=>a(n.currentUser)),Mw(n,l=>a(l))}}const s=Op("auth");return s&&Ew(n,`http://${s}`),n}function QA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qA("Browser");var yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,Ag;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function I(){}I.prototype=_.prototype,w.D=_.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,b,S){for(var T=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)T[pt-2]=arguments[pt];return _.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,I){I||(I=0);var A=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)A[b]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=w.g[0],I=w.g[1],b=w.g[2];var S=w.g[3],T=_+(S^I&(b^S))+A[0]+3614090360&4294967295;_=I+(T<<7&4294967295|T>>>25),T=S+(b^_&(I^b))+A[1]+3905402710&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(I^S&(_^I))+A[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(_^b&(S^_))+A[3]+3250441966&4294967295,I=b+(T<<22&4294967295|T>>>10),T=_+(S^I&(b^S))+A[4]+4118548399&4294967295,_=I+(T<<7&4294967295|T>>>25),T=S+(b^_&(I^b))+A[5]+1200080426&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(I^S&(_^I))+A[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(_^b&(S^_))+A[7]+4249261313&4294967295,I=b+(T<<22&4294967295|T>>>10),T=_+(S^I&(b^S))+A[8]+1770035416&4294967295,_=I+(T<<7&4294967295|T>>>25),T=S+(b^_&(I^b))+A[9]+2336552879&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(I^S&(_^I))+A[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(_^b&(S^_))+A[11]+2304563134&4294967295,I=b+(T<<22&4294967295|T>>>10),T=_+(S^I&(b^S))+A[12]+1804603682&4294967295,_=I+(T<<7&4294967295|T>>>25),T=S+(b^_&(I^b))+A[13]+4254626195&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(I^S&(_^I))+A[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(_^b&(S^_))+A[15]+1236535329&4294967295,I=b+(T<<22&4294967295|T>>>10),T=_+(b^S&(I^b))+A[1]+4129170786&4294967295,_=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(_^I))+A[6]+3225465664&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^I&(S^_))+A[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^_&(b^S))+A[0]+3921069994&4294967295,I=b+(T<<20&4294967295|T>>>12),T=_+(b^S&(I^b))+A[5]+3593408605&4294967295,_=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(_^I))+A[10]+38016083&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^I&(S^_))+A[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^_&(b^S))+A[4]+3889429448&4294967295,I=b+(T<<20&4294967295|T>>>12),T=_+(b^S&(I^b))+A[9]+568446438&4294967295,_=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(_^I))+A[14]+3275163606&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^I&(S^_))+A[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^_&(b^S))+A[8]+1163531501&4294967295,I=b+(T<<20&4294967295|T>>>12),T=_+(b^S&(I^b))+A[13]+2850285829&4294967295,_=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(_^I))+A[2]+4243563512&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^I&(S^_))+A[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^_&(b^S))+A[12]+2368359562&4294967295,I=b+(T<<20&4294967295|T>>>12),T=_+(I^b^S)+A[5]+4294588738&4294967295,_=I+(T<<4&4294967295|T>>>28),T=S+(_^I^b)+A[8]+2272392833&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^I)+A[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^_)+A[14]+4259657740&4294967295,I=b+(T<<23&4294967295|T>>>9),T=_+(I^b^S)+A[1]+2763975236&4294967295,_=I+(T<<4&4294967295|T>>>28),T=S+(_^I^b)+A[4]+1272893353&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^I)+A[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^_)+A[10]+3200236656&4294967295,I=b+(T<<23&4294967295|T>>>9),T=_+(I^b^S)+A[13]+681279174&4294967295,_=I+(T<<4&4294967295|T>>>28),T=S+(_^I^b)+A[0]+3936430074&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^I)+A[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^_)+A[6]+76029189&4294967295,I=b+(T<<23&4294967295|T>>>9),T=_+(I^b^S)+A[9]+3654602809&4294967295,_=I+(T<<4&4294967295|T>>>28),T=S+(_^I^b)+A[12]+3873151461&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^I)+A[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^_)+A[2]+3299628645&4294967295,I=b+(T<<23&4294967295|T>>>9),T=_+(b^(I|~S))+A[0]+4096336452&4294967295,_=I+(T<<6&4294967295|T>>>26),T=S+(I^(_|~b))+A[7]+1126891415&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~I))+A[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~_))+A[5]+4237533241&4294967295,I=b+(T<<21&4294967295|T>>>11),T=_+(b^(I|~S))+A[12]+1700485571&4294967295,_=I+(T<<6&4294967295|T>>>26),T=S+(I^(_|~b))+A[3]+2399980690&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~I))+A[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~_))+A[1]+2240044497&4294967295,I=b+(T<<21&4294967295|T>>>11),T=_+(b^(I|~S))+A[8]+1873313359&4294967295,_=I+(T<<6&4294967295|T>>>26),T=S+(I^(_|~b))+A[15]+4264355552&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~I))+A[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~_))+A[13]+1309151649&4294967295,I=b+(T<<21&4294967295|T>>>11),T=_+(b^(I|~S))+A[4]+4149444226&4294967295,_=I+(T<<6&4294967295|T>>>26),T=S+(I^(_|~b))+A[11]+3174756917&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~I))+A[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var I=_-this.blockSize,A=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<_;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<_;)if(A[b++]=w[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var I=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=I&255,I/=256;for(this.u(w),w=Array(16),_=I=0;4>_;++_)for(var A=0;32>A;A+=8)w[I++]=this.g[_]>>>A&255;return w};function i(w,_){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=_(w)}function a(w,_){this.h=_;for(var I=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==_||(I[b]=S,A=!1)}this.g=I}var l={};function c(w){return-128<=w&&128>w?i(w,function(_){return new a([_|0],0>_?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(h(-w));for(var _=[],I=1,A=0;w>=I;A++)_[A]=w/I|0,I*=4294967296;return new a(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return O(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),A=A.j(S).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=c(0),m=c(1),v=c(16777216);t=a.prototype,t.m=function(){if(V(this))return-O(this).m();for(var w=0,_=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(V(this))return"-"+O(this).toString(w);for(var _=h(Math.pow(w,6)),I=this,A="";;){var b=W(I,_).g;I=q(I,b.j(_));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,k(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=q(this,w),V(w)?-1:k(w)?0:1};function O(w){for(var _=w.g.length,I=[],A=0;A<_;A++)I[A]=~w.g[A];return new a(I,~w.h).add(m)}t.abs=function(){return V(this)?O(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],A=0,b=0;b<=_;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=T>>>16,S&=65535,T&=65535,I[b]=T<<16|S}return new a(I,I[I.length-1]&-2147483648?-1:0)};function q(w,_){return w.add(O(_))}t.j=function(w){if(k(this)||k(w))return p;if(V(this))return V(w)?O(this).j(O(w)):O(O(this).j(w));if(V(w))return O(this.j(O(w)));if(0>this.l(v)&&0>w.l(v))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,I=[],A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,T=this.i(A)&65535,pt=w.i(b)>>>16,Ct=w.i(b)&65535;I[2*A+2*b]+=T*Ct,j(I,2*A+2*b),I[2*A+2*b+1]+=S*Ct,j(I,2*A+2*b+1),I[2*A+2*b+1]+=T*pt,j(I,2*A+2*b+1),I[2*A+2*b+2]+=S*pt,j(I,2*A+2*b+2)}for(A=0;A<_;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=_;A<2*_;A++)I[A]=0;return new a(I,0)};function j(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function H(w,_){this.g=w,this.h=_}function W(w,_){if(k(_))throw Error("division by zero");if(k(w))return new H(p,p);if(V(w))return _=W(O(w),_),new H(O(_.g),O(_.h));if(V(_))return _=W(w,O(_)),new H(O(_.g),_.h);if(30<w.g.length){if(V(w)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=_;0>=A.l(w);)I=de(I),A=de(A);var b=pe(I,1),S=pe(A,1);for(A=pe(A,2),I=pe(I,2);!k(A);){var T=S.add(A);0>=T.l(w)&&(b=b.add(I),S=T),A=pe(A,1),I=pe(I,1)}return _=q(w,b.j(_)),new H(b,_)}for(b=p;0<=w.l(_);){for(I=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),T=S.j(_);V(T)||0<T.l(w);)I-=A,S=h(I),T=S.j(_);k(S)&&(S=m),b=b.add(S),w=q(w,T)}return new H(b,w)}t.A=function(w){return W(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)&w.i(A);return new a(I,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)|w.i(A);return new a(I,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)^w.i(A);return new a(I,this.h^w.h)};function de(w){for(var _=w.g.length+1,I=[],A=0;A<_;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(I,w.h)}function pe(w,_){var I=_>>5;_%=32;for(var A=w.g.length-I,b=[],S=0;S<A;S++)b[S]=0<_?w.i(S+I)>>>_|w.i(S+I+1)<<32-_:w.i(S+I);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ag=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Wn=a}).apply(typeof yf<"u"?yf:typeof self<"u"?self:typeof window<"u"?window:{});var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bg,xs,Rg,ho,Pl,Sg,Cg,Pg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yi=="object"&&Yi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break e;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,P){for(var z=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)z[ke-2]=arguments[ke];return u.prototype[C].apply(g,z)}}function V(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function O(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,P=g.length||0;o.length=C+P;for(let z=0;z<P;z++)o[C+z]=g[z]}else o.push(g)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var de=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function pe(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<I.length;P++)f=I[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function T(){var o=It;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class pt{constructor(){this.h=this.g=null}add(u,f){const g=Ct.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ct=new q(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,It=new pt,Lt=()=>{const o=l.Promise.resolve(void 0);ve=()=>{o.then(Pt)}};var Pt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ct;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Cn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function zt(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(de){e:{try{W(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:vt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&zt.aa.h.call(this)}}k(zt,Me);var vt={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ie(o){this.src=o,this.g={},this.h=0}Ie.prototype.add=function(o,u,f,g,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var z=E(o,u,g,C);return-1<z?(u=o[z],f||(u.fa=!1)):(u=new Q(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function y(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(Z(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function E(o,u,f,g){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),N={};function F(o,u,f,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)F(o,u[P],f,g,C);return null}return f=oe(f),o&&o[D]?o.K(u,f,h(g)?!!g.capture:!1,C):x(o,u,f,!1,g,C)}function x(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,ke=J(o);if(ke||(o[R]=ke=new Ie(o)),f=ke.add(u,f,g,z,P),f.proxy)return f;if(g=G(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Cn||(C=z),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(U(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function o(f){return u.call(o.src,o.listener,f)}const u=te;return o}function K(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(o,u[P],f,g,C);else g=h(g)?!!g.capture:!!g,f=oe(f),o&&o[D]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=E(P,f,g,C),-1<f&&(Z(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=J(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,f,g,C)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[D])y(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(U(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=J(u))?(y(f,o),f.h==0&&(f.src=null,u[R]=null)):Z(o)}}}function U(o){return o in N?N[o]:N[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new zt(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&$(o),o=f.call(g,u)}return o}function J(o){return o=o[R],o instanceof Ie?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function ne(){xe.call(this),this.i=new Ie(this),this.M=this,this.F=null}k(ne,xe),ne.prototype[D]=!0,ne.prototype.removeEventListener=function(o,u,f,g){K(this,o,u,f,g)};function fe(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var C=u;u=new Me(g,o),A(u,C)}if(C=!0,f)for(var P=f.length-1;0<=P;P--){var z=u.g=f[P];C=Ee(z,g,!0,u)&&C}if(z=u.g=o,C=Ee(z,g,!0,u)&&C,C=Ee(z,g,!1,u)&&C,f)for(P=0;P<f.length;P++)z=u.g=f[P],C=Ee(z,g,!1,u)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Z(f[g]);delete o.g[u],o.h--}}this.F=null},ne.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ne.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ee(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var z=u[P];if(z&&!z.da&&z.capture==f){var ke=z.listener,Ye=z.ha||z.src;z.fa&&y(o.i,z),C=ke.call(Ye,g)!==!1&&C}}return C&&!g.defaultPrevented}function tt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Qe(o){o.g=tt(()=>{o.g=null,o.i&&(o.i=!1,Qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class kt extends xe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){xe.call(this),this.h=o,this.g={}}k(nt,xe);var Pn=[];function ms(o){pe(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ms(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Je=l.JSON.stringify,Vt=l.JSON.parse,Vi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ta(){}Ta.prototype.h=null;function nu(o){return o.h||(o.h=o.i())}function ru(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ia(){Me.call(this,"d")}k(Ia,Me);function wa(){Me.call(this,"c")}k(wa,Me);var or={},su=null;function Di(){return su=su||new ne}or.La="serverreachability";function iu(o){Me.call(this,or.La,o)}k(iu,Me);function ys(o){const u=Di();fe(u,new iu(u))}or.STAT_EVENT="statevent";function ou(o,u){Me.call(this,or.STAT_EVENT,o),this.stat=u}k(ou,Me);function gt(o){const u=Di();fe(u,new ou(u,o))}or.Ma="timingevent";function au(o,u){Me.call(this,or.Ma,o),this.size=u}k(au,Me);function vs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function t_(o,u,f,g,C,P){o.info(function(){if(o.g)if(P)for(var z="",ke=P.split("&"),Ye=0;Ye<ke.length;Ye++){var we=ke[Ye].split("=");if(1<we.length){var rt=we[0];we=we[1];var st=rt.split("_");z=2<=st.length&&st[1]=="type"?z+(rt+"="+we+"&"):z+(rt+"=redacted&")}}else z=null;else z=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+z})}function n_(o,u,f,g,C,P,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+z})}function Vr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+s_(o,f)+(g?" "+g:"")})}function r_(o,u){o.info(function(){return"TIMEOUT: "+u})}Es.prototype.info=function(){};function s_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return Je(f)}catch{return u}}var Ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},lu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Aa;function Oi(){}k(Oi,Ta),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},Aa=new Oi;function kn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cu}function cu(){this.i=null,this.g="",this.h=!1}var uu={},ba={};function Ra(o,u,f){o.L=1,o.v=Fi(ln(u)),o.m=f,o.P=!0,hu(o,null)}function hu(o,u){o.F=Date.now(),xi(o),o.A=ln(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),bu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new cu,o.g=Hu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new kt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Pn[0]=C.toString()),C=Pn);for(var P=0;P<C.length;P++){var z=F(f,C[P],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ys(),t_(o.i,o.u,o.A,o.l,o.R,o.m)}kn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)e:{const st=cn(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Du(this.g)))){this.J||st!=4||u==7||(u==8||0>=Or?ys(3):ys(2)),Sa(this);var f=this.g.Z();this.X=f;t:if(fu(this)){var g=Du(this.g);o="";var C=g.length,P=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),Ts(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,n_(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ye=this.g;if((ke=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ke)){var we=ke;break t}}we=null}if(f=we)Vr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ca(this,f);else{this.o=!1,this.s=3,gt(12),ar(this),Ts(this);break e}}if(this.P){f=!0;let Ft;for(;!this.J&&this.C<z.length;)if(Ft=i_(this,z),Ft==ba){st==4&&(this.s=4,gt(14),f=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==uu){this.s=4,gt(15),Vr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Vr(this.i,this.l,Ft,null),Ca(this,Ft);if(fu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||z.length!=0||this.h.h||(this.s=1,gt(16),f=!1),this.o=this.o&&f,!f)Vr(this.i,this.l,z,"[Invalid Chunked Response]"),ar(this),Ts(this);else if(0<z.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Oa(rt),rt.M=!0,gt(11))}}else Vr(this.i,this.l,z,null),Ca(this,z);st==4&&ar(this),this.o&&!this.J&&(st==4?Uu(this.j,this):(this.o=!1,xi(this)))}else I_(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ar(this),Ts(this)}}}catch{}finally{}};function fu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function i_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ba:(f=Number(u.substring(f,g)),isNaN(f)?uu:(g+=1,g+f>u.length?ba:(u=u.slice(g,g+f),o.C=g+f,u)))}kn.prototype.cancel=function(){this.J=!0,ar(this)};function xi(o){o.S=Date.now()+o.I,du(o,o.I)}function du(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=vs(m(o.ba,o),u)}function Sa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}kn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(r_(this.i,this.A),this.L!=2&&(ys(),gt(17)),ar(this),this.s=2,Ts(this)):du(this,this.S-o)};function Ts(o){o.j.G==0||o.J||Uu(o.j,o)}function ar(o){Sa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ms(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ca(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Pa(f.h,o))){if(!o.K&&Pa(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)qi(f),$i(f);else break e;Na(f),gt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=vs(m(f.Za,f),6e3));if(1>=mu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else cr(f,11)}else if((o.K||f.g==o)&&qi(f),!j(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let we=C[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const rt=we[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const st=we[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const Or=we[5];Or!=null&&typeof Or=="number"&&0<Or&&(g=1.5*Or,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ft=o.g;if(Ft){const zi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var P=g.h;P.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ka(P,P.h),P.h=null))}if(g.D){const xa=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;xa&&(g.ya=xa,Ne(g.I,g.D,xa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=o;if(g.qa=$u(g,g.J?g.ia:null,g.W),z.K){_u(g.h,z);var ke=z,Ye=g.L;Ye&&(ke.I=Ye),ke.B&&(Sa(ke),xi(ke)),g.g=z}else Lu(g);0<f.i.length&&Hi(f)}else we[0]!="stop"&&we[0]!="close"||cr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?cr(f,7):Da(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}ys(4)}catch{}}var o_=class{constructor(o,u){this.g=o,this.map=u}};function pu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function mu(o){return o.h?1:o.g?o.g.size:0}function Pa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ka(o,u){o.g?o.g.add(u):o.h=u}function _u(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}pu.prototype.cancel=function(){if(this.i=yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function yu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return V(o.i)}function a_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function l_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function vu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=l_(o),g=a_(o),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],f&&f[P],o)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var P=o[f].substring(0,g);C=o[f].substring(g+1)}else P=o[f];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function lr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof lr){this.h=o.h,Mi(this,o.j),this.o=o.o,this.g=o.g,Li(this,o.s),this.l=o.l;var u=o.i,f=new As;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Tu(this,f),this.m=o.m}else o&&(u=String(o).match(Eu))?(this.h=!1,Mi(this,u[1]||"",!0),this.o=Is(u[2]||""),this.g=Is(u[3]||"",!0),Li(this,u[4]),this.l=Is(u[5]||"",!0),Tu(this,u[6]||"",!0),this.m=Is(u[7]||"")):(this.h=!1,this.i=new As(null,this.h))}lr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ws(u,Iu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ws(u,Iu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ws(f,f.charAt(0)=="/"?f_:h_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ws(f,p_)),o.join("")};function ln(o){return new lr(o)}function Mi(o,u,f){o.j=f?Is(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Li(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Tu(o,u,f){u instanceof As?(o.i=u,g_(o.i,o.h)):(f||(u=ws(u,d_)),o.i=new As(u,o.h))}function Ne(o,u,f){o.i.set(u,f)}function Fi(o){return Ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Is(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ws(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,u_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function u_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Iu=/[#\/\?@]/g,h_=/[#\?:]/g,f_=/[#\?]/g,d_=/[#\?@]/g,p_=/#/g;function As(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Vn(o){o.g||(o.g=new Map,o.h=0,o.i&&c_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=As.prototype,t.add=function(o,u){Vn(this),this.i=null,o=Dr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function wu(o,u){Vn(o),u=Dr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Au(o,u){return Vn(o),u=Dr(o,u),o.g.has(u)}t.forEach=function(o,u){Vn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},t.na=function(){Vn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let P=0;P<C.length;P++)f.push(u[g])}return f},t.V=function(o){Vn(this);let u=[];if(typeof o=="string")Au(this,o)&&(u=u.concat(this.g.get(Dr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Vn(this),this.i=null,o=Dr(this,o),Au(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function bu(o,u,f){wu(o,u),0<f.length&&(o.i=null,o.g.set(Dr(o,u),V(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=P;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),o.push(C)}}return this.i=o.join("&")};function Dr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function g_(o,u){u&&!o.j&&(Vn(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(wu(this,g),bu(this,C,f))},o)),o.j=u}function m_(o,u){const f=new Es;if(l.Image){const g=new Image;g.onload=v(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=v(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=v(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(Dn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function __(o,u){const f=new Es,g=new AbortController,C=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function y_(){this.g=new Vi}function v_(o,u,f){const g=f||"";try{vu(o,function(C,P){let z=C;h(C)&&(z=Je(C)),u.push(g+P+"="+encodeURIComponent(z))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Ui(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ui,Ta),Ui.prototype.g=function(){return new Bi(this.l,this.j)},Ui.prototype.i=function(o){return function(){return o}}({});function Bi(o,u){ne.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Bi,ne),t=Bi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Rs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ru(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ru(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?bs(this):Rs(this),this.readyState==3&&Ru(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,bs(this))},t.Qa=function(o){this.g&&(this.response=o,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Rs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Su(o){let u="";return pe(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Va(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Su(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ne(o,u,f))}function Ue(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ue,ne);var E_=/^https?$/i,T_=["POST","PUT"];t=Ue.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Aa.g(),this.v=this.o?nu(this.o):nu(Aa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Cu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(T_,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,z]of f)this.g.setRequestHeader(P,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Cu(this,P)}};function Cu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Pu(o),ji(o)}function Pu(o){o.A||(o.A=!0,fe(o,"complete"),fe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,fe(this,"complete"),fe(this,"abort"),ji(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ku(this):this.bb())},t.bb=function(){ku(this)};function ku(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)tt(o.Ea,0,o);else if(fe(o,"readystatechange"),cn(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var C=String(o.D).match(Eu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!E_.test(C?C.toLowerCase():"")}f=g}if(f)fe(o,"complete"),fe(o,"success");else{o.m=6;try{var P=2<cn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Pu(o)}}finally{ji(o)}}}}function ji(o,u){if(o.g){Vu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||fe(o,"ready");try{f.onreadystatechange=g}catch{}}}function Vu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Vt(u)}};function Du(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function I_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Nu(o){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,o),this.cb=Ss("retryDelaySeedMs",1e4,o),this.Wa=Ss("forwardChannelMaxRetries",2,o),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new pu(o&&o.concurrentRequestLimit),this.Da=new y_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){gt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=$u(this,null,this.W),Hi(this)};function Da(o){if(Ou(o),o.G==3){var u=o.U++,f=ln(o.I);if(Ne(f,"SID",o.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),Cs(o,f),u=new kn(o,o.j,u),u.L=2,u.v=Fi(ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Hu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}ju(o)}function $i(o){o.g&&(Oa(o),o.g.cancel(),o.g=null)}function Ou(o){$i(o),o.u&&(l.clearTimeout(o.u),o.u=null),qi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Hi(o){if(!gu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ve||Lt(),ge||(ve(),ge=!0),It.add(u,o),o.B=0}}function w_(o,u){return mu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=vs(m(o.Ga,o,u),Bu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new kn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Mu(this,C,u),f=ln(this.I),Ne(f,"RID",o),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),Cs(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Su(P)))+"&"+u:this.m&&Va(f,this.m,P)),ka(this.h,C),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),C.T=!0,Ra(C,f,null)):Ra(C,f,u),this.G=2}}else this.G==3&&(o?xu(this,o):this.i.length==0||gu(this.h)||xu(this))};function xu(o,u){var f;u?f=u.l:f=o.U++;const g=ln(o.I);Ne(g,"SID",o.K),Ne(g,"RID",f),Ne(g,"AID",o.T),Cs(o,g),o.m&&o.o&&Va(g,o.m,o.o),f=new kn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Mu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ka(o.h,f),Ra(f,g,u)}function Cs(o,u){o.H&&pe(o.H,function(f,g){Ne(u,g,f)}),o.l&&vu({},function(f,g){Ne(u,g,f)})}function Mu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const z=["count="+f];P==-1?0<f?(P=C[0].g,z.push("ofs="+P)):P=0:z.push("ofs="+P);let ke=!0;for(let Ye=0;Ye<f;Ye++){let we=C[Ye].g;const rt=C[Ye].map;if(we-=P,0>we)P=Math.max(0,C[Ye].g-100),ke=!1;else try{v_(rt,z,"req"+we+"_")}catch{g&&g(rt)}}if(ke){g=z.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Lu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ve||Lt(),ge||(ve(),ge=!0),It.add(u,o),o.v=0}}function Na(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=vs(m(o.Fa,o),Bu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=vs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),$i(this),Fu(this))};function Oa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Fu(o){o.g=new kn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ln(o.qa);Ne(u,"RID","rpc"),Ne(u,"SID",o.K),Ne(u,"AID",o.T),Ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ne(u,"TO",o.ja),Ne(u,"TYPE","xmlhttp"),Cs(o,u),o.m&&o.o&&Va(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Fi(ln(u)),f.m=null,f.P=!0,hu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,$i(this),Na(this),gt(19))};function qi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Uu(o,u){var f=null;if(o.g==u){qi(o),Oa(o),o.g=null;var g=2}else if(Pa(o.h,u))f=u.D,_u(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Di(),fe(g,new au(g,f)),Hi(o)}else Lu(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&w_(o,u)||g==2&&Na(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:cr(o,5);break;case 4:cr(o,10);break;case 3:cr(o,6);break;default:cr(o,2)}}}function Bu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function cr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mi(g,"https"),Fi(g),C?m_(g.toString(),f):__(g.toString(),f)}else gt(2);o.G=0,o.l&&o.l.sa(u),ju(o),Ou(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function ju(o){if(o.G=0,o.ka=[],o.l){const u=yu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function $u(o,u,f){var g=f instanceof lr?ln(f):new lr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Li(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new lr(null);g&&Mi(P,g),u&&(P.g=u),C&&Li(P,C),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Ne(g,f,u),Ne(g,"VER",o.la),Cs(o,g),g}function Hu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ue(new Ui({eb:f})):new Ue(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}t=qu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){ne.call(this),this.g=new Nu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}k(wt,ne),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Da(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Je(o),o=f);u.i.push(new o_(u.Ya++,o)),u.G==3&&Hi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,wt.aa.N.call(this)};function Ku(o){Ia.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Ku,Ia);function zu(){wa.call(this),this.status=1}k(zu,wa);function Nr(o){this.g=o}k(Nr,qu),Nr.prototype.ua=function(){fe(this.g,"a")},Nr.prototype.ta=function(o){fe(this.g,new Ku(o))},Nr.prototype.sa=function(o){fe(this.g,new zu)},Nr.prototype.ra=function(){fe(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Pg=function(){return new Ki},Cg=function(){return Di()},Sg=or,Pl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,ho=Ni,lu.COMPLETE="complete",Rg=lu,ru.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",ne.prototype.listen=ne.prototype.K,xs=ru,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,bg=Ue}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});const vf="@firebase/firestore",Ef="4.7.9";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let fs="11.4.0";/**
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
 */const wr=new fc("@firebase/firestore");function Fr(){return wr.logLevel}function X(t,...e){if(wr.logLevel<=me.DEBUG){const n=e.map(Ac);wr.debug(`Firestore (${fs}): ${t}`,...n)}}function An(t,...e){if(wr.logLevel<=me.ERROR){const n=e.map(Ac);wr.error(`Firestore (${fs}): ${t}`,...n)}}function rs(t,...e){if(wr.logLevel<=me.WARN){const n=e.map(Ac);wr.warn(`Firestore (${fs}): ${t}`,...n)}}function Ac(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Se(t,e){t||ae()}function ue(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class YA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new kg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ot(e)}}class ZA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tb{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Nt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Tf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new Tf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Vg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const If=-62135596800,wf=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*wf);return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<If)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wf}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-If;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ke(0,0))}static max(){return new ce(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Af="__name__";class Jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Jt.isNumericId(e),s=Jt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jt.extractNumericId(e).compare(Jt.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wn.fromString(e.substring(4,e.length-2))}}class Be extends Jt{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Jt{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Af}static keyField(){return new Ze([Af])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new re(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Be.fromString(e))}static fromName(e){return new se(Be.fromString(e).popFirst(5))}static empty(){return new se(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Be(e.slice()))}}/**
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
 */const ci=-1;function sb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Jn(s,se.empty(),e)}function ib(t){return new Jn(t.readTime,t.key,ci)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ce.min(),se.empty(),ci)}static max(){return new Jn(ce.max(),se.empty(),ci)}}function ob(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ds(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==ab)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function cb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ps(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ca{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ca.ae=-1;/**
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
 */const bc=-1;function ua(t){return t==null}function Oo(t){return t===0&&1/t==-1/0}function ub(t){return typeof t=="number"&&Number.isInteger(t)&&!Oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Dg="";function hb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bf(e)),e=fb(t.get(n),e);return bf(e)}function fb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Dg:n+="";break;default:n+=i}}return n}function bf(t){return t+Dg+""}/**
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
 */function Rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sf(this.data.getIterator())}getIteratorFrom(e){return new Sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new ze(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Og("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const db=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=db.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xn(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */const xg="server_timestamp",Mg="__type__",Lg="__previous_value__",Fg="__local_write_time__";function Rc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mg])===null||n===void 0?void 0:n.stringValue)===xg}function ha(t){const e=t.mapValue.fields[Lg];return Rc(e)?ha(e):e}function ui(t){const e=Yn(t.mapValue.fields[Fg].timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class pb{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const xo="(default)";class hi{constructor(e,n){this.projectId=e,this.database=n||xo}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database===xo}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ug="__type__",gb="__max__",Zi={mapValue:{}},Bg="__vector__",Mo="value";function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rc(t)?4:_b(t)?9007199254740991:mb(t)?10:11:ae()}function on(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Yn(s.timestampValue),l=Yn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xn(s.bytesValue).isEqual(Xn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=je(s.doubleValue),l=je(i.doubleValue);return a===l?Oo(a)===Oo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Rf(a)!==Rf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!on(a[c],l[c])))return!1;return!0}(t,e);default:return ae()}}function fi(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Zn(t),r=Zn(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=je(i.integerValue||i.doubleValue),c=je(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Cf(t.timestampValue,e.timestampValue);case 4:return Cf(ui(t),ui(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Xn(i),c=Xn(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ye(l[h],c[h]);if(d!==0)return d}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ye(je(i.latitude),je(a.latitude));return l!==0?l:ye(je(i.longitude),je(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},v=(l=p[Mo])===null||l===void 0?void 0:l.arrayValue,k=(c=m[Mo])===null||c===void 0?void 0:c.arrayValue,V=ye(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:Pf(v,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Zi.mapValue&&a===Zi.mapValue)return 0;if(i===Zi.mapValue)return 1;if(a===Zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=ye(c[p],d[p]);if(m!==0)return m;const v=is(l[c[p]],h[d[p]]);if(v!==0)return v}return ye(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Cf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Yn(t),r=Yn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Pf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function os(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${kl(n.fields[a])}`;return s+"}"}(t.mapValue):ae()}function fo(t){switch(Zn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ha(t);return e?16+fo(e):16;case 5:return 2*t.stringValue.length;case 6:return Xn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Sr(r.fields,(i,a)=>{s+=i.length+fo(a)}),s}(t.mapValue);default:throw ae()}}function Vl(t){return!!t&&"integerValue"in t}function Sc(t){return!!t&&"arrayValue"in t}function kf(t){return!!t&&"nullValue"in t}function Vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function po(t){return!!t&&"mapValue"in t}function mb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ug])===null||n===void 0?void 0:n.stringValue)===Bg}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gb}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Gs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Gs(this.value))}}function jg(t){const e=[];return Sr(t.fields,(n,r)=>{const s=new Ze([n]);if(po(r)){const i=jg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Bt(e)}/**
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
 */class lt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,ce.min(),ce.min(),ce.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,ce.min(),ce.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ce.min(),ce.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lo{constructor(e,n){this.position=e,this.inclusive=n}}function Df(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),n.key):r=is(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $g{}class qe extends $g{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Eb(e,n,r):n==="array-contains"?new wb(e,r):n==="in"?new Ab(e,r):n==="not-in"?new bb(e,r):n==="array-contains-any"?new Rb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Tb(e,r):new Ib(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends $g{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new an(e,n)}matches(e){return Hg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Hg(t){return t.op==="and"}function qg(t){return vb(t)&&Hg(t)}function vb(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Dl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+os(t.value);if(qg(t))return t.filters.map(e=>Dl(e)).join(",");{const e=t.filters.map(n=>Dl(n)).join(",");return`${t.op}(${e})`}}function Kg(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Kg(a,s.filters[l]),!0):!1}(t,e):void ae()}function zg(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(zg).join(" ,")+"}"}(t):"Filter"}class Eb extends qe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Tb extends qe{constructor(e,n){super(e,"in",n),this.keys=Wg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ib extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Wg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class wb extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sc(n)&&fi(n.arrayValue,this.value)}}class Ab extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class bb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class Rb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
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
 */class Sb{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Of(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Sb(t,e,n,r,s,i,a)}function Cc(t){const e=ue(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.le=n}return e.le}function Pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nf(t.startAt,e.startAt)&&Nf(t.endAt,e.endAt)}function Nl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fa{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Cb(t,e,n,r,s,i,a,l){return new fa(t,e,n,r,s,i,a,l)}function kc(t){return new fa(t)}function xf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pb(t){return t.collectionGroup!==null}function Qs(t){const e=ue(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ze(Ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Fo(i,r))}),n.has(Ze.keyField().canonicalString())||e.he.push(new Fo(Ze.keyField(),r))}return e.he}function tn(t){const e=ue(t);return e.Pe||(e.Pe=kb(e,Qs(t))),e.Pe}function kb(t,e){if(t.limitType==="F")return Of(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const n=t.endAt?new Lo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lo(t.startAt.position,t.startAt.inclusive):null;return Of(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ol(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return Pc(tn(t),tn(e))&&t.limitType===e.limitType}function Gg(t){return`${Cc(tn(t))}|lt:${t.limitType}`}function Ur(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>zg(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Df(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Qs(r),s)||r.endAt&&!function(a,l,c){const h=Df(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Qs(r),s))}(t,e)}function Vb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qg(t){return(e,n)=>{let r=!1;for(const s of Qs(t)){const i=Db(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Db(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?is(c,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
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
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ng(this.inner)}size(){return this.innerSize}}/**
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
 */const Nb=new Fe(se.comparator);function bn(){return Nb}const Jg=new Fe(se.comparator);function Ms(...t){let e=Jg;for(const n of t)e=e.insert(n.key,n);return e}function Yg(t){let e=Jg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return Js()}function Xg(){return Js()}function Js(){return new Cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ob=new Fe(se.comparator),xb=new ze(se.comparator);function _e(...t){let e=xb;for(const n of t)e=e.add(n);return e}const Mb=new ze(ye);function Lb(){return Mb}/**
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
 */function Vc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function Zg(t){return{integerValue:""+t}}function Fb(t,e){return ub(e)?Zg(e):Vc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ga{constructor(){this._=void 0}}function Ub(t,e,n){return t instanceof Uo?function(s,i){const a={fields:{[Mg]:{stringValue:xg},[Fg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rc(i)&&(i=ha(i)),i&&(a.fields[Lg]=i),{mapValue:a}}(n,e):t instanceof di?tm(t,e):t instanceof pi?nm(t,e):function(s,i){const a=em(s,i),l=Mf(a)+Mf(s.Ie);return Vl(a)&&Vl(s.Ie)?Zg(l):Vc(s.serializer,l)}(t,e)}function Bb(t,e,n){return t instanceof di?tm(t,e):t instanceof pi?nm(t,e):n}function em(t,e){return t instanceof Bo?function(r){return Vl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Uo extends ga{}class di extends ga{constructor(e){super(),this.elements=e}}function tm(t,e){const n=rm(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class pi extends ga{constructor(e){super(),this.elements=e}}function nm(t,e){let n=rm(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class Bo extends ga{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Mf(t){return je(t.integerValue||t.doubleValue)}function rm(t){return Sc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof di&&s instanceof di||r instanceof pi&&s instanceof pi?ss(r.elements,s.elements,on):r instanceof Bo&&s instanceof Bo?on(r.Ie,s.Ie):r instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class $b{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function sm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,Tn.none()):new Si(t.key,t.data,Tn.none());{const n=t.data,r=Ot.empty();let s=new ze(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Pr(t.key,r,new Bt(s.toArray()),Tn.none())}}function Hb(t,e,n){t instanceof Si?function(s,i,a){const l=s.value.clone(),c=Ff(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(s,i,a){if(!go(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ff(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(im(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof Si?function(i,a,l,c){if(!go(i.precondition,a))return l;const h=i.value.clone(),d=Uf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,a,l,c){if(!go(i.precondition,a))return l;const h=Uf(i.fieldTransforms,c,a),d=a.data;return d.setAll(im(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return go(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function qb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=em(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Lf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,a)=>jb(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Si extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ff(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Bb(a,l,n[s]))}return r}function Uf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Ub(i,a,e))}return r}class om extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kb extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Hb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=sm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>Lf(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>Lf(n,r))}}class Dc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return Ob}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Dc(e,n,r,s)}}/**
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
 */class Wb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Te;function Qb(t){switch(t){case B.OK:return ae();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ae()}}function am(t){if(t===void 0)return An("GRPC error has no .code"),B.UNKNOWN;switch(t){case He.OK:return B.OK;case He.CANCELLED:return B.CANCELLED;case He.UNKNOWN:return B.UNKNOWN;case He.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case He.INTERNAL:return B.INTERNAL;case He.UNAVAILABLE:return B.UNAVAILABLE;case He.UNAUTHENTICATED:return B.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case He.NOT_FOUND:return B.NOT_FOUND;case He.ALREADY_EXISTS:return B.ALREADY_EXISTS;case He.PERMISSION_DENIED:return B.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case He.ABORTED:return B.ABORTED;case He.OUT_OF_RANGE:return B.OUT_OF_RANGE;case He.UNIMPLEMENTED:return B.UNIMPLEMENTED;case He.DATA_LOSS:return B.DATA_LOSS;default:return ae()}}(Te=He||(He={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jb(){return new TextEncoder}/**
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
 */const Yb=new Wn([4294967295,4294967295],0);function Bf(t){const e=Jb().encode(t),n=new Ag;return n.update(e),new Uint8Array(n.digest())}function jf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wn([n,r],0),new Wn([s,i],0)]}class Nc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ls(`Invalid padding: ${n}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Wn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Wn.fromNumber(r)));return s.compare(Yb)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Bf(e),[r,s]=jf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Nc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const n=Bf(e),[r,s]=jf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(ce.min(),s,new Fe(ye),bn(),_e())}}class Ci{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ci(r,n,_e(),_e(),_e())}}/**
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
 */class mo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class lm{constructor(e,n){this.targetId=e,this.ge=n}}class cm{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $f{constructor(){this.pe=0,this.ye=Hf(),this.we=et.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=_e(),n=_e(),r=_e();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Ci(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Hf()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Se(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class Xb{constructor(e){this.ke=e,this.qe=new Map,this.Qe=bn(),this.$e=eo(),this.Ke=eo(),this.Ue=new Fe(ye)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Nl(i))if(r===0){const a=new se(i.path);this.ze(n,a,lt.newNoDocument(a,ce.min()))}else Se(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Xn(r).toUint8Array()}catch(c){if(c instanceof Og)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Nc(a,s,i)}catch(c){return rs(c instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&Nl(l.target)){const c=new se(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,lt.newNoDocument(c,e))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=_e();this.Ke.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new _a(e,n,this.Ue,this.Qe,r);return this.Qe=bn(),this.$e=eo(),this.Ke=eo(),this.Ue=new Fe(ye),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new $f,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new ze(ye),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ze(ye),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new $f),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function eo(){return new Fe(se.comparator)}function Hf(){return new Fe(se.comparator)}const Zb={asc:"ASCENDING",desc:"DESCENDING"},eR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tR={and:"AND",or:"OR"};class nR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xl(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rR(t,e){return jo(t,e.toTimestamp())}function nn(t){return Se(!!t),ce.fromTimestamp(function(n){const r=Yn(n);return new Ke(r.seconds,r.nanos)}(t))}function Oc(t,e){return Ml(t,e).canonicalString()}function Ml(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hm(t){const e=Be.fromString(t);return Se(mm(e)),e}function Ll(t,e){return Oc(t.databaseId,e.path)}function nl(t,e){const n=hm(e);if(n.get(1)!==t.databaseId.projectId)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(dm(n))}function fm(t,e){return Oc(t.databaseId,e)}function sR(t){const e=hm(t);return e.length===4?Be.emptyPath():dm(e)}function Fl(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dm(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qf(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function iR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Se(d===void 0||typeof d=="string"),et.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?B.UNKNOWN:am(h.code);return new re(d,h.message||"")}(a);n=new cm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nl(t,r.document.name),i=nn(r.document.updateTime),a=r.document.createTime?nn(r.document.createTime):ce.min(),l=new Ot({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new mo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nl(t,r.document),i=r.readTime?nn(r.readTime):ce.min(),a=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new mo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nl(t,r.document),i=r.removedTargetIds||[];n=new mo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Gb(s,i),l=r.targetId;n=new lm(l,a)}}return n}function oR(t,e){let n;if(e instanceof Si)n={update:qf(t,e.key,e.value)};else if(e instanceof om)n={delete:Ll(t,e.key)};else if(e instanceof Pr)n={update:qf(t,e.key,e.data),updateMask:gR(e.fieldMask)};else{if(!(e instanceof Kb))return ae();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Uo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof di)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bo)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function aR(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?nn(s.updateTime):nn(i);return a.isEqual(ce.min())&&(a=nn(i)),new $b(a,s.transformResults||[])}(n,e))):[]}function lR(t,e){return{documents:[fm(t,e.path)]}}function cR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fm(t,s);const i=function(h){if(h.length!==0)return gm(an.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Br(m.field),direction:fR(m.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=xl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function uR(t){let e=sR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=pm(p);return m instanceof an&&qg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new Fo(jr(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ua(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Lo(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new Lo(v,m)}(n.endAt)),Cb(e,s,a,i,l,"F",c,h)}function hR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function fR(t){return Zb[t]}function dR(t){return eR[t]}function pR(t){return tR[t]}function Br(t){return{fieldPath:t.canonicalString()}}function jr(t){return Ze.fromServerFormat(t.fieldPath)}function gm(t){return t instanceof qe?function(n){if(n.op==="=="){if(Vf(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NAN"}};if(kf(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vf(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NAN"}};if(kf(n.value))return{unaryFilter:{field:Br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(n.field),op:dR(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>gm(s));return r.length===1?r[0]:{compositeFilter:{op:pR(n.op),filters:r}}}(t):ae()}function gR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,s,i=ce.min(),a=ce.min(),l=et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mR{constructor(e){this.Tt=e}}function _R(t){const e=uR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ol(e,e.limit,"L"):e}/**
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
 */class yR{constructor(){this.Tn=new vR}addToCollectionParentIndex(e,n){return this.Tn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Jn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class vR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Kf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_m=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(_m,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class as{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new as(0)}static Un(){return new as(-1)}}/**
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
 */const zf="LruGarbageCollector",ER=1048576;function Wf([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class TR{constructor(e){this.Hn=e,this.buffer=new ze(Wf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Wf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(zf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ps(n)?X(zf,"Ignoring IndexedDB error during garbage collection: ",n):await ds(n)}await this.er(3e5)})}}class wR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ca.ae);const r=new TR(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Kf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kf):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Fr()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function AR(t,e){return new wR(t,e)}/**
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
 */class bR{constructor(){this.changes=new Cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class RR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ys(r.mutation,s,Bt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ms();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=bn();const a=Js(),l=function(){return Js()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Pr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ys(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):a.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new RR(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Js();let s=new Fe((a,l)=>a-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Bt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Xg();d.forEach(m=>{if(!i.has(m)){const v=sm(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Pb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(gr());let l=ci,c=i;return a.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_e())).next(d=>({batchId:l,changes:Yg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ms();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new fa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,lt.newInvalidDocument(d)))});let l=Ms();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Ys(d.mutation,h,Bt.empty(),Ke.now()),pa(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class CR{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return M.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:_R(s.bundledQuery),readTime:nn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class PR{constructor(){this.overlays=new Fe(se.comparator),this.Rr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,a=new se(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Wb(n,r));let i=this.Rr.get(n);i===void 0&&(i=_e(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kR{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class xc{constructor(){this.Vr=new ze(Ge.mr),this.gr=new ze(Ge.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ge(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new se(new Be([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new se(new Be([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=_e();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return se.comparator(e.key,n.key)||ye(e.Cr,n.Cr)}static pr(e,n){return ye(e.Cr,n.Cr)||se.comparator(e.key,n.key)}}/**
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
 */class VR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ze(Ge.mr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zb(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?bc:this.Fr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ye);return n.forEach(s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),M.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new se(i),0);let l=new ze(ye);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},a),M.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return M.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Mr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DR{constructor(e){this.kr=e,this.docs=function(){return new Fe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const a=n.path,l=new se(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ob(ib(d),r)<=0||(s.has(d.key)||pa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}qr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NR(this)}getSize(e){return M.resolve(this.size)}}class NR extends bR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class OR{constructor(e){this.persistence=e,this.Qr=new Cr(n=>Cc(n),Pc),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.$r=0,this.Kr=new xc,this.targetCount=0,this.Ur=as.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),M.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new as(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.zn(n),M.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Kr.containsKey(n))}}/**
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
 */class ym{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ca(0),this.zr=!1,this.zr=!0,this.jr=new kR,this.referenceDelegate=e(this),this.Hr=new OR(this),this.indexManager=new yR,this.remoteDocumentCache=function(s){return new DR(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new mR(n),this.Yr=new CR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new VR(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new xR(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return M.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class xR extends lb{constructor(e){super(),this.currentSequenceNumber=e}}class Mc{constructor(e){this.persistence=e,this.ti=new xc,this.ni=null}static ri(e){return new Mc(e)}get ii(){if(this.ni)return this.ni;throw ae()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),M.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ii,r=>{const s=se.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return M.or([()=>M.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class $o{constructor(e,n){this.persistence=e,this.oi=new Cr(r=>hb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=AR(this,n)}static ri(e,n){return new $o(e,n)}Zr(){}Xr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return M.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(l=>{l||(r++,i.removeEntry(a,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),M.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fo(e.data.value)),n}ar(e,n,r){return M.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lc(e,n.fromCache,r,s)}}/**
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
 */class MR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return yT()?8:cb(dt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new MR;return this._s(e,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,a,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Fr()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ur(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),M.resolve()):(Fr()<=me.DEBUG&&X("QueryEngine","Query:",Ur(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Fr()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ur(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):M.resolve())}rs(e,n){if(xf(n))return M.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ol(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=_e(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,a,c.readTime)?this.rs(e,Ol(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return xf(n)||s.isEqual(ce.min())?M.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?M.resolve(null):(Fr()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(n)),this.hs(e,a,n,sb(s,ci)).next(l=>l))})}cs(e,n){let r=new ze(Qg(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Fr()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ur(n)),this.ns.getDocumentsMatchingQuery(e,n,Jn.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Fc="LocalStore",FR=3e8;class UR{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Fe(ye),this.Is=new Cr(i=>Cc(i),Pc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function BR(t,e,n,r){return new UR(t,e,n,r)}async function vm(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=_e();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function jR(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let v=M.resolve();return m.forEach(k=>{v=v.next(()=>d.getEntry(c,k)).next(V=>{const O=h.docVersions.get(k);Se(O!==null),V.version.compareTo(O)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Em(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function $R(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(et.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(V,O,q){return V.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=FR?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,v,d)&&l.push(n.Hr.updateTargetData(i,v))});let c=bn(),h=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(HR(i,a,e.documentUpdates).next(d=>{c=d.Vs,h=d.fs})),!r.isEqual(ce.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ts=s,i))}function HR(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=bn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X(Fc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function qR(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KR(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new $n(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Ul(t,e,n){const r=ue(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ps(a))throw a;X(Fc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Gf(t,e,n){const r=ue(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=ue(c),m=p.Is.get(d);return m!==void 0?M.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,d)}(r,a,tn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,n?s:ce.min(),n?i:_e())).next(l=>(zR(r,Vb(e),l),{documents:l,gs:i})))}function zR(t,e,n){let r=t.Es.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Qf{constructor(){this.activeTargetIds=Lb()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WR{constructor(){this.ho=new Qf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GR{To(e){}shutdown(){}}/**
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
 */const Jf="ConnectivityMonitor";class Yf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Jf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Jf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let to=null;function Bl(){return to===null?to=function(){return 268435456+Math.round(2147483648*Math.random())}():to++,"0x"+to.toString(16)}/**
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
 */const rl="RestConnection",QR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const a=Bl(),l=this.So(e,n.toUriEncodedString());X(rl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(X(rl,`Received RPC '${e}' ${a}: `,h),h),h=>{throw rs(rl,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,a){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=QR[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class YR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const it="WebChannelConnection";class XR extends JR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Bl();return new Promise((a,l)=>{const c=new bg;c.setWithCredentials(!0),c.listenOnce(Rg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ho.NO_ERROR:const d=c.getResponseJson();X(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case ho.TIMEOUT:X(it,`RPC '${e}' ${i} timed out`),l(new re(B.DEADLINE_EXCEEDED,"Request time out"));break;case ho.HTTP_ERROR:const p=c.getStatus();if(X(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const k=function(O){const q=O.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(q)>=0?q:B.UNKNOWN}(v.status);l(new re(k,v.message))}else l(new re(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(B.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(it,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=Bl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pg(),l=Cg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(it,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,v=!1;const k=new YR({Fo:O=>{v?X(it,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(it,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Mo:()=>p.close()}),V=(O,q,j)=>{O.listen(q,H=>{try{j(H)}catch(W){setTimeout(()=>{throw W},0)}})};return V(p,xs.EventType.OPEN,()=>{v||(X(it,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),V(p,xs.EventType.CLOSE,()=>{v||(v=!0,X(it,`RPC '${e}' stream ${s} transport closed`),k.Ko())}),V(p,xs.EventType.ERROR,O=>{v||(v=!0,rs(it,`RPC '${e}' stream ${s} transport errored:`,O),k.Ko(new re(B.UNAVAILABLE,"The operation could not be completed")))}),V(p,xs.EventType.MESSAGE,O=>{var q;if(!v){const j=O.data[0];Se(!!j);const H=j,W=(H==null?void 0:H.error)||((q=H[0])===null||q===void 0?void 0:q.error);if(W){X(it,`RPC '${e}' stream ${s} received error:`,W);const de=W.status;let pe=function(I){const A=He[I];if(A!==void 0)return am(A)}(de),w=W.message;pe===void 0&&(pe=B.INTERNAL,w="Unknown error status: "+de+" with message "+W.message),v=!0,k.Ko(new re(pe,w)),p.close()}else X(it,`RPC '${e}' stream ${s} received:`,j),k.Uo(j)}}),V(l,Sg.STAT_EVENT,O=>{O.stat===Pl.PROXY?X(it,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Pl.NOPROXY&&X(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function sl(){return typeof document<"u"?document:null}/**
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
 */function ya(t){return new nR(t,!0)}/**
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
 */class Tm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Xf="PersistentStream";class Im{constructor(e,n,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tm(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new re(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZR extends Im{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=iR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?nn(a.readTime):ce.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Fl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Nl(c)?{documents:lR(i,c)}:{query:cR(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=um(i,a.resumeToken);const h=xl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){l.readTime=jo(i,a.snapshotVersion.toTimestamp());const h=xl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=hR(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Fl(this.serializer),n.removeTarget=e,this.I_(n)}}class e0 extends Im{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=aR(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Fl(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oR(this.serializer,r))};this.I_(n)}}/**
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
 */class t0{}class n0 extends t0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(e,Ml(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(B.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Ml(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new re(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class r0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(An(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ar="RemoteStore";class s0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{kr(this)&&(X(Ar,"Restarting streams for network reachability change."),await async function(c){const h=ue(c);h.W_.add(4),await Pi(h),h.j_.set("Unknown"),h.W_.delete(4),await va(h)}(this))})}),this.j_=new r0(r,s)}}async function va(t){if(kr(t))for(const e of t.G_)await e(!0)}async function Pi(t){for(const e of t.G_)await e(!1)}function wm(t,e){const n=ue(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),$c(n)?jc(n):gs(n).c_()&&Bc(n,e))}function Uc(t,e){const n=ue(t),r=gs(n);n.U_.delete(e),r.c_()&&Am(n,e),n.U_.size===0&&(r.c_()?r.P_():kr(n)&&n.j_.set("Unknown"))}function Bc(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).y_(e)}function Am(t,e){t.H_.Ne(e),gs(t).w_(e)}function jc(t){t.H_=new Xb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.j_.B_()}function $c(t){return kr(t)&&!gs(t).u_()&&t.U_.size>0}function kr(t){return ue(t).W_.size===0}function bm(t){t.H_=void 0}async function i0(t){t.j_.set("Online")}async function o0(t){t.U_.forEach((e,n)=>{Bc(t,e)})}async function a0(t,e){bm(t),$c(t)?(t.j_.q_(e),jc(t)):t.j_.set("Unknown")}async function l0(t,e,n){if(t.j_.set("Online"),e instanceof cm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.U_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.U_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(Ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(t,r)}else if(e instanceof mo?t.H_.We(e):e instanceof lm?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ce.min()))try{const r=await Em(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.U_.get(h);d&&i.U_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.U_.get(c);if(!d)return;i.U_.set(c,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Am(i,c);const p=new $n(d.target,c,h,d.sequenceNumber);Bc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Ar,"Failed to raise snapshot:",r),await Ho(t,r)}}async function Ho(t,e,n){if(!ps(e))throw e;t.W_.add(1),await Pi(t),t.j_.set("Offline"),n||(n=()=>Em(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Ar,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await va(t)})}function Rm(t,e){return e().catch(n=>Ho(t,n,e))}async function Ea(t){const e=ue(t),n=er(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:bc;for(;c0(e);)try{const s=await qR(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,u0(e,s)}catch(s){await Ho(e,s)}Sm(e)&&Cm(e)}function c0(t){return kr(t)&&t.K_.length<10}function u0(t,e){t.K_.push(e);const n=er(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Sm(t){return kr(t)&&!er(t).u_()&&t.K_.length>0}function Cm(t){er(t).start()}async function h0(t){er(t).C_()}async function f0(t){const e=er(t);for(const n of t.K_)e.S_(n.mutations)}async function d0(t,e,n){const r=t.K_.shift(),s=Dc.from(r,e,n);await Rm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function p0(t,e){e&&er(t).b_&&await async function(r,s){if(function(a){return Qb(a)&&a!==B.ABORTED}(s.code)){const i=r.K_.shift();er(r).h_(),await Rm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),Sm(t)&&Cm(t)}async function Zf(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(Ar,"RemoteStore received new credentials");const r=kr(n);n.W_.add(3),await Pi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await va(n)}async function g0(t,e){const n=ue(t);e?(n.W_.delete(2),await va(n)):e||(n.W_.add(2),await Pi(n),n.j_.set("Unknown"))}function gs(t){return t.J_||(t.J_=function(n,r,s){const i=ue(n);return i.M_(),new ZR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:i0.bind(null,t),No:o0.bind(null,t),Lo:a0.bind(null,t),p_:l0.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),$c(t)?jc(t):t.j_.set("Unknown")):(await t.J_.stop(),bm(t))})),t.J_}function er(t){return t.Y_||(t.Y_=function(n,r,s){const i=ue(n);return i.M_(),new e0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:h0.bind(null,t),Lo:p0.bind(null,t),D_:f0.bind(null,t),v_:d0.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Ea(t)):(await t.Y_.stop(),t.K_.length>0&&(X(Ar,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class Hc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Hc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(t,e){if(An("AsyncQueue",`${e}: ${t}`),ps(t))return new re(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xr{static emptySet(e){return new Xr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ms(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ed{constructor(){this.Z_=new Fe(se.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ae():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new ls(e,n,Xr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class m0{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class _0{constructor(){this.queries=td(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=td(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new re(B.ABORTED,"Firestore shutting down"))}}function td(){return new Cr(t=>Gg(t),da)}async function y0(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new m0,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=qc(a,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Kc(n)}async function v0(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function E0(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Kc(n)}function T0(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Kc(t){t.ia.forEach(e=>{e.next()})}var jl,nd;(nd=jl||(jl={}))._a="default",nd.Cache="cache";class I0{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==jl.Cache}}/**
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
 */class Pm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class w0{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=_e(),this.mutatedKeys=_e(),this.ya=Qg(e),this.wa=new Xr(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new ed,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),v=pa(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;m&&v?m.data.isEqual(v.data)?k!==V&&(r.track({type:3,doc:v}),O=!0):this.va(m,v)||(r.track({type:2,doc:v}),O=!0,(c&&this.ya(v,c)>0||h&&this.ya(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),O=!0):m&&!v&&(r.track({type:1,doc:m}),O=!0,(c||h)&&(l=!0)),O&&(v?(a=a.add(v),i=V?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((d,p)=>function(v,k){const V=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return V(v)-V(k)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new ls(this.query,e.wa,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ed,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=_e(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new km(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new Pm(r))}),n}Oa(e){this.fa=e.gs,this.pa=_e();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return ls.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const zc="SyncEngine";class A0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b0{constructor(e){this.key=e,this.Ba=!1}}class R0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Cr(l=>Gg(l),da),this.qa=new Map,this.Qa=new Set,this.$a=new Fe(se.comparator),this.Ka=new Map,this.Ua=new xc,this.Wa={},this.Ga=new Map,this.za=as.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function S0(t,e,n=!0){const r=Mm(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Vm(r,e,n,!0),s}async function C0(t,e){const n=Mm(t);await Vm(n,e,!0,!1)}async function Vm(t,e,n,r){const s=await KR(t.localStore,tn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await P0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&wm(t.remoteStore,s),l}async function P0(t,e,n,r,s){t.Ha=(p,m,v)=>async function(V,O,q,j){let H=O.view.Sa(q);H.ls&&(H=await Gf(V.localStore,O.query,!1).then(({documents:w})=>O.view.Sa(w,H)));const W=j&&j.targetChanges.get(O.targetId),de=j&&j.targetMismatches.get(O.targetId)!=null,pe=O.view.applyChanges(H,V.isPrimaryClient,W,de);return sd(V,O.targetId,pe.Ma),pe.snapshot}(t,p,m,v);const i=await Gf(t.localStore,e,!0),a=new w0(e,i.gs),l=a.Sa(i.documents),c=Ci.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);sd(t,n,h.Ma);const d=new A0(e,n,a);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function k0(t,e,n){const r=ue(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!da(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ul(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uc(r.remoteStore,s.targetId),$l(r,s.targetId)}).catch(ds)):($l(r,s.targetId),await Ul(r.localStore,s.targetId,!0))}async function V0(t,e){const n=ue(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uc(n.remoteStore,r.targetId))}async function D0(t,e,n){const r=U0(t);try{const s=await function(a,l){const c=ue(a),h=Ke.now(),d=l.reduce((v,k)=>v.add(k.key),_e());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let k=bn(),V=_e();return c.ds.getEntries(v,d).next(O=>{k=O,k.forEach((q,j)=>{j.isValidDocument()||(V=V.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,k)).next(O=>{p=O;const q=[];for(const j of l){const H=qb(j,p.get(j.key).overlayedDocument);H!=null&&q.push(new Pr(j.key,H,jg(H.value.mapValue),Tn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,q,l)}).next(O=>{m=O;const q=O.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(v,O.batchId,q)})}).then(()=>({batchId:m.batchId,changes:Yg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new Fe(ye)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await ki(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=qc(s,"Failed to persist write");n.reject(i)}}async function Dm(t,e){const n=ue(t);try{const r=await $R(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ka.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Se(a.Ba):s.removedDocuments.size>0&&(Se(a.Ba),a.Ba=!1))}),await ki(n,r,e)}catch(r){await ds(r)}}function rd(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ue(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&Kc(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N0(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let a=new Fe(se.comparator);a=a.insert(i,lt.newNoDocument(i,ce.min()));const l=_e().add(i),c=new _a(ce.min(),new Map,new Fe(ye),a,l);await Dm(r,c),r.$a=r.$a.remove(i),r.Ka.delete(e),Wc(r)}else await Ul(r.localStore,e,!1).then(()=>$l(r,e,n)).catch(ds)}async function O0(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await jR(n.localStore,e);Om(n,r,null),Nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await ds(s)}}async function x0(t,e,n){const r=ue(t);try{const s=await function(a,l){const c=ue(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Om(r,e,n),Nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await ds(s)}}function Nm(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Om(t,e,n){const r=ue(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function $l(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||xm(t,r)})}function xm(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Uc(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),Wc(t))}function sd(t,e,n){for(const r of n)r instanceof Pm?(t.Ua.addReference(r.key,e),M0(t,r)):r instanceof km?(X(zc,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||xm(t,r.key)):ae()}function M0(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(zc,"New document in limbo: "+n),t.Qa.add(r),Wc(t))}function Wc(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new se(Be.fromString(e)),r=t.za.next();t.Ka.set(r,new b0(n)),t.$a=t.$a.insert(n,r),wm(t.remoteStore,new $n(tn(kc(n.path)),r,"TargetPurposeLimboResolution",ca.ae))}}async function ki(t,e,n){const r=ue(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Lc.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,h){const d=ue(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Hi,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>M.forEach(m.Ji,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!ps(p))throw p;X(Fc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=d.Ts.get(m),k=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(k);d.Ts=d.Ts.insert(m,V)}}}(r.localStore,i))}async function L0(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(zc,"User change. New user:",e.toKey());const r=await vm(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new re(B.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.Rs)}}function F0(t,e){const n=ue(t),r=n.Ka.get(e);if(r&&r.Ba)return _e().add(r.key);{let s=_e();const i=n.qa.get(e);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.ba)}return s}}function Mm(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N0.bind(null,e),e.La.p_=E0.bind(null,e.eventManager),e.La.Ja=T0.bind(null,e.eventManager),e}function U0(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x0.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return BR(this.persistence,new LR,e.initialUser,this.serializer)}Xa(e){return new ym(Mc.ri,this.serializer)}Za(e){return new WR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class B0 extends qo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Se(this.persistence.referenceDelegate instanceof $o);const r=this.persistence.referenceDelegate.garbageCollector;return new IR(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new ym(r=>$o.ri(r,n),this.serializer)}}class Hl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L0.bind(null,this.syncEngine),await g0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _0}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new XR(i)}(e.databaseInfo);return function(i,a,l,c){return new n0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new s0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>rd(this.syncEngine,n,0),function(){return Yf.D()?new Yf:new GR}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new R0(s,i,a,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);X(Ar,"RemoteStore shutting down."),i.W_.add(5),await Pi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hl.provider={build:()=>new Hl};/**
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
 *//**
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
 */class j0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const tr="FirestoreClient";class $0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Vg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(tr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(tr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function il(t,e){t.asyncQueue.verifyOperationInProgress(),X(tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function id(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H0(t);X(tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zf(e.remoteStore,s)),t._onlineComponents=e}async function H0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(tr,"Using user provided OfflineComponentProvider");try{await il(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await il(t,new qo)}}else X(tr,"Using default OfflineComponentProvider"),await il(t,new B0(void 0));return t._offlineComponents}async function Lm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(tr,"Using user provided OnlineComponentProvider"),await id(t,t._uninitializedComponentsProvider._online)):(X(tr,"Using default OnlineComponentProvider"),await id(t,new Hl))),t._onlineComponents}function q0(t){return Lm(t).then(e=>e.syncEngine)}async function K0(t){const e=await Lm(t),n=e.eventManager;return n.onListen=S0.bind(null,e.syncEngine),n.onUnlisten=k0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=V0.bind(null,e.syncEngine),n}function z0(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new j0({next:m=>{d.su(),a.enqueueAndForget(()=>v0(i,p));const v=m.docs.has(l);!v&&m.fromCache?h.reject(new re(B.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?h.reject(new re(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new I0(kc(l.path),d,{includeMetadataChanges:!0,Ta:!0});return y0(i,p)}(await K0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Fm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const od=new Map;/**
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
 */function W0(t,e,n){if(!n)throw new re(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function G0(t,e,n,r){if(e===!0&&r===!0)throw new re(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ad(t){if(!se.isDocumentKey(t))throw new re(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function gi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new re(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Um="firestore.googleapis.com",ld=!0;class cd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Um,this.ssl=ld}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ld;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_m;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ER)throw new re(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}G0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JA;switch(r.type){case"firstParty":return new eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=od.get(n);r&&(X("ComponentProvider","Removing Datastore"),od.delete(n),r.terminate())}(this),Promise.resolve()}}function Q0(t,e,n,r={}){var s;const i=(t=gi(t,Qc))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==Um&&i.host!==l&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!vr(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ot.MOCK_USER;else{h=hT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new re(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ot(p)}t._authCredentials=new YA(new kg(h,d))}}/**
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
 */class Jc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jc(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class mi extends Jc{constructor(e,n,r){super(e,n,kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new se(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function Bm(t,e,...n){if(t=qt(t),arguments.length===1&&(e=Vg.newId()),W0("doc","path",e),t instanceof Qc){const r=Be.fromString(e,...n);return ad(r),new xt(t,null,new se(r))}{if(!(t instanceof xt||t instanceof mi))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ad(r),new xt(t.firestore,t instanceof mi?t.converter:null,new se(r))}}/**
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
 */const ud="AsyncQueue";class hd{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tm(this,"async_queue_retry"),this.bu=()=>{const r=sl();r&&X(ud,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=sl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Gn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ps(e))throw e;X(ud,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Hc.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ae()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Yc extends Qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hd(e),this._firestoreClient=void 0,await e}}}function J0(t,e){const n=typeof t=="object"?t:Bp(),r=typeof t=="string"?t:xo,s=pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cT("firestore");i&&Q0(s,...i)}return s}function jm(t){if(t._terminated)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Y0(t),t._firestoreClient}function Y0(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new pb(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Fm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new $0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(et.fromBase64String(e))}catch(n){throw new re(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $m{constructor(e){this._methodName=e}}/**
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
 */class Zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const X0=/^__.*__$/;class Z0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Si(e,this.data,n,this.fieldTransforms)}}function Hm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class tu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ko(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Hm(this.Lu)&&X0.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class eS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}ju(e,n,r,s=!1){return new tu({Lu:e,methodName:n,zu:r,path:Ze.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tS(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new eS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nS(t,e,n,r,s,i={}){const a=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Wm("Data must be an object, but it was:",a,r);const l=Km(r,a);let c,h;if(i.merge)c=new Bt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=rS(e,p,n);if(!a.contains(m))throw new re(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iS(d,m)||d.push(m)}c=new Bt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new Z0(new Ot(l),c,h)}function qm(t,e){if(zm(t=qt(t)))return Wm("Unsupported field value:",e,t),Km(t,e);if(t instanceof $m)return function(r,s){if(!Hm(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=qm(l,s.Uu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:jo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(s.serializer,i)}}if(r instanceof Zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:um(s.serializer,r._byteString)};if(r instanceof xt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eu)return function(a,l){return{mapValue:{fields:{[Ug]:{stringValue:Bg},[Mo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return Vc(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Gc(r)}`)}(t,e)}function Km(t,e){const n={};return Ng(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(r,s)=>{const i=qm(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Zc||t instanceof cs||t instanceof xt||t instanceof $m||t instanceof eu)}function Wm(t,e,n){if(!zm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function rS(t,e,n){if((e=qt(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return Gm(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const sS=new RegExp("[~\\*/\\[\\]]");function Gm(t,e,n){if(e.search(sS)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new re(B.INVALID_ARGUMENT,l+t+c)}function iS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oS extends Qm{data(){return super.data()}}function Jm(t,e){return typeof e=="string"?Gm(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}class aS{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Sr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Mo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>je(a.doubleValue));return new eu(i)}convertGeoPoint(e){return new Zc(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ha(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Se(mm(r));const s=new hi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class cS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ym extends Qm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uS extends Ym{data(e={}){return super.data(e)}}/**
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
 */function hS(t){t=gi(t,xt);const e=gi(t.firestore,Yc);return z0(jm(e),t._key).then(n=>gS(e,t,n))}class fS extends aS{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function dS(t,e,n){t=gi(t,xt);const r=gi(t.firestore,Yc),s=lS(t.converter,e);return pS(r,[nS(tS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function pS(t,e){return function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget(async()=>D0(await q0(r),s,i)),i.promise}(jm(t),e)}function gS(t,e,n){const r=n.docs.get(e._key),s=new fS(t);return new Ym(t,s,e._key,r,new cS(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){fs=s})(us),ns(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Yc(new XA(r.getProvider("auth-internal")),new tb(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new re(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zn(vf,Ef,e),zn(vf,Ef,"esm2017")})();const mS={apiKey:"AIzaSyDQUVfNnXYGwW89O81Ia3swJJKszia5uJw",authDomain:"sistema-gestion-textil.firebaseapp.com",projectId:"sistema-gestion-textil",storageBucket:"sistema-gestion-textil.firebasestorage.app",messagingSenderId:"102818785070",appId:"1:102818785070:web:cb65b60bb35882cc9c7cbf",measurementId:"G-RZETQND85R"},Xm=Up(mS),Zm=GA(Xm),e_=J0(Xm),_S={data(){return{email:"",password:"",error:""}},methods:{async login(){try{const e=(await xw(Zm,this.email,this.password)).user;console.log("Usuario autenticado:",e);const n=await e.getIdToken();console.log("Token de Firebase:",n),localStorage.setItem("token",n),console.log("Buscando documento en Firestore para el UID:",e.uid);const r=await hS(Bm(e_,"users",e.uid));if(console.log("Documento encontrado:",r.exists()?r.data():"No existe"),r.exists()){const s=r.data();console.log("Datos del usuario:",s),s.role==="admin"?this.$router.push("/admin/dashboard"):this.$router.push("/employee/dashboard")}else this.error="No se encontraron datos del usuario.",console.error("No se encontró el documento en Firestore para el UID:",e.uid)}catch(t){console.error("Error de autenticación:",t),t.code==="auth/wrong-password"||t.code==="auth/user-not-found"?this.error="Correo electrónico o contraseña incorrectos.":this.error="Ocurrió un error durante el inicio de sesión."}}}},yS={class:"login-container"},vS={class:"login-box"},ES={class:"form-group"},TS={class:"form-group"},IS={key:0,class:"error-message"},wS={class:"register-text"};function AS(t,e,n,r,s,i){const a=ac("router-link");return Ce(),Pe("div",yS,[L("div",vS,[e[8]||(e[8]=L("h2",{class:"login-title"},"Iniciar Sesión",-1)),L("form",{onSubmit:e[2]||(e[2]=_p((...l)=>i.login&&i.login(...l),["prevent"])),class:"login-form"},[L("div",ES,[e[3]||(e[3]=L("label",{for:"email",class:"form-label"},"Correo Electrónico",-1)),Dt(L("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.email=l),type:"email",id:"email",class:"form-input",placeholder:"Ingresa tu correo electrónico",required:""},null,512),[[Qt,s.email]])]),L("div",TS,[e[4]||(e[4]=L("label",{for:"password",class:"form-label"},"Contraseña",-1)),Dt(L("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>s.password=l),type:"password",id:"password",class:"form-input",placeholder:"Ingresa tu contraseña",required:""},null,512),[[Qt,s.password]])]),e[5]||(e[5]=L("button",{type:"submit",class:"login-button"},"Iniciar Sesión",-1))],32),s.error?(Ce(),Pe("p",IS,Qn(s.error),1)):Le("",!0),L("p",wS,[e[7]||(e[7]=ni(" ¿No tienes una cuenta? ")),ut(a,{to:"/register",class:"register-link"},{default:ic(()=>e[6]||(e[6]=[ni("Regístrate")])),_:1})])])])}const bS=Ei(_S,[["render",AS],["__scopeId","data-v-f4152785"]]),RS={data(){return{firstName:"",lastName:"",cedula:"",email:"",password:"",role:"employee",phone:"",address:"",birthdate:"",gender:"male",error:"",successMessage:"",adminCedulas:["12345678","87654321","31036510"]}},methods:{async register(){try{if(this.error="",this.successMessage="",this.role==="admin"&&!this.adminCedulas.includes(this.cedula)){this.error="No puedes registrarte como administrador. Cédula no válida.";return}const e=(await Ow(Zm,this.email,this.password)).user;console.log("Usuario registrado:",e),await dS(Bm(e_,"users",e.uid),{firstName:this.firstName,lastName:this.lastName,cedula:this.cedula,email:this.email,role:this.role,phone:this.phone,address:this.address,birthdate:this.birthdate,gender:this.gender}),console.log("Datos del usuario guardados en Firestore."),this.successMessage="Registro exitoso. Ahora puedes iniciar sesión.",setTimeout(()=>{this.$router.push("/login")},3e3)}catch(t){console.error("Error en el registro:",t),t.code==="auth/email-already-in-use"?this.error="El correo electrónico ya está registrado. Por favor, inicia sesión.":this.error="Ocurrió un error durante el registro."}}}},SS={class:"register-container"},CS={class:"register-box"},PS={class:"form-group"},kS={class:"form-group"},VS={class:"form-group"},DS={class:"form-group"},NS={class:"form-group"},OS={class:"form-group"},xS={class:"form-group"},MS={class:"form-group"},LS={class:"form-group"},FS={class:"form-group"},US={key:0,class:"success-message"},BS={key:1,class:"error-message"},jS={class:"login-text"};function $S(t,e,n,r,s,i){const a=ac("router-link");return Ce(),Pe("div",SS,[L("div",CS,[e[26]||(e[26]=L("h2",{class:"register-title"},"Registro",-1)),L("form",{onSubmit:e[10]||(e[10]=_p((...l)=>i.register&&i.register(...l),["prevent"])),class:"register-form"},[L("div",PS,[e[11]||(e[11]=L("label",{for:"firstName",class:"form-label"},"Nombres",-1)),Dt(L("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.firstName=l),type:"text",id:"firstName",class:"form-input",placeholder:"Ingresa tus nombres",required:""},null,512),[[Qt,s.firstName]])]),L("div",kS,[e[12]||(e[12]=L("label",{for:"lastName",class:"form-label"},"Apellidos",-1)),Dt(L("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>s.lastName=l),type:"text",id:"lastName",class:"form-input",placeholder:"Ingresa tus apellidos",required:""},null,512),[[Qt,s.lastName]])]),L("div",VS,[e[13]||(e[13]=L("label",{for:"cedula",class:"form-label"},"Cédula de Identidad",-1)),Dt(L("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>s.cedula=l),type:"text",id:"cedula",class:"form-input",placeholder:"Ingresa tu cédula",required:""},null,512),[[Qt,s.cedula]])]),L("div",DS,[e[14]||(e[14]=L("label",{for:"email",class:"form-label"},"Correo Electrónico",-1)),Dt(L("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>s.email=l),type:"email",id:"email",class:"form-input",placeholder:"Ingresa tu correo electrónico",required:""},null,512),[[Qt,s.email]])]),L("div",NS,[e[15]||(e[15]=L("label",{for:"password",class:"form-label"},"Contraseña",-1)),Dt(L("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>s.password=l),type:"password",id:"password",class:"form-input",placeholder:"Ingresa tu contraseña",required:""},null,512),[[Qt,s.password]])]),L("div",OS,[e[17]||(e[17]=L("label",{for:"role",class:"form-label"},"Rol",-1)),Dt(L("select",{"onUpdate:modelValue":e[5]||(e[5]=l=>s.role=l),id:"role",class:"form-input"},e[16]||(e[16]=[L("option",{value:"employee"},"Empleado",-1),L("option",{value:"admin"},"Administrador",-1)]),512),[[Ih,s.role]])]),L("div",xS,[e[18]||(e[18]=L("label",{for:"phone",class:"form-label"},"Teléfono",-1)),Dt(L("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>s.phone=l),type:"tel",id:"phone",class:"form-input",placeholder:"Ingresa tu número de teléfono",required:""},null,512),[[Qt,s.phone]])]),L("div",MS,[e[19]||(e[19]=L("label",{for:"address",class:"form-label"},"Dirección",-1)),Dt(L("input",{"onUpdate:modelValue":e[7]||(e[7]=l=>s.address=l),type:"text",id:"address",class:"form-input",placeholder:"Ingresa tu dirección",required:""},null,512),[[Qt,s.address]])]),L("div",LS,[e[20]||(e[20]=L("label",{for:"birthdate",class:"form-label"},"Fecha de Nacimiento",-1)),Dt(L("input",{"onUpdate:modelValue":e[8]||(e[8]=l=>s.birthdate=l),type:"date",id:"birthdate",class:"form-input",required:""},null,512),[[Qt,s.birthdate]])]),L("div",FS,[e[22]||(e[22]=L("label",{for:"gender",class:"form-label"},"Género",-1)),Dt(L("select",{"onUpdate:modelValue":e[9]||(e[9]=l=>s.gender=l),id:"gender",class:"form-input"},e[21]||(e[21]=[L("option",{value:"male"},"Masculino",-1),L("option",{value:"female"},"Femenino",-1),L("option",{value:"other"},"Otro",-1)]),512),[[Ih,s.gender]])]),e[23]||(e[23]=L("button",{type:"submit",class:"register-button"},"Registrarse",-1))],32),s.successMessage?(Ce(),Pe("p",US,Qn(s.successMessage),1)):Le("",!0),s.error?(Ce(),Pe("p",BS,Qn(s.error),1)):Le("",!0),L("p",jS,[e[25]||(e[25]=ni(" ¿Ya tienes una cuenta? ")),ut(a,{to:"/login",class:"login-link"},{default:ic(()=>e[24]||(e[24]=[ni("Inicia Sesión")])),_:1})])])])}const HS=Ei(RS,[["render",$S],["__scopeId","data-v-30f1209c"]]),qS={data(){return{user:{name:"Nombre del Empleado"},isCollapsed:!1,activeSection:"inicio"}},methods:{logout(){localStorage.removeItem("token"),this.$router.push("/login")},toggleSidebar(){this.isCollapsed=!this.isCollapsed},navigateTo(t){this.activeSection=t}}},KS={class:"employee-dashboard"},zS={class:"sidebar-menu"},WS={key:0},GS={key:0},QS={key:0},JS={key:0},YS={key:0},XS={class:"main-content"},ZS={key:0},eC={key:1},tC={key:2},nC={key:3};function rC(t,e,n,r,s,i){return Ce(),Pe("div",KS,[L("div",{class:Tt(["sidebar",{"sidebar-collapsed":s.isCollapsed}])},[L("button",{onClick:e[0]||(e[0]=(...a)=>i.toggleSidebar&&i.toggleSidebar(...a)),class:"sidebar-toggle"},Qn(s.isCollapsed?"☰":"✕"),1),L("ul",zS,[L("li",{onClick:e[1]||(e[1]=a=>i.navigateTo("inicio")),class:Tt({active:s.activeSection==="inicio"})},[e[6]||(e[6]=L("i",{class:"fas fa-home"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",WS,"Inicio"))],2),L("li",{onClick:e[2]||(e[2]=a=>i.navigateTo("notificaciones")),class:Tt({active:s.activeSection==="notificaciones"})},[e[7]||(e[7]=L("i",{class:"fas fa-bell"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",GS,"Notificaciones"))],2),L("li",{onClick:e[3]||(e[3]=a=>i.navigateTo("configuracion")),class:Tt({active:s.activeSection==="configuracion"})},[e[8]||(e[8]=L("i",{class:"fas fa-cog"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",QS,"Configuración"))],2),L("li",{onClick:e[4]||(e[4]=a=>i.navigateTo("historial")),class:Tt({active:s.activeSection==="historial"})},[e[9]||(e[9]=L("i",{class:"fas fa-history"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",JS,"Historial"))],2),L("li",{onClick:e[5]||(e[5]=(...a)=>i.logout&&i.logout(...a))},[e[10]||(e[10]=L("i",{class:"fas fa-sign-out-alt"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",YS,"Cerrar Sesión"))])]),e[11]||(e[11]=L("div",{class:"footer"},[L("p",null,"Versión 1.0.0 | © 2023 Empresa")],-1))],2),L("div",XS,[e[16]||(e[16]=L("h2",null,"Panel del Empleado",-1)),L("p",null,"Bienvenido, "+Qn(s.user.name),1),s.activeSection==="inicio"?(Ce(),Pe("div",ZS,e[12]||(e[12]=[L("h3",null,"Inicio",-1),L("p",null,"Contenido de la sección de inicio.",-1)]))):Le("",!0),s.activeSection==="notificaciones"?(Ce(),Pe("div",eC,e[13]||(e[13]=[L("h3",null,"Notificaciones",-1),L("p",null,"Contenido de la sección de notificaciones.",-1)]))):Le("",!0),s.activeSection==="configuracion"?(Ce(),Pe("div",tC,e[14]||(e[14]=[L("h3",null,"Configuración",-1),L("p",null,"Contenido de la sección de configuración.",-1)]))):Le("",!0),s.activeSection==="historial"?(Ce(),Pe("div",nC,e[15]||(e[15]=[L("h3",null,"Historial",-1),L("p",null,"Contenido de la sección de historial.",-1)]))):Le("",!0)])])}const sC=Ei(qS,[["render",rC],["__scopeId","data-v-8b02b884"]]),iC={data(){return{user:{name:"Nombre del Administrador"},isCollapsed:!1,activeSection:"inicio"}},methods:{logout(){localStorage.removeItem("token"),this.$router.push("/login")},toggleSidebar(){this.isCollapsed=!this.isCollapsed},navigateTo(t){this.activeSection=t}}},oC={class:"employee-dashboard"},aC={class:"sidebar-menu"},lC={key:0},cC={key:0},uC={key:0},hC={key:0},fC={key:0},dC={key:0},pC={class:"main-content"},gC={key:0},mC={key:1},_C={key:2},yC={key:3},vC={key:4};function EC(t,e,n,r,s,i){return Ce(),Pe("div",oC,[L("div",{class:Tt(["sidebar",{"sidebar-collapsed":s.isCollapsed}])},[L("button",{onClick:e[0]||(e[0]=(...a)=>i.toggleSidebar&&i.toggleSidebar(...a)),class:"sidebar-toggle"},Qn(s.isCollapsed?"☰":"✕"),1),L("ul",aC,[L("li",{onClick:e[1]||(e[1]=a=>i.navigateTo("inicio")),class:Tt({active:s.activeSection==="inicio"})},[e[7]||(e[7]=L("i",{class:"fas fa-home"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",lC,"Inicio"))],2),L("li",{onClick:e[2]||(e[2]=a=>i.navigateTo("empleados")),class:Tt({active:s.activeSection==="empleados"})},[e[8]||(e[8]=L("i",{class:"fas fa-users"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",cC,"Empleados"))],2),L("li",{onClick:e[3]||(e[3]=a=>i.navigateTo("notificaciones")),class:Tt({active:s.activeSection==="notificaciones"})},[e[9]||(e[9]=L("i",{class:"fas fa-bell"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",uC,"Notificaciones"))],2),L("li",{onClick:e[4]||(e[4]=a=>i.navigateTo("historial")),class:Tt({active:s.activeSection==="historial"})},[e[10]||(e[10]=L("i",{class:"fas fa-history"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",hC,"Historial"))],2),L("li",{onClick:e[5]||(e[5]=a=>i.navigateTo("configuracion")),class:Tt({active:s.activeSection==="configuracion"})},[e[11]||(e[11]=L("i",{class:"fas fa-cog"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",fC,"Configuración"))],2),L("li",{onClick:e[6]||(e[6]=(...a)=>i.logout&&i.logout(...a))},[e[12]||(e[12]=L("i",{class:"fas fa-sign-out-alt"},null,-1)),s.isCollapsed?Le("",!0):(Ce(),Pe("span",dC,"Cerrar Sesión"))])])],2),L("div",pC,[e[18]||(e[18]=L("h2",null,"Panel del Administrador",-1)),L("p",null,"Bienvenido, "+Qn(s.user.name),1),s.activeSection==="inicio"?(Ce(),Pe("div",gC,e[13]||(e[13]=[L("h3",null,"Inicio",-1),L("p",null,"Contenido de la sección de inicio.",-1)]))):Le("",!0),s.activeSection==="empleados"?(Ce(),Pe("div",mC,e[14]||(e[14]=[L("h3",null,"Empleados",-1),L("p",null,"Contenido de la sección de empleados.",-1)]))):Le("",!0),s.activeSection==="notificaciones"?(Ce(),Pe("div",_C,e[15]||(e[15]=[L("h3",null,"Notificaciones",-1),L("p",null,"Contenido de la sección de notificaciones.",-1)]))):Le("",!0),s.activeSection==="historial"?(Ce(),Pe("div",yC,e[16]||(e[16]=[L("h3",null,"Historial",-1),L("p",null,"Contenido de la sección de historial.",-1)]))):Le("",!0),s.activeSection==="configuracion"?(Ce(),Pe("div",vC,e[17]||(e[17]=[L("h3",null,"Configuración",-1),L("p",null,"Contenido de la sección de configuración.",-1)]))):Le("",!0)]),e[19]||(e[19]=L("div",{class:"footer"},[L("p",null,"Versión 1.0.0 | © 2023 Empresa")],-1))])}const TC=Ei(iC,[["render",EC],["__scopeId","data-v-6bae7363"]]),IC=[{path:"/",redirect:"/login"},{path:"/login",component:bS},{path:"/register",component:HS},{path:"/employee/dashboard",component:sC},{path:"/admin/dashboard",component:TC}],wC=ZE({history:CE(),routes:IC});Kv(Yv).use(wC).mount("#app");
