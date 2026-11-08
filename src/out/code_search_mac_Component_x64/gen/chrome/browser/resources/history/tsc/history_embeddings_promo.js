// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './history_embeddings_promo.css.js';
import { getHtml } from './history_embeddings_promo.html.js';
// Key used in localStorage to determine if this promo has been shown. Any value
// is considered truthy.
export const HISTORY_EMBEDDINGS_PROMO_SHOWN_KEY = 'history-embeddings-promo';
// Key used in localStorage to determine if this promo has been shown for
// history embeddings with answerer enabled. Any value is considered truthy.
export const HISTORY_EMBEDDINGS_ANSWERS_PROMO_SHOWN_KEY = 'history-embeddings-answers-promo';
function getPromoShownKey() {
    return loadTimeData.getBoolean('enableHistoryEmbeddingsAnswers') ?
        HISTORY_EMBEDDINGS_ANSWERS_PROMO_SHOWN_KEY :
        HISTORY_EMBEDDINGS_PROMO_SHOWN_KEY;
}
export class HistoryEmbeddingsPromoElement extends CrLitElement {
    static get is() {
        return 'history-embeddings-promo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isAnswersEnabled_: { type: Boolean },
            shown_: { type: Boolean },
        };
    }
    #isAnswersEnabled__accessor_storage = loadTimeData.getBoolean('enableHistoryEmbeddingsAnswers');
    get isAnswersEnabled_() { return this.#isAnswersEnabled__accessor_storage; }
    set isAnswersEnabled_(value) { this.#isAnswersEnabled__accessor_storage = value; }
    #shown__accessor_storage = !(window.localStorage.getItem(getPromoShownKey()));
    get shown_() { return this.#shown__accessor_storage; }
    set shown_(value) { this.#shown__accessor_storage = value; }
    onCloseClick_() {
        window.localStorage.setItem(getPromoShownKey(), true.toString());
        this.shown_ = false;
    }
}
customElements.define(HistoryEmbeddingsPromoElement.is, HistoryEmbeddingsPromoElement);
