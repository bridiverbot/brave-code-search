"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _background = _interopRequireDefault(require("../core/base/background"));
var _webrequest = _interopRequireWildcard(require("../core/webrequest"));
var _platform = require("../core/platform");
var _pipeline = _interopRequireDefault(require("./pipeline"));
var _webrequestContext = _interopRequireDefault(require("./webrequest-context"));
var _pageStore = _interopRequireDefault(require("./page-store"));
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function modifyHeaderByType(headers, name, value) {
  const lowerCaseName = name.toLowerCase();
  const filteredHeaders = headers.filter(h => h.name.toLowerCase() !== lowerCaseName);
  if (!_platform.isWebExtension || value) {
    filteredHeaders.push({
      name,
      value
    });
  }
  return filteredHeaders;
}

/**
 * Small abstraction on top of blocking responses expected by WebRequest API. It
 * provides a few helpers to block, redirect or modify headers. It is also able
 * to create a valid blocking response taking into account platform-specific
 * allowed capabilities.
 */
class BlockingResponse {
  constructor(details) {
    this.details = details;

    // Blocking response
    this.redirectUrl = undefined;
    this.cancel = undefined;
    this.responseHeaders = undefined;
    this.requestHeaders = undefined;
    this.shouldIncrementCounter = undefined;
  }
  redirectTo(url) {
    this.redirectUrl = url;
  }
  block() {
    this.cancel = true;
  }
  modifyHeader(name, value) {
    this.requestHeaders = modifyHeaderByType(this.requestHeaders || this.details.requestHeaders || [], name, value);
  }
  modifyResponseHeader(name, value) {
    this.responseHeaders = modifyHeaderByType(this.responseHeaders || this.details.responseHeaders || [], name, value);
  }
  toWebRequestResponse(event) {
    const allowedProperties = _webrequest.VALID_RESPONSE_PROPERTIES[event];
    const response = {};
    for (let i = 0; i < allowedProperties.length; i += 1) {
      const prop = allowedProperties[i];
      const value = this[prop];
      if (value !== undefined) {
        response[prop] = value;
      }
    }
    return response;
  }
}
var _default = exports.default = (0, _background.default)({
  initialized: false,
  requiresServices: ["pacemaker"],
  enabled() {
    return true;
  },
  init() {
    if (this.initialized) {
      return;
    }
    this.pipelines = new Map();
    this.pageStore = new _pageStore.default();
    this.pageStore.init();
    this.initialized = true;
  },
  unload() {
    if (!this.initialized) {
      return;
    }

    // Remove webrequest listeners
    this.pipelines.forEach((pipeline, event) => {
      this.unloadPipeline(event);
    });
    this.pageStore.unload();
    this.initialized = false;
  },
  unloadPipeline(event) {
    if (this.pipelines.has(event)) {
      const pipeline = this.pipelines.get(event);
      this[event] = undefined;
      _webrequest.default[event].removeListener(pipeline.listener);
      pipeline.pipeline.unload();
      this.pipelines.delete(event);
    }
  },
  getPipeline(event) {
    if (this.pipelines.has(event)) {
      return this.pipelines.get(event).pipeline;
    }

    // It might be that the platform does not support all listeners:
    if (_webrequest.default[event] === undefined) {
      return null;
    }

    // Get allowed options for this event (e.g.: 'blocking', 'requestHeaders',
    // etc.)
    const extraInfoSpec = _webrequest.EXTRA_INFO_SPEC[event];

    // Create pipeline step
    const pipeline = new _pipeline.default(`webRequestPipeline.${event}`, [], false);

    // Register listener for this event
    const listener = details => {
      const webRequestContext = _webrequestContext.default.fromDetails(details, this.pageStore, event);

      // Request is not supported, so do not alter
      if (webRequestContext === null) {
        _logger.default.debug("Ignore unsupported request", details);
        return {};
      }
      const response = new BlockingResponse(details);
      pipeline.safeExecute(webRequestContext, response, true);
      return response.toWebRequestResponse(event);
    };
    this.pipelines.set(event, {
      pipeline,
      listener
    });

    // Register the event listener as an attribute of background so that we
    // can call it: `webRequestPipeline.background.onBeforeRequest(details)`.
    this[event] = listener;
    const urls = ["http://*/*", "https://*/*"];
    if (extraInfoSpec === undefined) {
      _webrequest.default[event].addListener(listener, {
        urls
      });
    } else {
      _webrequest.default[event].addListener(listener, {
        urls
      }, extraInfoSpec);
    }
    return pipeline;
  },
  events: {},
  actions: {
    addPipelineStep(stage, opts) {
      if (this.initialized) {
        const pipeline = this.getPipeline(stage);
        if (pipeline === null) {
          _logger.default.error("WebRequest pipeline (add) does not have stage", stage);
        } else {
          pipeline.addPipelineStep(opts);
        }
      }
    },
    removePipelineStep(stage, name) {
      if (this.initialized) {
        const pipeline = this.getPipeline(stage);
        if (pipeline === null) {
          _logger.default.error("WebRequest pipeline (remove) does not have stage", stage);
        } else {
          pipeline.removePipelineStep(name);
          if (pipeline.length === 0) {
            this.unloadPipeline(stage);
          }
        }
      }
    },
    getPageStore() {
      return this.pageStore;
    },
    getPageForTab(tabId) {
      return this.pageStore.tabs.get(tabId);
    }
  }
});