// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { KeywordType, PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { ColorType, IconType, SecondaryTextPlacement, SuggestStyle } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
export function createAutocompleteMatch(modifiers = {}) {
    const base = {
        isHidden: false,
        a11yLabel: '',
        actions: [],
        allowedToBeDefaultMatch: false,
        isSearchType: false,
        isEnterpriseSearchAggregatorPeopleType: false,
        descriptionIconPath: '',
        showSecondaryTextOnlyOnSelection: false,
        supportsDeletion: false,
        suggestionGroupId: -1,
        destinationUrl: '',
        inlineAutocompletion: '',
        fillIntoEdit: '',
        iconPath: '',
        iconUrl: '',
        removeButtonA11yLabel: '',
        type: '',
        tailSuggestCommonPrefix: null,
        keywordModel: null,
        suggestTemplate: createSuggestTemplateInfo(),
        secondaryTextIsUrl: false,
        urlEmphasis: null,
    };
    return Object.assign(base, modifiers);
}
export function createFormattedString(text = '', fragments = []) {
    return { text, fragments, a11yText: null };
}
export function createSuggestTemplateInfo(modifiers = {}) {
    const base = {
        primaryText: createFormattedString(),
        secondaryText: null,
        secondaryTextPlacement: SecondaryTextPlacement.kUnspecified,
        image: null,
        style: SuggestStyle.kUnspecified,
        typeIcon: IconType.kIconTypeUnspecified,
        fuseboxAction: null,
    };
    return Object.assign(base, modifiers);
}
export function createAutocompleteResultForTesting(modifiers = {}) {
    const base = {
        queryId: 0,
        input: '',
        matches: [],
        suggestionGroupsMap: {},
        smartComposeInlineHint: null,
        showAimActivityLink: false,
        sequenceId: 0,
    };
    return Object.assign(base, modifiers);
}
export function createSearchMatchForTesting(modifiers = {}) {
    const hintTextFragment = {
        startIndex: 0,
        color: ColorType.kSuggestHintText,
        isBolded: false,
    };
    const base = createAutocompleteMatch({
        isSearchType: true,
        destinationUrl: 'https://www.google.com/search?q=hello+world',
        fillIntoEdit: 'hello world',
        type: 'search-what-you-typed',
        suggestTemplate: createSuggestTemplateInfo({
            primaryText: createFormattedString('hello world'),
            secondaryText: createFormattedString('Google search', [hintTextFragment]),
        }),
    });
    return Object.assign(base, modifiers);
}
export function createMatchKeywordModelForTesting(modifiers = {}) {
    const base = {
        type: KeywordType.kChip,
        chipHint: '',
        chipA11y: '',
        placeholder: '',
        keyword: '',
    };
    return Object.assign(base, modifiers);
}
export function createInputKeywordModelForTesting(modifiers = {}) {
    const base = {
        type: KeywordType.kChip,
        keyword: '',
        displayText: '',
        iconPath: '',
        placeholder: '',
    };
    return Object.assign(base, modifiers);
}
export function createActionForTesting(modifiers = {}) {
    const base = {
        hint: '',
        suggestionContents: '',
        iconPath: '',
        a11yLabel: '',
    };
    return Object.assign(base, modifiers);
}
export class SearchboxBrowserProxy {
    static getInstance() {
        return instance || (instance = new SearchboxBrowserProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
    handler;
    callbackRouter;
    constructor() {
        const handler = new PageHandlerRemote();
        this.handler = handler;
        this.callbackRouter = new PageCallbackRouter();
        PageHandlerFactory.getRemote().createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
    }
}
let instance = null;
