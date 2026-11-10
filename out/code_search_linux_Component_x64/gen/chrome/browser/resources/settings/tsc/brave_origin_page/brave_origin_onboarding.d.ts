import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../settings_shared.css.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const SettingsBraveOriginOnboardingElementBase: {
    new (): PolymerElement & I18nMixinInterface;
};
/**
 * 'settings-brave-origin-onboarding' is the settings section for
 * introducing Brave Origin to users who don't have it enabled yet.
 */
export declare class SettingsBraveOriginOnboardingElement extends SettingsBraveOriginOnboardingElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    private onBuyNowClick_;
    private onRestorePurchaseClick_;
    private onLearnMoreClick_;
    private onProceedFreeClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-origin-onboarding': SettingsBraveOriginOnboardingElement;
    }
}
export {};
