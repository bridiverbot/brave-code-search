/**
 * @fileoverview 'settings-history-deletion-dialog' is a dialog that is
 * optionally shown inside settings-clear-browsing-data-dialog after deleting
 * browsing history. It informs the user about the existence of other forms
 * of browsing history in their account.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsHistoryDeletionDialogElement {
    $: {
        dialog: CrDialogElement;
        okButton: CrButtonElement;
    };
}
export declare class SettingsHistoryDeletionDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    /** Click handler for the "OK" button. */
    protected onOkClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-history-deletion-dialog': SettingsHistoryDeletionDialogElement;
    }
}
