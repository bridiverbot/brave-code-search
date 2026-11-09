import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import {getCss as getMdSelectLit} from '//resources/cr_elements/md_select_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getMdSelectLit()], css`:host{display:flex;align-items:center;justify-content:flex-start;gap:12px}hr{margin:0;width:1px;height:20px;border:0;background:var(--color-history-embeddings-divider,var(--cr-fallback-color-divider))}#suggestions{display:flex;gap:8px}.suggestion-label{text-transform:lowercase}`]);
}