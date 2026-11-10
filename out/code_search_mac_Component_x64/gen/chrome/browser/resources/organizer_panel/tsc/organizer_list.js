// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './organizer_list_section.js';
import './organizer_zero_state.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { KeyArrowNavigationService } from './keyboard_arrow_navigation_service.js';
import { getCss } from './organizer_list.css.js';
import { getHtml } from './organizer_list.html.js';
export class OrganizerListElement extends CrLitElement {
    static get is() {
        return 'organizer-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            sectionDelegates: { type: Array },
            searchQuery: { type: String },
            allSectionsHidden_: { type: Boolean },
        };
    }
    #sectionDelegates_accessor_storage = [];
    get sectionDelegates() { return this.#sectionDelegates_accessor_storage; }
    set sectionDelegates(value) { this.#sectionDelegates_accessor_storage = value; }
    #searchQuery_accessor_storage = '';
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #allSectionsHidden__accessor_storage = false;
    get allSectionsHidden_() { return this.#allSectionsHidden__accessor_storage; }
    set allSectionsHidden_(value) { this.#allSectionsHidden__accessor_storage = value; }
    keyArrowNavigationService_;
    boundFocusNextSection_ = this.onFocusNextSection_.bind(this);
    boundFocusPreviousSection_ = this.onFocusPreviousSection_.bind(this);
    boundFocusCurrentSection_ = this.onFocusCurrentSection_.bind(this);
    constructor() {
        super();
        this.keyArrowNavigationService_ =
            new KeyArrowNavigationService(this, () => this.getNavigableElements());
    }
    connectedCallback() {
        super.connectedCallback();
        this.keyArrowNavigationService_.startListening();
        this.addEventListener('focus-next-section', this.boundFocusNextSection_);
        this.addEventListener('focus-previous-section', this.boundFocusPreviousSection_);
        this.addEventListener('focus-current-section', this.boundFocusCurrentSection_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.keyArrowNavigationService_.stopListening();
        this.removeEventListener('focus-next-section', this.boundFocusNextSection_);
        this.removeEventListener('focus-previous-section', this.boundFocusPreviousSection_);
        this.removeEventListener('focus-current-section', this.boundFocusCurrentSection_);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('sectionDelegates') ||
            changedProperties.has('searchQuery')) {
            this.keyArrowNavigationService_.rebuildNavigationElements();
        }
    }
    getSections_() {
        return Array.from(this.shadowRoot.querySelectorAll('organizer-list-section'));
    }
    getVisibleSections() {
        return this.getSections_().filter(s => !s.hidden);
    }
    getNavigableElements() {
        return this.getVisibleSections().flatMap(s => s.getNavigableElements());
    }
    focusFirstSection() {
        const sections = this.getVisibleSections();
        if (sections.length <= 0) {
            return false;
        }
        sections[0].focus();
        return true;
    }
    focusLastSection(focusMenuButtonIfVisible = false) {
        const sections = this.getVisibleSections();
        if (sections.length <= 0) {
            return false;
        }
        const lastSection = sections[sections.length - 1];
        if (focusMenuButtonIfVisible &&
            lastSection.$.header.isMenuButtonVisible()) {
            lastSection.$.header.focusMenuButton();
        }
        else {
            lastSection.focus();
        }
        return true;
    }
    onSectionHiddenChanged_() {
        const sections = this.getSections_();
        this.allSectionsHidden_ =
            sections.length > 0 && sections.every(s => s.hidden);
        this.keyArrowNavigationService_.rebuildNavigationElements();
    }
    onSectionExpandedChanged_() {
        this.keyArrowNavigationService_.rebuildNavigationElements();
    }
    onFocusNextSection_(e) {
        const customEvent = e;
        const sections = this.getVisibleSections();
        const path = e.composedPath();
        const currentSection = sections.find(s => path.includes(s));
        const currentIndex = currentSection ? sections.indexOf(currentSection) : -1;
        if (currentIndex === -1 || currentIndex === sections.length - 1) {
            this.fire('focus-after-list', customEvent.detail);
        }
        else {
            sections[currentIndex + 1].focus();
            customEvent.detail?.sourceEvent?.preventDefault();
            customEvent.detail?.sourceEvent?.stopPropagation();
        }
    }
    onFocusPreviousSection_(e) {
        const customEvent = e;
        const sections = this.getVisibleSections();
        const path = e.composedPath();
        const currentSection = sections.find(s => path.includes(s));
        const currentIndex = currentSection ? sections.indexOf(currentSection) : -1;
        if (currentIndex <= 0) {
            this.fire('focus-before-list', customEvent.detail);
        }
        else {
            const prevSection = sections[currentIndex - 1];
            if (prevSection.$.header.isMenuButtonVisible()) {
                prevSection.$.header.focusMenuButton();
            }
            else {
                prevSection.focus();
            }
            customEvent.detail?.sourceEvent?.preventDefault();
            customEvent.detail?.sourceEvent?.stopPropagation();
        }
    }
    onFocusCurrentSection_(e) {
        const customEvent = e;
        const sections = this.getVisibleSections();
        const path = e.composedPath();
        const currentSection = sections.find(s => path.includes(s));
        if (currentSection) {
            currentSection.focus();
            customEvent.detail?.sourceEvent?.preventDefault();
            customEvent.detail?.sourceEvent?.stopPropagation();
        }
    }
}
customElements.define(OrganizerListElement.is, OrganizerListElement);
