import '/strings.m.js';
import '/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './managed_user_profile_notice_disclosure_refresh.js';
import './managed_user_profile_notice_value_prop.js';
import './managed_user_profile_notice_state.js';
import './managed_user_profile_notice_data_handling.js';
import './signals_disclaimer_refresh.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ManagedUserProfileInfo } from './managed_user_profile_notice_browser_proxy.js';
import { AppMode, BrowsingDataHandling, State } from './managed_user_profile_notice_browser_proxy.js';
export interface ManagedUserProfileNoticeAppRefreshElement {
    $: {
        proceedButton: CrButtonElement;
        cancelButton: CrButtonElement;
    };
}
declare const ManagedUserProfileNoticeAppRefreshElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class ManagedUserProfileNoticeAppRefreshElement extends ManagedUserProfileNoticeAppRefreshElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        profileInfo_: {
            type: ObjectConstructor;
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
        proceedLabel_: {
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
        processingSubtitle_: {
            type: StringConstructor;
        };
        selectedDataHandling_: {
            type: StringConstructor;
        };
        appMode_: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        revampEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    protected accessor profileInfo_: ManagedUserProfileInfo;
    protected accessor isModalDialog_: boolean;
    protected accessor proceedLabel_: string;
    protected accessor errorTitle_: string;
    protected accessor errorSubtitle_: string;
    protected accessor disableProceedButton_: boolean;
    protected accessor currentState_: State;
    protected accessor appMode_: AppMode;
    protected accessor revampEnabled_: boolean;
    protected accessor processingSubtitle_: string;
    protected accessor selectedDataHandling_: BrowsingDataHandling | undefined;
    private managedUserProfileNoticeBrowserProxy_;
    constructor();
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /** Called when the proceed button is clicked. */
    protected onProceedButtonClick_(): void;
    /** Called when the cancel button is clicked. */
    protected onCancelButtonClick_(): void;
    protected allowValuePropStateBackFromDisclosure_(): boolean;
    private updateProfileInfo_;
    private updateCurrentState_;
    private getAppModeFromScreenType;
    private updateErrorStrings_;
    protected allowCancel_(): boolean;
    protected getCancelLabel_(): string;
    protected shouldDisableProceedButton_(): boolean;
    private computeProceedLabel_;
    private updateProcessingText_;
    protected onSelectedDataHandlingChanged_(e: CustomEvent<{
        value: BrowsingDataHandling;
    }>): void;
    protected isState_(state: State): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-app-refresh': ManagedUserProfileNoticeAppRefreshElement;
    }
}
export {};
