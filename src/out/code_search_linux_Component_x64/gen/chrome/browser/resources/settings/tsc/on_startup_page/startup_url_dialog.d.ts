import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { StartupPageInfo } from './startup_urls_page_browser_proxy.js';
/**
 * Describe the current URL input error status.
 * @enum {number}
 */
declare enum UrlInputError {
    NONE = 0,
    INVALID_URL = 1,
    TOO_LONG = 2
}
/**
 * @fileoverview 'settings-startup-url-dialog' is a component for adding
 * or editing a startup URL entry.
 */
export interface SettingsStartupUrlDialogElement {
    $: {
        actionButton: CrButtonElement;
        dialog: CrDialogElement;
        url: CrInputElement;
    };
}
export declare class SettingsStartupUrlDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        error_: {
            type: NumberConstructor;
        };
        url_: {
            type: StringConstructor;
        };
        urlLimit_: {
            type: NumberConstructor;
        };
        model: {
            type: ObjectConstructor;
        };
        dialogTitle_: {
            type: StringConstructor;
        };
        actionButtonText_: {
            type: StringConstructor;
        };
    };
    protected accessor error_: UrlInputError;
    protected accessor url_: string;
    protected accessor urlLimit_: number;
    accessor model: StartupPageInfo | null;
    protected accessor dialogTitle_: string;
    protected accessor actionButtonText_: string;
    private browserProxy_;
    connectedCallback(): void;
    protected onUrlValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected hasError_(): boolean;
    protected getErrorMessage_(): string;
    protected onCancelClick_(): void;
    protected onActionButtonClick_(): void;
    protected onInput_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-startup-url-dialog': SettingsStartupUrlDialogElement;
    }
}
export {};
