import { Authenticator } from 'chrome://chrome-signin/gaia_auth_host/authenticator.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
interface WebViewElement extends HTMLElement {
    canGoBack(): boolean;
    back(): void;
}
export interface InlineLoginAppElement {
    $: {
        signinFrame: WebViewElement;
        spinner: HTMLElement;
    };
}
declare const InlineLoginAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class InlineLoginAppElement extends InlineLoginAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Indicates whether the page is loading.
         */
        loading_: {
            type: BooleanConstructor;
        };
        /**
         * Indicates whether the account is being verified.
         */
        verifyingAccount_: {
            type: BooleanConstructor;
        };
        /**
         * The auth extension host instance.
         */
        authenticator_: {
            type: ObjectConstructor;
        };
    };
    protected accessor loading_: boolean;
    protected accessor verifyingAccount_: boolean;
    private accessor authenticator_;
    /** Whether the login UI is loaded for signing in primary account. */
    private isLoginPrimaryAccount_;
    private browserProxy_;
    connectedCallback(): void;
    firstUpdated(): void;
    private addAuthenticatorListeners_;
    private onDropLink_;
    private onNewWindow_;
    private onAuthReady_;
    private onResize_;
    private onAuthCompleted_;
    private onShowIncognito_;
    /**
     * Loads auth extension.
     * @param data Parameters for auth extension.
     */
    private loadAuthenticator_;
    /**
     * Sends a message 'lstFetchResults'. This is a specific message sent when
     * the inline signin is loaded with reason kFetchLstOnly. Handlers of
     * this message would expect a single argument a base::Dictionary value that
     * contains the values fetched from the gaia sign in endpoint.
     * @param arg The string representation of the json data returned by
     *    the sign in dialog after it has finished the sign in process.
     */
    private sendLstFetchResults_;
    protected isSpinnerActive_(): boolean;
    /**
     * Closes the login dialog.
     */
    private closeDialog_;
    setAuthenticatorForTest(authenticator: Authenticator): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'inline-login-app': InlineLoginAppElement;
    }
}
export {};
