import { css } from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../updater_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;padding:0 16px}.error-card{display:flex;flex-direction:row;align-items:center;gap:12px;padding:8px;background-color:var(--error-background-color);border:1px solid var(--error-icon-color);border-radius:8px}.error-card cr-icon{--iron-icon-fill-color:var(--error-icon-color)}#no-apps-message{color:var(--cr-secondary-text-color);font-style:italic;padding:8px}.card{flex:1;background-color:var(--card-background-color);border-radius:8px;padding:16px}table{border-collapse:collapse;width:100%}th{border-bottom:1px solid var(--google-grey-300);font-weight:500;padding-bottom:8px;text-align:start}@media (prefers-color-scheme:dark){th{border-bottom-color:var(--google-grey-700)}}td{padding-top:8px}.app-name{font-weight:500}.scope,.version{color:var(--cr-secondary-text-color)}`]);
}
