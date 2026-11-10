"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _globals = require("../../platform/content/globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var _default = exports.default = {
  getMessage(key, ...subs) {
    let substitutions = [];
    // Firefox accepts number as substitutions but chrome does not
    if (Array.isArray(subs[0])) {
      substitutions = subs[0].map(String);
    } else {
      substitutions = subs.map(String);
    }
    return _globals.chrome.i18n.getMessage(key, substitutions) || key;
  }
};