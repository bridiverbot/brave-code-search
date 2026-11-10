// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Numerical values should not be changed because they must stay in sync with
 * screen_ai::ScreenAIInstallState::State defined in screen_ai_install_state.h.
 */
export var ScreenAiInstallStatus;
(function (ScreenAiInstallStatus) {
    ScreenAiInstallStatus[ScreenAiInstallStatus["NOT_DOWNLOADED"] = 0] = "NOT_DOWNLOADED";
    ScreenAiInstallStatus[ScreenAiInstallStatus["DOWNLOADING"] = 1] = "DOWNLOADING";
    ScreenAiInstallStatus[ScreenAiInstallStatus["DOWNLOAD_FAILED"] = 2] = "DOWNLOAD_FAILED";
    ScreenAiInstallStatus[ScreenAiInstallStatus["DOWNLOADED"] = 3] = "DOWNLOADED";
})(ScreenAiInstallStatus || (ScreenAiInstallStatus = {}));
let instance = null;
export class AxAnnotationsBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new AxAnnotationsBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getScreenAiInstallState() {
        return sendWithPromise('getScreenAiInstallState');
    }
}
