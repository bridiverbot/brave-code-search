// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { dedupingMixin } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PerformanceBrowserProxyImpl } from '../performance_browser_proxy.js';
export const MAX_TAB_DISCARD_EXCEPTION_RULE_LENGTH = 10 * 1024;
export const TAB_DISCARD_EXCEPTIONS_PREF = 'performance_tuning.tab_discarding.exceptions_with_time';
export const TAB_DISCARD_EXCEPTIONS_MANAGED_PREF = 'performance_tuning.tab_discarding.exceptions_managed';
export const ExceptionValidationMixin = dedupingMixin((superClass) => {
    const superClassBase = I18nMixinLit(superClass);
    class ExceptionValidationMixin extends superClassBase {
        static get properties() {
            return {
                errorMessage: { type: String },
                inputInvalid: { type: Boolean },
                rule: { type: String },
                submitDisabled: { type: Boolean, notify: true },
            };
        }
        browserProxy_ = PerformanceBrowserProxyImpl.getInstance();
        #errorMessage_accessor_storage = '';
        get errorMessage() { return this.#errorMessage_accessor_storage; }
        set errorMessage(value) { this.#errorMessage_accessor_storage = value; }
        #inputInvalid_accessor_storage = false;
        get inputInvalid() { return this.#inputInvalid_accessor_storage; }
        set inputInvalid(value) { this.#inputInvalid_accessor_storage = value; }
        #rule_accessor_storage = '';
        get rule() { return this.#rule_accessor_storage; }
        set rule(value) { this.#rule_accessor_storage = value; }
        #submitDisabled_accessor_storage = true;
        get submitDisabled() { return this.#submitDisabled_accessor_storage; }
        set submitDisabled(value) { this.#submitDisabled_accessor_storage = value; }
        validate() {
            const rule = this.rule.trim();
            if (!rule) {
                this.inputInvalid = false;
                this.submitDisabled = true;
                this.errorMessage = '';
                return;
            }
            if (rule.length > MAX_TAB_DISCARD_EXCEPTION_RULE_LENGTH) {
                this.inputInvalid = true;
                this.submitDisabled = true;
                this.errorMessage = this.i18n('onStartupUrlTooLong');
                return;
            }
            this.browserProxy_.validateTabDiscardExceptionRule(rule).then(valid => {
                this.inputInvalid = !valid;
                this.submitDisabled = !valid;
                this.errorMessage =
                    valid ? '' : this.i18n('onStartupInvalidUrl');
            });
        }
    }
    return ExceptionValidationMixin;
});
