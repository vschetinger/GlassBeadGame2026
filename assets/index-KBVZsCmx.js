var K_=Object.defineProperty;var O_=(l,a,s)=>a in l?K_(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s;var $l=(l,a,s)=>O_(l,typeof a!="symbol"?a+"":a,s);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();var Du={exports:{}},es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function z_(){if(Pm)return es;Pm=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(r,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var g in u)g!=="key"&&(d[g]=u[g])}else d=u;return u=d.ref,{$$typeof:l,type:r,key:h,ref:u!==void 0?u:null,props:d}}return es.Fragment=a,es.jsx=s,es.jsxs=s,es}var Wm;function R_(){return Wm||(Wm=1,Du.exports=z_()),Du.exports}var m=R_(),Yu={exports:{}},kn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function D_(){if(np)return kn;np=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),k=Symbol.for("react.view_transition"),w=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,x={};function A(N,X,cn){this.props=N,this.context=X,this.refs=x,this.updater=cn||E}A.prototype.isReactComponent={},A.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},A.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function R(){}R.prototype=A.prototype;function U(N,X,cn){this.props=N,this.context=X,this.refs=x,this.updater=cn||E}var H=U.prototype=new R;H.constructor=U,T(H,A.prototype),H.isPureReactComponent=!0;var G=Array.isArray;function J(){}var an={H:null,A:null,T:null,S:null},nn=Object.prototype.hasOwnProperty;function fn(N,X,cn){var rn=cn.ref;return{$$typeof:l,type:N,key:X,ref:rn!==void 0?rn:null,props:cn}}function gn(N,X){return fn(N.type,X,N.props)}function un(N){return typeof N=="object"&&N!==null&&N.$$typeof===l}function F(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(cn){return X[cn]})}var ln=/\/+/g;function P(N,X){return typeof N=="object"&&N!==null&&N.key!=null?F(""+N.key):X.toString(36)}function I(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(J,J):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function $(N,X,cn,rn,En){var Sn=typeof N;(Sn==="undefined"||Sn==="boolean")&&(N=null);var Z=!1;if(N===null)Z=!0;else switch(Sn){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(N.$$typeof){case l:case a:Z=!0;break;case _:return Z=N._init,$(Z(N._payload),X,cn,rn,En)}}if(Z)return En=En(N),Z=rn===""?"."+P(N,0):rn,G(En)?(cn="",Z!=null&&(cn=Z.replace(ln,"$&/")+"/"),$(En,X,cn,"",function(fe){return fe})):En!=null&&(un(En)&&(En=gn(En,cn+(En.key==null||N&&N.key===En.key?"":(""+En.key).replace(ln,"$&/")+"/")+Z)),X.push(En)),1;Z=0;var tn=rn===""?".":rn+":";if(G(N))for(var dn=0;dn<N.length;dn++)rn=N[dn],Sn=tn+P(rn,dn),Z+=$(rn,X,cn,Sn,En);else if(dn=S(N),typeof dn=="function")for(N=dn.call(N),dn=0;!(rn=N.next()).done;)rn=rn.value,Sn=tn+P(rn,dn++),Z+=$(rn,X,cn,Sn,En);else if(Sn==="object"){if(typeof N.then=="function")return $(I(N),X,cn,rn,En);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Z}function Y(N,X,cn){if(N==null)return N;var rn=[],En=0;return $(N,rn,"","",function(Sn){return X.call(cn,Sn,En++)}),rn}function z(N){if(N._status===-1){var X=N._result,cn=X();cn.then(function(rn){(N._status===0||N._status===-1)&&(N._status=1,N._result=rn,cn.status===void 0&&(cn.status="fulfilled",cn.value=rn))},function(rn){(N._status===0||N._status===-1)&&(N._status=2,N._result=rn,cn.status===void 0&&(cn.status="rejected",cn.reason=rn))}),N._status===-1&&(N._status=0,N._result=cn)}if(N._status===1)return N._result.default;throw N._result}var sn=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function bn(N){var X=an.T,cn={};cn.types=X!==null?X.types:null,an.T=cn;try{var rn=N(),En=an.S;En!==null&&En(cn,rn),typeof rn=="object"&&rn!==null&&typeof rn.then=="function"&&rn.then(J,sn)}catch(Sn){sn(Sn)}finally{X!==null&&cn.types!==null&&(X.types=cn.types),an.T=X}}function vn(N){var X=an.T;if(X!==null){var cn=X.types;cn===null?X.types=[N]:cn.indexOf(N)===-1&&cn.push(N)}else bn(vn.bind(null,N))}var ie={map:Y,forEach:function(N,X,cn){Y(N,function(){X.apply(this,arguments)},cn)},count:function(N){var X=0;return Y(N,function(){X++}),X},toArray:function(N){return Y(N,function(X){return X})||[]},only:function(N){if(!un(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return kn.Activity=v,kn.Children=ie,kn.Component=A,kn.Fragment=s,kn.Profiler=u,kn.PureComponent=U,kn.StrictMode=r,kn.Suspense=f,kn.ViewTransition=k,kn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=an,kn.__COMPILER_RUNTIME={__proto__:null,c:function(N){return an.H.useMemoCache(N)}},kn.addTransitionType=vn,kn.cache=function(N){return function(){return N.apply(null,arguments)}},kn.cacheSignal=function(){return null},kn.cloneElement=function(N,X,cn){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var rn=T({},N.props),En=N.key;if(X!=null)for(Sn in X.key!==void 0&&(En=""+X.key),X)!nn.call(X,Sn)||Sn==="key"||Sn==="__self"||Sn==="__source"||Sn==="ref"&&X.ref===void 0||(rn[Sn]=X[Sn]);var Sn=arguments.length-2;if(Sn===1)rn.children=cn;else if(1<Sn){for(var Z=Array(Sn),tn=0;tn<Sn;tn++)Z[tn]=arguments[tn+2];rn.children=Z}return fn(N.type,En,rn)},kn.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:d,_context:N},N},kn.createElement=function(N,X,cn){var rn,En={},Sn=null;if(X!=null)for(rn in X.key!==void 0&&(Sn=""+X.key),X)nn.call(X,rn)&&rn!=="key"&&rn!=="__self"&&rn!=="__source"&&(En[rn]=X[rn]);var Z=arguments.length-2;if(Z===1)En.children=cn;else if(1<Z){for(var tn=Array(Z),dn=0;dn<Z;dn++)tn[dn]=arguments[dn+2];En.children=tn}if(N&&N.defaultProps)for(rn in Z=N.defaultProps,Z)En[rn]===void 0&&(En[rn]=Z[rn]);return fn(N,Sn,En)},kn.createRef=function(){return{current:null}},kn.forwardRef=function(N){return{$$typeof:g,render:N}},kn.isValidElement=un,kn.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:z}},kn.memo=function(N,X){return{$$typeof:p,type:N,compare:X===void 0?null:X}},kn.startTransition=bn,kn.unstable_useCacheRefresh=function(){return an.H.useCacheRefresh()},kn.use=function(N){return an.H.use(N)},kn.useActionState=function(N,X,cn){return an.H.useActionState(N,X,cn)},kn.useCallback=function(N,X){return an.H.useCallback(N,X)},kn.useContext=function(N){return an.H.useContext(N)},kn.useDebugValue=function(){},kn.useDeferredValue=function(N,X){return an.H.useDeferredValue(N,X)},kn.useEffect=function(N,X){return an.H.useEffect(N,X)},kn.useEffectEvent=function(N){return an.H.useEffectEvent(N)},kn.useId=function(){return an.H.useId()},kn.useImperativeHandle=function(N,X,cn){return an.H.useImperativeHandle(N,X,cn)},kn.useInsertionEffect=function(N,X){return an.H.useInsertionEffect(N,X)},kn.useLayoutEffect=function(N,X){return an.H.useLayoutEffect(N,X)},kn.useMemo=function(N,X){return an.H.useMemo(N,X)},kn.useOptimistic=function(N,X){return an.H.useOptimistic(N,X)},kn.useReducer=function(N,X,cn){return an.H.useReducer(N,X,cn)},kn.useRef=function(N){return an.H.useRef(N)},kn.useState=function(N){return an.H.useState(N)},kn.useSyncExternalStore=function(N,X,cn){return an.H.useSyncExternalStore(N,X,cn)},kn.useTransition=function(){return an.H.useTransition()},kn.version="19.3.0",kn}var ep;function ud(){return ep||(ep=1,Yu.exports=D_()),Yu.exports}var en=ud(),Iu={exports:{}},ts={},Hu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Y_(){return tp||(tp=1,(function(l){function a(I,$){var Y=I.length;I.push($);n:for(;0<Y;){var z=Y-1>>>1,sn=I[z];if(0<u(sn,$))I[z]=$,I[Y]=sn,Y=z;else break n}}function s(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var $=I[0],Y=I.pop();if(Y!==$){I[0]=Y;n:for(var z=0,sn=I.length,bn=sn>>>1;z<bn;){var vn=2*(z+1)-1,ie=I[vn],N=vn+1,X=I[N];if(0>u(ie,Y))N<sn&&0>u(X,ie)?(I[z]=X,I[N]=Y,z=N):(I[z]=ie,I[vn]=Y,z=vn);else if(N<sn&&0>u(X,Y))I[z]=X,I[N]=Y,z=N;else break n}}return $}function u(I,$){var Y=I.sortIndex-$.sortIndex;return Y!==0?Y:I.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var f=[],p=[],_=1,v=null,k=3,w=!1,S=!1,E=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var $=s(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=I)r(p),$.sortIndex=$.expirationTime,a(f,$);else break;$=s(p)}}function H(I){if(E=!1,U(I),!S)if(s(f)!==null)S=!0,G||(G=!0,un());else{var $=s(p);$!==null&&P(H,$.startTime-I)}}var G=!1,J=-1,an=5,nn=-1;function fn(){return T?!0:!(l.unstable_now()-nn<an)}function gn(){if(T=!1,G){var I=l.unstable_now();nn=I;var $=!0;try{n:{S=!1,E&&(E=!1,A(J),J=-1),w=!0;var Y=k;try{e:{for(U(I),v=s(f);v!==null&&!(v.expirationTime>I&&fn());){var z=v.callback;if(typeof z=="function"){v.callback=null,k=v.priorityLevel;var sn=z(v.expirationTime<=I);if(I=l.unstable_now(),typeof sn=="function"){v.callback=sn,U(I),$=!0;break e}v===s(f)&&r(f),U(I)}else r(f);v=s(f)}if(v!==null)$=!0;else{var bn=s(p);bn!==null&&P(H,bn.startTime-I),$=!1}}break n}finally{v=null,k=Y,w=!1}$=void 0}}finally{$?un():G=!1}}}var un;if(typeof R=="function")un=function(){R(gn)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,ln=F.port2;F.port1.onmessage=gn,un=function(){ln.postMessage(null)}}else un=function(){x(gn,0)};function P(I,$){J=x(function(){I(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(I){I.callback=null},l.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):an=0<I?Math.floor(1e3/I):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(I){switch(k){case 1:case 2:case 3:var $=3;break;default:$=k}var Y=k;k=$;try{return I()}finally{k=Y}},l.unstable_requestPaint=function(){T=!0},l.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=k;k=I;try{return $()}finally{k=Y}},l.unstable_scheduleCallback=function(I,$,Y){var z=l.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?z+Y:z):Y=z,I){case 1:var sn=-1;break;case 2:sn=250;break;case 5:sn=1073741823;break;case 4:sn=1e4;break;default:sn=5e3}return sn=Y+sn,I={id:_++,callback:$,priorityLevel:I,startTime:Y,expirationTime:sn,sortIndex:-1},Y>z?(I.sortIndex=Y,a(p,I),s(f)===null&&I===s(p)&&(E?(A(J),J=-1):E=!0,P(H,Y-z))):(I.sortIndex=sn,a(f,I),S||w||(S=!0,G||(G=!0,un()))),I},l.unstable_shouldYield=fn,l.unstable_wrapCallback=function(I){var $=k;return function(){var Y=k;k=$;try{return I.apply(this,arguments)}finally{k=Y}}}})(Uu)),Uu}var ip;function I_(){return ip||(ip=1,Hu.exports=Y_()),Hu.exports}var Bu={exports:{}},Ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function H_(){if(lp)return Ee;lp=1;var l=ud();function a(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)v+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal"),d=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function g(_,v,k){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:w===h?h:""+w,children:_,containerInfo:v,implementation:k}}var f=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ee.browser=function(_){return{$$typeof:d,_reason:_}},Ee.createPortal=function(_,v){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return g(_,v,null,k)},Ee.flushSync=function(_){var v=f.T,k=r.p;try{if(f.T=null,r.p=2,_)return _()}finally{f.T=v,r.p=k,r.d.f()}},Ee.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(_,v))},Ee.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Ee.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var k=v.as,w=p(k,v.crossOrigin),S=typeof v.integrity=="string"?v.integrity:void 0,E=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;k==="style"?r.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:E}):k==="script"&&r.d.X(_,{crossOrigin:w,integrity:S,fetchPriority:E,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ee.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var k=p(v.as,v.crossOrigin);r.d.M(_,{crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&r.d.M(_)},Ee.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var k=v.as,w=p(k,v.crossOrigin);r.d.L(_,k,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ee.preloadModule=function(_,v){if(typeof _=="string")if(v){var k=p(v.as,v.crossOrigin);r.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else r.d.m(_)},Ee.requestFormReset=function(_){r.d.r(_)},Ee.unstable_batchedUpdates=function(_,v){return _(v)},Ee.useFormState=function(_,v,k){return f.H.useFormState(_,v,k)},Ee.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ee.version="19.3.0",Ee}var ap;function U_(){if(ap)return Bu.exports;ap=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Bu.exports=H_(),Bu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function B_(){if(sp)return ts;sp=1;var l=I_(),a=ud(),s=U_();function r(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function d(n){for(var e=n,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?n:null}function h(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function g(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function f(n){if(d(n)!==n)throw Error(r(188))}function p(n){var e=n.alternate;if(!e){if(e=d(n),e===null)throw Error(r(188));return e!==n?null:n}for(var t=n,i=e;;){var o=t.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){t=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===t)return f(o),n;if(c===i)return f(o),e;c=c.sibling}throw Error(r(188))}if(t.return!==i.return)t=o,i=c;else{for(var y=!1,b=o.child;b;){if(b===t){y=!0,t=o,i=c;break}if(b===i){y=!0,i=o,t=c;break}b=b.sibling}if(!y){for(b=c.child;b;){if(b===t){y=!0,t=c,i=o;break}if(b===i){y=!0,i=c,t=o;break}b=b.sibling}if(!y)throw Error(r(189))}}if(t.alternate!==i)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?n:e}function _(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=_(n),e!==null)return e;n=n.sibling}return null}function v(n,e,t,i,o,c){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&t(n,i,o,c)||(n.tag!==22||n.memoizedState===null)&&(e||n.tag!==5&&n.tag!==27)&&v(n.child,e,t,i,o,c))return!0;n=n.sibling}return!1}function k(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function w(n){var e=!1;for(n=n.return;n!==null&&(n.tag===4&&(e=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return e}function S(n){var e=[null,null],t=k(n);return t===null||E(e,n,t.child,{foundSelf:!1}),e}function E(n,e,t,i){for(;t!==null;){if(t===e)i.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(i.foundSelf)return n[1]=t,!0;n[0]=t}else if((t.tag!==22||t.memoizedState===null)&&E(n,e,t.child,i))return!0;t=t.sibling}return!1}function T(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,A=null;function R(n,e,t){return n===t?!0:n===e?(x=n,!0):!1}function U(n,e,t){return n===t?(A=n,!1):n===e?(A!==null&&(x=n),!0):!1}function H(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function G(n,e,t){for(var i=0,o=n;o;o=t(o))i++;o=0;for(var c=e;c;c=t(c))o++;for(;0<i-o;)n=t(n),i--;for(;0<o-i;)e=t(e),o--;for(;i--;){if(n===e||e!==null&&n===e.alternate)return n;n=t(n),e=t(e)}return null}var J=Object.assign,an=Symbol.for("react.element"),nn=Symbol.for("react.transitional.element"),fn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),un=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),ln=Symbol.for("react.consumer"),P=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),bn=Symbol.for("react.activity"),vn=Symbol.for("react.legacy_hidden"),ie=Symbol.for("react.memo_cache_sentinel"),N=Symbol.for("react.view_transition"),X=Symbol.for("react.recoverable"),cn=Symbol.iterator;function rn(n){return n===null||typeof n!="object"?null:(n=cn&&n[cn]||n["@@iterator"],typeof n=="function"?n:null)}var En=Symbol.for("react.client.reference");function Sn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===En?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case gn:return"Fragment";case F:return"Profiler";case un:return"StrictMode";case $:return"Suspense";case Y:return"SuspenseList";case bn:return"Activity";case N:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case fn:return"Portal";case P:return n.displayName||"Context";case ln:return(n._context.displayName||"Context")+".Consumer";case I:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return e=n.displayName||null,e!==null?e:Sn(n.type)||"Memo";case sn:e=n._payload,n=n._init;try{return Sn(n(e))}catch{}}return null}var Z=Array.isArray,tn=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dn=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},qt=[],le=-1;function de(n){return{current:n}}function Jn(n){0>le||(n.current=qt[le],qt[le]=null,le--)}function zn(n,e){le++,qt[le]=n.current,n.current=e}var $n=de(null),We=de(null),ne=de(null),nt=de(null);function Zn(n,e){switch(zn(ne,e),zn(We,n),zn($n,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?om(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=om(e),n=cm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Jn($n),zn($n,n)}function et(){Jn($n),Jn(We),Jn(ne)}function sa(n){var e=n.memoizedState;e!==null&&(Vl._currentValue=e.memoizedState,zn(nt,n)),e=$n.current;var t=cm(e,n.type);e!==t&&(zn(We,n),zn($n,t))}function ge(n){We.current===n&&(Jn($n),Jn(We)),nt.current===n&&(Jn(nt),Vl._currentValue=fe)}var Wi,oa;function dt(n){if(Wi===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wi=e&&e[1]||"",oa=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wi+n+oa}var nl=!1;function el(n,e){if(!n||nl)return"";nl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(on){var M=on}Reflect.construct(n,[],V)}else{try{V.call()}catch(on){M=on}V=!1;try{var O=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),V=!0,new n}finally{V&&(O!==void 0?Object.defineProperty(n.prototype,"props",O):delete n.prototype.props)}}}else{try{throw Error()}catch(on){M=on}(V=n())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(on){if(on&&M&&typeof on.stack=="string")return[on.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),y=c[0],b=c[1];if(y&&b){var C=y.split(`
`),Q=b.split(`
`);for(o=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;o<Q.length&&!Q[o].includes("DetermineComponentFrameRoot");)o++;if(i===C.length||o===Q.length)for(i=C.length-1,o=Q.length-1;1<=i&&0<=o&&C[i]!==Q[o];)o--;for(;1<=i&&0<=o;i--,o--)if(C[i]!==Q[o]){if(i!==1||o!==1)do if(i--,o--,0>o||C[i]!==Q[o]){var D=`
`+C[i].replace(" at new "," at ");return n.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",n.displayName)),D}while(1<=i&&0<=o);break}}}finally{nl=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?dt(t):""}function vs(n,e){switch(n.tag){case 26:case 27:case 5:return dt(n.type);case 16:return dt("Lazy");case 13:return n.child!==e&&e!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return el(n.type,!1);case 11:return el(n.type.render,!1);case 1:return el(n.type,!0);case 31:return dt("Activity");case 30:return dt("ViewTransition");default:return""}}function ca(n){try{var e="",t=null;do e+=vs(n,t),t=n,n=n.return;while(n);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var tl=Object.prototype.hasOwnProperty,il=l.unstable_scheduleCallback,ll=l.unstable_cancelCallback,ks=l.unstable_shouldYield,ws=l.unstable_requestPaint,B=l.unstable_now,W=l.unstable_getCurrentPriorityLevel,pn=l.unstable_ImmediatePriority,xn=l.unstable_UserBlockingPriority,On=l.unstable_NormalPriority,Vn=l.unstable_LowPriority,se=l.unstable_IdlePriority,Pn=l.log,ht=l.unstable_setDisableYieldValue,Ne=null,Me=null;function Jt(n){if(typeof Pn=="function"&&ht(n),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Ne,n)}catch{}}var Be=Math.clz32?Math.clz32:X0,V0=Math.log,G0=Math.LN2;function X0(n){return n>>>=0,n===0?32:31-(V0(n)/G0|0)|0}var bs=256,xs=262144,Ss=4194304;function Ei(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Es(n,e,t){var i=n.pendingLanes;if(i===0)return 0;var o=0,c=n.suspendedLanes,y=n.pingedLanes;n=n.warmLanes;var b=i&134217727;return b!==0?(i=b&~c,i!==0?o=Ei(i):(y&=b,y!==0?o=Ei(y):t||(t=b&~n,t!==0&&(o=Ei(t))))):(b=i&~c,b!==0?o=Ei(b):y!==0?o=Ei(y):t||(t=i&~n,t!==0&&(o=Ei(t)))),o===0?0:e!==0&&e!==o&&(e&c)===0&&(c=o&-o,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:o}function ra(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function qd(n,e){(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var i=31-Be(t),o=1<<i;e|=n[i],t&=~o}return e}function $0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(){var n=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),n}function dc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ua(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Z0(n,e,t,i,o,c){var y=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var b=n.entanglements,C=n.expirationTimes,Q=n.hiddenUpdates;for(t=y&~t;0<t;){var D=31-Be(t),V=1<<D;b[D]=0,C[D]=-1;var M=Q[D];if(M!==null)for(Q[D]=null,D=0;D<M.length;D++){var O=M[D];O!==null&&(O.lane&=-536870913)}t&=~V}i!==0&&Kd(n,i,0),c!==0&&o===0&&n.tag!==0&&(n.suspendedLanes|=c&~(y&~e))}function Kd(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var i=31-Be(e);n.entangledLanes|=e,n.entanglements[i]=n.entanglements[i]|1073741824|t&261930}function Od(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Be(t),o=1<<i;o&e|n[i]&e&&(n[i]|=e),t&=~o}}function zd(n,e){var t=e&-e;return t=(t&42)!==0?1:hc(t),(t&(n.suspendedLanes|e))!==0?0:t}function hc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function fc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rd(){var n=dn.p;return n!==0?n:(n=window.event,n===void 0?32:Vm(n.type))}function Dd(n,e){var t=dn.p;try{return dn.p=n,e()}finally{dn.p=t}}var Qt=Math.random().toString(36).slice(2),ve="__reactFiber$"+Qt,Re="__reactProps$"+Qt,al="__reactContainer$"+Qt,Yd="__reactEvents$"+Qt,J0="__reactListeners$"+Qt,F0="__reactHandles$"+Qt,Id="__reactResources$"+Qt,da="__reactMarker$"+Qt,Cs="__reactLoad$"+Qt;function As(n){delete n[ve],delete n[Re],delete n[J0],delete n[F0]}function Ci(n){var e;if(e=n[ve])return e;for(var t=n.parentNode;t;){if(e=t[al]||t[ve]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Em(n);n!==null;){if(t=n[ve])return t;n=Em(n)}return e}n=t,t=n.parentNode}return null}function sl(n){if(n=n[ve]||n[al]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function ha(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(r(33))}function ol(n){var e=n[Id];return e||(e=n[Id]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function me(n){n[da]=!0}function Hd(n){n[Cs]=void 0}var Ud=new Set,Bd={};function Ai(n,e){cl(n,e),cl(n+"Capture",e)}function cl(n,e){for(Bd[n]=e,n=0;n<e.length;n++)Ud.add(e[n])}var P0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ld={},Vd={};function W0(n){return tl.call(Vd,n)?!0:tl.call(Ld,n)?!1:P0.test(n)?Vd[n]=!0:(Ld[n]=!0,!1)}var Rn=!1;function Gd(){var n=Rn;return Rn=!1,n}function Ts(n,e,t){if(W0(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,t)}}function js(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,t)}}function Kt(n,e,t,i){if(i===null)n.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,i)}}function Le(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xd(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ny(n,e,t){var i=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return o.call(this)},set:function(y){t=""+y,c.call(this,y)}}),Object.defineProperty(n,e,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(y){t=""+y},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function gc(n){if(!n._valueTracker){var e=Xd(n)?"checked":"value";n._valueTracker=ny(n,e,""+n[e])}}function $d(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Xd(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}var ey=/[\n"\\]/g;function tt(n){return n.replace(ey,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function mc(n,e,t,i,o,c,y,b){n.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?n.type=y:n.removeAttribute("type"),e!=null?y==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Le(e)):n.value!==""+Le(e)&&(n.value=""+Le(e)):y!=="submit"&&y!=="reset"||n.removeAttribute("value"),e!=null?y==="number"&&n.value==e?pc(n,Le(n.value)):pc(n,Le(e)):t!=null?pc(n,Le(t)):i!=null&&n.removeAttribute("value"),o==null&&c!=null&&(n.defaultChecked=!!c),o!=null&&(n.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+Le(b):n.removeAttribute("name")}function Zd(n,e,t,i,o,c,y,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){gc(n);return}t=t!=null?""+Le(t):"",e=e!=null?""+Le(e):t,b||e===n.value||(n.value=e),n.defaultValue=e}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=b?n.checked:!!i,n.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(n.name=y),gc(n)}function pc(n,e){n.defaultValue!==""+e&&(n.defaultValue=""+e)}function rl(n,e,t,i){if(n=n.options,e){e={};for(var o=0;o<t.length;o++)e["$"+t[o]]=!0;for(t=0;t<n.length;t++)o=e.hasOwnProperty("$"+n[t].value),n[t].selected!==o&&(n[t].selected=o),o&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Le(t),e=null,o=0;o<n.length;o++){if(n[o].value===t){n[o].selected=!0,i&&(n[o].defaultSelected=!0);return}e!==null||n[o].disabled||(e=n[o])}e!==null&&(e.selected=!0)}}function Jd(n,e,t){if(e!=null&&(e=""+Le(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Le(t):""}function Fd(n,e,t,i){if(e==null){if(i!=null){if(t!=null)throw Error(r(92));if(Z(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),e=t}t=Le(e),n.defaultValue=t,i=n.textContent,i===t&&i!==""&&i!==null&&(n.value=i),gc(n)}function ul(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(n,e,t){var i=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":i?n.setProperty(e,t):typeof t!="number"||t===0||ty.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Wd(n,e,t){if(e!=null&&typeof e!="object")throw Error(r(62));if(n=n.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="",Rn=!0);for(var o in e)i=e[o],e.hasOwnProperty(o)&&t[o]!==i&&(Pd(n,o,i),Rn=!0)}else for(var c in e)e.hasOwnProperty(c)&&Pd(n,c,e[c])}function yc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(n){return ly.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function wt(){}var _c=null;function vc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dl=null,hl=null;function nh(n){var e=sl(n);if(e&&(n=e.stateNode)){var t=n[Re]||null;n:switch(n=e.stateNode,e.type){case"input":if(mc(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+tt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var o=i[Re]||null;if(!o)throw Error(r(90));mc(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<t.length;e++)i=t[e],i.form===n.form&&$d(i)}break n;case"textarea":Jd(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&rl(n,!!t.multiple,e,!1)}}}var kc=!1;function eh(n,e,t){if(kc)return n(e,t);kc=!0;try{var i=n(e);return i}finally{if(kc=!1,(dl!==null||hl!==null)&&(Mo(),dl&&(e=dl,n=hl,hl=dl=null,nh(e),n)))for(e=0;e<n.length;e++)nh(n[e])}}function fa(n,e){var t=n.stateNode;if(t===null)return null;var i=t[Re]||null;if(i===null)return null;t=i[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(r(231,e,typeof t));return t}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=!1;if(Ot)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){wc=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{wc=!1}var Ft=null,bc=null,Ms=null;function th(){if(Ms)return Ms;var n,e=bc,t=e.length,i,o="value"in Ft?Ft.value:Ft.textContent,c=o.length;for(n=0;n<t&&e[n]===o[n];n++);var y=t-n;for(i=1;i<=y&&e[t-i]===o[c-i];i++);return Ms=o.slice(n,1<i?1-i:void 0)}function qs(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qs(){return!0}function ih(){return!1}function qe(n){function e(t,i,o,c,y){this._reactName=t,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=y,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(t=n[b],this[b]=t?t(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Qs:ih,this.isPropagationStopped=ih,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=qe(Pt),ma=J({},Pt,{view:0,detail:0}),ay=qe(ma),xc,Sc,pa,Os=J({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pa&&(pa&&n.type==="mousemove"?(xc=n.screenX-pa.screenX,Sc=n.screenY-pa.screenY):Sc=xc=0,pa=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),lh=qe(Os),sy=J({},Os,{dataTransfer:0}),oy=qe(sy),cy=J({},ma,{relatedTarget:0}),Ec=qe(cy),ry=J({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=qe(ry),dy=J({},Pt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hy=qe(dy),fy=J({},Pt,{data:0}),ah=qe(fy),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=py[n])?!!e[n]:!1}function Cc(){return yy}var _y=J({},ma,{key:function(n){if(n.key){var e=gy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?my[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vy=qe(_y),ky=J({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=qe(ky),wy=J({},Pt,{submitter:0}),by=qe(wy),xy=J({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Sy=qe(xy),Ey=J({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=qe(Ey),Ay=J({},Os,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=qe(Ay),jy=J({},Pt,{newState:0,oldState:0,source:0}),Ny=qe(jy),My=[9,13,27,32],Ac=Ot&&"CompositionEvent"in window,ya=null;Ot&&"documentMode"in document&&(ya=document.documentMode);var qy=Ot&&"TextEvent"in window&&!ya,oh=Ot&&(!Ac||ya&&8<ya&&11>=ya),ch=" ",rh=!1;function uh(n,e){switch(n){case"keyup":return My.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fl=!1;function Qy(n,e){switch(n){case"compositionend":return dh(e);case"keypress":return e.which!==32?null:(rh=!0,ch);case"textInput":return n=e.data,n===ch&&rh?null:n;default:return null}}function Ky(n,e){if(fl)return n==="compositionend"||!Ac&&uh(n,e)?(n=th(),Ms=bc=Ft=null,fl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oh&&e.locale!=="ko"?null:e.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Oy[n.type]:e==="textarea"}function fh(n,e,t,i){dl?hl?hl.push(i):hl=[i]:dl=i,e=Ro(e,"onChange"),0<e.length&&(t=new Ks("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var _a=null,va=null;function zy(n){em(n,0)}function zs(n){var e=ha(n);if($d(e))return n}function gh(n,e){if(n==="change")return e}var mh=!1;if(Ot){var Tc;if(Ot){var jc="oninput"in document;if(!jc){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),jc=typeof ph.oninput=="function"}Tc=jc}else Tc=!1;mh=Tc&&(!document.documentMode||9<document.documentMode)}function yh(){_a&&(_a.detachEvent("onpropertychange",_h),va=_a=null)}function _h(n){if(n.propertyName==="value"&&zs(va)){var e=[];fh(e,va,n,vc(n)),eh(zy,e)}}function Ry(n,e,t){n==="focusin"?(yh(),_a=e,va=t,_a.attachEvent("onpropertychange",_h)):n==="focusout"&&yh()}function Dy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zs(va)}function Yy(n,e){if(n==="click")return zs(e)}function Iy(n,e){if(n==="input"||n==="change")return zs(e)}function Hy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ve=typeof Object.is=="function"?Object.is:Hy;function ka(n,e){if(Ve(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var o=t[i];if(!tl.call(e,o)||!Ve(n[o],e[o]))return!1}return!0}function Nc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,e){var t=vh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=vh(t)}}function wh(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?wh(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function bh(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Nc(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Nc(n.document)}return e}function Mc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Uy=Ot&&"documentMode"in document&&11>=document.documentMode,gl=null,qc=null,wa=null,Qc=!1;function xh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qc||gl==null||gl!==Nc(i)||(i=gl,"selectionStart"in i&&Mc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&ka(wa,i)||(wa=i,i=Ro(qc,"onSelect"),0<i.length&&(e=new Ks("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=gl)))}function Ti(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ml={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionrun:Ti("Transition","TransitionRun"),transitionstart:Ti("Transition","TransitionStart"),transitioncancel:Ti("Transition","TransitionCancel"),transitionend:Ti("Transition","TransitionEnd")},Kc={},Sh={};Ot&&(Sh=document.createElement("div").style,"AnimationEvent"in window||(delete ml.animationend.animation,delete ml.animationiteration.animation,delete ml.animationstart.animation),"TransitionEvent"in window||delete ml.transitionend.transition);function ji(n){if(Kc[n])return Kc[n];if(!ml[n])return n;var e=ml[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Sh)return Kc[n]=e[t];return n}var Eh=ji("animationend"),Ch=ji("animationiteration"),Ah=ji("animationstart"),By=ji("transitionrun"),Ly=ji("transitionstart"),Vy=ji("transitioncancel"),Th=ji("transitionend"),jh=new Map,Oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oc.push("scrollEnd");function ft(n,e){jh.set(n,e),Ai(e,[n])}var Gy=0;function zt(n,e){if(n.name!=null&&n.name!=="auto")return n.name;if(e.autoName!==null)return e.autoName;n=yt.identifierPrefix;var t=Gy++;return n="_"+n+"t_"+t.toString(32)+"_",e.autoName=n}function Nh(n){if(n==null||typeof n=="string")return n;var e=null,t=Ol;if(t!==null)for(var i=0;i<t.length;i++){var o=n[t[i]];if(o!=null){if(o==="none")return"none";e=e==null?o:e+(" "+o)}}return e??n.default}function Rt(n,e){return n=Nh(n),e=Nh(e),e==null?n==="auto"?null:n:e==="auto"?null:e}var Rs=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},it=[],pl=0,zc=0;function Ds(){for(var n=pl,e=zc=pl=0;e<n;){var t=it[e];it[e++]=null;var i=it[e];it[e++]=null;var o=it[e];it[e++]=null;var c=it[e];if(it[e++]=null,i!==null&&o!==null){var y=i.pending;y===null?o.next=o:(o.next=y.next,y.next=o),i.pending=o}c!==0&&Mh(t,o,c)}}function Ys(n,e,t,i){it[pl++]=n,it[pl++]=e,it[pl++]=t,it[pl++]=i,zc|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function Rc(n,e,t,i){return Ys(n,e,t,i),Is(n)}function Ni(n,e){return Ys(n,null,null,e),Is(n)}function Mh(n,e,t){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t);for(var o=!1,c=n.return;c!==null;)c.childLanes|=t,i=c.alternate,i!==null&&(i.childLanes|=t),c.tag===22&&(n=c.stateNode,n===null||n._visibility&1||(o=!0)),n=c,c=c.return;return n.tag===3?(c=n.stateNode,o&&e!==null&&(o=31-Be(t),n=c.hiddenUpdates,i=n[o],i===null?n[o]=[e]:i.push(e),e.lane=t|536870912),c):null}function Is(n){if(50<Ba)throw Ba=0,No=null,Error(r(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var yl={};function Xy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(n,e,t,i){return new Xy(n,e,t,i)}function Dc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Dt(n,e){var t=n.alternate;return t===null?(t=De(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&1206910976,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function qh(n,e){n.flags&=1206910978;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Hs(n,e,t,i,o,c){var y=0;if(i=n,typeof i=="function")Dc(i)&&(y=1);else if(typeof i=="string")y=w_(n,t,$n.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(i){case bn:return n=De(31,t,e,o),n.elementType=bn,n.lanes=c,n;case gn:return Mi(t.children,o,c,e);case un:y=8,o|=24;break;case F:return n=De(12,t,e,o|2),n.elementType=F,n.lanes=c,n;case $:return n=De(13,t,e,o),n.elementType=$,n.lanes=c,n;case Y:return n=De(19,t,e,o),n.elementType=Y,n.lanes=c,n;case vn:case N:return n=o|32,n=De(30,t,e,n),n.elementType=N,n.lanes=c,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case P:y=10;break n;case ln:y=9;break n;case I:y=11;break n;case z:y=14;break n;case sn:y=16,i=null;break n}y=29,t=Error(r(130,n===null?"null":typeof n,"")),i=null}return e=De(y,t,e,o),e.elementType=n,e.type=i,e.lanes=c,e}function Mi(n,e,t,i){return n=De(7,n,i,e),n.lanes=t,n}function Yc(n,e,t){return n=De(6,n,null,e),n.lanes=t,n}function Qh(n){var e=De(18,null,null,0);return e.stateNode=n,e}function Ic(n,e,t){return e=De(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Kh=new WeakMap;function lt(n,e){if(typeof n=="object"&&n!==null){var t=Kh.get(n);return t!==void 0?t:(e={value:n,source:e,stack:ca(e)},Kh.set(n,e),e)}return{value:n,source:e,stack:ca(e)}}var _l=[],vl=0,Us=null,ba=0,at=[],st=0,Wt=null,bt=1,xt="";function Yt(n,e){_l[vl++]=ba,_l[vl++]=Us,Us=n,ba=e}function Oh(n,e,t){at[st++]=bt,at[st++]=xt,at[st++]=Wt,Wt=n;var i=bt;n=xt;var o=32-Be(i)-1;i&=~(1<<o),t+=1;var c=32-Be(e)+o;if(30<c){var y=o-o%5;c=(i&(1<<y)-1).toString(32),i>>=y,o-=y,bt=1<<32-Be(e)+o|t<<o|i,xt=c+n}else bt=1<<c|t<<o|i,xt=n}function Bs(n){n.return!==null&&(Yt(n,1),Oh(n,1,0))}function Hc(n){for(;n===Us;)Us=_l[--vl],_l[vl]=null,ba=_l[--vl],_l[vl]=null;for(;n===Wt;)Wt=at[--st],at[st]=null,xt=at[--st],at[st]=null,bt=at[--st],at[st]=null}function zh(n,e){at[st++]=bt,at[st++]=xt,at[st++]=Wt,bt=e.id,xt=e.overflow,Wt=n}var pe=null,Gn=null,Tn=!1,ni=null,ot=!1,Uc=Error(r(519));function ei(n){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xa(lt(e,n)),Uc}function Rh(n){var e=n.stateNode,t=n.type,i=n.memoizedProps;switch(e[ve]=n,e[Re]=i,t){case"dialog":Nn("cancel",e),Nn("close",e);break;case"iframe":case"object":case"embed":Nn("load",e);break;case"video":case"audio":for(t=0;t<Va.length;t++)Nn(Va[t],e);break;case"source":Nn("error",e);break;case"img":case"image":case"link":Nn("error",e),Nn("load",e);break;case"details":Nn("toggle",e);break;case"input":Nn("invalid",e),Zd(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Nn("invalid",e);break;case"textarea":Nn("invalid",e),Fd(e,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||i.suppressHydrationWarning===!0||am(e.textContent,t)?(i.popover!=null&&(Nn("beforetoggle",e),Nn("toggle",e)),i.onScroll!=null&&Nn("scroll",e),i.onScrollEnd!=null&&Nn("scrollend",e),i.onClick!=null&&(e.onclick=wt),e=!0):e=!1,e||ei(n,!0)}function Ls(n){for(pe=n.return;pe;)switch(pe.tag){case 5:case 31:case 13:ot=!1;return;case 27:case 3:ot=!0;return;default:pe=pe.return}}function kl(n){if(n!==pe)return!1;if(!Tn)return Ls(n),Tn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||_u(n.type,n.memoizedProps)),t=!t),t&&Gn&&ei(n),Ls(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Gn=Sm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Gn=Sm(n)}else e===27?(e=Gn,yi(n.type)?(n=Au,Au=null,Gn=n):Gn=e):Gn=pe?rt(n.stateNode.nextSibling):null;return!0}function qi(){Gn=pe=null,Tn=!1}function Bc(){var n=ni;return n!==null&&(He===null?He=n:He.push.apply(He,n),ni=null),n}function xa(n){ni===null?ni=[n]:ni.push(n)}var Lc=de(null),Qi=null,It=null;function ti(n,e,t){zn(Lc,e._currentValue),e._currentValue=t}function Ht(n){n._currentValue=Lc.current,Jn(Lc)}function Vs(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Vc(n,e,t,i){var o=n.child;for(o!==null&&(o.return=n);o!==null;){var c=o.dependencies;if(c!==null){var y=o.child;c=c.firstContext;n:for(;c!==null;){var b=c;c=o;for(var C=0;C<e.length;C++)if(b.context===e[C]){c.lanes|=t,b=c.alternate,b!==null&&(b.lanes|=t),Vs(c.return,t,n),i||(y=null);break n}c=b.next}}else if(o.tag===18){if(y=o.return,y===null)throw Error(r(341));y.lanes|=t,c=y.alternate,c!==null&&(c.lanes|=t),Vs(y,t,n),y=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=t,y=o.alternate,y!==null&&(y.lanes|=t),Vs(o.return,t,n),y=o.child,y=y!==null?y.sibling:null):y=o.child;if(y!==null)y.return=o;else for(y=o;y!==null;){if(y===n){y=null;break}if(o=y.sibling,o!==null){o.return=y.return,y=o;break}y=y.return}o=y}}function Ki(n,e,t,i){n=null;for(var o=e,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var y=o.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=o.type;Ve(o.pendingProps.value,y.value)||(n!==null?n.push(b):n=[b])}}else if(o===nt.current){if(y=o.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(n!==null?n.push(Vl):n=[Vl])}o=o.return}return n!==null&&Vc(e,n,t,i),e.flags|=262144,n!==null}function Gs(n){for(n=n.firstContext;n!==null;){if(!Ve(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Oi(n){Qi=n,It=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ke(n){return Dh(Qi,n)}function Xs(n,e){return Qi===null&&Oi(n),Dh(n,e)}function Dh(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},It===null){if(n===null)throw Error(r(308));It=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else It=It.next=e;return t}var $y=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,i){n.push(i)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Zy=l.unstable_scheduleCallback,Jy=l.unstable_NormalPriority,oe={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new $y,data:new Map,refCount:0}}function Sa(n){n.refCount--,n.refCount===0&&Zy(Jy,function(){n.controller.abort()})}function Yh(n,e){if((n.pendingLanes&4194048)!==0){var t=n.transitionTypes;for(t===null&&(t=n.transitionTypes=[]),n=0;n<e.length;n++){var i=e[n];t.indexOf(i)===-1&&t.push(i)}}}var Ea=null;function Fy(n){var e=n.transitionTypes;return n.transitionTypes=null,e}var Ca=null,Xc=0,zi=0,wl=null;function Py(n,e){if(Ca===null){var t=Ca=[];Xc=0,zi=ru(),wl={status:"pending",value:void 0,then:function(i){t.push(i)}}}return Xc++,e.then(Ih,Ih),e}function Ih(){if(--Xc===0&&(Ea=null,Ca!==null)){wl!==null&&(wl.status="fulfilled");var n=Ca;Ca=null,zi=0,wl=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Wy(n,e){var t=[],i={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return n.then(function(){i.status="fulfilled",i.value=e;for(var o=0;o<t.length;o++)(0,t[o])(e)},function(o){for(i.status="rejected",i.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),i}var Hh=tn.S;tn.S=function(n,e){if(Kg=B(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Py(n,e),Ea!==null)for(var t=Yl;t!==null;)Yh(t,Ea),t=t.next;if(t=n.types,t!==null){for(var i=Yl;i!==null;)Yh(i,t),i=i.next;if(zi!==0){i=Ea,i===null&&(i=Ea=[]);for(var o=0;o<t.length;o++){var c=t[o];i.indexOf(c)===-1&&i.push(c)}}}Hh!==null&&Hh(n,e)};var Ri=de(null);function $c(){var n=Ri.current;return n!==null?n:Ln.pooledCache}function $s(n,e){e===null?zn(Ri,Ri.current):zn(Ri,e.pool)}function Uh(){var n=$c();return n===null?null:{parent:oe._currentValue,pool:n}}var bl=Error(r(460)),Zc=Error(r(474)),Zs=Error(r(542)),Js={then:function(){}};function Bh(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Lh(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(wt,wt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Gh(n),n===void 0&&!("reason"in e)?Error(r(600)):n;default:if(typeof e.status=="string")e.then(wt,wt);else{if(n=Ln,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=e,n.status="pending",n.then(function(i){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=i}},function(i){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Gh(n),n}throw Yi=e,bl}}function Di(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Yi=t,bl):t}}var Yi=null;function Vh(){if(Yi===null)throw Error(r(459));var n=Yi;return Yi=null,n}function Gh(n){if(n===bl||n===Zs)throw Error(r(483))}var xl=null,Aa=0;function Fs(n){var e=Aa;return Aa+=1,xl===null&&(xl=[]),Lh(xl,n,e)}function ii(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Ps(n,e){throw e.$$typeof===an?Error(r(525)):(n=Object.prototype.toString.call(e),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Xh(n){function e(q,j){if(n){var K=q.deletions;K===null?(q.deletions=[j],q.flags|=16):K.push(j)}}function t(q,j){if(!n)return null;for(;j!==null;)e(q,j),j=j.sibling;return null}function i(q){for(var j=new Map;q!==null;)q.key===null?j.set(q.index,q):j.set(q.key,q),q=q.sibling;return j}function o(q,j){return q=Dt(q,j),q.index=0,q.sibling=null,q}function c(q,j,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<j?(q.flags|=2,j):K):(q.flags|=134217730,j)):(q.flags|=1048576,j)}function y(q){return n&&q.alternate===null&&(q.flags|=134217730),q}function b(q,j,K,L){return j===null||j.tag!==6?(j=Yc(K,q.mode,L),j.return=q,j):(j=o(j,K),j.return=q,j)}function C(q,j,K,L){var hn=K.type;return hn===gn?(q=D(q,j,K.props.children,L,K.key),ii(q,K),q):j!==null&&(j.elementType===hn||typeof hn=="object"&&hn!==null&&hn.$$typeof===sn&&Di(hn)===j.type)?(j=o(j,K.props),ii(j,K),j.return=q,j):(j=Hs(K.type,K.key,K.props,null,q.mode,L),ii(j,K),j.return=q,j)}function Q(q,j,K,L){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=Ic(K,q.mode,L),j.return=q,j):(j=o(j,K.children||[]),j.return=q,j)}function D(q,j,K,L,hn){return j===null||j.tag!==7?(j=Mi(K,q.mode,L,hn),j.return=q,j):(j=o(j,K),j.return=q,j)}function V(q,j,K){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Yc(""+j,q.mode,K),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case nn:return K=Hs(j.type,j.key,j.props,null,q.mode,K),ii(K,j),K.return=q,K;case fn:return j=Ic(j,q.mode,K),j.return=q,j;case sn:return j=Di(j),V(q,j,K)}if(Z(j)||rn(j))return j=Mi(j,q.mode,K,null),j.return=q,j;if(typeof j.then=="function")return V(q,Fs(j),K);if(j.$$typeof===P)return V(q,Xs(q,j),K);Ps(q,j)}return null}function M(q,j,K,L){var hn=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return hn!==null?null:b(q,j,""+K,L);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case nn:return K.key===hn?C(q,j,K,L):null;case fn:return K.key===hn?Q(q,j,K,L):null;case sn:return K=Di(K),M(q,j,K,L)}if(Z(K)||rn(K))return hn!==null?null:D(q,j,K,L,null);if(typeof K.then=="function")return M(q,j,Fs(K),L);if(K.$$typeof===P)return M(q,j,Xs(q,K),L);Ps(q,K)}return null}function O(q,j,K,L,hn){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return q=q.get(K)||null,b(j,q,""+L,hn);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case nn:return q=q.get(L.key===null?K:L.key)||null,C(j,q,L,hn);case fn:return q=q.get(L.key===null?K:L.key)||null,Q(j,q,L,hn);case sn:return L=Di(L),O(q,j,K,L,hn)}if(Z(L)||rn(L))return q=q.get(K)||null,D(j,q,L,hn,null);if(typeof L.then=="function")return O(q,j,K,Fs(L),hn);if(L.$$typeof===P)return O(q,j,K,Xs(j,L),hn);Ps(j,L)}return null}function on(q,j,K,L){for(var hn=null,qn=null,yn=j,_n=j=0,ue=null;yn!==null&&_n<K.length;_n++){yn.index>_n?(ue=yn,yn=null):ue=yn.sibling;var Kn=M(q,yn,K[_n],L);if(Kn===null){yn===null&&(yn=ue);break}n&&yn&&Kn.alternate===null&&e(q,yn),j=c(Kn,j,_n),qn===null?hn=Kn:qn.sibling=Kn,qn=Kn,yn=ue}if(_n===K.length)return t(q,yn),Tn&&Yt(q,_n),hn;if(yn===null){for(;_n<K.length;_n++)yn=V(q,K[_n],L),yn!==null&&(j=c(yn,j,_n),qn===null?hn=yn:qn.sibling=yn,qn=yn);return Tn&&Yt(q,_n),hn}for(yn=i(yn);_n<K.length;_n++)ue=O(yn,q,_n,K[_n],L),ue!==null&&(n&&(Kn=ue.alternate,Kn!==null&&yn.delete(Kn.key===null?_n:Kn.key)),j=c(ue,j,_n),qn===null?hn=ue:qn.sibling=ue,qn=ue);return n&&yn.forEach(function(bi){return e(q,bi)}),Tn&&Yt(q,_n),hn}function mn(q,j,K,L){if(K==null)throw Error(r(151));for(var hn=null,qn=null,yn=j,_n=j=0,ue=null,Kn=K.next();yn!==null&&!Kn.done;_n++,Kn=K.next()){yn.index>_n?(ue=yn,yn=null):ue=yn.sibling;var bi=M(q,yn,Kn.value,L);if(bi===null){yn===null&&(yn=ue);break}n&&yn&&bi.alternate===null&&e(q,yn),j=c(bi,j,_n),qn===null?hn=bi:qn.sibling=bi,qn=bi,yn=ue}if(Kn.done)return t(q,yn),Tn&&Yt(q,_n),hn;if(yn===null){for(;!Kn.done;_n++,Kn=K.next())Kn=V(q,Kn.value,L),Kn!==null&&(j=c(Kn,j,_n),qn===null?hn=Kn:qn.sibling=Kn,qn=Kn);return Tn&&Yt(q,_n),hn}for(yn=i(yn);!Kn.done;_n++,Kn=K.next())Kn=O(yn,q,_n,Kn.value,L),Kn!==null&&(n&&(ue=Kn.alternate,ue!==null&&yn.delete(ue.key===null?_n:ue.key)),j=c(Kn,j,_n),qn===null?hn=Kn:qn.sibling=Kn,qn=Kn);return n&&yn.forEach(function(Q_){return e(q,Q_)}),Tn&&Yt(q,_n),hn}function An(q,j,K,L){if(typeof K=="object"&&K!==null&&K.type===gn&&K.key===null&&K.props.ref===void 0&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case nn:n:{for(var hn=K.key;j!==null;){if(j.key===hn){if(hn=K.type,hn===gn){if(j.tag===7){t(q,j.sibling),L=o(j,K.props.children),ii(L,K),L.return=q,q=L;break n}}else if(j.elementType===hn||typeof hn=="object"&&hn!==null&&hn.$$typeof===sn&&Di(hn)===j.type){t(q,j.sibling),L=o(j,K.props),ii(L,K),L.return=q,q=L;break n}t(q,j);break}else e(q,j);j=j.sibling}K.type===gn?(L=Mi(K.props.children,q.mode,L,K.key),ii(L,K),L.return=q,q=L):(L=Hs(K.type,K.key,K.props,null,q.mode,L),ii(L,K),L.return=q,q=L)}return y(q);case fn:n:{for(hn=K.key;j!==null;){if(j.key===hn)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){t(q,j.sibling),L=o(j,K.children||[]),L.return=q,q=L;break n}else{t(q,j);break}else e(q,j);j=j.sibling}L=Ic(K,q.mode,L),L.return=q,q=L}return y(q);case sn:return K=Di(K),An(q,j,K,L)}if(Z(K))return on(q,j,K,L);if(rn(K)){if(hn=rn(K),typeof hn!="function")throw Error(r(150));return K=hn.call(K),mn(q,j,K,L)}if(typeof K.then=="function")return An(q,j,Fs(K),L);if(K.$$typeof===P)return An(q,j,Xs(q,K),L);Ps(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,j!==null&&j.tag===6?(t(q,j.sibling),L=o(j,K),L.return=q,q=L):(t(q,j),L=Yc(K,q.mode,L),L.return=q,q=L),y(q)):t(q,j)}return function(q,j,K,L){try{Aa=0;var hn=An(q,j,K,L);return xl=null,hn}catch(yn){if(yn===bl||yn===Zs)throw yn;var qn=De(29,yn,null,q.mode);return qn.lanes=L,qn.return=q,qn}finally{}}}var Ii=Xh(!0),$h=Xh(!1),li=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ai(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function si(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Dn&2)!==0){var o=i.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),i.pending=e,e=Is(n),Mh(n,null,t),e}return Ys(n,i,e,t),Is(n)}function Ta(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Od(n,t)}}function Pc(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var o=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var y={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?o=c=y:c=c.next=y,t=t.next}while(t!==null);c===null?o=c=e:c=c.next=e}else o=c=e;t={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Wc=!1;function ja(){if(Wc){var n=wl;if(n!==null)throw n}}function Na(n,e,t,i){Wc=!1;var o=n.updateQueue;li=!1;var c=o.firstBaseUpdate,y=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var C=b,Q=C.next;C.next=null,y===null?c=Q:y.next=Q,y=C;var D=n.alternate;D!==null&&(D=D.updateQueue,b=D.lastBaseUpdate,b!==y&&(b===null?D.firstBaseUpdate=Q:b.next=Q,D.lastBaseUpdate=C))}if(c!==null){var V=o.baseState;y=0,D=Q=C=null,b=c;do{var M=b.lane&-536870913,O=M!==b.lane;if(O?(Mn&M)===M:(i&M)===M){M!==0&&M===zi&&(Wc=!0),D!==null&&(D=D.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});n:{var on=n,mn=b;M=e;var An=t;switch(mn.tag){case 1:if(on=mn.payload,typeof on=="function"){V=on.call(An,V,M);break n}V=on;break n;case 3:on.flags=on.flags&-65537|128;case 0:if(on=mn.payload,M=typeof on=="function"?on.call(An,V,M):on,M==null)break n;V=J({},V,M);break n;case 2:li=!0}}M=b.callback,M!==null&&(n.flags|=64,O&&(n.flags|=8192),O=o.callbacks,O===null?o.callbacks=[M]:O.push(M))}else O={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},D===null?(Q=D=O,C=V):D=D.next=O,y|=M;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;O=b,b=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);D===null&&(C=V),o.baseState=C,o.firstBaseUpdate=Q,o.lastBaseUpdate=D,c===null&&(o.shared.lanes=0),fi|=y,n.lanes=y,n.memoizedState=V}}function Zh(n,e){if(typeof n!="function")throw Error(r(191,n));n.call(e)}function Jh(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Zh(t[n],e)}var oi=de(null),Ws=de(0);function Fh(n,e){n=Gt,zn(Ws,n),zn(oi,e),Gt=n|e.baseLanes}function nr(){zn(Ws,Gt),zn(oi,oi.current)}function er(){Gt=Ws.current,Jn(oi),Jn(Ws)}var we=de(null),Ae=null;function ci(n){var e=n.alternate;zn(be,be.current&1),zn(we,n),Ae===null&&(e===null||oi.current!==null||e.memoizedState!==null)&&(Ae=n)}function tr(n){zn(be,be.current),zn(we,n),Ae===null&&(Ae=n)}function Ph(n){n.tag===22?(zn(be,be.current),zn(we,n),Ae===null&&(Ae=n)):ri()}function ri(){zn(be,be.current),zn(we,we.current)}function Ge(n){Jn(we),Ae===n&&(Ae=null),Jn(be)}var be=de(0);function Ma(n,e){zn(we,we.current),zn(be,e)}function ir(n){Jn(be),Jn(we),Ae===n&&(Ae=null)}function no(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Eu(t)||Cu(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ut=0,Cn=null,Bn=null,ce=null,eo=!1,Sl=!1,Hi=!1,to=0,qa=0,El=null,n1=0;function ee(){throw Error(r(321))}function lr(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ve(n[t],e[t]))return!1;return!0}function ar(n,e,t,i,o,c){return Ut=c,Cn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tn.H=n===null||n.memoizedState===null?zf:Rf,Hi=!1,c=t(i,o),Hi=!1,Sl&&(c=nf(e,t,i,o)),Wh(n),c}function Wh(n){tn.H=ro;var e=Bn!==null&&Bn.next!==null;if(Ut=0,ce=Bn=Cn=null,eo=!1,qa=0,El=null,e)throw Error(r(300));n===null||re||(n=n.dependencies,n!==null&&Gs(n)&&(re=!0))}function nf(n,e,t,i){Cn=n;var o=0;do{if(Sl&&(El=null),qa=0,Sl=!1,25<=o)throw Error(r(301));if(o+=1,ce=Bn=null,n.updateQueue!=null){var c=n.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}tn.H=c1,c=e(t,i)}while(Sl);return c}function e1(){var n=tn.H,e=n.useState()[0];return e=typeof e.then=="function"?Qa(e):e,n=n.useState()[0],(Bn!==null?Bn.memoizedState:null)!==n&&(Cn.flags|=1024),e}function sr(){var n=to!==0;return to=0,n}function or(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function cr(n){if(eo){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}eo=!1}Ut=0,ce=Bn=Cn=null,Sl=!1,qa=to=0,El=null}function Qe(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Cn.memoizedState=ce=n:ce=ce.next=n,ce}function ae(){if(Bn===null){var n=Cn.alternate;n=n!==null?n.memoizedState:null}else n=Bn.next;var e=ce===null?Cn.memoizedState:ce.next;if(e!==null)ce=e,Bn=n;else{if(n===null)throw Cn.alternate===null?Error(r(467)):Error(r(310));Bn=n,n={memoizedState:Bn.memoizedState,baseState:Bn.baseState,baseQueue:Bn.baseQueue,queue:Bn.queue,next:null},ce===null?Cn.memoizedState=ce=n:ce=ce.next=n}return ce}function io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qa(n){var e=qa;return qa+=1,El===null&&(El=[]),n=Lh(El,n,e),e=Cn,(ce===null?e.memoizedState:ce.next)===null&&(e=e.alternate,tn.H=e===null||e.memoizedState===null?zf:Rf),n}function lo(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Qa(n);if(n.$$typeof===X)return;if(n.$$typeof===P)return ke(n)}throw Error(r(438,String(n)))}function rr(n){var e=null,t=Cn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var i=Cn.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=io(),Cn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),i=0;i<n;i++)t[i]=ie;return e.index++,t}function Bt(n,e){return typeof e=="function"?e(n):e}function ao(n){var e=ae();return ur(e,Bn,n)}function ur(n,e,t){var i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var o=n.baseQueue,c=i.pending;if(c!==null){if(o!==null){var y=o.next;o.next=c.next,c.next=y}e.baseQueue=o=c,i.pending=null}if(c=n.baseState,o===null)n.memoizedState=c;else{e=o.next;var b=y=null,C=null,Q=e,D=!1;do{var V=Q.lane&-536870913;if(V!==Q.lane?(Mn&V)===V:(Ut&V)===V){var M=Q.revertLane;if(M===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),V===zi&&(D=!0);else if((Ut&M)===M){Q=Q.next,M===zi&&(D=!0);continue}else V={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},C===null?(b=C=V,y=c):C=C.next=V,Cn.lanes|=M,fi|=M;V=Q.action,Hi&&t(c,V),c=Q.hasEagerState?Q.eagerState:t(c,V)}else M={lane:V,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},C===null?(b=C=M,y=c):C=C.next=M,Cn.lanes|=V,fi|=V;Q=Q.next}while(Q!==null&&Q!==e);if(C===null?y=c:C.next=b,!Ve(c,n.memoizedState)&&(re=!0,D&&(t=wl,t!==null)))throw t;n.memoizedState=c,n.baseState=y,n.baseQueue=C,i.lastRenderedState=c}return o===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function dr(n){var e=ae(),t=e.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=n;var i=t.dispatch,o=t.pending,c=e.memoizedState;if(o!==null){t.pending=null;var y=o=o.next;do c=n(c,y.action),y=y.next;while(y!==o);Ve(c,e.memoizedState)||(re=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,i]}function ef(n,e,t){var i=Cn,o=ae(),c=Tn;if(c){if(t===void 0)throw Error(r(407));t=t()}else t=e();var y=!Ve((Bn||o).memoizedState,t);if(y&&(o.memoizedState=t,re=!0),o=o.queue,gr(af.bind(null,i,o,n),[n]),n=o.getSnapshot!==e||y||ce!==null&&(ce.memoizedState.tag&1)!==0,Cl(n?9:8,{destroy:void 0},lf.bind(null,i,o,t,e),null),n){if(i.flags|=2048,Ln===null)throw Error(r(349));c||(Ut&127)!==0||tf(i,e,t)}return t}function tf(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Cn.updateQueue,e===null?(e=io(),Cn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lf(n,e,t,i){e.value=t,e.getSnapshot=i,sf(e)&&of(n)}function af(n,e,t){return t(function(){sf(e)&&of(n)})}function sf(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ve(n,t)}catch{return!0}}function of(n){var e=Ni(n,2);e!==null&&Ue(e,n,2)}function hr(n){var e=Qe();if(typeof n=="function"){var t=n;if(n=t(),Hi){Jt(!0);try{t()}finally{Jt(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:n},e}function cf(n,e,t,i){return n.baseState=t,ur(n,Bn,typeof i=="function"?i:Bt)}function t1(n,e,t,i,o){if(co(n))throw Error(r(485));if(n=e.action,n!==null){var c={payload:o,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){c.listeners.push(y)}};tn.T!==null?t(!0):c.isTransition=!1,i(c),t=e.pending,t===null?(c.next=e.pending=c,rf(e,c)):(c.next=t.next,e.pending=t.next=c)}}function rf(n,e){var t=e.action,i=e.payload,o=n.state;if(e.isTransition){var c=tn.T,y={};y.types=c!==null?c.types:null,tn.T=y;try{var b=t(o,i),C=tn.S;C!==null&&C(y,b),uf(n,e,b)}catch(Q){fr(n,e,Q)}finally{c!==null&&y.types!==null&&(c.types=y.types),tn.T=c}}else try{c=t(o,i),uf(n,e,c)}catch(Q){fr(n,e,Q)}}function uf(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){df(n,e,i)},function(i){return fr(n,e,i)}):df(n,e,t)}function df(n,e,t){e.status="fulfilled",e.value=t,hf(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,rf(n,t)))}function fr(n,e,t){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=t,hf(e),e=e.next;while(e!==i)}n.action=null}function hf(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function ff(n,e){return e}function gf(n,e){if(Tn){var t=Ln.formState;if(t!==null){n:{var i=Cn;if(Tn){if(Gn){e:{for(var o=Gn,c=ot;o.nodeType!==8;){if(!c){o=null;break e}if(o=rt(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Gn=rt(o.nextSibling),i=o.data==="F!";break n}}ei(i)}i=!1}i&&(e=t[0])}}return t=Qe(),t.memoizedState=t.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ff,lastRenderedState:e},t.queue=i,t=Qf.bind(null,Cn,i),i.dispatch=t,i=hr(!1),c=vr.bind(null,Cn,!1,i.queue),i=Qe(),o={state:e,dispatch:null,action:n,pending:null},i.queue=o,t=t1.bind(null,Cn,o,c,t),o.dispatch=t,i.memoizedState=n,[e,t,!1]}function mf(n){var e=ae();return pf(e,Bn,n)}function pf(n,e,t){if(e=ur(n,e,ff)[0],n=ao(Bt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Qa(e)}catch(y){throw y===bl?Zs:y}else i=e;e=ae();var o=e.queue,c=o.dispatch;return t!==e.memoizedState&&(Cn.flags|=2048,Cl(9,{destroy:void 0},i1.bind(null,o,t),null)),[i,c,n]}function i1(n,e){n.action=e}function yf(n){var e=ae(),t=Bn;if(t!==null)return pf(e,t,n);ae(),e=e.memoizedState,t=ae();var i=t.queue.dispatch;return t.memoizedState=n,[e,i,!1]}function Cl(n,e,t,i){return n={tag:n,create:t,deps:i,inst:e,next:null},e=Cn.updateQueue,e===null&&(e=io(),Cn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n),n}function _f(){return ae().memoizedState}function so(n,e,t,i){var o=Qe();Cn.flags|=n,o.memoizedState=Cl(1|e,{destroy:void 0},t,i===void 0?null:i)}function oo(n,e,t,i){var o=ae();i=i===void 0?null:i;var c=o.memoizedState.inst;Bn!==null&&i!==null&&lr(i,Bn.memoizedState.deps)?o.memoizedState=Cl(e,c,t,i):(Cn.flags|=n,o.memoizedState=Cl(1|e,c,t,i))}function vf(n,e){so(8390656,8,n,e)}function gr(n,e){oo(2048,8,n,e)}function l1(n){Cn.flags|=4;var e=Cn.updateQueue;if(e===null)e=io(),Cn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function kf(n){var e=ae().memoizedState;return l1({ref:e,nextImpl:n}),function(){if((Dn&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function wf(n,e){return oo(4,2,n,e)}function bf(n,e){return oo(4,4,n,e)}function xf(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Sf(n,e,t){t=t!=null?t.concat([n]):null,oo(4,4,xf.bind(null,e,n),t)}function mr(){}function Ef(n,e){var t=ae();e=e===void 0?null:e;var i=t.memoizedState;return e!==null&&lr(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Cf(n,e){var t=ae();e=e===void 0?null:e;var i=t.memoizedState;if(e!==null&&lr(e,i[1]))return i[0];if(i=n(),Hi){Jt(!0);try{n()}finally{Jt(!1)}}return t.memoizedState=[i,e],i}function pr(n,e,t){return t===void 0||(Ut&1073741824)!==0&&(Mn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=zg(),Cn.lanes|=n,fi|=n,t)}function Af(n,e,t,i){return Ve(t,e)?t:oi.current!==null?(n=pr(n,t,i),Ve(n,e)||(re=!0),n):(Ut&106)===0||(Ut&1073741824)!==0&&(Mn&261930)===0?(re=!0,n.memoizedState=t):(n=zg(),Cn.lanes|=n,fi|=n,e)}function Tf(n,e,t,i,o){var c=dn.p;dn.p=c!==0&&8>c?c:8;var y=tn.T,b={};b.types=y!==null?y.types:null,tn.T=b,vr(n,!1,e,t);try{var C=o(),Q=tn.S;if(Q!==null&&Q(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var D=Wy(C,i);Ka(n,e,D,Je(n))}else Ka(n,e,i,Je(n))}catch(V){Ka(n,e,{then:function(){},status:"rejected",reason:V},Je())}finally{dn.p=c,y!==null&&b.types!==null&&(y.types=b.types),tn.T=y}}function a1(){}function yr(n,e,t,i){if(n.tag!==5)throw Error(r(476));var o=jf(n).queue;Tf(n,o,e,fe,t===null?a1:function(){return Nf(n),t(i)})}function jf(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:fe},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Nf(n){var e=jf(n);e.next===null&&(e=n.alternate.memoizedState),Ka(n,e.next.queue,{},Je())}function _r(){return ke(Vl)}function Mf(){return ae().memoizedState}function qf(){return ae().memoizedState}function s1(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=Je();n=ai(t);var i=si(e,n,t);i!==null&&(Ue(i,e,t),Ta(i,e,t)),e={cache:Gc()},n.payload=e;return}e=e.return}}function o1(n,e,t){var i=Je();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},co(n)?Kf(e,t):(t=Rc(n,e,t,i),t!==null&&(Ue(t,n,i),Of(t,e,i)))}function Qf(n,e,t){var i=Je();Ka(n,e,t,i)}function Ka(n,e,t,i){var o={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(co(n))Kf(e,o);else{var c=n.alternate;if(n.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var y=e.lastRenderedState,b=c(y,t);if(o.hasEagerState=!0,o.eagerState=b,Ve(b,y))return Ys(n,e,o,0),Ln===null&&Ds(),!1}catch{}finally{}if(t=Rc(n,e,o,i),t!==null)return Ue(t,n,i),Of(t,e,i),!0}return!1}function vr(n,e,t,i){if(i={lane:2,revertLane:ru(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},co(n)){if(e)throw Error(r(479))}else e=Rc(n,t,i,2),e!==null&&Ue(e,n,2)}function co(n){var e=n.alternate;return n===Cn||e!==null&&e===Cn}function Kf(n,e){Sl=eo=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Of(n,e,t){if((t&4194048)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Od(n,t)}}var ro={readContext:ke,use:lo,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useLayoutEffect:ee,useInsertionEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useSyncExternalStore:ee,useId:ee,useHostTransitionStatus:ee,useFormState:ee,useActionState:ee,useOptimistic:ee,useMemoCache:ee,useCacheRefresh:ee,useEffectEvent:ee},zf={readContext:ke,use:lo,useCallback:function(n,e){return Qe().memoizedState=[n,e===void 0?null:e],n},useContext:ke,useEffect:vf,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,so(4194308,4,xf.bind(null,e,n),t)},useLayoutEffect:function(n,e){return so(4194308,4,n,e)},useInsertionEffect:function(n,e){so(4,2,n,e)},useMemo:function(n,e){var t=Qe();e=e===void 0?null:e;var i=n();if(Hi){Jt(!0);try{n()}finally{Jt(!1)}}return t.memoizedState=[i,e],i},useReducer:function(n,e,t){var i=Qe();if(t!==void 0){var o=t(e);if(Hi){Jt(!0);try{t(e)}finally{Jt(!1)}}}else o=e;return i.memoizedState=i.baseState=o,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:o},i.queue=n,n=n.dispatch=o1.bind(null,Cn,n),[i.memoizedState,n]},useRef:function(n){var e=Qe();return n={current:n},e.memoizedState=n},useState:function(n){n=hr(n);var e=n.queue,t=Qf.bind(null,Cn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:mr,useDeferredValue:function(n,e){var t=Qe();return pr(t,n,e)},useTransition:function(){var n=hr(!1);return n=Tf.bind(null,Cn,n.queue,!0,!1),Qe().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var i=Cn,o=Qe();if(Tn){if(t===void 0)throw Error(r(407));t=t()}else{if(t=e(),Ln===null)throw Error(r(349));(Mn&127)!==0||tf(i,e,t)}o.memoizedState=t;var c={value:t,getSnapshot:e};return o.queue=c,vf(af.bind(null,i,c,n),[n]),i.flags|=2048,Cl(9,{destroy:void 0},lf.bind(null,i,c,t,e),null),t},useId:function(){var n=Qe(),e=Ln.identifierPrefix;if(Tn){var t=xt,i=bt;t=(i&~(1<<32-Be(i)-1)).toString(32)+t,e="_"+e+"R_"+t,t=to++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=n1++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:_r,useFormState:gf,useActionState:gf,useOptimistic:function(n){var e=Qe();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=vr.bind(null,Cn,!0,t),t.dispatch=e,[n,e]},useMemoCache:rr,useCacheRefresh:function(){return Qe().memoizedState=s1.bind(null,Cn)},useEffectEvent:function(n){var e=Qe(),t={impl:n};return e.memoizedState=t,function(){if((Dn&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}},Rf={readContext:ke,use:lo,useCallback:Ef,useContext:ke,useEffect:gr,useImperativeHandle:Sf,useInsertionEffect:wf,useLayoutEffect:bf,useMemo:Cf,useReducer:ao,useRef:_f,useState:function(){return ao(Bt)},useDebugValue:mr,useDeferredValue:function(n,e){var t=ae();return Af(t,Bn.memoizedState,n,e)},useTransition:function(){var n=ao(Bt)[0],e=ae().memoizedState;return[typeof n=="boolean"?n:Qa(n),e]},useSyncExternalStore:ef,useId:Mf,useHostTransitionStatus:_r,useFormState:mf,useActionState:mf,useOptimistic:function(n,e){var t=ae();return cf(t,Bn,n,e)},useMemoCache:rr,useCacheRefresh:qf,useEffectEvent:kf},c1={readContext:ke,use:lo,useCallback:Ef,useContext:ke,useEffect:gr,useImperativeHandle:Sf,useInsertionEffect:wf,useLayoutEffect:bf,useMemo:Cf,useReducer:dr,useRef:_f,useState:function(){return dr(Bt)},useDebugValue:mr,useDeferredValue:function(n,e){var t=ae();return Bn===null?pr(t,n,e):Af(t,Bn.memoizedState,n,e)},useTransition:function(){var n=dr(Bt)[0],e=ae().memoizedState;return[typeof n=="boolean"?n:Qa(n),e]},useSyncExternalStore:ef,useId:Mf,useHostTransitionStatus:_r,useFormState:yf,useActionState:yf,useOptimistic:function(n,e){var t=ae();return Bn!==null?cf(t,Bn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:rr,useCacheRefresh:qf,useEffectEvent:kf};function kr(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:J({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wr={enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Je(),o=ai(i);o.payload=e,t!=null&&(o.callback=t),e=si(n,o,i),e!==null&&(Ue(e,n,i),Ta(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Je(),o=ai(i);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=si(n,o,i),e!==null&&(Ue(e,n,i),Ta(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Je(),i=ai(t);i.tag=2,e!=null&&(i.callback=e),e=si(n,i,t),e!==null&&(Ue(e,n,t),Ta(e,n,t))}};function Df(n,e,t,i,o,c,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,c,y):e.prototype&&e.prototype.isPureReactComponent?!ka(t,i)||!ka(o,c):!0}function Yf(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wr.enqueueReplaceState(e,e.state,null)}function Ui(n,e){var t=e;if("ref"in e){t={};for(var i in e)i!=="ref"&&(t[i]=e[i])}if(n=n.defaultProps){t===e&&(t=J({},t));for(var o in n)t[o]===void 0&&(t[o]=n[o])}return t}function If(n){Rs(n)}function Hf(n){console.error(n)}function Uf(n){Rs(n)}function uo(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Bf(n,e,t){try{var i=n.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function br(n,e,t){return t=ai(t),t.tag=3,t.payload={element:null},t.callback=function(){uo(n,e)},t}function Lf(n){return n=ai(n),n.tag=3,n}function Vf(n,e,t,i){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;n.payload=function(){return o(c)},n.callback=function(){Bf(e,t,i)}}var y=t.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(n.callback=function(){Bf(e,t,i),typeof o!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function r1(n,e,t,i,o){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=t.alternate,e!==null&&Ki(e,t,o,!0),t=we.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Ae===null?qo():t.alternate===null&&te===0&&(te=3),t.flags&=-257,t.flags|=65536,t.lanes=o,i===Js?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([i]):e.add(i),su(n,i,o)),!1;case 22:return t.flags|=65536,i===Js?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([i]):t.add(i)),su(n,i,o)),!1}throw Error(r(435,t.tag))}return su(n,i,o),qo(),!1}if(Tn)return e=we.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,i!==Uc&&(n=Error(r(422),{cause:i}),xa(lt(n,t)))):(i!==Uc&&(e=Error(r(423),{cause:i}),xa(lt(e,t))),n=n.current.alternate,n.flags|=65536,o&=-o,n.lanes|=o,i=lt(i,t),o=br(n.stateNode,i,o),Pc(n,o),te!==4&&(te=2)),!1;var c=Error(r(520),{cause:i});if(c=lt(c,t),Ua===null?Ua=[c]:Ua.push(c),te!==4&&(te=2),e===null)return!0;i=lt(i,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=o&-o,t.lanes|=n,n=br(t.stateNode,i,n),Pc(t,n),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(gi===null||!gi.has(c))))return t.flags|=65536,o&=-o,t.lanes|=o,o=Lf(o),Vf(o,n,t,i),Pc(t,o),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var xr=Error(r(461)),re=!1;function he(n,e,t,i){e.child=n===null?$h(e,null,t,i):Ii(e,n.child,t,i)}function Gf(n,e,t,i,o){t=t.render;var c=e.ref;if("ref"in i){var y={};for(var b in i)b!=="ref"&&(y[b]=i[b])}else y=i;return Oi(e),i=ar(n,e,t,y,c,o),b=sr(),n!==null&&!re?(or(n,e,o),Lt(n,e,o)):(Tn&&b&&Bs(e),e.flags|=1,he(n,e,i,o),e.child)}function Xf(n,e,t,i,o){if(n===null){var c=t.type;return typeof c=="function"&&!Dc(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,$f(n,e,c,i,o)):(n=Hs(t.type,null,i,e,e.mode,o),n.ref=e.ref,n.return=e,e.child=n)}if(c=n.child,!Mr(n,o)){var y=c.memoizedProps;if(t=t.compare,t=t!==null?t:ka,t(y,i)&&n.ref===e.ref)return Lt(n,e,o)}return e.flags|=1,n=Dt(c,i),n.ref=e.ref,n.return=e,e.child=n}function $f(n,e,t,i,o){if(n!==null){var c=n.memoizedProps;if(ka(c,i)&&n.ref===e.ref)if(re=!1,e.pendingProps=i=c,Mr(n,o))(n.flags&131072)!==0&&(re=!0);else return e.lanes=n.lanes,Lt(n,e,o)}return Sr(n,e,t,i,o)}function Zf(n,e,t,i){var o=i.children,c=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|t:t,n!==null){for(i=e.child=n.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~c}else i=0,e.child=null;return Jf(n,e,c,t,i)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&$s(e,c!==null?c.cachePool:null),c!==null?Fh(e,c):nr(),Ph(e);else return i=e.lanes=536870912,Jf(n,e,c!==null?c.baseLanes|t:t,t,i)}else c!==null?($s(e,c.cachePool),Fh(e,c),ri(),e.memoizedState=null):(n!==null&&$s(e,null),nr(),ri());return he(n,e,o,t),e.child}function Oa(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Jf(n,e,t,i,o){var c=$c();return c=c===null?null:{parent:oe._currentValue,pool:c},e.memoizedState={baseLanes:t,cachePool:c},n!==null&&$s(e,null),nr(),Ph(e),n!==null&&Ki(n,e,i,!0),e.childLanes=o,null}function ho(n,e){return e=fo({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Ff(n,e,t){return Ii(e,n.child,null,t),n=ho(e,e.pendingProps),n.flags|=2,Ge(e),e.memoizedState=null,n}function u1(n,e,t){var i=e.pendingProps,o=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Tn){if(i.mode==="hidden")return n=ho(e,i),e.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Oa(null,n);if(tr(e),(n=Gn)?(n=xm(n,ot),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Wt!==null?{id:bt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=Qh(n),t.return=e,e.child=t,pe=e,Gn=null)):n=null,n===null)throw ei(e);return e.lanes=536870912,null}return ho(e,i)}var c=n.memoizedState;if(c!==null){var y=c.dehydrated;if(tr(e),o)if(e.flags&256)e.flags&=-257,e=Ff(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(r(558));else if(re||Ki(n,e,t,!1),o=(t&n.childLanes)!==0,re||o){if(oi.current===null){if(i=Ln,i!==null&&(y=zd(i,t),y!==0&&y!==c.retryLane))throw c.retryLane=y,Ni(n,y),Ue(i,n,y),xr;qo()}e=Ff(n,e,t)}else n=c.treeContext,Gn=rt(y.nextSibling),pe=e,Tn=!0,ni=null,ot=!1,n!==null&&zh(e,n),e=ho(e,i),e.flags|=134221824;return e}return n=Dt(n.child,{mode:i.mode,children:i.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Al(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Sr(n,e,t,i,o){return Oi(e),t=ar(n,e,t,i,void 0,o),i=sr(),n!==null&&!re?(or(n,e,o),Lt(n,e,o)):(Tn&&i&&Bs(e),e.flags|=1,he(n,e,t,o),e.child)}function Pf(n,e,t,i,o,c){return Oi(e),e.updateQueue=null,t=nf(e,i,t,o),Wh(n),i=sr(),n!==null&&!re?(or(n,e,c),Lt(n,e,c)):(Tn&&i&&Bs(e),e.flags|=1,he(n,e,t,c),e.child)}function Wf(n,e,t,i,o){if(Oi(e),e.stateNode===null){var c=yl,y=t.contextType;typeof y=="object"&&y!==null&&(c=ke(y)),c=new t(i,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=wr,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=i,c.state=e.memoizedState,c.refs={},Jc(e),y=t.contextType,c.context=typeof y=="object"&&y!==null?ke(y):yl,c.state=e.memoizedState,y=t.getDerivedStateFromProps,typeof y=="function"&&(kr(e,t,y,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(y=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),y!==c.state&&wr.enqueueReplaceState(c,c.state,null),Na(e,i,c,o),ja(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(n===null){c=e.stateNode;var b=e.memoizedProps,C=Ui(t,b);c.props=C;var Q=c.context,D=t.contextType;y=yl,typeof D=="object"&&D!==null&&(y=ke(D));var V=t.getDerivedStateFromProps;D=typeof V=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||Q!==y)&&Yf(e,c,i,y),li=!1;var M=e.memoizedState;c.state=M,Na(e,i,c,o),ja(),Q=e.memoizedState,b||M!==Q||li?(typeof V=="function"&&(kr(e,t,V,i),Q=e.memoizedState),(C=li||Df(e,t,C,i,M,Q,y))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=Q),c.props=i,c.state=Q,c.context=y,i=C):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{c=e.stateNode,Fc(n,e),y=e.memoizedProps,D=Ui(t,y),c.props=D,V=e.pendingProps,M=c.context,Q=t.contextType,C=yl,typeof Q=="object"&&Q!==null&&(C=ke(Q)),b=t.getDerivedStateFromProps,(Q=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y!==V||M!==C)&&Yf(e,c,i,C),li=!1,M=e.memoizedState,c.state=M,Na(e,i,c,o),ja();var O=e.memoizedState;y!==V||M!==O||li||n!==null&&n.dependencies!==null&&Gs(n.dependencies)?(typeof b=="function"&&(kr(e,t,b,i),O=e.memoizedState),(D=li||Df(e,t,D,i,M,O,C)||n!==null&&n.dependencies!==null&&Gs(n.dependencies))?(Q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,O,C),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,O,C)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||y===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=O),c.props=i,c.state=O,c.context=C,i=D):(typeof c.componentDidUpdate!="function"||y===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),i=!1)}return c=i,Al(n,e),i=(e.flags&128)!==0,c||i?(c=e.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,n!==null&&i?(e.child=Ii(e,n.child,null,o),e.child=Ii(e,null,t,o)):he(n,e,t,o),e.memoizedState=c.state,n=e.child):n=Lt(n,e,o),n}function ng(n,e,t,i){return qi(),e.flags|=256,he(n,e,t,i),e.child}var Er={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cr(n){return{baseLanes:n,cachePool:Uh()}}function Ar(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=Ze),n}function eg(n,e,t){var i=e.pendingProps,o=!1,c=(e.flags&128)!==0,y;if((y=c)||(y=n!==null&&n.memoizedState===null?!1:(be.current&2)!==0),y&&(o=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,n===null){if(Tn){if(o?ci(e):ri(),(n=Gn)?(n=xm(n,ot),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Wt!==null?{id:bt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=Qh(n),t.return=e,e.child=t,pe=e,Gn=null)):n=null,n===null)throw ei(e);return Cu(n)?e.lanes=32:e.lanes=536870912,null}return c=i.children,i=i.fallback,o?(ri(),o=e.mode,c=fo({mode:"hidden",children:c},o),i=Mi(i,o,t,null),c.return=e,i.return=e,c.sibling=i,e.child=c,i=e.child,i.memoizedState=Cr(t),i.childLanes=Ar(n,y,t),e.memoizedState=Er,Oa(null,i)):(ci(e),Tr(e,c))}var b=n.memoizedState;if(b!==null){var C=b.dehydrated;if(C!==null)return d1(n,e,c,y,i,C,b,t)}return o?(ri(),o=i.fallback,c=e.mode,b=n.child,C=b.sibling,i=Dt(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&1206910976,C!==null?o=Dt(C,o):(o=Mi(o,c,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,Oa(null,i),i=e.child,o=n.child.memoizedState,o===null?o=Cr(t):(c=o.cachePool,c!==null?(b=oe._currentValue,c=c.parent!==b?{parent:b,pool:b}:c):c=Uh(),o={baseLanes:o.baseLanes|t,cachePool:c}),i.memoizedState=o,i.childLanes=Ar(n,y,t),e.memoizedState=Er,Oa(n.child,i)):(ci(e),t=n.child,n=t.sibling,t=Dt(t,{mode:"visible",children:i.children}),t.return=e,t.sibling=null,n!==null&&(y=e.deletions,y===null?(e.deletions=[n],e.flags|=16):y.push(n)),e.child=t,e.memoizedState=null,t)}function Tr(n,e){return e=fo({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function fo(n,e){return n=De(22,n,null,e),n.lanes=0,n}function go(n,e,t){return Ii(e,n.child,null,t),n=Tr(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function d1(n,e,t,i,o,c,y,b){if(t)return e.flags&256?(ci(e),e.flags&=-257,go(n,e,b)):e.memoizedState!==null?(ri(),e.child=n.child,e.flags|=128,null):(ri(),c=o.fallback,y=e.mode,o=fo({mode:"visible",children:o.children},y),c=Mi(c,y,b,null),c.flags|=2,o.return=e,c.return=e,o.sibling=c,e.child=o,Ii(e,n.child,null,b),o=e.child,o.memoizedState=Cr(b),o.childLanes=Ar(n,i,b),e.memoizedState=Er,Oa(null,o));if(ci(e),Cu(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var C=i.dgst;return i=C,i!==""&&(o=Error(r(419)),o.stack="",o.digest=i,xa({value:o,source:null,stack:null})),go(n,e,b)}if(re||Ki(n,e,b,!1),i=(b&n.childLanes)!==0,re||i){if(oi.current!==null)return go(n,e,b);if(i=Ln,i!==null&&(o=zd(i,b),o!==0&&o!==y.retryLane))throw y.retryLane=o,Ni(n,o),Ue(i,n,o),xr;return Eu(c)||qo(),go(n,e,b)}return Eu(c)?(e.flags|=192,e.child=n.child,null):(n=y.treeContext,Gn=rt(c.nextSibling),pe=e,Tn=!0,ni=null,ot=!1,n!==null&&zh(e,n),e=Tr(e,o.children),e.flags|=134221824,e)}function tg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Vs(n.return,e,t)}function ig(n){for(var e=null;n!==null;){var t=n.alternate;t!==null&&no(t)===null&&(e=n),n=n.sibling}return e}function mo(n,e,t,i,o,c){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:o,treeForkCount:c}:(y.isBackwards=e,y.rendering=null,y.renderingStartTime=0,y.last=i,y.tail=t,y.tailMode=o,y.treeForkCount=c)}function jr(n){var e=n.child;for(n.child=null;e!==null;){var t=e.sibling;e.sibling=n.child,n.child=e,e=t}}function Nr(n,e,t){var i=e.pendingProps,o=i.revealOrder,c=i.tail;i=i.children;var y=be.current;if(e.flags&128)return Ma(e,y),null;var b=(y&2)!==0;if(b?(y=y&1|2,e.flags|=128):y&=1,Ma(e,y),o==="backwards"&&n!==null?(jr(n),he(n,e,i,t),jr(n)):he(n,e,i,t),i=Tn?ba:0,!b&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tg(n,t,e);else if(n.tag===19)tg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(o){case"backwards":t=ig(e.child),t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null,jr(e)),mo(e,!0,o,null,c,i);break;case"unstable_legacy-backwards":for(t=null,o=e.child,e.child=null;o!==null;){if(n=o.alternate,n!==null&&no(n)===null){e.child=o;break}n=o.sibling,o.sibling=t,t=o,o=n}mo(e,!0,t,null,c,i);break;case"together":mo(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:t=ig(e.child),t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null),mo(e,!1,o,t,c,i)}return e.child}function lg(n,e,t){var i=e.pendingProps;return ti(e,e.type,i.value),he(n,e,i.children,t),e.child}function Lt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),fi|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Ki(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(r(153));if(e.child!==null){for(n=e.child,t=Dt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Dt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Mr(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Gs(n)))}function h1(n,e,t){switch(e.tag){case 3:Zn(e,e.stateNode.containerInfo),ti(e,oe,n.memoizedState.cache),qi();break;case 27:case 5:sa(e);break;case 4:Zn(e,e.stateNode.containerInfo);break;case 10:ti(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,tr(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return ci(e),e.flags|=128,null;i=Ki(n,e,t,!1);var o=e.child.childLanes;return i||(t&o)!==0?eg(n,e,t):(ci(e),n=Lt(n,e,t),n!==null?n.sibling:null)}ci(e);break;case 19:if(e.flags&128)return Nr(n,e,t);if(o=(n.flags&128)!==0,i=(t&e.childLanes)!==0,i||(Ki(n,e,t,!1),i=(t&e.childLanes)!==0),o){if(i)return Nr(n,e,t);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ma(e,be.current),i)break;return null;case 22:return e.lanes=0,Zf(n,e,t,e.pendingProps);case 24:ti(e,oe,n.memoizedState.cache)}return Lt(n,e,t)}function ag(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)re=!0;else{if(!Mr(n,t)&&(e.flags&128)===0)return re=!1,h1(n,e,t);re=(n.flags&131072)!==0}else re=!1,Tn&&(e.flags&1048576)!==0&&Oh(e,ba,e.index);switch(e.lanes=0,e.tag){case 16:n:{var i=e.pendingProps;if(n=Di(e.elementType),e.type=n,typeof n=="function")Dc(n)?(i=Ui(n,i),e.tag=1,e=Wf(null,e,n,i,t)):(e.tag=0,e=Sr(null,e,n,i,t));else{if(n!=null){var o=n.$$typeof;if(o===I){e.tag=11,e=Gf(null,e,n,i,t);break n}else if(o===z){e.tag=14,e=Xf(null,e,n,i,t);break n}else if(o===P){e.tag=10,e.type=n,e=lg(null,e,t);break n}}throw e=Sn(n)||n,Error(r(306,e,""))}}return e;case 0:return Sr(n,e,e.type,e.pendingProps,t);case 1:return i=e.type,o=Ui(i,e.pendingProps),Wf(n,e,i,o,t);case 3:n:{if(Zn(e,e.stateNode.containerInfo),n===null)throw Error(r(387));i=e.pendingProps;var c=e.memoizedState;o=c.element,Fc(n,e),Na(e,i,null,t);var y=e.memoizedState;if(i=y.cache,ti(e,oe,i),i!==c.cache&&Vc(e,[oe],t,!0),ja(),i=y.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=ng(n,e,i,t);break n}else if(i!==o){o=lt(Error(r(424)),e),xa(o),e=ng(n,e,i,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Gn=rt(n.firstChild),pe=e,Tn=!0,ni=null,ot=!0,t=$h(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(qi(),i===o){e=Lt(n,e,t);break n}he(n,e,i,t)}e=e.child}return e;case 26:return Al(n,e),n===null?(t=Nm(e.type,null,e.pendingProps,null))?e.memoizedState=t:Tn||(e.stateNode=rm(e.type,e.pendingProps,ne.current,e)):e.memoizedState=Nm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return sa(e),n===null&&Tn&&(i=e.stateNode=Cm(e.type,e.pendingProps,ne.current),pe=e,ot=!0,o=Gn,yi(e.type)?(Au=o,Gn=rt(i.firstChild)):Gn=o),he(n,e,e.pendingProps.children,t),Al(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Tn&&((o=i=Gn)&&(i=s_(i,e.type,e.pendingProps,ot),i!==null?(e.stateNode=i,pe=e,Gn=rt(i.firstChild),ot=!1,o=!0):o=!1),o||ei(e)),sa(e),o=e.type,c=e.pendingProps,y=n!==null?n.memoizedProps:null,i=c.children,_u(o,c)?i=null:y!==null&&_u(o,y)&&(e.flags|=32),e.memoizedState!==null&&(o=ar(n,e,e1,null,null,t),Vl._currentValue=o),Al(n,e),he(n,e,i,t),e.child;case 6:return n===null&&Tn&&((n=t=Gn)&&(t=o_(t,e.pendingProps,ot),t!==null?(e.stateNode=t,pe=e,Gn=null,n=!0):n=!1),n||ei(e)),null;case 13:return eg(n,e,t);case 4:return Zn(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ii(e,null,i,t):he(n,e,i,t),e.child;case 11:return Gf(n,e,e.type,e.pendingProps,t);case 7:return i=e.pendingProps,Al(n,e),he(n,e,i,t),e.child;case 8:return he(n,e,e.pendingProps.children,t),e.child;case 12:return he(n,e,e.pendingProps.children,t),e.child;case 10:return lg(n,e,t);case 9:return o=e.type._context,i=e.pendingProps.children,Oi(e),o=ke(o),i=i(o),e.flags|=1,he(n,e,i,t),e.child;case 14:return Xf(n,e,e.type,e.pendingProps,t);case 15:return $f(n,e,e.type,e.pendingProps,t);case 19:return Nr(n,e,t);case 31:return u1(n,e,t);case 22:return Zf(n,e,t,e.pendingProps);case 24:return Oi(e),i=ke(oe),n===null?(o=$c(),o===null&&(o=Ln,c=Gc(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=t),o=c),e.memoizedState={parent:i,cache:o},Jc(e),ti(e,oe,o)):((n.lanes&t)!==0&&(Fc(n,e),Na(e,null,null,t),ja()),o=n.memoizedState,c=e.memoizedState,o.parent!==i?(o={parent:i,cache:i},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),ti(e,oe,i)):(i=c.cache,ti(e,oe,i),i!==o.cache&&Vc(e,[oe],t,!0))),he(n,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=n===null?18882560:18874368:Tn&&Bs(e),n!==null&&n.memoizedProps.name!==i.name?e.flags|=4194816:Al(n,e),he(n,e,i.children,t),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Vt(n){n.flags|=4}function qr(n,e,t,i,o){var c;if((c=(n.mode&32)!==0)&&(c=t===null?Km(e,i):Km(e,i)&&(i.src!==t.src||i.srcSet!==t.srcSet)),c){if(n.flags|=16777216,(o&335544128)===o)if(n.stateNode.complete)n.flags|=8192;else if(Ig())n.flags|=8192;else throw Yi=Js,Zc}else n.flags&=-16777217}function sg(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Om(e))if(Ig())n.flags|=8192;else throw Yi=Js,Zc}function po(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Qd():536870912,n.lanes|=e,ql|=e)}function za(n,e){if(!Tn)switch(n.tailMode){case"visible":break;case"collapsed":for(var t=n.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null;break;default:for(e=n.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null}}function Xn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var o=n.child;o!==null;)t|=o.lanes|o.childLanes,i|=o.subtreeFlags&1206910976,i|=o.flags&1206910976,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)t|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function f1(n,e,t){var i=e.pendingProps;switch(Hc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(e),null;case 1:return Xn(e),null;case 3:return t=e.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Ht(oe),et(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(kl(e)?Vt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Bc())),Xn(e),null;case 26:var o=e.type,c=e.memoizedState;return n===null?(Vt(e),c!==null?(Xn(e),sg(e,c)):(Xn(e),qr(e,o,null,i,t))):c?c!==n.memoizedState?(Vt(e),Xn(e),sg(e,c)):(Xn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==i&&Vt(e),Xn(e),qr(e,o,n,i,t)),null;case 27:if(ge(e),t=ne.current,o=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==i&&Vt(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return Xn(e),e.subtreeFlags&=-33554433,null}n=$n.current,kl(e)?Rh(e):(n=Cm(o,i,t),e.stateNode=n,Vt(e))}return Xn(e),e.subtreeFlags&=-33554433,null;case 5:if(ge(e),o=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==i&&Vt(e);else{if(!i){if(e.stateNode===null)throw Error(r(166));return Xn(e),e.subtreeFlags&=-33554433,null}if(c=$n.current,kl(e))Rh(e);else{var y=Xa(ne.current);switch(c){case 1:c=y.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=y.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=y.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?y.createElement("select",{is:i.is}):y.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?y.createElement(o,{is:i.is}):y.createElement(o)}}c[ve]=e,c[Re]=i;n:for(y=e.child;y!==null;){if(y.tag===5||y.tag===6)c.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break n;for(;y.sibling===null;){if(y.return===null||y.return===e)break n;y=y.return}y.sibling.return=y.return,y=y.sibling}e.stateNode=c;n:switch(Se(c,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}i&&Vt(e)}}return Xn(e),e.subtreeFlags&=-33554433,qr(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==i&&Vt(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(r(166));if(n=ne.current,kl(e)){if(n=e.stateNode,t=e.memoizedProps,i=null,o=pe,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}n[ve]=e,n=!!(n.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||am(n.nodeValue,t)),n||ei(e,!0)}else n=Xa(n).createTextNode(i),n[ve]=e,e.stateNode=n}return Xn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(i=kl(e),t!==null){if(n===null){if(!i)throw Error(r(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(557));n[ve]=e}else qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xn(e),n=!1}else t=Bc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(Ge(e),e):(Ge(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Xn(e),null;case 13:if(i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(o=kl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(r(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[ve]=e}else qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xn(e),o=!1}else o=Bc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(Ge(e),e):(Ge(e),null)}return Ge(e),(e.flags&128)!==0?(e.lanes=t,e):(t=i!==null,n=n!==null&&n.memoizedState!==null,t&&(i=e.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),po(e,e.updateQueue),Xn(e),null);case 4:return et(),n===null&&fu(e.stateNode.containerInfo),e.flags|=67108864,Xn(e),null;case 10:return Ht(e.type),Xn(e),null;case 19:if(ir(e),i=e.memoizedState,i===null)return Xn(e),null;if(o=(e.flags&128)!==0,c=i.rendering,c===null)if(o)za(i,!1);else{if(te!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(c=no(n),c!==null){for(e.flags|=128,za(i,!1),n=c.updateQueue,e.updateQueue=n,po(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)qh(t,n),t=t.sibling;return Ma(e,be.current&1|2),Tn&&Yt(e,i.treeForkCount),e.child}n=n.sibling}i.tail!==null&&B()>To&&(e.flags|=128,o=!0,za(i,!1),e.lanes=4194304)}else{if(!o)if(n=no(c),n!==null){if(e.flags|=128,o=!0,n=n.updateQueue,e.updateQueue=n,po(e,n),za(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!c.alternate&&!Tn)return Xn(e),null}else 2*B()-i.renderingStartTime>To&&t!==536870912&&(e.flags|=128,o=!0,za(i,!1),e.lanes=4194304);i.isBackwards?(c.sibling=e.child,e.child=c):(n=i.last,n!==null?n.sibling=c:e.child=c,i.last=c)}if(i.tail!==null){n=i.tail;n:{for(t=n;t!==null;){if(t.alternate!==null){t=!1;break n}t=t.sibling}t=!0}return i.rendering=n,i.tail=n.sibling,i.renderingStartTime=B(),n.sibling=null,c=be.current,c=o?c&1|2:c&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!t||Tn?Ma(e,c):(t=c,zn(we,e),zn(be,t),Ae===null&&(Ae=e)),Tn&&Yt(e,i.treeForkCount),n}return Xn(e),null;case 22:case 23:return Ge(e),er(),i=e.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(t&536870912)!==0&&(e.flags&128)===0&&(Xn(e),e.subtreeFlags&6&&(e.flags|=8192)):Xn(e),t=e.updateQueue,t!==null&&po(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==t&&(e.flags|=2048),n!==null&&Jn(Ri),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ht(oe),Xn(e),null;case 25:return null;case 30:return e.flags|=33554432,Xn(e),null}throw Error(r(156,e.tag))}function g1(n,e){switch(Hc(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ht(oe),et(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return ge(e),null;case 31:if(e.memoizedState!==null){if(Ge(e),e.alternate===null)throw Error(r(340));qi()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(Ge(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(r(340));qi()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ir(e),n=e.flags,n&65536?(e.flags=n&-65537|128,n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null),e.flags|=4,e):null;case 4:return et(),null;case 10:return Ht(e.type),null;case 22:case 23:return Ge(e),er(),n!==null&&Jn(Ri),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ht(oe),null;case 25:return null;default:return null}}function og(n,e){switch(Hc(e),e.tag){case 3:Ht(oe),et();break;case 26:case 27:case 5:ge(e);break;case 4:et();break;case 31:e.memoizedState!==null&&Ge(e);break;case 13:Ge(e);break;case 19:ir(e);break;case 10:Ht(e.type);break;case 22:case 23:Ge(e),er(),n!==null&&Jn(Ri);break;case 24:Ht(oe)}}function Ra(n,e){try{var t=e.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var o=i.next;t=o;do{if((t.tag&n)===n){i=void 0;var c=t.create,y=t.inst;i=c(),y.destroy=i}t=t.next}while(t!==o)}}catch(b){Hn(e,e.return,b)}}function ui(n,e,t){try{var i=e.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&n)===n){var y=i.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,o=e;var C=t,Q=b;try{Q()}catch(D){Hn(o,C,D)}}}i=i.next}while(i!==c)}}catch(D){Hn(e,e.return,D)}}function cg(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Jh(e,t)}catch(i){Hn(n,n.return,i)}}}function rg(n,e,t){t.props=Ui(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(i){Hn(n,e,i)}}function St(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:var o=n.stateNode,c=zt(n.memoizedProps,o);(o.ref===null||o.ref.name!==c)&&(o.ref=pm(c)),i=o.ref;break;case 7:if(n.stateNode===null){var y=new Fe(n);v(n.child,!1,l_,y,void 0,void 0),n.stateNode=y}i=n.stateNode;break;default:i=n.stateNode}typeof t=="function"?n.refCleanup=t(i):t.current=i}}catch(b){Hn(n,e,b)}}function xe(n,e){var t=n.ref,i=n.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(o){Hn(n,e,o)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Hn(n,e,o)}else t.current=null}function yo(n,e){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&e!==null)for(var t=0;t<e.length;t++)bm(n.stateNode,e[t])}function ug(n){for(var e=n.return;e!==null&&(Kr(e)&&bm(n.stateNode,e.stateNode),!Qr(e));)e=e.return}function Da(n){for(var e=n.return;e!==null&&(Kr(e)&&a_(n.stateNode,e.stateNode),!Qr(e));)e=e.return}function Qr(n){return n.tag===5||n.tag===3||n.tag===27}function Kr(n){return n&&n.tag===7&&n.stateNode!==null}function Or(n){var e=n.type,t=n.memoizedProps,i=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break n;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(o){Hn(n,n.return,o)}}function zr(n,e,t){try{var i=n.stateNode;I1(i,n.type,t,e),i[Re]=e}catch(o){Hn(n,n.return,o)}}function dg(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&yi(n.type)||n.tag===4}function Rr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||dg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&yi(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dr(n,e,t,i){var o=n.tag;if(o===5||o===6)o=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(o,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(o),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wt)),yo(n,i),Rn=!0;else if(o!==4&&(o===27&&(yo(n,i),i=null,yi(n.type)&&(t=n.stateNode,e=null)),n=n.child,n!==null))for(Dr(n,e,t,i),n=n.sibling;n!==null;)Dr(n,e,t,i),n=n.sibling}function _o(n,e,t,i){var o=n.tag;if(o===5||o===6)o=n.stateNode,e?t.insertBefore(o,e):t.appendChild(o),yo(n,i),Rn=!0;else if(o!==4&&(o===27&&(yo(n,i),i=null,yi(n.type)&&(t=n.stateNode)),n=n.child,n!==null))for(_o(n,e,t,i),n=n.sibling;n!==null;)_o(n,e,t,i),n=n.sibling}function hg(n){var e=n.stateNode,t=n.memoizedProps;try{for(var i=n.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);Se(e,i,t),e[ve]=n,e[Re]=t}catch(c){Hn(n,n.return,c)}}var vo=!1,Xe=null;function fg(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(vo=!0)}var Et=null;function gg(){var n=Et;return Et=null,n}var Ye=0;function Tl(n,e,t,i,o){return Ye=0,mg(n.child,e,t,i,o)}function mg(n,e,t,i,o){for(var c=!1;n!==null;){if(n.tag===5){var y=n.stateNode;if(i!==null){var b=wu(y);i.push(b),b.view&&(c=!0)}else c||wu(y).view&&(c=!0);vo=!0,gm(y,Ye===0?e:e+"_"+Ye,t),Ye++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&o||mg(n.child,e,t,i,o)&&(c=!0));n=n.sibling}return c}function Ct(n,e){for(;n!==null;)n.tag===5?mm(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&e||Ct(n.child,e)),n=n.sibling}function ko(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(ko(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var e=n.memoizedProps;if(e.name==null||e.name==="auto")throw Error(r(544));var t=e.name;e=Rt(e.default,e.share),e!=="none"&&(Tl(n,t,e,null,!1)||Ct(n.child,!1))}n=n.sibling}}function Yr(n,e){if(n.tag===30){var t=n.stateNode,i=n.memoizedProps,o=zt(i,t),c=Rt(i.default,t.paired?i.share:i.enter);c!=="none"?Tl(n,o,c,null,!1)?(ko(n),t.paired||e||zl(n,i.onEnter)):Ct(n.child,!1):ko(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Yr(n,e),n=n.sibling;else ko(n)}function Ir(n){if(Xe!==null&&Xe.size!==0){var e=Xe;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.memoizedProps,i=t.name;if(i!=null&&i!=="auto"){var o=e.get(i);if(o!==void 0){var c=Rt(t.default,t.share);if(c!=="none"&&(Tl(n,i,c,null,!1)?(c=n.stateNode,o.paired=c,c.paired=o,zl(n,t.onShare)):Ct(n.child,!1)),e.delete(i),e.size===0)break}}}Ir(n)}n=n.sibling}}}function Hr(n){if(n.tag===30){var e=n.memoizedProps,t=zt(e,n.stateNode),i=Xe!==null?Xe.get(t):void 0,o=Rt(e.default,i!==void 0?e.share:e.exit);o!=="none"&&(Tl(n,t,o,null,!1)?i!==void 0?(o=n.stateNode,i.paired=o,o.paired=i,Xe.delete(t),zl(n,e.onShare)):zl(n,e.onExit):Ct(n.child,!1)),Xe!==null&&Ir(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Hr(n),n=n.sibling;else Xe!==null&&Ir(n)}function pg(n){for(n=n.child;n!==null;){if(n.tag===30){var e=n.memoizedProps,t=zt(e,n.stateNode);e=Rt(e.default,e.update),n.flags&=-5,e!=="none"&&Tl(n,t,e,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&pg(n);n=n.sibling}}function Ur(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var e=n.stateNode;e.paired!==null&&(e.paired=null,Ct(n.child,!1))}Ur(n)}n=n.sibling}}function wo(n){if(n.tag===30)n.stateNode.paired=null,Ct(n.child,!1),Ur(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)wo(n),n=n.sibling;else Ur(n)}function yg(n){for(n=n.child;n!==null;)n.tag===30?Ct(n.child,!1):(n.subtreeFlags&33554432)!==0&&yg(n),n=n.sibling}function Br(n,e,t,i,o,c,y){for(var b=!1;e!==null;){if(e.tag===5){var C=e.stateNode;if(c!==null&&Ye<c.length){var Q=c[Ye],D=wu(C);(Q.view||D.view)&&(b=!0);var V;if(V=(n.flags&4)===0)if(D.clip)V=!0;else{V=Q.rect;var M=D.rect;V=V.y!==M.y||V.x!==M.x||V.height!==M.height||V.width!==M.width}V&&(n.flags|=4),D.abs?D=!Q.abs:(Q=Q.rect,D=D.rect,D=Q.height!==D.height||Q.width!==D.width),D&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&gm(C,Ye===0?t:t+"_"+Ye,o),b&&(n.flags&4)!==0||(Et===null&&(Et=[]),Et.push(C,Ye===0?i:i+"_"+Ye,e.memoizedProps)),Ye++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&y?n.flags|=e.flags&32:Br(n,e.child,t,i,o,c,y)&&(b=!0));e=e.sibling}return b}function _g(n,e){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,i=n.stateNode,o=zt(t,i),c=Rt(t.default,t.update),y;y=n.memoizedState,n.memoizedState=null,i=n;var b=n.child;Ye=0,o=Br(i,b,o,o,c,y,!1),(n.flags&4)!==0&&o&&zl(n,t.onUpdate)}else(n.subtreeFlags&33554432)!==0&&_g(n);n=n.sibling}}var ye=!1,Yn=!1,At=!1,Lr=!1,vg=typeof WeakSet=="function"?WeakSet:Set,_e=null,Tt=!1,Ya=!1,bo=!1,Vr=!1;function m1(n,e,t){if(n=n.containerInfo,pu=Gl,n=bh(n),Mc(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else n:{i=(i=n.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var c=o.anchorOffset,y=o.focusNode;o=o.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break n}var b=0,C=-1,Q=-1,D=0,V=0,M=n,O=null;e:for(;;){for(var on;M!==i||c!==0&&M.nodeType!==3||(C=b+c),M!==y||o!==0&&M.nodeType!==3||(Q=b+o),M.nodeType===3&&(b+=M.nodeValue.length),(on=M.firstChild)!==null;)O=M,M=on;for(;;){if(M===n)break e;if(O===i&&++D===c&&(C=b),O===y&&++V===o&&(Q=b),(on=M.nextSibling)!==null)break;M=O,O=M.parentNode}M=on}i=C===-1||Q===-1?null:{start:C,end:Q}}else i=null}i=i||{start:0,end:0}}else i=null;for(yu={focusedElem:n,selectionRange:i},Gl=!1,t=(t&335544064)===t,_e=e,e=t?9270:1024;_e!==null;){if(n=_e,t&&(i=n.deletions,i!==null))for(c=0;c<i.length;c++)t&&Hr(i[c]);if(n.alternate===null&&(n.flags&2)!==0)t&&fg(n),xo(t);else{if(n.tag===22){if(i=n.alternate,n.memoizedState!==null){i!==null&&i.memoizedState===null&&t&&Hr(i),xo(t);continue}else if(i!==null&&i.memoizedState!==null){t&&fg(n),xo(t);continue}}i=n.child,(n.subtreeFlags&e)!==0&&i!==null?(i.return=n,_e=i):(t&&pg(n),xo(t))}}Xe=null}function xo(n){for(;_e!==null;){var e=_e,t=n,i=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&i!==null){t=void 0,o=i.memoizedProps,i=i.memoizedState;var c=e.stateNode;try{var y=Ui(e.type,o);t=c.getSnapshotBeforeUpdate(y,i),c.__reactInternalSnapshotBeforeUpdate=t}catch(b){Hn(e,e.return,b)}}break;case 3:if((o&1024)!==0){if(i=e.stateNode.containerInfo,t=i.nodeType,t===9)Su(i);else if(t===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Su(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&i!==null&&(t=zt(i.memoizedProps,i.stateNode),o=e.memoizedProps,o=Rt(o.default,o.update),o!=="none"&&Tl(i,t,o,i.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(r(163))}if(i=e.sibling,i!==null){i.return=e.return,_e=i;break}_e=e.return}}function kg(n,e,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:jt(n,t),i&4&&Ra(5,t);break;case 1:if(jt(n,t),i&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(y){Hn(t,t.return,y)}else{var o=Ui(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(o,e,n.__reactInternalSnapshotBeforeUpdate)}catch(y){Hn(t,t.return,y)}}i&64&&cg(t),i&512&&St(t,t.return);break;case 3:if(jt(n,t),i&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Jh(n,e)}catch(y){Hn(t,t.return,y)}}break;case 27:e===null&&i&4&&hg(t);case 26:case 5:jt(n,t),e===null&&i&4&&Or(t),i&512&&St(t,t.return);break;case 12:jt(n,t);break;case 31:jt(n,t),i&4&&Sg(n,t);break;case 13:jt(n,t),i&4&&Eg(n,t),i&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=A1.bind(null,t),c_(n,t))));break;case 22:if(i=t.memoizedState!==null||ye,!i){var c=e!==null&&e.memoizedState!==null||Yn;e=ye,o=Yn,ye=i,(Yn=c)&&!o?(i=2,(t.subtreeFlags&8772)!==0&&(i|=1),pt(n,t,i)):jt(n,t),ye=e,Yn=o}break;case 30:jt(n,t),i&512&&St(t,t.return);break;case 7:i&512&&St(t,t.return);default:jt(n,t)}}function Gr(n,e){for(n=n.child;n!==null;)wg(n,e),n=n.sibling}function wg(n,e){switch(n.tag){case 5:case 26:try{var t=n.stateNode;if(e){var i=t.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var o=n.stateNode,c=n.memoizedProps.style,y=c!=null&&c.hasOwnProperty("display")?c.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(C){Hn(n,n.return,C)}Xr(n,e);break;case 6:try{n.stateNode.nodeValue=e?"":n.memoizedProps,Rn=!0}catch(C){Hn(n,n.return,C)}break;case 18:try{var b=n.stateNode;e?fm(b,!0):fm(n.stateNode,!1)}catch(C){Hn(n,n.return,C)}break;case 22:case 23:n.memoizedState===null&&Gr(n,e);break;default:Gr(n,e)}}function Xr(n,e){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var t=n,i=e;switch(t.tag){case 4:wg(t,i);break n;case 22:t.memoizedState===null&&Xr(t,i);break n;default:Xr(t,i)}}n=n.sibling}}function bg(n){var e=n.alternate;e!==null&&(n.alternate=null,bg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&As(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Fn=null,Ie=!1;function gt(n,e,t){for(t=t.child;t!==null;)xg(n,e,t),t=t.sibling}function xg(n,e,t){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Ne,t)}catch{}switch(t.tag){case 26:Yn||xe(t,e),gt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Yn&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Yn||xe(t,e),Da(t);var i=Fn,o=Ie;yi(t.type)&&(Fn=t.stateNode,Ie=!1),gt(n,e,t),Am(t.stateNode,t.type,t.memoizedProps),Fn=i,Ie=o;break;case 5:Yn||xe(t,e),Da(t);case 6:if(t.tag===6&&Da(t),i=Fn,o=Ie,Fn=null,gt(n,e,t),Fn=i,Ie=o,Fn!==null)if(Ie)try{(Fn.nodeType===9?Fn.body:Fn.nodeName==="HTML"?Fn.ownerDocument.body:Fn).removeChild(t.stateNode),Rn=!0}catch(c){Hn(t,e,c)}else try{Fn.removeChild(t.stateNode),Rn=!0}catch(c){Hn(t,e,c)}break;case 18:Fn!==null&&(Ie?(n=Fn,hm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Xl(n)):hm(Fn,t.stateNode));break;case 4:i=Fn,o=Ie,Fn=t.stateNode.containerInfo,Ie=!0,gt(n,e,t),Fn=i,Ie=o;break;case 0:case 11:case 14:case 15:ui(2,t,e),Yn||ui(4,t,e),gt(n,e,t);break;case 1:Yn||(xe(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"&&rg(t,e,i)),gt(n,e,t);break;case 21:gt(n,e,t);break;case 22:Yn=(i=Yn)||t.memoizedState!==null,gt(n,e,t),Yn=i;break;case 30:xe(t,e),gt(n,e,t);break;case 7:Yn||xe(t,e),gt(n,e,t);break;default:gt(n,e,t)}}function Sg(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Xl(n)}catch(t){Hn(e,e.return,t)}}}function Eg(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Xl(n)}catch(t){Hn(e,e.return,t)}}function p1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new vg),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new vg),e;default:throw Error(r(435,n.tag))}}function So(n,e){var t=p1(n);e.forEach(function(i){if(!t.has(i)){t.add(i);var o=T1.bind(null,n,i);i.then(o,o)}})}function Ke(n,e,t){var i=e.deletions;if(i!==null)for(var o=0;o<i.length;o++){var c=i[o],y=n,b=e,C=b;n:for(;C!==null;){switch(C.tag){case 27:if(yi(C.type)){Fn=C.stateNode,Ie=!1;break n}break;case 5:Fn=C.stateNode,Ie=!1;break n;case 3:case 4:Fn=C.stateNode.containerInfo,Ie=!0;break n}C=C.return}if(Fn===null)throw Error(r(160));xg(y,b,c),Fn=null,Ie=!1,y=c.alternate,y!==null&&(y.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Cg(e,n,t),e=e.sibling}var mt=null;function Cg(n,e,t){var i=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(o&4&&(i=n.updateQueue,i=i!==null?i.events:null,i!==null))for(var c=0;c<i.length;c++){var y=i[c];y.ref.impl=y.nextImpl}Ke(e,n,t),Oe(n),o&4&&(ui(3,n,n.return),Ra(3,n),ui(5,n,n.return));break;case 1:Ke(e,n,t),Oe(n),o&512&&(Yn||i===null||xe(i,i.return)),o&64&&ye&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(c=mt,Ke(e,n,t),Oe(n),o&512&&(Yn||i===null||xe(i,i.return)),o&4)if(o=i!==null?i.memoizedState:null,t=n.memoizedState,i===null)if(t===null)if(n.stateNode===null)if(ye)n.stateNode=rm(n.type,n.memoizedProps,e.containerInfo,n);else{n:{e=n.type,t=n.memoizedProps,o=c.ownerDocument||c;e:switch(e){case"title":i=o.getElementsByTagName("title")[0],(!i||i[da]||i[ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=o.createElement(e),o.head.insertBefore(i,o.querySelector("head > title"))),Se(i,e,t),i[ve]=n,me(i),e=i;break n;case"link":if(c=Qm("link","href",o).get(e+(t.href||""))){for(y=0;y<c.length;y++)if(i=c[y],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(y,1);break e}}i=o.createElement(e),Se(i,e,t),o.head.appendChild(i);break;case"meta":if(c=Qm("meta","content",o).get(e+(t.content||""))){for(y=0;y<c.length;y++)if(i=c[y],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(y,1);break e}}i=o.createElement(e),Se(i,e,t),o.head.appendChild(i);break;default:throw Error(r(468,e))}i[ve]=n,me(i),e=i}n.stateNode=e}else ye||Mu(c,n.type,n.stateNode);else n.stateNode=qm(c,t,n.memoizedProps);else o!==t?(o===null?(e=i.stateNode,e===null||Yn||e.parentNode.removeChild(e)):o.count--,t===null?ye||Mu(c,n.type,n.stateNode):qm(c,t,n.memoizedProps)):t===null&&n.stateNode!==null&&zr(n,n.memoizedProps,i.memoizedProps);break;case 27:Ke(e,n,t),Oe(n),o&512&&(Yn||i===null||xe(i,i.return)),i!==null&&o&4&&zr(n,n.memoizedProps,i.memoizedProps);break;case 5:if(c=At,At=!1,Ke(e,n,t),At=c,Oe(n),o&512&&(Yn||i===null||xe(i,i.return)),n.flags&32){e=n.stateNode;try{ul(e,""),Rn=!0}catch(D){Hn(n,n.return,D)}}o&4&&n.stateNode!=null&&(e=n.memoizedProps,zr(n,e,i!==null?i.memoizedProps:e)),o&1024&&(Lr=!0);break;case 6:if(Ke(e,n,t),Oe(n),o&4){if(n.stateNode===null)throw Error(r(162));e=n.memoizedProps,t=n.stateNode;try{t.nodeValue=e,Rn=!0}catch(D){Hn(n,n.return,D)}}break;case 3:if(Rn=!1,Yo=null,c=mt,mt=$a(e.containerInfo),Ke(e,n,t),mt=c,Oe(n),o&4&&i!==null&&i.memoizedState.isDehydrated)try{Xl(e.containerInfo)}catch(D){Hn(n,n.return,D)}Lr&&(Lr=!1,Ag(n)),Rn=!1;break;case 4:o=At,At=ye,i=Gd(),c=mt,mt=$a(n.stateNode.containerInfo),Ke(e,n,t),Oe(n),mt=c,Rn&&Ya&&(bo=!0),Rn=i,At=o;break;case 12:Ke(e,n,t),Oe(n);break;case 31:Ke(e,n,t),Oe(n),o&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,So(n,e)));break;case 13:Ke(e,n,t),Oe(n),n.child.flags&8192&&n.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ao=B()),o&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,So(n,e)));break;case 22:c=n.memoizedState!==null,y=i!==null&&i.memoizedState!==null;var b=ye,C=Yn,Q=At;ye=b||c,At=Q||c,Yn=C||y,Ke(e,n,t),Yn=C,At=Q,ye=b,Oe(n),o&8192&&(e=n.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||i===null||y||ye||Yn||(e=y||Yn,t=ye,i=Yn,ye=c||ye,Yn=e,di(n,2),ye=t,Yn=i),!c&&At||Gr(n,c)),o&4&&(e=n.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,So(n,t))));break;case 19:Ke(e,n,t),Oe(n),o&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,So(n,e)));break;case 30:o&512&&(Yn||i===null||xe(i,i.return)),o=Gd(),c=Ya,y=(t&335544064)===t,b=n.memoizedProps,Ya=y&&Rt(b.default,b.update)!=="none",Ke(e,n,t),Oe(n),y&&i!==null&&Rn&&(n.flags|=4),Ya=c,Rn=o;break;case 21:break;case 7:o&512&&(Yn||i===null||xe(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=n);default:Ke(e,n,t),Oe(n)}}function Oe(n){var e=n.flags;if(e&2){try{for(var t,i=n.return;i!==null;){if(dg(i)){t=i;break}i=i.return}i=null;for(var o=n.return;o!==null;){if(Kr(o)){var c=o.stateNode;i===null?i=[c]:i.push(c)}if(Qr(o))break;o=o.return}var y=i;if(t==null)throw Error(r(160));switch(t.tag){case 27:var b=t.stateNode,C=Rr(n);_o(n,C,b,y);break;case 5:var Q=t.stateNode;t.flags&32&&(ul(Q,""),t.flags&=-33);var D=Rr(n);_o(n,D,Q,y);break;case 3:case 4:var V=t.stateNode.containerInfo,M=Rr(n);Dr(n,M,V,y);break;default:throw Error(r(161))}}catch(O){Hn(n,n.return,O)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ag(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Ag(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Gl=!0,e.reset(),Gl=!1),n=n.sibling}}function jl(n,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Tg(e,n),e=e.sibling;else _g(e)}function Tg(n,e){var t=n.alternate;if(t===null)Yr(n,!1);else switch(n.tag){case 3:if(Vr=Tt=!1,gg(),jl(e,n),!Tt&&!bo){if(n=Et,n!==null)for(var i=0;i<n.length;i+=3){t=n[i];var o=n[i+1];mm(t,n[i+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}n=e.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Vr=!0}Et=null;break;case 5:jl(e,n);break;case 4:i=Tt,Tt=!1,jl(e,n),Tt&&(bo=!0),Tt=i;break;case 22:n.memoizedState===null&&(t.memoizedState!==null?Yr(n,!1):jl(e,n));break;case 30:i=Tt,o=gg(),Tt=!1,jl(e,n),Tt&&(n.flags|=4);var c=n.memoizedProps,y=n.stateNode;e=zt(c,y),y=zt(t.memoizedProps,y);var b=Rt(c.default,c.update);b==="none"?e=!1:(c=t.memoizedState,t.memoizedState=null,t=n.child,Ye=0,e=Br(n,t,e,y,b,c,!0),Ye!==(c===null?0:c.length)&&(n.flags|=32)),(n.flags&4)!==0&&e?(zl(n,n.memoizedProps.onUpdate),Et=o):o!==null&&(o.push.apply(o,Et),Et=o),Tt=(n.flags&32)!==0?!0:i;break;default:jl(e,n)}}function jt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)kg(n,e.alternate,e),e=e.sibling}function di(n,e){for(n=n.child;n!==null;){var t=n,i=e;switch(t.tag){case 0:case 11:case 14:case 15:ui(4,t,t.return),di(t,i);break;case 1:xe(t,t.return);var o=t.stateNode;typeof o.componentWillUnmount=="function"&&rg(t,t.return,o),di(t,i);break;case 27:(i&2)!==0&&Am(t.stateNode,t.type,t.memoizedProps);case 5:xe(t,t.return),t.tag!==5&&t.tag!==27||Da(t),di(t,i);break;case 6:Da(t);break;case 26:xe(t,t.return),o=t.stateNode,t.memoizedState!==null||o===null||Yn||o.parentNode.removeChild(o),di(t,i);break;case 22:t.memoizedState===null&&di(t,i);break;case 30:xe(t,t.return),di(t,i);break;case 7:xe(t,t.return);default:di(t,i)}n=n.sibling}}function pt(n,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var i=e.alternate,o=n,c=e,y=c.flags,b=(t&1)!==0;switch(c.tag){case 0:case 11:case 15:pt(o,c,t),Ra(4,c);break;case 1:if(pt(o,c,t),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){Hn(i,i.return,D)}if(i=c,o=i.updateQueue,o!==null){var C=i.stateNode;try{var Q=o.shared.hiddenCallbacks;if(Q!==null)for(o.shared.hiddenCallbacks=null,o=0;o<Q.length;o++)Zh(Q[o],C)}catch(D){Hn(i,i.return,D)}}b&&y&64&&cg(c),St(c,c.return);break;case 27:(t&2)!==0&&hg(c);case 5:c.tag!==5&&c.tag!==27||ug(c),pt(o,c,t),b&&i===null&&y&4&&Or(c),St(c,c.return);break;case 6:ug(c);break;case 26:C=c.stateNode,c.memoizedState!==null||C===null||ye||Mu($a(C.ownerDocument),c.type,C),pt(o,c,t),b&&i===null&&y&4&&Or(c),St(c,c.return);break;case 12:pt(o,c,t);break;case 31:pt(o,c,t),b&&y&4&&Sg(o,c);break;case 13:pt(o,c,t),b&&y&4&&Eg(o,c);break;case 22:c.memoizedState===null&&pt(o,c,t),St(c,c.return);break;case 30:pt(o,c,t),St(c,c.return);break;case 7:St(c,c.return);default:pt(o,c,t)}e=e.sibling}}function $r(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Sa(t))}function Zr(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Sa(n))}function ct(n,e,t,i){var o=(t&335544064)===t;if(e.subtreeFlags&(o?10262:10256))for(e=e.child;e!==null;)jg(n,e,t,i),e=e.sibling;else o&&yg(e)}function jg(n,e,t,i){var o=(t&335544064)===t;o&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&wo(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:ct(n,e,t,i),c&2048&&Ra(9,e);break;case 1:ct(n,e,t,i);break;case 3:ct(n,e,t,i),o&&Vr&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&Sa(c)));break;case 12:if(c&2048){ct(n,e,t,i),c=e.stateNode;try{var y=e.memoizedProps,b=y.id,C=y.onPostCommit;typeof C=="function"&&C(b,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Q){Hn(e,e.return,Q)}}else ct(n,e,t,i);break;case 31:ct(n,e,t,i);break;case 13:ct(n,e,t,i);break;case 23:break;case 22:y=e.stateNode,b=e.alternate,e.memoizedState!==null?(o&&b!==null&&b.memoizedState===null&&wo(b),y._visibility&2?ct(n,e,t,i):Ia(n,e)):(o&&b!==null&&b.memoizedState!==null&&wo(e),y._visibility&2?ct(n,e,t,i):(y._visibility|=2,Nl(n,e,t,i,(e.subtreeFlags&10256)!==0||!1))),c&2048&&$r(b,e);break;case 24:ct(n,e,t,i),c&2048&&Zr(e.alternate,e);break;case 30:o&&(c=e.alternate,c!==null&&(Ct(c.child,!0),Ct(e.child,!0))),ct(n,e,t,i);break;default:ct(n,e,t,i)}}function Nl(n,e,t,i,o){for(o=o&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=n,y=e,b=t,C=i,Q=y.flags;switch(y.tag){case 0:case 11:case 15:Nl(c,y,b,C,o),Ra(8,y);break;case 23:break;case 22:var D=y.stateNode;y.memoizedState!==null?D._visibility&2?Nl(c,y,b,C,o):Ia(c,y):(D._visibility|=2,Nl(c,y,b,C,o)),o&&Q&2048&&$r(y.alternate,y);break;case 24:Nl(c,y,b,C,o),o&&Q&2048&&Zr(y.alternate,y);break;default:Nl(c,y,b,C,o)}e=e.sibling}}function Ia(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,i=e,o=i.flags;switch(i.tag){case 22:Ia(t,i),o&2048&&$r(i.alternate,i);break;case 24:Ia(t,i),o&2048&&Zr(i.alternate,i);break;default:Ia(t,i)}e=e.sibling}}var Bi=8192;function Li(n,e,t){if(n.subtreeFlags&Bi)for(n=n.child;n!==null;)Ng(n,e,t),n=n.sibling}function Ng(n,e,t){switch(n.tag){case 26:Li(n,e,t),n.flags&Bi&&(n.memoizedState!==null?b_(t,mt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(e&335544128)===e&&Rm(t,n)));break;case 5:Li(n,e,t),n.flags&Bi&&(n=n.stateNode,(e&335544128)===e&&Rm(t,n));break;case 3:case 4:var i=mt;mt=$a(n.stateNode.containerInfo),Li(n,e,t),mt=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Bi,Bi=16777216,Li(n,e,t),Bi=i):Li(n,e,t));break;case 30:if((n.flags&Bi)!==0&&(i=n.memoizedProps.name,i!=null&&i!=="auto")){var o=n.stateNode;o.paired=null,Xe===null&&(Xe=new Map),Xe.set(i,o)}Li(n,e,t);break;default:Li(n,e,t)}}function Mg(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function Ha(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var i=e[t];_e=i,Qg(i,n)}Mg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qg(n),n=n.sibling}function qg(n){switch(n.tag){case 0:case 11:case 15:Ha(n),n.flags&2048&&ui(9,n,n.return);break;case 3:Ha(n);break;case 12:Ha(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Eo(n)):Ha(n);break;default:Ha(n)}}function Eo(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var i=e[t];_e=i,Qg(i,n)}Mg(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:ui(8,e,e.return),Eo(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Eo(e));break;default:Eo(e)}n=n.sibling}}function Qg(n,e){for(;_e!==null;){var t=_e;switch(t.tag){case 0:case 11:case 15:ui(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sa(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,_e=i;else n:for(t=n;_e!==null;){i=_e;var o=i.sibling,c=i.return;if(bg(i),i===t){_e=null;break n}if(o!==null){o.return=c,_e=o;break n}_e=c}}}var y1={getCacheForType:function(n){var e=ke(oe),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return ke(oe).controller.signal}},_1=typeof WeakMap=="function"?WeakMap:Map,Dn=0,Ln=null,jn=null,Mn=0,In=0,$e=null,hi=!1,Ml=!1,Jr=!1,Gt=0,te=0,fi=0,Vi=0,Co=0,Ze=0,ql=0,Ua=null,He=null,Fr=!1,Ao=0,Kg=0,To=1/0,jo=null,gi=null,Wn=0,yt=null,Gi=null,Nt=0,Pr=0,Wr=null,Og=null,Ql=null,Kl=null,Ol=null,Ba=0,No=null;function Je(){return(Dn&2)!==0&&Mn!==0?Mn&-Mn:tn.T!==null?ru():Rd()}function zg(){if(Ze===0)if((Mn&536870912)===0||Tn){var n=xs;xs<<=1,(xs&3932160)===0&&(xs=262144),Ze=n}else Ze=536870912;return n=we.current,n!==null&&(n.flags|=32),Ze}function zl(n,e){if(e!=null){var t=n.stateNode,i=t.ref;i===null&&(i=t.ref=pm(zt(n.memoizedProps,t))),Kl===null&&(Kl=[]),Kl.push(e.bind(null,i))}}function Ue(n,e,t){(n===Ln&&(In===2||In===9)||n.cancelPendingCommit!==null)&&(Rl(n,0),mi(n,Mn,Ze,!1)),ua(n,t),((Dn&2)===0||n!==Ln)&&(n===Ln&&((Dn&2)===0&&(Vi|=t),te===4&&mi(n,Mn,Ze,!1)),Mt(n))}function Rg(n,e,t){if((Dn&6)!==0)throw Error(r(327));var i=!t&&(e&127)===0&&(e&n.expiredLanes)===0||ra(n,e),o=i?w1(n,e):eu(n,e,!0),c=i;do{if(o===0){Ml&&!i&&mi(n,e,0,!1);break}else{if(t=n.current.alternate,c&&!v1(t)){o=eu(n,e,!1),c=!1;continue}if(o===2){if(c=e,n.errorRecoveryDisabledLanes&c)var y=0;else y=n.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;n:{var b=n;o=Ua;var C=b.current.memoizedState.isDehydrated;if(C&&(Rl(b,y).flags|=256),y=eu(b,y,!1),y!==2&&y!==6){if(Jr&&!C){b.errorRecoveryDisabledLanes|=c,Vi|=c,o=4;break n}c=He,He=o,c!==null&&(He===null?He=c:He.push.apply(He,c))}o=y}if(c=!1,o!==2)continue}}if(o===1){Rl(n,0),mi(n,e,0,!0);break}n:{switch(i=n,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:mi(i,e,Ze,!hi);break n;case 2:He=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(o=Ao+300-B(),10<o)){if(mi(i,e,Ze,!hi),Es(i,0,!0)!==0)break n;Nt=e,i.timeoutHandle=ku(Dg.bind(null,i,t,He,jo,Fr,e,Ze,Vi,ql,hi,c,"Throttled",-0,0),o);break n}Dg(i,t,He,jo,Fr,e,Ze,Vi,ql,hi,c,null,-0,0)}}break}while(!0);Mt(n)}function Dg(n,e,t,i,o,c,y,b,C,Q,D,V,M,O){n.timeoutHandle=-1;var on=e.subtreeFlags,mn=(c&335544064)===c;if(V=null,(mn||on&8192||(on&16785408)===16785408)&&(V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wt},Xe=null,Ng(e,c,V),mn&&(on=V,mn=n.containerInfo,mn=(mn.nodeType===9?mn:mn.ownerDocument).__reactViewTransition,mn!=null&&(on.count++,on.waitingForViewTransition=!0,on=Fa.bind(on),mn.finished.then(on,on))),on=(c&62914560)===c?Ao-B():(c&4194048)===c?Kg-B():0,on=x_(V,on),on!==null)){Nt=c,n.cancelPendingCommit=on(Gg.bind(null,n,e,c,t,i,o,y,b,C,Q,D,V,null,M,O)),mi(n,c,y,!Q);return}Gg(n,e,c,t,i,o,y,b,C,Q,D,V)}function v1(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var o=t[i],c=o.getSnapshot;o=o.value;try{if(!Ve(c(),o))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mi(n,e,t,i){e=qd(n,e),e&=~Co,e&=~Vi,n.suspendedLanes|=e,n.pingedLanes&=~e,i&&(n.warmLanes|=e),i=n.expirationTimes;for(var o=e;0<o;){var c=31-Be(o),y=1<<c;i[c]=-1,o&=~y}t!==0&&Kd(n,t,e)}function Mo(){return(Dn&6)===0?(La(0),!1):!0}function nu(){if(jn!==null){if(In===0)var n=jn.return;else n=jn,It=Qi=null,cr(n),xl=null,Aa=0,n=jn;for(;n!==null;)og(n.alternate,n),n=n.return;jn=null}}function Rl(n,e){var t=n.timeoutHandle;return t!==-1&&(n.timeoutHandle=-1,B1(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Nt=0,nu(),Ln=n,jn=t=Dt(n.current,null),Mn=e,In=0,$e=null,hi=!1,Ml=ra(n,e),Jr=!1,ql=Ze=Co=Vi=fi=te=0,He=Ua=null,Fr=!1,Gt=qd(n,e),Ds(),t}function Yg(n,e){Cn=null,tn.H=ro,e===bl||e===Zs?(e=Vh(),In=3):e===Zc?(e=Vh(),In=4):In=e===xr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,$e=e,jn===null&&(te=1,uo(n,lt(e,n.current)))}function Ig(){var n=we.current;return n===null?!0:(Mn&4194048)===Mn?Ae===null:(Mn&62914560)===Mn||(Mn&536870912)!==0?n===Ae:!1}function Hg(){var n=tn.H;return tn.H=ro,n===null?ro:n}function Ug(){var n=tn.A;return tn.A=y1,n}function qo(){te=4,hi||(Mn&4194048)!==Mn&&we.current!==null||(Ml=!0),(fi&134217727)===0&&(Vi&134217727)===0||Ln===null||mi(Ln,Mn,Ze,!1)}function eu(n,e,t){var i=Dn;Dn|=2;var o=Hg(),c=Ug();(Ln!==n||Mn!==e)&&(jo=null,Rl(n,e)),e=!1;var y=te;n:do try{if(In!==0&&jn!==null){var b=jn,C=$e;switch(In){case 8:nu(),y=6;break n;case 3:case 2:case 9:case 6:we.current===null&&(e=!0);var Q=In;if(In=0,$e=null,Dl(n,b,C,Q),t&&Ml){y=0;break n}break;default:Q=In,In=0,$e=null,Dl(n,b,C,Q)}}k1(),y=te;break}catch(D){Yg(n,D)}while(!0);return e&&n.shellSuspendCounter++,It=Qi=null,Dn=i,tn.H=o,tn.A=c,jn===null&&(Ln=null,Mn=0,Ds()),y}function k1(){for(;jn!==null;)Bg(jn)}function w1(n,e){var t=Dn;Dn|=2;var i=Hg(),o=Ug();Ln!==n||Mn!==e?(jo=null,To=B()+500,Rl(n,e)):Ml=ra(n,e);n:do try{if(In!==0&&jn!==null){e=jn;var c=$e;e:switch(In){case 1:In=0,$e=null,Dl(n,e,c,1);break;case 2:case 9:if(Bh(c)){In=0,$e=null,Lg(e);break}e=function(){In!==2&&In!==9||Ln!==n||(In=7),Mt(n)},c.then(e,e);break n;case 3:In=7;break n;case 4:In=5;break n;case 7:Bh(c)?(In=0,$e=null,Lg(e)):(In=0,$e=null,Dl(n,e,c,7));break;case 5:var y=null;switch(jn.tag){case 26:y=jn.memoizedState;case 5:case 27:var b=jn;if(y?Om(y):b.stateNode.complete){In=0,$e=null;var C=b.sibling;if(C!==null)jn=C;else{var Q=b.return;Q!==null?(jn=Q,Qo(Q)):jn=null}break e}}In=0,$e=null,Dl(n,e,c,5);break;case 6:In=0,$e=null,Dl(n,e,c,6);break;case 8:nu(),te=6;break n;default:throw Error(r(462))}}b1();break}catch(D){Yg(n,D)}while(!0);return It=Qi=null,tn.H=i,tn.A=o,Dn=t,jn!==null?0:(Ln=null,Mn=0,Ds(),te)}function b1(){for(;jn!==null&&!ks();)Bg(jn)}function Bg(n){var e=ag(n.alternate,n,Gt);n.memoizedProps=n.pendingProps,e===null?Qo(n):jn=e}function Lg(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Pf(t,e,e.pendingProps,e.type,void 0,Mn);break;case 11:e=Pf(t,e,e.pendingProps,e.type.render,e.ref,Mn);break;case 5:cr(e);var i=e;i===pe&&(Tn?(Ls(i),i.tag===5&&i.stateNode!=null&&(Gn=i.stateNode)):(Ls(i),Tn=!0));default:og(t,e),e=jn=qh(e,Gt),e=ag(t,e,Gt)}n.memoizedProps=n.pendingProps,e===null?Qo(n):jn=e}function Dl(n,e,t,i){It=Qi=null,cr(e),xl=null,Aa=0;var o=e.return;try{if(r1(n,o,e,t,Mn)){te=1,uo(n,lt(t,n.current)),jn=null;return}}catch(c){if(o!==null)throw jn=o,c;te=1,uo(n,lt(t,n.current)),jn=null;return}e.flags&32768?(Tn||i===1?n=!0:Ml||(Mn&536870912)!==0?n=!1:(hi=n=!0,(i===2||i===9||i===3||i===6)&&(i=we.current,i!==null&&i.tag===13&&(i.flags|=16384))),Vg(e,n)):Qo(e)}function Qo(n){var e=n;do{if((e.flags&32768)!==0){Vg(e,hi);return}n=e.return;var t=f1(e.alternate,e,Gt);if(t!==null){jn=t;return}if(e=e.sibling,e!==null){jn=e;return}jn=e=n}while(e!==null);te===0&&(te=5)}function Vg(n,e){do{var t=g1(n.alternate,n);if(t!==null){t.flags&=32767,jn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){jn=n;return}jn=n=t}while(n!==null);te=6,jn=null}function Gg(n,e,t,i,o,c,y,b,C,Q,D,V){n.cancelPendingCommit=null;do Ko();while(Wn!==0);if((Dn&6)!==0)throw Error(r(327));if(e!==null){if(e===n.current)throw Error(r(177));n===Ln&&(jn=Ln=null,Mn=0),Gi=e,yt=n,Nt=t,Wr=o,Og=i,x1(n,e,t,y,b,C,V)}}function x1(n,e,t,i,o,c,y){var b=e.lanes|e.childLanes;if(Pr=b,b|=zc,Z0(n,t,b,i,o,c),Kl=null,(t&335544064)===t?(Ol=Fy(n),i=10262):(Ol=null,i=10256),(e.subtreeFlags&i)!==0||(e.flags&i)!==0?(n.callbackNode=null,n.callbackPriority=0,j1(On,function(){return au(),null})):(n.callbackNode=null,n.callbackPriority=0),vo=!1,i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=tn.T,tn.T=null,o=dn.p,dn.p=2,c=Dn,Dn|=4;try{m1(n,e,t)}finally{Dn=c,dn.p=o,tn.T=i}}Wn=1,vo?Ql=Z1(y,n.containerInfo,Ol,tu,iu,E1,lu,au,S1):(tu(),iu(),lu())}function S1(n){if(Wn!==0){var e=yt.onRecoverableError;e(n,{componentStack:null})}}function E1(){Wn===3&&(Wn=0,Tg(Gi,yt),Wn=4)}function tu(){if(Wn===1){Wn=0;var n=yt,e=Gi,t=Nt,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=tn.T,tn.T=null;var o=dn.p;dn.p=2;var c=Dn;Dn|=4;try{Ya=bo=!1,Cg(e,n,t),t=yu;var y=bh(n.containerInfo),b=t.focusedElem,C=t.selectionRange;if(y!==b&&b&&b.ownerDocument&&wh(b.ownerDocument.documentElement,b)){if(C!==null&&Mc(b)){var Q=C.start,D=C.end;if(D===void 0&&(D=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(D,b.value.length);else{var V=b.ownerDocument||document,M=V&&V.defaultView||window;if(M.getSelection){var O=M.getSelection(),on=b.textContent.length,mn=Math.min(C.start,on),An=C.end===void 0?mn:Math.min(C.end,on);!O.extend&&mn>An&&(y=An,An=mn,mn=y);var q=kh(b,mn),j=kh(b,An);if(q&&j&&(O.rangeCount!==1||O.anchorNode!==q.node||O.anchorOffset!==q.offset||O.focusNode!==j.node||O.focusOffset!==j.offset)){var K=V.createRange();K.setStart(q.node,q.offset),O.removeAllRanges(),mn>An?(O.addRange(K),O.extend(j.node,j.offset)):(K.setEnd(j.node,j.offset),O.addRange(K))}}}}for(V=[],O=b;O=O.parentNode;)O.nodeType===1&&V.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<V.length;b++){var L=V[b];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Gl=!!pu,yu=pu=null}finally{Dn=c,dn.p=o,tn.T=i}}n.current=e,Wn=2}}function iu(){if(Wn===2){Wn=0;var n=yt,e=Gi,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=tn.T,tn.T=null;var i=dn.p;dn.p=2;var o=Dn;Dn|=4;try{kg(n,e.alternate,e)}finally{Dn=o,dn.p=i,tn.T=t}}Wn=3}}function lu(){if(Wn===4||Wn===3){Wn=0;var n=Ql;Ql=null,ws();var e=yt,t=Gi,i=Nt,o=Og,c=(i&335544064)===i?10262:10256;if((t.subtreeFlags&c)!==0||(t.flags&c)!==0?Wn=5:(Wn=0,Gi=yt=null,Xg(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(gi=null),fc(i),t=t.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Ne,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=tn.T,c=dn.p,dn.p=2,tn.T=null;try{for(var y=e.onRecoverableError,b=0;b<o.length;b++){var C=o[b];y(C.value,{componentStack:C.stack})}}finally{tn.T=t,dn.p=c}}if(o=Kl,y=Ol,Ol=null,o!==null&&(Kl=null,y===null&&(y=[]),n!==null))for(C=0;C<o.length;C++)t=(0,o[C])(y),t!==void 0&&n.finished.finally(t);(Nt&3)!==0&&Ko(),Mt(e),c=e.pendingLanes,(i&261930)!==0&&(c&42)!==0?e===No?Ba++:(Ba=0,No=e):(Ba=0,No=null),La(0)}}function Xg(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Sa(e)))}function Ko(){return Ql!==null&&(Ql.skipTransition(),Ql=null),tu(),iu(),lu(),au()}function au(){if(Wn!==5)return!1;var n=yt,e=Pr;Pr=0;var t=fc(Nt),i=tn.T,o=dn.p;try{dn.p=32>t?32:t,tn.T=null,t=Wr,Wr=null;var c=yt,y=Nt;if(Wn=0,Gi=yt=null,Nt=0,(Dn&6)!==0)throw Error(r(331));var b=Dn;if(Dn|=4,qg(c.current),jg(c,c.current,y,t),Dn=b,La(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Ne,c)}catch{}return!0}finally{dn.p=o,tn.T=i,Xg(n,e)}}function $g(n,e,t){e=lt(t,e),e=br(n.stateNode,e,2),n=si(n,e,2),n!==null&&(ua(n,2),Mt(n))}function Hn(n,e,t){if(n.tag===3)$g(n,n,t);else for(;e!==null;){if(e.tag===3){$g(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gi===null||!gi.has(i))){n=lt(t,n),t=Lf(2),i=si(e,t,2),i!==null&&(Vf(t,i,e,n),ua(i,2),Mt(i));break}}e=e.return}}function su(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new _1;var o=new Set;i.set(e,o)}else o=i.get(e),o===void 0&&(o=new Set,i.set(e,o));o.has(t)||(Jr=!0,o.add(t),n=C1.bind(null,n,e,t),e.then(n,n))}function C1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,Ln===n&&(Mn&t)===t&&((te===4||te===3&&(Mn&62914560)===Mn&&300>B()-Ao)&&(Dn&2)===0?Rl(n,0):Co|=t,ql===Mn&&(ql=0)),Mt(n)}function Zg(n,e){e===0&&(e=Qd()),n=Ni(n,e),n!==null&&(ua(n,e),Mt(n))}function A1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Zg(n,t)}function T1(n,e){var t=0;switch(n.tag){case 31:case 13:var i=n.stateNode,o=n.memoizedState;o!==null&&(t=o.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(e),Zg(n,t)}function j1(n,e){return il(n,e)}var Yl=null,Il=null,ou=!1,Oo=!1,cu=!1,pi=0;function Mt(n){n!==Il&&n.next===null&&(Il===null?Yl=Il=n:Il=Il.next=n),Oo=!0,ou||(ou=!0,M1())}function La(n,e){if(!cu&&Oo){cu=!0;do for(var t=!1,i=Yl;i!==null;){if(n!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var y=i.suspendedLanes,b=i.pingedLanes;c=(1<<31-Be(42|n)+1)-1,c&=o&~(y&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,Wg(i,c))}else c=Mn,c=Es(i,i===Ln?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||ra(i,c)||(t=!0,Wg(i,c));i=i.next}while(t);cu=!1}}function N1(){Jg()}function Jg(){Oo=ou=!1;var n=0;pi!==0&&U1()&&(n=pi);for(var e=B(),t=null,i=Yl;i!==null;){var o=i.next,c=Fg(i,e);c===0?(i.next=null,t===null?Yl=o:t.next=o,o===null&&(Il=t)):(t=i,(n!==0||(c&3)!==0)&&(Oo=!0)),i=o}Wn!==0&&Wn!==5||La(n),pi!==0&&(pi=0)}function Fg(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,o=n.expirationTimes,c=n.pendingLanes&-62914561;0<c;){var y=31-Be(c),b=1<<y,C=o[y];C===-1?((b&t)===0||(b&i)!==0)&&(o[y]=$0(b,e)):C<=e&&(n.expiredLanes|=b),c&=~b}if(e=Ln,t=Mn,t=Es(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,t===0||n===e&&(In===2||In===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&ll(i),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||ra(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(i!==null&&ll(i),fc(t)){case 2:case 8:t=xn;break;case 32:t=On;break;case 268435456:t=se;break;default:t=On}return i=Pg.bind(null,n),t=il(t,i),n.callbackPriority=e,n.callbackNode=t,e}return i!==null&&i!==null&&ll(i),n.callbackPriority=2,n.callbackNode=null,2}function Pg(n,e){if(Wn!==0&&Wn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Ko()&&n.callbackNode!==t)return null;var i=Mn;return i=Es(n,n===Ln?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(Rg(n,i,e),Fg(n,B()),n.callbackNode!=null&&n.callbackNode===t?Pg.bind(null,n):null)}function Wg(n,e){if(Ko())return null;Rg(n,e,!0)}function M1(){L1(function(){(Dn&6)!==0?il(pn,N1):Jg()})}function ru(){if(pi===0){var n=zi;n===0&&(n=bs,bs<<=1,(bs&261888)===0&&(bs=256)),pi=n}return pi}function nm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ns(n)}function q1(n,e,t,i,o){if(e==="submit"&&t&&t.stateNode===o){var c=nm((o[Re]||null).action),y=i.submitter;y&&(e=(e=y[Re]||null)?nm(e.formAction):y.getAttribute("formAction"),e!==null&&(c=e,y=null));var b=new Ks("action","action",null,i,o);n.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(pi!==0){var C=new FormData(o,y);yr(t,{pending:!0,data:C,method:o.method,action:c},null,C)}}else typeof c=="function"&&(b.preventDefault(),C=new FormData(o,y),yr(t,{pending:!0,data:C,method:o.method,action:c},c,C))},currentTarget:o}]})}}for(var uu=0;uu<Oc.length;uu++){var du=Oc[uu],Q1=du.toLowerCase(),K1=du[0].toUpperCase()+du.slice(1);ft(Q1,"on"+K1)}ft(Eh,"onAnimationEnd"),ft(Ch,"onAnimationIteration"),ft(Ah,"onAnimationStart"),ft("dblclick","onDoubleClick"),ft("focusin","onFocus"),ft("focusout","onBlur"),ft(By,"onTransitionRun"),ft(Ly,"onTransitionStart"),ft(Vy,"onTransitionCancel"),ft(Th,"onTransitionEnd"),cl("onMouseEnter",["mouseout","mouseover"]),cl("onMouseLeave",["mouseout","mouseover"]),cl("onPointerEnter",["pointerout","pointerover"]),cl("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Va));function em(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],o=i.event;i=i.listeners;n:{var c=void 0;if(e)for(var y=i.length-1;0<=y;y--){var b=i[y],C=b.instance,Q=b.currentTarget;if(b=b.listener,C!==c&&o.isPropagationStopped())break n;c=b,o.currentTarget=Q;try{c(o)}catch(D){Rs(D)}o.currentTarget=null,c=C}else for(y=0;y<i.length;y++){if(b=i[y],C=b.instance,Q=b.currentTarget,b=b.listener,C!==c&&o.isPropagationStopped())break n;c=b,o.currentTarget=Q;try{c(o)}catch(D){Rs(D)}o.currentTarget=null,c=C}}}}function Nn(n,e){var t=e[Yd];t===void 0&&(t=e[Yd]=new Set);var i=n+"__bubble";t.has(i)||(tm(e,n,2,!1),t.add(i))}function hu(n,e,t){var i=0;e&&(i|=4),tm(t,n,i,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function fu(n){if(!n[zo]){n[zo]=!0,Ud.forEach(function(t){t!=="selectionchange"&&(O1.has(t)||hu(t,!1,n),hu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[zo]||(e[zo]=!0,hu("selectionchange",!1,e))}}function tm(n,e,t,i){switch(Vm(e)){case 2:var o=A_;break;case 8:o=T_;break;default:o=Qu}t=o.bind(null,e,t,n),o=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),i?o!==void 0?n.addEventListener(e,t,{capture:!0,passive:o}):n.addEventListener(e,t,!0):o!==void 0?n.addEventListener(e,t,{passive:o}):n.addEventListener(e,t,!1)}function gu(n,e,t,i,o){var c=i;if((e&1)===0&&(e&2)===0&&i!==null)n:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var b=i.stateNode.containerInfo;if(b===o)break;if(y===4)for(y=i.return;y!==null;){var C=y.tag;if((C===3||C===4)&&y.stateNode.containerInfo===o)return;y=y.return}for(;b!==null;){if(y=Ci(b),y===null)return;if(C=y.tag,C===5||C===6||C===26||C===27){i=c=y;continue n}b=b.parentNode}}i=i.return}eh(function(){var Q=c,D=vc(t),V=[];n:{var M=jh.get(n);if(M!==void 0){var O=Ks,on=n;switch(n){case"keypress":if(qs(t)===0)break n;case"keydown":case"keyup":O=vy;break;case"focusin":on="focus",O=Ec;break;case"focusout":on="blur",O=Ec;break;case"beforeblur":case"afterblur":O=Ec;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Sy;break;case Eh:case Ch:case Ah:O=uy;break;case Th:O=Cy;break;case"scroll":case"scrollend":O=ay;break;case"wheel":O=Ty;break;case"copy":case"cut":case"paste":O=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=sh;break;case"submit":O=by;break;case"toggle":case"beforetoggle":O=Ny}var mn=(e&4)!==0,An=!mn&&(n==="scroll"||n==="scrollend"),q=mn?M!==null?M+"Capture":null:M;mn=[];for(var j=Q,K;j!==null;){var L=j;if(K=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||K===null||q===null||(L=fa(j,q),L!=null&&mn.push(Ga(j,L,K))),An)break;j=j.return}0<mn.length&&(M=new O(M,on,null,t,D),V.push({event:M,listeners:mn}))}}if((e&7)===0){n:{if(O=n==="mouseover"||n==="pointerover",M=n==="mouseout"||n==="pointerout",O&&t!==_c&&(on=t.relatedTarget||t.fromElement)&&(Ci(on)||on[al]))break n;(M||O)&&(on=D.window===D?D:(O=D.ownerDocument)?O.defaultView||O.parentWindow:window,M?(O=t.relatedTarget||t.toElement,M=Q,O=O?Ci(O):null,O!==null&&(An=d(O),mn=O.tag,O!==An||mn!==5&&mn!==27&&mn!==6)&&(O=null)):(M=null,O=Q),M!==O&&(mn=lh,L="onMouseLeave",q="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(mn=sh,L="onPointerLeave",q="onPointerEnter",j="pointer"),An=M==null?on:ha(M),K=O==null?on:ha(O),on=new mn(L,j+"leave",M,t,D),on.target=An,on.relatedTarget=K,L=null,Ci(D)===Q&&(mn=new mn(q,j+"enter",O,t,D),mn.target=K,mn.relatedTarget=An,L=mn),An=L,mn=M&&O?G(M,O,z1):null,M!==null&&im(V,on,M,mn,!1),O!==null&&An!==null&&im(V,An,O,mn,!0)))}n:{if(M=Q?ha(Q):window,O=M.nodeName&&M.nodeName.toLowerCase(),O==="select"||O==="input"&&M.type==="file")var hn=gh;else if(hh(M))if(mh)hn=Iy;else{hn=Dy;var qn=Ry}else O=M.nodeName,!O||O.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?Q&&yc(Q.elementType)&&(hn=gh):hn=Yy;if(hn&&(hn=hn(n,Q))){fh(V,hn,t,D);break n}qn&&qn(n,M,Q)}switch(qn=Q?ha(Q):window,n){case"focusin":(hh(qn)||qn.contentEditable==="true")&&(gl=qn,qc=Q,wa=null);break;case"focusout":wa=qc=gl=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,xh(V,t,D);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":xh(V,t,D)}var yn;if(Ac)n:{switch(n){case"compositionstart":var _n="onCompositionStart";break n;case"compositionend":_n="onCompositionEnd";break n;case"compositionupdate":_n="onCompositionUpdate";break n}_n=void 0}else fl?uh(n,t)&&(_n="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_n="onCompositionStart");_n&&(oh&&t.locale!=="ko"&&(fl||_n!=="onCompositionStart"?_n==="onCompositionEnd"&&fl&&(yn=th()):(Ft=D,bc="value"in Ft?Ft.value:Ft.textContent,fl=!0)),qn=Ro(Q,_n),0<qn.length&&(_n=new ah(_n,n,null,t,D),V.push({event:_n,listeners:qn}),yn?_n.data=yn:(yn=dh(t),yn!==null&&(_n.data=yn)))),(yn=qy?Qy(n,t):Ky(n,t))&&(_n=Ro(Q,"onBeforeInput"),0<_n.length&&(qn=new ah("onBeforeInput","beforeinput",null,t,D),V.push({event:qn,listeners:_n}),qn.data=yn)),q1(V,n,Q,t,D)}em(V,e)})}function Ga(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ro(n,e){for(var t=e+"Capture",i=[];n!==null;){var o=n,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=fa(n,t),o!=null&&i.unshift(Ga(n,o,c)),o=fa(n,e),o!=null&&i.push(Ga(n,o,c))),n.tag===3)return i;n=n.return}return[]}function z1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function im(n,e,t,i,o){for(var c=e._reactName,y=[];t!==null&&t!==i;){var b=t,C=b.alternate,Q=b.stateNode;if(b=b.tag,C!==null&&C===i)break;b!==5&&b!==26&&b!==27||Q===null||(C=Q,o?(Q=fa(t,c),Q!=null&&y.unshift(Ga(t,Q,C))):o||(Q=fa(t,c),Q!=null&&y.push(Ga(t,Q,C)))),t=t.return}y.length!==0&&n.push({event:e,listeners:y})}var R1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function lm(n){return(typeof n=="string"?n:""+n).replace(R1,`
`).replace(D1,"")}function am(n,e){return e=lm(e),lm(n)===e}function Un(n,e,t,i,o,c){switch(t){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||ul(n,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&ul(n,""+i);else return;break;case"className":js(n,"class",i);break;case"tabIndex":js(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":js(n,t,i);break;case"style":Wd(n,i,c);return;case"data":if(e!=="object"){js(n,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(t);break}i=Ns(i),n.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&Un(n,e,"name",o.name,o,null),Un(n,e,"formEncType",o.formEncType,o,null),Un(n,e,"formMethod",o.formMethod,o,null),Un(n,e,"formTarget",o.formTarget,o,null)):(Un(n,e,"encType",o.encType,o,null),Un(n,e,"method",o.method,o,null),Un(n,e,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(t);break}i=Ns(i),n.setAttribute(t,i);break;case"onClick":i!=null&&(n.onclick=wt);return;case"onScroll":i!=null&&Nn("scroll",n);return;case"onScrollEnd":i!=null&&Nn("scrollend",n);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(t=i.__html,t!=null){if(o.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}t=Ns(i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(t,i):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":i===!0?n.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(t,i):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(t,i):n.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(t):n.setAttribute(t,i);break;case"popover":Nn("beforetoggle",n),Nn("toggle",n),Ts(n,"popover",i);break;case"xlinkActuate":Kt(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Kt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Kt(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Kt(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Kt(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Kt(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ts(n,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=iy.get(t)||t,Ts(n,t,i);else return}Rn=!0}function mu(n,e,t,i,o,c){switch(t){case"style":Wd(n,i,c);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(t=i.__html,t!=null){if(o.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==t&&(n.innerHTML=t)}}break;case"children":if(typeof i=="string")ul(n,i);else if(typeof i=="number"||typeof i=="bigint")ul(n,""+i);else return;break;case"onScroll":i!=null&&Nn("scroll",n);return;case"onScrollEnd":i!=null&&Nn("scrollend",n);return;case"onClick":i!=null&&(n.onclick=wt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bd.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),c=t.slice(2,o?t.length-7:void 0),e=n[Re]||null,e=e!=null?e[t]:null,typeof e=="function"&&n.removeEventListener(c,e,o),typeof i=="function")){typeof e!="function"&&e!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(c,i,o);break n}Rn=!0,t in n?n[t]=i:i===!0?n.setAttribute(t,""):Ts(n,t,i)}return}Rn=!0}function Se(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nn("error",n),Nn("load",n);var i=!1,o=!1,c;for(c in t)if(t.hasOwnProperty(c)){var y=t[c];if(y!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Un(n,e,c,y,t,null)}}o&&Un(n,e,"srcSet",t.srcSet,t,null),i&&Un(n,e,"src",t.src,t,null);return;case"input":Nn("invalid",n);var b=c=y=o=null,C=null,Q=null;for(i in t)if(t.hasOwnProperty(i)){var D=t[i];if(D!=null)switch(i){case"name":o=D;break;case"type":y=D;break;case"checked":C=D;break;case"defaultChecked":Q=D;break;case"value":c=D;break;case"defaultValue":b=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,e));break;default:Un(n,e,i,D,t,null)}}Zd(n,c,b,C,Q,y,o,!1);return;case"select":Nn("invalid",n),i=y=c=null;for(o in t)if(t.hasOwnProperty(o)&&(b=t[o],b!=null))switch(o){case"value":c=b;break;case"defaultValue":y=b;break;case"multiple":i=b;default:Un(n,e,o,b,t,null)}e=c,t=y,n.multiple=!!i,e!=null?rl(n,!!i,e,!1):t!=null&&rl(n,!!i,t,!0);return;case"textarea":Nn("invalid",n),c=o=i=null;for(y in t)if(t.hasOwnProperty(y)&&(b=t[y],b!=null))switch(y){case"value":i=b;break;case"defaultValue":o=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Un(n,e,y,b,t,null)}Fd(n,i,o,c);return;case"option":for(C in t)if(t.hasOwnProperty(C)&&(i=t[C],i!=null))switch(C){case"selected":n.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Un(n,e,C,i,t,null)}return;case"dialog":Nn("beforetoggle",n),Nn("toggle",n),Nn("cancel",n),Nn("close",n);break;case"iframe":case"object":Nn("load",n);break;case"video":case"audio":for(i=0;i<Va.length;i++)Nn(Va[i],n);break;case"image":Nn("error",n),Nn("load",n);break;case"details":Nn("toggle",n);break;case"embed":case"source":case"link":Nn("error",n),Nn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in t)if(t.hasOwnProperty(Q)&&(i=t[Q],i!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Un(n,e,Q,i,t,null)}return;default:if(yc(e)){for(D in t)t.hasOwnProperty(D)&&(i=t[D],i!==void 0&&mu(n,e,D,i,t,void 0));return}}for(b in t)t.hasOwnProperty(b)&&(i=t[b],i!=null&&Un(n,e,b,i,t,null))}var Y1={};function I1(n,e,t,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,y=null,b=null,C=null,Q=null,D=null;for(O in t){var V=t[O];if(t.hasOwnProperty(O)&&V!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":C=V;default:i.hasOwnProperty(O)||Un(n,e,O,null,i,V)}}for(var M in i){var O=i[M];if(V=t[M],i.hasOwnProperty(M)&&(O!=null||V!=null))switch(M){case"type":O!==V&&(Rn=!0),c=O;break;case"name":O!==V&&(Rn=!0),o=O;break;case"checked":O!==V&&(Rn=!0),Q=O;break;case"defaultChecked":O!==V&&(Rn=!0),D=O;break;case"value":O!==V&&(Rn=!0),y=O;break;case"defaultValue":O!==V&&(Rn=!0),b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:O!==V&&Un(n,e,M,O,i,V)}}mc(n,y,b,C,Q,D,c,o);return;case"select":O=y=b=M=null;for(c in t)if(C=t[c],t.hasOwnProperty(c)&&C!=null)switch(c){case"value":break;case"multiple":O=C;default:i.hasOwnProperty(c)||Un(n,e,c,null,i,C)}for(o in i)if(c=i[o],C=t[o],i.hasOwnProperty(o)&&(c!=null||C!=null))switch(o){case"value":c!==C&&(Rn=!0),M=c;break;case"defaultValue":c!==C&&(Rn=!0),b=c;break;case"multiple":c!==C&&(Rn=!0),y=c;default:c!==C&&Un(n,e,o,c,i,C)}e=b,t=y,i=O,M!=null?rl(n,!!t,M,!1):!!i!=!!t&&(e!=null?rl(n,!!t,e,!0):rl(n,!!t,t?[]:"",!1));return;case"textarea":O=M=null;for(b in t)if(o=t[b],t.hasOwnProperty(b)&&o!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Un(n,e,b,null,i,o)}for(y in i)if(o=i[y],c=t[y],i.hasOwnProperty(y)&&(o!=null||c!=null))switch(y){case"value":o!==c&&(Rn=!0),M=o;break;case"defaultValue":o!==c&&(Rn=!0),O=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&Un(n,e,y,o,i,c)}Jd(n,M,O);return;case"option":for(var on in t)if(M=t[on],t.hasOwnProperty(on)&&M!=null&&!i.hasOwnProperty(on))switch(on){case"selected":n.selected=!1;break;default:Un(n,e,on,null,i,M)}for(C in i)if(M=i[C],O=t[C],i.hasOwnProperty(C)&&M!==O&&(M!=null||O!=null))switch(C){case"selected":M!==O&&(Rn=!0),n.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Un(n,e,C,M,i,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mn in t)M=t[mn],t.hasOwnProperty(mn)&&M!=null&&!i.hasOwnProperty(mn)&&Un(n,e,mn,null,i,M);for(Q in i)if(M=i[Q],O=t[Q],i.hasOwnProperty(Q)&&M!==O&&(M!=null||O!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,e));break;default:Un(n,e,Q,M,i,O)}return;default:if(yc(e)){for(var An in t)M=t[An],t.hasOwnProperty(An)&&M!==void 0&&!i.hasOwnProperty(An)&&mu(n,e,An,void 0,i,M);for(D in i)M=i[D],O=t[D],!i.hasOwnProperty(D)||M===O||M===void 0&&O===void 0||mu(n,e,D,M,i,O);return}}for(var q in t)M=t[q],t.hasOwnProperty(q)&&M!=null&&!i.hasOwnProperty(q)&&Un(n,e,q,null,i,M);for(V in i)M=i[V],O=t[V],!i.hasOwnProperty(V)||M===O||M==null&&O==null||Un(n,e,V,M,i,O)}function sm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function H1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var o=t[i],c=o.transferSize,y=o.initiatorType,b=o.duration;if(c&&b&&sm(y)){for(y=0,b=o.responseEnd,i+=1;i<t.length;i++){var C=t[i],Q=C.startTime;if(Q>b)break;var D=C.transferSize,V=C.initiatorType;D&&sm(V)&&(C=C.responseEnd,y+=D*(C<b?1:(b-Q)/(C-Q)))}if(--i,e+=8*(c+y)/(o.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var pu=null,yu=null;function Xa(n){return n.nodeType===9?n:n.ownerDocument}function om(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function rm(n,e,t,i){return t=Xa(t).createElement(n),t[ve]=i,t[Re]=e,Se(t,n,e),me(t),t}function _u(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vu=null;function U1(){var n=window.event;return n&&n.type==="popstate"?n===vu?!1:(vu=n,!0):(vu=null,!1)}var ku=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,dm=typeof requestAnimationFrame=="function"?requestAnimationFrame:ku,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(n){return um.resolve(null).then(n).catch(V1)}:ku;function V1(n){setTimeout(function(){throw n})}function yi(n){return n==="head"}function hm(n,e){var t=e,i=0;do{var o=t.nextSibling;if(n.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(i===0){n.removeChild(o),Xl(e);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")Tu(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Tu(t);for(var c=t.firstChild;c;){var y=c.nextSibling,b=c.nodeName;c[da]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||t.removeChild(c),c=y}}else t==="body"&&Tu(n.ownerDocument.body);t=o}while(t);Xl(e)}function fm(n,e){var t=n;n=0;do{var i=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=i}while(t)}function gm(n,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,n.style.viewTransitionName=e,t!=null&&(n.style.viewTransitionClass=t),t=getComputedStyle(n),t.display==="inline"){if(e=n.getClientRects(),e.length===1)var i=1;else for(var o=i=0;o<e.length;o++){var c=e[o];0<c.width&&0<c.height&&i++}i===1&&(n=n.style,n.display=e.length===1?"inline-block":"block",n.marginTop="-"+t.paddingTop,n.marginBottom="-"+t.paddingBottom)}}function mm(n,e){n=n.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;n.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,n.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),n.display==="inline-block"&&(e==null?n.display=n.margin="":(t=e.display,n.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?n.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],n.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],n.marginBottom=e==null||typeof e=="boolean"?"":e)))}function G1(n,e,t){return t=t.ownerDocument.defaultView,{rect:n,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=t.innerHeight&&n.left<=t.innerWidth}}function wu(n){var e=n.getBoundingClientRect(),t=getComputedStyle(n);return G1(e,t,n)}function X1(n){return n.documentElement.clientHeight}function $1(n){this.addEventListener("load",n),this.addEventListener("error",n)}function Z1(n,e,t,i,o,c,y,b,C){var Q=e.nodeType===9?e:e.ownerDocument;try{var D=Q.startViewTransition({update:function(){var M=Q.defaultView,O=M.navigation&&M.navigation.transition,on=Q.fonts.status;i();var mn=[];if(on==="loaded"&&(X1(Q),Q.fonts.status==="loading"&&mn.push(Q.fonts.ready)),on=mn.length,n!==null)for(var An=n.suspenseyImages,q=0,j=0;j<An.length;j++){var K=An[j];if(!K.complete){var L=K.getBoundingClientRect();if(0<L.bottom&&0<L.right&&L.top<M.innerHeight&&L.left<M.innerWidth){if(q+=zm(K),q>Io){mn.length=on;break}K=new Promise($1.bind(K)),mn.push(K)}}}if(0<mn.length)return M=Promise.race([Promise.all(mn),new Promise(function(hn){return setTimeout(hn,500)})]).then(o,o),(O?Promise.allSettled([O.finished,M]):M).then(c,c);if(o(),O)return O.finished.then(c,c);c()},types:t});Q.__reactViewTransition=D;var V=[];return D.ready.then(function(){for(var M=Q.documentElement.getAnimations({subtree:!0}),O=0;O<M.length;O++){var on=M[O],mn=on.effect,An=mn.pseudoElement;if(An!=null&&An.startsWith("::view-transition")){V.push(on),on=mn.getKeyframes();for(var q=An=void 0,j=!0,K=0;K<on.length;K++){var L=on[K],hn=L.width;if(An===void 0)An=hn;else if(An!==hn){j=!1;break}if(hn=L.height,q===void 0)q=hn;else if(q!==hn){j=!1;break}delete L.width,delete L.height,L.transform==="none"&&delete L.transform}j&&An!==void 0&&q!==void 0&&(mn.setKeyframes(on),j=getComputedStyle(mn.target,mn.pseudoElement),j.width!==An||j.height!==q)&&(j=on[0],j.width=An,j.height=q,j=on[on.length-1],j.width=An,j.height=q,mn.setKeyframes(on))}}y()},function(M){Q.__reactViewTransition===D&&(Q.__reactViewTransition=null);try{if(typeof M=="object"&&M!==null)switch(M.name){case"InvalidStateError":(M.message==="View transition was skipped because document visibility state is hidden."||M.message==="Skipping view transition because document visibility state has become hidden."||M.message==="Skipping view transition because viewport size changed."||M.message==="Transition was aborted because of invalid state")&&(M=null)}M!==null&&C(M)}finally{i(),o(),y()}}),D.finished.finally(function(){for(var M=0;M<V.length;M++)V[M].cancel();Q.__reactViewTransition===D&&(Q.__reactViewTransition=null),b()}),D}catch{return i(),o(),y(),null}}function Xi(n,e){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+e+")"}Xi.prototype.animate=function(n,e){return e=typeof e=="number"?{duration:e}:J({},e),e.pseudoElement=this._selector,this._scope.animate(n,e)},Xi.prototype.getAnimations=function(){for(var n=this._scope,e=this._selector,t=n.getAnimations({subtree:!0}),i=[],o=0;o<t.length;o++){var c=t[o].effect;c!==null&&c.target===n&&c.pseudoElement===e&&i.push(t[o])}return i},Xi.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function pm(n){return{name:n,group:new Xi("group",n),imagePair:new Xi("image-pair",n),old:new Xi("old",n),new:new Xi("new",n)}}function Fe(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}Fe.prototype.addEventListener=function(n,e,t){var i=null,o=null;if(!(t!=null&&typeof t!="boolean"&&(i=t.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(_m(c,n,e,t)===-1){var y=this,b=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(b=function(C){y.removeEventListener(n,e,t),typeof e=="function"?e.call(this,C):e.handleEvent(C)}),i!==null&&(o=y.removeEventListener.bind(y,n,e,t),i.addEventListener("abort",o,{once:!0}),o=i.removeEventListener.bind(i,"abort",o)),i=Hl(t),c.push({type:n,listener:e,optionsOrUseCapture:t,attachedListener:b,cleanup:o}),v(this._fragmentFiber.child,!1,J1,n,b,i)}this._eventListeners=c}};function J1(n,e,t,i){return T(n).addEventListener(e,t,i),!1}Fe.prototype.removeEventListener=function(n,e,t){var i=this._eventListeners;if(i!==null&&(e=_m(i,n,e,t),e!==-1)){var o=i[e];t=o.attachedListener;var c=o.cleanup;o=Hl(o.optionsOrUseCapture),v(this._fragmentFiber.child,!1,F1,n,t,o),i.splice(e,1),c!==null&&c()}};function F1(n,e,t,i){return T(n).removeEventListener(e,t,i),!1}function Hl(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function ym(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function _m(n,e,t,i){if(n.length===0)return-1;i=ym(i);for(var o=0;o<n.length;o++){var c=n[o];if(c.type===e&&c.listener===t&&ym(c.optionsOrUseCapture)===i)return o}return-1}Fe.prototype.dispatchEvent=function(n){var e=k(this._fragmentFiber);if(e===null)return!0;e=T(e);var t=this._eventListeners;if(t!==null&&0<t.length||!n.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var o=0;o<t.length;o++){var c=t[o];i.addEventListener(c.type,c.attachedListener,Hl(c.optionsOrUseCapture))}if(e.appendChild(i),n=i.dispatchEvent(n),t)for(o=0;o<t.length;o++)c=t[o],i.removeEventListener(c.type,c.attachedListener,Hl(c.optionsOrUseCapture));return e.removeChild(i),n}return e.dispatchEvent(n)},Fe.prototype.focus=function(n){v(this._fragmentFiber.child,!0,vm,n,void 0,void 0)};function vm(n,e){return n.tag===6?!1:(n=T(n),r_(n,e))}Fe.prototype.focusLast=function(n){var e=[];v(this._fragmentFiber.child,!0,bu,e,void 0,void 0);for(var t=e.length-1;0<=t&&!vm(e[t],n);t--);};function bu(n,e){return e.push(n),!1}Fe.prototype.blur=function(){var n=k(this._fragmentFiber);n!==null&&(n=T(n),n=Xa(n).activeElement,n!==null&&v(this._fragmentFiber.child,!1,P1,n,void 0,void 0))};function P1(n,e){return n.tag===6?!1:(n=T(n),n===e||n.contains(e)?(e.blur(),!0):!1)}Fe.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),v(this._fragmentFiber.child,!1,W1,n,void 0,void 0)};function W1(n,e){return n.tag===6||(n=T(n),e.observe(n)),!1}Fe.prototype.unobserveUsing=function(n){var e=this._observers;if(e!==null&&e.has(n)){e.delete(n),v(this._fragmentFiber.child,!1,n_,n,void 0,void 0);for(var t=e=0;t<_t.length;t++){var i=_t[t];i.fragmentInstance===this&&i.observer===n?n.unobserve(i.instance):_t[e++]=i}_t.length=e}};function n_(n,e){return n.tag===6||(n=T(n),e.unobserve(n)),!1}var _t=[],xu=!1;function e_(n,e,t){_t.push({fragmentInstance:n,observer:e,instance:t}),xu||(xu=!0,u_(function(){xu=!1;var i=_t;_t=[];for(var o=0;o<i.length;o++){var c=i[o];c.observer.unobserve(c.instance)}}))}Fe.prototype.getClientRects=function(){var n=[];return v(this._fragmentFiber.child,!1,t_,n,void 0,void 0),n};function t_(n,e){if(n.tag===6){n=n.stateNode;var t=n.ownerDocument.createRange();t.selectNodeContents(n),e.push.apply(e,t.getClientRects())}else n=T(n),e.push.apply(e,n.getClientRects());return!1}Fe.prototype.getRootNode=function(n){var e=k(this._fragmentFiber);return e===null?this:T(e).getRootNode(n)},Fe.prototype.compareDocumentPosition=function(n){var e=k(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];v(this._fragmentFiber.child,!1,bu,t,void 0,void 0);var i=T(e);if(t.length===0){if(t=i,w(this._fragmentFiber)){n:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break n}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var o=i=t.compareDocumentPosition(n);return t===n?o=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=S(e)[1],t===null?o=Node.DOCUMENT_POSITION_PRECEDING:(n=T(t).compareDocumentPosition(n),o=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=T(t[0]),o=T(t[t.length-1]);var c=w(this._fragmentFiber)?e.parentElement:i;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=e.compareDocumentPosition(n),b=o.compareDocumentPosition(n),C=y&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=i&&c&&y&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===n||c&&o===n||C||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===n||!c&&o===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||i_(e,this._fragmentFiber,t[0],t[t.length-1],n)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function i_(n,e,t,i,o){var c=Ci(o);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!c)n:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){t=!0;break n}c=c.return}t=!1}return t}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=o.ownerDocument,o===c||o===c.documentElement||o===c.body;n:{for(c=e,e=k(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break n}c=c.return}c=!1}return c}return n&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===t)&&(e=G(t,c,H),e===null?e=!1:(v(e,!0,R,c,t),c=x,x=null,e=c!==null)),e):n&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===i)&&(e=G(i,c,H),e===null?e=!1:(v(e,!0,U,c,i),c=x,A=x=null,e=c!==null)),e):!1}function km(n,e){var t=n.ownerDocument.createRange();t.selectNodeContents(n),n=t.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,e?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}Fe.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(r(566));var e=[];v(this._fragmentFiber.child,!1,bu,e,void 0,void 0);var t=n!==!1;if(e.length===0){var i=S(this._fragmentFiber);if(i=t?i[1]||i[0]||k(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){n=T(i),km(n,t);return}if(i=T(i),i.nodeType!==9){if(i.nodeType===11){t="host"in i?i.host:null,t!==null&&t.scrollIntoView(n);return}i.scrollIntoView(n)}}for(i=t?e.length-1:0;i!==(t?-1:e.length);){var o=e[i];o.tag===6?(o=T(o),km(o,t)):T(o).scrollIntoView(n),i+=t?-1:1}};function l_(n,e){return n=T(n),wm(n,e),!1}function wm(n,e){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(e)}function bm(n,e){var t=e._eventListeners;if(t!==null)for(var i=0;i<t.length;i++){var o=t[i];n.addEventListener(o.type,o.attachedListener,Hl(o.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(c){for(var y=0,b=0;b<_t.length;b++){var C=_t[b];(C.fragmentInstance!==e||C.observer!==c||C.instance!==n)&&(_t[y++]=C)}_t.length=y,c.observe(n)}),wm(n,e))}function a_(n,e){var t=e._eventListeners;if(t!==null)for(var i=0;i<t.length;i++){var o=t[i];n.removeEventListener(o.type,o.attachedListener,Hl(o.optionsOrUseCapture))}n.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(c){typeof c.rootMargin=="string"?e_(e,c,n):c.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(e))}function Su(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Su(t),As(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function s_(n,e,t,i){for(;n.nodeType===1;){var o=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[da])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(c=n.getAttribute("rel"),c==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(c!==o.rel||n.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||n.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||n.getAttribute("title")!==(o.title==null?null:o.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(c=n.getAttribute("src"),(c!==(o.src==null?null:o.src)||n.getAttribute("type")!==(o.type==null?null:o.type)||n.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&n.getAttribute("name")===c)return n}else return n;if(n=rt(n.nextSibling),n===null)break}return null}function o_(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=rt(n.nextSibling),n===null))return null;return n}function xm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=rt(n.nextSibling),n===null))return null;return n}function Eu(n){return n.data==="$?"||n.data==="$~"}function Cu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function c_(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var i=function(){e(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function rt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Au=null;function Sm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return rt(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Em(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function r_(n,e){function t(){i=!0}if(n.ownerDocument.activeElement===n)return!0;var i=!1;try{n.ownerDocument.addEventListener("focus",t,!0),(n.focus||HTMLElement.prototype.focus).call(n,e)}finally{n.ownerDocument.removeEventListener("focus",t,!0)}return i}function u_(n){dm(function(){dm(function(e){return n(e)})})}function Cm(n,e,t){switch(e=Xa(t),n){case"html":if(n=e.documentElement,!n)throw Error(r(452));return n;case"head":if(n=e.head,!n)throw Error(r(453));return n;case"body":if(n=e.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Am(n,e,t){for(var i in t){var o=t[i];t.hasOwnProperty(i)&&o!=null&&Un(n,e,i,null,Y1,o)}t.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===wt&&(n.onclick=null),As(n)}function Tu(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);As(n)}var ut=new Map,Tm=new Set;function $a(n){if(typeof n.getRootNode=="function"){var e=n.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return n.nodeType===9?n:n.ownerDocument}var Xt=dn.d;dn.d={f:d_,r:h_,D:f_,C:g_,L:m_,m:p_,X:__,S:y_,M:v_};function d_(){var n=Xt.f(),e=Mo();return n||e}function h_(n){var e=sl(n);e!==null&&e.tag===5&&e.type==="form"?Nf(e):Xt.r(n)}var Ul=typeof document>"u"?null:document;function jm(n,e,t){var i=Ul;if(i&&typeof e=="string"&&e){var o=tt(e);o='link[rel="'+n+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),Tm.has(o)||(Tm.add(o),n={rel:n,crossOrigin:t,href:e},i.querySelector(o)===null&&(e=i.createElement("link"),Se(e,"link",n),me(e),i.head.appendChild(e)))}}function f_(n){Xt.D(n),jm("dns-prefetch",n,null)}function g_(n,e){Xt.C(n,e),jm("preconnect",n,e)}function m_(n,e,t){Xt.L(n,e,t);var i=Ul;if(i&&n&&e){var o='link[rel="preload"][as="'+tt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+tt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+tt(t.imageSizes)+'"]')):o+='[href="'+tt(n)+'"]';var c=o;switch(e){case"style":c=Bl(n);break;case"script":c=Ll(n)}if(!(ut.has(c)||(n=J({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),ut.set(c,n),i.querySelector(o)!==null||e==="style"&&i.querySelector(Za(c))||e==="script"&&i.querySelector(Ja(c))))){var y=i.createElement("link");Se(y,"link",n),e==="style"&&(y[Cs]=!0,y.onload=y.onerror=function(){Hd(y)}),me(y),i.head.appendChild(y)}}}function p_(n,e){Xt.m(n,e);var t=Ul;if(t&&n){var i=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+tt(i)+'"][href="'+tt(n)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ll(n)}if(!ut.has(c)&&(n=J({rel:"modulepreload",href:n},e),ut.set(c,n),t.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ja(c)))return}i=t.createElement("link"),Se(i,"link",n),me(i),t.head.appendChild(i)}}}function y_(n,e,t){Xt.S(n,e,t);var i=Ul;if(i&&n){var o=ol(i).hoistableStyles,c=Bl(n);e=e||"default";var y=o.get(c);if(!y){var b={loading:0,preload:null};if(y=i.querySelector(Za(c)))b.loading=5;else{n=J({rel:"stylesheet",href:n,"data-precedence":e},t),(t=ut.get(c))&&ju(n,t);var C=y=i.createElement("link");me(C),Se(C,"link",n),C._p=new Promise(function(Q,D){C.onload=Q,C.onerror=D}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Do(y,e,i)}y={type:"stylesheet",instance:y,count:1,state:b},o.set(c,y)}}}function __(n,e){Xt.X(n,e);var t=Ul;if(t&&n){var i=ol(t).hoistableScripts,o=Ll(n),c=i.get(o);c||(c=t.querySelector(Ja(o)),c||(n=J({src:n,async:!0},e),(e=ut.get(o))&&Nu(n,e),c=t.createElement("script"),me(c),Se(c,"link",n),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function v_(n,e){Xt.M(n,e);var t=Ul;if(t&&n){var i=ol(t).hoistableScripts,o=Ll(n),c=i.get(o);c||(c=t.querySelector(Ja(o)),c||(n=J({src:n,async:!0,type:"module"},e),(e=ut.get(o))&&Nu(n,e),c=t.createElement("script"),me(c),Se(c,"link",n),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function Nm(n,e,t,i){var o=(o=ne.current)?$a(o):null;if(!o)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Bl(t.href),e=ol(o).hoistableStyles,i=e.get(t),i||(i={type:"style",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Bl(t.href);var c=ol(o).hoistableStyles,y=c.get(n);if(y||(o=o.ownerDocument||o,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(n,y),(c=o.querySelector(Za(n)))?c._p||(y.instance=c,y.state.loading=5):(c=ut.get(n),c||(c={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ut.set(n,c)),k_(o,n,c,y.state))),e&&i===null)throw Error(r(528,""));return y}if(e&&i!==null)throw Error(r(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=Ll(t),e=ol(o).hoistableScripts,i=e.get(t),i||(i={type:"script",instance:null,count:0,state:null},e.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function Bl(n){return'href="'+tt(n)+'"'}function Za(n){return'link[rel="stylesheet"]['+n+"]"}function Mm(n){return J({},n,{"data-precedence":n.precedence,precedence:null})}function k_(n,e,t,i){if(e=n.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Cs]!==!0){i.loading=1;return}}else e=n.createElement("link"),e[Cs]=!0,e.onload=e.onerror=Hd.bind(null,e),Se(e,"link",t),me(e),n.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function Ll(n){return'[src="'+tt(n)+'"]'}function Ja(n){return"script[async]"+n}function qm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var i=n.querySelector('style[data-href~="'+tt(t.href)+'"]');if(i)return e.instance=i,me(i),i;var o=J({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),me(i),Se(i,"style",o),Do(i,t.precedence,n),e.instance=i;case"stylesheet":o=Bl(t.href);var c=n.querySelector(Za(o));if(c)return e.state.loading|=4,e.instance=c,me(c),c;i=Mm(t),(o=ut.get(o))&&ju(i,o),c=(n.ownerDocument||n).createElement("link"),me(c);var y=c;return y._p=new Promise(function(b,C){y.onload=b,y.onerror=C}),Se(c,"link",i),e.state.loading|=4,Do(c,t.precedence,n),e.instance=c;case"script":return c=Ll(t.src),(o=n.querySelector(Ja(c)))?(e.instance=o,me(o),o):(i=t,(o=ut.get(c))&&(i=J({},t),Nu(i,o)),n=n.ownerDocument||n,o=n.createElement("script"),me(o),Se(o,"link",i),n.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Do(i,t.precedence,n));return e.instance}function Do(n,e,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,y=0;y<i.length;y++){var b=i[y];if(b.dataset.precedence===e)c=b;else if(c!==o)break}c?c.parentNode.insertBefore(n,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function ju(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Nu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Yo=null;function Qm(n,e,t){if(Yo===null){var i=new Map,o=Yo=new Map;o.set(t,i)}else o=Yo,i=o.get(t),i||(i=new Map,o.set(t,i));if(i.has(n))return i;for(i.set(n,null),t=t.getElementsByTagName(n),o=0;o<t.length;o++){var c=t[o];if(!(c[da]||c[ve]||n==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var y=c.getAttribute(e)||"";y=n+y;var b=i.get(y);b?b.push(c):i.set(y,[c])}}return i}function Mu(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function w_(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Km(n,e){return n==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Om(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function zm(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Rm(n,e){typeof e.decode=="function"&&(n.imgCount++,e.complete||(n.imgBytes+=zm(e),n.suspenseyImages.push(e)),n=S_.bind(n),e.decode().then(n,n))}function b_(n,e,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Bl(i.href),c=e.querySelector(Za(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Fa.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=c,me(c);return}c=e.ownerDocument||e,i=Mm(i),(o=ut.get(o))&&ju(i,o),c=c.createElement("link"),me(c);var y=c;y._p=new Promise(function(b,C){y.onload=b,y.onerror=C}),Se(c,"link",i),t.instance=c}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Fa.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Io=0;function x_(n,e){return n.stylesheets&&n.count===0&&Uo(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var i=setTimeout(function(){if(n.stylesheets&&Uo(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4+e);0<n.imgBytes&&Io===0&&(Io=62500*H1());var o=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Uo(n,n.stylesheets),n.unsuspend)){var c=n.unsuspend;n.unsuspend=null,c()}},(n.imgBytes>Io?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function Dm(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Uo(n,n.stylesheets);else if(n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}}}function Fa(){this.count--,Dm(this)}function S_(){this.imgCount--,Dm(this)}var Ho=null;function Uo(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Ho=new Map,e.forEach(E_,n),Ho=null,Fa.call(n))}function E_(n,e){if(!(e.state.loading&4)){var t=Ho.get(n);if(t)var i=t.get(null);else{t=new Map,Ho.set(n,t);for(var o=n.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var y=o[c];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(t.set(y.dataset.precedence,y),i=y)}i&&t.set(null,i)}o=e.instance,y=o.getAttribute("data-precedence"),c=t.get(y)||i,c===i&&t.set(null,o),t.set(y,o),this.count++,i=Fa.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(o,n.firstChild)),e.state.loading|=4}}var Vl={$$typeof:P,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function C_(n,e,t,i,o,c,y,b,C){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.hiddenUpdates=dc(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ym(n,e,t,i,o,c,y,b,C,Q,D,V){return n=new C_(n,e,t,y,C,Q,D,V,b),e=1,c===!0&&(e|=24),c=De(3,null,null,e),n.current=c,c.stateNode=n,e=Gc(),e.refCount++,n.pooledCache=e,e.refCount++,c.memoizedState={element:i,isDehydrated:t,cache:e},Jc(c),n}function Im(n){return n?(n=yl,n):yl}function Hm(n,e,t,i,o,c){o=Im(o),i.context===null?i.context=o:i.pendingContext=o,i=ai(e),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=si(n,i,e),t!==null&&(Ue(t,n,e),Ta(t,n,e))}function Um(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function qu(n,e){Um(n,e),(n=n.alternate)&&Um(n,e)}function Bm(n){if(n.tag===13||n.tag===31){var e=Ni(n,67108864);e!==null&&Ue(e,n,67108864),qu(n,67108864)}}function Lm(n){if(n.tag===13||n.tag===31){var e=Je();e=hc(e);var t=Ni(n,e);t!==null&&Ue(t,n,e),qu(n,e)}}var Gl=!0;function A_(n,e,t,i){var o=tn.T;tn.T=null;var c=dn.p;try{dn.p=2,Qu(n,e,t,i)}finally{dn.p=c,tn.T=o}}function T_(n,e,t,i){var o=tn.T;tn.T=null;var c=dn.p;try{dn.p=8,Qu(n,e,t,i)}finally{dn.p=c,tn.T=o}}function Qu(n,e,t,i){if(Gl){var o=Ku(i);if(o===null)gu(n,e,i,Bo,t),Gm(n,i);else if(N_(o,n,e,t,i))i.stopPropagation();else if(Gm(n,i),e&4&&-1<j_.indexOf(n)){for(;o!==null;){var c=sl(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var y=Ei(c.pendingLanes);if(y!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var C=1<<31-Be(y);b.entanglements[1]|=C,y&=~C}Mt(c),(Dn&6)===0&&(To=B()+500,La(0))}}break;case 31:case 13:b=Ni(c,2),b!==null&&Ue(b,c,2),Mo(),qu(c,2)}if(c=Ku(i),c===null&&gu(n,e,i,Bo,t),c===o)break;o=c}o!==null&&i.stopPropagation()}else gu(n,e,i,null,t)}}function Ku(n){return n=vc(n),Ou(n)}var Bo=null;function Ou(n){if(Bo=null,n=Ci(n),n!==null){var e=d(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=h(e),n!==null)return n;n=null}else if(t===31){if(n=g(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Bo=n,null}function Vm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pn:return 2;case xn:return 8;case On:case Vn:return 32;case se:return 268435456;default:return 32}default:return 32}}var zu=!1,_i=null,vi=null,ki=null,Pa=new Map,Wa=new Map,wi=[],j_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gm(n,e){switch(n){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function ns(n,e,t,i,o,c){return n===null||n.nativeEvent!==c?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},e!==null&&(e=sl(e),e!==null&&Bm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),n)}function N_(n,e,t,i,o){switch(e){case"focusin":return _i=ns(_i,n,e,t,i,o),!0;case"dragenter":return vi=ns(vi,n,e,t,i,o),!0;case"mouseover":return ki=ns(ki,n,e,t,i,o),!0;case"pointerover":var c=o.pointerId;return Pa.set(c,ns(Pa.get(c)||null,n,e,t,i,o)),!0;case"gotpointercapture":return c=o.pointerId,Wa.set(c,ns(Wa.get(c)||null,n,e,t,i,o)),!0}return!1}function Xm(n){var e=Ci(n.target);if(e!==null){var t=d(e);if(t!==null){if(e=t.tag,e===13){if(e=h(t),e!==null){n.blockedOn=e,Dd(n.priority,function(){Lm(t)});return}}else if(e===31){if(e=g(t),e!==null){n.blockedOn=e,Dd(n.priority,function(){Lm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lo(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ku(n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);_c=i,t.target.dispatchEvent(i),_c=null}else return e=sl(t),e!==null&&Bm(e),n.blockedOn=t,!1;e.shift()}return!0}function $m(n,e,t){Lo(n)&&t.delete(e)}function M_(){zu=!1,_i!==null&&Lo(_i)&&(_i=null),vi!==null&&Lo(vi)&&(vi=null),ki!==null&&Lo(ki)&&(ki=null),Pa.forEach($m),Wa.forEach($m)}function Vo(n,e){n.blockedOn===e&&(n.blockedOn=null,zu||(zu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,M_)))}var Go=null;function Zm(n){Go!==n&&(Go=n,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Go===n&&(Go=null);for(var e=0;e<n.length;e+=3){var t=n[e],i=n[e+1],o=n[e+2];if(typeof i!="function"){if(Ou(i||t)===null)continue;break}var c=sl(t);c!==null&&(n.splice(e,3),e-=3,yr(c,{pending:!0,data:o,method:t.method,action:i},i,o))}}))}function Xl(n){function e(C){return Vo(C,n)}_i!==null&&Vo(_i,n),vi!==null&&Vo(vi,n),ki!==null&&Vo(ki,n),Pa.forEach(e),Wa.forEach(e);for(var t=0;t<wi.length;t++){var i=wi[t];i.blockedOn===n&&(i.blockedOn=null)}for(;0<wi.length&&(t=wi[0],t.blockedOn===null);)Xm(t),t.blockedOn===null&&wi.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var o=t[i],c=t[i+1],y=o[Re]||null;if(typeof c=="function")y||Zm(t);else if(y){var b=null;if(c&&c.hasAttribute("formAction")){if(o=c,y=c[Re]||null)b=y.formAction;else if(Ou(o)!==null)continue}else b=y.action;typeof b=="function"?t[i+1]=b:(t.splice(i,3),i-=3),Zm(t)}}}function Jm(){function n(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(y){return o=y})},focusReset:"manual",scroll:"manual"})}function e(){o!==null&&(o(),o=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),o!==null&&(o(),o=null)}}}function Ru(n){this._internalRoot=n}Xo.prototype.render=Ru.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(r(409));var t=e.current,i=Je();Hm(t,i,n,e,null,null)},Xo.prototype.unmount=Ru.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Hm(n.current,2,null,n,null,null),Mo(),e[al]=null}};function Xo(n){this._internalRoot=n}Xo.prototype.unstable_scheduleHydration=function(n){if(n){var e=Rd();n={blockedOn:null,target:n,priority:e};for(var t=0;t<wi.length&&e!==0&&e<wi[t].priority;t++);wi.splice(t,0,n),t===0&&Xm(n)}};var Fm=a.version;if(Fm!=="19.3.0")throw Error(r(527,Fm,"19.3.0"));dn.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=p(e),n=n!==null?_(n):null,n=n===null?null:n.stateNode,n};var q_={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:tn,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ne=$o.inject(q_),Me=$o}catch{}}return ts.createRoot=function(n,e){if(!u(n))throw Error(r(299));var t=!1,i="",o=If,c=Hf,y=Uf;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError)),e=Ym(n,1,!1,null,null,t,i,null,o,c,y,Jm),n[al]=e.current,fu(n),new Ru(e)},ts.hydrateRoot=function(n,e,t){if(!u(n))throw Error(r(299));var i=!1,o="",c=If,y=Hf,b=Uf,C=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(y=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.formState!==void 0&&(C=t.formState)),e=Ym(n,1,!0,e,t??null,i,o,C,c,y,b,Jm),e.context=Im(null),t=e.current,i=Je(),i=hc(i),o=ai(i),o.callback=null,si(t,o,i),t=i,e.current.lanes=t,ua(e,t),Mt(e),n[al]=e.current,fu(n),new Xo(e)},ts.version="19.3.0",ts}var op;function L_(){if(op)return Iu.exports;op=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Iu.exports=B_(),Iu.exports}var V_=L_();const G_=`---
id: default
title: Full run
---

world.motifsPerRun: 32
world.regionsPerRun: 8
world.optimizationSwaps: 3
world.optimizationNoise: 0
world.minMotifsPerRegion: 3
world.startRegionInitiallyConquered: true

deck.startingSize: 2
deck.minimumSize: 2
deck.allowDuplicates: false
deck.reward: either

combat.visibleHandSize: 5
combat.maxCardsPerPlay: 5
combat.baseHands: 4
combat.baseDiscards: 0
combat.baseLives: 2
combat.reshuffleOnEmpty: true

difficulty.baseTarget: 100
difficulty.hopMultiplier: 1.5
difficulty.expectedRegionSize: 4
difficulty.sizeSlope: 0.015
difficulty.sizeMin: 0.9
difficulty.sizeMax: 1.15
difficulty.scoreStep: 10
difficulty.targetModel: potential
difficulty.waveLow: 0.45
difficulty.waveHigh: 1.15

texts.minResonantCards: 2
texts.similarityThreshold: catalog
texts.baseBonus: 20
texts.perExtraCardBonus: 10
texts.maxActiveBonusesPerHand: 2
texts.newDiscoveryScoresImmediately: false
texts.bonusAppliedAfterPokerMultiplier: true

progression.pointThresholds: 10, 25, 50, 75, 100, 150, 200
progression.respecBetweenRuns: true
progression.upgrades.hands.cost: 2
progression.upgrades.hands.max: 2
progression.upgrades.discards.cost: 1
progression.upgrades.discards.max: 3
progression.upgrades.lives.cost: 3
progression.upgrades.lives.max: 2
`,X_=`---
id: short
title: Short run
---

world.motifsPerRun: 18
world.regionsPerRun: 5
world.minMotifsPerRegion: 3
`,tc={world:{motifsPerRun:32,regionsPerRun:8,optimizationSwaps:3,optimizationNoise:0,minMotifsPerRegion:3,startRegionInitiallyConquered:!0},deck:{startingSize:2,minimumSize:2,allowDuplicates:!1,reward:"add"},combat:{visibleHandSize:5,maxCardsPerPlay:5,baseHands:4,baseDiscards:3,baseLives:2,reshuffleOnEmpty:!0},difficulty:{baseTarget:100,hopMultiplier:1.5,expectedRegionSize:4,sizeSlope:.015,sizeMin:.9,sizeMax:1.15,scoreStep:10,targetModel:"potential",waveLow:.45,waveHigh:1.15},texts:{minResonantCards:2,similarityThreshold:null,baseBonus:20,perExtraCardBonus:10,maxActiveBonusesPerHand:2,newDiscoveryScoresImmediately:!1,bonusAppliedAfterPokerMultiplier:!0},progression:{pointThresholds:[10,25,50,75,100,150,200],respecBetweenRuns:!0,upgrades:{hands:{cost:2,max:2},discards:{cost:1,max:3},lives:{cost:3,max:2}}}};({...tc,world:{...tc.world}});function Dp(l){const a=[],{world:s,deck:r,combat:u,difficulty:d,texts:h,progression:g}=l;s.motifsPerRun<s.regionsPerRun&&a.push("Need at least one motif per region."),s.regionsPerRun<2&&a.push("A run needs at least two regions."),s.minMotifsPerRegion<1&&a.push("Regions must be allowed to hold at least one motif."),s.minMotifsPerRegion*s.regionsPerRun>s.motifsPerRun&&a.push("Not enough motifs to fill every region to its minimum."),r.reward!=="add"&&r.reward!=="either"&&a.push("deck.reward must be add or either."),r.startingSize<1&&a.push("Starting deck must contain a card."),(r.minimumSize<1||r.minimumSize>r.startingSize)&&a.push("Minimum deck size must sit between 1 and the starting size."),r.startingSize>s.motifsPerRun&&a.push("Starting deck is larger than the world."),(u.visibleHandSize<1||u.maxCardsPerPlay<1)&&a.push("Hand and play sizes must be positive."),u.maxCardsPerPlay>5&&a.push("Poker evaluation accepts at most five cards."),(u.baseHands<1||u.baseDiscards<0||u.baseLives<1)&&a.push("A run needs at least one hand and one life."),(d.baseTarget<=0||d.hopMultiplier<=1||d.scoreStep<=0)&&a.push("Difficulty targets must grow from a positive base."),(d.sizeMin<=0||d.sizeMax<d.sizeMin)&&a.push("Size clamp is invalid."),d.targetModel!=="potential"&&d.targetModel!=="hop"&&a.push("difficulty.targetModel must be potential or hop."),(d.waveLow<=0||d.waveLow>1)&&a.push("difficulty.waveLow must be above 0 and at most 1."),d.waveHigh<d.waveLow&&a.push("difficulty.waveHigh must be at least waveLow."),h.minResonantCards<2&&a.push("Text resonance requires two distinct motifs."),(h.baseBonus<0||h.perExtraCardBonus<0||h.maxActiveBonusesPerHand<0)&&a.push("Text bonuses must be non-negative.");for(const[f,p]of Object.entries(g.upgrades))(p.cost<1||p.max<0)&&a.push(`Upgrade ${f} has an invalid cost or cap.`);return a}const $_=/^([A-Za-z][A-Za-z0-9.]*)\s*:\s*(.*)$/;function Z_(l,a,s="balance"){const r=[],u=structuredClone(l),d=a.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`);let h=d;if(d.startsWith(`---
`)){const g=d.indexOf(`
---
`,4);g<0?r.push(`${s}: frontmatter is not closed`):h=d.slice(g+5)}for(const g of h.split(`
`)){if(!g.trim())continue;const f=g.match($_);if(!f){r.push(`${s}: unreadable line "${g.trim()}"`);continue}J_(u,f[1],f[2].trim(),s,r)}return{config:u,warnings:r}}function J_(l,a,s,r,u){const d=a.split(".");let h=l;for(let p=0;p<d.length-1;p+=1){const _=h[d[p]];if(_==null||typeof _!="object"||Array.isArray(_)){u.push(`${r}: unknown key "${a}"`);return}h=_}const g=d[d.length-1];if(!Object.prototype.hasOwnProperty.call(h,g)){u.push(`${r}: unknown key "${a}"`);return}const f=F_(h[g],s);if(!f.ok){u.push(`${r}: ${a} cannot be "${s}"`);return}h[g]=f.value}function F_(l,a){if(Array.isArray(l)){const s=a.split(",").map(r=>r.trim()).filter(Boolean);return s.length===0||s.some(r=>!/^\d+$/.test(r))?{ok:!1}:{ok:!0,value:s.map(Number)}}if(typeof l=="boolean")return a!=="true"&&a!=="false"?{ok:!1}:{ok:!0,value:a==="true"};if(typeof l=="string"){const s=a.trim();return/^[a-z][a-z-]*$/.test(s)?{ok:!0,value:s}:{ok:!1}}return typeof l=="number"||l===null?a==="catalog"?{ok:!0,value:null}:/^\d+(\.\d+)?$/.test(a)?{ok:!0,value:Number(a)}:{ok:!1}:{ok:!1}}const P_=Object.assign({"../../content/balance/default.md":G_,"../../content/balance/short.md":X_});function Yp(l){const a=Object.entries(P_).find(([s])=>s.endsWith(`/${l}`));return a?a[1]:null}function Ip(l,a,s){const r=Z_(l,a,s),u=Dp(r.config);for(const d of[...r.warnings,...u])console.warn(d);return r.warnings.length===0&&u.length===0?r.config:l}const cp=Yp("default.md"),xi=cp?Ip(tc,cp,"content/balance/default.md"):tc,rp=Yp("short.md"),W_=rp?Ip(xi,rp,"content/balance/short.md"):xi;function Wu(l,a,s){return l[a]/s}function nv(l,a,s,r){const u=r.deityText;if(!u)return null;const d=[...new Set(l)].map(p=>s.deityIndex.get(p)).filter(p=>p!==void 0);if(d.length===0)return null;let h=0;for(const p of d)for(const _ of d)h+=Wu(r.deityDeity,p*r.nDeities+_,r.scale);if(h<=0)return null;const g=Math.sqrt(h);let f=null;for(let p=0;p<s.texts.length;p+=1){const _=s.texts[p];if(a.has(_.id))continue;let v=0;for(const E of d)v+=Wu(u,E*r.nTexts+p,r.scale);const k=v/g,w=!f||k>f.cosine+1e-12,S=f&&Math.abs(k-f.cosine)<=1e-12&&(_.id<f.textId||_.id===f.textId&&p<f.textIndex);(w||S)&&(f={textId:_.id,textIndex:p,cosine:k})}return f?{textId:f.textId,textIndex:f.textIndex,cosine:f.cosine,distance:1-f.cosine,deityIds:d.map(p=>s.deities[p].id)}:null}function ev(l,a,s,r){var p;const u={...a.statistics,wins:a.statistics.wins+1},d=l.anchorTextIndex;let h=d!==void 0&&((p=s==null?void 0:s.texts[d])==null?void 0:p.id)===l.anchorTextId?d:void 0;if(h===void 0&&l.anchorTextId&&s&&r){const _=new Set(l.worldMotifIds);let v=-1;s.texts.forEach((k,w)=>{if(k.id!==l.anchorTextId)return;const E=s.motifs.map((T,x)=>x).sort((T,x)=>r.motifText[x*r.nTexts+w]-r.motifText[T*r.nTexts+w]||T-x).slice(0,_.size).filter(T=>_.has(s.motifs[T].id)).length;E>v&&(v=E,h=w)})}if(h!==void 0&&s&&r){const _=h,v=l.worldMotifIds.flatMap(w=>{const S=s.motifIndex.get(w);return S===void 0?[]:[Wu(r.motifText,S*r.nTexts+_,r.scale)]}),k={id:`${l.seed}-${u.wins}`,seed:l.seed,textId:l.anchorTextId,textIndex:h,distance:v.length?1-v.reduce((w,S)=>w+S,0)/v.length:0,distanceBasis:"motif-mean",deityIds:l.regions.map(w=>w.deityId),regions:l.regions.map(w=>({deityId:w.deityId,motifIds:w.motifIds.slice()})),deckMotifIds:l.deckMotifIds.slice(),powers:[...l.powers??[]],powersOff:[...l.powersOff??[]],catalogVersion:l.catalogVersion};return{...a,statistics:u,discoveredTextIds:a.discoveredTextIds.includes(k.textId)?a.discoveredTextIds:[...a.discoveredTextIds,k.textId],artifacts:[...a.artifacts??[],k]}}const g=s&&r?nv(l.regions.map(_=>_.deityId),new Set(a.discoveredTextIds),s,r):null;if(!g)return{...a,statistics:u};const f={id:`${l.seed}-${u.wins}`,seed:l.seed,textId:g.textId,textIndex:g.textIndex,distance:g.distance,deityIds:g.deityIds};return{...a,statistics:u,discoveredTextIds:a.discoveredTextIds.includes(g.textId)?a.discoveredTextIds:[...a.discoveredTextIds,g.textId],artifacts:[...a.artifacts??[],f]}}function Hp(l){return l.toFixed(3)}function tv(l){if(!l||typeof l!="object")throw new Error("Emoji scaffold is missing.");const a=l;if(!a.scaffoldVersion||!Array.isArray(a.emoji)||!Array.isArray(a.motifs))throw new Error("Emoji scaffold is missing its version or tables.");const s=new Set;for(const u of a.emoji){if(!u.id||!u.symbol||!u.name)throw new Error("An emoji row is missing its identity.");if(s.has(u.id))throw new Error(`Emoji id ${u.id} is repeated.`);if(s.add(u.id),!Array.isArray(u.codePoints)||u.codePoints.length<1)throw new Error(`Emoji ${u.id} has no code-point sequence.`);if(u.codePoints.some(d=>!Number.isInteger(d)||d<0))throw new Error(`Emoji ${u.id} has a code point that is not a whole number.`)}const r=new Set;for(const u of a.motifs){if(!u.id||!u.name)throw new Error("A motif row is missing its id or name.");if(r.has(u.name))throw new Error(`Motif name ${u.name} is repeated.`);r.add(u.name);let d=1/0;u.neighbors.forEach((h,g)=>{if(h.rank!==g+1)throw new Error(`${u.name} has a broken rank.`);if(!Number.isFinite(h.score)||h.score<-1||h.score>1)throw new Error(`${u.name} has a score that is not a cosine.`);if(h.score>d)throw new Error(`${u.name} is not ranked from strongest to weakest.`);if(!s.has(h.emoji))throw new Error(`${u.name} points at an unknown emoji.`);d=h.score})}return a}const iv=3,Up=12;function dd(l){const a=Number.isFinite(l)?Math.max(0,Math.floor(l)):0;return Math.min(Up,iv+a)}const rs=.45,nd=.85;function Bp(l){return Math.min(1,Math.max(0,(l-rs)/(nd-rs)))}const lv=[106,138,196],up=[215,181,106],av=[224,96,58];function sv(l,a,s){return Math.round(l+(a-l)*s)}function ov(l){const a=Bp(l),[s,r,u]=a<.5?[lv,up,a/.5]:[up,av,(a-.5)/.5],d=s.map((h,g)=>sv(h,r[g],u));return{stroke:`rgb(${d.join(", ")})`,fill:`rgba(${d.join(", ")}, 0.45)`}}const dp={start:65024,end:65039};function cv(l){return l.filter(a=>a<dp.start||a>dp.end).join("-")}function Lp(l,a,s){const r=new Set,u=[];for(const d of l){const h=a.get(d.emoji),g=h?cv(h.codePoints):d.emoji;if(!r.has(g)&&(r.add(g),u.push(d),u.length>=s))break}return u}function rv(l,a){const s=new DataView(l);if(l.byteLength<12||String.fromCharCode(...new Uint8Array(l,0,4))!=="GBA1")throw new Error("Alchemy data has an invalid header.");const r=s.getUint32(4,!0),u=s.getUint32(8,!0),d=12+r+u;if(u>3||d>l.byteLength||d%4!==0)throw new Error("Alchemy data is incomplete.");const h=JSON.parse(new TextDecoder().decode(new Uint8Array(l,12,r))),g=a.emoji.filter(f=>f.kept).map(f=>f.id);if(h.scaffoldVersion!==a.scaffoldVersion||!Array.isArray(h.motifNames)||!Array.isArray(h.emojiIds)||h.motifNames.length!==a.motifs.length||h.emojiIds.length!==g.length||h.motifNames.some((f,p)=>f!==a.motifs[p].name)||h.emojiIds.some((f,p)=>f!==g[p])||l.byteLength-d!==h.motifNames.length*h.emojiIds.length*4)throw new Error("Alchemy data does not match the emoji scaffold.");return{motifNames:h.motifNames,emojiIds:h.emojiIds,scores:new Float32Array(l,d)}}async function uv(l="./"){const a=l.endsWith("/")?l:`${l}/`,s=await fetch(`${a}data/emoji-scaffold.json`);if(s.status===404)return null;if(!s.ok)throw new Error("Emoji scaffold failed to load.");const r=tv(await s.json());try{const u=await fetch(`${a}data/emoji-alchemy.bin`);u.ok&&(r.alchemy=rv(await u.arrayBuffer(),r))}catch(u){console.warn("Alchemy similarity data is unavailable:",u)}return r}function ic(l,a,s){if(!l)return[];const r=l.motifs.find(d=>d.id===a);if(!r)return[];const u=new Map(l.emoji.map(d=>[d.id,d]));return Lp(r.neighbors,u,dd(s)).map(d=>d.emoji)}function Vp(l,a,s,r,u){var v;if(!(l!=null&&l.alchemy)||r.length===0)return null;const d=new Map;for(const k of r)d.set(k,(d.get(k)??0)+1);if([...d].some(([k,w])=>{var S;return(((S=s.emojiInventory)==null?void 0:S[k])??0)<w}))return null;const h=l.alchemy,g=new Map(h.emojiIds.map((k,w)=>[k,w])),f=r.map(k=>g.get(k));if(f.some(k=>k===void 0))return null;const p=new Set(u);let _=null;for(let k=0;k<h.motifNames.length;k++){const w=l.motifs[k];if(!w||w.name!==h.motifNames[k]||p.has(w.id))continue;const S=a.motifIndex.get(w.id);if(S===void 0||((v=a.motifs[S])==null?void 0:v.name)!==w.name)continue;let E=0;for(const T of f)E+=h.scores[k*h.emojiIds.length+T];Number.isFinite(E)&&(!_||E>_.score||E===_.score&&w.id<_.id)&&(_={id:w.id,score:E})}return(_==null?void 0:_.id)??null}const dv=`---
id: after-home
---

> [[on-map|seen_total == 0]]
> [[playing]]
`,hv=`---
id: after-join
---

> [[playing]]
`,fv=`---
id: choose-home
title: Virgilio · Where you begin
show: offer
offer: starting-territory
open: new-run
---

Choose where you begin. Your land gives you two cards and may grant a god's power. Compare the choices; this is the first shape of your deck.

> [[after-home|offer_open == 0]]
`,gv=`---
id: choose-join
title: Where you join
show: offer
offer: joining-territory
open: new-map
---

Choose the land you enter with. Its power joins the ones you already carry. The deck stays as it is. The two cards are the ones that land would have started with.

> [[choose-home|current_conquered_maps == 0]]
> [[after-join|offer_open == 0]]
`,mv=`---
id: dealt
title: Virgilio · The first hand
show: coach
at: play-all
---

Your cards are here. A [[term.rank|?]] hides a rank, not its picture. Play all to send the hand, or select cards and play only those.

> [[revealed|hands_run >= 1]]
`,pv=`---
id: empty
title: Virgilio · The threshold
show: dialog
---

You may call me Virgilio. Your library is empty; as you meet motifs, their pictures and names will find a place here.

? [[enter-table|Show me the table]]
> [[enter-table|runs >= 1]]
`,yv=`---
id: enter-table
title: Virgilio · The table
show: coach
at: start-run
---

Begin a run with a small deck. Choose Short run if you want a smaller map.

> [[choose-home|offer_open == 1]]
> [[on-map|runs >= 1]]
`,_v=`---
id: lesson.fifty
title: Fifty motifs
show: dialog
---

Fifty motifs is a real sitting with the collection. Each one you have seen can be opened again from the library. The ones you have not met are still absent.

? [[playing|Keep going]]
`,vv=`---
id: lesson.fight-score
title: Virgilio · A sum of hands
show: page
---

Your score carries from one hand to the next. You can reach the target across several plays.

? [[playing|Keep playing]]
`,kv=`---
id: lesson.frontier
title: Virgilio · One step
show: dialog
---

Your frontier grows from the lands you hold. You can attack their neighbors; gods farther away wait beyond the visible map.

? [[playing|Keep going]]
`,wv=`---
id: lesson.new-card
title: Virgilio · A changing deck
show: page
---

Your deck can change after a victory. You may add a motif, remove a card, or combine cards when that choice is available.

? [[playing|Keep playing]]
`,bv=`---
id: lesson.question-mark
title: Virgilio · The question mark
show: dialog
---

You can see a motif's picture before you know its [[term.rank|rank]]. A ? marks a rank you have not yet revealed by playing that card.

? [[playing|Keep going]]
`,xv=`---
id: lesson.this-run
title: This run
show: dialog
---

Seen this run counts only the motifs met since the run began. A new run starts that count over. The library keeps the lifetime total.

? [[playing|Keep going]]
`,Sv=`---
id: library-tip
title: Virgilio · The library
show: coach
at: library
---

Your library keeps the motifs you have met. Open it from the bar whenever you want to return to them.

? [[playing|Back to the table]]
`,Ev=`---
id: on-map
title: Virgilio · The frontier
show: coach
at: attack
---

Your home is already yours. Choose a neighboring god: its target tells you the score to reach, and any power shown is yours to gain.

> [[virgilio.first-play-gate|hands_run >= 1]]
> [[dealt|in_battle == 1]]
`,Cv=`---
id: playing
---

> [[choose-join|offer_open == 1]]

+ [[virgilio.reward-moment|reward_visible == 1]]
+ [[virgilio.first-map|current_conquered_maps >= 1]]
+ [[lesson.question-mark|discovered_total >= 1]]
+ [[skill.studied-hand|hands_run >= 1]]
+ [[lesson.this-run|seen_run > 10]]
+ [[lesson.frontier|conquered >= 2]]
+ [[lesson.fight-score|hands_run >= 1]]
+ [[virgilio.power|hands_run >= 1]]
+ [[skill.high-card|hands_run >= 2]]
+ [[lesson.new-card|conquered >= 2]]
+ [[virgilio.read-deck|conquered >= 2]]
+ [[virgilio.resemblance|conquered >= 3]]
+ [[skill.pair|conquered >= 2]]
+ [[virgilio.story|texts_total >= 1]]
+ [[virgilio.self-resemblance|hands_run >= 1]]
`,Av=`---
id: returning
title: Virgilio · Welcome back
show: dialog
---

You return with a library. The motifs you met and the ranks you revealed are still here; each new run begins with its own deck.

? [[playing|Continue]]
`,Tv=`---
id: revealed
title: Virgilio · A first reading
show: dialog
---

You have revealed the ranks of the cards you played. Their pictures were already familiar; their ranks will stay known after this run ends.

? [[library-tip|Where do they go?]]
? [[playing|Keep playing]]
`,jv=`---
id: self.afraid
title: I am afraid
voice: self
on: afraid
---

I am afraid
`,Nv=`---
id: self.curious
title: I am curious
voice: self
on: curious
---

I am curious
`,Mv=`---
id: self.stronger
title: I'm stronger
voice: self
on: stronger
---

I'm stronger
`,qv=`---
id: self.untried
title: I have not tried my hand
voice: self
if: hands_run == 0
---

I have not tried my hand.
`,Qv=`---
id: self.weaker
title: I'm weaker
voice: self
on: weaker
---

I'm weaker
`,Kv=`---
id: skill.abeona-and-adeona-going-and-returning
title: Abeona and Adeona: Going and Returning
kind: skill
show: page
when: twoPair
mult: 1
god: Q13550765
---

Your two pair hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Ov=`---
id: skill.abeona-departure
title: Abeona: Departure
kind: skill
show: page
when: highCard
mult: 1
god: Q319280
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,zv=`---
id: skill.abundantia-plenty
title: Abundantia: Plenty
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q336003
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Rv=`---
id: skill.achaea-venture
title: Achaea: Venture
kind: skill
show: page
discards: 1
god: Q130221053
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Dv=`---
id: skill.adceneicus-storm
title: Adceneicus: Storm
kind: skill
show: page
when: twoPair
mult: 2
god: Q126666979
---

Your two pair hands gain 2 multiplier.

? [[playing|Keep playing]]
`,Yv=`---
id: skill.adeona-return
title: Adeona: Return
kind: skill
show: page
discards: 1
god: Q1242673
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Iv=`---
id: skill.adferenda-gift
title: Adferenda: Gift
kind: skill
show: page
when: pair
chips: 6
god: Q128606559
---

Your pairs gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,Hv=`---
id: skill.adolenda-venture
title: Adolenda: Venture
kind: skill
show: page
discards: 1
god: Q126350638
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Uv=`---
id: skill.aescolanus-copper
title: Aescolanus: Copper
kind: skill
show: page
when: pair
chips: 8
god: Q16144017
---

Your pairs gain 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Bv=`---
id: skill.aesculapius-healing
title: Aesculapius: Healing
kind: skill
show: page
discards: 1
god: Q3920788
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Lv=`---
id: skill.aescvl-nvs-copper
title: Aescvlánvs: Copper
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q21548006
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Vv=`---
id: skill.afferenda-venture
title: Afferenda: Venture
kind: skill
show: page
discards: 1
god: Q126552920
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Gv=`---
id: skill.africa-offering
title: Africa: Offering
kind: skill
show: page
hands: 1
god: Q130221074
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,Xv=`---
id: skill.africus-southwest-wind
title: Africus: Southwest Wind
kind: skill
show: page
when: straight
mult: 2
god: Q5733340
---

Your straights gain 2 multiplier.

? [[playing|Keep playing]]
`,$v=`---
id: skill.agenoria-awakening
title: Agenoria: Awakening
kind: skill
show: page
when: highCard
chips: 6
god: Q4692047
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,Zv=`---
id: skill.agonius-contest
title: Agonius's contest
kind: skill
show: page
when: threeOfAKind
mult: 1
god: Q1339921
---

Your three of a kind hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Jv=`---
id: skill.aguaecus-journey
title: Aguaecus: Journey
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q126633614
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Fv=`---
id: skill.agylle-lake
title: Agylle: Lake
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q12076690
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Pv=`---
id: skill.albarinus-guard
title: Albarinus: Guard
kind: skill
show: page
when: any
chips: 3
god: Q126599438
---

Your hands gain 3 chips before the multiplier.

? [[playing|Keep playing]]
`,Wv=`---
id: skill.albensis-pater-steadfast
title: Albensis pater: Steadfast
kind: skill
show: page
when: twoPair
chips: 12
god: Q129261434
---

Your two pair hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,nk=`---
id: skill.alemona-nourishment
title: Alemona: Nourishment
kind: skill
show: page
when: any
rank: Queen
chips: 4
god: Q2832660
---

Each scoring Queen adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,ek=`---
id: skill.alexandria-offering
title: Alexandria: Offering
kind: skill
show: page
hands: 1
god: Q130237041
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,tk=`---
id: skill.almo-river
title: Almo: River
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q4733856
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,ik=`---
id: skill.altor-promise
title: Altor: Promise
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q126552959
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,lk=`---
id: skill.angerona-quiet
title: Angerona: Quiet
kind: skill
show: page
when: highCard
mult: 1
god: Q538339
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,ak=`---
id: skill.angitia-serpent
title: Angitia: Serpent
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q2276605
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,sk=`---
id: skill.anio-attraction
title: Anio: River Anio
kind: skill
show: page
when: any
domain: affinity
threshold: 0.52
reach: 0.10
chips: 12
god: Q126924531
---

Each scoring motif close to Anio gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,ok=`---
id: skill.anna-perenna-turning-year
title: Anna Perenna: Turning Year
kind: skill
show: page
when: straight
chips: 12
god: Q539796
---

Your straights gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,ck=`---
id: skill.annona-grain
title: Annona: Grain
kind: skill
show: page
when: any
chips: 5
god: Q581656
---

Your hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,rk=`---
id: skill.apollo-measure
title: Apollo's measure
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q37340
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,uk=`---
id: skill.appiades-journey
title: Appiades: Journey
kind: skill
show: page
when: pair
chips: 7
god: Q56036048
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,dk=`---
id: skill.appias-venture
title: Appias: Venture
kind: skill
show: page
discards: 1
god: Q56036020
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,hk=`---
id: skill.aquilon-north-wind
title: Aquilon: North Wind
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q2859290
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,fk=`---
id: skill.arabia-venture
title: Arabia: Venture
kind: skill
show: page
discards: 1
god: Q130237098
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,gk=`---
id: skill.arcecius-crossing
title: Arcecius: Crossing
kind: skill
show: page
when: pair
chips: 6
god: Q126633160
---

Your pairs gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,mk=`---
id: skill.argentinus-silver
title: Argentinus: Silver
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q16532372
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,pk=`---
id: skill.arimanius-darkness
title: Arimanius: Darkness
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q4790686
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,yk=`---
id: skill.armenia-venture
title: Armenia: Venture
kind: skill
show: page
discards: 1
god: Q130237121
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,_k=`---
id: skill.arno-attraction
title: Arno: River Arno
kind: skill
show: page
when: any
domain: affinity
threshold: 0.52
reach: 0.10
chips: 12
god: Q43268368
---

Each scoring motif close to Arno gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,vk=`---
id: skill.artemis-of-perge-bond
title: Artemis of Perge: Bond
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q130237141
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,kk=`---
id: skill.asia-venture
title: Asia: Venture
kind: skill
show: page
discards: 1
god: Q130237163
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,wk=`---
id: skill.assaecus-river
title: Assaecus: River
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q126642802
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,bk=`---
id: skill.aurora-first-light
title: Aurora: First Light
kind: skill
show: page
when: highCard
mult: 1
god: Q178831
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,xk=`---
id: skill.auster-south-wind
title: Auster: South Wind
kind: skill
show: page
when: straight
chips: 14
god: Q611138
---

Your straights gain 14 chips before the multiplier.

? [[playing|Keep playing]]
`,Sk=`---
id: skill.avaritia-hoard
title: Avaritia: Hoard
kind: skill
show: page
when: fourOfAKind
chips: 15
mult: 1
god: Q43268561
---

Your four of a kind hands gain 15 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Ek=`---
id: skill.averruncus-protection
title: Averruncus: Protection
kind: skill
show: page
hands: 1
god: Q4828341
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,Ck=`---
id: skill.bacchus-feast
title: Bacchus: Feast
kind: skill
show: page
when: fullHouse
chips: 12
mult: 1
god: Q645312
---

Your full houses gain 12 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Ak=`---
id: skill.bassoledulitanus-radiance
title: Bassoledulitanus: Radiance
kind: skill
show: page
when: straight
mult: 2
god: Q126667656
---

Your straights gain 2 multiplier.

? [[playing|Keep playing]]
`,Tk=`---
id: skill.beladon-courage
title: Beladon: Courage
kind: skill
show: page
when: pair
chips: 5
mult: 1
god: Q126599462
---

Your pairs gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,jk=`---
id: skill.bellum-conflict
title: Bellum: Conflict
kind: skill
show: page
when: threeOfAKind
mult: 2
god: Q20747538
---

Your three of a kind hands gain 2 multiplier.

? [[playing|Keep playing]]
`,Nk=`---
id: skill.bithynia-promise
title: Bithynia: Promise
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q130237170
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Mk=`---
id: skill.bonus-eventus-good-fortune
title: Bonus Eventus: Good Fortune
kind: skill
show: page
when: highCard
chips: 4
mult: 1
god: Q781780
---

Your high card hands gain 4 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,qk=`---
id: skill.britovius-battle
title: Britovius: Battle
kind: skill
show: page
when: pair
chips: 8
god: Q126669119
---

Your pairs gain 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Qk=`---
id: skill.bubona-herd
title: Bubona: Herd
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q624783
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,Kk=`---
id: skill.budenicus-promise
title: Budenicus: Promise
kind: skill
show: page
when: highCard
mult: 1
god: Q1001348
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Ok=`---
id: skill.caca-hearth
title: Caca: Hearth
kind: skill
show: page
when: any
chips: 3
god: Q1024984
---

Your hands gain 3 chips before the multiplier.

? [[playing|Keep playing]]
`,zk=`---
id: skill.caelestis-horizon
title: Caelestis: Horizon
kind: skill
show: page
when: highCard
mult: 1
god: Q75491130
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Rk=`---
id: skill.caligo-mist
title: Caligo: Mist
kind: skill
show: page
discards: 1
god: Q4286521
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Dk=`---
id: skill.camulus-vigor
title: Camulus: Vigor
kind: skill
show: page
when: threeOfAKind
chips: 14
god: Q1031786
---

Your three of a kind hands gain 14 chips before the multiplier.

? [[playing|Keep playing]]
`,Yk=`---
id: skill.canappharis-domain
title: Canappharis: Courage
kind: skill
show: page
when: any
domain: words
words: war, battle, soldier
chips: 8
god: Q126924939
---

Each scoring motif whose name or description contains war, battle, soldier gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Ik=`---
id: skill.canens-song
title: Canens: Song
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q2261732
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Hk=`---
id: skill.cappadocia-offering
title: Cappadocia: Offering
kind: skill
show: page
hands: 1
god: Q130262215
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,Uk=`---
id: skill.cardea-threshold
title: Cardea's threshold
kind: skill
show: page
when: highCard
mult: 1
god: Q83992
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Bk=`---
id: skill.caritas-attraction
title: Caritas: Charity
kind: skill
show: page
when: any
domain: affinity
threshold: 0.52
reach: 0.10
chips: 12
god: Q128715023
---

Each scoring motif close to Caritas gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Lk=`---
id: skill.catius-pater-journey
title: Catius pater: Journey
kind: skill
show: page
when: pair
chips: 7
god: Q126553040
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,Vk=`---
id: skill.cela-gathering
title: Cela: Gathering
kind: skill
show: page
when: pair
chips: 7
god: Q126553108
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,Gk=`---
id: skill.cimiacinus-passage
title: Cimiacinus: Passage
kind: skill
show: page
when: highCard
chips: 7
god: Q126632305
---

Your high card hands gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,Xk=`---
id: skill.cimistenus-sky
title: Cimistenus: Sky
kind: skill
show: page
when: any
chips: 5
god: Q126635165
---

Your hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,$k=`---
id: skill.cinxia-knot
title: Cinxia: Knot
kind: skill
show: page
when: twoPair
chips: 10
god: Q57520120
---

Your two pair hands gain 10 chips before the multiplier.

? [[playing|Keep playing]]
`,Zk=`---
id: skill.clementia-mercy
title: Clementia: Mercy
kind: skill
show: page
discards: 1
god: Q1100314
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Jk=`---
id: skill.cloacina-cleansing
title: Cloacina: Cleansing
kind: skill
show: page
discards: 1
god: Q2879107
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Fk=`---
id: skill.coinquenda-promise
title: Coinquenda: Promise
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q126553154
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Pk=`---
id: skill.colapis-accord
title: Colapis: Accord
kind: skill
show: page
when: any
rank: King
chips: 4
god: Q130262231
---

Each scoring King adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Wk=`---
id: skill.coluber-current
title: Coluber: Current
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q126553194
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,nw=`---
id: skill.commolenda-accord
title: Commolenda: Accord
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q126553216
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,ew=`---
id: skill.concordia-accord
title: Concordia: Accord
kind: skill
show: page
when: pair
chips: 5
mult: 1
god: Q746321
---

Your pairs gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,tw=`---
id: skill.conditor-granary
title: Conditor: Granary
kind: skill
show: page
when: any
rank: 10
chips: 4
god: Q2992303
---

Each scoring 10 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,iw=`---
id: skill.consevius-seed
title: Consevius: Seed
kind: skill
show: page
when: any
chips: 4
god: Q58618952
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,lw=`---
id: skill.constantia-current
title: Constantia: Current
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q130262256
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,aw=`---
id: skill.consus-stored-grain
title: Consus: Stored Grain
kind: skill
show: page
when: pair
chips: 8
god: Q868923
---

Your pairs gain 8 chips before the multiplier.

? [[playing|Keep playing]]
`,sw=`---
id: skill.convector-carry
title: Convector: Carry
kind: skill
show: page
hands: 1
god: Q3408428
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,ow=`---
id: skill.copia-abundance
title: Copia: Abundance
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q6006878
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,cw=`---
id: skill.crepitus-breeze
title: Crepitus: Breeze
kind: skill
show: page
discards: 1
god: Q3002468
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,rw=`---
id: skill.cuba-journey
title: Cuba: Journey
kind: skill
show: page
when: highCard
chips: 6
god: Q126553283
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,uw=`---
id: skill.cuba-rest
title: Cuba: Rest
kind: skill
show: page
hands: 1
god: Q3006663
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,dw=`---
id: skill.cunina-cradle
title: Cunina: Cradle
kind: skill
show: page
when: any
rank: 2
chips: 4
god: Q3007560
---

Each scoring 2 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,hw=`---
id: skill.cura-care
title: Cura: Care
kind: skill
show: page
when: any
chips: 4
god: Q404133
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,fw=`---
id: skill.danuvius-danube
title: Danuvius: Danube
kind: skill
show: page
when: flush
chips: 12
god: Q836016
---

Your flushes gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,gw=`---
id: skill.dea-africa-abundance
title: Dea Africa: Abundance
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q2417527
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,mw=`---
id: skill.decima-measure
title: Decima: Measure
kind: skill
show: page
when: any
rank: 10
chips: 4
god: Q5249162
---

Each scoring 10 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,pw=`---
id: skill.deferunda-current
title: Deferunda: Current
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q126553329
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,yw=`---
id: skill.deiopea-stream
title: Deiopea: Stream
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q3704814
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,_w=`---
id: skill.deverra-sweep
title: Deverra: Sweep
kind: skill
show: page
discards: 1
god: Q3025430
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,vw=`---
id: skill.devmode
title: Dev mode
kind: skill
dev: true
card: 999999
---

Each card is worth 999999 chips. This starts off. Turn it on from the deck.
`,kw=`---
id: skill.diana-hunt
title: Diana: Hunt
kind: skill
show: page
when: straight
chips: 8
mult: 1
god: Q132543
---

Your straights gain 8 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,ww=`---
id: skill.dies-daylight
title: Dies: Daylight
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q18206465
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,bw=`---
id: skill.disciplina-discipline
title: Disciplina: Discipline
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q3495260
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,xw=`---
id: skill.discordia-discord
title: Discordia: Discord
kind: skill
show: page
when: twoPair
chips: 8
mult: 1
god: Q3030152
---

Your two pair hands gain 8 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Sw=`---
id: skill.dius-fidius-oath
title: Dius Fidius: Oath
kind: skill
show: page
when: twoPair
mult: 1
god: Q5283763
---

Your two pair hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Ew=`---
id: skill.domain-q10354013
title: Pripegala: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4621
reach: 0.10
chips: 16
god: Q10354013
---

Each scoring motif close to Pripegala gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Cw=`---
id: skill.domain-q10392131
title: Vitzliputzli: Battle
kind: skill
show: page
when: any
domain: words
words: battle, soldier, weapon, warrior
chips: 8
god: Q10392131
---

Each scoring motif whose name or description contains battle, soldier, weapon, warrior gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Aw=`---
id: skill.domain-q104008170
title: Kyi (mythology): Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5099
reach: 0.10
chips: 16
god: Q104008170
---

Each scoring motif close to Kyi (mythology) gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Tw=`---
id: skill.domain-q1042300
title: Fauna: Wild Creatures
kind: skill
show: page
when: any
domain: words
words: animal, beast, wolf, fox
chips: 8
god: Q1042300
---

Each scoring motif whose name or description contains animal, beast, wolf, fox gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,jw=`---
id: skill.domain-q1043871
title: Carna: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5003
reach: 0.10
chips: 12
god: Q1043871
---

Each scoring motif close to Carna gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Nw=`---
id: skill.domain-q10578339
title: Mat Zemlya: Mother Earth
kind: skill
show: page
when: any
domain: words
words: earth, soil, mother, land
chips: 8
god: Q10578339
---

Each scoring motif whose name or description contains earth, soil, mother, land gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Mw=`---
id: skill.domain-q1058110
title: Vejovis: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5037
reach: 0.10
chips: 16
god: Q1058110
---

Each scoring motif close to Vejovis gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,qw=`---
id: skill.domain-q1074582
title: Tonacacihuatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4850
reach: 0.10
chips: 12
god: Q1074582
---

Each scoring motif close to Tonacacihuatl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Qw=`---
id: skill.domain-q10832412
title: Dogoda: Weather
kind: skill
show: page
when: any
domain: words
words: weather, wind, rain, storm
chips: 8
god: Q10832412
---

Each scoring motif whose name or description contains weather, wind, rain, storm gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Kw=`---
id: skill.domain-q1085316
title: Mayahuel: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4949
reach: 0.10
chips: 16
god: Q1085316
---

Each scoring motif close to Mayahuel gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Ow=`---
id: skill.domain-q1092591
title: Centeotl: Maize
kind: skill
show: page
when: any
domain: words
words: maize, corn, grain
chips: 8
god: Q1092591
---

Each scoring motif whose name or description contains maize, corn, grain gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,zw=`---
id: skill.domain-q1102307
title: Lady Justice: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5057
reach: 0.10
chips: 8
god: Q1102307
---

Each scoring motif close to Lady Justice gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Rw=`---
id: skill.domain-q11045881
title: Q11045881: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4178
reach: 0.10
chips: 16
god: Q11045881
---

Each scoring motif close to Q11045881 gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Dw=`---
id: skill.domain-q1124258
title: Ehecatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4883
reach: 0.10
chips: 8
god: Q1124258
---

Each scoring motif close to Ehecatl gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Yw=`---
id: skill.domain-q1129855
title: Libertas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4849
reach: 0.10
chips: 12
god: Q1129855
---

Each scoring motif close to Libertas gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Iw=`---
id: skill.domain-q1133048
title: Mens: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5159
reach: 0.10
chips: 16
god: Q1133048
---

Each scoring motif close to Mens gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Hw=`---
id: skill.domain-q1133514
title: Venilia: Sea Winds
kind: skill
show: page
when: any
domain: words
words: sea, ocean, wave, wind
chips: 8
god: Q1133514
---

Each scoring motif whose name or description contains sea, ocean, wave, wind gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Uw=`---
id: skill.domain-q1143220
title: Božić: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4882
reach: 0.10
chips: 12
god: Q1143220
---

Each scoring motif close to Božić gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Bw=`---
id: skill.domain-q1144144
title: Dažbog: Sunlight
kind: skill
show: page
when: any
domain: words
words: sun, sunlight, solar, day
chips: 8
god: Q1144144
---

Each scoring motif whose name or description contains sun, sunlight, solar, day gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Lw=`---
id: skill.domain-q1144150
title: Jarilo: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4963
reach: 0.10
chips: 16
god: Q1144150
---

Each scoring motif close to Jarilo gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Vw=`---
id: skill.domain-q1145491
title: Liber: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5079
reach: 0.10
chips: 12
god: Q1145491
---

Each scoring motif close to Liber gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Gw=`---
id: skill.domain-q11821103
title: Pozvizd: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4776
reach: 0.10
chips: 8
god: Q11821103
---

Each scoring motif close to Pozvizd gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Xw=`---
id: skill.domain-q1228338
title: Dis Pater: Underworld
kind: skill
show: page
when: any
domain: words
words: death, dead, ghost, underworld
chips: 8
god: Q1228338
---

Each scoring motif whose name or description contains death, dead, ghost, underworld gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,$w=`---
id: skill.domain-q1231621
title: Divus Iulius: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4884
reach: 0.10
chips: 8
god: Q1231621
---

Each scoring motif close to Divus Iulius gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Zw=`---
id: skill.domain-q1233746
title: Dea Tacita: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5171
reach: 0.10
chips: 12
god: Q1233746
---

Each scoring motif close to Dea Tacita gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Jw=`---
id: skill.domain-q1250207
title: Antevorta: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5132
reach: 0.10
chips: 16
god: Q1250207
---

Each scoring motif close to Antevorta gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Fw=`---
id: skill.domain-q126616115
title: Chowanna: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5051
reach: 0.10
chips: 8
god: Q126616115
---

Each scoring motif close to Chowanna gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Pw=`---
id: skill.domain-q12905016
title: Q12905016: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4144
reach: 0.10
chips: 8
god: Q12905016
---

Each scoring motif close to Q12905016 gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Ww=`---
id: skill.domain-q12912060
title: Q12912060: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4261
reach: 0.10
chips: 12
god: Q12912060
---

Each scoring motif close to Q12912060 gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,nb=`---
id: skill.domain-q1298222
title: Lada: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4864
reach: 0.10
chips: 16
god: Q1298222
---

Each scoring motif close to Lada gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,eb=`---
id: skill.domain-q130262262
title: Constantinopolis: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4940
reach: 0.10
chips: 8
god: Q130262262
---

Each scoring motif close to Constantinopolis gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,tb=`---
id: skill.domain-q130262271
title: Dacia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4913
reach: 0.10
chips: 12
god: Q130262271
---

Each scoring motif close to Dacia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,ib=`---
id: skill.domain-q130262306
title: Euphrates: Waters
kind: skill
show: page
when: any
domain: words
words: river, stream, water, flood
chips: 8
god: Q130262306
---

Each scoring motif whose name or description contains river, stream, water, flood gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,lb=`---
id: skill.domain-q130262354
title: Francia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4910
reach: 0.10
chips: 8
god: Q130262354
---

Each scoring motif close to Francia gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,ab=`---
id: skill.domain-q130262362
title: Gallia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4979
reach: 0.10
chips: 12
god: Q130262362
---

Each scoring motif close to Gallia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,sb=`---
id: skill.domain-q130262392
title: Hispania: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4798
reach: 0.10
chips: 16
god: Q130262392
---

Each scoring motif close to Hispania gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,ob=`---
id: skill.domain-q130262433
title: Indulgentia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5286
reach: 0.10
chips: 8
god: Q130262433
---

Each scoring motif close to Indulgentia gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,cb=`---
id: skill.domain-q130265289
title: Italia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4833
reach: 0.10
chips: 12
god: Q130265289
---

Each scoring motif close to Italia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,rb=`---
id: skill.domain-q130265292
title: Jucunditas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5107
reach: 0.10
chips: 16
god: Q130265292
---

Each scoring motif close to Jucunditas gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,ub=`---
id: skill.domain-q130265293
title: Judea: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4847
reach: 0.10
chips: 8
god: Q130265293
---

Each scoring motif close to Judea gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,db=`---
id: skill.domain-q130265322
title: Macedonia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5011
reach: 0.10
chips: 12
god: Q130265322
---

Each scoring motif close to Macedonia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,hb=`---
id: skill.domain-q130279095
title: Mauretania: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4941
reach: 0.10
chips: 16
god: Q130279095
---

Each scoring motif close to Mauretania gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,fb=`---
id: skill.domain-q130279100
title: Moesia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5061
reach: 0.10
chips: 12
god: Q130279100
---

Each scoring motif close to Moesia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,gb=`---
id: skill.domain-q130279102
title: Nicomedia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4985
reach: 0.10
chips: 8
god: Q130279102
---

Each scoring motif close to Nicomedia gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,mb=`---
id: skill.domain-q130279109
title: Nobilitas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5013
reach: 0.10
chips: 16
god: Q130279109
---

Each scoring motif close to Nobilitas gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,pb=`---
id: skill.domain-q130343509
title: Noricum: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4910
reach: 0.10
chips: 8
god: Q130343509
---

Each scoring motif close to Noricum gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,yb=`---
id: skill.domain-q130343512
title: Orbis: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5081
reach: 0.10
chips: 12
god: Q130343512
---

Each scoring motif close to Orbis gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,_b=`---
id: skill.domain-q130343524
title: Orontes: Waters
kind: skill
show: page
when: any
domain: words
words: river, stream, water, flood
chips: 8
god: Q130343524
---

Each scoring motif whose name or description contains river, stream, water, flood gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,vb=`---
id: skill.domain-q130343526
title: Pannonia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4970
reach: 0.10
chips: 16
god: Q130343526
---

Each scoring motif close to Pannonia gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,kb=`---
id: skill.domain-q130343538
title: Parthia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5052
reach: 0.10
chips: 12
god: Q130343538
---

Each scoring motif close to Parthia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,wb=`---
id: skill.domain-q130343556
title: Patientia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5035
reach: 0.10
chips: 16
god: Q130343556
---

Each scoring motif close to Patientia gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,bb=`---
id: skill.domain-q130343562
title: Perpetuitas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4943
reach: 0.10
chips: 8
god: Q130343562
---

Each scoring motif close to Perpetuitas gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,xb=`---
id: skill.domain-q130343575
title: Phrygia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4829
reach: 0.10
chips: 12
god: Q130343575
---

Each scoring motif close to Phrygia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Sb=`---
id: skill.domain-q130343579
title: Quies: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4984
reach: 0.10
chips: 16
god: Q130343579
---

Each scoring motif close to Quies gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Eb=`---
id: skill.domain-q130343586
title: Ravenna: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4795
reach: 0.10
chips: 8
god: Q130343586
---

Each scoring motif close to Ravenna gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Cb=`---
id: skill.domain-q130343589
title: Res Publica: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5023
reach: 0.10
chips: 12
god: Q130343589
---

Each scoring motif close to Res Publica gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Ab=`---
id: skill.domain-q130343616
title: Saeculum Frugiferum: Fruitful Season
kind: skill
show: page
when: any
domain: words
words: fruit, grain, harvest, seed
chips: 8
god: Q130343616
---

Each scoring motif whose name or description contains fruit, grain, harvest, seed gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Tb=`---
id: skill.domain-q130343619
title: Sarmatia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4894
reach: 0.10
chips: 16
god: Q130343619
---

Each scoring motif close to Sarmatia gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,jb=`---
id: skill.domain-q130343622
title: Savus: Waters
kind: skill
show: page
when: any
domain: words
words: river, stream, water, flood
chips: 8
god: Q130343622
---

Each scoring motif whose name or description contains river, stream, water, flood gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Nb=`---
id: skill.domain-q130343625
title: Sicilia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4849
reach: 0.10
chips: 16
god: Q130343625
---

Each scoring motif close to Sicilia gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Mb=`---
id: skill.domain-q130343628
title: Tigris: Waters
kind: skill
show: page
when: any
domain: words
words: river, stream, water, flood
chips: 8
god: Q130343628
---

Each scoring motif whose name or description contains river, stream, water, flood gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,qb=`---
id: skill.domain-q130343634
title: Tres Monetae: Coinage
kind: skill
show: page
when: any
domain: words
words: gold, silver, bronze, coin
chips: 8
god: Q130343634
---

Each scoring motif whose name or description contains gold, silver, bronze, coin gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Qb=`---
id: skill.domain-q130343663
title: Utilitas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4942
reach: 0.10
chips: 16
god: Q130343663
---

Each scoring motif close to Utilitas gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Kb=`---
id: skill.domain-q130520309
title: Dea Viriplaca: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4975
reach: 0.10
chips: 8
god: Q130520309
---

Each scoring motif close to Dea Viriplaca gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Ob=`---
id: skill.domain-q130642393
title: Carthage: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4996
reach: 0.10
chips: 12
god: Q130642393
---

Each scoring motif close to Carthage gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,zb=`---
id: skill.domain-q130642508
title: Via Trajana: Roads
kind: skill
show: page
when: any
domain: words
words: road, journey, path, travel
chips: 8
god: Q130642508
---

Each scoring motif whose name or description contains road, journey, path, travel gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Rb=`---
id: skill.domain-q130647505
title: Arelate: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4932
reach: 0.10
chips: 8
god: Q130647505
---

Each scoring motif close to Arelate gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Db=`---
id: skill.domain-q130647512
title: Siscia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4670
reach: 0.10
chips: 12
god: Q130647512
---

Each scoring motif close to Siscia gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Yb=`---
id: skill.domain-q131798902
title: Bregans: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4982
reach: 0.10
chips: 16
god: Q131798902
---

Each scoring motif close to Bregans gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Ib=`---
id: skill.domain-q131798999
title: Hammia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4938
reach: 0.10
chips: 8
god: Q131798999
---

Each scoring motif close to Hammia gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Hb=`---
id: skill.domain-q131799119
title: Dea Nutrix: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4996
reach: 0.10
chips: 12
god: Q131799119
---

Each scoring motif close to Dea Nutrix gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Ub=`---
id: skill.domain-q1326558
title: Mixcoatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4914
reach: 0.10
chips: 12
god: Q1326558
---

Each scoring motif close to Mixcoatl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Bb=`---
id: skill.domain-q1335234
title: Simargl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5061
reach: 0.10
chips: 8
god: Q1335234
---

Each scoring motif close to Simargl gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Lb=`---
id: skill.domain-q137739404
title: Maia: Spring
kind: skill
show: page
when: any
domain: words
words: spring, flower, plant, tree
chips: 8
god: Q137739404
---

Each scoring motif whose name or description contains spring, flower, plant, tree gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Vb=`---
id: skill.domain-q137768161
title: Beneficium: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4845
reach: 0.10
chips: 8
god: Q137768161
---

Each scoring motif close to Beneficium gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Gb=`---
id: skill.domain-q1410466
title: Xiuhtecuhtli: Fire
kind: skill
show: page
when: any
domain: words
words: fire, flame, burning, ember
chips: 8
god: Q1410466
---

Each scoring motif whose name or description contains fire, flame, burning, ember gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Xb=`---
id: skill.domain-q1425920
title: Huehuecoyotl: Song and Dance
kind: skill
show: page
when: any
domain: words
words: music, song, sing, dance
chips: 8
god: Q1425920
---

Each scoring motif whose name or description contains music, song, sing, dance gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,$b=`---
id: skill.domain-q1467781
title: Tlahuizcalpantecuhtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4945
reach: 0.10
chips: 16
god: Q1467781
---

Each scoring motif close to Tlahuizcalpantecuhtli gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Zb=`---
id: skill.domain-q1470895
title: Tepoztecatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4792
reach: 0.10
chips: 12
god: Q1470895
---

Each scoring motif close to Tepoztecatl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Jb=`---
id: skill.domain-q1471691
title: Huehueteotl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4976
reach: 0.10
chips: 8
god: Q1471691
---

Each scoring motif close to Huehueteotl gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Fb=`---
id: skill.domain-q1473144
title: Rugiaevit: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4996
reach: 0.10
chips: 8
god: Q1473144
---

Each scoring motif close to Rugiaevit gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Pb=`---
id: skill.domain-q147914
title: Svetovit: Signs
kind: skill
show: page
when: any
domain: words
words: prophecy, oracle, vision, foretell
chips: 8
god: Q147914
---

Each scoring motif whose name or description contains prophecy, oracle, vision, foretell gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,Wb=`---
id: skill.domain-q149042
title: Xochiquetzal: Flowers and Love
kind: skill
show: page
when: any
domain: words
words: flower, love, lover, bride
chips: 8
god: Q149042
---

Each scoring motif whose name or description contains flower, love, lover, bride gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,n2=`---
id: skill.domain-q149197
title: Xochipilli: Art and Games
kind: skill
show: page
when: any
domain: words
words: artist, music, dance, flower, game
chips: 8
god: Q149197
---

Each scoring motif whose name or description contains artist, music, dance, flower, game gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,e2=`---
id: skill.domain-q1520171
title: Yacatecuhtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4927
reach: 0.10
chips: 16
god: Q1520171
---

Each scoring motif close to Yacatecuhtli gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,t2=`---
id: skill.domain-q1560623
title: Svarozhich: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4898
reach: 0.10
chips: 12
god: Q1560623
---

Each scoring motif close to Svarozhich gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,i2=`---
id: skill.domain-q1621750
title: Chimalma: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4723
reach: 0.10
chips: 12
god: Q1621750
---

Each scoring motif close to Chimalma gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,l2=`---
id: skill.domain-q1641431
title: Macuiltochtli: Song and Dance
kind: skill
show: page
when: any
domain: words
words: music, song, sing, dance, game
chips: 8
god: Q1641431
---

Each scoring motif whose name or description contains music, song, sing, dance, game gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,a2=`---
id: skill.domain-q179818
title: Quetzalcoatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4887
reach: 0.10
chips: 16
god: Q179818
---

Each scoring motif close to Quetzalcoatl gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,s2=`---
id: skill.domain-q182002
title: Olloudius: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4976
reach: 0.10
chips: 8
god: Q182002
---

Each scoring motif close to Olloudius gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,o2=`---
id: skill.domain-q185498
title: Lucifer: Morning Star
kind: skill
show: page
when: any
domain: words
words: star, morning, sun, dawn
chips: 8
god: Q185498
---

Each scoring motif whose name or description contains star, morning, sun, dawn gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,c2=`---
id: skill.domain-q1876916
title: Metztli: Moon
kind: skill
show: page
when: any
domain: words
words: moon, lunar, night
chips: 8
god: Q1876916
---

Each scoring motif whose name or description contains moon, lunar, night gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,r2=`---
id: skill.domain-q188236
title: Cybele: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5152
reach: 0.10
chips: 16
god: Q188236
---

Each scoring motif close to Cybele gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,u2=`---
id: skill.domain-q1970179
title: Malinalxochitl: Desert Creatures
kind: skill
show: page
when: any
domain: words
words: snake, serpent, scorpion, insect
chips: 8
god: Q1970179
---

Each scoring motif whose name or description contains snake, serpent, scorpion, insect gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,d2=`---
id: skill.domain-q1986441
title: Rod: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4905
reach: 0.10
chips: 16
god: Q1986441
---

Each scoring motif close to Rod gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,h2=`---
id: skill.domain-q2027010
title: Opochtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4278
reach: 0.10
chips: 8
god: Q2027010
---

Each scoring motif close to Opochtli gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,f2=`---
id: skill.domain-q2038067
title: Troyan: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4957
reach: 0.10
chips: 12
god: Q2038067
---

Each scoring motif close to Troyan gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,g2=`---
id: skill.domain-q2039163
title: Mictlancihuatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4742
reach: 0.10
chips: 16
god: Q2039163
---

Each scoring motif close to Mictlancihuatl gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,m2=`---
id: skill.domain-q2052073
title: Chantico: Fires and Volcanoes
kind: skill
show: page
when: any
domain: words
words: fire, flame, volcano, burning
chips: 8
god: Q2052073
---

Each scoring motif whose name or description contains fire, flame, volcano, burning gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,p2=`---
id: skill.domain-q206561
title: Perun: Storm and War
kind: skill
show: page
when: any
domain: words
words: thunder, lightning, storm, battle
chips: 8
god: Q206561
---

Each scoring motif whose name or description contains thunder, lightning, storm, battle gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,y2=`---
id: skill.domain-q207234
title: Bellona: War
kind: skill
show: page
when: any
domain: words
words: battle, soldier, weapon, warrior
chips: 8
god: Q207234
---

Each scoring motif whose name or description contains battle, soldier, weapon, warrior gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,_2=`---
id: skill.domain-q2085599
title: Tepeyollotl: Earth and Echo
kind: skill
show: page
when: any
domain: words
words: cave, cavern, earthquake, echo, jaguar, earth
chips: 8
god: Q2085599
---

Each scoring motif whose name or description contains cave, cavern, earthquake, echo, jaguar, earth gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,v2=`---
id: skill.domain-q2087421
title: Raróg: Fire
kind: skill
show: page
when: any
domain: words
words: fire, flame, burning, ember
chips: 8
god: Q2087421
---

Each scoring motif whose name or description contains fire, flame, burning, ember gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,k2=`---
id: skill.domain-q2088018
title: Cihuacoatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4707
reach: 0.10
chips: 8
god: Q2088018
---

Each scoring motif close to Cihuacoatl gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,w2=`---
id: skill.domain-q2098982
title: Ometecuhtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4994
reach: 0.10
chips: 12
god: Q2098982
---

Each scoring motif close to Ometecuhtli gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,b2=`---
id: skill.domain-q21559031
title: Korochun: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5297
reach: 0.10
chips: 12
god: Q21559031
---

Each scoring motif close to Korochun gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,x2=`---
id: skill.domain-q219412
title: Huitzilopochtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5076
reach: 0.10
chips: 8
god: Q219412
---

Each scoring motif close to Huitzilopochtli gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,S2=`---
id: skill.domain-q2248816
title: Atl: Water
kind: skill
show: page
when: any
domain: words
words: water, river, stream, rain
chips: 8
god: Q2248816
---

Each scoring motif whose name or description contains water, river, stream, rain gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,E2=`---
id: skill.domain-q2266787
title: Porevit: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5078
reach: 0.10
chips: 8
god: Q2266787
---

Each scoring motif close to Porevit gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,C2=`---
id: skill.domain-q226831
title: Zorya: Dawn
kind: skill
show: page
when: any
domain: words
words: dawn, morning, sunrise, sun
chips: 8
god: Q226831
---

Each scoring motif whose name or description contains dawn, morning, sunrise, sun gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,A2=`---
id: skill.domain-q232870
title: Tlaloc: Rain and Storm
kind: skill
show: page
when: any
domain: words
words: rain, storm, thunder, water
chips: 8
god: Q232870
---

Each scoring motif whose name or description contains rain, storm, thunder, water gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,T2=`---
id: skill.domain-q2349305
title: Toci: Earth
kind: skill
show: page
when: any
domain: words
words: earth, soil, mountain, ground
chips: 8
god: Q2349305
---

Each scoring motif whose name or description contains earth, soil, mountain, ground gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,j2=`---
id: skill.domain-q2376964
title: Painal: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4772
reach: 0.10
chips: 12
god: Q2376964
---

Each scoring motif close to Painal gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,N2=`---
id: skill.domain-q2402507
title: Temazcalteci: Medicine
kind: skill
show: page
when: any
domain: words
words: heal, cure, medicine, bath
chips: 8
god: Q2402507
---

Each scoring motif whose name or description contains heal, cure, medicine, bath gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,M2=`---
id: skill.domain-q2441598
title: Tonatiuh: Daylight
kind: skill
show: page
when: any
domain: words
words: sun, daylight, sky
chips: 8
god: Q2441598
---

Each scoring motif whose name or description contains sun, daylight, sky gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,q2=`---
id: skill.domain-q2476532
title: Tonantzin: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4882
reach: 0.10
chips: 8
god: Q2476532
---

Each scoring motif close to Tonantzin gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Q2=`---
id: skill.domain-q2480320
title: Ixtlilton: Healing
kind: skill
show: page
when: any
domain: words
words: heal, cure, medicine, sick
chips: 8
god: Q2480320
---

Each scoring motif whose name or description contains heal, cure, medicine, sick gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,K2=`---
id: skill.domain-q2619569
title: Itzpapalotl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4874
reach: 0.10
chips: 16
god: Q2619569
---

Each scoring motif close to Itzpapalotl gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,O2=`---
id: skill.domain-q2620261
title: Citlalicue: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4994
reach: 0.10
chips: 8
god: Q2620261
---

Each scoring motif close to Citlalicue gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,z2=`---
id: skill.domain-q26236
title: Vagitanus: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5259
reach: 0.10
chips: 12
god: Q26236
---

Each scoring motif close to Vagitanus gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,R2=`---
id: skill.domain-q2703831
title: Chalchiuhtotolin: Sickness
kind: skill
show: page
when: any
domain: words
words: disease, plague, sick, fever
chips: 8
god: Q2703831
---

Each scoring motif whose name or description contains disease, plague, sick, fever gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,D2=`---
id: skill.domain-q2703840
title: Tōnacātēcuhtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4933
reach: 0.10
chips: 8
god: Q2703840
---

Each scoring motif close to Tōnacātēcuhtli gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Y2=`---
id: skill.domain-q270867
title: Terra: Earth
kind: skill
show: page
when: any
domain: words
words: earth, ground, mountain, soil
chips: 8
god: Q270867
---

Each scoring motif whose name or description contains earth, ground, mountain, soil gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,I2=`---
id: skill.domain-q279639
title: Xolotl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4832
reach: 0.10
chips: 12
god: Q279639
---

Each scoring motif close to Xolotl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,H2=`---
id: skill.domain-q279852
title: Varpulis: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4307
reach: 0.10
chips: 12
god: Q279852
---

Each scoring motif close to Varpulis gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,U2=`---
id: skill.domain-q282628
title: Salus: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4940
reach: 0.10
chips: 12
god: Q282628
---

Each scoring motif close to Salus gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,B2=`---
id: skill.domain-q2888346
title: Ilamatecuhtli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5118
reach: 0.10
chips: 16
god: Q2888346
---

Each scoring motif close to Ilamatecuhtli gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,L2=`---
id: skill.domain-q290298
title: Honos: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5075
reach: 0.10
chips: 16
god: Q290298
---

Each scoring motif close to Honos gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,V2=`---
id: skill.domain-q2972375
title: Cihuatecayotl: West Wind
kind: skill
show: page
when: any
domain: words
words: wind, storm, air
chips: 8
god: Q2972375
---

Each scoring motif whose name or description contains wind, storm, air gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,G2=`---
id: skill.domain-q2989077
title: Porenut: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4895
reach: 0.10
chips: 16
god: Q2989077
---

Each scoring motif close to Porenut gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,X2=`---
id: skill.domain-q3027237
title: Q3027237: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4063
reach: 0.10
chips: 8
god: Q3027237
---

Each scoring motif close to Q3027237 gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,$2=`---
id: skill.domain-q3068714
title: Tlacotzontli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4254
reach: 0.10
chips: 12
god: Q3068714
---

Each scoring motif close to Tlacotzontli gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Z2=`---
id: skill.domain-q3069134
title: Piltzintecuhtli: Storm and Fungi
kind: skill
show: page
when: any
domain: words
words: storm, thunder, mushroom, fungus, lightning, rain
chips: 8
god: Q3069134
---

Each scoring motif whose name or description contains storm, thunder, mushroom, fungus, lightning, rain gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,J2=`---
id: skill.domain-q3071093
title: Cipactonal: Stars
kind: skill
show: page
when: any
domain: words
words: star, constellation, sky, heaven
chips: 8
god: Q3071093
---

Each scoring motif whose name or description contains star, constellation, sky, heaven gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,F2=`---
id: skill.domain-q3088222
title: Inuus: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5246
reach: 0.10
chips: 16
god: Q3088222
---

Each scoring motif close to Inuus gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,P2=`---
id: skill.domain-q308902
title: Victoria: Victory
kind: skill
show: page
when: any
domain: words
words: victory, conquer, triumph, defeat
chips: 8
god: Q308902
---

Each scoring motif whose name or description contains victory, conquer, triumph, defeat gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,W2=`---
id: skill.domain-q3140425
title: Hora: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4989
reach: 0.10
chips: 8
god: Q3140425
---

Each scoring motif close to Hora gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,n3=`---
id: skill.domain-q320333
title: Quirinus: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4727
reach: 0.10
chips: 12
god: Q320333
---

Each scoring motif close to Quirinus gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,e3=`---
id: skill.domain-q32102
title: Ceres: Harvest
kind: skill
show: page
when: any
domain: words
words: grain, harvest, corn, seed
chips: 8
god: Q32102
---

Each scoring motif whose name or description contains grain, harvest, corn, seed gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,t3=`---
id: skill.domain-q3312596
title: Mictlanpachecatl: North Wind
kind: skill
show: page
when: any
domain: words
words: wind, storm, air
chips: 8
god: Q3312596
---

Each scoring motif whose name or description contains wind, storm, air gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,i3=`---
id: skill.domain-q3351973
title: Omecihuatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4845
reach: 0.10
chips: 12
god: Q3351973
---

Each scoring motif close to Omecihuatl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,l3=`---
id: skill.domain-q3359069
title: Oxomoco: Night
kind: skill
show: page
when: any
domain: words
words: night, darkness, moon, shadow
chips: 8
god: Q3359069
---

Each scoring motif whose name or description contains night, darkness, moon, shadow gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,a3=`---
id: skill.domain-q3360794
title: Caelus: Sky
kind: skill
show: page
when: any
domain: words
words: sky, heaven, cloud, star
chips: 8
god: Q3360794
---

Each scoring motif whose name or description contains sky, heaven, cloud, star gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,s3=`---
id: skill.domain-q3370206
title: Patelana: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4451
reach: 0.10
chips: 16
god: Q3370206
---

Each scoring motif close to Patelana gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,o3=`---
id: skill.domain-q338298
title: Acca Larentia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5078
reach: 0.10
chips: 16
god: Q338298
---

Each scoring motif close to Acca Larentia gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,c3=`---
id: skill.domain-q3394793
title: Q3394793: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.3933
reach: 0.10
chips: 16
god: Q3394793
---

Each scoring motif close to Q3394793 gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,r3=`---
id: skill.domain-q3408256
title: Q3408256: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4121
reach: 0.10
chips: 12
god: Q3408256
---

Each scoring motif close to Q3408256 gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,u3=`---
id: skill.domain-q3408263
title: Prono: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4599
reach: 0.10
chips: 16
god: Q3408263
---

Each scoring motif close to Prono gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,d3=`---
id: skill.domain-q3530057
title: Tlalocayotl: East Wind
kind: skill
show: page
when: any
domain: words
words: wind, storm, air
chips: 8
god: Q3530057
---

Each scoring motif whose name or description contains wind, storm, air gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,h3=`---
id: skill.domain-q3545810
title: Veritas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5160
reach: 0.10
chips: 8
god: Q3545810
---

Each scoring motif close to Veritas gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,f3=`---
id: skill.domain-q3561382
title: Huitztlampaehecatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5075
reach: 0.10
chips: 12
god: Q3561382
---

Each scoring motif close to Huitztlampaehecatl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,g3=`---
id: skill.domain-q3571020
title: Q3571020: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.3928
reach: 0.10
chips: 16
god: Q3571020
---

Each scoring motif close to Q3571020 gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,m3=`---
id: skill.domain-q3574487
title: Zacatzontli: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4905
reach: 0.10
chips: 8
god: Q3574487
---

Each scoring motif close to Zacatzontli gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,p3=`---
id: skill.domain-q3615151
title: Ancaria: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4674
reach: 0.10
chips: 12
god: Q3615151
---

Each scoring motif close to Ancaria gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,y3=`---
id: skill.domain-q374311
title: Vertumnus: Orchard
kind: skill
show: page
when: any
domain: words
words: tree, fruit, apple, garden
chips: 8
god: Q374311
---

Each scoring motif whose name or description contains tree, fruit, apple, garden gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,_3=`---
id: skill.domain-q3768510
title: Juppiter Latialis: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4582
reach: 0.10
chips: 16
god: Q3768510
---

Each scoring motif close to Juppiter Latialis gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,v3=`---
id: skill.domain-q381061
title: Aequitas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4803
reach: 0.10
chips: 16
god: Q381061
---

Each scoring motif close to Aequitas gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,k3=`---
id: skill.domain-q381914
title: Aeternitas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5182
reach: 0.10
chips: 8
god: Q381914
---

Each scoring motif close to Aeternitas gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,w3=`---
id: skill.domain-q4021849
title: Xocotl (Aztec god): Fire and Stars
kind: skill
show: page
when: any
domain: words
words: fire, flame, star, venus
chips: 8
god: Q4021849
---

Each scoring motif whose name or description contains fire, flame, star, venus gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,b3=`---
id: skill.domain-q411066
title: Aius Locutius: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4862
reach: 0.10
chips: 12
god: Q411066
---

Each scoring motif close to Aius Locutius gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,x3=`---
id: skill.domain-q4161258
title: Q4161258: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4222
reach: 0.10
chips: 8
god: Q4161258
---

Each scoring motif close to Q4161258 gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,S3=`---
id: skill.domain-q4171546
title: Q4171546: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4222
reach: 0.10
chips: 12
god: Q4171546
---

Each scoring motif close to Q4171546 gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,E3=`---
id: skill.domain-q4179231
title: Q4179231: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4219
reach: 0.10
chips: 16
god: Q4179231
---

Each scoring motif close to Q4179231 gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,C3=`---
id: skill.domain-q4202964
title: Ipabog: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4008
reach: 0.10
chips: 8
god: Q4202964
---

Each scoring motif close to Ipabog gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,A3=`---
id: skill.domain-q4205840
title: Jessa: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4957
reach: 0.10
chips: 12
god: Q4205840
---

Each scoring motif close to Jessa gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,T3=`---
id: skill.domain-q4257767
title: Lelya: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4964
reach: 0.10
chips: 16
god: Q4257767
---

Each scoring motif close to Lelya gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,j3=`---
id: skill.domain-q4303414
title: The Sea Tsar: Sea
kind: skill
show: page
when: any
domain: words
words: sea, ocean, wave, water
chips: 8
god: Q4303414
---

Each scoring motif whose name or description contains sea, ocean, wave, water gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,N3=`---
id: skill.domain-q4338010
title: Uslad: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5216
reach: 0.10
chips: 8
god: Q4338010
---

Each scoring motif close to Uslad gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,M3=`---
id: skill.domain-q4350777
title: Pereplut: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5033
reach: 0.10
chips: 12
god: Q4350777
---

Each scoring motif close to Pereplut gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,q3=`---
id: skill.domain-q4421636
title: Q4421636: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4213
reach: 0.10
chips: 16
god: Q4421636
---

Each scoring motif close to Q4421636 gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Q3=`---
id: skill.domain-q453534
title: Diana Nemorensis: Wildwood
kind: skill
show: page
when: any
domain: words
words: forest, tree, hunt, deer
chips: 8
god: Q453534
---

Each scoring motif whose name or description contains forest, tree, hunt, deer gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,K3=`---
id: skill.domain-q4654
title: Fortuna: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5291
reach: 0.10
chips: 8
god: Q4654
---

Each scoring motif close to Fortuna gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,O3=`---
id: skill.domain-q5011
title: Cupid: Love
kind: skill
show: page
when: any
domain: words
words: love, lover, marriage, bride
chips: 8
god: Q5011
---

Each scoring motif whose name or description contains love, lover, marriage, bride gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,z3=`---
id: skill.domain-q5068600
title: Chalchihuihtotolin: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4705
reach: 0.10
chips: 16
god: Q5068600
---

Each scoring motif close to Chalchihuihtotolin gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,R3=`---
id: skill.domain-q5117835
title: Dabog: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4766
reach: 0.10
chips: 16
god: Q5117835
---

Each scoring motif close to Dabog gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,D3=`---
id: skill.domain-q516456
title: Ōmeteōtl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4810
reach: 0.10
chips: 12
god: Q516456
---

Each scoring motif close to Ōmeteōtl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Y3=`---
id: skill.domain-q524654
title: Tlaltecuhtli: Fertile Earth
kind: skill
show: page
when: any
domain: words
words: earth, soil, seed, harvest
chips: 8
god: Q524654
---

Each scoring motif whose name or description contains earth, soil, seed, harvest gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,I3=`---
id: skill.domain-q558970
title: Xipe Totec: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4803
reach: 0.10
chips: 8
god: Q558970
---

Each scoring motif close to Xipe Totec gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,H3=`---
id: skill.domain-q570611
title: Radogost: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4634
reach: 0.10
chips: 8
god: Q570611
---

Each scoring motif close to Radogost gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,U3=`---
id: skill.domain-q587825
title: Chernobog: Darkness
kind: skill
show: page
when: any
domain: words
words: darkness, night, shadow, black
chips: 8
god: Q587825
---

Each scoring motif whose name or description contains darkness, night, shadow, black gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,B3=`---
id: skill.domain-q591056
title: Mictlantecuhtli: The Dead
kind: skill
show: page
when: any
domain: words
words: death, dead, ghost, underworld
chips: 8
god: Q591056
---

Each scoring motif whose name or description contains death, dead, ghost, underworld gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,L3=`---
id: skill.domain-q591914
title: Triglav: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4960
reach: 0.10
chips: 16
god: Q591914
---

Each scoring motif close to Triglav gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,V3=`---
id: skill.domain-q6471253
title: Nya (God): The Dead
kind: skill
show: page
when: any
domain: words
words: death, dead, ghost, underworld
chips: 8
god: Q6471253
---

Each scoring motif whose name or description contains death, dead, ghost, underworld gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,G3=`---
id: skill.domain-q650572
title: Tzitzimitl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4922
reach: 0.10
chips: 12
god: Q650572
---

Each scoring motif close to Tzitzimitl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,X3=`---
id: skill.domain-q651660
title: Voluptas: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5155
reach: 0.10
chips: 8
god: Q651660
---

Each scoring motif close to Voluptas gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,$3=`---
id: skill.domain-q654604
title: Pales: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5198
reach: 0.10
chips: 12
god: Q654604
---

Each scoring motif close to Pales gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Z3=`---
id: skill.domain-q662067
title: Itztlacoliuhqui: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4848
reach: 0.10
chips: 16
god: Q662067
---

Each scoring motif close to Itztlacoliuhqui gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,J3=`---
id: skill.domain-q668286
title: Dea Dia: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4928
reach: 0.10
chips: 16
god: Q668286
---

Each scoring motif close to Dea Dia gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,F3=`---
id: skill.domain-q684225
title: Carmenta: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5021
reach: 0.10
chips: 8
god: Q684225
---

Each scoring motif close to Carmenta gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,P3=`---
id: skill.domain-q689826
title: Svarog: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5016
reach: 0.10
chips: 16
god: Q689826
---

Each scoring motif close to Svarog gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,W3=`---
id: skill.domain-q751867
title: Fascinus: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5017
reach: 0.10
chips: 12
god: Q751867
---

Each scoring motif close to Fascinus gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,n4=`---
id: skill.domain-q752213
title: Chalchiuhtlicue: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5119
reach: 0.10
chips: 8
god: Q752213
---

Each scoring motif close to Chalchiuhtlicue gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,e4=`---
id: skill.domain-q756797
title: Tezcatlipoca: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4814
reach: 0.10
chips: 12
god: Q756797
---

Each scoring motif close to Tezcatlipoca gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,t4=`---
id: skill.domain-q7585766
title: Sreća: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4173
reach: 0.10
chips: 12
god: Q7585766
---

Each scoring motif close to Sreća gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,i4=`---
id: skill.domain-q767293
title: Mania: The Dead
kind: skill
show: page
when: any
domain: words
words: death, dead, ghost, underworld
chips: 8
god: Q767293
---

Each scoring motif whose name or description contains death, dead, ghost, underworld gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,l4=`---
id: skill.domain-q7810744
title: Tlilhua: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4964
reach: 0.10
chips: 8
god: Q7810744
---

Each scoring motif close to Tlilhua gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,a4=`---
id: skill.domain-q7814646
title: Toltecatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5002
reach: 0.10
chips: 12
god: Q7814646
---

Each scoring motif close to Toltecatl gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,s4=`---
id: skill.domain-q782481
title: Clitumnus: Waters
kind: skill
show: page
when: any
domain: words
words: river, stream, water, flood
chips: 8
god: Q782481
---

Each scoring motif whose name or description contains river, stream, water, flood gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,o4=`---
id: skill.domain-q817358
title: Mokosh: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5070
reach: 0.10
chips: 8
god: Q817358
---

Each scoring motif close to Mokosh gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,c4=`---
id: skill.domain-q824249
title: Veles: Otherworld
kind: skill
show: page
when: any
domain: words
words: underworld, river, cattle, serpent
chips: 8
god: Q824249
---

Each scoring motif whose name or description contains underworld, river, cattle, serpent gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,r4=`---
id: skill.domain-q850249
title: Tlazolteotl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4942
reach: 0.10
chips: 16
god: Q850249
---

Each scoring motif close to Tlazolteotl gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,u4=`---
id: skill.domain-q857144
title: Camena: Waters
kind: skill
show: page
when: any
domain: words
words: river, stream, water, flood
chips: 8
god: Q857144
---

Each scoring motif whose name or description contains river, stream, water, flood gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,d4=`---
id: skill.domain-q859392
title: Ops: Fertile Earth
kind: skill
show: page
when: any
domain: words
words: earth, soil, seed, harvest
chips: 8
god: Q859392
---

Each scoring motif whose name or description contains earth, soil, seed, harvest gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,h4=`---
id: skill.domain-q872943
title: Chicomecoatl: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4779
reach: 0.10
chips: 8
god: Q872943
---

Each scoring motif close to Chicomecoatl gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,f4=`---
id: skill.domain-q890208
title: Jupiter Dolichenus: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4787
reach: 0.10
chips: 8
god: Q890208
---

Each scoring motif close to Jupiter Dolichenus gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,g4=`---
id: skill.domain-q900649
title: Apollo: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5073
reach: 0.10
chips: 12
god: Q900649
---

Each scoring motif close to Apollo gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,m4=`---
id: skill.domain-q9055257
title: Q9055257: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4184
reach: 0.10
chips: 16
god: Q9055257
---

Each scoring motif close to Q9055257 gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,p4=`---
id: skill.domain-q9358865
title: Q9358865: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4287
reach: 0.10
chips: 8
god: Q9358865
---

Each scoring motif close to Q9358865 gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,y4=`---
id: skill.domain-q936324
title: Coyolxauhqui: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4892
reach: 0.10
chips: 12
god: Q936324
---

Each scoring motif close to Coyolxauhqui gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,_4=`---
id: skill.domain-q936993
title: Huixtocihuatl: Water
kind: skill
show: page
when: any
domain: words
words: water, river, stream, rain
chips: 8
god: Q936993
---

Each scoring motif whose name or description contains water, river, stream, rain gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,v4=`---
id: skill.domain-q942519
title: Śuri: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.5212
reach: 0.10
chips: 16
god: Q942519
---

Each scoring motif close to Śuri gains up to 16 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,k4=`---
id: skill.domain-q956931
title: Patecatl: Healing
kind: skill
show: page
when: any
domain: words
words: heal, cure, medicine, sick
chips: 8
god: Q956931
---

Each scoring motif whose name or description contains heal, cure, medicine, sick gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,w4=`---
id: skill.domain-q966042
title: Postverta: Attraction
kind: skill
show: page
when: any
domain: affinity
threshold: 0.4917
reach: 0.10
chips: 8
god: Q966042
---

Each scoring motif close to Postverta gains up to 8 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,b4=`---
id: skill.domiduca-homeward
title: Domiduca: Homeward
kind: skill
show: page
hands: 1
god: Q5290278
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,x4=`---
id: skill.domiducus-promise
title: Domiducus: Promise
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q126553432
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,S4=`---
id: skill.domitius-journey
title: Domitius: Journey
kind: skill
show: page
when: pair
chips: 7
god: Q126553532
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,E4=`---
id: skill.dubnocaratiacus-road
title: Dubnocaratiacus: Road
kind: skill
show: page
when: highCard
mult: 1
god: Q126633890
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,C4=`---
id: skill.dysprus-harmony
title: Dysprus: Harmony
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q126668982
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,A4=`---
id: skill.edusa-nourishment
title: Edusa: Nourishment
kind: skill
show: page
when: any
rank: 2
chips: 4
god: Q3622563
---

Each scoring 2 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,T4=`---
id: skill.egeria-counsel
title: Egeria: Counsel
kind: skill
show: page
when: highCard
chips: 5
mult: 1
god: Q582268
---

Your high card hands gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,j4=`---
id: skill.egestas-want
title: Egestas: Want
kind: skill
show: page
when: highCard
chips: 7
god: Q5820351
---

Your high card hands gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,N4=`---
id: skill.egnatia-promise
title: Egnatia: Promise
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q60240864
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,M4=`---
id: skill.empanda-bread
title: Empanda: Bread
kind: skill
show: page
when: any
chips: 5
god: Q16835368
---

Your hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,q4=`---
id: skill.exalbiovix-onward
title: Exalbiovix: Onward
kind: skill
show: page
when: straight
chips: 8
mult: 1
god: Q126599467
---

Your straights gain 8 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Q4=`---
id: skill.excingiorigiatus-exchange
title: Excingiorigiatus: Exchange
kind: skill
show: page
when: twoPair
chips: 8
mult: 1
god: Q126634186
---

Your two pair hands gain 8 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,K4=`---
id: skill.fabius-venture
title: Fabius: Venture
kind: skill
show: page
discards: 1
god: Q110469170
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,O4=`---
id: skill.fabulinus-first-words
title: Fabulinus: First Words
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q2265440
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,z4=`---
id: skill.falacer-flame
title: Falacer: Flame
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q3738525
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,R4=`---
id: skill.fama-rumor
title: Fama: Rumor
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q3502332
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,D4=`---
id: skill.fames-hunger
title: Fames: Hunger
kind: skill
show: page
when: highCard
mult: 1
god: Q10513969
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,Y4=`---
id: skill.farinus-flour
title: Farinus: Flour
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q20100548
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,I4=`---
id: skill.fatum-fate
title: Fatum: Fate
kind: skill
show: page
when: fullHouse
chips: 12
mult: 1
god: Q12053109
---

Your full houses gain 12 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,H4=`---
id: skill.faunus-wildwood
title: Faunus: Wildwood
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q3089703
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,U4=`---
id: skill.faustitas-livestock
title: Faustitas: Livestock
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q5438319
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,B4=`---
id: skill.favonius-west-wind
title: Favonius: West Wind
kind: skill
show: page
when: straight
chips: 12
god: Q4347724
---

Your straights gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,L4=`---
id: skill.favor-goodwill
title: Favor: Goodwill
kind: skill
show: page
hands: 1
god: Q19610038
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,V4=`---
id: skill.febris-fever
title: Febris: Fever
kind: skill
show: page
hands: 1
god: Q2527609
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,G4=`---
id: skill.februus-purification
title: Februus: Purification
kind: skill
show: page
discards: 1
god: Q1399384
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,X4=`---
id: skill.fecunditas-fertility
title: Fecunditas: Fertility
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q5439882
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,$4=`---
id: skill.felicitas-good-fortune
title: Felicitas: Good Fortune
kind: skill
show: page
hands: 1
god: Q1403069
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,Z4=`---
id: skill.ferentina-spring
title: Ferentina: Spring
kind: skill
show: page
discards: 1
god: Q1643443
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,J4=`---
id: skill.feronia-wilds
title: Feronia: Wilds
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q1407528
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,F4=`---
id: skill.fessona-offering
title: Fessona: Offering
kind: skill
show: page
hands: 1
god: Q126553624
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,P4=`---
id: skill.fides-trust
title: Fides: Trust
kind: skill
show: page
when: pair
mult: 1
god: Q605139
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,W4=`---
id: skill.flora-blossom
title: Flora: Blossom
kind: skill
show: page
when: pair
chips: 6
god: Q209644
---

Your pairs gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,n6=`---
id: skill.fluonia-flow
title: Fluonia: Flow
kind: skill
show: page
when: flush
chips: 12
mult: 1
god: Q3074497
---

Your flushes gain 12 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,e6=`---
id: skill.fontus-fountain
title: Fontus: Fountain
kind: skill
show: page
when: flush
mult: 2
god: Q582918
---

Your flushes gain 2 multiplier.

? [[playing|Keep playing]]
`,t6=`---
id: skill.forculus-door
title: Forculus: Door
kind: skill
show: page
when: pair
mult: 1
god: Q18548363
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,i6=`---
id: skill.formido-fear
title: Formido: Fear
kind: skill
show: page
discards: 1
god: Q5864024
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,l6=`---
id: skill.fornax-oven
title: Fornax: Oven
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q3058437
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,a6=`---
id: skill.fortuna-huiusce-diei-fortune-today
title: Fortuna Huiusce Diei: Fortune Today
kind: skill
show: page
when: highCard
mult: 1
god: Q5472789
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,s6=`---
id: skill.fortuna-redux-safe-return
title: Fortuna Redux: Safe Return
kind: skill
show: page
discards: 1
god: Q5472794
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,o6=`---
id: skill.fraus-deception
title: Fraus: Deception
kind: skill
show: page
when: highCard
chips: 3
mult: 1
god: Q3086735
---

Your high card hands gain 3 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,c6=`---
id: skill.fructesea-fruit
title: Fructesea: Fruit
kind: skill
show: page
when: any
rank: 7
chips: 4
god: Q8962912
---

Each scoring 7 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,r6=`---
id: skill.frugifer-domain
title: Frugifer: Fruit
kind: skill
show: page
when: any
domain: words
words: fruit, apple
chips: 8
god: Q126667268
---

Each scoring motif whose name or description contains fruit, apple gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,u6=`---
id: skill.fulgora-lightning
title: Fulgora: Lightning
kind: skill
show: page
hands: 1
god: Q1225418
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,d6=`---
id: skill.furor-fury
title: Furor: Fury
kind: skill
show: page
hands: 1
god: Q21856033
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,h6=`---
id: skill.furrina-spring
title: Furrina: Spring
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q11923296
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,f6=`---
id: skill.gaia-ground
title: Gaia's ground
kind: skill
show: page
when: any
chips: 5
god: Q93172
---

Your hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,g6=`---
id: skill.gallia-land
title: Gallia: Land
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q5519034
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,m6=`---
id: skill.garamantis-offering
title: Garamantis: Offering
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q1493870
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,p6=`---
id: skill.giarinus-spear
title: Giarinus: Spear
kind: skill
show: page
when: threeOfAKind
chips: 14
god: Q126599473
---

Your three of a kind hands gain 14 chips before the multiplier.

? [[playing|Keep playing]]
`,y6=`---
id: skill.helernus-offering
title: Helernus: Offering
kind: skill
show: page
when: straight
chips: 12
god: Q29654288
---

Your straights gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,_6=`---
id: skill.hercules-mighty-labor
title: Hercules: Mighty Labor
kind: skill
show: page
when: fourOfAKind
chips: 14
mult: 1
god: Q240679
---

Your four of a kind hands gain 14 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,v6=`---
id: skill.high-card
title: A single spark
kind: skill
show: page
when: highCard
chips: 4
---

Your high card hands gain 4 chips before the multiplier. You can turn this skill off in the bar.

? [[playing|Keep playing]]
`,k6=`---
id: skill.hilaritas-joy
title: Hilaritas: Joy
kind: skill
show: page
hands: 1
god: Q11709783
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,w6=`---
id: skill.horta-offering
title: Horta: Offering
kind: skill
show: page
hands: 1
god: Q120580918
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,b6=`---
id: skill.hostilina-good-grain
title: Hostilina: Good Grain
kind: skill
show: page
when: any
rank: 9
chips: 4
god: Q3141035
---

Each scoring 9 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,x6=`---
id: skill.hymen-attraction
title: Hymen: Union
kind: skill
show: page
when: any
domain: affinity
threshold: 0.52
reach: 0.10
chips: 12
god: Q63532530
---

Each scoring motif close to Hymen gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,S6=`---
id: skill.iana-moonlit-arch
title: Iana: Moonlit Arch
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q5983345
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,E6=`---
id: skill.imporcitor-third-furrow
title: Imporcitor: Third Furrow
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q20872001
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,C6=`---
id: skill.inporcitor-venture
title: Inporcitor: Venture
kind: skill
show: page
discards: 1
god: Q126553676
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,A6=`---
id: skill.insania-gathering
title: Insania: Gathering
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q30038687
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,T6=`---
id: skill.insidia-offering
title: Insidia: Offering
kind: skill
show: page
hands: 1
god: Q30029572
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,j6=`---
id: skill.insitor-sowing
title: Insitor: Sowing
kind: skill
show: page
when: pair
chips: 5
mult: 1
god: Q305110
---

Your pairs gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,N6=`---
id: skill.intercidona-axe
title: Intercidona: Axe
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q4202143
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,M6=`---
id: skill.interduca-bond
title: Interduca: Bond
kind: skill
show: page
when: any
chips: 4
god: Q126553751
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,q6=`---
id: skill.iocus-attraction
title: Iocus: Play
kind: skill
show: page
when: any
domain: affinity
threshold: 0.52
reach: 0.10
chips: 12
god: Q58315709
---

Each scoring motif close to Iocus gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,Q6=`---
id: skill.isityche-accord
title: Isityche: Accord
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q126667542
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,K6=`---
id: skill.iuga-gathering
title: Iuga: Gathering
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q126553825
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,O6=`---
id: skill.iugatinus-offering
title: Iugatinus: Offering
kind: skill
show: page
hands: 1
god: Q126553865
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,z6=`---
id: skill.iuventas-youth
title: Iuventas's youth
kind: skill
show: page
when: highCard
chips: 5
god: Q1367680
---

Your high card hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,R6=`---
id: skill.janus-two-doors
title: Janus: Two Doors
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q167685
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,D6=`---
id: skill.juno-pair
title: Juno's bond
kind: skill
show: page
when: pair
mult: 1
god: Q125046
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,Y6=`---
id: skill.jupiter-thunder
title: Jupiter: Thunder
kind: skill
show: page
when: any
mult: 1
god: Q4649
---

Your hands gain 1 multiplier.

? [[playing|Keep playing]]
`,I6=`---
id: skill.juturna-spring-water
title: Juturna: Spring Water
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q139448
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,H6=`---
id: skill.kendrisos-song
title: Kendrisos: Song
kind: skill
show: page
when: highCard
chips: 5
mult: 1
god: Q126668139
---

Your high card hands gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,U6=`---
id: skill.lacavus-standard
title: Lacavus: Standard
kind: skill
show: page
when: twoPair
mult: 1
god: Q126599446
---

Your two pair hands gain 1 multiplier.

? [[playing|Keep playing]]
`,B6=`---
id: skill.lacturnus-milk
title: Lacturnus: Milk
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q25416941
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,L6=`---
id: skill.laetitia-delight
title: Laetitia: Delight
kind: skill
show: page
hands: 1
god: Q1246589
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,V6=`---
id: skill.larunda-current
title: Larunda: Current
kind: skill
show: page
when: flush
chips: 12
mult: 1
god: Q1806391
---

Your flushes gain 12 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,G6=`---
id: skill.lateranus-hearth
title: Lateranus: Hearth
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q6495761
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,X6=`---
id: skill.laverna-cunning
title: Laverna: Cunning
kind: skill
show: page
discards: 1
god: Q1417853
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,$6=`---
id: skill.lelhunnus-resolve
title: Lelhunnus: Resolve
kind: skill
show: page
when: highCard
chips: 5
god: Q126599480
---

Your high card hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,Z6=`---
id: skill.leucimalicus-vanguard
title: Leucimalicus: Vanguard
kind: skill
show: page
when: pair
chips: 9
god: Q126599404
---

Your pairs gain 9 chips before the multiplier.

? [[playing|Keep playing]]
`,J6=`---
id: skill.leusdrinus-advance
title: Leusdrinus: Advance
kind: skill
show: page
when: threeOfAKind
chips: 9
mult: 1
god: Q126599410
---

Your three of a kind hands gain 9 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,F6=`---
id: skill.levana-lift
title: Levana's lift
kind: skill
show: page
when: pair
chips: 6
god: Q1490210
---

Your pairs gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,P6=`---
id: skill.libera-freedom
title: Libera: Freedom
kind: skill
show: page
hands: 1
god: Q2633166
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,W6=`---
id: skill.liberalitas-generosity
title: Liberalitas: Generosity
kind: skill
show: page
hands: 1
god: Q3173852
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,n5=`---
id: skill.libitina-passage
title: Libitina: Passage
kind: skill
show: page
when: any
rank: A
chips: 4
god: Q1232375
---

Each scoring A adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,e5=`---
id: skill.lima-threshold
title: Lima: Threshold
kind: skill
show: page
discards: 1
god: Q3240989
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,t5=`---
id: skill.limen-doorstep
title: Limen: Doorstep
kind: skill
show: page
when: pair
chips: 6
god: Q5976500
---

Your pairs gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,i5=`---
id: skill.limentinus-offering
title: Limentinus: Offering
kind: skill
show: page
hands: 1
god: Q126022472
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,l5=`---
id: skill.limi-gathering
title: Limi: Gathering
kind: skill
show: page
when: pair
mult: 1
god: Q126554107
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,a5=`---
id: skill.lua-spoils
title: Lua: Spoils
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q3081070
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,s5=`---
id: skill.lucifer-morning-star
title: Lucifer: Morning Star
kind: skill
show: page
when: highCard
chips: 4
mult: 1
god: Q4270105
---

Your high card hands gain 4 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,o5=`---
id: skill.lucina-first-breath
title: Lucina: First Breath
kind: skill
show: page
when: highCard
chips: 6
god: Q604898
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,c5=`---
id: skill.luna-moonlight
title: Luna: Moonlight
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q1235172
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,r5=`---
id: skill.lupercus-pack
title: Lupercus: Pack
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q2713122
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,u5=`---
id: skill.lympha-fresh-water
title: Lympha: Fresh Water
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q6586593
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,d5=`---
id: skill.magianus-ardor
title: Magianus: Ardor
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q126642697
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,h5=`---
id: skill.mala-fortuna-twist-of-fortune
title: Mala Fortuna: Twist of Fortune
kind: skill
show: page
when: highCard
mult: 1
god: Q131538263
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,f5=`---
id: skill.maleciabrudes-height
title: Maleciabrudes: Height
kind: skill
show: page
when: pair
mult: 1
god: Q126642565
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,g5=`---
id: skill.mamers-strength
title: Mamers: Strength
kind: skill
show: page
when: threeOfAKind
chips: 10
mult: 1
god: Q11934766
---

Your three of a kind hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,m5=`---
id: skill.mana-genita-beginning
title: Mana Genita: Beginning
kind: skill
show: page
when: any
chips: 4
god: Q5990997
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,p5=`---
id: skill.manth-ember
title: Manth: Ember
kind: skill
show: page
when: highCard
chips: 6
god: Q1630871
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,y5=`---
id: skill.manturna-current
title: Manturna: Current
kind: skill
show: page
when: pair
chips: 7
god: Q126597084
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,_5=`---
id: skill.marica-waters
title: Marica: Waters
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q1546675
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,v5=`---
id: skill.marmogius-shield
title: Marmogius: Shield
kind: skill
show: page
when: twoPair
chips: 13
god: Q126599485
---

Your two pair hands gain 13 chips before the multiplier.

? [[playing|Keep playing]]
`,k5=`---
id: skill.mars-charge
title: Mars's charge
kind: skill
show: page
when: pair
chips: 8
god: Q112
---

Your pairs gain 8 chips before the multiplier.

? [[playing|Keep playing]]
`,w5=`---
id: skill.mater-matuta-dawn
title: Mater Matuta's dawn
kind: skill
show: page
when: twoPair
chips: 12
god: Q1479084
---

Your two pair hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,b5=`---
id: skill.mefitis-earth-breath
title: Mefitis: Earth Breath
kind: skill
show: page
when: threeOfAKind
chips: 10
mult: 1
god: Q467594
---

Your three of a kind hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,x5=`---
id: skill.mellona-honey
title: Mellona: Honey
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q3142105
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,S5=`---
id: skill.mercury-path
title: Mercury's path
kind: skill
show: page
when: highCard
chips: 6
god: Q1150
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,E5=`---
id: skill.messia-domain
title: Messia: Harvest
kind: skill
show: page
when: any
domain: words
words: grain, harvest, corn
chips: 8
god: Q126597086
---

Each scoring motif whose name or description contains grain, harvest, corn gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,C5=`---
id: skill.messor-reaping
title: Messor: Reaping
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q16664163
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,A5=`---
id: skill.minerva-wisdom
title: Minerva: Wisdom
kind: skill
show: page
when: twoPair
chips: 12
god: Q126916
---

Your two pair hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,T5=`---
id: skill.misericordia-gathering
title: Misericordia: Gathering
kind: skill
show: page
when: pair
mult: 1
god: Q30055681
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,j5=`---
id: skill.molae-millstones
title: Molae: Millstones
kind: skill
show: page
when: pair
chips: 8
god: Q6895640
---

Your pairs gain 8 chips before the multiplier.

? [[playing|Keep playing]]
`,N5=`---
id: skill.moneta-coin
title: Moneta: Coin
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q1227721
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,M5=`---
id: skill.montinus-gathering
title: Montinus: Gathering
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q126597087
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,q5=`---
id: skill.mors-silence
title: Mors: Silence
kind: skill
show: page
when: any
rank: A
chips: 4
god: Q1606645
---

Each scoring A adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Q5=`---
id: skill.morta-thread
title: Morta: Thread
kind: skill
show: page
when: any
rank: 10
chips: 4
god: Q1284182
---

Each scoring 10 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,K5=`---
id: skill.murcia-quiet-place
title: Murcia: Quiet Place
kind: skill
show: page
when: any
rank: Queen
chips: 4
god: Q6937575
---

Each scoring Queen adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,O5=`---
id: skill.mutunus-tutunus-joining
title: Mutunus Tutunus: Joining
kind: skill
show: page
when: pair
chips: 7
god: Q1752057
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,z5=`---
id: skill.nascio-birth
title: Nascio: Birth
kind: skill
show: page
when: any
rank: 2
chips: 4
god: Q6966647
---

Each scoring 2 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,R5=`---
id: skill.natura-attraction
title: Natura: Nature
kind: skill
show: page
when: any
domain: affinity
threshold: 0.52
reach: 0.10
chips: 12
god: Q33229365
---

Each scoring motif close to Natura gains up to 12 chips before the multiplier. Closer motifs gain more.

? [[playing|Keep playing]]
`,D5=`---
id: skill.necessitas-necessity
title: Necessitas: Necessity
kind: skill
show: page
when: any
chips: 4
god: Q3346833
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Y5=`---
id: skill.nemestrinus-domain
title: Nemestrinus: Sacred Grove
kind: skill
show: page
when: any
domain: words
words: tree, forest, grove
chips: 8
god: Q126597090
---

Each scoring motif whose name or description contains tree, forest, grove gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,I5=`---
id: skill.nenia-dea-lament
title: Nenia Dea: Lament
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q2737253
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,H5=`---
id: skill.nennicus-summit
title: Nennicus: Summit
kind: skill
show: page
when: any
chips: 3
god: Q126667121
---

Your hands gain 3 chips before the multiplier.

? [[playing|Keep playing]]
`,U5=`---
id: skill.neptune-tide
title: Neptune's tide
kind: skill
show: page
when: flush
mult: 2
god: Q3954
---

Your flushes gain 2 multiplier.

? [[playing|Keep playing]]
`,B5=`---
id: skill.nerio-valor
title: Nerio: Valor
kind: skill
show: page
when: threeOfAKind
chips: 10
mult: 1
god: Q1787622
---

Your three of a kind hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,L5=`---
id: skill.noduterensis-venture
title: Noduterensis: Venture
kind: skill
show: page
discards: 1
god: Q126597095
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,V5=`---
id: skill.nodutus-knot
title: Nodutus: Knot
kind: skill
show: page
when: twoPair
chips: 12
god: Q18659372
---

Your two pair hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,G5=`---
id: skill.nona-ninth-month
title: Nona: Ninth Month
kind: skill
show: page
when: any
rank: 9
chips: 4
god: Q7049161
---

Each scoring 9 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,X5=`---
id: skill.nox-night
title: Nox: Night
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q1651665
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,$5=`---
id: skill.numeria-promise
title: Numeria: Promise
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q126597103
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Z5=`---
id: skill.nundina-bond
title: Nundina: Bond
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q99744425
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,J5=`---
id: skill.obarator-last-furrow
title: Obarator: Last Furrow
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q3347916
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,F5=`---
id: skill.occator-harrow
title: Occator: Harrow
kind: skill
show: page
when: pair
chips: 8
god: Q3348590
---

Your pairs gain 8 chips before the multiplier.

? [[playing|Keep playing]]
`,P5=`---
id: skill.odoria-venture
title: Odoria: Venture
kind: skill
show: page
discards: 1
god: Q126597104
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,W5=`---
id: skill.orbona-new-beginning
title: Orbona: New Beginning
kind: skill
show: page
hands: 1
god: Q3355220
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,n8=`---
id: skill.orcus-underworld
title: Orcus: Underworld
kind: skill
show: page
when: fourOfAKind
chips: 15
mult: 1
god: Q860314
---

Your four of a kind hands gain 15 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,e8=`---
id: skill.oriens-rising
title: Oriens: Rising
kind: skill
show: page
when: straight
chips: 14
god: Q130343520
---

Your straights gain 14 chips before the multiplier.

? [[playing|Keep playing]]
`,t8=`---
id: skill.ossipago-journey
title: Ossipago: Journey
kind: skill
show: page
when: any
chips: 4
god: Q126597106
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,i8=`---
id: skill.pair
title: Two of a kind
kind: skill
show: page
when: pair
mult: 1
---

Your pairs gain 1 multiplier. You can turn this skill off in the bar.

? [[playing|Keep playing]]
`,l8=`---
id: skill.palatua-hill
title: Palatua: Hill
kind: skill
show: page
when: any
chips: 3
god: Q3889398
---

Your hands gain 3 chips before the multiplier.

? [[playing|Keep playing]]
`,a8=`---
id: skill.pallor-offering
title: Pallor: Offering
kind: skill
show: page
hands: 1
god: Q65027579
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,s8=`---
id: skill.pantica-promise
title: Pantica: Promise
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q126597108
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,o8=`---
id: skill.partula-journey
title: Partula: Journey
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q126597112
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,c8=`---
id: skill.patella-gathering
title: Patella: Gathering
kind: skill
show: page
when: any
chips: 4
god: Q126597116
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,r8=`---
id: skill.paventia-courage
title: Paventia: Courage
kind: skill
show: page
when: highCard
chips: 7
god: Q33140193
---

Your high card hands gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,u8=`---
id: skill.pavor-dread
title: Pavor: Dread
kind: skill
show: page
discards: 1
god: Q12137419
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,d8=`---
id: skill.pax-peace
title: Pax: Peace
kind: skill
show: page
discards: 1
god: Q1132674
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,h8=`---
id: skill.pecunia-wealth
title: Pecunia: Wealth
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q3898559
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,f8=`---
id: skill.pellonia-mythology-repulse
title: Pellonia (mythology): Repulse
kind: skill
show: page
discards: 1
god: Q16902681
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,g8=`---
id: skill.peragenor-gathering
title: Peragenor: Gathering
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q126597121
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,m8=`---
id: skill.perfica-gathering
title: Perfica: Gathering
kind: skill
show: page
when: any
chips: 4
god: Q126597898
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,p8=`---
id: skill.pertunda-opening
title: Pertunda: Opening
kind: skill
show: page
hands: 1
god: Q6073054
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,y8=`---
id: skill.peta-venture
title: Peta: Venture
kind: skill
show: page
discards: 1
god: Q126597904
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,_8=`---
id: skill.picumnus-field
title: Picumnus: Field
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q3382582
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,v8=`---
id: skill.picus-woodpecker
title: Picus: Woodpecker
kind: skill
show: page
when: highCard
chips: 7
god: Q235724
---

Your high card hands gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,k8=`---
id: skill.pietas-devotion
title: pietas: Devotion
kind: skill
show: page
when: pair
mult: 1
god: Q2643299
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,w8=`---
id: skill.pilumnus-grain
title: Pilumnus: Grain
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q2527646
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,b8=`---
id: skill.pirunenus-light
title: Pirunenus: Light
kind: skill
show: page
when: straight
chips: 12
god: Q126668730
---

Your straights gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,x8=`---
id: skill.pluto-hidden-wealth
title: Pluto: Hidden Wealth
kind: skill
show: page
when: threeOfAKind
chips: 8
mult: 1
god: Q152262
---

Your three of a kind hands gain 8 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,S8=`---
id: skill.poena-reckoning
title: Poena: Reckoning
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q10979868
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,E8=`---
id: skill.pollentia-venture
title: Pollentia: Venture
kind: skill
show: page
discards: 1
god: Q32619213
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,C8=`---
id: skill.pomona-orchard
title: Pomona: Orchard
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q171239
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,A8=`---
id: skill.potina-drink
title: Potina: Drink
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q21721426
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,T8=`---
id: skill.potua-promise
title: Potua: Promise
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q126597917
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,j8=`---
id: skill.praestana-gathering
title: Praestana: Gathering
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q126597921
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,N8=`---
id: skill.praestitia-accord
title: Praestitia: Accord
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q126597924
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,M8=`---
id: skill.prema-mater-gathering
title: Prema mater: Gathering
kind: skill
show: page
when: any
chips: 4
god: Q126597935
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,q8=`---
id: skill.promitor-distribution
title: Promitor: Distribution
kind: skill
show: page
discards: 1
god: Q3407422
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Q8=`---
id: skill.proserpina-return
title: Proserpina: Return
kind: skill
show: page
when: fullHouse
chips: 12
mult: 1
god: Q14515330
---

Your full houses gain 12 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,K8=`---
id: skill.providentia-foresight
title: Providentia: Foresight
kind: skill
show: page
when: straight
chips: 8
mult: 1
god: Q591826
---

Your straights gain 8 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,O8=`---
id: skill.pudicitia-reserve
title: Pudicitia: Reserve
kind: skill
show: page
discards: 1
god: Q2117350
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,z8=`---
id: skill.pudor-bond
title: Pudor: Bond
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q43273918
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,R8=`---
id: skill.puta-pruning
title: Puta: Pruning
kind: skill
show: page
discards: 1
god: Q4993381
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,D8=`---
id: skill.q110401864-venture
title: Q110401864: Venture
kind: skill
show: page
discards: 1
god: Q110401864
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Y8=`---
id: skill.q110458315-accord
title: Q110458315: Accord
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q110458315
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,I8=`---
id: skill.q11698746-unknown-name
title: Q11698746: Unknown Name
kind: skill
show: page
when: any
rank: 5
chips: 4
god: Q11698746
---

Each scoring 5 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,H8=`---
id: skill.q117860170-current
title: Q117860170: Current
kind: skill
show: page
when: pair
chips: 7
god: Q117860170
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,U8=`---
id: skill.q11914074-unknown-name
title: Q11914074: Unknown Name
kind: skill
show: page
when: pair
chips: 7
god: Q11914074
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,B8=`---
id: skill.q11926111-unknown-name
title: Q11926111: Unknown Name
kind: skill
show: page
discards: 1
god: Q11926111
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,L8=`---
id: skill.q11950437-unknown-name
title: Q11950437: Unknown Name
kind: skill
show: page
when: any
rank: 6
chips: 4
god: Q11950437
---

Each scoring 6 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,V8=`---
id: skill.q18029370-unknown-name
title: Q18029370: Unknown Name
kind: skill
show: page
when: any
rank: 8
chips: 4
god: Q18029370
---

Each scoring 8 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,G8=`---
id: skill.q1885106-unknown-name
title: Q1885106: Unknown Name
kind: skill
show: page
when: any
rank: 2
chips: 4
god: Q1885106
---

Each scoring 2 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,X8=`---
id: skill.q21095840-unknown-name
title: Q21095840: Unknown Name
kind: skill
show: page
when: any
rank: Knight
chips: 4
god: Q21095840
---

Each scoring Knight adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,$8=`---
id: skill.q21705165-unknown-name
title: Q21705165: Unknown Name
kind: skill
show: page
when: highCard
chips: 5
god: Q21705165
---

Your high card hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,Z8=`---
id: skill.q2485201-unknown-name
title: Q2485201: Unknown Name
kind: skill
show: page
when: any
rank: 3
chips: 4
god: Q2485201
---

Each scoring 3 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,J8=`---
id: skill.q2982738-unknown-name
title: Q2982738: Unknown Name
kind: skill
show: page
when: any
rank: 4
chips: 4
god: Q2982738
---

Each scoring 4 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,F8=`---
id: skill.q3091027-envy
title: Q3091027: Envy
kind: skill
show: page
when: pair
mult: 1
god: Q3091027
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,P8=`---
id: skill.q3188064-unknown-name
title: Q3188064: Unknown Name
kind: skill
show: page
when: highCard
chips: 6
god: Q3188064
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,W8=`---
id: skill.q3276498-unknown-name
title: Q3276498: Unknown Name
kind: skill
show: page
when: any
rank: 3
chips: 4
god: Q3276498
---

Each scoring 3 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,nx=`---
id: skill.q3453384-unknown-name
title: Q3453384: Unknown Name
kind: skill
show: page
when: any
rank: 4
chips: 4
god: Q3453384
---

Each scoring 4 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,ex=`---
id: skill.q3502725-unknown-name
title: Q3502725: Unknown Name
kind: skill
show: page
when: highCard
mult: 1
god: Q3502725
---

Your high card hands gain 1 multiplier.

? [[playing|Keep playing]]
`,tx=`---
id: skill.q55423668-gathering
title: Q55423668: Gathering
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q55423668
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,ix=`---
id: skill.q55528226-bond
title: Q55528226: Bond
kind: skill
show: page
when: pair
chips: 7
god: Q55528226
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,lx=`---
id: skill.q57040959-journey
title: Q57040959: Journey
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q57040959
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,ax=`---
id: skill.q57664736-promise
title: Q57664736: Promise
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q57664736
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,sx=`---
id: skill.q60182698-offering
title: Q60182698: Offering
kind: skill
show: page
hands: 1
god: Q60182698
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,ox=`---
id: skill.q60182729-promise
title: Q60182729: Promise
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q60182729
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,cx=`---
id: skill.q61456534-venture
title: Q61456534: Venture
kind: skill
show: page
discards: 1
god: Q61456534
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,rx=`---
id: skill.q61601897-offering
title: Q61601897: Offering
kind: skill
show: page
hands: 1
god: Q61601897
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,ux=`---
id: skill.q61640802-accord
title: Q61640802: Accord
kind: skill
show: page
when: any
rank: 8
chips: 4
god: Q61640802
---

Each scoring 8 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,dx=`---
id: skill.q858652-unknown-name
title: Q858652: Unknown Name
kind: skill
show: page
when: highCard
chips: 5
god: Q858652
---

Your high card hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,hx=`---
id: skill.q86665122-offering
title: Q86665122: Offering
kind: skill
show: page
hands: 1
god: Q86665122
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,fx=`---
id: skill.querquetulanae-oak-grove
title: Querquetulanae: Oak Grove
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q7271377
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,gx=`---
id: skill.rederator-return
title: Rederator: Return
kind: skill
show: page
discards: 1
god: Q3427202
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,mx=`---
id: skill.rediculus-journey-home
title: Rediculus: Journey Home
kind: skill
show: page
discards: 1
god: Q7305935
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,px=`---
id: skill.rhine-river-path
title: Rhine: River Path
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q130343611
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,yx=`---
id: skill.rigonemetis-domain
title: Rigonemetis: Sacred Grove
kind: skill
show: page
when: any
domain: words
words: tree, forest, grove
chips: 8
god: Q126599429
---

Each scoring motif whose name or description contains tree, forest, grove gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,_x=`---
id: skill.robigus-harvest
title: Robigus: Harvest
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q10752043
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,vx=`---
id: skill.roma-city
title: Roma: City
kind: skill
show: page
when: any
mult: 1
god: Q953033
---

Your hands gain 1 multiplier.

? [[playing|Keep playing]]
`,kx=`---
id: skill.rumina-nourishment
title: Rumina: Nourishment
kind: skill
show: page
when: highCard
chips: 6
god: Q2575982
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,wx=`---
id: skill.rumon-venture
title: Rumon: Venture
kind: skill
show: page
discards: 1
god: Q126597965
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,bx=`---
id: skill.runcina-domain
title: Runcina: Weeding
kind: skill
show: page
when: any
domain: words
words: weed, plant
chips: 8
god: Q126597982
---

Each scoring motif whose name or description contains weed, plant gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,xx=`---
id: skill.salacia-saltwater
title: Salacia: Saltwater
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q2987780
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Sx=`---
id: skill.sancus-pledge
title: Sancus: Pledge
kind: skill
show: page
when: pair
mult: 1
god: Q1753275
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,Ex=`---
id: skill.sarritor-venture
title: Sarritor: Venture
kind: skill
show: page
discards: 1
god: Q60845719
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Cx=`---
id: skill.sator-journey
title: Sator: Journey
kind: skill
show: page
when: pair
mult: 1
god: Q126598002
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,Ax=`---
id: skill.saturn-golden-age
title: Saturn: Golden Age
kind: skill
show: page
when: any
chips: 4
god: Q134388
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Tx=`---
id: skill.securitas-safety
title: Securitas: Safety
kind: skill
show: page
discards: 1
god: Q14524392
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,jx=`---
id: skill.segesta-current
title: Segesta: Current
kind: skill
show: page
when: highCard
chips: 6
god: Q126908031
---

Your high card hands gain 6 chips before the multiplier.

? [[playing|Keep playing]]
`,Nx=`---
id: skill.segetia-crops
title: Segetia: Crops
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q9334903
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Mx=`---
id: skill.seia-domain
title: Seia: Seed
kind: skill
show: page
when: any
domain: words
words: seed, sow
chips: 8
god: Q126908035
---

Each scoring motif whose name or description contains seed, sow gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,qx=`---
id: skill.semonia-sowing
title: Semonia: Sowing
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q7449748
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Qx=`---
id: skill.sentia-promise
title: Sentia: Promise
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q126908038
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Kx=`---
id: skill.sentinus-feeling
title: Sentinus: Feeling
kind: skill
show: page
when: highCard
chips: 4
mult: 1
god: Q7451355
---

Your high card hands gain 4 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Ox=`---
id: skill.septimontius-accord
title: Septimontius: Accord
kind: skill
show: page
when: any
rank: Page
chips: 4
god: Q126908042
---

Each scoring Page adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,zx=`---
id: skill.sequana-river-seine
title: Sequana: River Seine
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q472766
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Rx=`---
id: skill.serra-promise
title: Serra: Promise
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q126908046
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Dx=`---
id: skill.serritor-digging
title: Serritor: Digging
kind: skill
show: page
discards: 1
god: Q20872002
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Yx=`---
id: skill.silvanus-woodland
title: Silvanus: Woodland
kind: skill
show: page
when: pair
chips: 7
god: Q548445
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,Ix=`---
id: skill.singilis-flank
title: Singilis: Flank
kind: skill
show: page
when: pair
mult: 1
god: Q126618004
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,Hx=`---
id: skill.smertrios-resolve
title: Smertrios: Resolve
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q2295136
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,Ux=`---
id: skill.smertulitanus-rally
title: Smertulitanus: Rally
kind: skill
show: page
when: threeOfAKind
mult: 2
god: Q126618009
---

Your three of a kind hands gain 2 multiplier.

? [[playing|Keep playing]]
`,Bx=`---
id: skill.sol-invictus-unconquered-sun
title: Sol Invictus: Unconquered Sun
kind: skill
show: page
when: straight
mult: 2
god: Q214494
---

Your straights gain 2 multiplier.

? [[playing|Keep playing]]
`,Lx=`---
id: skill.sol-sunlight
title: Sol: Sunlight
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q1199937
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Vx=`---
id: skill.solitumarus-way
title: Solitumarus: Way
kind: skill
show: page
when: any
chips: 4
god: Q126634354
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Gx=`---
id: skill.somnus-sleep
title: Somnus: Sleep
kind: skill
show: page
discards: 1
god: Q21030618
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,Xx=`---
id: skill.sors-lots
title: Sors: Lots
kind: skill
show: page
when: highCard
chips: 3
mult: 1
god: Q7563745
---

Your high card hands gain 3 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,$x=`---
id: skill.spes-hope
title: Spes's hope
kind: skill
show: page
when: highCard
chips: 3
mult: 1
god: Q1482478
---

Your high card hands gain 3 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,Zx=`---
id: skill.spiniensis-thorns
title: Spiniensis: Thorns
kind: skill
show: page
when: any
suit: Swords
chips: 4
god: Q15270377
---

Each scoring Swords card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Jx=`---
id: skill.stata-mater-stillness
title: Stata Mater: Stillness
kind: skill
show: page
when: any
chips: 4
god: Q7602975
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Fx=`---
id: skill.sterquilinus-rich-soil
title: Sterquilinus: Rich Soil
kind: skill
show: page
when: any
chips: 4
god: Q2518565
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,Px=`---
id: skill.stimula-first-steps
title: Stimula: First Steps
kind: skill
show: page
hands: 1
god: Q1770908
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,Wx=`---
id: skill.strenua-strength
title: Strenua: Strength
kind: skill
show: page
when: pair
chips: 7
god: Q1989704
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,nS=`---
id: skill.studied-hand
title: Studied hand
kind: skill
show: page
when: any
chips: 4
---

You have started to know the hands. Every hand scores 4 extra chips before the multiplier. A [[term.rank|hidden rank]] stays hidden; these chips do not reveal it. Turn this off in the bar when you want the plain table.

? [[playing|Keep going]]
`,eS=`---
id: skill.suadela-persuasion
title: Suadela: Persuasion
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q1459682
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,tS=`---
id: skill.subigus-pater-accord
title: Subigus pater: Accord
kind: skill
show: page
when: any
rank: A
chips: 4
god: Q126908049
---

Each scoring A adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,iS=`---
id: skill.subruncinator-weeding
title: Subruncinator: Weeding
kind: skill
show: page
discards: 1
god: Q3502626
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,lS=`---
id: skill.summanus-night-storm
title: Summanus: Night Storm
kind: skill
show: page
when: straightFlush
chips: 12
mult: 1
god: Q942906
---

Your straight flushes gain 12 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,aS=`---
id: skill.tages-revelation
title: Tages: Revelation
kind: skill
show: page
when: twoPair
chips: 10
mult: 1
god: Q659594
---

Your two pair hands gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,sS=`---
id: skill.talasius-bond
title: Talasius: Bond
kind: skill
show: page
when: twoPair
chips: 12
god: Q772554
---

Your two pair hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,oS=`---
id: skill.tamitenus-heavens
title: Tamitenus: Heavens
kind: skill
show: page
when: any
mult: 1
god: Q126680685
---

Your hands gain 1 multiplier.

? [[playing|Keep playing]]
`,cS=`---
id: skill.tarbucelis-stand
title: Tarbucelis: Stand
kind: skill
show: page
when: highCard
chips: 4
mult: 1
god: Q126631244
---

Your high card hands gain 4 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,rS=`---
id: skill.tellumo-earth
title: Tellumo: Earth
kind: skill
show: page
when: any
chips: 5
god: Q10379327
---

Your hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,uS=`---
id: skill.tempestas-weather
title: Tempestas: Weather
kind: skill
show: page
when: flush
chips: 10
mult: 1
god: Q7698375
---

Your flushes gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,dS=`---
id: skill.terminus-boundary
title: Terminus: Boundary
kind: skill
show: page
when: twoPair
mult: 1
god: Q580723
---

Your two pair hands gain 1 multiplier.

? [[playing|Keep playing]]
`,hS=`---
id: skill.tibertus-riverbank
title: Tibertus: Riverbank
kind: skill
show: page
when: any
suit: Cups
chips: 4
god: Q7800393
---

Each scoring Cups card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,fS=`---
id: skill.tiburtine-sibyl-prophecy
title: Tiburtine Sibyl: Prophecy
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q2062262
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,gS=`---
id: skill.tillenus-march
title: Tillenus: March
kind: skill
show: page
when: straight
chips: 14
god: Q126631667
---

Your straights gain 14 chips before the multiplier.

? [[playing|Keep playing]]
`,mS=`---
id: skill.tranquillitas-tranquility
title: Tranquillitas: Tranquility
kind: skill
show: page
discards: 1
god: Q7833470
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,pS=`---
id: skill.tritullus-strike
title: Tritullus: Strike
kind: skill
show: page
when: pair
chips: 10
god: Q126631989
---

Your pairs gain 10 chips before the multiplier.

? [[playing|Keep playing]]
`,yS=`---
id: skill.trivia-crossroads
title: Trivia: Crossroads
kind: skill
show: page
discards: 1
god: Q2622041
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,_S=`---
id: skill.tutela-guardianship
title: Tutela: Guardianship
kind: skill
show: page
discards: 1
god: Q6154076
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,vS=`---
id: skill.tutelina-shelter
title: Tutelina: Shelter
kind: skill
show: page
hands: 1
god: Q7856922
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,kS=`---
id: skill.unxia-union
title: Unxia: Union
kind: skill
show: page
when: twoPair
mult: 1
god: Q2499514
---

Your two pair hands gain 1 multiplier.

? [[playing|Keep playing]]
`,wS=`---
id: skill.uxlemitanus-domain
title: Uxlemitanus: Weather
kind: skill
show: page
when: any
domain: words
words: storm, wind, rain
chips: 8
god: Q126924968
---

Each scoring motif whose name or description contains storm, wind, rain gains 8 chips before the multiplier.

? [[playing|Keep playing]]
`,bS=`---
id: skill.valetudo-accord
title: Valetudo: Accord
kind: skill
show: page
when: any
rank: 5
chips: 4
god: Q104845868
---

Each scoring 5 adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,xS=`---
id: skill.vallonia-valley
title: Vallonia: Valley
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q7912449
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,SS=`---
id: skill.venus-affection
title: Venus: Affection
kind: skill
show: page
when: pair
mult: 1
god: Q47652
---

Your pairs gain 1 multiplier.

? [[playing|Keep playing]]
`,ES=`---
id: skill.venus-felix-fortunate-meeting
title: Venus Felix: Fortunate Meeting
kind: skill
show: page
when: pair
chips: 5
mult: 1
god: Q130343668
---

Your pairs gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,CS=`---
id: skill.verminus-cure
title: Verminus: Cure
kind: skill
show: page
discards: 1
god: Q7921647
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,AS=`---
id: skill.vervactor-first-furrow
title: Vervactor: First Furrow
kind: skill
show: page
when: any
suit: Pentacles
chips: 4
god: Q3556290
---

Each scoring Pentacles card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,TS=`---
id: skill.vesta-hearth
title: Vesta: Hearth
kind: skill
show: page
when: any
chips: 5
god: Q178710
---

Your hands gain 5 chips before the multiplier.

? [[playing|Keep playing]]
`,jS=`---
id: skill.vibilia-wayfinding
title: Vibilia: Wayfinding
kind: skill
show: page
when: straight
chips: 10
mult: 1
god: Q12902470
---

Your straights gain 10 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,NS=`---
id: skill.vica-pota-mastery
title: Vica Pota: Mastery
kind: skill
show: page
hands: 1
god: Q1093874
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,MS=`---
id: skill.victa-gathering
title: Victa: Gathering
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q126908053
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,qS=`---
id: skill.viduus-parting
title: Viduus: Parting
kind: skill
show: page
when: any
rank: King
chips: 4
god: Q1114593
---

Each scoring King adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,QS=`---
id: skill.virbius-return-to-life
title: Virbius: Return to Life
kind: skill
show: page
hands: 1
god: Q3560591
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,KS=`---
id: skill.virginiensis-promise
title: Virginiensis: Promise
kind: skill
show: page
when: any
suit: Wands
chips: 4
god: Q126908059
---

Each scoring Wands card adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,OS=`---
id: skill.viriplaca-reconciliation
title: Viriplaca: Reconciliation
kind: skill
show: page
discards: 1
god: Q2527866
---

You gain 1 extra discard at the start of each fight.

? [[playing|Keep playing]]
`,zS=`---
id: skill.virtus-bravery
title: Virtus: Bravery
kind: skill
show: page
when: threeOfAKind
mult: 2
god: Q582177
---

Your three of a kind hands gain 2 multiplier.

? [[playing|Keep playing]]
`,RS=`---
id: skill.visidianus-promise
title: Visidianus: Promise
kind: skill
show: page
when: any
rank: Knight
chips: 4
god: Q2528300
---

Each scoring Knight adds 4 chips before the multiplier.

? [[playing|Keep playing]]
`,DS=`---
id: skill.vitula-gladness
title: Vitula: Gladness
kind: skill
show: page
hands: 1
god: Q15285037
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,YS=`---
id: skill.vitumnus-journey
title: Vitumnus: Journey
kind: skill
show: page
when: pair
chips: 7
god: Q126924573
---

Your pairs gain 7 chips before the multiplier.

? [[playing|Keep playing]]
`,IS=`---
id: skill.voleta-gathering
title: Voleta: Gathering
kind: skill
show: page
when: any
chips: 4
god: Q126713578
---

Your hands gain 4 chips before the multiplier.

? [[playing|Keep playing]]
`,HS=`---
id: skill.volturnus-flow
title: Volturnus: Flow
kind: skill
show: page
when: flush
mult: 2
god: Q1928517
---

Your flushes gain 2 multiplier.

? [[playing|Keep playing]]
`,US=`---
id: skill.volumna-sanctuary
title: Volumna: Sanctuary
kind: skill
show: page
hands: 1
god: Q12221246
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,BS=`---
id: skill.volumnus-journey
title: Volumnus: Journey
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q126713703
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,LS=`---
id: skill.volupia-pleasure
title: Volupia: Pleasure
kind: skill
show: page
when: pair
chips: 5
mult: 1
god: Q3563035
---

Your pairs gain 5 chips before the multiplier and 1 multiplier.

? [[playing|Keep playing]]
`,VS=`---
id: skill.volutina-offering
title: Volutina: Offering
kind: skill
show: page
hands: 1
god: Q126713642
---

You gain 1 extra hand at the start of each fight.

? [[playing|Keep playing]]
`,GS=`---
id: skill.vulcan-forge
title: Vulcan's forge
kind: skill
show: page
when: threeOfAKind
chips: 12
god: Q4640
---

Your three of a kind hands gain 12 chips before the multiplier.

? [[playing|Keep playing]]
`,XS=`---
id: start
---

> [[empty|seen_total == 0]]
> [[returning|seen_total > 0]]
`,$S=`---
id: term.rank
title: Rank
bind: seal
---

The rank is the face of the card: Ace through 10, or a court. A ? means this motif has been seen and not yet played, so the rank is still hidden. The picture is already yours.
`,ZS=`---
id: virgilio.first-map
title: Virgilio · The first crossing
show: page
---

You have crossed a map. Your deck and powers can enter another; the motifs and ranks you discovered remain in your library.

? [[playing|Keep playing]]
`,JS=`---
id: virgilio.first-play-gate
---

> [[revealed|in_battle == 1]]
> [[revealed|reward_visible == 1]]
> [[revealed|conquered >= 2]]
`,FS=`---
id: virgilio.power
title: Virgilio · A god's gift
show: page
---

You can read a god's power before you attack. Its sentence tells you what it changes if you win that land.

? [[playing|Keep playing]]
`,PS=`---
id: virgilio.read-deck
title: Virgilio · Reading the deck
show: page
---

You can inspect your powers in Deck. Select a card-specific power to highlight matching motifs, even when their ranks are still hidden.

? [[playing|Keep playing]]
`,WS=`---
id: virgilio.resemblance
title: Virgilio · A second resemblance
show: page
---

You can look past rank. The gods gather motifs into lands by how closely their meanings meet.

? [[playing|Keep playing]]
`,n7=`---
id: virgilio.reward-moment
title: Virgilio · What you carry
show: page
---

You have won this land. Your choice here will shape the deck you carry onward.

> [[playing|reward_visible == 0]]

? [[playing|Keep playing]]
`,e7=`---
id: virgilio.self-resemblance
title: Virgilio · A personal resemblance
show: page
---

You can recognize motifs that answer the powers you hold by the color of their names.

? [[playing|Keep going]]
`,t7=`---
id: virgilio.story
title: Virgilio · A story answers
show: page
---

You have uncovered a story. A story you know can add points to a hand when enough of its motifs resonate with it.

? [[playing|Keep playing]]
`,hs=["2","3","4","5","6","7","8","9","10","Page","Knight","Queen","King","A"],ss={highCard:{chips:5,mult:1,label:"High Card"},pair:{chips:10,mult:2,label:"Pair"},twoPair:{chips:20,mult:2,label:"Two Pair"},threeOfAKind:{chips:30,mult:3,label:"Three of a Kind"},straight:{chips:30,mult:4,label:"Straight"},flush:{chips:35,mult:4,label:"Flush"},fullHouse:{chips:40,mult:4,label:"Full House"},fourOfAKind:{chips:60,mult:7,label:"Four of a Kind"},straightFlush:{chips:100,mult:8,label:"Straight Flush"},fiveOfAKind:{chips:120,mult:12,label:"Five of a Kind"},flushHouse:{chips:140,mult:14,label:"Flush House"},flushFive:{chips:160,mult:16,label:"Flush Five"}},hd=["flushFive","flushHouse","fiveOfAKind","straightFlush","fourOfAKind","fullHouse","flush","straight","threeOfAKind","twoPair","pair","highCard"],lc=hd.map(l=>({id:l,chips:ss[l].chips,mult:ss[l].mult,label:ss[l].label})),i7=new Set(["Page","Knight","Queen","King"]);function l7(l){return l==="A"?11:i7.has(l)?10:Number(l)}function a7(l,a){return(a==null?void 0:a[l])??l7(l)}function $t(l){return hs.indexOf(l)}function s7(l){const a=new Map;for(const s of l){const r=a.get(s.rank)??[];r.push(s),a.set(s.rank,r)}return a}function ed(l){return l<3?0:l>=5?1:(l-2)/3}function Zo(l,a){const s=ed(a);if(s<=0||l===0)return 0;if(s>=1)return l;const r=Math.round(l*s);return r>0?r:1}function Gp(l){const a=l.filter(u=>u.wild);let s=[];const r=new Map;for(const u of l){if(u.wild||!u.suit)continue;const d=r.get(u.suit)??[];d.push(u),r.set(u.suit,d)}for(const u of r.values())u.length>s.length&&(s=u);return s.concat(a)}function fd(l){const a=new Set(l.map(h=>$t(h.rank))),s=[...a].sort((h,g)=>h-g);let r=[],u=[],d=Number.NEGATIVE_INFINITY;for(const h of s)u=h===d+1?[...u,h]:[h],d=h,u.length>r.length&&(r=u);if(a.has($t("A"))){const h=[$t("A")];for(const g of["2","3","4","5"]){if(!a.has($t(g)))break;h.push($t(g))}h.length>r.length&&(r=h)}return r.map(h=>hs[h])}function o7(l){const a=new Set(fd(l));return l.filter(s=>a.has(s.rank))}function Xp(l){return Gp(l).length}function $p(l){return fd(l).length}function c7(l,a){const s=[],r=Gp(l);r.length>=3&&r.length<5&&!Zp.has(a)&&s.push(...r.map(d=>d.id));const u=fd(l);return u.length>=3&&u.length<5&&!Jp.has(a)&&s.push(...o7(l).map(d=>d.id)),[...new Set(s)]}function r7(l,a){const s=a.map(r=>r.title).filter(Boolean);return s.length>0?`${l}, ${s.join(", ")}`:l}const Zp=new Set(["flush","straightFlush","flushHouse","flushFive"]),Jp=new Set(["straight","straightFlush"]);function Fp(l,a,s=lc){const r=[],u=Xp(l),d=$p(l);if(u>=3&&u<5&&!Zp.has(a)){const h=s.find(g=>g.id==="flush");h&&r.push({title:`Flush of ${u}`,chips:Zo(h.chips,u),mult:Zo(h.mult,u)})}if(d>=3&&d<5&&!Jp.has(a)){const h=s.find(g=>g.id==="straight");h&&r.push({title:`Straight of ${d}`,chips:Zo(h.chips,d),mult:Zo(h.mult,d)})}return r.filter(h=>h.chips!==0||h.mult!==0)}function u7(l){return l.length!==5?!1:new Set(l.filter(s=>!s.wild).map(s=>s.suit)).size<=1}function d7(l){if(l.length!==5)return!1;const a=[...new Set(l.map(r=>$t(r.rank)))].sort((r,u)=>r-u);return a.length!==5?!1:a[4]-a[0]===4?!0:["A","2","3","4","5"].map(r=>$t(r)).every(r=>a.includes(r))}function vt(l){return l.map(a=>a.id)}function Lu(l,a){for(const s of l.values())if(s.length===a)return s;return[]}function h7(l,a){const s=s7(a),r=[...s.values()].map(g=>g.length).sort((g,f)=>f-g),u=u7(a),d=d7(a);if(l==="flushFive")return r[0]===5&&u?vt(a):null;if(l==="flushHouse")return r[0]===3&&r[1]===2&&u?vt(a):null;if(l==="fiveOfAKind")return r[0]===5?vt(a):null;if(l==="straightFlush")return d&&u?vt(a):null;if(l==="fourOfAKind"){const g=Lu(s,4);return g.length===4?vt(g):null}if(l==="fullHouse")return r[0]===3&&r[1]===2?vt(a):null;if(l==="flush")return u?vt(a):null;if(l==="straight")return d?vt(a):null;if(l==="threeOfAKind"){const g=Lu(s,3);return g.length===3?vt(g):null}if(l==="twoPair"){const g=[...s.values()].filter(f=>f.length===2);return g.length===2?vt(g.flat()):null}if(l==="pair"){const g=Lu(s,2);return g.length===2?vt(g):null}return[a.reduce((g,f)=>$t(f.rank)>$t(g.rank)?f:g).id]}function Pp(l,a=lc){if(l.length<1||l.length>5)throw new Error("A play must contain 1 to 5 cards.");for(const s of a){const r=h7(s.id,l);if(!r)continue;const u=l.filter(d=>r.includes(d.id)).reduce((d,h)=>d+h.chips,0);return{category:s.id,label:s.label,scoringCardIds:r,baseChips:s.chips,cardChips:u,multiplier:s.mult,pokerSubtotal:(s.chips+u)*s.mult}}throw new Error("Every selection contains a high card.")}function Wp(l,a,s){const r=a.reduce((g,f)=>g+f.chips,0),u=a.reduce((g,f)=>g+f.mult,0),d=s??a.map(g=>({title:g.title,chips:g.chips,mult:g.mult,state:"on"}));if(r===0&&u===0)return{...l,modifiers:d};const h=l.multiplier+u;return{...l,multiplier:h,skillChips:r,skillLabel:a.map(g=>g.title).filter(Boolean).join(", "),modifiers:d,pokerSubtotal:(l.baseChips+l.cardChips+r)*h}}function n0(l,a){return l==="deck"&&!a?"home":l==="encyclopedia"||l==="progression"||l==="home"||l==="deck"?l:a?a.pendingOffer&&a.status==="active"&&!a.battle&&!a.pendingRewardRegionId&&!a.rush?"offer":a.rush?"rush":a.status==="won"||a.status==="lost"?"outcome":a.pendingRewardRegionId?"reward":a.battle?"battle":"map":"home"}function f7(l){return new Set([...l.encounteredMotifIds,...l.discoveredMotifIds]).size}function g7(l){const a=new Set((l==null?void 0:l.seenMotifIds)??[]),s=l==null?void 0:l.battle;if(s)for(const r of[...s.visibleHandIds,...s.playedPileIds,...s.discardPileIds])a.add(r);return a.size}const e0=[{name:"seen_total",meaning:"Motifs met in the lifetime of this browser: pictures dealt, played, or scouted on the map, plus ranks discovered.",value:({profile:l})=>f7(l)},{name:"seen_run",meaning:"Motifs met since this run began. A new run starts it at 0. The current battle's hand, discard, and played cards count even before they are stored. The draw pile does not.",value:({run:l})=>g7(l)},{name:"discovered_total",meaning:"Motifs whose rank was revealed by playing them. Lifetime.",value:({profile:l})=>l.discoveredMotifIds.length},{name:"texts_total",meaning:"Folklore texts unlocked. Lifetime.",value:({profile:l})=>l.discoveredTextIds.length},{name:"runs",meaning:"Runs started, including the one in progress. Becomes 1 the moment New run or Short run succeeds.",value:({profile:l})=>{var a;return((a=l.statistics)==null?void 0:a.runs)??0}},{name:"hands_run",meaning:"Poker hands played in this run. Becomes 1 when the first hand is committed, before the score ceremony ends.",value:({run:l})=>(l==null?void 0:l.handsPlayed)??0},{name:"in_battle",meaning:"1 while a fight is active. 0 on the map, on a reward, and after the fight.",value:({run:l})=>{var a;return((a=l==null?void 0:l.battle)==null?void 0:a.status)==="active"?1:0}},{name:"conquered",meaning:"Regions held, including home. Home starts at 1. The next win makes it 2. A new map starts this count over.",value:({run:l})=>(l==null?void 0:l.conqueredRegionIds.length)??0},{name:"current_conquered_maps",meaning:"Maps this run has finished. The first map is 0 while it is being played, then 1 from the moment it falls through the whole of the next map.",value:({run:l})=>(l==null?void 0:l.mapsConquered)??0},{name:"offer_open",meaning:"1 while a run is waiting on an offer. 0 once the player has picked, and whenever no offer is waiting.",value:({run:l})=>l!=null&&l.pendingOffer?1:0},{name:"reward_visible",meaning:"1 only while the victory reward is the screen in front of the player. A reward that is waiting does not count during a score ceremony, a fast-forward, or while another screen is open.",value:({view:l,run:a,ceremony:s})=>!s&&n0(l,a)==="reward"?1:0}],m7=[{name:"start-run",meaning:"The group of run buttons on the home screen."},{name:"new-run",meaning:"New run."},{name:"short-run",meaning:"Short run."},{name:"continue",meaning:"Continue, only when a run exists."},{name:"map",meaning:"The world map, only while the map is open."},{name:"attack",meaning:"The Attack button on the map."},{name:"play",meaning:"Play the selected cards, during a fight."},{name:"play-all",meaning:"Play all, which sends every card in the hand, up to the play cap."},{name:"discard",meaning:"Discard, during a fight."},{name:"library",meaning:"Encyclopedia in the top bar."},{name:"deck",meaning:"Deck in the top bar, only during a run."}],p7=e0.map(l=>l.name),y7=m7.map(l=>l.name),_7=new Set(p7);function td(l){return _7.has(l)}function id(l,a,s={}){const r={profile:l,run:a,view:s.view??"auto",ceremony:s.ceremony??!1};return Object.fromEntries(e0.map(u=>[u.name,u.value(r)]))}const t0=[{id:"starting-territory",claimsStart:!0,meaning:"The first map asks which neighboring land is home. The run waits to grant that land's power."},{id:"joining-territory",claimsStart:!0,meaning:"A carried deck asks which land to join on the next map. The run waits to grant that land's power."}],i0=new Set(t0.map(l=>l.id)),v7=[{id:"new-run",meaning:"A new run, before the first map."},{id:"new-map",meaning:"The map after one has been conquered."}],k7=new Set(v7.map(l=>l.id));function ld(l,a){const s=l.find(r=>r.show==="offer"&&r.open===a&&r.offer&&i0.has(r.offer));return s!=null&&s.offer?t0.find(r=>r.id===s.offer):void 0}const w7=/^([>+?])\s+\[\[([^\]|]+)(?:\|([^\]]*))?\]\]\s*$/,l0=/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,b7=/^([a-z][a-z0-9_]*)\s*(==|!=|>=|<=|>|<)\s*(\d+)$/,hp=new Set(["dialog","coach","banner","page","offer"]),fp=new Set(["note","skill"]),x7=new Set(["seal"]),S7=new Set(["self"]),gp=new Set(["stronger","weaker","afraid","curious"]),E7=new Set(hd),C7=new Set(y7);function A7(l){return[...l.matchAll(new RegExp(l0.source,"g"))].map(a=>({to:a[1].trim(),label:(a[2]??a[1]).trim()}))}function T7(l){const a=[],s=new RegExp(l0.source,"g");let r=0;for(const u of l.matchAll(s)){const d=u.index??0;d>r&&a.push({kind:"text",text:l.slice(r,d)}),a.push({kind:"mention",to:u[1].trim(),label:(u[2]??u[1]).trim()}),r=d+u[0].length}return r<l.length&&a.push({kind:"text",text:l.slice(r)}),a}function j7(l,a){if(!l)return a;const s=new Set(a);s.add(l.id);for(const r of l.mentions)s.add(r.to);return[...s]}function Wl(l){const a=l.trim().match(b7);return a?{name:a[1],op:a[2],value:Number(a[3])}:null}function Fi(l){return l.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,(a,s,r)=>(r==null?void 0:r.trim())||s.trim())}function N7(l,a="note"){var bn,vn,ie,N,X,cn,rn,En,Sn,Z,tn,dn,fe,qt,le,de,Jn,zn;const s=[],r=l.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`);let u={},d=r;if(r.startsWith(`---
`)){const $n=r.indexOf(`
---
`,4);$n>=0?(u=q7(r.slice(4,$n)),d=r.slice($n+5)):s.push(`${a}: frontmatter is not closed`)}const h=[],g=[];for(const $n of d.split(`
`)){const We=$n.match(w7);if(!We){g.push($n);continue}const ne=We[1],nt=We[2].trim(),Zn=(We[3]??"").trim();if(!nt){s.push(`${a}: edge has an empty target`);continue}if(ne!=="?"&&Zn&&!Wl(Zn)&&s.push(`${a}: ${ne} [[${nt}]] has an unreadable test "${Zn}"`),ne!=="?"&&Zn){const et=Wl(Zn);et&&!td(et.name)&&s.push(`${a}: unknown counter "${et.name}"`)}h.push({glyph:ne,to:nt,label:Zn})}const f=((bn=u.id)==null?void 0:bn.trim())??"";if(!f)return s.push(`${a}: missing id`),{note:null,warnings:s};const p=(vn=u.show)==null?void 0:vn.trim();p&&!hp.has(p)&&s.push(`${f}: unknown show "${u.show}"`);const _=((ie=u.at)==null?void 0:ie.trim())||void 0;p==="coach"&&!_&&s.push(`${f}: coach is missing at`),_&&!C7.has(_)&&s.push(`${f}: unknown hook "${_}"`);const v=((N=u.kind)==null?void 0:N.trim())||"note";fp.has(v)||s.push(`${f}: unknown kind "${u.kind}"`);const k=((X=u.bind)==null?void 0:X.trim())||void 0;k&&!x7.has(k)&&s.push(`${f}: unknown bind "${k}"`);const w=((cn=u.when)==null?void 0:cn.trim())||void 0;w&&w!=="any"&&!E7.has(w)&&s.push(`${f}: unknown hand "${w}"`);const S=is(u.chips,f,"chips",s),E=is(u.mult,f,"mult",s),T=is(u.hands,f,"hands",s),x=is(u.discards,f,"discards",s),A=(rn=u.suit)==null?void 0:rn.trim(),R=(En=u.rank)==null?void 0:En.trim(),U=(Sn=u.domain)==null?void 0:Sn.trim(),H=(Z=u.words)==null?void 0:Z.split(",").map($n=>$n.trim().toLocaleLowerCase()).filter(Boolean),G=u.threshold==null?void 0:Number(u.threshold),J=u.reach==null?void 0:Number(u.reach);U&&U!=="affinity"&&U!=="words"&&s.push(`${f}: unknown domain "${U}"`),U==="words"&&!(H!=null&&H.length)&&s.push(`${f}: word domain needs words`),U==="affinity"&&(!u.god||!Number.isFinite(G)||G<-1||G>=1||!Number.isFinite(J)||J<=0||J>2)&&s.push(`${f}: affinity needs a god, threshold (-1 to 1) and positive reach`),U&&(A||R)&&s.push(`${f}: domain cannot be combined with suit or rank`),A&&!["Cups","Pentacles","Swords","Wands"].includes(A)&&s.push(`${f}: unknown suit "${A}"`),R&&!hs.includes(R)&&s.push(`${f}: unknown rank "${R}"`),A&&R&&s.push(`${f}: choose a suit or a rank`),(A||R)&&!S&&!E&&s.push(`${f}: card power needs chips or mult`),(T||x)&&(S||E||A||R)&&s.push(`${f}: resource powers cannot also score`);const an=is(u.card,f,"card",s);an!=null&&(S!=null||E!=null||T!=null||x!=null||A||R||U)&&s.push(`${f}: card power cannot also score another way`);const nn=(tn=u.dev)==null?void 0:tn.trim(),fn=nn==="true"?!0:nn==="false"?!1:void 0;nn&&fn==null&&s.push(`${f}: dev must be true or false`);const gn=((dn=u.god)==null?void 0:dn.trim())||void 0;gn&&v!=="skill"&&s.push(`${f}: god is only meaningful on a skill`),fn&&v!=="skill"&&s.push(`${f}: dev is only meaningful on a skill`),v==="skill"&&S==null&&E==null&&T==null&&x==null&&an==null&&s.push(`${f}: a skill needs chips or mult, hands or discards`);const un=((fe=u.offer)==null?void 0:fe.trim())||void 0,F=((qt=u.open)==null?void 0:qt.trim())||void 0;un&&!i0.has(un)&&s.push(`${f}: unknown offer "${un}"`),F&&!k7.has(F)&&s.push(`${f}: unknown open "${F}"`),p==="offer"&&(!un||!F)&&s.push(`${f}: an offer needs offer and open`),(un||F)&&p!=="offer"&&s.push(`${f}: offer and open belong on show: offer`);const ln=((le=u.voice)==null?void 0:le.trim())||void 0;ln&&!S7.has(ln)&&s.push(`${f}: unknown voice "${ln}"`);const P=((de=u.on)==null?void 0:de.trim())||void 0;P&&!gp.has(P)&&s.push(`${f}: unknown on "${P}"`);const I=((Jn=u.if)==null?void 0:Jn.trim())||void 0;if(I&&!Wl(I))s.push(`${f}: unreadable if "${I}"`);else if(I){const $n=Wl(I);$n&&!td($n.name)&&s.push(`${f}: unknown counter "${$n.name}"`)}const $=ln==="self"?"self":void 0,Y=P&&gp.has(P)?P:void 0,z=I&&Wl(I)?I:void 0;$&&v==="skill"&&s.push(`${f}: voice is not a skill`),(Y||z)&&!$&&s.push(`${f}: on and if belong on voice: self`),$&&!Y&&!z&&s.push(`${f}: a self phrase needs on or if`),$&&h.length&&s.push(`${f}: a self phrase does not use edges`);const sn=g.join(`
`).trim();return{note:{id:f,title:((zn=u.title)==null?void 0:zn.trim())||f,show:p&&hp.has(p)?p:void 0,at:_,kind:fp.has(v)?v:"note",bind:k,when:w,chips:S,mult:E,hands:T,discards:x,suit:A,rank:R,domain:U,words:H,threshold:G,reach:J,god:gn,card:an,dev:fn,offer:un,open:F,voice:$,on:Y,test:z,body:sn,edges:h,mentions:A7(sn)},warnings:s}}function M7(l){const a=[],s=[],r=new Set;for(const d of l){const h=N7(d.raw,d.source);a.push(...h.warnings),h.note&&(r.has(h.note.id)&&a.push(`${h.note.id}: duplicate id`),r.add(h.note.id),s.push(h.note))}const u=new Set(s.map(d=>d.id));for(const d of s){for(const h of d.edges)u.has(h.to)||a.push(`${d.id}: [[${h.to}]] does not exist`);for(const h of d.mentions)u.has(h.to)||a.push(`${d.id}: [[${h.to}]] does not exist`)}return{notes:s,warnings:a}}function is(l,a,s,r){if(l){if(!/^\d+$/.test(l)){r.push(`${a}: ${s} must be a whole number`);return}return Number(l)}}function q7(l){const a={};for(const s of l.split(`
`)){const r=s.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);r&&(a[r[1]]=r[2].trim())}return a}const Q7=Object.assign({"../../content/events/after-home.md":dv,"../../content/events/after-join.md":hv,"../../content/events/choose-home.md":fv,"../../content/events/choose-join.md":gv,"../../content/events/dealt.md":mv,"../../content/events/empty.md":pv,"../../content/events/enter-table.md":yv,"../../content/events/lesson.fifty.md":_v,"../../content/events/lesson.fight-score.md":vv,"../../content/events/lesson.frontier.md":kv,"../../content/events/lesson.new-card.md":wv,"../../content/events/lesson.question-mark.md":bv,"../../content/events/lesson.this-run.md":xv,"../../content/events/library-tip.md":Sv,"../../content/events/on-map.md":Ev,"../../content/events/playing.md":Cv,"../../content/events/returning.md":Av,"../../content/events/revealed.md":Tv,"../../content/events/self.afraid.md":jv,"../../content/events/self.curious.md":Nv,"../../content/events/self.stronger.md":Mv,"../../content/events/self.untried.md":qv,"../../content/events/self.weaker.md":Qv,"../../content/events/skill.abeona-and-adeona-going-and-returning.md":Kv,"../../content/events/skill.abeona-departure.md":Ov,"../../content/events/skill.abundantia-plenty.md":zv,"../../content/events/skill.achaea-venture.md":Rv,"../../content/events/skill.adceneicus-storm.md":Dv,"../../content/events/skill.adeona-return.md":Yv,"../../content/events/skill.adferenda-gift.md":Iv,"../../content/events/skill.adolenda-venture.md":Hv,"../../content/events/skill.aescolanus-copper.md":Uv,"../../content/events/skill.aesculapius-healing.md":Bv,"../../content/events/skill.aescvl-nvs-copper.md":Lv,"../../content/events/skill.afferenda-venture.md":Vv,"../../content/events/skill.africa-offering.md":Gv,"../../content/events/skill.africus-southwest-wind.md":Xv,"../../content/events/skill.agenoria-awakening.md":$v,"../../content/events/skill.agonius-contest.md":Zv,"../../content/events/skill.aguaecus-journey.md":Jv,"../../content/events/skill.agylle-lake.md":Fv,"../../content/events/skill.albarinus-guard.md":Pv,"../../content/events/skill.albensis-pater-steadfast.md":Wv,"../../content/events/skill.alemona-nourishment.md":nk,"../../content/events/skill.alexandria-offering.md":ek,"../../content/events/skill.almo-river.md":tk,"../../content/events/skill.altor-promise.md":ik,"../../content/events/skill.angerona-quiet.md":lk,"../../content/events/skill.angitia-serpent.md":ak,"../../content/events/skill.anio-attraction.md":sk,"../../content/events/skill.anna-perenna-turning-year.md":ok,"../../content/events/skill.annona-grain.md":ck,"../../content/events/skill.apollo-measure.md":rk,"../../content/events/skill.appiades-journey.md":uk,"../../content/events/skill.appias-venture.md":dk,"../../content/events/skill.aquilon-north-wind.md":hk,"../../content/events/skill.arabia-venture.md":fk,"../../content/events/skill.arcecius-crossing.md":gk,"../../content/events/skill.argentinus-silver.md":mk,"../../content/events/skill.arimanius-darkness.md":pk,"../../content/events/skill.armenia-venture.md":yk,"../../content/events/skill.arno-attraction.md":_k,"../../content/events/skill.artemis-of-perge-bond.md":vk,"../../content/events/skill.asia-venture.md":kk,"../../content/events/skill.assaecus-river.md":wk,"../../content/events/skill.aurora-first-light.md":bk,"../../content/events/skill.auster-south-wind.md":xk,"../../content/events/skill.avaritia-hoard.md":Sk,"../../content/events/skill.averruncus-protection.md":Ek,"../../content/events/skill.bacchus-feast.md":Ck,"../../content/events/skill.bassoledulitanus-radiance.md":Ak,"../../content/events/skill.beladon-courage.md":Tk,"../../content/events/skill.bellum-conflict.md":jk,"../../content/events/skill.bithynia-promise.md":Nk,"../../content/events/skill.bonus-eventus-good-fortune.md":Mk,"../../content/events/skill.britovius-battle.md":qk,"../../content/events/skill.bubona-herd.md":Qk,"../../content/events/skill.budenicus-promise.md":Kk,"../../content/events/skill.caca-hearth.md":Ok,"../../content/events/skill.caelestis-horizon.md":zk,"../../content/events/skill.caligo-mist.md":Rk,"../../content/events/skill.camulus-vigor.md":Dk,"../../content/events/skill.canappharis-domain.md":Yk,"../../content/events/skill.canens-song.md":Ik,"../../content/events/skill.cappadocia-offering.md":Hk,"../../content/events/skill.cardea-threshold.md":Uk,"../../content/events/skill.caritas-attraction.md":Bk,"../../content/events/skill.catius-pater-journey.md":Lk,"../../content/events/skill.cela-gathering.md":Vk,"../../content/events/skill.cimiacinus-passage.md":Gk,"../../content/events/skill.cimistenus-sky.md":Xk,"../../content/events/skill.cinxia-knot.md":$k,"../../content/events/skill.clementia-mercy.md":Zk,"../../content/events/skill.cloacina-cleansing.md":Jk,"../../content/events/skill.coinquenda-promise.md":Fk,"../../content/events/skill.colapis-accord.md":Pk,"../../content/events/skill.coluber-current.md":Wk,"../../content/events/skill.commolenda-accord.md":nw,"../../content/events/skill.concordia-accord.md":ew,"../../content/events/skill.conditor-granary.md":tw,"../../content/events/skill.consevius-seed.md":iw,"../../content/events/skill.constantia-current.md":lw,"../../content/events/skill.consus-stored-grain.md":aw,"../../content/events/skill.convector-carry.md":sw,"../../content/events/skill.copia-abundance.md":ow,"../../content/events/skill.crepitus-breeze.md":cw,"../../content/events/skill.cuba-journey.md":rw,"../../content/events/skill.cuba-rest.md":uw,"../../content/events/skill.cunina-cradle.md":dw,"../../content/events/skill.cura-care.md":hw,"../../content/events/skill.danuvius-danube.md":fw,"../../content/events/skill.dea-africa-abundance.md":gw,"../../content/events/skill.decima-measure.md":mw,"../../content/events/skill.deferunda-current.md":pw,"../../content/events/skill.deiopea-stream.md":yw,"../../content/events/skill.deverra-sweep.md":_w,"../../content/events/skill.devmode.md":vw,"../../content/events/skill.diana-hunt.md":kw,"../../content/events/skill.dies-daylight.md":ww,"../../content/events/skill.disciplina-discipline.md":bw,"../../content/events/skill.discordia-discord.md":xw,"../../content/events/skill.dius-fidius-oath.md":Sw,"../../content/events/skill.domain-q10354013.md":Ew,"../../content/events/skill.domain-q10392131.md":Cw,"../../content/events/skill.domain-q104008170.md":Aw,"../../content/events/skill.domain-q1042300.md":Tw,"../../content/events/skill.domain-q1043871.md":jw,"../../content/events/skill.domain-q10578339.md":Nw,"../../content/events/skill.domain-q1058110.md":Mw,"../../content/events/skill.domain-q1074582.md":qw,"../../content/events/skill.domain-q10832412.md":Qw,"../../content/events/skill.domain-q1085316.md":Kw,"../../content/events/skill.domain-q1092591.md":Ow,"../../content/events/skill.domain-q1102307.md":zw,"../../content/events/skill.domain-q11045881.md":Rw,"../../content/events/skill.domain-q1124258.md":Dw,"../../content/events/skill.domain-q1129855.md":Yw,"../../content/events/skill.domain-q1133048.md":Iw,"../../content/events/skill.domain-q1133514.md":Hw,"../../content/events/skill.domain-q1143220.md":Uw,"../../content/events/skill.domain-q1144144.md":Bw,"../../content/events/skill.domain-q1144150.md":Lw,"../../content/events/skill.domain-q1145491.md":Vw,"../../content/events/skill.domain-q11821103.md":Gw,"../../content/events/skill.domain-q1228338.md":Xw,"../../content/events/skill.domain-q1231621.md":$w,"../../content/events/skill.domain-q1233746.md":Zw,"../../content/events/skill.domain-q1250207.md":Jw,"../../content/events/skill.domain-q126616115.md":Fw,"../../content/events/skill.domain-q12905016.md":Pw,"../../content/events/skill.domain-q12912060.md":Ww,"../../content/events/skill.domain-q1298222.md":nb,"../../content/events/skill.domain-q130262262.md":eb,"../../content/events/skill.domain-q130262271.md":tb,"../../content/events/skill.domain-q130262306.md":ib,"../../content/events/skill.domain-q130262354.md":lb,"../../content/events/skill.domain-q130262362.md":ab,"../../content/events/skill.domain-q130262392.md":sb,"../../content/events/skill.domain-q130262433.md":ob,"../../content/events/skill.domain-q130265289.md":cb,"../../content/events/skill.domain-q130265292.md":rb,"../../content/events/skill.domain-q130265293.md":ub,"../../content/events/skill.domain-q130265322.md":db,"../../content/events/skill.domain-q130279095.md":hb,"../../content/events/skill.domain-q130279100.md":fb,"../../content/events/skill.domain-q130279102.md":gb,"../../content/events/skill.domain-q130279109.md":mb,"../../content/events/skill.domain-q130343509.md":pb,"../../content/events/skill.domain-q130343512.md":yb,"../../content/events/skill.domain-q130343524.md":_b,"../../content/events/skill.domain-q130343526.md":vb,"../../content/events/skill.domain-q130343538.md":kb,"../../content/events/skill.domain-q130343556.md":wb,"../../content/events/skill.domain-q130343562.md":bb,"../../content/events/skill.domain-q130343575.md":xb,"../../content/events/skill.domain-q130343579.md":Sb,"../../content/events/skill.domain-q130343586.md":Eb,"../../content/events/skill.domain-q130343589.md":Cb,"../../content/events/skill.domain-q130343616.md":Ab,"../../content/events/skill.domain-q130343619.md":Tb,"../../content/events/skill.domain-q130343622.md":jb,"../../content/events/skill.domain-q130343625.md":Nb,"../../content/events/skill.domain-q130343628.md":Mb,"../../content/events/skill.domain-q130343634.md":qb,"../../content/events/skill.domain-q130343663.md":Qb,"../../content/events/skill.domain-q130520309.md":Kb,"../../content/events/skill.domain-q130642393.md":Ob,"../../content/events/skill.domain-q130642508.md":zb,"../../content/events/skill.domain-q130647505.md":Rb,"../../content/events/skill.domain-q130647512.md":Db,"../../content/events/skill.domain-q131798902.md":Yb,"../../content/events/skill.domain-q131798999.md":Ib,"../../content/events/skill.domain-q131799119.md":Hb,"../../content/events/skill.domain-q1326558.md":Ub,"../../content/events/skill.domain-q1335234.md":Bb,"../../content/events/skill.domain-q137739404.md":Lb,"../../content/events/skill.domain-q137768161.md":Vb,"../../content/events/skill.domain-q1410466.md":Gb,"../../content/events/skill.domain-q1425920.md":Xb,"../../content/events/skill.domain-q1467781.md":$b,"../../content/events/skill.domain-q1470895.md":Zb,"../../content/events/skill.domain-q1471691.md":Jb,"../../content/events/skill.domain-q1473144.md":Fb,"../../content/events/skill.domain-q147914.md":Pb,"../../content/events/skill.domain-q149042.md":Wb,"../../content/events/skill.domain-q149197.md":n2,"../../content/events/skill.domain-q1520171.md":e2,"../../content/events/skill.domain-q1560623.md":t2,"../../content/events/skill.domain-q1621750.md":i2,"../../content/events/skill.domain-q1641431.md":l2,"../../content/events/skill.domain-q179818.md":a2,"../../content/events/skill.domain-q182002.md":s2,"../../content/events/skill.domain-q185498.md":o2,"../../content/events/skill.domain-q1876916.md":c2,"../../content/events/skill.domain-q188236.md":r2,"../../content/events/skill.domain-q1970179.md":u2,"../../content/events/skill.domain-q1986441.md":d2,"../../content/events/skill.domain-q2027010.md":h2,"../../content/events/skill.domain-q2038067.md":f2,"../../content/events/skill.domain-q2039163.md":g2,"../../content/events/skill.domain-q2052073.md":m2,"../../content/events/skill.domain-q206561.md":p2,"../../content/events/skill.domain-q207234.md":y2,"../../content/events/skill.domain-q2085599.md":_2,"../../content/events/skill.domain-q2087421.md":v2,"../../content/events/skill.domain-q2088018.md":k2,"../../content/events/skill.domain-q2098982.md":w2,"../../content/events/skill.domain-q21559031.md":b2,"../../content/events/skill.domain-q219412.md":x2,"../../content/events/skill.domain-q2248816.md":S2,"../../content/events/skill.domain-q2266787.md":E2,"../../content/events/skill.domain-q226831.md":C2,"../../content/events/skill.domain-q232870.md":A2,"../../content/events/skill.domain-q2349305.md":T2,"../../content/events/skill.domain-q2376964.md":j2,"../../content/events/skill.domain-q2402507.md":N2,"../../content/events/skill.domain-q2441598.md":M2,"../../content/events/skill.domain-q2476532.md":q2,"../../content/events/skill.domain-q2480320.md":Q2,"../../content/events/skill.domain-q2619569.md":K2,"../../content/events/skill.domain-q2620261.md":O2,"../../content/events/skill.domain-q26236.md":z2,"../../content/events/skill.domain-q2703831.md":R2,"../../content/events/skill.domain-q2703840.md":D2,"../../content/events/skill.domain-q270867.md":Y2,"../../content/events/skill.domain-q279639.md":I2,"../../content/events/skill.domain-q279852.md":H2,"../../content/events/skill.domain-q282628.md":U2,"../../content/events/skill.domain-q2888346.md":B2,"../../content/events/skill.domain-q290298.md":L2,"../../content/events/skill.domain-q2972375.md":V2,"../../content/events/skill.domain-q2989077.md":G2,"../../content/events/skill.domain-q3027237.md":X2,"../../content/events/skill.domain-q3068714.md":$2,"../../content/events/skill.domain-q3069134.md":Z2,"../../content/events/skill.domain-q3071093.md":J2,"../../content/events/skill.domain-q3088222.md":F2,"../../content/events/skill.domain-q308902.md":P2,"../../content/events/skill.domain-q3140425.md":W2,"../../content/events/skill.domain-q320333.md":n3,"../../content/events/skill.domain-q32102.md":e3,"../../content/events/skill.domain-q3312596.md":t3,"../../content/events/skill.domain-q3351973.md":i3,"../../content/events/skill.domain-q3359069.md":l3,"../../content/events/skill.domain-q3360794.md":a3,"../../content/events/skill.domain-q3370206.md":s3,"../../content/events/skill.domain-q338298.md":o3,"../../content/events/skill.domain-q3394793.md":c3,"../../content/events/skill.domain-q3408256.md":r3,"../../content/events/skill.domain-q3408263.md":u3,"../../content/events/skill.domain-q3530057.md":d3,"../../content/events/skill.domain-q3545810.md":h3,"../../content/events/skill.domain-q3561382.md":f3,"../../content/events/skill.domain-q3571020.md":g3,"../../content/events/skill.domain-q3574487.md":m3,"../../content/events/skill.domain-q3615151.md":p3,"../../content/events/skill.domain-q374311.md":y3,"../../content/events/skill.domain-q3768510.md":_3,"../../content/events/skill.domain-q381061.md":v3,"../../content/events/skill.domain-q381914.md":k3,"../../content/events/skill.domain-q4021849.md":w3,"../../content/events/skill.domain-q411066.md":b3,"../../content/events/skill.domain-q4161258.md":x3,"../../content/events/skill.domain-q4171546.md":S3,"../../content/events/skill.domain-q4179231.md":E3,"../../content/events/skill.domain-q4202964.md":C3,"../../content/events/skill.domain-q4205840.md":A3,"../../content/events/skill.domain-q4257767.md":T3,"../../content/events/skill.domain-q4303414.md":j3,"../../content/events/skill.domain-q4338010.md":N3,"../../content/events/skill.domain-q4350777.md":M3,"../../content/events/skill.domain-q4421636.md":q3,"../../content/events/skill.domain-q453534.md":Q3,"../../content/events/skill.domain-q4654.md":K3,"../../content/events/skill.domain-q5011.md":O3,"../../content/events/skill.domain-q5068600.md":z3,"../../content/events/skill.domain-q5117835.md":R3,"../../content/events/skill.domain-q516456.md":D3,"../../content/events/skill.domain-q524654.md":Y3,"../../content/events/skill.domain-q558970.md":I3,"../../content/events/skill.domain-q570611.md":H3,"../../content/events/skill.domain-q587825.md":U3,"../../content/events/skill.domain-q591056.md":B3,"../../content/events/skill.domain-q591914.md":L3,"../../content/events/skill.domain-q6471253.md":V3,"../../content/events/skill.domain-q650572.md":G3,"../../content/events/skill.domain-q651660.md":X3,"../../content/events/skill.domain-q654604.md":$3,"../../content/events/skill.domain-q662067.md":Z3,"../../content/events/skill.domain-q668286.md":J3,"../../content/events/skill.domain-q684225.md":F3,"../../content/events/skill.domain-q689826.md":P3,"../../content/events/skill.domain-q751867.md":W3,"../../content/events/skill.domain-q752213.md":n4,"../../content/events/skill.domain-q756797.md":e4,"../../content/events/skill.domain-q7585766.md":t4,"../../content/events/skill.domain-q767293.md":i4,"../../content/events/skill.domain-q7810744.md":l4,"../../content/events/skill.domain-q7814646.md":a4,"../../content/events/skill.domain-q782481.md":s4,"../../content/events/skill.domain-q817358.md":o4,"../../content/events/skill.domain-q824249.md":c4,"../../content/events/skill.domain-q850249.md":r4,"../../content/events/skill.domain-q857144.md":u4,"../../content/events/skill.domain-q859392.md":d4,"../../content/events/skill.domain-q872943.md":h4,"../../content/events/skill.domain-q890208.md":f4,"../../content/events/skill.domain-q900649.md":g4,"../../content/events/skill.domain-q9055257.md":m4,"../../content/events/skill.domain-q9358865.md":p4,"../../content/events/skill.domain-q936324.md":y4,"../../content/events/skill.domain-q936993.md":_4,"../../content/events/skill.domain-q942519.md":v4,"../../content/events/skill.domain-q956931.md":k4,"../../content/events/skill.domain-q966042.md":w4,"../../content/events/skill.domiduca-homeward.md":b4,"../../content/events/skill.domiducus-promise.md":x4,"../../content/events/skill.domitius-journey.md":S4,"../../content/events/skill.dubnocaratiacus-road.md":E4,"../../content/events/skill.dysprus-harmony.md":C4,"../../content/events/skill.edusa-nourishment.md":A4,"../../content/events/skill.egeria-counsel.md":T4,"../../content/events/skill.egestas-want.md":j4,"../../content/events/skill.egnatia-promise.md":N4,"../../content/events/skill.empanda-bread.md":M4,"../../content/events/skill.exalbiovix-onward.md":q4,"../../content/events/skill.excingiorigiatus-exchange.md":Q4,"../../content/events/skill.fabius-venture.md":K4,"../../content/events/skill.fabulinus-first-words.md":O4,"../../content/events/skill.falacer-flame.md":z4,"../../content/events/skill.fama-rumor.md":R4,"../../content/events/skill.fames-hunger.md":D4,"../../content/events/skill.farinus-flour.md":Y4,"../../content/events/skill.fatum-fate.md":I4,"../../content/events/skill.faunus-wildwood.md":H4,"../../content/events/skill.faustitas-livestock.md":U4,"../../content/events/skill.favonius-west-wind.md":B4,"../../content/events/skill.favor-goodwill.md":L4,"../../content/events/skill.febris-fever.md":V4,"../../content/events/skill.februus-purification.md":G4,"../../content/events/skill.fecunditas-fertility.md":X4,"../../content/events/skill.felicitas-good-fortune.md":$4,"../../content/events/skill.ferentina-spring.md":Z4,"../../content/events/skill.feronia-wilds.md":J4,"../../content/events/skill.fessona-offering.md":F4,"../../content/events/skill.fides-trust.md":P4,"../../content/events/skill.flora-blossom.md":W4,"../../content/events/skill.fluonia-flow.md":n6,"../../content/events/skill.fontus-fountain.md":e6,"../../content/events/skill.forculus-door.md":t6,"../../content/events/skill.formido-fear.md":i6,"../../content/events/skill.fornax-oven.md":l6,"../../content/events/skill.fortuna-huiusce-diei-fortune-today.md":a6,"../../content/events/skill.fortuna-redux-safe-return.md":s6,"../../content/events/skill.fraus-deception.md":o6,"../../content/events/skill.fructesea-fruit.md":c6,"../../content/events/skill.frugifer-domain.md":r6,"../../content/events/skill.fulgora-lightning.md":u6,"../../content/events/skill.furor-fury.md":d6,"../../content/events/skill.furrina-spring.md":h6,"../../content/events/skill.gaia-ground.md":f6,"../../content/events/skill.gallia-land.md":g6,"../../content/events/skill.garamantis-offering.md":m6,"../../content/events/skill.giarinus-spear.md":p6,"../../content/events/skill.helernus-offering.md":y6,"../../content/events/skill.hercules-mighty-labor.md":_6,"../../content/events/skill.high-card.md":v6,"../../content/events/skill.hilaritas-joy.md":k6,"../../content/events/skill.horta-offering.md":w6,"../../content/events/skill.hostilina-good-grain.md":b6,"../../content/events/skill.hymen-attraction.md":x6,"../../content/events/skill.iana-moonlit-arch.md":S6,"../../content/events/skill.imporcitor-third-furrow.md":E6,"../../content/events/skill.inporcitor-venture.md":C6,"../../content/events/skill.insania-gathering.md":A6,"../../content/events/skill.insidia-offering.md":T6,"../../content/events/skill.insitor-sowing.md":j6,"../../content/events/skill.intercidona-axe.md":N6,"../../content/events/skill.interduca-bond.md":M6,"../../content/events/skill.iocus-attraction.md":q6,"../../content/events/skill.isityche-accord.md":Q6,"../../content/events/skill.iuga-gathering.md":K6,"../../content/events/skill.iugatinus-offering.md":O6,"../../content/events/skill.iuventas-youth.md":z6,"../../content/events/skill.janus-two-doors.md":R6,"../../content/events/skill.juno-pair.md":D6,"../../content/events/skill.jupiter-thunder.md":Y6,"../../content/events/skill.juturna-spring-water.md":I6,"../../content/events/skill.kendrisos-song.md":H6,"../../content/events/skill.lacavus-standard.md":U6,"../../content/events/skill.lacturnus-milk.md":B6,"../../content/events/skill.laetitia-delight.md":L6,"../../content/events/skill.larunda-current.md":V6,"../../content/events/skill.lateranus-hearth.md":G6,"../../content/events/skill.laverna-cunning.md":X6,"../../content/events/skill.lelhunnus-resolve.md":$6,"../../content/events/skill.leucimalicus-vanguard.md":Z6,"../../content/events/skill.leusdrinus-advance.md":J6,"../../content/events/skill.levana-lift.md":F6,"../../content/events/skill.libera-freedom.md":P6,"../../content/events/skill.liberalitas-generosity.md":W6,"../../content/events/skill.libitina-passage.md":n5,"../../content/events/skill.lima-threshold.md":e5,"../../content/events/skill.limen-doorstep.md":t5,"../../content/events/skill.limentinus-offering.md":i5,"../../content/events/skill.limi-gathering.md":l5,"../../content/events/skill.lua-spoils.md":a5,"../../content/events/skill.lucifer-morning-star.md":s5,"../../content/events/skill.lucina-first-breath.md":o5,"../../content/events/skill.luna-moonlight.md":c5,"../../content/events/skill.lupercus-pack.md":r5,"../../content/events/skill.lympha-fresh-water.md":u5,"../../content/events/skill.magianus-ardor.md":d5,"../../content/events/skill.mala-fortuna-twist-of-fortune.md":h5,"../../content/events/skill.maleciabrudes-height.md":f5,"../../content/events/skill.mamers-strength.md":g5,"../../content/events/skill.mana-genita-beginning.md":m5,"../../content/events/skill.manth-ember.md":p5,"../../content/events/skill.manturna-current.md":y5,"../../content/events/skill.marica-waters.md":_5,"../../content/events/skill.marmogius-shield.md":v5,"../../content/events/skill.mars-charge.md":k5,"../../content/events/skill.mater-matuta-dawn.md":w5,"../../content/events/skill.mefitis-earth-breath.md":b5,"../../content/events/skill.mellona-honey.md":x5,"../../content/events/skill.mercury-path.md":S5,"../../content/events/skill.messia-domain.md":E5,"../../content/events/skill.messor-reaping.md":C5,"../../content/events/skill.minerva-wisdom.md":A5,"../../content/events/skill.misericordia-gathering.md":T5,"../../content/events/skill.molae-millstones.md":j5,"../../content/events/skill.moneta-coin.md":N5,"../../content/events/skill.montinus-gathering.md":M5,"../../content/events/skill.mors-silence.md":q5,"../../content/events/skill.morta-thread.md":Q5,"../../content/events/skill.murcia-quiet-place.md":K5,"../../content/events/skill.mutunus-tutunus-joining.md":O5,"../../content/events/skill.nascio-birth.md":z5,"../../content/events/skill.natura-attraction.md":R5,"../../content/events/skill.necessitas-necessity.md":D5,"../../content/events/skill.nemestrinus-domain.md":Y5,"../../content/events/skill.nenia-dea-lament.md":I5,"../../content/events/skill.nennicus-summit.md":H5,"../../content/events/skill.neptune-tide.md":U5,"../../content/events/skill.nerio-valor.md":B5,"../../content/events/skill.noduterensis-venture.md":L5,"../../content/events/skill.nodutus-knot.md":V5,"../../content/events/skill.nona-ninth-month.md":G5,"../../content/events/skill.nox-night.md":X5,"../../content/events/skill.numeria-promise.md":$5,"../../content/events/skill.nundina-bond.md":Z5,"../../content/events/skill.obarator-last-furrow.md":J5,"../../content/events/skill.occator-harrow.md":F5,"../../content/events/skill.odoria-venture.md":P5,"../../content/events/skill.orbona-new-beginning.md":W5,"../../content/events/skill.orcus-underworld.md":n8,"../../content/events/skill.oriens-rising.md":e8,"../../content/events/skill.ossipago-journey.md":t8,"../../content/events/skill.pair.md":i8,"../../content/events/skill.palatua-hill.md":l8,"../../content/events/skill.pallor-offering.md":a8,"../../content/events/skill.pantica-promise.md":s8,"../../content/events/skill.partula-journey.md":o8,"../../content/events/skill.patella-gathering.md":c8,"../../content/events/skill.paventia-courage.md":r8,"../../content/events/skill.pavor-dread.md":u8,"../../content/events/skill.pax-peace.md":d8,"../../content/events/skill.pecunia-wealth.md":h8,"../../content/events/skill.pellonia-mythology-repulse.md":f8,"../../content/events/skill.peragenor-gathering.md":g8,"../../content/events/skill.perfica-gathering.md":m8,"../../content/events/skill.pertunda-opening.md":p8,"../../content/events/skill.peta-venture.md":y8,"../../content/events/skill.picumnus-field.md":_8,"../../content/events/skill.picus-woodpecker.md":v8,"../../content/events/skill.pietas-devotion.md":k8,"../../content/events/skill.pilumnus-grain.md":w8,"../../content/events/skill.pirunenus-light.md":b8,"../../content/events/skill.pluto-hidden-wealth.md":x8,"../../content/events/skill.poena-reckoning.md":S8,"../../content/events/skill.pollentia-venture.md":E8,"../../content/events/skill.pomona-orchard.md":C8,"../../content/events/skill.potina-drink.md":A8,"../../content/events/skill.potua-promise.md":T8,"../../content/events/skill.praestana-gathering.md":j8,"../../content/events/skill.praestitia-accord.md":N8,"../../content/events/skill.prema-mater-gathering.md":M8,"../../content/events/skill.promitor-distribution.md":q8,"../../content/events/skill.proserpina-return.md":Q8,"../../content/events/skill.providentia-foresight.md":K8,"../../content/events/skill.pudicitia-reserve.md":O8,"../../content/events/skill.pudor-bond.md":z8,"../../content/events/skill.puta-pruning.md":R8,"../../content/events/skill.q110401864-venture.md":D8,"../../content/events/skill.q110458315-accord.md":Y8,"../../content/events/skill.q11698746-unknown-name.md":I8,"../../content/events/skill.q117860170-current.md":H8,"../../content/events/skill.q11914074-unknown-name.md":U8,"../../content/events/skill.q11926111-unknown-name.md":B8,"../../content/events/skill.q11950437-unknown-name.md":L8,"../../content/events/skill.q18029370-unknown-name.md":V8,"../../content/events/skill.q1885106-unknown-name.md":G8,"../../content/events/skill.q21095840-unknown-name.md":X8,"../../content/events/skill.q21705165-unknown-name.md":$8,"../../content/events/skill.q2485201-unknown-name.md":Z8,"../../content/events/skill.q2982738-unknown-name.md":J8,"../../content/events/skill.q3091027-envy.md":F8,"../../content/events/skill.q3188064-unknown-name.md":P8,"../../content/events/skill.q3276498-unknown-name.md":W8,"../../content/events/skill.q3453384-unknown-name.md":nx,"../../content/events/skill.q3502725-unknown-name.md":ex,"../../content/events/skill.q55423668-gathering.md":tx,"../../content/events/skill.q55528226-bond.md":ix,"../../content/events/skill.q57040959-journey.md":lx,"../../content/events/skill.q57664736-promise.md":ax,"../../content/events/skill.q60182698-offering.md":sx,"../../content/events/skill.q60182729-promise.md":ox,"../../content/events/skill.q61456534-venture.md":cx,"../../content/events/skill.q61601897-offering.md":rx,"../../content/events/skill.q61640802-accord.md":ux,"../../content/events/skill.q858652-unknown-name.md":dx,"../../content/events/skill.q86665122-offering.md":hx,"../../content/events/skill.querquetulanae-oak-grove.md":fx,"../../content/events/skill.rederator-return.md":gx,"../../content/events/skill.rediculus-journey-home.md":mx,"../../content/events/skill.rhine-river-path.md":px,"../../content/events/skill.rigonemetis-domain.md":yx,"../../content/events/skill.robigus-harvest.md":_x,"../../content/events/skill.roma-city.md":vx,"../../content/events/skill.rumina-nourishment.md":kx,"../../content/events/skill.rumon-venture.md":wx,"../../content/events/skill.runcina-domain.md":bx,"../../content/events/skill.salacia-saltwater.md":xx,"../../content/events/skill.sancus-pledge.md":Sx,"../../content/events/skill.sarritor-venture.md":Ex,"../../content/events/skill.sator-journey.md":Cx,"../../content/events/skill.saturn-golden-age.md":Ax,"../../content/events/skill.securitas-safety.md":Tx,"../../content/events/skill.segesta-current.md":jx,"../../content/events/skill.segetia-crops.md":Nx,"../../content/events/skill.seia-domain.md":Mx,"../../content/events/skill.semonia-sowing.md":qx,"../../content/events/skill.sentia-promise.md":Qx,"../../content/events/skill.sentinus-feeling.md":Kx,"../../content/events/skill.septimontius-accord.md":Ox,"../../content/events/skill.sequana-river-seine.md":zx,"../../content/events/skill.serra-promise.md":Rx,"../../content/events/skill.serritor-digging.md":Dx,"../../content/events/skill.silvanus-woodland.md":Yx,"../../content/events/skill.singilis-flank.md":Ix,"../../content/events/skill.smertrios-resolve.md":Hx,"../../content/events/skill.smertulitanus-rally.md":Ux,"../../content/events/skill.sol-invictus-unconquered-sun.md":Bx,"../../content/events/skill.sol-sunlight.md":Lx,"../../content/events/skill.solitumarus-way.md":Vx,"../../content/events/skill.somnus-sleep.md":Gx,"../../content/events/skill.sors-lots.md":Xx,"../../content/events/skill.spes-hope.md":$x,"../../content/events/skill.spiniensis-thorns.md":Zx,"../../content/events/skill.stata-mater-stillness.md":Jx,"../../content/events/skill.sterquilinus-rich-soil.md":Fx,"../../content/events/skill.stimula-first-steps.md":Px,"../../content/events/skill.strenua-strength.md":Wx,"../../content/events/skill.studied-hand.md":nS,"../../content/events/skill.suadela-persuasion.md":eS,"../../content/events/skill.subigus-pater-accord.md":tS,"../../content/events/skill.subruncinator-weeding.md":iS,"../../content/events/skill.summanus-night-storm.md":lS,"../../content/events/skill.tages-revelation.md":aS,"../../content/events/skill.talasius-bond.md":sS,"../../content/events/skill.tamitenus-heavens.md":oS,"../../content/events/skill.tarbucelis-stand.md":cS,"../../content/events/skill.tellumo-earth.md":rS,"../../content/events/skill.tempestas-weather.md":uS,"../../content/events/skill.terminus-boundary.md":dS,"../../content/events/skill.tibertus-riverbank.md":hS,"../../content/events/skill.tiburtine-sibyl-prophecy.md":fS,"../../content/events/skill.tillenus-march.md":gS,"../../content/events/skill.tranquillitas-tranquility.md":mS,"../../content/events/skill.tritullus-strike.md":pS,"../../content/events/skill.trivia-crossroads.md":yS,"../../content/events/skill.tutela-guardianship.md":_S,"../../content/events/skill.tutelina-shelter.md":vS,"../../content/events/skill.unxia-union.md":kS,"../../content/events/skill.uxlemitanus-domain.md":wS,"../../content/events/skill.valetudo-accord.md":bS,"../../content/events/skill.vallonia-valley.md":xS,"../../content/events/skill.venus-affection.md":SS,"../../content/events/skill.venus-felix-fortunate-meeting.md":ES,"../../content/events/skill.verminus-cure.md":CS,"../../content/events/skill.vervactor-first-furrow.md":AS,"../../content/events/skill.vesta-hearth.md":TS,"../../content/events/skill.vibilia-wayfinding.md":jS,"../../content/events/skill.vica-pota-mastery.md":NS,"../../content/events/skill.victa-gathering.md":MS,"../../content/events/skill.viduus-parting.md":qS,"../../content/events/skill.virbius-return-to-life.md":QS,"../../content/events/skill.virginiensis-promise.md":KS,"../../content/events/skill.viriplaca-reconciliation.md":OS,"../../content/events/skill.virtus-bravery.md":zS,"../../content/events/skill.visidianus-promise.md":RS,"../../content/events/skill.vitula-gladness.md":DS,"../../content/events/skill.vitumnus-journey.md":YS,"../../content/events/skill.voleta-gathering.md":IS,"../../content/events/skill.volturnus-flow.md":HS,"../../content/events/skill.volumna-sanctuary.md":US,"../../content/events/skill.volumnus-journey.md":BS,"../../content/events/skill.volupia-pleasure.md":LS,"../../content/events/skill.volutina-offering.md":VS,"../../content/events/skill.vulcan-forge.md":GS,"../../content/events/start.md":XS,"../../content/events/term.rank.md":$S,"../../content/events/virgilio.first-map.md":ZS,"../../content/events/virgilio.first-play-gate.md":JS,"../../content/events/virgilio.power.md":FS,"../../content/events/virgilio.read-deck.md":PS,"../../content/events/virgilio.resemblance.md":WS,"../../content/events/virgilio.reward-moment.md":n7,"../../content/events/virgilio.self-resemblance.md":e7,"../../content/events/virgilio.story.md":t7});function K7(){const l=Object.entries(Q7).sort(([s],[r])=>s.localeCompare(r)).map(([s,r])=>({source:s,raw:r})),a=M7(l);for(const s of a.warnings)console.warn(s);return a}const Qn=K7();function mp(l){return{schemaVersion:1,catalogVersion:l,discoveredMotifIds:[],encounteredMotifIds:[],discoveredTextIds:[],upgradeAllocation:{hands:0,discards:0,lives:0},statistics:{runs:0,wins:0,losses:0},bestMapsConquered:0,guide:{beat:"start",dismissed:[],known:[],off:[]},artifacts:[]}}function ac(l){return typeof l=="number"&&Number.isFinite(l)?Math.max(0,Math.floor(l)):0}function O7(l,a){return Math.max(ac(l.bestMapsConquered),ac(a))}function sc(l,a){const s=O7(l,a);return ac(l.bestMapsConquered)===s?l:{...l,bestMapsConquered:s}}function a0(l,a){return a.filter(s=>l>=s).length}function s0(l,a){const s=a.progression.upgrades;return l.hands*s.hands.cost+l.discards*s.discards.cost+l.lives*s.lives.cost}function pp(l,a,s,r,u){var S,E,T,x;const d=l.discoveredMotifIds.filter(s),h=l.encounteredMotifIds.filter(s),g=l.discoveredTextIds.filter(r);let f={...l.upgradeAllocation};const p=["lives","hands","discards"];for(;o0(f,d.length,a)&&p.some(A=>f[A]>0);){const A=p.find(R=>f[R]>0);if(!A)break;f={...f,[A]:f[A]-1}}const _=Array.isArray((S=l.guide)==null?void 0:S.dismissed)?l.guide.dismissed.filter(A=>typeof A=="string"):[],v=Array.isArray((E=l.guide)==null?void 0:E.known)?l.guide.known.filter(A=>typeof A=="string"):[],k=Array.isArray((T=l.guide)==null?void 0:T.off)?l.guide.off.filter(A=>typeof A=="string"):[];for(const A of Qn.notes)!A.dev||v.includes(A.id)||k.includes(A.id)||k.push(A.id);const w=Array.isArray(l.artifacts)?l.artifacts.filter(A=>!!(A&&typeof A.id=="string"&&typeof A.seed=="string"&&typeof A.textId=="string"&&typeof A.textIndex=="number"&&typeof A.distance=="number"&&Array.isArray(A.deityIds)&&A.deityIds.every(R=>typeof R=="string"))):[];return{...l,catalogVersion:u,discoveredMotifIds:d,encounteredMotifIds:h,discoveredTextIds:g,upgradeAllocation:f,guide:{beat:((x=l.guide)==null?void 0:x.beat)||"start",dismissed:_,known:v,off:k},artifacts:w,bestMapsConquered:ac(l.bestMapsConquered)}}function o0(l,a,s){const r=s.progression.upgrades;if(l.hands<0||l.discards<0||l.lives<0)return"Levels cannot be negative.";if(l.hands>r.hands.max)return"Hand upgrade is at its cap.";if(l.discards>r.discards.max)return"Discard upgrade is at its cap.";if(l.lives>r.lives.max)return"Life upgrade is at its cap.";const u=a0(a,s.progression.pointThresholds);return s0(l,s)>u?"That build spends more points than you have earned.":null}const z7=`---
id: poker
title: Poker
---

flushFive | 160 | 16 | Flush Five
flushHouse | 140 | 14 | Flush House
fiveOfAKind | 120 | 12 | Five of a Kind
straightFlush | 100 | 8 | Straight Flush
fourOfAKind | 60 | 7 | Four of a Kind
fullHouse | 40 | 4 | Full House
flush | 35 | 4 | Flush
straight | 30 | 4 | Straight
threeOfAKind | 30 | 3 | Three of a Kind
twoPair | 20 | 2 | Two Pair
pair | 10 | 2 | Pair
highCard | 5 | 1 | High Card
`,R7=`---
id: ranks
title: Rank chips
---

2 | 2
3 | 3
4 | 4
5 | 5
6 | 6
7 | 7
8 | 8
9 | 9
10 | 10
Page | 10
Knight | 10
Queen | 10
King | 10
A | 11
`,D7=/^([A-Za-z][A-Za-z0-9]*)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(.+?)\s*$/,Y7=new Set(hd);function I7(l,a="poker"){const s=[],r=l.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`);let u=r;if(r.startsWith(`---
`)){const g=r.indexOf(`
---
`,4);u=g>=0?r.slice(g+5):r,g<0&&s.push(`${a}: frontmatter is not closed`)}const d=[],h=new Set;for(const g of u.split(`
`)){if(!g.trim())continue;const f=g.match(D7);if(!f){s.push(`${a}: unreadable hand line "${g.trim()}"`);continue}const p=f[1];if(!Y7.has(p)){s.push(`${a}: unknown hand "${p}"`);continue}h.has(p)&&s.push(`${a}: duplicate hand "${p}"`),h.add(p),d.push({id:p,chips:Number(f[2]),mult:Number(f[3]),label:f[4].trim()})}return d.some(g=>g.id==="highCard")||s.push(`${a}: highCard is required`),{hands:d,warnings:s}}const H7=/^([A-Za-z0-9]+)\s*\|\s*(\d+)\s*$/,U7=new Set(hs);function B7(l,a="ranks"){const s=[],r=l.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`);let u=r;if(r.startsWith(`---
`)){const g=r.indexOf(`
---
`,4);g<0?s.push(`${a}: frontmatter is not closed`):u=r.slice(g+5)}const d={};for(const g of u.split(`
`)){if(!g.trim())continue;const f=g.match(H7);if(!f){s.push(`${a}: unreadable rank line "${g.trim()}"`);continue}if(!U7.has(f[1])){s.push(`${a}: unknown rank "${f[1]}"`);continue}d[f[1]]=Number(f[2])}const h=hs.filter(g=>d[g]==null);return h.length>0&&s.push(`${a}: missing ${h.join(", ")}`),{chips:h.length===0&&s.length===0?d:null,warnings:s}}const c0=Object.assign({"../../content/games/poker.md":z7,"../../content/games/ranks.md":R7});function L7(){const l=Object.entries(c0).find(([s])=>s.endsWith("/poker.md"));if(!l)return lc;const a=I7(l[1],"content/games/poker.md");for(const s of a.warnings)console.warn(s);return a.hands.length>0&&a.warnings.length===0?a.hands:lc}const Pi=L7();function V7(){const l=Object.entries(c0).find(([s])=>s.endsWith("/ranks.md"));if(!l)return;const a=B7(l[1],"content/games/ranks.md");for(const s of a.warnings)console.warn(s);return a.chips??void 0}const G7=V7();function r0(l){return a7(l,G7)}function X7(l){let a=2166136261;for(let s=0;s<l.length;s++)a^=l.charCodeAt(s),a=Math.imul(a,16777619);return a>>>0}function la(l){let a=l>>>0;return{next(){a=a+1831565813>>>0;let s=Math.imul(a^a>>>15,1|a);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296},state:()=>a>>>0,int(s){return Math.floor(this.next()*s)},shuffle(s){const r=s.slice();for(let u=r.length-1;u>0;u--){const d=this.int(u+1),h=r[u];r[u]=r[d],r[d]=h}return r}}}function $7(l){return la(X7(l)||1)}function Z7(l,a){let s=l>>>0;for(let r=0;r<a.length;r+=1)s=Math.imul(s^a.charCodeAt(r),16777619);return s>>>0||1}function gd(l,a){const s=l.configSnapshot.deck.startingSize,r=la(Z7(l.rngState,a.id));let d=r.shuffle(a.motifIds.slice()).slice(0,s);if(d.length<s){const h=r.shuffle(l.worldMotifIds.filter(g=>!d.includes(g)));d=d.concat(h.slice(0,s-d.length))}return d}function J7(l){if(!(!l||l==="any"))return l in ss?ss[l].label:l}function F7(l,a,s){if(!l||l==="any"||l===a)return 1;if(l==="flush"){const r=Xp(s);if(r>=3&&r<5)return ed(r)}if(l==="straight"){const r=$p(s);if(r>=3&&r<5)return ed(r)}return 0}function ad(l,a){if(a<=0||l===0)return 0;if(a>=1)return l;const s=Math.round(l*a);return s>0?s:1}function P7(l,a,s){var d,h;const r=new Set(((d=a.guide)==null?void 0:d.known)??[]),u=new Set(((h=a.guide)==null?void 0:h.off)??[]);return l.reduce((g,f)=>f.kind!=="skill"||f.card==null||f.god||!r.has(f.id)||u.has(f.id)?g:Math.max(g,f.card),s)}function u0(l,a,s,r,u){var p,_;const d=new Set(((p=a.guide)==null?void 0:p.known)??[]),h=new Set(((_=a.guide)==null?void 0:_.off)??[]),g=new Set((s==null?void 0:s.powers)??[]),f=new Set((s==null?void 0:s.powersOff)??[]);return l.some(v=>{if(v.kind!=="skill"||v.card!=null||!(v.god?g.has(v.id):d.has(v.id))||!(v.god?!f.has(v.id):!h.has(v.id))||!u&&(v.suit||v.rank))return!1;const S=fs(v,r);return S!=null&&S>0})}function W7(l,a,s,r){var p,_;const u=new Set(((p=a.guide)==null?void 0:p.known)??[]),d=new Set(((_=a.guide)==null?void 0:_.off)??[]),h=new Set((s==null?void 0:s.powers)??[]),g=new Set((s==null?void 0:s.powersOff)??[]),f=l.reduce((v,k)=>{if(k.kind!=="skill"||k.chips==null||k.card!=null||k.when&&k.when!=="any"||!(k.god?h.has(k.id):u.has(k.id))||!(k.god?!g.has(k.id):!d.has(k.id)))return v;const E=fs(k,r);return E==null||E<=0?v:v+ad(Math.round(k.chips*E),1)},0);return r.chips+f}function fs(l,a){var s,r;if(l.card!=null)return 1;if(l.domain==="words")return(s=l.words)!=null&&s.some(u=>{var d;return(d=a.domainText)==null?void 0:d.includes(u)})?1:0;if(l.domain==="affinity"){const u=l.god?(r=a.affinities)==null?void 0:r[l.god]:void 0;return u==null||l.threshold==null||l.reach==null?0:Math.min(1,Math.max(0,(u-l.threshold)/l.reach))}return l.suit?a.suit===l.suit?1:0:l.rank?a.rank===l.rank?1:0:null}function d0(l,a,s,r,u=[],d=u){var v,k;const h=new Set(((v=a.guide)==null?void 0:v.known)??[]),g=new Set(((k=a.guide)==null?void 0:k.off)??[]),f=new Set((r==null?void 0:r.powers)??[]),p=new Set((r==null?void 0:r.powersOff)??[]),_=new Map(((r==null?void 0:r.powers)??[]).map((w,S)=>[w,S]));return l.filter(w=>w.kind==="skill"&&(w.chips!=null||w.mult!=null)).filter(w=>w.god?f.has(w.id):h.has(w.id)).sort((w,S)=>(_.get(w.id)??1e3)-(_.get(S.id)??1e3)).map(w=>{const S=w.god?p.has(w.id):g.has(w.id),T=!!(w.domain||w.suit||w.rank)?u.reduce((H,G)=>H+(fs(w,G)??0),0):1,x=F7(w.when,s,d),A=ad(Math.round((w.chips??0)*T),x),R=ad(Math.round((w.mult??0)*T),x),U=x>0&&T>0&&(A!==0||R!==0);return{title:w.title,chips:A,mult:R,state:S?"off":U?"on":"idle",hand:J7(w.when)}})}function h0(l){if(l.state==="off")return`${l.title} is off`;if(l.state==="idle")return l.hand?`${l.title} waits for a ${l.hand}`:`${l.title} does not apply to this hand`;const a=[];return l.chips&&a.push(`+${l.chips} chips`),l.mult&&a.push(`+${l.mult} multiplier`),`${l.title} ${a.join(", ")||"no change"}`}function md(l,a,s,r,u=[],d=u){return d0(l,a,s,r,u,d).filter(h=>h.state==="on").map(h=>({title:h.title,chips:h.chips,mult:h.mult}))}function rc(l,a,s){var g,f;const r=new Set(((g=a.guide)==null?void 0:g.known)??[]),u=new Set(((f=a.guide)==null?void 0:f.off)??[]),d=new Set((s==null?void 0:s.powers)??[]),h=new Set((s==null?void 0:s.powersOff)??[]);return l.filter(p=>p.kind==="skill"&&(p.god?d.has(p.id)&&!h.has(p.id):r.has(p.id)&&!u.has(p.id))).reduce((p,_)=>({hands:p.hands+(_.hands??0),discards:p.discards+(_.discards??0)}),{hands:0,discards:0})}function pd(l,a){return l.filter(s=>s.kind==="skill"&&s.god===a).map(s=>({id:s.id,title:s.title,text:Fi(s.body)}))}function gs(l,a,s){if(!a)return l;const r=pd(s,a).map(d=>d.id);if(r.length===0)return l;const u=[...l.powers??[]];for(const d of r)u.includes(d)||u.push(d);return u.length===(l.powers??[]).length?l:{...l,powers:u}}function n9(l,a){if(!(l.powers??[]).includes(a))return l;const s=l.powersOff??[],r=s.includes(a)?s.filter(u=>u!==a):[...s,a];return{...l,powersOff:r}}function f0(l,a,s){var T,x;const{playedMotifIds:r,discoveredTextIds:u,config:d,threshold:h}=s,g=d.texts,f=Math.round(h*a.scale),p=r.map(A=>l.motifIndex.get(A)).filter(A=>A!==void 0),_=[];for(let A=0;A<l.texts.length;A++){let R=0;for(const J of p)a.motifText[J*a.nTexts+A]>=f&&(R+=1);if(R<g.minResonantCards)continue;const U=l.texts[A],H=(T=s.artifactTextIds)!=null&&T.has(U.id)?!!((x=s.discoveredTextIndexes)!=null&&x.has(A)):u.has(U.id);if(!H&&s.discoverNew===!1)continue;const G=H?g.baseBonus+g.perExtraCardBonus*(R-g.minResonantCards):0;_.push({textId:U.id,name:U.name,resonantCount:R,bonus:G,newlyDiscovered:!H})}const v=_.filter(A=>A.newlyDiscovered).map(A=>A.textId).sort(),k=_.filter(A=>!A.newlyDiscovered&&A.bonus>0).sort((A,R)=>R.bonus-A.bonus||A.textId.localeCompare(R.textId)).slice(0,g.maxActiveBonusesPerHand),w=k.reduce((A,R)=>A+R.bonus,0),S=new Set(v);return{hits:[...k,..._.filter(A=>S.has(A.textId))],bonus:w,newlyUnlockedIds:v}}function g0(l,a,s,r=()=>[]){const u=Math.min(Math.max(s,1),5,l.length);if(u<1)return 0;let d=0;const h=(g,f)=>{if(f.length>0){const p=Pp(f,a),_=f.filter(k=>p.scoringCardIds.includes(k.id)),v=Wp(p,[...Fp(f,p.category,a),...r(p.category,_,f)]);v.pokerSubtotal>d&&(d=v.pokerSubtotal)}if(f.length!==u)for(let p=g;p<l.length;p+=1)h(p+1,f.concat(l[p]))};return h(0,[]),d}function e9(l,a,s,r,u){if(a<=0||l<=0)return[];const d=Math.max(1,u);return Array.from({length:a},(h,g)=>{const f=a===1?0:g/(a-1),p=l*(s+(r-s)*f),_=Math.max(d,Math.round(p/d)*d);return g===0?Math.min(_,Math.max(1,Math.floor(l))):_})}const na=2,nc=5;function m0(l,a,s){var _;const r=l.similarities,u=r==null?void 0:r.motifMotif;if(!r||!u)return null;const d=r.nMotifs;if(u.length!==d*d||l.motifs.length!==d)return null;const h=new Set,g=[];for(const v of a){if(h.has(v))return null;h.add(v);const k=l.motifIndex.get(v);if(k==null)return null;g.push(k)}if(g.length<na||g.length>nc)return null;let f=-1,p=Number.NEGATIVE_INFINITY;for(let v=0;v<d;v++){const k=(_=l.motifs[v])==null?void 0:_.id;if(!k||h.has(k)||s.has(k))continue;let w=0;for(const S of g)w+=u[S*d+v];w>p&&(p=w,f=v)}return f>=0?l.motifs[f].id:null}const Zt=11102230246251565e-32,Te=134217729,t9=(3+8*Zt)*Zt;function Vu(l,a,s,r,u){let d,h,g,f,p=a[0],_=r[0],v=0,k=0;_>p==_>-p?(d=p,p=a[++v]):(d=_,_=r[++k]);let w=0;if(v<l&&k<s)for(_>p==_>-p?(h=p+d,g=d-(h-p),p=a[++v]):(h=_+d,g=d-(h-_),_=r[++k]),d=h,g!==0&&(u[w++]=g);v<l&&k<s;)_>p==_>-p?(h=d+p,f=h-d,g=d-(h-f)+(p-f),p=a[++v]):(h=d+_,f=h-d,g=d-(h-f)+(_-f),_=r[++k]),d=h,g!==0&&(u[w++]=g);for(;v<l;)h=d+p,f=h-d,g=d-(h-f)+(p-f),p=a[++v],d=h,g!==0&&(u[w++]=g);for(;k<s;)h=d+_,f=h-d,g=d-(h-f)+(_-f),_=r[++k],d=h,g!==0&&(u[w++]=g);return(d!==0||w===0)&&(u[w++]=d),w}function i9(l,a){let s=a[0];for(let r=1;r<l;r++)s+=a[r];return s}function ms(l){return new Float64Array(l)}const l9=(3+16*Zt)*Zt,a9=(2+12*Zt)*Zt,s9=(9+64*Zt)*Zt*Zt,Zl=ms(4),yp=ms(8),_p=ms(12),vp=ms(16),ze=ms(4);function o9(l,a,s,r,u,d,h){let g,f,p,_,v,k,w,S,E,T,x,A,R,U,H,G,J,an;const nn=l-u,fn=s-u,gn=a-d,un=r-d;U=nn*un,k=Te*nn,w=k-(k-nn),S=nn-w,k=Te*un,E=k-(k-un),T=un-E,H=S*T-(U-w*E-S*E-w*T),G=gn*fn,k=Te*gn,w=k-(k-gn),S=gn-w,k=Te*fn,E=k-(k-fn),T=fn-E,J=S*T-(G-w*E-S*E-w*T),x=H-J,v=H-x,Zl[0]=H-(x+v)+(v-J),A=U+x,v=A-U,R=U-(A-v)+(x-v),x=R-G,v=R-x,Zl[1]=R-(x+v)+(v-G),an=A+x,v=an-A,Zl[2]=A-(an-v)+(x-v),Zl[3]=an;let F=i9(4,Zl),ln=a9*h;if(F>=ln||-F>=ln||(v=l-nn,g=l-(nn+v)+(v-u),v=s-fn,p=s-(fn+v)+(v-u),v=a-gn,f=a-(gn+v)+(v-d),v=r-un,_=r-(un+v)+(v-d),g===0&&f===0&&p===0&&_===0)||(ln=s9*h+t9*Math.abs(F),F+=nn*_+un*g-(gn*p+fn*f),F>=ln||-F>=ln))return F;U=g*un,k=Te*g,w=k-(k-g),S=g-w,k=Te*un,E=k-(k-un),T=un-E,H=S*T-(U-w*E-S*E-w*T),G=f*fn,k=Te*f,w=k-(k-f),S=f-w,k=Te*fn,E=k-(k-fn),T=fn-E,J=S*T-(G-w*E-S*E-w*T),x=H-J,v=H-x,ze[0]=H-(x+v)+(v-J),A=U+x,v=A-U,R=U-(A-v)+(x-v),x=R-G,v=R-x,ze[1]=R-(x+v)+(v-G),an=A+x,v=an-A,ze[2]=A-(an-v)+(x-v),ze[3]=an;const P=Vu(4,Zl,4,ze,yp);U=nn*_,k=Te*nn,w=k-(k-nn),S=nn-w,k=Te*_,E=k-(k-_),T=_-E,H=S*T-(U-w*E-S*E-w*T),G=gn*p,k=Te*gn,w=k-(k-gn),S=gn-w,k=Te*p,E=k-(k-p),T=p-E,J=S*T-(G-w*E-S*E-w*T),x=H-J,v=H-x,ze[0]=H-(x+v)+(v-J),A=U+x,v=A-U,R=U-(A-v)+(x-v),x=R-G,v=R-x,ze[1]=R-(x+v)+(v-G),an=A+x,v=an-A,ze[2]=A-(an-v)+(x-v),ze[3]=an;const I=Vu(P,yp,4,ze,_p);U=g*_,k=Te*g,w=k-(k-g),S=g-w,k=Te*_,E=k-(k-_),T=_-E,H=S*T-(U-w*E-S*E-w*T),G=f*p,k=Te*f,w=k-(k-f),S=f-w,k=Te*p,E=k-(k-p),T=p-E,J=S*T-(G-w*E-S*E-w*T),x=H-J,v=H-x,ze[0]=H-(x+v)+(v-J),A=U+x,v=A-U,R=U-(A-v)+(x-v),x=R-G,v=R-x,ze[1]=R-(x+v)+(v-G),an=A+x,v=an-A,ze[2]=A-(an-v)+(x-v),ze[3]=an;const $=Vu(I,_p,4,ze,vp);return vp[$-1]}function Jo(l,a,s,r,u,d){const h=(a-d)*(s-u),g=(l-u)*(r-d),f=h-g,p=Math.abs(h+g);return Math.abs(f)>=l9*p?f:-o9(l,a,s,r,u,d,p)}const kp=Math.pow(2,-52),Fo=new Uint32Array(512);class oc{static from(a,s=h9,r=f9){const u=a.length,d=new Float64Array(u*2);for(let h=0;h<u;h++){const g=a[h];d[2*h]=s(g),d[2*h+1]=r(g)}return new oc(d)}constructor(a){const s=a.length>>1;if(s>0&&typeof a[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=a;const r=Math.max(2*s-5,0);this._triangles=new Uint32Array(r*3),this._halfedges=new Int32Array(r*3),this._hashSize=Math.ceil(Math.sqrt(s)),this._hullPrev=new Uint32Array(s),this._hullNext=new Uint32Array(s),this._hullTri=new Uint32Array(s),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(s),this._dists=new Float64Array(s),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:a,_hullPrev:s,_hullNext:r,_hullTri:u,_hullHash:d}=this,h=a.length>>1;let g=1/0,f=1/0,p=-1/0,_=-1/0;for(let nn=0;nn<h;nn++){const fn=a[2*nn],gn=a[2*nn+1];fn<g&&(g=fn),gn<f&&(f=gn),fn>p&&(p=fn),gn>_&&(_=gn),this._ids[nn]=nn}const v=(g+p)/2,k=(f+_)/2;let w=0,S=0,E=0;for(let nn=0,fn=1/0;nn<h;nn++){const gn=Gu(v,k,a[2*nn],a[2*nn+1]);gn<fn&&(w=nn,fn=gn)}const T=a[2*w],x=a[2*w+1];for(let nn=0,fn=1/0;nn<h;nn++){if(nn===w)continue;const gn=Gu(T,x,a[2*nn],a[2*nn+1]);gn<fn&&gn>0&&(S=nn,fn=gn)}let A=a[2*S],R=a[2*S+1],U=1/0;for(let nn=0;nn<h;nn++){if(nn===w||nn===S)continue;const fn=u9(T,x,A,R,a[2*nn],a[2*nn+1]);fn<U&&(E=nn,U=fn)}let H=a[2*E],G=a[2*E+1];if(U===1/0){for(let gn=0;gn<h;gn++)this._dists[gn]=a[2*gn]-a[0]||a[2*gn+1]-a[1];ea(this._ids,this._dists,0,h-1);const nn=new Uint32Array(h);let fn=0;for(let gn=0,un=-1/0;gn<h;gn++){const F=this._ids[gn],ln=this._dists[F];ln>un&&(nn[fn++]=F,un=ln)}this.hull=nn.subarray(0,fn),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(Jo(T,x,A,R,H,G)<0){const nn=S,fn=A,gn=R;S=E,A=H,R=G,E=nn,H=fn,G=gn}const J=d9(T,x,A,R,H,G);this._cx=J.x,this._cy=J.y;for(let nn=0;nn<h;nn++)this._dists[nn]=Gu(a[2*nn],a[2*nn+1],J.x,J.y);ea(this._ids,this._dists,0,h-1),this._hullStart=w;let an=3;r[w]=s[E]=S,r[S]=s[w]=E,r[E]=s[S]=w,u[w]=0,u[S]=1,u[E]=2,d.fill(-1),d[this._hashKey(T,x)]=w,d[this._hashKey(A,R)]=S,d[this._hashKey(H,G)]=E,this.trianglesLen=0,this._addTriangle(w,S,E,-1,-1,-1);for(let nn=0,fn=0,gn=0;nn<this._ids.length;nn++){const un=this._ids[nn],F=a[2*un],ln=a[2*un+1];if(nn>0&&Math.abs(F-fn)<=kp&&Math.abs(ln-gn)<=kp||(fn=F,gn=ln,un===w||un===S||un===E))continue;let P=0;for(let sn=0,bn=this._hashKey(F,ln);sn<this._hashSize&&(P=d[(bn+sn)%this._hashSize],!(P!==-1&&P!==r[P]));sn++);P=s[P];let I=P,$;for(;$=r[I],Jo(F,ln,a[2*I],a[2*I+1],a[2*$],a[2*$+1])>=0;)if(I=$,I===P){I=-1;break}if(I===-1)continue;let Y=this._addTriangle(I,un,r[I],-1,-1,u[I]);u[un]=this._legalize(Y+2),u[I]=Y,an++;let z=r[I];for(;$=r[z],Jo(F,ln,a[2*z],a[2*z+1],a[2*$],a[2*$+1])<0;)Y=this._addTriangle(z,un,$,u[un],-1,u[z]),u[un]=this._legalize(Y+2),r[z]=z,an--,z=$;if(I===P)for(;$=s[I],Jo(F,ln,a[2*$],a[2*$+1],a[2*I],a[2*I+1])<0;)Y=this._addTriangle($,un,I,-1,u[I],u[$]),this._legalize(Y+2),u[$]=Y,r[I]=I,an--,I=$;this._hullStart=s[un]=I,r[I]=s[z]=un,r[un]=z,d[this._hashKey(F,ln)]=un,d[this._hashKey(a[2*I],a[2*I+1])]=I}this.hull=new Uint32Array(an);for(let nn=0,fn=this._hullStart;nn<an;nn++)this.hull[nn]=fn,fn=r[fn];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(a,s){return Math.floor(c9(a-this._cx,s-this._cy)*this._hashSize)%this._hashSize}_legalize(a){const{_triangles:s,_halfedges:r,coords:u}=this;let d=0,h=0;for(;;){const g=r[a],f=a-a%3;if(h=f+(a+2)%3,g===-1){if(d===0)break;a=Fo[--d];continue}const p=g-g%3,_=f+(a+1)%3,v=p+(g+2)%3,k=s[h],w=s[a],S=s[_],E=s[v];if(r9(u[2*k],u[2*k+1],u[2*w],u[2*w+1],u[2*S],u[2*S+1],u[2*E],u[2*E+1])){s[a]=E,s[g]=k;const x=r[v];if(x===-1){let R=this._hullStart;do{if(this._hullTri[R]===v){this._hullTri[R]=a;break}R=this._hullPrev[R]}while(R!==this._hullStart)}this._link(a,x),this._link(g,r[h]),this._link(h,v);const A=p+(g+1)%3;d<Fo.length&&(Fo[d++]=A)}else{if(d===0)break;a=Fo[--d]}}return h}_link(a,s){this._halfedges[a]=s,s!==-1&&(this._halfedges[s]=a)}_addTriangle(a,s,r,u,d,h){const g=this.trianglesLen;return this._triangles[g]=a,this._triangles[g+1]=s,this._triangles[g+2]=r,this._link(g,u),this._link(g+1,d),this._link(g+2,h),this.trianglesLen+=3,g}}function c9(l,a){const s=l/(Math.abs(l)+Math.abs(a));return(a>0?3-s:1+s)/4}function Gu(l,a,s,r){const u=l-s,d=a-r;return u*u+d*d}function r9(l,a,s,r,u,d,h,g){const f=l-h,p=a-g,_=s-h,v=r-g,k=u-h,w=d-g,S=f*f+p*p,E=_*_+v*v,T=k*k+w*w;return f*(v*T-E*w)-p*(_*T-E*k)+S*(_*w-v*k)<0}function u9(l,a,s,r,u,d){const h=s-l,g=r-a,f=u-l,p=d-a,_=h*h+g*g,v=f*f+p*p,k=.5/(h*p-g*f),w=(p*_-g*v)*k,S=(h*v-f*_)*k;return w*w+S*S}function d9(l,a,s,r,u,d){const h=s-l,g=r-a,f=u-l,p=d-a,_=h*h+g*g,v=f*f+p*p,k=.5/(h*p-g*f),w=l+(p*_-g*v)*k,S=a+(h*v-f*_)*k;return{x:w,y:S}}function ea(l,a,s,r){if(r-s<=20)for(let u=s+1;u<=r;u++){const d=l[u],h=a[d];let g=u-1;for(;g>=s&&a[l[g]]>h;)l[g+1]=l[g--];l[g+1]=d}else{const u=s+r>>1;let d=s+1,h=r;ls(l,u,d),a[l[s]]>a[l[r]]&&ls(l,s,r),a[l[d]]>a[l[r]]&&ls(l,d,r),a[l[s]]>a[l[d]]&&ls(l,s,d);const g=l[d],f=a[g];for(;;){do d++;while(a[l[d]]<f);do h--;while(a[l[h]]>f);if(h<d)break;ls(l,d,h)}l[s+1]=l[h],l[h]=g,r-d+1>=h-s?(ea(l,a,d,r),ea(l,a,s,h-1)):(ea(l,a,s,h-1),ea(l,a,d,r))}}function ls(l,a,s){const r=l[a];l[a]=l[s],l[s]=r}function h9(l){return l[0]}function f9(l){return l[1]}const wp=1e-6;class Zi{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(a,s){this._+=`M${this._x0=this._x1=+a},${this._y0=this._y1=+s}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(a,s){this._+=`L${this._x1=+a},${this._y1=+s}`}arc(a,s,r){a=+a,s=+s,r=+r;const u=a+r,d=s;if(r<0)throw new Error("negative radius");this._x1===null?this._+=`M${u},${d}`:(Math.abs(this._x1-u)>wp||Math.abs(this._y1-d)>wp)&&(this._+="L"+u+","+d),r&&(this._+=`A${r},${r},0,1,1,${a-r},${s}A${r},${r},0,1,1,${this._x1=u},${this._y1=d}`)}rect(a,s,r,u){this._+=`M${this._x0=this._x1=+a},${this._y0=this._y1=+s}h${+r}v${+u}h${-r}Z`}value(){return this._||null}}class sd{constructor(){this._=[]}moveTo(a,s){this._.push([a,s])}closePath(){this._.push(this._[0].slice())}lineTo(a,s){this._.push([a,s])}value(){return this._.length?this._:null}}class g9{constructor(a,[s,r,u,d]=[0,0,960,500]){if(!((u=+u)>=(s=+s))||!((d=+d)>=(r=+r)))throw new Error("invalid bounds");this.delaunay=a,this._circumcenters=new Float64Array(a.points.length*2),this.vectors=new Float64Array(a.points.length*2),this.xmax=u,this.xmin=s,this.ymax=d,this.ymin=r,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:a,hull:s,triangles:r},vectors:u}=this;let d,h;const g=this.circumcenters=this._circumcenters.subarray(0,r.length/3*2);for(let E=0,T=0,x=r.length,A,R;E<x;E+=3,T+=2){const U=r[E]*2,H=r[E+1]*2,G=r[E+2]*2,J=a[U],an=a[U+1],nn=a[H],fn=a[H+1],gn=a[G],un=a[G+1],F=nn-J,ln=fn-an,P=gn-J,I=un-an,$=(F*I-ln*P)*2;if(Math.abs($)<1e-9){if(d===void 0){d=h=0;for(const z of s)d+=a[z*2],h+=a[z*2+1];d/=s.length,h/=s.length}const Y=1e9*Math.sign((d-J)*I-(h-an)*P);A=(J+gn)/2-Y*I,R=(an+un)/2+Y*P}else{const Y=1/$,z=F*F+ln*ln,sn=P*P+I*I;A=J+(I*z-ln*sn)*Y,R=an+(F*sn-P*z)*Y}g[T]=A,g[T+1]=R}let f=s[s.length-1],p,_=f*4,v,k=a[2*f],w,S=a[2*f+1];u.fill(0);for(let E=0;E<s.length;++E)f=s[E],p=_,v=k,w=S,_=f*4,k=a[2*f],S=a[2*f+1],u[p+2]=u[_]=w-S,u[p+3]=u[_+1]=k-v}render(a){const s=a==null?a=new Zi:void 0,{delaunay:{halfedges:r,inedges:u,hull:d},circumcenters:h,vectors:g}=this;if(d.length<=1)return null;for(let _=0,v=r.length;_<v;++_){const k=r[_];if(k<_)continue;const w=Math.floor(_/3)*2,S=Math.floor(k/3)*2,E=h[w],T=h[w+1],x=h[S],A=h[S+1];this._renderSegment(E,T,x,A,a)}let f,p=d[d.length-1];for(let _=0;_<d.length;++_){f=p,p=d[_];const v=Math.floor(u[p]/3)*2,k=h[v],w=h[v+1],S=f*4,E=this._project(k,w,g[S+2],g[S+3]);E&&this._renderSegment(k,w,E[0],E[1],a)}return s&&s.value()}renderBounds(a){const s=a==null?a=new Zi:void 0;return a.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),s&&s.value()}renderCell(a,s){const r=s==null?s=new Zi:void 0,u=this._clip(a);if(u===null||!u.length)return;s.moveTo(u[0],u[1]);let d=u.length;for(;u[0]===u[d-2]&&u[1]===u[d-1]&&d>1;)d-=2;for(let h=2;h<d;h+=2)(u[h]!==u[h-2]||u[h+1]!==u[h-1])&&s.lineTo(u[h],u[h+1]);return s.closePath(),r&&r.value()}*cellPolygons(){const{delaunay:{points:a}}=this;for(let s=0,r=a.length/2;s<r;++s){const u=this.cellPolygon(s);u&&(u.index=s,yield u)}}cellPolygon(a){const s=new sd;return this.renderCell(a,s),s.value()}_renderSegment(a,s,r,u,d){let h;const g=this._regioncode(a,s),f=this._regioncode(r,u);g===0&&f===0?(d.moveTo(a,s),d.lineTo(r,u)):(h=this._clipSegment(a,s,r,u,g,f))&&(d.moveTo(h[0],h[1]),d.lineTo(h[2],h[3]))}contains(a,s,r){return s=+s,s!==s||(r=+r,r!==r)?!1:this.delaunay._step(a,s,r)===a}*neighbors(a){const s=this._clip(a);if(s)for(const r of this.delaunay.neighbors(a)){const u=this._clip(r);if(u){n:for(let d=0,h=s.length;d<h;d+=2)for(let g=0,f=u.length;g<f;g+=2)if(s[d]===u[g]&&s[d+1]===u[g+1]&&s[(d+2)%h]===u[(g+f-2)%f]&&s[(d+3)%h]===u[(g+f-1)%f]){yield r;break n}}}}_cell(a){const{circumcenters:s,delaunay:{inedges:r,halfedges:u,triangles:d}}=this,h=r[a];if(h===-1)return null;const g=[];let f=h;do{const p=Math.floor(f/3);if(g.push(s[p*2],s[p*2+1]),f=f%3===2?f-2:f+1,d[f]!==a)break;f=u[f]}while(f!==h&&f!==-1);return g}_clip(a){if(a===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const s=this._cell(a);if(s===null)return null;const{vectors:r}=this,u=a*4;return this._simplify(r[u]||r[u+1]?this._clipInfinite(a,s,r[u],r[u+1],r[u+2],r[u+3]):this._clipFinite(a,s))}_clipFinite(a,s){const r=s.length;let u=null,d,h,g=s[r-2],f=s[r-1],p,_=this._regioncode(g,f),v,k=0;for(let w=0;w<r;w+=2)if(d=g,h=f,g=s[w],f=s[w+1],p=_,_=this._regioncode(g,f),p===0&&_===0)v=k,k=0,u?u.push(g,f):u=[g,f];else{let S,E,T,x,A;if(p===0){if((S=this._clipSegment(d,h,g,f,p,_))===null)continue;[E,T,x,A]=S}else{if((S=this._clipSegment(g,f,d,h,_,p))===null)continue;[x,A,E,T]=S,v=k,k=this._edgecode(E,T),v&&k&&this._edge(a,v,k,u,u.length),u?u.push(E,T):u=[E,T]}v=k,k=this._edgecode(x,A),v&&k&&this._edge(a,v,k,u,u.length),u?u.push(x,A):u=[x,A]}if(u)v=k,k=this._edgecode(u[0],u[1]),v&&k&&this._edge(a,v,k,u,u.length);else if(this.contains(a,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return u}_clipSegment(a,s,r,u,d,h){const g=d<h;for(g&&([a,s,r,u,d,h]=[r,u,a,s,h,d]);;){if(d===0&&h===0)return g?[r,u,a,s]:[a,s,r,u];if(d&h)return null;let f,p,_=d||h;_&8?(f=a+(r-a)*(this.ymax-s)/(u-s),p=this.ymax):_&4?(f=a+(r-a)*(this.ymin-s)/(u-s),p=this.ymin):_&2?(p=s+(u-s)*(this.xmax-a)/(r-a),f=this.xmax):(p=s+(u-s)*(this.xmin-a)/(r-a),f=this.xmin),d?(a=f,s=p,d=this._regioncode(a,s)):(r=f,u=p,h=this._regioncode(r,u))}}_clipInfinite(a,s,r,u,d,h){let g=Array.from(s),f;if((f=this._project(g[0],g[1],r,u))&&g.unshift(f[0],f[1]),(f=this._project(g[g.length-2],g[g.length-1],d,h))&&g.push(f[0],f[1]),g=this._clipFinite(a,g))for(let p=0,_=g.length,v,k=this._edgecode(g[_-2],g[_-1]);p<_;p+=2)v=k,k=this._edgecode(g[p],g[p+1]),v&&k&&(p=this._edge(a,v,k,g,p),_=g.length);else this.contains(a,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(g=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return g}_edge(a,s,r,u,d){for(;s!==r;){let h,g;switch(s){case 5:s=4;continue;case 4:s=6,h=this.xmax,g=this.ymin;break;case 6:s=2;continue;case 2:s=10,h=this.xmax,g=this.ymax;break;case 10:s=8;continue;case 8:s=9,h=this.xmin,g=this.ymax;break;case 9:s=1;continue;case 1:s=5,h=this.xmin,g=this.ymin;break}(u[d]!==h||u[d+1]!==g)&&this.contains(a,h,g)&&(u.splice(d,0,h,g),d+=2)}return d}_project(a,s,r,u){let d=1/0,h,g,f;if(u<0){if(s<=this.ymin)return null;(h=(this.ymin-s)/u)<d&&(f=this.ymin,g=a+(d=h)*r)}else if(u>0){if(s>=this.ymax)return null;(h=(this.ymax-s)/u)<d&&(f=this.ymax,g=a+(d=h)*r)}if(r>0){if(a>=this.xmax)return null;(h=(this.xmax-a)/r)<d&&(g=this.xmax,f=s+(d=h)*u)}else if(r<0){if(a<=this.xmin)return null;(h=(this.xmin-a)/r)<d&&(g=this.xmin,f=s+(d=h)*u)}return[g,f]}_edgecode(a,s){return(a===this.xmin?1:a===this.xmax?2:0)|(s===this.ymin?4:s===this.ymax?8:0)}_regioncode(a,s){return(a<this.xmin?1:a>this.xmax?2:0)|(s<this.ymin?4:s>this.ymax?8:0)}_simplify(a){if(a&&a.length>4){for(let s=0;s<a.length;s+=2){const r=(s+2)%a.length,u=(s+4)%a.length;(a[s]===a[r]&&a[r]===a[u]||a[s+1]===a[r+1]&&a[r+1]===a[u+1])&&(a.splice(r,2),s-=2)}a.length||(a=null)}return a}}const m9=2*Math.PI,Jl=Math.pow;function p9(l){return l[0]}function y9(l){return l[1]}function _9(l){const{triangles:a,coords:s}=l;for(let r=0;r<a.length;r+=3){const u=2*a[r],d=2*a[r+1],h=2*a[r+2];if((s[h]-s[u])*(s[d+1]-s[u+1])-(s[d]-s[u])*(s[h+1]-s[u+1])>1e-10)return!1}return!0}function v9(l,a,s){return[l+Math.sin(l+a)*s,a+Math.cos(l-a)*s]}class yd{static from(a,s=p9,r=y9,u){return new yd("length"in a?k9(a,s,r,u):Float64Array.from(w9(a,s,r,u)))}constructor(a){this._delaunator=new oc(a),this.inedges=new Int32Array(a.length/2),this._hullIndex=new Int32Array(a.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const a=this._delaunator,s=this.points;if(a.hull&&a.hull.length>2&&_9(a)){this.collinear=Int32Array.from({length:s.length/2},(k,w)=>w).sort((k,w)=>s[2*k]-s[2*w]||s[2*k+1]-s[2*w+1]);const f=this.collinear[0],p=this.collinear[this.collinear.length-1],_=[s[2*f],s[2*f+1],s[2*p],s[2*p+1]],v=1e-8*Math.hypot(_[3]-_[1],_[2]-_[0]);for(let k=0,w=s.length/2;k<w;++k){const S=v9(s[2*k],s[2*k+1],v);s[2*k]=S[0],s[2*k+1]=S[1]}this._delaunator=new oc(s)}else delete this.collinear;const r=this.halfedges=this._delaunator.halfedges,u=this.hull=this._delaunator.hull,d=this.triangles=this._delaunator.triangles,h=this.inedges.fill(-1),g=this._hullIndex.fill(-1);for(let f=0,p=r.length;f<p;++f){const _=d[f%3===2?f-2:f+1];(r[f]===-1||h[_]===-1)&&(h[_]=f)}for(let f=0,p=u.length;f<p;++f)g[u[f]]=f;u.length<=2&&u.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=u[0],h[u[0]]=1,u.length===2&&(h[u[1]]=0,this.triangles[1]=u[1],this.triangles[2]=u[1]))}voronoi(a){return new g9(this,a)}*neighbors(a){const{inedges:s,hull:r,_hullIndex:u,halfedges:d,triangles:h,collinear:g}=this;if(g){const v=g.indexOf(a);v>0&&(yield g[v-1]),v<g.length-1&&(yield g[v+1]);return}const f=s[a];if(f===-1)return;let p=f,_=-1;do{if(yield _=h[p],p=p%3===2?p-2:p+1,h[p]!==a)return;if(p=d[p],p===-1){const v=r[(u[a]+1)%r.length];v!==_&&(yield v);return}}while(p!==f)}find(a,s,r=0){if(a=+a,a!==a||(s=+s,s!==s))return-1;const u=r;let d;for(;(d=this._step(r,a,s))>=0&&d!==r&&d!==u;)r=d;return d}_step(a,s,r){const{inedges:u,hull:d,_hullIndex:h,halfedges:g,triangles:f,points:p}=this;if(u[a]===-1||!p.length)return(a+1)%(p.length>>1);let _=a,v=Jl(s-p[a*2],2)+Jl(r-p[a*2+1],2);const k=u[a];let w=k;do{let S=f[w];const E=Jl(s-p[S*2],2)+Jl(r-p[S*2+1],2);if(E<v&&(v=E,_=S),w=w%3===2?w-2:w+1,f[w]!==a)break;if(w=g[w],w===-1){if(w=d[(h[a]+1)%d.length],w!==S&&Jl(s-p[w*2],2)+Jl(r-p[w*2+1],2)<v)return w;break}}while(w!==k);return _}render(a){const s=a==null?a=new Zi:void 0,{points:r,halfedges:u,triangles:d}=this;for(let h=0,g=u.length;h<g;++h){const f=u[h];if(f<h)continue;const p=d[h]*2,_=d[f]*2;a.moveTo(r[p],r[p+1]),a.lineTo(r[_],r[_+1])}return this.renderHull(a),s&&s.value()}renderPoints(a,s){s===void 0&&(!a||typeof a.moveTo!="function")&&(s=a,a=null),s=s==null?2:+s;const r=a==null?a=new Zi:void 0,{points:u}=this;for(let d=0,h=u.length;d<h;d+=2){const g=u[d],f=u[d+1];a.moveTo(g+s,f),a.arc(g,f,s,0,m9)}return r&&r.value()}renderHull(a){const s=a==null?a=new Zi:void 0,{hull:r,points:u}=this,d=r[0]*2,h=r.length;a.moveTo(u[d],u[d+1]);for(let g=1;g<h;++g){const f=2*r[g];a.lineTo(u[f],u[f+1])}return a.closePath(),s&&s.value()}hullPolygon(){const a=new sd;return this.renderHull(a),a.value()}renderTriangle(a,s){const r=s==null?s=new Zi:void 0,{points:u,triangles:d}=this,h=d[a*=3]*2,g=d[a+1]*2,f=d[a+2]*2;return s.moveTo(u[h],u[h+1]),s.lineTo(u[g],u[g+1]),s.lineTo(u[f],u[f+1]),s.closePath(),r&&r.value()}*trianglePolygons(){const{triangles:a}=this;for(let s=0,r=a.length/3;s<r;++s)yield this.trianglePolygon(s)}trianglePolygon(a){const s=new sd;return this.renderTriangle(a,s),s.value()}}function k9(l,a,s,r){const u=l.length,d=new Float64Array(u*2);for(let h=0;h<u;++h){const g=l[h];d[h*2]=a.call(r,g,h,l),d[h*2+1]=s.call(r,g,h,l)}return d}function*w9(l,a,s,r){let u=0;for(const d of l)yield a.call(r,d,u,l),yield s.call(r,d,u,l),++u}function os(l,a,s){return l.motifDeity[a*l.nDeities+s]/l.scale}function Xu(l,a,s){return l.deityDeity[a*l.nDeities+s]/l.scale}function as(l){return`${Math.round(l[0]*1e3)},${Math.round(l[1]*1e3)}`}function b9(l){if(l.length<2)return l.slice();const a=l[0],s=l[l.length-1];return a[0]===s[0]&&a[1]===s[1]?l.slice(0,-1):l.slice()}function x9(l,a){let s=2166136261;for(const r of[l[0],l[1],a[0],a[1]])s^=Math.round(r*10),s=Math.imul(s,16777619);return s>>>0}function bp(l){let a=0;for(let s=0;s<l.length;s++){const[r,u]=l[s],[d,h]=l[(s+1)%l.length];a+=r*h-d*u}return a/2}function S9(l,a,s,r){const u=a[0]-l[0],d=a[1]-l[1],h=Math.hypot(u,d);if(h<8||r<=1)return[l,a];const g=p0(s,0,1),f=1+Math.round(g*2),p=Math.min(h*(.08+.22*g),r*(.28+.5*g)),_=x9(l,a),v=(_&1)===0?1:-1,k=(_>>>8)%628/100,w=-d/h,S=u/h,E=2+f*2,T=[l];for(let x=1;x<E;x++){const A=x/E,R=v*Math.sin(Math.PI*A)*Math.sin(Math.PI*f*A+k)*p;T.push([l[0]+u*A+w*R,l[1]+d*A+S*R])}return T.push(a),T}function E9(l,a,s){const r=new Map,u=f=>{const p=as(f),_=r.get(p);return _||(r.set(p,f),f)},d=l.map(f=>b9(f).map(u)),h=new Map;d.forEach((f,p)=>{for(let _=0;_<f.length;_++){const v=f[_],k=f[(_+1)%f.length],w=as(v),S=as(k);if(w===S)continue;const E=w<S?`${w}|${S}`:`${S}|${w}`,T=h.get(E);T?T.locals.push(p):h.set(E,{start:w<S?v:k,end:w<S?k:v,locals:[p]})}});const g=new Map;for(const[f,p]of h){const _=[...new Set(p.locals)].slice(0,2),v=[(p.start[0]+p.end[0])/2,(p.start[1]+p.end[1])/2],k=_.map(E=>Math.hypot(a[E][0]-v[0],a[E][1]-v[1])),w=Math.min(...k),S=_.length===2?s(_[0],_[1]):.35;g.set(f,S9(p.start,p.end,S,w))}return d.map(f=>{const p=[];for(let k=0;k<f.length;k++){const w=f[k],S=f[(k+1)%f.length],E=as(w),T=as(S);if(E===T)continue;const x=E<T?`${E}|${T}`:`${T}|${E}`,A=g.get(x)??[w,S],U=E<T?A:[...A].reverse();p.push(...U.slice(0,-1))}const _=bp(f),v=bp(p);return _===0||v===0||Math.sign(v)!==Math.sign(_)||Math.abs(v)<Math.abs(_)*.55?f:p.length>2?p:f})}function p0(l,a,s){return Math.min(s,Math.max(a,l))}function y0(l,a,s){const r=s.difficulty,u=p0(1+r.sizeSlope*(a-r.expectedRegionSize),r.sizeMin,r.sizeMax),d=r.baseTarget*r.hopMultiplier**l*u;return Math.max(r.scoreStep,Math.round(d/r.scoreStep)*r.scoreStep)}function _0(l,a){return a?l.flatMap((s,r)=>a.has(s.id)?[r]:[]):l.flatMap((s,r)=>s.image&&s.bead?[r]:[])}function C9(l,a,s,r,u){const{regionsPerRun:d,optimizationSwaps:h,optimizationNoise:g}=r.world,f=new Set(s),p=[],_=a.map(()=>Number.POSITIVE_INFINITY),v=(w,S)=>{const E=g>0?1+g*(l.next()-.5):1;let T=0;for(let x=0;x<a.length;x++){const A=1-os(u,a[x],w);T+=Math.min(S[x],A)}return T*E};for(let w=0;w<d;w++){let S=-1,E=Number.POSITIVE_INFINITY;for(const T of[...f].sort((x,A)=>x-A)){const x=v(T,_);(x<E-1e-9||Math.abs(x-E)<=1e-9&&(S<0||T<S))&&(E=x,S=T)}if(S<0)break;p.push(S),f.delete(S);for(let T=0;T<a.length;T++)_[T]=Math.min(_[T],1-os(u,a[T],S))}const k=w=>{let S=0;for(const E of a){let T=Number.POSITIVE_INFINITY;for(const x of w)T=Math.min(T,1-os(u,E,x));S+=T}return S};for(let w=0;w<h;w++){let S=!1;for(let E=0;E<p.length;E++)for(const T of[...f].sort((x,A)=>x-A)){const x=p.slice();x[E]=T,k(x)+1e-9<k(p)&&(f.add(p[E]),f.delete(T),p[E]=T,S=!0)}if(!S)break}return p}function A9(l,a,s,r){const u=a.map(()=>[]);for(const h of l){let g=0,f=Number.POSITIVE_INFINITY;for(let p=0;p<a.length;p++){const _=1-os(r,h,a[p]);(_<f-1e-12||Math.abs(_-f)<=1e-12&&a[p]<a[g])&&(f=_,g=p)}u[g].push(h)}let d=l.length;for(;u.some(h=>h.length<s)&&d-- >0;){const h=u.findIndex(k=>k.length<s);let g=-1,f=s;for(let k=0;k<u.length;k++)u[k].length>f&&(g=k,f=u[k].length);if(g<0||h<0)break;let p=0,_=Number.POSITIVE_INFINITY;for(let k=0;k<u[g].length;k++){const w=1-os(r,u[g][k],a[h]);w<_&&(_=w,p=k)}const[v]=u[g].splice(p,1);u[h].push(v)}return u}function T9(l){const a=l.length,s=l.map(_=>_.map(v=>v*v)),r=s.map(_=>_.reduce((v,k)=>v+k,0)/a),u=r.reduce((_,v)=>_+v,0)/a,d=s.map((_,v)=>_.map((k,w)=>-.5*(k-r[v]-r[w]+u))),h=_=>{const v=_.length;let k=Array.from({length:v},(E,T)=>Math.sin(T*1.7+.3)),w=Math.hypot(...k)||1;k=k.map(E=>E/w);for(let E=0;E<80;E++){const T=Array(v).fill(0);for(let x=0;x<v;x++){let A=0;for(let R=0;R<v;R++)A+=_[x][R]*k[R];T[x]=A}w=Math.hypot(...T)||1,k=T.map(x=>x/w)}let S=0;for(let E=0;E<v;E++){let T=0;for(let x=0;x<v;x++)T+=_[E][x]*k[x];S+=k[E]*T}return{value:S,vector:k}},g=h(d),f=d.map((_,v)=>_.map((k,w)=>k-g.value*g.vector[v]*g.vector[w])),p=h(f);return g.vector.map((_,v)=>[_*Math.sqrt(Math.max(g.value,0)),p.vector[v]*Math.sqrt(Math.max(p.value,0))])}function Po(l,a,s){a!==s&&(l[a].includes(s)||l[a].push(s),l[s].includes(a)||l[s].push(a))}function xp(l){const a=new Set,s=[];for(let r=0;r<l.length;r++){if(a.has(r))continue;const u=[],d=[r];for(a.add(r);d.length;){const h=d.pop();u.push(h);for(const g of l[h])a.has(g)||(a.add(g),d.push(g))}s.push(u)}return s}function v0(l,a){const s=l.map(()=>Number.POSITIVE_INFINITY);s[a]=0;const r=[a];for(;r.length;){const u=r.shift();for(const d of l[u])s[d]>s[u]+1&&(s[d]=s[u]+1,r.push(d))}return s}function Sp(l,a){return Math.max(...v0(l,a).filter(s=>Number.isFinite(s)))}function k0(l,a,s,r,u,d,h){if(a.world.motifsPerRun>s.length)throw new Error(`Only ${s.length} motifs are eligible; the run asks for ${a.world.motifsPerRun}.`);const g=d??r.map((Y,z)=>z);if(a.world.regionsPerRun>g.length){const Y=d?"have a picture":"are available";throw new Error(`Only ${g.length} deities ${Y}; the run asks for ${a.world.regionsPerRun}.`)}const f=h??l.shuffle(s.map((Y,z)=>z)).slice(0,a.world.motifsPerRun),p=C9(l,f,g,a,u),_=A9(f,p,a.world.minMotifsPerRegion,u),v=p.map((Y,z)=>p.map((sn,bn)=>{const vn=Xu(u,p[z],p[bn]);return Math.sqrt(Math.max(0,2-2*vn))}));let k=T9(v);for(let Y=0;Y<k.length;Y++)for(let z=0;z<Y;z++){const sn=k[Y][0]-k[z][0],bn=k[Y][1]-k[z][1];sn*sn+bn*bn<1e-8&&(k[Y]=[k[Y][0]+.02*(Y+1),k[Y][1]+.01*(Y+1)])}const w=k.map(Y=>Y[0]),S=k.map(Y=>Y[1]),E=Math.min(...w),T=Math.max(...w),x=Math.min(...S),A=Math.max(...S),R=Math.max(T-E,A-x,1e-6);k=k.map(([Y,z])=>[80+(Y-E)/R*840,70+(z-x)/R*560]);const U=yd.from(k),H=k.map(()=>[]);for(let Y=0;Y<U.triangles.length;Y+=3){const z=U.triangles[Y],sn=U.triangles[Y+1],bn=U.triangles[Y+2];Po(H,z,sn),Po(H,sn,bn),Po(H,bn,z)}let G=xp(H);for(;G.length>1;){let Y=Number.POSITIVE_INFINITY,z=[G[0][0],G[1][0]];for(const sn of G[0])for(let bn=1;bn<G.length;bn++)for(const vn of G[bn]){const ie=1-Xu(u,p[sn],p[vn]);ie<Y&&(Y=ie,z=[sn,vn])}Po(H,z[0],z[1]),G=xp(H)}const J=[...U.hull],an=J.length?J:k.map((Y,z)=>z),nn=Math.max(...an.map(Y=>Sp(H,Y))),fn=an.filter(Y=>Sp(H,Y)===nn),gn=fn[l.int(fn.length)],un=v0(H,gn),F=90,ln=U.voronoi([Math.min(...k.map(Y=>Y[0]))-F,Math.min(...k.map(Y=>Y[1]))-F,Math.max(...k.map(Y=>Y[0]))+F,Math.max(...k.map(Y=>Y[1]))+F]),P=p.map((Y,z)=>{const sn=ln.cellPolygon(z),bn=_[z].map(vn=>s[vn]).sort();return{id:`region-${r[Y]}`,deityId:r[Y],motifIds:bn,centroid:k[z],polygon:sn??[[k[z][0]-30,k[z][1]-30],[k[z][0]+30,k[z][1]-30],[k[z][0]+30,k[z][1]+30],[k[z][0]-30,k[z][1]+30]],neighborRegionIds:[],hopDistance:un[z],targetScore:a.difficulty.targetModel==="potential"?0:y0(un[z],bn.length,a),targetLocked:a.difficulty.targetModel!=="potential"}}),I=P.map(Y=>Y.id);return P.forEach((Y,z)=>{Y.neighborRegionIds=H[z].map(sn=>I[sn]).sort()}),E9(P.map(Y=>Y.polygon),k,(Y,z)=>Xu(u,p[Y],p[z])).forEach((Y,z)=>{P[z].polygon=Y}),{regions:P,worldMotifIds:f.map(Y=>s[Y]).sort()}}function j9(l,a,s,r){const u=_0(l.deities,a),d=new Set(s),h=u.filter(g=>!d.has(l.deities[g].id));return h.length>=r?h:u}function w0(l,a,s,r,u){if(!s.texts.length||r.nTexts!==s.texts.length||r.nMotifs!==s.motifs.length||r.motifText.length!==r.nMotifs*r.nTexts)return null;const d=new Set((a.artifacts??[]).filter(_=>!_.catalogVersion||_.catalogVersion===s.catalogVersion).map(_=>_.textIndex)),h=s.texts.flatMap((_,v)=>d.has(v)?[]:[v]);if(!h.length)throw new Error("Every available text already has an artifact.");const g=h[l.int(h.length)],f=Math.min(r.nMotifs,Math.max(30,u.world.regionsPerRun*u.world.minMotifsPerRegion)),p=s.motifs.map((_,v)=>v).sort((_,v)=>r.motifText[v*r.nTexts+g]-r.motifText[_*r.nTexts+g]||_-v).slice(0,f);return{textId:s.texts[g].id,textIndex:g,motifIndexes:p}}function kt(l,a){const s=new Set(l),r=l.slice();for(const u of a)s.has(u)||(s.add(u),r.push(u));return r}function uc(l,a){const s=kt(l.encounteredMotifIds,a);return s.length===l.encounteredMotifIds.length?l:{...l,encounteredMotifIds:s}}function ps(l,a){const s=kt(l.seenMotifIds??[],a);return s.length===(l.seenMotifIds??[]).length?l:{...l,seenMotifIds:s}}function b0(l){return{...l,drawPileIds:l.drawPileIds.slice(),discardPileIds:l.discardPileIds.slice(),playedPileIds:l.playedPileIds.slice(),visibleHandIds:l.visibleHandIds.slice(),selectedIds:l.selectedIds.slice()}}function _d(l,a,s){const r=s.combat.visibleHandSize;for(;l.visibleHandIds.length<r;){if(l.drawPileIds.length===0){if(!s.combat.reshuffleOnEmpty)break;const d=l.discardPileIds.concat(l.playedPileIds);if(d.length===0)break;l.drawPileIds=a.shuffle(d),l.discardPileIds=[],l.playedPileIds=[]}const u=l.drawPileIds.pop();if(!u)break;l.visibleHandIds.push(u)}}function vd(l){const a=new Set(l.conqueredRegionIds);return a.size===0?[l.startRegionId]:l.regions.filter(s=>!a.has(s.id)&&s.neighborRegionIds.some(r=>a.has(r))).map(s=>s.id)}function Si(l,a,s){const r={},u=a.similarities,d=a.motifIndex.get(l.id);if(u&&d!=null)for(const g of Qn.notes){if(g.domain!=="affinity"||!g.god)continue;const f=a.deityIndex.get(g.god);f!=null&&(r[g.god]=u.motifDeity[d*u.nDeities+f]/u.scale)}const h=r0(l.rank);return{id:l.id,rank:l.rank,suit:l.suit,wild:l.wild,chips:s?P7(Qn.notes,s,h):h,domainText:`${l.name} ${l.description}`.toLocaleLowerCase(),affinities:r}}function N9(l,a){if(l.battle)return{hands:l.battle.handsRemaining,discards:l.battle.discardsRemaining};const s=rc(Qn.notes,a,l);return{hands:l.configSnapshot.combat.baseHands+l.allocationSnapshot.hands+s.hands,discards:l.configSnapshot.combat.baseDiscards+l.allocationSnapshot.discards+s.discards}}function kd(l,a,s){const r=new Set(a.discoveredMotifIds),u=l.deckMotifIds.filter(h=>r.has(h)&&s.motifIndex.has(h)).map(h=>{const g=s.motifs[s.motifIndex.get(h)];return Si(g,s,a)});if(u.length===0)return null;const d=l.configSnapshot.combat.baseHands+l.allocationSnapshot.hands+rc(Qn.notes,a,l).hands;return g0(u,Pi,l.configSnapshot.combat.maxCardsPerPlay,(h,g,f)=>md(Qn.notes,a,h,l,g,f))*d}function aa(l,a,s){const r=l.configSnapshot.difficulty;if(r.targetModel!=="potential")return l;const u=new Set(vd(l)),d=l.regions.filter(v=>u.has(v.id)&&v.targetLocked!==!0).sort((v,k)=>v.hopDistance-k.hopDistance||v.id.localeCompare(k.id));if(d.length===0)return l;const h=l.configSnapshot.combat.baseHands+l.allocationSnapshot.hands+rc(Qn.notes,a,l).hands,g=l.deckMotifIds.flatMap(v=>{const k=s.motifs[s.motifIndex.get(v)??-1];return k?[Si(k,s)]:[]}),f=g0(g,Pi,l.configSnapshot.combat.maxCardsPerPlay,(v,k,w)=>md(Qn.notes,a,v,l,k,w)),p=e9(f*h,d.length,r.waveLow,r.waveHigh,r.scoreStep);if(p.length!==d.length)return l;const _=new Map(d.map((v,k)=>[v.id,p[k]]));return{...l,regions:l.regions.map(v=>{const k=_.get(v.id);return k===void 0?v:{...v,targetScore:k,targetLocked:!0}})}}function M9(l,a,s,r,u,d){const h=Dp(a);if(h.length)throw new Error(h.join(" "));const g=$7(l.trim()||"glass"),f=r.deities.map(G=>G.id),p=w0(g,s,r,u,a),{regions:_,worldMotifIds:v}=k0(g,a,r.motifs.map(G=>G.id),f,u,_0(r.deities,d),p==null?void 0:p.motifIndexes),k=_.find(G=>G.hopDistance===0);if(!k)throw new Error("World generation did not choose a home region.");const w=a.world.startRegionInitiallyConquered?[k.id]:[];let E=g.shuffle(k.motifIds.slice()).slice(0,a.deck.startingSize);if(E.length<a.deck.startingSize){const G=g.shuffle(v.filter(J=>!E.includes(J)));E=E.concat(G.slice(0,a.deck.startingSize-E.length))}const T=s.alchemyReserve??[];E=kt(E,T);const x={...s,alchemyReserve:[],statistics:{...s.statistics,runs:s.statistics.runs+1}},A=ld(Qn.notes,"new-run"),R={schemaVersion:1,catalogVersion:r.catalogVersion,seed:l.trim()||"glass",rngState:g.state(),configSnapshot:a,allocationSnapshot:{...s.upgradeAllocation},worldMotifIds:v,anchorTextId:p==null?void 0:p.textId,anchorTextIndex:p==null?void 0:p.textIndex,runArtifactIds:[],regions:_,startRegionId:k.id,conqueredRegionIds:w,mapsConquered:0,deckMotifIds:E,pendingAlchemyIds:T,livesRemaining:a.combat.baseLives+s.upgradeAllocation.lives,status:"active",handsPlayed:0,seenMotifIds:[],powers:[],powersOff:[],pendingOffer:A==null?void 0:A.id},U=a.world.startRegionInitiallyConquered&&!(A!=null&&A.claimsStart)?gs(R,k.deityId,Qn.notes):R,H=A!=null&&A.claimsStart?{...U,deckMotifIds:kt(gd(U,k),T)}:U;return{run:aa(H,x,r),profile:x}}function q9(l,a,s){const r=a.regions.find(u=>u.id===s);return r?{run:ps(a,r.motifIds),profile:uc(l,r.motifIds)}:{run:a,profile:l}}function od(l,a,s,r,u){var _;const d=aa(l,a,u);if(d.status!=="active"||d.pendingRewardRegionId||((_=d.battle)==null?void 0:_.status)==="active")return{run:d,profile:a};if(!vd(d).includes(s))return{run:d,profile:a};const h=d.regions.find(v=>v.id===s);if(!h)return{run:d,profile:a};const g=la(d.rngState),f=rc(Qn.notes,a,d),p={regionId:s,drawPileIds:g.shuffle(l.deckMotifIds),discardPileIds:[],playedPileIds:[],visibleHandIds:[],selectedIds:[],handsRemaining:r.combat.baseHands+l.allocationSnapshot.hands+f.hands,discardsRemaining:r.combat.baseDiscards+l.allocationSnapshot.discards+f.discards,accumulatedScore:0,targetScore:h.targetScore,status:"active",game:"poker"};return _d(p,g,r),{run:ps({...d,rngState:g.state(),battle:p,lastPlay:void 0},p.visibleHandIds),profile:uc(a,p.visibleHandIds)}}function Q9(l,a,s,r,u){var _,v,k,w,S;if(l.deckMotifIds.length<1||l.deckMotifIds.length>l.configSnapshot.combat.visibleHandSize)return null;let d=od(l,a,s,l.configSnapshot,r);if(((_=d.run.battle)==null?void 0:_.status)!=="active")return null;const h=d.run.battle.targetScore;let g=0,f;const p=[];for(;((v=d.run.battle)==null?void 0:v.status)==="active";){const E=ta(us(d.run),d.profile,r,u);if(E.run.handsPlayed===d.run.handsPlayed)return null;if(d=E,g+=1,!f&&((k=d.run.lastPlay)==null?void 0:k.kind)==="play"&&(f=d.run.lastPlay),p.push(((w=d.run.battle)==null?void 0:w.accumulatedScore)??0),d.run.pendingRewardRegionId){const T=((S=d.run.battle)==null?void 0:S.accumulatedScore)??0;return{run:{...d.run,lastPlay:void 0,rush:{hands:g,score:T,target:h,play:f,totals:p}},profile:d.profile}}}return null}function K9(l,a,s,r){var k,w,S,E;const u=l.battle;if(!u||u.status!=="active"||u.handsRemaining<1||l.deckMotifIds.length<1||l.deckMotifIds.length>l.configSnapshot.combat.visibleHandSize)return null;const d=u.visibleHandIds.slice().sort().join("\0"),h=l.deckMotifIds.slice().sort().join("\0");if(d!==h)return null;let g={run:l,profile:a};const f=u.targetScore;let p=0,_;const v=[];for(;((k=g.run.battle)==null?void 0:k.status)==="active";){const T=ta(us(g.run),g.profile,s,r);if(T.run.handsPlayed===g.run.handsPlayed||(g=T,p+=1,!_&&((w=g.run.lastPlay)==null?void 0:w.kind)==="play"&&(_=g.run.lastPlay),v.push(((S=g.run.battle)==null?void 0:S.accumulatedScore)??0),g.run.pendingRewardRegionId))return null}return((E=g.run.battle)==null?void 0:E.status)!=="lost"?null:{run:{...g.run,lastPlay:void 0,rush:{hands:p,score:g.run.battle.accumulatedScore,target:f,play:_,totals:v,lost:!0}},profile:g.profile}}const wd=6;function O9(l,a,s,r){var f,p,_,v,k,w;if(l.deckMotifIds.length<=wd||((f=l.battle)==null?void 0:f.status)!=="active")return null;let u={run:l,profile:a};const d=l.battle.targetScore,h=[],g=[];for(;((p=u.run.battle)==null?void 0:p.status)==="active";){const S=ta(us(u.run),u.profile,s,r);if(S.run.handsPlayed===u.run.handsPlayed||((_=S.run.lastPlay)==null?void 0:_.kind)!=="play")return null;u=S,h.push(S.run.lastPlay),g.push(((v=S.run.battle)==null?void 0:v.accumulatedScore)??0)}return{...u,run:{...u.run,lastPlay:void 0,rush:{hands:h.length,score:((k=u.run.battle)==null?void 0:k.accumulatedScore)??0,target:d,plays:h,totals:g,lost:((w=u.run.battle)==null?void 0:w.status)==="lost"}}}}function us(l){const a=l.battle;if(!a||a.status!=="active")return l;const s=Math.max(1,l.configSnapshot.combat.maxCardsPerPlay);return{...l,battle:{...a,selectedIds:a.visibleHandIds.slice(0,s)}}}function z9(l,a){const s=l.battle;if(!s||s.status!=="active"||!s.visibleHandIds.includes(a))return l;const r=s.selectedIds.includes(a)?s.selectedIds.filter(u=>u!==a):s.selectedIds.length>=l.configSnapshot.combat.maxCardsPerPlay?s.selectedIds:s.selectedIds.concat(a);return{...l,battle:{...s,selectedIds:r}}}function Ep(l,a,s){if(s.status==="won")return{run:{...l,battle:s,pendingRewardRegionId:s.regionId},profile:a};const r=l.livesRemaining-1,u=r<=0;return{run:{...l,battle:{...s,status:"lost"},livesRemaining:r,status:u?"lost":"active"},profile:u?{...a,statistics:{...a.statistics,losses:a.statistics.losses+1}}:a}}function x0(l,a){var u;const s=new Set,r=new Set;for(const d of l.artifacts??[])d.catalogVersion&&d.catalogVersion!==a.catalogVersion||((u=a.texts[d.textIndex])==null?void 0:u.id)===d.textId&&(s.add(d.textIndex),r.add(d.textId));return{discoveredTextIndexes:s,artifactTextIds:r}}function ta(l,a,s,r){const u=l.battle;if(!u||u.status!=="active"||u.selectedIds.length<1||u.handsRemaining<1)return{run:l,profile:a};const d=l.configSnapshot,h=u.selectedIds.slice(),g=h.map(U=>{const H=s.motifs[s.motifIndex.get(U)];return Si(H,s,a)}),f=E0(g,a,u.game,l),p=d.texts.similarityThreshold??s.textThreshold,_=f0(s,r,{playedMotifIds:h,discoveredTextIds:new Set(a.discoveredTextIds),...x0(a,s),config:d,threshold:p,discoverNew:!1}),v=f.pokerSubtotal+_.bonus,k=la(l.rngState),w=b0(u);w.visibleHandIds=w.visibleHandIds.filter(U=>!h.includes(U)),w.playedPileIds=w.playedPileIds.concat(h),w.selectedIds=[],w.accumulatedScore+=v,w.handsRemaining-=1;const S=w.accumulatedScore>=w.targetScore;S||_d(w,k,d),w.status=S?"won":"active";const E=kt(a.discoveredMotifIds,h),T=kt(a.discoveredTextIds,_.newlyUnlockedIds);let x=uc({...a,discoveredMotifIds:E,discoveredTextIds:T,encounteredMotifIds:kt(a.encounteredMotifIds,h)},w.visibleHandIds);const A={kind:"play",stamp:Date.now(),motifIds:h,categoryLabel:f.label,scoringCardIds:f.scoringCardIds,patternCardIds:f.patternCardIds,baseChips:f.baseChips,cardChips:f.cardChips,multiplier:f.multiplier,pokerSubtotal:f.pokerSubtotal,skillChips:f.skillChips,skillLabel:f.skillLabel,modifiers:f.modifiers,folkloreBonus:_.bonus,folklore:_.hits,total:v,discoveredMotifIds:h.filter(U=>!a.discoveredMotifIds.includes(U)),unlockedTextIds:_.newlyUnlockedIds};let R=ps({...l,rngState:k.state(),battle:w,handsPlayed:l.handsPlayed+1,lastPlay:A},[...h,...w.visibleHandIds]);return S||w.handsRemaining<=0?Ep(R,x,w):{run:R,profile:x}}function Cp(l,a){const s=l.battle,r=l.configSnapshot;if(!s||s.status!=="active"||s.selectedIds.length<1||s.discardsRemaining<1)return{run:l,profile:a};const u=s.selectedIds.slice(),d=la(l.rngState),h=b0(s);return h.visibleHandIds=h.visibleHandIds.filter(g=>!u.includes(g)),h.discardPileIds=h.discardPileIds.concat(u),h.selectedIds=[],h.discardsRemaining-=1,_d(h,d,r),{run:ps({...l,rngState:d.state(),battle:h,lastPlay:{kind:"discard",motifIds:u}},h.visibleHandIds),profile:uc(a,h.visibleHandIds)}}function Ap(l){var a;return((a=l.battle)==null?void 0:a.status)!=="lost"||l.status==="lost"?{...l,battle:void 0}:{...l,battle:void 0}}function S0(l){const a=l.regions.find(d=>d.id===l.pendingRewardRegionId),s=a?a.motifIds.filter(d=>!l.deckMotifIds.includes(d)):[],u=(l.configSnapshot.deck.reward??"either")==="add"||(l.mapsConquered??0)<2||l.deckMotifIds.length<=l.configSnapshot.deck.minimumSize?[]:l.deckMotifIds.slice();return{canAdd:s.length>0,canRemove:u.length>0,addableIds:s,removableIds:u}}const ec=10;function bd(l,a){const s=new Set(a.discoveredMotifIds);return l.worldMotifIds.filter(r=>!s.has(r))}function R9(l,a,s,r){if(l.status!=="won")return null;const u=new Set(bd(l,a)),d=[];for(const g of s){if(!u.has(g)||d.includes(g))return null;d.push(g)}if(d.length>ec)return null;const h=d.filter(g=>!l.deckMotifIds.includes(g));if(r){if(!h.includes(r))return null}else if(h.length>0)return null;return{revealIds:d,keepId:r}}function D9(l,a,s,r,u,d,h){var U;const g=R9(l,a,u,d);if(!g)return{run:l,profile:a};const f=l.mapsConquered??1,p=sc({...a,discoveredMotifIds:kt(a.discoveredMotifIds,g.revealIds),encounteredMotifIds:kt(a.encounteredMotifIds,g.revealIds)},f),_=g.keepId?l.deckMotifIds.concat(g.keepId):l.deckMotifIds.slice(),v=la(l.rngState),k=kt(l.metDeityIds??[],l.regions.map(H=>H.deityId)),w=w0(v,p,s,r,l.configSnapshot),{regions:S,worldMotifIds:E}=k0(v,l.configSnapshot,s.motifs.map(H=>H.id),s.deities.map(H=>H.id),r,j9(s,h,k,l.configSnapshot.world.regionsPerRun),w==null?void 0:w.motifIndexes),T=S.find(H=>H.hopDistance===0);if(!T)throw new Error("World generation did not choose a home region.");const x=l.configSnapshot.world.startRegionInitiallyConquered?[T.id]:[];let A=ps({...l,rngState:v.state(),worldMotifIds:E,anchorTextId:w==null?void 0:w.textId,anchorTextIndex:w==null?void 0:w.textIndex,regions:S,startRegionId:T.id,conqueredRegionIds:x,deckMotifIds:_,status:"active",battle:void 0,pendingRewardRegionId:void 0,lastPlay:void 0,rush:void 0,mapsConquered:f,metDeityIds:k,pendingOffer:(U=ld(Qn.notes,"new-map"))==null?void 0:U.id},g.revealIds);const R=ld(Qn.notes,"new-map");return l.configSnapshot.world.startRegionInitiallyConquered&&!(R!=null&&R.claimsStart)&&(A=gs(A,T.deityId,Qn.notes)),{run:aa(A,p,s),profile:p}}function Y9(l,a,s,r,u){var k;if((a.bestMapsConquered??0)<2)return{run:l,profile:a};const d=l&&l.status!=="lost"?l:null,h=[...(d==null?void 0:d.deckMotifIds)??[],...a.alchemyReserve??[]],g=Vp(r,s,a,u,h);if(!g)return{run:l,profile:a};const f={...a.emojiInventory};for(const w of u)f[w]=(f[w]??0)-1;const p={...a,emojiInventory:f};if(!d)return{run:l,profile:{...p,alchemyReserve:[...a.alchemyReserve??[],g]}};const _=d.pendingOffer==="starting-territory",v=((k=d.battle)==null?void 0:k.status)==="active"?{...d.battle,drawPileIds:[...d.battle.drawPileIds,g]}:d.battle;return{run:{...d,deckMotifIds:[...d.deckMotifIds,g],battle:v,pendingAlchemyIds:_?[...d.pendingAlchemyIds??[],g]:d.pendingAlchemyIds},profile:p}}function Wo(l,a,s,r,u,d){var A,R,U,H;if(!l.pendingRewardRegionId||l.status!=="active")return{run:l,profile:a};const h=S0(l);let g=l.deckMotifIds.slice(),f=a.emojiInventory;if(s.type==="add"){if(!h.addableIds.includes(s.motifId))return{run:l,profile:a};g=g.concat(s.motifId)}else if(s.type==="remove"){if(!h.removableIds.includes(s.motifId)||!ic(d,s.motifId,a.bestMapsConquered??0).includes(s.emojiId))return{run:l,profile:a};g=g.filter(G=>G!==s.motifId),f={...a.emojiInventory,[s.emojiId]:(((A=a.emojiInventory)==null?void 0:A[s.emojiId])??0)+1}}else if(s.type==="combine"){if((l.configSnapshot.deck.reward??"either")!=="either"||(l.mapsConquered??0)<1||!r)return{run:l,profile:a};if(s.motifIds.some(J=>!g.includes(J)))return{run:l,profile:a};const G=m0(r,s.motifIds,new Set(g));if(!G)return{run:l,profile:a};g=g.concat(G)}else if(h.canAdd||h.removableIds.some(G=>ic(d,G,a.bestMapsConquered??0).length>0))return{run:l,profile:a};const p=kt(l.conqueredRegionIds,[l.pendingRewardRegionId]),_=p.length===l.regions.length,v=_?(l.mapsConquered??0)+1:l.mapsConquered??0,k=l.regions.find(G=>G.id===l.pendingRewardRegionId),w=gs(l,k==null?void 0:k.deityId,Qn.notes),S=f===a.emojiInventory?a:{...a,emojiInventory:f},E=sc(_?ev({...w,deckMotifIds:g},S,r,u):S,v),T=_&&(((R=E.artifacts)==null?void 0:R.length)??0)>(((U=a.artifacts)==null?void 0:U.length)??0)?(H=E.artifacts)==null?void 0:H.at(-1):void 0,x={...w,deckMotifIds:g,conqueredRegionIds:p,pendingRewardRegionId:void 0,battle:void 0,mapsConquered:v,runArtifactIds:T?[...l.runArtifactIds??[],T.id]:l.runArtifactIds,status:_?"won":"active",lastPlay:void 0,rush:void 0};return{run:r?aa(x,E,r):x,profile:E}}function I9(l,a,s,r){const u=l.battle;if(!u||u.selectedIds.length<1||u.selectedIds.some(f=>!a.discoveredMotifIds.includes(f)))return null;const d=u.selectedIds.map(f=>{const p=s.motifs[s.motifIndex.get(f)];return Si(p,s,a)}),h=E0(d,a,u.game,l),g=f0(s,r,{playedMotifIds:u.selectedIds,discoveredTextIds:new Set(a.discoveredTextIds),...x0(a,s),config:l.configSnapshot,threshold:l.configSnapshot.texts.similarityThreshold??s.textThreshold,discoverNew:!1});return{poker:h,folkloreBonus:g.bonus,folklore:g.hits}}function E0(l,a,s,r){s&&s!=="poker"&&console.warn(`No ruleset named ${s}; this fight uses poker.`);const u=Pp(l,Pi),d=l.filter(p=>u.scoringCardIds.includes(p.id)),h=Fp(l,u.category,Pi).map(p=>({title:p.title,chips:p.chips,mult:p.mult,state:"on"})),g=[...h,...d0(Qn.notes,a,u.category,r,d,l)],f=[...h,...md(Qn.notes,a,u.category,r,d,l)];return{...Wp(u,f,g),label:r7(u.label,h),patternCardIds:c7(l,u.category)}}const H9=12,U9=2;function xd(l,a){const s=Wl(l);if(!s||!td(s.name))return!1;const r=a[s.name];if(r==null||Number.isNaN(r))return!1;switch(s.op){case"==":return r===s.value;case"!=":return r!==s.value;case">=":return r>=s.value;case"<=":return r<=s.value;case">":return r>s.value;case"<":return r<s.value;default:return!1}}function B9(l,a){return l.label.trim()?xd(l.label,a):l.glyph===">"}function Tp(l,a,s,r){var v;const u=new Map(l.map(k=>[k.id,k]));let d=u.has(a)?a:"start";u.has(d)||(d=((v=l[0])==null?void 0:v.id)??a);const h=new Set;for(let k=0;k<H9&&!h.has(d);k+=1){h.add(d);const w=u.get(d);if(!w)break;const S=w.edges.find(E=>E.glyph===">"&&B9(E,s)&&u.has(E.to));if(!S)break;d=S.to}const g=u.get(d)??null,f=g&&(g.show==="dialog"||g.show==="coach"||g.show==="page")&&!r.includes(g.id)?g:null,p=((f==null?void 0:f.edges)??[]).filter(k=>k.glyph==="?").map(k=>({to:k.to,label:k.label||k.to})),_=((g==null?void 0:g.edges)??[]).filter(k=>k.glyph==="+"&&k.label.trim()!==""&&xd(k.label,s)&&!r.includes(k.to)&&u.has(k.to)).slice(0,U9).map(k=>{var w;return{id:k.to,title:((w=u.get(k.to))==null?void 0:w.title)||k.to}});return{beat:d,stage:f,choices:p,banners:_}}function $u(l){return new Map(l.map((a,s)=>[a.id,s]))}async function L9(){return null}async function V9(l="./"){const a=l.endsWith("/")?l:`${l}/`,s=await fetch(`${a}data/catalog.json`);if(!s.ok)throw new Error("Catalog missing. From the project folder, run: python3 scripts/build_catalog.py");const r=await s.json(),u=await fetch(`${a}data/similarities.bin`);if(!u.ok)throw new Error("Similarity table missing. Rebuild the catalog.");const d=await u.arrayBuffer(),h=new DataView(d);if(String.fromCharCode(h.getUint8(0),h.getUint8(1),h.getUint8(2),h.getUint8(3))!=="GBG1")throw new Error("Similarity table has an unexpected header.");const f=h.getUint32(8,!0),p=h.getUint32(12,!0),_=h.getUint32(16,!0),v=h.getUint32(20,!0);if(f!==r.motifs.length||p!==r.deities.length||_!==r.texts.length)throw new Error("Catalog and similarity table are out of date with each other.");let k=28;const w=E=>{const T=new Int16Array(d,k,E);return k+=E*2,T},S={nMotifs:f,nDeities:p,nTexts:_,scale:v,motifDeity:w(f*p),motifText:w(f*_),deityDeity:w(p*p),deityText:k+p*_*2<=d.byteLength?w(p*_):void 0,motifMotif:k+f*f*2<=d.byteLength?w(f*f):void 0};return{tables:S,catalog:{...r,motifIndex:$u(r.motifs),deityIndex:$u(r.deities),textIndex:$u(r.texts),similarities:S}}}const G9="glass-bead-roguelite",Pe="saves";function ys(){return new Promise((l,a)=>{const s=indexedDB.open(G9,1);s.onerror=()=>a(s.error),s.onupgradeneeded=()=>{s.result.createObjectStore(Pe)},s.onsuccess=()=>l(s.result)})}function ds(l){return new Promise((a,s)=>{l.onsuccess=()=>a(l.result),l.onerror=()=>s(l.error)})}async function Sd(l){const a=await ys(),s=await ds(a.transaction(Pe).objectStore(Pe).get(l));return a.close(),s??null}async function Ed(l,a){const s=await ys();await ds(s.transaction(Pe,"readwrite").objectStore(Pe).put(a,l)),s.close()}async function X9(l){const a=await ys();await ds(a.transaction(Pe,"readwrite").objectStore(Pe).delete(l)),a.close()}function $9(){return Sd("profile")}function Fl(l){return Ed("profile",l)}function Z9(){return Sd("run")}function Zu(l){return Ed("run",l)}function J9(l,a){return Ed(`artifact:${l}`,a)}function Cd(l){return Sd(`artifact:${l}`)}function F9(l){return X9(`artifact:${l}`)}async function P9(){const l=await ys(),s=(await ds(l.transaction(Pe).objectStore(Pe).getAllKeys())).filter(r=>String(r).startsWith("artifact:"));if(s.length>0){const r=l.transaction(Pe,"readwrite").objectStore(Pe);await Promise.all(s.map(u=>ds(r.delete(u))))}l.close()}async function W9(l,a){const s=[...new Set((l.artifacts??[]).map(u=>u.id))],r=await Promise.all(s.map(async u=>({id:u,blob:await Cd(u)})));return eE(l,a,r.filter(u=>u.blob instanceof Blob))}function nE(l){let a="";for(let s=0;s<l.length;s+=32768)a+=String.fromCharCode(...l.subarray(s,s+32768));return btoa(a)}async function eE(l,a,s){const r=await Promise.all(s.map(async({id:u,blob:d})=>({id:u,type:d.type,base64:nE(new Uint8Array(await d.arrayBuffer()))})));return JSON.stringify({format:"glass-bead-save",version:2,profile:l,run:a,artifactImages:r},null,2)}function tE(l){const a=JSON.parse(l);if(!a||typeof a!="object"||Array.isArray(a))throw new Error("This is not a valid Glass Bead save.");const s=a;if(s.format!==void 0&&(s.format!=="glass-bead-save"||s.version!==2))throw new Error("This save format is not supported.");if(!s.profile||typeof s.profile!="object"||Array.isArray(s.profile)||s.run!=null&&(typeof s.run!="object"||Array.isArray(s.run)))throw new Error("This save is missing a valid profile or run.");const r=s.profile;if(!Array.isArray(r.discoveredMotifIds)||!Array.isArray(r.encounteredMotifIds)||!Array.isArray(r.discoveredTextIds)||!r.upgradeAllocation||!r.statistics||r.artifacts!==void 0&&!Array.isArray(r.artifacts))throw new Error("This save has an invalid profile.");if(s.format==="glass-bead-save"&&!Array.isArray(s.artifactImages))throw new Error("This save has an invalid image collection.");const u=s.artifactImages??[];if(!Array.isArray(u))throw new Error("This save has an invalid image collection.");const d=new Set((r.artifacts??[]).map(f=>f==null?void 0:f.id)),h=new Set,g=u.map(f=>{if(!f||typeof f!="object")throw new Error("This save has an invalid artifact image.");const{id:p,type:_,base64:v}=f;if(typeof p!="string"||!d.has(p)||h.has(p)||typeof _!="string"||typeof v!="string"||!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(v))throw new Error("This save has an invalid artifact image.");h.add(p);const k=atob(v),w=Uint8Array.from(k,S=>S.charCodeAt(0));return{id:p,blob:new Blob([w],{type:_})}});return{profile:r,run:s.run??null,images:g}}async function iE(l,a,s){const r=await ys();try{await new Promise((u,d)=>{const h=r.transaction(Pe,"readwrite");h.oncomplete=()=>u(),h.onabort=()=>d(h.error??new Error("Could not import the save.")),h.onerror=()=>d(h.error??new Error("Could not import the save."));try{const g=h.objectStore(Pe);g.put(l,"profile"),g.put(a,"run");for(const{id:f,blob:p}of s)g.put(p,`artifact:${f}`)}catch(g){h.abort(),d(g)}})}finally{r.close()}}function C0(l,a){const s=a.counters??{},r=l.filter(f=>f.voice==="self"&&f.body.trim()&&(a.on?f.on===a.on:!f.on)),u=f=>!f.test||xd(f.test,s),d=r.filter(f=>f.test&&u(f)),h=r.filter(f=>!f.test&&u(f)),g=d[0]??h[0];return g?Fi(g.body):null}function lE(l,a){const s=[];return l&&s.push(`${l>0?"+":""}${l} chips`),a&&s.push(`${a>0?"+":""}${a} multiplier`),s.join(", ")||"No change"}function aE(l){const a=/^Flush of (\d+)$/.exec(l);if(a)return`${a[1]} cards share a suit. A short flush adds part of a full flush before the hand is multiplied.`;const s=/^Straight of (\d+)$/.exec(l);return s?`${s[1]} cards run in sequence. A short straight adds part of a full straight before the hand is multiplied.`:null}function sE(l){return Fi(l.body).replace(/\s+/g," ").trim()}function oE(l,a,s){const r=a.flatMap(u=>{const d=fs(l,u);if(d==null||d<=0)return[];const h=s.get(u.id)??"A motif";if(l.domain!=="words")return[h];const g=u.domainText??"",f=(l.words??[]).filter(p=>g.includes(p.toLocaleLowerCase()));return[f.length?`${h} (${f.join(", ")})`:h]});return r.length?` This hand: ${r.join("; ")}.`:""}function cE(l){const a=l.names??new Map,s=l.scoring??[],r=[];for(const u of l.modifiers??[]){if(u.state!=="on")continue;const d=aE(u.title),h=d?void 0:l.notes.find(p=>p.kind==="skill"&&p.title===u.title),g=!!(h&&(h.domain||h.suit||h.rank)),f=d??(h?`${sE(h)}${g?oE(h,s,a):""}`:"");r.push({title:u.title,gift:lE(u.chips,u.mult),how:f})}for(const u of l.folklore??[])if(u.newlyDiscovered)r.push({title:u.name,gift:"Unlocked",how:"This text joins the library. It adds no points yet. On a later hand, motifs close to it add points after the hand is multiplied."});else if(u.bonus>0){const d=u.resonantCount===1?"1 played motif is":`${u.resonantCount} played motifs are`;r.push({title:u.name,gift:`+${u.bonus}`,how:`${d} close to this text. These points are added after the hand is multiplied.`})}return r}const jp=new Map;function rE(l){let a=0,s=0,r=0,u=0;for(let d=0;d<l.length;d+=4)l[d+3]<16||(a+=l[d],s+=l[d+1],r+=l[d+2],u+=1);return u===0?null:`rgb(${Math.round(a/u)}, ${Math.round(s/u)}, ${Math.round(r/u)})`}function uE(l){const a=jp.get(l);if(a)return a;const s=new Promise(r=>{const u=new Image;u.crossOrigin="anonymous",u.onload=()=>{const h=document.createElement("canvas");h.width=24,h.height=24;const g=h.getContext("2d",{willReadFrequently:!0});if(!g){r(null);return}g.drawImage(u,0,0,24,24);try{r(rE(g.getImageData(0,0,24,24).data))}catch{r(null)}},u.onerror=()=>r(null),u.src=l});return jp.set(l,s),s}function cd(l){let a=1/0,s=1/0,r=-1/0,u=-1/0;for(const[d,h]of l)a=Math.min(a,d),s=Math.min(s,h),r=Math.max(r,d),u=Math.max(u,h);return{x:a,y:s,width:Math.max(r-a,1),height:Math.max(u-s,1)}}function dE(l,a,s){const r=Math.max(l.width/Math.max(a,1),l.height/Math.max(s,1)),u=a*r,d=s*r;return{x:l.x+(l.width-u)/2,y:l.y+(l.height-d)/2,width:u,height:d}}function hE(l){let a=0,s=0,r=0;for(let u=0;u<l.length;u+=1){const[d,h]=l[u],[g,f]=l[(u+1)%l.length],p=d*f-g*h;a+=p,s+=(d+g)*p,r+=(h+f)*p}return a===0?l[0]??[0,0]:[s/(3*a),r/(3*a)]}function fE(l,a){return{x:l.x-a,y:l.y-a,width:l.width+a*2,height:l.height+a*2}}function gE(l){return new Promise(a=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>a(s),s.onerror=()=>a(null),s.src=l})}function Np(l,a){l.beginPath(),a.forEach(([s,r],u)=>{u===0?l.moveTo(s,r):l.lineTo(s,r)}),l.closePath()}async function mE(l){const a=(r,u)=>new Promise(d=>{l.toBlob(h=>d(h),r,u)}),s=await a("image/webp",.68);return s&&s.type==="image/webp"?s:a("image/jpeg",.68)}async function pE(l,a=720){const s=l.flatMap(w=>w.region.polygon);if(s.length===0)return null;const r=s.map(w=>w[0]),u=s.map(w=>w[1]),d=Math.min(...r)-24,h=Math.min(...u)-24,g=Math.max(...r)-d+24,f=Math.max(...u)-h+24,p=a/Math.max(g,f),_=document.createElement("canvas");_.width=Math.max(1,Math.round(g*p)),_.height=Math.max(1,Math.round(f*p));const v=_.getContext("2d");if(!v)return null;v.fillStyle="#0d0c0b",v.fillRect(0,0,_.width,_.height),v.setTransform(p,0,0,p,-d*p,-h*p);const k=await Promise.all(l.map(async w=>w.url?gE(w.url):null));return l.forEach((w,S)=>{const E=k[S];if(v.save(),Np(v,w.region.polygon),v.clip(),E){const T=cd(w.region.polygon),x=dE(T,E.naturalWidth,E.naturalHeight);v.drawImage(E,x.x,x.y,x.width,x.height)}else v.fillStyle="#24362c",v.fill();v.restore()}),v.lineJoin="round",v.lineWidth=3.2,v.strokeStyle="#000",l.forEach(w=>{Np(v,w.region.polygon),v.stroke()}),mE(_)}function yE(l){const a=new Map;for(const r of l){const u=r.note.hands?"hands":r.note.discards?"discards":r.note.domain?`domain:${r.note.id}`:r.note.suit?`suit:${r.note.suit}`:r.note.rank?`rank:${r.note.rank}`:r.note.when||"any";a.set(u,[...a.get(u)??[],r])}const s=["hands","discards","any",...Pi.map(r=>r.id).reverse()];return[...a.entries()].sort(([r],[u])=>{const d=s.indexOf(r),h=s.indexOf(u);return(d<0?s.length:d)-(h<0?s.length:h)}).map(([r,u])=>{var d;return{key:r,label:r==="hands"?"Extra hands":r==="discards"?"Extra discards":r==="any"?"All hands":r.startsWith("domain:")?u[0].note.title:r.startsWith("suit:")?`${r.slice(5)} cards`:r.startsWith("rank:")?`Rank ${r.slice(5)}`:((d=Pi.find(h=>h.id===r))==null?void 0:d.label)??r,powers:u,chips:u.reduce((h,g)=>h+(g.on?g.note.chips??0:0),0),card:u.reduce((h,g)=>Math.max(h,g.on?g.note.card??0:0),0),mult:u.reduce((h,g)=>h+(g.on?g.note.mult??0:0),0),hands:u.reduce((h,g)=>h+(g.on?g.note.hands??0:0),0),discards:u.reduce((h,g)=>h+(g.on?g.note.discards??0:0),0)}})}const A0={Cups:"♥",Pentacles:"♦",Swords:"♠",Wands:"♣"};function cc(l){return l.wild?`${l.rank} · wild`:`${l.rank}${A0[l.suit??"Cups"]}`}function _E(l){return l==="Page"?"P":l==="Knight"?"Kn":l==="Queen"?"Q":l==="King"?"K":l}function vE(l){return A0[l]}function T0(l,a){return`${l}${a}`}function ia(l,a){return`./pictures/${a}`}function Ji(l,a){if(l){if(l.image)return l.image;if(a!=null&&a.has(l.id))return`deities/${l.id}.png`}}const $i=["home","offer","map","battle","rush","reward","outcome","self","deck","alchemy","artifacts","encyclopedia","progression"];function Mp(l){const a=new Set($i),s=(l??[]).filter((u,d,h)=>a.has(u)&&h.indexOf(u)===d);if(s.length===0)return[...$i];const r=s.slice();for(const u of $i){if(r.includes(u))continue;const d=$i.indexOf(u);let h=r.length;for(let g=d-1;g>=0;g-=1){const f=r.indexOf($i[g]);if(f>=0){h=f+1;break}}if(h===r.length)for(let g=d+1;g<$i.length;g+=1){const f=r.indexOf($i[g]);if(f>=0){h=f;break}}r.splice(h,0,u)}return r}function kE(l,a,s){if(a===s||!l.includes(a)||!l.includes(s))return[...l];const r=l.filter(u=>u!==a);return r.splice(r.indexOf(s),0,a),r}function j0(l,a,s){const r=new Set(a.discoveredMotifIds);return{kind:"score",score:kd(l,a,s),uncertain:l.deckMotifIds.some(u=>!r.has(u))}}function qp(l,a,s){return`${l} ${l===1?a:s}`}function wE(l,a){const s=N9(l,a);return`${qp(s.hands,"hand","hands")}, ${qp(s.discards,"discard","discards")}`}function N0(l){return l.score==null?l.uncertain?"?":"—":l.uncertain?`${l.score}?`:String(l.score)}function bE(l){return l.score==null?"No rank in this deck is revealed yet.":l.uncertain?"From the cards you have revealed. A hidden rank could still change it.":"Every card in this deck is revealed. This assumes your best hand on every play."}const xE={stronger:"I'm stronger",weaker:"I'm weaker",afraid:"I am afraid",curious:"I am curious"};function SE(l,a){if(l.score==null||a<=0)return"curious";const s=l.score/a;return s>=1.5?"stronger":s>=.75?"weaker":"afraid"}function EE(l){return xE[l]}function M0(l){const[a,s]=en.useState(!1),[r,u]=en.useState(null);function d(h){const g=h.getBoundingClientRect();u({left:Math.max(8,Math.min(g.left,window.innerWidth-288)),top:g.bottom+8}),s(!0)}return m.jsxs("span",{className:l.className?`term ${l.className}`:"term",onMouseEnter:h=>d(h.currentTarget),onMouseLeave:()=>s(!1),onClick:h=>{h.stopPropagation(),h.preventDefault(),a?s(!1):d(h.currentTarget)},children:[l.children,a&&r&&m.jsxs("span",{className:"term-card",role:"tooltip",style:r,children:[m.jsx("strong",{children:l.title}),Fi(l.body)]})]})}const Ad=en.createContext(null);function CE(l){return m.jsx(Ad.Provider,{value:l.run,children:l.children})}function q0(l){var s;const a=l.motif;return m.jsxs("span",{className:"face-index","aria-hidden":"true",children:[m.jsx("span",{className:"face-rank",children:_E(a.rank)}),a.wild?m.jsxs("span",{className:"wild-suits",children:[m.jsx("span",{className:"cups",children:"♥"}),m.jsx("span",{className:"pentacles",children:"♦"}),m.jsx("span",{className:"swords",children:"♠"}),m.jsx("span",{className:"wands",children:"♣"})]}):m.jsx("span",{className:`face-suit ${(s=a.suit)==null?void 0:s.toLowerCase()}`,children:vE(a.suit??"Cups")})]})}function Ce(l){const a=en.useContext(Ad),s=l.catalog.motifs[l.catalog.motifIndex.get(l.motifId)],r=l.profile.discoveredMotifIds.includes(l.motifId);if(!s)return null;const u=r&&!l.conceal,d=Si(s,l.catalog,l.profile),h=u0(Qn.notes,l.profile,a,d,u),g=u?W7(Qn.notes,l.profile,a,d):null,f=["card",l.selected?"selected":"",l.hot?"hot":"",l.dim?"dim":""].filter(Boolean).join(" ");return m.jsxs("button",{type:"button",className:f,onClick:l.onClick,"aria-pressed":l.onClick?l.selected:void 0,tabIndex:l.onClick?void 0:-1,"aria-label":u?`${s.name}, ${cc(s)}, strength ${g}, ${s.tarotName}`:`${s.name}, rank hidden, strength unknown`,children:[m.jsxs("span",{className:"art",children:[m.jsx("img",{src:T0(l.catalog.imageBase,s.image),alt:"",loading:"lazy"}),u&&m.jsx(q0,{motif:s}),!u&&m.jsx(AE,{profile:l.profile}),l.pop!=null&&m.jsxs("span",{className:"chip-pop",children:["+",l.pop]})]}),m.jsx("span",{className:"card-copy",children:m.jsx("strong",{className:h?"self-name":void 0,title:s.name,children:s.name})}),m.jsx("span",{className:"card-power",children:u?g:"?"})]})}function Q0(l){const a=en.useContext(Ad),s=l.catalog.motifs[l.catalog.motifIndex.get(l.motifId)];if(!s)return null;const r=l.profile.discoveredMotifIds.includes(l.motifId),u=u0(Qn.notes,l.profile,a,Si(s,l.catalog,l.profile),r);return m.jsxs("button",{type:"button",className:`motif-bead${l.selected?" selected":""}${l.dim?" bead-dim":""}${u?" self-name":""}`,onClick:l.onClick,tabIndex:l.onClick?void 0:-1,"aria-pressed":l.onClick?l.selected:void 0,"aria-label":r?`${s.name}, ${cc(s)}`:`${s.name}, rank hidden`,title:r?`${s.name} · ${cc(s)}`:`${s.name} · rank hidden`,children:[m.jsx("img",{src:T0(l.catalog.imageBase,s.image),alt:"",loading:"lazy"}),r?m.jsx(q0,{motif:s}):m.jsx("span",{className:"bead-unknown",children:"?"})]})}function AE(l){var r;const a=new Set(((r=l.profile.guide)==null?void 0:r.known)??[]),s=Qn.notes.find(u=>u.bind==="seal"&&a.has(u.id));return s?m.jsx(M0,{className:"seal",title:s.title,body:s.body,children:"?"}):m.jsx("span",{className:"seal","aria-hidden":"true",children:"?"})}function K0(l){const a=pd(Qn.notes,l.deityId);return a.length===0?null:m.jsx(m.Fragment,{children:a.map(s=>m.jsxs("div",{className:"power-offer",children:[m.jsx("p",{className:"meta",children:l.earned?"This victory also grants":"If you win"}),m.jsx("strong",{children:s.title}),m.jsx("p",{children:s.text})]},s.id))})}function TE(l){const a=l.body.split(/\n\n+/).map(s=>s.trim()).filter(Boolean);return m.jsxs("section",{className:"offer","aria-label":l.title,children:[m.jsx("h1",{children:l.title}),a.map(s=>m.jsx("p",{children:s},s)),m.jsx("div",{className:"offer-grid",children:l.choices.map(s=>{const r=l.catalog.deities[l.catalog.deityIndex.get(s.deityId)??-1],u=Ji(r,l.paintedIds);return m.jsxs("article",{className:"offer-choice",children:[u&&m.jsx("img",{className:"offer-portrait",src:ia(l.catalog.imageBase,u),alt:""}),m.jsx("h2",{children:s.title}),m.jsx("p",{className:"meta",children:s.detail}),m.jsx("p",{className:"offer-power",children:s.body}),m.jsx("button",{type:"button",className:"primary",onClick:()=>l.onChoose(s.id),children:l.button??"Begin here"}),m.jsx("div",{className:"gallery",children:s.motifIds.map(d=>m.jsx(Ce,{catalog:l.catalog,motifId:d,profile:l.profile},d))})]},s.id)})})]})}function je(l){const[a,s]=en.useState(!!(l.initiallyOpen||l.active)),[r,u]=en.useState(!1),d=en.useRef(null),h=en.useRef(!!l.active),g=l.onMove,f=l.onMoveEnd;en.useEffect(()=>{const _=!!l.active,v=_&&!h.current,k=!_&&h.current;h.current=_,v&&s(!0),k&&s(!1)},[l.active]),en.useEffect(()=>{if(!l.active||!a)return;const _=requestAnimationFrame(()=>{const v=d.current;v&&(v.getBoundingClientRect().top<72||v.scrollIntoView({behavior:"auto",block:"start"}))});return()=>cancelAnimationFrame(_)},[l.active,a]);function p(_){if(!l.panelId||!g)return;_.preventDefault(),_.stopPropagation();const v=l.panelId;u(!0);const k=S=>{var U;const E=(U=document.elementFromPoint(S.clientX,S.clientY))==null?void 0:U.closest("[data-panel]"),T=E==null?void 0:E.getAttribute("data-panel");if(!E||!T||T===v)return;const x=E.getBoundingClientRect(),A=document.querySelector(`[data-panel="${CSS.escape(v)}"]`),R=A==null?void 0:A.getBoundingClientRect();if(R){const H=R.top<x.top,G=x.top+x.height/2;if(H&&S.clientY<G||!H&&S.clientY>G)return}g(v,T)},w=()=>{window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),u(!1),f==null||f()};window.addEventListener("pointermove",k),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w)}return m.jsxs("section",{className:`fold${a?" open":""}${l.active?" active":""}${r?" dragging":""}`,"data-panel":l.panelId,style:l.order==null?void 0:{order:l.order},"aria-current":l.active?"step":void 0,children:[m.jsxs("div",{className:"fold-chrome",children:[l.panelId&&g&&m.jsx("button",{type:"button",className:"fold-grip","aria-label":`Drag ${l.title}`,onPointerDown:p,children:"⋮⋮"}),m.jsxs("button",{ref:d,type:"button",className:"fold-bar","aria-expanded":a,onClick:()=>s(_=>!_),children:[m.jsx("span",{className:"fold-title",children:l.title}),l.note&&m.jsx("span",{className:"fold-note",children:l.note}),!a&&l.summary&&m.jsx("span",{className:"fold-summary",children:l.summary}),m.jsx("span",{className:"fold-mark","aria-hidden":"true",children:a?"–":"+"})]})]}),a&&m.jsx("div",{className:"fold-body",children:l.children})]})}function jE(l){const a=N0(l.reading),s=a.endsWith("?"),r=s?a.slice(0,-1):a;return m.jsxs("div",{className:"self-panel",children:[m.jsxs("p",{className:"self-figure",children:[r,s&&m.jsx("span",{className:r?"self-uncertain":void 0,children:"?"})]}),l.phrase&&m.jsx("p",{className:"self-voice",children:l.phrase}),m.jsx("p",{className:"meta",children:bE(l.reading)})]})}function NE(l){return m.jsxs("section",{className:"home",children:[m.jsx("p",{className:"lede",children:"A run begins by choosing a land. You take two of its cards, in whatever state you already know them, and that god's power starts on. You are dealt as many cards as the deck has, up to five, and you play them as poker. Winning a land lets you take one new card from it. Playing a card reveals its rank forever. The deck lasts until you leave. A conquered map can be carried onto the next one, where you choose the land you enter and gain its power."}),m.jsxs("div",{className:"home-actions","data-hook":"start-run",children:[l.canContinue&&m.jsx("button",{className:"primary","data-hook":"continue",onClick:l.onContinue,children:"Continue"}),m.jsx("button",{className:"primary","data-hook":"new-run",onClick:()=>l.onNew("full"),children:"New run"}),m.jsx("button",{"data-hook":"short-run",onClick:()=>l.onNew("short"),children:"Short run"})]}),m.jsxs("ul",{className:"definitions",children:[m.jsxs("li",{children:[m.jsx("strong",{children:"Encountered"})," You have seen the picture and the name."]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Discovered"})," You played the card. Its rank and suit stay known."]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Owned"})," The card is in this run’s deck, and only this run’s deck."]})]})]})}function ME(l,a,s,r){const u=SE(l,a);return C0(Qn.notes,{on:u,counters:id(s,r)})??EE(u)}function qE(l){const[a,s]=en.useState(l.run.startRegionId),r=new Set(vd(l.run)),u=new Set(l.run.conqueredRegionIds),d=(x,A)=>A?"home":u.has(x)?"conquered":r.has(x)?"attackable":"locked",h=l.run.regions.filter(x=>d(x.id,x.id===l.run.startRegionId)!=="locked"),g=h.find(x=>x.id===a)??h.find(x=>x.id===l.run.startRegionId)??h[0];if(!g)return null;const f=l.catalog.deities[l.catalog.deityIndex.get(g.deityId)],p=Ji(f,l.paintedIds),_=g.targetScore>0?ME(j0(l.run,l.profile,l.catalog),g.targetScore,l.profile,l.run):null,v=h.flatMap(x=>x.polygon),k=v.map(x=>x[0]),w=v.map(x=>x[1]),S=Math.min(...k)-24,E=Math.min(...w)-24,T={minX:S,minY:E,width:Math.max(...k)-S+24,height:Math.max(...w)-E+24};return m.jsxs("div",{className:"map-layout",children:[m.jsxs("svg",{className:"map","data-hook":"map",viewBox:`${T.minX} ${T.minY} ${T.width} ${T.height}`,role:"img","aria-label":"World map",children:[m.jsxs("defs",{children:[m.jsxs("filter",{id:"region-fog",filterUnits:"objectBoundingBox",x:"-60%",y:"-60%",width:"220%",height:"220%",colorInterpolationFilters:"sRGB",children:[m.jsx("feGaussianBlur",{stdDeviation:"36",result:"blurred"}),m.jsxs("feComponentTransfer",{in:"blurred",children:[m.jsx("feFuncR",{type:"linear",slope:"0.28"}),m.jsx("feFuncG",{type:"linear",slope:"0.28"}),m.jsx("feFuncB",{type:"linear",slope:"0.28"})]})]}),h.map(x=>{const A=l.catalog.deities[l.catalog.deityIndex.get(x.deityId)];return Ji(A,l.paintedIds)?m.jsx("clipPath",{id:`cut-${x.id}`,children:m.jsx("polygon",{points:x.polygon.map(R=>R.join(",")).join(" ")})},x.id):null})]}),h.map(x=>{const A=d(x.id,x.id===l.run.startRegionId),R=l.catalog.deities[l.catalog.deityIndex.get(x.deityId)],U=Ji(R,l.paintedIds),H=U?ia(l.catalog.imageBase,U):void 0,G=u.has(x.id),J=U&&!G?fE(cd(x.polygon),90):cd(x.polygon),an=x.polygon.map(nn=>nn.join(",")).join(" ");return m.jsxs("g",{children:[H&&m.jsx("g",{clipPath:`url(#cut-${x.id})`,children:m.jsx("image",{href:H,x:J.x,y:J.y,width:J.width,height:J.height,preserveAspectRatio:"xMidYMid slice",filter:G?void 0:"url(#region-fog)",pointerEvents:"none"})}),m.jsx("polygon",{className:"region-rim",points:an}),m.jsx("polygon",{className:`region-grout ${x.id===g.id?"selected":""}`,points:an}),m.jsx("polygon",{className:`region ${A} ${U?"textured":""} ${x.id===g.id?"selected":""}`,points:an,role:"button",tabIndex:0,"aria-label":`${(R==null?void 0:R.name)??x.deityId}, hop ${x.hopDistance}, ${A}`,onClick:()=>{s(x.id),l.onInspect(x.id)},onKeyDown:nn=>{(nn.key==="Enter"||nn.key===" ")&&(nn.preventDefault(),s(x.id),l.onInspect(x.id))}})]},x.id)}),m.jsx("g",{className:"map-labels",children:h.map(x=>{const A=l.catalog.deities[l.catalog.deityIndex.get(x.deityId)],R=u.has(x.id),[U,H]=hE(x.polygon),G=x.id===l.run.startRegionId;return m.jsx("text",{className:G?"map-home":R?void 0:"fogged",x:U,y:H,textAnchor:"middle",dominantBaseline:"central",children:(A==null?void 0:A.name)??x.deityId},x.id)})})]}),m.jsxs("aside",{className:"panel","data-drag-scroll":"y",children:[p&&m.jsx("img",{className:"deity-portrait",src:ia(l.catalog.imageBase,p),alt:""}),m.jsx("h2",{children:f==null?void 0:f.name}),m.jsxs("p",{className:"meta",children:[f==null?void 0:f.pantheon," · hop ",g.hopDistance,g.targetScore>0&&m.jsxs(m.Fragment,{children:[" · target ",g.targetScore," · ",m.jsx("span",{className:"self-voice",children:_})]})]}),m.jsx("p",{children:f==null?void 0:f.description}),r.has(g.id)&&f&&m.jsx(K0,{deityId:f.id}),m.jsx("div",{className:"actions",children:m.jsx("button",{className:"primary","data-hook":"attack",disabled:!r.has(g.id),onClick:()=>l.onAttack(g.id),children:u.has(g.id)?"Already conquered":r.has(g.id)?"Attack":"Beyond the frontier"})}),m.jsx("div",{className:"gallery",children:g.motifIds.map(x=>m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:x},x))})]})]})}function QE(l){var g;const a=l.run.battle,s=(g=l.run.regions.find(f=>f.id===a.regionId))==null?void 0:g.deityId,r=s?l.catalog.deities[l.catalog.deityIndex.get(s)]:void 0,u=Ji(r,l.paintedIds),d=a.status==="lost",h=Math.max(0,a.accumulatedScore-(l.scoreHold??0));return m.jsxs("section",{className:`battle${l.run.lastPlay&&!l.locked?" has-log":""}`,children:[m.jsxs("article",{className:"face",children:[u?m.jsx("img",{className:"face-art",src:ia(l.catalog.imageBase,u),alt:""}):m.jsx("div",{className:"face-art face-empty"}),m.jsxs("div",{className:"face-caption",children:[m.jsxs("div",{className:"face-copy",children:[m.jsx("h2",{children:r==null?void 0:r.name}),m.jsx("p",{children:r==null?void 0:r.description})]}),m.jsxs("div",{className:"face-score",children:[m.jsx("span",{children:"Score"}),m.jsxs("strong",{children:[h,m.jsxs("em",{children:[" / ",a.targetScore]})]})]})]})]}),m.jsxs("div",{className:"tray",children:[m.jsxs("p",{className:"tray-meta",children:[m.jsxs("span",{children:["Hands ",a.handsRemaining]}),m.jsxs("span",{children:["Discards ",a.discardsRemaining]}),m.jsxs("span",{children:["Deck ",l.run.deckMotifIds.length]})]}),m.jsx("div",{className:"hand",children:a.visibleHandIds.map(f=>l.run.deckMotifIds.length>wd?m.jsx(Q0,{catalog:l.catalog,profile:l.profile,motifId:f,selected:a.selectedIds.includes(f),onClick:()=>l.onToggle(f)},f):m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:f,selected:a.selectedIds.includes(f),onClick:()=>l.onToggle(f)},f))}),!d&&m.jsx("div",{className:"battle-readout","aria-live":"polite",children:l.preview?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"battle-preview",children:[m.jsx("strong",{children:l.preview.poker.label}),m.jsx("strong",{className:"battle-points",children:l.preview.poker.pokerSubtotal+l.preview.folkloreBonus}),m.jsxs("span",{className:"battle-formula",children:[l.preview.poker.baseChips+l.preview.poker.cardChips+(l.preview.poker.skillChips??0)," chips × ",l.preview.poker.multiplier,l.preview.folkloreBonus?` + ${l.preview.folkloreBonus} from texts`:""]})]}),m.jsx(_s,{modifiers:l.preview.poker.modifiers,folklore:l.preview.folklore,catalog:l.catalog,profile:l.profile,scoringIds:l.preview.poker.scoringCardIds})]}):m.jsx("p",{className:"meta",children:a.selectedIds.length?a.selectedIds.some(f=>!l.profile.discoveredMotifIds.includes(f))?"Hidden ranks score when you play.":"Score preview is unavailable.":`Select up to ${l.run.configSnapshot.combat.maxCardsPerPlay}, or play the whole draw.`})}),m.jsx("div",{className:"actions",children:d?m.jsx("button",{className:"primary",onClick:l.onReturn,children:"Return to map"}):m.jsxs(m.Fragment,{children:[m.jsxs("button",{className:a.selectedIds.length?"primary":"","data-hook":"play",disabled:l.locked||a.selectedIds.length<1||a.handsRemaining<1,onClick:l.onPlay,children:["Play ",a.selectedIds.length||""]}),m.jsx("button",{"data-hook":"discard",disabled:l.locked||a.selectedIds.length<1||a.discardsRemaining<1,onClick:l.onDiscard,children:"Discard"}),m.jsx("button",{className:a.selectedIds.length?"":"primary","data-hook":"play-all",disabled:l.locked||a.visibleHandIds.length<1||a.handsRemaining<1,onClick:l.onPlayAll,children:"Play all"})]})}),!d&&(l.onRushLoss||l.onRushVariable)&&m.jsxs("div",{className:"battle-aside",children:[l.onRushLoss&&m.jsx("button",{onClick:l.onRushLoss,children:"Fast-forward the loss"}),l.onRushVariable&&m.jsx("button",{disabled:l.locked,onClick:l.onRushVariable,children:"Fast-forward: play all each hand"})]})]}),l.run.lastPlay&&!l.locked&&m.jsx("div",{className:"log",children:m.jsx(O0,{play:l.run.lastPlay,catalog:l.catalog})})]})}function O0(l){const a=l.play;return a.kind==="discard"?m.jsxs("div",{className:"breakdown",children:["Discarded ",a.motifIds.length,". Nothing was revealed."]}):m.jsxs("div",{className:"breakdown",children:[m.jsxs("h2",{children:[a.categoryLabel," · ",a.total]}),m.jsxs("p",{className:"meta",children:["(",a.baseChips," hand + ",a.cardChips," cards",a.skillChips?` + ${a.skillChips} powers`:"",") × ",a.multiplier," = ",a.pokerSubtotal,a.folkloreBonus?` + ${a.folkloreBonus} from texts`:""]}),m.jsx(_s,{modifiers:a.modifiers,folklore:a.folklore,catalog:l.catalog,scoringIds:a.scoringCardIds}),(a.modifiers??[]).some(s=>s.state!=="on")&&m.jsx("ul",{className:"modifiers",children:a.modifiers.filter(s=>s.state!=="on").map(s=>m.jsx("li",{className:`mod-${s.state}`,children:h0(s)},s.title))}),m.jsx("ul",{children:(a.discoveredMotifIds??[]).map(s=>{const r=l.catalog.motifs[l.catalog.motifIndex.get(s)];return m.jsxs("li",{children:["Discovered ",r==null?void 0:r.name,": ",r?cc(r):s]},s)})})]})}function _s(l){const a=new Map,s=(l.scoringIds??[]).flatMap(u=>{var g;const d=(g=l.catalog)==null?void 0:g.motifIndex.get(u);if(l.catalog==null||d==null)return[];const h=l.catalog.motifs[d];return a.set(u,h.name),[Si(h,l.catalog,l.profile)]}),r=cE({modifiers:l.modifiers,folklore:l.folklore,notes:Qn.notes,scoring:s,names:a});return r.length?m.jsx("div",{className:"battle-powers",children:m.jsx("ul",{children:r.map((u,d)=>{const h=m.jsxs("span",{className:"bonus-title",children:[m.jsx("strong",{children:u.title}),m.jsx("span",{className:"bonus-gift",children:u.gift})]});return l.foldable&&u.how?m.jsx("li",{children:m.jsxs("details",{className:"bonus-fold",children:[m.jsx("summary",{children:h}),m.jsx("span",{className:"bonus-how",children:u.how})]})},`${u.title}-${d}`):m.jsxs("li",{children:[h,u.how&&m.jsx("span",{className:"bonus-how",children:u.how})]},`${u.title}-${d}`)})})}):null}function Td(l){return new Set([...l.scoringCardIds??[],...l.patternCardIds??[]])}function z0(l,a){const s=new Map(l.motifIds.map((p,_)=>[p,_])),r=(l.scoringCardIds??[]).slice().sort((p,_)=>(s.get(p)??0)-(s.get(_)??0)),u=[{phase:"reveal",chips:l.baseChips??0,score:0,caption:l.categoryLabel??""}];let d=l.baseChips??0;u.push({phase:"tally",chips:d,score:0,caption:l.categoryLabel??""}),r.forEach(p=>{const _=a.motifs[a.motifIndex.get(p)],v=_?r0(_.rank):0;d+=v,u.push({phase:"tally",chips:d,score:0,hotId:p,pop:v,caption:l.categoryLabel??""})});const h=(l.modifiers??[]).filter(p=>p.state==="on");if(h.length>0)for(const p of h)p.chips&&(d+=p.chips),(p.chips||p.mult)&&u.push({phase:"tally",chips:d,score:0,caption:h0(p)});else l.skillChips?(d+=l.skillChips,u.push({phase:"tally",chips:d,score:0,caption:l.skillLabel||`+${l.skillChips}`})):l.skillLabel&&u.push({phase:"tally",chips:d,score:0,caption:l.skillLabel});let g=l.pokerSubtotal??d*(l.multiplier??1);u.push({phase:"product",chips:d,score:g,caption:`${d} × ${l.multiplier??1}`}),(l.folklore??[]).forEach(p=>{p.newlyDiscovered||p.bonus<=0||(g+=p.bonus,u.push({phase:"product",chips:d,score:g,pop:p.bonus,caption:`+${p.bonus} from ${p.name}`}))});const f=l.folkloreBonus?`${l.pokerSubtotal??g} + ${l.folkloreBonus} from texts`:`${d} × ${l.multiplier??1}`;return u.push({phase:"done",chips:d,score:l.total??g,caption:f}),u}function KE(l){const a=en.useMemo(()=>z0(l.play,l.catalog),[l.play,l.catalog]),[s,r]=en.useState(0),u=en.useRef(l.onDone);u.current=l.onDone,en.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(a.length-1);return}const w=a.map(x=>x.phase==="reveal"?900:x.phase==="product"&&x.caption.includes("×")?1200:850);let S=0,E=0;const T=()=>{S+=1,r(S),!(S>=a.length-1)&&(E=window.setTimeout(T,w[S]))};return E=window.setTimeout(T,w[0]),()=>window.clearTimeout(E)},[a]);const d=a[Math.min(s,a.length-1)],h=new Map;a.slice(0,s+1).forEach(k=>{k.hotId!=null&&k.pop!=null&&h.set(k.hotId,k.pop)});const g=new Set(l.play.discoveredMotifIds??[]),f=Td(l.play),p=d.phase!=="reveal",_=d.phase==="product"||d.phase==="done",v=s>=a.length-1;return m.jsx("div",{className:"ceremony",role:"dialog","aria-label":"Score",children:m.jsxs("div",{className:"ceremony-stage",children:[m.jsx("p",{className:"ceremony-hand",children:p?l.play.categoryLabel:"…"}),_?m.jsx("div",{className:"product",children:m.jsx("strong",{children:d.score})},d.score):m.jsxs("div",{className:"tally-row",children:[m.jsxs("div",{className:`chip-box${d.phase==="tally"?" live":""}`,children:[m.jsx("strong",{children:p?d.chips:"—"}),m.jsx("span",{children:"chips"})]},`c${d.chips}`),m.jsx("div",{className:"times",children:"×"}),m.jsxs("div",{className:"mult-box",children:[m.jsx("strong",{children:p?l.play.multiplier:"—"}),m.jsx("span",{children:"mult"})]})]}),m.jsx("p",{className:"ceremony-beat",children:d.caption!==l.play.categoryLabel?d.caption:""}),v&&m.jsx("button",{className:"primary ceremony-next",autoFocus:!0,onClick:()=>u.current(),children:l.continueLabel}),p&&m.jsx(_s,{modifiers:l.play.modifiers,folklore:_?l.play.folklore:void 0,catalog:l.catalog,profile:l.profile,scoringIds:l.play.scoringCardIds}),m.jsx("div",{className:"hand ceremony-hand-row",children:l.play.motifIds.map(k=>m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:k,conceal:g.has(k)&&!p,hot:d.hotId===k,dim:p&&!f.has(k),pop:h.get(k)},k))})]})})}function OE(l){const a=l.rush.plays??[],[s,r]=en.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches?a.length:1);return en.useEffect(()=>{if(s>=a.length)return;const u=window.setTimeout(()=>r(d=>d+1),450);return()=>window.clearTimeout(u)},[s,a.length]),m.jsxs("section",{className:"rush variable-rush",children:[m.jsx("h2",{children:l.rush.lost?"The fight is lost":"The land falls"}),m.jsxs("p",{children:["Play all on each draw · ",l.rush.score," / ",l.rush.target]}),m.jsx("p",{className:"meta",children:"Dimmed beads did not score."}),m.jsx("div",{className:"rush-rows",children:a.slice(0,s).map((u,d)=>{var h;return m.jsxs("article",{className:"rush-row",children:[m.jsxs("div",{className:"rush-play",children:[m.jsx("span",{className:"rush-equals",children:u.total}),m.jsx("div",{className:"rush-beads",children:u.motifIds.map(g=>m.jsx(Q0,{catalog:l.catalog,profile:l.profile,motifId:g,dim:!Td(u).has(g)},g))}),m.jsxs("span",{className:"rush-tally",children:[(h=l.rush.totals)==null?void 0:h[d],"/",l.rush.target]})]}),m.jsxs("div",{className:"rush-read",children:[m.jsx("strong",{children:u.categoryLabel}),m.jsxs("p",{className:"meta",children:["(",u.baseChips," hand + ",u.cardChips," cards",u.skillChips?` + ${u.skillChips} powers`:"",") × ",u.multiplier,u.folkloreBonus?` + ${u.folkloreBonus} from texts`:""]}),m.jsx(_s,{foldable:!0,modifiers:u.modifiers,folklore:u.folklore,catalog:l.catalog,profile:l.profile,scoringIds:u.scoringCardIds})]})]},d)})}),s<a.length?m.jsx("button",{onClick:()=>r(a.length),children:"Show all"}):m.jsx("button",{className:"primary",onClick:l.onContinue,children:"Move on"})]})}function zE(l){const a=l.run.rush,s=a.play,r=en.useMemo(()=>s?z0(s,l.catalog):[],[s,l.catalog]),u=(a.totals??[]).slice(1).map((T,x)=>({times:x+2,score:T})),d=r.length+u.length,[h,g]=en.useState(0);if(en.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){g(Math.max(0,d-1));return}if(h>=d-1)return;const x=r[h],A=x?x.phase==="reveal"?900:x.phase==="product"?1100:800:700,R=window.setTimeout(()=>g(U=>U+1),A);return()=>window.clearTimeout(R)},[h,d,r]),a.plays)return m.jsx(OE,{rush:a,catalog:l.catalog,profile:l.profile,onContinue:l.onContinue});if(!s)return m.jsxs("section",{className:"narrow rush",children:[m.jsxs("h2",{children:[a.hands," ",a.hands===1?"hand":"hands"]}),m.jsxs("p",{children:["The land falls. ",a.score," against ",a.target,"."]}),m.jsx("button",{className:"primary",onClick:l.onContinue,children:"Move on"})]});const f=r[Math.min(h,r.length-1)],p=h>=r.length?u[h-r.length]:void 0,_=f.phase!=="reveal",v=p!=null||f.phase==="product"||f.phase==="done",k=Td(s),w=new Set(s.discoveredMotifIds??[]),S=h>=d-1,E=(p==null?void 0:p.score)??f.score;return m.jsx("section",{className:"rush",children:m.jsxs("div",{className:"ceremony-stage",children:[m.jsxs("p",{className:"ceremony-hand",children:[p||_?s.categoryLabel:"…",p&&m.jsxs(m.Fragment,{children:[m.jsx("br",{}),"× ",p.times]})]}),v?m.jsx("div",{className:"product",children:m.jsx("strong",{children:E})},p?`x${p.times}`:f.score):m.jsxs("div",{className:"tally-row",children:[m.jsxs("div",{className:`chip-box${f.phase==="tally"?" live":""}`,children:[m.jsx("strong",{children:_?f.chips:"—"}),m.jsx("span",{children:"chips"})]},`c${f.chips}`),m.jsx("div",{className:"times",children:"×"}),m.jsxs("div",{className:"mult-box",children:[m.jsx("strong",{children:_?s.multiplier:"—"}),m.jsx("span",{children:"mult"})]})]}),m.jsx("p",{className:"ceremony-beat",children:a.lost&&S?`The fight is lost. ${a.score} against ${a.target}.`:p?`${p.score} against ${a.target}`:f.caption!==s.categoryLabel?f.caption:""}),S&&m.jsx("button",{className:"primary ceremony-next",onClick:l.onContinue,children:"Move on"}),_&&m.jsx(_s,{modifiers:s.modifiers,folklore:v?s.folklore:void 0,catalog:l.catalog,profile:l.profile,scoringIds:s.scoringCardIds}),m.jsx("div",{className:"hand ceremony-hand-row",children:s.motifIds.map(T=>m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:T,conceal:w.has(T)&&!_,hot:f.hotId===T,dim:_&&!k.has(T)},T))})]})})}function RE(l){var g,f,p;const[a,s]=en.useState([]),r=Object.entries(l.profile.emojiInventory??{}).filter(([,_])=>_>0),u=[...l.run&&l.run.status!=="lost"?l.run.deckMotifIds:[],...l.profile.alchemyReserve??[]],d=Vp(l.emoji,l.catalog,l.profile,a,u),h=!!d;return m.jsxs("section",{className:"alchemy-panel",children:[m.jsx("h2",{children:"Data alchemy"}),m.jsx("p",{children:"Extract emoji by dissolving a card after a victory. Combine any number of collected emoji to find the motif closest to their combined meaning. Creating it spends the emoji and is a free action, separate from the victory reward."}),!l.emoji&&m.jsx("p",{className:"meta",children:"Emoji associations are unavailable."}),l.emoji&&!l.emoji.alchemy&&m.jsx("p",{className:"meta",children:"Alchemy data is unavailable. Rebuild the emoji data to enable formulas."}),r.length===0&&m.jsx("p",{className:"meta",children:"You have no extracted emoji yet."}),m.jsx("div",{className:"alchemy-inventory",children:r.map(([_,v])=>{var S;const k=(S=l.emoji)==null?void 0:S.emoji.find(E=>E.id===_),w=a.filter(E=>E===_).length;return m.jsxs("button",{type:"button","aria-label":`${(k==null?void 0:k.name)??_}: ${v} available, ${w} selected`,onClick:()=>s(E=>w<v?[...E,_]:E),children:[(k==null?void 0:k.symbol)??_," ",m.jsxs("small",{children:["×",v,w?` · ${w} selected`:""]})]},_)})}),m.jsxs("p",{children:["Formula: ",a.length===0&&"none selected"]}),a.length>0&&m.jsxs("div",{className:"alchemy-formula",children:[a.map((_,v)=>{var w;const k=(w=l.emoji)==null?void 0:w.emoji.find(S=>S.id===_);return m.jsxs("button",{type:"button","aria-label":`Remove ${(k==null?void 0:k.name)??_} from formula`,onClick:()=>s(S=>S.filter((E,T)=>T!==v)),children:[(k==null?void 0:k.symbol)??_," ",m.jsx("span",{"aria-hidden":"true",children:"×"})]},`${_}-${v}`)})," ",m.jsx("button",{type:"button",onClick:()=>s([]),children:"Clear formula"})]}),a.length>0&&!!((g=l.emoji)!=null&&g.alchemy)&&(d?m.jsxs("div",{children:[m.jsx("p",{children:"Closest motif to your formula:"}),m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:d}),m.jsx("button",{type:"button",className:"primary",disabled:!h,onClick:()=>{l.onCreate(a),s([])},children:"Create and add to deck"}),(!l.run||l.run.status==="lost")&&m.jsx("p",{className:"meta",children:"This card will join your next run."}),((p=(f=l.run)==null?void 0:f.battle)==null?void 0:p.status)==="active"&&m.jsx("p",{className:"meta",children:"This card joins the draw pile for the current fight."})]}):m.jsx("p",{className:"meta",children:"No eligible motif is available for this formula."}))]})}function DE(l){var U;const[a,s]=en.useState(null),r=S0(l.run),[u,d]=en.useState(""),h=(l.run.configSnapshot.deck.reward??"either")==="add",g=!h&&(l.run.mapsConquered??0)>=1&&!!((U=l.tables)!=null&&U.motifMotif)&&l.run.deckMotifIds.length>=na,f=!h&&(l.run.mapsConquered??0)>=2,p=r.removableIds.filter(H=>ic(l.emoji,H,l.profile.bestMapsConquered??0).length>0),_=l.run.regions.find(H=>H.id===l.run.pendingRewardRegionId),v=_?l.catalog.deities[l.catalog.deityIndex.get(_.deityId)]:void 0,k=(a==null?void 0:a.type)==="combine"?a.motifIds:[],w=l.tables?{...l.catalog,similarities:l.tables}:l.catalog,S=k.length>=na?m0(w,k,new Set(l.run.deckMotifIds)):null;function E(H,G){s(J=>(J==null?void 0:J.type)===H&&J.motifId===G?null:{type:H,motifId:G})}function T(H){s(G=>{const J=(G==null?void 0:G.type)==="combine"?G.motifIds:[];return J.includes(H)?{type:"combine",motifIds:J.filter(an=>an!==H)}:J.length>=nc?(G==null?void 0:G.type)==="combine"?G:{type:"combine",motifIds:J}:{type:"combine",motifIds:J.concat(H)}})}const x=(a==null?void 0:a.type)==="remove"?ic(l.emoji,a.motifId,l.profile.bestMapsConquered??0):[],A=!f&&!g;function R(H){var G;return(G=l.catalog.motifs[l.catalog.motifIndex.get(H)??-1])==null?void 0:G.name}return m.jsxs("section",{children:[m.jsxs("h2",{children:[v==null?void 0:v.name," is conquered"]}),m.jsx("p",{className:"lede",children:h?"Choose one new card from this land. It joins the deck. Nothing changes until you confirm.":f?"Add a motif, fuse cards, or remove a card from your deck.":g?"Add a motif from this land, or fuse two to five cards you already hold.":"Choose one new card from this land. It joins the deck."}),v&&m.jsx(K0,{deityId:v.id,earned:!0}),m.jsxs("div",{className:"reward-kinds",children:[m.jsx(je,{title:"Add",summary:(a==null?void 0:a.type)==="add"?R(a.motifId):r.canAdd?`${r.addableIds.length} from this land`:"Nothing to add",initiallyOpen:A,children:r.canAdd?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"reward-act",children:[m.jsx("div",{className:"reward-act-choice",children:(a==null?void 0:a.type)==="add"?m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:a.motifId}):m.jsx("p",{className:"meta",children:"Choose a card from this land."})}),m.jsx("button",{type:"button",className:"primary",disabled:(a==null?void 0:a.type)!=="add",onClick:()=>(a==null?void 0:a.type)==="add"&&l.onAdd(a.motifId),children:"Add this card"})]}),m.jsx("div",{className:"choice-grid",children:r.addableIds.map(H=>m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:H,selected:(a==null?void 0:a.type)==="add"&&a.motifId===H,onClick:()=>E("add",H)},H))})]}):m.jsx("p",{className:"meta",children:"This land has no card you do not already hold."})}),f&&m.jsx(je,{title:"Remove",summary:(a==null?void 0:a.type)==="remove"?R(a.motifId):p.length?`${p.length} can leave`:"Nothing to remove",children:r.canRemove&&p.length>0?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"reward-act",children:[m.jsx("div",{className:"reward-act-choice",children:(a==null?void 0:a.type)==="remove"?m.jsxs(m.Fragment,{children:[m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:a.motifId}),m.jsxs("div",{className:"alchemy-extract",children:[m.jsx("p",{children:"Choose an emoji to keep. The card leaves this run."}),m.jsx(Qp,{scaffold:l.emoji,motifId:a.motifId,maps:l.profile.bestMapsConquered??0,selected:u,onSelect:d}),x.map(H=>{var J;const G=(J=l.emoji)==null?void 0:J.emoji.find(an=>an.id===H);return m.jsx("button",{type:"button",className:u===H?"primary":"",onClick:()=>d(H),"aria-label":`Extract ${(G==null?void 0:G.name)??H}`,"aria-pressed":u===H,children:(G==null?void 0:G.symbol)??H},H)}),!x.length&&m.jsx("p",{className:"meta",children:"No emoji associations are available for this card."})]})]}):m.jsx("p",{className:"meta",children:"Choose a card to remove from the deck."})}),m.jsx("button",{type:"button",className:"primary",disabled:(a==null?void 0:a.type)!=="remove"||!x.includes(u),onClick:()=>(a==null?void 0:a.type)==="remove"&&l.onRemove(a.motifId,u),children:"Remove this card"})]}),m.jsx("div",{className:"choice-grid",children:p.map(H=>m.jsxs("div",{className:"dissolution-option",children:[m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:H,selected:(a==null?void 0:a.type)==="remove"&&a.motifId===H,onClick:()=>{d(""),E("remove",H)}}),m.jsx(Qp,{scaffold:l.emoji,motifId:H,maps:l.profile.bestMapsConquered??0})]},H))})]}):m.jsx("p",{className:"meta",children:r.canRemove?"No emoji associations are available for these cards.":"The deck is at its minimum size."})}),g&&m.jsxs(je,{title:"Combine",summary:S?R(S):k.length?`${k.length} chosen`:`${na} to ${nc} cards`,children:[m.jsxs("div",{className:"reward-act",children:[m.jsx("div",{className:"reward-act-choice",children:S?m.jsx("div",{className:"fusion-result",children:m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:S})}):m.jsx("p",{className:"meta",children:k.length>0&&k.length<na?"Choose one more card.":`Choose ${na} to ${nc} cards you already hold.`})}),m.jsx("button",{type:"button",className:"primary",disabled:!S,onClick:()=>S&&l.onCombine(k),children:"Add this fusion"})]}),m.jsx("div",{className:"fusion-row","data-drag-scroll":"x",children:l.run.deckMotifIds.map(H=>m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:H,selected:k.includes(H),onClick:()=>T(H)},H))})]})]}),l.run.lastPlay&&m.jsx(O0,{play:l.run.lastPlay,catalog:l.catalog}),!r.canAdd&&!p.length&&m.jsx("button",{className:"primary",onClick:l.onContinue,children:h?"Continue":"Continue without a change"})]})}function jd(l){const[a,s]=en.useState(l.knownUrl??null);return en.useEffect(()=>{if(l.knownUrl){s(l.knownUrl);return}let r=!1,u=null;return Cd(l.id).then(d=>{r||!d||(u=URL.createObjectURL(d),s(u))}),()=>{r=!0,u&&URL.revokeObjectURL(u)}},[l.id,l.knownUrl]),a?m.jsx("img",{className:"artifact-picture",src:a,alt:"Conquered map"}):m.jsx("p",{className:"meta",children:"The picture of this map is still being kept."})}function YE(l){var u,d;const a=((u=l.run)==null?void 0:u.mapsConquered)??0,s=new Map((l.profile.artifacts??[]).map(h=>[h.id,h])),r=(((d=l.run)==null?void 0:d.runArtifactIds)??[]).map(h=>s.get(h));return m.jsxs("section",{className:"run-artifacts",children:[m.jsxs("h2",{children:["Artifacts · ",Math.min(a,12)," / 12 this run"]}),m.jsx("p",{children:a>=2?"Current unlocks: fusion, dissolution and data alchemy.":a>=1?"Current unlock: fusion. Complete one more map to unlock dissolution and data alchemy.":"Complete a map to unlock fusion."}),m.jsx("div",{className:"artifact-slots",children:Array.from({length:12},(h,g)=>{const f=r[g],p=f&&l.catalog.texts[f.textIndex],_=f?`${g+1}: ${(p==null?void 0:p.name)??f.textId}`:`Map ${g+1}: not yet completed`;return m.jsx("div",{className:`artifact-slot${f?" filled":""}`,title:_,"aria-label":_,tabIndex:0,children:f?m.jsx(jd,{id:f.id,knownUrl:l.artifactUrls[f.id]}):m.jsx("span",{children:g+1})},g)})}),m.jsx("p",{className:"meta",children:"Each slot is a conquered map in this run. The library keeps its artifacts between runs."})]})}function IE(l){const a=l.catalog.texts[l.artifact.textIndex],s=l.artifact.deityIds.map(r=>{var u;return((u=l.catalog.deities[l.catalog.deityIndex.get(r)??-1])==null?void 0:u.name)??r});return m.jsxs("article",{className:"panel artifact-card",children:[m.jsx("p",{className:"meta",children:"Experimental artifact"}),m.jsx(jd,{id:l.artifact.id,knownUrl:l.knownUrl}),m.jsx("h2",{children:(a==null?void 0:a.name)??l.artifact.textId}),m.jsxs("p",{className:"meta",children:["Cosine distance ",Hp(l.artifact.distance),a?` · ${a.provenance} · ${a.source}`:""]}),m.jsx("p",{className:"meta",children:s.join(" · ")}),a&&m.jsx("p",{children:a.description})]})}function HE(l){const a=l.run.status==="won",[s,r]=en.useState(!1),u=[...l.profile.artifacts??[]].reverse().find(v=>v.seed===l.run.seed),d=en.useRef(l.onSnapshot);d.current=l.onSnapshot;const h=l.run,g=l.catalog,f=l.paintedIds;en.useEffect(()=>{if(!a||!u)return;const v=u.id;let k=!1;return(async()=>{const w=await Cd(v);if(k)return;if(w){d.current(v,w);return}const S=await Promise.all(h.regions.map(async T=>{const x=g.deities[g.deityIndex.get(T.deityId)],A=Ji(x,f),R=A?ia(g.imageBase,A):void 0,U=R?await uE(R)??void 0:void 0;return{region:T,url:R,tone:U}}));if(k)return;const E=await pE(S);!k&&E&&d.current(v,E)})(),()=>{k=!0}},[a,u,h,g,f]);const p=u?l.catalog.texts[u.textIndex]:void 0,_=a?kd(l.run,l.profile,l.catalog):null;return a&&s?m.jsx(UE,{run:l.run,catalog:l.catalog,profile:l.profile,onBack:()=>r(!1),onContinue:l.onContinue}):m.jsxs("section",{className:"narrow",children:[m.jsx("h2",{children:a?"The map is conquered":"The run is over"}),m.jsx("p",{className:"lede",children:a?"Every region has fallen. This win stays in the encyclopedia. The deck can go on to a new map.":`Lives reached zero after ${l.run.handsPlayed} hands. Discoveries stay in the encyclopedia.`}),a&&m.jsx("p",{className:"meta",children:_==null?"Play a card to estimate your deck’s power.":`Estimated fight power: ${_} points. Based on revealed cards, assuming your best hand on every play; draws and folklore can change the result.`}),a&&u&&m.jsxs(m.Fragment,{children:[m.jsxs("p",{children:["The gods on this map pulled ",(p==null?void 0:p.name)??u.textId," into the library. ",u.distanceBasis==="motif-mean"?"Mean motif distance":"Cosine distance"," ",Hp(u.distance),"."]}),m.jsx(jd,{id:u.id,knownUrl:l.artifactUrls[u.id]})]}),a&&!u&&m.jsx("p",{children:"Every text in the library was already uncovered, so this map adds no new one."}),m.jsxs("div",{className:"actions",children:[a&&m.jsx("button",{className:"primary",onClick:()=>{bd(l.run,l.profile).length===0?l.onContinue([],null):r(!0)},children:"Continue with this deck"}),m.jsx("button",{className:a?"":"primary",onClick:l.onHome,children:"Return home"})]})]})}function UE(l){const a=bd(l.run,l.profile),[s,r]=en.useState([]),[u,d]=en.useState(null),[h,g]=en.useState(null),f=u?{...l.profile,discoveredMotifIds:[...l.profile.discoveredMotifIds,...u]}:l.profile;function p(v){r(k=>k.includes(v)?k.filter(w=>w!==v):k.length>=ec?k:k.concat(v))}const _=m.jsxs("aside",{className:"continuity-deck",children:[m.jsx("h2",{children:"Deck"}),m.jsxs("p",{className:"meta",children:[l.run.deckMotifIds.length," cards come with you."]}),m.jsx("div",{className:"catalog-grid",children:l.run.deckMotifIds.map(v=>m.jsx(Ce,{catalog:l.catalog,profile:f,motifId:v},v))})]});if(u){const v=u.filter(k=>!l.run.deckMotifIds.includes(k));return m.jsx("section",{className:"continuity",children:m.jsxs("div",{className:"continuity-layout",children:[m.jsxs("div",{children:[m.jsx("h2",{children:"Keep one card"}),m.jsx("p",{className:"lede",children:v.length>0?"These motifs join the encyclopedia, so their ranks stay known. Choose one that is not already in the deck.":"These motifs join the encyclopedia. Each of them is already in the deck, so the deck stays as it is."}),m.jsx("div",{className:"catalog-grid",children:u.map(k=>{const w=l.run.deckMotifIds.includes(k);return m.jsxs("div",{className:"deck-slot",children:[m.jsx(Ce,{catalog:l.catalog,profile:f,motifId:k,selected:h===k,onClick:w?void 0:()=>g(k)}),m.jsx("p",{className:"meta",children:w?"In the encyclopedia · already in the deck":"In the encyclopedia"})]},k)})}),m.jsxs("div",{className:"actions",children:[m.jsx("button",{className:"primary",disabled:v.length>0&&!h,onClick:()=>l.onContinue(u,h),children:"Draw the next map"}),m.jsx("button",{onClick:()=>{d(null),g(null)},children:"Choose again"})]})]}),_]})})}return m.jsx("section",{className:"continuity",children:m.jsxs("div",{className:"continuity-layout",children:[m.jsxs("div",{children:[m.jsx("h2",{children:"Carry the deck forward"}),m.jsxs("p",{className:"lede",children:["Choose up to ",ec," motifs from this map whose rank is still hidden. Revealing them adds them to the encyclopedia. Then you add one to the deck, and a new map is drawn."]}),m.jsxs("p",{className:"meta",children:[s.length," of ",ec," selected"]}),m.jsx("div",{className:"catalog-grid",children:a.map(v=>m.jsxs("div",{className:"deck-slot",children:[m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:v,selected:s.includes(v),onClick:()=>p(v)}),l.run.deckMotifIds.includes(v)&&m.jsx("p",{className:"meta",children:"In the deck"})]},v))}),m.jsxs("div",{className:"actions",children:[m.jsx("button",{className:"primary",disabled:s.length===0,onClick:()=>d(s),children:"Reveal these"}),m.jsx("button",{onClick:()=>l.onContinue([],null),children:"Skip, same deck"}),m.jsx("button",{onClick:l.onBack,children:"Back"})]})]}),_]})})}function BE(l){var T;const[a,s]=en.useState(null),r=l.run.battle,u=new Map(Qn.notes.map(x=>[x.id,x])),d=(l.run.powers??[]).map(x=>u.get(x)).filter(x=>(x==null?void 0:x.kind)==="skill"),h=Qn.notes.filter(x=>{var A,R;return x.kind==="skill"&&!x.god&&(x.dev||((R=(A=l.profile.guide)==null?void 0:A.known)==null?void 0:R.includes(x.id)))}),g=[...d,...h].flatMap(x=>{var A,R,U;return x?[{note:x,on:x.god?!((A=l.run.powersOff)!=null&&A.includes(x.id)):!((U=(R=l.profile.guide)==null?void 0:R.off)!=null&&U.includes(x.id))}]:[]}),f=yE(g),p=g.find(({note:x})=>x.id===a),_=p==null?void 0:p.note,v=!!(_&&(_.card!=null||_.domain||_.suit||_.rank)),k=new Set(v?l.run.deckMotifIds.filter(x=>{const A=l.catalog.motifIndex.get(x);return A!=null&&(fs(_,Si(l.catalog.motifs[A],l.catalog))??0)>0}):[]),w=(l.run.mapsConquered??0)>0,S=w?kd(l.run,l.profile,l.catalog):null,E=x=>r?r.visibleHandIds.includes(x)?"In hand":r.drawPileIds.includes(x)?"Draw pile":r.discardPileIds.includes(x)?"Discarded":r.playedPileIds.includes(x)?"Played":null:null;return m.jsxs("section",{children:[m.jsx("h2",{children:"Powers"}),w&&m.jsx("p",{className:"meta",children:S==null?"Play a card to estimate your deck’s power.":`Estimated fight power: ${S} points. Based on revealed cards, assuming your best hand on every play; draws and folklore can change the result.`}),g.length===0?m.jsx("p",{className:"meta",children:"This run has no powers yet."}):m.jsxs(m.Fragment,{children:[m.jsx("p",{className:"meta power-hint",children:"Select a power to inspect its matches in your deck. Use its on/off control to change whether it scores. All hands bonuses also apply to specific hands."}),m.jsx("div",{className:"power-list",children:f.map(x=>m.jsxs("article",{className:"power-group",children:[m.jsxs("div",{className:"power-group-heading",children:[m.jsx("h3",{children:x.label}),m.jsx("span",{className:"power-total",children:x.key.startsWith("domain:")?x.powers.some(A=>A.on)?"See power details":"No active bonus":[x.card?`${x.card} on every card`:"",x.chips?`+${x.chips} chips${x.key.startsWith("suit:")||x.key.startsWith("rank:")?" per scoring card":""}`:"",x.mult?`+${x.mult} mult${x.key.startsWith("suit:")||x.key.startsWith("rank:")?" per scoring card":""}`:"",x.hands?`+${x.hands} hands`:"",x.discards?`+${x.discards} discards`:""].filter(Boolean).join(" · ")||"No active bonus"})]}),m.jsx("div",{className:"power-icons",children:x.powers.map(({note:A,on:R})=>{var J;const U=A.god?l.catalog.deityIndex.get(A.god):void 0,H=U==null?void 0:l.catalog.deities[U],G=Ji(H,l.paintedIds);return m.jsxs("div",{className:"power-control",children:[m.jsxs("button",{type:"button",className:`power-icon${R?"":" off"}${a===A.id?" inspecting":""}`,"aria-pressed":a===A.id,"aria-label":`${A.title}. ${Fi(A.body)} Inspect matching cards.`,onClick:()=>s(an=>an===A.id?null:A.id),children:[G?m.jsx("img",{src:ia(l.catalog.imageBase,G),alt:""}):m.jsx("span",{className:"power-fallback","aria-hidden":"true",children:((J=H==null?void 0:H.name)==null?void 0:J.charAt(0))||"✦"}),m.jsxs("span",{className:"power-detail","aria-hidden":"true",children:[m.jsx("strong",{children:A.title}),H&&m.jsx("span",{children:H.name}),m.jsx("span",{children:Fi(A.body)}),m.jsxs("small",{children:[R?"On":"Off"," · select to inspect"]})]})]}),m.jsx("button",{type:"button",className:`power-state${R?"":" off"}`,"aria-pressed":R,"aria-label":`${A.title}: ${R?"on":"off"}. Turn ${R?"off":"on"}.`,onClick:()=>A.god?l.onTogglePower(A.id):l.onToggleSkill(A.id),children:R?"✓":"−"})]},A.id)})})]},x.key))})]}),m.jsx("h2",{children:"Deck"}),m.jsxs("p",{className:"meta",children:[l.run.deckMotifIds.length," cards. A rank appears after the card is played."]}),_&&m.jsxs("p",{className:"power-inspection",role:"status",children:[m.jsxs("strong",{children:[_.title,":"]})," ",_.card!=null?`Every card scores ${_.card} chips.${p!=null&&p.on?"":" This power is currently off."}`:v?`${k.size} ${k.size===1?"card matches":"cards match"}. Highlighted cards can contribute when they score${_.when&&_.when!=="any"?` and the ${((T=Pi.find(x=>x.id===_.when))==null?void 0:T.label)??_.when} condition applies`:""}.${p!=null&&p.on?"":" This power is currently off."}`:_.hands||_.discards?"This power affects fight resources, not individual cards.":"This power depends on the hand you play, rather than individual cards."]}),m.jsx("div",{className:"catalog-grid",children:l.run.deckMotifIds.map(x=>{const A=E(x);return m.jsxs("div",{className:`deck-slot${v?k.has(x)?" power-match":" power-nonmatch":""}`,children:[m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:x}),v&&k.has(x)&&m.jsx("span",{className:"power-match-label",children:"Matches"}),A&&m.jsx("p",{className:"meta",children:A})]},x)})})]})}function Ju(l,a,s){const r=-Math.PI/2+l*2*Math.PI/a;return[110+s*Math.cos(r),110+s*Math.sin(r)]}function R0(l){var _;const[a,s]=en.useState(null),r=Lp(l.motif.neighbors,l.byId,l.axes),u=r.length,d=72,h=ov(((_=r[0])==null?void 0:_.score)??rs),g=r.map((v,k)=>{const[w,S]=Ju(k,u,d*Bp(v.score));return`${w.toFixed(1)},${S.toFixed(1)}`}).join(" "),f=[.25,.5,.75,1];function p(v,k,w){const S=v.currentTarget.getBoundingClientRect();s({name:k,score:w.toFixed(2),x:S.left+S.width/2,y:S.top})}return m.jsxs(m.Fragment,{children:[m.jsxs("svg",{className:"emoji-web-chart",viewBox:"0 0 220 220",role:l.onSelect?"group":"img","aria-label":`${l.motif.name}, ${u} nearest emoji`,children:[f.map(v=>m.jsx("circle",{cx:"110",cy:"110",r:d*v},v)),r.map((v,k)=>{const[w,S]=Ju(k,u,d);return m.jsx("line",{x1:"110",y1:"110",x2:w,y2:S},v.rank)}),m.jsx("polygon",{points:g,style:{fill:h.fill,stroke:h.stroke}}),r.map((v,k)=>{const w=l.byId.get(v.emoji),[S,E]=Ju(k,u,96),T=(w==null?void 0:w.name)??"emoji";return m.jsxs("g",{onMouseEnter:x=>p(x,T,v.score),onMouseLeave:()=>s(null),onClick:l.onSelect?()=>{var x;return(x=l.onSelect)==null?void 0:x.call(l,v.emoji)}:void 0,onKeyDown:l.onSelect?x=>{var A;(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),(A=l.onSelect)==null||A.call(l,v.emoji))}:void 0,role:l.onSelect?"button":void 0,tabIndex:l.onSelect?0:void 0,"aria-label":l.onSelect?`Extract ${T}, similarity ${v.score.toFixed(2)}`:void 0,"aria-pressed":l.onSelect?l.selected===v.emoji:void 0,className:l.onSelect?"emoji-web-selectable":void 0,children:[l.onSelect&&m.jsx("circle",{className:l.selected===v.emoji?"emoji-web-choice selected":"emoji-web-choice",cx:S,cy:E,r:"14"}),m.jsx("text",{x:S,y:E,textAnchor:"middle",dominantBaseline:"central",children:w==null?void 0:w.symbol})]},v.rank)}),m.jsx("circle",{className:"emoji-web-hub",cx:"110",cy:"110",r:"16"}),m.jsx("text",{className:"emoji-web-score",x:"110",y:"110",textAnchor:"middle",dominantBaseline:"central",children:r[0]?r[0].score.toFixed(2):""})]}),a&&m.jsxs("div",{className:"emoji-tip",style:{left:a.x,top:a.y},children:[a.name,m.jsx("span",{children:a.score})]})]})}function Qp(l){var r;const a=(r=l.scaffold)==null?void 0:r.motifs.find(u=>u.id===l.motifId);if(!a||!l.scaffold)return m.jsx("p",{className:"meta",children:"Emoji associations are unavailable."});const s=new Map(l.scaffold.emoji.map(u=>[u.id,u]));return m.jsx("div",{className:"emoji-web dissolution-web",children:m.jsx(R0,{motif:a,byId:s,axes:dd(l.maps),selected:l.selected,onSelect:l.onSelect})})}function LE(l){const[a,s]=en.useState("");if(!l.scaffold)return m.jsx("p",{className:"meta",children:"The emoji scaffold is not built yet. From the project folder, run python3 scripts/emoji_scaffold.py --verify 3"});const r=dd(l.mapsConquered),u=new Map(l.scaffold.emoji.map(p=>[p.id,p])),d=new Set(l.scaffold.motifs.filter(p=>p.occurrence>1).map(p=>p.id)),h=a.trim().toLowerCase(),g=l.scaffold.motifs.filter(p=>!h||p.name.toLowerCase().includes(h)||p.id.toLowerCase().includes(h)),f=g.slice(0,24);return m.jsxs("div",{children:[m.jsxs("p",{className:"lede",children:["Each motif shows its nearest emoji on a web. A new library has three spokes, a triangle. The furthest a run has carried you opens one more spoke for each map of that run, up to twelve: a square, then a pentagon, and onward. A later run that stops sooner leaves the web as it is. Erasing the library closes the extra spokes. The center of the web is cosine ",rs.toFixed(2)," and the rim is ",nd.toFixed(2),". A larger shape is a stronger constellation. A point that sticks out is one bead ahead of the others. The number in the middle is the strongest spoke, and the web takes its color from that number: cooler near ",rs.toFixed(2),", hotter near ",nd.toFixed(2),". Hover a symbol for its name. This does not change a hand’s score."]}),m.jsxs("p",{className:"meta",children:[r," of ",Up," spokes open.",l.mapsConquered===0?" Conquer a map to open the next.":` The best run conquered ${l.mapsConquered} ${l.mapsConquered===1?"map":"maps"}.`]}),m.jsx("div",{className:"row",children:m.jsxs("label",{children:["Search",m.jsx("input",{value:a,onChange:p=>s(p.target.value)})]})}),m.jsxs("p",{className:"meta",children:[f.length," of ",g.length," motifs."]}),m.jsx("div",{className:"emoji-grid",children:f.map(p=>m.jsxs("article",{className:"emoji-web",children:[m.jsx("h3",{children:p.name}),m.jsxs("p",{className:"meta",children:[p.id,d.has(p.id)?` #${p.occurrence}`:""]}),m.jsx(R0,{motif:p,byId:u,axes:r})]},p.sourceIndex))})]})}function VE(l){const[a,s]=en.useState(!0);return m.jsxs("article",{className:"panel text-card",children:[m.jsxs("div",{className:"text-card-head",children:[m.jsx("h2",{children:l.name}),m.jsx("button",{type:"button",className:"text-card-mark","aria-expanded":a,"aria-label":a?`Hide ${l.name}`:`Show ${l.name}`,onClick:()=>s(r=>!r),children:a?"–":"+"})]}),l.detail&&m.jsx("p",{className:"meta",children:l.detail}),a&&m.jsx("div",{className:"text-card-body",children:l.body})]})}function GE(l){const[a,s]=en.useState("motifs"),[r,u]=en.useState(""),d=r.trim().toLowerCase(),h=l.catalog.motifs.filter(k=>l.profile.encounteredMotifIds.includes(k.id)||l.profile.discoveredMotifIds.includes(k.id)).length,g=l.catalog.motifs.filter(k=>l.profile.encounteredMotifIds.includes(k.id)||l.profile.discoveredMotifIds.includes(k.id)?d?k.name.toLowerCase().includes(d):!0:!1),f=new Map,p=new Set((l.profile.artifacts??[]).map(k=>k.textId)),_=new Set;l.catalog.texts.forEach((k,w)=>{l.profile.discoveredTextIds.includes(k.id)&&!p.has(k.id)&&!_.has(k.id)&&(f.set(w,k),_.add(k.id))});for(const k of l.profile.artifacts??[]){const w=l.catalog.texts[k.textIndex];w&&w.id===k.textId&&f.set(k.textIndex,w)}const v=[...f.values()];return m.jsxs("section",{children:[m.jsxs("div",{className:"tabs",children:[m.jsx("button",{className:a==="motifs"?"primary":"",onClick:()=>s("motifs"),children:"Motifs"}),m.jsx("button",{className:a==="texts"?"primary":"",onClick:()=>s("texts"),children:"Texts"}),m.jsx("button",{className:a==="artifacts"?"primary":"",onClick:()=>s("artifacts"),children:"Artifacts"}),m.jsx("button",{className:a==="emoji"?"primary":"",onClick:()=>s("emoji"),children:"Emoji"})]}),a==="motifs"&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"row",children:m.jsxs("label",{children:["Search",m.jsx("input",{value:r,onChange:k=>u(k.target.value)})]})}),m.jsxs("p",{className:"meta",children:[l.profile.discoveredMotifIds.length," discovered · ",h," encountered"]}),m.jsx("div",{className:"catalog-grid",children:g.map(k=>m.jsx(Ce,{catalog:l.catalog,profile:l.profile,motifId:k.id},k.id))})]}),a==="emoji"&&m.jsx(LE,{scaffold:l.emoji??null,mapsConquered:l.mapsConquered??l.profile.bestMapsConquered??0}),a==="texts"&&m.jsxs("div",{className:"text-list",children:[m.jsxs("p",{className:"meta",children:[v.length," texts in the library."]}),v.map((k,w)=>m.jsx(VE,{name:k.name,detail:[k.provenance,k.source].filter(Boolean).join(" · "),body:k.description},`${k.id}-${w}`))]}),a==="artifacts"&&m.jsxs("div",{className:"artifact-list",children:[m.jsxs("p",{className:"meta",children:[l.profile.statistics.wins," won ",l.profile.statistics.wins===1?"run":"runs"," · ",(l.profile.artifacts??[]).length," ",(l.profile.artifacts??[]).length===1?"map":"maps"," kept"]}),(l.profile.artifacts??[]).length===0&&m.jsx("p",{children:"A conquered map is kept here, with the unread text closest to the average of its gods and the cosine distance between them."}),(l.profile.artifacts??[]).map(k=>{var w;return m.jsx(IE,{artifact:k,catalog:l.catalog,knownUrl:(w=l.artifactUrls)==null?void 0:w[k.id]},k.id)})]})]})}function XE(l){const[a,s]=en.useState(l.profile.upgradeAllocation),r=a0(l.profile.discoveredMotifIds.length,xi.progression.pointThresholds),u=s0(a,xi),d=o0(a,l.profile.discoveredMotifIds.length,xi);return m.jsxs("section",{className:"narrow",children:[m.jsx("h2",{children:"Progression"}),m.jsxs("p",{className:"meta",children:[l.profile.discoveredMotifIds.length," discovered motifs · ",r," points · ",r-u," unspent"]}),l.locked&&m.jsx("p",{className:"warning",children:"A run is in progress. This build changes the next run."}),["hands","discards","lives"].map(h=>m.jsxs("div",{className:"row",children:[m.jsx("strong",{children:h}),m.jsx("button",{onClick:()=>s(g=>({...g,[h]:Math.max(0,g[h]-1)})),children:"-"}),m.jsx("span",{children:a[h]}),m.jsx("button",{onClick:()=>s(g=>({...g,[h]:g[h]+1})),children:"+"})]},h)),m.jsxs("div",{className:"actions",children:[m.jsx("button",{className:"primary",disabled:!!d,onClick:()=>l.onSave(a),children:"Save build"}),m.jsx("button",{onClick:l.onExport,children:"Export save"}),m.jsxs("label",{children:["Import",m.jsx("input",{type:"file",accept:"application/json",onChange:async h=>{var f;const g=(f=h.target.files)==null?void 0:f[0];g&&l.onImport(await g.text())}})]}),m.jsx("button",{onClick:l.onReset,children:"Reset profile"})]}),d&&m.jsx("p",{className:"warning",children:d}),m.jsx("p",{className:"meta",children:"Hands cost 2, up to +2. Discards cost 1, up to +3. Lives cost 3, up to +2. Points arrive at 10, 25, 50, 75, 100, 150, and 200 discoveries."})]})}const $E=".panel, .guide-card, .ceremony-stage, .catalog-grid, .choice-grid, .log, .continuity-deck, .hand, .fusion-row";function D0(l){return l.dataset.dragScroll==="x"||l.classList.contains("hand")?"x":"y"}function Y0(l){return!l||typeof l!="object"?!1:typeof Element<"u"?l instanceof Element:typeof l.closest=="function"}function ZE(l,a){let s=Y0(l)?l:null;for(;s&&s!==a;){if(s.matches($E)&&(D0(s)==="x"?s.scrollWidth>s.clientWidth+1:s.scrollHeight>s.clientHeight+1))return s;s=s.parentElement}return null}function JE(l=document){let a=null,s="y",r=0,u=0,d=0,h=0,g=!1;const f=()=>{if(!a)return;const v=a,k=g;if(v.classList.remove("dragging"),a=null,!k)return;const w=S=>{S.preventDefault(),S.stopPropagation(),v.removeEventListener("click",w,!0)};v.addEventListener("click",w,!0)},p=v=>{if(v.button!==0||v.pointerType!=="mouse")return;const k=v.target;if(!Y0(k)||k.closest("input, textarea, select, a"))return;const w=k.closest("button");if(w&&!w.classList.contains("card"))return;const S=ZE(k,l.body);S&&(a=S,s=D0(S),r=v.clientX,u=v.clientY,d=S.scrollLeft,h=S.scrollTop,g=!1)},_=v=>{if(!a)return;const k=v.clientX-r,w=v.clientY-u;if(!(!g&&Math.hypot(k,w)<6)){if(!g){g=!0,a.classList.add("dragging");try{a.setPointerCapture(v.pointerId)}catch{}}s==="x"?a.scrollLeft=d-k:a.scrollTop=h-w,v.preventDefault()}};return l.addEventListener("pointerdown",p),l.addEventListener("pointermove",_,{passive:!1}),l.addEventListener("pointerup",f),l.addEventListener("pointercancel",f),()=>{l.removeEventListener("pointerdown",p),l.removeEventListener("pointermove",_),l.removeEventListener("pointerup",f),l.removeEventListener("pointercancel",f)}}function FE(l){const a=l.view.stage,s=(a==null?void 0:a.show)==="coach",r=eC(s?a.at:void 0);if(l.paused||!a&&l.view.banners.length===0)return null;const u=s&&r?tC(r):void 0;return m.jsxs("div",{className:"guide-layer",children:[a&&a.show!=="coach"&&m.jsx("div",{className:"guide-scrim"}),s&&r&&m.jsx("div",{className:"guide-ring",style:{left:r.left-6,top:r.top-6,width:r.width+12,height:r.height+12}}),a&&m.jsxs("article",{className:u?"guide-card anchored":"guide-card",style:u,role:"dialog","aria-modal":a.show!=="coach","aria-label":a.title,children:[m.jsx("button",{type:"button",className:"guide-close","aria-label":"Close",onClick:l.onClose,children:"×"}),m.jsx("p",{className:"guide-kicker",children:WE(a)}),m.jsx("h2",{children:a.title}),nC(a.body).map(d=>m.jsx("p",{children:m.jsx(PE,{text:d,notes:l.notes,known:l.known,live:!0})},d)),l.view.choices.length>0&&m.jsx("div",{className:"actions",children:l.view.choices.map((d,h)=>m.jsx("button",{className:h===0?"primary":void 0,autoFocus:a.show!=="coach"&&h===0,onClick:()=>l.onChoose(d.to),children:d.label},d.to))})]}),l.view.banners.length>0&&m.jsx("div",{className:"guide-banners",children:l.view.banners.map(d=>m.jsxs("div",{className:"guide-banner",children:[m.jsx("button",{className:"guide-banner-open",onClick:()=>l.onOpen(d.id),children:d.title}),m.jsx("button",{className:"guide-banner-dismiss","aria-label":`Dismiss ${d.title}`,onClick:()=>l.onDismiss(d.id),children:"×"})]},d.id))})]})}function PE(l){const a=new Set(l.known);return T7(l.text).map((s,r)=>{if(s.kind==="text")return m.jsx("span",{children:s.text},r);const u=l.notes.find(d=>d.id===s.to);return(u==null?void 0:u.voice)==="self"?m.jsx("span",{className:"self-voice",children:s.label},r):!u||!l.live&&!a.has(s.to)?m.jsx("span",{children:s.label},r):m.jsx(M0,{title:u.title,body:u.body,children:s.label},r)})}function WE(l){return l.show==="coach"?"Look here":l.show==="page"?"Lesson":"Guide"}function nC(l){return l.split(/\n\n+/).map(a=>a.trim()).filter(Boolean)}function eC(l){const[a,s]=en.useState(null);return en.useEffect(()=>{if(!l){s(null);return}let r=!1;const u=f=>{const p=document.querySelector(`[data-hook="${CSS.escape(l)}"]`);p&&f&&!r&&(r=!0,p.scrollIntoView({block:"nearest",inline:"nearest"}));const _=(p==null?void 0:p.getBoundingClientRect())??null;s(v=>_?v&&Math.abs(v.x-_.x)<.5&&Math.abs(v.y-_.y)<.5&&Math.abs(v.width-_.width)<.5&&Math.abs(v.height-_.height)<.5?v:_:v==null?v:null)};u(!0);const d=window.requestAnimationFrame(()=>u(!1)),h=new MutationObserver(()=>u(!0));h.observe(document.body,{childList:!0,subtree:!0});const g=()=>u(!1);return window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{window.cancelAnimationFrame(d),h.disconnect(),window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[l]),a}function tC(l){const a=Math.min(360,window.innerWidth-24);if(l.width>window.innerWidth*.55||l.height>window.innerHeight*.45)return{left:Math.max(12,(window.innerWidth-a)/2),top:Math.max(12,window.innerHeight-210),width:a};const s=Math.min(Math.max(12,l.left),window.innerWidth-a-12),r=l.bottom+14,u=r+190<window.innerHeight?r:Math.max(12,l.top-200);return{left:s,top:u,width:a}}const iC=.65,lC=8e3;function Pl(l){return`m:${l}`}function Nd(l){return`artifact:${l}`}function aC(l){return`text:${l}`}function rd(l,a,s){return l.has(s)?"discovered":a.has(s)?"encountered":"unseen"}function sC(l,a){return`Model suggestion: embedding cosine ${l.toFixed(2)} (${a}). Not an explained connection.`}function Kp(l,a){for(;;){let s=a;const r=a*2+1,u=r+1;if(r<l.length&&l[r].sim<l[s].sim&&(s=r),u<l.length&&l[u].sim<l[s].sim&&(s=u),s===a)break;const d=l[s];l[s]=l[a],l[a]=d,a=s}}function oC(l,a,s,r,u){const d=Math.round(r*s),h=[];let g=0;for(let f=0;f<a;f+=1){const p=f*a;for(let _=f+1;_<a;_+=1){const v=l[p+_];if(v<d)continue;g+=1;const k={sim:v/s,i:f,j:_};if(h.length<u){if(h.push(k),h.length===u)for(let w=(h.length>>1)-1;w>=0;w-=1)Kp(h,w)}else k.sim>h[0].sim&&(h[0]=k,Kp(h,0))}}return{links:h,total:g}}function cC(l){const a=l*2.399963229728653,s=16*Math.sqrt(l+1);return{x:Math.cos(a)*s,y:Math.sin(a)*s}}function Fu(l,a,s,r){const d=s.get(l)??cC(r);return{id:l,kind:a,x:d.x,y:d.y,vx:0,vy:0}}function rC(l){const a=new Map(l.motifIds.map((f,p)=>[f,p])),s=l.motifIds.map((f,p)=>Fu(Pl(p),"motif",l.positions,p)),r=new Map(s.map(f=>[f.id,f])),u=[];let d=0,h=0;if(l.motifMotif&&l.motifMotif.length>=l.motifIds.length*l.motifIds.length){const f=oC(l.motifMotif,l.motifIds.length,l.scale,l.threshold,lC);d=f.total,h=f.links.length;for(const p of f.links)u.push({source:Pl(p.i),target:Pl(p.j),kind:"similarity",similarity:p.sim})}const g=new Map;return l.artifacts.forEach((f,p)=>{const _=Nd(f.id),v=Fu(_,"artifact",l.positions,l.motifIds.length+p);s.push(v),r.set(_,v);const k=new Map;let w=0;for(const T of f.regions??[]){const x=l.deityNames.get(T.deityId),A=x?`Placed with ${x}`:"Placed in a land of this map";for(const R of T.motifIds){const U=a.get(R);if(U===void 0){w+=1;continue}const H=k.get(Pl(U))??[];H.includes(A)||H.push(A),k.set(Pl(U),H)}}for(const[T,x]of k)u.push({source:_,target:T,kind:"map",detail:x.join(" · ")});const S=new Set;for(const T of f.deckMotifIds??[]){const x=a.get(T);if(x===void 0){w+=1;continue}const A=Pl(x);S.has(A)||(S.add(A),u.push({source:_,target:A,kind:"deck",detail:"In the deck carried with this map"}))}w>0&&g.set(_,w);const E=l.textIds[f.textIndex];if(E!==void 0&&E===f.textId){const T=aC(f.textIndex);if(!r.has(T)){const x=Fu(T,"text",l.positions,l.motifIds.length+l.artifacts.length+f.textIndex);s.push(x),r.set(T,x)}u.push({source:_,target:T,kind:"text",detail:"The text kept with this map"})}if(!l.positions.has(_)){const T=u.filter(x=>x.source===_&&x.kind!=="text");if(T.length>0){let x=0,A=0,R=0;for(const U of T){const H=r.get(U.target);H&&(x+=H.x,A+=H.y,R+=1)}R>0&&(v.x=x/R+42,v.y=A/R)}}}),{nodes:s,links:u,similarityTotal:d,similarityShown:h,unresolvedMotifs:g}}function Op(l){return l==="artifact"?22:l==="text"?14:11}function uC(l,a,s){const u=new Map;for(const h of l){const g=`${Math.floor(h.x/56)},${Math.floor(h.y/56)}`,f=u.get(g);f?f.push(h):u.set(g,[h])}for(const h of l){const g=Math.floor(h.x/56),f=Math.floor(h.y/56);for(let p=-1;p<=1;p+=1)for(let _=-1;_<=1;_+=1){const v=u.get(`${g+p},${f+_}`);if(v)for(const k of v){if(k.id<=h.id)continue;let w=h.x-k.x,S=h.y-k.y,E=w*w+S*S;if(E<.01&&(w=1,S=0,E=1),E>3136*2.2)continue;const T=Math.sqrt(E),x=Op(h.kind)+Op(k.kind)+8,R=(T<x?(x-T)*.25:120/E)*s,U=w/T,H=S/T;h.vx+=U*R,h.vy+=H*R,k.vx-=U*R,k.vy-=H*R}}}const d=new Map(l.map(h=>[h.id,h]));for(const h of a){const g=d.get(h.source),f=d.get(h.target);if(!g||!f)continue;const p=f.x-g.x,_=f.y-g.y,v=Math.hypot(p,_)||1,k=h.kind==="similarity"?64+(1-(h.similarity??.6))*90:120,w=(v-k)*(h.kind==="similarity"?.015:.035)*s,S=p/v,E=_/v;g.vx+=S*w,g.vy+=E*w,f.vx-=S*w,f.vy-=E*w}for(const h of l)h.vx+=-h.x*.0015*s,h.vy+=-h.y*.0015*s,h.vx*=.55,h.vy*=.55,h.x+=h.vx,h.y+=h.vy,h.vx=0,h.vy=0}const wn={positions:new Map,camera:{x:0,y:0,k:1},fitted:!1,threshold:iC,catalogVersion:""};function I0(l){return m.jsxs("div",{className:"view-switch",role:"group","aria-label":"View",children:[m.jsx("button",{type:"button","aria-pressed":l.surface==="play","aria-label":"Game",onClick:()=>l.onSurface("play"),children:m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[m.jsx("rect",{x:"5",y:"3",width:"14",height:"4.5",rx:"1.2"}),m.jsx("rect",{x:"5",y:"9.75",width:"14",height:"4.5",rx:"1.2"}),m.jsx("rect",{x:"5",y:"16.5",width:"14",height:"4.5",rx:"1.2"})]})}),m.jsx("button",{type:"button","aria-pressed":l.surface==="network","aria-label":"Network",onClick:()=>l.onSurface("network"),children:m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[m.jsx("circle",{cx:"6",cy:"8",r:"2.2"}),m.jsx("circle",{cx:"17",cy:"6",r:"2.2"}),m.jsx("circle",{cx:"12",cy:"17",r:"2.6"}),m.jsx("path",{d:"M8 9.2 10.6 15M15.2 7.6 13.2 14.6M8 8h7"})]})})]})}function Pu(l,a){return l.kind==="artifact"?13:l.kind==="text"?7:a==="discovered"?6.2:a==="encountered"?4.8:3.2}function dC(l,a,s){if(l.length===0||a<2||s<2)return;let r=1/0,u=1/0,d=-1/0,h=-1/0;for(const _ of l)r=Math.min(r,_.x),u=Math.min(u,_.y),d=Math.max(d,_.x),h=Math.max(h,_.y);const g=Math.max(40,d-r),f=Math.max(40,h-u),p=Math.min(a/(g+80),s/(f+80),1.6);wn.camera.k=p,wn.camera.x=a/2-(r+d)/2*p,wn.camera.y=s/2-(u+h)/2*p,wn.fitted=!0}function hC(l){var un;const a=en.useRef(null),s=en.useRef(null),r=en.useRef(null),u=en.useRef(null),d=en.useRef(new Map),h=en.useRef({moved:!1,pinch:0,pinchK:1}),g=en.useRef({width:0,height:0}),[f,p]=en.useState(wn.threshold),[_,v]=en.useState(wn.threshold),[k,w]=en.useState(null),[S,E]=en.useState(!1),T=en.useMemo(()=>new Set(l.profile.discoveredMotifIds),[l.profile.discoveredMotifIds]),x=en.useMemo(()=>new Set(l.profile.encounteredMotifIds),[l.profile.encounteredMotifIds]),A=en.useMemo(()=>new Map(l.catalog.deities.map(F=>[F.id,F.name])),[l.catalog]);en.useEffect(()=>{const F=window.setTimeout(()=>{wn.threshold=f,v(f)},140);return()=>window.clearTimeout(F)},[f]);const R=en.useMemo(()=>{var F,ln;return wn.catalogVersion!==l.catalog.catalogVersion&&(wn.positions.clear(),wn.fitted=!1,wn.catalogVersion=l.catalog.catalogVersion),rC({motifIds:l.catalog.motifs.map(P=>P.id),motifMotif:(F=l.catalog.similarities)==null?void 0:F.motifMotif,scale:((ln=l.catalog.similarities)==null?void 0:ln.scale)??l.catalog.similarityScale,threshold:_,artifacts:l.profile.artifacts??[],textIds:l.catalog.texts.map(P=>P.id),deityNames:A,positions:wn.positions})},[l.catalog,l.profile.artifacts,A,_]);r.current=R,u.current=k;function U(){var En,Sn;const F=s.current,ln=a.current,P=r.current;if(!F||!ln||!P)return;const I=ln.clientWidth,$=ln.clientHeight,Y=Math.min(window.devicePixelRatio||1,2);F.width=Math.max(1,Math.floor(I*Y)),F.height=Math.max(1,Math.floor($*Y));const z=F.getContext("2d");if(!z)return;z.setTransform(Y,0,0,Y,0,0),z.fillStyle="#12100e",z.fillRect(0,0,I,$);const sn=wn.camera;z.translate(sn.x,sn.y),z.scale(sn.k,sn.k);const bn=-sn.x/sn.k-40,vn=-sn.y/sn.k-40,ie=bn+I/sn.k+80,N=vn+$/sn.k+80,X=new Map(P.nodes.map(Z=>[Z.id,Z])),cn=(Z,tn)=>!(Z.x<bn&&tn.x<bn||Z.x>ie&&tn.x>ie||Z.y<vn&&tn.y<vn||Z.y>N&&tn.y>N);z.beginPath();for(const Z of P.links){if(Z.kind!=="similarity")continue;const tn=X.get(Z.source),dn=X.get(Z.target);!tn||!dn||!cn(tn,dn)||(z.moveTo(tn.x,tn.y),z.lineTo(dn.x,dn.y))}z.strokeStyle="rgba(142, 174, 138, 0.45)",z.lineWidth=.7,z.stroke();for(const Z of P.links){if(Z.kind==="similarity")continue;const tn=X.get(Z.source),dn=X.get(Z.target);!tn||!dn||!cn(tn,dn)||(z.beginPath(),z.moveTo(tn.x,tn.y),z.lineTo(dn.x,dn.y),Z.kind==="map"?(z.strokeStyle="#b7ddd4",z.lineWidth=1.6,z.setLineDash([7,5])):Z.kind==="deck"?(z.strokeStyle="#d7b56a",z.lineWidth=1.5,z.setLineDash([2,4])):(z.strokeStyle="#c45b4a",z.lineWidth=1.6,z.setLineDash([])),z.stroke())}z.setLineDash([]);const rn=(Z,tn)=>{z.font=`${12/sn.k}px Palatino, "Palatino Linotype", serif`,z.textAlign="center",z.fillStyle="#f3ead7",z.fillText(tn,Z.x,Z.y+Pu(Z,null)+12/sn.k)};for(const Z of P.nodes){if(Z.x<bn||Z.x>ie||Z.y<vn||Z.y>N)continue;const tn=Z.kind==="motif"?Number(Z.id.slice(2)):-1,dn=tn>=0?rd(T,x,((En=l.catalog.motifs[tn])==null?void 0:En.id)??""):null,fe=Pu(Z,dn);if(z.beginPath(),z.arc(Z.x,Z.y,fe,0,Math.PI*2),Z.kind==="artifact"?(z.fillStyle="#d7b56a",z.fill(),z.lineWidth=2.5,z.strokeStyle="#f3ead7",z.stroke()):Z.kind==="text"?(z.fillStyle="#c45b4a",z.fill()):dn==="discovered"?(z.fillStyle="#f4e2b0",z.fill(),z.lineWidth=1.2,z.strokeStyle="#8c6a32",z.stroke()):dn==="encountered"?(z.fillStyle="#8d8376",z.fill()):(z.fillStyle="#3a342c",z.fill()),Z.id===u.current&&(z.beginPath(),z.arc(Z.x,Z.y,fe+4,0,Math.PI*2),z.strokeStyle="#fff4d2",z.lineWidth=2,z.stroke()),Z.id===u.current||Z.kind==="artifact"&&sn.k>.45||Z.kind==="text"&&sn.k>.7||dn==="discovered"&&sn.k>1.05)if(Z.kind==="motif")rn(Z,((Sn=l.catalog.motifs[tn])==null?void 0:Sn.name)??"");else if(Z.kind==="artifact"){const le=(l.profile.artifacts??[]).find(Jn=>Nd(Jn.id)===Z.id),de=le?l.catalog.texts[le.textIndex]:void 0;rn(Z,de&&de.id===(le==null?void 0:le.textId)?de.name:"Map")}else{const le=l.catalog.texts[Number(Z.id.slice(5))];rn(Z,(le==null?void 0:le.name)??"Text")}}}en.useEffect(()=>{const F=r.current;if(!F)return;if(wn.fitted){U(),E(!0);return}for(let P=0;P<20;P+=1)uC(F.nodes,F.links,.8*(1-P/20));for(const P of F.nodes)wn.positions.set(P.id,{x:P.x,y:P.y});const ln=a.current;ln&&dC(F.nodes,ln.clientWidth,ln.clientHeight),U(),E(!0)},[R]),en.useEffect(()=>{const F=a.current,ln=s.current;if(!F||!ln)return;const P=new ResizeObserver(()=>{const $=F.clientWidth,Y=F.clientHeight,z=g.current;if(z.width>0&&z.height>0&&($!==z.width||Y!==z.height)){const sn=(z.width/2-wn.camera.x)/wn.camera.k,bn=(z.height/2-wn.camera.y)/wn.camera.k;wn.camera.x=$/2-sn*wn.camera.k,wn.camera.y=Y/2-bn*wn.camera.k}g.current={width:$,height:Y},U()});P.observe(F);const I=$=>{$.preventDefault(),G($.clientX,$.clientY,wn.camera.k*($.deltaY>0?.92:1.08))};return ln.addEventListener("wheel",I,{passive:!1}),()=>{P.disconnect(),ln.removeEventListener("wheel",I)}});function H(F,ln){const P=s.current;if(!P)return{x:0,y:0};const I=P.getBoundingClientRect();return{x:(F-I.left-wn.camera.x)/wn.camera.k,y:(ln-I.top-wn.camera.y)/wn.camera.k}}function G(F,ln,P){const I=s.current;if(!I)return;const $=I.getBoundingClientRect(),Y=H(F,ln);wn.camera.k=Math.min(6,Math.max(.12,P)),wn.camera.x=F-$.left-Y.x*wn.camera.k,wn.camera.y=ln-$.top-Y.y*wn.camera.k,U()}function J(F,ln){var z;const P=r.current;if(!P)return null;const I=H(F,ln);let $=null,Y=1/0;for(const sn of P.nodes){const bn=sn.kind==="motif"?Number(sn.id.slice(2)):-1,vn=bn>=0?rd(T,x,((z=l.catalog.motifs[bn])==null?void 0:z.id)??""):null,ie=Math.max(Pu(sn,vn)+3,16/wn.camera.k),N=Math.hypot(sn.x-I.x,sn.y-I.y);N<=ie&&N<Y&&($=sn.id,Y=N)}return $}function an(F){try{F.currentTarget.setPointerCapture(F.pointerId)}catch{}if(d.current.set(F.pointerId,{x:F.clientX,y:F.clientY}),h.current.moved=!1,d.current.size===2){const[ln,P]=[...d.current.values()];h.current.pinch=Math.hypot(ln.x-P.x,ln.y-P.y)||1,h.current.pinchK=wn.camera.k}}function nn(F){const ln=d.current.get(F.pointerId);if(!ln)return;const P=F.clientX-ln.x,I=F.clientY-ln.y;if(Math.hypot(P,I)>5&&(h.current.moved=!0),d.current.set(F.pointerId,{x:F.clientX,y:F.clientY}),d.current.size>=2){const[$,Y]=[...d.current.values()],z=Math.hypot($.x-Y.x,$.y-Y.y)||1;G(($.x+Y.x)/2,($.y+Y.y)/2,h.current.pinchK*(z/h.current.pinch));return}h.current.moved&&(wn.camera.x+=P,wn.camera.y+=I,U())}function fn(F){const ln=h.current.moved;if(d.current.delete(F.pointerId),d.current.size===0&&!ln){const P=J(F.clientX,F.clientY);u.current=P,w(P),U()}d.current.size===0&&(h.current.moved=!1)}en.useEffect(()=>{function F(ln){const P=ln.target;if(P&&(P.tagName==="INPUT"||P.tagName==="TEXTAREA"))return;const I=40;if(ln.key==="ArrowLeft")wn.camera.x+=I;else if(ln.key==="ArrowRight")wn.camera.x-=I;else if(ln.key==="ArrowUp")wn.camera.y+=I;else if(ln.key==="ArrowDown")wn.camera.y-=I;else if(ln.key==="+"||ln.key==="=")wn.camera.k=Math.min(6,wn.camera.k*1.15);else if(ln.key==="-"||ln.key==="_")wn.camera.k=Math.max(.12,wn.camera.k/1.15);else if(ln.key==="Escape")u.current=null,w(null);else return;ln.preventDefault(),U()}return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)});const gn=(un=l.catalog.similarities)!=null&&un.motifMotif?R.similarityTotal>R.similarityShown?`Showing the strongest ${R.similarityShown.toLocaleString()} of ${R.similarityTotal.toLocaleString()} similarity links`:`${R.similarityShown.toLocaleString()} similarity links`:"Motif similarity is not in this catalog";return m.jsxs("section",{className:"network","aria-label":"Encyclopedia network",children:[m.jsxs("div",{className:"network-bar",children:[m.jsx(I0,{surface:"network",onSurface:l.onSurface}),m.jsxs("label",{className:"network-threshold",children:[m.jsx("span",{children:"Similarity"}),m.jsx("input",{type:"range",min:.45,max:.85,step:.01,value:f,"aria-valuetext":f.toFixed(2),onChange:F=>p(Number(F.target.value))}),m.jsx("strong",{children:f.toFixed(2)})]}),m.jsxs("p",{className:"network-stats",children:[l.catalog.motifs.length.toLocaleString()," motifs · ",l.profile.discoveredMotifIds.length," discovered · ",l.profile.encounteredMotifIds.length," encountered"," · ",(l.profile.artifacts??[]).length," ",(l.profile.artifacts??[]).length===1?"artifact":"artifacts"," · ",gn,_===f?"":" · updating",S?"":" · settling"]}),m.jsxs("p",{className:"network-legend",children:[m.jsxs("span",{children:[m.jsx("i",{className:"swatch discovered"})," discovered"]}),m.jsxs("span",{children:[m.jsx("i",{className:"swatch encountered"})," encountered"]}),m.jsxs("span",{children:[m.jsx("i",{className:"swatch unseen"})," unseen"]}),m.jsxs("span",{children:[m.jsx("i",{className:"swatch artifact"})," artifact"]}),m.jsxs("span",{children:[m.jsx("i",{className:"swatch link-similarity"})," model suggestion"]}),m.jsxs("span",{children:[m.jsx("i",{className:"swatch link-stored"})," stored with a map"]})]})]}),m.jsxs("div",{className:"network-stage",ref:a,children:[m.jsx("canvas",{ref:s,role:"application","aria-label":"Motif network. Drag to pan, pinch or scroll to zoom, tap a point to inspect it.",onPointerDown:an,onPointerMove:nn,onPointerUp:fn,onPointerCancel:fn}),k&&m.jsx(fC,{id:k,graph:R,catalog:l.catalog,profile:l.profile,discovered:T,encountered:x,onClose:()=>{u.current=null,w(null),U()}})]})]})}function fC(l){const a=l.id.startsWith("artifact:")?"artifact":l.id.startsWith("text:")?"text":"motif",s=l.graph.links.filter(p=>p.source===l.id||p.target===l.id),r=s.filter(p=>p.kind==="similarity").sort((p,_)=>(_.similarity??0)-(p.similarity??0)),u=s.filter(p=>p.kind!=="similarity");let d=l.id,h="Motif",g="";const f=[];if(a==="motif"){const p=l.catalog.motifs[Number(l.id.slice(2))];d=(p==null?void 0:p.name)??l.id;const _=p?rd(l.discovered,l.encountered,p.id):"unseen";if(g=_==="discovered"?"Discovered. Its rank stays known.":_==="encountered"?"Encountered. The picture and the name have been seen.":"Not yet encountered.",p!=null&&p.chapter&&f.push(p.chapter),_==="discovered"&&p){p.tarotName&&f.push(p.tarotName);const v=p.wild?`${p.rank}, wild`:`${p.rank} of ${p.suit}`;v!==p.tarotName&&f.push(v)}p!=null&&p.description&&f.push(p.description)}else if(a==="artifact"){h="Artifact";const p=(l.profile.artifacts??[]).find(k=>Nd(k.id)===l.id),_=p?l.catalog.texts[p.textIndex]:void 0,v=!!(_&&p&&_.id===p.textId);if(d=v&&_?_.name:"Kept map",g="A map kept from a conquered run.",p){const k=p.distanceBasis?` Basis: ${p.distanceBasis}.`:" No distance basis was stored.";f.push(`Recorded distance ${p.distance.toFixed(3)}.${k}`),p.deityIds.length>0&&f.push(`Gods stored with it: ${p.deityIds.map(S=>{var E;return((E=l.catalog.deities[l.catalog.deityIndex.get(S)??-1])==null?void 0:E.name)??S}).join(", ")}.`),!p.regions&&!p.deckMotifIds&&f.push("No motif list was stored, so this map is not connected to motifs."),v||f.push("The stored text does not match this catalog, so no text is connected.");const w=l.graph.unresolvedMotifs.get(l.id);w&&f.push(`${w} stored motif ${w===1?"id is":"ids are"} not in this catalog.`)}}else{h="Text";const p=l.catalog.texts[Number(l.id.slice(5))];d=(p==null?void 0:p.name)??"Text",g=l.profile.discoveredTextIds.includes((p==null?void 0:p.id)??"")?"In the library.":"Named by a kept map.",p!=null&&p.provenance&&f.push(p.provenance),p!=null&&p.source&&f.push(p.source),p!=null&&p.dataSource&&f.push(p.dataSource),p!=null&&p.description&&f.push(p.description)}return m.jsxs("aside",{className:"network-inspect","aria-label":d,children:[m.jsxs("div",{className:"network-inspect-head",children:[m.jsxs("div",{children:[m.jsx("p",{className:"meta",children:h}),m.jsx("h2",{children:d})]}),m.jsx("button",{type:"button",onClick:l.onClose,"aria-label":"Close details",children:"Close"})]}),g&&m.jsx("p",{children:g}),[...new Set(f)].map(p=>m.jsx("p",{className:"meta",children:p},p)),m.jsx("h3",{children:"Relationships on screen"}),u.length===0&&r.length===0&&m.jsx("p",{className:"meta",children:"Nothing drawn from this point at the current threshold."}),u.map(p=>m.jsx("p",{className:"meta",children:gC(p.kind,p.detail)},`${p.kind}-${p.source}-${p.target}`)),r.slice(0,8).map(p=>{var k;const _=p.source===l.id?p.target:p.source,v=((k=l.catalog.motifs[Number(_.slice(2))])==null?void 0:k.name)??_;return m.jsxs("p",{className:"meta",children:[v,". ",sC(p.similarity??0,l.catalog.embeddingModel)]},`${p.source}-${p.target}`)}),r.length>8&&m.jsxs("p",{className:"meta",children:[r.length-8," more model suggestions are drawn and not listed."]})]})}function gC(l,a){return l==="map"?a??"Placed on this map.":l==="deck"?a??"In the deck carried with this map.":l==="text"?a??"The text kept with this map.":a??""}class H0{constructor(){$l(this,"button","Begin here")}}class mC{constructor(){$l(this,"byId",new Map)}add(a){this.byId.set(a.id,a)}get(a){return this.byId.get(a)}}const cs=new mC,pC=3;function zp(l,a){let s=l>>>0;for(let r=0;r<a.length;r+=1)s=Math.imul(s^a.charCodeAt(r),16777619);return s>>>0||1}function yC(l,a){var d;const s=new Map(l.map(h=>[h.id,h])),r=new Map([[a,0]]),u=[a];for(;u.length;){const h=u.shift(),g=r.get(h);for(const f of((d=s.get(h))==null?void 0:d.neighborRegionIds)??[])r.has(f)||(r.set(f,g+1),u.push(f))}return r}function U0(l,a){const s=yC(l.regions,a.id),r=l.configSnapshot.difficulty.targetModel==="potential",u=l.regions.map(h=>{const g=s.get(h.id)??h.hopDistance;return{...h,hopDistance:g,targetScore:r?0:y0(g,h.motifIds.length,l.configSnapshot),targetLocked:!r}}),d=l.configSnapshot.world.startRegionInitiallyConquered?[a.id]:[];return{...l,regions:u,startRegionId:a.id,conqueredRegionIds:d,pendingOffer:void 0}}function _C(l){const a=new Set(l.run.metDeityIds??[]),s=new Set(l.run.powers??[]);for(const r of l.notes)r.kind==="skill"&&r.god&&s.has(r.id)&&a.add(r.god);return a}function Rp(l,a){return(s,r)=>{const u=a.has(s.deityId)?0:1,d=a.has(r.deityId)?0:1;return u-d||zp(l.run.rngState,s.id)-zp(l.run.rngState,r.id)}}function Md(l){const a=_C(l),s=l.run.regions.filter(k=>!a.has(k.deityId)),r=s.length>0?s:l.run.regions,u=new Set(l.notes.filter(k=>k.kind==="skill"&&k.god).map(k=>k.god)),d=l.run.regions.find(k=>k.id===l.run.startRegionId),h=r.filter(k=>d==null?void 0:d.neighborRegionIds.includes(k.id)).sort(Rp(l,u)),g=r.find(k=>k.id===(d==null?void 0:d.id))??h[0]??r[0],f=new Set((g==null?void 0:g.neighborRegionIds)??[]),p=r.filter(k=>k.id!==(g==null?void 0:g.id)&&f.has(k.id)).sort(Rp(l,u)),_=g?[g]:[],v=new Set(_.map(k=>k.deityId));for(const k of p){if(_.length>=pC)break;v.has(k.deityId)||(v.add(k.deityId),_.push(k))}return _}function B0(l,a){const s=l.catalog.deities[l.catalog.deityIndex.get(a.deityId)??-1],r=pd(l.notes,a.deityId);return{id:a.id,deityId:a.deityId,title:(s==null?void 0:s.name)??a.deityId,detail:r.map(u=>u.title).join(" · ")||(s==null?void 0:s.pantheon)||"No power",body:r.map(u=>u.text).join(`

`)||"This land grants no power.",motifIds:gd(l.run,a)}}function L0(l,a){return l.run.pendingOffer?Md(l).find(s=>s.id===a)??null:null}class vC extends H0{constructor(){super(...arguments);$l(this,"id","starting-territory")}choices(s){return Md(s).map(r=>B0(s,r))}apply(s,r){if(s.run.pendingOffer!==this.id)return null;const u=L0(s,r);if(!u)return null;const d={...U0(s.run,u),deckMotifIds:[...new Set([...gd(s.run,u),...s.run.pendingAlchemyIds??[]])],pendingAlchemyIds:void 0,powers:[],powersOff:[]},h=gs(d,u.deityId,s.notes);return{run:aa(h,s.profile,s.catalog),profile:s.profile}}}class kC extends H0{constructor(){super(...arguments);$l(this,"id","joining-territory");$l(this,"button","Join here")}choices(s){return Md(s).map(r=>B0(s,r))}apply(s,r){if(s.run.pendingOffer!==this.id)return null;const u=L0(s,r);if(!u)return null;const d=gs(U0(s.run,u),u.deityId,s.notes);return{run:aa(d,s.profile,s.catalog),profile:s.profile}}}cs.add(new vC);cs.add(new kC);function wC(){var Wi,oa,dt,nl,el,vs,ca,tl,il,ll,ks,ws;const[l,a]=en.useState(null),[s,r]=en.useState(null),[u,d]=en.useState(null),[h,g]=en.useState(null),[f,p]=en.useState(null),[_,v]=en.useState(null),[k,w]=en.useState("home"),[S,E]=en.useState("play"),[T,x]=en.useState(null),[A,R]=en.useState(null),[U,H]=en.useState(null),[G,J]=en.useState(!1),[an,nn]=en.useState({}),[fn,gn]=en.useState(null),un=en.useRef(!1),F=en.useRef(f),ln=en.useRef(null),P=en.useRef(null),I=en.useRef(0),$=en.useRef(new Set),Y=en.useRef(!1),z=en.useRef(null),sn=en.useRef(!1);en.useEffect(()=>JE(),[]),en.useEffect(()=>{let B=!1;return uv().then(W=>{B||r(W)}).catch(()=>{B||r(null)}),()=>{B=!0}},[]),en.useEffect(()=>{let B=!1;return Promise.all([V9(),L9()]).then(async([W,pn])=>{if(B)return;d(pn);const xn=await $9(),On=await Z9(),Vn=On&&On.catalogVersion===W.catalog.catalogVersion?On:null,se=sc(pp(xn??mp(W.catalog.catalogVersion),xi,Pn=>W.catalog.motifIndex.has(Pn),Pn=>W.catalog.textIndex.has(Pn),W.catalog.catalogVersion),Vn==null?void 0:Vn.mapsConquered);a(W.catalog),g(W.tables),p(se),Vn&&v(Vn)}).catch(W=>{B||x(W instanceof Error?W.message:"The catalog failed to load.")}),()=>{B=!0}},[]);function bn(B){var pn,xn,On;const W=((xn=(pn=B.run)==null?void 0:pn.lastPlay)==null?void 0:xn.kind)==="play"?B.run.lastPlay.stamp:void 0;sn.current&&W!=null&&W!==z.current&&((On=B.run)!=null&&On.lastPlay)&&(z.current=W,H(B.run.lastPlay)),v(B.run),p(B.profile),Promise.all([Zu(B.run),Fl(B.profile)]).finally(()=>{un.current=!1;const Vn=P.current;P.current=null,Vn&&vn(Vn)})}function vn(B){if(f){if(un.current){P.current=B;return}un.current=!0;try{bn(B())}catch(W){un.current=!1,P.current=null,x(W instanceof Error?W.message:"That action failed.")}}}function ie(B,W){if(Y.current)return;const pn=I.current,xn=J9(B,W).then(()=>{if(I.current!==pn)return F9(B);const On=URL.createObjectURL(W);nn(Vn=>(Vn[B]&&URL.revokeObjectURL(Vn[B]),{...Vn,[B]:On}))}).catch(()=>x("Could not save a map image in this browser."));$.current.add(xn),xn.finally(()=>$.current.delete(xn))}function N(){l&&(I.current+=1,H(null),J(!1),nn(B=>{for(const W of Object.values(B))URL.revokeObjectURL(W);return{}}),bn({run:null,profile:mp(l.catalogVersion)}),w("home"),P9())}function X(B){!l||!h||!f||un.current||(x(null),R("Casting the world…"),window.setTimeout(()=>{const W=crypto.randomUUID();vn(()=>M9(W,B,f,l,h,u)),R(null),w("auto")},40))}const cn=n0(k,_),rn=_!=null&&_.pendingOffer?Qn.notes.find(B=>B.show==="offer"&&B.offer===_.pendingOffer):void 0,En=cn==="battle"&&_&&f&&l&&h&&!U?K9(_,f,l,h):null,Sn=f?id(f,_,{view:k,ceremony:U!=null}):null,Z=f&&Sn?Tp(Qn.notes,((Wi=f.guide)==null?void 0:Wi.beat)??"start",Sn,((oa=f.guide)==null?void 0:oa.dismissed)??[]):null,tn=((dt=Z==null?void 0:Z.stage)==null?void 0:dt.show)==="dialog"||((nl=Z==null?void 0:Z.stage)==null?void 0:nl.show)==="page";function dn(B){if(!f)return;const W=Tp(Qn.notes,B.beat,id(f,_,{view:k,ceremony:U!=null}),B.dismissed),pn={...f,guide:{beat:W.beat,dismissed:B.dismissed,known:B.known??[],off:B.off??[]}};p(pn),Fl(pn)}function fe(B,W){var se,Pn,ht,Ne;if(!f||!Z)return;const pn=((se=f.guide)==null?void 0:se.dismissed)??[],xn=W&&!pn.includes(Z.beat)?[...pn,Z.beat]:pn,On=Qn.notes.find(Me=>Me.id===Z.beat),Vn=W?j7(On,((Pn=f.guide)==null?void 0:Pn.known)??[]):((ht=f.guide)==null?void 0:ht.known)??[];dn({beat:B,dismissed:xn,known:Vn,off:((Ne=f.guide)==null?void 0:Ne.off)??[]})}function qt(){var On,Vn,se;if(!f||!(Z!=null&&Z.stage))return;const B=((On=f.guide)==null?void 0:On.dismissed)??[],W=Z.beat,pn=B.includes(W)?B:[...B,W],xn=Z.choices.some(Pn=>Pn.to==="playing");dn({beat:xn?"playing":W,dismissed:pn,known:((Vn=f.guide)==null?void 0:Vn.known)??[],off:((se=f.guide)==null?void 0:se.off)??[]})}function le(B){if(!_)return;const W=n9(_,B);v(W),Zu(W)}function de(B){var Vn,se,Pn,ht;if(!f)return;const W=((Vn=f.guide)==null?void 0:Vn.off)??[],pn=((se=f.guide)==null?void 0:se.known)??[],xn=W.includes(B),On=Qn.notes.some(Ne=>Ne.id===B&&Ne.dev);dn({beat:((Pn=f.guide)==null?void 0:Pn.beat)??"playing",dismissed:((ht=f.guide)==null?void 0:ht.dismissed)??[],known:xn&&On&&!pn.includes(B)?[...pn,B]:pn,off:xn?W.filter(Ne=>Ne!==B):[...W,B]})}en.useEffect(()=>{var W,pn,xn,On;if(!f||!Z||Z.beat===(((W=f.guide)==null?void 0:W.beat)??"start"))return;const B={...f,guide:{beat:Z.beat,dismissed:((pn=f.guide)==null?void 0:pn.dismissed)??[],known:((xn=f.guide)==null?void 0:xn.known)??[],off:((On=f.guide)==null?void 0:On.off)??[]}};p(B),Fl(B)},[Z==null?void 0:Z.beat,f]),en.useEffect(()=>{var B;!_||sn.current||(sn.current=!0,z.current=((B=_.lastPlay)==null?void 0:B.kind)==="play"?_.lastPlay.stamp??null:null)},[_]),en.useEffect(()=>{function B(W){const pn=W.target;if(!(pn&&(pn.tagName==="INPUT"||pn.tagName==="TEXTAREA"))&&!(U||tn)&&!(cn!=="battle"||!(_!=null&&_.battle)||_.battle.status!=="active"||!l||!h||!f))if(W.key==="Enter"){W.preventDefault();const xn=_.battle.selectedIds.length>0?_:us(_);vn(()=>ta(xn,f,l,h))}else(W.key==="Backspace"||W.key==="Delete")&&(W.preventDefault(),vn(()=>Cp(_,f)))}return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)});const Jn=_&&l&&h&&f&&((el=_.battle)==null?void 0:el.status)==="active"?I9(_,f,l,h):null,zn=B=>{var W;return B&&l?(W=l.deities[l.deityIndex.get(B)??-1])==null?void 0:W.name:void 0},$n=zn((vs=_==null?void 0:_.regions.find(B=>B.id===_.startRegionId))==null?void 0:vs.deityId),We=zn((ca=_==null?void 0:_.regions.find(B=>{var W;return B.id===((W=_.battle)==null?void 0:W.regionId)}))==null?void 0:ca.deityId),ne=k==="home"||!_;F.current=f;const nt=_&&l&&f?j0(_,f,l):null;function Zn(B){return Mp(fn??(f==null?void 0:f.panelOrder)).indexOf(B)}function et(B,W){var On;const pn=ln.current??Mp((On=F.current)==null?void 0:On.panelOrder),xn=kE(pn,B,W);xn.every((Vn,se)=>Vn===pn[se])||(ln.current=xn,gn(xn))}function sa(){const B=ln.current;ln.current=null,gn(null);const W=F.current;if(!B||!W)return;const pn={...W,panelOrder:B};F.current=pn,p(pn),Fl(pn)}const ge={onMove:et,onMoveEnd:sa};return m.jsx(CE,{run:_,children:m.jsxs("div",{className:`app${S==="network"?" showing-network":""}`,children:[m.jsxs("div",{className:"column",hidden:S==="network",children:[m.jsxs("header",{className:"column-head",children:[m.jsx(I0,{surface:S,onSurface:E}),m.jsxs("div",{className:"brand",children:["Glass ",m.jsx("span",{children:"Bead"})," Roguelite",m.jsx("button",{type:"button",className:"trash","aria-label":"Erase the library",onClick:()=>J(!0),children:m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[m.jsx("path",{d:"M4 7h16"}),m.jsx("path",{d:"M9 7V5h6v2"}),m.jsx("path",{d:"M7 7l1 13h8l1-13"})]})})]}),m.jsxs("div",{className:"pills",children:[_&&m.jsxs("span",{className:"pill",children:["Lives ",_.livesRemaining]}),_&&k!=="home"&&m.jsx("button",{type:"button",onClick:()=>w("home"),children:"Home"})]})]}),m.jsxs("main",{children:[T&&m.jsx("p",{className:"warning",children:T}),A&&m.jsx("p",{children:A}),!l||!f?m.jsx("p",{children:"Loading the motif catalog…"}):m.jsxs(m.Fragment,{children:[ne&&m.jsx(je,{title:"A new run",panelId:"home",order:Zn("home"),...ge,active:!0,initiallyOpen:!0,children:m.jsx(NE,{canContinue:!!_,onContinue:()=>w("auto"),onNew:B=>X(B==="short"?W_:xi)})}),!ne&&(_==null?void 0:_.pendingOffer)&&m.jsx(je,{title:(rn==null?void 0:rn.title)??"Choose",panelId:"offer",order:Zn("offer"),...ge,active:!0,initiallyOpen:!0,children:m.jsx(TE,{title:(rn==null?void 0:rn.title)??"Choose",body:Fi((rn==null?void 0:rn.body)??""),choices:((tl=cs.get(_.pendingOffer))==null?void 0:tl.choices({run:_,profile:f,catalog:l,notes:Qn.notes}))??[],button:(il=cs.get(_.pendingOffer))==null?void 0:il.button,catalog:l,profile:f,paintedIds:u,onChoose:B=>{var pn;const W=(pn=cs.get(_.pendingOffer))==null?void 0:pn.apply({run:_,profile:f,catalog:l,notes:Qn.notes},B);W&&vn(()=>W)}})}),!ne&&_&&!_.pendingOffer&&m.jsx(je,{title:"Map",summary:$n,panelId:"map",order:Zn("map"),...ge,active:cn==="map",initiallyOpen:cn==="map",children:m.jsx(qE,{run:_,catalog:l,profile:f,onInspect:B=>{const W=q9(f,_,B);p(W.profile),v(W.run),Fl(W.profile),Zu(W.run)},onAttack:B=>vn(()=>h?Q9(_,f,B,l,h)??od(_,f,B,_.configSnapshot,l):od(_,f,B,_.configSnapshot,l)),paintedIds:u})}),!ne&&(_==null?void 0:_.battle)&&m.jsx(je,{title:"Battle",summary:We,panelId:"battle",order:Zn("battle"),...ge,active:cn==="battle",initiallyOpen:cn==="battle",children:m.jsx(QE,{run:_,catalog:l,profile:f,preview:Jn,scoreHold:(U==null?void 0:U.total)??0,locked:!!U,onToggle:B=>v(z9(_,B)),onPlayAll:()=>h&&vn(()=>ta(us(_),f,l,h)),onPlay:()=>h&&vn(()=>ta(_,f,l,h)),onDiscard:()=>vn(()=>Cp(_,f)),onReturn:()=>vn(()=>({run:Ap(_),profile:f})),onRushLoss:En?()=>vn(()=>En):void 0,onRushVariable:h&&_.deckMotifIds.length>wd&&((ll=_.battle)==null?void 0:ll.status)==="active"?()=>vn(()=>O9(_,f,l,h)??{run:_,profile:f}):void 0,paintedIds:u})}),!ne&&(_==null?void 0:_.rush)&&m.jsx(je,{title:"The rush",panelId:"rush",order:Zn("rush"),...ge,active:cn==="rush",initiallyOpen:cn==="rush",children:m.jsx(zE,{run:_,catalog:l,profile:f,onContinue:()=>vn(()=>{var W;return{run:{...(W=_.rush)!=null&&W.lost?Ap(_):_,rush:void 0},profile:f}})})}),!ne&&(_==null?void 0:_.pendingRewardRegionId)&&m.jsx(je,{title:"Reward",panelId:"reward",order:Zn("reward"),...ge,active:cn==="reward",initiallyOpen:cn==="reward",children:m.jsx(DE,{run:_,catalog:l,profile:f,tables:h??void 0,onAdd:B=>vn(()=>Wo(_,f,{type:"add",motifId:B},l,h??void 0)),emoji:s,onRemove:(B,W)=>vn(()=>Wo(_,f,{type:"remove",motifId:B,emojiId:W},l,h??void 0,s)),onCombine:B=>vn(()=>Wo(_,f,{type:"combine",motifIds:B},l,h??void 0)),onContinue:()=>vn(()=>Wo(_,f,{type:"continue"},l,h??void 0))})}),_&&!ne&&(_.status==="won"||_.status==="lost")&&m.jsx(je,{title:_.status==="won"?"Map conquered":"The run ends",panelId:"outcome",order:Zn("outcome"),...ge,active:cn==="outcome",initiallyOpen:cn==="outcome",children:m.jsx(HE,{run:_,catalog:l,profile:f,paintedIds:u,artifactUrls:an,onSnapshot:ie,onHome:()=>w("home"),onContinue:(B,W)=>{h&&(vn(()=>D9(_,f,l,h,B,W,u)),w("auto"))}})}),_&&nt&&m.jsx(je,{title:"Self",note:wE(_,f),summary:N0(nt),panelId:"self",order:Zn("self"),...ge,children:m.jsx(jE,{reading:nt,phrase:Sn?C0(Qn.notes,{counters:Sn}):null})}),!ne&&_&&m.jsx(je,{title:"Deck",summary:`${_.deckMotifIds.length} cards`,panelId:"deck",order:Zn("deck"),...ge,children:m.jsx(BE,{run:_,catalog:l,profile:f,paintedIds:u,onTogglePower:le,onToggleSkill:de})}),(f.bestMapsConquered??0)>=2&&m.jsx(je,{title:"Data alchemy",summary:`${Object.values(f.emojiInventory??{}).reduce((B,W)=>B+W,0)} emoji`,panelId:"alchemy",order:Zn("alchemy"),...ge,children:m.jsx(RE,{profile:f,run:_,catalog:l,emoji:s,onCreate:B=>{vn(()=>Y9(_,f,l,s,B))}})}),m.jsx(je,{title:"Artifacts",summary:`${Math.min((_==null?void 0:_.mapsConquered)??0,12)} / 12 this run`,panelId:"artifacts",order:Zn("artifacts"),...ge,children:m.jsx(YE,{run:_,profile:f,catalog:l,artifactUrls:an})}),m.jsx(je,{title:"Encyclopedia",summary:f?`${f.discoveredMotifIds.length} discovered`:void 0,panelId:"encyclopedia",order:Zn("encyclopedia"),...ge,children:m.jsx(GE,{catalog:l,profile:f,artifactUrls:an,emoji:s,mapsConquered:Math.max(f.bestMapsConquered??0,(_==null?void 0:_.mapsConquered)??0)})}),m.jsx(je,{title:"Progression",panelId:"progression",order:Zn("progression"),...ge,children:m.jsx(XE,{profile:f,locked:(_==null?void 0:_.status)==="active",onSave:B=>{const W={...f,upgradeAllocation:B};p(W),Fl(W)},onReset:()=>J(!0),onExport:()=>{(async()=>{try{await Promise.all($.current);const B=await W9(f,_),W=new Blob([B],{type:"application/json"}),pn=URL.createObjectURL(W),xn=document.createElement("a");xn.href=pn,xn.download="glass-bead-roguelite-save.json",xn.click(),URL.revokeObjectURL(pn)}catch(B){x(B instanceof Error?B.message:"Could not export the save.")}})()},onImport:B=>{(async()=>{var W;if(un.current||Y.current){x("Please wait for the current save to finish before importing.");return}try{const pn=tE(B),xn=pn.run&&pn.run.catalogVersion===l.catalogVersion?pn.run:null,On=sc(pp(pn.profile,xi,Pn=>l.motifIndex.has(Pn),Pn=>l.textIndex.has(Pn),l.catalogVersion),xn==null?void 0:xn.mapsConquered),Vn=new Set((On.artifacts??[]).map(Pn=>Pn.id)),se=pn.images.filter(Pn=>Vn.has(Pn.id));Y.current=!0,un.current=!0,await Promise.all($.current),await iE(On,xn,se),I.current+=1,nn(Pn=>{for(const ht of Object.values(Pn))URL.revokeObjectURL(ht);return Object.fromEntries(se.map(({id:ht,blob:Ne})=>[ht,URL.createObjectURL(Ne)]))}),H(null),z.current=((W=xn==null?void 0:xn.lastPlay)==null?void 0:W.kind)==="play"?xn.lastPlay.stamp??null:null,v(xn),p(On),x(null),R(`Save imported · ${se.length} map ${se.length===1?"image":"images"} restored.`)}catch(pn){x(pn instanceof Error?pn.message:"Could not import the save.")}finally{if(Y.current){Y.current=!1,un.current=!1;const pn=P.current;P.current=null,pn&&vn(pn)}}})()}})})]})]})]}),S==="network"&&l&&f&&m.jsx(hC,{catalog:l,profile:f,onSurface:E}),G&&m.jsxs("div",{className:"wipe-layer",children:[m.jsx("div",{className:"guide-scrim",onClick:()=>J(!1)}),m.jsxs("article",{className:"guide-card",role:"dialog","aria-modal":"true","aria-label":"Erase the library",children:[m.jsx("h2",{children:"Erase the library?"}),m.jsx("p",{children:"This clears every motif you have seen, every text, the maps kept from conquered runs, the spokes opened on the emoji webs, the guide, and the current run on this browser."}),m.jsxs("div",{className:"actions",children:[m.jsx("button",{type:"button",onClick:()=>J(!1),children:"Cancel"}),m.jsx("button",{type:"button",className:"primary",onClick:N,children:"Erase"})]})]})]}),Z&&m.jsx(FE,{view:Z,notes:Qn.notes,known:((ks=f==null?void 0:f.guide)==null?void 0:ks.known)??[],paused:!!U||!!(_!=null&&_.pendingOffer),onChoose:B=>fe(B,!0),onOpen:B=>fe(B,!1),onDismiss:B=>{var pn,xn,On;const W=((pn=f==null?void 0:f.guide)==null?void 0:pn.dismissed)??[];W.includes(B)||!f||dn({beat:Z.beat,dismissed:[...W,B],known:((xn=f.guide)==null?void 0:xn.known)??[],off:((On=f.guide)==null?void 0:On.off)??[]})},onClose:qt}),U&&l&&f&&m.jsx(KE,{play:U,catalog:l,profile:f,continueLabel:_!=null&&_.pendingRewardRegionId?"Choose a reward":((ws=_==null?void 0:_.battle)==null?void 0:ws.status)==="active"?"Play next hand":"Continue",onDone:()=>H(null)})]})})}V_.createRoot(document.getElementById("root")).render(m.jsx(en.StrictMode,{children:m.jsx(wC,{})}));
