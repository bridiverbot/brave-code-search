import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrActionableRowStyleLit} from '//resources/cr_elements/cr_actionable_row_style_lit.css.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getActionLinkLit} from '//resources/cr_elements/action_link_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getCrActionableRowStyleLit(),getActionLinkLit()], css`:host{--cr-icon-button-margin-end:20px;padding:0 var(--cr-section-padding)}:host([elide-label]),:host([elide-label]) #outerRow,:host([elide-label]) #outerRow>div.flex{min-width:0}:host([elide-label]) .label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}div.flex{flex:1}#outerRow{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);width:100%}#outerRow[no-sub-label]{min-height:var(--cr-section-min-height)}#icon{margin-inline-end:var(--cr-icon-button-margin-end)}#labelWrapper{padding:var(--cr-section-vertical-padding) 0}#labelWrapper,::slotted([slot='more-actions']){margin-inline-end:20px !important}cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}a{color:var(--cr-link-color)}`]);
}