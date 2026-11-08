import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrHiddenStyleLit} from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrHiddenStyleLit()], css`:host{display:block}#longDescription{color:var(--cr-primary-text-color);font-size:15px;line-height:24px;margin:0 0 16px;overflow-wrap:break-word}#openRelatedTabs{margin-block-end:28px}topic-collection-carousel{margin-block-end:28px}#queryRatings{background-color:var(--cr-fallback-color-surface2);border-radius:12px;margin-block-end:28px;padding:12px 16px}#queryRatingsHint{color:var(--cr-secondary-text-color);font-size:13px;line-height:20px;margin:0 0 8px}#queryRatingsTitle{color:var(--cr-secondary-text-color);font-size:13px;font-weight:500;line-height:20px;margin:0 0 4px;text-align:end}#queryRatings ul{list-style:none;margin:0;padding:0}.query{align-items:center;display:flex;gap:4px;min-height:36px}.query-text{color:var(--cr-primary-text-color);flex:1;font-size:14px;line-height:20px;min-width:0;overflow-wrap:break-word}.query cr-icon-button{--cr-icon-button-icon-size:18px;margin:0}`]);
}