// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createAutocompleteMatch, createFormattedString, createSuggestTemplateInfo as createSuggestTemplateInfoBase } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { ColorType } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
import { ToolMode as ComposeboxToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { assertEquals } from '//webui-test/chai_assert.js';
/**
 * Asserts the computed style value for an element.
 * @param name The name of the style to assert.
 * @param expected The expected style value.
 */
export function assertStyle(element, name, expected) {
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertEquals(expected, actual);
}
/**
 * Waits for the specified attribute of a given element to change.
 * @param attributeName The attribute to observe.
 * @param initialValue The value to compare against to detect the attribute
 *     change.
 */
export function waitForAttributeChange(element, attributeName, initialValue) {
    return new Promise((resolve) => {
        // Create a MutationObserver to watch for attribute changes.
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' &&
                    mutation.attributeName === attributeName) {
                    // Check if the value actually changed.
                    const newValue = element[attributeName];
                    if (newValue !== initialValue) {
                        observer.disconnect();
                        resolve(newValue);
                        return;
                    }
                }
            }
        });
        // Configure the observer to watch for attribute changes.
        observer.observe(element, {
            attributes: true,
            attributeFilter: [attributeName],
        });
    });
}
// TODO(crbug.com/452983498): This class is mirrored in composebox_test_utils.ts
// to allow composebox tests to build on Android without depending on the
// Desktop New Tab Page bundle.
// LINT.IfChange
export class MockInputState {
    allowedTools = [];
    disabledTools = [];
    activeTool = 0;
    toolConfigs = [
        {
            tool: ComposeboxToolMode.kDeepSearch,
            hintText: 'Research anything',
            menuLabel: '',
            chipLabel: '',
            disableActiveModelSelection: false,
            aimUrlParams: [],
            menuTooltip: '',
            icon: 0,
        },
        {
            tool: ComposeboxToolMode.kImageGen,
            hintText: 'Describe your image',
            menuLabel: '',
            chipLabel: '',
            disableActiveModelSelection: false,
            aimUrlParams: [],
            menuTooltip: '',
            icon: 0,
        },
        {
            tool: ComposeboxToolMode.kCanvas,
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
// LINT.ThenChange(//chrome/test/data/webui/cr_components/composebox/composebox_test_utils.ts)
export function createClipboardEvent(name) {
    return new ClipboardEvent(name, { cancelable: true, clipboardData: new DataTransfer() });
}
/**
 * Like createSuggestTemplateInfo() in searchbox_browser_proxy.ts, but plain
 * string text becomes an unstyled FormattedString.
 */
export function createSuggestTemplateInfo(modifiers = {}) {
    const { primaryText = '', secondaryText = null, ...otherModifiers } = modifiers;
    return createSuggestTemplateInfoBase({
        ...otherModifiers,
        primaryText: toFormattedString(primaryText),
        secondaryText: secondaryText === null ? null :
            toFormattedString(secondaryText),
    });
}
function toFormattedString(text) {
    return typeof text === 'string' ? createFormattedString(text) : text;
}
export function createFormattedStringFragment(modifiers = {}) {
    return {
        startIndex: 0,
        color: ColorType.kUnknown,
        isBolded: false,
        ...modifiers,
    };
}
export function createUrlMatch(modifiers = {}) {
    return createAutocompleteMatch({
        destinationUrl: 'https://helloworld.com/',
        fillIntoEdit: 'https://helloworld.com',
        type: 'url-what-you-typed',
        suggestTemplate: createSuggestTemplateInfo({
            primaryText: createFormattedString('helloworld.com', [createFormattedStringFragment({ color: ColorType.kSuggestActionHigh })]),
        }),
        ...modifiers,
    });
}
export function assertIconMaskImageUrl(iconElement, url) {
    assertStyle(iconElement.$.icon, '-webkit-mask-image', `url("${new URL(url, document.baseURI).href}")`);
    assertStyle(iconElement.$.icon, 'background-image', 'none');
}
export function createKeyboardEvent(key, modifiers) {
    return new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        composed: true,
        key,
        ...modifiers,
    });
}
