// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var RegionSource;
(function (RegionSource) {
    RegionSource[RegionSource["CLICK"] = 0] = "CLICK";
    RegionSource[RegionSource["SELECTION"] = 1] = "SELECTION";
    RegionSource[RegionSource["KEYBOARD"] = 2] = "KEYBOARD";
    RegionSource[RegionSource["SELECTION_CHANGE"] = 3] = "SELECTION_CHANGE";
})(RegionSource || (RegionSource = {}));
/*
 * Base class definition of the core functionality that the common selection
 * controller requires from the embedding code.
 */
export class SelectionOverlayBaseHandler {
    static instance = null;
    activeRegionId = '';
    static getInstance() {
        return SelectionOverlayBaseHandler.instance;
    }
    static setInstance(obj) {
        SelectionOverlayBaseHandler.instance = obj;
    }
}
