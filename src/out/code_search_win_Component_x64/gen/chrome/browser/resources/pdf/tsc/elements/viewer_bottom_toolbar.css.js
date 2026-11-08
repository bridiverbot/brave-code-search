import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
import { getCss as getBottomToolbarShared } from './bottom_toolbar_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared(), getBottomToolbarShared()], css `:host{--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}#vertical-separator{background:rgba(255,255,255,0.3);height:20px;margin-inline:var(--toolbar-item-gap);width:1px}ink-brush-selector{--ink-brush-button-gap:8px;--ink-brush-button-size:32px}`]);
}
