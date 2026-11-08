import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrIconsLit()], css `:host{width:var(--cr-composebox-entrypoint-width,auto)}#entrypointButton.menu-open::part(entrypoint-button){--cr-hover-background-color:var(--cr-icon-button-hover-background-color);background-color:var(--cr-icon-button-hover-background-color)}`]);
}
