import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
import { getCss as getSidePanelShared } from './side_panel_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPdfShared(), getSidePanelShared()], css ``]);
}
