// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome-untrusted://lens-overlay/post_selection_renderer.js';
import 'chrome-untrusted://lens-overlay/region_selection.js';
import { RegionSource, SelectionOverlayBaseHandler } from 'chrome-untrusted://lens-overlay/selection_overlay_base_handler.js';
import { GestureState } from 'chrome-untrusted://lens-overlay/selection_utils.js';
import { loadTimeData } from 'chrome-untrusted://resources/js/load_time_data.js';
import { assertEquals, assertTrue } from 'chrome-untrusted://webui-test/chai_assert.js';
import { flushTasks, waitAfterNextRender } from 'chrome-untrusted://webui-test/polymer_test_util.js';
const TEST_WIDTH = 800;
const TEST_HEIGHT = 500;
class FakeSelectionOverlayBaseHandler extends SelectionOverlayBaseHandler {
    multiRegionCallbacks = [];
    clearAllCallbacks = [];
    clearRegionCallbacks = [];
    setPostRegionCallbacks = [];
    deletedRegions = [];
    adjustedRegions = [];
    adjustedPolylines = [];
    addMultiRegionSelectionListener(callback) {
        this.multiRegionCallbacks.push(callback);
        return this.multiRegionCallbacks.length - 1;
    }
    removeListener(_id) {
        return true;
    }
    addBackgroundBlur() { }
    addOnOverlayReshownListener(_callback) {
        return -1;
    }
    addNotifyOverlayClosingListener(_callback) {
        return -1;
    }
    addScreenshotDataReceivedListener(_callback) {
        return -1;
    }
    addClearRegionSelectionListener(callback) {
        this.clearRegionCallbacks.push(callback);
        return this.clearRegionCallbacks.length - 1;
    }
    addClearAllSelectionsListener(callback) {
        this.clearAllCallbacks.push(callback);
        return this.clearAllCallbacks.length - 1;
    }
    addNotifyResultsPanelOpenedListener(_callback) {
        return -1;
    }
    addSetPostRegionSelectionListener(callback) {
        this.setPostRegionCallbacks.push(callback);
        return this.setPostRegionCallbacks.length - 1;
    }
    adjustRegionSelected(rect, source, id) {
        this.adjustedRegions.push({ rect, source, id });
    }
    adjustPolylineSelected(points, source, id) {
        this.adjustedPolylines.push({ points, source, id });
    }
    deleteRegion(id, source) {
        this.deletedRegions.push({ id, source });
    }
    closePreselectionBubble() { }
    notifyOverlayInitialized() { }
    setLiveBlur(_enabled) { }
    triggerMultiRegionSelectionUpdated(regions) {
        for (const cb of this.multiRegionCallbacks) {
            cb(regions);
        }
    }
}
suite('LineSelection', () => {
    let postSelectionRenderer;
    let regionSelection;
    let fakeSelectionHandler;
    setup(async () => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        loadTimeData.overrideValues({
            enableMultiRegionSelection: true,
            lineSelection: true,
            lineSelectionStrokeWidth: 4,
            colorLineSelectionGradient1: 0xffffffff,
            colorLineSelectionGradient2: 0xffffffff,
            colorLineSelectionGradient3: 0xffffffff,
            enableGradientRegionStroke: false,
            enableWhiteRegionStroke: false,
            enableKeyboardSelection: false,
            tapRegionHeight: 10,
            tapRegionWidth: 10,
        });
        fakeSelectionHandler = new FakeSelectionOverlayBaseHandler();
        SelectionOverlayBaseHandler.setInstance(fakeSelectionHandler);
        // Create and append region selection element
        regionSelection = document.createElement('region-selection');
        regionSelection.setSelectionOverlayRectForTesting(new DOMRect(0, 0, TEST_WIDTH, TEST_HEIGHT));
        regionSelection.style.display = 'block';
        regionSelection.style.width = `${TEST_WIDTH}px`;
        regionSelection.style.height = `${TEST_HEIGHT}px`;
        // Create and append post selection renderer
        postSelectionRenderer = document.createElement('post-selection-renderer');
        postSelectionRenderer.setSelectionOverlayRectForTesting(new DOMRect(0, 0, TEST_WIDTH, TEST_HEIGHT));
        postSelectionRenderer.style.display = 'block';
        postSelectionRenderer.style.width = `${TEST_WIDTH}px`;
        postSelectionRenderer.style.height = `${TEST_HEIGHT}px`;
        document.body.appendChild(regionSelection);
        document.body.appendChild(postSelectionRenderer);
        await waitAfterNextRender(regionSelection);
        await waitAfterNextRender(postSelectionRenderer);
    });
    test('LineSelectionEnabled_TriggersPolylineSelection', () => {
        // 1. Simulate a multi-point drag gesture on the regionSelection layer
        regionSelection.handleGestureStart();
        regionSelection.handleGestureDrag({
            state: GestureState.DRAGGING,
            startX: 100,
            startY: 100,
            clientX: 120,
            clientY: 130,
        });
        regionSelection.handleGestureDrag({
            state: GestureState.DRAGGING,
            startX: 100,
            startY: 100,
            clientX: 140,
            clientY: 150,
        });
        regionSelection.handleGestureDrag({
            state: GestureState.DRAGGING,
            startX: 100,
            startY: 100,
            clientX: 160,
            clientY: 180,
        });
        regionSelection.handleGestureEnd({
            state: GestureState.FINISHED,
            startX: 100,
            startY: 100,
            clientX: 160,
            clientY: 180,
        });
        // Verify adjustPolylineSelected was called on the handler with correct
        // normalized points
        assertEquals(1, fakeSelectionHandler.adjustedPolylines.length);
        const adjustEvent = fakeSelectionHandler.adjustedPolylines[0];
        assertEquals(RegionSource.SELECTION, adjustEvent.source);
        // Points should be normalized to (800, 500)
        const points = adjustEvent.points;
        assertTrue(points.length > 2);
        assertEquals(120 / TEST_WIDTH, points[0].x);
        assertEquals(130 / TEST_HEIGHT, points[0].y);
    });
    test('PostSelectionRenderer_RendersStaticPolylineRegion', async () => {
        const polyPoints = [
            { x: 0.5, y: 0.5 },
            { x: 0.6, y: 0.6 },
            { x: 0.5, y: 0.7 },
        ];
        const regions = [
            {
                id: 'region-a',
                region: { x: 0.2, y: 0.3, width: 0.1, height: 0.1 },
            },
            {
                id: 'region-poly-static',
                region: { x: 0.55, y: 0.6, width: 0.1, height: 0.2 },
                polyline: polyPoints,
            },
        ];
        fakeSelectionHandler.triggerMultiRegionSelectionUpdated(regions);
        postSelectionRenderer.set('activeRegionId', 'region-a');
        await flushTasks();
        await waitAfterNextRender(postSelectionRenderer);
        // Verify static region cutout for poly-static is rendered with has-polyline
        // attribute set
        const staticPolylineRegion = postSelectionRenderer.shadowRoot.querySelector('.static-region[data-id="region-poly-static"]');
        assertTrue(!!staticPolylineRegion);
        assertTrue(staticPolylineRegion.hasAttribute('has-polyline'));
    });
});
