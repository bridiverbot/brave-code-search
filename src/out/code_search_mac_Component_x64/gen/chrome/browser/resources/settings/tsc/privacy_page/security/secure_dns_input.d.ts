/**
 * @fileoverview `secure-dns-input` is a single-line text field that is used
 * with the secure DNS setting to configure custom servers. It is based on
 * `home-url-input`.
 */
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import type { CrTextareaElement } from 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SecureDnsInputElement {
    $: {
        input: CrTextareaElement;
    };
}
export declare class SecureDnsInputElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        value: {
            type: StringConstructor;
        };
        /**
         * The error text to display beneath the input field when |showError_| is
         * true.
         */
        errorText_: {
            type: StringConstructor;
        };
    };
    accessor value: string;
    protected accessor errorText_: string;
    private browserProxy_;
    protected onValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onKeypress_(e: KeyboardEvent): void;
    protected onInputBlur_(): void;
    protected onInputChange_(): void;
    /**
     * This function ensures that while the user is entering input, especially
     * after pressing Enter, the input is not prematurely marked as invalid.
     */
    protected onInput_(): void;
    /**
     * When the custom input field loses focus, validate the current value and
     * trigger an event with the result. If the value is valid, also attempt a
     * test query. Show an error message if the tested value is still the most
     * recent value, is non-empty, and was either invalid or failed the test
     * query.
     */
    validate(): Promise<void>;
    /**
     * Focus the custom dns input field.
     */
    focus(): void;
    /**
     * @return whether an error is being shown.
     */
    protected isInvalid_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'secure-dns-input': SecureDnsInputElement;
    }
}
