import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './data_collectors.js';
import './issue_details.js';
import './spinner_page.js';
import './pii_selection.js';
import './data_export_done.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PiiDataItem, StartDataCollectionResult } from './browser_proxy.js';
import type { DataCollectorsElement } from './data_collectors.js';
import type { DataExportDoneElement } from './data_export_done.js';
import type { IssueDetailsElement } from './issue_details.js';
import type { PiiSelectionElement } from './pii_selection.js';
import type { SpinnerPageElement } from './spinner_page.js';
export declare enum SupportToolPageIndex {
    ISSUE_DETAILS = 0,
    DATA_COLLECTOR_SELECTION = 1,
    SPINNER = 2,
    PII_SELECTION = 3,
    EXPORT_SPINNER = 4,
    DATA_EXPORT_DONE = 5
}
export interface DataExportResult {
    success: boolean;
    path: string;
    error: string;
}
export interface SupportToolElement {
    $: {
        continueButton: CrButtonElement;
        continueButtonContainer: HTMLElement;
        issueDetails: IssueDetailsElement;
        dataCollectors: DataCollectorsElement;
        spinnerPage: SpinnerPageElement;
        piiSelection: PiiSelectionElement;
        exportSpinner: SpinnerPageElement;
        dataExportDone: DataExportDoneElement;
        errorMessageToast: CrToastElement;
    };
}
declare const SupportToolElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SupportToolElement extends SupportToolElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedPage_: {
            type: NumberConstructor;
        };
        errorMessage_: {
            type: StringConstructor;
        };
    };
    protected accessor errorMessage_: string;
    protected accessor selectedPage_: SupportToolPageIndex;
    private browserProxy_;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onDataExportStarted_(): void;
    protected onDataCollectionCompleted_(piiItems: PiiDataItem[]): void;
    protected onDataCollectionCancelled_(): void;
    protected displayError_(errorMessage: string): void;
    protected onDataExportCompleted_(result: DataExportResult): void;
    protected onDataCollectionStart_(result: StartDataCollectionResult): void;
    protected onErrorMessageToastCloseClick_(): void;
    protected onContinueClick_(): void;
    protected onBackClick_(): void;
    protected shouldHideBackButton_(): boolean;
    protected shouldHideContinueButtonContainer_(): boolean;
    private onSelectedPageChange_;
}
declare global {
    interface HTMLElementTagNameMap {
        'support-tool': SupportToolElement;
    }
}
export {};
