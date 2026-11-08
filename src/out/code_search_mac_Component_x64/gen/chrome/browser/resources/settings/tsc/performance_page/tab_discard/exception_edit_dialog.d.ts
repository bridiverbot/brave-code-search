import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './exception_edit_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExceptionEditInputElement } from './exception_edit_input.js';
export interface ExceptionEditDialogElement {
    $: {
        actionButton: CrButtonElement;
        cancelButton: CrButtonElement;
        dialog: CrDialogElement;
        input: ExceptionEditInputElement;
    };
}
export declare class ExceptionEditDialogElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ruleToEdit: {
            type: StringConstructor;
        };
        submitDisabled_: {
            type: BooleanConstructor;
        };
    };
    accessor ruleToEdit: string;
    protected accessor submitDisabled_: boolean;
    protected onSubmitDisabledChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onCancelClick_(): void;
    protected onSubmitClick_(): void;
    setRuleToEditForTesting(rule: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-edit-dialog': ExceptionEditDialogElement;
    }
}
