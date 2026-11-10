// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class ImportExportFileProxyImpl {
    downloadFile(a) {
        a.click();
    }
    selectFile(input) {
        input.click();
    }
    copyToClipboard(text) {
        return navigator.clipboard.writeText(text);
    }
    readFromClipboard() {
        return navigator.clipboard.readText();
    }
    static getInstance() {
        return instance || (instance = new ImportExportFileProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
