import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getItemChromium } from './item-chromium.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getItemChromium()], css `#card{height:calc(var(--extensions-card-height) + 32px)}#card.dev-mode{height:calc(208px + 32px)}.brave-hosted{padding-inline:var(--leo-spacing-s);padding-block:var(--leo-spacing-xs);margin-block:calc(-1 * var(--leo-spacing-s)) var(--leo-spacing-s);border-radius:var(--leo-radius-xs);background-color:var(--leo-color-schemes-surface-variant);color:var(--leo-color-text-tertiary);font:var(--leo-font-components-button-small);width:fit-content}#brave-socket-learn-more{margin-inline-start:var(--leo-spacing-s)}`]);
}
