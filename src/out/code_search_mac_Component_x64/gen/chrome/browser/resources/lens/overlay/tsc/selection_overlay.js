// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './object_layer.js';
import './simplified_text_layer.js';
import './text_layer.js';
import './region_selection.js';
import './post_selection_renderer.js';
import './overlay_border_glow.js';
import './overlay_shimmer_canvas.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { CursorTooltipType } from './cursor_tooltip.js';
import { UserAction } from './lens.mojom-webui.js';
import { INVOCATION_SOURCE } from './lens_overlay_app.js';
import { ContextMenuOption, recordContextMenuOptionShown, recordLensOverlayInteraction, recordLensOverlaySelectionCloseButtonShown, recordLensOverlaySelectionCloseButtonUsed } from './metrics_utils.js';
import { getTemplate } from './selection_overlay.html.js';
import { CURSOR_IMG_URL, SelectionOverlayBaseElement } from './selection_overlay_base.js';
import { DragFeature, GestureState } from './selection_utils.js';
import { toPercent } from './values_converter.js';
// Returns true if the event is a keystroke that should not activate a control.
function shouldIgnoreKeyboardEvent(event) {
    return event instanceof KeyboardEvent &&
        !(event.key === 'Enter' || event.key === ' ');
}
/*
 * Element responsible for coordinating selections between the various selection
 * features. This includes:
 *   - Storing state needed to coordinate selections across features
 *   - Listening to mouse/tap events and delegating them to the correct features
 *   - Coordinating animations between the different features
 */
