/**
 * @fileoverview 'security-keys-subpage' is a settings subpage
 * containing operations on security keys.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../settings_page/settings_subpage.js';
import './security_keys_credential_management_dialog.js';
import './security_keys_bio_enroll_dialog.js';
import './security_keys_set_pin_dialog.js';
import './security_keys_reset_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SecurityKeysSubpageElement {
    $: {
        setPINButton: HTMLElement;
        resetButton: HTMLElement;
    };
}
declare const SecurityKeysSubpageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SecurityKeysSubpageElement extends SecurityKeysSubpageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableBioEnrollment_: {
            type: BooleanConstructor;
        };
        showSetPINDialog_: {
            type: BooleanConstructor;
        };
        showCredentialManagementDialog_: {
            type: BooleanConstructor;
        };
        showResetDialog_: {
            type: BooleanConstructor;
        };
        showBioEnrollDialog_: {
            type: BooleanConstructor;
        };
    };
    protected accessor enableBioEnrollment_: boolean;
    protected accessor showSetPINDialog_: boolean;
    protected accessor showCredentialManagementDialog_: boolean;
    protected accessor showResetDialog_: boolean;
    protected accessor showBioEnrollDialog_: boolean;
    protected onSetPinClick_(): void;
    protected onSetPinDialogClose_(): void;
    protected onCredentialManagementClick_(): void;
    protected onCredentialManagementSetPin_(): void;
    protected onCredentialManagementDialogClose_(): void;
    protected onResetClick_(): void;
    protected onResetDialogClose_(): void;
    protected onBioEnrollClick_(): void;
    protected onBioEnrollSetPin_(): void;
    protected onBioEnrollDialogClose_(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'security-keys-subpage': SecurityKeysSubpageElement;
    }
}
export {};
