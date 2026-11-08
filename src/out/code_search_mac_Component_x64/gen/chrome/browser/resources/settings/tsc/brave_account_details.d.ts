import { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { LoggedInState, LoggedInVerificationIntent, VerificationIntent } from './brave_account.mojom-webui.js';
import { BraveAccountRowBaseElement } from './brave_account_row_base.js';
export declare class BraveAccountDetailsElement extends BraveAccountRowBaseElement<LoggedInVerificationIntent, LoggedInState> {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        browserProxy: {
            type: ObjectConstructor;
        };
        isResendingConfirmationEmail: {
            type: BooleanConstructor;
            state: boolean;
        };
        state: {
            type: ObjectConstructor;
        };
        truncatedEmail: {
            type: StringConstructor;
            state: boolean;
        };
    };
    protected accessor truncatedEmail: string;
    private isChangingPassword;
    private truncator;
    protected makeVerificationIntent(intent: LoggedInVerificationIntent): VerificationIntent;
    protected get verificationIntentDescription(): string;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onLogOutButtonClicked(): void;
    protected onChangePasswordButtonClicked(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-account-details': BraveAccountDetailsElement;
    }
}
