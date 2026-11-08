// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './font_menu.html.js';
const FontMenuElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
// Stores and propagates the data for the font menu used when read aloud is
// enabled.
export class FontMenuElement extends FontMenuElementBase {
    static get is() {
        return 'font-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            font: { type: String },
            pageLanguage: { type: String },
            areFontsLoaded: { type: Boolean },
            options_: { type: Array },
            nonModal: { type: Boolean },
        };
    }
    #options__accessor_storage = [];
    get options_() { return this.#options__accessor_storage; }
    set options_(value) { this.#options__accessor_storage = value; }
    #areFontsLoaded_accessor_storage = false;
    get areFontsLoaded() { return this.#areFontsLoaded_accessor_storage; }
    set areFontsLoaded(value) { this.#areFontsLoaded_accessor_storage = value; }
    #pageLanguage_accessor_storage = '';
    get pageLanguage() { return this.#pageLanguage_accessor_storage; }
    set pageLanguage(value) { this.#pageLanguage_accessor_storage = value; }
    #font_accessor_storage = '';
    get font() { return this.#font_accessor_storage; }
    set font(value) { this.#font_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('pageLanguage') ||
            changedProperties.has('areFontsLoaded')) {
            this.setFontOptions_(this.visualBrowserProxy_.getSupportedFonts());
        }
    }
    open(anchor, showAtConfig) {
        this.$.menu.open(anchor, showAtConfig);
    }
    close() {
        this.$.menu.close();
    }
    // An unsupported font renders as the first supported one, matching
    // getValidatedFontName().
    selectedFont_() {
        const fonts = this.options_.map(option => option.data);
        return fonts.includes(this.font) ? this.font : fonts[0];
    }
    onFontChange_() {
        this.fire(ToolbarEvent.CLOSE_ALL_MENUS);
    }
    setFontOptions_(fontList) {
        this.options_ = fontList.map(font => ({
            title: this.getFontItemLabel_(font),
            data: font,
            style: `font-family:${font}`,
        }));
    }
    getFontItemLabel_(font) {
        // Before fonts are loaded, append the loading text to the font names
        // so that the names will appear in the font menu like:
        // Poppins (loading).
        return this.areFontsLoaded ?
            `${font}` :
            `${font}\u00A0${this.i18n('readingModeFontLoadingText')}`;
    }
}
customElements.define(FontMenuElement.is, FontMenuElement);
