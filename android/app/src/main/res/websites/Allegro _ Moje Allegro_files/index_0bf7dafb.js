!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://assets.allegrostatic.com/opbox-navigation-layers/",r(r.s=0)}({0:function(e,t,r){e.exports=r("O14P")},O14P:function(e,t,r){"use strict";r.r(t);var i=r("kiQV");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return e.reduce((function(e,r){return Object.assign({},e,n({},r.getAttribute(t),r))}),{})}function s(e){window.opbox&&window.opbox.boxViewsMarker&&window.opbox.boxViewsMarker.recursivelyMarkBoxAsVisible(e)}var o=function(){function e(t){var r,i,o,l,u,d,c=this,y=t.baseNode,g=t.delay,h=void 0===g?150:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"moveIndicator",(function(e){if(c.registryKeys.length){var t=e.getBoundingClientRect().top,r=c.registry[c.registryKeys[0]].trigger.getBoundingClientRect().top;c.indicator.style.top="".concat(t-r,"px")}})),n(this,"showIndicator",(function(){c.indicator.classList.remove(c.hiddenClassName)})),n(this,"hideIndicator",(function(){c.indicator.classList.add(c.hiddenClassName)})),n(this,"showLayer",(function(e){c.registry[e]&&(c.hideAllLayers(),c.showIndicator(),c.registry[e].trigger.classList.add(c.activeTriggerClassName),c.moveIndicator(c.registry[e].trigger),s(c.registry[e].layer))})),n(this,"hideLayer",(function(e){c.registry[e]&&(c.registry[e].trigger.classList.remove(c.activeTriggerClassName),s(c.registry[e].layer))})),n(this,"hideAllLayers",(function(){c.hideIndicator(),c.registryKeys.forEach(c.hideLayer)})),n(this,"handleBaseNodeMouseenter",(function(){clearTimeout(c.deactiveAllGroupsTimeout)})),n(this,"handleBaseNodeMouseleave",(function(){c.deactiveAllGroupsTimeout=setTimeout((function(){c.hideAllLayers()}),c.delay)})),n(this,"handleLinkMouseenter",(function(e){c.showLayerTimeout=setTimeout((function(){c.showLayer(e.target.getAttribute("data-group-id"))}),c.delay)})),n(this,"handleLinkMouseleave",(function(){clearTimeout(c.showLayerTimeout)})),this.baseNode=y,this.dataTriggerAttr="data-group-id",this.dataLayerAttr="data-layer-id",this.delay=h,this.layerAlwaysVisible=!!y.querySelector("[data-layer-always-visible]"),this.showLayerTimeout=null,this.deactiveAllGroupsTimeout=null,this.registry=(i=(r={layersTriggers:Array.from(y.querySelectorAll("[".concat(this.dataTriggerAttr,"]"))),layers:Array.from(y.querySelectorAll("[".concat(this.dataLayerAttr,"]"))),triggersId:this.dataTriggerAttr,layersId:this.dataLayerAttr}).layers,o=r.layersId,l=a(r.layersTriggers,r.triggersId),u=a(i,o),d={},Object.keys(l).forEach((function(e){d[e]={trigger:l[e],layer:u[e]}})),d),this.registryKeys=Object.keys(this.registry),this.indicator=y.querySelector("[data-navigation-layers-indicator]"),this.activeTriggerClassName="_882d6_2ZCw_",this.hiddenClassName="mpof_5r"}var t;return(t=[{key:"onMount",value:function(){var e=this;this.registryKeys.length&&(this.layerAlwaysVisible||(this.baseNode.addEventListener("mouseenter",this.handleBaseNodeMouseenter,!1),this.baseNode.addEventListener("mouseleave",this.handleBaseNodeMouseleave,!1)),this.registryKeys.forEach((function(t){e.registry[t].trigger.addEventListener("mouseenter",e.handleLinkMouseenter,!1),e.registry[t].trigger.addEventListener("mouseleave",e.handleLinkMouseleave,!1)})))}},{key:"onUnmount",value:function(){var e=this;this.registryKeys.length&&(this.layerAlwaysVisible||(this.baseNode.removeEventListener("mouseenter",this.handleBaseNodeMouseenter,!1),this.baseNode.removeEventListener("mouseleave",this.handleBaseNodeMouseleave,!1)),this.registryKeys.forEach((function(t){e.registry[t].trigger.removeEventListener("mouseenter",e.handleLinkMouseenter,!1),e.registry[t].trigger.removeEventListener("mouseleave",e.handleLinkMouseleave,!1)})))}}])&&function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();window.opbox.component.register({prototypeName:"allegro.navigation.layers",clientImplementationVersion:i.a},o)},kiQV:function(e){e.exports=JSON.parse('{"a":"1"}')}}));
//# sourceMappingURL=index_0bf7dafb.js.map