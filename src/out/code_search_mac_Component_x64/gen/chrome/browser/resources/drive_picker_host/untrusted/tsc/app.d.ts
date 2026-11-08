import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare const HANDSHAKE_TIMEOUT_MS = 5000;
declare const DrivePickerHostUntrustedAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class DrivePickerHostUntrustedAppElement extends DrivePickerHostUntrustedAppElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showErrorScreen_: {
            type: BooleanConstructor;
        };
    };
    private browserProxy_;
    private drivePickerApiProxy_;
    private resultHandler_;
    private listenerIds_;
    private handshakeTimeoutId_;
    private port_;
    protected accessor showErrorScreen_: boolean;
    private lastConsentKitUrl_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private showDrivePicker_;
    private loadConsentKitUrl_;
    protected onCancelClick_(): void;
    protected onTryAgainClick_(): void;
    private clearHandshakeTimeout_;
    private handleConsentKitMessage_;
    private decodeAndSendBase64Proto_;
    private handleConsentKitPortMessage_;
    /**
     * Reports a flow error and resets the result handler.
     */
    private reportError_;
}
declare global {
    interface HTMLElementTagNameMap {
        'drive-picker-host-untrusted-app': DrivePickerHostUntrustedAppElement;
    }
}
export {};
