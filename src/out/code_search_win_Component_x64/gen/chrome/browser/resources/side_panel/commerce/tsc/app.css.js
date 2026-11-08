import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import { getCss as getCrIconsLit } from '//resources/cr_elements/cr_icons_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSpSharedStyle } from '//shopping-insights-side-panel.top-chrome/shared/sp_shared_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit(), getCrIconsLit(), getSpSharedStyle()], css `.section{flex-direction:column;display:flex;padding:16px}.sp-card{padding:16px}.panel-title{color:var(--cr-primary-text-color);font-size:16px;font-weight:500;line-height:24px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;padding:0}.panel-subtitle{color:var(--cr-primary-text-color);margin-top:4px;font-size:12px;font-weight:400;line-height:16px}.section-title{color:var(--cr-primary-text-color);font-size:14px;font-weight:500;line-height:20px}.history-subtitle{color:var(--cr-secondary-text-color);font-size:12px;line-height:16px;margin-top:8px}#titleSection>.section-details{margin-top:8px}#historySection>.section-details{margin-top:0}.panel-subtitle,.section-title,.history-subtitle{max-width:100%}#priceRange{overflow:hidden}`]);
}
