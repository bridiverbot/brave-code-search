// Copyright (c) 2025 The Brave Authors. All rights reserved.
import{browserProxyFactory as customizeChromeProxyFactory}from"./customize_chrome.mojom-webui.js";import{CrLitElement,html,css}from"//resources/lit/v3_0/lit.rollup.js";import{loadTimeData}from"//resources/js/load_time_data.js";import{I18nMixinLit}from"//resources/cr_elements/i18n_mixin_lit.js";import{browserProxyFactory}from"//resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom-webui.js";export*from"./app-chromium.js";class ClosePanelButtonElement extends CrLitElement{static get is(){return"close-panel-button"}render(){return html`
      <cr-icon-button
        id="closeButton"
        iron-icon="close"
        @click=${this.onClosePanel}
      ></cr-icon-button>
    `}onClosePanel(){customizeChromeProxyFactory.getInstance().handler.closePanel()}}customElements.define(ClosePanelButtonElement.is,ClosePanelButtonElement);class DarkerThemeToggleElement extends(I18nMixinLit(CrLitElement)){static get is(){return"brave-darker-theme-toggle"}static get styles(){return css`
      #darker-theme-toggle-container {
        display: flex;
        align-items: center;
        gap: var(--leo-spacing-xl);
        margin-inline: var(--leo-spacing-xl);
      }

      #darker-theme-toggle-container > span {
        flex: 1;
      }

      /* Hide the darker theme toggle container if the color scheme is light.
         This is to avoid showing the toggle button when user is using System
         color scheme mode and the system is using light color scheme. */
      @media (prefers-color-scheme: light) {
        #darker-theme-toggle-container {
          display: none;
        }
      }
    `}render(){return html`
      <div id="darker-theme-toggle-container">
        <leo-icon name="theme-darker"></leo-icon>
        <span>${this.i18n("CUSTOMIZE_CHROME_DARKER_THEME_TOGGLE_LABEL")}</span>
        <!-- Use cr-toggle instead of leo-toggle in order to inherit style -->
        <cr-toggle
          .checked="${this.usingDarkerTheme_}"
          @change="${this.onDarkerThemeToggleChange}"
        ></cr-toggle>
      </div>
    `}static get properties(){return{usingDarkerTheme_:{type:Boolean}}}setColorSchemeModeListenerId_=null;#usingDarkerTheme__accessor_storage=false;get usingDarkerTheme_(){return this.#usingDarkerTheme__accessor_storage}set usingDarkerTheme_(value){this.#usingDarkerTheme__accessor_storage=value}connectedCallback(){super.connectedCallback();if(!loadTimeData.getBoolean("shouldShowDarkerThemeToggle")){return}const apiProxy=customizeChromeProxyFactory.getInstance();apiProxy.callbackRouter.onUseDarkerThemeChanged.addListener((useDarkerTheme=>{this.usingDarkerTheme_=useDarkerTheme}));apiProxy.handler.getUseDarkerTheme().then((({useDarkerTheme:useDarkerTheme})=>{this.usingDarkerTheme_=useDarkerTheme}))}disconnectedCallback(){if(this.setColorSchemeModeListenerId_){const colorSchemeModeClientCallbackRouter=browserProxyFactory.getInstance().callbackRouter;colorSchemeModeClientCallbackRouter.removeListener(this.setColorSchemeModeListenerId_);this.setColorSchemeModeListenerId_=null}super.disconnectedCallback()}onDarkerThemeToggleChange(){customizeChromeProxyFactory.getInstance().handler.setUseDarkerTheme(!this.usingDarkerTheme_)}}customElements.define(DarkerThemeToggleElement.is,DarkerThemeToggleElement);