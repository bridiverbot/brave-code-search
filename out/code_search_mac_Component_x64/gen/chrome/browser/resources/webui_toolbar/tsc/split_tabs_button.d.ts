import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './icons.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { SplitTabsControlState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableButtonState } from './overflowable_button.js';
declare const SplitTabsButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_button.js").OverflowableButton) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class SplitTabsButtonElement extends SplitTabsButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
    };
    accessor state: SplitTabsControlState & OverflowableButtonState;
    private browserProxy_;
    private showMenuListenerHandle_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getIcon(): string;
    protected getLabel(): string;
    protected getTooltip_(): string;
    /**
     * Pointer and mouse clicks should be handled by onPointerdown to trigger
     * immediate response to match native Views behavior.
     * @param e the PointerEvent associated with the click.
     * @returns
     */
    protected onPointerdown(e: PointerEvent): void;
    protected onClick(e: MouseEvent): void;
    private handleAction_;
    protected onContextmenu(e: PointerEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'split-tabs-button': SplitTabsButtonElement;
    }
}
export {};
