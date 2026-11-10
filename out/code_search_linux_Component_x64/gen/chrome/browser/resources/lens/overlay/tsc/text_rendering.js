// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CenterRotatedBox_CoordinateType } from './geometry.mojom-webui.js';
import { UserAction } from './lens.mojom-webui.js';
import { INVOCATION_SOURCE } from './lens_overlay_app.js';
import { recordLensOverlayInteraction } from './metrics_utils.js';
// Returns true if the word has a valid bounding box and is renderable by the
// TextLayer.
export function isWordRenderable(word) {
    // For a word to be renderable, it must have a bounding box with normalized
    // coordinates.
    // TODO(crbug.com/330183480): Add rendering for IMAGE CoordinateType
    const wordBoundingBox = word.geometry?.boundingBox;
    if (!wordBoundingBox) {
        return false;
    }
    return wordBoundingBox.coordinateType ===
        CenterRotatedBox_CoordinateType.kNormalized;
}
// Return the text separator if there is one, else returns a space.
export function getTextSeparator(word) {
    return (word.textSeparator !== null && word.textSeparator !== undefined) ?
        word.textSeparator :
        ' ';
}
// Sends the words to the browser to be translated.
export function translateWords(highlightedText, contentLanguage, startIndex, endIndex, browserProxy) {
    browserProxy.handler.issueTranslateSelectionRequest(highlightedText.replaceAll('\r\n', ' '), contentLanguage, startIndex, endIndex);
    recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kTranslateText);
}
