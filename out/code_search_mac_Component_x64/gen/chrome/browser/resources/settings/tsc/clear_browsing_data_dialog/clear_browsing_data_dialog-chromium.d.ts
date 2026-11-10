/**
 * @fileoverview 'settings-clear-browsing-data-dialog' allows the user to
 * delete browsing data that has been cached by Chromium.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_checkbox.js';
import './clear_browsing_data_account_indicator.js';
import './clear_browsing_data_time_picker.js';
import './history_deletion_dialog.js';
import './other_google_data_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import { BrowsingDataType } from './clear_browsing_data_browser_proxy.js';
import type { SettingsClearBrowsingDataTimePickerElement } from './clear_browsing_data_time_picker.js';
export interface SettingsClearBrowsingDataDialogElement {
    $: {
        cancelButton: CrButtonElement;
        deleteButton: CrButtonElement;
        deleteBrowsingDataDialog: CrDialogElement;
        deletingDataAlert: HTMLElement;
        manageOtherGoogleDataRow: CrLinkRowElement;
        moreOptionsList: HTMLElement;
        showMoreButton: CrButtonElement;
        spinner: HTMLElement;
        timePicker: SettingsClearBrowsingDataTimePickerElement;
    };
}
/**
 * The list of all available Browsing Data types in the default order they
 * should appear in the dialog.
 */
export declare const ALL_BROWSING_DATATYPES_LIST: BrowsingDataType[];
export interface BrowsingDataTypeOption {
    label: string;
    subLabel?: string;
    prefKey: string;
}
export declare function getDataTypeLabel(datatypes: BrowsingDataType): string;
export declare function getDataTypePrefName(datatypes: BrowsingDataType): "browser.clear_data.brave_leo" | "browser.clear_data.browsing_history" | "browser.clear_data.cache" | "browser.clear_data.cookies" | "browser.clear_data.download_history" | "browser.clear_data.form_data" | "browser.clear_data.hosted_apps_data" | "browser.clear_data.site_settings" | "browser.clear_data.skills";
declare const SettingsClearBrowsingDataDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsClearBrowsingDataDialogElement extends SettingsClearBrowsingDataDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
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
    };
    protected accessor dataTypesExpanded_: boolean;
    protected accessor deletingDataAlertString_: string;
    protected accessor isDeletionInProgress_: boolean;
    private accessor isNoDatatypeSelected_;
    private accessor isGoogleDse_;
    protected accessor showHistoryDeletionDialog_: boolean;
    protected accessor showOtherGoogleDataDialog_: boolean;
    protected accessor expandedBrowsingDataTypeOptionsList_: BrowsingDataTypeOption[];
    protected accessor moreBrowsingDataTypeOptionsList_: BrowsingDataTypeOption[];
    private accessor syncStatus_;
    private clearBrowsingDataBrowserProxy_;
    private syncBrowserProxy_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private updateDseStatus_;
    private handleSyncStatus_;
    private onSyncStatusChanged_;
    currentRouteChanged(currentRoute: Route): void;
    private setUpDataTypeOptionLists_;
    /**
     * Updates the text of a browsing data counter corresponding to the given
     * preference.
     * @param prefName Browsing data type deletion preference.
     * @param text The text with which to update the counter.
     */
    private updateCounterText_;
    private isSignedIn_;
    private shouldDataTypeBeExpanded_;
    protected computeDeleteButtonLabel_(): string;
    protected computeOtherGoogleDataRowLabel_(): string;
    protected computeOtherGoogleDataRowSubLabel_(): string;
    protected onSelectedTimePeriodChange_(): void;
    protected onCancelClick_(): void;
    protected onDialogCancel_(): void;
    /**
     * Triggers browsing data deletion on the selected DataTypes and within the
     * selected TimePeriod.
     */
    protected onDeleteBrowsingDataClick_(): Promise<void>;
    private showDeletionConfirmationToast_;
    private getSelectedDataTypes_;
    private updateDeleteButtonState_;
    protected onShowMoreClick_(): void;
    protected shouldHideShowMoreButton_(): boolean;
    protected shouldDisableDeleteButton_(): boolean;
    protected onHistoryDeletionDialogClose_(): void;
    protected onManageOtherGoogleDataRowClick_(): void;
    private setFocusOutlineToVisible_;
    protected onOtherGoogleDataDialogCancel_(e: Event): void;
    protected onSubLabelLinkClicked_(e: CustomEvent<{
        id: string;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-clear-browsing-data-dialog': SettingsClearBrowsingDataDialogElement;
    }
}
export {};
