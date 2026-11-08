import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getSharedStyle } from './shared_style.css.js';
import './shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSharedStyle()], css `:host{display:flex;position:relative}cr-toolbar{--cr-toolbar-center-basis:var(--cluster-max-width);--cr-toolbar-left-spacer-width:var(--side-bar-width);--cr-toolbar-field-margin:var(--side-bar-width);flex:1}:host([has-drawer]) cr-toolbar,:host([has-drawer]) cr-toolbar-selection-overlay{--cr-toolbar-field-margin:0}cr-toolbar-selection-overlay{opacity:0;--cr-toolbar-selection-overlay-max-width:var(--card-max-width);--cr-toolbar-field-margin:var(--side-bar-width)}cr-toolbar-selection-overlay[show]{opacity:1}`]);
}
