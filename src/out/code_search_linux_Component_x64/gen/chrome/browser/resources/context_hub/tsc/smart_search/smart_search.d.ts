import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './smart_search_card.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { SmartSearchResult } from './smart_search_card.js';
export declare class SmartSearchElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        searchQuery_: {
            type: StringConstructor;
        };
        results_: {
            type: ArrayConstructor;
        };
        selectedIds_: {
            type: ObjectConstructor;
        };
        isSearching_: {
            type: BooleanConstructor;
        };
        hasSearched_: {
            type: BooleanConstructor;
        };
        smartSearchEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor searchQuery_: string;
    protected accessor results_: SmartSearchResult[];
    protected accessor selectedIds_: Set<string>;
    protected accessor isSearching_: boolean;
    protected accessor hasSearched_: boolean;
    protected accessor smartSearchEnabled_: boolean;
    protected getFilteredResults_(): SmartSearchResult[];
    protected onSearchInputKeydown_(e: KeyboardEvent): void;
    protected onSearchInput_(e: Event): void;
    protected onSearchClick_(): void;
    private executeSearch_;
    protected isAllSelected_(): boolean;
    protected isSomeSelected_(): boolean;
    protected onSelectAllChange_(e: Event): void;
    protected onCardSelectionChange_(e: CustomEvent<{
        id: string;
        selected: boolean;
    }>): void;
    protected isValidUrl_(urlStr: string): boolean;
    protected onOpenSelectedClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'smart-search': SmartSearchElement;
    }
}
