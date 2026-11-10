import 'chrome://resources/js/util.js';
import './icons.html.js';
import './settings_section.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
export interface PrintPreviewDestinationSelectElement {
    $: {
        select: HTMLSelectElement;
    };
}
declare const PrintPreviewDestinationSelectElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface);
export declare class PrintPreviewDestinationSelectElement extends PrintPreviewDestinationSelectElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dark: {
            type: BooleanConstructor;
        };
        destination: {
            type: ObjectConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        loaded: {
            type: BooleanConstructor;
        };
        noDestinations: {
            type: BooleanConstructor;
        };
        pdfPrinterDisabled: {
            type: BooleanConstructor;
        };
        recentDestinationList: {
            type: ArrayConstructor;
        };
        pdfDestinationKey_: {
            type: StringConstructor;
        };
    };
    accessor dark: boolean;
    accessor destination: Destination | null;
    accessor disabled: boolean;
    accessor loaded: boolean;
    accessor noDestinations: boolean;
    accessor pdfPrinterDisabled: boolean;
    accessor recentDestinationList: Destination[];
    protected accessor pdfDestinationKey_: string;
    updated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    /** Sets the select to the current value of |destination|. */
    updateDestination(): void;
    /**
     * Returns the iconset and icon for the selected printer. If printer details
     * have not yet been retrieved from the backend, attempts to return an
     * appropriate icon early based on the printer's sticky information.
     * @return The iconset and icon for the current selection.
     */
    private getDestinationIcon_;
    /**
     * @return An inline svg corresponding to the icon for the current
     *     destination and the image for the dropdown arrow.
     */
    protected getBackgroundImages_(): string;
    onProcessSelectChange(value: string): void;
    /**
     * Return the options currently visible to the user for testing purposes.
     */
    getVisibleItemsForTest(): NodeListOf<HTMLOptionElement>;
    protected isSelected_(destinationKey: string): boolean;
}
export type DestinationSelectElement = PrintPreviewDestinationSelectElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-destination-select': PrintPreviewDestinationSelectElement;
    }
}
export {};
