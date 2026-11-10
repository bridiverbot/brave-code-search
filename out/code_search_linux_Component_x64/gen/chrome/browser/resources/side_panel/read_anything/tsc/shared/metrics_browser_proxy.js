// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var UmaName;
(function (UmaName) {
    UmaName["HEADING_TO_PARAGRAPH_RATIO"] = "Accessibility.ReadAnything.DistilledPageStructure.HeadingToParagraphRatio";
    UmaName["HIGHLIGHT_GRANULARITY"] = "Accessibility.ReadAnything.ReadAloud.HighlightGranularity";
    UmaName["LANGUAGE"] = "Accessibility.ReadAnything.ReadAloud.Language";
    UmaName["LINE_FOCUS_TOGGLE"] = "Accessibility.ReadAnything.LineFocusKeyboardToggle";
    UmaName["NEW_PAGE"] = "Accessibility.ReadAnything.NewPage";
    UmaName["NUMBER_PARAGRAPHS"] = "Accessibility.ReadAnything.DistilledPageStructure.NumberParagraphs";
    UmaName["SPEECH_ERROR"] = "Accessibility.ReadAnything.SpeechError";
    UmaName["SPEECH_PLAYBACK"] = "Accessibility.ReadAnything.SpeechPlaybackSession";
    UmaName["SPEECH_PLAYBACK_PER_PAGE"] = "Accessibility.ReadAnything.SpeechPlaybackSession.PerPage";
    UmaName["PDF_HEADING_TO_PARAGRAPH_RATIO"] = "Accessibility.ReadAnything.Pdf.HeadingToParagraphRatio";
    UmaName["PDF_NUMBER_PARAGRAPHS"] = "Accessibility.ReadAnything.Pdf.NumberParagraphs";
    UmaName["SPEECH_SETTINGS_CHANGE"] = "Accessibility.ReadAnything.ReadAloud.SettingsChange";
    UmaName["SETTINGS_ACTION"] = "Accessibility.ReadAnything.SettingsAction";
    UmaName["TEXT_SETTINGS_CHANGE"] = "Accessibility.ReadAnything.SettingsChange";
    UmaName["TOTAL_HEADER_COUNT"] = "Accessibility.ReadAnything.DistilledPageStructure.TotalHeaderCount";
    UmaName["TOP_TWO_HEADERS_COUNT"] = "Accessibility.ReadAnything.DistilledPageStructure.TopTwoHeadersCount";
    UmaName["TOP_TWO_HEADERS_HAVE_MINIMUM_TWO_ITEMS"] = "Accessibility.ReadAnything.DistilledPageStructure.TopTwoHeadersHaveMinimumTwoItems";
    UmaName["TOP_TWO_HEADING_RATIO"] = "Accessibility.ReadAnything.DistilledPageStructure.TopTwoHeadingRatio";
    UmaName["UNIQUE_HEADER_TAGS"] = "Accessibility.ReadAnything.DistilledPageStructure.UniqueHeaderTags";
    UmaName["VOICE"] = "Accessibility.ReadAnything.ReadAloud.Voice";
    UmaName["VOICE_LANGUAGE_CHANGE"] = "Accessibility.ReadAnything.ReadAloud.VoiceLanguageChange";
    UmaName["VOICE_SPEED"] = "Accessibility.ReadAnything.ReadAloud.VoiceSpeed";
    UmaName["MATHML_DISTILLATION_STATUS"] = "Accessibility.ReadAnything.MathML.DistillationStatus";
    UmaName["MATHML_PRESENT_ON_PAGE"] = "Accessibility.ReadAnything.MathML.PresentOnPage";
})(UmaName || (UmaName = {}));
// Enum for logging MathML distillation status. Recorded once per distilled page
// when at least one MathML element is present on the original page.
//
// Categorizes how math formulas were captured in the distilled Reading Mode
// DOM:
// - ONLY_MATHML: only native <math> elements were captured.
// - MIXED_MATHML_AND_FALLBACK: both native <math> and fallbacks were captured.
// - ONLY_FALLBACK: only math fallbacks (images with LaTeX/math class, or math
// containers) were captured.
// - NOT_DISTILLED_*: no math was captured in Reading Mode.
//
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAnythingMathMlDistillationStatus)
export var ReadAnythingMathMlDistillationStatus;
(function (ReadAnythingMathMlDistillationStatus) {
    ReadAnythingMathMlDistillationStatus[ReadAnythingMathMlDistillationStatus["ONLY_MATHML"] = 0] = "ONLY_MATHML";
    ReadAnythingMathMlDistillationStatus[ReadAnythingMathMlDistillationStatus["MIXED_MATHML_AND_FALLBACK"] = 1] = "MIXED_MATHML_AND_FALLBACK";
    ReadAnythingMathMlDistillationStatus[ReadAnythingMathMlDistillationStatus["ONLY_FALLBACK"] = 2] = "ONLY_FALLBACK";
    ReadAnythingMathMlDistillationStatus[ReadAnythingMathMlDistillationStatus["NOT_DISTILLED_READABILITY"] = 3] = "NOT_DISTILLED_READABILITY";
    ReadAnythingMathMlDistillationStatus[ReadAnythingMathMlDistillationStatus["NOT_DISTILLED_SCREEN2X"] = 4] = "NOT_DISTILLED_SCREEN2X";
    // Must be last.
    ReadAnythingMathMlDistillationStatus[ReadAnythingMathMlDistillationStatus["COUNT"] = 5] = "COUNT";
})(ReadAnythingMathMlDistillationStatus || (ReadAnythingMathMlDistillationStatus = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingMathMlDistillationStatus)
// Enum for logging when we play speech on a page.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAnythingNewPage)
export var ReadAnythingNewPage;
(function (ReadAnythingNewPage) {
    ReadAnythingNewPage[ReadAnythingNewPage["NEW_PAGE"] = 0] = "NEW_PAGE";
    ReadAnythingNewPage[ReadAnythingNewPage["SPEECH_PLAYED_ON_NEW_PAGE"] = 1] = "SPEECH_PLAYED_ON_NEW_PAGE";
    // Must be last.
    ReadAnythingNewPage[ReadAnythingNewPage["COUNT"] = 2] = "COUNT";
})(ReadAnythingNewPage || (ReadAnythingNewPage = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingNewPage)
// Enum for logging which kind of voice is being used to read aloud.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAnythingVoiceType)
export var ReadAnythingVoiceType;
(function (ReadAnythingVoiceType) {
    ReadAnythingVoiceType[ReadAnythingVoiceType["NATURAL"] = 0] = "NATURAL";
    ReadAnythingVoiceType[ReadAnythingVoiceType["ESPEAK"] = 1] = "ESPEAK";
    ReadAnythingVoiceType[ReadAnythingVoiceType["CHROMEOS"] = 2] = "CHROMEOS";
    ReadAnythingVoiceType[ReadAnythingVoiceType["SYSTEM"] = 3] = "SYSTEM";
    // Must be last.
    ReadAnythingVoiceType[ReadAnythingVoiceType["COUNT"] = 4] = "COUNT";
})(ReadAnythingVoiceType || (ReadAnythingVoiceType = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingReadAloudVoice2)
// Enum for logging when a text style setting is changed.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAnythingSettingsChange)
export var ReadAnythingSettingsChange;
(function (ReadAnythingSettingsChange) {
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["FONT_CHANGE"] = 0] = "FONT_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["FONT_SIZE_CHANGE"] = 1] = "FONT_SIZE_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["THEME_CHANGE"] = 2] = "THEME_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LINE_HEIGHT_CHANGE"] = 3] = "LINE_HEIGHT_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LETTER_SPACING_CHANGE"] = 4] = "LETTER_SPACING_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LINKS_ENABLED_CHANGE"] = 5] = "LINKS_ENABLED_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["IMAGES_ENABLED_CHANGE"] = 6] = "IMAGES_ENABLED_CHANGE";
    // LINE_FOCUS_CHANGE = 7, // no longer used, split into style and movement
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LINE_FOCUS_STYLE_CHANGE"] = 8] = "LINE_FOCUS_STYLE_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LINE_FOCUS_MOVEMENT_CHANGE"] = 9] = "LINE_FOCUS_MOVEMENT_CHANGE";
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["LINE_FOCUS_TOGGLE"] = 10] = "LINE_FOCUS_TOGGLE";
    // Must be last.
    ReadAnythingSettingsChange[ReadAnythingSettingsChange["COUNT"] = 11] = "COUNT";
})(ReadAnythingSettingsChange || (ReadAnythingSettingsChange = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingSettingsChange)
// Enum for logging when an action from the settings menu is executed.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAnythingSettingsAction)
export var ReadAnythingSettingsAction;
(function (ReadAnythingSettingsAction) {
    ReadAnythingSettingsAction[ReadAnythingSettingsAction["TRANSLATE_ACTION"] = 0] = "TRANSLATE_ACTION";
    ReadAnythingSettingsAction[ReadAnythingSettingsAction["SEND_FEEDBACK_ACTION"] = 1] = "SEND_FEEDBACK_ACTION";
    // Must be last.
    ReadAnythingSettingsAction[ReadAnythingSettingsAction["COUNT"] = 2] = "COUNT";
})(ReadAnythingSettingsAction || (ReadAnythingSettingsAction = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingSettingsAction)
// Enum for logging the reading highlight granularity.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAloudHighlightGranularity)
export var ReadAloudHighlightGranularity;
(function (ReadAloudHighlightGranularity) {
    ReadAloudHighlightGranularity[ReadAloudHighlightGranularity["HIGHLIGHT_AUTO"] = 0] = "HIGHLIGHT_AUTO";
    ReadAloudHighlightGranularity[ReadAloudHighlightGranularity["HIGHLIGHT_OFF"] = 1] = "HIGHLIGHT_OFF";
    ReadAloudHighlightGranularity[ReadAloudHighlightGranularity["HIGHLIGHT_WORD"] = 2] = "HIGHLIGHT_WORD";
    ReadAloudHighlightGranularity[ReadAloudHighlightGranularity["HIGHLIGHT_PHRASE"] = 3] = "HIGHLIGHT_PHRASE";
    ReadAloudHighlightGranularity[ReadAloudHighlightGranularity["HIGHLIGHT_SENTENCE"] = 4] = "HIGHLIGHT_SENTENCE";
    // Must be last.
    ReadAloudHighlightGranularity[ReadAloudHighlightGranularity["COUNT"] = 5] = "COUNT";
})(ReadAloudHighlightGranularity || (ReadAloudHighlightGranularity = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingHighlightGranularity)
// Enum for logging when a read aloud speech setting is changed.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAloudSettingsChange)
export var ReadAloudSettingsChange;
(function (ReadAloudSettingsChange) {
    ReadAloudSettingsChange[ReadAloudSettingsChange["VOICE_SPEED_CHANGE"] = 0] = "VOICE_SPEED_CHANGE";
    ReadAloudSettingsChange[ReadAloudSettingsChange["VOICE_NAME_CHANGE"] = 1] = "VOICE_NAME_CHANGE";
    ReadAloudSettingsChange[ReadAloudSettingsChange["HIGHLIGHT_CHANGE"] = 2] = "HIGHLIGHT_CHANGE";
    ReadAloudSettingsChange[ReadAloudSettingsChange["LANGUAGE_TOGGLE"] = 3] = "LANGUAGE_TOGGLE";
    ReadAloudSettingsChange[ReadAloudSettingsChange["ACCENT_CHANGE"] = 4] = "ACCENT_CHANGE";
    // Must be last.
    ReadAloudSettingsChange[ReadAloudSettingsChange["COUNT"] = 5] = "COUNT";
})(ReadAloudSettingsChange || (ReadAloudSettingsChange = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/accessibility/enums.xml:ReadAnythingReadAloudSettingsChange)
// Enum for logging when a speech error event occurs.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
//
// LINT.IfChange(ReadAnythingSpeechError)
export var ReadAnythingSpeechError;
(function (ReadAnythingSpeechError) {
    ReadAnythingSpeechError[ReadAnythingSpeechError["TEXT_TOO_LONG"] = 0] = "TEXT_TOO_LONG";
    ReadAnythingSpeechError[ReadAnythingSpeechError["LANGUAGE_UNAVAILABLE"] = 1] = "LANGUAGE_UNAVAILABLE";
    ReadAnythingSpeechError[ReadAnythingSpeechError["VOICE_UNAVAILABE"] = 2] = "VOICE_UNAVAILABE";
    ReadAnythingSpeechError[ReadAnythingSpeechError["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    ReadAnythingSpeechError[ReadAnythingSpeechError["SYNTHESIS_FAILED"] = 4] = "SYNTHESIS_FAILED";
    ReadAnythingSpeechError[ReadAnythingSpeechError["SYNTHESIS_UNVAILABLE"] = 5] = "SYNTHESIS_UNVAILABLE";
    ReadAnythingSpeechError[ReadAnythingSpeechError["AUDIO_BUSY"] = 6] = "AUDIO_BUSY";
    ReadAnythingSpeechError[ReadAnythingSpeechError["AUDIO_HARDWARE"] = 7] = "AUDIO_HARDWARE";
    ReadAnythingSpeechError[ReadAnythingSpeechError["NETWORK"] = 8] = "NETWORK";
    ReadAnythingSpeechError[ReadAnythingSpeechError["TIMEOUT_ENGINE_STALLED"] = 9] = "TIMEOUT_ENGINE_STALLED";
    ReadAnythingSpeechError[ReadAnythingSpeechError["TIMEOUT_STALLED_AFTER_ENGINE_RECOVERY"] = 10] = "TIMEOUT_STALLED_AFTER_ENGINE_RECOVERY";
    // Must be last.
    ReadAnythingSpeechError[ReadAnythingSpeechError["COUNT"] = 11] = "COUNT";
})(ReadAnythingSpeechError || (ReadAnythingSpeechError = {}));
export class MetricsBrowserProxyImpl {
    incrementMetricCount(umaName) {
        chrome.readingMode.incrementMetricCount(umaName);
    }
    recordEmptyState() {
        chrome.readingMode.logEmptyState();
    }
    recordLineFocusSession() {
        chrome.readingMode.logLineFocusSession();
    }
    startLineFocusSession() {
        chrome.readingMode.startLineFocusSession();
    }
    incrementLineFocusKeyboardLines() {
        chrome.readingMode.incrementLineFocusKeyboardLines();
    }
    incrementLineFocusSpeechLines() {
        chrome.readingMode.incrementLineFocusSpeechLines();
    }
    addLineFocusScrollDistance(distance) {
        chrome.readingMode.addLineFocusScrollDistance(distance);
    }
    addLineFocusMouseDistance(distance) {
        chrome.readingMode.addLineFocusMouseDistance(distance);
    }
    recordLineFocusToggled(enabled) {
        chrome.metricsPrivate.recordBoolean(UmaName.LINE_FOCUS_TOGGLE, enabled);
    }
    recordSpeechStopSource(source) {
        chrome.readingMode.logSpeechStop(source);
    }
    recordSpeechError(error) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.SPEECH_ERROR, error, ReadAnythingSpeechError.COUNT);
    }
    recordTime(umaName, time) {
        chrome.metricsPrivate.recordTime(umaName, time);
    }
    recordNewPage() {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.NEW_PAGE, ReadAnythingNewPage.NEW_PAGE, ReadAnythingNewPage.COUNT);
    }
    recordNewPageWithSpeech() {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.NEW_PAGE, ReadAnythingNewPage.SPEECH_PLAYED_ON_NEW_PAGE, ReadAnythingNewPage.COUNT);
    }
    recordHighlightGranularity(highlight) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.HIGHLIGHT_GRANULARITY, highlight, ReadAloudHighlightGranularity.COUNT);
    }
    recordVoiceType(voiceType) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.VOICE, voiceType, ReadAnythingVoiceType.COUNT);
    }
    recordVoiceLanguageChange() {
        this.incrementMetricCount(UmaName.VOICE_LANGUAGE_CHANGE);
    }
    recordLanguage(lang) {
        chrome.metricsPrivate.recordSparseValueWithHashMetricName(UmaName.LANGUAGE, lang);
    }
    recordSettingsAction(settingsAction) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.SETTINGS_ACTION, settingsAction, ReadAnythingSettingsAction.COUNT);
    }
    recordTextSettingsChange(settingsChange) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.TEXT_SETTINGS_CHANGE, settingsChange, ReadAnythingSettingsChange.COUNT);
    }
    recordSpeechSettingsChange(settingsChange) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.SPEECH_SETTINGS_CHANGE, settingsChange, ReadAloudSettingsChange.COUNT);
    }
    recordVoiceSpeed(index) {
        chrome.metricsPrivate.recordSmallCount(UmaName.VOICE_SPEED, index);
    }
    recordSpeechPlaybackLength(umaName, time) {
        chrome.metricsPrivate.recordLongTime(umaName, time);
    }
    recordSpeechPlaybackLengthLegacy(time) {
        chrome.metricsPrivate.recordLongTime(UmaName.SPEECH_PLAYBACK, time);
    }
    recordExtensionState() {
        chrome.readingMode.logExtensionState();
    }
    recordCount(umaName, count) {
        chrome.metricsPrivate.recordCount(umaName, count);
    }
    recordBoolean(umaName, value) {
        chrome.metricsPrivate.recordBoolean(umaName, value);
    }
    recordMathMlDistillationStatus(status) {
        chrome.metricsPrivate.recordEnumerationValue(UmaName.MATHML_DISTILLATION_STATUS, status, ReadAnythingMathMlDistillationStatus.COUNT);
    }
    updateWordsSeen(wordsSeen) {
        chrome.readingMode.updateWordsSeen(wordsSeen);
    }
    updateWordsHeard(wordsHeard) {
        chrome.readingMode.updateWordsHeard(wordsHeard);
    }
    static getInstance() {
        return instance || (instance = new MetricsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
