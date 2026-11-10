import type { //
AdditionalContextPart, //
ImageOriginAnnotations, //
InvocationPayload, //
Point, //
Rect, //
ResponseStopCause } from './glic_api.js';
export declare enum OpenSignInTabResult {
    UNKNOWN = 0,
    SUCCESS = 1,
    ERROR_NO_URL = 2,
    ERROR_DISALLOWED_URL = 3,
    ERROR_FAILURE = 4
}
export declare enum CloseSignInTabResult {
    UNKNOWN = 0,
    SUCCESS = 1,
    ALREADY_CLOSED = 2,
    NO_SIGN_IN_TAB = 3
}
export declare enum AuthTabPurpose {
    UNKNOWN = 0,
    SIGN_IN = 1,
    CONNECTOR_OAUTH = 2
}
export declare enum OpenAuthTabResult {
    UNKNOWN = 0,
    SUCCESS = 1,
    ERROR_NO_URL = 2,
    ERROR_DISALLOWED_URL = 3,
    ERROR_FAILURE = 4,
    ERROR_INVALID_PURPOSE = 5
}
export declare enum CloseAuthTabResult {
    UNKNOWN = 0,
    CLOSED_ACTIVE = 1,
    CLOSED_INACTIVE = 2,
    ALREADY_CLOSED = 3,
    NO_AUTH_TAB = 4,
    ERROR_INVALID_PURPOSE = 5,
    NAVIGATED_AWAY = 6
}
export declare enum FileUploadPolicyState {
    ENABLED = 0,
    DISABLED = 1
}
export declare enum MetricUserInputReactionType {
    UNKNOWN = 0,
    CANNED = 1,
    MODEL = 2
}
export declare enum PerformActionsErrorReason {
    UNKNOWN = 0,
    INVALID_ACTION_PROTO = 1
}
export declare enum CreateTaskErrorReason {
    UNKNOWN = 0,
    TASK_SYSTEM_UNAVAILABLE = 1,
    EXISTING_ACTIVE_TASK = 2,
    BLOCKED_BY_POLICY = 3,
    CONVERSATION_NOT_REGISTERED = 4
}
export declare enum ActorTaskState {
    UNKNOWN = 0,
    IDLE = 1,
    ACTING = 2,
    PAUSED = 3,
    STOPPED = 4
}
export declare enum ActorTaskPauseReason {
    PAUSED_BY_MODEL = 0,
    PAUSED_BY_USER = 1
}
export declare enum ActorTaskStopReason {
    TASK_COMPLETE = 0,
    STOPPED_BY_USER = 1,
    MODEL_ERROR = 2,
    USER_STARTED_NEW_CHAT = 3,
    USER_LOADED_PREVIOUS_CHAT = 4
}
export declare enum ActorTaskInterruptReason {
    UNKNOWN_REASON = 0,
    TASK_COMPLETE = 1,
    WAITING_USER_INPUT = 2,
    WAITING_USER_CLARIFICATION = 3,
    WAITING_USER_CONFIRMATION = 4,
    WAITING_USER_TAKE_OVER = 5,
    WAITING_IRRELEVANT_USER_INPUT = 6,
    WAITING_UNSAFE_COUNTER_ABUSE_VERDICT = 7,
    WAITING_FOR_EXPERIMENTAL_TRIGGERING_CONSENT = 8
}
export declare enum SbThreatType {
    UNSPECIFIED = 0,
    SOCIAL_ENGINEERING = 1,
    MALWARE = 2,
    UNWANTED_SOFTWARE = 3
}
export declare enum ScreenshotImageFormat {
    JPEG = 0,
    PNG = 1,
    WEBP = 2
}
export declare enum ScreenshotCompressionQuality {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
export declare enum ScrollToErrorReason {
    NOT_SUPPORTED = 0,
    NEWER_SCROLL_TO_CALL = 1,
    NO_FOCUSED_TAB = 2,
    NO_MATCH_FOUND = 3,
    FOCUSED_TAB_CHANGED_OR_NAVIGATED = 4,
    NO_MATCHING_DOCUMENT = 5,
    SEARCH_RANGE_INVALID = 6,
    TAB_CONTEXT_PERMISSION_DISABLED = 7,
    DROPPED_BY_WEB_CLIENT = 8
}
export declare enum SkillSource {
    UNKNOWN = 0,
    FIRST_PARTY = 1,
    USER_CREATED = 2,
    DERIVED_FROM_FIRST_PARTY = 3,
    ENTERPRISE = 4,
    DERIVED_FROM_ENTERPRISE = 5
}
export declare enum SkillsWebClientEvent {
    UNKNOWN = 0,
    USED_FIRST_PARTY_SKILL = 1,
    USED_USER_CREATED_SKILL = 2,
    USED_DERIVED_FIRST_PARTY_SKILL = 3,
    OPENED_MENU = 4,
    CLICKED_MANAGE_FROM_MENU = 5,
    CLICKED_ADD_FROM_MENU = 6,
    CLICKED_EDIT_FROM_MENU = 7,
    CLICKED_ADD_ON1P_SKILL = 8,
    CLICKED_SAVE_AS_SKILL_HOVER_CHIP = 9,
    CLICKED_EDIT_SKILL_HOVER_CHIP = 10,
    CLICKED_BROWSE_SKILL_FROM_PLUS_MENU = 11,
    CLICKED_SKILL_FROM_PLUS_MENU = 12,
    CLICKED_MANAGE_SKILL_FROM_PLUS_MENU = 13,
    CLICKED_MORE_FROM_MENU = 14,
    CLICKED_MANAGE_SKILL_FROM_MENU = 15,
    CLICKED_SKILL_FROM_MENU = 16,
    CLICKED_BROWSE_SKILLS_FROM_MENU = 17,
    SKILL_BUILDER_CLICKED_PROMO_CHIP = 20,
    SKILL_BUILDER_PROMPT_GENERATED = 21,
    SKILL_BUILDER_CLICKED_SAVE_AS_SKILL = 22
}
export declare enum PinTrigger {
    WEB_CLIENT_UNKNOWN = 0,
    CANDIDATES_TOGGLE = 1,
    AT_MENTION = 2,
    ACTUATION = 3
}
export declare enum UnpinTrigger {
    WEB_CLIENT_UNKNOWN = 0,
    CANDIDATES_TOGGLE = 1,
    CHIP = 2,
    ACTUATION = 3
}
export declare enum CancelActionsResult {
    UNKNOWN = 0,
    SUCCESS = 1,
    TASK_NOT_FOUND = 2,
    FAILED = 3
}
export declare enum SwitchConversationErrorReason {
    UNKNOWN = 0
}
export declare enum RegisterConversationErrorReason {
    UNKNOWN = 0,
    INSTANCE_ALREADY_HAS_CONVERSATION_ID = 1
}
export declare enum WebClientMode {
    TEXT = 0,
    AUDIO = 1
}
export declare enum PromptType {
    UNSPECIFIED = 0,
    TYPED_TEXT = 1,
    ZERO_STATE_SUGGESTIONS = 2,
    AUTO_PROMPT = 3,
    AUDIO = 4
}
export declare enum MicrophoneStatus {
    NOT_LISTENING = 0,
    LISTENING = 1,
    UNKNOWN = 2
}
export declare enum WebClientModel {
    DEFAULT = 0,
    ACTOR = 1
}
export declare enum WebUseCounter {
    DEFAULT = 0,
    SUBMIT_PROMPT_WITH_AUTO_MODE = 1,
    TASK_INTERRUPTED_FOR_USER_CONFIRMATION = 2,
    TASK_INTERRUPTED_FOR_USER_CLARIFICATION = 3,
    SELECTION_TOGGLED_VIA_SHARED_MENU = 4,
    SELECTION_TOGGLED_VIA_HOT_KEY = 5,
    SUBMIT_PROMPT_WITH_TEXT_SELECTION_CUE = 6
}
export declare enum ClientErrorDialogType {
    UNKNOWN = 0,
    DISABLED_BY_ORGANIZATION = 1,
    GENERIC_AVAILABILITY = 2,
    INELIGIBLE_ACCOUNT = 3,
    SIGNOUT = 4,
    UNSUPPORTED_LOCATION = 5
}
export declare enum AdditionalContextSource {
    UNKNOWN = 2,
    SHARE_CONTEXT_MENU = 0,
    REGION_SELECTION = 1,
    TEXT_SELECTION = 3,
    WEB_DRAG_DROP = 4,
    EXPERIMENTAL_TRIGGERING = 5
}
export declare enum ExperimentalTriggeringUpdateType {
    UNKNOWN = 0,
    WORKLOG = 1,
    PAUSED = 2,
    TERMINAL_COMPLETION = 3,
    TERMINAL_STOPPED = 4,
    TERMINAL_FAILED = 5,
    YIELD_TO_USER = 6,
    RESUMED = 7
}
export declare enum LightweightPageFeature {
    UNKNOWN = 0,
    YT_ASK_BUTTON_PRESENT = 1
}
export declare enum CaptureRegionErrorReason {
    UNKNOWN = 0,
    NO_FOCUSABLE_TAB = 1
}
export declare enum ScreenshotEncryptionScheme {
    UNKNOWN = 0,
    NONE = 1,
    RFC8291 = 2
}
export declare enum SettingsPageField {
    OS_HOTKEY = 1,
    OS_ENTRYPOINT_TOGGLE = 2,
    LOCATION_PERMISSION = 3
}
export declare enum HostCapability {
    SCROLL_TO_PDF = 0,
    RESET_SIZE_AND_LOCATION_ON_OPEN = 1,
    GET_MODEL_QUALITY_CLIENT_ID = 2,
    MULTI_INSTANCE = 3,
    TRUST_FIRST_ONBOARDING_ARM1 = 4,
    TRUST_FIRST_ONBOARDING_ARM2 = 5,
    SHARE_ADDITIONAL_IMAGE_CONTEXT = 6,
    PDF_ZERO_STATE = 7,
    INVOKE = 8,
    NO_LIVE_MODE = 9,
    AUTO_LOGIN_SIGN_IN_WITH_GOOGLE = 10,
    SHARE_IMAGE_VIA_INVOKE = 11,
    IMG_WEB_DRAG_DROP = 12,
    NO_WEB_UI_LOADER = 13,
    ENFORCES_PASTE_ELIGIBILITY = 14,
    ATTEMPT_OTP_FILLING = 15,
    CHROME_TOOLS = 16,
    SKILLS_V2 = 17,
    EMBEDDED_PDF_BYTES_EXTRACTION = 18,
    NO_WEBVIEW = 19,
    SEND_TAB_TO_SELF = 20
}
export declare enum ClientCapabilities {
    IGNORES_TAB_DATA_FAVICONS = 0
}
export declare enum TaskDuration {
    DEFAULT = 1,
    TRANSIENT = 2
}
export declare enum UserGrantedPermissionDuration {
    ONE_TIME = 0,
    ALWAYS_ALLOW = 1
}
export declare enum CredentialType {
    PASSWORD = 0,
    FEDERATED = 1
}
export declare enum FeatureMode {
    UNSPECIFIED = 0,
    IMAGE_GENERATION = 1,
    ACTUATION = 2,
    EXPERIMENTAL_TRIGGERING = 3,
    UNIVERSAL_CART = 4,
    PROMOTION_PAGE = 5,
    PASSWORD_CHANGE = 6,
    WEB_CONTINUITY = 7
}
export declare enum PanelStateKind {
    HIDDEN = 0,
    DETACHED = 1,
    ATTACHED = 2
}
export declare enum Platform {
    UNKNOWN = 0,
    MAC_OS = 1,
    WINDOWS = 2,
    LINUX = 3,
    CHROME_OS = 4,
    ANDROID = 5
}
export declare enum FormFactor {
    UNKNOWN = 0,
    DESKTOP = 1,
    PHONE = 2,
    TABLET = 3
}
export declare enum FreOverride {
    UNSPECIFIED = 0,
    TRUST_FIRST_TEXT = 1,
    TRUST_FIRST_CLICK = 2,
    TRUST_FIRST_INLINE = 3
}
export declare enum InvocationSource {
    OS_BUTTON = 0,
    OS_BUTTON_MENU = 1,
    OS_HOTKEY = 2,
    TOP_CHROME_BUTTON = 3,
    FRE = 4,
    PROFILE_PICKER = 5,
    NUDGE = 6,
    THREE_DOTS_MENU = 7,
    UNSUPPORTED = 8,
    WHATS_NEW = 9,
    AFTER_SIGN_IN = 10,
    SHARED_TAB = 11,
    ACTOR_TASK_ICON = 12,
    SHARED_IMAGE = 13,
    HANDOFF_BUTTON = 14,
    SKILLS = 15,
    AUTO_OPENED_BY_CONTEXTUAL_CUE = 16,
    PDF_SUMMARIZE_BUTTON = 17,
    NAVIGATION_CAPTURE = 18,
    AUTO_OPENED_FOR_PDF = 19,
    CAPTURE_REGION_HOTKEY = 20,
    IPH = 21,
    ANCHORED_CONTEXTUAL_CUE = 22,
    WEB_CONTENTS_CONTEXT_MENU = 23,
    TEXT_SELECTION_NUDGE = 24,
    TEXT_SELECTION_WIDGET = 25,
    ZERO_STATE_AUTO_SUMMARIZE = 26,
    UNIVERSAL_CART = 27,
    EXPERIMENTAL_TRIGGERING = 28,
    PASSWORD_CHANGE = 29,
    AUTOFILL = 30,
    TOOLBAR_BUTTON = 31,
    INDIGO_PAGE_ACTION = 32,
    WEB_DRAG_DROP = 33,
    PROMOTION_PAGE = 34,
    DAISY_CHAIN_ON_NEW_TAB = 35,
    DAISY_CHAIN_ON_FOLLOW_LINK = 36,
    CONVERSATION_SWITCH = 37,
    DETACH_ATTACH_BUTTON = 38,
    TAB_RESTORE = 39,
    RESHOW_INACTIVE = 40,
    TAB_CONTEXT_MENU = 41,
    WEB_CONTINUITY = 42,
    HISTORY_PAGE_CHAT_LINKOUT = 43,
    CONTEXT_HUB_TOPICS = 44,
    CONTEXT_HUB_AUTO_TODOS = 45,
    WEB_CONTENTS_CONTEXT_MENU_LINK = 46,
    WEB_CONTENTS_CONTEXT_MENU_PAGE = 47,
    WEB_CONTENTS_CONTEXT_MENU_TEXT_SELECTION = 48,
    ACTOR_TOOL = 49
}
export declare enum ActuationTarget {
    UNKNOWN = 0,
    AGENT_DECIDES = 1,
    CURRENT_TAB = 2,
    NEW_TAB = 3,
    TARGET_SURFACE = 4
}
export declare interface OpenSignInTabOptions {
    signinUrl?: string;
}
export declare interface CloseSignInTabOptions {
}
export declare interface OpenAuthTabOptions {
    purpose: AuthTabPurpose;
    url?: string;
}
export declare interface CloseAuthTabOptions {
    purpose: AuthTabPurpose;
}
export declare interface OpenAuthTabResponse {
    result: OpenAuthTabResult;
}
export declare interface CloseAuthTabResponse {
    result: CloseAuthTabResult;
}
export declare interface GeminiEnterpriseSettings {
    projectId: string;
    appId: string;
    location: string;
}
export declare interface ZssConfig {
    additionalContent?: string;
}
export declare interface UserProfileInfo {
    displayName: string;
    givenName?: string;
    localProfileName?: string;
    email: string;
    isManaged?: boolean;
    hasAvatarRing?: boolean;
}
export declare interface SafeBrowsingVerdict {
    url: string;
    threatType: SbThreatType;
    showInterstitial: boolean;
}
export declare interface CounterAbuseVerdict {
    sbVerdictResult: SafeBrowsingVerdict;
}
export declare interface ScreenshotCollectionOptions {
    maxWidth?: number;
    maxHeight?: number;
    screenshotImageFormat?: ScreenshotImageFormat;
    screenshotCompressionQuality?: ScreenshotCompressionQuality;
}
export declare interface TabContextOptions {
    innerText?: boolean;
    innerTextBytesLimit?: number;
    viewportScreenshot?: boolean;
    annotatedPageContent?: boolean;
    maxMetaTags?: number;
    pdfData?: boolean;
    pdfSizeLimit?: number;
    annotatedPageContentMode?: number;
    screenshotCollectionOptions?: ScreenshotCollectionOptions;
}
export declare interface GetPinCandidatesOptions {
    maxCandidates: number;
    query?: string;
}
export declare interface ScrollToParams {
    selector: ScrollToSelector;
    highlight?: boolean;
    documentId?: string;
    url?: string;
}
export declare interface ScrollToTextSelector {
    text: string;
    searchRangeStartNodeId?: number;
}
export declare interface ScrollToTextFragmentSelector {
    textStart: string;
    textEnd: string;
    searchRangeStartNodeId?: number;
}
export declare interface ScrollToNodeSelector {
    nodeId: number;
}
export declare interface SuggestionContent {
    suggestion: string;
}
export declare interface SkillPreview {
    id: string;
    name: string;
    icon: string;
    source: SkillSource;
    description: string;
    curatedBy?: string;
    imageUrl?: string;
    category?: string;
    creationTime?: Date;
    enabled?: boolean;
}
export declare interface Skill {
    preview: SkillPreview;
    prompt: string;
    sourceSkillId?: string;
}
export declare interface CreateSkillRequest {
    id?: string;
    name?: string;
    icon?: string;
    source?: SkillSource;
    prompt: string;
    description?: string;
}
export declare interface UpdateSkillRequest {
    id: string;
}
export declare interface ZeroStateSuggestions {
    suggestions: SuggestionContent[];
    tabId: string;
    url: string;
}
export declare interface ZeroStateSuggestionsV2 {
    suggestions: SuggestionContent[];
    isPending?: boolean;
    invocationSource?: InvocationSource;
}
export declare interface ZeroStateSuggestionsOptions {
    isFirstRun?: boolean;
    supportedTools?: string[];
}
export declare interface PinCandidate {
    tabData: TabData;
}
export declare interface PinTabsOptions {
    pinTrigger?: PinTrigger;
}
export declare interface UnpinTabsOptions {
    unpinTrigger?: UnpinTrigger;
}
export declare interface OpenPinnedTabPickerOptions {
}
export declare interface CreateActorTabOptions {
    initiatorTabId?: string;
    initiatorWindowId?: string;
    openInBackground?: boolean;
}
export declare interface CaptureRegionParams {
    tabId: string;
    options: TabContextOptions;
}
export declare interface ActivateTabOptions {
    pattern?: string;
    fallbackWindowId?: string;
}
export declare interface CreateTabOptions {
    openInBackground?: boolean;
    windowId?: string;
}
export declare interface SendTabToSelfDevice {
    deviceGuid: string;
    deviceName: string;
    formFactor: FormFactor;
    lastUpdatedTime?: Date;
}
export declare interface ConversationInfo {
    conversationId: string;
    conversationTitle: string;
    clientData?: string;
    turnId?: string;
}
export declare interface PanelOpeningData {
    panelState?: PanelState;
    invocationSource?: InvocationSource;
    promptSuggestion?: string;
    autoSend?: boolean;
    skillToInvoke?: Skill;
    recentlyActiveConversations?: ConversationInfo[];
    conversationInfo?: ConversationInfo;
    freOverride?: FreOverride;
}
export declare interface PanelState {
    kind: PanelStateKind;
    windowId?: string;
}
export declare interface SkillsPayload {
    skillId: string;
    skillName: string;
    skillIcon: string;
}
export declare interface UniversalCartPayload {
    serializedMetadata: ArrayBuffer;
}
export declare interface ExperimentalTriggeringPayload {
    paymentMetadata: ArrayBuffer;
}
export declare interface InvokeOptions {
    invocationSource: InvocationSource;
    prompts?: string[];
    context?: AdditionalContext;
    autoSubmit: boolean;
    featureMode: FeatureMode;
    actuationTarget?: ActuationTarget;
    disableZeroStateSuggestions: boolean;
    skillId?: string;
    zssConfig?: ZssConfig;
    payload?: InvocationPayload;
    actuationTabId?: string;
}
export declare interface OnResponseStoppedDetails {
    cause?: ResponseStopCause;
}
export declare interface ParentConversationMetadata {
    conversationId?: string;
    conversationTitle?: string;
}
export declare interface AdditionalContext {
    source?: AdditionalContextSource;
    name?: string;
    tabId?: string;
    origin?: string;
    frameUrl?: string;
    parts: AdditionalContextPart[];
}
export declare interface ExperimentalTriggeringUpdate {
    type: ExperimentalTriggeringUpdateType;
    data: string;
    metadata?: Record<string, string>;
}
export declare interface TabContextResult {
    tabData: TabData;
    webPageData?: WebPageData;
    viewportScreenshot?: Screenshot;
    screenshotInfo?: ReadableStream<Uint8Array>;
    pdfDocumentData?: PdfDocumentData;
    annotatedPageData?: AnnotatedPageData;
}
export declare interface WebPageData {
    mainDocument: DocumentData;
}
export declare interface DocumentData {
    origin: string;
    innerText?: string;
    innerTextTruncated?: boolean;
}
export declare interface PdfDocumentData {
    origin: string;
    pdfData?: ReadableStream<Uint8Array>;
    pdfSizeLimitExceeded: boolean;
}
export declare interface TabData {
    tabId: string;
    windowId: string;
    url: string;
    title?: string;
    faviconUrl?: string;
    documentMimeType?: string;
    isObservable?: boolean;
    isMediaActive?: boolean;
    isTabContentCaptured?: boolean;
    isActiveInWindow?: boolean;
    isWindowActive?: boolean;
    lightweightPageFeatures?: LightweightPageFeature[];
}
export declare interface AnnotatedPageData {
    annotatedPageContent?: ReadableStream<Uint8Array>;
    metadata?: PageMetadata;
}
export declare interface PendingCapturedRegion {
    id: string;
    region: CapturedRegion;
}
export declare interface CaptureRegionResult {
    tabId?: string;
    region?: CapturedRegion;
}
export declare interface Screenshot {
    widthPixels: number;
    heightPixels: number;
    data: ArrayBuffer;
    mimeType: string;
    originAnnotations: ImageOriginAnnotations;
    encryptionScheme?: ScreenshotEncryptionScheme;
}
export declare interface ImageInfo {
    caption?: string;
    sourceOrigin?: string;
    url: string;
    mimeType?: string;
}
export declare interface ImageBytesResult {
    bytes: ArrayBuffer;
    imageInfo: ImageInfo;
}
export declare interface OpenSettingsOptions {
    highlightField?: SettingsPageField;
}
export declare interface TaskOptions {
    title?: string;
    duration?: TaskDuration;
    featureMode?: FeatureMode;
    actuationTabId?: string;
}
export declare interface Credential {
    id: number;
    username: string;
    sourceSiteOrApp: string;
    requestOrigin?: string;
    type?: CredentialType;
}
export declare interface SelectCredentialDialogRequest {
    taskId: number;
    showDialog: boolean;
    credentials: Credential[];
}
export declare interface SelectCredentialDialogResponse {
    taskId: number;
    permissionDuration?: UserGrantedPermissionDuration;
    selectedCredentialId?: number;
}
export declare interface AutofillSuggestion {
    id: string;
    title: string;
    details: string;
}
export declare interface FormFillingRequest {
    requestedData: number;
    formattedRequestOrigin?: string;
    sectionLabel?: string;
    suggestions: AutofillSuggestion[];
}
export declare interface SelectAutofillSuggestionsDialogRequest {
    formFillingRequests: FormFillingRequest[];
}
export declare interface FormFillingResponse {
    selectedSuggestionId: string;
}
export declare interface GmailOtpOptInRequest {
    taskId: number;
}
export declare interface GmailOtpOptInResponse {
    permissionGranted: boolean;
}
export declare interface GmailOtpConfirmationRequest {
    taskId: number;
    verificationCode: string;
}
export declare interface GmailOtpConfirmationResponse {
    permissionGranted: boolean;
}
export declare interface MetaTag {
    name: string;
    content: string;
}
export declare interface FrameMetadata {
    url: string;
    metaTags: MetaTag[];
    hasMediaTranscripts?: boolean;
}
export declare interface PageMetadata {
    frameMetadata: FrameMetadata[];
}
export declare interface ScrollToSelector {
    exactText?: ScrollToTextSelector;
    textFragment?: ScrollToTextFragmentSelector;
    node?: ScrollToNodeSelector;
}
export declare interface CapturedRegion {
    rect?: Rect;
    polyline?: Point[];
}
