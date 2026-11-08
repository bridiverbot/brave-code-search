// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TabAlertState } from 'chrome://tab-search.top-chrome/tab_search.js';
export const SAMPLE_WINDOW_HEIGHT = 448;
export function createTab(overrides) {
    return Object.assign({
        active: false,
        visible: false,
        faviconUrl: null,
        groupId: null,
        alertStates: [],
        isDefaultFavicon: false,
        lastActiveElapsedText: '',
        lastActiveTimeTicks: { internalValue: BigInt(0) },
        pinned: false,
        split: false,
        splitId: null,
        splitLayout: null,
        showIcon: false,
        tabId: 1,
        title: 'Example',
        url: 'https://www.example.com',
    }, overrides);
}
export const SAMPLE_WINDOW_DATA_WITH_MEDIA_TAB = [{
        active: true,
        isHostWindow: true,
        height: SAMPLE_WINDOW_HEIGHT,
        tabs: [
            createTab({
                active: false,
                alertStates: [TabAlertState.kMediaRecording],
                tabId: 1,
                title: 'Meet',
                url: 'https://meet.google.com/',
                lastActiveTimeTicks: { internalValue: BigInt(4) },
            }),
            createTab({
                active: false,
                tabId: 2,
                title: 'Google',
                url: 'https://www.google.com',
                lastActiveTimeTicks: { internalValue: BigInt(5) },
            }),
            createTab({
                active: false,
                tabId: 3,
                title: 'Example',
                url: 'https://www.example.com',
                lastActiveTimeTicks: { internalValue: BigInt(3) },
            }),
        ],
    }];
export const SAMPLE_WINDOW_DATA = [
    {
        active: true,
        isHostWindow: true,
        height: SAMPLE_WINDOW_HEIGHT,
        tabs: [
            createTab({
                title: 'Google',
                url: 'https://www.google.com',
                lastActiveTimeTicks: { internalValue: BigInt(5) },
            }),
            createTab({
                tabId: 5,
                title: 'Amazon',
                url: 'https://www.amazon.com',
                lastActiveTimeTicks: { internalValue: BigInt(4) },
            }),
            createTab({
                tabId: 6,
                title: 'Apple',
                url: 'https://www.apple.com',
                lastActiveTimeTicks: { internalValue: BigInt(3) },
            }),
        ],
    },
    {
        active: false,
        isHostWindow: false,
        height: SAMPLE_WINDOW_HEIGHT,
        tabs: [
            createTab({
                tabId: 2,
                title: 'Bing',
                url: 'https://www.bing.com/',
                lastActiveTimeTicks: { internalValue: BigInt(2) },
            }),
            createTab({
                tabId: 3,
                title: 'Yahoo',
                url: 'https://www.yahoo.com',
                lastActiveTimeTicks: { internalValue: BigInt(1) },
            }),
            createTab({
                tabId: 4,
                title: 'Apple',
                url: 'https://www.apple.com/',
            }),
        ],
    },
];
export const SAMPLE_RECENTLY_CLOSED_DATA = [
    {
        groupId: null,
        tabId: 100,
        title: 'PayPal',
        url: 'https://www.paypal.com',
        lastActiveTime: { internalValue: BigInt(11) },
        lastActiveElapsedText: '',
        splitId: null,
    },
    {
        groupId: null,
        tabId: 101,
        title: 'Stripe',
        url: 'https://www.stripe.com',
        lastActiveTime: { internalValue: BigInt(12) },
        lastActiveElapsedText: '',
        splitId: null,
    },
];
export function createProfileData(overrides) {
    return Object.assign({
        windows: SAMPLE_WINDOW_DATA,
        tabGroups: [],
        recentlyClosedTabGroups: [],
        recentlyClosedTabs: [],
        recentlyClosedSplitViews: [],
        recentlyClosedSectionExpanded: false,
    }, overrides || {});
}
export function sampleSiteNames(count) {
    return Array.from({ length: count }, (_, i) => (i + 1).toString());
}
/**
 * Generates sample tabs based on some given site names.
 */
export function generateSampleTabsFromSiteNames(siteNames) {
    return siteNames.map((siteName, i) => {
        return createTab({
            tabId: i + 1,
            groupId: null,
            title: siteName,
            url: 'https://www.' + siteName.toLowerCase() + '.com',
            lastActiveTimeTicks: { internalValue: BigInt(siteNames.length - i) },
        });
    });
}
export function generateSampleRecentlyClosedTabsFromSiteNames(siteNames) {
    return siteNames.map((siteName, i) => {
        return {
            tabId: i + 1,
            groupId: null,
            splitId: null,
            title: siteName,
            url: 'https://www.' + siteName.toLowerCase() + '.com',
            lastActiveTimeTicks: { internalValue: BigInt(siteNames.length - i) },
            lastActiveTime: { internalValue: BigInt(siteNames.length - i) },
            lastActiveElapsedText: '',
        };
    });
}
export function generateSampleRecentlyClosedTabs(titlePrefix, count, groupId) {
    return Array.from({ length: count }, (_, i) => {
        const tabId = i + 1;
        const tab = {
            tabId,
            groupId: null,
            splitId: null,
            title: `${titlePrefix} ${tabId}`,
            url: `https://www.sampletab.com?q=${tabId}`,
            lastActiveTime: { internalValue: BigInt(count - i) },
            lastActiveElapsedText: '',
        };
        if (groupId !== undefined) {
            tab.groupId = groupId;
        }
        return tab;
    });
}
/**
 * Generates profile data for a window with a series of tabs.
 */
export function generateSampleDataFromSiteNames(siteNames) {
    return {
        windows: [{
                active: true,
                isHostWindow: true,
                height: SAMPLE_WINDOW_HEIGHT,
                tabs: generateSampleTabsFromSiteNames(siteNames),
            }],
        recentlyClosedTabs: [],
        tabGroups: [],
        recentlyClosedTabGroups: [],
        recentlyClosedSplitViews: [],
        recentlyClosedSectionExpanded: false,
    };
}
export function sampleToken(high, low) {
    const token = { high, low };
    Object.freeze(token);
    return token;
}
