// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-languages-page' is the settings page
 * for language and input method settings.
 */
import 'chrome://resources/cr_components/managed_dialog/managed_dialog.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './add_languages_dialog.js';
import '../relaunch_confirmation_dialog.js';
import '../settings_page/settings_section.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { isWindows } from 'chrome://resources/js/platform.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { RelaunchMixinLit, RestartType } from '../relaunch_mixin_lit.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { getLanguageHelperInstance } from './languages.js';
import { getCss } from './languages_page.css.js';
import { getHtml } from './languages_page.html.js';
import { LanguageSettingsActionType, LanguageSettingsMetricsProxyImpl, LanguageSettingsPageImpressionType } from './languages_settings_metrics_proxy.js';
import { convertLanguageCodeForTranslate } from './languages_util.js';
/**
 * Millisecond delay that can be used when closing an action menu to keep it
 * briefly on-screen.
 */
export const kMenuCloseDelay = 100;
const SettingsLanguagesPageElementBase = RouteObserverMixinLit(RelaunchMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsLanguagesPageElement extends SettingsLanguagesPageElementBase {
    static get is() {
        return 'settings-languages-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            supportedLanguages_: { type: Array },
            enabledLanguages_: { type: Array },
            translateTarget_: { type: String },
            canEnableSomeSupportedLanguage_: { type: Boolean },
            prospectiveUILanguage_: { type: String },
            /**
             * The language to display the details for.
             */
            detailLanguage_: { type: Object },
            showAddLanguagesDialog_: { type: Boolean },
            addLanguagesDialogLanguages_: { type: Array },
            showManagedLanguageDialog_: { type: Boolean },
            restartTypeEnum: { type: Object },
        };
    }
    #supportedLanguages__accessor_storage = [];
    get supportedLanguages_() { return this.#supportedLanguages__accessor_storage; }
    set supportedLanguages_(value) { this.#supportedLanguages__accessor_storage = value; }
    #enabledLanguages__accessor_storage = [];
    get enabledLanguages_() { return this.#enabledLanguages__accessor_storage; }
    set enabledLanguages_(value) { this.#enabledLanguages__accessor_storage = value; }
    #translateTarget__accessor_storage = '';
    get translateTarget_() { return this.#translateTarget__accessor_storage; }
    set translateTarget_(value) { this.#translateTarget__accessor_storage = value; }
    #canEnableSomeSupportedLanguage__accessor_storage = false;
    get canEnableSomeSupportedLanguage_() { return this.#canEnableSomeSupportedLanguage__accessor_storage; }
    set canEnableSomeSupportedLanguage_(value) { this.#canEnableSomeSupportedLanguage__accessor_storage = value; }
    #prospectiveUILanguage__accessor_storage = '';
    get prospectiveUILanguage_() { return this.#prospectiveUILanguage__accessor_storage; }
    set prospectiveUILanguage_(value) { this.#prospectiveUILanguage__accessor_storage = value; }
    #detailLanguage__accessor_storage = undefined;
    get detailLanguage_() { return this.#detailLanguage__accessor_storage; }
    set detailLanguage_(value) { this.#detailLanguage__accessor_storage = value; }
    #showAddLanguagesDialog__accessor_storage = false;
    get showAddLanguagesDialog_() { return this.#showAddLanguagesDialog__accessor_storage; }
    set showAddLanguagesDialog_(value) { this.#showAddLanguagesDialog__accessor_storage = value; }
    #addLanguagesDialogLanguages__accessor_storage = [];
    get addLanguagesDialogLanguages_() { return this.#addLanguagesDialogLanguages__accessor_storage; }
    set addLanguagesDialogLanguages_(value) { this.#addLanguagesDialogLanguages__accessor_storage = value; }
    #showManagedLanguageDialog__accessor_storage = false;
    get showManagedLanguageDialog_() { return this.#showManagedLanguageDialog__accessor_storage; }
    set showManagedLanguageDialog_(value) { this.#showManagedLanguageDialog__accessor_storage = value; }
    #restartTypeEnum_accessor_storage = RestartType;
    get restartTypeEnum() { return this.#restartTypeEnum_accessor_storage; }
    set restartTypeEnum(value) { this.#restartTypeEnum_accessor_storage = value; }
    languageHelper_;
    boundOnLanguagesChanged_ = null;
    languageSettingsMetricsProxy_ = LanguageSettingsMetricsProxyImpl.getInstance();
    // 
    isChangeInProgress_ = false;
    // 
    connectedCallback() {
        super.connectedCallback();
        this.languageHelper_ = getLanguageHelperInstance();
        this.boundOnLanguagesChanged_ = (e) => {
            this.onLanguagesChanged_(e.detail);
        };
        this.languageHelper_.addEventListener('languages-changed', this.boundOnLanguagesChanged_);
        if (this.languageHelper_.languages) {
            this.onLanguagesChanged_(this.languageHelper_.languages);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.boundOnLanguagesChanged_) {
            this.languageHelper_.removeEventListener('languages-changed', this.boundOnLanguagesChanged_);
            this.boundOnLanguagesChanged_ = null;
        }
    }
    onLanguagesChanged_(languages) {
        this.supportedLanguages_ = languages.supported;
        this.enabledLanguages_ = languages.enabled;
        this.translateTarget_ = languages.translateTarget;
        // 
        this.prospectiveUILanguage_ = languages.prospectiveUILanguage ?? '';
        // 
        this.canEnableSomeSupportedLanguage_ = languages.supported.some(language => this.languageHelper_.canEnableLanguage(language));
    }
    /**
     * Renders the add languages dialog.
     */
    onAddLanguagesClick_(e) {
        e.preventDefault();
        this.languageSettingsMetricsProxy_.recordPageImpressionMetric(LanguageSettingsPageImpressionType.ADD_LANGUAGE);
        this.addLanguagesDialogLanguages_ = this.supportedLanguages_.filter(language => this.languageHelper_.canEnableLanguage(language));
        this.showAddLanguagesDialog_ = true;
    }
    onLanguagesAdded_(e) {
        const languagesToAdd = e.detail;
        languagesToAdd.forEach(languageCode => {
            this.languageHelper_.enableLanguage(languageCode);
            LanguageSettingsMetricsProxyImpl.getInstance().recordSettingsMetric(LanguageSettingsActionType.LANGUAGE_ADDED);
        });
    }
    onAddLanguagesDialogClose_() {
        this.showAddLanguagesDialog_ = false;
        this.addLanguagesDialogLanguages_ = [];
        focusWithoutInk(this.$.addLanguages);
    }
    /**
     * Formats language index (zero-indexed)
     */
    formatIndex_(index) {
        return (index + 1).toLocaleString();
    }
    /**
     * Used to determine which "Move" buttons to show for ordering enabled
     * languages.
     * @return True if |language| is at the |n|th index in the list of enabled
     *     languages.
     */
    isNthLanguage_(n) {
        if (this.enabledLanguages_ === undefined ||
            this.detailLanguage_ === undefined) {
            return false;
        }
        if (n >= this.enabledLanguages_.length) {
            return false;
        }
        const compareLanguage = this.enabledLanguages_[n];
        return this.detailLanguage_.language === compareLanguage.language;
    }
    /**
     * @return True if the "Move to top" option for |language| should be visible.
     */
    showMoveUp_() {
        // "Move up" is a no-op for the top language, and redundant with
        // "Move to top" for the 2nd language.
        return !this.isNthLanguage_(0) && !this.isNthLanguage_(1);
    }
    /**
     * @return True if the "Move down" option for |language| should be visible.
     */
    showMoveDown_() {
        return this.enabledLanguages_ !== undefined &&
            !this.isNthLanguage_(this.enabledLanguages_.length - 1);
    }
    /**
     * @param languageCode The language code identifying a language.
     * @param translateTarget The target language.
     * @return 'target' if |languageCode| matches the target language,
     *     'non-target' otherwise.
     */
    isTranslationTarget_(languageCode, translateTarget) {
        if (convertLanguageCodeForTranslate(languageCode) === translateTarget) {
            return 'target';
        }
        else {
            return 'non-target';
        }
    }
    isWindows_() {
        return isWindows;
    }
    async onMenuClose_() {
        // 
        if (!this.isChangeInProgress_) {
            return;
        }
        await this.updateComplete;
        this.isChangeInProgress_ = false;
        const restartButton = this.shadowRoot.querySelector('#restartButton');
        if (!restartButton) {
            return;
        }
        focusWithoutInk(restartButton);
        // 
    }
    // 
    /**
     * @param languageCode The language code identifying a language.
     * @param prospectiveUILanguage The prospective UI language.
     * @return True if the prospective UI language is set to
     *     |languageCode| but requires a restart to take effect.
     */
    isRestartRequired_(languageCode, prospectiveUILanguage) {
        if (!this.isConnected) {
            // Mysteriously happens in SettingsLanguagePageTest.LanguageMenu.
            return false;
        }
        // Using getLanguageHelperInstance() directly for the same reason as in
        // `canEnableSomeSupportedLanguage_` (see comment there).
        return prospectiveUILanguage === languageCode &&
            getLanguageHelperInstance().requiresRestart();
    }
    /**
     * @param prospectiveUILanguage The chosen UI language.
     * @return True if the given language cannot be set as the
     *     prospective UI language by the user.
     */
    disableUiLanguageCheckbox_(languageState, prospectiveUILanguage) {
        if (this.detailLanguage_ === undefined || languageState === undefined ||
            prospectiveUILanguage === undefined) {
            return true;
        }
        // If the language cannot be a UI language, we can't set it as the
        // prospective UI language.
        if (!languageState.language.supportsUI) {
            return true;
        }
        // Unchecking the currently chosen language doesn't make much sense.
        if (languageState.language.code === prospectiveUILanguage) {
            return true;
        }
        // Check if the language is prohibited by the current "AllowedLanguages"
        // policy.
        if (languageState.language.isProhibitedLanguage) {
            return true;
        }
        // Otherwise, the prospective language can be changed to this language.
        return false;
    }
    /**
     * Handler for changes to the UI language checkbox.
     */
    onUiLanguageChange_(e) {
        // We don't support unchecking this checkbox. TODO(michaelpg): Ask for a
        // simpler widget.
        assert(e.target.checked);
        this.isChangeInProgress_ = true;
        this.languageHelper_.setProspectiveUiLanguage(this.detailLanguage_.language.code);
        this.languageHelper_.moveLanguageToFront(this.detailLanguage_.language.code);
        LanguageSettingsMetricsProxyImpl.getInstance().recordSettingsMetric(LanguageSettingsActionType.CHANGE_CHROME_LANGUAGE);
        this.closeMenuSoon_();
    }
    /**
     * Checks whether the prospective UI language (the pref that indicates what
     * language to use in Chrome) matches the current language. This pref is
     * used only on Chrome OS and Windows; we don't control the UI language
     * elsewhere.
     * @param languageCode The language code identifying a language.
     * @param prospectiveUILanguage The prospective UI language.
     * @return True if the given language matches the prospective UI pref (which
     *     may be different from the actual UI language).
     */
    isProspectiveUiLanguage_(languageCode, prospectiveUILanguage) {
        return languageCode === prospectiveUILanguage;
    }
    /**
     * Handler for the restart button.
     */
    onRestartClick_() {
        this.performRestart(RestartType.RESTART);
    }
    // 
    /**
     * Moves the language to the top of the list.
     */
    onMoveToTopClick_() {
        this.$.menu.get().close();
        if (this.detailLanguage_.isForced) {
            // If language is managed, show dialog to inform user it can't be modified
            this.showManagedLanguageDialog_ = true;
            return;
        }
        this.languageHelper_.moveLanguageToFront(this.detailLanguage_.language.code);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.LANGUAGE_LIST_REORDERED);
    }
    /**
     * Moves the language up in the list.
     */
    onMoveUpClick_() {
        this.$.menu.get().close();
        if (this.detailLanguage_.isForced) {
            // If language is managed, show dialog to inform user it can't be modified
            this.showManagedLanguageDialog_ = true;
            return;
        }
        this.languageHelper_.moveLanguage(this.detailLanguage_.language.code, true /* upDirection */);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.LANGUAGE_LIST_REORDERED);
    }
    /**
     * Moves the language down in the list.
     */
    onMoveDownClick_() {
        this.$.menu.get().close();
        if (this.detailLanguage_.isForced) {
            // If language is managed, show dialog to inform user it can't be modified
            this.showManagedLanguageDialog_ = true;
            return;
        }
        this.languageHelper_.moveLanguage(this.detailLanguage_.language.code, false /* upDirection */);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.LANGUAGE_LIST_REORDERED);
    }
    /**
     * Disables the language.
     */
    onRemoveLanguageClick_() {
        this.$.menu.get().close();
        if (this.detailLanguage_.isForced) {
            // If language is managed, show dialog to inform user it can't be modified
            this.showManagedLanguageDialog_ = true;
            return;
        }
        this.languageHelper_.disableLanguage(this.detailLanguage_.language.code);
        this.languageSettingsMetricsProxy_.recordSettingsMetric(LanguageSettingsActionType.LANGUAGE_REMOVED);
    }
    /**
     * Returns either the "selected" class, if the language matches the
     * prospective UI language, or an empty string. Languages can only be
     * selected on Chrome OS and Windows.
     * @param languageCode The language code identifying a language.
     * @return The class name for the language item.
     */
    getLanguageItemClass_(languageCode) {
        if (isWindows && languageCode === this.prospectiveUILanguage_) {
            return 'selected';
        }
        return '';
    }
    onDotsClick_(e) {
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        const item = this.enabledLanguages_[index];
        assert(item);
        // Set a copy of the LanguageState object since it is not data-bound to
        // the languages model directly.
        this.detailLanguage_ = Object.assign({}, item);
        this.$.menu.get().showAt(target);
        this.languageSettingsMetricsProxy_.recordPageImpressionMetric(LanguageSettingsPageImpressionType.LANGUAGE_OVERFLOW_MENU_OPENED);
    }
    /**
     * Closes the shared action menu after a short delay, so when a checkbox is
     * clicked it can be seen to change state before disappearing.
     */
    closeMenuSoon_() {
        const menu = this.$.menu.get();
        setTimeout(function () {
            if (menu.open) {
                menu.close();
            }
        }, kMenuCloseDelay);
    }
    /**
     * Triggered when the managed language dialog is dismissed.
     */
    onManagedLanguageDialogClose_() {
        this.showManagedLanguageDialog_ = false;
    }
    currentRouteChanged(currentRoute) {
        if (currentRoute === routes.LANGUAGES) {
            this.languageSettingsMetricsProxy_.recordPageImpressionMetric(LanguageSettingsPageImpressionType.MAIN);
        }
    }
}
customElements.define(SettingsLanguagesPageElement.is, SettingsLanguagesPageElement);
