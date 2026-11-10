import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SigninEmailConfirmationAppElement {
    $: {
        dialogTitle: HTMLElement;
        createNewUserRadioButtonSubtitle: HTMLElement;
        startSyncRadioButtonSubtitle: HTMLElement;
    };
}
export declare class SigninEmailConfirmationAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    firstUpdated(): void;
    protected onConfirmClick_(): void;
    protected onCancelClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'signin-email-confirmation-app': SigninEmailConfirmationAppElement;
    }
}
