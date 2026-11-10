"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tabs = _interopRequireDefault(require("../platform/tabs"));
var _windows = _interopRequireDefault(require("../platform/windows"));
var _webnavigation = _interopRequireDefault(require("../platform/webnavigation"));
var _events = _interopRequireDefault(require("../core/events"));
var _logger = _interopRequireDefault(require("./logger"));
var _page = _interopRequireWildcard(require("./page"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
function makeTabContext(tab) {
  return new _page.default(tab);
}
class PageStore {
  constructor() {
    /**
     * Create a new `tabContext` for the new tab
     */
    _defineProperty(this, "onTabCreated", tab => {
      this.tabs.set(tab.id, makeTabContext(tab));
    });
    /**
     * Update an existing tab or create it if we do not have a context yet.
     */
    _defineProperty(this, "onTabUpdated", (tabId, info, tab) => {
      let tabContext = this.tabs.get(tabId);
      if (tabContext === undefined) {
        tabContext = makeTabContext(tab);
        this.tabs.set(tabId, tabContext);
      }

      // Update `isPrivate` and `url` if available
      tabContext.isPrivate = tab.incognito;
      tabContext.setActive(tab.active);
      if (info.url !== undefined) {
        tabContext.url = info.url;
      }
    });
    /**
     * Remove tab context for `tabId`.
     */
    _defineProperty(this, "onTabRemoved", tabId => {
      const tabContext = this.tabs.get(tabId);
      if (tabContext && tabContext.state === _page.PAGE_LOADING_STATE.COMPLETE) {
        this.stagePage(tabContext);
      }
      this.tabs.delete(tabId);
    });
    _defineProperty(this, "onTabActivated", ({
      previousTabId,
      tabId
    }) => {
      // if previousTabId is not set (e.g. on chrome), set all tabs to inactive
      // otherwise, we only have to mark the previous tab as inactive
      if (!previousTabId) {
        for (const tab of this.tabs.values()) {
          tab.setActive(false);
        }
      } else if (this.tabs.has(previousTabId)) {
        this.tabs.get(previousTabId).setActive(false);
      }
      if (this.tabs.has(tabId)) {
        this.tabs.get(tabId).setActive(true);
      }
    });
    _defineProperty(this, "onWindowFocusChanged", focusedWindow => {
      _tabs.default.query({
        active: true
      }, activeTabs => {
        activeTabs.forEach(({
          id,
          windowId
        }) => {
          const tabContext = this.tabs.get(id);
          if (!tabContext) {
            return;
          }
          if (windowId === focusedWindow) {
            tabContext.setActive(true);
          } else {
            tabContext.setActive(false);
          }
        });
      });
    });
    _defineProperty(this, "onBeforeNavigate", details => {
      const {
        frameId,
        tabId,
        url
      } = details;
      const tabContext = this.tabs.get(tabId);
      if (frameId === 0) {
        // We are starting a navigation to a new page - if the previous page is complete (i.e. fully
        // loaded), stage it before we create the new page info.
        if (tabContext && tabContext.state === _page.PAGE_LOADING_STATE.COMPLETE) {
          this.stagePage(tabContext);
        }
        // create a new page for the navigation
        this.tabs.delete(tabId);
        const nextContext = makeTabContext({
          id: tabId,
          active: false,
          url,
          incognito: tabContext ? tabContext.isPrivate : false
        });
        nextContext.previous = tabContext;
        this.tabs.set(tabId, nextContext);
        nextContext.updateState(_page.PAGE_LOADING_STATE.NAVIGATING);
      }
    });
    _defineProperty(this, "onNavigationCommitted", details => {
      const {
        frameId,
        tabId
      } = details;
      const tabContext = this.tabs.get(tabId);
      if (frameId === 0 && tabContext) {
        tabContext.updateState(_page.PAGE_LOADING_STATE.COMMITTED);
      } else if (tabContext && !tabContext.frames.has(frameId)) {
        // frame created without request
        this.onSubFrame(details);
      }
    });
    _defineProperty(this, "onNavigationLoaded", ({
      frameId,
      tabId
    }) => {
      const tabContext = this.tabs.get(tabId);
      if (frameId === 0 && tabContext) {
        tabContext.updateState(_page.PAGE_LOADING_STATE.LOADED);
      }
    });
    _defineProperty(this, "onNavigationComplete", ({
      frameId,
      tabId
    }) => {
      const tabContext = this.tabs.get(tabId);
      if (frameId === 0 && tabContext) {
        tabContext.updateState(_page.PAGE_LOADING_STATE.COMPLETE);
      }
    });
    this.tabs = new Map();
    this.staged = [];
  }
  init() {
    _tabs.default.onCreated.addListener(this.onTabCreated);
    _tabs.default.onUpdated.addListener(this.onTabUpdated);
    _tabs.default.onRemoved.addListener(this.onTabRemoved);
    _tabs.default.onActivated.addListener(this.onTabActivated);
    _webnavigation.default.onBeforeNavigate.addListener(this.onBeforeNavigate);
    _webnavigation.default.onCommitted.addListener(this.onNavigationCommitted);
    _webnavigation.default.onDOMContentLoaded.addListener(this.onNavigationLoaded);
    _webnavigation.default.onCompleted.addListener(this.onNavigationComplete);
    if (_windows.default && _windows.default.onFocusChanged) {
      _windows.default.onFocusChanged.addListener(this.onWindowFocusChanged);
    }
    // popupate initially open tabs
    _tabs.default.query({}, openTabs => {
      openTabs.forEach(tab => {
        this.onTabCreated(tab);
      });
    });
  }
  unload() {
    this.tabs.forEach(page => this.stagePage(page));
    this.tabs.clear();
    _tabs.default.onCreated.removeListener(this.onTabCreated);
    _tabs.default.onUpdated.removeListener(this.onTabUpdated);
    _tabs.default.onRemoved.removeListener(this.onTabRemoved);
    _tabs.default.onActivated.removeListener(this.onTabActivated);
    _webnavigation.default.onBeforeNavigate.removeListener(this.onBeforeNavigate);
    _webnavigation.default.onCommitted.removeListener(this.onNavigationCommitted);
    _webnavigation.default.onDOMContentLoaded.removeListener(this.onNavigationLoaded);
    _webnavigation.default.onCompleted.removeListener(this.onNavigationComplete);
    if (_windows.default && _windows.default.onFocusChanged) {
      _windows.default.onFocusChanged.removeListener(this.onWindowFocusChanged);
    }
  }
  stagePage(page) {
    if (this.staged.push(page) > 5) {
      this.staged.shift();
    }
    page.stage();
    _events.default.pub("webrequest-pipeline:stage", page);
  }
  onMainFrame({
    tabId,
    url,
    requestId
  }, event) {
    // main frame from tabId -1 is from service worker and should not be saved
    if (tabId === -1) {
      return;
    }
    // Update last request id from the tab
    let tabContext = this.tabs.get(tabId);
    if (tabContext === undefined) {
      tabContext = makeTabContext({
        url,
        incognito: false
      });
      this.tabs.set(tabId, tabContext);
    }
    if (event === "onBeforeRequest") {
      tabContext.frames.clear();
      // Detect redirect: if the last request on this tab had the same id and
      // this was from the same `onBeforeRequest` hook, we can assume this is a
      // redirection.
      if (tabContext.lastRequestId === requestId) {
        tabContext.isRedirect = true;
      }

      // Only keep track of `lastRequestId` with `onBeforeRequest` listener
      // since we need this information for redirect detection only and this can
      // be detected with this hook.
      tabContext.lastRequestId = requestId;
    }

    // Update context of tab with `url` and main frame information
    tabContext.url = url;
    tabContext.frames.set(0, {
      parentFrameId: -1,
      url
    });
  }
  onSubFrame(details) {
    const {
      tabId,
      frameId,
      parentFrameId,
      url
    } = details;
    const tab = this.tabs.get(tabId);
    if (tab === undefined) {
      _logger.default.log("Could not find tab for sub_frame request", details);
      return;
    }

    // Keep track of frameUrl as well as parent frame
    tab.frames.set(frameId, {
      parentFrameId,
      url
    });
  }
  getPageForRequest({
    tabId,
    frameId,
    originUrl,
    type,
    initiator
  }) {
    const tab = this.tabs.get(tabId);
    if (!tab) {
      return null;
    }
    // check if the current page has the given frame id, otherwise check if it belongs to the
    // previous page
    if (!tab.frames.has(frameId)) {
      if (tab.previous && tab.previous.frames.has(frameId)) {
        return tab.previous;
      }
      return null;
    }
    const couldBePreviousPage = frameId === 0 && type !== "main_frame" && tab.previous;
    // for main frame requests: check if the origin url is from the previous page (Firefox)
    if (couldBePreviousPage && tab.url !== originUrl && tab.previous.url === originUrl) {
      return tab.previous;
    }
    // on Chrome we have `initiator` which only contains the origin. In this case, check for a
    // different origin
    if (couldBePreviousPage && initiator && !tab.url.startsWith(initiator) && tab.previous.url.startsWith(initiator)) {
      return tab.previous;
    }
    return tab;
  }
}
exports.default = PageStore;