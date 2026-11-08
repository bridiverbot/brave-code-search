import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrSharedStyleLit} from '//resources/cr_elements/cr_shared_style_lit.css.js';
import {getCss as getSettingsSharedLit} from '../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrSharedStyleLit(),getSettingsSharedLit()], css`.origin-restart-padding-spacer{padding-bottom:80px}.title{font:var(--leo-font-default-semibold);height:68px}.label.primary-title{font:var(--leo-font-large-regular);padding-top:var(--leo-spacing-xl)}.label.secondary-title{padding-bottom:var(--leo-spacing-xl)}#needsRestart{background-color:var(--leo-color-container-background);bottom:0;box-shadow:0 -2px 2px 0 var(--shadow-color);box-sizing:border-box;left:0;opacity:1;padding:var(--leo-spacing-xl) var(--leo-spacing-2xl);position:fixed;transform:translate(0);transition:all 225ms var(--ease-in-out);width:100%;z-index:10;border-top:1px solid var(--leo-color-divider-subtle)}#needsRestart .flex:last-child{text-align:right}.flex{align-self:center;flex:1 1 auto}.flex-container{display:flex}.restart-notice{font:var(--leo-font-default-regular)}#resetToDefaults::part(icon){display:none}`]);
}