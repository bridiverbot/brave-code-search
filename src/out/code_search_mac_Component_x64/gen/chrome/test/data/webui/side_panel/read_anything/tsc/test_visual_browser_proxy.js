// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeChromeEvent } from 'chrome-untrusted://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
export class TestVisualBrowserProxy extends TestBrowserProxy {
    onPinStateReceived = new FakeChromeEvent();
    onPresentationStateReceived = new FakeChromeEvent();
    onAwaitingTranslationChanged = new FakeChromeEvent();
    restoreSettingsFromPrefs = new FakeChromeEvent();
    inSidePanelPresentationState = 1;
    inImmersiveOverlayPresentationState = 2;
    inHiddenPresentationState = 3;
    fontName = 'Poppins';
    supportedFonts = [];
    allFonts = ['Poppins', 'Sans-serif', 'Serif'];
    standardLineSpacing = 0;
    looseLineSpacing = 1;
    veryLooseLineSpacing = 2;
    standardLetterSpacing = 0;
    wideLetterSpacing = 1;
    veryWideLetterSpacing = 2;
    defaultTheme = 0;
    lightTheme = 1;
    darkTheme = 2;
    yellowTheme = 3;
    blueTheme = 4;
    highContrastTheme = 5;
    lowContrastLightTheme = 6;
    lowContrastDarkTheme = 7;
    minFontSize = 1;
    maxFontSize = 20;
    defaultFontSize = 10;
    fontSize = 10;
    lineSpacing = 0;
    activeDistillationMethod = 0;
    distillationTypeScreen2x = 0;
    distillationTypeReadability = 1;
    lineFocusEnabled = true;
    lineFocusOn = false;
    lineFocusOff = 50;
    lineFocusSmallStaticWindow = 51;
    lineFocusMediumStaticWindow = 52;
    lineFocusLargeStaticWindow = 53;
    lineFocusSmallCursorWindow = 54;
    lineFocusMediumCursorWindow = 55;
    lineFocusLargeCursorWindow = 56;
    lineFocusStaticLine = 57;
    lineFocusCursorLine = 58;
    lineFocusValue = 50;
    lineFocusLastNonDisabledValue = 50;
    activePresentationState = 1;
    pdf = false;
    awaitingTranslation = false;
    originalPageMetrics = {
        hasMathML: false,
        maybeHasKeyPoints: false,
    };
    keyPointsRegex = 'key points|summary|the bottom line|why it matters';
    maxLineWidth = 60;
    letterSpacing = 0;
    colorTheme = 0;
    translateEntryPointEnabled = false;
    sendFeedbackEnabled = false;
    experimentalPlaybackUiEnabled = false;
    imagesEnabled = true;
    linksEnabled = true;
    readAnythingImprovedUiEnabled = false;
    fetchedImages = [];
    constructor() {
        super([
            'getInSidePanelPresentationState',
            'getInImmersiveOverlayPresentationState',
            'getInHiddenPresentationState',
            'isReadAnythingReadAloudExperimentalPlaybackUiEnabled',
            'getFontName',
            'getSupportedFonts',
            'getAllFonts',
            'getValidatedFontName',
            'getStandardLineSpacing',
            'getLooseLineSpacing',
            'getVeryLooseLineSpacing',
            'getLineSpacing',
            'getLineSpacingValue',
            'getMinFontSize',
            'getMaxFontSize',
            'getDefaultFontSize',
            'getFontSize',
            'getStandardLetterSpacing',
            'getWideLetterSpacing',
            'getVeryWideLetterSpacing',
            'getLetterSpacing',
            'getLetterSpacingValue',
            'getDefaultTheme',
            'getLightTheme',
            'getDarkTheme',
            'getYellowTheme',
            'getBlueTheme',
            'getHighContrastTheme',
            'getLowContrastLightTheme',
            'getLowContrastDarkTheme',
            'getColorTheme',
            'requestImageData',
            'isLineFocusEnabled',
            'getLineFocusOff',
            'getLineFocusSmallStaticWindow',
            'getLineFocusMediumStaticWindow',
            'getLineFocusLargeStaticWindow',
            'getLineFocusSmallCursorWindow',
            'getLineFocusMediumCursorWindow',
            'getLineFocusLargeCursorWindow',
            'getLineFocusStaticLine',
            'getLineFocusCursorLine',
            'onFontChange',
            'onLineSpacingChange',
            'onLetterSpacingChange',
            'onThemeChange',
            'onLineFocusChanged',
            'onFontSizeChanged',
            'onFontSizeReset',
            'isReadAnythingTranslateEntryPointEnabled',
            'onTranslationRequested',
            'isReadAnythingSendFeedbackEnabled',
            'togglePresentation',
            'togglePinState',
            'sendPinStateRequest',
            'sendGetPresentationStateRequest',
            'shouldShowUi',
            'getLastNonDisabledLineFocus',
            'isLineFocusOn',
            'close',
            'isReadAnythingImprovedUiEnabled',
            'isImagesEnabled',
            'isLinksEnabled',
            'getActivePresentationState',
            'isPdf',
            'isAwaitingTranslation',
            'getMaxLineWidth',
            'getOriginalPageMetrics',
            'getKeyPointsRegex',
            'onLinksEnabledToggled',
            'onImagesEnabledToggled',
        ]);
    }
    getInSidePanelPresentationState() {
        this.methodCalled('getInSidePanelPresentationState');
        return this.inSidePanelPresentationState;
    }
    getInImmersiveOverlayPresentationState() {
        this.methodCalled('getInImmersiveOverlayPresentationState');
        return this.inImmersiveOverlayPresentationState;
    }
    getFontName() {
        this.methodCalled('getFontName');
        return this.fontName;
    }
    getSupportedFonts() {
        this.methodCalled('getSupportedFonts');
        return this.supportedFonts;
    }
    getStandardLineSpacing() {
        this.methodCalled('getStandardLineSpacing');
        return this.standardLineSpacing;
    }
    getLooseLineSpacing() {
        this.methodCalled('getLooseLineSpacing');
        return this.looseLineSpacing;
    }
    getVeryLooseLineSpacing() {
        this.methodCalled('getVeryLooseLineSpacing');
        return this.veryLooseLineSpacing;
    }
    getLineSpacing() {
        this.methodCalled('getLineSpacing');
        return this.lineSpacing;
    }
    getLineSpacingValue(lineSpacing) {
        this.methodCalled('getLineSpacingValue', lineSpacing);
        return lineSpacing + 1;
    }
    getMinFontSize() {
        this.methodCalled('getMinFontSize');
        return this.minFontSize;
    }
    getMaxFontSize() {
        this.methodCalled('getMaxFontSize');
        return this.maxFontSize;
    }
    getDefaultFontSize() {
        this.methodCalled('getDefaultFontSize');
        return this.defaultFontSize;
    }
    getFontSize() {
        this.methodCalled('getFontSize');
        return this.fontSize;
    }
    getStandardLetterSpacing() {
        this.methodCalled('getStandardLetterSpacing');
        return this.standardLetterSpacing;
    }
    getWideLetterSpacing() {
        this.methodCalled('getWideLetterSpacing');
        return this.wideLetterSpacing;
    }
    getVeryWideLetterSpacing() {
        this.methodCalled('getVeryWideLetterSpacing');
        return this.veryWideLetterSpacing;
    }
    getDefaultTheme() {
        this.methodCalled('getDefaultTheme');
        return this.defaultTheme;
    }
    getLightTheme() {
        this.methodCalled('getLightTheme');
        return this.lightTheme;
    }
    getDarkTheme() {
        this.methodCalled('getDarkTheme');
        return this.darkTheme;
    }
    getYellowTheme() {
        this.methodCalled('getYellowTheme');
        return this.yellowTheme;
    }
    getBlueTheme() {
        this.methodCalled('getBlueTheme');
        return this.blueTheme;
    }
    getHighContrastTheme() {
        this.methodCalled('getHighContrastTheme');
        return this.highContrastTheme;
    }
    getLowContrastLightTheme() {
        this.methodCalled('getLowContrastLightTheme');
        return this.lowContrastLightTheme;
    }
    getLowContrastDarkTheme() {
        this.methodCalled('getLowContrastDarkTheme');
        return this.lowContrastDarkTheme;
    }
    getColorTheme() {
        this.methodCalled('getColorTheme');
        return this.colorTheme;
    }
    getMaxLineWidth() {
        this.methodCalled('getMaxLineWidth');
        return this.maxLineWidth;
    }
    getValidatedFontName(font) {
        this.methodCalled('getValidatedFontName', font);
        return font;
    }
    getLetterSpacing() {
        this.methodCalled('getLetterSpacing');
        return this.letterSpacing;
    }
    getLetterSpacingValue(letterSpacing) {
        this.methodCalled('getLetterSpacingValue', letterSpacing);
        return letterSpacing;
    }
    requestImageData(nodeId) {
        this.methodCalled('requestImageData', nodeId);
        this.fetchedImages.push(nodeId);
    }
    isLineFocusEnabled() {
        this.methodCalled('isLineFocusEnabled');
        return this.lineFocusEnabled;
    }
    getLineFocusOff() {
        this.methodCalled('getLineFocusOff');
        return this.lineFocusOff;
    }
    getLineFocusSmallStaticWindow() {
        this.methodCalled('getLineFocusSmallStaticWindow');
        return this.lineFocusSmallStaticWindow;
    }
    getLineFocusMediumStaticWindow() {
        this.methodCalled('getLineFocusMediumStaticWindow');
        return this.lineFocusMediumStaticWindow;
    }
    getLineFocusLargeStaticWindow() {
        this.methodCalled('getLineFocusLargeStaticWindow');
        return this.lineFocusLargeStaticWindow;
    }
    getLineFocusSmallCursorWindow() {
        this.methodCalled('getLineFocusSmallCursorWindow');
        return this.lineFocusSmallCursorWindow;
    }
    getLineFocusMediumCursorWindow() {
        this.methodCalled('getLineFocusMediumCursorWindow');
        return this.lineFocusMediumCursorWindow;
    }
    getLineFocusLargeCursorWindow() {
        this.methodCalled('getLineFocusLargeCursorWindow');
        return this.lineFocusLargeCursorWindow;
    }
    getLineFocusStaticLine() {
        this.methodCalled('getLineFocusStaticLine');
        return this.lineFocusStaticLine;
    }
    getLineFocusCursorLine() {
        this.methodCalled('getLineFocusCursorLine');
        return this.lineFocusCursorLine;
    }
    onFontChange(font) {
        this.methodCalled('onFontChange', font);
        this.fontName = font;
    }
    onLineSpacingChange(value) {
        this.methodCalled('onLineSpacingChange', value);
        this.lineSpacing = value;
    }
    onLetterSpacingChange(value) {
        this.methodCalled('onLetterSpacingChange', value);
        this.letterSpacing = value;
    }
    onThemeChange(theme) {
        this.methodCalled('onThemeChange', theme);
        this.colorTheme = theme;
    }
    onLineFocusChanged(value, lastNonDisabledValue) {
        this.methodCalled('onLineFocusChanged', value, lastNonDisabledValue);
        this.lineFocusValue = value;
        this.lineFocusLastNonDisabledValue = lastNonDisabledValue;
    }
    togglePresentation() {
        this.methodCalled('togglePresentation');
    }
    isImagesEnabled() {
        this.methodCalled('isImagesEnabled');
        return this.imagesEnabled;
    }
    isLinksEnabled() {
        this.methodCalled('isLinksEnabled');
        return this.linksEnabled;
    }
    getActivePresentationState() {
        this.methodCalled('getActivePresentationState');
        return this.activePresentationState;
    }
    isPdf() {
        this.methodCalled('isPdf');
        return this.pdf;
    }
    isAwaitingTranslation() {
        this.methodCalled('isAwaitingTranslation');
        return this.awaitingTranslation;
    }
    getOriginalPageMetrics() {
        this.methodCalled('getOriginalPageMetrics');
        return this.originalPageMetrics;
    }
    getKeyPointsRegex() {
        this.methodCalled('getKeyPointsRegex');
        return this.keyPointsRegex;
    }
    getInHiddenPresentationState() {
        this.methodCalled('getInHiddenPresentationState');
        return this.inHiddenPresentationState;
    }
    isReadAnythingReadAloudExperimentalPlaybackUiEnabled() {
        this.methodCalled('isReadAnythingReadAloudExperimentalPlaybackUiEnabled');
        return this.experimentalPlaybackUiEnabled;
    }
    close() {
        this.methodCalled('close');
    }
    getAllFonts() {
        this.methodCalled('getAllFonts');
        return this.allFonts;
    }
    onFontSizeChanged(increase) {
        this.methodCalled('onFontSizeChanged', increase);
        if (increase) {
            this.fontSize++;
        }
        else {
            this.fontSize--;
        }
    }
    onFontSizeReset() {
        this.methodCalled('onFontSizeReset');
        this.fontSize = this.defaultFontSize;
    }
    isReadAnythingTranslateEntryPointEnabled() {
        this.methodCalled('isReadAnythingTranslateEntryPointEnabled');
        return this.translateEntryPointEnabled;
    }
    onTranslationRequested() {
        this.methodCalled('onTranslationRequested');
    }
    isReadAnythingSendFeedbackEnabled() {
        this.methodCalled('isReadAnythingSendFeedbackEnabled');
        return this.sendFeedbackEnabled;
    }
    onLinksEnabledToggled() {
        this.methodCalled('onLinksEnabledToggled');
        this.linksEnabled = !this.linksEnabled;
    }
    onImagesEnabledToggled() {
        this.methodCalled('onImagesEnabledToggled');
        this.imagesEnabled = !this.imagesEnabled;
    }
    isReadAnythingImprovedUiEnabled() {
        this.methodCalled('isReadAnythingImprovedUiEnabled');
        return this.readAnythingImprovedUiEnabled;
    }
    togglePinState() {
        this.methodCalled('togglePinState');
    }
    sendPinStateRequest() {
        this.methodCalled('sendPinStateRequest');
    }
    sendGetPresentationStateRequest() {
        this.methodCalled('sendGetPresentationStateRequest');
    }
    shouldShowUi() {
        this.methodCalled('shouldShowUi');
        return true;
    }
    getLastNonDisabledLineFocus() {
        this.methodCalled('getLastNonDisabledLineFocus');
        return this.lineFocusLastNonDisabledValue;
    }
    isLineFocusOn() {
        this.methodCalled('isLineFocusOn');
        return this.lineFocusOn;
    }
}
