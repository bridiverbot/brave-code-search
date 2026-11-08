import './ink_color_selector.js';
import './text_alignment_selector.js';
import './text_styles_selector.js';
import './viewer_bottom_toolbar_dropdown.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TextAttributes } from '../constants.js';
import { TextAlignment } from '../constants.js';
import type { ViewerBottomToolbarDropdownElement } from './viewer_bottom_toolbar_dropdown.js';
declare const ViewerTextBottomToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("./ink_text_observer_mixin.js").InkTextObserverMixinInterface) & (new (...args: any[]) => import("./ink_annotation_text_mixin.js").InkAnnotationTextMixinInterface);
export interface ViewerTextBottomToolbarElement {
    $: {
        alignment: ViewerBottomToolbarDropdownElement;
        color: ViewerBottomToolbarDropdownElement;
    };
}
export declare class ViewerTextBottomToolbarElement extends ViewerTextBottomToolbarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentAlignment_: {
            type: StringConstructor;
        };
    };
    protected accessor currentAlignment_: TextAlignment;
    updated(changedProperties: PropertyValues<this>): void;
    protected onTypefaceChange_(e: Event): void;
    protected onSizeChange_(e: Event): void;
    protected getAlignmentIcon_(): string;
    onTextAttributesChanged(attributes: TextAttributes): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-text-bottom-toolbar': ViewerTextBottomToolbarElement;
    }
}
export {};
