"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _browser = require("../platform/browser");
Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _browser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _browser[key];
    }
  });
});