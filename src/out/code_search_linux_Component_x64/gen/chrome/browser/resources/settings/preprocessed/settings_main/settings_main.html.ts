import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {SettingsMainElement} from './settings_main.js';
import {cache} from '//resources/lit/v3_0/lit.rollup.js';

export function getHtml(this: SettingsMainElement) {
  return html`<!--_html_template_start_--><!-- #html_wrapper_imports_start
import {cache} from '//resources/lit/v3_0/lit.rollup.js';
#html_wrapper_imports_end -->
<div id="noSearchResults" ?hidden="${!this.showNoResultsFound_}">
  <div>$i18n{searchNoResults}</div>
  <div>$i18nRaw{searchNoResultsHelp}</div>
</div>
${this.showManagedHeader_() ? html`
  <managed-footnote></managed-footnote>
` : ''}

${this.showResetProfileBanner_ ? html`
  <settings-reset-profile-banner @close="${this.onResetProfileBannerClose_}">
  </settings-reset-profile-banner>
` : ''}

<cr-view-manager id="switcher" ?show-all="${this.shouldShowAll_()}">
  ${cache(this.showPage_(this.pageVisibility_?.people) ? html`
    <div slot="view" id="people">
      ${cache(this.renderPlugin_(this.routes_.PEOPLE) ? html`
        <settings-people-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-people-page-index>
      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.privacy) ? html`
    <div slot="view" id="privacy">
      ${cache(this.renderPlugin_(this.routes_.PRIVACY) ? html`
        <settings-privacy-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-privacy-page-index>
      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.yourSavedInfo) ? html`
    <div slot="view" id="yourSavedInfo">
      ${cache(this.renderPlugin_(this.routes_.AUTOFILL) ? html`
        <settings-autofill-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-autofill-page-index>
      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.performance) ? html`
    
  ` : '')}

  ${cache(this.showAiPage_(this.pageVisibility_?.ai) ? html`
    <div slot="view" id="ai">
      ${cache(this.renderPlugin_(this.routes_.AI) ? html`
        <settings-ai-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-ai-page-index>
      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.appearance) ? html`
    <div slot="view" id="appearance">
      ${cache(this.renderPlugin_(this.routes_.APPEARANCE) ? html`
        <settings-appearance-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-appearance-page-index>
      ` : '')}
    </div>
  ` : '')}

  <div slot="view" id="search">
    ${cache(this.renderPlugin_(this.routes_.SEARCH) ? html`
      <settings-search-page-index ?in-search-mode="${this.inSearchMode_}">
      </settings-search-page-index>
    ` : '')}
  </div>


  ${cache(this.showPage_(this.pageVisibility_?.defaultBrowser) ? html`
    <div slot="view" id="defaultBrowser">
      ${cache(this.renderPlugin_(this.routes_.DEFAULT_BROWSER) ? html`
        <settings-default-browser-page></settings-default-browser-page>
      ` : '')}
    </div>
  ` : '')}


  ${cache(this.showPage_(this.pageVisibility_?.onStartup) ? html`
    <div slot="view" id="onStartup">
      ${cache(this.renderPlugin_(this.routes_.ON_STARTUP) ? html`
        <settings-on-startup-page></settings-on-startup-page>
      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.languages) ? html`
    <div slot="view" id="languages">
      ${cache(this.renderPlugin_(this.routes_.LANGUAGES) ? html`


        <settings-languages-page-index
            ?in-search-mode="${this.inSearchMode_}">
        </settings-languages-page-index>

      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.downloads) ? html`
    <div slot="view" id="downloads">
      ${cache(this.renderPlugin_(this.routes_.DOWNLOADS) ? html`
        <settings-downloads-page></settings-downloads-page>
      ` : '')}
    </div>
  ` : '')}

  ${cache(this.showPage_(this.pageVisibility_?.a11y) ? html`
    <div slot="view" id="a11y">
      ${cache(this.renderPlugin_(this.routes_.ACCESSIBILITY) ? html`
        <settings-a11y-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-a11y-page-index>
      ` : '')}
    </div>
  ` : '')}


  ${cache(this.showPage_(this.pageVisibility_?.system) ? html`
    <div slot="view" id="system">
      ${cache(this.renderPlugin_(this.routes_.SYSTEM) ? html`
        <settings-brave-system-page-index></settings-brave-system-page-index>
      ` : '')}
    </div>
  ` : '')}


  ${cache(this.showPage_(this.pageVisibility_?.reset) ? html`
    <div slot="view" id="reset">
      ${cache(this.renderPlugin_(this.routes_.RESET) ? html`
        <settings-reset-page></settings-reset-page>
      ` : '')}
    </div>
  ` : '')}

  <div slot="view" id="about">
    ${cache(this.renderPlugin_(this.routes_.ABOUT) ? html`
      <settings-about-page role="main" class="cr-centered-card-container">
      </settings-about-page>
    ` : '')}
  </div>
${cache(this.showPage_(this.pageVisibility_?.getStarted) ? html`
    <div slot="view" id="getStarted">
      ${cache(this.renderPlugin_(this.routes_.GET_STARTED) ? html`
        <settings-getting-started-page-index ?in-search-mode="${this.inSearchMode_}"></settings-getting-started-page-index>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.origin) ? html`
    <div slot="view" id="origin">
      ${cache(this.renderPlugin_(this.routes_.ORIGIN) ? html`
        <settings-brave-origin-page ?in-search-mode="${this.inSearchMode_}"></settings-brave-origin-page>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.content) ? html`
    <div slot="view" id="content">
      ${cache(this.renderPlugin_(this.routes_.BRAVE_CONTENT) ? html`
        <settings-brave-content-page-index ?in-search-mode="${this.inSearchMode_}"></settings-brave-content-page-index>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.shields) ? html`
    <div slot="view" id="shields">
      ${cache(this.renderPlugin_(this.routes_.SHIELDS) ? html`
        <settings-shields-page-index ?in-search-mode="${this.inSearchMode_}"></settings-shields-page-index>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.braveWallet) ? html`
    <div slot="view" id="web3">
      ${cache(this.renderPlugin_(this.routes_.BRAVE_WEB3) ? html`
        <settings-wallet-page-index ?in-search-mode="${this.inSearchMode_}"></settings-wallet-page-index>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.leoAssistant) ? html`
    <div slot="view" id="leoAssistant">
      ${cache(this.renderPlugin_(this.routes_.BRAVE_LEO_ASSISTANT) ? html`
        <settings-brave-leo-assistant-page-index ?in-search-mode="${this.inSearchMode_}"></settings-brave-leo-assistant-page-index>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.braveSync) ? html`
    <div slot="view" id="braveSync">
      ${cache(this.renderPlugin_(this.routes_.BRAVE_SYNC) ? html`
        <settings-brave-sync-page-index ?in-search-mode="${this.inSearchMode_}"></settings-brave-sync-page-index>
      ` : '')}
    </div>
  ` : '')}${cache(this.showPage_(this.pageVisibility_?.extensions) ? html`
      <div slot="view" id="extensions">
        <settings-brave-extensions-page-index ?in-search-mode="${this.inSearchMode_}">
        </settings-brave-extensions-page-index>
      </div>
    ` : '')}</cr-view-manager>
<!--_html_template_end_-->`;
}