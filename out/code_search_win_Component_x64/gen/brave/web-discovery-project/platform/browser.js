"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getWindow: true,
  isTabURL: true,
  getLocale: true,
  addWindowObserver: true,
  removeWindowObserver: true,
  forEachWindow: true,
  getActiveTab: true,
  isPrivateMode: true
};
exports.addWindowObserver = addWindowObserver;
exports.forEachWindow = forEachWindow;
exports.getActiveTab = getActiveTab;
exports.getLocale = getLocale;
exports.getWindow = getWindow;
exports.isPrivateMode = isPrivateMode;
exports.isTabURL = isTabURL;
exports.removeWindowObserver = removeWindowObserver;
var _globals = require("./globals");
var _windows = _interopRequireWildcard(require("./windows"));
Object.keys(_windows).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _windows[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _windows[key];
    }
  });
});
var _tabs = require("./tabs");
Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabs[key];
    }
  });
});
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

let currentWindow = null;
const windowsMap = new Map();
function getWindow() {
  return currentWindow;
}
function isTabURL() {
  return false;
}
function getLocale() {
  return _globals.window.navigator.language || _globals.window.navigator.userLanguage;
}
const windowObservers = new WeakMap();
function addWindowObserver(fn) {
  if (_windows.default === undefined) {
    return;
  }
  const observer = {
    open: win => fn(win, "opened"),
    focus: windowId => {
      const win = windowsMap.get(windowId) || {
        id: windowId
      };
      return fn(win, "focused");
    },
    close: windowId => fn({
      id: windowId
    }, "closed")
  };
  windowObservers.set(fn, observer);
  _windows.default.onCreated.addListener(observer.open);
  _windows.default.onFocusChanged.addListener(observer.focus);
  _windows.default.onRemoved.addListener(observer.close);
}
function removeWindowObserver(fn) {
  if (_windows.default === undefined) {
    return;
  }
  const observer = windowObservers.get(fn);
  _windows.default.onCreated.removeListener(observer.open);
  _windows.default.onFocusChanged.removeListener(observer.focus);
  _windows.default.onRemoved.removeListener(observer.close);
}
function windowObserver(win, event) {
  if (event === "opened") {
    windowsMap.set(win.id, win);
  }
  if (event === "closed") {
    windowsMap.delete(win.id);
  }
  if (event === "focused") {
    currentWindow = windowsMap.get(win.id) || currentWindow;
  }
  if (win.focused) {
    currentWindow = win;
  }
}
if (_windows.default !== undefined) {
  addWindowObserver(windowObserver);
  _windows.default.getAll(wins => wins.forEach(win => windowObserver(win, "opened")));
} else {
  currentWindow = _globals.window;
  windowsMap.set(undefined, _globals.window);
}
function forEachWindow(fn) {
  return [...windowsMap.values()].map(win => {
    let ret;
    try {
      ret = fn(win);
    } catch (e) {
      //
    }
    return ret;
  });
}
function getActiveTab() {
  return _globals.browser.tabs.query({
    active: true,
    currentWindow: true
  }).then(result => {
    if (result.length === 0) {
      throw new Error("Result of query for active tab is undefined");
    }
    const tab = result[0];
    return {
      id: tab.id,
      url: tab.url
    };
  });
}
function isPrivateMode(win) {
  if (!win) {
    throw new Error("isPrivateMode was called without a window object");
  }
  return win.incognito || _globals.chrome.extension.inIncognitoContext;
}