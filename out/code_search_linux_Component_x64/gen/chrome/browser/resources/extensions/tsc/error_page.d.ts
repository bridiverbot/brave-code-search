import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './code_section.js';
import './shared_style.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from './item.js';
type ManifestError = chrome.developerPrivate.ManifestError;
type RuntimeError = chrome.developerPrivate.RuntimeError;
export interface ErrorPageDelegate {
    deleteErrors(extensionId: string, errorIds?: number[], type?: chrome.developerPrivate.ErrorType): void;
    requestFileSource(args: chrome.developerPrivate.RequestFileSourceProperties): Promise<chrome.developerPrivate.RequestFileSourceResponse>;
    openDevToolsForError(error: chrome.developerPrivate.RuntimeError): void;
}
export interface ExtensionsErrorPageElement {
    $: {
        closeButton: HTMLElement;
    };
}
declare const ExtensionsErrorPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("./item_mixin.js").ItemMixinInterface);
export declare class ExtensionsErrorPageElement extends ExtensionsErrorPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        inDevMode: {
            type: BooleanConstructor;
        };
        entries_: {
            type: ArrayConstructor;
        };
        code_: {
            type: ObjectConstructor;
        };
        /**
         * Index into |entries_|.
         */
        selectedEntry_: {
            type: NumberConstructor;
        };
        selectedStackFrame_: {
            type: ObjectConstructor;
        };
    };
    accessor data: chrome.developerPrivate.ExtensionInfo | undefined;
    accessor delegate: (ErrorPageDelegate & ItemDelegate) | undefined;
    accessor inDevMode: boolean;
    protected accessor entries_: Array<ManifestError | RuntimeError>;
    protected accessor code_: chrome.developerPrivate.RequestFileSourceResponse | null;
    private accessor selectedEntry_;
    private accessor selectedStackFrame_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    getSelectedError(): ManifestError | RuntimeError | null;
    /**
     * Focuses the back button when page is loaded.
     */
    private onViewEnterStart_;
    protected getContextUrl_(error: ManifestError | RuntimeError): string;
    protected onCloseButtonClick_(): void;
    protected onClearAllClick_(): void;
    protected computeErrorIcon_(error: ManifestError | RuntimeError): string;
    protected computeErrorTypeLabel_(error: ManifestError | RuntimeError): string;
    protected onDeleteErrorClick_(e: Event): void;
    /**
     * Fetches the source for the selected error and populates the code section.
     */
    private onSelectedErrorChanged_;
    protected computeIsRuntimeError_(item: ManifestError | RuntimeError): boolean;
    /**
     * The description is a human-readable summation of the frame, in the
     * form "<relative_url>:<line_number> (function)", e.g.
     * "myfile.js:25 (myFunction)".
     */
    protected getStackTraceLabel_(frame: chrome.developerPrivate.StackFrame): string;
    protected getStackFrameClass_(frame: chrome.developerPrivate.StackFrame): string;
    protected getStackFrameTabIndex_(frame: chrome.developerPrivate.StackFrame): number;
    /**
     * This function is used to determine whether or not we want to show a
     * stack frame. We don't want to show code from internal scripts.
     */
    protected shouldDisplayFrame_(url: string): boolean;
    private updateSelected_;
    protected onStackFrameClick_(e: Event): void;
    protected onStackKeydown_(e: KeyboardEvent): void;
    /**
     * Computes the class name for the error item depending on whether its
     * the currently selected error.
     */
    protected computeErrorClass_(index: number): string;
    protected iconName_(index: number): string;
    /**
     * Determine if the cr-collapse should be opened (expanded).
     */
    protected isOpened_(index: number): boolean;
    /**
     * @return The aria-expanded value as a string.
     */
    protected isAriaExpanded_(index: number): string;
    protected onErrorItemClick_(e: MouseEvent): void;
    protected onErrorItemKeydown_(e: KeyboardEvent): void;
    protected onErrorItemAction_(e: Event): void;
    protected showReloadButton_(): boolean;
    protected onReloadClick_(): void;
    /**
     * Handle the 'View in DevTools' button click for a runtime error.
     * If the error can be inspected (canInspect: true), opens DevTools for the
     * error context. Otherwise, logs a warning that DevTools cannot be opened.
     *
     * @param e The click event containing the error index in the dataset.
     */
    protected onViewInDevToolsClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-error-page': ExtensionsErrorPageElement;
    }
}
export {};
