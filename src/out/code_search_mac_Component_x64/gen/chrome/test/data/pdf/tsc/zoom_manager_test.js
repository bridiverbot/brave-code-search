// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ZoomBehavior, ZoomManager } from 'chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/pdf_viewer_wrapper.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { assertEquals, assertFalse, assertNotReached, assertTrue } from 'chrome://webui-test/chai_assert.js';
class MockViewport {
    zooms = [];
    zoom = 1;
    browserOnlyZoomChange = false;
    tracker_ = new EventTracker();
    addZoomListeners(target) {
        this.tracker_.add(target, 'set-zoom', (e) => this.setZoom(e.detail));
        this.tracker_.add(target, 'update-zoom-from-browser', (e) => this.updateZoomFromBrowserChange(e.detail));
    }
    removeListeners() {
        this.tracker_.removeAll();
    }
    setZoom(zoom) {
        this.zooms.push(zoom);
        this.zoom = zoom;
    }
    getZoom() {
        return this.zoom;
    }
    updateZoomFromBrowserChange(_oldBrowserZoom) {
        this.browserOnlyZoomChange = true;
    }
}
/**
 * A mock implementation of the function used by ZoomManager to set the
 * browser zoom level.
 */
class MockBrowserZoomSetter {
    zoom = 1;
    started = false;
    promiseResolver_ = null;
    /**
     * The function implementing setBrowserZoomFunction.
     */
    setBrowserZoom(zoom) {
        assertFalse(this.started);
        this.zoom = zoom;
        this.started = true;
        this.promiseResolver_ = new PromiseResolver();
        return this.promiseResolver_.promise;
    }
    /**
     * Resolves the promise returned by a call to setBrowserZoom.
     */
    complete() {
        this.promiseResolver_.resolve();
        this.started = false;
    }
}
function failCallback(_zoom) {
    assertNotReached();
}
suite('ZoomManager', function () {
    let viewport;
    let browserZoomSetter;
    setup(function () {
        viewport = new MockViewport();
        browserZoomSetter = new MockBrowserZoomSetter();
    });
    teardown(function () {
        viewport.removeListeners();
    });
    test('ZoomChange', function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.MANAGE, () => viewport.getZoom(), zoom => browserZoomSetter.setBrowserZoom(zoom), 1);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        viewport.zoom = 2;
        zoomManager.onPdfZoomChange();
        assertEquals(2, browserZoomSetter.zoom);
        assertTrue(browserZoomSetter.started);
    });
    test('BrowserZoomChange', function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.MANAGE, () => viewport.getZoom(), failCallback, 1);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        zoomManager.onBrowserZoomChange(3);
        assertEquals(1, viewport.zooms.length);
        assertEquals(3, viewport.zooms[0]);
        assertEquals(3, viewport.zoom);
    });
    test('BrowserZoomChangeEmbedded', function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.PROPAGATE_PARENT, () => viewport.getZoom(), failCallback, 1);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        // Zooming in the browser should not overwrite the viewport's zoom,
        // but be applied separately.
        viewport.zoom = 2;
        zoomManager.onBrowserZoomChange(3);
        assertEquals(2, viewport.zoom);
        assertTrue(viewport.browserOnlyZoomChange);
    });
    test('SmallZoomChange', function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.MANAGE, () => viewport.getZoom(), zoom => browserZoomSetter.setBrowserZoom(zoom), 2);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        viewport.zoom = 2.0001;
        zoomManager.onPdfZoomChange();
        assertEquals(1, browserZoomSetter.zoom);
        assertFalse(browserZoomSetter.started);
    });
    test('SmallBrowserZoomChange', function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.MANAGE, () => viewport.getZoom(), failCallback, 1);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        zoomManager.onBrowserZoomChange(0.999);
        assertEquals(0, viewport.zooms.length);
        assertEquals(1, viewport.zoom);
    });
    test('MultiplePdfZoomChanges', async function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.MANAGE, () => viewport.getZoom(), zoom => browserZoomSetter.setBrowserZoom(zoom), 1);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        viewport.zoom = 2;
        zoomManager.onPdfZoomChange();
        viewport.zoom = 3;
        zoomManager.onPdfZoomChange();
        assertTrue(browserZoomSetter.started);
        assertEquals(2, browserZoomSetter.zoom);
        browserZoomSetter.complete();
        await Promise.resolve();
        assertTrue(browserZoomSetter.started);
        assertEquals(3, browserZoomSetter.zoom);
    });
    test('MultipleBrowserZoomChanges', function () {
        const zoomManager = ZoomManager.create(ZoomBehavior.MANAGE, () => viewport.getZoom(), failCallback, 1);
        viewport.addZoomListeners(zoomManager.getEventTarget());
        zoomManager.onBrowserZoomChange(2);
        zoomManager.onBrowserZoomChange(3);
        assertEquals(2, viewport.zooms.length);
        assertEquals(2, viewport.zooms[0]);
        assertEquals(3, viewport.zooms[1]);
        assertEquals(3, viewport.zoom);
    });
});
