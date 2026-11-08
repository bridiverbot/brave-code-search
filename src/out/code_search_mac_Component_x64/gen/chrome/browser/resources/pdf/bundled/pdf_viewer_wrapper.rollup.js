import { E as EventTracker, a as assertInstanceof, b as assert, h as hasKeyModifiers, i as isRTL, c as isMac, g as getDeepActiveElement, d as isWindows, e as assertNotReachedCase, f as assertNotReached, A as AnnotationBrushType, T as TextTypeface, j as TextAlignment, k as TextStyle, P as PluginController, l as PluginControllerEventType, m as PromiseResolver, n as colorsEqual, o as TextAnnotationSource, p as getCss$O, C as CrRippleMixin, q as hexToColor, r as record, U as UserAction, s as getTextStyleForShortcut, t as hasCtrlModifierOnly, u as getInstance, v as colorToHex, w as hasCtrlModifier, x as blendHighlighterColorValue, y as getCss$P, z as debounceEnd, S as SaveToDriveState, B as SaveToDriveBubbleRequestType, D as AnnotationMode, F as FormFieldFocusType, G as FittingType, H as getCss$Q, I as recordEnumeration, J as PdfViewerBaseElement, K as PdfHelpBubbleProxyImpl, L as shouldIgnoreKeyEvents, M as PostMessageDataType, N as convertSendKeyEventMessage, O as convertDocumentDimensionsMessage, Q as getSaveToDriveOpenInDriveUrl, R as getSaveToDriveManageStorageUrl, V as verifyPdfHeader, W as listenOnce, X as convertLoadProgressMessage, Y as convertFormFocusChangeMessage } from './shared.rollup.js';
export { Z as CrIconButtonElement, _ as GestureDetector, a1 as OpenPdfParamsParser, a5 as PAGE_SHADOW, a3 as SwipeDetector, a4 as SwipeDirection, a2 as ViewMode, a6 as Viewport, a7 as ZoomManager, $ as recordFitTo, a0 as resetForTesting } from './shared.rollup.js';
import { css, html, nothing, CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export { BrowserApi, ZoomBehavior } from './browser_api.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { LoadState } from './pdf_scripting_api.js';
import 'chrome://resources/mojo/mojo/public/js/bindings.js';
import 'chrome://resources/brave/leo.bundle.js';

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The class name to set on the document element.
 */
const CLASS_NAME = 'focus-outline-visible';
const docsToManager = new Map();
/**
 * This class sets a CSS class name on the HTML element of |doc| when the user
 * presses a key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-visible my-element:focus {
 *   outline: 5px auto -webkit-focus-ring-color;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to
 * it.
 *
 */
class FocusOutlineManager {
    // Whether focus change is triggered by a keyboard event.
    focusByKeyboard_ = true;
    classList_;
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', (e) => this.onEvent_(true, e), true);
        doc.addEventListener('mousedown', (e) => this.onEvent_(false, e), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard, e) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        if (e instanceof KeyboardEvent && e.repeat) {
            // A repeated keydown should not trigger the focus state. For example,
            // there is a repeated ALT keydown if ALT+CLICK is used to open the
            // context menu and ALT is not released.
            return;
        }
        this.focusByKeyboard_ = focusByKeyboard;
        this.updateVisibility();
    }
    updateVisibility() {
        this.visible = this.focusByKeyboard_;
    }
    /**
     * Whether the focus outline should be visible.
     */
    set visible(visible) {
        this.classList_.toggle(CLASS_NAME, visible);
    }
    get visible() {
        return this.classList_.contains(CLASS_NAME);
    }
    /**
     * Gets a per document singleton focus outline manager.
     * @param doc The document to get the |FocusOutlineManager| for.
     * @return The per document singleton focus outline manager.
     */
    static forDocument(doc) {
        let manager = docsToManager.get(doc);
        if (!manager) {
            manager = new FocusOutlineManager(doc);
            docsToManager.set(doc, manager);
        }
        return manager;
    }
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
const ACTIVE_CLASS = 'focus-row-active';
/**
 * A class to manage focus between given horizontally arranged elements.
 *
 * Pressing left cycles backward and pressing right cycles forward in item
 * order. Pressing Home goes to the beginning of the list and End goes to the
 * end of the list.
 *
 * If an item in this row is focused, it'll stay active (accessible via tab).
 * If no items in this row are focused, the row can stay active until focus
 * changes to a node inside |this.boundary_|. If |boundary| isn't specified,
 * any focus change deactivates the row.
 */
class FocusRow {
    root;
    delegate;
    eventTracker = new EventTracker();
    boundary_;
    /**
     * @param root The root of this focus row. Focus classes are
     *     applied to |root| and all added elements must live within |root|.
     * @param boundary Focus events are ignored outside of this element.
     * @param delegate An optional event delegate.
     */
    constructor(root, boundary, delegate) {
        this.root = root;
        this.boundary_ = boundary || document.documentElement;
        this.delegate = delegate;
    }
    /**
     * Whether it's possible that |element| can be focused.
     */
    static isFocusable(element) {
        if (!element || element.disabled) {
            return false;
        }
        // We don't check that element.tabIndex >= 0 here because inactive rows
        // set a tabIndex of -1.
        let current = element;
        while (true) {
            assertInstanceof(current, Element);
            const style = window.getComputedStyle(current);
            if (style.visibility === 'hidden' || style.display === 'none') {
                return false;
            }
            const parent = current.parentNode;
            if (!parent) {
                return false;
            }
            if (parent === current.ownerDocument ||
                parent instanceof DocumentFragment) {
                return true;
            }
            current = parent;
        }
    }
    /**
     * A focus override is a function that returns an element that should gain
     * focus. The element may not be directly selectable for example the element
     * that can gain focus is in a shadow DOM. Allowing an override via a
     * function leaves the details of how the element is retrieved to the
     * component.
     */
    static getFocusableElement(element) {
        const withFocusable = element;
        if (withFocusable.getFocusableElement) {
            return withFocusable.getFocusableElement();
        }
        return element;
    }
    /**
     * Register a new type of focusable element (or add to an existing one).
     *
     * Example: an (X) button might be 'delete' or 'close'.
     *
     * When FocusRow is used within a FocusGrid, these types are used to
     * determine equivalent controls when Up/Down are pressed to change rows.
     *
     * Another example: mutually exclusive controls that hide each other on
     * activation (i.e. Play/Pause) could use the same type (i.e. 'play-pause')
     * to indicate they're equivalent.
     *
     * @param type The type of element to track focus of.
     * @param selectorOrElement The selector of the element
     *    from this row's root, or the element itself.
     * @return Whether a new item was added.
     */
    addItem(type, selectorOrElement) {
        assert(type);
        let element;
        if (typeof selectorOrElement === 'string') {
            element = this.root.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }
        if (!element) {
            return false;
        }
        element.setAttribute('focus-type', type);
        element.tabIndex = this.isActive() ? 0 : -1;
        this.eventTracker.add(element, 'blur', this.onBlur_.bind(this));
        this.eventTracker.add(element, 'focus', this.onFocus_.bind(this));
        this.eventTracker.add(element, 'keydown', this.onKeydown_.bind(this));
        this.eventTracker.add(element, 'mousedown', this.onMousedown_.bind(this));
        return true;
    }
    /** Dereferences nodes and removes event handlers. */
    destroy() {
        this.eventTracker.removeAll();
    }
    /**
     * @param sampleElement An element for to find an equivalent
     *     for.
     * @return An equivalent element to focus for
     *     |sampleElement|.
     */
    getCustomEquivalent(_sampleElement) {
        const focusable = this.getFirstFocusable();
        assert(focusable);
        return focusable;
    }
    /**
     * @return All registered elements (regardless of focusability).
     */
    getElements() {
        return Array.from(this.root.querySelectorAll('[focus-type]'))
            .map(FocusRow.getFocusableElement);
    }
    /**
     * Find the element that best matches |sampleElement|.
     * @param sampleElement An element from a row of the same
     *     type which previously held focus.
     * @return The element that best matches sampleElement.
     */
    getEquivalentElement(sampleElement) {
        if (this.getFocusableElements().indexOf(sampleElement) >= 0) {
            return sampleElement;
        }
        const sampleFocusType = this.getTypeForElement(sampleElement);
        if (sampleFocusType) {
            const sameType = this.getFirstFocusable(sampleFocusType);
            if (sameType) {
                return sameType;
            }
        }
        return this.getCustomEquivalent(sampleElement);
    }
    /**
     * @param type An optional type to search for.
     * @return The first focusable element with |type|.
     */
    getFirstFocusable(type) {
        const element = this.getFocusableElements().find(el => !type || el.getAttribute('focus-type') === type);
        return element || null;
    }
    /** @return Registered, focusable elements. */
    getFocusableElements() {
        return this.getElements().filter(FocusRow.isFocusable);
    }
    /**
     * @param element An element to determine a focus type for.
     * @return The focus type for |element| or '' if none.
     */
    getTypeForElement(element) {
        return element.getAttribute('focus-type') || '';
    }
    /** @return Whether this row is currently active. */
    isActive() {
        return this.root.classList.contains(ACTIVE_CLASS);
    }
    /**
     * Enables/disables the tabIndex of the focusable elements in the FocusRow.
     * tabIndex can be set properly.
     * @param active True if tab is allowed for this row.
     */
    makeActive(active) {
        if (active === this.isActive()) {
            return;
        }
        this.getElements().forEach(function (element) {
            element.tabIndex = active ? 0 : -1;
        });
        this.root.classList.toggle(ACTIVE_CLASS, active);
    }
    onBlur_(e) {
        if (!this.boundary_.contains(e.relatedTarget)) {
            return;
        }
        const currentTarget = e.currentTarget;
        if (this.getFocusableElements().indexOf(currentTarget) >= 0) {
            this.makeActive(false);
        }
    }
    onFocus_(e) {
        if (this.delegate) {
            this.delegate.onFocus(this, e);
        }
    }
    onMousedown_(e) {
        // Only accept left mouse clicks.
        if (e.button) {
            return;
        }
        // Allow the element under the mouse cursor to be focusable.
        const target = e.currentTarget;
        if (!target.disabled) {
            target.tabIndex = 0;
        }
    }
    onKeydown_(e) {
        const elements = this.getFocusableElements();
        const currentElement = FocusRow.getFocusableElement(e.currentTarget);
        const elementIndex = elements.indexOf(currentElement);
        assert(elementIndex >= 0);
        if (this.delegate && this.delegate.onKeydown(this, e)) {
            return;
        }
        const isShiftTab = !e.altKey && !e.ctrlKey && !e.metaKey && e.shiftKey &&
            e.key === 'Tab';
        if (hasKeyModifiers(e) && !isShiftTab) {
            return;
        }
        let index = -1;
        let shouldStopPropagation = true;
        if (isShiftTab) {
            // This always moves back one element, even in RTL.
            index = elementIndex - 1;
            if (index < 0) {
                // Bubble up to focus on the previous element outside the row.
                return;
            }
        }
        else if (e.key === 'ArrowLeft') {
            index = elementIndex + (isRTL() ? 1 : -1);
        }
        else if (e.key === 'ArrowRight') {
            index = elementIndex + (isRTL() ? -1 : 1);
        }
        else if (e.key === 'Home') {
            index = 0;
        }
        else if (e.key === 'End') {
            index = elements.length - 1;
        }
        else {
            shouldStopPropagation = false;
        }
        const elementToFocus = elements[index];
        if (elementToFocus) {
            this.getEquivalentElement(elementToFocus).focus();
            e.preventDefault();
        }
        if (shouldStopPropagation) {
            e.stopPropagation();
        }
    }
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk = false;
document.addEventListener('pointerdown', function () {
    hideInk = true;
}, true);
document.addEventListener('keydown', function () {
    hideInk = false;
}, true);
/**
 * Attempts to track whether focus outlines should be shown, and if they
 * shouldn't, removes the "ink" (ripple) from a control while focusing it.
 * This is helpful when a user is clicking/touching, because it's not super
 * helpful to show focus ripples in that case. This is Polymer-specific.
 */
function focusWithoutInk(toFocus) {
    // |toFocus| does not have a 'noink' property, so it's unclear whether the
    // element has "ink" and/or whether it can be suppressed. Just focus().
    if (!('noink' in toFocus) || !hideInk) {
        toFocus.focus();
        return;
    }
    const toFocusWithNoInk = toFocus;
    // Make sure the element is in the document we're listening to events on.
    assert(document === toFocusWithNoInk.ownerDocument);
    const { noink } = toFocusWithNoInk;
    toFocusWithNoInk.noink = true;
    toFocusWithNoInk.focus();
    toFocusWithNoInk.noink = noink;
}

let instance$R = null;
function getCss$N() {
    return instance$R || (instance$R = [...[], css `:host{--cr-hairline:1px solid var(--color-menu-separator,var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,var(--cr-fallback-color-on-surface))}:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:none;overflow:var(--cr-action-menu-overflow,auto);padding:0;position:absolute}:host([use-unbounded]) dialog{max-height:none;position:fixed}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:none;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,0.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:none}:host dialog[open] ::slotted(.dropdown-item){user-select:auto}:host ::slotted(.dropdown-item:focus-visible){outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{outline:none;padding:var(--cr-action-menu-padding,8px 0)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$D() {
    return html `
<dialog id="dialog" part="dialog" @close="${this.onNativeDialogClose_}"
    @beforetoggle="${this.onDialogBeforetoggle_}"
    ?unbounded="${this.useUnbounded_}" role="application"
    aria-roledescription="${this.roleDescription || nothing}">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1"
      aria-label="${this.accessibilityLabel || nothing}">
    <slot id="contentNode" @slotchange="${this.onSlotchange_}"></slot>
  </div>
</dialog>`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @param e The focusout event.
 * @param element The element that should contain the focus.
 * @return Whether the focus is moving outside of the element.
 */
function hasFocusoutOutside(e, element) {
    return !element || !element.contains(e.relatedTarget);
}
/**
 * @return Whether the Unbounded Element API is available. The API is only
 *     installed in contexts and on platforms that can host an external OS
 *     surface, so it must be feature detected before use.
 */
function isUnboundedSupported() {
    return 'showUnboundedElement' in HTMLElement.prototype;
}
var AnchorAlignment;
(function (AnchorAlignment) {
    AnchorAlignment[AnchorAlignment["BEFORE_START"] = -2] = "BEFORE_START";
    AnchorAlignment[AnchorAlignment["AFTER_START"] = -1] = "AFTER_START";
    AnchorAlignment[AnchorAlignment["CENTER"] = 0] = "CENTER";
    AnchorAlignment[AnchorAlignment["BEFORE_END"] = 1] = "BEFORE_END";
    AnchorAlignment[AnchorAlignment["AFTER_END"] = 2] = "AFTER_END";
})(AnchorAlignment || (AnchorAlignment = {}));
const DROPDOWN_ITEM_CLASS = 'dropdown-item';
const SELECTABLE_DROPDOWN_ITEM_QUERY = `.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;
const AFTER_END_OFFSET = 10;
/**
 * Returns the point to start along the X or Y axis given a start and end
 * point to anchor to, the length of the target and the direction to anchor
 * in. If honoring the anchor would force the menu outside of min/max, this
 * will ignore the anchor position and try to keep the menu within min/max.
 */
function getStartPointWithAnchor(start, end, menuLength, anchorAlignment, min, max, unbounded = false) {
    let startPoint = 0;
    switch (anchorAlignment) {
        case AnchorAlignment.BEFORE_START:
            startPoint = start - menuLength;
            break;
        case AnchorAlignment.AFTER_START:
            startPoint = start;
            break;
        case AnchorAlignment.CENTER:
            startPoint = (start + end - menuLength) / 2;
            break;
        case AnchorAlignment.BEFORE_END:
            startPoint = end - menuLength;
            break;
        case AnchorAlignment.AFTER_END:
            startPoint = end;
            break;
        default:
            assertNotReachedCase();
    }
    // Unbounded case clamping: Clamps to screen size as well as max/min.
    if (unbounded) {
        const isForward = (anchorAlignment === AnchorAlignment.AFTER_END ||
            anchorAlignment === AnchorAlignment.AFTER_START);
        const isBackward = (anchorAlignment === AnchorAlignment.BEFORE_START ||
            anchorAlignment === AnchorAlignment.BEFORE_END);
        const spaceForward = max - end;
        const spaceBackward = start - min;
        // If opening Forward (DOWN / RIGHT) overflows the screen limit:
        if (isForward && Number.isFinite(max) && (startPoint + menuLength > max)) {
            if (spaceBackward >= menuLength || spaceBackward > spaceForward) {
                // Flip to Backward (UP / LEFT)
                startPoint = (anchorAlignment === AnchorAlignment.AFTER_END) ?
                    start - menuLength :
                    end - menuLength;
            }
        }
        else if (isBackward && Number.isFinite(min) && (startPoint < min)) {
            // If opening Backward (UP / LEFT) underflows the screen limit:
            if (spaceForward >= menuLength || spaceForward > spaceBackward) {
                // Flip to Forward (DOWN / RIGHT)
                startPoint =
                    (anchorAlignment === AnchorAlignment.BEFORE_START) ? end : start;
            }
        }
        else if (anchorAlignment === AnchorAlignment.CENTER) {
            if (Number.isFinite(max) && startPoint + menuLength > max) {
                startPoint = max - menuLength;
            }
            if (Number.isFinite(min) && startPoint < min) {
                startPoint = min;
            }
        }
        return startPoint;
    }
    // Non-unbounded case clamping.
    if (startPoint + menuLength > max) {
        startPoint = end - menuLength;
    }
    if (startPoint < min) {
        startPoint = start;
    }
    startPoint = Math.max(min, Math.min(startPoint, max - menuLength));
    return startPoint;
}
function getDefaultShowConfig() {
    return {
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        anchorAlignmentX: AnchorAlignment.AFTER_START,
        anchorAlignmentY: AnchorAlignment.AFTER_START,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
    };
}
class CrActionMenuElement extends CrLitElement {
    static get is() {
        return 'cr-action-menu';
    }
    static get styles() {
        return getCss$N();
    }
    render() {
        return getHtml$D.bind(this)();
    }
    static get properties() {
        return {
            // Accessibility text of the menu. Should be something along the lines of
            // "actions", or "more actions".
            accessibilityLabel: { type: String },
            // Setting this flag will make the menu listen for content size changes
            // and reposition to its anchor accordingly.
            autoReposition: { type: Boolean },
            // Setting this flag will cause the menu to automatically close when
            // focus moves outside the menu.
            autoCloseOnFocusout: { type: Boolean },
            open: {
                type: Boolean,
                notify: true,
            },
            // Setting this flag will cause the menu to open as a non-modal dialog.
            // Useful when the menu needs to remain open while interacting with
            // other parts of the page.
            nonModal: {
                type: Boolean,
                reflect: true,
            },
            // Descriptor of the menu. Should be something along the lines of "menu"
            roleDescription: { type: String },
            // Enables Unbounded Element support on the internal <dialog>, allowing
            // the action menu to render into an external OS surface outside the host
            // window/WebContents. Position calculations use screen coordinates, and
            // the menu does not automatically close on host window resize.
            useUnbounded_: { type: Boolean },
        };
    }
    #accessibilityLabel_accessor_storage;
    get accessibilityLabel() { return this.#accessibilityLabel_accessor_storage; }
    set accessibilityLabel(value) { this.#accessibilityLabel_accessor_storage = value; }
    #autoReposition_accessor_storage = false;
    get autoReposition() { return this.#autoReposition_accessor_storage; }
    set autoReposition(value) { this.#autoReposition_accessor_storage = value; }
    #autoCloseOnFocusout_accessor_storage = false;
    get autoCloseOnFocusout() { return this.#autoCloseOnFocusout_accessor_storage; }
    set autoCloseOnFocusout(value) { this.#autoCloseOnFocusout_accessor_storage = value; }
    #open_accessor_storage = false;
    get open() { return this.#open_accessor_storage; }
    set open(value) { this.#open_accessor_storage = value; }
    #roleDescription_accessor_storage;
    get roleDescription() { return this.#roleDescription_accessor_storage; }
    set roleDescription(value) { this.#roleDescription_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #useUnbounded__accessor_storage = false;
    get useUnbounded_() { return this.#useUnbounded__accessor_storage; }
    set useUnbounded_(value) { this.#useUnbounded__accessor_storage = value; }
    /**
     * Enables unbounded mode, which renders the menu into an external OS
     * surface, allowing it to extend outside the host window. Unbounded mode is
     * only enabled if the Unbounded Element API is supported in this
     * environment, and cannot be disabled once enabled.
     *
     * Note: This awaits the pending rendering update so that the `unbounded`
     * attribute is applied to the inner <dialog> before it resolves.
     * showUnboundedElement() rejects if that attribute is not already present,
     * so this must be awaited before the menu is first opened.
     *
     * @return Whether unbounded mode is enabled.
     */
    async setUnbounded() {
        if (!isUnboundedSupported()) {
            console.warn('CrActionMenu: Unbounded Element API is not supported in this ' +
                'environment.');
            return false;
        }
        this.useUnbounded_ = true;
        await this.updateComplete;
        return true;
    }
    boundClose_ = null;
    resizeObserver_ = null;
    hasMousemoveListener_ = false;
    anchorElement_ = null;
    lastConfig_ = null;
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeListeners_();
    }
    firstUpdated() {
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('mouseover', this.onMouseover_);
        this.addEventListener('click', this.onClick_);
        this.addEventListener('focusout', this.onFocusout_.bind(this));
    }
    /**
     * Exposing internal <dialog> elements for tests.
     */
    getDialog() {
        return this.$.dialog;
    }
    getUnboundedDialog_() {
        return this.$.dialog;
    }
    showUnboundedDialog_() {
        this.getUnboundedDialog_()
            .showUnboundedElement()
            .then(() => {
            this.fire('unbounded-shown');
        })
            .catch(err => this.handleUnboundedError_('showUnboundedElement', err));
    }
    hideUnboundedDialog_() {
        this.getUnboundedDialog_().hideUnboundedElement().catch(err => this.handleUnboundedError_('hideUnboundedElement', err));
    }
    handleUnboundedError_(operation, err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
            // AbortError is expected if the unbounded element is dismissed by user
            // action (e.g. ESC key) before presentation completes.
            return;
        }
        console.error(`${operation} failed:`, err);
        if (operation === 'showUnboundedElement') {
            this.fire('unbounded-show-error');
        }
    }
    removeListeners_() {
        window.removeEventListener('resize', this.boundClose_);
        window.removeEventListener('popstate', this.boundClose_);
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
    }
    onFocusout_(e) {
        if (this.autoCloseOnFocusout && hasFocusoutOutside(e, this)) {
            this.close();
        }
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.$.dialog) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire('close');
    }
    onClick_(e) {
        if (e.composedPath()[0] === this.$.dialog) {
            this.close();
            e.stopPropagation();
        }
    }
    onKeyDown_(e) {
        e.stopPropagation();
        if (e.key === 'Tab' || e.key === 'Escape') {
            this.close();
            if (e.key === 'Tab') {
                this.fire('tabkeyclose', { shiftKey: e.shiftKey });
            }
            e.preventDefault();
            return;
        }
        if ((e.key !== 'Enter' || (isMac && e.ctrlKey)) && e.key !== 'ArrowUp' &&
            e.key !== 'ArrowDown') {
            return;
        }
        const options = Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));
        if (options.length === 0) {
            return;
        }
        const focused = getDeepActiveElement();
        const index = options.findIndex(option => FocusRow.getFocusableElement(option) === focused);
        if (e.key === 'Enter') {
            // If a menu item has focus, don't change focus or close menu on 'Enter'.
            if (index !== -1) {
                return;
            }
            if (isWindows || isMac) {
                this.close();
                e.preventDefault();
                return;
            }
        }
        e.preventDefault();
        this.updateFocus_(options, index, e.key !== 'ArrowUp');
        if (!this.hasMousemoveListener_) {
            this.hasMousemoveListener_ = true;
            this.addEventListener('mousemove', e => {
                this.onMouseover_(e);
                this.hasMousemoveListener_ = false;
            }, { once: true });
        }
    }
    focusElement_(el) {
        // preventScroll is only applied when useUnbounded is true to prevent
        // scrolling the host document while preserving full keyboard
        // accessibility and focus outline indicators.
        el.focus({ preventScroll: this.useUnbounded_ });
    }
    onMouseover_(e) {
        const item = e.composedPath()
            .find(el => el.matches && el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY));
        this.focusElement_(item || this.$.wrapper);
    }
    updateFocus_(options, focusedIndex, next) {
        const numOptions = options.length;
        assert(numOptions > 0);
        let index;
        if (focusedIndex === -1) {
            index = next ? 0 : numOptions - 1;
        }
        else {
            const delta = next ? 1 : -1;
            index = (numOptions + focusedIndex + delta) % numOptions;
        }
        this.focusElement_(options[index]);
    }
    close(unboundedAlreadyDismissed = false) {
        if (!this.open) {
            return;
        }
        this.open = false;
        if (this.useUnbounded_ && !unboundedAlreadyDismissed) {
            this.hideUnboundedDialog_();
        }
        // Removing 'resize' and 'popstate' listeners when dialog is closed.
        this.removeListeners_();
        // Closing the native <dialog> is required for both standard and unbounded
        // menus: hideUnboundedElement() only tears down the external platform
        // surface, leaving the HTML <dialog> open in DOM until close() is called.
        this.$.dialog.close();
        if (this.anchorElement_) {
            assert(this.anchorElement_);
            focusWithoutInk(this.anchorElement_);
            this.anchorElement_ = null;
        }
        if (this.lastConfig_) {
            this.lastConfig_ = null;
        }
    }
    /**
     * Shows the menu anchored to the given element.
     */
    showAt(anchorElement, config) {
        this.anchorElement_ = anchorElement;
        // Scroll the anchor element into view so that the bounding rect will be
        // accurate for where the menu should be shown.
        this.anchorElement_.scrollIntoViewIfNeeded();
        const rect = this.anchorElement_.getBoundingClientRect();
        let height = rect.height;
        if (config && !config.noOffset &&
            config.anchorAlignmentY === AnchorAlignment.AFTER_END) {
            // When an action menu is positioned after the end of an element, the
            // action menu can appear too far away from the anchor element, typically
            // because anchors tend to have padding. So we offset the height a bit
            // so the menu shows up slightly closer to the content of anchor.
            height -= AFTER_END_OFFSET;
        }
        this.showAtPosition(Object.assign({
            top: rect.top,
            left: rect.left,
            height: height,
            width: rect.width,
            // Default to anchoring towards the left.
            anchorAlignmentX: AnchorAlignment.BEFORE_END,
        }, config));
        this.focusElement_(this.$.wrapper);
    }
    /**
     * Shows the menu anchored to the given box. The anchor alignment is
     * specified as an X and Y alignment which represents a point in the anchor
     * where the menu will align to, which can have the menu either before or
     * after the given point in each axis. Center alignment places the center of
     * the menu in line with the center of the anchor. Coordinates are relative to
     * the top-left of the viewport.
     *
     *            y-start
     *         _____________
     *         |           |
     *         |           |
     *         |   CENTER  |
     * x-start |     x     | x-end
     *         |           |
     *         |anchor box |
     *         |___________|
     *
     *             y-end
     *
     * For example, aligning the menu to the inside of the top-right edge of
     * the anchor, extending towards the bottom-left would use a alignment of
     * (BEFORE_END, AFTER_START), whereas centering the menu below the bottom
     * edge of the anchor would use (CENTER, AFTER_END).
     */
    showAtPosition(config) {
        // Save the scroll position of the viewport.
        const doc = document.scrollingElement;
        const scrollLeft = doc.scrollLeft;
        const scrollTop = doc.scrollTop;
        // Reset position so that layout isn't affected by the previous position,
        // and so that the dialog is positioned at the top-start corner of the
        // document.
        this.resetStyle_();
        this.nonModal ? this.$.dialog.show() : this.$.dialog.showModal();
        this.open = true;
        if (this.useUnbounded_) {
            this.positionDialog_(config);
            this.showUnboundedDialog_();
        }
        else {
            config.top += scrollTop;
            config.left += scrollLeft;
            this.positionDialog_(Object.assign({
                minX: scrollLeft,
                minY: scrollTop,
                maxX: scrollLeft + doc.clientWidth,
                maxY: scrollTop + doc.clientHeight,
            }, config));
        }
        // Restore the scroll position.
        doc.scrollTop = scrollTop;
        doc.scrollLeft = scrollLeft;
        this.addListeners_();
        // Focus the first selectable item.
        const openedByKey = FocusOutlineManager.forDocument(document).visible;
        if (openedByKey) {
            const firstSelectableItem = this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);
            if (firstSelectableItem) {
                requestAnimationFrame(() => {
                    // Wait for the next animation frame for the dialog to become visible.
                    this.focusElement_(firstSelectableItem);
                });
            }
        }
    }
    resetStyle_() {
        this.$.dialog.style.left = '';
        this.$.dialog.style.right = '';
        this.$.dialog.style.top = '0';
    }
    /**
     * Position the dialog using the coordinates in config. Coordinates are
     * relative to the top-left of the viewport when scrolled to (0, 0).
     */
    positionDialog_(config) {
        this.lastConfig_ = config;
        const c = Object.assign(getDefaultShowConfig(), config);
        if (this.useUnbounded_) {
            // In unbounded mode, the menu can render outside the host window.
            // Compute boundary coordinates relative to the physical screen origin so
            // the dialog is clamped to the visible monitor rather than the host
            // document.
            const screenLeft = window.screenX;
            const screenTop = window.screenY;
            const screenWidth = window.screen.availWidth;
            const screenHeight = window.screen.availHeight;
            if (config.minX === undefined) {
                c.minX = -screenLeft;
            }
            if (config.minY === undefined) {
                c.minY = -screenTop;
            }
            if (config.maxX === undefined) {
                c.maxX = screenWidth - screenLeft;
            }
            if (config.maxY === undefined) {
                c.maxY = screenHeight - screenTop;
            }
        }
        const top = c.top;
        const left = c.left;
        const bottom = top + c.height;
        const right = left + c.width;
        // Flip the X anchor in RTL.
        const rtl = getComputedStyle(this).direction === 'rtl';
        if (rtl) {
            c.anchorAlignmentX *= -1;
        }
        const offsetWidth = this.$.dialog.offsetWidth;
        const menuLeft = getStartPointWithAnchor(left, right, offsetWidth, c.anchorAlignmentX, c.minX, c.maxX, this.useUnbounded_);
        if (rtl) {
            const menuRight = document.scrollingElement.clientWidth - menuLeft - offsetWidth;
            this.$.dialog.style.right = menuRight + 'px';
        }
        else {
            this.$.dialog.style.left = menuLeft + 'px';
        }
        const menuTop = getStartPointWithAnchor(top, bottom, this.$.dialog.offsetHeight, c.anchorAlignmentY, c.minY, c.maxY, this.useUnbounded_);
        this.$.dialog.style.top = menuTop + 'px';
    }
    onSlotchange_() {
        for (const node of this.$.contentNode.assignedElements({ flatten: true })) {
            if (node.classList.contains(DROPDOWN_ITEM_CLASS) &&
                !node.getAttribute('role')) {
                node.setAttribute('role', 'menuitem');
            }
        }
    }
    /**
     * In unbounded mode, the native OS popup window can be dismissed directly by
     * light dismiss (e.g. clicking outside the host document), firing a
     * Blink 'beforetoggle' ToggleEvent when its presentation state transitions to
     * 'closed'. We listen for this event to close the dialog when the unbounded
     * window gets light dismissed.
     */
    onDialogBeforetoggle_(e) {
        if (!this.useUnbounded_) {
            return;
        }
        const toggleEvent = e;
        if (toggleEvent.newState === 'closed' && this.open) {
            this.close(/*unboundedAlreadyDismissed=*/ true);
        }
    }
    addListeners_() {
        this.boundClose_ = this.boundClose_ || (() => {
            if (this.$.dialog.open) {
                this.close();
            }
        });
        window.addEventListener('resize', this.boundClose_);
        window.addEventListener('popstate', this.boundClose_);
        if (this.autoReposition) {
            this.resizeObserver_ = new ResizeObserver(() => {
                if (this.lastConfig_) {
                    this.positionDialog_(this.lastConfig_);
                    this.fire('cr-action-menu-repositioned'); // For easier testing.
                }
            });
            this.resizeObserver_.observe(this.$.dialog);
        }
    }
}
customElements.define(CrActionMenuElement.is, CrActionMenuElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BeforeUnloadProxyImpl {
    preventDefault(event) {
        event.preventDefault();
    }
    static getInstance() {
        return instance$Q || (instance$Q = new BeforeUnloadProxyImpl());
    }
    static setInstance(obj) {
        instance$Q = obj;
    }
}
let instance$Q = null;

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Converts `rect` from `oldRotations` clockwise rotations to `newRotations`
 * clockwise rotations. `newPageWidth` should be the page width in
 * `newRotations` coordinates, and `newPageHeight` should be the page height in
 * `newRotations` coordinates.
 */
function convertRotatedCoordinates(rect, oldRotations, newRotations, newPageWidth, newPageHeight) {
    const pageWidthNR = newRotations % 2 === 0 ? newPageWidth : newPageHeight;
    const pageHeightNR = newRotations % 2 === 0 ? newPageHeight : newPageWidth;
    const nonRotated = {
        locationX: rect.locationX,
        locationY: rect.locationY,
        width: oldRotations % 2 === 0 ? rect.width : rect.height,
        height: oldRotations % 2 === 0 ? rect.height : rect.width,
    };
    switch (oldRotations % 4) {
        case 0:
            // Already populated correctly.
            break;
        case 1:
            nonRotated.locationX = rect.locationY;
            nonRotated.locationY = pageHeightNR - rect.locationX - rect.width;
            break;
        case 2:
            nonRotated.locationX = pageWidthNR - rect.locationX - rect.width;
            nonRotated.locationY = pageHeightNR - rect.locationY - rect.height;
            break;
        case 3:
            nonRotated.locationX = pageWidthNR - rect.locationY - rect.height;
            nonRotated.locationY = rect.locationX;
            break;
        default:
            assertNotReached();
    }
    const newRotated = {
        locationX: nonRotated.locationX,
        locationY: nonRotated.locationY,
        width: newRotations % 2 === 0 ? nonRotated.width : nonRotated.height,
        height: newRotations % 2 === 0 ? nonRotated.height : nonRotated.width,
    };
    switch (newRotations % 4) {
        case 0:
            break;
        case 1:
            newRotated.locationX =
                pageHeightNR - nonRotated.locationY - nonRotated.height;
            newRotated.locationY = nonRotated.locationX;
            break;
        case 2:
            newRotated.locationX =
                pageWidthNR - nonRotated.locationX - nonRotated.width;
            newRotated.locationY =
                pageHeightNR - nonRotated.locationY - nonRotated.height;
            break;
        case 3:
            newRotated.locationX = nonRotated.locationY;
            newRotated.locationY =
                pageWidthNR - nonRotated.locationX - nonRotated.width;
            break;
        default:
            assertNotReached();
    }
    return newRotated;
}
/**
 * Converts `pageRect` on page `pageIndex` to screen coordinates.
 */
function pageToScreenCoordinates(pageIndex, pageRect, viewport) {
    const pageDimensions = viewport.getPageScreenRect(pageIndex);
    const zoom = viewport.getZoom();
    // Apply zoom.
    const zoomed = {
        locationX: pageRect.locationX * zoom,
        locationY: pageRect.locationY * zoom,
        width: pageRect.width * zoom,
        height: pageRect.height * zoom,
    };
    // Apply rotation
    const rotated = convertRotatedCoordinates(zoomed, 0, viewport.getClockwiseRotations(), pageDimensions.width, pageDimensions.height);
    // Apply offsets.
    return {
        locationX: rotated.locationX + pageDimensions.x,
        locationY: rotated.locationY + pageDimensions.y,
        height: rotated.height,
        width: rotated.width,
    };
}
/**
 * Converts `screenRect` on page `pageIndex` to page coordinates.
 */
function screenToPageCoordinates(pageIndex, screenRect, viewport) {
    const zoom = viewport.getZoom();
    const pageDimensions = viewport.getPageScreenRect(pageIndex);
    // Undo offset
    const noOffset = {
        locationX: screenRect.locationX - pageDimensions.x,
        locationY: screenRect.locationY - pageDimensions.y,
        width: screenRect.width,
        height: screenRect.height,
    };
    // Undo rotation
    const rotations = viewport.getClockwiseRotations();
    const pageWidth = rotations % 2 === 0 ? pageDimensions.width : pageDimensions.height;
    const pageHeight = rotations % 2 === 0 ? pageDimensions.height : pageDimensions.width;
    const noRotation = convertRotatedCoordinates(noOffset, rotations, 0, pageWidth, pageHeight);
    // Undo zoom.
    return {
        height: noRotation.height / zoom,
        locationX: noRotation.locationX / zoom,
        locationY: noRotation.locationY / zoom,
        width: noRotation.width / zoom,
    };
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UndoRedoStack {
    stack_ = [];
    pointer_ = -1;
    savedPointer_ = -1;
    savingPointer_ = -1;
    eventTarget_;
    constructor(eventTarget) {
        this.eventTarget_ = eventTarget;
    }
    dispatchStateChanged_() {
        const detail = {
            canUndo: this.canUndo(),
            canRedo: this.canRedo(),
            hasUnsavedEdits: this.isDirty(),
        };
        this.eventTarget_.dispatchEvent(new CustomEvent('undo-redo-state-changed', { detail }));
    }
    push(state) {
        // Remove everything past the current pointer, and push new change.
        this.stack_.splice(this.pointer_ + 1);
        this.stack_.push(state);
        // Last saved state that can no longer be returned to.
        if (this.savedPointer_ > this.pointer_) {
            this.savedPointer_ = -1; // Invalidate
        }
        if (this.savingPointer_ > this.pointer_) {
            // Mark as invalid so whenever save is completed, the save pointer
            // will be invalidated also.
            this.savingPointer_ = -1;
        }
        this.pointer_++;
        this.dispatchStateChanged_();
    }
    undo() {
        if (!this.canUndo()) {
            return null;
        }
        const state = this.stack_[this.pointer_];
        this.pointer_--;
        this.dispatchStateChanged_();
        return state;
    }
    redo() {
        if (!this.canRedo()) {
            return null;
        }
        this.pointer_++;
        const state = this.stack_[this.pointer_];
        this.dispatchStateChanged_();
        return state;
    }
    canUndo() {
        return this.pointer_ >= 0;
    }
    canRedo() {
        return this.pointer_ < this.stack_.length - 1;
    }
    initiateSave() {
        assert(this.savingPointer_ === -1);
        this.savingPointer_ = this.pointer_;
    }
    setSaved() {
        const changed = this.savedPointer_ !== this.savingPointer_;
        this.savedPointer_ = this.savingPointer_;
        this.savingPointer_ = -1;
        if (changed) {
            this.dispatchStateChanged_();
        }
    }
    cancelSave() {
        this.savingPointer_ = -1;
    }
    isDirty() {
        return this.pointer_ !== this.savedPointer_;
    }
    resetForTesting() {
        this.stack_ = [];
        this.pointer_ = -1;
        this.savedPointer_ = -1;
        this.savingPointer_ = -1;
        this.dispatchStateChanged_();
    }
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DEFAULT_TEXTBOX_WIDTH = 222;
// Blink crashes when rendering a textarea that is too small (<24px wide).
// This value is held constant regardless of zoom due to the rendering issue.
const MIN_TEXTBOX_SIZE_PX = 24;
function stylesEqual(style1, style2) {
    return style1.bold === style2.bold && style1.italic === style2.italic &&
        style1.strikethrough === style2.strikethrough &&
        style1.underline === style2.underline;
}
function getClampedLocation(location, width, height, pageDimensions) {
    const maxX = pageDimensions.x + pageDimensions.width - width;
    const maxY = pageDimensions.y + pageDimensions.height - height;
    return {
        x: Math.max(pageDimensions.x, Math.min(location.x, maxX)),
        y: Math.max(pageDimensions.y, Math.min(location.y, maxY)),
    };
}
class Ink2Manager extends EventTarget {
    brush_ = { type: AnnotationBrushType.PEN };
    stack_ = new UndoRedoStack(this);
    listener_;
    // Map from page numbers to annotations on that page.
    // The annotations on each page are stored in a map from id to TextAnnotation.
    annotations_ = new Map();
    // The attributes selected by the user for new annotations.
    attributes_ = {
        typeface: TextTypeface.SANS_SERIF,
        size: 12,
        color: { r: 0, g: 0, b: 0 },
        alignment: TextAlignment.LEFT,
        styles: {
            [TextStyle.BOLD]: false,
            [TextStyle.ITALIC]: false,
            [TextStyle.STRIKETHROUGH]: false,
            [TextStyle.UNDERLINE]: false,
        },
    };
    brushResolver_ = null;
    // Holds text attributes pre-populated from an existing annotation that the
    // user is editing. Null if the user is not editing an annotation or is
    // creating a new annotation using |attributes_|.
    existingAnnotationAttributes_ = null;
    clipboardAnnotation_ = null;
    isCutAnnotation_ = false;
    // Maps page index to the page coordinates of the most recently pasted
    // annotation on that page.
    pastedPageRects_ = new Map();
    pluginController_ = PluginController.getInstance();
    textResolver_ = null;
    viewport_ = null;
    nextAnnotationId_ = 0;
    // Keeps track of fonts that have been sent to the backend so that each font
    // is only serialized and loaded once.
    knownFontIds_ = [];
    constructor() {
        super();
        this.listener_ = this.handleFinishInkStroke_.bind(this);
        this.pluginController_.getEventTarget().addEventListener(PluginControllerEventType.FINISH_INK_STROKE, this.listener_);
    }
    destroy() {
        this.pluginController_.getEventTarget().removeEventListener(PluginControllerEventType.FINISH_INK_STROKE, this.listener_);
    }
    setViewport(viewport) {
        this.viewport_ = viewport;
    }
    get annotations() {
        return this.annotations_;
    }
    resetStackForTesting() {
        this.stack_.resetForTesting();
    }
    // Initialize a text annotation at `location` in screen coordinates.
    // If a text annotation already exists at `location`, activates it for
    // editing. If `location` is not provided, creates the annotation at the
    // center of the visible portion of the most visible page. If `onlyExisting`
    // is true, only existing annotations will be activated; no new annotation
    // will be created if none exists at `location`. Returns true if an annotation
    // was initialized or activated, and false otherwise.
    initializeTextAnnotation(location, onlyExisting = false) {
        assert(this.isTextInitializationComplete());
        assert(this.viewport_);
        const isMouse = !!location;
        const page = location ? this.viewport_.getPageAtPoint(location) :
            this.viewport_.getMostVisiblePage();
        if (page === -1) {
            // Don't initialize an annotation if the click isn't on the PDF itself.
            return false;
        }
        if (location) {
            const annotationsMap = this.annotations_.get(page);
            if (annotationsMap && annotationsMap.size > 0) {
                let candidate = null;
                let candidateScreenRect = null;
                for (const annotation of annotationsMap.values()) {
                    const screenRect = pageToScreenCoordinates(page, annotation.textBoxRect, this.viewport_);
                    if (location.x >= screenRect.locationX &&
                        location.x <= screenRect.locationX + screenRect.width &&
                        location.y >= screenRect.locationY &&
                        location.y <= screenRect.locationY + screenRect.height) {
                        if (!candidate || annotation.id > candidate.id) {
                            candidate = annotation;
                            candidateScreenRect = screenRect;
                        }
                    }
                }
                if (candidate) {
                    assert(candidateScreenRect);
                    return this.activateAnnotation_(candidate, candidateScreenRect);
                }
            }
        }
        if (onlyExisting) {
            return false;
        }
        const pageDimensions = this.viewport_.getPageScreenRect(page);
        // Enough space for 1 line of text. Default line height is around 1.2.
        const newBoxHeight = Math.max(MIN_TEXTBOX_SIZE_PX, Math.ceil(1.2 * this.attributes_.size * this.viewport_.getZoom()));
        let newBoxWidth = Math.min(DEFAULT_TEXTBOX_WIDTH, Math.max(MIN_TEXTBOX_SIZE_PX, pageDimensions.width));
        // Set location to the middle of the visible portion of the page.
        if (!location) {
            const minX = Math.max(pageDimensions.x, 0);
            const minY = Math.max(pageDimensions.y, 0);
            const maxX = Math.min(pageDimensions.x + pageDimensions.width, this.viewport_.size.width);
            const maxY = Math.min(pageDimensions.y + pageDimensions.height, this.viewport_.size.height);
            location = {
                x: Math.max(0, (minX + maxX) / 2 - newBoxWidth / 2),
                y: Math.max(0, (minY + maxY) / 2 - newBoxHeight / 2),
            };
        }
        // Adjust the location for a new annotation click so that the center of
        // the first line of text will align with the center of the cursor,
        // instead of the top left corner of the text aligning with the center of
        // the cursor. This does not apply for annotations created with the
        // keyboard.
        if (isMouse) {
            location.y =
                location.y - this.attributes_.size * this.viewport_.getZoom() / 2;
        }
        const minWidth = 2 * MIN_TEXTBOX_SIZE_PX;
        if (pageDimensions.width < minWidth ||
            pageDimensions.height < newBoxHeight) {
            // Don't try to create a new textbox if the visible page is too small.
            // The box needs to be big enough in screen coordinates to fit at
            // least some text, and Blink can't lay out arbitrarily small text
            // boxes.
            return false;
        }
        location =
            getClampedLocation(location, minWidth, newBoxHeight, pageDimensions);
        // Check if the box should be narrowed to fit in the page while being
        // as close as possible to the original click position.
        newBoxWidth = Math.min(newBoxWidth, pageDimensions.x + pageDimensions.width - location.x);
        const viewportRotations = this.viewport_.getClockwiseRotations();
        const annotation = {
            id: this.nextAnnotationId_,
            mojoTextInfo: new ArrayBuffer(0),
            pageIndex: page,
            pdfZoom: this.viewport_.getZoom(),
            text: '',
            textAttributes: structuredClone(this.attributes_),
            textBoxRect: {
                height: newBoxHeight,
                locationX: location.x,
                locationY: location.y,
                width: newBoxWidth,
            },
            textOrientation: (4 - viewportRotations) % 4,
            viewportOrientation: viewportRotations,
        };
        this.nextAnnotationId_++;
        this.initializeTextBox_(annotation, pageDimensions, /*isPaste=*/ false);
        return true;
    }
    // Activates an existing text annotation with `id` for editing.
    // Returns true if the annotation was found and activated, and false
    // otherwise.
    activateAnnotationById(id) {
        assert(this.isTextInitializationComplete());
        for (const pageAnnotations of this.annotations_.values()) {
            const annotation = pageAnnotations.get(id);
            if (annotation) {
                assert(this.viewport_);
                const screenRect = pageToScreenCoordinates(annotation.pageIndex, annotation.textBoxRect, this.viewport_);
                return this.activateAnnotation_(annotation, screenRect);
            }
        }
        return false;
    }
    // Activates an existing text annotation for editing.
    activateAnnotation_(annotation, screenRect) {
        assert(this.viewport_);
        const pageDimensions = this.viewport_.getPageScreenRect(annotation.pageIndex);
        if (!pageDimensions) {
            return false;
        }
        const annotationToActivate = structuredClone(annotation);
        annotationToActivate.textBoxRect = screenRect;
        this.initializeTextBox_(annotationToActivate, pageDimensions, /*isPaste=*/ false, 
        /*isExisting=*/ true);
        this.pluginController_.editTextAnnotation(annotation.id);
        return true;
    }
    initializeTextBox_(annotation, pageDimensions, isPaste, isExisting = false) {
        this.existingAnnotationAttributes_ = (isPaste || isExisting) ?
            structuredClone(annotation.textAttributes) :
            null;
        this.dispatchEvent(new CustomEvent('initialize-text-box', {
            detail: {
                annotation,
                pageDimensions,
                isPaste,
            },
        }));
        // Notify other listeners of any changes to the viewport and/or attributes,
        // since these may change with the annotation.
        this.fireAttributesChanged_();
    }
    saveAnnotationToClipboard(annotation, isCut = false) {
        assert(annotation.text !== '');
        this.clipboardAnnotation_ = structuredClone(annotation);
        this.isCutAnnotation_ = isCut;
        this.pastedPageRects_.clear();
        if (!isCut) {
            this.pastedPageRects_.set(annotation.pageIndex, annotation.textBoxRect);
        }
        this.dispatchEvent(new CustomEvent('saved-annotation-to-clipboard-for-testing', {
            detail: {
                annotation: this.clipboardAnnotation_,
                isCut: this.isCutAnnotation_,
            },
        }));
    }
    // Computes the page, page dimensions, and screen coordinates for pasting the
    // clipboard annotation. Falls back to the original page if the annotation
    // does not fit on the currently visible page. Returns null if the page
    // dimensions cannot be retrieved.
    getPastedAnnotationPosition_() {
        assert(this.clipboardAnnotation_);
        assert(this.viewport_);
        let page = this.viewport_.getMostVisiblePage();
        let pageDimensions = this.viewport_.getPageScreenRect(page);
        if (pageDimensions.height === 0 || pageDimensions.width === 0) {
            return null;
        }
        // If the annotation's dimensions are too large to fit on the target page,
        // fall back to pasting it on the original page where it was created.
        if (page !== this.clipboardAnnotation_.pageIndex) {
            const screenRectOnPage = pageToScreenCoordinates(page, this.clipboardAnnotation_.textBoxRect, this.viewport_);
            if (screenRectOnPage.width > pageDimensions.width ||
                screenRectOnPage.height > pageDimensions.height) {
                page = this.clipboardAnnotation_.pageIndex;
                pageDimensions = this.viewport_.getPageScreenRect(page);
                if (pageDimensions.height === 0 || pageDimensions.width === 0) {
                    return null;
                }
            }
        }
        const lastRect = this.pastedPageRects_.get(page);
        // On the first paste on a page, place the annotation at the original
        // location (0 offset). Subsequent pastes on the same page (or copying onto
        // the original page, which pre-populates lastRect) offset by 10px each
        // time.
        const offset = lastRect ? 10 : 0;
        const basePageRect = lastRect ?? this.clipboardAnnotation_.textBoxRect;
        const screenRect = pageToScreenCoordinates(page, basePageRect, this.viewport_);
        const location = getClampedLocation({ x: screenRect.locationX + offset, y: screenRect.locationY + offset }, screenRect.width, screenRect.height, pageDimensions);
        const textBoxRect = {
            height: screenRect.height,
            locationX: location.x,
            locationY: location.y,
            width: screenRect.width,
        };
        return { page, pageDimensions, textBoxRect };
    }
    // Pastes the clipboard annotation.
    // Returns true if an annotation was pasted, and false otherwise.
    pasteAnnotation() {
        assert(this.isTextInitializationComplete());
        assert(this.viewport_);
        if (!this.clipboardAnnotation_) {
            return false;
        }
        const position = this.getPastedAnnotationPosition_();
        if (!position) {
            return false;
        }
        const { page, pageDimensions, textBoxRect } = position;
        const viewportRotations = this.viewport_.getClockwiseRotations();
        let id;
        if (this.isCutAnnotation_) {
            id = this.clipboardAnnotation_.id;
            this.nextAnnotationId_ = Math.max(this.nextAnnotationId_, id + 1);
            this.isCutAnnotation_ = false;
        }
        else {
            id = this.nextAnnotationId_++;
        }
        const annotation = {
            id,
            mojoTextInfo: this.clipboardAnnotation_.mojoTextInfo,
            pageIndex: page,
            pdfZoom: this.viewport_.getZoom(),
            text: this.clipboardAnnotation_.text,
            textAttributes: structuredClone(this.clipboardAnnotation_.textAttributes),
            textBoxRect,
            textOrientation: this.clipboardAnnotation_.textOrientation,
            viewportOrientation: viewportRotations,
        };
        // Update the last pasted coordinates on this page for subsequent
        // consecutive pastes (+10px cascading).
        const pageRect = screenToPageCoordinates(page, textBoxRect, this.viewport_);
        this.pastedPageRects_.set(page, pageRect);
        this.initializeTextBox_(annotation, pageDimensions, /*isPaste=*/ true);
        return true;
    }
    isInitializationStarted() {
        return this.brushResolver_ !== null;
    }
    isTextInitializationComplete() {
        return this.textResolver_ !== null && this.textResolver_.isFulfilled;
    }
    isInitializationComplete() {
        return this.isInitializationStarted() && this.brushResolver_.isFulfilled;
    }
    getCurrentBrush() {
        assert(this.isInitializationComplete());
        return this.brush_;
    }
    getCurrentTextAttributes() {
        return this.existingAnnotationAttributes_ ?
            this.existingAnnotationAttributes_ :
            this.attributes_;
    }
    initializeBrush() {
        assert(this.brushResolver_ === null);
        this.brushResolver_ = new PromiseResolver();
        this.pluginController_.getAnnotationBrush().then(defaultBrushMessage => {
            this.setAnnotationBrush_(defaultBrushMessage.data);
            assert(this.brushResolver_);
            this.brushResolver_.resolve();
        });
        return this.brushResolver_.promise;
    }
    initializeTextAnnotations() {
        if (this.textResolver_) {
            return this.textResolver_.promise;
        }
        this.textResolver_ = new PromiseResolver();
        this.pluginController_.getAllTextAnnotations().then(message => {
            message.annotations.forEach(annotation => {
                let pageMap = this.annotations_.get(annotation.pageIndex);
                if (!pageMap) {
                    pageMap = new Map();
                    this.annotations_.set(annotation.pageIndex, pageMap);
                }
                pageMap.set(annotation.id, annotation);
                this.nextAnnotationId_ =
                    Math.max(this.nextAnnotationId_, annotation.id + 1);
            });
            this.textResolver_.resolve();
            this.dispatchEvent(new CustomEvent('annotations-updated'));
        });
        return this.textResolver_.promise;
    }
    setBrushColor(color) {
        assert(this.brush_.type !== AnnotationBrushType.ERASER);
        if (this.brush_.color === color) {
            return;
        }
        this.brush_.color = color;
        this.fireBrushChanged_();
        this.setAnnotationBrushInPlugin_();
    }
    setBrushSize(size) {
        if (this.brush_.size === size) {
            return;
        }
        this.brush_.size = size;
        this.fireBrushChanged_();
        this.setAnnotationBrushInPlugin_();
    }
    async setBrushType(type) {
        if (this.brush_.type === type) {
            return;
        }
        const brushMessage = await this.pluginController_.getAnnotationBrush(type);
        this.setAnnotationBrush_(brushMessage.data);
        this.setAnnotationBrushInPlugin_();
    }
    setTextTypeface(typeface) {
        const current = this.getCurrentTextAttributes();
        if (current.typeface === typeface) {
            return;
        }
        current.typeface = typeface;
        this.fireAttributesChanged_();
    }
    setTextSize(size) {
        const current = this.getCurrentTextAttributes();
        if (current.size === size) {
            return;
        }
        current.size = size;
        this.fireAttributesChanged_();
    }
    setTextColor(color) {
        const current = this.getCurrentTextAttributes();
        if (colorsEqual(current.color, color)) {
            return;
        }
        current.color = color;
        this.fireAttributesChanged_();
    }
    setTextAlignment(alignment) {
        const current = this.getCurrentTextAttributes();
        if (current.alignment === alignment) {
            return;
        }
        current.alignment = alignment;
        this.fireAttributesChanged_();
    }
    setTextStyles(styles) {
        const current = this.getCurrentTextAttributes();
        if (stylesEqual(current.styles, styles)) {
            return;
        }
        current.styles = styles;
        this.fireAttributesChanged_();
    }
    toggleTextStyle(style) {
        const current = this.getCurrentTextAttributes();
        const newStyles = Object.assign({}, current.styles);
        newStyles[style] = !newStyles[style];
        this.setTextStyles(newStyles);
    }
    getKnownFontIds() {
        return [...this.knownFontIds_];
    }
    addKnownFontId(id) {
        assert(!this.knownFontIds_.includes(id));
        this.knownFontIds_.push(id);
    }
    // Returns the previous version of the annotation, or null if it is new.
    updateStoredAnnotation_(annotation) {
        let pageAnnotations = this.annotations_.get(annotation.pageIndex);
        if (!pageAnnotations) {
            // Adding a new annotation, on a page that doesn't have any existing ones.
            // Create and add the new map.
            pageAnnotations = new Map();
            this.annotations_.set(annotation.pageIndex, pageAnnotations);
        }
        const previous = pageAnnotations.get(annotation.id);
        pageAnnotations.set(annotation.id, annotation);
        return previous || null;
    }
    /**
     * Deletes the stored annotation with `id` on `pageIndex` and notifies the
     * plugin of the deleted annotation.
     */
    deleteTextAnnotation(id, pageIndex) {
        const pageAnnotations = this.annotations_.get(pageIndex);
        assert(pageAnnotations);
        const before = pageAnnotations.get(id);
        assert(before, 'Tried to delete a non-existent annotation');
        this.stack_.push({ type: 'text', before, after: null });
        assert(pageAnnotations.delete(id));
        this.pluginController_.deleteTextAnnotation({
            id,
            pageIndex,
            source: TextAnnotationSource.USER,
        });
        this.existingAnnotationAttributes_ = null;
        this.dispatchEvent(new CustomEvent('annotations-updated'));
        this.fireAttributesChanged_();
    }
    /**
     * Updates the stored annotation and notifies the plugin of the new or
     * modified annotation.
     */
    commitTextAnnotation(annotation, isEdited, newTypefaces) {
        assert(this.viewport_);
        assert(annotation.text !== '');
        annotation.textBoxRect = screenToPageCoordinates(annotation.pageIndex, annotation.textBoxRect, this.viewport_);
        if (isEdited) {
            const before = this.updateStoredAnnotation_(annotation);
            const after = structuredClone(annotation);
            this.stack_.push({
                type: 'text',
                before,
                after,
            });
        }
        const messageData = {
            ...annotation,
            isEdited,
            newTypefaces,
            source: TextAnnotationSource.USER,
        };
        this.pluginController_.finishTextAnnotation(messageData);
        this.existingAnnotationAttributes_ = null;
        this.dispatchEvent(new CustomEvent('annotations-updated'));
        this.fireAttributesChanged_();
    }
    /**
     * Sets the current brush properties to the values in `brush`.
     */
    setAnnotationBrush_(brush) {
        this.brush_ = brush;
        this.fireBrushChanged_();
    }
    /**
     * Sets the annotation brush in the plugin with the current brush parameters.
     */
    setAnnotationBrushInPlugin_() {
        this.pluginController_.setAnnotationBrush(this.brush_);
    }
    fireBrushChanged_() {
        this.dispatchEvent(new CustomEvent('brush-changed', { detail: this.brush_ }));
    }
    fireAttributesChanged_() {
        this.dispatchEvent(new CustomEvent('attributes-changed', { detail: structuredClone(this.getCurrentTextAttributes()) }));
    }
    handleFinishInkStroke_(e) {
        if (e.detail) {
            this.stack_.push({ type: 'ink' });
        }
    }
    // Note: Undo/Redo state is tracked for all annotations, but changes are only
    // applied by the frontend for text annotations. Undo/redo of ink strokes are
    // handled exclusively by the backend.
    undo() {
        const state = this.stack_.undo();
        if (!state) {
            return;
        }
        if (state.type === 'text') {
            this.applyTextUndoRedo_(state.before, state.after, TextAnnotationSource.UNDO);
        }
        this.pluginController_.undo();
    }
    redo() {
        const state = this.stack_.redo();
        if (!state) {
            return;
        }
        if (state.type === 'text') {
            this.applyTextUndoRedo_(state.after, state.before, TextAnnotationSource.REDO);
        }
        this.pluginController_.redo();
    }
    applyTextUndoRedo_(update, previous, source) {
        const isDeletion = update === null;
        // If deleting, the relevant annotation is the "previous" one, which is
        // being deleted. Otherwise, the relevant annotation is the update.
        const annotation = isDeletion ? previous : update;
        assert(annotation);
        assert(this.viewport_);
        // Since this is an undo or redo of a previous change, the map for this page
        // should always have been created already.
        const pageAnnotations = this.annotations_.get(annotation.pageIndex);
        assert(pageAnnotations);
        if (isDeletion) {
            pageAnnotations.delete(annotation.id);
            this.pluginController_.deleteTextAnnotation({
                id: annotation.id,
                pageIndex: annotation.pageIndex,
                source,
            });
        }
        else {
            pageAnnotations.set(annotation.id, annotation);
            const messageData = {
                ...annotation,
                isEdited: true,
                newTypefaces: [],
                source,
            };
            this.pluginController_.finishTextAnnotation(messageData);
        }
        this.dispatchEvent(new CustomEvent('annotations-updated'));
    }
    initiateSave() {
        this.stack_.initiateSave();
    }
    cancelSave() {
        this.stack_.cancelSave();
    }
    saved() {
        this.stack_.setSaved();
    }
    static getInstance() {
        return instance$P || (instance$P = new Ink2Manager());
    }
    static setInstance(obj) {
        if (instance$P) {
            instance$P.destroy();
        }
        instance$P = obj;
    }
}
let instance$P = null;

let instance$O = null;
function getCss$M() {
    return instance$O || (instance$O = [...[], css `:host{--cr-radio-button-checked-color:var(--color-radio-button-foreground-checked,var(--cr-fallback-color-primary));--cr-radio-button-checked-ripple-color:var(--cr-active-background-color);--cr-radio-button-ink-size:32px;--cr-radio-button-size:16px;--cr-radio-button-unchecked-color:var(--color-radio-button-foreground-unchecked,var(--cr-fallback-color-outline));--cr-radio-button-unchecked-ripple-color:var(--cr-active-background-color);--ink-to-circle:calc((var(--cr-radio-button-ink-size) - var(--cr-radio-button-size)) / 2);align-items:center;display:flex;flex-shrink:0;gap:var(--cr-radio-button-label-spacing,20px);outline:none}:host-context(html:not([webui-refresh-2026])){@media (prefers-color-scheme:dark){:host{--cr-radio-button-checked-color:var(--google-blue-300);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-300-rgb),.4);--cr-radio-button-unchecked-color:var(--google-grey-500);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-300-rgb),.4)}}}@media (forced-colors:active){:host{--cr-radio-button-checked-color:SelectedItem;--cr-radio-button-unchecked-color:CanvasText}.disc-wrapper{forced-color-adjust:none}}:host([disabled]){opacity:1;pointer-events:none;--cr-radio-button-checked-color:var(--color-radio-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-radio-button-unchecked-color:var(--color-radio-foreground-disabled,var(--cr-fallback-color-disabled-foreground))}:host(:not([disabled])){cursor:pointer}:host(.label-first){flex-direction:row-reverse}#labelWrapper{flex:1}:host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}#label{color:inherit}:host([hide-label-text]) #label{clip:rect(0,0,0,0);display:block;position:fixed}.disc-border,.disc,.disc-wrapper,cr-ripple,paper-ripple{border-radius:50%}.disc-wrapper{height:var(--cr-radio-button-size);margin-block-start:var(--cr-radio-button-disc-margin-block-start,0);position:relative;width:var(--cr-radio-button-size)}.disc-border,.disc{box-sizing:border-box;height:var(--cr-radio-button-size);width:var(--cr-radio-button-size)}.disc-border{border:2px solid var(--cr-radio-button-unchecked-color)}:host([checked]) .disc-border{border-color:var(--cr-radio-button-checked-color)}#button:focus{outline:none}.disc{background-color:transparent;position:absolute;top:0;transform:scale(0);transition:border-color 200ms,transform 200ms}:host([checked]) .disc{background-color:var(--cr-radio-button-checked-color);transform:scale(0.5)}#overlay{border-radius:50%;box-sizing:border-box;display:none;height:var(--cr-radio-button-ink-size);left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-radio-button-ink-size)}#button:hover #overlay{background-color:var(--cr-hover-background-color);display:block}#button:focus-visible #overlay{border:2px solid var(--cr-focus-outline-color);display:block}cr-ripple,paper-ripple{--paper-ripple-opacity:1;color:var(--cr-radio-button-unchecked-ripple-color);height:var(--cr-radio-button-ink-size);left:calc(-1 * var(--ink-to-circle));pointer-events:none;position:absolute;top:calc(-1 * var(--ink-to-circle));transition:color linear 80ms;width:var(--cr-radio-button-ink-size)}:host-context([dir=rtl]) cr-ripple,:host-context([dir=rtl]) paper-ripple{left:auto;right:calc(-1 * var(--ink-to-circle))}:host([checked]) cr-ripple,:host([checked]) paper-ripple{color:var(--cr-radio-button-checked-ripple-color)}`]);
}

let instance$N = null;
function getCss$L() {
    return instance$N || (instance$N = [...[getCss$M(), getCss$O()], css ``]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$C() {
    return html `
<div aria-checked="${this.getAriaChecked()}" aria-describedby="slotted-content"
    aria-disabled="${this.getAriaDisabled()}" aria-labelledby="label"
    class="disc-wrapper" id="button" role="radio"
    tabindex="${this.getButtonTabIndex()}" @keydown="${this.onInputKeydown}">
  <div class="disc-border"></div>
  <div class="disc"></div>
  <div id="overlay"></div>
</div>

<div id="labelWrapper">
  <span id="label" ?hidden="${!this.label}" aria-hidden="true">
    ${this.label}
  </span>
  <span id="slotted-content">
    <slot></slot>
  </span>
</div>`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonMixinLit = (superClass) => {
    class CrRadioButtonMixinLit extends superClass {
        static get properties() {
            return {
                checked: {
                    type: Boolean,
                    reflect: true,
                },
                disabled: {
                    type: Boolean,
                    reflect: true,
                    notify: true,
                },
                /**
                 * Whether the radio button should be focusable or not. Toggling
                 * this property sets the corresponding tabindex of the button
                 * itself as well as any links in the button description.
                 */
                focusable: {
                    type: Boolean,
                },
                hideLabelText: {
                    type: Boolean,
                    reflect: true,
                },
                label: {
                    type: String,
                },
                name: {
                    type: String,
                    notify: true,
                    reflect: true,
                },
                /**
                 * Holds the tabIndex for the radio button.
                 */
                ariaCheckedString: { type: String },
                ariaDisabledString: { type: String },
            };
        }
        #checked_accessor_storage = false;
        get checked() { return this.#checked_accessor_storage; }
        set checked(value) { this.#checked_accessor_storage = value; }
        #disabled_accessor_storage = false;
        get disabled() { return this.#disabled_accessor_storage; }
        set disabled(value) { this.#disabled_accessor_storage = value; }
        #focusable_accessor_storage = false;
        get focusable() { return this.#focusable_accessor_storage; }
        set focusable(value) { this.#focusable_accessor_storage = value; }
        #hideLabelText_accessor_storage = false;
        get hideLabelText() { return this.#hideLabelText_accessor_storage; }
        set hideLabelText(value) { this.#hideLabelText_accessor_storage = value; }
        #label_accessor_storage = '';
        get label() { return this.#label_accessor_storage; }
        set label(value) { this.#label_accessor_storage = value; }
        #name_accessor_storage;
        get name() { return this.#name_accessor_storage; }
        set name(value) { this.#name_accessor_storage = value; }
        noRipple = false;
        #ariaCheckedString_accessor_storage = 'false';
        get ariaCheckedString() { return this.#ariaCheckedString_accessor_storage; }
        set ariaCheckedString(value) { this.#ariaCheckedString_accessor_storage = value; }
        #ariaDisabledString_accessor_storage = 'false';
        get ariaDisabledString() { return this.#ariaDisabledString_accessor_storage; }
        set ariaDisabledString(value) { this.#ariaDisabledString_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            if (!this.noRipple) {
                this.addEventListener('blur', this.hideRipple_.bind(this));
                this.addEventListener('up', this.hideRipple_.bind(this));
            }
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('focusable')) {
                const links = this.querySelectorAll('a');
                links.forEach(link => {
                    // Remove the tab stop on any links when the row is unchecked.
                    // Since the row is not tabbable, any links within the row
                    // should not be either.
                    link.tabIndex = this.checked ? 0 : -1;
                });
            }
        }
        getAriaDisabled() {
            return this.disabled ? 'true' : 'false';
        }
        getAriaChecked() {
            return this.checked ? 'true' : 'false';
        }
        getButtonTabIndex() {
            return this.focusable ? 0 : -1;
        }
        focus() {
            const button = this.shadowRoot.querySelector('#button');
            assert(button);
            button.focus();
        }
        getRipple() {
            assertNotReached();
        }
        hideRipple_() {
            assert(!this.noRipple);
            this.getRipple().clear();
        }
        /**
         * When shift-tab is pressed, first bring the focus to the host
         * element. This accomplishes 2 things:
         * 1) Host doesn't get focused when the browser moves the focus
         *    backward.
         * 2) focus now escaped the shadow-dom of this element, so that
         *    it'll correctly obey non-zero tabindex ordering of the
         *    containing document.
         */
        onInputKeydown(e) {
            if (e.shiftKey && e.key === 'Tab') {
                this.focus();
            }
        }
    }
    return CrRadioButtonMixinLit;
};

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonElementBase = CrRippleMixin(CrRadioButtonMixinLit(CrLitElement));
class CrRadioButtonElement extends CrRadioButtonElementBase {
    static get is() {
        return 'cr-radio-button';
    }
    static get styles() {
        return getCss$L();
    }
    render() {
        return getHtml$C.bind(this)();
    }
    // Overridden from CrRippleMixin
    createRipple() {
        this.rippleContainer = this.shadowRoot.querySelector('.disc-wrapper');
        const ripple = super.createRipple();
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle');
        return ripple;
    }
}
customElements.define(CrRadioButtonElement.is, CrRadioButtonElement);

let instance$M = null;
function getCss$K() {
    return instance$M || (instance$M = [...[], css `:host{display:inline-block}:host ::slotted(*){padding:var(--cr-radio-group-item-padding,12px)}:host([disabled]){cursor:initial;pointer-events:none;user-select:none}:host([disabled]) ::slotted(*){opacity:var(--cr-disabled-opacity)}
`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$B() {
    return html `<slot></slot>`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEnabled(radio) {
    return radio.matches(':not([disabled]):not([hidden])') &&
        radio.style.display !== 'none' && radio.style.visibility !== 'hidden';
}
class CrRadioGroupElement extends CrLitElement {
    static get is() {
        return 'cr-radio-group';
    }
    static get styles() {
        return getCss$K();
    }
    render() {
        return getHtml$B.bind(this)();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true,
            },
            selected: {
                type: String,
                notify: true,
            },
            selectableElements: { type: String },
            nestedSelectable: { type: Boolean },
            selectableRegExp_: { type: Object },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #selected_accessor_storage;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #selectableElements_accessor_storage = 'cr-radio-button, cr-card-radio-button, controlled-radio-button';
    get selectableElements() { return this.#selectableElements_accessor_storage; }
    set selectableElements(value) { this.#selectableElements_accessor_storage = value; }
    #nestedSelectable_accessor_storage = false;
    get nestedSelectable() { return this.#nestedSelectable_accessor_storage; }
    set nestedSelectable(value) { this.#nestedSelectable_accessor_storage = value; }
    #selectableRegExp__accessor_storage = new RegExp('');
    get selectableRegExp_() { return this.#selectableRegExp__accessor_storage; }
    set selectableRegExp_(value) { this.#selectableRegExp__accessor_storage = value; }
    buttons_ = null;
    buttonEventTracker_ = new EventTracker();
    deltaKeyMap_ = null;
    isRtl_ = false;
    populateBound_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.isRtl_ = this.matches(':host-context([dir=rtl]) cr-radio-group');
        this.deltaKeyMap_ = new Map([
            ['ArrowDown', 1],
            ['ArrowLeft', this.isRtl_ ? 1 : -1],
            ['ArrowRight', this.isRtl_ ? -1 : 1],
            ['ArrowUp', -1],
            ['PageDown', 1],
            ['PageUp', -1],
        ]);
        this.populateBound_ = () => this.populate_();
        assert(this.populateBound_);
        this.shadowRoot.querySelector('slot').addEventListener('slotchange', this.populateBound_);
        this.populate_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.populateBound_);
        this.shadowRoot.querySelector('slot').removeEventListener('slotchange', this.populateBound_);
        this.buttonEventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('selectableElements')) {
            const tags = this.selectableElements.split(', ').join('|');
            this.selectableRegExp_ = new RegExp(`^(${tags})$`, 'i');
        }
    }
    firstUpdated() {
        this.addEventListener('keydown', e => this.onKeyDown_(e));
        this.addEventListener('click', e => this.onClick_(e));
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'radiogroup');
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('nestedSelectable')) {
            this.populate_();
        }
        if (changedProperties.has('disabled') ||
            changedProperties.has('selected')) {
            this.update_();
        }
        this.setAttribute('aria-disabled', `${this.disabled}`);
        // Clients of cr-radio-group generally expect that by the time
        // selected-changed or disabled-changed is fired, the state of the
        // buttons in the group (e.g. "checked", "disabled" properties) has been
        // updated accordingly. Since these events are fired in CrLitElement's
        // updated() method, call super.updated() only after all the button updates
        // performed in update_() are complete.
        super.updated(changedProperties);
    }
    focus() {
        if (this.disabled || !this.buttons_) {
            return;
        }
        const radio = this.buttons_.find(radio => this.isButtonEnabledAndSelected_(radio));
        if (radio) {
            radio.focus();
        }
    }
    onKeyDown_(event) {
        if (this.disabled) {
            return;
        }
        if (event.ctrlKey || event.shiftKey || event.metaKey || event.altKey) {
            return;
        }
        const targetElement = event.target;
        if (!this.buttons_ || !this.buttons_.includes(targetElement)) {
            return;
        }
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.select_(targetElement);
            return;
        }
        const enabledRadios = this.buttons_.filter(isEnabled);
        if (enabledRadios.length === 0) {
            return;
        }
        assert(this.deltaKeyMap_);
        let selectedIndex;
        const max = enabledRadios.length - 1;
        if (event.key === 'Home') {
            selectedIndex = 0;
        }
        else if (event.key === 'End') {
            selectedIndex = max;
        }
        else if (this.deltaKeyMap_.has(event.key)) {
            const delta = this.deltaKeyMap_.get(event.key);
            // If nothing selected, start from the first radio then add |delta|.
            const lastSelection = enabledRadios.findIndex(radio => radio.checked);
            selectedIndex = Math.max(0, lastSelection) + delta;
            // Wrap the selection, if needed.
            if (selectedIndex > max) {
                selectedIndex = 0;
            }
            else if (selectedIndex < 0) {
                selectedIndex = max;
            }
        }
        else {
            return;
        }
        const radio = enabledRadios[selectedIndex];
        const name = `${radio.name}`;
        if (this.selected !== name) {
            event.preventDefault();
            event.stopPropagation();
            this.selected = name;
            radio.focus();
        }
    }
    onClick_(event) {
        const path = event.composedPath();
        if (path.some(target => /^a$/i.test(target.tagName))) {
            return;
        }
        const target = path.find(n => this.selectableRegExp_.test(n.tagName));
        if (target && this.buttons_ && this.buttons_.includes(target)) {
            this.select_(target);
        }
    }
    populate_() {
        const elements = this.shadowRoot.querySelector('slot').assignedElements({ flatten: true });
        this.buttons_ = Array.from(elements).flatMap(el => {
            let result = [];
            if (el.matches(this.selectableElements)) {
                result.push(el);
            }
            if (this.nestedSelectable) {
                result = result.concat(Array.from(el.querySelectorAll(this.selectableElements)));
            }
            return result;
        });
        this.buttonEventTracker_.removeAll();
        this.buttons_.forEach(el => {
            this.buttonEventTracker_.add(el, 'disabled-changed', () => this.populate_());
            this.buttonEventTracker_.add(el, 'name-changed', () => this.populate_());
        });
        this.update_();
    }
    select_(button) {
        if (!isEnabled(button)) {
            return;
        }
        const name = `${button.name}`;
        if (this.selected !== name) {
            this.selected = name;
        }
    }
    isButtonEnabledAndSelected_(button) {
        return !this.disabled && button.checked && isEnabled(button);
    }
    update_() {
        if (!this.buttons_) {
            return;
        }
        let noneMadeFocusable = true;
        this.buttons_.forEach(radio => {
            radio.checked =
                this.selected !== undefined && `${radio.name}` === `${this.selected}`;
            const disabled = this.disabled || !isEnabled(radio);
            const canBeFocused = radio.checked && !disabled;
            if (canBeFocused) {
                radio.focusable = true;
                noneMadeFocusable = false;
            }
            else {
                radio.focusable = false;
            }
            radio.setAttribute('aria-disabled', `${disabled}`);
        });
        if (noneMadeFocusable && !this.disabled) {
            const radio = this.buttons_.find(isEnabled);
            if (radio) {
                radio.focusable = true;
            }
        }
    }
}
customElements.define(CrRadioGroupElement.is, CrRadioGroupElement);

const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--iron-icon-height:20px;--iron-icon-width:20px;--viewer-border-color:rgb(94,94,94);--viewer-icon-focus-outline-color:var(--google-grey-500);--viewer-icon-ink-background-color:rgb(143,143,143);--viewer-icon-ink-fill-color:rgb(199,199,199);--viewer-icon-ink-selected-fill-color:rgb(168,199,250);--viewer-icon-ink-selected-background-color:rgba(76,141,246,0.32);--viewer-text-annotation-active-color:rgb(11,87,208);--viewer-text-annotation-border-width:2px;--viewer-text-annotation-handle-size:10px;--viewer-text-annotation-total-padding-inline:10px;--viewer-text-annotation-total-padding-vert:8px;--viewer-text-annotation-offset-x:calc(var(--viewer-text-annotation-border-width) + var(--viewer-text-annotation-total-padding-inline));--viewer-text-annotation-offset-y:calc(var(--viewer-text-annotation-border-width) + var(--viewer-text-annotation-total-padding-vert));--viewer-text-annotation-padding-x:calc(2 * var(--viewer-text-annotation-offset-x));--viewer-text-annotation-padding-y:calc(2 * var(--viewer-text-annotation-offset-y));--viewer-text-annotation-offset-x-rotated:calc(var(--viewer-text-annotation-border-width) + var(--viewer-text-annotation-total-padding-vert));--viewer-text-annotation-offset-y-rotated:calc(var(--viewer-text-annotation-border-width) + var(--viewer-text-annotation-total-padding-inline));--viewer-text-annotation-padding-x-rotated:calc(2 * var(--viewer-text-annotation-offset-x-rotated));--viewer-text-annotation-padding-y-rotated:calc(2 * var(--viewer-text-annotation-offset-y-rotated));--viewer-pdf-toolbar-background-color:rgb(60,60,60);--viewer-side-background-color:rgb(40,41,42);--viewer-text-input-selection-color:rgba(255,255,255,0.3)}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

let instance$L = null;
function getCss$J() {
    return instance$L || (instance$L = [...[], css `cr-icon-button{--cr-icon-button-fill-color:var(--pdf-toolbar-text-color);--cr-icon-button-focus-outline-color:var(--viewer-icon-focus-outline-color);margin:0}cr-icon-button:hover{background:rgba(255,255,255,0.08);border-radius:50%}cr-action-menu,viewer-bookmark{--cr-menu-background-color:var(--google-grey-900);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-primary-text-color:var(--google-grey-200);--cr-menu-background-focus-color:var(--google-grey-700);--cr-separator-line:var(--cr-separator-height) solid rgba(255,255,255,.1);--cr-action-menu-disabled-item-color:var(--cr-primary-text-color);--cr-action-menu-disabled-item-opacity:var(--cr-disabled-opacity)}.md-select{--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);--md-select-text-color:rgb(227,227,227);background-image:url(chrome://resources/images/dark/arrow_down.svg)}.md-select:hover{background-color:rgba(253,252,251,.10)}`]);
}

let instance$K = null;
function getCss$I() {
    return instance$K || (instance$K = [...[getCss$J()], css `cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-fill-color);--cr-icon-button-icon-size:var(--selectable-icon-button-icon-size,20px);--cr-icon-button-size:var(--selectable-icon-button-size,32px)}:host([checked]) cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color)}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$A() {
    return html `
<cr-icon-button id="button" role="radio" iron-icon="${this.icon}"
    tabindex="${this.getButtonTabIndex()}"
    aria-checked="${this.getAriaChecked()}"
    aria-disabled="${this.getAriaDisabled()}" aria-label="${this.label}"
    title="${this.label}" @keydown="${this.onInputKeydown}">
</cr-icon-button>`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SelectableIconButtonElementBase = CrRadioButtonMixinLit(CrLitElement);
class SelectableIconButtonElement extends SelectableIconButtonElementBase {
    static get is() {
        return 'selectable-icon-button';
    }
    static get styles() {
        return getCss$I();
    }
    render() {
        return getHtml$A.bind(this)();
    }
    static get properties() {
        return {
            icon: { type: String },
        };
    }
    #icon_accessor_storage = '';
    get icon() { return this.#icon_accessor_storage; }
    set icon(value) { this.#icon_accessor_storage = value; }
    noRipple = true;
}
customElements.define(SelectableIconButtonElement.is, SelectableIconButtonElement);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Make a string safe for Polymer bindings that are inner-h-t-m-l or other
 * innerHTML use.
 * @param rawString The unsanitized string
 * @param opts Optional additional allowed tags and attributes.
 */
function sanitizeInnerHtmlInternal(rawString, opts) {
    opts = opts || {};
    const html = parseHtmlSubset(`<b>${rawString}</b>`, opts.tags, opts.attrs)
        .firstElementChild;
    return html.innerHTML;
}
// 
let sanitizedPolicy = null;
/**
 * Same as |sanitizeInnerHtmlInternal|, but it passes through sanitizedPolicy
 * to create a TrustedHTML.
 */
function sanitizeInnerHtml(rawString, opts) {
    assert(window.trustedTypes);
    if (sanitizedPolicy === null) {
        // Initialize |sanitizedPolicy| lazily.
        sanitizedPolicy = window.trustedTypes.createPolicy('sanitize-inner-html', {
            createHTML: sanitizeInnerHtmlInternal,
            createScript: () => assertNotReached(),
            createScriptURL: () => assertNotReached(),
        });
    }
    return sanitizedPolicy.createHTML(rawString, opts);
}
const allowAttribute = (_node, _value) => true;
/** Allow-list of attributes in parseHtmlSubset. */
const allowedAttributes = new Map([
    [
        'href',
        (node, value) => {
            // Only allow a[href] starting with chrome:// or https:// or equaling
            // to #.
            return node.tagName === 'A' &&
                (value.startsWith('chrome://') || value.startsWith('https://') ||
                    value === '#');
        },
    ],
    [
        'target',
        (node, value) => {
            // Only allow a[target='_blank'].
            // TODO(dbeam): are there valid use cases for target !== '_blank'?
            return node.tagName === 'A' && value === '_blank';
        },
    ],
]);
/** Allow-list of optional attributes in parseHtmlSubset. */
const allowedOptionalAttributes = new Map([
    ['class', allowAttribute],
    ['id', allowAttribute],
    ['is', (_node, value) => value === 'action-link' || value === ''],
    ['role', (_node, value) => value === 'link'],
    [
        'src',
        (node, value) => {
            // Only allow img[src] starting with chrome://
            return node.tagName === 'IMG' &&
                value.startsWith('chrome://');
        },
    ],
    ['tabindex', allowAttribute],
    ['aria-description', allowAttribute],
    ['aria-hidden', allowAttribute],
    ['aria-label', allowAttribute],
    ['aria-labelledby', allowAttribute],
]);
/** Allow-list of tag names in parseHtmlSubset. */
const allowedTags = new Set(['A', 'B', 'I', 'BR', 'DIV', 'EM', 'KBD', 'P', 'PRE', 'SPAN', 'STRONG']);
/** Allow-list of optional tag names in parseHtmlSubset. */
const allowedOptionalTags = new Set(['IMG', 'LI', 'UL']);
/**
 * This policy maps a given string to a `TrustedHTML` object
 * without performing any validation. Callsites must ensure
 * that the resulting object will only be used in inert
 * documents. Initialized lazily.
 */
let unsanitizedPolicy;
/**
 * @param optTags an Array to merge.
 * @return Set of allowed tags.
 */
function mergeTags(optTags) {
    const clone = new Set(allowedTags);
    optTags.forEach(str => {
        const tag = str.toUpperCase();
        if (allowedOptionalTags.has(tag)) {
            clone.add(tag);
        }
    });
    return clone;
}
/**
 * @param optAttrs an Array to merge.
 * @return Map of allowed attributes.
 */
function mergeAttrs(optAttrs) {
    const clone = new Map(allowedAttributes);
    optAttrs.forEach(key => {
        if (allowedOptionalAttributes.has(key)) {
            clone.set(key, allowedOptionalAttributes.get(key));
        }
    });
    return clone;
}
function walk(n, f) {
    f(n);
    for (let i = 0; i < n.childNodes.length; i++) {
        walk(n.childNodes[i], f);
    }
}
function assertElement(tags, node) {
    if (!tags.has(node.tagName)) {
        throw Error(node.tagName + ' is not supported');
    }
}
function assertAttribute(attrs, attrNode, node) {
    const n = attrNode.nodeName;
    const v = attrNode.nodeValue || '';
    if (!attrs.has(n) || !attrs.get(n)(node, v)) {
        throw Error(node.tagName + '[' + n + '="' + v +
            '"] is not supported');
    }
}
/**
 * Parses a very small subset of HTML. This ensures that insecure HTML /
 * javascript cannot be injected into WebUI.
 * @param s The string to parse.
 * @param extraTags Optional extra allowed tags.
 * @param extraAttrs
 *     Optional extra allowed attributes (all tags are run through these).
 * @throws an Error in case of non supported markup.
 * @return A document fragment containing the DOM tree.
 */
function parseHtmlSubset(s, extraTags, extraAttrs) {
    const tags = extraTags ? mergeTags(extraTags) : allowedTags;
    const attrs = extraAttrs ? mergeAttrs(extraAttrs) : allowedAttributes;
    const doc = document.implementation.createHTMLDocument('');
    const r = doc.createRange();
    r.selectNode(doc.body);
    if (window.trustedTypes) {
        if (!unsanitizedPolicy) {
            unsanitizedPolicy =
                window.trustedTypes.createPolicy('parse-html-subset', {
                    createHTML: (untrustedHTML) => untrustedHTML,
                    createScript: () => assertNotReached(),
                    createScriptURL: () => assertNotReached(),
                });
        }
        s = unsanitizedPolicy.createHTML(s);
    }
    // This does not execute any scripts because the document has no view.
    const df = r.createContextualFragment(s);
    walk(df, function (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                assertElement(tags, node);
                const nodeAttrs = node.attributes;
                for (let i = 0; i < nodeAttrs.length; ++i) {
                    assertAttribute(attrs, nodeAttrs[i], node);
                }
                break;
            case Node.COMMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.TEXT_NODE:
                break;
            default:
                throw Error('Node type ' + node.nodeType + ' is not supported');
        }
    });
    return df;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'I18nMixinLit' is a Mixin offering loading of internationalization
 * strings. Typically it is used as [[i18n('someString')]] computed bindings or
 * for this.i18n('foo'). It is not needed for HTML $i18n{otherString}, which is
 * handled by a C++ templatizer.
 */
const I18nMixinLit = (superClass) => {
    class I18nMixinLit extends superClass {
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, substituted string.
         */
        i18nRaw_(id, ...varArgs) {
            return varArgs.length === 0 ? loadTimeData.getString(id) :
                loadTimeData.getStringF(id, ...varArgs);
        }
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values. Also sanitizes the output to filter out dangerous HTML/JS.
         * Use with Lit bindings that are *not* innerHTML.
         * NOTE: This is not related to $i18n{foo} in HTML, see file overview.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18n(id, ...varArgs) {
            const rawString = this.i18nRaw_(id, ...varArgs);
            return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent;
        }
        /**
         * Similar to 'i18n', returns a translated, sanitized, substituted
         * string. It receives the string ID and a dictionary containing the
         * substitutions as well as optional additional allowed tags and
         * attributes. Use with Lit bindings that are innerHTML.
         * @param id The ID of the string to translate.
         */
        i18nAdvanced(id, opts) {
            opts = opts || {};
            const rawString = this.i18nRaw_(id, ...(opts.substitutions || []));
            return sanitizeInnerHtml(rawString, opts);
        }
        /**
         * Similar to 'i18n', with an unused |locale| parameter used to trigger
         * updates when the locale changes.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18nDynamic(_locale, id, ...varArgs) {
            return this.i18n(id, ...varArgs);
        }
        /**
         * Similar to 'i18nDynamic', but varArgs values are interpreted as keys
         * in loadTimeData. This allows generation of strings that take other
         * localized strings as parameters.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9
         *     in the string. Values are interpreted as strings IDs if found in
         * the list of localized strings.
         * @return A translated, sanitized, substituted string.
         */
        i18nRecursive(locale, id, ...varArgs) {
            let args = varArgs;
            if (args.length > 0) {
                // Try to replace IDs with localized values.
                args = args.map(str => {
                    return this.i18nExists(str) ? loadTimeData.getString(str) : str;
                });
            }
            return this.i18nDynamic(locale, id, ...args);
        }
        /**
         * Returns true if a translation exists for |id|.
         */
        i18nExists(id) {
            return loadTimeData.valueExists(id);
        }
    }
    return I18nMixinLit;
};

let instance$J = null;
function getCss$H() {
    return instance$J || (instance$J = [...[getCss$J()], css `:host{display:inline-block}cr-radio-group{--cr-radio-group-item-padding:6px;display:flex;justify-content:center}selectable-icon-button{--selectable-icon-button-size:36px;--selectable-icon-button-icon-size:24px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$z() {
    return html `<!--_html_template_start_-->
<cr-radio-group selectable-elements="selectable-icon-button"
    .selected="${this.currentSizeString_()}" aria-label="$i18n{ink2Size}"
    @selected-changed="${this.onSelectedChanged_}">
  ${this.getCurrentBrushSizes_().map(item => html `
    <selectable-icon-button icon="pdf-ink:${item.icon}" name="${item.size}"
        label="${this.i18n(item.label)}">
    </selectable-icon-button>
  `)}
</cr-radio-group>
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange(PenSizes)
const PEN_SIZES = [
    { icon: 'pen-size-1', label: 'ink2BrushSizeExtraThin', size: 1 },
    { icon: 'pen-size-2', label: 'ink2BrushSizeThin', size: 2 },
    { icon: 'pen-size-3', label: 'ink2BrushSizeMedium', size: 3 },
    { icon: 'pen-size-4', label: 'ink2BrushSizeThick', size: 6 },
    { icon: 'pen-size-5', label: 'ink2BrushSizeExtraThick', size: 8 },
];
// LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:PenSizes)
const HIGHLIGHTER_SIZES = [
    // LINT.IfChange(HighlighterSizes)
    { icon: 'highlighter-size-1', label: 'ink2BrushSizeExtraThin', size: 4 },
    { icon: 'highlighter-size-2', label: 'ink2BrushSizeThin', size: 6 },
    { icon: 'highlighter-size-3', label: 'ink2BrushSizeMedium', size: 8 },
    { icon: 'highlighter-size-4', label: 'ink2BrushSizeThick', size: 12 },
    { icon: 'highlighter-size-5', label: 'ink2BrushSizeExtraThick', size: 16 },
    // LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:HighlighterSizes)
];
const InkSizeSelectorElementBase = I18nMixinLit(CrLitElement);
class InkSizeSelectorElement extends InkSizeSelectorElementBase {
    static get is() {
        return 'ink-size-selector';
    }
    static get styles() {
        return getCss$H();
    }
    render() {
        return getHtml$z.bind(this)();
    }
    static get properties() {
        return {
            currentSize: {
                notify: true,
                type: Number,
            },
            currentType: { type: String },
        };
    }
    focus() {
        const selectedButton = this.shadowRoot.querySelector('selectable-icon-button[checked]');
        assert(selectedButton);
        selectedButton.focus();
    }
    #currentSize_accessor_storage = 0;
    get currentSize() { return this.#currentSize_accessor_storage; }
    set currentSize(value) { this.#currentSize_accessor_storage = value; }
    #currentType_accessor_storage = AnnotationBrushType.PEN;
    get currentType() { return this.#currentType_accessor_storage; }
    set currentType(value) { this.#currentType_accessor_storage = value; }
    currentSizeString_() {
        return this.currentSize.toString();
    }
    onSelectedChanged_(e) {
        this.currentSize = Number(e.detail.value);
    }
    getCurrentBrushSizes_() {
        assert(this.currentType !== AnnotationBrushType.ERASER);
        return this.currentType === AnnotationBrushType.HIGHLIGHTER ?
            HIGHLIGHTER_SIZES :
            PEN_SIZES;
    }
}
customElements.define(InkSizeSelectorElement.is, InkSizeSelectorElement);

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HIGHLIGHTER_COLORS = [
    // LINT.IfChange(HighlighterColors)
    // Row 1:
    { label: 'ink2BrushColorLightRed', color: '#f28b82', blended: true },
    { label: 'ink2BrushColorLightYellow', color: '#fdd663', blended: true },
    { label: 'annotationColorLightGreen', color: '#34a853', blended: true },
    { label: 'annotationColorLightBlue', color: '#4285f4', blended: true },
    { label: 'annotationColorLightOrange', color: '#ffae80', blended: true },
    // Row 2:
    { label: 'annotationColorRed', color: '#d93025', blended: true },
    { label: 'annotationColorYellow', color: '#ddf300', blended: true },
    { label: 'annotationColorGreen', color: '#25e387', blended: true },
    { label: 'annotationColorBlue', color: '#5379ff', blended: true },
    { label: 'annotationColorOrange', color: '#ff630c', blended: true },
    // LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:HighlighterColors)
];
const PEN_COLORS = [
    // LINT.IfChange(PenColors)
    // Row 1:
    { label: 'annotationColorBlack', color: '#000000', blended: false },
    { label: 'ink2BrushColorDarkGrey2', color: '#5f6368', blended: false },
    { label: 'ink2BrushColorDarkGrey1', color: '#9aa0a6', blended: false },
    { label: 'annotationColorLightGrey', color: '#dadce0', blended: false },
    { label: 'annotationColorWhite', color: '#ffffff', blended: false },
    // Row 2:
    { label: 'ink2BrushColorRed1', color: '#f28b82', blended: false },
    { label: 'ink2BrushColorYellow1', color: '#fdd663', blended: false },
    { label: 'ink2BrushColorGreen1', color: '#81c995', blended: false },
    { label: 'ink2BrushColorBlue1', color: '#8ab4f8', blended: false },
    { label: 'ink2BrushColorTan1', color: '#eec9ae', blended: false },
    // Row 3:
    { label: 'ink2BrushColorRed2', color: '#ea4335', blended: false },
    { label: 'ink2BrushColorYellow2', color: '#fbbc04', blended: false },
    { label: 'ink2BrushColorGreen2', color: '#34a853', blended: false },
    { label: 'ink2BrushColorBlue2', color: '#4285f4', blended: false },
    { label: 'ink2BrushColorTan2', color: '#e2a185', blended: false },
    // Row 4:
    { label: 'ink2BrushColorRed3', color: '#c5221f', blended: false },
    { label: 'ink2BrushColorYellow3', color: '#f29900', blended: false },
    { label: 'ink2BrushColorGreen3', color: '#188038', blended: false },
    { label: 'ink2BrushColorBlue3', color: '#1967d2', blended: false },
    { label: 'ink2BrushColorTan3', color: '#885945', blended: false },
    // LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:PenColors)
];
const InkAnnotationBrushMixin = (superClass) => {
    class InkAnnotationBrushMixin extends superClass {
        static get properties() {
            return {
                currentColor: { type: Object },
                currentSize: { type: Number },
                currentType: { type: String },
            };
        }
        tracker_ = new EventTracker();
        #currentColor_accessor_storage = { r: 0, g: 0, b: 0 };
        get currentColor() { return this.#currentColor_accessor_storage; }
        set currentColor(value) { this.#currentColor_accessor_storage = value; }
        #currentSize_accessor_storage = PEN_SIZES[0].size;
        get currentSize() { return this.#currentSize_accessor_storage; }
        set currentSize(value) { this.#currentSize_accessor_storage = value; }
        #currentType_accessor_storage = AnnotationBrushType.PEN;
        get currentType() { return this.#currentType_accessor_storage; }
        set currentType(value) { this.#currentType_accessor_storage = value; }
        constructor(..._args) {
            super();
            if (Ink2Manager.getInstance().isInitializationComplete()) {
                this.onBrushChanged_(Ink2Manager.getInstance().getCurrentBrush());
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this.tracker_.add(Ink2Manager.getInstance(), 'brush-changed', (e) => this.onBrushChanged_(e.detail));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.tracker_.removeAll();
        }
        availableBrushColors() {
            // This mixin's clients use conditional rendering to avoid invoking this
            // method when the ERASER is selected.
            assert(this.currentType !== AnnotationBrushType.ERASER);
            return this.currentType === AnnotationBrushType.PEN ? PEN_COLORS :
                HIGHLIGHTER_COLORS;
        }
        onCurrentColorChanged(e) {
            // Avoid poking the plugin if the value hasn't actually changed.
            const newColor = e.detail.value;
            if (newColor.r !== this.currentColor.r ||
                newColor.b !== this.currentColor.b ||
                newColor.g !== this.currentColor.g) {
                Ink2Manager.getInstance().setBrushColor(newColor);
            }
        }
        onCurrentSizeChanged(e) {
            if (e.detail.value !== this.currentSize) {
                Ink2Manager.getInstance().setBrushSize(e.detail.value);
            }
        }
        onCurrentTypeChanged(e) {
            if (e.detail.value !== this.currentType) {
                Ink2Manager.getInstance().setBrushType(e.detail.value);
            }
        }
        onBrushChanged_(brush) {
            this.currentType = brush.type;
            // Detail and size may be undefined if the brush was set to eraser.
            if (brush.size !== undefined) {
                this.currentSize = brush.size;
            }
            if (brush.color !== undefined) {
                this.currentColor = brush.color;
            }
        }
    }
    return InkAnnotationBrushMixin;
};

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange(TextSizes)
const TEXT_SIZES = [6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 64, 72, 100];
// LINT.ThenChange(//pdf/pdfium/pdfium_ink_reader.cc:TextSizes)
const TEXT_COLORS = [
    // LINT.IfChange(TextAnnotationColors)
    // Row 1:
    { label: 'annotationColorBlack', color: '#000000', blended: false },
    { label: 'ink2BrushColorDarkGrey2', color: '#5f6368', blended: false },
    { label: 'ink2BrushColorDarkGrey1', color: '#9aa0a6', blended: false },
    { label: 'annotationColorLightGrey', color: '#dadce0', blended: false },
    { label: 'annotationColorWhite', color: '#ffffff', blended: false },
    // Row 2:
    { label: 'ink2BrushColorRed1', color: '#f28b82', blended: false },
    { label: 'ink2BrushColorYellow1', color: '#fdd663', blended: false },
    { label: 'ink2BrushColorGreen1', color: '#81c995', blended: false },
    { label: 'ink2TextColorCyan1', color: '#78d9ec', blended: false },
    { label: 'ink2BrushColorBlue1', color: '#8ab4f8', blended: false },
    // Row 3:
    { label: 'ink2BrushColorRed2', color: '#e94235', blended: false },
    { label: 'ink2BrushColorYellow2', color: '#fbbc04', blended: false },
    { label: 'ink2BrushColorGreen2', color: '#34a853', blended: false },
    { label: 'ink2TextColorCyan2', color: '#24c1e0', blended: false },
    { label: 'ink2BrushColorBlue2', color: '#4285f4', blended: false },
    // Row 4:
    { label: 'ink2BrushColorRed3', color: '#c5221f', blended: false },
    { label: 'ink2BrushColorYellow3', color: '#d56e0c', blended: false },
    { label: 'ink2BrushColorGreen3', color: '#188038', blended: false },
    { label: 'ink2TextColorCyan3', color: '#12a4af', blended: false },
    { label: 'ink2BrushColorBlue3', color: '#1967d2', blended: false },
    // LINT.ThenChange(//pdf/pdf_ink_metrics_handler.cc:TextAnnotationColors)
];
const InkAnnotationTextMixin = (superClass) => {
    class InkAnnotationTextMixin extends superClass {
        static get properties() {
            return {
                colors: { type: Array },
                currentColor: { type: Object },
                currentSize: { type: Number },
                currentTypeface: { type: String },
                fontNames: { type: Array },
                sizes: { type: Array },
            };
        }
        #currentColor_accessor_storage = hexToColor(TEXT_COLORS[0].color);
        get currentColor() { return this.#currentColor_accessor_storage; }
        set currentColor(value) { this.#currentColor_accessor_storage = value; }
        #currentSize_accessor_storage = TEXT_SIZES[3];
        get currentSize() { return this.#currentSize_accessor_storage; }
        set currentSize(value) { this.#currentSize_accessor_storage = value; }
        #currentTypeface_accessor_storage = TextTypeface.SANS_SERIF;
        get currentTypeface() { return this.#currentTypeface_accessor_storage; }
        set currentTypeface(value) { this.#currentTypeface_accessor_storage = value; }
        #colors_accessor_storage = TEXT_COLORS;
        get colors() { return this.#colors_accessor_storage; }
        set colors(value) { this.#colors_accessor_storage = value; }
        #fontNames_accessor_storage = [
            TextTypeface.SANS_SERIF,
            TextTypeface.SERIF,
            TextTypeface.MONOSPACE,
        ];
        get fontNames() { return this.#fontNames_accessor_storage; }
        set fontNames(value) { this.#fontNames_accessor_storage = value; }
        #sizes_accessor_storage = TEXT_SIZES;
        get sizes() { return this.#sizes_accessor_storage; }
        set sizes(value) { this.#sizes_accessor_storage = value; }
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            const typefaceSelect = this.shadowRoot.querySelector('#typefaceSelect');
            assert(typefaceSelect);
            typefaceSelect.value = this.currentTypeface;
            const sizeSelect = this.shadowRoot.querySelector('#sizeSelect');
            assert(sizeSelect);
            sizeSelect.value = this.currentSize.toString();
        }
        getLabelForTypeface(typeface) {
            switch (typeface) {
                case TextTypeface.SANS_SERIF:
                    return 'ink2TextFontSansSerif';
                case TextTypeface.SERIF:
                    return 'ink2TextFontSerif';
                case TextTypeface.MONOSPACE:
                    return 'ink2TextFontMonospace';
                default:
                    assertNotReachedCase();
            }
        }
        onTypefaceSelected(e) {
            const newValue = e.target.value;
            Ink2Manager.getInstance().setTextTypeface(newValue);
        }
        onSizeSelected(e) {
            const newValue = Number(e.target.value);
            Ink2Manager.getInstance().setTextSize(newValue);
        }
        onCurrentColorChanged(e) {
            // Avoid poking the plugin if the value hasn't actually changed.
            const newColor = e.detail.value;
            if (!colorsEqual(newColor, this.currentColor)) {
                Ink2Manager.getInstance().setTextColor(newColor);
            }
        }
        onTextAttributesChanged(attributes) {
            this.currentColor = attributes.color;
            this.currentTypeface = attributes.typeface;
            this.currentSize = attributes.size;
        }
    }
    return InkAnnotationTextMixin;
};

let instance$I = null;
function getCss$G() {
    return instance$I || (instance$I = [...[getCss$J()], css `:host,cr-radio-group{--cr-radio-group-item-padding:0;display:flex;gap:var(--ink-brush-button-gap,16px);justify-content:center}selectable-icon-button{--selectable-icon-button-size:var(--ink-brush-button-size,48px)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$y() {
    // clang-format off
    return html `<!--_html_template_start_-->
<cr-radio-group selectable-elements="selectable-icon-button"
    .selected="${this.currentType}" aria-label="$i18n{ink2Tool}"
    @selected-changed="${this.onSelectedChanged_}">
  ${BRUSH_TYPES.map(brush => html `
    <selectable-icon-button id="${brush}" icon="${this.getIcon_(brush)}"
        name="${brush}" label="${this.getLabel_(brush)}">
    </selectable-icon-button>
  `)}
</cr-radio-group>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BRUSH_TYPES = [
    AnnotationBrushType.PEN,
    AnnotationBrushType.HIGHLIGHTER,
    AnnotationBrushType.ERASER,
];
class InkBrushSelectorElement extends CrLitElement {
    static get is() {
        return 'ink-brush-selector';
    }
    static get styles() {
        return getCss$G();
    }
    render() {
        return getHtml$y.bind(this)();
    }
    static get properties() {
        return {
            currentType: {
                notify: true,
                type: String,
            },
        };
    }
    #currentType_accessor_storage = AnnotationBrushType.PEN;
    get currentType() { return this.#currentType_accessor_storage; }
    set currentType(value) { this.#currentType_accessor_storage = value; }
    onSelectedChanged_(e) {
        const newType = e.detail.value;
        if (newType === this.currentType) {
            // Don't record programmatic changes to metrics.
            return;
        }
        this.currentType = newType;
        switch (newType) {
            case AnnotationBrushType.ERASER:
                record(UserAction.SELECT_INK2_BRUSH_ERASER);
                break;
            case AnnotationBrushType.HIGHLIGHTER:
                record(UserAction.SELECT_INK2_BRUSH_HIGHLIGHTER);
                break;
            case AnnotationBrushType.PEN:
                record(UserAction.SELECT_INK2_BRUSH_PEN);
                break;
            default:
                assertNotReachedCase();
        }
    }
    getIcon_(type) {
        const isCurrentType = type === this.currentType;
        switch (type) {
            case AnnotationBrushType.ERASER:
                return isCurrentType ? 'pdf-ink:ink-eraser-filled' :
                    'pdf-ink:ink-eraser';
            case AnnotationBrushType.HIGHLIGHTER:
                return isCurrentType ? 'pdf-ink:ink-highlighter-filled' :
                    'pdf-ink:ink-highlighter';
            case AnnotationBrushType.PEN:
                return isCurrentType ? 'pdf-ink:ink-pen-filled' : 'pdf-ink:ink-pen';
            default:
                assertNotReachedCase();
        }
    }
    getLabel_(type) {
        switch (type) {
            case AnnotationBrushType.ERASER:
                return loadTimeData.getString('annotationEraser');
            case AnnotationBrushType.HIGHLIGHTER:
                return loadTimeData.getString('annotationHighlighter');
            case AnnotationBrushType.PEN:
                return loadTimeData.getString('annotationPen');
            default:
                assertNotReachedCase();
        }
    }
}
customElements.define(InkBrushSelectorElement.is, InkBrushSelectorElement);

let instance$H = null;
function getCss$F() {
    return instance$H || (instance$H = [...[], css `:host{--cr-grid-gap:0px;--cr-column-width:auto;--cr-grid-width:fit-content}#grid{display:grid;grid-gap:var(--cr-grid-gap);grid-template-columns:repeat(var(--cr-grid-columns),var(--cr-column-width));width:var(--cr-grid-width)}::slotted(*){align-self:center;justify-self:center}`]);
}

let instance$G = null;
function getCss$E() {
    return instance$G || (instance$G = [...[getCss$F()], css `#grid{grid-template-columns:var(--cr-grid-template-columns,repeat(var(--cr-grid-columns),var(--cr-column-width)));width:var(--cr-grid-width-override,var(--cr-grid-width));justify-content:var(--cr-grid-justify-content,revert)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$x() {
    return html `
<div id="grid" @keydown="${this.onKeydown_}">
  <slot id="items"></slot>
</div>`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrGridElement extends CrLitElement {
    static get is() {
        return 'cr-grid';
    }
    static get styles() {
        return getCss$E();
    }
    render() {
        return getHtml$x.bind(this)();
    }
    static get properties() {
        return {
            columns: { type: Number },
            disableArrowNavigation: { type: Boolean },
            focusSelector: { type: String },
            ignoreModifiedKeyEvents: { type: Boolean },
        };
    }
    #columns_accessor_storage = 1;
    get columns() { return this.#columns_accessor_storage; }
    set columns(value) { this.#columns_accessor_storage = value; }
    #disableArrowNavigation_accessor_storage = false;
    get disableArrowNavigation() { return this.#disableArrowNavigation_accessor_storage; }
    set disableArrowNavigation(value) { this.#disableArrowNavigation_accessor_storage = value; }
    #focusSelector_accessor_storage;
    get focusSelector() { return this.#focusSelector_accessor_storage; }
    set focusSelector(value) { this.#focusSelector_accessor_storage = value; }
    #ignoreModifiedKeyEvents_accessor_storage = false;
    get ignoreModifiedKeyEvents() { return this.#ignoreModifiedKeyEvents_accessor_storage; }
    set ignoreModifiedKeyEvents(value) { this.#ignoreModifiedKeyEvents_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('columns')) {
            this.style.setProperty('--cr-grid-columns', String(this.columns));
        }
    }
    getSlottedParent_(element) {
        let parent = element;
        while (parent.assignedSlot !== this.$.items &&
            parent.parentElement !== null) {
            parent = parent.parentElement;
        }
        assert(parent);
        return parent;
    }
    onKeydown_(e) {
        if (e.key === ' ' || (e.key === 'Enter' && !(isMac && e.ctrlKey))) {
            e.preventDefault();
            e.stopPropagation();
            e.target.click();
            return;
        }
        if (this.disableArrowNavigation ||
            !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            return;
        }
        const arrowKey = e.key;
        const items = this.$.items.assignedElements().filter(el => {
            return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        });
        const currentIndex = items.indexOf(this.getSlottedParent_(e.target));
        const isRtl = window.getComputedStyle(this)['direction'] === 'rtl';
        const bottomRowColumns = items.length % this.columns;
        const direction = ['ArrowRight', 'ArrowDown'].includes(arrowKey) ? 1 : -1;
        const inEdgeRow = direction === 1 ?
            currentIndex >= items.length - bottomRowColumns :
            currentIndex < this.columns;
        let delta = 0;
        switch (arrowKey) {
            case 'ArrowLeft':
            case 'ArrowRight':
                // Ignores keys likely to be browse shortcuts (like Alt+Left for
                // back).
                if (this.ignoreModifiedKeyEvents && hasKeyModifiers(e)) {
                    return;
                }
                delta = direction * (isRtl ? -1 : 1);
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                delta = direction * (inEdgeRow ? bottomRowColumns : this.columns);
                break;
            default:
                assertNotReachedCase();
        }
        // Handle cases where we move to an empty space in a non-full bottom row
        // and have to jump to the next row.
        if (arrowKey === 'ArrowUp' && inEdgeRow &&
            currentIndex >= bottomRowColumns) {
            delta -= this.columns;
        }
        else if (arrowKey === 'ArrowDown' && !inEdgeRow &&
            currentIndex + delta >= items.length) {
            delta += bottomRowColumns;
        }
        e.preventDefault();
        const newIndex = (items.length + currentIndex + delta) % items.length;
        const item = items[newIndex];
        const toFocus = this.focusSelector ?
            item.querySelector(this.focusSelector) :
            item;
        assert(toFocus);
        toFocus.focus();
        this.fire('cr-grid-focus-changed', toFocus);
    }
}
customElements.define(CrGridElement.is, CrGridElement);

let instance$F = null;
function getCss$D() {
    return instance$F || (instance$F = [...[getCss$J()], css `:host{display:inline-block}cr-grid{justify-content:center}.color-item{align-items:center;cursor:pointer;display:flex;height:48px;justify-content:center;width:48px}.color-chip{appearance:none;background:var(--item-color,magenta);border:1px solid var(--viewer-icon-ink-background-color);border-radius:50%;cursor:pointer;margin:0;height:24px;width:24px}.color-chip.blended{background:color-mix(in srgb,var(--item-color) 40%,white)}.color-chip[checked]{height:36px;width:36px}.color-chip:focus-visible:focus{outline:var(--viewer-icon-focus-outline-color) solid 2px;outline-offset:2px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$w() {
    return html `<!--_html_template_start_-->
<cr-grid role="radiogroup" columns="5" focus-selector=".color-chip"
    aria-label="${this.label}"
    @cr-grid-focus-changed="${this.onCrGridFocusChanged_}">
  ${this.colors.map(item => html `
    <label class="color-item">
      <input type="radio" class="color-chip ${this.getBlendedClass_(item)}"
          name="color" .value="${item.color}"
          .style="--item-color: ${item.color}"
          aria-label="${this.i18n(item.label)}"
          tabindex="${this.getTabIndex_(item.color)}"
          title="${this.i18n(item.label)}" @click="${this.onColorClick_}"
          ?checked="${this.isCurrentColor_(item.color)}">
    </label>
  `)}
</cr-grid>
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InkColorSelectorElementBase = I18nMixinLit(CrLitElement);
class InkColorSelectorElement extends InkColorSelectorElementBase {
    static get is() {
        return 'ink-color-selector';
    }
    static get styles() {
        return getCss$D();
    }
    render() {
        return getHtml$w.bind(this)();
    }
    static get properties() {
        return {
            colors: { type: Array },
            currentColor: { type: Object },
            label: { type: String },
        };
    }
    #colors_accessor_storage = [];
    get colors() { return this.#colors_accessor_storage; }
    set colors(value) { this.#colors_accessor_storage = value; }
    #currentColor_accessor_storage = { r: 0, g: 0, b: 0 };
    get currentColor() { return this.#currentColor_accessor_storage; }
    set currentColor(value) { this.#currentColor_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    onColorClick_(e) {
        this.setBrushColor_(e.currentTarget);
    }
    onCrGridFocusChanged_(e) {
        this.setBrushColor_(e.detail);
    }
    focus() {
        const selectedButton = this.shadowRoot.querySelector('input[checked]');
        assert(selectedButton);
        selectedButton.focus();
    }
    getTabIndex_(color) {
        return this.isCurrentColor_(color) ? 0 : -1;
    }
    isCurrentColor_(hex) {
        return colorsEqual(this.currentColor, hexToColor(hex));
    }
    getBlendedClass_(item) {
        return item.blended ? 'blended' : '';
    }
    setBrushColor_(colorButton) {
        const hex = colorButton.value;
        assert(hex);
        const newColor = hexToColor(hex);
        if (colorsEqual(this.currentColor, newColor)) {
            return;
        }
        this.currentColor = newColor;
        // Intentionally only dispatch an event when the color is changed from the
        // UI, and not whenever it is changed from the parent via property binding.
        this.fire('current-color-changed', { value: newColor });
    }
}
customElements.define(InkColorSelectorElement.is, InkColorSelectorElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PdfViewerPrivateProxyImpl {
    // 
    getTextInfo(textarea, knownFontIds) {
        return chrome.pdfViewerPrivate.getTextInfo(textarea, knownFontIds);
    }
    // 
    // 
    onSaveToDriveProgress = chrome.pdfViewerPrivate.onSaveToDriveProgress;
    saveToDrive(saveRequestType) {
        chrome.pdfViewerPrivate.saveToDrive(saveRequestType);
    }
    // 
    glicSummarize() {
        chrome.pdfViewerPrivate.glicSummarize();
    }
    setPdfDocumentTitle(title) {
        chrome.pdfViewerPrivate.setPdfDocumentTitle(title);
    }
    static getInstance() {
        return instance$E || (instance$E = new PdfViewerPrivateProxyImpl());
    }
    static setInstance(obj) {
        instance$E = obj;
    }
}
let instance$E = null;

let instance$D = null;
function getCss$C() {
    return instance$D || (instance$D = [...[getCss$O()], css `:host{--border-padding:calc(var(--viewer-text-annotation-handle-size) / 2);--handle-offset:calc(var(--viewer-text-annotation-border-width) / 2 + var(--border-padding));--primary-color:var(--viewer-text-annotation-active-color);--textarea-padding-inline:calc(var(--viewer-text-annotation-total-padding-inline) - var(--border-padding));--textarea-padding-vert:calc(var(--viewer-text-annotation-total-padding-vert) - var(--border-padding));--offset-x:calc(var(--viewer-text-annotation-offset-x) + var(--border-padding));--offset-y:calc(var(--viewer-text-annotation-offset-y) + var(--border-padding));--textbox-location-x:0;--textbox-location-y:0;cursor:move;top:calc(var(--textbox-location-y) - var(--offset-y));left:calc(var(--textbox-location-x) - var(--offset-x));padding:var(--border-padding);position:absolute;z-index:1}:host([text-rotations_='1']),:host([text-rotations_='3']){--textarea-padding-inline:calc(var(--viewer-text-annotation-total-padding-vert) - var(--border-padding));--textarea-padding-vert:calc(var(--viewer-text-annotation-total-padding-inline) - var(--border-padding));--offset-x:calc(var(--viewer-text-annotation-offset-x-rotated) + var(--border-padding));--offset-y:calc(var(--viewer-text-annotation-offset-y-rotated) + var(--border-padding))}.handle{background-color:var(--primary-color);border:1px solid white;border-radius:50%;height:var(--viewer-text-annotation-handle-size);position:absolute;transform:translate(-50%,-50%);user-select:none;width:var(--viewer-text-annotation-handle-size)}.handle.top{top:var(--handle-offset)}.handle.left{left:var(--handle-offset)}.handle.right{left:calc(100% - var(--handle-offset))}.handle.bottom{top:calc(100% - var(--handle-offset))}.handle.left.center,.handle.right.center{top:50%}.handle.top.center,.handle.bottom.center{left:50%}.handle.left,.handle.right{cursor:ew-resize}.handle.top,.handle.bottom{cursor:ns-resize}.handle.top.right,.handle.bottom.left{cursor:nesw-resize}.handle.top.left,.handle.bottom.right{cursor:nwse-resize}.textbox-wrapper{flex:1;overflow:hidden;padding:var(--border-padding);border:var(--viewer-text-annotation-border-width) solid var(--primary-color);cursor:move;user-select:none}textarea{background:none;border:none;display:block;outline:none;overflow:hidden;padding:var(--textarea-padding-vert) var(--textarea-padding-inline);resize:none;text-decoration-skip-ink:none}:host([text-rotations_='1']) textarea{writing-mode:vertical-rl}:host([text-rotations_='2']) textarea{transform:rotate(180deg)}:host([text-rotations_='3']) textarea{writing-mode:sideways-lr}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$v() {
    return html `<!--_html_template_start_-->
<div class="textbox-wrapper">
  <textarea id="textbox" .value="${this.textValue_}" rows="1"
      @input="${this.onTextValueInput_}">
  </textarea>
  <div class="handle top left"></div>
  <div class="handle top center"></div>
  <div class="handle top right"></div>
  <div class="handle left center"></div>
  <div class="handle right center"></div>
  <div class="handle bottom left"></div>
  <div class="handle bottom center"></div>
  <div class="handle bottom right"></div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InkTextObserverMixin = (superClass) => {
    class InkTextObserverMixin extends superClass {
        tracker_ = new EventTracker();
        connectedCallback() {
            super.connectedCallback();
            this.tracker_.add(Ink2Manager.getInstance(), 'attributes-changed', (e) => this.onTextAttributesChanged(e.detail));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.tracker_.removeAll();
        }
        firstUpdated() {
            this.onTextAttributesChanged(Ink2Manager.getInstance().getCurrentTextAttributes());
        }
        // Should be overridden by clients.
        onTextAttributesChanged(_attributes) {
            assertNotReached();
        }
    }
    return InkTextObserverMixin;
};

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TextBoxState;
(function (TextBoxState) {
    TextBoxState[TextBoxState["INACTIVE"] = 0] = "INACTIVE";
    TextBoxState[TextBoxState["NEW"] = 1] = "NEW";
    TextBoxState[TextBoxState["EDITED"] = 2] = "EDITED";
})(TextBoxState || (TextBoxState = {}));
const KEYBOARD_RESIZE_STEP_PX = 10;
function getStyleForTypeface(typeface) {
    switch (typeface) {
        case TextTypeface.SANS_SERIF:
            return 'Arial, sans-serif';
        case TextTypeface.SERIF:
            return 'Times, serif';
        case TextTypeface.MONOSPACE:
            return '"Courier New", monospace';
        default:
            assertNotReachedCase();
    }
}
function isArrowKey(key) {
    return key !== null &&
        ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(key);
}
const InkTextBoxElementBase = InkTextObserverMixin(CrLitElement);
class InkTextBoxElement extends InkTextBoxElementBase {
    static get is() {
        return 'ink-text-box';
    }
    static get styles() {
        return getCss$C();
    }
    render() {
        return getHtml$v.bind(this)();
    }
    static get properties() {
        return {
            height_: { type: Number },
            locationX_: { type: Number },
            locationY_: { type: Number },
            minHeight_: { type: Number },
            minWidth_: { type: Number },
            state_: { type: Number },
            textOrientation_: { type: Number },
            textRotations_: {
                type: Number,
                reflect: true,
            },
            textValue_: { type: String },
            viewportRotations_: { type: Number },
            width_: { type: Number },
            zoom_: { type: Number },
            viewport: { type: Object },
            annotation: { type: Object },
            pageDimensions: { type: Object },
            isPaste: { type: Boolean },
        };
    }
    #locationX__accessor_storage = 0;
    // Note: locationX_, locationY_, minHeight_, minWidth_, height_ and width_
    // are in screen coordinates.
    get locationX_() { return this.#locationX__accessor_storage; }
    set locationX_(value) { this.#locationX__accessor_storage = value; }
    #locationY__accessor_storage = 0;
    get locationY_() { return this.#locationY__accessor_storage; }
    set locationY_(value) { this.#locationY__accessor_storage = value; }
    #minHeight__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get minHeight_() { return this.#minHeight__accessor_storage; }
    set minHeight_(value) { this.#minHeight__accessor_storage = value; }
    #minWidth__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get minWidth_() { return this.#minWidth__accessor_storage; }
    set minWidth_(value) { this.#minWidth__accessor_storage = value; }
    #height__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get height_() { return this.#height__accessor_storage; }
    set height_(value) { this.#height__accessor_storage = value; }
    #state__accessor_storage = TextBoxState.INACTIVE;
    get state_() { return this.#state__accessor_storage; }
    set state_(value) { this.#state__accessor_storage = value; }
    #textOrientation__accessor_storage = 0;
    get textOrientation_() { return this.#textOrientation__accessor_storage; }
    set textOrientation_(value) { this.#textOrientation__accessor_storage = value; }
    #textRotations__accessor_storage = 0;
    get textRotations_() { return this.#textRotations__accessor_storage; }
    set textRotations_(value) { this.#textRotations__accessor_storage = value; }
    #textValue__accessor_storage = '';
    get textValue_() { return this.#textValue__accessor_storage; }
    set textValue_(value) { this.#textValue__accessor_storage = value; }
    #viewportRotations__accessor_storage = 0;
    get viewportRotations_() { return this.#viewportRotations__accessor_storage; }
    set viewportRotations_(value) { this.#viewportRotations__accessor_storage = value; }
    #width__accessor_storage = MIN_TEXTBOX_SIZE_PX;
    get width_() { return this.#width__accessor_storage; }
    set width_(value) { this.#width__accessor_storage = value; }
    #zoom__accessor_storage = 1.0;
    get zoom_() { return this.#zoom__accessor_storage; }
    set zoom_(value) { this.#zoom__accessor_storage = value; }
    #isPaste_accessor_storage = false;
    get isPaste() { return this.#isPaste_accessor_storage; }
    set isPaste(value) { this.#isPaste_accessor_storage = value; }
    #viewport_accessor_storage = null;
    get viewport() { return this.#viewport_accessor_storage; }
    set viewport(value) { this.#viewport_accessor_storage = value; }
    #annotation_accessor_storage = null;
    get annotation() { return this.#annotation_accessor_storage; }
    set annotation(value) { this.#annotation_accessor_storage = value; }
    #pageDimensions_accessor_storage = null;
    get pageDimensions() { return this.#pageDimensions_accessor_storage; }
    set pageDimensions(value) { this.#pageDimensions_accessor_storage = value; }
    activeKey_ = null;
    arrowKeyDownCount_ = -1;
    attributes_;
    dragTarget_ = null;
    eventTracker_ = new EventTracker();
    // Whether this is an existing textbox. Tracked so that the textbox can
    // correctly notify the backend about changes (e.g. deleting all text in an
    // existing annotation should remove it from the PDF, so this change must be
    // committed where an empty new annotation would not be committed).
    existing_ = false;
    id_ = -1;
    pageIndex_ = -1;
    pageHeight_ = 0;
    pageWidth_ = 0;
    pageX_ = 0;
    pageY_ = 0;
    pointerStart_ = null;
    promiseResolver_ = null;
    startPosition_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(this, 'pointerdown', (e) => this.onPointerDown_(e));
        this.eventTracker_.add(this, 'keydown', (e) => this.onKeyDown_(e));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('annotation') ||
            changedProperties.has('pageDimensions')) {
            if (this.annotation && this.pageDimensions) {
                this.initializeFromProperties_();
            }
            else {
                this.state_ = TextBoxState.INACTIVE;
            }
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('minHeight_')) {
            this.height_ = this.getClampedHeight_(this.height_);
        }
        if (changedPrivateProperties.has('minWidth_')) {
            this.width_ = this.getClampedWidth_(this.width_);
        }
        if (changedPrivateProperties.has('state_')) {
            this.hidden = this.state_ === TextBoxState.INACTIVE;
            this.fire('state-changed', this.state_);
        }
        if (changedPrivateProperties.has('viewportRotations_') ||
            changedPrivateProperties.has('textOrientation_')) {
            this.textRotations_ =
                (this.viewportRotations_ + this.textOrientation_) % 4;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setAttribute('tabindex', '0');
        this.addEventListener('focus', e => this.onFocus_(e));
        document.addEventListener('keydown', e => this.onDocumentKeyDown_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('width_')) {
            this.$.textbox.style.width = `${this.width_}px`;
        }
        if (changedPrivateProperties.has('height_')) {
            this.$.textbox.style.height = `${this.height_}px`;
        }
        if (changedPrivateProperties.has('locationX_')) {
            this.style.setProperty('--textbox-location-x', `${this.locationX_}px`);
        }
        if (changedPrivateProperties.has('locationY_')) {
            this.style.setProperty('--textbox-location-y', `${this.locationY_}px`);
        }
        if (changedPrivateProperties.has('zoom_')) {
            this.styleFontSize_();
        }
        if ((changedPrivateProperties.has('width_') &&
            this.textRotations_ % 2 === 0) ||
            (changedPrivateProperties.has('height_') &&
                this.textRotations_ % 2 === 1)) {
            this.updateMinimumSize_();
        }
    }
    styleFontSize_() {
        if (this.attributes_) {
            this.$.textbox.style.fontSize = `${this.attributes_.size * this.zoom_}px`;
        }
    }
    onFocus_(e) {
        if (e.relatedTarget === this ||
            e.currentTarget === this && e.relatedTarget === this.$.textbox) {
            // Focus moved from the box to the textarea (or vice versa via the
            // "Escape" shortcut), ignore.
            return;
        }
        this.fire('textbox-focused', {
            height: this.height_,
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
        });
    }
    onTextValueInput_() {
        this.textValue_ = this.$.textbox.value;
        this.textBoxEdited_();
        this.updateMinimumSize_();
    }
    // Populates a `TextAnnotation` with the current state that can
    // be passed to Ink2Manager.
    createClipboardAnnotation_() {
        if (!this.viewport || !this.attributes_ || this.textValue_ === '') {
            return null;
        }
        const pageRect = screenToPageCoordinates(this.pageIndex_, {
            height: this.height_,
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
        }, this.viewport);
        return {
            id: this.id_,
            mojoTextInfo: new ArrayBuffer(0),
            pageIndex: this.pageIndex_,
            pdfZoom: this.zoom_,
            text: this.textValue_,
            textAttributes: structuredClone(this.attributes_),
            textBoxRect: pageRect,
            textOrientation: this.textOrientation_,
            viewportOrientation: this.viewportRotations_,
        };
    }
    copyAnnotation_() {
        const annotation = this.createClipboardAnnotation_();
        if (!annotation) {
            return;
        }
        Ink2Manager.getInstance().saveAnnotationToClipboard(annotation, /*isCut=*/ false);
    }
    cutAnnotation_() {
        const annotation = this.createClipboardAnnotation_();
        if (!annotation) {
            return;
        }
        Ink2Manager.getInstance().saveAnnotationToClipboard(annotation, /*isCut=*/ true);
        this.textValue_ = '';
        this.$.textbox.value = '';
        this.textBoxEdited_();
        this.commitTextAnnotation();
    }
    textBoxEdited_() {
        if (this.state_ === TextBoxState.NEW) {
            this.state_ = TextBoxState.EDITED;
        }
    }
    updateMinimumSize_() {
        if (this.textRotations_ % 2 === 0) {
            this.$.textbox.style.height = 'auto';
            const scrollHeight = this.$.textbox.scrollHeight;
            this.minHeight_ = Math.max(MIN_TEXTBOX_SIZE_PX, scrollHeight);
            // Reset the height styling back.
            this.$.textbox.style.height = `${this.height_}px`;
        }
        else {
            // Adjust the width if the user is typing vertically.
            this.$.textbox.style.width = 'auto';
            const scrollWidth = this.$.textbox.scrollWidth;
            this.minWidth_ = Math.max(MIN_TEXTBOX_SIZE_PX, scrollWidth);
            // Reset the width styling back.
            this.$.textbox.style.width = `${this.width_}px`;
        }
    }
    removePointerDragListeners_() {
        assert(this.dragTarget_);
        this.eventTracker_.remove(this.dragTarget_, 'pointercancel');
        this.eventTracker_.remove(this.dragTarget_, 'pointerup');
        this.eventTracker_.remove(this.dragTarget_, 'pointermove');
        this.dragTarget_ = null;
        this.pointerStart_ = null;
    }
    removeKeyDragListeners_() {
        assert(this.dragTarget_);
        this.eventTracker_.remove(this.dragTarget_, 'keyup');
        this.eventTracker_.remove(this.dragTarget_, 'focusout');
        this.dragTarget_ = null;
        this.activeKey_ = null;
        this.arrowKeyDownCount_ = -1;
    }
    addKeyDragListeners_() {
        this.dragTarget_ = this;
        this.startPosition_ = {
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
            height: this.height_,
        };
        this.eventTracker_.add(this, 'keyup', () => this.onHandleKeyUp_());
        this.eventTracker_.add(this, 'focusout', () => this.onHandleKeyUp_());
    }
    // Removes any drag listeners and resets location and dimensions to the start
    // position.
    resetDrag_() {
        if (this.dragTarget_ === null) {
            return;
        }
        assert(this.startPosition_);
        this.locationX_ = this.startPosition_.locationX;
        this.locationY_ = this.startPosition_.locationY;
        this.width_ = this.startPosition_.width;
        this.height_ = this.startPosition_.height;
        this.startPosition_ = null;
        if (this.pointerStart_ !== null) {
            this.removePointerDragListeners_();
        }
        else if (this.activeKey_ !== null) {
            this.removeKeyDragListeners_();
        }
    }
    commitTextAnnotation() {
        if (this.promiseResolver_) {
            return this.promiseResolver_.promise;
        }
        this.promiseResolver_ = new PromiseResolver();
        const promise = this.promiseResolver_.promise;
        this.resetDrag_();
        const hasTextValue = this.textValue_ !== '';
        const isUnedited = this.state_ !== TextBoxState.EDITED && !this.isPaste;
        if ((!hasTextValue || isUnedited) && !this.existing_) {
            // Empty textbox.
            this.finishCommit_();
            record(UserAction.ADD_INK2_TEXT_ANNOTATION_ABORTED);
            return promise;
        }
        if (!hasTextValue) {
            // Text deleted.
            Ink2Manager.getInstance().deleteTextAnnotation(this.id_, this.pageIndex_);
            this.finishCommit_();
            record(UserAction.DELETE_INK2_TEXT_ANNOTATION);
            return promise;
        }
        // Save the existing state with dummy mojoTextInfo.
        assert(this.attributes_);
        const isEdited = this.state_ === TextBoxState.EDITED;
        const annotation = {
            id: this.id_,
            mojoTextInfo: new ArrayBuffer(0),
            pageIndex: this.pageIndex_,
            pdfZoom: this.zoom_,
            text: this.textValue_,
            textAttributes: structuredClone(this.attributes_),
            textBoxRect: {
                height: this.height_,
                locationX: this.locationX_,
                locationY: this.locationY_,
                width: this.width_,
            },
            textOrientation: this.textOrientation_,
            viewportOrientation: this.viewportRotations_,
        };
        if (!isEdited) {
            // No edits.
            Ink2Manager.getInstance().commitTextAnnotation(annotation, isEdited, /*typefaces=*/ []);
            this.finishCommit_();
            record(UserAction.EDIT_INK2_TEXT_ANNOTATION_ABORTED);
            return promise;
        }
        // Addition or edit.
        (async () => {
            try {
                const result = await PdfViewerPrivateProxyImpl.getInstance().getTextInfo(this.$.textbox, Ink2Manager.getInstance().getKnownFontIds());
                for (const typeface of result.typefaces) {
                    Ink2Manager.getInstance().addKnownFontId(typeface.uniqueId);
                }
                annotation.mojoTextInfo = result.mojoTextInfo;
                Ink2Manager.getInstance().commitTextAnnotation(annotation, isEdited, result.typefaces);
                record(this.existing_ ? UserAction.EDIT_INK2_TEXT_ANNOTATION :
                    UserAction.ADD_INK2_TEXT_ANNOTATION);
            }
            catch (e) {
                console.error('Error committing text annotation:', e);
            }
            finally {
                this.finishCommit_();
            }
        })();
        return promise;
    }
    finishCommit_() {
        this.state_ = TextBoxState.INACTIVE;
        assert(this.promiseResolver_);
        this.promiseResolver_.resolve();
        this.promiseResolver_ = null;
    }
    initializeFromProperties_() {
        const annotation = this.annotation;
        const pageDimensions = this.pageDimensions;
        if (!annotation || !pageDimensions) {
            return;
        }
        if (this.viewport) {
            this.zoom_ = this.viewport.getZoom();
            this.viewportRotations_ = this.viewport.getClockwiseRotations();
        }
        // Update is in screen coordinates.
        this.pageX_ = pageDimensions.x;
        this.pageY_ = pageDimensions.y;
        this.pageWidth_ = pageDimensions.width;
        this.pageHeight_ = pageDimensions.height;
        this.width_ = annotation.textBoxRect.width;
        this.height_ = annotation.textBoxRect.height;
        this.minHeight_ = MIN_TEXTBOX_SIZE_PX;
        this.minWidth_ = MIN_TEXTBOX_SIZE_PX;
        this.locationX_ = annotation.textBoxRect.locationX;
        this.locationY_ = annotation.textBoxRect.locationY;
        this.state_ = this.isPaste ? TextBoxState.EDITED : TextBoxState.NEW;
        this.existing_ = annotation.text !== '' && !this.isPaste;
        this.textValue_ = annotation.text;
        this.id_ = annotation.id;
        this.pageIndex_ = annotation.pageIndex;
        this.textOrientation_ = annotation.textOrientation;
        this.updateTextAttributes_(annotation.textAttributes);
        this.focusTextboxWhenReady_();
    }
    async focusTextboxWhenReady_() {
        await this.updateComplete;
        setTimeout(() => {
            if (this.isPaste) {
                this.focus();
            }
            else {
                this.$.textbox.focus();
            }
            this.fire('textbox-focused-for-test');
        }, 0);
    }
    viewportChanged() {
        if (!this.viewport || this.pageIndex_ === -1) {
            return;
        }
        const zoom = this.viewport.getZoom();
        const clockwiseRotations = this.viewport.getClockwiseRotations();
        const pageDimensions = this.viewport.getPageScreenRect(this.pageIndex_);
        // Convert width, height, locationX, locationY to the new screen
        // coordinates.
        // Note that this.pageX_ and this.pageY_ are in the old screen
        // coordinates, i.e. they were using the old zoom value.
        const adjusted = {
            locationX: (this.locationX_ - this.pageX_) * zoom / this.zoom_,
            locationY: (this.locationY_ - this.pageY_) * zoom / this.zoom_,
            width: Math.max(this.width_ * zoom / this.zoom_, MIN_TEXTBOX_SIZE_PX),
            height: Math.max(this.height_ * zoom / this.zoom_, MIN_TEXTBOX_SIZE_PX),
        };
        const rotated = convertRotatedCoordinates(adjusted, this.viewportRotations_, clockwiseRotations, pageDimensions.width, pageDimensions.height);
        // Flip min height and width if orientation has switched.
        if (this.viewportRotations_ % 2 !== clockwiseRotations % 2) {
            const min = this.minHeight_;
            this.minHeight_ = this.minWidth_;
            this.minWidth_ = min;
        }
        this.locationX_ = rotated.locationX + pageDimensions.x;
        this.locationY_ = rotated.locationY + pageDimensions.y;
        this.width_ = rotated.width;
        this.height_ = rotated.height;
        // Update properties to the new values.
        this.viewportRotations_ = clockwiseRotations;
        this.zoom_ = zoom;
        this.pageX_ = pageDimensions.x;
        this.pageY_ = pageDimensions.y;
        this.pageWidth_ = pageDimensions.width;
        this.pageHeight_ = pageDimensions.height;
    }
    onDocumentKeyDown_(e) {
        // Only handle "Escape" when in an active state.
        if (e.key !== 'Escape' || this.state_ === TextBoxState.INACTIVE) {
            return;
        }
        const target = e.composedPath()[0];
        if (target === this.$.textbox) {
            this.focus();
            this.fire('ink-text-box-focused-for-test');
        }
        else {
            this.commitTextAnnotation();
        }
        e.preventDefault();
        e.stopPropagation();
    }
    onKeyDown_(e) {
        if (this.state_ === TextBoxState.INACTIVE) {
            return;
        }
        // Handle text styling shortcuts.
        const textStyle = getTextStyleForShortcut(e);
        if (textStyle !== null) {
            e.preventDefault();
            e.stopPropagation();
            Ink2Manager.getInstance().toggleTextStyle(textStyle);
            return;
        }
        const target = e.composedPath()[0];
        // Ignore keyboard events on the textbox itself, other than 'Escape', which
        // is separately handled by the global keyhandler above.
        if (!(target instanceof HTMLElement) || target === this.$.textbox) {
            return;
        }
        // Handle copy and cut.
        if (hasCtrlModifierOnly(e)) {
            const key = e.key.toLowerCase();
            if (key === 'c' || key === 'x') {
                e.preventDefault();
                e.stopPropagation();
                if (key === 'c') {
                    this.copyAnnotation_();
                }
                else {
                    this.cutAnnotation_();
                }
                return;
            }
        }
        // Backspace/Delete key not in the textbox deletes the annotation.
        if (e.key === 'Backspace' || e.key === 'Delete') {
            this.textValue_ = '';
            this.textBoxEdited_();
            this.commitTextAnnotation().then(() => {
                getInstance().announce(loadTimeData.getString('ink2TextAnnotationDeleted'));
            });
            return;
        }
        // Ignore if the user is already dragging with the pointer.
        if (this.pointerStart_ !== null) {
            return;
        }
        if (this.handleResizeShortcut_(e)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        // Ignore all other keys except arrows.
        if (!isArrowKey(e.key)) {
            return;
        }
        // Ignore arrow key dragging if keyboard resize shortcut is already active.
        if (this.activeKey_ !== null && !isArrowKey(this.activeKey_)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        // Reset state if this is a new arrow key.
        if (this.activeKey_ !== null && this.activeKey_ !== e.key) {
            this.onHandleKeyUp_();
        }
        this.activeKey_ = e.key;
        if (this.arrowKeyDownCount_ === -1) {
            this.addKeyDragListeners_();
            this.arrowKeyDownCount_ = 0;
        }
        this.arrowKeyDownCount_++;
        let moveX = 0;
        let moveY = 0;
        switch (e.key) {
            case 'ArrowDown':
                moveY = this.arrowKeyDownCount_;
                break;
            case 'ArrowUp':
                moveY = -1 * this.arrowKeyDownCount_;
                break;
            case 'ArrowLeft':
                moveX = -1 * this.arrowKeyDownCount_;
                break;
            case 'ArrowRight':
                moveX = this.arrowKeyDownCount_;
                break;
        }
        this.onMove_(this, moveX, moveY);
    }
    announceMoveOrResize_() {
        if (!this.startPosition_) {
            return;
        }
        if (this.width_ !== this.startPosition_.width ||
            this.height_ !== this.startPosition_.height) {
            getInstance().announce(loadTimeData.getString('ink2TextAnnotationResized'));
            return;
        }
        const deltaX = this.locationX_ - this.startPosition_.locationX;
        if (deltaX !== 0) {
            const stringId = deltaX > 0 ? 'ink2TextAnnotationMovedRight' :
                'ink2TextAnnotationMovedLeft';
            getInstance().announce(loadTimeData.getString(stringId));
        }
        const deltaY = this.locationY_ - this.startPosition_.locationY;
        if (deltaY !== 0) {
            const stringId = deltaY > 0 ? 'ink2TextAnnotationMovedDown' :
                'ink2TextAnnotationMovedUp';
            getInstance().announce(loadTimeData.getString(stringId));
        }
    }
    onHandleKeyUp_() {
        this.announceMoveOrResize_();
        this.startPosition_ = null;
        this.removeKeyDragListeners_();
        this.textBoxEdited_();
    }
    onPointerDown_(e) {
        const target = e.composedPath()[0];
        // Ignore pointer events on the textbox itself.
        if (e.button !== 0 || !(target instanceof HTMLElement) ||
            target === this.$.textbox) {
            return;
        }
        // Don't allow dragging with the keyboard and pointer at the same time.
        if (this.dragTarget_ !== null) {
            return;
        }
        this.dragTarget_ = target;
        this.pointerStart_ = { x: e.x, y: e.y };
        this.startPosition_ = {
            locationX: this.locationX_,
            locationY: this.locationY_,
            width: this.width_,
            height: this.height_,
        };
        this.eventTracker_.add(target, 'pointercancel', () => this.onHandlePointerUp_());
        this.eventTracker_.add(target, 'pointerup', () => this.onHandlePointerUp_());
        this.eventTracker_.add(target, 'pointermove', (e) => this.onHandlePointerMove_(e));
        target.setPointerCapture(e.pointerId);
    }
    onHandlePointerMove_(e) {
        const target = e.target;
        assert(this.pointerStart_);
        this.onMove_(target, e.x - this.pointerStart_.x, e.y - this.pointerStart_.y);
    }
    onMove_(target, moveX, moveY) {
        assert(this.startPosition_);
        if (!target.classList.contains('handle')) {
            // User is dragging the box itself.
            this.locationX_ = Math.min(this.pageX_ + this.pageWidth_ - this.width_, Math.max(this.pageX_, this.startPosition_.locationX + moveX));
            this.locationY_ = Math.min(this.pageY_ + this.pageHeight_ - this.height_, Math.max(this.pageY_, this.startPosition_.locationY + moveY));
            return;
        }
        if (target.classList.contains('left')) {
            const deltaX = Math.max(this.pageX_ - this.startPosition_.locationX, Math.min(moveX, this.startPosition_.width - this.minWidth_));
            this.locationX_ = this.startPosition_.locationX + deltaX;
            this.width_ = this.startPosition_.width - deltaX;
        }
        else if (target.classList.contains('right')) {
            this.width_ = this.getClampedWidth_(this.startPosition_.width + moveX);
        }
        if (target.classList.contains('top')) {
            const deltaY = Math.max(this.pageY_ - this.startPosition_.locationY, Math.min(moveY, this.startPosition_.height - this.minHeight_));
            this.locationY_ = this.startPosition_.locationY + deltaY;
            this.height_ = this.startPosition_.height - deltaY;
        }
        else if (target.classList.contains('bottom')) {
            this.height_ = this.getClampedHeight_(this.startPosition_.height + moveY);
        }
    }
    onHandlePointerUp_() {
        this.announceMoveOrResize_();
        this.startPosition_ = null;
        this.removePointerDragListeners_();
        this.textBoxEdited_();
    }
    updateTextAttributes_(newAttributes) {
        this.$.textbox.style.fontFamily =
            getStyleForTypeface(newAttributes.typeface);
        this.attributes_ = newAttributes;
        this.styleFontSize_();
        this.$.textbox.style.textAlign = newAttributes.alignment;
        this.$.textbox.style.fontStyle =
            newAttributes.styles.italic ? 'italic' : 'normal';
        this.$.textbox.style.fontWeight =
            newAttributes.styles.bold ? 'bold' : 'normal';
        this.$.textbox.style.color = colorToHex(newAttributes.color);
        const decorations = [];
        if (newAttributes.styles.underline) {
            decorations.push('underline');
        }
        if (newAttributes.styles.strikethrough) {
            decorations.push('line-through');
        }
        this.$.textbox.style.textDecoration = decorations.join(' ') || 'none';
    }
    onTextAttributesChanged(newAttributes) {
        if (!!this.attributes_ &&
            newAttributes.typeface === this.attributes_.typeface &&
            newAttributes.size === this.attributes_.size &&
            colorsEqual(newAttributes.color, this.attributes_.color) &&
            newAttributes.alignment === this.attributes_.alignment &&
            stylesEqual(newAttributes.styles, this.attributes_.styles)) {
            return;
        }
        this.updateTextAttributes_(newAttributes);
        this.textBoxEdited_();
        if (this.state_ !== TextBoxState.INACTIVE) {
            this.updateMinimumSize_();
        }
    }
    handleResizeShortcut_(e) {
        if (this.state_ === TextBoxState.INACTIVE || this.pointerStart_ !== null ||
            isArrowKey(this.activeKey_)) {
            return false;
        }
        const mainModifier = hasCtrlModifier(e);
        const secondModifier = isMac ? e.ctrlKey : e.altKey;
        if (!mainModifier || !secondModifier || e.shiftKey) {
            return false;
        }
        const key = e.key.toLowerCase();
        if (!['b', 'w', 'i', '9', 'k', 'j'].includes(key)) {
            return false;
        }
        if (this.activeKey_ !== null && this.activeKey_ !== key) {
            this.onHandleKeyUp_();
        }
        if (this.activeKey_ === null) {
            this.activeKey_ = key;
            this.addKeyDragListeners_();
        }
        switch (key) {
            case 'b':
                this.resizeBy_(KEYBOARD_RESIZE_STEP_PX, 0);
                return true;
            case 'w':
                this.resizeBy_(-KEYBOARD_RESIZE_STEP_PX, 0);
                return true;
            case 'i':
                this.resizeBy_(0, KEYBOARD_RESIZE_STEP_PX);
                return true;
            case '9':
                this.resizeBy_(0, -KEYBOARD_RESIZE_STEP_PX);
                return true;
            case 'k':
                this.resizeProportionally_(1.1);
                return true;
            case 'j':
                this.resizeProportionally_(0.9);
                return true;
            default:
                assertNotReached();
        }
    }
    /**
     * Changes the size of the textbox by deltaX px horizontally and deltaY px
     * vertically.
     */
    resizeBy_(deltaX, deltaY) {
        const newWidth = this.getClampedWidth_(this.width_ + deltaX);
        const newHeight = this.getClampedHeight_(this.height_ + deltaY);
        if (newWidth !== this.width_ || newHeight !== this.height_) {
            this.width_ = newWidth;
            this.height_ = newHeight;
        }
    }
    resizeProportionally_(scale) {
        const clampedScale = scale > 1 ?
            Math.min(scale, this.getMaxWidth_() / this.width_, this.getMaxHeight_() / this.height_) :
            Math.max(scale, this.minWidth_ / this.width_, this.minHeight_ / this.height_);
        const newWidth = Math.round(this.width_ * clampedScale);
        const newHeight = Math.round(this.height_ * clampedScale);
        if (newWidth !== this.width_ || newHeight !== this.height_) {
            this.width_ = newWidth;
            this.height_ = newHeight;
        }
    }
    getMaxWidth_() {
        return this.pageWidth_ + this.pageX_ - this.locationX_;
    }
    getMaxHeight_() {
        return this.pageHeight_ + this.pageY_ - this.locationY_;
    }
    getClampedWidth_(width) {
        return Math.min(this.getMaxWidth_(), Math.max(this.minWidth_, width));
    }
    getClampedHeight_(height) {
        return Math.min(this.getMaxHeight_(), Math.max(this.minHeight_, height));
    }
}
customElements.define(InkTextBoxElement.is, InkTextBoxElement);

let instance$C = null;
function getCss$B() {
    return instance$C || (instance$C = [...[], css `:host{display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;top:0;z-index:1}#container{display:block;height:100%;overflow:hidden;position:relative;width:100%;z-index:0}.placeholder{position:absolute;border:var(--viewer-text-annotation-border-width) solid transparent;box-sizing:border-box;outline:none;--offset-x:var(--viewer-text-annotation-offset-x);--offset-y:var(--viewer-text-annotation-offset-y);--padding-x:var(--viewer-text-annotation-padding-x);--padding-y:var(--viewer-text-annotation-padding-y);left:calc(var(--left,0px) - var(--offset-x));top:calc(var(--top,0px) - var(--offset-y));width:calc(var(--width,0px) + var(--padding-x));height:calc(var(--height,0px) + var(--padding-y))}.placeholder[data-rotations='1'],.placeholder[data-rotations='3']{--offset-x:var(--viewer-text-annotation-offset-x-rotated);--offset-y:var(--viewer-text-annotation-offset-y-rotated);--padding-x:var(--viewer-text-annotation-padding-x-rotated);--padding-y:var(--viewer-text-annotation-padding-y-rotated)}.placeholder:focus-visible{border-color:var(--viewer-text-annotation-active-color)}ink-text-box{pointer-events:auto}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$u() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div id="container" role="list" aria-label="$i18n{ink2TextAnnotationsAxLabel}"
    @focusout="${this.onContainerFocusout_}">
  ${this.placeholders_.map((placeholder, index) => html `
    <div class="placeholder" style="${this.getStyles_(placeholder)}"
        data-index="${index}" data-rotations="${placeholder.rotations}"
        aria-hidden="${this.isPlaceholderAriaHidden_(placeholder)}"
        aria-setsize="${this.placeholders_.length}" aria-posinset="${index + 1}"
        role="listitem" aria-label="${placeholder.label}"
        tabindex="${this.getPlaceholderTabIndex_(placeholder)}"
        @focus="${this.onPlaceholderFocus_}"
        @keydown="${this.onPlaceholderKeydown_}">
    </div>
  `)}
</div>
<ink-text-box id="textBox" .viewport="${this.viewport}"
    .annotation="${this.activeAnnotation_}"
    .pageDimensions="${this.activePageDimensions_}" .isPaste="${this.isPaste_}"
    @state-changed="${this.onTextBoxStateChanged_}"
    @textbox-focused="${this.onTextboxFocused_}">
</ink-text-box>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class InkTextAnnotationsElement extends CrLitElement {
    static get is() {
        return 'ink-text-annotations';
    }
    static get styles() {
        return getCss$B();
    }
    render() {
        return getHtml$u.bind(this)();
    }
    static get properties() {
        return {
            viewport: { type: Object },
            activeAnnotation_: { type: Object },
            activePageDimensions_: { type: Object },
            focusedIndex_: { type: Number },
            isPaste_: { type: Boolean },
            placeholders_: { type: Array },
        };
    }
    #viewport_accessor_storage = null;
    get viewport() { return this.#viewport_accessor_storage; }
    set viewport(value) { this.#viewport_accessor_storage = value; }
    #activeAnnotation__accessor_storage = null;
    get activeAnnotation_() { return this.#activeAnnotation__accessor_storage; }
    set activeAnnotation_(value) { this.#activeAnnotation__accessor_storage = value; }
    #activePageDimensions__accessor_storage = null;
    get activePageDimensions_() { return this.#activePageDimensions__accessor_storage; }
    set activePageDimensions_(value) { this.#activePageDimensions__accessor_storage = value; }
    #focusedIndex__accessor_storage = -1;
    get focusedIndex_() { return this.#focusedIndex__accessor_storage; }
    set focusedIndex_(value) { this.#focusedIndex__accessor_storage = value; }
    #isPaste__accessor_storage = false;
    get isPaste_() { return this.#isPaste__accessor_storage; }
    set isPaste_(value) { this.#isPaste__accessor_storage = value; }
    #placeholders__accessor_storage = [];
    get placeholders_() { return this.#placeholders__accessor_storage; }
    set placeholders_(value) { this.#placeholders__accessor_storage = value; }
    annotations_ = [];
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        const manager = Ink2Manager.getInstance();
        this.eventTracker_.add(manager, 'annotations-updated', () => this.updateAnnotations_());
        this.eventTracker_.add(manager, 'initialize-text-box', (e) => this.onInitializeTextBox_(e.detail));
        this.eventTracker_.add(this, 'wheel', (e) => this.onWheel_(e));
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.updateAnnotations_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('focusedIndex_')) {
            this.updatePlaceholders_();
        }
    }
    onKeyDown_(e) {
        if (!hasCtrlModifierOnly(e) || e.key.toLowerCase() !== 'v') {
            return;
        }
        // Ignore if event occurred on a <textarea> or <input> that
        // should handle it (e.g. the ink-text-box textarea)
        const target = e.composedPath()[0] ?? null;
        if (target instanceof HTMLTextAreaElement ||
            target instanceof HTMLInputElement) {
            return;
        }
        this.pasteAnnotation();
    }
    async pasteAnnotation() {
        if (this.activeAnnotation_) {
            await this.$.textBox.commitTextAnnotation();
        }
        Ink2Manager.getInstance().pasteAnnotation();
    }
    viewportChanged() {
        this.updatePlaceholders_();
        this.$.textBox.viewportChanged();
    }
    updateAnnotations_() {
        const manager = Ink2Manager.getInstance();
        const allAnnotations = [];
        const sortedPages = Array.from(manager.annotations.keys()).sort((a, b) => a - b);
        for (const page of sortedPages) {
            const pageAnnotationsMap = manager.annotations.get(page);
            if (!pageAnnotationsMap || pageAnnotationsMap.size === 0) {
                continue;
            }
            const pageAnnotations = Array.from(pageAnnotationsMap.values());
            // Sort visually: top-to-bottom, then left-to-right
            pageAnnotations.sort((a, b) => {
                if (a.textBoxRect.locationY !== b.textBoxRect.locationY) {
                    return a.textBoxRect.locationY - b.textBoxRect.locationY;
                }
                return a.textBoxRect.locationX - b.textBoxRect.locationX;
            });
            allAnnotations.push(...pageAnnotations);
        }
        this.annotations_ = allAnnotations;
        this.updatePlaceholders_();
    }
    getActiveWindowIndices_() {
        const indices = new Set();
        const total = this.annotations_.length;
        if (total === 0) {
            return indices;
        }
        if (this.focusedIndex_ === -1) {
            // When no placeholder is focused, pre-position the first and last
            // items so tabbing from top or bottom immediately lands on a positioned
            // element.
            indices.add(0);
            indices.add(total - 1);
            return indices;
        }
        if (this.focusedIndex_ > 0) {
            indices.add(this.focusedIndex_ - 1);
        }
        indices.add(this.focusedIndex_);
        if (this.focusedIndex_ < total - 1) {
            indices.add(this.focusedIndex_ + 1);
        }
        return indices;
    }
    updatePlaceholders_() {
        const viewport = this.viewport;
        assert(viewport);
        const activeIndices = this.getActiveWindowIndices_();
        const clockwiseRotations = viewport.getClockwiseRotations();
        this.placeholders_ = this.annotations_.map((annotation, index) => {
            const screenRect = activeIndices.has(index) ?
                pageToScreenCoordinates(annotation.pageIndex, annotation.textBoxRect, viewport) :
                null;
            return {
                screenRect,
                label: annotation.text,
                rotations: (clockwiseRotations + annotation.textOrientation) % 4,
            };
        });
    }
    getStyles_(placeholder) {
        if (!placeholder.screenRect) {
            return 'opacity: 0;';
        }
        return `
      --left: ${placeholder.screenRect.locationX}px;
      --top: ${placeholder.screenRect.locationY}px;
      --width: ${placeholder.screenRect.width}px;
      --height: ${placeholder.screenRect.height}px;
    `;
    }
    onPlaceholderFocus_(e) {
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        this.focusedIndex_ = index;
        const placeholder = this.placeholders_[index];
        assert(placeholder);
        assert(placeholder.screenRect);
        this.scrollToShowTextBox_(placeholder.screenRect);
    }
    onContainerFocusout_(e) {
        const relatedTarget = e.relatedTarget;
        if (!this.$.container.contains(relatedTarget)) {
            this.focusedIndex_ = -1;
        }
    }
    async onPlaceholderKeydown_(e) {
        if (e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        e.preventDefault();
        const index = Number(e.currentTarget.dataset['index']);
        const annotation = this.annotations_[index];
        assert(annotation);
        if (this.activeAnnotation_) {
            if (this.activeAnnotation_.id === annotation.id) {
                return;
            }
            await this.$.textBox.commitTextAnnotation();
        }
        Ink2Manager.getInstance().activateAnnotationById(annotation.id);
    }
    commitActiveAnnotation() {
        return this.$.textBox.commitTextAnnotation();
    }
    blurActiveAnnotation() {
        this.$.textBox.blur();
    }
    onTextBoxStateChanged_(e) {
        if (e.detail === TextBoxState.INACTIVE) {
            this.isPaste_ = false;
            this.activeAnnotation_ = null;
            this.activePageDimensions_ = null;
            this.focusedIndex_ = -1;
        }
        this.fire('state-changed', e.detail);
    }
    async onInitializeTextBox_(data) {
        if (this.activeAnnotation_) {
            await this.$.textBox.commitTextAnnotation();
        }
        this.isPaste_ = !!data.isPaste;
        this.activeAnnotation_ = data.annotation;
        this.activePageDimensions_ = data.pageDimensions;
    }
    onTextboxFocused_(e) {
        this.scrollToShowTextBox_(e.detail);
    }
    getPlaceholderTabIndex_(placeholder) {
        if (this.activeAnnotation_ || !placeholder.screenRect) {
            return -1;
        }
        return 0;
    }
    isPlaceholderAriaHidden_(placeholder) {
        return this.activeAnnotation_ || !placeholder.screenRect ? 'true' : 'false';
    }
    // Child placeholder elements intercept all pointer-events. Manually forward
    // wheel events to the viewport.
    onWheel_(e) {
        assert(this.viewport);
        if (e.ctrlKey) {
            return;
        }
        e.preventDefault();
        this.viewport.scrollBy({ x: e.deltaX, y: e.deltaY });
    }
    scrollToShowTextBox_(textBoxRect) {
        // The viewport handles scrolling, so prevent the browser from
        // auto-scrolling.
        this.$.container.scrollTop = 0;
        this.$.container.scrollLeft = 0;
        this.scrollTop = 0;
        this.scrollLeft = 0;
        assert(this.viewport);
        const viewportPosition = this.viewport.position;
        const viewportSize = this.viewport.size;
        let scrollX;
        let scrollY;
        if (textBoxRect.locationX < 0 ||
            textBoxRect.locationX + textBoxRect.width > viewportSize.width) {
            // Adjusting by 10% of viewport, rather than putting the text box on the
            // exact edge of the viewport.
            scrollX = viewportPosition.x + textBoxRect.locationX -
                Math.floor(viewportSize.width / 10);
        }
        if (textBoxRect.locationY < 0 ||
            textBoxRect.locationY + textBoxRect.height > viewportSize.height) {
            // Adjusting by 10% of viewport, rather than putting the text box on the
            // exact edge of the viewport.
            scrollY = viewportPosition.y + textBoxRect.locationY -
                Math.floor(viewportSize.height / 10);
        }
        if (scrollX !== undefined || scrollY !== undefined) {
            // TODO(crbug.com/40218278): Re-enable smooth scrolling for all codepaths.
            this.viewport.scrollTo({
                x: scrollX,
                y: scrollY,
            });
        }
    }
}
customElements.define(InkTextAnnotationsElement.is, InkTextAnnotationsElement);

let instance$B = null;
function getCss$A() {
    return instance$B || (instance$B = [...[], css `:host{display:inline-block}cr-radio-group{--cr-radio-group-item-padding:0;display:flex;gap:16px;justify-content:center}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$t() {
    // clang-format off
    return html `<!--_html_template_start_-->
<cr-radio-group aria-label="$i18n{ink2TextAlignment}"
    selectable-elements="selectable-icon-button"
    .selected="${this.currentAlignment_}"
    @keydown="${this.onAlignmentKeydown_}">
  <selectable-icon-button icon="pdf-ink:format-align-left"
      name="${TextAlignment.LEFT}" label="$i18n{ink2TextAlignLeft}"
      @click="${this.onAlignmentClick_}">
  </selectable-icon-button>
  <selectable-icon-button icon="pdf-ink:format-align-center"
      name="${TextAlignment.CENTER}" label="$i18n{ink2TextAlignCenter}"
      @click="${this.onAlignmentClick_}">
  </selectable-icon-button>
  <selectable-icon-button icon="pdf-ink:format-align-right"
      name="${TextAlignment.RIGHT}" label="$i18n{ink2TextAlignRight}"
      @click="${this.onAlignmentClick_}">
  </selectable-icon-button>
</cr-radio-group>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TextAlignmentSelectorElementBase = InkTextObserverMixin(CrLitElement);
class TextAlignmentSelectorElement extends TextAlignmentSelectorElementBase {
    static get is() {
        return 'text-alignment-selector';
    }
    static get styles() {
        return getCss$A();
    }
    render() {
        return getHtml$t.bind(this)();
    }
    static get properties() {
        return {
            currentAlignment_: { type: String },
        };
    }
    #currentAlignment__accessor_storage = TextAlignment.LEFT;
    get currentAlignment_() { return this.#currentAlignment__accessor_storage; }
    set currentAlignment_(value) { this.#currentAlignment__accessor_storage = value; }
    focus() {
        const selectedButton = this.shadowRoot.querySelector('selectable-icon-button[checked]');
        assert(selectedButton);
        selectedButton.focus();
    }
    onAlignmentClick_(e) {
        const button = e.currentTarget;
        const newAlignment = button.getAttribute('name');
        assert(newAlignment);
        this.setAlignment_(newAlignment);
    }
    onAlignmentKeydown_(e) {
        if (!['ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Home',
            'End',
            ' ',
            'Enter',
        ].includes(e.key)) {
            return;
        }
        // Wait for cr-radio-group to handle the keyboard navigation and update its
        // `selected` property before updating the alignment in Ink2Manager.
        setTimeout(() => {
            const radioGroup = this.shadowRoot.querySelector('cr-radio-group');
            assert(radioGroup);
            if (radioGroup.selected) {
                this.setAlignment_(radioGroup.selected);
            }
        }, 0);
    }
    setAlignment_(newAlignment) {
        if (newAlignment === this.currentAlignment_) {
            return;
        }
        this.currentAlignment_ = newAlignment;
        // Intentionally only update Ink2Manager when alignment is changed from user
        // interaction (click/keydown), and not whenever it is updated from
        // onTextAttributesChanged via property binding.
        Ink2Manager.getInstance().setTextAlignment(newAlignment);
    }
    onTextAttributesChanged(attributes) {
        this.currentAlignment_ = attributes.alignment;
    }
}
customElements.define(TextAlignmentSelectorElement.is, TextAlignmentSelectorElement);

let instance$A = null;
function getCss$z() {
    return instance$A || (instance$A = [...[], css `:host{display:flex;gap:var(--text-styles-selector-gap,16px)}cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-fill-color);--cr-icon-button-focus-outline-color:var(--viewer-icon-focus-outline-color);--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}cr-icon-button.active{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color);border-radius:50%}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$s() {
    // clang-format off
    return html `<!--_html_template_start_-->
${this.getTextStyles_().map(style => html `
  <cr-icon-button class="${this.getActiveClass_(style)}"
      @click="${this.onStyleButtonClick_}" data-style="${style}"
      iron-icon="${this.getIcon_(style)}"
      aria-pressed="${this.getAriaPressed_(style)}"
      aria-label="${this.getTitle_(style)}" title="${this.getTitle_(style)}">
  </cr-icon-button>
`)}
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TextStylesSelectorElementBase = InkTextObserverMixin(I18nMixinLit(CrLitElement));
class TextStylesSelectorElement extends TextStylesSelectorElementBase {
    static get is() {
        return 'text-styles-selector';
    }
    static get styles() {
        return getCss$z();
    }
    render() {
        return getHtml$s.bind(this)();
    }
    static get properties() {
        return {
            currentStyles_: { type: Object },
        };
    }
    #currentStyles__accessor_storage = {
        [TextStyle.BOLD]: false,
        [TextStyle.ITALIC]: false,
        [TextStyle.UNDERLINE]: false,
        [TextStyle.STRIKETHROUGH]: false,
    };
    get currentStyles_() { return this.#currentStyles__accessor_storage; }
    set currentStyles_(value) { this.#currentStyles__accessor_storage = value; }
    getTextStyles_() {
        // `loadTimeData` is guaranteed to be populated here because this element is
        // only rendered after entering text annotation mode, which is gated by
        // `pdfTextAnnotationsEnabled`. Revisit or remove this `loadTimeData` usage
        // if/when text annotation mode is no longer behind a feature flag.
        if (loadTimeData.getBoolean('pdfTextAnnotationsExtraStylesEnabled')) {
            return Object.values(TextStyle);
        }
        return [TextStyle.BOLD, TextStyle.ITALIC];
    }
    onStyleButtonClick_(e) {
        const style = e.target.dataset['style'];
        Ink2Manager.getInstance().toggleTextStyle(style);
    }
    getActiveClass_(style) {
        return this.currentStyles_[style] ? 'active' : '';
    }
    getAriaPressed_(style) {
        return this.currentStyles_[style] ? 'true' : 'false';
    }
    getIcon_(style) {
        switch (style) {
            case TextStyle.BOLD:
                return 'pdf-ink:format-bold';
            case TextStyle.ITALIC:
                return 'pdf-ink:format-italic';
            case TextStyle.STRIKETHROUGH:
                return 'pdf-ink:strikethrough-s';
            case TextStyle.UNDERLINE:
                return 'pdf-ink:format-underlined';
            default:
                assertNotReachedCase();
        }
    }
    getTitle_(style) {
        switch (style) {
            case TextStyle.BOLD:
                return this.i18n('ink2TextStyleBold');
            case TextStyle.ITALIC:
                return this.i18n('ink2TextStyleItalic');
            case TextStyle.STRIKETHROUGH:
                return this.i18n('ink2TextStyleStrikethrough');
            case TextStyle.UNDERLINE:
                return this.i18n('ink2TextStyleUnderline');
            default:
                assertNotReachedCase();
        }
    }
    onTextAttributesChanged(attributes) {
        this.currentStyles_ = attributes.styles;
    }
}
customElements.define(TextStylesSelectorElement.is, TextStylesSelectorElement);

let instance$z = null;
function getCss$y() {
    return instance$z || (instance$z = [...[getCss$O()], css `#item{align-items:flex-start;display:flex;padding:5px 28px;position:relative;transition:background-color 100ms ease-out}#item:hover{background-color:rgba(255,255,255,0.25)}#title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:not([save-allowed_])) #title{opacity:var(--cr-disabled-opacity)}#download{--cr-icon-button-fill-color:var(--primary-text-color);--cr-icon-button-icon-size:16px;--cr-icon-button-size:28px;margin:0;position:absolute;right:0;top:calc((100% - var(--cr-icon-button-size)) / 2)}#download:focus-visible{outline:auto -webkit-focus-ring-color}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$r() {
    return html `<!--_html_template_start_-->
<div id="item">
  <span id="title">${this.attachment.name}</span>
  <cr-icon-button id="download" tabindex="0" ?hidden="${!this.saveAllowed_}"
      title="$i18n{tooltipDownloadAttachment}" iron-icon="cr:download"
      @click="${this.onDownloadClick_}">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerAttachmentElement extends CrLitElement {
    static get is() {
        return 'viewer-attachment';
    }
    static get styles() {
        return getCss$y();
    }
    render() {
        return getHtml$r.bind(this)();
    }
    static get properties() {
        return {
            attachment: { type: Object },
            index: { type: Number },
            saveAllowed_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #attachment_accessor_storage = { name: '', size: 0, readable: false };
    get attachment() { return this.#attachment_accessor_storage; }
    set attachment(value) { this.#attachment_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; }
    set index(value) { this.#index_accessor_storage = value; }
    #saveAllowed__accessor_storage = false;
    get saveAllowed_() { return this.#saveAllowed__accessor_storage; }
    set saveAllowed_(value) { this.#saveAllowed__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('attachment')) {
            this.saveAllowed_ = !!this.attachment && this.attachment.size !== -1;
        }
    }
    onDownloadClick_() {
        if (!this.attachment || this.attachment.size === -1) {
            return;
        }
        this.fire('save-attachment', this.index);
    }
}
customElements.define(ViewerAttachmentElement.is, ViewerAttachmentElement);

let instance$y = null;
function getCss$x() {
    return instance$y || (instance$y = [...[getCss$J()], css `:host{display:block;padding-inline-end:20px;padding-top:20px}#warning{align-items:flex-start;padding:5px 28px 15px;position:relative}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$q() {
    return html `<!--_html_template_start_-->
<div id="warning" ?hidden="${!this.exceedSizeLimit_()}">
  $i18n{oversizeAttachmentWarning}
</div>
${this.attachments.map((item, index) => html `
  <viewer-attachment .attachment="${item}" .index="${index}">
  </viewer-attachment>
`)}
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerAttachmentBarElement extends CrLitElement {
    static get is() {
        return 'viewer-attachment-bar';
    }
    static get styles() {
        return getCss$x();
    }
    render() {
        return getHtml$q.bind(this)();
    }
    static get properties() {
        return {
            attachments: { type: Array },
        };
    }
    #attachments_accessor_storage = [];
    get attachments() { return this.#attachments_accessor_storage; }
    set attachments(value) { this.#attachments_accessor_storage = value; }
    /* Indicates whether any oversized attachments exist */
    exceedSizeLimit_() {
        return this.attachments.some(attachment => attachment.size === -1);
    }
}
customElements.define(ViewerAttachmentBarElement.is, ViewerAttachmentBarElement);

let instance$x = null;
function getCss$w() {
    return instance$x || (instance$x = [...[getCss$J()], css `:host{--dropdown-button-size:32px;display:flex;position:relative}cr-button{--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);--iron-icon-fill-color:var(--viewer-icon-ink-fill-color);border:none;height:var(--dropdown-button-size);width:var(--dropdown-button-size);margin:0;min-width:auto}cr-button[data-selected='true']{--iron-icon-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color)}div{background-color:var(--viewer-side-background-color);bottom:48px;border-radius:8px;left:50%;margin-bottom:4px;padding:0 8px;position:absolute;transform:translateX(-50%)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$p() {
    return html `
<cr-button @click="${this.onDropdownClick_}"
    data-selected="${this.showDropdown_}" aria-expanded="${this.showDropdown_}"
    aria-haspopup="true" title="${this.buttonTitle}">
  <slot name="icon"></slot>
</cr-button>
<div>
  ${this.showDropdown_ ? html `
    <slot name="menu"></slot>
  ` : ''}
</div>`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerBottomToolbarDropdownElement extends CrLitElement {
    static get is() {
        return 'viewer-bottom-toolbar-dropdown';
    }
    static get styles() {
        return getCss$w();
    }
    render() {
        return getHtml$p.bind(this)();
    }
    static get properties() {
        return {
            buttonTitle: { type: String },
            showDropdown_: { type: Boolean },
        };
    }
    #buttonTitle_accessor_storage = '';
    get buttonTitle() { return this.#buttonTitle_accessor_storage; }
    set buttonTitle(value) { this.#buttonTitle_accessor_storage = value; }
    #showDropdown__accessor_storage = false;
    get showDropdown_() { return this.#showDropdown__accessor_storage; }
    set showDropdown_(value) { this.#showDropdown__accessor_storage = value; }
    tracker_ = new EventTracker();
    disconnectedCallback() {
        this.tracker_.removeAll();
        super.disconnectedCallback();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showDropdown_') && this.showDropdown_) {
            const menuSlot = this.shadowRoot.querySelector('slot[name="menu"]');
            assert(menuSlot);
            const menuElements = menuSlot.assignedElements();
            if (menuElements.length > 0) {
                menuElements[0].focus();
            }
        }
    }
    onDropdownClick_() {
        this.toggleDropdown_();
    }
    toggleDropdown_() {
        this.showDropdown_ = !this.showDropdown_;
        if (this.showDropdown_) {
            this.tracker_.add(this, 'focusout', this.handleFocusOut_.bind(this));
        }
        else {
            this.tracker_.remove(this, 'focusout');
        }
    }
    // Exit out of the dropdown when focus shifts away from the dropdown menu.
    handleFocusOut_(e) {
        // toggleDropdown_() should have already removed this event handler.
        assert(this.showDropdown_);
        // Skip if the focus target is the menu.
        const nextElement = e.relatedTarget;
        if (nextElement instanceof HTMLElement && nextElement !== this &&
            this.contains(nextElement)) {
            return;
        }
        this.toggleDropdown_();
    }
}
customElements.define(ViewerBottomToolbarDropdownElement.is, ViewerBottomToolbarDropdownElement);

let instance$w = null;
function getCss$v() {
    return instance$w || (instance$w = [...[], css `:host{--toolbar-item-gap:10px;align-items:center;background-color:var(--viewer-side-background-color);bottom:0;border-radius:24px 24px 0 0;display:flex;padding:12px;position:absolute}ink-color-selector{padding:20px}.toolbar-icon{padding:2px}.toolbar-icon:not(:first-child){padding-inline-start:4px}.toolbar-icon:not(:last-child){padding-inline-end:4px}.color-chip{background:var(--ink-brush-color,magenta);border:1px solid var(--viewer-icon-ink-background-color);border-radius:50%;height:20px;width:20px}`]);
}

let instance$v = null;
function getCss$u() {
    return instance$v || (instance$v = [...[getCss$J(), getCss$v()], css `:host{--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}#vertical-separator{background:rgba(255,255,255,0.3);height:20px;margin-inline:var(--toolbar-item-gap);width:1px}ink-brush-selector{--ink-brush-button-gap:8px;--ink-brush-button-size:32px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$o() {
    // clang-format off
    return html `<!--_html_template_start_-->
<ink-brush-selector class="toolbar-icon" .currentType="${this.currentType}"
    @current-type-changed="${this.onCurrentTypeChanged}">
</ink-brush-selector>
${this.shouldShowBrushOptions_() ? html `
  <span id="vertical-separator"></span>
  <viewer-bottom-toolbar-dropdown id="size" class="toolbar-icon"
      .buttonTitle="${this.getSizeTitle_()}">
    <cr-icon slot="icon" icon="${this.getSizeIcon_()}"></cr-icon>
    <ink-size-selector slot="menu" .currentSize="${this.currentSize}"
        .currentType="${this.currentType}"
        @current-size-changed="${this.onCurrentSizeChanged}">
    </ink-size-selector>
  </viewer-bottom-toolbar-dropdown>
  <viewer-bottom-toolbar-dropdown id="color" class="toolbar-icon"
      .buttonTitle="${this.getColorTitle_()}">
    <div slot="icon" class="color-chip"></div>
    <ink-color-selector slot="menu" label="$i18n{ink2Color}"
        .colors="${this.availableBrushColors()}"
        .currentColor="${this.currentColor}"
        @current-color-changed="${this.onCurrentColorChanged}">
    </ink-color-selector>
  </viewer-bottom-toolbar-dropdown>
` : ''}
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ViewerBottomToolbarElementBase = InkAnnotationBrushMixin(CrLitElement);
class ViewerBottomToolbarElement extends ViewerBottomToolbarElementBase {
    static get is() {
        return 'viewer-bottom-toolbar';
    }
    static get styles() {
        return getCss$u();
    }
    render() {
        return getHtml$o.bind(this)();
    }
    static get properties() {
        return {
            strings: { type: Object },
        };
    }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('currentColor') && this.currentColor) {
            this.onCurrentColorUpdated_();
        }
    }
    getSizeIcon_() {
        let options;
        switch (this.currentType) {
            case AnnotationBrushType.HIGHLIGHTER:
                options = HIGHLIGHTER_SIZES;
                break;
            case AnnotationBrushType.PEN:
                options = PEN_SIZES;
                break;
            default:
                assertNotReached();
        }
        assert(options);
        const option = options.find(option => option.size === this.currentSize);
        assert(option);
        return 'pdf-ink:' + option.icon;
    }
    getSizeTitle_() {
        return this.strings ? loadTimeData.getString('ink2Size') : '';
    }
    getColorTitle_() {
        return this.strings ? loadTimeData.getString('ink2Color') : '';
    }
    onCurrentColorUpdated_() {
        assert(this.currentColor);
        const color = this.currentType === AnnotationBrushType.HIGHLIGHTER ?
            {
                r: blendHighlighterColorValue(this.currentColor.r),
                g: blendHighlighterColorValue(this.currentColor.g),
                b: blendHighlighterColorValue(this.currentColor.b),
            } :
            this.currentColor;
        this.style.setProperty('--ink-brush-color', colorToHex(color));
    }
    shouldShowBrushOptions_() {
        return this.currentType !== AnnotationBrushType.ERASER;
    }
}
customElements.define(ViewerBottomToolbarElement.is, ViewerBottomToolbarElement);

let instance$u = null;
function getCss$t() {
    return instance$u || (instance$u = [...[getCss$J(), getCss$O()], css `#item{align-items:flex-start;cursor:pointer;display:flex;padding:5px 0;position:relative;transition:background-color 100ms ease-out}#item:hover{background-color:var(--cr-menu-background-focus-color)}#item:active{background-color:rgba(255,255,255,0.25)}#title{outline:none;overflow:hidden;text-overflow:ellipsis}#title:focus-visible{outline:auto -webkit-focus-ring-color}#expand-container{--expand-button-size:28px;flex-shrink:0;position:relative;width:var(--expand-button-size)}#expand-container::before{content:'.';visibility:hidden}#expand{--cr-icon-button-fill-color:var(--primary-text-color);--cr-icon-button-icon-size:16px;--cr-icon-button-size:var(--expand-button-size);left:0;margin:0;position:absolute;top:calc((100% - var(--cr-icon-button-size)) / 2);transition:transform 150ms}:host-context([dir=rtl]) #expand{transform:rotate(180deg)}:host([children-shown_]) #expand{transform:rotate(90deg)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$n() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div id="item" @click="${this.onClick_}"
    .style="${this.getItemStartPaddingStyle_()}">
  <div id="expand-container">
    <cr-icon-button id="expand" iron-icon="cr:chevron-right"
        ?hidden="${this.getExpandHidden_()}"
        aria-label="$i18n{bookmarkExpandIconAriaLabel}"
        aria-expanded="${this.childrenShown_}" @click="${this.onExpandClick_}">
    </cr-icon-button>
  </div>
  <span id="title" tabindex="0">${this.bookmark.title}</span>
</div>
${this.childrenShown_ ? html `
  ${this.bookmark.children.map(item => html `
    <viewer-bookmark .bookmark="${item}" .depth="${this.getChildDepth_()}">
    </viewer-bookmark>
  `)}
` : ''}
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Amount that each level of bookmarks is indented by (px). */
const BOOKMARK_INDENT = 20;
var ChangePageOrigin;
(function (ChangePageOrigin) {
    ChangePageOrigin["BOOKMARK"] = "bookmark";
    ChangePageOrigin["THUMBNAIL"] = "thumbnail";
    ChangePageOrigin["PAGE_SELECTOR"] = "pageSelector";
})(ChangePageOrigin || (ChangePageOrigin = {}));
class ViewerBookmarkElement extends CrLitElement {
    static get is() {
        return 'viewer-bookmark';
    }
    static get styles() {
        return getCss$t();
    }
    render() {
        return getHtml$n.bind(this)();
    }
    static get properties() {
        return {
            bookmark: { type: Object },
            depth: { type: Number },
            childrenShown_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #bookmark_accessor_storage = { title: '', children: [] };
    get bookmark() { return this.#bookmark_accessor_storage; }
    set bookmark(value) { this.#bookmark_accessor_storage = value; }
    #depth_accessor_storage = 0;
    get depth() { return this.#depth_accessor_storage; }
    set depth(value) { this.#depth_accessor_storage = value; }
    #childrenShown__accessor_storage = false;
    get childrenShown_() { return this.#childrenShown__accessor_storage; }
    set childrenShown_(value) { this.#childrenShown__accessor_storage = value; }
    firstUpdated() {
        this.$.item.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                this.onEnter_(e);
            }
            else if (e.key === ' ') {
                this.onSpace_(e);
            }
        });
    }
    getItemStartPaddingStyle_() {
        return `padding-inline-start: ${this.depth * BOOKMARK_INDENT}px`;
    }
    getChildDepth_() {
        return this.depth + 1;
    }
    getExpandHidden_() {
        return this.bookmark.children.length <= 0;
    }
    onClick_() {
        if (this.bookmark.page != null) {
            if (this.bookmark.zoom != null) {
                this.fire('change-zoom', { zoom: this.bookmark.zoom });
            }
            if (this.bookmark.x != null && this.bookmark.y != null) {
                this.fire('change-page-and-xy', {
                    page: this.bookmark.page,
                    x: this.bookmark.x,
                    y: this.bookmark.y,
                    origin: ChangePageOrigin.BOOKMARK,
                });
            }
            else {
                this.fire('change-page', { page: this.bookmark.page, origin: ChangePageOrigin.BOOKMARK });
            }
        }
        else if (this.bookmark.uri != null) {
            this.fire('navigate', { uri: this.bookmark.uri, newtab: true });
        }
    }
    onEnter_(e) {
        // Don't allow events which have propagated up from the expand button to
        // trigger a click.
        if (e.target !== this.$.expand) {
            this.onClick_();
        }
    }
    onSpace_(e) {
        // cr-icon-button stops propagation of space events, so there's no need
        // to check the event source here.
        this.onClick_();
        // Prevent default space scroll behavior.
        e.preventDefault();
    }
    onExpandClick_(e) {
        this.childrenShown_ = !this.childrenShown_;
        e.stopPropagation(); // Prevent the above onClick_ handler from firing.
    }
}
customElements.define(ViewerBookmarkElement.is, ViewerBookmarkElement);

let instance$t = null;
function getCss$s() {
    return instance$t || (instance$t = [...[getCss$J()], css `:host{display:block;padding-inline-end:20px;padding-top:20px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$m() {
    // clang-format off
    return html `<!--_html_template_start_-->
${this.bookmarks.map(item => html `
  <viewer-bookmark .bookmark="${item}" depth="0"></viewer-bookmark>
`)}
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerDocumentOutlineElement extends CrLitElement {
    static get is() {
        return 'viewer-document-outline';
    }
    static get styles() {
        return getCss$s();
    }
    render() {
        return getHtml$m.bind(this)();
    }
    static get properties() {
        return {
            bookmarks: { type: Array },
        };
    }
    #bookmarks_accessor_storage = [];
    get bookmarks() { return this.#bookmarks_accessor_storage; }
    set bookmarks(value) { this.#bookmarks_accessor_storage = value; }
}
customElements.define(ViewerDocumentOutlineElement.is, ViewerDocumentOutlineElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$l() {
    return html `<!--_html_template_start_-->
<cr-icon-button id="save" iron-icon="cr:download" part="button"
    @click="${this.onSaveClick}" aria-label="$i18n{tooltipDownload}"
    aria-haspopup="${this.getAriaHasPopup()}" title="$i18n{tooltipDownload}">
</cr-icon-button>
<cr-action-menu id="menu">
  <button id="save-edited" class="dropdown-item"
      @click="${this.onSaveEditedClick}">
    $i18n{downloadEdited}
  </button>
  <button id="save-original" class="dropdown-item"
      @click="${this.onSaveOriginalClick}">
    $i18n{downloadOriginal}
  </button>
</cr-action-menu>
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SaveRequestType$2 = chrome.pdfViewerPrivate.SaveRequestType;
const ViewerSaveControlsMixin = (superClass) => {
    class ViewerSaveControlsMixin extends superClass {
        static get properties() {
            return {
                hasEdits: { type: Boolean },
                // 
                hasInk2Edits: { type: Boolean },
                // 
                isFormFieldFocused: { type: Boolean },
            };
        }
        #hasEdits_accessor_storage = false;
        get hasEdits() { return this.#hasEdits_accessor_storage; }
        set hasEdits(value) { this.#hasEdits_accessor_storage = value; }
        #hasInk2Edits_accessor_storage = false;
        // 
        get hasInk2Edits() { return this.#hasInk2Edits_accessor_storage; }
        set hasInk2Edits(value) { this.#hasInk2Edits_accessor_storage = value; }
        #isFormFieldFocused_accessor_storage = false;
        // 
        get isFormFieldFocused() { return this.#isFormFieldFocused_accessor_storage; }
        set isFormFieldFocused(value) { this.#isFormFieldFocused_accessor_storage = value; }
        waitForFormFocusChange_ = null;
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('isFormFieldFocused') &&
                this.waitForFormFocusChange_ !== null) {
                // Resolving the promise in updated(), since this can trigger
                // showSaveMenu() which accesses the element's DOM.
                this.waitForFormFocusChange_.resolve(this.hasEdits);
                this.waitForFormFocusChange_ = null;
            }
        }
        /**
         * @return Promise that resolves with true if the PDF has edits and/or
         *     annotations, and false otherwise.
         */
        waitForEdits_() {
            if (this.hasEditsToSave_()) {
                return Promise.resolve(true);
            }
            if (!this.isFormFieldFocused) {
                return Promise.resolve(false);
            }
            this.waitForFormFocusChange_ = new PromiseResolver();
            return this.waitForFormFocusChange_.promise;
        }
        /**
         * Subclasses should override this method to return the appropriate
         * CrActionMenuElement.
         */
        getMenu() {
            assertNotReached();
        }
        /**
         * Subclasses should override this method to return the appropriate
         * CrIconButtonElement.
         */
        getSaveButton() {
            assertNotReached();
        }
        /**
         * Subclasses should override this method to return the appropriate save
         * event type.
         */
        getSaveEventType() {
            assertNotReached();
        }
        onSaveClick() {
            this.waitForEdits_().then(hasEdits => {
                if (this.shouldShowSaveMenuOnSaveClick(hasEdits)) {
                    this.showSaveMenu_();
                }
                else {
                    this.dispatchSaveEvent_(SaveRequestType$2.ORIGINAL);
                }
            });
        }
        onSaveEditedClick() {
            this.getMenu().close();
            // 
            // Only save as annotation when there are edits.
            if (this.hasInk2Edits) {
                this.dispatchSaveEvent_(SaveRequestType$2.ANNOTATION);
                return;
            }
            // 
            this.dispatchSaveEvent_(SaveRequestType$2.EDITED);
        }
        onSaveOriginalClick() {
            this.dispatchSaveEvent_(SaveRequestType$2.ORIGINAL);
            this.getMenu().close();
        }
        /**
         * Subclasses can override this method to control whether the save menu
         * should be shown.
         */
        shouldShowSaveMenuOnSaveClick(hasEdits) {
            return hasEdits;
        }
        dispatchSaveEvent_(type) {
            this.fire(this.getSaveEventType(), type);
        }
        hasEditsToSave_() {
            // 
            return this.hasEdits || this.hasInk2Edits;
            // 
            // 
        }
        showSaveMenu_() {
            this.getMenu().showAt(this.getSaveButton(), {
                anchorAlignmentX: AnchorAlignment.CENTER,
            });
            // For tests
            this.fire('save-menu-shown-for-testing');
        }
        /**
         * @return The value for the aria-haspopup attribute for the button.
         */
        getAriaHasPopup() {
            return this.hasEditsToSave_() ? 'menu' : 'false';
        }
    }
    return ViewerSaveControlsMixin;
};

let instance$s = null;
function getCss$r() {
    return instance$s || (instance$s = [...[], css `:host{display:contents}cr-action-menu::part(dialog){position:fixed;top:48px}:host([menu-open_]) #save{background-color:var(--active-button-bg);border-radius:50%}`]);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ViewerDownloadControlsBase = ViewerSaveControlsMixin(CrLitElement);
class ViewerDownloadControlsElement extends ViewerDownloadControlsBase {
    static get is() {
        return 'viewer-download-controls';
    }
    static get styles() {
        return [
            getCss$J(),
            getCss$r(),
        ];
    }
    render() {
        return getHtml$l.bind(this)();
    }
    getSaveButton() {
        return this.$.save;
    }
    getSaveEventType() {
        return 'save';
    }
    getMenu() {
        return this.$.menu;
    }
}
customElements.define(ViewerDownloadControlsElement.is, ViewerDownloadControlsElement);

let instance$r = null;
function getCss$q() {
    return instance$r || (instance$r = [...[], css `#content{align-items:center;color:#fff;direction:ltr;display:flex;font-size:0.81rem;text-align:center;--page-selector-spacing:4px}#pageSelector::selection{background-color:var(--viewer-text-input-selection-color)}input,#pagelength{width:calc(max(2,var(--page-length-digits)) * 1ch + 1px)}input{background:rgba(0,0,0,0.5);border:none;color:white;font-family:inherit;line-height:inherit;outline:none;padding:0 var(--page-selector-spacing);text-align:center}#divider{margin:0 var(--page-selector-spacing)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$k() {
    return html `<!--_html_template_start_-->
<div id="content">
  <input part="input" type="text" id="pageSelector"
      .value="${this.pageNo.toString()}" @pointerup="${this.onPointerup_}"
      @input="${this.onInput_}" @change="${this.onChange_}"
      aria-label="$i18n{labelPageNumber}">
  <span id="divider">/</span>
  <span id="pagelength">${this.docLength}</span>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerPageSelectorElement extends CrLitElement {
    static get is() {
        return 'viewer-page-selector';
    }
    static get styles() {
        return getCss$q();
    }
    render() {
        return getHtml$k.bind(this)();
    }
    static get properties() {
        return {
            /** The number of pages the document contains. */
            docLength: { type: Number },
            /**
             * The current page being viewed (1-based). A change to pageNo is mirrored
             * immediately to the input field. A change to the input field is not
             * mirrored back until onChange_() is called and change-page is fired.
             */
            pageNo: { type: Number },
        };
    }
    #docLength_accessor_storage = 1;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #pageNo_accessor_storage = 1;
    get pageNo() { return this.#pageNo_accessor_storage; }
    set pageNo(value) { this.#pageNo_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('docLength')) {
            const numDigits = this.docLength.toString().length;
            this.style.setProperty('--page-length-digits', `${numDigits}`);
        }
    }
    onChange_() {
        const page = parseInt(this.$.pageSelector.value, 10);
        if (!isNaN(page) && page <= this.docLength && page > 0) {
            this.dispatchEvent(new CustomEvent('change-page', {
                detail: { page: page - 1, origin: ChangePageOrigin.PAGE_SELECTOR },
                composed: true,
            }));
        }
        else {
            this.$.pageSelector.value = this.pageNo.toString();
        }
        this.$.pageSelector.blur();
    }
    onPointerup_() {
        this.select();
    }
    select() {
        this.$.pageSelector.select();
    }
    /** @return True if the selector input field is currently focused. */
    isActive() {
        return this.shadowRoot.activeElement === this.$.pageSelector;
    }
    /** Immediately remove any non-digit characters. */
    onInput_() {
        this.$.pageSelector.value = this.$.pageSelector.value.replace(/[^\d]/, '');
    }
}
customElements.define(ViewerPageSelectorElement.is, ViewerPageSelectorElement);

let instance$q = null;
function getCss$p() {
    return instance$q || (instance$q = [...[getCss$O(), getCss$P()], css `[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}.cr-separators>*:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--cr-scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--cr-scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus-visible,[selectable]:focus-visible,[selectable]>:focus-visible{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.first,.cr-row.continuation{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip),cr-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}`]);
}

let instance$p = null;
function getCss$o() {
    return instance$p || (instance$p = [...[], css `:host{--cr-input-background-color:var(--color-textfield-filled-background,var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--color-textfield-filled-error,var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,var(--cr-fallback-on-surface-subtle));display:block;isolation:isolate;outline:none}:host([readonly]){--cr-input-border-radius:8px 8px}#label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}#inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,var(--cr-fallback-color-on-surface-subtle))}#inner-input-content ::slotted([slot='inline-prefix']){--cr-icon-button-margin-start:-8px}#inner-input-content ::slotted([slot='inline-suffix']){--cr-icon-button-margin-end:-4px}:host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{background-color:var(--cr-input-hover-background-color);display:none;inset:0;pointer-events:none;position:absolute;z-index:0}:host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:var(--cr-input-font-size,12px);font-weight:inherit;line-height:16px;min-height:var(--cr-input-min-height,auto);outline:none;padding:0;text-align:inherit;text-overflow:ellipsis;width:100%}#inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([invalid]) #underline,:host([force-underline]) #underline,:host([focused_]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host([readonly]) #underline{display:none}:host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,var(--cr-fallback-color-disabled-background))}:host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}`]);
}

let instance$o = null;
function getCss$n() {
    return instance$o || (instance$o = [...[getCss$O(), getCss$o(), getCss$p()], css `:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing) !important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:none;letter-spacing:var(--cr-input-letter-spacing)}#input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,0.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:11px;min-height:var(--cr-form-field-label-height);line-height:16px;margin:4px 10px;visibility:hidden;white-space:var(--cr-input-error-white-space);height:auto;overflow:hidden;text-overflow:ellipsis}:host([invalid]) #error{visibility:visible}#row-container,#inner-input-content{align-items:center;display:flex;justify-content:space-between;position:relative}#inner-input-content{gap:4px;height:16px;z-index:1}#input[type='search']::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$j() {
    return html `
<div id="label" class="cr-form-field-label" ?hidden="${!this.label}"
    aria-hidden="${this.getLabelAriaHidden_() || nothing}">
  ${this.label}
</div>
<div id="row-container" part="row-container">
  <div id="input-container">
    <div id="inner-input-container">
      <div id="hover-layer"></div>
      <div id="inner-input-content">
        <slot name="inline-prefix"></slot>
        <input id="input" ?disabled="${this.disabled}"
            ?autofocus="${this.autofocus}" .value="${this.internalValue_}"
            tabindex="${this.inputTabindex}" .type="${this.type}"
            ?readonly="${this.readonly}" maxlength="${this.maxlength}"
            pattern="${this.pattern || nothing}" ?required="${this.required}"
            minlength="${this.minlength}" inputmode="${this.inputmode}"
            aria-description="${this.ariaDescription || nothing}"
            aria-errormessage="${this.getAriaErrorMessage_() || nothing}"
            aria-labelledby="${this.getAriaLabelledBy_() || nothing}"
            aria-label="${this.getAriaLabel_()}"
            aria-invalid="${this.getAriaInvalid_()}"
            .max="${this.max || nothing}" .min="${this.min || nothing}"
            @focus="${this.onInputFocus_}" @blur="${this.onInputBlur_}"
            @change="${this.onInputChange_}" @input="${this.onInput_}"
            part="input" autocomplete="off">
        <slot name="inline-suffix"></slot>
      </div>
    </div>
    <div id="underline-base"></div>
    <div id="underline"></div>
  </div>
  <slot name="suffix"></slot>
</div>
<div id="error" role="${this.getErrorRole_() || nothing}"
    aria-live="assertive"><!--
  -->${this.getErrorMessage_()}<!--
--></div>`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
class CrInputElement extends CrLitElement {
    static get is() {
        return 'cr-input';
    }
    static get styles() {
        return getCss$n();
    }
    render() {
        return getHtml$j.bind(this)();
    }
    static get properties() {
        return {
            ariaDescription: { type: String },
            ariaLabel: { type: String },
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            autoValidate: { type: Boolean },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            errorMessage: { type: String },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                reflect: true,
            },
            invalid: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            max: {
                type: Number,
                reflect: true,
            },
            min: {
                type: Number,
                reflect: true,
            },
            maxlength: {
                type: Number,
                reflect: true,
            },
            minlength: {
                type: Number,
                reflect: true,
            },
            pattern: {
                type: String,
                reflect: true,
            },
            inputmode: { type: String },
            label: { type: String },
            placeholder: { type: String },
            readonly: {
                type: Boolean,
                reflect: true,
            },
            required: {
                type: Boolean,
                reflect: true,
            },
            inputTabindex: { type: Number },
            type: { type: String },
            value: {
                type: String,
                notify: true,
            },
            internalValue_: {
                type: String,
                state: true,
            },
        };
    }
    #ariaDescription_accessor_storage = null;
    get ariaDescription() { return this.#ariaDescription_accessor_storage; }
    set ariaDescription(value) { this.#ariaDescription_accessor_storage = value; }
    #ariaLabel_accessor_storage = '';
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #autoValidate_accessor_storage = false;
    get autoValidate() { return this.#autoValidate_accessor_storage; }
    set autoValidate(value) { this.#autoValidate_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #errorMessage_accessor_storage = '';
    get errorMessage() { return this.#errorMessage_accessor_storage; }
    set errorMessage(value) { this.#errorMessage_accessor_storage = value; }
    #inputmode_accessor_storage;
    get inputmode() { return this.#inputmode_accessor_storage; }
    set inputmode(value) { this.#inputmode_accessor_storage = value; }
    #inputTabindex_accessor_storage = 0;
    get inputTabindex() { return this.#inputTabindex_accessor_storage; }
    set inputTabindex(value) { this.#inputTabindex_accessor_storage = value; }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #max_accessor_storage;
    get max() { return this.#max_accessor_storage; }
    set max(value) { this.#max_accessor_storage = value; }
    #min_accessor_storage;
    get min() { return this.#min_accessor_storage; }
    set min(value) { this.#min_accessor_storage = value; }
    #maxlength_accessor_storage;
    get maxlength() { return this.#maxlength_accessor_storage; }
    set maxlength(value) { this.#maxlength_accessor_storage = value; }
    #minlength_accessor_storage;
    get minlength() { return this.#minlength_accessor_storage; }
    set minlength(value) { this.#minlength_accessor_storage = value; }
    #pattern_accessor_storage;
    get pattern() { return this.#pattern_accessor_storage; }
    set pattern(value) { this.#pattern_accessor_storage = value; }
    #placeholder_accessor_storage = null;
    get placeholder() { return this.#placeholder_accessor_storage; }
    set placeholder(value) { this.#placeholder_accessor_storage = value; }
    #readonly_accessor_storage = false;
    get readonly() { return this.#readonly_accessor_storage; }
    set readonly(value) { this.#readonly_accessor_storage = value; }
    #required_accessor_storage = false;
    get required() { return this.#required_accessor_storage; }
    set required(value) { this.#required_accessor_storage = value; }
    #type_accessor_storage = 'text';
    get type() { return this.#type_accessor_storage; }
    set type(value) { this.#type_accessor_storage = value; }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #internalValue__accessor_storage = '';
    get internalValue_() { return this.#internalValue__accessor_storage; }
    set internalValue_(value) { this.#internalValue__accessor_storage = value; }
    #focused__accessor_storage = false;
    get focused_() { return this.#focused__accessor_storage; }
    set focused_(value) { this.#focused__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('value')) {
            // Don't allow null or undefined as these will render in the input.
            // cr-input cannot use Lit's "nothing" in the HTML template; this breaks
            // the underlying native input's auto validation if |required| is set.
            this.internalValue_ =
                (this.value === undefined || this.value === null) ? '' : this.value;
        }
        if (changedProperties.has('inputTabindex')) {
            // CrInput only supports 0 or -1 values for the input's tabindex to allow
            // having the input in tab order or not. Values greater than 0 will not
            // work as the shadow root encapsulates tabindices.
            assert(this.inputTabindex === 0 || this.inputTabindex === -1);
        }
        if (changedProperties.has('type')) {
            // Check that the 'type' is one of the supported types.
            assert(SUPPORTED_INPUT_TYPES.has(this.type));
        }
    }
    firstUpdated() {
        // Use inputTabindex instead.
        assert(!this.hasAttribute('tabindex'));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('value')) {
            const previous = changedProperties.get('value');
            if ((!!this.value || !!previous) && this.autoValidate) {
                this.invalid = !this.inputElement.checkValidity();
            }
        }
        if (changedProperties.has('placeholder')) {
            if (this.placeholder === null || this.placeholder === undefined) {
                this.inputElement.removeAttribute('placeholder');
            }
            else {
                this.inputElement.setAttribute('placeholder', this.placeholder);
            }
        }
    }
    get inputElement() {
        return this.$.input;
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/40593040): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    async onInputChange_(e) {
        // Ensure that |value| has been updated before re-firing 'change'.
        await this.updateComplete;
        this.fire('change', { sourceEvent: e });
    }
    onInput_(e) {
        this.internalValue_ = e.target.value;
        this.value = this.internalValue_;
    }
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    getAriaLabel_() {
        return this.ariaLabel || this.label || this.placeholder;
    }
    // Returns the id of the visible label element when aria-labelledby
    // should reference it, or null otherwise. Some accessibility frameworks
    // (notably ATK/AT-SPI used by Orca on Linux) do not reliably surface
    // the input's accessible name from aria-label alone in this layout.
    // Skipped when the host sets its own aria-label, so that takes
    // precedence as before.
    getAriaLabelledBy_() {
        if (this.label && !this.ariaLabel) {
            return 'label';
        }
        return null;
    }
    // The visible label is exposed to a11y only when referenced via
    // aria-labelledby; otherwise it stays aria-hidden to avoid duplicating
    // the inner input's aria-label.
    getLabelAriaHidden_() {
        return this.getAriaLabelledBy_() ? null : 'true';
    }
    getAriaInvalid_() {
        return this.invalid ? 'true' : 'false';
    }
    getErrorMessage_() {
        return this.invalid ? this.errorMessage : '';
    }
    getErrorRole_() {
        // On VoiceOver role="alert" is not consistently announced when its
        // content changes. Adding and removing the |role| attribute every time
        // there is an error, triggers VoiceOver to consistently announce.
        return this.invalid ? 'alert' : '';
    }
    getAriaErrorMessage_() {
        return this.invalid ? 'error' : '';
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    // Note: In order to preserve it as a synchronous API, validate() forces 2
    // rendering updates to cr-input. This allows this function to be used to
    // synchronously determine the validity of a <cr-input>, however, as a result
    // of these 2 forced updates it may result in slower performance. validate()
    // should not be called internally from within cr_input.ts, and should only
    // be called where necessary from clients.
    validate() {
        // Ensure that any changes to |value| have propagated to the native <input>.
        this.performUpdate();
        this.invalid = !this.inputElement.checkValidity();
        // Perform update again to ensure change propagates via 2 way binding to
        // Polymer parent before returning.
        this.performUpdate();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);

let instance$n = null;
function getCss$m() {
    return instance$n || (instance$n = [...[getCss$p()], css `#password{margin-top:var(--cr-form-field-bottom-spacing)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$i() {
    // clang-format off
    return html `<!--_html_template_start_-->
<cr-dialog id="dialog" no-cancel show-on-attach>
  <div slot="title">$i18n{passwordDialogTitle}</div>
  <div slot="body">
    <div id="message">$i18n{passwordPrompt}</div>
    <cr-input id="password" type="password"
        error-message="$i18n{passwordInvalid}" .invalid="${this.invalid}"
        autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button id="submit" class="action-button"
        @click="${this.onSubmitClick_}">
      $i18n{passwordSubmit}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerPasswordDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-password-dialog';
    }
    static get styles() {
        return getCss$m();
    }
    render() {
        return getHtml$i.bind(this)();
    }
    static get properties() {
        return {
            invalid: { type: Boolean },
        };
    }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    close() {
        this.$.dialog.close();
    }
    deny() {
        const password = this.$.password;
        password.disabled = false;
        this.$.submit.disabled = false;
        this.invalid = true;
        password.select();
        this.dispatchEvent(new CustomEvent('password-denied-for-testing'));
    }
    onSubmitClick_() {
        const password = this.$.password;
        if (password.value.length === 0) {
            return;
        }
        password.disabled = true;
        this.$.submit.disabled = true;
        this.dispatchEvent(new CustomEvent('password-submitted', {
            detail: { password: password.value },
        }));
    }
}
customElements.define(ViewerPasswordDialogElement.is, ViewerPasswordDialogElement);

let instance$m = null;
function getCss$l() {
    return instance$m || (instance$m = [...[getCss$J()], css `:host{--focus-border-color:var(--google-blue-300);display:block}:host(:focus){outline:none}#thumbnail{align-items:center;background-color:white;cursor:pointer;display:inline-flex;height:140px;justify-content:center;margin-bottom:12px;margin-inline-end:auto;margin-inline-start:auto;width:108px}:host([is-active]) #thumbnail{box-shadow:0 0 0 6px var(--focus-border-color)}:host(:focus-visible) #thumbnail{box-shadow:0 0 0 2px var(--focus-border-color)}:host([is-active]:focus-visible) #thumbnail{box-shadow:0 0 0 8px var(--focus-border-color)}canvas{display:block;opacity:0.5}:host([is-active]) canvas{opacity:1}:host([is-active]) canvas:hover,canvas:hover{opacity:0.7}#pageNumber{line-height:1}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$h() {
    return html `
<div id="thumbnail" @click="${this.onClick_}" role="button"></div>
<div id="pageNumber">${this.pageNumber}</div>`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// The maximum widths of thumbnails for each layout (px).
// These constants should be kept in sync with `kMaxWidthPortraitPx` and
// `kMaxWidthLandscapePx` in pdf/thumbnail.cc.
const PORTRAIT_WIDTH = 108;
const LANDSCAPE_WIDTH = 140;
const PAINTED_ATTRIBUTE = 'painted';
class ViewerThumbnailElement extends CrLitElement {
    static get is() {
        return 'viewer-thumbnail';
    }
    static get styles() {
        return getCss$l();
    }
    render() {
        return getHtml$h.bind(this)();
    }
    static get properties() {
        return {
            clockwiseRotations: { type: Number },
            isActive: {
                type: Boolean,
                reflect: true,
            },
            pageNumber: { type: Number },
        };
    }
    #clockwiseRotations_accessor_storage = 0;
    get clockwiseRotations() { return this.#clockwiseRotations_accessor_storage; }
    set clockwiseRotations(value) { this.#clockwiseRotations_accessor_storage = value; }
    #isActive_accessor_storage = true;
    get isActive() { return this.#isActive_accessor_storage; }
    set isActive(value) { this.#isActive_accessor_storage = value; }
    #pageNumber_accessor_storage = 0;
    get pageNumber() { return this.#pageNumber_accessor_storage; }
    set pageNumber(value) { this.#pageNumber_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('clockwiseRotations')) {
            this.styleCanvas_();
        }
        if (changedProperties.has('isActive') && this.isActive) {
            const scrollIntoViewOptions = {
                block: 'nearest',
            };
            if (document.documentElement.hasAttribute('pdfOopifEnabled')) {
                scrollIntoViewOptions.container = 'nearest';
            }
            this.scrollIntoView(scrollIntoViewOptions);
        }
    }
    set image(imageData) {
        let canvas = this.getCanvas_();
        if (!canvas) {
            canvas = document.createElement('canvas');
            // Prevent copying or saving of the thumbnail image in case the document
            // has restricted access rights.
            canvas.oncontextmenu = e => e.preventDefault();
            this.$.thumbnail.appendChild(canvas);
        }
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        this.styleCanvas_();
        const ctx = canvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    }
    clearImage() {
        if (!this.isPainted()) {
            return;
        }
        // `canvas` can be `null` in tests because `image` is set only in response
        // to the plugin.
        const canvas = this.getCanvas_();
        if (canvas) {
            canvas.remove();
        }
        this.removeAttribute(PAINTED_ATTRIBUTE);
    }
    getClickTarget() {
        return this.$.thumbnail;
    }
    getCanvas_() {
        return this.shadowRoot.querySelector('canvas');
    }
    /**
     * Calculates the CSS size of the thumbnail depending on the rotation, the
     * dimensions of the image data, and the screen resolution. The plugin
     * scales the thumbnail image data by the device to pixel ratio, so that
     * scaling must be taken into account on the UI.
     */
    getThumbnailCssSize_(rotated) {
        const canvas = this.getCanvas_();
        const isPortrait = (canvas.width !== canvas.height) &&
            (canvas.width < canvas.height !== rotated);
        const orientedWidth = rotated ? canvas.height : canvas.width;
        const orientedHeight = rotated ? canvas.width : canvas.height;
        // Try scaling down such that the width of thumbnail is `PORTRAIT_WIDTH` or
        // `LANDSCAPE_WIDTH`, but never scale up to retain the resolution of the
        // thumbnail.
        const cssWidth = Math.min(isPortrait ? PORTRAIT_WIDTH : LANDSCAPE_WIDTH, Math.trunc(orientedWidth / window.devicePixelRatio));
        const scale = cssWidth / orientedWidth;
        const cssHeight = Math.trunc(orientedHeight * scale);
        return { width: cssWidth, height: cssHeight };
    }
    /**
     * Focuses and scrolls the element into view.
     * The default scroll behavior of focus() acts differently than
     * scrollIntoView(), which is called in updated(). This method
     * unifies the behavior.
     */
    focusAndScroll() {
        this.scrollIntoView({ block: 'nearest' });
        this.focus({ preventScroll: true });
    }
    isPainted() {
        return this.hasAttribute(PAINTED_ATTRIBUTE);
    }
    setPainted() {
        this.toggleAttribute(PAINTED_ATTRIBUTE, true);
    }
    onClick_() {
        this.fire('change-page', { page: this.pageNumber - 1, origin: ChangePageOrigin.THUMBNAIL });
    }
    /**
     * Sets the canvas CSS size to maintain the resolution of the thumbnail at any
     * rotation.
     */
    styleCanvas_() {
        assert(this.clockwiseRotations >= 0 && this.clockwiseRotations < 4);
        const canvas = this.getCanvas_();
        if (!canvas) {
            return;
        }
        const div = this.$.thumbnail;
        const degreesRotated = this.clockwiseRotations * 90;
        canvas.style.transform = `rotate(${degreesRotated}deg)`;
        // For the purposes of determining the dimensions, a rotation of 180deg is
        // not rotated.
        const rotated = this.clockwiseRotations % 2 !== 0;
        const cssSize = this.getThumbnailCssSize_(rotated);
        div.style.width = `${cssSize.width}px`;
        div.style.height = `${cssSize.height}px`;
        // When rotated, the canvas's height becomes the parent div's width and vice
        // versa.
        canvas.style.width = `${rotated ? cssSize.height : cssSize.width}px`;
        canvas.style.height = `${rotated ? cssSize.width : cssSize.height}px`;
    }
}
customElements.define(ViewerThumbnailElement.is, ViewerThumbnailElement);

let instance$l = null;
function getCss$k() {
    return instance$l || (instance$l = [...[], css `::-webkit-scrollbar{--scrollbar-size:14px;height:var(--scrollbar-size);width:var(--scrollbar-size)}::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:var(--google-grey-500);border:4px solid transparent;border-radius:8px}::-webkit-scrollbar-thumb:hover{background-color:var(--google-grey-300)}::-webkit-scrollbar-track,::-webkit-scrollbar-corner{background:transparent}`]);
}

let instance$k = null;
function getCss$j() {
    return instance$k || (instance$k = [...[getCss$k()], css `:host{display:block;height:100%}:host(:focus){outline:none}#thumbnails{box-sizing:border-box;height:100%;overflow:auto;padding-bottom:24px;padding-inline-end:var(--viewer-thumbnail-bar-padding-inline-end);text-align:center}viewer-thumbnail{padding-top:24px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$g() {
    return html `
<div id="thumbnails" ?hidden="${!this.isPluginActive_}" role="tablist">
  ${this.computePageNumbers_().map(item => html `
    <viewer-thumbnail tabindex="0" role="tab"
        aria-label="${this.getAriaLabel_(item)}"
        aria-selected="${this.isActivePage_(item)}"
        .clockwiseRotations="${this.clockwiseRotations}"
        .isActive="${this.isActivePage_(item)}" .pageNumber="${item}">
    </viewer-thumbnail>
  `)}
</div>`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
const DEBOUNCE_DELAY_MS = 100;
class ViewerThumbnailBarElement extends CrLitElement {
    static get is() {
        return 'viewer-thumbnail-bar';
    }
    static get styles() {
        return getCss$j();
    }
    render() {
        return getHtml$g.bind(this)();
    }
    static get properties() {
        return {
            activePage: { type: Number },
            clockwiseRotations: { type: Number },
            docLength: { type: Number },
            sidenavCollapsed: { type: Boolean },
            isPluginActive_: { type: Boolean },
        };
    }
    #activePage_accessor_storage = 0;
    get activePage() { return this.#activePage_accessor_storage; }
    set activePage(value) { this.#activePage_accessor_storage = value; }
    #clockwiseRotations_accessor_storage = 0;
    get clockwiseRotations() { return this.#clockwiseRotations_accessor_storage; }
    set clockwiseRotations(value) { this.#clockwiseRotations_accessor_storage = value; }
    #docLength_accessor_storage = 0;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #sidenavCollapsed_accessor_storage = false;
    get sidenavCollapsed() { return this.#sidenavCollapsed_accessor_storage; }
    set sidenavCollapsed(value) { this.#sidenavCollapsed_accessor_storage = value; }
    #isPluginActive__accessor_storage = false;
    get isPluginActive_() { return this.#isPluginActive__accessor_storage; }
    set isPluginActive_(value) { this.#isPluginActive__accessor_storage = value; }
    intersectionObserver_ = null;
    // A map of zero-based page indices to their corresponding thumbnail
    // elements waiting to be requested from the plugin.
    pendingThumbnails_ = new Map();
    pluginController_ = PluginController.getInstance();
    processPendingThumbnailsDebounced_ = debounceEnd(() => this.processPendingThumbnails_(), DEBOUNCE_DELAY_MS);
    tracker_ = new EventTracker();
    constructor() {
        super();
        this.isPluginActive_ = this.pluginController_.isActive;
        // Listen to whether the plugin is active. Thumbnails should be hidden
        // when the plugin is inactive.
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.IS_ACTIVE_CHANGED, (e) => {
            this.isPluginActive_ = e.detail;
            if (!this.isPluginActive_) {
                this.pendingThumbnails_.clear();
            }
        });
        // 
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.UPDATE_THUMBNAIL, this.handleUpdateThumbnail_.bind(this));
        // 
    }
    firstUpdated() {
        this.addEventListener('focus', this.onFocus_);
        this.addEventListener('keydown', this.onKeydown_);
        const thumbnailsDiv = this.$.thumbnails;
        this.intersectionObserver_ =
            new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const thumbnail = entry.target;
                    const pageIndex = thumbnail.pageNumber - 1;
                    if (!entry.isIntersecting) {
                        this.pendingThumbnails_.delete(pageIndex);
                        thumbnail.clearImage();
                        return;
                    }
                    if (thumbnail.isPainted()) {
                        return;
                    }
                    thumbnail.setPainted();
                    if (!this.isPluginActive_ || this.sidenavCollapsed) {
                        return;
                    }
                    this.pendingThumbnails_.set(pageIndex, thumbnail);
                    this.processPendingThumbnailsDebounced_();
                });
            }, {
                root: thumbnailsDiv,
                // The root margin is set to 100% on the bottom to prepare thumbnails
                // that are one standard scroll finger swipe away. The root margin is
                // set to 500% on the top to discard thumbnails that are far from
                // view, but to avoid regenerating thumbnails that are close.
                rootMargin: '500% 0% 100%',
            });
        FocusOutlineManager.forDocument(document);
    }
    clearPendingThumbnails_() {
        for (const thumbnail of this.pendingThumbnails_.values()) {
            thumbnail.clearImage();
        }
        this.pendingThumbnails_.clear();
    }
    observeThumbnails_() {
        assert(this.intersectionObserver_);
        this.shadowRoot.querySelectorAll('viewer-thumbnail')
            .forEach(thumbnail => this.intersectionObserver_.observe(thumbnail));
    }
    processPendingThumbnails_() {
        if (!this.isPluginActive_ || this.sidenavCollapsed) {
            this.clearPendingThumbnails_();
            return;
        }
        // Skip thumbnails that were cleared (e.g., scrolled out or plugin
        // deactivated) before the debounce timer fired.
        const queue = Array.from(this.pendingThumbnails_.entries())
            .filter(([_, thumbnail]) => thumbnail.isPainted());
        this.pendingThumbnails_.clear();
        for (const [pageIndex, thumbnail] of queue) {
            this.pluginController_.requestThumbnail(pageIndex).then(response => {
                // The thumbnail may have been scrolled out of view and cleared while
                // the asynchronous request was in flight.
                if (thumbnail.isPainted()) {
                    const array = new Uint8ClampedArray(response.imageData);
                    const imageData = new ImageData(array, response.width);
                    thumbnail.image = imageData;
                }
            });
        }
        this.dispatchEvent(new CustomEvent('thumbnails-processed-for-testing'));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('activePage')) {
            if (this.shadowRoot.activeElement) {
                // Changes the focus to the thumbnail of the new active page if the
                // focus was already on a thumbnail.
                this.getThumbnailForPage(this.activePage).focusAndScroll();
            }
        }
        if (changedProperties.has('sidenavCollapsed') && this.sidenavCollapsed) {
            assert(this.intersectionObserver_);
            this.intersectionObserver_.disconnect();
            this.clearPendingThumbnails_();
        }
        else if (!this.sidenavCollapsed &&
            (changedProperties.has('docLength') ||
                changedProperties.has('sidenavCollapsed'))) {
            this.observeThumbnails_();
        }
    }
    clickThumbnailForPage(pageNumber) {
        const thumbnail = this.getThumbnailForPage(pageNumber);
        if (!thumbnail) {
            return;
        }
        thumbnail.getClickTarget().click();
    }
    getThumbnailForPage(pageNumber) {
        return this.shadowRoot.querySelector(`viewer-thumbnail:nth-child(${pageNumber})`);
    }
    /** @return The array of page numbers. */
    computePageNumbers_() {
        return Array.from({ length: this.docLength }, (_, i) => i + 1);
    }
    getAriaLabel_(pageNumber) {
        return loadTimeData.getStringF('thumbnailPageAriaLabel', pageNumber);
    }
    /** @return Whether the page is the current page. */
    isActivePage_(page) {
        return this.activePage === page;
    }
    /** Forwards focus to a thumbnail when tabbing. */
    onFocus_() {
        // Ignore focus triggered by mouse to allow the focus to go straight to the
        // thumbnail being clicked.
        const focusOutlineManager = FocusOutlineManager.forDocument(document);
        if (!focusOutlineManager.visible) {
            return;
        }
        // Change focus to the thumbnail of the active page.
        const activeThumbnail = this.shadowRoot.querySelector('viewer-thumbnail[is-active]');
        if (activeThumbnail) {
            activeThumbnail.focus();
            return;
        }
        // Otherwise change to the first thumbnail, if there is one.
        const firstThumbnail = this.shadowRoot.querySelector('viewer-thumbnail');
        if (!firstThumbnail) {
            return;
        }
        firstThumbnail.focus();
    }
    onKeydown_(e) {
        switch (e.key) {
            case 'Tab':
                // On shift+tab, first redirect focus from the thumbnails to:
                // 1) Avoid focusing on the thumbnail bar.
                // 2) Focus to the element before the thumbnail bar from any thumbnail.
                if (e.shiftKey) {
                    this.focus();
                    return;
                }
                // On tab, first redirect focus to the last thumbnail to focus to the
                // element after the thumbnail bar from any thumbnail.
                const lastThumbnail = this.shadowRoot.querySelector('viewer-thumbnail:last-of-type');
                assert(lastThumbnail);
                lastThumbnail.focus({ preventScroll: true });
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                // Prevent default arrow scroll behavior.
                e.preventDefault();
                this.clickThumbnailForPage(this.activePage + 1);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                // Prevent default arrow scroll behavior.
                e.preventDefault();
                this.clickThumbnailForPage(this.activePage - 1);
                break;
        }
    }
    // 
    handleUpdateThumbnail_(e) {
        const data = e.detail;
        const thumbnail = this.getThumbnailForPage(data.pageNumber);
        if (thumbnail && thumbnail.isPainted()) {
            const array = new Uint8ClampedArray(data.imageData);
            thumbnail.image = new ImageData(array, data.width);
        }
    }
}
customElements.define(ViewerThumbnailBarElement.is, ViewerThumbnailBarElement);

let instance$j = null;
function getCss$i() {
    return instance$j || (instance$j = [...[getCss$J(), getCss$O(), getCss$p(), getCss$k()], css `:host{--sidenav-selected-tab-color:var(--google-blue-300);background-color:var(--viewer-side-background-color);display:flex;height:100%;min-width:var(--viewer-pdf-sidenav-width);overflow:hidden;width:var(--viewer-pdf-sidenav-width)}#icons{display:flex;flex-direction:column;min-width:64px}#content{color:white;flex:1;overflow-x:hidden}#icons:not([hidden])+#content{--viewer-thumbnail-bar-padding-inline-end:28px}.selected cr-icon-button{--cr-icon-button-fill-color:var(--sidenav-selected-tab-color)}.button-wrapper{--button-wrapper-height:36px;--button-wrapper-margin:12px;--button-wrapper-total-height:calc(var(--button-wrapper-height) + var(--button-wrapper-margin));align-items:center;display:flex;height:var(--button-wrapper-height);margin:var(--button-wrapper-margin) 0;width:100%}.cr-vertical-tab{--cr-vertical-tab-selected-color:var(--sidenav-selected-tab-color)}.cr-vertical-tab::before{transform:translateY(var(--button-wrapper-total-height));transition:transform 250ms cubic-bezier(.4,0,.2,1)}.cr-vertical-tab.selected+.cr-vertical-tab::before{transform:translateY(calc(-1 * var(--button-wrapper-total-height)))}.cr-vertical-tab.selected::before{transform:translateY(0)}cr-icon-button{margin:0 auto}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$f() {
    return html `
<div id="icons" ?hidden="${this.hideIcons_()}" role="tablist"
    @keydown="${this.onKeydown_}">
  ${this.tabs_.map(item => html `
    <div
        class="button-wrapper cr-vertical-tab
        ${this.getTabSelectedClass_(item.id)}">
      <cr-icon-button .ironIcon="${item.icon}" role="tab" title="${item.title}"
          data-tab-id="${item.id}"
          aria-selected="${this.getTabAriaSelected_(item.id)}"
          tabindex="${this.getTabIndex_(item.id)}" @click="${this.onTabClick_}">
      </cr-icon-button>
    </div>
  `)}
</div>
<div id="content">
  <viewer-thumbnail-bar id="thumbnailBar" tabindex="0"
      ?hidden="${this.hideThumbnailView_()}" .activePage="${this.activePage}"
      .clockwiseRotations="${this.clockwiseRotations}"
      .docLength="${this.docLength}"
      .sidenavCollapsed="${this.sidenavCollapsed}">
  </viewer-thumbnail-bar>
  <viewer-document-outline id="outline" ?hidden="${this.hideOutlineView_()}"
      .bookmarks="${this.bookmarks}">
  </viewer-document-outline>
  <viewer-attachment-bar id="attachmentBar"
      ?hidden="${this.hideAttachmentView_()}"
      .attachments="${this.attachments}">
  </viewer-attachment-bar>
</div>`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TabId;
(function (TabId) {
    TabId[TabId["THUMBNAIL"] = 0] = "THUMBNAIL";
    TabId[TabId["OUTLINE"] = 1] = "OUTLINE";
    TabId[TabId["ATTACHMENT"] = 2] = "ATTACHMENT";
})(TabId || (TabId = {}));
class ViewerPdfSidenavElement extends CrLitElement {
    static get is() {
        return 'viewer-pdf-sidenav';
    }
    static get styles() {
        return getCss$i();
    }
    render() {
        return getHtml$f.bind(this)();
    }
    static get properties() {
        return {
            activePage: { type: Number },
            attachments: { type: Array },
            bookmarks: { type: Array },
            clockwiseRotations: { type: Number },
            docLength: { type: Number },
            sidenavCollapsed: { type: Boolean },
            strings: { type: Object },
            selectedTab_: { type: Number },
            tabs_: { type: Array },
        };
    }
    #activePage_accessor_storage = 0;
    get activePage() { return this.#activePage_accessor_storage; }
    set activePage(value) { this.#activePage_accessor_storage = value; }
    #attachments_accessor_storage = [];
    get attachments() { return this.#attachments_accessor_storage; }
    set attachments(value) { this.#attachments_accessor_storage = value; }
    #bookmarks_accessor_storage = [];
    get bookmarks() { return this.#bookmarks_accessor_storage; }
    set bookmarks(value) { this.#bookmarks_accessor_storage = value; }
    #clockwiseRotations_accessor_storage = 0;
    get clockwiseRotations() { return this.#clockwiseRotations_accessor_storage; }
    set clockwiseRotations(value) { this.#clockwiseRotations_accessor_storage = value; }
    #docLength_accessor_storage = 0;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #sidenavCollapsed_accessor_storage = false;
    get sidenavCollapsed() { return this.#sidenavCollapsed_accessor_storage; }
    set sidenavCollapsed(value) { this.#sidenavCollapsed_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    #selectedTab__accessor_storage = 0;
    get selectedTab_() { return this.#selectedTab__accessor_storage; }
    set selectedTab_(value) { this.#selectedTab__accessor_storage = value; }
    #tabs__accessor_storage = [];
    get tabs_() { return this.#tabs__accessor_storage; }
    set tabs_(value) { this.#tabs__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('bookmarks') ||
            changedProperties.has('attachments')) {
            this.tabs_ = this.computeTabs_();
        }
    }
    computeTabs_() {
        const tabs = [
            {
                id: TabId.THUMBNAIL,
                icon: 'pdf:image',
                title: this.strings ? loadTimeData.getString('tooltipThumbnails') : '',
            },
        ];
        if (this.bookmarks.length > 0) {
            tabs.push({
                id: TabId.OUTLINE,
                icon: 'pdf:list-alt',
                title: this.strings ? loadTimeData.getString('tooltipDocumentOutline') :
                    '',
            });
        }
        if (this.attachments.length > 0) {
            tabs.push({
                id: TabId.ATTACHMENT,
                icon: 'pdf:attach-file',
                title: this.strings ? loadTimeData.getString('tooltipAttachments') : '',
            });
        }
        return tabs;
    }
    hideIcons_() {
        return this.tabs_.length === 1;
    }
    getTabAriaSelected_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? 'true' : 'false';
    }
    getTabIndex_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? '0' : '-1';
    }
    getTabSelectedClass_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? 'selected' : '';
    }
    onTabClick_(e) {
        const tabId = e.currentTarget.dataset['tabId'];
        assert(tabId !== undefined);
        const tabIdNumber = Number.parseInt(tabId, 10);
        switch (tabIdNumber) {
            case TabId.THUMBNAIL:
                record(UserAction.SELECT_SIDENAV_THUMBNAILS);
                this.selectedTab_ = 0;
                break;
            case TabId.OUTLINE:
                record(UserAction.SELECT_SIDENAV_OUTLINE);
                this.selectedTab_ = 1;
                break;
            case TabId.ATTACHMENT:
                record(UserAction.SELECT_SIDENAV_ATTACHMENT);
                this.selectedTab_ = this.tabs_.length - 1;
                break;
            default:
                assertNotReachedCase();
        }
    }
    hideThumbnailView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.THUMBNAIL;
    }
    hideOutlineView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.OUTLINE;
    }
    hideAttachmentView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.ATTACHMENT;
    }
    onKeydown_(e) {
        if (this.tabs_.length === 1 ||
            (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.key === 'ArrowUp') {
            if (this.selectedTab_ === 0) {
                this.selectedTab_ = this.tabs_.length - 1;
            }
            else {
                this.selectedTab_--;
            }
        }
        else {
            if (this.selectedTab_ === this.tabs_.length - 1) {
                this.selectedTab_ = 0;
            }
            else {
                this.selectedTab_++;
            }
        }
    }
}
customElements.define(ViewerPdfSidenavElement.is, ViewerPdfSidenavElement);

let instance$i = null;
function getCss$h() {
    return instance$i || (instance$i = [...[getCss$p()], css `:host{--break-padding:8px}cr-dialog::part(dialog){width:fit-content}table{border-spacing:0}.break>td{--break-color:var(--google-grey-300);border-bottom:1px solid var(--break-color);padding-bottom:var(--break-padding)}.break+tr>td{padding-top:var(--break-padding)}.name{color:var(--cr-primary-text-color);padding-inline-end:12px;vertical-align:top}.value{color:var(--cr-secondary-text-color);max-width:300px;min-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#keywords{white-space:normal}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$e() {
    return html `<!--_html_template_start_-->
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">$i18n{propertiesDialogTitle}</div>
  <div slot="body">
    <table>
      <tr>
        <td class="name">$i18n{propertiesFileName}</td>
        <td class="value" id="file-name">${this.fileName}</td>
      </tr>
      <tr class="break">
        <td class="name">$i18n{propertiesFileSize}</td>
        <td class="value" id="file-size">${this.documentMetadata.fileSize}</td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesTitle}</td>
        <td class="value" id="title">
          ${this.getOrPlaceholder_(this.documentMetadata.title)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesAuthor}</td>
        <td class="value" id="author">
          ${this.getOrPlaceholder_(this.documentMetadata.author)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesSubject}</td>
        <td class="value" id="subject">
          ${this.getOrPlaceholder_(this.documentMetadata.subject)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesKeywords}</td>
        <td class="value" id="keywords">
          ${this.getOrPlaceholder_(this.documentMetadata.keywords)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesCreated}</td>
        <td class="value" id="created">
          ${this.getOrPlaceholder_(this.documentMetadata.creationDate)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesModified}</td>
        <td class="value" id="modified">
          ${this.getOrPlaceholder_(this.documentMetadata.modDate)}
        </td>
      </tr>
      <tr class="break">
        <td class="name">$i18n{propertiesApplication}</td>
        <td class="value" id="application">
          ${this.getOrPlaceholder_(this.documentMetadata.creator)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesPdfProducer}</td>
        <td class="value" id="pdf-producer">
          ${this.getOrPlaceholder_(this.documentMetadata.producer)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesPdfVersion}</td>
        <td class="value" id="pdf-version">
          ${this.getOrPlaceholder_(this.documentMetadata.version)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesPageCount}</td>
        <td class="value" id="page-count">${this.pageCount}</td>
      </tr>
      <tr class="break">
        <td class="name">$i18n{propertiesPageSize}</td>
        <td class="value" id="page-size">
          ${this.getOrPlaceholder_(this.documentMetadata.pageSize)}
        </td>
      </tr>
      <tr>
        <td class="name">$i18n{propertiesFastWebView}</td>
        <td class="value" id="fast-web-view">
          ${this.getFastWebViewValue_()}
        </td>
      </tr>
    </table>
  </div>
  <div slot="button-container">
    <cr-button id="close" class="action-button" @click="${this.onCloseClick_}">
      $i18n{propertiesDialogClose}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerPropertiesDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-properties-dialog';
    }
    static get styles() {
        return getCss$h();
    }
    render() {
        return getHtml$e.bind(this)();
    }
    static get properties() {
        return {
            documentMetadata: { type: Object },
            fileName: { type: String },
            pageCount: { type: Number },
            strings: { type: Object },
        };
    }
    #documentMetadata_accessor_storage = {
        author: '',
        canSerializeDocument: false,
        creationDate: '',
        creator: '',
        fileSize: '',
        keywords: '',
        linearized: false,
        modDate: '',
        pageSize: '',
        producer: '',
        subject: '',
        title: '',
        version: '',
    };
    get documentMetadata() { return this.#documentMetadata_accessor_storage; }
    set documentMetadata(value) { this.#documentMetadata_accessor_storage = value; }
    #fileName_accessor_storage = '';
    get fileName() { return this.#fileName_accessor_storage; }
    set fileName(value) { this.#fileName_accessor_storage = value; }
    #pageCount_accessor_storage = 0;
    get pageCount() { return this.#pageCount_accessor_storage; }
    set pageCount(value) { this.#pageCount_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    getFastWebViewValue_() {
        if (!this.strings) {
            return '';
        }
        return loadTimeData.getString(this.documentMetadata.linearized ? 'propertiesFastWebViewYes' :
            'propertiesFastWebViewNo');
    }
    getOrPlaceholder_(value) {
        return value || '-';
    }
    onCloseClick_() {
        this.$.dialog.close();
    }
}
customElements.define(ViewerPropertiesDialogElement.is, ViewerPropertiesDialogElement);

let instance$h = null;
function getCss$g() {
    return instance$h || (instance$h = [...[getCss$O()], css `:host{display:block;width:200px;position:relative;overflow:hidden}#progressContainer{position:relative}#progressContainer,:host([indeterminate]) #primaryProgress::after{height:var(--cr-progress-height,4px);background:var(--cr-progress-container-color,var(--google-grey-300))}#primaryProgress,:host([indeterminate]) #primaryProgress::after{position:absolute;top:0;right:0;bottom:0;left:0}#primaryProgress{transform-origin:left center;transform:scaleX(0);will-change:transform;background:var(--cr-progress-active-color,var(--google-green-500))}:host([disabled]) #primaryProgress{background:var(--cr-progress-disabled-active-color,var(--google-grey-500))}:host([indeterminate]:not([disabled])) #primaryProgress{transform-origin:right center;animation:indeterminate-bar var(--cr-progress-indeterminate-cycle-duration,2s) linear infinite}:host([indeterminate]:not([disabled])) #primaryProgress::after{content:'';transform-origin:center center;animation:indeterminate-splitter var(--cr-progress-indeterminate-cycle-duration,2s) linear infinite}@keyframes indeterminate-bar{0%{transform:scaleX(1) translateX(-100%)}50%{transform:scaleX(1) translateX(0%)}75%{transform:scaleX(1) translateX(0%);animation-timing-function:cubic-bezier(.28,.62,.37,.91)}100%{transform:scaleX(0) translateX(0%)}}@keyframes indeterminate-splitter{0%{transform:scaleX(.75) translateX(-125%)}30%{transform:scaleX(.75) translateX(-125%);animation-timing-function:cubic-bezier(.42,0,.6,.8)}90%{transform:scaleX(.75) translateX(125%)}100%{transform:scaleX(.75) translateX(125%)}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$d() {
    return html `
<div id="progressContainer">
  <div id="primaryProgress"></div>
</div>`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrProgressElement extends CrLitElement {
    static get is() {
        return 'cr-progress';
    }
    static get styles() {
        return getCss$g();
    }
    render() {
        return getHtml$d.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The number that represents the current value.
             */
            value: { type: Number },
            /**
             * The number that indicates the minimum value of the range.
             */
            min: { type: Number },
            /**
             * The number that indicates the maximum value of the range.
             */
            max: { type: Number },
            /**
             * Specifies the value granularity of the range's value.
             */
            step: { type: Number },
            /**
             * Use an indeterminate progress indicator.
             */
            indeterminate: {
                type: Boolean,
                reflect: true,
            },
            /**
             * True if the progress is disabled.
             */
            disabled: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #value_accessor_storage = 0;
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #min_accessor_storage = 0;
    get min() { return this.#min_accessor_storage; }
    set min(value) { this.#min_accessor_storage = value; }
    #max_accessor_storage = 100;
    get max() { return this.#max_accessor_storage; }
    set max(value) { this.#max_accessor_storage = value; }
    #step_accessor_storage = 1;
    get step() { return this.#step_accessor_storage; }
    set step(value) { this.#step_accessor_storage = value; }
    #indeterminate_accessor_storage = false;
    get indeterminate() { return this.#indeterminate_accessor_storage; }
    set indeterminate(value) { this.#indeterminate_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        // Clamp the value to the range.
        if (changedProperties.has('min') || changedProperties.has('max') ||
            changedProperties.has('value') || changedProperties.has('step')) {
            const previous = changedProperties.get('value') || 0;
            const clampedValue = this.clampValue_(this.value);
            this.value = Number.isNaN(clampedValue) ? previous : clampedValue;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'progressbar');
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('min') || changedProperties.has('max') ||
            changedProperties.has('value') || changedProperties.has('step')) {
            const ratio = (this.value - this.min) / (this.max - this.min);
            this.$.primaryProgress.style.transform = `scaleX(${ratio})`;
            this.setAttribute('aria-valuemin', this.min.toString());
            this.setAttribute('aria-valuemax', this.max.toString());
        }
        if (changedProperties.has('indeterminate') ||
            changedProperties.has('value')) {
            if (this.indeterminate) {
                this.removeAttribute('aria-valuenow');
            }
            else {
                this.setAttribute('aria-valuenow', this.value.toString());
            }
        }
        if (changedProperties.has('disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
    }
    clampValue_(value) {
        return Math.min(this.max, Math.max(this.min, this.calcStep_(value)));
    }
    calcStep_(value) {
        value = Number.parseFloat(value.toString());
        if (!this.step) {
            return value;
        }
        const numSteps = Math.round((value - this.min) / this.step);
        if (this.step < 1) {
            /**
             * For small values of this.step, if we calculate the step using
             * `Math.round(value / step) * step` we may hit a precision point issue
             * eg. 0.1 * 0.2 =  0.020000000000000004
             * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
             *
             * as a work around we can divide by the reciprocal of `step`
             */
            return numSteps / (1 / this.step) + this.min;
        }
        else {
            return numSteps * this.step + this.min;
        }
    }
}
customElements.define(CrProgressElement.is, CrProgressElement);

let instance$g = null;
function getCss$f() {
    return instance$g || (instance$g = [...[getCss$J(), getCss$P()], css `dialog{background:var(--color-theme-color-picker-hue-slider-dialog-background,var(--cr-fallback-color-surface));border:0;border-radius:12px;box-shadow:var(--cr-elevation-3);box-sizing:border-box;color:var(--color-theme-color-picker-hue-slider-dialog-foreground,var(--cr-fallback-color-on-surface));overflow:hidden;margin:0;padding:20px;width:320px;isolation:isolate;position:absolute;z-index:999}a{color:var(--cr-fallback-color-primary)}@media (forced-colors:active){dialog{border:solid 1px Highlight}}#header{display:flex;min-height:24px;gap:8px;padding-bottom:8px}h2{flex:1;font-size:16px;font-weight:500;margin-top:6px;margin-bottom:0}#description{padding-top:4px;padding-bottom:4px;font-size:13px}cr-icon-button{color:var(--cr-fallback-color-on-surface-subtle)}#file-content{flex:1;display:flex;flex-direction:row;gap:8px;padding-top:8px;padding-bottom:8px}#filename-content{display:flex;flex-direction:column;margin-inline-end:auto;line-height:1.5;overflow:hidden;white-space:nowrap;justify-content:center}#pdf-icon{width:20px;height:20px;min-width:20px;min-height:20px;fill:var(--google-red-500);@media (prefers-color-scheme:dark){fill:var(--google-red-300)}}#filename{font-weight:bold;text-overflow:ellipsis;overflow:hidden}#file-metadata{color:var(--cr-fallback-color-on-surface-subtle);font-size:11px;text-overflow:ellipsis;overflow:hidden}cr-progress{width:100%;--cr-progress-active-color:var(--cr-fallback-color-primary);--cr-progress-container-color:var(--cr-fallback-color-neutral-outline)}#footer:has(cr-button){display:flex;flex-direction:row-reverse;padding-top:8px}#footer:empty{padding-top:12px}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$c() {
    // clang-format off
    return html `<!--_html_template_start_-->
<dialog id="dialog" aria-labelledby="status" @close="${this.onDialogClose_}"
    @focusout="${this.onFocusout_}">
  <div id="header">
    <h2 id="status">${this.dialogTitle_}</h2>
    <cr-icon-button id="close" iron-icon="cr:close"
        aria-label="$i18n{propertiesDialogClose}"
        title="$i18n{propertiesDialogClose}" @click="${this.onCloseClick_}">
    </cr-icon-button>
  </div>
  <div id="description" .innerHTML="${this.description_}"
      ?hidden="${this.isSaveToDriveState_(SaveToDriveState.UPLOADING)}">
  </div>
  <div id="file-content">
    <cr-icon icon="pdf-save-to-drive:drive-pdf-filled" id="pdf-icon"></cr-icon>
    <div id="filename-content">
      <div id="filename">${this.getFileName_()}</div>
      <div id="file-metadata">${this.getMetadata_()}</div>
    </div>
    ${this.isSaveToDriveState_(SaveToDriveState.UPLOADING) ? html `
      <cr-icon-button id="cancel-upload-button"
          iron-icon="pdf-save-to-drive:cancel"
          aria-label="$i18n{saveToDriveDialogCancelUploadButtonLabel}"
          title="$i18n{saveToDriveDialogCancelUploadButtonLabel}"
          @click="${this.onRequestButtonClick_}">
      </cr-icon-button>
    ` : ''}
  </div>
  <div id="footer">
    ${this.isSaveToDriveState_(SaveToDriveState.UPLOADING) ? html `
      <cr-progress .max="${this.getFileSizeBytes_()}"
          .value="${this.getUploadedBytes_()}">
      </cr-progress>
    ` : ''}
    ${this.isSaveToDriveState_(SaveToDriveState.STORAGE_FULL_ERROR) ? html `
      <cr-button id="manage-storage-button" role="link"
          @click="${this.onRequestButtonClick_}">
        $i18n{saveToDriveDialogManageStorageButtonLabel}
      </cr-button>
    ` : ''}
    ${this.isSaveToDriveState_(SaveToDriveState.SUCCESS) ? html `
      <cr-button id="open-in-drive-button" class="action-button" role="link"
          @click="${this.onRequestButtonClick_}">
        $i18n{saveToDriveDialogOpenInDriveButtonLabel}
      </cr-button>
    ` : ''}
    ${this.isSaveToDriveState_(SaveToDriveState.CONNECTION_ERROR) ||
        this.isSaveToDriveState_(SaveToDriveState.SESSION_TIMEOUT_ERROR) ?
        html `
      <cr-button id="retry-button" class="action-button"
          @click="${this.onRequestButtonClick_}">
        $i18n{saveToDriveDialogRetryButtonLabel}
      </cr-button>
    ` : ''}
  </div>
</dialog>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DISMISS_TIMEOUT_MS = 5000;
const ViewerSaveToDriveBubbleElementBase = I18nMixinLit(CrLitElement);
class ViewerSaveToDriveBubbleElement extends ViewerSaveToDriveBubbleElementBase {
    static get is() {
        return 'viewer-save-to-drive-bubble';
    }
    static get styles() {
        return getCss$f();
    }
    render() {
        return getHtml$c.bind(this)();
    }
    static get properties() {
        return {
            docTitle: { type: String },
            progress: { type: Object },
            state: { type: String },
            description_: {
                type: String,
                state: true,
            },
            dialogTitle_: {
                type: String,
                state: true,
            },
        };
    }
    #docTitle_accessor_storage = '';
    get docTitle() { return this.#docTitle_accessor_storage; }
    set docTitle(value) { this.#docTitle_accessor_storage = value; }
    #progress_accessor_storage = {
        status: chrome.pdfViewerPrivate.SaveToDriveStatus.NOT_STARTED,
        errorType: chrome.pdfViewerPrivate.SaveToDriveErrorType.NO_ERROR,
    };
    get progress() { return this.#progress_accessor_storage; }
    set progress(value) { this.#progress_accessor_storage = value; }
    #state_accessor_storage = SaveToDriveState.UNINITIALIZED;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #description__accessor_storage = sanitizeInnerHtml('');
    get description_() { return this.#description__accessor_storage; }
    set description_(value) { this.#description__accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    anchor_ = null;
    eventTracker_ = new EventTracker();
    dismissTimeoutId_ = null;
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('state')) {
            this.onStateChanged_();
        }
    }
    // If `autoDismiss` is true, the bubble will be automatically dismissed after
    // 5 seconds. However, if the bubble is already open manually, the timeout
    // will be ignored.
    showAt(anchor, autoDismiss = false) {
        if (this.$.dialog.open && autoDismiss && !this.dismissTimeoutId_) {
            return;
        }
        this.$.dialog.show();
        this.anchor_ = anchor;
        this.positionDialog_();
        this.$.dialog.focus();
        this.eventTracker_.remove(window, 'resize');
        this.eventTracker_.add(window, 'resize', this.positionDialog_.bind(this));
        if (autoDismiss) {
            this.setDismissTimeout_();
        }
    }
    getFileName_() {
        return this.progress.fileName ?? this.docTitle;
    }
    getFileSizeBytes_() {
        return this.progress.fileSizeBytes ?? 0;
    }
    getMetadata_() {
        return this.progress.fileMetadata ?? '';
    }
    getUploadedBytes_() {
        return this.progress.uploadedBytes ?? 0;
    }
    isSaveToDriveState_(state) {
        return this.state === state;
    }
    onRequestButtonClick_() {
        let requestType;
        switch (this.state) {
            case SaveToDriveState.UPLOADING:
                requestType = SaveToDriveBubbleRequestType.CANCEL_UPLOAD;
                break;
            case SaveToDriveState.STORAGE_FULL_ERROR:
                requestType = SaveToDriveBubbleRequestType.MANAGE_STORAGE;
                break;
            case SaveToDriveState.SUCCESS:
                requestType = SaveToDriveBubbleRequestType.OPEN_IN_DRIVE;
                break;
            case SaveToDriveState.CONNECTION_ERROR:
            case SaveToDriveState.SESSION_TIMEOUT_ERROR:
                requestType = SaveToDriveBubbleRequestType.RETRY;
                break;
            default:
                assertNotReached(`Invalid bubble action: ${this.state}`);
        }
        this.fire('save-to-drive-bubble-action', requestType);
        this.$.dialog.close();
    }
    onCloseClick_() {
        this.fire('save-to-drive-bubble-action', SaveToDriveBubbleRequestType.DIALOG_CLOSED);
        this.$.dialog.close();
    }
    onDialogClose_() {
        this.eventTracker_.removeAll();
        if (this.dismissTimeoutId_) {
            clearTimeout(this.dismissTimeoutId_);
            this.dismissTimeoutId_ = null;
        }
    }
    onFocusout_(e) {
        if (this.$.dialog.contains(e.relatedTarget) ||
            e.composedPath()[0] !== this.$.dialog) {
            return;
        }
        this.$.dialog.close();
    }
    onStateChanged_() {
        this.updateDescription_();
        this.updateDialogTitle_();
    }
    positionDialog_() {
        if (!this.anchor_ || !this.$.dialog.open) {
            return;
        }
        const anchorBoundingClientRect = this.anchor_.getBoundingClientRect();
        if (isRTL()) {
            this.$.dialog.style.right = `${window.innerWidth - anchorBoundingClientRect.left -
                this.$.dialog.offsetWidth}px`;
        }
        else {
            this.$.dialog.style.left = `${this.anchor_.offsetLeft + this.anchor_.offsetWidth -
                this.$.dialog.offsetWidth}px`;
        }
        // By default, align the dialog below the anchor. If the window is too
        // small, show it above the anchor.
        if (anchorBoundingClientRect.bottom + this.$.dialog.offsetHeight >=
            window.innerHeight) {
            this.$.dialog.style.top =
                `${this.anchor_.offsetTop - this.$.dialog.offsetHeight}px`;
        }
        else {
            this.$.dialog.style.top =
                `${this.anchor_.offsetTop + this.anchor_.offsetHeight}px`;
        }
    }
    setDismissTimeout_() {
        this.dismissTimeoutId_ = setTimeout(() => {
            this.dismissTimeoutId_ = null;
            this.$.dialog.close();
        }, DISMISS_TIMEOUT_MS);
    }
    updateDescription_() {
        switch (this.state) {
            case SaveToDriveState.UNINITIALIZED:
            case SaveToDriveState.UPLOADING:
                this.description_ = window.trustedTypes.emptyHTML;
                break;
            case SaveToDriveState.SUCCESS:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogSuccessMessage', {
                        tags: ['b'],
                        substitutions: [
                            this.progress.parentFolderName ?? '',
                        ],
                    });
                break;
            case SaveToDriveState.CONNECTION_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogConnectionErrorMessage');
                break;
            case SaveToDriveState.STORAGE_FULL_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogStorageFullErrorMessage');
                break;
            case SaveToDriveState.SESSION_TIMEOUT_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogSessionTimeoutErrorMessage');
                break;
            case SaveToDriveState.UNKNOWN_ERROR:
                this.description_ =
                    this.i18nAdvanced('saveToDriveDialogUnknownErrorMessage', {
                        tags: ['a'],
                        substitutions: [
                            this.i18n('pdfSaveToDriveHelpCenterURL'),
                        ],
                    });
                break;
            default:
                assertNotReached(`Invalid state for description: ${this.state}`);
        }
    }
    updateDialogTitle_() {
        switch (this.state) {
            case SaveToDriveState.UNINITIALIZED:
                this.dialogTitle_ = this.state;
                break;
            case SaveToDriveState.UPLOADING:
                this.dialogTitle_ = this.i18n('saveToDriveDialogUploadingTitle');
                break;
            case SaveToDriveState.SUCCESS:
                this.dialogTitle_ = this.i18n('saveToDriveDialogSuccessTitle');
                break;
            case SaveToDriveState.CONNECTION_ERROR:
            case SaveToDriveState.STORAGE_FULL_ERROR:
            case SaveToDriveState.SESSION_TIMEOUT_ERROR:
            case SaveToDriveState.UNKNOWN_ERROR:
                this.dialogTitle_ = this.i18n('saveToDriveDialogErrorTitle');
                break;
            default:
                assertNotReached(`Invalid state for dialog title: ${this.state}`);
        }
    }
}
customElements.define(ViewerSaveToDriveBubbleElement.is, ViewerSaveToDriveBubbleElement);

let instance$f = null;
function getCss$e() {
    return instance$f || (instance$f = [...[], css `:host{display:contents}#progressRing{width:28px;height:28px;position:absolute;transform:rotate(-90deg)}#innerProgress,#progressTrack{r:90;cx:100;cy:100;fill:transparent;stroke-width:16px}#progressTrack{stroke:rgb(117,117,117);@media (prefers-color-scheme:dark){stroke:var(--cr-fallback-color-neutral-outline)}}#innerProgress{stroke-linecap:round;stroke-dasharray:565.48px;stroke:var(--cr-fallback-color-inverse-primary);@media (prefers-color-scheme:dark){stroke:var(--cr-fallback-color-primary)}}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$b() {
    return html `
<svg id="progressRing" viewBox="-25 -25 250 250" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
  <circle id="progressTrack"></circle>
  <circle id="innerProgress" stroke-dashoffset="${this.strokeDashOffset}">
  </circle>
</svg>`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const STROKE_DASHARRAY = 566;
function convertPercentageToStrokeDashOffset(percentage) {
    const ratio = percentage / 100;
    const value = Math.round(STROKE_DASHARRAY * (1 - ratio));
    return `${value}px`;
}
class CircularProgressRingElement extends CrLitElement {
    static get is() {
        return 'circular-progress-ring';
    }
    static get styles() {
        return getCss$e();
    }
    render() {
        return getHtml$b.bind(this)();
    }
    static get properties() {
        return {
            strokeDashOffset: { type: String },
            value: { type: Number },
        };
    }
    #value_accessor_storage = 0;
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #strokeDashOffset_accessor_storage = `${STROKE_DASHARRAY}px`;
    get strokeDashOffset() { return this.#strokeDashOffset_accessor_storage; }
    set strokeDashOffset(value) { this.#strokeDashOffset_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('value')) {
            assert(this.value >= 0 && this.value <= 100);
            this.strokeDashOffset = convertPercentageToStrokeDashOffset(this.value);
        }
    }
}
customElements.define(CircularProgressRingElement.is, CircularProgressRingElement);

let instance$e = null;
function getCss$d() {
    return instance$e || (instance$e = [...[getCss$J(), getCss$r()], css `:host{display:inline-flex;justify-content:center;align-items:center}:host([state='uploading']) #save{z-index:1;--pdf-toolbar-text-color:var(--cr-fallback-color-inverse-primary);@media (prefers-color-scheme:dark){--pdf-toolbar-text-color:var(--cr-fallback-color-primary)}}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$a() {
    return html `<!--_html_template_start_-->
<cr-icon-button id="save" iron-icon="${this.getIronIcon()}"
    @click="${this.onSaveClick}" aria-label="$i18n{tooltipSaveToDrive}"
    aria-haspopup="${this.getAriaHasPopup()}" title="$i18n{tooltipSaveToDrive}">
</cr-icon-button>
${this.isUploading_() ? html `
  <circular-progress-ring .value="${this.progress}"></circular-progress-ring>
` : ''}
<cr-action-menu id="menu">
  <button id="save-edited" class="dropdown-item"
      @click="${this.onSaveEditedClick}">
    $i18n{downloadEdited}
  </button>
  <button id="save-original" class="dropdown-item"
      @click="${this.onSaveOriginalClick}">
    $i18n{downloadOriginal}
  </button>
</cr-action-menu>
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ViewerSaveControlsBase = ViewerSaveControlsMixin(CrLitElement);
class ViewerSaveToDriveControlsElement extends ViewerSaveControlsBase {
    static get is() {
        return 'viewer-save-to-drive-controls';
    }
    static get styles() {
        return getCss$d();
    }
    render() {
        return getHtml$a.bind(this)();
    }
    static get properties() {
        return {
            progress: { type: Number },
            state: {
                type: String,
                reflect: true,
            },
        };
    }
    #progress_accessor_storage = 0;
    get progress() { return this.#progress_accessor_storage; }
    set progress(value) { this.#progress_accessor_storage = value; }
    #state_accessor_storage = SaveToDriveState.UNINITIALIZED;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    getIronIcon() {
        return this.isUploading_() ? 'pdf-save-to-drive:arrow-upward-alt' :
            'pdf-save-to-drive:add-to-drive';
    }
    isUploading_() {
        return this.state === SaveToDriveState.UPLOADING;
    }
    // ViewerSaveControlsMixin implementation.
    getSaveButton() {
        return this.$.save;
    }
    // ViewerSaveControlsMixin implementation.
    getSaveEventType() {
        return 'save-to-drive';
    }
    // ViewerSaveControlsMixin implementation.
    getMenu() {
        return this.$.menu;
    }
    // ViewerSaveControlsMixin implementation.
    shouldShowSaveMenuOnSaveClick(hasEdits) {
        return hasEdits && this.state === SaveToDriveState.UNINITIALIZED;
    }
}
customElements.define(ViewerSaveToDriveControlsElement.is, ViewerSaveToDriveControlsElement);

let instance$d = null;
function getCss$c() {
    return instance$d || (instance$d = [...[], css `:host{background-color:var(--viewer-side-background-color);color:var(--google-grey-100);display:block;height:100%;overflow-y:auto;width:288px}.side-panel-content{padding:24px}h2{font-size:13px;font-weight:400;margin:0;margin-inline-start:6px}`]);
}

let instance$c = null;
function getCss$b() {
    return instance$c || (instance$c = [...[getCss$J(), getCss$c()], css `:host{--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}cr-icon-button{--cr-icon-button-fill-color:var(--viewer-icon-ink-fill-color)}cr-icon-button[data-selected='true']{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color);background-color:var(--viewer-icon-ink-selected-background-color)}#brush-options{padding-top:27px}ink-brush-selector{border-bottom:1px solid var(--viewer-border-color);padding:12px 0}ink-color-selector,ink-size-selector{margin:16px 0 32px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$9() {
    // clang-format off
    return html `<!--_html_template_start_-->
<ink-brush-selector .currentType="${this.currentType}"
    @current-type-changed="${this.onCurrentTypeChanged}">
</ink-brush-selector>
${this.shouldShowBrushOptions_() ? html `
  <div id="brush-options" class="side-panel-content">
    <h2>$i18n{ink2Size}</h2>
    <ink-size-selector .currentSize="${this.currentSize}"
        .currentType="${this.currentType}"
        @current-size-changed="${this.onCurrentSizeChanged}">
    </ink-size-selector>
    <h2>$i18n{ink2Color}</h2>
    <ink-color-selector label="$i18n{ink2Color}"
        .colors="${this.availableBrushColors()}"
        .currentColor="${this.currentColor}"
        @current-color-changed="${this.onCurrentColorChanged}">
    </ink-color-selector>
  </div>
` : ''}
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ViewerSidePanelElementBase = InkAnnotationBrushMixin(CrLitElement);
class ViewerSidePanelElement extends ViewerSidePanelElementBase {
    static get is() {
        return 'viewer-side-panel';
    }
    static get styles() {
        return getCss$b();
    }
    render() {
        return getHtml$9.bind(this)();
    }
    shouldShowBrushOptions_() {
        return this.currentType !== AnnotationBrushType.ERASER;
    }
}
customElements.define(ViewerSidePanelElement.is, ViewerSidePanelElement);

let instance$b = null;
function getCss$a() {
    return instance$b || (instance$b = [...[getCss$v(), getCss$J()], css ``]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$8() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div></div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerSignatureBottomToolbarElement extends CrLitElement {
    static get is() {
        return 'viewer-signature-bottom-toolbar';
    }
    static get styles() {
        return getCss$a();
    }
    render() {
        return getHtml$8.bind(this)();
    }
}
customElements.define(ViewerSignatureBottomToolbarElement.is, ViewerSignatureBottomToolbarElement);

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$7() {
    // TODO(crbug.com/568576345): Add translated strings.
    return html `<!--_html_template_start_-->
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">New signature or initials</div>
  <div slot="header">
    <cr-icon-button id="close" iron-icon="cr:close"
        aria-label="Close signature inkpad" title="Close signature inkpad"
        @click="${this.onCloseClick_}">
    </cr-icon-button>
  </div>
  <div slot="button-container">
    <cr-button id="clear" class="tonal-button" aria-label="Clear signature">
      Clear
    </cr-button>
    <cr-button id="create" class="action-button" aria-label="Create signature">
      Create
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerSignatureDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-signature-dialog';
    }
    render() {
        return getHtml$7.bind(this)();
    }
    onCloseClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(ViewerSignatureDialogElement.is, ViewerSignatureDialogElement);

let instance$a = null;
function getCss$9() {
    return instance$a || (instance$a = [...[getCss$J(), getCss$c()], css ``]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div></div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerSignatureSidePanelElement extends CrLitElement {
    static get is() {
        return 'viewer-signature-side-panel';
    }
    static get styles() {
        return getCss$9();
    }
    render() {
        return getHtml$6.bind(this)();
    }
}
customElements.define(ViewerSignatureSidePanelElement.is, ViewerSignatureSidePanelElement);

let instance$9 = null;
function getCss$8() {
    return instance$9 || (instance$9 = [...[], css `.md-select{--md-arrow-width:7px;--md-select-bg-color:transparent;--md-select-option-bg-color:white;--md-select-side-padding:10px;--md-select-text-color:inherit;-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:12px;height:36px;max-width:100%;outline:none;padding-block-end:0;padding-block-start:0;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}.md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1;pointer-events:none}.md-select:focus{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}`]);
}

let instance$8 = null;
function getCss$7() {
    return instance$8 || (instance$8 = [...[getCss$8()], css `select.md-select:not(.z){appearance:base-select;background:transparent;background-image:none !important;border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);padding:var(--leo-spacing-m);color:var(--leo-color-text-primary);display:flex;align-items:center;min-width:var(--md-select-width,240px);width:fit-content;height:unset;font-size:inherit;transition:border-color 0.12s ease-in-out}.md-select:hover{background:transparent;border-color:var(--leo-color-divider-strong)}.md-select::picker(select){margin-top:var(--leo-spacing-m);appearance:base-select;background:var(--leo-color-container-background);border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);position-area:block-end span-inline-end}.md-select option:not(.z){margin:var(--leo-spacing-s);padding:var(--leo-spacing-s) var(--leo-spacing-m);border-radius:var(--leo-radius-s);background-color:var(--leo-color-container-background)}.md-select option:hover{background-color:var(--leo-color-container-highlight)}.md-select option:checked{background-color:var(--leo-color-container-highlight)}.md-select option::checkmark{display:none}.md-select::picker-icon{content:'';width:20px;height:20px;background-color:currentColor;mask-image:url(//resources/brave-icons/carat-down.svg);transition:transform 0.12s ease-in-out}.md-select option:focus{background-color:var(--leo-color-container-interactive);color:var(--leo-color-text-interactive)}.md-select option:focus-visible{box-shadow:0 0 0 1.5px rgba(255,255,255,0.5),0 0 4px 2px #423eee}`]);
}

let instance$7 = null;
function getCss$6() {
    return instance$7 || (instance$7 = [...[getCss$v(), getCss$7(), getCss$J()], css `:host{--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);border-radius:16px 16px 0 0;z-index:2}.md-select{--md-select-width:130px;margin-inline-end:8px}.md-select.size-select{--md-select-width:64px;margin-inline-end:var(--toolbar-item-gap)}text-styles-selector{--text-styles-selector-gap:8px}text-alignment-selector{padding:6px}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5() {
    // clang-format off
    return html `<!--_html_template_start_-->
<select id="typefaceSelect" class="md-select"
    @change="${this.onTypefaceChange_}" .value="${this.currentTypeface}"
    aria-label="$i18n{ink2TextFont}">
  ${this.fontNames.map(typeface => html `
    <option value="${typeface}">
      ${this.i18n(this.getLabelForTypeface(typeface))}
    </option>
  `)}
</select>
<select id="sizeSelect" class="md-select size-select"
    @change="${this.onSizeChange_}" .value="${this.currentSize.toString()}"
    aria-label="$i18n{ink2TextFontSize}">
  ${this.sizes.map(size => html `
    <option value="${size}">${size}</option>
  `)}
</select>
<text-styles-selector class="toolbar-icon"></text-styles-selector>
<viewer-bottom-toolbar-dropdown id="alignment" class="toolbar-icon"
    button-title="$i18n{ink2TextAlignment}">
  <cr-icon slot="icon" icon="${this.getAlignmentIcon_()}"></cr-icon>
  <text-alignment-selector slot="menu"></text-alignment-selector>
</viewer-bottom-toolbar-dropdown>
<viewer-bottom-toolbar-dropdown id="color" class="toolbar-icon"
    button-title="$i18n{ink2TextColor}">
  <div slot="icon" class="color-chip"></div>
  <ink-color-selector slot="menu" label="$i18n{ink2TextColor}"
      .colors="${this.colors}" .currentColor="${this.currentColor}"
      @current-color-changed="${this.onCurrentColorChanged}">
  </ink-color-selector>
</viewer-bottom-toolbar-dropdown>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ViewerTextBottomToolbarElementBase = InkAnnotationTextMixin(InkTextObserverMixin(I18nMixinLit(CrLitElement)));
class ViewerTextBottomToolbarElement extends ViewerTextBottomToolbarElementBase {
    static get is() {
        return 'viewer-text-bottom-toolbar';
    }
    static get styles() {
        return getCss$6();
    }
    render() {
        return getHtml$5.bind(this)();
    }
    static get properties() {
        return {
            currentAlignment_: { type: String },
        };
    }
    #currentAlignment__accessor_storage = TextAlignment.LEFT;
    get currentAlignment_() { return this.#currentAlignment__accessor_storage; }
    set currentAlignment_(value) { this.#currentAlignment__accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('currentColor') && this.currentColor) {
            this.style.setProperty('--ink-brush-color', colorToHex(this.currentColor));
        }
    }
    onTypefaceChange_(e) {
        this.onTypefaceSelected(e);
    }
    onSizeChange_(e) {
        this.onSizeSelected(e);
    }
    getAlignmentIcon_() {
        switch (this.currentAlignment_) {
            case TextAlignment.LEFT:
                return 'pdf-ink:format-align-left';
            case TextAlignment.CENTER:
                return 'pdf-ink:format-align-center';
            case TextAlignment.RIGHT:
                return 'pdf-ink:format-align-right';
            default:
                assertNotReached();
        }
    }
    onTextAttributesChanged(attributes) {
        super.onTextAttributesChanged(attributes);
        this.currentAlignment_ = attributes.alignment;
    }
}
customElements.define(ViewerTextBottomToolbarElement.is, ViewerTextBottomToolbarElement);

let instance$6 = null;
function getCss$5() {
    return instance$6 || (instance$6 = [...[getCss$7(), getCss$c(), getCss$J()], css `h2{margin-inline-start:0;margin-bottom:8px}.md-select{--md-select-width:240px;margin-top:8px}text-styles-selector{padding-top:8px}text-alignment-selector{padding-top:16px}ink-color-selector{padding-top:4px}.side-panel-content:not(:first-child){padding-top:8px}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div class="side-panel-content">
  <h2>$i18n{ink2TextFont}</h2>
  <select id="typefaceSelect" class="md-select"
      @change="${this.onTypefaceChange_}" .value="${this.currentTypeface}"
      aria-label="$i18n{ink2TextFont}">
    ${this.fontNames.map(typeface => html `
      <option value="${typeface}">
        ${this.i18n(this.getLabelForTypeface(typeface))}
      </option>
    `)}
  </select>
  <select id="sizeSelect" class="md-select" @change="${this.onSizeChange_}"
      .value="${this.currentSize.toString()}"
      aria-label="$i18n{ink2TextFontSize}">
    ${this.sizes.map(size => html `
      <option value="${size}">${size}</option>
    `)}
  </select>
</div>
<div class="side-panel-content">
  <h2>$i18n{ink2TextStyles}</h2>
  <text-styles-selector></text-styles-selector>
  <text-alignment-selector></text-alignment-selector>
</div>
<div class="side-panel-content">
  <h2>$i18n{ink2TextColor}</h2>
  <ink-color-selector label="$i18n{ink2TextColor}" .colors="${this.colors}"
      .currentColor="${this.currentColor}"
      @current-color-changed="${this.onCurrentColorChanged}">
  </ink-color-selector>
</div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ViewerTextSidePanelElementBase = InkAnnotationTextMixin(InkTextObserverMixin(I18nMixinLit(CrLitElement)));
class ViewerTextSidePanelElement extends ViewerTextSidePanelElementBase {
    static get is() {
        return 'viewer-text-side-panel';
    }
    static get styles() {
        return getCss$5();
    }
    render() {
        return getHtml$4.bind(this)();
    }
    onTypefaceChange_(e) {
        this.onTypefaceSelected(e);
    }
    onSizeChange_(e) {
        this.onSizeSelected(e);
    }
}
customElements.define(ViewerTextSidePanelElement.is, ViewerTextSidePanelElement);

let instance$5 = null;
function getCss$4() {
    return instance$5 || (instance$5 = [...[getCss$J()], css `:host{--viewer-pdf-toolbar-height:56px;position:relative}:host([more-menu-open_]) #more{background-color:var(--active-button-bg);border-radius:50%}#toolbar{align-items:center;background-color:var(--viewer-pdf-toolbar-background-color);color:white;display:flex;height:var(--viewer-pdf-toolbar-height);padding:0 16px}#title{font-size:0.87rem;font-weight:500;margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#actionMenuTrigger{margin-inline-end:6px}#start{align-items:center;display:flex;overflow:hidden;padding-inline-end:20px}#start,#end{flex:1}#center{align-items:center;display:flex}#end{align-items:center;display:flex;justify-content:flex-end;padding-inline-start:20px;text-align:end;white-space:nowrap}.vertical-separator{background:rgba(255,255,255,0.3);height:20px;width:1px}#zoom-controls{align-items:center;display:flex;padding:0 4px}#zoom-controls input::selection{background-color:var(--viewer-text-input-selection-color)}@media (max-width:600px){#title,#zoom-controls input{display:none}}@media (max-width:500px){#start,#fit{display:none}}@media (max-width:420px){#center{display:none}#end{padding-inline-start:initial;text-align:center}}viewer-page-selector{display:inline-flex;height:36px;margin-inline-end:20px}viewer-page-selector::part(input),input{max-height:var(--viewer-pdf-toolbar-height)}input{background:rgba(0,0,0,0.5);border:none;caret-color:currentColor;color:inherit;font-family:inherit;line-height:inherit;margin:0 4px;outline:none;padding:0 4px;text-align:center;width:5ch}#fit{margin-inline-start:12px}cr-progress{--cr-progress-active-color:var(--google-blue-300);--cr-progress-container-color:transparent;--cr-progress-height:3px;bottom:0;position:absolute;width:100%}cr-progress,#center,#end{transition:opacity 100ms cubic-bezier(0,0,0.2,1)}cr-progress,:host([loading_]) #menuButton,:host([loading_]) #center,:host([loading_]) #end{opacity:0;visibility:hidden}:host([loading_]) cr-progress,#menuButton,#center,#end{opacity:1;visibility:visible}#glic-controls{align-items:center;display:flex}#glic-controls .vertical-separator{margin-inline:6px}#glic-controls cr-icon{margin-bottom:1px}#glic-summarize-button{--cr-button-text-color:#e3e3e3;--cr-focus-outline-color:var(--viewer-icon-focus-outline-color);--cr-hover-background-color:rgba(253,252,251,0.10);border:none;font-weight:400;gap:4px;height:32px;margin-left:2px;padding-inline-end:12px;padding-inline-start:8px}.annotate-button.active{background-color:var(--active-button-bg);border-radius:50%}#annotate-controls{align-items:center;display:flex;margin-inline-start:6px}#annotate-controls .annotate-button.active{--cr-icon-button-fill-color:var(--viewer-icon-ink-selected-fill-color)}#annotate-controls .vertical-separator{margin-inline:6px}viewer-download-controls::part(button),#print,#more{margin-inline-start:4px}.dropdown-item{padding-inline-end:16px;padding-inline-start:12px}.check-container{margin-inline-end:12px;width:16px}cr-action-menu hr{border:none;border-top:var(--cr-separator-line)}`]);
}

function getHtml$3() {
    return html `<!--_html_template_start_--><!-- #html_wrapper_imports_start

import {AnnotationMode} from '../constants.js';

#html_wrapper_imports_end -->

<div id="toolbar">
  <div id="start">
    <cr-icon-button id="sidenavToggle" iron-icon="pdf:menu"
        title="$i18n{sidebarLabel}" aria-label="$i18n{sidebarLabel}"
        aria-expanded="${this.getAriaExpanded_()}"
        @click="${this.onSidenavToggleClick_}">
    </cr-icon-button>
    <span id="title">${this.docTitle}</span>
  </div>
  <div id="center">
    <viewer-page-selector .docLength="${this.docLength}"
        .pageNo="${this.pageNo}">
    </viewer-page-selector>
    <span class="vertical-separator"></span>
    <span id="zoom-controls">
      <cr-icon-button
          iron-icon="pdf:remove"
          title="$i18n{tooltipZoomOut}"
          ?disabled="${this.isAtMinimumZoom_()}"
          aria-label="$i18n{tooltipZoomOut}" @click="${this.onZoomOutClick_}">
      </cr-icon-button>
      <input type="text" value="100%"
          aria-label="$i18n{zoomTextInputAriaLabel}"
          @change="${this.onZoomChange_}"
          @pointerup="${this.onZoomInputPointerup_}"
          @blur="${this.onZoomBlur_}">
      </input>
      <cr-icon-button
          iron-icon="pdf:add"
          title="$i18n{tooltipZoomIn}"
          ?disabled="${this.isAtMaximumZoom_()}"
          aria-label="$i18n{tooltipZoomIn}" @click="${this.onZoomInClick_}">
      </cr-icon-button>
    </span>
    <span class="vertical-separator"></span>
    <cr-icon-button id="fit" .ironIcon="${this.fitToButtonIcon_()}"
        title="${this.getFitToButtonTooltip_()}"
        aria-label="${this.getFitToButtonTooltip_()}"
        @click="${this.onFitToButtonClick_}">
    </cr-icon-button>
    <cr-icon-button id="rotate" iron-icon="pdf:rotate-90-degrees-ccw"
        suppress-rtl-flip
        aria-label="$i18n{tooltipRotateCCW}" title="$i18n{tooltipRotateCCW}"
        @click="${this.onRotateClick_}">
    </cr-icon-button>

    ${this.showInk2Buttons_() ? html `
      <span id="annotate-controls">
        <span class="vertical-separator"></span>
        ${this.pdfTextAnnotationsEnabled_ ? html `
          <cr-icon-button id="text-annotate" iron-icon="pdf-ink:text-fields"
              class="annotate-button ${this.getActive_(AnnotationMode.TEXT)}"
              @click="${this.onTextAnnotationClick_}"
              ?disabled="${!this.annotationAvailable}"
              aria-pressed="${this.getAriaPressed_(AnnotationMode.TEXT)}"
              aria-label="$i18n{ink2TextAnnotation}"
              title="$i18n{ink2TextAnnotation}">
          </cr-icon-button>
        ` : ''}
        <cr-icon-button id="annotate" iron-icon="pdf-ink:gesture"
            class="annotate-button ${this.getActive_(AnnotationMode.DRAW)}"
            @click="${this.onAnnotationClick_}"
            ?disabled="${!this.annotationAvailable}"
            aria-pressed="${this.getAriaPressed_(AnnotationMode.DRAW)}"
            aria-label="$i18n{ink2Draw}"
            title="$i18n{ink2Draw}"></cr-icon-button>
        ${this.pdfSignaturesEnabled_ ? html `
          <cr-icon-button id="signature" iron-icon="pdf-ink:signature"
              class="annotate-button ${this.getActive_(AnnotationMode.SIGNATURE)}"
              @click="${this.onSignatureClick_}"
              ?disabled="${!this.annotationAvailable}"
              aria-pressed="${this.getAriaPressed_(AnnotationMode.SIGNATURE)}"
              aria-label="$i18n{ink2Signature}"
              title="$i18n{ink2Signature}">
          </cr-icon-button>
        ` : ''}
        <span class="vertical-separator"></span>
        <cr-icon-button id="undo" ?disabled="${!this.computeEnableUndo_()}"
            iron-icon="pdf:undo"
            @click="${this.onUndoClick_}"
            aria-label="$i18n{annotationUndo}"
            title="$i18n{annotationUndo}"></cr-icon-button>
        <cr-icon-button id="redo" ?disabled="${!this.computeEnableRedo_()}"
            iron-icon="pdf:redo"
            @click="${this.onRedoClick_}"
            aria-label="$i18n{annotationRedo}"
            title="$i18n{annotationRedo}"></cr-icon-button>
      </span>` : ''}

    ${this.pdfGlicSummarizeEnabled_ ? html `
    <span id="glic-controls">
      <span class="vertical-separator"></span>
      <cr-button id="glic-summarize-button"
          aria-label="$i18n{glicSummarize}"
          title="$i18n{glicSummarizeTooltip}"
          @click="${this.onGlicSummarizeClick_}">
        <cr-icon slot="prefix-icon" icon="pdf-glic:summarize-auto-2"></cr-icon>
        $i18n{glicSummarize}
      </cr-button>
    </span>` : ''}
  </div>
  <div id="end">

    ${this.pdfSaveToDriveEnabled ? html `
    <viewer-save-to-drive-controls id="save-to-drive"
        .hasEdits="${this.hasEdits}"

        .hasInk2Edits="${this.hasInk2Edits}"

        .isFormFieldFocused="${this.isFormFieldFocused_()}"
        .progress="${this.saveToDriveProgress}"
        .state="${this.saveToDriveState}">
    </viewer-save-to-drive-controls>` : ''}

    <viewer-download-controls id="downloads"
        .hasEdits="${this.hasEdits}"

        .hasInk2Edits="${this.hasInk2Edits}"

        .isFormFieldFocused="${this.isFormFieldFocused_()}">
    </viewer-download-controls>
    <cr-icon-button id="print" iron-icon="pdf:print"
        ?hidden="${!this.printingEnabled_}" title="$i18n{tooltipPrint}"
        aria-label="$i18n{tooltipPrint}" @click="${this.onPrintClick_}">
    </cr-icon-button>
    <cr-icon-button id="more" iron-icon="pdf:more-vert"
        title="$i18n{moreActions}" aria-label="$i18n{moreActions}"
        @click="${this.onMoreClick_}"></cr-icon-button>
  </div>
</div>
<cr-progress id="progress" .value="${this.loadProgress}"
    ?hidden="${!this.loading_}">
</cr-progress>

<cr-action-menu id="menu" @open-changed="${this.onMoreOpenChanged_}">
  <button id="twoPageViewButton" class="dropdown-item"
      @click="${this.onTwoPageViewClick_}" role="checkbox"
      aria-checked="${this.getAriaChecked_(this.twoUpViewEnabled)}">
    <span class="check-container">
      <cr-icon icon="pdf:check-small"
          ?hidden="${!this.twoUpViewEnabled}"></cr-icon>
    </span>
    $i18n{twoUpViewEnable}
  </button>

  <button id="show-annotations-button"
      class="dropdown-item" @click="${this.onDisplayAnnotationsClick_}"
      role="checkbox"
      aria-checked="${this.getAriaChecked_(this.displayAnnotations_)}">
    <span class="check-container">
      <cr-icon icon="pdf:check-small"
          ?hidden="${!this.displayAnnotations_}">
      </cr-icon>
    </span>
    $i18n{annotationsShowToggle}
  </button>

  <hr>

  <button id="presentButton" class="dropdown-item"
      @click="${this.onPresentClick_}"
      ?disabled="${!this.presentationModeAvailable_()}">
    <span class="check-container" aria-hidden="true"></span>
    $i18n{present}
  </button>

  <button id="properties-button" class="dropdown-item"
      @click="${this.onPropertiesClick_}">
    <span class="check-container" aria-hidden="true"></span>
    $i18n{propertiesDialogTitle}
  </button>
</cr-action-menu>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class ViewerToolbarElement extends CrLitElement {
    static get is() {
        return 'viewer-toolbar';
    }
    static get styles() {
        return getCss$4();
    }
    render() {
        return getHtml$3.bind(this)();
    }
    static get properties() {
        return {
            docTitle: { type: String },
            docLength: { type: Number },
            embeddedViewer: { type: Boolean },
            hasEdits: { type: Boolean },
            formFieldFocus: { type: String },
            loadProgress: { type: Number },
            loading_: {
                type: Boolean,
                reflect: true,
            },
            pageNo: { type: Number },
            rotated: { type: Boolean },
            strings: { type: Object },
            viewportZoom: { type: Number },
            zoomBounds: { type: Object },
            sidenavCollapsed: { type: Boolean },
            twoUpViewEnabled: { type: Boolean },
            moreMenuOpen_: {
                type: Boolean,
                reflect: true,
            },
            displayAnnotations_: { type: Boolean },
            fittingType_: { type: String },
            printingEnabled_: { type: Boolean },
            viewportZoomPercent_: { type: Number },
            pdfGlicSummarizeEnabled_: { type: Boolean },
            // 
            annotationAvailable: { type: Boolean },
            annotationMode: {
                type: String,
                reflect: true,
            },
            enableUndoRedo: { type: Boolean },
            hasInk2Edits: { type: Boolean },
            pdfInk2Enabled: { type: Boolean },
            shouldEnableRedo_: { type: Boolean },
            shouldEnableUndo_: { type: Boolean },
            pdfSignaturesEnabled_: { type: Boolean },
            pdfTextAnnotationsEnabled_: { type: Boolean },
            //  enable_pdf_ink2
            // 
            pdfSaveToDriveEnabled: { type: Boolean },
            saveToDriveProgress: { type: Number },
            saveToDriveState: { type: String },
            //  enable_pdf_save_to_drive
        };
    }
    #docTitle_accessor_storage = '';
    get docTitle() { return this.#docTitle_accessor_storage; }
    set docTitle(value) { this.#docTitle_accessor_storage = value; }
    #docLength_accessor_storage = 0;
    get docLength() { return this.#docLength_accessor_storage; }
    set docLength(value) { this.#docLength_accessor_storage = value; }
    #embeddedViewer_accessor_storage = false;
    get embeddedViewer() { return this.#embeddedViewer_accessor_storage; }
    set embeddedViewer(value) { this.#embeddedViewer_accessor_storage = value; }
    #hasEdits_accessor_storage = false;
    get hasEdits() { return this.#hasEdits_accessor_storage; }
    set hasEdits(value) { this.#hasEdits_accessor_storage = value; }
    #formFieldFocus_accessor_storage = FormFieldFocusType.NONE;
    get formFieldFocus() { return this.#formFieldFocus_accessor_storage; }
    set formFieldFocus(value) { this.#formFieldFocus_accessor_storage = value; }
    #loadProgress_accessor_storage = 0;
    get loadProgress() { return this.#loadProgress_accessor_storage; }
    set loadProgress(value) { this.#loadProgress_accessor_storage = value; }
    #pageNo_accessor_storage = 0;
    get pageNo() { return this.#pageNo_accessor_storage; }
    set pageNo(value) { this.#pageNo_accessor_storage = value; }
    #rotated_accessor_storage = false;
    get rotated() { return this.#rotated_accessor_storage; }
    set rotated(value) { this.#rotated_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    #viewportZoom_accessor_storage = 0;
    get viewportZoom() { return this.#viewportZoom_accessor_storage; }
    set viewportZoom(value) { this.#viewportZoom_accessor_storage = value; }
    #zoomBounds_accessor_storage = { min: 0, max: 0 };
    get zoomBounds() { return this.#zoomBounds_accessor_storage; }
    set zoomBounds(value) { this.#zoomBounds_accessor_storage = value; }
    #sidenavCollapsed_accessor_storage = false;
    get sidenavCollapsed() { return this.#sidenavCollapsed_accessor_storage; }
    set sidenavCollapsed(value) { this.#sidenavCollapsed_accessor_storage = value; }
    #twoUpViewEnabled_accessor_storage = false;
    get twoUpViewEnabled() { return this.#twoUpViewEnabled_accessor_storage; }
    set twoUpViewEnabled(value) { this.#twoUpViewEnabled_accessor_storage = value; }
    #displayAnnotations__accessor_storage = true;
    get displayAnnotations_() { return this.#displayAnnotations__accessor_storage; }
    set displayAnnotations_(value) { this.#displayAnnotations__accessor_storage = value; }
    #fittingType__accessor_storage = FittingType.FIT_TO_PAGE;
    get fittingType_() { return this.#fittingType__accessor_storage; }
    set fittingType_(value) { this.#fittingType__accessor_storage = value; }
    #moreMenuOpen__accessor_storage = false;
    get moreMenuOpen_() { return this.#moreMenuOpen__accessor_storage; }
    set moreMenuOpen_(value) { this.#moreMenuOpen__accessor_storage = value; }
    #loading__accessor_storage = true;
    get loading_() { return this.#loading__accessor_storage; }
    set loading_(value) { this.#loading__accessor_storage = value; }
    #printingEnabled__accessor_storage = false;
    get printingEnabled_() { return this.#printingEnabled__accessor_storage; }
    set printingEnabled_(value) { this.#printingEnabled__accessor_storage = value; }
    #viewportZoomPercent__accessor_storage = 0;
    get viewportZoomPercent_() { return this.#viewportZoomPercent__accessor_storage; }
    set viewportZoomPercent_(value) { this.#viewportZoomPercent__accessor_storage = value; }
    #pdfGlicSummarizeEnabled__accessor_storage = false;
    get pdfGlicSummarizeEnabled_() { return this.#pdfGlicSummarizeEnabled__accessor_storage; }
    set pdfGlicSummarizeEnabled_(value) { this.#pdfGlicSummarizeEnabled__accessor_storage = value; }
    #pdfSaveToDriveEnabled_accessor_storage = false;
    // 
    get pdfSaveToDriveEnabled() { return this.#pdfSaveToDriveEnabled_accessor_storage; }
    set pdfSaveToDriveEnabled(value) { this.#pdfSaveToDriveEnabled_accessor_storage = value; }
    #saveToDriveProgress_accessor_storage = 0;
    get saveToDriveProgress() { return this.#saveToDriveProgress_accessor_storage; }
    set saveToDriveProgress(value) { this.#saveToDriveProgress_accessor_storage = value; }
    #saveToDriveState_accessor_storage = SaveToDriveState.UNINITIALIZED;
    get saveToDriveState() { return this.#saveToDriveState_accessor_storage; }
    set saveToDriveState(value) { this.#saveToDriveState_accessor_storage = value; }
    #annotationAvailable_accessor_storage = false;
    //  enable_pdf_save_to_drive
    // 
    // Ink2 reactive properties
    get annotationAvailable() { return this.#annotationAvailable_accessor_storage; }
    set annotationAvailable(value) { this.#annotationAvailable_accessor_storage = value; }
    #annotationMode_accessor_storage = AnnotationMode.OFF;
    get annotationMode() { return this.#annotationMode_accessor_storage; }
    set annotationMode(value) { this.#annotationMode_accessor_storage = value; }
    #enableUndoRedo_accessor_storage = true;
    get enableUndoRedo() { return this.#enableUndoRedo_accessor_storage; }
    set enableUndoRedo(value) { this.#enableUndoRedo_accessor_storage = value; }
    #hasInk2Edits_accessor_storage = false;
    get hasInk2Edits() { return this.#hasInk2Edits_accessor_storage; }
    set hasInk2Edits(value) { this.#hasInk2Edits_accessor_storage = value; }
    #pdfInk2Enabled_accessor_storage = false;
    get pdfInk2Enabled() { return this.#pdfInk2Enabled_accessor_storage; }
    set pdfInk2Enabled(value) { this.#pdfInk2Enabled_accessor_storage = value; }
    #shouldEnableRedo__accessor_storage = false;
    get shouldEnableRedo_() { return this.#shouldEnableRedo__accessor_storage; }
    set shouldEnableRedo_(value) { this.#shouldEnableRedo__accessor_storage = value; }
    #shouldEnableUndo__accessor_storage = false;
    get shouldEnableUndo_() { return this.#shouldEnableUndo__accessor_storage; }
    set shouldEnableUndo_(value) { this.#shouldEnableUndo__accessor_storage = value; }
    #pdfSignaturesEnabled__accessor_storage = false;
    get pdfSignaturesEnabled_() { return this.#pdfSignaturesEnabled__accessor_storage; }
    set pdfSignaturesEnabled_(value) { this.#pdfSignaturesEnabled__accessor_storage = value; }
    #pdfTextAnnotationsEnabled__accessor_storage = false;
    get pdfTextAnnotationsEnabled_() { return this.#pdfTextAnnotationsEnabled__accessor_storage; }
    set pdfTextAnnotationsEnabled_(value) { this.#pdfTextAnnotationsEnabled__accessor_storage = value; }
    // Ink2 class members
    canUndo_ = false;
    canRedo_ = false;
    pluginController_ = PluginController.getInstance();
    strokeInProgress_ = false;
    tracker_ = new EventTracker();
    constructor() {
        super();
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.FINISH_INK_STROKE, this.handleFinishInkStroke_.bind(this));
        this.tracker_.add(this.pluginController_.getEventTarget(), PluginControllerEventType.START_INK_STROKE, this.handleStartInkStroke_.bind(this));
        this.tracker_.add(Ink2Manager.getInstance(), 'undo-redo-state-changed', this.handleUndoRedoStateChanged_.bind(this));
    }
    //  enable_pdf_ink2
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('loadProgress')) {
            this.loading_ = this.loadProgress < 100;
        }
        if (changedProperties.has('strings') && this.strings) {
            this.updateLoadTimeData_();
        }
        if (changedProperties.has('viewportZoom')) {
            this.viewportZoomPercent_ = Math.round(100 * this.viewportZoom);
        }
        // 
        if (changedProperties.has('formFieldFocus')) {
            this.updateCanUndoRedo_();
        }
        // 
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // viewportZoomPercent_ always updates with viewportZoom, see above.
        if (changedProperties.has('viewportZoom')) {
            this.getZoomInput_().value = `${this.viewportZoomPercent_}%`;
        }
    }
    updateLoadTimeData_() {
        this.printingEnabled_ = loadTimeData.getBoolean('printingEnabled');
        this.pdfGlicSummarizeEnabled_ =
            loadTimeData.getBoolean('pdfGlicSummarizeEnabled');
        // 
        this.pdfSignaturesEnabled_ =
            loadTimeData.getBoolean('pdfSignaturesEnabled');
        this.pdfTextAnnotationsEnabled_ =
            loadTimeData.getBoolean('pdfTextAnnotationsEnabled');
        // 
    }
    onSidenavToggleClick_() {
        record(UserAction.TOGGLE_SIDENAV);
        this.dispatchEvent(new CustomEvent('sidenav-toggle-click'));
    }
    fitToButtonIcon_() {
        return 'pdf' +
            (this.fittingType_ === FittingType.FIT_TO_PAGE ? ':fit-page-height' :
                ':fit-page-width');
    }
    /** @return The appropriate tooltip for the current state. */
    getFitToButtonTooltip_() {
        if (!this.strings) {
            return '';
        }
        return loadTimeData.getString(this.fittingType_ === FittingType.FIT_TO_PAGE ? 'tooltipFitToPage' :
            'tooltipFitToWidth');
    }
    onGlicSummarizeClick_() {
        this.fire('glic-summarize');
    }
    // 
    showInk2Buttons_() {
        return this.pdfInk2Enabled;
    }
    // 
    onPrintClick_() {
        this.dispatchEvent(new CustomEvent('print'));
    }
    onRotateClick_() {
        this.dispatchEvent(new CustomEvent('rotate-left'));
    }
    onDisplayAnnotationsClick_() {
        record(UserAction.TOGGLE_DISPLAY_ANNOTATIONS);
        this.displayAnnotations_ = !this.displayAnnotations_;
        this.dispatchEvent(new CustomEvent('display-annotations-changed', { detail: this.displayAnnotations_ }));
        this.$.menu.close();
    }
    onPresentClick_() {
        record(UserAction.PRESENT);
        this.$.menu.close();
        this.dispatchEvent(new CustomEvent('present-click'));
    }
    onPropertiesClick_() {
        record(UserAction.PROPERTIES);
        this.$.menu.close();
        this.dispatchEvent(new CustomEvent('properties-click'));
    }
    getAriaChecked_(checked) {
        return checked ? 'true' : 'false';
    }
    getAriaExpanded_() {
        return this.sidenavCollapsed ? 'false' : 'true';
    }
    onTwoPageViewClick_() {
        const newTwoUpViewEnabled = !this.twoUpViewEnabled;
        this.dispatchEvent(new CustomEvent('two-up-view-changed', { detail: newTwoUpViewEnabled }));
        this.$.menu.close();
    }
    onZoomInClick_() {
        this.dispatchEvent(new CustomEvent('zoom-in'));
    }
    onZoomOutClick_() {
        this.dispatchEvent(new CustomEvent('zoom-out'));
    }
    forceFit(fittingType) {
        // The fitting type is the new state. We want to set the button fitting type
        // to the opposite value.
        this.fittingType_ = fittingType === FittingType.FIT_TO_WIDTH ?
            FittingType.FIT_TO_PAGE :
            FittingType.FIT_TO_WIDTH;
    }
    fitToggle() {
        const newState = this.fittingType_ === FittingType.FIT_TO_PAGE ?
            FittingType.FIT_TO_WIDTH :
            FittingType.FIT_TO_PAGE;
        this.dispatchEvent(new CustomEvent('fit-to-changed', { detail: this.fittingType_ }));
        this.fittingType_ = newState;
    }
    onFitToButtonClick_() {
        this.fitToggle();
    }
    getZoomInput_() {
        return this.shadowRoot.querySelector('#zoom-controls input');
    }
    onZoomBlur_() {
        this.onZoomChange_();
    }
    onZoomChange_() {
        const input = this.getZoomInput_();
        let value = Number.parseInt(input.value, 10);
        value = Math.max(Math.min(value, this.zoomBounds.max), this.zoomBounds.min);
        if (this.sendZoomChanged_(value)) {
            return;
        }
        const zoomString = `${this.viewportZoomPercent_}%`;
        input.value = zoomString;
    }
    /**
     * @param value The new zoom value
     * @return Whether the zoom-changed event was sent.
     */
    sendZoomChanged_(value) {
        if (Number.isNaN(value)) {
            return false;
        }
        // The viewport can have non-integer zoom values.
        if (Math.abs(this.viewportZoom * 100 - value) < 0.5) {
            return false;
        }
        this.dispatchEvent(new CustomEvent('zoom-changed', { detail: value }));
        return true;
    }
    onZoomInputPointerup_(e) {
        e.target.select();
    }
    onMoreClick_() {
        const anchor = this.shadowRoot.querySelector('#more');
        this.$.menu.showAt(anchor, {
            anchorAlignmentX: AnchorAlignment.CENTER,
            anchorAlignmentY: AnchorAlignment.AFTER_END,
            noOffset: true,
        });
    }
    onMoreOpenChanged_(e) {
        this.moreMenuOpen_ = e.detail.value;
    }
    isAtMinimumZoom_() {
        return this.zoomBounds !== undefined &&
            this.viewportZoomPercent_ === this.zoomBounds.min;
    }
    isAtMaximumZoom_() {
        return this.zoomBounds !== undefined &&
            this.viewportZoomPercent_ === this.zoomBounds.max;
    }
    // 
    // Gets a CSS class of "active" if `mode` is the active annotation mode.
    getActive_(mode) {
        return mode === this.annotationMode ? 'active' : '';
    }
    // Returns true if the button is toggled on, false otherwise.
    getAriaPressed_(mode) {
        return mode === this.annotationMode ? 'true' : 'false';
    }
    onAnnotationClick_() {
        assert(this.pdfInk2Enabled);
        const newAnnotationMode = this.annotationMode === AnnotationMode.DRAW ?
            AnnotationMode.OFF :
            AnnotationMode.DRAW;
        this.setAnnotationMode(newAnnotationMode);
    }
    setAnnotationMode(annotationMode) {
        assert(this.pdfInk2Enabled);
        this.dispatchEvent(new CustomEvent('annotation-mode-updated', { detail: annotationMode }));
    }
    //  enable_pdf_ink2
    // 
    onTextAnnotationClick_() {
        this.setAnnotationMode(this.annotationMode === AnnotationMode.TEXT ? AnnotationMode.OFF :
            AnnotationMode.TEXT);
    }
    onSignatureClick_() {
        this.setAnnotationMode(this.annotationMode === AnnotationMode.SIGNATURE ?
            AnnotationMode.OFF :
            AnnotationMode.SIGNATURE);
    }
    /**
     * Handles when the user starts a stroke. While the stroke is in progress,
     * disallow undo/redo operations.
     */
    handleStartInkStroke_() {
        this.strokeInProgress_ = true;
    }
    /**
     * Handles when the user finishes a stroke, so that undo/redo operations can
     * can be allowed if available. This event also fires for eraser operations.
     */
    handleFinishInkStroke_() {
        this.strokeInProgress_ = false;
    }
    computeEnableUndo_() {
        return this.shouldEnableUndo_ && !this.strokeInProgress_ &&
            this.enableUndoRedo;
    }
    computeEnableRedo_() {
        return this.shouldEnableRedo_ && !this.strokeInProgress_ &&
            this.enableUndoRedo;
    }
    onUndoClick_() {
        this.undo();
    }
    /**
     * Undo an annotation stroke, if possible.
     */
    undo() {
        if (!this.computeEnableUndo_()) {
            return;
        }
        assert(this.formFieldFocus !== FormFieldFocusType.TEXT);
        Ink2Manager.getInstance().undo();
        getInstance().announce(loadTimeData.getString('ink2AnnotationUndone'));
        record(UserAction.UNDO_INK2);
    }
    onRedoClick_() {
        this.redo();
    }
    /**
     * Redo an annotation stroke, if possible.
     */
    redo() {
        if (!this.computeEnableRedo_()) {
            return;
        }
        assert(this.formFieldFocus !== FormFieldFocusType.TEXT);
        Ink2Manager.getInstance().redo();
        getInstance().announce(loadTimeData.getString('ink2AnnotationRedone'));
        record(UserAction.REDO_INK2);
    }
    /**
     * Update whether the undo and redo buttons should be enabled or disabled.
     * Both buttons should be disabled when a text form field has focus. Undo and
     * redo should be disabled when there are no possible undo and redo actions
     * respectively.
     */
    updateCanUndoRedo_() {
        const isTextFormFieldFocused = this.formFieldFocus === FormFieldFocusType.TEXT;
        this.shouldEnableUndo_ = !isTextFormFieldFocused && this.canUndo_;
        this.shouldEnableRedo_ = !isTextFormFieldFocused && this.canRedo_;
    }
    handleUndoRedoStateChanged_(e) {
        this.canUndo_ = e.detail.canUndo;
        this.canRedo_ = e.detail.canRedo;
        this.updateCanUndoRedo_();
    }
    // 
    isFormFieldFocused_() {
        return this.formFieldFocus !== FormFieldFocusType.NONE;
    }
    /**
     * Updates the toolbar's presentation mode available flag depending on current
     * conditions.
     */
    presentationModeAvailable_() {
        return !this.embeddedViewer;
    }
    // 
    getSaveToDriveBubbleAnchor() {
        const anchor = this.shadowRoot.querySelector('#save-to-drive');
        assert(anchor);
        return anchor;
    }
}
customElements.define(ViewerToolbarElement.is, ViewerToolbarElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LocalStorageProxyImpl {
    getItem(key) {
        return window.localStorage ? window.localStorage.getItem(key) : null;
    }
    setItem(key, value) {
        if (window.localStorage) {
            window.localStorage.setItem(key, value);
        }
    }
    static getInstance() {
        return instance$4 || (instance$4 = new LocalStorageProxyImpl());
    }
    static setInstance(obj) {
        instance$4 = obj;
    }
}
let instance$4 = null;

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// NavigatorDelegate for calling browser-specific functions to do the actual
// navigating.
class NavigatorDelegateImpl {
    browserApi_;
    constructor(browserApi) {
        this.browserApi_ = browserApi;
    }
    navigateInCurrentTab(url) {
        this.browserApi_.navigateInCurrentTab(url);
    }
    navigateInNewTab(url, active) {
        // Prefer the tabs API because it guarantees we can just open a new tab.
        // window.open doesn't have this guarantee.
        if (chrome.tabs) {
            chrome.tabs.create({ url: url, active: active });
        }
        else {
            window.open(url);
        }
    }
    navigateInNewWindow(url) {
        // Prefer the windows API because it guarantees we can just open a new
        // window. window.open with '_blank' argument doesn't have this guarantee.
        if (chrome.windows) {
            chrome.windows.create({ url: url });
        }
        else {
            window.open(url, '_blank');
        }
    }
    isAllowedLocalFileAccess(url) {
        return new Promise(resolve => {
            chrome.pdfViewerPrivate.isAllowedLocalFileAccess(url, result => resolve(result));
        });
    }
}
// Navigator for navigating to links inside or outside the PDF.
class PdfNavigatorImpl {
    originalUrl_ = null;
    viewport_;
    paramsParser_;
    navigatorDelegate_;
    /**
     * @param originalUrl The original page URL.
     * @param viewport The viewport info of the page.
     * @param paramsParser The object for URL parsing.
     * @param navigatorDelegate The object with callback functions that get called
     *    when navigation happens in the current tab, a new tab, and a new window.
     */
    constructor(originalUrl, viewport, paramsParser, navigatorDelegate) {
        try {
            this.originalUrl_ = new URL(originalUrl);
        }
        catch (err) {
            console.warn('Invalid original URL');
        }
        this.viewport_ = viewport;
        this.paramsParser_ = paramsParser;
        this.navigatorDelegate_ = navigatorDelegate;
    }
    /**
     * Function to navigate to the given URL. This might involve navigating
     * within the PDF page or opening a new url (in the same tab or a new tab).
     * @param disposition The window open disposition when navigating to the new
     *     URL.
     * @return When navigation has completed (used for testing).
     */
    async navigate(urlString, disposition) {
        if (urlString.length === 0) {
            return Promise.resolve();
        }
        // If |urlFragment| starts with '#', then it's for the same URL with a
        // different URL fragment.
        if (urlString[0] === '#' && this.originalUrl_) {
            // if '#' is already present in |originalUrl| then remove old fragment
            // and add new url fragment.
            const newUrl = new URL(this.originalUrl_.href);
            newUrl.hash = urlString;
            urlString = newUrl.href;
        }
        // If there's no scheme, then take a guess at the scheme.
        if (!urlString.includes('://') && !urlString.includes('mailto:')) {
            urlString = await this.guessUrlWithoutScheme_(urlString);
        }
        let url = null;
        try {
            url = new URL(urlString);
        }
        catch (err) {
            return Promise.reject(err);
        }
        if (!(await this.isValidUrl_(url))) {
            return Promise.resolve();
        }
        let whenDone = Promise.resolve();
        switch (disposition) {
            case WindowOpenDisposition.CURRENT_TAB:
                whenDone = this.paramsParser_.getViewportFromUrlParams(url.href).then(this.onViewportReceived_.bind(this));
                break;
            case WindowOpenDisposition.NEW_BACKGROUND_TAB:
                this.navigatorDelegate_.navigateInNewTab(url.href, false);
                break;
            case WindowOpenDisposition.NEW_FOREGROUND_TAB:
                this.navigatorDelegate_.navigateInNewTab(url.href, true);
                break;
            case WindowOpenDisposition.NEW_WINDOW:
                this.navigatorDelegate_.navigateInNewWindow(url.href);
                break;
            case WindowOpenDisposition.SAVE_TO_DISK:
                // TODO(jaepark): Alt + left clicking a link in PDF should
                // download the link.
                whenDone = this.paramsParser_.getViewportFromUrlParams(url.href).then(this.onViewportReceived_.bind(this));
                break;
        }
        return whenDone;
    }
    /**
     * Called when the viewport position is received.
     * @param viewportPosition Dictionary containing the viewport
     *    position.
     */
    onViewportReceived_(viewportPosition) {
        let newUrl = null;
        try {
            newUrl = new URL(viewportPosition.url);
        }
        catch (err) {
        }
        const pageIndex = viewportPosition.pageIndex;
        if (pageIndex !== undefined && this.originalUrl_ && newUrl &&
            this.originalUrl_.origin === newUrl.origin &&
            this.originalUrl_.pathname === newUrl.pathname) {
            this.viewport_.goToPage(pageIndex);
        }
        else {
            this.navigatorDelegate_.navigateInCurrentTab(viewportPosition.url);
        }
    }
    /**
     * Checks if the URL starts with a scheme and is not just a scheme.
     */
    async isValidUrl_(url) {
        // Make sure |url| starts with a valid scheme.
        const validSchemes = ['http:', 'https:', 'ftp:', 'file:', 'mailto:'];
        if (!validSchemes.includes(url.protocol)) {
            return false;
        }
        // Navigations to file:-URLs are only allowed from file:-URLs or allowlisted
        // domains.
        if (url.protocol === 'file:' && this.originalUrl_ &&
            this.originalUrl_.protocol !== 'file:') {
            return this.navigatorDelegate_.isAllowedLocalFileAccess(this.originalUrl_.toString());
        }
        return true;
    }
    /**
     * Attempt to figure out what a URL is when there is no scheme.
     * @return The URL with a scheme or the original URL if it is not
     *     possible to determine the scheme.
     */
    async guessUrlWithoutScheme_(url) {
        // If the original URL is mailto:, that does not make sense to start with,
        // and neither does adding |url| to it.
        // If the original URL is not a valid URL, this cannot make a valid URL.
        // In both cases, just bail out.
        if (!this.originalUrl_ || this.originalUrl_.protocol === 'mailto:' ||
            !(await this.isValidUrl_(this.originalUrl_))) {
            return url;
        }
        // Check for absolute paths.
        if (url.startsWith('/')) {
            return this.originalUrl_.origin + url;
        }
        // Check for other non-relative paths.
        // In Adobe Acrobat Reader XI, it looks as though links with less than
        // 2 dot separators in the domain are considered relative links, and
        // those with 2 or more are considered http URLs. e.g.
        //
        // www.foo.com/bar -> http
        // foo.com/bar -> relative link
        if (url.startsWith('\\')) {
            // Prepend so that the relative URL will be correctly computed by new
            // URL() below.
            url = './' + url;
        }
        if (!url.startsWith('.')) {
            const domainSeparatorIndex = url.indexOf('/');
            const domainName = domainSeparatorIndex === -1 ?
                url :
                url.substr(0, domainSeparatorIndex);
            const domainDotCount = (domainName.match(/\./g) || []).length;
            if (domainDotCount >= 2) {
                return 'http://' + url;
            }
        }
        return new URL(url, this.originalUrl_.href).href;
    }
}
/**
 * Represents options when navigating to a new url. C++ counterpart of
 * the enum is in ui/base/window_open_disposition.h. This enum represents
 * the only values that are passed from Plugin.
 */
var WindowOpenDisposition;
(function (WindowOpenDisposition) {
    WindowOpenDisposition[WindowOpenDisposition["CURRENT_TAB"] = 1] = "CURRENT_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_FOREGROUND_TAB"] = 3] = "NEW_FOREGROUND_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_BACKGROUND_TAB"] = 4] = "NEW_BACKGROUND_TAB";
    WindowOpenDisposition[WindowOpenDisposition["NEW_WINDOW"] = 6] = "NEW_WINDOW";
    WindowOpenDisposition[WindowOpenDisposition["SAVE_TO_DISK"] = 7] = "SAVE_TO_DISK";
})(WindowOpenDisposition || (WindowOpenDisposition = {}));
// Export on |window| such that scripts injected from pdf_extension_test.cc can
// access it.
Object.assign(window, { PdfNavigatorImpl, WindowOpenDisposition });

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSelectableMixin = (superClass) => {
    class CrSelectableMixin extends superClass {
        static get properties() {
            return {
                /**
                 * To use an attribute value of an element for determining `selected`
                 * instead of using the index, set this property to the name of the HTML
                 * attribute.
                 */
                attrForSelected: { type: String },
                /**
                 * Gets or sets the selected value. The default is to use the index of
                 * the selected item. If attrForSelected is set, this is instead the
                 * value of the |attrForSelected| attribute of the selected item.
                 */
                selected: {
                    type: String,
                    notify: true,
                },
                /** Boolean attribute name to set on items that are selected. */
                selectedAttribute: { type: String },
                /**
                 * This is a CSS selector string.  If this is set, only items that match
                 * the CSS selector are selectable.
                 */
                selectable: { type: String },
            };
        }
        #attrForSelected_accessor_storage = null;
        get attrForSelected() { return this.#attrForSelected_accessor_storage; }
        set attrForSelected(value) { this.#attrForSelected_accessor_storage = value; }
        #selectable_accessor_storage;
        get selectable() { return this.#selectable_accessor_storage; }
        set selectable(value) { this.#selectable_accessor_storage = value; }
        #selected_accessor_storage;
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        #selectedAttribute_accessor_storage = null;
        get selectedAttribute() { return this.#selectedAttribute_accessor_storage; }
        set selectedAttribute(value) { this.#selectedAttribute_accessor_storage = value; }
        // Whether to select items when they or their children are clicked. Note:
        // value is only checked in firstUpdated().
        selectOnClick = true;
        items_ = [];
        selectedItem_ = null;
        // Override this method in client code to modify the observation logic,
        // or to turn it off completely. By default it listens for any changes on
        // the first <slot> node in this shadowRoot.
        observeItems() {
            this.getSlot().addEventListener('slotchange', () => this.itemsChanged());
        }
        connectedCallback() {
            super.connectedCallback();
            this.updateItems_();
        }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            if (changedProperties.has('attrForSelected')) {
                if (this.selectedItem_) {
                    assert(this.attrForSelected);
                    const value = this.selectedItem_.getAttribute(this.attrForSelected);
                    assert(value !== null);
                    this.selected = value;
                }
            }
        }
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            if (this.selectOnClick) {
                this.addEventListener('click', e => this.onClick_(e));
            }
            this.observeItems();
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('selected')) {
                this.updateSelectedItem_();
            }
        }
        /**
         * Selects the given value.
         */
        select(value) {
            this.selected = value;
        }
        /**
         * Selects the previous item.
         */
        selectPrevious() {
            const length = this.items_.length;
            let index = length - 1;
            if (this.selected !== undefined) {
                index = ((this.valueToIndex_(this.selected)) - 1 + length) % length;
            }
            this.selected = this.indexToValue_(index);
        }
        /**
         * Selects the next item.
         */
        selectNext() {
            const index = this.selected === undefined ?
                0 :
                (this.valueToIndex_(this.selected) + 1) % this.items_.length;
            this.selected = this.indexToValue_(index);
        }
        getItemsForTest() {
            return this.items_;
        }
        getSlot() {
            const slot = this.shadowRoot.querySelector('slot');
            assert(slot);
            return slot;
        }
        // Override this method in client code to modify this logic, for example to
        // grab children that don't reside in a <slot>.
        queryItems() {
            const selectable = this.selectable === undefined ? '*' : this.selectable;
            return Array.from(this.querySelectorAll(`:scope > ${selectable}`));
        }
        // If overriding queryItems(), override this method to return the list item
        // element matching the CSS selector string |selector|.
        queryMatchingItem(selector) {
            const selectable = this.selectable || '*';
            return this.querySelector(`:scope > :is(${selectable})${selector}`);
        }
        updateItems_() {
            this.items_ = this.queryItems();
            this.items_.forEach((item, index) => item.setAttribute('data-selection-index', index.toString()));
        }
        get selectedItem() {
            return this.selectedItem_;
        }
        updateSelectedItem_() {
            if (!this.items_) {
                return;
            }
            const item = this.selected == null ?
                null :
                this.items_[this.valueToIndex_(this.selected)];
            if (!!item && this.selectedItem_ !== item) {
                this.setItemSelected_(this.selectedItem_, false);
                this.setItemSelected_(item, true);
            }
            else if (!item) {
                this.setItemSelected_(this.selectedItem_, false);
            }
        }
        setItemSelected_(item, isSelected) {
            if (!item) {
                return;
            }
            item.classList.toggle('selected', isSelected);
            if (this.selectedAttribute) {
                item.toggleAttribute(this.selectedAttribute, isSelected);
            }
            this.selectedItem_ = isSelected ? item : null;
            this.fire('iron-' + (isSelected ? 'select' : 'deselect'), { item: item });
        }
        valueToIndex_(value) {
            if (!this.attrForSelected) {
                return Number(value);
            }
            const match = this.queryMatchingItem(`[${this.attrForSelected}="${value}"]`);
            return match ? Number(match.dataset['selectionIndex']) : -1;
        }
        indexToValue_(index) {
            if (!this.attrForSelected) {
                return index.toString();
            }
            const item = this.items_[index];
            if (!item) {
                return index.toString();
            }
            return item.getAttribute(this.attrForSelected) || index.toString();
        }
        itemsChanged() {
            this.updateItems_();
            this.updateSelectedItem_();
            // Let other interested parties know about the change.
            this.fire('iron-items-changed');
        }
        onClick_(e) {
            let element = e.target;
            while (element && element !== this) {
                const idx = this.items_.indexOf(element);
                if (idx >= 0) {
                    const value = this.indexToValue_(idx);
                    assert(value !== null);
                    this.fire('iron-activate', { item: element, selected: value });
                    this.select(value);
                    return;
                }
                element = element.parentNode;
            }
        }
    }
    return CrSelectableMixin;
};

let instance$3 = null;
function getCss$3() {
    return instance$3 || (instance$3 = [...[], css `:host{display:block}:host(:not([show-all]))>::slotted(:not(slot):not(.selected)){display:none !important}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
    return html `<slot></slot>`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * cr-page-selector is a simple implementation of CrSelectableMixin which by
 * default hides any slotted element that is not currently marked as 'selected',
 * since this is usually leveraged to implement a page selector where only the
 * currently selected page is visible.
 *
 * A 'show-all' attribute is exposed which when set causes all slotted
 * elements (selected and non-selected) to be visible at all times, which makes
 * this element useful for more UI use cases, besides the 'page selector' case.
 */
const CrPageSelectorElementBase = CrSelectableMixin(CrLitElement);
class CrPageSelectorElement extends CrPageSelectorElementBase {
    static get is() {
        return 'cr-page-selector';
    }
    static get styles() {
        return getCss$3();
    }
    render() {
        return getHtml$2.bind(this)();
    }
    static get properties() {
        return {
            // Set this property to true to flatten slot items, i.e. to grab elements
            // from slots in this element's light DOM, instead of only items assigned
            // directly to this element's shadow DOM <slot>. This is done by passing
            // {flatten: true} when querying items assigned to the <slot> and by
            // observing slotchange events that bubble to this element instead of only
            // those fired on the shadow DOM <slot>. Note |selectable| is ignored
            // if hasNestedSlots = true; all assignedElements are assumed to be
            // selectable.
            hasNestedSlots: { type: Boolean },
        };
    }
    #hasNestedSlots_accessor_storage = false;
    get hasNestedSlots() { return this.#hasNestedSlots_accessor_storage; }
    set hasNestedSlots(value) { this.#hasNestedSlots_accessor_storage = value; }
    constructor() {
        super();
        // Overridden from CrSelectableMixin, since selecting pages on click does
        // not make sense (only one page is visible at a time, and this can undo
        // a selection set elsewhere).
        this.selectOnClick = false;
    }
    // CrSelectableMixin override for hasNestedSlots = true mode.
    queryItems() {
        return this.hasNestedSlots ?
            Array.from(this.getSlot().assignedElements({ flatten: true })) :
            super.queryItems();
    }
    // CrSelectableMixin override for hasNestedSlots = true mode.
    queryMatchingItem(selector) {
        if (this.hasNestedSlots) {
            const match = this.queryItems().find(el => el.matches(selector));
            return match ? match : null;
        }
        return super.queryMatchingItem(selector);
    }
    // CrSelectableMixin override for hasNestedSlots = true mode.
    observeItems() {
        if (this.hasNestedSlots) {
            this.addEventListener('slotchange', () => this.itemsChanged());
        }
        super.observeItems();
    }
}
customElements.define(CrPageSelectorElement.is, CrPageSelectorElement);

let instance$2 = null;
function getCss$2() {
    return instance$2 || (instance$2 = [...[], css `:host{--cr-toast-background:var(--color-toast-background,var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,var(--cr-fallback-color-inverse-on-surface));--cr-focus-outline-color:var(--cr-focus-outline-inverse-color);align-items:center;background:var(--cr-toast-background);border-radius:8px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,0.28);box-sizing:border-box;display:flex;line-height:20px;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 16px;position:fixed;transform:translateY(100px);transition:opacity 300ms,transform 300ms;visibility:hidden;z-index:1}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host(:not([open])) ::slotted(*){display:none}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent !important;border:none !important;color:var(--cr-toast-button-color) !important;margin-inline-start:32px !important;min-width:52px !important;padding:8px !important}:host ::slotted(cr-button:hover){background-color:transparent !important}::slotted(cr-button:last-of-type){margin-inline-end:-8px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    return html `<slot></slot>`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends CrLitElement {
    static get is() {
        return 'cr-toast';
    }
    static get styles() {
        return getCss$2();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
            },
            open: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #duration_accessor_storage = 0;
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    #open_accessor_storage = false;
    get open() { return this.#open_accessor_storage; }
    set open(value) { this.#open_accessor_storage = value; }
    hideTimeoutId_ = null;
    constructor() {
        super();
        this.addEventListener('focusin', this.clearTimeout_);
        this.addEventListener('focusout', this.resetAutoHide_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('duration') || changedProperties.has('open')) {
            this.resetAutoHide_();
        }
    }
    clearTimeout_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        this.clearTimeout_();
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    async show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        this.open = true;
        await this.updateComplete;
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that its contents can not be focused while
     * hidden.
     */
    async hide() {
        this.open = false;
        await this.updateComplete;
    }
}
customElements.define(CrToastElement.is, CrToastElement);

let instance$1 = null;
function getCss$1() {
    return instance$1 || (instance$1 = [...[], css `.spinner{--cr-spinner-size:28px;mask-image:url(//resources/images/throbber_small.svg);mask-position:center;mask-repeat:no-repeat;mask-size:var(--cr-spinner-size) var(--cr-spinner-size);background-color:var(--cr-spinner-color,var(--google-blue-500));height:var(--cr-spinner-size);width:var(--cr-spinner-size)}@media (prefers-color-scheme:dark){.spinner{background-color:var(--cr-spinner-color,var(--google-blue-300))}}`]);
}

let instance = null;
function getCss() {
    return instance || (instance = [...[getCss$Q(), getCss$O(), getCss$1(), getCss$k()], css `:host{--viewer-pdf-sidenav-width:300px;display:flex;flex-direction:column;height:100%;width:100%}viewer-pdf-sidenav,viewer-toolbar{--pdf-toolbar-text-color:rgb(241,241,241)}#side-panel{border-inline-start:1px solid var(--viewer-border-color)}viewer-toolbar{--active-button-bg:rgba(255,255,255,0.24);z-index:1}@media (max-width:200px),(max-height:250px){viewer-toolbar{display:none}}#bottom{display:flex;justify-content:center}#sidenav-container{border-inline-end:1px solid var(--viewer-border-color);overflow:hidden;transition:transform 250ms cubic-bezier(.6,0,0,1),visibility 250ms;visibility:visible;width:var(--viewer-pdf-sidenav-width)}#sidenav-container.floating{bottom:0;position:absolute;top:0;z-index:1}#sidenav-container[closed]{transform:translateX(-100%);transition:transform 200ms cubic-bezier(.6,0,0,1),visibility 200ms,width 0ms 200ms;visibility:hidden;width:0}:host-context([dir='rtl']) #sidenav-container[closed]{transform:translateX(100%)}@media (max-width:500px),(max-height:250px){#sidenav-container{display:none}}#content-focus-rectangle{border:2px solid var(--google-grey-500);border-radius:2px;box-sizing:border-box;height:100%;pointer-events:none;position:absolute;top:0;width:100%}viewer-ink-host{height:100%;position:absolute;width:100%}#container{display:flex;flex:1;overflow:hidden;position:relative}#plugin{position:initial}#content{height:100%;left:0;position:sticky;top:0;user-select:none;z-index:initial}#sizer{top:0;width:100%;z-index:initial}#main{flex:1;overflow:hidden;position:relative}#scroller{direction:ltr;height:100%;overflow:auto;position:relative}#scroller:fullscreen{overflow:hidden}.spinner{mask-image:url(chrome://resources/images/throbber_small.svg);margin-inline-end:8px;--cr-spinner-size:16px}#searchifyProgress{--cr-toast-background:rgb(227,227,227);--cr-toast-text-color:rgb(31,31,31)}ink-text-annotations{height:calc(100% - var(--horizontal-scrollbar-width,0px));width:calc(100% - var(--vertical-scrollbar-width,0px))}
`]);
}

function getHtml() {
    return html `<!--_html_template_start_--><!-- #html_wrapper_imports_start

import {AnnotationMode} from './constants.js';

#html_wrapper_imports_end -->

<viewer-toolbar id="toolbar"
    .docTitle="${this.title_}" .docLength="${this.docLength_}"
    .embeddedViewer="${this.embedded_}" .pageNo="${this.pageNo_}"
    .loadProgress="${this.loadProgress_}" .hasEdits="${this.hasEdits_}"
    .strings="${this.strings}"

    .annotationMode="${this.annotationMode_}"
    .enableUndoRedo="${!this.isTextboxActive_()}"
    .hasInk2Edits="${this.hasInk2AnnotationEdits_()}"

    .rotated="${this.isRotated_()}"
    .formFieldFocus="${this.formFieldFocus_}"
    .sidenavCollapsed="${this.sidenavCollapsed_}"
    .twoUpViewEnabled="${this.twoUpViewEnabled_}"
    .viewportZoom="${this.viewportZoom_}"
    .zoomBounds="${this.zoomBounds_}"

    .annotationAvailable="${this.annotationAvailable_()}"
    .pdfInk2Enabled="${this.pdfInk2Enabled_}"


    .pdfSaveToDriveEnabled="${this.pdfSaveToDriveEnabled_}"
    .saveToDriveProgress="${this.getSaveToDriveProgress_()}"
    .saveToDriveState="${this.saveToDriveState_}"

    @change-page="${this.onChangePage_}"
    @display-annotations-changed="${this.onDisplayAnnotationsChanged_}"
    @fit-to-changed="${this.onFitToChanged}"
    @glic-summarize="${this.onGlicSummarize_}"
    @present-click="${this.onPresentClick_}"
    @properties-click="${this.onPropertiesClick_}"
    @sidenav-toggle-click="${this.onSidenavToggleClick_}"
    @two-up-view-changed="${this.onTwoUpViewChanged_}"
    @zoom-changed="${this.onZoomChanged}" @zoom-in="${this.onZoomIn}"
    @zoom-out="${this.onZoomOut}" @rotate-left="${this.onRotateLeft_}"

    @annotation-mode-updated="${this.onAnnotationModeUpdated_}"

    @print="${this.onPrint_}" @save="${this.onToolbarSave_}"

    @save-to-drive="${this.onSaveToDrive_}"

    hidden>
</viewer-toolbar>

<div id="container">
  <div id="sidenav-container" ?closed="${this.sidenavCollapsed_}"
      ?hidden="${!this.toolbarEnabled_}">
    <viewer-pdf-sidenav id="sidenav"
        .activePage="${this.pageNo_}" .attachments="${this.attachments_}"
        .bookmarks="${this.bookmarks_}"
        .clockwiseRotations="${this.clockwiseRotations_}"
        .docLength="${this.docLength_}"
        .sidenavCollapsed="${this.sidenavCollapsed_}"
        .strings="${this.strings}"
        @change-page="${this.onChangePage_}"
        @change-page-and-xy="${this.onChangePageAndXy_}"
        @navigate="${this.onNavigate_}"
        @save-attachment="${this.onSaveAttachment_}">
    </viewer-pdf-sidenav>
  </div>
  <div id="main">
    <div id="scroller">
      <div id="sizer">
      </div>
      
        ${this.isInTextAnnotationMode_() ? html `
          <ink-text-annotations .viewport="${this.viewport}"
              @state-changed="${this.onTextBoxStateChanged_}">
          </ink-text-annotations>` : ''}
      
      <div id="content">
      </div>
    </div>
    <div id="content-focus-rectangle" ?hidden="${!this.documentHasFocus_}">
    </div>
    
      ${this.shouldShowInkBottomToolbar_() ? html `
        <cr-page-selector id="bottom" attr-for-selected="toolbar-name"
            selected="${this.annotationMode_}">
          <viewer-bottom-toolbar .strings="${this.strings}"
              toolbar-name="${AnnotationMode.DRAW}">
          </viewer-bottom-toolbar>
          <viewer-text-bottom-toolbar toolbar-name="${AnnotationMode.TEXT}">
          </viewer-text-bottom-toolbar>
          <viewer-signature-bottom-toolbar toolbar-name="${AnnotationMode.SIGNATURE}">
          </viewer-signature-bottom-toolbar>
        </cr-page-selector>` : ''}
    
  </div>
  
    ${this.shouldShowInkSidePanel_() ? html `
      <cr-page-selector attr-for-selected="page-name" id="side-panel"
          selected="${this.annotationMode_}">
        <viewer-side-panel page-name="${AnnotationMode.DRAW}">
        </viewer-side-panel>
        <viewer-text-side-panel page-name="${AnnotationMode.TEXT}">
        </viewer-text-side-panel>
        <viewer-signature-side-panel page-name="${AnnotationMode.SIGNATURE}">
        </viewer-signature-side-panel>
      </cr-page-selector>
    ` : ''}
  
  <cr-toast id="searchifyProgress">
    <div class="spinner"></div>
    <span>$i18n{searchifyInProgress}</span>
  </cr-toast>
</div>

${this.showErrorDialog ? html `<viewer-error-dialog id="error-dialog">
</viewer-error-dialog>` : ''}

${this.showPasswordDialog_ ? html `<viewer-password-dialog id="password-dialog"
    @close="${this.onPasswordDialogClose_}"
    @password-submitted="${this.onPasswordSubmitted_}">
</viewer-password-dialog>` : ''}

${this.showPropertiesDialog_ ? html `<viewer-properties-dialog
    id="properties-dialog"
    .documentMetadata="${this.documentMetadata_}"
    .fileName="${this.fileName_}"
    .pageCount="${this.docLength_}"
    .strings="${this.strings}"
    @close="${this.onPropertiesDialogClose_}">
</viewer-properties-dialog>` : ''}


${this.pdfSaveToDriveEnabled_ ? html `<viewer-save-to-drive-bubble
    .docTitle="${this.title_}"
    .progress="${this.saveToDriveProgress_}"
    .state="${this.saveToDriveState_}"
    @save-to-drive-bubble-action="${this.onSaveToDriveBubbleAction_}">
</viewer-save-to-drive-bubble>` : ''}



${this.showSignatureDialog_ ? html `<viewer-signature-dialog
    @close="${this.onSignatureDialogClose_}">
</viewer-signature-dialog>` : ''}

<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SaveRequestType$1 = chrome.pdfViewerPrivate.SaveRequestType;
/**
 * `SaveToDriveBubbleAction` is used for metrics. Entries should not be
 * renumbered, removed or reused.
 */
var SaveToDriveBubbleAction;
(function (SaveToDriveBubbleAction) {
    // LINT.IfChange(PDFSaveToDriveBubbleAction)
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["ACTION"] = 0] = "ACTION";
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["CANCEL_UPLOAD"] = 1] = "CANCEL_UPLOAD";
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["MANAGE_STORAGE"] = 2] = "MANAGE_STORAGE";
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["OPEN_IN_DRIVE"] = 3] = "OPEN_IN_DRIVE";
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["RETRY"] = 4] = "RETRY";
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["CLOSE"] = 5] = "CLOSE";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/pdf/enums.xml:PDFSaveToDriveBubbleAction)
    // Must be the last one.
    SaveToDriveBubbleAction[SaveToDriveBubbleAction["COUNT"] = 6] = "COUNT";
})(SaveToDriveBubbleAction || (SaveToDriveBubbleAction = {}));
/**
 * `SaveToDriveBubbleState` is used for metrics. Entries should not be
 * renumbered, removed or reused.
 */
var SaveToDriveBubbleState;
(function (SaveToDriveBubbleState) {
    // LINT.IfChange(PDFSaveToDriveBubbleState)
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE"] = 0] = "SHOW_BUBBLE";
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE_UPLOADING_STATE"] = 1] = "SHOW_BUBBLE_UPLOADING_STATE";
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE_SUCCESS_STATE"] = 2] = "SHOW_BUBBLE_SUCCESS_STATE";
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE_CONNECTION_ERROR_STATE"] = 3] = "SHOW_BUBBLE_CONNECTION_ERROR_STATE";
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE_STORAGE_FULL_ERROR_STATE"] = 4] = "SHOW_BUBBLE_STORAGE_FULL_ERROR_STATE";
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE_SESSION_TIMEOUT_ERROR_STATE"] = 5] = "SHOW_BUBBLE_SESSION_TIMEOUT_ERROR_STATE";
    SaveToDriveBubbleState[SaveToDriveBubbleState["SHOW_BUBBLE_UNKNOWN_ERROR_STATE"] = 6] = "SHOW_BUBBLE_UNKNOWN_ERROR_STATE";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/pdf/enums.xml:PDFSaveToDriveBubbleState)
    // Must be the last one.
    SaveToDriveBubbleState[SaveToDriveBubbleState["COUNT"] = 7] = "COUNT";
})(SaveToDriveBubbleState || (SaveToDriveBubbleState = {}));
/**
 * `SaveToDriveSaveType` is used for metrics. Entries should not be renumbered,
 * removed or reused.
 */
var SaveToDriveSaveType;
(function (SaveToDriveSaveType) {
    // LINT.IfChange(PDFSaveToDriveSaveType)
    SaveToDriveSaveType[SaveToDriveSaveType["SAVE"] = 0] = "SAVE";
    SaveToDriveSaveType[SaveToDriveSaveType["SAVE_ORIGINAL_ONLY"] = 1] = "SAVE_ORIGINAL_ONLY";
    SaveToDriveSaveType[SaveToDriveSaveType["SAVE_ORIGINAL"] = 2] = "SAVE_ORIGINAL";
    SaveToDriveSaveType[SaveToDriveSaveType["SAVE_EDITED"] = 3] = "SAVE_EDITED";
    SaveToDriveSaveType[SaveToDriveSaveType["SAVE_WITH_ANNOTATION"] = 4] = "SAVE_WITH_ANNOTATION";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/pdf/enums.xml:PDFSaveToDriveSaveType)
    // Must be the last one.
    SaveToDriveSaveType[SaveToDriveSaveType["COUNT"] = 5] = "COUNT";
})(SaveToDriveSaveType || (SaveToDriveSaveType = {}));
/**
 * Records when a Save to Drive bubble action is performed.
 */
function recordSaveToDriveBubbleAction(action) {
    recordEnumeration('PDF.SaveToDrive.BubbleAction', action, SaveToDriveBubbleAction.COUNT);
}
/**
 * Records when the Save to Drive bubble is shown in a certain state.
 */
function recordSaveToDriveBubbleState(bubbleState) {
    recordEnumeration('PDF.SaveToDrive.BubbleState', bubbleState, SaveToDriveBubbleState.COUNT);
}
/**
 * Records when a Save to Drive retry action is performed.
 */
function recordSaveToDriveRetrySaveType(retrySaveType) {
    recordEnumeration('PDF.SaveToDrive.RetrySaveType', retrySaveType, SaveToDriveSaveType.COUNT);
}
/**
 * Records when a Save to Drive action is performed.
 */
function recordSaveToDriveSaveType(saveToDriveSaveType) {
    recordEnumeration('PDF.SaveToDrive.SaveType', saveToDriveSaveType, SaveToDriveSaveType.COUNT);
}
function recordSaveToDriveBubbleActionMetrics(requestType) {
    recordSaveToDriveBubbleAction(SaveToDriveBubbleAction.ACTION);
    switch (requestType) {
        case SaveToDriveBubbleRequestType.CANCEL_UPLOAD:
            recordSaveToDriveBubbleAction(SaveToDriveBubbleAction.CANCEL_UPLOAD);
            break;
        case SaveToDriveBubbleRequestType.MANAGE_STORAGE:
            recordSaveToDriveBubbleAction(SaveToDriveBubbleAction.MANAGE_STORAGE);
            break;
        case SaveToDriveBubbleRequestType.OPEN_IN_DRIVE:
            recordSaveToDriveBubbleAction(SaveToDriveBubbleAction.OPEN_IN_DRIVE);
            break;
        case SaveToDriveBubbleRequestType.RETRY:
            recordSaveToDriveBubbleAction(SaveToDriveBubbleAction.RETRY);
            break;
        case SaveToDriveBubbleRequestType.DIALOG_CLOSED:
            recordSaveToDriveBubbleAction(SaveToDriveBubbleAction.CLOSE);
            break;
        default:
            assertNotReached('Unknown save to Drive bubble action: ' + requestType);
    }
}
function recordSaveToDriveBubbleRetryMetrics(requestType, hasCommittedEdits) {
    // The general retry action is recorded in
    // `recordSaveToDriveBubbleActionMetrics()`.
    switch (requestType) {
        case SaveRequestType$1.ANNOTATION:
            recordSaveToDriveRetrySaveType(SaveToDriveSaveType.SAVE_WITH_ANNOTATION);
            break;
        case SaveRequestType$1.ORIGINAL:
            recordSaveToDriveRetrySaveType(hasCommittedEdits ? SaveToDriveSaveType.SAVE_ORIGINAL :
                SaveToDriveSaveType.SAVE_ORIGINAL_ONLY);
            break;
        case SaveRequestType$1.EDITED:
            recordSaveToDriveRetrySaveType(SaveToDriveSaveType.SAVE_EDITED);
            break;
        default:
            assertNotReached('Unknown save request type for Save to Drive: ' + requestType);
    }
}
function recordShowSaveToDriveBubbleMetrics(saveToDriveState) {
    recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE);
    switch (saveToDriveState) {
        case SaveToDriveState.UPLOADING:
            recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE_UPLOADING_STATE);
            break;
        case SaveToDriveState.SUCCESS:
            recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE_SUCCESS_STATE);
            break;
        case SaveToDriveState.CONNECTION_ERROR:
            recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE_CONNECTION_ERROR_STATE);
            break;
        case SaveToDriveState.STORAGE_FULL_ERROR:
            recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE_STORAGE_FULL_ERROR_STATE);
            break;
        case SaveToDriveState.SESSION_TIMEOUT_ERROR:
            recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE_SESSION_TIMEOUT_ERROR_STATE);
            break;
        case SaveToDriveState.UNKNOWN_ERROR:
            recordSaveToDriveBubbleState(SaveToDriveBubbleState.SHOW_BUBBLE_UNKNOWN_ERROR_STATE);
            break;
        default:
            assertNotReached('Unknown state for showing save to Drive bubble: ' +
                saveToDriveState);
    }
}
function recordSaveToDriveMetrics(requestType, hasCommittedEdits, pdfInk2Enabled) {
    recordSaveToDriveSaveType(SaveToDriveSaveType.SAVE);
    switch (requestType) {
        case SaveRequestType$1.ANNOTATION:
            if (pdfInk2Enabled) {
                record(UserAction.SAVE_WITH_INK2_ANNOTATION);
            }
            recordSaveToDriveSaveType(SaveToDriveSaveType.SAVE_WITH_ANNOTATION);
            break;
        case SaveRequestType$1.ORIGINAL:
            recordSaveToDriveSaveType(hasCommittedEdits ? SaveToDriveSaveType.SAVE_ORIGINAL :
                SaveToDriveSaveType.SAVE_ORIGINAL_ONLY);
            break;
        case SaveRequestType$1.EDITED:
            recordSaveToDriveSaveType(SaveToDriveSaveType.SAVE_EDITED);
            break;
        default:
            assertNotReached('Unknown save request type for Save to Drive: ' + requestType);
    }
}

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// 
//  enable_pdf_save_to_drive
// clang-format on
// 
const SaveToDriveErrorType = chrome.pdfViewerPrivate.SaveToDriveErrorType;
const SaveToDriveStatus = chrome.pdfViewerPrivate.SaveToDriveStatus;
//  enable_pdf_save_to_drive
const SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
/**
 * Return the filename component of a URL, percent decoded if possible.
 * Exported for tests.
 */
function getFilenameFromURL(url) {
    // Ignore the query and fragment.
    const mainUrl = url.split(/#|\?/)[0] || '';
    const components = mainUrl.split(/\/|\\/);
    const filename = components[components.length - 1] || '';
    try {
        return decodeURIComponent(filename);
    }
    catch (e) {
        if (e instanceof URIError) {
            return filename;
        }
        throw e;
    }
}
function eventToPromise(event, target) {
    return new Promise(resolve => listenOnce(target, event, (_e) => resolve()));
}
// Unlike hasCtrlModifierOnly(), this always checks `e.ctrlKey` and not
// `e.metaKey`. Whereas hasCtrlModifierOnly() will flip the two modifiers on
// macOS.
function hasFixedCtrlModifierOnly(e) {
    return e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey;
}
// Like hasCtrlModifierOnly(), but allow the shift modifier.
function hasCtrlModifierMaybeWithShift(e) {
    let metaModifier = e.metaKey;
    // 
    metaModifier = e.ctrlKey;
    // 
    return hasCtrlModifier(e) && !e.altKey && !metaModifier;
}
const LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY = 'sidenavCollapsed';
const LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY = 'twoUpViewEnabled';
/**
 * The background color used for the regular viewer.
 */
// LINT.IfChange(PdfBackgroundColor)
const BACKGROUND_COLOR = 0xff282828;
// clang-format off
// LINT.ThenChange(//components/pdf/common/pdf_util.cc:PdfBackgroundColor)
// clang-format on
// 
function isEditedSaveRequestType(requestType) {
    return requestType === SaveRequestType.ANNOTATION ||
        requestType === SaveRequestType.EDITED;
}
// 
// 
function convertNoErrorStatusToSaveToDriveState(status) {
    switch (status) {
        case SaveToDriveStatus.INITIATED:
        case SaveToDriveStatus.FETCH_OAUTH:
        case SaveToDriveStatus.FETCH_PARENT_FOLDER:
        case SaveToDriveStatus.UPLOAD_STARTED:
        case SaveToDriveStatus.UPLOAD_IN_PROGRESS:
            return SaveToDriveState.UPLOADING;
        case SaveToDriveStatus.UPLOAD_COMPLETED:
            return SaveToDriveState.SUCCESS;
        default:
            return SaveToDriveState.UNINITIALIZED;
    }
}
function convertSaveToDriveProgressToSaveToDriveState(progress) {
    switch (progress.errorType) {
        case SaveToDriveErrorType.NO_ERROR:
            return convertNoErrorStatusToSaveToDriveState(progress.status);
        case SaveToDriveErrorType.UNKNOWN_ERROR:
            return SaveToDriveState.UNKNOWN_ERROR;
        case SaveToDriveErrorType.QUOTA_EXCEEDED:
            return SaveToDriveState.STORAGE_FULL_ERROR;
        case SaveToDriveErrorType.OFFLINE:
            return SaveToDriveState.CONNECTION_ERROR;
        case SaveToDriveErrorType.OAUTH_ERROR:
            return SaveToDriveState.SESSION_TIMEOUT_ERROR;
        case SaveToDriveErrorType.ACCOUNT_CHOOSER_CANCELED:
            return SaveToDriveState.UNINITIALIZED;
        case SaveToDriveErrorType.PARENT_FOLDER_SELECTION_FAILED:
            return SaveToDriveState.UNKNOWN_ERROR;
        default:
            assertNotReached();
    }
}
function saveToDriveStateIsFinalState(state) {
    switch (state) {
        case SaveToDriveState.SUCCESS:
        case SaveToDriveState.CONNECTION_ERROR:
        case SaveToDriveState.STORAGE_FULL_ERROR:
        case SaveToDriveState.SESSION_TIMEOUT_ERROR:
        case SaveToDriveState.UNKNOWN_ERROR:
            return true;
        default:
            return false;
    }
}
class PdfViewerElement extends PdfViewerBaseElement {
    static get is() {
        return 'pdf-viewer';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            // 
            annotationMode_: { type: String },
            // 
            attachments_: { type: Array },
            bookmarks_: { type: Array },
            canSerializeDocument_: { type: Boolean },
            clockwiseRotations_: { type: Number },
            /** The number of pages in the PDF document. */
            docLength_: { type: Number },
            documentHasFocus_: { type: Boolean },
            documentMetadata_: { type: Object },
            embedded_: { type: Boolean },
            fileName_: { type: String },
            hadPassword_: { type: Boolean },
            hasEdits_: { type: Boolean },
            // 
            hasCommittedInk2Edits_: { type: Boolean },
            // 
            formFieldFocus_: { type: String },
            /** The current loading progress of the PDF document (0 - 100). */
            loadProgress_: { type: Number },
            /** The number of the page being viewed (1-based). */
            pageNo_: { type: Number },
            // 
            pdfInk2Enabled_: { type: Boolean },
            pdfSignaturesEnabled_: { type: Boolean },
            pdfTextAnnotationsEnabled_: { type: Boolean },
            // 
            // 
            pdfSaveToDriveEnabled_: { type: Boolean },
            saveToDriveProgress_: { type: Object },
            saveToDriveState_: { type: String },
            // 
            showPasswordDialog_: { type: Boolean },
            showPropertiesDialog_: { type: Boolean },
            // 
            showSignatureDialog_: { type: Boolean },
            // 
            sidenavCollapsed_: { type: Boolean },
            // 
            textboxState_: { type: Number },
            // 
            title_: { type: String },
            twoUpViewEnabled_: { type: Boolean },
            // 
            useSidePanelForInk_: { type: Boolean },
            // 
            viewportZoom_: { type: Number },
            zoomBounds_: { type: Object },
            toolbarEnabled_: { type: Boolean },
        };
    }
    beepCount = 0;
    #annotationMode__accessor_storage = AnnotationMode.OFF;
    // 
    get annotationMode_() { return this.#annotationMode__accessor_storage; }
    set annotationMode_(value) { this.#annotationMode__accessor_storage = value; }
    #attachments__accessor_storage = [];
    // 
    get attachments_() { return this.#attachments__accessor_storage; }
    set attachments_(value) { this.#attachments__accessor_storage = value; }
    #bookmarks__accessor_storage = [];
    get bookmarks_() { return this.#bookmarks__accessor_storage; }
    set bookmarks_(value) { this.#bookmarks__accessor_storage = value; }
    #canSerializeDocument__accessor_storage = false;
    get canSerializeDocument_() { return this.#canSerializeDocument__accessor_storage; }
    set canSerializeDocument_(value) { this.#canSerializeDocument__accessor_storage = value; }
    caretBrowsingEnabled_ = false;
    #clockwiseRotations__accessor_storage = 0;
    get clockwiseRotations_() { return this.#clockwiseRotations__accessor_storage; }
    set clockwiseRotations_(value) { this.#clockwiseRotations__accessor_storage = value; }
    #docLength__accessor_storage = 0;
    get docLength_() { return this.#docLength__accessor_storage; }
    set docLength_(value) { this.#docLength__accessor_storage = value; }
    #documentHasFocus__accessor_storage = false;
    get documentHasFocus_() { return this.#documentHasFocus__accessor_storage; }
    set documentHasFocus_(value) { this.#documentHasFocus__accessor_storage = value; }
    #documentMetadata__accessor_storage = {
        author: '',
        canSerializeDocument: false,
        creationDate: '',
        creator: '',
        fileSize: '',
        keywords: '',
        linearized: false,
        modDate: '',
        pageSize: '',
        producer: '',
        subject: '',
        title: '',
        version: '',
    };
    get documentMetadata_() { return this.#documentMetadata__accessor_storage; }
    set documentMetadata_(value) { this.#documentMetadata__accessor_storage = value; }
    #embedded__accessor_storage = false;
    get embedded_() { return this.#embedded__accessor_storage; }
    set embedded_(value) { this.#embedded__accessor_storage = value; }
    #fileName__accessor_storage = '';
    get fileName_() { return this.#fileName__accessor_storage; }
    set fileName_(value) { this.#fileName__accessor_storage = value; }
    #hadPassword__accessor_storage = false;
    get hadPassword_() { return this.#hadPassword__accessor_storage; }
    set hadPassword_(value) { this.#hadPassword__accessor_storage = value; }
    #hasEdits__accessor_storage = false;
    get hasEdits_() { return this.#hasEdits__accessor_storage; }
    set hasEdits_(value) { this.#hasEdits__accessor_storage = value; }
    #hasCommittedInk2Edits__accessor_storage = false;
    // 
    get hasCommittedInk2Edits_() { return this.#hasCommittedInk2Edits__accessor_storage; }
    set hasCommittedInk2Edits_(value) { this.#hasCommittedInk2Edits__accessor_storage = value; }
    // 
    // 
    // `hasUnsavedEdits_` is set whenever the user makes edits to the PDF that
    // have not been saved. This is used to determine whether to enable the
    // beforeunload dialog when the user navigates away with unsaved changes.
    hasUnsavedEdits_ = false;
    #formFieldFocus__accessor_storage = FormFieldFocusType.NONE;
    // 
    get formFieldFocus_() { return this.#formFieldFocus__accessor_storage; }
    set formFieldFocus_(value) { this.#formFieldFocus__accessor_storage = value; }
    #loadProgress__accessor_storage = 0;
    get loadProgress_() { return this.#loadProgress__accessor_storage; }
    set loadProgress_(value) { this.#loadProgress__accessor_storage = value; }
    navigator_ = null;
    #pageNo__accessor_storage = 0;
    get pageNo_() { return this.#pageNo__accessor_storage; }
    set pageNo_(value) { this.#pageNo__accessor_storage = value; }
    pdfGetSaveDataInBlocks_ = false;
    #pdfInk2Enabled__accessor_storage = false;
    // 
    get pdfInk2Enabled_() { return this.#pdfInk2Enabled__accessor_storage; }
    set pdfInk2Enabled_(value) { this.#pdfInk2Enabled__accessor_storage = value; }
    #pdfSignaturesEnabled__accessor_storage = false;
    get pdfSignaturesEnabled_() { return this.#pdfSignaturesEnabled__accessor_storage; }
    set pdfSignaturesEnabled_(value) { this.#pdfSignaturesEnabled__accessor_storage = value; }
    #pdfTextAnnotationsEnabled__accessor_storage = false;
    get pdfTextAnnotationsEnabled_() { return this.#pdfTextAnnotationsEnabled__accessor_storage; }
    set pdfTextAnnotationsEnabled_(value) { this.#pdfTextAnnotationsEnabled__accessor_storage = value; }
    #pdfSaveToDriveEnabled__accessor_storage = false;
    // 
    // 
    get pdfSaveToDriveEnabled_() { return this.#pdfSaveToDriveEnabled__accessor_storage; }
    set pdfSaveToDriveEnabled_(value) { this.#pdfSaveToDriveEnabled__accessor_storage = value; }
    #saveToDriveProgress__accessor_storage = {
        status: SaveToDriveStatus.NOT_STARTED,
        errorType: SaveToDriveErrorType.NO_ERROR,
    };
    get saveToDriveProgress_() { return this.#saveToDriveProgress__accessor_storage; }
    set saveToDriveProgress_(value) { this.#saveToDriveProgress__accessor_storage = value; }
    #saveToDriveState__accessor_storage = SaveToDriveState.UNINITIALIZED;
    get saveToDriveState_() { return this.#saveToDriveState__accessor_storage; }
    set saveToDriveState_(value) { this.#saveToDriveState__accessor_storage = value; }
    saveToDriveRequestType_ = SaveRequestType.ORIGINAL;
    // 
    pdfSearchifySaveEnabled_ = false;
    pdfUseShowSaveFilePicker_ = false;
    pluginController_ = PluginController.getInstance();
    // 
    restoreAnnotationMode_ = AnnotationMode.OFF;
    // 
    // 
    showBeforeUnloadDialog_ = false;
    #showPasswordDialog__accessor_storage = false;
    // 
    get showPasswordDialog_() { return this.#showPasswordDialog__accessor_storage; }
    set showPasswordDialog_(value) { this.#showPasswordDialog__accessor_storage = value; }
    #showPropertiesDialog__accessor_storage = false;
    get showPropertiesDialog_() { return this.#showPropertiesDialog__accessor_storage; }
    set showPropertiesDialog_(value) { this.#showPropertiesDialog__accessor_storage = value; }
    #showSignatureDialog__accessor_storage = false;
    // 
    get showSignatureDialog_() { return this.#showSignatureDialog__accessor_storage; }
    set showSignatureDialog_(value) { this.#showSignatureDialog__accessor_storage = value; }
    #sidenavCollapsed__accessor_storage;
    // 
    get sidenavCollapsed_() { return this.#sidenavCollapsed__accessor_storage; }
    set sidenavCollapsed_(value) { this.#sidenavCollapsed__accessor_storage = value; }
    #textboxState__accessor_storage = TextBoxState.INACTIVE;
    // 
    get textboxState_() { return this.#textboxState__accessor_storage; }
    set textboxState_(value) { this.#textboxState__accessor_storage = value; }
    #title__accessor_storage = '';
    // 
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #toolbarEnabled__accessor_storage = false;
    get toolbarEnabled_() { return this.#toolbarEnabled__accessor_storage; }
    set toolbarEnabled_(value) { this.#toolbarEnabled__accessor_storage = value; }
    #twoUpViewEnabled__accessor_storage = false;
    get twoUpViewEnabled_() { return this.#twoUpViewEnabled__accessor_storage; }
    set twoUpViewEnabled_(value) { this.#twoUpViewEnabled__accessor_storage = value; }
    #useSidePanelForInk__accessor_storage = false;
    // 
    get useSidePanelForInk_() { return this.#useSidePanelForInk__accessor_storage; }
    set useSidePanelForInk_(value) { this.#useSidePanelForInk__accessor_storage = value; }
    #viewportZoom__accessor_storage = 1;
    // 
    get viewportZoom_() { return this.#viewportZoom__accessor_storage; }
    set viewportZoom_(value) { this.#viewportZoom__accessor_storage = value; }
    #zoomBounds__accessor_storage = { min: 0, max: 0 };
    get zoomBounds_() { return this.#zoomBounds__accessor_storage; }
    set zoomBounds_(value) { this.#zoomBounds__accessor_storage = value; }
    hasSearchifyText_ = false;
    constructor() {
        PdfHelpBubbleProxyImpl.createConnectedInstance();
        super();
        // TODO(dpapad): Add tests after crbug.com/40142584 is fixed.
        this.sidenavCollapsed_ = Boolean(Number.parseInt(LocalStorageProxyImpl.getInstance().getItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY), 10));
    }
    // 
    connectedCallback() {
        super.connectedCallback();
        this.tracker.add(window, 'beforeunload', this.onBeforeUnload_.bind(this));
        // 
        const mediaQuery = window.matchMedia('(min-width: 960px)');
        this.useSidePanelForInk_ = mediaQuery.matches;
        this.tracker.add(mediaQuery, 'change', () => {
            this.useSidePanelForInk_ = mediaQuery.matches;
            // If in DRAW or TEXT annotation mode, record opening the
            // UI that's opened by making the window narrower/wider.
            if (this.annotationMode_ !== AnnotationMode.OFF) {
                record(this.useSidePanelForInk_ ? UserAction.OPEN_INK2_SIDE_PANEL :
                    UserAction.OPEN_INK2_BOTTOM_TOOLBAR);
            }
        });
        this.tracker.add(Ink2Manager.getInstance(), 'undo-redo-state-changed', this.handleUndoRedoStateChanged_.bind(this));
        //  enable_pdf_ink2
    }
    disconnectedCallback() {
        this.tracker.removeAll();
        super.disconnectedCallback();
    }
    //  enable_pdf_ink2 or enable_pdf_save_to_drive
    // 
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('pdfInk2Enabled_') &&
            this.pdfInk2Enabled_) {
            // Set the viewport when PdfInk2 is enabled, if this happens after init().
            Ink2Manager.getInstance().setViewport(this.viewport);
        }
    }
    // 
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('showErrorDialog') && this.showErrorDialog) {
            this.onErrorDialog_();
        }
        // 
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('saveToDriveState_')) {
            this.onSaveToDriveStateChanged_(changedPrivateProperties.get('saveToDriveState_'));
        }
        // 
    }
    getBackgroundColor() {
        return BACKGROUND_COLOR;
    }
    setPluginSrc(plugin) {
        plugin.src = this.browserApi.getStreamInfo().streamUrl;
    }
    init(browserApi) {
        this.initInternal(browserApi, this.$.scroller, this.$.sizer, this.$.content);
        this.fileName_ = getFilenameFromURL(this.originalUrl);
        this.title_ = this.fileName_;
        assert(this.paramsParser);
        this.toolbarEnabled_ =
            this.paramsParser.shouldShowToolbar(this.originalUrl);
        if (this.toolbarEnabled_) {
            this.$.toolbar.hidden = false;
        }
        const showSidenav = this.paramsParser.shouldShowSidenav(this.originalUrl, this.sidenavCollapsed_);
        this.sidenavCollapsed_ = !showSidenav;
        this.navigator_ = new PdfNavigatorImpl(this.originalUrl, this.viewport, this.paramsParser, new NavigatorDelegateImpl(browserApi));
        // Listen for save commands from the browser.
        if (this.pdfOopifEnabled) {
            chrome.pdfViewerPrivate.onSave.addListener(this.onSave_.bind(this));
        }
        else {
            chrome.mimeHandlerPrivate.onSave.addListener(this.onSave_.bind(this));
        }
        // Listen for hash updates from the browser.
        chrome.pdfViewerPrivate.onShouldUpdateViewport.addListener(this.handleMaybeUpdateViewport_.bind(this));
        // 
        PdfViewerPrivateProxyImpl.getInstance().onSaveToDriveProgress.addListener(this.handleSaveToDriveProgress_.bind(this));
        // 
        this.embedded_ = this.browserApi.getStreamInfo().embedded;
        if (this.pdfOopifEnabled && !this.embedded_) {
            // Give the full page PDF viewer focus so it can handle keyboard events
            // immediately.
            window.focus();
        }
    }
    handleKeyEvent(e) {
        if (shouldIgnoreKeyEvents() || e.defaultPrevented) {
            return;
        }
        // Let the viewport handle directional key events.
        if (this.viewport.handleDirectionalKeyEvent(e, this.formFieldFocus_ !== FormFieldFocusType.NONE, this.caretBrowsingEnabled_)) {
            return;
        }
        if (document.fullscreenElement !== null) {
            // Disable zoom shortcuts in Presentation mode.
            // Handle '+' and '-' buttons (both in the numpad and elsewhere).
            if (hasCtrlModifier(e) &&
                (e.key === '=' || e.key === '-' || e.key === '+')) {
                e.preventDefault();
            }
            // Disable further key handling when in Presentation mode.
            return;
        }
        // 
        if (this.isInTextAnnotationMode_()) {
            const textStyle = getTextStyleForShortcut(e);
            if (textStyle !== null) {
                e.preventDefault();
                Ink2Manager.getInstance().toggleTextStyle(textStyle);
                return;
            }
        }
        // 
        switch (e.key) {
            case 'a':
                // Take over Ctrl+A (but not other combinations like Ctrl-Shift-A).
                // Note that on macOS, "Ctrl" is Command.
                if (hasCtrlModifierOnly(e)) {
                    this.pluginController_.selectAll();
                    // Since we do selection ourselves.
                    e.preventDefault();
                }
                return;
            // 
            case 'Enter':
                if (e.fromPlugin &&
                    this.isInTextAnnotationMode_()) {
                    this.maybeCreateTextAnnotation_();
                }
                return;
            case 'v':
                if (e.fromPlugin && hasCtrlModifierOnly(e) &&
                    this.isInTextAnnotationMode_()) {
                    this.maybePasteTextAnnotation_();
                }
                return;
        }
        // Handle toolbar related key events.
        this.handleToolbarKeyEvent_(e);
    }
    // 
    maybePasteTextAnnotation_() {
        // Ignore paste if focus is actively on some other element like
        // a side panel/nav or toolbar.
        const focused = this.shadowRoot.activeElement;
        if (!!focused && !this.$.scroller.contains(focused)) {
            return;
        }
        const annotations = this.shadowRoot.querySelector('ink-text-annotations');
        assert(annotations);
        annotations.pasteAnnotation();
    }
    // 
    /**
     * Helper for handleKeyEvent dealing with events that control toolbars.
     */
    handleToolbarKeyEvent_(e) {
        // TODO: Add handling for additional relevant hotkeys for the new unified
        // toolbar.
        switch (e.key) {
            case '[':
                // Do not use hasCtrlModifierOnly() here, since Command + [ is already
                // taken by the "go back to the previous webpage" action.
                if (hasFixedCtrlModifierOnly(e)) {
                    this.rotateCounterclockwise();
                }
                return;
            case '\\':
                // Do not use hasCtrlModifierOnly() here, to match '[' and ']'.
                if (hasFixedCtrlModifierOnly(e)) {
                    this.$.toolbar.fitToggle();
                }
                return;
            case ']':
                // Do not use hasCtrlModifierOnly() here, since Command + ] is already
                // taken by the "go forward to the next webpage" action.
                if (hasFixedCtrlModifierOnly(e)) {
                    this.rotateClockwise();
                }
                return;
            // 
            case 'z':
            case 'Z':
                if (hasCtrlModifierMaybeWithShift(e)) {
                    if (e.shiftKey) {
                        this.$.toolbar.redo();
                    }
                    else {
                        this.$.toolbar.undo();
                    }
                }
                return;
        }
    }
    // 
    async maybeCreateTextAnnotation_(location) {
        const hasActive = this.isTextboxActive_();
        if (hasActive) {
            await this.maybeCommitActiveTextbox_();
        }
        Ink2Manager.getInstance().initializeTextAnnotation(location, /*onlyExisting=*/ hasActive);
    }
    recordEnterExitAnnotationModeMetrics_(newAnnotationMode) {
        // Record exit metrics if annotation mode is being changed from one of
        // the ink annotation modes.
        switch (this.annotationMode_) {
            case AnnotationMode.DRAW:
                record(UserAction.EXIT_INK2_ANNOTATION_MODE);
                break;
            case AnnotationMode.TEXT:
                record(UserAction.EXIT_INK2_TEXT_ANNOTATION_MODE);
                break;
            case AnnotationMode.SIGNATURE:
                record(UserAction.EXIT_INK2_SIGNATURE_MODE);
                break;
            case AnnotationMode.OFF:
                break;
            default:
                assertNotReached();
        }
        // Record enter metrics if annotation mode is being changed to one of
        // the ink annotation modes.
        switch (newAnnotationMode) {
            case AnnotationMode.DRAW:
                record(UserAction.ENTER_INK2_ANNOTATION_MODE);
                break;
            case AnnotationMode.TEXT:
                record(UserAction.ENTER_INK2_TEXT_ANNOTATION_MODE);
                break;
            case AnnotationMode.SIGNATURE:
                record(UserAction.ENTER_INK2_SIGNATURE_MODE);
                break;
            case AnnotationMode.OFF:
                break;
            default:
                assertNotReached();
        }
    }
    // 
    // 
    // Handles the annotation mode being updated from the toolbar buttons.
    onAnnotationModeUpdated_(e) {
        this.setAnnotationMode_(e.detail);
    }
    async setAnnotationMode_(newAnnotationMode) {
        assert(this.pdfInk2Enabled_);
        if (newAnnotationMode === this.annotationMode_) {
            return;
        }
        if (this.annotationMode_ === AnnotationMode.TEXT) {
            await this.maybeCommitActiveTextbox_();
        }
        if (this.annotationMode_ === AnnotationMode.OFF) {
            record(this.useSidePanelForInk_ ? UserAction.OPEN_INK2_SIDE_PANEL :
                UserAction.OPEN_INK2_BOTTOM_TOOLBAR);
        }
        if (this.restoreAnnotationMode_ === AnnotationMode.OFF) {
            this.recordEnterExitAnnotationModeMetrics_(newAnnotationMode);
        }
        this.pluginController_.setAnnotationMode(newAnnotationMode);
        if (newAnnotationMode === AnnotationMode.DRAW &&
            !Ink2Manager.getInstance().isInitializationStarted()) {
            await Ink2Manager.getInstance().initializeBrush();
        }
        if (newAnnotationMode === AnnotationMode.TEXT &&
            !Ink2Manager.getInstance().isTextInitializationComplete()) {
            await Ink2Manager.getInstance().initializeTextAnnotations();
        }
        this.annotationMode_ = newAnnotationMode;
        this.showSignatureDialog_ = newAnnotationMode === AnnotationMode.SIGNATURE;
    }
    //  enable_pdf_ink2
    onDisplayAnnotationsChanged_(e) {
        assert(this.currentController);
        this.currentController.setDisplayAnnotations(e.detail);
    }
    async enterPresentationMode_() {
        const scroller = this.$.scroller;
        this.viewport.saveZoomState();
        // Initiate `requestFullscreen()` synchronously to capture the user gesture
        // before any asynchronous operations (such as committing text annotations
        // when exiting text annotation mode).
        const fullscreenPromise = Promise.all([
            eventToPromise('fullscreenchange', scroller),
            scroller.requestFullscreen(),
        ]);
        // 
        // Exit annotation mode if it was enabled.
        if (this.pdfInk2Enabled_ && this.annotationMode_ !== AnnotationMode.OFF) {
            this.restoreAnnotationMode_ = this.annotationMode_;
            await this.setAnnotationMode_(AnnotationMode.OFF);
        }
        assert(this.annotationMode_ === AnnotationMode.OFF);
        // 
        await fullscreenPromise;
        this.forceFit(FittingType.FIT_TO_HEIGHT);
        // Switch viewport's wheel behavior.
        this.viewport.setPresentationMode(true);
        // Set presentation mode, which restricts the content to read only
        // (e.g. disable forms and links).
        this.pluginController_.setPresentationMode(true);
        // Nothing else to do here. The viewport will be updated as a result
        // of a 'resize' event callback.
    }
    exitPresentationMode_() {
        // Revert back to the normal state when exiting Presentation mode.
        assert(document.fullscreenElement === null);
        this.viewport.setPresentationMode(false);
        this.pluginController_.setPresentationMode(false);
        // Ensure that directional keys still work after exiting.
        this.focusPlugin_();
        // Set zoom back to original zoom before presentation mode.
        this.viewport.restoreZoomState();
    }
    // 
    async maybeRestoreAnnotationMode_() {
        // Restore annotation mode if it was previously enabled.
        if (this.restoreAnnotationMode_ !== AnnotationMode.OFF) {
            await this.setAnnotationMode_(this.restoreAnnotationMode_);
            assert(this.annotationMode_ !== AnnotationMode.OFF);
            this.restoreAnnotationMode_ = AnnotationMode.OFF;
        }
    }
    //  enable_pdf_ink2
    focusPlugin_() {
        // Focus the embed in this frame, so the browser routes keyboard events to
        // the plugin.
        this.shadowRoot.querySelector('embed').focus();
        // Send a 'focus' message to the plugin frame, so it internally focuses its
        // own elements.
        this.pluginController_.focus();
    }
    async onPresentClick_() {
        await this.enterPresentationMode_();
        // When fullscreen changes, it means that the user exited Presentation
        // mode.
        await eventToPromise('fullscreenchange', this.$.scroller);
        this.exitPresentationMode_();
        // 
        await this.maybeRestoreAnnotationMode_();
        // 
    }
    onPropertiesClick_() {
        assert(!this.showPropertiesDialog_);
        this.showPropertiesDialog_ = true;
    }
    onPropertiesDialogClose_() {
        assert(this.showPropertiesDialog_);
        this.showPropertiesDialog_ = false;
    }
    // 
    onSignatureDialogClose_() {
        assert(this.showSignatureDialog_);
        this.showSignatureDialog_ = false;
    }
    // 
    /**
     * @return Whether two up view was enabled when the user last toggled it,
     *     and should be restored for this document.
     */
    shouldRestoreTwoUpView_() {
        const value = LocalStorageProxyImpl.getInstance().getItem(LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY);
        return value !== null && Boolean(Number.parseInt(value, 10));
    }
    /**
     * Changes two up view mode for the controller. Controller will trigger
     * layout update later, which will update the viewport accordingly.
     */
    onTwoUpViewChanged_(e) {
        const twoUpViewEnabled = e.detail;
        assert(this.currentController);
        this.currentController.setTwoUpView(twoUpViewEnabled);
        LocalStorageProxyImpl.getInstance().setItem(LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY, twoUpViewEnabled ? '1' : '0');
        record(twoUpViewEnabled ? UserAction.TWO_UP_VIEW_ENABLE :
            UserAction.TWO_UP_VIEW_DISABLE);
    }
    /**
     * Moves the viewport to a point in a page. Called back after a
     * 'transformPagePointReply' is returned from the plugin.
     * @param origin Identifier for the caller for logging purposes.
     * @param page The index of the page to go to. zero-based.
     * @param message Message received from the plugin containing the x and y to
     *     navigate to in screen coordinates.
     */
    goToPageAndXy_(origin, page, message) {
        this.viewport.goToPageAndXy(page, message.x, message.y);
        if (origin === ChangePageOrigin.BOOKMARK) {
            record(UserAction.FOLLOW_BOOKMARK);
        }
    }
    /** @return The bookmarks. Used for testing. */
    get bookmarks() {
        return this.bookmarks_;
    }
    /** @return The title. Used for testing. */
    get pdfTitle() {
        return this.title_;
    }
    setLoadState(loadState) {
        super.setLoadState(loadState);
        if (loadState === LoadState.FAILED) {
            this.closePasswordDialog_();
        }
    }
    updateProgress(progress) {
        if (this.toolbarEnabled_) {
            this.loadProgress_ = progress;
        }
        super.updateProgress(progress);
        // Text fragment directives should be handled after the document is set to
        // finished loading.
        if (progress === 100) {
            this.maybeRenderTextDirectiveHighlights_(this.originalUrl);
        }
    }
    onErrorDialog_() {
        // The error screen can only reload from a normal tab.
        if (!chrome.tabs || this.browserApi.getStreamInfo().tabId === -1) {
            return;
        }
        const errorDialog = this.shadowRoot.querySelector('#error-dialog');
        errorDialog.reloadFn = () => {
            chrome.tabs.reload(this.browserApi.getStreamInfo().tabId);
        };
    }
    closePasswordDialog_() {
        const passwordDialog = this.shadowRoot.querySelector('#password-dialog');
        if (passwordDialog) {
            passwordDialog.close();
        }
    }
    onPasswordDialogClose_() {
        this.showPasswordDialog_ = false;
    }
    /**
     * An event handler for handling password-submitted events. These are fired
     * when an event is entered into the password dialog.
     * @param event A password-submitted event.
     */
    onPasswordSubmitted_(event) {
        this.pluginController_.getPasswordComplete(event.detail.password);
    }
    updateUiForViewportChange() {
        // Update toolbar elements.
        this.clockwiseRotations_ = this.viewport.getClockwiseRotations();
        this.pageNo_ = this.viewport.getMostVisiblePage() + 1;
        this.twoUpViewEnabled_ = this.viewport.twoUpViewEnabled();
        assert(this.currentController);
        this.currentController.viewportChanged();
        // 
        if (this.pdfInk2Enabled_) {
            const hasScrollbars = this.viewport.documentHasScrollbars();
            const scrollbarWidthStyle = `${this.viewport.scrollbarWidth}px`;
            this.style.setProperty('--vertical-scrollbar-width', hasScrollbars.vertical ? scrollbarWidthStyle : '0px');
            this.style.setProperty('--horizontal-scrollbar-width', hasScrollbars.horizontal ? scrollbarWidthStyle : '0px');
            const annotations = this.shadowRoot.querySelector('ink-text-annotations');
            if (annotations) {
                annotations.viewportChanged();
            }
        }
        // 
    }
    handleStrings(strings) {
        super.handleStrings(strings);
        this.pdfGetSaveDataInBlocks_ =
            loadTimeData.getBoolean('pdfGetSaveDataInBlocks');
        // 
        this.pdfInk2Enabled_ = loadTimeData.getBoolean('pdfInk2Enabled');
        this.pdfSignaturesEnabled_ =
            loadTimeData.getBoolean('pdfSignaturesEnabled');
        this.pdfTextAnnotationsEnabled_ =
            loadTimeData.getBoolean('pdfTextAnnotationsEnabled');
        // 
        // 
        this.pdfSaveToDriveEnabled_ = loadTimeData.getBoolean('pdfSaveToDrive');
        // 
        this.pdfSearchifySaveEnabled_ =
            loadTimeData.getBoolean('pdfSearchifySaveEnabled');
        this.pdfUseShowSaveFilePicker_ =
            loadTimeData.getBoolean('pdfUseShowSaveFilePicker');
        const presetZoomFactors = this.viewport.presetZoomFactors;
        assert(presetZoomFactors.length > 0);
        this.zoomBounds_.min = Math.round(presetZoomFactors[0] * 100);
        this.zoomBounds_.max =
            Math.round(presetZoomFactors[presetZoomFactors.length - 1] * 100);
        const hasGlic = loadTimeData.getBoolean('pdfGlicSummarizeEnabled');
        if (hasGlic
            // 
            || this.pdfInk2Enabled_
        // 
        ) {
            this.updateComplete.then(() => {
                if (hasGlic) {
                    const summarizeBtn = this.$.toolbar.shadowRoot.querySelector('#glic-summarize-button');
                    if (summarizeBtn) {
                        this.registerHelpBubble('PdfHelpBubbleHandlerFactory::kPdfGlicSummarizeElementId', summarizeBtn);
                    }
                }
                // 
                if (this.pdfInk2Enabled_) {
                    this.registerHelpBubble('PdfHelpBubbleHandlerFactory::kPdfInkSignaturesDrawElementId', this.$.toolbar.shadowRoot.querySelector('#annotate'));
                    if (this.pdfTextAnnotationsEnabled_) {
                        this.registerHelpBubble('PdfHelpBubbleHandlerFactory::kPdfInkSignaturesAddTextElementId', this.$.toolbar.shadowRoot.querySelector('#text-annotate'));
                    }
                }
                // 
            });
        }
    }
    handleScriptingMessage(message) {
        if (super.handleScriptingMessage(message)) {
            return true;
        }
        if (this.delayScriptingMessage(message)) {
            return true;
        }
        let messageType;
        switch (message.data.type) {
            case 'getSelectedText':
                messageType = PostMessageDataType.GET_SELECTED_TEXT;
                this.pluginController_.getSelectedText().then(this.handleSelectedTextReply.bind(this));
                break;
            case 'print':
                messageType = PostMessageDataType.PRINT;
                // 
                this.maybeCommitActiveTextbox_().then(() => {
                    this.pluginController_.print();
                });
                // 
                // 
                break;
            case 'selectAll':
                messageType = PostMessageDataType.SELECT_ALL;
                this.pluginController_.selectAll();
                break;
            default:
                return false;
        }
        recordEnumeration('PDF.PostMessageDataType', messageType, PostMessageDataType.COUNT);
        return true;
    }
    handlePluginMessage(e) {
        const data = e.detail;
        switch (data.type) {
            case 'attachments':
                const attachmentsData = data;
                this.setAttachments_(attachmentsData.attachmentsData);
                return;
            case 'beep':
                this.handleBeep_();
                return;
            case 'bookmarks':
                const bookmarksData = data;
                this.setBookmarks_(bookmarksData.bookmarksData);
                return;
            case 'documentDimensions':
                this.setDocumentDimensions(convertDocumentDimensionsMessage(data));
                return;
            case 'documentFocusChanged':
                const hasFocusData = data;
                this.documentHasFocus_ = hasFocusData.hasFocus;
                return;
            case 'email':
                const emailData = data;
                const href = 'mailto:' + emailData.to + '?cc=' + emailData.cc +
                    '&bcc=' + emailData.bcc + '&subject=' + emailData.subject +
                    '&body=' + emailData.body;
                this.handleNavigate_(href, WindowOpenDisposition.CURRENT_TAB);
                return;
            case 'executedEditCommand':
                const editCommandData = data;
                const editCommand = editCommandData.editCommand;
                switch (editCommand) {
                    case 'Cut':
                        record(UserAction.CUT);
                        return;
                    case 'Copy':
                        record(UserAction.COPY);
                        if (this.hasSearchifyText_) {
                            record(UserAction.COPY_SEARCHIFIED);
                        }
                        return;
                    case 'Paste':
                        record(UserAction.PASTE);
                        return;
                    default:
                        assertNotReached('Unknown executedEditCommand data received: ' + editCommand);
                }
            // 
            case 'finishInkStroke':
                const modifiedData = data;
                this.handleFinishInkStroke_(modifiedData.modified);
                return;
            // 
            case 'formFocusChange':
                const focusedData = convertFormFocusChangeMessage(data);
                this.formFieldFocus_ = focusedData.focused;
                return;
            case 'getPassword':
                this.handlePasswordRequest_();
                return;
            case 'loadProgress':
                const progressData = convertLoadProgressMessage(data);
                this.updateProgress(progressData.progress);
                return;
            case 'metadata':
                const metadataData = data;
                this.setDocumentMetadata_(metadataData.metadataData);
                return;
            case 'navigate':
                const navigateData = data;
                this.handleNavigate_(navigateData.url, navigateData.disposition);
                return;
            case 'rendererPreferencesUpdated':
                const caretBrowsingEnabledData = data;
                this.caretBrowsingEnabled_ =
                    caretBrowsingEnabledData.caretBrowsingEnabled;
                return;
            // 
            case 'sendClickEvent':
                // Ignore click events outside of text annotation mode.
                if (this.annotationMode_ !== AnnotationMode.TEXT) {
                    return;
                }
                const location = data;
                // Clicks on a scrollbar should allow the plugin to take focus.
                if (this.viewport.isPointOnScrollbar(location)) {
                    const annotations = this.shadowRoot.querySelector('ink-text-annotations');
                    assert(annotations);
                    annotations.blurActiveAnnotation();
                }
                else {
                    this.maybeCreateTextAnnotation_(data);
                }
                return;
            // 
            case 'sendKeyEvent':
                const keyEvent = convertSendKeyEventMessage(data);
                keyEvent.fromPlugin = true;
                this.handleKeyEvent(keyEvent);
                return;
            case 'setIsEditing':
                // Editing mode can only be entered once, and cannot be exited.
                this.hasEdits_ = true;
                return;
            case 'setHasSearchifyText':
                this.hasSearchifyText_ = true;
                return;
            case 'showSearchifyInProgress':
                if (data.show) {
                    this.$.searchifyProgress.show();
                }
                else {
                    this.$.searchifyProgress.hide();
                }
                return;
            // 
            case 'startInkStroke':
                this.handleStartInkStroke_();
                return;
            // 
            case 'startedFindInPage':
                record(UserAction.FIND_IN_PAGE);
                if (this.hasSearchifyText_) {
                    record(UserAction.FIND_IN_PAGE_SEARCHIFIED);
                }
                return;
            case 'touchSelectionOccurred':
                this.sendScriptingMessage({
                    type: 'touchSelectionOccurred',
                });
                return;
            // 
            case 'updateThumbnail':
                const thumbnailData = data;
                this.pluginController_.getEventTarget().dispatchEvent(new CustomEvent(PluginControllerEventType.UPDATE_THUMBNAIL, { detail: thumbnailData }));
                return;
            // 
            default:
                assertNotReached('Unknown message type received: ' + data.type);
        }
    }
    forceFit(view) {
        this.$.toolbar.forceFit(view);
    }
    afterZoom(viewportZoom) {
        this.viewportZoom_ = viewportZoom;
    }
    setDocumentDimensions(documentDimensions) {
        // Restore the two up view mode from the previous session before the
        // initial layout is applied, so that the document is never laid out and
        // painted in single page view first.
        if (!this.documentDimensions &&
            !documentDimensions.layoutOptions?.twoUpViewEnabled &&
            this.shouldRestoreTwoUpView_()) {
            assert(this.currentController);
            this.currentController.setTwoUpView(true);
            return;
        }
        super.setDocumentDimensions(documentDimensions);
        // If the document dimensions are received, the password was correct and the
        // password dialog can be dismissed.
        this.closePasswordDialog_();
        if (this.toolbarEnabled_) {
            this.docLength_ = this.documentDimensions.pageDimensions.length;
        }
    }
    /** Handles a beep request from the current controller. */
    handleBeep_() {
        // Beeps are annoying, so just track count for now.
        this.beepCount += 1;
    }
    /** Handles a password request from the current controller. */
    handlePasswordRequest_() {
        // Show the password dialog if it is not already shown. Otherwise, respond
        // to an incorrect password.
        if (!this.showPasswordDialog_) {
            this.hadPassword_ = true;
            this.showPasswordDialog_ = true;
            this.sendScriptingMessage({ type: 'passwordPrompted' });
        }
        else {
            const passwordDialog = this.shadowRoot.querySelector('#password-dialog');
            assert(passwordDialog);
            passwordDialog.deny();
        }
    }
    /** Handles a navigation request from the current controller. */
    handleNavigate_(url, disposition) {
        this.navigator_.navigate(url, disposition);
    }
    // 
    handleSaveToDriveProgress_(streamUrl, progress) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        this.saveToDriveProgress_ = progress;
        this.saveToDriveState_ =
            convertSaveToDriveProgressToSaveToDriveState(progress);
    }
    // 
    /**
     * Handles updating viewport params based on the `newUrl` provided.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     * @param newUrl The new URL to parse viewport params from.
     */
    handleMaybeUpdateViewport_(streamUrl, newUrl) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        assert(this.paramsParser);
        this.paramsParser.getViewportFromUrlParams(newUrl).then(params => this.handleUrlParams(params));
        this.maybeRenderTextDirectiveHighlights_(newUrl);
    }
    // 
    /** Handles the start of a new ink stroke in annotation mode. */
    handleStartInkStroke_() {
        this.pluginController_.getEventTarget().dispatchEvent(new CustomEvent(PluginControllerEventType.START_INK_STROKE));
    }
    /** Handles a new ink stroke in annotation mode. */
    handleFinishInkStroke_(modified) {
        if (modified) {
            this.hasCommittedInk2Edits_ = true;
            this.hasUnsavedEdits_ = true;
            this.setShowBeforeUnloadDialog_(true);
        }
        this.pluginController_.getEventTarget().dispatchEvent(new CustomEvent(PluginControllerEventType.FINISH_INK_STROKE, { detail: modified }));
    }
    // 
    /**
     * Returns whether the PDF has entered editing mode or has committed ink2
     * edits.
     */
    hasCommittedEdits_() {
        let hasEdits = this.hasEdits_;
        // 
        hasEdits ||= this.hasCommittedInk2Edits_;
        // 
        return hasEdits;
    }
    /** Sets the document attachment data. */
    setAttachments_(attachments) {
        this.attachments_ = attachments;
    }
    /** Sets the document bookmarks data. */
    setBookmarks_(bookmarks) {
        this.bookmarks_ = bookmarks;
    }
    /** Sets document metadata from the current controller. */
    setDocumentMetadata_(metadata) {
        this.documentMetadata_ = metadata;
        this.title_ = this.documentMetadata_.title || this.fileName_;
        // Tab title is updated only when document.title is called in a
        // top-level document (`main_frame` of `WebContents`). For OOPIF PDF viewer,
        // the current document is the child of a top-level document, hence using a
        // private API to set the tab title.
        // NOTE: Title should only be set for full-page PDFs.
        if (this.pdfOopifEnabled && !this.embedded_) {
            PdfViewerPrivateProxyImpl.getInstance().setPdfDocumentTitle(this.title_);
        }
        else {
            document.title = this.title_;
        }
        this.canSerializeDocument_ = this.documentMetadata_.canSerializeDocument;
    }
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save on the attachment at a certain index. Callers of this function must
     * be responsible for checking whether the attachment size is valid for
     * downloading.
     * @param e The event which contains the index of attachment to be downloaded.
     */
    async onSaveAttachment_(e) {
        const index = e.detail;
        assert(this.attachments_[index] !== undefined);
        const size = this.attachments_[index].size;
        assert(size !== -1);
        let dataArray = [];
        // If the attachment size is 0, skip requesting the backend to fetch the
        // attachment data.
        if (size !== 0) {
            assert(this.currentController);
            const result = await this.currentController.saveAttachment(index);
            // Cap the PDF attachment size at 100 MB. This cap should be kept in sync
            // with and is also enforced in pdf/pdf_view_web_plugin.h.
            const MAX_FILE_SIZE = 100 * 1000 * 1000;
            const bufView = new Uint8Array(result.dataToSave);
            assert(bufView.length <= MAX_FILE_SIZE, `File too large to be saved: ${bufView.length} bytes.`);
            assert(bufView.length === size, `Received attachment size does not match its expected value: ${size} bytes.`);
            dataArray = [result.dataToSave];
        }
        const blob = new Blob(dataArray);
        const fileName = this.attachments_[index].name;
        if (this.pdfUseShowSaveFilePicker_) {
            try {
                const fileHandle = await window.showSaveFilePicker({
                    suggestedName: fileName,
                });
                const writable = await fileHandle.createWritable();
                await writable.write(blob);
                await writable.close();
            }
            catch (error) {
                if (error instanceof Error && error.name !== 'AbortError') {
                    console.error('window.showSaveFilePicker failed: ' + error);
                }
            }
        }
        else {
            const writer = await this.selectFileAndGetWriter_(fileName);
            if (writer !== null) {
                writer.write(blob);
            }
        }
    }
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     */
    onSave_(streamUrl) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        let shouldSaveWithAnnotation = false;
        // 
        if (this.pdfInk2Enabled_) {
            shouldSaveWithAnnotation = this.hasCommittedInk2Edits_ ||
                this.textboxState_ === TextBoxState.EDITED;
        }
        // 
        let saveMode;
        if (shouldSaveWithAnnotation) {
            saveMode = SaveRequestType.ANNOTATION;
        }
        else if (this.hasEdits_) {
            saveMode = SaveRequestType.EDITED;
        }
        else if (this.hasSearchifyText_ && this.pdfSearchifySaveEnabled_) {
            saveMode = SaveRequestType.SEARCHIFIED;
        }
        else {
            saveMode = SaveRequestType.ORIGINAL;
        }
        this.save_(saveMode);
    }
    onToolbarSave_(e) {
        this.save_(e.detail);
    }
    // 
    getStreamUrlForTesting() {
        return this.browserApi.getStreamInfo().streamUrl;
    }
    setOnSaveToDriveProgressListenerForTesting() {
        PdfViewerPrivateProxyImpl.getInstance().onSaveToDriveProgress.addListener(this.handleSaveToDriveProgress_.bind(this));
    }
    setPdfNavigatorForTesting(navigator) {
        this.navigator_ = navigator;
    }
    // Calculates the save to Drive progress in percentage. Returns 0 if the PDF
    // is not uploading to Drive.
    getSaveToDriveProgress_() {
        if (!this.isSaveToDriveUploading_()) {
            return 0;
        }
        const fileSizeBytes = this.saveToDriveProgress_.fileSizeBytes ?? 0;
        if (fileSizeBytes === 0) {
            return 0;
        }
        const uploadedBytes = this.saveToDriveProgress_.uploadedBytes ?? 0;
        return Math.round((uploadedBytes / fileSizeBytes) * 100);
    }
    isSaveToDriveUploading_() {
        return this.saveToDriveState_ === SaveToDriveState.UPLOADING;
    }
    async onSaveToDrive_(e) {
        if (this.saveToDriveState_ === SaveToDriveState.UNINITIALIZED) {
            this.saveToDriveRequestType_ = e.detail;
            let pdfInk2Enabled = false;
            // 
            pdfInk2Enabled = this.pdfInk2Enabled_;
            if (this.pdfInk2Enabled_ && e.detail === SaveRequestType.ANNOTATION) {
                await this.maybeCommitActiveTextbox_();
                Ink2Manager.getInstance().initiateSave();
            }
            // 
            PdfViewerPrivateProxyImpl.getInstance().saveToDrive(e.detail);
            recordSaveToDriveMetrics(e.detail, this.hasCommittedEdits_(), pdfInk2Enabled);
            return;
        }
        this.getSaveToDriveBubble_().showAt(this.$.toolbar.getSaveToDriveBubbleAnchor());
        recordShowSaveToDriveBubbleMetrics(this.saveToDriveState_);
    }
    onSaveToDriveBubbleAction_(e) {
        recordSaveToDriveBubbleActionMetrics(e.detail);
        switch (e.detail) {
            case SaveToDriveBubbleRequestType.CANCEL_UPLOAD:
                PdfViewerPrivateProxyImpl.getInstance().saveToDrive(
                /*saveRequestType=undefined*/ );
                this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                break;
            case SaveToDriveBubbleRequestType.MANAGE_STORAGE:
                assert(this.saveToDriveProgress_.accountEmail);
                this.handleNavigate_(getSaveToDriveManageStorageUrl(this.saveToDriveProgress_.accountEmail, this.saveToDriveProgress_.accountIsManaged ?? false), WindowOpenDisposition.NEW_FOREGROUND_TAB);
                this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                break;
            case SaveToDriveBubbleRequestType.OPEN_IN_DRIVE:
                assert(this.saveToDriveProgress_.accountEmail);
                assert(this.saveToDriveProgress_.driveItemId);
                this.handleNavigate_(getSaveToDriveOpenInDriveUrl(this.saveToDriveProgress_.accountEmail, this.saveToDriveProgress_.driveItemId), WindowOpenDisposition.NEW_FOREGROUND_TAB);
                this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                break;
            case SaveToDriveBubbleRequestType.RETRY:
                PdfViewerPrivateProxyImpl.getInstance().saveToDrive(this.saveToDriveRequestType_);
                recordSaveToDriveBubbleRetryMetrics(this.saveToDriveRequestType_, this.hasCommittedEdits_());
                break;
            case SaveToDriveBubbleRequestType.DIALOG_CLOSED:
                if (saveToDriveStateIsFinalState(this.saveToDriveState_)) {
                    this.saveToDriveState_ = SaveToDriveState.UNINITIALIZED;
                }
                break;
            default:
                console.warn('Saving to Drive bubble action is not implemented yet.', e.detail);
                break;
        }
    }
    getSaveToDriveBubble_() {
        const bubble = this.shadowRoot.querySelector('viewer-save-to-drive-bubble');
        assert(bubble);
        return bubble;
    }
    onSaveToDriveStateChanged_(oldState) {
        const newState = this.saveToDriveState_;
        if (saveToDriveStateIsFinalState(newState)) {
            if (newState === SaveToDriveState.SUCCESS) {
                this.onSaveSuccessful_(this.saveToDriveRequestType_);
            }
            else if (oldState === SaveToDriveState.UPLOADING) {
                // TODO(crbug.com/450600664): Fix an edge case where beforeunload dialog
                // is still blocking if an EDITED upload is cancelled after a successful
                // EDITED disk save.
                // 
                this.onSaveFailedOrCancelled_(this.saveToDriveRequestType_);
                // 
            }
            this.getSaveToDriveBubble_().showAt(this.$.toolbar.getSaveToDriveBubbleAnchor(), 
            /*autoDismiss=*/ true);
            return;
        }
        if (newState === SaveToDriveState.UPLOADING) {
            // Block unloading the window if upload is in progress.
            this.setShowBeforeUnloadDialog_(true);
            if (isEditedSaveRequestType(this.saveToDriveRequestType_)) {
                this.hasUnsavedEdits_ = false;
            }
            return;
        }
        assert(newState === SaveToDriveState.UNINITIALIZED, `Unexpected state: ${newState}`);
        if (oldState !== SaveToDriveState.UPLOADING) {
            this.setShowBeforeUnloadDialog_(this.hasUnsavedEdits_);
        }
    }
    //  enable_pdf_save_to_drive
    onRotateLeft_() {
        this.rotateCounterclockwise();
    }
    onChangePage_(e) {
        this.viewport.goToPage(e.detail.page);
        if (e.detail.origin === ChangePageOrigin.BOOKMARK) {
            record(UserAction.FOLLOW_BOOKMARK);
        }
        else if (e.detail.origin === ChangePageOrigin.PAGE_SELECTOR) {
            record(UserAction.PAGE_SELECTOR_NAVIGATE);
        }
        else if (e.detail.origin === ChangePageOrigin.THUMBNAIL) {
            record(UserAction.THUMBNAIL_NAVIGATE);
        }
    }
    onChangePageAndXy_(e) {
        const point = this.viewport.convertPageToScreen(e.detail.page, e.detail);
        this.goToPageAndXy_(e.detail.origin, e.detail.page, point);
    }
    onNavigate_(e) {
        const disposition = e.detail.newtab ?
            WindowOpenDisposition.NEW_BACKGROUND_TAB :
            WindowOpenDisposition.CURRENT_TAB;
        this.navigator_.navigate(e.detail.uri, disposition);
    }
    onSidenavToggleClick_() {
        this.sidenavCollapsed_ = !this.sidenavCollapsed_;
        // Workaround for crbug.com/40145705, so that the PDF plugin resizes only
        // once when the sidenav is opened/closed.
        const container = this.shadowRoot.querySelector('#sidenav-container');
        if (!this.sidenavCollapsed_) {
            container.classList.add('floating');
            container.addEventListener('transitionend', () => {
                container.classList.remove('floating');
            }, { once: true });
        }
        LocalStorageProxyImpl.getInstance().setItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY, this.sidenavCollapsed_ ? '1' : '0');
    }
    // 
    handleUndoRedoStateChanged_(e) {
        this.hasCommittedInk2Edits_ = e.detail.canUndo;
        this.hasUnsavedEdits_ = e.detail.hasUnsavedEdits;
        this.setShowBeforeUnloadDialog_(this.shouldShowBeforeUnloadDialog_());
    }
    // 
    /**
     * Sends a message to the PDF plugin to highlight the provided text
     * directives if any.
     */
    maybeRenderTextDirectiveHighlights_(url) {
        assert(this.paramsParser);
        const textDirectives = this.paramsParser.getTextFragments(url);
        if (textDirectives.length > 0) {
            this.pluginController_.highlightTextFragments(textDirectives);
        }
    }
    /**
     * Shows save file picker and returns a writable.
     * @param: suggestedName The default value for the filename.
     * @returns A Writable if successful, otherwise throws an exception.
     */
    async selectFileAndGetWritable_(suggestedName) {
        assert(this.pdfUseShowSaveFilePicker_);
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: suggestedName,
            types: [{
                    description: 'PDF Files',
                    accept: { 'application/pdf': ['.pdf'] },
                }],
        });
        return fileHandle.createWritable();
    }
    /**
     * Shows deprecated save file picker and returns a FileWriter if successful.
     * @param suggestedName The default value for the filename.
     * @returns A FileWriter if successful, otherwise returns null.
     */
    async selectFileAndGetWriter_(suggestedName) {
        assert(!this.pdfUseShowSaveFilePicker_);
        return new Promise(resolve => {
            chrome.fileSystem.chooseEntry({
                type: 'saveFile',
                accepts: [{ description: '*.pdf', extensions: ['pdf'] }],
                suggestedName: suggestedName,
            }, (entry) => {
                if (chrome.runtime.lastError) {
                    if (chrome.runtime.lastError.message !== 'User cancelled') {
                        console.error('chrome.fileSystem.chooseEntry failed: ' +
                            chrome.runtime.lastError.message);
                    }
                    resolve(null);
                }
                assert(entry);
                entry.createWriter(writer => {
                    resolve(writer);
                });
            });
        });
    }
    /**
     * Writes a blob to a FileWriter, waiting until writing is completed. Throws
     * an exception on error.
     * @param writer: The FileWriter into which data is written.
     * @param blob: The Blob of data to write.
     */
    writeToWriter_(writer, blob) {
        return new Promise((resolve, reject) => {
            writer.onwriteend = () => resolve();
            writer.onerror = () => reject(writer.error);
            writer.write(blob);
        });
    }
    /**
     * Saves the current PDF document to disk.
     */
    async save_(requestType) {
        this.recordSaveMetrics_(requestType);
        // Entering annotation mode requires the local contents to ensure
        // annotations are saved, unless the original document is specifically
        // requested. Otherwise, the cached remote copy would be saved without
        // annotations.
        //
        // Always send requests of type ORIGINAL to the plugin controller, not the
        // ink controller. The ink controller always saves the edited document.
        // TODO(dstockwell): Report an error to user if this fails.
        assert(this.currentController);
        // 
        await this.maybeCommitActiveTextbox_();
        // `this.hasUnsavedEdits_` will be set back to true if save is disrupted for
        // SaveRequestType.ANNOTATION or SaveRequestType.EDITED.
        if (isEditedSaveRequestType(requestType)) {
            this.hasUnsavedEdits_ = false;
            // 
            if (this.pdfInk2Enabled_ && requestType === SaveRequestType.ANNOTATION) {
                Ink2Manager.getInstance().initiateSave();
            }
            // 
        }
        // 
        this.fire('save-initiated-for-testing');
        if (this.pdfGetSaveDataInBlocks_) {
            this.saveInBlocks_(requestType);
            return;
        }
        const result = await this.currentController.save(requestType);
        if (result === null) {
            // The content controller handled the save internally.
            this.fire('save-completed-for-testing');
            return;
        }
        // Make sure file extension is .pdf, avoids dangerous extensions.
        let fileName = result.fileName;
        if (!fileName.toLowerCase().endsWith('.pdf')) {
            fileName = fileName + '.pdf';
        }
        // 
        if (result.bypassSaveFileForTesting) {
            // Only set by the mock plugin.
            this.onSaveSuccessful_(requestType);
            return;
        }
        // 
        // Create blob before callback to avoid race condition.
        const blob = new Blob([result.dataToSave], { type: 'application/pdf' });
        if (!this.pdfUseShowSaveFilePicker_) {
            const writer = await this.selectFileAndGetWriter_(fileName);
            if (writer === null) {
                // 
                this.onSaveFailedOrCancelled_(requestType);
                // 
                return;
            }
            writer.write(blob);
            // 
            this.onSaveSuccessful_(requestType);
            // 
            return;
        }
        try {
            const writable = await this.selectFileAndGetWritable_(fileName);
            await writable.write(blob);
            await writable.close();
            // 
            this.onSaveSuccessful_(requestType);
            // 
        }
        catch (error) {
            if (error instanceof Error && error.name !== 'AbortError') {
                console.error('window.showSaveFilePicker failed: ' + error);
            }
            // 
            this.onSaveFailedOrCancelled_(requestType);
            // 
        }
    }
    /**
     * Saves the current PDF document to disk in blocks.
     *
     * This function does not perform pre/post steps of saving and should be
     * called by `save_`.
     */
    async saveInBlocks_(requestType) {
        // TODO(crbug.com/382610226): Update for `SaveRequestType.SEARCHIFIED` to
        // allow users to select saving original PDF or text extracted one.
        // To do so, the save type should be asked first, and then content would be
        // fetched based on the selected type.
        assert(this.pluginController_.isActive);
        // Request type is only passed for testing purposes.
        const nameResult = await this.pluginController_.getSuggestedFileName(requestType);
        // Make sure file extension is .pdf, avoids dangerous extensions.
        let fileName = nameResult.fileName;
        if (!fileName.toLowerCase().endsWith('.pdf')) {
            fileName = fileName + '.pdf';
        }
        // 
        if (nameResult.bypassSaveFileForTesting) {
            // Only set by the mock plugin.
            this.onSaveSuccessful_(requestType);
            return;
        }
        // 
        try {
            let writable;
            let writer;
            if (this.pdfUseShowSaveFilePicker_) {
                writable = await this.selectFileAndGetWritable_(fileName);
                writer = null;
            }
            else {
                writer = await this.selectFileAndGetWriter_(fileName);
                if (writer === null) {
                    // 
                    this.onSaveFailedOrCancelled_(requestType);
                    // 
                    return;
                }
                writable = null;
            }
            // Total file size is updated after the first results are received.
            let totalFileSize = 0;
            let offset = 0;
            do {
                // Get save data from plugin in maximum 16 MB blocks.
                // LINT.IfChange(MaxSaveBufferSize)
                const MAX_SAVE_BUFFER_SIZE = 16 * 1000 * 1000;
                // LINT.ThenChange(//pdf/pdf_view_web_plugin.cc:MaxSaveBufferSize)
                // `blockSize` will be 0 on the first call, since the total file size
                // is not known yet.
                const blockSize = Math.min(totalFileSize - offset, MAX_SAVE_BUFFER_SIZE);
                const result = await this.pluginController_.getSaveDataBlock(requestType, offset, blockSize);
                if (offset === 0) {
                    // Update `totalFileSize` after the first block of data is received.
                    totalFileSize = result.totalFileSize;
                    if (totalFileSize === 0) {
                        // File could not be saved.
                        throw new Error('File size is zero.');
                    }
                    verifyPdfHeader(result.dataToSave);
                    assert(result.dataToSave.byteLength !== 0);
                }
                else {
                    assert(result.dataToSave.byteLength === blockSize);
                }
                offset += result.dataToSave.byteLength;
                if (writable !== null) {
                    await writable.write(result.dataToSave);
                }
                else {
                    assert(writer !== null);
                    const blob = new Blob([result.dataToSave], { type: 'application/pdf' });
                    await this.writeToWriter_(writer, blob);
                }
            } while (offset < totalFileSize);
            if (writable !== null) {
                await writable.close();
            }
            // 
            this.onSaveSuccessful_(requestType);
            // 
        }
        catch (error) {
            this.pluginController_.releaseSaveInBlockBuffers();
            if (error instanceof Error && error.name !== 'AbortError') {
                console.error('window.showSaveFilePicker failed: ' + error);
            }
            // 
            this.onSaveFailedOrCancelled_(requestType);
            // 
        }
    }
    // 
    /**
     * Performs required tasks after a successful save.
     */
    onSaveSuccessful_(requestType) {
        this.setShowBeforeUnloadDialog_(this.shouldShowBeforeUnloadDialog_());
        if (this.pdfInk2Enabled_ && requestType === SaveRequestType.ANNOTATION) {
            Ink2Manager.getInstance().saved();
        }
        this.fire('save-completed-for-testing');
    }
    // 
    // 
    // 
    /**
     * Returns whether the beforeunload dialog should be shown.
     */
    shouldShowBeforeUnloadDialog_() {
        let showBeforeUnloadDialog = this.hasUnsavedEdits_;
        // 
        // If Save to Drive is uploading, block closing the window.
        showBeforeUnloadDialog =
            showBeforeUnloadDialog || this.isSaveToDriveUploading_();
        //  enable_pdf_save_to_drive
        return showBeforeUnloadDialog;
    }
    //  enable_pdf_ink2 or enable_pdf_save_to_drive
    /**
     * Records metrics for saving PDFs.
     */
    recordSaveMetrics_(requestType) {
        record(UserAction.SAVE);
        switch (requestType) {
            case SaveRequestType.ANNOTATION:
                // 
                record(UserAction.SAVE_WITH_INK2_ANNOTATION);
                break;
            // 
            // 
            case SaveRequestType.ORIGINAL:
                record(this.hasCommittedEdits_() ? UserAction.SAVE_ORIGINAL :
                    UserAction.SAVE_ORIGINAL_ONLY);
                break;
            case SaveRequestType.EDITED:
                record(UserAction.SAVE_EDITED);
                break;
            case SaveRequestType.SEARCHIFIED:
                // TODO(crbug.com/382610226): Update metric after the code is updated to
                // give users the option to save searchified or original PDF, and add
                // test.
                record(UserAction.SAVE_SEARCHIFIED);
                break;
            default:
                assertNotReachedCase();
        }
    }
    onGlicSummarize_() {
        PdfViewerPrivateProxyImpl.getInstance().glicSummarize();
    }
    async onPrint_() {
        record(UserAction.PRINT);
        assert(this.currentController);
        // 
        await this.maybeCommitActiveTextbox_();
        // 
        this.currentController.print();
    }
    /**
     * Updates the toolbar's annotation available flag depending on current
     * conditions.
     * @return Whether annotations are available.
     */
    annotationAvailable_() {
        return this.canSerializeDocument_ && !this.hadPassword_;
    }
    /** @return Whether the PDF contents are rotated. */
    isRotated_() {
        return this.clockwiseRotations_ !== 0;
    }
    // 
    isTextboxActive_() {
        return this.textboxState_ !== TextBoxState.INACTIVE;
    }
    /**
     * Commits the textbox if it is active, no-op otherwise.
     */
    maybeCommitActiveTextbox_() {
        if (!this.isTextboxActive_()) {
            return Promise.resolve();
        }
        const annotations = this.shadowRoot.querySelector('ink-text-annotations');
        assert(annotations);
        return annotations.commitActiveAnnotation();
    }
    isInTextAnnotationMode_() {
        return this.annotationMode_ === AnnotationMode.TEXT;
    }
    /**
     * @return Whether the Ink bottom toolbar should be shown. It should never be
     *     shown if the Ink side panel is shown.
     */
    shouldShowInkBottomToolbar_() {
        return this.inInk2AnnotationMode_() && !this.useSidePanelForInk_;
    }
    /**
     * @return Whether the Ink side panel should be shown. It should never be
     *     shown if the Ink bottom toolbar is shown. It should be shown if the
     *     window width is at least a certain width.
     */
    shouldShowInkSidePanel_() {
        return this.inInk2AnnotationMode_() && this.useSidePanelForInk_;
    }
    hasInk2AnnotationEdits_() {
        return this.textboxState_ === TextBoxState.EDITED ||
            this.hasCommittedInk2Edits_;
    }
    /**
     * Performs required tasks after a failed or cancelled save.
     */
    onSaveFailedOrCancelled_(requestType) {
        // Restore the original value of `hasUnsavedEdits_` and block closing the
        // window if there are unsaved edits.
        if (isEditedSaveRequestType(requestType)) {
            this.hasUnsavedEdits_ = true;
        }
        // 
        if (this.pdfInk2Enabled_ && requestType === SaveRequestType.ANNOTATION) {
            Ink2Manager.getInstance().cancelSave();
        }
        // 
        this.setShowBeforeUnloadDialog_(this.shouldShowBeforeUnloadDialog_());
        this.fire('save-completed-for-testing');
    }
    onTextBoxStateChanged_(e) {
        this.textboxState_ = e.detail;
        if (e.detail === TextBoxState.INACTIVE) {
            this.focusPlugin_();
        }
        else if (e.detail === TextBoxState.EDITED) {
            this.setShowBeforeUnloadDialog_(true);
        }
    }
    /**
     * @returns Whether the PDF viewer has Ink2 enabled and is in annotation mode.
     */
    inInk2AnnotationMode_() {
        return this.pdfInk2Enabled_ && this.annotationMode_ !== AnnotationMode.OFF;
    }
    // 
    // 
    /**
     * Handles the `BeforeUnloadEvent` event.
     * @param event The `BeforeUnloadEvent` object representing the event.
     */
    onBeforeUnload_(event) {
        // When a user tries to leave PDF with unsaved changes or when Save to Drive
        // is in progress, show the 'Leave site' dialog. OOPIF PDF only, since
        // MimeHandler handles the beforeunload event instead.
        if (this.pdfOopifEnabled && this.showBeforeUnloadDialog_) {
            BeforeUnloadProxyImpl.getInstance().preventDefault(event);
        }
    }
    /**
     * Sets whether to show the beforeunload dialog when navigating away from pdf.
     * @param showDialog A boolean indicating whether to show the beforeunload
     * dialog.
     */
    setShowBeforeUnloadDialog_(showDialog) {
        if (this.showBeforeUnloadDialog_ === showDialog) {
            return;
        }
        this.showBeforeUnloadDialog_ = showDialog;
        if (!this.pdfOopifEnabled) {
            chrome.mimeHandlerPrivate.setShowBeforeUnloadDialog(showDialog);
        }
    }
}
customElements.define(PdfViewerElement.is, PdfViewerElement);

export { AnnotationBrushType, AnnotationMode, BeforeUnloadProxyImpl, ChangePageOrigin, CrActionMenuElement, DEFAULT_TEXTBOX_WIDTH, FittingType, FormFieldFocusType, HIGHLIGHTER_COLORS, HIGHLIGHTER_SIZES, Ink2Manager, InkAnnotationBrushMixin, InkAnnotationTextMixin, InkBrushSelectorElement, InkColorSelectorElement, InkSizeSelectorElement, InkTextAnnotationsElement, InkTextBoxElement, LANDSCAPE_WIDTH, LOCAL_STORAGE_TWO_UP_VIEW_ENABLED_KEY, LocalStorageProxyImpl, MIN_TEXTBOX_SIZE_PX, PAINTED_ATTRIBUTE, PEN_COLORS, PEN_SIZES, PORTRAIT_WIDTH, PdfNavigatorImpl, PdfViewerBaseElement, PdfViewerElement, PdfViewerPrivateProxyImpl, PluginController, PluginControllerEventType, PostMessageDataType, SaveToDriveBubbleAction, SaveToDriveBubbleRequestType, SaveToDriveBubbleState, SaveToDriveSaveType, SaveToDriveState, SelectableIconButtonElement, TEXT_COLORS, TEXT_SIZES, TextAlignment, TextAlignmentSelectorElement, TextAnnotationSource, TextBoxState, TextStyle, TextStylesSelectorElement, TextTypeface, UndoRedoStack, UserAction, ViewerAttachmentBarElement, ViewerAttachmentElement, ViewerBookmarkElement, ViewerBottomToolbarDropdownElement, ViewerBottomToolbarElement, ViewerDocumentOutlineElement, ViewerDownloadControlsElement, ViewerPageSelectorElement, ViewerPasswordDialogElement, ViewerPdfSidenavElement, ViewerPropertiesDialogElement, ViewerSaveControlsMixin, ViewerSaveToDriveBubbleElement, ViewerSaveToDriveControlsElement, ViewerSidePanelElement, ViewerSignatureBottomToolbarElement, ViewerSignatureDialogElement, ViewerSignatureSidePanelElement, ViewerTextBottomToolbarElement, ViewerTextSidePanelElement, ViewerThumbnailBarElement, ViewerThumbnailElement, ViewerToolbarElement, WindowOpenDisposition, colorsEqual, convertRotatedCoordinates, getFilenameFromURL, hexToColor, pageToScreenCoordinates, record, screenToPageCoordinates, shouldIgnoreKeyEvents };
//# sourceMappingURL=pdf_viewer_wrapper.rollup.js.map
