import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';
import '../../settings_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit(),getMdSelectLit()], css`:host{white-space:nowrap}:host-context([dir=rtl]) cr-input.phone-number-input::part(input){direction:ltr;text-align:end}.address-row{display:flex}.address-column{margin-inline-end:16px;width:calc((var(--cr-default-input-max-width) - 16px) / 2)}#select-row{display:block;outline:none;transform:translate3d(0,0,0)}.md-select{--md-select-width:var(--cr-default-input-max-width)}.long{width:var(--cr-default-input-max-width)}cr-input{--cr-input-error-display:none}cr-input:not(.last-row),cr-textarea,.md-select{margin-bottom:var(--cr-form-field-bottom-spacing)}#dialog::part(body-container){max-height:550px}@media all and (max-height:714px){#dialog::part(body-container){max-height:270px}}#notices{margin-bottom:4px;margin-top:20px;white-space:initial}#validationError{color:var(--google-red-600)}@media (prefers-color-scheme:dark){#validationError{color:var(--google-red-300)}}`]);
}