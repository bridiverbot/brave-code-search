"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.disable = disable;
exports.enable = enable;
exports.isLoggingEnabled = isLoggingEnabled;
var _console2 = _interopRequireDefault(require("../platform/console"));
var _prefs = _interopRequireDefault(require("./prefs"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function noop() {}
function isLoggingEnabled() {
  try {
    // Detect dev flag on react-native
    if (typeof global !== "undefined" && global.__DEV__ === true) {
      return true;
    }

    // Extension built in development mode
    if (_config.default.environment === "development") {
      return true;
    }

    // 'developer' pref set
    if (_prefs.default.get("developer", false)) {
      return true;
    }

    // Fall-back to value of 'showConsoleLogs' pref
    return _prefs.default.get("showConsoleLogs", false);
  } catch (ee) {
    return false;
  }
}
const _console = {};
function enable() {
  _console.debug = _console2.default.log.bind(_console2.default, "[wdp] [debug]");
  _console.log = _console2.default.log.bind(_console2.default, "[wdp]");
  _console.error = _console2.default.error.bind(_console2.default, "[wdp] [error]");
  _console.warn = _console2.default.warn.bind(_console2.default, "[wdp] [warning]");
  _console.warning = _console.warn;
  _console.time = (_console2.default.time || noop).bind(_console2.default);
  _console.timeEnd = (_console2.default.timeEnd || noop).bind(_console2.default);
}
function disable() {
  _console.debug = noop;
  _console.log = noop;
  _console.warn = noop;
  _console.warning = noop;
  _console.error = noop;
  _console.time = noop;
  _console.timeEnd = noop;
}
if (isLoggingEnabled()) {
  enable();
} else {
  disable();
}
var _default = exports.default = _console;