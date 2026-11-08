import {getTrustedHTML} from 'chrome://resources/js/static_types.js';
export function getTemplate() {
  return getTrustedHTML`<!--_html_template_start_--><div id="sidebar-container">
  <span id="tablist" role="tablist">
    <slot name="tab"></slot>
  </span>
</div>
<span id="tabpanels">
  <slot name="panel"></slot>
</span>
<!--_html_template_end_-->`;
}