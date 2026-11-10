"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContentDocument = getContentDocument;
exports.parseHtml = parseHtml;
var _inject = _interopRequireDefault(require("../core/kord/inject"));
var _linkedom = require("linkedom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const core = _inject.default.module("core");
function getHTML(originalURL) {
  return core.action("getHTML", originalURL).then(html => {
    if (html) {
      return html;
    }
    throw new Error(`Failed to get content for tab with url=${originalURL}`);
  });
}
function parseHtml(html) {
  if (!parseHtml.domParser) {
    parseHtml.domParser = new _linkedom.DOMParser();
  }
  return parseHtml.domParser.parseFromString(html, "text/html");
}

/**
 * @param originalURL  URL as seen by the browser
 */
function getContentDocument(originalURL) {
  return getHTML(originalURL).then(parseHtml);
}