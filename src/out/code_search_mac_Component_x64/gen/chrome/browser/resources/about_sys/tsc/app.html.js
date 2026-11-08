import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_--><div id="header">
  <h1 id="title">$i18n{title}</h1>
  <p>$i18n{description}</p>
</div>

<key-value-pair-viewer ?loading="${this.loading_}" .entries="${this.entries_}">
</key-value-pair-viewer>
<!--_html_template_end_-->`;
}
