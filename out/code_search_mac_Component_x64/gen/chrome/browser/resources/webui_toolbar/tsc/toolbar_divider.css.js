import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getOverflowableAction } from './overflowable_action.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getOverflowableAction()], css `:host{align-self:center;background-color:var(--color-toolbar-extension-separator-enabled);border-radius:var(--toolbar-divider-corner-radius);display:block;height:var(--toolbar-divider-height);margin-inline-end:calc(var(--toolbar-divider-spacing) - var(--toolbar-icon-default-margin));margin-inline-start:calc(var(--toolbar-divider-spacing) - var(--toolbar-icon-default-margin));width:var(--toolbar-divider-width)}`]);
}
