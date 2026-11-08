import { html } from '//resources/lit/v3_0/lit.rollup.js';
import { RestartType } from '../relaunch_mixin_lit.js';
export function getHtml() {
    // clang-format off
    return html `<!--_html_template_start_-->
<settings-section page-title="$i18n{systemPageTitle}" class=""><cr-link-row id="shortcutsButton" class="hr" ?hidden="${!this.shortcutsSupported_}" label="$i18n{braveShortcutsPage}" role-description="$i18n{subpageArrowRoleDescription}" @click="${this.onShortcutsClick_}">
     </cr-link-row>

  <settings-toggle-button pref-key="background_mode.enabled" label="$i18n{backgroundAppsLabel}">
  </settings-toggle-button>
  <div class="hr"></div>

  <settings-toggle-button id="hardwareAcceleration" pref-key="hardware_acceleration_mode.enabled" label="$i18n{hardwareAccelerationLabel}">
    ${this.shouldShowRestart_() ? html `
      <cr-button @click="${this.onRestartClick_}" slot="more-actions">
        $i18n{restart}
      </cr-button>
    ` : ''}
  </settings-toggle-button>

  ${this.showProcessIsolationSetting_ ? html `
    <div class="hr"></div>
    <settings-toggle-button id="isolationState"
        pref-key="isolation_state.enabled"
        label="$i18n{isolationStateLabel}"
        sub-label="$i18n{isolationStateSubLabel}"
        learn-more-url="$i18n{isolationStateLearnMoreUrl}">
      ${this.shouldShowIsolationRestart_() ? html `
        <cr-button @click="${this.onRestartClick_}" slot="more-actions">
          $i18n{restart}
        </cr-button>
      ` : ''}
    </settings-toggle-button>
  ` : ''}




  <div id="proxy" class="cr-row" @click="${this.onProxyClick_}" ?actionable="${this.isProxyDefault_}">
    <div id="proxy-single-source-container" ?hidden="${this.isProxyEnforcedByMultipleSources_}">
      <div class="flex cr-row-text" ?hidden="${!this.isProxyDefault_}">
        $i18n{proxySettingsLabel}
      </div>
      <div class="flex cr-row-text" ?hidden="${!this.proxyPref_?.extensionId}">
        $i18n{proxySettingsExtensionLabel}
      </div>
      <div class="flex cr-row-text" ?hidden="${!this.isProxyEnforcedByPolicy_}">
        $i18n{proxySettingsPolicyLabel}
      </div>
      <cr-icon-button class="icon-external" ?hidden="${!this.isProxyDefault_}" aria-label="$i18n{proxySettingsLabel}"></cr-icon-button>
      ${this.isProxyEnforcedByPolicy_ ? html `
        <cr-policy-pref-indicator .pref="${this.proxyPref_}"
            icon-aria-label="$i18n{proxySettingsLabel}">
        </cr-policy-pref-indicator>
      ` : ''}
    </div>
    <div id="proxyMultipleSourcesLabel" ?hidden="${!this.isProxyEnforcedByMultipleSources_}">
      $i18n{proxySettingsMultipleSourcesLabel}
    </div>
  </div>
  <div id="proxyMultipleSources" ?hidden="${!this.isProxyEnforcedByMultipleSources_}">
    <div id="proxyDeviceSettings" class="cr-row continuation" ?hidden="${!this.isProxyDefault_}" @click="${this.onProxyClick_}" ?actionable="${this.isProxyDefault_}">
      <div class="flex cr-row-text proxy-multisource-padding">
        $i18n{proxySettingsYourDevice}
      </div>
      <cr-icon-button class="icon-external" ?hidden="${!this.isProxyDefault_}" aria-label="$i18n{proxySettingsLabel}"></cr-icon-button>
    </div>
    ${!this.proxyOverrideRulesPref_?.extensionId ? html `
      <div class="cr-row continuation">
        <div class="flex cr-row-text proxy-multisource-padding">
          $i18n{proxySettingsYourOrganization}
        </div>
        <cr-policy-pref-indicator .pref="${this.proxyOverrideRulesPref_}"
            icon-aria-label="$i18n{proxySettingsLabel}">
        </cr-policy-pref-indicator>
      </div>
    ` : ''}
    ${this.proxyOverrideRulesPref_?.extensionId ? html `
      <div class="cr-row continuation">
        <extension-controlled-indicator class="flex proxy-multisource-padding"
            extension-id="${this.proxyOverrideRulesPref_.extensionId}"
            extension-name="${this.proxyOverrideRulesPref_.controlledByName}"
            ?extension-name-only-in-label="${this.isProxyEnforcedByMultipleSources_}"
            ?extension-can-be-disabled="${!!this.proxyOverrideRulesPref_.extensionCanBeDisabled}">
        </extension-controlled-indicator>
      </div>
    ` : ''}
  </div>
  ${this.proxyPref_?.extensionId ? html `
    <div class="cr-row continuation">
      <extension-controlled-indicator class="flex"
          extension-id="${this.proxyPref_.extensionId}"
          extension-name="${this.proxyPref_.controlledByName}"
          ?extension-name-only-in-label="${this.isProxyEnforcedByMultipleSources_}"
          ?extension-can-be-disabled="${!!this.proxyPref_.extensionCanBeDisabled}"
          @disable-extension-click="${this.onDisableExtensionClick_}">
      </extension-controlled-indicator>
    </div>
  ` : ''}

  ${this.shouldShowRelaunchDialog ? html `
    <relaunch-confirmation-dialog .restartType="${RestartType.RESTART}"
        @close="${this.onRelaunchDialogClose}">
    </relaunch-confirmation-dialog>
  ` : ''}
<div class="hr"></div>
     <settings-toggle-button pref-key="brave.enable_closing_last_tab" label="$i18n{braveClosingLastTab}">
     </settings-toggle-button>
     <div class="hr"></div>
     <settings-toggle-button pref-key="brave.enable_window_closing_confirm" label="$i18n{braveWarnBeforeClosingWindow}">
     </settings-toggle-button>
     ${this.isMac_ ? html `
       <div class="hr"></div>
       <settings-toggle-button pref-key="browser.confirm_to_quit" label="${this.warnBeforeQuittingLabel_}">
       </settings-toggle-button>
     ` : ''}
     <div class="hr"></div>
     <settings-toggle-button pref-key="brave.show_fullscreen_reminder" label="$i18n{braveShowFullscreenReminder}">
     </settings-toggle-button></settings-section>
<!--_html_template_end_-->`;
    // clang-format on
}
