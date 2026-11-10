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

class Cache {
  constructor(size) {
    _defineProperty(this, "size", void 0);
    _defineProperty(this, "cache", []);
    _defineProperty(this, "bitMask", void 0);
    if (size <= 0 || size & size - 1 !== 0) {
      throw new Error("size must be a power of 2");
    }
    this.size = size;
    this.bitMask = size - 1;
    this.clear();
  }
  clear() {
    this.cache.length = 0;
    for (let i = 0; i < this.size; i += 1) {
      this.cache.push({
        key: undefined,
        value: undefined
      });
    }
  }
  get(key) {
    const val = this.cache[key.length & this.bitMask];
    if (val.key !== key) {
      return undefined;
    }
    return val.value;
  }
  set(key, value) {
    const current = this.cache[key.length & this.bitMask];
    current.key = key;
    current.value = value;
    return value;
  }
}
exports.default = Cache;