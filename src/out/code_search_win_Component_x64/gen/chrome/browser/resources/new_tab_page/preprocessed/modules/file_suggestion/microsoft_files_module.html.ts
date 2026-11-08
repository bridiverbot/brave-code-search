import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {MicrosoftFilesModuleElement} from './microsoft_files_module.js';

export function getHtml(this: MicrosoftFilesModuleElement) {
  return html`<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    header-text="$i18n{modulesMicrosoftFilesName}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('',
                                  'modulesMoreActions',
                                  'modulesMicrosoftFilesName')}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @signout-button-click="${this.onSignoutButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}">
</ntp-module-header>
<ntp-file-suggestion module-name="MicrosoftFiles"
    id="microsoft-files"
    .files="${this.files_}">
</ntp-file-suggestion>
${this.showInfoDialog_ ? html`
  <ntp-info-dialog show-on-attach
      .innerHTML="${this.i18nAdvanced('modulesMicrosoftFilesInfo')}"
      @close="${this.onInfoDialogClose_}">
  </ntp-info-dialog>
` : ''}
<!--_html_template_end_-->`;
}