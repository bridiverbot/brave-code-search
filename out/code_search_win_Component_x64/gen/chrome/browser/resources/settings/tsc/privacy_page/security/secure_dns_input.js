// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview `secure-dns-input` is a single-line text field that is used
 * with the secure DNS setting to configure custom servers. It is based on
 * `home-url-input`.
 */
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { SecurityPageBrowserProxyImpl } from '/shared/settings/security_page/security_page_browser_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { getCss } from './secure_dns_input.css.js';
import { getHtml } from './secure_dns_input.html.js';
export class SecureDnsInputElement extends CrLitElement {
    static get is() {
        return 'secure-dns-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /*
             * The value of the input field.
             */
            value: { type: String },
            /**
             * The error text to display beneath the input field when |showError_| is
             * true.
             */
            errorText_: { type: String },
        };
    }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #errorText__accessor_storage = '';
    get errorText_() { return this.#errorText__accessor_storage; }
    set errorText_(value) { this.#errorText__accessor_storage = value; }
    browserProxy_ = SecurityPageBrowserProxyImpl.getInstance();
    onValueChanged_(e) {
        this.value = e.detail.value;
    }
    onKeypress_(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.validate();
        }
    }
    onInputBlur_() {
        this.validate();
    }
    onInputChange_() {
        this.validate();
    }
    /**
     * This function ensures that while the user is entering input, especially
     * after pressing Enter, the input is not prematurely marked as invalid.
     */
    onInput_() {
        this.errorText_ = '';
    }
    /**
     * When the custom input field loses focus, validate the current value and
     * trigger an event with the result. If the value is valid, also attempt a
     * test query. Show an error message if the tested value is still the most
     * recent value, is non-empty, and was either invalid or failed the test
     * query.
     */
    async validate() {
        this.errorText_ = '';
        const valueToValidate = this.value;
        const valid = await this.browserProxy_.isValidConfig(valueToValidate);
        const successfulProbe = valid && (await this.browserProxy_.probeConfig(valueToValidate));
        // If there was an invalid template or no template can successfully
        // answer a probe query, show an error as long as the input field value
        // hasn't changed and is non-empty.
        if (valueToValidate === this.value && this.value !== '' &&
            !successfulProbe) {
            this.errorText_ = loadTimeData.getString(valid ? 'secureDnsCustomConnectionError' :
                'secureDnsCustomFormatError');
        }
        this.fire('value-update', { isValid: valid, text: valueToValidate });
    }
    /**
     * Focus the custom dns input field.
     */
    focus() {
        this.$.input.focusInput();
    }
    /**
     * @return whether an error is being shown.
     */
    isInvalid_() {
        return this.errorText_.length > 0;
    }
}
customElements.define(SecureDnsInputElement.is, SecureDnsInputElement);
