// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { BookmarksObserverReceiver, BookmarksService } from './bookmarks_api.mojom-webui.js';
import { BookmarksEventFieldTags, whichBookmarksEvent } from './bookmarks_api.mojom-webui.js';
import { Store } from './store.js';
import { normalizeMojoNode, normalizeNodes, toMojoNode } from './util.js';
class BookmarkEventForwarder {
    listeners_ = [];
    addListener(listener) {
        this.listeners_.push(listener);
    }
    removeListener(listener) {
        this.listeners_ = this.listeners_.filter(l => l !== listener);
    }
    forward(...args) {
        this.listeners_.forEach(l => l(...args));
    }
}
// Directs mojo events to our proxy. Once the migration is complete, we should
// collapse this indirection.
class MojoObserver {
    proxy_;
    constructor(proxy) {
        this.proxy_ = proxy;
    }
    onBookmarksEvents(events) {
        this.proxy_.handleMojoEvents(events);
    }
}
export class BookmarksApiProxyImpl {
    receiver_ = null;
    rootNodeResolver_ = new PromiseResolver();
    onCreated = new BookmarkEventForwarder();
    onRemoved = new BookmarkEventForwarder();
    onChanged = new BookmarkEventForwarder();
    onMoved = new BookmarkEventForwarder();
    onChildrenReordered = new BookmarkEventForwarder();
    constructor() {
        BookmarksService.getRemote().getBookmarks().then(snapshot => {
            const nodes = normalizeNodes(snapshot.root);
            this.rootNodeResolver_.resolve(nodes);
            // Defer binding the observer to a subsequent microtask so that listeners
            // on rootNodeResolver_ (such as Store initialization) have completed.
            this.rootNodeResolver_.promise.then(() => {
                const observer = new MojoObserver(this);
                this.receiver_ = new BookmarksObserverReceiver(observer);
                this.receiver_.$.bindHandle(snapshot.stream.handle);
            });
        });
    }
    getTree() {
        return this.rootNodeResolver_.promise;
    }
    update(id, changes) {
        const store = Store.getInstance();
        const node = store.data.nodes[id];
        if (!node) {
            throw new Error('Node not found in store: ' + id);
        }
        const mojoNode = toMojoNode(node);
        if (mojoNode.url) {
            // Url node type.
            if (changes.title !== undefined) {
                mojoNode.url.title = changes.title;
            }
            if (changes.url !== undefined) {
                mojoNode.url.url = changes.url;
            }
        }
        else if (mojoNode.folder) {
            // Folder node type. We ignore the url field.
            if (changes.title !== undefined) {
                mojoNode.folder.title = changes.title;
            }
        }
        else {
            throw new Error('unexpected bookmark node type encountered');
        }
        const parentId = Store.getInstance().data.nodes[id].parentId;
        return BookmarksService.getRemote().updateBookmarkNode(mojoNode).then(updated => {
            return normalizeMojoNode(updated, parentId);
        });
    }
    create(parentId, index, title, url) {
        // The url vs folder is implicitly determined by whether or not url is
        // defined.
        const mojoNode = toMojoNode({ id: '', title, url });
        return BookmarksService.getRemote()
            .createBookmarkNode({ value: parentId }, index, mojoNode)
            .then(mojoResponseNode => normalizeMojoNode(mojoResponseNode, parentId));
    }
    delete(idList) {
        const uuids = idList.map(id => {
            return { value: id };
        });
        return BookmarksService.getRemote().deleteBookmarkNodes(uuids).then(() => { });
    }
    handleMojoEvents(events) {
        for (const event of events) {
            const eventType = whichBookmarksEvent(event);
            switch (eventType) {
                case BookmarksEventFieldTags.ADDED:
                    this.handleMojoAdded_(event.added);
                    break;
                case BookmarksEventFieldTags.REMOVED:
                    this.handleMojoRemoved_(event.removed);
                    break;
                case BookmarksEventFieldTags.MOVED:
                    this.handleMojoMoved_(event.moved);
                    break;
                case BookmarksEventFieldTags.CHANGED:
                    this.handleMojoChanged_(event.changed);
                    break;
                default:
                    assertNotReachedCase(eventType);
            }
        }
    }
    handleMojoAdded_(event) {
        this.onCreated.forward(event.parentId.value, event.index, normalizeMojoNode(event.node, event.parentId.value));
    }
    handleMojoRemoved_(event) {
        const id = event.id.value;
        const store = Store.getInstance();
        const node = store.data.nodes[id];
        if (node) {
            const parentId = node.parentId;
            const parentNode = store.data.nodes[parentId];
            const index = parentNode ? parentNode.children.indexOf(id) : -1;
            this.onRemoved.forward(id, parentId, index);
        }
    }
    handleMojoMoved_(event) {
        const oldParentId = event.oldParentId.value;
        const newParentId = event.newParentId.value;
        const store = Store.getInstance();
        const oldParentNode = store.data.nodes[oldParentId];
        // Folder node type is implicitly determined by existence of "children"
        // field.
        assert(!!oldParentNode && !!oldParentNode.children, 'expected node: ' + oldParentId + ' to be a folder, but it is not');
        const id = oldParentNode.children[event.oldIndex];
        assert(id !== undefined, 'expected to find [' + event.oldIndex + '], at folder: ' + oldParentId +
            ', but could not find a node at that index');
        this.onMoved.forward(id, oldParentId, event.oldIndex, newParentId, event.newIndex);
    }
    handleMojoChanged_(event) {
        const id = event.node.url?.id?.value || event.node.folder?.id?.value || '';
        const targetNode = Store.getInstance().data.nodes[id];
        assert(!!targetNode, 'change target not found');
        const parentId = targetNode.parentId;
        // All non-root nodes should have a parentId and root nodes cannot be
        // changed
        assert(!!parentId, 'target node does not have a parent, this is an invalid state');
        this.onChanged.forward(id, normalizeMojoNode(event.node, parentId));
    }
    static getInstance() {
        return instance || (instance = new BookmarksApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
