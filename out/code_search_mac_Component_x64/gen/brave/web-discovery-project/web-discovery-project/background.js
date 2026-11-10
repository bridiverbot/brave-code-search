"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _prefs = _interopRequireDefault(require("../core/prefs"));
var _background = _interopRequireDefault(require("../core/base/background"));
var _webDiscoveryProject = _interopRequireDefault(require("./web-discovery-project"));
var _historyService = _interopRequireDefault(require("../core/history-service"));
var _inject = _interopRequireDefault(require("../core/kord/inject"));
var _webrequest = _interopRequireDefault(require("../core/webrequest"));
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
/* eslint func-names: 'off' */
/**
 * @namespace web-discovery-project
 * @class Background
 */
var _default = exports.default = (0, _background.default)({
  requiresServices: ["pacemaker"],
  hpn: _inject.default.module("hpnv2"),
  /**
   * @method enabled
   * @return pref
   */
  enabled() {
    return _prefs.default.get("modules.web-discovery-project.enabled", true);
  },
  /**
   * @method init
   */
  init(settings) {
    // Protection: By default, skip all wdp listeners.
    // Only allow it if the user has not opted out
    // and if wdp is fully initialized.
    //
    // (Note: Opt-out is clear, but the reason why it is also disabled
    //  during initialization is mainly to prevent any race conditions
    //  that we would otherwise had to deal with. Startup should
    //  not take too long, anyway.)
    this.collecting = false;
    this.settings = settings;
    this.webDiscoveryProject = _webDiscoveryProject.default;
    _webDiscoveryProject.default.hpn = this.hpn;
    const pendingInit = (this._pendingInits || Promise.resolve()).then(() => {
      if (!this.enabled()) {
        // The module is technically loaded, but wdp will not collect any data.
        this.active = true;
        this.collecting = false;
        return undefined;
      }
      return _webDiscoveryProject.default.init().then(() => {
        this.onHeadersReceivedListener = (...args) => _webDiscoveryProject.default.httpObserver.observeActivity(...args);
        _webrequest.default.onHeadersReceived.addListener(this.onHeadersReceivedListener, {
          urls: ["*://*/*"]
        }, ["responseHeaders"]);
        if (_historyService.default && _historyService.default.onVisitRemoved) {
          this.onVisitRemovedListener = (...args) => _webDiscoveryProject.default.onVisitRemoved(...args);
          _historyService.default.onVisitRemoved.addListener(this.onVisitRemovedListener);
        }
        this.active = true;
        this.collecting = true;
      });
    });
    this._pendingInits = pendingInit.catch(() => {});
    return pendingInit;
  },
  unload() {
    this.collecting = false;
    if (this.active) {
      this.active = false;
      if (this.onVisitRemovedListener) {
        _historyService.default.onVisitRemoved.removeListener(this.onVisitRemovedListener);
        this.onVisitRemovedListener = undefined;
      }
      if (this.onHeadersReceivedListener) {
        _webrequest.default.onHeadersReceived.removeListener(this.onHeadersReceivedListener);
        this.onHeadersReceivedListener = undefined;
      }
      _webDiscoveryProject.default.unload();
    }
  },
  async reload() {
    await this._pendingInits;
    this.unload();
    await this.init(this.settings);
  },
  status() {
    if (this.active) {
      return {
        visible: true,
        state: true
      };
    }
    return undefined;
  },
  events: {
    "core:mouse-down": function onMouseDown(...args) {
      if (this.collecting) {
        _webDiscoveryProject.default.captureMouseClickPage(...args);
      }
    },
    "content:location-change": function onLocationChange(...args) {
      _logger.default.log("PCN: got location change:", this.collecting, ...args);
      if (this.collecting) {
        // Only forward it to the onLocation change if the frameID is type 0.

        // We need to find a better way,
        // to not trigger on-location change for requests which are not main_document.
        _webDiscoveryProject.default.listener.onLocationChange(...args);
      }
    }
  },
  actions: {
    anonymousHttpGet(url, overrideHeaders) {
      return _webDiscoveryProject.default.doublefetchHandler.anonymousHttpGet(url, overrideHeaders);
    },
    /**
     * Check whether there is some state for this url.
     * @param  {String}  url
     * @return {Boolean}     true if a state object exists.
     */
    isProcessingUrl(url) {
      return _webDiscoveryProject.default.state.v[url] !== undefined;
    },
    /**
     * Add some data to the metadata for a url under the specified key. If data
     * already exists, we will merge it, overwriting any duplicates.
     *
     * @param {String} url
     * @param {String} key  object key under-which to add this data
     * @param {Object} data data to add
     * @returns {Promise} Resolves if data was added, rejects if we have no state
     * for this url.
     */
    addDataToUrl(url, key, data) {
      if (_webDiscoveryProject.default.state.v[url]) {
        _webDiscoveryProject.default.state.v[url][key] = Object.keys(data).reduce((acc, val) => {
          acc[val] = data[val];
          return acc;
        }, _webDiscoveryProject.default.state.v[url][key] || {});
        return Promise.resolve();
      }
      return Promise.reject();
    },
    telemetry(payload, instantPush) {
      _webDiscoveryProject.default.telemetry(payload, instantPush);
    },
    "wdp:keypress": function onKeyPress(...args) {
      if (this.collecting) {
        _webDiscoveryProject.default.captureKeyPressPage(...args);
      }
    },
    "wdp:mousemove": function onMouseMove(...args) {
      if (this.collecting) {
        _webDiscoveryProject.default.captureMouseMovePage(...args);
      }
    },
    "wdp:scroll": function onScroll(...args) {
      if (this.collecting) {
        _webDiscoveryProject.default.captureScrollPage(...args);
      }
    },
    "wdp:copy": function onCopy(...args) {
      if (this.collecting) {
        _webDiscoveryProject.default.captureCopyPage(...args);
      }
    },
    contentScriptTopAds() {},
    jsRedirect({
      url,
      location
    } = {
      url: undefined,
      location: undefined
    }) {
      _webDiscoveryProject.default.httpCache[url] = {
        status: 301,
        time: _webDiscoveryProject.default.counter,
        location
      };
    },
    adClick(message) {
      const ads = message.ads;
      Object.keys(ads).forEach(eachAd => {
        _webDiscoveryProject.default.adDetails[eachAd] = ads[eachAd];
      });
    }
  }
});