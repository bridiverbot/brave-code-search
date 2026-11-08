import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getThemeColorPickerChromium} from './theme_color_picker-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getThemeColorPickerChromium()], css`cr-theme-color{max-width:var(--cr-theme-color-max-width,none)}#defaultColor{display:none}`]);
}