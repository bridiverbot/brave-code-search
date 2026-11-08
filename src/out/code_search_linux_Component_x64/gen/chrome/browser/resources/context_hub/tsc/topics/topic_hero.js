// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './topic_hero.css.js';
import { getHtml } from './topic_hero.html.js';
import { getBackgroundColorForTopic, getBadgePath, getBadgeShapeForTopic, isCrIcon } from './topic_utils.js';
// The decorative banner at the top of the topic details page: the topic's
// badge shape and emoji tiled over its badge color, matching the `topic-card`
// it was opened from. Purely decorative, so hidden from assistive technology.
export class TopicHeroElement extends CrLitElement {
    static get is() {
        return 'topic-hero';
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
        };
    }
    #topic_accessor_storage = null;
    get topic() { return this.#topic_accessor_storage; }
    set topic(value) { this.#topic_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('aria-hidden', 'true');
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('topic')) {
            this.style.setProperty('--topic-hero-background-color', getBackgroundColorForTopic(this.topic?.id || ''));
        }
    }
    getBadgePath_() {
        return getBadgePath(getBadgeShapeForTopic(this.topic?.id || ''));
    }
    // cr-icon identifiers can't be drawn inside an SVG pattern, so only emoji
    // are tiled.
    getTextIcon_() {
        const icon = this.topic?.icon || '';
        return isCrIcon(icon) ? '' : icon;
    }
}
customElements.define(TopicHeroElement.is, TopicHeroElement);
