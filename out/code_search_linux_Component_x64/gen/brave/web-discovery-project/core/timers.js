"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "clearInterval", {
  enumerable: true,
  get: function () {
    return _timers.clearInterval;
  }
});
Object.defineProperty(exports, "clearTimeout", {
  enumerable: true,
  get: function () {
    return _timers.clearTimeout;
  }
});
Object.defineProperty(exports, "setInterval", {
  enumerable: true,
  get: function () {
    return _timers.setInterval;
  }
});
Object.defineProperty(exports, "setTimeout", {
  enumerable: true,
  get: function () {
    return _timers.setTimeout;
  }
});
var _timers = require("../platform/timers");