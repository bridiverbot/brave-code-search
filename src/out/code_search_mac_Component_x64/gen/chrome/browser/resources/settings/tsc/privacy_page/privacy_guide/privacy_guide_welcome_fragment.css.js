import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getPrivacyGuideFragmentSharedLit } from './privacy_guide_fragment_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getPrivacyGuideFragmentSharedLit()], css `:host{display:flex;flex-flow:column;min-height:calc(432px - var(--privacy-guide-footer-total-height))}.welcome-completion-header{padding:48px 116px var(--cr-section-padding) 116px;row-gap:12px}.footer{align-items:center;animation:fade-in var(--privacy-guide-animation-duration);bottom:calc(-1 * var(--privacy-guide-footer-total-height));display:flex;justify-content:flex-end;padding-bottom:var(--privacy-guide-footer-vertical-padding);position:absolute;width:calc(100% - 48px)}`]);
}
