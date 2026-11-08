import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
export {};

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--card-background-color:var(--google-grey-100);--code-background-color:var(--google-grey-100);--error-icon-color:var(--google-red-700);--success-icon-color:var(--google-green-700);--warning-icon-color:var(--google-yellow-700);--success-background-color:var(--google-green-50);--error-background-color:color-mix(in srgb,var(--google-red-100) 50%,white)}@media (prefers-color-scheme:dark){html{--card-background-color:color-mix(in srgb,white 4%,var(--google-grey-900));--code-background-color:var(--google-grey-800);--success-background-color:color-mix(in srgb,var(--google-green-500) 30%,black);--error-background-color:color-mix(in srgb,var(--google-red-500) 30%,black)}}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];