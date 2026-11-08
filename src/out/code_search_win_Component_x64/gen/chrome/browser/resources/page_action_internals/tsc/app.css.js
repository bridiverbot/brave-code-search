import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getMdSelectLit } from '//resources/cr_elements/md_select_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getMdSelectLit()], css `:host{color:var(--cr-primary-text-color);display:block;margin:0 auto;max-width:800px;padding:var(--cr-section-padding)}.description{color:var(--cr-secondary-text-color);margin-bottom:var(--cr-section-padding)}.form-group{display:flex;flex-direction:column;gap:4px;margin-bottom:12px}cr-input{max-width:400px}.md-select{background-color:var(--cr-card-background-color);color:var(--cr-primary-text-color)}.drawer-config{margin-top:12px;padding-inline-start:16px}.drawer-items-list{display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.drawer-item-row{align-items:center;display:flex;gap:8px}.drawer-item-row cr-input{flex:1}.actions-section{display:flex;gap:12px;margin-top:16px}`]);
}
