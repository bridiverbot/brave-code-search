import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../print_preview_utils.js';
import './destination_list.js';
import './print_preview_search_box.js';
import '/strings.m.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
import type { DestinationStore } from '../data/destination_store.js';
import type { PrintPreviewDestinationListElement } from './destination_list.js';
import type { PrintPreviewSearchBoxElement } from './print_preview_search_box.js';
export interface PrintPreviewDestinationDialogElement {
    $: {
        dialog: CrDialogElement;
        searchBox: PrintPreviewSearchBoxElement;
        printList: PrintPreviewDestinationListElement;
    };
}
export declare class PrintPreviewDestinationDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destinationStore: {
            type: ObjectConstructor;
        };
        loadingDestinations_: {
            type: BooleanConstructor;
        };
        searchQuery_: {
            type: ObjectConstructor;
        };
    };
    accessor destinationStore: DestinationStore | null;
    protected accessor loadingDestinations_: boolean;
    protected accessor searchQuery_: RegExp | null;
    private tracker_;
    private initialized_;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    private onKeydown_;
    private onDestinationStoreSet_;
    private updateDestinations_;
    protected onClose_(): void;
    protected onCancelButtonClick_(): void;
    /**
     * @param e Event containing the selected destination.
     */
    protected onDestinationSelected_(e: CustomEvent<Destination>): void;
    private selectDestination_;
    show(): void;
    /** @return Whether the dialog is open. */
    isOpen(): boolean;
    protected onManageButtonClick_(): void;
    protected onSearchQueryChanged_(e: CustomEvent<{
        value: RegExp | null;
    }>): void;
}
export type DestinationDialogElement = PrintPreviewDestinationDialogElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-destination-dialog': PrintPreviewDestinationDialogElement;
    }
}
