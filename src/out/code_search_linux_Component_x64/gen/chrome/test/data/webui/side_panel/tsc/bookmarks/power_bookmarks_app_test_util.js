// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://bookmarks-side-panel.top-chrome/power_bookmarks_list.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
export function createTestBookmarks() {
    return [
        {
            id: 'SIDE_PANEL_BOOKMARK_BAR_ID',
            parentId: 'SIDE_PANEL_ROOT_BOOKMARK_ID',
            index: 0,
            title: 'Bookmarks Bar',
            url: null,
            dateAdded: null,
            dateLastUsed: null,
            unmodifiable: false,
            children: [],
        },
        {
            id: 'SIDE_PANEL_OTHER_BOOKMARKS_ID',
            parentId: 'SIDE_PANEL_ROOT_BOOKMARK_ID',
            title: 'Other Bookmarks',
            index: 1,
            url: null,
            dateAdded: null,
            dateLastUsed: null,
            unmodifiable: false,
            children: [
                {
                    id: '3',
                    parentId: 'SIDE_PANEL_OTHER_BOOKMARKS_ID',
                    index: 0,
                    title: 'First child bookmark',
                    url: 'http://child/bookmark/1/',
                    dateAdded: 1,
                    dateLastUsed: null,
                    children: null,
                    unmodifiable: false,
                },
                {
                    id: '4',
                    parentId: 'SIDE_PANEL_OTHER_BOOKMARKS_ID',
                    index: 1,
                    title: 'Second child bookmark',
                    url: 'http://child/bookmark/2/',
                    dateAdded: 3,
                    dateLastUsed: null,
                    children: null,
                    unmodifiable: false,
                },
                {
                    id: '5',
                    parentId: 'SIDE_PANEL_OTHER_BOOKMARKS_ID',
                    index: 2,
                    title: 'Child folder',
                    url: null,
                    dateAdded: 2,
                    dateLastUsed: null,
                    unmodifiable: false,
                    children: [
                        {
                            id: '6',
                            parentId: '5',
                            index: 0,
                            title: 'Nested bookmark',
                            url: 'http://nested/bookmark/',
                            dateAdded: 4,
                            dateLastUsed: null,
                            unmodifiable: false,
                            children: null,
                        },
                    ],
                },
            ],
        },
    ];
}
export function getActiveList(bookmarksList) {
    const activeList = bookmarksList.shadowRoot.querySelector('.list-wrapper.active cr-lazy-list');
    assertTrue(!!activeList);
    return activeList;
}
export function getBookmarks(app) {
    return getBookmarksInList(app, 0).concat(getBookmarksInList(app, 1));
}
export function getBookmarksInList(app, listIndex) {
    const listEl = getActiveList(app.$.bookmarksList);
    const listItems = listEl.items;
    const items = listItems.map(item => item.bookmark);
    const elements = app.$.bookmarksList.shadowRoot.querySelectorAll(`#${listEl.id} power-bookmark-row`);
    const firstSecondaryIndex = Array.from(elements).findIndex(el => el.rowHeading ===
        loadTimeData.getString('secondaryFilterHeading'));
    if (listIndex === 0) {
        return firstSecondaryIndex > -1 ? items.slice(0, firstSecondaryIndex) :
            items;
    }
    else {
        return firstSecondaryIndex > -1 ? items.slice(firstSecondaryIndex) : [];
    }
}
export function getBookmarkWithId(app, id) {
    return getBookmarks(app).find(bookmark => bookmark.id === id);
}
export function getPowerBookmarksRowElement(element, id) {
    const listEl = getActiveList(element.$.bookmarksList);
    return element.$.bookmarksList.shadowRoot
        .querySelector(`#${listEl.id} #bookmark-${id}`);
}
export function getPowerBookmarksRowItemElement(element, id) {
    const row = getPowerBookmarksRowElement(element, id);
    if (!row) {
        return null;
    }
    return row.shadowRoot.querySelector('power-bookmark-row-item');
}
export async function initializeAppUi(bookmarksApi) {
    const element = document.createElement('power-bookmarks-app');
    const parentElement = document.createElement('div');
    parentElement.style.height = '500px';
    parentElement.appendChild(element);
    document.body.appendChild(parentElement);
    await bookmarksApi.whenCalled('getAllBookmarks');
    await microtasksFinished();
    return element;
}
