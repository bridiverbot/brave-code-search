import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getSpSharedStyle } from 'chrome://read-later.top-chrome/shared/sp_shared_style.css.js';
import { getCss as getCrHiddenStyleLit } from 'chrome://resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit(), getSpSharedStyle()], css `#content{display:flex;flex-direction:column;height:100vh}.sp-scroller{flex:1;min-height:0}cr-icon-button{--cr-icon-button-icon-size:var(--mwb-icon-size);--cr-icon-button-size:calc(var(--mwb-icon-size) * 1.5)}reading-list-item:first-of-type:last-of-type{transition:background 100ms}#readingListList{margin-top:var(--sp-body-padding)}.sp-card sp-heading{margin-top:var(--sp-card-gap);&:first-child{margin-top:0}}`]);
}
