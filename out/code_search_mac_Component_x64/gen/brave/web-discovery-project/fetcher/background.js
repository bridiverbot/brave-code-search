"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _background = _interopRequireDefault(require("../core/base/background"));
var _inject = _interopRequireDefault(require("../core/kord/inject"));
var _manager = _interopRequireDefault(require("./manager"));
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var _default = exports.default = (0, _background.default)({
  requiresServices: ["pacemaker"],
  webDiscoveryProject: _inject.default.module("web-discovery-project"),
  async init() {
    this.manager = new _manager.default(this.webDiscoveryProject);
    try {
      await this.manager.init();
    } catch (ex) {
      _logger.default.error("Unexpected error when trying to initialize fetcher", ex);
    }
  },
  unload() {
    if (this.manager) {
      this.manager.unload();
      this.manager = null;
    }
  },
  status() {
    return {
      visible: true
    };
  },
  actions: {}
});