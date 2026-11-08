import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">:host{--settings-checkbox-margin-top:4px;--cr-section-min-height:40px}#checkboxContainer{border-radius:var(--leo-radius-xl);background:var(--leo-color-container-highlight);padding:calc(var(--leo-spacing-xl) - var(--leo-spacing-m) / 2) var(--leo-spacing-xl)}.checkbox-title{font:var(--leo-font-default-regular)}</style>

<div id="checkboxContainer">
  <template is="dom-repeat"
    items="[[browsingDataTypeOptionsList_]]">
    <settings-checkbox pref-key="[[item.prefKey]]" no-set-pref>
      <div class="checkbox-title">[[item.label]]</div>
    </settings-checkbox>
  </template>
</div>
<!--_html_template_end_-->`;
}
