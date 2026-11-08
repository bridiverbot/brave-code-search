import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{display:flex;flex-direction:column}.dialog-title{color:var(--cr-primary-text-color);font-size:15px;font-weight:normal;line-height:22px;margin:0;padding-block-end:16px;padding-block-start:16px}.website-column{align-items:center;display:flex;flex:1}.website-column .text-elide{color:var(--cr-primary-text-color)}.username-column{display:flex;flex:1;margin:0 8px}.password-column{align-items:center;display:flex;flex:1}.password-field{background-color:transparent;border:none;flex:1;height:20px;width:0}.elide-left{direction:rtl}.elide-left>span{direction:ltr;unicode-bidi:bidi-override}site-favicon{margin-inline-end:16px;min-width:16px}input.password-input,cr-input.password-input::part(input),#leakedPassword{font-family:'Consolas',monospace}`]);
}
