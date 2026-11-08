// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './contexts_viewer.css.js';
import { getHtml } from './contexts_viewer.html.js';
import { browserProxyFactory } from './webnn_internals.mojom-webui.js';
export class WebnnInternalsContextsViewerElement extends CrLitElement {
    static get is() {
        return 'webnn-internals-contexts-viewer';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            contexts_: { type: Array },
        };
    }
    listenerIds_ = [];
    #contexts__accessor_storage = [];
    get contexts_() { return this.#contexts__accessor_storage; }
    set contexts_(value) { this.#contexts__accessor_storage = value; }
    proxy_ = browserProxyFactory.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds_ =
            [this.proxy_.callbackRouter.onUpdateExistingContextDetails.addListener(this.onUpdateExistingContexts_.bind(this))];
        this.proxy_.handler.requestExistingContextsDetails().then(({ contextsInfo }) => {
            this.onUpdateExistingContexts_(contextsInfo);
        });
    }
    onUpdateExistingContexts_(contexts) {
        this.contexts_ =
            contexts.map(context => ({
                contextId: context.contextId.toString(),
                contextBackend: context.contextBackend,
                executionProviders: context.executionProviders,
            }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.proxy_.callbackRouter.removeListener(id));
        this.listenerIds_ = [];
    }
}
customElements.define(WebnnInternalsContextsViewerElement.is, WebnnInternalsContextsViewerElement);
