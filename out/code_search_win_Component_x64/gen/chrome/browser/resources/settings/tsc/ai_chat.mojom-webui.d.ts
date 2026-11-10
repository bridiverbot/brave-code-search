import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { APIError as aiChat_mojom_APIError, ActionType as aiChat_mojom_ActionType, ConversationCapability as aiChat_mojom_ConversationCapability, PremiumStatus as aiChat_mojom_PremiumStatus, TaskState as aiChat_mojom_TaskState, ToolPermission as aiChat_mojom_ToolPermission, APIErrorDetails as aiChat_mojom_APIErrorDetails, AssociatedContent as aiChat_mojom_AssociatedContent, ConversationTurn as aiChat_mojom_ConversationTurn, Model as aiChat_mojom_Model, PremiumInfo as aiChat_mojom_PremiumInfo, ServiceState as aiChat_mojom_ServiceState, Thread as aiChat_mojom_Thread, ToolInfo as aiChat_mojom_ToolInfo, UploadedFile as aiChat_mojom_UploadedFile } from './common.mojom-webui.js';
import { TabData as aiChat_mojom_TabData } from './tab_tracker.mojom-webui.js';
import { ParentUIFramePendingReceiver as aiChat_mojom_ParentUIFramePendingReceiver } from './untrusted_frame.mojom-webui.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const USER_CHOICE_TOOL_NAME: string;
export declare const ASSISTANT_DETAIL_STORAGE_TOOL_NAME: string;
export declare const MEMORY_STORAGE_TOOL_NAME: string;
export declare const CODE_EXECUTION_TOOL_NAME: string;
export declare const SEMANTIC_HISTORY_SEARCH_TOOL_NAME: string;
export declare const ATTACH_WORKSPACE_TOOL_NAME: string;
export declare const TAB_MANAGEMENT_TOOL_NAME: string;
export declare const CLICK_TOOL_NAME: string;
export declare const DRAG_AND_RELEASE_TOOL_NAME: string;
export declare const MOVE_MOUSE_TOOL_NAME: string;
export declare const NAVIGATE_TOOL_NAME: string;
export declare const NAVIGATE_HISTORY_TOOL_NAME: string;
export declare const SCROLL_ELEMENT_TOOL_NAME: string;
export declare const SELECT_DROPDOWN_TOOL_NAME: string;
export declare const TYPE_TEXT_TOOL_NAME: string;
export declare const WAIT_TOOL_NAME: string;
export declare const BRAVE_NEWS_SEARCH_TOOL_NAME: string;
export declare const BRAVE_WEB_SEARCH_TOOL_NAME: string;
export declare const BRAVE_FAQS_SEARCH_TOOL_NAME: string;
export declare const DEEP_RESEARCH_TOOL_NAME: string;
export declare const WEB_CONTEXT_SEARCH_TOOL_NAME: string;
export declare const LINE_CHART_ARTIFACT_TYPE: string;
export declare const VISITED_LINKS_ARTIFACT_TYPE: string;
export declare const MAX_MEMORY_RECORD_LENGTH: number;
export declare const FULL_PAGE_SCREENSHOT_PREFIX: string;
export declare const MAX_IMAGES: number;
export declare const MAX_DOCUMENTS: number;
export declare const MAX_DOCUMENT_SIZE_BYTES: number;
export declare const VisionModelSwitchDecisionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum VisionModelSwitchDecision {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kSwitch = 0,
    kSendWithoutImages = 1
}
export type ServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ServicePendingReceiver>;
export declare class ServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Service> {
    handle: mojo.internal.interfaceSupport.Endpoint<ServicePendingReceiver>;
    constructor(handle: MojoHandle | ServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ServiceInterface {
    markAgreementAccepted(): void;
    enableStoragePref(): void;
    dismissStorageNotice(): void;
    dismissPremiumPrompt(): void;
    getSkills(): Promise<{
        skills: Skill[];
    }>;
    createSkill(shortcut: string, prompt: string, model: (string | null)): void;
    updateSkill(id: string, shortcut: string, prompt: string, model: (string | null)): void;
    deleteSkill(id: string): void;
    getConversations(): Promise<{
        conversations: Conversation[];
    }>;
    getActionMenuList(): Promise<{
        actionList: ActionGroup[];
    }>;
    getPremiumStatus(): Promise<{
        status: aiChat_mojom_PremiumStatus;
        info: (aiChat_mojom_PremiumInfo | null);
    }>;
    deleteConversation(id: string): void;
    renameConversation(id: string, newName: string): void;
    conversationExists(conversationUuid: string): Promise<{
        exists: boolean;
    }>;
    shareConversation(encryptedContents: string, keyFragment: string, conversationUuid: string, conversationTitle: string, copyToClipboard: boolean): Promise<{
        sharedConversationUrl: (url_mojom_Url | null);
    }>;
    getConversationShares(): Promise<{
        shares: ConversationShare[];
    }>;
    deleteConversationShare(shareId: string): Promise<{
        success: boolean;
    }>;
    copyConversationShareLink(shareId: string): void;
    bindObserver(ui: ServiceObserverRemote): Promise<{
        state: aiChat_mojom_ServiceState;
    }>;
    bindConversation(conversationUuid: string, conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote): void;
    bindMetrics(metrics: MetricsPendingReceiver): void;
}
export declare class ServiceRemote implements ServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<ServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ServicePendingReceiverEndpoint);
    markAgreementAccepted(): void;
    enableStoragePref(): void;
    dismissStorageNotice(): void;
    dismissPremiumPrompt(): void;
    getSkills(): Promise<{
        skills: Skill[];
    }>;
    createSkill(shortcut: string, prompt: string, model: (string | null)): void;
    updateSkill(id: string, shortcut: string, prompt: string, model: (string | null)): void;
    deleteSkill(id: string): void;
    getConversations(): Promise<{
        conversations: Conversation[];
    }>;
    getActionMenuList(): Promise<{
        actionList: ActionGroup[];
    }>;
    getPremiumStatus(): Promise<{
        status: aiChat_mojom_PremiumStatus;
        info: (aiChat_mojom_PremiumInfo | null);
    }>;
    deleteConversation(id: string): void;
    renameConversation(id: string, newName: string): void;
    conversationExists(conversationUuid: string): Promise<{
        exists: boolean;
    }>;
    shareConversation(encryptedContents: string, keyFragment: string, conversationUuid: string, conversationTitle: string, copyToClipboard: boolean): Promise<{
        sharedConversationUrl: (url_mojom_Url | null);
    }>;
    getConversationShares(): Promise<{
        shares: ConversationShare[];
    }>;
    deleteConversationShare(shareId: string): Promise<{
        success: boolean;
    }>;
    copyConversationShareLink(shareId: string): void;
    bindObserver(ui: ServiceObserverRemote): Promise<{
        state: aiChat_mojom_ServiceState;
    }>;
    bindConversation(conversationUuid: string, conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote): void;
    bindMetrics(metrics: MetricsPendingReceiver): void;
}
/**
 * An object which receives request messages for the Service
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ServiceRemote, ServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ServiceRemote, ServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ServiceInterface);
}
export declare class Service {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ServiceRemote;
}
/**
 * An object which receives request messages for the Service
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ServiceRemote, ServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ServiceRemote, ServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    markAgreementAccepted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    enableStoragePref: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissStorageNotice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissPremiumPrompt: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    createSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shortcut: string, prompt: string, model: (string | null)) => any>;
    updateSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string, shortcut: string, prompt: string, model: (string | null)) => any>;
    deleteSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    getConversations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getActionMenuList: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getPremiumStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    renameConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string, newName: string) => any>;
    conversationExists: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationUuid: string) => any>;
    shareConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(encryptedContents: string, keyFragment: string, conversationUuid: string, conversationTitle: string, copyToClipboard: boolean) => any>;
    getConversationShares: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteConversationShare: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shareId: string) => any>;
    copyConversationShareLink: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shareId: string) => any>;
    bindObserver: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ui: ServiceObserverRemote) => any>;
    bindConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationUuid: string, conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote) => any>;
    bindMetrics: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(metrics: MetricsPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ServiceObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ServiceObserverPendingReceiver>;
export declare class ServiceObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ServiceObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<ServiceObserverPendingReceiver>;
    constructor(handle: MojoHandle | ServiceObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ServiceObserverInterface {
    onConversationListChanged(conversations: Conversation[]): void;
    onStateChanged(state: aiChat_mojom_ServiceState): void;
    onSkillsChanged(skills: Skill[]): void;
}
export declare class ServiceObserverRemote implements ServiceObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<ServiceObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ServiceObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ServiceObserverPendingReceiverEndpoint);
    onConversationListChanged(conversations: Conversation[]): void;
    onStateChanged(state: aiChat_mojom_ServiceState): void;
    onSkillsChanged(skills: Skill[]): void;
}
/**
 * An object which receives request messages for the ServiceObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ServiceObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ServiceObserverRemote, ServiceObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ServiceObserverRemote, ServiceObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ServiceObserverInterface);
}
export declare class ServiceObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ServiceObserverRemote;
}
/**
 * An object which receives request messages for the ServiceObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ServiceObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ServiceObserverRemote, ServiceObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ServiceObserverRemote, ServiceObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onConversationListChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversations: Conversation[]) => any>;
    onStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: aiChat_mojom_ServiceState) => any>;
    onSkillsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skills: Skill[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type AIChatUIHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AIChatUIHandlerPendingReceiver>;
export declare class AIChatUIHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AIChatUIHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<AIChatUIHandlerPendingReceiver>;
    constructor(handle: MojoHandle | AIChatUIHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AIChatUIHandlerInterface {
    openAIChatSettings(): void;
    openMemorySettings(): void;
    openConversationFullPage(conversationUuid: string): void;
    openAIChatAgentProfile(): void;
    openURL(url: url_mojom_Url): void;
    openStorageSupportUrl(): void;
    openModelSupportUrl(): void;
    goPremium(): void;
    refreshPremiumSession(): void;
    managePremium(): void;
    handleVoiceRecognition(conversationUuid: string): void;
    showSoftKeyboard(): void;
    processImageFile(fileData: number[], filename: string): Promise<{
        processedFile: (aiChat_mojom_UploadedFile | null);
    }>;
    processPdfFile(fileData: number[], filename: string): Promise<{
        processedFile: (aiChat_mojom_UploadedFile | null);
    }>;
    processTextFile(fileData: number[], filename: string): Promise<{
        processedFile: (aiChat_mojom_UploadedFile | null);
    }>;
    getPluralString(key: string, count: number): Promise<{
        pluralString: string;
    }>;
    getFaviconDataURL(pageUrl: url_mojom_Url): Promise<{
        dataUrl: (string | null);
    }>;
    showWorkspaceFolderPicker(conversationUuid: string): Promise<{
        selectedPath: (string | null);
    }>;
    openWorkspaceFile(workspaceUrl: url_mojom_Url, filePath: string): void;
    closeUI(): void;
    setChatUI(chatUi: ChatUIRemote): Promise<{
        isStandalone: boolean;
    }>;
    bindRelatedConversation(conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote): void;
    associateTab(tab: aiChat_mojom_TabData, conversationUuid: string): void;
    associateUrlContent(url: url_mojom_Url, title: string, conversationUuid: string): void;
    disassociateContent(content: aiChat_mojom_AssociatedContent, conversationUuid: string): void;
    newConversation(conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote, workspaceUrl: (url_mojom_Url | null)): void;
}
export declare class AIChatUIHandlerRemote implements AIChatUIHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<AIChatUIHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AIChatUIHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AIChatUIHandlerPendingReceiverEndpoint);
    openAIChatSettings(): void;
    openMemorySettings(): void;
    openConversationFullPage(conversationUuid: string): void;
    openAIChatAgentProfile(): void;
    openURL(url: url_mojom_Url): void;
    openStorageSupportUrl(): void;
    openModelSupportUrl(): void;
    goPremium(): void;
    refreshPremiumSession(): void;
    managePremium(): void;
    handleVoiceRecognition(conversationUuid: string): void;
    showSoftKeyboard(): void;
    processImageFile(fileData: number[], filename: string): Promise<{
        processedFile: (aiChat_mojom_UploadedFile | null);
    }>;
    processPdfFile(fileData: number[], filename: string): Promise<{
        processedFile: (aiChat_mojom_UploadedFile | null);
    }>;
    processTextFile(fileData: number[], filename: string): Promise<{
        processedFile: (aiChat_mojom_UploadedFile | null);
    }>;
    getPluralString(key: string, count: number): Promise<{
        pluralString: string;
    }>;
    getFaviconDataURL(pageUrl: url_mojom_Url): Promise<{
        dataUrl: (string | null);
    }>;
    showWorkspaceFolderPicker(conversationUuid: string): Promise<{
        selectedPath: (string | null);
    }>;
    openWorkspaceFile(workspaceUrl: url_mojom_Url, filePath: string): void;
    closeUI(): void;
    setChatUI(chatUi: ChatUIRemote): Promise<{
        isStandalone: boolean;
    }>;
    bindRelatedConversation(conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote): void;
    associateTab(tab: aiChat_mojom_TabData, conversationUuid: string): void;
    associateUrlContent(url: url_mojom_Url, title: string, conversationUuid: string): void;
    disassociateContent(content: aiChat_mojom_AssociatedContent, conversationUuid: string): void;
    newConversation(conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote, workspaceUrl: (url_mojom_Url | null)): void;
}
/**
 * An object which receives request messages for the AIChatUIHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AIChatUIHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AIChatUIHandlerRemote, AIChatUIHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AIChatUIHandlerRemote, AIChatUIHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AIChatUIHandlerInterface);
}
export declare class AIChatUIHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AIChatUIHandlerRemote;
}
/**
 * An object which receives request messages for the AIChatUIHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AIChatUIHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AIChatUIHandlerRemote, AIChatUIHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AIChatUIHandlerRemote, AIChatUIHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    openAIChatSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openMemorySettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openConversationFullPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationUuid: string) => any>;
    openAIChatAgentProfile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openURL: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    openStorageSupportUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openModelSupportUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    goPremium: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    refreshPremiumSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    managePremium: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    handleVoiceRecognition: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationUuid: string) => any>;
    showSoftKeyboard: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    processImageFile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fileData: number[], filename: string) => any>;
    processPdfFile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fileData: number[], filename: string) => any>;
    processTextFile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fileData: number[], filename: string) => any>;
    getPluralString: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(key: string, count: number) => any>;
    getFaviconDataURL: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pageUrl: url_mojom_Url) => any>;
    showWorkspaceFolderPicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationUuid: string) => any>;
    openWorkspaceFile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(workspaceUrl: url_mojom_Url, filePath: string) => any>;
    closeUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setChatUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(chatUi: ChatUIRemote) => any>;
    bindRelatedConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote) => any>;
    associateTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tab: aiChat_mojom_TabData, conversationUuid: string) => any>;
    associateUrlContent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, title: string, conversationUuid: string) => any>;
    disassociateContent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(content: aiChat_mojom_AssociatedContent, conversationUuid: string) => any>;
    newConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversation: ConversationHandlerPendingReceiver, conversationUi: ConversationUIRemote, workspaceUrl: (url_mojom_Url | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ChatUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ChatUIPendingReceiver>;
export declare class ChatUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ChatUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<ChatUIPendingReceiver>;
    constructor(handle: MojoHandle | ChatUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ChatUIInterface {
    onNewDefaultConversation(contentId: (number | null)): void;
    onChildFrameBound(receiver: aiChat_mojom_ParentUIFramePendingReceiver): void;
    onDisplayModeChanged(isStandalone: boolean): void;
}
export declare class ChatUIRemote implements ChatUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<ChatUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ChatUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ChatUIPendingReceiverEndpoint);
    onNewDefaultConversation(contentId: (number | null)): void;
    onChildFrameBound(receiver: aiChat_mojom_ParentUIFramePendingReceiver): void;
    onDisplayModeChanged(isStandalone: boolean): void;
}
/**
 * An object which receives request messages for the ChatUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ChatUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ChatUIRemote, ChatUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ChatUIRemote, ChatUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ChatUIInterface);
}
export declare class ChatUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ChatUIRemote;
}
/**
 * An object which receives request messages for the ChatUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ChatUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ChatUIRemote, ChatUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ChatUIRemote, ChatUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onNewDefaultConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(contentId: (number | null)) => any>;
    onChildFrameBound: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: aiChat_mojom_ParentUIFramePendingReceiver) => any>;
    onDisplayModeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isStandalone: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ConversationHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ConversationHandlerPendingReceiver>;
export declare class ConversationHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ConversationHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ConversationHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ConversationHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ConversationHandlerInterface {
    getState(): Promise<{
        conversationState: ConversationState;
    }>;
    getConversationUuid(): Promise<{
        conversationUuid: string;
    }>;
    getModels(): Promise<{
        models: aiChat_mojom_Model[];
        currentModelKey: string;
    }>;
    changeModel(modelKey: string): void;
    getIsRequestInProgress(): Promise<{
        isRequestInProgress: boolean;
    }>;
    getConversationHistory(): Promise<{
        conversationHistory: aiChat_mojom_ConversationTurn[];
    }>;
    submitHumanConversationEntry(input: string, uploadedFiles: (aiChat_mojom_UploadedFile[] | null), threadUuid: (string | null)): void;
    submitHumanConversationEntryWithAction(input: string, actionType: aiChat_mojom_ActionType, threadUuid: (string | null)): void;
    submitHumanConversationEntryWithSkill(input: string, skillId: string, uploadedFiles: (aiChat_mojom_UploadedFile[] | null), threadUuid: (string | null)): void;
    getAssociatedContentInfo(): Promise<{
        associatedContent: aiChat_mojom_AssociatedContent[];
    }>;
    clearErrorAndGetFailedMessage(): Promise<{
        turn: aiChat_mojom_ConversationTurn;
    }>;
    stopGenerationAndMaybeGetHumanEntry(): Promise<{
        humanEntry: (aiChat_mojom_ConversationTurn | null);
    }>;
    respondToVisionModelSwitch(decision: VisionModelSwitchDecision): void;
    rateMessage(isLiked: boolean, turnUuid: string): Promise<{
        ratingId: (string | null);
    }>;
    sendFeedback(category: string, feedback: string, ratingId: string, sendHostname: boolean): Promise<{
        isSuccess: boolean;
    }>;
    getScreenshots(): Promise<{
        screenshots: (aiChat_mojom_UploadedFile[] | null);
    }>;
    setTemporary(temporary: boolean): void;
    pauseTask(): void;
    resumeTask(): void;
    stopTask(): void;
    setToolsAttached(content: aiChat_mojom_AssociatedContent, toolsAttached: boolean): void;
    getContentTools(contentUuid: string): Promise<{
        tools: aiChat_mojom_ToolInfo[];
    }>;
    setContentToolPermission(contentUuid: string, toolName: string, permission: aiChat_mojom_ToolPermission): void;
    setContentAgentChosen(chosen: boolean): void;
}
export declare class ConversationHandlerRemote implements ConversationHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ConversationHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ConversationHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ConversationHandlerPendingReceiverEndpoint);
    getState(): Promise<{
        conversationState: ConversationState;
    }>;
    getConversationUuid(): Promise<{
        conversationUuid: string;
    }>;
    getModels(): Promise<{
        models: aiChat_mojom_Model[];
        currentModelKey: string;
    }>;
    changeModel(modelKey: string): void;
    getIsRequestInProgress(): Promise<{
        isRequestInProgress: boolean;
    }>;
    getConversationHistory(): Promise<{
        conversationHistory: aiChat_mojom_ConversationTurn[];
    }>;
    submitHumanConversationEntry(input: string, uploadedFiles: (aiChat_mojom_UploadedFile[] | null), threadUuid: (string | null)): void;
    submitHumanConversationEntryWithAction(input: string, actionType: aiChat_mojom_ActionType, threadUuid: (string | null)): void;
    submitHumanConversationEntryWithSkill(input: string, skillId: string, uploadedFiles: (aiChat_mojom_UploadedFile[] | null), threadUuid: (string | null)): void;
    getAssociatedContentInfo(): Promise<{
        associatedContent: aiChat_mojom_AssociatedContent[];
    }>;
    clearErrorAndGetFailedMessage(): Promise<{
        turn: aiChat_mojom_ConversationTurn;
    }>;
    stopGenerationAndMaybeGetHumanEntry(): Promise<{
        humanEntry: (aiChat_mojom_ConversationTurn | null);
    }>;
    respondToVisionModelSwitch(decision: VisionModelSwitchDecision): void;
    rateMessage(isLiked: boolean, turnUuid: string): Promise<{
        ratingId: (string | null);
    }>;
    sendFeedback(category: string, feedback: string, ratingId: string, sendHostname: boolean): Promise<{
        isSuccess: boolean;
    }>;
    getScreenshots(): Promise<{
        screenshots: (aiChat_mojom_UploadedFile[] | null);
    }>;
    setTemporary(temporary: boolean): void;
    pauseTask(): void;
    resumeTask(): void;
    stopTask(): void;
    setToolsAttached(content: aiChat_mojom_AssociatedContent, toolsAttached: boolean): void;
    getContentTools(contentUuid: string): Promise<{
        tools: aiChat_mojom_ToolInfo[];
    }>;
    setContentToolPermission(contentUuid: string, toolName: string, permission: aiChat_mojom_ToolPermission): void;
    setContentAgentChosen(chosen: boolean): void;
}
/**
 * An object which receives request messages for the ConversationHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ConversationHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ConversationHandlerRemote, ConversationHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ConversationHandlerRemote, ConversationHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ConversationHandlerInterface);
}
export declare class ConversationHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ConversationHandlerRemote;
}
/**
 * An object which receives request messages for the ConversationHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ConversationHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ConversationHandlerRemote, ConversationHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ConversationHandlerRemote, ConversationHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getConversationUuid: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getModels: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    changeModel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(modelKey: string) => any>;
    getIsRequestInProgress: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getConversationHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    submitHumanConversationEntry: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: string, uploadedFiles: (aiChat_mojom_UploadedFile[] | null), threadUuid: (string | null)) => any>;
    submitHumanConversationEntryWithAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: string, actionType: aiChat_mojom_ActionType, threadUuid: (string | null)) => any>;
    submitHumanConversationEntryWithSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: string, skillId: string, uploadedFiles: (aiChat_mojom_UploadedFile[] | null), threadUuid: (string | null)) => any>;
    getAssociatedContentInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearErrorAndGetFailedMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    stopGenerationAndMaybeGetHumanEntry: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    respondToVisionModelSwitch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(decision: VisionModelSwitchDecision) => any>;
    rateMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isLiked: boolean, turnUuid: string) => any>;
    sendFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(category: string, feedback: string, ratingId: string, sendHostname: boolean) => any>;
    getScreenshots: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setTemporary: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(temporary: boolean) => any>;
    pauseTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    resumeTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    stopTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setToolsAttached: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(content: aiChat_mojom_AssociatedContent, toolsAttached: boolean) => any>;
    getContentTools: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(contentUuid: string) => any>;
    setContentToolPermission: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(contentUuid: string, toolName: string, permission: aiChat_mojom_ToolPermission) => any>;
    setContentAgentChosen: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(chosen: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ConversationUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ConversationUIPendingReceiver>;
export declare class ConversationUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ConversationUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<ConversationUIPendingReceiver>;
    constructor(handle: MojoHandle | ConversationUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ConversationUIInterface {
    onConversationHistoryUpdate(entry: (aiChat_mojom_ConversationTurn | null)): void;
    onAPIRequestInProgress(isRequestInProgress: boolean): void;
    onAPIResponseError(apiError: aiChat_mojom_APIError, details: (aiChat_mojom_APIErrorDetails | null)): void;
    onTaskStateChanged(taskState: aiChat_mojom_TaskState): void;
    onModelDataChanged(conversationModelKey: string, defaultModelKey: string, allModels: aiChat_mojom_Model[]): void;
    onAssociatedContentInfoChanged(associatedContent: aiChat_mojom_AssociatedContent[]): void;
    onContentToolsChanged(contentUuid: string, tools: aiChat_mojom_ToolInfo[]): void;
    onVisionModelSwitchChanged(modelKey: (string | null)): void;
    onContentAgentChanged(isContentAgentChosen: boolean, capabilitiesEnabled: aiChat_mojom_ConversationCapability[]): void;
    onConversationDeleted(): void;
}
export declare class ConversationUIRemote implements ConversationUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<ConversationUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ConversationUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ConversationUIPendingReceiverEndpoint);
    onConversationHistoryUpdate(entry: (aiChat_mojom_ConversationTurn | null)): void;
    onAPIRequestInProgress(isRequestInProgress: boolean): void;
    onAPIResponseError(apiError: aiChat_mojom_APIError, details: (aiChat_mojom_APIErrorDetails | null)): void;
    onTaskStateChanged(taskState: aiChat_mojom_TaskState): void;
    onModelDataChanged(conversationModelKey: string, defaultModelKey: string, allModels: aiChat_mojom_Model[]): void;
    onAssociatedContentInfoChanged(associatedContent: aiChat_mojom_AssociatedContent[]): void;
    onContentToolsChanged(contentUuid: string, tools: aiChat_mojom_ToolInfo[]): void;
    onVisionModelSwitchChanged(modelKey: (string | null)): void;
    onContentAgentChanged(isContentAgentChosen: boolean, capabilitiesEnabled: aiChat_mojom_ConversationCapability[]): void;
    onConversationDeleted(): void;
}
/**
 * An object which receives request messages for the ConversationUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ConversationUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ConversationUIRemote, ConversationUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ConversationUIRemote, ConversationUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ConversationUIInterface);
}
export declare class ConversationUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ConversationUIRemote;
}
/**
 * An object which receives request messages for the ConversationUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ConversationUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ConversationUIRemote, ConversationUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ConversationUIRemote, ConversationUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onConversationHistoryUpdate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(entry: (aiChat_mojom_ConversationTurn | null)) => any>;
    onAPIRequestInProgress: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isRequestInProgress: boolean) => any>;
    onAPIResponseError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(apiError: aiChat_mojom_APIError, details: (aiChat_mojom_APIErrorDetails | null)) => any>;
    onTaskStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskState: aiChat_mojom_TaskState) => any>;
    onModelDataChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(conversationModelKey: string, defaultModelKey: string, allModels: aiChat_mojom_Model[]) => any>;
    onAssociatedContentInfoChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(associatedContent: aiChat_mojom_AssociatedContent[]) => any>;
    onContentToolsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(contentUuid: string, tools: aiChat_mojom_ToolInfo[]) => any>;
    onVisionModelSwitchChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(modelKey: (string | null)) => any>;
    onContentAgentChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isContentAgentChosen: boolean, capabilitiesEnabled: aiChat_mojom_ConversationCapability[]) => any>;
    onConversationDeleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type MetricsPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<MetricsPendingReceiver>;
export declare class MetricsPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Metrics> {
    handle: mojo.internal.interfaceSupport.Endpoint<MetricsPendingReceiver>;
    constructor(handle: MojoHandle | MetricsPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface MetricsInterface {
    onSendingPromptWithFullPage(): void;
    onSendingPromptWithNTP(): void;
    onQuickActionStatusChange(isEnabled: boolean): void;
    recordSkillClick(skillShortcut: string): void;
}
export declare class MetricsRemote implements MetricsInterface, mojo.internal.interfaceSupport.InterfaceRemote<MetricsPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<MetricsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | MetricsPendingReceiverEndpoint);
    onSendingPromptWithFullPage(): void;
    onSendingPromptWithNTP(): void;
    onQuickActionStatusChange(isEnabled: boolean): void;
    recordSkillClick(skillShortcut: string): void;
}
/**
 * An object which receives request messages for the Metrics
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class MetricsReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<MetricsRemote, MetricsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MetricsRemote, MetricsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: MetricsInterface);
}
export declare class Metrics {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): MetricsRemote;
}
/**
 * An object which receives request messages for the Metrics
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class MetricsCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<MetricsRemote, MetricsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MetricsRemote, MetricsPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onSendingPromptWithFullPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onSendingPromptWithNTP: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onQuickActionStatusChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isEnabled: boolean) => any>;
    recordSkillClick: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillShortcut: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ConversationSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContentArchiveSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationArchiveSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationShareSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillSpec: {
    $: mojo.internal.MojomType;
};
export declare const ModelWithSubtitleSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionDetailsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_MarkAgreementAccepted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_EnableStoragePref_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_DismissStorageNotice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_DismissPremiumPrompt_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetSkills_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_CreateSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_UpdateSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_DeleteSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetConversations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetConversations_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetActionMenuList_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetActionMenuList_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetPremiumStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetPremiumStatus_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_DeleteConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_RenameConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_ConversationExists_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_ConversationExists_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_ShareConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_ShareConversation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetConversationShares_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_GetConversationShares_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_DeleteConversationShare_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_DeleteConversationShare_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_CopyConversationShareLink_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_BindObserver_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_BindObserver_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_BindConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Service_BindMetrics_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServiceObserver_OnConversationListChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServiceObserver_OnStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServiceObserver_OnSkillsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenAIChatSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenMemorySettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenConversationFullPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenAIChatAgentProfile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenURL_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenStorageSupportUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenModelSupportUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_GoPremium_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_RefreshPremiumSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ManagePremium_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_HandleVoiceRecognition_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ShowSoftKeyboard_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ProcessImageFile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ProcessImageFile_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ProcessPdfFile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ProcessPdfFile_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ProcessTextFile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ProcessTextFile_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_GetPluralString_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_GetPluralString_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_GetFaviconDataURL_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_GetFaviconDataURL_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ShowWorkspaceFolderPicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_ShowWorkspaceFolderPicker_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_OpenWorkspaceFile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_CloseUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_SetChatUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_SetChatUI_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_BindRelatedConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_AssociateTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_AssociateUrlContent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_DisassociateContent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatUIHandler_NewConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChatUI_OnNewDefaultConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChatUI_OnChildFrameBound_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ChatUI_OnDisplayModeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetConversationUuid_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetConversationUuid_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetModels_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetModels_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_ChangeModel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetIsRequestInProgress_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetIsRequestInProgress_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetConversationHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetConversationHistory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SubmitHumanConversationEntry_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SubmitHumanConversationEntryWithAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SubmitHumanConversationEntryWithSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetAssociatedContentInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetAssociatedContentInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_ClearErrorAndGetFailedMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_ClearErrorAndGetFailedMessage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_RespondToVisionModelSwitch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_RateMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_RateMessage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SendFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SendFeedback_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetScreenshots_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetScreenshots_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SetTemporary_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_PauseTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_ResumeTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_StopTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SetToolsAttached_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetContentTools_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_GetContentTools_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SetContentToolPermission_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationHandler_SetContentAgentChosen_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnConversationHistoryUpdate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnAPIRequestInProgress_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnAPIResponseError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnTaskStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnModelDataChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnAssociatedContentInfoChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnContentToolsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnVisionModelSwitchChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnContentAgentChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationUI_OnConversationDeleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Metrics_OnSendingPromptWithFullPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Metrics_OnSendingPromptWithNTP_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Metrics_OnQuickActionStatusChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Metrics_RecordSkillClick_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare interface ConversationMojoType {
    uuid: string;
    title: string;
    updatedTime: mojoBase_mojom_Time;
    hasContent: boolean;
    temporary: boolean;
    modelKey: (string | null);
    totalTokens: bigint;
    trimmedTokens: bigint;
    associatedContent: aiChat_mojom_AssociatedContent[];
}
export type Conversation = ConversationMojoType;
export declare interface ContentArchiveMojoType {
    contentUuid: string;
    content: string;
    conversationTurnUuid: string;
}
export type ContentArchive = ContentArchiveMojoType;
export declare interface ConversationArchiveMojoType {
    entries: aiChat_mojom_ConversationTurn[];
    threads: aiChat_mojom_Thread[];
    associatedContent: ContentArchive[];
}
export type ConversationArchive = ConversationArchiveMojoType;
export declare interface ConversationShareMojoType {
    shareId: string;
    conversationUuid: string;
    conversationTitle: string;
    createdTime: mojoBase_mojom_Time;
}
export type ConversationShare = ConversationShareMojoType;
export declare interface SkillMojoType {
    id: string;
    shortcut: string;
    prompt: string;
    model: (string | null);
    createdTime: mojoBase_mojom_Time;
    lastUsed: mojoBase_mojom_Time;
}
export type Skill = SkillMojoType;
export declare interface ModelWithSubtitleMojoType {
    model: aiChat_mojom_Model;
    subtitle: string;
}
export type ModelWithSubtitle = ModelWithSubtitleMojoType;
export declare interface ActionDetailsMojoType {
    label: string;
    type: aiChat_mojom_ActionType;
}
export type ActionDetails = ActionDetailsMojoType;
export declare interface ActionGroupMojoType {
    category: string;
    entries: ActionEntry[];
}
export type ActionGroup = ActionGroupMojoType;
export declare interface ConversationStateMojoType {
    conversationUuid: string;
    isRequestInProgress: boolean;
    temporary: boolean;
    isContentAgentChosen: boolean;
    error: aiChat_mojom_APIError;
    allModels: aiChat_mojom_Model[];
    currentModelKey: string;
    defaultModelKey: string;
    associatedContent: aiChat_mojom_AssociatedContent[];
    errorDetails: (aiChat_mojom_APIErrorDetails | null);
    toolUseTaskState: aiChat_mojom_TaskState;
    capabilitiesEnabled: aiChat_mojom_ConversationCapability[];
    visionModelSwitchKey: (string | null);
}
export type ConversationState = ConversationStateMojoType;
export declare interface Service_MarkAgreementAccepted_ParamsMojoType {
}
export type Service_MarkAgreementAccepted_Params = Service_MarkAgreementAccepted_ParamsMojoType;
export declare interface Service_EnableStoragePref_ParamsMojoType {
}
export type Service_EnableStoragePref_Params = Service_EnableStoragePref_ParamsMojoType;
export declare interface Service_DismissStorageNotice_ParamsMojoType {
}
export type Service_DismissStorageNotice_Params = Service_DismissStorageNotice_ParamsMojoType;
export declare interface Service_DismissPremiumPrompt_ParamsMojoType {
}
export type Service_DismissPremiumPrompt_Params = Service_DismissPremiumPrompt_ParamsMojoType;
export declare interface Service_GetSkills_ParamsMojoType {
}
export type Service_GetSkills_Params = Service_GetSkills_ParamsMojoType;
export declare interface Service_GetSkills_ResponseParamsMojoType {
    skills: Skill[];
}
export type Service_GetSkills_ResponseParams = Service_GetSkills_ResponseParamsMojoType;
export declare interface Service_CreateSkill_ParamsMojoType {
    shortcut: string;
    prompt: string;
    model: (string | null);
}
export type Service_CreateSkill_Params = Service_CreateSkill_ParamsMojoType;
export declare interface Service_UpdateSkill_ParamsMojoType {
    id: string;
    shortcut: string;
    prompt: string;
    model: (string | null);
}
export type Service_UpdateSkill_Params = Service_UpdateSkill_ParamsMojoType;
export declare interface Service_DeleteSkill_ParamsMojoType {
    id: string;
}
export type Service_DeleteSkill_Params = Service_DeleteSkill_ParamsMojoType;
export declare interface Service_GetConversations_ParamsMojoType {
}
export type Service_GetConversations_Params = Service_GetConversations_ParamsMojoType;
export declare interface Service_GetConversations_ResponseParamsMojoType {
    conversations: Conversation[];
}
export type Service_GetConversations_ResponseParams = Service_GetConversations_ResponseParamsMojoType;
export declare interface Service_GetActionMenuList_ParamsMojoType {
}
export type Service_GetActionMenuList_Params = Service_GetActionMenuList_ParamsMojoType;
export declare interface Service_GetActionMenuList_ResponseParamsMojoType {
    actionList: ActionGroup[];
}
export type Service_GetActionMenuList_ResponseParams = Service_GetActionMenuList_ResponseParamsMojoType;
export declare interface Service_GetPremiumStatus_ParamsMojoType {
}
export type Service_GetPremiumStatus_Params = Service_GetPremiumStatus_ParamsMojoType;
export declare interface Service_GetPremiumStatus_ResponseParamsMojoType {
    status: aiChat_mojom_PremiumStatus;
    info: (aiChat_mojom_PremiumInfo | null);
}
export type Service_GetPremiumStatus_ResponseParams = Service_GetPremiumStatus_ResponseParamsMojoType;
export declare interface Service_DeleteConversation_ParamsMojoType {
    id: string;
}
export type Service_DeleteConversation_Params = Service_DeleteConversation_ParamsMojoType;
export declare interface Service_RenameConversation_ParamsMojoType {
    id: string;
    newName: string;
}
export type Service_RenameConversation_Params = Service_RenameConversation_ParamsMojoType;
export declare interface Service_ConversationExists_ParamsMojoType {
    conversationUuid: string;
}
export type Service_ConversationExists_Params = Service_ConversationExists_ParamsMojoType;
export declare interface Service_ConversationExists_ResponseParamsMojoType {
    exists: boolean;
}
export type Service_ConversationExists_ResponseParams = Service_ConversationExists_ResponseParamsMojoType;
export declare interface Service_ShareConversation_ParamsMojoType {
    encryptedContents: string;
    keyFragment: string;
    conversationUuid: string;
    conversationTitle: string;
    copyToClipboard: boolean;
}
export type Service_ShareConversation_Params = Service_ShareConversation_ParamsMojoType;
export declare interface Service_ShareConversation_ResponseParamsMojoType {
    sharedConversationUrl: (url_mojom_Url | null);
}
export type Service_ShareConversation_ResponseParams = Service_ShareConversation_ResponseParamsMojoType;
export declare interface Service_GetConversationShares_ParamsMojoType {
}
export type Service_GetConversationShares_Params = Service_GetConversationShares_ParamsMojoType;
export declare interface Service_GetConversationShares_ResponseParamsMojoType {
    shares: ConversationShare[];
}
export type Service_GetConversationShares_ResponseParams = Service_GetConversationShares_ResponseParamsMojoType;
export declare interface Service_DeleteConversationShare_ParamsMojoType {
    shareId: string;
}
export type Service_DeleteConversationShare_Params = Service_DeleteConversationShare_ParamsMojoType;
export declare interface Service_DeleteConversationShare_ResponseParamsMojoType {
    success: boolean;
}
export type Service_DeleteConversationShare_ResponseParams = Service_DeleteConversationShare_ResponseParamsMojoType;
export declare interface Service_CopyConversationShareLink_ParamsMojoType {
    shareId: string;
}
export type Service_CopyConversationShareLink_Params = Service_CopyConversationShareLink_ParamsMojoType;
export declare interface Service_BindObserver_ParamsMojoType {
    ui: ServiceObserverRemote;
}
export type Service_BindObserver_Params = Service_BindObserver_ParamsMojoType;
export declare interface Service_BindObserver_ResponseParamsMojoType {
    state: aiChat_mojom_ServiceState;
}
export type Service_BindObserver_ResponseParams = Service_BindObserver_ResponseParamsMojoType;
export declare interface Service_BindConversation_ParamsMojoType {
    conversationUuid: string;
    conversation: ConversationHandlerPendingReceiver;
    conversationUi: ConversationUIRemote;
}
export type Service_BindConversation_Params = Service_BindConversation_ParamsMojoType;
export declare interface Service_BindMetrics_ParamsMojoType {
    metrics: MetricsPendingReceiver;
}
export type Service_BindMetrics_Params = Service_BindMetrics_ParamsMojoType;
export declare interface ServiceObserver_OnConversationListChanged_ParamsMojoType {
    conversations: Conversation[];
}
export type ServiceObserver_OnConversationListChanged_Params = ServiceObserver_OnConversationListChanged_ParamsMojoType;
export declare interface ServiceObserver_OnStateChanged_ParamsMojoType {
    state: aiChat_mojom_ServiceState;
}
export type ServiceObserver_OnStateChanged_Params = ServiceObserver_OnStateChanged_ParamsMojoType;
export declare interface ServiceObserver_OnSkillsChanged_ParamsMojoType {
    skills: Skill[];
}
export type ServiceObserver_OnSkillsChanged_Params = ServiceObserver_OnSkillsChanged_ParamsMojoType;
export declare interface AIChatUIHandler_OpenAIChatSettings_ParamsMojoType {
}
export type AIChatUIHandler_OpenAIChatSettings_Params = AIChatUIHandler_OpenAIChatSettings_ParamsMojoType;
export declare interface AIChatUIHandler_OpenMemorySettings_ParamsMojoType {
}
export type AIChatUIHandler_OpenMemorySettings_Params = AIChatUIHandler_OpenMemorySettings_ParamsMojoType;
export declare interface AIChatUIHandler_OpenConversationFullPage_ParamsMojoType {
    conversationUuid: string;
}
export type AIChatUIHandler_OpenConversationFullPage_Params = AIChatUIHandler_OpenConversationFullPage_ParamsMojoType;
export declare interface AIChatUIHandler_OpenAIChatAgentProfile_ParamsMojoType {
}
export type AIChatUIHandler_OpenAIChatAgentProfile_Params = AIChatUIHandler_OpenAIChatAgentProfile_ParamsMojoType;
export declare interface AIChatUIHandler_OpenURL_ParamsMojoType {
    url: url_mojom_Url;
}
export type AIChatUIHandler_OpenURL_Params = AIChatUIHandler_OpenURL_ParamsMojoType;
export declare interface AIChatUIHandler_OpenStorageSupportUrl_ParamsMojoType {
}
export type AIChatUIHandler_OpenStorageSupportUrl_Params = AIChatUIHandler_OpenStorageSupportUrl_ParamsMojoType;
export declare interface AIChatUIHandler_OpenModelSupportUrl_ParamsMojoType {
}
export type AIChatUIHandler_OpenModelSupportUrl_Params = AIChatUIHandler_OpenModelSupportUrl_ParamsMojoType;
export declare interface AIChatUIHandler_GoPremium_ParamsMojoType {
}
export type AIChatUIHandler_GoPremium_Params = AIChatUIHandler_GoPremium_ParamsMojoType;
export declare interface AIChatUIHandler_RefreshPremiumSession_ParamsMojoType {
}
export type AIChatUIHandler_RefreshPremiumSession_Params = AIChatUIHandler_RefreshPremiumSession_ParamsMojoType;
export declare interface AIChatUIHandler_ManagePremium_ParamsMojoType {
}
export type AIChatUIHandler_ManagePremium_Params = AIChatUIHandler_ManagePremium_ParamsMojoType;
export declare interface AIChatUIHandler_HandleVoiceRecognition_ParamsMojoType {
    conversationUuid: string;
}
export type AIChatUIHandler_HandleVoiceRecognition_Params = AIChatUIHandler_HandleVoiceRecognition_ParamsMojoType;
export declare interface AIChatUIHandler_ShowSoftKeyboard_ParamsMojoType {
}
export type AIChatUIHandler_ShowSoftKeyboard_Params = AIChatUIHandler_ShowSoftKeyboard_ParamsMojoType;
export declare interface AIChatUIHandler_ProcessImageFile_ParamsMojoType {
    fileData: number[];
    filename: string;
}
export type AIChatUIHandler_ProcessImageFile_Params = AIChatUIHandler_ProcessImageFile_ParamsMojoType;
export declare interface AIChatUIHandler_ProcessImageFile_ResponseParamsMojoType {
    processedFile: (aiChat_mojom_UploadedFile | null);
}
export type AIChatUIHandler_ProcessImageFile_ResponseParams = AIChatUIHandler_ProcessImageFile_ResponseParamsMojoType;
export declare interface AIChatUIHandler_ProcessPdfFile_ParamsMojoType {
    fileData: number[];
    filename: string;
}
export type AIChatUIHandler_ProcessPdfFile_Params = AIChatUIHandler_ProcessPdfFile_ParamsMojoType;
export declare interface AIChatUIHandler_ProcessPdfFile_ResponseParamsMojoType {
    processedFile: (aiChat_mojom_UploadedFile | null);
}
export type AIChatUIHandler_ProcessPdfFile_ResponseParams = AIChatUIHandler_ProcessPdfFile_ResponseParamsMojoType;
export declare interface AIChatUIHandler_ProcessTextFile_ParamsMojoType {
    fileData: number[];
    filename: string;
}
export type AIChatUIHandler_ProcessTextFile_Params = AIChatUIHandler_ProcessTextFile_ParamsMojoType;
export declare interface AIChatUIHandler_ProcessTextFile_ResponseParamsMojoType {
    processedFile: (aiChat_mojom_UploadedFile | null);
}
export type AIChatUIHandler_ProcessTextFile_ResponseParams = AIChatUIHandler_ProcessTextFile_ResponseParamsMojoType;
export declare interface AIChatUIHandler_GetPluralString_ParamsMojoType {
    key: string;
    count: number;
}
export type AIChatUIHandler_GetPluralString_Params = AIChatUIHandler_GetPluralString_ParamsMojoType;
export declare interface AIChatUIHandler_GetPluralString_ResponseParamsMojoType {
    pluralString: string;
}
export type AIChatUIHandler_GetPluralString_ResponseParams = AIChatUIHandler_GetPluralString_ResponseParamsMojoType;
export declare interface AIChatUIHandler_GetFaviconDataURL_ParamsMojoType {
    pageUrl: url_mojom_Url;
}
export type AIChatUIHandler_GetFaviconDataURL_Params = AIChatUIHandler_GetFaviconDataURL_ParamsMojoType;
export declare interface AIChatUIHandler_GetFaviconDataURL_ResponseParamsMojoType {
    dataUrl: (string | null);
}
export type AIChatUIHandler_GetFaviconDataURL_ResponseParams = AIChatUIHandler_GetFaviconDataURL_ResponseParamsMojoType;
export declare interface AIChatUIHandler_ShowWorkspaceFolderPicker_ParamsMojoType {
    conversationUuid: string;
}
export type AIChatUIHandler_ShowWorkspaceFolderPicker_Params = AIChatUIHandler_ShowWorkspaceFolderPicker_ParamsMojoType;
export declare interface AIChatUIHandler_ShowWorkspaceFolderPicker_ResponseParamsMojoType {
    selectedPath: (string | null);
}
export type AIChatUIHandler_ShowWorkspaceFolderPicker_ResponseParams = AIChatUIHandler_ShowWorkspaceFolderPicker_ResponseParamsMojoType;
export declare interface AIChatUIHandler_OpenWorkspaceFile_ParamsMojoType {
    workspaceUrl: url_mojom_Url;
    filePath: string;
}
export type AIChatUIHandler_OpenWorkspaceFile_Params = AIChatUIHandler_OpenWorkspaceFile_ParamsMojoType;
export declare interface AIChatUIHandler_CloseUI_ParamsMojoType {
}
export type AIChatUIHandler_CloseUI_Params = AIChatUIHandler_CloseUI_ParamsMojoType;
export declare interface AIChatUIHandler_SetChatUI_ParamsMojoType {
    chatUi: ChatUIRemote;
}
export type AIChatUIHandler_SetChatUI_Params = AIChatUIHandler_SetChatUI_ParamsMojoType;
export declare interface AIChatUIHandler_SetChatUI_ResponseParamsMojoType {
    isStandalone: boolean;
}
export type AIChatUIHandler_SetChatUI_ResponseParams = AIChatUIHandler_SetChatUI_ResponseParamsMojoType;
export declare interface AIChatUIHandler_BindRelatedConversation_ParamsMojoType {
    conversation: ConversationHandlerPendingReceiver;
    conversationUi: ConversationUIRemote;
}
export type AIChatUIHandler_BindRelatedConversation_Params = AIChatUIHandler_BindRelatedConversation_ParamsMojoType;
export declare interface AIChatUIHandler_AssociateTab_ParamsMojoType {
    tab: aiChat_mojom_TabData;
    conversationUuid: string;
}
export type AIChatUIHandler_AssociateTab_Params = AIChatUIHandler_AssociateTab_ParamsMojoType;
export declare interface AIChatUIHandler_AssociateUrlContent_ParamsMojoType {
    url: url_mojom_Url;
    title: string;
    conversationUuid: string;
}
export type AIChatUIHandler_AssociateUrlContent_Params = AIChatUIHandler_AssociateUrlContent_ParamsMojoType;
export declare interface AIChatUIHandler_DisassociateContent_ParamsMojoType {
    content: aiChat_mojom_AssociatedContent;
    conversationUuid: string;
}
export type AIChatUIHandler_DisassociateContent_Params = AIChatUIHandler_DisassociateContent_ParamsMojoType;
export declare interface AIChatUIHandler_NewConversation_ParamsMojoType {
    conversation: ConversationHandlerPendingReceiver;
    conversationUi: ConversationUIRemote;
    workspaceUrl: (url_mojom_Url | null);
}
export type AIChatUIHandler_NewConversation_Params = AIChatUIHandler_NewConversation_ParamsMojoType;
export declare interface ChatUI_OnNewDefaultConversation_ParamsMojoType {
    contentId: (number | null);
}
export type ChatUI_OnNewDefaultConversation_Params = ChatUI_OnNewDefaultConversation_ParamsMojoType;
export declare interface ChatUI_OnChildFrameBound_ParamsMojoType {
    receiver: aiChat_mojom_ParentUIFramePendingReceiver;
}
export type ChatUI_OnChildFrameBound_Params = ChatUI_OnChildFrameBound_ParamsMojoType;
export declare interface ChatUI_OnDisplayModeChanged_ParamsMojoType {
    isStandalone: boolean;
}
export type ChatUI_OnDisplayModeChanged_Params = ChatUI_OnDisplayModeChanged_ParamsMojoType;
export declare interface ConversationHandler_GetState_ParamsMojoType {
}
export type ConversationHandler_GetState_Params = ConversationHandler_GetState_ParamsMojoType;
export declare interface ConversationHandler_GetState_ResponseParamsMojoType {
    conversationState: ConversationState;
}
export type ConversationHandler_GetState_ResponseParams = ConversationHandler_GetState_ResponseParamsMojoType;
export declare interface ConversationHandler_GetConversationUuid_ParamsMojoType {
}
export type ConversationHandler_GetConversationUuid_Params = ConversationHandler_GetConversationUuid_ParamsMojoType;
export declare interface ConversationHandler_GetConversationUuid_ResponseParamsMojoType {
    conversationUuid: string;
}
export type ConversationHandler_GetConversationUuid_ResponseParams = ConversationHandler_GetConversationUuid_ResponseParamsMojoType;
export declare interface ConversationHandler_GetModels_ParamsMojoType {
}
export type ConversationHandler_GetModels_Params = ConversationHandler_GetModels_ParamsMojoType;
export declare interface ConversationHandler_GetModels_ResponseParamsMojoType {
    models: aiChat_mojom_Model[];
    currentModelKey: string;
}
export type ConversationHandler_GetModels_ResponseParams = ConversationHandler_GetModels_ResponseParamsMojoType;
export declare interface ConversationHandler_ChangeModel_ParamsMojoType {
    modelKey: string;
}
export type ConversationHandler_ChangeModel_Params = ConversationHandler_ChangeModel_ParamsMojoType;
export declare interface ConversationHandler_GetIsRequestInProgress_ParamsMojoType {
}
export type ConversationHandler_GetIsRequestInProgress_Params = ConversationHandler_GetIsRequestInProgress_ParamsMojoType;
export declare interface ConversationHandler_GetIsRequestInProgress_ResponseParamsMojoType {
    isRequestInProgress: boolean;
}
export type ConversationHandler_GetIsRequestInProgress_ResponseParams = ConversationHandler_GetIsRequestInProgress_ResponseParamsMojoType;
export declare interface ConversationHandler_GetConversationHistory_ParamsMojoType {
}
export type ConversationHandler_GetConversationHistory_Params = ConversationHandler_GetConversationHistory_ParamsMojoType;
export declare interface ConversationHandler_GetConversationHistory_ResponseParamsMojoType {
    conversationHistory: aiChat_mojom_ConversationTurn[];
}
export type ConversationHandler_GetConversationHistory_ResponseParams = ConversationHandler_GetConversationHistory_ResponseParamsMojoType;
export declare interface ConversationHandler_SubmitHumanConversationEntry_ParamsMojoType {
    input: string;
    uploadedFiles: (aiChat_mojom_UploadedFile[] | null);
    threadUuid: (string | null);
}
export type ConversationHandler_SubmitHumanConversationEntry_Params = ConversationHandler_SubmitHumanConversationEntry_ParamsMojoType;
export declare interface ConversationHandler_SubmitHumanConversationEntryWithAction_ParamsMojoType {
    input: string;
    actionType: aiChat_mojom_ActionType;
    threadUuid: (string | null);
}
export type ConversationHandler_SubmitHumanConversationEntryWithAction_Params = ConversationHandler_SubmitHumanConversationEntryWithAction_ParamsMojoType;
export declare interface ConversationHandler_SubmitHumanConversationEntryWithSkill_ParamsMojoType {
    input: string;
    skillId: string;
    uploadedFiles: (aiChat_mojom_UploadedFile[] | null);
    threadUuid: (string | null);
}
export type ConversationHandler_SubmitHumanConversationEntryWithSkill_Params = ConversationHandler_SubmitHumanConversationEntryWithSkill_ParamsMojoType;
export declare interface ConversationHandler_GetAssociatedContentInfo_ParamsMojoType {
}
export type ConversationHandler_GetAssociatedContentInfo_Params = ConversationHandler_GetAssociatedContentInfo_ParamsMojoType;
export declare interface ConversationHandler_GetAssociatedContentInfo_ResponseParamsMojoType {
    associatedContent: aiChat_mojom_AssociatedContent[];
}
export type ConversationHandler_GetAssociatedContentInfo_ResponseParams = ConversationHandler_GetAssociatedContentInfo_ResponseParamsMojoType;
export declare interface ConversationHandler_ClearErrorAndGetFailedMessage_ParamsMojoType {
}
export type ConversationHandler_ClearErrorAndGetFailedMessage_Params = ConversationHandler_ClearErrorAndGetFailedMessage_ParamsMojoType;
export declare interface ConversationHandler_ClearErrorAndGetFailedMessage_ResponseParamsMojoType {
    turn: aiChat_mojom_ConversationTurn;
}
export type ConversationHandler_ClearErrorAndGetFailedMessage_ResponseParams = ConversationHandler_ClearErrorAndGetFailedMessage_ResponseParamsMojoType;
export declare interface ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ParamsMojoType {
}
export type ConversationHandler_StopGenerationAndMaybeGetHumanEntry_Params = ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ParamsMojoType;
export declare interface ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ResponseParamsMojoType {
    humanEntry: (aiChat_mojom_ConversationTurn | null);
}
export type ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ResponseParams = ConversationHandler_StopGenerationAndMaybeGetHumanEntry_ResponseParamsMojoType;
export declare interface ConversationHandler_RespondToVisionModelSwitch_ParamsMojoType {
    decision: VisionModelSwitchDecision;
}
export type ConversationHandler_RespondToVisionModelSwitch_Params = ConversationHandler_RespondToVisionModelSwitch_ParamsMojoType;
export declare interface ConversationHandler_RateMessage_ParamsMojoType {
    isLiked: boolean;
    turnUuid: string;
}
export type ConversationHandler_RateMessage_Params = ConversationHandler_RateMessage_ParamsMojoType;
export declare interface ConversationHandler_RateMessage_ResponseParamsMojoType {
    ratingId: (string | null);
}
export type ConversationHandler_RateMessage_ResponseParams = ConversationHandler_RateMessage_ResponseParamsMojoType;
export declare interface ConversationHandler_SendFeedback_ParamsMojoType {
    category: string;
    feedback: string;
    ratingId: string;
    sendHostname: boolean;
}
export type ConversationHandler_SendFeedback_Params = ConversationHandler_SendFeedback_ParamsMojoType;
export declare interface ConversationHandler_SendFeedback_ResponseParamsMojoType {
    isSuccess: boolean;
}
export type ConversationHandler_SendFeedback_ResponseParams = ConversationHandler_SendFeedback_ResponseParamsMojoType;
export declare interface ConversationHandler_GetScreenshots_ParamsMojoType {
}
export type ConversationHandler_GetScreenshots_Params = ConversationHandler_GetScreenshots_ParamsMojoType;
export declare interface ConversationHandler_GetScreenshots_ResponseParamsMojoType {
    screenshots: (aiChat_mojom_UploadedFile[] | null);
}
export type ConversationHandler_GetScreenshots_ResponseParams = ConversationHandler_GetScreenshots_ResponseParamsMojoType;
export declare interface ConversationHandler_SetTemporary_ParamsMojoType {
    temporary: boolean;
}
export type ConversationHandler_SetTemporary_Params = ConversationHandler_SetTemporary_ParamsMojoType;
export declare interface ConversationHandler_PauseTask_ParamsMojoType {
}
export type ConversationHandler_PauseTask_Params = ConversationHandler_PauseTask_ParamsMojoType;
export declare interface ConversationHandler_ResumeTask_ParamsMojoType {
}
export type ConversationHandler_ResumeTask_Params = ConversationHandler_ResumeTask_ParamsMojoType;
export declare interface ConversationHandler_StopTask_ParamsMojoType {
}
export type ConversationHandler_StopTask_Params = ConversationHandler_StopTask_ParamsMojoType;
export declare interface ConversationHandler_SetToolsAttached_ParamsMojoType {
    content: aiChat_mojom_AssociatedContent;
    toolsAttached: boolean;
}
export type ConversationHandler_SetToolsAttached_Params = ConversationHandler_SetToolsAttached_ParamsMojoType;
export declare interface ConversationHandler_GetContentTools_ParamsMojoType {
    contentUuid: string;
}
export type ConversationHandler_GetContentTools_Params = ConversationHandler_GetContentTools_ParamsMojoType;
export declare interface ConversationHandler_GetContentTools_ResponseParamsMojoType {
    tools: aiChat_mojom_ToolInfo[];
}
export type ConversationHandler_GetContentTools_ResponseParams = ConversationHandler_GetContentTools_ResponseParamsMojoType;
export declare interface ConversationHandler_SetContentToolPermission_ParamsMojoType {
    contentUuid: string;
    toolName: string;
    permission: aiChat_mojom_ToolPermission;
}
export type ConversationHandler_SetContentToolPermission_Params = ConversationHandler_SetContentToolPermission_ParamsMojoType;
export declare interface ConversationHandler_SetContentAgentChosen_ParamsMojoType {
    chosen: boolean;
}
export type ConversationHandler_SetContentAgentChosen_Params = ConversationHandler_SetContentAgentChosen_ParamsMojoType;
export declare interface ConversationUI_OnConversationHistoryUpdate_ParamsMojoType {
    entry: (aiChat_mojom_ConversationTurn | null);
}
export type ConversationUI_OnConversationHistoryUpdate_Params = ConversationUI_OnConversationHistoryUpdate_ParamsMojoType;
export declare interface ConversationUI_OnAPIRequestInProgress_ParamsMojoType {
    isRequestInProgress: boolean;
}
export type ConversationUI_OnAPIRequestInProgress_Params = ConversationUI_OnAPIRequestInProgress_ParamsMojoType;
export declare interface ConversationUI_OnAPIResponseError_ParamsMojoType {
    apiError: aiChat_mojom_APIError;
    details: (aiChat_mojom_APIErrorDetails | null);
}
export type ConversationUI_OnAPIResponseError_Params = ConversationUI_OnAPIResponseError_ParamsMojoType;
export declare interface ConversationUI_OnTaskStateChanged_ParamsMojoType {
    taskState: aiChat_mojom_TaskState;
}
export type ConversationUI_OnTaskStateChanged_Params = ConversationUI_OnTaskStateChanged_ParamsMojoType;
export declare interface ConversationUI_OnModelDataChanged_ParamsMojoType {
    conversationModelKey: string;
    defaultModelKey: string;
    allModels: aiChat_mojom_Model[];
}
export type ConversationUI_OnModelDataChanged_Params = ConversationUI_OnModelDataChanged_ParamsMojoType;
export declare interface ConversationUI_OnAssociatedContentInfoChanged_ParamsMojoType {
    associatedContent: aiChat_mojom_AssociatedContent[];
}
export type ConversationUI_OnAssociatedContentInfoChanged_Params = ConversationUI_OnAssociatedContentInfoChanged_ParamsMojoType;
export declare interface ConversationUI_OnContentToolsChanged_ParamsMojoType {
    contentUuid: string;
    tools: aiChat_mojom_ToolInfo[];
}
export type ConversationUI_OnContentToolsChanged_Params = ConversationUI_OnContentToolsChanged_ParamsMojoType;
export declare interface ConversationUI_OnVisionModelSwitchChanged_ParamsMojoType {
    modelKey: (string | null);
}
export type ConversationUI_OnVisionModelSwitchChanged_Params = ConversationUI_OnVisionModelSwitchChanged_ParamsMojoType;
export declare interface ConversationUI_OnContentAgentChanged_ParamsMojoType {
    isContentAgentChosen: boolean;
    capabilitiesEnabled: aiChat_mojom_ConversationCapability[];
}
export type ConversationUI_OnContentAgentChanged_Params = ConversationUI_OnContentAgentChanged_ParamsMojoType;
export declare interface ConversationUI_OnConversationDeleted_ParamsMojoType {
}
export type ConversationUI_OnConversationDeleted_Params = ConversationUI_OnConversationDeleted_ParamsMojoType;
export declare interface Metrics_OnSendingPromptWithFullPage_ParamsMojoType {
}
export type Metrics_OnSendingPromptWithFullPage_Params = Metrics_OnSendingPromptWithFullPage_ParamsMojoType;
export declare interface Metrics_OnSendingPromptWithNTP_ParamsMojoType {
}
export type Metrics_OnSendingPromptWithNTP_Params = Metrics_OnSendingPromptWithNTP_ParamsMojoType;
export declare interface Metrics_OnQuickActionStatusChange_ParamsMojoType {
    isEnabled: boolean;
}
export type Metrics_OnQuickActionStatusChange_Params = Metrics_OnQuickActionStatusChange_ParamsMojoType;
export declare interface Metrics_RecordSkillClick_ParamsMojoType {
    skillShortcut: string;
}
export type Metrics_RecordSkillClick_Params = Metrics_RecordSkillClick_ParamsMojoType;
export declare interface ActionEntry {
    subheading?: string;
    details?: ActionDetails;
}
export declare enum ActionEntryFieldTags {
    SUBHEADING = 0,
    DETAILS = 1
}
export declare function whichActionEntry(u: ActionEntry): ActionEntryFieldTags;
