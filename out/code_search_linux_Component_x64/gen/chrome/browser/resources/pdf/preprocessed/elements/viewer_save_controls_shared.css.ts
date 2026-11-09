import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{display:contents}cr-action-menu::part(dialog){position:fixed;top:48px}:host([menu-open_]) #save{background-color:var(--active-button-bg);border-radius:50%}`]);
}