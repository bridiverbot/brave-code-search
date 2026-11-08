import { css } from '//resources/lit/v3_0/lit.rollup.js';
import './cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `.search-bubble{--search-bubble-color:#ffeb3b;position:absolute;z-index:1}.search-bubble-innards{align-items:center;background-color:var(--search-bubble-color);border-radius:2px;color:var(--google-grey-900);max-width:100px;min-width:64px;overflow:hidden;padding:4px 10px;text-align:center;text-overflow:ellipsis;white-space:nowrap}.search-bubble-innards::after{background-color:var(--search-bubble-color);content:'';height:10px;left:calc(50% - 5px);position:absolute;top:-5px;transform:rotate(-45deg);width:10px;z-index:-1}.search-bubble-innards.above::after{bottom:-5px;top:auto;transform:rotate(-135deg)}`]);
}
