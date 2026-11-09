import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:contents}cr-action-menu::part(dialog){position:fixed;top:48px}:host([menu-open_]) #save{background-color:var(--active-button-bg);border-radius:50%}`]);
}
