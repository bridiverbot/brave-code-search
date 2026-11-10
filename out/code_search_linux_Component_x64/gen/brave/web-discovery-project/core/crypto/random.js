"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
exports.randomInt = randomInt;
var _crypto = _interopRequireDefault(require("../../platform/crypto"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable no-bitwise */

// This function generates better numbers than Math.random but *should not* be
// used for cryptographic operations. This is only for code that requires a
// small amount of randomness.
//
//  Doing the same as Firefox Math.random does, but with a crypto secure 64 bit number instead.
//  The equivalent in C++ is: double(uint64val & 0x1FFFFFFFFFFFFF) / (1 << 53);
//  WARNING: In tests (Linux), considerably slower than Math.random (5-10 times)
function random() {
  const values = _crypto.default.getRandomValues(new Uint32Array(2));
  return (2 ** 32 * (values[0] & 0x1fffff) + values[1]) / 2 ** 53;
}
function randomInt() {
  return Math.floor(random() * Number.MAX_SAFE_INTEGER);
}