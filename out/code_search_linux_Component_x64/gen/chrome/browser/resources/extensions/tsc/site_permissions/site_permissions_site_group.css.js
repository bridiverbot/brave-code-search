import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSharedStyle } from '../shared_style.css.js';
import '../shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSharedStyle()], css `#etld-row{align-items:center;display:flex;height:var(--cr-section-two-line-min-height)}.site-and-subtext{display:flex;flex-direction:column;flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden}.site-wrapper{display:flex}.site{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.includes-subdomains{color:var(--cr-secondary-text-color);flex-shrink:0;margin-inline-start:4px}.site-subtext{color:var(--cr-secondary-text-color)}#sites-list{margin-inline-start:var(--cr-section-indent-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height)}`]);
}
