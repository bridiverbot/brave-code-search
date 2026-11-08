import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPdfViewerSharedStyle} from './pdf_viewer_shared_style.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPdfViewerSharedStyle()], css`viewer-page-indicator{opacity:0;visibility:hidden;z-index:2}@media (max-height:200px){viewer-zoom-toolbar{display:none}}@media (max-width:300px){viewer-zoom-toolbar{display:none}}`]);
}