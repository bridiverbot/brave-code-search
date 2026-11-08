import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit()], css`:host{cursor:pointer}.chip-container{width:30px;height:30px;position:relative;border-radius:50%}.chip-container .chip-content{width:100%;height:100%;border-radius:50%;z-index:1}.chip-container.selected{outline:2px solid var(--leo-color-primary-50);outline-offset:2px}`]);
}