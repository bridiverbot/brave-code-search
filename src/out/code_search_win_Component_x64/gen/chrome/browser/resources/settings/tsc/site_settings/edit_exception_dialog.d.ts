/**
 * @fileoverview 'settings-edit-exception-dialog' is a component for editing a
 * site exception entry.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { SiteException } from './site_settings_browser_proxy.js';
export interface SettingsEditExceptionDialogElement {
    $: {
        dialog: CrDialogElement;
        actionButton: CrButtonElement;
    };
}
export declare class SettingsEditExceptionDialogElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        model: {
            type: ObjectConstructor;
            observer: string;
        };
        origin_: StringConstructor;
        /**
         * The localized error message to display when the pattern is invalid.
         */
        errorMessage_: StringConstructor;
        /**
         * Whether the current input is invalid.
         */
        invalid_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    model: SiteException;
    private origin_;
    private errorMessage_;
    private invalid_;
    private browserProxy_;
    connectedCallback(): void;
    private onCancelClick_;
    private onActionButtonClick_;
    private validate_;
    private modelChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-edit-exception-dialog': SettingsEditExceptionDialogElement;
    }
}
