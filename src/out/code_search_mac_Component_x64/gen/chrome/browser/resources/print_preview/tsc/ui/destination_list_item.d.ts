import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './icons.html.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
export declare class PrintPreviewDestinationListItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destination: {
            type: ObjectConstructor;
        };
        searchQuery: {
            type: ObjectConstructor;
        };
        searchHint_: {
            type: StringConstructor;
        };
    };
    accessor destination: Destination | null;
    accessor searchQuery: RegExp | null;
    protected accessor searchHint_: string;
    private highlights_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onDestinationPropertiesChange_;
    private updateSearchHint_;
    protected getExtensionPrinterTooltip_(): string;
    private onFocus_;
}
export type DestinationListItemElement = PrintPreviewDestinationListItemElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-destination-list-item': PrintPreviewDestinationListItemElement;
    }
}
