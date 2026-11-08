import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SyncPrefs, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
/**
 * Names of the radio buttons which allow the user to choose their encryption
 * mechanism.
 */
declare enum RadioButtonNames {
    ENCRYPT_WITH_GOOGLE = "encrypt-with-google",
    ENCRYPT_WITH_PASSPHRASE = "encrypt-with-passphrase"
}
export declare class SettingsSyncEncryptionOptionsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        syncPrefs: {
            type: ObjectConstructor;
        };
        syncStatus: {
            type: ObjectConstructor;
        };
        existingPassphraseLabel: {
            type: StringConstructor;
        };
        /**
         * Whether the "create passphrase" inputs should be shown. These inputs
         * give the user the opportunity to use a custom passphrase instead of
         * authenticating with their Google credentials.
         */
        creatingNewPassphrase_: {
            type: BooleanConstructor;
        };
        /**
         * The passphrase input field value.
         */
        passphrase_: {
            type: StringConstructor;
        };
        /**
         * The passphrase confirmation input field value.
         */
        confirmation_: {
            type: StringConstructor;
        };
        disableEncryptionOptions_: {
            type: BooleanConstructor;
        };
    };
    accessor syncPrefs: SyncPrefs | null;
    accessor syncStatus: SyncStatus | null;
    accessor existingPassphraseLabel: string;
    protected accessor creatingNewPassphrase_: boolean;
    protected accessor passphrase_: string;
    protected accessor confirmation_: string;
    protected accessor disableEncryptionOptions_: boolean;
    /**
     * Whether there's a setEncryptionPassphrase() call pending response, in
     * which case the component should wait before making a new call.
     */
    private isSettingEncryptionPassphrase_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Whether we should disable the radio buttons that allow choosing the
     * encryption options for Sync.
     * We disable the buttons if:
     * (a) full data encryption is enabled, or,
     * (b) full data encryption is not allowed (so far, only applies to
     * supervised accounts), or,
     * (c) current encryption keys are missing, or,
     * (d) the user is a supervised account.
     */
    private computeDisableEncryptionOptions_;
    protected onPassphraseValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onConfirmationValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * @return Whether the passphrase save button should be enabled.
     */
    protected isSaveNewPassphraseEnabled_(): boolean;
    protected onNewPassphraseInputKeypress_(e: KeyboardEvent): void;
    protected onSaveNewPassphraseClick_(): void;
    /**
     * Sends the newly created custom sync passphrase to the browser.
     */
    private saveNewPassphrase_;
    protected onEncryptionRadioSelectedChanged_(event: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Computed binding returning the selected encryption radio button.
     */
    protected selectedEncryptionRadio_(): RadioButtonNames;
    /**
     * Checks the supplied passphrases to ensure that they are not empty and that
     * they match each other. Additionally, displays error UI if they are invalid.
     * @return Whether the check was successful (i.e., that the passphrases were
     *     valid).
     */
    private validateCreatedPassphrases_;
    protected onLearnMoreClick_(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-sync-encryption-options': SettingsSyncEncryptionOptionsElement;
    }
}
export {};
