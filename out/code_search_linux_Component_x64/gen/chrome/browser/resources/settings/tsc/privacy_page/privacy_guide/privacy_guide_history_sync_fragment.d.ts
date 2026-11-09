/**
 * @fileoverview
 * 'privacy-guide-history-sync-fragment' is the fragment in a privacy guide
 * card that contains the history sync setting and its description.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import type { SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
import type { Route } from '../../router.js';
export interface PrivacyGuideHistorySyncFragmentElement {
    $: {
        historyToggle: SettingsToggleButtonElement;
    };
}
declare const PrivacyGuideHistorySyncFragmentElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../../router.js").RouteObserverMixinInterface);
export declare class PrivacyGuideHistorySyncFragmentElement extends PrivacyGuideHistorySyncFragmentElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        syncStatus_: {
            type: ObjectConstructor;
        };
    };
    private syncBrowserProxy_;
    private syncPrefs_;
    private syncAllCache_;
    private metricsBrowserProxy_;
    private startStateHistorySyncOn_;
    private firstSyncPrefUpdate_;
    protected accessor syncStatus_: SyncStatus | null;
    connectedCallback(): void;
    focus(): void;
    private onViewEnterStart_;
    private onViewExitFinish_;
    currentRouteChanged(newRoute: Route): void;
    private onSyncStatusChanged_;
    private onSyncPrefsChange_;
    private updateHistorySyncVirtualPrefValue_;
    protected onToggleChange_(): void;
    /**
     * If sync all was on when the user reached the history sync card, then
     * disabling and re-enabling history sync while on the card should also
     * re-enable sync all in case all other sync datatypes are also still on.
     */
    private shouldSyncAllBeOn_;
    /**
     * The header for the history sync card. It changes depending on whether the
     * user is signed in.
     */
    protected getHistorySyncCardHeader_(): string;
    /**
     * The label for the history sync toggle. It changes depending on whether the
     * user is signed in.
     */
    protected getHistorySyncToggleLabel_(): string;
    /**
     * The first line of the feature description. It changes depending on whether
     * the user is signed in.
     */
    protected getHistorySyncFeatureDescription1_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'privacy-guide-history-sync-fragment': PrivacyGuideHistorySyncFragmentElement;
    }
}
export {};
