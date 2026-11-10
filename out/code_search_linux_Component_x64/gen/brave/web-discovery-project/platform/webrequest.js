"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VALID_RESPONSE_PROPERTIES = void 0;
var _globals = require("./globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const VALID_RESPONSE_PROPERTIES = exports.VALID_RESPONSE_PROPERTIES = {
  onBeforeRequest: ["cancel", "redirectUrl"],
  onBeforeSendHeaders: ["cancel", "requestHeaders"],
  onSendHeaders: [],
  onHeadersReceived: ["cancel", "redirectUrl", "responseHeaders"],
  onAuthRequired: ["cancel"],
  onResponseStarted: [],
  onBeforeRedirect: [],
  onCompleted: [],
  onErrorOccurred: []
};
var _default = exports.default = _globals.chrome.webRequest || {};