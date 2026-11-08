import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style">:host{align-items:center;display:grid;grid-template-columns:1fr auto;line-height:normal}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:20px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}.elide-text-after-three-lines{-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}</style>

<span class="elide-text-after-three-lines">
  <slot></slot>
</span>
<cr-icon-button iron-icon="cr:help" id="helpButton"
    title="$i18n{help}" on-click="onHelpClick_" suppress-rtl-flip>
</cr-icon-button>
<!--_html_template_end_-->`;
}
