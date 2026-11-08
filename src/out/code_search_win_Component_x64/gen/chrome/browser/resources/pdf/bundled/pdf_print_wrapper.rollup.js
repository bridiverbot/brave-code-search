import { b as assert, i as isRTL, G as FittingType, H as getCss$4, J as PdfViewerBaseElement, P as PluginController, f as assertNotReached, L as shouldIgnoreKeyEvents, t as hasCtrlModifierOnly, N as convertSendKeyEventMessage, X as convertLoadProgressMessage, O as convertDocumentDimensionsMessage } from './shared.rollup.js';
export { Z as CrIconButtonElement, a1 as OpenPdfParamsParser } from './shared.rollup.js';
import { css, html, CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { serializeKeyEvent, LoadState } from './pdf_scripting_api.js';
export { BrowserApi } from './browser_api.js';
import 'chrome://resources/mojo/mojo/public/js/bindings.js';
import 'chrome://resources/brave/leo.bundle.js';
import 'chrome://resources/js/load_time_data.js';

let instance$3 = null;
function getCss$3() {
    return instance$3 || (instance$3 = [...[], css `:host{display:flex;pointer-events:none;position:fixed;right:0;transition:opacity 400ms ease-in-out}:host-context([dir=rtl]){left:0;right:auto}#text{background-color:rgba(0,0,0,0.5);border-radius:5px;color:white;font-family:sans-serif;font-size:12px;font-weight:bold;line-height:48px;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,0.8);width:62px}#triangle-end{border-bottom:6px solid transparent;border-inline-start:8px solid rgba(0,0,0,0.5);border-top:6px solid transparent;height:0;margin-top:18px;width:0}
`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3() {
    return html `
<div id="text">${this.getLabel_()}</div>
<div id="triangle-end"></div>`;
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerPageIndicatorElement extends CrLitElement {
    static get is() {
        return 'viewer-page-indicator';
    }
    static get styles() {
        return getCss$3();
    }
    render() {
        return getHtml$3.bind(this)();
    }
    static get properties() {
        return {
            index: { type: Number },
            pageLabels: { type: Array },
        };
    }
    #index_accessor_storage = 0;
    get index() { return this.#index_accessor_storage; }
    set index(value) { this.#index_accessor_storage = value; }
    #pageLabels_accessor_storage = null;
    get pageLabels() { return this.#pageLabels_accessor_storage; }
    set pageLabels(value) { this.#pageLabels_accessor_storage = value; }
    timerId_;
    viewport_ = null;
    firstUpdated() {
        const callback = () => this.fadeIn_();
        window.addEventListener('scroll', function () {
            requestAnimationFrame(callback);
        });
    }
    setViewport(viewport) {
        this.viewport_ = viewport;
    }
    fadeIn_() {
        // Vertically position relative to scroll position.
        let percent = 0;
        if (this.viewport_) {
            percent = this.viewport_.position.y /
                (this.viewport_.contentSize.height - this.viewport_.size.height);
        }
        this.style.top =
            percent * (document.documentElement.clientHeight - this.offsetHeight) +
                'px';
        // Horizontally position to compensate for overlay scrollbars.
        assert(document.documentElement.dir);
        let overlayScrollbarWidth = 0;
        if (this.viewport_ && this.viewport_.documentHasScrollbars().vertical) {
            overlayScrollbarWidth = this.viewport_.overlayScrollbarWidth;
        }
        this.style[isRTL() ? 'left' : 'right'] = `${overlayScrollbarWidth}px`;
        // Animate opacity.
        this.style.opacity = '1';
        clearTimeout(this.timerId_);
        this.timerId_ = setTimeout(() => {
            this.style.opacity = '0';
            this.timerId_ = undefined;
        }, 2000);
    }
    getLabel_() {
        if (this.pageLabels) {
            return String(this.pageLabels[this.index]);
        }
        return String(this.index + 1);
    }
}
customElements.define(ViewerPageIndicatorElement.is, ViewerPageIndicatorElement);

let instance$2 = null;
function getCss$2() {
    return instance$2 || (instance$2 = [...[], css `cr-icon-button{--cr-icon-button-fill-color:white;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;background-color:var(--google-grey-600);border-radius:50%;box-shadow:var(--cr-elevation-1);overflow:visible}cr-icon-button[disabled]{box-shadow:none}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-ripple-opacity:.5}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(--google-grey-200);background-color:var(--google-grey-900)}}:host([keyboard-navigation-active]) cr-icon-button:focus{box-shadow:var(--cr-elevation-4),inset 0 0 0 2px var(--cr-focus-outline-color)}cr-icon-button:active{box-shadow:var(--cr-elevation-5)}
`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
    return html `
<cr-icon-button .ironIcon="${this.computeVisibleIcon_()}"
    @click="${this.onClick_}" aria-label="${this.computeVisibleTooltip_()}"
    title="${this.computeVisibleTooltip_()}" ?disabled="${this.disabled}">
</cr-icon-button>`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerZoomButtonElement extends CrLitElement {
    static get is() {
        return 'viewer-zoom-button';
    }
    static get styles() {
        return getCss$2();
    }
    render() {
        return getHtml$2.bind(this)();
    }
    static get properties() {
        return {
            /** Index of the icon currently being displayed. */
            activeIndex: { type: Number },
            disabled: { type: Boolean },
            /**
             * Icons to be displayed on the FAB. Multiple icons should be separated
             * with spaces, and will be cycled through every time the FAB is clicked.
             */
            icons: { type: String },
            /**
             * Used to show the appropriate drop shadow when buttons are focused with
             * the keyboard.
             */
            keyboardNavigationActive: {
                type: Boolean,
                reflect: true,
            },
            tooltips: { type: String },
            /**
             * Array version of the list of icons. The public property is a string for
             * convenience so that either a single icon or multiple icons can be
             * easily specified without a data binding in the parent's HTML template.
             */
            icons_: { type: Array },
            tooltips_: { type: Array },
        };
    }
    #activeIndex_accessor_storage = 0;
    get activeIndex() { return this.#activeIndex_accessor_storage; }
    set activeIndex(value) { this.#activeIndex_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #icons_accessor_storage = '';
    get icons() { return this.#icons_accessor_storage; }
    set icons(value) { this.#icons_accessor_storage = value; }
    #keyboardNavigationActive_accessor_storage = false;
    get keyboardNavigationActive() { return this.#keyboardNavigationActive_accessor_storage; }
    set keyboardNavigationActive(value) { this.#keyboardNavigationActive_accessor_storage = value; }
    #tooltips_accessor_storage = '';
    get tooltips() { return this.#tooltips_accessor_storage; }
    set tooltips(value) { this.#tooltips_accessor_storage = value; }
    #icons__accessor_storage = [''];
    get icons_() { return this.#icons__accessor_storage; }
    set icons_(value) { this.#icons__accessor_storage = value; }
    #tooltips__accessor_storage = [];
    get tooltips_() { return this.#tooltips__accessor_storage; }
    set tooltips_(value) { this.#tooltips__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('icons')) {
            this.icons_ = this.icons.split(' ');
        }
        if (changedProperties.has('tooltips')) {
            this.tooltips_ = this.tooltips.split(',');
        }
    }
    /**
     * @return Icon name for the currently visible icon.
     */
    computeVisibleIcon_() {
        return this.icons_[this.activeIndex];
    }
    /**
     * @return Tooltip for the currently visible icon.
     */
    computeVisibleTooltip_() {
        return this.tooltips_ === undefined ? '' : this.tooltips_[this.activeIndex];
    }
    onClick_() {
        // We cannot attach an on-click to the entire viewer-zoom-button, as this
        // will include clicks on the margins. Instead, proxy clicks on the FAB
        // through.
        this.fire('fabclick');
        this.activeIndex = (this.activeIndex + 1) % this.icons_.length;
    }
}
customElements.define(ViewerZoomButtonElement.is, ViewerZoomButtonElement);

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `:host{--button-position-offset:24px;bottom:0;left:0;padding:48px 0;position:fixed;right:auto;user-select:none;z-index:3}:host-context([dir='rtl']){left:auto;right:0}#zoom-buttons{left:var(--button-position-offset);opacity:1;position:relative;right:auto;transition:opacity 250ms;transition-timing-function:cubic-bezier(0,0,0.2,1)}:host-context([dir='rtl']) #zoom-buttons{left:auto;right:var(--button-position-offset)}:host(:not([visible_])) #zoom-buttons{opacity:0;transition-timing-function:cubic-bezier(0.4,0,1,1)}viewer-zoom-button{display:block}#zoom-in-button{margin-top:24px}#zoom-out-button{margin-top:10px}
`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    return html `<!--_html_template_start_-->
<div id="zoom-buttons">
  <viewer-zoom-button id="fitButton" @fabclick="${this.onFitButtonFabclick_}"
      tooltips="$i18n{tooltipFitToPage},$i18n{tooltipFitToWidth}"
      .keyboardNavigationActive="${this.keyboardNavigationActive_}"
      icons="pdf:fullscreen-exit cr:fullscreen">
  </viewer-zoom-button>
  <viewer-zoom-button id="zoom-in-button" icons="pdf:add"
      tooltips="$i18n{tooltipZoomIn}"
      .keyboardNavigationActive="${this.keyboardNavigationActive_}"
      @fabclick="${this.onZoomInFabclick_}">
  </viewer-zoom-button>
  <viewer-zoom-button id="zoom-out-button" icons="pdf:remove"
      tooltips="$i18n{tooltipZoomOut}"
      .keyboardNavigationActive="${this.keyboardNavigationActive_}"
      @fabclick="${this.onZoomOutFabclick_}">
  </viewer-zoom-button>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FIT_TO_PAGE_BUTTON_STATE = 0;
const FIT_TO_WIDTH_BUTTON_STATE = 1;
class ViewerZoomToolbarElement extends CrLitElement {
    static get is() {
        return 'viewer-zoom-toolbar';
    }
    static get styles() {
        return getCss$1();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            keyboardNavigationActive_: { type: Boolean },
            visible_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #keyboardNavigationActive__accessor_storage = false;
    get keyboardNavigationActive_() { return this.#keyboardNavigationActive__accessor_storage; }
    set keyboardNavigationActive_(value) { this.#keyboardNavigationActive__accessor_storage = value; }
    #visible__accessor_storage = false;
    get visible_() { return this.#visible__accessor_storage; }
    set visible_(value) { this.#visible__accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('focus', this.onFocus_);
        this.addEventListener('keyup', this.onKeyUp_);
        this.addEventListener('pointerdown', this.onPointerDown_);
    }
    isVisible() {
        return this.visible_;
    }
    onFocus_() {
        if (this.visible_) {
            return;
        }
        // For Print Preview, ensure the parent element knows that keyboard
        // navigation is now active and show the toolbar.
        this.fire('keyboard-navigation-active', true);
        this.show();
    }
    onKeyUp_() {
        this.fire('keyboard-navigation-active', true);
        this.keyboardNavigationActive_ = true;
    }
    onPointerDown_() {
        this.fire('keyboard-navigation-active', false);
        this.keyboardNavigationActive_ = false;
    }
    onFitButtonFabclick_() {
        this.fitToggle();
    }
    /** Handle clicks of the fit-button. */
    fitToggle() {
        this.fireFitToChangedEvent_(this.$.fitButton.activeIndex === FIT_TO_WIDTH_BUTTON_STATE ?
            FittingType.FIT_TO_WIDTH :
            FittingType.FIT_TO_PAGE);
    }
    /** Handle the keyboard shortcut equivalent of fit-button clicks. */
    fitToggleFromHotKey() {
        this.fitToggle();
        // Toggle the button state since there was no mouse click.
        const button = this.$.fitButton;
        button.activeIndex =
            (button.activeIndex === FIT_TO_WIDTH_BUTTON_STATE ?
                FIT_TO_PAGE_BUTTON_STATE :
                FIT_TO_WIDTH_BUTTON_STATE);
    }
    /**
     * Handle forcing zoom via scripting to a fitting type.
     * @param fittingType Page fitting type to force.
     */
    forceFit(fittingType) {
        // Set the button state since there was no mouse click.
        const nextButtonState = (fittingType === FittingType.FIT_TO_WIDTH ? FIT_TO_PAGE_BUTTON_STATE :
            FIT_TO_WIDTH_BUTTON_STATE);
        this.$.fitButton.activeIndex = nextButtonState;
    }
    /**
     * Fire a 'fit-to-changed' {CustomEvent} with the given FittingType as detail.
     * @param fittingType to include as payload.
     */
    fireFitToChangedEvent_(fittingType) {
        this.fire('fit-to-changed', fittingType);
    }
    /** Handle clicks of the zoom-in-button. */
    onZoomInFabclick_() {
        this.fire('zoom-in');
    }
    /** Handle clicks of the zoom-out-button. */
    onZoomOutFabclick_() {
        this.fire('zoom-out');
    }
    show() {
        this.visible_ = true;
    }
    hide() {
        this.visible_ = false;
    }
    /**
     * Offsets the toolbar position so that it doesn't move if scrollbars appear.
     */
    shiftForScrollbars(hasScrollbars, scrollbarWidth) {
        const verticalScrollbarWidth = hasScrollbars.vertical ? scrollbarWidth : 0;
        const horizontalScrollbarWidth = hasScrollbars.horizontal ? scrollbarWidth : 0;
        // Shift the zoom toolbar to the left by half a scrollbar width. This
        // gives a compromise: if there is no scrollbar visible then the toolbar
        // will be half a scrollbar width further left than the spec but if there
        // is a scrollbar visible it will be half a scrollbar width further right
        // than the spec. In RTL layout normally, the zoom toolbar is on the left
        // left side, but the scrollbar is still on the right, so this is not
        // necessary.
        if (!isRTL()) {
            this.style.right = -verticalScrollbarWidth + (scrollbarWidth / 2) + 'px';
        }
        // Having a horizontal scrollbar is much rarer so we don't offset the
        // toolbar from the bottom any more than what the spec says. This means
        // that when there is a scrollbar visible, it will be a full scrollbar
        // width closer to the bottom of the screen than usual, but this is ok.
        this.style.bottom = -horizontalScrollbarWidth + 'px';
    }
}
customElements.define(ViewerZoomToolbarElement.is, ViewerZoomToolbarElement);

let instance = null;
function getCss() {
    return instance || (instance = [...[getCss$4()], css `viewer-page-indicator{opacity:0;visibility:hidden;z-index:2}@media (max-height:200px){viewer-zoom-toolbar{display:none}}@media (max-width:300px){viewer-zoom-toolbar{display:none}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    // clang-format off
    return html `
<div id="sizer"></div>

<viewer-zoom-toolbar id="zoomToolbar" @fit-to-changed="${this.onFitToChanged}"
    @zoom-in="${this.onZoomIn}" @zoom-out="${this.onZoomOut}">
</viewer-zoom-toolbar>

<viewer-page-indicator id="pageIndicator"></viewer-page-indicator>

<div id="content"></div>

${this.showErrorDialog ? html `
  <viewer-error-dialog id="error-dialog"></viewer-error-dialog>
` : ''}`;
    // clang-format on
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Idle time in ms before the UI is hidden.
 */
const HIDE_TIMEOUT = 2000;
/**
 * Velocity required in a mousemove to reveal the UI (pixels/ms). This is
 * intended to be high enough that a fast flick of the mouse is required to
 * reach it.
 */
const SHOW_VELOCITY = 10;
/**
 * Distance from right of the screen required to reveal toolbars.
 */
const TOOLBAR_REVEAL_DISTANCE_RIGHT = 150;
/**
 * Distance from bottom of the screen required to reveal toolbars.
 */
const TOOLBAR_REVEAL_DISTANCE_BOTTOM = 250;
/**
 * @param e Event to test.
 * @param window Window to test against.
 * @return True if the mouse is close to the bottom-right of the screen.
 */
function isMouseNearToolbar(e, window) {
    const atSide = isRTL() ?
        e.x > window.innerWidth - TOOLBAR_REVEAL_DISTANCE_RIGHT :
        e.x < TOOLBAR_REVEAL_DISTANCE_RIGHT;
    const atBottom = e.y > window.innerHeight - TOOLBAR_REVEAL_DISTANCE_BOTTOM;
    return atSide && atBottom;
}
// Responsible for showing and hiding the zoom toolbar.
class ToolbarManager {
    window_;
    zoomToolbar_;
    toolbarTimeout_ = null;
    isMouseNearToolbar_ = false;
    keyboardNavigationActive_ = false;
    lastMovementTimestamp_ = null;
    /**
     * @param window The window containing the UI.
     */
    constructor(window, zoomToolbar) {
        this.window_ = window;
        this.zoomToolbar_ = zoomToolbar;
        document.addEventListener('mousemove', e => this.handleMouseMove_(e));
        document.addEventListener('mouseout', () => this.hideToolbarForMouseOut_());
        this.zoomToolbar_.addEventListener('keyboard-navigation-active', e => {
            this.keyboardNavigationActive_ = e.detail;
        });
    }
    handleMouseMove_(e) {
        this.isMouseNearToolbar_ = isMouseNearToolbar(e, this.window_);
        this.keyboardNavigationActive_ = false;
        const touchInteractionActive = e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents;
        // Tapping the screen with toolbars open tries to close them.
        if (touchInteractionActive && this.zoomToolbar_.isVisible()) {
            this.hideToolbarIfAllowed_();
            return;
        }
        // Show the toolbars if the mouse is near the top or bottom-right of the
        // screen, if the mouse moved fast, or if the touchscreen was tapped.
        if (this.isMouseNearToolbar_ || this.isHighVelocityMouseMove_(e) ||
            touchInteractionActive) {
            this.zoomToolbar_.show();
        }
        this.hideToolbarAfterTimeout();
    }
    /**
     * Whether a mousemove event is high enough velocity to reveal the toolbars.
     */
    isHighVelocityMouseMove_(e) {
        if (e.type === 'mousemove') {
            if (this.lastMovementTimestamp_ == null) {
                this.lastMovementTimestamp_ = this.getCurrentTimestamp();
            }
            else {
                const movement = Math.sqrt(e.movementX * e.movementX + e.movementY * e.movementY);
                const newTime = this.getCurrentTimestamp();
                const interval = newTime - this.lastMovementTimestamp_;
                this.lastMovementTimestamp_ = newTime;
                if (interval !== 0) {
                    return movement / interval > SHOW_VELOCITY;
                }
            }
        }
        return false;
    }
    /**
     * Wrapper around Date.now() to make it easily replaceable for testing.
     */
    getCurrentTimestamp() {
        return Date.now();
    }
    /**
     * Show toolbar and mark that navigation is being performed with
     * tab/shift-tab. This disables toolbar hiding until the mouse is moved or
     * escape is pressed.
     */
    showToolbarForKeyboardNavigation() {
        this.keyboardNavigationActive_ = true;
        this.zoomToolbar_.show();
    }
    /**
     * Hide toolbars after a delay, regardless of the position of the mouse.
     * Intended to be called when the mouse has moved out of the parent window.
     */
    hideToolbarForMouseOut_() {
        this.isMouseNearToolbar_ = false;
        this.hideToolbarAfterTimeout();
    }
    /**
     * Check if the toolbar is able to be closed, and close it if it is.
     * Toolbar may be kept open based on mouse/keyboard activity and active
     * elements.
     */
    hideToolbarIfAllowed_() {
        if (this.isMouseNearToolbar_ || this.keyboardNavigationActive_) {
            return;
        }
        // Remove focus to make any visible tooltips disappear -- otherwise they'll
        // still be visible on screen when the toolbar is off screen.
        if (document.activeElement === this.zoomToolbar_) {
            this.zoomToolbar_.blur();
        }
        this.zoomToolbar_.hide();
    }
    /** Hide the toolbar after the HIDE_TIMEOUT has elapsed. */
    hideToolbarAfterTimeout() {
        if (this.toolbarTimeout_) {
            this.window_.clearTimeout(this.toolbarTimeout_);
        }
        this.toolbarTimeout_ = this.window_.setTimeout(this.hideToolbarIfAllowed_.bind(this), HIDE_TIMEOUT);
    }
    /**
     * Clears the keyboard navigation state and hides the toolbars after a delay.
     */
    resetKeyboardNavigationAndHideToolbar() {
        this.keyboardNavigationActive_ = false;
        this.hideToolbarAfterTimeout();
    }
}

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let pluginLoaderPolicy = null;
class PdfViewerPrintElement extends PdfViewerBaseElement {
    static get is() {
        return 'pdf-viewer-print';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    isPrintPreviewLoadingFinished_ = false;
    inPrintPreviewMode_ = false;
    dark_ = false;
    pluginController_ = PluginController.getInstance();
    toolbarManager_ = null;
    isNewUiEnabled() {
        return false;
    }
    getBackgroundColor() {
        return PRINT_PREVIEW_BACKGROUND_COLOR;
    }
    getStreamUrl_() {
        if (pluginLoaderPolicy === null) {
            pluginLoaderPolicy =
                window.trustedTypes.createPolicy('print-preview-plugin-loader', {
                    createScriptURL: (_ignore) => {
                        const url = new URL(this.browserApi.getStreamInfo().streamUrl);
                        // Checks based on data_request_filter.cc.
                        assert(url.origin === 'chrome-untrusted://print');
                        if (url.pathname.endsWith('test.pdf')) {
                            return url.toString();
                        }
                        const paths = url.pathname.split('/');
                        assert(paths.length === 4);
                        assert(paths[3] === 'print.pdf');
                        // Valid Print Preview UI ID
                        assert(/^[0-9a-fA-F]{32}$/.test(paths[1]));
                        // Valid page index (can be negative for PDFs).
                        assert(!Number.isNaN(parseInt(paths[2])));
                        return url.toString();
                    },
                    createHTML: () => assertNotReached(),
                    createScript: () => assertNotReached(),
                });
        }
        return pluginLoaderPolicy.createScriptURL('');
    }
    setPluginSrc(plugin) {
        plugin.src = this.getStreamUrl_();
    }
    init(browserApi) {
        this.initInternal(browserApi, document.documentElement, this.$.sizer, this.$.content);
        this.$.pageIndicator.setViewport(this.viewport);
        this.toolbarManager_ = new ToolbarManager(window, this.$.zoomToolbar);
    }
    handleKeyEvent(e) {
        if (shouldIgnoreKeyEvents() || e.defaultPrevented) {
            return;
        }
        this.toolbarManager_.hideToolbarAfterTimeout();
        // Let the viewport handle directional key events.
        if (this.viewport.handleDirectionalKeyEvent(e, false, false)) {
            return;
        }
        switch (e.key) {
            case 'Tab':
                this.toolbarManager_.showToolbarForKeyboardNavigation();
                return;
            case 'Escape':
                break; // Ensure escape falls through to the print-preview handler.
            case 'a':
                if (hasCtrlModifierOnly(e)) {
                    this.pluginController_.selectAll();
                    // Since we do selection ourselves.
                    e.preventDefault();
                }
                return;
            case '\\':
                if (e.ctrlKey) {
                    this.$.zoomToolbar.fitToggleFromHotKey();
                }
                return;
        }
        // Give print preview a chance to handle the key event.
        if (!e.fromScriptingAPI) {
            this.sendScriptingMessage({ type: 'sendKeyEvent', keyEvent: serializeKeyEvent(e) });
        }
        else {
            // Show toolbar as a fallback.
            if (!(e.shiftKey || e.ctrlKey || e.altKey)) {
                this.$.zoomToolbar.show();
            }
        }
    }
    setBackgroundColorForPrintPreview_() {
        this.pluginController_.setBackgroundColor(this.dark_ ? PRINT_PREVIEW_DARK_BACKGROUND_COLOR :
            PRINT_PREVIEW_BACKGROUND_COLOR);
    }
    updateUiForViewportChange() {
        // Offset the toolbar position so that it doesn't move if scrollbars appear.
        const hasScrollbars = this.viewport.documentHasScrollbars();
        const scrollbarWidth = this.viewport.scrollbarWidth;
        const verticalScrollbarWidth = hasScrollbars.vertical ? scrollbarWidth : 0;
        const horizontalScrollbarWidth = hasScrollbars.horizontal ? scrollbarWidth : 0;
        // Shift the zoom toolbar to the left by half a scrollbar width. This
        // gives a compromise: if there is no scrollbar visible then the toolbar
        // will be half a scrollbar width further left than the spec but if there
        // is a scrollbar visible it will be half a scrollbar width further right
        // than the spec. In LTR layout, the zoom toolbar is on the left
        // left side, but the scrollbar is still on the right, so this is not
        // necessary.
        const zoomToolbar = this.$.zoomToolbar;
        if (isRTL()) {
            zoomToolbar.style.right =
                -verticalScrollbarWidth + (scrollbarWidth / 2) + 'px';
        }
        // Having a horizontal scrollbar is much rarer so we don't offset the
        // toolbar from the bottom any more than what the spec says. This means
        // that when there is a scrollbar visible, it will be a full scrollbar
        // width closer to the bottom of the screen than usual, but this is ok.
        zoomToolbar.style.bottom = -horizontalScrollbarWidth + 'px';
        // Update the page indicator.
        const visiblePage = this.viewport.getMostVisiblePage();
        const pageIndicator = this.$.pageIndicator;
        const lastIndex = pageIndicator.index;
        pageIndicator.index = visiblePage;
        if (this.documentDimensions.pageDimensions.length > 1 &&
            hasScrollbars.vertical && lastIndex !== undefined) {
            pageIndicator.style.visibility = 'visible';
        }
        else {
            pageIndicator.style.visibility = 'hidden';
        }
        this.pluginController_.viewportChanged();
    }
    handleScriptingMessage(message) {
        if (super.handleScriptingMessage(message)) {
            return true;
        }
        if (this.handlePrintPreviewScriptingMessage_(message)) {
            return true;
        }
        if (this.delayScriptingMessage(message)) {
            return true;
        }
        switch (message.data.type.toString()) {
            case 'getSelectedText':
                this.pluginController_.getSelectedText().then(this.sendScriptingMessage.bind(this));
                break;
            case 'selectAll':
                this.pluginController_.selectAll();
                break;
            default:
                return false;
        }
        return true;
    }
    /**
     * Handle scripting messages specific to print preview.
     * @param message the message to handle.
     * @return true if the message was handled, false otherwise.
     */
    handlePrintPreviewScriptingMessage_(message) {
        const messageData = message.data;
        switch (messageData.type.toString()) {
            case 'loadPreviewPage':
                const loadData = messageData;
                this.pluginController_.loadPreviewPage(loadData.url, loadData.index);
                return true;
            case 'resetPrintPreviewMode':
                const printPreviewData = messageData;
                this.setLoadState(LoadState.LOADING);
                if (!this.inPrintPreviewMode_) {
                    this.inPrintPreviewMode_ = true;
                    this.isUserInitiatedEvent = false;
                    this.forceFit(FittingType.FIT_TO_PAGE);
                    this.viewport.setFittingType(FittingType.FIT_TO_PAGE);
                    this.isUserInitiatedEvent = true;
                }
                // Stash the scroll location so that it can be restored when the new
                // document is loaded.
                this.lastViewportPosition = this.viewport.position;
                this.$.pageIndicator.pageLabels = printPreviewData.pageNumbers;
                this.pluginController_.resetPrintPreviewMode(printPreviewData);
                return true;
            case 'sendKeyEvent':
                const extendedKeyEvent = convertSendKeyEventMessage(message.data);
                extendedKeyEvent.fromScriptingAPI = true;
                this.handleKeyEvent(extendedKeyEvent);
                return true;
            case 'hideToolbar':
                this.toolbarManager_.resetKeyboardNavigationAndHideToolbar();
                return true;
            case 'darkModeChanged':
                this.dark_ =
                    message.data.darkMode;
                this.setBackgroundColorForPrintPreview_();
                return true;
            case 'scrollPosition':
                const position = this.viewport.position;
                const positionData = message.data;
                position.y += positionData.y;
                position.x += positionData.x;
                this.viewport.setPosition(position);
                return true;
            default:
                return false;
        }
    }
    setLoadState(loadState) {
        super.setLoadState(loadState);
        if (loadState === LoadState.FAILED) {
            this.isPrintPreviewLoadingFinished_ = true;
        }
    }
    handlePluginMessage(e) {
        const data = e.detail;
        switch (data.type) {
            case 'documentDimensions':
                this.setDocumentDimensions(convertDocumentDimensionsMessage(data));
                return;
            case 'documentFocusChanged':
                // TODO(crbug.com/40125884): Draw a focus rect around plugin.
                return;
            case 'loadProgress':
                this.updateProgress(convertLoadProgressMessage(data).progress);
                return;
            case 'printPreviewLoaded':
                this.handlePrintPreviewLoaded_();
                return;
            case 'sendKeyEvent':
                const keyEvent = convertSendKeyEventMessage(data);
                keyEvent.fromPlugin = true;
                this.handleKeyEvent(keyEvent);
                return;
            case 'touchSelectionOccurred':
                this.sendScriptingMessage({
                    type: 'touchSelectionOccurred',
                });
                return;
            case 'beep':
            case 'formFocusChange':
            case 'getPassword':
            case 'metadata':
            case 'navigate':
            case 'sendClickEvent':
            case 'setIsEditing':
                // These messages are not relevant in Print Preview.
                return;
            default:
                assertNotReached('Unknown message type received: ' + data.type);
        }
    }
    /**
     * Handles a notification that print preview has loaded from the
     * current controller.
     */
    handlePrintPreviewLoaded_() {
        this.isPrintPreviewLoadingFinished_ = true;
        this.sendDocumentLoadedMessage();
    }
    readyToSendLoadMessage() {
        return this.isPrintPreviewLoadingFinished_;
    }
    forceFit(view) {
        this.$.zoomToolbar.forceFit(view);
    }
    afterZoom(_viewportZoom) { }
    handleStrings(strings) {
        super.handleStrings(strings);
        if (!strings) {
            return;
        }
        this.setBackgroundColorForPrintPreview_();
    }
    updateProgress(progress) {
        super.updateProgress(progress);
        if (progress === 100) {
            this.toolbarManager_.hideToolbarAfterTimeout();
        }
    }
}
/**
 * The background color used for print preview (--google-grey-300). Keep
 * in sync with `ChromePdfStreamDelegate::MapToOriginalUrl()`.
 */
const PRINT_PREVIEW_BACKGROUND_COLOR = 0xffdadce0;
/**
 * The background color used for print preview when dark mode is enabled
 * (--google-grey-700).
 */
const PRINT_PREVIEW_DARK_BACKGROUND_COLOR = 0xff5f6368;
customElements.define(PdfViewerPrintElement.is, PdfViewerPrintElement);

export { FittingType, PdfViewerPrintElement, ToolbarManager, ViewerPageIndicatorElement, ViewerZoomButtonElement, ViewerZoomToolbarElement };
//# sourceMappingURL=pdf_print_wrapper.rollup.js.map
