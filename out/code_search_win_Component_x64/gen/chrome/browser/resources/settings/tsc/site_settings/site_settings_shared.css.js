import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import './search_highlight_style.css.js';
import '../settings_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style search-highlight-style">
.content-settings-header,.radio-group{padding:0 var(--cr-section-padding)}.radio-group-sub-heading{padding-bottom:10px}.padded-radio-section{padding-inline-start:50px}.cpss-heading{padding-bottom:13px;padding-top:13px}settings-collapse-radio-button{--settings-collapse-toggle-min-height:var(--cr-section-min-height)}settings-collapse-radio-button.two-line{--settings-collapse-toggle-min-height:var(--cr-section-two-line-min-height)}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}#exceptionHeader{padding:0 var(--cr-section-padding)}#exceptionHeaderSubLabel{padding-bottom:10px}
    </style>
  </template>
`.content);
styleMod.register('site-settings-shared');
