// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BrowserProxyImpl } from './browser_proxy.js';
import { UserAction } from './lens.mojom-webui.js';
// LINT.IfChange(ContextMenuOption)
// The possible context menu options that can appear in the Lens overlay.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
export var ContextMenuOption;
(function (ContextMenuOption) {
    ContextMenuOption[ContextMenuOption["COPY_TEXT"] = 0] = "COPY_TEXT";
    ContextMenuOption[ContextMenuOption["TRANSLATE_TEXT"] = 1] = "TRANSLATE_TEXT";
    ContextMenuOption[ContextMenuOption["SELECT_TEXT_IN_REGION"] = 2] = "SELECT_TEXT_IN_REGION";
    ContextMenuOption[ContextMenuOption["TRANSLATE_TEXT_IN_REGION"] = 3] = "TRANSLATE_TEXT_IN_REGION";
    ContextMenuOption[ContextMenuOption["COPY_AS_IMAGE"] = 4] = "COPY_AS_IMAGE";
    ContextMenuOption[ContextMenuOption["SAVE_AS_IMAGE"] = 5] = "SAVE_AS_IMAGE";
    ContextMenuOption[ContextMenuOption["COPY_TEXT_IN_REGION"] = 6] = "COPY_TEXT_IN_REGION";
    // Must be last.
    ContextMenuOption[ContextMenuOption["COUNT"] = 7] = "COUNT";
})(ContextMenuOption || (ContextMenuOption = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/lens/enums.xml:LensOverlayContextMenuOption)
// The possible events for the selection overlay close button.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// LINT.IfChange(LensOverlaySelectionCloseButtonEvent)
export var LensOverlaySelectionCloseButtonEvent;
(function (LensOverlaySelectionCloseButtonEvent) {
    LensOverlaySelectionCloseButtonEvent[LensOverlaySelectionCloseButtonEvent["SHOWN"] = 0] = "SHOWN";
    LensOverlaySelectionCloseButtonEvent[LensOverlaySelectionCloseButtonEvent["USED"] = 1] = "USED";
    // Must be last.
    LensOverlaySelectionCloseButtonEvent[LensOverlaySelectionCloseButtonEvent["COUNT"] = 2] = "COUNT";
})(LensOverlaySelectionCloseButtonEvent || (LensOverlaySelectionCloseButtonEvent = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/lens/enums.xml:LensOverlaySelectionCloseButtonEvent)
export function recordContextMenuOptionShown(invocationSource, contextMenuOption) {
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.ContextMenuOption.Shown`, contextMenuOption, ContextMenuOption.COUNT);
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.ByInvocationSource.${invocationSource}.ContextMenuOption.Shown`, contextMenuOption, ContextMenuOption.COUNT);
}
export function recordLensOverlayInteraction(invocationSource, interaction) {
    chrome.metricsPrivate.recordEnumerationValue('Lens.Overlay.Overlay.UserAction', interaction, UserAction.MAX_VALUE + 1);
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.Overlay.ByInvocationSource.${invocationSource}.UserAction`, interaction, UserAction.MAX_VALUE + 1);
    BrowserProxyImpl.getInstance()
        .handler.recordUkmAndTaskCompletionForLensOverlayInteraction(interaction);
}
export function recordLensOverlaySemanticEvent(semanticEvent) {
    BrowserProxyImpl.getInstance().handler.recordLensOverlaySemanticEvent(semanticEvent);
}
/** Records |durationMs| in the |metricName| histogram. */
export function recordTimeToWebUIReady(durationMs) {
    chrome.metricsPrivate.recordValue({
        metricName: 'Lens.Overlay.TimeToWebUIReady',
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
        min: 1,
        max: 50000, // 50 seconds.
        buckets: 100,
    }, Math.floor(durationMs));
}
/**
 * Records |averageFps| in the Lens.Overlay.Performance.AverageFPS histogram.
 */
export function recordAverageFps(averageFps) {
    chrome.metricsPrivate.recordValue({
        metricName: 'Lens.Overlay.Performance.AverageFPS',
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
        min: 1,
        max: 200,
        buckets: 50,
    }, Math.floor(averageFps));
}
export function recordLensOverlaySelectionCloseButtonShown(invocationSource) {
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.ByInvocationSource.${invocationSource}.SelectionState.CloseButtonEvent`, LensOverlaySelectionCloseButtonEvent.SHOWN, LensOverlaySelectionCloseButtonEvent.COUNT);
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.SelectionState.CloseButtonEvent`, LensOverlaySelectionCloseButtonEvent.SHOWN, LensOverlaySelectionCloseButtonEvent.COUNT);
}
export function recordLensOverlaySelectionCloseButtonUsed(invocationSource) {
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.ByInvocationSource.${invocationSource}.SelectionState.CloseButtonEvent`, LensOverlaySelectionCloseButtonEvent.USED, LensOverlaySelectionCloseButtonEvent.COUNT);
    chrome.metricsPrivate.recordEnumerationValue(`Lens.Overlay.SelectionState.CloseButtonEvent`, LensOverlaySelectionCloseButtonEvent.USED, LensOverlaySelectionCloseButtonEvent.COUNT);
}
