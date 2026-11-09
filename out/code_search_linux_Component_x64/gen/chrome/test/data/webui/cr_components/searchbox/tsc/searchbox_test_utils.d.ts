import type { SearchboxIconElement } from '//resources/cr_components/searchbox/searchbox_icon.js';
import type { AutocompleteMatch } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { FormattedString, FormattedStringFragment, SuggestTemplateInfo } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
/**
 * Asserts the computed style value for an element.
 * @param name The name of the style to assert.
 * @param expected The expected style value.
 */
export declare function assertStyle(element: Element, name: string, expected: string): void;
/**
 * Waits for the specified attribute of a given element to change.
 * @param attributeName The attribute to observe.
 * @param initialValue The value to compare against to detect the attribute
 *     change.
 */
export declare function waitForAttributeChange(element: HTMLElement, attributeName: string, initialValue: string): Promise<unknown>;
export declare class MockInputState implements InputState {
    allowedTools: number[];
    disabledTools: number[];
    activeTool: number;
    toolConfigs: any[];
    toolsSectionConfig: any | null;
    allowedModels: number[];
    disabledModels: number[];
    activeModel: number;
    modelConfigs: any[];
    modelSectionConfig: any | null;
    allowedInputTypes: number[];
    disabledInputTypes: number[];
    inputTypeConfigs: any[];
    maxInputsByType: {
        [key: number]: number;
    };
    maxTotalInputs: number;
    isCanvasQuerySubmitted: boolean;
    willFulfillInAim: boolean;
    hintText: string;
    constructor(overrides?: Partial<InputState>);
}
export declare function createClipboardEvent(name: string): ClipboardEvent;
/**
 * Like `Partial<SuggestTemplateInfo>`, but the primary and secondary text can
 * also be plain strings.
 */
export interface SuggestTemplateInfoModifiers extends Omit<Partial<SuggestTemplateInfo>, 'primaryText' | 'secondaryText'> {
    primaryText?: string | FormattedString;
    secondaryText?: string | FormattedString | null;
}
/**
 * Like createSuggestTemplateInfo() in searchbox_browser_proxy.ts, but plain
 * string text becomes an unstyled FormattedString.
 */
export declare function createSuggestTemplateInfo(modifiers?: SuggestTemplateInfoModifiers): SuggestTemplateInfo;
export declare function createFormattedStringFragment(modifiers?: Partial<FormattedStringFragment>): FormattedStringFragment;
export declare function createUrlMatch(modifiers?: Partial<AutocompleteMatch>): AutocompleteMatch;
export declare function assertIconMaskImageUrl(iconElement: SearchboxIconElement, url: string): void;
export declare function createKeyboardEvent(key: string, modifiers?: Partial<KeyboardEventInit>): KeyboardEvent;
