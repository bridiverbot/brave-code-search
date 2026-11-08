// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-captions-page' is a component for showing captions
 * settings on chrome://settings/captions.
 */
import '../controls/settings_dropdown_menu.js';
import '../controls/settings_slider.js';
import '../settings_page/settings_subpage.js';
import './live_caption.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { FontsBrowserProxyImpl } from '/shared/settings/appearance_page/fonts_browser_proxy.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { loadTimeData } from '../i18n_setup.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './captions_page.css.js';
import { getHtml } from './captions_page.html.js';
const SettingsCaptionsPageElementBase = SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsCaptionsPageElement extends SettingsCaptionsPageElementBase {
    static get is() {
        return 'settings-captions-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            backgroundOpacityOptions_: { type: Array },
            colorOptions_: { type: Array },
            textFontOptions_: { type: Array },
            textOpacityOptions_: { type: Array },
            textShadowOptions_: { type: Array },
            textSizeOptions_: { type: Array },
            enableLiveCaption_: { type: Boolean },
            backgroundColorPref_: { type: Object },
            backgroundOpacityPref_: { type: Object },
            textColorPref_: { type: Object },
            textFontPref_: { type: Object },
            textOpacityPref_: { type: Object },
            textShadowPref_: { type: Object },
            textSizePref_: { type: Object },
        };
    }
    #backgroundOpacityOptions__accessor_storage = [
        {
            value: 100, // Default
            name: loadTimeData.getString('captionsOpacityOpaque'),
        },
        {
            value: 50,
            name: loadTimeData.getString('captionsOpacitySemiTransparent'),
        },
        {
            value: 0,
            name: loadTimeData.getString('captionsOpacityTransparent'),
        },
    ];
    /**
     * List of options for the background opacity drop-down menu.
     */
    get backgroundOpacityOptions_() { return this.#backgroundOpacityOptions__accessor_storage; }
    set backgroundOpacityOptions_(value) { this.#backgroundOpacityOptions__accessor_storage = value; }
    #colorOptions__accessor_storage = [
        { value: '', name: loadTimeData.getString('captionsDefaultSetting') },
        {
            value: '0,0,0',
            name: loadTimeData.getString('captionsColorBlack'),
        },
        {
            value: '255,255,255',
            name: loadTimeData.getString('captionsColorWhite'),
        },
        {
            value: '255,0,0',
            name: loadTimeData.getString('captionsColorRed'),
        },
        {
            value: '0,255,0',
            name: loadTimeData.getString('captionsColorGreen'),
        },
        {
            value: '0,0,255',
            name: loadTimeData.getString('captionsColorBlue'),
        },
        {
            value: '255,255,0',
            name: loadTimeData.getString('captionsColorYellow'),
        },
        {
            value: '0,255,255',
            name: loadTimeData.getString('captionsColorCyan'),
        },
        {
            value: '255,0,255',
            name: loadTimeData.getString('captionsColorMagenta'),
        },
    ];
    /**
     * List of options for the color drop-down menu.
     */
    get colorOptions_() { return this.#colorOptions__accessor_storage; }
    set colorOptions_(value) { this.#colorOptions__accessor_storage = value; }
    #textFontOptions__accessor_storage = [];
    /**
     * List of fonts populated by the fonts browser proxy.
     */
    get textFontOptions_() { return this.#textFontOptions__accessor_storage; }
    set textFontOptions_(value) { this.#textFontOptions__accessor_storage = value; }
    #textOpacityOptions__accessor_storage = [
        {
            value: 100, // Default
            name: loadTimeData.getString('captionsOpacityOpaque'),
        },
        {
            value: 50,
            name: loadTimeData.getString('captionsOpacitySemiTransparent'),
        },
        {
            value: 10,
            name: loadTimeData.getString('captionsOpacityTransparent'),
        },
    ];
    /**
     * List of options for the text opacity drop-down menu.
     */
    get textOpacityOptions_() { return this.#textOpacityOptions__accessor_storage; }
    set textOpacityOptions_(value) { this.#textOpacityOptions__accessor_storage = value; }
    #textShadowOptions__accessor_storage = [
        { value: '', name: loadTimeData.getString('captionsTextShadowNone') },
        {
            value: '-2px -2px 4px rgba(0, 0, 0, 0.5)',
            name: loadTimeData.getString('captionsTextShadowRaised'),
        },
        {
            value: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            name: loadTimeData.getString('captionsTextShadowDepressed'),
        },
        {
            value: '-1px 0px 0px black, ' +
                '0px -1px 0px black, 1px 0px 0px black, 0px  1px 0px black',
            name: loadTimeData.getString('captionsTextShadowUniform'),
        },
        {
            value: '0px 0px 2px rgba(0, 0, 0, 0.5), 2px 2px 2px black',
            name: loadTimeData.getString('captionsTextShadowDropShadow'),
        },
    ];
    /**
     * List of options for the text shadow drop-down menu.
     *
     * Other clients are relying on these values to determine text shadow type
     * from preference. Please update the following files if any of these
     * values are changed:
     * https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/resources/ash/settings/os_a11y_page/captions_subpage.ts;l=142-170;drc=0918c7f73782a9575396f0c6b80a722b5a3d255a
     * https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/ash/arc/intent_helper/arc_settings_service.cc;l=86-94;drc=a782e6ac5124014b8473c9e7e445d799624b532c
     */
    get textShadowOptions_() { return this.#textShadowOptions__accessor_storage; }
    set textShadowOptions_(value) { this.#textShadowOptions__accessor_storage = value; }
    #textSizeOptions__accessor_storage = [
        { value: '25%', name: loadTimeData.getString('verySmall') },
        { value: '50%', name: loadTimeData.getString('small') },
        {
            value: '',
            name: loadTimeData.getString('medium'),
        }, // Default = 100%
        { value: '150%', name: loadTimeData.getString('large') },
        { value: '200%', name: loadTimeData.getString('veryLarge') },
    ];
    /**
     * List of options for the text size drop-down menu.
     */
    get textSizeOptions_() { return this.#textSizeOptions__accessor_storage; }
    set textSizeOptions_(value) { this.#textSizeOptions__accessor_storage = value; }
    #enableLiveCaption__accessor_storage = loadTimeData.getBoolean('enableLiveCaption');
    get enableLiveCaption_() { return this.#enableLiveCaption__accessor_storage; }
    set enableLiveCaption_(value) { this.#enableLiveCaption__accessor_storage = value; }
    #backgroundColorPref__accessor_storage;
    get backgroundColorPref_() { return this.#backgroundColorPref__accessor_storage; }
    set backgroundColorPref_(value) { this.#backgroundColorPref__accessor_storage = value; }
    #backgroundOpacityPref__accessor_storage;
    get backgroundOpacityPref_() { return this.#backgroundOpacityPref__accessor_storage; }
    set backgroundOpacityPref_(value) { this.#backgroundOpacityPref__accessor_storage = value; }
    #textColorPref__accessor_storage;
    get textColorPref_() { return this.#textColorPref__accessor_storage; }
    set textColorPref_(value) { this.#textColorPref__accessor_storage = value; }
    #textFontPref__accessor_storage;
    get textFontPref_() { return this.#textFontPref__accessor_storage; }
    set textFontPref_(value) { this.#textFontPref__accessor_storage = value; }
    #textOpacityPref__accessor_storage;
    get textOpacityPref_() { return this.#textOpacityPref__accessor_storage; }
    set textOpacityPref_(value) { this.#textOpacityPref__accessor_storage = value; }
    #textShadowPref__accessor_storage;
    get textShadowPref_() { return this.#textShadowPref__accessor_storage; }
    set textShadowPref_(value) { this.#textShadowPref__accessor_storage = value; }
    #textSizePref__accessor_storage;
    get textSizePref_() { return this.#textSizePref__accessor_storage; }
    set textSizePref_(value) { this.#textSizePref__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'accessibility.captions.background_color': 'backgroundColorPref_',
            'accessibility.captions.background_opacity': 'backgroundOpacityPref_',
            'accessibility.captions.text_color': 'textColorPref_',
            'accessibility.captions.text_font': 'textFontPref_',
            'accessibility.captions.text_opacity': 'textOpacityPref_',
            'accessibility.captions.text_shadow': 'textShadowPref_',
            'accessibility.captions.text_size': 'textSizePref_',
        });
    }
    firstUpdated() {
        FontsBrowserProxyImpl.getInstance().fetchFontsData().then((response) => this.setFontsData_(response));
    }
    /**
     * @return the Live Caption toggle element.
     */
    getLiveCaptionToggle() {
        const liveCaptionSection = this.shadowRoot.querySelector('settings-live-caption');
        return liveCaptionSection ? liveCaptionSection.getLiveCaptionToggle() :
            null;
    }
    /**
     * @param response A list of fonts.
     */
    setFontsData_(response) {
        const fontMenuOptions = [{ value: '', name: loadTimeData.getString('captionsDefaultSetting') }];
        for (const fontData of response.fontList) {
            fontMenuOptions.push({ value: fontData[0], name: fontData[1] });
        }
        this.textFontOptions_ = fontMenuOptions;
    }
    /**
     * @return the font family as a CSS property value.
     */
    getFontFamily_() {
        const fontFamily = this.textFontPref_?.value;
        // Return the preference value or the default font family for
        // video::-webkit-media-text-track-container defined in mediaControls.css.
        return fontFamily || 'sans-serif';
    }
    /**
     * @return the background color as a RGBA string.
     */
    computeBackgroundColor_() {
        const backgroundColor = this.formatRgbaString_(this.backgroundColorPref_?.value, this.backgroundOpacityPref_?.value);
        // Return the preference value or the default background color for
        // video::cue defined in mediaControls.css.
        return backgroundColor || 'rgba(0, 0, 0, 0.8)';
    }
    /**
     * @return the text color as a RGBA string.
     */
    computeTextColor_() {
        const textColor = this.formatRgbaString_(this.textColorPref_?.value, this.textOpacityPref_?.value);
        // Return the preference value or the default text color for
        // video::-webkit-media-text-track-container defined in mediaControls.css.
        return textColor || 'rgba(255, 255, 255, 1)';
    }
    /**
     * Formats the color as an RGBA string.
     * @param color The RGB values as a comma-separated string.
     * @param opacity The opacity value as a percentage.
     * @return The formatted RGBA string.
     */
    formatRgbaString_(color, opacity) {
        if (!color || opacity === undefined) {
            return '';
        }
        return 'rgba(' + color + ',' + opacity / 100.0 + ')';
    }
    /**
     * @param size The font size of the captions text as a percentage.
     * @return The padding around the captions text as a percentage.
     */
    computePadding_(size) {
        if (size === '') {
            return '1%';
        }
        return `${+size.slice(0, -1) / 100}%`;
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsCaptionsPageElement.is, SettingsCaptionsPageElement);
