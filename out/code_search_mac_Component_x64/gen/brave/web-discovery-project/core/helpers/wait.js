"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = wait;
exports.waitFor = waitFor;
var _timeout = require("./timeout");
var timers = _interopRequireWildcard(require("../timers"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function waitForImpl(fn, timeout) {
  let error;
  let resolve;
  let reject;
  let timeoutId;
  let interval;

  // Clean-up resources
  const stop = () => {
    timers.clearTimeout(timeoutId);
    interval.stop();
  };
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  const check = async () => {
    try {
      const result = await fn();
      // In case of truthy result, we stop
      if (result) {
        stop();
        resolve(result);
        return;
      }
    } catch (ex) {
      error = ex;
    }
  };

  // Start check at regular interval until one of the following conditions is met:
  // * `timeout` ms elapsed
  // * `fn` eventually results into a truthy values
  interval = (0, _timeout.setTimeoutIntervalInstant)(check, 10);

  // Reject after `timeout` ms
  timeoutId = timers.setTimeout(() => {
    stop();
    reject(error || new Error("waitFor timeout"));
  }, timeout);
  return promise;
}
function waitFor(fn, timeout = 15000) {
  return waitForImpl(fn, timeout);
}
function wait(time) {
  return new Promise(resolve => timers.setTimeout(resolve, time));
}