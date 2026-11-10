import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PromotionBannerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private browserProxy_;
    protected onDismissPromotionClick_(): void;
    protected onPromotionRedirectClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'promotion-banner': PromotionBannerElement;
    }
}
