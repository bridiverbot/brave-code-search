import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DataCollectorItem } from './browser_proxy.js';
export interface UrlGeneratorElement {
    $: {
        caseIdInput: CrInputElement;
        copyToast: CrToastElement;
        copyTokenButton: CrButtonElement;
        copyURLButton: CrButtonElement;
        errorMessageToast: CrToastElement;
    };
}
declare const UrlGeneratorElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class UrlGeneratorElement extends UrlGeneratorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        caseId_: {
            type: StringConstructor;
        };
        dataCollectors_: {
            type: ArrayConstructor;
        };
        errorMessage_: {
            type: StringConstructor;
        };
        buttonDisabled_: {
            type: BooleanConstructor;
        };
        copiedToastMessage_: {
            type: StringConstructor;
        };
        selectAll_: {
            type: BooleanConstructor;
        };
    };
    protected accessor caseId_: string;
    private generatedResult_;
    protected accessor errorMessage_: string;
    protected accessor buttonDisabled_: boolean;
    protected accessor copiedToastMessage_: string;
    protected accessor dataCollectors_: DataCollectorItem[];
    protected accessor selectAll_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onDataCollectorItemChange_(): void;
    private showErrorMessageToast_;
    private showGenerationResult;
    protected onCaseIdInput_(e: Event): void;
    protected onCopyUrlClick_(): Promise<void>;
    protected onCopyTokenClick_(): Promise<void>;
    protected onErrorMessageToastCloseClick_(): void;
    protected onSelectAllCheckboxCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDataCollectorCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'url-generator': UrlGeneratorElement;
    }
}
export {};
