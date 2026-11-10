// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './user_education_internals_card.css.js';
import { getHtml } from './user_education_internals_card.html.js';
const PROMO_ACTION_EVENT = 'promo-action';
export class UserEducationInternalsCardElement extends CrLitElement {
    static get is() {
        return 'user-education-internals-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            promo: { type: Object },
            actions: { type: Array },
            /**
             * Indicates if the list of instructions is expanded or collapsed.
             */
            instructionsExpanded_: { type: Boolean },
            /**
             * Indicates if the list of promo data is expanded or collapsed.
             */
            dataExpanded_: { type: Boolean },
        };
    }
    #promo_accessor_storage = {
        displayTitle: '',
        displayDescription: '',
        internalName: '',
        type: '',
        addedMilestone: 0,
        supportedPlatforms: [],
        instructions: [],
        followedByInternalName: '',
        data: [],
        requiredFeatures: [],
    };
    get promo() { return this.#promo_accessor_storage; }
    set promo(value) { this.#promo_accessor_storage = value; }
    #actions_accessor_storage = [];
    get actions() { return this.#actions_accessor_storage; }
    set actions(value) { this.#actions_accessor_storage = value; }
    #instructionsExpanded__accessor_storage = false;
    get instructionsExpanded_() { return this.#instructionsExpanded__accessor_storage; }
    set instructionsExpanded_(value) { this.#instructionsExpanded__accessor_storage = value; }
    #dataExpanded__accessor_storage = false;
    get dataExpanded_() { return this.#dataExpanded__accessor_storage; }
    set dataExpanded_(value) { this.#dataExpanded__accessor_storage = value; }
    onPromoActionClick_(e) {
        assert(this.promo);
        const keyAttr = e.target.getAttribute('actionKey');
        assert(keyAttr);
        const key = Number(keyAttr);
        let desc;
        for (const action of this.actions) {
            if (action.key === key) {
                desc = action;
                break;
            }
        }
        if (!desc || (desc.warning && !confirm(desc.warning))) {
            return;
        }
        this.fire(PROMO_ACTION_EVENT, { promo: this.promo.internalName, key: key });
    }
    showMilestone_() {
        assert(this.promo);
        return this.promo.addedMilestone > 0;
    }
    showDescription_() {
        assert(this.promo);
        return this.promo.displayDescription !== '';
    }
    showType_() {
        assert(this.promo);
        return this.promo.type !== '';
    }
    showPlatforms_() {
        assert(this.promo);
        return this.promo.supportedPlatforms.length > 0;
    }
    formatPlatforms_() {
        assert(this.promo);
        return this.promo.supportedPlatforms.join(', ');
    }
    showRequiredFeatures_() {
        assert(this.promo);
        return this.promo.requiredFeatures.length;
    }
    formatRequiredFeatures_() {
        assert(this.promo);
        return this.promo.requiredFeatures.join(', ');
    }
    showInstructions_() {
        assert(this.promo);
        return this.promo.instructions.length;
    }
    showFollowedBy_() {
        assert(this.promo);
        return this.promo.followedByInternalName;
    }
    showData_() {
        assert(this.promo);
        return this.promo.data.length;
    }
    getAdditionalActions_() {
        const result = [];
        const launchKey = this.getLaunchKey_();
        for (const action of this.actions) {
            if (action.key !== launchKey) {
                result.push(action);
            }
        }
        return result;
    }
    getLaunchKey_() {
        for (const action of this.actions) {
            if (action.isLaunch) {
                return action.key;
            }
        }
        return -1;
    }
    getLaunchCaption_() {
        for (const action of this.actions) {
            if (action.isLaunch) {
                return action.caption;
            }
        }
        return '';
    }
    showLaunch_() {
        return this.getLaunchKey_() >= 0;
    }
    onScrollToFollowedByClick_() {
        assert(this.promo);
        const parent = this.parentElement;
        if (parent) {
            const allCards = parent.querySelectorAll('user-education-internals-card');
            for (const card of allCards) {
                card.classList.remove('highlighted');
            }
            const anchor = parent.querySelector(`[id="${this.promo.followedByInternalName}"]`);
            if (anchor) {
                anchor.classList.add('highlighted');
                anchor.scrollIntoView();
            }
        }
    }
    getFollowedByAnchor_() {
        assert(this.promo);
        return encodeURIComponent(this.promo.followedByInternalName);
    }
    onInstructionsExpandedChanged_(e) {
        this.instructionsExpanded_ = e.detail.value;
    }
    onDataExpandedChanged_(e) {
        this.dataExpanded_ = e.detail.value;
    }
}
customElements.define(UserEducationInternalsCardElement.is, UserEducationInternalsCardElement);
