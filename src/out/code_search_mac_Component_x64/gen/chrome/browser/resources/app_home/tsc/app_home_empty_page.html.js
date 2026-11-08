import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
<div class="container">
  <img src="chrome://resources/images/apps_home_empty_238x170.svg">
  <p>$i18n{appAppearanceLabel}</p>
  <a href="https://support.brave.app/hc/en-us/articles/39077114659597" target="_blank">
    <cr-button>$i18n{learnToInstall}</cr-button>
  </a>
</div>
<!--_html_template_end_-->`;
}
