"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _config = _interopRequireDefault(require("../core/config"));
var _console = _interopRequireDefault(require("../core/console"));
var _worker = _interopRequireDefault(require("../platform/worker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

class GroupSigner {
  async _sendWorker(fn, ...args) {
    const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return new Promise((resolve, reject) => {
      this.promises[id] = {
        resolve,
        reject
      };
      this.worker.postMessage({
        id,
        fn,
        args
      });
    });
  }
  async seed(...args) {
    return this._sendWorker("seed", ...args);
  }
  async setGroupPubKey(...args) {
    return this._sendWorker("setGroupPubKey", ...args);
  }
  async setUserCredentials(...args) {
    return this._sendWorker("setUserCredentials", ...args);
  }
  async getUserCredentials(...args) {
    return this._sendWorker("getUserCredentials", ...args);
  }
  async startJoin(...args) {
    return this._sendWorker("startJoin", ...args);
  }
  async finishJoin(...args) {
    return this._sendWorker("finishJoin", ...args);
  }
  async sign(...args) {
    return this._sendWorker("sign", ...args);
  }
  constructor() {
    const build = typeof WebAssembly !== "undefined" ? "wasm" : "asmjs";
    this.worker = new _worker.default(`${_config.default.baseURL}hpnv2/worker.${build}.bundle.js`);
    this.promises = {};
    this.worker.onmessage = args => {
      if (args.data.logMessage) {
        const msg = args.data.logMessage;
        _console.default[msg.type](...msg.args);
        return;
      }
      const {
        data: {
          id,
          data,
          error
        }
      } = args;
      const p = this.promises[id];
      delete this.promises[id];
      if (error) {
        p.reject(new Error(error));
      } else {
        p.resolve(data);
      }
    };
  }
  unload() {
    if (this.worker) {
      this.worker.terminate();
      delete this.worker;
      this.promises = {};
    }
  }
}
exports.default = GroupSigner;