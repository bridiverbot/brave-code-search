import '../cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface ShowAtConfig {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    anchorAlignmentX?: AnchorAlignment;
    anchorAlignmentY?: AnchorAlignment;
    minX?: number;
    minY?: number;
    maxX?: number;
    maxY?: number;
    noOffset?: boolean;
}
export interface ShowAtPositionConfig {
    top: number;
    left: number;
    width?: number;
    height?: number;
    anchorAlignmentX?: AnchorAlignment;
    anchorAlignmentY?: AnchorAlignment;
    minX?: number;
    minY?: number;
    maxX?: number;
    maxY?: number;
}
export declare enum AnchorAlignment {
    BEFORE_START = -2,
    AFTER_START = -1,
    CENTER = 0,
    BEFORE_END = 1,
    AFTER_END = 2
}
export interface CrActionMenuElement {
    $: {
        contentNode: HTMLSlotElement;
        dialog: HTMLDialogElement;
        wrapper: HTMLElement;
    };
}
export declare class CrActionMenuElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accessibilityLabel: {
            type: StringConstructor;
        };
        autoReposition: {
            type: BooleanConstructor;
        };
        autoCloseOnFocusout: {
            type: BooleanConstructor;
        };
        open: {
            type: BooleanConstructor;
            notify: boolean;
        };
        nonModal: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        roleDescription: {
            type: StringConstructor;
        };
        useUnbounded_: {
            type: BooleanConstructor;
        };
    };
    accessor accessibilityLabel: string | undefined;
    accessor autoReposition: boolean;
    accessor autoCloseOnFocusout: boolean;
    accessor open: boolean;
    accessor roleDescription: string | undefined;
    accessor nonModal: boolean;
    protected accessor useUnbounded_: boolean;
    /**
     * Enables unbounded mode, which renders the menu into an external OS
     * surface, allowing it to extend outside the host window. Unbounded mode is
     * only enabled if the Unbounded Element API is supported in this
     * environment, and cannot be disabled once enabled.
     *
     * Note: This awaits the pending rendering update so that the `unbounded`
     * attribute is applied to the inner <dialog> before it resolves.
     * showUnboundedElement() rejects if that attribute is not already present,
     * so this must be awaited before the menu is first opened.
     *
     * @return Whether unbounded mode is enabled.
     */
    setUnbounded(): Promise<boolean>;
    private boundClose_;
    private resizeObserver_;
    private hasMousemoveListener_;
    private anchorElement_;
    private lastConfig_;
    disconnectedCallback(): void;
    firstUpdated(): void;
    /**
     * Exposing internal <dialog> elements for tests.
     */
    getDialog(): HTMLDialogElement;
    private getUnboundedDialog_;
    private showUnboundedDialog_;
    private hideUnboundedDialog_;
    private handleUnboundedError_;
    private removeListeners_;
    protected onFocusout_(e: FocusEvent): void;
    protected onNativeDialogClose_(e: Event): void;
    private onClick_;
    private onKeyDown_;
    private focusElement_;
    private onMouseover_;
    private updateFocus_;
    close(unboundedAlreadyDismissed?: boolean): void;
    /**
     * Shows the menu anchored to the given element.
     */
    showAt(anchorElement: HTMLElement, config?: ShowAtConfig): void;
    /**
     * Shows the menu anchored to the given box. The anchor alignment is
     * specified as an X and Y alignment which represents a point in the anchor
     * where the menu will align to, which can have the menu either before or
     * after the given point in each axis. Center alignment places the center of
     * the menu in line with the center of the anchor. Coordinates are relative to
     * the top-left of the viewport.
     *
     *            y-start
     *         _____________
     *         |           |
     *         |           |
     *         |   CENTER  |
     * x-start |     x     | x-end
     *         |           |
     *         |anchor box |
     *         |___________|
     *
     *             y-end
     *
     * For example, aligning the menu to the inside of the top-right edge of
     * the anchor, extending towards the bottom-left would use a alignment of
     * (BEFORE_END, AFTER_START), whereas centering the menu below the bottom
     * edge of the anchor would use (CENTER, AFTER_END).
     */
    showAtPosition(config: ShowAtPositionConfig): void;
    private resetStyle_;
    /**
     * Position the dialog using the coordinates in config. Coordinates are
     * relative to the top-left of the viewport when scrolled to (0, 0).
     */
    private positionDialog_;
    protected onSlotchange_(): void;
    /**
     * In unbounded mode, the native OS popup window can be dismissed directly by
     * light dismiss (e.g. clicking outside the host document), firing a
     * Blink 'beforetoggle' ToggleEvent when its presentation state transitions to
     * 'closed'. We listen for this event to close the dialog when the unbounded
     * window gets light dismissed.
     */
    protected onDialogBeforetoggle_(e: Event): void;
    private addListeners_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-action-menu': CrActionMenuElement;
    }
}
