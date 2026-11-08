// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { middleOfNode } from 'chrome://webui-test/mouse_mock_interactions.js';
/**
 * Create a fake history result with the given timestamp.
 * @param timestamp Timestamp of the entry, as a number in ms or a string which
 *     can be parsed by Date.parse().
 * @param urlStr The URL to set on this entry.
 * @param otherTimestamps The other timestamps associated with this or similar
 *     urls. This should not include the current `timestamp` associated with
 *     `urlStr`.
 */
export function createHistoryEntry(timestamp, urlStr, otherTimestamps) {
    if (typeof timestamp === 'string') {
        timestamp += ' UTC';
    }
    const d = new Date(timestamp);
    const url = new URL(urlStr);
    const domain = url.host;
    // Add the other urls' timestamps (if any) and append the current url &
    // timestamp to allTimestamps.
    otherTimestamps = otherTimestamps || {};
    const { [urlStr]: currentUrlTimestamps = [], ...otherUrlsTimestamps } = otherTimestamps;
    const allTimestamps = {
        [urlStr]: [d.getTime(), ...currentUrlTimestamps],
        ...otherUrlsTimestamps,
    };
    return {
        allTimestamps: allTimestamps,
        remoteIconUrlForUma: '',
        isUrlInRemoteUserData: false,
        blockedVisit: false,
        // Formatting the relative day is too hard, will instead display
        // YYYY-MM-DD.
        dateRelativeDay: d.toISOString().split('T')[0],
        dateShort: '',
        dateTimeOfDay: d.getUTCHours() + ':' + d.getUTCMinutes(),
        debug: null,
        deviceName: '',
        deviceType: '',
        domain: domain,
        fallbackFaviconText: '',
        hostFilteringBehavior: 0,
        readableTimestamp: '',
        selected: false,
        snippet: '',
        starred: false,
        time: d.getTime(),
        title: urlStr,
        url: urlStr,
        isActorVisit: false,
        criticalActions: [],
    };
}
/**
 * Create a fake history search result with the given timestamp. Replaces fields
 * from createHistoryEntry to look like a search result.
 * @param timestamp Timestamp of the entry, as a number in ms or a string which
 *     can be parsed by Date.parse().
 * @param urlStr The URL to set on this entry.
 */
export function createSearchEntry(timestamp, urlStr) {
    const entry = createHistoryEntry(timestamp, urlStr);
    entry.dateShort = entry.dateRelativeDay;
    entry.dateTimeOfDay = '';
    entry.dateRelativeDay = '';
    return entry;
}
/**
 * Create a simple HistoryQuery.
 * @param searchTerm The search term that the info has. Will be empty  string if
 *     not specified.
 */
export function createHistoryInfo(searchTerm) {
    return { finished: true, term: searchTerm || '' };
}
/**
 * Returns a promise which is resolved when |eventName| is fired on |element|
 * and |predicate| is true.
 */
export function waitForEvent(element, eventName, predicate) {
    if (!predicate) {
        predicate = () => true;
    }
    return new Promise(function (resolve) {
        const listener = function (e) {
            if (!predicate(e)) {
                return;
            }
            resolve();
            element.removeEventListener(eventName, listener);
        };
        element.addEventListener(eventName, listener);
    });
}
/**
 * Sends a shift click event to |element|.
 */
export async function shiftClick(element) {
    const xy = middleOfNode(element);
    const props = {
        bubbles: true,
        cancelable: true,
        clientX: xy.x,
        clientY: xy.y,
        buttons: 1,
        shiftKey: true,
    };
    element.dispatchEvent(new MouseEvent('mousedown', props));
    element.dispatchEvent(new MouseEvent('mouseup', props));
    element.dispatchEvent(new MouseEvent('click', props));
    await element.updateComplete;
}
/**
 * Sends a shift click event to |element|, using PointerEvent.
 */
export async function shiftPointerClick(element) {
    const xy = middleOfNode(element);
    const props = {
        bubbles: true,
        cancelable: true,
        clientX: xy.x,
        clientY: xy.y,
        buttons: 1,
        shiftKey: true,
    };
    element.dispatchEvent(new PointerEvent('pointerdown', props));
    element.dispatchEvent(new PointerEvent('pointerup', props));
    element.dispatchEvent(new PointerEvent('click', props));
    await element.updateComplete;
}
export function disableLinkClicks() {
    document.addEventListener('click', function (e) {
        if (e.defaultPrevented) {
            return;
        }
        const eventPath = e.composedPath();
        let anchor = null;
        if (eventPath) {
            for (let i = 0; i < eventPath.length; i++) {
                const element = eventPath[i];
                if (element.tagName === 'A' && element.href) {
                    anchor = element;
                    break;
                }
            }
        }
        if (!anchor) {
            return;
        }
        e.preventDefault();
    });
}
export function createSession(name, windows) {
    return {
        collapsed: false,
        name,
        modifiedTime: '2 seconds ago',
        tag: name,
        timestamp: 0,
        windows,
    };
}
export function createWindow(tabUrls) {
    const tabs = tabUrls.map(function (tabUrl) {
        return {
            direction: '',
            remoteIconUrlForUma: '',
            sessionId: 456,
            timestamp: 0,
            timestampDisplayStr: '',
            title: tabUrl,
            url: tabUrl,
            windowId: 0,
        };
    });
    return { tabs: tabs, sessionId: 123, timestamp: 0 };
}
export function navigateTo(route, _app) {
    window.history.replaceState({}, '', route);
    window.dispatchEvent(new CustomEvent('popstate'));
}
