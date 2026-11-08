import '/shared/icon_from_table.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './toolbar_chip_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SecurityChipState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
export interface LocationIconElement {
    $: {
        button: ToolbarChipButtonElement;
    };
}
declare const LocationIconElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("/shared/toolbar_button.js").HelpBubbleAnchor);
export declare class LocationIconElement extends LocationIconElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: ObjectConstructor;
        };
        clickable: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isDangerous: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        hasText: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isTextDangerous: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        glowUpEnabled: {
            type: BooleanConstructor;
        };
        glowUpActive: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        displayText: {
            type: StringConstructor;
        };
    };
    accessor state: SecurityChipState;
    accessor clickable: boolean;
    accessor isDangerous: boolean;
    accessor hasText: boolean;
    accessor isTextDangerous: boolean;
    accessor glowUpEnabled: boolean;
    accessor glowUpActive: boolean;
    accessor displayText: string;
    private dragStartX_;
    private dragStartY_;
    private isDragging_;
    private activePointerId_;
    private eventTracker_;
    private isAnimating_;
    private animationTimer_;
    private isSecureIcon_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected getAccessibilityRole_(): string;
    private computeGlowUpActive_;
    private onContextMenuVisibleChanged_;
    protected onPointerdown_(e: PointerEvent): void;
    protected onContainerPointerMove_(e: PointerEvent): void;
    protected onContainerPointerUp_(e: PointerEvent): void;
    protected onContainerPointerCancel_(): void;
    protected onContainerLostPointerCapture_(): void;
    private finishDrag_;
    protected onClick_(e: PointerEvent): void;
    protected onAuxclick_(e: PointerEvent): void;
    protected onContextmenu_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'location-icon': LocationIconElement;
    }
}
export {};
