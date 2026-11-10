"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearPref = clearPref;
exports.getAllPrefs = getAllPrefs;
exports.getPref = getPref;
exports.hasPref = hasPref;
exports.init = init;
exports.setPref = setPref;
var _events = _interopRequireDefault(require("../core/events"));
var _console = _interopRequireDefault(require("../core/console"));
var _globals = require("../platform/globals");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const PREFS_KEY = "extension-prefs";
let initialised = false;
const prefs = {};
function syncToStorage() {
  _globals.chrome.storage.local.set({
    [PREFS_KEY]: prefs
  });
}
function init() {
  return new Promise(resolve => {
    _globals.chrome.storage.local.get([PREFS_KEY], result => {
      Object.assign(prefs, result[PREFS_KEY] || {});
      initialised = true;
      resolve();
    });
  });
}
function getAllPrefs() {
  return Object.keys(prefs);
}
function getPref(pref, notFound) {
  if (!initialised) {
    _console.default.log(`loading pref ${pref} before prefs were initialised, you will not get the correct result`);
    return prefs[pref] || notFound;
  }
  if (prefs && prefs[pref] !== undefined) {
    return prefs[pref];
  }
  return notFound;
}
function setPref(pref, value) {
  const changed = prefs[pref] !== value;
  prefs[pref] = value;

  // trigger prefchange event
  if (changed) {
    _events.default.pub("prefchange", pref, "set");
  }
  if (!initialised) {
    _console.default.log(`setting pref ${pref} before prefs were initialised, you will not get the correct result`);
    return Promise.resolve();
  }
  if (changed) {
    syncToStorage();
  }
  return Promise.resolve();
}
function hasPref(pref) {
  return pref in prefs;
}
function clearPref(pref) {
  delete prefs[pref];

  // trigger prefchange event
  _events.default.pub("prefchange", pref, "clear");
  syncToStorage();
  return true;
}