import { css } from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../updater_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;flex-direction:column;flex:1;max-width:800px}h3{font-size:16px;margin:0}.card{background-color:var(--card-background-color);border-radius:8px;display:flex;flex:1;flex-direction:column;gap:8px;padding:16px}ul{margin:0}.spacer{flex:1}.row{display:flex;align-items:center;justify-content:space-between;min-height:2em}.label{font-weight:500}.value{color:var(--cr-secondary-text-color);text-align:end}`]);
}
