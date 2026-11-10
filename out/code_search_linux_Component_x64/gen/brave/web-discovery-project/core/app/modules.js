"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _background = _interopRequireDefault(require("../../core/background"));
var _background2 = _interopRequireDefault(require("../../web-discovery-project/background"));
var _background3 = _interopRequireDefault(require("../../hpnv2/background"));
var _background4 = _interopRequireDefault(require("../../fetcher/background"));
var _background5 = _interopRequireDefault(require("../../webrequest-pipeline/background"));
var _background6 = _interopRequireDefault(require("../../webextension-specific/background"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  'core': _background.default,
  'web-discovery-project': _background2.default,
  'hpnv2': _background3.default,
  'fetcher': _background4.default,
  'webrequest-pipeline': _background5.default,
  'webextension-specific': _background6.default
};