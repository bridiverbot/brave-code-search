import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import type { CrToolbarSearchFieldElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BookmarksPageState } from './types.js';
declare const BookmarksToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("./store_client_mixin_lit.js").StoreClientMixinLitInterface);
export declare class BookmarksToolbarElement extends BookmarksToolbarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        sidebarWidth: {
            type: StringConstructor;
        };
        showSelectionOverlay: {
            type: BooleanConstructor;
        };
        narrow_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchTerm_: {
            type: StringConstructor;
        };
        selectedItems_: {
            type: ObjectConstructor;
        };
        globalCanEdit_: {
            type: BooleanConstructor;
        };
    };
    accessor sidebarWidth: string;
    accessor showSelectionOverlay: boolean;
    protected accessor narrow_: boolean;
    private accessor searchTerm_;
    private accessor selectedItems_;
    private accessor globalCanEdit_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    onStateChanged(state: BookmarksPageState): void;
    get searchField(): CrToolbarSearchFieldElement;
    protected onMenuButtonOpenClick_(e: Event): void;
    protected onDeleteSelectionClick_(): void;
    protected onClearSelectedItems_(): void;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onNarrowChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected canDeleteSelection_(): boolean;
    protected getItemsSelectedString_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-toolbar': BookmarksToolbarElement;
    }
}
export {};
