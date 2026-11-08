import {getTrustedHTML} from '//resources/js/static_types.js';
export function getTemplate() {
  return getTrustedHTML`<!--_html_template_start_--><style>.valid-context #tabs-root,.otr #disabled-message{display:block}.valid-context #disabled-message,.otr #tabs-root{display:none}</style>
<div>
  <h1>Enterprise Connectors</h1>
</div>
<div id='main-root'>
  <div id="tabs-root"></div>
  <p id="disabled-message">
    Enterprise Connectors are disabled in off-the-record contexts.
  </p>
</div><!--_html_template_end_-->`;
}