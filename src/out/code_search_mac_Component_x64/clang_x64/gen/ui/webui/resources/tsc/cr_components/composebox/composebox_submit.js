// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assertNotReachedCase } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SubmitButtonIconType } from './common.js';
import { getCss } from './composebox_submit.css.js';
import { getHtml } from './composebox_submit.html.js';
const ComposeboxSubmitElementBase = I18nMixinLit(CrLitElement);
export class ComposeboxSubmitElement extends ComposeboxSubmitElementBase {
    static get is() {
        return 'cr-composebox-submit';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean, reflect: true },
            iconType: { type: String },
            submitButtonTitle: { type: String },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #iconType_accessor_storage = SubmitButtonIconType.UPWARD;
    get iconType() { return this.#iconType_accessor_storage; }
    set iconType(value) { this.#iconType_accessor_storage = value; }
    #submitButtonTitle_accessor_storage = '';
    get submitButtonTitle() { return this.#submitButtonTitle_accessor_storage; }
    set submitButtonTitle(value) { this.#submitButtonTitle_accessor_storage = value; }
    submitButtonIconClass_() {
        switch (this.iconType) {
            case SubmitButtonIconType.FORWARD:
                return 'icon-arrow-forward';
            case SubmitButtonIconType.UPWARD:
                return 'icon-arrow-upward';
            default:
                assertNotReachedCase(this.iconType);
        }
    }
    onSubmitClick_(e) {
        if (!this.disabled) {
            this.fire('submit-click', e);
        }
    }
    onSubmitFocusin_(e) {
        this.fire('submit-focusin', e);
    }
}
customElements.define(ComposeboxSubmitElement.is, ComposeboxSubmitElement);
