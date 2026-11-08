/**
 * @fileoverview 'settings-virtual-card-unenroll-dialog' is the dialog that is
 * shown when the action menu button "Remove virtual card" is clicked. It
 * requests user confirmation before unenrolling a card from the virtual card
 * feature.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare global {
    interface HTMLElementEventMap {
        'unenroll-virtual-card': CustomEvent<string>;
    }
}
export interface SettingsVirtualCardUnenrollDialogElement {
    $: {
        dialog: CrDialogElement;
        confirmButton: CrButtonElement;
    };
}
export declare class SettingsVirtualCardUnenrollDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The credit card being unenrolled from the virtual cards.
         */
        creditCard: {
            type: ObjectConstructor;
        };
    };
    accessor creditCard: chrome.autofillPrivate.CreditCardEntry;
    close(): void;
    protected onCancelButtonClick_(): void;
    protected onConfirmButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-virtual-card-unenroll-dialog': SettingsVirtualCardUnenrollDialogElement;
    }
}
