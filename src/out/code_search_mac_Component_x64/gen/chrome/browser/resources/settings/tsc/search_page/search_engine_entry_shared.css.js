import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `site-favicon{margin-inline-end:8px;min-width:16px}`]);
}
