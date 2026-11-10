"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXTRA_INFO_SPEC = void 0;
Object.defineProperty(exports, "VALID_RESPONSE_PROPERTIES", {
  enumerable: true,
  get: function () {
    return _webrequest.VALID_RESPONSE_PROPERTIES;
  }
});
exports.default = void 0;
var _webrequest = _interopRequireWildcard(require("../platform/webrequest"));
var _platform = require("./platform");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var _default = exports.default = _webrequest.default;
function getOptionArray(options) {
  if (!options) {
    return [];
  }
  // get subset of options which are defined
  return [options.BLOCKING,
  // firefox and chrome disagree on how to name these
  options.REQUEST_HEADERS || options.REQUESTHEADERS, options.RESPONSE_HEADERS || options.RESPONSEHEADERS,
  // extra headers: Chrome 72:
  // https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/vYIaeezZwfQ
  options.EXTRA_HEADERS
  // request body disabled to avoid the overhead when not needed
  // options.REQUEST_BODY,
  ].filter(o => !!o);
}

// build allowed extraInfo options from <Step>Options objects.
const EXTRA_INFO_SPEC = exports.EXTRA_INFO_SPEC = !_platform.isEdge ? {
  onBeforeRequest: getOptionArray(_webrequest.default.OnBeforeRequestOptions),
  onBeforeSendHeaders: getOptionArray(_webrequest.default.OnBeforeSendHeadersOptions),
  onSendHeaders: getOptionArray(_webrequest.default.OnSendHeadersOptions),
  onHeadersReceived: getOptionArray(_webrequest.default.OnHeadersReceivedOptions),
  onAuthRequired: getOptionArray(_webrequest.default.OnAuthRequiredOptions),
  onResponseStarted: getOptionArray(_webrequest.default.OnResponseStartedOptions),
  onBeforeRedirect: getOptionArray(_webrequest.default.OnBeforeRedirectOptions),
  onCompleted: getOptionArray(_webrequest.default.OnCompletedOptions),
  onErrorOccurred: undefined
} : {
  onBeforeRequest: ["blocking"],
  onBeforeSendHeaders: ["blocking", "requestHeaders"],
  onSendHeaders: ["requestHeaders"],
  onHeadersReceived: ["blocking", "requestHeaders"],
  onAuthRequired: ["responseHeaders", "blocking"],
  onResponseStarted: ["responseHeaders"],
  onBeforeRedirect: ["responseHeaders"],
  onCompleted: ["responseHeaders"],
  onErrorOccurred: undefined
};