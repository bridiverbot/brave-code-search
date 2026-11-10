"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XMLHttpRequestFactory = XMLHttpRequestFactory;
exports.setBackgroundRequest = setBackgroundRequest;
exports.setPrivateFlags = setPrivateFlags;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function setPrivateFlags() {}
function setBackgroundRequest() {}
function XMLHttpRequestFactory() {
  return XMLHttpRequest;
}