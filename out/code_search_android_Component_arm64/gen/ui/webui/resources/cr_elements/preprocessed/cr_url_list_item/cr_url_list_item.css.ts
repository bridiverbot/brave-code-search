import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrUrlListItemChromium} from './cr_url_list_item-chromium.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrUrlListItemChromium()], css`:host([is-folder_]) #iconContainer:not(#z){background:var(--leo-color-container-interactive);border:1px solid var(--leo-color-divider-interactive);border-radius:var(--leo-radius-s);color:var(--leo-color-icon-interactive)}
`]);
}