import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getBottomToolbarShared } from './bottom_toolbar_shared.css.js';
import { getCss as getPdfShared } from './pdf_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getBottomToolbarShared(), getPdfShared()], css ``]);
}
