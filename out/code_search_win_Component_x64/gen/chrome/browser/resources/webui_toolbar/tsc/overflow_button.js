// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BUTTON_LEFT, getClickSourceType, getContextMenuPosition, HelpBubbleAnchorMixin } from '/shared/toolbar_button.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getHtml } from './overflow_button.html.js';
import { getCss } from './toolbar_button.css.js';
const OverflowButtonElementBase = HelpBubbleAnchorMixin(CrLitElement);
export class OverflowButtonElement extends OverflowButtonElementBase {
    static get is() {
        return 'overflow-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            state: { type: Object },
            getOverflowedMenuItems: { type: Object },
        };
    }
    #state_accessor_storage = {
        isContextMenuVisible: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #getOverflowedMenuItems_accessor_storage = () => [];
    get getOverflowedMenuItems() { return this.#getOverflowedMenuItems_accessor_storage; }
    set getOverflowedMenuItems(value) { this.#getOverflowedMenuItems_accessor_storage = value; }
    getLabel_() {
        return loadTimeData.getString('overflowButtonTooltip');
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(loadTimeData.getString('overflowButtonTooltip'));
    }
    onPointerdown_(e) {
        // To match Views' MenuButtonController behavior:
        // Mouse events trigger the menu immediately on press.
        // Touch/Gesture events are ignored on press and instead trigger on tap
        // (release).
        if (e.pointerType !== 'mouse' || e.button !== BUTTON_LEFT) {
            return;
        }
        this.handleMenuClick_(e);
    }
    onClick_(e) {
        // Handle keyboard (detail === 0) and touch clicks (tap/release) here.
        // Mouse clicks (detail > 0) are ignored here because they were already
        // handled immediately on pointerdown to match Views' behavior.
        if (e.detail === 0 || e.pointerType !== 'mouse') {
            this.handleMenuClick_(e);
        }
    }
    // Shows a popup menu containing menu items corresponding to any overflowed
    // controls.
    handleMenuClick_(e) {
        TrackedElementManager.getInstance().notifyElementActivated(this);
        BrowserProxyImpl.getInstance().toolbarUIHandler.showOverflowMenu(this.getOverflowedMenuItems(), getContextMenuPosition(this), getClickSourceType(e));
    }
}
customElements.define(OverflowButtonElement.is, OverflowButtonElement);
