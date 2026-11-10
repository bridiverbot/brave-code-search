import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../updater_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`cr-expand-button{min-width:100px;padding:0 12px;width:45%}.raw-event-json{font-family:monospace;white-space:pre-wrap;overflow-wrap:break-word;background-color:var(--code-background-color);color:var(--cr-primary-text-color);padding:4px;margin-top:4px;border-radius:5px}`]);
}