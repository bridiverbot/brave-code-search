import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare class ContextualTasksInfoTooltipElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        target: {
            type: ObjectConstructor;
        };
        container: {
            type: ObjectConstructor;
        };
        titleText: {
            type: StringConstructor;
        };
        bodyText: {
            type: StringConstructor;
        };
        closeButtonType: {
            type: StringConstructor;
            reflect: boolean;
        };
        buttonText: {
            type: StringConstructor;
        };
        horizontalAlign: {
            type: StringConstructor;
            reflect: boolean;
        };
        sideMargin: {
            type: NumberConstructor;
        };
        isCoinsEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        linkUrl: {
            type: StringConstructor;
        };
        linkText: {
            type: StringConstructor;
        };
    };
    accessor target: Element | null;
    accessor container: Element | null;
    accessor titleText: string;
    accessor bodyText: string;
    accessor closeButtonType: 'text' | 'icon';
    accessor buttonText: string;
    accessor horizontalAlign: 'left' | 'right';
    accessor sideMargin: number;
    accessor isCoinsEnabled: boolean;
    accessor linkUrl: string;
    accessor linkText: string;
    private tooltipResizeObserver_;
    private tooltipMutationObserver_;
    private eventTracker_;
    private updateScheduled_;
    private get tooltip_();
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    show(): void;
    hide(): void;
    /**
     * Batches position updates into a single animation frame to avoid
     * layout thrashing during typing or fast animations.
     */
    scheduleUpdatePosition(): void;
    updatePosition(): Promise<void>;
    private updateVerticalPosition_;
    private updateLeftAlignedPosition_;
    private updateRightAlignedPosition_;
    private updateCaretCenterOffset_;
    private getTargetShadowHost_;
    private startObserving_;
    private stopObserving_;
    protected onLinkClick_(e: Event): void;
    protected onTooltipCloseClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-info-tooltip': ContextualTasksInfoTooltipElement;
    }
}
export declare class TooltipState {
    private isDismissCountBelowCap;
    private sessionImpressionCap;
    private dismissCallback;
    private showCount_;
    private userDismissed_;
    private isActive_;
    get showCount(): number;
    get userDismissed(): boolean;
    get isActive(): boolean;
    constructor(isDismissCountBelowCap: boolean, sessionImpressionCap: number, dismissCallback: () => void);
    shouldShow(dependencyMet?: boolean): boolean;
    dismiss(): void;
}
