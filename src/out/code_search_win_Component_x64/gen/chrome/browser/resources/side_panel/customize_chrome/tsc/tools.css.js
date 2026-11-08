import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getToggleContainerShared } from './toggle_container_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getToggleContainerShared()], css `#showChipsTitle{flex-grow:1}#showChipsToggle{margin-inline-start:16px}`]);
}
