// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './organizer_list_section_item_title.css.js';
import { getHtml } from './organizer_list_section_item_title.html.js';
import { renderHighlightedText } from './search_utils.js';
export class OrganizerListSectionItemTitleElement extends CrLitElement {
    static get is() {
        return 'organizer-list-section-item-title';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            titleParts: { type: Array },
            highlightRanges: { type: Array },
        };
    }
    #titleParts_accessor_storage = [];
    get titleParts() { return this.#titleParts_accessor_storage; }
    set titleParts(value) { this.#titleParts_accessor_storage = value; }
    #highlightRanges_accessor_storage = [];
    get highlightRanges() { return this.#highlightRanges_accessor_storage; }
    set highlightRanges(value) { this.#highlightRanges_accessor_storage = value; }
    renderTitlePart_(text, index) {
        return renderHighlightedText(text, this.highlightRanges[index]);
    }
}
customElements.define(OrganizerListSectionItemTitleElement.is, OrganizerListSectionItemTitleElement);
