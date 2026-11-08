// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './exception_edit_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './exception_edit_dialog.html.js';
export class ExceptionEditDialogElement extends CrLitElement {
    static get is() {
        return 'tab-discard-exception-edit-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ruleToEdit: { type: String },
            submitDisabled_: { type: Boolean },
        };
    }
    #ruleToEdit_accessor_storage = '';
    get ruleToEdit() { return this.#ruleToEdit_accessor_storage; }
    set ruleToEdit(value) { this.#ruleToEdit_accessor_storage = value; }
    #submitDisabled__accessor_storage = true;
    get submitDisabled_() { return this.#submitDisabled__accessor_storage; }
    set submitDisabled_(value) { this.#submitDisabled__accessor_storage = value; }
    onSubmitDisabledChanged_(e) {
        this.submitDisabled_ = e.detail.value;
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        this.$.input.submit();
    }
    setRuleToEditForTesting(rule) {
        this.ruleToEdit = rule;
        this.$.input.setRuleToEditForTesting();
    }
}
customElements.define(ExceptionEditDialogElement.is, ExceptionEditDialogElement);
