"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _globals = require("../globals");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function _default(indexFilePath, {
  grep,
  autostart,
  invert,
  retries
}) {
  let url = `/modules/${indexFilePath}?autostart=${autostart}`;
  if (invert === "true") {
    url = `${url}&invert=true`;
  }
  if (grep) {
    url = `${url}&grep=${grep}`;
  }
  if (retries) {
    url = `${url}&retries=${grep}`;
  }
  return _globals.chrome.runtime.getURL(url);
}