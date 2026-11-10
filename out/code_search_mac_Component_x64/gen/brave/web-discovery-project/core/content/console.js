"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _globals = require("../../platform/content/globals");
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function noop() {}

/**
 * In content context we only enable logging in developement build to not
 * pollute logs from visited web pages.
 */
var _default = exports.default = _config.default.environment === "development" ? _globals.window.console : new Proxy({}, {
  get() {
    return noop;
  }
});