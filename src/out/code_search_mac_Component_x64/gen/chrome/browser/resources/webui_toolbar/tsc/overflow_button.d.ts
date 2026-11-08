import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverflowMenuItem } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { OverflowButtonControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
declare const OverflowButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class OverflowButtonElement extends OverflowButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
        getOverflowedMenuItems: {
            type: ObjectConstructor;
        };
    };
    accessor state: OverflowButtonControlState;
    accessor getOverflowedMenuItems: () => OverflowMenuItem[];
    protected getLabel_(): string;
    protected getTooltip_(): string;
    protected onPointerdown_(e: PointerEvent): void;
    protected onClick_(e: PointerEvent): void;
    private handleMenuClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'overflow-button': OverflowButtonElement;
    }
}
export {};
