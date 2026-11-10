import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { PressHandler } from '/shared/toolbar_button.js';
import type { BackForwardButtonState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableButtonState } from './overflowable_button.js';
declare const BackForwardButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_button.js").OverflowableButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export interface BackForwardButtonElement {
    $: {
        button: CrIconButtonElement;
        buttonWrapper: HTMLElement;
    };
}
export declare class BackForwardButtonElement extends BackForwardButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        direction: {
            type: StringConstructor;
        };
        state: {
            type: ObjectConstructor;
        };
        windowIsMaximizedOrFullscreen: {
            type: BooleanConstructor;
        };
        touchUi: {
            type: BooleanConstructor;
        };
        glowUpEnabled: {
            type: BooleanConstructor;
        };
    };
    accessor direction: 'back' | 'forward';
    accessor state: BackForwardButtonState & OverflowableButtonState;
    accessor windowIsMaximizedOrFullscreen: boolean;
    accessor touchUi: boolean;
    accessor glowUpEnabled: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    private manualRippleTriggered_;
    private animating_;
    private browserProxy_;
    protected pressHandler_: PressHandler;
    private get contextMenuType_();
    private onLongPress_;
    private onShortPress_;
    /**
     * Triggers the SMIL icon animation after the DOM has updated with the
     * animated SVG icon.
     */
    private playAnimation_;
    /**
     * Listens to the SMIL animation end event on the animate element.
     * Resets the animating state once the animation finishes to fall back to the
     * static icon.
     */
    private listenToAnimationEnd_;
    protected getAriaLabel_(): string;
    protected getTooltip_(): string;
    protected onPointerdown_(e: PointerEvent): void;
    private clearManualRipple_;
    protected onPointerup_(e: PointerEvent): void;
    protected onPointercancel_(e: PointerEvent): void;
    protected onPointerleave_(): void;
    protected onPointerenter_(): void;
    protected onClick_(e: PointerEvent): void;
    protected getIronIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'back-forward-button': BackForwardButtonElement;
    }
}
export {};
