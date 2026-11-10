"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUint8ArrayEqual = isUint8ArrayEqual;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function isUint8ArrayEqual(x, y) {
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
}