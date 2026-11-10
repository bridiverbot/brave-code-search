/**
 * @fileoverview 'selectable-lazy-list' is a wrapper around `lazy-list` that
 * provides list selection and navigation as required by the Tab Search UI.
 * The component expects a `max-height` property to be specified in order to
 * determine how many HTML elements to render initially.
 * The `items`, `itemSize` and `template` properties are passed through to the
 * inner `cr-lazy-list'.
 * `expandedList` is an attribute for showing an extra 16px padding at the
 * bottom of the innner list (tab search desired styling).
 * The `isSelectable()` property should return true when a selectable list
 * item from `items` is passed in, and false otherwise. It defaults to returning
 * true for all items. This is used for navigating through the list in response
 * to key presses as non-selectable items are treated as non-navigable. Note
 * that the list assumes the majority of items are selectable/navigable (as is
 * the case in tab search). Passing in a list with a very large number of
 * non-selectable items may result in reduced performance when navigating.
 * The `selected` property is the index of the selected item in the list, or
 * NO_SELECTION if nothing is selected.
 */
import 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues, TemplateResult } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const NO_SELECTION: number;
export declare const selectorNavigationKeys: readonly string[];
export declare class SelectableLazyListElement<T = any> extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): TemplateResult<1>;
    static get properties(): {
        expandedList: {
            type: BooleanConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
        };
        items: {
            type: ArrayConstructor;
        };
        itemSize: {
            type: NumberConstructor;
        };
        isSelectable: {
            type: ObjectConstructor;
        };
        selected: {
            type: NumberConstructor;
        };
        template: {
            type: ObjectConstructor;
        };
        selectedItem_: {
            type: ObjectConstructor;
        };
    };
    accessor expandedList: boolean;
    accessor maxHeight: number | undefined;
    accessor items: T[];
    accessor itemSize: number;
    accessor template: (item: T, index: number) => TemplateResult;
    accessor selected: number;
    accessor isSelectable: (item: T) => boolean;
    scrollBehavior: ScrollBehavior;
    private accessor selectedItem_;
    private firstSelectableIndex_;
    private lastSelectableIndex_;
    private viewportFillStartTime_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private getListPaddingStyle_;
    private getNextSelectableIndex_;
    private getPreviousSelectableIndex_;
    private getDomItem_;
    private lazyList_;
    private updateSelectedItem_;
    get selectedItem(): Element | null;
    fillCurrentViewport(): Promise<void>;
    /**
     * Create and insert as many DOM items as necessary to ensure all items are
     * rendered.
     */
    ensureAllDomItemsAvailable(): Promise<void>;
    scrollIndexIntoView(index: number): Promise<void>;
    /**
     * @param key Keyboard event key value.
     * @param focusItem Whether to focus the selected item.
     */
    navigate(key: string, focusItem?: boolean): Promise<void>;
    private onFillHeightStart_;
    private onFillHeightEnd_;
    /**
     * Handles key events when list item elements have focus.
     */
    private onKeyDown_;
    /**
     * Ensure the scroll view can fully display a preceding or following list item
     * to the one selected, if existing.
     */
    protected onSelectedChanged_(): Promise<void>;
    resetSelected(): void;
    setSelected(index: number): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'selectable-lazy-list': SelectableLazyListElement;
    }
}
