/**
 * @fileoverview 'downloads-bypass-warning-confirmation-dialog' is the dialog
 * that allows bypassing a download warning (keeping a file flagged as
 * dangerous). A 'success' indicates the warning bypass was confirmed and the
 * dangerous file was downloaded.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface DownloadsBypassWarningConfirmationDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare class DownloadsBypassWarningConfirmationDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fileName: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor webuiRoundedIconsEnabled_: boolean;
    accessor fileName: string;
    wasConfirmed(): boolean;
    protected onDownloadDangerousClick_(): void;
    protected onCancelClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'downloads-bypass-warning-confirmation-dialog': DownloadsBypassWarningConfirmationDialogElement;
    }
}
