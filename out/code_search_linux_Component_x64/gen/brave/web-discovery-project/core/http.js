"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbortController = void 0;
Object.defineProperty(exports, "Headers", {
  enumerable: true,
  get: function () {
    return _fetch2.Headers;
  }
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function () {
    return _fetch2.Request;
  }
});
Object.defineProperty(exports, "Response", {
  enumerable: true,
  get: function () {
    return _fetch2.Response;
  }
});
exports._httpHandler = _httpHandler;
exports.addCompressionExclusion = addCompressionExclusion;
exports.addListener = addListener;
exports.defaultHttpHandler = defaultHttpHandler;
exports.fetch = fetch;
exports.fetchArrayBuffer = fetchArrayBuffer;
exports.httpGet = httpGet;
exports.httpHandler = httpHandler;
exports.httpPost = httpPost;
exports.overrideFetchHandler = overrideFetchHandler;
exports.overrideHttpHandler = overrideHttpHandler;
exports.promiseHttpHandler = promiseHttpHandler;
exports.removeListener = removeListener;
exports.resetFetchHandler = resetFetchHandler;
var _console = _interopRequireDefault(require("./console"));
var _gzip = require("./gzip");
var _xmlhttprequest = require("../platform/xmlhttprequest");
var _fetch2 = require("../platform/fetch");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint no-param-reassign: 'off' */
/* eslint no-restricted-syntax: off */

const listeners = new Set();
const notifyListeners = params => {
  [...listeners].forEach(listener => {
    try {
      listener(params);
    } catch (e) {
      // carry on
    }
  });
};
let fetchHandler = _fetch2.fetch;
function resetFetchHandler() {
  fetchHandler = _fetch2.fetch;
}
function overrideFetchHandler(handler) {
  fetchHandler = handler;
}
function fetch(...args) {
  notifyListeners({
    url: args[0]
  });
  return fetchHandler(...args);
}
const AbortController = exports.AbortController = _fetch2.AbortController;

// Fetch with array buffer support - required for platforms where fetch does not support
// arrayBuffer() method (react-native)
function fetchArrayBuffer(...args) {
  notifyListeners({
    url: args[0]
  });
  return (_fetch2.fetchArrayBuffer || _fetch2.fetch)(...args);
}
/** Legacy httpHandler implementation, based on XMLHttpRequest.
 *
 *  If you want to make HTTP requests, please check out the fetch API (platform/fetch)
 */
function defaultHttpHandler(method, url, callback, onerror, timeout, data, sync, encoding, background) {
  const XMLHttpRequest = (0, _xmlhttprequest.XMLHttpRequestFactory)();
  const req = new XMLHttpRequest();
  req.timestamp = Date.now();
  if (background) {
    (0, _xmlhttprequest.setBackgroundRequest)(req);
  }
  req.open(method, url, !sync);
  (0, _xmlhttprequest.setPrivateFlags)(req);
  if (req.overrideMimeType) {
    req.overrideMimeType("application/json");
  }
  req.setRequestHeader("Content-Type", "application/json");

  // headers for compressed data
  if (encoding) {
    req.setRequestHeader("Content-Encoding", encoding);
  }
  req.onload = () => {
    if (!parseInt) return; // parseInt is not a function after extension disable/uninstall

    const statusClass = parseInt(req.status / 100, 10);
    if (statusClass === 2 || statusClass === 3 || statusClass === 0 /* local files */) {
      if (callback) {
        callback(req);
      }
    } else {
      const error = `loaded with non-200 ${url} (status=${req.status} ${req.statusText}) WDP.httpHandler`;
      _console.default.log(error);
      if (onerror) {
        onerror(error);
      }
    }
  };
  req.onerror = () => {
    const error = `error loading ${url} (status=${req.status} ${req.statusText}) WDP.httpHandler`;
    _console.default.log(error);
    if (onerror) {
      onerror(error);
    }
  };
  req.ontimeout = () => {
    const error = `timeout for ${url} WDP.httpHandler`;
    _console.default.log(error);
    if (onerror) {
      onerror(error);
    }
  };
  if (callback) {
    if (timeout) {
      req.timeout = parseInt(timeout, 10);
    } else {
      req.timeout = ["POST", "PUT"].indexOf(method) >= 0 ? 10000 : 1000;
    }
  }
  req.send(data);
  return req;
}
let activeHandler = defaultHttpHandler;
function httpHandler(...args) {
  return activeHandler(...args);
}
function _httpHandler(...args) {
  notifyListeners({
    url: args[1]
  });
  const errorHandler = args[3]; // see httpGet or httpPost arguments
  try {
    return httpHandler.call(undefined, ...args);
  } catch (e) {
    if (errorHandler) {
      errorHandler(e);
    } else {
      _console.default.log(e, "httpHandler failed");
    }
  }
  return undefined;
}
function httpGet(url, callback, onerror, timeout, _, sync) {
  return _httpHandler("GET", url, callback, onerror, timeout, _, sync);
}
function httpPost(url, callback, data, onerror, timeout) {
  return _httpHandler("POST", url, callback, onerror, timeout, data);
}

/**
 *  Replace default http handler with fn
 */
function overrideHttpHandler(fn) {
  activeHandler = fn;
}
const compressionAvailable = Boolean(_gzip.compress);
const compressionExclusions = new Set();
function compressionEnabled(url) {
  return compressionAvailable && !compressionExclusions.has(url);
}

/**
 *  Add a url for which we should not compress when using promiseHttpHandler
 */
function addCompressionExclusion(url) {
  compressionExclusions.add(url);
}
function promiseHttpHandler(method, url, data, timeout, compressedPost) {
  return new Promise((resolve, reject) => {
    // gzip.compress may be false if there is no implementation for this platform
    // or maybe it is not loaded yet
    if (method === "POST" && compressedPost && compressionEnabled(url)) {
      const dataLength = data.length;
      data = (0, _gzip.compress)(data);
      _console.default.log(`Compressed request to ${url}, bytes saved = ${dataLength - data.length} (${(100 * (dataLength - data.length) / dataLength).toFixed(1)}%)`, "WDP.httpHandler");
      httpHandler(method, url, resolve, reject, timeout, data, undefined, "gzip");
    } else {
      httpHandler(method, url, resolve, reject, timeout, data);
    }
  });
}
function addListener(listener) {
  listeners.add(listener);
}
function removeListener(listener) {
  listeners.delete(listener);
}