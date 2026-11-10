"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getRequest = getRequest;
var _url = require("../../core/url");
var _timers = require("../../core/timers");
var _tlds = require("../../core/tlds");
var _fetch = require("../fetch");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// There needs to proper implementation, to avoid cases like:
// 1. Downloading streams.
// 2. Origin in web-extension.
function getRequest(url, headers, onCompletedHandlerFinished = undefined) {
  var _chrome;
  if (((_chrome = chrome) === null || _chrome === void 0 || (_chrome = _chrome.webDiscovery) === null || _chrome === void 0 ? void 0 : _chrome.retrieveBackupResults) !== undefined && (0, _tlds.getDomainWithoutSuffix)(url) == "google" && url.includes("/search?")) {
    return new Promise((resolve, reject) => {
      chrome.webDiscovery.retrieveBackupResults(url, response => {
        if (chrome.runtime.lastError || (response === null || response === void 0 ? void 0 : response.responseCode) !== 200) {
          var _chrome$runtime$lastE;
          console.error("Error retrieving backup results:", {
            err: chrome.runtime.lastError,
            response
          });
          reject(new Error(`err=${(_chrome$runtime$lastE = chrome.runtime.lastError) === null || _chrome$runtime$lastE === void 0 ? void 0 : _chrome$runtime$lastE.message}; response=${response}`));
        } else {
          resolve({
            body: response.html,
            status: response.responseCode,
            headers: {},
            ok: true,
            redirected: false,
            url
          });

          // Since the native API does not trigger onCompleted WebRequest events
          // we trigger it manually if we got a valid response.
          if (onCompletedHandlerFinished) {
            onCompletedHandlerFinished();
          }
        }
      });
    });
  }

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    let timeout;
    try {
      const abortController = new _fetch.AbortController();
      timeout = (0, _timers.setTimeout)(() => {
        timeout = null;
        reject(new Error("timeout"));
        abortController.abort();
      }, 10000);
      const response = await (0, _fetch.fetch)(url, {
        credentials: "omit",
        cache: "no-cache",
        redirect: "manual",
        signal: abortController.signal,
        headers: new _fetch.Headers(headers || {})
      });
      if (response.status !== 200 && response.status !== 0 /* local files */) {
        reject(new Error(`status not valid: ${response.status}`));
        abortController.abort();
        return;
      }
      if (!(0, _url.equals)(response.url, url) && !(0, _url.equals)(decodeURI(decodeURI(response.url)), decodeURI(decodeURI(url))) && !(0, _url.equals)(url.replace((0, _url.parse)(url).hash, ""), response.url)) {
        // there has been a redirect, we cannot guarantee that cookies were
        // not sent, therefore fail and consider as private
        reject(new Error(`DANGER: ${url} != ${response.url}`));
        abortController.abort();
        return;
      }
      resolve({
        body: await response.text(),
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        ok: response.ok,
        redirected: response.redirected,
        url: response.url
      });
    } catch (e) {
      reject(e);
    } finally {
      if (timeout) {
        (0, _timers.clearTimeout)(timeout);
      }
    }
  });
}
var _default = exports.default = getRequest;