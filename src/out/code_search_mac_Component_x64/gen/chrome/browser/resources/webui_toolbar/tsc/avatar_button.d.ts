import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '/shared/icon_from_table.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { HighlightTracker } from '/shared/toolbar_button.js';
import type { AvatarControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableButtonState } from './overflowable_button.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
export interface AvatarButtonElement {
    $: {
        button: ToolbarChipButtonElement;
    };
}
declare const AvatarButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_button.js").OverflowableButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class AvatarButtonElement extends AvatarButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
    };
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    accessor state: AvatarControlState & OverflowableButtonState;
    protected highlightTracker: HighlightTracker;
    protected getTooltip_(): string;
    protected shouldPaintBorder(): boolean;
    protected getButtonClass_(): string;
    protected onClick_(e: PointerEvent): void;
    protected onMouseenter_(): void;
    protected onMouseleave_(): void;
    protected onFocusin_(): void;
    protected onFocusout_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'avatar-button': AvatarButtonElement;
    }
}
export {};
