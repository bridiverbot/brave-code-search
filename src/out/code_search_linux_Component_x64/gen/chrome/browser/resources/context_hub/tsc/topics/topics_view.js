// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import './topic_card.js';
import './topic_feedback_export_dialog.js';
import { OpenWindowProxyImpl } from '//resources/js/open_window_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../context_hub.mojom-webui.js';
import { isTopicFeedbackEmpty, isTopicsEnabled, isTopicsFishfoodFeedbackEnabled, toTopicItem } from './topic_utils.js';
import { getCss } from './topics_view.css.js';
import { getHtml } from './topics_view.html.js';
// TODO(crbug.com/558572977): Use internationalized strings once GRD
// strings are added.
export class TopicsViewElement extends CrLitElement {
    static get is() {
        return 'topics-view';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            topics: { type: Array },
            loadState_: { type: String },
            feedbacks_: { type: Object },
            feedbackEnabled_: { type: Boolean },
            showExportDialog_: { type: Boolean },
        };
    }
    #topics_accessor_storage = [];
    get topics() { return this.#topics_accessor_storage; }
    set topics(value) { this.#topics_accessor_storage = value; }
    #loadState__accessor_storage = 'loading';
    // Nothing is rendered while loading, so that "No topics yet." doesn't flash
    // up before the topics arrive.
    get loadState_() { return this.#loadState__accessor_storage; }
    set loadState_(value) { this.#loadState__accessor_storage = value; }
    #feedbacks__accessor_storage = new Map();
    // Stored fishfood feedback, by topic id. Only loaded when fishfood feedback
    // is enabled.
    get feedbacks_() { return this.#feedbacks__accessor_storage; }
    set feedbacks_(value) { this.#feedbacks__accessor_storage = value; }
    #feedbackEnabled__accessor_storage = isTopicsFishfoodFeedbackEnabled();
    get feedbackEnabled_() { return this.#feedbackEnabled__accessor_storage; }
    set feedbackEnabled_(value) { this.#feedbackEnabled__accessor_storage = value; }
    #showExportDialog__accessor_storage = false;
    // The fishfood feedback export dialog is only rendered while open, so that
    // it fetches a fresh preview each time it opens.
    get showExportDialog_() { return this.#showExportDialog__accessor_storage; }
    set showExportDialog_(value) { this.#showExportDialog__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.fetchTopics_();
        document.addEventListener('visibilitychange', this.onVisibilityChange_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('visibilitychange', this.onVisibilityChange_);
    }
    // Topics can also be rated on their details page, which opens in another
    // tab, so reload the ratings whenever this tab is shown again.
    onVisibilityChange_ = () => {
        if (document.visibilityState === 'visible') {
            this.refreshFeedbacks_();
        }
    };
    async fetchTopics_() {
        // `GetTopics()` is gated by the kTopics runtime feature in the browser
        // process, so don't call it when the feature is off.
        if (!isTopicsEnabled()) {
            this.loadState_ = 'loaded';
            return;
        }
        this.loadState_ = 'loading';
        try {
            const [{ topics }, feedbacks] = await Promise.all([
                browserProxyFactory.getInstance().handler.getTopics(),
                this.fetchFeedbacks_(),
            ]);
            this.topics = topics.map(toTopicItem);
            this.feedbacks_ = new Map(this.deleteFeedbacksOfOldTopics_(feedbacks).map(feedback => [feedback.id, feedback]));
            this.loadState_ = 'loaded';
        }
        catch (e) {
            console.error('Failed to fetch topics:', e);
            this.loadState_ = 'error';
        }
    }
    // The topics still load if the feedback can't, just without ratings.
    async fetchFeedbacks_() {
        // The feedback methods are gated in the browser process too.
        if (!this.feedbackEnabled_) {
            return [];
        }
        try {
            const { feedbacks } = await browserProxyFactory.getInstance().handler.getTopicFeedbacks();
            return feedbacks;
        }
        catch (e) {
            console.error('Failed to fetch topic feedback:', e);
            return [];
        }
    }
    // Deletes the feedback on topics that are no longer shown, e.g. after the
    // daily rebuild, and returns the rest. Keeps it all if there are no topics.
    deleteFeedbacksOfOldTopics_(feedbacks) {
        if (this.topics.length === 0) {
            return feedbacks;
        }
        const topicIds = new Set(this.topics.map(topic => topic.id));
        const handler = browserProxyFactory.getInstance().handler;
        const kept = [];
        for (const feedback of feedbacks) {
            if (topicIds.has(feedback.id)) {
                kept.push(feedback);
            }
            else {
                handler.deleteTopicFeedback(feedback.id);
            }
        }
        return kept;
    }
    // Unlike the initial load, keeps the current ratings if reloading fails.
    async refreshFeedbacks_() {
        if (!this.feedbackEnabled_ || this.loadState_ !== 'loaded') {
            return;
        }
        try {
            const { feedbacks } = await browserProxyFactory.getInstance().handler.getTopicFeedbacks();
            this.feedbacks_ =
                new Map(feedbacks.map(feedback => [feedback.id, feedback]));
        }
        catch (e) {
            console.error('Failed to reload topic feedback:', e);
        }
    }
    isEmpty_() {
        return this.loadState_ === 'loaded' && this.topics.length === 0;
    }
    hasTopics_() {
        return this.loadState_ === 'loaded' && this.topics.length > 0;
    }
    getFeedback_(topic) {
        return this.feedbacks_.get(topic.id) || null;
    }
    onTopicFeedbackChange_(e) {
        const feedback = e.detail.feedback;
        if (!this.feedbackEnabled_ || !feedback.id) {
            return;
        }
        const handler = browserProxyFactory.getInstance().handler;
        const feedbacks = new Map(this.feedbacks_);
        if (isTopicFeedbackEmpty(feedback)) {
            handler.deleteTopicFeedback(feedback.id);
            feedbacks.delete(feedback.id);
        }
        else {
            handler.setTopicFeedback(feedback);
            feedbacks.set(feedback.id, feedback);
        }
        this.feedbacks_ = feedbacks;
    }
    onSendFeedbackClick_() {
        this.showExportDialog_ = true;
    }
    onExportDialogClose_() {
        this.showExportDialog_ = false;
    }
    onTopicFeedbacksCleared_() {
        this.feedbacks_ = new Map();
    }
    onJumpBackIn_(e) {
        const topic = e.detail.topic;
        if (!topic.id) {
            return;
        }
        // Only the id is passed; the details page fetches the topic itself, so
        // that it always shows current data and nothing in the URL is trusted.
        const params = new URLSearchParams();
        params.set('id', topic.id);
        // Signals the topic details page to open the Glic side panel once it
        // loads. Only this entry point sets it, so a topic page reached without it
        // (e.g. a hand-typed URL) never forces the side panel open. It does persist
        // in the URL, so reload and session restore reopen the panel; see
        // TopicDetailsElement.maybeOpenGlicPanel_ for why that is intentional.
        // Whether Glic is actually available is decided browser-side in
        // PageHandler::OpenGlicPanel, which no-ops when it is not.
        params.set('open_glic', '1');
        const topicUrl = `chrome://context-hub/topic_details?${params.toString()}`;
        const handler = browserProxyFactory.getInstance().handler;
        if (handler) {
            handler.openTopic({ topicUrl });
        }
        else {
            OpenWindowProxyImpl.getInstance().openUrl(topicUrl);
        }
    }
}
customElements.define(TopicsViewElement.is, TopicsViewElement);
