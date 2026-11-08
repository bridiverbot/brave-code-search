import './toolbar_chip_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '/shared/icons.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ContentSettingImageState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
export interface ContentSettingIconElement {
    $: {
        chip: ToolbarChipButtonElement;
        label: HTMLElement;
    };
}
declare const ContentSettingIconElementBase: typeof CrLitElement & (new (...args: any[]) => import("./toolbar_action_mixin.js").ToolbarActionMixinInterface<import("/shared/toolbar_ui_api_data_model.mojom-webui.js").ContentSettingImageStateMojoType>);
export declare class ContentSettingIconElement extends ContentSettingIconElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shouldShowLabel_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        suppressTransitions_: {
            type: BooleanConstructor;
        };
    };
    protected accessor shouldShowLabel_: boolean;
    protected accessor suppressTransitions_: boolean;
    private browserProxy_;
    private collapseTimerId_;
    disconnectedCallback(): void;
    getElementId(state: ContentSettingImageState): string | undefined;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Processes new incoming state from C++ to determine if the CSS expansion
     * animation should be triggered.
     */
    private handleAnimationTrigger_;
    /**
     * Locks the expansion layout statically if the bubble is actively open, or
     * resumes the collapse sequence if the bubble is dismissed.
     */
    private handleBubbleVisibilityChanged_;
    protected getTooltip_(): string;
    focus(): void;
    protected getIconName_(): string;
    protected getAriaLabel_(): string;
    protected showContentSettingsBubble_(e: PointerEvent): void;
    private clearCollapseTimer_;
    private startCollapseTimer_;
    private isLabelVisibleOrAnimating_;
    protected onClick_(e: PointerEvent): void;
    protected onAuxclick_(e: PointerEvent): void;
    protected onContextmenu_(e: PointerEvent): void;
    protected onPointerdown_(): void;
    protected onPointerup_(): void;
    protected onPointerenter_(): void;
    protected onPointerleave_(): void;
    protected onPointercancel_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'content-setting-icon': ContentSettingIconElement;
    }
}
export {};
