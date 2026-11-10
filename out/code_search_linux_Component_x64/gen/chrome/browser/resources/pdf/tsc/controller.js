// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { verifyPdfHeader } from './pdf_viewer_utils.js';
import { PinchPhase } from './viewport.js';
/**
 * Creates a cryptographically secure pseudorandom 128-bit token.
 * @return The generated token as a hex string.
 */
function createToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, b => b.toString(16).padStart(2, '0')).join('');
}
/** Event types dispatched by the plugin controller. */
export var PluginControllerEventType;
(function (PluginControllerEventType) {
    // 
    PluginControllerEventType["FINISH_INK_STROKE"] = "PluginControllerEventType.FINISH_INK_STROKE";
    PluginControllerEventType["START_INK_STROKE"] = "PluginControllerEventType.START_INK_STROKE";
    PluginControllerEventType["UPDATE_THUMBNAIL"] = "PluginControllerEventType.UPDATE_THUMBNAIL";
    // 
    PluginControllerEventType["IS_ACTIVE_CHANGED"] = "PluginControllerEventType.IS_ACTIVE_CHANGED";
    PluginControllerEventType["PLUGIN_MESSAGE"] = "PluginControllerEventType.PLUGIN_MESSAGE";
})(PluginControllerEventType || (PluginControllerEventType = {}));
/**
 * PDF plugin controller singleton, responsible for communicating with the
 * embedded plugin element. Dispatches a
 * `PluginControllerEventType.PLUGIN_MESSAGE` event containing the message from
 * the plugin, if a message type not handled by this controller is received.
 */
