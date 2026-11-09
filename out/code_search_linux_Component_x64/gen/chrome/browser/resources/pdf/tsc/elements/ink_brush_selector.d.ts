import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import './selectable_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AnnotationBrushType } from '../constants.js';
export declare const BRUSH_TYPES: AnnotationBrushType[];
export declare class InkBrushSelectorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentType: {
            notify: boolean;
            type: StringConstructor;
        };
    };
    accessor currentType: AnnotationBrushType;
    protected onSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected getIcon_(type: AnnotationBrushType): string;
    protected getLabel_(type: AnnotationBrushType): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'ink-brush-selector': InkBrushSelectorElement;
    }
}
