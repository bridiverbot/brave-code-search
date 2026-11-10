"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAllOpenPages = getAllOpenPages;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getAllOpenPages() {
  return new Promise((resolve, reject) => {
    try {
      const res = [];
      chrome.windows.getAll({
        populate: true
      }, windows => {
        windows.forEach(window => {
          window.tabs.forEach(tab => {
            res.push(tab.url);
          });
        });
        resolve(res);
      });
    } catch (ee) {
      reject(ee);
    }
  });
}
var _default = exports.default = getAllOpenPages;