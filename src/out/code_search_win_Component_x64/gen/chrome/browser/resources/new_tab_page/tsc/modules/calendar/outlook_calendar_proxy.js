// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { OutlookCalendarPageHandler } from '../../outlook_calendar.mojom-webui.js';
export class OutlookCalendarProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance ||
            (instance = new OutlookCalendarProxyImpl(OutlookCalendarPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
