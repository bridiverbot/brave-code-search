// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/shared/icon_from_table.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './selected_keyword.css.js';
import { getHtml } from './selected_keyword.html.js';
export class SelectedKeywordElement extends CrLitElement {
    static get is() {
        return 'selected-keyword';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedKeywordState: { type: Object },
        };
    }
    #selectedKeywordState_accessor_storage = {
        shortName: '',
        fullName: '',
        icon: { handleId: 0n },
    };
    get selectedKeywordState() { return this.#selectedKeywordState_accessor_storage; }
    set selectedKeywordState(value) { this.#selectedKeywordState_accessor_storage = value; }
}
customElements.define(SelectedKeywordElement.is, SelectedKeywordElement);
