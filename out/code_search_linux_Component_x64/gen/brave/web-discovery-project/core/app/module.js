"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "lifecycleEvents", {
  enumerable: true,
  get: function () {
    return _lifeCycle.lifecycleEvents;
  }
});
var _inject = _interopRequireDefault(require("../kord/inject"));
var _modules = _interopRequireDefault(require("./modules"));
var _service = _interopRequireDefault(require("./service"));
var _lifeCycle = _interopRequireWildcard(require("./life-cycle"));
var _logger = _interopRequireDefault(require("../logger"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

class Module extends _lifeCycle.default {
  constructor(name) {
    super(name, _logger.default.get("life-cycle", {
      level: "log",
      prefix: `[lifecycle:${name}]`
    }));
    this._init = (...args) => this.background.init(...args);
    this._unload = () => this.background.unload();
  }
  get providedServices() {
    if (this._services) {
      return this._services;
    }
    this._services = Object.create(null);
    Object.keys(this.background.providesServices || {}).forEach(serviceName => {
      const initializer = this.background.providesServices[serviceName];
      this._services[serviceName] = new _service.default(initializer);
    });
    return this._services;
  }
  get requiredServices() {
    return this.background.requiresServices || [];
  }
  get _module() {
    return _modules.default[this.name] || {};
  }
  get background() {
    return this._module;
  }
  status() {
    return {
      name: this.name,
      isEnabled: this.isEnabled || this.isEnabling,
      loadingTime: this.loadingTime,
      loadingTimeSync: this.loadingTimeSync,
      state: this.isEnabled && this.background.getState && this.background.getState()
    };
  }
  action(name, ...args) {
    return _inject.default.module(this.name).action(name, ...args);
  }
}
exports.default = Module;