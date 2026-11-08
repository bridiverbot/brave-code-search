// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class PdfViewerPrivateProxyImpl {
    // 
    getTextInfo(textarea, knownFontIds) {
        return chrome.pdfViewerPrivate.getTextInfo(textarea, knownFontIds);
    }
    // 
    // 
    onSaveToDriveProgress = chrome.pdfViewerPrivate.onSaveToDriveProgress;
    saveToDrive(saveRequestType) {
        chrome.pdfViewerPrivate.saveToDrive(saveRequestType);
    }
    // 
    glicSummarize() {
        chrome.pdfViewerPrivate.glicSummarize();
    }
    setPdfDocumentTitle(title) {
        chrome.pdfViewerPrivate.setPdfDocumentTitle(title);
    }
    static getInstance() {
        return instance || (instance = new PdfViewerPrivateProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
