import '../loading_page.js';
import { ErrorType } from '../error_page.js';
import type { Skill } from '../skill.mojom-webui.js';
import type { SkillsPageV2Interface } from '../skills.mojom-webui.js';
import { SkillsPageV2Receiver } from '../skills.mojom-webui.js';
import { SkillsWebviewBridge } from './skills_webview_bridge.js';
export declare class SkillsWebview implements SkillsPageV2Interface {
    protected remoteUrl: string;
    protected handler: import("../skills.mojom-webui.js").SkillsPageHandlerRemote;
    protected pageReceiver_: SkillsPageV2Receiver;
    protected webview: chrome.webviewTag.WebView | null;
    protected bridge: SkillsWebviewBridge | null;
    private promptToSend;
    private initStartTime_;
    private navigationStartTime_;
    private isInitialNavigation_;
    private hasLoggedInitLatency_;
    constructor();
    private isSavingGeminiQuery;
    private isFirstPartySkill;
    private isUserSkill;
    private initializeRemoteUrl;
    /**
     * Resolves the measurement start onto the `performance.now()` timeline. A
     * browser-supplied `openStartTime` predates this document, so the result is
     * negative. Malformed values fall back to "now".
     */
    private resolveInitStartTime;
    /**
     * Anchors the init measurement and records the host load segment, the only
     * stage that predates this document. A start time in the future indicates
     * cross-process clock skew, so it anchors the total but is not reported as
     * a host load.
     */
    private beginInitMeasurement;
    getInitStartTimeForTesting(searchParams: URLSearchParams): number;
    beginInitMeasurementForTesting(searchParams: URLSearchParams): void;
    init(): Promise<void>;
    private setEditorStatus;
    private syncWebviewToPath;
    protected handleUrlChanged(url: URL): void;
    protected showError(errorType: ErrorType): void;
    protected showLoading(): void;
    protected hideLoading(): void;
    /**
     * `HOST_LOAD` and `HOST_DATA_FETCH` swap the three minute ceiling of
     * `recordMediumTime` for one hour. Existing stages stay on medium so their
     * series remain continuous.
     */
    private recordStageDuration;
    private syncCookiesAndRecordMetric;
    private recordTotalInitLatencyMetric;
    private recordInitialNavigationMetric;
    loadProvidedSkills(skills: Skill[]): void;
    onUserSkillsUpdated(): void;
}
