import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import './cr_icons-chromium.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-icons-chromium">
.icon-folder-open{--cr-icon-image:url(//resources/brave-icons/folder.svg)}.icon-edit{--cr-icon-image:url(//resources/brave-icons/edit-pencil.svg)}
    </style>
  </template>
`.content);
styleMod.register('cr-icons');
