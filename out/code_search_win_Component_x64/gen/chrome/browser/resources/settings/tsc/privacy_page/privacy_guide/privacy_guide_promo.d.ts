/**
 * @fileoverview
 * 'settings-privacy-guide-promo' is an element representing a promo for the
 * privacy guide feature.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PrivacyGuidePromoElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private metricsBrowserProxy_;
    protected onPrivacyGuideStartClick_(): void;
    protected onNoThanksButtonClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-privacy-guide-promo': PrivacyGuidePromoElement;
    }
}
