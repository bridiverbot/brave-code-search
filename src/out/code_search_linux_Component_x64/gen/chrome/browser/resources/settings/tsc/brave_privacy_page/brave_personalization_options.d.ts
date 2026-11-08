import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PrefServiceObserverMixinInterface } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { BravePrivacyBrowserProxy } from './brave_privacy_page_browser_proxy.js';
import '/shared/settings/md_select.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/settings_dropdown_menu.js';
import '../privacy_page/do_not_track_toggle.js';
declare const SettingsBravePersonalizationOptionsBase: {
    new (): PolymerElement & WebUiListenerMixinInterface & PrefServiceObserverMixinInterface;
};
export declare class SettingsBravePersonalizationOptions extends SettingsBravePersonalizationOptionsBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        webRTCPolicies_: {
            readOnly: boolean;
            type: ArrayConstructor;
            value: () => {
                value: string;
                name: string;
            }[];
        };
        webRTCPolicy_: StringConstructor;
        historyRetentionOptions_: {
            readOnly: boolean;
            type: ArrayConstructor;
            value: () => {
                value: number;
                name: string;
            }[];
        };
        isDebounceFeatureEnabled_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        isRequestOTRFeatureEnabled_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        isPsstFeatureEnabled_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        isSemanticHistorySearchAvailable_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        isOnDeviceSpeechModelAvailable_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        semanticHistorySearchPref_: ObjectConstructor;
        requestOTRActions_: {
            readOnly: boolean;
            type: ArrayConstructor;
            value: () => {
                value: number;
                name: string;
            }[];
        };
        requestOTRAction_: StringConstructor;
        pushMessagingPref_: ObjectConstructor;
        isWindowsRecallAvailable_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        windowsRecallDisabled_: BooleanConstructor;
    };
    private webRTCPolicies_;
    private webRTCPolicy_;
    private historyRetentionOptions_;
    private isDebounceFeatureEnabled_;
    private isRequestOTRFeatureEnabled_;
    private isPsstFeatureEnabled_;
    private isSemanticHistorySearchAvailable_;
    private isOnDeviceSpeechModelAvailable_;
    private semanticHistorySearchPref_;
    private requestOTRActions_;
    private requestOTRAction_;
    private pushMessagingPref_;
    private isWindowsRecallAvailable_;
    private windowsRecallDisabled_;
    browserProxy_: BravePrivacyBrowserProxy;
    shouldShowRestart_(enabled: boolean): boolean;
    shouldShowRestartWindowsRecall_(disabled: boolean): boolean;
    shouldShowRestartSemanticHistorySearch_(enabled: boolean): boolean;
    windowsRecallDisabledChange_(event: Event): void;
    setWindowsRecallDisabled_(disabled: boolean): void;
    restartBrowser_(e: Event): void;
    connectedCallback(): void;
    ready(): void;
}
export {};
