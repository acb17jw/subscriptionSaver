!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://assets.allegrostatic.com/opbox-search/",n(n.s=0)}({"+GN7":function(e,t){e.exports="ad3"},0:function(e,t,n){e.exports=n("O14P")},"6MUB":function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(s){var i=encodeURIComponent(r(s))+n;return Array.isArray(e[s])?e[s].map((function(e){return i+encodeURIComponent(r(e))})).join(t):i+encodeURIComponent(r(e[s]))})).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""}},GI1G:function(e){e.exports=JSON.parse('{"a":"https://assets.allegrostatic.com/metrum/icon/arrow-f0934b0f84.svg"}')},O14P:function(e,t,n){"use strict";n.r(t);var r=n("+GN7"),s=n.n(r);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=n("kiQV"),l=n("r8II"),d=n.n(l),h=n("gEZS"),g=n.n(h),f="ALL",p="CATEGORY",v="DEPARTMENT",y="ENDED",m="USER_NAME",k="USERS",S="CHARITY_GOALS",b="CHARITY_GOAL_OFFERS",E="CHARITY_ORGANIZATION",w="CHARITY_ORGANIZATIONS";function _(e){var t=e.completion,n=void 0===t?{}:t;return n.enabled?n.text:""}function I(e){return[k,y,S,w].some((function(t){return t===e}))}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}var N={"pl-PL":{"Kategoria i opcje wyszukiwania":[["",["Kategoria i opcje wyszukiwania"]]],"Wszystkie kategorie":[["",["Wszystkie kategorie"]]],"Zakończone":[["",["Zakończone"]]],"Wszędzie":[["",["Wszędzie"]]],"Użytkownicy":[["",["Użytkownicy"]]],Kategorie:[["",["Kategorie"]]],"Inne opcje":[["",["Inne opcje"]]],"Organizacje charytatywne":[["",["Organizacje charytatywne"]]],"Cele charytatywne":[["",["Cele charytatywne"]]],"szukaj też w opisach ofert":[["",["szukaj też w opisach ofert"]]],"czego szukasz?":[["",["czego szukasz?"]]],szukaj:[["",["szukaj"]]],"OSTATNIE WYSZUKIWANIA":[["",["OSTATNIE WYSZUKIWANIA"]]],"USUŃ":[["",["USUŃ"]]],"PODOBNI UŻYTKOWNICY":[["",["PODOBNI UŻYTKOWNICY"]]],"w ofertach użytkownika":[["",["w ofertach użytkownika"]]],"w nazwach użytkowników":[["",["w nazwach użytkowników"]]],"w ofertach zakończonych":[["",["w ofertach zakończonych"]]],"w celach charytatywnych":[["",["w celach charytatywnych"]]],"w organizacjach charytatywnych":[["",["w organizacjach charytatywnych"]]],"w kategorii >":[["",["w kategorii >"]]],"szukaj wielu":[["",["szukaj wielu"]]]}},x=/({{[^}]+}}|{%[^%}]+%})/g,R=/({{[^}]+}})/g,O=/({%[^%}]+%})/g,T=/({{\s*|\s*}}|{%\s*|\s*%})/g;function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"==typeof e)throw Error("Translation has to be an array");return e.find((function(e){return e[0]===t}))[1]}var z=function(e,t,n){var r=N["pl-PL"][e];if(!r)throw Error('Missing translation for lang "pl-PL" and key "'.concat(e,'"'));return t?function(e,t,n){var r,s=P(e,t.context);return function(e,t,n){if(n){var r=0;return e.split(x).map((function(n){if(n.match(O)){var s=t.formatters[r];if(s)return r+=1,s(n.replace(T,""));throw Error('Missing translation formatter for "'.concat(e,'"'))}return n.match(R)?t[n.replace(T,"")]:n}))}var s=e.match(x),i=0;return s?s.reduce((function(n,r){var s=r.replace(T,"");if(r.match(O)){var a=t.formatters[i];if(a)return i+=1,n.replace(r,a(s));throw Error('Missing translation formatter for "'.concat(e,'"'))}return r.match(R)?n.replace(r,t[s]):n}),e):e}(s=parseInt(t.count,10)>=0?function(e,t){var n=1!=t;return"boolean"!=typeof n?e[n]:e[n?1:0]}(s,t.count):(r=s,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),1!==n.length);r=!0);}catch(e){s=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}return n}}(r)||C(r,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],t,n)}(r,t,n):P(r)[0]},D="NORMAL";function L(e,t){var n=function(e){return e.labelItems.map((function(e){return e.content})).join("").toLowerCase()};return e.findIndex((function(e){return n(e)===n(t)}))}var j={depth:0,componentType:"LABEL",labelItems:[{type:D,content:z("OSTATNIE WYSZUKIWANIA")}]};function H(){var e=[];try{e=JSON.parse(window.localStorage.getItem("recentlySearchedSuggestions"))}catch(e){window.opbox.reportError(e)}return Array.isArray(e)?(e.forEach((function(e,t){e.tracking.index0=t,e.recentlyTypedPhrase=!0})),e):[]}function F(e){var t=e.config,n=(t=void 0===t?{}:t).searchInDescriptionsEnabled,r=void 0!==n&&n,s=e.filters,i=(s=void 0===s?{}:s).checkedFilter,a=(i=void 0===i?{}:i).type;return r&&!I(void 0===a?"":a)}function M(e){var t=e.suggester,n=(t=void 0===t?{}:t).list,r=void 0===n?[]:n,s=t.isExpanded,i=void 0!==s&&s;return(F(e)||r.length>0)&&!i}function q(e){e.phrase&&e.scope&&e.type&&window.opbox.edge.post("/suggest/history",e,{withCredentials:!0})}function G(e){return("USER_NAME"===e.type?e.name:e.id)||null}var U=function(){function e(t,n){var r=this;i(this,e),c(this,"setTracking",(function(e){var t=e.tracking;return r.tracking=t||null,e})),this.data=n,this.baseNode=t,this.emitter=new g.a,this.suggestionsRequestCounter=0,this.tracking=null}return o(e,[{key:"querySuggestions",value:function(e){var t=this,n=e.queryParams,r=l.stringify(n);return window.opbox.edge.get("".concat("/suggest/web/suggestions","?").concat(r),{withCredentials:!0}).then((function(e){return t.emitter.emit("SEARCH_FETCH_COMPLETED"),e}))}},{key:"fetchSuggestions",value:function(e){var t=this,n=e.queryParams,r=e.suggestionsRequestCounter,s=n.phrase;this.querySuggestions({queryParams:n}).then((function(e){return e.data})).then(this.setTracking).then((function(e){var n=e.suggestions,i=t.data.config.newHistoryAPIAvailable?n:function(){var e=H();return e.length?[j].concat(e):[]}().concat(n);t.updateSuggesterList({suggestions:s?n:i,status:200,suggestionsRequestCounter:r})})).catch((function(e){t.updateSuggesterList({suggestions:[],status:e&&e.status?e.status:e,suggestionsRequestCounter:r})}))}},{key:"setPhrase",value:function(e,t,n){if(decodeURIComponent(this.data.search.phrase).trim()!==e.trim()){var r=encodeURIComponent(e.trim());this.data.search.phrase=r,t||(this.data.search.typedPhrase=r,this.updateSuggestions(e)),n||this.emitter.emit("SEARCH_PHRASE_CHANGE",e)}}},{key:"increaseRequestCounter",value:function(){return this.suggestionsRequestCounter+=1,this.suggestionsRequestCounter}},{key:"updateSuggestions",value:function(e){var t=this.increaseRequestCounter(),n=this.data.filters.checkedFilter,r=[p,v,m,y].includes(n.type),s=[p,v].includes(n.type),i=[m].includes(n.type),a=""===e,o=[b,S,E,w].includes(n.type),c=n.type===k;o||this.fetchSuggestions({queryParams:Object.assign({phrase:e,rwd:this.data.config.mobileFeaturesEnabled},r?{scope:n.type.toLowerCase()}:{},r&&s?{"scope-value":n.id}:{},r&&i?{"scope-value":n.name}:{},a?{"prefilled-count":this.data.config.newHistoryAPIAvailable?0:H().length}:{},c?{types:"sellers"}:{}),suggestionsRequestCounter:t})}},{key:"emitFocusOnSearchInput",value:function(){this.emitter.emit("SEARCH_FORCE_FOCUS")}},{key:"changeSuggesterIsExpanded",value:function(e){this.data.suggester.isExpanded=void 0===e?!this.data.suggester.isExpanded:e,this.emitter.emit("SUGGESTER_EXPAND_CHANGE",this.data.suggester.isExpanded)}},{key:"changeSearchInDescription",value:function(e){this.data.searchInDescriptions=void 0===e?!this.data.searchInDescriptions:e,this.emitter.emit("SEARCH_IN_DESCRIPTIONS_CHANGE")}},{key:"setCheckedFilter",value:function(e){this.data.filters.checkedFilter=e}},{key:"changeDisplayedFilter",value:function(e){var t=this.data.filters.list.find((function(t){return t.url===e}));this.data.filters.checkedFilter=t||this.data.filters.list[0],this.setCheckedFilterToDisplay(),this.data.suggester.list=[],this.data.suggester.suggestions=[],this.data.suggester.activeIndex=null,this.data.suggester.isExpanded=!1,I(this.data.filters.checkedFilter.type)&&this.changeSearchInDescription(!1),this.emitter.emit("FILTER_CHANGE")}},{key:"setCheckedFilterToDisplay",value:function(){this.setCheckedFilter(this.data.filters.checkedFilter)}},{key:"markNextSuggestion",value:function(){if(this.data.suggester.suggestions.length){null===this.data.suggester.activeIndex?this.data.suggester.activeIndex=0:this.data.suggester.activeIndex=(this.data.suggester.activeIndex+1)%this.data.suggester.suggestions.length;var e=this.data.suggester.suggestions[this.data.suggester.activeIndex];this.setPhrase(_(e),!0,!1),M(this.data)&&this.changeSuggesterIsExpanded(!0),this.emitter.emit("SUGGESTER_ACTIVE_INDEX_CHANGE",this.data.suggester.activeIndex)}}},{key:"markPrevSuggestion",value:function(){if(this.data.suggester.suggestions.length){null===this.data.suggester.activeIndex||0===this.data.suggester.activeIndex?this.data.suggester.activeIndex=this.data.suggester.suggestions.length-1:this.data.suggester.activeIndex-=1;var e=this.data.suggester.suggestions[this.data.suggester.activeIndex];this.setPhrase(_(e),!0,!1),M(this.data)&&this.changeSuggesterIsExpanded(!0),this.emitter.emit("SUGGESTER_ACTIVE_INDEX_CHANGE",this.data.suggester.activeIndex)}}},{key:"markSuggestion",value:function(e){this.data.suggester.activeIndex=e,this.emitter.emit("SUGGESTER_ACTIVE_INDEX_CHANGE",e)}},{key:"updateSuggesterList",value:function(e){var t,n,r,s,i,a,o=e.suggestions,c=e.status,u=void 0===c?null:c,l=e.changeExpand,d=void 0===l||l,h=e.suggestionsRequestCounter;this.suggestionsRequestCounter<=h&&(this.data.suggester.list=o,this.data.suggester.activeIndex=null,this.data.suggester.suggestions=function(e){return e.filter((function(e){return"LABEL"!==e.componentType}))}(o),this.emitter.emit("SUGGESTER_LIST_CHANGE",u),d&&(M(this.data)?this.changeSuggesterIsExpanded(!0):(s=void 0===(r=(n=void 0===(n=(t=this.data).suggester)?{}:n).list)?[]:r,a=void 0!==(i=n.isExpanded)&&i,!F(t)&&0===s.length&&a&&this.changeSuggesterIsExpanded(!1))))}},{key:"checkDisplayModalAfterClick",value:function(){var e=this.data.config.displayModalAfterClick&&!this.data.config.displayModalAfterClickClicked;return e&&(this.data.config.displayModalAfterClickClicked=!0,window.opbox.preferences.set("multisearchDisplayModalAfterClick",!0)),e}},{key:"buildAndSendSuggestionToHistoryAPI",value:function(e){if(this.data.config.newHistoryAPIAvailable){var t=this.data.filters.checkedFilter;q({type:"PHRASE",objectId:null,scope:t.type,phrase:decodeURIComponent(e),scopeValue:G(t)})}}},{key:"sendSuggestionToHistoryAPI",value:function(e){if(e.history&&e.history.save&&this.data.config.newHistoryAPIAvailable){var t=this.data.filters.checkedFilter,n={type:e.suggestionType,phrase:e.history.suggestedText,objectId:e.objectId||null};if(e.recentlyTypedPhrase){if(!e._scope)return;n.scope=e._scope.type,n.scopeValue=G(e._scope)}else n.scope=t.type,n.scopeValue=G(t);q(n)}}}]),e}(),Y="search-input";function B(e){return'[data-role="'.concat(e,'"]')}function K(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(B).join()}var V=["p","us_id","string","description","show-raty0-disclaimer","fromCart"];function W(e,t){var n=new window.URL(window.location.href),r=e.includes(n.pathname)&&!e.includes("/listing"),s=d.a.parse([d.a.stringify(t),r?n.search.replace("?",""):""].filter(Boolean).join("&"));return V.forEach((function(e){delete s[e]})),Object.keys(s).forEach((function(e){var t;Array.isArray(s[e])&&(s[e]=(t=s[e]).filter((function(e,n){return t.indexOf(e)===n})))})),s}var $=function(){function e(t,n){i(this,e),this.baseNode=t,this.store=n}return o(e,[{key:"redirectPageFromSuggestion",value:function(e){var t,n,r,s,i,a,o,c=(n=(t={suggestion:e,searchInDescriptions:this.store.data.searchInDescriptions,additionalParams:this.store.data.search.additionalParams}).additionalParams,r=t.searchInDescriptions,i=W(s=t.suggestion.path,n),a=d.a.stringify(Object.assign(r?{description:1}:{},i)),o=s.includes("?")?"&":"?","".concat(s).concat(a?o:"").concat(a));document.location.assign(c)}},{key:"redirectPageFromScope",value:function(){var e,t,n,r,s,i,a,o,c,u,l=(n=(e={phrase:this.baseNode.querySelector(K(Y)).value.trim(),scope:this.store.data.filters.checkedFilter,searchInDescriptions:this.store.data.searchInDescriptions,additionalParams:this.store.data.search.additionalParams}).phrase,r=e.additionalParams,s=e.searchInDescriptions,a=W(i=(t=e.scope).url||"/uzytkownik/".concat(n),r),o=n&&t.type!==k,c=d.a.stringify(Object.assign(o?{string:n}:{},s?{description:1}:{},a)),u=i.includes("?")?"&":"?","".concat(i).concat(c?u:"").concat(c));document.location.assign(l)}},{key:"submit",value:function(e){e.preventDefault();var t=this.store.data.suggester,n=t.activeIndex,r=t.suggestions,s=this.baseNode.querySelector(K(Y)),i=this.store.data.search.phrase.trim();if(s&&!this.store.data.search.phrase&&(i=s.value.trim()),"number"==typeof n&&"submit"!==e.target.type){var a=r[n];this.store.sendSuggestionToHistoryAPI(a),function(e,t){if(!e.history||!1!==e.history.save){var n=H(),r=Object.assign({depth:1,_scope:t},e,{labelItems:e.labelItems.map((function(e){return"STRONG"===e.type?{type:D,content:e.content}:e}))});e.tracking.type===k&&(r.labelItems.some((function(e){return e.content.includes("w nazwach użytkowników")}))||r.labelItems.push({type:"SECONDARY",content:" w nazwach użytkowników"})),/\/uzytkownik\/.+(\/|\?)/.test(e.path)&&(r.labelItems.some((function(e){return e.content.includes("w ofertach użytkownika")}))||r.labelItems.push({type:"SECONDARY",content:' w ofertach użytkownika "'.concat(t.name,'"')})),/\/zakonczone(\/|\?)/.test(e.path)&&(r.labelItems.some((function(e){return e.content.includes("w ofertach zakończonych")}))||r.labelItems.push({type:"SECONDARY",content:" w ofertach zakończonych"}));var s=L(n,r);0!==s&&window.localStorage.setItem("recentlySearchedSuggestions",JSON.stringify([r].concat(n.filter((function(e,t){return t!==s}))).slice(0,5)))}}(a,this.store.data.filters.checkedFilter),this.redirectPageFromSuggestion(a)}else{if(!i&&[f,v,y,k].includes(this.store.data.filters.checkedFilter.type))return;this.store.buildAndSendSuggestionToHistoryAPI(i),function(e){var t=e.phrase,n=e.category;if(t){var r=H(),s=function(e){return e.type===m?' w ofertach użytkownika "'.concat(e.name,'"'):e.type===y?" w ofertach zakończonych":e.type===k?" w nazwach użytkowników":e.type===S?" w celach charytatywnych":e.type===w?" w organizacjach charytatywnych":e.type===b?" w ofertach charytatywnych":e.type===E?' w organizacji "'.concat(e.name,'"'):e.type!==f?" w kategorii > ":""}(n),i=function(e){return[m,k,f,y,b,S,E,w].includes(e.type)?"":e.name}(n),a={_scope:n,suggestionType:n.type,path:n.type===k?"/uzytkownik/".concat(t):"".concat(n.url,"?string=").concat(t),depth:1,completion:{enabled:!0,text:decodeURIComponent(t)},history:{save:!0,suggestedText:decodeURIComponent(t)},componentType:"SUGGESTION",tracking:{type:n.type,categoryId:n.id},labelItems:[{type:D,content:decodeURIComponent(t)},s&&{type:"SECONDARY",content:s},i&&{type:"PRIMARY",content:i}].filter(Boolean)},o=L(r,a);0!==o&&window.localStorage.setItem("recentlySearchedSuggestions",JSON.stringify([a].concat(r.filter((function(e,t){return t!==o}))).slice(0,5)))}}({phrase:i,category:this.store.data.filters.checkedFilter}),this.redirectPageFromScope()}}},{key:"changePhrase",value:function(e){this.baseNode.querySelector(K(Y)).value=e}},{key:"changeSearchInDescriptions",value:function(){var e=this.baseNode.querySelector(K("search-in-description"));e&&(e.checked=this.store.data.searchInDescriptions)}}]),e}();function Q(e){return{types:e.reduce((function(e,t){var n=t.recentlyTypedPhrase?"recently-typed--".concat(t.tracking.type).toLowerCase():t.tracking.type;return e[n]?e[n]+=1:e[n]=1,e}),{}),count:e.length}}function Z(e){var t=e.find((function(e){return"AD"===e.tracking.type}));return t?t.tracking.campaignId:null}function J(e){return e.code||e.type}var X=function(){function e(t,n){i(this,e),this.baseNode=t,this.store=n}return o(e,[{key:"sendEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.baseNode.querySelector(K(Y));window.opbox.analytics.sendEvent(r,e,t,n)}},{key:"sendBoxInteractionEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.baseNode.querySelector(K(Y));window.opbox.analytics.sendBoxInteractionEvent({contextNode:r,label:e,value:t,customParams:n})}},{key:"sendLayerViewEvent",value:function(e){if(e){var t={searchPhrase:this.store.data.search.phrase};this.sendEvent("suggestLayerView",1,t)}}},{key:"sendSuggestsShowEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.store.data.search.phrase,n="suggestionsShow",r=Object.assign({status:e,searchPhrase:decodeURIComponent(t),suggestions:Q(this.store.data.suggester.suggestions),scope:J(this.store.data.filters.checkedFilter)},this.store.tracking),s=Z(this.store.data.suggester.suggestions);s&&(r.campaignId=s),this.sendEvent(n,t,r)}},{key:"sendClickEvent",value:function(e,t){var n=t.tracking,r=(n.type,function(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(n,["type"])),s=_(t),i=t.recentlyTypedPhrase?"recently-typed--".concat(t.tracking.type).toLowerCase():t.tracking.type,a=this.store.data.search.typedPhrase?decodeURIComponent(this.store.data.search.typedPhrase):null,o=Object.assign({typedPhrase:a,searchPhrase:s,type:i},r,this.store.tracking);this.sendEvent(e,s,o)}},{key:"sendRemoveRecentlySearchedSuggestionEvent",value:function(e,t){var n=e.tracking.type,r=_(e),s={index0:t,details:Object.assign({phrase:r},e.tracking)};this.sendBoxInteractionEvent("suggestionRemoveClick",n,s)}}]),e}(),ee=function(){function e(t,n,r,s){i(this,e),this.baseNode=t,this.store=n,this.searchForm=r,this.cookieMonster=s}return o(e,[{key:"toggleRemoveQuery",value:function(){var e=this.baseNode.querySelector(K("remove-query"));e&&(""===this.store.data.search.phrase?"mpof_z0".split(" ").forEach((function(t){return e.classList.remove(t)})):"mpof_z0".split(" ").forEach((function(t){return e.classList.add(t)})))}},{key:"handleSearchChange",value:function(e){var t=e.currentTarget.value;this.store.data.search.phrase!==t&&this.store.setPhrase(t,!1,!0),this.toggleRemoveQuery()}},{key:"handleRemoveQueryClick",value:function(e){e.preventDefault(),this.store.setPhrase(""),this.toggleRemoveQuery(),this.setFocusOnInput()}},{key:"prepareSendHintClickEvent",value:function(){null!==this.store.data.suggester.activeIndex&&this.cookieMonster.sendClickEvent("suggestHintClick",this.store.data.suggester.suggestions[this.store.data.suggester.activeIndex])}},{key:"handleEscapeKeyDown",value:function(e){"Escape"===e.key&&this.store.changeSuggesterIsExpanded(!1)}},{key:"handleKeyDown",value:function(e){switch(e.key){case"ArrowDown":this.store.markNextSuggestion();break;case"ArrowUp":this.store.markPrevSuggestion();break;case"Enter":this.prepareSendHintClickEvent(),this.searchForm.submit(e);break;case"Escape":case"Tab":return void this.store.changeSuggesterIsExpanded(!1);default:return void this.store.setCheckedFilterToDisplay()}e.preventDefault()}},{key:"setFocusOnInput",value:function(){this.baseNode.querySelector(K(Y)).focus()}}]),e}(),te="mp7g_oh mpof_ki mg9e_8 mj7a_8 mvrt_16 mj9z_5r mgmw_og _d25db_3IvOG";function ne(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function re(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=re(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var se=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=re(e))&&(r&&(r+=" "),r+=t);return r};function ie(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ae,oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},ce=RegExp(Object.keys(oe).join("|"),"g"),ue=function(e){return oe[e]},le=function(e){return(e+"").replace(ce,ue)},de=function(e){if(e instanceof he)return e;if(Array.isArray(e)){for(var t="",n=e.length,r=0;r<n;r++)t+=e[r]instanceof he?e[r]:le(e[r]);return t}return le(e)},he=function(){function e(t,n){i(this,e),this.$p=t,this.$s=n}return o(e,[{key:"toString",value:function(){for(var e=this.$p[0],t=this.$s.length,n=0;n<t;n++)e+=de(this.$s[n])+this.$p[n+1];return e}}]),e}(),ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return e.length?new he([""].concat(ie(Array(e.length-1).fill(t)),[""]),e):""},fe=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new he(e,n)};function pe(){var e=ne(["",'="','"']);return pe=function(){return e},e}function ve(){var e=ne(["",""]);return ve=function(){return e},e}function ye(e,t){var n=t.name,r=t.value;return r?e.push(fe(pe(),n,r)):e.push(fe(ve(),n)),e}function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return ge(e.filter(Boolean).reduce(ye,[])," ")}function ke(){var e=ne(['<span data-type="','" class="','">',"</span>"]);return ke=function(){return e},e}function Se(){var e=ne(['<span data-type="','" class="','">',"</span>"]);return Se=function(){return e},e}function be(){var e=ne(['<span data-type="','" class="','">',"</span>"]);return be=function(){return e},e}function Ee(){var e=ne(['<span data-type="','">',"</span>"]);return Ee=function(){return e},e}var we,_e=(c(ae={},"NORMAL",(function(e){var t=e.content,n=e.type;return fe(Ee(),n,t)})),c(ae,"STRONG",(function(e){var t=e.content,n=e.type;return fe(be(),n,"m9qz_yr",t)})),c(ae,"PRIMARY",(function(e){var t=e.content,n=e.type;return fe(Se(),n,"mgmw_s9",t)})),c(ae,"SECONDARY",(function(e){var t=e.content,n=e.type;return fe(ke(),n,"mgmw_vr",t)})),ae);function Ie(e){return _e[e.type](e)}function Ae(){var e=ne(['<a role="option" href="','" data-index="','" class="','" id="suggestion-','" style="padding-left: ','px" data-role="','" ','><img alt="','" src="','" class="','"><div class="','"><div>',"</div>","</div>","</a>"]);return Ae=function(){return e},e}function Ce(){var e=ne(["<div>","</div>"]);return Ce=function(){return e},e}function Ne(){var e=ne(['<a role="option" href="','" data-index="','" class="','" id="suggestion-','" data-role="','" ',' style="padding-left: ','px"><div class="','">',"</div>","</a>"]);return Ne=function(){return e},e}function xe(){var e=ne(['<div data-role="','" ',' class="','" style="padding-left: ','px"><div class="','">',"</div></div>"]);return xe=function(){return e},e}var Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 8*e+8},Oe=(c(we={},"LABEL",(function(e){var t=e.depth,n=e.labelItems,r=e.recentlyTypedPhrase,s=void 0!==r&&r;return fe(xe(),"label",s?"data-recently-typed-suggestion":"","mp7g_oh mpof_ki mg9e_8 mj7a_8 mvrt_16 mj9z_5r mgmw_og",Re(t),"meqh_en _d25db_28vwO",n.map(Ie))})),c(we,"SUGGESTION",(function(e,t){var n=e.path,r=e.depth,s=e.position,i=e.labelItems,a=e.completion,o=void 0===a?{}:a,c=e.recentlyTypedPhrase,u=void 0!==c&&c,l=t.removeSuggestionButtonMarkup,d=t.rewriteSuggestionButtonMarkup,h=o.enabled&&o.text,g=(u?l:"")||(h?d:"");return fe(Ne(),n,s,te,s,"suggestion",u?"data-recently-typed-suggestion":"",Re(r),"meqh_en _d25db_28vwO",i.map(Ie),g)})),c(we,"SUGGESTION_WITH_IMAGE",(function(e,t){var n=e.path,r=e.image,s=e.depth,i=e.position,a=e.labelItems,o=e.suggesionType,c=e.sublabelItems,u=void 0===c?[]:c,l=e.recentlyTypedPhrase,d=void 0!==l&&l,h=t.removeSuggestionButtonMarkup,g=u.length?fe(Ce(),u.map(Ie)):"",f="AD"!==o;return fe(Ae(),n,i,te,i,Re(s),"suggestion-with-image",d?"data-recently-typed-suggestion":"",r.alt,r.source,se("m3h2_8",f&&"_d25db_eCMuA"),"m7er_k4",a.map(Ie),g,d?h:"")})),we);function Te(){var e=ne(['<div class="','">',"<input ","><label ",">","</label></div>"]);return Te=function(){return e},e}function Pe(){var e=ne(['<hr class="','">']);return Pe=function(){return e},e}var ze=fe(Pe(),"_d7szm");function De(){var e=ne(['<button aria-hidden="true" class="','" data-role="','">',"</button>"]);return De=function(){return e},e}var Le=n("GI1G");function je(){var e=ne(['<button aria-hidden="true" class="','" data-role="','"><img class="','" src="','" alt=""></button>']);return je=function(){return e},e}function He(){var e=ne(["<div ",">"," ","</div>"]);return He=function(){return e},e}var Fe=function(){function e(t,n,r){i(this,e),this.baseNode=t,this.store=n,this.searchInDescriptionsListeners=r}return o(e,[{key:"toggleSuggester",value:function(e){var t=this.baseNode.querySelector(K("suggester")),n=this.baseNode.querySelector(K(Y));t&&(e?t.classList.add("_d25db_3Rp9D"):(n.removeAttribute("aria-activedescendant"),t.classList.remove("_d25db_3Rp9D"),t.classList.remove("_d25db_1KbtF")))}},{key:"updateSuggesterList",value:function(){var e=this.baseNode.querySelector(K("suggester"));e&&e.parentNode.removeChild(e),this.baseNode.querySelector(K(Y)).insertAdjacentHTML("afterend",function(e){var t=e.suggester,n=t.list,r=t.isExpanded,s=e.config,i=(s=void 0===s?{}:s).newHistoryAPIAvailable;if(!n.length&&!e.config.searchInDescriptionsEnabled)return"";var a,o,c=se("mp7g_f6 mj7u_0 mjb5_w6 mpof_5r mjyo_6x mx7m_1 m7er_k4 mefy_co mnyp_co mdwl_co m911_5r mlkp_ag mtag_2 mm2b_2 msts_9u _d25db_1CZnD",r&&"_d25db_3Rp9D",!n.length&&r&&"_d25db_1KbtF"),u=function(e){return e?"":fe(De(),"mx4z_5x mli2_0 mzmg_f9 mse2_56 mqu1_21 mg9e_0 mvrt_0 mj7a_0 mh36_0 munh_8 _13q9y _8hkto _d25db_V7yEW","remove-recently-searched",z("USUŃ"))}(i),l=function(e){return e.config.mobileFeaturesEnabled?fe(je(),"mp7g_f6 mq1m_0 mse2_k4 mg9e_0 mvrt_0 mj7a_0 mh36_0 m911_5r mefy_5r mnyp_5r mdwl_5r msts_n7 _d25db_8oNkD","rewrite-recently-searched","mjyo_6x mse2_40 meqh_en msa3_z4 m0s5_e6 mg9e_4 mvrt_4 mj7a_4 mh36_4 isflp _d25db_3Q4rc",Le.a):""}(e),d=[{name:"role",value:"listbox"},{name:"id",value:"suggestions-listbox"},{name:"class",value:c},{name:"data-role",value:"suggester"}];return fe(He(),me(d),n.map((o=-1,function(e){return"LABEL"===e.componentType?e:Object.assign({},e,{position:o+=1})})).map((a={removeSuggestionButtonMarkup:u,rewriteSuggestionButtonMarkup:l},function(e){return Oe[e.componentType](e,a)})),function(e){var t=e.config.searchInDescriptionsEnabled,n=e.suggester,r=(n=void 0===n?{}:n).list,s=void 0===r?[]:r,i=e.filters,a=(i=void 0===i?{}:i).checkedFilter,o=(a=void 0===a?{}:a).type,c=void 0===o?"":o,u=e.searchInDescriptions;if(!t||I(c))return"";var l=0!==s.length,d=[{name:"class",value:"_1wmuz _con24 _11cms"},{name:"type",value:"checkbox"},{name:"data-role",value:"search-in-description"},{name:"autocomplete",value:"off"},u&&{name:"checked"}];return fe(Te(),"mpof_5r mpof_z0_s",l?ze:"",me(d),me([{name:"class",value:"_u2xi2 munh_8"},{name:"data-role",value:"search-in-description-label"}]),z("szukaj też w opisach ofert"))}(e))}(this.store.data)),this.searchInDescriptionsListeners.initialize(),this.store.emitter.emit("SUGGESTER_PAINT_COMPLETED")}},{key:"markActiveSuggestion",value:function(e){var t=this.baseNode.querySelector(K(Y)),n=Array.from(this.baseNode.querySelectorAll(K("suggestion","suggestion-with-image"))),r=n.find((function(e){return e.getAttribute("aria-selected")}));r&&r.removeAttribute("aria-selected"),n[e]&&(n[e].setAttribute("aria-selected","true"),t.setAttribute("aria-activedescendant","suggestion-".concat(e)))}}]),e}();function Me(){var e=ne(["",""]);return Me=function(){return e},e}function qe(){var e=ne(['<span class="','">','</span><span class="','">',"</span>"]);return qe=function(){return e},e}var Ge=function(e,t,n){return Array.from(n.querySelectorAll(t)).some((function(t){return t.contains(e)}))},Ue=function(){function e(t,n,r){i(this,e),this.store=t,this.searchForm=n,this.cookieMonster=r}return o(e,[{key:"handleSuggesterClick",value:function(){this.store.data.suggester.suggestions.length>0?this.store.changeSuggesterIsExpanded():this.store.updateSuggestions(decodeURIComponent(this.store.data.search.phrase))}},{key:"hideSuggester",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;t&&(t.getAttribute("data-role")===Y||Ge(t,K("suggester"),this.searchForm.baseNode)||this.store.changeSuggesterIsExpanded(!1))}},{key:"handleSuggestionClick",value:function(e){var t=e.currentTarget.dataset.index,n=this.store.data.suggester.suggestions[t];this.store.markSuggestion(parseInt(t,10)),this.searchForm.submit(e),this.cookieMonster.sendClickEvent("suggestHintClick",n,t)}},{key:"handleSuggestionMouseover",value:function(e){var t=e.currentTarget.dataset.index;this.store.markSuggestion(parseInt(t,10))}},{key:"removeRecentlySearchedSuggestionFromView",value:function(e){e.stopPropagation(),e.preventDefault();var t,n=e.currentTarget.parentNode.dataset.index,r=this.store.data.suggester.suggestions[n];this.cookieMonster.sendRemoveRecentlySearchedSuggestionEvent(r,n),t=parseInt(n,10),window.localStorage.setItem("recentlySearchedSuggestions",JSON.stringify(H().filter((function(e,n){return n!==t})))),this.store.updateSuggestions(decodeURIComponent(this.store.data.search.phrase)),this.store.emitFocusOnSearchInput()}},{key:"rewriteTypedPhrase",value:function(e){e.stopPropagation(),e.preventDefault();var t=e.currentTarget.parentNode.dataset.index,n=this.store.data.suggester.suggestions[t],r=_(n);this.cookieMonster.sendClickEvent("suggestRewriteClick",n),this.store.setPhrase(r),this.store.emitFocusOnSearchInput()}}]),e}(),Ye=function(){function e(t,n,r){var s=this;i(this,e),c(this,"toggleSearchInDescriptions",(function(e){var t=e.target.previousSibling;s.store.changeSearchInDescription(!t.checked),s.cookieMonster.sendEvent("searchInDescriptionChange",s.store.data.searchInDescriptions)})),this.baseNode=t,this.store=n,this.cookieMonster=r}return o(e,[{key:"initialize",value:function(){var e=this,t=this.baseNode.querySelector(K("search-in-description-label"));t&&t.addEventListener("click",(function(t){e.toggleSearchInDescriptions(t)}))}}]),e}(),Be=function(){function e(t){var n=this,r=t.baseNode,s=t.props,a=void 0===s?{}:s;i(this,e),c(this,"onUpdate",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.phrase,r=void 0===t?"":t,s=e.includeDescription;n.store.data.search.phrase!==r&&n.store.setPhrase(r,!0),n.store.data.searchInDescriptions!==s&&n.store.changeSearchInDescription(s),""===r&&(n.store.changeSuggesterIsExpanded(!1),n.searchHandlers.toggleRemoveQuery())})),this.baseNode=r,this.store=new U(r,a),this.enableCustomPerformanceMarks=a.enableCustomPerformanceMarks||!1,this.cookieMonster=new X(this.baseNode,this.store),this.searchInDescriptionsListeners=new Ye(this.baseNode,this.store,this.cookieMonster),this.suggester=new Fe(this.baseNode,this.store,this.searchInDescriptionsListeners),this.searchForm=new $(this.baseNode,this.store),this.suggesterHandlers=new Ue(this.store,this.searchForm,this.cookieMonster),this.searchHandlers=new ee(this.baseNode,this.store,this.searchForm,this.cookieMonster)}return o(e,[{key:"onMount",value:function(){var e;(function(e){function t(){var t=e.baseNode.querySelectorAll(K("suggestion","suggestion-with-image")),n=e.baseNode.querySelectorAll(K("remove-recently-searched")),r=e.baseNode.querySelectorAll(K("rewrite-recently-searched"));t.forEach((function(t){t.addEventListener("click",(function(t){e.suggesterHandlers.handleSuggestionClick(t)}))})),n.forEach((function(t){t.addEventListener("click",(function(t){e.suggesterHandlers.removeRecentlySearchedSuggestionFromView(t)}))})),r.forEach((function(t){t.addEventListener("click",(function(t){e.suggesterHandlers.rewriteTypedPhrase(t)}))}))}return{initialize:function(){t(),e.store.emitter.on("SUGGESTER_EXPAND_CHANGE",(function(t){e.suggester.toggleSuggester(t),e.cookieMonster.sendLayerViewEvent(t)})),e.store.emitter.on("SUGGESTER_LIST_CHANGE",(function(n){e.suggester.updateSuggesterList(),e.cookieMonster.sendSuggestsShowEvent(n),t()})),e.store.emitter.on("SUGGESTER_ACTIVE_INDEX_CHANGE",(function(t){e.suggester.markActiveSuggestion(t)}))}}})(this).initialize(),function(e){return{initialize:function(){e.baseNode.querySelector(K("filters-dropdown-toggle")).addEventListener("change",(function(t){e.store.changeDisplayedFilter(t.target.value)})),e.store.emitter.on("FILTER_CHANGE",(function(){!function(){var t=e.store.data.filters.checkedFilter.name;e.cookieMonster.sendEvent("filterChange",t);var n,r=e.baseNode.querySelector("span".concat(K("filters-selected-option")));r&&(r.innerHTML=(n=t)?z("Wszystkie kategorie")===n?fe(qe(),"mpof_z0 mpof_5r_x",z("Wszędzie"),"mpof_5r mpof_z0_x",n):fe(Me(),n):"")}()}))}}}(this).initialize(),(e=this,{initialize:function(){var t,n,r;t=e.baseNode.querySelector(K("remove-query")),n=e.baseNode.querySelector(K(Y)),r=e.baseNode.querySelector(K("search-button")),t&&t.addEventListener("click",(function(t){e.searchHandlers.handleRemoveQueryClick(t)})),n.addEventListener("click",(function(){e.suggesterHandlers.handleSuggesterClick(),e.searchHandlers.toggleRemoveQuery()})),n.addEventListener("input",(function(t){e.searchHandlers.handleSearchChange(t)})),n.addEventListener("keydown",(function(t){e.searchHandlers.handleKeyDown(t)})),r.addEventListener("click",(function(t){e.searchForm.submit(t)})),e.baseNode.addEventListener("keydown",(function(t){e.searchHandlers.handleEscapeKeyDown(t)})),document.addEventListener("click",(function(t){e.suggesterHandlers.hideSuggester(t)})),e.store.emitter.on("SEARCH_FORCE_FOCUS",(function(){e.searchHandlers.setFocusOnInput()})),e.store.emitter.on("SEARCH_PHRASE_CHANGE",(function(t){e.searchForm.changePhrase(t)})),e.store.emitter.on("SEARCH_IN_DESCRIPTIONS_CHANGE",(function(){e.searchForm.changeSearchInDescriptions()}))}}).initialize(),function(e){function t(){var t=document.createEvent("CustomEvent");t.initCustomEvent("multisearch-modal",!0,!0,{phrase:e.store.data.search.phrase}),window.dispatchEvent(t)}return{initialize:function(){var n,r,s;n=e.baseNode.querySelector(K(Y)),r=e.baseNode.querySelector(K("multisearch-button")),s=e.baseNode.querySelector(K("multisearch-button-wrapper")),r&&r.addEventListener("click",t),n.addEventListener("click",(function(){e.store.checkDisplayModalAfterClick()&&(t(),e.cookieMonster.sendEvent("modalDisplayAfterClick","1"))})),s&&n.addEventListener("input",(function(){e.store.data.search.phrase.length?function(e){e.classList.add("mpof_5r"),e.classList.remove("mpof_z0_l")}(s):function(e){e.classList.remove("mpof_5r"),e.classList.add("mpof_z0_l")}(s)}))}}}(this).initialize(),this.enableCustomPerformanceMarks&&function(e){var t=e.baseNode.querySelector(K(Y)),n=function(){return performance.mark("searchSuggestBackendResponse")},r=function(){return performance.mark("searchSuggestSuggestionRendered")},s=function s(){e.store.emitter.once("SEARCH_FETCH_COMPLETED",n),e.store.emitter.once("SUGGESTER_PAINT_COMPLETED",r),t.removeEventListener("input",s),performance.mark("searchFirstCharacterTyped")};return{initialize:function(){t.addEventListener("input",s)}}}(this).initialize(),window.opbox.performance.markTimeToInteractive(u.a)}}]),e}();window.opbox.component.register({prototypeName:"allegro.metrumHeader.search",clientImplementationVersion:s.a},Be)},YcCt:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,s){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;var a=/\+/g;e=e.split(t);var o=1e3;s&&"number"==typeof s.maxKeys&&(o=s.maxKeys);var c=e.length;o>0&&c>o&&(c=o);for(var u=0;u<c;++u){var l,d,h,g,f=e[u].replace(a,"%20"),p=f.indexOf(n);p>=0?(l=f.substr(0,p),d=f.substr(p+1)):(l=f,d=""),h=decodeURIComponent(l),g=decodeURIComponent(d),r(i,h)?Array.isArray(i[h])?i[h].push(g):i[h]=[i[h],g]:i[h]=g}return i}},gEZS:function(e,t){var n=Array.prototype.slice;function r(e){return"function"==typeof e}function s(e){if(!r(e))throw TypeError("Invalid listener")}function i(e,t,r){switch(r.length){case 1:t.call(e);break;case 2:t.call(e,r[1]);break;case 3:t.call(e,r[1],r[2]);break;default:t.apply(e,n.call(r,1))}}function a(e,t,n,i){s(n);var a=e.$e||(e.$e={}),o=a[t];return o?r(o)?a[t]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n):a[t]=n,e}function o(){this.$e=this.$e||{}}o.EventEmitter=o,o.prototype={$e:null,emit:function(e){var t=arguments,s=this.$e;if(s){var a=s&&s[e];if(!a){if("error"===e){var o=t[1];if(!(o instanceof Error)){var c=o;(o=Error("Error: "+c)).context=c}throw o}return!1}if(r(a))i(this,a,t);else for(var u=0,l=(a=n.call(a)).length;u<l;u++){var d=a[u];i(this,d,t)}return!0}},on:function(e,t){return a(this,e,t,!1)},prependListener:function(e,t){return a(this,e,t,!0)},once:function(e,t){return s(t),this.on(e,(function n(){this.removeListener(e,n),t&&(t.apply(this,arguments),t=null)})),this},removeListener:function(e,t){s(t);var n,i=this.$e;if(i&&(n=i[e]))if(r(n))n===t&&delete i[e];else for(var a=n.length-1;a>=0;a--)n[a]===t&&n.splice(a,1);return this},removeAllListeners:function(e){var t=this.$e;t&&delete t[e]},listenerCount:function(e){var t=this.$e,n=t&&t[e];return n?r(n)?1:n.length:0}},e.exports=o},kiQV:function(e){e.exports=JSON.parse('{"a":"opbox-search"}')},r8II:function(e,t,n){"use strict";t.decode=t.parse=n("YcCt"),t.encode=t.stringify=n("6MUB")}}));
//# sourceMappingURL=index-pl-PL_62b58465.js.map