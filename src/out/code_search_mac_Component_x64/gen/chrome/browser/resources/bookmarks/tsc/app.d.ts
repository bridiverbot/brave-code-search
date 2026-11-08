import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import 'chrome://resources/cr_elements/cr_splitter/cr_splitter.js';
import './folder_node.js';
import './list.js';
import '/strings.m.js';
import './command_manager.js';
import './toolbar.js';
import type { CrSplitterElement } from 'chrome://resources/cr_elements/cr_splitter/cr_splitter.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DndManager } from './dnd_manager.js';
import type { BookmarksPageState } from './types.js';
export declare const HIDE_FOCUS_RING_ATTRIBUTE = "hide-focus-ring";
declare const BookmarksAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener) & (new (...args: any[]) => import("./store_client_mixin_lit.js").StoreClientMixinLitInterface);
export interface BookmarksAppElement {
    $: {
        splitter: CrSplitterElement;
        sidebar: HTMLElement;
    };
}
export declare class BookmarksAppElement extends BookmarksAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        searchTerm_: {
            type: StringConstructor;
        };
        folderOpenState_: {
            type: ObjectConstructor;
        };
        sidebarWidth_: {
            type: StringConstructor;
        };
        toolbarShadow_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    private accessor folderOpenState_;
    private accessor searchTerm_;
    protected accessor sidebarWidth_: string;
    protected accessor toolbarShadow_: boolean;
    private eventTracker_;
    private dndManager_;
    private router_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    onStateChanged(state: BookmarksPageState): void;
    private initializeSplitter_;
    private updateSidebarWidth_;
    private onMousedown_;
    private onKeydown_;
    private searchTermChanged_;
    private folderOpenStateChanged_;
    handleFindShortcut(modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
    protected onUndoClick_(): void;
    protected onListScroll_(e: Event): void;
    getDndManagerForTesting(): DndManager | null;
    private addThemedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmarks-app': BookmarksAppElement;
    }
}
export {};
