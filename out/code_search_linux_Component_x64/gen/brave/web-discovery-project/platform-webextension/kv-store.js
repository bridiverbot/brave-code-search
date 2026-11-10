"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dexie = _interopRequireDefault(require("dexie"));
var _globals = require("./globals");
var _console = _interopRequireDefault(require("../core/console"));
var _encoding = require("../core/encoding");
var _platform = _interopRequireDefault(require("./platform"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// can we write binary data directly to chrome.storage?
const binaryStorageSupported = _platform.default.isFirefox;
let storage = {};
try {
  const db = new _dexie.default("kv-store");
  db.version(1).stores({
    kv: "key"
  });
  storage = {
    get(key) {
      return db.kv.get(key).then(result => result.value);
    },
    set(key, value) {
      return db.kv.put({
        key,
        value
      });
    },
    remove(key) {
      return db.kv.delete(key);
    }
  };
} catch (e) {
  // unable to load indexeddb
  storage = {
    get(key) {
      return new Promise((resolve, reject) => {
        _globals.chrome.storage.local.get(key, res => {
          if (_globals.chrome.runtime.lastError) {
            _console.default.error(_globals.chrome.runtime.lastError);
            reject(_globals.chrome.runtime.lastError);
          } else if (res[key]) {
            try {
              // perform a base64 decode for values we encoded before write (see `set`)
              const value = !binaryStorageSupported && key.endsWith(".bin") ? (0, _encoding.fromBase64)(res[key]) : res[key];
              resolve(value);
            } catch (decodeError) {
              reject(decodeError);
            }
          } else {
            reject(new Error(`storage has no value for ${key}`));
          }
        });
      });
    },
    set(key, value) {
      return new Promise((resolve, reject) => {
        // a storage key ending with '.bin' indicates we should treat this as an ArrayBuffer.
        // Only Firefox supports directly writing an ArrayBuffer to chrome.storage, so for other
        // platforms we use base 64 encoding to safely storage it.
        _globals.chrome.storage.local.set({
          [key]: !binaryStorageSupported && key.endsWith(".bin") ? (0, _encoding.toBase64)(value) : value
        }, () => {
          if (_globals.chrome.runtime.lastError) {
            _console.default.error(_globals.chrome.runtime.lastError);
            reject(_globals.chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
    },
    remove(key) {
      return new Promise((resolve, reject) => {
        _globals.chrome.storage.local.remove(key, () => {
          if (_globals.chrome.runtime.lastError) {
            _console.default.error(_globals.chrome.runtime.lastError);
            reject(_globals.chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
    }
  };
}
var _default = exports.default = storage;