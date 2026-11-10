"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _runtime = _interopRequireDefault(require("../../platform/runtime"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Abstract away exposing actions triggered through `sendMessage`. This is done
 * in the extension in different contexts: content scripts, popup windows, etc.
 */
class RemoteActionProvider {
  constructor(module, actions) {
    this.onMessage = message => {
      if (message.module === module) {
        const handler = actions[message.action];
        if (handler !== undefined) {
          // Prepare array of arguments which will be given to `handler`
          let args = message.args || [];

          // Backward compatible "hack" since some users of this API still
          // provide a unique argument in the form of `{ message }`. If we
          // detect this scenario then we use it as argument for `handler`.
          if (message.message !== undefined) {
            args = [message.message];
          }
          return Promise.resolve(handler(...args));
        }
      }
      return undefined; // not handled by us
    };
  }
  init() {
    _runtime.default.onMessage.addListener(this.onMessage);
  }
  unload() {
    _runtime.default.onMessage.removeListener(this.onMessage);
  }
}
exports.default = RemoteActionProvider;