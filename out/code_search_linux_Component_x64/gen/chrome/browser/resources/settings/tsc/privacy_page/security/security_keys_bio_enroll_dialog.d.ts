/**
 * @fileoverview 'settings-security-keys-bio-enroll-dialog' is a dialog for
 * listing, adding, renaming, and deleting biometric enrollments stored on a
 * security key.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '../../i18n_setup.js';
import './fingerprint_icons.html.js';
import './fingerprint_progress_arc.js';
import './security_keys_pin_field.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { FingerprintProgressArcElement } from './fingerprint_progress_arc.js';
import type { Enrollment } from './security_keys_browser_proxy.js';
import type { SettingsSecurityKeysPinFieldElement } from './security_keys_pin_field.js';
export declare enum BioEnrollDialogPage {
    INITIAL = "initial",
    PIN_PROMPT = "pinPrompt",
    ENROLLMENTS = "enrollments",
    ENROLL = "enroll",
    CHOOSE_NAME = "chooseName",
    ERROR = "error"
}
export interface SettingsSecurityKeysBioEnrollDialogElement {
    $: {
        addButton: HTMLElement;
        arc: FingerprintProgressArcElement;
        cancelButton: CrButtonElement;
        confirmButton: CrButtonElement;
        container: HTMLElement;
        dialog: CrDialogElement;
        error: HTMLElement;
        enrollmentName: CrInputElement;
        pin: SettingsSecurityKeysPinFieldElement;
    };
}
declare const SettingsSecurityKeysBioEnrollDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSecurityKeysBioEnrollDialogElement extends SettingsSecurityKeysBioEnrollDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        cancelButtonDisabled_: {
            type: BooleanConstructor;
        };
        cancelButtonVisible_: {
            type: BooleanConstructor;
        };
        confirmButtonDisabled_: {
            type: BooleanConstructor;
        };
        confirmButtonVisible_: {
            type: BooleanConstructor;
        };
        confirmButtonLabel_: {
            type: StringConstructor;
        };
        deleteInProgress_: {
            type: BooleanConstructor;
        };
        /**
         * The ID of the element currently shown in the dialog.
         */
        dialogPage_: {
            type: StringConstructor;
        };
        doneButtonVisible_: {
            type: BooleanConstructor;
        };
        /**
         * The list of enrollments displayed.
         */
        enrollments_: {
            type: ArrayConstructor;
        };
        minPinLength_: {
            type: NumberConstructor;
        };
        progressArcLabel_: {
            type: StringConstructor;
        };
        recentEnrollmentName_: {
            type: StringConstructor;
        };
        enrollmentNameError_: {
            type: StringConstructor;
        };
        enrollmentNameMaxUtf8Length_: {
            type: NumberConstructor;
        };
        errorMsg_: {
            type: StringConstructor;
        };
    };
    protected accessor cancelButtonDisabled_: boolean;
    protected accessor cancelButtonVisible_: boolean;
    protected accessor confirmButtonDisabled_: boolean;
    protected accessor confirmButtonVisible_: boolean;
    protected accessor confirmButtonLabel_: string;
    protected accessor deleteInProgress_: boolean;
    protected accessor dialogPage_: BioEnrollDialogPage;
    protected accessor doneButtonVisible_: boolean;
    protected accessor enrollments_: Enrollment[];
    protected accessor minPinLength_: number;
    protected accessor progressArcLabel_: string;
    protected accessor recentEnrollmentName_: string;
    protected accessor enrollmentNameError_: string;
    protected accessor enrollmentNameMaxUtf8Length_: number;
    protected accessor errorMsg_: string;
    private browserProxy_;
    private maxSamples_;
    private recentEnrollmentId_;
    private showSetPINButton_;
    connectedCallback(): void;
    setDialogPageForTesting(page: BioEnrollDialogPage): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onError_;
    private submitPin_;
    private onEnrollments_;
    setCancelButtonDisabledForTesting(disabled: boolean): void;
    private dialogPageChanged_;
    protected onAddButtonClick_(): void;
    private onEnrollmentSample_;
    private onEnrollmentComplete_;
    protected onConfirmButtonClick_(): void;
    private renameNewEnrollment_;
    private showEnrollmentsPage_;
    protected onCancelButtonClick_(): void;
    protected onDoneButtonClick_(): void;
    protected onDialogClose_(): void;
    protected onIronSelect_(e: Event): void;
    protected onDeleteEnrollmentClick_(e: Event): void;
    protected onRecentEnrollmentNameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * @return The title string for the current dialog page.
     */
    protected dialogTitle_(): string;
    /**
     * @return The header label for the enrollments page.
     */
    protected enrollmentsHeader_(): string;
    protected isNonEmpty_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-security-keys-bio-enroll-dialog': SettingsSecurityKeysBioEnrollDialogElement;
    }
}
export type SecurityKeysBioEnrollDialogElement = SettingsSecurityKeysBioEnrollDialogElement;
export {};
