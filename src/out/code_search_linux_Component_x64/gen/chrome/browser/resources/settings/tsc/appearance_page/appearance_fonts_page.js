// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../controls/settings_slider.js';
import '../settings_page/settings_subpage.js';
import '../controls/settings_dropdown_menu.js';
import { FontsBrowserProxyImpl } from '/shared/settings/appearance_page/fonts_browser_proxy.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './appearance_fonts_page.css.js';
import { getHtml } from './appearance_fonts_page.html.js';
const FONT_SIZE_RANGE = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24,
    26, 28, 30, 32, 34, 36, 40, 44, 48, 56, 64, 72,
];
const MINIMUM_FONT_SIZE_RANGE = [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24];
function ticksWithLabels(ticks) {
    return ticks.map(x => ({ label: `${x}`, value: x, ariaValue: undefined }));
}
const SettingsAppearanceFontsPageElementBase = SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsAppearanceFontsPageElement extends SettingsAppearanceFontsPageElementBase {
    static get is() {
        return 'settings-appearance-fonts-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            fontOptions_: { type: Array },
            fontSizeRange_: { type: Array },
            minimumFontSizeRange_: { type: Array },
            defaultFixedFontSizePref_: { type: Object },
            defaultFontSizePref_: { type: Object },
            fixedFontPref_: { type: Object },
            mathFontPref_: { type: Object },
            minimumFontSizePref_: { type: Object },
            sansSerifFontPref_: { type: Object },
            serifFontPref_: { type: Object },
            standardFontPref_: { type: Object },
        };
    }
    #fontOptions__accessor_storage = [];
    get fontOptions_() { return this.#fontOptions__accessor_storage; }
    set fontOptions_(value) { this.#fontOptions__accessor_storage = value; }
    #fontSizeRange__accessor_storage = ticksWithLabels(FONT_SIZE_RANGE);
    get fontSizeRange_() { return this.#fontSizeRange__accessor_storage; }
    set fontSizeRange_(value) { this.#fontSizeRange__accessor_storage = value; }
    #minimumFontSizeRange__accessor_storage = ticksWithLabels(MINIMUM_FONT_SIZE_RANGE);
    get minimumFontSizeRange_() { return this.#minimumFontSizeRange__accessor_storage; }
    set minimumFontSizeRange_(value) { this.#minimumFontSizeRange__accessor_storage = value; }
    #defaultFixedFontSizePref__accessor_storage;
    get defaultFixedFontSizePref_() { return this.#defaultFixedFontSizePref__accessor_storage; }
    set defaultFixedFontSizePref_(value) { this.#defaultFixedFontSizePref__accessor_storage = value; }
    #defaultFontSizePref__accessor_storage;
    get defaultFontSizePref_() { return this.#defaultFontSizePref__accessor_storage; }
    set defaultFontSizePref_(value) { this.#defaultFontSizePref__accessor_storage = value; }
    #fixedFontPref__accessor_storage;
    get fixedFontPref_() { return this.#fixedFontPref__accessor_storage; }
    set fixedFontPref_(value) { this.#fixedFontPref__accessor_storage = value; }
    #mathFontPref__accessor_storage;
    get mathFontPref_() { return this.#mathFontPref__accessor_storage; }
    set mathFontPref_(value) { this.#mathFontPref__accessor_storage = value; }
    #minimumFontSizePref__accessor_storage;
    get minimumFontSizePref_() { return this.#minimumFontSizePref__accessor_storage; }
    set minimumFontSizePref_(value) { this.#minimumFontSizePref__accessor_storage = value; }
    #sansSerifFontPref__accessor_storage;
    get sansSerifFontPref_() { return this.#sansSerifFontPref__accessor_storage; }
    set sansSerifFontPref_(value) { this.#sansSerifFontPref__accessor_storage = value; }
    #serifFontPref__accessor_storage;
    get serifFontPref_() { return this.#serifFontPref__accessor_storage; }
    set serifFontPref_(value) { this.#serifFontPref__accessor_storage = value; }
    #standardFontPref__accessor_storage;
    get standardFontPref_() { return this.#standardFontPref__accessor_storage; }
    set standardFontPref_(value) { this.#standardFontPref__accessor_storage = value; }
    browserProxy_ = FontsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'webkit.webprefs.default_fixed_font_size': 'defaultFixedFontSizePref_',
            'webkit.webprefs.default_font_size': 'defaultFontSizePref_',
            'webkit.webprefs.fonts.fixed.Zyyy': 'fixedFontPref_',
            'webkit.webprefs.fonts.math.Zyyy': 'mathFontPref_',
            'webkit.webprefs.fonts.sansserif.Zyyy': 'sansSerifFontPref_',
            'webkit.webprefs.fonts.serif.Zyyy': 'serifFontPref_',
            'webkit.webprefs.fonts.standard.Zyyy': 'standardFontPref_',
            'webkit.webprefs.minimum_font_size': 'minimumFontSizePref_',
        });
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.browserProxy_.fetchFontsData().then(this.setFontsData_.bind(this));
    }
    setFontsData_(response) {
        const fontMenuOptions = [];
        for (const fontData of response.fontList) {
            fontMenuOptions.push({ value: fontData[0], name: fontData[1] });
        }
        this.fontOptions_ = fontMenuOptions;
    }
    /**
     * Get the minimum font size, accounting for unset prefs.
     */
    getMinimumFontSize_() {
        return this.minimumFontSizePref_?.value || MINIMUM_FONT_SIZE_RANGE[0];
    }
    getMinimumSizeHidden_() {
        return this.minimumFontSizePref_ === undefined ||
            this.minimumFontSizePref_.value <= 0;
    }
    fontFamilyValueForFixed_() {
        if (!this.fixedFontPref_) {
            return '';
        }
        // 
        return this.fixedFontPref_.value;
    }
    computeFontFamilyStyle_(fontFamily) {
        return fontFamily ? JSON.stringify(fontFamily) : 'inherit';
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsAppearanceFontsPageElement.is, SettingsAppearanceFontsPageElement);
