import './brave_extensions_manifest_v2_subpage.js';
import { PrefServiceObserverMixinInterface } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { SettingsCheckboxElement } from '../controls/settings_checkbox.js';
import { SettingsViewMixinInterface } from '../settings_page/settings_view_mixin.js';
import { SearchableViewContainerMixinInterface } from '../settings_page/searchable_view_container_mixin.js';
declare const SettingBraveDefaultExtensionsPageElementBase: {
    new (): PolymerElement & WebUiListenerMixinInterface & PrefServiceObserverMixinInterface & SearchableViewContainerMixinInterface & SettingsViewMixinInterface;
};
export interface SettingBraveDefaultExtensionsPageElement {
    $: {
        widevineEnabled: SettingsCheckboxElement;
        viewManager: CrViewManagerElement;
    };
}
/**
 * 'settings-brave-default-extensions-page' is the settings page containing
 * brave's default extensions.
 */
export declare class SettingBraveDefaultExtensionsPageElement extends SettingBraveDefaultExtensionsPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        showRestartToast_: BooleanConstructor;
        googleLoginPref_: ObjectConstructor;
        mediaRouterPref_: ObjectConstructor;
        widevineEnabled_: BooleanConstructor;
        isExtensionsManifestV2FeatureEnabled_: {
            value: () => boolean;
        };
    };
    private browserProxy_;
    showRestartToast_: boolean;
    googleLoginPref_: chrome.settingsPrivate.PrefObject<boolean>;
    mediaRouterPref_: chrome.settingsPrivate.PrefObject<boolean>;
    widevineEnabled_: boolean;
    isExtensionsManifestV2FeatureEnabled_: boolean;
    connectedCallback(): void;
    ready(): void;
    getAssociatedControlFor(childViewId: string): HTMLElement;
    restartBrowser_(e: Event): void;
    onWidevineEnabledChange_(): void;
    openManageV2ExtensionPage_(): void;
    openExtensionsPage_(): void;
    openKeyboardShortcutsPage_(): void;
    openWebStoreUrl_(): void;
    shouldShowRestartForGoogleLogin_(value: boolean): boolean;
    shouldShowRestartForMediaRouter_(value: boolean): boolean;
}
export {};
