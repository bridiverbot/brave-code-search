import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`.icon-container{width:100%;height:100%;border-radius:50%;display:flex;justify-content:center;align-items:center;position:relative}.icon-container leo-icon{box-sizing:border-box;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center}.icon-container.selected{outline:2px solid var(--leo-color-primary-50);outline-offset:2px}`]);
}