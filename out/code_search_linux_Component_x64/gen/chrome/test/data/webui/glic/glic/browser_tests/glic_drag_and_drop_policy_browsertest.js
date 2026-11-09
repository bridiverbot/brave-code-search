// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// cc_file_path:
// chrome/browser/glic/host/glic_drag_and_drop_policy_browsertest.cc
import { InvocationSource } from '/glic/glic_api/glic_api.js';
import { ApiTestFixtureBase, assertEquals, assertFalse, testMain, waitFor } from './browser_test_base.js';
class GlicDragAndDropPolicyTest extends ApiTestFixtureBase {
    async setUpTest() {
        await this.client.waitForFirstOpen();
    }
    setupDragListeners() {
        const dragEnter = Promise.withResolvers();
        const dragOver = Promise.withResolvers();
        const nativeDrop = Promise.withResolvers();
        const state = { wasDropped: false, wasInvoked: false };
        window.addEventListener('dragenter', () => {
            dragEnter.resolve();
        }, { once: true });
        window.addEventListener('dragover', (e) => {
            e.preventDefault();
            dragOver.resolve();
        });
        window.addEventListener('drop', (e) => {
            e.preventDefault();
            state.wasDropped = true;
            const files = e.dataTransfer?.files;
            nativeDrop.resolve(files && files.length > 0 ? files[0].name : '');
        }, { once: true });
        return { dragEnter, dragOver, nativeDrop, state };
    }
    async waitForDragArrival(dragEnter, dragOver) {
        await this.advanceToNextStep();
        await waitFor(dragEnter, 40000, 'DragEnter never arrived');
        await waitFor(dragOver, 40000, 'DragOver never arrived');
    }
    async testDragAndDropDlp() {
        const { dragEnter, dragOver, nativeDrop } = this.setupDragListeners();
        await this.waitForDragArrival(dragEnter.promise, dragOver.promise);
        await this.advanceToNextStep();
        const droppedData = await waitFor(nativeDrop.promise, 40000, 'Drop never arrived');
        assertEquals('test.txt', droppedData);
    }
    async testDragAndDropDlpBlocked() {
        const { dragEnter, dragOver, state } = this.setupDragListeners();
        await this.waitForDragArrival(dragEnter.promise, dragOver.promise);
        await this.advanceToNextStep();
        // Wait for C++ to verify the dialog.
        await this.advanceToNextStep();
        assertFalse(state.wasDropped, 'Drop occurred when it should have been blocked');
    }
    async testWebToGlicDragDlpBlocked() {
        const { dragEnter, dragOver, state } = this.setupDragListeners();
        this.client.invokeData.subscribe((options) => {
            if (!options) {
                return;
            }
            if (options.invocationSource === InvocationSource.WEB_DRAG_DROP) {
                state.wasInvoked = true;
            }
        });
        await this.waitForDragArrival(dragEnter.promise, dragOver.promise);
        // Wait for C++ to verify Glic invocation block.
        await this.advanceToNextStep();
        assertFalse(state.wasInvoked, 'Invoke occurred when it should have been blocked');
    }
}
testMain([GlicDragAndDropPolicyTest]);
