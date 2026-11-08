// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { InitialStateReader, INVALID_FOCUS_REQUEST_HANDLE, INVALID_SHOW_SPLIT_TABS_CONTEXT_MENU_HANDLE, INVALID_TOOLBAR_STATE_LISTENER_HANDLE } from 'chrome://webui-toolbar.top-chrome/webui_toolbar.js';
// The values that WebUIToolbarUI sets in the initial state of each frame from
// the user profile, so that the Glic and avatar buttons can be shown by
// default.
const DEFAULT_INITIAL_STATE = {
    isProfileEligibleForGlic: true,
    canShowAvatarForProfile: true,
};
export class TestToolbarUiHandler extends TestBrowserProxy {
    constructor() {
        super([
            'adjustOmniboxTextForCopy',
            'bind',
            'executeExtensionAction',
            'invokePinnedToolbarAction',
            'moveExtensionAction',
            'moveExtensionActionBy',
            'movePinnedToolbarAction',
            'movePinnedToolbarActionBy',
            'onAppMenuFocusChanged',
            'onContentSettingImageAnimationEnded',
            'onContentSettingImagePointerDown',
            'onGlicButtonClicked',
            'onHomeButtonDropFile',
            'onHomeButtonDropText',
            'onHomeButtonDropUrl',
            'onLhsChipClicked',
            'onLhsChipCollapseAnimationEnded',
            'onLhsChipDrag',
            'onLhsChipExpandAnimationEnded',
            'onLhsChipMousePressed',
            'onLhsChipPointerEntered',
            'onLhsChipPointerExited',
            'onLocationBarFocusWithinChanged',
            'onMediaButtonClicked',
            'onOmniboxAction',
            'onPageActionChipShowingChanged',
            'onPageActionClick',
            'onPageInitialized',
            'onPerformanceInterventionButtonClicked',
            'onToolbarDropFile',
            'setAvatarButtonFocused',
            'setAvatarButtonHovered',
            'setAvatarButtonIphPromoShowing',
            'showAvatarMenu',
            'showContentSettingsBubble',
            'showContextMenu',
            'showExtensionContextMenu',
            'showOverflowMenu',
        ]);
    }
    bind() {
        this.methodCalled('bind');
        return new Promise(() => { });
    }
    showContextMenu(menuType, boundsInCssPixels, source, showMenuToken = null) {
        this.methodCalled('showContextMenu', [menuType, boundsInCssPixels, source, showMenuToken]);
    }
    showOverflowMenu() {
        this.methodCalled('showOverflowMenu');
        return Promise.resolve({ result: {} });
    }
    onOmniboxAction(action) {
        this.methodCalled('onOmniboxAction', action);
        return Promise.resolve({ result: {} });
    }
    onPageInitialized() {
        this.methodCalled('onPageInitialized');
    }
    onContentSettingImagePointerDown(type) {
        this.methodCalled('onContentSettingImagePointerDown', type);
    }
    showContentSettingsBubble(type, isPointerInteraction) {
        this.methodCalled('showContentSettingsBubble', [type, isPointerInteraction]);
        return Promise.resolve({ result: {} });
    }
    onPageActionClick(actionId, trigger) {
        this.methodCalled('onPageActionClick', [actionId, trigger]);
        return Promise.resolve({ result: {} });
    }
    onPageActionChipShowingChanged(actionId, isShowing) {
        this.methodCalled('onPageActionChipShowingChanged', [actionId, isShowing]);
        return Promise.resolve({ result: {} });
    }
    invokePinnedToolbarAction(actionId) {
        this.methodCalled('invokePinnedToolbarAction', actionId);
    }
    movePinnedToolbarAction(actionId, targetIndex) {
        this.methodCalled('movePinnedToolbarAction', [actionId, targetIndex]);
    }
    movePinnedToolbarActionBy(actionId, delta) {
        this.methodCalled('movePinnedToolbarActionBy', [actionId, delta]);
    }
    moveExtensionAction(extensionId, targetIndex) {
        this.methodCalled('moveExtensionAction', [extensionId, targetIndex]);
    }
    moveExtensionActionBy(extensionId, delta) {
        this.methodCalled('moveExtensionActionBy', [extensionId, delta]);
    }
    onLhsChipMousePressed(identifier, isMiddleClick) {
        this.methodCalled('onLhsChipMousePressed', { identifier, isMiddleClick });
    }
    onLhsChipClicked(identifier, isMouseInteraction, stateToken = 0) {
        this.methodCalled('onLhsChipClicked', { identifier, isMouseInteraction, stateToken });
    }
    onLhsChipPointerEntered(identifier) {
        this.methodCalled('onLhsChipPointerEntered', identifier);
    }
    onLhsChipPointerExited(identifier) {
        this.methodCalled('onLhsChipPointerExited', identifier);
    }
    onLhsChipExpandAnimationEnded(identifier) {
        this.methodCalled('onLhsChipExpandAnimationEnded', identifier);
    }
    onLhsChipCollapseAnimationEnded(identifier) {
        this.methodCalled('onLhsChipCollapseAnimationEnded', identifier);
    }
    onLhsChipDrag(identifier, source) {
        this.methodCalled('onLhsChipDrag', [identifier, source]);
    }
    onHomeButtonDropUrl(url) {
        this.methodCalled('onHomeButtonDropUrl', url);
    }
    onHomeButtonDropFile(dropPosition) {
        this.methodCalled('onHomeButtonDropFile', dropPosition);
    }
    onHomeButtonDropText(text) {
        this.methodCalled('onHomeButtonDropText', text);
    }
    onToolbarDropFile(dropPosition) {
        this.methodCalled('onToolbarDropFile', dropPosition);
    }
    showAvatarMenu() {
        this.methodCalled('showAvatarMenu');
        return Promise.resolve({ result: {} });
    }
    setAvatarButtonHovered(hovered) {
        this.methodCalled('setAvatarButtonHovered', hovered);
        return Promise.resolve({ result: {} });
    }
    setAvatarButtonFocused(focused) {
        this.methodCalled('setAvatarButtonFocused', focused);
        return Promise.resolve({ result: {} });
    }
    setAvatarButtonIphPromoShowing(showing) {
        this.methodCalled('setAvatarButtonIphPromoShowing', showing);
        return Promise.resolve({ result: {} });
    }
    onAppMenuFocusChanged(focused) {
        this.methodCalled('onAppMenuFocusChanged', focused);
    }
    executeExtensionAction(extensionId) {
        this.methodCalled('executeExtensionAction', [extensionId]);
    }
    showExtensionContextMenu(extensionId, source) {
        this.methodCalled('showExtensionContextMenu', [extensionId, source]);
    }
    onPerformanceInterventionButtonClicked() {
        this.methodCalled('onPerformanceInterventionButtonClicked');
    }
    onMediaButtonClicked() {
        this.methodCalled('onMediaButtonClicked');
    }
    onGlicButtonClicked() {
        this.methodCalled('onGlicButtonClicked');
    }
    onLocationBarFocusWithinChanged(focusInside) {
        this.methodCalled('onLocationBarFocusWithinChanged', focusInside);
    }
    adjustOmniboxTextForCopy(text, selectionStart) {
        this.methodCalled('adjustOmniboxTextForCopy', [text, selectionStart]);
        return Promise.resolve({
            adjustedText: text,
            adjustedUrl: null,
            pageTitle: null,
        });
    }
}
export class TestToolbarBrowserProxy extends TestBrowserProxy {
    toolbarUIHandler;
    browserControlsHandler = null;
    initialState_ = new InitialStateReader({ ...DEFAULT_INITIAL_STATE });
    constructor() {
        super([
            'addFocusRequestListener',
            'addToolbarStateListener',
            'addShowSplitTabsContextMenuListener',
            'getInitialState',
            'recordInHistogram',
            'removeFocusRequestListener',
            'removeToolbarStateListener',
            'removeShowSplitTabsContextMenuListener',
        ]);
        this.toolbarUIHandler = new TestToolbarUiHandler();
    }
    getInitialState() {
        this.methodCalled('getInitialState');
        return this.initialState_;
    }
    setInitialState(state) {
        this.initialState_ = InitialStateReader.fromJson(JSON.stringify({ ...DEFAULT_INITIAL_STATE, ...state }));
    }
    recordInHistogram(histogramName, value, maxValue) {
        this.methodCalled('recordInHistogram', [histogramName, value, maxValue]);
    }
    addToolbarStateListener(_listener) {
        return INVALID_TOOLBAR_STATE_LISTENER_HANDLE;
    }
    removeToolbarStateListener(_handle) { }
    addFocusRequestListener(_listener) {
        return INVALID_FOCUS_REQUEST_HANDLE;
    }
    removeFocusRequestListener(_handle) { }
    addShowSplitTabsContextMenuListener(_listener) {
        return INVALID_SHOW_SPLIT_TABS_CONTEXT_MENU_HANDLE;
    }
    removeShowSplitTabsContextMenuListener(_handle) { }
    flushToolbarUiHandlerForTesting() {
        return Promise.resolve();
    }
    onChipClicked(id, isPointer, stateToken = 0) {
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
    showContextMenu(menuType, boundsInCssPixels, source, showMenuToken = null) {
        this.toolbarUIHandler.showContextMenu(menuType, boundsInCssPixels, source, showMenuToken);
    }
}
