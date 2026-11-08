import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import './md_select-chromium.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="md-select-chromium">
select.md-select:not(.z){appearance:base-select;background:transparent;background-image:none !important;border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);padding:var(--leo-spacing-m);color:var(--leo-color-text-primary);display:flex;align-items:center;min-width:var(--md-select-width,240px);width:fit-content;height:unset;font-size:inherit;transition:border-color 0.12s ease-in-out}.md-select:hover{background:transparent;border-color:var(--leo-color-divider-strong)}.md-select::picker(select){margin-top:var(--leo-spacing-m);appearance:base-select;background:var(--leo-color-container-background);border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);position-area:block-end span-inline-end}.md-select option:not(.z){margin:var(--leo-spacing-s);padding:var(--leo-spacing-s) var(--leo-spacing-m);border-radius:var(--leo-radius-s);background-color:var(--leo-color-container-background)}.md-select option:hover{background-color:var(--leo-color-container-highlight)}.md-select option:checked{background-color:var(--leo-color-container-highlight)}.md-select option::checkmark{display:none}.md-select::picker-icon{content:'';width:20px;height:20px;background-color:currentColor;mask-image:url(//resources/brave-icons/carat-down.svg);transition:transform 0.12s ease-in-out}.md-select option:focus{background-color:var(--leo-color-container-interactive);color:var(--leo-color-text-interactive)}.md-select option:focus-visible{box-shadow:0 0 0 1.5px rgba(255,255,255,0.5),0 0 4px 2px #423eee}
    </style>
  </template>
`.content);
styleMod.register('md-select');
