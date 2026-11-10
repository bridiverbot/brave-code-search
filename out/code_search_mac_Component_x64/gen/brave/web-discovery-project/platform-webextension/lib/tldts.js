"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _tldtsExperimental = require("tldts-experimental");
Object.keys(_tldtsExperimental).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tldtsExperimental[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tldtsExperimental[key];
    }
  });
});