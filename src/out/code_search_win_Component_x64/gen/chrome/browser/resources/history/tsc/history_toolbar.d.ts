import '/strings.m.js';
import 'chrome://resources/cr_components/history_embeddings/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import type { HistoryQuery } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { CrToolbarElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import type { CrToolbarSearchFieldElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface HistoryToolbarElement {
    $: {
        mainToolbar: CrToolbarElement;
    };
}
export declare class HistoryToolbarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        count: {
            type: NumberConstructor;
        };
        itemsSelected_: {
            type: BooleanConstructor;
        };
        pendingDelete: {
            type: BooleanConstructor;
        };
        searchTerm: {
            type: StringConstructor;
        };
        selectedPage: {
            type: StringConstructor;
        };
        spinnerActive: {
            type: BooleanConstructor;
        };
        hasDrawer: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasMoreResults: {
            type: BooleanConstructor;
        };
        querying: {
            type: BooleanConstructor;
        };
        queryInfo: {
            type: ObjectConstructor;
        };
        showMenuPromo: {
            type: BooleanConstructor;
        };
    };
    accessor count: number;
    accessor pendingDelete: boolean;
    accessor searchTerm: string;
    accessor selectedPage: string;
    accessor hasDrawer: boolean;
    accessor hasMoreResults: boolean;
    accessor querying: boolean;
    accessor queryInfo: HistoryQuery | null;
    accessor spinnerActive: boolean;
    accessor showMenuPromo: boolean;
    protected accessor itemsSelected_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    get searchField(): CrToolbarSearchFieldElement;
    protected onDeleteSelectedItemsClick_(): void;
    deleteSelectedItems(): void;
    protected onOpenSelectedItemsClick_(): void;
    openSelectedItems(): void;
    protected onClearSelectedItems_(): void;
    clearSelectedItems(): void;
    /**
     * Changes the toolbar background color depending on whether any history items
     * are currently selected.
     */
    private changeToolbarView_;
    /**
     * When changing the search term externally, update the search field to
     * reflect the new search term.
     */
    private searchTermChanged_;
    protected onSearchChanged_(event: CustomEvent<string>): void;
    protected numberOfItemsSelected_(count: number): string;
    protected computeSearchIconOverride_(): string | undefined;
    protected computeSearchInputAriaDescriptionOverride_(): string | undefined;
    protected computeSearchPrompt_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-toolbar': HistoryToolbarElement;
    }
}
