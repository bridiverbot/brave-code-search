import {css, CSSResultGroup} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import {getCss as getPrivacyGuideFragmentSharedLit} from './privacy_guide_fragment_shared_lit.css.js';
import {getCss as getSettingsSharedLit} from '../../settings_shared_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getPrivacyGuideFragmentSharedLit(),getSettingsSharedLit()], css`:host{display:flex;flex-flow:column;min-height:calc(400px - var(--privacy-guide-footer-total-height))}.welcome-completion-header{padding:24px 0 16px 0}cr-link-row{--cr-link-row-icon-width:24px;--iron-icon-height:24px;border-radius:4px;padding-inline-end:8px;padding-inline-start:4px}cr-link-row::part(icon){--cr-icon-button-icon-size:24px}.label{font-size:0.875rem}.footer{align-items:center;bottom:calc(-1 * var(--privacy-guide-footer-total-height));display:flex;justify-content:space-between;padding:var(--privacy-guide-footer-vertical-padding) 0;position:absolute;width:calc(100% - 48px)}`]);
}