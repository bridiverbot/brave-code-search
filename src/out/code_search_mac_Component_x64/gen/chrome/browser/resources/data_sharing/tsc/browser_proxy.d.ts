import type { PageHandlerInterface } from './data_sharing.mojom-webui.js';
import { PageCallbackRouter } from './data_sharing.mojom-webui.js';
import type { GroupAction, GroupActionProgress } from './data_sharing.mojom-webui.js';
import type { DataSharingSdkSitePreview } from './data_sharing_sdk_types.js';
import { Code } from './data_sharing_sdk_types.js';
export interface BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler?: PageHandlerInterface;
    showUi(): void;
    closeUi(status: Code): void;
    makeTabGroupShared(tabGroupId: string, groupId: string, tokenSecret: string): Promise<string | undefined>;
    aboutToUnShareTabGroup(tabGroupId: string): void;
    onTabGroupUnShareComplete(tabGroupId: string): void;
    getShareLink(groupId: string, tokenSecret: string): Promise<string>;
    getTabGroupPreview(groupId: string, tokenSecret: string): Promise<DataSharingSdkSitePreview[]>;
    onGroupAction(action: GroupAction, progress: GroupActionProgress): void;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    constructor();
    showUi(): void;
    closeUi(status: Code): void;
    aboutToUnShareTabGroup(tabGroupId: string): void;
    onTabGroupUnShareComplete(tabGroupId: string): void;
    makeTabGroupShared(tabGroupId: string, groupId: string, tokenSecret: string): Promise<string | undefined>;
    getShareLink(groupId: string, tokenSecret: string): Promise<string>;
    getTabGroupPreview(groupId: string, tokenSecret: string): Promise<DataSharingSdkSitePreview[]>;
    onGroupAction(action: GroupAction, progress: GroupActionProgress): void;
    private getFaviconServiceUrl;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy | null): void;
}
