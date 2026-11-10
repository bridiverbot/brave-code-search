// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/composebox/file_carousel.js';
import 'chrome://contextual-tasks/strings.m.js';
import { ContextUploadStatus, InputType } from 'chrome://resources/cr_components/composebox/composebox_query.mojom-webui.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { eventToPromise, microtasksFinished } from 'chrome://webui-test/test_util.js';
import { createFile } from './composebox_test_utils.js';
suite('FileCarouselTest', function () {
    let fileCarousel;
    let resizeObserverCallback;
    let resizeObserverDisconnectCalled = false;
    setup(async () => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        resizeObserverDisconnectCalled = false;
        // Mock ResizeObserver
        window.ResizeObserver = class ResizeObserverMock {
            constructor(callback) {
                resizeObserverCallback = callback;
            }
            observe(_target, _options) { }
            unobserve(_target) { }
            disconnect() {
                resizeObserverDisconnectCalled = true;
            }
        };
        fileCarousel = document.createElement('cr-composebox-file-carousel');
        document.body.appendChild(fileCarousel);
        await microtasksFinished();
    });
    function getFileCarouselContainer() {
        return fileCarousel.shadowRoot.querySelector('.file-carousel-container');
    }
    test('renders files', async () => {
        const files = [
            createFile(1),
            createFile(2),
        ];
        fileCarousel.files = files;
        await microtasksFinished();
        const thumbnails = fileCarousel.shadowRoot.querySelectorAll('cr-composebox-file-thumbnail');
        assertEquals(2, thumbnails.length);
    });
    test('renders tab chip with title tooltip', async () => {
        const tabFile = {
            ...createFile(1),
            type: 'tab',
            url: 'https://example.com',
            name: 'Example Tab Title',
        };
        fileCarousel.files = [tabFile];
        await microtasksFinished();
        const thumbnail = fileCarousel.shadowRoot.querySelector('cr-composebox-file-thumbnail');
        assertTrue(!!thumbnail);
        const tabChip = thumbnail.shadowRoot.querySelector('#tabChip');
        assertTrue(!!tabChip);
        assertEquals('Example Tab Title', tabChip.getAttribute('title'));
    });
    test('getThumbnailElementByUuid returns correct element', async () => {
        const uuid1 = { high: 0n, low: 1n };
        const uuid2 = { high: 0n, low: 2n };
        const files = [
            {
                uuid: uuid1,
                name: 'file1.txt',
                dataUrl: null,
                objectUrl: null,
                type: 'text/plain',
                inputType: InputType.kLensFile,
                status: ContextUploadStatus.kUploadStarted,
                url: null,
                tabId: null,
                isDeletable: true,
                iconName: null,
                supportsUnimodal: true,
            },
            {
                uuid: uuid2,
                name: 'file2.txt',
                dataUrl: null,
                objectUrl: null,
                type: 'text/plain',
                inputType: InputType.kLensFile,
                status: ContextUploadStatus.kUploadStarted,
                url: null,
                tabId: null,
                isDeletable: true,
                iconName: null,
                supportsUnimodal: true,
            },
        ];
        fileCarousel.files = files;
        await microtasksFinished();
        const thumbnail1 = fileCarousel.getThumbnailElementByUuid(uuid1);
        assertTrue(!!thumbnail1);
        assertEquals(files[0], thumbnail1.file);
        const thumbnail2 = fileCarousel.getThumbnailElementByUuid(uuid2);
        assertTrue(!!thumbnail2);
        assertEquals(files[1], thumbnail2.file);
        const uuid3 = { high: 0n, low: 3n };
        const thumbnail3 = fileCarousel.getThumbnailElementByUuid(uuid3);
        assertEquals(null, thumbnail3);
    });
    test('fires carousel-resize event on resize', async () => {
        const eventPromise = eventToPromise('carousel-resize', fileCarousel);
        // Trigger the callback
        resizeObserverCallback([], window.ResizeObserver);
        // The callback inside file_carousel.ts is debounced (20ms).
        // So we wait.
        await new Promise(resolve => setTimeout(resolve, 30));
        const event = await eventPromise;
        assertTrue(!!event);
        assertEquals(0, event.detail.height);
    });
    test('elides www from tab chip url', async () => {
        const tabFile = {
            uuid: { high: 0n, low: 1n },
            name: 'Example Tab Title',
            dataUrl: null,
            objectUrl: null,
            type: 'tab',
            inputType: InputType.kLensFile,
            status: ContextUploadStatus.kUploadStarted,
            url: 'https://www.example.com/path',
            tabId: 1,
            isDeletable: true,
            iconName: null,
            supportsUnimodal: true,
        };
        fileCarousel.files = [tabFile];
        await microtasksFinished();
        const thumbnail = fileCarousel.shadowRoot.querySelector('cr-composebox-file-thumbnail');
        assertTrue(!!thumbnail);
        const urlDiv = thumbnail.shadowRoot.querySelector('.url');
        assertTrue(!!urlDiv);
        assertEquals('example.com/path', urlDiv.textContent.trim());
    });
    test('disconnects resize observer on disconnectedCallback', async () => {
        fileCarousel.remove();
        await microtasksFinished();
        assertTrue(resizeObserverDisconnectCalled);
    });
    test('toggles gradients based on scroll', async () => {
        fileCarousel.enableScrolling = true;
        fileCarousel.files = [createFile(1), createFile(2), createFile(3)];
        await microtasksFinished();
        const container = getFileCarouselContainer();
        Object.defineProperty(container, 'clientHeight', { value: 50 });
        Object.defineProperty(container, 'scrollHeight', { value: 100 });
        // Initial state: scrolled to top.
        Object.defineProperty(container, 'scrollTop', { value: 0, writable: true });
        container.dispatchEvent(new Event('scroll'));
        await microtasksFinished();
        assertTrue(fileCarousel.hasAttribute('gradient-top-hidden'));
        assertFalse(fileCarousel.hasAttribute('gradient-bottom-hidden'));
        // Scrolled to middle.
        container.scrollTop = 25;
        container.dispatchEvent(new Event('scroll'));
        await microtasksFinished();
        assertFalse(fileCarousel.hasAttribute('gradient-top-hidden'));
        assertFalse(fileCarousel.hasAttribute('gradient-bottom-hidden'));
        // Scrolled to bottom.
        container.scrollTop = 50;
        container.dispatchEvent(new Event('scroll'));
        await microtasksFinished();
        assertFalse(fileCarousel.hasAttribute('gradient-top-hidden'));
        assertTrue(fileCarousel.hasAttribute('gradient-bottom-hidden'));
    });
    test('hides gradients when no scrollbar', async () => {
        fileCarousel.enableScrolling = true;
        fileCarousel.files = [createFile(1)];
        await microtasksFinished();
        const container = getFileCarouselContainer();
        Object.defineProperty(container, 'clientHeight', { value: 100 });
        Object.defineProperty(container, 'scrollHeight', { value: 50 });
        container.dispatchEvent(new Event('scroll'));
        await microtasksFinished();
        assertTrue(fileCarousel.hasAttribute('gradient-top-hidden'));
        assertTrue(fileCarousel.hasAttribute('gradient-bottom-hidden'));
    });
    test('scrolls to bottom when files are added', async () => {
        fileCarousel.enableScrolling = true;
        fileCarousel.files = [createFile(1)];
        await microtasksFinished();
        const container = getFileCarouselContainer();
        Object.defineProperty(container, 'clientHeight', { value: 50 });
        Object.defineProperty(container, 'scrollHeight', { value: 100 });
        container.scrollTop = 0;
        let scrollToOptions;
        container.scrollTo = (options) => {
            if (typeof options === 'object') {
                scrollToOptions = options;
            }
        };
        fileCarousel.files = [createFile(1), createFile(2)];
        await microtasksFinished();
        assertTrue(!!scrollToOptions);
        assertEquals(100, scrollToOptions.top);
        assertEquals('smooth', scrollToOptions.behavior);
    });
    test('does not scroll to bottom when scrolling disabled', async () => {
        fileCarousel.enableScrolling = false;
        fileCarousel.files = [createFile(1)];
        await microtasksFinished();
        const container = getFileCarouselContainer();
        let scrollToCalled = false;
        container.scrollTo = () => {
            scrollToCalled = true;
        };
        fileCarousel.files = [createFile(1), createFile(2)];
        await microtasksFinished();
        assertFalse(scrollToCalled);
    });
});
