import type { WindowOpenDisposition } from '//resources/mojo/ui/base/mojom/window_open_disposition.mojom-webui.js';
import type { SuggestInventory } from 'chrome://resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import type { NavigationPredictor } from 'chrome://resources/mojo/components/omnibox/browser/omnibox.mojom-webui.js';
import type { ActionModifiers, InputMethod, KeywordActivationMethod, OmniboxPopupSelection, PageHandlerInterface, PageRemote, PlaceholderConfig, SelectedFileInfo, SmartComposeStats } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { DriveDisclaimerStatus, PageCallbackRouter } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { ModelMode, ToolMode } from 'chrome://resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { BigBuffer } from 'chrome://resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import type { String16 } from 'chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import type { TimeTicks } from 'chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import type { UnguessableToken } from 'chrome://resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import type { Url } from 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Helps track realbox browser call arguments. A mocked page handler remote
 * resolves the browser call promises with the arguments as an array making the
 * tests prone to change if the arguments change. This class extends the page
 * handler remote, resolving the browser call promises with named arguments.
 */
declare class FakePageHandler extends TestBrowserProxy implements PageHandlerInterface {
    private results_;
    constructor();
    setResultFor(methodName: string, result: any): void;
    onFocusChanged(focused: boolean): void;
    deleteAutocompleteMatch(line: number, url: Url): void;
    activateKeyword(line: number, url: Url, matchSelectionTimestamp: TimeTicks, activationMethod: KeywordActivationMethod): void;
    showContextMenu(point: {
        x: number;
        y: number;
    }): void;
    showScreenshotMenu(anchorRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    executeAction(line: number, actionIndex: number, url: Url, matchSelectionTimestamp: TimeTicks, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): void;
    openAutocompleteMatch(resultSequenceId: number, line: number, url: Url, areMatchesShowing: boolean, mouseButton: number, modifiers: ActionModifiers, viaKeyboard: boolean): void;
    setSmartComposeStats(smartComposeStats: SmartComposeStats): void;
    onNavigationLikely(line: number, url: Url, navigationPredictor: NavigationPredictor): void;
    onThumbnailRemoved(): void;
    queryAutocomplete(queryId: number, tabId: (number | null), input: String16, preventInlineAutocomplete: boolean, cursorPosition: number, suggestInventory: SuggestInventory, isOnFocus: boolean, keyword: string, inputMethod: InputMethod): void;
    stopAutocomplete(clearResult: boolean): void;
    toggleSuggestionGroupIdVisibility(suggestionGroupId: number): void;
    getCyclingPlaceholderConfig(): Promise<{
        config: PlaceholderConfig;
    }>;
    getRecentTabs(): any;
    getTabPreview(tabId: number): Promise<{
        previewDataUrl: string;
    }>;
    waitForTabFaviconLoad(tabId: number): Promise<{
        faviconDataUrl: null;
    }>;
    getInputState(): any;
    notifySessionStarted(): void;
    notifySessionAbandoned(): void;
    addFileContext(fileInfo: SelectedFileInfo, fileBytes: BigBuffer): Promise<string>;
    onDriveUploadClicked(): any;
    addTabContext(tabId: number, delayUpload: boolean): Promise<string>;
    deleteContext(fileToken: UnguessableToken): void;
    deleteTabContext(tabId: number): void;
    clearFiles(): void;
    submitQuery(queryText: string, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): void;
    openLensSearch(): void;
    openProfilePicker(): void;
    setActiveToolMode(tool: ToolMode, isSetByAim?: boolean): void;
    recordToolSelectionAction(tool: ToolMode): void;
    setActiveModelMode(model: ModelMode, isSetByAim: boolean): void;
    recordModelSelectionAction(model: ModelMode): void;
    activateMetricsFunnel(funnelName: string): void;
    setPopupSelection(selection: OmniboxPopupSelection): void;
    openPopupSelection(resultSequenceId: number, selection: OmniboxPopupSelection, disposition: WindowOpenDisposition): void;
    getDriveDisclaimerStatus(): Promise<{
        status: DriveDisclaimerStatus;
    }>;
    onDriveDisclaimerAccepted(): void;
    getPageClassification(): Promise<{
        metricSource: string;
    }>;
    setSmartTabSharingActive(active: boolean): void;
    getSmartTabSharingActive(): any;
    resetSmartTabSharing(): any;
    startScreenshare(preferEntireScreen: boolean): any;
    captureRegionScreenshot(): any;
    dismissFre(): void;
    showHotkeyDropdown(anchorBounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): any;
    openHotkeySettings(): void;
    onEscapePressed(): void;
}
export declare class TestSearchboxBrowserProxy {
    callbackRouter: PageCallbackRouter;
    callbackRouterRemote: PageRemote;
    handler: FakePageHandler;
    constructor();
}
export {};
