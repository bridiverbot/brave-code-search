export declare const MAX_PRIVACY_GUIDE_PROMO_IMPRESSION: number;
export interface PrivacyGuideBrowserProxy {
    /** @return The number of times the privacy guide promo was shown. */
    getPromoImpressionCount(): number;
    /** Increment The number of times the privacy guide promo was shown. */
    incrementPromoImpressionCount(): void;
}
export declare class PrivacyGuideBrowserProxyImpl implements PrivacyGuideBrowserProxy {
    getPromoImpressionCount(): number;
    incrementPromoImpressionCount(): void;
    static getInstance(): PrivacyGuideBrowserProxy;
    static setInstance(obj: PrivacyGuideBrowserProxy): void;
}
