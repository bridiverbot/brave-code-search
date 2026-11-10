/**
 * @fileoverview 'settings-spell-check-page' is the settings page
 * for spell check settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
export interface SettingsSpellCheckPageElement {
    $: {
        enableSpellcheckingToggle: SettingsToggleButtonElement;
    };
}
declare const SettingsSpellCheckPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSpellCheckPageElement extends SettingsSpellCheckPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
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
    private languageSettingsMetricsProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onEnableSpellcheckingToggleSettingsBooleanControlChange_(e: Event): void;
    protected onSelectedSpellingServiceChange_(): void;
    protected isSpellCheckToggleDisabled_(): boolean;
    protected getSpellCheckSubLabel_(): string;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-spell-check-page': SettingsSpellCheckPageElement;
    }
}
export {};
