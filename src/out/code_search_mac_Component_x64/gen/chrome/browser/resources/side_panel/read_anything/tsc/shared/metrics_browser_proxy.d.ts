export declare enum UmaName {
    HEADING_TO_PARAGRAPH_RATIO = "Accessibility.ReadAnything.DistilledPageStructure.HeadingToParagraphRatio",
    HIGHLIGHT_GRANULARITY = "Accessibility.ReadAnything.ReadAloud.HighlightGranularity",
    LANGUAGE = "Accessibility.ReadAnything.ReadAloud.Language",
    LINE_FOCUS_TOGGLE = "Accessibility.ReadAnything.LineFocusKeyboardToggle",
    NEW_PAGE = "Accessibility.ReadAnything.NewPage",
    NUMBER_PARAGRAPHS = "Accessibility.ReadAnything.DistilledPageStructure.NumberParagraphs",
    SPEECH_ERROR = "Accessibility.ReadAnything.SpeechError",
    SPEECH_PLAYBACK = "Accessibility.ReadAnything.SpeechPlaybackSession",
    SPEECH_PLAYBACK_PER_PAGE = "Accessibility.ReadAnything.SpeechPlaybackSession.PerPage",
    PDF_HEADING_TO_PARAGRAPH_RATIO = "Accessibility.ReadAnything.Pdf.HeadingToParagraphRatio",
    PDF_NUMBER_PARAGRAPHS = "Accessibility.ReadAnything.Pdf.NumberParagraphs",
    SPEECH_SETTINGS_CHANGE = "Accessibility.ReadAnything.ReadAloud.SettingsChange",
    SETTINGS_ACTION = "Accessibility.ReadAnything.SettingsAction",
    TEXT_SETTINGS_CHANGE = "Accessibility.ReadAnything.SettingsChange",
    TOTAL_HEADER_COUNT = "Accessibility.ReadAnything.DistilledPageStructure.TotalHeaderCount",
    TOP_TWO_HEADERS_COUNT = "Accessibility.ReadAnything.DistilledPageStructure.TopTwoHeadersCount",
    TOP_TWO_HEADERS_HAVE_MINIMUM_TWO_ITEMS = "Accessibility.ReadAnything.DistilledPageStructure.TopTwoHeadersHaveMinimumTwoItems",
    TOP_TWO_HEADING_RATIO = "Accessibility.ReadAnything.DistilledPageStructure.TopTwoHeadingRatio",
    UNIQUE_HEADER_TAGS = "Accessibility.ReadAnything.DistilledPageStructure.UniqueHeaderTags",
    VOICE = "Accessibility.ReadAnything.ReadAloud.Voice",
    VOICE_LANGUAGE_CHANGE = "Accessibility.ReadAnything.ReadAloud.VoiceLanguageChange",
    VOICE_SPEED = "Accessibility.ReadAnything.ReadAloud.VoiceSpeed",
    MATHML_DISTILLATION_STATUS = "Accessibility.ReadAnything.MathML.DistillationStatus",
    MATHML_PRESENT_ON_PAGE = "Accessibility.ReadAnything.MathML.PresentOnPage"
}
export declare enum ReadAnythingMathMlDistillationStatus {
    ONLY_MATHML = 0,
    MIXED_MATHML_AND_FALLBACK = 1,
    ONLY_FALLBACK = 2,
    NOT_DISTILLED_READABILITY = 3,
    NOT_DISTILLED_SCREEN2X = 4,
    COUNT = 5
}
export declare enum ReadAnythingNewPage {
    NEW_PAGE = 0,
    SPEECH_PLAYED_ON_NEW_PAGE = 1,
    COUNT = 2
}
export declare enum ReadAnythingVoiceType {
    NATURAL = 0,
    ESPEAK = 1,
    CHROMEOS = 2,
    SYSTEM = 3,
    COUNT = 4
}
export declare enum ReadAnythingSettingsChange {
    FONT_CHANGE = 0,
    FONT_SIZE_CHANGE = 1,
    THEME_CHANGE = 2,
    LINE_HEIGHT_CHANGE = 3,
    LETTER_SPACING_CHANGE = 4,
    LINKS_ENABLED_CHANGE = 5,
    IMAGES_ENABLED_CHANGE = 6,
    LINE_FOCUS_STYLE_CHANGE = 8,
    LINE_FOCUS_MOVEMENT_CHANGE = 9,
    LINE_FOCUS_TOGGLE = 10,
    COUNT = 11
}
export declare enum ReadAnythingSettingsAction {
    TRANSLATE_ACTION = 0,
    SEND_FEEDBACK_ACTION = 1,
    COUNT = 2
}
export declare enum ReadAloudHighlightGranularity {
    HIGHLIGHT_AUTO = 0,
    HIGHLIGHT_OFF = 1,
    HIGHLIGHT_WORD = 2,
    HIGHLIGHT_PHRASE = 3,
    HIGHLIGHT_SENTENCE = 4,
    COUNT = 5
}
export declare enum ReadAloudSettingsChange {
    VOICE_SPEED_CHANGE = 0,
    VOICE_NAME_CHANGE = 1,
    HIGHLIGHT_CHANGE = 2,
    LANGUAGE_TOGGLE = 3,
    ACCENT_CHANGE = 4,
    COUNT = 5
}
export declare enum ReadAnythingSpeechError {
    TEXT_TOO_LONG = 0,
    LANGUAGE_UNAVAILABLE = 1,
    VOICE_UNAVAILABE = 2,
    INVALID_ARGUMENT = 3,
    SYNTHESIS_FAILED = 4,
    SYNTHESIS_UNVAILABLE = 5,
    AUDIO_BUSY = 6,
    AUDIO_HARDWARE = 7,
    NETWORK = 8,
    TIMEOUT_ENGINE_STALLED = 9,
    TIMEOUT_STALLED_AFTER_ENGINE_RECOVERY = 10,
    COUNT = 11
}
export interface MetricsBrowserProxy {
    incrementMetricCount(action: string): void;
    recordEmptyState(): void;
    recordHighlightGranularity(highlight: number): void;
    recordLanguage(lang: string): void;
    recordLineFocusSession(): void;
    recordLineFocusToggled(enabled: boolean): void;
    recordNewPage(): void;
    recordNewPageWithSpeech(): void;
    recordSpeechError(error: ReadAnythingSpeechError): void;
    recordSpeechPlaybackLength(umaName: string, time: number): void;
    recordSpeechPlaybackLengthLegacy(time: number): void;
    recordSpeechSettingsChange(settingsChange: ReadAloudSettingsChange): void;
    recordSpeechStopSource(source: number): void;
    recordSettingsAction(settingsAction: ReadAnythingSettingsAction): void;
    recordTextSettingsChange(settingsChange: ReadAnythingSettingsChange): void;
    recordTime(umaName: string, time: number): void;
    recordVoiceSpeed(index: number): void;
    recordVoiceType(voiceType: ReadAnythingVoiceType): void;
    recordVoiceLanguageChange(): void;
    recordExtensionState(): void;
    recordCount(umaName: string, count: number): void;
    recordBoolean(umaName: string, value: boolean): void;
    recordMathMlDistillationStatus(status: ReadAnythingMathMlDistillationStatus): void;
    updateWordsSeen(wordsSeen: number): void;
    updateWordsHeard(wordsHeard: number): void;
    startLineFocusSession(): void;
    incrementLineFocusKeyboardLines(): void;
    incrementLineFocusSpeechLines(): void;
    addLineFocusScrollDistance(distance: number): void;
    addLineFocusMouseDistance(distance: number): void;
}
export declare class MetricsBrowserProxyImpl implements MetricsBrowserProxy {
    incrementMetricCount(umaName: string): void;
    recordEmptyState(): void;
    recordLineFocusSession(): void;
    startLineFocusSession(): void;
    incrementLineFocusKeyboardLines(): void;
    incrementLineFocusSpeechLines(): void;
    addLineFocusScrollDistance(distance: number): void;
    addLineFocusMouseDistance(distance: number): void;
    recordLineFocusToggled(enabled: boolean): void;
    recordSpeechStopSource(source: number): void;
    recordSpeechError(error: ReadAnythingSpeechError): void;
    recordTime(umaName: string, time: number): void;
    recordNewPage(): void;
    recordNewPageWithSpeech(): void;
    recordHighlightGranularity(highlight: ReadAloudHighlightGranularity): void;
    recordVoiceType(voiceType: ReadAnythingVoiceType): void;
    recordVoiceLanguageChange(): void;
    recordLanguage(lang: string): void;
    recordSettingsAction(settingsAction: ReadAnythingSettingsAction): void;
    recordTextSettingsChange(settingsChange: ReadAnythingSettingsChange): void;
    recordSpeechSettingsChange(settingsChange: ReadAloudSettingsChange): void;
    recordVoiceSpeed(index: number): void;
    recordSpeechPlaybackLength(umaName: string, time: number): void;
    recordSpeechPlaybackLengthLegacy(time: number): void;
    recordExtensionState(): void;
    recordCount(umaName: string, count: number): void;
    recordBoolean(umaName: string, value: boolean): void;
    recordMathMlDistillationStatus(status: ReadAnythingMathMlDistillationStatus): void;
    updateWordsSeen(wordsSeen: number): void;
    updateWordsHeard(wordsHeard: number): void;
    static getInstance(): MetricsBrowserProxy;
    static setInstance(obj: MetricsBrowserProxy): void;
}
