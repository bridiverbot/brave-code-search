// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './cursor_tooltip.js';
import './initial_gradient.js';
import './selection_overlay.js';
import './translate_button.js';
import '/lens/shared/searchbox_ghost_loader.js';
import '/lens/shared/searchbox_shared_style.css.js';
import '/lens/shared/searchbox/lens_searchbox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/icons.html.js';
import { HelpBubbleMixin } from '//resources/cr_components/help_bubble/help_bubble_mixin.js';
import { I18nMixin } from '//resources/cr_elements/i18n_mixin.js';
import { assert } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { CursorTooltipType } from './cursor_tooltip.js';
import { UserAction } from './lens.mojom-webui.js';
import { getTemplate } from './lens_overlay_app.html.js';
import { recordLensOverlayInteraction, recordTimeToWebUIReady } from './metrics_utils.js';
import { PageContentType } from './page_content_type.mojom-webui.js';
import { PerformanceTracker } from './performance_tracker.js';
import { handleEscapeSearchbox } from './searchbox_utils.js';
import { focusShimmerOnRegion, ShimmerControlRequester, unfocusShimmer } from './selection_utils.js';
export let INVOCATION_SOURCE = 'Unknown';
const LensOverlayAppElementBase = HelpBubbleMixin(I18nMixin(PolymerElement));
export class LensOverlayAppElement extends LensOverlayAppElementBase {
    static get is() {
        return 'lens-overlay-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            autocompleteRequestStarted: {
                type: Boolean,
                value: false,
            },
            enableBorderGlow: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableBorderGlow'),
            },
            enableCsbMotionTweaks: {
                reflectToAttribute: true,
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableCsbMotionTweaks'),
            },
            forceHideSearchBox: {
                type: Boolean,
                value: false,
            },
            isImageRendered: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            initialFlashAnimationHasEnded: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            sidePanelOpened: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('isSidePanelOpen'),
            },
            searchBoxHidden: {
                type: Boolean,
                computed: 'computeShouldHideSearchBox(isTranslateModeActive, sidePanelOpened, forceHideSearchBox)',
                reflectToAttribute: true,
            },
            privacyNoticeHidden: {
                type: Boolean,
                computed: 'computeShouldHidePrivacyNotice(isTranslateModeActive, forceHideSearchBox)',
                reflectToAttribute: true,
            },
            isClosing: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            moreOptionsMenuVisible: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            isPointerDown: {
                type: Boolean,
                value: false,
            },
            isTranslateButtonEnabled: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableOverlayTranslateButton'),
                readOnly: true,
                reflectToAttribute: true,
            },
            isTranslateModeActive: {
                type: Boolean,
                value: false,
            },
            shouldFadeOutButtons: {
                type: Boolean,
                computed: 'computeShouldFadeOutButtons(isTranslateModeActive, ' +
                    'isPointerDown)',
                reflectToAttribute: true,
            },
            isLensOverlayContextualSearchboxEnabled: {
                type: Boolean,
                reflectToAttribute: true,
                readOnly: true,
                value: () => loadTimeData.getBoolean('enableOverlayContextualSearchbox'),
            },
            isLensOverlayContextualSearchboxVisible: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            isRoutingToContextualTasks: {
                type: Boolean,
                reflectToAttribute: true,
                readOnly: true,
                value: () => loadTimeData.getBoolean('isRoutingToContextualTasks'),
            },
            darkMode: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('darkMode'),
                reflectToAttribute: true,
            },
            isSearchboxFocused: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            suppressGhostLoader: {
                type: Boolean,
                value: false,
            },
            enableGhostLoader: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableGhostLoader'),
            },
            showGhostLoader: {
                type: Boolean,
                computed: `computeShowGhostLoader(
                enableGhostLoader,
                isSearchboxFocused,
                autocompleteRequestStarted,
                showErrorState,
                suppressGhostLoader)`,
                reflectToAttribute: true,
            },
            pageContentType: {
                type: Number,
                value: PageContentType.kUnknown,
            },
            placeholderText: {
                type: String,
                computed: `computePlaceholderText(pageContentType)`,
            },
            showErrorState: {
                type: Boolean,
                value: false,
                notify: true,
            },
            areLanguagePickersOpen: {
                type: Boolean,
                value: false,
            },
            toastMessage: {
                type: String,
                value: '',
            },
            enableCloseButtonTweaks: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableCloseButtonTweaks'),
                reflectToAttribute: true,
            },
            enableVisualSelectionUpdates: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableVisualSelectionUpdates'),
                reflectToAttribute: true,
            },
            searchboxSuggestionCount: {
                type: Number,
                value: 0,
            },
            canAnimateInCloseButton: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            overlayReshowInProgress: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            isPrivacyNoticeVisible: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('enablePrivacyNotice'),
            },
            hasPermissionsForSession: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('hasPermissionsForSession'),
            },
        };
    }
    // Whether the contextual searchbox should be auto-focused when the overlay is
    // first opened.
    autoFocusSearchbox = loadTimeData.getBoolean('autoFocusSearchbox') &&
        !loadTimeData.getBoolean('enablePrivacyNotice');
    // The performance tracker used to log performance metrics for the overlay.
    performanceTracker = new PerformanceTracker();
    // Whether the overlay has received notice that the handshake with the Lens
    // backend has completed. The handshake is required to send suggest requests.
    isBackendHandshakeComplete = false;
    // Whether to trigger the autocomplete request when suggest inputs are ready.
    triggerSuggestOnInputReady = loadTimeData.getBoolean('enablePrivacyNotice');
    eventTracker_ = new EventTracker();
    browserProxy = BrowserProxyImpl.getInstance();
    listenerIds;
    invocationTime = loadTimeData.getValue('invocationTime');
    searchboxBoundingClientRectObserver = new ResizeObserver(this.onSearchboxBoundsChanged.bind(this));
    resizeObserver = new ResizeObserver(this.handleResize.bind(this));
    // The ID returned by requestAnimationFrame for the updateCursorPosition
    // function.
    updateCursorPositionRequestId;
    // The ID returned by requestAnimationFrame for the handleResize
    // function.
    handleResizeRequestId;
    constructor() {
        super();
        this.browserProxy.handler.getOverlayInvocationSource().then(({ invocationSource }) => {
            INVOCATION_SOURCE = invocationSource;
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.resizeObserver.observe(document.body);
        const callbackRouter = this.browserProxy.callbackRouter;
        this.listenerIds = [
            callbackRouter.shouldShowContextualSearchBox.addListener(this.shouldShowContextualSearchBox.bind(this)),
            callbackRouter.notifyHandshakeComplete.addListener(this.onBackendHandshakeComplete.bind(this)),
            callbackRouter.notifyResultsPanelOpened.addListener(this.onNotifyResultsPanelOpened.bind(this)),
            callbackRouter.notifyOverlayClosing.addListener(() => {
                this.isClosing = true;
                this.moreOptionsMenuVisible = false;
                this.performanceTracker.endSession();
            }),
            callbackRouter.onOverlayReshown.addListener(() => {
                this.isClosing = false;
                this.moreOptionsMenuVisible = false;
                this.sidePanelOpened = true;
                this.overlayReshowInProgress = true;
                this.hasPermissionsForSession = true;
                this.performanceTracker.reset();
                this.performanceTracker.startSession();
                this.updatePrivacyNoticePosition(window.innerWidth, window.innerHeight);
            }),
            callbackRouter.suppressGhostLoader.addListener(this.suppressGhostLoader_.bind(this)),
            callbackRouter.pageContentTypeChanged.addListener(this.onPageContentTypeChanged.bind(this)),
        ];
        this.eventTracker_.add(document, 'set-cursor-tooltip', (e) => {
            this.$.cursorTooltip.setTooltip(e.detail.tooltipType);
        });
        this.eventTracker_.add(document, 'translate-mode-state-changed', (e) => {
            this.isTranslateModeActive = e.detail.translateModeEnabled;
        });
        this.eventTracker_.add(document, 'text-copied', () => {
            this.showToast(this.i18n('copyToastMessage'));
        });
        this.eventTracker_.add(document, 'copied-as-image', () => {
            this.showToast(this.i18n('copyAsImageToastMessage'));
        });
        this.eventTracker_.add(document, 'language-picker-closed', () => {
            this.handleLanguagePickerClosed();
        });
        this.eventTracker_.add(document, 'language-picker-opened', () => {
            this.handleLanguagePickersOpened();
        });
        this.eventTracker_.add(document, 'query-autocomplete', this.handleQueryAutocomplete.bind(this));
        this.eventTracker_.add(document, 'pointermove', this.updateCursorPosition.bind(this));
        this.eventTracker_.add(this.$.searchbox, 'mousedown', () => {
            this.suppressGhostLoader = false;
        });
        this.eventTracker_.add(this.$.selectionOverlay, 'on-finish-reshow-overlay', () => {
            if (!this.overlayReshowInProgress) {
                return;
            }
            this.overlayReshowInProgress = false;
            this.browserProxy.handler.finishReshowOverlay();
        });
        this.eventTracker_.add(this.$.moreOptions, 'focusout', this.onMoreOptionsFocusout.bind(this));
        this.performanceTracker.startSession();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(document.body);
        this.listenerIds.forEach(id => assert(this.browserProxy.callbackRouter.removeListener(id)));
        this.listenerIds = [];
        this.eventTracker_.removeAll();
    }
    ready() {
        super.ready();
        recordTimeToWebUIReady(Date.now() - this.invocationTime);
    }
    handlePointerEnter() {
        this.$.cursorTooltip.markPointerEnteredContentArea();
    }
    handlePointerLeave() {
        this.$.cursorTooltip.markPointerLeftContentArea();
    }
    handlePointerEnterBackgroundScrim() {
        this.$.cursorTooltip.setTooltip(CursorTooltipType.LIVE_PAGE);
        this.$.cursorTooltip.unhideTooltip();
    }
    handlePointerLeaveBackgroundScrim() {
        this.$.cursorTooltip.hideTooltip();
    }
    handlePointerEnterSelectionOverlay() {
        this.$.cursorTooltip.unhideTooltip();
    }
    handlePointerLeaveSelectionOverlay() {
        this.$.cursorTooltip.hideTooltip();
    }
    handleSearchboxFocused() {
        this.isPrivacyNoticeVisible = false;
        this.suppressGhostLoader = false;
        this.isSearchboxFocused = true;
        this.triggerSearchboxSuggestions();
        this.$.translateButtonContainer.classList.remove('searchbox-unfocused');
        this.focusShimmerOnSearchbox();
        // Setup a listener on the suggestions container to change the shimmer when
        // the searchbox changes sizes or the selection overlay changes size.
        this.searchboxBoundingClientRectObserver.observe(this.$.searchbox.getDropdownElement());
        this.searchboxBoundingClientRectObserver.observe(this.$.selectionOverlay);
    }
    // Called when the searchbox requests autocomplete suggestions.
    handleQueryAutocomplete(e) {
        // A request is only started for zero suggest, which is when the input value
        // is empty.
        this.autocompleteRequestStarted = !e.detail.inputValue;
        if (this.autocompleteRequestStarted && !window.navigator.onLine) {
            // If the user doesn't have an internet connection, the suggest request
            // will fail, so immediately show the error state.
            this.showErrorState = true;
            return;
        }
        this.showErrorState = false;
    }
    onSearchboxBoundsChanged() {
        this.focusShimmerOnSearchbox();
        this.searchboxSuggestionCount =
            this.$.searchbox.getDropdownElement().selectableMatchElements.length;
    }
    focusShimmerOnSearchbox() {
        const suggestionsContainer = this.$.searchbox.getDropdownElement();
        const areSuggestionsShowing = suggestionsContainer.offsetWidth * suggestionsContainer.offsetHeight >
            0;
        // If no suggestions are showing, default to the ghost loader size. If ghost
        // loader is not showing, default to the searchbox bounds.
        const newSearchboxWidth = areSuggestionsShowing ?
            suggestionsContainer.offsetWidth :
            (this.$.searchboxGhostLoader.offsetWidth > 0 ?
                this.$.searchboxGhostLoader.offsetWidth :
                this.$.searchbox.offsetWidth);
        const newSearchboxHeight = areSuggestionsShowing ?
            suggestionsContainer.offsetHeight :
            (this.$.searchboxGhostLoader.offsetHeight > 0 ?
                this.$.searchboxGhostLoader.offsetHeight :
                this.$.searchbox.offsetHeight);
        // Get the top and left position of the searchbox relative to the selection
        // overlay.
        const selectionOverlayRect = this.$.selectionOverlay.getBoundingRect();
        const newTop = this.$.searchboxContainer.offsetTop - selectionOverlayRect.top;
        const newLeft = this.$.searchboxContainer.offsetLeft - selectionOverlayRect.left;
        focusShimmerOnRegion(this, newTop / selectionOverlayRect.height, newLeft / selectionOverlayRect.width, newSearchboxWidth / selectionOverlayRect.width, newSearchboxHeight / selectionOverlayRect.height, ShimmerControlRequester.SEARCHBOX);
    }
    handleSearchboxBlurred(event) {
        // Ignore the blurred event if focus left one child element to enter another
        // child element.
        if (event.relatedTarget instanceof Node &&
            this.$.searchboxContainer.contains(event.relatedTarget)) {
            // TODO(380467089): This workaround wouldn't be needed if the ghost loader
            // was part of the searchbox element. Remove this workaround once they are
            // combined.
            return;
        }
        this.isSearchboxFocused = false;
        this.autocompleteRequestStarted = false;
        this.showErrorState = false;
        this.$.translateButtonContainer.classList.add('searchbox-unfocused');
        // Unfocus the shimmer.
        unfocusShimmer(this, ShimmerControlRequester.SEARCHBOX);
        // Disconnect the ResizeObserver.
        this.searchboxBoundingClientRectObserver.disconnect();
    }
    handleEscapeSearchbox(e) {
        handleEscapeSearchbox(this, this.$.searchbox, e);
    }
    handleLanguagePickersOpened() {
        this.areLanguagePickersOpen = true;
    }
    handleLanguagePickerClosed() {
        this.areLanguagePickersOpen = false;
    }
    onBackgroundScrimClicked() {
        this.browserProxy.handler.closeRequestedByOverlayBackgroundClick();
    }
    onCloseButtonClick() {
        this.browserProxy.handler.closeRequestedByOverlayCloseButton();
    }
    onFeedbackClick(event) {
        if (event instanceof KeyboardEvent &&
            !(event.key === 'Enter' || event.key === ' ')) {
            return;
        }
        this.browserProxy.handler.feedbackRequestedByOverlay();
        this.moreOptionsMenuVisible = false;
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kSendFeedback);
    }
    onLearnMoreClick(event) {
        if (event instanceof KeyboardEvent &&
            !(event.key === 'Enter' || event.key === ' ')) {
            return;
        }
        this.browserProxy.handler.infoRequestedByOverlay({
            middleButton: event.button === 1,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
        this.moreOptionsMenuVisible = false;
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kLearnMore);
    }
    computeShowGhostLoader() {
        // Ghost loader is disabled by the feature flag or suppressed by the
        // LensOverlayController. It is also disabled if permissions have not yet
        // been granted.
        if (!this.enableGhostLoader || this.suppressGhostLoader ||
            !this.hasPermissionsForSession) {
            return false;
        }
        // Show the ghost loader if there is focus on the searchbox, and there is
        // autcomplete is loading or if autocomplete failed.
        return this.isSearchboxFocused &&
            (this.autocompleteRequestStarted || this.showErrorState);
    }
    computePlaceholderText() {
        return this.pageContentType === PageContentType.kPdf ?
            this.i18n('searchBoxHintPdf') :
            this.i18n('searchBoxHintDefault');
    }
    suppressGhostLoader_() {
        // If tab is foregrounded don't show ghost loader.
        this.suppressGhostLoader = true;
    }
    onPageContentTypeChanged(newPageContentType) {
        this.pageContentType = newPageContentType;
    }
    onMoreOptionsButtonClick() {
        this.moreOptionsMenuVisible = !this.moreOptionsMenuVisible;
    }
    onMoreOptionsFocusout(event) {
        if (!this.moreOptionsMenuVisible) {
            return;
        }
        // `relatedTarget` is null when focus leaves the document entirely, which is
        // what happens when the user clicks outside of the overlay's WebContents
        // (e.g. on a side panel search result).
        const targetWithFocus = event.relatedTarget;
        if (!targetWithFocus || !(targetWithFocus instanceof Node) ||
            !this.$.moreOptions.contains(targetWithFocus)) {
            this.moreOptionsMenuVisible = false;
        }
    }
    onMyActivityClick(event) {
        if (event instanceof KeyboardEvent &&
            !(event.key === 'Enter' || event.key === ' ')) {
            return;
        }
        this.browserProxy.handler.activityRequestedByOverlay({
            middleButton: event.button === 1,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
        this.moreOptionsMenuVisible = false;
        recordLensOverlayInteraction(INVOCATION_SOURCE, UserAction.kMyActivity);
    }
    onBackendHandshakeComplete() {
        if (this.isBackendHandshakeComplete) {
            // The handshake should only be completed once on invocation. Ignore
            // subsequent calls just in case.
            return;
        }
        this.isBackendHandshakeComplete = true;
        // Trigger autocomplete if the handshake completed while the user is waiting
        // for suggest results.
        if (this.triggerSuggestOnInputReady && this.isSearchboxFocused) {
            this.triggerSearchboxSuggestions();
        }
        this.triggerSuggestOnInputReady = false;
    }
    onNotifyResultsPanelOpened() {
        this.sidePanelOpened = true;
        this.moreOptionsMenuVisible = false;
        this.updatePrivacyNoticePosition(window.innerWidth, window.innerHeight);
    }
    shouldShowContextualSearchBox(shouldShow) {
        this.isLensOverlayContextualSearchboxVisible =
            this.isLensOverlayContextualSearchboxEnabled && shouldShow;
        this.canAnimateInCloseButton = true;
    }
    // The user started making a selection on the selection overlay.
    handleSelectionStarted() {
        this.$.cursorTooltip.setPauseTooltipChanges(true);
        this.isPointerDown = true;
        this.forceHideSearchBox = true;
    }
    // The user finished making their selection on the selection overlay.
    handleSelectionFinished() {
        if (!this.enableBorderGlow) {
            this.$.initialGradient.triggerHideScrimAnimation();
        }
        this.$.cursorTooltip.setPauseTooltipChanges(false);
        this.isPointerDown = false;
    }
    onScreenshotRendered(e) {
        this.isImageRendered = true;
        this.sidePanelOpened = e.detail.isSidePanelOpen;
        this.updatePrivacyNoticePosition(window.innerWidth, window.innerHeight);
        // Focus the searchbox simultaneously with the initial flash animation.
        if (this.enableCsbMotionTweaks && this.autoFocusSearchbox &&
            this.isLensOverlayContextualSearchboxVisible) {
            this.focusSearchbox();
        }
    }
    onInitialFlashAnimationEnd() {
        this.initialFlashAnimationHasEnded = true;
        if (!this.enableBorderGlow) {
            this.$.initialGradient.setScrimVisible();
        }
        // The searchbox is not focusable until the animation has ended.
        // Only called here if not already called in onScreenshotRendered
        if (this.autoFocusSearchbox &&
            this.isLensOverlayContextualSearchboxVisible &&
            !this.enableCsbMotionTweaks) {
            this.focusSearchbox();
        }
        if (loadTimeData.getValue('enablePrivacyNotice')) {
            // Focus the privacy notice to ensure all its elements are read by screen
            // readers.
            this.$.privacyNotice.focus();
        }
    }
    triggerSearchboxSuggestions() {
        // If the user doesn't have an internet connection, the suggest request will
        // fail, so immediately show the error state.
        if (!window.navigator.onLine) {
            this.showErrorState = true;
            return;
        }
        if (!this.isSearchboxFocused) {
            return;
        }
        // If the backend handshake has completed, then it is safe to issue the
        // autocomplete query immediately.
        if (this.isBackendHandshakeComplete) {
            this.$.searchbox.queryInputAutocomplete();
            return;
        }
        // Since the backend handshake has not completed, set the
        // triggerSuggestOnInputReady flag so that the autocomplete query is
        // triggered when the handshake completes. Also set the autocomplete request
        // started flag to true so that the ghost loader is shown to hide the
        // handshake latency from the user.
        this.triggerSuggestOnInputReady = true;
        this.autocompleteRequestStarted = true;
    }
    focusSearchbox() {
        const searchbox = this.shadowRoot.querySelector('cr-lens-searchbox');
        if (searchbox) {
            searchbox.focusInput();
        }
    }
    computeShouldFadeOutButtons() {
        return !this.isTranslateModeActive && this.isPointerDown;
    }
    computeShouldHideSearchBox() {
        return this.isTranslateModeActive || this.sidePanelOpened ||
            this.forceHideSearchBox;
    }
    computeShouldHidePrivacyNotice() {
        return this.isTranslateModeActive || this.forceHideSearchBox;
    }
    async showToast(message) {
        if (this.$.toast.open) {
            // If toast already open, wait after hiding so that animation is
            // smoother.
            await this.$.toast.hide();
            setTimeout(() => {
                this.toastMessage = message;
                this.$.toast.show();
            }, 100);
        }
        else {
            this.toastMessage = message;
            this.$.toast.show();
        }
    }
    onHideToastClick() {
        this.$.toast.hide();
    }
    updateCursorPosition(event) {
        // Cancel the previous animation frame to prevent the code from running more
        // than once a frame.
        if (this.updateCursorPositionRequestId) {
            cancelAnimationFrame(this.updateCursorPositionRequestId);
        }
        // Exit early if the tooltip is not visible.
        if (!this.$.cursorTooltip.isTooltipVisible()) {
            return;
        }
        this.updateCursorPositionRequestId = requestAnimationFrame(() => {
            this.$.cursorTooltip.style.transform =
                `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
            this.updateCursorPositionRequestId = undefined;
        });
    }
    getSearchboxAriaDescription() {
        // Get the the text from the ghost loader to add to the searchbox aria
        // description.
        return this.showGhostLoader ? this.$.searchboxGhostLoader.getText() : '';
    }
    onPrivacyNoticeCancel() {
        this.browserProxy.handler.dismissPrivacyNotice();
        this.isPrivacyNoticeVisible = false;
    }
    onPrivacyNoticeContinue() {
        this.browserProxy.handler.acceptPrivacyNotice();
        this.isPrivacyNoticeVisible = false;
        this.hasPermissionsForSession = true;
        this.focusSearchbox();
    }
    setSearchboxFocusForTesting(isFocused) {
        this.isSearchboxFocused = isFocused;
    }
    handleEscapeSearchboxForTesting(e) {
        this.handleEscapeSearchbox(e);
    }
    getSidePanelOpenedForTesting() {
        return this.sidePanelOpened;
    }
    getOverlayReshowInProgressForTesting() {
        return this.overlayReshowInProgress;
    }
    getMoreOptionsMenuVisibleForTesting() {
        return this.moreOptionsMenuVisible;
    }
    handleResize(entries) {
        if (this.handleResizeRequestId) {
            cancelAnimationFrame(this.handleResizeRequestId);
        }
        this.handleResizeRequestId = requestAnimationFrame(() => {
            assert(entries.length === 1);
            const newRect = entries[0].contentRect;
            if (newRect.width > 0 && newRect.height > 0) {
                this.updatePrivacyNoticePosition(newRect.width, newRect.height);
            }
            this.handleResizeRequestId = undefined;
        });
    }
    updatePrivacyNoticePosition(containerWidth, containerHeight) {
        // Only needed if the privacy notice is being displayed while the side panel
        // is open (i.e. in the non-blocking image context menu search case).
        // Otherwise, the styles in the HTML file are sufficient.
        const privacyNotice = this.shadowRoot.querySelector('#privacyNotice');
        if (!privacyNotice || !this.sidePanelOpened) {
            return;
        }
        const selectionOverlayRect = this.$.selectionOverlay.getBoundingRect();
        const screenshotWidth = selectionOverlayRect.width;
        const screenshotHeight = selectionOverlayRect.height;
        if (screenshotWidth === 0 || screenshotHeight === 0) {
            return;
        }
        const margins = 48;
        const newContainerWidth = containerWidth - margins;
        const newContainerHeight = containerHeight - margins;
        const aspectRatio = screenshotWidth / screenshotHeight;
        const widthBasedHeight = Math.round(newContainerWidth / aspectRatio);
        const heightBasedWidth = Math.round(newContainerHeight * aspectRatio);
        if (widthBasedHeight <= newContainerHeight) {
            privacyNotice.style.insetBlockStart =
                `${(newContainerHeight - widthBasedHeight) / 2 + 12}px`;
            privacyNotice.style.insetInlineEnd = `62px`;
        }
        else {
            privacyNotice.style.insetBlockStart = `12px`;
            privacyNotice.style.insetInlineEnd =
                `${(newContainerWidth - heightBasedWidth) / 2 + 62}px`;
        }
    }
}
customElements.define(LensOverlayAppElement.is, LensOverlayAppElement);
