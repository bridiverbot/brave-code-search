import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExceptionAddInputElement {
    $: {
        input: CrInputElement;
    };
}
declare const ExceptionAddInputElementBase: typeof CrLitElement & (new (...args: any[]) => import("./exception_validation_mixin.js").ExceptionValidationMixinInterface & import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExceptionAddInputElement extends ExceptionAddInputElementBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private metricsProxy_;
    protected onRuleValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    submit(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-add-input': ExceptionAddInputElement;
    }
}
export {};
