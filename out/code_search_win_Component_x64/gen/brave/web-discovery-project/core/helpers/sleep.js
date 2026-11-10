"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sleep;
var _timers = require("../timers");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function sleep(time) {
  return new Promise(resolve => (0, _timers.setTimeout)(resolve, time));
}