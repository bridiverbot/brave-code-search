/** Message type used by the host to initiate the handshake ping. */
export declare const SKILLS_HANDSHAKE_TYPE = "skills-handshake";
/** Message type used by the guest to acknowledge the handshake. */
export declare const SKILLS_HANDSHAKE_ACK = "SKILLS_HANDSHAKE_ACK";
/** Message type used by the guest to request showing a toast. */
export declare const SKILLS_SHOW_TOAST = "show-toast";
/** Message type used by the guest to request invoking a skill. */
export declare const SKILLS_INVOKE_SKILL = "invoke-skill";
/** Message type used by the guest to close the dialog. */
export declare const SKILLS_CLOSE_DIALOG = "close-dialog";
/** Message type used by the guest to open a URL in a new tab. */
export declare const SKILLS_OPEN_URL = "open-url";
/** Message type used by the guest to send a prompt to the host. */
export declare const SKILLS_SEND_PROMPT = "send-prompt";
/** Message type used by the guest to open the full page editor. */
export declare const SKILLS_OPEN_FULL_PAGE_EDITOR = "open-full-page-editor";
/** Message type used by the host to send skill dialog info to the guest. */
export declare const SKILLS_DIALOG_INFO_TYPE = "skills-dialog-info";
/** Message type used by the host to send provided skills. */
export declare const SKILLS_SEND_PROVIDED_SKILLS_TYPE = "send-provided-skills";
/** Message type used by the guest to fetch an provided skill. */
export declare const SKILLS_GET_PROVIDED_SKILL = "get-provided-skill";
/** Message type used by the host to send provided skill info. */
export declare const SKILLS_PROVIDED_SKILL_INFO_TYPE = "provided-skill-info";
/** Message type used by the host to send the Gemini prompt. */
export declare const SKILLS_GEMINI_PROMPT_TYPE = "skills-gemini-prompt";
/** Query parameter key used to indicate the prompt needs to be saved. */
export declare const IS_SAVING_GEMINI_QUERY_PARAMETER = "isSavingGeminiPrompt";
/** Message type used by the guest to report performance metrics. */
export declare const SKILLS_LOG_METRIC = "log-metric";
/** Query parameter key used to indicate the skill source. */
export declare const SOURCE_QUERY_PARAMETER = "source";
/** Skill source types for the Webview UI. */
export declare enum SkillSource {
    FIRST_PARTY = "first-party",
    USER = "user",
    PROVIDED = "provided"
}
/** Message type used by the guest to report UMA enum metrics. */
export declare const SKILLS_LOG_UMA_ENUM = "log-uma-enum";
/**
 * Interval in milliseconds between successive handshake pings sent by the
 * host.
 */
export declare const HANDSHAKE_PING_INTERVAL_MS = 50;
/** Timeout in milliseconds before the host aborts the handshake. */
export declare const HANDSHAKE_TIMEOUT_MS = 5000;
/** Returns the primary origin for the Skills guest page. */
export declare function getPrimarySkillsOrigin(): string;
/** Returns the language code for the Skills guest page. */
export declare function getLanguageCode(): string | null;
/** Returns the allowed origins list. */
export declare function getSkillsApiAllowedOrigins(): string[];
/** Returns the remote URL that the webview loads. */
export declare function getSkillsRemoteUrl(): string;
/** Message type used by the host to notify guest that undo was clicked. */
export declare const SKILLS_UNDO_TYPE = "skills-undo";
/** Message type used by the host to notify guest that the toast closed. */
export declare const SKILLS_TOAST_CLOSED_TYPE = "toast-closed";
/**
 * Message type used by the host to notify guest that user skills were updated.
 */
export declare const SKILLS_UPDATED_TYPE = "skills-updated";
/**
 * Translates a Chrome WebUI path (e.g. '/yourSkills') to the corresponding
 * staging remote URL, including the localized 'hl' query parameter if present.
 */
export declare function getRemoteUrlForChromePath(chromePath: string): string;
/**
 * Translates a staging remote URL back to the corresponding Chrome WebUI path
 * to display in the address bar.
 */
export declare function getChromePathForRemoteUrl(url: URL): string;
/** Loading stages for the Webview UI. */
export declare enum LoadingStage {
    HOST_LOAD = "HOST_LOAD",
    COOKIE_SYNC = "COOKIE_SYNC",
    HOST_DATA_FETCH = "HOST_DATA_FETCH",
    NAVIGATION = "NAVIGATION",
    HANDSHAKE = "HANDSHAKE",
    GUEST_FRAMEWORK = "GUEST_FRAMEWORK",
    GUEST_WEB_CLIENT = "GUEST_WEB_CLIENT",
    GUEST_DATA_FETCH = "GUEST_DATA_FETCH"
}
/** Returns the histogram name for a given loading stage. */
export declare function getLoadingStageHistogramName(stage: LoadingStage): string;
/** Non-stage histogram names used by both production code and WebUI tests. */
export declare const HISTOGRAM_HANDSHAKE_RESULT = "Skills.Webview.Handshake.Result";
export declare const HISTOGRAM_TOTAL_INIT_LATENCY = "Skills.Webview.TotalInitLatency";
export declare const HISTOGRAM_WRITE_LATENCY = "Skills.Webview.WriteLatency";
