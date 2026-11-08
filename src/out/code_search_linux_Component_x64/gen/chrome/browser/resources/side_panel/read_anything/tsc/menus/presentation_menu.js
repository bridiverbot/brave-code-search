// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './presentation_menu.html.js';
const PresentationMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the view menu.
export class PresentationMenuElement extends PresentationMenuElementBase {
    static get is() {
        return 'presentation-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            presentationState: { type: Number },
            nonModal: { type: Boolean },
            options_: { type: Array },
        };
    }
    #presentationState_accessor_storage = 0;
    get presentationState() { return this.#presentationState_accessor_storage; }
    set presentationState(value) { this.#presentationState_accessor_storage = value; }
    #nonModal_accessor_storage = true;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    #options__accessor_storage = [
        {
            title: loadTimeData.getString('sidePanelLabel'),
            data: this.visualBrowserProxy_.getInSidePanelPresentationState(),
        },
        {
            title: loadTimeData.getString('fullPageLabel'),
            data: this.visualBrowserProxy_.getInImmersiveOverlayPresentationState(),
        },
    ];
    get options_() { return this.#options__accessor_storage; }
    set options_(value) { this.#options__accessor_storage = value; }
    open(anchor, showAtConfig) {
        this.$.menu.open(anchor, showAtConfig);
    }
    close() {
        this.$.menu.close();
    }
    onPresentationChange_() {
        this.fire(ToolbarEvent.CLOSE_ALL_MENUS);
    }
}
customElements.define(PresentationMenuElement.is, PresentationMenuElement);
