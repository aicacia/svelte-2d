function N(){}function G(t,n){for(const e in n)t[e]=n[e];return t}function W(t){return t()}function z(){return Object.create(null)}function p(t){t.forEach(W)}function J(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _t(t,n,e){t.$$.on_destroy.push(Q(n,e))}function ht(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,u){if(r){const c=B(n,e,i,u);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function xt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let v=!1;function R(){v=!0}function U(){v=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&o.push(a)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const l=n[o].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:V(1,r,g=>n[e[g]].claim_order,l))-1;i[o]=e[a]+1;const f=a+1;e[f]=o,r=Math.max(f,r)}const u=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(u.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(c[o],a)}}function Y(t,n){t.appendChild(n)}function Z(t,n){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function bt(t,n,e){v&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function O(t){t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function P(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function wt(){return j(" ")}function vt(){return j("")}function L(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t,n){for(const e in n)nt(t,e,n[e])}function et(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){it(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function D(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function kt(t,n,e){return D(t,n,e,P)}function St(t,n,e){return D(t,n,e,tt)}function rt(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function At(t){return rt(t," ")}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let x;function ot(){if(x===void 0){x=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{x=!0}}return x}function Ct(t,n){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=P("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ot();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=L(window,"message",c=>{c.source===i.contentWindow&&n()})):(i.src="about:blank",i.onload=()=>{u=L(i.contentWindow,"resize",n)}),Y(t,i),()=>{(r||u&&i.contentWindow)&&u(),O(i)}}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function zt(t){y().$$.on_mount.push(t)}function Lt(t){y().$$.after_update.push(t)}function Tt(t){y().$$.on_destroy.push(t)}function Wt(t,n){return y().$$.context.set(t,n),n}function Bt(t){return y().$$.context.get(t)}const _=[],T=[],$=[],k=[],I=Promise.resolve();let S=!1;function F(){S||(S=!0,I.then(H))}function Ot(){return F(),I}function A(t){$.push(t)}function Pt(t){k.push(t)}const E=new Set;let b=0;function H(){const t=m;do{for(;b<_.length;){const n=_[b];b++,h(n),ct(n.$$)}for(h(null),_.length=0,b=0;T.length;)T.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];E.has(e)||(E.add(e),e())}$.length=0}while(_.length);for(;k.length;)k.pop()();S=!1,E.clear(),h(t)}function ct(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Dt(){d.r||p(d.c),d=d.p}function st(t,n){t&&t.i&&(w.delete(t),t.i(n))}function It(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ft(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[u]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ht(t){return typeof t=="object"&&t!==null?t:{}}function Gt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Jt(t){t&&t.c()}function Kt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||A(()=>{const o=u.map(W).filter(J);c?c.push(...o):p(o),t.$$.on_mount=[]}),s.forEach(A)}function lt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(_.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Qt(t,n,e,i,r,u,c,s=[-1]){const o=m;h(t);const l=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:z(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...C)=>{const M=C.length?C[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=M)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](M),a&&ft(t,f)),g}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){R();const f=et(n.target);l.fragment&&l.fragment.l(f),f.forEach(O)}else l.fragment&&l.fragment.c();n.intro&&st(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),U(),H()}h(o)}class Rt{$destroy(){lt(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Pt as $,Ht as A,lt as B,G as C,Ot as D,N as E,ht as F,pt as G,yt as H,mt as I,Bt as J,Tt as K,tt as L,St as M,A as N,Z as O,Ct as P,T as Q,H as R,Rt as S,_t as T,$t as U,Et as V,Mt as W,xt as X,gt as Y,dt as Z,Gt as _,wt as a,bt as b,At as c,Dt as d,vt as e,st as f,qt as g,O as h,Qt as i,Wt as j,Lt as k,P as l,kt as m,et as n,zt as o,nt as p,jt as q,j as r,at as s,It as t,rt as u,Nt as v,Jt as w,Kt as x,ut as y,Ft as z};