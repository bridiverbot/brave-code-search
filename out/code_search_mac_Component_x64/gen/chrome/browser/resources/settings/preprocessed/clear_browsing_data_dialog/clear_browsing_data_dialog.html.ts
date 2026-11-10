import {html} from 'chrome://resources/lit/v3_0/lit.rollup.js';

import type {SettingsClearBrowsingDataDialogElement} from './clear_browsing_data_dialog.js';

export function getHtml(this: SettingsClearBrowsingDataDialogElement) {
  return html`<!--_html_template_start_-->
<cr-dialog id="deleteBrowsingDataDialog" close-text="$i18n{close}" show-on-attach="" ignore-popstate="" ignore-enter-key="" ?hidden="${this.showOtherGoogleDataDialog_}" @cancel="${this.onDialogCancel_}">
  <div slot="title" class="dialog-title" hidden="">$i18n{clearBrowsingData}</div><div slot="header">
       ${this.renderBraveTabs_()}
       <div id="tabsDivider"></div>
     </div>
  <div ?hidden="${!(this.isDeleteNowTabSelected_())}" slot="header">
    <settings-clear-browsing-data-time-picker id="timePicker" @selected-time-period-change="${this.onSelectedTimePeriodChange_}">
    </settings-clear-browsing-data-time-picker>
  </div>
  <div ?hidden="${!(this.isDeleteNowTabSelected_())}" slot="body">
    <div id="checkboxContainer">
      ${this.expandedBrowsingDataTypeOptionsList_.map(item => html`
        <settings-checkbox pref-key="${item.prefKey}" no-set-pref
            .subLabelHtml="${item.subLabel || ''}"
            ?disabled="${this.isDeletionInProgress_}"
            @sub-label-link-clicked="${this.onSubLabelLinkClicked_}">
          <div class="checkbox-title">${item.label}</div>
        </settings-checkbox>
      `)}
      <div id="moreOptionsList">
        ${this.dataTypesExpanded_ ? html`
          ${this.moreBrowsingDataTypeOptionsList_.map(item => html`
            <settings-checkbox pref-key="${item.prefKey}" no-set-pref
                .subLabelHtml="${item.subLabel || ''}"
                ?disabled="${this.isDeletionInProgress_}"
                @sub-label-link-clicked="${this.onSubLabelLinkClicked_}">
              <div class="checkbox-title">${item.label}</div>
            </settings-checkbox>
          `)}
        ` : ''}
      </div>
    </div>
    
    
  </div><div slot="body" id="onExitBody" ?hidden="${!this.isOnExitTabSelected_()}">
       <settings-brave-clear-browsing-data-on-exit-page id="onExitTab" @clear-data-on-exit-page-change="${this.onClearDataOnExitPageChange_}">
       </settings-brave-clear-browsing-data-on-exit-page>
     </div>
  ${this.showBraveDataOptions_ ? html`
       <div slot="body" id="braveDataOptions">
         <a id="clearBraveAdsData" href="chrome://settings/privacy" ?hidden="${this.braveRewardsEnabled_}" @click="${this.onClearBraveAdsDataClick_}">
           <span id="clearBraveAdsDataLabel">$i18n{clearBraveAdsData}</span>
         </a>
         <a id="resetBraveRewardsData" href="chrome://rewards/#reset" ?hidden="${!this.braveRewardsEnabled_}">
           <leo-icon name="product-bat-outline"></leo-icon>
           <span id="resetBraveRewardsDataLabel">$i18n{resetRewardsData}</span>
           <leo-icon name="launch"></leo-icon>
         </a>
       </div>
     ` : ''}<div slot="button-container" class="row-aligned">

    <settings-clear-browsing-data-account-indicator>
    </settings-clear-browsing-data-account-indicator>

    <div id="spinner" class="spinner" ?hidden="${!this.isDeletionInProgress_}"></div>
    <cr-button id="cancelButton" class="cancel-button" @click="${this.onCancelClick_}" ?disabled="${this.isDeletionInProgress_}" autofocus="">
      $i18n{cancel}
    </cr-button>
    <cr-button ?hidden="${!(this.isDeleteNowTabSelected_())}" id="deleteButton" class="action-button" @click="${this.onDeleteBrowsingDataClick_}" ?disabled="${this.shouldDisableDeleteButton_()}">
      ${this.computeDeleteButtonLabel_()}
    </cr-button><cr-button id="saveOnExitSettingsConfirm" class="action-button" ?hidden="${!this.isOnExitTabSelected_()}" ?disabled="${!this.onExitSettingsModified_}" @click="${this.onSaveOnExitSettingsClick_}">
       $i18n{save}
     </cr-button>
    <!-- The alert must be inside the dialog for it to be read while the
         dialog is open. -->
    <div id="deletingDataAlert" role="alert">
      ${this.deletingDataAlertString_}
    </div>
  </div>
</cr-dialog>

${this.showHistoryDeletionDialog_ ? html`
  <settings-history-deletion-dialog id="historyNotice"
      @close="${this.onHistoryDeletionDialogClose_}">
  </settings-history-deletion-dialog>
` : ''}

${this.showOtherGoogleDataDialog_ ? html`
  <settings-other-google-data-dialog
      @cancel="${this.onOtherGoogleDataDialogCancel_}">
  </settings-other-google-data-dialog>
` : ''}
<!--_html_template_end_-->`;
}
