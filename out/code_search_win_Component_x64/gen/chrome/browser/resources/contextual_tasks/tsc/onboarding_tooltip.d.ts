import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare class ContextualTasksOnboardingTooltipElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        target: {
            type: ObjectConstructor;
        };
        shouldShow: {
            type: BooleanConstructor;
        };
        isCoinsEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor target: Element | null;
    accessor shouldShow: boolean;
    accessor isCoinsEnabled: boolean;
    private onboardingTooltipIsVisible_;
    private numberOfTimesTooltipShown_;
    private readonly maximumTimesTooltipShown_;
    private isOnboardingTooltipDismissCountBelowCap_;
    private userDismissedTooltip_;
    private tooltipResizeObserver_;
    private tooltipMutationObserver_;
    private tooltipImpressionTimer_;
    private readonly tooltipImpressionDelay_;
    private get tooltip_();
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    show(): void;
    hide(): void;
    updatePosition(): void;
    updateTooltipVisibility(hasToken: boolean, target: Element | null, container?: HTMLElement): void;
    private shouldShowOnboardingTooltip;
    private clearTooltipImpressionTimer_;
    private startObservingTooltipResize_;
    private stopObservingTooltipResize_;
    protected onTooltipCloseClick_(e: Event): void;
    get numberOfTimesTooltipShownForTesting(): number;
    set numberOfTimesTooltipShownForTesting(n: number);
    set userDismissedTooltipForTesting(dismissed: boolean);
    get tooltipResizeObserverForTesting(): ResizeObserver | null;
    protected onHelpLinkClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-onboarding-tooltip': ContextualTasksOnboardingTooltipElement;
    }
}