export class PluginController {
    eventTarget_ = new EventTarget();
    isActive_ = false;
    plugin_;
    delayedMessages_ = [];
    viewport_;
    getIsUserInitiatedCallback_ = () => false;
    pendingSaveTokens_ = new Map();
    pendingSaveDataBlockTokens_ = new Map();
    requestResolverMap_ = new Map();
    uidCounter_ = 1;
    port_ = null;
    init(plugin, viewport, getIsUserInitiatedCallback) {
        if (this.port_) {
            this.port_.onmessage = null;
            this.port_ = null;
        }
        this.viewport_ = viewport;
        this.getIsUserInitiatedCallback_ = getIsUserInitiatedCallback;
        this.pendingSaveTokens_ = new Map();
        this.pendingSaveDataBlockTokens_ = new Map();
        this.requestResolverMap_ = new Map();
        this.setPlugin_(plugin);
    }
    get isActive() {
        // Check whether `plugin_` is defined as a signal that `init()` was called.
        return !!this.plugin_ && this.isActive_;
    }
    set isActive(isActive) {
        const wasActive = this.isActive;
        this.isActive_ = isActive;
        if (this.isActive === wasActive) {
            return;
        }
        this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.IS_ACTIVE_CHANGED, { detail: this.isActive }));
    }
    setPlugin_(plugin) {
        this.plugin_ = plugin;
        this.plugin_.addEventListener('message', e => this.handlePluginMessage_(e), false);
        if (this.delayedMessages_) {
            this.plugin_.postMessage = (message, transfer) => {
                this.delayedMessages_.push({ message, transfer });
            };
        }
        // Called only from init() which always initializes |viewport_|.
        this.viewport_.setContent(this.plugin_);
        this.viewport_.setRemoteContent(this.plugin_);
    }
    createUid_() {
        return this.uidCounter_++;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    viewportChanged() { }
    // 
    setAnnotationMode(mode) {
        this.postMessage_({
            type: 'setAnnotationMode',
            mode,
        });
    }
    getAnnotationBrush(brushType) {
        return this.postMessageWithReply_({
            type: 'getAnnotationBrush',
            brushType,
        });
    }
    setAnnotationBrush(brush) {
        const message = {
            type: 'setAnnotationBrush',
            data: brush,
        };
        this.postMessage_(message);
    }
    getAllTextAnnotations() {
        return this.postMessageWithReply_({
            type: 'getAllTextAnnotations',
        });
    }
    deleteTextAnnotation(data) {
        const message = {
            type: 'deleteTextAnnotation',
            data,
        };
        this.postMessage_(message);
    }
    editTextAnnotation(id) {
        const message = {
            type: 'editTextAnnotation',
            data: id,
        };
        this.postMessage_(message);
    }
    finishTextAnnotation(annotation) {
        const message = {
            type: 'finishTextAnnotation',
            data: annotation,
        };
        this.postMessage_(message);
    }
    // 
    redo() {
        // 
        this.postMessage_({ type: 'annotationRedo' });
        // 
    }
    undo() {
        // 
        this.postMessage_({ type: 'annotationUndo' });
        // 
    }
    /**
     * Notify the plugin to stop reacting to scroll events while zoom is taking
     * place to avoid flickering.
     */
    beforeZoom() {
        this.postMessage_({ type: 'stopScrolling' });
        assert(this.viewport_);
        if (this.viewport_.pinchPhase === PinchPhase.START) {
            const position = this.viewport_.position;
            const zoom = this.viewport_.getZoom();
            const pinchPhase = this.viewport_.pinchPhase;
            const layoutOptions = this.viewport_.getLayoutOptions();
            this.postMessage_({
                type: 'viewport',
                userInitiated: true,
                zoom: zoom,
                layoutOptions: layoutOptions,
                xOffset: position.x,
                yOffset: position.y,
                pinchPhase: pinchPhase,
            });
        }
    }
    /**
     * Notify the plugin of the zoom change and to continue reacting to scroll
     * events.
     */
    afterZoom() {
        assert(this.viewport_);
        const position = this.viewport_.position;
        const zoom = this.viewport_.getZoom();
        const layoutOptions = this.viewport_.getLayoutOptions();
        const pinchVector = this.viewport_.pinchPanVector || { x: 0, y: 0 };
        const pinchCenter = this.viewport_.pinchCenter || { x: 0, y: 0 };
        const pinchPhase = this.viewport_.pinchPhase;
        this.postMessage_({
            type: 'viewport',
            userInitiated: this.getIsUserInitiatedCallback_(),
            zoom: zoom,
            layoutOptions: layoutOptions,
            xOffset: position.x,
            yOffset: position.y,
            pinchPhase: pinchPhase,
            pinchX: pinchCenter.x,
            pinchY: pinchCenter.y,
            pinchVectorX: pinchVector.x,
            pinchVectorY: pinchVector.y,
        });
    }
    /**
     * Post a message to the plugin. Some messages will cause an async reply to be
     * received through handlePluginMessage_().
     */
    postMessage_(message) {
        assert(this.plugin_);
        this.plugin_.postMessage(message);
    }
    /**
     * Post a message to the plugin, for cases where direct response is expected
     * from the plugin.
     * @return A promise holding the response from the plugin.
     */
    postMessageWithReply_(message) {
        const promiseResolver = new PromiseResolver();
        const messageId = `${message.type}_${this.createUid_()}`;
        message.messageId = messageId;
        this.requestResolverMap_.set(messageId, promiseResolver);
        this.postMessage_(message);
        return promiseResolver.promise;
    }
    rotateClockwise() {
        this.postMessage_({ type: 'rotateClockwise' });
    }
    rotateCounterclockwise() {
        this.postMessage_({ type: 'rotateCounterclockwise' });
    }
    setDisplayAnnotations(displayAnnotations) {
        this.postMessage_({
            type: 'displayAnnotations',
            display: displayAnnotations,
        });
    }
    setTwoUpView(enableTwoUpView) {
        this.postMessage_({
            type: 'setTwoUpView',
            enableTwoUpView: enableTwoUpView,
        });
    }
    print() {
        this.postMessage_({ type: 'print' });
    }
    selectAll() {
        this.postMessage_({ type: 'selectAll' });
    }
    highlightTextFragments(textFragments) {
        this.postMessage_({
            type: 'highlightTextFragments',
            textFragments,
        });
    }
    getSelectedText() {
        return this.postMessageWithReply_({ type: 'getSelectedText' });
    }
    /**
     * Post a thumbnail request message to the plugin.
     * @return A promise holding the thumbnail response from the plugin.
     */
    requestThumbnail(pageIndex) {
        return this.postMessageWithReply_({
            type: 'getThumbnail',
            pageIndex: pageIndex,
        });
    }
    resetPrintPreviewMode(printPreviewParams) {
        this.postMessage_({
            type: 'resetPrintPreviewMode',
            url: printPreviewParams.url,
            grayscale: printPreviewParams.grayscale,
            // If the PDF isn't modifiable we send 0 as the page count so that no
            // blank placeholder pages get appended to the PDF.
            pageCount: (printPreviewParams.modifiable ?
                printPreviewParams.pageNumbers.length :
                0),
        });
    }
    /**
     * @param color New color, as a 32-bit integer, of the PDF plugin
     *     background.
     */
    setBackgroundColor(color) {
        this.postMessage_({
            type: 'setBackgroundColor',
            color: color,
        });
    }
    loadPreviewPage(url, index) {
        this.postMessage_({ type: 'loadPreviewPage', url: url, index: index });
    }
    getPageBoundingBox(page) {
        return this.postMessageWithReply_({
            type: 'getPageBoundingBox',
            page,
        });
    }
    getPasswordComplete(password) {
        this.postMessage_({ type: 'getPasswordComplete', password: password });
    }
    /**
     * @return A promise holding the named destination information from the
     *     plugin.
     */
    getNamedDestination(destination) {
        return this.postMessageWithReply_({
            type: 'getNamedDestination',
            namedDestination: destination,
        });
    }
    focus() {
        this.postMessage_({ type: 'focus' });
    }
    setPresentationMode(enablePresentationMode) {
        this.postMessage_({
            type: 'setPresentationMode',
            enablePresentationMode,
        });
    }
    save(requestType) {
        const resolver = new PromiseResolver();
        const newToken = createToken();
        this.pendingSaveTokens_.set(newToken, resolver);
        this.postMessage_({
            type: 'save',
            token: newToken,
            saveRequestType: requestType,
        });
        return resolver.promise;
    }
    /**
     * Requests data to save a block of the current document. The reply will
     * include bytes to save and total file size. A 0 total file size is an error
     * indicator.
     * @param requestType The type of save request.
     * @param offset The offset of the requested data.
     * @param blockSize The size of requested data. This parameter can be 0 when
     *     the offset is 0 since the caller may not know yet the total file size.
     *     Otherwise it specifies the upper limit on the returned data and the
     *     plugin may return less data than requested.
     */
    getSaveDataBlock(requestType, offset, blockSize) {
        const resolver = new PromiseResolver();
        const newToken = createToken();
        this.pendingSaveDataBlockTokens_.set(newToken, resolver);
        this.postMessage_({
            type: 'getSaveDataBlock',
            token: newToken,
            saveRequestType: requestType,
            offset: offset,
            blockSize: blockSize,
        });
        return resolver.promise;
    }
    /**
     * Requests suggested filename for saving the current document.
     * @param requestType The type of the request, only used for testing.
     */
    getSuggestedFileName(requestType) {
        return this.postMessageWithReply_({
            type: 'getSuggestedFileName',
            saveRequestTypeForTesting: requestType,
        });
    }
    /**
     * Releases any memory buffers kept for saving the PDF in blocks.
     */
    releaseSaveInBlockBuffers() {
        this.postMessage_({
            type: 'releaseSaveInBlockBuffers',
        });
    }
    saveAttachment(index) {
        return this.postMessageWithReply_({
            type: 'saveAttachment',
            attachmentIndex: index,
        });
    }
    /**
     * Binds an event handler for messages received from the plugin.
     *
     * TODO(crbug.com/40189769): Remove this method when a permanent postMessage()
     * bridge is implemented for the viewer.
     */
    bindMessageHandler(port) {
        assert(this.delayedMessages_ !== null);
        assert(this.plugin_);
        const delayedMessages = this.delayedMessages_;
        this.delayedMessages_ = null;
        this.port_ = port;
        this.plugin_.postMessage = port.postMessage.bind(port);
        port.onmessage = e => this.handlePluginMessage_(e);
        for (const { message, transfer } of delayedMessages) {
            this.plugin_.postMessage(message, transfer);
        }
    }
    /**
     * An event handler for handling message events received from the plugin.
     */
    handlePluginMessage_(messageEvent) {
        const messageData = messageEvent.data;
        // Handle case where this Plugin->Page message is a direct response
        // to a previous Page->Plugin message
        if (messageData.messageId !== undefined) {
            const resolver = this.requestResolverMap_.get(messageData.messageId) || null;
            assert(resolver !== null);
            this.requestResolverMap_.delete(messageData.messageId);
            resolver.resolve(messageData);
            return;
        }
        assert(this.viewport_);
        switch (messageData.type) {
            case 'ackScrollToRemote':
                this.viewport_.ackScrollToRemote(messageData);
                break;
            case 'consumeSaveToken':
                const resolver = this.pendingSaveTokens_.get(messageData.token);
                assert(resolver);
                assert(this.pendingSaveTokens_.delete(messageData.token));
                resolver.resolve(null);
                break;
            case 'gesture':
                this.viewport_.dispatchGesture(messageData.gesture);
                break;
            case 'goToPage':
                this.viewport_.goToPage(messageData.page);
                break;
            case 'navigateToDestination':
                const destinationData = messageData;
                this.viewport_.handleNavigateToDestination(destinationData.page, destinationData.x, destinationData.y, destinationData.zoom);
                return;
            case 'saveData':
                this.saveData_(messageData);
                break;
            case 'saveDataBlock':
                this.saveDataBlock_(messageData);
                break;
            case 'scrollBy':
                this.viewport_.scrollBy(messageData);
                break;
            case 'setScrollPosition':
                this.viewport_.scrollTo(messageData);
                break;
            case 'setSmoothScrolling':
                this.viewport_.setSmoothScrolling(messageData.smoothScrolling);
                return;
            case 'swipe':
                this.viewport_.dispatchSwipe(messageData.direction);
                break;
            case 'syncScrollFromRemote':
                this.viewport_.syncScrollFromRemote(messageData);
                break;
            default:
                this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.PLUGIN_MESSAGE, { detail: messageData }));
        }
    }
    /** Handles the pdf file buffer received from the plugin. */
    saveData_(messageData) {
        // Verify a token that was created by this instance is included to avoid
        // being spammed.
        const resolver = this.pendingSaveTokens_.get(messageData.token);
        assert(resolver);
        assert(this.pendingSaveTokens_.delete(messageData.token));
        if (!messageData.dataToSave) {
            resolver.reject();
            return;
        }
        // Verify the file size is capped at 100 MB. This cap should be kept in sync
        // with and is also enforced in pdf/out_of_process_instance.cc.
        const MAX_FILE_SIZE = 100 * 1000 * 1000;
        assert(messageData.dataToSave.byteLength <= MAX_FILE_SIZE, `File too large to be saved: ${messageData.dataToSave.byteLength} bytes.`);
        verifyPdfHeader(messageData.dataToSave);
        resolver.resolve(messageData);
    }
    /** Handles the partial pdf file buffer received from the plugin. */
    saveDataBlock_(messageData) {
        // Verify a token that was created by this instance is included to avoid
        // being spammed.
        const resolver = this.pendingSaveDataBlockTokens_.get(messageData.token);
        assert(resolver);
        assert(this.pendingSaveDataBlockTokens_.delete(messageData.token));
        if (!messageData.dataToSave) {
            resolver.reject();
            return;
        }
        resolver.resolve(messageData);
    }
    setPluginForTesting(plugin) {
        this.setPlugin_(plugin);
    }
    static getInstance() {
        return instance || (instance = new PluginController());
    }
}
let instance = null;
