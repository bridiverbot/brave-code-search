import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{height:100%;width:100%}.highlighted-line{background-color:var(--color-text-highlight);border-radius:2px;opacity:30%;position:absolute;z-index:2;transition:background-color 200ms cubic-bezier(0.3,0,1,1),opacity 100ms cubic-bezier(0.3,0,1,1)}:host([has-actioned-text]) .highlighted-line{background-color:var(--color-text-highlight-actioned);opacity:60%}:host([hide-highlighted-lines]) .highlighted-line{opacity:0}:host(:not([enable-highlights])) .highlighted-line{display:none}@media (forced-colors:active){.highlighted-line{background-color:Highlight}}`]);
}
