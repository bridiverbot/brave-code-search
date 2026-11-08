import '/strings.m.js';
import '/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './managed_user_profile_notice_disclosure.js';
import './managed_user_profile_notice_value_prop.js';
import './managed_user_profile_notice_state.js';
import './managed_user_profile_notice_data_handling.js';
import './signals_disclaimer.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowsingDataHandling } from './managed_user_profile_notice_browser_proxy.js';
declare const ManagedUserProfileNoticeAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class ManagedUserProfileNoticeAppElement extends ManagedUserProfileNoticeAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showEnterpriseBadge_: {
            type: BooleanConstructor;
        };
        /** URL for the profile picture */
        pictureUrl_: {
            type: StringConstructor;
        };
        /** The title and subtitle of the screen */
        title_: {
            type: StringConstructor;
        };
        subtitle_: {
            type: StringConstructor;
        };
        /**
         * Whether this page is being shown as a dialog.
         *
         * Reflected as an attribute to allow configuring variables and styles at
         * the element host level.
         */
        isModalDialog_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** The label for the button to proceed with the flow */
        continueAs_: {
            type: StringConstructor;
        };
        proceedLabel_: {
            type: StringConstructor;
        };
        cancelLabel_: {
            type: StringConstructor;
        };
        errorTitle_: {
            type: StringConstructor;
        };
        errorSubtitle_: {
            type: StringConstructor;
        };
        disableProceedButton_: {
            type: BooleanConstructor;
        };
        currentState_: {
            type: NumberConstructor;
        };
        showValueProposition_: {
            type: BooleanConstructor;
        };
        showDisclosure_: {
            type: BooleanConstructor;
        };
        showProcessing_: {
            type: BooleanConstructor;
        };
        showSuccess_: {
            type: BooleanConstructor;
        };
        showTimeout_: {
            type: BooleanConstructor;
        };
        showError_: {
            type: BooleanConstructor;
        };
        processingSubtitle_: {
            type: StringConstructor;
        };
        showUserDataHandling_: {
            type: BooleanConstructor;
        };
        selectedDataHandling_: {
            type: StringConstructor;
        };
        showSignalsDisclaimer_: {
            type: BooleanConstructor;
        };
        valuePropTitle_: {
            type: StringConstructor;
        };
        valuePropSubtitle_: {
            type: StringConstructor;
        };
        disclosureTitle_: {
            type: StringConstructor;
        };
        disclosureSubtitle_: {
            type: StringConstructor;
        };
        separateDataTitle_: {
            type: StringConstructor;
        };
        separateDataChoiceTitle_: {
            type: StringConstructor;
        };
        separateDataChoiceDetails_: {
            type: StringConstructor;
        };
        mergeDataChoiceTitle_: {
            type: StringConstructor;
        };
        mergeDataChoiceDetails_: {
            type: StringConstructor;
        };
        email_: {
            type: StringConstructor;
        };
        accountName_: {
            type: StringConstructor;
        };
    };
    protected accessor email_: string;
    protected accessor accountName_: string;
    private accessor continueAs_;
    protected accessor showEnterpriseBadge_: boolean;
    protected accessor pictureUrl_: string;
    protected accessor title_: string;
    protected accessor subtitle_: string;
    protected accessor isModalDialog_: boolean;
    protected accessor proceedLabel_: string;
    protected accessor cancelLabel_: string;
    protected accessor errorTitle_: string;
    protected accessor errorSubtitle_: string;
    protected accessor disableProceedButton_: boolean;
    private accessor currentState_;
    protected accessor showValueProposition_: boolean;
    protected accessor showDisclosure_: boolean;
    protected accessor showProcessing_: boolean;
    protected accessor showSuccess_: boolean;
    protected accessor showTimeout_: boolean;
    protected accessor showError_: boolean;
    protected accessor showSignalsDisclaimer_: boolean;
    protected accessor processingSubtitle_: string;
    protected accessor showUserDataHandling_: boolean;
    protected accessor selectedDataHandling_: BrowsingDataHandling | undefined;
    protected accessor valuePropTitle_: string;
    protected accessor valuePropSubtitle_: string;
    protected accessor disclosureTitle_: string;
    protected accessor disclosureSubtitle_: string;
    protected accessor separateDataTitle_: string;
    protected accessor separateDataChoiceTitle_: string;
    protected accessor separateDataChoiceDetails_: string;
    protected accessor mergeDataChoiceTitle_: string;
    protected accessor mergeDataChoiceDetails_: string;
    private managedUserProfileNoticeBrowserProxy_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    /** Called when the proceed button is clicked. */
    protected onProceedClick_(): void;
    /** Called when the cancel button is clicked. */
    protected onCancelClick_(): void;
    protected allowValuePropStateBackFromDisclosure_(): boolean;
    private setProfileInfo_;
    private updateCurrentState_;
    private updateErrorStrings_;
    protected allowCancel_(): boolean;
    private computeCancelLabel_;
    protected allowProceedButton_(): boolean;
    private computeProceedLabel_;
    private updateProcessingText_;
    protected onSelectedDataHandlingChanged_(e: CustomEvent<{
        value: BrowsingDataHandling;
    }>): void;
    protected getActionContainerId_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-app': ManagedUserProfileNoticeAppElement;
    }
}
export {};
