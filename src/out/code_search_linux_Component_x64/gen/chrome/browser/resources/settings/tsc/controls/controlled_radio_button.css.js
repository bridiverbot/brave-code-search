import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrRadioButtonStyleLit } from 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrRadioButtonStyleLit()], css `:host([disabled]){opacity:1}:host([disabled]) .disc-wrapper,:host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}:host-context([settings-refresh-2026]){align-content:flex-start;column-gap:10px;flex-wrap:wrap;row-gap:16px;#label{font-weight:500}#labelWrapper{align-items:center;display:flex;flex:1;justify-content:space-between}slot[name='additional-content'],::slotted([slot='additional-content']){display:block;flex-basis:100%}#overlay{display:none !important}}cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing);pointer-events:all}`]);
}
