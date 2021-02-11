(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{aVCK:function(e,n,r){"use strict";r.r(n),r.d(n,"bindable",function(){return f}),r.d(n,"usePropertyTypeForBindable",function(){return l}),r.d(n,"createTypedBindable",function(){return d}),r.d(n,"observable",function(){return h}),r.d(n,"usePropertyTypeForObservable",function(){return g}),r.d(n,"createTypedObservable",function(){return v}),r.d(n,"coerceFunctions",function(){return c}),r.d(n,"coerceFunctionMap",function(){return u}),r.d(n,"mapCoerceFunction",function(){return a});var t=r("MP1E"),o=r("hij8"),i=r("qrcG"),c={none:function(e){return e},number:function(e){return Number(e)},string:function(e){return""+e},boolean:function(e){return!!e},booleanAttr:function(e){return!(!e&&""!==e)},date:function(e){if(null==e)return null;var n=new Date(e);return isNaN(n.getTime())?null:n}},u=new Map([[Boolean,"boolean"],[String,"string"],[Date,"date"],[Number,"number"]]);function a(e,n,r){r=r||e.coerce,"string"==typeof n&&"function"==typeof r?(c[n]=r,u.set(e,n)):Object(t.getLogger)("map-coerce-function").warn("Bad attempt at mapping coerce function for type: "+e.name+" to: "+n)}o.c.prototype.setCoerce=function(e){this.coerce="function"==typeof e?e:c[e],void 0===this.coerce&&Object(t.getLogger)("behavior-property-observer").warn("Invalid coerce instruction. Should be either one of "+Object.keys(c)+" or a function.")},o.c.prototype.setValue=function(e){var n=this.currentValue,r=void 0===this.coerce?e:this.coerce(e);n!==r&&(this.oldValue=n,this.currentValue=r,this.publishing&&this.notqueued&&(this.taskQueue.flushing?this.call():(this.notqueued=!1,this.taskQueue.queueMicroTask(this))))},o.d.prototype.createObserver=function(e){var n,r=null,t=this.defaultValue,i=this.changeHandler,c=this.name;if(!this.hasOptions){if(i in e)r="propertyChanged"in e?function(n,r){e[i](n,r),e.propertyChanged(c,n,r)}:function(n,r){return e[i](n,r)};else if("propertyChanged"in e)r=function(n,r){return e.propertyChanged(c,n,r)};else if(null!==i)throw new Error("Change handler "+i+" was specified but not declared on the class.");void 0!==t&&(n="function"==typeof t?t.call(e):t);var u=new o.c(this.owner.taskQueue,e,this.name,r,n);return void 0!==this.coerce&&(u.setCoerce(this.coerce),u.currentValue=u.oldValue=void 0===u.coerce?u.currentValue:u.coerce(n)),u}},o.d.prototype._createDynamicProperty=function(e,n,r,t,i,c){var u,a,s=t+"Changed",f=null;s in e?f="propertyChanged"in e?function(n,r){e[s](n,r),e.propertyChanged(t,n,r)}:function(n,r){return e[s](n,r)}:"propertyChanged"in e&&(f=function(n,r){return e.propertyChanged(t,n,r)}),(u=n[t]=new o.c(this.owner.taskQueue,e,t,f,void 0)).setCoerce(this.coerce),u.currentValue=u.oldValue=void 0===u.coerce?u.currentValue:u.coerce(void 0),Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:u.getValue.bind(u),set:u.setValue.bind(u)}),r&&(u.selfSubscriber=null),"string"==typeof i?(e[t]=i,u.call()):i&&(a={observer:u,binding:i.createBinding(e)},c.push(a)),u.publishing=!0,u.selfSubscriber=f};var s=!1,f=function(e,n,r){var a=function(n,r,a){var f,l=r?n.constructor:n,d=i.c.getOrCreateOwn(i.c.resource,o.i,l);if(r&&((e=e||{}).name=r,void 0===e.coerce&&s&&(f=i.c.getOwn(i.c.propertyType,n,r)))){var p=u.get(f);void 0===p&&Object(t.getLogger)("@bindable decorator").warn("Invalid coerce instruction. Should be either one of "+Object.keys(c)+" or a function."),e.coerce=p||"none"}return new o.d(e).registerWith(l,d,a)};if(!e)return a;if(n){var f=e;return e=void 0,a(f,n,r)}return a};function l(e){s=e}function d(e){return f[e]=function(n,r,t){return void 0===n?f({coerce:e}):void 0===r?((n="string"==typeof n?{name:n}:n).coerce=e,f(n)):f({coerce:e})(n,r,t)}}["string","number","boolean","booleanAttr","date"].forEach(d);var p=Object(t.getLogger)("aurelia-observable-decorator"),b=!1,h=function(e,n,r){function t(e,n,r,t){var o,a,s=void 0===t||"string"==typeof t?void 0:t.coerce;if(s){switch(typeof s){case"string":a=c[s];break;case"function":a=s}void 0===a&&p.warn("Invalid coerce instruction. Should be either one of "+Object.keys(c)+" or a function.")}else b&&(o=i.c.getOwn(i.c.propertyType,e,n))&&void 0===(a=c[u.get(o)])&&p.warn("Unable to find coerce function for type "+o.name+".");var f=void 0===n;f&&(e=e.prototype,n="string"==typeof t?t:t.name);var l="_"+n,d={configurable:!0,enumerable:!1,writable:!0};if(t&&"defaultValue"in t){var h=t.defaultValue;d.value=void 0===a?h:a(h)}var g=t&&t.changeHandler||n+"Changed";if(r){if("function"==typeof r.initializer){h=r.initializer();d.value=void 0===a?h:a(h)}}else r={};if("enumerable"in r||(r.enumerable=!0),delete r.value,delete r.writable,delete r.initializer,Reflect.defineProperty(e,l,d),r.get=function(){return this[l]},r.set=function(e){var r=this[l],t=void 0===a?e:a(e);t!==r&&(this[l]=t,Reflect.defineProperty(this,l,{enumerable:!1}),this[g]&&this[g](t,r,n))},r.get.dependencies=[l],!f)return r;Reflect.defineProperty(e,n,r)}return void 0===n?function(n,r,o){return t(n,r,o,e)}:t(e,n,r)};function g(e){b=!!e}function v(e){return h[e]=function(n,r,t){return void 0===n?h({coerce:e}):void 0===r?((n="string"==typeof n?{name:n}:n).coerce=e,h(n)):h({coerce:e})(n,r,t)}}["string","number","boolean","date"].forEach(v)}}]);
//# sourceMappingURL=vendor.aurelia-typed-observable-plugin~d03cd92b.1b3036822cc6acac9275.bundle.map