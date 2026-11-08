/**
 * @fileoverview 'passwords-importer' is a component for importing passwords
 * from a .csv file. It is a state machine that transitions through several
 * states, managed by the `dialogState_` property.
 *
 * The user initiates the import process, but the initial interaction differs
 * based on their account type:
 *
 * - For "Account Store" users: The user
 *   clicks on the entire "Import passwords" row. This action transitions the
 *   state to `STORE_PICKER`, where they can choose to save passwords to their
 *   account or the local device. After making a selection, they click the
 *   "Select file" button to continue.
 * - For other users: A "Select file" button is displayed directly on the
 *   row. Clicking this button bypasses the store picker and immediately
 *   transitions the state to `IN_PROGRESS`, starting the file selection
 *   process.
 *
 * The rest of the flow is as follows:
 *
 * 1.  File Processing (`IN_PROGRESS`): The user is prompted to select a
 *     `.csv` file. While the file is being read and processed, a spinner is
 *     shown.
 *
 * 2.  Resolution: After processing, the machine transitions to one of the
 *     following terminal states:
 *     - `SUCCESS`: The passwords were imported successfully.
 *     - `CONFLICTS`: The file contained passwords that already exist. The
 *       user is prompted to select which ones to overwrite.
 *     - `ERROR`: An error occurred (e.g., bad file format, file too
 *       large).
 *     - `ALREADY_ACTIVE`: Another import process was already in progress in
 *       another window.
 *
 * 3.  Completion (`NO_DIALOG`): From any of the resolution states, closing
 *     the dialog resets the state machine back to `NO_DIALOG`.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/shared/settings/md_select.css.js';
import './cr_spinner_style.css.js';
import './site_favicon.js';
import './dialogs/password_preview_item.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface PasswordsImporterElement {
    $: {
        linkRow: CrLinkRowElement;
        selectFileButtonLinkRow: CrButtonElement;
    };
}
/**
 * The states of the importer. See the file-level comment for more details on
 * the state machine.
 *
 *                 +------------------+
 *                 |    NO_DIALOG     |
 *                 +------------------+
 *                        |
 *                        v
 *                 +------------------+
 *                 |   STORE_PICKER   | (If isAccountStoreUser)
 *                 +------------------+
 *                        |
 *                        v (file selection)
 *                 +------------------+
 *                 |   IN_PROGRESS    |
 *                 +------------------+
 *                        |
 *     +------------------+------------------+------------------+
 *     |                  |                  |                  |
 *     v                  v                  v                  v
 * +-------+      +-----------+      +-----------+      +----------------+
 * | ERROR |      | CONFLICTS |      |  SUCCESS  |      | ALREADY_ACTIVE |
 * +-------+      +-----------+      +-----------+      +----------------+
 *     |                  |                  |                  |
 *     +------------------+------------------+------------------+
 *                        |
 *                        v
 *                 +------------------+
 *                 |    NO_DIALOG     |
 *                 +------------------+
 */
declare enum DialogState {
    NO_DIALOG = 0,
    IN_PROGRESS = 1,
    STORE_PICKER = 2,
    SUCCESS = 3,
    ERROR = 4,
    ALREADY_ACTIVE = 5,
    CONFLICTS = 6
}
declare const PasswordsImporterElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./user_utils_mixin.js").UserUtilMixinInterface);
export declare class PasswordsImporterElement extends PasswordsImporterElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        dialogState_: {
            type: NumberConstructor;
            value: DialogState;
        };
        dialogStateEnum_: {
            type: ObjectConstructor;
            value: typeof DialogState;
            readOnly: boolean;
        };
        storeOptionEnum_: {
            type: ObjectConstructor;
            value: typeof chrome.passwordsPrivate.PasswordStoreSet;
            readOnly: boolean;
        };
        selectedStoreOption_: StringConstructor;
        results_: {
            type: ObjectConstructor;
            value: null;
        };
        successDescription_: StringConstructor;
        failedImportsSummary_: StringConstructor;
        rowsWithUnknownErrorsSummary_: StringConstructor;
        conflictsDialogTitle_: StringConstructor;
        conflicts_: {
            type: ArrayConstructor;
            value: never[];
        };
        conflictsSelectedForReplace_: {
            type: ArrayConstructor;
            value: never[];
        };
        showRowsWithUnknownErrorsSummary_: {
            type: BooleanConstructor;
            value: boolean;
        };
        bannerDescription_: {
            type: StringConstructor;
            computed: string;
        };
    };
    static get observers(): string[];
    private dialogState_;
    private passwordsSavedToAccount_;
    private selectedStoreOption_;
    private bannerDescription_;
    private results_;
    private conflicts_;
    private conflictsSelectedForReplace_;
    private successDescription_;
    private conflictsDialogTitle_;
    private failedImportsSummary_;
    private rowsWithUnknownErrorsSummary_;
    private showRowsWithUnknownErrorsSummary_;
    private passwordManager_;
    launchImport(): void;
    private updateDefaultStore_;
    private updatePasswordsSavedToAccount_;
    private isState_;
    private computeBannerDescription_;
    private getAriaDescription_;
    private onBannerClick_;
    private closeDialog_;
    private resetImporter;
    private onCloseClick_;
    private onViewPasswordsClick_;
    private selectFileHelper_;
    private onSelectFileClick_;
    private continueImportHelper_;
    private onSkipClick_;
    private onReplaceClick_;
    private isPreviewItemChecked_;
    /**
     * Handler for ticking conflicting password checkbox.
     */
    private onPasswordSelectedChange_;
    private shouldDisableReplace_;
    private processResults_;
    private getFailedImportsWithKnownErrors_;
    private handleSuccess_;
    private getSuccessDialogTitle_;
    private getErrorDialogDescription_;
    private getSuccessTipHtml_;
    private getCheckboxLabelHtml_;
    private shouldHideLinkRowIcon_;
    private shouldHideSelectFileButton_;
    private shouldHideDeleteFileOption_;
    private shouldHideFailuresSummary_;
    private getStoreOptionAccountText_;
    private getFailedEntryErrorMessage_;
}
declare global {
    interface HTMLElementTagNameMap {
        'passwords-importer': PasswordsImporterElement;
    }
}
export {};
