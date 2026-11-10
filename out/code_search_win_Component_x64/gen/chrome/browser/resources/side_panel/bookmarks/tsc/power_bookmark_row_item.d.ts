import '//bookmarks-side-panel.top-chrome/shared/sp_list_item_badge.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import '//resources/cr_elements/icons.html.js';
import './icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { CrUrlListItemElement } from 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import { CrUrlListItemSize } from 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
export interface PowerBookmarkRowItemElement {
    $: {
        crUrlListItem: CrUrlListItemElement;
    };
}
export declare class PowerBookmarkRowItemElement extends CrLitElement {
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
        hasFolders: {
            type: BooleanConstructor;
            reflect: boolean;
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
        trailingIconTooltip: {
            type: StringConstructor;
        };
        listItemSize: {
            type: StringConstructor;
        };
        selectedBookmarks: {
            type: ArrayConstructor;
        };
        renamingId: {
            type: StringConstructor;
        };
        hasActiveDrag: {
            type: BooleanConstructor;
        };
        isExpandable: {
            type: BooleanConstructor;
        };
        expanded: {
            type: BooleanConstructor;
            notify: boolean;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor bookmark: BookmarksTreeNode;
    accessor compact: boolean;
    accessor contextMenuBookmark: BookmarksTreeNode | undefined;
    accessor depth: number;
    accessor hasCheckbox: boolean;
    accessor hasFolders: boolean;
    accessor imageUrls: {
        [key: string]: string;
    };
    accessor isPriceTracked: boolean;
    accessor searchQuery: string | undefined;
    accessor shoppingCollectionFolderId: string;
    accessor trailingIconTooltip: string;
    accessor listItemSize: CrUrlListItemSize;
    accessor selectedBookmarks: BookmarksTreeNode[];
    accessor renamingId: string;
    accessor hasActiveDrag: boolean;
    accessor isExpandable: boolean;
    accessor expanded: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private bookmarksService_;
    focus(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onInputDisplayChange_;
    protected getUrl_(): string | undefined;
    protected isRenamingItem_(): boolean;
    protected isCheckboxChecked_(): boolean;
    protected isBookmarksBar_(): boolean;
    protected showTrailingIcon_(): boolean;
    protected onClick_(event: MouseEvent): void;
    protected onAuxclick_(event: MouseEvent): void;
    protected onRowClicked_(event: MouseEvent): void;
    protected onContextmenu_(event: MouseEvent): void;
    protected onTrailingIconClick_(event: MouseEvent): void;
    protected onCheckboxCheckedChanged_(event: Event): void;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onInputKeydown_(event: KeyboardEvent): void;
    private createInputChangeEvent_;
    getBookmarkDescriptionForTests(bookmark: BookmarksTreeNode): string | undefined;
    protected onInputChange_(event: Event): void;
    protected onInputBlur_(event: Event): void;
    private isPriceTracked_;
    protected showDiscountedPrice_(): boolean;
    protected getCurrentPrice_(bookmark: BookmarksTreeNode): string;
    protected getPreviousPrice_(bookmark: BookmarksTreeNode): string;
    protected getBookmarkForceHover_(): boolean;
    protected canEdit_(): boolean;
    protected isShoppingCollection_(): boolean;
    protected getBookmarkDescription_(bookmark: BookmarksTreeNode): string | undefined;
    protected getBookmarkImageUrls_(): string[];
    protected getBookmarkMenuA11yLabel_(): string;
    protected getBookmarkA11yLabel_(): string;
    protected getBookmarkA11yDescription_(): string;
    protected getBookmarkDescriptionMeta_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmark-row-item': PowerBookmarkRowItemElement;
    }
}
