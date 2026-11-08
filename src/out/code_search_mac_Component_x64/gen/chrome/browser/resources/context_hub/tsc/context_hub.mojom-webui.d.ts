import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Time as mojoBase_mojom_Time, TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Uuid as mojoBase_mojom_Uuid } from '//resources/mojo/mojo/public/mojom/base/uuid.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const AutoTodoStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AutoTodoStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kActive = 0,
    kCompleted = 1,
    kDismissed = 2
}
export declare const AutoTodoGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AutoTodoGroup {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kNoMatch = 0,
    kNudgeToClose = 1,
    kReadingList = 2,
    kUnfinishedAction = 3,
    kShoppingCart = 4
}
export declare const EntryTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum EntryType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kTab = 0,
    kTextSelection = 1,
    kImage = 2
}
export declare const ChatRoleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ChatRole {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kUser = 0,
    kAssistant = 1
}
export declare const TopicDefectCategorySpec: {
    $: mojo.internal.MojomType;
};
export declare enum TopicDefectCategory {
    MIN_VALUE = 0,
    MAX_VALUE = 12,
    kIrrelevantInformationIncluded = 0,
    kRelatedInformationMissing = 1,
    kTitleWrongOrVague = 2,
    kEmojiWrong = 3,
    kOverviewInaccurate = 4,
    kTooBroad = 5,
    kCombinesSeparateTopics = 6,
    kTooNarrowOrFragmented = 7,
    kIncidentalBrowsing = 8,
    kDuplicateOfAnotherTopic = 9,
    kSensitiveTopic = 10,
    kOther = 11,
    kOutdated = 12
}
export declare const TopicRatingSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TopicRating {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnrated = 0,
    kLiked = 1,
    kDisliked = 2
}
export declare const CopyAttachmentsToClipboardStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CopyAttachmentsToClipboardStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSuccess = 0,
    kFileWriteFailed = 1,
    kInvalidInput = 2
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    onAutoTodosChanged(todos: AutoTodoItem[]): void;
    onFirstPartyAutoTodosGenerationStateChanged(isGenerating: boolean): void;
    onThirdPartyAutoTodosGenerationStateChanged(isGenerating: boolean): void;
    onMemoryBankEntryAdded(entry: MemoryBankEntry): void;
    onMemoryBankEntryUpdated(id: bigint, annotations: MemoryBankEntryAnnotations): void;
    onMemoryBankEntriesDeleted(ids: bigint[]): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onAutoTodosChanged(todos: AutoTodoItem[]): void;
    onFirstPartyAutoTodosGenerationStateChanged(isGenerating: boolean): void;
    onThirdPartyAutoTodosGenerationStateChanged(isGenerating: boolean): void;
    onMemoryBankEntryAdded(entry: MemoryBankEntry): void;
    onMemoryBankEntryUpdated(id: bigint, annotations: MemoryBankEntryAnnotations): void;
    onMemoryBankEntriesDeleted(ids: bigint[]): void;
}
/**
 * An object which receives request messages for the Page
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageInterface);
}
export declare class Page {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageRemote;
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onAutoTodosChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(todos: AutoTodoItem[]) => any>;
    onFirstPartyAutoTodosGenerationStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isGenerating: boolean) => any>;
    onThirdPartyAutoTodosGenerationStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isGenerating: boolean) => any>;
    onMemoryBankEntryAdded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entry: MemoryBankEntry) => any>;
    onMemoryBankEntryUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: bigint, annotations: MemoryBankEntryAnnotations) => any>;
    onMemoryBankEntriesDeleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ids: bigint[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerFactoryInterface);
}
export declare class PageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, handler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    generateFirstPartyAutoTodos(): Promise<{
        success: boolean;
    }>;
    getAutoTodos(): Promise<{
        firstPartyTodos: AutoTodoItem[];
        thirdPartyTodos: AutoTodoItem[];
        firstPartyMetadata: AutoTodosGenerationMetadata;
        thirdPartyMetadata: AutoTodosGenerationMetadata;
    }>;
    updateAutoTodo(todo: AutoTodoItem): Promise<{
        success: boolean;
    }>;
    generateTabBasedTodos(): Promise<{
        success: boolean;
    }>;
    clearFirstPartyAutoTodos(): Promise<{
        success: boolean;
    }>;
    clearThirdPartyAutoTodos(): Promise<{
        success: boolean;
    }>;
    setTodoFeedback(feedback: AutoTodoItemFeedback): Promise<void>;
    deleteTodoFeedback(id: string): Promise<void>;
    clearTodoFeedbacks(): Promise<void>;
    getTodoFeedbacks(): Promise<{
        feedbacks: AutoTodoItemFeedback[];
    }>;
    getSaveToMemoryBankContext(): Promise<{
        context: (SaveToMemoryBankContext | null);
    }>;
    getAllMemoryBankEntries(): Promise<{
        entries: MemoryBankEntry[];
    }>;
    deleteMemoryBankEntries(ids: bigint[]): Promise<void>;
    saveMemoryBankEntry(annotations: MemoryBankEntryAnnotations): Promise<{
        success: boolean;
    }>;
    getAllMemoryBankTags(): Promise<{
        tags: string[];
    }>;
    getAllMemoryBankCollections(): Promise<{
        collections: string[];
    }>;
    updateMemoryBankEntryAnnotations(id: bigint, annotations: MemoryBankEntryAnnotations): Promise<{
        success: boolean;
    }>;
    uploadMemoryBankEntries(entries: MemoryBankEntry[]): Promise<{
        success: boolean;
    }>;
    getTabs(): Promise<{
        tabs: TabInfo[];
    }>;
    retrieveAndGroupTabs(userCommand: string): Promise<{
        groups: TabGroup[];
        ungroupedTabs: TabInfo[];
        llmResponse: (ChatMessage | null);
    }>;
    getExistingTabGroupsAndChats(): Promise<{
        groups: TabGroup[];
        ungroupedTabs: TabInfo[];
        history: ChatMessage[];
    }>;
    switchToTab(tabId: bigint): void;
    closeTab(tabId: bigint): void;
    clearTabGroups(): Promise<void>;
    replaceTabGroups(groups: TabGroup[]): Promise<void>;
    clearTabGroupChatHistory(): Promise<void>;
    askGeminiWithContext(userCommand: string, memoryBankEntryIds: bigint[], saveToHistory: boolean): Promise<{
        response: MemoryBankChatMessage;
    }>;
    getMemoryBankChatHistory(): Promise<{
        history: MemoryBankChatMessage[];
    }>;
    clearMemoryBankChatHistory(): Promise<void>;
    confirmAllTabGroups(): Promise<{
        success: boolean;
    }>;
    getConfirmedTabGroups(): Promise<{
        groups: TabGroup[];
    }>;
    removeConfirmedTabGroup(savedGuid: mojoBase_mojom_Uuid): Promise<void>;
    closeConfirmedTabGroup(savedGuid: mojoBase_mojom_Uuid): Promise<void>;
    removeAllConfirmedTabGroups(): Promise<void>;
    executeSmartSearch(query: string): Promise<{
        results: SmartSearchResult[];
    }>;
    openUrlsInTabGroup(groupLabel: string, urls: url_mojom_Url[]): Promise<{
        success: boolean;
    }>;
    getTopics(): Promise<{
        topics: Topic[];
    }>;
    getTopic(id: string): Promise<{
        topic: (Topic | null);
    }>;
    getTopicPageImageUrl(pageUrl: url_mojom_Url): Promise<{
        imageUrl: (url_mojom_Url | null);
    }>;
    getTopicPageFaviconColor(pageUrl: url_mojom_Url): Promise<{
        color: (skia_mojom_SkColor | null);
    }>;
    openTopic(topicIdOrUrl: TopicIdOrUrl): void;
    openGlicPanel(prompts: string[]): void;
    setTopicFeedback(feedback: TopicFeedback): Promise<void>;
    deleteTopicFeedback(topicId: string): Promise<void>;
    getTopicFeedbacks(): Promise<{
        feedbacks: TopicFeedback[];
    }>;
    clearTopicFeedbacks(): Promise<void>;
    getTopicsFeedbackExportPreview(windowDays: number): Promise<{
        preview: TopicsFeedbackExportPreview;
    }>;
    generateTopicsFeedbackBundle(options: TopicsFeedbackExportOptions): Promise<{
        jsonBundle: string;
    }>;
    runTodoTask(prompt: string): Promise<{
        success: boolean;
    }>;
    openContextHubPage(): Promise<void>;
    openWebUrl(url: url_mojom_Url): Promise<void>;
    copyAttachmentsToClipboard(files: MemoryBankFileAttachment[]): Promise<{
        status: CopyAttachmentsToClipboardStatus;
    }>;
    startSkillRecording(): void;
    stopSkillRecording(): Promise<{
        data: SkillRecordingSessionData;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    generateFirstPartyAutoTodos(): Promise<{
        success: boolean;
    }>;
    getAutoTodos(): Promise<{
        firstPartyTodos: AutoTodoItem[];
        thirdPartyTodos: AutoTodoItem[];
        firstPartyMetadata: AutoTodosGenerationMetadata;
        thirdPartyMetadata: AutoTodosGenerationMetadata;
    }>;
    updateAutoTodo(todo: AutoTodoItem): Promise<{
        success: boolean;
    }>;
    generateTabBasedTodos(): Promise<{
        success: boolean;
    }>;
    clearFirstPartyAutoTodos(): Promise<{
        success: boolean;
    }>;
    clearThirdPartyAutoTodos(): Promise<{
        success: boolean;
    }>;
    setTodoFeedback(feedback: AutoTodoItemFeedback): Promise<void>;
    deleteTodoFeedback(id: string): Promise<void>;
    clearTodoFeedbacks(): Promise<void>;
    getTodoFeedbacks(): Promise<{
        feedbacks: AutoTodoItemFeedback[];
    }>;
    getSaveToMemoryBankContext(): Promise<{
        context: (SaveToMemoryBankContext | null);
    }>;
    getAllMemoryBankEntries(): Promise<{
        entries: MemoryBankEntry[];
    }>;
    deleteMemoryBankEntries(ids: bigint[]): Promise<void>;
    saveMemoryBankEntry(annotations: MemoryBankEntryAnnotations): Promise<{
        success: boolean;
    }>;
    getAllMemoryBankTags(): Promise<{
        tags: string[];
    }>;
    getAllMemoryBankCollections(): Promise<{
        collections: string[];
    }>;
    updateMemoryBankEntryAnnotations(id: bigint, annotations: MemoryBankEntryAnnotations): Promise<{
        success: boolean;
    }>;
    uploadMemoryBankEntries(entries: MemoryBankEntry[]): Promise<{
        success: boolean;
    }>;
    getTabs(): Promise<{
        tabs: TabInfo[];
    }>;
    retrieveAndGroupTabs(userCommand: string): Promise<{
        groups: TabGroup[];
        ungroupedTabs: TabInfo[];
        llmResponse: (ChatMessage | null);
    }>;
    getExistingTabGroupsAndChats(): Promise<{
        groups: TabGroup[];
        ungroupedTabs: TabInfo[];
        history: ChatMessage[];
    }>;
    switchToTab(tabId: bigint): void;
    closeTab(tabId: bigint): void;
    clearTabGroups(): Promise<void>;
    replaceTabGroups(groups: TabGroup[]): Promise<void>;
    clearTabGroupChatHistory(): Promise<void>;
    askGeminiWithContext(userCommand: string, memoryBankEntryIds: bigint[], saveToHistory: boolean): Promise<{
        response: MemoryBankChatMessage;
    }>;
    getMemoryBankChatHistory(): Promise<{
        history: MemoryBankChatMessage[];
    }>;
    clearMemoryBankChatHistory(): Promise<void>;
    confirmAllTabGroups(): Promise<{
        success: boolean;
    }>;
    getConfirmedTabGroups(): Promise<{
        groups: TabGroup[];
    }>;
    removeConfirmedTabGroup(savedGuid: mojoBase_mojom_Uuid): Promise<void>;
    closeConfirmedTabGroup(savedGuid: mojoBase_mojom_Uuid): Promise<void>;
    removeAllConfirmedTabGroups(): Promise<void>;
    executeSmartSearch(query: string): Promise<{
        results: SmartSearchResult[];
    }>;
    openUrlsInTabGroup(groupLabel: string, urls: url_mojom_Url[]): Promise<{
        success: boolean;
    }>;
    getTopics(): Promise<{
        topics: Topic[];
    }>;
    getTopic(id: string): Promise<{
        topic: (Topic | null);
    }>;
    getTopicPageImageUrl(pageUrl: url_mojom_Url): Promise<{
        imageUrl: (url_mojom_Url | null);
    }>;
    getTopicPageFaviconColor(pageUrl: url_mojom_Url): Promise<{
        color: (skia_mojom_SkColor | null);
    }>;
    openTopic(topicIdOrUrl: TopicIdOrUrl): void;
    openGlicPanel(prompts: string[]): void;
    setTopicFeedback(feedback: TopicFeedback): Promise<void>;
    deleteTopicFeedback(topicId: string): Promise<void>;
    getTopicFeedbacks(): Promise<{
        feedbacks: TopicFeedback[];
    }>;
    clearTopicFeedbacks(): Promise<void>;
    getTopicsFeedbackExportPreview(windowDays: number): Promise<{
        preview: TopicsFeedbackExportPreview;
    }>;
    generateTopicsFeedbackBundle(options: TopicsFeedbackExportOptions): Promise<{
        jsonBundle: string;
    }>;
    runTodoTask(prompt: string): Promise<{
        success: boolean;
    }>;
    openContextHubPage(): Promise<void>;
    openWebUrl(url: url_mojom_Url): Promise<void>;
    copyAttachmentsToClipboard(files: MemoryBankFileAttachment[]): Promise<{
        status: CopyAttachmentsToClipboardStatus;
    }>;
    startSkillRecording(): void;
    stopSkillRecording(): Promise<{
        data: SkillRecordingSessionData;
    }>;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerInterface);
}
export declare class PageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerRemote;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    generateFirstPartyAutoTodos: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAutoTodos: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateAutoTodo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(todo: AutoTodoItem) => any>;
    generateTabBasedTodos: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearFirstPartyAutoTodos: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearThirdPartyAutoTodos: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setTodoFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(feedback: AutoTodoItemFeedback) => any>;
    deleteTodoFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    clearTodoFeedbacks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTodoFeedbacks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getSaveToMemoryBankContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAllMemoryBankEntries: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteMemoryBankEntries: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ids: bigint[]) => any>;
    saveMemoryBankEntry: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(annotations: MemoryBankEntryAnnotations) => any>;
    getAllMemoryBankTags: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAllMemoryBankCollections: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateMemoryBankEntryAnnotations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: bigint, annotations: MemoryBankEntryAnnotations) => any>;
    uploadMemoryBankEntries: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entries: MemoryBankEntry[]) => any>;
    getTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    retrieveAndGroupTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(userCommand: string) => any>;
    getExistingTabGroupsAndChats: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    switchToTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: bigint) => any>;
    closeTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: bigint) => any>;
    clearTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    replaceTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groups: TabGroup[]) => any>;
    clearTabGroupChatHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    askGeminiWithContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(userCommand: string, memoryBankEntryIds: bigint[], saveToHistory: boolean) => any>;
    getMemoryBankChatHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearMemoryBankChatHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    confirmAllTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getConfirmedTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    removeConfirmedTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(savedGuid: mojoBase_mojom_Uuid) => any>;
    closeConfirmedTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(savedGuid: mojoBase_mojom_Uuid) => any>;
    removeAllConfirmedTabGroups: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    executeSmartSearch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    openUrlsInTabGroup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(groupLabel: string, urls: url_mojom_Url[]) => any>;
    getTopics: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTopic: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    getTopicPageImageUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pageUrl: url_mojom_Url) => any>;
    getTopicPageFaviconColor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pageUrl: url_mojom_Url) => any>;
    openTopic: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(topicIdOrUrl: TopicIdOrUrl) => any>;
    openGlicPanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prompts: string[]) => any>;
    setTopicFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(feedback: TopicFeedback) => any>;
    deleteTopicFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(topicId: string) => any>;
    getTopicFeedbacks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearTopicFeedbacks: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTopicsFeedbackExportPreview: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(windowDays: number) => any>;
    generateTopicsFeedbackBundle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: TopicsFeedbackExportOptions) => any>;
    runTodoTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prompt: string) => any>;
    openContextHubPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openWebUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    copyAttachmentsToClipboard: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(files: MemoryBankFileAttachment[]) => any>;
    startSkillRecording: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    stopSkillRecording: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const GmailReferenceSpec: {
    $: mojo.internal.MojomType;
};
export declare const PhotosReferenceSpec: {
    $: mojo.internal.MojomType;
};
export declare const DriveFileSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChromeHistoryEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const FirstPartyDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThirdPartyDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutoTodoItemSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutoTodosGenerationMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const MemoryBankEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const TabInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChatReferenceSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChatMessageSpec: {
    $: mojo.internal.MojomType;
};
export declare const MemoryBankChatMessageSpec: {
    $: mojo.internal.MojomType;
};
export declare const SaveToMemoryBankContextSpec: {
    $: mojo.internal.MojomType;
};
export declare const MemoryBankEntryAnnotationsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutoTodoItemFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare const SmartSearchResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicVisitSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicContinuationQuerySpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicCollectionItemSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicCollectionSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicSnapshotSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicQueryFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare const DuplicateTopicSnapshotSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicCollectionFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicsFeedbackExportStatsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicsFeedbackExportUrlSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicsFeedbackExportDomainSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicsFeedbackExportPreviewSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicsFeedbackExportOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MemoryBankFileAttachmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillRecordingActionSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillRecordingSessionDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAutoTodosChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnFirstPartyAutoTodosGenerationStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnThirdPartyAutoTodosGenerationStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnMemoryBankEntryAdded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnMemoryBankEntryUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnMemoryBankEntriesDeleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GenerateFirstPartyAutoTodos_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GenerateFirstPartyAutoTodos_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAutoTodos_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAutoTodos_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateAutoTodo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateAutoTodo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GenerateTabBasedTodos_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GenerateTabBasedTodos_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearFirstPartyAutoTodos_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearFirstPartyAutoTodos_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearThirdPartyAutoTodos_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearThirdPartyAutoTodos_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetTodoFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetTodoFeedback_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteTodoFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteTodoFeedback_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTodoFeedbacks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTodoFeedbacks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTodoFeedbacks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTodoFeedbacks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSaveToMemoryBankContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSaveToMemoryBankContext_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllMemoryBankEntries_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllMemoryBankEntries_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteMemoryBankEntries_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteMemoryBankEntries_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SaveMemoryBankEntry_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SaveMemoryBankEntry_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllMemoryBankTags_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllMemoryBankTags_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllMemoryBankCollections_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetAllMemoryBankCollections_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateMemoryBankEntryAnnotations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateMemoryBankEntryAnnotations_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UploadMemoryBankEntries_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UploadMemoryBankEntries_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RetrieveAndGroupTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RetrieveAndGroupTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetExistingTabGroupsAndChats_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetExistingTabGroupsAndChats_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SwitchToTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ReplaceTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ReplaceTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTabGroupChatHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTabGroupChatHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AskGeminiWithContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AskGeminiWithContext_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetMemoryBankChatHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetMemoryBankChatHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearMemoryBankChatHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearMemoryBankChatHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ConfirmAllTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ConfirmAllTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetConfirmedTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetConfirmedTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveConfirmedTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveConfirmedTabGroup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseConfirmedTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseConfirmedTabGroup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveAllConfirmedTabGroups_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RemoveAllConfirmedTabGroups_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExecuteSmartSearch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExecuteSmartSearch_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenUrlsInTabGroup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenUrlsInTabGroup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopics_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopics_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopic_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopic_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicPageImageUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicPageImageUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicPageFaviconColor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicPageFaviconColor_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenTopic_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenGlicPanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetTopicFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetTopicFeedback_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteTopicFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteTopicFeedback_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicFeedbacks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicFeedbacks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTopicFeedbacks_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearTopicFeedbacks_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicsFeedbackExportPreview_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTopicsFeedbackExportPreview_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GenerateTopicsFeedbackBundle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GenerateTopicsFeedbackBundle_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RunTodoTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RunTodoTask_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenContextHubPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenContextHubPage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenWebUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenWebUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CopyAttachmentsToClipboard_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CopyAttachmentsToClipboard_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartSkillRecording_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StopSkillRecording_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StopSkillRecording_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SourceReferenceSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutoTodoDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const TopicIdOrUrlSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GmailReferenceMojoType {
    messageUrl: url_mojom_Url;
    subject: string;
}
export type GmailReference = GmailReferenceMojoType;
export declare interface PhotosReferenceMojoType {
    photosUrl: url_mojom_Url;
}
export type PhotosReference = PhotosReferenceMojoType;
export declare interface DriveFileMojoType {
    url: url_mojom_Url;
    name: string;
}
export type DriveFile = DriveFileMojoType;
export declare interface ChromeHistoryEntryMojoType {
    url: url_mojom_Url;
    title: string;
    visitTimestamp: mojoBase_mojom_Time;
}
export type ChromeHistoryEntry = ChromeHistoryEntryMojoType;
export declare interface FirstPartyDataMojoType {
    sourceReferences: SourceReference[];
    actionableUrl: (url_mojom_Url | null);
}
export type FirstPartyData = FirstPartyDataMojoType;
export declare interface ThirdPartyDataMojoType {
    tabId: bigint;
    lastActiveTimestamp: mojoBase_mojom_Time;
    groupType: AutoTodoGroup;
}
export type ThirdPartyData = ThirdPartyDataMojoType;
export declare interface AutoTodoItemMojoType {
    id: string;
    title: string;
    description: string;
    status: AutoTodoStatus;
    score: number;
    data: AutoTodoData;
}
export type AutoTodoItem = AutoTodoItemMojoType;
export declare interface AutoTodosGenerationMetadataMojoType {
    lastGenerationTime: mojoBase_mojom_Time;
    hasError: boolean;
}
export type AutoTodosGenerationMetadata = AutoTodosGenerationMetadataMojoType;
export declare interface MemoryBankEntryMojoType {
    id: bigint;
    type: EntryType;
    timestamp: mojoBase_mojom_Time;
    url: url_mojom_Url;
    tabTitle: string;
    selectedText: (string | null);
    imageUrl: (url_mojom_Url | null);
    tags: string[];
    note: (string | null);
    collection: (string | null);
}
export type MemoryBankEntry = MemoryBankEntryMojoType;
export declare interface TabInfoMojoType {
    id: bigint;
    title: string;
    url: url_mojom_Url;
}
export type TabInfo = TabInfoMojoType;
export declare interface TabGroupMojoType {
    label: string;
    tabs: TabInfo[];
    savedGuid: (mojoBase_mojom_Uuid | null);
}
export type TabGroup = TabGroupMojoType;
export declare interface ChatReferenceMojoType {
    title: string;
    url: url_mojom_Url;
}
export type ChatReference = ChatReferenceMojoType;
export declare interface ChatMessageMojoType {
    role: ChatRole;
    content: string;
}
export type ChatMessage = ChatMessageMojoType;
export declare interface MemoryBankChatMessageMojoType {
    role: ChatRole;
    content: string;
    references: ChatReference[];
}
export type MemoryBankChatMessage = MemoryBankChatMessageMojoType;
export declare interface SaveToMemoryBankContextMojoType {
    url: url_mojom_Url;
    tabTitle: string;
    selectedText: (string | null);
    imageUrl: (url_mojom_Url | null);
}
export type SaveToMemoryBankContext = SaveToMemoryBankContextMojoType;
export declare interface MemoryBankEntryAnnotationsMojoType {
    collection: (string | null);
    note: (string | null);
    tags: (string[] | null);
}
export type MemoryBankEntryAnnotations = MemoryBankEntryAnnotationsMojoType;
export declare interface AutoTodoItemFeedbackMojoType {
    todoId: string;
    liked: boolean;
}
export type AutoTodoItemFeedback = AutoTodoItemFeedbackMojoType;
export declare interface SmartSearchResultMojoType {
    description: string;
    sourceReferences: SourceReference[];
}
export type SmartSearchResult = SmartSearchResultMojoType;
export declare interface TopicVisitMojoType {
    url: url_mojom_Url;
    title: string;
    visitTime: mojoBase_mojom_Time;
}
export type TopicVisit = TopicVisitMojoType;
export declare interface TopicContinuationQueryMojoType {
    title: string;
    prompt: string;
}
export type TopicContinuationQuery = TopicContinuationQueryMojoType;
export declare interface TopicCollectionItemMojoType {
    title: string;
    url: url_mojom_Url;
    siteName: (string | null);
    visitTime: mojoBase_mojom_Time;
}
export type TopicCollectionItem = TopicCollectionItemMojoType;
export declare interface TopicCollectionMojoType {
    title: string;
    items: TopicCollectionItem[];
}
export type TopicCollection = TopicCollectionMojoType;
export declare interface TopicMojoType {
    id: string;
    title: string;
    creationTime: mojoBase_mojom_Time;
    emoji: (string | null);
    overview: (string | null);
    shortOverview: (string | null);
    visits: TopicVisit[];
    continuationQueries: TopicContinuationQuery[];
    collections: TopicCollection[];
}
export type Topic = TopicMojoType;
export declare interface TopicSnapshotMojoType {
    title: string;
    emoji: string;
    overview: string;
    visitTimes: mojoBase_mojom_Time[];
    timeRated: mojoBase_mojom_Time;
}
export type TopicSnapshot = TopicSnapshotMojoType;
export declare interface TopicQueryFeedbackMojoType {
    index: number;
    liked: boolean;
    queryText: string;
}
export type TopicQueryFeedback = TopicQueryFeedbackMojoType;
export declare interface DuplicateTopicSnapshotMojoType {
    id: string;
    title: string;
    visitTimes: mojoBase_mojom_Time[];
}
export type DuplicateTopicSnapshot = DuplicateTopicSnapshotMojoType;
export declare interface TopicCollectionFeedbackMojoType {
    title: string;
    rating: TopicRating;
    rejectedItemVisits: mojoBase_mojom_Time[];
}
export type TopicCollectionFeedback = TopicCollectionFeedbackMojoType;
export declare interface TopicFeedbackMojoType {
    id: string;
    snapshot: TopicSnapshot;
    rating: TopicRating;
    defects: TopicDefectCategory[];
    comment: string;
    queryFeedbacks: TopicQueryFeedback[];
    rejectedVisits: mojoBase_mojom_Time[];
    duplicateOf: (DuplicateTopicSnapshot | null);
    collectionFeedbacks: TopicCollectionFeedback[];
}
export type TopicFeedback = TopicFeedbackMojoType;
export declare interface TopicsFeedbackExportStatsMojoType {
    topics: number;
    visits: number;
    unclusteredVisits: number;
    unresolvableTopics: number;
}
export type TopicsFeedbackExportStats = TopicsFeedbackExportStatsMojoType;
export declare interface TopicsFeedbackExportUrlMojoType {
    url: url_mojom_Url;
    title: string;
    visitCount: number;
}
export type TopicsFeedbackExportUrl = TopicsFeedbackExportUrlMojoType;
export declare interface TopicsFeedbackExportDomainMojoType {
    domain: string;
    visitCount: number;
    defaultExcluded: boolean;
    urls: TopicsFeedbackExportUrl[];
}
export type TopicsFeedbackExportDomain = TopicsFeedbackExportDomainMojoType;
export declare interface TopicsFeedbackExportPreviewMojoType {
    stats: TopicsFeedbackExportStats;
    domains: TopicsFeedbackExportDomain[];
}
export type TopicsFeedbackExportPreview = TopicsFeedbackExportPreviewMojoType;
export declare interface TopicsFeedbackExportOptionsMojoType {
    windowDays: number;
    excludedDomains: string[];
    excludedUrls: url_mojom_Url[];
    missingTopics: string;
}
export type TopicsFeedbackExportOptions = TopicsFeedbackExportOptionsMojoType;
export declare interface MemoryBankFileAttachmentMojoType {
    filename: string;
    content: string;
}
export type MemoryBankFileAttachment = MemoryBankFileAttachmentMojoType;
export declare interface SkillRecordingActionMojoType {
    description: string;
    timestamp: mojoBase_mojom_TimeDelta;
}
export type SkillRecordingAction = SkillRecordingActionMojoType;
export declare interface SkillRecordingSessionDataMojoType {
    actions: SkillRecordingAction[];
}
export type SkillRecordingSessionData = SkillRecordingSessionDataMojoType;
export declare interface Page_OnAutoTodosChanged_ParamsMojoType {
    todos: AutoTodoItem[];
}
export type Page_OnAutoTodosChanged_Params = Page_OnAutoTodosChanged_ParamsMojoType;
export declare interface Page_OnFirstPartyAutoTodosGenerationStateChanged_ParamsMojoType {
    isGenerating: boolean;
}
export type Page_OnFirstPartyAutoTodosGenerationStateChanged_Params = Page_OnFirstPartyAutoTodosGenerationStateChanged_ParamsMojoType;
export declare interface Page_OnThirdPartyAutoTodosGenerationStateChanged_ParamsMojoType {
    isGenerating: boolean;
}
export type Page_OnThirdPartyAutoTodosGenerationStateChanged_Params = Page_OnThirdPartyAutoTodosGenerationStateChanged_ParamsMojoType;
export declare interface Page_OnMemoryBankEntryAdded_ParamsMojoType {
    entry: MemoryBankEntry;
}
export type Page_OnMemoryBankEntryAdded_Params = Page_OnMemoryBankEntryAdded_ParamsMojoType;
export declare interface Page_OnMemoryBankEntryUpdated_ParamsMojoType {
    id: bigint;
    annotations: MemoryBankEntryAnnotations;
}
export type Page_OnMemoryBankEntryUpdated_Params = Page_OnMemoryBankEntryUpdated_ParamsMojoType;
export declare interface Page_OnMemoryBankEntriesDeleted_ParamsMojoType {
    ids: bigint[];
}
export type Page_OnMemoryBankEntriesDeleted_Params = Page_OnMemoryBankEntriesDeleted_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GenerateFirstPartyAutoTodos_ParamsMojoType {
}
export type PageHandler_GenerateFirstPartyAutoTodos_Params = PageHandler_GenerateFirstPartyAutoTodos_ParamsMojoType;
export declare interface PageHandler_GenerateFirstPartyAutoTodos_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_GenerateFirstPartyAutoTodos_ResponseParams = PageHandler_GenerateFirstPartyAutoTodos_ResponseParamsMojoType;
export declare interface PageHandler_GetAutoTodos_ParamsMojoType {
}
export type PageHandler_GetAutoTodos_Params = PageHandler_GetAutoTodos_ParamsMojoType;
export declare interface PageHandler_GetAutoTodos_ResponseParamsMojoType {
    firstPartyTodos: AutoTodoItem[];
    thirdPartyTodos: AutoTodoItem[];
    firstPartyMetadata: AutoTodosGenerationMetadata;
    thirdPartyMetadata: AutoTodosGenerationMetadata;
}
export type PageHandler_GetAutoTodos_ResponseParams = PageHandler_GetAutoTodos_ResponseParamsMojoType;
export declare interface PageHandler_UpdateAutoTodo_ParamsMojoType {
    todo: AutoTodoItem;
}
export type PageHandler_UpdateAutoTodo_Params = PageHandler_UpdateAutoTodo_ParamsMojoType;
export declare interface PageHandler_UpdateAutoTodo_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_UpdateAutoTodo_ResponseParams = PageHandler_UpdateAutoTodo_ResponseParamsMojoType;
export declare interface PageHandler_GenerateTabBasedTodos_ParamsMojoType {
}
export type PageHandler_GenerateTabBasedTodos_Params = PageHandler_GenerateTabBasedTodos_ParamsMojoType;
export declare interface PageHandler_GenerateTabBasedTodos_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_GenerateTabBasedTodos_ResponseParams = PageHandler_GenerateTabBasedTodos_ResponseParamsMojoType;
export declare interface PageHandler_ClearFirstPartyAutoTodos_ParamsMojoType {
}
export type PageHandler_ClearFirstPartyAutoTodos_Params = PageHandler_ClearFirstPartyAutoTodos_ParamsMojoType;
export declare interface PageHandler_ClearFirstPartyAutoTodos_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_ClearFirstPartyAutoTodos_ResponseParams = PageHandler_ClearFirstPartyAutoTodos_ResponseParamsMojoType;
export declare interface PageHandler_ClearThirdPartyAutoTodos_ParamsMojoType {
}
export type PageHandler_ClearThirdPartyAutoTodos_Params = PageHandler_ClearThirdPartyAutoTodos_ParamsMojoType;
export declare interface PageHandler_ClearThirdPartyAutoTodos_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_ClearThirdPartyAutoTodos_ResponseParams = PageHandler_ClearThirdPartyAutoTodos_ResponseParamsMojoType;
export declare interface PageHandler_SetTodoFeedback_ParamsMojoType {
    feedback: AutoTodoItemFeedback;
}
export type PageHandler_SetTodoFeedback_Params = PageHandler_SetTodoFeedback_ParamsMojoType;
export declare interface PageHandler_SetTodoFeedback_ResponseParamsMojoType {
}
export type PageHandler_SetTodoFeedback_ResponseParams = PageHandler_SetTodoFeedback_ResponseParamsMojoType;
export declare interface PageHandler_DeleteTodoFeedback_ParamsMojoType {
    id: string;
}
export type PageHandler_DeleteTodoFeedback_Params = PageHandler_DeleteTodoFeedback_ParamsMojoType;
export declare interface PageHandler_DeleteTodoFeedback_ResponseParamsMojoType {
}
export type PageHandler_DeleteTodoFeedback_ResponseParams = PageHandler_DeleteTodoFeedback_ResponseParamsMojoType;
export declare interface PageHandler_ClearTodoFeedbacks_ParamsMojoType {
}
export type PageHandler_ClearTodoFeedbacks_Params = PageHandler_ClearTodoFeedbacks_ParamsMojoType;
export declare interface PageHandler_ClearTodoFeedbacks_ResponseParamsMojoType {
}
export type PageHandler_ClearTodoFeedbacks_ResponseParams = PageHandler_ClearTodoFeedbacks_ResponseParamsMojoType;
export declare interface PageHandler_GetTodoFeedbacks_ParamsMojoType {
}
export type PageHandler_GetTodoFeedbacks_Params = PageHandler_GetTodoFeedbacks_ParamsMojoType;
export declare interface PageHandler_GetTodoFeedbacks_ResponseParamsMojoType {
    feedbacks: AutoTodoItemFeedback[];
}
export type PageHandler_GetTodoFeedbacks_ResponseParams = PageHandler_GetTodoFeedbacks_ResponseParamsMojoType;
export declare interface PageHandler_GetSaveToMemoryBankContext_ParamsMojoType {
}
export type PageHandler_GetSaveToMemoryBankContext_Params = PageHandler_GetSaveToMemoryBankContext_ParamsMojoType;
export declare interface PageHandler_GetSaveToMemoryBankContext_ResponseParamsMojoType {
    context: (SaveToMemoryBankContext | null);
}
export type PageHandler_GetSaveToMemoryBankContext_ResponseParams = PageHandler_GetSaveToMemoryBankContext_ResponseParamsMojoType;
export declare interface PageHandler_GetAllMemoryBankEntries_ParamsMojoType {
}
export type PageHandler_GetAllMemoryBankEntries_Params = PageHandler_GetAllMemoryBankEntries_ParamsMojoType;
export declare interface PageHandler_GetAllMemoryBankEntries_ResponseParamsMojoType {
    entries: MemoryBankEntry[];
}
export type PageHandler_GetAllMemoryBankEntries_ResponseParams = PageHandler_GetAllMemoryBankEntries_ResponseParamsMojoType;
export declare interface PageHandler_DeleteMemoryBankEntries_ParamsMojoType {
    ids: bigint[];
}
export type PageHandler_DeleteMemoryBankEntries_Params = PageHandler_DeleteMemoryBankEntries_ParamsMojoType;
export declare interface PageHandler_DeleteMemoryBankEntries_ResponseParamsMojoType {
}
export type PageHandler_DeleteMemoryBankEntries_ResponseParams = PageHandler_DeleteMemoryBankEntries_ResponseParamsMojoType;
export declare interface PageHandler_SaveMemoryBankEntry_ParamsMojoType {
    annotations: MemoryBankEntryAnnotations;
}
export type PageHandler_SaveMemoryBankEntry_Params = PageHandler_SaveMemoryBankEntry_ParamsMojoType;
export declare interface PageHandler_SaveMemoryBankEntry_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_SaveMemoryBankEntry_ResponseParams = PageHandler_SaveMemoryBankEntry_ResponseParamsMojoType;
export declare interface PageHandler_GetAllMemoryBankTags_ParamsMojoType {
}
export type PageHandler_GetAllMemoryBankTags_Params = PageHandler_GetAllMemoryBankTags_ParamsMojoType;
export declare interface PageHandler_GetAllMemoryBankTags_ResponseParamsMojoType {
    tags: string[];
}
export type PageHandler_GetAllMemoryBankTags_ResponseParams = PageHandler_GetAllMemoryBankTags_ResponseParamsMojoType;
export declare interface PageHandler_GetAllMemoryBankCollections_ParamsMojoType {
}
export type PageHandler_GetAllMemoryBankCollections_Params = PageHandler_GetAllMemoryBankCollections_ParamsMojoType;
export declare interface PageHandler_GetAllMemoryBankCollections_ResponseParamsMojoType {
    collections: string[];
}
export type PageHandler_GetAllMemoryBankCollections_ResponseParams = PageHandler_GetAllMemoryBankCollections_ResponseParamsMojoType;
export declare interface PageHandler_UpdateMemoryBankEntryAnnotations_ParamsMojoType {
    id: bigint;
    annotations: MemoryBankEntryAnnotations;
}
export type PageHandler_UpdateMemoryBankEntryAnnotations_Params = PageHandler_UpdateMemoryBankEntryAnnotations_ParamsMojoType;
export declare interface PageHandler_UpdateMemoryBankEntryAnnotations_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_UpdateMemoryBankEntryAnnotations_ResponseParams = PageHandler_UpdateMemoryBankEntryAnnotations_ResponseParamsMojoType;
export declare interface PageHandler_UploadMemoryBankEntries_ParamsMojoType {
    entries: MemoryBankEntry[];
}
export type PageHandler_UploadMemoryBankEntries_Params = PageHandler_UploadMemoryBankEntries_ParamsMojoType;
export declare interface PageHandler_UploadMemoryBankEntries_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_UploadMemoryBankEntries_ResponseParams = PageHandler_UploadMemoryBankEntries_ResponseParamsMojoType;
export declare interface PageHandler_GetTabs_ParamsMojoType {
}
export type PageHandler_GetTabs_Params = PageHandler_GetTabs_ParamsMojoType;
export declare interface PageHandler_GetTabs_ResponseParamsMojoType {
    tabs: TabInfo[];
}
export type PageHandler_GetTabs_ResponseParams = PageHandler_GetTabs_ResponseParamsMojoType;
export declare interface PageHandler_RetrieveAndGroupTabs_ParamsMojoType {
    userCommand: string;
}
export type PageHandler_RetrieveAndGroupTabs_Params = PageHandler_RetrieveAndGroupTabs_ParamsMojoType;
export declare interface PageHandler_RetrieveAndGroupTabs_ResponseParamsMojoType {
    groups: TabGroup[];
    ungroupedTabs: TabInfo[];
    llmResponse: (ChatMessage | null);
}
export type PageHandler_RetrieveAndGroupTabs_ResponseParams = PageHandler_RetrieveAndGroupTabs_ResponseParamsMojoType;
export declare interface PageHandler_GetExistingTabGroupsAndChats_ParamsMojoType {
}
export type PageHandler_GetExistingTabGroupsAndChats_Params = PageHandler_GetExistingTabGroupsAndChats_ParamsMojoType;
export declare interface PageHandler_GetExistingTabGroupsAndChats_ResponseParamsMojoType {
    groups: TabGroup[];
    ungroupedTabs: TabInfo[];
    history: ChatMessage[];
}
export type PageHandler_GetExistingTabGroupsAndChats_ResponseParams = PageHandler_GetExistingTabGroupsAndChats_ResponseParamsMojoType;
export declare interface PageHandler_SwitchToTab_ParamsMojoType {
    tabId: bigint;
}
export type PageHandler_SwitchToTab_Params = PageHandler_SwitchToTab_ParamsMojoType;
export declare interface PageHandler_CloseTab_ParamsMojoType {
    tabId: bigint;
}
export type PageHandler_CloseTab_Params = PageHandler_CloseTab_ParamsMojoType;
export declare interface PageHandler_ClearTabGroups_ParamsMojoType {
}
export type PageHandler_ClearTabGroups_Params = PageHandler_ClearTabGroups_ParamsMojoType;
export declare interface PageHandler_ClearTabGroups_ResponseParamsMojoType {
}
export type PageHandler_ClearTabGroups_ResponseParams = PageHandler_ClearTabGroups_ResponseParamsMojoType;
export declare interface PageHandler_ReplaceTabGroups_ParamsMojoType {
    groups: TabGroup[];
}
export type PageHandler_ReplaceTabGroups_Params = PageHandler_ReplaceTabGroups_ParamsMojoType;
export declare interface PageHandler_ReplaceTabGroups_ResponseParamsMojoType {
}
export type PageHandler_ReplaceTabGroups_ResponseParams = PageHandler_ReplaceTabGroups_ResponseParamsMojoType;
export declare interface PageHandler_ClearTabGroupChatHistory_ParamsMojoType {
}
export type PageHandler_ClearTabGroupChatHistory_Params = PageHandler_ClearTabGroupChatHistory_ParamsMojoType;
export declare interface PageHandler_ClearTabGroupChatHistory_ResponseParamsMojoType {
}
export type PageHandler_ClearTabGroupChatHistory_ResponseParams = PageHandler_ClearTabGroupChatHistory_ResponseParamsMojoType;
export declare interface PageHandler_AskGeminiWithContext_ParamsMojoType {
    userCommand: string;
    memoryBankEntryIds: bigint[];
    saveToHistory: boolean;
}
export type PageHandler_AskGeminiWithContext_Params = PageHandler_AskGeminiWithContext_ParamsMojoType;
export declare interface PageHandler_AskGeminiWithContext_ResponseParamsMojoType {
    response: MemoryBankChatMessage;
}
export type PageHandler_AskGeminiWithContext_ResponseParams = PageHandler_AskGeminiWithContext_ResponseParamsMojoType;
export declare interface PageHandler_GetMemoryBankChatHistory_ParamsMojoType {
}
export type PageHandler_GetMemoryBankChatHistory_Params = PageHandler_GetMemoryBankChatHistory_ParamsMojoType;
export declare interface PageHandler_GetMemoryBankChatHistory_ResponseParamsMojoType {
    history: MemoryBankChatMessage[];
}
export type PageHandler_GetMemoryBankChatHistory_ResponseParams = PageHandler_GetMemoryBankChatHistory_ResponseParamsMojoType;
export declare interface PageHandler_ClearMemoryBankChatHistory_ParamsMojoType {
}
export type PageHandler_ClearMemoryBankChatHistory_Params = PageHandler_ClearMemoryBankChatHistory_ParamsMojoType;
export declare interface PageHandler_ClearMemoryBankChatHistory_ResponseParamsMojoType {
}
export type PageHandler_ClearMemoryBankChatHistory_ResponseParams = PageHandler_ClearMemoryBankChatHistory_ResponseParamsMojoType;
export declare interface PageHandler_ConfirmAllTabGroups_ParamsMojoType {
}
export type PageHandler_ConfirmAllTabGroups_Params = PageHandler_ConfirmAllTabGroups_ParamsMojoType;
export declare interface PageHandler_ConfirmAllTabGroups_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_ConfirmAllTabGroups_ResponseParams = PageHandler_ConfirmAllTabGroups_ResponseParamsMojoType;
export declare interface PageHandler_GetConfirmedTabGroups_ParamsMojoType {
}
export type PageHandler_GetConfirmedTabGroups_Params = PageHandler_GetConfirmedTabGroups_ParamsMojoType;
export declare interface PageHandler_GetConfirmedTabGroups_ResponseParamsMojoType {
    groups: TabGroup[];
}
export type PageHandler_GetConfirmedTabGroups_ResponseParams = PageHandler_GetConfirmedTabGroups_ResponseParamsMojoType;
export declare interface PageHandler_RemoveConfirmedTabGroup_ParamsMojoType {
    savedGuid: mojoBase_mojom_Uuid;
}
export type PageHandler_RemoveConfirmedTabGroup_Params = PageHandler_RemoveConfirmedTabGroup_ParamsMojoType;
export declare interface PageHandler_RemoveConfirmedTabGroup_ResponseParamsMojoType {
}
export type PageHandler_RemoveConfirmedTabGroup_ResponseParams = PageHandler_RemoveConfirmedTabGroup_ResponseParamsMojoType;
export declare interface PageHandler_CloseConfirmedTabGroup_ParamsMojoType {
    savedGuid: mojoBase_mojom_Uuid;
}
export type PageHandler_CloseConfirmedTabGroup_Params = PageHandler_CloseConfirmedTabGroup_ParamsMojoType;
export declare interface PageHandler_CloseConfirmedTabGroup_ResponseParamsMojoType {
}
export type PageHandler_CloseConfirmedTabGroup_ResponseParams = PageHandler_CloseConfirmedTabGroup_ResponseParamsMojoType;
export declare interface PageHandler_RemoveAllConfirmedTabGroups_ParamsMojoType {
}
export type PageHandler_RemoveAllConfirmedTabGroups_Params = PageHandler_RemoveAllConfirmedTabGroups_ParamsMojoType;
export declare interface PageHandler_RemoveAllConfirmedTabGroups_ResponseParamsMojoType {
}
export type PageHandler_RemoveAllConfirmedTabGroups_ResponseParams = PageHandler_RemoveAllConfirmedTabGroups_ResponseParamsMojoType;
export declare interface PageHandler_ExecuteSmartSearch_ParamsMojoType {
    query: string;
}
export type PageHandler_ExecuteSmartSearch_Params = PageHandler_ExecuteSmartSearch_ParamsMojoType;
export declare interface PageHandler_ExecuteSmartSearch_ResponseParamsMojoType {
    results: SmartSearchResult[];
}
export type PageHandler_ExecuteSmartSearch_ResponseParams = PageHandler_ExecuteSmartSearch_ResponseParamsMojoType;
export declare interface PageHandler_OpenUrlsInTabGroup_ParamsMojoType {
    groupLabel: string;
    urls: url_mojom_Url[];
}
export type PageHandler_OpenUrlsInTabGroup_Params = PageHandler_OpenUrlsInTabGroup_ParamsMojoType;
export declare interface PageHandler_OpenUrlsInTabGroup_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_OpenUrlsInTabGroup_ResponseParams = PageHandler_OpenUrlsInTabGroup_ResponseParamsMojoType;
export declare interface PageHandler_GetTopics_ParamsMojoType {
}
export type PageHandler_GetTopics_Params = PageHandler_GetTopics_ParamsMojoType;
export declare interface PageHandler_GetTopics_ResponseParamsMojoType {
    topics: Topic[];
}
export type PageHandler_GetTopics_ResponseParams = PageHandler_GetTopics_ResponseParamsMojoType;
export declare interface PageHandler_GetTopic_ParamsMojoType {
    id: string;
}
export type PageHandler_GetTopic_Params = PageHandler_GetTopic_ParamsMojoType;
export declare interface PageHandler_GetTopic_ResponseParamsMojoType {
    topic: (Topic | null);
}
export type PageHandler_GetTopic_ResponseParams = PageHandler_GetTopic_ResponseParamsMojoType;
export declare interface PageHandler_GetTopicPageImageUrl_ParamsMojoType {
    pageUrl: url_mojom_Url;
}
export type PageHandler_GetTopicPageImageUrl_Params = PageHandler_GetTopicPageImageUrl_ParamsMojoType;
export declare interface PageHandler_GetTopicPageImageUrl_ResponseParamsMojoType {
    imageUrl: (url_mojom_Url | null);
}
export type PageHandler_GetTopicPageImageUrl_ResponseParams = PageHandler_GetTopicPageImageUrl_ResponseParamsMojoType;
export declare interface PageHandler_GetTopicPageFaviconColor_ParamsMojoType {
    pageUrl: url_mojom_Url;
}
export type PageHandler_GetTopicPageFaviconColor_Params = PageHandler_GetTopicPageFaviconColor_ParamsMojoType;
export declare interface PageHandler_GetTopicPageFaviconColor_ResponseParamsMojoType {
    color: (skia_mojom_SkColor | null);
}
export type PageHandler_GetTopicPageFaviconColor_ResponseParams = PageHandler_GetTopicPageFaviconColor_ResponseParamsMojoType;
export declare interface PageHandler_OpenTopic_ParamsMojoType {
    topicIdOrUrl: TopicIdOrUrl;
}
export type PageHandler_OpenTopic_Params = PageHandler_OpenTopic_ParamsMojoType;
export declare interface PageHandler_OpenGlicPanel_ParamsMojoType {
    prompts: string[];
}
export type PageHandler_OpenGlicPanel_Params = PageHandler_OpenGlicPanel_ParamsMojoType;
export declare interface PageHandler_SetTopicFeedback_ParamsMojoType {
    feedback: TopicFeedback;
}
export type PageHandler_SetTopicFeedback_Params = PageHandler_SetTopicFeedback_ParamsMojoType;
export declare interface PageHandler_SetTopicFeedback_ResponseParamsMojoType {
}
export type PageHandler_SetTopicFeedback_ResponseParams = PageHandler_SetTopicFeedback_ResponseParamsMojoType;
export declare interface PageHandler_DeleteTopicFeedback_ParamsMojoType {
    topicId: string;
}
export type PageHandler_DeleteTopicFeedback_Params = PageHandler_DeleteTopicFeedback_ParamsMojoType;
export declare interface PageHandler_DeleteTopicFeedback_ResponseParamsMojoType {
}
export type PageHandler_DeleteTopicFeedback_ResponseParams = PageHandler_DeleteTopicFeedback_ResponseParamsMojoType;
export declare interface PageHandler_GetTopicFeedbacks_ParamsMojoType {
}
export type PageHandler_GetTopicFeedbacks_Params = PageHandler_GetTopicFeedbacks_ParamsMojoType;
export declare interface PageHandler_GetTopicFeedbacks_ResponseParamsMojoType {
    feedbacks: TopicFeedback[];
}
export type PageHandler_GetTopicFeedbacks_ResponseParams = PageHandler_GetTopicFeedbacks_ResponseParamsMojoType;
export declare interface PageHandler_ClearTopicFeedbacks_ParamsMojoType {
}
export type PageHandler_ClearTopicFeedbacks_Params = PageHandler_ClearTopicFeedbacks_ParamsMojoType;
export declare interface PageHandler_ClearTopicFeedbacks_ResponseParamsMojoType {
}
export type PageHandler_ClearTopicFeedbacks_ResponseParams = PageHandler_ClearTopicFeedbacks_ResponseParamsMojoType;
export declare interface PageHandler_GetTopicsFeedbackExportPreview_ParamsMojoType {
    windowDays: number;
}
export type PageHandler_GetTopicsFeedbackExportPreview_Params = PageHandler_GetTopicsFeedbackExportPreview_ParamsMojoType;
export declare interface PageHandler_GetTopicsFeedbackExportPreview_ResponseParamsMojoType {
    preview: TopicsFeedbackExportPreview;
}
export type PageHandler_GetTopicsFeedbackExportPreview_ResponseParams = PageHandler_GetTopicsFeedbackExportPreview_ResponseParamsMojoType;
export declare interface PageHandler_GenerateTopicsFeedbackBundle_ParamsMojoType {
    options: TopicsFeedbackExportOptions;
}
export type PageHandler_GenerateTopicsFeedbackBundle_Params = PageHandler_GenerateTopicsFeedbackBundle_ParamsMojoType;
export declare interface PageHandler_GenerateTopicsFeedbackBundle_ResponseParamsMojoType {
    jsonBundle: string;
}
export type PageHandler_GenerateTopicsFeedbackBundle_ResponseParams = PageHandler_GenerateTopicsFeedbackBundle_ResponseParamsMojoType;
export declare interface PageHandler_RunTodoTask_ParamsMojoType {
    prompt: string;
}
export type PageHandler_RunTodoTask_Params = PageHandler_RunTodoTask_ParamsMojoType;
export declare interface PageHandler_RunTodoTask_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_RunTodoTask_ResponseParams = PageHandler_RunTodoTask_ResponseParamsMojoType;
export declare interface PageHandler_OpenContextHubPage_ParamsMojoType {
}
export type PageHandler_OpenContextHubPage_Params = PageHandler_OpenContextHubPage_ParamsMojoType;
export declare interface PageHandler_OpenContextHubPage_ResponseParamsMojoType {
}
export type PageHandler_OpenContextHubPage_ResponseParams = PageHandler_OpenContextHubPage_ResponseParamsMojoType;
export declare interface PageHandler_OpenWebUrl_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_OpenWebUrl_Params = PageHandler_OpenWebUrl_ParamsMojoType;
export declare interface PageHandler_OpenWebUrl_ResponseParamsMojoType {
}
export type PageHandler_OpenWebUrl_ResponseParams = PageHandler_OpenWebUrl_ResponseParamsMojoType;
export declare interface PageHandler_CopyAttachmentsToClipboard_ParamsMojoType {
    files: MemoryBankFileAttachment[];
}
export type PageHandler_CopyAttachmentsToClipboard_Params = PageHandler_CopyAttachmentsToClipboard_ParamsMojoType;
export declare interface PageHandler_CopyAttachmentsToClipboard_ResponseParamsMojoType {
    status: CopyAttachmentsToClipboardStatus;
}
export type PageHandler_CopyAttachmentsToClipboard_ResponseParams = PageHandler_CopyAttachmentsToClipboard_ResponseParamsMojoType;
export declare interface PageHandler_StartSkillRecording_ParamsMojoType {
}
export type PageHandler_StartSkillRecording_Params = PageHandler_StartSkillRecording_ParamsMojoType;
export declare interface PageHandler_StopSkillRecording_ParamsMojoType {
}
export type PageHandler_StopSkillRecording_Params = PageHandler_StopSkillRecording_ParamsMojoType;
export declare interface PageHandler_StopSkillRecording_ResponseParamsMojoType {
    data: SkillRecordingSessionData;
}
export type PageHandler_StopSkillRecording_ResponseParams = PageHandler_StopSkillRecording_ResponseParamsMojoType;
export declare interface SourceReference {
    gmail?: GmailReference;
    photos?: PhotosReference;
    drive?: DriveFile;
    chromeHistoryEntry?: ChromeHistoryEntry;
}
export declare enum SourceReferenceFieldTags {
    GMAIL = 0,
    PHOTOS = 1,
    DRIVE = 2,
    CHROME_HISTORY_ENTRY = 3
}
export declare function whichSourceReference(u: SourceReference): SourceReferenceFieldTags;
export declare interface AutoTodoData {
    firstParty?: FirstPartyData;
    thirdParty?: ThirdPartyData;
}
export declare enum AutoTodoDataFieldTags {
    FIRST_PARTY = 0,
    THIRD_PARTY = 1
}
export declare function whichAutoTodoData(u: AutoTodoData): AutoTodoDataFieldTags;
export declare interface TopicIdOrUrl {
    topicId?: string;
    topicUrl?: url_mojom_Url;
}
export declare enum TopicIdOrUrlFieldTags {
    TOPIC_ID = 0,
    TOPIC_URL = 1
}
export declare function whichTopicIdOrUrl(u: TopicIdOrUrl): TopicIdOrUrlFieldTags;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
