// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { getFaviconForPageURL } from '//resources/js/icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { formatTopicTime, getDisplayDomain, isVisitRejected, setVisitsRejected } from './topic_utils.js';
import { getCss } from './topic_visits_panel.css.js';
import { getHtml } from './topic_visits_panel.html.js';
// The fishfood-only "Topic Visits (Fishfood)" tab of the topic details page.
// Lists every visit of the topic, most recent first, each with a "Doesn't
// belong" toggle. Fires `rejected-visits-change`; the page owns storing the
// feedback. Only render it when `isTopicsFishfoodFeedbackEnabled()` is true.
// TODO(crbug.com/558572977): Use internationalized strings once GRD strings
// are added.
export class TopicVisitsPanelElement extends CrLitElement {
    static get is() {
        return 'topic-visits-panel';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            topic: { type: Object },
            // The stored fishfood feedback on `topic`, if any.
            feedback: { type: Object },
            visits_: { type: Array },
        };
    }
    #topic_accessor_storage = null;
    get topic() { return this.#topic_accessor_storage; }
    set topic(value) { this.#topic_accessor_storage = value; }
    #feedback_accessor_storage = null;
    get feedback() { return this.#feedback_accessor_storage; }
    set feedback(value) { this.#feedback_accessor_storage = value; }
    #visits__accessor_storage = [];
    get visits_() { return this.#visits__accessor_storage; }
    set visits_(value) { this.#visits__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('topic')) {
            this.visits_ = (this.topic?.visits || [])
                .map(visit => ({
                ...visit,
                domain: getDisplayDomain(visit.url),
                time: formatTopicTime(visit.visitTime),
            }))
                .sort((a, b) => {
                const diff = b.visitTime.internalValue -
                    a.visitTime.internalValue;
                return diff === 0n ? 0 : (diff > 0n ? 1 : -1);
            });
        }
    }
    getFavicon_(url) {
        return getFaviconForPageURL(url, /*isSyncedUrlForHistoryUi=*/ false);
    }
    isRejected_(visit) {
        return isVisitRejected(this.feedback?.rejectedVisits || [], visit.visitTime);
    }
    getRejectAriaLabel_(visit) {
        return `Doesn't belong: ${visit.title || visit.domain}`;
    }
    onRejectClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        const visit = this.visits_[index];
        if (!visit) {
            return;
        }
        this.fire('rejected-visits-change', {
            rejectedVisits: setVisitsRejected(this.feedback?.rejectedVisits || [], [visit.visitTime], !this.isRejected_(visit)),
        });
    }
}
customElements.define(TopicVisitsPanelElement.is, TopicVisitsPanelElement);
