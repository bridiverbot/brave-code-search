import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverflowMenuItem } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { PinnedToolbarActionState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
declare const PinnedToolbarActionElementBase: typeof CrLitElement & (new (...args: any[]) => import("./toolbar_action_mixin.js").ToolbarActionMixinInterface<import("/shared/toolbar_ui_api_data_model.mojom-webui.js").PinnedToolbarActionStateMojoType>) & (new (...args: any[]) => import("./overflowable_toolbar_action_mixin.js").OverflowableToolbarActionMixinInterface);
export interface PinnedToolbarActionElement {
    $: {
        button: CrIconButtonElement;
    };
}
export declare class PinnedToolbarActionElement extends PinnedToolbarActionElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    getOverflowMenuItem(): OverflowMenuItem;
    static get properties(): {
        poppedOut: {
            type: BooleanConstructor;
        };
    };
    accessor poppedOut: boolean;
    private iconTable_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private get browserProxy_();
    getElementId(state: PinnedToolbarActionState): string | undefined;
    protected getIronIcon_(): string | undefined;
    protected getIconStyle_(): string | undefined;
    protected onActionClick_(e: PointerEvent): void;
    /**
     * Returns the value of the progress ring's `status` attribute, or undefined
     * if no ring should be drawn.
     */
    protected getProgressRingStatus_(): string | undefined;
    /**
     * Returns the portion of the ring to fill in. The ring's circles declare
     * `pathLength="100"`, so the dash lengths are in percent. Only applies to
     * determinate (downloading) rings; the scanning and dormant dash patterns
     * are set in CSS.
     */
    protected getProgressRingFillStyle_(): string | undefined;
    /**
     * Returns the text to display in the badge, or undefined if no badge should
     * be drawn.
     */
    protected getBadgeText_(): string | undefined;
    protected isDormant_(): boolean;
    private getContextMenuType_;
    protected getTooltip_(): string;
    getMimeType(): string;
    getItemId(): string;
    isDraggable(): boolean;
    moveItemBy(delta: number): void;
    protected onContextmenu_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pinned-toolbar-action': PinnedToolbarActionElement;
    }
}
export {};
