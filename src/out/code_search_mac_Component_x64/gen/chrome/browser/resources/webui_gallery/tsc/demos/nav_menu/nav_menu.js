// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import '//resources/cr_elements/cr_ripple/cr_ripple.js';
import '//resources/cr_elements/icons.html.js';
import { getCss } from '//resources/cr_elements/cr_nav_menu_item_style_lit.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './nav_menu.html.js';
export class NavMenuElement extends CrLitElement {
    static get is() {
        return 'nav-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            menuItems_: { type: Array },
            selectedIndex: {
                type: Number,
                notify: true,
            },
            showIcons: { type: Boolean },
            showRipples: { type: Boolean },
        };
    }
    #menuItems__accessor_storage = [
        {
            icon: 'cr:person-filled',
            name: 'Menu item 1',
            path: '/path-1',
        },
        {
            icon: 'cr:sync',
            name: 'Menu item 2',
            path: '/path-2',
        },
        {
            icon: 'cr:star-filled',
            name: 'Menu item 3',
            path: '/path-3',
        },
    ];
    get menuItems_() { return this.#menuItems__accessor_storage; }
    set menuItems_(value) { this.#menuItems__accessor_storage = value; }
    #selectedIndex_accessor_storage;
    get selectedIndex() { return this.#selectedIndex_accessor_storage; }
    set selectedIndex(value) { this.#selectedIndex_accessor_storage = value; }
    #showIcons_accessor_storage = false;
    get showIcons() { return this.#showIcons_accessor_storage; }
    set showIcons(value) { this.#showIcons_accessor_storage = value; }
    #showRipples_accessor_storage = false;
    get showRipples() { return this.#showRipples_accessor_storage; }
    set showRipples(value) { this.#showRipples_accessor_storage = value; }
    onSelectorClick_(e) {
        e.preventDefault();
    }
    onSelectedIndexSelectedChanged_(e) {
        this.selectedIndex = e.detail.value;
    }
}
customElements.define(NavMenuElement.is, NavMenuElement);
