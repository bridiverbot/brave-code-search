import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{align-items:center;color-scheme:light;display:inline-flex;height:100%;justify-content:center;margin:0;padding:0;width:max-content}:host([dark-mode]){color-scheme:dark}#faviconGroup{--composebox-favicon-border-color:var(--color-override-favicons-border,rgb(240,242,245));--composebox-favicon-more-items-color:#474747;--composebox-favicon-skeleton-color:var(--color-override-favicon-skeleton,#e1e3e1)}:host([dark-mode]) #faviconGroup{--composebox-favicon-border-color:var(--color-override-favicons-border,rgb(78,80,89));--composebox-favicon-more-items-color:rgb(199,199,199);--composebox-favicon-skeleton-color:var(--color-override-favicon-skeleton,rgb(68,71,70))}`]);
}