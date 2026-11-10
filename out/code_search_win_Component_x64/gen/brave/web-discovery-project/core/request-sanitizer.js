"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableRequestSanitizer = disableRequestSanitizer;
exports.enableRequestSanitizer = enableRequestSanitizer;
var _webrequest = _interopRequireDefault(require("./webrequest"));
var _stripApiHeaders = require("./helpers/strip-api-headers");
var _fetch = require("../platform/fetch");
var _console = _interopRequireDefault(require("./console"));
var _tlds = require("./tlds");
var _permissionManager = _interopRequireDefault(require("../platform/permission-manager"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function findHeader(requestHeaders, header) {
  const x = requestHeaders.find(({
    name
  }) => name.toLowerCase() === header);
  return x ? x.value : "";
}
function safeFilter(req) {
  const {
    requestHeaders,
    type,
    url,
    tabId
  } = req;
  if (tabId !== -1) {
    return undefined;
  }
  const hostname = (0, _tlds.extractHostname)(url);
  if (!hostname) {
    _console.default.warn("Could not extract hostname", url);
    return undefined;
  }
  const headersToRemove = [];
  if ((0, _stripApiHeaders.isSafeToRemoveHeaders)(hostname)) {
    headersToRemove.push("origin", "cookie");
    if (type === "xmlhttprequest") {
      headersToRemove.push("accept-language", "user-agent");
    }
  } else if ((0, _fetch.isTrackableOriginHeaderFromOurExtension)(findHeader(requestHeaders, "origin"))) {
    headersToRemove.push("origin"); // Prevent extension origin leaks
  }
  if (headersToRemove.length > 0) {
    return {
      requestHeaders: requestHeaders.filter(h => !headersToRemove.includes(h.name.toLowerCase()))
    };
  }
  return undefined;
}
let HAS_RIGHT_PERMISSIONS = false;
async function enableRequestSanitizer() {
  // WebExtension might not have webRequest API permission
  HAS_RIGHT_PERMISSIONS = await _permissionManager.default.contains([_permissionManager.default.PERMISSIONS.WEB_REQUEST, _permissionManager.default.PERMISSIONS.WEB_REQUEST_BLOCKING]);
  if (!HAS_RIGHT_PERMISSIONS) {
    return;
  }
  const networkFilters = {
    urls: ["<all_urls>"],
    tabId: -1
  };
  _webrequest.default.onBeforeSendHeaders.addListener(safeFilter, networkFilters, ["blocking", "requestHeaders"]);
}
function disableRequestSanitizer() {
  if (!HAS_RIGHT_PERMISSIONS) {
    return;
  }
  _webrequest.default.onBeforeSendHeaders.removeListener(safeFilter);
}