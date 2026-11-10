// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { DataModelAdapter } from './tab_strip_internals_adapter.js';
import { TabStripInternalsApiProxyImpl } from './tab_strip_internals_api_proxy.js';
/** Represents types of changes in the ViewModel's observable state. */
export var ViewModelChange;
(function (ViewModelChange) {
    /** Represents presentational change in layout. */
    ViewModelChange[ViewModelChange["LAYOUT"] = 0] = "LAYOUT";
    /** Represents a notification. */
    ViewModelChange[ViewModelChange["NOTIFICATION"] = 1] = "NOTIFICATION";
    /** Represents a change in view content. */
    ViewModelChange[ViewModelChange["CONTENT"] = 2] = "CONTENT";
})(ViewModelChange || (ViewModelChange = {}));
/**
 * ViewModel layer: Handles application state and communication with backend.
 */
export class TabStripInternalsViewModel {
    proxy_ = TabStripInternalsApiProxyImpl.getInstance();
    // View state
    /** Represents the root node of the navigation pane hierarchy. */
    root_ = null;
    /** Currently selected node's unique identifier. */
    selectedNodeId_ = null;
    /** A set of expanded nodes represented by their unique Ids. */
    expandedNodeIds_ = new Set();
    /** A cache of NodeId to NodeObject mappings. */
    nodeMap_ = new Map();
    /** Error message exposed to the View. */
    errorMessage_ = null;
    /** Observers registered to be notified when ViewModel state changes. */
    observers_ = [];
    /** Navigation pane constraints used to save/load state. */
    static NAV_PANE_MIN_WIDTH_PX = 200;
    static NAV_PANE_MAX_WIDTH_PX = 800;
    static NAV_PANE_DEFAULT_WIDTH_PX = 320;
    navPaneWidth_ = TabStripInternalsViewModel.NAV_PANE_DEFAULT_WIDTH_PX;
    constructor() {
        this.loadState_();
    }
    get root() {
        return this.root_;
    }
    get errorMessage() {
        return this.errorMessage_;
    }
    get navPaneWidth() {
        return this.navPaneWidth_;
    }
    /** Get the unique identifier of the currently selected node. */
    get selectedNode() {
        return this.selectedNodeId_;
    }
    /** Get a node corresponding to given nodeId or return null. */
    getNode(nodeId) {
        return this.nodeMap_.get(nodeId) ?? null;
    }
    /** Return children for a given nodeId. */
    getChildren(nodeId) {
        const node = this.getNode(nodeId);
        return node ? node.children : [];
    }
    /** Return true if given node has any children. */
    hasChildren(nodeId) {
        const node = this.getNode(nodeId);
        return !!node && node.children.length > 0;
    }
    /** Return true if given node is currently expanded. */
    isExpanded(nodeId) {
        return this.expandedNodeIds_.has(nodeId);
    }
    /**
     * Entry point to initialize the ViewModel by loading data and subscribing to
     * updates.
     */
    async initialize() {
        try {
            const { data } = await this.proxy_.getTabStripData();
            this.buildModelHierarchy_(data);
        }
        catch (e) {
            this.setError_('Failed to load TabStrip data', e);
            return;
        }
        this.proxy_.getCallbackRouter().onTabStripUpdated.addListener((data) => {
            try {
                this.buildModelHierarchy_(data);
            }
            catch (e) {
                this.setError_('Failed to apply TabStrip update', e);
            }
        });
    }
    /** View subscribes for reactive updates. */
    subscribe(observer) {
        this.observers_.push(observer);
    }
    /** Clear any existing error message. */
    clearError() {
        this.errorMessage_ = null;
    }
    /** Set width of the navigation pane. */
    setNavPaneWidth(px) {
        const clamped = Math.min(Math.max(TabStripInternalsViewModel.NAV_PANE_MIN_WIDTH_PX, px), TabStripInternalsViewModel.NAV_PANE_MAX_WIDTH_PX);
        if (clamped === this.navPaneWidth_) {
            return;
        }
        this.navPaneWidth_ = clamped;
        this.notifyObservers_(ViewModelChange.LAYOUT);
    }
    /**
     * Persists the current navigation pane width to localStorage.
     *
     * This is intentionally decoupled from `setNavPaneWidth()` since that method
     * is expected to be called continuously during user interaction (e.g. while
     * resizing the navPane), which triggers repeated layout updates.
     *
     * However, the width should only be saved once the resize interaction
     * completes to avoid excessive writes.
     */
    saveNavPaneWidthState() {
        this.saveState_();
    }
    /**
     * Select a node given it's unique identifier.
     * Sets the selectedNodeId property and notifies observers of state change.
     */
    setSelectedNode(nodeId) {
        if (this.selectedNodeId_ === nodeId) {
            return;
        }
        this.selectedNodeId_ = nodeId;
        this.expandTo_(nodeId);
        this.saveState_();
        this.notifyObservers_(ViewModelChange.CONTENT);
    }
    /**
     * Expand or collapse the given node. Notifies observers of state change.
     */
    toggleExpanded(nodeId) {
        if (this.expandedNodeIds_.has(nodeId)) {
            this.expandedNodeIds_.delete(nodeId);
        }
        else {
            this.expandedNodeIds_.add(nodeId);
        }
        this.saveState_();
        this.notifyObservers_(ViewModelChange.CONTENT);
    }
    /** Expands all nodes in the TabStrip tree. */
    expandAll() {
        if (!this.root_) {
            return;
        }
        const recursivelyExpandChildren = (node) => {
            this.expandedNodeIds_.add(node.path);
            for (const child of node.children) {
                recursivelyExpandChildren(child);
            }
        };
        recursivelyExpandChildren(this.root_);
        this.saveState_();
        this.notifyObservers_(ViewModelChange.CONTENT);
    }
    /** Collapses all nodes in the TabStrip tree except the root. */
    collapseAll() {
        if (!this.root_) {
            return;
        }
        this.expandedNodeIds_.clear();
        // Always keep root expanded.
        this.expandedNodeIds_.add(this.root_.path);
        this.saveState_();
        this.notifyObservers_(ViewModelChange.CONTENT);
    }
    /** Load UI state from localStorage. */
    loadState_() {
        try {
            const state = JSON.parse(localStorage.getItem('tabstrip_internals_state') || '{}');
            this.navPaneWidth_ = typeof state.navPaneWidth === 'number' ?
                state.navPaneWidth :
                TabStripInternalsViewModel.NAV_PANE_DEFAULT_WIDTH_PX;
            this.selectedNodeId_ = typeof state.selectedNodeId === 'string' ?
                state.selectedNodeId :
                null;
            if (Array.isArray(state.expandedNodeIds)) {
                this.expandedNodeIds_.clear();
                for (const nodeId of state.expandedNodeIds) {
                    this.expandedNodeIds_.add(nodeId);
                }
            }
        }
        catch (e) {
            console.warn('Failed to load TabStripInternals state from localStorage', e);
        }
    }
    /** Persist UI state to localStorage. */
    saveState_() {
        try {
            localStorage.setItem('tabstrip_internals_state', JSON.stringify({
                navPaneWidth: this.navPaneWidth_,
                selectedNodeId: this.selectedNodeId_,
                expandedNodeIds: Array.from(this.expandedNodeIds_),
            }));
        }
        catch (e) {
            console.warn('Failed to persist state to localStorage', e);
        }
    }
    /** Build an internal representation of mojo data. */
    buildModelHierarchy_(data) {
        this.root_ = DataModelAdapter.build(data);
        this.rebuildNodeMap_();
        assert(this.root_);
        // Default selection to root node and ensure it's always expanded.
        if (!this.selectedNodeId_) {
            this.selectedNodeId_ = this.root_.path;
        }
        this.expandedNodeIds_.add(this.root_.path);
        this.notifyObservers_(ViewModelChange.CONTENT);
    }
    /** Set the error message. */
    setError_(msg, e) {
        console.error(msg, e);
        this.errorMessage_ = msg;
        this.notifyObservers_(ViewModelChange.NOTIFICATION);
    }
    /** Notify observer views about changes to the ViewModel. */
    notifyObservers_(change) {
        for (const observer of this.observers_) {
            observer.onViewModelChanged(change);
        }
    }
    /**
     * Rebuild cache that maps nodeId to nodeObject by recursively traversing the
     * TabStrip hierarchy.
     */
    rebuildNodeMap_() {
        this.nodeMap_.clear();
        if (!this.root) {
            return;
        }
        // DFS traversal.
        assert(this.root_);
        const stack = [this.root_];
        while (stack.length) {
            const node = stack.pop();
            this.nodeMap_.set(node.path, node);
            for (const c of node.children) {
                stack.push(c);
            }
        }
    }
    /** Expands all ancestors of the given node, excluding the node itself. */
    expandTo_(nodeId) {
        // NodeId represents the unique path of a node.
        const tokens = this.tokenizePath_(nodeId);
        if (!tokens.length) {
            return;
        }
        // Reconstruct path to target node using parsed tokens.
        // First token is always the root node, subsequent tokens need to be
        // appended with a dot. Example: Container.windows[1].tabs[0]
        let acc = tokens[0];
        this.expandedNodeIds_.add(acc);
        // Skip the last token as the target node should not be expanded.
        for (let i = 1; i < tokens.length - 1; i++) {
            const tok = tokens[i];
            // Index tokens (e.g. `[1]`) should be appended directly without a dot.
            // Example: ['Container', 'windows', '[1]'] should result in
            // 'Container.windows[1]'
            acc += this.isIndexToken_(tok) ? tok : `.${tok}`;
            this.expandedNodeIds_.add(acc);
        }
    }
    /**
     * Splits a node identifier (it's path) into its constituent tokens.
     *
     * The path string uses dot notation for object properties and bracket
     * notation for array indices.
     *
     * For example: "Container.windows[1].tabs[0]" maps to
     * ["Container", "windows", "[1]", "tabs", "[0]"]
     *
     * Each token represents one level in the model hierarchy.
     */
    tokenizePath_(path) {
        const tokens = [];
        // Regex matches either bracketed-index tokens ("[123]") or dot-separated
        // identifiers. For example, input string "Container.windows[1].tabs[0]"
        // will be parsed as ["Container", "windows", "[1]", "tabs", "[0]"]
        const re = /(\[[0-9]+\]|[^.\[\]]+)/g;
        let match;
        while ((match = re.exec(path))) {
            tokens.push(match[0]);
        }
        return tokens;
    }
    /**
     * Returns true if the given token represents an array index, i.e. it has
     * the form "[number]".
     */
    isIndexToken_(tok) {
        return /^\[[0-9]+\]$/.test(tok);
    }
}
