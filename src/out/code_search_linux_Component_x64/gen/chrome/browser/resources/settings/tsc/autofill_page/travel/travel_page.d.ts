/**
 * @fileoverview 'settings-travel-page', is a subpage of the "Your saved info"
 * section. It manages the user's autofill data for traveling. Users can add,
 * edit, or delete their saved document details, as well as opt out of the
 * autofill functionality entirely.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../../controls/settings_toggle_button.js';
import '../../settings_page/settings_subpage.js';
import '../autofill_ai_entries_list.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { EntityTypeName } from '../../autofill_ai_enums.mojom-webui.js';
import type { SettingsToggleButtonElement } from '../../controls/settings_toggle_button.js';
export interface SettingsTravelPageElement {
    $: {
        optInToggle: SettingsToggleButtonElement;
    };
}
declare const SettingsTravelPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsTravelPageElement extends SettingsTravelPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        allowedEntityTypes_: {
            type: ObjectConstructor;
        };
        /**
         * If true, Autofill AI does not depend on whether Autofill for addresses
         * is enabled.
         */
        autofillSettingsEnterprisePolicyEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * Controls whether the user can use Autofill AI (in this context travel
         * info filling). As an example, this can be false if the extensions API
         * disables the feature.
         */
        canEnableOrDisableAutofillAi_: {
            type: BooleanConstructor;
        };
        metricEntityTypes_: {
            type: ObjectConstructor;
        };
        profileEnabledPref_: {
            type: ObjectConstructor;
        };
        showSuggestionsFromGeminiSettings_: {
            type: BooleanConstructor;
        };
        /**
         * Fake preference used by `this.$.optInToggle`. Shows value of
         * `autofill.autofill_ai.travel_entities_enabled` preference if toggle
         * is enabled (clickable). If toggle is disabled then the value is
         * overridden to be shown as false even if the preference is true.
         */
        travelOptedInPref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor allowedEntityTypes_: Set<EntityTypeName>;
    protected accessor metricEntityTypes_: Partial<Record<EntityTypeName, string>>;
    private accessor canEnableOrDisableAutofillAi_;
    protected accessor travelOptedInPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    private accessor autofillSettingsEnterprisePolicyEnabled_;
    protected accessor profileEnabledPref_: chrome.settingsPrivate.PrefObject<boolean> | null;
    protected accessor showSuggestionsFromGeminiSettings_: boolean;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    protected optInToggleDisabled_(): boolean;
    private updateTravelOptedIn_;
    protected onOptInToggleSettingsBooleanControlChange_(): void;
    protected extensionControlledIndicatorIsVisible_(): boolean;
    protected onSuggestionsFromGeminiClick_(): void;
    getFocusConfig(): Map<any, any>;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-travel-page': SettingsTravelPageElement;
    }
}
export {};
