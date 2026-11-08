// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { assert } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { findWordsInRegion } from './find_words_in_region.js';
import { SemanticEvent } from './lens.mojom-webui.js';
import { recordLensOverlaySemanticEvent } from './metrics_utils.js';
import { getCss } from './simplified_text_layer.css.js';
import { getHtml } from './simplified_text_layer.html.js';
import { createHighlightedLines } from './text_highlights.js';
import { getTextSeparator, isWordRenderable, translateWords } from './text_rendering.js';
import { toPercent } from './values_converter.js';
/*
 * Element responsible for highlighting and selection text.
 */
export class SimplifiedTextLayerElement extends CrLitElement {
    static get is() {
        return 'lens-simplified-text-layer';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableHighlights: {
                type: Boolean,
                reflect: true,
            },
            hasActionedText: {
                type: Boolean,
                reflect: true,
            },
            hideHighlightedLines: {
                type: Boolean,
                reflect: true,
            },
            highlightedLines: { type: Array },
        };
    }
    #hasActionedText_accessor_storage = false;
    // Whether the user has actioned on the text pertaining to the newest region
    // selection made either by attempting to copy or translate.
    get hasActionedText() { return this.#hasActionedText_accessor_storage; }
    set hasActionedText(value) { this.#hasActionedText_accessor_storage = value; }
    #hideHighlightedLines_accessor_storage = true;
    // Whether to hide the highlighted lines in the region. Starts off true so
    // highlighted lines can initially fade in.
    get hideHighlightedLines() { return this.#hideHighlightedLines_accessor_storage; }
    set hideHighlightedLines(value) { this.#hideHighlightedLines_accessor_storage = value; }
    #highlightedLines_accessor_storage = [];
    // The currently selected lines.
    get highlightedLines() { return this.#highlightedLines_accessor_storage; }
    set highlightedLines(value) { this.#highlightedLines_accessor_storage = value; }
    #enableHighlights_accessor_storage = true;
    get enableHighlights() { return this.#enableHighlights_accessor_storage; }
    set enableHighlights(value) { this.#enableHighlights_accessor_storage = value; }
    // The lens text response corresponding to the full image response.
    fullTextResponse = null;
    // The Lens text response corresponding to the regions selected.
    regionTextResponse = null;
    eventTracker_ = new EventTracker();
    // The bounds of the parent element. This is updated by the parent to avoid
    // this class needing to call getBoundingClientRect()
    selectionOverlayRect;
    listenerIds = [];
    // Whether the user is in the middle of selecting a new region.
    isSelectingRegion = false;
    // Whether to send an event to the parent selection overlay to show the
    // context menu after detecting text in a region. Set to false if the context
    // menu was already shown.
    shouldShowContextMenuIfDetectsText = true;
    // Timeout for onTextReceived for the full image response text. The selected
    // region context menu should not be shown until either the text is received
    // or the timeout elapses.      ;
    textReceivedTimeout = {
        timeout: loadTimeData.getInteger('textReceivedTimeout'),
        timeoutId: -1,
        timeoutElapsedOrCleared: false,
    };
    // Timeout for using the full image text response in response to a copy text
    // context menu action.
    copyTextTimeout = {
        timeout: loadTimeData.getInteger('copyTextTimeout'),
        timeoutId: -1,
        timeoutElapsedOrCleared: false,
    };
    // A callback provided by the parent for copying the text on the overlay.
    copyTextFunction;
    // Timeout for using the full image text response in response to a translate
    // context menu action.
    translateTimeout = {
        timeout: loadTimeData.getInteger('translateTextTimeout'),
        timeoutId: -1,
        timeoutElapsedOrCleared: false,
    };
    // The currently selected region.
    selectedRegion = null;
    browserProxy = BrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(document, 'detect-text-in-region', (e) => {
            this.detectTextInRegion(e.detail);
        });
        // Set up listener to listen to events from C++.
        this.listenerIds = [
            this.browserProxy.callbackRouter.textReceived.addListener(this.onTextReceived.bind(this)),
            this.browserProxy.callbackRouter.regionTextReceived.addListener(this.onRegionTextReceived.bind(this)),
            this.browserProxy.callbackRouter.clearAllSelections.addListener(this.onClearRegionSelection.bind(this)),
            this.browserProxy.callbackRouter.clearRegionSelection.addListener(this.onClearRegionSelection.bind(this)),
            this.browserProxy.callbackRouter.setPostRegionSelection.addListener(this.setSelection.bind(this)),
            this.browserProxy.callbackRouter.onOverlayReshown.addListener(this.onOverlayReshown.bind(this)),
        ];
        this.setTextReceivedTimeout();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // If there was rendered text, log a text gleam render end event.
        if (this.regionTextResponse &&
            this.regionTextResponse.receivedWords.length > 0) {
            recordLensOverlaySemanticEvent(SemanticEvent.kTextGleamsViewEnd);
        }
        this.listenerIds.forEach(id => {
            const removed = this.browserProxy.callbackRouter.removeListener(id);
            assert(removed);
        });
        this.listenerIds = [];
        this.eventTracker_.removeAll();
    }
    handleRightClick(_event) {
        // Do nothing. Gestures are currently not used in this layer.
        return false;
    }
    handleGestureStart(_event) {
        // Do nothing. Gestures are currently not used in this layer.
        return false;
    }
    handleGestureDrag(_event) {
        // Do nothing. Gestures are currently not used in this layer.
    }
    handleGestureEnd() {
        // Do nothing. Gestures are currently not used in this layer.
    }
    cancelGesture() {
        // Do nothing. Gestures are currently not used in this layer.
    }
    onSelectionStart() {
        this.isSelectingRegion = true;
        this.hasActionedText = false;
        this.shouldShowContextMenuIfDetectsText = true;
        // Hide highlighted lines but do not clear them in order to allow them to
        // fade out.
        this.hideHighlightedLines = true;
        this.fire('hide-selected-region-context-menu');
    }
    onSelectionFinish() {
        this.isSelectingRegion = false;
        // Clear the previous region selection text response as a new selection has
        // been made. Also clear any timeouts that also pertained to the last region
        // response.
        this.regionTextResponse = null;
        this.clearTextTimeouts();
    }
    selectAndSendWords(_selectionStartIndex, _selectionEndIndex) {
        // Do nothing. The simplified text layer does not support selecting words.
    }
    selectAndTranslateWords(startIndex, endIndex) {
        if (startIndex < 0 || endIndex < 0) {
            return;
        }
        if (this.regionTextResponse &&
            this.regionTextResponse.receivedWords.length > 0) {
            this.hasActionedText = true;
            translateWords(this.getRegionText(), this.regionTextResponse.contentLanguage, 0, this.regionTextResponse.receivedWords.length - 1, this.browserProxy);
            return;
        }
        if (this.translateTimeout.timeoutElapsedOrCleared) {
            if (this.fullTextResponse) {
                this.hasActionedText = true;
                // This layer does not support selection of text. So just translate the
                // words.
                translateWords(this.getRegionTextFromFullImage(startIndex, endIndex), this.fullTextResponse.contentLanguage, startIndex, endIndex, this.browserProxy);
                this.highlightedLines =
                    createHighlightedLines(this.fullTextResponse, startIndex, endIndex);
                this.hideHighlightedLines = false;
            }
            return;
        }
        this.translateTimeout.timeoutId = setTimeout(() => {
            this.translateTimeout.timeoutElapsedOrCleared = true;
            this.translateTimeout.timeoutId = -1;
            this.selectAndTranslateWords(startIndex, endIndex);
        }, this.translateTimeout.timeout);
    }
    disableHighlights() {
        this.enableHighlights = false;
    }
    onOverlayReshown() {
        this.onClearRegionSelection();
        this.fullTextResponse = null;
        this.regionTextResponse = null;
        this.enableHighlights = false;
    }
    onClearRegionSelection() {
        this.isSelectingRegion = false;
        this.hasActionedText = false;
        this.hideHighlightedLines = true;
        this.highlightedLines = [];
    }
    setTextReceivedTimeout() {
        this.textReceivedTimeout.timeoutElapsedOrCleared = false;
        this.textReceivedTimeout.timeoutId = setTimeout(() => {
            this.textReceivedTimeout.timeoutElapsedOrCleared = true;
            this.textReceivedTimeout.timeoutId = -1;
            this.fire('finished-receiving-text');
        }, this.textReceivedTimeout.timeout);
    }
    detectTextInRegion(box) {
        const hasRegionText = Boolean(this.regionTextResponse &&
            this.regionTextResponse.receivedWords.length > 0);
        // If we are still waiting for text and don't yet have region text, hide the
        // context menu.
        if (!hasRegionText && !this.textReceivedTimeout.timeoutElapsedOrCleared) {
            this.fire('hide-selected-region-context-menu');
            return;
        }
        const showOrUpdateEventName = this.shouldShowContextMenuIfDetectsText ?
            'show-selected-region-context-menu' :
            'update-selected-region-context-menu';
        // Only ever show the region context menu once per region selection. All
        // other times it should only update the context menu.
        this.shouldShowContextMenuIfDetectsText = false;
        // Prefer using words from the interaction response's region text if
        // available.
        if (this.regionTextResponse &&
            this.regionTextResponse.receivedWords.length > 0) {
            this.fire(showOrUpdateEventName, {
                box,
                selectionStartIndex: 0,
                selectionEndIndex: this.regionTextResponse.receivedWords.length - 1,
                text: this.getRegionText(),
            });
            return;
        }
        // Otherwise, fall back to checking for words within the region from the
        // full page text response.
        if (this.fullTextResponse &&
            this.fullTextResponse.receivedWords.length > 0) {
            const selection = findWordsInRegion(this.fullTextResponse.receivedWords, box, this.selectionOverlayRect);
            if (selection.startIndex !== -1 && selection.endIndex !== -1) {
                this.fire(showOrUpdateEventName, {
                    box,
                    selectionStartIndex: selection.startIndex,
                    selectionEndIndex: selection.endIndex,
                    text: this.getRegionTextFromFullImage(selection.startIndex, selection.endIndex),
                });
                return;
            }
        }
        // Do not show the detected text context menu items if there was no text
        // found in the region.
        this.fire(showOrUpdateEventName, {
            box,
            selectionStartIndex: -1,
            selectionEndIndex: -1,
        });
    }
    onRegionTextReceived(text, isInjectedImage) {
        // If the user is currently selecting a new region, ignore any text received
        // for the old region.
        if (this.isSelectingRegion) {
            return;
        }
        // If there was rendered text, log a text gleam render end event.
        if (this.regionTextResponse &&
            this.regionTextResponse.receivedWords.length > 0) {
            recordLensOverlaySemanticEvent(SemanticEvent.kTextGleamsViewEnd);
        }
        // Reset all old text.
        this.regionTextResponse = {
            contentLanguage: '',
            receivedWords: [],
            paragraphNumbers: [],
            lineNumbers: [],
            lines: [],
            paragraphs: [],
        };
        let lineNumber = 0;
        let paragraphNumber = 0;
        // Flatten Text structure to a list of arrays for easier rendering and
        // referencing.
        for (const paragraph of text.textLayout?.paragraphs ?? []) {
            for (const line of paragraph.lines) {
                for (const word of line.words) {
                    // Filter out words with invalid bounding boxes.
                    if (isWordRenderable(word)) {
                        this.regionTextResponse.receivedWords.push(word);
                        this.regionTextResponse.lineNumbers.push(lineNumber);
                        this.regionTextResponse.paragraphNumbers.push(paragraphNumber);
                        const wordBoundingBox = word.geometry?.boundingBox;
                        assert(wordBoundingBox);
                    }
                }
                this.regionTextResponse.lines.push(line);
                lineNumber++;
            }
            this.regionTextResponse.paragraphs.push(paragraph);
            paragraphNumber++;
        }
        // If there is text, log a text gleam render start event.
        if (this.regionTextResponse.receivedWords.length > 0) {
            recordLensOverlaySemanticEvent(SemanticEvent.kTextGleamsViewStart);
        }
        assert(this.regionTextResponse.paragraphNumbers.length ===
            this.regionTextResponse.receivedWords.length);
        // If the text is from an injected image, its possible that the dimensions
        // of the text are not correct. So use the full text response to create the
        // highlighted lines. This is because of how the geometry of the injected
        // image is calculated and sent to Lens. See crbug.com/422555788.
        // If the full text response is not available (such as in region-only mode),
        // fall back to rendering the highlighted lines from the region text
        // response.
        if (isInjectedImage && this.selectedRegion && this.fullTextResponse) {
            this.tryRenderInjectedImageHighlights();
        }
        else if (!isInjectedImage || !this.fullTextResponse) {
            this.highlightedLines = createHighlightedLines(this.regionTextResponse, 0, this.regionTextResponse.receivedWords.length - 1);
        }
        this.hideHighlightedLines = false;
        if (this.regionTextResponse.receivedWords.length > 0) {
            this.textReceivedTimeout.timeoutElapsedOrCleared = true;
            clearTimeout(this.textReceivedTimeout.timeoutId);
            this.textReceivedTimeout.timeoutId = -1;
        }
        // Used to notify the post selection renderer so that, if a region has
        // already been selected, text in the region can be detected.
        this.fire('finished-receiving-text');
        if (this.copyTextTimeout.timeoutId !== -1) {
            this.copyTextTimeout.timeoutElapsedOrCleared = true;
            clearTimeout(this.copyTextTimeout.timeoutId);
            this.copyTextTimeout.timeoutId = -1;
            this.onCopyDetectedText(0, this.regionTextResponse.receivedWords.length - 1, this.copyTextFunction);
        }
        if (this.translateTimeout.timeoutId !== -1) {
            this.translateTimeout.timeoutElapsedOrCleared = true;
            clearTimeout(this.translateTimeout.timeoutId);
            this.translateTimeout.timeoutId = -1;
            this.selectAndTranslateWords(0, this.regionTextResponse.receivedWords.length - 1);
        }
    }
    onTextReceived(text) {
        // Reset all old text.
        this.fullTextResponse = {
            contentLanguage: '',
            receivedWords: [],
            paragraphNumbers: [],
            lineNumbers: [],
            lines: [],
            paragraphs: [],
        };
        let paragraphNumber = 0;
        // Flatten Text structure to a list of arrays for easier rendering and
        // referencing.
        for (const paragraph of text.textLayout?.paragraphs ?? []) {
            for (const line of paragraph.lines) {
                for (const word of line.words) {
                    // Filter out words with invalid bounding boxes.
                    if (isWordRenderable(word)) {
                        this.fullTextResponse.receivedWords.push(word);
                        this.fullTextResponse.paragraphNumbers.push(paragraphNumber);
                    }
                }
                this.fullTextResponse.lines.push(line);
            }
            this.fullTextResponse.paragraphs.push(paragraph);
            paragraphNumber++;
        }
        assert(this.fullTextResponse.paragraphNumbers.length ===
            this.fullTextResponse.receivedWords.length);
        this.textReceivedTimeout.timeoutElapsedOrCleared = true;
        clearTimeout(this.textReceivedTimeout.timeoutId);
        this.textReceivedTimeout.timeoutId = -1;
        // Used to notify the post selection renderer so that, if a region has
        // already been selected, text in the region can be detected.
        this.fire('finished-receiving-text');
        // It's possible that the full text response is received after the region
        // text response. In this case, the highlighted lines will not be updated
        // until the user selects a new region. This only ever happens for injected
        // images as interaction requests are sent before the full text response
        // is received.
        if (this.regionTextResponse && this.selectedRegion &&
            !this.isSelectingRegion && this.highlightedLines.length === 0) {
            this.tryRenderInjectedImageHighlights();
        }
    }
    onCopyDetectedText(startIndex, endIndex, callback) {
        if (startIndex < 0 || endIndex < 0) {
            return;
        }
        this.hasActionedText = true;
        if (this.regionTextResponse &&
            this.regionTextResponse.receivedWords.length > 0) {
            callback(/*textStartIndex=*/ 0, this.regionTextResponse.receivedWords.length - 1, this.getRegionText());
            return;
        }
        // If no region text, set a timeout to wait a little longer in case it has
        // not returned yet. After that timeout is over, the text will be copied
        // from the full image.
        if (this.copyTextTimeout.timeoutElapsedOrCleared) {
            // If the full image text response was never returned, then do nothing.
            // This is possible if the full image request fails and the user uses
            // CMD+C to copy.
            if (this.fullTextResponse) {
                callback(startIndex, endIndex, this.getRegionTextFromFullImage(startIndex, endIndex));
                this.highlightedLines =
                    createHighlightedLines(this.fullTextResponse, startIndex, endIndex);
                this.hideHighlightedLines = false;
            }
            return;
        }
        // Since the copy command can be spammed, make sure the timeout is only set
        // once.
        if (this.copyTextTimeout.timeoutId === -1) {
            this.copyTextFunction = callback;
            this.copyTextTimeout.timeoutId = setTimeout(() => {
                this.copyTextTimeout.timeoutElapsedOrCleared = true;
                this.copyTextTimeout.timeoutId = -1;
                this.onCopyDetectedText(startIndex, endIndex, callback);
            }, this.copyTextTimeout.timeout);
        }
    }
    getRegionTextFromFullImage(textStartIndex, textEndIndex) {
        // Return early if there isn't a valid range.
        if (textStartIndex === -1 || textEndIndex === -1 ||
            !this.fullTextResponse) {
            return '';
        }
        const startIndex = Math.min(textStartIndex, textEndIndex);
        const endIndex = Math.max(textStartIndex, textEndIndex);
        const selectedWords = this.fullTextResponse.receivedWords.slice(startIndex, endIndex + 1);
        const selectedParagraphNumbers = this.fullTextResponse.paragraphNumbers.slice(startIndex, endIndex + 1);
        return selectedWords
            .map((word, index) => {
            let separator = '';
            if (index < selectedWords.length - 1) {
                if (selectedParagraphNumbers[index] !==
                    selectedParagraphNumbers[index + 1]) {
                    separator = '\r\n';
                }
                else {
                    separator = getTextSeparator(word);
                }
            }
            return word.plainText + separator;
        })
            .join('');
    }
    getRegionText() {
        // Return early if there isn't any text in the region.
        if (!this.regionTextResponse ||
            this.regionTextResponse.receivedWords.length <= 0) {
            return '';
        }
        const startIndex = 0;
        const endIndex = this.regionTextResponse.receivedWords.length - 1;
        const selectedWords = this.regionTextResponse.receivedWords.slice(startIndex, endIndex + 1);
        const selectedParagraphNumbers = this.regionTextResponse.paragraphNumbers.slice(startIndex, endIndex + 1);
        return selectedWords
            .map((word, index) => {
            let separator = '';
            if (index < selectedWords.length - 1) {
                if (selectedParagraphNumbers[index] !==
                    selectedParagraphNumbers[index + 1]) {
                    separator = '\r\n';
                }
                else {
                    separator = getTextSeparator(word);
                }
            }
            return word.plainText + separator;
        })
            .join('');
    }
    setSelection(box) {
        this.selectedRegion = box;
    }
    /** @return The CSS styles string for the given highlighted line. */
    getHighlightedLineStyle(line) {
        // Put into an array instead of a long string to keep this code readable.
        const styles = [
            `width: ${toPercent(line.width)}`,
            `height: ${toPercent(line.height)}`,
            `top: ${toPercent(line.top)}`,
            `left: ${toPercent(line.left)}`,
            `transform: rotate(${line.rotation}rad)`,
        ];
        return styles.join(';');
    }
    clearTextTimeouts() {
        clearTimeout(this.copyTextTimeout.timeoutId);
        this.copyTextTimeout.timeoutElapsedOrCleared = false;
        this.copyTextTimeout.timeoutId = -1;
        clearTimeout(this.translateTimeout.timeoutId);
        this.translateTimeout.timeoutElapsedOrCleared = false;
        this.translateTimeout.timeoutId = -1;
    }
    tryRenderInjectedImageHighlights() {
        assert(this.fullTextResponse);
        assert(this.selectedRegion);
        const selection = findWordsInRegion(this.fullTextResponse.receivedWords, this.selectedRegion, this.selectionOverlayRect);
        // If no words were found in the region, return early.
        if (selection.startIndex === -1 || selection.endIndex === -1) {
            this.highlightedLines = [];
            this.hideHighlightedLines = true;
            return;
        }
        this.highlightedLines = createHighlightedLines(this.fullTextResponse, selection.startIndex, selection.endIndex);
        this.hideHighlightedLines = false;
    }
    getElementForTesting() {
        return this;
    }
    getHasActionedTextForTesting() {
        return this.hasActionedText;
    }
    setSelectionOverlayRectForTesting(rect) {
        this.selectionOverlayRect = rect;
    }
}
customElements.define(SimplifiedTextLayerElement.is, SimplifiedTextLayerElement);
