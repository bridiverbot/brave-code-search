// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './icons.html.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_heading.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SortOrder } from './bookmarks.mojom-webui.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { getCss } from './power_bookmarks_list_header.css.js';
import { getHtml } from './power_bookmarks_list_header.html.js';
import { recordSortType } from './power_bookmarks_metrics.js';
import { PowerBookmarksService } from './power_bookmarks_service.js';
import { getFolderLabel } from './power_bookmarks_utils.js';
export class PowerBookmarksListHeaderElement extends CrLitElement {
    static get is() {
        return 'power-bookmarks-list-header';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            activeFolder: { type: Object },
            activeSortType_: { type: Object },
            activeSortIndex_: { type: Number },
            compact: { type: Boolean },
            disableEdit: { type: Boolean },
            editing: { type: Boolean },
            sortTypes_: { type: Array },
            webuiRoundedIconsEnabled_: { type: Boolean },
            titleA_: { type: String },
            titleB_: { type: String },
            activeTitle_: { type: String },
            transitioningTitle_: { type: String },
            transitionDirection_: { type: String },
        };
    }
    bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
    #activeFolder_accessor_storage = undefined;
    get activeFolder() { return this.#activeFolder_accessor_storage; }
    set activeFolder(value) { this.#activeFolder_accessor_storage = value; }
    #compact_accessor_storage = false;
    get compact() { return this.#compact_accessor_storage; }
    set compact(value) { this.#compact_accessor_storage = value; }
    #disableEdit_accessor_storage = false;
    get disableEdit() { return this.#disableEdit_accessor_storage; }
    set disableEdit(value) { this.#disableEdit_accessor_storage = value; }
    #editing_accessor_storage = false;
    get editing() { return this.#editing_accessor_storage; }
    set editing(value) { this.#editing_accessor_storage = value; }
    #titleA__accessor_storage = '';
    get titleA_() { return this.#titleA__accessor_storage; }
    set titleA_(value) { this.#titleA__accessor_storage = value; }
    #titleB__accessor_storage = '';
    get titleB_() { return this.#titleB__accessor_storage; }
    set titleB_(value) { this.#titleB__accessor_storage = value; }
    #activeTitle__accessor_storage = 'a';
    get activeTitle_() { return this.#activeTitle__accessor_storage; }
    set activeTitle_(value) { this.#activeTitle__accessor_storage = value; }
    #transitioningTitle__accessor_storage = '';
    get transitioningTitle_() { return this.#transitioningTitle__accessor_storage; }
    set transitioningTitle_(value) { this.#transitioningTitle__accessor_storage = value; }
    #transitionDirection__accessor_storage = '';
    get transitionDirection_() { return this.#transitionDirection__accessor_storage; }
    set transitionDirection_(value) { this.#transitionDirection__accessor_storage = value; }
    rootTransitioning_ = false;
    titleTransitionTimer_ = null;
    #activeSortType__accessor_storage;
    get activeSortType_() { return this.#activeSortType__accessor_storage; }
    set activeSortType_(value) { this.#activeSortType__accessor_storage = value; }
    #activeSortIndex__accessor_storage = loadTimeData.getInteger('sortOrder');
    get activeSortIndex_() { return this.#activeSortIndex__accessor_storage; }
    set activeSortIndex_(value) { this.#activeSortIndex__accessor_storage = value; }
    #sortTypes__accessor_storage = [
        {
            sortOrder: SortOrder.kNewest,
            label: loadTimeData.getString('sortNewest'),
            lowerLabel: loadTimeData.getString('sortNewestLower'),
        },
        {
            sortOrder: SortOrder.kOldest,
            label: loadTimeData.getString('sortOldest'),
            lowerLabel: loadTimeData.getString('sortOldestLower'),
        },
        {
            sortOrder: SortOrder.kLastOpened,
            label: loadTimeData.getString('sortLastOpened'),
            lowerLabel: loadTimeData.getString('sortLastOpenedLower'),
        },
        {
            sortOrder: SortOrder.kAlphabetical,
            label: loadTimeData.getString('sortAlphabetically'),
            lowerLabel: loadTimeData.getString('sortAlphabetically'),
        },
        {
            sortOrder: SortOrder.kReverseAlphabetical,
            label: loadTimeData.getString('sortReverseAlphabetically'),
            lowerLabel: loadTimeData.getString('sortReverseAlphabetically'),
        },
        { sortOrder: SortOrder.kCustom, label: loadTimeData.getString('sortCustom'), lowerLabel: loadTimeData.getString('sortCustomLower'), },
    ];
    get sortTypes_() { return this.#sortTypes__accessor_storage; }
    set sortTypes_(value) { this.#sortTypes__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    bookmarksService_ = PowerBookmarksService.getInstance();
    constructor() {
        super();
        this.activeSortType_ = this.sortTypes_[this.activeSortIndex_];
    }
    connectedCallback() {
        super.connectedCallback();
        recordSortType(this.sortTypes_[this.activeSortIndex_].sortOrder);
        this.titleA_ = getFolderLabel(this.activeFolder);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.titleTransitionTimer_) {
            clearTimeout(this.titleTransitionTimer_);
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('activeSortIndex_')) {
            this.onActiveSortIndexChanged_();
        }
        if (changedProperties.has('activeFolder')) {
            if (this.transitioningTitle_ === '') {
                const label = getFolderLabel(this.activeFolder);
                if (this.activeTitle_ === 'a') {
                    this.titleA_ = label;
                }
                else {
                    this.titleB_ = label;
                }
            }
        }
    }
    getBackButtonLabel_() {
        const parentFolder = this.bookmarksService_.findBookmarkWithId(this.activeFolder ? this.activeFolder.parentId : undefined);
        return loadTimeData.getStringF('backButtonLabel', getFolderLabel(parentFolder));
    }
    shouldHideBackButton_() {
        return !this.activeFolder;
    }
    disableBackButton_() {
        return !this.activeFolder || this.editing;
    }
    getActiveFolderLabel_() {
        return getFolderLabel(this.activeFolder);
    }
    getViewButtonIcon_() {
        return this.compact ? (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'bookmarks:view-list' :
            'bookmarks:compact-view-old') :
            (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'bookmarks:list' :
                'bookmarks:visual-view-old');
    }
    getViewButtonTooltip_() {
        return this.compact ? loadTimeData.getString('compactView') :
            loadTimeData.getString('visualView');
    }
    getViewButtonA11yLabel_() {
        return this.compact ? loadTimeData.getString('switchToVisualView') :
            loadTimeData.getString('switchToCompactView');
    }
    onBackButtonClick_() {
        this.fire('back-clicked');
    }
    onShowSortMenuClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.sortMenu.showAt(event.target);
    }
    onViewToggleClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fire('view-toggled');
    }
    onBulkEditClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fire('bulk-edit');
    }
    getSortMenuItemLowerLabel_(sortType) {
        return loadTimeData.getStringF('sortByType', sortType.lowerLabel);
    }
    sortMenuItemIsSelected_(sortType) {
        return this.sortTypes_[this.activeSortIndex_].sortOrder ===
            sortType.sortOrder;
    }
    onSortTypeClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.sortMenu.close();
        const target = event.currentTarget;
        const index = parseInt(target.dataset['index'], 10);
        const sortOption = this.sortTypes_[index];
        this.activeSortIndex_ = index;
        this.bookmarksApi_.setSortOrder(sortOption.sortOrder);
        recordSortType(sortOption.sortOrder);
    }
    onActiveSortIndexChanged_() {
        this.activeSortType_ = this.sortTypes_[this.activeSortIndex_];
        this.fire('sort-changed', {
            index: this.activeSortIndex_,
            sortOrder: this.sortTypes_[this.activeSortIndex_].sortOrder,
        });
    }
    getTitleContainerClass_() {
        return this.transitionDirection_ ?
            `direction-${this.transitionDirection_}` :
            '';
    }
    getTitleClass_(titleId) {
        const classes = ['title-span'];
        if (this.activeTitle_ === titleId) {
            classes.push('active');
        }
        if (this.transitioningTitle_ === titleId ||
            (this.transitioningTitle_ !== '' && this.activeTitle_ !== titleId)) {
            classes.push('transitioning');
        }
        return classes.join(' ');
    }
    getRootHeaderClass_() {
        const classes = ['header-item'];
        if (!this.activeFolder) {
            classes.push('active');
        }
        if (this.rootTransitioning_) {
            classes.push('transitioning');
        }
        return classes.join(' ');
    }
    getFolderHeaderClass_() {
        const classes = ['header-item'];
        if (this.activeFolder) {
            classes.push('active');
        }
        if (this.rootTransitioning_) {
            classes.push('transitioning');
        }
        return classes.join(' ');
    }
    /**
     * Animates the folder label inside the header by switching between
     * double-buffered title spans (titleA_ and titleB_).
     */
    async transitionFolderLabel(newFolder, forward) {
        const newLabel = getFolderLabel(newFolder);
        const currentActive = this.activeTitle_;
        const targetTitle = currentActive === 'a' ? 'b' : 'a';
        // Populate the inactive title buffer with the new folder name.
        if (targetTitle === 'a') {
            this.titleA_ = newLabel;
        }
        else {
            this.titleB_ = newLabel;
        }
        // If navigating to/from the root ("All Bookmarks"), we transition between
        // the root header and the folder header containers.
        const toOrFromRoot = !this.activeFolder || !newFolder;
        if (toOrFromRoot) {
            this.rootTransitioning_ = true;
        }
        // Set transition directions and trigger re-render.
        this.transitionDirection_ = forward ? 'forward' : 'backward';
        this.transitioningTitle_ = targetTitle;
        this.activeTitle_ = targetTitle;
        await this.updateComplete;
        // Set a timer to clear transition classes once the 200ms animation ends.
        if (this.titleTransitionTimer_) {
            clearTimeout(this.titleTransitionTimer_);
        }
        this.titleTransitionTimer_ = setTimeout(() => {
            this.transitioningTitle_ = '';
            this.transitionDirection_ = '';
            this.rootTransitioning_ = false;
        }, 200);
    }
}
customElements.define(PowerBookmarksListHeaderElement.is, PowerBookmarksListHeaderElement);
