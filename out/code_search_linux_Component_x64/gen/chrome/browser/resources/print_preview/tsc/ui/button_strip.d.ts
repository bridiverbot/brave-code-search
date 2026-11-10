import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
import { State } from '../data/state.js';
export declare class PrintPreviewButtonStripElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destination: {
            type: ObjectConstructor;
        };
        firstLoad: {
            type: BooleanConstructor;
        };
        state: {
            type: NumberConstructor;
        };
        printButtonEnabled_: {
            type: BooleanConstructor;
        };
        printButtonLabel_: {
            type: StringConstructor;
        };
    };
    accessor destination: Destination | null;
    accessor firstLoad: boolean;
    accessor state: State;
    protected accessor printButtonEnabled_: boolean;
    protected accessor printButtonLabel_: string;
    private lastState_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onPrintClick_(): void;
    protected onCancelClick_(): void;
    private isPdf_;
    private updatePrintButtonEnabled_;
}
export type ButtonStripElement = PrintPreviewButtonStripElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-button-strip': PrintPreviewButtonStripElement;
    }
}
