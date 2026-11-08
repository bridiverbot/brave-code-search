import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style"></style>
<cr-dialog id="dialog" close-text="$i18n{cancel}"
    ignore-popstate ignore-enter-key>
  <div slot="title" class="dialog-title">
    $i18n{removeActorLoginDialogTitle}
  </div>
  <div slot="body">
    <span id="text">[[getDescriptionText_(origin)]]</span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel"
        autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onDisconnectClick_"
        id="disconnect">
      $i18n{removeActorLoginDialogConfirmation}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}
