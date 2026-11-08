import type { WebUiListenerMixinLitInterface } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const PrivacyGuideAvailabilityMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<PrivacyGuideAvailabilityMixinLitInterface>;
export interface PrivacyGuideAvailabilityMixinLitInterface extends WebUiListenerMixinLitInterface {
    isPrivacyGuideAvailable: boolean;
}
export {};
