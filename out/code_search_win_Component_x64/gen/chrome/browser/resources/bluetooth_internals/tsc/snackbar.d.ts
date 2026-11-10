import { CustomElement } from 'chrome://resources/js/custom_element.js';
/**
 * Javascript for Snackbar controls, served from chrome://bluetooth-internals/.
 */
interface SnackbarOptions {
    message: string;
    type: string;
    actionText?: string;
    action?: () => void;
}
/**
 * Enum of Snackbar types. Used by Snackbar to determine the styling for the
 * Snackbar.
 */
export declare enum SnackbarType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
/**
 * Notification bar for displaying a simple message with an action link.
 * This element should not be instantiated directly. Instead, users should
 * use the showSnackbar and dismissSnackbar functions to ensure proper
 * queuing of messages.
 */
declare class BluetoothSnackbarElement extends CustomElement {
    static get template(): string | TrustedHTML;
    static get is(): string;
    private boundStartTimeout_;
    private boundStopTimeout_;
    private timeoutId_;
    private options_;
    connectedCallback(): void;
    /**
     * Initializes the content of the Snackbar with the given |options|
     * including the message, action link text, and click action of the link.
     * This must be called before the element is added to the DOM.
     */
    initialize(options: SnackbarOptions): void;
    /**
     * Shows the Snackbar and dispatches the 'showed' event.
     */
    show(): void;
    /**
     * transitionend does not always fire (e.g. when animation is aborted
     * or when no paint happens during the animation). This function sets up
     * a timer and emulate the event if it is not fired when the timer expires.
     */
    private ensureTransitionEndEvent_;
    /**
     * Dismisses the Snackbar. Once the Snackbar is completely hidden, the
     * 'dismissed' event is fired and the returned Promise is resolved. If the
     * snackbar is already hidden, a resolved Promise is returned.
     */
    dismiss(): Promise<void>;
    /**
     * Starts the timeout for dismissing the Snackbar.
     */
    private startTimeout_;
    /**
     * Stops the timeout for dismissing the Snackbar. Only clears the timeout
     * when the Snackbar is open.
     */
    private stopTimeout_;
}
declare global {
    interface HTMLElementTagNameMap {
        'bluetooth-snackbar': BluetoothSnackbarElement;
    }
}
export declare function getSnackbarStateForTest(): {
    current: BluetoothSnackbarElement | null;
    numPending: number;
};
/**
 * TODO(crbug.com/40498702): Add ability to specify parent element to Snackbar.
 * Creates a Snackbar and shows it if one is not showing already. If a
 * Snackbar is already active, the next Snackbar is queued.
 * @param message The message to display in the Snackbar.
 * @param type A string determining the Snackbar type: info, success, warning,
 *     error. If not provided, info type is used.
 * @param actionText The text to display for the action link.
 * @param action A function to be called when the user presses the action link.
 */
export declare function showSnackbar(message: string, type?: SnackbarType, actionText?: string, action?: () => void): BluetoothSnackbarElement;
/**
 * Dismisses the Snackbar currently showing.
 * @param clearQueue If true, clears the Snackbar queue before
 *     dismissing.
 */
export declare function dismissSnackbar(clearQueue: boolean): Promise<void>;
export {};
