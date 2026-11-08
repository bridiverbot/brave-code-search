import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" show-close-button show-on-attach>
  <div slot="title"></div>
  <div slot="body">
    <div>$i18n{torSnowflakeInstallFailed}</div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancel" on-click="cancelClicked_">OK</cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}
