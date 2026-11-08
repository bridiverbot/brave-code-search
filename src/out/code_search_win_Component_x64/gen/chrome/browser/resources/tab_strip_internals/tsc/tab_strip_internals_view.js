// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { ViewModelChange } from './tab_strip_internals_viewmodel.js';
/**
 * View layer: Handles presentation and user interaction for the TabStrip
 * Internals page.
 */
export class TabStripInternalsView {
    viewModel_;
    /**
     * Represents the left pane element used to display a tree-view of nodes
     * (a hierarchy of tabs and tabcollections).
     */
    treeViewPaneEl_;
    /**
     * Represents the right pane element used to display a JSON-view of node
     * metadata.
     */
    jsonPaneEl_;
    /** Represents the divider element between left and right panes. */
    dividerEl_;
    /** Represents a notification toast element. */
    toastEl_;
    static TOAST_DURATION_MS = 1500;
    constructor(viewModel) {
        this.viewModel_ = viewModel;
        this.treeViewPaneEl_ = document.getElementById('treeViewPane');
        this.jsonPaneEl_ = document.getElementById('jsonPane');
        this.dividerEl_ = document.getElementById('divider');
        this.toastEl_ = document.getElementById('toast');
        // Setup event listeners.
        this.setupDividerListeners_();
        this.setupToolbarListeners_();
        // Subscribe to ViewModel state changes.
        this.viewModel_.subscribe(this);
    }
    /**
     * React to ViewModel state changes.
     */
    onViewModelChanged(change) {
        switch (change) {
            case ViewModelChange.NOTIFICATION:
                this.showToast_(this.viewModel_.errorMessage);
                this.viewModel_.clearError();
                return;
            case ViewModelChange.LAYOUT:
                this.updateSplitLayout_();
                return;
            case ViewModelChange.CONTENT:
                this.render_();
                return;
            default:
                console.warn('Unhandled ViewModelChange:', change);
                return;
        }
    }
    /** Root render method used to render the entire view. */
    render_() {
        if (!this.viewModel_.root) {
            return;
        }
        this.renderTreeViewPane_();
        this.renderJsonViewPane_();
    }
    /**
     * Render treeView pane to display a hierarchy of tabs and collections in
     * the navigation panel present on the left side.
     */
    renderTreeViewPane_() {
        assert(this.viewModel_.root);
        const rootEl = this.renderTreeNode_(this.viewModel_.root);
        this.treeViewPaneEl_.replaceChildren(rootEl);
    }
    /** Recursively render nodes for the tree view. */
    renderTreeNode_(node) {
        const nodeLabel = node.label;
        const nodePath = node.path;
        const isSelected = this.viewModel_.selectedNode === nodePath;
        const isExpanded = this.viewModel_.isExpanded(nodePath);
        const canExpand = this.viewModel_.hasChildren(nodePath);
        const wrapEl = document.createElement('div');
        wrapEl.className = 'tree-node-wrap';
        const nodeEl = document.createElement('div');
        nodeEl.className = 'tree-node' + (isSelected ? ' selected' : '');
        nodeEl.dataset['path'] = nodePath;
        const expandEl = document.createElement('span');
        expandEl.className = 'expander';
        expandEl.textContent = canExpand ? (isExpanded ? '▾' : '▸') : '';
        const nodeLabelEl = document.createElement('span');
        nodeLabelEl.textContent = nodeLabel;
        nodeEl.append(expandEl, nodeLabelEl);
        const icon = this.renderNodeIcon_(node);
        if (icon) {
            nodeEl.append(icon);
        }
        nodeEl.onclick = this.handleNodeClick_.bind(this, node);
        expandEl.onclick = this.handleExpanderClick_.bind(this, node);
        wrapEl.append(nodeEl);
        // Render children recursively if expanded.
        if (isExpanded) {
            const childrenEl = document.createElement('div');
            childrenEl.className = 'tree-children';
            for (const childNode of this.viewModel_.getChildren(nodePath)) {
                childrenEl.appendChild(this.renderTreeNode_(childNode));
            }
            wrapEl.append(childrenEl);
        }
        return wrapEl;
    }
    /**
     * Render jsonView pane to display a metadata about selected node in
     * the content panel present on the right side.
     */
    renderJsonViewPane_() {
        const preTagEl = this.jsonPaneEl_.querySelector('#json');
        if (!preTagEl) {
            return;
        }
        preTagEl.replaceChildren();
        const selectedNodeId = this.viewModel_.selectedNode;
        if (!selectedNodeId) {
            preTagEl.textContent = 'Select a node to view its details.';
            return;
        }
        const node = this.viewModel_.getNode(selectedNodeId);
        if (!node) {
            preTagEl.textContent = 'Selected node object could not be found.';
            return;
        }
        preTagEl.append(this.buildHighlightedJson_(node.value ?? null));
    }
    /** Display a toast message. */
    showToast_(msg) {
        this.toastEl_.textContent = msg;
        this.toastEl_.classList.add('show');
        setTimeout(() => this.toastEl_.classList.remove('show'), TabStripInternalsView.TOAST_DURATION_MS);
    }
    // DOM manipulation.
    updateSplitLayout_() {
        document.getElementById('split').style.gridTemplateColumns =
            `${this.viewModel_.navPaneWidth}px 5px 1fr`;
    }
    /** Return a container span with all applicable icons. */
    renderNodeIcon_(node) {
        const value = node.value;
        const iconsEl = [];
        if (value?.pinned) {
            iconsEl.push(this.makeIcon('pinned', 'Pinned'));
        }
        if (value?.selected) {
            iconsEl.push(this.makeIcon('check', 'Selected'));
        }
        if (value?.active) {
            iconsEl.push(this.makeIcon('dot active', 'Active'));
        }
        if (!iconsEl.length) {
            return null;
        }
        const group = document.createElement('span');
        group.className = 'icon-group';
        for (const icon of iconsEl) {
            group.appendChild(icon);
        }
        return group;
    }
    /** Return an icon element. */
    makeIcon(iconClass, iconTitle) {
        const element = document.createElement('span');
        element.className = `icon ${iconClass}`;
        element.title = iconTitle;
        return element;
    }
    // Event handlers.
    setupDividerListeners_() {
        this.dividerEl_.addEventListener('mousedown', this.handleDividerMouseDown_.bind(this));
        this.dividerEl_.onkeydown = this.handleDividerKeydown_.bind(this);
    }
    setupToolbarListeners_() {
        document.getElementById('btn-expand').onclick =
            this.handleExpandAll_.bind(this);
        document.getElementById('btn-collapse').onclick =
            this.handleCollapseAll_.bind(this);
        document.getElementById('btn-copy').onclick =
            this.handleCopyJson_.bind(this);
    }
    /** Handle resizing of the sections via mouse events. */
    handleDividerMouseDown_(e) {
        let lastX = e.clientX;
        let rAF = 0;
        const move = (ev) => {
            if (rAF) {
                return;
            }
            rAF = requestAnimationFrame(() => {
                rAF = 0;
                const delta = ev.clientX - lastX;
                lastX = ev.clientX;
                this.viewModel_.setNavPaneWidth(this.viewModel_.navPaneWidth + delta);
            });
        };
        const up = () => {
            if (rAF) {
                cancelAnimationFrame(rAF);
                rAF = 0;
            }
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
            this.viewModel_.saveNavPaneWidthState();
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
    }
    /** Handle resizing of the sections via keyboard. */
    handleDividerKeydown_(e) {
        const step = e.shiftKey ? 50 : 10;
        switch (e.key) {
            case 'ArrowLeft':
                this.viewModel_.setNavPaneWidth(this.viewModel_.navPaneWidth - step);
                break;
            case 'ArrowRight':
                this.viewModel_.setNavPaneWidth(this.viewModel_.navPaneWidth + step);
                break;
            default:
                return;
        }
        this.viewModel_.saveNavPaneWidthState();
        e.preventDefault();
    }
    /** Handle clicks on a tree node within the treeView pane. */
    handleNodeClick_(node) {
        const path = node.path;
        if (this.viewModel_.selectedNode !== path) {
            this.viewModel_.setSelectedNode(path);
        }
        // Clicking a node should expand or collapse the sub-tree for
        // user-convenience.
        // It mimics the same behavior that occurs when user clicks on the
        // expander of a node.
        const canExpand = this.viewModel_.hasChildren(path);
        if (canExpand) {
            this.viewModel_.toggleExpanded(path);
        }
    }
    /**
     * Handle clicks on the expander (expand-collapse icon) within a node in the
     * treeView pane.
     */
    handleExpanderClick_(node, e) {
        e.stopPropagation();
        const path = node.path;
        const canExpand = this.viewModel_.hasChildren(path);
        if (!canExpand) {
            return;
        }
        this.viewModel_.toggleExpanded(path);
    }
    /** Expands all nodes in the tree view. */
    handleExpandAll_() {
        this.viewModel_.expandAll();
    }
    /** Collapses all nodes in the tree view. */
    handleCollapseAll_() {
        this.viewModel_.collapseAll();
    }
    /** Copies JSON data of selected node to clipboard. */
    async handleCopyJson_() {
        const selectedNodeId = this.viewModel_.selectedNode;
        if (!selectedNodeId) {
            this.showToast_('Select a node to copy JSON.');
            return;
        }
        const node = this.viewModel_.getNode(selectedNodeId);
        if (!node) {
            this.showToast_('Unable to find selected node data.');
            return;
        }
        try {
            await navigator.clipboard.writeText(this.safeStringify_(node.value ?? null));
            this.showToast_('JSON copied');
        }
        catch (e) {
            const msg = `Failed to copy JSON to clipboard`;
            console.error(`${msg}:`, e);
            this.showToast_(msg);
        }
    }
    // Utility methods to build highlighted JSON.
    /** Build a syntax-highlighted DOM fragment for a JSON object. */
    buildHighlightedJson_(obj) {
        const fragment = document.createDocumentFragment();
        this.renderJsonValue_(fragment, obj);
        return fragment;
    }
    /**
     * Recursively render a syntax-highlighted JSON value into given DOM fragment.
     * - Primitives are rendered as single styled tokens.
     * - Arrays and objects are rendered recursively with indentation.
     */
    renderJsonValue_(fragment, value, depth = 0) {
        if (value === null) {
            this.appendToken_(fragment, 'null', 'null');
            return;
        }
        switch (typeof value) {
            case 'string':
                this.appendToken_(fragment, 'string', `"${value}"`);
                return;
            case 'number':
                this.appendToken_(fragment, 'number', String(value));
                return;
            case 'boolean':
                this.appendToken_(fragment, 'boolean', String(value));
                return;
            case 'bigint':
                this.appendToken_(fragment, 'number', value.toString());
                return;
            case 'object': {
                if (Array.isArray(value)) {
                    this.renderJsonArray_(fragment, value, depth);
                }
                else {
                    this.renderJsonObject_(fragment, value, depth);
                }
                return;
            }
            default:
                this.appendToken_(fragment, 'string', `"${String(value)}"`);
                return;
        }
    }
    renderJsonArray_(fragment, value, depth) {
        // Compact arrays (all primitives, <= 3 elements) render inline.
        const compact = value.length <= 3 && value.every(v => typeof v !== 'object');
        if (compact) {
            this.appendToken_(fragment, 'punct', '[');
            value.forEach((v, i) => {
                if (i) {
                    this.appendToken_(fragment, 'punct', ', ');
                }
                this.renderJsonValue_(fragment, v, depth + 1);
            });
            this.appendToken_(fragment, 'punct', ']');
            return;
        }
        // Multiline arrays.
        this.appendToken_(fragment, 'punct', '[');
        if (value.length) {
            this.appendText_(fragment, '\n');
            value.forEach((v, i) => {
                this.appendText_(fragment, '  '.repeat(depth + 1));
                this.renderJsonValue_(fragment, v, depth + 1);
                if (i < value.length - 1) {
                    this.appendToken_(fragment, 'punct', ',');
                }
                this.appendText_(fragment, '\n');
            });
            this.appendText_(fragment, '  '.repeat(depth));
        }
        this.appendToken_(fragment, 'punct', ']');
    }
    renderJsonObject_(fragment, value, depth) {
        const pad = '  '.repeat(depth);
        this.appendToken_(fragment, 'punct', '{');
        const entries = Object.entries(value);
        if (entries.length) {
            this.appendText_(fragment, '\n');
        }
        entries.forEach(([k, v], i) => {
            this.appendText_(fragment, pad + '  ');
            this.appendToken_(fragment, 'key', `"${k}"`);
            this.appendToken_(fragment, 'punct', ': ');
            this.renderJsonValue_(fragment, v, depth + 1);
            if (i < entries.length - 1) {
                this.appendToken_(fragment, 'punct', ',');
            }
            this.appendText_(fragment, '\n');
        });
        this.appendText_(fragment, pad);
        this.appendToken_(fragment, 'punct', '}');
    }
    /** Create a styled span representing a JSON token. */
    makeSpan_(clsName, text) {
        const span = document.createElement('span');
        span.className = clsName;
        span.textContent = text;
        return span;
    }
    /** Append a syntax-highlighted token to the fragment. */
    appendToken_(fragment, clsName, text) {
        fragment.append(this.makeSpan_(clsName, text));
    }
    /** Append plain text to the fragment. */
    appendText_(fragment, text) {
        fragment.append(document.createTextNode(text));
    }
    /** Safely convert given json object to string for copying. */
    safeStringify_(obj, space = 2) {
        return JSON.stringify(obj, (_, v) => (typeof v === 'bigint' ? v.toString() : v), space);
    }
}
