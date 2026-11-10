import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getAppearanceChromium } from './appearance-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getAppearanceChromium()], css `:host{--hue-slider-margin:0 0 0 76px}`]);
}
