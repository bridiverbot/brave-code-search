// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ExtensionPageCallbackRouter, ExtensionPageHandlerFactory, ExtensionPageHandlerRemote } from 'chrome://contextual-tasks/contextual_tasks.mojom-webui.js';
import { getArrayBufferFromBigBuffer } from 'chrome://contextual-tasks/utils.js';
// LINT.IfChange(ContextualTasksExtensionHandshakeStatus)
export var HandshakeStatus;
(function (HandshakeStatus) {
    HandshakeStatus[HandshakeStatus["SUCCESS"] = 0] = "SUCCESS";
    HandshakeStatus[HandshakeStatus["HOST_ORIGIN_REJECTED"] = 1] = "HOST_ORIGIN_REJECTED";
    HandshakeStatus[HandshakeStatus["FRAME_DETACHED"] = 2] = "FRAME_DETACHED";
    HandshakeStatus[HandshakeStatus["MOJO_REQUEST_FAILED"] = 3] = "MOJO_REQUEST_FAILED";
    HandshakeStatus[HandshakeStatus["INVALID_DOCUMENT_ID"] = 4] = "INVALID_DOCUMENT_ID";
})(HandshakeStatus || (HandshakeStatus = {}));
const HANDSHAKE_STATUS_ENUM_SIZE = 5;
// LINT.ThenChange(
//   //chrome/browser/contextual_tasks/contextual_tasks_utils.h:ContextualTasksExtensionHandshakeStatus,
//   //tools/metrics/histograms/metadata/contextual_tasks/enums.xml:ContextualTasksExtensionHandshakeStatus
// )
// LINT.IfChange(ContextualTasksExtensionPostMessageError)
export var PostMessageError;
(function (PostMessageError) {
    PostMessageError[PostMessageError["UNTRUSTED_ORIGIN"] = 0] = "UNTRUSTED_ORIGIN";
    PostMessageError[PostMessageError["UNEXPECTED_DATA_TYPE"] = 1] = "UNEXPECTED_DATA_TYPE";
    PostMessageError[PostMessageError["MESSAGE_TOO_LARGE"] = 2] = "MESSAGE_TOO_LARGE";
    PostMessageError[PostMessageError["INVALID_DOCUMENT_ID"] = 3] = "INVALID_DOCUMENT_ID";
    PostMessageError[PostMessageError["PROTO_PARSE_FAILED"] = 4] = "PROTO_PARSE_FAILED";
    PostMessageError[PostMessageError["MOJO_PIPE_CLOSED"] = 5] = "MOJO_PIPE_CLOSED";
})(PostMessageError || (PostMessageError = {}));
const POST_MESSAGE_ERROR_ENUM_SIZE = 6;
// LINT.ThenChange(
//   //chrome/browser/contextual_tasks/contextual_tasks_utils.h:ContextualTasksExtensionPostMessageError,
//   //tools/metrics/histograms/metadata/contextual_tasks/enums.xml:ContextualTasksExtensionPostMessageError
// )
function recordExtensionHandshakeStatus(status) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (metricsService) {
        metricsService.recordEnumerationValue('ContextualTasks.ExtensionHandshake.Status', status, HANDSHAKE_STATUS_ENUM_SIZE);
    }
}
function recordExtensionPostMessageError(error) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (metricsService) {
        metricsService.recordEnumerationValue('ContextualTasks.ExtensionPostMessage.Error', error, POST_MESSAGE_ERROR_ENUM_SIZE);
    }
}
const CHROME_SEARCH_CHANNEL_NAME = 'chrome-search-channel';
const MAX_MESSAGE_BYTES = 1024 * 1024;
const portsByDocumentId = new Map();
let extensionPageHandler = null;
let extensionPageRouter = null;
function postProtoMessageToPort(documentId, port, message) {
    try {
        const buffer = getArrayBufferFromBigBuffer(message.smuggled);
        if (buffer.byteLength === 0) {
            return false;
        }
        port.postMessage({
            type: CHROME_SEARCH_CHANNEL_NAME,
            payload: Array.from(new Uint8Array(buffer)),
        });
        return true;
    }
    catch {
        handleSearchPortDisconnect(documentId, port);
        return false;
    }
}
function resetExtensionPageHandler() {
    if (extensionPageHandler) {
        extensionPageHandler.$.close();
        extensionPageHandler = null;
    }
    if (extensionPageRouter) {
        extensionPageRouter.$.close();
        extensionPageRouter = null;
    }
}
function getExtensionPageHandler() {
    if (!extensionPageHandler) {
        extensionPageRouter = new ExtensionPageCallbackRouter();
        extensionPageRouter.postSearchMessage.addListener((message, documentId) => {
            if (!documentId) {
                recordExtensionPostMessageError(PostMessageError.INVALID_DOCUMENT_ID);
                return;
            }
            const port = portsByDocumentId.get(documentId);
            if (!port || !postProtoMessageToPort(documentId, port, message)) {
                return;
            }
        });
        extensionPageHandler = new ExtensionPageHandlerRemote();
        const factory = ExtensionPageHandlerFactory.getRemote();
        factory.createExtensionPageHandler(extensionPageRouter.$.bindNewPipeAndPassRemote(), extensionPageHandler.$.bindNewPipeAndPassReceiver());
        extensionPageHandler.onConnectionError.addListener(() => {
            resetExtensionPageHandler();
        });
    }
    return extensionPageHandler;
}
function handleSearchPortMessage(documentId, port, message) {
    if (portsByDocumentId.get(documentId) !== port) {
        return;
    }
    if (!message || typeof message !== 'object') {
        recordExtensionPostMessageError(PostMessageError.UNEXPECTED_DATA_TYPE);
        return;
    }
    const searchMsg = message;
    if (searchMsg.type !== CHROME_SEARCH_CHANNEL_NAME ||
        !Array.isArray(searchMsg.payload) || searchMsg.payload.length === 0) {
        recordExtensionPostMessageError(PostMessageError.UNEXPECTED_DATA_TYPE);
        return;
    }
    if (searchMsg.payload.length > MAX_MESSAGE_BYTES) {
        recordExtensionPostMessageError(PostMessageError.MESSAGE_TOO_LARGE);
        return;
    }
    getExtensionPageHandler().onWebviewMessage(searchMsg.payload, documentId);
}
function handleSearchPortDisconnect(documentId, port) {
    if (portsByDocumentId.get(documentId) === port) {
        portsByDocumentId.delete(documentId);
    }
    port.disconnect();
    if (portsByDocumentId.size === 0) {
        resetExtensionPageHandler();
    }
}
async function sendSearchPortHandshake(documentId, port) {
    try {
        const { message } = await getExtensionPageHandler().getHandshakeMessage(documentId);
        if (portsByDocumentId.get(documentId) !== port) {
            return;
        }
        if (!postProtoMessageToPort(documentId, port, message)) {
            handleSearchPortDisconnect(documentId, port);
        }
    }
    catch {
        recordExtensionHandshakeStatus(HandshakeStatus.MOJO_REQUEST_FAILED);
        handleSearchPortDisconnect(documentId, port);
    }
}
// LINT.IfChange(AllowedOrigins)
function urlMatchesAllowList(origin) {
    try {
        const url = new URL(origin);
        // 
        if (url.protocol === 'file:' ||
            (url.protocol === 'http:' && url.hostname === 'localhost')) {
            return true;
        }
        // 
        if (url.protocol !== 'https:') {
            return false;
        }
        const host = url.hostname;
        return host === 'google.com' || host.endsWith('.google.com') ||
            host.endsWith('.corp.google.com') ||
            host.endsWith('.prod.google.com') || host === 'googlers.com' ||
            host.endsWith('.googlers.com');
    }
    catch {
        return false;
    }
}
// LINT.ThenChange(
//   manifest.json:AllowedOrigins,
//   manifest.json:WebAccessibleMatches
// )
chrome.runtime.onConnectExternal.addListener((port) => {
    // Only accept connections on the dedicated search channel.
    if (port.name !== CHROME_SEARCH_CHANNEL_NAME) {
        port.disconnect();
        return;
    }
    // Verify the connecting frame belongs to an allowlisted Google origin.
    if (!port.sender?.origin || !urlMatchesAllowList(port.sender.origin)) {
        recordExtensionPostMessageError(PostMessageError.UNTRUSTED_ORIGIN);
        recordExtensionHandshakeStatus(HandshakeStatus.HOST_ORIGIN_REJECTED);
        port.disconnect();
        return;
    }
    // Require a valid extension documentId to route messages to the right tab
    // or side panel WebContents in the browser process.
    const documentId = port.sender.documentId;
    if (typeof documentId !== 'string' || documentId.length === 0) {
        recordExtensionHandshakeStatus(HandshakeStatus.INVALID_DOCUMENT_ID);
        port.disconnect();
        return;
    }
    // If this document already has an open port, replace and disconnect the old
    // port so stale onDisconnect events cannot drop the new connection.
    const existingPort = portsByDocumentId.get(documentId);
    portsByDocumentId.set(documentId, port);
    if (existingPort && existingPort !== port) {
        existingPort.disconnect();
    }
    // Forward incoming search messages and clean up on port disconnect.
    port.onMessage.addListener((message) => {
        handleSearchPortMessage(documentId, port, message);
    });
    port.onDisconnect.addListener(() => {
        handleSearchPortDisconnect(documentId, port);
    });
    // Kick off the initial search handshake with the browser process.
    sendSearchPortHandshake(documentId, port);
});
chrome.runtime.onMessageExternal.addListener(async (message, sender) => {
    if (!sender.origin || !URL.parse(sender.origin) ||
        !urlMatchesAllowList(sender.origin)) {
        return { error: 'Unauthorized sender origin' };
    }
    if (!sender.documentId) {
        return { error: 'Missing documentId' };
    }
    if (message.type === 'contextualTasksPrivate.getState') {
        try {
            const state = await chrome.contextualTasksPrivate.getState(sender.documentId);
            return { state };
        }
        catch (err) {
            return { error: err.message || 'Unknown error' };
        }
    }
    if (message.type === 'contextualTasksPrivate.launchPanelInNewTab' &&
        message.args) {
        const details = message.args;
        if (!details.targetUrl || !URL.parse(details.targetUrl)) {
            return { error: 'Invalid targetUrl' };
        }
        const aimParams = details.aimParams || {};
        try {
            // LINT.IfChange(AimParamsCall)
            const result = await chrome.contextualTasksPrivate.launchPanelInNewTab({
                aimParams: {
                    ntc: aimParams.ntc ?? '',
                    mstk: aimParams.mstk ?? '',
                    aioh: aimParams.aioh ?? '',
                    csuir: aimParams.csuir ?? '',
                    ved: aimParams.ved ?? '',
                    cs: aimParams.cs ?? '',
                    sxsrf: aimParams.sxsrf ?? '',
                    ei: aimParams.ei ?? '',
                    q: aimParams.q ?? '',
                },
                targetUrl: details.targetUrl,
                documentId: sender.documentId,
            });
            // LINT.ThenChange(//chrome/common/extensions/api/contextual_tasks_private.webidl:AimParams)
            return result;
        }
        catch (err) {
            return { error: err.message || 'Unknown error' };
        }
    }
    return { error: `Unhandled message: ${JSON.stringify(message)}` };
});
