import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" consume-keydown-event
    ?show-on-attach="${this.showOnAttach}">
  <div slot="title">$i18n{modulesTasksInfoTitle}</div>
  <div slot="body">
    <slot></slot>
  </div>
  <div slot="button-container">
    <cr-button id="closeButton" class="action-button"
        @click="${this.onCloseClick_}">
      $i18n{modulesTasksInfoClose}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}
