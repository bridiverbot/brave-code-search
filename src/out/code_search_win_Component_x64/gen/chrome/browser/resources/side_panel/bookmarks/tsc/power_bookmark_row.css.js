import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `:host{display:block}:host([drop-position='into']){background:var(--cr-hover-background-color)}power-bookmark-row-item.expandable-folder{--cr-expand-button-icon-size:16px;--cr-expand-button-size:24px}sp-heading{margin:8px 14px}`]);
}
