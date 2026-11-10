import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {ModuleElement} from './module.js';

export function getHtml(this: ModuleElement) {
  return html`<!--_html_template_start_--><ntp-module-header
    header-text="${this.title}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive(
        '', 'modulesMoreActions', 'modulesDummyLower')}"
    @disable-button-click="${this.onDisableButtonClick_}">
</ntp-module-header>
<div id="moduleContent">
  <cr-grid id="tiles" columns="2">
    ${this.tiles.map(item => html`
      <div class="tile-item" title="${item.label}">
        <img is="cr-auto-img" .autoSrc="${item.imageUrl}"></img>
        <span>${item.value}</span>
      </div>
    `)}
  </cr-grid>
</div>
<!--_html_template_end_-->`;
}