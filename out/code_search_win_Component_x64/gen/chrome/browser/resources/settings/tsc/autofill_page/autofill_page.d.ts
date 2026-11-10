/**
 * @fileoverview
 * 'settings-autofill-page' is the entry point for users to see
 * and manage their saved info.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './account_card.js';
import './category_reference_card.js';
import './collapsible_autofill_settings_card.js';
import '../settings_page/settings_section.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { YourSavedInfoDataCategory, YourSavedInfoDataChip } from '../metrics_browser_proxy.js';
import type { DataCategoryClickEvent, DataChipClickEvent } from './category_reference_card.js';
/**
 * A complete set of data chips, organized into categories, with presentation
 * order in the UI.
 */
interface DataTypeHierarchy {
    passwordManager: DataCategory;
    payments: DataCategory;
    contactInfo: DataCategory;
    identityDocs: DataCategory;
    travel: DataCategory;
    shopping: DataCategory;
}
interface DataCategory {
    id: YourSavedInfoDataCategory;
    chips: DataChip[];
}
/**
 * Represents a single chip for a saved data type, showing a label, icon,
 * and the number of items.
 */
export interface DataChip {
    id: YourSavedInfoDataChip;
    label: string;
    icon: string;
    count?: number;
    isVisibleWhenNoEntitiesOfTypeExists: () => boolean;
}
declare const SettingsAutofillPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAutofillPageElement extends SettingsAutofillPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hierarchy_: {
            type: ObjectConstructor;
        };
        isShoppingEnabled_: {
            type: BooleanConstructor;
        };
        showSuggestionsFromGeminiSettings_: {
            type: BooleanConstructor;
        };
        spark_: {
            type: StringConstructor;
        };
    };
    protected accessor hierarchy_: DataTypeHierarchy;
    protected accessor isShoppingEnabled_: boolean;
    protected accessor showSuggestionsFromGeminiSettings_: boolean;
    protected accessor spark_: string;
    private dataChipIdToChip_;
    private dataChipIdToCategory_;
    private availableAutofillAiTypes_;
    private paymentsManager_;
    private autofillManager_;
    private autofillAiEntityManager_;
    private metricsBrowserProxy_;
    private setPersonalDataListener_;
    private onAutofillAiEntitiesChangedListener_;
    constructor();
    connectedCallback(): void;
    private initializeDataTypeHierarchy_;
    private setupDataTypeCounters;
    private onAutofillAiEntitiesChanged;
    disconnectedCallback(): void;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
    private setChipCount_;
    protected getVisibleChips_(chips: DataChip[]): DataChip[];
    private hasVisibleChips_;
    protected onDataCategoryClick_(e: DataCategoryClickEvent): void;
    protected onDataChipClick_(e: DataChipClickEvent): void;
    /**
     * Navigate to the settings sub page corresponding to a data category.
     */
    private navigateToLeafPage_;
    protected onSuggestionsFromGeminiClick_(): void;
    /**
     * Opens Password Manager page on clicking a related service link.
     */
    protected onPasswordManagerRelatedServiceClick_(): void;
    /**
     * Opens Wallet page in a new tab.
     */
    protected onGoogleWalletRelatedServiceClick_(): void;
    /**
     * Opens Google Account page in a new tab.
     */
    protected onGoogleAccountRelatedServiceClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-autofill-page': SettingsAutofillPageElement;
    }
}
export {};
