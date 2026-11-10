import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit()], css `:host{align-items:center;display:flex}#promoCard{column-gap:8px;display:flex;flex-direction:row;padding:12px 16px;width:100%}#image{content:url(images/batch_upload_bookmarks_promo.svg);margin:auto}#title{font-size:14px;font-weight:500;line-height:20px;margin:0}#description{font-size:12px;font-weight:400;line-height:16px}#promoContent{display:flex;flex:1;flex-direction:column;justify-content:center;row-gap:4px}#actionButton{margin-bottom:4px;margin-top:8px;width:fit-content}#avatar{border-radius:50%;height:20px;width:20px}@media (prefers-color-scheme:dark){#image{content:url(images/batch_upload_bookmarks_promo_dark.svg)}}`]);
}
