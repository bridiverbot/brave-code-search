import { LoggedOutState, LoggedOutVerificationIntent, VerificationIntent } from './brave_account.mojom-webui.js';
import { BraveAccountRowBaseElement } from './brave_account_row_base.js';
export declare class BraveAccountLoggedOutRowElement extends BraveAccountRowBaseElement<LoggedOutVerificationIntent, LoggedOutState> {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected makeVerificationIntent(intent: LoggedOutVerificationIntent): VerificationIntent;
    protected get verificationIntentDescription(): string;
    protected getLoggedOutDescription(): {
        beforeLink: string;
        linkLabel: string;
        afterLink: string;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-account-logged-out-row': BraveAccountLoggedOutRowElement;
    }
}
