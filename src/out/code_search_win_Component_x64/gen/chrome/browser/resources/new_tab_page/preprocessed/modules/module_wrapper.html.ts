import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {ModuleWrapperElement} from './module_wrapper.js';

export function getHtml(this: ModuleWrapperElement) {
  return html`<!--_html_template_start_--><div id="impressionProbe"></div>
<div id="moduleElement">
  <slot id="slot"></slot>
</div>
<!--_html_template_end_-->`;
}