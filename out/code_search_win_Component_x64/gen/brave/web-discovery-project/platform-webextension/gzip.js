"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compress = compress;
exports.decompress = decompress;
var _pako = _interopRequireDefault(require("pako"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * @param {!string} uncompressed input
 * @returns {Uint8Array} gzipped output
 */
function compress(str) {
  return _pako.default.gzip(str);
}

/**
 * @param {!string} gzipped input
 * @returns {string} uncompressed output
 */
function decompress(str) {
  return _pako.default.gunzip(str, {
    to: "string"
  });
}