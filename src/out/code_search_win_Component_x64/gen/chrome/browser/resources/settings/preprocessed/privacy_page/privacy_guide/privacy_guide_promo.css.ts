import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit()], css`#wrapper{align-items:center;display:flex;justify-content:space-between;padding:0 20px}#controlsColumn{margin-top:4px}h2{color:var(--cr-primary-text-color);font-size:22px;padding-top:0}#title{font-weight:400}#bodyText{padding-block-end:16px}#startButton{margin-bottom:4px;margin-inline-end:16px}`]);
}