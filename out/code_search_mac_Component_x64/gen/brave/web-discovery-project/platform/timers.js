"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimeout = exports.setInterval = exports.clearTimeout = exports.clearInterval = void 0;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const _setTimeout = (...args) => (typeof setTimeout === "undefined" ? window.setTimeout.bind(window) : setTimeout)(...args);
exports.setTimeout = _setTimeout;
const _setInterval = (...args) => (typeof setInterval === "undefined" ? window.setInterval.bind(window) : setInterval)(...args);
exports.setInterval = _setInterval;
const _clearTimeout = (...args) => (typeof clearTimeout === "undefined" ? window.clearTimeout.bind(window) : clearTimeout)(...args);
exports.clearTimeout = _clearTimeout;
const _clearInterval = (...args) => (typeof clearInterval === "undefined" ? window.clearInterval.bind(window) : clearInterval)(...args);
exports.clearInterval = _clearInterval;