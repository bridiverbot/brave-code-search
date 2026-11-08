import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordViewPageInteractions } from '../password_manager_proxy.js';
export interface CredentialFieldElement {
    $: {
        inputValue: CrInputElement;
        copyButton: CrIconButtonElement;
    };
}
export declare class CredentialFieldElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The label on the actual input element. Required.
         */
        label: StringConstructor;
        /**
         * The label on the copy button. Required.
         */
        copyButtonLabel: StringConstructor;
        /**
         * Text that appears on the toast when clicking the copy button.
         * Required.
         */
        valueCopiedToastLabel: StringConstructor;
        /**
         * Field value.
         */
        value: StringConstructor;
        placeholder: StringConstructor;
        /**
         * If set, clicking the copy button will record this password view
         * interaction.
         */
        interactionId: typeof PasswordViewPageInteractions;
    };
    label: string;
    copyButtonLabel: string;
    valueCopiedToastLabel: string;
    value: string;
    placeholder: string;
    interactionId: PasswordViewPageInteractions;
    connectedCallback(): void;
    private onCopyValueClick_;
    private showToast_;
}
declare global {
    interface HTMLElementTagNameMap {
        'credential-field': CredentialFieldElement;
    }
}
