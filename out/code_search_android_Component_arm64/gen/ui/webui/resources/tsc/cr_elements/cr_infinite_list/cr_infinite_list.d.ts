/**
 * @fileoverview 'cr-infinite-list' is a thin wrapper around 'cr-lazy-list' that
 * emulates some of the behavior of 'iron-list'.
 * In particular, 'cr-infinite-list':
 *   - Tracks a `focusedIndex`, and uses this to pass a `tabindex` to the
 *     template method.
 *   - If list items change while focus is within the element at
 *     `focusedIndex`, 'cr-infinite-list' will restore focus once rendering is
 *     complete. Before restoring focus, a restore-list-focus event is fired.
 *     Clients using FocusRowMixinLit should reset listBlurred = false when
 *     this event is fired so the mixin correctly handles the following focus()
 *     call.
 *   - Implements the arrow key up/down navigation behavior that was provided
 *     by 'iron-list'.
 */
import '../cr_lazy_list/cr_lazy_list.js';
import type { PropertyValues, TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class CrInfiniteListElement<T> extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): TemplateResult<1>;
    static get properties(): {
        chunkSize: {
            type: NumberConstructor;
        };
        scrollOffset: {
            type: NumberConstructor;
        };
        scrollTarget: {
            type: ObjectConstructor;
        };
        usingDefaultScrollTarget: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
        };
        focusedIndex: {
            type: NumberConstructor;
        };
        itemSize: {
            type: NumberConstructor;
        };
        template: {
            type: ObjectConstructor;
        };
    };
    accessor chunkSize: number;
    accessor scrollOffset: number;
    accessor scrollTarget: HTMLElement;
    accessor usingDefaultScrollTarget: boolean;
    accessor items: T[];
    accessor itemSize: number | undefined;
    accessor template: (item: T, index: number, tabindex: number) => TemplateResult;
    accessor focusedIndex: number;
    private restoreFocus_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private isFocusWithinList_;
    fillCurrentViewport(): Promise<void>;
    ensureItemRendered(index: number): Promise<HTMLElement>;
    private onViewportFilled_;
    private onFocusIn_;
    /**
     * Handles key events when list item elements have focus.
     */
    private onKeyDown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-infinite-list': CrInfiniteListElement<unknown>;
    }
}
