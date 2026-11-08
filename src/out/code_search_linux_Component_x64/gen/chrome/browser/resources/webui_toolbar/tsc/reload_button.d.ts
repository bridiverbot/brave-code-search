import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { TimerHelper } from '/shared/timer_helper.js';
import { PressHandler } from '/shared/toolbar_button.js';
import type { ReloadControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
declare const ReloadButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export interface ReloadButtonElement {
    $: {
        button: CrIconButtonElement;
    };
}
export declare class ReloadButtonElement extends ReloadButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accName_: {
            type: StringConstructor;
        };
        state: {
            type: ObjectConstructor;
        };
        tooltip: {
            type: StringConstructor;
            reflect: boolean;
        };
        showStopIcon: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isDisabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        touchUi: {
            type: BooleanConstructor;
        };
        glowUpEnabled: {
            type: BooleanConstructor;
        };
    };
    protected accessor state: ReloadControlState;
    protected accessor tooltip: string;
    protected accessor accName_: string;
    protected pressHandler_: PressHandler;
    protected accessor showStopIcon: boolean;
    protected accessor isDisabled: boolean;
    accessor touchUi: boolean;
    accessor glowUpEnabled: boolean;
    private animateTransitions_;
    private activeAnimation_;
    private pendingAnimation_;
    protected doubleClickReloadIconTimer_: TimerHelper;
    protected modeSwitchIntervalMs_: number;
    private disableStopIconTimer_;
    private browserProxy_;
    constructor();
    private boundOnPointerleave_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onLongPress_;
    private onShortPress_;
    /**
     * Constructs the interaction metadata from the mouse/pointer event.
     * Reconstructs the relative timestamp offset and determines the input
     * modality.
     */
    private getReloadMetadata_;
    protected onClick_(e: PointerEvent): void;
    private updateState_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private updateTooltip_;
    protected getIronIcon_(): string;
    private playAnimation_;
    /**
     * Listens to the SMIL animation end event on the SVG element.
     * Resets animation states once the animation finishes.
     * @param isStart True if we are listening to the 'start' (Reload->Stop)
     *     animation.
     */
    private listenToAnimationEnd_;
    /**
     * Called when the 'start' animation (Reload -> Stop transition) completes.
     * Handles starting the pending 'end' animation if the load has already
     * finished, or resetting the animation state.
     */
    private onStartAnimationEnd_;
    private onEndAnimationEnd_;
    /**
     * See `onPointerup_` for the click event handling logic.
     * @param e the PointerEvent associated with the click.
     * @returns
     */
    protected onPointerdown_(e: PointerEvent): void;
    /**
     * Handles pointer release. Records metrics and delegates to PressHandler
     * to evaluate whether the interaction was a short or long press.
     * If it's from the right mouse click, it's not handled from the Javascript.
     * @param e the PointerEvent associated with the click.
     * @returns
     */
    protected onPointerup_(e: PointerEvent): void;
    /**
     * Handles pointer leave. If the context menu is not showing, it triggers an
     * immediate update to transition back to the reload state if loading has
     * finished, bypassing the hover protection delay. This matches the C++ Views
     * `OnMouseExited` behavior.
     */
    private onPointerleave_;
}
declare global {
    interface HTMLElementTagNameMap {
        'reload-button': ReloadButtonElement;
    }
}
export {};
