// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_browser_proxy.js';
import { ToolbarBrowserProxyImpl } from 'chrome://contextual-tasks/contextual_tasks_toolbar_browser_proxy.js';
import { assertDeepEquals, assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
// 
import { TestMock } from 'chrome://webui-test/test_mock.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestContextualTasksBrowserProxy, TestToolbarBrowserProxy } from './test_contextual_tasks_browser_proxy.js';
// Base64 encoding of a UI handshake request message [1, 2, 3].
// Generated from btoa(String.fromCharCode(...[1, 2, 3]))
export const HANDSHAKE_REQUEST_MESSAGE_BASE64 = 'AQID';
// Byte array of a typical handshake response from the webview.
// Equivalent to base64 decoding 'CgIIAA=='
export const HANDSHAKE_RESPONSE_BYTES = new Uint8Array([10, 2, 8, 0]);
export const FAKE_TOKEN_STRING = '00000000000000001234567890ABCDEF';
export const FAKE_TOKEN_STRING_2 = '00000000000000001234567890ABCDFF';
export const fixtureUrl = 'chrome://webui-test/contextual_tasks/test.html';
export function assertHTMLElement(element) {
    assertTrue(!!element);
    assertTrue(element instanceof HTMLElement);
}
export function assertStyle(element, name, expected, error = '') {
    assertTrue(!!element, 'Element is null');
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertEquals(expected, actual, error);
}
export function installMock(clazz, installer) {
    installer = installer ||
        clazz.setInstance;
    const mock = TestMock.fromClass(clazz);
    installer(mock);
    return mock;
}
export function simulateUserInput(inputElement, value) {
    if ('value' in inputElement) {
        inputElement.value = value;
    }
    else {
        inputElement.innerText = value;
    }
    inputElement.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
}
export function getInputValue(inputElement) {
    if ('value' in inputElement) {
        return inputElement.value;
    }
    return inputElement.innerText;
}
/**
 * Simulates a 'loadcommit' event on a webview element.
 */
export function simulateLoadCommit(webview, url = fixtureUrl) {
    const loadCommitEvent = new Event('loadcommit');
    Object.assign(loadCommitEvent, { isTopLevel: true, url: url });
    webview.dispatchEvent(loadCommitEvent);
}
export async function deleteLastFile(composebox) {
    const files = composebox.$.carousel.files;
    const deletedId = files[files.length - 1].uuid;
    composebox.$.carousel.dispatchEvent(new CustomEvent('delete-file', {
        detail: {
            uuid: deletedId,
        },
        bubbles: true,
        composed: true,
    }));
    await microtasksFinished();
}
export function getSubmitContainer(composebox) {
    const submitElement = composebox.shadowRoot.querySelector('cr-composebox-submit');
    return submitElement?.$.submitContainer || null;
}
export function getSubmitButton(composebox) {
    const submitElement = composebox.shadowRoot.querySelector('cr-composebox-submit');
    return submitElement?.$.submitIcon || null;
}
/**
 * Creates and appends a 'contextual-tasks-app' element to the document body.
 * @param url The URL to initialize the test proxy with.
 * @param setupProxy Optional callback to configure the test proxy before
 *     element creation.
 * @param waitForInitialLoadStart If true, waits for the app's initial load
 *     start to finish.
 * @returns A promise that resolves to an object containing the created app
 *     element and the test proxy.
 */
export async function createContextualTasksAppElement(url = fixtureUrl, setupProxy, waitForInitialLoadStart = true) {
    const proxy = new TestContextualTasksBrowserProxy(url);
    BrowserProxyImpl.setInstance(proxy);
    const toolbarProxy = new TestToolbarBrowserProxy();
    ToolbarBrowserProxyImpl.setInstance(toolbarProxy);
    if (setupProxy) {
        setupProxy(proxy);
    }
    const appElement = document.createElement('contextual-tasks-app');
    let promise;
    if (waitForInitialLoadStart) {
        const { promise: p, resolve } = Promise.withResolvers();
        promise = p;
        appElement.setOnLoadStartFinishedCallbackForTesting(resolve);
    }
    document.body.appendChild(appElement);
    if (promise) {
        await promise;
    }
    await microtasksFinished();
    return { appElement, proxy, toolbarProxy };
}
/**
 * Mounts a fresh `<contextual-tasks-app>` and resolves the composebox chain.
 * Mock proxies must already be installed by the caller.
 */
export async function createCtComposeboxApp() {
    const app = document.createElement('contextual-tasks-app');
    // Suppress the initial `<webview>` guest navigation in composebox-only
    // unit tests so each mount does not pay guest-process creation and
    // navigation abort overhead.
    app.maybeLoadPendingUrl_ =
        () => { };
    document.body.appendChild(app);
    await microtasksFinished();
    const wrapper = app.$.composebox;
    return { app, wrapper, innerComposebox: wrapper.$.composebox };
}
export const ADD_FILE_CONTEXT_FN = 'addFileContext';
export const ADD_TAB_CONTEXT_FN = 'addTabContext';
export async function uploadFileAndVerify(token, file, composebox, mockSearchboxPageHandler, expectedInitialFilesCount = 0) {
    // Assert initial file count if 0 -> carousel should not render.
    if (expectedInitialFilesCount === 0) {
        assertFalse(!!composebox.shadowRoot.querySelector('#carousel'), 'Files should be empty and carousel should not render.');
    }
    mockSearchboxPageHandler.resetResolver(ADD_FILE_CONTEXT_FN);
    mockSearchboxPageHandler.setResultFor(ADD_FILE_CONTEXT_FN, Promise.resolve(token));
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    composebox.$.fileInputs.dispatchEvent(new CustomEvent('file-change', {
        detail: { files: dataTransfer.files },
        bubbles: true,
        composed: true,
    }));
    // Must call to upload. Await -> wait for it to be called once.
    await mockSearchboxPageHandler.whenCalled(ADD_FILE_CONTEXT_FN);
    // Must await for file carousel to re-render since are adding files.
    await composebox.updateComplete;
    await microtasksFinished();
    await verifyFileCarouselMatchesUploaded(file, composebox, mockSearchboxPageHandler, expectedInitialFilesCount);
}
export async function verifyFileCarouselMatchesUploaded(file, composebox, mockSearchboxPageHandler, expectedInitialFilesCount) {
    // Assert one file.
    // Avoid using $.carousel since may be cached.
    const carousel = composebox.shadowRoot.querySelector('#carousel');
    assertTrue(!!carousel, 'Carousel should be in the DOM');
    const files = carousel.files;
    assertEquals(expectedInitialFilesCount + 1, files.length, `Number of carousel files should be ${expectedInitialFilesCount + 1}`);
    const currentFile = files[files.length - 1];
    assertEquals(currentFile.type, file.type);
    assertEquals(currentFile.name, file.name);
    // Assert file is uploaded.
    assertEquals(1, mockSearchboxPageHandler.getCallCount(ADD_FILE_CONTEXT_FN), 'Add file context should be called for this file once.');
    const fileBuffer = await file.arrayBuffer();
    const fileArray = Array.from(new Uint8Array(fileBuffer));
    // Verify identity of latest file with that of uploaded version.
    const allCalls = mockSearchboxPageHandler.getArgs(ADD_FILE_CONTEXT_FN);
    const [fileInfo, fileData] = allCalls[allCalls.length - 1];
    assertEquals(fileInfo.fileName, file.name);
    assertDeepEquals(fileData.bytes, fileArray);
}
// 
