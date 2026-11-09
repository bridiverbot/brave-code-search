import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import './glic_login_permissions_page.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum SettingsGlicPageFeaturePrefName {
    CLOSED_CAPTIONS_ENABLED = "glic.closed_captioning_enabled",
    MEDIA_UNDERSTANDING_ENABLED = "glic.media_understanding_enabled",
    GEOLOCATION_ENABLED = "glic.geolocation_enabled",
    LAUNCHER_ENABLED = "glic.launcher_enabled",
    MICROPHONE_ENABLED = "glic.microphone_enabled",
    SETTINGS_POLICY = "browser.gemini_settings",
    TAB_CONTEXT_ENABLED = "glic.tab_context_enabled",
    TABSTRIP_BUTTON_ENABLED = "glic.pinned_to_tabstrip",
    USER_STATUS = "glic.user_status",
    DEFAULT_TAB_CONTEXT_ENABLED = "glic.default_tab_context_enabled",
    WEB_ACTUATION_ENABLED = "glic.user_enabled_actuation_on_web",
    EXPERIMENTAL_TRIGGERING_ENABLED = "glic.experimental_triggering_enabled",
    KEEP_SIDEPANEL_OPEN_ON_NEW_TABS_ENABLED = "glic.keep_sidepanel_open_on_new_tabs_enabled",
    SHAKE_TRIGGER_ENABLED = "glic.shake_trigger_enabled",
    HOTKEY_GLOBAL_SCOPE_ENABLED = "glic.hotkey_global_scope_enabled"
}
declare const SettingsGlicSubpageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsGlicSubpageElement extends SettingsGlicSubpageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disallowedByAdmin_: {
            type: BooleanConstructor;
        };
        userStatusPref_: {
            type: ObjectConstructor;
        };
        launcherEnabledPref_: {
            type: ObjectConstructor;
        };
        registeredShortcut_: {
            type: StringConstructor;
        };
        registeredFocusToggleShortcut_: {
            type: StringConstructor;
        };
        registeredSelectionShortcut_: {
            type: StringConstructor;
        };
        tabAccessToggleExpanded_: {
            type: BooleanConstructor;
        };
        closedCaptionsToggleEnabled_: {
            type: BooleanConstructor;
        };
        headlessCaptionsEnabled_: {
            type: BooleanConstructor;
        };
        glicExtensionsFeatureEnabled_: {
            type: BooleanConstructor;
        };
        glicUserStatusCheckFeatureEnabled_: {
            type: BooleanConstructor;
        };
        glicSelectionFeatureEnabled_: {
            type: BooleanConstructor;
        };
        glicHotkeyLocalScopeEnabled_: {
            type: BooleanConstructor;
        };
        showGlicDefaultTabContextSetting_: {
            type: BooleanConstructor;
        };
        showGlicExperimentalTriggering_: {
            type: BooleanConstructor;
        };
        experimentalTriggeringExpanded_: {
            type: BooleanConstructor;
        };
        showGlicPersonalContextLink_: {
            type: BooleanConstructor;
        };
        showGlicInstructionLink_: {
            type: BooleanConstructor;
        };
        showGlicKeepSidepanelOpenOnNewTabsSetting_: {
            type: BooleanConstructor;
        };
        showGlicShakeTrigger_: {
            type: BooleanConstructor;
        };
        microphoneToggleEnabled_: {
            type: BooleanConstructor;
        };
        defaultTabAccessToggleExpanded_: {
            type: BooleanConstructor;
        };
        webActuationFeatureEnabled_: {
            type: BooleanConstructor;
        };
        webActuationEnabledPref_: {
            type: ObjectConstructor;
        };
        isWebActuationDisabledForEnterprise_: {
            type: BooleanConstructor;
        };
        webActuationEnabledExpanded_: {
            type: BooleanConstructor;
        };
        actorLoginFederatedLoginSupportEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor disallowedByAdmin_: boolean;
    private accessor userStatusPref_;
    private accessor launcherEnabledPref_;
    private accessor webActuationEnabledPref_;
    protected accessor registeredShortcut_: string;
    protected accessor registeredFocusToggleShortcut_: string;
    protected accessor registeredSelectionShortcut_: string;
    protected accessor tabAccessToggleExpanded_: boolean;
    protected accessor closedCaptionsToggleEnabled_: boolean;
    protected accessor headlessCaptionsEnabled_: boolean;
    protected accessor glicExtensionsFeatureEnabled_: boolean;
    protected accessor glicUserStatusCheckFeatureEnabled_: boolean;
    protected accessor glicSelectionFeatureEnabled_: boolean;
    protected accessor glicHotkeyLocalScopeEnabled_: boolean;
    protected accessor showGlicDefaultTabContextSetting_: boolean;
    protected accessor showGlicExperimentalTriggering_: boolean;
    protected accessor experimentalTriggeringExpanded_: boolean;
    protected accessor showGlicPersonalContextLink_: boolean;
    protected accessor showGlicInstructionLink_: boolean;
    protected accessor showGlicKeepSidepanelOpenOnNewTabsSetting_: boolean;
    protected accessor showGlicShakeTrigger_: boolean;
    protected accessor microphoneToggleEnabled_: boolean;
    protected accessor defaultTabAccessToggleExpanded_: boolean;
    protected accessor webActuationFeatureEnabled_: boolean;
    protected accessor isWebActuationDisabledForEnterprise_: boolean;
    protected accessor webActuationEnabledExpanded_: boolean;
    protected accessor actorLoginFederatedLoginSupportEnabled_: boolean;
    private shortcutInput_;
    private focusToggleShortcutInput_;
    private selectionShortcutInput_;
    private removedShortcut_;
    private browserProxy_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onDisallowedByAdminChanged_;
    protected onLauncherToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected getMainShortcutOpened_(): boolean;
    protected onScopeToggleSettingsBooleanControlChange_(event: Event): void;
    protected onGeolocationToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onMicrophoneToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onShortcutUpdated_(event: CustomEvent<string>): Promise<void>;
    protected onFocusToggleShortcutUpdated_(event: CustomEvent<string>): Promise<void>;
    protected onSelectionShortcutUpdated_(event: CustomEvent<string>): Promise<void>;
    private recordShortcutEnablement;
    protected onInputCaptureChange_(event: CustomEvent<boolean>): void;
    protected onTabAccessToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onTabAccessExpandClick_(): void;
    protected onTabAccessToggleExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDefaultTabAccessExpandClick_(): void;
    protected onDefaultTabAccessToggleExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDefaultTabAccessToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onKeepSidepanelOpenOnNewTabsSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onShakeTriggerToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onActivityRowClick_(): void;
    protected onActorLoginPermissionsRowClick_(): void;
    protected onExtensionsRowClick_(): void;
    protected onShortcutsLearnMoreClick_(): void;
    protected onLauncherToggleLearnMoreClicked_(): void;
    protected onLocationToggleLearnMoreClicked_(): void;
    protected onTabAccessToggleLearnMoreClicked_(): void;
    protected onTabAccessLearnMoreClick_(): void;
    protected onDefaultTabAccessToggleSubLabelLinkClicked_(): void;
    protected onGeminiPersonalContextClick_(): void;
    private disallowedByAdminChanged_;
    protected onClosedCaptionsToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onTabstripButtonToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected isEnterpriseAccountDataProtected_(): boolean;
    protected getLocationSubLabel_(): string;
    protected getLocationLearnMoreUrl_(): string;
    protected getMicrophoneSubLabel_(): string;
    protected getTabAccessSubLabel_(): string;
    protected getTabAccessLearnMoreUrl_(): string;
    protected getDefaultTabAccessSubLabel_(): string;
    private getDefaultTabAccessLearnMoreUrl_;
    focusBackButton(): void;
    getAssociatedControlFor(childViewId: string): HTMLElement;
    protected onWebActuationToggleSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onWebActuationEnabledExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onExperimentalTriggeringSettingsBooleanControlChange_(event: CustomEvent<boolean>): void;
    protected onExperimentalTriggeringExpandClick_(): void;
    protected onExperimentalTriggeringExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onExperimentalTriggeringToggleSubLabelLinkClicked_(): void;
    protected getExperimentalTriggeringSubLabel_(): string;
    protected onWebActuationExpandClick_(): void;
    protected onWebActuationToggleSubLabelLinkClicked_(): void;
    protected getWebActuationSubLabel_(): TrustedHTML;
    protected getWebActuationToggleConsider_(): TrustedHTML;
    private getWebActuationLearnMoreUrl_;
    private onWebActuationDisabledForEnterpriseChanged_;
    private onWebActuationToggleVisibilityChanged_;
    protected isExperimentalTriggeringDisabled_(): boolean;
    protected onMediaUnderstandingToggleSubLabelLinkClicked_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-glic-subpage': SettingsGlicSubpageElement;
    }
}
export {};
