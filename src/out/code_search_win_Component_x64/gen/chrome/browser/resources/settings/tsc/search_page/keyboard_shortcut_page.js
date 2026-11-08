// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-keyboard-shortcut-page' is the settings page containing
 * the keyboard shortcut setting.
 */
import '../settings_page/settings_section.js';
import '../controls/settings_dropdown_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './keyboard_shortcut_page.css.js';
import { getHtml } from './keyboard_shortcut_page.html.js';
import { SearchEnginesBrowserProxyImpl, SearchEnginesInteractions } from './search_engines_browser_proxy.js';
export class KeyboardShortcutPageElement extends CrLitElement {
    static get is() {
        return 'settings-keyboard-shortcut-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            keyboardShortcutMenuOptions_: { type: Array },
        };
    }
    #keyboardShortcutMenuOptions__accessor_storage = [
        {
            value: 'true',
            name: loadTimeData.getString('searchEnginesKeyboardShortcutsSpaceOrTab'),
        },
        {
            value: 'false',
            name: loadTimeData.getString('searchEnginesKeyboardShortcutsTab'),
        },
    ];
    get keyboardShortcutMenuOptions_() { return this.#keyboardShortcutMenuOptions__accessor_storage; }
    set keyboardShortcutMenuOptions_(value) { this.#keyboardShortcutMenuOptions__accessor_storage = value; }
    onKeyboardShortcutSettingsControlChange_() {
        const spaceEnabled = this.$.dropdown.getSelectedValue() === 'true';
        SearchEnginesBrowserProxyImpl.getInstance()
            .recordSearchEnginesPageHistogram(spaceEnabled ?
            SearchEnginesInteractions.KEYBOARD_SHORTCUT_SPACE_OR_TAB :
            SearchEnginesInteractions.KEYBOARD_SHORTCUT_TAB);
    }
}
customElements.define(KeyboardShortcutPageElement.is, KeyboardShortcutPageElement);
