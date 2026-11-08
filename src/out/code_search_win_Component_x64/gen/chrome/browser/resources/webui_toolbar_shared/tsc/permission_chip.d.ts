import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PermissionChipDelegate } from './permission_chip_delegate.js';
import type { PermissionChipState } from './toolbar_ui_api_data_model.mojom-webui.js';
declare const PermissionChipElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export interface PermissionChipElement {
    $: {
        message: HTMLSpanElement;
    };
}
export declare class PermissionChipElement extends PermissionChipElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        chipState: {
            type: ObjectConstructor;
        };
        hasDivider: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        isFullyCollapsed_: {
            type: BooleanConstructor;
        };
    };
    accessor delegate: PermissionChipDelegate | null;
    accessor chipState: PermissionChipState | null;
    accessor hasDivider: boolean;
    protected accessor isFullyCollapsed_: boolean;
    private isTracking_;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onChipStateChanged_;
    private updateTracking_;
    private getIdentifier_;
    protected onPointerenter_(): void;
    protected onPointerleave_(): void;
    protected onPointercancel_(): void;
    protected onPointerdown_(e: PointerEvent): void;
    protected onClick_(e: PointerEvent): void;
    private updateColors_;
    protected getIconName_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'permission-chip': PermissionChipElement;
    }
}
export {};
