"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _events = _interopRequireDefault(require("./events"));
var _locationChangeObserver = _interopRequireDefault(require("../platform/location-change-observer"));
var _contentCommunicationManager = _interopRequireDefault(require("../platform/content-communication-manager"));
var _fastContentAppStateInjection = _interopRequireDefault(require("../platform/fast-content-app-state-injection"));
var _background = _interopRequireDefault(require("./base/background"));
var _logger = _interopRequireDefault(require("./logger"));
var _services = _interopRequireDefault(require("./services"));
var _requestSanitizer = require("./request-sanitizer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
/* eslint no-param-reassign: 'off' */
/**
 * @module core
 * @namespace core
 * @class Background
 */
var _default = exports.default = (0, _background.default)({
  requiresServices: ["pacemaker"],
  providesServices: _services.default,
  init(settings) {
    (0, _requestSanitizer.enableRequestSanitizer)();
    this.settings = settings;
    this.bm = new _contentCommunicationManager.default();
    this.bm.init();
    this.mm = new _locationChangeObserver.default();
    this.mm.init();
    this.appStateInjecter = new _fastContentAppStateInjection.default();
    this.appStateInjecter.init(this.app);
    _logger.default.init();
  },
  unload() {
    (0, _requestSanitizer.disableRequestSanitizer)();
    this.bm.unload();
    this.mm.unload();
    this.appStateInjecter.unload();
    _logger.default.unload();
  },
  events: {
    "core:tab_select": function onTabSelect({
      url,
      incognito,
      id
    }) {
      _events.default.pub("core.location_change", url, incognito, id);
    },
    "content:location-change": function onLocationChange({
      url,
      isPrivate,
      tabId
    }) {
      _events.default.pub("core.location_change", url, isPrivate, tabId);
    },
    prefchange: function onPrefChange(pref) {
      if (pref.startsWith("modules.") && pref.endsWith(".enabled")) {
        this.actions.refreshAppState(this.app);
      }
    }
  },
  actions: {
    recordMouseDown(...args) {
      _events.default.pub("core:mouse-down", ...args);
    },
    /**
     * publish an event using events.pub
     * @param  {String}    evtChannel channel name
     * @param  {...[objects]} args       arguments to sent
     */
    publishEvent(evtChannel, ...args) {
      _events.default.pub(evtChannel, ...args);
    },
    restart() {
      return this.app.extensionRestart();
    },
    status() {
      return this.app.status();
    },
    enableModule(moduleName) {
      return this.app.enableModule(moduleName);
    },
    disableModule(moduleName) {
      this.app.disableModule(moduleName);
    },
    callContentAction(module, action, target, ...args) {
      return this.bm.callContentAction(module, action, target, ...args);
    },
    click(url, selector) {
      return this.bm.callContentAction("core", "click", {
        url
      }, selector);
    },
    queryHTML(url, selector, attribute, options = {}) {
      return this.bm.callContentAction("core", "queryHTML", {
        url
      }, selector, attribute, options);
    },
    getHTML(url) {
      return this.bm.callContentAction("core", "getHTML", {
        url
      });
    },
    refreshAppState() {
      this.appStateInjecter.shareAppState(this.app);
    }
  }
});