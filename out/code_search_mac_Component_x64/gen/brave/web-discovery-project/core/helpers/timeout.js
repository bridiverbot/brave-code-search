"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTimeoutInterval;
exports.setTimeoutIntervalInstant = setTimeoutIntervalInstant;
var timers = _interopRequireWildcard(require("../timers"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * setInterval implementation using setTimeout as base method. This helper was
 * created with the intention of solving the multiple calls that can happen
 * using the setInterval function (if computer goes to sleep for example).
 *
 * To create an interval:
 * const timer = setTimeoutInterval(() => console.log('x'), 1000);
 *
 * To stop it:
 * timer.stop();
 *
 */
function setTimeoutIntervalImpl(f, timeoutMS, args, instantStart) {
  let enabled = true;
  let timeout = null;
  const runTimeout = async () => {
    if (enabled) {
      // Call `f` and make sure we wait for it to terminate before we trigger
      // the next timeout (even if the function is async).
      try {
        await f(...args);
      } catch (ex) {
        /* Ignore */
      }
    }
    if (enabled) {
      timeout = timers.setTimeout(runTimeout, timeoutMS);
    }
  };
  const stop = () => {
    enabled = false;
    timers.clearTimeout(timeout);
  };

  // Start running
  timeout = timers.setTimeout(runTimeout, instantStart ? 0 : timeoutMS);
  return {
    stop
  };
}
function setTimeoutInterval(f, timeoutMS, ...args) {
  return setTimeoutIntervalImpl(f, timeoutMS, args, false);
}
function setTimeoutIntervalInstant(f, timeoutMS, ...args) {
  return setTimeoutIntervalImpl(f, timeoutMS, args, true);
}