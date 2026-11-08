// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A bubble for displaying in-product help. These are created
 * dynamically by HelpBubbleMixin, and their API should be considered an
 * implementation detail and subject to change (you should not add them to your
 * components directly).
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './help_bubble_icons.html.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { isWindows } from '//resources/js/platform.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './help_bubble.css.js';
import { getHtml } from './help_bubble.html.js';
import { HelpBubbleArrowPosition } from './help_bubble.mojom-webui.js';
const ACTION_BUTTON_ID_PREFIX = 'action-button-';
export const HELP_BUBBLE_DISMISSED_EVENT = 'help-bubble-dismissed';
export const HELP_BUBBLE_TIMED_OUT_EVENT = 'help-bubble-timed-out';
export const HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS = {
    behavior: 'smooth',
    block: 'center',
};
export class HelpBubbleElement extends CrLitElement {
    static get is() {
        return 'help-bubble';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            nativeId: {
                type: String,
                reflect: true,
            },
            secondaryId: {
                type: String,
                reflect: true,
            },
            position: {
                type: Number,
                reflect: true,
            },
            bodyIconName: { type: String },
            bodyIconAltText: { type: String },
            progress: { type: Object },
            titleText: { type: String },
            bodyText: { type: String },
            buttons: { type: Array },
            sortedButtons: { type: Array },
            closeButtonAltText: { type: String },
            closeButtonTabIndex: { type: Number },
            progressData_: {
                type: Array,
                state: true,
            },
        };
    }
    #nativeId_accessor_storage = '';
    get nativeId() { return this.#nativeId_accessor_storage; }
    set nativeId(value) { this.#nativeId_accessor_storage = value; }
    #secondaryId_accessor_storage = '';
    get secondaryId() { return this.#secondaryId_accessor_storage; }
    set secondaryId(value) { this.#secondaryId_accessor_storage = value; }
    #bodyText_accessor_storage = '';
    get bodyText() { return this.#bodyText_accessor_storage; }
    set bodyText(value) { this.#bodyText_accessor_storage = value; }
    #titleText_accessor_storage = '';
    get titleText() { return this.#titleText_accessor_storage; }
    set titleText(value) { this.#titleText_accessor_storage = value; }
    #closeButtonAltText_accessor_storage = '';
    get closeButtonAltText() { return this.#closeButtonAltText_accessor_storage; }
    set closeButtonAltText(value) { this.#closeButtonAltText_accessor_storage = value; }
    #closeButtonTabIndex_accessor_storage = 0;
    get closeButtonTabIndex() { return this.#closeButtonTabIndex_accessor_storage; }
    set closeButtonTabIndex(value) { this.#closeButtonTabIndex_accessor_storage = value; }
    #position_accessor_storage = HelpBubbleArrowPosition.TOP_CENTER;
    get position() { return this.#position_accessor_storage; }
    set position(value) { this.#position_accessor_storage = value; }
    #buttons_accessor_storage = [];
    get buttons() { return this.#buttons_accessor_storage; }
    set buttons(value) { this.#buttons_accessor_storage = value; }
    #sortedButtons_accessor_storage = [];
    get sortedButtons() { return this.#sortedButtons_accessor_storage; }
    set sortedButtons(value) { this.#sortedButtons_accessor_storage = value; }
    #progress_accessor_storage = null;
    get progress() { return this.#progress_accessor_storage; }
    set progress(value) { this.#progress_accessor_storage = value; }
    #bodyIconName_accessor_storage = null;
    get bodyIconName() { return this.#bodyIconName_accessor_storage; }
    set bodyIconName(value) { this.#bodyIconName_accessor_storage = value; }
    #bodyIconAltText_accessor_storage = '';
    get bodyIconAltText() { return this.#bodyIconAltText_accessor_storage; }
    set bodyIconAltText(value) { this.#bodyIconAltText_accessor_storage = value; }
    timeoutMs = null;
    timeoutTimerId = null;
    debouncedUpdate = null;
    padding = { top: 0, bottom: 0, left: 0, right: 0 };
    fixed = false;
    focusAnchor = false;
    buttonListObserver_ = null;
    /**
     * HTMLElement corresponding to |this.nativeId|.
     */
    anchorElement_ = null;
    #progressData__accessor_storage = [];
    /**
     * Backing data for the dom-repeat that generates progress indicators.
     * The elements are placeholders only.
     */
    get progressData_() { return this.#progressData__accessor_storage; }
    set progressData_(value) { this.#progressData__accessor_storage = value; }
    /**
     * Watches the offsetParent for resize events, allowing the bubble to be
     * repositioned in response. Useful for when the content around a help bubble
     * target can be filtered/expanded/repositioned.
     */
    resizeObserver_ = null;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('buttons')) {
            this.sortedButtons = this.buttons.toSorted(this.buttonSortFunc_);
        }
    }
    /**
     * Shows the bubble.
     */
    show(anchorElement) {
        this.anchorElement_ = anchorElement;
        // Set up the progress track.
        if (this.progress) {
            this.progressData_ = new Array(this.progress.total);
            this.progressData_.fill(true);
        }
        else {
            this.progressData_ = [];
        }
        this.closeButtonTabIndex =
            this.buttons.length ? this.buttons.length + 2 : 1;
        assert(this.anchorElement_, 'Tried to show a help bubble but anchorElement does not exist');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened bubble.
        this.style.display = 'block';
        this.style.position = this.fixed ? 'fixed' : 'absolute';
        this.style.visibility = 'visible';
        this.removeAttribute('aria-hidden');
        this.updatePosition();
        if (this.timeoutMs !== null) {
            const timedOutCallback = () => {
                this.fire(HELP_BUBBLE_TIMED_OUT_EVENT, {
                    nativeId: this.nativeId,
                    secondaryId: this.secondaryId,
                });
            };
            this.timeoutTimerId = setTimeout(timedOutCallback, this.timeoutMs);
        }
    }
    /**
     * Hides the bubble, clears out its contents, and ensures that screen readers
     * ignore it while hidden.
     *
     * TODO(dfried): We are moving towards formalizing help bubbles as single-use;
     * in which case most of this tear-down logic can be removed since the entire
     * bubble will go away on hide.
     */
    hide() {
        this.style.display = 'none';
        this.style.visibility = 'hidden';
        this.setAttribute('aria-hidden', 'true');
        this.anchorElement_ = null;
        if (this.timeoutTimerId !== null) {
            clearInterval(this.timeoutTimerId);
            this.timeoutTimerId = null;
        }
    }
    /**
     * Retrieves the current anchor element, if set and the bubble is showing,
     * otherwise null.
     */
    getAnchorElement() {
        return this.anchorElement_;
    }
    /**
     * Returns the button with the given `buttonIndex`, or null if not found.
     */
    getButtonForTesting(buttonIndex) {
        return this.$.buttons.querySelector(`[id="${ACTION_BUTTON_ID_PREFIX + buttonIndex}"]`);
    }
    /**
     * Focuses a button in the bubble.
     */
    focus() {
        // First try to focus either the default button or any action button.
        const defaultButton = this.$.buttons.querySelector('cr-button.default-button') ||
            this.$.buttons.querySelector('cr-button');
        if (defaultButton) {
            defaultButton.focus();
            return;
        }
        // As a fallback, focus the close button before trying to focus the anchor;
        // this will allow the focus to stay on the close button if the anchor
        // cannot be focused.
        this.$.close.focus();
        // Maybe try to focus the anchor. This is preferable to focusing the close
        // button, but not every element can be focused.
        if (this.anchorElement_ && this.focusAnchor) {
            this.anchorElement_.focus();
        }
    }
    /**
     * Returns whether the default button is leading (true on Windows) vs trailing
     * (all other platforms).
     */
    static isDefaultButtonLeading() {
        return isWindows;
    }
    onCloseButtonClick_() {
        this.dismiss_();
    }
    dismiss_() {
        assert(this.nativeId, 'Dismiss: expected help bubble to have a native id.');
        this.fire(HELP_BUBBLE_DISMISSED_EVENT, {
            nativeId: this.nativeId,
            secondaryId: this.secondaryId,
            fromActionButton: false,
        });
    }
    /**
     * Handles ESC keypress (dismiss bubble) and prevents it from propagating up
     * to parent elements.
     */
    onKeydown_(e) {
        if (e.key === 'Escape') {
            e.stopPropagation();
            this.dismiss_();
        }
    }
    /**
     * Prevent event propagation. Attach to any event that should not bubble up
     * out of the help bubble.
     */
    onHelpBubbleClick_(e) {
        e.stopPropagation();
    }
    getProgressClass_(index) {
        return index < this.progress.current ? 'current-progress' :
            'total-progress';
    }
    shouldShowTitleInTopContainer_() {
        return !!this.titleText && !this.progress;
    }
    shouldShowBodyInTopContainer_() {
        return !this.progress && !this.titleText;
    }
    shouldShowBodyInMain_() {
        return !!this.progress || !!this.titleText;
    }
    shouldShowBodyIcon_() {
        return this.bodyIconName !== null && this.bodyIconName !== '';
    }
    onButtonClick_(e) {
        assert(this.nativeId, 'Action button clicked: expected help bubble to have a native ID.');
        assert(this.secondaryId, 'Action button clicked: expected help bubble to have a secondary ID.');
        // There is no access to the model index here due to limitations of
        // dom-repeat. However, the index is stored in the node's identifier.
        const index = parseInt(e.target.id.substring(ACTION_BUTTON_ID_PREFIX.length));
        this.fire(HELP_BUBBLE_DISMISSED_EVENT, {
            nativeId: this.nativeId,
            secondaryId: this.secondaryId,
            fromActionButton: true,
            buttonIndex: index,
        });
    }
    getButtonId_(item) {
        const index = this.buttons.indexOf(item);
        assert(index > -1);
        return ACTION_BUTTON_ID_PREFIX + index;
    }
    getButtonClass_(isDefault) {
        return isDefault ? 'default-button focus-outline-visible' :
            'focus-outline-visible';
    }
    getButtonTabIndex_(item) {
        const index = this.buttons.indexOf(item);
        assert(index > -1);
        return item.isDefault ? 1 : index + 2;
    }
    buttonSortFunc_(button1, button2) {
        // Default button is leading on Windows, trailing on other platforms.
        if (button1.isDefault) {
            return isWindows ? -1 : 1;
        }
        if (button2.isDefault) {
            return isWindows ? 1 : -1;
        }
        return 0;
    }
    /**
     * Determine classes that describe the arrow position relative to the
     * HelpBubble
     */
    getArrowClass_() {
        let classList = '';
        // `*-edge` classes move arrow to a HelpBubble edge
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.TOP_RIGHT:
                classList = 'top-edge ';
                break;
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                classList = 'bottom-edge ';
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
                classList = 'left-edge ';
                break;
            case HelpBubbleArrowPosition.RIGHT_TOP:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                classList = 'right-edge ';
                break;
            default:
                assertNotReached('Unknown help bubble position: ' + this.position);
        }
        // `*-position` classes move arrow along the HelpBubble edge
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
                classList += 'left-position';
                break;
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
                classList += 'horizontal-center-position';
                break;
            case HelpBubbleArrowPosition.TOP_RIGHT:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                classList += 'right-position';
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.RIGHT_TOP:
                classList += 'top-position';
                break;
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
                classList += 'vertical-center-position';
                break;
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                classList += 'bottom-position';
                break;
            default:
                assertNotReached('Unknown help bubble position: ' + this.position);
        }
        return classList;
    }
    /**
     * Sets the bubble position, as relative to that of the anchor element and
     * |this.position|.
     */
    updatePosition() {
        assert(this.anchorElement_, 'Update position: expected valid anchor element.');
        // How far HelpBubble is from anchorElement
        const ANCHOR_OFFSET = 16;
        const ARROW_WIDTH = 16;
        // The nearest an arrow can be to the adjacent HelpBubble edge
        const ARROW_OFFSET_FROM_EDGE = 22 + (ARROW_WIDTH / 2);
        // Inclusive of 8px visible arrow and 8px margin.
        const anchorRect = this.anchorElement_.getBoundingClientRect();
        const anchorRectCenter = {
            x: anchorRect.left + (anchorRect.width / 2),
            y: anchorRect.top + (anchorRect.height / 2),
        };
        const helpBubbleRect = this.getBoundingClientRect();
        // component is inserted at mixin root so start with anchor offsets
        let offsetX = this.anchorElement_.offsetLeft;
        let offsetY = this.anchorElement_.offsetTop;
        // Move HelpBubble to correct side of the anchorElement
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.TOP_RIGHT:
                offsetY += anchorRect.height + ANCHOR_OFFSET + this.padding.bottom;
                break;
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                offsetY -= (helpBubbleRect.height + ANCHOR_OFFSET + this.padding.top);
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
                offsetX += anchorRect.width + ANCHOR_OFFSET + this.padding.right;
                break;
            case HelpBubbleArrowPosition.RIGHT_TOP:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                offsetX -= (helpBubbleRect.width + ANCHOR_OFFSET + this.padding.left);
                break;
            default:
                assertNotReached();
        }
        // Move HelpBubble along the anchorElement edge according to arrow position
        switch (this.position) {
            case HelpBubbleArrowPosition.TOP_LEFT:
            case HelpBubbleArrowPosition.BOTTOM_LEFT:
                // If anchor element width is small, point arrow to center of anchor
                // element
                if ((anchorRect.left + ARROW_OFFSET_FROM_EDGE) > anchorRectCenter.x) {
                    offsetX += (anchorRect.width / 2) - ARROW_OFFSET_FROM_EDGE;
                }
                break;
            case HelpBubbleArrowPosition.TOP_CENTER:
            case HelpBubbleArrowPosition.BOTTOM_CENTER:
                offsetX += (anchorRect.width / 2) - (helpBubbleRect.width / 2);
                break;
            case HelpBubbleArrowPosition.TOP_RIGHT:
            case HelpBubbleArrowPosition.BOTTOM_RIGHT:
                // If anchor element width is small, point arrow to center of anchor
                // element
                if ((anchorRect.right - ARROW_OFFSET_FROM_EDGE) < anchorRectCenter.x) {
                    offsetX += (anchorRect.width / 2) - helpBubbleRect.width +
                        ARROW_OFFSET_FROM_EDGE;
                }
                else {
                    // Right-align bubble and anchor elements
                    offsetX += anchorRect.width - helpBubbleRect.width;
                }
                break;
            case HelpBubbleArrowPosition.LEFT_TOP:
            case HelpBubbleArrowPosition.RIGHT_TOP:
                // If anchor element height is small, point arrow to center of anchor
                // element
                if ((anchorRect.top + ARROW_OFFSET_FROM_EDGE) > anchorRectCenter.y) {
                    offsetY += (anchorRect.height / 2) - ARROW_OFFSET_FROM_EDGE;
                }
                break;
            case HelpBubbleArrowPosition.LEFT_CENTER:
            case HelpBubbleArrowPosition.RIGHT_CENTER:
                offsetY += (anchorRect.height / 2) - (helpBubbleRect.height / 2);
                break;
            case HelpBubbleArrowPosition.LEFT_BOTTOM:
            case HelpBubbleArrowPosition.RIGHT_BOTTOM:
                // If anchor element height is small, point arrow to center of anchor
                // element
                if ((anchorRect.bottom - ARROW_OFFSET_FROM_EDGE) < anchorRectCenter.y) {
                    offsetY += (anchorRect.height / 2) - helpBubbleRect.height +
                        ARROW_OFFSET_FROM_EDGE;
                }
                else {
                    // Bottom-align bubble and anchor elements
                    offsetY += anchorRect.height - helpBubbleRect.height;
                }
                break;
            default:
                assertNotReached();
        }
        this.style.top = offsetY.toString() + 'px';
        this.style.left = offsetX.toString() + 'px';
    }
}
customElements.define(HelpBubbleElement.is, HelpBubbleElement);
