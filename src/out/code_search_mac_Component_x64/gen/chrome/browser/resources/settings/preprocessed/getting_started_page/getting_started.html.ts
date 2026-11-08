import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="settings-shared md-select"></style>

<template is="dom-if" if="[[accountState_.loggedIn]]">
  <settings-section page-title="[[getBraveAccountDetailsTitle_()]]">
    <brave-account-row></brave-account-row>
  </settings-section>
</template>

<settings-section
  id="getStarted"
  page-title="$i18n{braveGetStartedTitle}">
  <template is="dom-if" if="[[accountState_.loggedOut]]">
    <brave-account-row></brave-account-row>
  </template>
  <settings-people-page
    page-visibility="[[pageVisibility]]">
  </settings-people-page>
  <div route-path="default">
    <settings-default-browser-page></settings-default-browser-page>
    
      <settings-pin-shortcut-page></settings-pin-shortcut-page>
    
    <div class="settings-box">$i18n{onStartup}</div>
    <div class="settings-box continuation">
      <settings-on-startup-page class="flex no-min-width">
      </settings-on-startup-page>
    </div>
  </div>
</settings-section>
<!--_html_template_end_-->`;
}