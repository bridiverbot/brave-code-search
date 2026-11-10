/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../brave/components/brave_extension/extension/brave_extension/background.ts"
/*!****************************************************************************************!*\
  !*** ./components/brave_extension/extension/brave_extension/background.ts + 1 modules ***!
  \****************************************************************************************/
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


;// ./components/brave_extension/extension/brave_extension/background/webDiscoveryProject.ts
let wdpStartedCallbackForTesting;
function setWDPStartedCallbackForTesting(callback) {
    if (window.WDP !== undefined) {
        callback();
        return;
    }
    wdpStartedCallbackForTesting = callback;
}
window.setWDPStartedCallbackForTesting = setWDPStartedCallbackForTesting;
async function startWDP() {
    if (window.WDP === undefined) {
        const wdp = await Promise.all(/*! import() */[__webpack_require__.e("vendors-brave_vendor_web-discovery-project_node_modules_pnpm_cliqz_url-parser_1_1_5_node_modu-eaf59c"), __webpack_require__.e("brave_web-discovery-project_index_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! gen/brave/web-discovery-project */ "./brave/web-discovery-project/index.js", 23));
        window.WDP = new wdp.App({
            version: chrome.runtime.getManifest().version
        });
    }
    if (window.WDP.isRunning === true)
        return;
    window.WDP.start();
    if (wdpStartedCallbackForTesting) {
        wdpStartedCallbackForTesting();
        wdpStartedCallbackForTesting = undefined;
    }
}
function stopWDP() {
    if (window.WDP === undefined)
        return;
    if (!window.WDP.isRunning)
        return;
    window.WDP.stop();
}
function onCommitted(details) {
    // Only inject if page is acceptable protocol (to skip internal pages like
    // devtools://, brave://, etc.). We also make sure to only inject if we
    // receive the onCommitted for the main_frame (frameId === 0).
    if (details.frameId === 0 &&
        (details.url.startsWith('https://') || details.url.startsWith('http://'))) {
        chrome.tabs.executeScript(details.tabId, {
            file: 'bundles/web-discovery-content-script.bundle.js',
            matchAboutBlank: false,
            runAt: 'document_end'
        }, () => {
            if (chrome.runtime.lastError) {
                console.warn('[web-discovery-project] Could not inject script:', chrome.runtime.lastError);
            }
        });
    }
}
if (!chrome.extension.inIncognitoContext) {
    const WEB_DISCOVERY_PREF_KEY = 'brave.web_discovery_enabled';
    const WEB_DISCOVERY_DISABLED_BY_POLICY_KEY = 'brave.web_discovery_disabled_by_policy';
    const toggleWebDiscovery = (enabled) => {
        if (enabled) {
            // enable
            startWDP()
                .then(() => {
                // Dynamically inject WDP content script so that users with the pref disabled
                // don't need to pay the loading cost on each page.
                chrome.webNavigation.onCommitted.addListener(onCommitted);
            }, (err) => { console.error('[web-discovery]', err); });
        }
        else {
            // Stop injecting dynamic content scripts
            if (chrome.webNavigation.onCommitted.hasListener(onCommitted)) {
                chrome.webNavigation.onCommitted.removeListener(onCommitted);
            }
            // disable
            stopWDP();
        }
    };
    const checkWebDiscoveryEnabled = () => {
        chrome.webDiscovery.isWebDiscoveryExtensionEnabled((extensionEnabled) => {
            toggleWebDiscovery(extensionEnabled);
        });
    };
    chrome.settingsPrivate.onPrefsChanged.addListener((prefs) => {
        const pref = prefs.find(p => p.key === WEB_DISCOVERY_PREF_KEY || p.key === WEB_DISCOVERY_DISABLED_BY_POLICY_KEY);
        if (!pref)
            return;
        checkWebDiscoveryEnabled();
    });
    checkWebDiscoveryEnabled();
}


;// ./components/brave_extension/extension/brave_extension/background.ts
// Copyright (c) 2017 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

if (chrome.test) {
    chrome.test.sendMessage('brave-extension-enabled');
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "brave-core:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/out/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"brave_extension_background": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbrave_core"] = self["webpackChunkbrave_core"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading wasm modules
/******/ 		var installedWasmModules = {};
/******/ 		
/******/ 		function promiseResolve() { return Promise.resolve(); }
/******/ 		
/******/ 		var wasmImportedFuncCache0;
/******/ 		var wasmImportedFuncCache1;
/******/ 		var wasmImportedFuncCache2;
/******/ 		var wasmImportedFuncCache3;
/******/ 		var wasmImportedFuncCache4;
/******/ 		var wasmImportedFuncCache5;
/******/ 		var wasmImportedFuncCache6;
/******/ 		var wasmImportedFuncCache7;
/******/ 		var wasmImportedFuncCache8;
/******/ 		var wasmImportedFuncCache9;
/******/ 		var wasmImportedFuncCache10;
/******/ 		var wasmImportedFuncCache11;
/******/ 		var wasmImportedFuncCache12;
/******/ 		var wasmImportedFuncCache13;
/******/ 		var wasmImportedFuncCache14;
/******/ 		var wasmImportedFuncCache15;
/******/ 		var wasmImportedFuncCache16;
/******/ 		var wasmImportedFuncCache17;
/******/ 		var wasmImportedFuncCache18;
/******/ 		var wasmImportedFuncCache19;
/******/ 		var wasmImportedFuncCache20;
/******/ 		var wasmImportedFuncCache21;
/******/ 		var wasmImportedFuncCache22;
/******/ 		var wasmImportedFuncCache23;
/******/ 		var wasmImportedFuncCache24;
/******/ 		var wasmImportedFuncCache25;
/******/ 		var wasmImportedFuncCache26;
/******/ 		var wasmImportObjects = {
/******/ 			"../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.wasm": function() {
/******/ 				return {
/******/ 					"./star_wasm_bg.js": {
/******/ 						"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_object_drop_ref"](p0i32);
/******/ 						},
/******/ 						"__wbg_getRandomValues_98117e9a7e993920": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache1 === undefined) wasmImportedFuncCache1 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache1["__wbg_getRandomValues_98117e9a7e993920"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_randomFillSync_64cc7d048f228ca8": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache2 === undefined) wasmImportedFuncCache2 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache2["__wbg_randomFillSync_64cc7d048f228ca8"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_process_2f24d6544ea7b200": function(p0i32) {
/******/ 							if(wasmImportedFuncCache3 === undefined) wasmImportedFuncCache3 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache3["__wbg_process_2f24d6544ea7b200"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_object": function(p0i32) {
/******/ 							if(wasmImportedFuncCache4 === undefined) wasmImportedFuncCache4 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache4["__wbindgen_is_object"](p0i32);
/******/ 						},
/******/ 						"__wbg_versions_6164651e75405d4a": function(p0i32) {
/******/ 							if(wasmImportedFuncCache5 === undefined) wasmImportedFuncCache5 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache5["__wbg_versions_6164651e75405d4a"](p0i32);
/******/ 						},
/******/ 						"__wbg_node_4b517d861cbcb3bc": function(p0i32) {
/******/ 							if(wasmImportedFuncCache6 === undefined) wasmImportedFuncCache6 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache6["__wbg_node_4b517d861cbcb3bc"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_string": function(p0i32) {
/******/ 							if(wasmImportedFuncCache7 === undefined) wasmImportedFuncCache7 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache7["__wbindgen_is_string"](p0i32);
/******/ 						},
/******/ 						"__wbg_crypto_98fc271021c7d2ad": function(p0i32) {
/******/ 							if(wasmImportedFuncCache8 === undefined) wasmImportedFuncCache8 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache8["__wbg_crypto_98fc271021c7d2ad"](p0i32);
/******/ 						},
/******/ 						"__wbg_msCrypto_a2cdb043d2bfe57f": function(p0i32) {
/******/ 							if(wasmImportedFuncCache9 === undefined) wasmImportedFuncCache9 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache9["__wbg_msCrypto_a2cdb043d2bfe57f"](p0i32);
/******/ 						},
/******/ 						"__wbg_modulerequire_3440a4bcf44437db": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache10 === undefined) wasmImportedFuncCache10 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache10["__wbg_modulerequire_3440a4bcf44437db"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_newnoargs_ac91a24e57fcaec8": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache11 === undefined) wasmImportedFuncCache11 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache11["__wbg_newnoargs_ac91a24e57fcaec8"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_call_9e1eb05d905a21d9": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache12 === undefined) wasmImportedFuncCache12 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache12["__wbg_call_9e1eb05d905a21d9"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_self_bce917bbd61b0be0": function() {
/******/ 							if(wasmImportedFuncCache13 === undefined) wasmImportedFuncCache13 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache13["__wbg_self_bce917bbd61b0be0"]();
/******/ 						},
/******/ 						"__wbg_window_08048ce184ae3496": function() {
/******/ 							if(wasmImportedFuncCache14 === undefined) wasmImportedFuncCache14 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache14["__wbg_window_08048ce184ae3496"]();
/******/ 						},
/******/ 						"__wbg_globalThis_d6f1ff349571af81": function() {
/******/ 							if(wasmImportedFuncCache15 === undefined) wasmImportedFuncCache15 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache15["__wbg_globalThis_d6f1ff349571af81"]();
/******/ 						},
/******/ 						"__wbg_global_63b22b64d239db75": function() {
/******/ 							if(wasmImportedFuncCache16 === undefined) wasmImportedFuncCache16 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache16["__wbg_global_63b22b64d239db75"]();
/******/ 						},
/******/ 						"__wbindgen_is_undefined": function(p0i32) {
/******/ 							if(wasmImportedFuncCache17 === undefined) wasmImportedFuncCache17 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache17["__wbindgen_is_undefined"](p0i32);
/******/ 						},
/******/ 						"__wbg_buffer_fbad716641c158a5": function(p0i32) {
/******/ 							if(wasmImportedFuncCache18 === undefined) wasmImportedFuncCache18 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache18["__wbg_buffer_fbad716641c158a5"](p0i32);
/******/ 						},
/******/ 						"__wbg_new_c9e78bd69716df92": function(p0i32) {
/******/ 							if(wasmImportedFuncCache19 === undefined) wasmImportedFuncCache19 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache19["__wbg_new_c9e78bd69716df92"](p0i32);
/******/ 						},
/******/ 						"__wbg_set_2fd4486048716f38": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache20 === undefined) wasmImportedFuncCache20 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache20["__wbg_set_2fd4486048716f38"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_length_82dd1e63e9c75f09": function(p0i32) {
/******/ 							if(wasmImportedFuncCache21 === undefined) wasmImportedFuncCache21 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache21["__wbg_length_82dd1e63e9c75f09"](p0i32);
/******/ 						},
/******/ 						"__wbg_newwithlength_a9f6c1fd1bf4e5e4": function(p0i32) {
/******/ 							if(wasmImportedFuncCache22 === undefined) wasmImportedFuncCache22 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache22["__wbg_newwithlength_a9f6c1fd1bf4e5e4"](p0i32);
/******/ 						},
/******/ 						"__wbg_subarray_e80c85d931be89c4": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache23 === undefined) wasmImportedFuncCache23 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache23["__wbg_subarray_e80c85d931be89c4"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache24 === undefined) wasmImportedFuncCache24 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache24["__wbindgen_object_clone_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache25 === undefined) wasmImportedFuncCache25 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache25["__wbindgen_throw"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_memory": function() {
/******/ 							if(wasmImportedFuncCache26 === undefined) wasmImportedFuncCache26 = __webpack_require__.c["../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.js"].exports;
/******/ 							return wasmImportedFuncCache26["__wbindgen_memory"]();
/******/ 						}
/******/ 					}
/******/ 				};
/******/ 			},
/******/ 		};
/******/ 		
/******/ 		var wasmModuleMap = {
/******/ 			"vendors-brave_vendor_web-discovery-project_node_modules_pnpm_star-wasm_https_github_com_brave-33d8de": [
/******/ 				"../../../brave/vendor/web-discovery-project/node_modules/.pnpm/star-wasm@https+++github.com+brave+web-discovery-project+releases+download+star-wasm-0.1.3.tgz+star-wasm-0.1.3.tgz/node_modules/star-wasm/star_wasm_bg.wasm"
/******/ 			]
/******/ 		};
/******/ 		
/******/ 		// object with all WebAssembly.instance exports
/******/ 		__webpack_require__.w = {};
/******/ 		
/******/ 		// Fetch + compile chunk loading for webassembly
/******/ 		__webpack_require__.f.wasm = function(chunkId, promises) {
/******/ 		
/******/ 			var wasmModules = wasmModuleMap[chunkId] || [];
/******/ 		
/******/ 			wasmModules.forEach(function(wasmModuleId, idx) {
/******/ 				var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/ 		
/******/ 				// a Promise means "currently loading" or "already loaded".
/******/ 				if(installedWasmModuleData)
/******/ 					promises.push(installedWasmModuleData);
/******/ 				else {
/******/ 					var importObject = wasmImportObjects[wasmModuleId]();
/******/ 					var req = fetch(__webpack_require__.p + "" + (wasmModuleId  + "").replace(/(^[.-]|[^a-zA-Z0-9_-])+/g, "_") + ".module.wasm");
/******/ 					var promise;
/******/ 					if(importObject && typeof importObject.then === 'function' && typeof WebAssembly.compileStreaming === 'function') {
/******/ 						promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 							return WebAssembly.instantiate(items[0], items[1]);
/******/ 						});
/******/ 					} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 						promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 					} else {
/******/ 						var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 						promise = bytesPromise.then(function(bytes) {
/******/ 							return WebAssembly.instantiate(bytes, importObject);
/******/ 						});
/******/ 					}
/******/ 					promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 						return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 					}));
/******/ 				}
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("../../../brave/components/brave_extension/extension/brave_extension/background.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDOztXQUVqQztXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsZUFBZTtXQUNmO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7V0NyRkE7V0FDQTs7V0FFQSw0QkFBNEI7O1dBRTVCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTCxLQUFLO1dBQ0w7V0FDQSxLQUFLO1dBQ0wsOENBQThDLHlCQUF5QjtXQUN2RTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBLEVBQUU7V0FDRixFOzs7OztVRTlMQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2JyYXZlX2V4dGVuc2lvbi9leHRlbnNpb24vYnJhdmVfZXh0ZW5zaW9uL2JhY2tncm91bmQvd2ViRGlzY292ZXJ5UHJvamVjdC50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV9leHRlbnNpb24vZXh0ZW5zaW9uL2JyYXZlX2V4dGVuc2lvbi9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS93YXNtIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIHlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuZXhwb3J0IHt9XG5cbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55XG5cbmxldCB3ZHBTdGFydGVkQ2FsbGJhY2tGb3JUZXN0aW5nOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWRcblxuZnVuY3Rpb24gc2V0V0RQU3RhcnRlZENhbGxiYWNrRm9yVGVzdGluZyhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICBpZiAod2luZG93LldEUCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2soKVxuICAgIHJldHVyblxuICB9XG4gIHdkcFN0YXJ0ZWRDYWxsYmFja0ZvclRlc3RpbmcgPSBjYWxsYmFja1xufVxuXG53aW5kb3cuc2V0V0RQU3RhcnRlZENhbGxiYWNrRm9yVGVzdGluZyA9IHNldFdEUFN0YXJ0ZWRDYWxsYmFja0ZvclRlc3RpbmdcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRXRFAoKSB7XG4gIGlmICh3aW5kb3cuV0RQID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB3ZHAgPSBhd2FpdCBpbXBvcnQoJ2dlbi9icmF2ZS93ZWItZGlzY292ZXJ5LXByb2plY3QnKVxuICAgIHdpbmRvdy5XRFAgPSBuZXcgd2RwLkFwcCh7XG4gICAgICB2ZXJzaW9uOiBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb25cbiAgICB9KVxuICB9XG5cbiAgaWYgKHdpbmRvdy5XRFAuaXNSdW5uaW5nID09PSB0cnVlKVxuICAgIHJldHVyblxuXG4gIHdpbmRvdy5XRFAuc3RhcnQoKVxuXG4gIGlmICh3ZHBTdGFydGVkQ2FsbGJhY2tGb3JUZXN0aW5nKSB7XG4gICAgd2RwU3RhcnRlZENhbGxiYWNrRm9yVGVzdGluZygpXG4gICAgd2RwU3RhcnRlZENhbGxiYWNrRm9yVGVzdGluZyA9IHVuZGVmaW5lZFxuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcFdEUCgpIHtcbiAgaWYgKHdpbmRvdy5XRFAgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm5cblxuICBpZiAoIXdpbmRvdy5XRFAuaXNSdW5uaW5nKVxuICAgIHJldHVyblxuXG4gIHdpbmRvdy5XRFAuc3RvcCgpXG59XG5cbmZ1bmN0aW9uIG9uQ29tbWl0dGVkIChkZXRhaWxzOiBjaHJvbWUud2ViTmF2aWdhdGlvbi5XZWJOYXZpZ2F0aW9uVHJhbnNpdGlvbkNhbGxiYWNrRGV0YWlscykge1xuICAvLyBPbmx5IGluamVjdCBpZiBwYWdlIGlzIGFjY2VwdGFibGUgcHJvdG9jb2wgKHRvIHNraXAgaW50ZXJuYWwgcGFnZXMgbGlrZVxuICAvLyBkZXZ0b29sczovLywgYnJhdmU6Ly8sIGV0Yy4pLiBXZSBhbHNvIG1ha2Ugc3VyZSB0byBvbmx5IGluamVjdCBpZiB3ZVxuICAvLyByZWNlaXZlIHRoZSBvbkNvbW1pdHRlZCBmb3IgdGhlIG1haW5fZnJhbWUgKGZyYW1lSWQgPT09IDApLlxuICBpZiAoXG4gICAgZGV0YWlscy5mcmFtZUlkID09PSAwICYmXG4gICAgKGRldGFpbHMudXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykgfHwgZGV0YWlscy51cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpKVxuICApIHtcbiAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KGRldGFpbHMudGFiSWQsIHtcbiAgICAgIGZpbGU6ICdidW5kbGVzL3dlYi1kaXNjb3ZlcnktY29udGVudC1zY3JpcHQuYnVuZGxlLmpzJyxcbiAgICAgIG1hdGNoQWJvdXRCbGFuazogZmFsc2UsXG4gICAgICBydW5BdDogJ2RvY3VtZW50X2VuZCdcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW3dlYi1kaXNjb3ZlcnktcHJvamVjdF0gQ291bGQgbm90IGluamVjdCBzY3JpcHQ6JywgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuaWYgKCFjaHJvbWUuZXh0ZW5zaW9uLmluSW5jb2duaXRvQ29udGV4dCkge1xuICBjb25zdCBXRUJfRElTQ09WRVJZX1BSRUZfS0VZID0gJ2JyYXZlLndlYl9kaXNjb3ZlcnlfZW5hYmxlZCdcbiAgY29uc3QgV0VCX0RJU0NPVkVSWV9ESVNBQkxFRF9CWV9QT0xJQ1lfS0VZID0gJ2JyYXZlLndlYl9kaXNjb3ZlcnlfZGlzYWJsZWRfYnlfcG9saWN5J1xuXG4gIGNvbnN0IHRvZ2dsZVdlYkRpc2NvdmVyeSA9IChlbmFibGVkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIC8vIGVuYWJsZVxuICAgICAgc3RhcnRXRFAoKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAvLyBEeW5hbWljYWxseSBpbmplY3QgV0RQIGNvbnRlbnQgc2NyaXB0IHNvIHRoYXQgdXNlcnMgd2l0aCB0aGUgcHJlZiBkaXNhYmxlZFxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byBwYXkgdGhlIGxvYWRpbmcgY29zdCBvbiBlYWNoIHBhZ2UuXG4gICAgICAgICAgICBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcihvbkNvbW1pdHRlZClcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IHsgY29uc29sZS5lcnJvcignW3dlYi1kaXNjb3ZlcnldJywgZXJyKSB9XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RvcCBpbmplY3RpbmcgZHluYW1pYyBjb250ZW50IHNjcmlwdHNcbiAgICAgIGlmIChjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5oYXNMaXN0ZW5lcihvbkNvbW1pdHRlZCkpIHtcbiAgICAgICAgY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21taXR0ZWQucmVtb3ZlTGlzdGVuZXIob25Db21taXR0ZWQpXG4gICAgICB9XG5cbiAgICAgICAvLyBkaXNhYmxlXG4gICAgICBzdG9wV0RQKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja1dlYkRpc2NvdmVyeUVuYWJsZWQgPSAoKSA9PiB7XG4gICAgY2hyb21lLndlYkRpc2NvdmVyeS5pc1dlYkRpc2NvdmVyeUV4dGVuc2lvbkVuYWJsZWQoKGV4dGVuc2lvbkVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRvZ2dsZVdlYkRpc2NvdmVyeShleHRlbnNpb25FbmFibGVkKVxuICAgIH0pXG4gIH1cblxuICBjaHJvbWUuc2V0dGluZ3NQcml2YXRlLm9uUHJlZnNDaGFuZ2VkLmFkZExpc3RlbmVyKChwcmVmczogY2hyb21lLnNldHRpbmdzUHJpdmF0ZS5QcmVmT2JqZWN0W10pID0+IHtcbiAgICBjb25zdCBwcmVmID0gcHJlZnMuZmluZChwID0+IHAua2V5ID09PSBXRUJfRElTQ09WRVJZX1BSRUZfS0VZIHx8IHAua2V5ID09PSBXRUJfRElTQ09WRVJZX0RJU0FCTEVEX0JZX1BPTElDWV9LRVkpXG4gICAgaWYgKCFwcmVmKSByZXR1cm47XG4gICAgY2hlY2tXZWJEaXNjb3ZlcnlFbmFibGVkKClcbiAgfSlcblxuICBjaGVja1dlYkRpc2NvdmVyeUVuYWJsZWQoKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAnLi9iYWNrZ3JvdW5kL3dlYkRpc2NvdmVyeVByb2plY3QnXG5cbmlmIChjaHJvbWUudGVzdCkge1xuICBjaHJvbWUudGVzdC5zZW5kTWVzc2FnZSgnYnJhdmUtZXh0ZW5zaW9uLWVuYWJsZWQnKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuIiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyAodHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGN1cnJlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jaHVuay5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImJyYXZlLWNvcmU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9vdXQvXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnJhdmVfZXh0ZW5zaW9uX2JhY2tncm91bmRcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmticmF2ZV9jb3JlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JyYXZlX2NvcmVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgd2FzbSBtb2R1bGVzXG52YXIgaW5zdGFsbGVkV2FzbU1vZHVsZXMgPSB7fTtcblxuZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuXG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxO1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTU7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlNjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU3O1xudmFyIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTg7XG52YXIgd2FzbUltcG9ydGVkRnVuY0NhY2hlOTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxODtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxOTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMjtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMztcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNDtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNTtcbnZhciB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNjtcbnZhciB3YXNtSW1wb3J0T2JqZWN0cyA9IHtcblx0XCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcud2FzbVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCIuL3N0YXJfd2FzbV9iZy5qc1wiOiB7XG5cdFx0XHRcdFwiX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUwID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMFtcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfOTgxMTdlOWE3ZTk5MzkyMFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxW1wiX193YmdfZ2V0UmFuZG9tVmFsdWVzXzk4MTE3ZTlhN2U5OTM5MjBcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3JhbmRvbUZpbGxTeW5jXzY0Y2M3ZDA0OGYyMjhjYThcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMltcIl9fd2JnX3JhbmRvbUZpbGxTeW5jXzY0Y2M3ZDA0OGYyMjhjYThcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3Byb2Nlc3NfMmYyNGQ2NTQ0ZWE3YjIwMFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTMgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUzW1wiX193YmdfcHJvY2Vzc18yZjI0ZDY1NDRlYTdiMjAwXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX29iamVjdFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTQgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU0W1wiX193YmluZGdlbl9pc19vYmplY3RcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3ZlcnNpb25zXzYxNjQ2NTFlNzU0MDVkNGFcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU1ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlNVtcIl9fd2JnX3ZlcnNpb25zXzYxNjQ2NTFlNzU0MDVkNGFcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25vZGVfNGI1MTdkODYxY2JjYjNiY1wiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTYgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU2W1wiX193Ymdfbm9kZV80YjUxN2Q4NjFjYmNiM2JjXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX3N0cmluZ1wiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTcgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlNyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU3W1wiX193YmluZGdlbl9pc19zdHJpbmdcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX2NyeXB0b185OGZjMjcxMDIxYzdkMmFkXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlOCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU4ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZThbXCJfX3diZ19jcnlwdG9fOThmYzI3MTAyMWM3ZDJhZFwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbXNDcnlwdG9fYTJjZGIwNDNkMmJmZTU3ZlwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTkgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlOSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGU5W1wiX193YmdfbXNDcnlwdG9fYTJjZGIwNDNkMmJmZTU3ZlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfbW9kdWxlcmVxdWlyZV8zNDQwYTRiY2Y0NDQzN2RiXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTAgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTBbXCJfX3diZ19tb2R1bGVyZXF1aXJlXzM0NDBhNGJjZjQ0NDM3ZGJcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld25vYXJnc19hYzkxYTI0ZTU3ZmNhZWM4XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTEgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTFbXCJfX3diZ19uZXdub2FyZ3NfYWM5MWEyNGU1N2ZjYWVjOFwiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmdfY2FsbF85ZTFlYjA1ZDkwNWEyMWQ5XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTIgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTJbXCJfX3diZ19jYWxsXzllMWViMDVkOTA1YTIxZDlcIl0ocDBpMzIscDFpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3NlbGZfYmNlOTE3YmJkNjFiMGJlMFwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxMyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxM1tcIl9fd2JnX3NlbGZfYmNlOTE3YmJkNjFiMGJlMFwiXSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX3dpbmRvd18wODA0OGNlMTg0YWUzNDk2XCI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE0ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE0W1wiX193Ymdfd2luZG93XzA4MDQ4Y2UxODRhZTM0OTZcIl0oKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19nbG9iYWxUaGlzX2Q2ZjFmZjM0OTU3MWFmODFcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTUgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTVbXCJfX3diZ19nbG9iYWxUaGlzX2Q2ZjFmZjM0OTU3MWFmODFcIl0oKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19nbG9iYWxfNjNiMjJiNjRkMjM5ZGI3NVwiOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNiA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNltcIl9fd2JnX2dsb2JhbF82M2IyMmI2NGQyMzlkYjc1XCJdKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9pc191bmRlZmluZWRcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNyA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxNyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUxN1tcIl9fd2JpbmRnZW5faXNfdW5kZWZpbmVkXCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19idWZmZXJfZmJhZDcxNjY0MWMxNThhNVwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE4ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE4ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTE4W1wiX193YmdfYnVmZmVyX2ZiYWQ3MTY2NDFjMTU4YTVcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld19jOWU3OGJkNjk3MTZkZjkyXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMTkgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMTkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMTlbXCJfX3diZ19uZXdfYzllNzhiZDY5NzE2ZGY5MlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193Ymdfc2V0XzJmZDQ0ODYwNDg3MTZmMzhcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyMFtcIl9fd2JnX3NldF8yZmQ0NDg2MDQ4NzE2ZjM4XCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19sZW5ndGhfODJkZDFlNjNlOWM3NWYwOVwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIxW1wiX193YmdfbGVuZ3RoXzgyZGQxZTYzZTljNzVmMDlcIl0ocDBpMzIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIl9fd2JnX25ld3dpdGhsZW5ndGhfYTlmNmMxZmQxYmY0ZTVlNFwiOiBmdW5jdGlvbihwMGkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTIyW1wiX193YmdfbmV3d2l0aGxlbmd0aF9hOWY2YzFmZDFiZjRlNWU0XCJdKHAwaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diZ19zdWJhcnJheV9lODBjODVkOTMxYmU4OWM0XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMjMgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMjNbXCJfX3diZ19zdWJhcnJheV9lODBjODVkOTMxYmU4OWM0XCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcblx0XHRcdFx0XHRpZih3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNCA9PT0gdW5kZWZpbmVkKSB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNCA9IF9fd2VicGFja19yZXF1aXJlX18uY1tcIi4uLy4uLy4uL2JyYXZlL3ZlbmRvci93ZWItZGlzY292ZXJ5LXByb2plY3Qvbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXItd2FzbUBodHRwcysrK2dpdGh1Yi5jb20rYnJhdmUrd2ViLWRpc2NvdmVyeS1wcm9qZWN0K3JlbGVhc2VzK2Rvd25sb2FkK3N0YXItd2FzbS0wLjEuMy50Z3orc3Rhci13YXNtLTAuMS4zLnRnei9ub2RlX21vZHVsZXMvc3Rhci13YXNtL3N0YXJfd2FzbV9iZy5qc1wiXS5leHBvcnRzO1xuXHRcdFx0XHRcdHJldHVybiB3YXNtSW1wb3J0ZWRGdW5jQ2FjaGUyNFtcIl9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZlwiXShwMGkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl90aHJvd1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuXHRcdFx0XHRcdGlmKHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1ID09PSB1bmRlZmluZWQpIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW1wiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLmpzXCJdLmV4cG9ydHM7XG5cdFx0XHRcdFx0cmV0dXJuIHdhc21JbXBvcnRlZEZ1bmNDYWNoZTI1W1wiX193YmluZGdlbl90aHJvd1wiXShwMGkzMixwMWkzMik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiX193YmluZGdlbl9tZW1vcnlcIjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYod2FzbUltcG9ydGVkRnVuY0NhY2hlMjYgPT09IHVuZGVmaW5lZCkgd2FzbUltcG9ydGVkRnVuY0NhY2hlMjYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbXCIuLi8uLi8uLi9icmF2ZS92ZW5kb3Ivd2ViLWRpc2NvdmVyeS1wcm9qZWN0L25vZGVfbW9kdWxlcy8ucG5wbS9zdGFyLXdhc21AaHR0cHMrKytnaXRodWIuY29tK2JyYXZlK3dlYi1kaXNjb3ZlcnktcHJvamVjdCtyZWxlYXNlcytkb3dubG9hZCtzdGFyLXdhc20tMC4xLjMudGd6K3N0YXItd2FzbS0wLjEuMy50Z3ovbm9kZV9tb2R1bGVzL3N0YXItd2FzbS9zdGFyX3dhc21fYmcuanNcIl0uZXhwb3J0cztcblx0XHRcdFx0XHRyZXR1cm4gd2FzbUltcG9ydGVkRnVuY0NhY2hlMjZbXCJfX3diaW5kZ2VuX21lbW9yeVwiXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fSxcbn07XG5cbnZhciB3YXNtTW9kdWxlTWFwID0ge1xuXHRcInZlbmRvcnMtYnJhdmVfdmVuZG9yX3dlYi1kaXNjb3ZlcnktcHJvamVjdF9ub2RlX21vZHVsZXNfcG5wbV9zdGFyLXdhc21faHR0cHNfZ2l0aHViX2NvbV9icmF2ZS0zM2Q4ZGVcIjogW1xuXHRcdFwiLi4vLi4vLi4vYnJhdmUvdmVuZG9yL3dlYi1kaXNjb3ZlcnktcHJvamVjdC9ub2RlX21vZHVsZXMvLnBucG0vc3Rhci13YXNtQGh0dHBzKysrZ2l0aHViLmNvbSticmF2ZSt3ZWItZGlzY292ZXJ5LXByb2plY3QrcmVsZWFzZXMrZG93bmxvYWQrc3Rhci13YXNtLTAuMS4zLnRneitzdGFyLXdhc20tMC4xLjMudGd6L25vZGVfbW9kdWxlcy9zdGFyLXdhc20vc3Rhcl93YXNtX2JnLndhc21cIlxuXHRdXG59O1xuXG4vLyBvYmplY3Qgd2l0aCBhbGwgV2ViQXNzZW1ibHkuaW5zdGFuY2UgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy53ID0ge307XG5cbi8vIEZldGNoICsgY29tcGlsZSBjaHVuayBsb2FkaW5nIGZvciB3ZWJhc3NlbWJseVxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLndhc20gPSBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuXG5cdHZhciB3YXNtTW9kdWxlcyA9IHdhc21Nb2R1bGVNYXBbY2h1bmtJZF0gfHwgW107XG5cblx0d2FzbU1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbih3YXNtTW9kdWxlSWQsIGlkeCkge1xuXHRcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSA9IGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF07XG5cblx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiIG9yIFwiYWxyZWFkeSBsb2FkZWRcIi5cblx0XHRpZihpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSlcblx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGltcG9ydE9iamVjdCA9IHdhc21JbXBvcnRPYmplY3RzW3dhc21Nb2R1bGVJZF0oKTtcblx0XHRcdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHdhc21Nb2R1bGVJZCAgKyBcIlwiKS5yZXBsYWNlKC8oXlsuLV18W15hLXpBLVowLTlfLV0pKy9nLCBcIl9cIikgKyBcIi5tb2R1bGUud2FzbVwiKTtcblx0XHRcdHZhciBwcm9taXNlO1xuXHRcdFx0aWYoaW1wb3J0T2JqZWN0ICYmIHR5cGVvZiBpbXBvcnRPYmplY3QudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRwcm9taXNlID0gUHJvbWlzZS5hbGwoW1dlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcocmVxKSwgaW1wb3J0T2JqZWN0XSkudGhlbihmdW5jdGlvbihpdGVtcykge1xuXHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShpdGVtc1swXSwgaXRlbXNbMV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cHJvbWlzZSA9IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcSwgaW1wb3J0T2JqZWN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBieXRlc1Byb21pc2UgPSByZXEudGhlbihmdW5jdGlvbih4KSB7IHJldHVybiB4LmFycmF5QnVmZmVyKCk7IH0pO1xuXHRcdFx0XHRwcm9taXNlID0gYnl0ZXNQcm9taXNlLnRoZW4oZnVuY3Rpb24oYnl0ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydE9iamVjdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy53W3dhc21Nb2R1bGVJZF0gPSAocmVzLmluc3RhbmNlIHx8IHJlcykuZXhwb3J0cztcblx0XHRcdH0pKTtcblx0XHR9XG5cdH0pO1xufTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi4vLi4vLi4vYnJhdmUvY29tcG9uZW50cy9icmF2ZV9leHRlbnNpb24vZXh0ZW5zaW9uL2JyYXZlX2V4dGVuc2lvbi9iYWNrZ3JvdW5kLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9