function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("bRlFp",(function(e,t){var n=r("2bBga"),i=r("djt5d"),s=r("6zSb1"),o=r("d0EKm");var a=function e(t){var r=new s(t),a=i(s.prototype.request,r);return n.extend(a,s.prototype,r),n.extend(a,r),a.create=function(n){return e(o(t,n))},a}(r("hqlPG"));a.Axios=s,a.CanceledError=r("83xK9"),a.CancelToken=r("2sjhC"),a.isCancel=r("ksuZT"),a.VERSION=r("50GW0").version,a.toFormData=r("aewVa"),a.AxiosError=r("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=r("av9gA"),a.isAxiosError=r("gNhGc"),e.exports=a,e.exports.default=a})),r.register("2bBga",(function(e,t){var n,i=r("djt5d"),s=Object.prototype.toString,o=(n=Object.create(null),function(e){var t=s.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function l(e){return Array.isArray(e)}function c(e){return void 0===e}var d=a("ArrayBuffer");function u(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=a("Date"),f=a("File"),m=a("Blob"),g=a("FileList");function v(e){return"[object Function]"===s.call(e)}var _=a("URLSearchParams");function y(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),l(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var w,b=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:h,isUndefined:c,isDate:p,isFile:f,isBlob:m,isFunction:v,isStream:function(e){return u(e)&&v(e.pipe)},isURLSearchParams:_,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:y,merge:function e(){var t={};function n(n,i){h(t[i])&&h(n)?t[i]=e(t[i],n):h(n)?t[i]=e({},n):l(n)?t[i]=n.slice():t[i]=n}for(var i=0,s=arguments.length;i<s;i++)y(arguments[i],n);return t},extend:function(e,t,n){return y(t,(function(t,s){e[s]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var i,s,r,o={};t=t||{};do{for(s=(i=Object.getOwnPropertyNames(e)).length;s-- >0;)o[r=i[s]]||(t[r]=e[r],o[r]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var i=e.indexOf(t,n);return-1!==i&&i===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:b,isFileList:g}})),r.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}})),r.register("6zSb1",(function(e,t){var n=r("2bBga"),i=r("2RNjJ"),s=r("5Dm7L"),o=r("eQ5d8"),a=r("d0EKm"),l=r("1ZTQa"),c=r("6zj0X"),d=c.validators;function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));var r,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!s){var u=[o,void 0];for(Array.prototype.unshift.apply(u,i),u=u.concat(l),r=Promise.resolve(t);u.length;)r=r.then(u.shift(),u.shift());return r}for(var h=t;i.length;){var p=i.shift(),f=i.shift();try{h=p(h)}catch(e){f(e);break}}try{r=o(h)}catch(e){return Promise.reject(e)}for(;l.length;)r=r.then(l.shift(),l.shift());return r},u.prototype.getUri=function(e){e=a(this.defaults,e);var t=l(e.baseURL,e.url);return i(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,s){return this.request(a(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}u.prototype[e]=t(),u.prototype[e+"Form"]=t(!0)})),e.exports=u})),r.register("2RNjJ",(function(e,t){var n=r("2bBga");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,s){if(!t)return e;var r;if(s)r=s(t);else if(n.isURLSearchParams(t))r=t.toString();else{var o=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}})),r.register("5Dm7L",(function(e,t){var n=r("2bBga");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i})),r.register("eQ5d8",(function(e,t){var n=r("2bBga"),i=r("bhEpd"),s=r("ksuZT"),o=r("hqlPG"),a=r("83xK9");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return l(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return l(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(l(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),r.register("bhEpd",(function(e,t){var n=r("2bBga"),i=r("hqlPG");e.exports=function(e,t,s){var r=this||i;return n.forEach(s,(function(n){e=n.call(r,e,t)})),e}})),r.register("hqlPG",(function(e,t){var n=r("4TNnu"),i=r("2bBga"),s=r("i16eu"),o=r("121rJ"),a=r("2wfLM"),l=r("aewVa"),c={"Content-Type":"application/x-www-form-urlencoded"};function d(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,h={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(u=r("9VVcb")),u),transformRequest:[function(e,t){if(s(t,"Accept"),s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))return e;if(i.isArrayBufferView(e))return e.buffer;if(i.isURLSearchParams(e))return d(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=i.isObject(e),o=t&&t["Content-Type"];if((n=i.isFileList(e))||r&&"multipart/form-data"===o){var a=this.env&&this.env.FormData;return l(n?{"files[]":e}:e,a&&new a)}return r||"application/json"===o?(d(t,"application/json"),function(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,r=!n&&"json"===this.responseType;if(r||s&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){h.headers[e]=i.merge(c)})),e.exports=h})),r.register("4TNnu",(function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],d=!1,u=-1;function h(){d&&l&&(d=!1,l.length?c=l.concat(c):u=-1,c.length&&p())}function p(){if(!d){var e=a(h);d=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,d=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||d||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),r.register("i16eu",(function(e,t){var n=r("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}})),r.register("121rJ",(function(e,t){var n=r("2bBga");function i(e,t,n,i,s){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s)}n.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=i.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(i,o),Object.defineProperty(s,"isAxiosError",{value:!0}),i.from=function(e,t,r,o,a,l){var c=Object.create(s);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),i.call(c,e.message,t,r,o,a),c.name=e.name,l&&Object.assign(c,l),c},e.exports=i})),r.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),r.register("aewVa",(function(e,t){var n=r("ihoyg").Buffer,i=r("2bBga");e.exports=function(e,t){t=t||new FormData;var s=[];function r(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,o){if(i.isPlainObject(n)||i.isArray(n)){if(-1!==s.indexOf(n))throw Error("Circular reference detected in "+o);s.push(n),i.forEach(n,(function(n,s){if(!i.isUndefined(n)){var a,l=o?o+"."+s:s;if(n&&!o&&"object"==typeof n)if(i.endsWith(s,"{}"))n=JSON.stringify(n);else if(i.endsWith(s,"[]")&&(a=i.toArray(n)))return void a.forEach((function(e){!i.isUndefined(e)&&t.append(l,r(e))}));e(n,l)}})),s.pop()}else t.append(o,r(n))}(e),t}})),r.register("ihoyg",(function(t,n){var i,s;e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return s}),(function(e){return s=e}));var o=r("hqZtu"),a=r("5WQj6");const l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=u,s=50;const c=2147483647;function d(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,u.prototype),t}function u(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return f(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!u.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|_(e,t);let i=d(n);const s=i.write(e,t);s!==n&&(i=i.slice(0,s));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Q(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Q(e,ArrayBuffer)||e&&Q(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Q(e,SharedArrayBuffer)||e&&Q(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return u.from(i,t,n);const s=function(e){if(u.isBuffer(e)){const t=0|v(e.length),n=d(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?d(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return u.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return p(e),d(e<0?0:0|v(e))}function m(e){const t=e.length<0?0:0|v(e.length),n=d(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,u.prototype),i}function v(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function _(e,t){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Q(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let s=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return K(e).length;default:if(s)return i?-1:X(e).length;t=(""+t).toLowerCase(),s=!0}}function y(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return R(this,t,n);case"utf8":case"utf-8":return P(this,t,n);case"ascii":return N(this,t,n);case"latin1":case"binary":return O(this,t,n);case"base64":return k(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function w(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function b(e,t,n,i,s){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=s?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(s)return-1;n=e.length-1}else if(n<0){if(!s)return-1;n=0}if("string"==typeof t&&(t=u.from(t,i)),u.isBuffer(t))return 0===t.length?-1:E(e,t,n,i,s);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,i,s);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,i,s){let r,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(s){let i=-1;for(r=n;r<a;r++)if(c(e,r)===c(t,-1===i?0:r-i)){if(-1===i&&(i=r),r-i+1===l)return i*o}else-1!==i&&(r-=r-i),i=-1}else for(n+l>a&&(n=a-l),r=n;r>=0;r--){let n=!0;for(let i=0;i<l;i++)if(c(e,r+i)!==c(t,i)){n=!1;break}if(n)return r}return-1}function C(e,t,n,i){n=Number(n)||0;const s=e.length-n;i?(i=Number(i))>s&&(i=s):i=s;const r=t.length;let o;for(i>r/2&&(i=r/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(Z(i))return o;e[n+o]=i}return o}function T(e,t,n,i){return J(X(t,e.length-n),e,n,i)}function S(e,t,n,i){return J(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function I(e,t,n,i){return J(K(t),e,n,i)}function x(e,t,n,i){return J(function(e,t){let n,i,s;const r=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,s=n%256,r.push(s),r.push(i);return r}(t,e.length-n),e,n,i)}function k(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function P(e,t,n){n=Math.min(e.length,n);const i=[];let s=t;for(;s<n;){const t=e[s];let r=null,o=t>239?4:t>223?3:t>191?2:1;if(s+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(r=t);break;case 2:n=e[s+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(r=l));break;case 3:n=e[s+1],i=e[s+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(r=l));break;case 4:n=e[s+1],i=e[s+2],a=e[s+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(r=l))}}null===r?(r=65533,o=1):r>65535&&(r-=65536,i.push(r>>>10&1023|55296),r=56320|1023&r),i.push(r),s+=o}return function(e){const t=e.length;if(t<=M)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=M));return n}(i)}u.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(e,t,n){return h(e,t,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(e,t,n){return function(e,t,n){return p(e),e<=0?d(e):void 0!==t?"string"==typeof n?d(e).fill(t,n):d(e).fill(t):d(e)}(e,t,n)},u.allocUnsafe=function(e){return f(e)},u.allocUnsafeSlow=function(e){return f(e)},u.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==u.prototype},u.compare=function(e,t){if(Q(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),Q(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let s=0,r=Math.min(n,i);s<r;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=u.allocUnsafe(t);let s=0;for(n=0;n<e.length;++n){let t=e[n];if(Q(t,Uint8Array))s+t.length>i.length?(u.isBuffer(t)||(t=u.from(t)),t.copy(i,s)):Uint8Array.prototype.set.call(i,t,s);else{if(!u.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,s)}s+=t.length}return i},u.byteLength=_,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},u.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},u.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},u.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?P(this,0,e):y.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){let e="";const t=s;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(u.prototype[l]=u.prototype.inspect),u.prototype.compare=function(e,t,n,i,s){if(Q(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===s&&(s=this.length),t<0||n>e.length||i<0||s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=n)return 1;if(this===e)return 0;let r=(s>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(r,o),l=this.slice(i,s),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){r=l[e],o=c[e];break}return r<o?-1:o<r?1:0},u.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return b(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return b(this,e,t,n,!1)},u.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const s=this.length-t;if((void 0===n||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let r=!1;for(;;)switch(i){case"hex":return C(this,e,t,n);case"utf8":case"utf-8":return T(this,e,t,n);case"ascii":case"latin1":case"binary":return S(this,e,t,n);case"base64":return I(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,t,n);default:if(r)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),r=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const M=4096;function N(e,t,n){let i="";n=Math.min(e.length,n);for(let s=t;s<n;++s)i+=String.fromCharCode(127&e[s]);return i}function O(e,t,n){let i="";n=Math.min(e.length,n);for(let s=t;s<n;++s)i+=String.fromCharCode(e[s]);return i}function R(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let s="";for(let i=t;i<n;++i)s+=ee[e[i]];return s}function A(e,t,n){const i=e.slice(t,n);let s="";for(let e=0;e<i.length-1;e+=2)s+=String.fromCharCode(i[e]+256*i[e+1]);return s}function L(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function $(e,t,n,i,s,r){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<r)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function D(e,t,n,i,s){W(t,i,s,e,n,7);let r=Number(t&BigInt(4294967295));e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function B(e,t,n,i,s){W(t,i,s,e,n,7);let r=Number(t&BigInt(4294967295));e[n+7]=r,r>>=8,e[n+6]=r,r>>=8,e[n+5]=r,r>>=8,e[n+4]=r;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function F(e,t,n,i,s,r){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function U(e,t,n,i,s){return t=+t,n>>>=0,s||F(e,0,n,4),a.write(e,t,n,i,23,4),n+4}function z(e,t,n,i,s){return t=+t,n>>>=0,s||F(e,0,n,8),a.write(e,t,n,i,52,8),n+8}u.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,u.prototype),i},u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);let i=this[e],s=1,r=0;for(;++r<t&&(s*=256);)i+=this[e+r]*s;return i},u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e>>>=0,t||L(e,1,this.length),this[e]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e>>>=0,t||L(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e>>>=0,t||L(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e>>>=0,t||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e>>>=0,t||L(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readBigUInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,s=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))})),u.prototype.readBigUInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],s=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(s)})),u.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);let i=this[e],s=1,r=0;for(;++r<t&&(s*=256);)i+=this[e+r]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},u.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);let i=t,s=1,r=this[e+--i];for(;i>0&&(s*=256);)r+=this[e+--i]*s;return s*=128,r>=s&&(r-=Math.pow(2,8*t)),r},u.prototype.readInt8=function(e,t){return e>>>=0,t||L(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){e>>>=0,t||L(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(e,t){e>>>=0,t||L(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readBigInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),u.prototype.readBigInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||G(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),u.prototype.readFloatLE=function(e,t){return e>>>=0,t||L(e,4,this.length),a.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return e>>>=0,t||L(e,4,this.length),a.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return e>>>=0,t||L(e,8,this.length),a.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return e>>>=0,t||L(e,8,this.length),a.read(this,e,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){$(this,e,t,n,Math.pow(2,8*n)-1,0)}let s=1,r=0;for(this[t]=255&e;++r<n&&(s*=256);)this[t+r]=e/s&255;return t+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){$(this,e,t,n,Math.pow(2,8*n)-1,0)}let s=n-1,r=1;for(this[t+s]=255&e;--s>=0&&(r*=256);)this[t+s]=e/r&255;return t+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,1,255,0),this[t]=255&e,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigUInt64LE=te((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);$(this,e,t,n,i-1,-i)}let s=0,r=1,o=0;for(this[t]=255&e;++s<n&&(r*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/r>>0)-o&255;return t+n},u.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);$(this,e,t,n,i-1,-i)}let s=n-1,r=1,o=0;for(this[t+s]=255&e;--s>=0&&(r*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/r>>0)-o&255;return t+n},u.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},u.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||$(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigInt64LE=te((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(e,t,n){return U(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return U(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return z(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return z(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,i){if(!u.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const s=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),s},u.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{const r=u.isBuffer(e)?e:u.from(e,i),o=r.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=r[s%o]}return this};const q={};function j(e,t,n){q[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function H(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function W(e,t,n,i,s,r){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let s;throw s=r>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(r+1)}${i}`:`>= -(2${i} ** ${8*(r+1)-1}${i}) and < 2 ** ${8*(r+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new q.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,n){V(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||G(t,e.length-(n+1))}(i,s,r)}function V(e,t){if("number"!=typeof e)throw new q.ERR_INVALID_ARG_TYPE(t,"number",e)}function G(e,t,n){if(Math.floor(e)!==e)throw V(e,n),new q.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}j("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),j("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),j("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,s=n;return Number.isInteger(n)&&Math.abs(n)>2**32?s=H(String(n)):"bigint"==typeof n&&(s=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(s=H(s)),s+="n"),i+=` It must be ${t}. Received ${s}`,i}),RangeError);const Y=/[^+/0-9A-Za-z-_]/g;function X(e,t){let n;t=t||1/0;const i=e.length;let s=null;const r=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!s){if(n>56319){(t-=3)>-1&&r.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&r.push(239,191,189);continue}s=n;continue}if(n<56320){(t-=3)>-1&&r.push(239,191,189),s=n;continue}n=65536+(s-55296<<10|n-56320)}else s&&(t-=3)>-1&&r.push(239,191,189);if(s=null,n<128){if((t-=1)<0)break;r.push(n)}else if(n<2048){if((t-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return r}function K(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(Y,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function J(e,t,n,i){let s;for(s=0;s<i&&!(s+n>=t.length||s>=e.length);++s)t[s+n]=e[s];return s}function Q(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let s=0;s<16;++s)t[i+s]=e[n]+e[s]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),r.register("hqZtu",(function(t,n){var i,s;e(t.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),e(t.exports,"fromByteArray",(function(){return s}),(function(e){return s=e})),i=function(e){var t,n,i=u(e),s=i[0],r=i[1],l=new a(function(e,t,n){return 3*(t+n)/4-n}(0,s,r)),c=0,d=r>0?s-4:s;for(n=0;n<d;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;2===r&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,l[c++]=255&t);1===r&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t);return l},s=function(e){for(var t,n=e.length,i=n%3,s=[],o=16383,a=0,l=n-i;a<l;a+=o)s.push(h(e,a,a+o>l?l:a+o));1===i?(t=e[n-1],s.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],s.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return s.join("")};for(var r=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,d=l.length;c<d;++c)r[c]=l[c],o[l.charCodeAt(c)]=c;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var i,s,o=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(r[(s=i)>>18&63]+r[s>>12&63]+r[s>>6&63]+r[63&s]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),r.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,s;e(t.exports,"read",(function(){return i}),(function(e){return i=e})),e(t.exports,"write",(function(){return s}),(function(e){return s=e})),i=function(e,t,n,i,s){var r,o,a=8*s-i-1,l=(1<<a)-1,c=l>>1,d=-7,u=n?s-1:0,h=n?-1:1,p=e[t+u];for(u+=h,r=p&(1<<-d)-1,p>>=-d,d+=a;d>0;r=256*r+e[t+u],u+=h,d-=8);for(o=r&(1<<-d)-1,r>>=-d,d+=i;d>0;o=256*o+e[t+u],u+=h,d-=8);if(0===r)r=1-c;else{if(r===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,i),r-=c}return(p?-1:1)*o*Math.pow(2,r-i)},s=function(e,t,n,i,s,r){var o,a,l,c=8*r-s-1,d=(1<<c)-1,u=d>>1,h=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:r-1,f=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=d):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+u>=1?h/l:h*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=d?(a=0,o=d):o+u>=1?(a=(t*l-1)*Math.pow(2,s),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,s),o=0));s>=8;e[n+p]=255&a,p+=f,a/=256,s-=8);for(o=o<<s|a,c+=s;c>0;e[n+p]=255&o,p+=f,o/=256,c-=8);e[n+p-f]|=128*m}})),r.register("9VVcb",(function(e,t){var n=r("2bBga"),i=r("1TQad"),s=r("kTwUV"),o=r("2RNjJ"),a=r("1ZTQa"),l=r("9cPEm"),c=r("g3yOT"),d=r("2wfLM"),u=r("121rJ"),h=r("83xK9"),p=r("8wMQb");e.exports=function(e){return new Promise((function(t,r){var f,m=e.data,g=e.headers,v=e.responseType;function _(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete g["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(w+":"+b)}var E=a(e.baseURL,e.url);function C(){if(y){var n="getAllResponseHeaders"in y?l(y.getAllResponseHeaders()):null,s={data:v&&"text"!==v&&"json"!==v?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:n,config:e,request:y};i((function(e){t(e),_()}),(function(e){r(e),_()}),s),y=null}}if(y.open(e.method.toUpperCase(),o(E,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=C:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(C)},y.onabort=function(){y&&(r(new u("Request aborted",u.ECONNABORTED,e,y)),y=null)},y.onerror=function(){r(new u("Network Error",u.ERR_NETWORK,e,y,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||d;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new u(t,n.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,e,y)),y=null},n.isStandardBrowserEnv()){var T=(e.withCredentials||c(E))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;T&&(g[e.xsrfHeaderName]=T)}"setRequestHeader"in y&&n.forEach(g,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete g[t]:y.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),v&&"json"!==v&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){y&&(r(!e||e&&e.type?new h:e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),m||(m=null);var S=p(E);S&&-1===["http","https","file"].indexOf(S)?r(new u("Unsupported protocol "+S+":",u.ERR_BAD_REQUEST,e)):y.send(m)}))}})),r.register("1TQad",(function(e,t){var n=r("121rJ");e.exports=function(e,t,i){var s=i.config.validateStatus;i.status&&s&&!s(i.status)?t(new n("Request failed with status code "+i.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)):e(i)}})),r.register("kTwUV",(function(e,t){var n=r("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,i,s,r,o){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),n.isString(s)&&a.push("path="+s),n.isString(r)&&a.push("domain="+r),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),r.register("1ZTQa",(function(e,t){var n=r("iUwU6"),i=r("91vFE");e.exports=function(e,t){return e&&!n(t)?i(e,t):t}})),r.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),r.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),r.register("9cPEm",(function(e,t){var n=r("2bBga"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,s,r,o={};return e?(n.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=n.trim(e.substr(0,r)).toLowerCase(),s=n.trim(e.substr(r+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([s]):o[t]?o[t]+", "+s:s}})),o):o}})),r.register("g3yOT",(function(e,t){var n=r("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");function s(e){var n=e;return t&&(i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}return e=s(window.location.href),function(t){var i=n.isString(t)?s(t):t;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0}})),r.register("83xK9",(function(e,t){var n=r("121rJ");function i(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}r("2bBga").inherits(i,n,{__CANCEL__:!0}),e.exports=i})),r.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),r.register("1gvAv",(function(e,t){e.exports=null})),r.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),r.register("d0EKm",(function(e,t){var n=r("2bBga");e.exports=function(e,t){t=t||{};var i={};function s(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function r(i){return n.isUndefined(t[i])?n.isUndefined(e[i])?void 0:s(void 0,e[i]):s(e[i],t[i])}function o(e){if(!n.isUndefined(t[e]))return s(void 0,t[e])}function a(i){return n.isUndefined(t[i])?n.isUndefined(e[i])?void 0:s(void 0,e[i]):s(void 0,t[i])}function l(n){return n in t?s(e[n],t[n]):n in e?s(void 0,e[n]):void 0}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||r,s=t(e);n.isUndefined(s)&&t!==l||(i[e]=s)})),i}})),r.register("6zj0X",(function(e,t){var n=r("50GW0").version,i=r("121rJ"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};s.transitional=function(e,t,s){function r(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(s?". "+s:"")}return function(n,s,a){if(!1===e)throw new i(r(s," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!o[s]&&(o[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,s,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(e),r=s.length;r-- >0;){var o=s[r],a=t[o];if(a){var l=e[o],c=void 0===l||a(l,o,e);if(!0!==c)throw new i("option "+o+" must be "+c,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+o,i.ERR_BAD_OPTION)}},validators:s}})),r.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),r.register("2sjhC",(function(e,t){var n=r("83xK9");function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var i=this;this.promise.then((function(e){if(i._listeners){var t,n=i._listeners.length;for(t=0;t<n;t++)i._listeners[t](e);i._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){i.subscribe(e),t=e})).then(e);return n.cancel=function(){i.unsubscribe(t)},n},e((function(e){i.reason||(i.reason=new n(e),t(i.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i})),r.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),r.register("gNhGc",(function(e,t){var n=r("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}}));document.querySelector(".nav-list-js");const o=document.querySelector(".header-home-js"),a=document.querySelector(".header-library-js");function l(e,t){e.classList.add("nav__link--after"),t.classList.remove("nav__link--after")}document.addEventListener("homePageLoaded",(()=>{l(o,a)})),document.addEventListener("libPageLoaded",(()=>{l(a,o)}));document.querySelector(".modal-nav-list");const c=document.querySelector(".link-home-js"),d=document.querySelector(".link-library-js");function u(e,t){e.classList.add("nav__link--before"),t.classList.remove("nav__link--before")}document.addEventListener("homePageLoaded",(()=>{u(c,d)})),document.addEventListener("libPageLoaded",(()=>{u(d,c)}));const h=document.querySelector("[data-open]"),p=document.querySelector("[data-modal-burger]"),f=document.querySelector("[data-close]"),m=document.querySelector("body"),g=document.querySelector(".mobile-menu-window");function v(){p.classList.toggle("is-open"),g.classList.toggle("backdrop-mobile"),m.classList.toggle("body-mobile-window")}f.addEventListener("click",v),h.addEventListener("click",v);var _={};e(_,"Spinner",(function(){return b}),(function(e){return b=e}));var y=function(){return y=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},y.apply(this,arguments)},w={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},b=function(){function e(e){void 0===e&&(e={}),this.opts=y(y({},w),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),E(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",i="none";!0===t.shadow?i="0 2px 4px #000":"string"==typeof t.shadow&&(i=t.shadow);for(var s=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,s=e.split(",");i<s.length;i++){var r=s[i].match(t);if(null!==r){var o=+r[2],a=+r[5],l=r[4],c=r[7];0!==o||l||(l=c),0!==a||c||(c=l),l===c&&n.push({prefix:r[1]||"",x:o,y:a,xUnits:l,yUnits:c,end:r[8]})}}return n}(i),r=0;r<t.lines;r++){var o=~~(360/t.lines*r+t.rotate),a=E(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:C(t.fadeColor,r),borderRadius:n,transformOrigin:"left",transform:"rotate("+o+"deg) translateX("+t.radius+"px)"}),l=r*t.direction/t.lines/t.speed;l-=1/t.speed;var c=E(document.createElement("div"),{width:"100%",height:"100%",background:C(t.color,r),borderRadius:n,boxShadow:T(s,o),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});a.appendChild(c),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function E(e,t){for(var n in t)e.style[n]=t[n];return e}function C(e,t){return"string"==typeof e?e:e[t%e.length]}function T(e,t){for(var n=[],i=0,s=e;i<s.length;i++){var r=s[i],o=S(r.x,r.y,t);n.push(r.prefix+o[0]+r.xUnits+" "+o[1]+r.yUnits+r.end)}return n.join(", ")}function S(e,t,n){var i=n*Math.PI/180,s=Math.sin(i),r=Math.cos(i);return[Math.round(1e3*(e*r+t*s))/1e3,Math.round(1e3*(-e*s+t*r))/1e3]}var I={};I=function(){function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(n,i){void 0===n&&(n={}),void 0===i&&(i={}),Object.keys(i).forEach((s=>{void 0===n[s]?n[s]=i[s]:e(i[s])&&e(n[s])&&Object.keys(i[s]).length>0&&t(n[s],i[s])}))}const n={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function i(){const e="undefined"!=typeof document?document:{};return t(e,n),e}const s={document:n,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,s),e}class o extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function a(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...a(e)):t.push(e)})),t}function l(e,t){return Array.prototype.filter.call(e,t)}function c(e,t){const n=r(),s=i();let a=[];if(!t&&e instanceof o)return e;if(!e)return new o(a);if("string"==typeof e){const n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let e="div";0===n.indexOf("<li")&&(e="ul"),0===n.indexOf("<tr")&&(e="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(e="tr"),0===n.indexOf("<tbody")&&(e="table"),0===n.indexOf("<option")&&(e="select");const t=s.createElement(e);t.innerHTML=n;for(let e=0;e<t.childNodes.length;e+=1)a.push(t.childNodes[e])}else a=function(e,t){if("string"!=typeof e)return[e];const n=[],i=t.querySelectorAll(e);for(let e=0;e<i.length;e+=1)n.push(i[e]);return n}(e.trim(),t||s)}else if(e.nodeType||e===n||e===s)a.push(e);else if(Array.isArray(e)){if(e instanceof o)return e;a=e}return new o(function(e){const t=[];for(let n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(a))}c.fn=o.prototype;const d={addClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=a(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=a(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=a(t.map((e=>e.split(" "))));return l(this,(e=>i.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=a(t.map((e=>e.split(" "))));this.forEach((e=>{i.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(e,t);else for(const t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let[i,s,r,o]=t;function a(e){const t=e.target;if(!t)return;const n=e.target.dom7EventData||[];if(n.indexOf(e)<0&&n.unshift(e),c(t).is(s))r.apply(t,n);else{const e=c(t).parents();for(let t=0;t<e.length;t+=1)c(e[t]).is(s)&&r.apply(e[t],n)}}function l(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([i,r,o]=t,s=void 0),o||(o=!1);const d=i.split(" ");let u;for(let e=0;e<this.length;e+=1){const t=this[e];if(s)for(u=0;u<d.length;u+=1){const e=d[u];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:a}),t.addEventListener(e,a,o)}else for(u=0;u<d.length;u+=1){const e=d[u];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,o)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let[i,s,r,o]=t;"function"==typeof t[1]&&([i,r,o]=t,s=void 0),o||(o=!1);const a=i.split(" ");for(let e=0;e<a.length;e+=1){const t=a[e];for(let e=0;e<this.length;e+=1){const n=this[e];let i;if(!s&&n.dom7Listeners?i=n.dom7Listeners[t]:s&&n.dom7LiveListeners&&(i=n.dom7LiveListeners[t]),i&&i.length)for(let e=i.length-1;e>=0;e-=1){const s=i[e];r&&s.listener===r||r&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===r?(n.removeEventListener(t,s.proxyListener,o),i.splice(e,1)):r||(n.removeEventListener(t,s.proxyListener,o),i.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];const s=n[0].split(" "),o=n[1];for(let t=0;t<s.length;t+=1){const i=s[t];for(let t=0;t<this.length;t+=1){const s=this[t];if(e.CustomEvent){const t=new e.CustomEvent(i,{detail:o,bubbles:!0,cancelable:!0});s.dom7EventData=n.filter(((e,t)=>t>0)),s.dispatchEvent(t),s.dom7EventData=[],delete s.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function n(i){i.target===this&&(e.call(this,i),t.off("transitionend",n))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=i(),n=this[0],s=n.getBoundingClientRect(),o=t.body,a=n.clientTop||o.clientTop||0,l=n.clientLeft||o.clientLeft||0,c=n===e?e.scrollY:n.scrollTop,d=n===e?e.scrollX:n.scrollLeft;return{top:s.top+c-a,left:s.left+d-l}}return null},css:function(e,t){const n=r();let i;if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(const t in e)this[i].style[t]=e[t];return this}if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,n)=>{e.apply(t,[t,n])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),n=i(),s=this[0];let a,l;if(!s||void 0===e)return!1;if("string"==typeof e){if(s.matches)return s.matches(e);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(e);if(s.msMatchesSelector)return s.msMatchesSelector(e);for(a=c(e),l=0;l<a.length;l+=1)if(a[l]===s)return!0;return!1}if(e===n)return s===n;if(e===t)return s===t;if(e.nodeType||e instanceof o){for(a=e.nodeType?[e]:e,l=0;l<a.length;l+=1)if(a[l]===s)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return c([]);if(e<0){const n=t+e;return c(n<0?[]:[this[n]])}return c([this[e]])},append:function(){let e;const t=i();for(let n=0;n<arguments.length;n+=1){e=n<0||arguments.length<=n?void 0:arguments[n];for(let n=0;n<this.length;n+=1)if("string"==typeof e){const i=t.createElement("div");for(i.innerHTML=e;i.firstChild;)this[n].appendChild(i.firstChild)}else if(e instanceof o)for(let t=0;t<e.length;t+=1)this[n].appendChild(e[t]);else this[n].appendChild(e)}return this},prepend:function(e){const t=i();let n,s;for(n=0;n<this.length;n+=1)if("string"==typeof e){const i=t.createElement("div");for(i.innerHTML=e,s=i.childNodes.length-1;s>=0;s-=1)this[n].insertBefore(i.childNodes[s],this[n].childNodes[0])}else if(e instanceof o)for(s=0;s<e.length;s+=1)this[n].insertBefore(e[s],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&c(this[0].nextElementSibling).is(e)?c([this[0].nextElementSibling]):c([]):this[0].nextElementSibling?c([this[0].nextElementSibling]):c([]):c([])},nextAll:function(e){const t=[];let n=this[0];if(!n)return c([]);for(;n.nextElementSibling;){const i=n.nextElementSibling;e?c(i).is(e)&&t.push(i):t.push(i),n=i}return c(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&c(t.previousElementSibling).is(e)?c([t.previousElementSibling]):c([]):t.previousElementSibling?c([t.previousElementSibling]):c([])}return c([])},prevAll:function(e){const t=[];let n=this[0];if(!n)return c([]);for(;n.previousElementSibling;){const i=n.previousElementSibling;e?c(i).is(e)&&t.push(i):t.push(i),n=i}return c(t)},parent:function(e){const t=[];for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?c(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return c(t)},parents:function(e){const t=[];for(let n=0;n<this.length;n+=1){let i=this[n].parentNode;for(;i;)e?c(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return c(t)},closest:function(e){let t=this;return void 0===e?c([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let n=0;n<this.length;n+=1){const i=this[n].querySelectorAll(e);for(let e=0;e<i.length;e+=1)t.push(i[e])}return c(t)},children:function(e){const t=[];for(let n=0;n<this.length;n+=1){const i=this[n].children;for(let n=0;n<i.length;n+=1)e&&!c(i[n]).is(e)||t.push(i[n])}return c(t)},filter:function(e){return c(l(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function u(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function h(){return Date.now()}function p(e,t){void 0===t&&(t="x");const n=r();let i,s,o;const a=function(e){const t=r();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),o=new n.WebKitCSSMatrix("none"===s?"":s)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=o.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?o.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=n.WebKitCSSMatrix?o.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function f(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function m(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(null!=i&&!m(i)){const n=Object.keys(Object(i)).filter((e=>t.indexOf(e)<0));for(let t=0,s=n.length;t<s;t+=1){const s=n[t],r=Object.getOwnPropertyDescriptor(i,s);void 0!==r&&r.enumerable&&(f(e[s])&&f(i[s])?i[s].__swiper__?e[s]=i[s]:g(e[s],i[s]):!f(e[s])&&f(i[s])?(e[s]={},i[s].__swiper__?e[s]=i[s]:g(e[s],i[s])):e[s]=i[s])}}}return e}function v(e,t,n){e.style.setProperty(t,n)}function _(e){let{swiper:t,targetPosition:n,side:i}=e;const s=r(),o=-t.translate;let a,l=null;const c=t.params.speed;t.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(t.cssModeFrameID);const d=n>o?"next":"prev",u=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,h=()=>{a=(new Date).getTime(),null===l&&(l=a);const e=Math.max(Math.min((a-l)/c,1),0),r=.5-Math.cos(e*Math.PI)/2;let d=o+r*(n-o);if(u(d,n)&&(d=n),t.wrapperEl.scrollTo({[i]:d}),u(d,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[i]:d})})),void s.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=s.requestAnimationFrame(h)};h()}let y,w,b;function E(){return y||(y=function(){const e=r(),t=i();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,n)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),y}function C(e){return void 0===e&&(e={}),w||(w=function(e){let{userAgent:t}=void 0===e?{}:e;const n=E(),i=r(),s=i.navigator.platform,o=t||i.navigator.userAgent,a={ios:!1,android:!1},l=i.screen.width,c=i.screen.height,d=o.match(/(Android);?[\s\/]+([\d.]+)?/);let u=o.match(/(iPad).*OS\s([\d_]+)/);const h=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===s;let m="MacIntel"===s;return!u&&m&&n.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${c}`)>=0&&(u=o.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),d&&!f&&(a.os="android",a.android=!0),(u||p||h)&&(a.os="ios",a.ios=!0),a}(e)),w}function T(){return b||(b=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),b}Object.keys(d).forEach((e=>{Object.defineProperty(c.fn,e,{value:d[e],writable:!0})}));var S={on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function s(){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.apply(i,r)}return s.__emitterProxy=t,i.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,i;for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],n=r.slice(1,r.length),i=e):(t=r[0].events,n=r[0].data,i=r[0].context||e),n.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(i,[t,...n])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(i,n)}))})),e}},I={updateSize:function(){const e=this;let t,n;const i=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i[0].clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i[0].clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),n=n-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{$wrapperEl:s,size:r,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&i.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=s.children(`.${e.params.slideClass}`),u=l?e.virtual.slides.length:d.length;let h=[];const p=[],f=[];let m=i.slidesOffsetBefore;"function"==typeof m&&(m=i.slidesOffsetBefore.call(e));let g=i.slidesOffsetAfter;"function"==typeof g&&(g=i.slidesOffsetAfter.call(e));const _=e.snapGrid.length,y=e.slidesGrid.length;let w=i.spaceBetween,b=-m,E=0,C=0;if(void 0===r)return;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*r),e.virtualSize=-w,o?d.css({marginLeft:"",marginBottom:"",marginTop:""}):d.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=i.grid&&i.grid.rows>1&&e.grid;let S;T&&e.grid.initSlides(u);const I="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<u;s+=1){S=0;const o=d.eq(s);if(T&&e.grid.updateSlide(s,o,u,t),"none"!==o.css("display")){if("auto"===i.slidesPerView){I&&(d[s].style[t("width")]="");const r=getComputedStyle(o[0]),a=o[0].style.transform,l=o[0].style.webkitTransform;if(a&&(o[0].style.transform="none"),l&&(o[0].style.webkitTransform="none"),i.roundLengths)S=e.isHorizontal()?o.outerWidth(!0):o.outerHeight(!0);else{const e=n(r,"width"),t=n(r,"padding-left"),i=n(r,"padding-right"),s=n(r,"margin-left"),a=n(r,"margin-right"),l=r.getPropertyValue("box-sizing");if(l&&"border-box"===l)S=e+s+a;else{const{clientWidth:n,offsetWidth:r}=o[0];S=e+t+i+s+a+(r-n)}}a&&(o[0].style.transform=a),l&&(o[0].style.webkitTransform=l),i.roundLengths&&(S=Math.floor(S))}else S=(r-(i.slidesPerView-1)*w)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),d[s]&&(d[s].style[t("width")]=`${S}px`);d[s]&&(d[s].swiperSlideSize=S),f.push(S),i.centeredSlides?(b=b+S/2+E/2+w,0===E&&0!==s&&(b=b-r/2-w),0===s&&(b=b-r/2-w),Math.abs(b)<.001&&(b=0),i.roundLengths&&(b=Math.floor(b)),C%i.slidesPerGroup==0&&h.push(b),p.push(b)):(i.roundLengths&&(b=Math.floor(b)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&h.push(b),p.push(b),b=b+S+w),e.virtualSize+=S+w,E=S,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,o&&a&&("slide"===i.effect||"coverflow"===i.effect)&&s.css({width:`${e.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&s.css({[t("width")]:`${e.virtualSize+i.spaceBetween}px`}),T&&e.grid.updateWrapperSize(S,h,t),!i.centeredSlides){const t=[];for(let n=0;n<h.length;n+=1){let s=h[n];i.roundLengths&&(s=Math.floor(s)),h[n]<=e.virtualSize-r&&t.push(s)}h=t,Math.floor(e.virtualSize-r)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-r)}if(0===h.length&&(h=[0]),0!==i.spaceBetween){const n=e.isHorizontal()&&o?"marginLeft":t("marginRight");d.filter(((e,t)=>!i.cssMode||t!==d.length-1)).css({[n]:`${w}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;f.forEach((t=>{e+=t+(i.spaceBetween?i.spaceBetween:0)})),e-=i.spaceBetween;const t=e-r;h=h.map((e=>e<0?-m:e>t?t+g:e))}if(i.centerInsufficientSlides){let e=0;if(f.forEach((t=>{e+=t+(i.spaceBetween?i.spaceBetween:0)})),e-=i.spaceBetween,e<r){const t=(r-e)/2;h.forEach(((e,n)=>{h[n]=e-t})),p.forEach(((e,n)=>{p[n]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:h,slidesGrid:p,slidesSizesGrid:f}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-h[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-f[f.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(u!==c&&e.emit("slidesLengthChange"),h.length!==_&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==y&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(l||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.$el.hasClass(t);u<=i.maxBackfaceHiddenSlides?n||e.$el.addClass(t):n&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let s,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||c([])).each((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:i,rtlTranslate:s,snapGrid:r}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),i.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<i.length;e+=1){const a=i[e];let l=a.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=i[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-l)/(a.swiperSlideSize+n.spaceBetween),d=(o-r[0]+(n.centeredSlides?t.minTranslate():0)-l)/(a.swiperSlideSize+n.spaceBetween),u=-(o-l),h=u+t.slidesSizesGrid[e];(u>=0&&u<t.size-1||h>1&&h<=t.size||u<=0&&h>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(e),i.eq(e).addClass(n.slideVisibleClass)),a.progress=s?-c:c,a.originalProgress=s?-d:d}t.visibleSlides=c(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:r,isEnd:o}=t;const a=r,l=o;0===i?(s=0,r=!0,o=!0):(s=(e-t.minTranslate())/i,r=s<=0,o=s>=1),Object.assign(t,{progress:s,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),r&&!a&&t.emit("reachBeginning toEdge"),o&&!l&&t.emit("reachEnd toEdge"),(a&&!r||l&&!o)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,$wrapperEl:i,activeIndex:s,realIndex:r}=e,o=e.virtual&&n.virtual.enabled;let a;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),a=o?e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`):t.eq(s),a.addClass(n.slideActiveClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));let l=a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&0===l.length&&(l=t.eq(0),l.addClass(n.slideNextClass));let c=a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&0===c.length&&(c=t.eq(-1),c.addClass(n.slidePrevClass)),n.loop&&(l.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),c.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:i,snapGrid:s,params:r,activeIndex:o,realIndex:a,snapIndex:l}=t;let c,d=e;if(void 0===d){for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?n>=i[e]&&n<i[e+1]-(i[e+1]-i[e])/2?d=e:n>=i[e]&&n<i[e+1]&&(d=e+1):n>=i[e]&&(d=e);r.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(s.indexOf(n)>=0)c=s.indexOf(n);else{const e=Math.min(r.slidesPerGroupSkip,d);c=e+Math.floor((d-e)/r.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),d===o)return void(c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")));const u=parseInt(t.slides.eq(d).attr("data-swiper-slide-index")||d,10);Object.assign(t,{snapIndex:c,realIndex:u,previousIndex:o,activeIndex:d}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==u&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,i=c(e).closest(`.${n.slideClass}`)[0];let s,r=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){r=!0,s=e;break}if(!i||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(c(i).attr("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},x={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:n,translate:i,$wrapperEl:s}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let r=p(s[0],e);return n&&(r=-r),r||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:s,$wrapperEl:r,wrapperEl:o,progress:a}=n;let l,c=0,d=0;n.isHorizontal()?c=i?-e:e:d=e,s.roundLengths&&(c=Math.floor(c),d=Math.floor(d)),s.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-c:-d:s.virtualTranslate||r.transform(`translate3d(${c}px, ${d}px, 0px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?c:d;const u=n.maxTranslate()-n.minTranslate();l=0===u?0:(e-n.minTranslate())/u,l!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,n,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===i&&(i=!0);const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(d=i&&e>l?l:i&&e<c?c:e,r.updateProgress(d),o.cssMode){const e=r.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return _({swiper:r,targetPosition:-d,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(d),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function k(e){let{swiper:t,runCallbacks:n,direction:i,step:s}=e;const{activeIndex:r,previousIndex:o}=t;let a=i;if(a||(a=r>o?"next":r<o?"prev":"reset"),t.emit(`transition${s}`),n&&r!==o){if("reset"===a)return void t.emit(`slideResetTransition${s}`);t.emit(`slideChangeTransition${s}`),"next"===a?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`)}}var P={slideTo:function(e,t,n,i,s){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:h,wrapperEl:p,enabled:f}=r;if(r.animating&&a.preventInteractionOnTransition||!f&&!i&&!s)return!1;const m=Math.min(r.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1),(u||a.initialSlide||0)===(d||0)&&n&&r.emit("beforeSlideChangeStart");const v=-l[g];if(r.updateProgress(v),a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(r.initialized&&o!==u){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(u||0)!==o)return!1}let y;if(y=o>u?"next":o<u?"prev":"reset",h&&-v===r.translate||!h&&v===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==a.effect&&r.setTranslate(v),"reset"!==y&&(r.transitionStart(n,y),r.transitionEnd(n,y)),!1;if(a.cssMode){const e=r.isHorizontal(),n=h?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return _({swiper:r,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(n,y),0===t?r.transitionEnd(n,y):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,y))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,n,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const s=this;let r=e;return s.params.loop&&(r+=s.loopedSlides),s.slideTo(r,t,n,i)},slideNext:function(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const i=this,{animating:s,enabled:r,params:o}=i;if(!r)return i;let a=o.slidesPerGroup;"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<o.slidesPerGroupSkip?1:a;if(o.loop){if(s&&o.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return o.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const i=this,{params:s,animating:r,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:c}=i;if(!c)return i;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=d(l?i.translate:-i.translate),h=o.map((e=>d(e)));let p=o[h.indexOf(u)-1];if(void 0===p&&s.cssMode){let e;o.forEach(((t,n)=>{u>=t&&(e=n)})),void 0!==e&&(p=o[e>0?e-1:e])}let f=0;if(void 0!==p&&(f=a.indexOf(p),f<0&&(f=i.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(f=f-i.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),s.rewind&&i.isBeginning){const s=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(s,e,t,n)}return i.slideTo(f,e,t,n)},slideReset:function(e,t,n){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e,t,n,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);const s=this;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a];l-e>(s.snapGrid[a+1]-e)*i&&(r+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1];l-e<=(s.snapGrid[a]-e)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,r=e.clickedIndex;if(t.loop){if(e.animating)return;s=parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),u((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),u((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},M={loopCreate:function(){const e=this,t=i(),{params:n,$wrapperEl:s}=e,r=s.children().length>0?c(s.children()[0].parentNode):s;r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let o=r.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const e=n.slidesPerGroup-o.length%n.slidesPerGroup;if(e!==n.slidesPerGroup){for(let i=0;i<e;i+=1){const e=c(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);r.append(e)}o=r.children(`.${n.slideClass}`)}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=o.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>o.length&&(e.loopedSlides=o.length);const a=[],l=[];o.each(((t,n)=>{const i=c(t);n<e.loopedSlides&&l.push(t),n<o.length&&n>=o.length-e.loopedSlides&&a.push(t),i.attr("data-swiper-slide-index",n)}));for(let e=0;e<l.length;e+=1)r.append(c(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let e=a.length-1;e>=0;e-=1)r.prepend(c(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:i,allowSlidePrev:s,allowSlideNext:r,snapGrid:o,rtlTranslate:a}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-o[t]-e.getTranslate();t<i?(l=n.length-3*i+t,l+=i,e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((a?-e.translate:e.translate)-c)):t>=n.length-i&&(l=-n.length+t+i,l+=i,e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((a?-e.translate:e.translate)-c)),e.allowSlidePrev=s,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:n}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),n.removeAttr("data-swiper-slide-index")}};function N(e){const t=this,n=i(),s=r(),o=t.touchEventsData,{params:a,touches:l,enabled:d}=t;if(!d)return;if(t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let u=e;u.originalEvent&&(u=u.originalEvent);let p=c(u.target);if("wrapper"===a.touchEventsTarget&&!p.closest(t.wrapperEl).length)return;if(o.isTouchEvent="touchstart"===u.type,!o.isTouchEvent&&"which"in u&&3===u.which)return;if(!o.isTouchEvent&&"button"in u&&u.button>0)return;if(o.isTouched&&o.isMoved)return;a.noSwipingClass&&""!==a.noSwipingClass&&u.target&&u.target.shadowRoot&&e.path&&e.path[0]&&(p=c(e.path[0]));const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,m=!(!u.target||!u.target.shadowRoot);if(a.noSwiping&&(m?function(e,t){return void 0===t&&(t=this),function t(n){if(!n||n===i()||n===r())return null;n.assignedSlot&&(n=n.assignedSlot);const s=n.closest(e);return s||n.getRootNode?s||t(n.getRootNode().host):null}(t)}(f,p[0]):p.closest(f)[0]))return void(t.allowClick=!0);if(a.swipeHandler&&!p.closest(a.swipeHandler)[0])return;l.currentX="touchstart"===u.type?u.targetTouches[0].pageX:u.pageX,l.currentY="touchstart"===u.type?u.targetTouches[0].pageY:u.pageY;const g=l.currentX,v=l.currentY,_=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,y=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(_&&(g<=y||g>=s.innerWidth-y)){if("prevent"!==_)return;e.preventDefault()}if(Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=g,l.startY=v,o.touchStartTime=h(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(o.allowThresholdMove=!1),"touchstart"!==u.type){let e=!0;p.is(o.focusableElements)&&(e=!1,"SELECT"===p[0].nodeName&&(o.isTouched=!1)),n.activeElement&&c(n.activeElement).is(o.focusableElements)&&n.activeElement!==p[0]&&n.activeElement.blur();const i=e&&t.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!i||p[0].isContentEditable||u.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",u)}function O(e){const t=i(),n=this,s=n.touchEventsData,{params:r,touches:o,rtlTranslate:a,enabled:l}=n;if(!l)return;let d=e;if(d.originalEvent&&(d=d.originalEvent),!s.isTouched)return void(s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",d));if(s.isTouchEvent&&"touchmove"!==d.type)return;const u="touchmove"===d.type&&d.targetTouches&&(d.targetTouches[0]||d.changedTouches[0]),p="touchmove"===d.type?u.pageX:d.pageX,f="touchmove"===d.type?u.pageY:d.pageY;if(d.preventedByNestedSwiper)return o.startX=p,void(o.startY=f);if(!n.allowTouchMove)return c(d.target).is(s.focusableElements)||(n.allowClick=!1),void(s.isTouched&&(Object.assign(o,{startX:p,startY:f,currentX:p,currentY:f}),s.touchStartTime=h()));if(s.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(p<o.startX&&n.translate<=n.maxTranslate()||p>o.startX&&n.translate>=n.minTranslate())return;if(s.isTouchEvent&&t.activeElement&&d.target===t.activeElement&&c(d.target).is(s.focusableElements))return s.isMoved=!0,void(n.allowClick=!1);if(s.allowTouchCallbacks&&n.emit("touchMove",d),d.targetTouches&&d.targetTouches.length>1)return;o.currentX=p,o.currentY=f;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(void 0===s.isScrolling){let e;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?s.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,s.isScrolling=n.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",d),void 0===s.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(s.startMoving=!0)),s.isScrolling)return void(s.isTouched=!1);if(!s.startMoving)return;n.allowClick=!1,!r.cssMode&&d.cancelable&&d.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&d.stopPropagation(),s.isMoved||(r.loop&&!r.cssMode&&n.loopFix(),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),s.allowMomentumBounce=!1,!r.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",d)),n.emit("sliderMove",d),s.isMoved=!0;let v=n.isHorizontal()?m:g;o.diff=v,v*=r.touchRatio,a&&(v=-v),n.swipeDirection=v>0?"prev":"next",s.currentTranslate=v+s.startTranslate;let _=!0,y=r.resistanceRatio;if(r.touchReleaseOnEdges&&(y=0),v>0&&s.currentTranslate>n.minTranslate()?(_=!1,r.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+v)**y)):v<0&&s.currentTranslate<n.maxTranslate()&&(_=!1,r.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-v)**y)),_&&(d.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),n.allowSlidePrev||n.allowSlideNext||(s.currentTranslate=s.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,s.currentTranslate=s.startTranslate,void(o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}function R(e){const t=this,n=t.touchEventsData,{params:i,touches:s,rtlTranslate:r,slidesGrid:o,enabled:a}=t;if(!a)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",l),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const c=h(),d=c-n.touchStartTime;if(t.allowClick){const e=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(e&&e[0]||l.target),t.emit("tap click",l),d<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(n.lastClickTime=h(),u((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let p;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-n.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});let f=0,m=t.slidesSizesGrid[0];for(let e=0;e<o.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==o[e+t]?p>=o[e]&&p<o[e+t]&&(f=e,m=o[e+t]-o[e]):p>=o[e]&&(f=e,m=o[o.length-1]-o[o.length-2])}let g=null,v=null;i.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const _=(p-o[f])/m,y=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(_>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?g:f+y):t.slideTo(f)),"prev"===t.swipeDirection&&(_>1-i.longSwipesRatio?t.slideTo(f+y):null!==v&&_<0&&Math.abs(_)>i.longSwipesRatio?t.slideTo(v):t.slideTo(f))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);!t.navigation||l.target!==t.navigation.nextEl&&l.target!==t.navigation.prevEl?("next"===t.swipeDirection&&t.slideTo(null!==g?g:f+y),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:f)):l.target===t.navigation.nextEl?t.slideTo(f+y):t.slideTo(f)}}function A(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function L(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function $(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();s=0===r?0:(e.translate-e.minTranslate())/r,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let D=!1;function B(){}const F=(e,t)=>{const n=i(),{params:s,touchEvents:r,el:o,wrapperEl:a,device:l,support:c}=e,d=!!s.nested,u="on"===t?"addEventListener":"removeEventListener",h=t;if(c.touch){const t=!("touchstart"!==r.start||!c.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};o[u](r.start,e.onTouchStart,t),o[u](r.move,e.onTouchMove,c.passiveListener?{passive:!1,capture:d}:d),o[u](r.end,e.onTouchEnd,t),r.cancel&&o[u](r.cancel,e.onTouchEnd,t)}else o[u](r.start,e.onTouchStart,!1),n[u](r.move,e.onTouchMove,d),n[u](r.end,e.onTouchEnd,!1);(s.preventClicks||s.preventClicksPropagation)&&o[u]("click",e.onClick,!0),s.cssMode&&a[u]("scroll",e.onScroll),s.updateOnWindowResize?e[h](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[h]("observerUpdate",A,!0)};var U={attachEvents:function(){const e=this,t=i(),{params:n,support:s}=e;e.onTouchStart=N.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=R.bind(e),n.cssMode&&(e.onScroll=$.bind(e)),e.onClick=L.bind(e),s.touch&&!D&&(t.addEventListener("touchstart",B),D=!0),F(e,"on")},detachEvents:function(){F(this,"off")}};const z=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var q={addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,$el:s,device:r,support:o}=e,a=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),s.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},j={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function H(e,t){return function(n){void 0===n&&(n={});const i=Object.keys(n)[0],s=n[i];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in s?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),g(t,n)):g(t,n)):g(t,n)}}const W={eventsEmitter:S,update:I,translate:x,transition:{setTransition:function(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),k({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),k({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:P,loop:M,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:U,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:n,loopedSlides:i=0,params:s,$el:r}=e,o=s.breakpoints;if(!o||o&&0===Object.keys(o).length)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,c=z(e,s),d=z(e,l),u=s.enabled;c&&!d?(r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(r.addClass(`${s.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===s.grid.fill)&&r.addClass(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=s[t]&&s[t].enabled,i=l[t]&&l[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const h=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||h);h&&n&&e.changeDirection(),g(e.params,l);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),p&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)},getBreakpoint:function(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let i=!1;const s=r(),o="window"===t?s.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:r,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(i=r):o<=n.clientWidth&&(i=r)}return i||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:q,images:{loadImage:function(e,t,n,i,s,o){const a=r();let l;function d(){o&&o()}c(e).parent("picture")[0]||e.complete&&s?d():t?(l=new a.Image,l.onload=d,l.onerror=d,i&&(l.sizes=i),n&&(l.srcset=n),t&&(l.src=t)):d()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let n=0;n<e.imagesToLoad.length;n+=1){const i=e.imagesToLoad[n];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},V={};class G{enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),s=(n.maxTranslate()-i)*e+i;n.translateTo(s,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:n,slides:i,slidesGrid:s,slidesSizesGrid:r,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1)(t?s[e]+r[e]-s[a]<o:s[e]-s[a]<o)&&(l+=1);else for(let e=a-1;e>=0;e-=1)s[a]-s[e]<o&&(l+=1);return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;n.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):(s=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),s||i()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}mount(e){const t=this;if(t.mounted)return!0;const n=c(e||t.params.el);if(!(e=n[0]))return!1;e.swiper=t;const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=c(e.shadowRoot.querySelector(s()));return t.children=e=>n.children(e),t}return n.children?n.children(s()):c(n).children(s())})();if(0===r.length&&t.params.createElements){const e=i().createElement("div");r=c(e),e.className=t.params.wrapperClass,n.append(e),n.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:n,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:i,$el:s,$wrapperEl:r,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(n)),n.destroyed=!0),null}static extendDefaults(e){g(V,e)}static get extendedDefaults(){return V}static get defaults(){return j}static installModule(e){G.prototype.__modules__||(G.prototype.__modules__=[]);const t=G.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>G.installModule(e))),G):(G.installModule(e),G)}constructor(){let e,t;for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];if(1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&c(t.el).length>1){const e=[];return c(t.el).each((n=>{const i=g({},t,{el:n});e.push(new G(i))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const o={};r.modules.forEach((e=>{e({swiper:r,extendParams:H(t,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const a=g({},j,o);return r.params=g({},a,V,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=c,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:c(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:h(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}}function Y(e,t,n,s){const r=i();return e.params.createElements&&Object.keys(s).forEach((i=>{if(!n[i]&&!0===n.auto){let o=e.$el.children(`.${s[i]}`)[0];o||(o=r.createElement("div"),o.className=s[i],e.$el.append(o)),n[i]=o,t[i]=o}})),n}function X(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:n,params:i}=t;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&n.append(e[t]);else n.append(e);i.loop&&t.loopCreate(),i.observer||t.update()}function J(e){const t=this,{params:n,$wrapperEl:i,activeIndex:s}=t;n.loop&&t.loopDestroy();let r=s+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&i.prepend(e[t]);r=s+e.length}else i.prepend(e);n.loop&&t.loopCreate(),n.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const n=this,{$wrapperEl:i,params:s,activeIndex:r}=n;let o=r;s.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.slides=i.children(`.${s.slideClass}`));const a=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=a)return void n.appendSlide(t);let l=o>e?o+1:o;const c=[];for(let t=a-1;t>=e;t-=1){const e=n.slides.eq(t);e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&i.append(t[e]);l=o>e?o+t.length:o}else i.append(t);for(let e=0;e<c.length;e+=1)i.append(c[e]);s.loop&&n.loopCreate(),s.observer||n.update(),s.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}function Z(e){const t=this,{params:n,$wrapperEl:i,activeIndex:s}=t;let r=s;n.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=i.children(`.${n.slideClass}`));let o,a=r;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)o=e[n],t.slides[o]&&t.slides.eq(o).remove(),o<a&&(a-=1);a=Math.max(a,0)}else o=e,t.slides[o]&&t.slides.eq(o).remove(),o<a&&(a-=1),a=Math.max(a,0);n.loop&&t.loopCreate(),n.observer||t.update(),n.loop?t.slideTo(a+t.loopedSlides,0,!1):t.slideTo(a,0,!1)}function ee(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}function te(e){const{effect:t,swiper:n,on:i,setTranslate:s,setTransition:r,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let d;i("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),i("setTranslate",(()=>{n.params.effect===t&&s()})),i("setTransition",((e,i)=>{n.params.effect===t&&r(i)})),i("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.each((e=>{n.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),l()}})),i("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame((()=>{d&&n.slides&&n.slides.length&&(s(),d=!1)})))}))}function ne(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ie(e){let{swiper:t,duration:n,transformEl:i,allSlides:s}=e;const{slides:r,activeIndex:o,$wrapperEl:a}=t;if(t.params.virtualTranslate&&0!==n){let e,n=!1;e=s?i?r.find(i):r:i?r.eq(o).find(i):r.eq(o),e.transitionEnd((()=>{if(n)return;if(!t||t.destroyed)return;n=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)a.trigger(e[t])}))}}function se(e,t,n){const i="swiper-slide-shadow"+(n?`-${n}`:""),s=e.transformEl?t.find(e.transformEl):t;let r=s.children(`.${i}`);return r.length||(r=c(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`),s.append(r)),r}Object.keys(W).forEach((e=>{Object.keys(W[e]).forEach((t=>{G.prototype[t]=W[e][t]}))})),G.use([function(e){let{swiper:t,on:n,emit:i}=e;const s=r();let o=null,a=null;const l=()=>{t&&!t.destroyed&&t.initialized&&(i("beforeResize"),i("resize"))},c=()=>{t&&!t.destroyed&&t.initialized&&i("orientationchange")};n("init",(()=>{t.params.resizeObserver&&void 0!==s.ResizeObserver?t&&!t.destroyed&&t.initialized&&(o=new ResizeObserver((e=>{a=s.requestAnimationFrame((()=>{const{width:n,height:i}=t;let s=n,r=i;e.forEach((e=>{let{contentBoxSize:n,contentRect:i,target:o}=e;o&&o!==t.el||(s=i?i.width:(n[0]||n).inlineSize,r=i?i.height:(n[0]||n).blockSize)})),s===n&&r===i||l()}))})),o.observe(t.el)):(s.addEventListener("resize",l),s.addEventListener("orientationchange",c))})),n("destroy",(()=>{a&&s.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null),s.removeEventListener("resize",l),s.removeEventListener("orientationchange",c)}))},function(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const o=[],a=r(),l=function(e,t){void 0===t&&(t={});const n=new(a.MutationObserver||a.WebkitMutationObserver)((e=>{if(1===e.length)return void s("observerUpdate",e[0]);const t=function(){s("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}));n.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),o.push(n)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)l(e[t])}l(t.$el[0],{childList:t.params.observeSlideChildren}),l(t.$wrapperEl[0],{attributes:!1})}})),i("destroy",(()=>{o.forEach((e=>{e.disconnect()})),o.splice(0,o.length)}))}]);const re=[function(e){let t,{swiper:n,extendParams:i,on:s,emit:r}=e;function o(e,t){const i=n.params.virtual;if(i.cache&&n.virtual.cache[t])return n.virtual.cache[t];const s=i.renderSlide?c(i.renderSlide.call(n,e,t)):c(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(n.virtual.cache[t]=s),s}function a(e){const{slidesPerView:t,slidesPerGroup:i,centeredSlides:s}=n.params,{addSlidesBefore:a,addSlidesAfter:l}=n.params.virtual,{from:c,to:d,slides:u,slidesGrid:h,offset:p}=n.virtual;n.params.cssMode||n.updateActiveIndex();const f=n.activeIndex||0;let m,g,v;m=n.rtlTranslate?"right":n.isHorizontal()?"left":"top",s?(g=Math.floor(t/2)+i+l,v=Math.floor(t/2)+i+a):(g=t+(i-1)+l,v=i+a);const _=Math.max((f||0)-v,0),y=Math.min((f||0)+g,u.length-1),w=(n.slidesGrid[_]||0)-(n.slidesGrid[0]||0);function b(){n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.lazy&&n.params.lazy.enabled&&n.lazy.load(),r("virtualUpdate")}if(Object.assign(n.virtual,{from:_,to:y,offset:w,slidesGrid:n.slidesGrid}),c===_&&d===y&&!e)return n.slidesGrid!==h&&w!==p&&n.slides.css(m,`${w}px`),n.updateProgress(),void r("virtualUpdate");if(n.params.virtual.renderExternal)return n.params.virtual.renderExternal.call(n,{offset:w,from:_,to:y,slides:function(){const e=[];for(let t=_;t<=y;t+=1)e.push(u[t]);return e}()}),void(n.params.virtual.renderExternalUpdate?b():r("virtualUpdate"));const E=[],C=[];if(e)n.$wrapperEl.find(`.${n.params.slideClass}`).remove();else for(let e=c;e<=d;e+=1)(e<_||e>y)&&n.$wrapperEl.find(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<u.length;t+=1)t>=_&&t<=y&&(void 0===d||e?C.push(t):(t>d&&C.push(t),t<c&&E.push(t)));C.forEach((e=>{n.$wrapperEl.append(o(u[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{n.$wrapperEl.prepend(o(u[e],e))})),n.$wrapperEl.children(".swiper-slide").css(m,`${w}px`),b()}i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),n.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},s("beforeInit",(()=>{n.params.virtual.enabled&&(n.virtual.slides=n.params.virtual.slides,n.classNames.push(`${n.params.containerModifierClass}virtual`),n.params.watchSlidesProgress=!0,n.originalParams.watchSlidesProgress=!0,n.params.initialSlide||a())})),s("setTranslate",(()=>{n.params.virtual.enabled&&(n.params.cssMode&&!n._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{a()}),100)):a())})),s("init update resize",(()=>{n.params.virtual.enabled&&n.params.cssMode&&v(n.wrapperEl,"--swiper-virtual-size",`${n.virtualSize}px`)})),Object.assign(n.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.push(e[t]);else n.virtual.slides.push(e);a(!0)},prependSlide:function(e){const t=n.activeIndex;let i=t+1,s=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.unshift(e[t]);i=t+e.length,s=e.length}else n.virtual.slides.unshift(e);if(n.params.virtual.cache){const e=n.virtual.cache,t={};Object.keys(e).forEach((n=>{const i=e[n],r=i.attr("data-swiper-slide-index");r&&i.attr("data-swiper-slide-index",parseInt(r,10)+s),t[parseInt(n,10)+s]=i})),n.virtual.cache=t}a(!0),n.slideTo(i,0)},removeSlide:function(e){if(null==e)return;let t=n.activeIndex;if(Array.isArray(e))for(let i=e.length-1;i>=0;i-=1)n.virtual.slides.splice(e[i],1),n.params.virtual.cache&&delete n.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else n.virtual.slides.splice(e,1),n.params.virtual.cache&&delete n.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);a(!0),n.slideTo(t,0)},removeAllSlides:function(){n.virtual.slides=[],n.params.virtual.cache&&(n.virtual.cache={}),a(!0),n.slideTo(0,0)},update:a})},function(e){let{swiper:t,extendParams:n,on:s,emit:o}=e;const a=i(),l=r();function d(e){if(!t.enabled)return;const{rtlTranslate:n}=t;let i=e;i.originalEvent&&(i=i.originalEvent);const s=i.keyCode||i.charCode,r=t.params.keyboard.pageUpDown,c=r&&33===s,d=r&&34===s,u=37===s,h=39===s,p=38===s,f=40===s;if(!t.allowSlideNext&&(t.isHorizontal()&&h||t.isVertical()&&f||d))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&u||t.isVertical()&&p||c))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||a.activeElement&&a.activeElement.nodeName&&("input"===a.activeElement.nodeName.toLowerCase()||"textarea"===a.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(c||d||u||h||p||f)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const i=t.$el,s=i[0].clientWidth,r=i[0].clientHeight,o=l.innerWidth,a=l.innerHeight,c=t.$el.offset();n&&(c.left-=t.$el[0].scrollLeft);const d=[[c.left,c.top],[c.left+s,c.top],[c.left,c.top+r],[c.left+s,c.top+r]];for(let t=0;t<d.length;t+=1){const n=d[t];if(n[0]>=0&&n[0]<=o&&n[1]>=0&&n[1]<=a){if(0===n[0]&&0===n[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((c||d||u||h)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),((d||h)&&!n||(c||u)&&n)&&t.slideNext(),((c||u)&&!n||(d||h)&&n)&&t.slidePrev()):((c||d||p||f)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),(d||f)&&t.slideNext(),(c||p)&&t.slidePrev()),o("keyPress",s)}}function u(){t.keyboard.enabled||(c(a).on("keydown",d),t.keyboard.enabled=!0)}function h(){t.keyboard.enabled&&(c(a).off("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{t.params.keyboard.enabled&&u()})),s("destroy",(()=>{t.keyboard.enabled&&h()})),Object.assign(t.keyboard,{enable:u,disable:h})},function(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const o=r();let a;n({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let l,d=h();const p=[];function f(){t.enabled&&(t.mouseEntered=!0)}function m(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&h()-d<t.params.mousewheel.thresholdTime||!(e.delta>=6&&h()-d<60)&&(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),s("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),s("scroll",e.raw)),d=(new o.Date).getTime(),1))}function v(e){let n=e,i=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&n.preventDefault();let o=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(o=c(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!o[0].contains(n.target)&&!r.releaseOnEdges)return!0;n.originalEvent&&(n=n.originalEvent);let d=0;const f=t.rtlTranslate?-1:1,m=function(e){let t=0,n=0,i=0,s=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),i=10*t,s=10*n,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),e.shiftKey&&!i&&(i=s,s=0),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!n&&(n=s<1?-1:1),{spinX:t,spinY:n,pixelX:i,pixelY:s}}(n);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(m.pixelX)>Math.abs(m.pixelY)))return!0;d=-m.pixelX*f}else{if(!(Math.abs(m.pixelY)>Math.abs(m.pixelX)))return!0;d=-m.pixelY}else d=Math.abs(m.pixelX)>Math.abs(m.pixelY)?-m.pixelX*f:-m.pixelY;if(0===d)return!0;r.invert&&(d=-d);let v=t.getTranslate()+d*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),i=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),i&&t.params.nested&&n.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:h(),delta:Math.abs(d),direction:Math.sign(d)},i=l&&e.time<l.time+500&&e.delta<=l.delta&&e.direction===l.direction;if(!i){l=void 0,t.params.loop&&t.loopFix();let o=t.getTranslate()+d*r.sensitivity;const c=t.isBeginning,h=t.isEnd;if(o>=t.minTranslate()&&(o=t.minTranslate()),o<=t.maxTranslate()&&(o=t.maxTranslate()),t.setTransition(0),t.setTranslate(o),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!c&&t.isBeginning||!h&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(a),a=void 0,p.length>=15&&p.shift();const n=p.length?p[p.length-1]:void 0,i=p[0];if(p.push(e),n&&(e.delta>n.delta||e.direction!==n.direction))p.splice(0);else if(p.length>=15&&e.time-i.time<500&&i.delta-e.delta>=1&&e.delta<=6){const n=d>0?.8:.2;l=e,p.splice(0),a=u((()=>{t.slideToClosest(t.params.speed,!0,void 0,n)}),0)}a||(a=u((()=>{l=e,p.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(i||s("scroll",n),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),o===t.minTranslate()||o===t.maxTranslate())return!0}}else{const n={time:h(),delta:Math.abs(d),direction:Math.sign(d),raw:e};p.length>=2&&p.shift();const i=p.length?p[p.length-1]:void 0;if(p.push(n),i?(n.direction!==i.direction||n.delta>i.delta||n.time>i.time+150)&&g(n):g(n),function(e){const n=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&n.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&n.releaseOnEdges)return!0;return!1}(n))return!0}return n.preventDefault?n.preventDefault():n.returnValue=!1,!1}function _(e){let n=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(n=c(t.params.mousewheel.eventsTarget)),n[e]("mouseenter",f),n[e]("mouseleave",m),n[e]("wheel",v)}function y(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(_("on"),t.mousewheel.enabled=!0,!0)}function w(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(_("off"),t.mousewheel.enabled=!1,!0)}i("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&w(),t.params.mousewheel.enabled&&y()})),i("destroy",(()=>{t.params.cssMode&&y(),t.mousewheel.enabled&&w()})),Object.assign(t.mousewheel,{enable:y,disable:w})},function(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;function r(e){let n;return e&&(n=c(e),t.params.uniqueNavElements&&"string"==typeof e&&n.length>1&&1===t.$el.find(e).length&&(n=t.$el.find(e))),n}function o(e,n){const i=t.params.navigation;e&&e.length>0&&(e[n?"addClass":"removeClass"](i.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=n),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](i.lockClass))}function a(){if(t.params.loop)return;const{$nextEl:e,$prevEl:n}=t.navigation;o(n,t.isBeginning&&!t.params.rewind),o(e,t.isEnd&&!t.params.rewind)}function l(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&t.slidePrev()}function d(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&t.slideNext()}function u(){const e=t.params.navigation;if(t.params.navigation=Y(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const n=r(e.nextEl),i=r(e.prevEl);n&&n.length>0&&n.on("click",d),i&&i.length>0&&i.on("click",l),Object.assign(t.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:i,prevEl:i&&i[0]}),t.enabled||(n&&n.addClass(e.lockClass),i&&i.addClass(e.lockClass))}function h(){const{$nextEl:e,$prevEl:n}=t.navigation;e&&e.length&&(e.off("click",d),e.removeClass(t.params.navigation.disabledClass)),n&&n.length&&(n.off("click",l),n.removeClass(t.params.navigation.disabledClass))}n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},i("init",(()=>{!1===t.params.navigation.enabled?p():(u(),a())})),i("toEdge fromEdge lock unlock",(()=>{a()})),i("destroy",(()=>{h()})),i("enable disable",(()=>{const{$nextEl:e,$prevEl:n}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),n&&n[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),i("click",((e,n)=>{const{$nextEl:i,$prevEl:r}=t.navigation,o=n.target;if(t.params.navigation.hideOnClick&&!c(o).is(r)&&!c(o).is(i)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===o||t.pagination.el.contains(o)))return;let e;i?e=i.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),s(!0===e?"navigationShow":"navigationHide"),i&&i.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const p=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),h()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),u(),a()},disable:p,update:a,init:u,destroy:h})},function(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const r="swiper-pagination";let o;n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let a=0;function l(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function d(e,n){const{bulletActiveClass:i}=t.params.pagination;e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)}function u(){const e=t.rtl,n=t.params.pagination;if(l())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let u;const h=t.params.loop?Math.ceil((i-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(u=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),u>i-1-2*t.loopedSlides&&(u-=i-2*t.loopedSlides),u>h-1&&(u-=h),u<0&&"bullets"!==t.params.paginationType&&(u=h+u)):u=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===n.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let s,l,h;if(n.dynamicBullets&&(o=i.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",o*(n.dynamicMainBullets+4)+"px"),n.dynamicMainBullets>1&&void 0!==t.previousIndex&&(a+=u-(t.previousIndex-t.loopedSlides||0),a>n.dynamicMainBullets-1?a=n.dynamicMainBullets-1:a<0&&(a=0)),s=Math.max(u-a,0),l=s+(Math.min(i.length,n.dynamicMainBullets)-1),h=(l+s)/2),i.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`)).join(" ")),r.length>1)i.each((e=>{const t=c(e),i=t.index();i===u&&t.addClass(n.bulletActiveClass),n.dynamicBullets&&(i>=s&&i<=l&&t.addClass(`${n.bulletActiveClass}-main`),i===s&&d(t,"prev"),i===l&&d(t,"next"))}));else{const e=i.eq(u),r=e.index();if(e.addClass(n.bulletActiveClass),n.dynamicBullets){const e=i.eq(s),o=i.eq(l);for(let e=s;e<=l;e+=1)i.eq(e).addClass(`${n.bulletActiveClass}-main`);if(t.params.loop)if(r>=i.length){for(let e=n.dynamicMainBullets;e>=0;e-=1)i.eq(i.length-e).addClass(`${n.bulletActiveClass}-main`);i.eq(i.length-n.dynamicMainBullets-1).addClass(`${n.bulletActiveClass}-prev`)}else d(e,"prev"),d(o,"next");else d(e,"prev"),d(o,"next")}}if(n.dynamicBullets){const s=Math.min(i.length,n.dynamicMainBullets+4),r=(o*s-o)/2-h*o,a=e?"right":"left";i.css(t.isHorizontal()?a:"top",`${r}px`)}}if("fraction"===n.type&&(r.find(X(n.currentClass)).text(n.formatFractionCurrent(u+1)),r.find(X(n.totalClass)).text(n.formatFractionTotal(h))),"progressbar"===n.type){let e;e=n.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const i=(u+1)/h;let s=1,o=1;"horizontal"===e?s=i:o=i,r.find(X(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`).transition(t.params.speed)}"custom"===n.type&&n.renderCustom?(r.html(n.renderCustom(t,u+1,h)),s("paginationRender",r[0])):s("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](n.lockClass)}function h(){const e=t.params.pagination;if(l())return;const n=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,i=t.pagination.$el;let r="";if("bullets"===e.type){let s=t.params.loop?Math.ceil((n-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&s>n&&(s=n);for(let n=0;n<s;n+=1)e.renderBullet?r+=e.renderBullet.call(t,n,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;i.html(r),t.pagination.bullets=i.find(X(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,i.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,i.html(r)),"custom"!==e.type&&s("paginationRender",t.pagination.$el[0])}function p(){t.params.pagination=Y(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let n=c(e.el);0!==n.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&n.length>1&&(n=t.$el.find(e.el),n.length>1&&(n=n.filter((e=>c(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&n.addClass(e.clickableClass),n.addClass(e.modifierClass+e.type),n.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(n.addClass(`${e.modifierClass}${e.type}-dynamic`),a=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&n.addClass(e.progressbarOppositeClass),e.clickable&&n.on("click",X(e.bulletClass),(function(e){e.preventDefault();let n=c(this).index()*t.params.slidesPerGroup;t.params.loop&&(n+=t.loopedSlides),t.slideTo(n)})),Object.assign(t.pagination,{$el:n,el:n[0]}),t.enabled||n.addClass(e.lockClass))}function f(){const e=t.params.pagination;if(l())return;const n=t.pagination.$el;n.removeClass(e.hiddenClass),n.removeClass(e.modifierClass+e.type),n.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&n.off("click",X(e.bulletClass))}i("init",(()=>{!1===t.params.pagination.enabled?m():(p(),h(),u())})),i("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&u()})),i("snapIndexChange",(()=>{t.params.loop||u()})),i("slidesLengthChange",(()=>{t.params.loop&&(h(),u())})),i("snapGridLengthChange",(()=>{t.params.loop||(h(),u())})),i("destroy",(()=>{f()})),i("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),i("lock unlock",(()=>{u()})),i("click",((e,n)=>{const i=n.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r.length>0&&!c(i).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&i===t.navigation.nextEl||t.navigation.prevEl&&i===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);s(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const m=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),f()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),p(),h(),u()},disable:m,render:h,update:u,init:p,destroy:f})},function(e){let{swiper:t,extendParams:n,on:s,emit:r}=e;const o=i();let a,l,d,h,p=!1,f=null,m=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:n,progress:i}=t,{$dragEl:s,$el:r}=e,o=t.params.scrollbar;let a=l,c=(d-l)*i;n?(c=-c,c>0?(a=l-c,c=0):-c+l>d&&(a=d+c)):c<0?(a=l+c,c=0):c+l>d&&(a=d-c),t.isHorizontal()?(s.transform(`translate3d(${c}px, 0, 0)`),s[0].style.width=`${a}px`):(s.transform(`translate3d(0px, ${c}px, 0)`),s[0].style.height=`${a}px`),o.hide&&(clearTimeout(f),r[0].style.opacity=1,f=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:n,$el:i}=e;n[0].style.width="",n[0].style.height="",d=t.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,h=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),l="auto"===t.params.scrollbar.dragSize?d*h:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?n[0].style.width=`${l}px`:n[0].style.height=`${l}px`,i[0].style.display=h>=1?"none":"",t.params.scrollbar.hide&&(i[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function _(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function y(e){const{scrollbar:n,rtlTranslate:i}=t,{$el:s}=n;let r;r=(_(e)-s.offset()[t.isHorizontal()?"left":"top"]-(null!==a?a:l/2))/(d-l),r=Math.max(Math.min(r,1),0),i&&(r=1-r);const o=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(o),t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}function w(e){const n=t.params.scrollbar,{scrollbar:i,$wrapperEl:s}=t,{$el:o,$dragEl:l}=i;p=!0,a=e.target===l[0]||e.target===l?_(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),l.transition(100),y(e),clearTimeout(m),o.transition(0),n.hide&&o.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function b(e){const{scrollbar:n,$wrapperEl:i}=t,{$el:s,$dragEl:o}=n;p&&(e.preventDefault?e.preventDefault():e.returnValue=!1,y(e),i.transition(0),s.transition(0),o.transition(0),r("scrollbarDragMove",e))}function E(e){const n=t.params.scrollbar,{scrollbar:i,$wrapperEl:s}=t,{$el:o}=i;p&&(p=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),s.transition("")),n.hide&&(clearTimeout(m),m=u((()=>{o.css("opacity",0),o.transition(400)}),1e3)),r("scrollbarDragEnd",e),n.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:n,touchEventsTouch:i,touchEventsDesktop:s,params:r,support:a}=t,l=n.$el;if(!l)return;const c=l[0],d=!(!a.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},u=!(!a.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!c)return;const h="on"===e?"addEventListener":"removeEventListener";a.touch?(c[h](i.start,w,d),c[h](i.move,b,d),c[h](i.end,E,u)):(c[h](s.start,w,d),o[h](s.move,b,d),o[h](s.end,E,u))}function T(){const{scrollbar:e,$el:n}=t;t.params.scrollbar=Y(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const i=t.params.scrollbar;if(!i.el)return;let s=c(i.el);t.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===n.find(i.el).length&&(s=n.find(i.el)),s.addClass(t.isHorizontal()?i.horizontalClass:i.verticalClass);let r=s.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=c(`<div class="${t.params.scrollbar.dragClass}"></div>`),s.append(r)),Object.assign(e,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),s&&s[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function S(){const e=t.params.scrollbar,n=t.scrollbar.$el;n&&n.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},s("init",(()=>{!1===t.params.scrollbar.enabled?I():(T(),v(),g())})),s("update resize observerUpdate lock unlock",(()=>{v()})),s("setTranslate",(()=>{g()})),s("setTransition",((e,n)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(n)})),s("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),s("destroy",(()=>{S()}));const I=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),S()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:I,updateSize:v,setTranslate:g,init:T,destroy:S})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({parallax:{enabled:!1}});const s=(e,n)=>{const{rtl:i}=t,s=c(e),r=i?-1:1,o=s.attr("data-swiper-parallax")||"0";let a=s.attr("data-swiper-parallax-x"),l=s.attr("data-swiper-parallax-y");const d=s.attr("data-swiper-parallax-scale"),u=s.attr("data-swiper-parallax-opacity");if(a||l?(a=a||"0",l=l||"0"):t.isHorizontal()?(a=o,l="0"):(l=o,a="0"),a=a.indexOf("%")>=0?parseInt(a,10)*n*r+"%":a*n*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*n+"%":l*n+"px",null!=u){const e=u-(u-1)*(1-Math.abs(n));s[0].style.opacity=e}if(null==d)s.transform(`translate3d(${a}, ${l}, 0px)`);else{const e=d-(d-1)*(1-Math.abs(n));s.transform(`translate3d(${a}, ${l}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:n,progress:i,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{s(e,i)})),n.each(((e,n)=>{let o=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(o+=Math.ceil(n/2)-i*(r.length-1)),o=Math.min(Math.max(o,-1),1),c(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{s(e,o)}))}))};i("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),i("init",(()=>{t.params.parallax.enabled&&r()})),i("setTranslate",(()=>{t.params.parallax.enabled&&r()})),i("setTransition",((e,n)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:n}=t;n.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const n=c(t);let i=parseInt(n.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),n.transition(i)}))}(n)}))},function(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const o=r();n({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let a,l,d,u=1,h=!1;const f={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},m={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function _(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,n=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt((i-t)**2+(s-n)**2)}function y(e){const n=t.support,i=t.params.zoom;if(l=!1,d=!1,!n.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;l=!0,f.scaleStart=_(e)}f.$slideEl&&f.$slideEl.length||(f.$slideEl=c(e.target).closest(`.${t.params.slideClass}`),0===f.$slideEl.length&&(f.$slideEl=t.slides.eq(t.activeIndex)),f.$imageEl=f.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),f.$imageWrapEl=f.$imageEl.parent(`.${i.containerClass}`),f.maxRatio=f.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==f.$imageWrapEl.length)?(f.$imageEl&&f.$imageEl.transition(0),h=!0):f.$imageEl=void 0}function w(e){const n=t.support,i=t.params.zoom,s=t.zoom;if(!n.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;d=!0,f.scaleMove=_(e)}f.$imageEl&&0!==f.$imageEl.length?(n.gestures?s.scale=e.scale*u:s.scale=f.scaleMove/f.scaleStart*u,s.scale>f.maxRatio&&(s.scale=f.maxRatio-1+(s.scale-f.maxRatio+1)**.5),s.scale<i.minRatio&&(s.scale=i.minRatio+1-(i.minRatio-s.scale+1)**.5),f.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)):"gesturechange"===e.type&&y(e)}function b(e){const n=t.device,i=t.support,s=t.params.zoom,r=t.zoom;if(!i.gestures){if(!l||!d)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!n.android)return;l=!1,d=!1}f.$imageEl&&0!==f.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,f.maxRatio),s.minRatio),f.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),u=r.scale,h=!1,1===r.scale&&(f.$slideEl=void 0))}function E(e){const n=t.zoom;if(!f.$imageEl||0===f.$imageEl.length)return;if(t.allowClick=!1,!m.isTouched||!f.$slideEl)return;m.isMoved||(m.width=f.$imageEl[0].offsetWidth,m.height=f.$imageEl[0].offsetHeight,m.startX=p(f.$imageWrapEl[0],"x")||0,m.startY=p(f.$imageWrapEl[0],"y")||0,f.slideWidth=f.$slideEl[0].offsetWidth,f.slideHeight=f.$slideEl[0].offsetHeight,f.$imageWrapEl.transition(0));const i=m.width*n.scale,s=m.height*n.scale;if(!(i<f.slideWidth&&s<f.slideHeight)){if(m.minX=Math.min(f.slideWidth/2-i/2,0),m.maxX=-m.minX,m.minY=Math.min(f.slideHeight/2-s/2,0),m.maxY=-m.minY,m.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,m.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!m.isMoved&&!h){if(t.isHorizontal()&&(Math.floor(m.minX)===Math.floor(m.startX)&&m.touchesCurrent.x<m.touchesStart.x||Math.floor(m.maxX)===Math.floor(m.startX)&&m.touchesCurrent.x>m.touchesStart.x))return void(m.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(m.minY)===Math.floor(m.startY)&&m.touchesCurrent.y<m.touchesStart.y||Math.floor(m.maxY)===Math.floor(m.startY)&&m.touchesCurrent.y>m.touchesStart.y))return void(m.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),m.isMoved=!0,m.currentX=m.touchesCurrent.x-m.touchesStart.x+m.startX,m.currentY=m.touchesCurrent.y-m.touchesStart.y+m.startY,m.currentX<m.minX&&(m.currentX=m.minX+1-(m.minX-m.currentX+1)**.8),m.currentX>m.maxX&&(m.currentX=m.maxX-1+(m.currentX-m.maxX+1)**.8),m.currentY<m.minY&&(m.currentY=m.minY+1-(m.minY-m.currentY+1)**.8),m.currentY>m.maxY&&(m.currentY=m.maxY-1+(m.currentY-m.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=m.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=m.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(m.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(m.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(m.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(m.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=m.touchesCurrent.x,g.prevPositionY=m.touchesCurrent.y,g.prevTime=Date.now(),f.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}}function C(){const e=t.zoom;f.$slideEl&&t.previousIndex!==t.activeIndex&&(f.$imageEl&&f.$imageEl.transform("translate3d(0,0,0) scale(1)"),f.$imageWrapEl&&f.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,u=1,f.$slideEl=void 0,f.$imageEl=void 0,f.$imageWrapEl=void 0)}function T(e){const n=t.zoom,i=t.params.zoom;if(f.$slideEl||(e&&e.target&&(f.$slideEl=c(e.target).closest(`.${t.params.slideClass}`)),f.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?f.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):f.$slideEl=t.slides.eq(t.activeIndex)),f.$imageEl=f.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),f.$imageWrapEl=f.$imageEl.parent(`.${i.containerClass}`)),!f.$imageEl||0===f.$imageEl.length||!f.$imageWrapEl||0===f.$imageWrapEl.length)return;let s,r,a,l,d,h,p,g,v,_,y,w,b,E,C,T,S,I;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),f.$slideEl.addClass(`${i.zoomedSlideClass}`),void 0===m.touchesStart.x&&e?(s="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(s=m.touchesStart.x,r=m.touchesStart.y),n.scale=f.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,u=f.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,e?(S=f.$slideEl[0].offsetWidth,I=f.$slideEl[0].offsetHeight,a=f.$slideEl.offset().left+o.scrollX,l=f.$slideEl.offset().top+o.scrollY,d=a+S/2-s,h=l+I/2-r,v=f.$imageEl[0].offsetWidth,_=f.$imageEl[0].offsetHeight,y=v*n.scale,w=_*n.scale,b=Math.min(S/2-y/2,0),E=Math.min(I/2-w/2,0),C=-b,T=-E,p=d*n.scale,g=h*n.scale,p<b&&(p=b),p>C&&(p=C),g<E&&(g=E),g>T&&(g=T)):(p=0,g=0),f.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${g}px,0)`),f.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)}function S(){const e=t.zoom,n=t.params.zoom;f.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?f.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):f.$slideEl=t.slides.eq(t.activeIndex),f.$imageEl=f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),f.$imageWrapEl=f.$imageEl.parent(`.${n.containerClass}`)),f.$imageEl&&0!==f.$imageEl.length&&f.$imageWrapEl&&0!==f.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,u=1,f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),f.$slideEl.removeClass(`${n.zoomedSlideClass}`),f.$slideEl=void 0)}function I(e){const n=t.zoom;n.scale&&1!==n.scale?S():T(e)}function x(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function k(){return`.${t.params.slideClass}`}function P(e){const{passiveListener:n}=x(),i=k();t.$wrapperEl[e]("gesturestart",i,y,n),t.$wrapperEl[e]("gesturechange",i,w,n),t.$wrapperEl[e]("gestureend",i,b,n)}function M(){a||(a=!0,P("on"))}function N(){a&&(a=!1,P("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const n=t.support,{passiveListener:i,activeListenerWithCapture:s}=x(),r=k();n.gestures?(t.$wrapperEl.on(t.touchEvents.start,M,i),t.$wrapperEl.on(t.touchEvents.end,N,i)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,y,i),t.$wrapperEl.on(t.touchEvents.move,r,w,s),t.$wrapperEl.on(t.touchEvents.end,r,b,i),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,b,i)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,s)}function R(){const e=t.zoom;if(!e.enabled)return;const n=t.support;e.enabled=!1;const{passiveListener:i,activeListenerWithCapture:s}=x(),r=k();n.gestures?(t.$wrapperEl.off(t.touchEvents.start,M,i),t.$wrapperEl.off(t.touchEvents.end,N,i)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,y,i),t.$wrapperEl.off(t.touchEvents.move,r,w,s),t.$wrapperEl.off(t.touchEvents.end,r,b,i),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,b,i)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,s)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=f.$imageEl?f.$imageEl[0]:void 0,n=f.$slideEl?f.$slideEl[0]:void 0;s("zoomChange",e,t,n)}v=e}}),i("init",(()=>{t.params.zoom.enabled&&O()})),i("destroy",(()=>{R()})),i("touchStart",((e,n)=>{t.zoom.enabled&&function(e){const n=t.device;f.$imageEl&&0!==f.$imageEl.length&&(m.isTouched||(n.android&&e.cancelable&&e.preventDefault(),m.isTouched=!0,m.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,m.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(n)})),i("touchEnd",((e,n)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!f.$imageEl||0===f.$imageEl.length)return;if(!m.isTouched||!m.isMoved)return m.isTouched=!1,void(m.isMoved=!1);m.isTouched=!1,m.isMoved=!1;let n=300,i=300;const s=g.x*n,r=m.currentX+s,o=g.y*i,a=m.currentY+o;0!==g.x&&(n=Math.abs((r-m.currentX)/g.x)),0!==g.y&&(i=Math.abs((a-m.currentY)/g.y));const l=Math.max(n,i);m.currentX=r,m.currentY=a;const c=m.width*e.scale,d=m.height*e.scale;m.minX=Math.min(f.slideWidth/2-c/2,0),m.maxX=-m.minX,m.minY=Math.min(f.slideHeight/2-d/2,0),m.maxY=-m.minY,m.currentX=Math.max(Math.min(m.currentX,m.maxX),m.minX),m.currentY=Math.max(Math.min(m.currentY,m.maxY),m.minY),f.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}()})),i("doubleTap",((e,n)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&I(n)})),i("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),i("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:R,in:T,out:S,toggle:I})},function(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;n({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let o=!1,a=!1;function l(e,n){void 0===n&&(n=!0);const i=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),o=r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);!r.hasClass(i.elementClass)||r.hasClass(i.loadedClass)||r.hasClass(i.loadingClass)||o.push(r[0]),0!==o.length&&o.each((e=>{const o=c(e);o.addClass(i.loadingClass);const a=o.attr("data-background"),d=o.attr("data-src"),u=o.attr("data-srcset"),h=o.attr("data-sizes"),p=o.parent("picture");t.loadImage(o[0],d||a,u,h,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(a?(o.css("background-image",`url("${a}")`),o.removeAttr("data-background")):(u&&(o.attr("srcset",u),o.removeAttr("data-srcset")),h&&(o.attr("sizes",h),o.removeAttr("data-sizes")),p.length&&p.children("source").each((e=>{const t=c(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(i.loadedClass).removeClass(i.loadingClass),r.find(`.${i.preloaderClass}`).remove(),t.params.loop&&n){const e=r.attr("data-swiper-slide-index");r.hasClass(t.params.slideDuplicateClass)?l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1):l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}s("lazyImageReady",r[0],o[0]),t.params.autoHeight&&t.updateAutoHeight()}})),s("lazyImageLoad",r[0],o[0])}))}function d(){const{$wrapperEl:e,params:n,slides:i,activeIndex:s}=t,r=t.virtual&&n.virtual.enabled,o=n.lazy;let d=n.slidesPerView;function u(t){if(r){if(e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(i[t])return!0;return!1}function h(e){return r?c(e).attr("data-swiper-slide-index"):c(e).index()}if("auto"===d&&(d=0),a||(a=!0),t.params.watchSlidesProgress)e.children(`.${n.slideVisibleClass}`).each((e=>{l(r?c(e).attr("data-swiper-slide-index"):c(e).index())}));else if(d>1)for(let e=s;e<s+d;e+=1)u(e)&&l(e);else l(s);if(o.loadPrevNext)if(d>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){const e=o.loadPrevNextAmount,t=Math.ceil(d),n=Math.min(s+t+Math.max(e,t),i.length),r=Math.max(s-Math.max(t,e),0);for(let e=s+t;e<n;e+=1)u(e)&&l(e);for(let e=r;e<s;e+=1)u(e)&&l(e)}else{const t=e.children(`.${n.slideNextClass}`);t.length>0&&l(h(t));const i=e.children(`.${n.slidePrevClass}`);i.length>0&&l(h(i))}}function u(){const e=r();if(!t||t.destroyed)return;const n=t.params.lazy.scrollingElement?c(t.params.lazy.scrollingElement):c(e),i=n[0]===e,s=i?e.innerWidth:n[0].offsetWidth,a=i?e.innerHeight:n[0].offsetHeight,l=t.$el.offset(),{rtlTranslate:h}=t;let p=!1;h&&(l.left-=t.$el[0].scrollLeft);const f=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]];for(let e=0;e<f.length;e+=1){const t=f[e];if(t[0]>=0&&t[0]<=s&&t[1]>=0&&t[1]<=a){if(0===t[0]&&0===t[1])continue;p=!0}}const m=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};p?(d(),n.off("scroll",u,m)):o||(o=!0,n.on("scroll",u,m))}i("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),i("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?u():d())})),i("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&d()})),i("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?u():d())})),i("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!a)&&(t.params.lazy.checkInView?u():d())})),i("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?u():d())})),i("slideChange",(()=>{const{lazy:e,cssMode:n,watchSlidesProgress:i,touchReleaseOnEdges:s,resistanceRatio:r}=t.params;e.enabled&&(n||i&&(s||0===r))&&d()})),i("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:d,loadInSlide:l})},function(e){let{swiper:t,extendParams:n,on:i}=e;function s(e,t){const n=function(){let e,t,n;return(i,s)=>{for(t=-1,e=i.length;e-t>1;)n=e+t>>1,i[n]<=s?t=n:e=n;return e}}();let i,s;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(s=n(this.x,e),i=s-1,(e-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}n({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},i("beforeInit",(()=>{t.controller.control=t.params.controller.control})),i("update",(()=>{r()})),i("resize",(()=>{r()})),i("observerUpdate",(()=>{r()})),i("setTranslate",((e,n,i)=>{t.controller.control&&t.controller.setTranslate(n,i)})),i("setTransition",((e,n,i)=>{t.controller.control&&t.controller.setTransition(n,i)})),Object.assign(t.controller,{setTranslate:function(e,n){const i=t.controller.control;let r,o;const a=t.constructor;function l(e){const n=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(function(e){t.controller.spline||(t.controller.spline=t.params.loop?new s(t.slidesGrid,e.slidesGrid):new s(t.snapGrid,e.snapGrid))}(e),o=-t.controller.spline.interpolate(-n)),o&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),o=(n-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(o=e.maxTranslate()-o),e.updateProgress(o),e.setTranslate(o,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==n&&i[e]instanceof a&&l(i[e]);else i instanceof a&&n!==i&&l(i)},setTransition:function(e,n){const i=t.constructor,s=t.controller.control;let r;function o(n){n.setTransition(e,t),0!==e&&(n.transitionStart(),n.params.autoHeight&&u((()=>{n.updateAutoHeight()})),n.$wrapperEl.transitionEnd((()=>{s&&(n.params.loop&&"slide"===t.params.controller.by&&n.loopFix(),n.transitionEnd())})))}if(Array.isArray(s))for(r=0;r<s.length;r+=1)s[r]!==n&&s[r]instanceof i&&o(s[r]);else s instanceof i&&n!==s&&o(s)}})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}});let s=null;function r(e){const t=s;0!==t.length&&(t.html(""),t.html(e))}function o(e){e.attr("tabIndex","0")}function a(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function d(e,t){e.attr("aria-roledescription",t)}function u(e,t){e.attr("aria-label",t)}function h(e){e.attr("aria-disabled",!0)}function p(e){e.attr("aria-disabled",!1)}function f(e){if(13!==e.keyCode&&32!==e.keyCode)return;const n=t.params.a11y,i=c(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(n.lastSlideMessage):r(n.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(n.firstSlideMessage):r(n.prevSlideMessage)),t.pagination&&i.is(X(t.params.pagination.bulletClass))&&i[0].click()}function m(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return m()&&t.params.pagination.clickable}const v=(e,t,n)=>{o(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",f)),u(e,n),function(e,t){e.attr("aria-controls",t)}(e,t)},_=e=>{const n=e.target.closest(`.${t.params.slideClass}`);if(!n||!t.slides.includes(n))return;const i=t.slides.indexOf(n)===t.activeIndex,s=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(n);i||s||t.slideTo(t.slides.indexOf(n),0)},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&d(c(t.slides),e.itemRoleDescriptionMessage),l(c(t.slides),e.slideRole);const n=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((i,s)=>{const r=c(i),o=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):s;u(r,e.slideLabelMessage.replace(/\{\{index\}\}/,o+1).replace(/\{\{slidesLength\}\}/,n))}))},w=()=>{const e=t.params.a11y;t.$el.append(s);const n=t.$el;e.containerRoleDescriptionMessage&&d(n,e.containerRoleDescriptionMessage),e.containerMessage&&u(n,e.containerMessage);const i=t.$wrapperEl,r=e.id||i.attr("id")||`swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var o;const a=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var l;let c,h;l=r,i.attr("id",l),function(e,t){e.attr("aria-live",t)}(i,a),y(),t.navigation&&t.navigation.$nextEl&&(c=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(h=t.navigation.$prevEl),c&&c.length&&v(c,r,e.nextSlideMessage),h&&h.length&&v(h,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",X(t.params.pagination.bulletClass),f),t.$el.on("focus",_,!0)};i("beforeInit",(()=>{s=c(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),i("afterInit",(()=>{t.params.a11y.enabled&&w()})),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),i("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:n}=t.navigation;n&&n.length>0&&(t.isBeginning?(h(n),a(n)):(p(n),o(n))),e&&e.length>0&&(t.isEnd?(h(e),a(e)):(p(e),o(e)))}()})),i("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;m()&&t.pagination.bullets.each((n=>{const i=c(n);t.params.pagination.clickable&&(o(i),t.params.pagination.renderBullet||(l(i,"button"),u(i,e.paginationBulletMessage.replace(/\{\{index\}\}/,i.index()+1)))),i.is(`.${t.params.pagination.bulletActiveClass}`)?i.attr("aria-current","true"):i.removeAttr("aria-current")}))}()})),i("destroy",(()=>{t.params.a11y.enabled&&function(){let e,n;s&&s.length>0&&s.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(n=t.navigation.$prevEl),e&&e.off("keydown",f),n&&n.off("keydown",f),g()&&t.pagination.$el.off("keydown",X(t.params.pagination.bulletClass),f),t.$el.off("focus",_,!0)}()}))},function(e){let{swiper:t,extendParams:n,on:i}=e;n({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let s=!1,o={};const a=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let n;n=e?new URL(e):t.location;const i=n.pathname.slice(1).split("/").filter((e=>""!==e)),s=i.length;return{key:i[s-2],value:i[s-1]}},c=(e,n)=>{const i=r();if(!s||!t.params.history.enabled)return;let o;o=t.params.url?new URL(t.params.url):i.location;const l=t.slides.eq(n);let c=a(l.attr("data-history"));if(t.params.history.root.length>0){let n=t.params.history.root;"/"===n[n.length-1]&&(n=n.slice(0,n.length-1)),c=`${n}/${e}/${c}`}else o.pathname.includes(e)||(c=`${e}/${c}`);t.params.history.keepQuery&&(c+=o.search);const d=i.history.state;d&&d.value===c||(t.params.history.replaceState?i.history.replaceState({value:c},null,c):i.history.pushState({value:c},null,c))},d=(e,n,i)=>{if(n)for(let s=0,r=t.slides.length;s<r;s+=1){const r=t.slides.eq(s);if(a(r.attr("data-history"))===n&&!r.hasClass(t.params.slideDuplicateClass)){const n=r.index();t.slideTo(n,e,i)}}else t.slideTo(0,e,i)},u=()=>{o=l(t.params.url),d(t.params.speed,o.value,!1)};i("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);s=!0,o=l(t.params.url),(o.key||o.value)&&(d(0,o.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",u))}})()})),i("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",u)})()})),i("transitionEnd _freeModeNoMomentumRelease",(()=>{s&&c(t.params.history.key,t.activeIndex)})),i("slideChange",(()=>{s&&t.params.cssMode&&c(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:n,emit:s,on:o}=e,a=!1;const l=i(),d=r();n({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const u=()=>{s("hashChange");const e=l.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const n=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===n)return;t.slideTo(n)}},h=()=>{if(a&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState)d.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),s("hashSet");else{const e=t.slides.eq(t.activeIndex),n=e.attr("data-hash")||e.attr("data-history");l.location.hash=n||"",s("hashSet")}};o("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;a=!0;const e=l.location.hash.replace("#","");if(e){const n=0;for(let i=0,s=t.slides.length;i<s;i+=1){const s=t.slides.eq(i);if((s.attr("data-hash")||s.attr("data-history"))===e&&!s.hasClass(t.params.slideDuplicateClass)){const e=s.index();t.slideTo(e,n,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&c(d).on("hashchange",u)})()})),o("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&c(d).off("hashchange",u)})),o("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&h()})),o("slideChange",(()=>{a&&t.params.cssMode&&h()}))},function(e){let t,{swiper:n,extendParams:s,on:r,emit:o}=e;function a(){const e=n.slides.eq(n.activeIndex);let i=n.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(i=e.attr("data-swiper-autoplay")||n.params.autoplay.delay),clearTimeout(t),t=u((()=>{let e;n.params.autoplay.reverseDirection?n.params.loop?(n.loopFix(),e=n.slidePrev(n.params.speed,!0,!0),o("autoplay")):n.isBeginning?n.params.autoplay.stopOnLastSlide?c():(e=n.slideTo(n.slides.length-1,n.params.speed,!0,!0),o("autoplay")):(e=n.slidePrev(n.params.speed,!0,!0),o("autoplay")):n.params.loop?(n.loopFix(),e=n.slideNext(n.params.speed,!0,!0),o("autoplay")):n.isEnd?n.params.autoplay.stopOnLastSlide?c():(e=n.slideTo(0,n.params.speed,!0,!0),o("autoplay")):(e=n.slideNext(n.params.speed,!0,!0),o("autoplay")),(n.params.cssMode&&n.autoplay.running||!1===e)&&a()}),i)}function l(){return void 0===t&&!n.autoplay.running&&(n.autoplay.running=!0,o("autoplayStart"),a(),!0)}function c(){return!!n.autoplay.running&&void 0!==t&&(t&&(clearTimeout(t),t=void 0),n.autoplay.running=!1,o("autoplayStop"),!0)}function d(e){n.autoplay.running&&(n.autoplay.paused||(t&&clearTimeout(t),n.autoplay.paused=!0,0!==e&&n.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{n.$wrapperEl[0].addEventListener(e,p)})):(n.autoplay.paused=!1,a())))}function h(){const e=i();"hidden"===e.visibilityState&&n.autoplay.running&&d(),"visible"===e.visibilityState&&n.autoplay.paused&&(a(),n.autoplay.paused=!1)}function p(e){n&&!n.destroyed&&n.$wrapperEl&&e.target===n.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{n.$wrapperEl[0].removeEventListener(e,p)})),n.autoplay.paused=!1,n.autoplay.running?a():c())}function f(){n.params.autoplay.disableOnInteraction?c():(o("autoplayPause"),d()),["transitionend","webkitTransitionEnd"].forEach((e=>{n.$wrapperEl[0].removeEventListener(e,p)}))}function m(){n.params.autoplay.disableOnInteraction||(n.autoplay.paused=!1,o("autoplayResume"),a())}n.autoplay={running:!1,paused:!1},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{n.params.autoplay.enabled&&(l(),i().addEventListener("visibilitychange",h),n.params.autoplay.pauseOnMouseEnter&&(n.$el.on("mouseenter",f),n.$el.on("mouseleave",m)))})),r("beforeTransitionStart",((e,t,i)=>{n.autoplay.running&&(i||!n.params.autoplay.disableOnInteraction?n.autoplay.pause(t):c())})),r("sliderFirstMove",(()=>{n.autoplay.running&&(n.params.autoplay.disableOnInteraction?c():d())})),r("touchEnd",(()=>{n.params.cssMode&&n.autoplay.paused&&!n.params.autoplay.disableOnInteraction&&a()})),r("destroy",(()=>{n.$el.off("mouseenter",f),n.$el.off("mouseleave",m),n.autoplay.running&&c(),i().removeEventListener("visibilitychange",h)})),Object.assign(n.autoplay,{pause:d,run:a,start:l,stop:c})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let s=!1,r=!1;function o(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const n=e.clickedIndex,i=e.clickedSlide;if(i&&c(i).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==n)return;let s;if(s=e.params.loop?parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"),10):n,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const n=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),i=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();s=void 0===n?i:void 0===i?n:i-e<e-n?i:n}t.slideTo(s)}function a(){const{thumbs:e}=t.params;if(s)return!1;s=!0;const n=t.constructor;if(e.swiper instanceof n)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(f(e.swiper)){const i=Object.assign({},e.swiper);Object.assign(i,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new n(i),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",o),!0}function l(e){const n=t.thumbs.swiper;if(!n||n.destroyed)return;const i="auto"===n.params.slidesPerView?n.slidesPerViewDynamic():n.params.slidesPerView,s=t.params.thumbs.autoScrollOffset,r=s&&!n.params.loop;if(t.realIndex!==n.realIndex||r){let o,a,l=n.activeIndex;if(n.params.loop){n.slides.eq(l).hasClass(n.params.slideDuplicateClass)&&(n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft,l=n.activeIndex);const e=n.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),i=n.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();o=void 0===e?i:void 0===i?e:i-l==l-e?n.params.slidesPerGroup>1?i:l:i-l<l-e?i:e,a=t.activeIndex>t.previousIndex?"next":"prev"}else o=t.realIndex,a=o>t.previousIndex?"next":"prev";r&&(o+="next"===a?s:-1*s),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(o)<0&&(n.params.centeredSlides?o=o>l?o-Math.floor(i/2)+1:o+Math.floor(i/2)-1:o>l&&n.params.slidesPerGroup,n.slideTo(o,e?0:void 0))}let o=1;const a=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(o=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),n.slides.removeClass(a),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(let e=0;e<o;e+=1)n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(a);else for(let e=0;e<o;e+=1)n.slides.eq(t.realIndex+e).addClass(a)}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(a(),l(!0))})),i("slideChange update resize observerUpdate",(()=>{l()})),i("setTransition",((e,n)=>{const i=t.thumbs.swiper;i&&!i.destroyed&&i.setTransition(n)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:a,update:l})},function(e){let{swiper:t,extendParams:n,emit:i,once:s}=e;n({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:n}=t;0===e.velocities.length&&e.velocities.push({position:n[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:n[t.isHorizontal()?"currentX":"currentY"],time:h()})},onTouchEnd:function(e){let{currentPos:n}=e;const{params:r,$wrapperEl:o,rtlTranslate:a,snapGrid:l,touchEventsData:c}=t,d=h()-c.touchStartTime;if(n<-t.minTranslate())t.slideTo(t.activeIndex);else if(n>-t.maxTranslate())t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),n=c.velocities.pop(),i=e.position-n.position,s=e.time-n.time;t.velocity=i/s,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(s>150||h()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const n=t.velocity*e;let d=t.translate+n;a&&(d=-d);let u,p=!1;const f=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let m;if(d<t.maxTranslate())r.freeMode.momentumBounce?(d+t.maxTranslate()<-f&&(d=t.maxTranslate()-f),u=t.maxTranslate(),p=!0,c.allowMomentumBounce=!0):d=t.maxTranslate(),r.loop&&r.centeredSlides&&(m=!0);else if(d>t.minTranslate())r.freeMode.momentumBounce?(d-t.minTranslate()>f&&(d=t.minTranslate()+f),u=t.minTranslate(),p=!0,c.allowMomentumBounce=!0):d=t.minTranslate(),r.loop&&r.centeredSlides&&(m=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<l.length;t+=1)if(l[t]>-d){e=t;break}d=Math.abs(l[e]-d)<Math.abs(l[e-1]-d)||"next"===t.swipeDirection?l[e]:l[e-1],d=-d}if(m&&s("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=a?Math.abs((-d-t.translate)/t.velocity):Math.abs((d-t.translate)/t.velocity),r.freeMode.sticky){const n=Math.abs((a?-d:d)-t.translate),i=t.slidesSizesGrid[t.activeIndex];e=n<i?r.speed:n<2*i?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&p?(t.updateProgress(u),t.setTransition(e),t.setTranslate(d),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(i("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),o.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(i("_freeModeNoMomentumRelease"),t.updateProgress(d),t.setTransition(e),t.setTranslate(d),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(d),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&i("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||d>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,n,i,{swiper:s,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),s.grid={initSlides:e=>{const{slidesPerView:r}=s.params,{rows:o,fill:a}=s.params.grid;n=t/o,i=Math.floor(e/o),t=Math.floor(e/o)===e/o?e:Math.ceil(e/o)*o,"auto"!==r&&"row"===a&&(t=Math.max(t,r*o))},updateSlide:(e,r,o,a)=>{const{slidesPerGroup:l,spaceBetween:c}=s.params,{rows:d,fill:u}=s.params.grid;let h,p,f;if("row"===u&&l>1){const n=Math.floor(e/(l*d)),i=e-d*l*n,s=0===n?l:Math.min(Math.ceil((o-n*d*l)/d),l);f=Math.floor(i/s),p=i-f*s+n*l,h=p+f*t/d,r.css({"-webkit-order":h,order:h})}else"column"===u?(p=Math.floor(e/d),f=e-p*d,(p>i||p===i&&f===d-1)&&(f+=1,f>=d&&(f=0,p+=1))):(f=Math.floor(e/n),p=e-f*n);r.css(a("margin-top"),0!==f?c&&`${c}px`:"")},updateWrapperSize:(e,n,i)=>{const{spaceBetween:r,centeredSlides:o,roundLengths:a}=s.params,{rows:l}=s.params.grid;if(s.virtualSize=(e+r)*t,s.virtualSize=Math.ceil(s.virtualSize/l)-r,s.$wrapperEl.css({[i("width")]:`${s.virtualSize+r}px`}),o){n.splice(0,n.length);const e=[];for(let t=0;t<n.length;t+=1){let i=n[t];a&&(i=Math.floor(i)),n[t]<s.virtualSize+n[0]&&e.push(i)}n.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:J.bind(t),addSlide:Q.bind(t),removeSlide:Z.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:i,setTranslate:()=>{const{slides:e}=t,n=t.params.fadeEffect;for(let i=0;i<e.length;i+=1){const e=t.slides.eq(i);let s=-e[0].swiperSlideOffset;t.params.virtualTranslate||(s-=t.translate);let r=0;t.isHorizontal()||(r=s,s=0);const o=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);ne(n,e).css({opacity:o}).transform(`translate3d(${s}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:n}=t.params.fadeEffect;(n?t.slides.find(n):t.slides).transition(e),ie({swiper:t,duration:e,transformEl:n,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const s=(e,t,n)=>{let i=n?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),s=n?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=c(`<div class="swiper-slide-shadow-${n?"left":"top"}"></div>`),e.append(i)),0===s.length&&(s=c(`<div class="swiper-slide-shadow-${n?"right":"bottom"}"></div>`),e.append(s)),i.length&&(i[0].style.opacity=Math.max(-t,0)),s.length&&(s[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:i,setTranslate:()=>{const{$el:e,$wrapperEl:n,slides:i,width:r,height:o,rtlTranslate:a,size:l,browser:d}=t,u=t.params.cubeEffect,h=t.isHorizontal(),p=t.virtual&&t.params.virtual.enabled;let f,m=0;u.shadow&&(h?(f=n.find(".swiper-cube-shadow"),0===f.length&&(f=c('<div class="swiper-cube-shadow"></div>'),n.append(f)),f.css({height:`${r}px`})):(f=e.find(".swiper-cube-shadow"),0===f.length&&(f=c('<div class="swiper-cube-shadow"></div>'),e.append(f))));for(let e=0;e<i.length;e+=1){const t=i.eq(e);let n=e;p&&(n=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*n,o=Math.floor(r/360);a&&(r=-r,o=Math.floor(-r/360));const c=Math.max(Math.min(t[0].progress,1),-1);let d=0,f=0,g=0;n%4==0?(d=4*-o*l,g=0):(n-1)%4==0?(d=0,g=4*-o*l):(n-2)%4==0?(d=l+4*o*l,g=l):(n-3)%4==0&&(d=-l,g=3*l+4*l*o),a&&(d=-d),h||(f=d,d=0);const v=`rotateX(${h?0:-r}deg) rotateY(${h?r:0}deg) translate3d(${d}px, ${f}px, ${g}px)`;c<=1&&c>-1&&(m=90*n+90*c,a&&(m=90*-n-90*c)),t.transform(v),u.slideShadows&&s(t,c,h)}if(n.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),u.shadow)if(h)f.transform(`translate3d(0px, ${r/2+u.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),n=u.shadowScale,i=u.shadowScale/t,s=u.shadowOffset;f.transform(`scale3d(${n}, 1, ${i}) translate3d(0px, ${o/2+s}px, ${-o/2/i}px) rotateX(-90deg)`)}const g=d.isSafari||d.isWebView?-l/2:0;n.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:m}deg) rotateY(${t.isHorizontal()?-m:0}deg)`),n[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:n,slides:i}=t;i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&n.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const n=Math.max(Math.min(t.progress,1),-1);s(c(t),n,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const s=(e,n,i)=>{let s=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===s.length&&(s=se(i,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=se(i,e,t.isHorizontal()?"right":"bottom")),s.length&&(s[0].style.opacity=Math.max(-n,0)),r.length&&(r[0].style.opacity=Math.max(n,0))};te({effect:"flip",swiper:t,on:i,setTranslate:()=>{const{slides:e,rtlTranslate:n}=t,i=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const o=e.eq(r);let a=o[0].progress;t.params.flipEffect.limitRotation&&(a=Math.max(Math.min(o[0].progress,1),-1));const l=o[0].swiperSlideOffset;let c=-180*a,d=0,u=t.params.cssMode?-l-t.translate:-l,h=0;t.isHorizontal()?n&&(c=-c):(h=u,u=0,d=-c,c=0),o[0].style.zIndex=-Math.abs(Math.round(a))+e.length,i.slideShadows&&s(o,a,i);const p=`translate3d(${u}px, ${h}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;ne(i,o).transform(p)}},setTransition:e=>{const{transformEl:n}=t.params.flipEffect;(n?t.slides.find(n):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ie({swiper:t,duration:e,transformEl:n})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((n=>{const i=c(n);let r=i[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(n.progress,1),-1)),s(i,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:i,setTranslate:()=>{const{width:e,height:n,slides:i,slidesSizesGrid:s}=t,r=t.params.coverflowEffect,o=t.isHorizontal(),a=t.translate,l=o?e/2-a:n/2-a,c=o?r.rotate:-r.rotate,d=r.depth;for(let e=0,t=i.length;e<t;e+=1){const t=i.eq(e),n=s[e],a=(l-t[0].swiperSlideOffset-n/2)/n,u="function"==typeof r.modifier?r.modifier(a):a*r.modifier;let h=o?c*u:0,p=o?0:c*u,f=-d*Math.abs(u),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*n);let g=o?0:m*u,v=o?m*u:0,_=1-(1-r.scale)*Math.abs(u);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(p)<.001&&(p=0),Math.abs(_)<.001&&(_=0);const y=`translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${h}deg) scale(${_})`;if(ne(r,t).transform(y),t[0].style.zIndex=1-Math.abs(Math.round(u)),r.slideShadows){let e=o?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),n=o?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=se(r,t,o?"left":"top")),0===n.length&&(n=se(r,t,o?"right":"bottom")),e.length&&(e[0].style.opacity=u>0?u:0),n.length&&(n[0].style.opacity=-u>0?-u:0)}}},setTransition:e=>{const{transformEl:n}=t.params.coverflowEffect;(n?t.slides.find(n):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const s=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:i,setTranslate:()=>{const{slides:e,$wrapperEl:n,slidesSizesGrid:i}=t,r=t.params.creativeEffect,{progressMultiplier:o}=r,a=t.params.centeredSlides;if(a){const e=i[0]/2-t.params.slidesOffsetBefore||0;n.transform(`translateX(calc(50% - ${e}px))`)}for(let n=0;n<e.length;n+=1){const i=e.eq(n),l=i[0].progress,c=Math.min(Math.max(i[0].progress,-r.limitProgress),r.limitProgress);let d=c;a||(d=Math.min(Math.max(i[0].originalProgress,-r.limitProgress),r.limitProgress));const u=i[0].swiperSlideOffset,h=[t.params.cssMode?-u-t.translate:-u,0,0],p=[0,0,0];let f=!1;t.isHorizontal()||(h[1]=h[0],h[0]=0);let m={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(m=r.next,f=!0):c>0&&(m=r.prev,f=!0),h.forEach(((e,t)=>{h[t]=`calc(${e}px + (${s(m.translate[t])} * ${Math.abs(c*o)}))`})),p.forEach(((e,t)=>{p[t]=m.rotate[t]*Math.abs(c*o)})),i[0].style.zIndex=-Math.abs(Math.round(l))+e.length;const g=h.join(", "),v=`rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,_=d<0?`scale(${1+(1-m.scale)*d*o})`:`scale(${1-(1-m.scale)*d*o})`,y=d<0?1+(1-m.opacity)*d*o:1-(1-m.opacity)*d*o,w=`translate3d(${g}) ${v} ${_}`;if(f&&m.shadow||!f){let e=i.children(".swiper-slide-shadow");if(0===e.length&&m.shadow&&(e=se(r,i)),e.length){const t=r.shadowPerProgress?c*(1/r.limitProgress):c;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const b=ne(r,i);b.transform(w).css({opacity:y}),m.origin&&b.css("transform-origin",m.origin)}},setTransition:e=>{const{transformEl:n}=t.params.creativeEffect;(n?t.slides.find(n):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ie({swiper:t,duration:e,transformEl:n,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:n,on:i}=e;n({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0}}),te({effect:"cards",swiper:t,on:i,setTranslate:()=>{const{slides:e,activeIndex:n}=t,i=t.params.cardsEffect,{startTranslate:s,isTouched:r}=t.touchEventsData,o=t.translate;for(let a=0;a<e.length;a+=1){const l=e.eq(a),c=l[0].progress,d=Math.min(Math.max(c,-4),4);let u=l[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(u-=e[0].swiperSlideOffset);let h=t.params.cssMode?-u-t.translate:-u,p=0;const f=-100*Math.abs(d);let m=1,g=-2*d,v=8-.75*Math.abs(d);const _=t.virtual&&t.params.virtual.enabled?t.virtual.from+a:a,y=(_===n||_===n-1)&&d>0&&d<1&&(r||t.params.cssMode)&&o<s,w=(_===n||_===n+1)&&d<0&&d>-1&&(r||t.params.cssMode)&&o>s;if(y||w){const e=(1-Math.abs((Math.abs(d)-.5)/.5))**.5;g+=-28*d*e,m+=-.5*e,v+=96*e,p=-25*e*Math.abs(d)+"%"}if(h=d<0?`calc(${h}px + (${v*Math.abs(d)}%))`:d>0?`calc(${h}px + (-${v*Math.abs(d)}%))`:`${h}px`,!t.isHorizontal()){const e=p;p=h,h=e}const b=d<0?""+(1+(1-m)*d):""+(1-(1-m)*d),E=`\n        translate3d(${h}, ${p}, ${f}px)\n        rotateZ(${i.rotate?g:0}deg)\n        scale(${b})\n      `;if(i.slideShadows){let e=l.find(".swiper-slide-shadow");0===e.length&&(e=se(i,l)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(d)-.5)/.5,0),1))}l[0].style.zIndex=-Math.abs(Math.round(c))+e.length,ne(i,l).transform(E)}},setTransition:e=>{const{transformEl:n}=t.params.cardsEffect;(n?t.slides.find(n):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ie({swiper:t,duration:e,transformEl:n})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return G.use(re),G}();const x={loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:30,slidesPerGroup:3}}},k={lines:8,length:50,width:26,radius:63,scale:1.05,corners:.5,speed:1.9,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#000000",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"fixed"};var P=markup={leftArrow:()=>'<div\n      class="pagination-bar__element pagination-bar__control pagination-bar__left"\n      data-type="left"\n    >\n      <svg class="arrow-icon arrow-left-icon">\n        <use href="./images/symbol-defs.svg#icon-arrow-left2"></use>\n      </svg>\n    </div>',number:(e,t=!1,n=!1)=>`<li\n      class="pagination-bar__element pagination-bar__number ${t?"pagination-bar__element--active":""} ${n?"pagination-bar__element--mobile-hidden":""}"\n      data-page="${e}"\n      data-type="number"\n    >\n      <span class='no-click'>${e}</span>\n    </li>`,dots:(e=!1)=>`<li class="pagination-bar__element pagination-bar__dots ${e?"pagination-bar__element--mobile-hidden":""}" data-type="dots"> \n      <span>...</span>\n    </li>`,rightArrow:()=>'<div\n      class="pagination-bar__element pagination-bar__control pagination-bar__right"\n      data-type="right"\n    >\n      <svg class="arrow-icon arrow-right-icon">\n        <use href="./images/symbol-defs.svg#icon-arrow-right2"></use>\n      </svg>\n    </div>'};const M=document.querySelector(".pagination-bar__list"),N=document.querySelector(".pagination-bar__left"),O=document.querySelector(".pagination-bar__right");let R=1;function A(e,t){let n="",i=t-2,s=t+2;N.classList.add("pagination-bar__element--hidden"),O.classList.add("pagination-bar__element--hidden"),t>1&&N.classList.remove("pagination-bar__element--hidden"),t>2&&(n+=P.number(1,!1,!0),t>4&&(n+=P.dots(!0)));for(let r=i;r<=s;r++)r>e||r<0||(0===r&&(r+=1),1===r&&3===t&&r++,r===e&&t===e-2||(n+=r!=t?P.number(r):P.number(r,!0)));t<e-1&&(t<e-3&&(n+=P.dots(!0)),n+=P.number(e,!1,!0)),t<e&&O.classList.remove("pagination-bar__element--hidden"),M.innerHTML=n}document.addEventListener("DOMContentLoaded",(()=>{R=1})),M.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;j?(R=Number(e.target.dataset.page),Z(R)):(R=Number(e.target.dataset.page),ee(sessionStorage.getItem(H),R))})),N.addEventListener("click",(function(e){j?Z(--R):ee(sessionStorage.getItem(H),--R)})),O.addEventListener("click",(function(e){j?Z(++R):ee(sessionStorage.getItem(H),++R)}));var L={};L=r("bRlFp");async function $(e){const n=await t(L).get("https://api.themoviedb.org/3/genre/movie/list?api_key=83315ca553e38676f05e28ed10d08b23&language=en-US").then((e=>e.data.genres));var i;return e.map((({id:e,title:t,poster_path:s,release_date:r,genre_ids:o,overview:a,vote_average:l})=>`\n        <li class="card">\n          <a class="card__link" href="" data-id="${e}">\n            <img class="card__img" src="${null!==s?"https://image.tmdb.org/t/p/w400"+s:"https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg"}" alt="${""!==a?a:"No info!"}" />\n            <p class="card__name">${null!=t?t:"No info about title!"}</p>\n            <p class="card__description">${0!=o?n.filter((e=>o.includes(e.id))).map((e=>e.name)).join(", "):"No info about genres!"} | ${null!==(i=null==r?void 0:r.slice(0,4))&&void 0!==i?i:"No info about year!"}\n            </p>\n            <span class="card__vote">${0!==l?l.toString().padEnd(3,".0"):"No votes"}</span>\n          </a>\n        </li>`)).join("")}function D(e){const{id:t,title:n,original_title:i,poster_path:s,genres:r,overview:o,vote_average:a,vote_count:l,popularity:c}=e;return`\n        <img\n          data-id="${t}"\n          data-genre-ids="${r.map((e=>e.id)).join("-")}"\n          class="filmcard__poster"\n          src="${null!==s?"https://image.tmdb.org/t/p/w400"+s:"https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg"}"\n          alt="${""!==o?o:"No info!"}"\n        />\n        <div class="filmcard__wrapper">\n          <p class="filmcard__title">${null!=n?n:"No info about title!"}</p>\n          <table class="filmcard__stats">\n            <tr class="stats__row">\n              <td class="stats__stat-name">Vote / Votes</td>\n              <td class="stats__stat-value">\n                <span class="votes stats__stat-value--highlighted">${0!==a?a.toString().padEnd(3,".0"):"No votes!"}</span> /\n                <span class="total-votes">${l}</span>\n              </td>\n            </tr>\n            <tr class="stats__row">\n              <td class="stats__stat-name">Popularity</td>\n              <td class="stats__stat-value">${c}</td>\n            </tr>\n            <tr class="stats__row">\n              <td class="stats__stat-name">Original Title</td>\n              <td class="original-title stats__stat-value">${i}</td>\n            </tr>\n            <tr class="stats__row">\n              <td class="stats__stat-name">Genre</td>\n              <td class="stats__stat-value">${0!=r?r.map((e=>e.name)).join(", "):"No info about genres!"}</td>\n            </tr>\n          </table>\n          <p class="filmcard__header">About</p>\n          <p class="filmcard__about">\n            ${null!=o?o:"No info about movie!"}\n          </p>\n          <div class="button-wrapper">\n            <button type="button" class="filmcard__btn" data-add-to-watched-btn>\n              Add to<br />\n              Watched\n            </button>\n            <button type="button" class="filmcard__btn" data-add-to-queue-btn>\n              Add to Queue\n            </button>\n          </div>\n        </div>`}function B(e){let t="";for(let n=0;n<9;n+=1){const{id:i,overview:s,backdrop_path:r}=e[n];t+=`\n        <div class="swiper-slide">\n            <img class="swiper-img" data-id="${i}" src="${"https://image.tmdb.org/t/p/w500"+r}" alt="${s}" style="width: 100%" />\n        </div>`}return t}async function F(e){return(await L.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=83315ca553e38676f05e28ed10d08b23&page=${e}`)).data}async function U(e,t){return(await L.get(`https://api.themoviedb.org/3/search/movie?api_key=83315ca553e38676f05e28ed10d08b23&language=en-US&query=${e}&page=${t}&include_adult=false`)).data}async function z(e){return(await L.get(`https://api.themoviedb.org/3/movie/${e}?api_key=83315ca553e38676f05e28ed10d08b23&language=en-US`)).data}async function q(){return(await L.get("https://api.themoviedb.org/3/trending/movie/day?api_key=83315ca553e38676f05e28ed10d08b23&page=1")).data}let j=!0;const H="user-search-keyword",W=document.querySelector(".gallery__list"),V=document.querySelector(".filmcard__case"),G=document.querySelector(".filmcard-modal-backdrop"),Y=document.querySelector(".hero-form__input"),X=document.querySelector(".filmcard-modal__close-btn"),K=document.querySelector(".swiper-wrapper"),J=document.querySelector(".swiper-container"),Q=(document.querySelector(".swiper-title"),document.querySelector(".swiper"));document.addEventListener("DOMContentLoaded",Z(1)),null==Y||Y.addEventListener("input",(function(e){K.innerHTML="",Q.style.display="none";const t=e.target.value.trim();if(!t)return Z(1),void(Q.style.display="block");new(0,_.Spinner)(k).spin(W);ee(t,1),j=!1})),W.addEventListener("click",(function(e){if(e.preventDefault(),!e.target.parentElement.classList.contains("card__link"))return;te(e.target.parentElement.dataset.id),window.addEventListener("keydown",ie,{once:!0}),G.addEventListener("click",se)})),X.addEventListener("click",re);new(0,_.Spinner)(k).spin(W);function Z(e){F(e).then((t=>{$(t.results).then((e=>{W.innerHTML=e})).catch(console.log),A(t.total_pages,e)})),q().then((e=>{K.innerHTML=B(e.results);new(t(I))(J,x);K.addEventListener("click",ne)}))}function ee(e,t){sessionStorage.setItem(H,e),U(e,t).then((e=>{$(e.results).then((e=>{if(0===e.length)return document.querySelector(".pagination-bar__list").innerHTML="",void(W.innerHTML='<p class="notifycation__text">No results! Sorry =(</p>');W.innerHTML=e})).catch(console.log),A(e.total_pages,t)}))}function te(e){new(0,_.Spinner)(k).spin(W);z(e).then((e=>{V.innerHTML=D(e),document.querySelector(".spinner").remove(),re()})).catch(console.log)}function ne(e){e.preventDefault(),e.target.nodeName;te(e.target.dataset.id),window.addEventListener("keydown",ie,{once:!0}),G.addEventListener("click",se)}function ie(e){"Escape"===e.code&&re()}function se(e){e.target===e.currentTarget&&(re(),G.removeEventListener("click",se))}function re(){document.body.classList.toggle("modal-open"),G.classList.toggle("is-hidden")}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("backdrop__is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
/**
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
 */
const oe=!1,ae=!1,le="${JSCORE_VERSION}",ce=function(e,t){if(!e)throw de(t)},de=function(e){return new Error("Firebase Database ("+le+") INTERNAL ASSERT FAILED: "+e)},ue=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},he={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,d=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,h=63&l;a||(h=64,r||(u=64)),i.push(n[c],n[d],n[u],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ue(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},pe=function(e){const t=ue(e);return he.encodeByteArray(t,!0)},fe=function(e){return pe(e).replace(/\./g,"")},me=function(e){try{return he.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function ge(e){return ve(void 0,e)}function ve(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ve(e[n],t[n]));return e}
/**
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
 */
class _e{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */
/**
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
 */
function ye(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function we(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function be(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ee(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ce(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Te(){return!0===oe||!0===ae}class Se extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ie.prototype.create)}}class Ie{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(xe,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Se(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const xe=/\{\$([^}]+)}/g;
/**
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
 */function ke(e){return JSON.parse(e)}function Pe(e){return JSON.stringify(e)}
/**
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
 */const Me=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=ke(me(r[0])||""),n=ke(me(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},Ne=function(e){const t=Me(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Oe=function(e){const t=Me(e).claims;return"object"==typeof t&&!0===t.admin};
/**
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
 */
function Re(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ae(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Le(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $e(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function De(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Be(n)&&Be(r)){if(!De(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Be(e){return null!==e&&"object"==typeof e}
/**
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
 */function Fe(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ue(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ze(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class qe{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function je(e,t){const n=new He(e,t);return n.subscribe.bind(n)}class He{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=We),void 0===i.error&&(i.error=We),void 0===i.complete&&(i.complete=We);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function We(){}
/**
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
 */function Ve(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const Ge=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,ce(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Ye=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function Xe(e){return e&&e._delegate?e._delegate:e}class Ke{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */
/**
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
 */
class Je{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new _e;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Qe{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Je(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
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
 */const Ze=[];var et,tt;(tt=et||(et={}))[tt.DEBUG=0]="DEBUG",tt[tt.VERBOSE=1]="VERBOSE",tt[tt.INFO=2]="INFO",tt[tt.WARN=3]="WARN",tt[tt.ERROR=4]="ERROR",tt[tt.SILENT=5]="SILENT";const nt={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},it=et.INFO,st={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},rt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=st[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class ot{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?nt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}constructor(e){this.name=e,this._logLevel=it,this._logHandler=rt,this._userLogHandler=null,Ze.push(this)}}let at,lt;const ct=new WeakMap,dt=new WeakMap,ut=new WeakMap,ht=new WeakMap,pt=new WeakMap;let ft={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return dt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ut.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function mt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_t(this),t),vt(ct.get(this))}:function(...t){return vt(e.apply(_t(this),t))}:function(t,...n){const i=e.call(_t(this),t,...n);return ut.set(i,t.sort?t.sort():[t]),vt(i)}}function gt(e){return"function"==typeof e?mt(e):(e instanceof IDBTransaction&&function(e){if(dt.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));dt.set(e,t)}(e),t=e,(at||(at=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ft):e);var t}function vt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(vt(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ct.set(t,e)})).catch((()=>{})),pt.set(t,e),t}(e);if(ht.has(e))return ht.get(e);const t=gt(e);return t!==e&&(ht.set(e,t),pt.set(t,e)),t}const _t=e=>pt.get(e);function yt(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=vt(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(vt(o.result),e.oldVersion,e.newVersion,vt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const wt=["get","getKey","getAll","getAllKeys","count"],bt=["put","add","delete","clear"],Et=new Map;function Ct(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Et.get(t))return Et.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=bt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!wt.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Et.set(t,r),r}ft=(e=>({...e,get:(t,n,i)=>Ct(t,n)||e.get(t,n,i),has:(t,n)=>!!Ct(t,n)||e.has(t,n)}))(ft);
/**
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
 */
class Tt{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const St=new ot("@firebase/app"),It={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},xt=new Map,kt=new Map;function Pt(e,t){try{e.container.addComponent(t)}catch(n){St.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mt(e){const t=e.name;if(kt.has(t))return St.debug(`There were multiple attempts to register component ${t}.`),!1;kt.set(t,e);for(const t of xt.values())Pt(t,e);return!0}function Nt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const Ot=new Ie("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
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
 */
class Rt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ke("app",(()=>this),"PUBLIC"))}}
/**
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
 */function At(e="[DEFAULT]"){const t=xt.get(e);if(!t)throw Ot.create("no-app",{appName:e});return t}function Lt(e,t,n){var i;let s=null!==(i=It[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void St.warn(e.join(" "))}Mt(new Ke(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let $t=null;function Dt(){return $t||($t=yt("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ot.create("storage-open",{originalErrorMessage:e.message})}))),$t}async function Bt(e,t){var n;try{const n=(await Dt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Ft(e)),n.done}catch(e){throw Ot.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function Ft(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class Ut{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=zt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=zt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),jt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=fe(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function zt(){return(new Date).toISOString().substring(0,10)}class qt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Dt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ft(e))}catch(e){throw Ot.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Bt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Bt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function jt(e){return fe(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var Ht;Ht="",Mt(new Ke("platform-logger",(e=>new Tt(e)),"PRIVATE")),Mt(new Ke("heartbeat",(e=>new Ut(e)),"PRIVATE")),Lt("@firebase/app","0.7.26",Ht),Lt("@firebase/app","0.7.26","esm2017"),Lt("fire-js","");
/**
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
 */
Lt("firebase","9.8.3","app");var Wt=r("4TNnu");
/**
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
 */let Vt="";
/**
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
 */
class Gt{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ke(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
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
 */class Yt{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Re(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
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
 */const Xt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Gt(t)}}catch(e){}return new Yt},Kt=Xt("localStorage"),Jt=Xt("sessionStorage"),Qt=new ot("@firebase/database"),Zt=function(){let e=1;return function(){return e++}}(),en=function(e){const t=Ge(e),n=new qe;n.update(t);const i=n.digest();return he.encodeByteArray(i)},tn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=tn.apply(null,i):t+="object"==typeof i?Pe(i):i,t+=" "}return t};let nn=null,sn=!0;const rn=function(e,t){ce(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Qt.logLevel=et.VERBOSE,nn=Qt.log.bind(Qt),t&&Jt.set("logging_enabled",!0)):"function"==typeof e?nn=e:(nn=null,Jt.remove("logging_enabled"))},on=function(...e){if(!0===sn&&(sn=!1,null===nn&&!0===Jt.get("logging_enabled")&&rn(!0)),nn){const t=tn.apply(null,e);nn(t)}},an=function(e){return function(...t){on(e,...t)}},ln=function(...e){const t="FIREBASE INTERNAL ERROR: "+tn(...e);Qt.error(t)},cn=function(...e){const t=`FIREBASE FATAL ERROR: ${tn(...e)}`;throw Qt.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+tn(...e);Qt.warn(t)},un=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},hn=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=wn(e),i=wn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},pn=function(e,t){return e===t?0:e<t?-1:1},fn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Pe(t))},mn=function(e){if("object"!=typeof e||null===e)return Pe(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Pe(t[i]),n+=":",n+=mn(e[t[i]]);return n+="}",n},gn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function vn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const _n=function(e){ce(!un(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const yn=new RegExp("^-?(0*)\\d{1,10}$"),wn=function(e){if(yn.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},bn=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw dn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},En=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class Cn{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
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
 */class Tn{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(on("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Sn{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Sn.OWNER="owner";
/**
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
 */
const In=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
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
 */
class xn{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}}function kn(e,t,n){let i;if(ce("string"==typeof t,"typeof type must == string"),ce("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return vn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
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
 */class Pn{incrementCounter(e,t=1){Re(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ge(this.counters_)}constructor(){this.counters_={}}}
/**
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
 */const Mn={},Nn={};function On(e){const t=e.toString();return Mn[t]||(Mn[t]=new Pn),Mn[t]}
/**
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
 */
class Rn{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&bn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
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
 */class An{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Rn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Te()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ln(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&In.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){An.forceAllow_=!0}static forceDisallow(){An.forceDisallow_=!0}static isAvailable(){return!Te()&&(!!An.forceAllow_||!(An.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=pe(t),i=gn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Te())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=an(e),this.stats_=On(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),kn(t,"long_polling",e))}}class Ln{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||on("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Te()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{on("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Te())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Zt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ln.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){on("frame writing exception"),e.stack&&on(e.stack),on(e)}}}}
/**
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
 */let $n=null;"undefined"!=typeof MozWebSocket?$n=MozWebSocket:"undefined"!=typeof WebSocket&&($n=WebSocket);class Dn{static connectionURL_(e,t,n,i,s){const r={v:"5"};return!Te()&&"undefined"!=typeof location&&location.hostname&&In.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),kn(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let e;if(Te()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/5/${Vt}/${Wt.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new $n(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$n&&!Dn.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||!0===Kt.get("previous_websocket_failure")}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=ke(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=gn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=an(this.connId),this.stats_=On(t),this.connURL=Dn.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}}Dn.responsesRequiredToBeHealthy=2,Dn.healthyTimeout=3e4;
/**
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
 */
class Bn{static get ALL_TRANSPORTS(){return[An,Dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Dn&&Dn.isAvailable();let n=t&&!Dn.previouslyFailed();if(e.webSocketOnly&&(t||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Dn];else{const e=this.transports_=[];for(const t of Bn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Bn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Bn.globalTransportInitialized_=!1;class Fn{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=En((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fn("t",e),n=fn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fn("t",e),n=fn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fn("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ln("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ln("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),En((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):En((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=an("c:"+this.id+":"),this.transportManager_=new Bn(t),this.log_("Connection created"),this.start_()}}
/**
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
 */class Un{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class zn{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){ce(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
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
 */class qn extends zn{static getInstance(){return new qn}getInitialEvent(e){return ce("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||we()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
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
 */class jn{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Hn(){return new jn("")}function Wn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Vn(e){return e.pieces_.length-e.pieceNum_}function Gn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new jn(e.pieces_,t)}function Yn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Xn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Kn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new jn(t,0)}function Jn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof jn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new jn(n,0)}function Qn(e){return e.pieceNum_>=e.pieces_.length}function Zn(e,t){const n=Wn(e),i=Wn(t);if(null===n)return t;if(n===i)return Zn(Gn(e),Gn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ei(e,t){if(Vn(e)!==Vn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function ti(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Vn(e)>Vn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ni{constructor(e,t){this.errorPrefix_=t,this.parts_=Xn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ye(this.parts_[e]);ii(this)}}function ii(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+si(e))}function si(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class ri extends zn{static getInstance(){return new ri}getInitialEvent(e){return ce("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
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
 */class oi extends Un{sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Pe(s)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new _e,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;oi.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Re(e,"w")){const n=Ae(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Oe(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ne(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ln("Unrecognized action received from server: "+Pe(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+oi.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){ce(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?on("getToken() completed but was canceled"):(on("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Fn(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{dn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&dn(e),a())}}}interrupt(e){on("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){on("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Le(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>mn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new jn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){on("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){on("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Te()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Vt.replace(/\./g,"-")]=1,we()?e["framework.cordova"]=1:Ee()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qn.getInstance().currentlyOnline();return Le(this.interruptReasons_)&&e}constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=oi.nextPersistentConnectionId_++,this.log_=an("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Te())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ri.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&qn.getInstance().on("online",this.onOnline_,this)}}oi.nextPersistentConnectionId_=0,oi.nextConnectionId_=0;
/**
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
 */
class ai{static Wrap(e,t){return new ai(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
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
 */class li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ai("[MIN_NAME]",e),i=new ai("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return ai.MIN}}
/**
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
 */let ci;class di extends li{static get __EMPTY_NODE(){return ci}static set __EMPTY_NODE(e){ci=e}compare(e,t){return hn(e.name,t.name)}isDefinedOn(e){throw de("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ai.MIN}maxPost(){return new ai("[MAX_NAME]",ci)}makePost(e,t){return ce("string"==typeof e,"KeyIndex indexValue must always be a string."),new ai(e,ci)}toString(){return".key"}}const ui=new di;
/**
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
 */class hi{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class pi{copy(e,t,n,i,s){return new pi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return fi.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return fi.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:pi.RED,this.left=null!=i?i:fi.EMPTY_NODE,this.right=null!=s?s:fi.EMPTY_NODE}}pi.RED=!0,pi.BLACK=!1;class fi{insert(e,t){return new fi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,pi.BLACK,null,null))}remove(e){return new fi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pi.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new hi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new hi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new hi(this.root_,null,this.comparator_,!0,e)}constructor(e,t=fi.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
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
 */
function mi(e,t){return hn(e.name,t.name)}function gi(e,t){return hn(e,t)}
/**
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
 */let vi;fi.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new pi(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const _i=function(e){return"number"==typeof e?"number:"+_n(e):"string:"+e},yi=function(e){if(e.isLeafNode()){const t=e.val();ce("string"==typeof t||"number"==typeof t||"object"==typeof t&&Re(t,".sv"),"Priority must be a string or number.")}else ce(e===vi||e.isEmpty(),"priority of unexpected type.");ce(e===vi||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let wi,bi,Ei;class Ci{static set __childrenNodeConstructor(e){wi=e}static get __childrenNodeConstructor(){return wi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ci(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ci.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Qn(e)?this:".priority"===Wn(e)?this.priorityNode_:Ci.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ci.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Wn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(ce(".priority"!==n||1===Vn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ci.__childrenNodeConstructor.EMPTY_NODE.updateChild(Gn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_i(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?_n(this.value_):this.value_,this.lazyHash_=en(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ci.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ci.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ci.VALUE_TYPE_ORDER.indexOf(t),s=Ci.VALUE_TYPE_ORDER.indexOf(n);return ce(i>=0,"Unknown leaf type: "+t),ce(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Ci.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),yi(this.priorityNode_)}}Ci.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ti=new class extends li{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?hn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ai.MIN}maxPost(){return new ai("[MAX_NAME]",new Ci("[PRIORITY-POST]",Ei))}makePost(e,t){const n=bi(e);return new ai(t,new Ci("[PRIORITY-POST]",n))}toString(){return".priority"}},Si=Math.log(2);
/**
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
 */class Ii{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Si,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const xi=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new pi(a,o.node,pi.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),d=s(l+1,i);return o=e[l],a=n?n(o):o,new pi(a,o.node,pi.BLACK,c,d)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),d=e[r],u=n?n(d):d;l(new pi(u,d.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,pi.BLACK):(a(i,pi.BLACK),a(i,pi.RED))}return r}(new Ii(e.length));return new fi(i||t,r)};
/**
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
 */let ki;const Pi={};class Mi{static get Default(){return ce(Pi&&Ti,"ChildrenNode.ts has not been loaded"),ki=ki||new Mi({".priority":Pi},{".priority":Ti}),ki}get(e){const t=Ae(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof fi?t:null}hasIndex(e){return Re(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(ai.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?xi(n,e.getCompare()):Pi;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new Mi(c,l)}addToIndexes(e,t){const n=$e(this.indexes_,((n,i)=>{const s=Ae(this.indexSet_,i);if(ce(s,"Missing index implementation for "+i),n===Pi){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(ai.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),xi(n,s.getCompare())}return Pi}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new ai(e.name,i))),s.insert(e,e.node)}}));return new Mi(n,this.indexSet_)}removeFromIndexes(e,t){const n=$e(this.indexes_,(n=>{if(n===Pi)return n;{const i=t.get(e.name);return i?n.remove(new ai(e.name,i)):n}}));return new Mi(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
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
 */let Ni;class Oi{static get EMPTY_NODE(){return Ni||(Ni=new Oi(new fi(gi),null,Mi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ni}updatePriority(e){return this.children_.isEmpty()?this:new Oi(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ni:t}}getChild(e){const t=Wn(e);return null===t?this:this.getImmediateChild(t).getChild(Gn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ai(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Ni:this.priorityNode_;return new Oi(i,r,s)}}updateChild(e,t){const n=Wn(e);if(null===n)return t;{ce(".priority"!==Wn(e)||1===Vn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Gn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Ti,((r,o)=>{t[r]=o.val(e),n++,s&&Oi.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+_i(this.getPriority().val())+":"),this.forEachChild(Ti,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":en(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ai(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ai(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ai(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ai.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ai.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ri?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Oi(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ti),n=t.getIterator(Ti);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&yi(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Oi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ri=new class extends Oi{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Oi.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new fi(gi),Oi.EMPTY_NODE,Mi.Default)}};Object.defineProperties(ai,{MIN:{value:new ai("[MIN_NAME]",Oi.EMPTY_NODE)},MAX:{value:new ai("[MAX_NAME]",Ri)}}),di.__EMPTY_NODE=Oi.EMPTY_NODE,Ci.__childrenNodeConstructor=Oi,vi=Ri,function(e){Ei=e}(Ri);function Ai(e,t=null){if(null===e)return Oi.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),ce(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ci(e,Ai(t))}if(e instanceof Array){let n=Oi.EMPTY_NODE;return vn(e,((t,i)=>{if(Re(e,t)&&"."!==t.substring(0,1)){const e=Ai(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ai(t))}{const n=[];let i=!1;if(vn(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Ai(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new ai(e,s)))}})),0===n.length)return Oi.EMPTY_NODE;const s=xi(n,mi,(e=>e.name),gi);if(i){const e=xi(n,Ti.getCompare());return new Oi(s,Ai(t),new Mi({".priority":e},{".priority":Ti}))}return new Oi(s,Ai(t),Mi.Default)}}!function(e){bi=e}(Ai);
/**
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
 */
class Li extends li{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?hn(e.name,t.name):s}makePost(e,t){const n=Ai(e),i=Oi.EMPTY_NODE.updateChild(this.indexPath_,n);return new ai(t,i)}maxPost(){const e=Oi.EMPTY_NODE.updateChild(this.indexPath_,Ri);return new ai("[MAX_NAME]",e)}toString(){return Xn(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,ce(!Qn(e)&&".priority"!==Wn(e),"Can't create PathIndex with empty path or .priority key")}}
/**
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
 */const $i=new class extends li{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?hn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ai.MIN}maxPost(){return ai.MAX}makePost(e,t){const n=Ai(e);return new ai(t,n)}toString(){return".value"}},Di="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
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
 */!function(){let e=0;const t=[]}();
/**
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
 */
function Bi(e){return{type:"value",snapshotNode:e}}function Fi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ui(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function zi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class qi{updateChild(e,t,n,i,s,r){ce(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Ui(t,o)):ce(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(Fi(t,n)):r.trackChildChange(zi(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ti,((e,i)=>{t.hasChild(e)||n.trackChildChange(Ui(e,i))})),t.isLeafNode()||t.forEachChild(Ti,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(zi(t,i,s))}else n.trackChildChange(Fi(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Oi.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
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
 */class ji{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new ai(t,n))||(n=Oi.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Oi.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Oi.EMPTY_NODE);const s=this;return t.forEachChild(Ti,((e,t)=>{s.matches(new ai(e,t))||(i=i.updateImmediateChild(e,Oi.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new qi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ji.getStartPost_(e),this.endPost_=ji.getEndPost_(e)}}
/**
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
 */class Hi{updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new ai(t,n))||(n=Oi.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Oi.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Oi.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(Oi.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;for(;r.hasNext();){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);a&&o<this.limit_&&s(t,n)<=0?o++:i=i.updateImmediateChild(t.name,Oi.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;ce(o.numChildren()===this.limit_,"");const a=new ai(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=d&&(d.name===t||o.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const u=null==d?1:r(d,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(zi(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Ui(t,e));const n=o.updateImmediateChild(t,Oi.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=s&&s.trackChildChange(Fi(d.name,d.node)),n.updateImmediateChild(d.name,d.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(Ui(l.name,l.node)),s.trackChildChange(Fi(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Oi.EMPTY_NODE)):e}constructor(e){this.rangedFilter_=new ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}}
/**
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
 */class Wi{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ti}copy(){const e=new Wi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ti}}function Vi(e){const t={};if(e.isDefault())return t;let n;return e.index_===Ti?n="$priority":e.index_===$i?n="$value":e.index_===ui?n="$key":(ce(e.index_ instanceof Li,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Pe(n),e.startSet_&&(t.startAt=Pe(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Pe(e.indexStartName_))),e.endSet_&&(t.endAt=Pe(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Pe(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Gi(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ti&&(t.i=e.index_.toString()),t}
/**
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
 */class Yi extends Un{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Yi.getListenId_(e,n),o={};this.listens_[r]=o;const a=Vi(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),Ae(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Yi.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Vi(e._queryParams),n=e._path.toString(),i=new _e;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fe(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ke(o.responseText)}catch(e){dn("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&dn("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=an("p:rest:"),this.listens_={}}}
/**
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
 */class Xi{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Oi.EMPTY_NODE}}
/**
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
 */function Ki(){return{value:null,children:new Map}}function Ji(e,t,n){if(Qn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Wn(t);e.children.has(i)||e.children.set(i,Ki());Ji(e.children.get(i),t=Gn(t),n)}}function Qi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */(e,((e,i)=>{Qi(i,new jn(t.toString()+"/"+e),n)}))}class Zi{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&vn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
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
 */class es{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;vn(e,((e,i)=>{i>0&&Re(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),En(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Zi(e);const n=1e4+2e4*Math.random();En(this.reportStats_.bind(this),Math.floor(n))}}
/**
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
 */var ts,ns;function is(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(ns=ts||(ts={}))[ns.OVERWRITE=0]="OVERWRITE",ns[ns.MERGE=1]="MERGE",ns[ns.ACK_USER_WRITE=2]="ACK_USER_WRITE",ns[ns.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class ss{operationForChild(e){if(Qn(this.path)){if(null!=this.affectedTree.value)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new jn(e));return new ss(Hn(),t,this.revert)}}return ce(Wn(this.path)===e,"operationForChild called for unrelated child."),new ss(Gn(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ts.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
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
 */
/**
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
 */
class rs{operationForChild(e){return Qn(this.path)?new rs(this.source,Hn(),this.snap.getImmediateChild(e)):new rs(this.source,Gn(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ts.OVERWRITE}}
/**
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
 */class os{operationForChild(e){if(Qn(this.path)){const t=this.children.subtree(new jn(e));return t.isEmpty()?null:t.value?new rs(this.source,Hn(),t.value):new os(this.source,Hn(),t)}return ce(Wn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,Gn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ts.MERGE}}
/**
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
 */class as{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Qn(e))return this.isFullyInitialized()&&!this.filtered_;const t=Wn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
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
 */class ls{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cs(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw de("Should only compare child_ events.");const i=new ai(t.childName,t.snapshotNode),s=new ai(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function ds(e,t){return{eventCache:e,serverCache:t}}function us(e,t,n,i){return ds(new as(t,n,i),e.serverCache)}function hs(e,t,n,i){return ds(e.eventCache,new as(t,n,i))}function ps(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fs(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let ms;class gs{static fromObject(e){let t=new gs(null);return vn(e,((e,n)=>{t=t.set(new jn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Hn(),value:this.value};if(Qn(e))return null;{const n=Wn(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Gn(e),t);if(null!=s){return{path:Jn(new jn(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Qn(e))return this;{const t=Wn(e),n=this.children.get(t);return null!==n?n.subtree(Gn(e)):new gs(null)}}set(e,t){if(Qn(e))return new gs(t,this.children);{const n=Wn(e),i=(this.children.get(n)||new gs(null)).set(Gn(e),t),s=this.children.insert(n,i);return new gs(this.value,s)}}remove(e){if(Qn(e))return this.children.isEmpty()?new gs(null):new gs(null,this.children);{const t=Wn(e),n=this.children.get(t);if(n){const i=n.remove(Gn(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new gs(null):new gs(this.value,s)}return this}}get(e){if(Qn(e))return this.value;{const t=Wn(e),n=this.children.get(t);return n?n.get(Gn(e)):null}}setTree(e,t){if(Qn(e))return t;{const n=Wn(e),i=(this.children.get(n)||new gs(null)).setTree(Gn(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new gs(this.value,s)}}fold(e){return this.fold_(Hn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Jn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Hn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Qn(e))return null;{const i=Wn(e),s=this.children.get(i);return s?s.findOnPath_(Gn(e),Jn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Hn(),t)}foreachOnPath_(e,t,n){if(Qn(e))return this;{this.value&&n(t,this.value);const i=Wn(e),s=this.children.get(i);return s?s.foreachOnPath_(Gn(e),Jn(t,i),n):new gs(null)}}foreach(e){this.foreach_(Hn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Jn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(ms||(ms=new fi(pn)),ms))()){this.value=e,this.children=t}}
/**
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
 */class vs{static empty(){return new vs(new gs(null))}constructor(e){this.writeTree_=e}}function _s(e,t,n){if(Qn(t))return new vs(new gs(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Zn(s,t);return r=r.updateChild(o,n),new vs(e.writeTree_.set(s,r))}{const i=new gs(n),s=e.writeTree_.setTree(t,i);return new vs(s)}}}function ys(e,t,n){let i=e;return vn(n,((e,n)=>{i=_s(i,Jn(t,e),n)})),i}function ws(e,t){if(Qn(t))return vs.empty();{const n=e.writeTree_.setTree(t,new gs(null));return new vs(n)}}function bs(e,t){return null!=Es(e,t)}function Es(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Zn(n.path,t)):null}function Cs(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ti,((e,n)=>{t.push(new ai(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ai(e,n.value))})),t}function Ts(e,t){if(Qn(t))return e;{const n=Es(e,t);return new vs(null!=n?new gs(n):e.writeTree_.subtree(t))}}function Ss(e){return e.writeTree_.isEmpty()}function Is(e,t){return xs(Hn(),e.writeTree_,t)}function xs(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(ce(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=xs(Jn(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Jn(e,".priority"),i)),n}}
/**
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
 */function ks(e,t){return zs(t,e)}function Ps(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));ce(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ms(t,i.path)?s=!1:ti(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=Os(e.allWrites,Ns,Hn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=ws(e.visibleWrites,i.path);else{vn(i.children,(t=>{e.visibleWrites=ws(e.visibleWrites,Jn(i.path,t))}))}return!0}return!1}function Ms(e,t){if(e.snap)return ti(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ti(Jn(e.path,n),t))return!0;return!1}function Ns(e){return e.visible}function Os(e,t,n){let i=vs.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)ti(n,e)?(t=Zn(n,e),i=_s(i,t,r.snap)):ti(e,n)&&(t=Zn(e,n),i=_s(i,Hn(),r.snap.getChild(t)));else{if(!r.children)throw de("WriteRecord should have .snap or .children");if(ti(n,e))t=Zn(n,e),i=ys(i,t,r.children);else if(ti(e,n))if(t=Zn(e,n),Qn(t))i=ys(i,Hn(),r.children);else{const e=Ae(r.children,Wn(t));if(e){const n=e.getChild(Gn(t));i=_s(i,Hn(),n)}}}}}return i}function Rs(e,t,n,i,s){if(i||s){const r=Ts(e.visibleWrites,t);if(!s&&Ss(r))return n;if(s||null!=n||bs(r,Hn())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(ti(e.path,t)||ti(t,e.path))};return Is(Os(e.allWrites,r,t),n||Oi.EMPTY_NODE)}return null}{const i=Es(e.visibleWrites,t);if(null!=i)return i;{const i=Ts(e.visibleWrites,t);if(Ss(i))return n;if(null!=n||bs(i,Hn())){return Is(i,n||Oi.EMPTY_NODE)}return null}}}function As(e,t,n,i){return Rs(e.writeTree,e.treePath,t,n,i)}function Ls(e,t){return function(e,t,n){let i=Oi.EMPTY_NODE;const s=Es(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ti,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Ts(e.visibleWrites,t);return n.forEachChild(Ti,((e,t)=>{const n=Is(Ts(s,new jn(e)),t);i=i.updateImmediateChild(e,n)})),Cs(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Cs(Ts(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function $s(e,t,n,i){return function(e,t,n,i,s){ce(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Jn(t,n);if(bs(e.visibleWrites,r))return null;{const t=Ts(e.visibleWrites,r);return Ss(t)?s.getChild(n):Is(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Ds(e,t){return function(e,t){return Es(e.visibleWrites,t)}(e.writeTree,Jn(e.treePath,t))}function Bs(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=Ts(e.visibleWrites,t),c=Es(l,Hn());if(null!=c)a=c;else{if(null==n)return[];a=Is(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function Fs(e,t,n){return function(e,t,n,i){const s=Jn(t,n),r=Es(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Is(Ts(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Us(e,t){return zs(Jn(e.treePath,t),e.writeTree)}function zs(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class qs{trackChildChange(e){const t=e.type,n=e.childName;ce("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),ce(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,zi(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Ui(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Fi(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw de("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,zi(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
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
 */const js=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Hs{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new as(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fs(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fs(this.viewCache_),s=Bs(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
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
 */function Ws(e,t,n,i,s){const r=new qs;let o,a;if(n.type===ts.OVERWRITE){const l=n;l.source.fromUser?o=Ys(e,t,l.path,l.snap,i,s,r):(ce(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Qn(l.path),o=Gs(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===ts.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Jn(n,i);Xs(t,Wn(c))&&(a=Ys(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Jn(n,i);Xs(t,Wn(c))||(a=Ys(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(ce(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Js(e,t,l.path,l.children,i,s,a,r))}else if(n.type===ts.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=Ds(i,n))return t;{const a=new Hs(i,t,s),l=t.eventCache.getNode();let c;if(Qn(n)||".priority"===Wn(n)){let n;if(t.serverCache.isFullyInitialized())n=As(i,fs(t));else{const e=t.serverCache.getNode();ce(e instanceof Oi,"serverChildren would be complete if leaf node"),n=Ls(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=Wn(n);let d=Fs(i,s,t.serverCache);null==d&&t.serverCache.isCompleteForChild(s)&&(d=l.getImmediateChild(s)),c=null!=d?e.filter.updateChild(l,s,d,Gn(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Oi.EMPTY_NODE,Gn(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=As(i,fs(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Ds(i,Hn()),us(t,c,o,e.filter.filtersNodes())}}
/**
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
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=Ds(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Qn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Gs(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Qn(n)){let i=new gs(null);return l.getNode().forEachChild(ui,((e,t)=>{i=i.set(new jn(e),t)})),Js(e,t,n,i,s,r,a,o)}return t}{let c=new gs(null);return i.foreach(((e,t)=>{const i=Jn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Js(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==ts.LISTEN_COMPLETE)throw de("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=hs(t,r.getNode(),r.isFullyInitialized()||Qn(n),r.isFiltered());return Vs(e,o,n,i,js,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ps(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Bi(ps(t)))}}(t,o,l),{viewCache:o,changes:l}}function Vs(e,t,n,i,s,r){const o=t.eventCache;if(null!=Ds(i,n))return t;{let a,l;if(Qn(n))if(ce(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fs(t),s=Ls(i,n instanceof Oi?n:Oi.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=As(i,fs(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Wn(n);if(".priority"===c){ce(1===Vn(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=$s(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const d=Gn(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=$s(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(d,e):o.getNode().getImmediateChild(c)}else u=Fs(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,d,s,r):o.getNode()}}return us(t,a,o.isFullyInitialized()||Qn(n),e.filter.filtersNodes())}}function Gs(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const d=o?e.filter:e.filter.getIndexedFilter();if(Qn(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),e,null)}else{const e=Wn(n);if(!l.isCompleteForPath(n)&&Vn(n)>1)return t;const s=Gn(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?d.updatePriority(l.getNode(),r):d.updateChild(l.getNode(),e,r,s,js,null)}const u=hs(t,c,l.isFullyInitialized()||Qn(n),d.filtersNodes());return Vs(e,u,n,s,new Hs(s,u,r),a)}function Ys(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const d=new Hs(s,t,r);if(Qn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=us(t,c,!0,e.filter.filtersNodes());else{const s=Wn(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=us(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Gn(n),c=a.getNode().getImmediateChild(s);let u;if(Qn(r))u=i;else{const e=d.getCompleteChild(s);u=null!=e?".priority"===Yn(r)&&e.getChild(Kn(r)).isEmpty()?e:e.updateChild(r,i):Oi.EMPTY_NODE}if(c.equals(u))l=t;else{l=us(t,e.filter.updateChild(a.getNode(),s,u,r,d,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Xs(e,t){return e.eventCache.isCompleteForChild(t)}function Ks(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Js(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Qn(n)?i:new gs(null).setTree(n,i);const d=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(d.hasChild(n)){const l=Ks(0,t.serverCache.getNode().getImmediateChild(n),i);c=Gs(e,c,new jn(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!d.hasChild(n)&&!l){const l=Ks(0,t.serverCache.getNode().getImmediateChild(n),i);c=Gs(e,c,new jn(n),l,s,r,o,a)}})),c}class Qs{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new qi(n.getIndex()),s=(r=n).loadsAllData()?new qi(r.getIndex()):r.hasLimit()?new Hi(r):new ji(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Oi.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Oi.EMPTY_NODE,a.getNode(),null),d=new as(l,o.isFullyInitialized(),i.filtersNodes()),u=new as(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ds(u,d),this.eventGenerator_=new ls(this.query_)}}function Zs(e,t){const n=fs(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Qn(t)&&!n.getImmediateChild(Wn(t)).isEmpty())?n.getChild(t):null}function er(e,t,n,i){t.type===ts.MERGE&&null!==t.source.queryId&&(ce(fs(e.viewCache_),"We should always have a full cache before handling merges"),ce(ps(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Ws(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,ce(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),ce(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),ce(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,tr(e,r.changes,r.viewCache.eventCache.getNode(),null)}function tr(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),cs(e,s,"child_removed",t,i,n),cs(e,s,"child_added",t,i,n),cs(e,s,"child_moved",r,i,n),cs(e,s,"child_changed",t,i,n),cs(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
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
 */let nr,ir;class sr{constructor(){this.views=new Map}}function rr(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return ce(null!=r,"SyncTree gave us an op for an invalid query."),er(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(er(r,t,n,i));return s}}function or(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=As(n,s?i:null),r=!1;e?r=!0:i instanceof Oi?(e=Ls(n,i),r=!1):(e=Oi.EMPTY_NODE,r=!1);const o=ds(new as(e,r,!1),new as(i,s,!1));return new Qs(t,o)}return o}function ar(e,t){let n=null;for(const i of e.views.values())n=n||Zs(i,t);return n}class lr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gs(null),this.pendingWriteTree_={visibleWrites:vs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cr(e,t,n,i,s){return function(e,t,n,i,s){ce(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=_s(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?fr(e,new rs({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function dr(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Ps(e.pendingWriteTree_,t)){let t=new gs(null);return null!=i.snap?t=t.set(Hn(),!0):vn(i.children,(e=>{t=t.set(new jn(e),!0)})),fr(e,new ss(i.path,t,n))}return[]}function ur(e,t,n){return fr(e,new rs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function hr(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=ar(n,Zn(e,t));if(i)return i}));return Rs(i,t,s,n,!0)}function pr(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Zn(e,n);i=i||ar(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||ar(s,Hn()):(s=new sr,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new as(i,!0,!1):null;return function(e){return ps(e.viewCache_)}(or(s,t,ks(e.pendingWriteTree_,t._path),r?o.getNode():Oi.EMPTY_NODE,r))}function fr(e,t){return mr(t,e.syncPointTree_,null,ks(e.pendingWriteTree_,Hn()))}function mr(e,t,n,i){if(Qn(e.path))return gr(e,t,n,i);{const s=t.get(Hn());null==n&&null!=s&&(n=ar(s,Hn()));let r=[];const o=Wn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Us(i,o);r=r.concat(mr(a,l,e,t))}return s&&(r=r.concat(rr(s,e,i,n))),r}}function gr(e,t,n,i){const s=t.get(Hn());null==n&&null!=s&&(n=ar(s,Hn()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Us(i,t),l=e.operationForChild(t);l&&(r=r.concat(gr(l,s,o,a)))})),s&&(r=r.concat(rr(s,e,i,n))),r}function vr(e,t){return e.tagToQueryMap.get(t)}function _r(e){const t=e.indexOf("$");return ce(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new jn(e.substr(0,t))}}function yr(e,t,n){const i=e.syncPointTree_.get(t);ce(i,"Missing sync point for query tag that we're tracking");return rr(i,n,ks(e.pendingWriteTree_,t),null)}
/**
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
 */
class wr{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wr(t)}node(){return this.node_}constructor(e){this.node_=e}}class br{getImmediateChild(e){const t=Jn(this.path_,e);return new br(this.syncTree_,t)}node(){return hr(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Er=function(e,t,n){return e&&"object"==typeof e?(ce(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Cr(e[".sv"],t,n):"object"==typeof e[".sv"]?Tr(e[".sv"],t):void ce(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Cr=function(e,t,n){if("timestamp"===e)return n.timestamp;ce(!1,"Unexpected server value: "+e)},Tr=function(e,t,n){e.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&ce(!1,"Unexpected increment value: "+i);const s=t.node();if(ce(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Sr=function(e,t,n,i){return xr(t,new br(n,e),i)},Ir=function(e,t,n){return xr(e,new wr(t),n)};function xr(e,t,n){const i=e.getPriority().val(),s=Er(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Er(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ci(r,Ai(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ci(s))),i.forEachChild(Ti,((e,i)=>{const s=xr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
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
 */class kr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Pr(e,t){let n=t instanceof jn?t:new jn(t),i=e,s=Wn(n);for(;null!==s;){const e=Ae(i.node.children,s)||{children:{},childCount:0};i=new kr(s,i,e),n=Gn(n),s=Wn(n)}return i}function Mr(e){return e.node.value}function Nr(e,t){e.node.value=t,$r(e)}function Or(e){return e.node.childCount>0}function Rr(e,t){vn(e.node.children,((n,i)=>{t(new kr(n,e,i))}))}function Ar(e,t,n,i){n&&!i&&t(e),Rr(e,(e=>{Ar(e,t,!0,i)})),n&&i&&t(e)}function Lr(e){return new jn(null===e.parent?e.name:Lr(e.parent)+"/"+e.name)}function $r(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Mr(e)&&!Or(e)}(n),s=Re(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,$r(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,$r(e))}
/**
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
 */(e.parent,e.name,e)}const Dr=/[\[\].#$\/\u0000-\u001F\u007F]/,Br=/[\[\].#$\u0000-\u001F\u007F]/,Fr=function(e){return"string"==typeof e&&0!==e.length&&!Dr.test(e)},Ur=function(e){return"string"==typeof e&&0!==e.length&&!Br.test(e)},zr=function(e,t,n,i){i&&void 0===t||qr(Ve(e,"value"),t,n)},qr=function(e,t,n){const i=n instanceof jn?new ni(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+si(i));if("function"==typeof t)throw new Error(e+"contains a function "+si(i)+" with contents = "+t.toString());if(un(t))throw new Error(e+"contains "+t.toString()+" "+si(i));if("string"==typeof t&&t.length>10485760/3&&Ye(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+si(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(vn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Fr(t)))throw new Error(e+" contains an invalid key ("+t+") "+si(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ye(a),ii(o),qr(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ye(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+si(i)+" in addition to actual children.")}},jr=function(e,t,n,i){if(!(i&&void 0===n||Ur(n)))throw new Error(Ve(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Hr=function(e,t){if(".info"===Wn(t))throw new Error(e+" failed = Can't modify data under /.info/")},Wr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Fr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ur(e)}(n))throw new Error(Ve(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Vr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ei(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Yr(e,t,n){Gr(e,n),Kr(e,(e=>ei(e,t)))}function Xr(e,t,n){Gr(e,n),Kr(e,(e=>ti(e,t)||ti(t,e)))}function Kr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(Jr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Jr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();nn&&on("event: "+n.toString()),bn(i)}}}
/**
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
 */class Qr{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ki(),this.transactionQueueTree_=new kr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Zr(e,t,n){if(e.stats_=On(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Yi(e.repoInfo_,((t,n,i,s)=>{no(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>io(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new oi(e.repoInfo_,t,((t,n,i,s)=>{no(e,t,n,i,s)}),(t=>{io(e,t)}),(t=>{!function(e,t){vn(t,((t,n)=>{so(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Nn[n]||(Nn[n]=t()),Nn[n]}(e.repoInfo_,(()=>new es(e.stats_,e.server_))),e.infoData_=new Xi,e.infoSyncTree_=new lr({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=ur(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new lr({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Xr(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function eo(e){const t=e.infoData_.getNode(new jn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function to(e){return(t=(t={timestamp:eo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function no(e,t,n,i,s){e.dataUpdateCount++;const r=new jn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=$e(n,(e=>Ai(e)));o=function(e,t,n,i){const s=vr(e,i);if(s){const i=_r(s),r=i.path,o=i.queryId,a=Zn(r,t),l=gs.fromObject(n);return yr(e,r,new os(is(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Ai(n);o=function(e,t,n,i){const s=vr(e,i);if(null!=s){const i=_r(s),r=i.path,o=i.queryId,a=Zn(r,t);return yr(e,r,new rs(is(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=$e(n,(e=>Ai(e)));o=function(e,t,n){const i=gs.fromObject(n);return fr(e,new os({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Ai(n);o=ur(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=po(e,r)),Xr(e.eventQueue_,a,o)}function io(e,t){so(e,"connected",t),!1===t&&function(e){lo(e,"onDisconnectEvents");const t=to(e),n=Ki();Qi(e.onDisconnect_,Hn(),((i,s)=>{const r=Sr(i,s,e.serverSyncTree_,t);Ji(n,i,r)}));let i=[];Qi(n,Hn(),((t,n)=>{i=i.concat(ur(e.serverSyncTree_,t,n));const s=_o(e,t);po(e,s)})),e.onDisconnect_=Ki(),Xr(e.eventQueue_,Hn(),i)}(e)}function so(e,t,n){const i=new jn("/.info/"+t),s=Ai(n);e.infoData_.updateSnapshot(i,s);const r=ur(e.infoSyncTree_,i,s);Xr(e.eventQueue_,i,r)}function ro(e){return e.nextWriteId_++}function oo(e,t,n,i,s){lo(e,"set",{path:t.toString(),value:n,priority:i});const r=to(e),o=Ai(n,i),a=hr(e.serverSyncTree_,t),l=Ir(o,a,r),c=ro(e),d=cr(e.serverSyncTree_,t,l,c,!0);Gr(e.eventQueue_,d),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||dn("set at "+t+" failed: "+n);const o=dr(e.serverSyncTree_,c,!r);Xr(e.eventQueue_,t,o),co(e,s,n,i)}));const u=_o(e,t);po(e,u),Xr(e.eventQueue_,u,[])}function ao(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function lo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),on(n,...t)}function co(e,t,n,i){t&&bn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function uo(e,t,n){return hr(e.serverSyncTree_,t,n)||Oi.EMPTY_NODE}function ho(e,t=e.transactionQueueTree_){if(t||vo(e,t),Mr(t)){const n=mo(e,t);ce(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=uo(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];ce(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Zn(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{lo(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(dr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();vo(e,Pr(e.transactionQueueTree_,t)),ho(e,e.transactionQueueTree_),Xr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)bn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{dn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}po(e,t)}}),o)}(e,Lr(t),n)}else Or(t)&&Rr(t,(t=>{ho(e,t)}))}function po(e,t){const n=fo(e,t),i=Lr(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Zn(n,l.path);let d,u=!1;if(ce(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,d=l.abortReason,s=s.concat(dr(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,d="maxretry",s=s.concat(dr(e.serverSyncTree_,l.currentWriteId,!0));else{const n=uo(e,l.path,r);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){qr("transaction failed: Data returned ",i,l.path);let t=Ai(i);"object"==typeof i&&null!=i&&Re(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=to(e),c=Ir(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=ro(e),r.splice(r.indexOf(o),1),s=s.concat(cr(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(dr(e.serverSyncTree_,o,!0))}else u=!0,d="nodata",s=s.concat(dr(e.serverSyncTree_,l.currentWriteId,!0))}Xr(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===d?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(d),!1,null)))))}var o;vo(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)bn(i[e]);ho(e,e.transactionQueueTree_)}(e,mo(e,n),i),i}function fo(e,t){let n,i=e.transactionQueueTree_;for(n=Wn(t);null!==n&&void 0===Mr(i);)i=Pr(i,n),n=Wn(t=Gn(t));return i}function mo(e,t){const n=[];return go(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function go(e,t,n){const i=Mr(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Rr(t,(t=>{go(e,t,n)}))}function vo(e,t){const n=Mr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Nr(t,n.length>0?n:void 0)}Rr(t,(t=>{vo(e,t)}))}function _o(e,t){const n=Lr(fo(e,t)),i=Pr(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{yo(e,t)})),yo(e,i),Ar(i,(t=>{yo(e,t)})),n}function yo(e,t){const n=Mr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(ce(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(ce(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(dr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Nr(t,void 0):n.length=r+1,Xr(e.eventQueue_,Lr(t),s);for(let e=0;e<i.length;e++)bn(i[e])}}
/**
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
 */const wo=function(e,t){const n=bo(e),i=n.namespace;"firebase.com"===n.domain&&cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new xn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new jn(n.pathString)}},bo=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let d=e.indexOf("/");-1===d&&(d=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(d,u)),d<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(d,u)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in h&&(r=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
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
 */
class Eo{get key(){return Qn(this._path)?null:Yn(this._path)}get ref(){return new Co(this._repo,this._path)}get _queryIdentifier(){const e=Gi(this._queryParams),t=mn(e);return"{}"===t?"default":t}get _queryObject(){return Gi(this._queryParams)}isEqual(e){if(!((e=Xe(e))instanceof Eo))return!1;const t=this._repo===e._repo,n=ei(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Co extends Eo{get parent(){const e=Kn(this._path);return null===e?null:new Co(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Wi,!1)}}class To{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new jn(e),n=Io(this.ref,e);return new To(this._node.getChild(t),n,Ti)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new To(n,Io(this.ref,t),Ti))))}hasChild(e){const t=new jn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function So(e,t){return(e=Xe(e))._checkNotDeleted("ref"),void 0!==t?Io(e._root,t):e._root}function Io(e,t){var n,i,s,r;return null===Wn((e=Xe(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),jr(n,i,s,r)):jr("child","path",t,!1),new Co(e._repo,Jn(e._path,t))}function xo(e,t){e=Xe(e),Hr("set",e._path),zr("set",t,e._path,!1);const n=new _e;return oo(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function ko(e){return function(e,t){const n=pr(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=Ai(n).withIndex(t._queryParams.getIndex()),s=ur(e.serverSyncTree_,t._path,i);return Yr(e.eventQueue_,t._path,s),Promise.resolve(i)}),(n=>(lo(e,"get for query "+Pe(t)+" failed: "+n),Promise.reject(new Error(n)))))}((e=Xe(e))._repo,e).then((t=>new To(t,new Co(e._repo,e._path),e._queryParams.getIndex())))}!function(e){ce(!nr,"__referenceConstructor has already been defined"),nr=e}(Co),function(e){ce(!ir,"__referenceConstructor has already been defined"),ir=e}(Co);
/**
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
 */
const Po={};let Mo=!1;function No(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),on("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=wo(r,s),c=l.repoInfo;void 0!==Wt&&Wt.env&&(a=Wt.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=wo(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const d=s&&o?new Sn(Sn.OWNER):new Tn(e.name,e.options,t);Wr("Invalid Firebase Database URL",l),Qn(l.path)||cn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=Po[t.name];s||(s={},Po[t.name]=s);let r=s[e.toURLString()];r&&cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Qr(e,Mo,n,i),s[e.toURLString()]=r,r}(c,e,d,new Cn(e.name,n));return new Oo(u,e)}class Oo{get _repo(){return this._instanceStarted||(Zr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Co(this._repo,Hn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Po[t];n&&n[e.key]===e||cn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ao(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&cn("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}oi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},oi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){Vt="9.8.3",Mt(new Ke("database",((e,{instanceIdentifier:t})=>No(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Lt("@firebase/database","0.13.1",e),Lt("@firebase/database","0.13.1","esm2017")}
/**
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
 */();function Ro(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function Ao(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lo=Ao,$o=new Ie("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Do=new ot("@firebase/auth");function Bo(e,...t){Do.logLevel<=et.ERROR&&Do.error(`Auth (9.8.3): ${e}`,...t)}
/**
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
 */function Fo(e,...t){throw qo(e,...t)}function Uo(e,...t){return qo(e,...t)}function zo(e,t,n){const i=Object.assign(Object.assign({},Lo()),{[t]:n});return new Ie("auth","Firebase",i).create(t,{appName:e.name})}function qo(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return $o.create(e,...t)}function jo(e,t,...n){if(!e)throw qo(t,...n)}function Ho(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Bo(t),new Error(t)}function Wo(e,t){e||Ho(t)}
/**
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
 */const Vo=new Map;function Go(e){Wo(e instanceof Function,"Expected a class definition");let t=Vo.get(e);return t?(Wo(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vo.set(e,t),t)}
/**
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
 */
/**
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
 */
function Yo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Xo(){return"http:"===Ko()||"https:"===Ko()}function Ko(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function Jo(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Xo()||be()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class Qo{get(){return Jo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Wo(t>e,"Short delay should be less than long delay!"),this.isMobile=we()||Ee()}}
/**
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
 */function Zo(e,t){Wo(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class ea{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ho("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ho("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ho("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const ta={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},na=new Qo(3e4,6e4);
/**
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
 */function ia(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function sa(e,t,n,i,s={}){return ra(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=Fe(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ea.fetch()(aa(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function ra(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ta),t);try{const t=new la(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw ca(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ca(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw ca(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw ca(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw zo(e,a,o);Fo(e,a)}}catch(t){if(t instanceof Se)throw t;Fo(e,"network-request-failed")}}async function oa(e,t,n,i,s={}){const r=await sa(e,t,n,i,s);return"mfaPendingCredential"in r&&Fo(e,"multi-factor-auth-required",{_serverResponse:r}),r}function aa(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Zo(e.config,s):`${e.config.apiScheme}://${s}`}class la{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Uo(this.auth,"network-request-failed"))),na.get())}))}}function ca(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Uo(e,t,i);return s.customData._tokenResponse=n,s}
/**
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
 */
/**
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
 */
function da(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function ua(e){return 1e3*Number(e)}function ha(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const e=me(n);return e?JSON.parse(e):(Bo("Failed to decode base64 JWT payload"),null)}catch(e){return Bo("Caught error parsing JWT payload as JSON",e),null}}
/**
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
 */
async function pa(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Se&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class fa{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
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
 */class ma{_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
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
 */async function ga(e){var t;const n=e.auth,i=await e.getIdToken(),s=await pa(e,async function(e,t){return sa(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));jo(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ro(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const d=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),h=!!d&&u,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ma(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
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
 */
class va{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){jo(e.idToken,"internal-error"),jo(void 0!==e.idToken,"internal-error"),jo(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ha(e);return jo(t,"internal-error"),jo(void 0!==t.exp,"internal-error"),jo(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return jo(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
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
 */
async function(e,t){const n=await ra(e,{},(async()=>{const n=Fe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=aa(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ea.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new va;return n&&(jo("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(jo("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(jo("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new va,this.toJSON())}_performRefresh(){return Ho("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
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
 */function _a(e,t){jo("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ya{async getIdToken(e){const t=await pa(this,this.stsTokenManager.getToken(this.auth,e));return jo(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Xe(e),i=await n.getIdToken(t),s=ha(i);jo(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:da(ua(s.auth_time)),issuedAtTime:da(ua(s.iat)),expirationTime:da(ua(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Xe(e);await ga(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(jo(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ya(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){jo(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ga(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pa(this,async function(e,t){return sa(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const d=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:E}=t;jo(_&&E,e,"internal-error");const C=va.fromJSON(this.name,E);jo("string"==typeof _,e,"internal-error"),_a(d,e.name),_a(u,e.name),jo("boolean"==typeof y,e,"internal-error"),jo("boolean"==typeof w,e,"internal-error"),_a(h,e.name),_a(p,e.name),_a(f,e.name),_a(m,e.name),_a(g,e.name),_a(v,e.name);const T=new ya({uid:_,auth:e,email:u,emailVerified:y,displayName:d,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:C,createdAt:g,lastLoginAt:v});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new va;i.updateFromServerResponse(t);const s=new ya({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ga(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ma(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
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
 */class wa{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}wa.type="NONE";const ba=wa;
/**
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
 */function Ea(e,t,n){return`firebase:${e}:${t}:${n}`}class Ca{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ya._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ca(Go(ba),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||Go(ba);const r=Ea(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=ya._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Ca(s,e,n)):new Ca(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ea(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ea("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
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
 */function Ta(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ka(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ma(t))return"Blackberry";if(Na(t))return"Webos";if(Ia(t))return"Safari";if((t.includes("chrome/")||xa(t))&&!t.includes("edge/"))return"Chrome";if(Pa(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Sa(e=ye()){return/firefox\//i.test(e)}function Ia(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xa(e=ye()){return/crios\//i.test(e)}function ka(e=ye()){return/iemobile/i.test(e)}function Pa(e=ye()){return/android/i.test(e)}function Ma(e=ye()){return/blackberry/i.test(e)}function Na(e=ye()){return/webos/i.test(e)}function Oa(e=ye()){return/iphone|ipad|ipod/i.test(e)}function Ra(){return Ce()&&10===document.documentMode}function Aa(e=ye()){return Oa(e)||Pa(e)||Na(e)||Ma(e)||/windows phone/i.test(e)||ka(e)}
/**
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
 */
function La(e,t=[]){let n;switch(e){case"Browser":n=Ta(ye());break;case"Worker":n=`${Ta(ye())}-${e}`;break;default:n=e}return`${n}/JsCore/9.8.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
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
 */class $a{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
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
 */class Da{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Go(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ca.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return jo(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Xe(e):null;return t&&jo(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&jo(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Go(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ie("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Go(e)||this._popupRedirectResolver;jo(t,this,"argument-error"),this.redirectPersistenceManager=await Ca.create(this,[Go(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return jo(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return jo(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=La(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fa(this),this.idTokenSubscription=new Fa(this),this.beforeStateQueue=new $a(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$o,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Ba(e){return Xe(e)}class Fa{get next(){return jo(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=je((e=>this.observer=e))}}
/**
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
 */
class Ua{toJSON(){return Ho("not implemented")}_getIdTokenResponse(e){return Ho("not implemented")}_linkToIdToken(e,t){return Ho("not implemented")}_getReauthenticationResolver(e){return Ho("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
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
 */async function za(e,t){return sa(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class qa extends Ua{static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new qa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return oa(e,"POST","/v1/accounts:signInWithPassword",ia(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return oa(e,"POST","/v1/accounts:signInWithEmailLink",ia(e,t))}(e,{email:this._email,oobCode:this._password});default:Fo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return za(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return oa(e,"POST","/v1/accounts:signInWithEmailLink",ia(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Fo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
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
 */async function ja(e,t){return oa(e,"POST","/v1/accounts:signInWithIdp",ia(e,t))}
/**
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
 */class Ha extends Ua{static _fromParams(e){const t=new Ha(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Ro(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Ha(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return ja(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ja(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ja(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fe(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
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
 */const Wa={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Va extends Ua{static _fromVerification(e,t){return new Va({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Va({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return oa(e,"POST","/v1/accounts:signInWithPhoneNumber",ia(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await oa(e,"POST","/v1/accounts:signInWithPhoneNumber",ia(e,t));if(n.temporaryProof)throw ca(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return oa(e,"POST","/v1/accounts:signInWithPhoneNumber",ia(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Wa)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Va({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
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
 */class Ga{static parseLink(e){const t=function(e){const t=Ue(ze(e)).link,n=t?Ue(ze(t)).deep_link_id:null,i=Ue(ze(e)).deep_link_id;return(i?Ue(ze(i)).link:null)||i||n||t||e}(e);try{return new Ga(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=Ue(ze(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);jo(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
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
 */
class Ya{static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ga.parseLink(t);return jo(n,"argument-error"),qa._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Ya.PROVIDER_ID}}Ya.PROVIDER_ID="password",Ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Xa{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
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
 */class Ka extends Xa{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
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
 */
class Ja extends Ka{static credential(e){return Ha._fromParams({providerId:Ja.PROVIDER_ID,signInMethod:Ja.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ja.credentialFromTaggedObject(e)}static credentialFromError(e){return Ja.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ja.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ja.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ja.PROVIDER_ID="facebook.com";
/**
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
 */
class Qa extends Ka{static credential(e,t){return Ha._fromParams({providerId:Qa.PROVIDER_ID,signInMethod:Qa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qa.credentialFromTaggedObject(e)}static credentialFromError(e){return Qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qa.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Qa.GOOGLE_SIGN_IN_METHOD="google.com",Qa.PROVIDER_ID="google.com";
/**
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
 */
class Za extends Ka{static credential(e){return Ha._fromParams({providerId:Za.PROVIDER_ID,signInMethod:Za.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Za.credentialFromTaggedObject(e)}static credentialFromError(e){return Za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Za.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Za.GITHUB_SIGN_IN_METHOD="github.com",Za.PROVIDER_ID="github.com";
/**
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
 */
class el extends Ka{static credential(e,t){return Ha._fromParams({providerId:el.PROVIDER_ID,signInMethod:el.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return el.credentialFromTaggedObject(e)}static credentialFromError(e){return el.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return el.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
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
 */
async function tl(e,t){return oa(e,"POST","/v1/accounts:signUp",ia(e,t))}
/**
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
 */el.TWITTER_SIGN_IN_METHOD="twitter.com",el.PROVIDER_ID="twitter.com";class nl{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await ya._fromIdTokenResponse(e,n,i),r=il(n);return new nl({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=il(n);return new nl({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function il(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class sl extends Se{static _fromErrorAndOperation(e,t,n,i){return new sl(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function rl(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw sl._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
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
 */async function ol(e,t,n=!1){const i=await pa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nl._forOperation(e,"link",i)}
/**
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
 */
async function al(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await pa(e,rl(i,s,t,e),n);jo(r.idToken,i,"internal-error");const o=ha(r.idToken);jo(o,i,"internal-error");const{sub:a}=o;return jo(e.uid===a,i,"user-mismatch"),nl._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Fo(i,"user-mismatch"),e}}
/**
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
 */async function ll(e,t,n=!1){const i="signIn",s=await rl(e,i,t),r=await nl._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function cl(e,t){return ll(Ba(e),t)}async function dl(e,t,n){const i=Ba(e),s=await tl(i,{returnSecureToken:!0,email:t,password:n}),r=await nl._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function ul(e,t,n){return cl(Xe(e),Ya.credential(t,n))}
/**
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
 */function hl(e){return Xe(e).signOut()}new WeakMap;
/**
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
 */
class pl{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
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
 */class fl extends pl{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Ra()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ye();return Ia(e)||Oa(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Aa(),this._shouldAllowMigration=!0}}fl.type="LOCAL";const ml=fl;
/**
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
 */class gl extends pl{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}gl.type="SESSION";const vl=gl;
/**
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
 */
/**
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
 */
class _l{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _l(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
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
 */
function yl(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */_l.receivers=[];class wl{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=yl("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
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
 */function bl(){return window}
/**
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
 */
function El(){return void 0!==bl().WorkerGlobalScope&&"function"==typeof bl().importScripts}class Cl{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Tl(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Sl(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Cl(e).toPromise()}(),t(await Sl()))}))}))}async function Il(e,t,n){const i=Tl(e,!0).put({fbase_key:t,value:n});return new Cl(i).toPromise()}function xl(e,t){const n=Tl(e,!0).delete(t);return new Cl(n).toPromise()}class kl{async _openDb(){return this.db||(this.db=await Sl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return El()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(El()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new wl(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sl();return await Il(e,"__sak","1"),await xl(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Il(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Tl(e,!1).get(t),i=await new Cl(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>xl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Tl(e,!1).getAll();return new Cl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}kl.type="LOCAL";const Pl=kl;
/**
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
 */function Ml(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
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
 */
var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Uo("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function Nl(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Nl("rcb"),new Qo(3e4,6e4);async function Ol(e,t,n){var i;const s=await n.verify();try{let r;if(jo("string"==typeof s,e,"argument-error"),jo("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){jo("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return sa(e,"POST","/v2/accounts/mfaEnrollment:start",ia(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{jo("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;jo(n,e,"missing-multi-factor-info");const o=await function(e,t){return sa(e,"POST","/v2/accounts/mfaSignIn:start",ia(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return sa(e,"POST","/v1/accounts:sendVerificationCode",ia(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
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
 */
class Rl{verifyPhoneNumber(e,t){return Ol(this.auth,e,Xe(t))}static credential(e,t){return Va._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rl.credentialFromTaggedObject(t)}static credentialFromError(e){return Rl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Va._fromTokenResponse(t,n):null}constructor(e){this.providerId=Rl.PROVIDER_ID,this.auth=Ba(e)}}
/**
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
 */
function Al(e,t){return t?Go(t):(jo(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Rl.PROVIDER_ID="phone",Rl.PHONE_SIGN_IN_METHOD="phone";class Ll extends Ua{_getIdTokenResponse(e){return ja(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ja(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ja(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function $l(e){return ll(e.auth,new Ll(e),e.bypassAuthState)}function Dl(e){const{auth:t,user:n}=e;return jo(n,t,"internal-error"),al(n,new Ll(e),e.bypassAuthState)}async function Bl(e){const{auth:t,user:n}=e;return jo(n,t,"internal-error"),ol(n,new Ll(e),e.bypassAuthState)}
/**
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
 */class Fl{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $l;case"linkViaPopup":case"linkViaRedirect":return Bl;case"reauthViaPopup":case"reauthViaRedirect":return Dl;default:Fo(this.auth,"internal-error")}}resolve(e){Wo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
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
 */const Ul=new Qo(2e3,1e4);class zl extends Fl{async executeNotNull(){const e=await this.execute();return jo(e,this.auth,"internal-error"),e}async onExecution(){Wo(1===this.filter.length,"Popup operations only handle one event");const e=yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Uo(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Uo(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Uo(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ul.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,zl.currentPopupAction&&zl.currentPopupAction.cancel(),zl.currentPopupAction=this}}zl.currentPopupAction=null;
/**
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
 */
const ql=new Map;class jl extends Fl{async execute(){let e=ql.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Vl(t),i=Wl(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Hl(e,t){ql.set(e._key(),t)}function Wl(e){return Go(e._redirectPersistence)}function Vl(e){return Ea("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function Gl(e,t,n=!1){const i=Ba(e),s=Al(i,t),r=new jl(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Yl{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kl(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Kl(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Uo(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Xl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Kl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Jl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ql=/^https?/;async function Zl(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return sa(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ec(e))return}catch(e){}Fo(e,"unauthorized-domain")}function ec(e){const t=Yo(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ql.test(n))return!1;if(Jl.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
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
 */const tc=new Qo(3e4,6e4);function nc(){const e=bl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ic=null;function sc(e){return ic=ic||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){nc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nc(),n(Uo(e,"network-request-failed"))},timeout:tc.get()})}if(null===(s=null===(i=bl().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=bl().gapi)||void 0===r?void 0:r.load)){const t=Nl("iframefcb");return bl()[t]=()=>{gapi.load?o():n(Uo(e,"network-request-failed"))},Ml(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ic=null,e}))}(e),ic}
/**
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
 */const rc=new Qo(5e3,15e3),oc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ac=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lc(e){const t=e.config;jo(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zo(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.8.3"},s=ac.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Fe(i).slice(1)}`}
/**
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
 */
const cc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class dc{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function uc(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cc),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ye().toLowerCase();n&&(a=xa(c)?"_blank":n),Sa(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ye()){var t;return Oa(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */(t||"",a),new dc(null);const u=window.open(t||"",a,d);jo(u,e,"popup-blocked");try{u.focus()}catch(e){}return new dc(u)}function hc(e,t,n,i,s,r){jo(e.config.authDomain,e,"auth-domain-config-required"),jo(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.8.3",eventId:s};if(t instanceof Xa){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Le(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Ka){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Zo(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
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
 */(e)}?${Fe(a).slice(1)}`}const pc=class{async _openPopup(e,t,n,i){var s;Wo(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return uc(e,hc(e,t,n,Yo(),i),yl())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=hc(e,t,n,Yo(),i),bl().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Wo(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await sc(e),n=bl().gapi;return jo(n,e,"internal-error"),t.open({where:document.body,url:lc(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oc,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Uo(e,"network-request-failed"),r=bl().setTimeout((()=>{i(s)}),rc.get());function o(){bl().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Yl(e);return t.register("authEvent",(t=>{jo(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),Fo(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Aa()||Ia()||Oa()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vl,this._completeRedirectFn=Gl,this._overrideRedirectResult=Hl}};var fc;
/**
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
 */
class mc{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){jo(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
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
 */fc="Browser",Mt(new Ke("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{jo(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),jo(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:fc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:La(fc)},o=new Da(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Go);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Mt(new Ke("auth-internal",(e=>{const t=Ba(e.getProvider("auth").getImmediate());return new mc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Lt("@firebase/auth","0.20.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fc)),Lt("@firebase/auth","0.20.3","esm2017");const gc=document.querySelector(".backdrop-sign"),vc=document.querySelector(".backdrop-log"),_c=document.querySelector(".modal-button-sign"),yc=document.querySelector(".modal-button-log"),wc=document.querySelector(".sign-up-js"),bc=document.querySelector(".log-in-js"),Ec=(document.querySelector(".registration-js"),document.querySelector(".authorization-js"),document.querySelector(".nav-list__item--exit")),Cc=document.querySelector(".nav-list__item--library");wc.addEventListener("click",(function(){gc.classList.remove("is-bck-hidden")})),bc.addEventListener("click",(function(){vc.classList.remove("is-bck-hidden")})),_c.addEventListener("click",(function(){gc.classList.add("is-bck-hidden")})),yc.addEventListener("click",(function(){vc.classList.add("is-bck-hidden")}));const Tc=document.querySelector(".backdrop-sign"),Sc=document.querySelector(".backdrop-log"),Ic=document.querySelector(".modal-button-sign"),xc=document.querySelector(".modal-button-log"),kc=document.querySelector(".library-mobile"),Pc=document.querySelector(".log-out-mobile"),Mc=document.querySelector(".log-in-mobile"),Nc=document.querySelector(".sign-up-mobile");document.querySelector(".registration-js"),document.querySelector(".authorization-js");Nc.addEventListener("click",(function(){g.classList.remove("backdrop-mobile"),p.classList.remove("is-open"),Tc.classList.remove("is-bck-hidden")})),Mc.addEventListener("click",(function(){g.classList.remove("backdrop-mobile"),p.classList.remove("is-open"),Sc.classList.remove("is-bck-hidden")})),Ic.addEventListener("click",(function(){Tc.classList.add("is-bck-hidden")})),xc.addEventListener("click",(function(){Sc.classList.add("is-bck-hidden")}));let Oc=null;const Rc=document.querySelector(".filmcard-modal");function Ac(e){Oc=e}Rc.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;null===Oc&&alert("you are not authorized to perform this action");const t=Rc.querySelector(".filmcard__poster"),n=null==t?void 0:t.dataset.id,i=null==t?void 0:t.dataset.genreIds.split("-"),s=function({id:e,title:t,original_title:n,poster_path:i,overview:s,vote_average:r,vote_count:o,popularity:a},l,c="id"){return{movieData:{id:e,title:t,original_title:n,poster_path:i,overview:s,vote_average:r,vote_count:o,popularity:a,genre_ids:l},id:Oc,type:c}}(await z(n),i);if(e.target.hasAttribute("data-add-to-watched-btn"))Vc(s,Hc);else{if(!e.target.hasAttribute("data-add-to-queue-btn"))return;Vc(s,Wc)}}));let Lc=null;!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Ot.create("bad-app-name",{appName:String(i)});const s=xt.get(i);if(s){if(De(e,s.options)&&De(n,s.config))return s;throw Ot.create("duplicate-app",{appName:i})}const r=new Qe(i);for(const e of kt.values())r.addComponent(e);const o=new Rt(e,n,r);xt.set(i,o)}({apiKey:"AIzaSyD1-tJeOPxBr70vVGZga3M0QD2TgZmo7uE",authDomain:"the-gentlemen-project.firebaseapp.com",projectId:"the-gentlemen-project",storageBucket:"the-gentlemen-project.appspot.com",messagingSenderId:"4840851997",appId:"1:4840851997:web:1d16647d37bcdd5329d4f4",databaseURL:"https://the-gentlemen-project-default-rtdb.europe-west1.firebasedatabase.app/"});const $c=
/**
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
 */
function(e=At()){const t=Nt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Nt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(De(n.getOptions(),null!=t?t:{}))return e;Fo(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:pc,persistence:[Pl,ml,vl]})}(),Dc=function(e=At(),t){return Nt(e,"database").getImmediate({identifier:t})}();function Bc(e,t){dl($c,e,t).then((e=>{e.user})).catch((e=>{e.code,e.message}))}function Fc(e,t){ul($c,e,t).then((e=>{const t=e.user;console.log(t)})).catch((e=>{e.code,e.message}))}var Uc,zc,qc;function jc(){hl($c).then((()=>{})).catch((e=>{}))}Uc=e=>{e?(gc.classList.add("is-bck-hidden"),vc.classList.add("is-bck-hidden"),wc.classList.add("is-hidden-nav"),bc.classList.add("is-hidden-nav"),Cc.classList.remove("is-hidden-nav"),Ec.classList.remove("is-hidden-nav"),Nc.classList.add("is-mobile-hidden"),Mc.classList.add("is-mobile-hidden"),kc.classList.remove("is-mobile-hidden"),Pc.classList.remove("is-mobile-hidden"),Lc=e.uid,Ac(Lc)):(console.log(null),wc.classList.remove("is-hidden-nav"),bc.classList.remove("is-hidden-nav"),Cc.classList.add("is-hidden-nav"),Ec.classList.add("is-hidden-nav"),Nc.classList.remove("is-mobile-hidden"),Mc.classList.remove("is-mobile-hidden"),kc.classList.add("is-mobile-hidden"),Pc.classList.add("is-mobile-hidden"),Ac(null),Lc=null)},Xe($c).onAuthStateChanged(Uc,zc,qc);const Hc="dataWatched",Wc="dataQueue";function Vc(e,t){const n=e.movieData.id.toString();xo(So(Dc,`${t}/${n}`),e)}function Gc(e){return ko(So(Dc,`${e}`))}const Yc=document.querySelector("#registration"),Xc=document.querySelector("#authorization"),Kc=document.querySelector("#exit-btn"),Jc=document.querySelector("#exit-btn-mobile");var Qc,Zc;Yc.addEventListener("submit",(function(e){e.preventDefault();const{email:t,password:n}=e.currentTarget.elements;if(""===t.value||""===n.value)return alert("Всі поля повинні бути заповнені!");Bc(t.value,n.value),Yc.reset()})),Xc.addEventListener("submit",(function(e){e.preventDefault();const{email:t,password:n}=e.currentTarget.elements;if(""===t.value||""===n.value)return alert("Всі поля повинні бути заповнені!");Fc(t.value,n.value),Xc.reset()})),Kc.addEventListener("click",jc),Jc.addEventListener("click",jc);const ed={watched:document.querySelector("[data-btn-watched]"),queue:document.querySelector("[data-btn-queue]"),gallery:document.querySelector(".gallery__list")};function td(e){if(!e.exists())throw new Error("Data base snapshot is empty");return Promise.resolve(Object.values(e.val()).map((e=>e.movieData)))}function nd(e){ed.gallery.innerHTML=e,A(1,1)}document.addEventListener("libPageLoaded",(function(){Gc(Hc).then(td).then($).then(nd).catch(console.error)})),null===(Qc=ed.watched)||void 0===Qc||Qc.addEventListener("click",(function(){ed.watched.classList.add("is-header-lib-active"),ed.queue.classList.remove("is-header-lib-active"),Gc(Hc).then(td).then($).then(nd).catch(console.error)})),null===(Zc=ed.queue)||void 0===Zc||Zc.addEventListener("click",(function(){ed.queue.classList.add("is-header-lib-active"),ed.watched.classList.remove("is-header-lib-active"),Gc(Wc).then(td).then($).then(nd).catch(console.error)}));const id=document.querySelector(".btn-to-top");id.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?id.style.display="block":id.style.display="none"};
//# sourceMappingURL=index.cac327af.js.map
