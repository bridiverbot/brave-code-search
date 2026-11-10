import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {SimpleConfirmationDialogElement} from './simple_confirmation_dialog.js';

export function getHtml(this: SimpleConfirmationDialogElement) {
  return html`<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">${this.titleText}</div>
  <div slot="body">${this.bodyText}</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" @click="${this.onCancelClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button id="confirm"
        class="${this.getConfirmButtonCssClass_()}"
        @click="${this.onConfirmClick_}">
      ${this.confirmText}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}