import 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import '/strings.m.js';
import './item.js';
import './promo_card.js';
import type { CrLazyListElement } from 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BookmarksPageState } from './types.js';
declare const BookmarksListElementBase: typeof CrLitElement & (new (...args: any[]) => import("./store_client_mixin_lit.js").StoreClientMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export interface BookmarksListElement {
    $: {
        list: CrLazyListElement<string>;
        message: HTMLElement;
    };
}
export declare class BookmarksListElement extends BookmarksListElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        displayedIds_: {
            type: ArrayConstructor;
        };
        searchTerm_: {
            type: StringConstructor;
        };
        selectedFolder_: {
            type: StringConstructor;
        };
        selectedItems_: {
            type: ObjectConstructor;
        };
        focusedIndex_: {
            type: NumberConstructor;
        };
        shouldShowPromoCard_: {
            type: BooleanConstructor;
        };
    };
    protected accessor displayedIds_: string[];
    private accessor focusedIndex_;
    private eventTracker_;
    private accessor searchTerm_;
    protected accessor selectedFolder_: string;
    private accessor selectedItems_;
    protected accessor shouldShowPromoCard_: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    onStateChanged(state: BookmarksPageState): void;
    getDropTarget(): HTMLElement;
    private onDisplayedIdsChanged_;
    private focusMenuButton_;
    /**
     * Scroll the list so that |itemId| is visible, if it is not already.
     */
    private scrollToId_;
    protected emptyListMessage_(): string;
    protected isEmptyList_(): boolean;
    private deselectItems_;
    private onOpenCommandMenu_;
    /**
     * Highlight a list of items by selecting them, scrolling them into view and
     * focusing the first item.
     */
    private onHighlightItems_;
    private onImportBegan_;
    private onImportEnded_;
    protected onItemKeydown_(e: KeyboardEvent): void;
    private updateAnchorsAndSelectionForFocusChange_;
    private onContextMenu_;
    protected onItemFocus_(e: Event): void;
    protected getAriaRowindex_(index: number): number;
    protected getTabindex_(index: number): number;
    protected getAriaSelected_(id: string): boolean;
    protected onShouldShowPromoCard_(e: CustomEvent<{
        shouldShowPromoCard: boolean;
    }>): void;
    setDisplayedIdsForTesting(ids: string[]): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-list': BookmarksListElement;
    }
}
export {};
