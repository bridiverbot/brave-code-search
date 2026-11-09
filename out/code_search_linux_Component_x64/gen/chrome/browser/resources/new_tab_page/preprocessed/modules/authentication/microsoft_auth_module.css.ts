import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`#contents{align-items:center;background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);display:flex;flex-direction:column;gap:24px;margin:8px;padding:32px 40px}:host([format='wide']) #contents{flex-direction:row;gap:38px}@media (prefers-color-scheme:dark){#authImg{content:url(modules/authentication/icons/microsoft_auth_dark.svg)}}#headingsAndButton{align-items:center;display:flex;flex-direction:column;gap:16px}:host([format='wide']) #headingsAndButton{align-items:flex-start}#headings{text-align:center}:host([format='wide']) #headings{text-align:initial}#heading{color:var(--color-new-tab-page-primary-foreground);font-size:16px;font-weight:500;line-height:24px;margin:0}#subheading{color:var(--color-new-tab-page-secondary-foreground);font-size:var(--ntp-module-text-size);font-weight:400;line-height:var(--ntp-module-line-height);margin:0}`]);
}