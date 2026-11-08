// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { hexColorToSkColor } from '//resources/js/color_utils.js';
import { CenterRotatedBox_CoordinateType } from 'chrome-untrusted://lens-overlay/geometry.mojom-webui.js';
import { Alignment, WritingDirection } from 'chrome-untrusted://lens-overlay/text.mojom-webui.js';
import { flushTasks } from 'chrome-untrusted://webui-test/polymer_test_util.js';
import { normalizeBoxInElement } from './selection_utils.js';
const GENERIC_NORMALIZED_TEXT = createText([
    createParagraph([
        createLine([
            createWord('hello', { x: 0.1, y: 0.1, width: 0.1, height: 0.1 }),
            createWord('there', { x: 0.11, y: 0.11, width: 0.1, height: 0.1 }),
        ]),
    ]),
    createParagraph([
        createLine([createWord('test', { x: 0.3, y: 0.3, width: 0.1, height: 0.1 })]),
    ]),
]);
function createGenericText(element) {
    return createText([
        createParagraph([
            createLine([
                createWord('hello', normalizeBoxInElement({ x: 20, y: 20, width: 30, height: 10 }, element)),
                createWord('there', normalizeBoxInElement({ x: 50, y: 20, width: 50, height: 10 }, element)),
            ]),
        ]),
        createParagraph([
            createLine([
                createWord('test', normalizeBoxInElement({ x: 80, y: 20, width: 30, height: 10 }, element)),
            ]),
        ]),
    ]);
}
/**
 * Adds empty full screenshot text to the `callbackRouterRemote` provided.
 */
export async function addEmptyTextToPage(callbackRouterRemote) {
    await addTextToPage(callbackRouterRemote, createText([]));
}
/**
 * Adds empty region text to the `callbackRouterRemote` provided.
 */
export async function addEmptyRegionTextToPage(callbackRouterRemote, isInjectedImage = false) {
    await addRegionTextToPage(callbackRouterRemote, createText([]), isInjectedImage);
}
/**
 * Adds generic text to the `callbackRouterRemote` provided.
 */
export async function addGenericWordsToPage(callbackRouterRemote, element) {
    await addTextToPage(callbackRouterRemote, createGenericText(element));
}
/**
 * Adds generic region text to the `callbackRouterRemote` provided.
 */
export async function addGenericRegionWordsToPage(callbackRouterRemote, element, isInjectedImage = false) {
    await addRegionTextToPage(callbackRouterRemote, createGenericText(element), isInjectedImage);
}
/**
 * Adds generic text to the `callbackRouterRemote` provided. Text is already
 * normalized without the need for a rendered element.
 */
export async function addGenericWordsToPageNormalized(callbackRouterRemote) {
    await addTextToPage(callbackRouterRemote, GENERIC_NORMALIZED_TEXT);
}
/**
 * Adds generic region text to the `callbackRouterRemote` provided. Text is
 * already normalized without the need for a rendered element.
 */
export async function addGenericRegionWordsToPageNormalized(callbackRouterRemote, isInjectedImage = false) {
    await addRegionTextToPage(callbackRouterRemote, GENERIC_NORMALIZED_TEXT, isInjectedImage);
}
/**
 * Adds `text` provided in function to the overlay via the
 * `callbackRouterRemote`.
 */
export async function addTextToPage(callbackRouterRemote, text) {
    callbackRouterRemote.textReceived(text);
    await flushTasks();
}
/**
 * Adds `text` provided in function to the overlay via the
 * `callbackRouterRemote`. It is sent as region text and also with a boolean to
 * indicate if the text was received from an injected image.
 */
export async function addRegionTextToPage(callbackRouterRemote, text, isInjectedImage = false) {
    callbackRouterRemote.regionTextReceived(text, isInjectedImage);
    await flushTasks();
}
export function getHighlightedNodesForTesting(textLayerElement) {
    return textLayerElement.shadowRoot.querySelectorAll('.highlighted-line');
}
export function getWordNodesForTesting(textLayerElement) {
    return textLayerElement.shadowRoot.querySelectorAll('.word');
}
export function getTranslatedWordNodesForTesting(textLayerElement) {
    return textLayerElement.shadowRoot.querySelectorAll('.translated-word');
}
export function createText(paragraphs) {
    return {
        textLayout: {
            paragraphs: paragraphs,
        },
        contentLanguage: null,
    };
}
export function createParagraph(lines, translatedParagraph = null, writingDirection = WritingDirection.kLeftToRight) {
    return {
        lines,
        translation: translatedParagraph,
        writingDirection,
        geometry: null,
        contentLanguage: null,
    };
}
export function createTranslatedParagraph(lines, contentLanguage = 'en', alignment = Alignment.kDefaultLeftAlgined, writingDirection = WritingDirection.kLeftToRight) {
    return {
        lines,
        resizedBitmapSize: {
            width: 1000,
            height: 1000,
        },
        alignment,
        contentLanguage,
        writingDirection,
    };
}
export function createTranslatedLine(words, translation, textHexColor, backgroundHexColor, lineBoundingBox) {
    return {
        words,
        translation,
        textColor: hexColorToSkColor(textHexColor),
        backgroundPrimaryColor: hexColorToSkColor(backgroundHexColor),
        backgroundImageData: null,
        geometry: {
            boundingBox: {
                box: lineBoundingBox,
                rotation: 0,
                coordinateType: CenterRotatedBox_CoordinateType.kNormalized,
            },
            segmentationPolygon: [],
        },
    };
}
export function createLine(words) {
    return { words, geometry: null };
}
export function createWord(plainText, wordBoundingBox, rotation = 0, writingDirection = WritingDirection.kLeftToRight, textSeparator = ' ') {
    const geometry = wordBoundingBox ? {
        boundingBox: {
            box: wordBoundingBox,
            rotation,
            coordinateType: CenterRotatedBox_CoordinateType.kNormalized,
        },
        segmentationPolygon: [],
    } :
        null;
    return {
        plainText,
        textSeparator,
        writingDirection,
        geometry,
        formulaMetadata: null,
    };
}
export function dispatchTranslateStateEvent(target, translateModeEnabled, targetLanguage) {
    target.dispatchEvent(new CustomEvent('translate-mode-state-changed', {
        detail: { translateModeEnabled, targetLanguage },
        bubbles: true,
        composed: true,
    }));
}
