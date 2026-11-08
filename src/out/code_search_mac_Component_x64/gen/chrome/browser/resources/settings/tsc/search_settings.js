// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from './i18n_setup.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { createEmptySearchBubble, findAndRemoveHighlights, highlight, removeHighlights, stripDiacritics } from 'chrome://resources/js/search_highlight_utils.js';
/**
 * A CSS attribute indicating that a node should be ignored during searching.
 */
const SKIP_SEARCH_CSS_ATTRIBUTE = 'no-search';
/**
 * A CSS attribute containing an alternate search hint to be used during
 * searching.
 */
const SEARCH_HINT_CSS_ATTRIBUTE = 'search-hint';
/**
 * List of elements types that should not be searched at all.
 * The only DOM-MODULE node is in <body> which is not searched, therefore
 * DOM-MODULE is not needed in this set.
 */
const IGNORED_ELEMENTS = new Set([
    'CONTENT',
    'CR-ACTION-MENU',
    'CR-DIALOG',
    'CR-ICON',
    'CR-ICON-BUTTON',
    'CR-RIPPLE',
    'CR-SLIDER',
    'DIALOG',
    'IMG',
    'IRON-ICON',
    'IRON-LIST',
    'PAPER-RIPPLE',
    'PAPER-SPINNER-LITE',
    'SLOT',
    'STYLE',
    'TEMPLATE',
]);
/**
 * Traverses the entire DOM (including Shadow DOM), finds text nodes that
 * match the given regular expression and applies the highlight UI. It also
 * ensures that <settings-section> instances become visible if any matches
 * occurred under their subtree.
 *
 * @param root The root of the sub-tree to be searched
 * @return The number of matches that were found.
 */
