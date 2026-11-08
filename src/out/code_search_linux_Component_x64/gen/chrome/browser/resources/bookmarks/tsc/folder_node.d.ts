import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BookmarkNode, BookmarksPageState } from './types.js';
declare const BookmarksFolderNodeElementBase: typeof CrLitElement & (new (...args: any[]) => import("./store_client_mixin_lit.js").StoreClientMixinLitInterface);
export interface BookmarksFolderNodeElement {
    $: {
        container: HTMLElement;
        descendants: HTMLElement;
    };
}
export declare class BookmarksFolderNodeElement extends BookmarksFolderNodeElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        itemId: {
            type: StringConstructor;
        };
        depth: {
            type: NumberConstructor;
        };
        isOpen: {
            type: BooleanConstructor;
        };
        item_: {
            type: ObjectConstructor;
        };
        openState_: {
            type: BooleanConstructor;
        };
        selectedFolder_: {
            type: StringConstructor;
        };
        searchActive_: {
            type: BooleanConstructor;
        };
        isSelectedFolder_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasChildFolder_: {
            type: BooleanConstructor;
        };
    };
    accessor depth: number;
    accessor isOpen: boolean;
    accessor itemId: string;
    protected accessor item_: BookmarkNode | undefined;
    private accessor openState_;
    private accessor selectedFolder_;
    private accessor searchActive_;
    protected accessor isSelectedFolder_: boolean;
    protected accessor hasChildFolder_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    onStateChanged(state: BookmarksPageState): void;
    protected getContainerClass_(): string;
    protected getItemTitle_(): string;
    getFocusTarget(): HTMLElement;
    getDropTarget(): HTMLElement;
    private onKeydown_;
    private changeKeyboardSelection_;
    /**
     * Returns the next or previous visible bookmark node relative to |child|.
     */
    getNextChild(reverse: boolean, child: BookmarksFolderNodeElement): BookmarksFolderNodeElement | null;
    /**
     * Returns the immediate parent folder node, or null if there is none.
     */
    getParentFolderNode(): BookmarksFolderNodeElement | null;
    getLastVisibleDescendant(): BookmarksFolderNodeElement;
    protected onFolderClick_(): void;
    private selectFolder_;
    protected onContextmenu_(e: MouseEvent): void;
    private getChildFolderNodes_;
    /**
     * Toggles whether the folder is open.
     */
    private toggleFolder_;
    protected onFolderDblclick_(e: Event): void;
    protected onArrowClick_(e: Event): void;
    protected onArrowMousedown_(e: Event): void;
    protected getChildDepth_(): number;
    protected getFolderChildren_(): string[];
    protected isRootFolder_(): boolean;
    protected getTabIndex_(): string;
    protected getAriaLevel_(): number;
    /**
     * Sets the 'aria-expanded' accessibility on nodes which need it. Note that
     * aria-expanded="false" is different to having the attribute be undefined.
     */
    private updateAriaExpanded_;
    /**
     * Scrolls the folder node into view when the folder is selected.
     */
    private scrollIntoViewIfNeeded_;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-folder-node': BookmarksFolderNodeElement;
    }
}
export {};
