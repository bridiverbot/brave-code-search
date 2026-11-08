import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_--><div class="name-cell" role="cell">
  <a class="stat-name-link" href="${this.getHref_()}" target="_blank"
      name="${this.entry.key}">
    🔗 ${this.entry.key}
  </a>
</div>
<div class="button-cell" role="cell">
  <button @click="${this.onButtonClick_}" ?hidden="${!this.collapsible_}">
    ${this.getButtonText_()}
  </button>
</div>
<div class="value-cell" role="cell">
  <span class="stat-value">${this.entry.value}</span>
</div>
<!--_html_template_end_-->`}