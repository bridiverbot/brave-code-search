import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { PermissionChallengeDecision as aiChat_mojom_PermissionChallengeDecision, PremiumStatus as aiChat_mojom_PremiumStatus, AssociatedContent as aiChat_mojom_AssociatedContent, ConversationEntriesState as aiChat_mojom_ConversationEntriesState, ConversationTurn as aiChat_mojom_ConversationTurn, PremiumInfo as aiChat_mojom_PremiumInfo, ServiceState as aiChat_mojom_ServiceState, Thread as aiChat_mojom_Thread, ToolArtifact as aiChat_mojom_ToolArtifact, ToolUseEvent as aiChat_mojom_ToolUseEvent, UploadedFile as aiChat_mojom_UploadedFile, ContentBlock as aiChat_mojom_ContentBlock } from './common.mojom-webui.js';
import { TabData as aiChat_mojom_TabData } from './tab_tracker.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type ParentUIFramePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ParentUIFramePendingReceiver>;
export declare class ParentUIFramePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ParentUIFrame> {
    handle: mojo.internal.interfaceSupport.Endpoint<ParentUIFramePendingReceiver>;
    constructor(handle: MojoHandle | ParentUIFramePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ParentUIFrameInterface {
    childHeightChanged(height: number): void;
    rateMessage(turnUuid: string, isLiked: boolean): void;
    dragStart(): void;
    showSkillDialog(prompt: string): void;
    showImageLightbox(file: aiChat_mojom_UploadedFile): void;
    showWorkspaceFileLightbox(filePath: string): void;
    requestNewConversation(): void;
    handleResetError(): void;
}
export declare class ParentUIFrameRemote implements ParentUIFrameInterface, mojo.internal.interfaceSupport.InterfaceRemote<ParentUIFramePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ParentUIFramePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ParentUIFramePendingReceiverEndpoint);
    childHeightChanged(height: number): void;
    rateMessage(turnUuid: string, isLiked: boolean): void;
    dragStart(): void;
    showSkillDialog(prompt: string): void;
    showImageLightbox(file: aiChat_mojom_UploadedFile): void;
    showWorkspaceFileLightbox(filePath: string): void;
    requestNewConversation(): void;
    handleResetError(): void;
}
/**
 * An object which receives request messages for the ParentUIFrame
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ParentUIFrameReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ParentUIFrameRemote, ParentUIFramePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ParentUIFrameRemote, ParentUIFramePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ParentUIFrameInterface);
}
export declare class ParentUIFrame {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ParentUIFrameRemote;
}
/**
 * An object which receives request messages for the ParentUIFrame
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ParentUIFrameCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ParentUIFrameRemote, ParentUIFramePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ParentUIFrameRemote, ParentUIFramePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    childHeightChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(height: number) => any>;
    rateMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(turnUuid: string, isLiked: boolean) => any>;
    dragStart: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showSkillDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prompt: string) => any>;
    showImageLightbox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(file: aiChat_mojom_UploadedFile) => any>;
    showWorkspaceFileLightbox: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(filePath: string) => any>;
    requestNewConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    handleResetError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedConversationHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedConversationHandlerPendingReceiver>;
export declare class UntrustedConversationHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedConversationHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedConversationHandlerPendingReceiver>;
    constructor(handle: MojoHandle | UntrustedConversationHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedConversationHandlerInterface {
    bindUntrustedConversationUI(untrustedUi: UntrustedConversationUIRemote): Promise<{
        conversationEntriesState: aiChat_mojom_ConversationEntriesState;
    }>;
    getConversationHistory(threadUuid: (string | null)): Promise<{
        conversationHistory: aiChat_mojom_ConversationTurn[];
    }>;
    getConversationThreads(): Promise<{
        threads: aiChat_mojom_Thread[];
    }>;
    switchToNonPremiumModel(): void;
    regenerateAnswer(turnUuid: string, modelKey: string): void;
    generateQuestions(): void;
    retryAPIRequest(threadUuid: (string | null)): void;
    createConversationThread(originEntryUuid: string): Promise<{
        threadUuid: (string | null);
    }>;
}
export declare class UntrustedConversationHandlerRemote implements UntrustedConversationHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedConversationHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedConversationHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedConversationHandlerPendingReceiverEndpoint);
    bindUntrustedConversationUI(untrustedUi: UntrustedConversationUIRemote): Promise<{
        conversationEntriesState: aiChat_mojom_ConversationEntriesState;
    }>;
    getConversationHistory(threadUuid: (string | null)): Promise<{
        conversationHistory: aiChat_mojom_ConversationTurn[];
    }>;
    getConversationThreads(): Promise<{
        threads: aiChat_mojom_Thread[];
    }>;
    switchToNonPremiumModel(): void;
    regenerateAnswer(turnUuid: string, modelKey: string): void;
    generateQuestions(): void;
    retryAPIRequest(threadUuid: (string | null)): void;
    createConversationThread(originEntryUuid: string): Promise<{
        threadUuid: (string | null);
    }>;
}
/**
 * An object which receives request messages for the UntrustedConversationHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedConversationHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedConversationHandlerRemote, UntrustedConversationHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedConversationHandlerRemote, UntrustedConversationHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedConversationHandlerInterface);
}
export declare class UntrustedConversationHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedConversationHandlerRemote;
}
/**
 * An object which receives request messages for the UntrustedConversationHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedConversationHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedConversationHandlerRemote, UntrustedConversationHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedConversationHandlerRemote, UntrustedConversationHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindUntrustedConversationUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(untrustedUi: UntrustedConversationUIRemote) => any>;
    getConversationHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(threadUuid: (string | null)) => any>;
    getConversationThreads: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    switchToNonPremiumModel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    regenerateAnswer: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(turnUuid: string, modelKey: string) => any>;
    generateQuestions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    retryAPIRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(threadUuid: (string | null)) => any>;
    createConversationThread: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(originEntryUuid: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedConversationUserActionsPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedConversationUserActionsPendingReceiver>;
export declare class UntrustedConversationUserActionsPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedConversationUserActions> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedConversationUserActionsPendingReceiver>;
    constructor(handle: MojoHandle | UntrustedConversationUserActionsPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedConversationUserActionsInterface {
    modifyConversation(entryUuid: string, newText: string, skillShortcut: (string | null)): void;
    respondToToolUseRequest(entryUuid: string, toolId: string, outputJson: aiChat_mojom_ContentBlock[], artifacts: aiChat_mojom_ToolArtifact[]): void;
    processPermissionChallenge(toolUseId: string, decision: aiChat_mojom_PermissionChallengeDecision): void;
    submitSuggestion(question: string): void;
}
export declare class UntrustedConversationUserActionsRemote implements UntrustedConversationUserActionsInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedConversationUserActionsPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedConversationUserActionsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedConversationUserActionsPendingReceiverEndpoint);
    modifyConversation(entryUuid: string, newText: string, skillShortcut: (string | null)): void;
    respondToToolUseRequest(entryUuid: string, toolId: string, outputJson: aiChat_mojom_ContentBlock[], artifacts: aiChat_mojom_ToolArtifact[]): void;
    processPermissionChallenge(toolUseId: string, decision: aiChat_mojom_PermissionChallengeDecision): void;
    submitSuggestion(question: string): void;
}
/**
 * An object which receives request messages for the UntrustedConversationUserActions
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedConversationUserActionsReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedConversationUserActionsRemote, UntrustedConversationUserActionsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedConversationUserActionsRemote, UntrustedConversationUserActionsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedConversationUserActionsInterface);
}
export declare class UntrustedConversationUserActions {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedConversationUserActionsRemote;
}
/**
 * An object which receives request messages for the UntrustedConversationUserActions
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedConversationUserActionsCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedConversationUserActionsRemote, UntrustedConversationUserActionsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedConversationUserActionsRemote, UntrustedConversationUserActionsPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    modifyConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entryUuid: string, newText: string, skillShortcut: (string | null)) => any>;
    respondToToolUseRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entryUuid: string, toolId: string, outputJson: aiChat_mojom_ContentBlock[], artifacts: aiChat_mojom_ToolArtifact[]) => any>;
    processPermissionChallenge: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(toolUseId: string, decision: aiChat_mojom_PermissionChallengeDecision) => any>;
    submitSuggestion: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(question: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedConversationUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedConversationUIPendingReceiver>;
export declare class UntrustedConversationUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedConversationUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedConversationUIPendingReceiver>;
    constructor(handle: MojoHandle | UntrustedConversationUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedConversationUIInterface {
    onConversationHistoryUpdate(entry: (aiChat_mojom_ConversationTurn | null)): void;
    onToolUseEventOutput(entryUuid: string, toolUse: aiChat_mojom_ToolUseEvent): void;
    onEntriesUIStateChanged(state: aiChat_mojom_ConversationEntriesState): void;
    onConversationThreadUpdate(thread: aiChat_mojom_Thread): void;
    associatedContentChanged(associatedContent: aiChat_mojom_AssociatedContent[]): void;
    contentTaskStarted(tabId: number): void;
}
export declare class UntrustedConversationUIRemote implements UntrustedConversationUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedConversationUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedConversationUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedConversationUIPendingReceiverEndpoint);
    onConversationHistoryUpdate(entry: (aiChat_mojom_ConversationTurn | null)): void;
    onToolUseEventOutput(entryUuid: string, toolUse: aiChat_mojom_ToolUseEvent): void;
    onEntriesUIStateChanged(state: aiChat_mojom_ConversationEntriesState): void;
    onConversationThreadUpdate(thread: aiChat_mojom_Thread): void;
    associatedContentChanged(associatedContent: aiChat_mojom_AssociatedContent[]): void;
    contentTaskStarted(tabId: number): void;
}
/**
 * An object which receives request messages for the UntrustedConversationUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedConversationUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedConversationUIRemote, UntrustedConversationUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedConversationUIRemote, UntrustedConversationUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedConversationUIInterface);
}
export declare class UntrustedConversationUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedConversationUIRemote;
}
/**
 * An object which receives request messages for the UntrustedConversationUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedConversationUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedConversationUIRemote, UntrustedConversationUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedConversationUIRemote, UntrustedConversationUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onConversationHistoryUpdate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entry: (aiChat_mojom_ConversationTurn | null)) => any>;
    onToolUseEventOutput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entryUuid: string, toolUse: aiChat_mojom_ToolUseEvent) => any>;
    onEntriesUIStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: aiChat_mojom_ConversationEntriesState) => any>;
    onConversationThreadUpdate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(thread: aiChat_mojom_Thread) => any>;
    associatedContentChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(associatedContent: aiChat_mojom_AssociatedContent[]) => any>;
    contentTaskStarted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedUIPendingReceiver>;
export declare class UntrustedUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedUIPendingReceiver>;
    constructor(handle: MojoHandle | UntrustedUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedUIInterface {
    onMemoriesChanged(memories: string[]): void;
    thumbnailUpdated(tabId: number, dataUri: string): void;
}
export declare class UntrustedUIRemote implements UntrustedUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedUIPendingReceiverEndpoint);
    onMemoriesChanged(memories: string[]): void;
    thumbnailUpdated(tabId: number, dataUri: string): void;
}
/**
 * An object which receives request messages for the UntrustedUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedUIRemote, UntrustedUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedUIRemote, UntrustedUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedUIInterface);
}
export declare class UntrustedUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedUIRemote;
}
/**
 * An object which receives request messages for the UntrustedUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedUIRemote, UntrustedUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedUIRemote, UntrustedUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onMemoriesChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(memories: string[]) => any>;
    thumbnailUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, dataUri: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedUIHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedUIHandlerPendingReceiver>;
export declare class UntrustedUIHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedUIHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedUIHandlerPendingReceiver>;
    constructor(handle: MojoHandle | UntrustedUIHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedUIHandlerInterface {
    bindConversationHandler(conversationId: string, conversationHandler: UntrustedConversationHandlerPendingReceiver, userActions: UntrustedConversationUserActionsPendingReceiver): void;
    bindUntrustedUI(untrustedUi: UntrustedUIRemote): void;
    openSearchURL(query: string): void;
    openLearnMoreAboutBraveSearchWithLeo(): void;
    openURLFromResponse(url: url_mojom_Url): void;
    openAIChatCustomizationSettings(): void;
    searchForTabs(query: string): Promise<{
        tabs: (aiChat_mojom_TabData[] | null);
    }>;
    switchToTab(tabId: number): void;
    addTabToThumbnailTracker(tabId: number): void;
    removeTabFromThumbnailTracker(tabId: number): void;
    bindParentPage(parentFrame: ParentUIFramePendingReceiver): void;
    deleteMemory(memory: string): void;
    hasMemory(memory: string): Promise<{
        exists: boolean;
    }>;
    goPremium(): void;
    refreshPremiumSession(): void;
    openModelSupportUrl(): void;
    openStorageSupportUrl(): void;
}
export declare class UntrustedUIHandlerRemote implements UntrustedUIHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedUIHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedUIHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedUIHandlerPendingReceiverEndpoint);
    bindConversationHandler(conversationId: string, conversationHandler: UntrustedConversationHandlerPendingReceiver, userActions: UntrustedConversationUserActionsPendingReceiver): void;
    bindUntrustedUI(untrustedUi: UntrustedUIRemote): void;
    openSearchURL(query: string): void;
    openLearnMoreAboutBraveSearchWithLeo(): void;
    openURLFromResponse(url: url_mojom_Url): void;
    openAIChatCustomizationSettings(): void;
    searchForTabs(query: string): Promise<{
        tabs: (aiChat_mojom_TabData[] | null);
    }>;
    switchToTab(tabId: number): void;
    addTabToThumbnailTracker(tabId: number): void;
    removeTabFromThumbnailTracker(tabId: number): void;
    bindParentPage(parentFrame: ParentUIFramePendingReceiver): void;
    deleteMemory(memory: string): void;
    hasMemory(memory: string): Promise<{
        exists: boolean;
    }>;
    goPremium(): void;
    refreshPremiumSession(): void;
    openModelSupportUrl(): void;
    openStorageSupportUrl(): void;
}
/**
 * An object which receives request messages for the UntrustedUIHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedUIHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedUIHandlerRemote, UntrustedUIHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedUIHandlerRemote, UntrustedUIHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedUIHandlerInterface);
}
export declare class UntrustedUIHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedUIHandlerRemote;
}
/**
 * An object which receives request messages for the UntrustedUIHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedUIHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedUIHandlerRemote, UntrustedUIHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedUIHandlerRemote, UntrustedUIHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindConversationHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationId: string, conversationHandler: UntrustedConversationHandlerPendingReceiver, userActions: UntrustedConversationUserActionsPendingReceiver) => any>;
    bindUntrustedUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(untrustedUi: UntrustedUIRemote) => any>;
    openSearchURL: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    openLearnMoreAboutBraveSearchWithLeo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openURLFromResponse: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    openAIChatCustomizationSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    searchForTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    switchToTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    addTabToThumbnailTracker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    removeTabFromThumbnailTracker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    bindParentPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(parentFrame: ParentUIFramePendingReceiver) => any>;
    deleteMemory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(memory: string) => any>;
    hasMemory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(memory: string) => any>;
    goPremium: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    refreshPremiumSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openModelSupportUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openStorageSupportUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedServicePendingReceiver>;
export declare class UntrustedServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedService> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedServicePendingReceiver>;
    constructor(handle: MojoHandle | UntrustedServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedServiceInterface {
    bindObserver(observer: UntrustedServiceObserverRemote): Promise<{
        state: aiChat_mojom_ServiceState;
    }>;
    getPremiumStatus(): Promise<{
        status: aiChat_mojom_PremiumStatus;
        info: (aiChat_mojom_PremiumInfo | null);
    }>;
    dismissStorageNotice(): void;
    dismissPremiumPrompt(): void;
}
export declare class UntrustedServiceRemote implements UntrustedServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedServicePendingReceiverEndpoint);
    bindObserver(observer: UntrustedServiceObserverRemote): Promise<{
        state: aiChat_mojom_ServiceState;
    }>;
    getPremiumStatus(): Promise<{
        status: aiChat_mojom_PremiumStatus;
        info: (aiChat_mojom_PremiumInfo | null);
    }>;
    dismissStorageNotice(): void;
    dismissPremiumPrompt(): void;
}
/**
 * An object which receives request messages for the UntrustedService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedServiceRemote, UntrustedServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedServiceRemote, UntrustedServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedServiceInterface);
}
export declare class UntrustedService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedServiceRemote;
}
/**
 * An object which receives request messages for the UntrustedService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedServiceRemote, UntrustedServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedServiceRemote, UntrustedServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindObserver: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: UntrustedServiceObserverRemote) => any>;
    getPremiumStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissStorageNotice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissPremiumPrompt: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UntrustedServiceObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UntrustedServiceObserverPendingReceiver>;
export declare class UntrustedServiceObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UntrustedServiceObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<UntrustedServiceObserverPendingReceiver>;
    constructor(handle: MojoHandle | UntrustedServiceObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UntrustedServiceObserverInterface {
    onStateChanged(state: aiChat_mojom_ServiceState): void;
}
export declare class UntrustedServiceObserverRemote implements UntrustedServiceObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<UntrustedServiceObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UntrustedServiceObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UntrustedServiceObserverPendingReceiverEndpoint);
    onStateChanged(state: aiChat_mojom_ServiceState): void;
}
/**
 * An object which receives request messages for the UntrustedServiceObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UntrustedServiceObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UntrustedServiceObserverRemote, UntrustedServiceObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedServiceObserverRemote, UntrustedServiceObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UntrustedServiceObserverInterface);
}
export declare class UntrustedServiceObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UntrustedServiceObserverRemote;
}
/**
 * An object which receives request messages for the UntrustedServiceObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UntrustedServiceObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UntrustedServiceObserverRemote, UntrustedServiceObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UntrustedServiceObserverRemote, UntrustedServiceObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: aiChat_mojom_ServiceState) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ParentUIFrame_ChildHeightChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_RateMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_DragStart_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_ShowSkillDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_ShowImageLightbox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_ShowWorkspaceFileLightbox_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_RequestNewConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentUIFrame_HandleResetError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_BindUntrustedConversationUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_BindUntrustedConversationUI_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_GetConversationHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_GetConversationHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_GetConversationThreads_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_GetConversationThreads_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_SwitchToNonPremiumModel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_RegenerateAnswer_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_GenerateQuestions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_RetryAPIRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_CreateConversationThread_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationHandler_CreateConversationThread_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUserActions_ModifyConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUserActions_RespondToToolUseRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUserActions_ProcessPermissionChallenge_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUserActions_SubmitSuggestion_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUI_OnConversationHistoryUpdate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUI_OnToolUseEventOutput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUI_OnEntriesUIStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUI_OnConversationThreadUpdate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUI_AssociatedContentChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedConversationUI_ContentTaskStarted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUI_OnMemoriesChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUI_ThumbnailUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_BindConversationHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_BindUntrustedUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_OpenSearchURL_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_OpenLearnMoreAboutBraveSearchWithLeo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_OpenURLFromResponse_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_OpenAIChatCustomizationSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_SearchForTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_SearchForTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_SwitchToTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_AddTabToThumbnailTracker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_RemoveTabFromThumbnailTracker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_BindParentPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_DeleteMemory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_HasMemory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_HasMemory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_GoPremium_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_RefreshPremiumSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_OpenModelSupportUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedUIHandler_OpenStorageSupportUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedService_BindObserver_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedService_BindObserver_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedService_GetPremiumStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedService_GetPremiumStatus_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedService_DismissStorageNotice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedService_DismissPremiumPrompt_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UntrustedServiceObserver_OnStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ParentUIFrame_ChildHeightChanged_ParamsMojoType {
    height: number;
}
export type ParentUIFrame_ChildHeightChanged_Params = ParentUIFrame_ChildHeightChanged_ParamsMojoType;
export declare interface ParentUIFrame_RateMessage_ParamsMojoType {
    turnUuid: string;
    isLiked: boolean;
}
export type ParentUIFrame_RateMessage_Params = ParentUIFrame_RateMessage_ParamsMojoType;
export declare interface ParentUIFrame_DragStart_ParamsMojoType {
}
export type ParentUIFrame_DragStart_Params = ParentUIFrame_DragStart_ParamsMojoType;
export declare interface ParentUIFrame_ShowSkillDialog_ParamsMojoType {
    prompt: string;
}
export type ParentUIFrame_ShowSkillDialog_Params = ParentUIFrame_ShowSkillDialog_ParamsMojoType;
export declare interface ParentUIFrame_ShowImageLightbox_ParamsMojoType {
    file: aiChat_mojom_UploadedFile;
}
export type ParentUIFrame_ShowImageLightbox_Params = ParentUIFrame_ShowImageLightbox_ParamsMojoType;
export declare interface ParentUIFrame_ShowWorkspaceFileLightbox_ParamsMojoType {
    filePath: string;
}
export type ParentUIFrame_ShowWorkspaceFileLightbox_Params = ParentUIFrame_ShowWorkspaceFileLightbox_ParamsMojoType;
export declare interface ParentUIFrame_RequestNewConversation_ParamsMojoType {
}
export type ParentUIFrame_RequestNewConversation_Params = ParentUIFrame_RequestNewConversation_ParamsMojoType;
export declare interface ParentUIFrame_HandleResetError_ParamsMojoType {
}
export type ParentUIFrame_HandleResetError_Params = ParentUIFrame_HandleResetError_ParamsMojoType;
export declare interface UntrustedConversationHandler_BindUntrustedConversationUI_ParamsMojoType {
    untrustedUi: UntrustedConversationUIRemote;
}
export type UntrustedConversationHandler_BindUntrustedConversationUI_Params = UntrustedConversationHandler_BindUntrustedConversationUI_ParamsMojoType;
export declare interface UntrustedConversationHandler_BindUntrustedConversationUI_ResponseParamsMojoType {
    conversationEntriesState: aiChat_mojom_ConversationEntriesState;
}
export type UntrustedConversationHandler_BindUntrustedConversationUI_ResponseParams = UntrustedConversationHandler_BindUntrustedConversationUI_ResponseParamsMojoType;
export declare interface UntrustedConversationHandler_GetConversationHistory_ParamsMojoType {
    threadUuid: (string | null);
}
export type UntrustedConversationHandler_GetConversationHistory_Params = UntrustedConversationHandler_GetConversationHistory_ParamsMojoType;
export declare interface UntrustedConversationHandler_GetConversationHistory_ResponseParamsMojoType {
    conversationHistory: aiChat_mojom_ConversationTurn[];
}
export type UntrustedConversationHandler_GetConversationHistory_ResponseParams = UntrustedConversationHandler_GetConversationHistory_ResponseParamsMojoType;
export declare interface UntrustedConversationHandler_GetConversationThreads_ParamsMojoType {
}
export type UntrustedConversationHandler_GetConversationThreads_Params = UntrustedConversationHandler_GetConversationThreads_ParamsMojoType;
export declare interface UntrustedConversationHandler_GetConversationThreads_ResponseParamsMojoType {
    threads: aiChat_mojom_Thread[];
}
export type UntrustedConversationHandler_GetConversationThreads_ResponseParams = UntrustedConversationHandler_GetConversationThreads_ResponseParamsMojoType;
export declare interface UntrustedConversationHandler_SwitchToNonPremiumModel_ParamsMojoType {
}
export type UntrustedConversationHandler_SwitchToNonPremiumModel_Params = UntrustedConversationHandler_SwitchToNonPremiumModel_ParamsMojoType;
export declare interface UntrustedConversationHandler_RegenerateAnswer_ParamsMojoType {
    turnUuid: string;
    modelKey: string;
}
export type UntrustedConversationHandler_RegenerateAnswer_Params = UntrustedConversationHandler_RegenerateAnswer_ParamsMojoType;
export declare interface UntrustedConversationHandler_GenerateQuestions_ParamsMojoType {
}
export type UntrustedConversationHandler_GenerateQuestions_Params = UntrustedConversationHandler_GenerateQuestions_ParamsMojoType;
export declare interface UntrustedConversationHandler_RetryAPIRequest_ParamsMojoType {
    threadUuid: (string | null);
}
export type UntrustedConversationHandler_RetryAPIRequest_Params = UntrustedConversationHandler_RetryAPIRequest_ParamsMojoType;
export declare interface UntrustedConversationHandler_CreateConversationThread_ParamsMojoType {
    originEntryUuid: string;
}
export type UntrustedConversationHandler_CreateConversationThread_Params = UntrustedConversationHandler_CreateConversationThread_ParamsMojoType;
export declare interface UntrustedConversationHandler_CreateConversationThread_ResponseParamsMojoType {
    threadUuid: (string | null);
}
export type UntrustedConversationHandler_CreateConversationThread_ResponseParams = UntrustedConversationHandler_CreateConversationThread_ResponseParamsMojoType;
export declare interface UntrustedConversationUserActions_ModifyConversation_ParamsMojoType {
    entryUuid: string;
    newText: string;
    skillShortcut: (string | null);
}
export type UntrustedConversationUserActions_ModifyConversation_Params = UntrustedConversationUserActions_ModifyConversation_ParamsMojoType;
export declare interface UntrustedConversationUserActions_RespondToToolUseRequest_ParamsMojoType {
    entryUuid: string;
    toolId: string;
    outputJson: aiChat_mojom_ContentBlock[];
    artifacts: aiChat_mojom_ToolArtifact[];
}
export type UntrustedConversationUserActions_RespondToToolUseRequest_Params = UntrustedConversationUserActions_RespondToToolUseRequest_ParamsMojoType;
export declare interface UntrustedConversationUserActions_ProcessPermissionChallenge_ParamsMojoType {
    toolUseId: string;
    decision: aiChat_mojom_PermissionChallengeDecision;
}
export type UntrustedConversationUserActions_ProcessPermissionChallenge_Params = UntrustedConversationUserActions_ProcessPermissionChallenge_ParamsMojoType;
export declare interface UntrustedConversationUserActions_SubmitSuggestion_ParamsMojoType {
    question: string;
}
export type UntrustedConversationUserActions_SubmitSuggestion_Params = UntrustedConversationUserActions_SubmitSuggestion_ParamsMojoType;
export declare interface UntrustedConversationUI_OnConversationHistoryUpdate_ParamsMojoType {
    entry: (aiChat_mojom_ConversationTurn | null);
}
export type UntrustedConversationUI_OnConversationHistoryUpdate_Params = UntrustedConversationUI_OnConversationHistoryUpdate_ParamsMojoType;
export declare interface UntrustedConversationUI_OnToolUseEventOutput_ParamsMojoType {
    entryUuid: string;
    toolUse: aiChat_mojom_ToolUseEvent;
}
export type UntrustedConversationUI_OnToolUseEventOutput_Params = UntrustedConversationUI_OnToolUseEventOutput_ParamsMojoType;
export declare interface UntrustedConversationUI_OnEntriesUIStateChanged_ParamsMojoType {
    state: aiChat_mojom_ConversationEntriesState;
}
export type UntrustedConversationUI_OnEntriesUIStateChanged_Params = UntrustedConversationUI_OnEntriesUIStateChanged_ParamsMojoType;
export declare interface UntrustedConversationUI_OnConversationThreadUpdate_ParamsMojoType {
    thread: aiChat_mojom_Thread;
}
export type UntrustedConversationUI_OnConversationThreadUpdate_Params = UntrustedConversationUI_OnConversationThreadUpdate_ParamsMojoType;
export declare interface UntrustedConversationUI_AssociatedContentChanged_ParamsMojoType {
    associatedContent: aiChat_mojom_AssociatedContent[];
}
export type UntrustedConversationUI_AssociatedContentChanged_Params = UntrustedConversationUI_AssociatedContentChanged_ParamsMojoType;
export declare interface UntrustedConversationUI_ContentTaskStarted_ParamsMojoType {
    tabId: number;
}
export type UntrustedConversationUI_ContentTaskStarted_Params = UntrustedConversationUI_ContentTaskStarted_ParamsMojoType;
export declare interface UntrustedUI_OnMemoriesChanged_ParamsMojoType {
    memories: string[];
}
export type UntrustedUI_OnMemoriesChanged_Params = UntrustedUI_OnMemoriesChanged_ParamsMojoType;
export declare interface UntrustedUI_ThumbnailUpdated_ParamsMojoType {
    tabId: number;
    dataUri: string;
}
export type UntrustedUI_ThumbnailUpdated_Params = UntrustedUI_ThumbnailUpdated_ParamsMojoType;
export declare interface UntrustedUIHandler_BindConversationHandler_ParamsMojoType {
    conversationId: string;
    conversationHandler: UntrustedConversationHandlerPendingReceiver;
    userActions: UntrustedConversationUserActionsPendingReceiver;
}
export type UntrustedUIHandler_BindConversationHandler_Params = UntrustedUIHandler_BindConversationHandler_ParamsMojoType;
export declare interface UntrustedUIHandler_BindUntrustedUI_ParamsMojoType {
    untrustedUi: UntrustedUIRemote;
}
export type UntrustedUIHandler_BindUntrustedUI_Params = UntrustedUIHandler_BindUntrustedUI_ParamsMojoType;
export declare interface UntrustedUIHandler_OpenSearchURL_ParamsMojoType {
    query: string;
}
export type UntrustedUIHandler_OpenSearchURL_Params = UntrustedUIHandler_OpenSearchURL_ParamsMojoType;
export declare interface UntrustedUIHandler_OpenLearnMoreAboutBraveSearchWithLeo_ParamsMojoType {
}
export type UntrustedUIHandler_OpenLearnMoreAboutBraveSearchWithLeo_Params = UntrustedUIHandler_OpenLearnMoreAboutBraveSearchWithLeo_ParamsMojoType;
export declare interface UntrustedUIHandler_OpenURLFromResponse_ParamsMojoType {
    url: url_mojom_Url;
}
export type UntrustedUIHandler_OpenURLFromResponse_Params = UntrustedUIHandler_OpenURLFromResponse_ParamsMojoType;
export declare interface UntrustedUIHandler_OpenAIChatCustomizationSettings_ParamsMojoType {
}
export type UntrustedUIHandler_OpenAIChatCustomizationSettings_Params = UntrustedUIHandler_OpenAIChatCustomizationSettings_ParamsMojoType;
export declare interface UntrustedUIHandler_SearchForTabs_ParamsMojoType {
    query: string;
}
export type UntrustedUIHandler_SearchForTabs_Params = UntrustedUIHandler_SearchForTabs_ParamsMojoType;
export declare interface UntrustedUIHandler_SearchForTabs_ResponseParamsMojoType {
    tabs: (aiChat_mojom_TabData[] | null);
}
export type UntrustedUIHandler_SearchForTabs_ResponseParams = UntrustedUIHandler_SearchForTabs_ResponseParamsMojoType;
export declare interface UntrustedUIHandler_SwitchToTab_ParamsMojoType {
    tabId: number;
}
export type UntrustedUIHandler_SwitchToTab_Params = UntrustedUIHandler_SwitchToTab_ParamsMojoType;
export declare interface UntrustedUIHandler_AddTabToThumbnailTracker_ParamsMojoType {
    tabId: number;
}
export type UntrustedUIHandler_AddTabToThumbnailTracker_Params = UntrustedUIHandler_AddTabToThumbnailTracker_ParamsMojoType;
export declare interface UntrustedUIHandler_RemoveTabFromThumbnailTracker_ParamsMojoType {
    tabId: number;
}
export type UntrustedUIHandler_RemoveTabFromThumbnailTracker_Params = UntrustedUIHandler_RemoveTabFromThumbnailTracker_ParamsMojoType;
export declare interface UntrustedUIHandler_BindParentPage_ParamsMojoType {
    parentFrame: ParentUIFramePendingReceiver;
}
export type UntrustedUIHandler_BindParentPage_Params = UntrustedUIHandler_BindParentPage_ParamsMojoType;
export declare interface UntrustedUIHandler_DeleteMemory_ParamsMojoType {
    memory: string;
}
export type UntrustedUIHandler_DeleteMemory_Params = UntrustedUIHandler_DeleteMemory_ParamsMojoType;
export declare interface UntrustedUIHandler_HasMemory_ParamsMojoType {
    memory: string;
}
export type UntrustedUIHandler_HasMemory_Params = UntrustedUIHandler_HasMemory_ParamsMojoType;
export declare interface UntrustedUIHandler_HasMemory_ResponseParamsMojoType {
    exists: boolean;
}
export type UntrustedUIHandler_HasMemory_ResponseParams = UntrustedUIHandler_HasMemory_ResponseParamsMojoType;
export declare interface UntrustedUIHandler_GoPremium_ParamsMojoType {
}
export type UntrustedUIHandler_GoPremium_Params = UntrustedUIHandler_GoPremium_ParamsMojoType;
export declare interface UntrustedUIHandler_RefreshPremiumSession_ParamsMojoType {
}
export type UntrustedUIHandler_RefreshPremiumSession_Params = UntrustedUIHandler_RefreshPremiumSession_ParamsMojoType;
export declare interface UntrustedUIHandler_OpenModelSupportUrl_ParamsMojoType {
}
export type UntrustedUIHandler_OpenModelSupportUrl_Params = UntrustedUIHandler_OpenModelSupportUrl_ParamsMojoType;
export declare interface UntrustedUIHandler_OpenStorageSupportUrl_ParamsMojoType {
}
export type UntrustedUIHandler_OpenStorageSupportUrl_Params = UntrustedUIHandler_OpenStorageSupportUrl_ParamsMojoType;
export declare interface UntrustedService_BindObserver_ParamsMojoType {
    observer: UntrustedServiceObserverRemote;
}
export type UntrustedService_BindObserver_Params = UntrustedService_BindObserver_ParamsMojoType;
export declare interface UntrustedService_BindObserver_ResponseParamsMojoType {
    state: aiChat_mojom_ServiceState;
}
export type UntrustedService_BindObserver_ResponseParams = UntrustedService_BindObserver_ResponseParamsMojoType;
export declare interface UntrustedService_GetPremiumStatus_ParamsMojoType {
}
export type UntrustedService_GetPremiumStatus_Params = UntrustedService_GetPremiumStatus_ParamsMojoType;
export declare interface UntrustedService_GetPremiumStatus_ResponseParamsMojoType {
    status: aiChat_mojom_PremiumStatus;
    info: (aiChat_mojom_PremiumInfo | null);
}
export type UntrustedService_GetPremiumStatus_ResponseParams = UntrustedService_GetPremiumStatus_ResponseParamsMojoType;
export declare interface UntrustedService_DismissStorageNotice_ParamsMojoType {
}
export type UntrustedService_DismissStorageNotice_Params = UntrustedService_DismissStorageNotice_ParamsMojoType;
export declare interface UntrustedService_DismissPremiumPrompt_ParamsMojoType {
}
export type UntrustedService_DismissPremiumPrompt_Params = UntrustedService_DismissPremiumPrompt_ParamsMojoType;
export declare interface UntrustedServiceObserver_OnStateChanged_ParamsMojoType {
    state: aiChat_mojom_ServiceState;
}
export type UntrustedServiceObserver_OnStateChanged_Params = UntrustedServiceObserver_OnStateChanged_ParamsMojoType;
