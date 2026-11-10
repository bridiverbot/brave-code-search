import './ink_brush_selector.js';
import './ink_color_selector.js';
import './ink_size_selector.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const ViewerSidePanelElementBase: typeof CrLitElement & (new (...args: any[]) => import("./ink_annotation_brush_mixin.js").InkAnnotationBrushMixinInterface);
export declare class ViewerSidePanelElement extends ViewerSidePanelElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected shouldShowBrushOptions_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-side-panel': ViewerSidePanelElement;
    }
}
export {};
