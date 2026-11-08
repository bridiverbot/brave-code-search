// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '//resources/cr_components/searchbox/searchbox_icon.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PageContentType } from './page_content_type.mojom-webui.js';
import { getCss } from './searchbox_ghost_loader.css.js';
import { getHtml } from './searchbox_ghost_loader.html.js';
import { BrowserProxyImpl } from './searchbox_ghost_loader_browser_proxy.js';
const SearchboxGhostLoaderElementBase = I18nMixinLit(CrLitElement);
// Displays a loading preview while waiting on autocomplete to return matches.
export class SearchboxGhostLoaderElement extends SearchboxGhostLoaderElementBase {
    static get is() {
        // LINT.IfChange(GhostLoaderTagName)
        return 'cr-searchbox-ghost-loader';
        // LINT.ThenChange(/ui/webui/resources/cr_components/searchbox/searchbox.ts:GhostLoaderTagName)
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableCsbMotionTweaks: {
                type: Boolean,
                reflect: true,
            },
            showErrorState: {
                type: Boolean,
                reflect: true,
                notify: true,
            },
            showContextualSearchboxLoadingState: {
                type: Boolean,
                reflect: true,
            },
            pageContentType: { type: Number },
            enableSummarizeSuggestionHint: {
                type: Boolean,
                reflect: true,
            },
            suggestionCount: { type: Number },
        };
    }
    #enableCsbMotionTweaks_accessor_storage = loadTimeData.getBoolean('enableCsbMotionTweaks');
    // Whether the contextual searchbox motion tweaks are enabled via feature flag.
    get enableCsbMotionTweaks() { return this.#enableCsbMotionTweaks_accessor_storage; }
    set enableCsbMotionTweaks(value) { this.#enableCsbMotionTweaks_accessor_storage = value; }
    #showErrorState_accessor_storage = false;
    // Whether the autocomplete stop timer has triggered. If it has, we should
    // hide the ghost loader. We also show the error text in this case.
    get showErrorState() { return this.#showErrorState_accessor_storage; }
    set showErrorState(value) { this.#showErrorState_accessor_storage = value; }
    #showContextualSearchboxLoadingState_accessor_storage = loadTimeData.getBoolean('showContextualSearchboxLoadingState');
    get showContextualSearchboxLoadingState() { return this.#showContextualSearchboxLoadingState_accessor_storage; }
    set showContextualSearchboxLoadingState(value) { this.#showContextualSearchboxLoadingState_accessor_storage = value; }
    #pageContentType_accessor_storage = PageContentType.kUnknown;
    // What the current page content type is.
    get pageContentType() { return this.#pageContentType_accessor_storage; }
    set pageContentType(value) { this.#pageContentType_accessor_storage = value; }
    #enableSummarizeSuggestionHint_accessor_storage = loadTimeData.getBoolean('enableSummarizeSuggestionHint');
    get enableSummarizeSuggestionHint() { return this.#enableSummarizeSuggestionHint_accessor_storage; }
    set enableSummarizeSuggestionHint(value) { this.#enableSummarizeSuggestionHint_accessor_storage = value; }
    #suggestionCount_accessor_storage = 0;
    // The number of suggestions to show in the ghost loader.
    get suggestionCount() { return this.#suggestionCount_accessor_storage; }
    set suggestionCount(value) { this.#suggestionCount_accessor_storage = value; }
    browserProxy = BrowserProxyImpl.getInstance();
    listenerIds = [];
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = this.browserProxy.callbackRouter;
        this.listenerIds = [
            callbackRouter.showErrorState.addListener(() => {
                this.showErrorState = true;
            }),
        ];
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds.forEach(id => assert(this.browserProxy.callbackRouter.removeListener(id)));
        this.listenerIds = [];
    }
    // LINT.IfChange(GhostLoaderText)
    getText() {
        if (!this.showContextualSearchboxLoadingState) {
            return this.i18n('searchboxGhostLoaderNoSuggestText');
        }
        if (this.showErrorState) {
            return this.i18n('searchboxGhostLoaderErrorText');
        }
        return this.getGhostLoaderPrimaryMessage();
    }
    // LINT.ThenChange(//chrome/browser/resources/lens/shared/searchbox_ghost_loader.html.ts:GhostLoaderText)
    showErrorStateForTesting() {
        this.showErrorState = true;
    }
    getGhostLoaderPrimaryMessage() {
        return this.pageContentType === PageContentType.kPdf ?
            this.i18n('searchboxGhostLoaderHintTextPrimaryPdf') :
            this.i18n('searchboxGhostLoaderHintTextPrimaryDefault');
    }
    getSuggestionItems() {
        if (this.suggestionCount === 0) {
            return Array(5).fill(0);
        }
        // The content of the array is unused.
        return Array(this.suggestionCount).fill(0);
    }
}
customElements.define(SearchboxGhostLoaderElement.is, SearchboxGhostLoaderElement);
