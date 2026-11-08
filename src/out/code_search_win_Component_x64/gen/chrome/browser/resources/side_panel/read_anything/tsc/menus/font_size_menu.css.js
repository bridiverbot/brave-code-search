import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getToolbarStylesShared } from '../app/toolbar_styles_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getToolbarStylesShared()], css `#font-size-increase{--cr-icon-button-fill-color:var(--color-menu-icon,var(--color-sys-on-surface-subtle))}#font-size-decrease{--cr-icon-button-fill-color:var(--color-menu-icon,var(--color-sys-on-surface-subtle));margin-inline-start:12px}#font-size-reset{margin-inline-end:4px}cr-action-menu::part(dialog){border-radius:var(--cornerRadii-medium-small,12px);color:var(--cr-primary-text-color)}.announce-block{height:1px;overflow:hidden;position:absolute;width:1px}`]);
}
