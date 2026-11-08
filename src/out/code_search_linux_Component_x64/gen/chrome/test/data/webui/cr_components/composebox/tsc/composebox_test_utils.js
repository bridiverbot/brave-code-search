// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ContextUploadStatus, InputType, ModelMode, ToolMode } from 'chrome://resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
// TODO(crbug.com/452983498): This is a copy of MockInputState from
// searchbox_test_utils.ts to decouple composebox test builds from searchbox
// and the Desktop New Tab Page bundle, which cannot be built on Android yet.
// LINT.IfChange
export class MockInputState {
    allowedTools = [];
    disabledTools = [];
    activeTool = 0;
    toolConfigs = [
        {
            tool: ToolMode.kDeepSearch,
            hintText: 'Research anything',
            menuLabel: '',
            chipLabel: '',
            disableActiveModelSelection: false,
            aimUrlParams: [],
            menuTooltip: '',
            icon: 0,
        },
        {
            tool: ToolMode.kImageGen,
            hintText: 'Describe your image',
            menuLabel: '',
            chipLabel: '',
            disableActiveModelSelection: false,
            aimUrlParams: [],
            menuTooltip: '',
            icon: 0,
        },
        {
            tool: ToolMode.kCanvas,
            hintText: 'Create anything',
            menuLabel: '',
            chipLabel: '',
            disableActiveModelSelection: false,
            aimUrlParams: [],
            menuTooltip: '',
            icon: 0,
        },
    ];
    toolsSectionConfig = null;
    allowedModels = [];
    disabledModels = [];
    activeModel = 0;
    modelConfigs = [];
    modelSectionConfig = null;
    allowedInputTypes = [];
    disabledInputTypes = [];
    inputTypeConfigs = [];
    maxInputsByType = {};
    maxTotalInputs = 0;
    isCanvasQuerySubmitted = false;
    willFulfillInAim = true;
    hintText = '';
    constructor(overrides) {
        Object.assign(this, overrides);
    }
}
// LINT.ThenChange(//chrome/test/data/webui/cr_components/searchbox/searchbox_test_utils.ts)
const THOUSANDTHS = 0.001;
/**
 * Asserts the computed style value for an element.
 * @param name The name of the style to assert.
 * @param expected The expected style value.
 */
export function assertStyle(element, name, expected) {
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertEquals(expected, actual);
}
export class MockSpeechRecognition {
    voiceSearchInProgress = false;
    startCount = 0;
    onresult = null;
    onend = null;
    onerror = null;
    onaudiostart = null;
    onspeechstart = null;
    onnomatch = null;
    interimResults = true;
    continuous = false;
    constructor() {
        mockSpeechRecognition = this;
    }
    start() {
        this.voiceSearchInProgress = true;
        this.startCount++;
    }
    stop() {
        this.voiceSearchInProgress = false;
    }
    abort() {
        this.voiceSearchInProgress = false;
        this.onend();
    }
}
export let mockSpeechRecognition;
export function installMock(clazz, installer) {
    installer = installer ||
        clazz.setInstance;
    const mock = TestMock.fromClass(clazz);
    if (clazz.name === 'WindowProxy') {
        const windowProxy = mock;
        windowProxy.setResultMapperFor('createSpeechRecognition', () => {
            return new MockSpeechRecognition();
        });
        windowProxy.setResultMapperFor('matchMedia', () => ({
            matches: false,
            addListener() { },
            addEventListener() { },
            removeListener() { },
            removeEventListener() { },
        }));
    }
    installer(mock);
    return mock;
}
export function assertAlmostEquals(expected, actual, delta = THOUSANDTHS) {
    const diff = Math.abs(actual - expected);
    assertTrue(diff <= delta, `Mismatch in almostEquals. Expected ${expected} with delta: ${delta}. Got ${actual}\
       with diff ${diff}.`);
}
export function createValidInputState() {
    return new MockInputState({
        allowedModels: [ModelMode.kGeminiPro],
        allowedTools: [ToolMode.kDeepSearch],
        allowedInputTypes: [InputType.kBrowserTab],
        activeModel: ModelMode.kUnspecified,
        activeTool: ToolMode.kUnspecified,
        toolConfigs: [
            {
                tool: ToolMode.kDeepSearch,
                menuLabel: 'Deep Search',
                chipLabel: 'Deep Search',
                hintText: 'Deep Search hint',
                disableActiveModelSelection: false,
                aimUrlParams: [],
                menuTooltip: '',
                icon: 0,
            },
        ],
        toolsSectionConfig: { header: '' },
        modelConfigs: [
            {
                model: ModelMode.kGeminiPro,
                menuLabel: 'Gemini Pro',
                hintText: 'Gemini Pro hint',
                aimUrlParams: [],
                menuTooltip: '',
                icon: 144,
            },
        ],
        modelSectionConfig: {
            header: 'Models',
        },
    });
}
export function disableTransitionsRecursively(root) {
    if (!root) {
        return;
    }
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current instanceof HTMLElement) {
            current.style.transition = 'none';
            current.style.animation = 'none';
            current.style.animationDuration = '0s';
            current.style.transitionDuration = '0s';
            for (let i = 0; i < current.children.length; i++) {
                queue.push(current.children[i]);
            }
            if (current.shadowRoot) {
                queue.push(current.shadowRoot);
            }
        }
        else if (current instanceof ShadowRoot) {
            const style = document.createElement('style');
            style.textContent = `
        * {
          transition: none !important;
          transition-duration: 0s !important;
          animation: none !important;
          animation-duration: 0s !important;
        }
      `;
            current.appendChild(style);
            for (let i = 0; i < current.children.length; i++) {
                queue.push(current.children[i]);
            }
        }
    }
}
export function createFile(index, override = {}) {
    return Object.assign({
        name: `file${index}.txt`,
        type: 'text/plain',
        inputType: InputType.kLensFile,
        objectUrl: null,
        dataUrl: null,
        uuid: { high: 0n, low: BigInt(index) },
        status: ContextUploadStatus.kUploadSuccessful,
        url: null,
        tabId: null,
        isDeletable: true,
        iconName: null,
        supportsUnimodal: true,
    }, override);
}
export function simulateUserTextInput(inputElement, value) {
    inputElement.input = value;
    inputElement.fire('input-input');
    return microtasksFinished();
}
export function setSelectionOffset(input, offset) {
    if (input instanceof HTMLTextAreaElement) {
        input.setSelectionRange(offset, offset);
        return;
    }
    const range = document.createRange();
    const sel = window.getSelection();
    if (sel) {
        const textNode = input.childNodes[0];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            range.setStart(textNode, offset);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
