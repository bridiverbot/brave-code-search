import { TabSearchPageElement } from './tab_search_page-chromium.js';
declare class BraveTabSearchPageElement extends TabSearchPageElement {
    static get is(): string;
    private semanticSearchToken_;
    private semanticTabIdsByQuery_;
    constructor();
    disconnectedCallback(): void;
    onSearchTermInput(): void;
    private getOpenTabs_;
    private getSemanticExtras_;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-tab-search-page': BraveTabSearchPageElement;
    }
}
export * from './tab_search_page-chromium.js';
