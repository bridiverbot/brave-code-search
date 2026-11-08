import {html} from '//resources/lit/v3_0/lit.rollup.js';

import {ChromeSigninAccessPoint} from '/shared/settings/people_page/sync_browser_proxy.js';

import type {SettingsPeoplePageElement} from './people_page.js';

export function getHtml(this: SettingsPeoplePageElement) {
  return html`<!--_html_template_start_-->

      <div>


        ${this.shouldShowSyncAccountControl_() ? html`
          
        ` : ''}

        ${this.shouldLinkToProfileRow_() ? html`
          
        ` : ''}




        <!-- Shared Elements -->
        

        

        


        ${this.signinAllowed_ ? html`
          

          <cr-link-row id="edit-profile" label="$i18n{profileNameAndPicture}" @click="${this.onProfileClick_}" class="first">
          </cr-link-row>
        ` : ''}

        <cr-link-row id="importDataDialogTrigger" label="$i18n{importTitle}" @click="${this.onImportDataClick_}">
        </cr-link-row>

        ${this.isDasherlessProfile_ ? html`
          <div id="sync-not-allowed" class="cr-row continuation">
            <cr-icon id="info-icon" icon="cr:info"></cr-icon>
            <div id="sync-not-allowed-text" class="flex cr-padded-text">
              $i18n{syncUnavailableForNonGoogleAccount}
            </div>
          </div>
        ` : ''}


      </div>
    


    ${this.showSignoutDialog_ ? html`
      <settings-signout-dialog .syncStatus="${this.syncStatus}"
          @close="${this.onDisconnectDialogClose_}">
      </settings-signout-dialog>
    ` : ''}

    ${this.showImportDataDialog_ ? html`
      <settings-import-data-dialog
          @close="${this.onImportDataDialogClose_}">
      </settings-import-data-dialog>
    ` : ''}

    <cr-toast duration="3000" id="toast">
      <span>$i18n{syncSettingsSavedToast}</span>
    </cr-toast>
<!--_html_template_end_-->`;
}
