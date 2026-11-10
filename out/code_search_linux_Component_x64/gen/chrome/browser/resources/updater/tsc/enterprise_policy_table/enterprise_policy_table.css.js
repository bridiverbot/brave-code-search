import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '../updater_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:block;padding:0 16px}.no-policies{font-style:italic;padding:8px}.section{display:flex;flex-direction:column}.section+.section{margin-top:16px}h3{font-weight:500;margin:0 0 8px 0}`]);
}
