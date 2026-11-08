import type { AutocompleteMatch, InputKeywordModel, OmniboxPopupSelection } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
/**
 * Loosely based on `metrics::OmniboxEventProto::KeywordModeEntryMethod` in
 * third_party/metrics_proto/omnibox_event.proto, but not 1:1.
 */
export declare enum KeywordModeEntryMethod {
    NONE = 0,
    TAB = 1,
    SPACE_AT_END = 2,
    QUESTION_MARK = 3,
    KEYBOARD_SHORTCUT = 4,
    CLICK = 5,
    SPACE_IN_MIDDLE = 6
}
export interface KeywordClearedEvent {
    restoredText: string;
    cursorPosition: number;
}
export interface InputSelectionState {
    value: string;
    selectionStart: number | null;
    selectionEnd: number | null;
}
export interface KeywordModeManagerDelegate {
    onKeywordModelChanged(): void;
    onKeywordCleared(event: KeywordClearedEvent): void;
    onKeywordEntered(): void;
}
/**
 * Manages keyword mode state, entry methods, and text formatting algorithms for
 * the WebUI searchbox.
 */
export declare class KeywordModeManager {
    keywordSpaceTriggeringEnabled: boolean;
    private availableKeywordModels_;
    private defaultSearchEngineKeyword_;
    private inputKeywordModel_;
    private entryMethod_;
    private delegate_;
    constructor(delegate: KeywordModeManagerDelegate);
    get entryMethod(): KeywordModeEntryMethod;
    get defaultSearchEngineKeyword(): string;
    set defaultSearchEngineKeyword(keyword: string);
    get availableKeywordModels(): InputKeywordModel[];
    set availableKeywordModels(models: InputKeywordModel[]);
    get inputKeywordModel(): InputKeywordModel | null;
    set inputKeywordModel(model: InputKeywordModel | null);
    get isInKeywordMode(): boolean;
    get activeKeyword(): string;
    /**
     * Enters keyword mode with the specified keyword, displayText hint, and entry
     * method.
     */
    enter(keyword: string, displayText: string, entryMethod: KeywordModeEntryMethod, placeholder?: string): void;
    /**
     * Enters keyword mode for the default search engine if available.
     * Returns true if keyword mode was entered.
     */
    enterDefaultSearchEngineKeywordMode(entryMethod: KeywordModeEntryMethod): boolean;
    /**
     * Exits keyword mode, resetting the keyword model and entry state.
     */
    exit(): void;
    /**
     * Clears keyword mode, restoring the text with appropriate prefix based on
     * entry method, and notifies delegate.
     * Returns true if keyword mode was cleared.
     */
    clearKeyword(currentText: string): boolean;
    /**
     * Handles Backspace when cursor is at index 0 in keyword mode, exiting
     * keyword mode and notifying the delegate of the restored text and cursor.
     * Returns true if Backspace was handled.
     */
    handleBackspace(inputState: InputSelectionState): boolean;
    /**
     * Handles clicking a keyword chip on an autocomplete match, entering keyword
     * mode and notifying the delegate.
     */
    handleKeywordClick(match: AutocompleteMatch): void;
    /**
     * Evaluates whether pressing Tab on the selected match triggers keyword mode.
     * Only default matches (matchIndex === 0 and allowedToBeDefaultMatch) can
     * accept keyword mode via Tab. If triggered, enters keyword mode, notifies
     * the delegate, and returns true.
     */
    acceptTab(match: AutocompleteMatch | null, matchIndex: number): boolean;
    /**
     * Evaluates whether the updated input text and cursor position trigger
     * keyword mode (e.g. space after instant keyword, or leading '?').
     * If triggered, enters keyword mode and returns true.
     */
    acceptInputTrigger(input: string, cursorPosition: number | null, event: Event | null): boolean;
    /**
     * Returns true if the event represents one of the specified characters being
     * typed (not pasted or backspaced to).
     */
    private isTypedCharacterEvent_;
    private isSpaceEvent_;
    private acceptSpaceAtEnd_;
    private acceptSpaceInMiddle_;
    private acceptQuestionMark_;
    /**
     * Formats a match's fillIntoEdit string when in keyword mode (stripping the
     * redundant keyword prefix), or restores the original input text for default
     * matches (avoiding prepending URL schemes like https://).
     */
    formatMatchFillIntoEdit(match: AutocompleteMatch, matchIndex: number, lastQueriedInput?: string | null): string;
    /**
     * Updates or preserves the keyword model when the selected autocomplete match
     * or popup selection changes.
     */
    onSelectedMatchChanged(selectedMatch: AutocompleteMatch | null, selection: OmniboxPopupSelection): void;
}