function findAndHighlightMatches(request, root) {
    let matchCount = 0;
    const highlights = [];
    // Returns true if the node or any of its ancestors are a settings-subpage.
    function isInSubpage(node) {
        while (node !== null) {
            if (node.nodeName === 'SETTINGS-SUBPAGE') {
                return true;
            }
            node = node instanceof ShadowRoot ? node.host : node.parentNode;
        }
        return false;
    }
    function doSearch(node) {
        if (IGNORED_ELEMENTS.has(node.nodeName)) {
            return;
        }
        if (node instanceof HTMLElement) {
            const element = node;
            if (element.hasAttribute(SKIP_SEARCH_CSS_ATTRIBUTE) ||
                element.hasAttribute('hidden') || element.style.display === 'none') {
                return;
            }
        }
        if (node.nodeType === Node.TEXT_NODE) {
            let textContent = node.nodeValue;
            if (node.parentElement &&
                node.parentElement.hasAttribute(SEARCH_HINT_CSS_ATTRIBUTE)) {
                textContent +=
                    node.parentElement.getAttribute(SEARCH_HINT_CSS_ATTRIBUTE);
            }
            if (textContent.trim().length === 0) {
                return;
            }
            const strippedText = stripDiacritics(textContent);
            const ranges = [];
            for (let match; match = request.regExp.exec(strippedText);) {
                ranges.push({ start: match.index, length: match[0].length });
            }
            if (ranges.length > 0) {
                matchCount += ranges.length;
                if (node.parentNode.nodeName === 'OPTION') {
                    const select = node.parentNode.parentNode;
                    assert(select.nodeName === 'SELECT');
                    // TODO(crbug.com/41096577): support showing bubbles inside subpages.
                    // Currently, they're incorrectly positioned and there's no great
                    // signal at which to know when to reposition them (because every
                    // page asynchronously loads/renders things differently).
                    if (isInSubpage(select)) {
                        return;
                    }
                    showBubble(select, /*numResults=*/ ranges.length, request.bubbles, 
                    /*horizontallyCenter=*/ true);
                }
                else {
                    request.addTextObserver(node);
                    highlights.push(highlight(node, ranges));
                }
            }
            // Returning early since TEXT_NODE nodes never have children.
            return;
        }
        let child = node.firstChild;
        while (child !== null) {
            // Getting a reference to the |nextSibling| before calling doSearch()
            // because |child| could be removed from the DOM within doSearch().
            const nextSibling = child.nextSibling;
            doSearch(child);
            child = nextSibling;
        }
        const shadowRoot = node.shadowRoot;
        if (shadowRoot) {
            doSearch(shadowRoot);
        }
    }
    doSearch(root);
    request.addHighlights(highlights);
    return matchCount;
}
export function showBubble(control, newResults, bubbles, horizontallyCenter) {
    const bubble = createEmptySearchBubble(control, horizontallyCenter);
    const totalResults = (Number(bubble.dataset['results']) || 0) + newResults;
    bubble.dataset['results'] = String(totalResults);
    bubbles.add(bubble);
    const msgName = totalResults === 1 ? 'searchResultBubbleText' : 'searchResultsBubbleText';
    bubble.firstChild.textContent =
        loadTimeData.getStringF(msgName, totalResults);
}
class Task {
    request;
    node;
    constructor(request, node) {
        this.request = request;
        this.node = node;
    }
}
class SearchAndHighlightTask extends Task {
    exec() {
        const matchCount = findAndHighlightMatches(this.request, this.node);
        this.request.updateMatchCount(matchCount);
        return Promise.resolve();
    }
}
class TopLevelSearchTask extends Task {
    exec() {
        const shouldSearch = this.request.regExp !== null;
        if (shouldSearch) {
            const matchCount = findAndHighlightMatches(this.request, this.node);
            this.request.updateMatchCount(matchCount);
        }
        return Promise.resolve();
    }
}
class TaskQueue {
    request_;
    queues_;
    running_;
    onEmptyCallback_ = null;
    constructor(request) {
        this.request_ = request;
        this.reset();
        /**
         * Whether a task is currently running.
         */
        this.running_ = false;
    }
    /** Drops all tasks. */
    reset() {
        this.queues_ = { high: [], low: [] };
    }
    addTopLevelSearchTask(task) {
        this.queues_.high.push(task);
        this.consumePending_();
    }
    addSearchAndHighlightTask(task) {
        this.queues_.low.push(task);
        this.consumePending_();
    }
    /**
     * Registers a callback to be called every time the queue becomes empty.
     */
    onEmpty(onEmptyCallback) {
        this.onEmptyCallback_ = onEmptyCallback;
    }
    popNextTask_() {
        return this.queues_.high.shift() || this.queues_.low.shift();
    }
    consumePending_() {
        if (this.running_) {
            return;
        }
        const task = this.popNextTask_();
        if (!task) {
            this.running_ = false;
            if (this.onEmptyCallback_) {
                this.onEmptyCallback_();
            }
            return;
        }
        this.running_ = true;
        requestIdleCallback(() => {
            if (!this.request_.canceled) {
                task.exec().then(() => {
                    this.running_ = false;
                    this.consumePending_();
                });
            }
            // Nothing to do otherwise. Since the request corresponding to this
            // queue was canceled, the queue is disposed along with the request.
        });
    }
}
export class SearchRequest {
    rawQuery_;
    root_;
    regExp;
    canceled;
    matchCount_ = 0;
    resolver = new PromiseResolver();
    queue;
    textObservers_;
    highlights_;
    bubbles;
    constructor(rawQuery, root) {
        this.rawQuery_ = rawQuery;
        this.root_ = root;
        this.regExp = this.generateRegExp_();
        /**
         * Whether this request was canceled before completing.
         */
        this.canceled = false;
        this.queue = new TaskQueue(this);
        this.queue.onEmpty(() => {
            this.resolver.resolve(this);
        });
        this.textObservers_ = new Set();
        this.highlights_ = [];
        this.bubbles = new Set();
    }
    /** @param highlights The highlight wrappers to add */
    addHighlights(highlights) {
        this.highlights_.push(...highlights);
    }
    removeAllTextObservers() {
        this.textObservers_.forEach(observer => {
            observer.disconnect();
        });
        this.textObservers_.clear();
    }
    removeAllHighlightsAndBubbles() {
        removeHighlights(this.highlights_);
        this.highlights_ = [];
        for (const bubble of this.bubbles) {
            bubble.remove();
        }
        this.bubbles.clear();
    }
    addTextObserver(textNode) {
        const originalParentNode = textNode.parentNode;
        const observer = new MutationObserver(mutations => {
            const oldValue = mutations[0].oldValue.trim();
            const newValue = textNode.nodeValue.trim();
            if (oldValue !== newValue) {
                observer.disconnect();
                this.textObservers_.delete(observer);
                findAndRemoveHighlights(originalParentNode);
            }
        });
        observer.observe(textNode, { characterData: true, characterDataOldValue: true });
        this.textObservers_.add(observer);
    }
    /**
     * Fires this search request.
     */
    start() {
        this.queue.addTopLevelSearchTask(new TopLevelSearchTask(this, this.root_));
    }
    generateRegExp_() {
        let regExp = null;
        // Generate search text by escaping any characters that would be
        // problematic for regular expressions.
        const strippedQuery = stripDiacritics(this.rawQuery_.trim());
        const sanitizedQuery = strippedQuery.replace(SANITIZE_REGEX, '\\$&');
        if (sanitizedQuery.length > 0) {
            regExp = new RegExp(`(${sanitizedQuery})`, 'ig');
        }
        return regExp;
    }
    /**
     * @return Whether this SearchRequest refers to an identical query.
     */
    isSame(rawQuery) {
        return this.rawQuery_ === rawQuery;
    }
    /**
     * Updates the number of search hits found for this search request.
     */
    updateMatchCount(newMatches) {
        this.matchCount_ += newMatches;
    }
    getSearchResult() {
        assert(this.resolver.isFulfilled);
        return {
            canceled: this.canceled,
            matchCount: this.matchCount_,
            wasClearSearch: this.isSame(''),
        };
    }
}
// Helper to combine multiple SearchResult instances to a single one. The
// combined result only makes sense when the results are coming from
// SearchRequest instances that were issued for a single user query.
export function combineSearchResults(results) {
    assert(results.length > 0);
    return {
        canceled: results.some(r => r.canceled),
        matchCount: results.reduce((soFar, r) => soFar + r.matchCount, 0),
        wasClearSearch: results[0].wasClearSearch,
    };
}
const SANITIZE_REGEX = /[-[\]{}()*+?.,\\^$|#\s]/g;
class SearchManagerImpl {
    activeRequests_ = new Set();
    completedRequests_ = new Set();
    lastSearchedText_ = null;
    search(text, page) {
        // Cancel any pending requests if a request with different text is
        // submitted.
        if (text !== this.lastSearchedText_) {
            this.activeRequests_.forEach(function (request) {
                request.removeAllTextObservers();
                request.removeAllHighlightsAndBubbles();
                request.canceled = true;
                request.resolver.resolve(request);
            });
            this.activeRequests_.clear();
            this.completedRequests_.forEach(request => {
                request.removeAllTextObservers();
                request.removeAllHighlightsAndBubbles();
            });
            this.completedRequests_.clear();
        }
        this.lastSearchedText_ = text;
        const request = new SearchRequest(text, page);
        this.activeRequests_.add(request);
        request.start();
        return request.resolver.promise.then(() => {
            this.activeRequests_.delete(request);
            this.completedRequests_.add(request);
            return request;
        });
    }
}
let instance = null;
export function getSearchManager() {
    if (instance === null) {
        instance = new SearchManagerImpl();
    }
    return instance;
}
/**
 * Sets the SearchManager singleton instance, useful for testing.
 */
export function setSearchManagerForTesting(searchManager) {
    instance = searchManager;
}
