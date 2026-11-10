// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { AudioBrowserProxyImpl } from '../read_aloud/audio_browser_proxy.js';
import { getHtml } from './highlight_menu.html.js';
const HighlightMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the highlight menu.
export class HighlightMenuElement extends HighlightMenuElementBase {
    static get is() {
        return 'highlight-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            highlightGranularity: { type: Number },
            nonModal: { type: Boolean },
            options_: { type: Array },
        };
    }
    #highlightGranularity_accessor_storage = 0;
    get highlightGranularity() { return this.#highlightGranularity_accessor_storage; }
    set highlightGranularity(value) { this.#highlightGranularity_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    audioBrowserProxy_ = AudioBrowserProxyImpl.getInstance();
    #options__accessor_storage = [
        {
            title: loadTimeData.getString('autoHighlightTitle'),
            data: this.audioBrowserProxy_.getAutoHighlighting(),
        },
        {
            title: loadTimeData.getString('wordHighlightTitle'),
            data: this.audioBrowserProxy_.getWordHighlighting(),
        },
        ...(this.audioBrowserProxy_.isPhraseHighlightingEnabled() ? [{
                title: loadTimeData.getString('phraseHighlightTitle'),
                data: this.audioBrowserProxy_.getPhraseHighlighting(),
            }] : []),
        {
            title: loadTimeData.getString('sentenceHighlightTitle'),
            data: this.audioBrowserProxy_.getSentenceHighlighting(),
        },
        {
            title: loadTimeData.getString('noHighlightTitle'),
            data: this.audioBrowserProxy_.getNoHighlighting(),
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
    onHighlightChange_() {
        this.fire(ToolbarEvent.CLOSE_ALL_MENUS);
    }
}
customElements.define(HighlightMenuElement.is, HighlightMenuElement);
