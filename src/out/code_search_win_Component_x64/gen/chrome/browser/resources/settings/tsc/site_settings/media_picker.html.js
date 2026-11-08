import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->    <div class="cr-row first" id="picker" hidden>
      <select id="mediaPicker" class="md-select" @change="${this.onChange_}"
          aria-label="${this.label}">
        ${this.devices.map(item => html `
          <option value="${item.id}">
            ${item.name}
          </option>
        `)}
      </select>
    </div>
<!--_html_template_end_-->`;
}
