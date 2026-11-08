/**
 * @fileoverview 'settings-search-engine-entry' is a component for showing a
 * search engine with its name, domain and query URL.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './search_engine_icon.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
declare const SettingsSearchEngineEntryElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsSearchEngineEntryElement extends SettingsSearchEngineEntryElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        engine: {
            type: ObjectConstructor;
        };
        defaultSearchProviderDataPref_: {
            type: ObjectConstructor;
        };
        showShortcut: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showQueryUrl: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isDefault: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchSettingsUpdateEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor engine: SearchEngine;
    accessor showShortcut: boolean;
    accessor showQueryUrl: boolean;
    accessor isDefault: boolean;
    protected accessor defaultSearchProviderDataPref_: chrome.settingsPrivate.PrefObject | undefined;
    protected accessor searchSettingsUpdateEnabled_: boolean;
    private browserProxy_;
    private extensionBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private closePopupMenu_;
    private isDefaultEngineManagedByExtension_;
    protected showEditOption_(): boolean;
    protected shouldShowEditIcon_(): boolean;
    protected shouldShowSecondaryButton_(): boolean;
    protected shouldDisableDots_(): boolean;
    protected turnOnLabel_(): string;
    protected turnOffLabel_(): string;
    protected showDeactivateOption_(): boolean;
    protected showDeleteOption_(): boolean;
    protected showMakeDefaultOption_(): boolean;
    protected showDisableExtensionOption_(): boolean;
    protected showControlledIndicator_(): boolean;
    protected onManageClick_(): void;
    protected onDisableClick_(): void;
    protected onDeleteClick_(e: Event): void;
    protected onDotsClick_(): void;
    protected onViewOrEditClick_(e: Event): void;
    protected onMakeDefaultClick_(): void;
    protected onActivateClick_(): void;
    protected onDeactivateClick_(): void;
    protected getMoreActionsAriaLabel_(): string;
    protected getActivateButtonAriaLabel_(): string;
    protected getEditButtonAriaLabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engine-entry': SettingsSearchEngineEntryElement;
    }
}
export {};
