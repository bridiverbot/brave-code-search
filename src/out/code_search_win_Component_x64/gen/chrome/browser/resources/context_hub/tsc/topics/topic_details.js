// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import '/strings.m.js';
import './topic_feedback_controls.js';
import './topic_hero.js';
import './topic_sites_dialog.js';
import './topic_summary_panel.js';
import './topic_visits_panel.js';
import { FocusOutlineManager } from '//resources/js/focus_outline_manager.js';
import { getFaviconForPageURL } from '//resources/js/icon.js';
import { OpenWindowProxyImpl } from '//resources/js/open_window_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory, TopicDefectCategory } from '../context_hub.mojom-webui.js';
import { getCss } from './topic_details.css.js';
import { getHtml } from './topic_details.html.js';
import { createDuplicateTopicSnapshot, createEmptyTopicFeedback, createTopicSnapshot, getOpenableUrls, getTopicQueries, getTopicSites, isCrIcon, isTopicFeedbackEmpty, isTopicsEnabled, isTopicsFishfoodFeedbackEnabled, toTopicItem } from './topic_utils.js';
const MAX_URLS_TO_OPEN = 10;
// How many favicons the sites button shows next to its label.
const MAX_SITES_BUTTON_FAVICONS = 3;
// A tab of the details page. To add one, append it here and add its panel to
// the `cr-page-selector` in topic_details.html.ts, in the same order.
// TODO(crbug.com/558572977): Use internationalized strings once GRD strings
// are added.
export const TOPIC_DETAILS_TABS = ['Summary'];
// The fishfood-only tab listing the topic's visits, after TOPIC_DETAILS_TABS.
export const TOPIC_VISITS_TAB = 'Topic Visits (Fishfood)';
// The tabs to show. A copy, since `cr-tabs` takes a mutable array.
function getTabNames(feedbackEnabled) {
    const tabNames = [...TOPIC_DETAILS_TABS];
    if (feedbackEnabled) {
        tabNames.push(TOPIC_VISITS_TAB);
    }
    return tabNames;
}
// Builds the suggested prompts sent when the Glic side panel opens, using the
// continuation queries the backend generated for `topic`. Returning an empty
// list is fine: `PageHandler::OpenGlicPanel()` leaves Zero State Suggestions
// enabled when the page has nothing topic-specific to offer.
// TODO(crbug.com/567878517): The Glic web client doesn't show these as
// suggestions yet.
export function getSuggestedPrompts(topic) {
    return getTopicQueries(topic).map(query => query.text);
}
// The topic details page (chrome://context-hub/topic_details?id=...). Owns
// loading the topic, page-level state (document title, selected tab, Glic
// panel) and layout; the content itself lives in child elements that take the
// topic as a property.
export class TopicDetailsElement extends CrLitElement {
    static get is() {
        return 'topic-details';
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
            loadState_: { type: String },
            selectedTab_: { type: Number },
            sites_: { type: Array },
            tabNames_: { type: Array },
            feedbackEnabled_: { type: Boolean },
            feedback_: { type: Object },
            otherTopics_: { type: Array },
        };
    }
    #topic_accessor_storage = null;
    // Set directly (e.g. by tests) to skip fetching the topic named in the URL.
    get topic() { return this.#topic_accessor_storage; }
    set topic(value) { this.#topic_accessor_storage = value; }
    #loadState__accessor_storage = 'loading';
    // Nothing is rendered while loading. 'not-found' is used when the topic in
    // the URL doesn't exist (e.g. it expired or was deleted since the page was
    // opened) or couldn't be fetched.
    get loadState_() { return this.#loadState__accessor_storage; }
    set loadState_(value) { this.#loadState__accessor_storage = value; }
    #selectedTab__accessor_storage = 0;
    get selectedTab_() { return this.#selectedTab__accessor_storage; }
    set selectedTab_(value) { this.#selectedTab__accessor_storage = value; }
    #sites__accessor_storage = [];
    // What the sites button counts and the sites dialog lists. Derived from
    // `topic`.
    get sites_() { return this.#sites__accessor_storage; }
    set sites_(value) { this.#sites__accessor_storage = value; }
    #feedbackEnabled__accessor_storage = isTopicsFishfoodFeedbackEnabled();
    get feedbackEnabled_() { return this.#feedbackEnabled__accessor_storage; }
    set feedbackEnabled_(value) { this.#feedbackEnabled__accessor_storage = value; }
    #tabNames__accessor_storage = getTabNames(this.feedbackEnabled_);
    get tabNames_() { return this.#tabNames__accessor_storage; }
    set tabNames_(value) { this.#tabNames__accessor_storage = value; }
    #feedback__accessor_storage = null;
    // The fishfood feedback stored for `topic`, or null if it has none.
    get feedback_() { return this.#feedback__accessor_storage; }
    set feedback_(value) { this.#feedback__accessor_storage = value; }
    #otherTopics__accessor_storage = [];
    // The other topics, which `topic` can be marked a duplicate of.
    get otherTopics_() { return this.#otherTopics__accessor_storage; }
    set otherTopics_(value) { this.#otherTopics__accessor_storage = value; }
    // Guards against re-running init (a duplicate fetch, reopening the Glic
    // panel) if the element is re-attached to the DOM, whether or not the first
    // fetch has completed.
    initStarted_ = false;
    connectedCallback() {
        super.connectedCallback();
        // Shows focus rings on keyboard navigation only, e.g. in `cr-tabs`.
        FocusOutlineManager.forDocument(document);
        this.initTopic_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('topic')) {
            this.sites_ = this.topic ? getTopicSites(this.topic) : [];
        }
    }
    async initTopic_() {
        if (this.initStarted_) {
            return;
        }
        this.initStarted_ = true;
        if (!this.topic) {
            this.topic = await this.fetchTopic_();
        }
        if (!this.topic) {
            this.loadState_ = 'not-found';
            return;
        }
        this.loadState_ = 'loaded';
        this.updateDocumentTitle_();
        // Only once the topic has loaded, so the panel gets its suggested prompts.
        this.maybeOpenGlicPanel_();
        this.loadFeedback_();
    }
    // Fetches the topic named by the `id` query parameter from the browser.
    // Nothing else is read from the URL: the browser is the source of truth for
    // the topic's contents.
    async fetchTopic_() {
        const id = new URLSearchParams(window.location.search).get('id');
        if (!id || !isTopicsEnabled()) {
            return null;
        }
        try {
            const { topic } = await browserProxyFactory.getInstance().handler.getTopic(id);
            return topic ? toTopicItem(topic) : null;
        }
        catch (e) {
            console.error('Failed to fetch topic:', e);
            return null;
        }
    }
    // Opens the Glic side panel bound to this tab, sending topic-specific
    // suggested prompts. Only runs when the page was opened from the "jump back
    // in" entry point, which sets the `open_glic` query parameter.
    //
    // The parameter is deliberately left in the URL so this runs on every load.
    // That way the panel comes back if the user closed it, and it is sent this
    // topic's prompts again if it was already open.
    maybeOpenGlicPanel_() {
        const params = new URLSearchParams(window.location.search);
        if (!this.topic || params.get('open_glic') !== '1' || !isTopicsEnabled()) {
            return;
        }
        // Glic availability is deliberately not checked here; the browser side is
        // authoritative and no-ops when Glic is unavailable for the profile.
        browserProxyFactory.getInstance().handler.openGlicPanel(getSuggestedPrompts(this.topic));
    }
    // Prefixes the title with the topic's emoji, if it has one. The favicon is
    // deliberately left as the default Context Hub icon: an emoji drawn into an
    // SVG favicon renders without color and duplicates the one in the title.
    updateDocumentTitle_() {
        const icon = this.topic?.icon || '';
        const title = this.topic?.title || 'Topic Details';
        document.title = !icon || isCrIcon(icon) ? title : `${icon} ${title}`;
    }
    // Loads this topic's fishfood feedback, and the other topics it can be
    // marked a duplicate of. The page works without them, just without ratings.
    async loadFeedback_() {
        // The feedback methods are gated in the browser process too.
        if (!this.feedbackEnabled_ || !this.topic) {
            return;
        }
        const id = this.topic.id;
        try {
            const handler = browserProxyFactory.getInstance().handler;
            const [{ feedbacks }, { topics }] = await Promise.all([
                handler.getTopicFeedbacks(),
                handler.getTopics(),
            ]);
            // Edits made while loading are kept over the stored feedback.
            if (!this.feedback_) {
                this.feedback_ = feedbacks.find(feedback => feedback.id === id) || null;
            }
            this.otherTopics_ =
                topics.filter(topic => topic.id !== id).map(toTopicItem);
        }
        catch (e) {
            console.error('Failed to fetch topic feedback:', e);
        }
    }
    // Applies `changes` to this topic's feedback and saves it, deleting it once
    // nothing is left.
    updateFeedback_(changes) {
        if (!this.feedbackEnabled_ || !this.topic) {
            return;
        }
        const feedback = {
            ...(this.feedback_ || createEmptyTopicFeedback(this.topic)),
            ...changes,
            snapshot: createTopicSnapshot(this.topic),
        };
        this.feedback_ = feedback;
        const handler = browserProxyFactory.getInstance().handler;
        if (isTopicFeedbackEmpty(feedback)) {
            handler.deleteTopicFeedback(feedback.id);
        }
        else {
            handler.setTopicFeedback(feedback);
        }
    }
    // Only the parts `<topic-feedback-controls>` edits are taken, so a stale
    // copy of the rest can't overwrite newer edits from the other panels.
    onTopicFeedbackChange_(e) {
        const { rating, defects, comment } = e.detail.feedback;
        const changes = { rating, defects, comment };
        if (!defects.includes(TopicDefectCategory.kDuplicateOfAnotherTopic)) {
            changes.duplicateOf = null;
        }
        this.updateFeedback_(changes);
    }
    onQueryFeedbacksChange_(e) {
        this.updateFeedback_({ queryFeedbacks: e.detail.queryFeedbacks });
    }
    onCollectionFeedbacksChange_(e) {
        this.updateFeedback_({ collectionFeedbacks: e.detail.collectionFeedbacks });
    }
    onRejectedVisitsChange_(e) {
        this.updateFeedback_({ rejectedVisits: e.detail.rejectedVisits });
    }
    // The select of the topic to combine this one with only shows once the rater
    // picked the Duplicate defect.
    isDuplicateSelected_() {
        return !!this.feedback_?.defects.includes(TopicDefectCategory.kDuplicateOfAnotherTopic);
    }
    // TODO(crbug.com/558572977): Use internationalized strings once GRD strings
    // are added.
    getDuplicateOptions_() {
        const options = this.otherTopics_.map(topic => ({ id: topic.id, title: topic.title || 'Untitled topic' }));
        // Keeps a stored choice selectable after that topic expired.
        const duplicateOf = this.feedback_?.duplicateOf;
        if (duplicateOf && !options.some(option => option.id === duplicateOf.id)) {
            options.push({
                id: duplicateOf.id,
                title: duplicateOf.title || 'Untitled topic',
            });
        }
        return options;
    }
    getDuplicateOfId_() {
        return this.feedback_?.duplicateOf?.id || '';
    }
    onDuplicateChange_(e) {
        const id = e.target.value;
        if (id === this.getDuplicateOfId_()) {
            return;
        }
        if (!id) {
            this.updateFeedback_({ duplicateOf: null });
            return;
        }
        const target = this.otherTopics_.find(topic => topic.id === id);
        if (target) {
            this.updateFeedback_({ duplicateOf: createDuplicateTopicSnapshot(target) });
        }
    }
    onTabsSelectedChanged_(e) {
        this.selectedTab_ = e.detail.value;
    }
    // The first few sites' favicons are shown on the sites button.
    getButtonFaviconUrls_() {
        return this.sites_.slice(0, MAX_SITES_BUTTON_FAVICONS)
            .map(site => site.url);
    }
    getFavicon_(url) {
        return getFaviconForPageURL(url, /*isSyncedUrlForHistoryUi=*/ false);
    }
    // TODO(crbug.com/558572977): Use internationalized (plural) strings once GRD
    // strings are added.
    getSitesLabel_() {
        const count = this.sites_.length;
        return count === 1 ? '1 site' : `${count} sites`;
    }
    onSitesButtonClick_() {
        this.shadowRoot.querySelector('#sitesDialog')
            ?.showModal();
    }
    // Opens the topic's related tabs in a tab group. Used by both the summary
    // panel's "Open related tabs" button and the sites dialog's "Open all tabs"
    // button.
    async onOpenRelatedTabs_() {
        if (!this.topic) {
            return;
        }
        const urls = getOpenableUrls(this.topic);
        if (urls.length === 0) {
            return;
        }
        const groupLabel = this.topic.title || 'Related Tabs';
        // Attempt to open tabs in a tab group via the Mojo PageHandler.
        // `OpenUrlsInTabGroup()` is gated by the kTopics runtime feature, so fall
        // through to opening individual tabs when it is off.
        if (isTopicsEnabled()) {
            try {
                const { success } = await browserProxyFactory.getInstance().handler.openUrlsInTabGroup(groupLabel, urls);
                if (success) {
                    return;
                }
            }
            catch (e) {
                // Fallback if backend method call fails or is not supported.
                console.error('Failed to open tabs in group:', e);
            }
        }
        // Fallback: open capped URLs in new tabs. Note that opening multiple tabs
        // via window.open is best-effort and may be throttled by popup blockers.
        for (const url of urls.slice(0, MAX_URLS_TO_OPEN)) {
            OpenWindowProxyImpl.getInstance().openUrl(url);
        }
    }
}
customElements.define(TopicDetailsElement.is, TopicDetailsElement);
