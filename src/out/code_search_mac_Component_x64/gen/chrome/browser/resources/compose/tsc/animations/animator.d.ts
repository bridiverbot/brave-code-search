export declare const STANDARD_EASING = "cubic-bezier(0.2, 0.0, 0, 1.0)";
export declare const EMPHASIZED_DECELERATE = "cubic-bezier(0.05, 0.7, 0.1, 1.0)";
/**
 * Generic animator class that has common animations and util methods.
 */
export declare class Animator {
    private root_;
    private animationsEnabled_;
    constructor(root: HTMLElement, animationsEnabled: boolean);
    getElement(selector: string): HTMLElement;
    animate(selector: string, keyframes: Keyframe[], options: KeyframeAnimationOptions, meetsCondition?: boolean): Animation[];
    fadeIn(selector: string, options: KeyframeAnimationOptions): Animation[];
    fadeOut(selector: string, options: KeyframeAnimationOptions): Animation[];
    fadeOutAndHide(selector: string, beforeDisplay: string, options: KeyframeAnimationOptions): Animation[];
    maintainStyles(selector: string, styles: Keyframe, options: KeyframeAnimationOptions): Animation[];
    scaleIn(selector: string, options: KeyframeAnimationOptions): Animation[];
    slideIn(selector: string, startDistance: number, options: KeyframeAnimationOptions): Animation[];
    slideOut(selector: string, endDistance: number, options: KeyframeAnimationOptions): Animation[];
}
