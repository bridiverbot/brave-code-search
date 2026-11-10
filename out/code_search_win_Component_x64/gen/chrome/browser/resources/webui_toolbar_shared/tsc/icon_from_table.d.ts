import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { IconHandle } from './icon_handle.mojom-webui.js';
import type { IconInfo } from './icon_table.js';
export declare class IconFromTableElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Handle to the icon to show here. See toolbar_ui_api.mojom.IconHandle.
         */
        iconHandle: {
            type: ObjectConstructor;
        };
        /**
         * Whether to mirror the icon horizontally in RTL layouts. Does not
         * mirror full-color icons (e.g. favicons).
         */
        flipInRtl: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        /**
         * Internally cached information on the icon.
         */
        iconInfo_: {
            type: ObjectConstructor;
        };
        /**
         * Whether the rendered icon is full-color (e.g. favicons) and should
         * never be mirrored in RTL.
         */
        isFullColor_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    accessor iconHandle: IconHandle;
    accessor flipInRtl: boolean;
    protected accessor isFullColor_: boolean;
    protected accessor iconInfo_: IconInfo;
    private iconTable_;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getIconColorCss_(): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'icon-from-table': IconFromTableElement;
    }
}
