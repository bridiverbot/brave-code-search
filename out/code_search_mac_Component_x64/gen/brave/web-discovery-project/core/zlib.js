"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "deflate", {
  enumerable: true,
  get: function () {
    return _zlib.deflate;
  }
});
Object.defineProperty(exports, "inflate", {
  enumerable: true,
  get: function () {
    return _zlib.inflate;
  }
});
var _zlib = require("../platform/lib/zlib");