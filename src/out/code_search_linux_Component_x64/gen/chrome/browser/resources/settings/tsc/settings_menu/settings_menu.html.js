import { html } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_--><div role="navigation">
      <cr-menu-selector id="menu" selectable="a:not(#extensionsLink)" attr-for-selected="href" @iron-activate="${this.onIronActivate_}" @click="${this.onLinkClick_}" selected-attribute="selected">
        <a role="menuitem" id="people" href="/people" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.people)}" class="cr-nav-menu-item">

          <cr-icon icon="settings:person"></cr-icon>


          <span class="menu-label">$i18n{peoplePageTitle}</span>
          <cr-ripple></cr-ripple>
        </a><a role="menuitem" id="getStarted" href="/getStarted" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.getStarted)}">
    <cr-icon icon="rocket"></cr-icon>
    <span class="menu-label">$i18n{braveGetStartedTitle}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="origin" href="/origin" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.origin)}">
    <cr-icon icon="product-origin"></cr-icon>
    <span class="menu-label">$i18n{braveOriginTitle}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="appearance" href="/appearance" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.appearance)}" class="cr-nav-menu-item">
          <cr-icon icon="settings:palette"></cr-icon>
          <span class="menu-label">$i18n{appearancePageTitle}</span>
          <cr-ripple></cr-ripple>
        </a><a role="menuitem" id="content" href="/braveContent" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.content)}">
    <cr-icon icon="window-content"></cr-icon>
    <span class="menu-label">$i18n{contentSettingsContentSection}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="shields" href="/shields" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.shields)}">
    <cr-icon icon="shield-done"></cr-icon>
    <span class="menu-label">$i18n{braveShieldsTitle}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="privacy" href="/privacy" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.privacy)}" class="cr-nav-menu-item">
          <cr-icon icon="settings:security"></cr-icon>
          <span class="menu-label">$i18n{privacyPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a><a role="menuitem" id="braveWallet" href="/web3" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.braveWallet)}">
    <cr-icon icon="product-brave-wallet"></cr-icon>
    <span class="menu-label">$i18n{braveWeb3}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="leoAssistant" href="/leo-ai" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.leoAssistant)}">
    <cr-icon icon="product-brave-leo"></cr-icon>
    <span class="menu-label">$i18n{leoAssistant}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="braveSync" href="/braveSync" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.braveSync)}">
    <cr-icon icon="product-sync"></cr-icon>
    <span class="menu-label">$i18n{braveSync}</span>
    <cr-ripple></cr-ripple>
  </a><a role="menuitem" id="search" href="/search" class="cr-nav-menu-item">
          <cr-icon icon="settings:search"></cr-icon>
          <span class="menu-label">$i18n{searchPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a><a role="menuitem" id="extensions" href="/extensions" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.extensions)}">
    <cr-icon icon="browser-extensions"></cr-icon>
    <span class="menu-label">$i18n{braveDefaultExtensions}</span>
    <cr-ripple></cr-ripple>
  </a>
        
        
        
        <a role="menuitem" id="ai" href="/ai" ?hidden="${!this.showAiPageMenuItem_()}" class="cr-nav-menu-item">
          <cr-icon icon="settings20:button-magic"></cr-icon>
          <span class="menu-label">$i18n{aiPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a>
        
        

        <a role="menuitem" id="defaultBrowser" class="cr-nav-menu-item" href="/defaultBrowser" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.defaultBrowser)}">
          <cr-icon icon="settings:web-asset"></cr-icon>
          <span class="menu-label">$i18n{defaultBrowser}</span>
          <cr-ripple></cr-ripple>
        </a>

        <a role="menuitem" id="onStartup" href="/onStartup" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.onStartup)}">
          <cr-icon icon="settings:power-settings-new"></cr-icon>
          <span class="menu-label">$i18n{onStartup}</span>
          <cr-ripple></cr-ripple>
        </a>
        <div class="menu-separator"></div>
        <a role="menuitem" id="autofill" href="/autofill" @click="${this.onAutofillClick_}" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.yourSavedInfo)}">
          <cr-icon icon="settings:password-manager"></cr-icon>
          <span class="menu-label">$i18n{autofillPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a><a role="menuitem" id="languages" href="/languages" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.languages)}">
          <cr-icon icon="settings:translate"></cr-icon>
          <span class="menu-label">$i18n{languagesPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a>
        <a role="menuitem" id="downloads" href="/downloads" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.downloads)}">
          <cr-icon icon="settings:download"></cr-icon>
          <span class="menu-label">$i18n{downloadsPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a>
        <a role="menuitem" id="accessibility" href="/accessibility" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.a11y)}">
          <cr-icon icon="settings:accessibility"></cr-icon>
          <span class="menu-label">$i18n{a11yPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a>

        <a role="menuitem" id="system" href="/system" class="cr-nav-menu-item" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.system)}">
          <cr-icon icon="settings:build"></cr-icon>
          <span class="menu-label">$i18n{systemPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a>

        <a role="menuitem" id="reset" href="/reset" ?hidden="${this.shouldHideMenuItem_(this.pageVisibility_?.reset)}" class="cr-nav-menu-item">
          <cr-icon icon="settings:restart-alt"></cr-icon>
          <span class="menu-label">$i18n{resetPageTitle}</span>
          <cr-ripple></cr-ripple>
        </a>
        <div ?hidden="${this.hideBottomMenuSeparator_()}" class="menu-separator"></div>
        
        <a role="menuitem" id="about-menu" href="/help">
      <div class="brave-about-graphic">
        <img srcset="chrome://theme/current-channel-logo@1x,
                     chrome://theme/current-channel-logo@2x 2x" width="20px" height="20px">
      </div>
      <div class="brave-about-meta">
        <span class="brave-about-item brave-about-menu-link-text">
          $i18n{aboutPageTitle}</span>
        <span class="brave-about-item brave-about-menu-version">
          v $i18n{braveProductVersion}</span>
      </div>
    </a>
      </cr-menu-selector>
    </div>

<!--_html_template_end_-->`;
}
