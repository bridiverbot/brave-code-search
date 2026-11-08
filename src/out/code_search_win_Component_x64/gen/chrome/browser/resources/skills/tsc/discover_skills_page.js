// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './card.js';
import './error_page.js';
import './carousel.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './discover_skills_page.css.js';
import { getHtml } from './discover_skills_page.html.js';
import { SkillsDialogType, SkillSource } from './skill.mojom-webui.js';
import { SkillsManagementAction, SkillsManagementPage } from './skill_metrics.mojom-webui.js';
import { SkillsPageBrowserProxy } from './skills_page_browser_proxy.js';
// The default category name for all skills.
const kAllCategoriesString = loadTimeData.getString('all');
export class DiscoverSkillsPageElement extends CrLitElement {
    static get is() {
        return 'discover-skills-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            skills_: { type: Object },
            searchTerm_: { type: String },
            selectedCategory_: { type: String },
            is1PSkillSaving_: { type: Boolean },
            topicHeaders_: { type: Object },
        };
    }
    #skills__accessor_storage = new Map();
    /* key: category, value: skill */
    get skills_() { return this.#skills__accessor_storage; }
    set skills_(value) { this.#skills__accessor_storage = value; }
    #topicHeaders__accessor_storage = new Set();
    // Subheader categories.
    get topicHeaders_() { return this.#topicHeaders__accessor_storage; }
    set topicHeaders_(value) { this.#topicHeaders__accessor_storage = value; }
    // Skills that are pending removal and can't be saved.
    skillsPendingRemoval_ = new Set();
    #selectedCategory__accessor_storage = '';
    get selectedCategory_() { return this.#selectedCategory__accessor_storage; }
    set selectedCategory_(value) { this.#selectedCategory__accessor_storage = value; }
    #is1PSkillSaving__accessor_storage = false;
    // Determines if a 1P skill is in the process of being saved.
    get is1PSkillSaving_() { return this.#is1PSkillSaving__accessor_storage; }
    set is1PSkillSaving_(value) { this.#is1PSkillSaving__accessor_storage = value; }
    #searchTerm__accessor_storage = '';
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    listenerIds_ = [];
    proxy_ = SkillsPageBrowserProxy.getInstance();
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        this.proxy_.handler.getInitial1PSkills().then(({ initialState }) => {
            this.update1PSkills_(initialState);
        });
        this.listenerIds_ = [
            this.proxy_.callbackRouter.update1PSkills.addListener(this.update1PSkills_.bind(this)),
        ];
        // Listen for save button clicks.
        this.eventTracker_.add(document, 'save-button-click', (e) => this.onSkillSave_(e.detail));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.proxy_.callbackRouter.removeListener(id));
        this.listenerIds_ = [];
        this.eventTracker_.removeAll();
        this.is1PSkillSaving_ = false;
    }
    onSkillSave_(savedSkill) {
        this.proxy_.handler.recordSkillsManagementAction(SkillsManagementPage.kBrowseSkills, SkillsManagementAction.kClickedAddSkill);
        // Enterprise skills are fully defined and downloaded on policy update and
        // do not require a separate prompt download request or verification via
        // maybeSaveSkill(). Open the save dialog immediately.
        if (savedSkill.source === SkillSource.kEnterprise) {
            this.proxy_.handler.openSkillsDialog(SkillsDialogType.kAdd, savedSkill);
            return;
        }
        this.is1PSkillSaving_ = true;
        this.proxy_.handler.maybeSave1PSkill(savedSkill.id).then(({ success }) => {
            if (success) {
                this.proxy_.handler.openSkillsDialog(SkillsDialogType.kAdd, savedSkill);
            }
            else {
                this.shadowRoot.querySelector('#invalidSkillToast').show();
                this.skillsPendingRemoval_ =
                    new Set([...this.skillsPendingRemoval_, savedSkill.id]);
            }
            this.is1PSkillSaving_ = false;
        });
    }
    shouldDisableSave_(skill) {
        return this.is1PSkillSaving_ || this.skillsPendingRemoval_.has(skill.id);
    }
    update1PSkills_(state) {
        // Getting a new set of 1p skills, so we can remove any prior skills that
        // were pending removal.
        this.skillsPendingRemoval_ = new Set();
        this.skills_ = new Map(Object.entries(state.skillMap));
        this.topicHeaders_ = new Set(state.topicsInfoList);
        const otherCategories = this.getOtherCategories_();
        this.selectedCategory_ =
            otherCategories.length > 0 ? otherCategories[0] : '';
    }
    getIconForCategory_(category) {
        switch (category) {
            case 'All':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:grid-view' :
                    'skills:grid-old';
            case 'Fun':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:celebration' :
                    'skills:celebration-old';
            case 'Learning':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:book-2' :
                    'skills:book-old';
            case 'Research':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:manage-search' :
                    'skills:search-old';
            case 'Shopping':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:shopping-bag' :
                    'skills:shopping-old';
            case 'Understand':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:lightbulb' :
                    'skills:lightbulb-old';
            case 'Writing':
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'skills:ink-pen' :
                    'skills:write-old';
            case 'From your organization':
                return 'cr:domain';
            default:
                return 'cr:add';
        }
    }
    isCategorySelected_(category) {
        return this.selectedCategory_ === category;
    }
    // Called whenever the text in the search input field changes.
    // This event is debounced by the <cr-toolbar> component.
    onSearchChanged(searchTerm) {
        this.searchTerm_ = searchTerm.toLowerCase();
        if (this.shouldShowNoSearchResults_()) {
            this.proxy_.handler.recordSkillsManagementAction(SkillsManagementPage.kBrowseSkills, SkillsManagementAction.kEmptySearch);
        }
        else if (this.searchTerm_.length > 0) {
            this.proxy_.handler.recordSkillsManagementAction(SkillsManagementPage.kBrowseSkills, SkillsManagementAction.kNonEmptySearch);
        }
    }
    filter_(skills) {
        const term = this.searchTerm_.toLowerCase();
        if (!term) {
            return skills;
        }
        return skills.filter(skill => skill.name.toLowerCase().includes(term) ||
            skill.description.toLowerCase().includes(term) ||
            (skill.curatedBy && skill.curatedBy.toLowerCase().includes(term)));
    }
    shouldShowNoSearchResults_() {
        return this.getAllSkills_().length === 0 &&
            this.getOtherCategories_().length === 0 && this.searchTerm_.length > 0;
    }
    skillsByTopic_(topic) {
        if (!loadTimeData.getBoolean('isSubheadersEnabled')) {
            return [];
        }
        return this.filter_(this.skills_.get(topic) || []);
    }
    getSelectedSkills_() {
        if (this.selectedCategory_ === kAllCategoriesString) {
            return this.getAllSkills_();
        }
        return this.filter_(this.skills_.get(this.selectedCategory_) || []);
    }
    // Gets all skills.
    getAllSkills_() {
        const allSkills = Array.from(this.skills_.values()).flat();
        return this.filter_(allSkills);
    }
    // Gets all categories that are not already displayed within a subheader.
    getOtherCategories_() {
        const topicCategoryNames = new Set(Array.from(this.topicHeaders_).map(info => info.categoryName));
        const filteredOtherCategories = Array.from(this.skills_.keys())
            .filter(category => !topicCategoryNames.has(category));
        if (filteredOtherCategories.length === 0) {
            return [];
        }
        return [kAllCategoriesString, ...filteredOtherCategories].filter(category => {
            if (category === kAllCategoriesString) {
                return this.getAllSkills_().length > 0;
            }
            const skills = this.skills_.get(category) ?? [];
            return this.filter_(skills).length > 0;
        });
    }
    onCategoryClick_(e) {
        const target = e.currentTarget;
        const category = target.dataset['category'];
        if (category) {
            this.selectedCategory_ = category;
        }
    }
}
customElements.define(DiscoverSkillsPageElement.is, DiscoverSkillsPageElement);
