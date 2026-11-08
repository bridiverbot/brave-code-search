/**
 * @fileoverview
 * 'personalization-options' contains several toggles related to
 * personalizations.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '../controls/settings_toggle_button.js';
import '../people_page/signout_dialog.js';
import '../relaunch_confirmation_dialog.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ChromeSigninUserChoiceInfo, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import type { MetricsReporting } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
export interface SettingsPersonalizationOptionsElement {
    $: {};
}
declare const SettingsPersonalizationOptionsElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export type PersonalizationOptionsElement = SettingsPersonalizationOptionsElement;
export declare class SettingsPersonalizationOptionsElement extends SettingsPersonalizationOptionsElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        syncStatus: {
            type: ObjectConstructor;
        };
        metricsReporting_: {
            type: ObjectConstructor;
        };
        showRestart_: {
            type: BooleanConstructor;
        };
        showSearchAggregatorSuggest_: {
            type: BooleanConstructor;
        };
        showSignoutDialog_: {
            type: BooleanConstructor;
        };
        shouldUseMetricsConsentRestructure_: {
            type: BooleanConstructor;
        };
        syncFirstSetupInProgress_: {
            type: BooleanConstructor;
        };
        signinAvailable_: {
            type: BooleanConstructor;
        };
        chromeSigninUserChoiceInfo_: {
            type: ObjectConstructor;
        };
        spellCheckDictionariesPref_: {
            type: ObjectConstructor;
        };
    };
    accessor syncStatus: SyncStatus;
    protected accessor metricsReporting_: MetricsReporting | undefined;
    protected accessor showRestart_: boolean;
    protected accessor showSearchAggregatorSuggest_: boolean;
    protected accessor showSignoutDialog_: boolean;
    protected accessor syncFirstSetupInProgress_: boolean;
    protected accessor shouldUseMetricsConsentRestructure_: boolean;
    protected accessor signinAvailable_: boolean;
    protected accessor chromeSigninUserChoiceInfo_: ChromeSigninUserChoiceInfo | undefined;
    protected accessor spellCheckDictionariesPref_: chrome.settingsPrivate.PrefObject<string[]> | undefined;
    private browserProxy_;
    private syncBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private computeSyncFirstSetupInProgress_;
    protected showPriceEmailNotificationsToggle_(): boolean;
    protected getPriceEmailNotificationsPrefDesc_(): string;
    protected onMetricsReportingChange_(e: Event): void;
    private setMetricsReporting_;
    protected showSearchSuggestToggle_(): boolean;
    protected onSignoutDialogClose_(): void;
    protected onRestartClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-personalization-options': SettingsPersonalizationOptionsElement;
    }
}
export {};
