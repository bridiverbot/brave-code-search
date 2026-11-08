import type { FeaturePromoFeatureUsedAction, FeaturePromoParams, UserEducationMixedTrustHandlerInterface } from '//resources/mojo/components/user_education/webui/user_education.mojom-webui.js';
import { TestBrowserProxy } from './test_browser_proxy.js';
export declare class TestUserEducationMixedTrustHandler extends TestBrowserProxy implements UserEducationMixedTrustHandlerInterface {
    private showNewBadgeResponses_;
    constructor();
    maybeShowFeaturePromo(params: FeaturePromoParams): void;
    notifyFeaturePromoFeatureUsed(featureName: string, action: FeaturePromoFeatureUsedAction): void;
    notifyAdditionalConditionEvent(name: string): void;
    notifyNewBadgeFeatureUsed(featureName: string): void;
    setNewBadgeResponse(featureName: string, response: boolean): void;
    maybeShowNewBadgeFor(featureName: string): Promise<{
        shouldShow: boolean;
    }>;
}
