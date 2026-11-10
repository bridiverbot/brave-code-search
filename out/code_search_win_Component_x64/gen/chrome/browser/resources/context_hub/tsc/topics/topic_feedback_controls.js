// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TopicDefectCategory, TopicRating } from '../context_hub.mojom-webui.js';
import { getCss } from './topic_feedback_controls.css.js';
import { getHtml } from './topic_feedback_controls.html.js';
import { createEmptyTopicFeedback, createTopicSnapshot, formatTopicFeedbackComment, hasSameRating, hasTopicFeedbackCommentText, isTopicFeedbackValid, normalizeTopicFeedbackComment, parseTopicFeedbackComment, TOPIC_DEFECT_CATEGORIES, TOPIC_SUGGESTION_FIELDS } from './topic_utils.js';
// Fishfood-only controls for rating a topic: thumbs up/down and, on a thumbs
// down, defect chips and a comment, plus a field asking for a better title,
// emoji or overview when that's the defect. Reports valid edits as
// `topic-feedback-change`; storing them is up to the embedder. Only render it
// when `isTopicsFishfoodFeedbackEnabled()` is true.
// TODO(crbug.com/558572977): Use internationalized strings once GRD
// strings are added.
export class TopicFeedbackControlsElement extends CrLitElement {
    static get is() {
        return 'topic-feedback-controls';
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
            // The stored feedback on `topic`, if any.
            feedback: { type: Object },
            draft_: { type: Object, state: true },
            popoverDefects: {
                type: Boolean,
                attribute: 'popover-defects',
                reflect: true,
            },
            defectsPopoverOpen_: { type: Boolean, state: true },
        };
    }
    #topic_accessor_storage = null;
    get topic() { return this.#topic_accessor_storage; }
    set topic(value) { this.#topic_accessor_storage = value; }
    #feedback_accessor_storage = null;
    get feedback() { return this.#feedback_accessor_storage; }
    set feedback(value) { this.#feedback_accessor_storage = value; }
    #popoverDefects_accessor_storage = false;
    // Shows the defects and comment in a popover under the thumbs, opened on a
    // thumbs down and reopened from a "N reasons" button, rather than inline.
    // For embedders with little room, e.g. the topic details header.
    get popoverDefects() { return this.#popoverDefects_accessor_storage; }
    set popoverDefects(value) { this.#popoverDefects_accessor_storage = value; }
    #draft__accessor_storage = null;
    // The feedback being edited. Only reported via `topic-feedback-change`
    // while it's valid, so it can be ahead of `feedback`. Always replaced rather
    // than mutated, so it can share arrays with `feedback`.
    get draft_() { return this.#draft__accessor_storage; }
    set draft_(value) { this.#draft__accessor_storage = value; }
    #defectsPopoverOpen__accessor_storage = false;
    get defectsPopoverOpen_() { return this.#defectsPopoverOpen__accessor_storage; }
    set defectsPopoverOpen_(value) { this.#defectsPopoverOpen__accessor_storage = value; }
    defectCategories_ = TOPIC_DEFECT_CATEGORIES;
    // Set when a thumbs down should open the defects popover once rendered.
    openDefectsPopover_ = false;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('feedback')) {
            this.draft_ =
                this.getDraftForFeedback_(changedProperties.get('feedback') || null);
        }
    }
    // Takes the new `feedback`, but keeps unsaved edits to the rating, defects
    // and comment if only other parts of the feedback (e.g. rejected visits,
    // edited elsewhere on the page) changed.
    getDraftForFeedback_(previous) {
        if (!this.draft_ || !this.feedback || !previous ||
            !hasSameRating(previous, this.feedback)) {
            return this.feedback;
        }
        const { rating, defects, comment } = this.draft_;
        return { ...this.feedback, rating, defects, comment };
    }
    getThumbsUpAriaLabel_() {
        return this.getAriaLabel_('Good topic:', 'Good topic');
    }
    getThumbsDownAriaLabel_() {
        return this.getAriaLabel_('Bad topic:', 'Bad topic');
    }
    // Names the topic, since these controls can be repeated on every card.
    getAriaLabel_(prefix, fallback) {
        return this.topic?.title.trim() ? `${prefix} ${this.topic.title}` :
            fallback;
    }
    isLiked_() {
        return this.draft_?.rating === TopicRating.kLiked;
    }
    isDisliked_() {
        return this.draft_?.rating === TopicRating.kDisliked;
    }
    isDefectSelected_(category) {
        return !!this.draft_?.defects.includes(category);
    }
    getComment_() {
        return parseTopicFeedbackComment(this.draft_?.comment || '').text;
    }
    // The suggestion fields for the selected defects.
    getSuggestionFields_() {
        return TOPIC_SUGGESTION_FIELDS.filter(field => this.isDefectSelected_(field.defect));
    }
    getSuggestion_(defect) {
        return parseTopicFeedbackComment(this.draft_?.comment || '')
            .suggestions.get(defect) ||
            '';
    }
    isCommentRequired_() {
        return this.isDefectSelected_(TopicDefectCategory.kOther);
    }
    isCommentMissing_() {
        return !!this.draft_ && this.isCommentRequired_() &&
            !hasTopicFeedbackCommentText(this.draft_);
    }
    getCommentError_() {
        return this.isCommentMissing_() ?
            'Describe the issue in a comment when "Other" is selected' :
            '';
    }
    isDefectMissing_() {
        return this.isDisliked_() && this.draft_?.defects.length === 0;
    }
    getReasonsButtonLabel_() {
        const count = this.draft_?.defects.length || 0;
        if (count === 0) {
            return 'Add reasons';
        }
        return count === 1 ? '1 reason' : `${count} reasons`;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (this.openDefectsPopover_) {
            this.openDefectsPopover_ = false;
            this.shadowRoot.querySelector('#defectsPanel')
                ?.showPopover();
        }
    }
    onDefectsPopoverToggle_(e) {
        this.defectsPopoverOpen_ = e.newState === 'open';
    }
    onThumbsUpClick_() {
        this.setRating_(this.isLiked_() ? TopicRating.kUnrated : TopicRating.kLiked);
    }
    onThumbsDownClick_() {
        const disliked = !this.isDisliked_();
        this.openDefectsPopover_ = this.popoverDefects && disliked;
        this.setRating_(disliked ? TopicRating.kDisliked : TopicRating.kUnrated);
    }
    onDefectClick_(e) {
        const category = Number(e.currentTarget.dataset['category']);
        const draft = this.getOrCreateDraft_();
        if (!draft) {
            return;
        }
        if (!draft.defects.includes(category)) {
            this.updateDraft_({ ...draft, defects: [...draft.defects, category] });
            return;
        }
        // A suggestion only applies while its defect is selected.
        const { text, suggestions } = parseTopicFeedbackComment(draft.comment);
        suggestions.delete(category);
        this.updateDraft_({
            ...draft,
            defects: draft.defects.filter(defect => defect !== category),
            comment: formatTopicFeedbackComment(text, suggestions),
        });
    }
    onCommentValueChanged_(e) {
        const draft = this.getOrCreateDraft_();
        if (!draft) {
            return;
        }
        const { suggestions } = parseTopicFeedbackComment(draft.comment);
        this.setDraftComment_(draft, formatTopicFeedbackComment(e.detail.value, suggestions));
    }
    onSuggestionValueChanged_(e) {
        const defect = Number(e.currentTarget.dataset['defect']);
        const draft = this.getOrCreateDraft_();
        if (!draft) {
            return;
        }
        const { text, suggestions } = parseTopicFeedbackComment(draft.comment);
        suggestions.set(defect, e.detail.value);
        this.setDraftComment_(draft, formatTopicFeedbackComment(text, suggestions));
    }
    setDraftComment_(draft, comment) {
        if (draft.comment === comment) {
            return;
        }
        // Only saved on `change`, so that every keystroke isn't persisted.
        this.draft_ = { ...draft, comment };
    }
    onCommentChange_(e) {
        // Keep the textarea's and inputs' `change` from reaching the page; the
        // draft is reported as `topic-feedback-change` instead.
        e.stopPropagation();
        // `value-changed` already copied the comment to the draft.
        if (this.draft_) {
            this.updateDraft_(this.draft_);
        }
    }
    setRating_(rating) {
        const draft = this.getOrCreateDraft_();
        if (!draft) {
            return;
        }
        // Defects and the comment only apply to a thumbs down, so drop them
        // otherwise.
        if (rating !== TopicRating.kDisliked) {
            this.updateDraft_({ ...draft, rating, defects: [], comment: '' });
            return;
        }
        this.updateDraft_({ ...draft, rating });
    }
    getOrCreateDraft_() {
        if (!this.topic) {
            return null;
        }
        return this.draft_ || createEmptyTopicFeedback(this.topic);
    }
    // Updates the draft, and reports it if it can be saved.
    updateDraft_(draft) {
        this.draft_ = draft;
        if (!this.topic || !isTopicFeedbackValid(draft)) {
            return;
        }
        // Snapshot the topic as it is now, since that's what was rated.
        const feedback = {
            ...draft,
            comment: normalizeTopicFeedbackComment(draft.comment),
            snapshot: createTopicSnapshot(this.topic),
        };
        this.fire('topic-feedback-change', { feedback });
    }
}
customElements.define(TopicFeedbackControlsElement.is, TopicFeedbackControlsElement);
