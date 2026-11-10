/**
 * @fileoverview
 * 'settings-privacy-guide-page' is the settings page that helps users guide
 * various privacy settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './privacy_guide_completion_fragment.js';
import './privacy_guide_cookies_fragment.js';
import './privacy_guide_history_sync_fragment.js';
import './privacy_guide_msbb_fragment.js';
import './privacy_guide_safe_browsing_fragment.js';
import './privacy_guide_welcome_fragment.js';
import './step_indicator.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../../router.js';
import { PrivacyGuideStep } from './constants.js';
import type { StepIndicatorModel } from './step_indicator.js';
export interface SettingsPrivacyGuidePageElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
declare const PrivacyGuideBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("./privacy_guide_availability_mixin_lit.js").PrivacyGuideAvailabilityMixinLitInterface) & (new (...args: any[]) => import("../../router.js").RouteObserverMixinInterface);
export declare class SettingsPrivacyGuidePageElement extends PrivacyGuideBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        privacyGuideStep_: {
            type: StringConstructor;
        };
        stepIndicatorModel_: {
            type: ObjectConstructor;
        };
        syncStatus_: {
            type: ObjectConstructor;
        };
        translateMultiplier_: {
            type: NumberConstructor;
        };
    };
    protected accessor privacyGuideStep_: PrivacyGuideStep;
    protected accessor stepIndicatorModel_: StepIndicatorModel;
    private accessor syncStatus_;
    protected accessor translateMultiplier_: number;
    private animationsEnabled_;
    private metricsBrowserProxy_;
    private syncBrowserProxy_;
    private privacyGuideStepToComponentsMap_;
    constructor();
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    disableAnimationsForTesting(): void;
    /** RouteObserverMixinLit */
    currentRouteChanged(newRoute: Route): void;
    /**
     * @return the map of privacy guide steps to their components.
     */
    private computePrivacyGuideStepToComponentsMap_;
    private exitIfNecessary;
    /** Handler for when the sync state is pushed from the browser. */
    private onSyncStatusChanged_;
    /** Update the privacy guide state based on changed prefs. */
    private onPrefsChanged_;
    private navigateForwardIfCurrentCardNoLongerAvailable;
    /** Sets the privacy guide step from the URL parameter. */
    private updateStateFromQueryParameters_;
    protected onNextButtonClick_(): void;
    protected onStartButtonClick_(): void;
    private recordEligibleSteps_;
    private navigateForward_;
    protected onBackButtonClick_(): void;
    private navigateBackward_;
    private navigateToCard_;
    protected computeBackButtonClass_(): string;
    computeStepIndicatorModel(): StepIndicatorModel;
    private shouldShowHistorySyncCard_;
    private shouldShowCookiesCard_;
    private shouldShowSafeBrowsingCard_;
    protected showAnySettingFragment_(): boolean;
    protected onKeydown_(event: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-privacy-guide-page': SettingsPrivacyGuidePageElement;
    }
}
export {};
