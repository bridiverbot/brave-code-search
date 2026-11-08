// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { SelectionOverlayBaseHandler } from './selection_overlay_base_handler.js';
/**
 * @fileoverview A browser proxy for receiving the viewport screenshot from the
 * browser.
 */
let instance = null;
export class ScreenshotBitmapBrowserProxyImpl {
    screenshot;
    isSidePanelOpenOnScreenshot = false;
    screenshotListenerId;
    onOverlayReshownListenerId;
    callbacks = [];
    onOverlayReshownCallbacks = new Map();
    nextCallbackId = 0;
    constructor() {
        this.screenshotListenerId = SelectionOverlayBaseHandler.getInstance()
            .addScreenshotDataReceivedListener(this.screenshotDataReceived.bind(this));
        this.onOverlayReshownListenerId =
            SelectionOverlayBaseHandler.getInstance().addOnOverlayReshownListener(this.onOverlayReshown.bind(this));
    }
    static getInstance() {
        return instance || (instance = new ScreenshotBitmapBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    fetchScreenshot(callback) {
        // Store the callback for calling if the screenshot updates or when the
        // screenshot is ready if the below check fails.
        this.callbacks.push(callback);
        if (this.screenshot) {
            // We need to make a new bitmap because each canvas takes ownership of the
            // bitmap, so it cannot be drawn to multiple HTMLCanvasElement.
            createImageBitmap(this.screenshot).then((bitmap) => {
                callback(bitmap, this.isSidePanelOpenOnScreenshot);
            });
            return;
        }
    }
    addOnOverlayReshownListener(callback) {
        const id = this.nextCallbackId++;
        this.onOverlayReshownCallbacks.set(id, callback);
        return id;
    }
    removeOnOverlayReshownListener(id) {
        this.onOverlayReshownCallbacks.delete(id);
    }
    async parseScreenshotData(screenshotData) {
        const data = screenshotData.pixelData;
        // Pull the pixel data into a Uint8ClampedArray.
        let pixelData;
        if (Array.isArray(data.bytes)) {
            pixelData = new Uint8ClampedArray(data.bytes);
        }
        else {
            // If the buffer is not invalid or an array, it must be shared memory.
            assert(data.sharedMemory);
            const sharedMemory = data.sharedMemory;
            const { buffer, result } = sharedMemory.bufferHandle.mapBuffer(0, sharedMemory.size);
            assert(result === Mojo.RESULT_OK);
            pixelData = new Uint8ClampedArray(buffer);
        }
        const imageWidth = screenshotData.imageInfo.width;
        const imageHeight = screenshotData.imageInfo.height;
        // Put our screenshot into ImageData object so it can be rendered in a
        // Canvas.
        const imageData = new ImageData(pixelData, imageWidth, imageHeight);
        return createImageBitmap(imageData);
    }
    async onOverlayReshown(screenshotData) {
        const data = screenshotData.pixelData;
        // TODO(crbug.com/334185985): This occurs when the browser failed to
        // allocate the memory for the pixels. Handle this case.
        if (data.invalidBuffer) {
            return;
        }
        this.screenshot = await this.parseScreenshotData(screenshotData);
        // Send the screenshot to all the callbacks.
        for (const callback of this.onOverlayReshownCallbacks.values()) {
            // We need to make a new bitmap because each canvas takes ownership of the
            // bitmap, so it cannot be drawn to multiple HTMLCanvasElement.
            createImageBitmap(this.screenshot).then((bitmap) => {
                callback(bitmap);
            });
        }
    }
    async screenshotDataReceived(screenshotData, isSidePanelOpen) {
        const data = screenshotData.pixelData;
        // TODO(crbug.com/334185985): This occurs when the browser failed to
        // allocate the memory for the pixels. Handle this case.
        if (data.invalidBuffer) {
            return;
        }
        // Cache the bitmap for future requests
        this.screenshot = await this.parseScreenshotData(screenshotData);
        this.isSidePanelOpenOnScreenshot = isSidePanelOpen;
        // Send the screenshot to all the callbacks.
        for (const callback of this.callbacks) {
            // We need to make a new bitmap because each canvas takes ownership of the
            // bitmap, so it cannot be drawn to multiple HTMLCanvasElement.
            createImageBitmap(this.screenshot).then((bitmap) => {
                callback(bitmap, this.isSidePanelOpenOnScreenshot);
            });
        }
    }
}
