import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getDemo } from '../demo.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getDemo()], css `cr-input:first-of-type{margin-block-start:16px}[slot='header']{padding:0 20px 16px}cr-dialog::part(body-container){max-height:300px}#tallBlock{background:var(--google-grey-200);height:800px;margin:16px 0}`]);
}
