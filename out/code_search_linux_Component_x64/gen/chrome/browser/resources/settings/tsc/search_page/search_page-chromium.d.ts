/**
 * @fileoverview
 * 'settings-search-page' is the settings page containing search settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import './extension_controlled_message.js';
import './search_engine_icon.js';
import './search_engine_list_dialog.js';
import './search_engine_more_engines_dialog.js';
import '../settings_page/settings_section.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
declare const SettingsSearchPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsSearchPageElement extends SettingsSearchPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        defaultSearchProviderDataPref_: {
            type: ObjectConstructor;
        };
        /**
         * List of search engines available in the search engine list dialog.
         */
        searchEngines_: {
            type: ArrayConstructor;
        };
        defaultSearchEngine_: {
            type: ObjectConstructor;
        };
        searchPageTitle_: {
            type: StringConstructor;
        };
        showSearchEngineListDialog_: {
            type: BooleanConstructor;
        };
        showMoreEnginesDialog_: {
            type: BooleanConstructor;
        };
        saveGuestChoice_: {
            type: BooleanConstructor;
        };
        confirmationToastLabel_: {
            type: StringConstructor;
        };
        searchSettingsUpdateEnabled_: {
            type: BooleanConstructor;
        };
        pickerWithMoreEnginesEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor defaultSearchProviderDataPref_: chrome.settingsPrivate.PrefObject | undefined;
    protected accessor searchEngines_: SearchEngine[];
    protected accessor showSearchEngineListDialog_: boolean;
    protected accessor showMoreEnginesDialog_: boolean;
    protected accessor saveGuestChoice_: boolean | null;
    protected accessor defaultSearchEngine_: SearchEngine | null;
    protected accessor searchSettingsUpdateEnabled_: boolean;
    protected accessor pickerWithMoreEnginesEnabled_: boolean;
    protected accessor searchPageTitle_: string;
    protected accessor confirmationToastLabel_: string;
    private browserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onManageSearchEnginesClick_(): void;
    protected isDefaultSearchControlledByPolicy_(): boolean;
    protected isDefaultSearchEngineEnforced_(): boolean;
    private computeSearchPageTitle_;
    private computeDefaultSearchEngine_;
    protected onOpenDialogButtonClick_(): void;
    protected onSaveGuestChoiceChanged_(e: CustomEvent<{
        value: boolean | null;
    }>): void;
    protected onSearchEngineChanged_(e: CustomEvent<{
        searchEngine: SearchEngine;
    }>): void;
    protected onSearchEngineListDialogClose_(): void;
    protected onMoreEnginesClick_(): void;
    protected onMoreEnginesDialogClose_(): void;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-page': SettingsSearchPageElement;
    }
}
export {};
