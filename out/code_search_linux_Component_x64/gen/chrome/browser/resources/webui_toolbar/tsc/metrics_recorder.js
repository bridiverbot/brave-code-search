// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input type to activate the ReloadButton.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * Defined in //tools/metrics/histograms/metadata/ui/enums.xml.
 */
// LINT.IfChange(ReloadButtonInputType)
export var ReloadButtonInputType;
(function (ReloadButtonInputType) {
    ReloadButtonInputType[ReloadButtonInputType["MOUSE_RELEASE"] = 0] = "MOUSE_RELEASE";
    ReloadButtonInputType[ReloadButtonInputType["KEY_PRESS"] = 1] = "KEY_PRESS";
    ReloadButtonInputType[ReloadButtonInputType["COUNT"] = 2] = "COUNT";
})(ReloadButtonInputType || (ReloadButtonInputType = {}));
// LINT.ThenChange(
//   //tools/metrics/histograms/metadata/ui/enums.xml:ReloadButtonInputType,
//   //chrome/browser/ui/waap/waap_ui_metrics_recorder.h:ReloadButtonInputType
// )
/**
 * The visible mode of the ReloadButton.
 */
export var ReloadButtonVisibleMode;
(function (ReloadButtonVisibleMode) {
    // The "refresh" icon.
    ReloadButtonVisibleMode[ReloadButtonVisibleMode["RELOAD"] = 0] = "RELOAD";
    // The "clear" icon.
    ReloadButtonVisibleMode[ReloadButtonVisibleMode["STOP"] = 1] = "STOP";
})(ReloadButtonVisibleMode || (ReloadButtonVisibleMode = {}));
/**
 * Class responsible for recording metrics related to the ReloadButton WebUI.
 */
export class MetricsRecorder {
    /**
     * Returns the visible mode based on the given loading state.
     * @param isLoading Whether the page is currently loading.
     * @return The target visible mode.
     */
    static getVisibleMode(isLoading) {
        return isLoading ? ReloadButtonVisibleMode.STOP :
            ReloadButtonVisibleMode.RELOAD;
    }
}
