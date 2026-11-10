// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './organizer_list_section_item_description.css.js';
import { getHtml } from './organizer_list_section_item_description.html.js';
import { renderHighlightedText } from './search_utils.js';
export class OrganizerListSectionItemDescriptionElement extends CrLitElement {
    static get is() {
        return 'organizer-list-section-item-description';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            descriptionParts: { type: Array },
            highlightRanges: { type: Array },
        };
    }
    #descriptionParts_accessor_storage = [];
    get descriptionParts() { return this.#descriptionParts_accessor_storage; }
    set descriptionParts(value) { this.#descriptionParts_accessor_storage = value; }
    #highlightRanges_accessor_storage = [];
    get highlightRanges() { return this.#highlightRanges_accessor_storage; }
    set highlightRanges(value) { this.#highlightRanges_accessor_storage = value; }
    renderDescriptionPart_(text, index) {
        return renderHighlightedText(text, this.highlightRanges[index]);
    }
}
customElements.define(OrganizerListSectionItemDescriptionElement.is, OrganizerListSectionItemDescriptionElement);
