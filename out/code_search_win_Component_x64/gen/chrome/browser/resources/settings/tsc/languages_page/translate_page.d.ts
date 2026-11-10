/**
 * @fileoverview 'settings-translate-page' is the settings page
 * translate settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './add_languages_dialog.js';
import './languages.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsTranslatePageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsTranslatePageElement extends SettingsTranslatePageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        supportedLanguages_: {
            type: ArrayConstructor;
        };
        translateTarget_: {
            type: StringConstructor;
        };
        alwaysTranslateLanguages_: {
            type: ArrayConstructor;
        };
        neverTranslateLanguages_: {
            type: ArrayConstructor;
        };
        showAddAlwaysTranslateDialog_: {
            type: BooleanConstructor;
        };
        showAddNeverTranslateDialog_: {
            type: BooleanConstructor;
        };
        addLanguagesDialogLanguages_: {
            type: ArrayConstructor;
        };
        translateEnabledPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor supportedLanguages_: chrome.languageSettingsPrivate.Language[];
    protected accessor translateTarget_: string;
    protected accessor alwaysTranslateLanguages_: chrome.languageSettingsPrivate.Language[];
    protected accessor neverTranslateLanguages_: chrome.languageSettingsPrivate.Language[];
    protected accessor translateEnabledPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor showAddAlwaysTranslateDialog_: boolean;
    protected accessor showAddNeverTranslateDialog_: boolean;
    protected accessor addLanguagesDialogLanguages_: chrome.languageSettingsPrivate.Language[];
    private languageHelper_;
    private boundOnLanguagesChanged_;
    private languageSettingsMetricsProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onLanguagesChanged_;
    protected onTargetLanguageChange_(): void;
    /**
     * Helper function to get the text to display in the target language drop down
     * list. Returns the display name in the current UI language and the native
     * name of the language.
     */
    protected getTargetLanguageDisplayOption_(item: chrome.languageSettingsPrivate.Language): string;
    /**
     * Checks if a Chrome language code is equal to the translate language code.
     * Used in the translate language selector. If the item matches the translate
     * target language, it will set that item as selected.
     */
    protected translateLanguageEqual_(chromeItemCode: string, translateTarget?: string): boolean;
    /**
     * A function used for sorting languages alphabetically by display name.
     */
    private alphabeticalSort_;
    /**
     * A filter function to return true if language is not undefined and has a
     * displayName.
     */
    protected hasDisplayName_(language: chrome.languageSettingsPrivate.Language | undefined): boolean;
    /**
     * Stamps and opens the Add Languages dialog, registering a listener to
     * disable the dialog's dom-if again on close.
     */
    protected onAddAlwaysTranslateLanguagesClick_(e: Event): void;
    protected onAlwaysTranslateDialogClose_(): void;
    /**
     * Helper function fired by the add dialog's on-languages-added event. Adds
     * selected languages to the always-translate languages list.
     */
    protected onAlwaysTranslateLanguagesAdded_(e: CustomEvent<string[]>): void;
    /**
     * Removes a language from the always translate languages list.
     */
    protected onRemoveAlwaysTranslateLanguageClick_(e: Event): void;
    /**
     * Stamps and opens the Add Languages dialog, registering a listener to
     * disable the dialog's dom-if again on close.
     */
    protected onAddNeverTranslateLanguagesClick_(e: Event): void;
    protected onNeverTranslateDialogClose_(): void;
    /**
     * Removes a language from the never translate languages list.
     */
    protected onNeverTranslateLanguagesAdded_(e: CustomEvent<string[]>): void;
    /**
     * Removes a language from the never translate languages list.
     */
    protected onRemoveNeverTranslateLanguageClick_(e: Event): void;
    protected onOfferTranslateOtherLanguagesSettingsBooleanControlChange_(e: Event): void;
    /**
     * @return Whether the list has any items.
     */
    protected hasSome_(list?: unknown[]): boolean;
    /**
     * @return Whether the delete button for never translate languages should be
     *     disabled.
     */
    protected shouldDisableDeleteNeverTranslateLanguage_(): boolean;
    protected getSupportedLanguages_(): chrome.languageSettingsPrivate.Language[];
    protected getAlwaysTranslateLanguages_(): chrome.languageSettingsPrivate.Language[];
    protected getNeverTranslateLanguages_(): chrome.languageSettingsPrivate.Language[];
    /**
     * Gets the list of languages that chrome can translate
     */
    private getTranslatableLanguages_;
    /**
     * Filters only for translate supported languages
     */
    private isTranslateSupported_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-translate-page': SettingsTranslatePageElement;
    }
}
export {};
