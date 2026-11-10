"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.window = exports.chrome = void 0;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const newChrome = exports.chrome = typeof browser !== "undefined" ? browser : chrome;
const newWindow = exports.window = window;