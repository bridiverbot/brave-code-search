// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './fre_chin.css.js';
import { getHtml } from './fre_chin.html.js';
export var FreChinMode;
(function (FreChinMode) {
    FreChinMode["SHORTCUT_SETUP"] = "shortcut-setup";
    FreChinMode["SHORTCUT_REMINDER"] = "shortcut-reminder";
})(FreChinMode || (FreChinMode = {}));
const OmniboxEverywhereFreChinElementBase = I18nMixinLit(CrLitElement);
export class OmniboxEverywhereFreChinElement extends OmniboxEverywhereFreChinElementBase {
    static get is() {
        return 'fre-chin';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            mode: { type: String },
            hotkeyTokens: { type: Array },
            dropdownOpen: { type: Boolean },
            smallLoomnibox: {
                type: Boolean,
                reflect: true,
                attribute: 'small-loomnibox',
            },
        };
    }
    #mode_accessor_storage = FreChinMode.SHORTCUT_SETUP;
    get mode() { return this.#mode_accessor_storage; }
    set mode(value) { this.#mode_accessor_storage = value; }
    #hotkeyTokens_accessor_storage = [];
    get hotkeyTokens() { return this.#hotkeyTokens_accessor_storage; }
    set hotkeyTokens(value) { this.#hotkeyTokens_accessor_storage = value; }
    #dropdownOpen_accessor_storage = false;
    get dropdownOpen() { return this.#dropdownOpen_accessor_storage; }
    set dropdownOpen(value) { this.#dropdownOpen_accessor_storage = value; }
    #smallLoomnibox_accessor_storage = false;
    get smallLoomnibox() { return this.#smallLoomnibox_accessor_storage; }
    set smallLoomnibox(value) { this.#smallLoomnibox_accessor_storage = value; }
    isSetupMode_() {
        return this.mode === FreChinMode.SHORTCUT_SETUP;
    }
    hasHotkeyTokens_() {
        return Array.isArray(this.hotkeyTokens) && this.hotkeyTokens.length > 0;
    }
    getDropdownAriaLabel_() {
        const baseLabel = this.i18n('loomniboxFreSelectKeyboardShortcut');
        if (this.hasHotkeyTokens_()) {
            return `${baseLabel}: ${this.hotkeyTokens.join(' ')}`;
        }
        return baseLabel;
    }
    getToSearchLabelHtml_() {
        return this.i18nAdvanced('loomniboxFreToSearchOrCustomize', {
            attrs: ['class'],
        });
    }
    getChangeShortcutLabelHtml_() {
        return this.i18nAdvanced('loomniboxFreChangeShortcutIn', {
            attrs: ['class'],
        });
    }
    onDropdownClick_(e) {
        e.stopPropagation();
        const trigger = e.currentTarget;
        const rect = trigger.getBoundingClientRect();
        const detail = {
            x: Math.round(rect.left),
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        };
        this.fire('show-hotkey-dropdown', detail);
    }
    onLabelClick_(e) {
        const target = e.target;
        if (target?.closest('.settings-link') || target?.closest('a')) {
            this.onSettingsClick_(e);
        }
    }
    onSettingsClick_(e) {
        e.preventDefault();
        this.fire('open-settings');
    }
    onCloseClick_() {
        this.fire('close');
    }
}
customElements.define(OmniboxEverywhereFreChinElement.is, OmniboxEverywhereFreChinElement);
