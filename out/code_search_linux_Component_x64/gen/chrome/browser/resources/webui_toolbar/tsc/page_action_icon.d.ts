import '/shared/icon_from_table.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './toolbar_chip_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageActionState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
export interface PageActionIconElement {
    $: {
        button: ToolbarChipButtonElement;
    };
}
declare const PageActionIconElementBase: typeof CrLitElement & (new (...args: any[]) => import("./toolbar_action_mixin.js").ToolbarActionMixinInterface<import("/shared/toolbar_ui_api_data_model.mojom-webui.js").PageActionStateMojoType>);
export declare class PageActionIconElement extends PageActionIconElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        forceFocusRing: {
            type: BooleanConstructor;
        };
        chipStyleOverride_: {
            type: StringConstructor;
            state: boolean;
        };
        glowUpEnabled: {
            type: BooleanConstructor;
        };
        activeIconAnimation_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    getElementId(state: PageActionState): string | undefined;
    accessor forceFocusRing: boolean;
    protected accessor chipStyleOverride_: string | null;
    accessor glowUpEnabled: boolean;
    private accessor activeIconAnimation_;
    private currentIconName_;
    private animatedIconColor_;
    private browserProxy_;
    private wasShowingChip_;
    private animationEndHandler_;
    private animationElement_;
    focus(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateIconAnimationState_;
    protected shouldShowLabel_(): boolean;
    protected shouldAnimate_(): boolean;
    protected hasTrailingIcon_(): boolean;
    updated(changedProperties: PropertyValues<this>): void;
    protected isIconAnimating_(): boolean;
    protected getAnimatedIcon_(): string;
    protected getAnimatedIconStyle_(): string | undefined;
    private playIconAnimation_;
    /**
     * Listens to the SMIL animation end event on the SVG element and resets
     * the animation state to 'none' once finished, switching back to the static
     * icon.
     */
    private listenToAnimationEnd_;
    /**
     * Safely removes the animation 'endEvent' listener and clears references.
     */
    private cleanupAnimationListener_;
    protected getAriaLabel_(): string;
    protected onClick_(e: PointerEvent): void;
    private getPageActionTrigger_;
    protected onPointerdown_(e: PointerEvent): void;
    protected getTooltip_(): string;
    protected onPointerenter_(): void;
    protected onPointerleave_(): void;
    protected onPointercancel_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-action-icon': PageActionIconElement;
    }
}
export {};
