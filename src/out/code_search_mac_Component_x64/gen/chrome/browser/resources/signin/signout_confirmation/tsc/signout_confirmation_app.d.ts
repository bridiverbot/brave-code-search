import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import './extensions_section.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SignoutConfirmationData } from './signout_confirmation.mojom-webui.js';
export interface SignoutConfirmationAppElement {
    $: {
        signoutConfirmationDialog: HTMLElement;
        acceptButton: CrButtonElement;
        cancelButton: CrButtonElement;
        verifyReauthButton: CrButtonElement;
    };
}
export declare class SignoutConfirmationAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data_: {
            type: ObjectConstructor;
        };
        isUnoPhase2FollowUpEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor data_: SignoutConfirmationData;
    protected accessor isUnoPhase2FollowUpEnabled_: boolean;
    private eventTracker_;
    private signoutConfirmationBrowserProxy_;
    private onSignoutConfirmationDataReceivedListenerId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    uninstallExtensionsOnSignoutForTesting(): boolean;
    protected showExtensionsSection_(): boolean;
    protected showExtensionsAdditionalText_(): boolean;
    protected showVerifyReauthButton_(): boolean;
    protected onAcceptButtonClick_(): void;
    protected onCancelButtonClick_(): void;
    protected onVerifyReauthButtonClick_(): void;
    private onUpdateViewHeight_;
    private onSignoutConfirmationDataReceived_;
    private onKeyDown_;
    private uninstallExtensionsOnSignout_;
}
declare global {
    interface HTMLElementTagNameMap {
        'signout-confirmation-app': SignoutConfirmationAppElement;
    }
}
