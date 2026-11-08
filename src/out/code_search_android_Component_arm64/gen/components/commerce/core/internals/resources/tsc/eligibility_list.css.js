import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `.green{color:green;font-weight:bold}.red{color:red}`]);
}
