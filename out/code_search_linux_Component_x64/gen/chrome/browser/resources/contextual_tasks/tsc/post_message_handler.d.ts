import type { BrowserProxy } from './contextual_tasks_browser_proxy.js';
import type { WebViewType } from './web_view_type.js';
export interface Rect {
    top: number;
    left: number;
    width: number;
    right: number;
    bottom: number;
    height: number;
}
export interface InputPlateBoundsUpdateMessage {
    type: 'input-plate-bounds-update';
    'bounds-rect': Rect;
    occluders: Rect[];
    viewportWidth?: number;
    viewportHeight?: number;
}
/**
 * A proxy class to control post messages sent to the webview.
 */
export declare class PostMessageHandler {
    private readonly maxHandshakeAttempts_;
    private webview_;
    private targetOrigin_;
    private eventTracker_;
    private browserProxy_;
    private handshakeComplete_;
    private handshakeAttempts_;
    private handshakeIntervalId_;
    private pendingMessages_;
    private handshakeMessage_;
    private onInputPlateBoundsUpdate_;
    private onInputStateUpdate_;
    private activeNavigationUrl_;
    constructor(webview: WebViewType, browserProxy: BrowserProxy, maxHandshakeAttempts_?: number);
    /**
     * Sends a message to the webview. If the handshake has not yet been
     * acknowledged, the message will be queued and sent after the handshake is
     * complete.
     * @param message The serialized message to send.
     */
    sendMessage(message: Uint8Array): void;
    /**
     * DO NOT USE! This is temporary to prove a proof of concept. Eventually,
     * this should be changed to send a serialized proto like the other method.
     *
     * Sends an object message to the webview. If the handshake has not yet been
     * acknowledged, the message will be queued and sent after the handshake is
     * complete.
     * @param message The object message to send.
     *
     * TODO(crbug.com/483737358): Remove this method once the proto is implemented
     * on the webview side.
     */
    sendObjectMessage(message: object): void;
    detach(): void;
    private onLoadStart_;
    private onLoadRedirect_;
    private onLoadCommit_;
    private onLoadAbort_;
    private restartHandshake_;
    private resetHandshake_;
    private startHandshake_;
    private stopHandshake_;
    private onMessageReceived_;
    setInputPlateBoundsUpdateCallback(callback: (rect?: Rect, occluders?: Rect[], viewportWidth?: number, viewportHeight?: number) => void): void;
    setInputStateUpdateCallback(callback: (toolMode?: number, modelMode?: number, data?: Record<string, unknown>) => void): void;
    completeHandshake(): void;
    getPendingMessagesLengthForTesting(): number;
    isHandshakeCompleteForTesting(): boolean;
    private postMessage_;
}
