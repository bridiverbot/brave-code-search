import './searched_label.js';
import './shared_icons.html.js';
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import type { CriticalAction, HistoryEntry } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface HistoryItemElement {
    $: {
        checkbox: CrCheckboxElement;
        icon: HTMLElement;
        link: HTMLElement;
        menuButton: CrIconButtonElement;
        timeAccessed: HTMLElement;
    };
}
declare const HistoryItemElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/focus_row_mixin_lit.js").FocusRowMixinLitInterface);
export declare class HistoryItemElement extends HistoryItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        item: {
            type: ObjectConstructor;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isCardStart: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isCardEnd: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectionNotAllowed_: {
            type: BooleanConstructor;
        };
        hasTimeGap: {
            type: BooleanConstructor;
        };
        index: {
            type: NumberConstructor;
        };
        numberOfItems: {
            type: NumberConstructor;
        };
        searchTerm: {
            type: StringConstructor;
        };
        isExpanded_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isCriticalActionsEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    private isShiftKeyDown_;
    protected accessor selectionNotAllowed_: boolean;
    protected accessor isCriticalActionsEnabled_: boolean;
    private eventTracker_;
    accessor item: HistoryEntry | undefined;
    accessor hasTimeGap: boolean;
    accessor index: number;
    accessor searchTerm: string;
    accessor isCardStart: boolean;
    accessor isCardEnd: boolean;
    accessor numberOfItems: number;
    accessor selected: boolean;
    accessor isExpanded_: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    focusOnMenuButton(): void;
    private onCheckboxKeydown_;
    /**
     * Toggle item selection whenever the checkbox or any non-interactive part
     * of the item is clicked.
     */
    protected onRowClick_(e: MouseEvent): void;
    protected onCollapseClick_(e: Event): void;
    /**
     * This is bound to mouse/keydown instead of click/press because this
     * has to fire before onCheckboxChange_. If we bind it to click/press,
     * it might trigger out of desired order.
     */
    protected onCheckboxMousedown_(e: MouseEvent): void;
    protected onCheckboxSelectKeydown_(e: KeyboardEvent): void;
    protected onCheckboxChange_(): void;
    protected onRowMousedown_(e: MouseEvent): void;
    protected getEntrySummary_(): string;
    /**
     * The first and last rows of a card have a described-by field pointing to
     * the date header, to make sure users know if they have jumped between cards
     * when navigating up or down with the keyboard.
     */
    protected getAriaDescribedByForHeading_(): string;
    /**
     * Actions menu and critical actions expand button are described by the title
     * and domain of the row and may include the date to make sure users know if
     * they have jumped between dates.
     */
    protected getAriaDescribedByForActions_(): string;
    protected shouldShowActorTooltip_(): boolean;
    protected shouldShowActorIconNextToFavicon_(): boolean;
    protected isExpandable_(): boolean;
    protected getExpandIcon_(): string;
    protected onExpandClick_(e: Event): void;
    protected getCriticalActions_(): CriticalAction[];
    protected hasLinkout_(action: CriticalAction): boolean;
    protected getCriticalActionAriaLabel_(action: CriticalAction): string;
    protected onCriticalActionClick_(e: Event): void;
    protected onCriticalActionKeydown_(e: KeyboardEvent): void;
    /**
     * Remove bookmark of current item when bookmark-star is clicked.
     */
    protected onRemoveBookmarkClick_(): void;
    /**
     * Fires a custom event when the menu button is clicked. Sends the details
     * of the history item and where the menu should appear.
     */
    protected onMenuButtonClick_(e: Event): void;
    protected onMenuButtonKeydown_(e: KeyboardEvent): void;
    /**
     * Record metrics when a result is clicked.
     */
    protected onLinkClick_(): void;
    protected onLinkAuxclick_(): void;
    protected onLinkContextmenu_(): void;
    /**
     * Set the favicon image, based on the URL of the history item.
     */
    private itemChanged_;
    protected cardTitle_(): string;
    private addTimeTitle_;
    protected actorIconClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-item': HistoryItemElement;
    }
}
/**
 * @return The title for a page of search results.
 */
export declare function searchResultsTitle(numberOfResults: number, searchTerm: string): string;
export {};
