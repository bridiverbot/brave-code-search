import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export declare class SearchableLabelElement extends PolymerElement {
    static get is(): string;
    static get template(): null;
    static get properties(): {
        title: StringConstructor;
        searchTerm: StringConstructor;
    };
    title: string;
    searchTerm: string;
    static get observers(): string[];
    /**
     * Updates the page title. If a search term is specified, highlights any
     * occurrences of the search term in bold.
     */
    private setSearchedTextToBold_;
    private appendTextElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'searchable-label': SearchableLabelElement;
    }
}
