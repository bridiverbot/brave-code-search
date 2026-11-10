import type { ViewerZoomToolbarElement } from './elements/viewer_zoom_toolbar.js';
export declare class ToolbarManager {
    private window_;
    private zoomToolbar_;
    private toolbarTimeout_;
    private isMouseNearToolbar_;
    private keyboardNavigationActive_;
    private lastMovementTimestamp_;
    /**
     * @param window The window containing the UI.
     */
    constructor(window: Window, zoomToolbar: ViewerZoomToolbarElement);
    private handleMouseMove_;
    /**
     * Whether a mousemove event is high enough velocity to reveal the toolbars.
     */
    private isHighVelocityMouseMove_;
    /**
     * Wrapper around Date.now() to make it easily replaceable for testing.
     */
    getCurrentTimestamp(): number;
    /**
     * Show toolbar and mark that navigation is being performed with
     * tab/shift-tab. This disables toolbar hiding until the mouse is moved or
     * escape is pressed.
     */
    showToolbarForKeyboardNavigation(): void;
    /**
     * Hide toolbars after a delay, regardless of the position of the mouse.
     * Intended to be called when the mouse has moved out of the parent window.
     */
    private hideToolbarForMouseOut_;
    /**
     * Check if the toolbar is able to be closed, and close it if it is.
     * Toolbar may be kept open based on mouse/keyboard activity and active
     * elements.
     */
    private hideToolbarIfAllowed_;
    /** Hide the toolbar after the HIDE_TIMEOUT has elapsed. */
    hideToolbarAfterTimeout(): void;
    /**
     * Clears the keyboard navigation state and hides the toolbars after a delay.
     */
    resetKeyboardNavigationAndHideToolbar(): void;
}
