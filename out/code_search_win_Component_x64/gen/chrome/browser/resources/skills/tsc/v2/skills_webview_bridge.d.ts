import type { Skill } from '../skill.mojom-webui.js';
import type { PendingEditorData } from '../skills.mojom-webui.js';
export interface SkillPreview {
    id: string;
    name: string;
    icon: string | undefined;
    imageUrl: string | undefined;
    description: string | undefined;
    category: string | undefined;
}
/**
 * Returns a URLPattern given an origin pattern string that has the syntax:
 * <protocol>://<hostname>[:<port>]
 * where <protocol>, <hostname> and <port> are inserted into URLPattern.
 */
export declare function matcherForOrigin(originPattern: string): URLPattern | null;
export declare function urlMatchesApiAllowedOrigin(url: URL): boolean;
export interface SkillsWebviewBridgeDelegate {
    onError(): void;
    onShowSaveToast(): void;
    onShowSaveAndInvokeToast(skillId: string, skillName: string, skillIcon: string): void;
    onShowDeleteToast(skillId: string): Promise<{
        actionClicked: boolean;
    }>;
    onInvokeSkill(skillId: string, skillName: string, skillIcon: string): void;
    onUrlChanged(url: URL): void;
    onCloseDialog(): void;
    onCloseDialogAndOpenEditor(data: PendingEditorData): void;
    onHandshakeStarted(): void;
    onHandshakeComplete(): void;
    onSendPrompt(prompt: string): void;
    onGetProvidedSkill(skillId: string): void;
}
/**
 * A bridge class that manages the postMessage handshake and communication
 * between the Chrome WebUI host and the guest Webview application.
 */
export declare class SkillsWebviewBridge {
    private webview_;
    private targetOrigin_;
    private handshakeIntervalId_;
    private timeoutId_;
    private isConnected_;
    private eventTracker_;
    private delegate_;
    private handshakeStartTime_;
    private isInitialHandshake_;
    private isInitialGuestFramework_;
    private isInitialGuestWebClient_;
    private isInitialGuestDataFetch_;
    constructor(webview: chrome.webviewTag.WebView, delegate: SkillsWebviewBridgeDelegate);
    private onLoadCommit;
    private urlRequiresHandshake;
    private onLoadStop;
    private startHandshake;
    private sendPing;
    private stopHandshake;
    private onMessage;
    private recordHandshakeFailureMetric;
    private recordInitialHandshakeMetrics;
    private handleShowToastMessage;
    private sendUndo;
    private sendToastClosed;
    private handleInvokeSkillMessage;
    private handleLogMetricMessage;
    private handleLogUmaEnumMessage;
    private handleOpenUrlMessage;
    private handleSendPromptMessage;
    private handleOpenFullPageEditorMessage;
    sendSkillDialogInfo(info: {
        skillIcon?: string;
        skillName?: string;
        skillDescription?: string;
        skillInstructions?: string;
    }): void;
    private handleGetProvidedSkillMessage;
    sendGeminiPrompt(prompt: string): void;
    sendProvidedSkills(skills: Skill[]): void;
    sendProvidedSkillInfo(skill: Skill | null): void;
    sendSkillsUpdated(): void;
    destroy(): void;
    isConnected(): boolean;
}
