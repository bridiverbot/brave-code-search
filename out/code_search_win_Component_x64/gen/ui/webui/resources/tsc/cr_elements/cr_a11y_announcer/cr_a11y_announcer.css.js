import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}`]);
}
