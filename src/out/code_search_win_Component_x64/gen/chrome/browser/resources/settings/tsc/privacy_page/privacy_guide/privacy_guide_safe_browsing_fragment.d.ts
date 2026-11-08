/**
 * @fileoverview
 * 'privacy-guide-safe-browsing-fragment' is the fragment in a privacy
 * guide card that contains the safe browsing settings and their descriptions.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/collapse_radio_button.js';
import '../../controls/settings_radio_group.js';
import '../../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const PrivacyGuideSafeBrowsingFragmentElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class PrivacyGuideSafeBrowsingFragmentElement extends PrivacyGuideSafeBrowsingFragmentElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private metricsBrowserProxy_;
    private startStateEnhanced_;
    private enableHashPrefixRealTimeLookups_;
    connectedCallback(): void;
    focus(): void;
    private onViewEnterStart_;
    private onViewExitFinish_;
    protected onSafeBrowsingEnhancedClick_(): void;
    protected onSafeBrowsingStandardClick_(): void;
    protected getSafeBrowsingStandardSubLabel_(): string;
    private getStandardProtectionFeatureDescription2_;
    private getStandardProtectionPrivacyDescription1_;
}
declare global {
    interface HTMLElementTagNameMap {
        'privacy-guide-safe-browsing-fragment': PrivacyGuideSafeBrowsingFragmentElement;
    }
}
export {};
