// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { I18nMixin } from '//resources/cr_elements/i18n_mixin.js';
import { assert, assertInstanceof, assertNotReached } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { flush, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GLIF_HEX_COLORS } from './color_utils.js';
import { CenterRotatedBox_CoordinateType } from './geometry.mojom-webui.js';
import { getTemplate } from './post_selection_renderer.html.js';
import { ScreenshotBitmapBrowserProxyImpl } from './screenshot_bitmap_browser_proxy.js';
import { renderScreenshot } from './screenshot_utils.js';
import { RegionSource, SelectionOverlayBaseHandler } from './selection_overlay_base_handler.js';
import { focusShimmerOnRegion, ShimmerControlRequester, unfocusShimmer } from './selection_utils.js';
import { toPercent, toPixels } from './values_converter.js';
// The target currently being dragged on by the user.
var DragTarget;
(function (DragTarget) {
    DragTarget[DragTarget["NONE"] = 0] = "NONE";
    DragTarget[DragTarget["TOP_LEFT"] = 1] = "TOP_LEFT";
    DragTarget[DragTarget["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    DragTarget[DragTarget["BOTTOM_RIGHT"] = 3] = "BOTTOM_RIGHT";
    DragTarget[DragTarget["BOTTOM_LEFT"] = 4] = "BOTTOM_LEFT";
})(DragTarget || (DragTarget = {}));
// The amount of pixels around the edge leave as a buffer so user can't drag too
// far. Exported for testing.
export const PERIMETER_SELECTION_PADDING_PX = 4;
// The maximum length of a corner. Exported for testing.
export const MAX_CORNER_LENGTH_PX = 22;
// The maximum radius of a corner. Exported for testing.
export const MAX_CORNER_RADIUS_PX = 14;
// Cutout radius used with larger corner radii. Exported for testing.
export const CUTOUT_RADIUS_PX = 5;
const STATIC_REGION_RADIUS_PX = 24;
// A cutout radius will only be used when the corner radius is above this
// threshold.
const CUTOUT_RADIUS_THRESHOLD_PX = 12;
// Minimum box size allowed. Exported for testing.
export const MIN_BOX_SIZE_PX = 12;
const MIN_BLUR = 8;
const MAX_BLUR = 40;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
const PostSelectionRendererElementBase = I18nMixin(PolymerElement);
/*
 * Renders the users visual selection after one is made. This element is also
 * responsible for allowing the user to adjust their region to issue a new
 * Lens request.
 */
export class PostSelectionRendererElement extends PostSelectionRendererElementBase {
    static get is() {
        return 'post-selection-renderer';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            top: {
                type: Number,
                value: 0,
            },
            left: {
                type: Number,
                value: 0,
            },
            height: {
                type: Number,
                value: 0,
            },
            width: {
                type: Number,
                value: 0,
            },
            currentDragTarget: {
                type: Number,
                value: DragTarget.NONE,
            },
            cornerIds: {
                type: Array,
                value: () => ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'],
            },
            canvasHeight: {
                type: Number,
                reflectToAttribute: true,
            },
            canvasWidth: {
                type: Number,
                reflectToAttribute: true,
            },
            canvasPhysicalHeight: {
                type: Number,
                reflectToAttribute: true,
            },
            canvasPhysicalWidth: {
                type: Number,
                reflectToAttribute: true,
            },
            regionSelectedGlowEnabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('enableRegionSelectedGlow'),
            },
            selectionOverlayRect: Object,
            shouldDarkenScrim: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            cornerSlidersEnabled: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('cornerSlidersEnabled'),
                reflectToAttribute: true,
            },
            backgroundGradientHidden: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            hideHandles: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            hideCloseButton: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            multiRegionSelectionEnabled: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableMultiRegionSelection'),
                reflectToAttribute: true,
            },
            staticRegions: {
                type: Array,
                value: () => [],
            },
            activeRegionId: {
                type: String,
                value: '',
                reflectToAttribute: true,
            },
            activeRegionHasPolyline: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            activePolylinePoints: {
                type: Array,
                value: () => [],
            },
            selectedRegions: {
                type: Array,
                value: () => [],
            },
        };
    }
    static get observers() {
        return [
            'calculateStaticRegions(' +
                'selectedRegions.*, activeRegionId, multiRegionSelectionEnabled)',
            'syncActiveRegion(selectedRegions.*, activeRegionId)',
        ];
    }
    syncActiveRegion() {
        if (!this.multiRegionSelectionEnabled) {
            return;
        }
        if (!this.activeRegionId) {
            this.set('activePolylinePoints', []);
            this.height = 0;
            this.width = 0;
            this.updateHasPolyline();
            return;
        }
        const activeRegion = this.selectedRegions.find(r => r.id === this.activeRegionId);
        if (activeRegion) {
            this.set('activePolylinePoints', activeRegion.polyline || []);
            const { x, y, width, height } = activeRegion.region;
            this.setDimensions(y - height / 2, x - width / 2, height, width);
            this.rerender();
        }
        else {
            this.set('activePolylinePoints', []);
            this.height = 0;
            this.width = 0;
        }
        this.updateHasPolyline();
    }
    updateHasPolyline() {
        this.activeRegionHasPolyline = this.activePolylinePoints.length > 0;
    }
    eventTracker_ = new EventTracker();
    currentScreenshot = null;
    renderedCanvasElements_ = new Set();
    context;
    // Listener IDs for events tracked from the browser.
    listenerIds;
    // The original bounds from the start of a drag or slider change.
    originalBounds = { left: 0, top: 0, width: 0, height: 0 };
    baseHandler = SelectionOverlayBaseHandler.getInstance();
    resizeObserver = new ResizeObserver(() => {
        this.handleResize();
    });
    newBoxAnimation = null;
    animateOnResize = false;
    // Timeout for calling handleGestureEnd() after a slider change.
    sliderChangedTimeout = loadTimeData.getValue('sliderChangedTimeout');
    // -1 if no timeout is currently running.
    sliderChangedTimeoutID = -1;
    connectedCallback() {
        super.connectedCallback();
        ScreenshotBitmapBrowserProxyImpl.getInstance().fetchScreenshot((screenshot) => {
            this.currentScreenshot = screenshot;
            // renderScreenshot detaches the bitmap, so we create a copy to keep
            // the original alive for the static region canvases.
            createImageBitmap(screenshot).then(bmp => {
                renderScreenshot(this.$.backgroundImageCanvas, bmp);
            });
            this.renderStaticRegionCanvases();
        });
        ScreenshotBitmapBrowserProxyImpl.getInstance().addOnOverlayReshownListener((screenshot) => {
            this.currentScreenshot = screenshot;
            this.renderedCanvasElements_.clear();
            createImageBitmap(screenshot).then(bmp => {
                renderScreenshot(this.$.backgroundImageCanvas, bmp);
            });
            this.renderStaticRegionCanvases();
        });
        this.eventTracker_.add(document, 'render-post-selection', (e) => {
            this.onRenderPostSelection(e);
        });
        this.eventTracker_.add(document, 'finished-receiving-text', () => {
            if (this.hasSelection()) {
                // Check for selectable text
                this.dispatchEvent(new CustomEvent('detect-text-in-region', {
                    bubbles: true,
                    composed: true,
                    detail: this.getNormalizedCenterRotatedBox(),
                }));
            }
        });
        this.eventTracker_.add(document, 'text-found-in-region', () => {
            if (this.hasSelection()) {
                this.shouldDarkenScrim = true;
            }
        });
        this.eventTracker_.add(this, 'pointermove', (e) => {
            this.handlePointerMoveForFocus(e);
        });
        this.resizeObserver.observe(this);
        // Set up listener to listen to events from C++.
        this.listenerIds = [
            this.baseHandler.addClearAllSelectionsListener(this.clearSelection.bind(this)),
            this.baseHandler.addClearRegionSelectionListener(this.clearRegionSelection.bind(this)),
            this.baseHandler.addSetPostRegionSelectionListener(this.setSelection.bind(this)),
            this.baseHandler.addMultiRegionSelectionListener(this.onMultiRegionSelectionUpdated.bind(this)),
        ];
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        this.resizeObserver.unobserve(this);
        this.listenerIds.forEach(id => {
            if (id !== -1) {
                this.baseHandler.removeListener(id);
            }
        });
        this.listenerIds = [];
    }
    handlePointerMoveForFocus(event) {
        // Don't switch focus if the user is currently dragging/resizing.
        if (this.currentDragTarget !== DragTarget.NONE) {
            return;
        }
        const elements = this.shadowRoot.elementsFromPoint(event.clientX, event.clientY);
        // If we're hovering over the active region's controls (close button,
        // corners), don't switch focus.
        if (elements.some(el => el.classList.contains('close-button') ||
            el.classList.contains('corner-hit-box'))) {
            return;
        }
        // Filter for elements that represent a selection region and map them to
        // their corresponding region ID and normalized area.
        const smallestRegion = elements
            .filter(el => el.classList.contains('static-region') ||
            el.id === 'postSelection')
            .map(el => {
            const id = el.id === 'postSelection' ? this.activeRegionId :
                el.dataset['id'];
            const region = this.selectedRegions.find(r => r.id === id);
            return {
                id,
                area: region ? region.region.width * region.region.height :
                    Infinity,
            };
        })
            .reduce((prev, curr) => (curr.area < prev.area ? curr : prev), { id: '', area: Infinity });
        // If the smallest region at this point isn't already the active one,
        // request a focus switch.
        if (smallestRegion.id && smallestRegion.id !== this.activeRegionId) {
            this.dispatchEvent(new CustomEvent('activate-region', {
                bubbles: true,
                composed: true,
                detail: { id: smallestRegion.id },
            }));
        }
    }
    onCloseActiveButtonClick(event) {
        if (this.activeRegionId) {
            const source = (event instanceof PointerEvent && event.pointerType === '') ?
                RegionSource.KEYBOARD :
                RegionSource.CLICK;
            this.baseHandler.deleteRegion(this.activeRegionId, source);
        }
        event.stopPropagation();
    }
    onCloseButtonPointerdown(event) {
        event.stopPropagation();
    }
    onMultiRegionSelectionUpdated(regions) {
        this.selectedRegions = regions;
        if (regions.length === 0) {
            this.activeRegionId = '';
        }
        this.calculateStaticRegions();
    }
    calculateStaticRegions() {
        if (!this.multiRegionSelectionEnabled) {
            this.staticRegions = [];
            return;
        }
        this.staticRegions =
            this.selectedRegions.filter(r => r.id !== this.activeRegionId)
                .map(r => this.selectedRegionToStaticRegion(r));
        this.updateCornerDimensions();
        // Draw canvases immediately to prevent flicker on static regions.
        flush();
        this.renderStaticRegionCanvases();
    }
    selectedRegionToStaticRegion(region) {
        const widthPercent = region.region.width * 100;
        const heightPercent = region.region.height * 100;
        const leftPercent = (region.region.x - region.region.width / 2) * 100;
        const topPercent = (region.region.y - region.region.height / 2) * 100;
        const rightOffset = 100 - (leftPercent + widthPercent);
        const bottomOffset = 100 - (topPercent + heightPercent);
        const cornerRadius = 'var(--static-region-corner-radius, 24px)';
        let clipPath;
        const hasPolyline = region.polyline !== undefined &&
            region.polyline !== null && region.polyline.length > 0;
        if (region.polyline && region.polyline.length > 0) {
            const points = region.polyline.map(p => `${p.x * 100}% ${p.y * 100}%`).join(', ');
            clipPath = `polygon(${points})`;
        }
        else {
            clipPath = `inset(${topPercent}% ${rightOffset}% ${bottomOffset}% ${leftPercent}% round ${cornerRadius})`;
        }
        return {
            id: region.id,
            left: `${leftPercent}%`,
            top: `${topPercent}%`,
            width: `${widthPercent}%`,
            height: `${heightPercent}%`,
            clipPath: clipPath,
            hasPolyline: hasPolyline,
        };
    }
    renderStaticRegionCanvases() {
        if (!this.multiRegionSelectionEnabled || !this.currentScreenshot) {
            return;
        }
        const canvases = this.shadowRoot.querySelectorAll('.static-region-cutout');
        // Prune any canvases that were removed from the DOM to prevent memory
        // leaks.
        const currentCanvasSet = new Set(canvases);
        for (const canvas of this.renderedCanvasElements_) {
            if (!currentCanvasSet.has(canvas)) {
                this.renderedCanvasElements_.delete(canvas);
            }
        }
        for (const canvas of canvases) {
            if (!this.renderedCanvasElements_.has(canvas)) {
                // Draw synchronously using a 2D context to avoid flickering and bitmap
                // detachment.
                canvas.width = this.currentScreenshot.width;
                canvas.height = this.currentScreenshot.height;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(this.currentScreenshot, 0, 0);
                    this.renderedCanvasElements_.add(canvas);
                }
            }
        }
    }
    setCanvasSizeTo(width, height) {
        // Resetting the canvas width and height also clears the canvas.
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.canvasPhysicalWidth = width * window.devicePixelRatio;
        this.canvasPhysicalHeight = height * window.devicePixelRatio;
    }
    clearRegionSelection() {
        unfocusShimmer(this, ShimmerControlRequester.CURSOR);
        unfocusShimmer(this, ShimmerControlRequester.MANUAL_REGION);
        this.clearSelection();
    }
    clearSelection() {
        unfocusShimmer(this, ShimmerControlRequester.POST_SELECTION);
        this.height = 0;
        this.width = 0;
        this.set('activePolylinePoints', []);
        this.updateHasPolyline();
        this.shouldDarkenScrim = false;
        this.dispatchEvent(new CustomEvent('hide-selected-region-context-menu', { bubbles: true, composed: true }));
        this.notifyPostSelectionUpdated();
    }
    handleGestureStart(event) {
        this.currentDragTarget =
            this.dragTargetFromPoint(event.startX, event.startY);
        if (this.shouldHandleGestureStart()) {
            // User is dragging the post selection (if enabled) or resizing.
            this.originalBounds = {
                left: this.left,
                top: this.top,
                width: this.width,
                height: this.height,
            };
            this.shouldDarkenScrim = false;
            return true;
        }
        // Check if the user is clicking on a close button.
        const elementsAtPoint = this.shadowRoot.elementsFromPoint(event.startX, event.startY);
        return elementsAtPoint.some(el => el.classList.contains('close-button'));
    }
    handleGestureDrag(event) {
        if (!this.selectionOverlayRect || this.selectionOverlayRect.width <= 0 ||
            this.selectionOverlayRect.height <= 0) {
            return;
        }
        const imageBounds = this.selectionOverlayRect;
        const normalizedX = (event.clientX - imageBounds.left) / imageBounds.width;
        const normalizedY = (event.clientY - imageBounds.top) / imageBounds.height;
        const normalizedMinBoxWidth = MIN_BOX_SIZE_PX / imageBounds.width;
        const normalizedMinBoxHeight = MIN_BOX_SIZE_PX / imageBounds.height;
        const currentLeft = this.left;
        const currentTop = this.top;
        const currentRight = this.left + this.width;
        const currentBottom = this.top + this.height;
        let newLeft;
        let newTop;
        let newRight;
        let newBottom;
        switch (this.currentDragTarget) {
            case DragTarget.TOP_LEFT:
                newLeft = Math.min(normalizedX, currentRight - normalizedMinBoxWidth);
                newTop = Math.min(normalizedY, currentBottom - normalizedMinBoxHeight);
                newRight = currentRight;
                newBottom = currentBottom;
                break;
            case DragTarget.TOP_RIGHT:
                newLeft = currentLeft;
                newTop = Math.min(normalizedY, currentBottom - normalizedMinBoxHeight);
                newRight = Math.max(normalizedX, currentLeft + normalizedMinBoxWidth);
                newBottom = currentBottom;
                break;
            case DragTarget.BOTTOM_RIGHT:
                newLeft = currentLeft;
                newTop = currentTop;
                newRight = Math.max(normalizedX, currentLeft + normalizedMinBoxWidth);
                newBottom = Math.max(normalizedY, currentTop + normalizedMinBoxHeight);
                break;
            case DragTarget.BOTTOM_LEFT:
                newLeft = Math.min(normalizedX, currentRight - normalizedMinBoxWidth);
                newTop = currentTop;
                newRight = currentRight;
                newBottom = Math.max(normalizedY, currentTop + normalizedMinBoxHeight);
                break;
            default:
                assertNotReached();
        }
        assert(newLeft !== undefined);
        assert(newTop !== undefined);
        assert(newRight !== undefined);
        assert(newBottom !== undefined);
        // Ensure the new region is within the image bounds.
        const clampedBounds = this.getClampedBounds({
            left: newLeft,
            top: newTop,
            width: newRight - newLeft,
            height: newBottom - newTop,
        });
        // Set the new dimensions.
        this.setDimensions(clampedBounds.top, clampedBounds.left, clampedBounds.height, clampedBounds.width);
        this.rerender();
    }
    handleGestureEnd(source = RegionSource.SELECTION_CHANGE) {
        if (this.areBoundsChanging()) {
            // Issue Lens request for new bounds
            this.baseHandler.adjustRegionSelected(this.getNormalizedCenterRotatedBox().box, source, this.activeRegionId);
            // Check for selectable text
            this.dispatchEvent(new CustomEvent('detect-text-in-region', {
                bubbles: true,
                composed: true,
                detail: this.getNormalizedCenterRotatedBox(),
            }));
        }
        this.originalBounds = { left: 0, top: 0, width: 0, height: 0 };
        this.currentDragTarget = DragTarget.NONE;
    }
    cancelGesture() {
        this.originalBounds = { left: 0, top: 0, width: 0, height: 0 };
        this.currentDragTarget = DragTarget.NONE;
    }
    handleRightClick(event) {
        const boundingRect = this.$.postSelection.getBoundingClientRect();
        if (this.dragTargetFromPoint(event.clientX, event.clientY) !==
            DragTarget.NONE ||
            (event.clientX >= boundingRect.left &&
                event.clientX <= boundingRect.right &&
                event.clientY >= boundingRect.top &&
                event.clientY <= boundingRect.bottom)) {
            this.dispatchEvent(new CustomEvent('restore-selected-region-context-menu', {
                bubbles: true,
                composed: true,
            }));
        }
    }
    // Handle changes in the slider inputs used by keyboard users.
    handleSliderChange(event) {
        if (this.sliderChangedTimeoutID <= 0) {
            // Initiating a slider change.
            this.originalBounds = {
                left: this.left,
                top: this.top,
                width: this.width,
                height: this.height,
            };
            this.shouldDarkenScrim = false;
        }
        const imageBounds = this.selectionOverlayRect;
        if (!imageBounds || imageBounds.width <= 0 || imageBounds.height <= 0) {
            return;
        }
        const normalizedMinBoxWidth = MIN_BOX_SIZE_PX / imageBounds.width;
        const normalizedMinBoxHeight = MIN_BOX_SIZE_PX / imageBounds.height;
        const currentLeft = this.left;
        const currentTop = this.top;
        const currentRight = this.left + this.width;
        const currentBottom = this.top + this.height;
        let newLeft = currentLeft;
        let newTop = currentTop;
        let newRight = currentRight;
        let newBottom = currentBottom;
        const slider = event.currentTarget;
        assertInstanceof(slider, HTMLInputElement);
        const value = Number(slider.value);
        switch (slider.dataset['cornerId']) {
            // The top left and bottom right corners' sliders control the x position
            // of their corners. Set the x position to the slider value, as long as it
            // is not below 0, above 1, or beyond the x position of the opposite side.
            case 'topLeft':
                newLeft = Math.max(0, Math.min(value / 100, currentRight - normalizedMinBoxWidth));
                break;
            case 'bottomRight':
                newRight = Math.min(1, Math.max(value / 100, currentLeft + normalizedMinBoxWidth));
                break;
            // The top right and bottom left corners' sliders control the y position
            // of their corners. Move the y position by the negative of the change in
            // the slider value, so that increasing the slider moves the cursor up
            // (i.e. in the -y direction), as long as it is not below 0, above 1, or
            // beyond the y position of the opposite side.
            case 'topRight':
                newTop = Math.max(0, Math.min(2 * currentTop - value / 100, currentBottom - normalizedMinBoxHeight));
                break;
            case 'bottomLeft':
                newBottom = Math.min(1, Math.max(2 * currentBottom - value / 100, currentTop + normalizedMinBoxHeight));
                break;
            default:
                assertNotReached();
        }
        // Ensure the new region is within the image bounds.
        const clampedBounds = this.getClampedBounds({
            left: newLeft,
            top: newTop,
            width: newRight - newLeft,
            height: newBottom - newTop,
        });
        // Set the new dimensions.
        this.setDimensions(clampedBounds.top, clampedBounds.left, clampedBounds.height, clampedBounds.width);
        this.rerender();
        // Timeout to wait for further slider changes before calling
        // handleGestureEnd().
        if (this.sliderChangedTimeoutID > 0) {
            clearTimeout(this.sliderChangedTimeoutID);
        }
        this.sliderChangedTimeoutID = setTimeout(() => {
            this.sliderChangedTimeoutID = -1;
            this.handleGestureEnd(RegionSource.KEYBOARD);
        }, this.sliderChangedTimeout);
    }
    getPostSelectionStyles(top, left, width, height, _overlayRect, _activeRegionId, _selectedRegionsChange, activePolylinePoints) {
        const style = [
            `--gradient-blue: ${GLIF_HEX_COLORS.blue}`,
            `--gradient-red: ${GLIF_HEX_COLORS.red}`,
            `--gradient-yellow: ${GLIF_HEX_COLORS.yellow}`,
            `--gradient-green: ${GLIF_HEX_COLORS.green}`,
        ];
        if (!this.selectionOverlayRect) {
            return style.join('; ');
        }
        const imageBounds = this.selectionOverlayRect;
        const selectionWidth = width * imageBounds.width;
        const selectionHeight = height * imageBounds.height;
        if (selectionWidth > 0 && selectionHeight > 0) {
            const minSide = Math.min(selectionWidth, selectionHeight);
            const blurAmount = Math.max(MIN_BLUR, Math.min(Math.round(minSide / 4), MAX_BLUR));
            style.push(`--region-selected-glow-blur-radius: ${blurAmount}px`);
        }
        if (activePolylinePoints && activePolylinePoints.length > 0) {
            const points = activePolylinePoints.map((p) => `${p.x * 100}% ${p.y * 100}%`)
                .join(', ');
            style.push(`--active-selection-clip-path: polygon(${points})`);
        }
        else {
            const topOffset = toPercent(top);
            const leftOffset = toPercent(left);
            const rightOffset = toPercent(1 - (left + width));
            const bottomOffset = toPercent(1 - (top + height));
            style.push(`--active-selection-clip-path: inset(${topOffset} ${rightOffset} ${bottomOffset} ${leftOffset} round var(--post-selection-cutout-corner-radius))`);
        }
        return style.join('; ');
    }
    setDimensions(top, left, height, width) {
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
        this.updateSliderValues();
    }
    // Update the attributes of the sliders to reflect the current dimensions.
    updateSliderValues() {
        const sliders = this.shadowRoot.querySelectorAll('input');
        for (const slider of sliders) {
            switch (slider.dataset['cornerId']) {
                case 'topLeft':
                    slider.value = (this.left * 100).toString();
                    slider.ariaLabel = this.i18n('topLeftSliderAriaLabel', Math.round(this.left * 100), Math.round(this.top * 100));
                    break;
                case 'topRight':
                    slider.value = (this.top * 100).toString();
                    slider.ariaLabel = this.i18n('topRightSliderAriaLabel', Math.round((this.left + this.width) * 100), Math.round(this.top * 100));
                    break;
                case 'bottomRight':
                    slider.value = ((this.left + this.width) * 100).toString();
                    slider.ariaLabel = this.i18n('bottomRightSliderAriaLabel', Math.round((this.left + this.width) * 100), Math.round((this.top + this.height) * 100));
                    break;
                case 'bottomLeft':
                    slider.value = ((this.top + this.height) * 100).toString();
                    slider.ariaLabel = this.i18n('bottomLeftSliderAriaLabel', Math.round(this.left * 100), Math.round((this.top + this.height) * 100));
                    break;
                default:
                    assertNotReached();
            }
        }
    }
    setSelection(region) {
        const normalizedTop = region.y - (region.height / 2);
        const normalizedLeft = region.x - (region.width / 2);
        this.setDimensions(normalizedTop, normalizedLeft, region.height, region.width);
        this.originalBounds = { left: 0, top: 0, width: 0, height: 0 };
        this.rerender();
        this.updateHasPolyline();
        this.triggerNewBoxAnimation();
    }
    onRenderPostSelection(e) {
        this.set('activePolylinePoints', e.detail.polyline || []);
        this.updateHasPolyline();
        this.setDimensions(e.detail.top, e.detail.left, e.detail.height, e.detail.width);
        this.rerender();
        this.triggerNewBoxAnimation();
    }
    // Returns the bounds of the post selection clamped to the edges of the image,
    // including the post selection corners. If no bounds are given, uses those
    // currently being rendered.
    getClampedBounds(bounds) {
        const imageBounds = this.selectionOverlayRect;
        if (!imageBounds) {
            return bounds || {
                left: this.left,
                top: this.top,
                width: this.width,
                height: this.height,
            };
        }
        const left = bounds ? bounds.left : this.left;
        const top = bounds ? bounds.top : this.top;
        const right = bounds ? bounds.left + bounds.width : this.left + this.width;
        const bottom = bounds ? bounds.top + bounds.height : this.top + this.height;
        // Helper values to clamp to within the bounds.
        const normalizedMinBoxWidth = MIN_BOX_SIZE_PX / imageBounds.width;
        const normalizedMinBoxHeight = MIN_BOX_SIZE_PX / imageBounds.height;
        const normalizedPerimeterPaddingWidth = PERIMETER_SELECTION_PADDING_PX / imageBounds.width;
        const normalizedPerimeterPaddingHeight = PERIMETER_SELECTION_PADDING_PX / imageBounds.height;
        const minXValue = normalizedPerimeterPaddingWidth;
        const minYValue = normalizedPerimeterPaddingHeight;
        const maxXValue = 1 - normalizedPerimeterPaddingWidth;
        const maxYValue = 1 - normalizedPerimeterPaddingHeight;
        // Clamp the values to within the selection overlay bounds.
        const clampedLeft = clamp(left, minXValue, maxXValue - normalizedMinBoxWidth);
        const clampedTop = clamp(top, minYValue, maxYValue - normalizedMinBoxHeight);
        const clampedRight = clamp(right, minXValue + normalizedMinBoxWidth, maxXValue);
        const clampedBottom = clamp(bottom, minYValue + normalizedMinBoxHeight, maxYValue);
        return {
            left: clampedLeft,
            top: clampedTop,
            width: clampedRight - clampedLeft,
            height: clampedBottom - clampedTop,
        };
    }
    handleResize() {
        // Only update properties defined absolutely, i.e. corner dimensions.
        // Properties that are defined relatively do not need to be updated.
        this.updateCornerDimensions();
        if (this.newBoxAnimation) {
            this.newBoxAnimation.effect
                .setKeyframes(this.getNewBoxAnimationKeyframes());
        }
        else if (this.animateOnResize) {
            this.animateOnResize = false;
            this.triggerNewBoxAnimation();
        }
        this.rerender();
    }
    rerender() {
        // rerender() can be called when there is not a selection present. This
        // should be a no-op otherwise the shimmer will be set to focus on the post
        // selection region without a selection.
        if (!this.hasSelection()) {
            return;
        }
        const clampedBounds = this.getClampedBounds();
        // Set the CSS properties to reflect current bounds and force rerender.
        this.style.setProperty('--selection-width', toPercent(clampedBounds.width));
        this.style.setProperty('--selection-height', toPercent(clampedBounds.height));
        this.style.setProperty('--selection-top', toPercent(clampedBounds.top));
        this.style.setProperty('--selection-left', toPercent(clampedBounds.left));
        this.updateCornerDimensions();
        // Focus the shimmer on the new post selection region.
        focusShimmerOnRegion(this, clampedBounds.top, clampedBounds.left, clampedBounds.width, clampedBounds.height, ShimmerControlRequester.POST_SELECTION);
        this.notifyPostSelectionUpdated();
    }
    updateCornerDimensions() {
        const cornerDimensions = this.getCornerDimensions();
        this.style.setProperty('--post-selection-corner-horizontal-length', toPixels(cornerDimensions.length));
        this.style.setProperty('--post-selection-corner-vertical-length', toPixels(cornerDimensions.length));
        this.style.setProperty('--post-selection-corner-radius', toPixels(cornerDimensions.radius));
        this.style.setProperty('--post-selection-cutout-corner-radius', toPixels(cornerDimensions.cutoutRadius));
        if (this.multiRegionSelectionEnabled) {
            this.style.setProperty('--static-region-corner-radius', toPixels(STATIC_REGION_RADIUS_PX));
        }
    }
    triggerNewBoxAnimation() {
        const parentBoundingRect = this.selectionOverlayRect;
        if (!parentBoundingRect || parentBoundingRect.width === 0 ||
            parentBoundingRect.height === 0) {
            // Renderer has probably not been sized yet. Defer until resize.
            this.animateOnResize = true;
            return;
        }
        this.newBoxAnimation = this.animate(this.getNewBoxAnimationKeyframes(), {
            duration: 450,
            easing: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        });
        this.newBoxAnimation.onfinish = () => {
            this.newBoxAnimation = null;
        };
    }
    getNewBoxAnimationKeyframes() {
        const parentBoundingRect = this.selectionOverlayRect;
        const cornerDimensions = this.getCornerDimensions();
        if (!parentBoundingRect) {
            return [];
        }
        return [
            {
                [`--post-selection-corner-horizontal-length`]: toPixels(parentBoundingRect.width * this.width / 2),
                [`--post-selection-corner-vertical-length`]: toPixels(parentBoundingRect.height * this.height / 2),
            },
            {
                [`--post-selection-corner-horizontal-length`]: toPixels(cornerDimensions.length),
                [`--post-selection-corner-vertical-length`]: toPixels(cornerDimensions.length),
            },
        ];
    }
    getCornerDimensions() {
        const imageBounds = this.selectionOverlayRect;
        if (!imageBounds || imageBounds.width === 0 || imageBounds.height === 0 ||
            !this.hasSelection()) {
            // Renderer has probably not been sized yet or there is no selection.
            // Return default values.
            return {
                length: MAX_CORNER_LENGTH_PX,
                radius: MAX_CORNER_RADIUS_PX,
                cutoutRadius: CUTOUT_RADIUS_PX,
            };
        }
        const shortestSide = Math.min(this.width * imageBounds.width, this.height * imageBounds.height);
        const length = Math.min(shortestSide / 2, MAX_CORNER_LENGTH_PX);
        const radius = Math.min(shortestSide / 3, MAX_CORNER_RADIUS_PX);
        // Do not use a cutout radius at small radii to prevent gaps.
        const cutoutRadius = radius > CUTOUT_RADIUS_THRESHOLD_PX ? CUTOUT_RADIUS_PX : 0;
        return { length, radius, cutoutRadius };
    }
    notifyPostSelectionUpdated() {
        this.dispatchEvent(new CustomEvent('post-selection-updated', {
            bubbles: true,
            composed: true,
            detail: {
                top: this.top,
                left: this.left,
                width: this.width,
                height: this.height,
                centerRotatedBox: this.getNormalizedCenterRotatedBox(),
            },
        }));
    }
    // Returns if the current bounds are being updated.
    areBoundsChanging() {
        return this.originalBounds.top !== this.top ||
            this.originalBounds.left !== this.left ||
            this.originalBounds.height !== this.height ||
            this.originalBounds.width !== this.width;
    }
    /**
     * @return Returns the drag target at the given point.
     */
    dragTargetFromPoint(x, y) {
        const topMostElements = this.shadowRoot.elementsFromPoint(x, y);
        const topMostDraggableElement = topMostElements.find(el => {
            return (el instanceof HTMLElement) &&
                el.classList.contains('corner-hit-box');
        });
        if (!topMostDraggableElement) {
            return DragTarget.NONE;
        }
        switch (topMostDraggableElement.id) {
            case 'topLeft':
                return DragTarget.TOP_LEFT;
            case 'topRight':
                return DragTarget.TOP_RIGHT;
            case 'bottomRight':
                return DragTarget.BOTTOM_RIGHT;
            case 'bottomLeft':
                return DragTarget.BOTTOM_LEFT;
            default:
                // Did not click on a target we care about.
                break;
        }
        return DragTarget.NONE;
    }
    shouldHandleGestureStart() {
        return this.currentDragTarget !== DragTarget.NONE;
    }
    // Converts the current region to a CenterRotatedBox
    getNormalizedCenterRotatedBox() {
        return {
            box: {
                x: this.left + (this.width / 2),
                y: this.top + (this.height / 2),
                width: this.width,
                height: this.height,
            },
            rotation: 0,
            coordinateType: CenterRotatedBox_CoordinateType.kNormalized,
        };
    }
    getScrimStyleProperties() {
        // If there is no selection, set opacity to zero to trigger fade out
        // CSS transition.
        return !this.hasSelection() ? 'opacity: 0;' : '';
    }
    // Used in HTML template to know if there is currently a selection to render.
    hasSelection(height = this.height, width = this.width, activePolylinePoints = this.activePolylinePoints) {
        return (width > 0 && height > 0) || activePolylinePoints.length > 0;
    }
    setSelectionOverlayRectForTesting(rect) {
        this.selectionOverlayRect = rect;
    }
    getActiveRegionIdForTesting() {
        return this.activeRegionId;
    }
    setActiveRegionIdForTesting(id) {
        this.activeRegionId = id;
    }
    showPolylineCloseButton(multiRegionSelectionEnabled, activeRegionHasPolyline) {
        return multiRegionSelectionEnabled && activeRegionHasPolyline;
    }
}
customElements.define(PostSelectionRendererElement.is, PostSelectionRendererElement);
// Setup CSS Houdini API
CSS.paintWorklet.addModule('post_selection_paint_worklet.js');
// Variables controlling the rendered post selection
CSS.registerProperty({
    name: '--post-selection-corner-horizontal-length',
    syntax: '<length>',
    inherits: true,
    initialValue: '22px',
});
CSS.registerProperty({
    name: '--post-selection-corner-vertical-length',
    syntax: '<length>',
    inherits: true,
    initialValue: '22px',
});
CSS.registerProperty({
    name: '--post-selection-corner-width',
    syntax: '<length>',
    inherits: true,
    initialValue: '4px',
});
CSS.registerProperty({
    name: '--post-selection-corner-radius',
    syntax: '<length>',
    inherits: true,
    initialValue: '14px',
});
