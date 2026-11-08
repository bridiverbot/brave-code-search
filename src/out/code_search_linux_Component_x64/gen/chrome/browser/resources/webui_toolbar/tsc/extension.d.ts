import './toolbar_chip_button.js';
import '/shared/icon_from_table.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ExtensionActionInfo } from '/shared/extensions_bar_data_model.mojom-webui.js';
import type { OverflowMenuItem } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { ToolbarChipButtonElement } from './toolbar_chip_button.js';
declare const ExtensionElementBase: typeof CrLitElement & (new (...args: any[]) => import("./toolbar_action_mixin.js").ToolbarActionMixinInterface<import("/shared/extensions_bar_data_model.mojom-webui.js").ExtensionActionInfoMojoType>) & (new (...args: any[]) => import("./overflowable_toolbar_action_mixin.js").OverflowableToolbarActionMixinInterface);
export interface ExtensionElement {
    $: {
        button: ToolbarChipButtonElement;
    };
}
export declare class ExtensionElement extends ExtensionElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private browserProxy_;
    private isPinnedByDefaultIphAnchorRegistered_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private updatePinnedByDefaultIphAnchorRegistration_;
    getOverflowMenuItem(): OverflowMenuItem | null;
    getElementId(state: ExtensionActionInfo): string;
    getSecondaryElementId(): string;
    protected onClick_(e: PointerEvent): void;
    protected onContextmenu_(e: Event): void;
    getMimeType(): string;
    getItemId(): string;
    isDraggable(): boolean;
    moveItemBy(delta: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'webui-toolbar-extension': ExtensionElement;
    }
}
export {};
