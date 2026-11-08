// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageHandler } from '../../most_relevant_tab_resumption.mojom-webui.js';
export class MostRelevantTabResumptionProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        if (instance) {
            return instance;
        }
        const handler = PageHandler.getRemote();
        return instance = new MostRelevantTabResumptionProxyImpl(handler);
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
