import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class HistorySearchedLabelElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        title: {
            type: StringConstructor;
        };
        searchTerm: {
            type: StringConstructor;
        };
    };
    accessor searchTerm: string;
    accessor title: string;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Updates the page title. If a search term is specified, highlights any
     * occurrences of the search term in bold.
     */
    private setSearchedTextToBold_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-searched-label': HistorySearchedLabelElement;
    }
}
