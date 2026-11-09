// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './page_action_icon.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PageActionId } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { getCss } from './page_action_icons.css.js';
import { getHtml } from './page_action_icons.html.js';
export class PageActionIconsElement extends CrLitElement {
    static get is() {
        return 'page-action-icons';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            pageActionStates: { type: Array },
            isCapsule: {
                type: Boolean,
                reflect: true,
                attribute: 'is-capsule',
            },
        };
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('pageActionStates')) {
            const isElevatedToolbarEnabled = loadTimeData.valueExists('enablePageActionsElevatedToolbar') &&
                loadTimeData.getBoolean('enablePageActionsElevatedToolbar');
            this.isCapsule =
                isElevatedToolbarEnabled && (this.pageActionStates?.length ?? 0) > 1;
        }
    }
    aiModePageAction() {
        const candidates = this.shadowRoot.querySelectorAll('page-action-icon');
        for (const candidate of candidates) {
            if (candidate.state.pageActionId === PageActionId.kActionAiMode) {
                return candidate;
            }
        }
        return null;
    }
    #isCapsule_accessor_storage = false;
    get isCapsule() { return this.#isCapsule_accessor_storage; }
    set isCapsule(value) { this.#isCapsule_accessor_storage = value; }
    #pageActionStates_accessor_storage = [];
    get pageActionStates() { return this.#pageActionStates_accessor_storage; }
    set pageActionStates(value) { this.#pageActionStates_accessor_storage = value; }
}
customElements.define(PageActionIconsElement.is, PageActionIconsElement);
