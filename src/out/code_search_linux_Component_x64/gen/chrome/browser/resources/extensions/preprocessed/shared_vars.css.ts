import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
export {};

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--error-color:var(--google-red-700);--warning-color:rgb(242,153,0);--warning-text-color:#B16300;--extensions-card-height:160px;--separator-gap:9px;--sidebar-width:256px;--cr-toolbar-field-width:680px;--paper-grey-300:#e0e0e0;--panel-icon-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--panel-icon-color:var(--google-grey-500);--error-color:var(--google-red-300);--warning-color:var(--google-yellow-300)}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];