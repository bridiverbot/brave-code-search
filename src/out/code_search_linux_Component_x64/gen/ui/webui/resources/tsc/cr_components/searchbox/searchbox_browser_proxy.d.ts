/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for bidirectional communication between the
 * <cr-searchbox> or the <cr-searchbox-dropdown> and the browser.
 *
 * Testing helpers are located here to prevent duplication across various
 * WebUI test suites (e.g., New Tab Page, Omnibox Popup, Lens) that share
 * these Mojo-based searchbox types.
 */
import type { Action, AutocompleteMatch, AutocompleteResult, InputKeywordModel, MatchKeywordModel, PageHandlerInterface } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { PageCallbackRouter } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { FormattedString, FormattedStringFragment, SuggestTemplateInfo } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
export declare function createAutocompleteMatch(modifiers?: Partial<AutocompleteMatch>): AutocompleteMatch;
export declare function createFormattedString(text?: string, fragments?: FormattedStringFragment[]): FormattedString;
export declare function createSuggestTemplateInfo(modifiers?: Partial<SuggestTemplateInfo>): SuggestTemplateInfo;
export declare function createAutocompleteResultForTesting(modifiers?: Partial<AutocompleteResult>): AutocompleteResult;
export declare function createSearchMatchForTesting(modifiers?: Partial<AutocompleteMatch>): AutocompleteMatch;
export declare function createMatchKeywordModelForTesting(modifiers?: Partial<MatchKeywordModel>): MatchKeywordModel;
export declare function createInputKeywordModelForTesting(modifiers?: Partial<InputKeywordModel>): InputKeywordModel;
export declare function createActionForTesting(modifiers?: Partial<Action>): Action;
export declare class SearchboxBrowserProxy {
    static getInstance(): SearchboxBrowserProxy;
    static setInstance(newInstance: SearchboxBrowserProxy): void;
    handler: PageHandlerInterface;
    callbackRouter: PageCallbackRouter;
    constructor();
}
