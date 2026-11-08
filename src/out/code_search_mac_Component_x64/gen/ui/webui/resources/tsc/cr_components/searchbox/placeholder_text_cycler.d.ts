export declare enum AnimationState {
    FADE_IN = 0,
    HOLD = 1,
    FADE_OUT = 2
}
export interface AnimationDetails {
    startOpacity: number;
    endOpacity: number;
    duration: number;
    nextAnimationState: AnimationState;
}
/**
 * Responsible for cycling placeholder text animations on an HTMLInputElement.
 */
export declare class PlaceholderTextCycler {
    private input_;
    private animation_;
    private placeholderTexts_;
    private placeholderTextsCurrentIndex_;
    private changePlaceholderTextIntervalMs_;
    private fadePlaceholderTextDurationMs_;
    constructor(animatedPlaceholderContainer: HTMLInputElement | HTMLTextAreaElement, placeholderTexts: string[], changeTextAnimationIntervalMs: number, fadeTextAnimationDurationMs: number);
    start(): void;
    stop(): void;
    private animate_;
}
