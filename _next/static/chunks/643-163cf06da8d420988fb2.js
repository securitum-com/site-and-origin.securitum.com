(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3391:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),u=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||u()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,u=void 0!==i&&i;return n||o&&u}},2775:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(i=n(3244))&&i.__esModule?i:{default:i},c=n(3398),f=n(1165),s=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,f=h.length;c<f;c++){var s=h[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;"name"===s&&u||!d.has(l)?(d.add(l),r[s]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:i})}))}var y=function(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(f.HeadManagerContext);return u.default.createElement(a.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};t.default=y},3244:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),u=(n(1506),n(2205)),a=n(8585),c=n(9754);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),l=function(e){u(n,e);var t=f(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},9008:function(e,t,n){e.exports=n(2775)},3689:function(e,t,n){"use strict";n.d(t,{H9:function(){return y}});const r=2147483647,o=36,i=/[^\0-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,a={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},c=Math.floor,f=String.fromCharCode;function s(e){throw new RangeError(a[e])}function l(e,t){const n=e.split("@");let r="";n.length>1&&(r=n[0]+"@",e=n[1]);const o=function(e,t){const n=[];let r=e.length;for(;r--;)n[r]=t(e[r]);return n}((e=e.replace(u,".")).split("."),t).join(".");return r+o}function d(e){const t=[];let n=0;const r=e.length;for(;n<r;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&o)<<10)+(1023&r)+65536):(t.push(o),n--)}else t.push(o)}return t}const p=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},h=function(e,t,n){let r=0;for(e=n?c(e/700):e>>1,e+=c(e/t);e>455;r+=o)e=c(e/35);return c(r+36*e/(e+38))},v=function(e){const t=[];let n=(e=d(e)).length,i=128,u=0,a=72;for(const r of e)r<128&&t.push(f(r));let l=t.length,v=l;for(l&&t.push("-");v<n;){let n=r;for(const t of e)t>=i&&t<n&&(n=t);const d=v+1;n-i>c((r-u)/d)&&s("overflow"),u+=(n-i)*d,i=n;for(const y of e)if(y<i&&++u>r&&s("overflow"),y==i){let e=u;for(let n=o;;n+=o){const r=n<=a?1:n>=a+26?26:n-a;if(e<r)break;const i=e-r,u=o-r;t.push(f(p(r+i%u,0))),e=c(i/u)}t.push(f(p(e,0))),a=h(u,d,v==l),u=0,++v}++u,++i}return t.join("")},y=function(e){return l(e,(function(e){return i.test(e)?"xn--"+v(e):e}))}},5723:function(e,t,n){"use strict";n.d(t,{ZP:function(){return _}});var r=n(7294),o=Object.prototype.hasOwnProperty;var i=new WeakMap,u=0;var a=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):i.has(e[n])?r=i.get(e[n]):(r=u,i.set(e[n],u++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),c=!0,f={isOnline:function(){return c},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){c=!0,e()}),!1),window.addEventListener("offline",(function(){return c=!1}),!1))}},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=new a;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),p=s({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var i=Math.min(o.retryCount,8),u=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,u,o)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(o.call(t,r)&&++i&&!o.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},f),h="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),v=h?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},y=h?r.useEffect:r.useLayoutEffect,g=(0,r.createContext)({});g.displayName="SWRConfigContext";var m=g,b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},O={},S={},C={},j={},M={},x={},E={},k=function(){var e=0;return function(){return++e}}();if(!h){var P=function(e){if(p.isDocumentVisible()&&p.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof p.registerOnFocus&&p.registerOnFocus((function(){return P(C)})),"function"===typeof p.registerOnReconnect&&p.registerOnReconnect((function(){return P(j)}))}var A=function(e,t){void 0===t&&(t=!0);var n=l.serializeKey(e),r=n[0],o=n[2],i=n[3];if(!r)return Promise.resolve();var u=M[r];if(r&&u){for(var a=l.get(r),c=l.get(o),f=l.get(i),s=[],d=0;d<u.length;++d)s.push(u[d](t,a,c,f,d>0));return Promise.all(s).then((function(){return l.get(r)}))}return Promise.resolve(l.get(r))},R=function(e,t,n,r){var o=M[e];if(e&&o)for(var i=0;i<o.length;++i)o[i](!1,t,n,r)},I=function(e,t,n){return void 0===n&&(n=!0),b(void 0,void 0,void 0,(function(){var r,o,i,u,a,c,f,s,d,p,h,v,y;return w(this,(function(g){switch(g.label){case 0:if(r=l.serializeKey(e),o=r[0],i=r[2],!o)return[2];if("undefined"===typeof t)return[2,A(e,n)];if(x[o]=k()-1,E[o]=0,u=x[o],a=S[o],s=!1,t&&"function"===typeof t)try{t=t(l.get(o))}catch(m){t=void 0,f=m}if(!t||"function"!==typeof t.then)return[3,5];s=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return c=g.sent(),[3,4];case 3:return d=g.sent(),f=d,[3,4];case 4:return[3,6];case 5:c=t,g.label=6;case 6:if((p=function(){if(u!==x[o]||a!==S[o]){if(f)throw f;return!0}})())return[2,c];if("undefined"!==typeof c&&l.set(o,c),l.set(i,f),E[o]=k()-1,!s&&p())return[2,c];if(h=M[o]){for(v=[],y=0;y<h.length;++y)v.push(h[y](!!n,c,f,void 0,y>0));return[2,Promise.all(v).then((function(){if(f)throw f;return l.get(o)}))]}if(f)throw f;return[2,c]}}))}))};Object.defineProperty(m.Provider,"default",{value:p});m.Provider;var _=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=t[0],i=Object.assign({},p,(0,r.useContext)(m),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:i.fetcher,a=l.serializeKey(o),c=a[0],f=a[1],s=a[2],d=a[3],g=(0,r.useRef)(i);y((function(){g.current=i}));var P=function(){return i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount},A=function(){var e=l.get(c);return"undefined"===typeof e?i.initialData:e},_=function(){return!!l.get(d)||c&&P()},D=A(),T=l.get(s),V=_(),F=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),H=(0,r.useRef)({data:D,error:T,isValidating:V});(0,r.useDebugValue)(H.current.data);var W,L,z=(0,r.useState)({})[1],K=(0,r.useCallback)((function(e){var t=!1;for(var n in e)H.current[n]!==e[n]&&(H.current[n]=e[n],F.current[n]&&(t=!0));if(t){if(q.current||!U.current)return;z({})}}),[]),q=(0,r.useRef)(!1),N=(0,r.useRef)(c),U=(0,r.useRef)(!1),$=(0,r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];q.current||U.current&&c===N.current&&(t=g.current)[e].apply(t,n)}),[c]),Z=(0,r.useCallback)((function(e,t){return I(N.current,e,t)}),[]),G=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Q=(0,r.useCallback)((function(t){return void 0===t&&(t={}),b(e,void 0,void 0,(function(){var e,n,r,o,a,p,h,v,y,m;return w(this,(function(b){switch(b.label){case 0:if(!c||!u)return[2,!1];if(q.current)return[2,!1];if(g.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,o=void 0!==r&&r,a=!0,p="undefined"!==typeof O[c]&&o,b.label=1;case 1:return b.trys.push([1,6,,7]),K({isValidating:!0}),l.set(d,!0),p||R(c,H.current.data,H.current.error,!0),h=void 0,v=void 0,p?(v=S[c],[4,O[c]]):[3,3];case 2:return h=b.sent(),[3,5];case 3:return i.loadingTimeout&&!l.get(c)&&setTimeout((function(){a&&$("onLoadingSlow",c,i)}),i.loadingTimeout),O[c]=null!==f?u.apply(void 0,f):u(c),S[c]=v=k(),[4,O[c]];case 4:h=b.sent(),setTimeout((function(){delete O[c],delete S[c]}),i.dedupingInterval),$("onSuccess",h,c,i),b.label=5;case 5:return S[c]>v?[2,!1]:x[c]&&(v<=x[c]||v<=E[c]||0===E[c])?(K({isValidating:!1}),[2,!1]):(l.set(s,void 0),l.set(d,!1),y={isValidating:!1},"undefined"!==typeof H.current.error&&(y.error=void 0),i.compare(H.current.data,h)||(y.data=h),i.compare(l.get(c),h)||l.set(c,h),K(y),p||R(c,h,y.error,!1),[3,7]);case 6:return m=b.sent(),delete O[c],delete S[c],g.current.isPaused()?(K({isValidating:!1}),[2,!1]):(l.set(s,m),H.current.error!==m&&(K({isValidating:!1,error:m}),p||R(c,void 0,m,!1)),$("onError",m,c,i),i.shouldRetryOnError&&$("onErrorRetry",m,c,i,Q,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(y((function(){if(c){q.current=!1;var e=U.current;U.current=!0;var t=H.current.data,n=A();N.current=c,i.compare(t,n)||K({data:n});var r=function(){return Q({dedupe:!0})};(e||P())&&("undefined"===typeof n||h?r():v(r));var o=!1,u=G(C,(function(){!o&&g.current.revalidateOnFocus&&(o=!0,r(),setTimeout((function(){return o=!1}),g.current.focusThrottleInterval))})),a=G(j,(function(){g.current.revalidateOnReconnect&&r()})),f=G(M,(function(e,t,n,o,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||i.compare(H.current.data,t)||(a.data=t,c=!0),H.current.error!==n&&(a.error=n,c=!0),"undefined"!==typeof o&&H.current.isValidating!==o&&(a.isValidating=o,c=!0),c&&K(a),!!e&&(u?r():Q())}));return function(){K=function(){return null},q.current=!0,u(),a(),f()}}}),[c,Q]),y((function(){var t=null,n=function(){return b(e,void 0,void 0,(function(){return w(this,(function(e){switch(e.label){case 0:return H.current.error||!g.current.refreshWhenHidden&&!g.current.isDocumentVisible()||!g.current.refreshWhenOffline&&!g.current.isOnline()?[3,2]:[4,Q({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return g.current.refreshInterval&&t&&(t=setTimeout(n,g.current.refreshInterval)),[2]}}))}))};return g.current.refreshInterval&&(t=setTimeout(n,g.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,Q]),i.suspense){if(W=l.get(c),L=l.get(s),"undefined"===typeof W&&(W=D),"undefined"===typeof L&&(L=T),"undefined"===typeof W&&"undefined"===typeof L){if(O[c]||Q(),O[c]&&"function"===typeof O[c].then)throw O[c];W=O[c]}if("undefined"===typeof W&&L)throw L}var B=(0,r.useMemo)((function(){var e={revalidate:Q,mutate:Z};return Object.defineProperties(e,{error:{get:function(){return F.current.error=!0,i.suspense?L:N.current===c?H.current.error:T},enumerable:!0},data:{get:function(){return F.current.data=!0,i.suspense?W:N.current===c?H.current.data:D},enumerable:!0},isValidating:{get:function(){return F.current.isValidating=!0,!!c&&H.current.isValidating},enumerable:!0}}),e}),[Q,D,T,Z,c,i.suspense,L,W]);return B}}}]);