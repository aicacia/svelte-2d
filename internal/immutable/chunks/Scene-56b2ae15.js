import{K as Vt,L as ve,S as Ee,i as Te,s as Ae,D as Se,k as De,M as wt,l as Oe,m as ht,N as vt,h as nt,n as D,p as K,O as ke,b as Pe,F as Et,P as Ie,G as Ce,H as xe,I as Me,f as Le,t as Re,Q as b,o as We,R as Ke}from"./index-609695e7.js";import{w as E}from"./index-20c24c2d.js";function v(){return{}}function os(e){const t=Vt(e);if(!t)throw new Error("Must be used inside the component's context.");return t}function Be(e,t,n){return Math.max(t,Math.min(e,n))}const w={toVector(e,t){return e===void 0&&(e=t),Array.isArray(e)?e:[e,e]},add(e,t){return[e[0]+t[0],e[1]+t[1]]},sub(e,t){return[e[0]-t[0],e[1]-t[1]]},addTo(e,t){e[0]+=t[0],e[1]+=t[1]},subTo(e,t){e[0]-=t[0],e[1]-=t[1]}};function Tt(e,t,n){return t===0||Math.abs(t)===1/0?Math.pow(e,n*5):e*t*n/(t+n*e)}function At(e,t,n,s=.15){return s===0?Be(e,t,n):e<t?-Tt(t-e,n-t,s)+t:e>n?+Tt(e-n,n-t,s)+n:e}function je(e,[t,n],[s,r]){const[[i,o],[c,u]]=e;return[At(t,i,o,s),At(n,c,u,r)]}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?St(Object(n),!0).forEach(function(s){T(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}const Ht={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function Dt(e){return e?e[0].toUpperCase()+e.slice(1):""}const Ue=["enter","leave"];function Ye(e=!1,t){return e&&!Ue.includes(t)}function Ve(e,t="",n=!1){const s=Ht[e],r=s&&s[t]||t;return"on"+Dt(e)+Dt(r)+(Ye(n,r)?"Capture":"")}const He=["gotpointercapture","lostpointercapture"];function Xe(e){let t=e.substring(2).toLowerCase();const n=!!~t.indexOf("passive");n&&(t=t.replace("passive",""));const s=He.includes(t)?"capturecapture":"capture",r=!!~t.indexOf(s);return r&&(t=t.replace("capture","")),{device:t,capture:r,passive:n}}function ze(e,t=""){const n=Ht[e],s=n&&n[t]||t;return e+s}function ut(e){return"touches"in e}function Xt(e){return ut(e)?"touch":"pointerType"in e?e.pointerType:"mouse"}function Ge(e){return Array.from(e.touches).filter(t=>{var n,s;return t.target===e.currentTarget||((n=e.currentTarget)===null||n===void 0||(s=n.contains)===null||s===void 0?void 0:s.call(n,t.target))})}function Ne(e){return e.type==="touchend"||e.type==="touchcancel"?e.changedTouches:e.targetTouches}function zt(e){return ut(e)?Ne(e)[0]:e}function Fe(e){return Ge(e).map(t=>t.identifier)}function dt(e){const t=zt(e);return ut(e)?t.identifier:t.pointerId}function Ot(e){const t=zt(e);return[t.clientX,t.clientY]}const kt=40,Pt=800;function Ze(e){let{deltaX:t,deltaY:n,deltaMode:s}=e;return s===1?(t*=kt,n*=kt):s===2&&(t*=Pt,n*=Pt),[t,n]}function qe(e){const t={};if("buttons"in e&&(t.buttons=e.buttons),"shiftKey"in e){const{shiftKey:n,altKey:s,metaKey:r,ctrlKey:i}=e;Object.assign(t,{shiftKey:n,altKey:s,metaKey:r,ctrlKey:i})}return t}function at(e,...t){return typeof e=="function"?e(...t):e}function Qe(){}function Je(...e){return e.length===0?Qe:e.length===1?e[0]:function(){let t;for(const n of e)t=n.apply(this,arguments)||t;return t}}function It(e,t){return Object.assign({},t,e||{})}const $e=32;class tn{constructor(t,n,s){this.ctrl=t,this.args=n,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:n,ingKey:s,args:r}=this;n[s]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=r,t.axis=void 0,t.memo=void 0,t.elapsedTime=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const n=this.state,s=this.config;n._active||(this.reset(),this.computeInitial(),n._active=!0,n.target=t.target,n.currentTarget=t.currentTarget,n.lastOffset=s.from?at(s.from,n):n.offset,n.offset=n.lastOffset),n.startTime=n.timeStamp=t.timeStamp}computeValues(t){const n=this.state;n._values=t,n.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:n,config:s,shared:r}=this;n.args=this.args;let i=0;if(t&&(n.event=t,s.preventDefault&&t.cancelable&&n.event.preventDefault(),n.type=t.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,qe(t)),r.down=r.pressed=r.buttons%2===1||r.touches>0,i=t.timeStamp-n.timeStamp,n.timeStamp=t.timeStamp,n.elapsedTime=n.timeStamp-n.startTime),n._active){const p=n._delta.map(Math.abs);w.addTo(n._distance,p)}this.axisIntent&&this.axisIntent(t);const[o,c]=n._movement,[u,d]=s.threshold,{_step:a,values:f}=n;if(s.hasCustomTransform?(a[0]===!1&&(a[0]=Math.abs(o)>=u&&f[0]),a[1]===!1&&(a[1]=Math.abs(c)>=d&&f[1])):(a[0]===!1&&(a[0]=Math.abs(o)>=u&&Math.sign(o)*u),a[1]===!1&&(a[1]=Math.abs(c)>=d&&Math.sign(c)*d)),n.intentional=a[0]!==!1||a[1]!==!1,!n.intentional)return;const h=[0,0];if(s.hasCustomTransform){const[p,C]=f;h[0]=a[0]!==!1?p-a[0]:0,h[1]=a[1]!==!1?C-a[1]:0}else h[0]=a[0]!==!1?o-a[0]:0,h[1]=a[1]!==!1?c-a[1]:0;this.restrictToAxis&&!n._blocked&&this.restrictToAxis(h);const S=n.offset,g=n._active&&!n._blocked||n.active;g&&(n.first=n._active&&!n.active,n.last=!n._active&&n.active,n.active=r[this.ingKey]=n._active,t&&(n.first&&("bounds"in s&&(n._bounds=at(s.bounds,n)),this.setup&&this.setup()),n.movement=h,this.computeOffset()));const[k,R]=n.offset,[[B,A],[P,I]]=n._bounds;n.overflow=[k<B?-1:k>A?1:0,R<P?-1:R>I?1:0],n._movementBound[0]=n.overflow[0]?n._movementBound[0]===!1?n._movement[0]:n._movementBound[0]:!1,n._movementBound[1]=n.overflow[1]?n._movementBound[1]===!1?n._movement[1]:n._movementBound[1]:!1;const _=n._active?s.rubberband||[0,0]:[0,0];if(n.offset=je(n._bounds,n.offset,_),n.delta=w.sub(n.offset,S),this.computeMovement(),g&&(!n.last||i>$e)){n.delta=w.sub(n.offset,S);const p=n.delta.map(Math.abs);w.addTo(n.distance,p),n.direction=n.delta.map(Math.sign),n._direction=n._delta.map(Math.sign),!n.first&&i>0&&(n.velocity=[p[0]/i,p[1]/i])}}emit(){const t=this.state,n=this.shared,s=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!s.triggerAllEvents)return;const r=this.handler(m(m(m({},n),t),{},{[this.aliasKey]:t.values}));r!==void 0&&(t.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function en([e,t],n){const s=Math.abs(e),r=Math.abs(t);if(s>r&&s>n)return"x";if(r>s&&r>n)return"y"}class Gt extends tn{constructor(...t){super(...t),T(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=w.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=w.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const n=this.state,s=this.config;if(!n.axis&&t){const r=typeof s.axisThreshold=="object"?s.axisThreshold[Xt(t)]:s.axisThreshold;n.axis=en(n._movement,r)}n._blocked=(s.lockDirection||!!s.axis)&&!n.axis||!!s.axis&&s.axis!==n.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const nn=e=>e,Ct=.15,Nt={enabled(e=!0){return e},eventOptions(e,t,n){return m(m({},n.shared.eventOptions),e)},preventDefault(e=!1){return e},triggerAllEvents(e=!1){return e},rubberband(e=0){switch(e){case!0:return[Ct,Ct];case!1:return[0,0];default:return w.toVector(e)}},from(e){if(typeof e=="function")return e;if(e!=null)return w.toVector(e)},transform(e,t,n){const s=e||n.shared.transform;return this.hasCustomTransform=!!s,s||nn},threshold(e){return w.toVector(e,0)}},sn=0,z=m(m({},Nt),{},{axis(e,t,{axis:n}){if(this.lockDirection=n==="lock",!this.lockDirection)return n},axisThreshold(e=sn){return e},bounds(e={}){if(typeof e=="function")return i=>z.bounds(e(i));if("current"in e)return()=>e.current;if(typeof HTMLElement=="function"&&e instanceof HTMLElement)return e;const{left:t=-1/0,right:n=1/0,top:s=-1/0,bottom:r=1/0}=e;return[[t,n],[s,r]]}}),st=10,xt={ArrowRight:(e=1)=>[st*e,0],ArrowLeft:(e=1)=>[-st*e,0],ArrowUp:(e=1)=>[0,-st*e],ArrowDown:(e=1)=>[0,st*e]};class rn extends Gt{constructor(...t){super(...t),T(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const n=t._bounds.getBoundingClientRect(),s=t.currentTarget.getBoundingClientRect(),r={left:n.left-s.left+t.offset[0],right:n.right-s.right+t.offset[0],top:n.top-s.top+t.offset[1],bottom:n.bottom-s.bottom+t.offset[1]};t._bounds=z.bounds(r)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const n=this.config,s=this.state;if(t.buttons!=null&&(Array.isArray(n.pointerButtons)?!n.pointerButtons.includes(t.buttons):n.pointerButtons!==-1&&n.pointerButtons!==t.buttons))return;const r=this.ctrl.setEventIds(t);n.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(r&&r.size>1&&s._pointerActive)&&(this.start(t),this.setupPointer(t),s._pointerId=dt(t),s._pointerActive=!0,this.computeValues(Ot(t)),this.computeInitial(),n.preventScrollAxis&&Xt(t)!=="mouse"?(s._active=!1,this.setupScrollPrevention(t)):n.delay>0?(this.setupDelayTrigger(t),n.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const n=this.state;n._active=!0,n._preventScroll=!0,n._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const n=this.state,s=this.config;if(!n._pointerActive||n.type===t.type&&t.timeStamp===n.timeStamp)return;const r=dt(t);if(n._pointerId!==void 0&&r!==n._pointerId)return;const i=Ot(t);if(document.pointerLockElement===t.target?n._delta=[t.movementX,t.movementY]:(n._delta=w.sub(i,n._values),this.computeValues(i)),w.addTo(n._movement,n._delta),this.compute(t),n._delayed&&n.intentional){this.timeoutStore.remove("dragDelay"),n.active=!1,this.startPointerDrag(t);return}if(s.preventScrollAxis&&!n._preventScroll)if(n.axis)if(n.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){n._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const n=this.state,s=this.config;if(!n._active||!n._pointerActive)return;const r=dt(t);if(n._pointerId!==void 0&&r!==n._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[i,o]=n._distance;if(n.tap=i<=s.tapsThreshold&&o<=s.tapsThreshold,n.tap&&s.filterTaps)n._force=!0;else{const[c,u]=n.direction,[d,a]=n.velocity,[f,h]=n.movement,[S,g]=s.swipe.velocity,[k,R]=s.swipe.distance,B=s.swipe.duration;n.elapsedTime<B&&(Math.abs(d)>S&&Math.abs(f)>k&&(n.swipe[0]=c),Math.abs(a)>g&&Math.abs(h)>R&&(n.swipe[1]=u))}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const n=this.config,s=n.device;n.pointerLock&&t.currentTarget.requestPointerLock(),n.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,on(t);const n=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",n),this.eventStore.add(this.sharedConfig.window,"touch","cancel",n),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const n=xt[t.key];if(n){const s=this.state,r=t.shiftKey?10:t.altKey?.1:1;this.start(t),s._delta=n(r),s._keyboardActive=!0,w.addTo(s._movement,s._delta),this.compute(t),this.emit()}}keyUp(t){t.key in xt&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const n=this.config.device;t(n,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(n,"change",this.pointerMove.bind(this)),t(n,"end",this.pointerUp.bind(this)),t(n,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function on(e){"persist"in e&&typeof e.persist=="function"&&e.persist()}const et=typeof window<"u"&&window.document&&window.document.createElement;function an(){return et&&"ontouchstart"in window}function Mt(){return an()||et&&window.navigator.maxTouchPoints>1}function cn(){return et&&"onpointerdown"in window}function un(){return et&&"exitPointerLock"in window.document}function fn(){try{return"constructor"in GestureEvent}catch{return!1}}const O={isBrowser:et,gesture:fn(),touch:Mt(),touchscreen:Mt(),pointer:cn(),pointerLock:un()},ln=250,hn=180,dn=.5,pn=50,mn=250,Lt={mouse:0,touch:0,pen:8},gn=m(m({},z),{},{device(e,t,{pointer:{touch:n=!1,lock:s=!1,mouse:r=!1}={}}){return this.pointerLock=s&&O.pointerLock,O.touch&&n?"touch":this.pointerLock?"mouse":O.pointer&&!r?"pointer":O.touch?"touch":"mouse"},preventScrollAxis(e,t,{preventScroll:n}){if(this.preventScrollDelay=typeof n=="number"?n:n||n===void 0&&e?ln:void 0,!(!O.touchscreen||n===!1))return e||(n!==void 0?"y":void 0)},pointerCapture(e,t,{pointer:{capture:n=!0,buttons:s=1,keys:r=!0}={}}){return this.pointerButtons=s,this.keys=r,!this.pointerLock&&this.device==="pointer"&&n},threshold(e,t,{filterTaps:n=!1,tapsThreshold:s=3,axis:r=void 0}){const i=w.toVector(e,n?s:r?1:0);return this.filterTaps=n,this.tapsThreshold=s,i},swipe({velocity:e=dn,distance:t=pn,duration:n=mn}={}){return{velocity:this.transform(w.toVector(e)),distance:this.transform(w.toVector(t)),duration:n}},delay(e=0){switch(e){case!0:return hn;case!1:return 0;default:return e}},axisThreshold(e){return e?m(m({},Lt),e):Lt}});function _n(e){const[t,n]=e.overflow,[s,r]=e._delta,[i,o]=e._direction;(t<0&&s>0&&i<0||t>0&&s<0&&i>0)&&(e._movement[0]=e._movementBound[0]),(n<0&&r>0&&o<0||n>0&&r<0&&o>0)&&(e._movement[1]=e._movementBound[1])}m(m({},Nt),{},{device(e,t,{shared:n,pointer:{touch:s=!1}={}}){if(n.target&&!O.touch&&O.gesture)return"gesture";if(O.touch&&s)return"touch";if(O.touchscreen){if(O.pointer)return"pointer";if(O.touch)return"touch"}},bounds(e,t,{scaleBounds:n={},angleBounds:s={}}){const r=o=>{const c=It(at(n,o),{min:-1/0,max:1/0});return[c.min,c.max]},i=o=>{const c=It(at(s,o),{min:-1/0,max:1/0});return[c.min,c.max]};return typeof n!="function"&&typeof s!="function"?[r(),i()]:o=>[r(o),i(o)]},threshold(e,t,n){return this.lockDirection=n.axis==="lock",w.toVector(e,this.lockDirection?[.1,3]:0)},modifierKey(e){return e===void 0?"ctrlKey":e},pinchOnWheel(e=!0){return e}});m(m({},z),{},{mouseOnly:(e=!0)=>e});class yn extends Gt{constructor(...t){super(...t),T(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const n=this.state;n._delta=Ze(t),w.addTo(n._movement,n._delta),_n(n),this.compute(t),this.emit()}wheelEnd(){!this.state._active||(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const bn=z;m(m({},z),{},{mouseOnly:(e=!0)=>e});const Ft=new Map,mt=new Map;function Zt(e){Ft.set(e.key,e.engine),mt.set(e.key,e.resolver)}const wn={key:"drag",engine:rn,resolver:gn},vn={key:"wheel",engine:yn,resolver:bn};function En(e,t){if(e==null)return{};var n={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Tn(e,t){if(e==null)return{};var n=En(e,t),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],!(t.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,s)||(n[s]=e[s]))}return n}const An={target(e){if(e)return()=>"current"in e?e.current:e},enabled(e=!0){return e},window(e=O.isBrowser?window:void 0){return e},eventOptions({passive:e=!0,capture:t=!1}={}){return{passive:e,capture:t}},transform(e){return e}},Sn=["target","eventOptions","window","enabled","transform"];function ot(e={},t){const n={};for(const[s,r]of Object.entries(t))switch(typeof r){case"function":n[s]=r.call(n,e[s],s,e);break;case"object":n[s]=ot(e[s],r);break;case"boolean":r&&(n[s]=e[s]);break}return n}function Dn(e,t,n={}){const s=e,{target:r,eventOptions:i,window:o,enabled:c,transform:u}=s,d=Tn(s,Sn);if(n.shared=ot({target:r,eventOptions:i,window:o,enabled:c,transform:u},An),t){const a=mt.get(t);n[t]=ot(m({shared:n.shared},d),a)}else for(const a in d){const f=mt.get(a);f&&(n[a]=ot(m({shared:n.shared},d[a]),f))}return n}class qt{constructor(t,n){T(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=n}add(t,n,s,r,i){const o=this._listeners,c=ze(n,s),u=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},d=m(m({},u),i);t.addEventListener(c,r,d);const a=()=>{t.removeEventListener(c,r,d),o.delete(a)};return o.add(a),a}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class On{constructor(){T(this,"_timeouts",new Map)}add(t,n,s=140,...r){this.remove(t),this._timeouts.set(t,window.setTimeout(n,s,...r))}remove(t){const n=this._timeouts.get(t);n&&window.clearTimeout(n)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class kn{constructor(t){T(this,"gestures",new Set),T(this,"_targetEventStore",new qt(this)),T(this,"gestureEventStores",{}),T(this,"gestureTimeoutStores",{}),T(this,"handlers",{}),T(this,"config",{}),T(this,"pointerIds",new Set),T(this,"touchIds",new Set),T(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Pn(this,t)}setEventIds(t){if(ut(t))return this.touchIds=new Set(Fe(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,n){this.handlers=t,this.nativeHandlers=n}applyConfig(t,n){this.config=Dn(t,n,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const n=this.config.shared,s={};let r;if(!(n.target&&(r=n.target(),!r))){if(n.enabled){for(const o of this.gestures){const c=this.config[o],u=Rt(s,c.eventOptions,!!r);if(c.enabled){const d=Ft.get(o);new d(this,t,o).bind(u)}}const i=Rt(s,n.eventOptions,!!r);for(const o in this.nativeHandlers)i(o,"",c=>this.nativeHandlers[o](m(m({},this.state.shared),{},{event:c,args:t})),void 0,!0)}for(const i in s)s[i]=Je(...s[i]);if(!r)return s;for(const i in s){const{device:o,capture:c,passive:u}=Xe(i);this._targetEventStore.add(r,o,"",s[i],{capture:c,passive:u})}}}}function Y(e,t){e.gestures.add(t),e.gestureEventStores[t]=new qt(e,t),e.gestureTimeoutStores[t]=new On}function Pn(e,t){t.drag&&Y(e,"drag"),t.wheel&&Y(e,"wheel"),t.scroll&&Y(e,"scroll"),t.move&&Y(e,"move"),t.pinch&&Y(e,"pinch"),t.hover&&Y(e,"hover")}const Rt=(e,t,n)=>(s,r,i,o={},c=!1)=>{var u,d;const a=(u=o.capture)!==null&&u!==void 0?u:t.capture,f=(d=o.passive)!==null&&d!==void 0?d:t.passive;let h=c?s:Ve(s,r,a);n&&f&&(h+="Passive"),e[h]=e[h]||[],e[h].push(i)};function In(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(n),!0).forEach(function(s){In(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}class Qt{constructor(t,n,s,r,i){this._target=t,this._gestureKey=r,this._ctrl=new kn(n),this._ctrl.applyHandlers(n,i),this._ctrl.applyConfig(rt(rt({},s),{},{target:t}),r),this._ctrl.effect()}destroy(){this._ctrl.clean()}setConfig(t){this._ctrl.clean(),this._ctrl.applyConfig(rt(rt({},t),{},{target:this._target}),this._gestureKey),this._ctrl.effect()}}const Cn=function(t,n,s){return Zt(wn),new Qt(t,{drag:n},s||{},"drag")},xn=function(t,n,s){return Zt(vn),new Qt(t,{wheel:n},s||{},"wheel")};var J=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function Kt(){var e=new J(6);return J!=Float32Array&&(e[1]=0,e[2]=0,e[4]=0,e[5]=0),e[0]=1,e[3]=1,e}function as(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function cs(e,t,n){var s=t[0],r=t[1],i=t[2],o=t[3],c=t[4],u=t[5],d=n[0],a=n[1],f=n[2],h=n[3],S=n[4],g=n[5];return e[0]=s*d+i*a,e[1]=r*d+o*a,e[2]=s*f+i*h,e[3]=r*f+o*h,e[4]=s*S+i*g+c,e[5]=r*S+o*g+u,e}function Bt(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function ct(){var e=new J(2);return J!=Float32Array&&(e[0]=0,e[1]=0),e}function F(e,t){var n=new J(2);return n[0]=e,n[1]=t,n}function Mn(e,t){return e[0]=t[0],e[1]=t[1],e}function V(e,t,n){return e[0]=t,e[1]=n,e}function jt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function Ln(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function us(e,t,n){var s=t[0],r=t[1];return e[0]=n[0]*s+n[2]*r,e[1]=n[1]*s+n[3]*r,e}function Rn(e,t,n){var s=t[0],r=t[1];return e[0]=n[0]*s+n[2]*r+n[4],e[1]=n[1]*s+n[3]*r+n[5],e}var Ut=Ln;(function(){var e=ct();return function(t,n,s,r,i,o){var c,u;for(n||(n=2),s||(s=0),r?u=Math.min(r*n+s,t.length):u=t.length,c=s;c<u;c+=n)e[0]=t[c],e[1]=t[c+1],i(e,e,o),t[c]=e[0],t[c+1]=e[1];return t}})();var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$={exports:{}},Q={exports:{}};(function(){var e,t,n,s,r,i;typeof performance<"u"&&performance!==null&&performance.now?Q.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(Q.exports=function(){return(e()-r)/1e6},t=process.hrtime,e=function(){var o;return o=t(),o[0]*1e9+o[1]},s=e(),i=process.uptime()*1e9,r=s-i):Date.now?(Q.exports=function(){return Date.now()-n},n=Date.now()):(Q.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(Jt);var Wn=Q.exports,L=typeof window>"u"?Jt:window,it=["moz","webkit"],H="AnimationFrame",X=L["request"+H],tt=L["cancel"+H]||L["cancelRequest"+H];for(var Z=0;!X&&Z<it.length;Z++)X=L[it[Z]+"Request"+H],tt=L[it[Z]+"Cancel"+H]||L[it[Z]+"CancelRequest"+H];if(!X||!tt){var pt=0,Yt=0,j=[],Kn=1e3/60;X=function(e){if(j.length===0){var t=Wn(),n=Math.max(0,Kn-(t-pt));pt=n+t,setTimeout(function(){var s=j.slice(0);j.length=0;for(var r=0;r<s.length;r++)if(!s[r].cancelled)try{s[r].callback(pt)}catch(i){setTimeout(function(){throw i},0)}},Math.round(n))}return j.push({handle:++Yt,callback:e,cancelled:!1}),Yt},tt=function(e){for(var t=0;t<j.length;t++)j[t].handle===e&&(j[t].cancelled=!0)}}$.exports=function(e){return X.call(L,e)};var Bn=$.exports.cancel=function(){tt.apply(L,arguments)};$.exports.polyfill=function(e){e||(e=L),e.requestAnimationFrame=X,e.cancelAnimationFrame=tt};function jn(e){let t,n,s,r,i,o,c,u;const d=e[27].default,a=Se(d,e,e[26],null);return{c(){t=De("div"),n=wt("svg"),s=wt("g"),a&&a.c(),this.h()},l(f){t=Oe(f,"DIV",{class:!0,style:!0});var h=ht(t);n=vt(h,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0,style:!0});var S=ht(n);s=vt(S,"g",{transform:!0});var g=ht(s);a&&a.l(g),g.forEach(nt),S.forEach(nt),h.forEach(nt),this.h()},h(){D(s,"transform",r=`matrix(${e[8](1)},${0},${0},${e[7](1)},${0},${0})`),D(n,"width",e[3]),D(n,"height",e[4]),D(n,"viewBox",i=`${-e[6](0)} ${-e[5](0)} ${e[3]} ${e[4]}`),D(n,"preserveAspectRatio","xMidYMin"),D(n,"style",o=`width: ${e[0]}; height: ${e[1]};`),D(t,"class","scene svelte-1cdr2kz"),K(t,"width",e[12]),K(t,"height",e[11]),K(t,"touch-action",e[2]?"none":"auto"),K(t,"cursor",e[10]?"grabbing":"grab"),ke(()=>e[29].call(t))},m(f,h){Pe(f,t,h),Et(t,n),Et(n,s),a&&a.m(s,null),e[28](t),c=Ie(t,e[29].bind(t)),u=!0},p(f,h){a&&a.p&&(!u||h[0]&67108864)&&Ce(a,d,f,f[26],u?Me(d,f[26],h,null):xe(f[26]),null),(!u||h[0]&384&&r!==(r=`matrix(${f[8](1)},${0},${0},${f[7](1)},${0},${0})`))&&D(s,"transform",r),(!u||h[0]&8)&&D(n,"width",f[3]),(!u||h[0]&16)&&D(n,"height",f[4]),(!u||h[0]&120&&i!==(i=`${-f[6](0)} ${-f[5](0)} ${f[3]} ${f[4]}`))&&D(n,"viewBox",i),(!u||h[0]&3&&o!==(o=`width: ${f[0]}; height: ${f[1]};`))&&D(n,"style",o),(!u||h[0]&4096)&&K(t,"width",f[12]),(!u||h[0]&2048)&&K(t,"height",f[11]),(!u||h[0]&4)&&K(t,"touch-action",f[2]?"none":"auto"),(!u||h[0]&1024)&&K(t,"cursor",f[10]?"grabbing":"grab")},i(f){u||(Le(a,f),u=!0)},o(f){Re(a,f),u=!1},d(f){f&&nt(t),a&&a.d(f),e[28](null),c()}}}const q=ct();function Un(e){if(typeof e.detail=="number"&&e.detail!==0){if(e.detail>0)return-1;if(e.detail<0)return 1}else if(typeof e.wheelDelta=="number"){if(e.wheelDelta<0)return-1;if(e.wheelDelta>0)return 1}}const Yn=v(),Vn=v(),Hn=v(),Xn=v(),zn=v(),Gn=v(),Nn=v(),Fn=v(),Zn=v(),qn=v(),Qn=v(),Jn=v(),$n=v(),ts=v(),es=v(),ns=v(),$t=v();function fs(e){const t=Vt($t);t.push(e),ve(()=>{const n=t.indexOf(e);n!==-1&&t.splice(n,1)})}function ss(e,t,n){let s,r,i,o,c,u,d,a,f,{$$slots:h={},$$scope:S}=t,{width:g=500}=t,{height:k=500}=t,{pan:R=!0}=t,{zoom:B=!0}=t,{zoomAmount:A=1}=t,P=typeof g=="number"?g:500,I=typeof k=="number"?k:500,_=F(A*-.5,A*.5),p=F(A*-.5,A*.5),C=F(0,0),x=F(_[0],p[0]),W=F(_[1],p[1]),M=ct(),G=Kt(),U=Kt();const gt=[];let ft;function _t(l){for(const y of gt)y(l);ft=$.exports(_t)}b($t,gt);const te=b(qn,E(x)),ee=b(Qn,E(W)),ne=b(Jn,E(P)),se=b($n,E(I)),re=b(Yn,E(A)),ie=b(Vn,E(c)),oe=b(Hn,E(u)),ae=b(Xn,E(d)),ce=b(zn,E(a)),ue=b(Gn,E(M)),fe=b(Nn,E(G)),le=b(Fn,E(U)),he=b(Zn,E(f)),de=b(ts,E(i)),pe=b(es,E(o)),me=b(ns,E(C));let N,lt=ct(),yt=!1;function ge(l){if(!R)return;const y=Rn(q,l.movement,U);l.first&&(lt=Mn(lt,C)),y[1]=-y[1],n(17,C=Ut(C,lt,y)),n(10,yt=l.dragging===!0)}function _e(l){if(!B||l.last)return;const y=Un(l.event);y&&(A>=3||y<0)&&(n(15,_=V(_,_[0]+y,_[1]-y)),n(16,p=V(p,p[0]+y,p[1]-y)),n(13,A=Math.min(_[1]-_[0],p[1]-p[0])))}We(()=>{const l=new Cn(N,ge),y=new xn(N,_e);return ft=$.exports(_t),()=>{l.destroy(),y.destroy(),Bn(ft)}});function ye(l){Ke[l?"unshift":"push"](()=>{N=l,n(9,N)})}function be(){P=this.offsetWidth,I=this.offsetHeight,n(3,P),n(4,I)}return e.$$set=l=>{"width"in l&&n(0,g=l.width),"height"in l&&n(1,k=l.height),"pan"in l&&n(2,R=l.pan),"zoom"in l&&n(14,B=l.zoom),"zoomAmount"in l&&n(13,A=l.zoomAmount),"$$scope"in l&&n(26,S=l.$$scope)},e.$$.update=()=>{if(e.$$.dirty[0]&1&&n(12,s=g==="auto"?"100%":`${g}px`),e.$$.dirty[0]&2&&n(11,r=k==="auto"?"100%":`${k}px`),e.$$.dirty[0]&8216){const l=P/I,y=A*.5,we=A*l,bt=we*.5;n(15,_[0]=-bt,_),n(15,_[1]=bt,_),n(16,p[0]=-y,p),n(16,p[1]=y,p)}e.$$.dirty[0]&491520&&n(18,x=jt(x,C,V(q,_[0],p[0]))),e.$$.dirty[0]&753664&&n(19,W=jt(W,C,V(q,_[1],p[1]))),e.$$.dirty[0]&786440&&n(6,i=l=>(l-x[0])/(W[0]-x[0])*P),e.$$.dirty[0]&786448&&n(5,o=l=>(l-x[1])/(W[1]-x[1])*I),e.$$.dirty[0]&1835008&&n(20,M=Ut(M,W,x)),e.$$.dirty[0]&1048584&&n(8,c=l=>l/M[0]*P),e.$$.dirty[0]&1048592&&n(7,u=l=>-l/M[1]*I),e.$$.dirty[0]&1048584&&n(25,d=l=>l/P*M[0]),e.$$.dirty[0]&1048592&&n(24,a=l=>-l/I*M[1]),e.$$.dirty[0]&2097536&&n(21,G=Bt(G,V(q,c(1),u(1)))),e.$$.dirty[0]&54525952&&n(22,U=Bt(U,V(q,d(1),a(1)))),e.$$.dirty[0]&384&&n(23,f=`scale(${c(1)} ${u(1)})`),e.$$.dirty[0]&262144&&te.set(x),e.$$.dirty[0]&524288&&ee.set(W),e.$$.dirty[0]&8&&ne.set(P),e.$$.dirty[0]&16&&se.set(I),e.$$.dirty[0]&8192&&re.set(A),e.$$.dirty[0]&256&&ie.set(c),e.$$.dirty[0]&128&&oe.set(u),e.$$.dirty[0]&33554432&&ae.set(d),e.$$.dirty[0]&16777216&&ce.set(a),e.$$.dirty[0]&1048576&&ue.set(M),e.$$.dirty[0]&2097152&&fe.set(G),e.$$.dirty[0]&4194304&&le.set(U),e.$$.dirty[0]&8388608&&he.set(f),e.$$.dirty[0]&64&&de.set(i),e.$$.dirty[0]&32&&pe.set(o),e.$$.dirty[0]&131072&&me.set(C)},[g,k,R,P,I,o,i,u,c,N,yt,r,s,A,B,_,p,C,x,W,M,G,U,f,a,d,S,h,ye,be]}class ls extends Ee{constructor(t){super(),Te(this,t,ss,jn,Ae,{width:0,height:1,pan:2,zoom:14,zoomAmount:13},null,[-1,-1])}}export{J as A,Cn as D,$n as H,Fn as I,qn as M,ns as O,Nn as P,ls as S,Jn as W,Yn as Z,Vn as a,Hn as b,ct as c,Qn as d,v as e,F as f,os as g,Kt as h,as as i,us as j,Mn as k,jt as l,cs as m,fs as o,V as s,Rn as t};