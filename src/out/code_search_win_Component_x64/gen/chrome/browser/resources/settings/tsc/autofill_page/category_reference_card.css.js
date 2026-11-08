import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `:host{background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);border-radius:var(--cr-card-border-radius);overflow:hidden}hr{border:none;border-top:1px solid var(--cr-separator-color);margin:-1px 20px 0}.chips-container{padding:8px;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px}cr-button{--chip-icon-size_:var(--cr-icon-size);--cr-button-border-color:transparent;--cr-button-text-color:var(--cr-primary-text-color);--cr-button-height:36px;border-radius:4px;display:flex;justify-content:flex-start;font-size:12px}.button-content{display:flex;align-items:center;line-height:normal}cr-button span{font-weight:normal}cr-button cr-icon{width:var(--chip-icon-size_);height:var(--chip-icon-size_);margin-inline-end:10px;--iron-icon-fill-color:var(--color-sys-light-on-surface-variant)}.counter{color:var(--cr-secondary-text-color);margin-inline-start:2px}`]);
}
