"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getResourceUrl = getResourceUrl;
var _globals = require("./globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function checkUserAgent(pattern) {
  try {
    return navigator.userAgent.indexOf(pattern) !== -1;
  } catch (e) {
    return false;
  }
}
const def = {
  isFirefox: checkUserAgent("Firefox"),
  isChromium: checkUserAgent("Chrome"),
  isEdge: checkUserAgent("Edge"),
  platformName: "webextension"
};
var _default = exports.default = def;
function getResourceUrl(path) {
  return _globals.chrome.runtime.getURL(`modules/${path}`.replace(/\/+/g, "/"));
}