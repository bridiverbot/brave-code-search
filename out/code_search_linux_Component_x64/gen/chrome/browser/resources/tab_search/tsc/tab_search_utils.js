// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { highlight } from 'chrome://resources/js/search_highlight_utils.js';
import { TabAlertState } from './tabs.mojom-webui.js';
export function highlightText(container, text, ranges) {
    container.textContent = '';
    const node = document.createTextNode(text);
    container.appendChild(node);
    if (ranges) {
        highlight(node, ranges);
    }
}
export function tabHasMediaAlerts(tab) {
    return tab.alertStates.length > 0;
}
export function getMediaAlertImageClass(tab) {
    if (!tabHasMediaAlerts(tab)) {
        return '';
    }
    const alert = tab.alertStates[0];
    switch (alert) {
        case TabAlertState.kMediaRecording:
            return 'media-recording';
        case TabAlertState.kAudioRecording:
            return 'audio-recording';
        case TabAlertState.kVideoRecording:
            return 'video-recording';
        case TabAlertState.kAudioPlaying:
            return 'audio-playing';
        case TabAlertState.kAudioMuting:
            return 'audio-muting';
        case TabAlertState.kGlicAccessing:
            return 'glic-accessing';
        default:
            return '';
    }
}
export function getFaviconUrlForTab(url, tab) {
    if (tab?.faviconUrl) {
        return `url("${tab.faviconUrl}")`;
    }
    const faviconPageUrl = tab?.isDefaultFavicon ? 'chrome://newtab' : url;
    return getFaviconForPageURL(faviconPageUrl, false);
}
