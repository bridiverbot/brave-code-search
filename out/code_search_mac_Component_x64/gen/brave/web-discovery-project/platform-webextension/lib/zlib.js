"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inflate = exports.deflate = void 0;
var _pako = _interopRequireDefault(require("pako"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const inflate = exports.inflate = _pako.default.inflate.bind(_pako.default);
const deflate = exports.deflate = _pako.default.deflate.bind(_pako.default);