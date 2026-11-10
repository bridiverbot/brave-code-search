"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
// NOTE: this is an attempt at using `webextension-polyfill` to abstract away
// API differences between different browser (e.g.: promisify chrome functions).
// Eventually, it could be used globally from 'platforms/webextension/globals.es'.
var _default = exports.default = (typeof browser !== "undefined" ? browser : _webextensionPolyfill.default).runtime;