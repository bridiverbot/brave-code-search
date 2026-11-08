// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { recordDuration, recordLoadDuration } from '../metrics_utils.js';
import { WindowProxy } from '../window_proxy.js';
export class ModuleDescriptor {
    id_;
    initializeCallback_;
    constructor(id, initializeCallback) {
        this.id_ = id;
        this.initializeCallback_ = initializeCallback;
    }
    get id() {
        return this.id_;
    }
    /**
     * Initializes the module and returns one or more module elements on success.
     * @param timeout Timeout in milliseconds after which initialization aborts.
     * @param onNtpLoad `true` if the module is being initialized during the
     *     initial NTP load, `false` if it's being initialized later in the NTP's
     *     lifecycle.
     */
    async initialize(timeout, onNtpLoad = true) {
        const loadStartTime = WindowProxy.getInstance().now();
        const element = await Promise.race([
            this.initializeCallback_(),
            new Promise(resolve => {
                WindowProxy.getInstance().setTimeout(() => {
                    resolve(null);
                }, timeout);
            }),
        ]);
        if (!element) {
            return null;
        }
        const loadEndTime = WindowProxy.getInstance().now();
        const duration = loadEndTime - loadStartTime;
        recordLoadDuration('NewTabPage.Modules.Loaded', loadEndTime);
        recordLoadDuration(`NewTabPage.Modules.Loaded.${this.id_}`, loadEndTime);
        recordDuration('NewTabPage.Modules.LoadDuration', duration);
        recordDuration(`NewTabPage.Modules.LoadDuration.${this.id_}`, duration);
        const histogramBase = onNtpLoad ? 'NewTabPage.Modules.LoadedOnNTPLoad' :
            'NewTabPage.Modules.LoadedAfterNTPLoad';
        recordLoadDuration(`${histogramBase}`, loadEndTime);
        recordLoadDuration(`${histogramBase}.${this.id_}`, loadEndTime);
        return element;
    }
}
