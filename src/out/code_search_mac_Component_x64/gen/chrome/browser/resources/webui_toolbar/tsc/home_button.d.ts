import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PressHandler } from '/shared/toolbar_button.js';
import type { HomeControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableButtonState } from './overflowable_button.js';
declare const HomeButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_button.js").OverflowableButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class HomeButtonElement extends HomeButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
        touchUi: {
            type: BooleanConstructor;
        };
    };
    accessor state: HomeControlState & OverflowableButtonState;
    accessor touchUi: boolean;
    protected pressHandler_: PressHandler;
    protected getLabel_(): string;
    protected getTooltip_(): string;
    private browserProxy_;
    private onLongPress_;
    private onShortPress_;
    protected onClick_(e: PointerEvent): void;
    protected onDragEnter_(e: DragEvent): void;
    protected onDragOver_(e: DragEvent): void;
    protected onDrop_(e: DragEvent): void;
    protected getIronIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-button': HomeButtonElement;
    }
}
export {};
