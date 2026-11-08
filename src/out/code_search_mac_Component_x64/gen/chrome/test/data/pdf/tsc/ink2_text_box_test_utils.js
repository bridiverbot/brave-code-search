// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { hexToColor, Ink2Manager, pageToScreenCoordinates, PdfViewerPrivateProxyImpl, TEXT_COLORS, TextAlignment, TextAnnotationSource, TextStyle, TextTypeface } from 'chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/pdf_viewer_wrapper.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { keyDownOn, keyUpOn } from 'chrome://webui-test/keyboard_mock_interactions.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestPdfViewerPrivateProxy } from './test_pdf_viewer_private_proxy.js';
import { assertDeepEquals, MockDocumentDimensions, setUpInkTestContext } from './test_util.js';
export function getCtrlModifier() {
    return isMac ? ['meta'] : ['ctrl'];
}
export function getStrikethroughModifiers() {
    return isMac ? ['meta', 'shift'] : ['alt', 'shift'];
}
export function getStrikethroughKey() {
    return isMac ? 'x' : '5';
}
export async function setupTextBoxTest(windowWidth = 500, windowHeight = 500, pageWidth = 400, pageHeight = 500, zeroScrollbars = false) {
    document.body.innerHTML = '';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    Ink2Manager.setInstance(null);
    const { viewport, mockPlugin, mockWindow } = setUpInkTestContext(zeroScrollbars ? 0 : 5);
    mockWindow.offsetWidth = windowWidth;
    mockWindow.offsetHeight = windowHeight;
    if (mockWindow.resizeCallback) {
        mockWindow.resizeCallback();
    }
    const documentDimensions = new MockDocumentDimensions(0, 0);
    documentDimensions.addPage(pageWidth, pageHeight);
    viewport.setDocumentDimensions(documentDimensions);
    const privateProxy = new TestPdfViewerPrivateProxy();
    PdfViewerPrivateProxyImpl.setInstance(privateProxy);
    const manager = Ink2Manager.getInstance();
    await manager.initializeTextAnnotations();
    const textbox = document.createElement('ink-text-box');
    textbox.viewport = viewport;
    viewport.setViewportChangedCallback(() => textbox.viewportChanged());
    document.body.appendChild(textbox);
    return { viewport, mockPlugin, privateProxy, manager, textbox, mockWindow };
}
export function getTestAnnotation(textBoxRect, pdfZoom = 1.0) {
    return {
        id: 0,
        mojoTextInfo: new ArrayBuffer(0),
        pageIndex: 0,
        pdfZoom,
        text: 'Hello World',
        textAttributes: {
            alignment: TextAlignment.LEFT,
            color: hexToColor(TEXT_COLORS[0].color),
            size: 12,
            styles: {
                [TextStyle.BOLD]: false,
                [TextStyle.ITALIC]: false,
                [TextStyle.STRIKETHROUGH]: false,
                [TextStyle.UNDERLINE]: false,
            },
            typeface: TextTypeface.SANS_SERIF,
        },
        textBoxRect,
        textOrientation: 0,
        viewportOrientation: 0,
    };
}
export function initializeBox(width, height, x, y, orientation) {
    const textbox = document.body.querySelector('ink-text-box');
    chrome.test.assertTrue(!!textbox, 'ink-text-box element not found');
    const annotation = getTestAnnotation({ height, locationX: x, locationY: y, width });
    annotation.text = '';
    if (orientation) {
        annotation.textOrientation = orientation;
    }
    textbox.annotation = annotation;
    // Large width and height so size does not clamp in tests that are not
    // intended to explicitly validate it.
    textbox.pageDimensions = { x: 10, y: 3, width: 1000, height: 1000 };
}
export function assertPositionAndSize(el, expectedWidth, expectedHeight, expectedLeft, expectedTop) {
    const styles = getComputedStyle(el);
    function parsePixelValue(str) {
        // Extract the numerical part of the style string.
        const match = str.match(/^([+-]?\d+(\.\d+)?)px$/);
        chrome.test.assertTrue(match !== null, `Invalid pixel string: ${str}`);
        chrome.test.assertEq(3, match.length);
        return parseFloat(match[1]);
    }
    function assertStylePixelValue(expectedString, actualString) {
        if (expectedString === 'auto' || actualString === 'auto') {
            chrome.test.assertEq(expectedString, actualString);
            return;
        }
        const expectedVal = parsePixelValue(expectedString);
        const actualVal = parsePixelValue(actualString);
        chrome.test.assertTrue(Math.abs(expectedVal - actualVal) < 1.0, `Expected ${expectedString}, but got ${actualString}`);
    }
    assertStylePixelValue(expectedWidth, styles.getPropertyValue('width'));
    assertStylePixelValue(expectedHeight, styles.getPropertyValue('height'));
    assertStylePixelValue(expectedLeft, styles.getPropertyValue('left'));
    assertStylePixelValue(expectedTop, styles.getPropertyValue('top'));
}
export async function dragHandle(handle, deltaX, deltaY) {
    // Simulate events in the same order they are fired by the browser.
    // Need to provide a valid |pointerId| for setPointerCapture() to not
    // throw an error. Using arbitrary start position for the pointer, since
    // only the change matters.
    handle.dispatchEvent(new PointerEvent('pointerdown', { composed: true, pointerId: 1, clientX: 50, clientY: 40 }));
    // Send a few move events to better simulate reality. Allow the code
    // updating the minimum height time to run in between.
    for (let i = 1; i <= 4; i++) {
        handle.dispatchEvent(new PointerEvent('pointermove', {
            pointerId: 1,
            clientX: 50 + deltaX * i / 4,
            clientY: 40 + deltaY * i / 4,
        }));
        await microtasksFinished();
    }
    handle.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1, clientX: 50 + deltaX, clientY: 40 + deltaY }));
    await microtasksFinished();
}
export async function dragHandleWithKeyboard(handle, key, numEvents, useFocusOut = false) {
    for (let i = 0; i < numEvents; i++) {
        keyDownOn(handle, 0, [], key);
    }
    if (useFocusOut) {
        handle.dispatchEvent(new CustomEvent('focusout'));
    }
    else {
        keyUpOn(handle, 0, [], key);
    }
    await microtasksFinished();
}
export function verifyDeleteTextAnnotationMessage(mockPlugin, expectedId, expectedPageIndex = 0, expectedSource = TextAnnotationSource.USER) {
    const message = mockPlugin
        .findMessage('deleteTextAnnotation');
    chrome.test.assertTrue(message !== undefined);
    chrome.test.assertEq('deleteTextAnnotation', message.type);
    const expectedMessageData = {
        id: expectedId,
        pageIndex: expectedPageIndex,
        source: expectedSource,
    };
    assertDeepEquals(expectedMessageData, message.data);
}
export function verifyFinishTextAnnotationMessage(mockPlugin, expectedAnnotation, expectedIsEdited) {
    const message = mockPlugin.findMessage('finishTextAnnotation');
    chrome.test.assertTrue(message !== undefined);
    chrome.test.assertEq('finishTextAnnotation', message.type);
    const expectedMessageData = {
        ...expectedAnnotation,
        isEdited: expectedIsEdited,
        newTypefaces: [],
        source: TextAnnotationSource.USER,
    };
    assertDeepEquals(expectedMessageData, message.data);
}
/**
 * Simulates reactivating an existing text annotation for editing.
 * It converts the annotation's page-relative coordinates to screen coordinates
 * and sets the textbox's `annotation` and `pageDimensions` properties to
 * trigger the transition to the active/editing state.
 */
export function reactivateBox(textbox, viewport, annotation) {
    const pageRect = viewport.getPageScreenRect(annotation.pageIndex);
    const screenRect = pageToScreenCoordinates(annotation.pageIndex, annotation.textBoxRect, viewport);
    const annotationToPass = structuredClone(annotation);
    annotationToPass.textBoxRect = screenRect;
    textbox.annotation = annotationToPass;
    textbox.pageDimensions = pageRect;
}
