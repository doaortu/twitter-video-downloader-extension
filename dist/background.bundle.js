(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseURL="https://twitter.com/i/api/2/timeline/conversation/"}var r,o,i;return r=t,o=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return fetch("".concat(this.baseURL).concat(t,".json?tweet_mode=extended"),{credentials:"include",headers:new Headers(e(n.map((function(t){return[t.name,t.value]}))))}).then((function(t){return t.json()})).then((function(e){var n=e.globalObjects.tweets,r=n[t];return!r.extended_entities&&r.quoted_status_id_str&&(r=n[r.quoted_status_id_str]),{url:r.extended_entities.media[0].video_info.variants.filter((function(t){return"video/mp4"===t.content_type})).sort((function(t,e){return e.bitrate-t.bitrate}))[0].url,name:r.full_text.substring(0,50)}}))}))}],o&&n(r.prototype,o),i&&n(r,i),t}(),o=[];chrome.webRequest.onSendHeaders.addListener((function(t){var n=t.requestHeaders.filter((function(t){return["x-guest-token","x-csrf-token","authorization"].indexOf(t.name)>-1&&!o.find((function(e){return e.name===t.name&&e.value===t.value}))}));n.length&&(o=[].concat(e(o),e(n)))}),{urls:["*://twitter.com/i/api/*"],types:["xmlhttprequest"]},["requestHeaders"]);var i=new r;chrome.runtime.onMessage.addListener((function(t,e,n){if("getVideoUrl"===t.action)return i.fetch(t.id,o).then((function(t){n({status:!0,url:t.url,name:t.name})})).catch((function(){n({status:!1})})),!0})),chrome.runtime.onInstalled.addListener((function(){chrome.tabs.query({url:"*://twitter.com/*",currentWindow:!0},(function(t){t.forEach((function(t){chrome.tabs.reload(t.id)}))}))}))})();