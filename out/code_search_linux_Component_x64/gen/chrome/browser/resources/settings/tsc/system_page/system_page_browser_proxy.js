// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Handles interprocess communication for the system page. */
// clang-format on
import { loadTimeData } from '../i18n_setup.js';
export class SystemPageBrowserProxyImpl {
    showProxySettings() {
        chrome.send('showProxySettings');
    }
    wasHardwareAccelerationEnabledAtStartup() {
        return loadTimeData.getBoolean('hardwareAccelerationEnabledAtStartup');
    }
    static getInstance() {
        return instance || (instance = new SystemPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
