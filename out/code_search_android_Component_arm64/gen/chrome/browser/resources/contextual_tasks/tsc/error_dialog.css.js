import { css } from '//resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{--cr-dialog-width:300px;--cr-dialog-title-font-size:large;--cr-dialog-title-slot-padding-end:24px;--cr-dialog-title-slot-padding-start:24px;--cr-dialog-title-slot-padding-bottom:16px;--cr-dialog-title-slot-padding-top:24px;--cr-dialog-body-padding-horizontal:24px;--cr-dialog-button-container-padding-bottom:24px;--cr-dialog-button-container-padding-end:24px;--cr-dialog-button-container-padding-top:24px;--cr-dialog-button-container-padding-horizontal:24px}cr-dialog::backdrop{background-color:rgba(0,0,0,0.6)}#dialog::part(dialog){box-shadow:none}#dialog::part(button-container){width:100%}cr-button{width:100%}`]);
}
