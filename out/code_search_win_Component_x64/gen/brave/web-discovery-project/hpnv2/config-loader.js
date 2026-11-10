"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logger = _interopRequireDefault(require("./logger"));
var _random = _interopRequireDefault(require("../core/crypto/random"));
var _pacemaker = _interopRequireDefault(require("../core/services/pacemaker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable spaced-comment */

// source: https://stackoverflow.com/a/1353711/783510
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
function parseServerTimestamp(ts) {
  if (ts) {
    const date = new Date(ts);
    if (isValidDate(date)) {
      return date;
    }
  }
  throw new Error("Corrupted date:", ts);
}
class ConfigLoader {
  constructor(endpoints) {
    this.endpoints = endpoints;
    this.loadConfigSuccessMinInterval = 60 * 60 * 1000; // 1 hour
    this.loadConfigSuccessMaxInterval = 4 * 60 * 60 * 1000; // 4 hours
    this.loadConfigFailureInterval = 10 * 1000; // 10 seconds

    // Triggered immediately when a current timestamp from the server
    // becomes available.
    this.onServerTimestampRefresh = (/*serverTs*/) => {};

    // triggered when the configuration changed
    this.onConfigUpdate = (/*config*/) => {};
  }
  init() {
    this.lastKnownConfig = null;
    this.pendingUpdates = 0;
    this.failedAttemptsInARow = 0;
    this.timeSyncInProgress = false;
    this.failedTimeSyncAttemptsInARow = 0;
  }
  unload() {
    _pacemaker.default.clearTimeout(this.nextConfigUpdate);
    _pacemaker.default.clearTimeout(this.nextClockSyncUpdate);
    this.nextConfigUpdate = null;
  }
  async fetchConfig() {
    _pacemaker.default.clearTimeout(this.nextConfigUpdate);
    this.nextConfigUpdate = null;
    try {
      this.pendingUpdates += 1;
      if (this.pendingUpdates > 1) {
        return;
      }

      // Fetch the config from the server:
      //
      // 'trafficHints' are only relevant for clients that have been
      // running for a while; for the initial load after extension
      // start, there is no need to include it.
      let fields = "minVersion,groupPubKeys,pubKeys,sourceMap";
      if (this.lastKnownConfig) {
        fields += ",trafficHints";
      }
      const config = await this.endpoints.getConfig(fields);
      if (config !== this.lastKnownConfig) {
        const parsedConfig = JSON.parse(config);
        _logger.default.log("New configuration found");
        try {
          await this.onConfigUpdate(parsedConfig);
          this.lastKnownConfig = config;
        } catch (e2) {
          // we can only reach this point because of a logical error
          _logger.default.error("Internal error: Callbacks must never throw", e2);
          throw e2;
        }
      }
      this.failedAttemptsInARow = 0;
    } catch (e) {
      this.failedAttemptsInARow += 1;
    } finally {
      this.pendingUpdates -= 1;
      if (this.pendingUpdates === 0) {
        this.scheduleNextConfigUpdate();
      }
    }
  }
  synchronizeClocks({
    force = false
  } = {}) {
    if (this.timeSyncInProgress && !force) {
      _logger.default.debug("clock synchronization already in progress");
      return this.timeSyncInProgress;
    }
    this.timeSyncInProgress = (async () => {
      try {
        _logger.default.debug("Fetching timestamp from server to synchronize clocks...");
        const ts = await this.endpoints.getServerTimestamp();
        const serverTs = parseServerTimestamp(ts);
        await this.onServerTimestampRefresh(serverTs);
        _logger.default.debug("Successfully synchronized clocks");
        this.failedTimeSyncAttemptsInARow = 0;
        this.timeSyncInProgress = false;
        _pacemaker.default.clearTimeout(this.nextClockSyncUpdate);
        this.nextClockSyncUpdate = null;
      } catch (e) {
        this.failedTimeSyncAttemptsInARow += 1;
        const cooldown = Math.min(5 * 1000 * this.failedTimeSyncAttemptsInARow, 60 * 60 * 1000);
        _logger.default.warn(`Failed to synchronize clock (reason: ${e}). ` + `${this.failedTimeSyncAttemptsInARow} failed attempts in a row. ` + `Try again in ${cooldown / 1000} seconds...`);
        _pacemaker.default.clearTimeout(this.nextClockSyncUpdate);
        this.nextClockSyncUpdate = _pacemaker.default.setTimeout(() => {
          this.synchronizeClocks({
            force: true
          });
        }, cooldown);
      }
    })();
    return this.timeSyncInProgress;
  }
  scheduleNextConfigUpdate() {
    let minCooldown;
    let randomExtraCooldown;
    if (this.failedAttemptsInARow === 0) {
      minCooldown = this.loadConfigSuccessMinInterval;
      randomExtraCooldown = this.loadConfigSuccessMaxInterval - this.loadConfigSuccessMinInterval;
    } else {
      minCooldown = this.failedAttemptsInARow * this.loadConfigFailureInterval;
      randomExtraCooldown = minCooldown;
    }

    // Note: random noise is added, so the collector cannot use
    // time-based attacks to target individual users by serving
    // them different group keys.
    const timeoutInMs = Math.floor(minCooldown + (0, _random.default)() * randomExtraCooldown);
    _pacemaker.default.clearTimeout(this.nextConfigUpdate);
    this.nextConfigUpdate = _pacemaker.default.setTimeout(() => {
      this.fetchConfig().catch(_logger.default.error);
    }, timeoutInMs);
  }
  isHealthy() {
    let healthy = true;
    if (!this.lastKnownConfig) {
      _logger.default.warn("No config loaded yet");
      healthy = false;
    }
    if (this.failedAttemptsInARow > 0) {
      _logger.default.warn(`${this.failedAttemptsInARow} failed config load attempts in a row`);
      healthy = false;
    }
    if (this.failedAttemptsInARow > 0) {
      _logger.default.warn(`${this.failedTimeSyncAttemptsInARow} failed time sync attempts in a row`);
      healthy = false;
    }
    return healthy;
  }
}
exports.default = ConfigLoader;