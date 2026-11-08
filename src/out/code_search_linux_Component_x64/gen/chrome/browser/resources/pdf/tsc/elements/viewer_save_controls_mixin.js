// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
const SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
export const ViewerSaveControlsMixin = (superClass) => {
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
                    this.dispatchSaveEvent_(SaveRequestType.ORIGINAL);
                }
            });
        }
        onSaveEditedClick() {
            this.getMenu().close();
            // 
            // Only save as annotation when there are edits.
            if (this.hasInk2Edits) {
                this.dispatchSaveEvent_(SaveRequestType.ANNOTATION);
                return;
            }
            // 
            this.dispatchSaveEvent_(SaveRequestType.EDITED);
        }
        onSaveOriginalClick() {
            this.dispatchSaveEvent_(SaveRequestType.ORIGINAL);
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
