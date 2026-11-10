/**
 * @fileoverview A bubble for displaying in-product help. These are created
 * dynamically by HelpBubbleMixin, and their API should be considered an
 * implementation detail and subject to change (you should not add them to your
 * components directly).
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './help_bubble_icons.html.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { InsetsF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import type { HelpBubbleButtonParams, Progress } from './help_bubble.mojom-webui.js';
import { HelpBubbleArrowPosition } from './help_bubble.mojom-webui.js';
export declare const HELP_BUBBLE_DISMISSED_EVENT = "help-bubble-dismissed";
export declare const HELP_BUBBLE_TIMED_OUT_EVENT = "help-bubble-timed-out";
export declare const HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS: ScrollIntoViewOptions;
export type HelpBubbleDismissedEvent = CustomEvent<{
    nativeId: string;
    secondaryId: string;
    fromActionButton: boolean;
    buttonIndex?: number;
}>;
export type HelpBubbleTimedOutEvent = CustomEvent<{
    nativeId: string;
    secondaryId: string;
}>;
export interface HelpBubbleElement {
    $: {
        arrow: HTMLElement;
        bodyIcon: HTMLElement;
        buttons: HTMLElement;
        close: CrIconButtonElement;
        main: HTMLElement;
        mainBody: HTMLElement;
        progress: HTMLElement;
        title: HTMLElement;
        topBody: HTMLElement;
        topContainer: HTMLElement;
    };
}
export declare class HelpBubbleElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        nativeId: {
            type: StringConstructor;
            reflect: boolean;
        };
        secondaryId: {
            type: StringConstructor;
            reflect: boolean;
        };
        position: {
            type: NumberConstructor;
            reflect: boolean;
        };
        bodyIconName: {
            type: StringConstructor;
        };
        bodyIconAltText: {
            type: StringConstructor;
        };
        progress: {
            type: ObjectConstructor;
        };
        titleText: {
            type: StringConstructor;
        };
        bodyText: {
            type: StringConstructor;
        };
        buttons: {
            type: ArrayConstructor;
        };
        sortedButtons: {
            type: ArrayConstructor;
        };
        closeButtonAltText: {
            type: StringConstructor;
        };
        closeButtonTabIndex: {
            type: NumberConstructor;
        };
        progressData_: {
            type: ArrayConstructor;
            state: boolean;
        };
    };
    accessor nativeId: string;
    accessor secondaryId: string;
    accessor bodyText: string;
    accessor titleText: string;
    accessor closeButtonAltText: string;
    accessor closeButtonTabIndex: number;
    accessor position: HelpBubbleArrowPosition;
    accessor buttons: HelpBubbleButtonParams[];
    accessor sortedButtons: HelpBubbleButtonParams[];
    accessor progress: Progress | null;
    accessor bodyIconName: string | null;
    accessor bodyIconAltText: string;
    timeoutMs: number | null;
    timeoutTimerId: number | null;
    debouncedUpdate: (() => void) | null;
    padding: InsetsF;
    fixed: boolean;
    focusAnchor: boolean;
    private buttonListObserver_;
    /**
     * HTMLElement corresponding to |this.nativeId|.
     */
    private anchorElement_;
    /**
     * Backing data for the dom-repeat that generates progress indicators.
     * The elements are placeholders only.
     */
    protected accessor progressData_: boolean[];
    /**
     * Watches the offsetParent for resize events, allowing the bubble to be
     * repositioned in response. Useful for when the content around a help bubble
     * target can be filtered/expanded/repositioned.
     */
    private resizeObserver_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Shows the bubble.
     */
    show(anchorElement: HTMLElement): void;
    /**
     * Hides the bubble, clears out its contents, and ensures that screen readers
     * ignore it while hidden.
     *
     * TODO(dfried): We are moving towards formalizing help bubbles as single-use;
     * in which case most of this tear-down logic can be removed since the entire
     * bubble will go away on hide.
     */
    hide(): void;
    /**
     * Retrieves the current anchor element, if set and the bubble is showing,
     * otherwise null.
     */
    getAnchorElement(): HTMLElement | null;
    /**
     * Returns the button with the given `buttonIndex`, or null if not found.
     */
    getButtonForTesting(buttonIndex: number): CrButtonElement | null;
    /**
     * Focuses a button in the bubble.
     */
    focus(): void;
    /**
     * Returns whether the default button is leading (true on Windows) vs trailing
     * (all other platforms).
     */
    static isDefaultButtonLeading(): boolean;
    protected onCloseButtonClick_(): void;
    private dismiss_;
    /**
     * Handles ESC keypress (dismiss bubble) and prevents it from propagating up
     * to parent elements.
     */
    protected onKeydown_(e: KeyboardEvent): void;
    /**
     * Prevent event propagation. Attach to any event that should not bubble up
     * out of the help bubble.
     */
    protected onHelpBubbleClick_(e: Event): void;
    protected getProgressClass_(index: number): string;
    protected shouldShowTitleInTopContainer_(): boolean;
    protected shouldShowBodyInTopContainer_(): boolean;
    protected shouldShowBodyInMain_(): boolean;
    protected shouldShowBodyIcon_(): boolean;
    protected onButtonClick_(e: MouseEvent): void;
    protected getButtonId_(item: HelpBubbleButtonParams): string;
    protected getButtonClass_(isDefault: boolean): string;
    protected getButtonTabIndex_(item: HelpBubbleButtonParams): number;
    private buttonSortFunc_;
    /**
     * Determine classes that describe the arrow position relative to the
     * HelpBubble
     */
    protected getArrowClass_(): string;
    /**
     * Sets the bubble position, as relative to that of the anchor element and
     * |this.position|.
     */
    updatePosition(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'help-bubble': HelpBubbleElement;
    }
    interface HTMLElementEventMap {
        [HELP_BUBBLE_DISMISSED_EVENT]: HelpBubbleDismissedEvent;
        [HELP_BUBBLE_TIMED_OUT_EVENT]: HelpBubbleTimedOutEvent;
    }
}
