import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import './destination_dialog.js';
import './destination_select.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
import { DestinationStore } from '../data/destination_store.js';
import { Error, State } from '../data/state.js';
import type { PrintPreviewDestinationDialogElement } from './destination_dialog.js';
import type { PrintPreviewDestinationSelectElement } from './destination_select.js';
export declare enum DestinationState {
    INIT = 0,
    SET = 1,
    UPDATED = 2,
    ERROR = 3
}
/** Number of recent destinations to save. */
export declare const NUM_PERSISTED_DESTINATIONS: number;
export interface PrintPreviewDestinationSettingsElement {
    $: {
        destinationDialog: CrLazyRenderLitElement<PrintPreviewDestinationDialogElement>;
        destinationSelect: PrintPreviewDestinationSelectElement;
        seeMore: CrButtonElement;
    };
}
declare const PrintPreviewDestinationSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class PrintPreviewDestinationSettingsElement extends PrintPreviewDestinationSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dark: {
            type: BooleanConstructor;
        };
        destination: {
            type: ObjectConstructor;
            notify: boolean;
        };
        destinationState: {
            type: NumberConstructor;
            notify: boolean;
        };
        disabled: {
            type: BooleanConstructor;
        };
        error: {
            type: NumberConstructor;
            notify: boolean;
        };
        firstLoad: {
            type: BooleanConstructor;
        };
        state: {
            type: NumberConstructor;
        };
        destinationStore_: {
            type: ObjectConstructor;
        };
        displayedDestinations_: {
            type: ArrayConstructor;
        };
        noDestinations_: {
            type: BooleanConstructor;
        };
        pdfPrinterDisabled_: {
            type: BooleanConstructor;
        };
        loaded_: {
            type: BooleanConstructor;
        };
    };
    accessor dark: boolean;
    accessor destination: Destination | null;
    accessor destinationState: DestinationState;
    accessor disabled: boolean;
    accessor error: Error | null;
    accessor firstLoad: boolean;
    accessor state: State;
    protected accessor destinationStore_: DestinationStore | null;
    protected accessor displayedDestinations_: Destination[];
    protected accessor noDestinations_: boolean;
    protected accessor pdfPrinterDisabled_: boolean;
    protected accessor loaded_: boolean;
    private shouldFocusDropdown_;
    private tracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @param defaultPrinter The system default printer ID.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     * @param serializedDefaultDestinationRulesStr String with rules
     *     for selecting a default destination.
     */
    init(defaultPrinter: string, pdfPrinterDisabled: boolean, serializedDefaultDestinationRulesStr: string | null): void;
    /**
     * @param recentDestinations recent destinations.
     * @return Number of recent destinations to display.
     */
    private getRecentDestinationsDisplayCount_;
    private onDestinationSelect_;
    private onDestinationCapabilitiesReady_;
    private onDestinationError_;
    private onErrorChanged_;
    private updateRecentDestinations_;
    private updateDropdownDestinations_;
    /**
     * @return Whether the destinations dropdown should be disabled.
     */
    protected shouldDisableDropdown_(): boolean;
    /**
     * @return Whether the See More button should be disabled.
     */
    protected shouldDisableSeeMore_(): boolean;
    private computeLoaded_;
    /**
     * @param e Event containing the key of the recent destination that was
     *     selected.
     */
    protected onSelectedOptionChange_(e: CustomEvent<string>): void;
    protected onSeeMoreClick_(): void;
    protected onDialogClose_(): void;
    private updateDestinationSelect_;
    getDestinationStoreForTest(): DestinationStore;
}
export type DestinationSettingsElement = PrintPreviewDestinationSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-destination-settings': PrintPreviewDestinationSettingsElement;
    }
}
export {};
