"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "extractHostname", {
  enumerable: true,
  get: function () {
    return _tldts.getHostname;
  }
});
Object.defineProperty(exports, "getDomainWithoutSuffix", {
  enumerable: true,
  get: function () {
    return _tldts.getDomainWithoutSuffix;
  }
});
var _tldts = require("../platform/lib/tldts");