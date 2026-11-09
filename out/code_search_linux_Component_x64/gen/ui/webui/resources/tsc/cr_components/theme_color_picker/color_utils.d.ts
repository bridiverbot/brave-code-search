import type { SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import type { BrowserColorVariant } from '//resources/mojo/ui/base/mojom/themes.mojom-webui.js';
export interface Color {
    background: SkColor;
    foreground: SkColor;
    base: SkColor;
}
export declare const EMPTY_COLOR: Color;
export declare const LIGHT_DEFAULT_COLOR: Color;
export declare const DARK_DEFAULT_COLOR: Color;
export declare const LIGHT_BASELINE_BLUE_COLOR: Color;
export declare const DARK_BASELINE_BLUE_COLOR: Color;
export declare const LIGHT_BASELINE_GREY_COLOR: Color;
export declare const DARK_BASELINE_GREY_COLOR: Color;
export declare enum ColorType {
    NONE = 0,
    DEFAULT = 1,
    MAIN = 2,
    CHROME = 3,
    CUSTOM = 4,
    GREY = 5
}
export interface SelectedColor {
    type: ColorType;
    chromeColor?: SkColor;
    variant?: BrowserColorVariant;
}
