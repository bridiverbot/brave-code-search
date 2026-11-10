import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getMdSelectLit} from 'chrome://resources/cr_elements/md_select_lit.css.js';
import {getCss as getSearchHighlightStyleLit} from 'chrome://resources/cr_elements/search_highlight_style_lit.css.js';
import {getCss as getPrintPreviewShared} from './print_preview_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrintPreviewShared(),getMdSelectLit(),getSearchHighlightStyleLit(),getCrHiddenStyleLit()], css`:host{display:flex;min-height:54px;position:relative}:host>*{overflow:hidden;text-overflow:ellipsis;vertical-align:middle}.label,.value{align-self:center;color:var(--cr-primary-text-color);overflow:hidden}.label{flex:1;min-width:96px;opacity:0.87}.value{flex:0;min-width:239px;text-overflow:ellipsis;white-space:nowrap}.value>*{display:flex;margin-inline-start:10px}cr-input{width:239px;--cr-input-error-display:none}select.md-select{font-size:1em}`]);
}