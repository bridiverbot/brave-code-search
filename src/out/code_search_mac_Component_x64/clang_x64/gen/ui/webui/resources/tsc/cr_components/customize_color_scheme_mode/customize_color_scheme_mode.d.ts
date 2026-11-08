import './segmented_button.js';
import './segmented_button_option.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ColorSchemeMode } from './customize_color_scheme_mode.mojom-webui.js';
export interface ColorSchemeModeOption {
    id: string;
    value: ColorSchemeMode;
}
export declare const colorSchemeModeOptions: ColorSchemeModeOption[];
declare const CustomizeColorSchemeModeElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class CustomizeColorSchemeModeElement extends CustomizeColorSchemeModeElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentMode_: {
            type: ObjectConstructor;
            state: boolean;
        };
        colorSchemeModeOptions_: {
            type: ArrayConstructor;
            state: boolean;
        };
    };
    protected accessor currentMode_: ColorSchemeModeOption;
    protected accessor colorSchemeModeOptions_: ColorSchemeModeOption[];
    private browserProxy_;
    private setColorSchemeModeListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-color-scheme-mode': CustomizeColorSchemeModeElement;
    }
}
export {};
