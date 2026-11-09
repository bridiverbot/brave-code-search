// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './circular_progress_ring.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SaveToDriveState } from '../constants.js';
import { ViewerSaveControlsMixin } from './viewer_save_controls_mixin.js';
import { getCss } from './viewer_save_to_drive_controls.css.js';
import { getHtml } from './viewer_save_to_drive_controls.html.js';
const ViewerSaveControlsBase = ViewerSaveControlsMixin(CrLitElement);
export class ViewerSaveToDriveControlsElement extends ViewerSaveControlsBase {
    static get is() {
        return 'viewer-save-to-drive-controls';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
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
