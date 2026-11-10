import './key_value_pair_entry.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { KeyValuePairEntry } from './key_value_pair_entry.js';
export interface KeyValuePairViewerElement {
    $: {
        collapseAll: HTMLButtonElement;
        expandAll: HTMLButtonElement;
        spinner: HTMLElement;
        status: HTMLElement;
        table: HTMLElement;
        tableTitle: HTMLElement;
    };
}
export declare class KeyValuePairViewerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entries: {
            type: ArrayConstructor;
        };
        loading: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor loading: boolean;
    accessor entries: KeyValuePairEntry[];
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onExpandAllClick_(): void;
    protected onCollapseAllClick_(): void;
    private onDragOver_;
    private onDrop_;
    /**
     * Read in an entry asynchronously and update the UI if parsing succeeds, or
     * show an error if it fails.
     */
    private importEntry_;
    private showImportError_;
}
declare global {
    interface HTMLElementTagNameMap {
        'key-value-pair-viewer': KeyValuePairViewerElement;
    }
}
