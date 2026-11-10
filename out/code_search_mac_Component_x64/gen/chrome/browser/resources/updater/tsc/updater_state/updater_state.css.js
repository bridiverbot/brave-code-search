import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '../updater_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;gap:16px;flex-wrap:wrap;padding:0 16px}.error-card{display:flex;flex-direction:row;align-items:center;gap:12px;padding:8px;background-color:var(--error-background-color);border:1px solid var(--error-icon-color);border-radius:8px}.error-card cr-icon{--iron-icon-fill-color:var(--error-icon-color)}#no-updater-message{color:var(--cr-secondary-text-color);font-style:italic;padding:8px}`]);
}
