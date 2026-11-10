// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { GoogleCalendarPageHandler } from '../../google_calendar.mojom-webui.js';
export class GoogleCalendarProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance ||
            (instance = new GoogleCalendarProxyImpl(GoogleCalendarPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
