/**
 * @fileoverview
 *
 * 'settings-reset-profile-dialog' is the dialog shown for clearing profile
 * settings. A triggered variant of this dialog can be shown under certain
 * circumstances. See triggered_profile_resetter.h for when the triggered
 * variant will be used.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/js/action_link.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsResetProfileDialogElement {
    $: {
        cancel: CrButtonElement;
        dialog: CrDialogElement;
        reset: CrButtonElement;
        sendSettings: CrCheckboxElement;
    };
}
declare const SettingsResetProfileDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsResetProfileDialogElement extends SettingsResetProfileDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isTriggered_: {
            type: BooleanConstructor;
        };
        triggeredResetToolName_: {
            type: StringConstructor;
        };
        resetRequestOrigin_: {
            type: StringConstructor;
        };
        clearingInProgress_: {
            type: BooleanConstructor;
        };
    };
    private accessor isTriggered_;
    private accessor triggeredResetToolName_;
    private accessor resetRequestOrigin_;
    protected accessor clearingInProgress_: boolean;
    private browserProxy_;
    firstUpdated(): void;
    protected getExplanationText_(): TrustedHTML;
    protected getPageTitle_(): string;
    private showDialog_;
    show(): void;
    protected onCancelClick_(): void;
    cancel(): void;
    protected onResetClick_(): void;
    /**
     * Displays the settings that will be reported in a new tab.
     */
    private onShowReportedSettingsClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-reset-profile-dialog': SettingsResetProfileDialogElement;
    }
}
export {};
