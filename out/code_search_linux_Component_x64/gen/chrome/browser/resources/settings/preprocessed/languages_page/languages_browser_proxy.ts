// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview A helper object used from the languages section
 * to interact with the browser.
 */

// 

export interface LanguagesBrowserProxy {
  // 

  getLanguageSettingsPrivate(): typeof chrome.languageSettingsPrivate;
}

export class LanguagesBrowserProxyImpl implements LanguagesBrowserProxy {
  // 

  getLanguageSettingsPrivate() {
    return chrome.languageSettingsPrivate;
  }

  static getInstance(): LanguagesBrowserProxy {
    return instance || (instance = new LanguagesBrowserProxyImpl());
  }

  static setInstance(obj: LanguagesBrowserProxy) {
    instance = obj;
  }
}

let instance: LanguagesBrowserProxy|null = null;
