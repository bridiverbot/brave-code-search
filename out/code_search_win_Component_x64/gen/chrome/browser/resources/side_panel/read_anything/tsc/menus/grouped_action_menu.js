// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
import { openMenu } from '../shared/common.js';
import { getCss } from './action_menu.css.js';
import { getHtml } from './grouped_action_menu.html.js';
import { SettingsItemType } from './menu_util.js';
const GroupedActionMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Represents a dropdown menu that contains groups of items with a header and
// optional separator per group.
export class GroupedActionMenuElement extends GroupedActionMenuElementBase {
    static get is() {
        return 'grouped-action-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            menuGroups: { type: Array },
            label: { type: String },
            nonModal: { type: Boolean },
            closeOnClick: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #menuGroups_accessor_storage = [];
    get menuGroups() { return this.#menuGroups_accessor_storage; }
    set menuGroups(value) { this.#menuGroups_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #closeOnClick_accessor_storage = true;
    get closeOnClick() { return this.#closeOnClick_accessor_storage; }
    set closeOnClick(value) { this.#closeOnClick_accessor_storage = value; }
    #label_accessor_storage = '';
    // Initializing to random value, but this is set by the parent.
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
    focusItem(groupIndex, itemIndex) {
        const actionMenu = this.$.lazyMenu.getIfExists();
        if (!actionMenu?.open) {
            return;
        }
        const item = actionMenu.querySelector(`#${this.getItemId_(groupIndex, itemIndex)}`);
        item?.focus();
    }
    onClick_(e) {
        const currentTarget = e.currentTarget;
        const groupIndex = Number.parseInt(currentTarget.dataset['groupIndex']);
        const itemIndex = Number.parseInt(currentTarget.dataset['itemIndex']);
        const group = this.menuGroups[groupIndex];
        assert(group);
        const menuItem = group.items[itemIndex];
        assert(menuItem);
        const eventName = menuItem.eventName || group.eventName;
        assert(eventName, 'At least one of menu item or menu group should have an event name');
        this.fire(eventName, { data: menuItem.data });
        if (this.closeOnClick) {
            this.$.lazyMenu.get().close();
        }
    }
    getItemId_(groupIndex, itemIndex) {
        return `group-${groupIndex}-item-${itemIndex}`;
    }
    getAriaOwns_(groupIndex, length) {
        return Array
            .from({ length }, (_, itemIndex) => this.getItemId_(groupIndex, itemIndex))
            .join(' ');
    }
    getItemRole_(item) {
        return item.itemType === SettingsItemType.ACTION ? 'menuitem' :
            'menuitemradio';
    }
    isItemSelected_(group, item) {
        return item.data === group.selectedValue;
    }
    // Returns the aria-checked attribute for the menuitemradio role (radio item
    // type). Returns nothing for menuitem roles (action item) since those don't
    // require the attribute.
    getItemAriaChecked_(group, item) {
        if (item.itemType === SettingsItemType.ACTION) {
            return nothing;
        }
        return this.isItemSelected_(group, item);
    }
    // Returns the aria-haspopup attribute for items that open a dialog, so
    // screen readers announce that this item opens another surface rather than
    // acting immediately. Returns nothing for items without a dialog so the
    // attribute isn't rendered at all.
    getItemAriaHasPopup_(item) {
        return item.opensDialog ? 'dialog' : nothing;
    }
    // Returns the visible text for the item title. Items that open a dialog get a
    // localized trailing ellipsis to indicate action.
    getItemDisplayTitle_(item) {
        return item.opensDialog ?
            loadTimeData.getStringF('menuItemOpensDialogLabel', item.title) :
            item.title;
    }
    getItemIcon_(item) {
        if (item.itemType === SettingsItemType.ACTION) {
            return null;
        }
        return this.webuiRoundedIconsEnabled_ ? 'read-anything-20:check-small' :
            'read-anything-20:check-mark-old';
    }
}
customElements.define(GroupedActionMenuElement.is, GroupedActionMenuElement);
