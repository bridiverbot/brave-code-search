import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getCrSpinnerStyleLit} from 'chrome://resources/cr_elements/cr_spinner_style_lit.css.js';
import {getCss as getSettingsColumnedSectionLit} from '../../settings_columned_section_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';
import {getCss as getAutofillSharedLit} from '../autofill_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit(),getAutofillSharedLit(),getCrSpinnerStyleLit(),getSettingsColumnedSectionLit()], css`#addressList .start{display:flex;overflow:hidden}#addressSummary{display:flex;flex:1;overflow:hidden}#noEmailsLabel{padding-inline-start:var(--cr-section-indent-padding)}#emailList{padding-inline-end:var(--cr-section-padding)}#autofillEmailVerificationToggle .separator{margin-inline-end:4px;margin-inline-start:0}#autofillEmailVerificationToggle .toggle-actions-container{align-items:center;display:flex}.dropdown-item.external-link-style{display:flex;justify-content:space-between;align-items:center;width:100%}.dropdown-item.external-link-style cr-icon{--cr-icon-color:var(--cr-secondary-text-color)}.vertical-list .start{display:flex;align-items:center}site-favicon{margin-inline-start:20px;margin-inline-end:16px}#otpFillingLoadingRow{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);padding:0 var(--cr-section-padding)}#otpFillingLoadingLabelWrapper{flex:1;padding:var(--cr-section-vertical-padding) 0;margin-inline-end:20px}#otpFillingLoadingSubLabel a{color:var(--cr-link-color)}`]);
}