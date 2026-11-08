import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DocumentMetadata } from '../constants.js';
export interface ViewerPropertiesDialogElement {
    $: {
        dialog: CrDialogElement;
        close: HTMLElement;
    };
}
export declare class ViewerPropertiesDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        documentMetadata: {
            type: ObjectConstructor;
        };
        fileName: {
            type: StringConstructor;
        };
        pageCount: {
            type: NumberConstructor;
        };
        strings: {
            type: ObjectConstructor;
        };
    };
    accessor documentMetadata: DocumentMetadata;
    accessor fileName: string;
    accessor pageCount: number;
    accessor strings: {
        [key: string]: string;
    } | undefined;
    protected getFastWebViewValue_(): string;
    protected getOrPlaceholder_(value: string): string;
    protected onCloseClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-properties-dialog': ViewerPropertiesDialogElement;
    }
}
