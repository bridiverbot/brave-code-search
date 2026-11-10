// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/js/cr.js';
import { BrowserControlsService } from '/shared/browser_controls_api.mojom-webui.js';
import { ToolbarUIObserverCallbackRouter, ToolbarUIService } from '/shared/toolbar_ui_api.mojom-webui.js';
export const INVALID_TOOLBAR_STATE_LISTENER_HANDLE = -1;
export const INVALID_FOCUS_REQUEST_HANDLE = -1;
export const INVALID_SHOW_SPLIT_TABS_CONTEXT_MENU_HANDLE = -1;
/**
 * Keys corresponding to initial toolbar state values provided by the browser.
 */
export var ToolbarStateKey;
(function (ToolbarStateKey) {
    ToolbarStateKey["IS_NAVIGATION_LOADING"] = "isNavigationLoading";
    ToolbarStateKey["RELOAD_CAN_SHOW_MENU"] = "reloadCanShowMenu";
    ToolbarStateKey["BACK_BUTTON_ENABLED"] = "backButtonEnabled";
    ToolbarStateKey["FORWARD_BUTTON_ENABLED"] = "forwardButtonEnabled";
    ToolbarStateKey["HOME_BUTTON_SHOULD_BE_SHOWN"] = "homeButtonShouldBeShown";
    ToolbarStateKey["BATTERY_SAVER_BUTTON_VISIBLE"] = "batterySaverButtonVisible";
    ToolbarStateKey["LAYOUT_CONSTANTS_VERSION"] = "layoutConstantsVersion";
    ToolbarStateKey["TOUCH_UI"] = "touchUi";
    ToolbarStateKey["INITIAL_WEBUI_SURFACE_SYNC_ENABLED"] = "initialWebUISurfaceSyncEnabled";
    ToolbarStateKey["IS_FALLBACK_PREWARMING"] = "isFallbackPrewarming";
    ToolbarStateKey["IS_PROFILE_ELIGIBLE_FOR_GLIC"] = "isProfileEligibleForGlic";
    ToolbarStateKey["CAN_SHOW_AVATAR_FOR_PROFILE"] = "canShowAvatarForProfile";
})(ToolbarStateKey || (ToolbarStateKey = {}));
/**
 * Wraps the parsed initial toolbar state dictionary and provides typed getters.
 */
export class InitialStateReader {
    state_;
    constructor(state = {}) {
        this.state_ = state;
    }
    static fromJson(jsonString) {
        if (jsonString) {
            try {
                const parsed = JSON.parse(jsonString);
                if (parsed && typeof parsed === 'object') {
                    return new InitialStateReader(parsed);
                }
            }
            catch {
                // Fall through to empty state.
            }
        }
        return new InitialStateReader();
    }
    /**
     * Determines whether the specified `key` is present in the initial toolbar
     * state dictionary.
     */
    hasKey(key) {
        return key in this.state_;
    }
    /**
     * Reads a boolean property for the given `key` from the initial state
     * dictionary. Returns `false` if the property is missing or not a boolean.
     */
    getBoolean(key) {
        const val = this.state_[key];
        return typeof val === 'boolean' ? val : false;
    }
    /**
     * Reads a numeric property for the given `key` from the initial state
     * dictionary. Returns `0` if the property is missing or not a number.
     */
    getInteger(key) {
        const val = this.state_[key];
        return typeof val === 'number' ? val : 0;
    }
}
export class BrowserProxyImpl {
    callbackRouter;
    toolbarUIRemote;
    initialState_ = null;
    browserControlsHandler;
    toolbarUIHandler;
    constructor() {
        this.callbackRouter = new ToolbarUIObserverCallbackRouter();
        this.browserControlsHandler = BrowserControlsService.getRemote();
        this.toolbarUIRemote = ToolbarUIService.getRemote();
        this.toolbarUIHandler = this.toolbarUIRemote;
    }
    onChipClicked(id, isPointer, stateToken) {
        this.toolbarUIHandler.onLhsChipClicked(id, isPointer, stateToken);
    }
    onChipPointerEntered(id) {
        this.toolbarUIHandler.onLhsChipPointerEntered(id);
    }
    onChipPointerExited(id) {
        this.toolbarUIHandler.onLhsChipPointerExited(id);
    }
    onChipMousePressed(id, isMiddleClick = false) {
        this.toolbarUIHandler.onLhsChipMousePressed(id, isMiddleClick);
    }
    onChipExpandAnimationEnded(id) {
        this.toolbarUIHandler.onLhsChipExpandAnimationEnded(id);
    }
    onChipCollapseAnimationEnded(id) {
        this.toolbarUIHandler.onLhsChipCollapseAnimationEnded(id);
    }
    getInitialState() {
        if (!this.initialState_) {
            this.initialState_ =
                InitialStateReader.fromJson(chrome.getVariableValue('initialState'));
        }
        return this.initialState_;
    }
    /**
     * Records a value in a histogram.
     * @param histogramName The name of the histogram.
     * @param value The value to record.
     * @param maxValue The maximum value of the histogram.
     */
    recordInHistogram(histogramName, value, maxValue) {
        chrome.send('metricsHandler:recordInHistogram', [histogramName, value, maxValue]);
    }
    addToolbarStateListener(listener) {
        const handle = this.callbackRouter.onToolbarStateChanged.addListener(listener);
        this.toolbarUIHandler.bind().then(fence => {
            listener(fence.icons, fence.state);
            this.callbackRouter.$.bindHandle(fence.updateStream.handle);
        });
        return handle;
    }
    addFocusRequestListener(listener) {
        // This assumes addToolbarStateListener will happen or has happened to
        // actually connect the router.
        return this.callbackRouter.onFocusRequested.addListener(listener);
    }
    addShowSplitTabsContextMenuListener(listener) {
        return this.callbackRouter.showSplitTabsContextMenu.addListener(listener);
    }
    removeToolbarStateListener(handle) {
        if (handle !== INVALID_TOOLBAR_STATE_LISTENER_HANDLE) {
            this.callbackRouter.removeListener(handle);
        }
    }
    removeFocusRequestListener(handle) {
        if (handle !== INVALID_FOCUS_REQUEST_HANDLE) {
            this.callbackRouter.removeListener(handle);
        }
    }
    removeShowSplitTabsContextMenuListener(handle) {
        if (handle !== INVALID_SHOW_SPLIT_TABS_CONTEXT_MENU_HANDLE) {
            this.callbackRouter.removeListener(handle);
        }
    }
    flushToolbarUiHandlerForTesting() {
        return this.toolbarUIRemote.$.flushForTesting();
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
