"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchArrayBuffer = exports.fetch = exports.default = exports.Response = exports.Request = exports.Headers = exports.AbortController = void 0;
exports.isTrackableOriginHeaderFromOurExtension = isTrackableOriginHeaderFromOurExtension;
require("abortcontroller-polyfill/dist/abortcontroller-polyfill-only");
var _globalsWindow = _interopRequireDefault(require("./globals-window"));
var _globalsChrome = _interopRequireDefault(require("./globals-chrome"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const {
  fetch,
  Headers,
  Request,
  Response,
  AbortController
} = _globalsWindow.default;

/**
 * Note: On Chrome, chrome.runtime.id is the same, but
 * on Firefox, they distinguish between the extension ID
 * (e.g., "firefox@brave.com") and the internal UUID
 * (e.g., "0b3696ed-9250-44a9-93d3-0c43caea7b3b").
 *
 * On Firefox, the UUID is by user. That means different users
 * of the same extension will have different (but fixed) UUIDs.
 */
exports.AbortController = AbortController;
exports.Response = Response;
exports.Request = Request;
exports.Headers = Headers;
exports.fetch = exports.fetchArrayBuffer = exports.default = fetch;
function getExtensionUuid() {
  try {
    const id = _globalsChrome.default.i18n.getMessage("@@extension_id");
    if (id) {
      return id;
    }
  } catch (e) {
    // fallback
  }
  return _globalsChrome.default.runtime.id;
}
const extensionUuid = getExtensionUuid();
const blacklistedOriginHeaders = [`moz-extension://${extensionUuid}`, `chrome-extension://${extensionUuid}`];

/**
 * Detects origin headers automatically added by the browser.
 * We have to detect them, so we can later remove them using the
 * webrequestAPI (see webrequest-pipeline/fetch-sanitizer.es).
 *
 * Warning: We have to be sure only to detect requests made from our
 * extension. Otherwise, we break other extensions that are relying on
 * the origin header.
 */
function isTrackableOriginHeaderFromOurExtension(value) {
  return blacklistedOriginHeaders.some(x => value === x);
}