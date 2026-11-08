import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import './selectable_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TextAttributes } from '../constants.js';
import { TextAlignment } from '../constants.js';
declare const TextAlignmentSelectorElementBase: typeof CrLitElement & (new (...args: any[]) => import("./ink_text_observer_mixin.js").InkTextObserverMixinInterface);
export declare class TextAlignmentSelectorElement extends TextAlignmentSelectorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentAlignment_: {
            type: StringConstructor;
        };
    };
    protected accessor currentAlignment_: TextAlignment;
    focus(): void;
    protected onAlignmentClick_(e: Event): void;
    protected onAlignmentKeydown_(e: KeyboardEvent): void;
    private setAlignment_;
    onTextAttributesChanged(attributes: TextAttributes): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'text-alignment-selector': TextAlignmentSelectorElement;
    }
}
export {};
