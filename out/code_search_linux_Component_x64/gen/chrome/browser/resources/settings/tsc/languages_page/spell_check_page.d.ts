/**
 * @fileoverview 'settings-spell-check-page' is the settings page
 * for spell check settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import type { CrCollapseElement } from 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import type { LanguageState, SpellCheckLanguageState } from './languages_types.js';
export interface SettingsSpellCheckPageElement {
    $: {
        enableSpellcheckingToggle: SettingsToggleButtonElement;
        spellCheckCollapse: CrCollapseElement;
        spellCheckLanguagesList: HTMLElement;
    };
}
declare const SettingsSpellCheckPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSpellCheckPageElement extends SettingsSpellCheckPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        spellCheckLanguages_: {
            type: ArrayConstructor;
        };
        enableSpellcheckingPref_: {
            type: ObjectConstructor;
        };
        useSpellingServicePref_: {
            type: ObjectConstructor;
        };
        forcedDictionariesPref_: {
            type: ObjectConstructor;
        };
        blockedDictionariesPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor enableSpellcheckingPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor useSpellingServicePref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor forcedDictionariesPref_: chrome.settingsPrivate.PrefObject<string[]> | undefined;
    protected accessor blockedDictionariesPref_: chrome.settingsPrivate.PrefObject<string[]> | undefined;
    protected accessor spellCheckLanguages_: Array<LanguageState | SpellCheckLanguageState>;
    private languageHelper_;
    private boundOnLanguagesChanged_;
    private languageSettingsMetricsProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onEnableSpellcheckingToggleSettingsBooleanControlChange_(e: Event): void;
    protected onSelectedSpellingServiceChange_(): void;
    /**
     * Checks if there are any errors downloading the spell check dictionary.
     * This is used for showing/hiding error messages, spell check toggle and
     * retry. button.
     */
    protected errorsGreaterThan_(downloadDictionaryFailureCount: number, threshold: number): boolean;
    /**
     * Returns the value to use as the |pref| attribute for the policy indicator
     * of spellcheck languages, based on whether or not the language is enabled.
     * @param isEnabled Whether the language is enabled or not.
     */
    protected getIndicatorPrefForManagedSpellcheckLanguage_(isEnabled: boolean): chrome.settingsPrivate.PrefObject;
    /**
     * Returns an array of enabled languages, plus spellcheck languages that are
     * force-enabled by policy.
     */
    private getSpellCheckLanguages_;
    /**
     * Hide list of spell check languages if there is only 1 language and we don't
     * need to display any errors or management indicators for that language.
     */
    protected shouldHideSpellCheckLanguages_(): boolean;
    private updateSpellcheckLanguages_;
    private updateSpellcheckEnabled_;
    /**
     * Opens the Custom Dictionary page.
     */
    protected onEditDictionaryClick_(): void;
    /**
     * Handler for enabling or disabling spell check for a specific language.
     */
    protected onSpellCheckLanguageChange_(e: Event): void;
    private changeSpellCheckLanguage_;
    /**
     * Handler to initiate another attempt at downloading the spell check
     * dictionary for a specified language.
     */
    protected onRetryDictionaryDownloadClick_(e: Event): void;
    /**
     * Handler for clicking on the name of the language. The action taken must
     * match the control that is available.
     */
    protected onSpellCheckNameClick_(e: Event): void;
    /**
     * Name only supports clicking when language is not managed, supports
     * spellcheck, and the dictionary has been downloaded with no errors.
     */
    protected isSpellCheckNameClickDisabled_(item: LanguageState | SpellCheckLanguageState): boolean;
    protected isSpellCheckToggleDisabled_(): boolean;
    protected getSpellCheckSubLabel_(): string;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-spell-check-page': SettingsSpellCheckPageElement;
    }
}
export {};
