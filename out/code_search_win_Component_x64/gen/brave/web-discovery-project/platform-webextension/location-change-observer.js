"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _events = _interopRequireDefault(require("../core/events"));
var _globals = require("./globals");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

class LocationChangeObserver {
  constructor() {
    this.onLocationChangeHandler = ({
      tabId,
      url,
      frameId,
      transitionType
    }) => {
      // We should only forward main_document URLs for on-location change.
      if (frameId !== 0) {
        return;
      }

      // We need to check if the on-location change happened in a private tab.
      // Modules like web-discovery-project should not collect data about sites
      // visited in private tab.
      _globals.chrome.tabs.get(tabId, tab => {
        if (_globals.chrome.runtime.lastError) {
          return;
        }
        const {
          incognito: isPrivate,
          active,
          pinned
        } = tab;
        _events.default.pub("content:location-change", {
          active,
          frameId,
          isPrivate,
          pinned,
          tabId,
          transitionType,
          url,
          windowId: tabId,
          windowTreeInformation: {
            tabId
          }
        });
      });
    };
  }
  init() {
    _globals.chrome.webNavigation.onCommitted.addListener(this.onLocationChangeHandler);
    _globals.chrome.webNavigation.onHistoryStateUpdated.addListener(this.onLocationChangeHandler);
  }
  unload() {
    _globals.chrome.webNavigation.onCommitted.removeListener(this.onLocationChangeHandler);
    _globals.chrome.webNavigation.onHistoryStateUpdated.removeListener(this.onLocationChangeHandler);
  }
}
exports.default = LocationChangeObserver;