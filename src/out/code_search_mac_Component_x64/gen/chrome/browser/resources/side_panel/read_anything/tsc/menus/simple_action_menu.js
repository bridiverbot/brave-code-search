// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { openMenu } from '../shared/common.js';
import { getCss } from './action_menu.css.js';
import { getHtml } from './simple_action_menu.html.js';
const SimpleActionMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Represents a simple dropdown menu that contains a flat list of items with
// text and an optional icon. Selecting an item in this menu propagates that
// event, sets that item as selected with a visual checkmark, and then closes
// the menu.
export class SimpleActionMenuElement extends SimpleActionMenuElementBase {
    static get is() {
        return 'simple-action-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedValue: { type: Object },
            menuItems: { type: Array },
            eventName: { type: String },
            label: { type: String },
            nonModal: { type: Boolean },
            closeOnClick: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #selectedValue_accessor_storage = undefined;
    // Data of the item that shows the checkmark. Item data is heterogeneous
    // across menus (numbers, strings) and Lit properties can't be generic or
    // primitive unions, hence unknown.
    get selectedValue() { return this.#selectedValue_accessor_storage; }
    set selectedValue(value) { this.#selectedValue_accessor_storage = value; }
    #menuItems_accessor_storage = [];
    get menuItems() { return this.#menuItems_accessor_storage; }
    set menuItems(value) { this.#menuItems_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #closeOnClick_accessor_storage = true;
    get closeOnClick() { return this.#closeOnClick_accessor_storage; }
    set closeOnClick(value) { this.#closeOnClick_accessor_storage = value; }
    #eventName_accessor_storage = ToolbarEvent.THEME;
    // Initializing to random value, but this is set by the parent.
    get eventName() { return this.#eventName_accessor_storage; }
    set eventName(value) { this.#eventName_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    open(anchor, showAtConfig) {
        openMenu(this.$.lazyMenu.get(), anchor, showAtConfig, /* onShow= */ undefined, this.nonModal);
    }
    close() {
        this.$.lazyMenu.get().close();
    }
    onClick_(e) {
        const currentTarget = e.currentTarget;
        const index = Number.parseInt(currentTarget.dataset['index']);
        const menuItem = this.menuItems[index];
        assert(menuItem);
        this.fire(this.eventName, { data: menuItem.data });
        if (this.closeOnClick) {
            this.$.lazyMenu.get().close();
        }
    }
    isItemSelected_(item) {
        return item.data === this.selectedValue;
    }
    doesItemHaveIcon_(item) {
        return item.icon !== undefined;
    }
    itemIcon_(item) {
        return item.icon === undefined ? '' : item.icon;
    }
}
customElements.define(SimpleActionMenuElement.is, SimpleActionMenuElement);
