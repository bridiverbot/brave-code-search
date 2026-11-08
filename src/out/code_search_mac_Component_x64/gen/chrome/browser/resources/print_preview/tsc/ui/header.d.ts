import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './icons.html.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
import { Error, State } from '../data/state.js';
declare const PrintPreviewHeaderElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewHeaderElement extends PrintPreviewHeaderElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destination: {
            type: ObjectConstructor;
        };
        error: {
            type: NumberConstructor;
        };
        state: {
            type: NumberConstructor;
        };
        managed: {
            type: BooleanConstructor;
        };
        sheetCount_: {
            type: NumberConstructor;
        };
        summary_: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor destination: Destination | null;
    accessor error: Error | null;
    accessor state: State;
    accessor managed: boolean;
    private accessor sheetCount_;
    protected accessor summary_: string | null;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateSheetCount_;
    private isPdf_;
    private updateSummary_;
    /**
     * @return The error message to display.
     */
    private getErrorMessage_;
    private updateSheetsSummary_;
}
export type HeaderElement = PrintPreviewHeaderElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-header': PrintPreviewHeaderElement;
    }
}
export {};
