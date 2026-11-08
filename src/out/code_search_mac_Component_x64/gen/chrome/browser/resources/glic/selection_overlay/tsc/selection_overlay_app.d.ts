import '/strings.m.js';
import './glic_selection_overlay.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { BitmapMappedFromTrustedProcess } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
export declare class SelectionOverlayAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    constructor();
    private browserProxy_;
    protected screenshot_: BitmapMappedFromTrustedProcess | null;
    private listenerIds;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onCloseClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'selection-overlay-app': SelectionOverlayAppElement;
    }
}
