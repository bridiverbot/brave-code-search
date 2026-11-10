import '/strings.m.js';
import './bypass_warning_confirmation_dialog.js';
import './item.js';
import './toolbar.js';
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { CrInfiniteListElement } from 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { MojomData } from './data.js';
import type { DownloadsToolbarElement } from './toolbar.js';
export interface DownloadsManagerElement {
    $: {
        toolbar: DownloadsToolbarElement;
        downloadsList: CrInfiniteListElement<MojomData>;
        mainContainer: HTMLElement;
    };
}
type SaveDangerousClickEvent = CustomEvent<{
    id: string;
}>;
declare global {
    interface HTMLElementEventMap {
        'save-dangerous-click': SaveDangerousClickEvent;
    }
}
declare const DownloadsManagerElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener);
export declare class DownloadsManagerElement extends DownloadsManagerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hasDownloads_: {
            type: BooleanConstructor;
        };
        inSearchMode_: {
            type: BooleanConstructor;
        };
        items_: {
            type: ArrayConstructor;
        };
        spinnerActive_: {
            type: BooleanConstructor;
        };
        bypassPromptItemId_: {
            type: StringConstructor;
        };
        lastFocused_: {
            type: ObjectConstructor;
        };
        listBlurred_: {
            type: BooleanConstructor;
        };
        listScrollTarget_: {
            type: ObjectConstructor;
        };
    };
    static get observers(): string[];
    protected accessor items_: MojomData[];
    protected accessor hasDownloads_: boolean;
    protected accessor inSearchMode_: boolean;
    protected accessor spinnerActive_: boolean;
    protected accessor bypassPromptItemId_: string;
    protected accessor lastFocused_: HTMLElement | null;
    protected accessor listBlurred_: boolean;
    protected accessor listScrollTarget_: HTMLElement;
    private announcerTimeout_;
    private browserProxy_;
    private searchService_;
    private loaded_;
    private listenerIds_;
    private eventTracker_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected onSaveDangerousClick_(e: SaveDangerousClickEvent): void;
    protected shouldShowBypassWarningPrompt_(): boolean;
    protected computeBypassWarningDialogFileName_(): string;
    private hideBypassWarningPrompt_;
    protected onBypassWarningConfirmationDialogClose_(): void;
    private clearAll_;
    private insertItems_;
    protected hasClearableDownloads_(): boolean;
    private itemsChanged_;
    /**
     * @return The text to show when no download items are showing.
     */
    protected noDownloadsText_(): string;
    /**
     * @return Whether the undo command can be handled by accelerator.
     */
    private canHandleUndoByAccelerator_;
    private onKeyDown_;
    private onClick_;
    private onClearAllCommand_;
    private onUndoCommand_;
    private onToastClicked_;
    protected onScroll_(): void;
    protected onSearchChanged_(): void;
    protected onSpinnerActiveChanged_(event: CustomEvent<{
        value: boolean;
    }>): void;
    private removeItem_;
    private updateItems_;
    protected onUndoClick_(): void;
    private updateItem_;
    protected onLastFocusedChanged_(e: CustomEvent<{
        value: HTMLElement | null;
    }>): void;
    protected onListBlurredChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onRestoreListFocus_(): void;
    handleFindShortcut(modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
    private addThemedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'downloads-manager': DownloadsManagerElement;
    }
}
export {};
