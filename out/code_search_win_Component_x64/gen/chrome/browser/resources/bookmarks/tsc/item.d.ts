import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BookmarkNode, BookmarksPageState } from './types.js';
declare const BookmarksItemElementBase: typeof CrLitElement & (new (...args: any[]) => import("./store_client_mixin_lit.js").StoreClientMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export interface BookmarksItemElement {
    $: {
        icon: HTMLElement;
        menuButton: CrIconButtonElement;
    };
}
export declare class BookmarksItemElement extends BookmarksItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        itemId: {
            type: StringConstructor;
        };
        ironListTabIndex: {
            type: NumberConstructor;
        };
        item_: {
            type: ObjectConstructor;
        };
        isSelectedItem_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isMultiSelect_: {
            type: BooleanConstructor;
        };
        isFolder_: {
            type: BooleanConstructor;
        };
        lastTouchPoints_: {
            type: NumberConstructor;
        };
        canUploadAsAccountBookmark_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor itemId: string;
    accessor ironListTabIndex: number | undefined;
    protected accessor item_: BookmarkNode | undefined;
    private accessor isSelectedItem_;
    private accessor isMultiSelect_;
    private accessor isFolder_;
    private accessor lastTouchPoints_;
    protected accessor canUploadAsAccountBookmark_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    onStateChanged(state: BookmarksPageState): void;
    setIsSelectedItemForTesting(selected: boolean): void;
    focusMenuButton(): void;
    getDropTarget(): BookmarksItemElement;
    private onContextMenu_;
    protected onMenuButtonClick_(e: Event): void;
    protected onUploadButtonClick_(): void;
    private selectThisItem_;
    protected getItemUrl_(): string;
    protected getItemTitle_(): string;
    private onClick_;
    private onKeydown_;
    private onDblClick_;
    private onMiddleClick_;
    private onTouchStart_;
    /**
     * Prevent default middle-mouse behavior. On Windows, this prevents autoscroll
     * (during mousedown), and on Linux this prevents paste (during mouseup).
     */
    private cancelMiddleMouseBehavior_;
    private updateFavicon_;
    protected getButtonAriaLabel_(): string;
    /**
     * This item is part of a group selection.
     */
    private isMultiSelectMenu_;
    private updateCanUploadAsAccountBookmark_;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-item': BookmarksItemElement;
    }
}
export {};
