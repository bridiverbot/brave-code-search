"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeTab = closeTab;
exports.default = void 0;
exports.findTabs = findTabs;
exports.getCurrentTab = getCurrentTab;
exports.getTab = getTab;
exports.newTab = newTab;
exports.query = query;
exports.reloadTab = reloadTab;
exports.updateTab = updateTab;
var _globals = require("./globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function newTab(url, {
  focus = true
} = {}) {
  let resolver;
  const promise = new Promise(resolve => {
    resolver = resolve;
  });
  _globals.chrome.tabs.create({
    url,
    active: focus
  }, tab => {
    resolver(tab.id);
  });
  return promise;
}
function closeTab(tabId) {
  return new Promise((resolve, reject) => {
    _globals.chrome.tabs.onRemoved.addListener(function onTabRemoved(id) {
      if (id === tabId) {
        resolve();
        _globals.chrome.tabs.onRemoved.removeListener(onTabRemoved);
      }
    });
    // QUESTION: somehow callback to tabs.remove fire too fast so we use onRemove listener
    const removePromise = _globals.chrome.tabs.remove(Number(tabId), () => {
      if (_globals.chrome.runtime.lastError) {
        reject(new Error(`tab with id '${tabId}' is missing, probably already closed.`));
      }
    });
    if (removePromise && removePromise.catch) {
      removePromise.catch(reject);
    }
  });
}
function getCurrentTab(id) {
  const windowId = typeof id === "number" ? id : _globals.chrome.windows.WINDOW_ID_CURRENT;
  return new Promise(resolve => _globals.chrome.tabs.query({
    windowId,
    active: true
  }, ([tab]) => resolve(tab)));
}
async function updateTab(tabId, _updateInfo) {
  let id = tabId;
  let updateInfo = _updateInfo;
  if (typeof id !== "number") {
    const tab = await getCurrentTab();
    id = tab.id;
    updateInfo = tabId;
  }
  return new Promise(resolve => {
    _globals.chrome.tabs.update(id, updateInfo, resolve);
  });
}
function getTab(tabId) {
  return new Promise((resolve, reject) => {
    if (typeof tabId !== "number") {
      _globals.chrome.tabs.query({
        active: true,
        currentWindow: true
      }, tabs => resolve(tabs && tabs[0]));
      return;
    }
    _globals.chrome.tabs.get(tabId, tab => {
      if (tab) {
        resolve(tab);
      } else {
        reject(new Error("tab not found"));
      }
    });
  });
}
function query(queryInfo) {
  return new Promise(resolve => {
    _globals.chrome.tabs.query(queryInfo, resolve);
  });
}
function reloadTab(tabId) {
  return new Promise(resolve => {
    _globals.chrome.tabs.reload(tabId, resolve);
  });
}
function findTabs(url) {
  return new Promise(resolve => _globals.chrome.tabs.query({
    url
  }, tabs => resolve(_globals.chrome.runtime.lastError ? [] : tabs)));
}
var _default = exports.default = _globals.chrome && _globals.chrome.tabs || undefined;