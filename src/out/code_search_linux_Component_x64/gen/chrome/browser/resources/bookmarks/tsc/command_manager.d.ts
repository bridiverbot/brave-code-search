/**
 * @fileoverview Element which shows context menus and handles keyboard
 * shortcuts.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '/strings.m.js';
import './edit_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Command, MenuSource } from './constants.js';
import type { BookmarksPageState } from './types.js';
declare const BookmarksCommandManagerElementBase: typeof CrLitElement & (new (...args: any[]) => import("./store_client_mixin_lit.js").StoreClientMixinLitInterface);
export interface BookmarksCommandManagerElement {
    $: {
        dropdown: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
export declare class BookmarksCommandManagerElement extends BookmarksCommandManagerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        menuIds_: {
            type: ObjectConstructor;
        };
        menuSource_: {
            type: NumberConstructor;
        };
        canPaste_: {
            type: BooleanConstructor;
        };
        isActiveTabInSplit_: {
            type: BooleanConstructor;
        };
        globalCanEdit_: {
            type: BooleanConstructor;
        };
        showEditDialog_: {
            type: BooleanConstructor;
        };
        showOpenDialog_: {
            type: BooleanConstructor;
        };
    };
    /**
     * Indicates where the context menu was opened from. Will be NONE if
     * menu is not open, indicating that commands are from keyboard shortcuts
     * or elsewhere in the UI.
     */
    private accessor menuSource_;
    private confirmOpenCallback_;
    private accessor canPaste_;
    private accessor isActiveTabInSplit_;
    private accessor globalCanEdit_;
    protected accessor menuIds_: Set<string>;
    protected accessor showEditDialog_: boolean;
    protected accessor showOpenDialog_: boolean;
    private browserProxy_;
    private shortcuts_;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onStateChanged(state: BookmarksPageState): void;
    getMenuIdsForTesting(): Set<string>;
    getMenuSourceForTesting(): MenuSource;
    /**
     * Display the command context menu at (|x|, |y|) in window coordinates.
     * Commands will execute on |items| if given, or on the currently selected
     * items.
     */
    openCommandMenuAtPosition(x: number, y: number, source: MenuSource, items?: Set<string>): void;
    /**
     * Display the command context menu positioned to cover the |target|
     * element. Commands will execute on the currently selected items.
     */
    openCommandMenuAtElement(target: HTMLElement, source: MenuSource): void;
    closeCommandMenu(): void;
    /**
     * Determine if the |command| can be executed with the given |itemIds|.
     * Commands which appear in the context menu should be implemented
     * separately using `isCommandVisible_` and `isCommandEnabled_`.
     */
    canExecute(command: Command, itemIds: Set<string>): boolean;
    protected isCommandVisible_(command: Command, itemIds: Set<string>): boolean;
    protected isCommandEnabled_(command: Command, itemIds: Set<string>): boolean;
    /**
     * Returns whether the currently displayed bookmarks list can be changed.
     */
    private canChangeList_;
    private ensureEditDialog_;
    private ensureOpenDialog_;
    handle(command: Command, itemIds: Set<string>): void;
    handleKeyEvent(e: KeyboardEvent, itemIds: Set<string>): boolean;
    /**
     * Register a keyboard shortcut for a command.
     */
    private addShortcut_;
    /**
     * Minimize the set of |itemIds| by removing any node which has an ancestor
     * node already in the set. This ensures that instead of trying to delete
     * both a node and its descendant, we will only try to delete the topmost
     * node, preventing an error in the bookmarkManagerPrivate.removeTrees API
     * call.
     */
    private minimizeDeletionSet_;
    /**
     * Open the given |ids| in response to a |command|. May show a confirmation
     * dialog before opening large numbers of URLs.
     */
    private openBookmarkIds_;
    /**
     * Returns all ids in the given set of nodes and their immediate children.
     * Note that these will be ordered by insertion order into the |itemIds|
     * set, and that it is possible to duplicate a id by passing in both the
     * parent ID and child ID.
     */
    private expandIds_;
    private containsMatchingNode_;
    private isSingleBookmark_;
    private isFolder_;
    protected getCommandLabel_(command: Command): string;
    private getPluralizedOpenAllString_;
    protected computeMenuCommands_(): Command[];
    protected showDividerAfter_(command: Command): boolean;
    private recordCommandHistogram_;
    /**
     * Show a toast with a bookmark |title| inserted into a label, with the
     * title ellipsised if necessary.
     */
    private showTitleToast_;
    private onOpenCommandMenu_;
    protected onCommandClick_(e: Event): void;
    private onKeydown_;
    /**
     * Close the menu on mousedown so clicks can propagate to the underlying UI.
     * This allows the user to right click the list while a context menu is
     * showing and get another context menu.
     */
    protected onMenuMousedown_(e: Event): void;
    protected onOpenCancelClick_(): void;
    protected onOpenConfirmClick_(): void;
    static getInstance(): BookmarksCommandManagerElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-command-manager': BookmarksCommandManagerElement;
    }
}
export {};
