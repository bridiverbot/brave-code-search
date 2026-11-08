export type NewTabOption = {
    name: string;
    value: number;
};
export interface BraveNewTabBrowserProxy {
    getNewTabShowsOptionsList(): Promise<NewTabOption[]>;
    shouldShowNewTabDashboardSettings(): Promise<boolean>;
}
export declare class BraveNewTabBrowserProxyImpl implements BraveNewTabBrowserProxy {
    getNewTabShowsOptionsList(): Promise<NewTabOption[]>;
    shouldShowNewTabDashboardSettings(): Promise<boolean>;
    static getInstance(): BraveNewTabBrowserProxyImpl;
}
