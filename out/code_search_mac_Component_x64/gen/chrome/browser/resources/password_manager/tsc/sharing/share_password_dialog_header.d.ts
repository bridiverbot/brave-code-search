import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './metrics_utils.js';
import '../shared_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordDialogHeaderElement {
    $: {
        helpButton: HTMLElement;
    };
}
export declare class SharePasswordDialogHeaderElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        isError: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    isError: boolean;
    private onHelpClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-dialog-header': SharePasswordDialogHeaderElement;
    }
}
