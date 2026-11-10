"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getResourceUrl", {
  enumerable: true,
  get: function () {
    return _platform.getResourceUrl;
  }
});
exports.isWebExtension = exports.isFirefox = exports.isEdge = exports.isChromium = void 0;
exports.notImplemented = notImplemented;
exports.product = exports.platformName = void 0;
var _platform = _interopRequireWildcard(require("../platform/platform"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function notImplemented() {
  throw new Error("Not implemented");
}
const isFirefox = exports.isFirefox = _platform.default.isFirefox;
const isChromium = exports.isChromium = _platform.default.isChromium;
const isEdge = exports.isEdge = _platform.default.isEdge;
const platformName = exports.platformName = _platform.default.platformName;
const isWebExtension = exports.isWebExtension = platformName === "webextension";
const product = exports.product = "BRAVE";