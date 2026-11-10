"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.WDP = void 0;
exports.getUrl = getUrl;
exports.wrap = exports.win = exports.testServer = void 0;
var _globals = require("../globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const wrap = getObj => new Proxy({}, {
  get(target, name) {
    const obj = getObj();
    let prop = obj[name];
    if (typeof prop === "function") {
      prop = prop.bind(obj);
    }
    return prop;
  },
  set(target, name, value) {
    const obj = getObj();
    obj[name] = value;
    return true;
  }
});
exports.wrap = wrap;
const bgWindow = wrap(() => _globals.browser.extension.getBackgroundPage().window);
const win = exports.win = wrap(() => bgWindow);
const WDP = exports.WDP = wrap(() => bgWindow.WDP);
const app = exports.app = wrap(() => bgWindow.WDP.app);
function getUrl(path) {
  return _globals.browser.runtime.getURL(path);
}
const testServer = exports.testServer = wrap(() => win.WDP.TestHelpers.testServer);