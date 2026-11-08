import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->
  <style include="settings-shared cr-shared-style">.title{font-size:14px;font-weight:600;height:68px}
  </style>

  <settings-section
    page-title="$i18n{vpnPageTitle}">
    <settings-vpn-page>

      <settings-toggle-button id="toggleWireguardButton"
        pref-key="brave.brave_vpn.wireguard_enabled"
        label="$i18n{useWireguardLabel}"
        sub-label="[[toggleWireguardSubLabel_]]"
        disabled="[[braveVpnConnected_]]">
      </settings-toggle-button>

      
    </settings-vpn-page>
  </settings-section>

<!--_html_template_end_-->`;
}
