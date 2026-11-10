"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

class Defer {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (...args) => {
        this.state = Defer.RESOLVED;
        return resolve(...args);
      };
      this.reject = (...args) => {
        this.state = Defer.REJECTED;
        return reject(...args); // eslint-disable-line prefer-promise-reject-errors
      };
      this.state = Defer.PENDING;
    });
    this.promise
    // This will silence error logs in case the defered promise
    // gets rejected before it is consumed
    .catch(() => {});
  }
  get isSettled() {
    return this.state !== Defer.PENDING;
  }
}
exports.default = Defer;
_defineProperty(Defer, "PENDING", Symbol("PENDING"));
_defineProperty(Defer, "RESOLVED", Symbol("RESOLVED"));
_defineProperty(Defer, "REJECTED", Symbol("REJECTED"));