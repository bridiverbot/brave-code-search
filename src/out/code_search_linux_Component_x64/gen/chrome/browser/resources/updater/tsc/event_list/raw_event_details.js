// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './raw_event_details.css.js';
import { getHtml } from './raw_event_details.html.js';
export class RawEventDetailsElement extends CrLitElement {
    static get is() {
        return 'raw-event-details';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            label: { type: String, reflect: true },
            events: { type: Array },
            expanded: { type: Boolean },
        };
    }
    #label_accessor_storage = loadTimeData.getString('viewRawDetails');
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #events_accessor_storage = [];
    get events() { return this.#events_accessor_storage; }
    set events(value) { this.#events_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    onExpandedChanged(e) {
        this.expanded = e.detail.value;
    }
}
customElements.define(RawEventDetailsElement.is, RawEventDetailsElement);
