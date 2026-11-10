import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_slider/cr_slider.js';
import type { CrSliderElement } from '//resources/cr_elements/cr_slider/cr_slider.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface ThemeHueSliderDialogElement {
    $: {
        contentsWrapper: HTMLElement;
        dialog: HTMLDialogElement;
        slider: CrSliderElement;
    };
}
declare const ThemeHueSliderDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ThemeHueSliderDialogElement extends ThemeHueSliderDialogElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hueGradient_: {
            type: StringConstructor;
            state: boolean;
        };
        maxHue_: {
            type: NumberConstructor;
            state: boolean;
        };
        minHue_: {
            type: NumberConstructor;
            state: boolean;
        };
        selectedHue: {
            type: NumberConstructor;
        };
        knobHue_: {
            type: NumberConstructor;
            state: boolean;
        };
    };
    protected accessor hueGradient_: string;
    protected accessor maxHue_: number;
    protected accessor minHue_: number;
    accessor selectedHue: number;
    protected accessor knobHue_: number;
    private eventTracker_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onCrSliderValueChanged_(): void;
    showAt(anchor: HTMLElement): void;
    hide(): void;
    private onPointerdown_;
    protected onSliderKeyup_(): void;
    protected onSliderPointerup_(): void;
    protected onHideClick_(): void;
    private updateSelectedHueValue_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-theme-hue-slider-dialog': ThemeHueSliderDialogElement;
    }
}
export {};
