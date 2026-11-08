// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * These string values must be kept in sync with the C++ ImportDataHandler.
 */
export var ImportDataStatus;
(function (ImportDataStatus) {
    ImportDataStatus["INITIAL"] = "initial";
    ImportDataStatus["IN_PROGRESS"] = "inProgress";
    ImportDataStatus["SUCCEEDED"] = "succeeded";
    ImportDataStatus["FAILED"] = "failed";
})(ImportDataStatus || (ImportDataStatus = {}));
export class ImportDataBrowserProxyImpl {
    initializeImportDialog() {
        return sendWithPromise('initializeImportDialog');
    }
    importData(sourceBrowserProfileIndex, types) {
        chrome.send('importData', [sourceBrowserProfileIndex, types]);
    }
    importFromBookmarksFile() {
        chrome.send('importFromBookmarksFile');
    }
    static getInstance() {
        return instance || (instance = new ImportDataBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
