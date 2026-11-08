import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExceptionEditInputElement {
    $: {
        input: CrInputElement;
    };
}
declare const ExceptionEditInputElementBase: typeof CrLitElement & (new (...args: any[]) => import("./exception_validation_mixin.js").ExceptionValidationMixinInterface & import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExceptionEditInputElement extends ExceptionEditInputElementBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Represents the original rule that is being edited. When submit() is
         * called, it will be replaced by rule in the exception list.
         */
        ruleToEdit: {
            type: StringConstructor;
        };
    };
    private metricsProxy_;
    accessor ruleToEdit: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onRuleValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    submit(): void;
    setRuleToEditForTesting(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-edit-input': ExceptionEditInputElement;
    }
}
export {};
