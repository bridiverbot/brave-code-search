import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{background-color:var(--color-new-tab-page-module-background);border:none;border-radius:var(--ntp-module-border-radius);box-sizing:border-box;display:block;height:fit-content;overflow:visible;position:relative}#impressionProbe{height:27px;pointer-events:none;position:absolute;width:100%}#moduleElement{align-items:center;background:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-border-radius);display:flex;height:100%;justify-content:center}`]);
}
