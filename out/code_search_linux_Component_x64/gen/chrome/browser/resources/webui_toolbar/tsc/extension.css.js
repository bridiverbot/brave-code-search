import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getToolbarButton } from './toolbar_button.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getToolbarButton()], css `toolbar-chip-button:focus-within{position:relative;z-index:1}:host{interpolate-size:allow-keywords;width:auto}`]);
}
