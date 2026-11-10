import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BraveAccountRowBrowserProxy } from './brave_account_row_browser_proxy.js';
import { VerificationIntent } from './brave_account.mojom-webui.js';
export declare const ROW_BUTTON_SIZE: string;
export declare abstract class BraveAccountRowBaseElement<Intent, State extends {
    verification: {
        intent: Intent;
    } | null;
}> extends CrLitElement {
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
    };
    accessor browserProxy: BraveAccountRowBrowserProxy;
    protected accessor isResendingConfirmationEmail: boolean;
    protected accessor state: State & object;
    protected abstract makeVerificationIntent(intent: Intent): VerificationIntent;
    protected abstract get verificationIntentDescription(): string;
    protected getVerificationDescription(): {
        beforeLink: string;
        linkLabel: string;
        afterLink: string;
    };
    protected onResendConfirmationEmailLinkClicked(): Promise<void>;
    protected onCancelVerificationButtonClicked(): void;
    protected openDialogInDefaultMode(): void;
    protected openDialogInAccountDeletionMode(): void;
    private openDialog;
}
