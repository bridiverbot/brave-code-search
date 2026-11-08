import './ink_brush_selector.js';
import './ink_color_selector.js';
import './ink_size_selector.js';
import './viewer_bottom_toolbar_dropdown.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const ViewerBottomToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("./ink_annotation_brush_mixin.js").InkAnnotationBrushMixinInterface);
export declare class ViewerBottomToolbarElement extends ViewerBottomToolbarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        strings: {
            type: ObjectConstructor;
        };
    };
    accessor strings: {
        [key: string]: string;
    } | undefined;
    updated(changedProperties: PropertyValues<this>): void;
    protected getSizeIcon_(): string;
    protected getSizeTitle_(): string;
    protected getColorTitle_(): string;
    private onCurrentColorUpdated_;
    protected shouldShowBrushOptions_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-bottom-toolbar': ViewerBottomToolbarElement;
    }
}
export {};
