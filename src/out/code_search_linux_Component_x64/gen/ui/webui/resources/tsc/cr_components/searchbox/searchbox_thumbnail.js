// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './searchbox_thumbnail.css.js';
import { getHtml } from './searchbox_thumbnail.html.js';
// Displays a thumbnail in the searchbox input.
export class SearchboxThumbnailElement extends CrLitElement {
    static get is() {
        return 'cr-searchbox-thumbnail';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            thumbnailUrl: { type: String },
            isDeletable: {
                type: Boolean,
                reflect: true,
            },
            //========================================================================
            // Private properties
            //========================================================================
            enableThumbnailSizingTweaks_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #thumbnailUrl_accessor_storage = '';
    // The URL of the thumbnail to display.
    get thumbnailUrl() { return this.#thumbnailUrl_accessor_storage; }
    set thumbnailUrl(value) { this.#thumbnailUrl_accessor_storage = value; }
    #isDeletable_accessor_storage = false;
    // Whether the user can delete the thumbnail.
    get isDeletable() { return this.#isDeletable_accessor_storage; }
    set isDeletable(value) { this.#isDeletable_accessor_storage = value; }
    #enableThumbnailSizingTweaks__accessor_storage = loadTimeData.getBoolean('enableThumbnailSizingTweaks');
    // Whether to enable thumbnail sizing tweaks.
    get enableThumbnailSizingTweaks_() { return this.#enableThumbnailSizingTweaks__accessor_storage; }
    set enableThumbnailSizingTweaks_(value) { this.#enableThumbnailSizingTweaks__accessor_storage = value; }
    //============================================================================
    // Event handlers
    //============================================================================
    onRemoveButtonClick_(e) {
        e.preventDefault();
        this.fire('remove-thumbnail-click');
    }
}
customElements.define(SearchboxThumbnailElement.is, SearchboxThumbnailElement);
