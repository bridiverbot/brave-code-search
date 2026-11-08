// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { normalizeNodes } from 'chrome://bookmarks/bookmarks.js';
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBookmarksApiProxy extends TestBrowserProxy {
    onCreated = new FakeChromeEvent();
    onRemoved = new FakeChromeEvent();
    onChanged = new FakeChromeEvent();
    onMoved = new FakeChromeEvent();
    onChildrenReordered = new FakeChromeEvent();
    getTreeResponse_ = {};
    constructor() {
        super([
            'create',
            'getTree',
            'update',
            'delete',
        ]);
    }
    getTree() {
        this.methodCalled('getTree');
        return Promise.resolve(this.getTreeResponse_);
    }
    setGetTree(node) {
        this.getTreeResponse_ = normalizeNodes(node);
    }
    update(id, changes) {
        this.methodCalled('update', [id, changes]);
        return Promise.resolve({
            id: id,
            title: changes.title || '',
            url: changes.url,
        });
    }
    create(parentId, index, title, url) {
        this.methodCalled('create', [parentId, index, title, url]);
        return Promise.resolve({
            id: 'new_node',
            parentId: parentId,
            title: title,
            url: url,
        });
    }
    delete(idList) {
        this.methodCalled('delete', idList);
        return Promise.resolve();
    }
}
