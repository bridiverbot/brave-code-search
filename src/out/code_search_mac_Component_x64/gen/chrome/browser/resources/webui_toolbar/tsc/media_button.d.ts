import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './icons.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { HighlightTracker, PressHandler } from '/shared/toolbar_button.js';
import type { MediaControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableButtonState } from './overflowable_button.js';
declare const MediaButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_button.js").OverflowableButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class MediaButtonElement extends MediaButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
    };
    accessor state: MediaControlState & OverflowableButtonState;
    protected pressHandler_: PressHandler;
    protected getTooltip_(): string;
    private browserProxy_;
    highlightTracker: HighlightTracker;
    private onLongPress_;
    private onShortPress_;
    protected onClick_(e: PointerEvent): void;
    protected onPointerdown_(e: PointerEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'media-button': MediaButtonElement;
    }
}
export {};
