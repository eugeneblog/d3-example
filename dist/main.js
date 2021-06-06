(()=>{"use strict";function t(){}function n(n){return null==n?t:function(){return this.querySelector(n)}}function e(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function r(){return[]}function i(t){return null==t?r:function(){return this.querySelectorAll(t)}}function o(t){return function(){return this.matches(t)}}function u(t){return function(n){return n.matches(t)}}var a=Array.prototype.find;function s(){return this.firstElementChild}var l=Array.prototype.filter;function c(){return this.children}function h(t){return new Array(t.length)}function f(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function p(t){return function(){return t}}function d(t,n,e,r,i,o){for(var u,a=0,s=n.length,l=o.length;a<l;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new f(t,o[a]);for(;a<s;++a)(u=n[a])&&(i[a]=u)}function y(t,n,e,r,i,o,u){var a,s,l,c=new Map,h=n.length,p=o.length,d=new Array(h);for(a=0;a<h;++a)(s=n[a])&&(d[a]=l=u.call(s,s.__data__,a,n)+"",c.has(l)?i[a]=s:c.set(l,s));for(a=0;a<p;++a)l=u.call(t,o[a],a,o)+"",(s=c.get(l))?(r[a]=s,s.__data__=o[a],c.delete(l)):e[a]=new f(t,o[a]);for(a=0;a<h;++a)(s=n[a])&&c.get(d[a])===s&&(i[a]=s)}function v(t){return t.__data__}function _(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}f.prototype={constructor:f,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var g="http://www.w3.org/1999/xhtml";const m={svg:"http://www.w3.org/2000/svg",xhtml:g,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function w(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),m.hasOwnProperty(n)?{space:m[n],local:t}:t}function b(t){return function(){this.removeAttribute(t)}}function x(t){return function(){this.removeAttributeNS(t.space,t.local)}}function k(t,n){return function(){this.setAttribute(t,n)}}function A(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function N(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function E(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function M(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function S(t){return function(){this.style.removeProperty(t)}}function C(t,n,e){return function(){this.style.setProperty(t,n,e)}}function q(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function X(t,n){return t.style.getPropertyValue(n)||M(t).getComputedStyle(t,null).getPropertyValue(n)}function P(t){return function(){delete this[t]}}function O(t,n){return function(){this[t]=n}}function T(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function R(t){return t.trim().split(/^|\s+/)}function I(t){return t.classList||new Y(t)}function Y(t){this._node=t,this._names=R(t.getAttribute("class")||"")}function j(t,n){for(var e=I(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function L(t,n){for(var e=I(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function D(t){return function(){j(this,t)}}function H(t){return function(){L(this,t)}}function B(t,n){return function(){(n.apply(this,arguments)?j:L)(this,t)}}function $(){this.textContent=""}function V(t){return function(){this.textContent=t}}function z(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function U(){this.innerHTML=""}function F(t){return function(){this.innerHTML=t}}function K(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function W(){this.nextSibling&&this.parentNode.appendChild(this)}function G(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function J(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===g&&n.documentElement.namespaceURI===g?n.createElement(t):n.createElementNS(e,t)}}function Q(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Z(t){var n=w(t);return(n.local?Q:J)(n)}function tt(){return null}function nt(){var t=this.parentNode;t&&t.removeChild(this)}function et(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function rt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function it(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function ot(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function ut(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var u=0,a=i.length;u<a;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function at(t,n,e){var r=M(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function st(t,n){return function(){return at(this,t,n)}}function lt(t,n){return function(){return at(this,t,n.apply(this,arguments))}}Y.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ct=[null];function ht(t,n){this._groups=t,this._parents=n}function ft(){return new ht([[document.documentElement]],ct)}ht.prototype=ft.prototype={constructor:ht,select:function(t){"function"!=typeof t&&(t=n(t));for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var u,a,s=e[o],l=s.length,c=i[o]=new Array(l),h=0;h<l;++h)(u=s[h])&&(a=t.call(u,u.__data__,h,s))&&("__data__"in u&&(a.__data__=u.__data__),c[h]=a);return new ht(i,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);return null==n?[]:e(n)}}(t):i(t);for(var n=this._groups,r=n.length,o=[],u=[],a=0;a<r;++a)for(var s,l=n[a],c=l.length,h=0;h<c;++h)(s=l[h])&&(o.push(t.call(s,s.__data__,h,l)),u.push(s));return new ht(o,u)},selectChild:function(t){return this.select(null==t?s:function(t){return function(){return a.call(this.children,t)}}("function"==typeof t?t:u(t)))},selectChildren:function(t){return this.selectAll(null==t?c:function(t){return function(){return l.call(this.children,t)}}("function"==typeof t?t:u(t)))},filter:function(t){"function"!=typeof t&&(t=o(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,a=n[i],s=a.length,l=r[i]=[],c=0;c<s;++c)(u=a[c])&&t.call(u,u.__data__,c,a)&&l.push(u);return new ht(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,v);var r=n?y:d,i=this._parents,o=this._groups;"function"!=typeof t&&(t=p(t));for(var u=o.length,a=new Array(u),s=new Array(u),l=new Array(u),c=0;c<u;++c){var h=i[c],f=o[c],_=f.length,g=e(t.call(h,h&&h.__data__,c,i)),m=g.length,w=s[c]=new Array(m),b=a[c]=new Array(m),x=l[c]=new Array(_);r(h,f,w,b,x,g,n);for(var k,A,N=0,E=0;N<m;++N)if(k=w[N]){for(N>=E&&(E=N+1);!(A=b[E])&&++E<m;);k._next=A||null}}return(a=new ht(a,i))._enter=s,a._exit=l,a},enter:function(){return new ht(this._enter||this._groups.map(h),this._parents)},exit:function(){return new ht(this._exit||this._groups.map(h),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof ht))throw new Error("invalid merge");for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,l=n[a],c=e[a],h=l.length,f=u[a]=new Array(h),p=0;p<h;++p)(s=l[p]||c[p])&&(f[p]=s);for(;a<r;++a)u[a]=n[a];return new ht(u,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=_);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],s=a.length,l=i[o]=new Array(s),c=0;c<s;++c)(u=a[c])&&(l[c]=u);l.sort(n)}return new ht(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=w(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?x:b:"function"==typeof n?e.local?E:N:e.local?A:k)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?S:"function"==typeof n?q:C)(t,n,null==e?"":e)):X(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?P:"function"==typeof n?T:O)(t,n)):this.node()[t]},classed:function(t,n){var e=R(t+"");if(arguments.length<2){for(var r=I(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?B:n?D:H)(e,n))},text:function(t){return arguments.length?this.each(null==t?$:("function"==typeof t?z:V)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?U:("function"==typeof t?K:F)(t)):this.node().innerHTML},raise:function(){return this.each(W)},lower:function(){return this.each(G)},append:function(t){var n="function"==typeof t?t:Z(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,e){var r="function"==typeof t?t:Z(t),i=null==e?tt:"function"==typeof e?e:n(e);return this.select((function(){return this.insertBefore(r.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(nt)},clone:function(t){return this.select(t?rt:et)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=it(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?ut:ot,r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var s,l=0,c=a.length;l<c;++l)for(r=0,s=a[l];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?lt:st)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}};const pt=ft;var dt={value:()=>{}};function yt(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new vt(r)}function vt(t){this._=t}function _t(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function gt(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function mt(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=dt,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}vt.prototype=yt.prototype={constructor:vt,on:function(t,n){var e,r=this._,i=_t(t+"",r),o=-1,u=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(e=(t=i[o]).type)r[e]=mt(r[e],t.name,n);else if(null==n)for(e in r)r[e]=mt(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=gt(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new vt(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};const wt=yt;var bt,xt,kt=0,At=0,Nt=0,Et=0,Mt=0,St=0,Ct="object"==typeof performance&&performance.now?performance:Date,qt="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Xt(){return Mt||(qt(Pt),Mt=Ct.now()+St)}function Pt(){Mt=0}function Ot(){this._call=this._time=this._next=null}function Tt(t,n,e){var r=new Ot;return r.restart(t,n,e),r}function Rt(){Mt=(Et=Ct.now())+St,kt=At=0;try{!function(){Xt(),++kt;for(var t,n=bt;n;)(t=Mt-n._time)>=0&&n._call.call(null,t),n=n._next;--kt}()}finally{kt=0,function(){for(var t,n,e=bt,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:bt=n);xt=t,Yt(r)}(),Mt=0}}function It(){var t=Ct.now(),n=t-Et;n>1e3&&(St-=n,Et=t)}function Yt(t){kt||(At&&(At=clearTimeout(At)),t-Mt>24?(t<1/0&&(At=setTimeout(Rt,t-Ct.now()-St)),Nt&&(Nt=clearInterval(Nt))):(Nt||(Et=Ct.now(),Nt=setInterval(It,1e3)),kt=1,qt(Rt)))}function jt(t,n,e){var r=new Ot;return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}Ot.prototype=Tt.prototype={constructor:Ot,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?Xt():+e)+(null==n?0:+n),this._next||xt===this||(xt?xt._next=this:bt=this,xt=this),this._call=t,this._time=e,Yt()},stop:function(){this._call&&(this._call=null,this._time=1/0,Yt())}};var Lt=wt("start","end","cancel","interrupt"),Dt=[];function Ht(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(s){var l,c,h,f;if(1!==e.state)return a();for(l in i)if((f=i[l]).name===e.name){if(3===f.state)return jt(o);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[l]):+l<n&&(f.state=6,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[l])}if(jt((function(){3===e.state&&(e.state=4,e.timer.restart(u,e.delay,e.time),u(s))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(f=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(r[++c]=f);r.length=c+1}}function u(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(a),e.state=5,1),o=-1,u=r.length;++o<u;)r[o].call(t,i);5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),a())}function a(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=Tt((function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}),0,e.time)}(t,e,{name:n,index:r,group:i,on:Lt,tween:Dt,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function Bt(t,n){var e=Vt(t,n);if(e.state>0)throw new Error("too late; already scheduled");return e}function $t(t,n){var e=Vt(t,n);if(e.state>3)throw new Error("too late; already running");return e}function Vt(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function zt(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var Ut,Ft=180/Math.PI,Kt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Wt(t,n,e,r,i,o){var u,a,s;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,s/=a),t*r<n*e&&(t=-t,n=-n,s=-s,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Ft,skewX:Math.atan(s)*Ft,scaleX:u,scaleY:a}}function Gt(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,u){var a=[],s=[];return o=t(o),u=t(u),function(t,r,i,o,u,a){if(t!==i||r!==o){var s=u.push("translate(",null,n,null,e);a.push({i:s-4,x:zt(t,i)},{i:s-2,x:zt(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}(o.translateX,o.translateY,u.translateX,u.translateY,a,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:zt(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,u.rotate,a,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:zt(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,u.skewX,a,s),function(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:zt(t,e)},{i:a-2,x:zt(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,a,s),o=u=null,function(t){for(var n,e=-1,r=s.length;++e<r;)a[(n=s[e]).i]=n.x(t);return a.join("")}}}var Jt=Gt((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Kt:Wt(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),Qt=Gt((function(t){return null==t?Kt:(Ut||(Ut=document.createElementNS("http://www.w3.org/2000/svg","g")),Ut.setAttribute("transform",t),(t=Ut.transform.baseVal.consolidate())?Wt((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Kt)}),", ",")",")");function Zt(t,n){var e,r;return function(){var i=$t(this,t),o=i.tween;if(o!==e)for(var u=0,a=(r=e=o).length;u<a;++u)if(r[u].name===n){(r=r.slice()).splice(u,1);break}i.tween=r}}function tn(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=$t(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=a;break}s===l&&i.push(a)}o.tween=i}}function nn(t,n,e){var r=t._id;return t.each((function(){var t=$t(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Vt(t,r).value[n]}}function en(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function rn(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function on(){}var un=.7,an=1/un,sn="\\s*([+-]?\\d+)\\s*",ln="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",cn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hn=/^#([0-9a-f]{3,8})$/,fn=new RegExp("^rgb\\("+[sn,sn,sn]+"\\)$"),pn=new RegExp("^rgb\\("+[cn,cn,cn]+"\\)$"),dn=new RegExp("^rgba\\("+[sn,sn,sn,ln]+"\\)$"),yn=new RegExp("^rgba\\("+[cn,cn,cn,ln]+"\\)$"),vn=new RegExp("^hsl\\("+[ln,cn,cn]+"\\)$"),_n=new RegExp("^hsla\\("+[ln,cn,cn,ln]+"\\)$"),gn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function mn(){return this.rgb().formatHex()}function wn(){return this.rgb().formatRgb()}function bn(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=hn.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?xn(n):3===e?new En(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?kn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?kn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=fn.exec(t))?new En(n[1],n[2],n[3],1):(n=pn.exec(t))?new En(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=dn.exec(t))?kn(n[1],n[2],n[3],n[4]):(n=yn.exec(t))?kn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=vn.exec(t))?qn(n[1],n[2]/100,n[3]/100,1):(n=_n.exec(t))?qn(n[1],n[2]/100,n[3]/100,n[4]):gn.hasOwnProperty(t)?xn(gn[t]):"transparent"===t?new En(NaN,NaN,NaN,0):null}function xn(t){return new En(t>>16&255,t>>8&255,255&t,1)}function kn(t,n,e,r){return r<=0&&(t=n=e=NaN),new En(t,n,e,r)}function An(t){return t instanceof on||(t=bn(t)),t?new En((t=t.rgb()).r,t.g,t.b,t.opacity):new En}function Nn(t,n,e,r){return 1===arguments.length?An(t):new En(t,n,e,null==r?1:r)}function En(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Mn(){return"#"+Cn(this.r)+Cn(this.g)+Cn(this.b)}function Sn(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Cn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function qn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Pn(t,n,e,r)}function Xn(t){if(t instanceof Pn)return new Pn(t.h,t.s,t.l,t.opacity);if(t instanceof on||(t=bn(t)),!t)return new Pn;if(t instanceof Pn)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,s=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=s<.5?o+i:2-o-i,u*=60):a=s>0&&s<1?0:u,new Pn(u,a,s,t.opacity)}function Pn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function On(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Tn(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}en(on,bn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:mn,formatHex:mn,formatHsl:function(){return Xn(this).formatHsl()},formatRgb:wn,toString:wn}),en(En,Nn,rn(on,{brighter:function(t){return t=null==t?an:Math.pow(an,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?un:Math.pow(un,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Mn,formatHex:Mn,formatRgb:Sn,toString:Sn})),en(Pn,(function(t,n,e,r){return 1===arguments.length?Xn(t):new Pn(t,n,e,null==r?1:r)}),rn(on,{brighter:function(t){return t=null==t?an:Math.pow(an,t),new Pn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?un:Math.pow(un,t),new Pn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new En(On(t>=240?t-240:t+120,i,r),On(t,i,r),On(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const Rn=t=>()=>t;function In(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):Rn(isNaN(t)?n:t)}const Yn=function t(n){var e=function(t){return 1==(t=+t)?In:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Rn(isNaN(n)?e:n)}}(n);function r(t,n){var r=e((t=Nn(t)).r,(n=Nn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),u=In(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}return r.gamma=t,r}(1);function jn(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=Nn(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}jn((function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i;return Tn((e-r/n)*n,u,i,o,a)}})),jn((function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n];return Tn((e-r/n)*n,i,o,u,a)}}));var Ln=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Dn=new RegExp(Ln.source,"g");function Hn(t,n){var e,r,i,o=Ln.lastIndex=Dn.lastIndex=0,u=-1,a=[],s=[];for(t+="",n+="";(e=Ln.exec(t))&&(r=Dn.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,s.push({i:u,x:zt(e,r)})),o=Dn.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)a[(e=s[r]).i]=e.x(t);return a.join("")})}function Bn(t,n){var e;return("number"==typeof n?zt:n instanceof bn?Yn:(e=bn(n))?(n=e,Yn):Hn)(t,n)}function $n(t){return function(){this.removeAttribute(t)}}function Vn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function zn(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttribute(t);return u===o?null:u===r?i:i=n(r=u,e)}}function Un(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttributeNS(t.space,t.local);return u===o?null:u===r?i:i=n(r=u,e)}}function Fn(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttribute(t))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttribute(t)}}function Kn(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttributeNS(t.space,t.local))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttributeNS(t.space,t.local)}}function Wn(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Gn(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function Jn(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&Gn(t,i)),e}return i._value=n,i}function Qn(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&Wn(t,i)),e}return i._value=n,i}function Zn(t,n){return function(){Bt(this,t).delay=+n.apply(this,arguments)}}function te(t,n){return n=+n,function(){Bt(this,t).delay=n}}function ne(t,n){return function(){$t(this,t).duration=+n.apply(this,arguments)}}function ee(t,n){return n=+n,function(){$t(this,t).duration=n}}function re(t,n){if("function"!=typeof n)throw new Error;return function(){$t(this,t).ease=n}}function ie(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?Bt:$t;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}var oe=pt.prototype.constructor;function ue(t){return function(){this.style.removeProperty(t)}}function ae(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function se(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&ae(t,o,e)),r}return o._value=n,o}function le(t){return function(n){this.textContent=t.call(this,n)}}function ce(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&le(r)),n}return r._value=t,r}var he=0;function fe(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function pe(){return++he}var de=pt.prototype;fe.prototype=function(t){return pt().transition(t)}.prototype={constructor:fe,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=n(t));for(var i=this._groups,o=i.length,u=new Array(o),a=0;a<o;++a)for(var s,l,c=i[a],h=c.length,f=u[a]=new Array(h),p=0;p<h;++p)(s=c[p])&&(l=t.call(s,s.__data__,p,c))&&("__data__"in s&&(l.__data__=s.__data__),f[p]=l,Ht(f[p],e,r,p,f,Vt(s,r)));return new fe(u,this._parents,e,r)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=i(t));for(var r=this._groups,o=r.length,u=[],a=[],s=0;s<o;++s)for(var l,c=r[s],h=c.length,f=0;f<h;++f)if(l=c[f]){for(var p,d=t.call(l,l.__data__,f,c),y=Vt(l,e),v=0,_=d.length;v<_;++v)(p=d[v])&&Ht(p,n,e,v,d,y);u.push(d),a.push(l)}return new fe(u,a,n,e)},filter:function(t){"function"!=typeof t&&(t=o(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,a=n[i],s=a.length,l=r[i]=[],c=0;c<s;++c)(u=a[c])&&t.call(u,u.__data__,c,a)&&l.push(u);return new fe(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,l=n[a],c=e[a],h=l.length,f=u[a]=new Array(h),p=0;p<h;++p)(s=l[p]||c[p])&&(f[p]=s);for(;a<r;++a)u[a]=n[a];return new fe(u,this._parents,this._name,this._id)},selection:function(){return new oe(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=pe(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)if(u=a[l]){var c=Vt(u,n);Ht(u,t,e,l,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new fe(r,this._parents,t,e)},call:de.call,nodes:de.nodes,node:de.node,size:de.size,empty:de.empty,each:de.each,on:function(t,n){var e=this._id;return arguments.length<2?Vt(this.node(),e).on.on(t):this.each(ie(e,t,n))},attr:function(t,n){var e=w(t),r="transform"===e?Qt:Bn;return this.attrTween(t,"function"==typeof n?(e.local?Kn:Fn)(e,r,nn(this,"attr."+t,n)):null==n?(e.local?Vn:$n)(e):(e.local?Un:zn)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=w(t);return this.tween(e,(r.local?Jn:Qn)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?Jt:Bn;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=X(this,t),u=(this.style.removeProperty(t),X(this,t));return o===u?null:o===e&&u===r?i:i=n(e=o,r=u)}}(t,r)).on("end.style."+t,ue(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var u=X(this,t),a=e(this),s=a+"";return null==a&&(this.style.removeProperty(t),s=a=X(this,t)),u===s?null:u===r&&s===i?o:(i=s,o=n(r=u,a))}}(t,r,nn(this,"style."+t,n))).each(function(t,n){var e,r,i,o,u="style."+n,a="end."+u;return function(){var s=$t(this,t),l=s.on,c=null==s.value[u]?o||(o=ue(n)):void 0;l===e&&i===c||(r=(e=l).copy()).on(a,i=c),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var u=X(this,t);return u===o?null:u===r?i:i=n(r=u,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,se(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(nn(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,ce(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Vt(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Zt:tn)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Zn:te)(n,t)):Vt(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?ne:ee)(n,t)):Vt(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(re(n,t)):Vt(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;$t(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,u){var a={value:u},s={value:function(){0==--i&&o()}};e.each((function(){var e=$t(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(a),n._.interrupt.push(a),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:de[Symbol.iterator]};var ye={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function ve(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}pt.prototype.interrupt=function(t){return this.each((function(){!function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}}(this,t)}))},pt.prototype.transition=function(t){var n,e;t instanceof fe?(n=t._id,t=t._name):(n=pe(),(e=ye).time=Xt(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)(u=a[l])&&Ht(u,t,n,l,a,e||ve(u,n));return new fe(r,this._parents,t,n)};const{abs:_e,max:ge,min:me}=Math;function we(t){return{type:t}}function be(t,n,e){this.k=t,this.x=n,this.y=e}["w","e"].map(we),["n","s"].map(we),["n","w","e","s","nw","ne","sw","se"].map(we),be.prototype={constructor:be,scale:function(t){return 1===t?this:new be(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new be(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new be(1,0,0),be.prototype,console.log("fuck you")})();