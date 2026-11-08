import './theme_hue_slider_dialog.js';
import './theme_color.js';
import '//resources/cr_elements/cr_grid/cr_grid.js';
import '//resources/cr_components/managed_dialog/managed_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import type { BrowserColorVariant } from '//resources/mojo/ui/base/mojom/themes.mojom-webui.js';
import type { Color, SelectedColor } from './color_utils.js';
import type { ThemeColorElement } from './theme_color.js';
import type { ChromeColor } from './theme_color_picker.mojom-webui.js';
import type { ThemeHueSliderDialogElement } from './theme_hue_slider_dialog.js';
declare const ThemeColorPickerElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface ThemeColorPickerElement {
    $: {
        customColor: ThemeColorElement;
        colorPickerIcon: HTMLElement;
        hueSlider: ThemeHueSliderDialogElement;
    };
}
export declare class ThemeColorPickerElement extends ThemeColorPickerElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        defaultColor_: {
            type: ObjectConstructor;
            state: boolean;
        };
        greyDefaultColor_: {
            type: ObjectConstructor;
            state: boolean;
        };
        colors_: {
            type: ArrayConstructor;
            state: boolean;
        };
        theme_: {
            type: ObjectConstructor;
            state: boolean;
        };
        selectedColor_: {
            type: ObjectConstructor;
            state: boolean;
        };
        isDefaultColorSelected_: {
            type: BooleanConstructor;
            state: boolean;
        };
        isGreyDefaultColorSelected_: {
            type: BooleanConstructor;
            state: boolean;
        };
        isCustomColorSelected_: {
            type: BooleanConstructor;
            state: boolean;
        };
        customColor_: {
            type: ObjectConstructor;
            state: boolean;
        };
        showManagedDialog_: {
            type: BooleanConstructor;
            state: boolean;
        };
        columns: {
            type: NumberConstructor;
        };
    };
    protected accessor defaultColor_: Color;
    protected accessor greyDefaultColor_: Color;
    protected accessor colors_: ChromeColor[];
    private accessor theme_;
    protected accessor selectedColor_: SelectedColor;
    protected accessor isDefaultColorSelected_: boolean;
    protected accessor isGreyDefaultColorSelected_: boolean;
    protected accessor isCustomColorSelected_: boolean;
    protected accessor customColor_: Color;
    private setThemeListenerId_;
    protected accessor showManagedDialog_: boolean;
    accessor columns: number;
    private handler_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private computeDefaultColor_;
    private computeGreyDefaultColor_;
    private computeSelectedColor_;
    private computeIsDefaultColorSelected_;
    private computeIsGreyDefaultColorSelected_;
    private computeIsCustomColorSelected_;
    protected isChromeColorSelected_(color: SkColor, variant: BrowserColorVariant): boolean;
    protected chromeColorTabIndex_(color: SkColor, variant: BrowserColorVariant): string;
    protected tabIndex_(selected: boolean): string;
    protected onDefaultColorClick_(): void;
    protected onGreyDefaultColorClick_(): void;
    protected onChromeColorClick_(e: Event): void;
    protected onCustomColorClick_(): void;
    protected onSelectedHueChanged_(): void;
    private updateCustomColor_;
    private updateColors_;
    protected onManagedDialogClose_(): void;
    private handleClickForManagedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-theme-color-picker': ThemeColorPickerElement;
    }
}
export {};
