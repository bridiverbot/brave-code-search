import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `h1{margin-bottom:20px;margin-top:0;padding-top:40px;text-align:center}cr-tabs{margin:20px auto;max-width:800px}@media (prefers-color-scheme:dark){:host{color:var(--google-grey-200)}}.text{text-align:center;font-size:1.2rem;color:var(--cr-secondary-text-color)}`]);
}
