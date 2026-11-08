import type { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
export interface PrivacyGuideAvailabilityMixinInterface extends WebUiListenerMixinInterface {
    isPrivacyGuideAvailable: boolean;
}
export declare const PrivacyGuideAvailabilityMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<PrivacyGuideAvailabilityMixinInterface>;
export {};
