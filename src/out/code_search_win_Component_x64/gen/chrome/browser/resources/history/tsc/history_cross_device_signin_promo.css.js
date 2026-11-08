import { css } from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `:host{display:block;box-sizing:border-box}#promo{display:flex;align-items:center;background:var(--cr-card-background-color);border-radius:8px;box-shadow:var(--cr-card-shadow);box-sizing:border-box;margin-block-start:16px;margin-block-end:8px;padding:24px 16px;gap:18px;position:relative;width:100%}#close{--cr-icon-button-margin-end:0;position:absolute;inset-block-start:12px;inset-inline-end:12px}.sync-history-illustration{content:url(images/sync_history_promo.svg);width:200px}@media (prefers-color-scheme:dark){.sync-history-illustration{content:url(images/sync_history_promo_dark.svg)}}.promo-content{display:flex;flex-direction:column;align-items:flex-start;gap:4px;width:100%;margin-inline-end:28px;margin-block-start:6px}.title{font-size:16px;font-weight:500;margin:0}.description{color:var(--cr-secondary-text-color);max-width:573px}.flex-row{margin-block-start:8px;display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center}`]);
}
