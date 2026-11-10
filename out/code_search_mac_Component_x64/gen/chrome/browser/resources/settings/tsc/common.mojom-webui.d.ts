import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const PremiumStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PremiumStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    Unknown = 0,
    Inactive = 1,
    Active = 2,
    ActiveDisconnected = 3
}
export declare const APIErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum APIError {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    None = 0,
    InternalError = 1,
    ConnectionIssue = 2,
    RateLimitReached = 3,
    ModelRateLimitReached = 4,
    ContextLimitReached = 5,
    InvalidEndpointURL = 6,
    InvalidAPIKey = 7,
    ServiceOverloaded = 8
}
export declare const SuggestionGenerationStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SuggestionGenerationStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    None = 0,
    CanGenerate = 1,
    IsGenerating = 2,
    HasGenerated = 3
}
export declare const CharacterTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CharacterType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    HUMAN = 0,
    ASSISTANT = 1
}
export declare const ConversationCapabilitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum ConversationCapability {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    CONTENT_AGENT = 0,
    DEEP_RESEARCH = 1,
    MATH_ML = 2,
    WORKSPACES = 3
}
export declare const ActionTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActionType {
    MIN_VALUE = 0,
    MAX_VALUE = 20,
    UNSPECIFIED = 0,
    RESPONSE = 1,
    SUMMARIZE_PAGE = 2,
    SUMMARIZE_VIDEO = 3,
    SUMMARIZE_SELECTED_TEXT = 4,
    QUERY = 5,
    EXPLAIN = 6,
    CREATE_TAGLINE = 7,
    CREATE_SOCIAL_MEDIA_COMMENT_SHORT = 8,
    CREATE_SOCIAL_MEDIA_COMMENT_LONG = 9,
    PARAPHRASE = 10,
    IMPROVE = 11,
    ACADEMICIZE = 12,
    PROFESSIONALIZE = 13,
    PERSUASIVE_TONE = 14,
    CASUALIZE = 15,
    FUNNY_TONE = 16,
    SHORTEN = 17,
    EXPAND = 18,
    CONVERSATION_STARTER = 19,
    SUGGESTION = 20
}
export declare const ModelCategorySpec: {
    $: mojo.internal.MojomType;
};
export declare enum ModelCategory {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    CHAT = 0,
    SUMMARY = 1
}
export declare const ModelAccessSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ModelAccess {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    BASIC = 0,
    BASIC_AND_PREMIUM = 1,
    PREMIUM = 2
}
export declare const ContentTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContentType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    PageContent = 0,
    VideoTranscript = 1,
    Workspace = 2
}
export declare const UploadedFileTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UploadedFileType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kImage = 0,
    kScreenshot = 1,
    kPdf = 2,
    kText = 3
}
export declare const ToolPermissionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ToolPermission {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kAsk = 0,
    kAllowSession = 1,
    kNeverAllow = 2
}
export declare const PermissionChallengeDecisionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PermissionChallengeDecision {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kAllowOnce = 0,
    kAllowSession = 1,
    kDeny = 2
}
export declare const SimpleRequestTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SimpleRequestType {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kParaphrase = 0,
    kImprove = 1,
    kShorten = 2,
    kExpand = 3,
    kRequestSummary = 4,
    kRequestQuestions = 5,
    kCount = 6
}
export declare const DeepResearchSearchStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DeepResearchSearchStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kStarted = 0,
    kCompleted = 1
}
export declare const DeepResearchAnalysisStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DeepResearchAnalysisStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kStarted = 0,
    kProgress = 1
}
export declare const TaskStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TaskState {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNone = 0,
    kRunning = 1,
    kPaused = 2,
    kStopped = 3
}
export declare const PremiumInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const APIErrorDetailsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServiceStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const AssociatedContentSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UploadedFileSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const FileContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const TextContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const FileExtractedTextContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageExcerptContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageTextContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const VideoTranscriptContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const RequestTitleContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChangeToneContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const MemoryContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const FilterTabsContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestFocusTopicsContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestFocusTopicsWithEmojiContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const ReduceFocusTopicsContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebSourcesContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const SimpleRequestContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolArtifactSpec: {
    $: mojo.internal.MojomType;
};
export declare const PermissionChallengeSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolUseEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchQueriesEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchStatusEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebSourcesEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const InlineSearchEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const CompletionEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContentReceiptEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationTitleEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchQueriesEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchAnalyzingEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchUrlInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchThinkingEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchProgressEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchBlindspotsEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchCompleteEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchErrorEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchSearchStatusEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchFetchStatusEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchAnalysisStatusEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchIterationCompleteEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const NEARVerificationStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationTurnSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThreadSpec: {
    $: mojo.internal.MojomType;
};
export declare const LeoModelOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomModelOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ModelSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationEntriesStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const MemoryValueSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContentBlockSpec: {
    $: mojo.internal.MojomType;
};
export declare const DeepResearchEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationEntryEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const ModelOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PremiumInfoMojoType {
    remainingCredentialCount: number;
    nextActiveAt: (mojoBase_mojom_Time | null);
}
export type PremiumInfo = PremiumInfoMojoType;
export declare interface APIErrorDetailsMojoType {
    statusCode: number;
    innerStatusCode: number;
    errorType: string;
    rateLimitExpiresAt: (mojoBase_mojom_Time | null);
}
export type APIErrorDetails = APIErrorDetailsMojoType;
export declare interface ServiceStateMojoType {
    hasAcceptedAgreement: boolean;
    isStoragePrefEnabled: boolean;
    isStorageNoticeDismissed: boolean;
    canShowPremiumPrompt: boolean;
    isContentAgentUserSelectable: boolean;
}
export type ServiceState = ServiceStateMojoType;
export declare interface AssociatedContentMojoType {
    uuid: string;
    contentType: ContentType;
    contentId: number;
    title: string;
    url: url_mojom_Url;
    contentUsedPercentage: number;
    toolsAttached: boolean;
    conversationTurnUuid: (string | null);
}
export type AssociatedContent = AssociatedContentMojoType;
export declare interface ToolInfoMojoType {
    name: string;
    description: string;
    permission: ToolPermission;
}
export type ToolInfo = ToolInfoMojoType;
export declare interface UploadedFileMojoType {
    filename: string;
    filesize: number;
    type: UploadedFileType;
    data: number[];
    extractedText: (string | null);
}
export type UploadedFile = UploadedFileMojoType;
export declare interface SkillEntryMojoType {
    shortcut: string;
    prompt: string;
}
export type SkillEntry = SkillEntryMojoType;
export declare interface FileContentBlockMojoType {
    fileData: url_mojom_Url;
    filename: string;
}
export type FileContentBlock = FileContentBlockMojoType;
export declare interface ImageContentBlockMojoType {
    imageUrl: url_mojom_Url;
}
export type ImageContentBlock = ImageContentBlockMojoType;
export declare interface TextContentBlockMojoType {
    text: string;
}
export type TextContentBlock = TextContentBlockMojoType;
export declare interface FileExtractedTextContentBlockMojoType {
    text: string;
}
export type FileExtractedTextContentBlock = FileExtractedTextContentBlockMojoType;
export declare interface PageExcerptContentBlockMojoType {
    text: string;
}
export type PageExcerptContentBlock = PageExcerptContentBlockMojoType;
export declare interface PageTextContentBlockMojoType {
    text: string;
}
export type PageTextContentBlock = PageTextContentBlockMojoType;
export declare interface VideoTranscriptContentBlockMojoType {
    text: string;
}
export type VideoTranscriptContentBlock = VideoTranscriptContentBlockMojoType;
export declare interface RequestTitleContentBlockMojoType {
    text: string;
}
export type RequestTitleContentBlock = RequestTitleContentBlockMojoType;
export declare interface ChangeToneContentBlockMojoType {
    text: string;
    tone: string;
}
export type ChangeToneContentBlock = ChangeToneContentBlockMojoType;
export declare interface MemoryContentBlockMojoType {
    memory: {
        [key: string]: MemoryValue;
    };
}
export type MemoryContentBlock = MemoryContentBlockMojoType;
export declare interface FilterTabsContentBlockMojoType {
    text: string;
    topic: string;
}
export type FilterTabsContentBlock = FilterTabsContentBlockMojoType;
export declare interface SuggestFocusTopicsContentBlockMojoType {
    text: string;
}
export type SuggestFocusTopicsContentBlock = SuggestFocusTopicsContentBlockMojoType;
export declare interface SuggestFocusTopicsWithEmojiContentBlockMojoType {
    text: string;
}
export type SuggestFocusTopicsWithEmojiContentBlock = SuggestFocusTopicsWithEmojiContentBlockMojoType;
export declare interface ReduceFocusTopicsContentBlockMojoType {
    text: string;
}
export type ReduceFocusTopicsContentBlock = ReduceFocusTopicsContentBlockMojoType;
export declare interface WebSourceMojoType {
    title: string;
    url: url_mojom_Url;
    faviconUrl: url_mojom_Url;
    pageContent: (string | null);
    extraSnippets: (string[] | null);
}
export type WebSource = WebSourceMojoType;
export declare interface WebSourcesContentBlockMojoType {
    sources: WebSource[];
    queries: string[];
    richResults: string[];
}
export type WebSourcesContentBlock = WebSourcesContentBlockMojoType;
export declare interface SimpleRequestContentBlockMojoType {
    type: SimpleRequestType;
}
export type SimpleRequestContentBlock = SimpleRequestContentBlockMojoType;
export declare interface ToolArtifactMojoType {
    id: (string | null);
    type: string;
    contentJson: string;
}
export type ToolArtifact = ToolArtifactMojoType;
export declare interface PermissionChallengeMojoType {
    assessment: (string | null);
    plan: (string | null);
    title: (string | null);
    description: (string | null);
    implications: (string | null);
    supportsAllowSession: boolean;
}
export type PermissionChallenge = PermissionChallengeMojoType;
export declare interface ToolUseEventMojoType {
    toolName: string;
    id: string;
    argumentsJson: string;
    output: (ContentBlock[] | null);
    artifacts: (ToolArtifact[] | null);
    permissionChallenge: (PermissionChallenge | null);
    isServerResult: boolean;
}
export type ToolUseEvent = ToolUseEventMojoType;
export declare interface SearchQueriesEventMojoType {
    searchQueries: string[];
}
export type SearchQueriesEvent = SearchQueriesEventMojoType;
export declare interface SearchStatusEventMojoType {
    isSearching: boolean;
}
export type SearchStatusEvent = SearchStatusEventMojoType;
export declare interface WebSourcesEventMojoType {
    sources: WebSource[];
    richResults: string[];
}
export type WebSourcesEvent = WebSourcesEventMojoType;
export declare interface InlineSearchEventMojoType {
    query: string;
    resultsJson: string;
}
export type InlineSearchEvent = InlineSearchEventMojoType;
export declare interface CompletionEventMojoType {
    completion: string;
}
export type CompletionEvent = CompletionEventMojoType;
export declare interface ContentReceiptEventMojoType {
    totalTokens: bigint;
    trimmedTokens: bigint;
}
export type ContentReceiptEvent = ContentReceiptEventMojoType;
export declare interface ConversationTitleEventMojoType {
    title: string;
}
export type ConversationTitleEvent = ConversationTitleEventMojoType;
export declare interface DeepResearchQueriesEventMojoType {
    queries: string[];
}
export type DeepResearchQueriesEvent = DeepResearchQueriesEventMojoType;
export declare interface DeepResearchAnalyzingEventMojoType {
    query: string;
    urlCount: number;
    newUrlCount: number;
}
export type DeepResearchAnalyzingEvent = DeepResearchAnalyzingEventMojoType;
export declare interface DeepResearchUrlInfoMojoType {
    url: url_mojom_Url;
    favicon: url_mojom_Url;
}
export type DeepResearchUrlInfo = DeepResearchUrlInfoMojoType;
export declare interface DeepResearchThinkingEventMojoType {
    query: string;
    chunksAnalyzed: number;
    chunksSelected: number;
    urlsAnalyzed: number;
    urlsSelected: url_mojom_Url[];
    urlsInfo: DeepResearchUrlInfo[];
}
export type DeepResearchThinkingEvent = DeepResearchThinkingEventMojoType;
export declare interface DeepResearchProgressEventMojoType {
    elapsedSeconds: number;
    iterationCount: number;
    queriesCount: number;
    urlsAnalyzed: number;
    snippetsAnalyzed: number;
}
export type DeepResearchProgressEvent = DeepResearchProgressEventMojoType;
export declare interface DeepResearchBlindspotsEventMojoType {
    blindspots: string[];
}
export type DeepResearchBlindspotsEvent = DeepResearchBlindspotsEventMojoType;
export declare interface DeepResearchCompleteEventMojoType {
    reason: string;
}
export type DeepResearchCompleteEvent = DeepResearchCompleteEventMojoType;
export declare interface DeepResearchErrorEventMojoType {
    error: string;
}
export type DeepResearchErrorEvent = DeepResearchErrorEventMojoType;
export declare interface DeepResearchSearchStatusEventMojoType {
    status: DeepResearchSearchStatus;
    queryIndex: number;
    query: string;
    totalQueries: number;
    urlsFound: number;
    elapsedMs: number;
}
export type DeepResearchSearchStatusEvent = DeepResearchSearchStatusEventMojoType;
export declare interface DeepResearchFetchStatusEventMojoType {
    query: string;
    urlsTotal: number;
    urlsFetched: number;
}
export type DeepResearchFetchStatusEvent = DeepResearchFetchStatusEventMojoType;
export declare interface DeepResearchAnalysisStatusEventMojoType {
    status: DeepResearchAnalysisStatus;
    chunksAnalyzed: number;
    query: string;
    chunksTotal: number;
}
export type DeepResearchAnalysisStatusEvent = DeepResearchAnalysisStatusEventMojoType;
export declare interface DeepResearchIterationCompleteEventMojoType {
    iteration: number;
    totalIterations: number;
    queriesThisIteration: number;
    urlsAnalyzed: number;
    blindspotsIdentified: number;
}
export type DeepResearchIterationCompleteEvent = DeepResearchIterationCompleteEventMojoType;
export declare interface NEARVerificationStatusMojoType {
    verified: boolean;
}
export type NEARVerificationStatus = NEARVerificationStatusMojoType;
export declare interface ConversationTurnMojoType {
    uuid: (string | null);
    threadUuid: (string | null);
    characterType: CharacterType;
    actionType: ActionType;
    text: string;
    prompt: (string | null);
    selectedText: (string | null);
    events: (ConversationEntryEvent[] | null);
    createdTime: mojoBase_mojom_Time;
    edits: (ConversationTurn[] | null);
    uploadedFiles: (UploadedFile[] | null);
    skill: (SkillEntry | null);
    fromBraveSearchSERP: boolean;
    modelKey: (string | null);
    nearVerificationStatus: (NEARVerificationStatus | null);
    childThreadUuids: string[];
}
export type ConversationTurn = ConversationTurnMojoType;
export declare interface ThreadMojoType {
    uuid: string;
    conversationUuid: string;
    originConversationEntryUuid: string;
    totalTokens: bigint;
    trimmedTokens: bigint;
    entryCount: number;
}
export type Thread = ThreadMojoType;
export declare interface LeoModelOptionsMojoType {
    name: string;
    displayMaker: string;
    description: string;
    category: ModelCategory;
    access: ModelAccess;
    maxAssociatedContentLength: number;
    longConversationWarningCharacterLimit: number;
}
export type LeoModelOptions = LeoModelOptionsMojoType;
export declare interface CustomModelOptionsMojoType {
    modelRequestName: string;
    contextSize: number;
    maxAssociatedContentLength: number;
    longConversationWarningCharacterLimit: number;
    modelSystemPrompt: (string | null);
    endpoint: url_mojom_Url;
    apiKey: string;
}
export type CustomModelOptions = CustomModelOptionsMojoType;
export declare interface ModelMojoType {
    options: ModelOptions;
    key: string;
    displayName: string;
    visionSupport: boolean;
    supportsTools: boolean;
    audioSupport: boolean;
    videoSupport: boolean;
    isSuggestedModel: boolean;
    isNearModel: boolean;
    supportsPrivateInference: boolean;
    supportedCapabilities: ConversationCapability[];
}
export type Model = ModelMojoType;
export declare interface ConversationEntriesStateMojoType {
    isGenerating: boolean;
    isToolExecuting: boolean;
    isLeoModel: boolean;
    contentUsedPercentage: (number | null);
    visualContentUsedPercentage: (number | null);
    canSubmitUserEntries: boolean;
    isTemporary: boolean;
    toolUseTaskState: TaskState;
    threadUuidInProgress: (string | null);
    allModels: Model[];
    currentModelKey: string;
    defaultModelKey: string;
    totalTokens: bigint;
    trimmedTokens: bigint;
    conversationCapabilities: ConversationCapability[];
    suggestedQuestions: string[];
    suggestionStatus: SuggestionGenerationStatus;
    currentError: APIError;
    currentErrorDetails: (APIErrorDetails | null);
}
export type ConversationEntriesState = ConversationEntriesStateMojoType;
export declare interface MemoryValue {
    stringValue?: string;
    listValue?: string[];
}
export declare enum MemoryValueFieldTags {
    STRING_VALUE = 0,
    LIST_VALUE = 1
}
export declare function whichMemoryValue(u: MemoryValue): MemoryValueFieldTags;
export declare interface ContentBlock {
    imageContentBlock?: ImageContentBlock;
    textContentBlock?: TextContentBlock;
    fileContentBlock?: FileContentBlock;
    fileExtractedTextContentBlock?: FileExtractedTextContentBlock;
    pageExcerptContentBlock?: PageExcerptContentBlock;
    pageTextContentBlock?: PageTextContentBlock;
    videoTranscriptContentBlock?: VideoTranscriptContentBlock;
    requestTitleContentBlock?: RequestTitleContentBlock;
    changeToneContentBlock?: ChangeToneContentBlock;
    memoryContentBlock?: MemoryContentBlock;
    filterTabsContentBlock?: FilterTabsContentBlock;
    suggestFocusTopicsContentBlock?: SuggestFocusTopicsContentBlock;
    suggestFocusTopicsWithEmojiContentBlock?: SuggestFocusTopicsWithEmojiContentBlock;
    reduceFocusTopicsContentBlock?: ReduceFocusTopicsContentBlock;
    webSourcesContentBlock?: WebSourcesContentBlock;
    simpleRequestContentBlock?: SimpleRequestContentBlock;
}
export declare enum ContentBlockFieldTags {
    IMAGE_CONTENT_BLOCK = 0,
    TEXT_CONTENT_BLOCK = 1,
    FILE_CONTENT_BLOCK = 2,
    FILE_EXTRACTED_TEXT_CONTENT_BLOCK = 3,
    PAGE_EXCERPT_CONTENT_BLOCK = 4,
    PAGE_TEXT_CONTENT_BLOCK = 5,
    VIDEO_TRANSCRIPT_CONTENT_BLOCK = 6,
    REQUEST_TITLE_CONTENT_BLOCK = 7,
    CHANGE_TONE_CONTENT_BLOCK = 8,
    MEMORY_CONTENT_BLOCK = 9,
    FILTER_TABS_CONTENT_BLOCK = 10,
    SUGGEST_FOCUS_TOPICS_CONTENT_BLOCK = 11,
    SUGGEST_FOCUS_TOPICS_WITH_EMOJI_CONTENT_BLOCK = 12,
    REDUCE_FOCUS_TOPICS_CONTENT_BLOCK = 13,
    WEB_SOURCES_CONTENT_BLOCK = 14,
    SIMPLE_REQUEST_CONTENT_BLOCK = 15
}
export declare function whichContentBlock(u: ContentBlock): ContentBlockFieldTags;
export declare interface DeepResearchEvent {
    queriesEvent?: DeepResearchQueriesEvent;
    analyzingEvent?: DeepResearchAnalyzingEvent;
    thinkingEvent?: DeepResearchThinkingEvent;
    progressEvent?: DeepResearchProgressEvent;
    blindspotsEvent?: DeepResearchBlindspotsEvent;
    completeEvent?: DeepResearchCompleteEvent;
    errorEvent?: DeepResearchErrorEvent;
    searchStatusEvent?: DeepResearchSearchStatusEvent;
    fetchStatusEvent?: DeepResearchFetchStatusEvent;
    analysisStatusEvent?: DeepResearchAnalysisStatusEvent;
    iterationCompleteEvent?: DeepResearchIterationCompleteEvent;
}
export declare enum DeepResearchEventFieldTags {
    QUERIES_EVENT = 0,
    ANALYZING_EVENT = 1,
    THINKING_EVENT = 2,
    PROGRESS_EVENT = 3,
    BLINDSPOTS_EVENT = 4,
    COMPLETE_EVENT = 5,
    ERROR_EVENT = 6,
    SEARCH_STATUS_EVENT = 7,
    FETCH_STATUS_EVENT = 8,
    ANALYSIS_STATUS_EVENT = 9,
    ITERATION_COMPLETE_EVENT = 10
}
export declare function whichDeepResearchEvent(u: DeepResearchEvent): DeepResearchEventFieldTags;
export declare interface ConversationEntryEvent {
    completionEvent?: CompletionEvent;
    searchQueriesEvent?: SearchQueriesEvent;
    searchStatusEvent?: SearchStatusEvent;
    sourcesEvent?: WebSourcesEvent;
    toolUseEvent?: ToolUseEvent;
    inlineSearchEvent?: InlineSearchEvent;
    deepResearchEvent?: DeepResearchEvent;
    contentReceiptEvent?: ContentReceiptEvent;
    conversationTitleEvent?: ConversationTitleEvent;
}
export declare enum ConversationEntryEventFieldTags {
    COMPLETION_EVENT = 0,
    SEARCH_QUERIES_EVENT = 1,
    SEARCH_STATUS_EVENT = 2,
    SOURCES_EVENT = 3,
    TOOL_USE_EVENT = 4,
    INLINE_SEARCH_EVENT = 5,
    DEEP_RESEARCH_EVENT = 6,
    CONTENT_RECEIPT_EVENT = 7,
    CONVERSATION_TITLE_EVENT = 8
}
export declare function whichConversationEntryEvent(u: ConversationEntryEvent): ConversationEntryEventFieldTags;
export declare interface ModelOptions {
    leoModelOptions?: LeoModelOptions;
    customModelOptions?: CustomModelOptions;
}
export declare enum ModelOptionsFieldTags {
    LEO_MODEL_OPTIONS = 0,
    CUSTOM_MODEL_OPTIONS = 1
}
export declare function whichModelOptions(u: ModelOptions): ModelOptionsFieldTags;
