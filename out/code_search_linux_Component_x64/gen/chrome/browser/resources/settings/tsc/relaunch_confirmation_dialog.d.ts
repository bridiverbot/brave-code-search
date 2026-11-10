import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { RestartType } from './relaunch_mixin_lit.js';
export interface RelaunchConfirmationDialogElement {
    $: {
        cancel: CrButtonElement;
        confirm: CrButtonElement;
        dialog: CrDialogElement;
    };
}
/**
 * The element corresponding to <relaunch-confirmation-dialog>.
 * The dialog is only supported for "non" ChromeOS platforms and is
 * shown to warn users if they have any open Incognito windows before
 * proceeding with the restart/relaunch action.
 *
 * To make use of this dialog, add the below html to the target html and
 * substitute the value of restartType to either RestartType.RELAUNCH or
 * RestartType.RESTART.
 *
 * ${this.shouldShowRelaunchDialog ? html`
 *   <relaunch-confirmation-dialog .restartType="${RestartType.RELAUNCH}"
 *       @close="${this.onRelaunchDialogClose}"></relaunch-confirmation-dialog>
 * ` : ''}
 *
 * Then, in the corresponding typescript file, make the target HTMLElement
 * inherit from RelaunchMixinLit and invoke the member method
 * RelaunchMixinLit#performRestart where required.
 */
export declare class RelaunchConfirmationDialogElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        relaunchConfirmationDialogDesc: {
            type: StringConstructor;
        };
        restartType: {
            type: NumberConstructor;
        };
        isVersionUpdate: {
            type: BooleanConstructor;
        };
    };
    accessor relaunchConfirmationDialogDesc: string | null;
    accessor restartType: RestartType;
    accessor isVersionUpdate: boolean;
    connectedCallback(): Promise<void>;
    protected onCancelClick_(): void;
    protected onConfirmClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'relaunch-confirmation-dialog': RelaunchConfirmationDialogElement;
    }
}
