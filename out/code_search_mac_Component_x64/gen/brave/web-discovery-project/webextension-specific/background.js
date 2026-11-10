"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _runtime = _interopRequireDefault(require("../platform/runtime"));
var _globals = require("../platform/globals");
var _events = _interopRequireDefault(require("../core/events"));
var _background = _interopRequireDefault(require("../core/base/background"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
/**
  @namespace webextension-specific
  @module webextension-specific
  @class Background
 */
var _default = exports.default = (0, _background.default)({
  init() {
    this.onMessage = message => {
      if (message.name === "appReady") {
        return Promise.resolve({
          ready: true
        });
      }
      return undefined;
    };
    _runtime.default.onMessage.addListener(this.onMessage);
    this.onTabSelect = ({
      tabId
    }) => {
      _globals.chrome.tabs.get(tabId, tabInfo => _events.default.pub("core:tab_select", {
        ...tabInfo,
        tabId
      }));
    };
    this.onTabClose = (tabId, removeInfo) => _events.default.pub("core:tab_close", {
      tabId,
      ...removeInfo
    });
    this.onTabOpen = tabInfo => _events.default.pub("core:tab_open", tabInfo);
    _globals.chrome.tabs.onActivated.addListener(this.onTabSelect);
    _globals.chrome.tabs.onRemoved.addListener(this.onTabClose);
    _globals.chrome.tabs.onCreated.addListener(this.onTabOpen);
  },
  unload() {
    _runtime.default.onMessage.removeListener(this.onMessage);
    _globals.chrome.tabs.onActivated.removeListener(this.onTabSelect);
    _globals.chrome.tabs.onRemoved.removeListener(this.onTabClose);
    _globals.chrome.tabs.onCreated.removeListener(this.onTabOpen);
  },
  events: {},
  actions: {}
});