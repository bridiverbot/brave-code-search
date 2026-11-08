/**
 * @fileoverview 'settings-captions-page' is a component for showing captions
 * settings on chrome://settings/captions.
 */
import '../controls/settings_dropdown_menu.js';
import '../controls/settings_slider.js';
import '../settings_page/settings_subpage.js';
import './live_caption.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
declare const SettingsCaptionsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsCaptionsPageElement extends SettingsCaptionsPageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        backgroundOpacityOptions_: {
            type: ArrayConstructor;
        };
        colorOptions_: {
            type: ArrayConstructor;
        };
        textFontOptions_: {
            type: ArrayConstructor;
        };
        textOpacityOptions_: {
            type: ArrayConstructor;
        };
        textShadowOptions_: {
            type: ArrayConstructor;
        };
        textSizeOptions_: {
            type: ArrayConstructor;
        };
        enableLiveCaption_: {
            type: BooleanConstructor;
        };
        backgroundColorPref_: {
            type: ObjectConstructor;
        };
        backgroundOpacityPref_: {
            type: ObjectConstructor;
        };
        textColorPref_: {
            type: ObjectConstructor;
        };
        textFontPref_: {
            type: ObjectConstructor;
        };
        textOpacityPref_: {
            type: ObjectConstructor;
        };
        textShadowPref_: {
            type: ObjectConstructor;
        };
        textSizePref_: {
            type: ObjectConstructor;
        };
    };
    /**
     * List of options for the background opacity drop-down menu.
     */
    protected accessor backgroundOpacityOptions_: DropdownMenuOptionList;
    /**
     * List of options for the color drop-down menu.
     */
    protected accessor colorOptions_: DropdownMenuOptionList;
    /**
     * List of fonts populated by the fonts browser proxy.
     */
    protected accessor textFontOptions_: DropdownMenuOptionList;
    /**
     * List of options for the text opacity drop-down menu.
     */
    protected accessor textOpacityOptions_: DropdownMenuOptionList;
    /**
     * List of options for the text shadow drop-down menu.
     *
     * Other clients are relying on these values to determine text shadow type
     * from preference. Please update the following files if any of these
     * values are changed:
     * https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/resources/ash/settings/os_a11y_page/captions_subpage.ts;l=142-170;drc=0918c7f73782a9575396f0c6b80a722b5a3d255a
     * https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/ash/arc/intent_helper/arc_settings_service.cc;l=86-94;drc=a782e6ac5124014b8473c9e7e445d799624b532c
     */
    protected accessor textShadowOptions_: DropdownMenuOptionList;
    /**
     * List of options for the text size drop-down menu.
     */
    protected accessor textSizeOptions_: DropdownMenuOptionList;
    protected accessor enableLiveCaption_: boolean;
    protected accessor backgroundColorPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor backgroundOpacityPref_: chrome.settingsPrivate.PrefObject<number> | undefined;
    protected accessor textColorPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor textFontPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor textOpacityPref_: chrome.settingsPrivate.PrefObject<number> | undefined;
    protected accessor textShadowPref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor textSizePref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    connectedCallback(): void;
    firstUpdated(): void;
    /**
     * @return the Live Caption toggle element.
     */
    getLiveCaptionToggle(): SettingsToggleButtonElement | null;
    /**
     * @param response A list of fonts.
     */
    private setFontsData_;
    /**
     * @return the font family as a CSS property value.
     */
    protected getFontFamily_(): string;
    /**
     * @return the background color as a RGBA string.
     */
    protected computeBackgroundColor_(): string;
    /**
     * @return the text color as a RGBA string.
     */
    protected computeTextColor_(): string;
    /**
     * Formats the color as an RGBA string.
     * @param color The RGB values as a comma-separated string.
     * @param opacity The opacity value as a percentage.
     * @return The formatted RGBA string.
     */
    private formatRgbaString_;
    /**
     * @param size The font size of the captions text as a percentage.
     * @return The padding around the captions text as a percentage.
     */
    protected computePadding_(size: string): string;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-captions-page': SettingsCaptionsPageElement;
    }
}
export {};
