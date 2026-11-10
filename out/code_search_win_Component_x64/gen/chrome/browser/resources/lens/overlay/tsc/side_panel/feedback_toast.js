// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '/strings.m.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './feedback_toast.css.js';
import { getHtml } from './feedback_toast.html.js';
import { SidePanelBrowserProxyImpl } from './side_panel_browser_proxy.js';
export class FeedbackToastElement extends CrLitElement {
    static get is() {
        return 'feedback-toast';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            darkMode: {
                type: Boolean,
                reflect: true,
            },
            updatedFeedbackEnabled: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #darkMode_accessor_storage = loadTimeData.getBoolean('darkMode');
    // Whether to render the feedback toast in dark mode.
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #updatedFeedbackEnabled_accessor_storage = loadTimeData.getBoolean('updatedFeedbackEnabled');
    // Whether to render the updated feedback toast.
    get updatedFeedbackEnabled() { return this.#updatedFeedbackEnabled_accessor_storage; }
    set updatedFeedbackEnabled(value) { this.#updatedFeedbackEnabled_accessor_storage = value; }
    browserProxy = SidePanelBrowserProxyImpl.getInstance();
    show() {
        if (this.$.feedbackToast.open) {
            // If toast already open, wait after hiding so that animation is
            // smoother.
            this.hide();
            setTimeout(() => {
                this.$.feedbackToast.show();
            }, 100);
            return;
        }
        this.$.feedbackToast.show();
    }
    hide() {
        this.$.feedbackToast.hide();
    }
    onSendFeedbackClick() {
        this.browserProxy.handler.requestSendFeedback();
        this.hide();
    }
    onHideFeedbackToastClick() {
        this.hide();
        this.dispatchEvent(new CustomEvent('feedback-toast-dismissed'));
    }
}
customElements.define(FeedbackToastElement.is, FeedbackToastElement);
