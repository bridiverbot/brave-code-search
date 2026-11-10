// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { SearchHandler } from './tab_search.mojom-webui.js';
let instance = null;
export class SearchApiProxyImpl {
    handler;
    constructor() {
        this.handler = SearchHandler.getRemote();
    }
    getRangesIgnoringCaseAndAccents(searchText, targets) {
        return this.handler.getRangesIgnoringCaseAndAccents(searchText, targets);
    }
    static getInstance() {
        return instance || (instance = new SearchApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
