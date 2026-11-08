import './power_bookmark_row_item.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_heading.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrUrlListItemSize } from 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
import type { PowerBookmarkRowItemElement } from './power_bookmark_row_item.js';
export declare const NESTED_BOOKMARKS_BASE_MARGIN = 40;
export declare const NESTED_BOOKMARKS_MARGIN_PER_DEPTH = 12;
export declare const BOOKMARK_ROW_LOAD_EVENT = "bookmark-row-connected-event";
export declare class PowerBookmarkRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        bookmark: {
            type: ObjectConstructor;
        };
        compact: {
            type: BooleanConstructor;
        };
        contextMenuBookmark: {
            type: ObjectConstructor;
        };
        depth: {
            type: NumberConstructor;
            reflect: boolean;
        };
        hasCheckbox: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectedBookmarks: {
            type: ArrayConstructor;
        };
        renamingId: {
            type: StringConstructor;
        };
        imageUrls: {
            type: ObjectConstructor;
        };
        isPriceTracked: {
            type: BooleanConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        shoppingCollectionFolderId: {
            type: StringConstructor;
        };
        rowAriaDescription: {
            type: StringConstructor;
        };
        trailingIconTooltip: {
            type: StringConstructor;
        };
        listItemSize: {
            type: StringConstructor;
        };
        toggleExpand: {
            type: BooleanConstructor;
        };
        updatedElementIds: {
            type: ArrayConstructor;
        };
        canDrag: {
            type: BooleanConstructor;
        };
        hasActiveDrag: {
            type: BooleanConstructor;
        };
        activeFolderPath: {
            type: ArrayConstructor;
        };
        hasFolders: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        activeSortIndex: {
            type: NumberConstructor;
        };
        rowHeading: {
            type: StringConstructor;
        };
    };
    accessor bookmark: BookmarksTreeNode;
    accessor compact: boolean;
    accessor contextMenuBookmark: BookmarksTreeNode | undefined;
    accessor depth: number;
    accessor hasCheckbox: boolean;
    accessor selectedBookmarks: BookmarksTreeNode[];
    accessor renamingId: string;
    accessor searchQuery: string | undefined;
    accessor shoppingCollectionFolderId: string;
    accessor rowAriaDescription: string;
    accessor trailingIconTooltip: string;
    accessor toggleExpand: boolean;
    accessor imageUrls: {
        [key: string]: string;
    };
    accessor updatedElementIds: string[];
    accessor isPriceTracked: boolean;
    accessor canDrag: boolean;
    accessor hasActiveDrag: boolean;
    accessor activeFolderPath: BookmarksTreeNode[];
    accessor hasFolders: boolean;
    accessor activeSortIndex: number;
    accessor listItemSize: CrUrlListItemSize;
    accessor rowHeading: string;
    private bookmarksService_;
    private priceTrackingProxy_;
    private shoppingListenerIds_;
    private keyArrowNavigationService_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleBookmarkSubscriptionChange_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    getUpdateComplete(): Promise<boolean>;
    focus(): void;
    private setExpanded_;
    private onKeydown_;
    getBookmarkDescriptionForTests(bookmark: BookmarksTreeNode): string | undefined;
    private onFocus_;
    get currentListItem_(): PowerBookmarkRowItemElement;
    protected handleListItemSizeChanged_(): Promise<void>;
    protected onExpandedChanged_(event: CustomEvent<{
        value: boolean;
    }>): void;
    private isPriceTracked_;
    protected canExpand_(): boolean;
    protected isFolder_(): boolean;
    protected isFolderWithChildren_(): boolean;
    protected getListItemCssClass_(): string;
    protected isExpanded_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmark-row': PowerBookmarkRowElement;
    }
}
