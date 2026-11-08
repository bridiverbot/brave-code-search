import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PromotionBannerSectionContainerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected onRedirectClick(): void;
    protected onDismissClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'promotion-banner-section-container': PromotionBannerSectionContainerElement;
    }
}
