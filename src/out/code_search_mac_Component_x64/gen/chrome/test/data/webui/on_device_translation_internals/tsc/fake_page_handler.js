// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class FakePageHandler extends TestBrowserProxy {
    constructor() {
        super([
            'installLanguagePackage',
            'uninstallLanguagePackage',
        ]);
    }
    installLanguagePackage(packageIndex) {
        this.methodCalled('installLanguagePackage', packageIndex);
    }
    uninstallLanguagePackage(packageIndex) {
        this.methodCalled('uninstallLanguagePackage', packageIndex);
    }
}
