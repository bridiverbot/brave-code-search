import './settings_vars-chromium.css.js';
const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--cr-icon-color:var(--leo-color-icon-default);--cr-link-row-start-icon-color:var(--leo-color-icon-default);--iron-icon-fill-color:var(--leo-color-icon-default)}@media (prefers-color-scheme:dark){html{--cr-icon-color:var(--leo-color-icon-default);--cr-link-row-start-icon-color:var(--leo-color-icon-default);--iron-icon-fill-color:var(--leo-color-icon-default)}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
