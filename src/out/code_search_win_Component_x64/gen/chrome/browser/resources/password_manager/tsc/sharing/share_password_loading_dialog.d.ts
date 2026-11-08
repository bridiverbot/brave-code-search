import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../cr_spinner_style.css.js';
import '../shared_style.css.js';
import './share_password_dialog_header.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export declare class SharePasswordLoadingDialogElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        dialogTitle: {
            type: StringConstructor;
        };
    };
    dialogTitle: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-loading-dialog': SharePasswordLoadingDialogElement;
    }
}
