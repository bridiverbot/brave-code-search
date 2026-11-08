// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './check_mark_wrapper.css.js';
import { getHtml } from './check_mark_wrapper.html.js';
export class CheckMarkWrapperElement extends CrLitElement {
    static get is() {
        return 'customize-chrome-check-mark-wrapper';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                reflect: true,
            },
            checkmarkBorderHidden: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #checked_accessor_storage = false;
    get checked() { return this.#checked_accessor_storage; }
    set checked(value) { this.#checked_accessor_storage = value; }
    #checkmarkBorderHidden_accessor_storage = false;
    get checkmarkBorderHidden() { return this.#checkmarkBorderHidden_accessor_storage; }
    set checkmarkBorderHidden(value) { this.#checkmarkBorderHidden_accessor_storage = value; }
}
customElements.define(CheckMarkWrapperElement.is, CheckMarkWrapperElement);
