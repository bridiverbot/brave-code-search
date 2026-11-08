// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './chrome_finds_internals.mojom-webui.js';
export class ChromeFindsInternalsAppElement extends CrLitElement {
    static get is() {
        return 'chrome-finds-internals-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            historyCount_: { type: Number },
            historyJson_: { type: String },
            logs_: { type: Array },
        };
    }
    #historyCount__accessor_storage = 10;
    get historyCount_() { return this.#historyCount__accessor_storage; }
    set historyCount_(value) { this.#historyCount__accessor_storage = value; }
    #historyJson__accessor_storage = '';
    get historyJson_() { return this.#historyJson__accessor_storage; }
    set historyJson_(value) { this.#historyJson__accessor_storage = value; }
    #logs__accessor_storage = [];
    get logs_() { return this.#logs__accessor_storage; }
    set logs_(value) { this.#logs__accessor_storage = value; }
    handler_ = new PageHandlerRemote();
    callbackRouter_ = new PageCallbackRouter();
    constructor() {
        super();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter_.$.bindNewPipeAndPassRemote(), this.handler_.$.bindNewPipeAndPassReceiver());
        this.callbackRouter_.logMessageAdded.addListener(message => {
            this.appendLog_(message);
        });
    }
    appendLog_(message) {
        this.logs_ = [...this.logs_, message];
        this.updateComplete.then(() => {
            const container = this.shadowRoot.getElementById('log-container');
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        });
    }
    onHistoryCountChange_(e) {
        this.historyCount_ =
            parseInt(e.target.value, 10) || 0;
    }
    onRunFindsModelClick_() {
        this.appendLog_('Triggering Finds Service...');
        this.handler_.getFindsServiceModelResponse();
    }
    async onDumpHistoryClick_() {
        this.appendLog_(`Requesting history JSON (count: ${this.historyCount_})...`);
        const { json } = await this.handler_.getHistoryJson(this.historyCount_);
        this.historyJson_ = json;
        this.appendLog_('History JSON received.');
    }
    onCopyHistoryClick_() {
        const output = this.shadowRoot.querySelector('#history-json-output');
        assert(output);
        output.select();
        document.execCommand('copy');
        this.appendLog_('JSON copied to clipboard.');
    }
}
customElements.define(ChromeFindsInternalsAppElement.is, ChromeFindsInternalsAppElement);
