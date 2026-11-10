import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getDemo } from '../demo.css.js';
import { getCss as getCrScrollableLit } from '//resources/cr_elements/cr_scrollable_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getDemo(), getCrScrollableLit()], css `#container{max-height:300px;overflow:auto;position:relative;width:100%}.item{padding:16px;text-align:center}.item:focus{background-color:var(--cr-focused-item-color);outline:none}#sliderContainer{align-items:center;display:flex;gap:12px}#itemsLengthSlider{width:200px}#cr-scrollable-demos{flex-direction:row}.cr-scrollable{box-sizing:border-box;width:100%;height:300px;padding:12px}.block{height:500px}.label{position:sticky;top:0}`]);
}
