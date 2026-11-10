"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deadline = deadline;
exports.debounce = debounce;
exports.nextIdle = nextIdle;
exports.nextTick = nextTick;
exports.throttle = throttle;
exports.tryPromise = tryPromise;
exports.withTimeout = withTimeout;
var _sleep = _interopRequireDefault(require("./helpers/sleep"));
var _timers = require("../core/timers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function throttle(window, fn, threshhold) {
  let last;
  let timer;
  return (...args) => {
    const now = Date.now();
    if (last && now < last + threshhold) {
      // reset timeout
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        last = now;
        fn(...args);
      }, threshhold);
    } else {
      last = now;
      fn(...args);
    }
  };
}

/**
 * simple version of https://davidwalsh.name/javascript-debounce-function,
 * without options to cancel or execute immediately.
 *
 * @param {Function} fn
 * @param {number} [delay] in ms
 * @returns {Function} the debounced function,
 * or the given function when delay is falsy.
 */
function debounce(fn, delay) {
  let timeout = null;
  return !delay ? fn : function debounced(...args) {
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout
    // Passing an invalid ID to clearTimeout() silently does nothing; no exception is thrown.
    (0, _timers.clearTimeout)(timeout);
    const delayed = () => {
      timeout = null;
      fn(...args);
    };
    timeout = (0, _timers.setTimeout)(delayed, delay);
  };
}
function deadline(promise, timeout) {
  return Promise.race([(0, _sleep.default)(timeout), promise]);
}
function nextTick(fn, ...args) {
  return Promise.resolve().then(() => fn(...args));
}
function nextIdle() {
  if (typeof window === "undefined" || !window.requestIdleCallback) {
    return nextTick(() => {});
  }
  return new Promise(resolve => {
    window.requestIdleCallback(resolve);
  });
}
async function withTimeout(promise, timeoutInMs) {
  let timer;
  try {
    timer = new Promise((_, reject) => {
      (0, _timers.setTimeout)(() => reject(new Error(`Timed out after ${timeoutInMs / 1000} seconds`)), timeoutInMs);
    });
    return await Promise.race([promise, timer]);
  } finally {
    (0, _timers.clearTimeout)(timer);
  }
}

// Helper if you only want to print the result of a promise.
async function tryPromise(promise, timeoutInMs = 1000) {
  try {
    return await withTimeout(promise, timeoutInMs);
  } catch (e) {
    return `Failed: ${e}`;
  }
}