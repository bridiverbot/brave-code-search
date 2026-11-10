import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { SkillsDialogType as skills_mojom_SkillsDialogType, Skill as skills_mojom_Skill, TopicInfo as skills_mojom_TopicInfo } from './skill.mojom-webui.js';
import { SkillsManagementAction as skills_mojom_SkillsManagementAction, SkillsManagementPage as skills_mojom_SkillsManagementPage, SkillsPromptRefinementOutcome as skills_mojom_SkillsPromptRefinementOutcome } from './skill_metrics.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: SkillsPageRemote, handler: PageHandlerPendingReceiver): void;
    createDialogHandler(handler: DialogHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: SkillsPageRemote, handler: PageHandlerPendingReceiver): void;
    createDialogHandler(handler: DialogHandlerPendingReceiver): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: SkillsPageRemote, handler: PageHandlerPendingReceiver) => any>;
    createDialogHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: DialogHandlerPendingReceiver) => any>;
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
    openSkillsDialog(dialogType: skills_mojom_SkillsDialogType, skill: (skills_mojom_Skill | null)): void;
    getInitialUserSkills(): Promise<{
        skills: skills_mojom_Skill[];
    }>;
    getInitial1PSkills(): Promise<{
        initialState: BrowseSkillsInitialState;
    }>;
    request1PSkills(): void;
    deleteSkill(skillId: string): void;
    maybeSave1PSkill(skillId: string): Promise<{
        success: boolean;
    }>;
    recordSkillsManagementAction(page: skills_mojom_SkillsManagementPage, action: skills_mojom_SkillsManagementAction): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    openSkillsDialog(dialogType: skills_mojom_SkillsDialogType, skill: (skills_mojom_Skill | null)): void;
    getInitialUserSkills(): Promise<{
        skills: skills_mojom_Skill[];
    }>;
    getInitial1PSkills(): Promise<{
        initialState: BrowseSkillsInitialState;
    }>;
    request1PSkills(): void;
    deleteSkill(skillId: string): void;
    maybeSave1PSkill(skillId: string): Promise<{
        success: boolean;
    }>;
    recordSkillsManagementAction(page: skills_mojom_SkillsManagementPage, action: skills_mojom_SkillsManagementAction): void;
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
    openSkillsDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(dialogType: skills_mojom_SkillsDialogType, skill: (skills_mojom_Skill | null)) => any>;
    getInitialUserSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getInitial1PSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    request1PSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    maybeSave1PSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    recordSkillsManagementAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: skills_mojom_SkillsManagementPage, action: skills_mojom_SkillsManagementAction) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SkillsPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SkillsPagePendingReceiver>;
