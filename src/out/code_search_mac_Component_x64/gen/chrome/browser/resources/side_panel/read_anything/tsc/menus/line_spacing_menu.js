// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './line_spacing_menu.html.js';
const LineSpacingMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the line spacing menu.
export class LineSpacingMenuElement extends LineSpacingMenuElementBase {
    static get is() {
        return 'line-spacing-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            lineSpacing: { type: Number },
            nonModal: { type: Boolean },
            options_: { type: Array },
        };
    }
    #lineSpacing_accessor_storage = 0;
    get lineSpacing() { return this.#lineSpacing_accessor_storage; }
    set lineSpacing(value) { this.#lineSpacing_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    #options__accessor_storage = [
        {
            title: loadTimeData.getString('lineSpacingStandardTitle'),
            icon: 'read-anything:line-spacing-standard-custom',
            data: this.visualBrowserProxy_.getStandardLineSpacing(),
        },
        {
            title: loadTimeData.getString('lineSpacingLooseTitle'),
            icon: 'read-anything:line-spacing-loose-custom',
            data: this.visualBrowserProxy_.getLooseLineSpacing(),
        },
        {
            title: loadTimeData.getString('lineSpacingVeryLooseTitle'),
            icon: 'read-anything:line-spacing-very-loose-custom',
            data: this.visualBrowserProxy_.getVeryLooseLineSpacing(),
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
    onLineSpacingChange_() {
        this.fire(ToolbarEvent.CLOSE_ALL_MENUS);
    }
}
customElements.define(LineSpacingMenuElement.is, LineSpacingMenuElement);
