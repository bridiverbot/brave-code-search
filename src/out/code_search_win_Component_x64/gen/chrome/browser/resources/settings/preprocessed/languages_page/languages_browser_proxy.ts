// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview A helper object used from the languages section
 * to interact with the browser.
 */

// 
import {sendWithPromise} from 'chrome://resources/js/cr.js';
// 

export interface LanguagesBrowserProxy {
  // 
  /**
   * Sets the prospective UI language to the chosen language. This won't
   * affect the actual UI language until a restart.
   */
  setProspectiveUiLanguage(languageCode: string): void;

  getProspectiveUiLanguage(): Promise<string>;

  // 

  getLanguageSettingsPrivate(): typeof chrome.languageSettingsPrivate;
}

export class LanguagesBrowserProxyImpl implements LanguagesBrowserProxy {
  // 
  setProspectiveUiLanguage(languageCode: string) {
    chrome.send('setProspectiveUILanguage', [languageCode]);
  }

  getProspectiveUiLanguage() {
    return sendWithPromise<string>('getProspectiveUILanguage');
  }

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
