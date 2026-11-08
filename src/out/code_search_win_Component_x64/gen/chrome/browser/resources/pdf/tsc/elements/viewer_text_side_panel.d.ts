import './text_styles_selector.js';
import './text_alignment_selector.js';
import './ink_color_selector.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const ViewerTextSidePanelElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("./ink_text_observer_mixin.js").InkTextObserverMixinInterface) & (new (...args: any[]) => import("./ink_annotation_text_mixin.js").InkAnnotationTextMixinInterface);
export declare class ViewerTextSidePanelElement extends ViewerTextSidePanelElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected onTypefaceChange_(e: Event): void;
    protected onSizeChange_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-text-side-panel': ViewerTextSidePanelElement;
    }
}
export {};
