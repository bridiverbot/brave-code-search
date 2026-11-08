import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { UnboundedElement } from './utils.js';
export interface ProfileTooltipElement {
    $: {
        tooltip: UnboundedElement;
    };
}
/**
 * Hover tooltip for the toolbar profile avatar showing the Google Account
 * header, full name, and email. Uses the Unbounded Element API when available
 * so the tooltip can overflow the short toolbar WebView.
 */
export declare class ProfileTooltipElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fullName: {
            type: StringConstructor;
        };
        email: {
            type: StringConstructor;
        };
        open_: {
            type: BooleanConstructor;
        };
        useUnbounded_: {
            type: BooleanConstructor;
        };
    };
    accessor fullName: string;
    accessor email: string;
    protected accessor open_: boolean;
    protected accessor useUnbounded_: boolean;
    private anchor_;
    private showTimer_;
    private hideTimer_;
    get isOpen(): boolean;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Shows the tooltip below `anchor` after the hover delay. Cancels a pending
     * hide, so moving back onto the anchor keeps an open tooltip visible.
     */
    scheduleShow(anchor: HTMLElement): void;
    /** Hides the tooltip after the hide delay and cancels a pending show. */
    scheduleHide(): void;
    /** Shows the tooltip centered below `anchor` immediately. */
    show(anchor: HTMLElement): Promise<void>;
    /** Hides the tooltip immediately and cancels any pending show or hide. */
    hide(unboundedAlreadyDismissed?: boolean): void;
    protected getHeader_(): string;
    protected onBeforetoggle_(e: Event): void;
    private clearShowTimer_;
    private clearHideTimer_;
    private isUnboundedSupported_;
    private position_;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-profile-tooltip': ProfileTooltipElement;
    }
}
