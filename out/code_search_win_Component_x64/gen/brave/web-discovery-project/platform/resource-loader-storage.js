"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _kvStore = _interopRequireDefault(require("./kv-store"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

class Storage {
  constructor(filePath) {
    this.key = ["resource-loader", ...filePath].join(":");
  }
  load() {
    return _kvStore.default.get(this.key);
  }
  save(data) {
    return _kvStore.default.set(this.key, data);
  }
  delete() {
    return _kvStore.default.remove(this.key);
  }
}
exports.default = Storage;