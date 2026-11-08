import 'chrome://read-later.top-chrome/shared/sp_empty_state.js';
import 'chrome://read-later.top-chrome/shared/sp_footer.js';
import 'chrome://read-later.top-chrome/shared/sp_heading.js';
import 'chrome://read-later.top-chrome/shared/sp_icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './reading_list_item.js';
import '/strings.m.js';
import type { CrLazyListElement } from 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ReadLaterEntry } from './reading_list.mojom-webui.js';
declare const ReadingListAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export interface ReadingListAppElement {
    $: {
        footer: HTMLElement;
        readingListList: CrLazyListElement<ReadLaterEntry>;
        scroller: HTMLElement;
    };
}
export declare class ReadingListAppElement extends ReadingListAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        unreadItems_: {
            type: ArrayConstructor;
        };
        readItems_: {
            type: ArrayConstructor;
        };
        focusedIndex_: {
            type: NumberConstructor;
        };
        focusedItem_: {
            type: ObjectConstructor;
        };
        currentPageActionButtonState_: {
            type: NumberConstructor;
        };
        buttonRipples: {
            type: BooleanConstructor;
        };
        loadingContent_: {
            type: BooleanConstructor;
        };
        itemSize_: {
            type: NumberConstructor;
        };
        scrollTarget_: {
            type: ObjectConstructor;
        };
        unreadHeader_: {
            type: StringConstructor;
        };
        readHeader_: {
            type: StringConstructor;
        };
        unreadExpanded_: {
            type: BooleanConstructor;
        };
        readExpanded_: {
            type: BooleanConstructor;
        };
        isWebUIBrowser_: {
            type: BooleanConstructor;
        };
    };
    protected accessor unreadItems_: ReadLaterEntry[];
    protected accessor readItems_: ReadLaterEntry[];
    protected accessor focusedIndex_: number;
    protected accessor focusedItem_: HTMLElement | null;
    private accessor currentPageActionButtonState_;
    accessor buttonRipples: boolean;
    protected accessor loadingContent_: boolean;
    protected accessor itemSize_: number;
    protected accessor scrollTarget_: HTMLElement;
    private accessor unreadHeader_;
    private accessor readHeader_;
    private accessor unreadExpanded_;
    private accessor readExpanded_;
    private accessor isWebUIBrowser_;
    private apiProxy_;
    private listenerIds_;
    private visibilityChangedListener_;
    private readingListEventTracker_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    getFocusedIndexForTesting(): number;
    setExpandedForTesting(): void;
    protected onViewportFilled_(): void;
    private updateFocusedItem_;
    protected getAllItems_(): ReadLaterEntry[];
    private createHeaderEntry_;
    protected getExpandButtonAriaLabel_(title: string): string;
    protected getExpandButtonIcon_(title: string): string;
    protected onExpandButtonClick_(e: Event): void;
    /**
     * Fetches the latest reading list entries from the browser.
     */
    private updateReadLaterEntries_;
    private updateReadingListItems_;
    private updateCurrentPageActionButton_;
    protected ariaLabel_(item: ReadLaterEntry): string;
    /**
     * @return The appropriate text for the empty state subheader
     */
    protected getEmptyStateSubheaderText_(): string;
    /**
     * @return The appropriate text for the current page action button
     */
    protected getCurrentPageActionButtonText_(): string;
    /**
     * @return The appropriate cr icon for the current page action button
     */
    protected getCurrentPageActionButtonIcon_(): string;
    /**
     * @return Whether the current page action button should be disabled
     */
    protected getCurrentPageActionButtonDisabled_(): boolean;
    /**
     * @return Whether the current page action button should be in its mark as
     * read state
     */
    private getCurrentPageActionButtonMarkAsRead_;
    protected isReadingListEmpty_(): boolean;
    protected onCurrentPageActionButtonClick_(): void;
    private onMarkedAsRead_;
    private sendTutorialCustomEvent;
    protected onItemKeydown_(e: KeyboardEvent): Promise<void>;
    protected onItemFocus_(e: Event): void;
    protected shouldShowHr_(): boolean;
    protected shouldShowList_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'reading-list-app': ReadingListAppElement;
    }
}
export {};
