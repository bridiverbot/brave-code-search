// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './letter_spacing_menu.html.js';
const LetterSpacingMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the letter spacing menu.
export class LetterSpacingMenuElement extends LetterSpacingMenuElementBase {
    static get is() {
        return 'letter-spacing-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            letterSpacing: { type: Number },
            nonModal: { type: Boolean },
            options_: { type: Array },
        };
    }
    #letterSpacing_accessor_storage = 0;
    get letterSpacing() { return this.#letterSpacing_accessor_storage; }
    set letterSpacing(value) { this.#letterSpacing_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    #options__accessor_storage = [
        {
            title: loadTimeData.getString('letterSpacingStandardTitle'),
            icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-anything:format-letter-spacing-standard' :
                'read-anything:letter-spacing-standard-old',
            data: this.visualBrowserProxy_.getStandardLetterSpacing(),
        },
        {
            title: loadTimeData.getString('letterSpacingWideTitle'),
            icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-anything:format-letter-spacing-wide' :
                'read-anything:letter-spacing-wide-old',
            data: this.visualBrowserProxy_.getWideLetterSpacing(),
        },
        {
            title: loadTimeData.getString('letterSpacingVeryWideTitle'),
            icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-anything:format-letter-spacing-wider' :
                'read-anything:letter-spacing-very-wide-old',
            data: this.visualBrowserProxy_.getVeryWideLetterSpacing(),
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
    onLetterSpacingChange_() {
        this.fire(ToolbarEvent.CLOSE_ALL_MENUS);
    }
}
customElements.define(LetterSpacingMenuElement.is, LetterSpacingMenuElement);
