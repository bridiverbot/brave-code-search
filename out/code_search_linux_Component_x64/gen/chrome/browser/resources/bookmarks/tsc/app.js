// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import 'chrome://resources/cr_elements/cr_splitter/cr_splitter.js';
import './folder_node.js';
import './list.js';
import '/strings.m.js';
import './command_manager.js';
import './toolbar.js';
import { ColorChangeUpdater, COLORS_CSS_SELECTOR } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { FindShortcutMixinLit } from 'chrome://resources/cr_elements/find_shortcut_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { setSearchResults } from './actions.js';
import { destroy as destroyApiListener, init as initApiListener } from './api_listener.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { LOCAL_STORAGE_FOLDER_STATE_KEY, LOCAL_STORAGE_TREE_WIDTH_KEY } from './constants.js';
import { DndManager } from './dnd_manager.js';
import { BookmarksRouter } from './router.js';
import { Store } from './store.js';
import { StoreClientMixinLit } from './store_client_mixin_lit.js';
import { createEmptyState, getDefaultSelectedFolder, searchBookmarks } from './util.js';
export const HIDE_FOCUS_RING_ATTRIBUTE = 'hide-focus-ring';
const BookmarksAppElementBase = StoreClientMixinLit(FindShortcutMixinLit(CrLitElement));
export class BookmarksAppElement extends BookmarksAppElementBase {
    static get is() {
        return 'bookmarks-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            searchTerm_: { type: String },
            folderOpenState_: { type: Object },
            sidebarWidth_: { type: String },
            toolbarShadow_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #folderOpenState__accessor_storage;
    get folderOpenState_() { return this.#folderOpenState__accessor_storage; }
    set folderOpenState_(value) { this.#folderOpenState__accessor_storage = value; }
    #searchTerm__accessor_storage;
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    #sidebarWidth__accessor_storage = '';
    get sidebarWidth_() { return this.#sidebarWidth__accessor_storage; }
    set sidebarWidth_(value) { this.#sidebarWidth__accessor_storage = value; }
    #toolbarShadow__accessor_storage = false;
    get toolbarShadow_() { return this.#toolbarShadow__accessor_storage; }
    set toolbarShadow_(value) { this.#toolbarShadow__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    dndManager_ = null;
    router_ = new BookmarksRouter();
    constructor() {
        super();
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // Only queries are supported, not subpages.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        const enableWebuiRefresh2026 = loadTimeData.getString('webuiRefresh2026') !== '';
        if (enableWebuiRefresh2026) {
            this.addThemedColors_();
            ColorChangeUpdater.forDocument().start();
        }
        document.documentElement.classList.remove('loading');
        // These events are added to the document because capture doesn't work
        // properly when listeners are added to a Polymer element, because the
        // event is considered AT_TARGET for the element, and is evaluated
        // after inner captures.
        this.eventTracker_.add(document, 'mousedown', () => this.onMousedown_(), true);
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeydown_(e), true);
        this.router_.initialize();
        this.updateFromStore();
        BookmarksApiProxyImpl.getInstance().getTree().then((nodeMap) => {
            const initialState = createEmptyState();
            initialState.nodes = nodeMap;
            initialState.selectedFolder = getDefaultSelectedFolder(nodeMap);
            const folderStateString = window.localStorage[LOCAL_STORAGE_FOLDER_STATE_KEY];
            initialState.folderOpenState = folderStateString ?
                new Map(JSON.parse(folderStateString)) :
                new Map();
            Store.getInstance().init(initialState);
            initApiListener();
            setTimeout(function () {
                chrome.metricsPrivate.recordTime('BookmarkManager.ResultsRenderedTime', Math.floor(window.performance.now()));
            });
        });
        this.initializeSplitter_();
        this.dndManager_ = new DndManager();
        this.dndManager_.init();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.router_.teardown();
        this.eventTracker_.remove(document, 'mousedown');
        this.eventTracker_.remove(document, 'keydown');
        this.eventTracker_.remove(window, 'resize');
        assert(this.dndManager_);
        this.dndManager_.destroy();
        this.dndManager_ = null;
        destroyApiListener();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchTerm_')) {
            this.searchTermChanged_(this.searchTerm_, changedPrivateProperties.get('searchTerm_'));
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('folderOpenState_')) {
            this.folderOpenStateChanged_();
        }
    }
    onStateChanged(state) {
        this.searchTerm_ = state.search.term;
        this.folderOpenState_ = state.folderOpenState;
    }
    initializeSplitter_() {
        const splitter = this.$.splitter;
        const splitterTarget = this.$.sidebar;
        // The splitter persists the size of the left component in the local store.
        if (LOCAL_STORAGE_TREE_WIDTH_KEY in window.localStorage) {
            splitterTarget.style.width =
                window.localStorage[LOCAL_STORAGE_TREE_WIDTH_KEY];
        }
        this.sidebarWidth_ = getComputedStyle(splitterTarget).width;
        splitter.addEventListener('resize', (_e) => {
            window.localStorage[LOCAL_STORAGE_TREE_WIDTH_KEY] =
                splitterTarget.style.width;
            this.updateSidebarWidth_();
        });
        this.eventTracker_.add(splitter, 'dragmove', () => this.updateSidebarWidth_());
        this.eventTracker_.add(window, 'resize', () => this.updateSidebarWidth_());
    }
    updateSidebarWidth_() {
        this.sidebarWidth_ = getComputedStyle(this.$.sidebar).width;
    }
    onMousedown_() {
        this.toggleAttribute(HIDE_FOCUS_RING_ATTRIBUTE, true);
    }
    onKeydown_(e) {
        if (!['Shift', 'Alt', 'Control', 'Meta'].includes(e.key)) {
            this.toggleAttribute(HIDE_FOCUS_RING_ATTRIBUTE, false);
        }
    }
    searchTermChanged_(newValue, oldValue) {
        if (oldValue !== undefined && !newValue) {
            getAnnouncerInstance().announce(loadTimeData.getString('searchCleared'));
        }
        if (!this.searchTerm_) {
            return;
        }
        const searchTerm = this.searchTerm_;
        const results = searchBookmarks(this.getState().nodes, searchTerm);
        const ids = results.map(node => node.id);
        this.dispatch(setSearchResults(ids));
        getAnnouncerInstance().announce(ids.length > 0 ? loadTimeData.getStringF('searchResults', searchTerm) :
            loadTimeData.getString('noSearchResults'));
    }
    folderOpenStateChanged_() {
        assert(this.folderOpenState_);
        window.localStorage[LOCAL_STORAGE_FOLDER_STATE_KEY] =
            JSON.stringify(Array.from(this.folderOpenState_));
    }
    // Override FindShortcutMixinLit methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.shadowRoot.querySelector('bookmarks-toolbar').searchField.showAndFocus();
        return true;
    }
    // Override FindShortcutMixinLit methods.
    searchInputHasFocus() {
        return this.shadowRoot.querySelector('bookmarks-toolbar').searchField
            .isSearchFocused();
    }
    onUndoClick_() {
        this.fire('command-undo');
    }
    onListScroll_(e) {
        this.toolbarShadow_ = e.target.scrollTop !== 0;
    }
    getDndManagerForTesting() {
        return this.dndManager_;
    }
    addThemedColors_() {
        assert(document.body.querySelector(COLORS_CSS_SELECTOR) === null);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chrome://theme/colors.css?sets=ui,chrome';
        document.body.appendChild(link);
    }
}
customElements.define(BookmarksAppElement.is, BookmarksAppElement);
