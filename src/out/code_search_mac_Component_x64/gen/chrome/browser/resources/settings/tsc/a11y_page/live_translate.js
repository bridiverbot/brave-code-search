// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-live-translate' is a component for showing Live
 * Translate settings. It appears on the accessibility subpage
 * (chrome://settings/accessibility) on Mac and some versions of Windows and on
 * the captions subpage (chrome://settings/captions) on Linux, ChromeOS, and
 * other versions of Windows.
 */
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '../controls/settings_dropdown_menu.js';
import '../controls/settings_toggle_button.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { loadTimeData } from '../i18n_setup.js';
import { getLanguageHelperInstance } from '../languages_page/languages.js';
import { isTranslateBaseLanguage } from '../languages_page/languages_util.js';
import { getCss } from './live_translate.css.js';
import { getHtml } from './live_translate.html.js';
const SettingsLiveTranslateElementBase = WebUiListenerMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsLiveTranslateElement extends SettingsLiveTranslateElementBase {
    static get is() {
        return 'settings-live-translate';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isLiveTranslateEnabled_: { type: Boolean },
            enableLiveTranslateSubtitle_: { type: String },
            languageOptions_: { type: Array },
            translatableLanguages_: { type: Array },
        };
    }
    #isLiveTranslateEnabled__accessor_storage = false;
    get isLiveTranslateEnabled_() { return this.#isLiveTranslateEnabled__accessor_storage; }
    set isLiveTranslateEnabled_(value) { this.#isLiveTranslateEnabled__accessor_storage = value; }
    #enableLiveTranslateSubtitle__accessor_storage = loadTimeData.getString('captionsEnableLiveTranslateSubtitle');
    get enableLiveTranslateSubtitle_() { return this.#enableLiveTranslateSubtitle__accessor_storage; }
    set enableLiveTranslateSubtitle_(value) { this.#enableLiveTranslateSubtitle__accessor_storage = value; }
    #languageOptions__accessor_storage = [];
    get languageOptions_() { return this.#languageOptions__accessor_storage; }
    set languageOptions_(value) { this.#languageOptions__accessor_storage = value; }
    #translatableLanguages__accessor_storage = [];
    get translatableLanguages_() { return this.#translatableLanguages__accessor_storage; }
    set translatableLanguages_(value) { this.#translatableLanguages__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('accessibility.captions.live_translate_enabled', pref => {
            this.isLiveTranslateEnabled_ = pref.value;
        });
        const languageHelper = getLanguageHelperInstance();
        languageHelper.whenReady().then(() => {
            this.translatableLanguages_ =
                languageHelper.languages.supported
                    .filter(language => {
                    return isTranslateBaseLanguage(language);
                })
                    .map(language => {
                    return { value: language.code, name: language.displayName };
                });
        });
    }
    onLiveTranslateEnabledChange_() {
        chrome.metricsPrivate.recordBoolean('Accessibility.LiveTranslate.EnableFromSettings', this.$.liveTranslateToggleButton.checked);
    }
}
customElements.define(SettingsLiveTranslateElement.is, SettingsLiveTranslateElement);
