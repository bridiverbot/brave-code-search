// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class CountryDetailManagerProxyImpl {
    getCountryList(forAccountStorage) {
        return chrome.autofillPrivate.getCountryList(forAccountStorage);
    }
    getAddressFormat(countryCode) {
        return chrome.autofillPrivate.getAddressComponents(countryCode);
    }
    static getInstance() {
        return instance || (instance = new CountryDetailManagerProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
