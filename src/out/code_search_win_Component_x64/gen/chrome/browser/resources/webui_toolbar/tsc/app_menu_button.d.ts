import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AppMenuControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
declare const AppMenuButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./collapsible_label_button.js").CollapsibleLabelButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export interface AppMenuButtonElement {
    $: {
        button: ToolbarChipButtonElement;
    };
}
export declare class AppMenuButtonElement extends AppMenuButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
        glowUpEnabled: {
            type: BooleanConstructor;
        };
        glowUpActive: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isAnimating_: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    accessor state: AppMenuControlState;
    accessor glowUpEnabled: boolean;
    accessor glowUpActive: boolean;
    get isAnimating(): boolean;
    private browserProxy_;
    private focusRequestHandle_;
    private accessor isAnimating_;
    private animationTimer_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected hasLabel_(): boolean;
    private computeGlowUpActive_;
    private onContextMenuVisibleChanged_;
    private finishAnimation_;
    protected getAnimatedIcon_(): string;
    focus(): void;
    private onFocusRequest_;
    protected onFocusin_(): void;
    protected onFocusout_(): void;
    protected onPointerdown_(e: PointerEvent): void;
    protected onClick_(e: PointerEvent): void;
    private handleMenuClick_;
    protected getTooltip_(): string;
    protected getHighlightClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-menu-button': AppMenuButtonElement;
    }
}
export {};
