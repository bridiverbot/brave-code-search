// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Defines some types shared across files in client/.
export var PanelOpenState;
(function (PanelOpenState) {
    PanelOpenState[PanelOpenState["OPEN"] = 0] = "OPEN";
    PanelOpenState[PanelOpenState["CLOSED"] = 1] = "CLOSED";
})(PanelOpenState || (PanelOpenState = {}));
