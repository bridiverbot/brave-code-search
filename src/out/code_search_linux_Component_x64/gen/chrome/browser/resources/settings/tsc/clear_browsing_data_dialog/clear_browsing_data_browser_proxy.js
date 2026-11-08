// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Clear browsing data" dialog
 * to interact with the browser.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
// Keep in sync with the respective enum in
// components/browsing_data/core/browsing_data_utils.h, and leave out values
// that are not available on Desktop.
// LINT.IfChange(TimePeriod)
export var TimePeriod;
(function (TimePeriod) {
    TimePeriod[TimePeriod["LAST_HOUR"] = 0] = "LAST_HOUR";
    TimePeriod[TimePeriod["LAST_DAY"] = 1] = "LAST_DAY";
    TimePeriod[TimePeriod["LAST_WEEK"] = 2] = "LAST_WEEK";
    TimePeriod[TimePeriod["FOUR_WEEKS"] = 3] = "FOUR_WEEKS";
    TimePeriod[TimePeriod["ALL_TIME"] = 4] = "ALL_TIME";
    // OLDER_THAN_30_DAYS = 5 is not used on Desktop.
    TimePeriod[TimePeriod["LAST_15_MINUTES"] = 6] = "LAST_15_MINUTES";
    TimePeriod[TimePeriod["TIME_PERIOD_LAST"] = 6] = "TIME_PERIOD_LAST";
})(TimePeriod || (TimePeriod = {}));
// LINT.ThenChange(/components/browsing_data/core/browsing_data_utils.h:TimePeriod)
// Keep in sync with the respective enum in
// components/browsing_data/core/browsing_data_utils.h, and leave out values
// that are not available on Desktop.
// This enum represents ClearBrowsingDataDialogV2 and does not match the
// datatypes in the old dialog.
// LINT.IfChange(BrowsingDataType)
export var BrowsingDataType;
(function (BrowsingDataType) {
    BrowsingDataType[BrowsingDataType["HISTORY"] = 0] = "HISTORY";
    BrowsingDataType[BrowsingDataType["CACHE"] = 1] = "CACHE";
    BrowsingDataType[BrowsingDataType["SITE_DATA"] = 2] = "SITE_DATA";
    // PASSWORDS = 3, Not used on Desktop.
    BrowsingDataType[BrowsingDataType["FORM_DATA"] = 4] = "FORM_DATA";
    BrowsingDataType[BrowsingDataType["SITE_SETTINGS"] = 5] = "SITE_SETTINGS";
    BrowsingDataType[BrowsingDataType["DOWNLOADS"] = 6] = "DOWNLOADS";
    BrowsingDataType[BrowsingDataType["HOSTED_APPS_DATA"] = 7] = "HOSTED_APPS_DATA";
    // TABS = 8, Not used on Desktop.
    BrowsingDataType[BrowsingDataType["SKILLS"] = 9] = "SKILLS";
    // 
    BrowsingDataType[BrowsingDataType["BRAVE_AI_CHAT"] = 10] = "BRAVE_AI_CHAT";
    // 
})(BrowsingDataType || (BrowsingDataType = {}));
export class ClearBrowsingDataBrowserProxyImpl {
    clearBrowsingData(dataTypes, timePeriod) {
        return sendWithPromise('clearBrowsingData', dataTypes, timePeriod);
    }
    initialize() {
        return sendWithPromise('initializeClearBrowsingData');
    }
    getSyncState() {
        return sendWithPromise('getSyncState');
    }
    restartCounters(timePeriod) {
        chrome.send('restartClearBrowsingDataCounters', [timePeriod]);
    }
    recordSettingsClearBrowsingDataTimePeriodHistogram(bucket) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.ClearBrowsingData.Advanced.TimePeriod',
            bucket,
            TimePeriod.TIME_PERIOD_LAST + 1,
        ]);
    }
    static getInstance() {
        return instance || (instance = new ClearBrowsingDataBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
