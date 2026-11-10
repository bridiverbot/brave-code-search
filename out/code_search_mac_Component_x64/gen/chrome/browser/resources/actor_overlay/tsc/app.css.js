import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getAppChromium } from './app-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getAppChromium()], css `:host(.background-visible){background:linear-gradient(-50deg,rgba(250,114,80,0.25) 6.99%,rgba(255,24,147,0.2) 45.46%,rgba(167,138,255,0.25) 88.2%);cursor:not-allowed}#border-stroke{background:#ff1893}#border-glow{box-shadow:inset 0 0 35px 12px #ff1893}`]);
}
