import type { AuthCompletedCredentials } from 'chrome://chrome-signin/gaia_auth_host/authenticator.js';
export interface InlineLoginBrowserProxy {
    /** Send 'initialize' message to prepare for starting auth. */
    initialize(): void;
    /**
     * Send 'authenticatorReady' message to handle tasks after authenticator
     * loads.
     */
    authenticatorReady(): void;
    /**
     * Send 'switchToFullTab' message to switch the UI from a constrained dialog
     * to a full tab.
     */
    switchToFullTab(url: string): void;
    /**
     * Send 'completeLogin' message to complete login.
     */
    completeLogin(credentials: AuthCompletedCredentials): void;
    /**
     * Send 'lstFetchResults' message.
     * @param arg The string representation of the json data returned by
     *     the sign in dialog after it has finished the sign in process.
     */
    lstFetchResults(arg: string): void;
    /**
     * Send 'metricsHandler:recordAction' message.
     * @param metricsAction The action to be recorded.
     */
    recordAction(metricsAction: string): void;
    /** Send 'showIncognito' message to the handler */
    showIncognito(): void;
    /** Send 'dialogClose' message to close the login dialog. */
    dialogClose(): void;
}
export declare class InlineLoginBrowserProxyImpl implements InlineLoginBrowserProxy {
    initialize(): void;
    authenticatorReady(): void;
    switchToFullTab(url: string): void;
    completeLogin(credentials: AuthCompletedCredentials): void;
    lstFetchResults(arg: string): void;
    recordAction(metricsAction: string): void;
    showIncognito(): void;
    dialogClose(): void;
    static getInstance(): InlineLoginBrowserProxy;
    static setInstance(obj: InlineLoginBrowserProxy): void;
}
