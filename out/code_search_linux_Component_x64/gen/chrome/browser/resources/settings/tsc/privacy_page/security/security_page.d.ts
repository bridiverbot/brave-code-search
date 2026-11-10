import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../controls/collapse_radio_button.js';
import '../../controls/controlled_radio_button.js';
import '../../controls/settings_radio_group.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import '../../settings_page/settings_subpage.js';
import '../../simple_confirmation_dialog.js';
import './secure_dns.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsCollapseRadioButtonElement } from '../../controls/collapse_radio_button.js';
import type { SettingsRadioGroupElement } from '../../controls/settings_radio_group.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
import type { Route } from '../../router.js';
import { SafeBrowsingSetting } from './safe_browsing_types.js';
/**
 * Enumeration of all HTTPS-First Mode setting states. Must be kept in sync with
 * the enum of the same name located in:
 * chrome/browser/ssl/https_first_mode_settings_tracker.h
 */
export declare enum HttpsFirstModeSetting {
    DISABLED = 0,
    ENABLED_FULL = 2,
    ENABLED_BALANCED = 3
}
export interface SettingsSecurityPageElement {
    $: {
        passwordsLeakToggle: SettingsToggleButtonElement;
        safeBrowsingDisabled: SettingsCollapseRadioButtonElement;
        safeBrowsingEnhanced: SettingsCollapseRadioButtonElement;
        safeBrowsingRadioGroup: SettingsRadioGroupElement;
        safeBrowsingStandard: SettingsCollapseRadioButtonElement;
    };
}
declare const SettingsSecurityPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export type SecurityPageElement = SettingsSecurityPageElement;
export declare class SettingsSecurityPageElement extends SettingsSecurityPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the secure DNS setting should be displayed.
         */
        showSecureDnsSetting_: {
            type: BooleanConstructor;
        };
        /**
         * Setting for HTTPS-First Mode when the toggle is off.
         */
        httpsFirstModeUncheckedValues_: {
            type: ArrayConstructor;
        };
        javascriptOptimizerSubLabel_: {
            type: StringConstructor;
        };
        enableHttpsFirstModeNewSettings_: {
            type: BooleanConstructor;
        };
        enableSecurityKeysSubpage_: {
            type: BooleanConstructor;
        };
        enableHashPrefixRealTimeLookups_: {
            type: BooleanConstructor;
        };
        hideExtendedReportingRadioButton_: {
            type: BooleanConstructor;
        };
        showDisableSafebrowsingDialog_: {
            type: BooleanConstructor;
        };
        /**
         * A timestamp that records the last time the user visited this page or
         * returned to it.
         */
        lastFocusTime_: {
            type: NumberConstructor;
        };
        /** The total amount of time a user spent on the page in focus. */
        totalTimeInFocus_: {
            type: NumberConstructor;
        };
        /** Latest user interaction type on the security page. */
        lastInteraction_: {
            type: NumberConstructor;
        };
        /** Safe browsing state when the page opened. */
        safeBrowsingStateOnOpen_: {
            type: NumberConstructor;
        };
        /** Whether the user is currently on the security page or not. */
        isRouteSecurity_: {
            type: BooleanConstructor;
        };
        safeBrowsingPref_: {
            type: ObjectConstructor;
        };
        httpsFirstModePref_: {
            type: ObjectConstructor;
        };
        passwordLeakDetectionPref_: {
            type: ObjectConstructor;
        };
        passwordManagerLeakDetectionPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor showSecureDnsSetting_: boolean;
    protected accessor enableSecurityKeysSubpage_: boolean;
    protected accessor showDisableSafebrowsingDialog_: boolean;
    protected accessor enableHashPrefixRealTimeLookups_: boolean;
    protected accessor httpsFirstModeUncheckedValues_: HttpsFirstModeSetting[];
    protected accessor enableHttpsFirstModeNewSettings_: boolean;
    protected accessor javascriptOptimizerSubLabel_: string;
    private accessor lastFocusTime_;
    private accessor totalTimeInFocus_;
    private accessor lastInteraction_;
    private accessor safeBrowsingStateOnOpen_;
    private accessor isRouteSecurity_;
    private eventTracker_;
    protected accessor hideExtendedReportingRadioButton_: boolean;
    protected accessor safeBrowsingPref_: chrome.settingsPrivate.PrefObject<SafeBrowsingSetting> | undefined;
    protected accessor httpsFirstModePref_: chrome.settingsPrivate.PrefObject<HttpsFirstModeSetting> | undefined;
    protected accessor passwordLeakDetectionPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor passwordManagerLeakDetectionPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    private metricsBrowserProxy_;
    private siteBrowserProxy_;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route: Route, oldRoute?: Route): void;
    /** Call this function when the user switches to another tab. */
    private onBlur_;
    /** Call this function when the user returns to it from other tabs. */
    private onFocus_;
    /**
     * Trigger the securityPageHatsRequest api to potentially start the survey.
     */
    private onBeforeUnload_;
    /**
     * Updates the buttons' expanded status by propagating previous click
     * events
     */
    private updateCollapsedButtons_;
    private updateJavascriptOptimizerEnabledByDefault_;
    /**
     * Possibly displays the Safe Browsing disable dialog based on the users
     * selection.
     */
    protected onSafeBrowsingRadioChange_(): void;
    private interactedWithPage_;
    protected getDisabledExtendedSafeBrowsing_(): boolean;
    protected getSafeBrowsingStandardSubLabel_(): string;
    protected getPasswordsLeakToggleSubLabel_(): string;
    protected getName_(value: number): string;
    protected getHttpsFirstModeSubLabel_(): string;
    protected isHttpsFirstModeExpanded_(): boolean;
    protected onManageCertificatesClick_(): void;
    protected onAdvancedProtectionProgramLinkClick_(): void;
    protected onJavascriptOptimizerSettingsClick_(): void;
    protected onSecurityKeysClick_(): void;
    protected onEnhancedProtectionLearnMoreClick_(e: Event): void;
    protected onSafeBrowsingExtendedReportingChange_(): void;
    /**
     * Handles the closure of the disable safebrowsing dialog, reselects the
     * appropriate radio button if the user cancels the dialog, and puts focus on
     * the disable safebrowsing button.
     */
    protected onDisableSafebrowsingDialogClose_(): void;
    protected onEnhancedProtectionExpandClicked_(): void;
    protected onStandardProtectionExpandClicked_(): void;
    private recordInteractionHistogramOnRadioChange_;
    private recordInteractionHistogramOnExpandButtonClicked_;
    private recordInteractionHistogramOnSafeBrowsingDialogClose_;
    private recordActionOnRadioChange_;
    private recordActionOnExpandButtonClicked_;
    private recordActionOnSafeBrowsingDialogClose_;
    getFocusConfig(): Map<string, string>;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-security-page': SettingsSecurityPageElement;
    }
}
export {};
