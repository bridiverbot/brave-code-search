"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteResourceWatcher = void 0;
var _resourceLoaderStorage = _interopRequireDefault(require("../platform/resource-loader-storage"));
var _prefs = _interopRequireDefault(require("../core/prefs"));
var _encoding = require("../core/encoding");
var _zlib = require("../core/zlib");
var _arrayBufferUtils = require("../core/array-buffer-utils");
var _pacemaker = _interopRequireDefault(require("../core/services/pacemaker"));
var _logger = _interopRequireDefault(require("./logger"));
var _remoteResourceFetcher = _interopRequireDefault(require("./remote-resource-fetcher"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

// We can use the knowledge that the values originated from the
// "fetchResource" function (it is either string or Uint8Array).
function isContentEqual(x, y) {
  if (x === null || y === null) {
    return x === null && y === null;
  }
  if (typeof x === "string") {
    return typeof y === "string" && x === y;
  }
  if (x instanceof Uint8Array) {
    return y instanceof Uint8Array && (0, _arrayBufferUtils.isUint8ArrayEqual)(x, y);
  }
  throw new Error("Internal assumption violated");
}
class CacheInfo {
  constructor({
    moduleName,
    id,
    type,
    maxAge
  }) {
    _defineProperty(this, "prefPath", void 0);
    _defineProperty(this, "maxAge", void 0);
    _defineProperty(this, "lastContent", void 0);
    _defineProperty(this, "lastUpdated", void 0);
    if (!maxAge || maxAge <= 0) {
      throw new Error(`maxAge=${maxAge} is invalid`);
    }
    if (!moduleName || !id || !type) {
      throw new Error("missing path information");
    }
    this.prefPath = `cacheInfo.${moduleName}.${id}.${type}`;
    this.maxAge = maxAge;
    this.flush();
  }
  loadLastUpdatedFromDisk() {
    const value = _prefs.default.get(this.prefPath);
    if (value) {
      try {
        const lastUpdated = Number.parseInt(value);
        if (lastUpdated >= 0 && lastUpdated < Date.now()) {
          // Note: >= 0 is intended to rule out NaN, and comparing with
          // the current time should help to recover from edge cases
          // where the system was once incorrectly set to the future.
          //
          // In our case, it is always safe to start with an empty cache.
          this.lastUpdated = lastUpdated;
        }
      } catch (e) {
        _logger.default.warn(`Failed to parse value: ${value} (path: ${this.prefPath})`);
      }
    }
  }
  syncLastUpdatedToDisk() {
    _prefs.default.set(this.prefPath, String(this.lastUpdated));
  }
  isTooOld({
    byMoreThan = 0 * SECOND
  } = {}) {
    return Date.now() >= this.lastUpdated + this.maxAge + byMoreThan;
  }
  updateAndCheckIfModified(content) {
    const modified = !isContentEqual(this.lastContent, content);
    if (modified) {
      this.lastContent = content;
    }

    // always update the time, as we are interested in the last time
    // we fetched the resource, not the last time it was modified
    this.lastUpdated = Date.now();
    this.syncLastUpdatedToDisk();
    return modified;
  }
  update(content, {
    updateTimestamp = true
  }) {
    this.lastContent = content;
    if (updateTimestamp) {
      this.lastUpdated = Date.now();
      this.syncLastUpdatedToDisk();
    }
  }
  flush() {
    this.lastContent = null;
    this.lastUpdated = 0;
  }
}

/**
 * Callback that will be executed when the observed resource
 * has changed.
 *
 * After an extension restart, the callback will also be fired
 * once, after the last persisted state of the resource has been
 * loaded from disk.
 */

class RemoteResourceWatcher {
  constructor(options_) {
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "moduleName", void 0);
    _defineProperty(this, "resourceUrl", void 0);
    _defineProperty(this, "signatureUrl", void 0);
    _defineProperty(this, "onUpdate", void 0);
    _defineProperty(this, "uncompressWith", void 0);
    _defineProperty(this, "insecure", void 0);
    _defineProperty(this, "initialized", void 0);
    _defineProperty(this, "initInProgress", void 0);
    _defineProperty(this, "pendingUpdate", void 0);
    _defineProperty(this, "storage", void 0);
    _defineProperty(this, "verifiedContent", void 0);
    _defineProperty(this, "verifiedContentNeedsToBePersisted", void 0);
    _defineProperty(this, "resourceOutdated", void 0);
    _defineProperty(this, "signatureOutdated", void 0);
    _defineProperty(this, "contentFetcher", void 0);
    _defineProperty(this, "signatureFetcher", void 0);
    _defineProperty(this, "contentCache", void 0);
    _defineProperty(this, "signatureCache", void 0);
    _defineProperty(this, "verifier", void 0);
    _defineProperty(this, "knownFailingSignature", void 0);
    _defineProperty(this, "defaultRefreshTimer", void 0);
    _defineProperty(this, "earlyRetryTimer", void 0);
    const options = options_;
    options.caching = options.caching || {};
    const nonEmpty = (x, reason) => {
      if (!x) {
        throw new Error(reason);
      }
      return x;
    };
    this.id = nonEmpty(options.resource.id, "resource.id");
    this.moduleName = nonEmpty(options.moduleName, "moduleName");
    this.resourceUrl = nonEmpty(options.resource.url, "resource.url");
    this.insecure = options.insecure || false;
    if (!this.insecure) {
      this.signatureUrl = nonEmpty(options.signature.url, "signature.url");
      this.verifier = nonEmpty(options.signature.verifier, "signature.verifier");
    }
    this.onUpdate = nonEmpty(options.onUpdate, "onUpdate");
    this.uncompressWith = options.uncompressWith || "none";
    const maxAge = options.caching.maxAge || 1 * HOUR;
    this.initialized = false;
    this.initInProgress = null;

    // persistence layer where the data is stored once it
    // passed the verification
    this.storage = new _resourceLoaderStorage.default(["wdp", this.moduleName]);
    this.verifiedContent = null;
    this.verifiedContentNeedsToBePersisted = false;

    // to prevent simulataneous updates
    // (while an update is in progress, all new attempts will be skipped)
    this.pendingUpdate = null;

    // we only watch for changes to the resource, but once it changes
    // we have to fetch the new message signature as well.
    this.resourceOutdated = false;
    this.signatureOutdated = false;
    this.contentFetcher = new _remoteResourceFetcher.default({
      url: this.resourceUrl,
      binary: true
    });
    if (!this.insecure) {
      this.signatureFetcher = new _remoteResourceFetcher.default({
        url: this.signatureUrl,
        binary: false
      });
    }

    // to avoid repeating the same check
    this.knownFailingSignature = null;
    const cacheOptions = {
      moduleName: this.moduleName,
      id: this.id,
      maxAge
    };
    this.contentCache = new CacheInfo({
      type: "content",
      ...cacheOptions
    });
    if (!this.insecure) {
      this.signatureCache = new CacheInfo({
        type: "signature",
        ...cacheOptions
      });
    }
    this.defaultRefreshTimer = null;
    this.earlyRetryTimer = null;
  }
  async init() {
    if (this.initialized || this.initInProgress) {
      return;
    }
    let initFinished;
    this.initInProgress = new Promise(resolve => {
      initFinished = resolve;
    });
    try {
      var _this$signatureCache;
      if (this.pendingUpdate) {
        await this.pendingUpdate;
      }
      this.contentCache.loadLastUpdatedFromDisk();
      (_this$signatureCache = this.signatureCache) === null || _this$signatureCache === void 0 || _this$signatureCache.loadLastUpdatedFromDisk();
      try {
        this.verifiedContent = await this._loadFromDisk();
        if (this.verifiedContent) {
          this.contentCache.update(this.verifiedContent, {
            updateTimestamp: false
          });
          this._notifyObservers(this.verifiedContent);
        }
      } catch (e) {
        _logger.default.warn("Failed to load resources from disk. Starting with empty state.", e);
      }
      _pacemaker.default.clearTimeout(this.defaultRefreshTimer);
      _pacemaker.default.clearTimeout(this.earlyRetryTimer);
      this.earlyRetryTimer = null;
      this.defaultRefreshTimer = _pacemaker.default.everyFewMinutes(this._checkUpdates.bind(this));
      this.initialized = true;

      // Normally, we do not need to refresh resources during extension startup,
      // but for users that do not keep the browser open for long, waiting for
      // multiple minutes could delay the update process unnecessarly because each
      // browser restarts resets the count.
      if (this.contentCache.isTooOld({
        byMoreThan: 24 * HOUR
      })) {
        _logger.default.info("Resource is too old. Forcing immediate refresh for", this.resourceUrl);
        // pacemaker.setTimeout(this.forceUpdate.bind(this), 10000);
        _pacemaker.default.nextIdle(this.forceUpdate.bind(this)); // NOTE: nextIdle could take a very long time
      }
    } finally {
      initFinished();
      this.initInProgress = null;
    }
  }
  forceUpdate() {
    var _this$signatureFetche;
    _logger.default.info("Forced update for resource:", this.resourceUrl);
    this.contentFetcher.resetRateLimits();
    (_this$signatureFetche = this.signatureFetcher) === null || _this$signatureFetche === void 0 || _this$signatureFetche.resetRateLimits();
    this.resourceOutdated = true;
    this.signatureOutdated = true;
    this.knownFailingSignature = null;
    return this._checkUpdates();
  }
  unload() {
    var _this$signatureCache2;
    this.initialized = false;
    if (this.initInProgress) {
      // The initialization is not yet finished. In this rare scenario, race conditions
      // are almost unavoidable, but at least make an attempt to end in an consistent state.
      _logger.default.warn("Race condition: cannot gracefully stop initialization");
      this.initInProgress.then(() => this.unload()).catch(e => _logger.default.warn(e));
    }
    _pacemaker.default.clearTimeout(this.defaultRefreshTimer);
    _pacemaker.default.clearTimeout(this.earlyRetryTimer);
    this.defaultRefreshTimer = null;
    this.earlyRetryTimer = null;

    // null out fields that are potentially large
    this.verifiedContent = null;
    this.knownFailingSignature = null;
    this.contentCache.flush();
    (_this$signatureCache2 = this.signatureCache) === null || _this$signatureCache2 === void 0 || _this$signatureCache2.flush();
  }
  async _checkUpdates() {
    _pacemaker.default.clearTimeout(this.earlyRetryTimer);
    this.earlyRetryTimer = null;
    if (!this.initialized) {
      return;
    }
    if (this.pendingUpdate) {
      _logger.default.debug("There is already one update in progress");
      await this.pendingUpdate;
      return;
    }
    let updateFinished;
    this.pendingUpdate = new Promise(resolve => {
      updateFinished = resolve;
    });
    try {
      var _this$signatureFetche2;
      _logger.default.debug("Checking for updates for", this.resourceUrl);
      this.resourceOutdated = this.resourceOutdated || this.contentCache.isTooOld();
      if (this.resourceOutdated && !this.contentFetcher.tooManyRequests()) {
        _logger.default.info("Fetching new content from", this.resourceUrl);
        const content = await this.contentFetcher.fetch();
        const modified = this.contentCache.updateAndCheckIfModified(content);
        if (modified) {
          this.signatureOutdated = true;
          this.knownFailingSignature = null;
        }
        this.resourceOutdated = false;
      }
      if (this.signatureOutdated && !((_this$signatureFetche2 = this.signatureFetcher) !== null && _this$signatureFetche2 !== void 0 && _this$signatureFetche2.tooManyRequests())) {
        var _this$signatureFetche3, _this$signatureCache3, _this$signatureCache4;
        _logger.default.info("Fetching new signature from", this.signatureUrl);
        const content = await ((_this$signatureFetche3 = this.signatureFetcher) === null || _this$signatureFetche3 === void 0 ? void 0 : _this$signatureFetche3.fetch());
        const modified = (_this$signatureCache3 = this.signatureCache) === null || _this$signatureCache3 === void 0 ? void 0 : _this$signatureCache3.updateAndCheckIfModified(content);

        // Content has changed, but we still got the same, old signature.
        // It is unlikely that it will pass the verification, but as it can
        // happen that we saw a new signature before the actual content,
        // we still can try to verify it.
        if (modified) {
          this.signatureOutdated = false;
        }
        const message = this.contentCache.lastContent;
        const signature = (_this$signatureCache4 = this.signatureCache) === null || _this$signatureCache4 === void 0 ? void 0 : _this$signatureCache4.lastContent;
        if (message) {
          if (this.insecure) {
            this.verifiedContent = message;
            this.verifiedContentNeedsToBePersisted = true;
            this._notifyObservers(this.verifiedContent);
          } else if (signature && signature !== this.knownFailingSignature) {
            var _this$verifier;
            const isValid = await ((_this$verifier = this.verifier) === null || _this$verifier === void 0 ? void 0 : _this$verifier.checkSignature(message, signature));
            if (isValid) {
              _logger.default.info("Good signature from", this.signatureUrl);
              this.knownFailingSignature = null;
              this.signatureOutdated = false;
              if (!isContentEqual(message, this.verifiedContent)) {
                this.verifiedContent = message;
                this.verifiedContentNeedsToBePersisted = true;
                this._notifyObservers(this.verifiedContent);
              } else {
                // Edge case: it should be difficult to reach this point
                // except in test setups. It is not in itself a harmful case,
                // but newer signatures should normally not match older content.
                _logger.default.warn("Got new matching signature but the content did not change");
              }
            } else {
              if (modified) {
                _logger.default.warn("Signature did not match for", this.resourceUrl, ". Will retry later...");
              } else {
                _logger.default.info("Signature has not changed for", this.resourceUrl, "Most likely we got an outdated version from the cached. Will retry later...");
              }
              this.knownFailingSignature = signature;
            }
          }
        }
      }
      if (this.verifiedContentNeedsToBePersisted) {
        try {
          await this._writeToDisk();
          this.verifiedContentNeedsToBePersisted = false;
        } catch (e) {
          _logger.default.info("Failed to write verified resources to disk. Retrying later...", e);
        }
      }
    } catch (e) {
      _logger.default.warn("Failed to update resource:", this.resourceUrl, e);
    } finally {
      // if we were not successful in getting all content, do not wait
      // for the next updated interval (from pacemaker), but retry earlier
      this._scheduleEarlyRetryIfNecessary();
      this.pendingUpdate = null;
      updateFinished();
    }
  }
  _scheduleEarlyRetryIfNecessary() {
    const retryRequests = this.resourceOutdated || this.signatureOutdated;
    if (retryRequests && !this.earlyRetryTimer && this.initialized) {
      let cooldown = null;
      if (this.resourceOutdated) {
        cooldown = this.contentFetcher.getCooldownDuration();
      }
      if (this.signatureOutdated) {
        var _this$signatureFetche4;
        cooldown = Math.max(cooldown || 0, ((_this$signatureFetche4 = this.signatureFetcher) === null || _this$signatureFetche4 === void 0 ? void 0 : _this$signatureFetche4.getCooldownDuration()) || 0);
      }
      if (cooldown && cooldown < 1 * HOUR) {
        cooldown = Math.max(cooldown, 10 * SECOND);
        _logger.default.debug("Scheduling retry in", cooldown, "ms");
        this.earlyRetryTimer = _pacemaker.default.setTimeout(this._checkUpdates.bind(this), cooldown);
      }
    }
  }
  async _loadFromDisk() {
    try {
      return await this.storage.load();
    } catch (e) {
      // Could have other reason, but the most likely case is that the
      // key does not exist (e.g., in a fresh profile).
      // For now, just assume that this is the case, at the risk
      // of hiding real IO errors. (TODO: switch to a different
      // API that allows to detect whether a key exist or not?)
      _logger.default.warn(`Could not load resource "${this.moduleName}:${this.id}" from disk. Assuming this is a fresh profile, otherwise, this should not happen.`);
      return null;
    }
  }
  _writeToDisk() {
    // edge case: prevent races during shutdown where
    // verifiedContent has been already unloaded
    if (!this.initialized) {
      _logger.default.info("Skip persisting during shutdown.");
      return;
    }
    if (this.verifiedContent === null || this.verifiedContent === undefined) {
      // Should not be reachable, as shutdown has been already handled.
      _logger.default.warn("Refusing to zero out the persisted state.");
      return;
    }

    // requirements to the data store: it has to support string and Uint8Array
    return this.storage.save(this.verifiedContent);
  }
  _uncompressIfNeeded(data) {
    if (this.uncompressWith === "none") {
      return data;
    }
    if (this.uncompressWith === "gzip") {
      return (0, _encoding.fromUTF8)((0, _zlib.inflate)(data));
    }
    throw new Error(`Unexpected compression: ${this.uncompressWith}`);
  }
  _notifyObservers(verifiedContent) {
    if (verifiedContent !== null && verifiedContent !== undefined) {
      try {
        this.onUpdate(this._uncompressIfNeeded(verifiedContent));
      } catch (e) {
        _logger.default.warn(`onUpdate callback failed for resource ${this.resourceUrl}`, e);
      }
    }
  }
}
exports.RemoteResourceWatcher = RemoteResourceWatcher;