export declare class SkillsPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SkillsPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<SkillsPagePendingReceiver>;
    constructor(handle: MojoHandle | SkillsPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SkillsPageInterface {
    updateSkills(skills: skills_mojom_Skill[]): void;
    removeSkill(skillId: string): void;
    update1PSkills(state: BrowseSkillsInitialState): void;
    setSkillsEnabled(enabled: boolean): void;
}
export declare class SkillsPageRemote implements SkillsPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<SkillsPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SkillsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SkillsPagePendingReceiverEndpoint);
    updateSkills(skills: skills_mojom_Skill[]): void;
    removeSkill(skillId: string): void;
    update1PSkills(state: BrowseSkillsInitialState): void;
    setSkillsEnabled(enabled: boolean): void;
}
/**
 * An object which receives request messages for the SkillsPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SkillsPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SkillsPageRemote, SkillsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsPageRemote, SkillsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SkillsPageInterface);
}
export declare class SkillsPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SkillsPageRemote;
}
/**
 * An object which receives request messages for the SkillsPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SkillsPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SkillsPageRemote, SkillsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsPageRemote, SkillsPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    updateSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skills: skills_mojom_Skill[]) => any>;
    removeSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    update1PSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: BrowseSkillsInitialState) => any>;
    setSkillsEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type DialogHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DialogHandlerPendingReceiver>;
export declare class DialogHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DialogHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<DialogHandlerPendingReceiver>;
    constructor(handle: MojoHandle | DialogHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DialogHandlerInterface {
    submitSkill(skill: skills_mojom_Skill, refinementOutcome: skills_mojom_SkillsPromptRefinementOutcome): Promise<{
        success: boolean;
    }>;
    deleteSkill(skillId: string): void;
    refineSkill(skill: skills_mojom_Skill): Promise<{
        refinedSkill: (skills_mojom_Skill | null);
    }>;
    generateNameAndEmoji(skill: skills_mojom_Skill): Promise<{
        refinedSkill: (skills_mojom_Skill | null);
    }>;
    closeDialog(): void;
    showEmojiPicker(): void;
    getInitialState(): Promise<{
        initialDialogState: InitialDialogState;
    }>;
    getSignedInEmail(): Promise<{
        email: string;
    }>;
}
export declare class DialogHandlerRemote implements DialogHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DialogHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DialogHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DialogHandlerPendingReceiverEndpoint);
    submitSkill(skill: skills_mojom_Skill, refinementOutcome: skills_mojom_SkillsPromptRefinementOutcome): Promise<{
        success: boolean;
    }>;
    deleteSkill(skillId: string): void;
    refineSkill(skill: skills_mojom_Skill): Promise<{
        refinedSkill: (skills_mojom_Skill | null);
    }>;
    generateNameAndEmoji(skill: skills_mojom_Skill): Promise<{
        refinedSkill: (skills_mojom_Skill | null);
    }>;
    closeDialog(): void;
    showEmojiPicker(): void;
    getInitialState(): Promise<{
        initialDialogState: InitialDialogState;
    }>;
    getSignedInEmail(): Promise<{
        email: string;
    }>;
}
/**
 * An object which receives request messages for the DialogHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DialogHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DialogHandlerRemote, DialogHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DialogHandlerRemote, DialogHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DialogHandlerInterface);
}
export declare class DialogHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DialogHandlerRemote;
}
/**
 * An object which receives request messages for the DialogHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DialogHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DialogHandlerRemote, DialogHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DialogHandlerRemote, DialogHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    submitSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skill: skills_mojom_Skill, refinementOutcome: skills_mojom_SkillsPromptRefinementOutcome) => any>;
    deleteSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    refineSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skill: skills_mojom_Skill) => any>;
    generateNameAndEmoji: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skill: skills_mojom_Skill) => any>;
    closeDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showEmojiPicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getInitialState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getSignedInEmail: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SkillsPageV2PendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SkillsPageV2PendingReceiver>;
export declare class SkillsPageV2PendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SkillsPageV2> {
    handle: mojo.internal.interfaceSupport.Endpoint<SkillsPageV2PendingReceiver>;
    constructor(handle: MojoHandle | SkillsPageV2PendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SkillsPageV2Interface {
    loadProvidedSkills(skills: skills_mojom_Skill[]): void;
    onUserSkillsUpdated(): void;
}
export declare class SkillsPageV2Remote implements SkillsPageV2Interface, mojo.internal.interfaceSupport.InterfaceRemote<SkillsPageV2PendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SkillsPageV2PendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SkillsPageV2PendingReceiverEndpoint);
    loadProvidedSkills(skills: skills_mojom_Skill[]): void;
    onUserSkillsUpdated(): void;
}
/**
 * An object which receives request messages for the SkillsPageV2
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SkillsPageV2Receiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SkillsPageV2Remote, SkillsPageV2PendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsPageV2Remote, SkillsPageV2PendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SkillsPageV2Interface);
}
export declare class SkillsPageV2 {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SkillsPageV2Remote;
}
/**
 * An object which receives request messages for the SkillsPageV2
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SkillsPageV2CallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SkillsPageV2Remote, SkillsPageV2PendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsPageV2Remote, SkillsPageV2PendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    loadProvidedSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skills: skills_mojom_Skill[]) => any>;
    onUserSkillsUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SkillsPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SkillsPageHandlerPendingReceiver>;
export declare class SkillsPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SkillsPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SkillsPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SkillsPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SkillsPageHandlerInterface {
    setPage(page: SkillsPageV2Remote): void;
    getProvidedSkill(skillId: string): Promise<{
        skill: (skills_mojom_Skill | null);
    }>;
    getProvidedSkills(): Promise<{
        skills: skills_mojom_Skill[];
    }>;
    syncCookies(): Promise<{
        success: boolean;
    }>;
    showSaveToast(): void;
    showSaveAndInvokeToast(skillId: string, skillName: string, skillIcon: string): void;
    showDeleteToast(skillId: string): Promise<{
        actionClicked: boolean;
    }>;
    invokeSkill(skillId: string, skillName: string, skillIcon: string): void;
    sendPrompt(prompt: string): void;
    closeDialog(data: (PendingEditorData | null)): void;
    getPendingEditorData(): Promise<{
        data: (PendingEditorData | null);
    }>;
    signIn(): void;
}
export declare class SkillsPageHandlerRemote implements SkillsPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SkillsPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SkillsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SkillsPageHandlerPendingReceiverEndpoint);
    setPage(page: SkillsPageV2Remote): void;
    getProvidedSkill(skillId: string): Promise<{
        skill: (skills_mojom_Skill | null);
    }>;
    getProvidedSkills(): Promise<{
        skills: skills_mojom_Skill[];
    }>;
    syncCookies(): Promise<{
        success: boolean;
    }>;
    showSaveToast(): void;
    showSaveAndInvokeToast(skillId: string, skillName: string, skillIcon: string): void;
    showDeleteToast(skillId: string): Promise<{
        actionClicked: boolean;
    }>;
    invokeSkill(skillId: string, skillName: string, skillIcon: string): void;
    sendPrompt(prompt: string): void;
    closeDialog(data: (PendingEditorData | null)): void;
    getPendingEditorData(): Promise<{
        data: (PendingEditorData | null);
    }>;
    signIn(): void;
}
/**
 * An object which receives request messages for the SkillsPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SkillsPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SkillsPageHandlerRemote, SkillsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsPageHandlerRemote, SkillsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SkillsPageHandlerInterface);
}
export declare class SkillsPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SkillsPageHandlerRemote;
}
/**
 * An object which receives request messages for the SkillsPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SkillsPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SkillsPageHandlerRemote, SkillsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsPageHandlerRemote, SkillsPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: SkillsPageV2Remote) => any>;
    getProvidedSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    getProvidedSkills: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    syncCookies: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showSaveToast: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showSaveAndInvokeToast: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string, skillName: string, skillIcon: string) => any>;
    showDeleteToast: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    invokeSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string, skillName: string, skillIcon: string) => any>;
    sendPrompt: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prompt: string) => any>;
    closeDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(data: (PendingEditorData | null)) => any>;
    getPendingEditorData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    signIn: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const InitialDialogStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const BrowseSkillsInitialStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PendingEditorDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreateDialogHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenSkillsDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInitialUserSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInitialUserSkills_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInitial1PSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInitial1PSkills_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Request1PSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MaybeSave1PSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MaybeSave1PSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordSkillsManagementAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPage_UpdateSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPage_RemoveSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPage_Update1PSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPage_SetSkillsEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_SubmitSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_SubmitSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_DeleteSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_RefineSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_RefineSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_GenerateNameAndEmoji_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_GenerateNameAndEmoji_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_CloseDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_ShowEmojiPicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_GetInitialState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_GetInitialState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_GetSignedInEmail_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DialogHandler_GetSignedInEmail_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageV2_LoadProvidedSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageV2_OnUserSkillsUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_SetPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_GetProvidedSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_GetProvidedSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_GetProvidedSkills_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_GetProvidedSkills_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_SyncCookies_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_SyncCookies_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_ShowSaveToast_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_ShowSaveAndInvokeToast_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_ShowDeleteToast_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_ShowDeleteToast_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_InvokeSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_SendPrompt_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_CloseDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_GetPendingEditorData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_GetPendingEditorData_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPageHandler_SignIn_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface InitialDialogStateMojoType {
    dialogType: skills_mojom_SkillsDialogType;
    skill: skills_mojom_Skill;
}
export type InitialDialogState = InitialDialogStateMojoType;
export declare interface BrowseSkillsInitialStateMojoType {
    skillMap: {
        [key: string]: skills_mojom_Skill[];
    };
    topicsInfoList: skills_mojom_TopicInfo[];
}
export type BrowseSkillsInitialState = BrowseSkillsInitialStateMojoType;
export declare interface PendingEditorDataMojoType {
    name: string;
    description: string;
    instructions: string;
    icon: string;
    url: url_mojom_Url;
}
export type PendingEditorData = PendingEditorDataMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: SkillsPageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandlerFactory_CreateDialogHandler_ParamsMojoType {
    handler: DialogHandlerPendingReceiver;
}
export type PageHandlerFactory_CreateDialogHandler_Params = PageHandlerFactory_CreateDialogHandler_ParamsMojoType;
export declare interface PageHandler_OpenSkillsDialog_ParamsMojoType {
    dialogType: skills_mojom_SkillsDialogType;
    skill: (skills_mojom_Skill | null);
}
export type PageHandler_OpenSkillsDialog_Params = PageHandler_OpenSkillsDialog_ParamsMojoType;
export declare interface PageHandler_GetInitialUserSkills_ParamsMojoType {
}
export type PageHandler_GetInitialUserSkills_Params = PageHandler_GetInitialUserSkills_ParamsMojoType;
export declare interface PageHandler_GetInitialUserSkills_ResponseParamsMojoType {
    skills: skills_mojom_Skill[];
}
export type PageHandler_GetInitialUserSkills_ResponseParams = PageHandler_GetInitialUserSkills_ResponseParamsMojoType;
export declare interface PageHandler_GetInitial1PSkills_ParamsMojoType {
}
export type PageHandler_GetInitial1PSkills_Params = PageHandler_GetInitial1PSkills_ParamsMojoType;
export declare interface PageHandler_GetInitial1PSkills_ResponseParamsMojoType {
    initialState: BrowseSkillsInitialState;
}
export type PageHandler_GetInitial1PSkills_ResponseParams = PageHandler_GetInitial1PSkills_ResponseParamsMojoType;
export declare interface PageHandler_Request1PSkills_ParamsMojoType {
}
export type PageHandler_Request1PSkills_Params = PageHandler_Request1PSkills_ParamsMojoType;
export declare interface PageHandler_DeleteSkill_ParamsMojoType {
    skillId: string;
}
export type PageHandler_DeleteSkill_Params = PageHandler_DeleteSkill_ParamsMojoType;
export declare interface PageHandler_MaybeSave1PSkill_ParamsMojoType {
    skillId: string;
}
export type PageHandler_MaybeSave1PSkill_Params = PageHandler_MaybeSave1PSkill_ParamsMojoType;
export declare interface PageHandler_MaybeSave1PSkill_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_MaybeSave1PSkill_ResponseParams = PageHandler_MaybeSave1PSkill_ResponseParamsMojoType;
export declare interface PageHandler_RecordSkillsManagementAction_ParamsMojoType {
    page: skills_mojom_SkillsManagementPage;
    action: skills_mojom_SkillsManagementAction;
}
export type PageHandler_RecordSkillsManagementAction_Params = PageHandler_RecordSkillsManagementAction_ParamsMojoType;
export declare interface SkillsPage_UpdateSkills_ParamsMojoType {
    skills: skills_mojom_Skill[];
}
export type SkillsPage_UpdateSkills_Params = SkillsPage_UpdateSkills_ParamsMojoType;
export declare interface SkillsPage_RemoveSkill_ParamsMojoType {
    skillId: string;
}
export type SkillsPage_RemoveSkill_Params = SkillsPage_RemoveSkill_ParamsMojoType;
export declare interface SkillsPage_Update1PSkills_ParamsMojoType {
    state: BrowseSkillsInitialState;
}
export type SkillsPage_Update1PSkills_Params = SkillsPage_Update1PSkills_ParamsMojoType;
export declare interface SkillsPage_SetSkillsEnabled_ParamsMojoType {
    enabled: boolean;
}
export type SkillsPage_SetSkillsEnabled_Params = SkillsPage_SetSkillsEnabled_ParamsMojoType;
export declare interface DialogHandler_SubmitSkill_ParamsMojoType {
    skill: skills_mojom_Skill;
    refinementOutcome: skills_mojom_SkillsPromptRefinementOutcome;
}
export type DialogHandler_SubmitSkill_Params = DialogHandler_SubmitSkill_ParamsMojoType;
export declare interface DialogHandler_SubmitSkill_ResponseParamsMojoType {
    success: boolean;
}
export type DialogHandler_SubmitSkill_ResponseParams = DialogHandler_SubmitSkill_ResponseParamsMojoType;
export declare interface DialogHandler_DeleteSkill_ParamsMojoType {
    skillId: string;
}
export type DialogHandler_DeleteSkill_Params = DialogHandler_DeleteSkill_ParamsMojoType;
export declare interface DialogHandler_RefineSkill_ParamsMojoType {
    skill: skills_mojom_Skill;
}
export type DialogHandler_RefineSkill_Params = DialogHandler_RefineSkill_ParamsMojoType;
export declare interface DialogHandler_RefineSkill_ResponseParamsMojoType {
    refinedSkill: (skills_mojom_Skill | null);
}
export type DialogHandler_RefineSkill_ResponseParams = DialogHandler_RefineSkill_ResponseParamsMojoType;
export declare interface DialogHandler_GenerateNameAndEmoji_ParamsMojoType {
    skill: skills_mojom_Skill;
}
export type DialogHandler_GenerateNameAndEmoji_Params = DialogHandler_GenerateNameAndEmoji_ParamsMojoType;
export declare interface DialogHandler_GenerateNameAndEmoji_ResponseParamsMojoType {
    refinedSkill: (skills_mojom_Skill | null);
}
export type DialogHandler_GenerateNameAndEmoji_ResponseParams = DialogHandler_GenerateNameAndEmoji_ResponseParamsMojoType;
export declare interface DialogHandler_CloseDialog_ParamsMojoType {
}
export type DialogHandler_CloseDialog_Params = DialogHandler_CloseDialog_ParamsMojoType;
export declare interface DialogHandler_ShowEmojiPicker_ParamsMojoType {
}
export type DialogHandler_ShowEmojiPicker_Params = DialogHandler_ShowEmojiPicker_ParamsMojoType;
export declare interface DialogHandler_GetInitialState_ParamsMojoType {
}
export type DialogHandler_GetInitialState_Params = DialogHandler_GetInitialState_ParamsMojoType;
export declare interface DialogHandler_GetInitialState_ResponseParamsMojoType {
    initialDialogState: InitialDialogState;
}
export type DialogHandler_GetInitialState_ResponseParams = DialogHandler_GetInitialState_ResponseParamsMojoType;
export declare interface DialogHandler_GetSignedInEmail_ParamsMojoType {
}
export type DialogHandler_GetSignedInEmail_Params = DialogHandler_GetSignedInEmail_ParamsMojoType;
export declare interface DialogHandler_GetSignedInEmail_ResponseParamsMojoType {
    email: string;
}
export type DialogHandler_GetSignedInEmail_ResponseParams = DialogHandler_GetSignedInEmail_ResponseParamsMojoType;
export declare interface SkillsPageV2_LoadProvidedSkills_ParamsMojoType {
    skills: skills_mojom_Skill[];
}
export type SkillsPageV2_LoadProvidedSkills_Params = SkillsPageV2_LoadProvidedSkills_ParamsMojoType;
export declare interface SkillsPageV2_OnUserSkillsUpdated_ParamsMojoType {
}
export type SkillsPageV2_OnUserSkillsUpdated_Params = SkillsPageV2_OnUserSkillsUpdated_ParamsMojoType;
export declare interface SkillsPageHandler_SetPage_ParamsMojoType {
    page: SkillsPageV2Remote;
}
export type SkillsPageHandler_SetPage_Params = SkillsPageHandler_SetPage_ParamsMojoType;
export declare interface SkillsPageHandler_GetProvidedSkill_ParamsMojoType {
    skillId: string;
}
export type SkillsPageHandler_GetProvidedSkill_Params = SkillsPageHandler_GetProvidedSkill_ParamsMojoType;
export declare interface SkillsPageHandler_GetProvidedSkill_ResponseParamsMojoType {
    skill: (skills_mojom_Skill | null);
}
export type SkillsPageHandler_GetProvidedSkill_ResponseParams = SkillsPageHandler_GetProvidedSkill_ResponseParamsMojoType;
export declare interface SkillsPageHandler_GetProvidedSkills_ParamsMojoType {
}
export type SkillsPageHandler_GetProvidedSkills_Params = SkillsPageHandler_GetProvidedSkills_ParamsMojoType;
export declare interface SkillsPageHandler_GetProvidedSkills_ResponseParamsMojoType {
    skills: skills_mojom_Skill[];
}
export type SkillsPageHandler_GetProvidedSkills_ResponseParams = SkillsPageHandler_GetProvidedSkills_ResponseParamsMojoType;
export declare interface SkillsPageHandler_SyncCookies_ParamsMojoType {
}
export type SkillsPageHandler_SyncCookies_Params = SkillsPageHandler_SyncCookies_ParamsMojoType;
export declare interface SkillsPageHandler_SyncCookies_ResponseParamsMojoType {
    success: boolean;
}
export type SkillsPageHandler_SyncCookies_ResponseParams = SkillsPageHandler_SyncCookies_ResponseParamsMojoType;
export declare interface SkillsPageHandler_ShowSaveToast_ParamsMojoType {
}
export type SkillsPageHandler_ShowSaveToast_Params = SkillsPageHandler_ShowSaveToast_ParamsMojoType;
export declare interface SkillsPageHandler_ShowSaveAndInvokeToast_ParamsMojoType {
    skillId: string;
    skillName: string;
    skillIcon: string;
}
export type SkillsPageHandler_ShowSaveAndInvokeToast_Params = SkillsPageHandler_ShowSaveAndInvokeToast_ParamsMojoType;
export declare interface SkillsPageHandler_ShowDeleteToast_ParamsMojoType {
    skillId: string;
}
export type SkillsPageHandler_ShowDeleteToast_Params = SkillsPageHandler_ShowDeleteToast_ParamsMojoType;
export declare interface SkillsPageHandler_ShowDeleteToast_ResponseParamsMojoType {
    actionClicked: boolean;
}
export type SkillsPageHandler_ShowDeleteToast_ResponseParams = SkillsPageHandler_ShowDeleteToast_ResponseParamsMojoType;
export declare interface SkillsPageHandler_InvokeSkill_ParamsMojoType {
    skillId: string;
    skillName: string;
    skillIcon: string;
}
export type SkillsPageHandler_InvokeSkill_Params = SkillsPageHandler_InvokeSkill_ParamsMojoType;
export declare interface SkillsPageHandler_SendPrompt_ParamsMojoType {
    prompt: string;
}
export type SkillsPageHandler_SendPrompt_Params = SkillsPageHandler_SendPrompt_ParamsMojoType;
export declare interface SkillsPageHandler_CloseDialog_ParamsMojoType {
    data: (PendingEditorData | null);
}
export type SkillsPageHandler_CloseDialog_Params = SkillsPageHandler_CloseDialog_ParamsMojoType;
export declare interface SkillsPageHandler_GetPendingEditorData_ParamsMojoType {
}
export type SkillsPageHandler_GetPendingEditorData_Params = SkillsPageHandler_GetPendingEditorData_ParamsMojoType;
export declare interface SkillsPageHandler_GetPendingEditorData_ResponseParamsMojoType {
    data: (PendingEditorData | null);
}
export type SkillsPageHandler_GetPendingEditorData_ResponseParams = SkillsPageHandler_GetPendingEditorData_ResponseParamsMojoType;
export declare interface SkillsPageHandler_SignIn_ParamsMojoType {
}
export type SkillsPageHandler_SignIn_Params = SkillsPageHandler_SignIn_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, SkillsPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, SkillsPageRemote, PageHandlerPendingReceiver, SkillsPagePendingReceiver, SkillsPageCallbackRouter, PageHandlerRemote>;
