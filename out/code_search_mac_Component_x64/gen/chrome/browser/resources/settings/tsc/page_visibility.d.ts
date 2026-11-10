/**
 * Specifies page visibility based on incognito status and Chrome OS guest mode.
 */
export interface PageVisibility {
    a11y?: boolean;
    ai?: boolean;
    appearance?: boolean | AppearancePageVisibility;
    autofill?: boolean;
    defaultBrowser?: boolean;
    downloads?: boolean;
    extensions?: boolean;
    languages?: boolean;
    onStartup?: boolean;
    people?: boolean;
    performance?: boolean;
    privacy?: boolean | PrivacyPageVisibility;
    reset?: boolean;
    safetyHub?: boolean;
    system?: boolean;
    yourSavedInfo?: boolean;
}
export interface AppearancePageVisibility {
    bookmarksBar: boolean;
    homeButton: boolean;
    hoverCard: boolean;
    pageZoom: boolean;
    setTheme: boolean;
    sidePanel: boolean;
}
export interface PrivacyPageVisibility {
    networkPrediction: boolean;
    searchPrediction: boolean;
}
/**
 * Dictionary defining page visibility.
 */
export declare let pageVisibility: PageVisibility | undefined;
export declare function resetPageVisibilityForTesting(testVisibility?: PageVisibility | undefined): void;
