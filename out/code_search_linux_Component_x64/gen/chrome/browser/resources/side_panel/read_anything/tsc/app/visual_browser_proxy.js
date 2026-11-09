// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EventForwarder } from '../content/read_anything_types.js';
export class VisualBrowserProxyImpl {
    onPinStateReceived = new EventForwarder();
    onPresentationStateReceived = new EventForwarder();
    onAwaitingTranslationChanged = new EventForwarder();
    restoreSettingsFromPrefs = new EventForwarder();
    constructor() {
        chrome.readingMode.onPinStateReceived = (pinState) => {
            this.onPinStateReceived.forward(pinState);
        };
        chrome.readingMode.onPresentationStateReceived =
            (presentationState) => {
                this.onPresentationStateReceived.forward(presentationState);
            };
        chrome.readingMode.onAwaitingTranslationChanged = (awaiting) => {
            this.onAwaitingTranslationChanged.forward(awaiting);
        };
        chrome.readingMode.restoreSettingsFromPrefs = () => {
            this.restoreSettingsFromPrefs.forward();
        };
    }
    getInSidePanelPresentationState() {
        return chrome.readingMode.inSidePanelPresentationState;
    }
    getInImmersiveOverlayPresentationState() {
        return chrome.readingMode.inImmersiveOverlayPresentationState;
    }
    getInHiddenPresentationState() {
        return chrome.readingMode.inHiddenPresentationState;
    }
    getActivePresentationState() {
        return chrome.readingMode.activePresentationState;
    }
    isReadAnythingReadAloudExperimentalPlaybackUiEnabled() {
        return chrome.readingMode
            .isReadAnythingReadAloudExperimentalPlaybackUiEnabled;
    }
    isImagesEnabled() {
        return chrome.readingMode.imagesEnabled;
    }
    isLinksEnabled() {
        return chrome.readingMode.linksEnabled;
    }
    isPdf() {
        return chrome.readingMode.isPdf;
    }
    isAwaitingTranslation() {
        return chrome.readingMode.isAwaitingTranslation;
    }
    getMaxLineWidth() {
        return chrome.readingMode.maxLineWidth;
    }
    getFontName() {
        return chrome.readingMode.fontName;
    }
    getSupportedFonts() {
        return chrome.readingMode.supportedFonts;
    }
    getAllFonts() {
        return chrome.readingMode.allFonts;
    }
    getValidatedFontName(font) {
        return chrome.readingMode.getValidatedFontName(font);
    }
    getStandardLineSpacing() {
        return chrome.readingMode.standardLineSpacing;
    }
    getLooseLineSpacing() {
        return chrome.readingMode.looseLineSpacing;
    }
    getVeryLooseLineSpacing() {
        return chrome.readingMode.veryLooseLineSpacing;
    }
    getLineSpacing() {
        return chrome.readingMode.lineSpacing;
    }
    getLineSpacingValue(lineSpacing) {
        return chrome.readingMode.getLineSpacingValue(lineSpacing);
    }
    // LINT.IfChange(FontScale)
    getMinFontSize() {
        return 0.5;
    }
    getMaxFontSize() {
        return 4.5;
    }
    // LINT.ThenChange(/chrome/common/read_anything/read_anything_util.cc:FontScale)
    getDefaultFontSize() {
        return 2.0;
    }
    getFontSize() {
        return chrome.readingMode.fontSize;
    }
    getStandardLetterSpacing() {
        return chrome.readingMode.standardLetterSpacing;
    }
    getWideLetterSpacing() {
        return chrome.readingMode.wideLetterSpacing;
    }
    getVeryWideLetterSpacing() {
        return chrome.readingMode.veryWideLetterSpacing;
    }
    getLetterSpacing() {
        return chrome.readingMode.letterSpacing;
    }
    getLetterSpacingValue(letterSpacing) {
        return chrome.readingMode.getLetterSpacingValue(letterSpacing);
    }
    getDefaultTheme() {
        return chrome.readingMode.defaultTheme;
    }
    getLightTheme() {
        return chrome.readingMode.lightTheme;
    }
    getDarkTheme() {
        return chrome.readingMode.darkTheme;
    }
    getYellowTheme() {
        return chrome.readingMode.yellowTheme;
    }
    getBlueTheme() {
        return chrome.readingMode.blueTheme;
    }
    getHighContrastTheme() {
        return chrome.readingMode.highContrastTheme;
    }
    getLowContrastLightTheme() {
        return chrome.readingMode.lowContrastLightTheme;
    }
    getLowContrastDarkTheme() {
        return chrome.readingMode.lowContrastDarkTheme;
    }
    getColorTheme() {
        return chrome.readingMode.colorTheme;
    }
    getOriginalPageMetrics() {
        return chrome.readingMode.getOriginalPageMetrics();
    }
    getKeyPointsRegex() {
        return chrome.readingMode.getKeyPointsRegex();
    }
    requestImageData(nodeId) {
        chrome.readingMode.requestImageData(nodeId);
    }
    isLineFocusEnabled() {
        return chrome.readingMode.isLineFocusEnabled;
    }
    getLineFocusOff() {
        return chrome.readingMode.lineFocusOff;
    }
    getLineFocusSmallStaticWindow() {
        return chrome.readingMode.lineFocusSmallStaticWindow;
    }
    getLineFocusMediumStaticWindow() {
        return chrome.readingMode.lineFocusMediumStaticWindow;
    }
    getLineFocusLargeStaticWindow() {
        return chrome.readingMode.lineFocusLargeStaticWindow;
    }
    getLineFocusSmallCursorWindow() {
        return chrome.readingMode.lineFocusSmallCursorWindow;
    }
    getLineFocusMediumCursorWindow() {
        return chrome.readingMode.lineFocusMediumCursorWindow;
    }
    getLineFocusLargeCursorWindow() {
        return chrome.readingMode.lineFocusLargeCursorWindow;
    }
    getLineFocusStaticLine() {
        return chrome.readingMode.lineFocusStaticLine;
    }
    getLineFocusCursorLine() {
        return chrome.readingMode.lineFocusCursorLine;
    }
    onFontChange(font) {
        chrome.readingMode.onFontChange(font);
    }
    onLineSpacingChange(value) {
        chrome.readingMode.onLineSpacingChange(value);
    }
    onLetterSpacingChange(value) {
        chrome.readingMode.onLetterSpacingChange(value);
    }
    onThemeChange(theme) {
        chrome.readingMode.onThemeChange(theme);
    }
    onLineFocusChanged(value, lastNonDisabledValue) {
        chrome.readingMode.onLineFocusChanged(value, lastNonDisabledValue);
    }
    onFontSizeChanged(increase) {
        chrome.readingMode.onFontSizeChanged(increase);
    }
    onFontSizeReset() {
        chrome.readingMode.onFontSizeReset();
    }
    isReadAnythingTranslateEntryPointEnabled() {
        return chrome.readingMode.isReadAnythingTranslateEntryPointEnabled;
    }
    onTranslationRequested() {
        chrome.readingMode.onTranslationRequested();
    }
    isReadAnythingSendFeedbackEnabled() {
        return chrome.readingMode.isReadAnythingSendFeedbackEnabled;
    }
    togglePresentation() {
        chrome.readingMode.togglePresentation();
    }
    close() {
        chrome.readingMode.close();
    }
    onLinksEnabledToggled() {
        chrome.readingMode.onLinksEnabledToggled();
    }
    onImagesEnabledToggled() {
        chrome.readingMode.onImagesEnabledToggled();
    }
    isReadAnythingImprovedUiEnabled() {
        return chrome.readingMode.isReadAnythingImprovedUiEnabled;
    }
    togglePinState() {
        chrome.readingMode.togglePinState();
    }
    sendPinStateRequest() {
        chrome.readingMode.sendPinStateRequest();
    }
    sendGetPresentationStateRequest() {
        chrome.readingMode.sendGetPresentationStateRequest();
    }
    shouldShowUi() {
        return chrome.readingMode.shouldShowUi();
    }
    getLastNonDisabledLineFocus() {
        return chrome.readingMode.lastNonDisabledLineFocus;
    }
    isLineFocusOn() {
        return chrome.readingMode.isLineFocusOn;
    }
    static getInstance() {
        return instance || (instance = new VisualBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
