import '/strings.m.js';
import './feedback_shared_styles.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class AppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private formOpenTime;
    private attachedFileBlob;
    /**
     * Which questions have been appended to the issue description text area.
     */
    private appendedQuestions;
    /**
     * The object will be manipulated by sendReport().
     */
    private feedbackInfo;
    /**
     * Initializes our page.
     * Flow:
     * .) DOMContent Loaded        -> . Request feedbackInfo object
     *                                . Setup page event handlers
     * .) Feedback Object Received -> . take screenshot
     *                                . request email
     *                                . request System info
     *                                . request i18n strings
     * .) Screenshot taken         -> . Show Feedback window.
     */
    connectedCallback(): Promise<void>;
    /**
     * Apply updates based on the received `FeedbackInfo` object.
     * @return A promise signaling that all UI updates have finished.
     */
    private applyData;
    private sendFeedbackReport;
    /**
     * Reads the selected file when the user selects a file.
     * @param fileSelectedEvent The onChanged event for the file input box.
     */
    private onFileSelected;
    /**
     * Called when user opens the file dialog. Hide 'attach-error' before file
     * dialog is open to prevent a11y bug https://crbug.com/40656276
     */
    private onOpenFileDialog;
    /**
     * Clears the file that was attached to the report with the initial request.
     * Instead we will now show the attach file button in case the user wants to
     * attach another file.
     */
    private clearAttachedFile;
    /**
     * Sets up the event handlers for the given |anchorElement|.
     * @param anchorElement The <a> html element.
     * @param url The destination URL for the link.
     * @param useAppWindow true if the URL should be opened inside a new App
     *     Window, false if it should be opened in a new tab.
     */
    private setupLinkHandlers;
    /**
     * Checks if any keywords related to bluetooth have been typed. If they are,
     * we show the bluetooth logs option, otherwise hide it.
     * @param inputEvent The input event for the description textarea.
     */
    private checkForSendBluetoothLogs;
    /**
     * Checks if any keywords have associated questionnaire in a domain. If so,
     * we append the questionnaire in
     * getRequiredElement('description-text').
     * @param inputEvent The input event for the description textarea.
     */
    private checkForShowQuestionnaire;
    /**
     * Updates the description-text box based on whether it was valid.
     * If invalid, indicate an error to the user. If valid, remove indication of
     * the error.
     */
    private updateDescription;
    /**
     * Sends the report; after the report is sent, we need to be redirected to
     * the landing page, but we shouldn't be able to navigate back, hence
     * we open the landing page in a new tab and sendReport closes this tab.
     * @return Whether the report was sent.
     */
    private sendReport;
    /**
     * Click listener for the cancel button.
     */
    private cancel;
    private resizeAppWindow;
    /**
     * Close the window after 100ms delay.
     */
    private scheduleWindowClose;
    /**
     * TODO(crbug.com/41481648): A helper function in favor of converting feedback
     * UI from non-web component HTML to PolymerElement. It's better to be
     * replaced by polymer's $ helper dictionary.
     */
    getRequiredElement<T extends HTMLElement = HTMLElement>(query: string): T;
}
declare global {
    interface HTMLElementTagNameMap {
        'feedback-app': AppElement;
    }
}
