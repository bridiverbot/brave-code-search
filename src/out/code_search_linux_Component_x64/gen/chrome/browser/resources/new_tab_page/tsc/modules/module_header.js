// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './module_header.css.js';
import { getHtml } from './module_header.html.js';
/** Element that displays a header inside a module.  */
export class ModuleHeaderElement extends CrLitElement {
    static get is() {
        return 'ntp-module-header';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            headerText: { type: String },
            moreActionsText: { type: String },
            menuItems: { type: Array },
            hideCustomize: { type: Boolean },
        };
    }
    #headerText_accessor_storage = null;
    get headerText() { return this.#headerText_accessor_storage; }
    set headerText(value) { this.#headerText_accessor_storage = value; }
    #menuItems_accessor_storage = [];
    get menuItems() { return this.#menuItems_accessor_storage; }
    set menuItems(value) { this.#menuItems_accessor_storage = value; }
    #moreActionsText_accessor_storage = '';
    get moreActionsText() { return this.#moreActionsText_accessor_storage; }
    set moreActionsText(value) { this.#moreActionsText_accessor_storage = value; }
    #hideCustomize_accessor_storage = false;
    get hideCustomize() { return this.#hideCustomize_accessor_storage; }
    set hideCustomize(value) { this.#hideCustomize_accessor_storage = value; }
    onButtonClick_(e) {
        const action = e.currentTarget.dataset['action'];
        assert(action);
        e.stopPropagation();
        this.$.actionMenu.close();
        if (action === 'customize-module') {
            this.dispatchEvent(new Event('customize-module', { bubbles: true, composed: true }));
        }
        else {
            this.dispatchEvent(new Event(`${action}-button-click`, { bubbles: true, composed: true }));
        }
    }
    onMenuButtonClick_(e) {
        this.$.actionMenu.showAt(e.target);
    }
    showDivider_() {
        return this.menuItems?.length > 0;
    }
    getTuneIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'modules:tune' :
            'modules:tune-old';
    }
}
customElements.define(ModuleHeaderElement.is, ModuleHeaderElement);
