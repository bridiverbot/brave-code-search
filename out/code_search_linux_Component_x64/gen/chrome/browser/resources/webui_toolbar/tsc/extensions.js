// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './extension.js';
import './toolbar_divider.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getHtml } from './extensions.html.js';
import { OverflowableToolbarActionContainerMixin } from './overflowable_toolbar_action_container_mixin.js';
import { getCss } from './toolbar_action_container.css.js';
import { ToolbarActionContainerMixin } from './toolbar_action_container_mixin.js';
const initialState = [];
const ExtensionsElementBase = OverflowableToolbarActionContainerMixin(ToolbarActionContainerMixin(CrLitElement, initialState));
export class ExtensionsElement extends ExtensionsElementBase {
    static get is() {
        return 'webui-toolbar-extensions';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    // Whether the browser's initial state has been rendered. Until then, all
    // updates are treated as initial.
    initialStateRendered_ = false;
    disconnectedCallback() {
        super.disconnectedCallback();
        this.initialStateRendered_ = false;
    }
    // Called once the browser's initial state has been rendered.
    markInitialStateRendered() {
        this.initialStateRendered_ = true;
    }
    // ToolbarActionContainerMixin override
    isInitialUpdate(_newStates) {
        return !this.initialStateRendered_;
    }
    // ToolbarActionContainerMixin override
    getKey(state) {
        return state.id;
    }
    // OverflowableToolbarActionContainerMixin override. Relies on the template
    // only containing extension actions and the divider.
    getActions() {
        return Array.from(this.shadowRoot.children);
    }
    moveItem(id, index) {
        BrowserProxyImpl.getInstance().toolbarUIHandler.moveExtensionAction(id, index);
    }
    moveItemBy(id, delta) {
        BrowserProxyImpl.getInstance().toolbarUIHandler.moveExtensionActionBy(id, delta);
    }
    getMimeType() {
        return 'application/x-webui-extension-action';
    }
    getBroadcastChannelName() {
        return 'extension-action-drag';
    }
    get childTagName() {
        return 'webui-toolbar-extension';
    }
    isDraggable(state, _index) {
        return state.id !== '';
    }
}
customElements.define(ExtensionsElement.is, ExtensionsElement);
