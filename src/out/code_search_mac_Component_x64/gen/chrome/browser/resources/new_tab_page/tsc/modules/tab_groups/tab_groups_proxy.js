// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageHandler } from '../../tab_groups.mojom-webui.js';
export class TabGroupsProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance ||
            (instance = new TabGroupsProxyImpl(PageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
