import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getDemo } from '../demo.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getDemo()], css `cr-tabs,cr-page-selector{width:100%}.tab-contents{align-items:center;display:flex;height:150px;justify-content:center}`]);
}
