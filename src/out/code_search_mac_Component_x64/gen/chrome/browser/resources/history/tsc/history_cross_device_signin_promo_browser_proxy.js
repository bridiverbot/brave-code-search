// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { HistoryCrossDeviceSigninPromoHandler } from 'chrome://resources/cr_components/history/history_cross_device_signin_promo.mojom-webui.js';
export class HistoryCrossDeviceSigninPromoBrowserProxy {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        if (!instance) {
            instance = new HistoryCrossDeviceSigninPromoBrowserProxy(HistoryCrossDeviceSigninPromoHandler.getRemote());
        }
        return instance;
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