export class SelectionOverlayElement extends SelectionOverlayBaseElement {
    static get is() {
        return 'lens-selection-overlay';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            showTranslateContextMenuItem: {
                type: Boolean,
                reflectToAttribute: true,
                value: true,
            },
            showSelectedTextContextMenu: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showSelectedRegionContextMenu: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showDetectedTextContextMenuOptions: {
                type: Boolean,
                reflectToAttribute: true,
            },
            selectedTextContextMenuX: Number,
            selectedTextContextMenuY: Number,
            selectedRegionContextMenuX: Number,
            selectedRegionContextMenuY: Number,
            selectedRegionContextMenuHorizontalStyle: String,
            selectedRegionContextMenuVerticalStyle: String,
            enableCopyAsImage: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('enableCopyAsImage'),
            },
            enableSaveAsImage: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('enableSaveAsImage'),
            },
            suppressCopyAndSaveAsImage: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => {
                    return loadTimeData.getString('invocationSource') ===
                        'ContentAreaContextMenuImage';
                },
            },
            translateModeEnabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            isSearchboxFocused: Boolean,
            areLanguagePickersOpen: Boolean,
        };
    }
    // The selected region on which the context menu is being displayed. Used as
    // argument for copy and save as image calls.
    selectedRegionContextMenuBox;
    highlightedText = '';
    contentLanguage = '';
    textSelectionStartIndex = -1;
    textSelectionEndIndex = -1;
    detectedTextStartIndex = -1;
    detectedTextEndIndex = -1;
    isPointerInsideButton = false;
    browserProxy = BrowserProxyImpl.getInstance();
    // Whether the close button used metric was recorded in this session.
    closeButtonUsedRecorded = false;
    // Whether the region context menu was shown for the current selection.
    menuWasShownForCurrentSelection = false;
    backgroundImageCanvas() {
        return this.$.backgroundImageCanvas;
    }
    cursor() {
        return this.$.cursor;
    }
    initialFlashScrim() {
        return this.$.initialFlashScrim;
    }
    overlayShimmerCanvas() {
        return this.$.overlayShimmerCanvas;
    }
    postSelectionRenderer() {
        return this.$.postSelectionRenderer;
    }
    regionSelectionLayer() {
        return this.$.regionSelectionLayer;
    }
    selectionOverlay() {
        return this.$.selectionOverlay;
    }
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds = [
            ...this.listenerIds,
            this.browserProxy.callbackRouter.onCopyCommand.addListener(this.onCopyCommand.bind(this)),
            this.browserProxy.callbackRouter.notifyResultsPanelOpened.addListener(this.onNotifyResultsPanelOpened.bind(this)),
        ];
        this.eventTracker_.add(document, 'translate-mode-state-changed', (e) => {
            this.showTranslateContextMenuItem = !e.detail.translateModeEnabled;
            this.translateModeEnabled = e.detail.translateModeEnabled;
            // Resetting the cursor will properly set it to text or normal
            // based on the current translate mode.
            this.resetCursor();
        });
        this.eventTracker_.add(document, 'show-selected-text-context-menu', (e) => {
            this.selectedTextContextMenuX = e.detail.left;
            this.selectedTextContextMenuY = e.detail.bottom;
            this.highlightedText = e.detail.text;
            this.contentLanguage = e.detail.contentLanguage;
            this.textSelectionStartIndex = e.detail.selectionStartIndex;
            this.textSelectionEndIndex = e.detail.selectionEndIndex;
            this.setShowSelectedTextContextMenu(true);
        });
        this.eventTracker_.add(document, 'restore-selected-text-context-menu', () => {
            // show-selected-text-context-menu or
            // update-selected-text-context-menu must be triggered first so that
            // instance variables are set.
            this.setShowSelectedTextContextMenu(true);
        });
        this.eventTracker_.add(document, 'update-selected-text-context-menu', (e) => {
            this.selectedTextContextMenuX = e.detail.left;
            this.selectedTextContextMenuY = e.detail.bottom;
            this.highlightedText = e.detail.text;
            this.contentLanguage = e.detail.contentLanguage;
            this.textSelectionStartIndex = e.detail.selectionStartIndex;
            this.textSelectionEndIndex = e.detail.selectionEndIndex;
        });
        this.eventTracker_.add(document, 'hide-selected-text-context-menu', () => {
            this.setShowSelectedTextContextMenu(false);
            this.textSelectionStartIndex = -1;
            this.textSelectionEndIndex = -1;
        });
        this.eventTracker_.add(document, 'update-selected-region-context-menu', (e) => {
            this.updateSelectedRegionContextMenu(e.detail);
            this.positionSelectedRegionContextMenu();
            if (!this.menuWasShownForCurrentSelection &&
                this.showDetectedTextContextMenuOptions) {
                this.setShowSelectedRegionContextMenu(true);
                this.menuWasShownForCurrentSelection = true;
            }
        });
        this.eventTracker_.add(document, 'show-selected-region-context-menu', (e) => {
            this.updateSelectedRegionContextMenu(e.detail);
            const shouldShow = (!this.suppressCopyAndSaveAsImage &&
                (this.enableCopyAsImage || this.enableSaveAsImage)) ||
                this.showDetectedTextContextMenuOptions;
            this.setShowSelectedRegionContextMenu(shouldShow);
            if (shouldShow) {
                this.menuWasShownForCurrentSelection = true;
            }
            this.positionSelectedRegionContextMenu();
            // Send an event to the post selection renderer to darken the scrim if
            // text is found within the region so that text gleams are visible.
            if (this.showDetectedTextContextMenuOptions) {
                this.dispatchEvent(new CustomEvent('text-found-in-region', {
                    bubbles: true,
                    composed: true,
                }));
            }
        });
        this.eventTracker_.add(document, 'restore-selected-region-context-menu', () => {
            // show-selected-region-context-menu may not have been called yet if
            // we are still waiting for the text layer to receive text. Check for
            // this condition by checking if the box has been set.
            if (this.selectedRegionContextMenuBox !== undefined) {
                this.setShowSelectedRegionContextMenu((!this.suppressCopyAndSaveAsImage &&
                    (this.enableCopyAsImage || this.enableSaveAsImage)) ||
                    this.showDetectedTextContextMenuOptions);
                this.positionSelectedRegionContextMenu();
            }
        });
        this.eventTracker_.add(document, 'hide-selected-region-context-menu', () => {
            this.setShowSelectedRegionContextMenu(false);
            this.detectedTextStartIndex = -1;
            this.detectedTextEndIndex = -1;
        });
        this.eventTracker_.add(document, 'post-selection-updated', (e) => {
            this.selectedRegionContextMenuBox = e.detail.centerRotatedBox;
            this.selectedRegionContextMenuX =
                this.selectedRegionContextMenuBox.box.x -
                    this.selectedRegionContextMenuBox.box.width / 2;
            this.selectedRegionContextMenuY =
                this.selectedRegionContextMenuBox.box.y +
                    this.selectedRegionContextMenuBox.box.height / 2;
        });
    }
    shouldIgnoreEvent(event) {
        if (super.shouldIgnoreEvent(event)) {
            return true;
        }
        const elementsAtPoint = this.shadowRoot.elementsFromPoint(event.clientX, event.clientY);
        // Do not intercept events that should go to the following elements.
        if (elementsAtPoint.includes(this.$.selectedTextContextMenu) ||
            elementsAtPoint.includes(this.$.selectedRegionContextMenu) ||
            elementsAtPoint.includes(this.$.closeButton)) {
            return true;
        }
        return false;
    }
    handlePointerEnter() {
        super.handlePointerEnter();
        if (!this.isPointerInsideButton) {
            this.dispatchEvent(new CustomEvent('set-cursor-tooltip', {
                bubbles: true,
                composed: true,
                detail: {
                    tooltipType: this.translateModeEnabled ?
                        CursorTooltipType.TEXT_HIGHLIGHT :
                        CursorTooltipType.REGION_SEARCH,
                },
            }));
        }
    }
    handleRightClick(event) {
        if (this.$.textLayer.handleRightClick(event)) {
            return;
        }
        super.handleRightClick(event);
    }
    // LINT.IfChange(CursorOffsetValues)
    // Called on text hover and drag.
    setCursorToText() {
        // Set body cursor style to handle dragging.
        document.body.style.cursor = 'text';
        this.cursorOffsetX = 3;
        this.cursorOffsetY = 8;
        this.style.setProperty(CURSOR_IMG_URL, 'url("text.svg")');
    }
    // Called on region selection drag.
    setCursorToCrosshair() {
        // Set body cursor style to handle dragging.
        document.body.style.cursor = 'crosshair';
        this.cursorOffsetX = 3;
        this.cursorOffsetY = 6;
        this.style.setProperty(CURSOR_IMG_URL, 'url("lens.svg")');
    }
    // Called on object hover.
    setCursorToPointer() {
        // No dragging for objects, so no need to set body cursor style.
        this.cursorOffsetX = 11;
        this.cursorOffsetY = 17;
        this.style.setProperty(CURSOR_IMG_URL, 'url("lens.svg")');
    }
    resetCursor() {
        if (this.translateModeEnabled) {
            // If translate mode is enabled, the default cursor state should be
            // text.
            this.setCursorToText();
            return;
        }
        document.body.style.cursor = 'unset';
        this.cursorOffsetX = 3;
        this.cursorOffsetY = 6;
        this.style.setProperty(CURSOR_IMG_URL, 'url("lens.svg")');
    }
    // LINT.ThenChange(//chrome/browser/resources/lens/overlay/cursor_tooltip.ts:CursorOffsetValues)
    pointerDownHandled() {
        // If searchbox is stealing focus, we only want to respond to drag gestures,
        // so wait to send gesture started until a drag has happened. This is also
        // the case if the language pickers are currently open.
        if (!this.isSearchboxFocused && !this.areLanguagePickersOpen) {
            // If searchbox isn't stealing focus, start the gesture ASAP.
            this.handleGestureStart();
        }
    }
    handleGestureStart() {
        this.suppressCopyAndSaveAsImage = false;
        super.handleGestureStart();
        this.dispatchEvent(new CustomEvent('selection-started', { bubbles: true, composed: true }));
        // The context menu should have text reset whenever a new selection is
        // started.
        this.detectedTextStartIndex = -1;
        this.detectedTextEndIndex = -1;
        this.showDetectedTextContextMenuOptions = false;
        this.menuWasShownForCurrentSelection = false;
        this.$.textLayer.onSelectionStart();
        if (this.$.postSelectionRenderer.handleGestureStart(this.currentGesture)) {
            this.draggingRespondent = DragFeature.POST_SELECTION;
        }
        else if (this.$.textLayer.handleGestureStart(this.currentGesture)) {
            // Text is responding to this sequence of gestures.
            this.draggingRespondent = DragFeature.TEXT;
            this.$.postSelectionRenderer.clearSelection();
        }
    }
    handleGestureDrag(event) {
        assert(this.currentGesture.state === GestureState.DRAGGING);
        // Capture pointer events so gestures still work if the users pointer
        // leaves the selection overlay div. Pointer capture is implicitly
        // released after pointerup or pointercancel events.
        this.setPointerCapture(event.pointerId);
        if (this.draggingRespondent === DragFeature.TEXT) {
            this.setCursorToText();
            this.$.textLayer.handleGestureDrag(this.currentGesture);
        }
        else if (this.draggingRespondent === DragFeature.POST_SELECTION) {
            this.$.postSelectionRenderer.handleGestureDrag(this.currentGesture);
        }
        else if (!this.translateModeEnabled) {
            // Let the features respond to the current drag if no other feature
            // responded first, but only if translate mode is not enabled.
            // The dragging responding may not be TEXT in translate mode if
            // there is no selectable text.
            this.setCursorToCrosshair();
            this.draggingRespondent = DragFeature.MANUAL_REGION;
            this.$.postSelectionRenderer.clearSelection();
            // TODO(crbug.com/421002691): follow the convention where the layer
            // should return true if its handling the gesture, and draggingRespondent
            // should be updated. Currently used to trigger the fade in of the
            // darkened scrim.
            this.$.regionSelectionLayer.handleGestureStart();
            this.$.regionSelectionLayer.handleGestureDrag(this.currentGesture);
        }
    }
    handleGestureEnd() {
        // Call onSelectionFinish before gesture is handled so the simplified text
        // layer can reset the context menu.
        this.$.textLayer.onSelectionFinish();
        // Allow proper feature to respond to the tap/drag event.
        switch (this.currentGesture.state) {
            case GestureState.DRAGGING:
                // Drag has finished. Let the features respond to the end of a drag.
                if (this.draggingRespondent === DragFeature.MANUAL_REGION) {
                    this.$.regionSelectionLayer.handleGestureEnd(this.currentGesture);
                }
                else if (this.draggingRespondent === DragFeature.TEXT) {
                    this.$.textLayer.handleGestureEnd();
                }
                else if (this.draggingRespondent === DragFeature.POST_SELECTION) {
                    this.$.postSelectionRenderer.handleGestureEnd();
                    // Fade out scrim which is currently being managed by region selection
                    // TODO(crbug.com/420998632): move scrim out to its own component
                    this.$.regionSelectionLayer.handlePostSelectionDragGestureEnd();
                }
                break;
            case GestureState.STARTING:
                // This gesture was a tap. Let the features respond to a tap.
                if (this.draggingRespondent === DragFeature.TEXT) {
                    this.$.textLayer.handleGestureEnd();
                    break;
                }
                if (this.translateModeEnabled) {
                    // Don't allow clicks to select objects or regions if translate
                    // mode is enabled. The dragging respondent may not be TEXT if
                    // there is no selectable text on the screen at all.
                    break;
                }
                if (this.$.objectSelectionLayer.handleGestureEnd(this.currentGesture)) {
                    break;
                }
                this.$.regionSelectionLayer.handleGestureEnd(this.currentGesture);
                break;
            default: // Other states are invalid and ignored.
                break;
        }
        this.resetCursor();
        this.dispatchEvent(new CustomEvent('selection-finished', {
            bubbles: true,
            composed: true,
        }));
    }
    handleGestureCancel() {
        this.$.textLayer.cancelGesture();
        super.handleGestureCancel();
    }
    resizeSelectionCanvases(newWidth, newHeight) {
        this.positionSelectedRegionContextMenu();
        this.$.objectSelectionLayer.setCanvasSizeTo(newWidth, newHeight);
        super.resizeSelectionCanvases(newWidth, newHeight);
    }
    setSidePanelOpened() {
        super.setSidePanelOpened();
    }
    // Repositions the context menu to keep it inside the viewport.
    positionSelectedRegionContextMenu() {
        if (!this.selectedRegionContextMenuBox) {
            return;
        }
        const left = this.selectedRegionContextMenuBox.box.x -
            this.selectedRegionContextMenuBox.box.width / 2;
        const top = this.selectedRegionContextMenuBox.box.y -
            this.selectedRegionContextMenuBox.box.height / 2;
        const bottom = this.selectedRegionContextMenuBox.box.y +
            this.selectedRegionContextMenuBox.box.height / 2;
        // First try to left-align to region.
        this.selectedRegionContextMenuHorizontalStyle =
            `left: ${toPercent(left)}; `;
        if (this.$.selectedRegionContextMenu.offsetLeft +
            this.$.selectedRegionContextMenu.offsetWidth >
            this.canvasWidth) {
            // If menu overflows right, right-align to region.
            this.selectedRegionContextMenuHorizontalStyle = `right: 0; `;
            if (this.$.selectedRegionContextMenu.offsetLeft < 0) {
                // If menu overflows left, allow constraining on both sides.
                this.selectedRegionContextMenuHorizontalStyle = ` `;
            }
        }
        // First try to position below region.
        this.selectedRegionContextMenuVerticalStyle =
            `top: calc(${toPercent(bottom)} + 12px)`;
        if (this.$.selectionOverlay.offsetTop +
            this.$.selectedRegionContextMenu.offsetTop +
            this.$.selectedRegionContextMenu.offsetHeight >
            window.innerHeight) {
            // If menu overflows bottom, position above region.
            this.selectedRegionContextMenuVerticalStyle =
                `bottom: calc(${toPercent(1 - top)} + 12px);`;
            if (this.$.selectionOverlay.offsetTop +
                this.$.selectedRegionContextMenu.offsetTop <
                0) {
                // If menu overflows top, position at top of viewport, overlapping the
                // region.
                this.selectedRegionContextMenuVerticalStyle =
                    `bottom: calc(${toPercent(1 - top)} + 12px + ${this.$.selectionOverlay.offsetTop +
                        this.$.selectedRegionContextMenu.offsetTop}px);`;
            }
        }
    }
    getContextMenuStyle(contextMenuX, contextMenuY) {
        return `left: ${toPercent(contextMenuX)}; top: calc(${toPercent(contextMenuY)} + 12px)`;
    }
    // This handles the copying of currently selected text on the overlay. This
    // differs from handleCopyDetectedText() since text must be selected in order
    // to copy.
    handleCopy(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        this.copyText(this.textSelectionStartIndex, this.textSelectionEndIndex, this.highlightedText);
    }
    // This handles the copying of detected text on the overlay within a selected
    // region. This differs from handleCopy() since text does not need to be
    // selected to support this copy.
    handleCopyDetectedText(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        this.setShowSelectedRegionContextMenu(false);
        this.$.textLayer.onCopyDetectedText(this.detectedTextStartIndex, this.detectedTextEndIndex, this.copyText.bind(this));
    }
    copyText(textStartIndex, textEndIndex, text) {
        if (textStartIndex < 0 || textEndIndex < 0) {
            return;
        }
        this.browserProxy.handler.copyText(text);
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kCopyText);
        this.dispatchEvent(new CustomEvent('text-copied', {
            bubbles: true,
            composed: true,
        }));
        this.setShowSelectedTextContextMenu(false);
        this.setShowSelectedRegionContextMenu(false);
    }
    handleSelectText(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        this.$.textLayer.selectAndSendWords(this.detectedTextStartIndex, this.detectedTextEndIndex);
        this.$.postSelectionRenderer.clearSelection();
    }
    handleTranslateDetectedText(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        this.$.textLayer.selectAndTranslateWords(this.detectedTextStartIndex, this.detectedTextEndIndex);
        // Do not clear the post selection renderer. Instead, just hide the region
        // context menu manually.
        this.setShowSelectedRegionContextMenu(false);
    }
    handleTranslate(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        BrowserProxyImpl.getInstance().handler.issueTranslateSelectionRequest(this.highlightedText.replaceAll('\r\n', ' '), this.contentLanguage, this.textSelectionStartIndex, this.textSelectionEndIndex);
        this.setShowSelectedTextContextMenu(false);
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kTranslateText);
    }
    handleCopyAsImage(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        BrowserProxyImpl.getInstance().handler.copyImage(this.selectedRegionContextMenuBox);
        this.setShowSelectedRegionContextMenu(false);
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kCopyAsImage);
        this.dispatchEvent(new CustomEvent('copied-as-image', {
            bubbles: true,
            composed: true,
        }));
    }
    handleSaveAsImage(event) {
        if (shouldIgnoreKeyboardEvent(event)) {
            return;
        }
        BrowserProxyImpl.getInstance().handler.saveAsImage(this.selectedRegionContextMenuBox);
        this.setShowSelectedRegionContextMenu(false);
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kSaveAsImage);
    }
    // Make the cursor disappear when entering selectable buttons, as if leaving
    // the overlay.
    handlePointerEnterButton() {
        this.isPointerInside = false;
        this.isPointerInsideButton = true;
        // Hide the cursor tooltip.
        this.dispatchEvent(new CustomEvent('set-cursor-tooltip', {
            bubbles: true,
            composed: true,
            detail: { tooltipType: CursorTooltipType.NONE },
        }));
    }
    handlePointerLeaveButton() {
        this.isPointerInside = true;
        this.isPointerInsideButton = false;
        // Reshow the cursor tooltip.
        this.dispatchEvent(new CustomEvent('set-cursor-tooltip', {
            bubbles: true,
            composed: true,
            detail: {
                tooltipType: this.translateModeEnabled ?
                    CursorTooltipType.TEXT_HIGHLIGHT :
                    CursorTooltipType.REGION_SEARCH,
            },
        }));
    }
    // Sets the text context menu to be visible or not, and logs the shown
    // context menu options.
    setShowSelectedTextContextMenu(shouldShow) {
        if (shouldShow && !this.showSelectedTextContextMenu) {
            // If the context menu was not being shown earlier, but will be now, log
            // the shown context menu options.
            recordContextMenuOptionShown(INVOCATION_SOURCE, ContextMenuOption.COPY_TEXT);
            if (this.showTranslateContextMenuItem) {
                recordContextMenuOptionShown(INVOCATION_SOURCE, ContextMenuOption.TRANSLATE_TEXT);
            }
        }
        this.showSelectedTextContextMenu = shouldShow;
    }
    // Sets the region context menu to be visible or not, and logs the shown
    // context menu options.
    setShowSelectedRegionContextMenu(shouldShow) {
        if (shouldShow && !this.showSelectedRegionContextMenu) {
            // If the context menu was not being shown earlier, but will be now, log
            // the shown context menu options.
            if (this.showDetectedTextContextMenuOptions) {
                // A copy text in region context menu option is shown.
                recordContextMenuOptionShown(INVOCATION_SOURCE, ContextMenuOption.COPY_TEXT_IN_REGION);
                if (this.showTranslateContextMenuItem) {
                    recordContextMenuOptionShown(INVOCATION_SOURCE, ContextMenuOption.TRANSLATE_TEXT_IN_REGION);
                }
            }
            if (!this.suppressCopyAndSaveAsImage) {
                if (this.enableCopyAsImage) {
                    recordContextMenuOptionShown(INVOCATION_SOURCE, ContextMenuOption.COPY_AS_IMAGE);
                }
                if (this.enableSaveAsImage) {
                    recordContextMenuOptionShown(INVOCATION_SOURCE, ContextMenuOption.SAVE_AS_IMAGE);
                }
            }
        }
        this.showSelectedRegionContextMenu = shouldShow;
    }
    onCopyCommand() {
        this.$.textLayer.onCopyDetectedText(this.detectedTextStartIndex, this.detectedTextEndIndex, this.copyText.bind(this));
    }
    updateSelectedRegionContextMenu(data) {
        this.selectedRegionContextMenuX = data.box.box.x - data.box.box.width / 2;
        this.selectedRegionContextMenuY = data.box.box.y + data.box.box.height / 2;
        this.selectedRegionContextMenuBox = data.box;
        this.detectedTextStartIndex = data.selectionStartIndex;
        this.detectedTextEndIndex = data.selectionEndIndex;
        this.showDetectedTextContextMenuOptions =
            this.detectedTextStartIndex !== -1 && this.detectedTextEndIndex !== -1;
        this.highlightedText = data.text ?? this.highlightedText;
    }
    onNotifyResultsPanelOpened() {
        // No-op if the side panel was already opened.
        if (this.sidePanelOpened) {
            return;
        }
        // The close button should be showing on the selection overlay. Record this
        // as a close button impression if the side panel was not already opened.
        recordLensOverlaySelectionCloseButtonShown(INVOCATION_SOURCE);
        this.sidePanelOpened = true;
    }
    onCloseButtonClick() {
        // If the user manages to click the close button multiple times, only
        // record the first click. This is to avoid overcounting the number of
        // times the close button is used.
        if (!this.closeButtonUsedRecorded) {
            recordLensOverlaySelectionCloseButtonUsed(INVOCATION_SOURCE);
            this.closeButtonUsedRecorded = true;
        }
        this.browserProxy.handler.closeRequestedByOverlayCloseButton();
    }
    onFinishReshowOverlay() {
        recordLensOverlaySelectionCloseButtonShown(INVOCATION_SOURCE);
        super.onFinishReshowOverlay();
    }
    getShowSelectedRegionContextMenuForTesting() {
        return this.showSelectedRegionContextMenu;
    }
    getShowSelectedTextContextMenuForTesting() {
        return this.showSelectedTextContextMenu;
    }
    getShowDetectedTextContextMenuOptionsForTesting() {
        return this.showDetectedTextContextMenuOptions;
    }
    getSuppressCopyAndSaveAsImageForTesting() {
        return this.suppressCopyAndSaveAsImage;
    }
    handleSelectTextForTesting() {
        this.handleSelectText();
    }
    handleTranslateDetectedTextForTesting() {
        this.handleTranslateDetectedText();
    }
    handleCopyForTesting() {
        this.handleCopy();
    }
    handleCopyDetectedTextForTesting() {
        this.handleCopyDetectedText();
    }
    handleTranslateForTesting() {
        this.handleTranslate();
    }
    handleCopyAsImageForTesting() {
        this.handleCopyAsImage();
    }
    handleSaveAsImageForTesting() {
        this.handleSaveAsImage();
    }
    setSearchboxFocusForTesting(isFocused) {
        this.isSearchboxFocused = isFocused;
    }
    setLanguagePickersOpenForTesting(open) {
        this.areLanguagePickersOpen = open;
    }
}
customElements.define(SelectionOverlayElement.is, SelectionOverlayElement);
