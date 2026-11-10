import { PolicyPageClientCallbackRouter, PolicyPageHandlerRemote } from './policy.mojom-webui.js';
import type { GetPoliciesReason, PolicyGroupNames, PolicyGroupsResponse, Status } from './policy.mojom-webui.js';
export interface CustomCommandLineArguments {
    hasCustomArgs: boolean;
    commandLineArgs: string;
}
export declare class BrowserProxy {
    handler: PolicyPageHandlerRemote;
    callbackRouter: PolicyPageClientCallbackRouter;
    constructor();
    static getInstance(): BrowserProxy;
    static getDebugString(): Promise<string>;
    static checkPromotionEligibility(): Promise<boolean>;
    static setBannerDismissed(): void;
    static recordBannerRedirected(): void;
    static getPolicies(reason: GetPoliciesReason): Promise<string>;
    static listenForStatusUpdated(callback: (status: Record<string, Status>) => void): void;
    static listenForPoliciesUpdated(callback: (names: Record<string, PolicyGroupNames>, groups: PolicyGroupsResponse) => void): void;
}
