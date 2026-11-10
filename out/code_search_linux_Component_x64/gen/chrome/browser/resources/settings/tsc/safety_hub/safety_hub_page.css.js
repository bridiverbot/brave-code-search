import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `:host{display:flex;flex-direction:column}.box{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow)}.card-container{align-items:stretch;display:flex;gap:16px;justify-content:space-between;width:100%}.card:hover{background-color:var(--cr-hover-background-color);cursor:pointer}.module{height:fit-content;margin-bottom:16px;padding:12px 20px}.section-header{color:var(--cr-primary-text-color);flex:1;font-size:108%;font-weight:400;letter-spacing:.25px;margin-bottom:16px;margin-top:30px;width:100%;user-select:none}.section-header.first{margin-top:0}`]);
}
