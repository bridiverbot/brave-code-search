import '//resources/js/cr.js';
import type { BrowserControlsServiceInterface } from '/shared/browser_controls_api.mojom-webui.js';
import type { IconUpdate } from '/shared/icon_handle.mojom-webui.js';
import type { ToolbarUIServiceInterface } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { FocusRequestTarget, ToolbarState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
export type ToolbarStateListener = (icons: IconUpdate[], state: ToolbarState) => void;
export type ToolbarStateListenerHandle = number;
export declare const INVALID_TOOLBAR_STATE_LISTENER_HANDLE: ToolbarStateListenerHandle;
export type FocusRequestListener = (target: FocusRequestTarget) => void;
export type FocusRequestHandle = number;
export declare const INVALID_FOCUS_REQUEST_HANDLE: FocusRequestHandle;
export type ShowSplitTabsContextMenuListener = () => void;
export type ShowSplitTabsContextMenuHandle = number;
export declare const INVALID_SHOW_SPLIT_TABS_CONTEXT_MENU_HANDLE: ShowSplitTabsContextMenuHandle;
import type { PermissionChipDelegate } from '/shared/permission_chip_delegate.js';
import type { LhsChipIdentifier } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
/**
 * Keys corresponding to initial toolbar state values provided by the browser.
 */
export declare enum ToolbarStateKey {
    IS_NAVIGATION_LOADING = "isNavigationLoading",
    RELOAD_CAN_SHOW_MENU = "reloadCanShowMenu",
    BACK_BUTTON_ENABLED = "backButtonEnabled",
    FORWARD_BUTTON_ENABLED = "forwardButtonEnabled",
    HOME_BUTTON_SHOULD_BE_SHOWN = "homeButtonShouldBeShown",
    BATTERY_SAVER_BUTTON_VISIBLE = "batterySaverButtonVisible",
    LAYOUT_CONSTANTS_VERSION = "layoutConstantsVersion",
    TOUCH_UI = "touchUi",
    INITIAL_WEBUI_SURFACE_SYNC_ENABLED = "initialWebUISurfaceSyncEnabled",
    IS_FALLBACK_PREWARMING = "isFallbackPrewarming",
    IS_PROFILE_ELIGIBLE_FOR_GLIC = "isProfileEligibleForGlic",
    CAN_SHOW_AVATAR_FOR_PROFILE = "canShowAvatarForProfile"
}
/**
 * Schema mapping `ToolbarStateKey` entries to their respective value types in
 * the initial state dictionary.
 */
export interface ToolbarFlatStateSchema {
    [ToolbarStateKey.IS_NAVIGATION_LOADING]: boolean;
    [ToolbarStateKey.RELOAD_CAN_SHOW_MENU]: boolean;
    [ToolbarStateKey.BACK_BUTTON_ENABLED]: boolean;
    [ToolbarStateKey.FORWARD_BUTTON_ENABLED]: boolean;
    [ToolbarStateKey.HOME_BUTTON_SHOULD_BE_SHOWN]: boolean;
    [ToolbarStateKey.BATTERY_SAVER_BUTTON_VISIBLE]: boolean;
    [ToolbarStateKey.LAYOUT_CONSTANTS_VERSION]: number;
    [ToolbarStateKey.TOUCH_UI]: boolean;
    [ToolbarStateKey.INITIAL_WEBUI_SURFACE_SYNC_ENABLED]: boolean;
    [ToolbarStateKey.IS_FALLBACK_PREWARMING]: boolean;
    [ToolbarStateKey.IS_PROFILE_ELIGIBLE_FOR_GLIC]: boolean;
    [ToolbarStateKey.CAN_SHOW_AVATAR_FOR_PROFILE]: boolean;
}
/**
 * Wraps the parsed initial toolbar state dictionary and provides typed getters.
 */
export declare class InitialStateReader {
    private state_;
    constructor(state?: Record<string, unknown>);
    static fromJson(jsonString: string): InitialStateReader;
    /**
     * Determines whether the specified `key` is present in the initial toolbar
     * state dictionary.
     */
    hasKey(key: ToolbarStateKey): boolean;
    /**
     * Reads a boolean property for the given `key` from the initial state
     * dictionary. Returns `false` if the property is missing or not a boolean.
     */
    getBoolean<K extends keyof ToolbarFlatStateSchema>(key: K): boolean;
    /**
     * Reads a numeric property for the given `key` from the initial state
     * dictionary. Returns `0` if the property is missing or not a number.
     */
    getInteger<K extends keyof ToolbarFlatStateSchema>(key: K): number;
}
export interface BrowserProxy extends PermissionChipDelegate {
    browserControlsHandler: BrowserControlsServiceInterface;
    toolbarUIHandler: ToolbarUIServiceInterface;
    /**
     * Returns the parsed and cached initial toolbar state reader.
     */
    getInitialState(): InitialStateReader;
    /**
     * Records a value in a histogram.
     * @param histogramName The name of the histogram.
     * @param value The value to record.
     * @param maxValue The maximum value of the histogram.
     */
    recordInHistogram(histogramName: string, value: number, maxValue: number): void;
    addToolbarStateListener(listener: ToolbarStateListener): ToolbarStateListenerHandle;
    addFocusRequestListener(listener: FocusRequestListener): FocusRequestHandle;
    addShowSplitTabsContextMenuListener(listener: ShowSplitTabsContextMenuListener): ShowSplitTabsContextMenuHandle;
    removeToolbarStateListener(handle: ToolbarStateListenerHandle): void;
    removeFocusRequestListener(handle: FocusRequestHandle): void;
    removeShowSplitTabsContextMenuListener(handle: ShowSplitTabsContextMenuHandle): void;
    /**
     * Resolves once the browser has dispatched every message sent so far on the
     * ToolbarUIService pipe (e.g. onOmniboxAction). For tests that need the
     * browser-side state to reflect what this page has already sent.
     */
    flushToolbarUiHandlerForTesting(): Promise<void>;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    private callbackRouter;
    private toolbarUIRemote;
    private initialState_;
    browserControlsHandler: BrowserControlsServiceInterface;
    toolbarUIHandler: ToolbarUIServiceInterface;
    private constructor();
    onChipClicked(id: LhsChipIdentifier, isPointer: boolean, stateToken: number): void;
    onChipPointerEntered(id: LhsChipIdentifier): void;
    onChipPointerExited(id: LhsChipIdentifier): void;
    onChipMousePressed(id: LhsChipIdentifier, isMiddleClick?: boolean): void;
    onChipExpandAnimationEnded(id: LhsChipIdentifier): void;
    onChipCollapseAnimationEnded(id: LhsChipIdentifier): void;
    getInitialState(): InitialStateReader;
    /**
     * Records a value in a histogram.
     * @param histogramName The name of the histogram.
     * @param value The value to record.
     * @param maxValue The maximum value of the histogram.
     */
    recordInHistogram(histogramName: string, value: number, maxValue: number): void;
    addToolbarStateListener(listener: ToolbarStateListener): number;
    addFocusRequestListener(listener: FocusRequestListener): number;
    addShowSplitTabsContextMenuListener(listener: ShowSplitTabsContextMenuListener): number;
    removeToolbarStateListener(handle: ToolbarStateListenerHandle): void;
    removeFocusRequestListener(handle: FocusRequestHandle): void;
    removeShowSplitTabsContextMenuListener(handle: ShowSplitTabsContextMenuHandle): void;
    flushToolbarUiHandlerForTesting(): Promise<void>;
    static getInstance(): BrowserProxy;
    static setInstance(proxy: BrowserProxy): void;
}
