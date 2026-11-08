import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getThemeHueSliderDialogChromium } from './theme_hue_slider_dialog-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getThemeHueSliderDialogChromium()], css `dialog{margin:var(--hue-slider-margin,0)}`]);
}
