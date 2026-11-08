import {getTrustedHTML} from 'chrome://resources/js/static_types.js';
export function getTemplate() {
  return getTrustedHTML`<!--_html_template_start_--><span id="type"></span>
<span id="value"></span>
<span id="logical-value"></span>
<!--_html_template_end_-->`;
}