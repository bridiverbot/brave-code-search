// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { getFaviconForPageURL } from '//resources/js/icon.js';
import { OpenWindowProxyImpl } from '//resources/js/open_window_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './topic_sites_dialog.css.js';
import { getHtml } from './topic_sites_dialog.html.js';
import { getDisplayDomain, getTopicSites, isTopicsFishfoodFeedbackEnabled, isVisitRejected, setVisitsRejected } from './topic_utils.js';
// Lists the sites of a topic (see `getTopicSites()`) in a modal dialog. Each
// site opens in a new tab when clicked. "Open all tabs" fires the same
// `open-related-tabs` event as the summary panel's "Open related tabs" button,
// so the page opens them the same way.
//
// When fishfood feedback is enabled, each site also has a "Doesn't belong"
// toggle, which flags all of the topic's visits to it and fires
// `rejected-visits-change`; the page owns storing the feedback.
export class TopicSitesDialogElement extends CrLitElement {
    static get is() {
        return 'topic-sites-dialog';
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
            feedbackEnabled_: { type: Boolean },
            sites_: { type: Array },
        };
    }
    #topic_accessor_storage = null;
    get topic() { return this.#topic_accessor_storage; }
    set topic(value) { this.#topic_accessor_storage = value; }
    #feedback_accessor_storage = null;
    get feedback() { return this.#feedback_accessor_storage; }
    set feedback(value) { this.#feedback_accessor_storage = value; }
    #feedbackEnabled__accessor_storage = isTopicsFishfoodFeedbackEnabled();
    get feedbackEnabled_() { return this.#feedbackEnabled__accessor_storage; }
    set feedbackEnabled_(value) { this.#feedbackEnabled__accessor_storage = value; }
    #sites__accessor_storage = [];
    get sites_() { return this.#sites__accessor_storage; }
    set sites_(value) { this.#sites__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('topic')) {
            const visits = this.topic?.visits || [];
            const sites = this.topic ? getTopicSites(this.topic) : [];
            this.sites_ =
                sites.map(site => ({
                    ...site,
                    domain: getDisplayDomain(site.url),
                    visitTimes: visits.filter(visit => visit.url === site.url)
                        .map(visit => visit.visitTime),
                }));
        }
    }
    showModal() {
        this.$.dialog.showModal();
    }
    close() {
        this.$.dialog.close();
    }
    getFavicon_(url) {
        return getFaviconForPageURL(url, /*isSyncedUrlForHistoryUi=*/ false);
    }
    onSiteClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        const site = this.sites_[index];
        if (site) {
            OpenWindowProxyImpl.getInstance().openUrl(site.url);
        }
    }
    // A site doesn't belong once all of its visits are flagged.
    isRejected_(site) {
        const rejectedVisits = this.feedback?.rejectedVisits || [];
        return site.visitTimes.every(time => isVisitRejected(rejectedVisits, time));
    }
    // TODO(crbug.com/558572977): Use internationalized strings once GRD strings
    // are added.
    getRejectAriaLabel_(site) {
        return `Doesn't belong: ${site.title || site.domain}`;
    }
    onRejectClick_(e) {
        const index = Number(e.currentTarget.dataset['index']);
        const site = this.sites_[index];
        if (!site) {
            return;
        }
        this.fire('rejected-visits-change', {
            rejectedVisits: setVisitsRejected(this.feedback?.rejectedVisits || [], site.visitTimes, !this.isRejected_(site)),
        });
    }
    onOpenAllTabsClick_() {
        this.fire('open-related-tabs');
        this.close();
    }
    onOkClick_() {
        this.close();
    }
}
customElements.define(TopicSitesDialogElement.is, TopicSitesDialogElement);
