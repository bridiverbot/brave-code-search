import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface AiSiteAddDialogElement {
    $: {
        add: CrButtonElement;
        dialog: CrDialogElement;
        site: CrInputElement;
    };
}
export declare class AiSiteAddDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        site: {
            type: StringConstructor;
        };
        errorMessage_: {
            type: StringConstructor;
        };
        submitDisabled_: {
            type: BooleanConstructor;
        };
    };
    accessor site: string;
    protected accessor errorMessage_: string;
    protected accessor submitDisabled_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onSiteValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    private validate_;
    protected onCancelClick_(): void;
    protected onSubmitClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-site-add-dialog': AiSiteAddDialogElement;
    }
}
