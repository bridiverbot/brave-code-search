import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import type { PropertyValues, TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import { SettingsClearBrowsingDataDialogElement as SettingsClearBrowsingDataDialogElementChromium } from './clear_browsing_data_dialog-chromium.js';
import '../brave_clear_browsing_data_dialog/brave_clear_browsing_data_on_exit_page.js';
import type { BraveClearBrowsingDataDialogBrowserProxy } from '../brave_clear_browsing_data_dialog/brave_clear_browsing_data_dialog_proxy.js';
declare module './clear_browsing_data_dialog-chromium.js' {
    interface SettingsClearBrowsingDataDialogElement {
        braveBrowserProxy_: BraveClearBrowsingDataDialogBrowserProxy;
        isClearingBraveAdsData_: boolean;
        tabNames_: string[];
        selectedTabIndex_: number;
        braveRewardsEnabled_: boolean;
        onExitSettingsModified_: boolean;
        showBraveDataOptions_: boolean;
        renderBraveTabs_(): TemplateResult;
        isDeleteNowTabSelected_(): boolean;
        isOnExitTabSelected_(): boolean;
        onSelectedTabChanged_(e: CustomEvent<{
            value: number;
        }>): void;
        onClearDataOnExitPageChange_(e: Event): void;
        onSaveOnExitSettingsClick_(): void;
        onClearBraveAdsDataClick_(e: Event): Promise<void>;
    }
}
declare class SettingsClearBrowsingDataDialogElement extends SettingsClearBrowsingDataDialogElementChromium {
    static get is(): string;
    static get properties(): {
        dataTypesExpanded_: {
            type: BooleanConstructor;
        };
        deletingDataAlertString_: {
            type: StringConstructor;
        };
        isDeletionInProgress_: {
            type: BooleanConstructor;
        };
        isNoDatatypeSelected_: {
            type: BooleanConstructor;
        };
        isGoogleDse_: {
            type: BooleanConstructor;
        };
        showHistoryDeletionDialog_: {
            type: BooleanConstructor;
        };
        showOtherGoogleDataDialog_: {
            type: BooleanConstructor;
        };
        expandedBrowsingDataTypeOptionsList_: {
            type: ArrayConstructor;
        };
        moreBrowsingDataTypeOptionsList_: {
            type: ArrayConstructor;
        };
        syncStatus_: {
            type: ObjectConstructor;
        };
        selectedTabIndex_: {
            type: NumberConstructor;
        };
        braveRewardsEnabled_: {
            type: BooleanConstructor;
        };
        onExitSettingsModified_: {
            type: BooleanConstructor;
        };
        showBraveDataOptions_: {
            type: BooleanConstructor;
        };
    };
    tabNames_: string[];
    accessor selectedTabIndex_: number;
    accessor braveRewardsEnabled_: boolean;
    accessor onExitSettingsModified_: boolean;
    accessor showBraveDataOptions_: boolean;
    braveBrowserProxy_: BraveClearBrowsingDataDialogBrowserProxy;
    isClearingBraveAdsData_: boolean;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    renderBraveTabs_(): TemplateResult;
    isDeleteNowTabSelected_(): boolean;
    isOnExitTabSelected_(): boolean;
    onSelectedTabChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    onClearDataOnExitPageChange_(e: Event): void;
    onSaveOnExitSettingsClick_(): void;
    onClearBraveAdsDataClick_(e: Event): Promise<void>;
}
export { SettingsClearBrowsingDataDialogElement };
export * from './clear_browsing_data_dialog-chromium.js';
