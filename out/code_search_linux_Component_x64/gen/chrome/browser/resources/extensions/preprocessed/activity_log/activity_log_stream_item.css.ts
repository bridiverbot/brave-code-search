import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrIconsLit} from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getSharedStyle} from '../shared_style.css.js';
import '../shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrIconsLit(),getSharedStyle()], css`:host{border-top:var(--cr-separator-line);display:block;padding:8px var(--cr-section-padding)}cr-expand-button{--cr-expand-button-disabled-display:none;height:calc(var(--cr-section-min-height) - var(--separator-gap))}cr-expand-button[disabled]{opacity:1}#activity-call-and-time{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-time-width)}#activity-type{min-width:var(--activity-type-width)}#activity-name{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-time{min-width:var(--activity-time-width);text-align:end}#expanded-data{display:flex;flex-direction:column;margin-inline-start:16px;max-width:var(--activity-log-call-and-time-width)}#page-url-link{margin-bottom:10px;margin-inline-end:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}#args-list,#web-request-section{display:flex;flex-direction:column;margin-bottom:10px}.expanded-data-heading{font-weight:500}.list-item{display:flex;margin-top:10px}.index{min-width:3em}.arg,#web-request-details{overflow:hidden;overflow-wrap:break-word}#web-request-details{margin-top:10px}`]);
}