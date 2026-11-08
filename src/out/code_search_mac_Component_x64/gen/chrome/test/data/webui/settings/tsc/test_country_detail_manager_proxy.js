// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestCountryDetailManagerProxy extends TestBrowserProxy {
    countryList_ = [];
    addressComponents_ = null;
    constructor() {
        super([
            'getCountryList',
            'getAddressFormat',
        ]);
    }
    setGetCountryListRepsonse(countryList) {
        this.countryList_ = countryList;
    }
    setGetAddressFormatRepsonse(addressComponents) {
        this.addressComponents_ = addressComponents;
    }
    getCountryList(_forAccountStorage) {
        return Promise.resolve(structuredClone(this.countryList_));
    }
    getAddressFormat(_countryCode) {
        assert(this.addressComponents_);
        return Promise.resolve(structuredClone(this.addressComponents_));
    }
}
