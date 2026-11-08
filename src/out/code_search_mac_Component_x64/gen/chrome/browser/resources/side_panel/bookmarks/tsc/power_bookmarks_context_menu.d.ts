import '/strings.m.js';
import './icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BookmarksTreeNode } from './bookmarks.mojom-webui.js';
export interface PowerBookmarksContextMenuElement {
    $: {
        menu: CrActionMenuElement;
    };
}
export declare enum MenuItemId {
    OPEN_NEW_TAB = 0,
    OPEN_NEW_WINDOW = 1,
    OPEN_INCOGNITO = 2,
    OPEN_NEW_TAB_GROUP = 3,
    EDIT = 4,
    ADD_TO_BOOKMARKS_BAR = 5,
    REMOVE_FROM_BOOKMARKS_BAR = 6,
    TRACK_PRICE = 7,
    RENAME = 8,
    DELETE = 9,
    DIVIDER = 10,
    OPEN_SPLIT_VIEW = 11,
    OPEN_ISOLATED = 12
}
export interface MenuItem {
    id: MenuItemId;
    label?: string;
    disabled?: boolean;
}
export declare class PowerBookmarksContextMenuElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        bookmarks_: {
            type: ArrayConstructor;
        };
        priceTracked_: {
            type: BooleanConstructor;
        };
        priceTrackingEligible_: {
            type: BooleanConstructor;
        };
        isInSplitView_: {
            type: BooleanConstructor;
        };
        offTheRecordCount_: {
            type: NumberConstructor;
        };
    };
    private bookmarksApi_;
    private priceTrackingProxy_;
    private accessor bookmarks_;
    private accessor priceTracked_;
    private accessor priceTrackingEligible_;
    private accessor isInSplitView_;
    private accessor offTheRecordCount_;
    showAt(target: HTMLElement, bookmarks: BookmarksTreeNode[], priceTracked: boolean, priceTrackingEligible: boolean, isInSplitView: boolean, offTheRecordCount: number, onShown?: Function): void;
    showAtPosition(event: MouseEvent, bookmarks: BookmarksTreeNode[], priceTracked: boolean, priceTrackingEligible: boolean, isInSplitView: boolean, offTheRecordCount: number, onShown?: Function): void;
    isOpen(): boolean;
    close(): void;
    anyBookmarkMatches(id: string): boolean;
    protected getMenuItemsForBookmarks_(): MenuItem[];
    private getIncognitoAndIsolatedMenuItems_;
    protected showDivider_(menuItem: MenuItem): boolean;
    private dispatchDisabledFeatureEvent_;
    /**
     * Close the menu on mousedown so clicks can propagate to the underlying UI.
     * This allows the user to right click the list while a context menu is
     * showing and get another context menu.
     */
    protected onMousedown_(e: Event): void;
    protected onMenuItemClick_(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmarks-context-menu': PowerBookmarksContextMenuElement;
    }
}
