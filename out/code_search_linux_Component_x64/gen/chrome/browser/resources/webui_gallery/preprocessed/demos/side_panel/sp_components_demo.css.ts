import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getDemo} from '../demo.css.js';
import {getCss as getMdSelectLit} from '//resources/cr_elements/md_select_lit.css.js';
import {getCss as getSpSharedStyle} from '//webui-gallery/shared/sp_shared_style.css.js';
import '//webui-gallery/shared/sp_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getMdSelectLit(),getSpSharedStyle(),getDemo()], css`#urlCountSlider{width:200px}.side-panel-demo{background:var(--color-side-panel-content-background);border:solid 1px var(--cr-separator-color);box-sizing:border-box;display:flex;flex-direction:column;padding:var(--sp-body-padding) 0;height:500px;width:304px}.side-panel-demo:has(sp-footer){padding-block-end:0}sp-heading{padding:0}#scroller{display:flex;flex-direction:column;height:200px;min-height:0}.card-content{align-items:center;display:flex;height:300px;justify-content:center;width:100%}#emptyStateDemo{align-items:center;gap:0}`]);
}