"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "browser", {
  enumerable: true,
  get: function () {
    return _webextensionPolyfill.default;
  }
});
Object.defineProperty(exports, "chrome", {
  enumerable: true,
  get: function () {
    return _globalsChrome.default;
  }
});
exports.isContentScriptsSupported = isContentScriptsSupported;
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function () {
    return _globalsWindow.default;
  }
});
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
var _globalsWindow = _interopRequireDefault(require("./globals-window"));
var _globalsChrome = _interopRequireDefault(require("./globals-chrome"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function isContentScriptsSupported() {
  return _globalsWindow.default !== undefined && typeof _globalsWindow.default.browser !== "undefined" && _globalsWindow.default.browser.contentScripts;
}