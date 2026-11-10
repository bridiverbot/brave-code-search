"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PAGE_LOADING_STATE = void 0;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const PAGE_LOADING_STATE = exports.PAGE_LOADING_STATE = {
  CREATED: "created",
  NAVIGATING: "navigating",
  COMMITTED: "committed",
  LOADED: "loaded",
  COMPLETE: "complete"
};
class Page {
  constructor({
    id,
    active,
    url,
    incognito
  }) {
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "url", void 0);
    _defineProperty(this, "isRedirect", void 0);
    _defineProperty(this, "isPrivate", void 0);
    _defineProperty(this, "created", void 0);
    _defineProperty(this, "destroyed", void 0);
    _defineProperty(this, "lastRequestId", void 0);
    _defineProperty(this, "frames", void 0);
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "activeTime", void 0);
    _defineProperty(this, "activeFrom", void 0);
    _defineProperty(this, "counter", void 0);
    _defineProperty(this, "previous", void 0);
    this.id = id || 0;
    this.url = url;
    this.isRedirect = false;
    this.isPrivate = incognito;
    this.created = Date.now();
    this.destroyed = null;
    this.lastRequestId = null;
    this.frames = new Map([[0, {
      parentFrameId: -1,
      url
    }]]);
    this.state = PAGE_LOADING_STATE.CREATED;
    this.activeTime = 0;
    this.activeFrom = active ? Date.now() : 0;
    this.counter = 0;
  }
  setActive(active) {
    if (active && this.activeFrom === 0) {
      this.activeFrom = Date.now();
    } else if (!active && this.activeFrom > 0) {
      this.activeTime += Date.now() - this.activeFrom;
      this.activeFrom = 0;
    }
  }
  updateState(newState) {
    this.state = newState;
  }
  stage() {
    this.setActive(false);
    this.destroyed = Date.now();
    // unset previous (to prevent history chain memory leak)
    this.previous = undefined;
  }

  /**
   * Return the URL of top-level document (i.e.: tab URL).
   */
  getTabUrl() {
    return this.url;
  }

  /**
   * Return the URL of the frame.
   */
  getFrameUrl(context) {
    const {
      frameId
    } = context;
    const frame = this.frames.get(frameId);

    // In some cases, frame creation does not trigger a webRequest event (e.g.:
    // if the iframe is specified in the HTML of the page directly). In this
    // case we try to fall-back to something else: documentUrl, originUrl,
    // initiator.
    if (frame === undefined) {
      return context.documentUrl || context.originUrl || context.initiator;
    }
    return frame.url;
  }
}
exports.default = Page;