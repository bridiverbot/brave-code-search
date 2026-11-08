// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '/strings.m.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './extensions_section.css.js';
import { getHtml } from './extensions_section.html.js';
// Update request count, to be used along the transition duration to compute the
// interval time requests.
const UPDATE_REQUEST_COUNT = 10;
export class ExtensionsSectionElement extends CrLitElement {
    static get is() {
        return 'extensions-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            accountExtensions: { type: Array },
            title_: { type: String },
            tooltip_: { type: String },
            expanded_: { type: Boolean },
        };
    }
    #accountExtensions_accessor_storage = [];
    get accountExtensions() { return this.#accountExtensions_accessor_storage; }
    set accountExtensions(value) { this.#accountExtensions_accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #tooltip__accessor_storage = '';
    get tooltip_() { return this.#tooltip__accessor_storage; }
    set tooltip_(value) { this.#tooltip__accessor_storage = value; }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    // Animation variables used to update the main view height based on the
    // collapse animation duration. Initialized to 0 and gets their values in
    // `firstUpdated()` which are not expected to be modified later.
    updateHeightInterval_ = 0;
    collapseAnimationDuration_ = 0;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('accountExtensions')) {
            PluralStringProxyImpl.getInstance()
                .getPluralString('extensionsSectionTitle', this.accountExtensions.length)
                .then(title => this.onTitleSet_(title));
            PluralStringProxyImpl.getInstance()
                .getPluralString('extensionsSectionTooltip', this.accountExtensions.length)
                .then(tooltip => this.tooltip_ = tooltip);
        }
    }
    firstUpdated() {
        // Compute the animation duration/intervals once on startup.
        this.collapseAnimationDuration_ =
            parseInt(getComputedStyle(this).getPropertyValue('--iron-collapse-transition-duration'));
        this.updateHeightInterval_ =
            this.collapseAnimationDuration_ / UPDATE_REQUEST_COUNT;
    }
    checked() {
        return this.$.checkbox.checked;
    }
    onExpandedChanged_(e) {
        this.expanded_ = e.detail.value;
        // Stagger the update by `this.updateHeightInterval_` so it will fire its
        // last update-view-height after the animation has finished.
        setTimeout(() => {
            this.updateViewHeightInterval_(this.updateHeightInterval_);
        }, this.updateHeightInterval_);
    }
    async onTitleSet_(title) {
        this.title_ = title;
        await this.updateComplete;
        this.fire('update-view-height');
    }
    // Fire repetitive updates to the parent view height separated by the computed
    // interval, until the animation duration elapsed.
    updateViewHeightInterval_(timeElapsed) {
        this.fire('update-view-height');
        // Animation time elapsed, animation should match the collapse animation. No
        // more view updates needed.
        if (timeElapsed >= this.collapseAnimationDuration_) {
            return;
        }
        // Trigger next update interval with the updated elapsed time.
        setTimeout(() => {
            this.updateViewHeightInterval_(timeElapsed + this.updateHeightInterval_);
        }, this.updateHeightInterval_);
    }
}
customElements.define(ExtensionsSectionElement.is, ExtensionsSectionElement);
