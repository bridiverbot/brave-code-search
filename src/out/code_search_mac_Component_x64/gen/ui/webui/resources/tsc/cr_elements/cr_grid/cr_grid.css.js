import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrGridChromium } from './cr_grid-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrGridChromium()], css `#grid{grid-template-columns:var(--cr-grid-template-columns,repeat(var(--cr-grid-columns),var(--cr-column-width)));width:var(--cr-grid-width-override,var(--cr-grid-width));justify-content:var(--cr-grid-justify-content,revert)}`]);
}
