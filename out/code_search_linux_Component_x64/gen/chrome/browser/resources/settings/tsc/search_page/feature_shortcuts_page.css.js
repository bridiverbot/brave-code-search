import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `.expand-row{display:flex;align-items:flex-start}.expand-row>.text-content-group{margin-inline-end:auto}cr-expand-button.cr-row{align-items:flex-start}cr-expand-button::part(icon){margin-inline-start:0;margin-top:10px}.no-shortcuts-found{padding:8px 20px}`]);
}
