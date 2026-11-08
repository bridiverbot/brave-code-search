// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FilterDialogFooterElement } from 'chrome://updater/event_list/filter_dialog/filter_dialog_footer.js';
import { assertEquals, assertNotEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
suite('FilterDialogFooterElement', () => {
    let filterDialogFooter;
    setup(() => {
        filterDialogFooter = new FilterDialogFooterElement();
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        document.body.appendChild(filterDialogFooter);
    });
    test('renders correctly', () => {
        assertTrue(filterDialogFooter instanceof HTMLElement);
        assertEquals('FILTER-DIALOG-FOOTER', filterDialogFooter.tagName);
    });
    test('fires cancel-click event', async () => {
        await microtasksFinished();
        let capturedEvent = null;
        filterDialogFooter.addEventListener('cancel-click', (e) => {
            capturedEvent = e;
        });
        const cancelButton = filterDialogFooter.shadowRoot.querySelector('.cancel-button');
        cancelButton.click();
        await microtasksFinished();
        assertNotEquals(null, capturedEvent);
    });
    test('fires apply-click event', async () => {
        await microtasksFinished();
        let capturedEvent = null;
        filterDialogFooter.addEventListener('apply-click', (e) => {
            capturedEvent = e;
        });
        const applyButton = filterDialogFooter.shadowRoot.querySelector('.action-button');
        applyButton.click();
        await microtasksFinished();
        assertNotEquals(null, capturedEvent);
    });
});
