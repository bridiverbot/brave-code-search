"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIfChromeReady;
var _wait = require("../helpers/wait");
var _runtime = _interopRequireDefault(require("../../platform/runtime"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const isChromeReady = async () => {
  const isWebextension = chrome.extension;

  // on firefox platform, we wait for chrome object as the extension is ready at that time
  if (!isWebextension) {
    if (typeof chrome !== "object") {
      throw new Error("chrome object not there yet");
    }

    // if non extension chrome is there, we are most likely in content tests
    return true;
  }
  return new Promise((resolve, reject) => {
    _runtime.default.sendMessage({
      name: "appReady"
    }).then(({
      ready
    }) => {
      if (ready) {
        resolve(true);
      } else {
        reject();
      }
    }).catch(reject);
    setTimeout(reject, 300);
  });
};
function checkIfChromeReady() {
  return (0, _wait.waitFor)(isChromeReady).catch(e => {
    window.console.error("failed to access background page", e);
    throw e;
  });
}