"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _globals = require("./globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const PERMISSIONS = {
  WEB_REQUEST: "webRequest",
  WEB_REQUEST_BLOCKING: "webRequestBlocking"
};
var _default = exports.default = {
  PERMISSIONS,
  contains: permissions => new Promise(resolve => {
    _globals.chrome.permissions.contains({
      permissions
    }, resolve);
  })
};