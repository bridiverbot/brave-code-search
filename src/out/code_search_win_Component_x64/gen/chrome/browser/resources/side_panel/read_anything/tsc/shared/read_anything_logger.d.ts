import type { ReadAloudSettingsChange, ReadAnythingSettingsAction, ReadAnythingSettingsChange } from './metrics_browser_proxy.js';
export declare enum TimeFrom {
    APP = "App",
    TOOLBAR = "Toolbar"
}
export declare enum SpeechControls {
    PLAY = "Play",
    PAUSE = "Pause",
    NEXT = "NextButton",
    PREVIOUS = "PreviousButton",
    PLAY_FROM_SELECTION = "PlayFromSelection",
    PLAY_FROM_LINE_FOCUS = "PlayFromLineFocus"
}
export declare enum LinkStatus {
    SUCCESS = "Success",
    NO_HREF = "NoHref",
    NO_MATCH = "NoMatch",
    TOO_MANY_MATCHES = "TooManyMatches"
}
export declare enum PageType {
    PDF = "PDF",
    WEB_PAGE = "WebPage"
}
export declare enum ViewMode {
    FULL_PAGE = "FullPage",
    SIDE_PANEL = "SidePanel"
}
export declare class ReadAnythingLogger {
    private metrics;
    private visualBrowserProxy_;
    private audioBrowserProxy_;
    private isHidden_;
    private hasUnloggedDistillation_;
    private savedWordCountContainer_;
    private keyPointsRegex_;
    setHidden(hidden: boolean): void;
    logEmptyState(): void;
    logSpeechStopSource(source: number): void;
    logSpeechError(errorCode: string): void;
    logTimeFrom(from: TimeFrom, startTime: number, endTime: number): void;
    logNewPage(speechPlayed: boolean): void;
    logHighlightGranularity(highlight: number): void;
    logVoiceLanguageChange(currentVoice: SpeechSynthesisVoice | null, newVoice: SpeechSynthesisVoice | null): void;
    private logVoiceTypeUsedForReading_;
    private logLanguageUsedForReading_;
    logSettingsAction(settingsAction: ReadAnythingSettingsAction): void;
    logTextSettingsChange(settingsChange: ReadAnythingSettingsChange): void;
    logSpeechSettingsChange(settingsChange: ReadAloudSettingsChange): void;
    logVoiceSpeed(index: number): void;
    logSpeechPlaySession(startTime: number, voice: SpeechSynthesisVoice | null): void;
    logSpeechPlaybackSessionPerPage(playbackTime: number): void;
    logSpeechControlClick(control: SpeechControls): void;
    logLineFocusSession(): void;
    logLineFocusToggled(enabled: boolean): void;
    logLinkStatusCount(status: LinkStatus, count: number): void;
    logDistilledPageStructure(wordCountContainer: Element): void;
    private logOriginalPageMetrics_;
    private logMathMlMetrics_;
    private isElementVisible_;
    private hasVisibleMathMl_;
    private hasVisibleMathFallback_;
    private logEnglishKeyPointsMetrics_;
    private logOverallStructureMetrics_;
    private logTopTwoHeaderMetrics_;
    private logPdfDistilledPageStructure_;
    static getHeaderCounts(wordCountContainer: Element): Array<{
        tag: string;
        count: number;
    }>;
    private getKeyPointsRegex_;
    static getInstance(): ReadAnythingLogger;
    static setInstance(obj: ReadAnythingLogger): void;
}
