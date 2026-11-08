// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeSettingsPrivate } from 'chrome://webui-test/fake_settings_private.js';
export class TestPrefsBrowserProxy {
    fakeApi;
    constructor(initialPrefs) {
        this.fakeApi = new FakeSettingsPrivate(initialPrefs);
    }
    getAllPrefs() {
        return this.fakeApi.getAllPrefs();
    }
    getPref(name) {
        return this.fakeApi.getPref(name);
    }
    setPref(name, value, pageId) {
        return this.fakeApi.setPref(name, value, pageId);
    }
    get onPrefsChanged() {
        return this.fakeApi.onPrefsChanged;
    }
}
