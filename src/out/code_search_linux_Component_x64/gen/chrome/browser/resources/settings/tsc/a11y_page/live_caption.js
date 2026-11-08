// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-live-caption' is a component for showing Live Caption
 * settings. It appears on the accessibility subpage
 * (chrome://settings/accessibility) on Mac and some versions of Windows and on
 * the captions subpage (chrome://settings/captions) on Linux and other versions
 * of Windows.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '../controls/settings_toggle_button.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CaptionsBrowserProxyImpl } from '/shared/settings/a11y_page/captions_browser_proxy.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './live_caption.css.js';
import { getHtml } from './live_caption.html.js';
// clang-format off
// 
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '../languages_page/add_languages_dialog.js';
import './live_translate.js';
import { assert } from 'chrome://resources/js/assert.js';
// 
// clang-format on
const SettingsLiveCaptionElementBase = I18nMixinLit(WebUiListenerMixinLit(PrefServiceObserverMixinLit(CrLitElement)));
// 
export class SettingsLiveCaptionElement extends SettingsLiveCaptionElementBase {
    static get is() {
        return 'settings-live-caption';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isLiveCaptionEnabled_: { type: Boolean },
            /**
             * The subtitle to display under the Live Caption heading. Generally, this
             * is a generic subtitle describing the feature. While the SODA model is
             * being downloading, this displays the download progress.
             */
            enableLiveCaptionSubtitle_: { type: String },
            enableLiveCaptionMultiLanguage_: { type: Boolean },
            enableLiveCaptionSpeechRecognitionSmallExpertModel_: { type: Boolean },
            speechRecognitionSmallExpertModelState_: { type: String },
            speechRecognitionSmallExpertModelProgress_: { type: Number },
            speechRecognitionSmallExpertModelSpeed_: { type: String },
            speechRecognitionSmallExpertModelEta_: { type: String },
            speechRecognitionSmallExpertModelSize_: { type: String },
            // 
            liveCaptionLanguagePref_: { type: Object },
            enableLiveTranslate_: { type: Boolean },
            installedLanguagePacks_: { type: Array },
            availableLanguagePacks_: { type: Array },
            detailLanguage_: { type: Object },
            showAddLanguagesDialog_: { type: Boolean },
            // 
        };
    }
    #isLiveCaptionEnabled__accessor_storage = false;
    get isLiveCaptionEnabled_() { return this.#isLiveCaptionEnabled__accessor_storage; }
    set isLiveCaptionEnabled_(value) { this.#isLiveCaptionEnabled__accessor_storage = value; }
    #enableLiveCaptionSubtitle__accessor_storage = loadTimeData.getString('captionsEnableLiveCaptionSubtitle');
    get enableLiveCaptionSubtitle_() { return this.#enableLiveCaptionSubtitle__accessor_storage; }
    set enableLiveCaptionSubtitle_(value) { this.#enableLiveCaptionSubtitle__accessor_storage = value; }
    #enableLiveCaptionMultiLanguage__accessor_storage = loadTimeData.getBoolean('enableLiveCaptionMultiLanguage');
    get enableLiveCaptionMultiLanguage_() { return this.#enableLiveCaptionMultiLanguage__accessor_storage; }
    set enableLiveCaptionMultiLanguage_(value) { this.#enableLiveCaptionMultiLanguage__accessor_storage = value; }
    #enableLiveCaptionSpeechRecognitionSmallExpertModel__accessor_storage = loadTimeData.valueExists('enableLiveCaptionSpeechRecognitionSmallExpertModel') ?
        loadTimeData.getBoolean('enableLiveCaptionSpeechRecognitionSmallExpertModel') :
        false;
    get enableLiveCaptionSpeechRecognitionSmallExpertModel_() { return this.#enableLiveCaptionSpeechRecognitionSmallExpertModel__accessor_storage; }
    set enableLiveCaptionSpeechRecognitionSmallExpertModel_(value) { this.#enableLiveCaptionSpeechRecognitionSmallExpertModel__accessor_storage = value; }
    #speechRecognitionSmallExpertModelState__accessor_storage = 'kNotInstalled';
    get speechRecognitionSmallExpertModelState_() { return this.#speechRecognitionSmallExpertModelState__accessor_storage; }
    set speechRecognitionSmallExpertModelState_(value) { this.#speechRecognitionSmallExpertModelState__accessor_storage = value; }
    #speechRecognitionSmallExpertModelProgress__accessor_storage = 0;
    get speechRecognitionSmallExpertModelProgress_() { return this.#speechRecognitionSmallExpertModelProgress__accessor_storage; }
    set speechRecognitionSmallExpertModelProgress_(value) { this.#speechRecognitionSmallExpertModelProgress__accessor_storage = value; }
    #speechRecognitionSmallExpertModelSpeed__accessor_storage = '';
    get speechRecognitionSmallExpertModelSpeed_() { return this.#speechRecognitionSmallExpertModelSpeed__accessor_storage; }
    set speechRecognitionSmallExpertModelSpeed_(value) { this.#speechRecognitionSmallExpertModelSpeed__accessor_storage = value; }
    #speechRecognitionSmallExpertModelEta__accessor_storage = '';
    get speechRecognitionSmallExpertModelEta_() { return this.#speechRecognitionSmallExpertModelEta__accessor_storage; }
    set speechRecognitionSmallExpertModelEta_(value) { this.#speechRecognitionSmallExpertModelEta__accessor_storage = value; }
    #speechRecognitionSmallExpertModelSize__accessor_storage = '';
    get speechRecognitionSmallExpertModelSize_() { return this.#speechRecognitionSmallExpertModelSize__accessor_storage; }
    set speechRecognitionSmallExpertModelSize_(value) { this.#speechRecognitionSmallExpertModelSize__accessor_storage = value; }
    #liveCaptionLanguagePref__accessor_storage;
    // 
    get liveCaptionLanguagePref_() { return this.#liveCaptionLanguagePref__accessor_storage; }
    set liveCaptionLanguagePref_(value) { this.#liveCaptionLanguagePref__accessor_storage = value; }
    #enableLiveTranslate__accessor_storage = loadTimeData.getBoolean('enableLiveTranslate');
    get enableLiveTranslate_() { return this.#enableLiveTranslate__accessor_storage; }
    set enableLiveTranslate_(value) { this.#enableLiveTranslate__accessor_storage = value; }
    #installedLanguagePacks__accessor_storage = [];
    get installedLanguagePacks_() { return this.#installedLanguagePacks__accessor_storage; }
    set installedLanguagePacks_(value) { this.#installedLanguagePacks__accessor_storage = value; }
    #availableLanguagePacks__accessor_storage = [];
    get availableLanguagePacks_() { return this.#availableLanguagePacks__accessor_storage; }
    set availableLanguagePacks_(value) { this.#availableLanguagePacks__accessor_storage = value; }
    #detailLanguage__accessor_storage;
    get detailLanguage_() { return this.#detailLanguage__accessor_storage; }
    set detailLanguage_(value) { this.#detailLanguage__accessor_storage = value; }
    #showAddLanguagesDialog__accessor_storage = false;
    get showAddLanguagesDialog_() { return this.#showAddLanguagesDialog__accessor_storage; }
    set showAddLanguagesDialog_(value) { this.#showAddLanguagesDialog__accessor_storage = value; }
    // 
    browserProxy_ = CaptionsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('accessibility.captions.live_caption_enabled', pref => {
            this.isLiveCaptionEnabled_ = pref.value;
        });
        // 
        this.mirrorPref('accessibility.captions.live_caption_language', 'liveCaptionLanguagePref_');
        if (!this.enableLiveCaptionSpeechRecognitionSmallExpertModel_) {
            this.browserProxy_.getInstalledLanguagePacks().then((installedLanguagePacks) => {
                this.installedLanguagePacks_ = installedLanguagePacks;
            });
            this.browserProxy_.getAvailableLanguagePacks().then((availableLanguagePacks) => {
                this.availableLanguagePacks_ = availableLanguagePacks;
            });
        }
        // 
        // 
        // 
        this.addWebUiListener('soda-download-progress-changed', (sodaDownloadProgress, languageCode) => this.onSodaDownloadProgressChangedForLanguage_(sodaDownloadProgress, languageCode));
        // 
        this.addWebUiListener('speech-recognition-small-expert-model-state-changed', (state, progress, speed, eta, size) => this.onSpeechRecognitionSmallExpertModelStateChanged_(state, progress, speed, eta, size));
        this.browserProxy_.liveCaptionSectionReady();
    }
    onSpeechRecognitionSmallExpertModelStateChanged_(state, progress, speed, eta, size) {
        this.speechRecognitionSmallExpertModelState_ = state;
        this.speechRecognitionSmallExpertModelProgress_ = progress;
        this.speechRecognitionSmallExpertModelSpeed_ = speed || '';
        this.speechRecognitionSmallExpertModelEta_ = eta || '';
        if (state === 'kInstalled') {
            if (size) {
                this.speechRecognitionSmallExpertModelSize_ = size;
            }
        }
        else {
            this.speechRecognitionSmallExpertModelSize_ = '';
        }
    }
    computeSpeechRecognitionSmallExpertModelSize_() {
        if (this.speechRecognitionSmallExpertModelSize_) {
            return ` (${this.speechRecognitionSmallExpertModelSize_})`;
        }
        return '';
    }
    computeSpeechRecognitionSmallExpertModelStatus_() {
        if (this.speechRecognitionSmallExpertModelState_ === 'kDownloading' ||
            this.speechRecognitionSmallExpertModelState_ === 'kInstalling') {
            return this.computeSpeechRecognitionSmallExpertModelDownloadProgress_();
        }
        if (this.speechRecognitionSmallExpertModelState_ === 'kInstalled') {
            return this.i18n('speechRecognitionSmallExpertModelDownloadComplete');
        }
        if (this.speechRecognitionSmallExpertModelState_ === 'kError' ||
            this.speechRecognitionSmallExpertModelState_ ===
                'kErrorCorruptPersistent') {
            return this.i18n('speechRecognitionSmallExpertModelDownloadError');
        }
        return '';
    }
    computeSpeechRecognitionSmallExpertModelDownloadProgress_() {
        let progressText = this.i18n('speechRecognitionSmallExpertModelDownloadProgress', this.speechRecognitionSmallExpertModelProgress_);
        const details = [
            this.speechRecognitionSmallExpertModelSpeed_,
            this.speechRecognitionSmallExpertModelEta_,
        ].filter(Boolean).join(' - ');
        if (details) {
            progressText += ` (${details})`;
        }
        return progressText;
    }
    onDeleteSpeechRecognitionSmallExpertModelClick_() {
        PrefService.getInstance().setPrefValue('accessibility.captions.live_caption_enabled', false);
        this.browserProxy_.deleteSpeechRecognitionSmallExpertModel();
        focusWithoutInk(this.getLiveCaptionToggle());
    }
    /**
     * @return the Live Caption toggle element.
     */
    getLiveCaptionToggle() {
        return this.shadowRoot.querySelector('#liveCaptionToggleButton');
    }
    computeMoreButtonAriaLabel_(name, code) {
        let label = this.i18n('moreActionsFor', name);
        if (this.isDefaultLanguage_(code)) {
            label += ` ${this.i18n('defaultLanguageLabel')}`;
        }
        return label;
    }
    onLiveCaptionEnabledChange_(event) {
        const liveCaptionEnabled = event.target.checked;
        chrome.metricsPrivate.recordBoolean('Accessibility.LiveCaption.EnableFromSettings', liveCaptionEnabled);
        // 
        if (!this.enableLiveCaptionSpeechRecognitionSmallExpertModel_ &&
            this.installedLanguagePacks_.length === 0) {
            this.installLanguagePacks_([this.liveCaptionLanguagePref_.value]);
        }
        // 
        if (this.enableLiveCaptionSpeechRecognitionSmallExpertModel_ &&
            liveCaptionEnabled) {
            this.browserProxy_.installSpeechRecognitionSmallExpertModel();
        }
    }
    onLiveCaptionMaskOffensiveWordsChange_(event) {
        const liveCaptionMaskOffensiveWords = event.target.checked;
        chrome.metricsPrivate.recordBoolean('Accessibility.LiveCaption.MaskOffensiveWords', liveCaptionMaskOffensiveWords);
    }
    // 
    onAddLanguagesClick_(e) {
        e.preventDefault();
        this.showAddLanguagesDialog_ = true;
    }
    onAddLanguagesDialogClose_() {
        this.showAddLanguagesDialog_ = false;
        const toFocus = this.shadowRoot.querySelector('#addLanguage');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    onDotsClick_(e) {
        const target = e.currentTarget;
        const code = target.dataset['code'];
        assert(code);
        const item = this.installedLanguagePacks_.find(p => p.code === code);
        assert(item);
        this.detailLanguage_ = Object.assign({}, item);
        this.$.menu.get().showAt(target);
    }
    isDefaultLanguage_(languageCode) {
        if (this.liveCaptionLanguagePref_ === undefined) {
            return false;
        }
        return languageCode === this.liveCaptionLanguagePref_.value;
    }
    onMakeDefaultClick_() {
        this.$.menu.get().close();
        PrefService.getInstance().setPrefValue('accessibility.captions.live_caption_language', this.detailLanguage_.code);
    }
    onRemoveLanguageClick_() {
        if (!this.detailLanguage_) {
            return;
        }
        this.$.menu.get().close();
        this.installedLanguagePacks_ = this.installedLanguagePacks_.filter(languagePack => languagePack.code !== this.detailLanguage_.code);
        this.browserProxy_.removeLanguagePack(this.detailLanguage_.code);
        if (this.installedLanguagePacks_.length === 0) {
            PrefService.getInstance().setPrefValue('accessibility.captions.live_caption_enabled', false);
            return;
        }
        if (!this.installedLanguagePacks_.some(languagePack => languagePack.code === this.liveCaptionLanguagePref_.value)) {
            PrefService.getInstance().setPrefValue('accessibility.captions.live_caption_language', this.installedLanguagePacks_[0].code);
        }
    }
    onLanguagesAdded_(e) {
        this.installLanguagePacks_(e.detail);
    }
    installLanguagePacks_(languageCodes) {
        const newLanguagePacks = [];
        languageCodes.forEach(languageCode => {
            const languagePackToAdd = this.availableLanguagePacks_.find(languagePack => languagePack.code === languageCode);
            if (languagePackToAdd) {
                newLanguagePacks.push(languagePackToAdd);
            }
        });
        this.installedLanguagePacks_ =
            this.installedLanguagePacks_.concat(newLanguagePacks);
        this.browserProxy_.installLanguagePacks(languageCodes);
    }
    filterAvailableLanguagePacks_() {
        const filteredLanguagePacks = this.availableLanguagePacks_.filter(availableLanguagePack => {
            return !this.installedLanguagePacks_.some(installedLanguagePack => installedLanguagePack.code === availableLanguagePack.code);
        });
        return filteredLanguagePacks.map(languagePack => ({
            code: languagePack.code,
            displayName: languagePack.displayName,
            // The native display name for language packs is not shown.
            nativeDisplayName: languagePack.nativeDisplayName,
        }));
    }
    // 
    // 
    // 
    /**
     * Displays SODA download progress in the UI. When the language UI is visible,
     * which occurs when the kLiveCaptionMultiLanguage feature is enabled and when
     * the kLiveCaptionEnabled pref is true, download progress should appear next
     * to the selected language. Otherwise, the download progress appears as a
     * subtitle below the Live Caption toggle.
     * @param sodaDownloadProgress The message sent from the webui to be displayed
     *     as download progress for Live Caption.
     * @param languageCode The language code indicating which language pack the
     *     message applies to.
     */
    onSodaDownloadProgressChangedForLanguage_(sodaDownloadProgress, languageCode) {
        if (!this.enableLiveCaptionMultiLanguage_) {
            if (!this.enableLiveCaptionSpeechRecognitionSmallExpertModel_) {
                this.enableLiveCaptionSubtitle_ = sodaDownloadProgress;
            }
            return;
        }
        for (let i = 0; i < this.installedLanguagePacks_.length; i++) {
            const language = this.installedLanguagePacks_[i];
            if (language.code === languageCode) {
                language.downloadProgress = sodaDownloadProgress;
                this.requestUpdate();
                break;
            }
        }
    }
}
customElements.define(SettingsLiveCaptionElement.is, SettingsLiveCaptionElement);
