// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './pinned_toolbar_action.js';
import './toolbar_divider.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PinnedToolbarAction } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { OverflowableToolbarActionContainerMixin } from './overflowable_toolbar_action_container_mixin.js';
import { getHtml } from './pinned_toolbar_actions.html.js';
import { getCss } from './toolbar_action_container.css.js';
import { ToolbarActionContainerMixin } from './toolbar_action_container_mixin.js';
const initialState = [];
const PinnedToolbarActionsElementBase = OverflowableToolbarActionContainerMixin(ToolbarActionContainerMixin(CrLitElement, initialState));
export class PinnedToolbarActionsElement extends PinnedToolbarActionsElementBase {
    static get is() {
        return 'pinned-toolbar-actions';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dividerIndex: { type: Number },
        };
    }
    #dividerIndex_accessor_storage = -1;
    /**
     * The index of the divider within `keyedStates`, or -1 if there is no
     * divider. Updated by onKeyedStatesChanged().
     */
    get dividerIndex() { return this.#dividerIndex_accessor_storage; }
    set dividerIndex(value) { this.#dividerIndex_accessor_storage = value; }
    onKeyedStatesChanged() {
        super.onKeyedStatesChanged();
        // `dividerIndex` has to be updated on keyed states changes, after the
        // ToolbarActionContainerMixin has called reconcileKeys(), but before it has
        // counted its draggable items, so it needs to be updated here, in its own
        // callback in the middle of ToolbarActionContainerMixin.onWillUpdate(),
        // rather that being updated here, rather than in this class's
        // onWillUpdate() method. Moreover, since reconcileKeys() isn't the only
        // method that updates keys, when animations are enabled, we can't override
        // reconcileKeys() and do the update there.
        this.dividerIndex = this.keyedStates.findIndex(s => s.key === PinnedToolbarAction.kDivider.toString());
    }
    getActions() {
        return Array.from(this.shadowRoot.children);
    }
    // ToolbarActionContainerMixin override
    getKey(state) {
        return state.action.toString();
    }
    // ToolbarActionContainerMixin override
    isInitialUpdate(newStates) {
        return (!this.keyedStates || this.keyedStates.length === 0) &&
            // Initial updates contain only pinned items, which requires a divider.
            newStates.some(s => s.action === PinnedToolbarAction.kDivider);
    }
    moveItem(id, index) {
        const actionId = parseInt(id, 10);
        BrowserProxyImpl.getInstance().toolbarUIHandler.movePinnedToolbarAction(actionId, index);
    }
    moveItemBy(id, delta) {
        const actionId = parseInt(id, 10);
        BrowserProxyImpl.getInstance().toolbarUIHandler.movePinnedToolbarActionBy(actionId, delta);
    }
    getMimeType() {
        return 'application/x-webui-pinned-action';
    }
    getBroadcastChannelName() {
        return 'pinned-action-drag';
    }
    get childTagName() {
        return 'pinned-toolbar-action';
    }
    isDraggable(state, index) {
        // Only pinned actions, which precede the divider, may be dragged. If there
        // is no divider, all actions are popped out, so none are draggable.
        if (index >= this.dividerIndex) {
            return false;
        }
        return state.enabled;
    }
}
customElements.define(PinnedToolbarActionsElement.is, PinnedToolbarActionsElement);
