import '../controls/settings_slider.js';
import '../settings_page/settings_subpage.js';
import '../controls/settings_dropdown_menu.js';
import type { SliderTick } from 'chrome://resources/cr_elements/cr_slider/cr_slider.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
/**
 * 'settings-appearance-fonts-page' is the settings page containing appearance
 * settings.
 */
export interface SettingsAppearanceFontsPageElement {
    $: {
        fixedFontPreview: HTMLElement;
        mathFontPreview: HTMLElement;
        minimumSizeFontPreview: HTMLElement;
        sansSerifFontPreview: HTMLElement;
        serifFontPreview: HTMLElement;
        standardFontPreview: HTMLElement;
    };
}
declare const SettingsAppearanceFontsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAppearanceFontsPageElement extends SettingsAppearanceFontsPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fontOptions_: {
            type: ArrayConstructor;
        };
        fontSizeRange_: {
            type: ArrayConstructor;
        };
        minimumFontSizeRange_: {
            type: ArrayConstructor;
        };
        defaultFixedFontSizePref_: {
            type: ObjectConstructor;
        };
        defaultFontSizePref_: {
            type: ObjectConstructor;
        };
        fixedFontPref_: {
            type: ObjectConstructor;
        };
        mathFontPref_: {
            type: ObjectConstructor;
        };
        minimumFontSizePref_: {
            type: ObjectConstructor;
        };
        sansSerifFontPref_: {
            type: ObjectConstructor;
        };
        serifFontPref_: {
            type: ObjectConstructor;
        };
        standardFontPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor fontOptions_: DropdownMenuOptionList;
    protected accessor fontSizeRange_: SliderTick[];
    protected accessor minimumFontSizeRange_: SliderTick[];
    protected accessor defaultFixedFontSizePref_: chrome.settingsPrivate.PrefObject<number> | undefined;
    protected accessor defaultFontSizePref_: chrome.settingsPrivate.PrefObject<number> | undefined;
    protected accessor fixedFontPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor mathFontPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor minimumFontSizePref_: chrome.settingsPrivate.PrefObject<number> | undefined;
    protected accessor sansSerifFontPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor serifFontPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor standardFontPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    private browserProxy_;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    private setFontsData_;
    /**
     * Get the minimum font size, accounting for unset prefs.
     */
    protected getMinimumFontSize_(): number;
    protected getMinimumSizeHidden_(): boolean;
    protected fontFamilyValueForFixed_(): string;
    protected computeFontFamilyStyle_(fontFamily?: string): string;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-appearance-fonts-page': SettingsAppearanceFontsPageElement;
    }
}
export {};
