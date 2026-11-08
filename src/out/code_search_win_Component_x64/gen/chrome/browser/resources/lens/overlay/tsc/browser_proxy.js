// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CenterRotatedBox_CoordinateType } from './geometry.mojom-webui.js';
import { LensPageCallbackRouter, LensPageHandlerFactory, LensPageHandlerRemote, UserAction } from './lens.mojom-webui.js';
import { INVOCATION_SOURCE } from './lens_overlay_app.js';
import { recordLensOverlayInteraction } from './metrics_utils.js';
import { RegionSource, SelectionOverlayBaseHandler } from './selection_overlay_base_handler.js';
let instance = null;
class SelectionOverlayBaseHandlerImpl extends SelectionOverlayBaseHandler {
    addNotifyOverlayClosingListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.notifyOverlayClosing.addListener(callback);
    }
    closePreselectionBubble() {
        BrowserProxyImpl.getInstance().handler.closePreselectionBubble();
    }
    notifyOverlayInitialized() {
        BrowserProxyImpl.getInstance().handler.notifyOverlayInitialized();
    }
    addBackgroundBlur() {
        BrowserProxyImpl.getInstance().handler.addBackgroundBlur();
    }
    setLiveBlur(enabled) {
        BrowserProxyImpl.getInstance().handler.setLiveBlur(enabled);
    }
    removeListener(id) {
        if (id === -1) {
            return true;
        }
        return BrowserProxyImpl.getInstance().callbackRouter.removeListener(id);
    }
    addOnOverlayReshownListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.onOverlayReshown.addListener(callback);
    }
    addScreenshotDataReceivedListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.screenshotDataReceived.addListener(callback);
    }
    addClearRegionSelectionListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.clearRegionSelection.addListener(callback);
    }
    addClearAllSelectionsListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.clearAllSelections.addListener(callback);
    }
    addNotifyResultsPanelOpenedListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.notifyResultsPanelOpened.addListener(callback);
    }
    addSetPostRegionSelectionListener(callback) {
        return BrowserProxyImpl.getInstance()
            .callbackRouter.setPostRegionSelection.addListener(this.postRegionSelectionCallback.bind(this, callback));
    }
    addMultiRegionSelectionListener(_callback) {
        return -1;
    }
    deleteRegion(_id, _source) {
        // Lens doesn't support deleting a specific region.
    }
    postRegionSelectionCallback(callback, region) {
        callback(region.box);
    }
    adjustRegionSelected(rect, source, _id) {
        let interaction = UserAction.kRegionSelection;
        let isClick = false;
        switch (source) {
            case RegionSource.KEYBOARD:
                interaction = UserAction.kFullScreenshotRegionSelection;
                break;
            case RegionSource.CLICK:
                interaction = UserAction.kTapRegionSelection;
                isClick = true;
                break;
            case RegionSource.SELECTION:
                interaction = UserAction.kRegionSelection;
                break;
            case RegionSource.SELECTION_CHANGE:
                interaction = UserAction.kRegionSelectionChange;
                break;
            default:
                break;
        }
        recordLensOverlayInteraction(INVOCATION_SOURCE, interaction);
        BrowserProxyImpl.getInstance().handler.issueLensRegionRequest({
            box: rect,
            rotation: 0,
            coordinateType: CenterRotatedBox_CoordinateType.kNormalized,
        }, isClick);
    }
    adjustPolylineSelected(_points, _source, _id) {
        // Lens doesn't support polylines.
    }
}
export class BrowserProxyImpl {
    callbackRouter = new LensPageCallbackRouter();
    handler = new LensPageHandlerRemote();
    constructor() {
        const factory = LensPageHandlerFactory.getRemote();
        factory.createPageHandler(this.handler.$.bindNewPipeAndPassReceiver(), this.callbackRouter.$.bindNewPipeAndPassRemote());
        SelectionOverlayBaseHandler.setInstance(new SelectionOverlayBaseHandlerImpl());
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
        SelectionOverlayBaseHandler.setInstance(new SelectionOverlayBaseHandlerImpl());
    }
}
